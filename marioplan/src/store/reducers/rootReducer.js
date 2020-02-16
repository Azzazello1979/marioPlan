import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

// this is the 'boss robot'(rootReducer) in front of the 
// warehouse(store), 
// giving orders(actions) to lesser robots(reducers)'

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer
});

export default rootReducer;

// Redux Thunk:
// halts the dispatch
// performs async tasks - gets data from DB
// resumes the dispatch

// Redux Thunk stands between the component who dispatches an action and the reducer
// before the action reaches the reducer, Redux Thunk performs async tasks on the action

// dispatch action ---> Redux Thunk (middleware) ---> Reducer

