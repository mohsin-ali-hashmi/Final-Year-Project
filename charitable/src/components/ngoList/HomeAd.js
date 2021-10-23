import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Button } from "../Button";
import NgoPic from '../../images/ImageFour.jpg';


const SpecialistAdContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #000d1a;
  align-items: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 480px) {
      flex-direction:column;
  }
`;

const SloganContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-right: 5em;
  padding:10px;
  @media screen and (max-width: 680px) {
    
    margin:0;
    padding:10px;
    
    flex-direction: column;
    
  }
`;

const Slogan = styled.h2`
  margin: 0;
  font-size: 20px;
  color: #fff;
  font-weight: 700;
  line-height: 1.3;
  text-align: start;
  @media screen and (max-width: 660px) {
    font-size: 18px;
  }
`;

const StandoutImage = styled.div`
    
  width: 400px;
  height: 350px;
  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 780px) {
    
    width: 20em;
    height: 15em;
  }
`;



export function SpecialistAd() {
  
  const history= useHistory();
  return (
    <SpecialistAdContainer>
        <ContentContainer>
            
          
          
            <SloganContainer>
                    <Slogan>If you are NGO</Slogan>
                    <Slogan>Get YourSelf Registered NOW!</Slogan>
                    <Slogan>Click NGO button</Slogan>
                  <br></br>
                  
                  <Button onClick={()=> history.push('/MainForm')} primary='true'>NGO</Button>
                  
         
                  <br></br>
                  <Slogan>View Registered NGOs !!</Slogan>
                  <br></br>
                  <Button onClick={()=> history.push('/List')}  primary='true'>NGO List</Button>
   
            </SloganContainer>
            <SloganContainer>
                <StandoutImage>
                    <img src={NgoPic} alt="Register your NGO" />
                </StandoutImage>
            </SloganContainer>
        </ContentContainer>
    </SpecialistAdContainer>
  );
}