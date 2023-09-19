import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Landing Page</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">

          <NavLink to='/allusers' style={{ marginRight: '10px', textDecoration: 'none' }} exact >All Users</NavLink>

          <NavLink to='/adduser' exact style={{ textDecoration: 'none' }} >Add User</NavLink>
        </div>
      </div>
    </nav>

  )
}

export default Navbar