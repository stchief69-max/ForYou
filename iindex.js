const message = [
  "Happy Birthday Pr Princess Rina ヾ(＠⌒ー⌒＠)ノ",
  "",
  "Not gonna lie,",
  "this is my first time making something like this because,",
  "I really wanted to create something special just for you",
  "If it ever made you uncomfortable, I’m truly sorry.",
  "",
  "I just wanted to give you this because I really like you.",
  "I think this is also my confession.",
  "",
  "Maybe it’s not surprising because I often say “I love you,”",
  "",
  "but this time I mean it in a deeper way than ever before.",
  "Take care of yourself. Even if there’s no one around you, I’ll always be with you."
];
let i = 0;
let line = 0;

function typeLetter() {
  if (line < message.length) {
    if (i < message[line].length) {
      document.getElementById("letter").innerHTML += message[line].charAt(i);
      i++;
      setTimeout(typeLetter, 40);
    } else {
      document.getElementById("letter").innerHTML += "<br>";
      line++;
      i = 0;
      setTimeout(typeLetter, 500); // pause between lines
    }
  }
}

// Call when surprise opens
function showSurprise() {
  document.getElementById("surprise").classList.remove("hidden");

  // Confetti
  for (let i = 0; i < 50; i++) {
    let confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor =
      "hsl(" + Math.random() * 360 + ", 100%, 50%)";
    document.body.appendChild(confetti);
  }

  // ⭐️ Photo animation delay (stagger effect)
  let photos = document.querySelectorAll(".gallery img");

  photos.forEach((img, index) => {
    setTimeout(() => {
      img.classList.add("show");
    }, index * 400); // delay each photo
  });

  // Start letter typing (if you use it)
  if (typeof typeLetter === "function") {
    typeLetter();
  }
}

// Floating hearts
setInterval(() => {
  let heart = document.createElement("div");
  heart.classList.add("heart");

  heart.innerHTML = "⚆_⚆";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 20 + 20) + "px";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}, 300);