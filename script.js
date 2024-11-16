//JQuery
const right = $(".right");
const left = $(".left");

right.hover(
    () => {
  $(".container").addClass("hover-right");
},
    () => {
  $(".container").removeClass("hover-right");
}
);

left.hover(
    () => {
  $(".container").addClass("hover-left");
},
    () => {
  $(".container").removeClass("hover-left");
}
);

//Vanilla JS
const lefts = document.querySelector(".left")
const rights = document.querySelector(".right")
const container = document.querySelector(".container")

lefts.addEventListener("mouseenter", () => container.classList.add("hover-left"))
lefts.addEventListener("mouseleave", () => container.classList.remove("hover-left"))

rights.addEventListener("mouseenter", () => container.classList.add("hover-right"))
rights.addEventListener("mouseleave", () => container.classList.remove("hover-right"))