/**
 * Created by ryzhkov on 04.05.17.
 */
function pow(number, rate) {
    var result = number;
    if (number !== 0 && rate > 0) {
        for (var i = 0; i < rate - 1; i++) {
            result *= number;
        }
    }
    else if (number !== 0 && rate < 0) {
        var temp = number;
        for (var k = 0; k < (rate * -1) -1 ; k++) {
            temp *= number;
        } result = 1 / temp;
    }
    else if (number === 0) {
        result = 0;
    }
    else if (rate === 0) {
        result = 1;
    }
    return result;
}
var number = prompt("Введите целое число", "");
var rate = prompt("Введите степень", "");
console.log(pow(number, rate));
console.log('Проверочный результат: \n ', Math.pow(number, rate));