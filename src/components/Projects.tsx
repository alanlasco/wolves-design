import React from "react";
import "../styles/Card.css";
import "../styles/styles.css";
import "../styles/Projects.css";
import { Project } from "./Project.tsx";
export const Projects = () => {
  return (
    <>
      <div className="TextProjectsContainer">
        <h2 className="textProjects">PROJECTS</h2>
      </div>
      <section className="ProjectsContainer">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </section>
    </>
  );
};
