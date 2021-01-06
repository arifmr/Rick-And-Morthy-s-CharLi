function searchCharacters(search) {
  return fetch('https://rickandmortyapi.com/api/character/?name='+search)
    .then(res => res.json())
    .then(res => res.results)
    .catch(err => {
      console.log(err)
      return []
    })
}

export default searchCharacters