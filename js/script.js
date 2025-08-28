// Toggle navigation menu for mobile
const toggleButton = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Example function: animate hero text on load
function animateHeroText() {
    const heroText = document.querySelector('.hero-text h1');
    heroText.style.transform = "translateY(-20px)";
    heroText.style.opacity = "0";
    setTimeout(() => {
        heroText.style.transition = "all 1s ease-in-out";
        heroText.style.transform = "translateY(0)";
        heroText.style.opacity = "1";
    }, 100);
}

// Call on page load
window.addEventListener('load', animateHeroText);
