// alert("ca marche ");

document.addEventListener('DOMContentLoaded' , function () {
    const monImage = document.getElementById('image');

    monImage.addEventListener('click', function() {
        // Anime l'image pour l'explosion
        monImage.style.transition = 'transform 1s, opacity 0.5s';
        monImage.style.transform = 'scale(2) rotate(360deg)';
        monImage.style.opacity = '0';
});
});