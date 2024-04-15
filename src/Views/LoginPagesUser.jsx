export const LoginPagesUser = () => {
  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <h1 className="text-3xl font-bold my-2">Login</h1>
        <form>
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

          <button type="submit">Login</button>
        </form>
        <p className="flex gap-x-2 py-3 justify-between">
          Don´t hace an account?{" "}
          <a to="" className="text-sky-500">
            Go Register
          </a>{" "}
        </p>
      </div>
    </div>
  );
};
