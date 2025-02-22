import axios from "axios";
import {useStateContext} from "./context/contextProvider";

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('ACCESS_TOKEN');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
})

axiosClient.interceptors.response.use((response) => {
  return response;
}, (error) => {
  try {
    const {response} = error;
    if (response.status === 401) {
      localStorage.removeItem('ACCESS_TOKEN');
    }
  } catch(e) {
    console.error(e);
  }
  throw error;
})

export default axiosClient
