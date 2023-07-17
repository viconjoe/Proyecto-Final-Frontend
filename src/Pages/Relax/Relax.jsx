import React, { useState } from 'react'
import './Relax.css'
import { Link } from 'react-router-dom'


// Código escrito para usar el menú de videos como un objeto.
// El segundo utiliza un array de objeto que se recorre con un map y permite adicionar
// más videos dentro del array sin modificar nada.

/*function Relax() {
  const [ruta, setRuta] = useState('')

  const rutas = {
    ruta1: "https://www.youtube.com/embed/jEVlorvgHaE",
    ruta2: "https://www.youtube.com/embed/aMVH_ML1L8U",
    ruta3: "https://www.youtube.com/embed/8g-ktbyvVak"
  }

  function handleClick(ruta){
      setRuta(ruta)
  }
  return (
    <>
      <div className='relax-box'>
        <div className='menu-videos'>
          <a href='#' onClick={(e)=>handleClick(rutas.ruta1)} className='videos-relax'>Los Tres Cerditos</a>
          <a href='#' onClick={(e)=>handleClick(rutas.ruta2)}className='videos-relax'>Tres Cerditos y Tres Lobitos</a>
          <a href='#' onClick={(e)=>handleClick(rutas.ruta3)} className='videos-relax'>Corriendo con Bluey</a>
        </div>

        <div className='cinema'>
          <iframe width="1280" height="720" src={ruta} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </>
  )
}

export default Relax*/ 

function Relax() {
  const [ruta, setRuta] = useState('');

  const rutas = [
    {
      nombre: "Los Tres Cerditos",
      url: "https://www.youtube.com/embed/jEVlorvgHaE",
    },
    {
      nombre: "Tres Cerditos y Tres Lobitos",
      url: "https://www.youtube.com/embed/aMVH_ML1L8U",
    },
    {
      nombre: "Corriendo con Bluey",
      url: "https://www.youtube.com/embed/8g-ktbyvVak",
    },
  ];

  function handleClick(url) {
    setRuta(url);
  }

  return (
    <>
      <div className='relax-box'>
        <div className='menu-videos'>
          {rutas.map((video, index) => (
            <a
              key={index}
              href='#'
              onClick={(e) => handleClick(video.url)}
              className='videos-relax'
            >
              {video.nombre}
            </a>
          ))}
        </div>

        <div className='cinema'>
          <iframe
            width='1280'
            height='720'
            src={ruta}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Relax;

