const dropdownMenus = document.querySelectorAll(".nav-list");

dropdownMenus.forEach((menu) => {
  menu.addEventListener("click", handleClick);
});

function handleClick(event) {
  event.preventDefault();
  this.classList.toggle("show");
  console.log(event.target.parentElement.nextElementSibling)
}
