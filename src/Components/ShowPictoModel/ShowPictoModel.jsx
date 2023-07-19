import React from 'react'
import './ShowPictoModel.css'


function ShowPictoModel({ handleShowBigPicto, pictoId }) {


  return (
    <div>
        <img className='big-picto-show' onClick= {handleShowBigPicto} src={`../../../public/Images/${pictoId}.png`} />
    </div>
  )
}

export default ShowPictoModel