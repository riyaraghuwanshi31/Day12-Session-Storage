document.addEventListener('DOMContentLoaded', (event) => {
    // Load the saved theme from session storage when the page loads
    const savedTheme = sessionStorage.getItem('theme');
    if (savedTheme) {
        document.getElementById('theme').value = savedTheme;
        applyTheme(savedTheme);
    }
});

function saveTheme() {
    const theme = document.getElementById('theme').value;
    sessionStorage.setItem('theme', theme);
    applyTheme(theme); 
} 

function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
}
