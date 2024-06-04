const countElement = document.querySelector(".count-el")

const IncreButton = document.querySelector(".btn")
const SaveButton = document.querySelector(".save-btn")

const previous = document.querySelector(".previous")

IncreButton.addEventListener("click", (e) => {
    e.preventDefault()
    countElement.innerHTML = Number(countElement.innerHTML) + 1;
    IncreButton.style.transform = "scale(0.97)"
    setTimeout(() => {
        IncreButton.style.transform = "scale(1)";
    },200);
});


SaveButton.addEventListener("click", (e) => {
    e.preventDefault()
    countElement.innerHTML = "0";
    SaveButton.style.transform = "scale(0.97)"
    setTimeout(() => {
        SaveButton.style.transform = "scale(1)";
    },200);
})


