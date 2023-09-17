import React from "react";

const Resim = () => {
  return (
    <div className="absolute z-0 flex flex-col">
      <img className="blur-sm opacity-50" src="\k3.jpg" alt="Resim" />
      <img
        className="hidden sm:block blur-sm opacity-50"
        src="\k3.jpg"
        alt="Resim"
      />
      <img
        className="hidden sm:block blur-sm opacity-50"
        src="\k3.jpg"
        alt="Resim"
      />
    </div>
  );
};

export default Resim;

/* 
     <div className="flex-grow-1 w-full h-full">
        <img src="\k1.jpg" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex-grow-1 w-full h-full">
        <img src="\k2.jpg" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex-grow-1 w-full h-full hide-on-sm">
        <img src="\k1.jpg" alt="" className="w-full h-full object-cover" />
      </div>


*/
