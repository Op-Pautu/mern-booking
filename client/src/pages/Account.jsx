import axios from "axios";
import { UserContext } from "../context/UserContext";
import { useContext, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Places from "./Places";
import { Home, List, User, User2 } from "lucide-react";

const Account = () => {
  const [redirect, setRedirect] = useState(null);
  const { user, setUser, ready } = useContext(UserContext);
  let { subpage } = useParams();

  if (subpage === undefined) {
    subpage = "profile";
  }

  async function logout() {
    await axios.post("/logout");
    setUser(null);
    setRedirect("/");
  }

  if (!ready) {
    return <p>Loading...</p>;
  }

  if (ready && !user && !redirect) {
    return <Navigate to="/login" />;
  }

  function linkClasses(type = null) {
    let classes = "inline-flex gap-1 px-6 py-2 rounded-full";
    if (type === subpage) {
      classes += " bg-primary text-white ";
    } else {
      classes += " bg-gray-200";
    }

    return classes;
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }
  return (
    <div>
      <nav className="mt-8 flex w-full justify-center gap-2 mb-8">
        <Link className={linkClasses("profile")} to={"/account"}>
          <User2 />
          My profile
        </Link>
        <Link className={linkClasses("bookings")} to={"/account/bookings"}>
          <List />
          My bookings
        </Link>
        <Link className={linkClasses("places")} to={"/account/places"}>
          <Home />
          My accomodations
        </Link>
      </nav>
      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as {user.name} ({user.email})<br />
          <button className="primary max-w-sm mt-2" onClick={logout}>
            Logout
          </button>
        </div>
      )}
      {subpage === "places" && <Places />}
    </div>
  );
};

export default Account;
