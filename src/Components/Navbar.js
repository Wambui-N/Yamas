import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="absolute top-8 left-8 bg-black p-4 rounded-2xl">
      <ul className="flex flex-row items-center gap-6">
        <li className="">
          <Link
            href="/"
            className="uppercase tracking-wide"
            style={{ fontFamily: "myFont" }}
          >
            yamas
          </Link>
        </li>
        <li className="">
          <Link href="/menu" className="uppercase text-xs font-light tracking-wide">
            Menu
          </Link>
        </li>
        <li className="">
          <Link href="/gallery" className="uppercase text-xs font-light tracking-wide">
            Gallery
          </Link>
        </li>
        <li className="bg-primary px-4 py-2 rounded-lg cursor-pointer">
          <Link href="/reservation" className="uppercase text-xs font-semibold">
            Book a table
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
