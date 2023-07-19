import React, { useState, useEffect} from 'react'
import './Pictoplan.css'
import {getSecuencia} from '../../Services/secuencias'
import ShowPictoModel from '../../Components/ShowPictoModel/ShowPictoModel'

function Pictoplan() {

  const [secuencia, setSecuencia] = useState([]) 
  const [count, setCount] = useState(-1)

  useEffect(() => {
    const getData = async() => {
      const result = await getSecuencia(1)
      setSecuencia(result)
      console.log(result)

    }
    getData()
  }, [])

function displaySecuences() {
    return secuencia.map((pictogram, index)=> {
      return (<img className='picto-show-in-secuence' key={index} src={`../../../public/Images/${pictogram.id}.png`} ></img>)

    })
    
  }

  function handleShowpictosSecuence1(){
    setCount(0)
  }

  function handleShowpictosSecuence2(){
    if(count<secuencia.length - 1){
      setCount(count+1)
    } else {
      setCount(-1)
    }
    
  }

  function showPictosSecuence(){
    
    if(count === -1){
      return (<button className='btn-play' onClick={handleShowpictosSecuence1}><h1>Play</h1></button>)
    }else{
      return (<ShowPictoModel pictoId={secuencia[count].id} handleShowBigPicto={handleShowpictosSecuence2}/>)
    }
  }

  return (
    <>
      <div className='pictoplan-box'>

        <div className='mySecuences'>
          {displaySecuences()}
        </div>

        <div className='play-pictos'>
            {showPictosSecuence()}
        </div>
      </div>
    </>
  )
}

export default Pictoplan