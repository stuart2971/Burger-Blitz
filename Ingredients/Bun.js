class Bun extends Ingredient {
    constructor() {
        super();
        this.scene = SCENE.PANTRY;
        this.x = windowWidth - 100;
        this.y = topShelfHeight - 10;
        this.size = 50;
    }
    show() {
        fill(color(204, 153, 0));
        if (this.dragging) this.drag();
        if (scene == this.scene) ellipse(this.x, this.y, this.size, 30);
    }
}
