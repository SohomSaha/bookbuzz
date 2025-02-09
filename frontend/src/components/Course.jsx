import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";
function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white max-w-screen-2x1 container mx-auto md:px-20 px-4">
        <div className="dark:bg-slate-900 dark:text-white items-center justify-center text-center">
          <h1 className="dark:bg-slate-900 dark:text-white text-2xl pt-28 font-semibold md:text-4xl">
            We are delighted to have you
            <span className="text-pink-500"> Here! :)</span>{" "}
          </h1>
          <p className="mt-12 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A quas
            ipsam quis, quidem corporis veritatis autem ad consequuntur
            repudiandae. Odit ipsum magni doloribus est excepturi, repellat
            praesentium quisquam ipsa inventore.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
