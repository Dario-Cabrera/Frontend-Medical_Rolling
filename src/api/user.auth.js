import axios from "./axios";

export const registerRequestUser = (user) => axios.post(`/createuser/`, user);

export const loginRequestUser = (user) => axios.post(`/loginuser`, user);

export const varityTokenRequest = async (data) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const res = await axios.post("/verifyuser", data);
    return res.data;
  } catch (error) {
    throw error;
  }
};
