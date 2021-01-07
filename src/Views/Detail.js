import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom'
import DetailCharacter from '../Components/DetailCharacter'
import Loader from '../Components/Loader'
import {fetchCharacters} from '../Store/actions/fetchCharacters'

function Detail() {
  const params = useParams()
  const dispatch = useDispatch()
  const url = "https://rickandmortyapi.com/api/character/" + params.id
  const character = useSelector((state) => state.characterReducer.characters)
  const loading = useSelector((state) => state.characterReducer.loading)
  const error = useSelector((state) => state.characterReducer.error)

  useEffect(() => {
    dispatch(fetchCharacters(url))
  }, [dispatch, url])

  if (error) return <h1>Looks like our server is currently having an issue</h1>
  if (loading) return <Loader/>
  return(
    <div className="pb-5">
      <div className="container card shadow-lg mt-5" style={{ backgroundColor: "gray"}}>
        <div className="card-header row justify-content-center bg-warning p-0">
          <h1>Character Detail</h1>
        </div>
        <div className="card-body mb-5 row p-0 justify-content-center">
          <DetailCharacter character={character}/>
        </div>
      </div>
    </div>
  )
}

export default Detail