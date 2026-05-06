let currentIndex = 0;
const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let slideInterval = null;

// Function to move slide
function moveSlide(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  updateSlide();
  resetAutoSlide(); // Restart the interval when manually clicked
}

// Function to update the slide position
function updateSlide() {
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto slide every 5 seconds
function startAutoSlide() {
  slideInterval = setInterval(() => {
    moveSlide(1);
  }, 5000); // 5000ms = 5 seconds
}

// Reset auto-slide when user clicks manually
function resetAutoSlide() {
  clearInterval(slideInterval);
  startAutoSlide();
}

// Start sliding on page load
startAutoSlide();
