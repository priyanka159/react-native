import {createStore,combineReducers,applyMiddleware} from 'redux'
import userReducer from '../reducers/userReducer'
//import thunk from 'redux-thunk'
const configureStore=()=>{
const store=createStore(combineReducers({
    user:userReducer
}))
return store
}
export default configureStore