const btn = document.getElementById("show-menu");
const menu = document.querySelector(".mobile-menu");
btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    menu.classList.toggle("transition");
    menu.classList.toggle("delay-150");
    menu.classList.toggle("duration-300");
});