import axios from "axios";
// import {InterfaceLoginHandler} from "../types/login"
export const loginHandler = async (formData:FormData) => {
    let response:{message: string | unknown, status: number};
    try {
        const { data, status } = await axios.post(`
            ${import.meta.env.VITE_API_URL}/login`, 
            formData,
            {
                headers: { 
                    'Content-Type': 'multipart/form-data',
                },
            }
        )
        console.log(data);
        response={message: data.message, status};
    } catch (error) {
        console.error(error);
        response={message: "Network Error", status: 500};
    }
    return response;
}

export const setItemInStorage = (key: string, value: string):void => {
    localStorage.setItem(key, value);
}

export const onJoinRoomHandler = (name: string, roomId: string):void => {
    if(roomId.trim().length > 0) {
        // auth.login();
        setItemInStorage("user", name)
    }
    // history.push(`/${roomId}`)
    window.document.location=`/chat/${roomId}`;
}
