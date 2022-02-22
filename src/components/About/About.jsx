import coding from "./coding.gif";
import React from "react";
import("./About.css");

export default function About() {
  return (
    <div id="about">
      <h1 className="h11">About Me</h1>
      <div className="cont">
        <div id="img">
          <img src={coding} alt="" />
        </div>
        <div>
          <p>
            A Full-stack web developer from India. Self motivated and curious
            with a keen interest in building user friendly products. My field of
            interests are building new web technologies, products and also in
            areas related to deep learning. I love to create beautiful and
            efficient websites for users. I keenly apply my knowledge for
            developing products with node.js, modern Javascript Library,
            mongoDB, express and frameworks like react.js
          </p>
        </div>
      </div>
    </div>
  );
}
