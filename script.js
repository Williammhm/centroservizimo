// Scroll to Top Button Logic
const btn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  btn.style.display = window.scrollY > 300 ? "block" : "none";
});

btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetID);
    if (!targetElement) return;

    const navHeight = document.querySelector('nav').offsetHeight;
    const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - navHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});

