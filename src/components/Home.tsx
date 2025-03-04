import React from "react";
import "../styles/Home.css";
import "../styles/Typewriter.css";
import HomeImg from "../images/graphic_editor.png";
import { Typewriter } from "./Typewriter.tsx";
export const Home = () => {
  return (
    <>
      <section className="homeContainer" id="home">
        <div className="card">
          <div className="content">
            <div className="textContent">
              <Typewriter words={["We Innovate", "We Design", "We Build"]} />
              <h1 className="WolvesStudio">Wolves Studio</h1>
              <img src={HomeImg} alt="" className="editorImgHidden" />
              <h2 className="WolvesStudioText">
                Digital designer & illustrator
              </h2>
              <p className="WolvesStudioInfo">
                {" "}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit,
              </p>
              <div className="buttonContainer">
                <a href="#about">
                  <button className="boton-elegante">Explore</button>
                </a>
              </div>
            </div>
            <div>
              <img src={HomeImg} alt="" className="editorImg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
