document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.querySelector(".buttom-main-link");
  const closeBtn = document.querySelector("#closeModal");
  const modal = document.querySelector("#modal");
  const form = document.querySelector(".modal-form");

  openBtn.addEventListener("click", () => {
    modal.classList.add("is-open");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("is-open");
  });

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      console.log("Форма відправлена!");
      modal.classList.remove("is-open");
      form.reset();
    });
  }
});
