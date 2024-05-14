import React from "react";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div>
        <dialog id="loginModal" className="modal">
          <div className="modal-box bg-white dark:bg-slate-500">
            <form method="dialog">
              <a href="/">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-white">✕</button>
              </a>
            </form>
            <h3 className="font-bold text-lg">Give the gift of learning, donate a book.</h3>
            <div>
              <form onSubmit={handleSubmit(onSubmit)} className=" mt-5 max-w-sm mx-auto">
                <div className="mb-5">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    id="emailLog"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@flowbite.com"
                  />
                  {errors.email && <span className="text-sm text-red-500 ">This field is required</span>}
                </div>{" "}
                <div className="mb-5">
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your password
                  </label>
                  <input
                    {...register("password", { required: true })}
                    type="password"
                    id="passwordLog"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {errors.password && <span className="text-sm text-red-500 ">This field is required</span>}
                </div>
                <div className="flex justify-around mt-4">
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Login
                  </button>
                  <p className="mt-3">
                    New to ETN?<span> </span>
                    <a href="/register">
                      <span className="underline text-yellow-500 cursor-pointer">Register</span>
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Login;
