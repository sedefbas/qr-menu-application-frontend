import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";
import "../index.css";

const MenuItem = ({ title, items, price }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div className="bg-gray-700 lg:flex-1 p-4 border hover:bg-gray-800 border hover:border-orange-300 hover:border-2 text-white">
        <div className="flex items-center" onClick={toggleMenu}>
          <BiMenu size={30} />
          <h2 className="text-xl lg:text-2xl ml-2">{title}</h2>
          <BsArrowDownCircle className="ml-2 lg:ml-8" />
        </div>
      </div>

      <div className={`menu ${isOpen ? "open" : ""}`}>
        <div
          className={`shadow-lg rounded-lg text-gray-900 text-lg text-gray-800`}
        >
          <ul>
            {items.map((item, index) => (
              <li key={index} className="py-2 px-4">
                {item} - {price[index]}TL
                <hr className="text-black"/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
