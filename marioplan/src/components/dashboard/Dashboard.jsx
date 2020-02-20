import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from './../projects/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';


class Dashboard extends Component{
    render(){
        // console.log('the props of Dashboard: ', this.props)
        const { projects, auth } = this.props;
        if(!auth.uid){
            return <Redirect to='/signin' />
        }
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={ projects }/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

const stateInjector = state => {
    // the state arg above is the state of the store
    // map-state-to-props
    console.log('stateInjector functions arg:state ', state)
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
}


// to compose multiple higher order functions together, use compose() of redux
export default compose(
    connect(stateInjector),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(Dashboard);
// The connect function of react-redux connects a react component 
// with the redux store.
// As args it takes a function that 'maps the state to props' as
// well as the react component.

// the stateInjector function above...

// THE PROPS OF THE COMPONENT INHERITS THE STATE OF THE STORE

// THE STATE OF THE STORE IS PLUGGED INTO THE PROPS OF THE COMPONENT

// INJECTS THE STATE OF THE STORE INTO THE COMPONENT'S PROPS
