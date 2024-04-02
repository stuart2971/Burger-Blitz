class Plate extends Ingredient {
    constructor() {
        super();
        this.dragging = false;
        this.scene = SCENE.KITCHEN;
        // Not sure why INGREDIENT is returning undefined (works in all other ingredients)
        // this.x = INGREDIENTS.PLATE.X;
        // this.y = INGREDIENTS.PLATE.Y;
        // this.size = INGREDIENTS.PLATE.SIZE;
        this.x = windowWidth / 2 - 75;
        this.y = (windowHeight / 3) * 2 + 25;
        this.size = 150;
        console.log(INGREDIENTS);
    }
    show() {
        fill(color(255, 255, 255));
        if (this.dragging) this.drag();
        if (scene == this.scene) {
            // Hitbox
            // stroke(0);
            // ellipse(this.x, this.y, 100, 100);
            // ellipse(this.x, this.y, 40, 40);
            image(plateImage, this.x - 75, this.y - 80, this.size, this.size);
        }
    }
    isPlateEmpty() {
        if (activeIngredients.length === 1) return true;
        for (let i = 1; i < activeIngredients.length; i++) {
            const ingredient = activeIngredients[i];
            if (
                dist(this.x, this.y, ingredient.x, ingredient.y) <
                this.size / 2
            ) {
                return false;
            }
        }
        return true;
    }
    submitOrder() {
        if (this.scene === SCENE.DINING_ROOM && !this.isPlateEmpty()) {
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
                errors.push({
                    message: `- Order was not supposed to have extra ${ingredientName}`,
                    timer: 3,
                });
                points -= 20;
            } else {
                burger.splice(ingredientIndex, 1);
            }
        }
        if (burger.length > 0) {
            console.log(`Missing ${burger.join(", ")}`);
            errors.push({
                message: `- Missing ${burger.join(", ")}`,
                timer: 3,
            });
            points = 0;
        }
        this.x = windowWidth / 2 - 75;
        this.y = (windowHeight / 3) * 2 + 25;
        this.scene = SCENE.KITCHEN;

        score += points;
        buildOrder();
    }
}
