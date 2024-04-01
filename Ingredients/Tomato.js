class Tomato extends Ingredient {
    constructor() {
        super();
        this.scene = SCENE.FRIDGE;
        this.x = INGREDIENTS.TOMATO.X;
        this.y = INGREDIENTS.TOMATO.Y;
        this.size = INGREDIENTS.TOMATO.SIZE;
    }
    show() {
        fill(color(255, 43, 43));
        if (this.dragging) this.drag();
        if (scene == this.scene) {
            ellipse(this.x, this.y, this.size, this.size);
            image(tomatoImage, this.x - 25, this.y - 25, this.size, this.size);
        }
    }
}
