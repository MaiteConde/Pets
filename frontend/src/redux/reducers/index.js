import { combineReducers } from "redux";

import user from './user'
import dog from './dog'
import cat from './cat'


const reducer = combineReducers({
    user,
    dog,
    cat
})
export default reducer;