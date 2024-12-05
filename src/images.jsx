import { useState } from 'react'
import './Sidebar.css'
import Image9 from "./assets/image9.png";
import Image8 from "./assets/image8.png";
import Image7 from "./assets/image7.png";
import Image6 from "./assets/image6.png";
import Image5 from "./assets/image5.png";
import Image10 from "./assets/image10.png";


function images() {
    const shows = [
      { img: Image9, title: "Weekly Motivation" },
      { img: Image8, title: "MEDITATION SELF" },
      { img: Image7, title: "Words beyond acto.." },
      { img: Image6, title: "The Alexa Show In" },
      { img: Image5, title: "The Stories of Mine" },
      { img: Image10, title: "Motivation Daily.." },
    ];
  
    return (
      <div className="shows-section">
        <h2>Shows You Might Like</h2>
        <div className="shows-grid">
          {shows.map((show, index) => (
            <div className="show-card" key={index}>
              <img src={show.img} alt={show.title} />
              <h4>{show.title}</h4>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default images;

