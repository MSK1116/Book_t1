import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div>
        <dialog id="loginModal" className="modal">
          <div className="modal-box dark:bg-slate-500">
            <form method="dialog">
              <Link to="/">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-white">✕</button>
              </Link>
            </form>
            <h3 className="font-bold text-lg">Give the gift of learning, donate a book.</h3>
            <div>
              <form className=" mt-5 max-w-sm mx-auto">
                <div className="mb-5">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@flowbite.com"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex justify-around mt-4">
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Login
                  </button>
                  <p className="mt-3">
                    New to ETN?<span> </span>
                    <Link to="/register">
                      <span className="underline text-yellow-500 cursor-pointer">Register</span>
                    </Link>
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
