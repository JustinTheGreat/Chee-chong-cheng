document.addEventListener('DOMContentLoaded', () => {
    const coverLogo = document.getElementById('cover-logo');
    coverLogo.addEventListener('animationend', () => {
        coverLogo.style.display = 'none';
    });
});