let burger = ["Bun", "Bun", "Patty"];
let orderSentence;

function uhhh() {
    if (Math.random() < 0.1) return "...uhhhhhhh...";
    else return "";
}

function buildOrder() {
    burger = ["Bun", "Bun", "Patty"];
    orderSentence = `${uhhh()} Can I get a burger with${uhhh()} ${randomizeOrder()}`;
}
function randomizeOrder() {
    if (Math.random() < 0.6) burger.push("Lettuce");
    if (Math.random() < 0.5) burger.push("Tomato");
    if (Math.random() < 0.3) burger.push("Onion");

    return burger.slice(3).join(" and ");
}
function initDiningRoom() {
    //Counter
    fill(color(102, 51, 0));
    rect(0, (windowHeight / 3) * 2, windowWidth, 300);

    fill(color(255, 255, 255));
    ellipse(windowWidth / 2, 300, windowWidth / 2, 150);

    // Order
    textSize(14);
    fill(color(0, 0, 0));
    text(orderSentence, windowWidth / 2 - 200, 300);
}
