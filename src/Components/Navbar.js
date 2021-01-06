import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar bg-dark">
      <input type="text" className="ml-3" placeholder="Search.." /><button className="btn btn-primary btn-sm ml-1">Search</button>
      <NavLink exact to="/" className="ml-auto nav_link" activeStyle={{fontWeight: "bold", color: "red"}}>Home</NavLink>
      <NavLink exact to="/favorite" className="ml-5 nav_link" activeStyle={{fontWeight: "bold", color: "red"}}>Favorite</NavLink>
    </nav>
  )
}

export default Navbar