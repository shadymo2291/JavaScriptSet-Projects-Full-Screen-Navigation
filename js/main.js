// Full Screen Navigation Application:

let btnOpen = document.querySelector(".open");

let btnClose = document.querySelector(".close");

let navMenu = document.querySelector("nav");

btnOpen.addEventListener("click", () => {
  navMenu.classList.add("appear");
  btnOpen.style.opacity = "0";
});

btnClose.addEventListener("click", (e) => {
  navMenu.classList.remove("appear");
  setTimeout(() => {
    btnOpen.style.opacity = "100";
  }, 350);
});

document.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    navMenu.classList.remove("appear");
    setTimeout(() => {
      btnOpen.style.opacity = "100";
    }, 350);
  }
});
