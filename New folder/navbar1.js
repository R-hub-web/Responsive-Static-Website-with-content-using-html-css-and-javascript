const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links-col');

hamburger.addEventListener('click', () => {
	navLinks.classList.toggle('show');
});