import React, {useState} from 'react'
import Footer from '../../../components/footer/Footer'
import Hero from '../../../components/Hero';
import { SliderData } from '../../../data/SliderData';
import Navbar from '../../../components/Navbar'
import Dropdown from '../../../components/Dropdown'
import GlassCard from '../../../components/OurProfilesCard/GlassCard'
import UserAd from '../userAd/UserAd';

const UserHome = () => {

    const [isOpen,setIsOpen] = useState(false);

const toggle =() => {
    setIsOpen(!isOpen);
  }
    return (
        <>
            
            <Navbar toggle={toggle} />
            <Dropdown isOpen={isOpen} toggle= {toggle} />
            <Hero slides={SliderData}/>
            <UserAd />
            <GlassCard />
            <Footer />
        </>
    )
}

export default UserHome
