import React from 'react';
import beachLogo from '../img/beachBiteLogo.png';
import rocasLogo from '../img/dosRocas.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from './device';



export default function NavBar() {
    return (
        <Nav>
            
            <Link to = '/'>
                <img src = {beachLogo} alt = 'Beach Bite Logo' />
            </Link>
            <div className = 'location'>
                <a href = 'https://www.google.com/maps/place/The+Beach+Bite+%26+Dos+Rocas/@45.6118099,-123.9460081,17z/data=!3m1!4b1!4m5!3m4!1s0x5494cca5a2645bd9:0x3968409d100c073f!8m2!3d45.6118099!4d-123.9438194'>
                    <i class="fas fa-location-arrow" />
                    176 US-101, Rockaway Beach, OR 97136
                </a>
                <div className = 'phone'>
                    <i class="fas fa-phone" />
                    <p>The Beach Bite: (503) 355-2073</p>
                    <i class="fas fa-phone" />
                    <p>Dos Rocas: (503) 355-2075</p>
                    
                </div>
                
            </div>
            <Link to = '/dosrocas'>
                <img src = {rocasLogo} alt = 'Dos Rocas Logo' />
            </Link>
            
                
            
            
        </Nav>
    );
}

const Nav = styled.nav `
    background: transparent;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    a {
        text-align: center;
        img {
            width: 25rem;
            
        }
    }
    .location {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: space-around;
        width: 33%;
        font-size: 1.6rem;
        @media ${device.tablet} {
            display: none;
        }
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
        .phone {
            display: flex;
            justify-content: space-between;
            align-items: center;
            @media ${device.tablet} {
                display: none;
            }
            i {
                margin-right: .5rem;
            }
            p {
                margin-right: 1rem;
            }
        }
        
    }
    
`