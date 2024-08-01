import { Box, Typography } from "@mui/material";
import UserTab from "./UserTab";

const Header = () => {
    return (
        <Box 
            sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "16px 64px",
                boxShadow: "3px 3px 3px 3px rgba(100,100,200,20%)"
            }}
        >
            <Typography
                variant="h5" 
                component="h5" 
                alignContent="center"
            >
                Chat App
            </Typography>
            <UserTab />
        </Box>
    )
}

export default Header;