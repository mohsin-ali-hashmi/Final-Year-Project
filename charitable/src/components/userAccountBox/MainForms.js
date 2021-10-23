import React, {useState} from 'react';
import styled from 'styled-components';
import {SignUpForm} from './SignupForm' ;
import {LoginForm} from './LoginForm' ;
import { AccountContext } from './AccountContext';
import {motion} from 'framer-motion';

const BoxContainer= styled.div`
    width:280px;

    min-height: 550px;
    display: flex;
    flex-direction: column;
    border-radius: 19px;
    background-color: whitesmoke;
    box-shadow: 0 0 2px rgba(15,15,15,0.28);
    position: relative;
    border-bottom: 2px solid black;
    
    overflow:hidden;
`;

const TopContainer = styled.div`
    width:100%;
    height:250px;
    display:flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 1.8em;
    padding-bottom: 5em;
`;

const DropContainer = styled(motion.div)`
    width:160%;
    height:550px;
    position:absolute;
    display: flex;
    flex-direction:column;
    border-radius: 50%;
    transform:rotate(60deg);
    top:-290px;
    left:-70px;
    background:#000d1a;
`;

const HeaderContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
`;

const HeaderText = styled.h2`
    font-size: 30px;
    font-weight: 600;
    line-height: 1.24;
    color:#fff;
    z-index: 10;
    margin:0;
`;

const SmallText = styled.h5`
    color:#fff;
    font-weight: 500;
    font-size: 11px;
    z-index:10;
    margin:0;
    margin-top:7px;
`;

const InnerContainer= styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    padding:0 1.5em;
`;

const backDropVarients= {
    expanded: {
        width:"233%",
        height:"1050px",
        borderRadius:"20%",
        transform: "rotate(60deg)",

    },
    collapsed:{
        width:"160%",
        height:"550px",
        borderRadius:"50%",
        transform: "rotate(60deg)",
    },
};

const expandingTransition = {
    type: "spring",
    duration: 2.3,
    stiffness:30,
};

const AppContainer = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-top:20px;
`;

const MainForms=(props)=>{

const [isExpended, setExpended] = useState(false);
const [active, setActive] = useState("signin");

const playExpandingAnimation= () => {
    setExpended(true);
    setTimeout( () => {
        setExpended(false);
    },expandingTransition.duration * 1000-1500);
};



const switchToSignup =() =>{
    playExpandingAnimation();
    setTimeout(()=>{
        setActive("signup");
    },400);
};

const switchToSignin =() =>{
    playExpandingAnimation();
    setTimeout( () => {
        setActive("signin");
    },400);
};

const contextValue = {switchToSignup, switchToSignin};

    return (
        <AppContainer>
    <AccountContext.Provider value={contextValue}>
      <BoxContainer>
        <TopContainer>
            <DropContainer initial={false} 
            animate={isExpended ? "expanded" : "collapsed"}
            variants={backDropVarients}
            transition={expandingTransition}
            />
            {active === "signin" && 
            <HeaderContainer>
                <HeaderText>Welcome</HeaderText>
                <HeaderText>Donor</HeaderText>
                <SmallText>Please Sign-In to continue</SmallText>
            </HeaderContainer>}

            {active === "signup" && 
            <HeaderContainer>
                <HeaderText>Please Create your Donation</HeaderText>
                <HeaderText> Account</HeaderText>
                <SmallText>Please Sign-up to continue</SmallText>
            </HeaderContainer>}
        </TopContainer>
        <InnerContainer>
            {active === "signin" && <LoginForm />}
            {active === "signup" && <SignUpForm />}
        </InnerContainer>
    </BoxContainer>
    </AccountContext.Provider>
    </AppContainer>
    );
}
export default MainForms;