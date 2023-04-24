let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let nameplate = document.querySelector('.nameplate');
let totalParam = document.querySelector('.total-param');
let totalScore = document.querySelector('.total-score');
let switcher = document.querySelectorAll('.switch');
let switchDot = document.querySelectorAll('.swtch-dot');
const optionOne = document.querySelector('.option-one');
const optionTwo = document.querySelector('.option-two');
const optionThree = document.querySelector('.option-three');
const optionFour = document.querySelector('.option-four');
const optionFive = document.querySelector('.option-five');
const optionSix = document.querySelector('.option-six');
const cellPic = document.querySelectorAll('.cell-pic');
const canvaItem = document.querySelectorAll('.canva-item');
const edgingItem = document.querySelectorAll('.edging-item');

let count = 0;
let totalPrise = 0;
let trunk = 0;
let fullRow = 0;

plus.addEventListener('click', () => {
    count = count + 1;
    totalPrise = totalPrise+250;
    nameplate.innerHTML = ('Фирменные шильды: ' + count + ' шт.');
    if (count>0) {
    optionSix.classList.add('option-active');
    optionSix.innerHTML = ('— Фирменные шильды ' + count + ' шт.');
    }
    if (trunk==1){
        totalScore.innerHTML = (totalPrise + ' р. + багажник');
        }else{
            totalScore.innerHTML = (totalPrise + ' р.');
        }
});
minus.addEventListener('click', () => {
    count = count - 1;
    if (count>=0) {
        totalPrise = totalPrise-250;
    }
    if (count <= 0) {
        count = 0;
    }
    nameplate.innerHTML = ('Фирменные шильды: ' + count + ' шт.');
    if (count>0) {
    optionSix.innerHTML = ('— Фирменные шильды ' + count + ' шт.');
    }else{
        optionSix.classList.remove('option-active');
    }
    if (trunk==1){
        totalScore.innerHTML = (totalPrise + ' р. + багажник');
        }else{
            totalScore.innerHTML = (totalPrise + ' р.');
        }
});

switcher.forEach((elem) => {
    elem.addEventListener('click', switchOperation);
});

function switchOperation() {
    if (this.classList.contains('switch-active')) {
        this.classList.remove('switch-active');
        if (this.classList.contains('podpyatnik')) {
            totalPrise = totalPrise - 1500;
            if (trunk==1){
                totalScore.innerHTML = (totalPrise + ' р. + багажник');
                }else{
                    totalScore.innerHTML = (totalPrise + ' р.');
                }
                optionFive.classList.remove('option-active');
        }
        if (this.classList.contains('front-row')) {
            totalPrise = totalPrise - 1150;
            if (trunk==1){
                totalScore.innerHTML = (totalPrise + ' р. + багажник');
                }else{
                    totalScore.innerHTML = (totalPrise + ' р.');
                }
                if (optionThree.classList.contains('option-active')) {
                    optionThree.classList.remove('option-active');
                    fullRow = fullRow - 1;
                    optionTwo.classList.add('option-active');
                }
                optionOne.classList.remove('option-active');
        }
        if (this.classList.contains('back-row')) {
            totalPrise = totalPrise - 1000;
            if (trunk==1){
                totalScore.innerHTML = (totalPrise + ' р. + багажник');
                }else{
                    totalScore.innerHTML = (totalPrise + ' р.');
                }
                if (optionThree.classList.contains('option-active')) {
                    optionThree.classList.remove('option-active');
                    fullRow = fullRow - 1;
                    optionOne.classList.add('option-active');
                }
                optionTwo.classList.remove('option-active');
        }
        if (this.classList.contains('trunk')) {
            trunk = trunk - 1;
            if (trunk==1){
                totalScore.innerHTML = (totalPrise + ' р. + багажник');
                }else{
                    totalScore.innerHTML = (totalPrise + ' р.');
                }
                optionFour.classList.remove('option-active');
        }
    }else{
    this
        .classList
        .add('switch-active');
        if (this.classList.contains('podpyatnik')) {
            totalPrise = totalPrise + 1500;
            if (trunk==1){
                totalScore.innerHTML = (totalPrise + ' р. + багажник');
                }else{
                    totalScore.innerHTML = (totalPrise + ' р.');
                }
                    optionFive.classList.add('option-active');
        }
        if (this.classList.contains('front-row')) {
            totalPrise = totalPrise + 1150;
            if (trunk==1){
                totalScore.innerHTML = (totalPrise + ' р. + багажник');
                }else{
                    totalScore.innerHTML = (totalPrise + ' р.');
                }
                optionOne.classList.add('option-active');
                if (optionOne.classList.contains('option-active') && optionTwo.classList.contains('option-active')) {
                    fullRow = fullRow + 1;
                }
                if (fullRow==1) {
                    optionThree.classList.add('option-active');
                    optionOne.classList.remove('option-active');
                    optionTwo.classList.remove('option-active');
                }
        }
        if (this.classList.contains('back-row')) {
            totalPrise = totalPrise + 1000;
            if (trunk==1){
                totalScore.innerHTML = (totalPrise + ' р. + багажник');
                }else{
                    totalScore.innerHTML = (totalPrise + ' р.');
                }
                optionTwo.classList.add('option-active');
                if (optionOne.classList.contains('option-active') && optionTwo.classList.contains('option-active')) {
                    fullRow = fullRow + 1;
                }
                if (fullRow==1) {
                    optionThree.classList.add('option-active');
                    optionOne.classList.remove('option-active');
                    optionTwo.classList.remove('option-active');
                }
        }
        if (this.classList.contains('trunk')) {
            trunk = 1;
            if (trunk==1){
                totalScore.innerHTML = (totalPrise + ' р. + багажник');
                }else{
                    totalScore.innerHTML = (totalPrise + ' р.');
                }
                optionFour.classList.add('option-active');
        }}
        switcher.forEach((elem)=>{
            if(elem.classList.contains('switch-active')) {
                for (let childNode of elem.children) {
                    childNode.classList.add('swtch-dot-active');
                }
            }else{
                for (let childNode of elem.children) {
                    childNode.classList.remove('swtch-dot-active');
                }
            }
        });
}

cellPic.forEach((el) => {
    el.addEventListener('click', cellDesign);
});
canvaItem.forEach((el) => {
    el.addEventListener('click', canvaDesign);
});
edgingItem.forEach((el) => {
    el.addEventListener('click', edgingDesign);
});

function cellDesign(el) {
    for (i of cellPic) {
        i
            .classList
            .remove('cell-pic-active');
    }
    this
        .classList
        .add('cell-pic-active');
}

function canvaDesign(el) {
    for (i of canvaItem) {
        i
            .classList
            .remove('canva-item-active');
    }
    this
        .classList
        .add('canva-item-active');
}

function edgingDesign(el) {
    for (i of edgingItem) {
        i
            .classList
            .remove('edging-item-active');
    }
    this
        .classList
        .add('edging-item-active');
}