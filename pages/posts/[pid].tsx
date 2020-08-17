import { useRouter } from 'next/router';
import UA from 'ua-parser-js';
import HeadComp from '../../components/head';
import Header from '../../components/navigation/header';
import Footer from '../../components/navigation/footer';
import PostView from '../../views/PostView';
import { isPost, getPost, getPostsForPage, isLinkSecure, isWWWLink, getSecureLink } from '../../server/functions/general';


const Post = () => {
  const router = useRouter();
  const uaParser =  new  UA();
  const device = uaParser.getDevice();
  console.log(1)
  if(typeof window !== 'undefined'){
    console.log(2)
    if(!isLinkSecure(window.location.href) || !isWWWLink(window.location.href)){
      console.log(3)
      const secLink = getSecureLink(window.location.href);
      router.push(secLink);
    }
  }

  console.log(4)

  let { pid, page } = router.query;
  let pageNum = 1;
  let postObj = {}
  let all = false;
  console.log(router);
  console.log(pid);
  if(page){
    pageNum = page === "null" || page === "undefined" ? 1 : parseInt(page.toString());
  }
  if (pid) {
    console.log(pid)
    const isPostUrlOk = isPost(pid.toString());
    console.log(isPostUrlOk)
    all = !isPostUrlOk;
      if(isPostUrlOk){
        postObj = getPost(pid.toString());
      }else{
        postObj = getPostsForPage(pageNum);
      }
    console.log(postObj)
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