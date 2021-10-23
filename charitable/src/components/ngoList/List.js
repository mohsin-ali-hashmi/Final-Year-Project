import React, { useEffect, useState } from 'react';
import {Container,Wrapper,
    Wraps
   } from './ListStyle';
import axios from 'axios';


const List = () => {
    const [ngoName,setNgoList]=useState([]);
    const [ngoEmail,setNgoEmail]=useState([]);
  const getNgoData = async () =>{
      try{
          const res = await axios.get('http://localhost:5000/api/ngolist');
          
          const name =res.data.ngo;
          const email =res.data.ngoemail;
          setNgoList(name);
          setNgoEmail(email);
        
      }catch(error){
         console.log(error);
      }
  };

  useEffect(()=>{
      getNgoData();
  },[]);
 

  return (
      <Container >
        <Wrapper>
          
            <Wraps style={{ color:"black" , fontWeight:"bold" }}> 
                NGO Names 
            </Wraps>

            <Wraps style={{ color:"black", fontWeight:"bold", position:"relative" , left:"60px"}}>
                NGO Emails
            </Wraps>
            
        </Wrapper>
        <Wrapper>
            <Wraps style={{ marginVertical:"10px", backgroundColor: "#000d1a"}}>
            {ngoName.map((item)=>{
               
               return <p>{item.ngoname} </p>;
              
            })}
            </Wraps>
            
            <Wraps style={{ backgroundColor: "#000d1a", position:"relative" , left:"35px"}}>
            {ngoEmail.map((item)=>{
               return <p>{item.email}</p>;
            })}
            </Wraps>
        </Wrapper>
      </Container>    
    
  );

};

export default List;