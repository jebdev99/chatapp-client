import axios from "axios";
import { VITE_API_URL } from "../../utils/envVariables";
export const loginHandler = async (formData:FormData) => {
    const { data, status } = await axios.post(`${VITE_API_URL}/auth/login`,
        formData, 
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    return { data, status }
}

export const checkTokenHandler = async (token: string) => {
    const formData = new FormData();
    formData.append("token", token);
    const { data, status } = await axios.post(`${VITE_API_URL}/auth/checkToken`,
        formData, 
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    return { data, status }
}