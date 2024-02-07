// Elements
const increaseElement = document.getElementById("increase");
const resetElement = document.getElementById("reset");
const decreaseElement = document.getElementById("decrease");
const h1Element = document.querySelector("h1");

let counter = 0;

increaseElement.addEventListener("click", () => {
  transaction("increase");
});
decreaseElement.addEventListener("click", () => {
  transaction("decrease");
});
resetElement.addEventListener("click", () => {
  transaction("reset");
});
function transaction(action) {
  switch (action) {
    case "increase":
      counter++;
      break;
    case "decrease":
      counter--;
      break;
    case "reset":
      counter = 0;
      break;
    default:
      break;
  }
  h1Element.innerText = counter;
}
