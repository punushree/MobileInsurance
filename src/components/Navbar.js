import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Form from "./Form";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const navHandleClick = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold mr-4 sm:text-4xl">
              Mobo Insurance
            </h1>
            <h2 className="text-sm sm:text-xs">Powered by BugendaiTech</h2>
          </div>
          <ul className="hidden md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Claim</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="px-8 py-3">Sign In</button>
        </div>
        <div className="md:hidden" onClick={navHandleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>
      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">Home</li>
        <li className="border-b-2 border-zinc-300 w-full">About</li>
        <li className="border-b-2 border-zinc-300 w-full">Support</li>
        <li className="border-b-2 border-zinc-300 w-full">Claim</li>
        <div className="flex flex-col my-4">
          <button className="px-8 py-3">Sign In</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
