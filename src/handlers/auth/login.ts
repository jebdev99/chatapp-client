import axios from "axios";
export const loginHandler = async (email: string, password: string) => {
    let response:{message: string | unknown, status: number, token: string};
    try {
        const { data, status } = await axios.get(`${import.meta.env.VITE_API_URL}/auth/login?email=${email}&password=${password}`)
        console.log(data);
        response={message: data.message, status, token: data.token};
    } catch (error) {
        console.error(error);
        response={message: "Network Error", status: 500, token: 'err'};
    }
    return response;
}