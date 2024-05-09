import axios from "axios";

const instance = axios.create({
  baseURL: "https://backend-medical-rolling-e2u6evw2k.vercel.app/api",
  withCredentials: true,
});

export default instance;
