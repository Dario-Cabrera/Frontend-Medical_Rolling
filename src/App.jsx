// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Homepage } from "../src/Views/Homepage"
import { RegisterPageUser } from "../src/Views/RegisterPageUser";
import { RegisterPageDoctor } from "../src/Views/RegisterPageDoctor";
import { UserProvider, userAuth } from "../src/Context/UserContext";
import { DoctorProvider } from "../src/Context/DoctorContext";
import { LoginPagesUser } from "../src/Views/LoginPagesUser";
import { LoginPagesDoctor } from "../src/Views/LoginPagesDoctor";
import { PagesUserAppointmentManagement } from "./Views/PagesUserAppointmentManagement";
import { PagesDoctorAppointmentManagement } from "./Views/PagesDoctorAppointmentManagement";
import { AboutUs } from "./Views/AboutUs";
import { ContactPage } from "./Views/ContactPage";
import { AppointmentFormPage } from "./Views/AppointmentFormPage";
import { AuditorPage } from "./Views/Auditor";
// import { ProtectedRouteUser } from "./ProtectedRouteUser";
// import { ProtectedRouteDoctor } from "./ProtectedRouteDoctor";
import { AppointmentProvider } from "./Context/AppointmentContext";
import { Navbar } from "./Components/Wrappers/Navbar";
import { Footer } from "./Components/Wrappers/Footer";
import { Error404 } from "./Views/ERROR404";
import { ProtectedRoutes } from "./Routes/ProtectedRoutes";

const App = () => {

  const email = JSON.parse(localStorage.getItem("email")) || null;
  const isAdmin = JSON.parse(localStorage.getItem("admin")) || null;
  const isDoctor = JSON.parse(localStorage.getItem("doctor")) || null;
  const isUser = JSON.parse(localStorage.getItem("user")) || null;

  console.log("Valor de admin: ",isAdmin, isDoctor)

 


  return (
    <UserProvider>
      <DoctorProvider>
        <AppointmentProvider>
          <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path="/" element={ <Homepage/> } />
              <Route path="/registerUser/" element={<RegisterPageUser />} />
              <Route path="/registerDoctor/" element={<RegisterPageDoctor />} />
              <Route path="/loginUser/" element={<LoginPagesUser />} />
              <Route path="/loginDoctor/" element={<LoginPagesDoctor />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/error" element={<Error404 />} />

              <Route path="/auditorPage" element={
                <ProtectedRoutes isAdmin={isAdmin}>
                    <AuditorPage />
                </ProtectedRoutes>
              }/>
              <Route path="/appointmentsDoctor" element={
                <ProtectedRoutes isDoctor={isDoctor}>
                  <PagesDoctorAppointmentManagement />
                </ProtectedRoutes>
              } />
              <Route path="/appointmentsUser" element={
                <ProtectedRoutes isUser={isUser}>
                  <AppointmentFormPage />
                </ProtectedRoutes>
              } />

              

              {/* <Route
                  path="/appointmentsUser"
                  element={
                    <ProtectedRoutes>
                      <PagesUserAppointmentManagement />
                </ProtectedRoutes>
                }
                /> */}

              {/* <Route element={<ProtectedRouteUser />}>
                <Route
                  path="/appointmentsUser"
                  element={<PagesUserAppointmentManagement />}
                />

                <Route
                  path="/add-appointmentsUser"
                  element={<AppointmentFormPage />}
                />
                <Route
                  path="/appointments/:id"
                  element={<AppointmentFormPage />}
                />
                <Route path="/users/:id" element={<RegisterPageUser />} />
              </Route>
              <Route element={<ProtectedRouteDoctor />}>
                <Route path="/pageAuditor" element={<AuditorPage />} />
                <Route path="/registerDoctor/" element={<RegisterPageDoctor />} />
                <Route
                  path="/appointmentsDoctor"
                  element={<PagesDoctorAppointmentManagement />}
                />
                <Route
                  path="/add-appointments"
                  element={<AppointmentFormPage />}
                />
                <Route
                  path="/appointments/:id"
                  element={<AppointmentFormPage />}
                />
                <Route path="/doctors/:id" element={<RegisterPageDoctor />} />
              </Route> */}
            </Routes>
            <Footer />
          </BrowserRouter>
        </AppointmentProvider>
      </DoctorProvider>
    </UserProvider>
  );
};


export default App;










