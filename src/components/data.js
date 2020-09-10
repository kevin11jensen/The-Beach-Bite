// The Beach Bite
// (503) 355-2073

const beachBite = [

    {
        section: 'SOUPS & SALADS',
        items: [
            {
                item: 'Old Country Minestrone Soup Cup',
                description: 'Fresh Italian Herbs and Vegetables combined to create a delight to the soul. Served with Garlic Bread and topped with Parmesan Cheese.',
                price: '$4.95',
                price2: 'Bowl $7.45'
            },
            {
                item: 'Clam Bite Chowder', 
                description: 'Our Special Recipe for a North Coast favorite, served with Garlic Bread.',
                price: 'Cup $5.25',
                price2: 'Bowl $8.25'
            },
        
            { 
                item: 'Caesar',
                description: 'Crisp Romaine Lettuce, Olives, Grape Tomatoes, Shredded Parmesan Cheese and Seasoned Croutons.', 
                price: '$9.75',
                price2: 'Add Chicken - $3.00'
            }
        ]    
    },

    {
        section: 'FISH & CHIPS',
        items: [
            {
                item: 'Beer Batter Cod',
                price: '2 pieces $15.95 / 3 pieces $18.95'
            },
            {
                item: 'Halibut Fish & Chips',
            price: '2 pieces $18.95 / 3 pieces $23.95', 
            description: 'Delicious Halibut fish, lightly battered and fried to perfection. Served with Tartar Sauce, Coleslaw and Homemade Fries.',
            price2: 'Add a cup of Clam Chowder or House Salad for $3.00 more.'
            }
        ]
    },

    {
        section: 'LITTLE BITES (Children & Senior Menu)', 
        items: [
            {
                item: '*Little Bite Burger', 
            price: '$10.95',
            description: '1/4-Pound Ground Chuck with Melted Cheddar Cheese, Mayo, Lettuce, Tomatoes and Red Onions. Served with Homemade Fries.'
            },
            {
                item: 'Corn Dog',
            price: '$5.95', 
            description: 'Deep fried to a golden brown. Served with Homemade Fries.'
            },
            {
                item: '1 Piece Fish & Chips', 
                description: 'Lightly battered and fried to perfection. Served with Tartar Sauce, Coleslaw and Homemade Fries.', 
                item2: 'Halibut $12.95'
            }
        ]    
    },

    {
        section: 'FRESH GOURMET BURGERS', 
        section2: 'Served with homemade fries Veggie Burger may be substituted at no additional cost.', 
        items: [
            {
                item: '*Bite Me Burger', 
                price: '$11.95',
                description: '1/3-Pound Ground Chuck Burger - Piled high with Lettuce, Tomatoes, Red Onions and Mayo.',
                item2: 'Add cheese - $1.50.'
            },
            {
                item: '*Beach Burger', 
            price: '$13.95',
            description: '1/3-Pound Ground Chuck Burger - Tillamook Cheddar Cheese, Bacon, Mayo, Lettuce, Tomatoes, Sautéed Onions and Guacamole.'
            },
            {
                item: '*West Coast Burger', 
                price: '$13.95',
                description: '1/3-Pound Ground Chuck Burger - Grilled Jalapeño Peppers, Fresh Guacamole, Mayo, Lettuce, Tomatoes, Sautéed Onions and topped with Pepper-Jack Cheese.'
            }
        ]    
    },

    {
        section: 'GOURMET PIZZA',
        section2: 'All Pies have Mozzarella, Parmesan, Asiago, Romano, Fresh Garlic and Fresh Basil.',
        items: [
            {
                item: 'Four Cheese',
                price: 'Medium $13.95',
                price2: 'Large $17.95', 
                description: 'Classic Cheese Pizza.'
            },
            {
                item: 'Canadian Bacon & Pineapple',
                price: 'Medium $16.95',
                price2: 'Large $23.95'
            },
            {
                item: 'Pepperoni',
                price: 'Medium $15.95',
                price2: 'Large $23.95', 
                description: 'Classic Pepperoni Pizza'
            },
            {
                item: 'Meat Lovers', 
                price: 'Medium $18.95',
                price2: 'Large $27.95',
                description: 'Pepperoni, Bacon, Salami, Italian Sausage and Canadian Bacon.'
            },
            {
                item: 'All Veggie',
                price: 'Medium $18.95',
                price2: 'Large $28.95',   
                description: 'Artichoke Hearts, Mushrooms, Green and Red Peppers, Sun Dried Tomatoes, Onions Fresh Spinach and Black Olives.'
            },
            {
                item: 'Toppings',
                price: 'Each additional topping 12"-$3.50/16"-$4.25',
                description: 'Pepperoni, Italian Sausage, Salami, Bacon, Bay Shrimp'
            },
            {
                item: 'Each additional topping',
                price: '12"-$2.50/16"-$3.00 Artichokes, Pineapple, Onions, Tomatoes, Bell Peppers, Mushrooms, Spinach, Capers, Sun Dried Tomatoes, Jalapeños, Olives'
            }
        ]
    }
]
    
// Dos Rocas
// (503) 355-2075

const dosRocas = [
    {
        section: 'BURRITOS', 
        section2: 'Large flour tortillas stuffed with your choice or filling, rice, beans and cheese. Topped with ranchero sauce, shredded lettuce, green onions, pico de gallo, guacamole and sour cream.',
        items: [
            {
                item: 'Chicken, Ground Beef or Pork',
                price: '$14.95', 
                item2: 'Carne Asada Burrito',
                price2: '$15.95'
            },
        ]
    },
    {
        section: 'TACOS', 
        section2: 'Two fresh corn tortillas with your choice or filling topped with shredded lettuce, diced tomatoes, green onions, shredded cheddar cheese. Served with Spanish rice and choice of black beans or refried beans.', 
        items: [
            {
                item: 'Halibut Fish Tacos',
                price: '$14.95', 
                item2: 'Topped with a special cilantro sauce and pico de gallo.'
            },
            {
                item: 'Ground Beef Tacos', 
                price: '$11.95'
            },
            {
                item: 'Carne Asada Tacos',
                price: '$12.95'
            }
        ]
    },
    {
        section: 'DOS ROCAS LITTLE AMIGOS',
        items: [
            {
                item: 'Small Burrito',
                price: '$6.95',
                description: 'Flour tortilla filled with beans & cheese. Served with Spanish rice.'
            },
            {
                item: 'One Quesadilla',
                price: '$5.95',
                description: 'Flour tortilla filled with cheese. Served with Spanish rice.',
                price2: 'With chicken or ground beef - $7.95'
            }
        ]
    },
    { 
        section: 'DOS ROCAS SPECIALTIES', 
        section2: 'Served with Spanish rice, refried or black beans.',
        items: [
            {
                item: 'Enchilada Plate',
                price: '$15.75', 
                description: '(Choice of ground beef or chicken) Two meat and cheese enchilada, covered with red sauce and melted cheese.' 
            },
            {
                item: 'Chile Rellenos', 
                price: '$15.95', 
                description: 'Two large chili peppers stuffed with cheese and deep fried to a golden brown.'
            },
            {
                item: 'Two Chicken Tamales',
                price: '$15.45',  
                description: 'Two fresh masa tamales with seasoned chicken, wrapped in corn husk and steamed. Topped with verde sauce and sour cream.'
            },
            {
                item: 'Camarones A La Diabla', 
                price: '$18.95', 
                description: 'A coastal favorite. Jumbo shrimp sautéed in a spicy Mexican butter. Served with fresh corn tortillas.'
            }
        ]
    },
    {
        section: 'BEACH BITE SPECIALTIES',
        section2: 'Served with Fresh Baked Garlic Bread and Minestrone Soup.', 
        items: [
            {
                item: 'Lasagna Classico', 
                price: '$15.95', 
                description: 'Layers of Pasta, Meat Sauce and Mozzarella , Ricotta, and Parmesan Cheese Fettuccine Alfredo.'
            },
            {
                item: 'Fettuccine Alfredo',
                price: '$15.95',
                description: 'Parmesan cream Sauce with hint of Garlic, tossed with Fettuccine. Topped with Parmesan Cheese.',
                price2: 'Add Bay Shrimp or Chicken for $3.00 more.' 
            },
            {
                item: 'Seafood Pasta', 
                price: '$26.95',
                description: 'Bay Shrimp, Sea Scallops and Clams sautéed with Fresh Garlic, Capers and Mushrooms in a Parmesan Cream Sauce tossed with Fettuccine.'
            },
            {
                item: 'Seafood Ravioli',
                price: '$23.95',
                description: 'Tender whole egg pasta with delicate seasoned blend of Ricotta, Lobster and Langostino. Served with Creamy Garlic sauce and touch of Marinara and Parmesan Cheese.'
            }
        ]
    }, 
    {
        section: 'BEVERAGES',
        items: [
            {
                item: 'Pepsi - Diet Pepsi - Root Beer - Lemonade Dr. Pepper - Sierra Mist - Raspberry Lemonade Italian Sodas - Coffee - Iced Tea - Milk - Juices' 
            }
        ]
    }
]

// disclaimer: 'SHELLFISH, EGGS OR POULTRY MAY INCREASE YOUR RISK OF FOOD BORN ILLNESS' 
