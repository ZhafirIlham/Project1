/* Typewriter effect for the hero role */
(function () {
  const el = document.getElementById("typewriter");
  if (!el) return;

  const phrases = [
    "Full Stack AI Engineer",
    "AI-Powered App Builder",
    "Clean Architecture Advocate",
    "Modern Web Craftsman",
  ];

  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReduced) {
    el.textContent = phrases[0];
    return;
  }

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = phrases[phraseIndex];

    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        return setTimeout(tick, 1600);
      }
      return setTimeout(tick, 70);
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        return setTimeout(tick, 400);
      }
      return setTimeout(tick, 40);
    }
  }

  tick();
})();
