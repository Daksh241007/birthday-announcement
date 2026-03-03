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

/* 🔹 MESSAGE BLOCKS (LONG + PERSONAL) */
const blocks = [
  [
    "tu zyada bolti nahi",
    "aur shayad isi wajah se",
    "duniya tujhe thoda miss kar jaati hai",
    ""
  ],
  [
    "log aksar unhe samajhne ki koshish karte hain",
    "jo loud hote hain",
    "jo har jagah dikhte hain",
    "par tu un logon jaisi nahi hai"
  ],
  [
    "tu quietly exist karti hai",
    "aur phir bhi",
    "jab tu kisi jagah hoti hai na",
    "toh cheezein thodi balanced lagne lagti hain"
  ],
  [
    "shayad tujhe khud bhi nahi pata",
    "par tu kisi ke din ka weight",
    "sirf apni presence se",
    "halka kar sakti hai"
  ],
  [
    "tu attention nahi maangti",
    "tu prove nahi karti",
    "tu bas hoti hai",
    "aur wahi kaafi hota hai"
  ],
  [
    "jab tu bolti hai",
    "toh baatein dramatic nahi hoti",
    "koi performance nahi hota",
    "bas sach hota hai"
  ],
  [
    "aur uss sach ke saath",
    "ek ajeeb si shaanti aa jaati hai",
    "",
    ""
  ],
  [
    "aa shaanti rare chhe Aadnya",
    "ane je rare hoy",
    "ene lightly levu na joye",
    ""
  ],
  [
    "tu strong bhi hai",
    "par wo strength show-off wali nahi hai",
    "wo wali hai",
    "jo bina awaaz ke bhi khadi rehti hai"
  ],
  [
    "shayad kabhi kabhi",
    "tujhe lagta ho",
    "ki tu thodi kam bolti hai",
    "thodi zyada feel karti hai"
  ],
  [
    "par sach yeh hai",
    "ki duniya ko zyada logon ki nahi",
    "zyada genuine logon ki zarurat hoti hai",
    ""
  ],
  [
    "aur tu unme se ek hai",
    "",
    "",
    ""
  ],
  [
    "aaj ka din",
    "sirf cake ya wishes ka nahi hai",
    "aaj ka din",
    "us din ka reminder hai"
  ],
  [
    "jab duniya thodi aur behtar ho gayi thi",
    "kyunki tu usme aayi",
    "",
    ""
  ]
];

let blockIndex = 0;

function showBlocks() {
  const el = document.getElementById("typeText");

  if (blockIndex < blocks.length) {
    const text = blocks[blockIndex]
      .filter(line => line !== "")
      .join("\n");

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
    "jahan tujhe explain na karna pade\n\n" +
    "thodu zyada kind mile\n" +
    "jahan tu apni pace pe chal sake\n\n" +
    "ane thodu zyada tera lage\n" +
    "jahan tu bina kisi pressure ke\n" +
    "bas tu reh sake\n\n" +
    "I’m genuinely glad\n" +
    "ki tu exist karti hai.";

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

  setTimeout(() => star.remove(), 2600);
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
