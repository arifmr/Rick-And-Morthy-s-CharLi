export function addToFav(id) {
  return { 
    type: "add-fav",
    payload: id
  } 
}

export function removeFromFav(data) {
  return {
    type: "remove-fav",
    payload: data
  }
}

export function loadPage() {
  return {
    type: "load-page",
    loading: true
  }
}
export function clearCharacters() {
  return {
    type: "clear-characters",
    characters: null
  }
}

export function fetchCharacters(url) {
  return (dispatch, getState) => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log(url);
        console.log(res);
        dispatch({
          type: "use-fetch",
          characters: res,
          loading: false,
          error: null
        })
      })
      .catch(err => {
        dispatch({
          type: "use-fetch",
          characters: [],
          loading: false,
          error: err
        })
      })
  }
}
