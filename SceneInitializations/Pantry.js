function initPantry() {
    image(pantryImage, 0, 0, windowWidth, windowHeight);

    // Onion
    const o = INGREDIENTS.ONION;
    fill(color(255, 255, 255));
    // ellipse(o.X, o.Y, o.SIZE, o.SIZE);
    image(onionImage, o.X - 24, o.Y - 25, o.SIZE, o.SIZE);

    // Buns
    const b = INGREDIENTS.BUN;
    image(bunImage, b.X - 25, b.Y - 20, b.SIZE, b.SIZE);
}
