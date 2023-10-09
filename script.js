const menuButton = document.querySelector(".menu-btn");
const navBar = document.querySelector(".header");
const navList = document.querySelector(".nav-items");
menuButton.addEventListener("click", () => {
  addRemoveNav();
});
navList.addEventListener("click", () => {
  addRemoveNav();
});
const addRemoveNav = () => {
  if (!navBar.classList.contains("nav-close")) {
    navBar.classList.add("nav-close");
    console.log("message");
  } else {
    console.log("message112221");
    navBar.classList.remove("nav-close");
  }
};