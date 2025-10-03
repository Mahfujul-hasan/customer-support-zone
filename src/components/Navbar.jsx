import React from "react";
import Container from "./Container";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm">
      <Container>
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
             <li><a href="">Home</a></li>
            <li><a href="">FAQ</a></li>
            <li><a href="">Changelog</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Download</a></li>
            <li><a href="">Contact</a></li>
            </ul>
          </div>
          <p className="text-2xl font-bold">CS — Ticket System</p>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[#000000E5]">
            <li><a href="">Home</a></li>
            <li><a href="">FAQ</a></li>
            <li><a href="">Changelog</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Download</a></li>
            <li><a href="">Contact</a></li>
          </ul>
          <a className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white"><img src="ic_outline-plus.svg" alt="" /> New Ticket</a>
        </div>
      </div>
      </Container>
    </div>
  );
};

export default Navbar;
