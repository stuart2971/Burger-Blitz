function setup() {
    createCanvas(windowWidth, windowHeight);
    activeIngredients[0] = new Plate();
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
