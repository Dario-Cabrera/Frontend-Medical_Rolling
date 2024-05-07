// import React, { useState } from "react";
import Logo_MR from "../../assets/img/Logo_MR.png";
import { Link, NavLink, Navigate } from "react-router-dom";
import { userAuth } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom"; 

// import { doctorAuth } from "../../Context/DoctorContext";
// import {ProtectedRoutes} from "../../Routes/ProtectedRoutes";

// import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const {
    isAuthenticatedUser,
    isAuthenticatedDoctor,
    isAuthenticatedAuditor,
    logoutUser,
    user,
    doctor,
    auditor,
  } = userAuth();

  //user/doctor/auditor ==> Tiene los datos de user. 

  console.log(user);
  // const { isAuthenticatedUser, logoutUser, user } = userAuth();
  // const { isAuthenticatedDoctor, logoutDoctor, doctor } = doctorAuth();
 // console.log(user);
  
//  const isAuthenticatedAuditor = false
//  const isAuthenticatedDoctor = false
//  const isAuthenticatedUser = true


  const LogOut = () => {

    logoutUser()
    window.location.href = '/';
    
  }


  const LogIn = () => {
    <Navigate to='/loginUser/'/> 
  }
 
  
 
  return (
    <div className="navbar bg-w text-c">
      <div className="navbar-start">
        <div className="dropdown">

          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden bg-w"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className=" bg-w menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
          >
            {!(isAuthenticatedAuditor || isAuthenticatedDoctor) && (
              <>

            <li>
              <Link to="/AboutUs">Quienes Somos</Link>
            </li>
            <li>
              <a>Planes</a>
              <ul className="p-2 ">
                <li>
                  <Link to="/contactPlan">Plan Familiar</Link>
                </li>
                <li>
                  <Link to="/contactPlan">Plan Joven</Link>
                </li>
                <li>
                  <Link to="/contactPlan">Plan Senior</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/error">Cartilla</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
            <li>
              <Link to="/error">Subí tu CV</Link>
            </li>
            </>
          )}


{/* ----------------Botones Dropdown ----------------- */}

            {isAuthenticatedAuditor && (<li>
              <Link
                to="/auditorPage"
                className="btn btn-xs mt-3 btn-info bg-hb text-w hover:text-c"
                >
                Admin
                </Link>
            </li>)}
            {isAuthenticatedDoctor && (<li>
              <Link
                to="/appointmentsDoctor"
                className="btn btn-xs mt-3 btn-info bg-hb text-w hover:text-c"
                >
                Mis Turnos
                </Link>
            </li>)}
            {isAuthenticatedUser && (<li>
              <Link
                to="/appointmentsUser"
                className="btn btn-xs mt-3 btn-info bg-hb text-w hover:text-c"
                >
                Mis Turnos
                </Link>
            </li>)}
            {isAuthenticatedUser && (<li>
              <Link
                to="/createappointmentsUser"
                className="btn btn-xs mt-3 btn-info bg-hb text-w hover:text-c"
                >
                Crear Turno
                </Link>
            </li>)}
            {!(isAuthenticatedAuditor || isAuthenticatedDoctor ||isAuthenticatedUser) && (
              <li>
              <Link
                to="/registerUser"
                  className="btn btn-xs mt-3 btn-info bg-hb text-w hover:text-c"
                  >
                  Registrar
                </Link>
              </li>
            )}
                <li>
                  <Link
                     to={(!isAuthenticatedAuditor && !isAuthenticatedDoctor && !isAuthenticatedUser)? "/loginUser/" : null}
                    className="btn btn-xs mt-3 btn-info bg-hb text-w hover:text-c"
                    onClick={() => (isAuthenticatedAuditor || isAuthenticatedDoctor || isAuthenticatedUser)?
                      LogOut() : LogIn()}
                  >
                    {(isAuthenticatedAuditor || isAuthenticatedDoctor || isAuthenticatedUser) ?
                    'LogOut':'LogIn'}

                  </Link>
                </li>
          </ul>

{/* ----------------Botones Dropdown ----------------- */}
        </div>

        <Link to="/" className="w-16 cursor-pointer">



          <img src={Logo_MR} alt="logo" />
        </Link>
        {/* <img className="w-16 cursor-pointer" src={Logo_MR} alt="logo" /> */}
        {/* <Link className="btn btn-ghost text-xl">daisyUI</Link> */}  

      </div>
      
{/* ----------------Menú Navbar ----------------- */}

      {!(isAuthenticatedAuditor || isAuthenticatedDoctor) && (
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/AboutUs">Quienes Somos</Link>
          </li>
          <li>
            <details>
              <summary role="button">Planes</summary>
              <ul className="p-2 bg-white rounded-box mt-3 z-[1] shadow">
                <li>
                  <Link to="/contactPlan">Plan Familiar</Link>
                </li>
                <li>
                  <Link to="/contactPlan">Plan Joven</Link>
                </li>
                <li>
                  <Link to="/contactPlan">Plan Senior</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link to="/error">Cartilla</Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
          <li>
            <Link to="/error">Subí tu CV</Link>
          </li>
        </ul>
      </div>
      )}

{/* ----------------Menú Navbar ----------------- */}

{/* ----------------Botones Navbar ----------------- */}
       
        <div className="navbar-end hidden lg:flex">
                    
           {isAuthenticatedAuditor &&  (           
              <Link
              to="/auditorPage"
              className="btn mr-4 btn-info bg-hb text-w hover:text-c"
              >
              Admin
              </Link>
            )}
            {isAuthenticatedDoctor &&  (           
              <NavLink
              to="/appointmentsDoctor"
              className="btn mr-4 btn-info bg-hb text-w hover:text-c"
              >
              Mis Turnos
              </NavLink>
            )}
            {isAuthenticatedUser &&  (           
              <NavLink
              to="/appointmentsUser"
              className="btn mr-4 btn-info bg-hb text-w hover:text-c"
              >
              Mis Turnos
              </NavLink>
            )}
             {isAuthenticatedUser && (
              <NavLink
                to="/createappointmentsUser"
                className="btn mr-4 btn-info bg-hb text-w hover:text-c"
                >
                Crear Turno
                </NavLink>
            )}            
           {(!isAuthenticatedAuditor && !isAuthenticatedDoctor && !isAuthenticatedUser) && (
           <Link
              to="/registerUser"
              className="btn mr-4 btn-info bg-hb text-w hover:text-c"
            >
              Registrar
            </Link>)}
            
            
            <Link
              to={(!isAuthenticatedAuditor && !isAuthenticatedDoctor && !isAuthenticatedUser)? "/loginUser/" : "/"}
              className="btn mr-4 btn-info bg-hb text-w hover:text-c"
              onClick={() => (isAuthenticatedAuditor || isAuthenticatedDoctor || isAuthenticatedUser)?
                LogOut() : LogIn()
              }
            >
               {(isAuthenticatedAuditor || isAuthenticatedDoctor || isAuthenticatedUser) ?
               'LogOut':'LogIn'}

            </Link>
            
      </div>
    </div>
  );
};
