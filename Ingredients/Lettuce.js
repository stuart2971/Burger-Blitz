class Lettuce extends Ingredient {
    constructor() {
        super();
        this.scene = SCENE.FRIDGE;
        this.x = (windowWidth / 10) * 9;
        this.y = (windowHeight / 4) * 3 - 10;
        this.size = 60;
    }
    show() {
        fill(color(42, 200, 0));
        if (this.dragging) super.drag();
        if (scene == this.scene) ellipse(this.x, this.y, this.size, this.size);
    }
}
