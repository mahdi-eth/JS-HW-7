const flipper = document.getElementById("flipper");
const submit = document.getElementById("submit");


submit.addEventListener("click", (event) => {
    event.preventDefault();
    localStorage.setItem("flipper", flipper.value);
    location.reload();
})

document.body.style.background = localStorage.getItem("flipper");