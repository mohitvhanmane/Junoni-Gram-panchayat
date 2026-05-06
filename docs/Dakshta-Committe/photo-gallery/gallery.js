const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

// Open image
images.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "block";
        lightboxImg.src = img.src;
    });
});

// Close on X click
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Close on background click
lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = "none";
    }
});