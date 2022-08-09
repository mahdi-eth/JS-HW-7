const modal = document.getElementById("modal");
const submit = document.getElementById("submit");
const close = document.getElementById("close");

submit.addEventListener("click", () => (modal.style.transform = "scale(1)"));

close.addEventListener("click", () => (modal.style.transform = "scale(0)"));

window.addEventListener("click", (item) => {
  const isClosest = item.target.closest("#modal");
  if (!isClosest && item.target !== submit) {
    modal.style.transform = "scale(0)";
  }
});
