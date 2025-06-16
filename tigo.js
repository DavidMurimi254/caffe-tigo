const drop = document.getElementById("dropB");
const dropDown = document.querySelector(".dropdown");

const appear = document.querySelector(".appear");
const pizza = document.querySelector(".table");

const breakfast = document.querySelector(".break");
const breakfastTable = document.querySelector(".breakfast-table");

const drink = document.querySelector(".drink");
const drinkTable = document.querySelector(".drink-table");

const lunch = document.querySelector(".lunch-btn");
const lunchTable = document.querySelector(".lunch-table");

const snack = document.querySelector(".snack-btn");
const snackTable = document.querySelector(".snack-table");

drop.addEventListener("click", function () {
        dropDown.style.display = "block";
});



appear.addEventListener("click", function () {
    if(getComputedStyle(pizza).display === "none") {
        pizza.style.display = "block";
    } else {
        pizza.style.display = "none";
    }
});

const close = document.querySelector(".cancel");

close.addEventListener("click", function () {
    dropDown.style.display = "none"
});

breakfast.addEventListener("click", function () {
    if(getComputedStyle(breakfastTable).display === "none") {
        breakfastTable.style.display = "block";
    } else {
        breakfastTable.style.display = "none";
    }
});

drink.addEventListener("click", function () {
    if(getComputedStyle(drinkTable).display === "none") {
        drinkTable.style.display = "block";
    } else {
        drinkTable.style.display = "none";
    }
});

lunch.addEventListener("click", function () {
    if(getComputedStyle(lunchTable).display === "none") {
        lunchTable.style.display = "block";
    } else {
        lunchTable.style.display = "none";
    }
});

snack.addEventListener("click", function () {
    if(getComputedStyle(snackTable).display === "none") {
        snackTable.style.display = "block";
    } else {
        snackTable.style.display = "none";
    }
});