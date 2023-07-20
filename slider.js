const imageElement = document.getElementById("comic-image");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const backButton = document.getElementById("back-button")
// Array of comic images
const images = ["comic1.jpeg", "comic2.jpeg","ukulolo.png"];
let currentIndex = 0;

// Function to update the image source
function updateImage() {
  imageElement.src = images[currentIndex];
}

// Event listeners for button clicks
prevButton.addEventListener("click", () => {
  if (currentIndex === 0) return;
  currentIndex--;
  updateImage();
});

nextButton.addEventListener("click", () => {
  if (currentIndex === images.length - 1) return;
  currentIndex++;
  updateImage();
});
backButton.addEventListener("click", () => {
    window.location.href = "index.html";
});
  
// Initial image update
updateImage();