import React from 'react'
import './PictogramModel.css'
import PropTypes from 'prop-types';

function PictogramModel({id, functionHandle}) {
  function handleClick() {
    functionHandle(id)
  }
    return (
    <>
        <div onClick={handleClick}>
            <img className='picto' src={`../../../public/Images/${id}.png`}/>
        </div>
    </>
  )
}

export default PictogramModel

PictogramModel.propTypes = {
    id: PropTypes.number,
    functionHandle: PropTypes.func,
}