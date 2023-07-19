import React from 'react'
import './Home.css'
import { useState } from 'react'


function Picto() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submit, setSubmit] = useState(false)

  function handleToggleSubmit() {
      setSubmit(!submit);
  }

  function ShowloginOrCreateAccount(){
    if(!submit) {
      return (
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

                <div className='registro-btn'>
                  <a href="#"  onClick={handleToggleSubmit}>Crear Usuario</a>
                </div>
              </form>
          </div>
      )
    }else{
      return (
        <div className='create-account'>
            
            <form>
                <label><h1 className="title">Create Account</h1></label>

                <label>
                  <br></br><p className='text-login' >Enter your email:</p><br></br>
                  <input className='text-create' type="text-create" value={email} onChange={(e) => {setEmail(e.target.value)}}></input><br></br>
                </label>

                <label>
                  <br></br><p className='text-login' >Repeat your email:</p><br></br>
                  <input className='text-create' type="text-create" value={email} onChange={(e) => {setEmail(e.target.value)}}></input><br></br>
                </label>
            
                <label>
                  <br></br><p className='text-login' >Enter your password</p><br></br>
                  <input className='text-create' type="text-create" value={password} onChange={(e) => {setPassword(e.target.value)}}></input><br></br>
                </label>

                <label>
                  <br></br><p className='text-login-create' >Repeat your password</p><br></br>
                  <input className='text-create' type="text" value={password} onChange={(e) => {setPassword(e.target.value)}}></input><br></br>
                </label>
            
                <div className='create-account-btn'>
                  <a href="#" className='myButtonCreateAccount'>Crear Cuenta</a>
                </div>

                <div className='registro-btn'>
                  <a href="#"  onClick={handleToggleSubmit}>Abrir Sesión</a>
                </div>
              </form>

          </div> 
      )
    }
  }

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

          {ShowloginOrCreateAccount()}
     

        </div>

    </>
  )
}

export default Picto