import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const submitAlert = () => {
    toast.success("Submitted Successfully!");
  };

  return (
    <>
      <ToastContainer position="top-center" />

      <div name="claim" className="flex flex-col justify-center">
        <form
          onSubmit={handleSubmit}
          className="max-w-[400px] w-full mx-auto bg-gray-500 p-8 px-8 rounded-lg"
        >
          <div className="flex flex-col text-gray-300 py-2">
            <label>Name:</label>
            <input
              className="rounded-lg bg-gray-400 focus:border-blue-500 focus:bg-gray-800 mt-2 p-2 focus:outline-none"
              type="text"
            />
          </div>
          <div className="flex flex-col text-gray-300 py-2">
            <label>Email:</label>
            <input
              className="rounded-lg bg-gray-400 focus:border-blue-500 focus:bg-gray-800 mt-2 p-2 focus:outline-none"
              type="email"
            />
          </div>
          <div className="flex flex-col text-gray-300 py-2">
            <label>Message:</label>
            <textarea
              className="rounded-lg bg-gray-400 focus:border-blue-500 focus:bg-gray-800 mt-2 p-2 focus:outline-none"
              rows="4"
              cols="40"
            />
          </div>
          <div className="flex flex-col text-gray-300 py-2">
            <p>
              <input className="mr-2" type="checkbox" />I agree to terms &
              conditions
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <button
              type="submit"
              onClick={submitAlert}
              className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
