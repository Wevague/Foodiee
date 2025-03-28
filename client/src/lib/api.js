import axios from "axios";

const api = axios.create({
    baseURL:import.meta.env.VITE_NODE_ENV === "production" 
    ? import.meta.env.VITE_PROD_BASE_URL 
    : import.meta.env.VITE_DEV_BASE_URL
})

export {api}