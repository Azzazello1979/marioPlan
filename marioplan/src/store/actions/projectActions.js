// a normal action creator would return an object, Thunk however 
// returns a function, that can in turn interact with APIs or external
// databases asynchronously and when the async tasks are done, continue dispatch

export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()

        })
        .then(
            () => dispatch({ type: 'CREATE_PROJECT', project }), // project is short for project:project
            rejected => console.log(rejected)
        )
        .catch(
            error => dispatch({ type: 'CREATE_PROJECT_ERROR', error })
        )
        
    }
}

