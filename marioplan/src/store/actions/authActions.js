export const signIn = credentials => {
    return (dispatch, getState, { getFirebase }) => {
        //console.log('authActions.js > signIn() > credentials: ', credentials)
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        )
        .then(
            () => {
                dispatch({ type: 'LOGIN_SUCCESS' });
            }
        )
        .catch(
            err => {
                dispatch({ type: 'LOGIN_ERROR', err });
            }
        )
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase} ) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then( () => {
                dispatch({ type: 'SIGNOUT_SUCCESS' })
            } 
        )
    }
}

export const signUp = userObj => {
    return ( dispatch, getState, { getFirebase, getFirestore } ) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            userObj.email,
            userObj.password
        )
        .then((resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: userObj.firstName,
                lastName: userObj.lastName,
                initials: userObj.firstName[0] + userObj.lastName[0]
            })
        })
        .then(() => {
            dispatch({
                type: 'SIGNUP_SUCCESS'
            })
        })
        .catch(err => {
            dispatch({
                type: 'SIGNUP_ERROR', err
            })
        })
    }
}