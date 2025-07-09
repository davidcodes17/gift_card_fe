import axios from "axios";

const api_secured = axios.create({
  baseURL: import.meta.env.VITE_HOST,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default api_secured;