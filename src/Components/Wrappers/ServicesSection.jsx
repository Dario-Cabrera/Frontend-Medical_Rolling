import React from "react";

const ServicesSection = () => {
  return (
    <div className="min-h-auto bg-cw font-sans bg-w">
      <div className="container mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
          <div className="relative rounded-lg overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105 shadow-xl hover:shadow-2xl">
            <div className="hero" style={{ backgroundImage: "url(https://i.ibb.co/d6W6YtH/OIP.jpg)" }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <button className="btn btn-info bg-ts hover:bg-hb hover:text-w text-sm md:text-xs">TURNOS</button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105 shadow-xl hover:shadow-2xl">
            <div className="hero" style={{ backgroundImage: "url(https://i.ibb.co/ZHQ7DBM/proeza-porta-2.jpg)" }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <button className="btn btn-info bg-ts hover:bg-hb hover:text-w text-sm md:text-xs">SANATORIOS</button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105 shadow-xl hover:shadow-2xl">
            <div className="hero" style={{ backgroundImage: "url(https://i.ibb.co/jzxprxf/servicio-chequeo-medico.jpg)" }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <button className="btn btn-info bg-ts hover:bg-hb hover:text-w text-sm md:text-xs">COMO TE ATENDIMOS?</button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105 shadow-xl hover:shadow-2xl">
            <div className="hero" style={{ backgroundImage: "url(https://i.ibb.co/gSvSb0g/istockphoto-1400620779-170667a.jpg)" }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <button className="btn btn-info bg-ts hover:bg-hb hover:text-w text-sm md:text-xs">DESCARGA TU FACTURA</button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105 shadow-xl hover:shadow-2xl">
            <div className="hero" style={{ backgroundImage: "url(https://i.ibb.co/TgxMXFm/Ambulancias-1-e1588885257312.png)" }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <button className="btn btn-info bg-ts hover:bg-hb hover:text-w text-md md:text-xs">AMBULANCIA</button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105 shadow-xl hover:shadow-2xl">
            <div className="hero" style={{ backgroundImage: "url(https://i.ibb.co/XkkMBmL/R.jpg)" }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <button className="btn btn-info bg-ts hover:bg-hb hover:text-w text-sm md:text-xs">GUARDIA</button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105 shadow-xl hover:shadow-2xl">
            <div className="hero" style={{ backgroundImage: "url(https://www.swissmedical.com.ar/prepagaclientes/assets/images/novedades/receta.jpg)" }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <button className="btn btn-info bg-ts hover:bg-hb hover:text-w text-sm md:text-xs">RECETAS</button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105 shadow-xl hover:shadow-2xl">
            <div className="hero" style={{ backgroundImage: "url(https://www.generali.es/blog/tuasesorsalud/wp-content/uploads/2022/04/autorizaciones-medicas-scaled.jpeg)" }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <button className="btn btn-info bg-ts hover:bg-hb hover:text-w text-sm md:text-xs">AUTORIZACIONES</button>
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
