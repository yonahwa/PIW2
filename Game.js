

let counterDis = document.querySelector('.counter-display');
let button = document.querySelector('.Waluigi');

let count = 0;
updateDisplay();

button.addEventListener("click", () => {
    console.log("point")
    count++; //doit avoir les avantage des objet là
    updateDisplay();
});

function updateDisplay() {
    counterDis.innerHTML = count;
};