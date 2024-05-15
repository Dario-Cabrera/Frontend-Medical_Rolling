import { useForm } from "react-hook-form";
import { userAuth } from "../Context/UserContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export const RegisterPageUser = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm();
  const { signup, isAuthenticatedUser, errors: registerUserErrors } = userAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticatedUser) navigate("/loginUser/");
  }, [isAuthenticatedUser]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="flex items-center justify-center">
      <div className="bg-w max-w-md p-10 rounded-md">
        {registerUserErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white" key={i}>
            {error}
          </div>
        ))}
        <form onSubmit={onSubmit}>
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
            className="w-full  bg-white border-ts border-2 solid text-c px-4 py-2 my-2 rounded-md"
            placeholder="Name"
          />
          {errors.name && <span className="text-red-700">⚠️{errors.name.message}</span>}
          <input
            type="text"
            {...register("lastname", { 
              required: {
                value: true,
                message: "Campo obligatorio"
                },
                minLength: {
                value: 3,
                message: "El apellido no es válido"
                },
                pattern: {
                  value: /^(?!.* $)[A-Za-z][A-Za-z\s]+(?<!\s)$/,
                  message: "El apellido no es válido"
                }
            })}
            className="w-full  bg-white border-ts border-2 solid text-c px-4 py-2 my-2 rounded-md"
            placeholder="Lastname"
          />
          {errors.lastname && <span className="text-red-700">⚠️{errors.lastname.message}</span>}
          <input
            type="number"
            {...register("dni", { 
              required: {
                value: true,
                message: "Campo obligatorio"
                },
                minLength: {
                value: 7,
                message: "Longitud de caracteres inválida"
                },
                maxLength: {
                value: 8,
                message: "Longitud de caracteres inválida"
                },
                pattern: {
                value: /^\d+$/,
                message: "Ingrese solo números"
                } 
            })}
            className="w-full  bg-white border-ts border-2 solid text-c px-4 py-2 my-2 rounded-md"
            placeholder="dni"
          />
          {errors.dni && <span className="text-red-700">⚠️{errors.dni.message}</span>}
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
            className="w-full  bg-white border-ts border-2 solid text-c px-4 py-2 my-2 rounded-md"
            placeholder="Email"
          />
          {errors.email && <span className="text-red-700">⚠️{errors.email.message}</span>}
          <input
            type="password"
            {...register("pass", { required: true })}
            className="w-full  bg-white border-ts border-2 solid text-c px-4 py-2 my-2 rounded-md"
            placeholder="Password"
          />
          {errors.pass && <p className="text-red-700">Password is required</p>}
          <input
            type="text"
            {...register("province", { 
              required: {
                value: true,
                message: "Campo obligatorio"
                },
                minLength: {
                value: 6,
                message: "Longitud de caracteres inválida"
                },
                pattern: {
                  value: /^(?!.* $)[A-Za-z][A-Za-z\s]+(?<!\s)$/,
                  message: "Ingrese solo letras"
                }    
            })}
            className="w-full  bg-white border-ts border-2 solid text-c px-4 py-2 my-2 rounded-md"
            placeholder="Province"
          />
          {errors.province && <span className="text-red-700">⚠️{errors.province.message}</span>}
          <input
            type="text"
            {...register("address", { required: true })}
            className="w-full  bg-white border-ts border-2 solid text-c px-4 py-2 my-2 rounded-md"
            placeholder="Address"
          />
          {errors.address && (
            <p className="text-red-700">Address is required</p>
          )}
          <input
            type="number"
            {...register("area", { 
              required: {
                value: true,
                message: "Campo obligatorio"
                },
                minLength: {
                value: 3,
                message: "Cód. inválido"
                },
                maxLength: {
                  value: 4,
                  message: "Cód. inválido"
                  },
                pattern: {
                  value: /^\d+$/,
                  message: "Cód. inválido"
                }
            })}
            className="w-full  bg-white border-ts border-2 solid text-c px-4 py-2 my-2 rounded-md"
            placeholder="Area"
          />
          {errors.area && <span className="text-red-700">⚠️{errors.area.message}</span>}
          <input
            type="number"
            {...register("phone", { 
              required: {
                value: true,
                message: "Campo obligatorio"
                },
                minLength: {
                value: 6,
                message: "Teléfono inválido"
                },
                maxLength: {
                  value: 8,
                  message: "Teléfono inválido"
                  },
                pattern: {
                  value: /^\d+$/,
                  message: "Teléfono inválido"
                }
            })}
            className="w-full  bg-white border-ts border-2 solid text-c px-4 py-2 my-2 rounded-md"
            placeholder="Phone"
          />

          {errors.phone && <span className="text-red-700">⚠️{errors.phone.message}</span>}
          <button type="submit" className="text-hb">Register</button>
        </form>
        <p className="flex gap-x-2 py-3 justify-between">
          Already have an account?{" "}
          <Link to="/loginUser/" className="text-sky-500">
            Go Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};
