class Bun extends Ingredient {
    constructor() {
        super();
        this.scene = SCENE.PANTRY;
        this.x = INGREDIENTS.BUN.X;
        this.y = INGREDIENTS.BUN.Y;
        this.size = INGREDIENTS.BUN.SIZE;
    }
    show() {
        fill(color(204, 153, 0));
        if (this.dragging) this.drag();
        if (scene == this.scene) {
            image(bunImage, this.x - 25, this.y - 20, this.size, this.size);
        }
    }
}
