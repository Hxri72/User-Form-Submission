import { axiosInstance } from './axiosInstance'

export const postData = async (payload) => {
    try {
        const response = await axiosInstance.post("/saveUser",(payload))
        return response.data;
    } catch (error) {
        return error.response
    }
}