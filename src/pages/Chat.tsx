import { Box, Button, TextField, Typography } from "@mui/material";
import { Send as SendIcon } from "@mui/icons-material";
import React, { useState } from "react";
import { Input } from "../types/chat"
import { messageSentAt } from "../utils/formatDate";

export const Component = () => {

    const [message, setMessage] = useState<Input>({message: '', sentDate: ''});
    const [displayMessage, setDisplayMessage] = useState<string[]>([]);
    const handleChangeMessage = (e: React.ChangeEvent<HTMLInputElement>):void => setMessage({message: e.target.value, sentDate: messageSentAt()});
    const handleSend = (e:React.FormEvent):void => {
        e.preventDefault();
        setDisplayMessage([...displayMessage, message.message]); 
        setMessage({message: '', sentDate: ''});
    }
    return (
            <Box
                component="form"
                onSubmit={handleSend}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "16px",
                    height: "100vh",                    
                }}
            >
                <Box sx={{ marginBottom: "8px" }}>
                    <Typography variant="h4" component="h4">Chat App</Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        alignItems: "flex-end",
                        height: "100%",
                        width: "100%",
                        overflowY: "scroll",
                        overflowX: "hidden",
                        border: 1,
                        marginBottom: "8px",
                        padding: "8px"
                    }}
                >
                    {displayMessage.map((msg, i) => (<Typography key={i} sx={{ backgroundColor: "lime", margin: "8px", padding: "8px", borderRadius: "8px" }}>{msg}</Typography>))}
                </Box>
                <Box
                sx={{
                    position: "sticky",
                    bottom: 0,
                    width: "100%",
                    padding: "16px",
                }}
                >
                    <TextField
                        name="message"
                        value={message.message}
                        onChange={handleChangeMessage}
                        placeholder="Type your message here..."
                        sx={{ marginBottom: "8px" }}
                        fullWidth
                    />
                    <Button variant="contained" endIcon={<SendIcon />} type="submit" fullWidth>Send</Button>
                </Box>
            </Box>
    )

}