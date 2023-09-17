import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminPanel = (props) => {
  const [selectedComponent, setSelectedComponent] = useState('');

  const handleComponentChange = (componentName) => {
    setSelectedComponent(componentName);
    props.onComponentChange(componentName); // Seçilen bileşeni AdminPage'e iletiyoruz
  };

  return (
    <div className="">
      <div className="flex flex-col items-center  mt-1 m-8">
        <div className="w-[200px]  h-[50px]  bg-gray-800 text-center text-2xl text-white mt-12 mx-2 ">
          Admin Panel
        </div>
        <div className="w-[200px]  h-[50px] bg-green-600 text-center text-2xl text-white border border-b-white hover:bg-green-800 cursor-pointer mx-2"  onClick={() => handleComponentChange('kategori')}>
          kategori ekle
        </div>
        <div className="w-[200px]  h-[50px] bg-green-600 text-center text-2xl text-white border border-b-white hover:bg-green-800 cursor-pointer mx-2" onClick={() => handleComponentChange('urun')}>
          ürün ekle
        </div>
        <div className="w-[200px]  h-[50px] bg-green-600 text-center text-2xl text-white border border-b-white hover:bg-green-800 cursor-pointer mx-2" onClick={() => handleComponentChange('end')}>
        Son durum
        </div>
     
      </div>
    </div>
  );
};

export default AdminPanel;
