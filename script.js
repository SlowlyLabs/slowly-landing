/* Slowly landing — tiny vanilla helpers.
   Two behaviours: (1) staggered reveal of engine-trace lines on scroll,
   (2) intersection-observer fade-up for sections marked .reveal and the
   strike-through list. Honours prefers-reduced-motion. */

(function () {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Mark sections + strike items as reveal candidates.
  document.querySelectorAll('main > section, .strikelist li').forEach(el => {
    if (!el.id || el.id !== 'hero') el.classList.add('reveal');
  });

  if (prefersReduced || !('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-on'));
    document.querySelectorAll('.trace__line').forEach(el => el.classList.add('is-on'));
    return;
  }

  // 2. Generic reveal observer.
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Stagger strikelist items if this is the parent
        if (entry.target.classList.contains('strikelist')) {
          [...entry.target.children].forEach((li, i) => {
            setTimeout(() => li.classList.add('is-on'), 120 + i * 70);
          });
        } else {
          entry.target.classList.add('is-on');
        }
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -4% 0px' });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  const strikelist = document.querySelector('.strikelist');
  if (strikelist) io.observe(strikelist);

  // 3. Engine trace — line-by-line staggered reveal.
  const traceWrap = document.getElementById('trace-lines');
  if (traceWrap) {
    const lines = [...traceWrap.querySelectorAll('.trace__line')];
    const traceIo = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          lines.forEach((line, i) => {
            setTimeout(() => line.classList.add('is-on'), 220 + i * 540);
          });
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    traceIo.observe(traceWrap);
  }
})();
