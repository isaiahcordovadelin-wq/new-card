const addButton = document.querySelector("#profile-toggle");
const profiles = document.querySelector("#profiles");
let profileCount = 0;

addButton.addEventListener("click", () => {
  profileCount += 1;

  const card = document.createElement("article");
  card.className = "profile-card";
  card.setAttribute("aria-label", `Profile ${profileCount}: Isaiah Joseph C. Delin`);

  const number = document.createElement("p");
  number.className = "profile-number";
  number.textContent = `Profile ${profileCount}`;

  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.setAttribute("aria-hidden", "true");
  avatar.textContent = "IJD";

  const name = document.createElement("h2");
  name.textContent = "Isaiah Joseph C. Delin";

  const description = document.createElement("p");
  description.className = "bio";
  description.textContent = "I’m an IT graduate from the Philippines with a passion for technology, problem-solving, and creating practical digital solutions.";

  const location = document.createElement("p");
  location.className = "location";
  location.textContent = "From the Philippines";

  card.append(number, avatar, name, description, location);
  profiles.append(card);
});