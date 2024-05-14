import React from "react";
import Cards from "./Card";
import List from "../../public/List.json";

import { Link } from "react-router-dom";

const Course = () => {
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
        {List.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Course;
