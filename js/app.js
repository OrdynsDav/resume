import {
  fetchGetEducation,
  fetchGetExperiences,
  fetchGetRecords,
  fetchGetReviews,
  fetchGetSkills,
  fetchGetUser,
} from "./api/fetches.js";
import { Contact } from "./components/Contact.js";
import { Education } from "./components/Education.js";
import { Experience } from "./components/Experience.js";
import { PersonInfo } from "./components/PersonInfo.js";
import { Record } from "./components/Record.js";
import { Reviews } from "./components/Reviews.js";
import { Skills } from "./components/Skils.js";
import { User } from "./components/User.js";
import { initChart } from "./lib/chart.js";
import { initSplide } from "./lib/splide.js";

// 1. Загружаем все данные параллельно
Promise.all([
  fetchGetUser(),
  fetchGetExperiences(),
  fetchGetRecords(),
  fetchGetSkills(),
  fetchGetEducation(),
  fetchGetReviews(),
])
  .then(([user, { experience }, { records }, { skills }, { education }, { reviews }]) => {
    const userData = user;

    const userComponent = new User(userData);
    const personInfoComponent = new PersonInfo(userData);
    const experienceComponent = new Experience(experience);
    const recordComponent = new Record(records);
    const skillsComponent = new Skills();
    const educationComponent = new Education(education);
    const reviewsComponent = new Reviews(reviews);
    const contactComponent = new Contact(userData);

    const main = document.querySelector("main");

    // Порядок: User → PersonInfo → Experience → Record → Skills → Education → Reviews → Contact
    main.insertAdjacentHTML("beforeend", userComponent.render());
    main.insertAdjacentHTML("beforeend", personInfoComponent.render());
    main.insertAdjacentHTML("beforeend", experienceComponent.render());
    main.insertAdjacentHTML("beforeend", recordComponent.render());

    // Инициализация графики после рендера Skills
    const labels = skills.map((skill) => skill.title);
    const values = skills.map((skill) => skill.percent);
    main.insertAdjacentHTML("beforeend", skillsComponent.render());
    initChart(labels, values);

    main.insertAdjacentHTML("beforeend", educationComponent.render());
    main.insertAdjacentHTML("beforeend", reviewsComponent.render());
    main.insertAdjacentHTML("beforeend", contactComponent.render());

    // Инициализация Splide после рендера Record
    initSplide();
  })
  .catch((err) => {
    console.error("Ошибка при загрузке данных:", err);
  });