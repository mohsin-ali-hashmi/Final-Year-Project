import React from 'react';
import styled from 'styled-components';
import { menuData } from '../data/MenuData';
import {Link, useHistory} from 'react-router-dom';
import { Button } from './Button';
import {FaTimes} from 'react-icons/fa';

const DropdownContainer = styled.div`
    position:fixed;
    z-index:999;
    width:100%;
    height: 100%;
    background: blueviolet;
    display:grid;
    align-items: center;
    top:${({isOpen})=>(isOpen ? '0': '-100%')};
    left:0;
    transform: 0.3s ease-in-out;
    opacity:${({isOpen})=>(isOpen ? '1': '0')};
    
`;

const Icon = styled.div`
    position:absolute;
    top:1.2rem;
    right:1.5rem;
    background:transparent;
    font-size: 2rem;
    cursor:pointer;
    outline:none;
`;

const CloseIcon = styled(FaTimes)`
    color:#000d1a;
`;

const DropdownWrapper = styled.div``;

const DropdownMenu = styled.div`
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    margin-bottom: 4rem;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(4, 60px);
    }
`;

const DropdownLink = styled(Link)`
    display:flex;
    align-items: center;
    justify-content: center;
    color:#fff;
    font-size: 1.5rem;
    text-decoration: none;
    cursor:pointer;
    transition: 0.2s ease-in-out;

    &:hover{
        color: black;
    }
`;

const BtnWrap = styled.div`
    display:flex;
    
    justify-content: center;
`;


const Dropdown = ({isOpen , toggle}) => {
    const history= useHistory();

    const redirect = () => {
    history.push('/MainForms');
  }

  const user = localStorage.getItem('userData')
    
    const signOutHandler = ()  => {
        localStorage.removeItem('userData')
        history.replace('/');
    }
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    {menuData.map((items, index)=>(
                        <DropdownLink to={items.link} key={index}>
                            {items.title}
                        </DropdownLink>
                    ))}
                </DropdownMenu>
                <BtnWrap>

                   {user === null ? 
                    <Button onClick={redirect} primary='true'>Sign In</Button> 
                    : 
                    <Button onClick={signOutHandler} primary='true'>Sign Out</Button> }
                </BtnWrap>
            </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown;
