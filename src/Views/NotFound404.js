import React from 'react'
import {Link} from 'react-router-dom'

function NotFound() {

  return (
    <div className="row justify-content-center">
    <div className="card bg-warning shadow-lg col-4 mt-5 justify-content-center text-center">
      <h3 className="pt-3">Oops... </h3>
      <h3 className="pb-3"> Looks like you got lost somewhere</h3>
      <h5 className="pb-3"><Link to="/">Back To Home</Link></h5>
    </div>
    </div>
  )
}

export default NotFound