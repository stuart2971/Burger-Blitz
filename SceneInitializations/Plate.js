class Plate extends Ingredient {
    constructor() {
        super();
        this.dragging = false;
        this.scene = SCENE.KITCHEN;
        this.x = windowWidth / 2 - 75;
        this.y = (windowHeight / 3) * 2 + 25;
        this.size = 150;
    }
    show() {
        fill(color(255, 255, 255));
        if (this.dragging) this.drag();
        if (scene == this.scene) {
            // stroke(0);
            // ellipse(this.x, this.y, 100, 100);
            // ellipse(this.x, this.y, 40, 40);
            image(plateImage, this.x - 75, this.y - 80, this.size, this.size);
        }
    }
    submitOrder() {
        if (
            this.y > (windowHeight / 3) * 2 &&
            this.scene === SCENE.DINING_ROOM
        ) {
            let submittedOrder = [];
            for (let i = 1; i < activeIngredients.length; i++) {
                if (activeIngredients[i].isInsidePlate(activeIngredients[0])) {
                    submittedOrder.push(...activeIngredients.splice(i, 1));
                    i--;
                }
            }
            this.calculatePoints(submittedOrder);
        }
    }
    calculatePoints(ingredients) {
        let points = 100;
        for (let i = 0; i < ingredients.length; i++) {
            const ingredientName = ingredients[i].getClassName();
            const ingredientIndex = burger.indexOf(ingredientName);

            if (ingredientIndex == -1) {
                // Cannot find ingredient in burger array
                console.log(`Order was not supposed to have ${ingredientName}`);
                points -= 20;
            } else {
                burger.splice(ingredientIndex, 1);
            }
        }
        if (burger.length > 0) {
            console.log(`Missing ${burger.join(", ")}`);
            points = 0;
        }
        score += points;
        buildOrder();
    }
}
