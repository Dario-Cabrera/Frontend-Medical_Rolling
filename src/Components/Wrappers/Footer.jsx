import React from 'react'

export const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-300 text-base-content">

  <nav>
    <h6 className="footer-title">Sucursales</h6> 
    <p className="">San Miguel de Tucumán (Casa Central)</p>
    <p className="">Yerba Buena</p>
    <p className="">Tafí Viejo</p>
    <p className="">Concepción</p>
  </nav> 
  <nav>
    <h6 className="footer-title">Atención</h6> 
    <p className="">General Paz 656</p>
    <p className="">Lunes a Viernes: 08:00 a 16:00 Hs</p>
    <p className="">Sábados: 08:00 a 12:00 Hs</p>
    <h6 className="footer-title mt-6">Teléfonos</h6> 
    <p className="">Whatsapp: 3811234567</p>
    <p className="">tel: 03814123456</p>
  </nav> 
  <nav>
    <h6 className="footer-title">Redes Sociales</h6> 
    <div className="grid grid-flow-col gap-4">
      <a><img src="https://cdn.icon-icons.com/icons2/4029/PNG/512/twitter_x_new_logo_square_x_icon_256075.png" width="32" height="32" className="img-fluid cursor-pointer"/></a>
      <a><img src="https://cdn.icon-icons.com/icons2/792/PNG/512/YOUTUBE_icon-icons.com_65537.png" width="24" height="24"  className="img-fluid cursor-pointer"/></a>
      <a><img src="https://cdn.icon-icons.com/icons2/792/PNG/512/FB_icon-icons.com_65534.png" width="24" height="24" className="img-fluid cursor-pointer"/></a>
    </div>
  </nav>
  {/* <div>
    <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
  </div> */}
</footer>
)
}



