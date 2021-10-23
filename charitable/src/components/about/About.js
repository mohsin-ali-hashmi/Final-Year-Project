import React,{useState} from 'react'
import Navbar from '../Navbar'
import Dropdown from '../Dropdown'
import Footer from '../footer/Footer'
import GlassCard from '../OurProfilesCard/GlassCard'


const About = () => {

    const [isOpen,setIsOpen] = useState(false);
    const toggle =() => {
    setIsOpen(!isOpen);
    }
  
    return (
        <>
            <Navbar toggle={toggle} />
            <Dropdown isOpen={isOpen} toggle= {toggle} />
            <GlassCard />
            <Footer />
    
        </>
    )
}

export default About
