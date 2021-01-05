import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import DetailCharacter from '../Components/DetailCharacter'
import useFetch from '../Hooks/useFetch'

function Detail() {
  const params = useParams()
  console.log(params);
  const url = "https://rickandmortyapi.com/api/character/" + params.id
  const { data: character, loading, error } = useFetch(url)

  if (error) return <h1>Looks like our server is currently having an issue</h1>
  if (loading) return <h1>Please Wait ....</h1>

  return(
    <div>
      <Navbar />
      <div className="container card shadow-lg mt-5" style={{minHeight:"100vh", backgroundColor: "gray"}}>
        <div className="card-header row justify-content-center bg-warning p-0">
          <h1>Character Detail</h1>
        </div>
        <div className="card-body row p-0 justify-content-center">
          <DetailCharacter character={character}/>
        </div>
      </div>
    </div>
  )
}

export default Detail