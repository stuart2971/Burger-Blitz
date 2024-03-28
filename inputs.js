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

    // Tomato
    if (mouseInEllipse(windowWidth / 10, topShelfHeight * 3 - 10, 30)) {
        activeIngredients.push(new Tomato());
    }
    // Lettuce
    if (mouseInEllipse((windowWidth / 10) * 9, topShelfHeight * 3 - 10, 60)) {
        activeIngredients.push(new Lettuce());
    }
    // Onion
    if (mouseInEllipse(windowWidth / 10, topShelfHeight * 3 - 10, 30)) {
        activeIngredients.push(new Onion());
    }
    // Patty
    if (mouseInEllipse(windowWidth - 100, topShelfHeight, 30)) {
        activeIngredients.push(new Patty());
    }
    // Bun
    if (mouseInEllipse(windowWidth - 100, topShelfHeight - 10, 25)) {
        activeIngredients.push(new Bun());
    }

    // Plate
    if (mouseInEllipse(windowWidth / 2, (windowHeight / 3) * 2 + 100, 100)) {
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
}
