const games = [
  { emoji: "🎨", file: "color.html", instruction: "🎨 Type the font’s color name (not the word shown)!" },
  { emoji: "🔢", file: "guess.html", instruction: "🔢 Guess a number between 1 and 100." },
  { emoji: "🧠", file: "memory.html", instruction: "🧠 Match all 10 color pairs within 60 seconds!" },
  { emoji: "🎯", file: "typing.html", instruction: "🎯 Type the shown word as fast as you can." },
  { emoji: "➕", file: "math.html", instruction: "➕ Solve simple + - × sums using numbers 0 to 10." }
];

// Shuffle games randomly
const shuffledGames = games.sort(() => Math.random() - 0.5);
const wheel = document.getElementById("wheel");
const anglePerSegment = 360 / shuffledGames.length;

// Clear wheel
wheel.innerHTML = "";

// Add emoji segments
shuffledGames.forEach((game, i) => {
  const segment = document.createElement("div");
  segment.className = "segment";
  const angle = i * anglePerSegment;
  segment.style.transform = `rotate(${angle}deg) translate(0, -120px) rotate(${-angle}deg)`;
  segment.textContent = game.emoji;
  wheel.appendChild(segment);
});

// Display username from session
const username = sessionStorage.getItem("user");
if (!username) {
  window.location.href = "login.html";
} else {
  document.getElementById("username").textContent = username;
}

let selectedIndex = 0;

function spinWheel() {
  const fullRotations = 5;
  selectedIndex = Math.floor(Math.random() * shuffledGames.length);
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
