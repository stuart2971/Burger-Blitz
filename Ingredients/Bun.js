class Bun {
    constructor() {
        this.dragging = false;
        this.scene = SCENE.PANTRY;
        this.x = windowWidth - 100;
        this.y = topShelfHeight - 10;
        this.size = 50;
    }
    show() {
        fill(color(204, 153, 0));
        if (this.dragging) this.drag();
        if (scene == this.scene) ellipse(this.x, this.y, this.size, 30);
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
