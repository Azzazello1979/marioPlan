import React, { Component } from "react";
import { connect } from 'react-redux';
import { createProject } from './../../store/actions/projectActions';

export class CreateProject extends Component {
  state = {
      title: '',
      content: ''
  };

  handleChange = e => {
    //console.log(e.target.id, e.target.value)  
    this.setState({
        [e.target.id]: e.target.value
    })
  }

  handleSubmit = e => {
      e.preventDefault();
      //console.log(this.state);
      this.props.createProject(this.state);
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={ this.handleSubmit } className="white">
          <h5 className="grey-text text-darken-3">New Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={ this.handleChange } />
          </div>
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea id="content" className="materialize-textarea" onChange={ this.handleChange }>

            </textarea>
          </div>
          <div className="input-field">
            <button type="submit" className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

// the dispatch method is injected to the props of the component
// map-dispatch-to-props
const dispatchInjector = dispatch => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
} 

export default connect(null, dispatchInjector)(CreateProject);
// connect functions's 1st arg is 'stateInjector', second arg is 'dispatchInjector'

