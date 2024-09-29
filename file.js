//JavaScript for adding interactivity to the navigation menu
window.addEventListener('scroll', function() {
	const navbar = document.getElementById('navbar');
	if (window.scrolly > 50) {
		navbar.classList.add('scrolled');
	} else {
		navbar.classList.remove('scrolled');
	}
});
//Adding hover effect for menu items
const navlinks = document.querySelectorAll('.nav-links a');
navlinks.forEach(link => {
	link.addEventListener('mouseover', () => {
		link.style.color = '#ff0';
	});
	link.addEventListener('mouseout', () => {
		link.style.color = '';
	});
});
