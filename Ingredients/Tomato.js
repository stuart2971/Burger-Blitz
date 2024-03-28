class Tomato extends Ingredient {
    constructor() {
        super();
        this.scene = SCENE.FRIDGE;
        this.x = windowWidth / 10;
        this.y = (windowHeight / 4) * 3 - 10;
        this.size = 30;
    }
    show() {
        fill(color(255, 43, 43));
        if (this.dragging) this.drag();
        if (scene == this.scene) ellipse(this.x, this.y, this.size, this.size);
    }
}
