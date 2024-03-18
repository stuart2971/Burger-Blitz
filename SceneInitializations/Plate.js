class Plate {
    constructor() {
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
    drag() {
        this.x = mouseX;
        this.y = mouseY;
        this.scene = scene;
    }
    isMouseInside() {
        if (dist(mouseX, mouseY, this.x, this.y) < this.size / 2) return true;
        return false;
    }
    setDragging(isDragging) {
        if (scene == this.scene) this.dragging = isDragging;
    }
}
