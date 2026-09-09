document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  document.querySelector('.print').addEventListener('click', () => window.print());
  const contents = document.querySelector('.contents');
  contents.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { contents.open = false; }));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') contents.open = false; });
  document.addEventListener('click', event => { if (!contents.contains(event.target)) contents.open = false; });
  const progress = document.querySelector('.progress');
  const updateProgress = () => {
    const range = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = (range > 0 ? Math.min(100, Math.max(0, scrollY / range * 100)) : 0) + '%';
  };
  addEventListener('scroll', updateProgress, {passive:true});
  addEventListener('resize', updateProgress);
  updateProgress();
});
