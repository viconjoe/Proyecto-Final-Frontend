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

    </>
  )
}

export default Pictoplan