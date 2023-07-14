import React, { useEffect, useState } from 'react'
import './AddImages.css'
import PictogramModel from '../../Components/PictogramModel/PictogramModel'
import { getPictograms } from '../../Services/pictos'

function AddImages() {

  const [pictograms, setPictograms] = useState([])
  const [secuence, setSecuence] = useState([])

  useEffect(() => {
    getPictogramList()
  }, [])

  async function getPictogramList() {
    const data = await getPictograms()
    setPictograms(data)
    console.log(data)
  }

  function handlePictoClick(num) {
    setSecuence((oldArray) => [...oldArray, num]) 
    console.log(secuence)
  } 

  function displayPictograms() {
    const pictogramList = pictograms.map((pictogram) => {
      return <PictogramModel 
                id={pictogram.id} 
                key={pictogram.id}
                functionHandle={handlePictoClick}
                    
      />
    })
    return pictogramList
  }

  function displaySecuences() {
    const newSecuence = secuence.map((pictogram, index)=> {
      return (<span key={index} >{pictogram}-</span>)

    })
    return newSecuence
  }

  return <>
    <div className='new-secuence'>{displaySecuences()}</div>
    <div className='addImages-box'>{displayPictograms()}</div>
  </> 
}


export default AddImages