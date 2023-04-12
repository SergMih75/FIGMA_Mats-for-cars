const chapterBtn = document.querySelectorAll('.chapter-btn');
const getorder = document.querySelector('.getorder');
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
}

close.forEach((elem) => {
    elem.addEventListener('click', notActive);
});

function notActive() {
    chapterBtn.forEach(function (elem) {
        elem
            .classList
            .remove('btn-active');
    });
    getorder
        .classList
        .remove('getorder-active');
}