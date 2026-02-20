export function initSplide() {
  const itemsInSlider = () => {
    console.log(window.innerWidth);

    if (1640 >= window.innerWidth && window.innerWidth > 1440) {
      return 4
    }

    if (1440 >= window.innerWidth && window.innerWidth > 850) {
      return 3
    }

    if (window.innerWidth <= 850 && window.innerWidth > 500) {
      return 2
    }

    if (window.innerWidth <= 500) {
      return 1
    }

    return 4.5
  }
    const splide = new window.Splide(".splide", {
      type: "loop",
      perMove: 1,
      perPage: itemsInSlider(),
      gap: "20px",
      pagination: false,
      arrows: false,
      rewind: true,
    }).mount();

    const prevBtn = document.querySelector(".records-custom-arrows__prev");
    const nextBtn = document.querySelector(".records-custom-arrows__next");

    if (prevBtn) prevBtn.addEventListener("click", () => splide.go("<"));
    if (nextBtn) nextBtn.addEventListener("click", () => splide.go(">"));
}
