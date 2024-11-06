import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactUsImg from "../../public/ContactUsImg.png";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full md:w-1/2">
          {/* Contact Image */}
          <img src={ContactUsImg} className="w-92 h-92"></img>
        </div>
        <div className="md:order-1 w-full md:w-1/2 mt-0 md:mt-24">
          <p className=" text-5xl md:text-7xl text-center font-semibold p-0 md:p-6">Contact Us</p>
          
          <div className="mt-4 space-y-4">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input type="text" className="grow" placeholder="Full Name" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2z"
                  clipRule="evenodd"
                />
              </svg>
              <input type="text" className="grow" placeholder="Message" />
            </label>
          </div>
          
          {/* Submit Button */}
          <button className="btn btn-secondary mt-6">Submit</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
