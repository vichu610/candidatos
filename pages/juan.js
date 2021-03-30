import React from 'react'
import Navegacion from '../components/Navegacion';
import Head from 'next/head';
import Link from 'next/link';


const Diputados=()=> {
    return (
        <>
        <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
        <link href='/static/css/estilos.css' rel="stylesheet"/>


        </Head>
        <Navegacion/>
        
       < className='container-fluid contenedor2'>
       <div className='row '>
       <div className='col-sm-4 lista '>
       
       <ul>
       <Link href='https://es-la.facebook.com/juancarlos.loera'>
       <li className="fab fa-facebook-square  fa-3x" ></li>
       </Link>

       <Link href='https://twitter.com/jloerajuan?lang=es'>
       <li className="fab fa-twitter-square fa-3x"></li>
       </Link>
       
       <Link href='https://www.instagram.com/juancarlosloera/?hl=es-la'>
       <li className="fab fa-instagram-square fa-3x"></li>
       </Link>
       </ul>

       </div>
       <div className='col-sm-4 '>
       <img src='/static/images/imagen-juan.jpg' className='rounded-3 img-fluid imagen'></img>
       <p>Juan Carlos Loera</p>
      
       </div>
       <div className='col-sm-4 '>
       <img src='/static/images/morena.png' className=' rounded-3  logo'></img>
       </div>
       </div>
       
       

   
       
       <div className='container contenedor'>
           <h1> Juan Carlos Loera, candidato de Morena a gubernatura de Chihuahua, se refirió a sus propuestas de campaña, destacó que tiene como objetivo apoyar a los más pobres del estado y terminar con la corrupción que otros partidos han manejado.
</h1>
       
       </div>
        </>
    )
}

export default Diputados
