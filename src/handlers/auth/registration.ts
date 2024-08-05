import axios from "axios"
import { VITE_API_URL } from "../../utils/envVariables"
export const registrationHandler = async (formData:FormData) => {
    const { data, status } = await axios.post(`${VITE_API_URL}/auth/register`, 
        formData, 
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    return { data, status }
}