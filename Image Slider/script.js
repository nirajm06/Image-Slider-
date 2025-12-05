let images = [
    "https://picsum.photos/id/10/600/600",
    "https://picsum.photos/id/20/600/600",
    "https://picsum.photos/id/30/600/600",
    "https://picsum.photos/id/40/600/600",
    "https://picsum.photos/id/50/600/600",

];

let index = 0;
const slider = document.getElementById("slider");
slider.src = images[index];

function nextImage() {
    index = (index + 1) % images.length;
    fadeImage();
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    fadeImage();
}

function fadeImage() {
    slider.style.opacity = 0;
    setTimeout(() => {
        slider.src = images[index];
        slider.style.opacity = 1;
    }, 300);
}
