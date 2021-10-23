import React, { useContext , useState } from 'react';
//import {useHistory} from 'react-router-dom';
import { AccountContext } from './AccountContext';
import { useFormik } from "formik";
import {toastMessage} from '../helper/Toatify'
import axios from 'axios';
import { 
    BoxContainer, 
    FormContainer, 
    FieldContainer,
    Input, 
    MutedLink, 
    SubmitButton, 
    
    
    FieldError,
    FormError
} from './Common' ;

import * as yup from 'yup';

const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const validationSchema = yup.object({
    ngoname : yup.string().min(3, "Please Enter Your Real Name").required("Full name is required"),

    email:yup.string().email("Please Enter A valid email address").required(),

    registration: yup.string().min(2,"Please Enter correct Registration number").required(),

    password: yup.string().matches(PASSWORD_REGEX, "minimum eight characters, at least one number").required(),

    ConfirmPassword: yup.string().required("Please Confirm Your password").when("password",{
        is: (val) => (val && val.length >0? true: false),
        then: yup.string().oneOf([yup.ref("password")], "password does not match"),
    }),
})

export function SignUpForm(props){

const {switchToSignin} = useContext(AccountContext);
// const history = useHistory();
// const [ngo, setNgo] = useState({
//     ngoname: "",email: "",registration: "",password: ""
// });

// const PostData = async (e) => {
//     e.preventDefault();

//     const{ ngoname,email,registration,password } = ngo;

//     const res = await fetch("/ngosignup", {
//         method:"POST",
//         headers:{
//             "Content-Type":"application/json"
//         },
//         body: JSON.stringify({
//             ngoname , email , registration , password
//         })
//     });
//     const data = await res.json();

//     if(data.status === 400 || !data){
//         window.alert("Invalid Registration or ngo already exist");
//         console.log("Invalid registration or email already exist");
//     }else{
//         window.alert("please click on activation link in email to sign up");
//         console.log("please click on activation link in email to sign up");

//         history.push("/loginForm");
//     }
// }
const  [success , setSuccess] = useState(null);
const [error, setError] = useState(null);

const onSubmit = async (values) =>{
    const {ConfirmPassword, ...data} = values ;
    const response = await axios.post("http://localhost:5000/api/ngosignup" , data).catch((err)=>{
        if(err && err.response)setError(err.response.data.message);
        setSuccess(null);
    });
    if(response && response.data){
        setError(null);
        
        setSuccess(response.data.message);

        formik.resetForm();
        
        //window.alert("click on the activation link in email");
        toastMessage(`click on the Activation link in email`, 'success')
    }
};



const formik = useFormik({initialValues:  
    { ngoname: "", email:"", registration:"",password:"" , ConfirmPassword:"",} ,
    validateOnBlur :true,
    onSubmit,
    validationSchema: validationSchema,

});



    return (
        <BoxContainer>
            {/* {!error &&<FormSucces >{success ? success :""}</FormSucces>} */}
            {!success && <FormError>{error ? error: ""}</FormError>} 
            
            <FormContainer 
            //method="POST" 
            onSubmit = {formik.handleSubmit} 
            >
                <FieldContainer>
                    <Input name="ngoname" type="text" placeholder = "NGO Full Name" 
                     value={formik.values.ngoname} 
                     //value={ngo.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />

                    <FieldError>{formik.touched.ngoname && formik.errors.ngoname ? formik.errors.ngoname : ""}</FieldError>
                </FieldContainer>
                <FieldContainer>
                    <Input 
                    name="email" type="email" placeholder = "Official Email" 
                     value={formik.values.email} 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    />
                        <FieldError>{formik.touched.email && formik.errors.email ? formik.errors.email: ""}</FieldError>
                </FieldContainer>
                <FieldContainer>
                    <Input 
                    name="registration" type="text" placeholder = "Registration Number" 
                    value={formik.values.registration} 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    />
                <FieldError>{formik.touched.registration && formik.errors.registration ? formik.errors.registration : ""}</FieldError>
                </FieldContainer>
                <FieldContainer>
                    <Input 
                    name="password" type="password" placeholder = "password" 
                    value={formik.values.password} 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    />
                        <FieldError>{formik.touched.password && formik.errors.password ? formik.errors.password : ""}</FieldError>
                </FieldContainer>
                <FieldContainer>
                    <Input 
                    name="ConfirmPassword" type="password" placeholder = "Confirm password" 
                    value={formik.values.ConfirmPassword} 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    />
                    <FieldError>{formik.touched.ConfirmPassword && formik.errors.ConfirmPassword ? formik.errors.ConfirmPassword : ""}</FieldError>
                </FieldContainer>
                <br />
                <SubmitButton type='submit' 
                
                disabled={!formik.isValid}>Sign Up</SubmitButton>

            </FormContainer>
            
            <br />
            <MutedLink href="#"> Or
            </MutedLink>
            <br />
            <SubmitButton type='submit' onClick={switchToSignin}
                >Sign in Account </SubmitButton>

        </BoxContainer>
    )
}