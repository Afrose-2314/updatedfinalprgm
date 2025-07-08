const games = [
  { emoji: "🎨", file: "color.html", instruction: "Type the font's color name, not the word!" },
  { emoji: "🔢", file: "guess.html", instruction: "Guess the number between 1 and 100." },
  { emoji: "🧠", file: "memory.html", instruction: "Match all 10 color pairs before time ends!" },
  { emoji: "🎯", file: "typing.html", instruction: "Type the shown word as quickly as possible." },
  { emoji: "➕", file: "math.html", instruction: "Solve simple math sums in 60 seconds." }
];

let selectedIndex = 0;

document.getElementById("username").innerText = sessionStorage.getItem("user");

function spinWheel() {
  const spinDegrees = 1440 + Math.floor(Math.random() * 360);
  document.getElementById("wheel").style.transform = `rotate(${spinDegrees}deg)`;

  const normalized = spinDegrees % 360;
  selectedIndex = Math.floor(normalized / 72) % 5;

  setTimeout(() => {
    document.getElementById("popup-text").innerText = games[selectedIndex].instruction;
    document.getElementById("popup").style.display = "block";
  }, 4000);
}

function startGame() {
  window.location.href = games[selectedIndex].file;
}
