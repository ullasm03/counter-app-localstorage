let countChild = document.getElementById('countchild');
let btn = document.getElementById("clickbtn");
let btn2 = document.getElementById('clickbtnneg');
let btn3 = document.getElementById('resetbtn');

let count = localStorage.getItem('count') ? parseInt(localStorage.getItem('count')) : 0;

function updateCountDisplay() {
    countChild.innerHTML = `<h1>count: ${count}</h1>`;
}

updateCountDisplay();

btn.addEventListener('click', () => {
    count++;
    updateCountDisplay();
    localStorage.setItem('count', count);
});

btn2.addEventListener('click', () => {
    if (count > 0) {
        count--;
        updateCountDisplay();
        localStorage.setItem('count', count);
    }
});

btn3.addEventListener('click', () => {
    count = 0;
    updateCountDisplay();
    localStorage.setItem('count', count);
});
