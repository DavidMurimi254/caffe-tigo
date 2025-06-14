const drop = document.getElementById("dropB");
const dropDown = document.querySelector(".dropdown");

drop.addEventListener("click", function () {
    if(getComputedStyle(dropDown).display === "none") {
        dropDown.style.display = "block";
    } else {
        dropDown.style.display = "none";
    }
});

const appear = document.querySelector(".appear");
const pizza = document.getElementsByTagName("table")[0];

appear.addEventListener("click", function () {
    if(getComputedStyle(pizza).display === "none") {
        pizza.style.display = "block";
    } else {
        pizza.style.display = "none";
    }
})