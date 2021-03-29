

import React from 'react'
import Head from 'next/head';
import Link from 'next/link';
import styled from '@emotion/styled';


const Nav=styled.nav`
background-color:pink;
color:black;
font-size:25px;
cursor: pointer;

`

 const Navegacion=props=> {
    return (
        <>
        
        <Head>
        
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous"></link>

        </Head>

       <Nav>
        

        <Link href='/'><i className="fas fa-home"></i></Link>
     
           </Nav>
          
        <main>
            {props.children}
        </main>
        </>
    )
}

export default Navegacion;