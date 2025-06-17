function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
}
function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = current === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}
function updateThemeIcon(theme) {
    const icon = document.getElementById('theme-icon');
    if (theme === 'dark') {
        icon.textContent = '☀️';
        icon.title = 'الوضع النهاري';
    } else {
        icon.textContent = '🌙';
        icon.title = 'الوضع الليلي';
    }
}
window.onload = function() {
    let saved = localStorage.getItem('theme');
    if (!saved) {
        saved = 'dark';
        localStorage.setItem('theme', 'dark');
    }
    setTheme(saved);
};
