const authInitalState = {
    userDetails: {}
}

const authReducer = (state = authInitalState, action) => {
    switch (action.type) {
        case 'SIGNUP':
            return {
                ...state,
                userDetails: action.payload
            }
        default: 
            return state
    }
}

export default authReducer;