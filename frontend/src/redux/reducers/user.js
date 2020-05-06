const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
        case 'LOGOUT':
        case 'GET_INFO':
        case 'GET_INFO_ID':
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
};
export default userReducer;