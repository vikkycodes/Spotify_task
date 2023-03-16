import React from "react";
import ExtraContainer from "./components/extra/extra_container/ExtraContainer";
import MainContainer from "./components/main_content/container/MainContainer";
import SideBar from "./components/sidebar/SideBar";
import { AppProvider } from "../src/components/utils/appContext";

const App = () => {
  return (
    <AppProvider>
      <div className="app">
        <SideBar />
        <MainContainer />
        <ExtraContainer />
      </div>
    </AppProvider>
  );
};

export default App;
