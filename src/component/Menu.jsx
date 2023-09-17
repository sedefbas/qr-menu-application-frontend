import React, { useState } from "react";
import Resim from "./Resim";
import "../index.css";
import GetMenu from "./GetMenu";

const Menu = () => {
  return (
    <div className="relative">
      <div className="absolute z-0">
      <Resim />
      </div>
      
      <div id="menu" className="w-4/5 mx-auto  relative z-10">
        <div className="text-center text-5xl font-serif italic pt-6 text-gray-800 mb-4">
          <span class="menu-text">MENU</span>
        </div>
        <GetMenu />
      </div>
    </div>
  );
};
export default Menu;
