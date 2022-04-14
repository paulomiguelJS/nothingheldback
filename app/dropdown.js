const dropdown = () => {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");

  dropdownMenus.forEach((menu) => {
    menu.addEventListener("click", handleClick);
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.toggle("show");
    outsideClick(this, () => {
      this.classList.remove("show");
    });

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
  }
};

dropdown()