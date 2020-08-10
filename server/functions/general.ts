import posts from '../base/posts';

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

export const isPost = (postUrl: string): boolean => {
  if (typeof posts[postUrl] === 'object') {
    const postStructure = {id: 1, name: 1, urlName: 1, dateString: 1, date: 1, mainPhotos: 1, model: 1, author: 1, related: 1, popular: 1, description: 1, structure: 1};
    if (Object.keys(postStructure).length !== Object.keys(posts[postUrl]).length) {
      return false;
    }
    for (var index = 0; index < Object.keys(posts[postUrl]).length; index++) {
      if(postStructure[Object.keys(posts[postUrl])[index]] !== 1){
        return false
      }
    }
  }else{
    return false;
  }

  return true;
}