import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar navbar-dark bg-dark text-white">
      <input type="text" className="ml-3" placeholder="Search.." /><button className="btn btn-primary btn-sm ml-1">Search</button>
      <NavLink to="/" className="ml-auto text-white"><h3>Home</h3></NavLink>
      <NavLink to="/favorite" className="ml-5 text-white"><h3>Favorite</h3></NavLink>
    </div>
  )
}

export default Navbar