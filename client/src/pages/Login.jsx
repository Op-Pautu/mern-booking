import axios from "axios";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/login", {
        email,
        password,
      });
      setRedirect(true);
      alert("Login Successful. ");
    } catch (error) {
      alert("Login failed. Please try again");
    }
  };
  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="mt-4 flex grow items-center justify-around">
      <div className="-mt-64">
        <h1 className="mb-4 text-center text-4xl">Login</h1>
        <form className="mx-auto max-w-md" onSubmit={loginUser}>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="primary">Login</button>
          <div className="py-2 text-center text-gray-500">
            Don&apos;t have an account yet?{" "}
            <Link to={"/register"} className="text-black underline">
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
