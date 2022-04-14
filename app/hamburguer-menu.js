const hamburger = () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelectorAll(".nav-container");
  
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
  
  nav.forEach((link) =>
    link.addEventListener("click", (event) => {
      if (nav === submenu) {
        navMenu.classList.add("active");
        hamburger.classList.remove("active");
      }
    })
  );
  
}

hamburger()
