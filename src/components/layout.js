import React from 'react';
import Header from './Header'
import Helmet from 'react-helmet'
import { Global, css } from '@emotion/core'

const Layout = (props) => {
    return (
        <>
            <Global 
                styles={css`
                    html {
                        font-size: 62.5%;

                    }
                    body {
                        font-size: 16%
                        font-size: 1.6rem;
                        line-height: 1.5
                    }
                    h1, h2, h3 {
                        margin: 0;
                        line-height: 1.5;
                    }
                    h1{
                        font-family: 'Roboto', sans-serif;
                    }
                    p{
                        font-family: 'Roboto', sans-serif;
                    }
                    ul{
                        list-style: none;
                        margin:0;
                        padding: 0;
                    }
                `

                }
            />
            <Helmet>
                <title>Olinto Muñoz Portafolio</title>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />

                
<link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@100;700&display=swap" rel="stylesheet" />
                </Helmet>
            <Header />
            
            {props.children}
            </>
         
        
        );
}
 
export default Layout;