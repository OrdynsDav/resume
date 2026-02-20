import { iconLinkArrow } from "./icons/icon-link-arrow.js";

export class Experience {
    constructor(experience) {
        this.experience = experience; // массив проектов
    }

    render() {
        return `
            <section class="experience">
                <div class="container">
                    <h2 class="experience__title title">Работа в проектах</h2>
                    <ul class="experience__list">
                        ${this.experience
                          .filter(item => item && item.id)
                          .map((item) => {
                            return `
                                <li class="experience__item">
                                    <div class="experience-info">
                                        <div class="experience-info__duration">
                                            <span class="experience-info__start">${item.duration.start}</span>
                                            &#8211;
                                            <span class="experience-info__end">${item.duration.end}</span>
                                        </div>
                                        <img class="experience-info__logo" src="${item.logoUrl}" alt="Логотип проекта" />
                                        <div class="experience-info__company">
                                            ${item.title.link == "" ?
                                                `
                                                    <h3 class="experience-info__heading">
                                                        <span class="experience-info__heading-text">${item.title.name}</span>
                                                    </h3>
                                                `
                                            :
                                                `
                                                    <a class="experience-info__heading" href="${item.title.link}" target="_blank" rel="noopener noreferrer">
                                                        <span class="experience-info__heading-text">${item.title.name}</span>
                                                        ${iconLinkArrow()}
                                                    </a>
                                                `}
                                            <p class="experience-info__company-about">${item.about}</p>
                                        </div>
                                        <p class="experience-info__description">${item.goal}</p>
                                    </div>
                                    <div class="experience-tasks">
                                        <p class="experience-tasks__role">${item.role.name}</p>
                                        <p class="experience-tasks__text">Выполнял задачи:</p>
                                        <ul class="experience-tasks__list">
                                            ${item.role.tasks
                                              .filter(task => task.title)
                                              .map((task) => `
                                                <li class="experience-tasks__item">
                                                    ${task.title}
                                                </li>
                                              `).join("")}
                                        </ul>
                                    </div>
                                </li>
                            `;
                        }).join("")}
                    </ul>
                </div>
            </section>
        `;
    }
}