// Navmenu Manupulation
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

//Mouse Movement Hero Animation
const hero = document.querySelector("#hero");
hero.addEventListener("mousemove", function (event) {
  const x = event.clientX;
  const y = event.clientY;

  console.log(x, y);
});

//Filter Menu Manupulation
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

//Mixitup
let mixer = mixitup(cardsGallery, {
  selectors: {
    target: ".mix",
  },
  controls: {
    toggleLogic: "or",
  },
});

//Search Filter
const searchFilter = document.querySelector("#search-filter");
searchFilter.addEventListener("keyup", function (event) {
  let matchingElements = [];
  const searchTerm = searchFilter.value.trim().toLowerCase();
  if (searchTerm !== "") {
    var mixElements = document.querySelectorAll(".mix");

    mixElements.forEach(function (element) {
      var title = element.querySelector("h3").textContent.toLowerCase();

      // Add item to be filtered out if input text matches items inside the title
      if (title.includes(searchTerm)) {
        matchingElements.push(element);
      } else {
        // Remove any previously matched item
        var index = matchingElements.indexOf(element);
        if (index > -1) {
          matchingElements.splice(index, 1);
        }
      }
    });

    console.log(matchingElements);
    mixer.filter(matchingElements);
  } else {
    // Reset the filter to show all items if input is empty
    mixer.filter("all");
  }
});
