import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

import Cards from "./Cards";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        console.log(import.meta.env.VITE_DATABASE_URL);
        const getBookRes = await axios.get(
          `${import.meta.env.VITE_DATABASE_URL}/book`
        );
        console.log("This is from Course.jsx \n", getBookRes.data);
        setBook(getBookRes.data);
      } catch (error) {
        console.log("error in getBookRes ", error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-1">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
            Explore a world of captivating stories and knowledge at your
            fingertips. Whether you're searching for the latest bestsellers or
            timeless classics, we have something for everyone. Happy reading,
            and thank you for choosing us for your literary journey!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
