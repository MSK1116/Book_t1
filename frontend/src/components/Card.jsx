import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-2 p-4">
        <div className="card w-92 p-3 bg-base-100 dark:bg-slate-900 dark:text-white dark:border hover:scale-105  duration-200 shadow-xl ">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-md">{item.title}</h2>
            <div className="badge badge-primary">{item.published}</div>
            <p>{item.author}</p>
            <p>{item.category}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Pages: {item.page}</div>
              <div className="badge badge-outline">Donated By: {item.by}</div>
            </div>
            <div className="card-actions flex justify-center mt-5">
              <button className="btn  bg-white-400 hover:bg-slate-200">Request</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
