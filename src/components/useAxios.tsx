import axios, { AxiosRequestConfig } from 'axios';

const baseUrl = "https://cfokegxlbe.execute-api.ap-south-1.amazonaws.com/dev/"


export const useAxios = () => {

   const doCall = async (config : AxiosRequestConfig)  => {
    try{
        const data: Record<string,unknown> =  await axios({
            baseURL : baseUrl,
            ...config,
        })
        return {
            status : "success",
            data,
        }
    }catch(e){
        return {
            status : "error",
            errorDetails : e
        }
    }
    }

    return {doCall}
}