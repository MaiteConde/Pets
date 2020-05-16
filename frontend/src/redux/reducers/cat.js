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
                case 'GET_CAT_SEARCH':
                    return{
                            ...state,
                            catSearch: action.payload
                        }
                case 'CAT_ADOPTED':
                     return{
                            ...state,
                      catadopted: action.payload
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