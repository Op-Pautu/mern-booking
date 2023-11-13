import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="mt-4 flex grow items-center justify-around">
      <div className="-mt-64">
        <h1 className="mb-4 text-center text-4xl">Register</h1>
        <form className="mx-auto max-w-md">
          <input type="text" placeholder="John Doe" />
          <input type="email" placeholder="your@email.com" />
          <input type="password" placeholder="password" />
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
