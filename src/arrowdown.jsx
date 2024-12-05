import React from "react";
import "./Sidebar.css";
import Image1 from "./assets/image1.png";
import Image2 from "./assets/image2.png";
import Image3 from "./assets/image3.png";
import LikedImage from "./assets/Liked.png";
import DownArrow from "./assets/fi-ss-caret-down.png";

function arrowdown() {
  const playlists = [
    { img: LikedImage, title: "Liked Songs" },
    { img: Image2, title: "Neffex Playlist" },
    { img: Image3, title: "K/DA" },
    { img: Image1, title: "Liked Songs" },
    { img: Image2, title: "Dance / Electronic Mix" },
  ];

  return (
    <div className="arrowdown">
      <div>
        <h1>Good Morning</h1>
      </div>
      <div className="user-section">
        <div className="user-info">
          <img src={Image1} alt="User" />
          <p>Angel</p>
        </div>
        <img className="dropdown-icon" src={DownArrow} alt="Dropdown" />
      </div>
      <div className="playlists">
        {playlists.map((playlist, index) => (
          <div className="playlist-card" key={index}>
            <img src={playlist.img} alt={playlist.title} />
            <h4>{playlist.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default arrowdown;
