const initialState = {
  id: [],
  characters: [],
  loading: true,
  error: null
}

function characterReducer(state = initialState, action) {
  switch(action.type) {
    case "add-fav":
      return {...state, id: state.id.concat(action.payload)}
    case "remove-fav":
      return {...state, id: action.payload}
    case "load-page":
      return {...state, loading: action.loading}
    case "use-fetch":
      return {...state, characters: action.characters, loading: action.loading, error: action.error}
    default :
      return state
  }
}

export default characterReducer