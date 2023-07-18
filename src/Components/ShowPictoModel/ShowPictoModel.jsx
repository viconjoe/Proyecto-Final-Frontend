import React from 'react'
import './ShowPictoModel.css'
import { PropTypes } from '@mui/material'

function ShowPictoModel() {
  return (
    <div>
        <img className='big-picto' src={`../../../public/Images/${id}.png`} />
    </div>
  )
}

export default ShowPictoModel