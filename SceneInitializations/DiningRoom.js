let order = `${uhhh()} Can I get a burger with${uhhh()} ${buildOrder()}`;

function uhhh() {
    if (Math.random() < 0.1) return "...uhhhhhhh...";
    else return "";
}
function buildOrder() {
    let toppings = [];
    if (Math.random() < 0.7) toppings.push("cheese");
    if (Math.random() < 0.6) toppings.push("lettuce");
    if (Math.random() < 0.5) toppings.push("tomato");
    if (Math.random() < 0.3) toppings.push("onion");
    return toppings.join(" and ");
}
function initDiningRoom() {
    //Counter
    fill(color(102, 51, 0));
    rect(0, (windowHeight / 3) * 2, windowWidth, 300);
    console.log("In Dining Room: " + scene);

    fill(color(255, 255, 255));
    ellipse(windowWidth / 2, 100, windowWidth / 3, 200);
    fill(color(0, 0, 0));
    text(order, windowWidth / 2 - 150, 60);
}
