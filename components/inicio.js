import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {css} from '@emotion/react';



const inicio=()=> {
    return (
        <>
        <Head>
        <link href='/static/css/estilos.css' rel="stylesheet"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossOrigin="anonymous"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
        </Head>

        
        

        <div className='titulo float-center'>
        <h1>Vota Bien</h1>
        </div>
         
        
        <div className='container-fluid'>
        <div className='row espacio'>
        <div className='col-sm-3  ' >

        <figure className="figure">
            <Link href='/juan' >
            
           
            <img src='/static/images/juan-loera.jpg' className='foto float-left'></img>
            </Link>
             <figcaption className="figure-caption text-center ">Juan Loera</figcaption>
             </figure>
             </div>
             <div className='col-sm-3'>
             <figure className="figure">
             <Link href='/maru'>
             <img src='/static/images/maru-campos.jpg' className='foto float-center'></img>  
             </Link>
             <figcaption className="figure-captio  text-center ">Maru Campos</figcaption>
             </figure>
             
             </div>
             <div className='col-sm-3 '>
             <figure className="figure">
             <Link href='/graciela'>
             <img src='/static/images/graciela.jpg' className='foto float-right'></img>  
             </Link>
             <figcaption className="figure-caption text-center ">Graciela Ortiz</figcaption>
             </figure>
              
             </div>
        </div>
        </div>
        
       
        </>
    )
}

export default inicio;

