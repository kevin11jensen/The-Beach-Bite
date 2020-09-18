import React from 'react';
import styled from 'styled-components';



export default function Footer() {


    return (
        <Foot>
            <p>&copy; The Beach Bite at Rockaway 2020</p>
        </Foot>
    )
}

const Foot = styled.footer `
    text-align: center;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--cinder);
    color: var(--silverSand);
`