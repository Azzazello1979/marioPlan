import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
            nostrum voluptas cum perspiciatis atque corporis, voluptatem
            doloribus similique saepe harum dolorum. Veritatis beatae
            voluptatibus cum corporis harum sint illum aspernatur!
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Bruc</div>
          <div>2nd September, 2AM</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
