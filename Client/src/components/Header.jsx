import React from "react";
import { FaSearch } from "react-icons/fa";
import { FcHome } from "react-icons/fc";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-slate-800 shadow-lg">
      <div className="flex justify-between items-center max-w-6xl p-2 mx-auto">
        <Link to={"/"}>
          <h1 className="font-bold text-sm sm:text-5xl flex-wrap">
            <span className="text-teal-200">Real</span>
            <span className="text-white">State <span className="sm:text-xl">.com</span></span>
          </h1>
        </Link>
        <form className="bg-slate-100 flex items-center p-2 rounded">
          <input
            type="text"
            placeholder="search for properties.."
            className=" bg-transparent border-none outline-none w-24 sm:w-64 "
          />
          <FaSearch className="text-slate-500" />
        </form>
        <ul className="flex gap-4 cursor-pointer text-sm sm:text-xl ">
        <Link to={"/"}>
          <li className="hidden sm:inline text-slate-200 hover:text-slate-400">
            Home
          </li>
          </Link>
          <Link to={"/about"}>
          <li className="hidden sm:inline text-slate-200 hover:text-slate-400">
            About
          </li>
          </Link>
          <Link to={"/signUp"}>
          <li className="hidden sm:inline text-slate-200 hover:text-slate-400">
            Sign in
          </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
