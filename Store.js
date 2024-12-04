let HTMLargent = document.getElementsByClassName('counter-display');
let argent = parseInt(HTMLargent);

let counterDis = document.querySelectorAll('.Upgrade');
for (let i = 0; i < counterDis.length; i++) {
    let parent = counterDis[i];
    let button = parent.getElementsByClassName('Achat')[0];
    button.addEventListener("click", (event) => {
        if (event.target.parentElement.children[0].innerHTML === "Blue mushroom") {
            if (argent < 25){
                alert("Pas assez d'argent");
            }
            else {
                let text = event.target.parentElement.children[5];
                let count = parseInt(text.innerHTML);
                text.innerHTML = ++count;
                argent = argent - 25;
                HTMLargent.innerHTML = argent;
            }
        }
        if (event.target.parentElement.children[0].innerHTML === "Mushroom") {
            if (argent < 100) {
                alert("Pas assez d'argent");
            }
            else {
                let text = event.target.parentElement.children[5];
                let count = parseInt(text.innerHTML);
                text.innerHTML = ++count;
                argent = argent - 100;
                HTMLargent.innerHTML = argent;
            }
        }
        if (event.target.parentElement.children[0].innerHTML === "Triple red mushroom") {
            if (argent < 200) {
                alert("Pas assez d'argent");
            }
            else {
                let text = event.target.parentElement.children[5];
                let count = parseInt(text.innerHTML);
                text.innerHTML = ++count;
                argent = argent - 200;
                HTMLargent.innerHTML = argent;
            }
        }
        if (event.target.parentElement.children[0].innerHTML === "Mega mushroom") {
            if (argent < 500) {
                alert("Pas assez d'argent");
            }
            else {
                let text = event.target.parentElement.children[5];
                let count = parseInt(text.innerHTML);
                text.innerHTML = ++count;
                argent = argent - 500;
                HTMLargent.innerHTML = argent;
            }
        }


    });
}