import authenticationReducer from './authenticationReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer= combineReducers({
    authentication: authenticationReducer,
    project: projectReducer,
    firestore: firestoreReducer,
});

export default rootReducer;