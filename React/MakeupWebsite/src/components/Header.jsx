import React from "react";
import { WiStars } from "react-icons/wi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex justify-between bg-purple-300 text-pink-950 p-3 h-12 font-bold">
        <div className="italic text-3xl flex gap-1 items-center">
          <span>Glow More </span> <WiStars className="text-5xl" />
        </div>
        <div className="flex gap-6  text-2xl">
          <Link to={"/"}>Home</Link>
          <Link to={"/product"}>Products</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/about"}>About</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
