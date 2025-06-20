// Add fade-in animations when elements scroll into view
window.addEventListener('DOMContentLoaded', function () {
  const faders = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  faders.forEach(function (el) {
    observer.observe(el);
  });
});
