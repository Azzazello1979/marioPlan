import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';

// this is the 'boss robot'(rootReducer) in front of the 
// warehouse(store), 
// giving orders(actions) to lesser robots(reducers)'

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
});

export default rootReducer;

