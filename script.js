const max = 90;
const min = 10;

let count = 0;
let btn = document.getElementById("the-button");
let fails = document.getElementById("fails");

btn.addEventListener('mouseover', () => {
    btn.style.left = randomPos();
    btn.style.top = randomPos();
    count++;
    if (count >= 10) {
        fails.textContent = "fails: " + count;
    }
});

btn.addEventListener('click', () => {
    alert("Cheater...");
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
});



function randomPos() {
    return (Math.floor(Math.random() * (max - min + 1) ) + min).toString() + "%";
}
