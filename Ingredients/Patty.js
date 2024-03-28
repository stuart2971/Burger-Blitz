class Patty extends Ingredient {
    constructor() {
        super();
        this.scene = SCENE.FRIDGE;
        this.x = windowWidth - 100;
        this.y = topShelfHeight;
        this.size = 30;
    }
    show() {
        fill(color(120, 56, 24));
        if (this.dragging) this.drag();
        if (scene == this.scene) ellipse(this.x, this.y, 50, this.size);
    }
}
