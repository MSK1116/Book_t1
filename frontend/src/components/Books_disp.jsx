import React, { useEffect, useState } from "react";
import Cards from "./Card";
import toast from "react-hot-toast";
import axios from "axios";

import { Link } from "react-router-dom";

const Course = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      const toastId = toast.loading("Loading...", {
        position: "bottom-right",
      });
      try {
        const res = await axios.get("https://mold-s-kill-3-api.vercel.app/book");
        setBook(res.data);
        toast.dismiss(toastId);
      } catch (error) {
        console.log("failed to get list of books", error);
        toast.error("Failed to get book", { id: toastId });
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20px px-4">
        <div className="pt-28 item-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-3xl text-yellow-400">"Extend the life of a book, donate it to inspire others."</h1>
          <p className="mt-12 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, deleniti mollitia? Ab praesentium animi possimus magnam eaque reiciendis impedit unde voluptates fugit minima earum, laudantium, aliquid libero odio, mollitia alias!
          </p>
          <Link to="/donate">
            <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700 duration-200">Donate</button>
          </Link>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {book.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Course;
