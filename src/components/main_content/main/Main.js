import React from "react";

const Main = () => {
  const MainData = [
    {
      id: "01",
      title: "Priority",
      artist: "Mos Def",
      time: "1:25",
      album: "The Ecstatic",
    },
    {
      id: "02",
      title: "Time Is Ticking Out",
      artist: "The Cranberries",
      time: "2:59",
      album: "Wake Up And Smell t..",
    },
    {
      id: "03",
      title: "One Minute More",
      artist: "Capital Cities",
      time: "3:23",
      album: "In A Tidal Wave Of M..",
    },
    {
      id: "04",
      title: "Second To None",
      artist: "Supercell",
      time: "5:50",
      album: "Sorry Music Records Inc",
    },
    {
      id: "05",
      title: "Vick To The World",
      artist: "CHICO",
      time: "5:11",
      album: "HoneyWorks",
    },
  ];
  return (
    <main>
      <div className="main_content">
        <h1>My Playlist</h1>
        <p>Show All</p>
      </div>
      <table>
        <tr>
          <th>#</th>
          <th>TITLE</th>
          <th>ARTIST</th>
          <th>TIME</th>
          <th>ALBUM</th>
        </tr>
      </table>
      {MainData.map((MainData) => (
        <div className="data">
          <p>{MainData.id}</p> <p>{MainData.title}</p> <p>{MainData.artist}</p>{" "}
          <p>{MainData.time}</p> <p>{MainData.album}</p>
        </div>
      ))}
    </main>
  );
};

export default Main;
