

let games = [
  { emoji: "🎨", file: "color.html", instruction: "🎨 Type the font’s color name (not the word shown)!" },
  { emoji: "🔢", file: "guess.html", instruction: "🔢 Guess a number between 1 and 100." },
  { emoji: "🧠", file: "memory.html", instruction: "🧠 Match all 10 color pairs within 60 seconds!" },
  { emoji: "🎯", file: "typing.html", instruction: "🎯 Type the shown word as fast as you can." },
  { emoji: "➕", file: "math.html", instruction: "➕ Solve simple + - × sums using numbers 0 to 10." }
];

// Shuffle games on each load
games = games.sort(() => Math.random() - 0.5);

document.getElementById("username").innerText = sessionStorage.getItem("user");

const wheel = document.getElementById("wheel");
const segmentCount = games.length;
const anglePerSegment = 360 / segmentCount;

// Clear any existing segments
wheel.innerHTML = "";

// Add all 5 emoji segments spaced evenly
games.forEach((game, i) => {
  const segment = document.createElement("div");
  segment.className = "segment";
  const angle = i * anglePerSegment;

  // Emoji is rotated to face upright and positioned evenly
  segment.style.transform = `rotate(${angle}deg) translate(0, -130px) rotate(${-angle}deg)`;
  segment.innerText = game.emoji;

  wheel.appendChild(segment);
});

let selectedIndex = 0;

function spinWheel() {
  const randomIndex = Math.floor(Math.random() * segmentCount);
  selectedIndex = randomIndex;

  const fullRotations = 5;
  const finalAngle = fullRotations * 360 + (360 - selectedIndex * anglePerSegment - anglePerSegment / 2);

  wheel.style.transition = "transform 4s ease-out";
  wheel.style.transform = `rotate(${finalAngle}deg)`;

  // Show popup after spin completes
  setTimeout(() => {
    document.getElementById("popup-text").innerText = games[selectedIndex].instruction;
    document.getElementById("popup").style.display = "flex";
  }, 4100);
}

function startGame() {
  window.location.href = games[selectedIndex].file;
}
