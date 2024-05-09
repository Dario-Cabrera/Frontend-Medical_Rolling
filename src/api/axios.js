import axios from "axios";

const instance = axios.create({
  baseURL: "https://backend-medical-rolling.vercel.app/api",
  withCredentials: true,
});

export default instance;
