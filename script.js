<<<<<<< HEAD
document.getElementById("increase-font").addEventListener("click", function() {
    let currentSize = window.getComputedStyle(document.body).fontSize;
    currentSize = parseFloat(currentSize);
    document.body.style.fontSize = (currentSize + 2) + "px";
});

document.getElementById("decrease-font").addEventListener("click", function() {
    let currentSize = window.getComputedStyle(document.body).fontSize;
    currentSize = parseFloat(currentSize);
    document.body.style.fontSize = (currentSize - 2) + "px";
=======
document.getElementById("increase-font").addEventListener("click", function() {
    let currentSize = window.getComputedStyle(document.body).fontSize;
    currentSize = parseFloat(currentSize);
    document.body.style.fontSize = (currentSize + 2) + "px";
});

document.getElementById("decrease-font").addEventListener("click", function() {
    let currentSize = window.getComputedStyle(document.body).fontSize;
    currentSize = parseFloat(currentSize);
    document.body.style.fontSize = (currentSize - 2) + "px";
>>>>>>> 2c79c0b612ab3b6b98ef93abe7d268c9fa0893c6
});