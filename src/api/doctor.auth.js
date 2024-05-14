import axios from "./axios";

export const getDoctorsRequest = () => axios.get(`/gettingdoctors`);
export const getUsersRequest = () => axios.get(`/gettingusers`);

export const registerRequestDoctor = (doctor) => axios.post(`/createdoctor/`, doctor);

export const loginRequestDoctor = (doctor) => axios.post(`/logindoctor`, doctor);

export const varityDoctorRequest = async (data) => {
  try {
    const res = await axios.post("/verifydoctor", data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const varityDoctorRequest2 = async (doctorId) => {
  try {
    const res = await axios.post("/verifydoctor", {
      dataDoctor: { id: doctorId },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};
