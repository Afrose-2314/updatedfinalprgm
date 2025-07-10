const games = [
  { emoji: "🎨", file: "color.html", instruction: "🎨 Type the font’s color name (not the word shown)!" },
  { emoji: "🔢", file: "guess.html", instruction: "🔢 Guess a number between 1 and 100." },
  { emoji: "🧠", file: "memory.html", instruction: "🧠 Match all 10 color pairs within 60 seconds!" },
  { emoji: "➕", file: "math.html", instruction: "➕ Solve simple + - × sums using numbers 0 to 10." },
  { emoji: "🧠", file: "acronym.html", instruction: "🧠 Choose the correct full form of the acronym." }
];

// Shuffle for each spin
const shuffledGames = games.sort(() => Math.random() - 0.5);
const wheel = document.getElementById("wheel");
const anglePerSegment = 360 / shuffledGames.length;

wheel.innerHTML = ""; // Clear old emojis

shuffledGames.forEach((game, i) => {
  const segment = document.createElement("div");
  segment.className = "segment";
  const angle = i * anglePerSegment;
  segment.style.transform = `rotate(${angle}deg) translate(0, -120px) rotate(${-angle}deg)`;
  segment.textContent = game.emoji;
  wheel.appendChild(segment);
});

const username = sessionStorage.getItem("user");
if (!username) {
  window.location.href = "login.html";
} else {
  document.getElementById("username").textContent = username;
}

let selectedIndex = 0;

function spinWheel() {
  selectedIndex = Math.floor(Math.random() * shuffledGames.length);
  const fullRotations = 5;
  const rotationDegrees = fullRotations * 360 + (360 - selectedIndex * anglePerSegment - anglePerSegment / 2);

  wheel.style.transition = "transform 4s ease-out";
  wheel.style.transform = `rotate(${rotationDegrees}deg)`;

  setTimeout(() => {
    document.getElementById("popup-text").textContent = shuffledGames[selectedIndex].instruction;
    document.getElementById("popup").style.display = "flex";
  }, 4100);
}

function startGame() {
  window.location.href = shuffledGames[selectedIndex].file;
}
