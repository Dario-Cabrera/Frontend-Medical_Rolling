import React from "react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  return (
    <div className="min-h-auto bg-cw font-sans bg-w">
      <div className="container mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
          <div className="relative rounded-lg overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105 shadow-xl hover:shadow-2xl">
            <div className="hero" style={{ backgroundImage: "url(https://i.ibb.co/ZHQ7DBM/proeza-porta-2.jpg)" }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <Link to="/error">
                    <button className="btn btn-info bg-ts hover:bg-hb hover:text-w text-sm md:text-xs">SANATORIOS</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105 shadow-xl hover:shadow-2xl">
            <div className="hero" style={{ backgroundImage: "url(https://i.ibb.co/TgxMXFm/Ambulancias-1-e1588885257312.png)" }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <Link to="/error">
                    <button className="btn btn-info bg-ts hover:bg-hb hover:text-w text-md md:text-xs">AMBULANCIA</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105 shadow-xl hover:shadow-2xl">
            <div className="hero" style={{ backgroundImage: "url(https://i.ibb.co/XkkMBmL/R.jpg)" }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <Link to="/error">
                    <button className="btn btn-info bg-ts hover:bg-hb hover:text-w text-sm md:text-xs">GUARDIA</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105 shadow-xl hover:shadow-2xl">
            <div className="hero" style={{ backgroundImage: "url(https://www.swissmedical.com.ar/prepagaclientes/assets/images/novedades/receta.jpg)" }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <Link to="/error">
                    <button className="btn btn-info bg-ts hover:bg-hb hover:text-w text-sm md:text-xs">FARMACIAS</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
