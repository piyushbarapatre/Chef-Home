// For slideshow
const slideshowImages = document.querySelectorAll(".slideshow img");
let currentSlide = 0;

function nextSlide() {
  slideshowImages[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slideshowImages.length;
  slideshowImages[currentSlide].classList.add("active");
}

setInterval(nextSlide, 3000);

//For Menu img hover effect
document.addEventListener("DOMContentLoaded", function () {
  const menuBoxes = document.querySelectorAll(".set-menu-box");

  menuBoxes.forEach((box) => {
    const img = box.querySelector("img");

    img.style.transition = "box-shadow 0.3s ease, transform 0.3s ease";

    box.addEventListener("mouseenter", () => {
      img.style.boxShadow = "0 0 1rem #ffd21c";
      img.style.transform = "scale(1.05)";
    });

    box.addEventListener("mouseleave", () => {
      img.style.boxShadow = "none";
      img.style.transform = "scale(1)";
    });
  });
});
