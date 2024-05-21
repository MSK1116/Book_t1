import React from "react";
import Home from "./Home/Home";
import Books from "./books/Books";
import Donate from "./donate/Donate";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className=" bg-white text-slate-800 dark:bg-slate-900  dark:text-white">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/books" element={<Books />}>
            {" "}
          </Route>
          <Route path="/donate" element={authUser ? <Donate /> : <Navigate to="/register" />}></Route>
          <Route path="/register" element={<Signup />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
