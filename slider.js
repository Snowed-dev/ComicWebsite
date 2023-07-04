// Get references to the HTML elements
const imageElement = document.getElementById('comic-image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

// Array of comic images
const images = ['comic1.jpeg', 'comic2.jpeg'];
let currentIndex = 0;

// Function to update the image source
function updateImage() {
  imageElement.src = images[currentIndex];
}

// Event listeners for button clicks
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

// Initial image update
updateImage();
