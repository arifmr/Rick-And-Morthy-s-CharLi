import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import CharacterList from '../Components/CharacterList'
import Loader from '../Components/Loader'
import {fetchCharacters} from '../Store/actions/fetchCharacters'

function Home() {
  const characters = useSelector((state) => state.characterReducer.characters)
  const loading = useSelector((state) => state.characterReducer.loading)
  const error = useSelector((state) => state.characterReducer.error)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCharacters("https://rickandmortyapi.com/api/character"))
  }, [dispatch])

  if (error) return <h1>Looks like our server is currently having an issue</h1>
  if (loading) return <Loader/>

  return(
    <div className="pb-5">
      <div className="container card shadow-lg mt-5" style={{backgroundColor: "gray"}}>
        <div className="card-header row justify-content-center bg-warning">
          <h1>Character List</h1>
        </div>
        <div className="row justify-content-center">
          { characters.results.map(character =>
            {return <CharacterList key={character.id} character={character} />}
          ) }
        </div>
      </div>
    </div>
  )
}

export default Home