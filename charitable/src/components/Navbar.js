import React, { useState, useEffect } from 'react'
import styled,{css} from 'styled-components/macro';
import { Link, useHistory  } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import {FaDonate} from 'react-icons/fa';


const Nav = styled.nav`
    background : ${({scrollNav})=>(scrollNav ? 'rgba(0,0,0,0.6)' :'rgba(0,0,0,0.2)')};
    height: 60px;
    display:flex;
    justify-content:space-between;
    padding: 1rem 2rem;
    z-index:100;
    position:fixed;
    width:100%;

    @media screen and (max-width : 980px){
        transition: 0.8s all ease;
    }
    
`;

const NavLink = css`
    color:#fff;
    display:flex;
    align-items:center;
    padding:0 1rem;
    height:100%;
    cursor:pointer;
    text-decoration:none;
`;

const Logo = styled(Link)`
    ${NavLink}
    font-style:italic;
`;

const MenuBars = styled(FaDonate)`
    display:none;
    color:white;

    @media screen and (max-width:768px){
        display:block;
        background-size: contain;
        height:30px;
        width:30px;
        cursor: pointer;
        position:absolute;
        top:0;
        right:0;
        transform: translate(-28px,17px);
    }
`;
const NavMenu = styled.div`
    display:flex;
    align-items:center;
    margin-right: -20px;
    
     @media screen and (max-width:768px){
        display:none;
    }
   
`;
const NavMenuLinks = styled(Link)`
    ${NavLink}
`;

const NavBtn = styled.div`
    display:flex;
    align-items:center;
    margin-right:24px;
   

     @media screen and (max-width:768px){
        display:none;
    }
`;



const Navbar = ({toggle}) => {
    const history= useHistory();

    const redirect = () => {
    history.push('/MainForms');
  }
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav =() =>{
        if (window.scrollY >= 10) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        
        window.addEventListener('scroll', changeNav)
    }, [])

    const user = localStorage.getItem('userData')
    
    const signOutHandler = ()  => {
        localStorage.removeItem('userData')
        localStorage.removeItem('email')
        localStorage.removeItem('userEmail')
        localStorage.removeItem('id')
        
        history.replace('/');
    }

    return (
        <Nav scrollNav={scrollNav}>
            <Logo to="/" >CHARITABLE</Logo>
            <MenuBars onClick={toggle} />
            <NavMenu>

                {menuData.map((item, index) => (
                    <NavMenuLinks onClick={()=> history.push(item.path)} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                    {user === null ? 
                    <Button onClick={redirect} primary='true'>Sign In</Button> 
                    : 
                    <Button onClick={signOutHandler} primary='true'>Sign Out</Button> }
                    
                
                
            </NavBtn>

        </Nav>
    )
}

export default Navbar

