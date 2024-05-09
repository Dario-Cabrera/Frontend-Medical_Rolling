import { useForm } from "react-hook-form";
import { doctorAuth } from "../Context/DoctorContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const LoginPagesDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: signinErrors, isAuthenticatedDoctor } = doctorAuth();

  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });
  useEffect(() => {
    if (isAuthenticatedDoctor) navigate("/appointmentsDoctor");
  }, [isAuthenticatedDoctor]);

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
          <input type="email" {...register("email", { required: true })} className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md" placeholder="Email" />
          {errors.email && <p className="text-red-500">Email is required</p>}
          <input type="password" {...register("pass", { required: true })} className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md" placeholder="Password" />
          {errors.pass && <p className="text-red-500">Password is required</p>}

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};
