/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
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
  const {
    signup,
    isAuthenticatedUser,
    errors: registerUserErrors,
  } = userAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticatedUser) navigate("/appointmentsUser");
  }, [isAuthenticatedUser]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-w max-w-md p-10 rounded-md">
        {registerUserErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white" key={i}>
            {error}
          </div>
        ))}
        <form onSubmit={onSubmit}>
          <input
            type="text"
            {...register("name", { required: true })}
            className="w-full  bg-white border-ts border-2 solid text-c px-4 py-2 my-2 rounded-md"
            placeholder="Name"
          />
          {errors.name && <p className="text-red-500">Name is required</p>}
          <input
            type="text"
            {...register("lastname", { required: true })}
            className="w-full  bg-white border-ts border-2 solid text-c px-4 py-2 my-2 rounded-md"
            placeholder="Lastname"
          />
          {errors.lastname && (
            <p className="text-red-500">Lastname is required</p>
          )}
          <input
            type="number"
            {...register("dni", { required: true })}
            className="w-full  bg-white border-ts border-2 solid text-c px-4 py-2 my-2 rounded-md"
            placeholder="dni"
          />
          {errors.dni && <p className="text-red-500">dni is required</p>}
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full  bg-white border-ts border-2 solid text-c px-4 py-2 my-2 rounded-md"
            placeholder="Email"
          />
          {errors.email && <p className="text-red-500">Email is required</p>}
          <input
            type="password"
            {...register("pass", { required: true })}
            className="w-full  bg-white border-ts border-2 solid text-c px-4 py-2 my-2 rounded-md"
            placeholder="Password"
          />
          {errors.pass && <p className="text-red-500">Password is required</p>}
          <input
            type="text"
            {...register("province", { required: true })}
            className="w-full  bg-white border-ts border-2 solid text-c px-4 py-2 my-2 rounded-md"
            placeholder="Province"
          />
          {errors.province && (
            <p className="text-red-500">Province is required</p>
          )}
          <input
            type="text"
            {...register("address", { required: true })}
            className="w-full  bg-white border-ts border-2 solid text-c px-4 py-2 my-2 rounded-md"
            placeholder="Address"
          />
          {errors.address && (
            <p className="text-red-500">Address is required</p>
          )}
          <input
            type="number"
            {...register("area", { required: true })}
            className="w-full  bg-white border-ts border-2 solid text-c px-4 py-2 my-2 rounded-md"
            placeholder="Area"
          />
          {errors.area && <p className="text-red-500">Area is required</p>}
          <input
            type="number"
            {...register("phone", { required: true })}
            className="w-full  bg-white border-ts border-2 solid text-c px-4 py-2 my-2 rounded-md"
            placeholder="Phone"
          />
          {errors.phone && <p className="text-red-500">Phone is required</p>}
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
