const toggle = document.querySelector("#profile-toggle");
const card = document.querySelector("#profile-card");
const poster = document.querySelector("#poster-art");
const label = toggle.querySelector(".button-label");
const icon = toggle.querySelector(".button-icon");

toggle.addEventListener("click", () => {
  const isOpen = toggle.getAttribute("aria-expanded") === "true";

  toggle.setAttribute("aria-expanded", String(!isOpen));
  card.hidden = isOpen;
  poster.hidden = !isOpen;
  label.textContent = isOpen ? "Get to know me" : "Hide my profile";
  icon.textContent = isOpen ? "+" : "−";
});