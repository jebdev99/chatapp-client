import { Box, Button, ButtonGroup } from "@mui/material"
import React, { Suspense, useState } from "react"
import AuthLogin from "../components/auth/AuthLogin"
import AuthRegistration from "../components/auth/AuthRegistration"
// import { GoogleLogin, useGoogleLogin } from "@react-oauth/google"
// import { toast } from "../utils/toast"

export const Component = () => {
    const [toggle, setToggle] = useState({
        login: true,
        registration: false,
    })
    const showLogin = () => setToggle((prevState) => ({...prevState, login: true, registration: false}))
    const showRegistration = () => setToggle((prevState) => ({...prevState, registration: true, login: false}))
    return(
        <Suspense fallback={<div>Loading...</div>}>
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
            >   
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <ButtonGroup fullWidth aria-label="Basic button group">
                        <Button variant="contained" onClick={showLogin}>Log In</Button>
                        <Button variant="contained" onClick={showRegistration}>Registration</Button>
                    </ButtonGroup>
                </Box>
                <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    }} 
                >
                    {(toggle.login) && (<AuthLogin />)}
                    {(toggle.registration) && (<AuthRegistration />)}
                </Box>
            </Box>
        </Suspense>
    )
}