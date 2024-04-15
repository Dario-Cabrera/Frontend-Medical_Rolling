import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Wrappers/Navbar";
import { Footer } from "./Components/Wrappers/Footer";
import Error404 from "./Views/ERROR404";
import AboutUs from "./Views/AboutUs";
import Homepage from "./Views/Homepage";
import ContactForm from "./Views/ContactUs";
import { BrowserRouter } from "react-router-dom";
import { RegisterPageUser } from "../src/Views/RegisterPageUser";
import { RegisterPageDoctor } from "../src/Views/RegisterPageDoctor";
import { UserProvider } from "../src/Context/UserContext";
import { DoctorProvider } from "../src/Context/DoctorContext";
import { LoginPagesUser } from "../src/Views/LoginPagesUser";
import { LoginPagesDoctor } from "../src/Views/LoginPagesDoctor";

function App() {
  return (
    <UserProvider>
      <DoctorProvider>
        <BrowserRouter>
        <Navbar />
          <Routes>
          <Route path="/" element={<Homepage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/registerUser/" element={<RegisterPageUser />} />
            <Route path="/registerDoctor/" element={<RegisterPageDoctor />} />
            <Route path="/loginUser/" element={<LoginPagesUser/>} />
            <Route path="/loginDoctor/" element={<LoginPagesDoctor/>} />
            <Route path="/appointments" element={<h1>Soy los turnos</h1>} />
            <Route path="/error" element={<Error404 />} />
            <Route
              path="/add-appointments"
              element={<h1>Pagina formulario nuevo turno</h1>}
            />
            <Route
              path="/appointments/:id"
              element={
                <h1>Actualizar turno(misma pagina formulario nuevo turno)</h1>
              }
            />
            <Route
              path="/users/:id"
              element={
                <h1>
                  Actualizar usuario(misma pagina formulario nuevo usuario)
                </h1>
              }
            />
            <Route
              path="/doctors/:id"
              element={
                <h1>Actualizar Doctor(misma pagina formulario nuevo doctor)</h1>
              }
            />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </DoctorProvider>
    </UserProvider>
  );
}

export default App;
