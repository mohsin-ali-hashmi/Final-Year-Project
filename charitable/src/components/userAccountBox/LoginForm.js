import React, {useContext ,useState} from 'react';
import { AccountContext } from './AccountContext';
import {useHistory } from "react-router-dom";
import {toastMessage} from '../helper/Toatify';

import { BoxContainer, FormContainer, Input 
,FieldContainer ,
MutedLink, SubmitButton} from './Common' ;
 
import axios from 'axios';



export function LoginForm(props){
  
  const {switchToSignup} = useContext(AccountContext);
  const history=useHistory();
  const [user , setUser] = useState({
    email:"",
    password:""
  })

  const handleChange= e =>{
    const{name, value} = e.target
    setUser({
      ...user,
      [name]:value
    })
  }
  
  const login = e => {

    e.preventDefault()

    axios.post("http://localhost:5000/api/usersignin", user)
    .then(res=>{

      const result = res.data
      // alert(user.message)

      localStorage.setItem('userData', result.user)
      localStorage.setItem('userEmail', result.user.email)
      // setUser(user.user)
      // console.log(res.data.user)
     setTimeout(() => {
       
        
       history.push('/user/home')  
       window.location.reload(true);
       
          }, 200)
    }).catch(err => toastMessage(`Please enter correct email or password`, "error"))
      //alert('Please enter correct email or password'))
  }
  

 
  return (
        <BoxContainer>
            <FormContainer >
              
                <FieldContainer>
                <Input 
                type="email" 
                name="email"
                value={user.email}
                placeholder = "enter Email"
                onChange={handleChange}
             
                />
                
            
            </FieldContainer>
                <FieldContainer>
                <Input type="password" 
                name="password"
                value={user.password}
                placeholder = "password" 
                
                onChange={handleChange}
            
                />
                
            
                </FieldContainer>
                <br />
               <SubmitButton 
                onClick={e => login(e)}
                >Sign in</SubmitButton>
           
            </FormContainer>
            <br />
              <MutedLink href="#">Or
            </MutedLink>
            
                      <br />
                <SubmitButton 
                onClick={switchToSignup}
                >Create Account</SubmitButton>
            
            
            {/* <MutedLink href="#">Don't have an account ? {" "}<BoldLink href="#" onClick={switchToSignup}>Sign Up</BoldLink>
            </MutedLink> */}

        </BoxContainer>
    );
}