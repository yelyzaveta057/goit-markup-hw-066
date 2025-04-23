const openBtn = document.querySelector(".buttom-main-link");
const closeBtn = document.querySelector("#closeModal");
const modal = document.querySelector("#modal");

openBtn.addEventListener("click", () => {
  modal.classList.add("is-open");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("is-open");
});
