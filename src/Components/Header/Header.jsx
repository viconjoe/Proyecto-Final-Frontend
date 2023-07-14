import React from 'react'
import '../Header/Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
        <div className='header'>

          <div id='title'>
            <Link to='/'><h1>PictoPlanKids</h1></Link>
          </div>

          <div className='top-menu'>
            <Link to='/pictoplan'><p>PictoPlan</p></Link>
            <Link to='/addimages'><p>Add Images</p></Link>
            <Link to='/relax'><p>Relax</p></Link>
          </div>
        
        </div>
    </>
  )
}

export default Header
