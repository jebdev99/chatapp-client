import { Box, Button, Typography } from "@mui/material"
import { Suspense } from "react";
import { useNavigate } from "react-router-dom"

export const Component = () => {
    const navigate = useNavigate();
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Box
                sx={{
                    marginTop: "100px",
                    display: "flex",
                    flexDirection: "column",
                    margin: "auto",
                    alignContent: "center"
                }}
            >
                <Typography sx={{ alignSelf: "center" }}>A Chat Application For Everyone</Typography>
                <Typography sx={{ alignSelf: "center" }}>Where you can communicate to other people!</Typography>
                <Typography sx={{ alignSelf: "center" }}>To start the Chat Application. Click the "Chat Now" button.</Typography>
                <Button sx={{ alignSelf: "center", maxWidth: 200 }} variant="contained" onClick={() => navigate("/login")}>Chat Now</Button>
            </Box>
        </Suspense>
    )
}