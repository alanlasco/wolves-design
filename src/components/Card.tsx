import React from "react";
import "../styles/Card.css";
interface CardProps {
  titleH3: string;
  titleH2: string;
  description: string;
}

export const Card = ({ titleH3, titleH2, description }: CardProps) => {
  return (
    <article className="CardContainer">
      <div className="titlesContainer">
        <h2 className="TService">{titleH3}</h2>
        <h3 className=" TServiceTwo"> {titleH2}</h3>
      </div>
      <br />
      <p className="TServiceDescription">{description}</p>
      <div className="buttonContainer">
        <button className="custom-button">DETAILS</button>
      </div>
    </article>
  );
};
