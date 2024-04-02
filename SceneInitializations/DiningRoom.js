let burger = ["Bun", "Patty"];
let orderSentence;

function uhhh() {
    if (Math.random() < 0.1) return "...uhhhhhhh...";
    else return "";
}

function buildOrder() {
    burger = ["Bun", "Patty"];
    const addons = randomizeOrder();
    if (addons === "") orderSentence = `${uhhh()} Can I get a plain burger`;
    else orderSentence = `${uhhh()} Can I get a burger ${addons}`;
}
function randomizeOrder() {
    if (Math.random() < 0.6) burger.push("Lettuce");
    if (Math.random() < 0.5) burger.push("Tomato");
    if (Math.random() < 0.3) burger.push("Onion");

    if (burger.length > 2)
        return `with ${uhhh()} ${burger.slice(2).join(" and ")}`;
    return "";
}
function initDiningRoom() {
    // Background
    image(diningRoomImage, 0, 0, windowWidth, windowHeight);
    // Person
    image(
        personImage,
        windowWidth / 2 - 400,
        windowHeight - 400,
        windowWidth / 2,
        windowHeight / 2
    );

    // Speech bubble
    fill(color(255, 255, 255));
    ellipse(windowWidth / 2, 400, windowWidth / 2, 150);

    // Order text
    textSize(14);
    fill(color(0, 0, 0));
    text(orderSentence, windowWidth / 3, 400);
}
