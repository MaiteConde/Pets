const dogReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_ALL_DOGS':
            case 'GET_DOGS_USER':
            return {
                ...state,
                dogs: action.payload
            }
            case 'GET_DOG_ID':
               
                return{
                        ...state,
                        dog: action.payload
                    }
                    case 'GET_DOG_SEARCH':
                return{
                        ...state,
                        dogSearch: action.payload
                    }
                    case 'SEX_PET':
                        return{
                                ...state,
                                sex: action.payload
                            }
                    
            case 'CLEAR':
                return{
                    state: undefined
                        }
    
        default:
            return state;
    }
};
export default dogReducer;