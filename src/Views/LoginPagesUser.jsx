import { useForm } from "react-hook-form";
import { userAuth } from "../Context/UserContext";
import { Link } from "react-router-dom";
import { useEffect, useState, useSyncExternalStore } from "react";
import { useNavigate } from "react-router-dom";

export const LoginPagesUser = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: signinErrors, isAuthenticatedUser, isAuthenticatedDoctor, isAuthenticatedAuditor } = userAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticatedUser) navigate("/appointmentsUser");
  }, [isAuthenticatedUser]);
  useEffect(() => {
    if (isAuthenticatedDoctor) navigate("/appointmentsDoctor");
  }, [isAuthenticatedDoctor]);
  useEffect(() => {
    if (isAuthenticatedAuditor) navigate("/auditorPage");
  }, [isAuthenticatedAuditor]);

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-w max-w-md w-full p-10 rounded-md">
        {signinErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white" key={i}>
            {error}
          </div>
        ))}
        <h1 className="text-3xl font-bold my-2 text-c">Login</h1>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-white border-ts border-2 solid text-c px-4 py-2 my-2 rounded-md"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="text-red-500">Email is required</p>}
          <input
            type="password"
            {...register("pass", { required: true })}
            className="w-full bg-white border-ts border-2 solid text-c px-4 py-2 my-2 rounded-md"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          {errors.pass && <p className="text-red-500">Password is required</p>}

          <button type="submit" className="text-hb">
            Login
          </button>
        </form>
        <p className="flex gap-x-2 py-3 justify-between text-c">
          Don't have an account?{" "}
          <Link to="/registerUser/" className="text-sky-500">
            Go Register
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};
