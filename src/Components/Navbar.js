import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {NavLink, useHistory} from 'react-router-dom'
import useDebounce from '../Hooks/useDebounce'
import searchCharacters from '../Hooks/searchCharacters'
import {loadPage} from '../Store/actions'

function Navbar() {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const history = useHistory()
  const debouncedSearchTerm = useDebounce(searchTerm, 500)
  const dispatch = useDispatch()

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true)
      searchCharacters(debouncedSearchTerm)
        .then(results => {
          setIsSearching(false)
          setResults(results)
        })
    } else {
      setResults([])
    }
  }, [debouncedSearchTerm])

  function onClick(id) {
    dispatch(loadPage())
    history.push("/detail/"+id)
  }

  function delay() {
    dispatch(loadPage())
    history.push("/")
  }

  if (!results) {
    return (
      <div>
        <nav className="navbar p-3 bg-dark">
          <NavLink exact to="/" className="ml-3 nav_link" activeStyle={{fontWeight: "bold", color: "red"}} onClick={() => delay()}><h3>Home</h3></NavLink>
          <NavLink exact to="/favorite" className="ml-5 nav_link" activeStyle={{fontWeight: "bold", color: "red"}}><h3>Favorite</h3></NavLink>
          <input type="text" className="ml-auto text-dark rounded p-1" onChange={e => setSearchTerm(e.target.value)} placeholder="Search" />
        </nav>
        <div className="ml-auto mr-3" style={{width: '27.5vh', position: 'relative'}}>
          {isSearching && <div>Searching ...</div>}
          <div className="card">
            <p>Character Not Found</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <nav className="navbar p-3 bg-dark">
        <NavLink exact to="/" className="ml-3 nav_link" activeStyle={{fontWeight: "bold", color: "red"}} onClick={() => delay()}><h3>Home</h3></NavLink>
        <NavLink exact to="/favorite" className="ml-5 nav_link" activeStyle={{fontWeight: "bold", color: "red"}}><h3>Favorite</h3></NavLink>
        <input type="text" className="ml-auto text-dark rounded p-1" onChange={e => setSearchTerm(e.target.value)} placeholder="Search" />
      </nav>
      <div className="ml-auto mr-3" style={{width: '27.5vh'}}>
        {isSearching && <div>Searching ...</div>}
        {results.map(res => (
          <button className="btn btn-light p-0 text-dark" style={{width: '27.5vh'}} onClick={() => {onClick(res.id)}} key={res.id}>
            {res.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Navbar