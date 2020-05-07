const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
        case 'LOGOUT':
        case 'GET_INFO':
            return {
                ...state,
                user: action.user
            }
            case 'GET_INFO_ID':
                return {
                    ...state,
                    userId: action.user
                }
            case 'CLEAR':
                return{
                    state: undefined
                        }
        default:
            return state;
    }
};
export default userReducer;