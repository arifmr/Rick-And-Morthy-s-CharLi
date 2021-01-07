import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {fetchCharacters} from '../Store/actions'
import Loader from '../Components/Loader'
import FavoriteList from '../Components/FavoriteList'

function Favorite() {
  const id = useSelector(state => state.id)
  const characters = useSelector((state) => state.characters)
  const loading = useSelector((state) => state.loading)
  const error = useSelector((state) => state.error)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCharacters("https://rickandmortyapi.com/api/character/"+id))
  }, [dispatch, id])

  if (error) return <h1>Looks like our server is currently having an issue</h1>
  if (loading) return <Loader/>

  if (characters.results) {
    return(
      <div className="container card mt-5 p-0" style={{backgroundColor: "gray"}}>
        <div className="card-header text-center bg-warning p-0">
          <h1>Favorite List</h1>
        </div>
        <div className="row card-body text-white justify-content-center p-0" style={{height: "50vh"}}>
          <h1 className="align-self-center text-warning">You Haven't Added Any Character Yet</h1>
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