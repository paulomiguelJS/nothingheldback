const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("#navMenu");
const links = document.querySelectorAll(".link");

const submenu = document.querySelectorAll("#submenu");
const dropdownItems = document.querySelectorAll(".dropdown-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

links.forEach((link) =>
  link.addEventListener("click", () => {
      navMenu.classList.add("active");
      hamburger.classList.remove("active");
  })
);


function outsideClick(element, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  if (!element.hasAttribute(outside)) {
    html.addEventListener("click", handleOutsideClick);
    element.setAttribute(outside, true);
  }

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      html.removeEventListener("click", handleOutsideClick);
      callback();
    }
  }
}


