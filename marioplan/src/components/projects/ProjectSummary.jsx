import React from "react";
import "./ProjectSummary.css";

const ProjectSummary = ({ project }) => {
  return (
    <div className="card project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>Posted by Bruc</p>
        <p className="grey-text">3rd September, 2AM</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
