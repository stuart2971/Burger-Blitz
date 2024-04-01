let tomatoImage,
    lettuceImage,
    onionImage,
    pattyImage,
    bunImage,
    plateImage,
    fridgeImage,
    pantryImage,
    kitchenImage,
    personImage,
    diningRoomImage;

function setup() {
    createCanvas(windowWidth, windowHeight);
    activeIngredients[0] = new Plate();
    buildOrder();
    tomatoImage = loadImage("Ingredients/images/tomato.png");
    lettuceImage = loadImage("Ingredients/images/lettuce.png");
    onionImage = loadImage("Ingredients/images/onion.png");
    bunImage = loadImage("Ingredients/images/bun.png");
    pattyImage = loadImage("Ingredients/images/patty.png");
    plateImage = loadImage("Ingredients/images/plate.webp");
    fridgeImage = loadImage("SceneInitializations/images/fridge.jpg");
    pantryImage = loadImage("SceneInitializations/images/pantry.jpg");
    kitchenImage = loadImage("SceneInitializations/images/kitchen.avif");
    diningRoomImage = loadImage("SceneInitializations/images/diningRoom.jpg");
    personImage = loadImage("SceneInitializations/images/person.webp");
}

let topShelfHeight, INGREDIENTS;
function draw() {
    background(0);
    setGlobalDynamicVars();
    switch (scene) {
        case SCENE.DINING_ROOM:
            initDiningRoom();
            break;
        case SCENE.KITCHEN:
            initKitchen();
            break;
        case SCENE.PANTRY:
            initPantry();
            break;
        case SCENE.FRIDGE:
            initFridge();
            break;
    }
    for (let i = 0; i < activeIngredients.length; i++) {
        activeIngredients[i].show();
    }
    fill(color(255, 0, 0));
    ellipse(mouseX, mouseY, 10, 10);
    // Score
    textSize(32);
    fill(color(255, 255, 255));
    text(score, windowWidth / 2, 50);
}
