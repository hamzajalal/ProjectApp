import authenticationReducer from './authenticationReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';

const rootReducer= combineReducers({
    authentication: authenticationReducer,
    project: projectReducer
});

export default rootReducer;