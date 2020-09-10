import React from 'react';
import { beachBite } from './data';
import styled from 'styled-components';

export default function BeachBiteMenu(props) {
    console.log(props.beachBite)
    return (
        <BeachMenuContainer>
        <h1>The Beach Bite Menu</h1>
        <h3></h3>
        </BeachMenuContainer>
    );
}

const BeachMenuContainer = styled.div `
    font-family: 'Abril Fatface', cursive;
    display: flex;
    justify-content: center;
    font-size: 3rem;
    padding: 3%;
    color: var(--cinder);
`
// font-family: 'Abril Fatface', cursive;

// font-family: 'Calistoga', cursive;

// font-family: 'Luckiest Guy', cursive;

// font-family: 'Roboto', sans-serif;

// font-family: 'Sigmar One', cursive;
// font-family: 'Roboto', sans-serif;