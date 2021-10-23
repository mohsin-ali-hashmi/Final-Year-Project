import React, {useContext ,  useState} from 'react';
import { AccountContext } from './AccountContext';
import { BoxContainer, FormContainer, Input ,
MutedLink,FieldContainer, SubmitButton} from './Common' ;
import axios from "axios";
import {toastMessage} from '../helper/Toatify';
import { useHistory } from 'react-router-dom'

export function LoginForm(props){
    const history=useHistory();
    const {switchToSignup} = useContext(AccountContext);
    const [ngo , setNgo] = useState({
    email:"",
    password:""
  })

   const handleChange= e =>{
    const{name, value} = e.target
    setNgo({
      ...ngo,
      [name]:value
    })
  }

  const login = e => {
    e.preventDefault()
    axios.post("http://localhost:5000/api/ngosignin", ngo)
    .then(res=>{
      const result = res.data
      // alert(user.message)
      localStorage.setItem('userData', result.ngo)
      localStorage.setItem('email', result.ngo.email)
      localStorage.setItem('id', result.ngo._id)

      // setUser(user.user)
      // console.log(res.data.user)
     setTimeout(() => {
       history.replace('/ngo/home')  
       window.location.reload(true);
          }, 200)
    }).catch(err => toastMessage(`Please enter correct email or password`, "error"))
      //alert('Please enter correct email or password'))
  }
    return (
        <BoxContainer>
            <FormContainer >
                <FieldContainer>
                  <Input type="email" 
                  name="email"
                  placeholder = "Email" 
                  value={ngo.email}
                  onChange={handleChange}
                  />
                    {
            
            }
            </FieldContainer>
            <FieldContainer>
                
                <Input type="password" 
                name="password"
                placeholder = "password" 
                value={ngo.password}
            onChange={handleChange}
            />
            {
            
            }
                <br />

            </FieldContainer>

                <br />
            <SubmitButton   
            onClick={e => login(e)}>Sign in</SubmitButton>
            
            </FormContainer>
             <br />
             <MutedLink href="#">Or
            
            </MutedLink>
            <br/>
             <SubmitButton   
            onClick={switchToSignup}>Create Account</SubmitButton>
            {/* <MutedLink href="#">Don't have an account ? {" "}
            <BoldLink href="#" onClick={switchToSignup}>Sign Up</BoldLink>
            </MutedLink> */}

        </BoxContainer>
    );
}