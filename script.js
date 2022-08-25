const dropDownLinks = document.querySelectorAll(".drop-down__link");
const dropDown = document.querySelector(".drop-down");
dropDownLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    link.classList.toggle("display-arrow");
    const container = e.currentTarget.nextElementSibling;
    const dropDownMenu = container.querySelector(".drop-down__menu");
    let containerHeight = container.getBoundingClientRect().height;
    const dropDownMenuHeight = dropDownMenu.getBoundingClientRect().height;

    if (containerHeight == 0) {
      container.style.height = `${dropDownMenuHeight}px`;
    } else {
      container.style.height = 0;
    }
  });
});

const menuBtn = document.querySelector(".menu-btn");
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
menuBtn.addEventListener("click", () => {
  header.classList.toggle("display");
  console.log(123);
});
