// 1
const out = document.querySelector('.out');
let list = '';
for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++){
        list +='*';
    }
    list += '_';
    }
out.innerHTML = list;


// 2
const out4 = document.querySelector('.out-4');
let columnWithNumbers = '';
for (i = 1; i < 4; i++) {
    columnWithNumbers += `${i}<br>`;
    for (j = 0; j < 3; j++){
        columnWithNumbers +='*_';
    }
    columnWithNumbers +='<br>';
    }
out4.innerHTML = columnWithNumbers;

// 3
const out5 = document.querySelector('.out-5');
let column = '';
for (i = 0; i <= 3; i++) {
    for (j = 0; j < 3; j++){
        column +='*_';
    }
    column += '<br>';
    }
out5.innerHTML = column;

// 4
const out1 = document.querySelector('.out-1');
function t1() {
let numberedStringFirst = '';
    for(let i = 1; i <= 16; i++) {
        numberedStringFirst += i + '_';
    }
     out1.innerHTML += numberedStringFirst;
}
document.querySelector('.b-1').onclick = t1;

// 5
const out2 = document.querySelector('.out-2');
function t2() {
let numberedStringSecond = '';
    for(let j = 12; j <= 38; j = j + 2) {
        numberedStringSecond += j + '_';
    }
     out2.innerHTML += numberedStringSecond;
}
document.querySelector('.b-2').onclick = t2;


// 6
const out3 = document.querySelector('.out-3');
function t3() {
let numberedStringThird = '';
    for(let k = 25; k > 6; k--) {
        numberedStringThird += k + '_';
    }
     out3.innerHTML += numberedStringThird;
}
document.querySelector('.b-3').onclick = t3;