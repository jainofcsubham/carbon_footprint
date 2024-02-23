import axios, { AxiosRequestConfig } from "axios";

const baseUrl = "https://2bikh722cf.execute-api.ap-south-1.amazonaws.com/dev";

export const useAxios = () => {
  const doCall = async (config: AxiosRequestConfig) => {
    const token = localStorage.getItem("idToken");

    try {
      const data: Record<string, unknown> = await axios({
        baseURL: baseUrl,
        headers: {
          Authorization: token ? `Bearer ${token}` : undefined,
        },
        ...config,
      });
      return {
        status: "success",
        data,
      };
    } catch (e) {
      return {
        status: "error",
        errorDetails: e,
      };
    }
  };

  return { doCall };
};
