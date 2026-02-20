import { sanitize } from "../helpers/sanitize.js";
import { iconUser } from "./icons/icon-user.js";

export class User {
  constructor(user) {
    this.name = sanitize(user.name);
    this.surname = sanitize(user.surname);
    this.profession = sanitize(user.profession);
    this.photoUrl = sanitize(user.photoUrl);
    this.about = sanitize(user.about);
    this.portfolio = sanitize(user.portfolio);
    this.telegram = sanitize(user.social.telegram.link);
  }

  render() {
    const userPhoto = () => {
      if (this.photoUrl !== "") {
        return `
            <img class="user-inner__img" src="${this.photoUrl}" alt="Фото пользователя">
        `;
      } else {
        return iconUser();
      }
    };
    return `
            <section class="user">
                <div class="container">
                    <article class="user-inner">
                        <div class="user-inner__description">
                            <h1 class="user-inner__fullname">${this.surname} ${this.name}</h1>
                            <p class="user-inner__profession">${this.profession}</p>
                            <p class="user-inner__text">${this.about}</p>
                            <div class="user-inner__actions">
                                <a class="user-inner__link" href="${this.telegram}" target="_blank" rel="noopener noreferrer">
                                    Связаться
                                </a>
                                <a class="user-inner__link user-inner__link--transparent" href="${this.portfolio}" target="_blank"
                                    rel="noopener noreferrer">
                                    Портфолио
                                </a>
                            </div>
                        </div>
                        <div class="user-inner__photo">
                            ${userPhoto()}
                        </div>
                    </article>
                </div>
            </section>
    `;
  }
}
