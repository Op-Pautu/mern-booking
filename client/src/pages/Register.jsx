import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/register", {
        name,
        email,
        password,
      });
      alert("Registration Successful. Now you can log in");
    } catch (error) {
      alert("Registration failed. Please try again");
    }
  };

  return (
    <div className="mt-4 flex grow items-center justify-around">
      <div className="-mt-64">
        <h1 className="mb-4 text-center text-4xl">Register</h1>
        <form className="mx-auto max-w-md" onSubmit={registerUser}>
          <input
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <button className="primary">Register</button>
          <div className="py-2 text-center text-gray-500">
            Already a member?{" "}
            <Link to={"/login"} className="text-black underline">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
