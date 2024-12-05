import { useState } from 'react'
import './Sidebar.css'
import HomeIcon from "./assets/Home.png";
import SearchIcon from "./assets/Search.png";
import LibraryIcon from "./assets/Your_library.png";
import CreateIcon from "./assets/Create.png";
import LikedIcon from "./assets/Liked.png";
import EpisodesIcon from "./assets/your_episodes.png";
import InstallIcon from "./assets/grommet-icons_install-option.png";
import SpotifyLogo from "./assets/Spotify_Logo.png";


function Sidebar() {

  return (
    <div className="sidebar">

      <div className="logo">
        <img src={SpotifyLogo} alt="Spotify Logo" />
      </div>

      <div className="sidebartext">
        <div>
          <img src={HomeIcon} alt="Home" />
        </div>
        <div>
          <h3 className='hehe'>Home</h3>
        </div>
        <div>
          <img src={SearchIcon} alt="Search" />
        </div>
        <div>
          <h3 className='hehe'>Search</h3>
        </div>
        <div>
          <img src={LibraryIcon} alt="Your Library" />
        </div>
        <div>
          <h3 className='hehe'>Your Library</h3>
        </div>
      </div>

      <div className="sidebartext2">
        <div>
          <img src={CreateIcon} alt="Create Playlist" />
        </div>
        <div>
          <h3 className='hehe'>Create Playlist</h3>
        </div>
        <div>
          <img src={LikedIcon} alt="Liked Songs" />
        </div>
        <div>
          <h3 className='hehe'>Liked Songs</h3>
        </div>
        <div>
          <img src={EpisodesIcon} alt="Your Episodes" />
        </div>
        <div>
          <h3 className='hehe'>Your Episodes</h3>
        </div>
      </div>

      <div className="sidebartext3">
        <h3 >FAV</h3>
        <h3 >Daily Mix 1</h3>
        <h3 >Discover Weekly</h3>
        <h3 >Malayalam</h3>
        <h3 >Dance/Electronics Mix</h3>
        <h3 >EDM Popular</h3>
        <div >
          <img src={InstallIcon} alt="Install App" />
          <h3 className='hehe1'>Install App</h3>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
