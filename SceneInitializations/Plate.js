class Plate extends Ingredient {
    constructor() {
        super();
        this.dragging = false;
        this.scene = SCENE.KITCHEN;
        this.x = windowWidth / 2;
        this.y = (windowHeight / 3) * 2 + 100;
        this.size = 100;
    }
    show() {
        fill(color(255, 255, 255));
        if (this.dragging) this.drag();
        if (scene == this.scene) {
            stroke(0);
            ellipse(this.x, this.y, this.size, this.size);
            ellipse(this.x, this.y, 40, 40);
        }
    }
    addPoints() {
        if (
            this.y > (windowHeight / 3) * 2 &&
            this.scene === SCENE.DINING_ROOM
        ) {
            for (let i = 1; i < activeIngredients.length; i++) {
                if (activeIngredients[i].isInsidePlate(activeIngredients[0])) {
                    activeIngredients.splice(i, 1);
                    i--;
                }
            }
        }
    }
}
