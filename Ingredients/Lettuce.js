class Lettuce {
    constructor() {
        this.dragging = false;
        this.scene = SCENE.FRIDGE;
        this.x = (windowWidth / 10) * 9;
        this.y = (windowHeight / 4) * 3 - 10;
        this.size = 60;
    }
    show() {
        fill(color(42, 200, 0));
        if (this.dragging) this.drag();
        if (scene == this.scene) ellipse(this.x, this.y, this.size, this.size);
    }
    drag() {
        this.x = mouseX;
        this.y = mouseY;
        this.scene = scene;
    }
    isMouseInside() {
        if (dist(mouseX, mouseY, this.x, this.y) < this.size) return true;
        return false;
    }
    setDragging(isDragging) {
        this.dragging = isDragging;
    }
}
