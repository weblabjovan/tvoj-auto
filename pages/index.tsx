import UA from 'ua-parser-js';
import { useRouter } from 'next/router';
import HeadComp from '../components/head';
import Header from '../components/navigation/header';
import Footer from '../components/navigation/footer';
import IndexView from '../views/IndexView';
import {isLinkSecure, isWWWLink, getSecureLink } from '../server/functions/general';

export default function Home() {
  const router = useRouter();
  const uaParser =  new  UA();
  const device = uaParser.getDevice();
  if(typeof window !== 'undefined'){
    console.log(isLinkSecure(window.location.href));
    console.log(isWWWLink(window.location.href));
    if(!isLinkSecure(window.location.href) || !isWWWLink(window.location.href)){
      console.log('ovde')
      const secLink = getSecureLink(window.location.href);
      console.log(secLink);
      router.push(secLink);
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

      <IndexView
        indexObjects={ [{trip: "trip"}]}
      />

      <Footer />
      
    </div>
  )
}
