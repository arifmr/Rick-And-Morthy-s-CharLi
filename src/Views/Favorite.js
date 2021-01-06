import React from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../Hooks/useFetch'
import FavoriteList from '../Components/FavoriteList'

function Favorite() {
  const id = useSelector(state => state.id)
  const { data: characters, loading, error } = useFetch("https://rickandmortyapi.com/api/character/"+id)
  if (error) return <h1>Looks like our server is currently having an issue</h1>
  if (loading) return <h1>Please Wait ....</h1>

  if (characters.results) {
    return(
      <div className="container card mt-5 p-0" style={{backgroundColor: "gray"}}>
        <div className="card-header text-center bg-warning p-0">
          <h1>Favorite List</h1>
        </div>
        <div className="row card-body text-white justify-content-center p-0">
          <h1>You Haven't Added Any Character Yet</h1>
        </div>
      </div>
    )
  } else if (!characters.length) {
    return (
      <div className="container card mt-5 p-0" style={{backgroundColor: "gray"}}>
        <div className="card-header text-center bg-warning p-0">
          <h1>Favorite List</h1>
        </div>
        <div className="card-body row justify-content-center text-center p-0">
          <FavoriteList key={characters.id} character={characters} />
        </div>
      </div>
    )
  } else {
    return (
      <div className="container card mt-5 p-0" style={{backgroundColor: "gray"}}>
        <div className="card-header text-center bg-warning p-0">
          <h1>Favorite List</h1>
        </div>
        <div className="card-body row justify-content-center text-center p-0">
          { characters.map(character =>
              {return <FavoriteList key={character.id} character={character} />}
          ) }
        </div>
      </div>
    )
  }

}

export default Favorite