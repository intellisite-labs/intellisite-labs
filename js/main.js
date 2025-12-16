// IntelliSite Labs – Premium Interactions

// Navbar scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('nav-scrolled');
  } else {
    navbar.classList.remove('nav-scrolled');
  }
});

// Simple fade-in animation on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('opacity-100', 'translate-y-0');
    }
  });
}, { threshold: 0.1 });

// Observe sections
const sections = document.querySelectorAll('section');
sections.forEach(section => {
  section.classList.add('opacity-0', 'translate-y-6', 'transition-all', 'duration-700');
  observer.observe(section);
});
