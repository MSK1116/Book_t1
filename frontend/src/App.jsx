import React from "react";
import Home from "./Home/Home";
import Books from "./books/Books";
import Donate from "./donate/Donate";
import Header from "./components/Header";

import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <Header />
      <div className=" bg-white text-slate-800 dark:bg-slate-900  dark:text-white">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/books" element={<Books />}></Route>
          <Route path="/donate" element={<Donate />}></Route>
          <Route path="/register" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
