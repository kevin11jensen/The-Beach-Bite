import React from 'react';
import beachLogo from '../img/beachBiteLogo.png';
import rocasLogo from '../img/dosRocas.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';




export default function NavBar() {
    return (
        <Nav>

            <Link to = '/'>
                <img src = {beachLogo} alt = 'Beach Bite Logo' />
            </Link>

            <Link to = '/dosrocas'>
                <img src = {rocasLogo} alt = 'Dos Rocas Logo' />
            </Link>
            
        </Nav>
    );
}

const Nav = styled.nav `
    background: dodgerblue;
    img {
        width: 25%;
        
    }
`