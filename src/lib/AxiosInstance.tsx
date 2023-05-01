import axios from "axios";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

const axiosInstance = axios.create({
  baseURL: publicRuntimeConfig.apiURL,
});

export default axiosInstance;
