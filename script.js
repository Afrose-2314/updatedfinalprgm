const games = [
  { emoji: "🎨", file: "color.html", instruction: "Type the color name of the font (not the word)!" },
  { emoji: "🔢", file: "guess.html", instruction: "Guess the number between 1 and 100 within 60 seconds." },
  { emoji: "🧠", file: "memory.html", instruction: "Match all card pairs before time runs out!" },
  { emoji: "🎯", file: "typing.html", instruction: "Type the displayed word correctly as fast as you can." }
];

let selectedIndex = 0;

document.getElementById("username").innerText = sessionStorage.getItem("user");

function spinWheel() {
  const angle = 1440 + Math.floor(Math.random() * 360);
  document.getElementById("wheel").style.transform = `rotate(${angle}deg)`;

  const normalizedAngle = angle % 360;
  selectedIndex = Math.floor(normalizedAngle / 90) % 4;

  setTimeout(() => {
    document.getElementById("popup-text").innerText = games[selectedIndex].instruction;
    document.getElementById("popup").style.display = "block";
  }, 4000);
}

function startGame() {
  window.location.href = games[selectedIndex].file;
}
