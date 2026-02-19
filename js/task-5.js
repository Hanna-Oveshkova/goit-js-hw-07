function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnChangeColor = document.querySelector("button.change-color");
const spanColor = document.querySelector("span.color");
btnChangeColor.addEventListener("click", () => {
  const color = getRandomHexColor(); // генеруємо новий колір
  document.body.style.backgroundColor = color; // змінюємо фон через інлайн-стиль
  spanColor.textContent = color; // записуємо hex-код у span
});
