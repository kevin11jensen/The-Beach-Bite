import React from 'react';

import styled from 'styled-components';

export default function BeachBiteMenu() {
    
    return (
        <BeachMenuContainer>

        <h1>The Beach Bite Menu</h1>

        <div className = 'beach-menu-container'>

            <div className = 'soup-salad'>
                <h3>SOUPS & SALADS</h3>
                <div className = 'minestrone'>
                    <h4>Old Country Minestrone Soup Cup</h4>
                    <p>Fresh Italian Herbs and Vegetables combined to create a delight to the soul. Served with Garlic Bread and topped with Parmesan Cheese.</p>
                    <p>Cup $4.95</p>
                    <p>Bowl $7.45</p>
                </div>
                <div className = 'chowder'>
                    <h4>Clam Bite Chowder</h4>
                    <p>Our Special Recipe for a North Coast favorite, served with Garlic Bread.</p>
                    <p>Cup $5.25</p>
                    <p>Bowl $8.25</p>
                </div>
                <div className = 'caesar'>
                    <h4>Caesar</h4>
                    <p>Crisp Romaine Lettuce, Olives, Grape Tomatoes, Shredded Parmesan Cheese and Seasoned Croutons.</p>
                    <p>$9.75</p>
                    <p>Add Chicken - $3.00</p>
                </div>
            </div>
            <div className = 'fish-chips'>
                <h3>FISH & CHIPS</h3>
                <div className = 'cod'>
                    <h4>Beer Batter Cod</h4>
                    <p>2 pieces $15.95 / 3 pieces $18.95</p>
                </div>
                <div className = 'halibut'>
                    <h4>Halibut Fish & Chips</h4>
                    <p>Delicious Halibut fish, lightly battered and fried to perfection. Served with Tartar Sauce, Coleslaw and Homemade Fries.</p>
                    <p>2 pieces $18.95 / 3 pieces $23.95</p>
                    <p>Add a cup of Clam Chowder or House Salad for $3.00 more.</p>
                </div>
            </div>

            <div className = 'little-bites'>
                <h3>LITTLE BITES (Children & Senior Menu)</h3>
                <div className = 'little-burger'>
                    <h4>*Little Bite Burger</h4>
                    <p>1/4-Pound Ground Chuck with Melted Cheddar Cheese, Mayo, Lettuce, Tomatoes and Red Onions. Served with Homemade Fries.</p>
                    <p>$10.95</p>
                </div>
                <div className = 'corn-dog'>
                    <h4>Corn Dog</h4>
                    <p>Deep fried to a golden brown. Served with Homemade Fries.</p>
                    <p>$5.95</p>
                </div>
                <div className = 'little-fish'>
                    <h4>1 Piece Fish & Chips</h4>
                    <p>Lightly battered and fried to perfection. Served with Tartar Sauce, Coleslaw and Homemade Fries.</p>
                    <p>Halibut $12.95</p>
                </div>
            </div>
            <div className = 'burgers'>
                <h3>FRESH GOURMET BURGERS</h3>
                <p>Served with homemade fries Veggie Burger may be substituted at no additional cost.</p>
                <div className = 'bite-burger'>
                    <h4>*Bite Me Burger</h4>
                    <p>1/3-Pound Ground Chuck Burger - Piled high with Lettuce, Tomatoes, Red Onions and Mayo.</p>
                    <p>$11.95</p>
                    <p>Add cheese - $1.50</p>
                </div>
                <div className = 'beach-burger'>
                    <h4>*Beach Burger</h4>
                    <p>1/3-Pound Ground Chuck Burger - Tillamook Cheddar Cheese, Bacon, Mayo, Lettuce, Tomatoes, Sautéed Onions and Guacamole.</p>
                    <p>$13.95</p>
                </div>
                <div className = 'west-burger'>
                    <h4>*West Coast Burger</h4>
                    <p>1/3-Pound Ground Chuck Burger - Grilled Jalapeño Peppers, Fresh Guacamole, Mayo, Lettuce, Tomatoes, Sautéed Onions and topped with Pepper-Jack Cheese.</p>
                    <p>$13.95</p>
                </div>
            </div>
            <div className = 'pizza'>
                <h3>GOURMET PIZZA</h3>
                <p>All Pies have Mozzarella, Parmesan, Asiago, Romano, Fresh Garlic and Fresh Basil.</p>
                <div className = 'four-cheese'>
                    <h4>Four Cheese</h4>
                    <p>Classic Cheese Pizza.</p>
                    <p>Medium $13.95</p>
                    <p>Large $17.95</p>
                </div>
                <div className = 'canadian-bacon'>
                    <h4>Canadian Bacon & Pineapple</h4>
                    <p>Medium $16.95</p>
                    <p>Large $23.95</p>
                </div>
                <div className = 'pepperoni'>
                    <h4>Pepperoni</h4>
                    <p>Classic Pepperoni Pizza</p>
                    <p>Medium $15.95</p>
                    <p>Large $23.95</p>
                </div>
                <div className = 'meat-lovers'>
                    <h4>Meat Lovers</h4>
                    <p>Pepperoni, Bacon, Salami, Italian Sausage and Canadian Bacon.</p>
                    <p>Medium $18.95</p>
                    <p>Large $27.95</p>
                </div>
                <div className = 'veggie'>
                    <h4>All Veggie</h4>
                    <p>Artichoke Hearts, Mushrooms, Green and Red Peppers, Sun Dried Tomatoes, Onions Fresh Spinach and Black Olives.</p>
                    <p>Medium $18.95</p>
                    <p>Large $28.95</p>
                </div>
                <div className = 'toppings'>
                    <h4>Toppings</h4>
                    <p>Pepperoni, Italian Sausage, Salami, Bacon, Bay Shrimp</p>
                    <p>Each additional topping 12"-$3.50/16"-$4.25</p>
                </div>
                <div className = 'additional-toppings'>
                    <h4>Each additional topping</h4>
                    <p>Artichokes, Pineapple, Onions, Tomatoes, Bell Peppers, Mushrooms, Spinach, Capers, Sun Dried Tomatoes, Jalapeños, Olives</p>
                    <p>12"-$2.50/16"-$3.00</p>
                </div>
            </div>
            <div className = 'beach-specialties'>
                <h3>BEACH BITE SPECIALTIES</h3>
                <p>Served with Fresh Baked Garlic Bread and Minestrone Soup.</p>
                <div className = 'lasagna'>
                    <h4>Lasagna Classico</h4>
                    <p>Layers of Pasta, Meat Sauce and Mozzarella , Ricotta, and Parmesan Cheese Fettuccine Alfredo.</p>
                    <p>$15.95</p>
                </div>
                <div className = 'alfredo'>
                    <h4>Fettuccine Alfredo</h4>
                    <p>Parmesan cream Sauce with hint of Garlic, tossed with Fettuccine. Topped with Parmesan Cheese.</p>
                    <p>$15.95</p>
                    <p>Add Bay Shrimp or Chicken for $3.00 more.</p>
                </div>
                <div className = 'seafood-pasta'>
                    <h4>Seafood Pasta</h4>
                    <p>Bay Shrimp, Sea Scallops and Clams sautéed with Fresh Garlic, Capers and Mushrooms in a Parmesan Cream Sauce tossed with Fettuccine.</p>
                    <p>$26.95</p>
                </div>
                <div className = 'seafood-ravioli'>
                    <h4>Seafood Ravioli</h4>
                    <p>Tender whole egg pasta with delicate seasoned blend of Ricotta, Lobster and Langostino. Served with Creamy Garlic sauce and touch of Marinara and Parmesan Cheese.</p>
                    <p>$23.95</p>
                </div>
            </div>
            <div className = 'beverages'>
                <h3>BEVERAGES</h3>
                <p>Pepsi - Diet Pepsi - Root Beer - Lemonade Dr. Pepper - Sierra Mist - Raspberry Lemonade Italian Sodas - Coffee - Iced Tea - Milk - Juices</p>
            </div>
        </div>
        
        </BeachMenuContainer>
    );
}

const BeachMenuContainer = styled.div `
    font-family: 'Abril Fatface', cursive;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-size: 3rem;
    padding: 3%;
    color: var(--cinder);
    .beach-menu-container {
        margin-top: 6%;
        .soup-salad {
            h3 {
                font-size: 2rem;
            }
            h4 {
                font-size: 1.6rem;
                font-family: 'Roboto', sans-serif;
            }
        }
    }
`
// font-family: 'Abril Fatface', cursive;

// font-family: 'Calistoga', cursive;

// font-family: 'Luckiest Guy', cursive;

// font-family: 'Roboto', sans-serif;

// font-family: 'Sigmar One', cursive;
// font-family: 'Roboto', sans-serif;