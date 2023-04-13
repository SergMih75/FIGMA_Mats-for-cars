let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let nameplate = document.querySelector('.nameplate');

let count = 0;

plus.addEventListener('click', () => {
    count = count + 1;
    nameplate.innerHTML = ('Фирменные шильды: ' + count + ' шт.');
});
minus.addEventListener('click', () => {
    count = count - 1;
    if (count <= 0) {
        count = 0;
    }
    nameplate.innerHTML = ('Фирменные шильды: ' + count + ' шт.');
});