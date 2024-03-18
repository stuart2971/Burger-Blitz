function initPantry() {
    //Shelves
    fill(color(153, 102, 51));
    rect(0, topShelfHeight, windowWidth, 50);
    rect(0, topShelfHeight * 2, windowWidth, 50);
    rect(0, topShelfHeight * 3, windowWidth, 50);

    // Onion
    fill(color(255, 255, 255));
    ellipse(windowWidth / 10, topShelfHeight * 3 - 10, 30, 30);

    // Buns
    fill(color(204, 153, 0));
    ellipse(windowWidth - 100, topShelfHeight - 10, 50, 30);
}
