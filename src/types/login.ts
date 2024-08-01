import { SnackbarOrigin } from "@mui/material";

export interface Login {
    name: string;
    selector: string;
    roomId: string;
}

export interface InterfaceLoginHandler {
    message: string | unknown;
    statusCode?: number;
}

export interface SnackbarState extends SnackbarOrigin {
    open: boolean;
}