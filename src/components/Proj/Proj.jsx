import bankistWebsite from "./bankist.png";
import bankistAppImg from "./Bankist-App.png";
import img3 from "./snapdeal.png";
import React from "react";
import("./Proj.css");
export default function Proj(props) {
  return (
    <div id="project" className="proj">
      <h1 className="h14">My Recent Work</h1>
      <div className="projCont">
        <div className="final">
          <div className="img">
            <img src={bankistAppImg} alt="" />
          </div>
          <div>
            <h2>A fun banking application</h2>
            <p>
              This is a kind of online banking website where a user can login by
              entering a username and pin. He can see his Transaction history
              with his account balance. User can also request for a loan. User
              can also send money to a valid user and receive money from any
              user.
              <br />
              Try entering: username- ug and pin- 1111 OR username- dg and pin-
              2222
            </p>
            <h3>Tech Stack</h3>

            <div className="tech">
              <div>
                <i class="fab fa-html5"></i>
                <p>HTML</p>
              </div>
              <div>
                <i class="fab fa-css3"></i>
                <p>CSS</p>
              </div>
              <div>
                <i class="fab fa-js"></i>
                <p>JavaScript</p>
              </div>
            </div>
            <div className="buttons">
              <a
                href="https://bankist-app-utkarsh-gupta.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Preview</button>
              </a>
              <a
                href="https://github.com/Utkarsh1607/Bankist-App"
                target="_blank"
                rel="noreferrer"
              >
                <button>Code</button>
              </a>
            </div>
          </div>
        </div>

        <div className="final">
          <div className="img">
            <img src={bankistWebsite} alt="" />
          </div>
          <div>
            <h2>Bankist Website</h2>
            <p>
              This is a kind of any online banking landing page which gives a
              short description about their product to their user. I have used
              tons of dom effects which took at around 2 weeks to complete this
              whole project.
            </p>
            <h3>Tech Stack</h3>

            <div className="tech">
              <div>
                <i class="fab fa-html5"></i>
                <p>HTML</p>
              </div>
              <div>
                <i class="fab fa-css3"></i>
                <p>CSS</p>
              </div>
              <div>
                <i class="fab fa-js"></i>
                <p>JavaScript</p>
              </div>
            </div>
            <div className="buttons">
              <a
                href="https://bankist-website-zeta.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Preview</button>
              </a>
              <a
                href="https://github.com/Utkarsh1607/Bankist-Website"
                target="_blank"
                rel="noreferrer"
              >
                <button>Code</button>
              </a>
            </div>
          </div>
        </div>

        <div className="final">
          <div className="img">
            <img src={img3} alt="" />
          </div>
          <div>
            <h2>Snapdeal Clone</h2>
            <p>
              Snapdeal is India's leading pure-play value Ecommerce platform
              from where a user can purchase all types of items. This is a group
              project which is made by group of 5 executed in 4 days.
            </p>
            <h3>Tech Stack</h3>

            <div className="tech">
              <div>
                <i class="fab fa-html5"></i>
                <p>HTML</p>
              </div>
              <div>
                <i class="fab fa-css3"></i>
                <p>CSS</p>
              </div>
              <div>
                <i class="fab fa-js"></i>
                <p>JavaScript</p>
              </div>
            </div>
            <div className="buttons">
              <a
                href="https://snapdeal-clone.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Preview</button>
              </a>
              <a
                href="https://github.com/anand7071/snapdeel-clone"
                target="_blank"
                rel="noreferrer"
              >
                <button>Code</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
