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