import React from "react";
import Header from "../header/Header";
import Hero from "../hero/Hero";
import Main from "../main/Main";
import MainFooter from "../main_footer/MainFooter";
import NavBar from "../navbar/NavBar";

const MainContainer = () => {
  return (
    <div className="main_container">
      <NavBar />
      <Header />
      <Hero />
      <Main />
      <MainFooter />
    </div>
  );
};

export default MainContainer;
