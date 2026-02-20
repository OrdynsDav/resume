import { getPluralForm } from "../helpers/getPluralForm.js"

export class Reviews {
  constructor(reviews) {
    this.videos = reviews.videos
    this.comments = reviews.comments
  }

  render() {

    return `
    <section class="reviews">
      <div class="container">
        <h2 class="reviews__title title">Отзывы коллег</h2>
        <ul class="reviews__video-list">
        <ul class="reviews-comments__list">
        ${this.comments.map((comment) => {
            return `
                <li class="reviews-comments__item">
                    <h3 class="reviews-comments__title">${comment.title}</h3>
                    <span class="reviews-comments__agreed">+ ${comment.agree} ${getPluralForm(comment.agree)}</span>
                </li>
            `
        }).join('')}
        </ul>
      </div>
    </section>
    `
  }
}
