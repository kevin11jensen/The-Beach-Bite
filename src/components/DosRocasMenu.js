import React from 'react';
import { device } from './device';
import styled from 'styled-components';



export default function DosRocasMenu() {
    return (
        <RocasMenuContainer>

            <h1>Dos Rocas Menu</h1>

            <div className = 'dos-rocas-container'>

                <div className = 'rocas-top-wrapper'>
                    <div className = 'burritos'>
                        <h3>Burritos</h3>
                        <p>Large flour tortillas stuffed with your choice or filling, rice, beans and cheese. Topped with ranchero sauce, shredded lettuce, green onions, pico de gallo, guacamole and sour cream.</p>
                        <div className = 'burritos-inner'>
                            <h4>Chicken, Ground Beef or Pork</h4>
                            <p>$14.95</p>
                            <h4>Carne Asada Burrito</h4>
                            <p>$15.95</p>
                        </div>
                    </div>
                    <div className = 'tacos'>
                        <h3>Tacos</h3>
                        <p>Two fresh corn tortillas with your choice or filling topped with shredded lettuce, diced tomatoes, green onions, shredded cheddar cheese. Served with Spanish rice and choice of black beans or refried beans.</p>
                        <div className = 'halibut-tacos'>
                            <h4>Halibut Fish Tacos</h4>
                            <p>Topped with a special cilantro sauce and pico de gallo.</p>
                            <p>$14.95</p>
                        </div>
                        <div className = 'beef-tacos'>
                            <h4>Ground Beef Tacos</h4>
                            <p>$11.95</p>
                        </div>
                        <div className = 'steak-tacos'>
                            <h4>Carne Asada Tacos</h4>
                            <p>$12.95</p>
                        </div>
                    </div>
                </div>
                <div className = 'rocas-bottom-wrapper'>
                    <div className = 'little-amigos'>
                        <h3>DOS ROCAS LITTLE AMIGOS</h3>
                        
                        <div className = 'small-burrito'>
                            <h4>Small Burrito</h4>
                            <p>Flour tortilla filled with beans & cheese. Served with Spanish rice.</p>
                            <p>$6.95</p>
                        </div>
                        <div className = 'one-quesadilla'>
                            <h4>One Quesadilla</h4>
                            <p>Flour tortilla filled with beans & cheese. Served with Spanish rice.</p>
                            <p>$5.95</p>
                            <p>With chicken or ground beef - $7.95</p>
                        </div>
                    </div>
                    <div className = 'rocas-specialties'>
                        <h3>DOS ROCAS SPECIALTIES</h3>
                        <p>Served with Spanish rice, refried or black beans.</p>
                        <div className = 'enchilada'>
                            <h4>Enchilada Plate</h4>
                            <p>(Choice of ground beef or chicken) Two meat and cheese enchilada, covered with red sauce and melted cheese.</p>
                            <p>$15.75</p>    
                        </div>
                        <div className = 'chile'>
                            <h4>Chile Rellenos</h4>
                            <p>Two large chili peppers stuffed with cheese and deep fried to a golden brown.</p>
                            <p>$15.95</p>    
                        </div>
                        <div className = 'tamales'>
                            <h4>Two Chicken Tamales</h4>
                            <p>Two fresh masa tamales with seasoned chicken, wrapped in corn husk and steamed. Topped with verde sauce and sour cream.</p>
                            <p>$15.45</p>    
                        </div>
                        <div className = 'camarones'>
                            <h4>Camarones A La Diabla</h4>
                            <p>A coastal favorite. Jumbo shrimp sautéed in a spicy Mexican butter. Served with fresh corn tortillas.</p>
                            <p>$18.95</p>    
                        </div>
                    </div>
                </div>
                <div className = 'beverages'>
                    <h3>BEVERAGES</h3>
                    <p>Pepsi - Diet Pepsi - Root Beer - Lemonade Dr. Pepper - Sierra Mist - Raspberry Lemonade Italian Sodas - Coffee - Iced Tea - Milk - Juices</p>
                </div>
            </div>
        
        </RocasMenuContainer>
    );
}

const RocasMenuContainer = styled.div `
    background: var(--twine);
    h1 {
        font-family: 'Calistoga', cursive;
        color: var(--shuttleGray);
        text-align: center;
        @media ${device.tablet} {
            font-size: 3.2rem;
        }
    }
    
    h3 {
        font-family: 'Sigmar One', cursive;
        color: var(--brightSun);
        @media ${device.tablet} {
            display: flex;
            justify-content: center;
            font-size: 2.4rem;
        }
    }
    h4 {
        font-family: 'Calistoga', cursive;
        color: var(--shuttleGray);
        margin-bottom: 0;
        font-weight: 200;
        @media ${device.tablet} {
            display: flex;
            justify-content: flex-start;
            font-size: 1.8rem;
            margin: 6% 1% 3% 1%;
        }
    }
    p {
        font-family: 'Roboto', sans-serif;
        color: var(--cinder);
        margin-top: 1%;
        @media ${device.tablet} {
            display: flex;
            justify-content: center;
            margin: 1% 2%;
        }
    }
    .rocas-top-wrapper {
        display: flex;
        justify-content: space-around;
        @media ${device.tablet} {
            flex-direction: column;
            align-items: center;
        }
        .burritos {
            width: 33%;
            @media ${device.tablet} {
                width: 99%;
            }
            div {
                @media ${device.tablet} {
                    margin-bottom: 3%;
                }
                p {
                    
                }
                
            }
        }
        .tacos {
            width: 33%;
            @media ${device.tablet} {
                width: 99%;
            }
            div {
                @media ${device.tablet} {
                    margin-bottom: 3%;
                }
                p {
                    
                }
            }
        }
    }
    .rocas-bottom-wrapper {
        display: flex;
        justify-content: space-around;
        @media ${device.tablet} {
            flex-direction: column;
            align-items: center;
        }
        .little-amigos {
            width: 33%;
            @media ${device.tablet} {
                width: 99%;
            }
            div {
                @media ${device.tablet} {
                    margin-bottom: 3%;
                }
                p {
                    
                }
                
            }
        }
        .rocas-specialties {
            width: 33%;
            @media ${device.tablet} {
                width: 99%;
                
            }
            div {
                @media ${device.tablet} {
                    margin-bottom: 3%;
                }
                p {
                    
                }
            }
        }
    }
    .beverages {
        display: flex;
        flex-direction: column;
        align-items: center;
        @media ${device.tablet} {
            width: 99%;
        }
        h3 {
            margin-bottom: 0;
        }
    }
`

// font-family: 'Abril Fatface', cursive;

// font-family: 'Calistoga', cursive;

// font-family: 'Luckiest Guy', cursive;

// font-family: 'Roboto', sans-serif;

// font-family: 'Sigmar One', cursive;
// font-family: 'Roboto', sans-serif;
// --shuttleGray: #525e64;
//     --brightSun: #f8d343;
//     --twine: #c3a159;
//     --silverSand: #b2babd;
// 
//     display: flex;
//     justify-content: center;
//     font-size: 3rem;
//     padding: 3%;
//     color: var(--shuttleGray);