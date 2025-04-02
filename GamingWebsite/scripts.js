function selectTheme(theme) {
    if (theme === 'male') {
        document.body.style.backgroundColor = '#0d1b2a';
        document.body.style.color = '#00b4d8';
    } else if (theme === 'female') {
        document.body.style.backgroundColor = '#1e1b28';
        document.body.style.color = '#ff6f91';
    } else if (theme === 'custom') {
        const color = prompt("Enter a custom background color (e.g., #ffcc00):", "#ffffff");
        document.body.style.backgroundColor = color;
        document.body.style.color = '#000';
        localStorage.setItem('customColor', color);
    }

    localStorage.setItem('theme', theme);
    document.getElementById('main-menu').style.display = 'block';
    document.querySelector('.menu-container').style.display = 'none';
}

// Apply saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const theme = localStorage.getItem('theme');
    if (theme === 'male') {
        document.body.style.backgroundColor = '#0d1b2a';
        document.body.style.color = '#00b4d8';
    } else if (theme === 'female') {
        document.body.style.backgroundColor = '#1e1b28';
        document.body.style.color = '#ff6f91';
    } else if (theme === 'custom') {
        const customColor = localStorage.getItem('customColor') || '#ffffff';
        document.body.style.backgroundColor = customColor;
        document.body.style.color = '#000';
    }
});
