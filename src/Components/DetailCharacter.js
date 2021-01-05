import React from 'react'

function DetailCharacter({character}) {
  return (
    <div className="row card shadow-lg mt-5" style={{height: "70vh", width: "50vh"}}>
      <div className="card-header col p-0"><img src={character.image} alt={character.image} style={{width: "100%"}}/></div>
      <div className="card-body col p-0">
        <table border="1">
          <tbody>
            <tr>
              <td>Name</td>
              <td>{character.name}</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>{character.status}</td>
            </tr>
            <tr>
              <td>Species</td>
              <td>{character.species}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{character.gender}</td>
            </tr>
            <tr>
              <td>Origin</td>
              <td>{character.origin.name}</td>
            </tr>
            <tr>
              <td>Location</td>
              <td>{character.location.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DetailCharacter