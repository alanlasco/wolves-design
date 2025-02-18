import React from "react";
import "../styles/Card.css";
import "../styles/styles.css";
import { Project } from "./Project.tsx";
export const Projects = () => {
  return (
    <>
      <h3 className="textProjects">PROJECTS</h3>
      <section className="ProjectsContainer">
        <Project />
      </section>
    </>
  );
};
