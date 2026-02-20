import { sanitize } from "../helpers/sanitize.js"

export class PersonInfo {
    constructor(user) {
        this.name = sanitize(user.name)
        this.surname = sanitize(user.surname)
        this.patronymic = sanitize(user.patronymic)
        this.citizenship = sanitize(user.citizenship)
        this.cityName = sanitize(user.city.name)
        this.cityStatus = sanitize(user.city.status)
        this.telegramLink = sanitize(user.social.telegram.link)
        this.telegramName = sanitize(user.social.telegram.name)
        this.mailLink = sanitize(user.social.email.link)
        this.mailName = sanitize(user.social.email.name)
        this.phone = sanitize(user.social.phone)
    }

    render() {
        const phoneHref = this.phone.replace(/[-()]/g, "")
        return `
            <section class="person-info">
                <div class="container">
                    <h2 class="person-info__title title">Основная информация</h2>
                    <div class="person-info__wrapper">
                        <ul class="person-info__list">
                            <li class="person-info__item">
                                <span class="person-info__head">ФИО</span>
                                <span class="person-info__text">${this.surname} ${this.name} ${this.patronymic}</span>
                            </li>
                            <li class="person-info__item">
                                <span class="person-info__head">Гражданство</span>
                                <span class="person-info__text">${this.citizenship}</span>
                            </li>
                            <li class="person-info__item">
                                <span class="person-info__head">Город проживания</span>
                                <div class="person-info__description">
                                    <span class="person-info__text">${this.cityName}</span>
                                    <span class="person-info__status">${this.cityStatus}</span>
                                </div>
                            </li>
                        </ul>
                        <ul class="social social__list">
                            <li class="social__item">
                                <span class="social__head">Telegram</span>
                                <a class="social__text" href="${this.telegramLink}">${this.telegramName}</a>
                            </li>
                            <li class="social__item">
                                <span class="social__head">Почта</span>
                                <a class="social__text" href="mailto:${this.mailLink}">${this.mailName}</a>
                            </li>
                            <li class="social__item">
                                <span class="social__head">Телефон</span>
                                <a class="social__text" href="tel:${phoneHref}">${this.phone}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        `
    }
}