import React from "react";
import Category from "./Category";
import Product from "./Product";
import { Route, Routes } from "react-router-dom";
import End from "./End";
const AdminPage = (props) => {
  return (
    <div>
  <div>
      {props.selectedComponent === 'kategori' && <Category />}
      {props.selectedComponent === 'urun' && <Product />}
      {props.selectedComponent === 'end' && <End />}
    </div>
    </div>
  );
};

export default AdminPage;
