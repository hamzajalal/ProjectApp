export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'legend',
            authorLastName: 'Sparta',
            authorId: 1234,
            createdAt: new Date()
        }).then (() => {
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch ((err) => {
            dispatch({ type: 'CREATE_PROJECT_FAIL', err });
        })
        
    }
};
