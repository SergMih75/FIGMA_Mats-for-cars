const chapterBtn = document.querySelectorAll('.chapter-btn');
const getorder = document.querySelector('.getorder');
const equipment = document.querySelector('.equipment');
console.log('equipment: ', equipment);
const close = document.querySelectorAll('.close');


chapterBtn.forEach((elem) => {
    elem.addEventListener('click', btnActive);
});

function btnActive() {
    this
        .classList
        .add('btn-active');
    if (this.classList.contains('orderway')) {
        getorder
            .classList
            .add('getorder-active');
    }
    if (this.classList.contains('equip')) {
        equipment
            .classList
            .add('equipment-active');
    }
}

close.forEach((elem) => {
    if (elem.classList.contains('orderway')){
    elem.addEventListener('click', notActive2);
    }
    if (elem.classList.contains('equip')){
        elem.addEventListener('click', notActive1);
        }
});

function notActive1() {
    chapterBtn.forEach(function (elem) {
        console.log(elem);
        if (elem.classList.contains('equip')){
        elem
            .classList
            .remove('btn-active');
        }
    });
    equipment
        .classList
        .remove('equipment-active');
}

function notActive2() {
    chapterBtn.forEach(function (elem) {
        console.log(elem);
        if (elem.classList.contains('orderway')){
        elem
            .classList
            .remove('btn-active');
        }
    });
    getorder
        .classList
        .remove('getorder-active');
}