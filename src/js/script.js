const menuList = document.querySelector(".menu-list");
const listOne = document.querySelector("list-one");
const galleryMenu = document.querySelector("#gallery-menu");

const galleryChild = galleryMenu.childNodes;

function toggleList() {
  for (let i = 1; i < galleryChild.length; i = i + 2) {
    galleryChild[i].classList.replace("hidden", "block");
  }
}
