import React from "react";

export const Footer = () => {
  return (
    <footer className="footer p-10 bg-c text-base-content">
      <nav>
        <h6 className="footer-title text-ts">Sucursales</h6>
        <p className="">San Miguel de Tucumán (Casa Central)</p>
        <p className="">Yerba Buena</p>
        <p className="">Tafí Viejo</p>
        <p className="">Concepción</p>
      </nav>
      <nav>
        <h6 className="footer-title text-ts">Atención</h6>
        <p className="">General Paz 656</p>
        <p className="">Lunes a Viernes: 08:00 a 16:00</p>
        <p className="">Sábados: 08:00 a 12:00</p>
        <h6 className="footer-title mt-6 text-ts">Teléfonos</h6>
        <p className="">Whatsapp: +54-0381-1234567</p>
        <p className="">Tel: +54-0381-4123456</p>
      </nav>
      <nav>
        <h6 className="footer-title text-ts">Redes Sociales</h6>
        <div className="grid grid-flow-col gap-4">
          <a>
            <img src="https://i.ibb.co/svX8BYY/facebook-5968973-BLANCO.png" width="29" height="29" className="img-fluid cursor-pointer" />
          </a>
          <a>
            <img src="https://i.ibb.co/xs2KJMx/instagram-5968982-BLANCO.png" width="29" height="29" className="img-fluid cursor-pointer" />
          </a>
          <a>
            <img src="https://i.ibb.co/s6fQm49/whatsapp-5969035-BLANCO.png" width="29" height="29" className="img-fluid cursor-pointer" />
          </a>
        </div>
      </nav>
      {/* <div>
    <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
  </div> */}
    </footer>
  );
};
