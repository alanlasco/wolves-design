import React from "react";
import "../styles/Home.css";
export const Home = () => {
  return (
    <>
      <section className="homeContainer" id="home">
        <div className="card">
          <div className="content">
            <div className="textContent">
              <p className="magicText">Palabras magicas</p>
              <h1 className="WolvesStudio">Wolves Studio</h1>
              <img src="logo.png" alt="" className="editorImgHidden" />
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

            <img src="assets/graphic_editor.png" alt="" className="editorImg" />
          </div>
        </div>
      </section>
    </>
  );
};
