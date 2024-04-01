function plateIsActive() {
    for (let i = 0; i < activeIngredients.length; i++) {
        if (activeIngredients[i].constructor.name === "Plate") {
            return true;
        }
    }
    return false;
}

function mousePressed() {
    const topShelfHeight = windowHeight / 4;

    function mouseInEllipse(x, y, w) {
        if (dist(mouseX, mouseY, x, y) < w) return true;
    }
    // Because of how global variables work in p5, these will have to be hardcoded in

    if (scene === SCENE.PANTRY) {
        // Bun
        if (mouseInEllipse(windowWidth - 400, topShelfHeight + 100, 50)) {
            activeIngredients.push(new Bun());
        } // Onion
        if (mouseInEllipse(300, topShelfHeight + 110, 50)) {
            activeIngredients.push(new Onion());
        }
    }
    if (scene === SCENE.FRIDGE) {
        // Tomato
        if (mouseInEllipse(windowWidth / 10, topShelfHeight * 3 - 10, 30)) {
            activeIngredients.push(new Tomato());
        }
        // Lettuce
        if (
            mouseInEllipse(
                (windowWidth / 10) * 8 + 20,
                (windowHeight / 4) * 3 - 110,
                60
            )
        ) {
            activeIngredients.push(new Lettuce());
        }
        // Patty
        if (mouseInEllipse(windowWidth - 200, topShelfHeight + 120, 30)) {
            activeIngredients.push(new Patty());
        }
    }

    // Plate
    if (
        mouseInEllipse(windowWidth / 2 - 75, (windowHeight / 3) * 2 + 25, 150)
    ) {
        if (!plateIsActive()) activeIngredients.push(new Plate());
    }

    for (let i = 0; i < activeIngredients.length; i++) {
        if (activeIngredients[i].constructor.name !== "Plate") {
            activeIngredients[i].insidePlate(activeIngredients[0]);
        }
        if (activeIngredients[i].isMouseInside()) {
            activeIngredients[i].setDragging(true);
        }
    }
}
function keyPressed() {
    if (keyCode === 65) {
        if (scene > 0) scene -= 1;
    } else if (keyCode === 68) {
        if (scene < 3) scene += 1;
    }
}
function mouseReleased() {
    for (let i = 0; i < activeIngredients.length; i++) {
        activeIngredients[i].dragging = false;
    }
    activeIngredients[0].submitOrder();
}
