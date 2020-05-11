const userReducer = (state = {}, action) => {
    switch (action.type) {
       
                case 'LOCATIONS':
                    return {
                        ...state,
                        provincias: action.provincias
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