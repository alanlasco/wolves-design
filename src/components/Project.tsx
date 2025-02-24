import React from "react";
import "../styles/Project.css";

interface ProjectProps {
  img: string;
  text: string;
}
export const Project = ({ img, text }: ProjectProps) => {
  return (
    <article className="ProjectContainer">
      <div className="imageContainer">
        <div className="TextContainer">
          <p className="Text">{text}</p>
        </div>
        <img className="image" src={img} alt="Project" />
      </div>
    </article>
  );
};
