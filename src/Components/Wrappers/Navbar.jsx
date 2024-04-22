import Logo_MR from "../../assets/img/Logo_MR.png";
import { Link } from "react-router-dom";
import { userAuth } from "../../Context/UserContext";
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
  console.log(user);

  return (
    <div className="navbar bg-w text-c">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidde bg-w"
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
            className="bg-w menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
          >
            <li>
              <Link to="/AboutUs">Quienes Somos</Link>
            </li>
            <li>
              <Link to="/contact">Planes</Link>
              <ul className="p-2 ">
                <li>
                  <Link to="/contact">Plan Familiar</Link>
                </li>
                <li>
                  <Link to="/contact">Plan Joven</Link>
                </li>
                <li>
                  <Link to="/contact">Plan Senior</Link>
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

            {isAuthenticatedUser == true && isAuthenticatedDoctor == false ? (
              <>
                <li>
                  <Link
                    to="/add-appointmentsUser/"
                    className="btn btn-xs mt-3 btn-info bg-hb text-w hover:text-c"
                  >
                    Crear Turno
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    onClick={() => {
                      logoutUser();
                    }}
                    className="btn btn-xs mt-3 btn-info bg-hb text-w hover:text-c"
                  >
                    Cerrar sesion
                  </Link>
                </li>
              </>
            ) : isAuthenticatedDoctor == true &&
              isAuthenticatedUser == false ? (
              <>
                <li>
                  <Link
                    to="/appointmentsDoctor/"
                    className="btn btn-xs mt-3 btn-info bg-hb text-w hover:text-c"
                  >
                    Mis citas
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    onClick={() => {
                      logoutDoctor();
                    }}
                  >
                    Cerrar sesion
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/loginDoctor/"
                    className="btn btn-xs mt-3 btn-info bg-hb text-w hover:text-c"
                  >
                    Admin
                  </Link>
                </li>
                <li>
                  <Link
                    to="/registerUser/"
                    className="btn btn-xs mt-3 btn-info bg-hb text-w hover:text-c"
                  >
                    Registrar
                  </Link>
                </li>
                <li>
                  <Link
                    to="/loginUser/"
                    className="btn btn-xs mt-3 btn-info bg-hb text-w hover:text-c"
                  >
                    LogIn
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link to="/" className="w-16 cursor-pointer">
          <img src={Logo_MR} alt="logo" />
        </Link>
        {/* <img className="w-16 cursor-pointer" src={Logo_MR} alt="logo" /> */}
        {/* <Link className="btn btn-ghost text-xl">daisyUI</Link> */}
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/AboutUs">Quienes Somos</Link>
          </li>
          <li>
            <details>
              <summary>Planes</summary>
              <ul className="p-2">
                <li>
                  <Link to="/contact">Plan Familiar</Link>
                </li>
                <li>
                  <Link to="/contact">Plan Joven</Link>
                </li>
                <li>
                  <Link to="/contact">Plan Senior</Link>
                </li>
              </ul>
            </details>
          </li>
          {/* <li><NavLink to="*">Cartilla</NavLink></li> */}
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
      <div className="navbar-end hidden lg:flex">
        {isAuthenticatedUser == true && isAuthenticatedDoctor == false ? (
          <>
            <Link
              to="/add-appointmentsUser/"
              className="btn mr-4 btn-info bg-hb text-w hover:text-c"
            >
              Crear Turno
            </Link>

            <Link
              to="/"
              onClick={() => {
                logoutUser();
              }}
              className="btn mr-4 btn-info bg-hb text-w hover:text-c"
            >
              Cerrar sesion
            </Link>
          </>
        ) : isAuthenticatedDoctor == true && isAuthenticatedUser == false ? (
          <>
            <Link
              to="/appointmentsDoctor/"
              className="btn mr-4 btn-info bg-hb text-w hover:text-c"
            >
              Mis citas
            </Link>

            <Link
              to="/"
              onClick={() => {
                logoutDoctor;
              }}
              className="btn mr-4 btn-info bg-hb text-w hover:text-c"
            >
              Cerrar sesion
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/loginDoctor/"
              className="btn mr-4 btn-info bg-hb text-w hover:text-c"
            >
              Admin
            </Link>

            <Link
              to="/registerUser/"
              className="btn mr-4 btn-info bg-hb text-w hover:text-c"
            >
              Registrar
            </Link>

            <Link
              to="/loginUser/"
              className="btn mr-4 btn-info bg-hb text-w hover:text-c"
            >
              LogIn
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
