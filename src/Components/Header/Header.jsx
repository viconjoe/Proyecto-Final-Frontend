import React from 'react'
import '../Header/Header.css'

function Header() {
  return (
    <>
        <div className='header'>

          <div id='title'>
            <h1>PictoPlanKids</h1>
          </div>

          <div className='top-menu'>
            <div><p>PictoPlan</p></div>
            <div><p>Add images</p></div>
            <div><p>Relax</p></div>
          </div>
        
        </div>
    </>
  )
}

export default Header