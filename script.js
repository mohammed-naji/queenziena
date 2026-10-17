const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  siteNav.classList.remove("is-open");
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  siteNav.classList.toggle("is-open", !isOpen);
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

const wishButton = document.querySelector(".wish-button");
const wishMessage = document.querySelector(".wish-message");
const wishes = [
  "May every little dream of yours find its way to the stars. ✨",
  "Wishing you a kingdom full of laughter, wonder, and love. ♡",
  "Keep shining, sweet Ziena. Your story is pure magic. ✧",
];
let wishIndex = 0;

wishButton.addEventListener("click", () => {
  wishMessage.textContent = wishes[wishIndex];
  wishIndex = (wishIndex + 1) % wishes.length;
});