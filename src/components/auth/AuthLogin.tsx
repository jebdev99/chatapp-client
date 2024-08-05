import { Box, Button, TextField, Typography } from "@mui/material"
import { LoginInterface } from "../../types/auth/login"
import React, { Suspense, useState } from "react"
import { loginHandler } from "../../handlers/auth/login"
import { useCookies } from "react-cookie"
import { jwtDecode } from "jwt-decode"
const AuthLogin = () => {
    const [, setCookie] = useCookies();
    const [loading, setLoading] = useState<boolean>(false)
    const [loginData, setLoginData] = useState<LoginInterface>({ email: '', password: '' })
    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>):void => {
        setLoginData({...loginData, [e.target.name]: e.target.value})     
    }
    const submitHandler = async (e:React.FormEvent):Promise<void> => {
        e.preventDefault();
        const countBlankFields= Object.values(loginData).filter((value) => value.trim().length < 1);
        if(!(countBlankFields.length > 0)) {
            setLoading(true);
            const formData = new FormData();
            formData.append('email', loginData.email);
            formData.append('password', loginData.password);
            const { data, status } = await loginHandler(formData);
            const { message, token } = data;
            alert(message)
            console.log(status);
            setTimeout(() => {
                const { exp }: {signId: string, iat: number, exp: number} = jwtDecode(token);
                const expirationDate = new Date(exp * 1000);
                setCookie("token", token, {path: '/', expires: expirationDate});
                setLoading(false);
                setLoginData((prevState) => ({...prevState, password: '' }))
            },500)
        }
    }
    
    const checkData = Object.values(loginData).map(data => data).filter(data => data === '');
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
                noValidate
                autoComplete="off"
                onSubmit={submitHandler}
            >
                <Typography variant="h4" component="h4">Log In Form</Typography>
                <TextField 
                    name="email"
                    label="Email Address"
                    type="email"
                    placeholder="Enter your name here..."
                    onChange={changeHandler}
                    fullWidth
                />
                <TextField 
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="Enter your password here..."
                    onChange={changeHandler}
                    fullWidth
                />
                <Button 
                    variant="contained" 
                    type="submit" 
                    disabled={disableButton}
                >
                    {loading ? "Loading" : "Log In"}
                </Button>
            </Box>
        </Suspense>
    )
}

export default AuthLogin;