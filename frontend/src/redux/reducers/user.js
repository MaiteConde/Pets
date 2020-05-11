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
                case 'GET_MESSAGES':
                case 'GET_MESSAGE':
                return {
                    ...state,
                    messages: action.messages
                }
               
                case 'LOCATIONS':
                    return {
                        ...state,
                        locations: action.locations
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