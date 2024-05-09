import { useForm } from "react-hook-form"
import { useState, useRef } from "react"

export const ContactPage = () => {
  
     const {
    register,
    handleSubmit,
    formState: {errors},  
  } = useForm()

  const isSubmit = (data) => {
    
    console.log(data)
  
    emailjs.sendForm('service_nvrhidd', 'template_1g2mwhq', form.current, {
            publicKey: '7Q4smPb6rxNsex-a-',
          }).then(
            (result) => {
              console.log('SUCCESS!',result.text);
              openAppointmentCreated();
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
            
          );
    
    console.log('Datos enviados:', 
                document.getElementById('user_name').value,
                document.getElementById('user_lastname').value);
  }
  const [showAppointmentCreated, setShowAppointmentCreated] = useState(false);

  const openAppointmentCreated = () => {
    setShowAppointmentCreated(true);
  };

  const closeAppointmentCreated = () => {
    setShowAppointmentCreated(false);
  };

  const form = useRef();

  return (
   
    <div className="flex w-full justify-center rounded-md mt-6 mb-6">
      <div className="grid bg-w rounded-md place-items-center">

      <div className="flex items-center justify-center rounded-md relative">
        <div className="bg-white-500 border-green-400 border solid-2 max-w-md p-10 rounded-md">

          <form onSubmit={handleSubmit(isSubmit)} ref={form}>
          <h1 className="text-xl text-c font-medium my-2">Elegí uno de nuestros planes</h1>
          <p className="text-c font-medium my-2">Un asesor se comunicará con vos</p>
            <input
              id="user_name" 
              name="user_name"
              type="text"
              className="w-full bg-white border-ts border-2 solid text-c px-4 py-2 my-2 rounded-md"
              placeholder="Name"
              {...register('user_name', {
                          required: {
                          value: true,
                          message: "Campo obligatorio"
                          },
                          minLength: {
                          value: 3,
                          message: "El nombre no es válido"
                          },
                          pattern: {
                            value: /^[A-Za-z\s]+$/,
                            message: "El nombre no es válido"
                          }
              })}
              />
              {errors.user_name && <span className="text-red-700">⚠️{errors.user_name.message}</span>}
              

            <input
              id="user_lastname"
              name="user_lastname"
              type="text"
              className="w-full bg-white border-ts border-2 solid text-c px-4 py-2 my-2 rounded-md"
              placeholder="Lastname"
              {...register('user_lastname', {
                required: {
                value: true,
                message: "Campo obligatorio"
                },
                minLength: {
                value: 3,
                message: "El apellido no es válido"
                },
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "El apellido no es válido"
                }
              
                })}
              />
              {errors.user_lastname && <span className="text-red-700">⚠️{errors.user_lastname.message}</span>}
            <div className="flex">
              <div className="w-1/3 mr-2">
                  <input
                    name="user_area"
                    type="number"
                    className="w-full bg-white border-ts border-2 solid text-c px-4 py-2 my-2 rounded-md mr-4"
                    placeholder="Area"
                    {...register('user_area', {
                      required: {
                      value: true,
                      message: "Campo obligatorio"
                      },
                      minLength: {
                      value: 3,
                      message: "Cód. inválido"
                      },
                      pattern: {
                        value: /^\d+$/,
                        message: "Cód. inválido"
                      }
                    
                      })}
                  />
                  {errors.user_area && <span className="text-red-700">⚠️{errors.user_area.message}</span>}
                </div>
                <div className="w-2/3 ml-2">
                  <input
                    name="user_phone"
                    type="number"
                    className="w-full bg-white border-ts border-2 solid text-c px-4 py-2 my-2 rounded-md"
                    placeholder="Phone"
                    {...register('user_phone', {
                      required: {
                      value: true,
                      message: "Campo obligatorio"
                      },
                      minLength: {
                      value: 6,
                      message: "Teléfono inválido"
                      },
                      pattern: {
                        value: /^\d+$/,
                        message: "Teléfono inválido"
                      }
                    
                      })}
                  />
                  {errors.user_phone && <span className="text-red-700">⚠️{errors.user_phone.message}</span>}
                </div>
              </div>
                  

              <select name="user_location"
                      id="location"  
                      className="w-full bg-white border-ts border-2 solid text-c px-4 py-2 my-2 rounded-md"
                      {...register('user_location', {
                        required: {
                        value: true,
                        message: "Debe seleccionar una localidad"
                        },
                        })}>
                <option value="" className="text-c">Selecciona una localidad</option>
                <option value="Aguilares">Aguilares</option>
                <option value="Banda del Rio Sali">Banda del Río Salí</option>
                <option value="Burruyacu">Burruyacú</option>
                <option value="Concepcion">Concepción</option>
                <option value="Famailla">Famaillá</option>
                <option value="Graneros">Graneros</option>
                <option value="Juan Bautista Alberdi">Juan Bautista Alberdi</option>
                <option value="La Cocha">La Cocha</option>
                <option value="San Miguel de Tucuman">San Miguel de Tucumán</option>
                <option value="Simoca">Simoca</option>
                <option value="Tafi del Valle">Tafí del Valle</option>
                <option value="Tafi Viejo">Tafí Viejo</option>
                <option value="Trancas">Trancas</option>
                <option value="Yerba Buena">Yerba Buena</option>
              </select>
              {errors.user_location && <span className="text-red-700">⚠️{errors.user_location.message}</span>}
            <input
              name="user_email"
              type="email"
              className="w-full bg-white border-ts border-2 solid text-c px-4 py-2 my-2 rounded-md"
              placeholder="Email"
              {...register('user_email', {
                required: {
                value: true,
                message: "Campo obligatorio"
                },
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Correo inválido"
                }
                })}
            />
              {errors.user_email && <span className="text-red-700">⚠️{errors.user_email.message}</span>}
            
            <div className="flex justify-center">               
              <input type="checkbox" 
              className="mr-3" 

              />
              <label className="label-text flex place-items-center text-c">¿Tiene Hijos?</label>
              <input 
                name="user_children"
                type="text" 
                className="w-1/3 bg-white border-ts border-2 solid text-c px-4 py-2 my-2 rounded-md ml-6"
                placeholder="Children"
                {...register('user_children', { required: false })}
                
              />
            </div>
            <div className="flex place-items-center ">
              <div className="flex align-items-center">
                  <label className="label cursor-pointer">
                  <input type="radio" 
                         name="user_plan"
                         value="Joven" 
                         className="radio border-c checked:bg-blue-500 mr-1" 
                         {...register('user_plan')}/>
                  <span className="label-text ml-1 text-c">Plan Jóven</span> 
                    
                  </label>
              </div>
              <div className="flex align-items-center">
                  <label className="label cursor-pointer">
                    <input type="radio" 
                           name="user_plan" 
                           value="Familiar"
                           className="radio border-c checked:bg-green-500 mr-1"
                           {...register('user_plan')}
                           />
                    <span className="label-text ml-1 text-c">Plan Familiar</span> 
                  </label>
              </div>
              <div className="flex align-items-center">
                  <label className="label cursor-pointer">
                    <input type="radio" 
                           name="user_plan" 
                           value="Senior" 
                           className="radio border border-c checked:bg-red-500 mr-1" 
                           {...register('user_plan')}/>
                    <span className="label-text ml-1 text-c">Plan Senior</span> 
                  </label>
              </div>
            </div>
            <div className="flex justify-end mt-4">
            <button className="btn btn-info bg-ts hover:bg-hb hover:text-w hover:border-none text-c"  
                    type="submit" 
                    value="Send"
                  
                    >Enviar</button>
            </div>

          </form>
        </div>
        </div>
      </div>
      {showAppointmentCreated && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center" onClick={closeAppointmentCreated}>
          <div className="bg-white rounded-lg p-8" onClick={(e) => e.stopPropagation()}>
            <p className="text-c font-medium">Recibimos tu consulta. Un asesor se comunicará a la brevedad.</p>
            <div className="flex justify-center mt-4">
              <button
                onClick={() => {
                  closeAppointmentCreated();
                  window.location.reload();
                }}
                className="px-4 py-2 bg-ts text-c rounded hover:bg-hb hover:text-w"
                // Llamar a la función para cerrar la modal de confirmación
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
      )
    }
