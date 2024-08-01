import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material"
import { Suspense, useState } from "react"
import { paperPropsStyles } from "../utils/userTab"
import { Logout } from "@mui/icons-material"

const UserTab:React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const clickHandler = (e: React.MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget)
    const closeHandler = () => setAnchorEl(null)
    return (
        <Suspense fallback={<h1>Loading.....</h1>}>
                <Box>
                    <Tooltip title="Account Setting">
                        <IconButton 
                            onClick={clickHandler}
                        >
                            <Avatar />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={closeHandler}
                        slotProps={{
                            paper: {
                                elevation: 0,
                                sx: paperPropsStyles
                            }
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        <MenuItem>
                            <Logout />
                            <Typography textAlign="center">Logout</Typography>
                        </MenuItem>
                    </Menu>
                </Box>
        </Suspense>
    )
}

export default UserTab;