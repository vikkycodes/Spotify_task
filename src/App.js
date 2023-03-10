import React from "react";
import ExtraContainer from "./components/extra/extra_container/ExtraContainer";
import MainContainer from "./components/main_content/container/MainContainer";
import SideBar from "./components/sidebar/SideBar";

const App = () => {
  return (
    <div className="app">
      <SideBar />
      <MainContainer />
      <ExtraContainer />
    </div>
  );
};

export default App;
