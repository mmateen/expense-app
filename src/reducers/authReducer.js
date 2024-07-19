const authInitalState = {
    userDetails: {},
    loginDetails: {}
}

const authReducer = (state = authInitalState, action) => {
    switch (action.type) {
        case 'SIGNUP':
            return {
                ...state,
                userDetails: action.payload
            }
        case 'LOGIN':
            return {
                ...state,
                loginDetails: action.payload
            }
        default: 
            return state
    }
}

export default authReducer;