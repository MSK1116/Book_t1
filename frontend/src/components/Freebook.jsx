import React, { useEffect, useState } from "react";
import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import toast from "react-hot-toast";
import Slider from "react-slick";
import Cards from "./Card";

function Freebook() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      const toastID = toast.loading("Molding for you...", {
        position: "bottom-right",
      });
      try {
        const res = await axios.get("https://mold-s-kill-3-api.vercel.app/book");
        setBook(res.data);
        toast.dismiss(toastID);
      } catch (error) {
        console.log("Failed to catch books", error, { id: toastID });
      }
    };
    getBook();
  }, []);
  const filterData = book.filter((data) => data.category === "free" || data.page > 100);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl md:mt-20 mt-10 container mx-auto md:px-20px px-4 ">
        <h2 className="text-xl pb-3  font-semibold">Books</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis id dolorem magnam sapiente cumque aliquid porro laborum perspiciatis consequatur. Modi, assumenda id error accusamus sapiente qui veniam placeat. Quo, hic.</p>

        <div className="slider-container">
          <Slider {...settings}>
            {filterData.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
