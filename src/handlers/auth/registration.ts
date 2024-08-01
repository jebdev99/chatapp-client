import axios from "axios"
const VITE_API_URL = "http://localhost:3001"
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