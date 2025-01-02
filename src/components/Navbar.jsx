import { useState } from "react";
import "../index.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full fixed bg-transparent z-50">
      <div className="flex max-w-[1280px] justify-between items-center mx-auto">
        <img
          className="mt-2"
          src="https://res.cloudinary.com/dsjsvmug6/image/upload/v1723939712/logo_wyzjgn.png"
          alt=""
        />
        <div className="hidden font-acme lg:flex mt-3 *:font-semibold gap-8 mr-[1rem]">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-[#E46924]" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "text-[#E46924]" : "")}
          >
            About Us
          </NavLink>
          <NavLink
            to="/programs"
            className={({ isActive }) => (isActive ? "text-[#E46924]" : "")}
          >
            Programs
          </NavLink>
          <NavLink
            to="/contacts"
            className={({ isActive }) => (isActive ? "text-[#E46924]" : "")}
          >
            Contacts
          </NavLink>
        </div>

        <div className="lg:hidden" onClick={navToggle}>
          <button
            className={`z-50 mt-3 mr-6 block hamburger lg:hidden focus:outline-none ${
              menuOpen ? "open" : ""
            }`}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-40 bg-[#e6c4b0] text-[#0C394A] font-acme *:font-semibold flex flex-col px-8 pb-10 py-1 justify-center space-y-3 text-lg  uppercase transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out w-64`}
      >
        <img
          className="mb-[2rem]"
          src="https://res.cloudinary.com/dsjsvmug6/image/upload/v1723939712/logo_wyzjgn.png"
          alt=""
        />
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-[#E46924]" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "text-[#E46924]" : "")}
        >
          About Us
        </NavLink>
        <NavLink
          to="/programs"
          className={({ isActive }) => (isActive ? "text-[#E46924]" : "")}
        >
          Programs
        </NavLink>
        <NavLink
          to="/contacts"
          className={({ isActive }) => (isActive ? "text-[#E46924]" : "")}
        >
          Contacts
        </NavLink>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={navToggle}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
