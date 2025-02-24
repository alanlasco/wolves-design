import React from "react";
import "../styles/Card.css";
import "../styles/styles.css";
import "../styles/Projects.css";
import { Project } from "./Project.tsx";
import P1 from "../images/P1.jpg";
import P2 from "../images/P2.jpg";
import P3 from "../images/P3.jpg";
import P4 from "../images/P4.jpg";
import P5 from "../images/P5.jpg";
import P6 from "../images/P6.jpg";

export const Projects = () => {
  return (
    <>
      <div className="TextProjectsContainer">
        <h2 className="textProjects">PROJECTS</h2>
      </div>

      <section className="ProjectsContainer">
        <Project
          img={P1}
          text={
            "sapiente labore facilis vitae aut? Eaque deleniti soluta voluptatum tempore fugiat dolore! Quaerat, eos excepturi?"
          }
        />
        <Project
          img={P2}
          text={
            "sapiente labore facilis vitae aut? Eaque deleniti soluta voluptatum tempore fugiat dolore! Quaerat, eos excepturi?"
          }
        />
        <Project
          img={P3}
          text={
            "sapiente labore facilis vitae aut? Eaque deleniti soluta voluptatum tempore fugiat dolore! Quaerat, eos excepturi?"
          }
        />
        <Project
          img={P4}
          text={
            "sapiente labore facilis vitae aut? Eaque deleniti soluta voluptatum tempore fugiat dolore! Quaerat, eos excepturi?"
          }
        />
        <Project
          img={P5}
          text={
            "sapiente labore facilis vitae aut? Eaque deleniti soluta voluptatum tempore fugiat dolore! Quaerat, eos excepturi?"
          }
        />
        <Project
          img={P6}
          text={
            "sapiente labore facilis vitae aut? Eaque deleniti soluta voluptatum tempore fugiat dolore! Quaerat, eos excepturi?"
          }
        />
      </section>
    </>
  );
};
