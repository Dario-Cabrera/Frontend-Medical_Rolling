import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "../src/Views/Homepage";
import { RegisterPageUser } from "../src/Views/RegisterPageUser";
import { RegisterPageDoctor } from "../src/Views/RegisterPageDoctor";
import { UserProvider } from "../src/Context/UserContext";
import { DoctorProvider } from "../src/Context/DoctorContext";
import { LoginPagesUser } from "../src/Views/LoginPagesUser";
import { LoginPagesDoctor } from "../src/Views/LoginPagesDoctor";
import { PagesUserAppointmentManagement } from "./Views/PagesUserAppointmentManagement";
import { PagesDoctorAppointmentManagement } from "./Views/PagesDoctorAppointmentManagement";
import { AboutUs } from "./Views/AboutUs";
import { ContactPage } from "./Views/ContactPage";
import { AppointmentFormPage } from "./Views/AppointmentFormPage";
import { AuditorPage } from "./Views/Auditor";
import { ProtectedRouteUser } from "../src/Routes/ProtectedRouteUser";
import { ProtectedRouteDoctor } from "../src/Routes/ProtectedRouteDoctor";
import { ProtectedRouteAuditor } from "../src/Routes/ProtectedRouteAuditor";
import { AppointmentProvider } from "./Context/AppointmentContext";
import { Navbar } from "./Components/Wrappers/Navbar";
import { Footer } from "./Components/Wrappers/Footer";
import { Error404 } from "./Views/ERROR404";
import { ContactForm } from "./Views/ContactUs";
import moment from "moment-timezone";

moment.tz.setDefault("America/Argentina/Buenos_Aires");

const App = () => {
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
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/contactPlan" element={<ContactPage />} />
              <Route path="/contact" element={<ContactForm />} />
              <Route path="/error" element={<Error404 />} />

              <Route element={<ProtectedRouteAuditor />}>
                <Route path="/auditorPage" element={<AuditorPage />} />
              </Route>

              <Route element={<ProtectedRouteDoctor />}>
                <Route path="/appointmentsDoctor" element={<PagesDoctorAppointmentManagement />} />
                <Route path="/createappointmentsDoctor" element={<AppointmentFormPage />} />
              </Route>

              <Route element={<ProtectedRouteUser />}>
                <Route path="/createappointmentsUser" element={<AppointmentFormPage />} />
                <Route path="/appointmentsUser" element={<PagesUserAppointmentManagement />} />

              </Route>
            </Routes>
            <Footer />
          </BrowserRouter>
        </AppointmentProvider>
      </DoctorProvider>
    </UserProvider>
  );
};

export default App;
