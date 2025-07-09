let games = [
  { emoji: "🎨", file: "color.html", instruction: "Type the font's color name, not the word!" },
  { emoji: "🔢", file: "guess.html", instruction: "Guess the number between 1 and 100." },
  { emoji: "🧠", file: "memory.html", instruction: "Match all 10 color pairs before time ends!" },
  { emoji: "🎯", file: "typing.html", instruction: "Type the shown word as fast as you can." },
  { emoji: "➕", file: "math.html", instruction: "Solve easy + - × sums in 60 seconds." }
];

games = games.sort(() => Math.random() - 0.5); // shuffle

document.getElementById("username").innerText = sessionStorage.getItem("user");

const wheel = document.getElementById("wheel");

// Dynamically create wheel segments (perfectly spaced)
games.forEach((game, i) => {
  const angle = i * (360 / games.length);
  const seg = document.createElement("div");
  seg.className = "segment";
  seg.style.transform = `rotate(${angle}deg) translateY(-130px)`;
  seg.innerText = game.emoji;
  wheel.appendChild(seg);
});

let selectedIndex = 0;

function spinWheel() {
  const spinDeg = 1440 + Math.floor(Math.random() * 360);
  wheel.style.transform = `rotate(${spinDeg}deg)`;

  const normalized = spinDeg % 360;
  selectedIndex = Math.floor(normalized / (360 / games.length)) % games.length;

  setTimeout(() => {
    document.getElementById("popup-text").innerText = games[selectedIndex].instruction;
    document.getElementById("popup").style.display = "block";
  }, 4000);
}

function startGame() {
  window.location.href = games[selectedIndex].file;
}
