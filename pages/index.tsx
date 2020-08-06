import HeadComp from '../components/head';
import Header from '../components/navigation/header';
import Footer from '../components/navigation/footer';
import IndexView from '../views/IndexView';

export default function Home() {
  return (
    <div>
      <HeadComp 
        title="Tvoj Auto"
        description="Tvoj auto"
      />

      <Header
        isMobile={ false }
      />

      <IndexView
        indexObjects={ [{trip: "trip"}]}
      />

      <Footer />
      
    </div>
  )
}
