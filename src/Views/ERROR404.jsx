import React from "react";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-w text-center">
      <section className="bg-w ">
        <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
          <div className="wf-ull lg:w-1/2">
            <p className="text-sm font-medium text-hb">404 error</p>
            <h1 className="mt-3 text-2xl font-semibold text-c md:text-3xl">¡Ups! Parece que te has perdido...</h1>
            <p className="mt-4 text-c">Lo sentimos, la página que estás buscando no existe.</p>
            <div className="flex items-center mt-6 gap-x-3 justify-center">
              <button
                onClick={goBack}
                className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-w transition-colors duration-200 bg-hb border rounded-lg gap-x-2 sm:w-auto  hover:bg-ts hover:text-c ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
                <span>Volver atrás</span>
              </button>
              <button
                onClick={() => navigate("/home")}
                className="w-1/2 px-5 py-2 text-sm tracking-wide text-w transition-colors duration-200 bg-hb rounded-lg shrink-0 sm:w-auto hover:bg-ts hover:text-c ">
                Ir a Home
              </button>
            </div>
          </div>
          <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
            <img className="w-full max-w-lg lg:mx-auto" src="https://merakiui.com/images/components/illustration.svg" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error404;
