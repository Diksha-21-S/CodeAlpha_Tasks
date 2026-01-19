let galleryImages = document.querySelectorAll('.gallery img');
let lightbox = document.getElementById('lightbox');
let preview = document.getElementById('preview');
let currentIndex = 0;

function openLightbox(img) {
  currentIndex = Array.from(galleryImages).indexOf(img);
  preview.src = img.src;
  lightbox.style.display = 'block';
}

function closeLightbox() {
  lightbox.style.display = 'none';
}

function changeImage(dir) {
  currentIndex += dir;
  if (currentIndex < 0) currentIndex = galleryImages.length - 1;
  if (currentIndex >= galleryImages.length) currentIndex = 0;
  preview.src = galleryImages[currentIndex].src;
}
