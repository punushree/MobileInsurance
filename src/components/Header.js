import React from "react";
import Navbar from "./Navbar";
import headerImg from "../assets/header_img.png";

const Header = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
          <div className="flex flex-col justify-center md:items-start w-full px-2 py-20">
            <h1 className="text-5xl md:text-7xl font-bold">
              Mobile Phone Insurance
            </h1>
            <p className="text-2xl">
              Protect Your New Smartphone against accidental & liquid damages
            </p>
            <button className="py-3 px-6 sm:w-[60%] my-4">Get Started</button>
          </div>
          <div>
            <img className="w-full" src={headerImg} />
          </div>
          <div className="">
            <p>Services</p>
            <div>
              <p>Icon. abc</p>
              <p>Icon. abc</p>
              <p>Icon. abc</p>
              <p>Icon. abc</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
