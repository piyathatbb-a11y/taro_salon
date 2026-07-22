// header scroll state
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

// mobile menu
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenuBtn = document.getElementById('closeMenuBtn');
hamburgerBtn.addEventListener('click', () => mobileMenu.classList.add('open'));
closeMenuBtn.addEventListener('click', () => mobileMenu.classList.remove('open'));
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

// scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('in');
  });
}, {threshold:.15});
revealEls.forEach(el => io.observe(el));

// before/after slider
const baWrap = document.getElementById('baSlider');
const baAfter = document.getElementById('baAfter');
const baHandle = document.getElementById('baHandle');
let dragging = false;

function setSlider(x){
  const rect = baWrap.getBoundingClientRect();
  let pct = ((x - rect.left) / rect.width) * 100;
  pct = Math.max(0, Math.min(100, pct));
  baAfter.style.clipPath = `inset(0 ${100-pct}% 0 0)`;
  baHandle.style.left = pct + '%';
}
baWrap.addEventListener('mousedown', e => { dragging = true; setSlider(e.clientX); });
window.addEventListener('mousemove', e => { if(dragging) setSlider(e.clientX); });
window.addEventListener('mouseup', () => dragging = false);
baWrap.addEventListener('touchstart', e => { dragging = true; setSlider(e.touches[0].clientX); });
baWrap.addEventListener('touchmove', e => { if(dragging) setSlider(e.touches[0].clientX); });
window.addEventListener('touchend', () => dragging = false);

// ---------- Mouse-follow glow light ----------
const glow = document.getElementById('cursorGlow');
const hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
if (!hasHover) {
  document.body.classList.add('no-hover');
} else {
  let targetX = window.innerWidth / 2;
  let targetY = window.innerHeight / 2;
  let curX = targetX;
  let curY = targetY;

  window.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
  });

  function animateGlow(){
    // lerp for a soft trailing feel
    curX += (targetX - curX) * 0.12;
    curY += (targetY - curY) * 0.12;
    glow.style.transform = `translate(${curX}px, ${curY}px)`;
    requestAnimationFrame(animateGlow);
  }
  animateGlow();
}