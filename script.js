const loading = document.querySelector(".loading");
const bg = document.querySelector(".bg");
let load = 0;
let blur = 100;

let int = setInterval(blurring, 30);

function blurring() {
  load++;
  blur--;
  if (load > 99) {
    clearInterval(int);
  }
  loading.style.opacity = blur / 100;

  bg.style.webkitFilter = `blur(${blur}px)`;

  loading.innerHTML = load + "%";
}
