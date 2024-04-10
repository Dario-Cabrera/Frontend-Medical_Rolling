import React from 'react'
import Logo_MR from '../../assets/img/Logo_MR.png'
// import { NavLink } from 'react-router-dom'; 


export const Navbar = () => {

return(

    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Quienes Somos</a></li>
            <li>
              <a>Planes</a>
              <ul className="p-2">
                <li><a>Plan Familiar</a></li>
                <li><a>Plan Joven</a></li>
                <li><a>Plan Senior</a></li>
              </ul>
            </li>
            <li><a>Cartilla</a></li>
            <li><a>Contacto</a></li>
            <li><a>Subí tu CV</a></li>
          </ul>
        </div>
          {/* <NavLink to="/" className="w-16 cursor-pointer">
            <img src={Logo_MR} alt="logo" />
          </NavLink> */}
        <img className= "w-16 cursor-pointer" src={Logo_MR} alt="logo"/>
        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Quienes Somos</a></li>
          <li>
            <details>
              <summary>Planes</summary>
              <ul className="p-2">
                <li><a>Plan Familiar</a></li>
                <li><a>Plan Joven</a></li>
                <li><a>Plan Senior</a></li>
              </ul>
            </details>
          </li>
          {/* <li><NavLink to="*">Cartilla</NavLink></li> */}
          <li><a >Cartilla</a></li>
          <li><a>Contacto</a></li>
          <li><a>Subí tu CV</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        {/* {
          auth && <NavLink to= "admin" className="btn mr-4 border-blue-600 hover:bg-blue-700">
            Admin
            </NavLink>
        } */}
        <a className="btn mr-4 border-blue-600 hover:bg-blue-700">
            Admin
            </a>
        <a className="btn mr-4">Registrar</a>
        <a className="btn" >
          LogIn
        </a>
      </div>
    </div> 

)
}





