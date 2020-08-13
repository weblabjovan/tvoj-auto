import { useRouter } from 'next/router';
import UA from 'ua-parser-js';
import HeadComp from '../../components/head';
import Header from '../../components/navigation/header';
import Footer from '../../components/navigation/footer';
import PostView from '../../views/PostView';
import { isPost, getPost, getPostsForPage } from '../../server/functions/general';


const Post = () => {
  const router = useRouter();
  const uaParser =  new  UA();
  const device = uaParser.getDevice();

  let { pid, page } = router.query;
  let pageNum = 1;
  let postObj = {}
  let all = false;

  if(page){
    pageNum = page === "null" || page === "undefined" ? 1 : parseInt(page.toString());
  }
  if (pid) {
    const isPostUrlOk = isPost(pid.toString());
    all = !isPostUrlOk;
      if(isPostUrlOk){
        postObj = getPost(pid.toString());
      }else{
        postObj = getPostsForPage(pageNum);
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