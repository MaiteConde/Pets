const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
        case 'LOGOUT':
        case 'GET_INFO':
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
};
export default userReducer;