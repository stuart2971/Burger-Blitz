let scene = 0;
let score = 0;

const SCENE = {
    DINING_ROOM: 0,
    KITCHEN: 1,
    PANTRY: 2,
    FRIDGE: 3,
};

let selectedIngredient;
let activeIngredients = [];
let uid = 0;

function setGlobalDynamicVars() {
    topShelfHeight = windowHeight / 4;

    INGREDIENTS = {
        TOMATO: {
            COLOUR: color(255, 43, 43),
            X: windowWidth / 10,
            Y: topShelfHeight * 3 - 10,
            SIZE: 30,
        },
        PATTY: {
            COLOUR: color(120, 56, 24),
        },
        LETTUCE: {
            COLOUR: color(42, 200, 0),
        },
    };
}
