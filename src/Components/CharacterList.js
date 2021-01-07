import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {addToFav} from '../Store/actions/addToFav'
import {loadPage} from '../Store/actions/loadPage'

function CharacterList({character}) {
  const history = useHistory()
  const dispatch = useDispatch()
  const data = useSelector(state => state.characterReducer.id)

  const handleDetail = (id) => {
    dispatch(loadPage())
    history.push("/detail/"+id)
  }
  
  function handleFavorite(id) {
    if (!data.length) {
      dispatch(addToFav(id))
    } else {
      for(let i = 0; i < data.length; i++) {
        if (Number(id) === Number(data[i])) {
          break
        } else {
          if (i === data.length - 1 && Number(id) !== Number(data[i])) {
            dispatch(addToFav(id))
          }
        }
      }
    }
  }
  
  return (
    <div className="card shadow-lg m-4 col-3 p-0" key={character.id}>
      <div className="card-header p-0"><img src={character.image} alt={character.image} style={{width: "100%"}} /></div>
      <div className="card-body bg-warning text-center">
        <p>{character.name}</p>
        <button className="btn btn-primary btn-sm m-1" onClick={() => handleDetail(character.id)}>Detail</button>
        <button className="btn btn-primary btn-sm m-1" onClick={() => handleFavorite(character.id)}>Add To Favorite</button>
      </div>
    </div>
  )
}

export default CharacterList