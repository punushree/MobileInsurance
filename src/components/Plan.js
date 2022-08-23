import React from "react";

const Plan = () => {
  return (
    <div className="w-full text-white my-24">
      <div className="w-full h-[450px] bg-slate-900 absolute mix-blend-overlay"></div>
      <div className="max-w-[1240px] mx-auto py-12">
        <div className="text-center py-8 text-slate-300">
          <h2 className="font-bold text-3xl uppercase">Plan</h2>
          <p className="text-xl">
            Mobo Insurance for one complete year, to protect your phone against
            all the odds!
          </p>
        </div>
        <div className="grid md:grid-cols-2">
          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
              Standard
            </span>
            <div>
              <p className="text-6xl font-bold py-4 flex">
                $50
                <span className="text-xl text-slate-500 flex flex-col justify-end">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-2xl py-8 text-slate-500">12 Months Cover</p>
            <div className="text-lg">
              <p>
                Untill the next new model comes in, phones today at least stick
                around in our lives for a year, if not more. That's why our
                mobile insurance plan for 12 months is an ideal option to cover
                for your phone from all accidental slips and falls you may face
                during the year.
              </p>
              <button className="w-full py-4 my-4">Get Started</button>
            </div>
          </div>
          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
              Premium
            </span>
            <div>
              <p className="text-6xl font-bold py-4 flex">
                $100
                <span className="text-xl text-slate-500 flex flex-col justify-end">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-2xl py-8 text-slate-500">24 Months Cover</p>
            <div className="text-lg">
              <p>
                Untill the next new model comes in, phones today at least stick
                around in our lives for a year, if not more. That's why our
                mobile insurance plan for 24 months is an ideal option to cover
                for your phone from all accidental slips and falls you may face
                during the year.
              </p>
              <button className="w-full py-4 my-4">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
