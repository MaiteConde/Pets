const catReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_ALL_CATS':
        case 'GET_CATS_USER':
            return {
                ...state,
                cats: action.payload
            }
            case 'GET_CAT_ID':
            return{
                    ...state,
                    cat: action.payload
                }
                case 'CLEAR':
                    return{
                        state: undefined
                    }

        default:
            return state;
    }
};
export default catReducer;