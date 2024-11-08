import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AboutUsImg from "../../public/AboutUsImg.png";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-16">
        <div className=" order-2 md:order-1 w-full md:w-1/2 mt-8 md:mt-24">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">Nice to Meet
            <span className="text-pink-500"> You!!</span> </h1>
          <p className="text-xl">
          My Name is Nilay Basak. This is my Full Stack Website. You can SignUp in this Website and Read Premium Books. I hope You Liked My Work & Website.
          <br>Thanks</br>
          </p>
          </div>
        </div>
        <div className="order-1 w-full md:w-1/2">
          <img src={AboutUsImg} className="w-92 h-92"></img>
        </div>
      </div>
      <Footer />
    </>
  );
}
