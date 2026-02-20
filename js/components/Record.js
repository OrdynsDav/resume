import { iconSplideArrow } from "./icons/icon-splide-arrow.js";

export class Record {
  constructor(records) {
    this.records = records;
  }

  render() {
    return `
      <section class="records">
        <div class="container">
          <div class="records__head">
            <h2 class="records__title title">Достижения</h2>
            <div class="records-custom-arrows">
              <button class="records-custom-arrows__prev" aria-label="Prev">${iconSplideArrow()}</button>
              <button class="records-custom-arrows__next" aria-label="Next">${iconSplideArrow()}</button>
            </div>
          </div>
          <div class="splide">
            <div class="splide__track">
              <ul class="splide__list">
                ${this.records
                  .filter((item) => item && item.title)
                  .map((item) => {
                    return `
                      <li class="splide__slide records__item" style="background-image: url(${item.backgroundUrl})">
                        <span class="records__text">${item.title}</span>
                      </li>
                    `;
                  })
                  .join("")}
              </ul>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}