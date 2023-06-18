const openNav = document.querySelector("#open-nav");
const moblieNav = document.querySelector("#mobile-nav");
const body = document.querySelector("body");

openNav.addEventListener("click", function () {
  moblieNav.classList.replace("hidden", "block");

  const closeMenu = document.createElement("div");
  closeMenu.setAttribute(
    "class",
    "w-full h-screen bg-black absolute inset-0 opacity-20"
  );
  body.appendChild(closeMenu);
  closeMenu.addEventListener("click", function () {
    moblieNav.classList.replace("block", "hidden");
    closeMenu.setAttribute("class", "hidden");
  });
});

const openFilter = document.querySelector("#open-filter");
const closeFilter = document.querySelector("#close-filter");
const cardFilter = document.querySelector("#card-filter");
const cardsGallery = document.querySelector("#cards-gallery");

closeFilter.addEventListener("click", function () {
  cardFilter.classList.replace("lg:block", "lg:hidden");
  cardsGallery.classList.replace("lg:w-4/5", "lg:w-full");
  closeFilter.classList.add("hidden");
});

openFilter.addEventListener("click", function () {
  cardFilter.classList.replace("lg:hidden", "lg:block");
  closeFilter.classList.replace("hidden", "block");
  cardsGallery.classList.replace("lg:w-full", "lg:w-4/5");
});
