// components/ProjectsSection.js
import React from "react";
import { Project } from "./Project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const ProjectsSection = () => {
  const projects = [
    {
      link: "https://zhanshu21.github.io/clock/",
      imgSrc: "/profile/clock.png",
      title: "Pomodoro Clock",
    },
    {
      link: "https://zhanshu21.github.io/drum-maschine/",
      imgSrc: "/profile/drum.png",
      title: "Drum Maschine",
    },
    {
      link: "https://zhanshu21.github.io/calculator/",
      imgSrc: "/profile/calculator.png",
      title: "Calculator",
    },
    {
      link: "https://zhanshu21.github.io/random-quote-generator/",
      imgSrc: "/profile/quote.png",
      title: "Random Quote",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h1 className="project-tile">These are some of my projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
      <a
        href="https://freecodecamp.org/certification/zhanshu/front-end-development-libraries"
        className="btn"
        id="profile-link"
        target="_blank"
        rel="noreferrer"
      >
        View Certification
        <FontAwesomeIcon icon={faAnglesRight} className="arrow" />
      </a>
    </section>
  );
};

export default ProjectsSection;
