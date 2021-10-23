import React from 'react'
import { useHistory } from 'react-router';
import { Button } from "../../../components/Button";
import {SpecialistAdContainer ,
ContentContainer,
SloganContainer,
Slogan,
StandoutImage} from './UserAdElement'

import apic from '../../../images/ImageThree.jpg'

const UserAd = () => {
    const history= useHistory();

    return (
    <SpecialistAdContainer>
        <ContentContainer>
            <SloganContainer>
                    <Slogan>THANKS FOR DONATIONs!!</Slogan>
                    <Slogan>You Can View</Slogan>
                    <Slogan>Your Messages</Slogan>
                    <Slogan>By clicking The Button Below</Slogan>
                  <br></br>
                  
                  <Button onClick={()=> history.push('/Message')}
                  primary='true'>Messages</Button>
   
            </SloganContainer>
            <SloganContainer>
                <StandoutImage>
                    <img src={apic} alt="Donor" />
                </StandoutImage>
            </SloganContainer>
        </ContentContainer>
    </SpecialistAdContainer>
  );
}
    

export default UserAd;
