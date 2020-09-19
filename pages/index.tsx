import UA from 'ua-parser-js';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import HeadComp from '../components/head';
import Header from '../components/navigation/header';
import Footer from '../components/navigation/footer';
import IndexView from '../views/IndexView';
import {isLinkSecure, isWWWLink, getSecureLink, setUrl } from '../server/functions/general';
import { GetServerSideProps } from 'next';


function Home(data: any) {
  const uaParser =  new  UA();
  const router = useRouter();
  const device = uaParser.getDevice();
  const currentUrl = setUrl(data['host'], router.asPath);
  useEffect(() => {
    if(!isLinkSecure(currentUrl) || !isWWWLink(currentUrl)){
      const secLink = getSecureLink(currentUrl);
      if (typeof window !== 'undefined') {
        window.location.href = secLink;
      }
    }
  });
  
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
  return {props: {host: context['req']['headers']['host']}};
}

export default Home; 
