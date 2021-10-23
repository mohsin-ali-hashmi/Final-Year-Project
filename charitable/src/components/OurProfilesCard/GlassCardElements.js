import styled from 'styled-components';




export const OuterContainer=styled.section`
    margin:0px;
    padding:0px;
    
    height:100vh;
    background-color:black;
`;

export const Container=styled.div`
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    
    height:80%;

    @media screen and (max-width:620px){
        flex-direction: column;
        height:100%;
    }
`;

export const GlassContainer = styled.div`
    display:inline-block;
   
    padding:2em;
    background: #000d1a;
    text-align: center;
    border-radius: 10px;
    z-index: 1;
    position:relative;
    backdrop-filter: blur(10px);
    border: 2px solid transparent;
    cursor: not-allowed;
    min-width:250px;
    
`;
export const Otherinfo = styled.div`
    text-align: center;
    color:white;
    
   
     @media screen and (max-width:620px){
        display:none;
    }
`;

export const StyledImg = styled.img`
    width:100px;
    height:auto ;
    border:2px solid black;
    border-radius: 50%;
`;

export const StyledH3 = styled.h3`
    line-height: 1.5;
    letter-spacing: 1.15;
    font-family: Noto Sans, sans-serif;
    color:white;
`;

export const StyledH5 = styled.h5`
    line-height: 1.5;
    letter-spacing: 1.15;
    color:white;
   
    font-size:20px;
    font-family:Noto Sans, sans-serif;
`;

export const StyledH8 = styled.h6`
    line-height: 1.5;
    letter-spacing: 1.15;
    font-family: Noto Sans, sans-serif;
    color:lightblue;
    
`;
