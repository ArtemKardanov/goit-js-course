const input = document.getElementById("font-size-control");
const span = document.getElementById("text");

input.addEventListener("input", handleFontSizeChanger);

function handleFontSizeChanger() {
  let inputValue = input.value;
  span.style.fontSize = inputValue + "px";
}
