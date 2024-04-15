import { useForm } from "react-hook-form";
import { doctorAuth } from "../Context/DoctorContext";
import {Link} from "react-router-dom"

export const LoginPagesDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: signinErrors } = doctorAuth();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    signin(data);
  });

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
          />
          {errors.email && <p className="text-red-500">Email is required</p>}
          <input
            type="password"
            {...register("pass", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md"
            placeholder="Password"
          />
          {errors.pass && <p className="text-red-500">Password is required</p>}

          <button type="submit">Login</button>
        </form>
        <p className="flex gap-x-2 py-3 justify-between">
          Don´t hace an account?{" "}
          <Link to="/registerDoctor/" className="text-sky-500">
            Go Register
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};
