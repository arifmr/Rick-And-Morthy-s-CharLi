import React from 'react'
import { useHistory } from 'react-router-dom'

function CharacterList({character}) {
  const history = useHistory()

  const handleDetail = (id) => {
    history.push("/detail/"+id)
  }

  return (
    <div className="card shadow-lg m-4 col-3 p-0" key={character.id}>
      <div className="card-header p-0"><img src={character.image} alt={character.image} style={{width: "100%"}} /></div>
      <div className="card-body bg-warning text-center">
        <p>{character.name}</p>
        <button className="btn btn-primary btn-sm m-1" onClick={() => handleDetail(character.id)}>Detail</button>
        <button className="btn btn-primary btn-sm m-1">Add To Favorite</button>
      </div>
    </div>
  )
}

export default CharacterList