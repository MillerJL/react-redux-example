import { combineReducers } from 'redux'
import countReducer from './count'
import { routerReducer } from 'react-router-redux'


const rootReducer = combineReducers({
   count: countReducer,
   routing: routerReducer
})

export default rootReducer
