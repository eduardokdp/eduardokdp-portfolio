function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

function handleResize() {
    const sidebar = document.querySelector('.sidebar');
    if (window.innerWidth > 680) {
        sidebar.style.display = 'none';
    } else {
        sidebar.style.display = 'none';
    }
}
function toggleTheme() {
    const body = document.body;
    const themeToggleIcon = document.getElementById('theme-toggle-icon');
    const sidebarImages = document.querySelectorAll('.sidebar img, .element-header img');
    const closeMenuIcon = document.querySelector('.close-menu');
    const dropMenuIcon = document.querySelector('.drop-menu');

    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        themeToggleIcon.src = '/images/dark-mode.svg';  
        closeMenuIcon.src = closeMenuIcon.getAttribute('data-light');
        dropMenuIcon.src = dropMenuIcon.getAttribute('data-light');
    } else {
        themeToggleIcon.src = '/images/light-mode.svg';  
        closeMenuIcon.src = closeMenuIcon.getAttribute('data-dark');
        dropMenuIcon.src = dropMenuIcon.getAttribute('data-dark');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    handleResize();
    VanillaTilt.init(document.querySelectorAll("[data-tilt]"));

});

window.addEventListener('resize', handleResize);

function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    window.location.href = `mailto:eduardokdp1@gmail.com?subject=Contact from ${name}&body=${encodeURIComponent(message)}%0A%0AFrom: ${name}%0AEmail: ${email}`;

}
