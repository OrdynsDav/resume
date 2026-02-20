import { wrapLabel } from "../helpers/wrapLabel.js";

export function initChart(labels, values) {
  const canvas = document.querySelector(".skills-radar__canvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    const rawValues = values;
    const values010 = rawValues.map((v) => +(v / 10).toFixed(1));

    const fontSize = () => {
      if (600 >= window.innerWidth && window.innerWidth > 500) {
        return 12;
      }

      if (500 >= window.innerWidth && window.innerWidth > 400) {
        return 10;
      }

      if (400 >= window.innerWidth) {
        return 8;
      }

      return 14;
    };

    const padding = () => {
      if (850 >= window.innerWidth && window.innerWidth > 600) {
        return 8;
      }

      if (600 >= window.innerWidth && window.innerWidth > 500) {
        return 6;
      }

      if (500 >= window.innerWidth) {
        return 0;
      }

      return 12;
    };
    
    new window.Chart(ctx, {
      type: "radar",
      data: {
        labels: labels,
        datasets: [
          {
            data: values010,
            backgroundColor: "transparent",
            borderColor: "#2E3192",
          },
        ],
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          r: {
            beginAtZero: true,
            min: 0,
            max: 10,
            ticks: { display: true, stepSize: 5 },
            pointLabels: {
              color: "#373737",
              font: {
                size: fontSize(),
                family: "Raleway, sans-serif",
              },
              padding: padding(),
              lineHeight: 1.2,
              textAlign: "center",
              callback: function (label) {
                return wrapLabel(label, 12);
              },
            },
          },
        },
      },
    });
  }
}
