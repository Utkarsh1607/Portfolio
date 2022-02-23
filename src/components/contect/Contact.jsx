import React from "react";
import("./Contact.css");

export default function Contact() {
  return (
    <>
      <div id="contact" className="connect">
        <div className="container">
          <h1>Contact Me</h1>
          <p>
            Drop me a mail at <strong> Utkarsh16071998@gmail.com</strong>
          </p>
          <div className="links">
            <a
              href="https://github.com/Utkarsh1607"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="www.linkedin.com/in/utkarshgupta16"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
