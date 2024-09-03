import React from "react";

export const Project = ({ link, imgSrc, title }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="project"
      rel="noreferrer"
    >
      <img
        className="project-image"
        src={imgSrc}
        alt="project"
      />
      <p className="project-title">
        <span className="code">&lt;</span>
        {title}
        <span className="code">/&gt;</span>
      </p>
    </a>
  );
};
