import { Box, Button, TextField, Typography } from "@mui/material"
import React, { Suspense, useState } from "react"
import { RegistrationInterface } from "../../types/auth/registration"
import { registrationHandler } from "../../handlers/auth/registration"
import { useNavigate } from "react-router-dom"
const AuthRegistration = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false)
    const [registrationData, setRegistrationData] = useState<RegistrationInterface>({fullName: '', email: '', password: ''})
    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>):void => {
        setRegistrationData((prevState) => ({...prevState, [e.target.name]: e.target.value}))     
    }

    const submitHandler = async (e:React.FormEvent):Promise<void> => {
        e.preventDefault();
        const countBlankFields= Object.values(registrationData).filter((value) => value.trim().length < 1)  
        if(!(countBlankFields.length > 0)) {
            setLoading(true)
            const formData = new FormData();
            formData.append("fullName", registrationData.fullName);
            formData.append("email", registrationData.email);
            formData.append("password", registrationData.password);
            const { data, status } = await registrationHandler(formData);
            if(status) {
                setLoading(false)
                console.log(status, data);
                alert(data.message)
                if(data.message === 'Registered') {
                    navigate('/chat')
                }
            }
        }
    }
    const checkData = Object.values(registrationData).map(data => data).filter(data => data === '');
    const disableButton = checkData.length > 0 || loading;
    return (
        <Suspense fallback={<div>loading.....</div>}>
            <Box
                sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    margin: "auto",
                    padding: "16px",
                    gap: "8px",
                    width: "clamp(400px, 100%, 400px)",
                }}
                component="form"
                // noValidate
                // autoComplete="off"
                onSubmit={submitHandler}
            >
                <Typography variant="h4" component="h4">Registration Form</Typography>
                <TextField 
                    name="fullName"
                    label="Full Name"
                    type="text"
                    placeholder="Enter your Full Name here..."
                    onChange={changeHandler}
                    required
                    fullWidth
                />
                <TextField 
                    name="email"
                    label="Email Address"
                    type="email"
                    placeholder="Enter your Email here..."
                    onChange={changeHandler}
                    required
                    fullWidth
                />
                <TextField 
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="Enter your Password here..."
                    onChange={changeHandler}
                    required
                    fullWidth
                />
                <Button 
                    variant="contained" 
                    type="submit" 
                    disabled={disableButton}
                >
                    {loading ? "Loading" : "Register"}
                </Button>                
            </Box>
        </Suspense>
    )
}

export default AuthRegistration;