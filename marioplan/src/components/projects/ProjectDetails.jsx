import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import "./ProjectDetails.css";
import { Redirect } from "react-router-dom";
import moment from "moment";

const ProjectDetails = props => {
  const { project, auth } = props;
  if (!auth.uid) {
    return <Redirect to="/signin" />;
  }
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card nice-card">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {project.authorFirstName} {project.authorLastName}
            </div>
            <div>{moment(project.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <h3 className="whiteText">Loading project...</h3>
      </div>
    );
  }
};

// or 'map-state-to-props'
const stateInjector = (storeState, thisComponentProps) => {
  //console.log('<ProjectDetails /> storeState: ', storeState)
  //console.log('<ProjectDetails /> thisComponentProps: ', thisComponentProps)
  const id = thisComponentProps.match.params.id;
  const projects = storeState.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: storeState.firebase.auth
  };
};

export default compose(
  connect(stateInjector, null),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
