export const paperPropsStyles = {
    overflow: 'visibie',
    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,.32))',
    mt: 1.5,
    '& .MuiAvatar-root': {
        width: 32,
        height: 32,
        ml: - 0.5,
        mr: 1
    },
    '& :before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        right: 0,
        width: 10,
        height: 10,
        bgColor: 'background.paper',
        transform: 'translateY(-50%, 45deg)',
        zIndex: 0,
    },
}