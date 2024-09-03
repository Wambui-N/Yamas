"use client";

import React from "react";
import { useState } from "react";
import db from "@/../Data/db.json";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("wines");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    console.log(category);
  };

  const renderMenuItems = () => {
    const categories = db.menu[selectedCategory];

    if (!categories) {
      return <p>No items available for this category.</p>;
    }

    return (
      <div className="">
        {Object.keys(categories).map((subCategory) => (
          <div key={subCategory} className="py-12 flex flex-col gap-3">
            <div className=" flex justify-between">
              <h5 className="uppercase tracking-wide md:text-2xl text-xl">
                {subCategory.replace(/_/g, " ")}
              </h5>
              <div className="flex gap-5 text-lg">
                <p className="">Price</p>
                {selectedCategory === "wines" && (
                      <p>Bottle</p>
                    )}
              </div>
            </div>
            {categories[subCategory].map((item, index) => (
              <div key={index} className="my-4 flex flex-col gap-1">
                <div className="flex flex-row justify-between">
                  <h6
                    className="md:text-lg text-sm text-primary uppercase tracking-widest"
                    style={{ fontFamily: "myFont" }}
                  >
                    {item.name}
                  </h6>
                  <div className="flex gap-12 text-sm">
                    <p className="">${item.price}</p>
                    {selectedCategory === "wines" && (
                      <p>${item.price_per_bottle}</p>
                    )}
                  </div>
                </div>
                <p className="md:w-3/4 w-full md:text-sm text-xs">{item.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="py-8">
      <ul className="md:px-80 px-2 flex flex-row justify-between">
        {Object.keys(db.menu).map((category) => (
          <li key={category}>
            <button
              onClick={() => handleCategoryClick(category)}
              className={`inline-flex flex-1 items-center justify-center capitalize sm:px-8 px-4 py-1 tracking-wide font-semibold border rounded-2xl  md:text-sm text-xs ${
                selectedCategory === category
                  ? "bg-primary border-primary text-white"
                  : "bg-white border-primary hover:bg-primary hover:border-primary text-primary hover:text-white"
              }`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
      <div className="md:px-60 px-2 py-12">{renderMenuItems()}</div>
    </div>
  );
};

export default Menu;
