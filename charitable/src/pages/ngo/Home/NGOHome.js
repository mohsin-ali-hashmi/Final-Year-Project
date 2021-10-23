import React, {useState, useEffect} from 'react'
import Footer from '../../../components/footer/Footer'
import Navbar from '../../../components/Navbar'
import Dropdown from '../../../components/Dropdown'
import NgoAd from '../ngoAd/NgoAd'
import {toastMessage} from '../../../components/helper/Toatify'
import axios from 'axios'

const NGOHome = () => {
    
    const [isOpen,setIsOpen] = useState(false);
     useEffect ( () => {
        
        notify()
    }, [])

const toggle =() => {
    setIsOpen(!isOpen);
  }
   const notify = async () =>{
       const { data } = await axios.get('http://localhost:5000/api/notification')


        if(data){
            data.forEach((notification)=>{
            toastMessage(`Their is a donamtion by ${notification.username}`, "success")
            })
                axios.delete(`http://localhost:5000/api/deleteAllNotification`)

         
        
         
        }
   }
    return (
        <>
            
            <Navbar toggle={toggle} />
            <Dropdown isOpen={isOpen} toggle= {toggle} />
            <NgoAd />
            <Footer />
        </>
    )
    
}

export default NGOHome
