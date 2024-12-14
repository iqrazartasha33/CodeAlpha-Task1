const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const images = document.querySelectorAll('.gallery img');
let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    lightbox.style.display = 'flex';
    updateLightboxImage();
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

function changeImage(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = images.length - 1; 
    } else if (currentIndex >= images.length) {
        currentIndex = 0; 
    }

    updateLightboxImage();
}
function updateLightboxImage() {
    lightboxImage.src = images[currentIndex].src;
}