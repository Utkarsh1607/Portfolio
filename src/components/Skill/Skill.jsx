import html from "./image/html.png";
import css from "./image/css.png";
import js from "./image/js.png";
import reactjs from "./image/reac.png";
import mongo from "./image/mongo.png";
// import boot from "./image/boot.png";
import node from "./image/node.png";
import vscode from "./image/vscode.png";
import React from "react";
import("./Skill.css");
export default function Skill() {
  return (
    <div id="skill">
      <h1 className="h15">Skills and Tools</h1>
      <div id="tools">
        <div>
          <img src={html} alt="" />
          <h4>HTML</h4>
        </div>
        <div>
          <img src={css} alt="" />
          <h4>CSS</h4>
        </div>
        <div>
          <img src={js} alt="" />
          <h4>JavaScript</h4>
        </div>
        <div>
          <img src={reactjs} alt="" />
          <h4>React</h4>
        </div>
        <div>
          <img src={mongo} alt="" />
          <h4>MongoDB</h4>
        </div>
        <div>
          <img src={node} alt="" />
          <h4>Node</h4>
        </div>
        <div>
          <img src={vscode} alt="" />
          <h4>VS code</h4>
        </div>
      </div>
    </div>
  );
}
