let scene = 1;

const SCENE = {
    DINING_ROOM: 0,
    KITCHEN: 1,
    PANTRY: 2,
    FRIDGE: 3,
};

let selectedIngredient;
let activeIngredients = [];

function setGlobalDynamicVars() {
    topShelfHeight = windowHeight / 4;

    INGREDIENTS = {
        TOMATO: {
            COLOUR: color(255, 43, 43),
            X: windowWidth / 10,
            Y: topShelfHeight * 3 - 10,
            SIZE: 30,
        },
        CHEESE: {
            COLOUR: color(204, 153, 0),
        },
        LETTUCE: {
            COLOUR: color(42, 200, 0),
        },
    };
}
