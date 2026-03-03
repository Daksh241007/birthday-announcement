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
  const fadeMusic = setInterval(() => {
    if (v < 0.4) {
      v += 0.02;
      music.volume = v;
    } else clearInterval(fadeMusic);
  }, 200);

  screen2.style.display = "none";
  screen3.style.display = "block";
  startSequence();
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
    "bas thodi shaant ho jaati hai",
    " "
  ],
  [
    "aa shaanti rare chhe Aadnya",
    "ane je rare hoy",
    "ene lightly levu na joye",
    " "
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

function startSequence() {
  if (blockIndex >= blocks.length) {
    setTimeout(showBirthday, 1200);
    return;
  }

  if (blockIndex % 2 === 0) {
    showFourAtOnce(blocks[blockIndex]);
  } else {
    showOneByOne(blocks[blockIndex]);
  }
}

function showFourAtOnce(lines) {
  const el = document.getElementById("typeText");
  el.innerHTML = "";

  const p = document.createElement("p");
  p.className = "block";
  p.innerText = lines.join("\n");
  el.appendChild(p);

  setTimeout(() => p.classList.add("show"), 100);

  setTimeout(() => {
    p.classList.add("fade");
  }, 2600);

  setTimeout(() => {
    p.remove();
    blockIndex++;
    startSequence();
  }, 3800);
}

function showOneByOne(lines) {
  const el = document.getElementById("typeText");
  el.innerHTML = "";

  let i = 0;
  const shown = [];

  function revealLine() {
    if (i >= lines.length) {
      setTimeout(() => {
        shown.forEach(b => b.classList.add("fade"));
        setTimeout(() => {
          shown.forEach(b => b.remove());
          blockIndex++;
          startSequence();
        }, 1200);
      }, 2000);
      return;
    }

    const p = document.createElement("p");
    p.className = "block";
    p.innerText = lines[i];
    el.appendChild(p);
    shown.push(p);

    setTimeout(() => p.classList.add("show"), 50);

    i++;
    setTimeout(revealLine, 700);
  }

  revealLine();
}

function showBirthday() {
  const el = document.getElementById("typeText");
  el.innerHTML = "";

  const final = document.createElement("p");
  final.className = "block";
  final.innerText =
    "happy birthday Aadnya 🌙\n\n" +
    "aa year tane thodu zyada shaant mile\n" +
    "thodu zyada kind mile\n" +
    "ane thodu zyada tera lage\n\n" +
    "I’m really, genuinely glad tu exist karti hai.";

  el.appendChild(final);

  setTimeout(() => {
    final.classList.add("show");
    startConfetti();
  }, 300);
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
