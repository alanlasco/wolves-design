import React from "react";
import "../styles/Project.css";
import Presentacion from "./PRESENTACION.jpg";
export const Project = () => {
  return (
    <article className="ProjectContainer">
      <div className="imageContainer">
        <img className="image" src={Presentacion} alt="" />
      </div>
    </article>
  );
};
