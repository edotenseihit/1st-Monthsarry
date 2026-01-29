// FADE IN
document.body.style.opacity = 0;
window.onload = () => {
  document.body.style.transition = "opacity 1.5s";
  document.body.style.opacity = 1;

  const music = document.getElementById("bgMusic");

  if (music && localStorage.getItem("playMusic") === "yes") {
    // Restore time
    const savedTime = localStorage.getItem("musicTime");
    if (savedTime) {
      music.currentTime = parseFloat(savedTime);
    }

    music.volume = 0.4;
    music.play().catch(() => {});
  }
};

// SAVE MUSIC TIME CONTINUOUSLY
const music = document.getElementById("bgMusic");
if (music) {
  setInterval(() => {
    localStorage.setItem("musicTime", music.currentTime);
  }, 500);
}

// NIGHT MODE
function toggleMode() {
  document.body.classList.toggle("dark");
}

// COUNTDOWN
const countdown = document.getElementById("countdown");
if (countdown) {
  const targetDate = new Date("2025-12-30");
  setInterval(() => {
    const now = new Date();
    const diff = targetDate - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    countdown.innerHTML = `💞 ${days} days with you 💞`;
  }, 1000);
}

// FLOATING HEARTS
const container = document.querySelector(".heart-container");

if (container) {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 6 + Math.random() * 4 + "s";
    container.appendChild(heart);

    setTimeout(() => heart.remove(), 10000);
  }, 800);
}
