const gloSlide = document.querySelector(".glo-slide");
const gloImages = document.querySelectorAll(".glo-slide img");

//buttons//
const prevBtn = document.querySelector("#btn-prev");
const nextBtn = document.querySelector("#btn-next");

//counter//
let counter = 1;
const size = gloImages[0].clientWidth;

gloSlide.style.transform = "translateX(" + -size * counter + "px)";

//Button Listeners//

nextBtn.addEventListener("click", () => {
  if (counter >= gloImages.length - 1) return;
  gloSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  gloSlide.style.transform = "translateX(" + -size * counter + "px)";
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  gloSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  gloSlide.style.transform = "translateX(" + -size * counter + "px)";
});

gloSlide.addEventListener("transitionend", () => {
  if (gloImages[counter].id === "last-clone") {
    gloSlide.style.transition = "none";
    counter = gloImages.length - 2;
    gloSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (gloImages[counter].id === "first-clone") {
    gloSlide.style.transition = "none";
    counter = gloImages.length - counter;
    gloSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});
