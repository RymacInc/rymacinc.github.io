const toggleBtn = document.getElementById("toggleExplore");
const aboutContent = document.getElementById("aboutContent");
const exploreContent = document.getElementById("exploreContent");

toggleBtn.addEventListener("click", function () {
  if (exploreContent.style.display === "none") {
    exploreContent.style.display = "block";
    aboutContent.style.display = "none";
    toggleBtn.innerText = "About Us";
  } else {
    exploreContent.style.display = "none";
    aboutContent.style.display = "block";
    toggleBtn.innerText = "Our Services";
  }
});
const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true, // Allows infinite loop slider
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  // And if you need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
  
  
  
});
