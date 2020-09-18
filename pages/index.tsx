import UA from 'ua-parser-js';
import HeadComp from '../components/head';
import Header from '../components/navigation/header';
import Footer from '../components/navigation/footer';
import IndexView from '../views/IndexView';
import {isLinkSecure, isWWWLink, getSecureLink, generateLinkFromContext } from '../server/functions/general';
import { GetServerSideProps } from 'next';


function Home() {
  const uaParser =  new  UA();
  const device = uaParser.getDevice();
  // if(typeof window !== 'undefined'){
  //   if(!isLinkSecure(window.location.href) || !isWWWLink(window.location.href)){
  //     const secLink = getSecureLink(window.location.href);
  //     window.location.href = secLink;
  //   }
  // }
  
  return (
    <div>
      <HeadComp 
        title="Tvoj Auto"
        description="Tvoj auto"
      />

      <Header
        isMobile={ device['type'] === 'mobile' ? true : false }
      />

      <IndexView
        indexObjects={ [{trip: "trip"}]}
      />

      <Footer />
      
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context['req']['headers']['host']);
  console.log(context['req']['url']);

  const link = generateLinkFromContext(context['req']);
  console.log(link);

  return {props: { title: 'My Title', content: '...' }};
}

export default Home; 
