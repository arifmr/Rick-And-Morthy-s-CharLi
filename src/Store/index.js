import {createStore} from 'redux'

//Preparation
const initialState = {
  id: []
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case "addToFav":
      return {...state, id: state.id.concat(action.payload)}
    case "removeFromFav":
      return {...state, id: action.payload}
    default :
      return state
  }
}

const store = createStore(reducer)

export default store