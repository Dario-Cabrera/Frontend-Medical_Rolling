import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RegisterPageUser } from "../src/Views/RegisterPageUser";
import { RegisterPageDoctor } from "../src/Views/RegisterPageDoctor";
import { UserProvider } from "../src/Context/UserContext";
import { DoctorProvider } from "../src/Context/DoctorContext";
import { LoginPagesUser } from "../src/Views/LoginPagesUser";
import { LoginPagesDoctor } from "../src/Views/LoginPagesDoctor";
import { PagesUserAppointmentManagement } from "./Views/PagesUserAppointmentManagement";
import { PagesDoctorAppointmentManagement } from "./Views/PagesDoctorAppointmentManagement";
import { AboutUs } from "./Views/AboutUs";
import { Contact } from "./Views/Contact";
import { AppointmentFormPage } from "./Views/AppointmentFormPage";
import { PageAuditor } from "./Views/PageAuditor";
import { ProtectedRouteUser } from "./ProtectedRouteUser";
import { ProtectedRouteDoctor } from "./ProtectedRouteDoctor";
import { AppointmentProvider } from "./Context/AppointmentContext";
import { Navbar } from "./Components/Wrappers/Navbar";

import { ErrorPage } from "./Views/ErrorPage";
const App = () => {
  return (
    <UserProvider>
      <DoctorProvider>
        <AppointmentProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<h1>Soy el home</h1>} />
              <Route path="/registerUser/" element={<RegisterPageUser />} />
              <Route path="/registerDoctor/" element={<RegisterPageDoctor />} />
              <Route path="/loginUser/" element={<LoginPagesUser />} />
              <Route path="/loginDoctor/" element={<LoginPagesDoctor />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/error" element={<ErrorPage />} />

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
                <Route path="/pageAuditor" element={<PageAuditor />} />
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
          </BrowserRouter>
        </AppointmentProvider>
      </DoctorProvider>
    </UserProvider>
  );
};


export default App;
