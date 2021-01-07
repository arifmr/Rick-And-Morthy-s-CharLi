export function addToFav(id) {
  return { 
    type: "add-fav",
    payload: id
  } 
}