import React from "react";
import "./ProjectSummary.css";
import moment from 'moment';

const ProjectSummary = ({ project }) => {
  return (
    <div className="card nice-card">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>
          posted by {project.authorFirstName} {project.authorLastName}
        </p>
        <p className="grey-text">{ moment(project.createdAt.toDate()).calendar() }</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
