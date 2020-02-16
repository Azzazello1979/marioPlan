const initState = {
    projects: [
        {id: '1', title: 'help me find peach', content: 'blahblabblah'},
        {id: '2', title: 'collect all the stars', content: 'blahblabblah'},
        {id: '3', title: 'egghunt with yoshi', content: 'blahblabblah'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.error);
            return state;
        default:
            return state;        
    }
}

export default projectReducer;
