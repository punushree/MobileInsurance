import React from "react";
import Navbar from "./Navbar";
import headerImg from "../assets/header_img.png";

import {
  LightningBoltIcon,
  FireIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/solid";

const Header = () => {
  return (
    <>
      <Navbar />
      <div
        data-aos="fade-down"
        name="home"
        className="w-full h-screen bg-zinc-200 flex flex-col justify-between"
      >
        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
          <div className="flex flex-col justify-center md:items-start w-full px-2 pt-20">
            <h1 className="text-5xl md:text-7xl font-bold">Mobile Insurance</h1>
            <p className="text-2xl">
              Protect Your Smartphone against accidental damages
            </p>
            <button className="py-3 px-6 sm:w-[60%] my-4">Get Started</button>
          </div>
          <div>
            <img className="w-full" src={headerImg} />
          </div>
          <div className="absolute flex flex-col py-2 md:min-w-[768px] bottom-[-5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl">
            <p className="font-bold">Services</p>
            <div className="flex justify-between flex-wrap px-4">
              <p className="flex px-4 py-2 text-slate-500">
                <LightningBoltIcon className="h-6 text-indigo-600" /> Screen
                Damage Protection
              </p>
              <p className="flex px-4 py-2 text-slate-500">
                <FireIcon className="h-6 text-indigo-600" />
                Protection Against Fire
              </p>
              <p className="flex px-4 py-2 text-slate-500">
                <QuestionMarkCircleIcon className="h-6 text-indigo-600" />{" "}
                Protection Against Lost Or Stolen
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
