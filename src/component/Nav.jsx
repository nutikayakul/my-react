import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Blog">Blog</Link>
      <Link to="/Contact">Contact</Link>
    </nav>
  )
}

export default Nav
