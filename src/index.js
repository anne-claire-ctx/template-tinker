const btn1 = document.querySelector(".post1");
const slider1 = document.querySelector("#slider1");
const btn2 = document.querySelector(".post2");
const slider2 = document.querySelector("#slider2");
const btn3 = document.querySelector(".post3");
const slider3 = document.querySelector("#slider3");
const btn4 = document.querySelector(".post4");
const slider4 = document.querySelector("#slider4");

btn1.addEventListener("click", () => {
  slider1.classList.toggle("show");
  slider2.classList.toggle("hidden");
  slider3.classList.toggle("hidden");
  slider4.classList.toggle("hidden");
});

btn2.addEventListener("click", () => {
  slider1.classList.toggle("hidden");
  slider2.classList.toggle("show");
  slider3.classList.toggle("hidden");
  slider4.classList.toggle("hidden");
});

btn3.addEventListener("click", () => {
  slider1.classList.toggle("hidden");
  slider2.classList.toggle("hidden");
  slider3.classList.toggle("show");
  slider4.classList.toggle("hidden");
});

btn4.addEventListener("click", () => {
  slider1.classList.toggle("hidden");
  slider2.classList.toggle("hidden");
  slider3.classList.toggle("hidden");
  slider4.classList.toggle("show");
});
