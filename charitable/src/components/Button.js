import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Button = styled(Link)`
    background: ${({primary}) =>(
        primary ?'white':'CD853F'
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
    color:${({primary})=>(primary?'black':'#000d1a')};
    font-size: ${({big})=>(big?'20px':'14px')};

    &:hover{
        transform:translateY(-2px);
    }
`;