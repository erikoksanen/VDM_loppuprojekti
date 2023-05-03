

/*const links = document.querySelectorAll('.linkki');

const timeline = new ScrollTimeline({
  scrollSource: document.scrollingElement,
  orientation: 'block',
  timeRange: 0.5,
  startScrollOffset: '0%',
  endScrollOffset: '100%',
  fill: 'both',
  easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  stagger: 0.1,
  onInstanceCreated: instance => {
    instance.effect.target.classList.add('show');
  },
});

links.forEach(link => {
  link.animate([], timeline);
});*/

const observer = new IntersectionObserver((entries) => {
    entries.foreach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.linkki');
hiddenElements.forEach((el) => observer(el));