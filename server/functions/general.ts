import posts from '../base/posts';

export const getPostById = (id: number): object | boolean => {
  for (const key in posts) {
    if (posts[key]['id'] === id) {
      return posts[key];
    }
  }

  return false;
}

export const getPost = (postUrl: string): object => {
  return posts[postUrl];
}

export const getPostsForPage = (page: number): object => {
  const postPerPage = 12;
  const bottomPage = (Object.keys(posts).length - (page*postPerPage)) < 0 ? 0 : (Object.keys(posts).length - (page*postPerPage));
  const topPage = bottomPage + postPerPage;
  const postsForPage = [];

  for (var index = 0; index < Object.keys(posts).length; index++) {
    if(posts[Object.keys(posts)[index]]['id'] < topPage && posts[Object.keys(posts)[index]]['id'] > bottomPage){
      const obj = { 
        id: posts[Object.keys(posts)[index]]['id'],
        name: posts[Object.keys(posts)[index]]['name'],
        urlName: posts[Object.keys(posts)[index]]['urlName'],
        dateString: posts[Object.keys(posts)[index]]['dateString'],
        mainPhotos: posts[Object.keys(posts)[index]]['mainPhotos'],
        author: posts[Object.keys(posts)[index]]['author'],
        description: posts[Object.keys(posts)[index]]['description'],
      }
      postsForPage.push(obj);
    }
  }

 return { pagesLength: Math.ceil(Object.keys(posts).length / postPerPage), postsForPage };
}

export const isPost = (query: object, pid: boolean): boolean => {
  let pidString = "";
  let id = 0;
  if (isQueryObjectComplete(query, 'id')) {
    pidString = getPagePid(query);
    id = parseInt(query['queryObject']['id']);
    const post = pid ? posts[pidString] : getPostById(id);
    if (typeof post === 'object') {
      if (isPidConsistentWithId(pidString, id)) {
        return isPostObjectSturcture(post);
      }
    }
  }

  return false;
}

const isPostObjectSturcture = (post: object): boolean => {
  const postStructure = {id: 1, name: 1, urlName: 1, dateString: 1, date: 1, mainPhotos: 1, model: 1, author: 1, related: 1, popular: 1, description: 1, structure: 1};
  if (Object.keys(postStructure).length !== Object.keys(post).length) {
    return false;
  }
  for (var index = 0; index < Object.keys(post).length; index++) {
    if(postStructure[Object.keys(post)[index]] !== 1){
      return false
    }
  }

  return true;
}

const getPagePid = (query: object): string => {
  let pid = '';
  if (query['path'] === 'posts') {
    pid = query['fullPath'].split('/')[2];
  }
  return pid;
}

const isPidConsistentWithId = (pid: string, id: number): boolean =>{
  const post = posts[pid];
  if (typeof post === 'object') {
    if (isPostObjectSturcture(post)) {
      if (post['id'] === id) {
        return true;
      }
    }
  }
  
  return false;
}

const isQueryObjectComplete = (query: object, property: string): boolean => {
  if (query['host']) {
    if (query['queryObject']) {
      if (query['queryObject'][property]) {
        return true;
      }
    }
  }

  return false;
}

export const getSecureLink = (url: string): string => {
  const link = parseLink(url);
  let res = link['fullPath'] ? `https://www.tvojauto.com/${link['fullPath']}?${link['queryString']}` : `https://www.tvojauto.com/`;
  if (link['host'] === 'localhost:3000') {
    res = link['fullPath'] ? `https://localhost:3000/${link['fullPath']}?${link['queryString']}` : `https://localhost:3000/`;
  }
 

  return res;
}

export const isLinkSecure = (url: string): boolean => {
  const link = parseLink(url);
  if (link['host'] !== 'localhost:3000' && link['host'].substr(-4) !== '.app') {
    if (link['protocol'] === 'http://') {
      return false;
    }
  }

  return true;
}

export const isWWWLink = (url: string): boolean => {
  const link = parseLink(url);
  console.log(link['host'].substr(-4))
  if (link['host'] !== 'localhost:3000' && link['host'].substr(-4) !== '.app') {
    if (link['host'].substr(0,4) === 'www.') {
      return true;
    }
  }else{
    return true;
  }

  return false;
}

export const parseLink = (link: string): object => {
  const urlObj = {};
  const split = link.split('/');
  const second = link.split(split[2]);
  const initial = link.split('?');
  const third = initial[0].split(split[2]);
  const path = split[3] ? split[3].split('?') : '';

  urlObj['fullUrl'] = link;
  urlObj['protocol'] = second[0];
  urlObj['host'] = split[2];
  urlObj['path'] = path[0] ? path[0] : '';
  urlObj['fullPath'] = third[1] && third[1] !== '/' ? third[1] : '';
  urlObj['queryString'] = getQuery(link)['initial'];
  urlObj['queryObject'] = getQuery(link)['query'];

  return urlObj;
}

const getQuery = (url:string):object => {
  const query = {};
  let initial = "";
  const init = url.split('?');
  if (init[1]) {
    const second = init[1].split('&');
    second.forEach((val) => {
        const ar = val.split('=');
        query[ar[0]] = ar[1];
    });
  initial = init[1];
  }
  

  return {initial, query};
}