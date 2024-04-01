class Onion extends Ingredient {
    constructor() {
        super();
        this.scene = SCENE.PANTRY;
        this.x = INGREDIENTS.ONION.X;
        this.y = INGREDIENTS.ONION.Y;
        this.size = INGREDIENTS.ONION.SIZE;
    }
    show() {
        fill(color(255, 255, 255));
        if (this.dragging) this.drag();
        if (scene == this.scene) {
            // ellipse(this.x, this.y, this.size, this.size);
            image(
                onionImage,
                this.x - 24,
                this.y - 25,
                this.size + 10,
                this.size + 10
            );
        }
    }
}
