// a normal action creator would return an object, Thunk however 
// returns a function, that can in turn interact with APIs or external
// databases asynchronously and when the async tasks are done, continue dispatch

export const createProject = (project) => {
    return (dispatch, getState) => {
        // make async call
        dispatch({ type: 'CREATE_PROJECT', project }) // project is short for project:project
    }
}

