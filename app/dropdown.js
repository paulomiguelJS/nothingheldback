const dropdownMenus = document.querySelectorAll("[data-dropdown]");
const arrow = document.querySelectorAll(".arrow");

dropdownMenus.forEach((menu) => {
  menu.addEventListener("click", handleClick);
});

const handleClick = (event) => {
  event.preventDefault();
  this.classList.toggle("show");
  outsideClick(this, () => {
    this.classList.remove("show");
  });

  const outsideClick = (element, callback) => {
    const html = document.documentElement;
    const outside = "data-outside";

    if (!element.hasAttribute(outside)) {
      html.addEventListener("click", handleOutsideClick);
      element.setAttribute(outside, true);
    }
    const handleOutsideClick = (event) => {
      if (!element.contains(event.target)) {
        element.removeAttribute(outside);
        html.removeEventListener("click", handleOutsideClick);
        callback();
      }
    };
  };
};
