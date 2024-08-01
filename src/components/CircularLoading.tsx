import { Box, CircularProgress } from "@mui/material"

const CircularLoading = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignSelf: 'center' }}>
            <CircularProgress />
        </Box>
    )
}

export default CircularLoading;