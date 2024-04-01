class Lettuce extends Ingredient {
    constructor() {
        super();
        this.scene = SCENE.FRIDGE;
        this.x = INGREDIENTS.LETTUCE.X;
        this.y = INGREDIENTS.LETTUCE.Y;
        this.size = INGREDIENTS.LETTUCE.SIZE;
    }
    show() {
        fill(color(42, 200, 0));
        if (this.dragging) super.drag();
        if (scene == this.scene) {
            fill(255, 255, 255, 0);
            noStroke();
            ellipse(this.x, this.y, this.size, this.size);
            image(lettuceImage, this.x - 25, this.y - 30, this.size, this.size);
        }
    }
}
