import UA from 'ua-parser-js';
import HeadComp from '../components/head';
import Header from '../components/navigation/header';
import Footer from '../components/navigation/footer';
import IndexView from '../views/IndexView';
import {isLinkSecure, isWWWLink, getSecureLink, setUrl } from '../server/functions/general';


function Home(data: any) {
  const uaParser =  new  UA();
  const device = uaParser.getDevice();
  
  return (
    <div>
      <HeadComp 
        title="Tvoj Auto"
        description="Portal posvećen automobilima"
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

Home.getInitialProps = async (context: any) => {
  if (context['req']) {
    const currentUrl = setUrl(context['req']['headers']['host'], context.asPath);
    // if(!isLinkSecure(currentUrl) || !isWWWLink(currentUrl)){
    //   const secLink = getSecureLink(currentUrl);
    //   context.res.writeHead(302, {Location: secLink });
    //   context.res.end();
    // }

    if(!isLinkSecure(currentUrl)){
      const secLink = getSecureLink(currentUrl);
      context.res.writeHead(302, {Location: secLink });
      context.res.end();
    }
  }
 
  return {props: {host: ''}};
}

export default Home; 
