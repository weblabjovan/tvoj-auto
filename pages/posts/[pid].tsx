import { useRouter } from 'next/router';
import UA from 'ua-parser-js';
import HeadComp from '../../components/head';
import Header from '../../components/navigation/header';
import Footer from '../../components/navigation/footer';
import PostView from '../../views/PostView';
import { isPost, getPost, getPostById, getPostsForPage, isLinkSecure, isWWWLink, getSecureLink, parseLink } from '../../server/functions/general';


const Post = () => {
  const router = useRouter();
  const uaParser =  new  UA();
  const device = uaParser.getDevice();
  let query = {};
  if(typeof window !== 'undefined'){
    query = parseLink(window.location.href);
    if(!isLinkSecure(window.location.href) || !isWWWLink(window.location.href)){
      const secLink = getSecureLink(window.location.href);
      router.push(secLink);
    }
  }

  let { pid, page } = router.query;
  let pageNum = 1;
  let postObj = {}
  let all = false;
  if(page){
    pageNum = page === "null" || page === "undefined" ? 1 : parseInt(page.toString());
  }

  if (pid) {
    const isPostUrlOk = isPost(String(pid));
    all = !isPostUrlOk;
    if(isPostUrlOk){
      postObj = getPost(String(pid));
    }else{
      postObj = getPostsForPage(pageNum);
    }
  }else{
    if(query['host']){
      if (query['queryObject']['id']) {
        if (parseInt(query['queryObject']['id']) > 0) {
          if(Object.keys(postObj).length === 0){
            postObj = getPostById(parseInt(query['queryObject']['id']))
          }
        }else{
          all = true;
          postObj = getPostsForPage(pageNum);
        }
      }
    }
  }
  
  return (
   
    <div>
      <HeadComp 
        title="Tvoj Auto"
        description="Tvoj auto"
      />

      <Header
        isMobile={ device['type'] === 'mobile' ? true : false }
      />

      <PostView
        all={ all }
        page={ pageNum }
        post={ postObj }
      />

      <Footer />
      
    </div>
    
  )
}

export default Post