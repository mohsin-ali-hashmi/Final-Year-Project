import React, { useContext ,useState} from 'react';
import { AccountContext } from './AccountContext';
import { BoxContainer, FormContainer, Input, 
MutedLink, SubmitButton, 
FieldError,
    FormError,FieldContainer,
} from './Common' ;
import { useFormik } from "formik";
import axios from 'axios';
import * as yup from 'yup';


const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const validationSchema = yup.object({
    username : yup.string().max(15, "Please Enter Your Real Name").required("Full name is required"),

    email:yup.string().email("Please Enter A valid email address").required(),

    password: yup.string().matches(PASSWORD_REGEX, "minimum eight characters, at least one number").required(),

    ConfirmPassword: yup.string().required("Please Confirm Your password").when("password",{
        is: (val) => (val && val.length >0? true: false),
        then: yup.string().oneOf([yup.ref("password")], "password does not match"),
    }),
})

export function SignUpForm(props){
const {switchToSignin} = useContext(AccountContext);
    const  [success , setSuccess] = useState(null);
const [error, setError] = useState(null);

const onSubmit = async (values) =>{
    const {ConfirmPassword, ...data} = values ;
    const response = await axios.post("http://localhost:5000/api/usersignup" , data).catch((err)=>{
        if(err && err.response)setError(err.response.data.message);
        setSuccess(null);
    });
    if(response && response.data){
        setError(null);
        
        setSuccess(response.data.message);

        formik.resetForm();
        
        window.alert("click on the link in email");
    }
};

const formik = useFormik({initialValues:  
    { username: "", email:"", password:"" , ConfirmPassword:"",} ,
    validateOnBlur :true,
    onSubmit,
    validationSchema: validationSchema,

});

    
    return (
        <BoxContainer>
            
                 
            {!success && <FormError>{error ? error: ""}</FormError>} 
                
            <FormContainer 
            onSubmit={formik.handleSubmit} 
            >
                <FieldContainer>
                <Input name="username" type="text" placeholder = "Your Full Name" 
                value={formik.values.username} 
                     //value={ngo.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                    <FieldError>{formik.touched.username && formik.errors.username ? formik.errors.username : ""}</FieldError>
                </FieldContainer>

                <FieldContainer>
                <Input name="email" type="email" placeholder = "Your Email"
                value={formik.values.email} 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    />
                        <FieldError>{formik.touched.email && formik.errors.email ? formik.errors.email: ""}</FieldError>
                </FieldContainer>
                <FieldContainer>
                <Input name="password" type="password" placeholder = "password" 
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
                
            <MutedLink href="#">or</MutedLink>
           
            <SubmitButton type='submit'
             onClick={switchToSignin}  >Sign in account</SubmitButton>
            {/* <MutedLink href="#">Sign in to your account <BoldLink href="#" onClick={switchToSignin}>Sign In</BoldLink>
            </MutedLink> */}

        </BoxContainer>
    )
}