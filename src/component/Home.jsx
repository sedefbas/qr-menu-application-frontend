import React from "react";
import Navbar from "./Navbar";
import Resim from "./Resim";
import Menu from "./Menu";
import PageContainer from "../containers/PageContainer";
import About from "./About";
import { Route, Routes } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <Resim />
      <PageContainer>
        <Routes>
          <Route path="/" element={<Menu />} />
        </Routes>
      </PageContainer>
      <About />
    </>
  );
};

export default Home;
