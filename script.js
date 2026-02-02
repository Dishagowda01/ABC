/* ===============================
   ELEMENTS
================================ */
const openBtn = document.getElementById("openMessageBtn");
const finalMessage = document.getElementById("finalMessage");
const intro = document.getElementById("intro");

const reels = document.getElementById("reels");
const startBtn = document.getElementById("startBtn");
const music = document.getElementById("bgMusic");

const img = document.getElementById("slideImg");
const video = document.getElementById("slideVideo");

const starsContainer = document.getElementById("stars");
const text = document.getElementById("videoText");


/* ===============================
   OPEN FINAL MESSAGE
================================ */
openBtn.onclick = () => {
  intro.style.display = "none";
  finalMessage.classList.remove("hidden");
  startTyping();
};


/* ===============================
   SLIDES DATA
================================ */
const slides = [
  { type: "img", src: ",photo1.jpeg" },
  { type: "img", src: ",photo2.jpeg" },
  { type: "video", src: ",video1.mp4" },
  { type: "img", src: ",photo3.jpeg" },
  { type: "img", src: ",photo4.jpeg" },
  { type: "img", src: ",photo5.jpeg" },
  { type: "img", src: ",photo6.jpeg" },
  { type: "video", src: ",video3.mp4" },
  { type: "img", src: ",photo7.jpeg" },
  { type: "img", src: ",photo8.jpeg" },
  { type: "video", src: ",video4.mp4" },
  { type: "img", src: ",photo9.jpeg" },
  { type: "img", src: ",photo10.jpeg" },
  { type: "img", src: ",photo11.jpeg" }
];

let index = 0;
let slideDuration = 1200;


/* ===============================
   START SLIDESHOW
================================ */
startBtn.onclick = async () => {
  intro.style.display = "none";
  reels.classList.remove("hidden");

  await new Promise(resolve => {
    if (music.readyState >= 1) resolve();
    else music.onloadedmetadata = resolve;
  });

  await music.play();

  const audioDuration = music.duration || 19;
  slideDuration = (audioDuration * 1000) / slides.length;

  showSlide();
};


/* ===============================
   SHOW SLIDE  ⭐ FIXED HERE
================================ */
function showSlide() {
  img.style.display = "none";
  video.style.display = "none";

  video.pause();
  video.currentTime = 0;

  const slide = slides[index];
  if (!slide) return;

  /* ✅ ALWAYS SHOW TEXT FOR EVERY SLIDE */
  text.classList.remove("hidden");
  text.textContent = `Happiest Birthday Nanduuuuuu, 
              you make life brighter just by being you,
   love you loads 🤍,Miss youuu!`;

  // ===== STYLE THE TEXT =====
  text.style.fontFamily = "'Segoe UI', sans-serif"; // change to any font you want
  text.style.fontSize = "18px"; // adjust size
  text.style.fontWeight = "600"; // optional: make it bold
  text.style.color = "#f7f2f4"; // optional: change color
  text.style.textAlign = "center"; // optional: center the text
  text.style.lineHeight = "1.4"; // optional: spacing between lines

  if (slide.type === "img") {
    img.src = slide.src;
    img.style.display = "block";
  } else {
    video.src = slide.src;
    video.style.display = "block";
    video.play();
  }

  setTimeout(nextSlide, slideDuration);
}



/* ===============================
   NEXT SLIDE
================================ */
function nextSlide() {
  index++;
  if (index >= slides.length) return;
  showSlide();
}


/* ===============================
   TYPING EFFECT (FIXED SPACING)
================================ */
function startTyping() {
  const lines = document.querySelectorAll(".type-line");

  const totalTime = 19000;

  const totalChars = [...lines].reduce(
    (sum, l) => sum + l.textContent.length,
    0
  );

  const speed = totalTime / totalChars;

  let delay = 0;

  lines.forEach(line => {
    const txt = line.textContent;
    line.textContent = "";
    line.style.opacity = 1;

    setTimeout(() => {
      let i = 0;

      const interval = setInterval(() => {
        line.textContent += txt[i];
        i++;

        if (i >= txt.length) clearInterval(interval);
      }, speed);

    }, delay);

    delay += txt.length * speed + 600;
  });
}


/* ===============================
   STARS ANIMATION
================================ */
for (let i = 0; i < 50; i++) {
  const star = document.createElement("span");
  star.style.left = Math.random() * 100 + "%";
  star.style.animationDuration = 8 + Math.random() * 10 + "s";
  star.style.animationDelay = Math.random() * 5 + "s";
  starsContainer.appendChild(star);
}



