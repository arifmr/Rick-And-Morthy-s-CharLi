import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
  const [search, setSearch] = useState('')

  return (
    <nav className="navbar p-3 bg-dark">
      <NavLink exact to="/" className="ml-3 nav_link" activeStyle={{fontWeight: "bold", color: "red"}}><h3>Home</h3></NavLink>
      <NavLink exact to="/favorite" className="ml-5 nav_link" activeStyle={{fontWeight: "bold", color: "red"}}><h3>Favorite</h3></NavLink>
      <input type="text" className="ml-auto text-dark rounded p-1" onChange={e => setSearch(e.target.value)} placeholder="Search" />
      <button className="btn btn-primary btn ml-1 p-1">Search</button>
    </nav>
  )
}

export default Navbar