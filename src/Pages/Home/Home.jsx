import React from 'react'
import './Home.css'
import { useState } from 'react'


function Picto() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
    
        <div className='children-box'>


          <div className='presentation'>

            <div className='board'>
              <img className='picto' src='../../../public/Images/1.png'/>
              <img className='picto' src='../../../public/Images/2.png'/>
              <img className='picto' src='../../../public/Images/3.png'/>
              <img className='picto' src='../../../public/Images/4.png'/>
            </div>

            <div className='information'>
              <p>PictoPlanKids es una aplicación que permite crear secuencias personalizadas de actividades cotidianas para niños y niñas con autismo, como cepillarse los dientes, bañarse, vestirse y comer. De esta forma, se les facilita una mejor comprensión visual y estructurada de las rutinas, reduciendo la ansiedad y mejorando su capacidad para seguir instrucciones.</p>
            </div>
          
          </div>

          <div className='signin'>
              <form>
                <label><h1 className="title">Sign in</h1></label>

                <label>
                  <br></br><p className='text-login' >Email:</p><br></br>
                  <input className='text' type="text" value={email} onChange={(e) => {setEmail(e.target.value)}}></input><br></br>
                </label>
            
                <label>
                  <br></br><p className='text-login' >Password</p><br></br>
                  <input className='text' type="text" value={password} onChange={(e) => {setPassword(e.target.value)}}></input><br></br>
                </label>
            
                <div className='login-btn'>
                  <a href="#" className='myButtonLogin'>Abrir Sesión</a>
                </div>
              </form>
          </div>
          

        </div>

    </>
  )
}

export default Picto