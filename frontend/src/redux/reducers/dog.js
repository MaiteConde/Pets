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
        default:
            return state;
    }
};
export default dogReducer;