import axios from "axios";

const ACCESS_TOKEN: string = import.meta.env.VITE_API_ACCESS_TOKEN;
const BASE_URL = "https://api.themoviedb.org/3";

export const axiosClient = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});
