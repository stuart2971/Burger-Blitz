function mousePressed() {
    const topShelfHeight = windowHeight / 4;

    function mouseInEllipse(x, y, w) {
        if (dist(mouseX, mouseY, x, y) < w) return true;
    }
    if (mouseInEllipse(windowWidth / 10, topShelfHeight * 3 - 10, 30)) {
        activeIngredients.push(new Tomato());
    }
    if ((mouseInEllipse(windowWidth / 10) * 9, topShelfHeight * 3 - 10, 60)) {
        activeIngredients.push(new Lettuce());
    }
    for (let i = 0; i < activeIngredients.length; i++) {
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
