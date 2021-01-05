import React from 'react'

function CharacterList({character}) {
  return (
    <div className="card m-2 col-2" key={character.id}>
      <div className="card-header"><img src={character.image} alt={character.image} style={{width: "100%"}} /></div>
      <div className="card-body text-center">{character.name}</div>
    </div>
  )
}

export default CharacterList