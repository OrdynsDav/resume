import { iconMail } from "./icons/icon-mail.js";
import { iconTelegram } from "./icons/icon-telegram.js";
import { iconUser } from "./icons/icon-user.js";
import { iconVK } from "./icons/icon-vk.js";

export class Contact {
  constructor(user) {
    this.telegram = user.social.telegram
    this.email = user.social.email
    this.vk = user.social.vk
    this.phone = user.social.phone
    this.photoUrl = user.photoUrl
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
    const phoneHref = this.phone.replace(/[-()]/g, "");

    return `
    <section class="contact">
      <div class="container">
        <div class="contact__wrapper">
          <div class="contact__info">
            <h2 class="contact__title title">Давайте работать вместе!</h2>
            <p class="contact__text">Напишите или позвоните мне:</p>
            <div class="social">
              <ul class="social__list">
                <li class="social__item">
                  <span class="social__head">Telegram</span>
                  <a class="social__text" href="${this.telegram.link}">${this.telegram.name}</a>
                </li>
                <li class="social__item">
                  <span class="social__head">Почта</span>
                  <a class="social__text" href="mailto:${this.email.link}">${this.email.name}</a>
                </li>
                <li class="social__item">
                  <span class="social__head">Телефон</span>
                  <a class="social__text" href="tel:+${phoneHref}">${this.phone}</a>
                </li>
              </ul>
            </div>
            <div class="contact__network">
              <ul class="contact__list">
                <li class="contact__item">
                  <a href="${this.telegram.link}" class="contact__link">
                    ${iconTelegram()}
                  </a>
                </li>
                <li class="contact__item">
                  <a href="${this.vk}" class="contact__link">
                    ${iconVK()}
                  </a>
                </li>
                <li class="contact__item">
                  <a href="mailto:${this.email.link}" class="contact__link">
                    ${iconMail()}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="contact__photo">
            ${userPhoto()}
          </div>
        </div>
      </div>
    </section>
    `
  }
}
