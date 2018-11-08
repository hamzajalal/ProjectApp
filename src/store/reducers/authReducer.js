const initState = {
    authError: null
};

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_FAIL':
        console.log('login fail');
            return {
                ...state,
                authError: 'Login Failed'
            }
        case 'LOGIN_SUCCESS':
        console.log('login success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
        console.log('Signout success');
            return state;
        case 'SIGNUP_SUCCESS':
        console.log('Signup success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_FAIL':
        console.log('Signup fail');
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state;
    }
}

export default authReducer;