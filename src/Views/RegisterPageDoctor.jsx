export const RegisterPageDoctor = () => {
  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md p-10 rounded-md">
        <form>
          <h1 className="text-3xl font-bolt my-2">Register</h1>
          <input
            type="text"
            className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md"
            placeholder="Name"
          />

          <input
            type="text"
            className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md"
            placeholder="Lastname"
          />

          <input
            type="email"
            className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md"
            placeholder="Email"
          />
          <input
            type="password"
            className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md"
            placeholder="Password"
          />
          <input
            type="text"
            className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md"
            placeholder="Specialty"
          />

          <input
            type="number"
            className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md"
            placeholder="Licence Number"
          />

          <button type="submit">Register</button>
        </form>
        <p className="flex gap-x-2 py-3 justify-between">
          Already have an account?{" "}
          <a to="" className="text-sky-500">
            Go Login
          </a>{" "}
        </p>
      </div>
    </div>
  );
};
