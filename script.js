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
  music.volume = 0;
  music.play();

  let v = 0;
  const fade = setInterval(() => {
    if (v < 0.4) {
      v += 0.02;
      music.volume = v;
    } else clearInterval(fade);
  }, 200);

  screen2.style.display = "none";
  screen3.style.display = "block";
  showBlocks();
}

const blocks = [
  [
    "tu loud nahi hai",
    "tu attention nahi maangti",
    "par phir bhi teri presence",
    "apna space bana leti hai"
  ],
  [
    "jab tu bolti hai",
    "toh cheezein dramatic nahi hoti",
    "bas thodi shaant ho jaati hai"
  ],
  [
    "aa shaanti rare chhe Aadnya",
    "ane je rare hoy",
    "ene lightly levu na joye"
  ],
  [
    "shayad tujhe khud bhi nahi pata",
    "par tu kisi ke din ko",
    "sirf exist karke bhi",
    "thoda better bana sakti hai"
  ],
  [
    "aur aaj",
    "sirf birthday nahi hai",
    "aaj wo din hai",
    "jab duniya thodi lucky hui thi"
  ]
];

let blockIndex = 0;

function showBlocks() {
  const el = document.getElementById("typeText");

  if (blockIndex < blocks.length) {
    const text = blocks[blockIndex].join("\n");

    const p = document.createElement("p");
    p.className = "block";
    p.innerText = text;

    el.appendChild(p);

    setTimeout(() => {
      p.style.opacity = 1;
      p.classList.add("glow");
      spawnStar();

      setTimeout(() => {
        p.classList.remove("glow");
      }, 1200);
    }, 100);

    blockIndex++;
    setTimeout(showBlocks, 2600);
  } else {
    setTimeout(showBirthday, 2000);
  }
}

function showBirthday() {
  const el = document.getElementById("typeText");

  const final = document.createElement("p");
  final.className = "block";
  final.style.marginTop = "30px";
  final.innerText =
    "happy birthday Aadnya 🌙\n\n" +
    "aa year tane thodu zyada shaant mile\n" +
    "thodu zyada kind mile\n" +
    "ane thodu zyada tera lage\n\n" +
    "I’m really, genuinely glad tu exist karti hai.";

  el.appendChild(final);

  setTimeout(() => {
    final.style.opacity = 1;
    final.classList.add("glow");
    startConfetti();
  }, 300);
}

function spawnStar() {
  const star = document.createElement("div");
  star.innerText = "✦";
  star.style.position = "fixed";
  star.style.left = Math.random() * window.innerWidth + "px";
  star.style.top = "-20px";
  star.style.opacity = "0.6";
  star.style.fontSize = "12px";
  star.style.transition = "top 2.5s linear, opacity 2.5s";

  document.body.appendChild(star);

  setTimeout(() => {
    star.style.top = window.innerHeight + "px";
    star.style.opacity = "0";
  }, 50);

  setTimeout(() => {
    star.remove();
  }, 2600);
}

function startConfetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  const dots = Array.from({ length: 40 }, () => ({
    x: Math.random() * canvas.width,
    y: -20,
    v: Math.random() * 3 + 2
  }));

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dots.forEach(d => {
      d.y += d.v;
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(d.x, d.y, 2, 2);
    });
    if (dots.some(d => d.y < canvas.height)) requestAnimationFrame(animate);
  }

  animate();
}
