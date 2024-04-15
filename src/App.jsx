import React from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
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
import { AppointmentFormPage } from "./Views/AppointmentFormPage";
import Auditor from "./Views/Auditor";
import { ProtectedRouteUser } from "./ProtectedRouteUser";
import { ProtectedRouteDoctor } from "./ProtectedRouteDoctor";
import { PagesUserAppointmentManagement } from "./Views/PagesUserAppointmentManagement";
import { PagesDoctorAppointmentManagement } from "./Views/PagesDoctorAppointmentManagement";
import { AppointmentProvider } from "./Context/AppointmentContext";

function App() {
  return (
    <UserProvider>
      <DoctorProvider>
        <AppointmentProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/registerUser/" element={<RegisterPageUser />} />
              <Route path="/registerDoctor/" element={<RegisterPageDoctor />} />
              <Route path="/loginUser/" element={<LoginPagesUser />} />
              <Route path="/loginDoctor/" element={<LoginPagesDoctor />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactForm />} />
              <Route path="/error" element={<Error404 />} />

              <Route element={<ProtectedRouteUser />}>
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
                <Route path="/pageAuditor" element={<Auditor />} />
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
              </Route>
            </Routes>
            <Footer />
          </BrowserRouter>
        </AppointmentProvider>
      </DoctorProvider>
    </UserProvider>
  );
}

export default App;
