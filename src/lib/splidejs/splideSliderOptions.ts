import type { SplideProps } from "@splidejs/react-splide";

export const splideSLiderOptions: SplideProps = {
  options: {
    type: "loop",
    perPage: 3,
    perMove: 1,
    gap: 8,
    rewind: true,
    pagination: false,
    arrows: false,
    speed: 450,
    focus: "center",
    autoplay: true,
    interval: 3000, // время между переключениями, мс
  },
};
