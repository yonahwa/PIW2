let counterDis = document.querySelectorAll('.Upgrade');
for (let i = 0; i < counterDis.length; i++) {
    let parent = counterDis[i];
    let button = parent.getElementsByClassName('Achat')[0];
    button.addEventListener("click", (event) => {
        if (event.target.parentElement.children[0].innerHTML === "Blue mushroom") {
            let text = event.target.parentElement.children[5];
            let count = parseInt(text.innerHTML);
            text.innerHTML = ++count;
        }
    });
}