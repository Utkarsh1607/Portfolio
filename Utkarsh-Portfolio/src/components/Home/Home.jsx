import img from "./myPic.jpeg";
import React from "react";
import "./Home.css";
export default function Home() {
  return (
    <div id="home">
      <div className="name">
        <h1>Hi there!</h1>
        <h1>I'm Utkarsh Gupta</h1>
        <h1>Full-Stack Web Developer</h1>
        <a
          href="https://drive.google.com/file/d/1WjtlE8lMRMyEET9oAnXdMdQMEyGtc0SK/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button>Resume</button>
        </a>
      </div>
      <div>
        <img src={img} alt="" />
      </div>
    </div>
  );
}
