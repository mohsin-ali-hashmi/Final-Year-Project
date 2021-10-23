import React from 'react';
import {
    StyledImg,
    StyledH3,
    StyledH5,
    StyledH8,
    GlassContainer,
    Container,
    Otherinfo,
    OuterContainer
} from './GlassCardElements';
import profile from '../../images/MyDp.jpg';
import Aprofile from '../../images/zulfi.webp';



const GlassCard = () => {
    return (
        <OuterContainer>
        <Container>
            <GlassContainer>
                <StyledImg src ={profile} />
                <StyledH3>Mohsin Ali Hashmi</StyledH3>
                <StyledH5>React Developer</StyledH5>
                <StyledH8>mohsin.bsse3492@iiu.edu.pk</StyledH8>
            </GlassContainer>

            <GlassContainer>
              <StyledImg src ={Aprofile} />
              <StyledH3>Ahtisham Javed</StyledH3>
               <StyledH5>Node Developer</StyledH5>
               <StyledH8>Ahtisham.bsse3495@iiu.edu.pk</StyledH8>
            </GlassContainer>
        </Container>
            <Otherinfo>
                <StyledH5>Project : Final Year Project</StyledH5>
                <StyledH5>Supervised By : Dr.Anwar Ghani</StyledH5>
                <StyledH5>International islamic university  islamabad</StyledH5>
            </Otherinfo>
        </OuterContainer>
    )
}

export default GlassCard;
