import React, { useState } from "react";
import AdminPanel from "./AdminPanel";
import AdminPage from "./AdminPage";
import Category from "./Category";
import { useSearchParams } from "react-router-dom";

const Admin = () => {
  const [selectedComponent, setSelectedComponent] = useState("");

  const handleComponentChange = (componentName) => {
    setSelectedComponent(componentName);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-800 overflow-hidden">
      <div className="w-full  md:w-1/4 ">
        <AdminPanel onComponentChange={handleComponentChange} />
      </div>
      <div className="w-full  md:w-2/4 overflow-y-auto min-h-auto">
        <AdminPage selectedComponent={selectedComponent} />
      </div>
    </div>
  );
};

export default Admin;
