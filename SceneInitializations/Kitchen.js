function initKitchen() {
    //Counter
    fill(color(156, 156, 156));
    rect(0, (windowHeight / 3) * 2, windowWidth, 300);

    // Plate
    stroke(0);
    fill(color(255, 255, 255));
    ellipse(windowWidth / 2, (windowHeight / 3) * 2 + 100, 100, 100);
    ellipse(windowWidth / 2, (windowHeight / 3) * 2 + 100, 40, 40);
}
