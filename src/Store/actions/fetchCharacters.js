export function fetchCharacters(url) {
  return (dispatch, getState) => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
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
