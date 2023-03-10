import React from "react";
import FifthRow from "./main_table/FifthRow";
import FirstRow from "./main_table/FirstRow";
import FourthRow from "./main_table/FourthRow";
import SecondRow from "./main_table/SecondRow";
import SixthRow from "./main_table/SixthRow";
import ThirdRow from "./main_table/ThirdRow";

const Main = () => {
  return (
    <main>
      <div className="main_content">
        <h1>My Playlist</h1>
        <p>Show All</p>
      </div>
      <FirstRow />
      <SecondRow />
      <ThirdRow />
      <FourthRow />
      <FifthRow />
      <SixthRow />
    </main>
  );
};

export default Main;
