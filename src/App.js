import React from "react";
import ExtraContainer from "./components/extra/extra_container/ExtraContainer";
import MainContainer from "./components/main_content/container/MainContainer";
import SideBar from "./components/sidebar/SideBar";
// import { AudioPlayerProvider } from "react-use-audio-player";

const App = () => {
  return (
    <div className="app">
      <SideBar />
      <MainContainer />
      {/* <AudioPlayerProvider>
        <AudioPlayer file="meow.mp3" />
      </AudioPlayerProvider> */}
      <ExtraContainer />
    </div>
  );
};

export default App;
