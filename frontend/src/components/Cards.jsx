import React from "react";

function Cards({item}) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="dark:bg-slate-900 dark:text-white dark:border card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200">
          <figure>
            <img
              src={item.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="border rounded-lg px-2 py-1">${item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-lg border-[2px] hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
