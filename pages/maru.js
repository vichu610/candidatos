import React from 'react'
import Navegacion from '../components/Navegacion';
import Head from 'next/head';


const Diputados=()=> {

    return (
        <>
        <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossOrigin="anonymous"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
        <link href='/static/css/estilos.css' rel="stylesheet"/>


        </Head>
        <Navegacion/>
        
      <div  className='container-fluid'>
      
      <img src='/static/images/imagen-maru.jpg' className='rounded-3  float-center '></img>
      <img src='/static/images/pan.png' className='logo rounded-3 img-fluid '></img>
       <p>Maru Campos</p>
       
       </div>
       
              
       <div className='contenedor'>
           <h1>Aspiramos a un Chihuahua en el que los servicios públicos lleguen a todos, de forma óptima y eficiente. Que a las administraciones les sea posible ofrecer vialidades funcionales, alumbrado público en todas las calles, y claro, transporte público ágil y eficiente. Aspiramos a vivir en un Chihuahua en el que comprar una vivienda esté al alcance de todos, un Chihuahua construido para las personas y no para los automóviles
</h1>
       
       </div>
       
        </>
    )
}

export default Diputados
