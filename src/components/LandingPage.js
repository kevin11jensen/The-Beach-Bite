import React from 'react';
import beachLogo from '../img/beachBiteLogo.png';
import rocasLogo from '../img/dosRocas.png';
import styled from 'styled-components';

export default function LandingPage() {
    return (
        <MainContainer>
        <h1>Hello From Landing Page</h1>
        <img src = {rocasLogo} alt = 'Dos Rocas Logo' />
        <img src = {beachLogo} alt = 'Beach Bite Logo' />
        </MainContainer>
    );
}

const MainContainer = styled.div `
    background: dodgerblue;
    img {
        width: 25%;
        
    }
`