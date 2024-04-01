function initFridge() {
    image(fridgeImage, 0, 0, windowWidth, windowHeight);

    // Tomato
    const t = INGREDIENTS.TOMATO;
    fill(t.COLOUR);
    noStroke();
    ellipse(t.X, t.Y, t.SIZE, t.SIZE);
    image(tomatoImage, t.X - 25, t.Y - 25, t.SIZE, t.SIZE);
    // Patty
    const p = INGREDIENTS.PATTY;
    fill(255, 255, 255);
    ellipse(p.X, p.Y, p.SIZE, p.SIZE - 20);
    image(pattyImage, p.X - 25, p.Y - 25, p.SIZE, p.SIZE);

    // Lettuce
    const l = INGREDIENTS.LETTUCE;
    // fill(INGREDIENTS.LETTUCE.COLOUR);
    // ellipse(l.X, l.Y, l.SIZE, l.SIZE);
    image(lettuceImage, l.X - 25, l.Y - 30, l.SIZE, l.SIZE);
}
