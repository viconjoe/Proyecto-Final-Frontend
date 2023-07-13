import React from 'react'
import './Home.css'


function Picto() {
  return (
    <>
      <div className='mother-box'>

        <div className='children-box'>


          <div className='presentation'>

            <div className='board'>
              <img className='picto' src='../../../public/Images/1.png'/>
              <img className='picto' src='../../../public/Images/2.png'/>
              <img className='picto' src='../../../public/Images/3.png'/>
              <img className='picto' src='../../../public/Images/4.png'/>
            </div>

            <div className='information'>
              <p>Nuestra aplicación es facil de usar. Con ella, los cuidadores y los padres pueden crear secuencias personalizadas que preparen a los niños para las actividades diarias, como cepillarse los dientes, bañarse, vestirse y comer. De esta forma, se proporciona a los chicos y chicas una comprensión visual y estructurada de las rutinas, reduciendo la ansiedad y mejorando su capacidad para seguir instrucciones.</p>
            </div>
          
          </div>

          <div>
            <div className='panel-login'>
                <a href="#" className='myButtonLogin'>Abrir Sesión</a>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Picto