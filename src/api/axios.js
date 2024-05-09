import axios from "axios";

const instance = axios.create({
  baseURL: "https://backend-medical-rolling-39nneqg01.vercel.app/api",
  withCredentials: true,
});

export default instance;
