import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromFav } from '../Store/actions'

function FavoriteList({character}) {
  const history = useHistory()
  const dispatch = useDispatch()
  const data = useSelector(state => state.id)

  const handleDetail = (id) => {
    history.push("/detail/"+id)
  }

  function removeFavorite(id) {
    for(let i = 0; i < data.length; i++) {
      if (Number(id) === Number(data[i])) {
        const newData = data.filter(item => item !== id)
        dispatch(removeFromFav(newData))
      }
    }
  }

  return (
    <div className="card shadow-lg m-4 col-3 p-0" key={character.id}>
      <div className="card-header p-0"><img src={character.image} alt={character.image} style={{width: "100%"}} /></div>
      <div className="card-body bg-warning text-center">
        <p>{character.name}</p>
        <button className="btn btn-primary btn-sm m-1" onClick={() => handleDetail(character.id)}>Detail</button>
        <button className="btn btn-primary btn-sm m-1" onClick={() => removeFavorite(character.id)}>Remove</button>
      </div>
    </div>
  )
}

export default FavoriteList