import React, { useState, useEffect} from 'react'
import './Pictoplan.css'
import {getSecuencia} from '../../Services/secuencias'

function Pictoplan() {

  const [secuencia, setSecuencia] = useState('') 

  useEffect(() => {
    const getData = async() => {
      const result = await getSecuencia(1)
      setSecuencia(result)
      console.log(result)

    }
    getData()
  }, [])

  return (
    <>
      <div className='pictoplan-box'>

        <div className='mySecuences'>

        </div>

        <div className='play-pictos'>
            <button className='btn-play'><h1>Play</h1></button>
        </div>
      </div>
    </>
  )
}

export default Pictoplan