/* eslint-disable no-useless-catch */
import axios from "./axios";

export const registerRequestDoctor = (doctor) =>
  axios.post(`/createdoctor/`, doctor);

export const loginRequestDoctor = (doctor) =>
  axios.post(`/logindoctor`, doctor);

export const varityDoctorRequest = async (data) => {
  // eslint-disable-next-line no-useless-catch
  /*     console.log("Estoy en docto.auth",data)
   */ try {
    const res = await axios.post("/verifydoctor", data);
    /*       console.log("Estoy saliendo del await",res.data)
     */ return res.data; //VERIFICAR QUE ESTA PASANDO AQUI
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
