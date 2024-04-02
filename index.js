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
let errors = [];
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
    // Score
    textSize(32);
    fill(color(255, 255, 255));
    text(score, windowWidth / 2, 50);
    // Time
    if (frameCount % 60 == 0 && timer > 0) {
        timer--;
    }
    textSize(32);
    fill(color(255, 255, 255));
    text(timer, windowWidth - 100, 50);
    if (timer === 0) {
        fill(0);
        rect(windowWidth / 2 - 150, windowHeight / 2, 400, 100);
        fill(255);
        text(
            `Game Over. Score: ${score}`,
            windowWidth / 2 - 100,
            windowHeight / 2 + 50
        );
        scene = 0;
        noLoop();
    }
    // Errors
    let errorMessageY = 50;

    for (let i = 0; i < errors.length; i++) {
        fill(255, 0, 0);
        if (errors[i].timer > 0) {
            text(errors[i].message, 50, errorMessageY);
            errorMessageY += 50;
        }
        if (errors[i].timer <= 0) {
            errors.splice(i, 1);
            errorMessageY -= 50;
        }

        if (frameCount % 60 == 0 && errors[i].timer > 0) {
            errors[i].timer--;
        }
    }
}
