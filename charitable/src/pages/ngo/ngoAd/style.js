import styled from 'styled-components'

export const Container = styled.section`
   width:80%;
   margin:auto;
   text-align:center;
   padding-top:100px;
   height:100vh;
   background-color: #000d1a;

`;

export const Container1 = styled.section`
   margin:auto;
   text-align:center;
   padding-top:100px;
   height:100vh;
   background-color: #000d1a;

`;

export const Heading1 = styled.h1`
    font-size:36px;
    font-weight:600;
    color: white;
`;

export const Para1 = styled.h5`
    color:#777;
    font-size:14px;
    font-weight:300;
    line-height:22px;
    padding:10px;
`;

export const CardWrap = styled.div`
     margin-top:5%;
    display:flex;
    justify-content:space-between;

    @media screen and (max-width:680px)
   {
       align-items:center;
       flex-direction:column;
   }
`;

export const Card = styled.div`
    
    max-width:380px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-basis:31%;
    background:#fff3f3;
    border-radius:10px;
    margin-bottom:5%;
    padding:20px 12px;
    box-sizing: border-box;
    transition:0.8s;
    flex-direction: column;
        @media screen and (max-width:680px)
   {
       min-width:380px;
   }
    &:hover{
        
        box-shadow: 0 0 20px 0px rgba(0,0,0,0.2);
    }
`;

export const Heading2 = styled.h3`
    
    font-weight:600;
    margin:10px 0;
`;

export const Button = styled.div`
 background: ${({primary}) =>(
        primary ?'#000d1a':'CD853F'
    )};
    white-space:nowrap;
    outline: none;
    border:none;
    min-width: 50px;
    max-width:200px;
    max-height:35px;
    cursor:pointer;
    text-decoration:none;
    transition:0.3s;
    display:flex;
    border-radius :8px;
    justify-content:center;
    align-items:center;
    font-weight:bold;
    padding:${({big})=>(big?'16px 40px':'14px 24px')};
    color:${({primary})=>(primary?'white':'#000d1a')};
    font-size: ${({big})=>(big?'20px':'14px')};

    &:hover{
        transform:translateY(-2px);
    }
`;

