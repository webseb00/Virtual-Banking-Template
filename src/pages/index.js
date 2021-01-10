import { useState } from 'react';
import Navbar from '../components/NavBar/index';
import SideBar from '../components/SideBar/SideBar';
import HeroSection from '../components/HeroSection/index';
import InfoSection from '../components/InfoSection/index';
import Services from '../components/Services/index';
import Footer from '../components/Footer/index';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../components/InfoSection/Data';

const Home = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  )
}

export default Home;