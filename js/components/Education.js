export class Education {
  constructor(education) {
    this.education = education;
  }

  render() {
    return `
        <section class="education">
            <div class="container">
                <div class="education__wrapper">
                    <h2 class="education__title title">Образование</h2>
                    <ul class="education__list">
                    ${this.education
                      .filter((item) => item && item.id)
                      .map((item) => {
                        return `
                            <li class="education__item">
                                <div class="education__duration">
                                    <span class="education__start">${item.duration.start}</span>
                                    &#8211;
                                    <span class="education__end">${item.duration.end}</span>
                                </div>
                                <h3 class="education__subtitle">${item.title}</h3>
                                <p class="education__place">${item.place}</p>
                            </li>`
                      })}
                    </ul>
                </div>
            </div>
        </section>;
    `;
  }
}
