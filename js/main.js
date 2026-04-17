function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const toggle = document.querySelector('.mobile-island-toggle');
    
    navLinks.classList.toggle('active');
    toggle.classList.toggle('active-toggle');
}