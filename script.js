// script.js

const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");

function next() {
  screen1.style.display = "none";
  screen2.style.display = "block";
}

function reply() {
  const music = document.getElementById("bgMusic");
  music.volume = 0.4;
  music.play();

  screen2.style.display = "none";
  screen3.style.display = "block";
  startTyping();
}

const lines = [
  "tu zyada bolti nahi",
  "shayad isliye log tujhe",
  "poori tarah samajh nahi paate",
  "",
  "par jo thoda sa paas aata hai na",
  "usey pata chal jaata hai",
  "ki tu kitni genuine hai",
  "",
  "tu loud nahi hai",
  "tu attention nahi maangti",
  "par phir bhi teri presence",
  "apna space bana leti hai",
  "",
  "jab tu bolti hai",
  "toh cheezein dramatic nahi hoti",
  "bas thodi shaant ho jaati hai",
  "",
  "aa shaanti rare chhe Aadnya",
  "ane je rare hoy",
  "ene lightly levu na joye",
  "",
  "shayad tujhe khud bhi nahi pata",
  "par tu kisi ke din ko",
  "sirf exist karke bhi",
  "thoda better bana sakti hai",
  "",
  "aur aaj",
  "sirf birthday nahi hai",
  "aaj wo din hai",
  "jab duniya thodi lucky hui thi"
];

let lineIndex = 0;
let charIndex = 0;

function startTyping() {
  const el = document.getElementById("typeText");

  if (lineIndex < lines.length) {
    if (charIndex < lines[lineIndex].length) {
      el.innerHTML += lines[lineIndex][charIndex++];
      setTimeout(startTyping, 40);
    } else {
      el.innerHTML += "\n";
      lineIndex++;
      charIndex = 0;
      setTimeout(startTyping, 450);
    }
  } else {
    setTimeout(showBirthday, 1400);
  }
}

function showBirthday() {
  const el = document.getElementById("typeText");
  el.innerHTML +=
    "\n\nhappy birthday Aadnya 🌙\n" +
    "aa year tane thodu zyada shaant mile\n" +
    "thodu zyada kind mile\n" +
    "ane thodu zyada tera lage\n\n" +
    "bas etlu kehvu hatu —\n" +
    "I’m really, genuinely glad tu exist karti hai.";
  startConfetti();
}

function startConfetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = Array.from({ length: 40 }, () => ({
    x: Math.random() * canvas.width,
    y: -20,
    v: Math.random() * 3 + 2
  }));

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.y += p.v;
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(p.x, p.y, 2, 2);
    });
    if (particles.some(p => p.y < canvas.height)) {
      requestAnimationFrame(animate);
    }
  }

  animate();
}
