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
              <h5 className="uppercase tracking-wide text-2xl">
                {subCategory.replace(/_/g, " ")}
              </h5>
              <div className="flex gap-5">
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
                    className="text-lg uppercase tracking-widest"
                    style={{ fontFamily: "myFont" }}
                  >
                    {item.name}
                  </h6>
                  <div className="flex gap-10">
                    <p className="">${item.price}</p>
                    {selectedCategory === "wines" && (
                      <p>${item.price_per_bottle}</p>
                    )}
                  </div>
                </div>
                <p className="md:w-3/4 w-full text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="py-8">
      <ul className="px-96 flex flex-row justify-between">
        {Object.keys(db.menu).map((category) => (
          <li key={category}>
            <button
              onClick={() => handleCategoryClick(category)}
              className={`inline-flex items-center justify-center capitalize px-8 py-1 tracking-wide font-semibold border rounded-2xl text-white ${
                selectedCategory === category
                  ? "bg-primary border-primary"
                  : "bg-black border-white hover:bg-primary hover:border-primary"
              }`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
      <div className="px-64 py-12">{renderMenuItems()}</div>
    </div>
  );
};

export default Menu;
