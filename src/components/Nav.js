import React from 'react';
import { Link }  from 'gatsby';
import styled from '@emotion/styled'

const Navi = styled.nav`
display: flex;
justify-content: center;
padding-bottom: 3rem;
@media (min-width: 768px ){
    padding-bottom: 0;
}`

const NavLink = styled(Link)`
    color: #4f4f4f;
    text-decoration: none;
    
    line-height: 1rem;
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    padding: 1rem;
    margin-right: 1rem;

    &:last-of-type {
        margin-right:0;
    }
    &.actualPage {
        border-bottom: 2px solid black
    }


`
const Nav = () => {
    return (
        <Navi>
            <NavLink to= {'/'} activeClassName="actualPage">Inicio</NavLink>
            <NavLink to= {'/about'}activeClassName="actualPage">Nosotros</NavLink>
        </Navi>
      );
}
 
export default Nav;