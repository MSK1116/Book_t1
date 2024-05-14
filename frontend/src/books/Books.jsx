import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Books_disp from "../components/Books_disp";

const Books = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Books_disp></Books_disp>
      </div>

      <Footer />
    </>
  );
};

export default Books;
