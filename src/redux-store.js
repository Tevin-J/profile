import {reducer as formReducer} from 'redux-form'
import {combineReducers, createStore} from "redux";

let reducers = combineReducers({
    form: formReducer
})
let store = createStore(reducers)
window.store = store
export default store