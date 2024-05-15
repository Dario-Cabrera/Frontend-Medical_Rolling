import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [showModal, setShowModal] = useState(false);

  const onSubmit = (data) => {
    setShowModal(true);
    reset();
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="relative flex items-top justify-center min-h-screen bg-w sm:items-center sm:pt-0 font-roboto">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-gray-100 sm:rounded-lg">
              <h1 className="text-4xl sm:text-5xl text-c font-extrabold tracking-tight">Contacto</h1>
              <p className="text-normal text-lg sm:text-2xl font-medium text-c mt-4">Rellena el formulario para ponerte en contacto con nosotros</p>
              <div className="flex flex-col mt-8 text-c">
                <h6 className="footer-title text-ts">Direccion y horarios</h6>
                <p className="">General Paz 656</p>
                <p className="">Lunes a Viernes: 08:00 a 16:00</p>
                <p className="">Sábados: 08:00 a 12:00</p>
                <h6 className="footer-title mt-6 text-ts">Teléfonos</h6>
                <p className="">Whatsapp: +54-0381-1234567</p>
                <p className="">Tel: +54-0381-4123456</p>
                <h6 className="footer-title mt-6 text-ts">Redes Sociales</h6>
                <div className="flex mt-2">
                  <a className="mr-2" href="https://www.facebook.com/Medical-Rolling" target="_blank">
                    <img src="https://i.ibb.co/WGr2GVn/facebook-5968973-NEGRO.png" width="29" height="29" className="img-fluid cursor-pointer" />
                  </a>
                  <a className="mr-2" href="https://www.instagram.com/Medical-Rolling" target="_blank">
                    <img src="https://i.ibb.co/xDwCBvp/instagram-5968982-NEGRO.png" width="29" height="29" className="img-fluid cursor-pointer" />
                  </a>
                  <a href="https://www.whatsapp.com/Medical-Rolling" target="_blank">
                    <img src="https://i.ibb.co/V22ntPY/whatsapp-5969035-NEGRO.png" width="29" height="29" className="img-fluid cursor-pointer" />
                  </a>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="p-8 bg-gray-100 sm:rounded-lg">
              <div className="flex flex-col">
                <label htmlFor="name" className="hidden">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  {...register("name", { 
                    required: {
                      value: true,
                      message: "Campo obligatorio"
                      },
                      minLength: {
                      value: 3,
                      message: "El nombre no es válido"
                      },
                      pattern: {
                        value: /^(?!.* $)[A-Za-z][A-Za-z\s]+(?<!\s)$/,
                        message: "El nombre no es válido"
                      } 
                  })}
                  id="name"
                  placeholder="Nombre Completo"
                  className="w-full mt-2 py-2 px-4 rounded-lg bg-white border border-ts text-c font-semibold focus:border-ts focus:outline-none"
                />
                {errors.name && <span className="text-red-700">⚠️{errors.name.message}</span>}
              </div>

              <div className="flex flex-col mt-4">
                <label htmlFor="email" className="hidden">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  {...register("email", { 
                    required: {
                      value: true,
                      message: "Campo obligatorio"
                      },
                      pattern: {
                        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "Correo inválido"
                      } 
                  })}
                  id="email"
                  placeholder="Correo Electrónico"
                  className="w-full mt-2 py-2 px-4 rounded-lg bg-white border border-ts text-c font-semibold focus:border-ts focus:outline-none"
                />
                {errors.email && <span className="text-red-700">⚠️{errors.email.message}</span>}
              </div>

              <div className="flex flex-col mt-4">
                <label htmlFor="tel" className="hidden">
                  Número de Teléfono
                </label>
                <input
                  type="tel"
                  {...register("tel", { 
                    required: {
                      value: true,
                      message: "Campo obligatorio"
                      },
                      minLength: {
                      value: 6,
                      message: "El teléfono debe tener 6 caracteres mínimo"
                      },
                      maxLength: {
                        value: 8,
                        message: "El teléfono debe tener 8 caracteres máximo"
                        },
                      pattern: {
                        value: /^\d+$/,
                        message: "Teléfono inválido"
                      } 
                  })}
                  id="tel"
                  placeholder="Número de Teléfono"
                  className="w-full mt-2 py-2 px-4 rounded-lg bg-white border border-ts text-c font-semibold focus:border-ts focus:outline-none"
                />
                {errors.tel && <span className="text-red-700">⚠️{errors.tel.message}</span>}
              </div>

              <div className="flex flex-col mt-4">
                <label htmlFor="message" className="hidden">
                  Mensaje
                </label>
                <textarea
                  {...register("message", { 
                    required: {
                      value: true,
                      message: "Campo obligatorio"
                      },
                      maxLength: {
                      value: 300,
                      message: "Excedió el número máximo de caracteres"
                      }, 
                      pattern: {
                        value: /^\S.*\S$/,
                        message: "Por favor, escriba un mensaje"
                      } 
                  })}
                  id="message"
                  placeholder="Mensaje"
                  className="w-full min-h-[200px] max-h-[300px] mt-2 py-2 px-4 rounded-lg bg-white border border-ts text-c font-semibold focus:border-ts focus:outline-none resize-none"
                />
                {errors.message && <span className="text-red-700">⚠️{errors.message.message}</span>}
              </div>

              <button type="submit" className="w-full mt-6 bg-hb text-w hover:text-c font-bold py-3 px-6 rounded-lg hover:bg-ts transition ease-in-out duration-300">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={closeModal}>
          <div className="bg-white p-8 max-w-md rounded-lg" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl text-c font-bold mb-4">Mensaje enviado correctamente.</h2>
            <div className="flex justify-center">
              <button className="bg-hb hover:bg-ts text-w hover:text-c font-bold py-1 px-2 rounded inline-flex items-center" onClick={closeModal}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
