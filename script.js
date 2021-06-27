const loading = document.querySelector(".loading");
const bg = document.querySelector(".bg");
let load = 0;
let blur = 100;

let int = setInterval(blurring, 30);

function blurring() {
  load++;
  if (load > 99) {
    clearInterval(int);
  }
  loading.style.opacity = scaleNumber(load, 0, 100, 1, 0);

  bg.style.webkitFilter = `blur(${scaleNumber(load, 0, 100, 30, 0)}px)`;

  loading.innerHTML = load + "%";
}

const scaleNumber = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
