class Ingredient {
    constructor() {
        this.dragging = false;
        this.scene;
        this.x;
        this.y;
        this.size;
        this.offsetX = 0;
        this.offsetY = 0;
    }
    drag() {
        this.x = mouseX + this.offsetX;
        this.y = mouseY + this.offsetY;
        this.scene = scene;
    }
    isMouseInside() {
        if (dist(mouseX, mouseY, this.x, this.y) < this.size / 2) return true;
        return false;
    }
    setDragging(isDragging) {
        if (scene == this.scene) this.dragging = isDragging;
    }
    insidePlate(plate) {
        if (
            this.x > plate.x - plate.size / 2 &&
            this.x < plate.x + plate.size / 2 &&
            this.y > plate.y - plate.size / 2 &&
            this.y < plate.y + plate.size / 2 &&
            dist(plate.x, plate.y, mouseX, mouseY) < plate.size / 2 // Only when the mouse is in the ingredient, start dragging
        ) {
            this.offsetX = this.x - plate.x;
            this.offsetY = this.y - plate.y;
            this.setDragging(true);
        }
    }
}
