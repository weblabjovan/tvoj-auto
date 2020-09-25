import { useRouter } from 'next/router';
import UA from 'ua-parser-js';
import HeadComp from '../../components/head';
import Header from '../../components/navigation/header';
import Footer from '../../components/navigation/footer';
import PostView from '../../views/PostView';
import { PostsForPage } from '../../server/interface/posts';
import { isPost, getPost, getPostById, getPostsForPage, isLinkSecure, isWWWLink, getSecureLink, getQuery, setUrl } from '../../server/functions/general';

interface Props {
  direct: boolean;
}

const Post = (data: Props) => {
  const uaParser =  new  UA();
  const device = uaParser.getDevice();
  const router = useRouter();
  const { direct } = data;

  const { query, asPath } = router;
  const { pid } = query;
  const pathQuery = getQuery(asPath);
  const page = pathQuery['query']['page'];
  const id = pathQuery['query']['id'];
  let description = 'Pregled najnovijih članaka tvog auta.';
  let title= 'Tvoj Auto - Članci'

  const pageNum = page === 'undefined' || page === 'null' || page === undefined ? 1 : parseInt(String(page));
  let postObj: PostsForPage = { pagesLength: 1, post: [] }
  let all = false;
  let isPostUrlOk = false;
  
  if (pid) {
    isPostUrlOk = isPost(String(pid), parseInt(String(id)), true);
    all = !isPostUrlOk;
    if(isPostUrlOk){
      postObj = getPost(String(pid));
      title= postObj['post']['name'];
      description = postObj['post']['description'];
    }else{
      postObj = getPostsForPage(pageNum);
    }
  }else{
    isPostUrlOk = isPost(String(pid), parseInt(String(id)), false);
    all = !isPostUrlOk;
    if(isPostUrlOk){
      postObj = getPostById(parseInt(String(id)));
      title= postObj['post']['name'];
      description = postObj['post']['description'];
    }else{
      postObj = getPostsForPage(pageNum);
    }
  }

  console.log('Pid')
  
  return (
   
    <div>
      <HeadComp 
        title={title}
        description={description}
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

Post.getInitialProps = async (context: any) => {
  let direct = false;
  // if (context['req']) {
  //   direct = true;
  //   const currentUrl = setUrl(context['req']['headers']['host'], context.asPath);

  //   if(!isLinkSecure(currentUrl) || !isWWWLink(currentUrl)){
  //     const secLink = getSecureLink(currentUrl);
  //     context.res.writeHead(302, {Location: secLink });
  //     context.res.end();
  //   }

  // }
  
  return { direct };
}

export default Post;