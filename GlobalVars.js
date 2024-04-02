let scene = 0;
let score = 0;
let timer = 60;

const SCENE = {
    DINING_ROOM: 0,
    KITCHEN: 1,
    PANTRY: 2,
    FRIDGE: 3,
};

let selectedIngredient;
let activeIngredients = [];
let uid = 0;
let topShelfHeight, INGREDIENTS;

function setGlobalDynamicVars() {
    topShelfHeight = windowHeight / 4;

    INGREDIENTS = {
        TOMATO: {
            COLOUR: color(255, 43, 43),
            X: windowWidth / 10,
            Y: topShelfHeight * 3 - 10,
            SIZE: 50,
        },
        PATTY: {
            COLOUR: color(120, 56, 24),
            X: windowWidth - 200,
            Y: topShelfHeight + 120,
            SIZE: 50,
        },
        LETTUCE: {
            COLOUR: color(42, 200, 0),
            X: (windowWidth / 10) * 8 + 20,
            Y: (windowHeight / 4) * 3 - 110,
            SIZE: 60,
        },
        BUN: {
            COLOUR: color(42, 200, 0),
            X: windowWidth - 400,
            Y: topShelfHeight + 100,
            SIZE: 50,
        },
        ONION: {
            COLOUR: color(42, 200, 0),
            X: 300,
            Y: topShelfHeight + 110,
            SIZE: 50,
        },
        PLATE: {
            X: windowWidth / 2 - 75,
            Y: (windowHeight / 3) * 2 + 25,
            SIZE: 150,
        },
    };
}
