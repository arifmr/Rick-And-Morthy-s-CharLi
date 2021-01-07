import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import characterReducer from './reducers/characterReducers'

const rootReducer = combineReducers({
  characterReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store