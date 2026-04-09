const burger = document.querySelector(".burger");
const menu = document.querySelector(".burgerMenu");
burger.addEventListener("click", (event) => {
  menu.classList.toggle("active");
  event.stopPropagation();
});
window.addEventListener("click", () => menu.classList.remove("active"));
menu.addEventListener("click", (event) => event.stopPropagation());
