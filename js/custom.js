document.addEventListener("DOMContentLoaded", function () {
  const carouselWrapper = document.querySelector(".carousel-wrapper");
  const items = document.querySelectorAll(".carousel-item");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  let currentIndex = 0;
  const itemCount = items.length;
  const visibleItems =
    window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;

  function updateCarousel() {
    const itemWidth =
      carouselWrapper.querySelector(".carousel-item").offsetWidth;
    carouselWrapper.style.transform = `translateX(-${
      currentIndex * itemWidth
    }px)`;
  }

  function loopItems() {
    if (currentIndex >= itemCount - visibleItems) {
      currentIndex = 0;
    } else if (currentIndex < 0) {
      currentIndex = itemCount - visibleItems;
    }
    updateCarousel();
  }

  nextButton.addEventListener("click", () => {
    currentIndex++;
    loopItems();
  });

  prevButton.addEventListener("click", () => {
    currentIndex--;
    loopItems();
  });

  window.addEventListener("resize", updateCarousel);
  updateCarousel();

  
});
