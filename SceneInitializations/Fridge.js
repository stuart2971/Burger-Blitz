function initFridge() {
    //Shelves
    fill(color(184, 184, 184));
    rect(0, topShelfHeight, windowWidth, 50);
    rect(0, topShelfHeight * 2, windowWidth, 50);
    rect(0, topShelfHeight * 3, windowWidth, 50);

    // Tomato
    const t = INGREDIENTS.TOMATO;
    fill(t.COLOUR);
    ellipse(t.X, t.Y, t.SIZE, t.SIZE);
    // Cheese
    fill(INGREDIENTS.CHEESE.COLOUR);
    rect(windowWidth - 100, topShelfHeight - 20, 50, 30);
    // Lettuce
    fill(INGREDIENTS.LETTUCE.COLOUR);
    ellipse((windowWidth / 10) * 9, topShelfHeight * 3 - 10, 60, 60);
}
