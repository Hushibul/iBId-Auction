// Navmenu Manupulation
const openNav = document.querySelector("#open-nav");
const moblieNav = document.querySelector("#mobile-nav");
const body = document.querySelector("body");

openNav.addEventListener("click", function () {
  moblieNav.classList.replace("-translate-x-full", "translate-x-0");

  const closeMenu = document.createElement("div");
  closeMenu.setAttribute(
    "class",
    "w-full h-screen bg-black absolute inset-0 opacity-20"
  );
  body.appendChild(closeMenu);
  closeMenu.addEventListener("click", function () {
    moblieNav.classList.replace("translate-x-0", "-translate-x-full");
    closeMenu.setAttribute("class", "hidden");
  });
});

//Select Category
const selectCategory = document.querySelector("#select-category");
const selectOptions = document.querySelector(".options");
const listOptions = document.querySelectorAll(".list-options");

selectCategory.addEventListener("click", function () {
  selectOptions.classList.remove("hidden");

  listOptions.forEach(function (element) {
    element.addEventListener("click", function () {
      selectCategory.textContent = element.textContent;
      selectOptions.classList.add("hidden");
    });
    if (
      selectCategory.textContent.toLowerCase() ===
      element.textContent.toLowerCase()
    ) {
      element.classList.add("font-bold");
    } else {
      element.classList.remove("font-bold");
    }
  });
});

//Home Drop-down
const home = document.querySelector("#home");
const homeList = document.querySelector("#home-dropdown");
home.addEventListener("click", function (event) {
  if (homeList.classList.value.includes("hidden")) {
    homeList.classList.replace("hidden", "flex");
    home.classList.replace("fa-angle-down", "fa-angle-up");
  } else {
    homeList.classList.replace("flex", "hidden");
    home.classList.replace("fa-angle-up", "fa-angle-down");
  }
});

//Mouse Movement Hero Animation
const hero = document.querySelector("#hero");
const heroShadow = document.querySelectorAll(".hero-shadow");
hero.addEventListener("mousemove", function (event) {
  const x = event.clientX;

  const innerWidth = window.innerWidth;

  // console.log("hero", hero.offsetLeft, hero.offsetTop);

  // heroShadow.forEach(function (element) {
  //   console.log(element.offsetTop, element.offsetLeft);
  // });
  // console.log(x);

  for (let i = 1; i < 50; i++) {
    if (Math.ceil(x) === Math.ceil(innerWidth / i)) {
      heroShadow.forEach(function (element) {
        // console.log(element);
        element.style.transform = `translateX(${-i * 1.5}px) translateY(40px)`;
        element.style.transition = "all 2s";
        console.log(element);
      });
    }
  }
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

//Filter Dropdown
const filterMenu = document.querySelector("#filter-menu");
const filterElement = document.querySelectorAll(".menu-list");
const filterToggle = document.querySelector("#filter-list-toggle");

filterToggle.addEventListener("click", function () {
  filterMenu.classList.replace("hidden", "flex");
  filterElement.forEach(function (element) {
    element.addEventListener("click", function () {
      filterToggle.textContent = element.textContent;
      filterMenu.classList.replace("flex", "hidden");
    });
  });
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
    let mixElements = document.querySelectorAll(".mix");

    mixElements.forEach(function (element) {
      let title = element.querySelector("h3").textContent.toLowerCase();

      // Add item to be filtered out if input text matches items inside the title
      if (title.includes(searchTerm)) {
        matchingElements.push(element);
      } else {
        // Remove any previously matched item
        let index = matchingElements.indexOf(element);
        if (index > -1) {
          matchingElements.splice(index, 1);
        }
      }
    });

    mixer.filter(matchingElements);
  } else {
    // Reset the filter to show all items if input is empty
    mixer.filter("all");
  }
});
