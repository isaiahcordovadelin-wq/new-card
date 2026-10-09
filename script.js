const addButton = document.querySelector("#profile-toggle");
const profiles = document.querySelector("#profiles");
const emptyState = document.querySelector("#empty-state");
const profileCountLabel = document.querySelector("#profile-count");
let profileCount = 0;
let previousProfileName = "";

const profileOptions = [
  {
    name: "Isaiah Joseph C. Delin",
    initials: "IJD",
    description: "I’m an IT graduate from the Philippines with a passion for technology, problem-solving, and creating practical digital solutions.",
    location: "From the Philippines",
    accent: "#ddff63",
  },
  {
    name: "Mika Santos",
    initials: "MS",
    description: "A sample designer profile who enjoys turning ideas into simple digital experiences.",
    location: "Cebu, Philippines",
    accent: "#f5a18a",
  },
  {
    name: "Noah Reyes",
    initials: "NR",
    description: "A sample IT student profile interested in coding, technology, and solving everyday problems.",
    location: "Manila, Philippines",
    accent: "#cbd5ff",
  },
  {
    name: "Ari Cruz",
    initials: "AC",
    description: "A sample creative profile who enjoys learning new tools and sharing ideas.",
    location: "Davao, Philippines",
    accent: "#bfe2dc",
  },
];

addButton.addEventListener("click", () => {
  profileCount += 1;
  emptyState.hidden = true;
  profileCountLabel.textContent = `${profileCount} profile${profileCount === 1 ? "" : "s"}`;
  const availableProfiles = profileOptions.filter((profile) => profile.name !== previousProfileName);
  const randomIndex = Math.floor(Math.random() * availableProfiles.length);
  const profile = availableProfiles[randomIndex];
  previousProfileName = profile.name;

  const card = document.createElement("article");
  card.className = "profile-card";
  card.setAttribute("aria-label", `Profile ${profileCount}: ${profile.name}`);

  const top = document.createElement("div");
  top.className = "profile-top";

  const number = document.createElement("p");
  number.className = "profile-number";
  number.textContent = `PROFILE ${String(profileCount).padStart(2, "0")}`;

  const location = document.createElement("span");
  location.className = "location";
  location.textContent = profile.location;
  top.append(number, location);

  const body = document.createElement("div");
  body.className = "profile-body";

  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.setAttribute("aria-hidden", "true");
  avatar.style.setProperty("--avatar-color", profile.accent);
  avatar.textContent = profile.initials;

  const copy = document.createElement("div");
  copy.className = "profile-copy";

  const name = document.createElement("h2");
  name.className = "profile-name";
  name.textContent = profile.name;

  const description = document.createElement("p");
  description.className = "bio";
  description.textContent = profile.description;
  copy.append(name, description);
  body.append(avatar, copy);
  card.append(top, body);
  profiles.append(card);
});