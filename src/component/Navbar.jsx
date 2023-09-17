import React from "react";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div className=" flex flex-row items-center  bg-gray-800 mx-auto h-24 text-white">
      <div className="basis-1/2 flex items-center">
        <img
          src="\images.png"
          alt=""
          className=" w-16 h-16 rounded-xl ml-8  md:block"
        ></img>
        <a href="">
          <div className="uppercase font-black text-4xl font-serif shadow-lg ml-8  animate-wiggle">
            ALİNİN YERİ
          </div>
        </a>
      </div>

      <div className="basis-1/2  flex justify-end font-semibold text-base lg:text-lg ">
        <ul className="mx-auto flex items-center">
          <li className="p-5 xl:p-8 active">
            <a href="">
              <span>AnaSayfa</span>
            </a>
          </li>
          <li className="p-5 xl:p-8  md:block">
            <Link
              activeClass="active"
              to="menu"
              spy={true}
              smooth={true}
              duration={300}
            >
              Menü
            </Link>
          </li>
          <li className="p-5 xl:p-8">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
            >
              hakkımızda
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
