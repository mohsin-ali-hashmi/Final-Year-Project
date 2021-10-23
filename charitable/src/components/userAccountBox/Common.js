import styled from 'styled-components';

export const BoxContainer = styled.div`
    
    width: 100%;
    display: flex;
    flex-direction:column;
    align-items:center;
    margin-top:10px;
  
   
`;

export const FormContainer=styled.form`
    width:100%;
    display:flex;
    flex-direction: column;
    //box-shadow: 0px 0px 2.5px rgba(15 15 15 0.19);
`;

export const MutedLink = styled.a`
    font-size:13px;
    //color:rgba(200,200,200,0.8);
    font-weight:500;
    color:black;

    text-decoration: none;
`;

export const BoldLink= styled.div`
    font-size:15px;
    color:black;
    font-weight:900;
    text-decoration: none;
    padding-bottom:10px;
`;

export const Input = styled.input`
    width:100%;
    height:42px;
    outline:none;
    border:1px solid rgba(200 , 200, 200, 0.5);
    padding: 0px 10px;
    //border-bottom: 0.4px solid transparent;
    transition: all 200ms ease-in-out;
    font-size:13px;

    &:placeholder{
        color: rgba(200,200,200,1);
    }

    &:not(::last-of-type){
        border-bottom: 1.5px solid rgba(200,200,200,0.4);
    }

    &:focus{
        outline:none;
        border-bottom: 2px solid black;
    }
`;

export const SubmitButton = styled.button`
    width:100%;
    padding:11px 30%;
    color:#fff;
    font-size: 13px;
    margin-bottom:10px;
    font-weight: 500;
    border:none;
    border-radius: 100px 100px 100px 100px;
    cursor:pointer;
    transition: all,240ms ease-in-out;
    background: #000d1a;

    &:hover{
        filter:brightness(1.5);
    }
    &:disabled{
        filter: contrast(0.7);
    }
    &:focus{
        outline: none;
    }
`;

export const FieldContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column ;
`;

export const FieldError = styled.span`
    color: #b32e2e;
    font-size:11px;
    min-height:18px;
`; 

export const FormSucces = styled.span`
    color: #28a828;
    font-size:12px;
    min-height:20px;
    font-weight:500;
`;

export const FormError = styled.span`
    color: #b32e2e;
    font-size:12px;
    min-height:20px;
    font-weight:500;
`;