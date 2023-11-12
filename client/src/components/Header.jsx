import { Menu, Search, SendHorizontal } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between">
      <a href="" className="flex items-center gap-1">
        <SendHorizontal className="-rotate-90 w-8 h-8" />
        <span className="font-bold text-xl">airbnb</span>
      </a>
      <div className="flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300">
        <div>Anywhere</div>
        <div className="border-l gray-300"></div>
        <div>Any week</div>
        <div className="border-l gray-300"></div>
        <div>Add guests</div>
        <button className="bg-primary text-white p-2 rounded-full">
          <Search className="w-4 h-4" />
        </button>
      </div>

      <Link
        to="/login"
        className="flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4"
      >
        <Menu />
        <div className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 relative top-1"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </Link>
    </header>
  );
};

export default Header;
