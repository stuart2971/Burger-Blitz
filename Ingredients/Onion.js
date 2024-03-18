class Onion {
    constructor() {
        this.dragging = false;
        this.scene = SCENE.PANTRY;
        this.x = windowWidth / 10;
        this.y = topShelfHeight * 3 - 10;
        this.size = 30;
    }
    show() {
        fill(color(255, 255, 255));
        if (this.dragging) this.drag();
        if (scene == this.scene) ellipse(this.x, this.y, this.size, this.size);
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
