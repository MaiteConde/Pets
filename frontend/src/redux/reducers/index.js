import { combineReducers } from "redux";

import user from './user'
import dog from './dog'
import cat from './cat'
import message from './user'
import provincias from './location'


const reducer = combineReducers({
    user,
    dog,
    cat,
    message,
    provincias
})
export default reducer;