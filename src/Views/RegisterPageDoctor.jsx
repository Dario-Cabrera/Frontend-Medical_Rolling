import { useForm } from "react-hook-form";
import { doctorAuth } from "../Context/DoctorContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const RegisterPageDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    signup,
    isAuthenticated,
    errors: registerDoctorErrors,
  } = doctorAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/appointments");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      {registerDoctorErrors.map((error, i) => (
        <div className=" bg-red-500 p-2 text-white" key={i}>
          {error}
        </div>
      ))}
      <div className="bg-zinc-800 max-w-md p-10 rounded-md">
        <form onSubmit={onSubmit}>
          <h1 className="text-3xl font-bolt my-2">Register</h1>
          <input
            type="text"
            {...register("name", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md"
            placeholder="Name"
          />
          {errors.name && <p className="text-red-500">Name is required</p>}

          <input
            type="text"
            {...register("lastname", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md"
            placeholder="Lastname"
          />
          {errors.lastname && (
            <p className="text-red-500">Lastname is required</p>
          )}
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

          <input
            type="text"
            {...register("specialty", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md"
            placeholder="Specialty"
          />
          {errors.specialty && (
            <p className="text-red-500">Specialty is required</p>
          )}

          <input
            type="number"
            {...register("LicenceNumber", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md"
            placeholder="Licence Number"
          />
          {errors.LicenceNumber && (
            <p className="text-red-500">Licence Number is required</p>
          )}
          <button type="submit">Register</button>
        </form>
        <p className="flex gap-x-2 py-3 justify-between">
          Already have an account?{" "}
          <Link to="/loginDoctor/" className="text-sky-500">
            Go Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};
