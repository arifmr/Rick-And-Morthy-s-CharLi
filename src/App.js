import './App.css';
import React from 'react'
import Home from './Views/Home'
import useFetch from './Hooks/useFetch'

function App() {
  const { data: characters, loading, error } = useFetch("https://rickandmortyapi.com/api/character")

  return (
    <div>
      <Home characters={characters} error={error} loading={loading} />
    </div>
  )
}

export default App;
