import {images} from "../style/images";
import {icons} from "../style/icons";

export const recipes = {
    food: [
        {
            id: 0,
            title: 'Grilled Salmon with Avocado Sauce',
            desc: 'A delicious and healthy grilled salmon dish served with creamy avocado sauce. The salmon fillets are seasoned with salt, pepper, and a squeeze of lemon juice, then grilled to perfection. The creamy avocado sauce is made by blending ripe avocados with garlic, lemon juice, salt, and olive oil. Serve the grilled salmon with a generous dollop of avocado sauce for a satisfying and nutritious meal.',
            image: images.food1,
            timers: [
                {
                    name: 'Grilling salmon',
                    secs: 3,
                },
                {
                    name: 'Preparing avocado sauce',
                    secs: 3,
                },
                {
                    name: 'Mixing ingredients',
                    secs: 300,
                }
            ],
            ingredients: [
                {
                    id: 0,
                    icon: icons.salmon,
                    name: 'Salmon fillets',
                    amount: '4',
                    unit: 'pieces'
                },
                {
                    id: 1,
                    icon: icons.avocado,
                    name: 'Avocado',
                    amount: '2',
                    unit: 'ripe'
                },
                {
                    id: 2,
                    icon: icons.lemon,
                    name: 'Lemon',
                    amount: '1',
                    unit: 'juice'
                },
                {
                    id: 3,
                    icon: icons.garlic,
                    name: 'Garlic',
                    amount: '2',
                    unit: 'cloves'
                },
                {
                    id: 4,
                    icon: icons.salt,
                    name: 'Salt',
                    amount: '1',
                    unit: 'teaspoon'
                },
                {
                    id: 5,
                    icon: icons.chili,
                    name: 'Black pepper',
                    amount: '1/2',
                    unit: 'teaspoon'
                },
                {
                    id: 6,
                    icon: icons.oliveOil,
                    name: 'Olive oil',
                    amount: '2',
                    unit: 'tablespoons'
                }
            ]
        },
        {
            id: 1,
            title: 'Pesto Pasta with Cherry Tomatoes',
            desc: 'A quick and flavorful pasta dish that combines al dente spaghetti with fresh pesto and juicy cherry tomatoes. Cook the pasta until it reaches the desired tenderness, then toss it with homemade or store-bought pesto sauce. Add halved cherry tomatoes and a sprinkle of grated Parmesan cheese for a burst of color and extra taste. This pesto pasta is a crowd-pleasing option for a satisfying weeknight dinner.',
            image: images.food2,
            timers: [
                {
                    name: 'Boiling pasta',
                    secs: 600,
                }
            ],
            ingredients: [
                {
                    id: 0,
                    icon: icons.pasta,
                    name: 'Spaghetti',
                    amount: '250',
                    unit: 'grams'
                },
                {
                    id: 1,
                    icon: icons.basil,
                    name: 'Fresh basil leaves',
                    amount: '2',
                    unit: 'cups'
                },
                {
                    id: 2,
                    icon: icons.pineNuts,
                    name: 'Pine nuts',
                    amount: '1/4',
                    unit: 'cup'
                },
                {
                    id: 3,
                    icon: icons.garlic,
                    name: 'Garlic',
                    amount: '2',
                    unit: 'cloves'
                },
                {
                    id: 4,
                    icon: icons.tomato,
                    name: 'Cherry tomatoes',
                    amount: '1',
                    unit: 'cup'
                },
                {
                    id: 5,
                    icon: icons.cheese,
                    name: 'Parmesan cheese',
                    amount: '1/4',
                    unit: 'cup'
                }
            ]
        },
        {
            id: 2,
            title: 'Chicken Stir-Fry with Vegetables',
            desc: 'A quick and healthy stir-fry recipe that combines tender chicken breast with a colorful medley of vegetables. Marinate the chicken in soy sauce, ginger, and garlic for added flavor. Stir-fry the chicken with broccoli, bell peppers, carrots, and snap peas until everything is cooked to perfection. Serve the chicken stir-fry over steamed rice or noodles for a satisfying and nutritious meal.',
            image: images.food3,
            timers: [
                {
                    name: 'Marinating chicken',
                    secs: 900,
                },
                {
                    name: 'Stir-frying chicken and vegetables',
                    secs: 600,
                }
            ],
            ingredients: [
                {
                    id: 0,
                    icon: icons.chicken,
                    name: 'Chicken breast',
                    amount: '2',
                    unit: 'pieces'
                },
                {
                    id: 1,
                    icon: icons.soySauce,
                    name: 'Soy sauce',
                    amount: '2',
                    unit: 'tablespoons'
                },
                {
                    id: 2,
                    icon: icons.ginger,
                    name: 'Fresh ginger',
                    amount: '1',
                    unit: 'tablespoon'
                },
                {
                    id: 3,
                    icon: icons.garlic,
                    name: 'Garlic',
                    amount: '3',
                    unit: 'cloves'
                },
                {
                    id: 4,
                    icon: icons.broccoli,
                    name: 'Broccoli florets',
                    amount: '2',
                    unit: 'cups'
                },
                {
                    id: 5,
                    icon: icons.pepper,
                    name: 'Bell peppers',
                    amount: '2',
                    unit: 'pieces'
                },
                {
                    id: 6,
                    icon: icons.carrot,
                    name: 'Carrots',
                    amount: '2',
                    unit: 'pieces'
                },
                {
                    id: 7,
                    icon: icons.oliveOil,
                    name: 'Cooking oil',
                    amount: '2',
                    unit: 'tablespoons'
                }
            ]
        },
        {
            id: 3,
            title: 'Caprese Salad',
            desc: 'A classic Italian salad that showcases the flavors of fresh tomatoes, mozzarella cheese, and basil. Slice ripe tomatoes and fresh mozzarella cheese, then arrange them on a plate. Drizzle with extra virgin olive oil, sprinkle with salt and pepper, and garnish with fresh basil leaves. This simple and elegant Caprese salad is a perfect appetizer or side dish for any occasion.',
            image: images.food4,
            timers: [
                {
                    name: 'Mixing ingredients',
                    secs: 60,
                }
            ],
            ingredients: [
                {
                    id: 0,
                    icon: icons.tomato,
                    name: 'Ripe tomatoes',
                    amount: '4',
                    unit: 'pieces'
                },
                {
                    id: 1,
                    icon: icons.cheese,
                    name: 'Fresh mozzarella cheese',
                    amount: '8',
                    unit: 'ounces'
                },
                {
                    id: 2,
                    icon: icons.basil,
                    name: 'Fresh basil leaves',
                    amount: '1/2',
                    unit: 'cup'
                },
                {
                    id: 3,
                    icon: icons.oliveOil,
                    name: 'Extra virgin olive oil',
                    amount: '2',
                    unit: 'tablespoons'
                },
                {
                    id: 4,
                    icon: icons.salt,
                    name: 'Salt',
                    amount: '1/4',
                    unit: 'teaspoon'
                },
                {
                    id: 5,
                    icon: icons.pepper,
                    name: 'Black pepper',
                    amount: '1/4',
                    unit: 'teaspoon'
                }
            ]
        },
        {
            id: 4,
            title: 'Beef Tacos',
            desc: 'A crowd-pleasing Tex-Mex favorite, beef tacos are easy to make and packed with flavor. Brown ground beef in a skillet, then add onions, garlic, and a blend of spices. Simmer the beef mixture until the flavors meld together. Warm tortillas and fill them with the seasoned beef, along with your favorite toppings like shredded cheese, lettuce, tomatoes, and salsa. Enjoy these delicious beef tacos for a fun and satisfying meal.',
            image: images.food5,
            timers: [
                {
                    name: 'Browning ground beef',
                    secs: 600,
                },
                {
                    name: 'Simmering beef mixture',
                    secs: 300,
                }
            ],
            ingredients: [
                {
                    id: 0,
                    icon: icons.steak,
                    name: 'Ground beef',
                    amount: '1',
                    unit: 'pound'
                },
                {
                    id: 1,
                    icon: icons.onion,
                    name: 'Onion',
                    amount: '1',
                    unit: 'medium'
                },
                {
                    id: 2,
                    icon: icons.garlic,
                    name: 'Garlic',
                    amount: '2',
                    unit: 'cloves'
                },
                {
                    id: 3,
                    icon: icons.chili,
                    name: 'Chili powder',
                    amount: '2',
                    unit: 'teaspoons'
                },
                {
                    id: 4,
                    icon: icons.paprika,
                    name: 'Paprika',
                    amount: '1',
                    unit: 'teaspoon'
                },
                {
                    id: 5,
                    icon: icons.salt,
                    name: 'Salt',
                    amount: '1/2',
                    unit: 'teaspoon'
                },
                {
                    id: 6,
                    icon: icons.pepper,
                    name: 'Black pepper',
                    amount: '1/4',
                    unit: 'teaspoon'
                },
                {
                    id: 7,
                    icon: icons.cheese,
                    name: 'Shredded cheese',
                    amount: '1',
                    unit: 'cup'
                },
                {
                    id: 10,
                    icon: icons.lettuce,
                    name: 'Lettuce',
                    amount: '1',
                    unit: 'cup'
                },
                {
                    id: 11,
                    icon: icons.tomato,
                    name: 'Tomato',
                    amount: '1',
                    unit: 'medium'
                },
            ]
        },
        {
            id: 5,
            title: 'Margherita Pizza',
            desc: 'A classic Italian pizza that features a thin crust topped with fresh tomatoes, mozzarella cheese, and basil leaves. Preheat the oven and roll out pizza dough into a round shape. Spread a layer of tomato sauce over the dough, then arrange slices of fresh mozzarella cheese and tomato on top. Bake the pizza until the crust is golden and the cheese is melted and bubbly. Garnish with fresh basil leaves and drizzle with olive oil. Slice and serve this Margherita pizza for a taste of Italy.',
            image: images.food6,
            timers: [
                {
                    name: 'Baking pizza',
                    secs: 900,
                }
            ],
            ingredients: [
                {
                    id: 1,
                    icon: icons.tomato,
                    name: 'Tomato sauce',
                    amount: '1/2',
                    unit: 'cup'
                },
                {
                    id: 2,
                    icon: icons.cheese,
                    name: 'Fresh mozzarella cheese',
                    amount: '8',
                    unit: 'ounces'
                },
                {
                    id: 3,
                    icon: icons.tomato,
                    name: 'Ripe tomatoes',
                    amount: '2',
                    unit: 'medium'
                },
                {
                    id: 4,
                    icon: icons.basil,
                    name: 'Fresh basil leaves',
                    amount: '1/2',
                    unit: 'cup'
                },
                {
                    id: 5,
                    icon: icons.oliveOil,
                    name: 'Extra virgin olive oil',
                    amount: '1',
                    unit: 'tablespoon'
                }
            ]
        },
        {
            id: 6,
            title: 'Vegetable Curry with Rice',
            desc: 'A flavorful and comforting vegetable curry that combines a medley of colorful vegetables with aromatic spices and creamy coconut milk. Sauté onions, garlic, and ginger in a pan, then add your choice of vegetables such as carrots, bell peppers, potatoes, and peas. Stir in curry powder, turmeric, and cumin for a fragrant spice blend. Simmer the curry with coconut milk until the vegetables are tender and the flavors have melded together. Serve the vegetable curry over steamed rice for a satisfying and nourishing meal.',
            image: images.food7,
            timers: [
                {
                    name: 'Cooking rice',
                    secs: 900,
                },
                {
                    name: 'Simmering curry',
                    secs: 600,
                }
            ],
            ingredients: [
                {
                    id: 0,
                    icon: icons.onion,
                    name: 'Onion',
                    amount: '1',
                    unit: 'medium'
                },
                {
                    id: 1,
                    icon: icons.garlic,
                    name: 'Garlic',
                    amount: '3',
                    unit: 'cloves'
                },
                {
                    id: 2,
                    icon: icons.ginger,
                    name: 'Fresh ginger',
                    amount: '1',
                    unit: 'tablespoon'
                },
                {
                    id: 3,
                    icon: icons.carrot,
                    name: 'Carrots',
                    amount: '2',
                    unit: 'pieces'
                },
                {
                    id: 4,
                    icon: icons.pepper,
                    name: 'Bell peppers',
                    amount: '2',
                    unit: 'pieces'
                },
                {
                    id: 5,
                    icon: icons.potato,
                    name: 'Potatoes',
                    amount: '2',
                    unit: 'medium'
                },
                {
                    id: 7,
                    icon: icons.curry,
                    name: 'Curry powder',
                    amount: '2',
                    unit: 'teaspoons'
                },
                {
                    id: 10,
                    icon: icons.milk,
                    name: 'Coconut milk',
                    amount: '1',
                    unit: 'can'
                },
                {
                    id: 11,
                    icon: icons.rice,
                    name: 'Rice',
                    amount: '1',
                    unit: 'cup'
                }
            ]
        }
    ],
    drinks: [
        {
            id: 0,
            title: 'Strawberry Banana Smoothie',
            desc: 'A refreshing and creamy smoothie that combines the sweetness of strawberries with the creaminess of bananas. Blend fresh or frozen strawberries, ripe bananas, yogurt, and a splash of milk until smooth and creamy. This Strawberry Banana Smoothie is a perfect breakfast or snack option that will keep you energized throughout the day.',
            image: images.drink1,
            timers: [
                {
                    name: 'Blending ingredients',
                    secs: 60,
                }
            ],
            ingredients: [
                {
                    id: 0,
                    icon: icons.strawberry,
                    name: 'Strawberries',
                    amount: '1',
                    unit: 'cup'
                },
                {
                    id: 1,
                    icon: icons.banana,
                    name: 'Banana',
                    amount: '1',
                    unit: 'ripe'
                },
                {
                    id: 2,
                    icon: icons.yogurt,
                    name: 'Yogurt',
                    amount: '1/2',
                    unit: 'cup'
                },
                {
                    id: 3,
                    icon: icons.milk,
                    name: 'Milk',
                    amount: '1/2',
                    unit: 'cup'
                },
                {
                    id: 4,
                    icon: icons.ice,
                    name: 'Ice cubes',
                    amount: '1/2',
                    unit: 'cup'
                }
            ]
        },
        {
            id: 1,
            title: 'Mango Lassi',
            desc: 'A refreshing and creamy Indian drink made with ripe mangoes, yogurt, and a touch of cardamom. Blend together chopped mangoes, yogurt, sugar, cardamom powder, and a handful of ice cubes until smooth and frothy. This Mango Lassi is a perfect summer beverage that will transport you to tropical paradise.',
            image: images.drink2,
            timers: [
                {
                    name: 'Blending ingredients',
                    secs: 60,
                }
            ],
            ingredients: [
                {
                    id: 0,
                    icon: icons.mango,
                    name: 'Ripe mangoes',
                    amount: '2',
                    unit: 'pieces'
                },
                {
                    id: 1,
                    icon: icons.yogurt,
                    name: 'Yogurt',
                    amount: '1',
                    unit: 'cup'
                },
                {
                    id: 2,
                    icon: icons.sugar,
                    name: 'Sugar',
                    amount: '2',
                    unit: 'tablespoons'
                },
                {
                    id: 4,
                    icon: icons.ice,
                    name: 'Ice cubes',
                    amount: '1/2',
                    unit: 'cup'
                }
            ]
        },
        {
            id: 2,
            title: 'Watermelon Mint Cooler',
            desc: 'A refreshing and hydrating summer drink that combines juicy watermelon with fresh mint leaves and a hint of lime. Blend together watermelon chunks, mint leaves, lime juice, and a handful of ice cubes until smooth. This Watermelon Mint Cooler is a perfect way to beat the heat and quench your thirst on a hot summer day.',
            image: images.drink3,
            timers: [
                {
                    name: 'Blending ingredients',
                    secs: 60,
                }
            ],
            ingredients: [
                {
                    id: 0,
                    icon: icons.watermelon,
                    name: 'Watermelon chunks',
                    amount: '2',
                    unit: 'cups'
                },
                {
                    id: 1,
                    icon: icons.mint,
                    name: 'Fresh mint leaves',
                    amount: '1/4',
                    unit: 'cup'
                },
                {
                    id: 2,
                    icon: icons.lime,
                    name: 'Lime juice',
                    amount: '1',
                    unit: 'tablespoon'
                },
                {
                    id: 3,
                    icon: icons.ice,
                    name: 'Ice cubes',
                    amount: '1/2',
                    unit: 'cup'
                }
            ]
        }
    ]
}
