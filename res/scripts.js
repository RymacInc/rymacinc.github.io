const images = document.querySelectorAll(".fade-image");

window.addEventListener("scroll", fadeInOut);

function fadeInOut() {
  images.forEach((img) => {
    const imgTop = img.offsetTop;
    const imgHeight = img.clientHeight;
    const windowBottom = window.innerHeight + window.scrollY;

    if (
      imgTop < windowBottom - imgHeight / 2 &&
      imgTop + imgHeight > window.scrollY + imgHeight / 2
    ) {
      img.style.opacity = "1";
    } else {
      img.style.opacity = "0";
    }
  });
}

// Initial call to function to adjust opacities based on starting scroll position
fadeInOut();

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
