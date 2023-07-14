import React from 'react'
import './Relax.css'
import { Link } from 'react-router-dom'

function Relax() {
  return (
    <>
      <div className='relax-box'>
        <div className='menu-videos'>
          <Link to='https://www.youtube.com/watch?v=jEVlorvgHaE'><p className='videos-relax'>Los Tres Cerditos</p></Link>
          <Link to='https://www.youtube.com/watch?v=_-xMA0Ne6FI'><p className='videos-relax'>El Lobo y los Tres Cerditos</p></Link>
          <Link to='https://youtube.com/shorts/hKYhCfuzzpk?feature=share4'><p className='videos-relax'>Ginger toma sopa</p></Link>
          <Link to='https://www.youtube.com/watch?v=jEVlorvgHaE'><p className='videos-relax'>Los tres cerditos</p></Link>
        </div>

        <div className='cinema'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/jEVlorvgHaE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </>
  )
}

export default Relax