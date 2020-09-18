import React from 'react';
import styled from 'styled-components';
import { device } from './device';


export default function Contact() {


    return (
        <ContactContainer>
            <p>*DISCLAIMER: SHELLFISH, EGGS OR POULTRY MAY INCREASE YOUR RISK OF FOOD BORN ILLNESS.</p>
            <div className = 'map'>
                <a href = 'https://www.google.com/maps/place/The+Beach+Bite+%26+Dos+Rocas/@45.6118099,-123.9460081,17z/data=!3m1!4b1!4m5!3m4!1s0x5494cca5a2645bd9:0x3968409d100c073f!8m2!3d45.6118099!4d-123.9438194'>
                    <i className = "fas fa-location-arrow" />
                    176 US-101, Rockaway Beach, OR 97136
                </a>
            </div>
            <div className = 'contact'>
                <div className = 'phone-1'>
                    <i className = "fas fa-phone" />
                    <p>The Beach Bite: (503) 355-2073</p>
                </div>
                <div className = 'phone-2'>
                    <i className = "fas fa-phone" />
                    <p>Dos Rocas: (503) 355-2075</p>
                </div>
            </div>

                
        </ContactContainer>
    )
}

const ContactContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 33vh;
    background: var(--tiara);
    p {
        text-align: center;
        @media ${device.tablet} {
            font-size: .8rem;
            width: 66%;
        }
    }
    .map {
        a {
            text-decoration: none;
            color: var(--cinder);
            margin-bottom: 3%;
            font-family: 'Roboto', sans-serif;
            font-size: 1.6rem;
            &:hover {
                color: var(--veniceBlue);
            }
            i {
                margin-right: 1rem;
            }
        }
    }
    .contact {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 50%;
        @media ${device.tablet} {
            width: 99%;
            
        }
        .phone-1 {
            display: flex;
            width: 33%;
            align-items: center;
            justify-content: space-around;
            @media ${device.tablet} {
                width: 69%;
                justify-content: center;
            }
            p {
                @media ${device.tablet} {
                    margin-left: 3%;
                    font-size: 1rem;
                    
                }
            }
            i {
                margin-right: 3%;
                @media ${device.tablet} {
                    margin-right: 0;
                }
            }
        }
        .phone-2 {
            display: flex;
            width: 33%;
            align-items: center;
            justify-content: center;
            @media ${device.tablet} {
                width: 66%;
                
            }
            p {
                @media ${device.tablet} {
                    margin-left: 3%;
                    font-size: 1rem;
                }
            }
            i {
                margin-right: 3%;
                @media ${device.tablet} {
                    margin-right: 0;
                }
            }
        }
        
    }
`