import React from 'react';
import styled from 'styled-components';



export default function Contact() {


    return (
        <ContactContainer>
            <p>DISCLAIMER: SHELLFISH, EGGS OR POULTRY MAY INCREASE YOUR RISK OF FOOD BORN ILLNESS.</p>
            <div className = 'map'>
                <a href = 'https://www.google.com/maps/place/The+Beach+Bite+%26+Dos+Rocas/@45.6118099,-123.9460081,17z/data=!3m1!4b1!4m5!3m4!1s0x5494cca5a2645bd9:0x3968409d100c073f!8m2!3d45.6118099!4d-123.9438194'>
                    <i class="fas fa-location-arrow" />
                    176 US-101, Rockaway Beach, OR 97136
                </a>
            </div>
            <div className = 'contact'>
                <i class="fas fa-phone" />
                <p>The Beach Bite: (503) 355-2073</p>
                <i class="fas fa-phone" />
                <p>Dos Rocas: (503) 355-2075</p>
            </div>

                
        </ContactContainer>
    )
}

const ContactContainer = styled.div `

    height: 33vh;
    background: var(--tiara);

`