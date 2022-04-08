const modal = document.querySelector("#myModal");
const openModal = document.querySelector("#btn-modal");
const closeModal = document.querySelector("#close");

openModal.onclick = function() {
  modal.style.display = "block";
}

closeModal.onclick = function(event) {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}