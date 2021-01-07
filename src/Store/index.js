import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
  id: [],
  characters: [],
  loading: true,
  error: null
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case "add-fav":
      return {...state, id: state.id.concat(action.payload)}
    case "remove-fav":
      return {...state, id: action.payload}
    case "load-page":
      return {...state, loading: action.loading}
    case "clear-characters":
      return {...state, characters: action.characters}
    case "use-fetch":
      return {...state, characters: action.characters, loading: action.loading, error: action.error}
    default :
      return state
  }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store