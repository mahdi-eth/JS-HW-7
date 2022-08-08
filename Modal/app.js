const modal = document.getElementById("modal");
const submit = document.getElementById("submit");
const close = document.getElementById("close");


const createModal = () => {
  modal.style.transform = "scale(1)";
};

submit.addEventListener("click", createModal);

close.addEventListener("click", () => (modal.style.transform = "scale(0)"));


  window.addEventListener("click", (e) => {
    const isClosest = e.target.closest("#modal");

    if (!isClosest && e.target !== submit) {
        modal.style.transform = "scale(0)";
    }
  });
