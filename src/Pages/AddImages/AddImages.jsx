import React, { useEffect, useState } from 'react'
import './AddImages.css'
import PictogramModel from '../../Components/PictogramModel/PictogramModel'
import { getPictograms } from '../../Services/pictos'
import { updateSecuencia } from '../../Services/secuencias'

function AddImages() {

  const [pictograms, setPictograms] = useState([])
  const [secuence, setSecuence] = useState([])

  useEffect(() => {
    getPictogramList()

  }, [secuence])

  async function getPictogramList() {
    const data = await getPictograms()
    setPictograms(data)
  
  }

  function handlePictoClick(num) {
    setSecuence((oldArray) => [...oldArray, num])
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
  function handleClick(index){
      const data = [].concat(secuence)      
      const imgdelete = data.splice(index,1)
      setSecuence(data)
  }
  function displaySecuences() {
    return secuence.map((pictogram, index)=> {
      return (<img onClick={(e)=>handleClick(index)}className='new-picto-secuence' key={index} src={`../../../public/Images/${pictogram}.png`} ></img>)

    })
    
  }

  function handleClean(){
    setSecuence([])
  }

  async function handleSave(){
    
    await updateSecuencia(1, secuence)
    console.log('Secuencia guardada')
  }

  return <>
    <div className='crear-enviar-secuence'>
      <div className='new-secuence'>{displaySecuences()}</div>
      
      <div className='guardar-borrar'>
        <br></br>
        <div><a onClick={handleSave} href="#" className='guardar'>Guardar</a></div>
        <br></br>
        <br></br>
        <div><a onClick={handleClean} href="#" className='guardar'>Borrar</a></div>
        <br></br>
      </div>
    
    </div>
      <div><p className='cartel-de-borrar'>Para borrar una imagen seleccionada haz click encima de ella</p></div>
    
    <div className='addImages-box'>{displayPictograms()}</div>
  </> 
}


export default AddImages