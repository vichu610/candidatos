import React from 'react'
import Navegacion from '../components/Navegacion';
import Head from 'next/head';


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
        
      <div className='container-fluid'>
       <div>
       <img src='/static/images/pri.png' className='logo rounded-3 '></img>
       <img src='/static/images/imagen-graciela.jpg' className='rounded-3 mx-auto d-block img-fluid'></img>
       <p>Graciela Ortiz</p>
       

   
       </div>
       <div className='contenedor'>
           <h1> Necesitamos poner orden, vamos por un Chihuahua que se ponga nuevamente de pie, que fortalezca su orgullo, que afronte con confianza su futuro y construya un mejor destino</h1>
       </div>
       </div>
        </>
    )
}

export default Diputados
