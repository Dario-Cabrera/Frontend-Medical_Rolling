import { useForm } from "react-hook-form";
import { userAuth } from "../Context/UserContext";
import {Link} from "react-router-dom"
import { useEffect, useState, useSyncExternalStore } from "react";
import { useNavigate } from "react-router-dom";


export const LoginPagesUser = () => {
  
  //---------------Pruebas--------------------//

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  // const user = 
  //   {
  //   email: 'admin@gmail.com',
  //   pass: '12345678',
  //   isAuditor: true,
  //   isDoctor: true,
  //   isUser: false
  // }
  // {
  //   email: 'doctor@gmail.com',
  //   pass: '12345678',
  //   isAuditor: false,
  //   isDoctor: true,
  //   isUser: false
  // }
//   {
//     email: 'user@gmail.com',
//     pass: '12345678',
//     isAuditor: false,
//     isDoctor: false,
//     isUser: true
//   },

// ]

//---------------Pruebas--------------------//
 
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: signinErrors,isAuthenticatedUser } = userAuth();
  const navigate = useNavigate()

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    // signin(data);
  
//---------------Pruebas--------------------//

  
//   if (user.email === email && user.pass === pass) {
//     if (user.isAuditor) {
//       console.log("Inicio de sesión correcta");
//       localStorage.setItem('email', JSON.stringify(user.email));
//       localStorage.setItem('admin', JSON.stringify(user.isAuditor));
//       localStorage.setItem('doctor', JSON.stringify(user.isDoctor));
//       localStorage.setItem('user', JSON.stringify(user.isUser));
//       // navigate('/auditorPage');
//     } else if (user.isDoctor) {
//       console.log("Inicio de sesión correcta");
//       localStorage.setItem('email', JSON.stringify(user.email));
//       localStorage.setItem('admin', JSON.stringify(user.isAuditor));
//       localStorage.setItem('doctor', JSON.stringify(user.isDoctor));
//       localStorage.setItem('user', JSON.stringify(user.isUser));
//       // navigate('/appointmentsDoctor');
//     } else if (user.isUser) {
//       console.log("Inicio de sesión correcta");
//       localStorage.setItem('email', JSON.stringify(user.email));
//       localStorage.setItem('admin', JSON.stringify(user.isAuditor));
//       localStorage.setItem('doctor', JSON.stringify(user.isDoctor));
//       localStorage.setItem('user', JSON.stringify(user.isUser));
//       // navigate('/appointmentsUser');
//     } else {
//       alert('Acceso denegado. Rol no válido.'); 
//     }
//   } else {
//     alert('Correo o contraseña incorrecta');
//   };

 });
  


//--------------------------------------//

  useEffect(() => {
    if (isAuthenticatedUser) navigate("/appointmentsUser")
  }, [isAuthenticatedUser])
  



  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        {signinErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white" key={i}>
            {error}
          </div>
        ))}
        <h1 className="text-3xl font-bold my-2">Login</h1>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          {errors.email && <p className="text-red-500">Email is required</p>}
          <input
            type="password"
            {...register("pass", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md"
            placeholder="Password"
            value={pass}
            onChange={(e)=>setPass(e.target.value)}
          />
          {errors.pass && <p className="text-red-500">Password is required</p>}

          <button type="submit"
          >
            Login</button>
        </form>
        <p className="flex gap-x-2 py-3 justify-between">
          Don´t have an account?{" "}
          <Link to="/register/" className="text-sky-500">
            Go Register
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};
