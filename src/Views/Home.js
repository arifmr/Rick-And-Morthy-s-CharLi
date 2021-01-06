import React from 'react'
import CharacterList from '../Components/CharacterList'
import useFetch from '../Hooks/useFetch'
import Loader from '../Components/Loader'

function Home() {
  const { data: characters, loading, error } = useFetch("https://rickandmortyapi.com/api/character")

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