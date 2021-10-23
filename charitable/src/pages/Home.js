import React, { useState } from 'react';
import Dropdown from '../components/Dropdown';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import GlassCard from '../components/OurProfilesCard/GlassCard';
import { SliderData } from '../data/SliderData';
import Footer from '../components/footer/Footer';
import {SpecialistAd} from '../components/ngoList/HomeAd';
function Home() {

const [isOpen,setIsOpen] = useState(false);

const toggle =() => {
    setIsOpen(!isOpen);
  }

    return(
        <>
            <Navbar toggle={toggle} />
            <Dropdown isOpen={isOpen} toggle= {toggle} />
            <Hero slides={SliderData}/>
            <SpecialistAd />
            

            <GlassCard />
            <Footer />
        </>
    );
}

export default Home;