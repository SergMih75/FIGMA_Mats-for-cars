const sliderLeft = document.querySelector('.slider-left');
const sliderRight = document.querySelector('.slider-right');
const sliderDot = document.querySelectorAll('.dot-item');
const sliderLine = document.querySelector('.slider-line');
let move = 0;

sliderLeft.addEventListener('click', () => {
    if (move <= 0 && sliderLeft.classList.contains('slider-active')) {
        move -= 263;
        sliderLine.style.left = move + 'px';
        sliderRight
            .classList
            .add('slider-active');
        sliderDot.forEach((elem) => {
            for (j of sliderDot) {
                j
                    .classList
                    .remove('dot-active');
                if (j.classList.contains('step-one') && move == 0) {
                    j
                        .classList
                        .add('dot-active');
                }
                if (j.classList.contains('step-two') && move == -263) {
                    j
                        .classList
                        .add('dot-active');
                }
                if (j.classList.contains('step-three') && move == -526) {
                    j
                        .classList
                        .add('dot-active');
                }
            }
        });
    }
    if (move == -526) {
        sliderLeft
            .classList
            .remove('slider-active');
    }
});

sliderRight.addEventListener('click', () => {
    if (move >= -526 && sliderRight.classList.contains('slider-active')) {
        move = move + 263;
        sliderLine.style.left = move + 'px';
        sliderLeft
            .classList
            .add('slider-active');
        sliderDot.forEach((elem) => {
            for (j of sliderDot) {
                j
                    .classList
                    .remove('dot-active');
                if (j.classList.contains('step-one') && move == 0) {
                    j
                        .classList
                        .add('dot-active');
                }
                if (j.classList.contains('step-two') && move == -263) {
                    j
                        .classList
                        .add('dot-active');
                }
                if (j.classList.contains('step-three') && move == -526) {
                    j
                        .classList
                        .add('dot-active');
                }
            }
        });
    }
    if (move == 0) {
        sliderRight
            .classList
            .remove('slider-active');
    }
});

sliderDot.forEach((el) => {
    el.addEventListener('click', dotMove);
});

function dotMove() {
    for (i of sliderDot) {
        i
            .classList
            .remove('dot-active');
    }
    this
        .classList
        .add('dot-active');
    if (this.classList.contains('step-two')) {
        move = -263;
        sliderLine.style.left = move + 'px';
        sliderRight
            .classList
            .add('slider-active');
        sliderLeft
            .classList
            .add('slider-active');
    }
    if (this.classList.contains('step-one')) {
        move = 0;
        sliderLine.style.left = move + 'px';
        sliderRight
            .classList
            .remove('slider-active');
        sliderLeft
            .classList
            .add('slider-active');
    }
    if (this.classList.contains('step-three')) {
        move = -526;
        sliderLine.style.left = move + 'px';
        sliderRight
            .classList
            .add('slider-active');
        sliderLeft
            .classList
            .remove('slider-active');
    }
}