import React from 'react'
import CharacterList from '../Components/CharacterList'

function Home({characters, loading, error}) {
  if (error) {
    return <h1>Seems like our server got some problems...</h1>
  } else if (loading) {
    return <h1>Please Wait ....</h1>
  } else {
    return(
      <div className="container-fluid">
        <div className="row justify-content-center">
          <h1>Rick And Morthy Character List</h1>
        </div>
        <div className="row justify-content-center">
          { characters.map(character =>
            {return <CharacterList key={character.id} character={character} />}
          ) }
        </div>
      </div>
    )
  }
}

export default Home