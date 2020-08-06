import { useRouter } from 'next/router';
import HeadComp from '../../components/head';
import Header from '../../components/navigation/header';
import Footer from '../../components/navigation/footer';
import PostView from '../../views/PostView';

const Post = () => {
  const router = useRouter()
  let { pid, page } = router.query;
  page = page === null || page === undefined ? 1 : parseInt(page);

  return (
    <div>
      <HeadComp 
        title="Tvoj Auto"
        description="Tvoj auto"
      />

      <Header
        isMobile={ false }
      />

      <PostView
        post={ pid }
        page={ page }
      />

      <Footer />
      
    </div>
  )
}

export default Post