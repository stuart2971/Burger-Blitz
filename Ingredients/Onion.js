class Onion extends Ingredient {
    constructor() {
        super();
        this.scene = SCENE.PANTRY;
        this.x = windowWidth / 10;
        this.y = topShelfHeight * 3 - 10;
        this.size = 30;
    }
    show() {
        fill(color(255, 255, 255));
        if (this.dragging) this.drag();
        if (scene == this.scene) ellipse(this.x, this.y, this.size, this.size);
    }
}
