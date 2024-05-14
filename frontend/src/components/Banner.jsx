import React from "react";
import img1 from "../../public/logo.png";

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20px px-4 flex flex-col md:flex-row">
        <div className="space-y-12 w-full md:w-1/2 mt-12 md:mt-40 order-2 md:order-1">
          <h1 className="text-4xl">
            Welcome to ETN Book Donation campaign.<br></br> <span className="text-3xl font-bold text-yellow-400">"Serving Society Via Technology"</span>
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nemo, quam et, ut optio ratione modi laborum quasi a repudiandae tenetur voluptates repellat vero, alias qui amet ipsa minima harum?</p>
          <label className="input input-bordered flex items-center dark:text-black gap-2">
            Email
            <input type="text" className="grow" placeholder="daisy@site.com" />
          </label>
          <button className="btn bg-yellow-400 hover:bg-slate-200 mt-2">Be TechSo</button>
        </div>

        <div className=" order-1 md:order-2 w-full md:w-1/2">
          <img className="mx-auto p-auto mt-10 w-100 h-100" src={img1}></img>
        </div>
      </div>
    </>
  );
};

export default Banner;
