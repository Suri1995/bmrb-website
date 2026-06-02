import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Ourclients from './components/Ourclients';
import Cards from './components/Cards';
import Getintouch from "@/components/Getintouch";


export const metadata = {
  title: 'Our Projects & Clients | BMRB',
  description: 'Trusted by leading organizations across government, automotive, media, and startup sectors.',
};

export default function Clients() {
  return (
    <div>
      <main>
        <Header />
        <Ourclients />
        <Cards/>
        <Getintouch />  
        <Footer />
      </main>
    </div>
  );
}