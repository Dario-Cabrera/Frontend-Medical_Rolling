import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Wrappers/Navbar";
import { Footer } from "./Components/Wrappers/Footer";
import Error404 from "./Views/ERROR404";
import AboutUs from "./Views/AboutUs";
import Homepage from "./Views/Homepage";
import ContactForm from "./Views/ContactUs";

function App() {
  return (
    <Router>
      <div>
        {/* Envuelve tus rutas en un div o un fragmento */}
        <Navbar />
        <Routes>
          <Route path="/error" element={<Error404 />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/contactus" element={<ContactForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
