class Patty extends Ingredient {
    constructor() {
        super();
        this.scene = SCENE.FRIDGE;
        this.x = INGREDIENTS.PATTY.X;
        this.y = INGREDIENTS.PATTY.Y;
        this.size = INGREDIENTS.PATTY.SIZE;
    }
    show() {
        fill(color(120, 56, 24));
        if (this.dragging) this.drag();
        if (scene == this.scene) {
            noFill();
            noStroke();
            ellipse(this.x, this.y, this.size, this.size);
            image(pattyImage, this.x - 25, this.y - 25, this.size, this.size);
        }
    }
}
