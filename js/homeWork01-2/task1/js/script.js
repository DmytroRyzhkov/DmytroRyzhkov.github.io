/**
 * Created by ryzhkov on 04.05.17.
 */
"use strict";
function pow(number, rate) {
    var result = 1;
    if (number !== 0 && rate > 0) {
        for (var i = 0; i < rate; i++) {
            result *= number;
        }
    }
    else if (number !== 0 && rate < 0) {
        var temp = 1;
        for (var k = 0; k < rate * -1; k++) {
            temp *= number;
        }
        result = 1 / temp;
    }
    else if (number === 0) {
        result = 0;
    }
    else if (rate === 0) {
        result = 1;
    }
    return result;
}
function isValid(number) {
    var result = true;
    if (isNaN(number) || number === null) {
        result= false;
    } return result;
}
var number;
do {number = prompt("Введите целое число", "");}
while (!isValid(number));
var rate;
do {rate = prompt("Введите степень", "");}
while (!isValid(rate));
console.log(pow(number, rate));