import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
import fireBaseConfig from './config/fireBaseConfig';


const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(fireBaseConfig),
        reactReduxFirebase(fireBaseConfig, { attachAuthIsReady: true })
    ) 
);

store.firebaseAuthIsReady
.then(() => {
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
})
.catch(err => console.log(err))

// thunk:
// you can return a function inside the action creators that can
// halt the dispatch and interact with databases, then continue dispatch



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
