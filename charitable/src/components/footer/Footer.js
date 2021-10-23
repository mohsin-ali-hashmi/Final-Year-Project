import React from 'react';
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter
} from 'react-icons/fa';

import{
    
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcon,
    SocialIconLink
} from './FooterElement';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>Charitable</SocialLogo>
                        
                        <SocialIcon>
                            <SocialIconLink href='https://www.facebook.com/mohsin.alihashmi.7' target='blank'
                            aria-label='facebook' rel='noopener noreferrer'>
                            <FaFacebook />
                            </SocialIconLink>

                            <SocialIconLink href='https://www.instagram.com/mohsinalihashmi.7/' target='blank'
                            aria-label='Instagram' rel='noopener noreferrer'>
                            <FaInstagram />
                            </SocialIconLink>

                            <SocialIconLink href='https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fmohsinalihashm7&psig=AOvVaw3fipJNYsoOEjO85-kQ2l03&ust=1628411583385000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMDepoTAnvICFQAAAAAdAAAAABAT' 
                            target='blank'
                            aria-label='Twitter' rel='noopener noreferrer'>
                            <FaTwitter />
                            </SocialIconLink>

                            <SocialIconLink href='/' target='blank'
                            aria-label='Linkedin' rel='noopener noreferrer'>
                            <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcon>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
            
        
    )
}

export default Footer;
