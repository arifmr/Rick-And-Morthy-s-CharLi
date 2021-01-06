export function addToFav(id) {
  return { 
    type: "addToFav",
    payload: id
  } 
}

export function removeFromFav(data) {
  return {
    type: "removeFromFav",
    payload: data
  }
}