import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from './../../store/actions/authActions';

const SignedInLinks = props => {
    return(
        <ul className="right">
            <li><NavLink to='/createproject'>New Project</NavLink></li>
            <li><a onClick={ props.signOut }>Log Out</a></li>
            <li><NavLink to='/' className="btn btn-floating pink lighten-1">{props.profile.initials}</NavLink></li>
        </ul>
    )
}

const actionInjector = dispatch => {
    return{
        signOut: () => dispatch(signOut()) 
    }
}

export default connect(null, actionInjector)(SignedInLinks);
