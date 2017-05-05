/**
 * Created by ryzhkov on 04.05.17.
 */
"use strict";
var names = [];
var name;
for (var i = 0; i < 5; i++) {
    do {
        name = prompt('Enter user names to DB ! \n' + (5 - i) + ' left.', '');
        names[i] = name;
    }
    while (!isValid(name));
}
var userName = prompt('Enter user name!', '');
if (!isValid(userName)) {
    alert('No name entered, \n Good by!')
}
else nameCheck(userName, names);

function nameCheck(name, dataBase) {
    var isCorrect = false;
    var length = dataBase.length;
    for (var k = 0; k < length; k++) {
        if (name === dataBase[k]) {
            isCorrect = true;
            var message = 'Hello, ' + name + ' !';
            alert(message);
            break;
        }
    }
    if (!isCorrect) alert('No such username!');
}
function isValid(name) {
    var result = true;
    if(name.length < 1 || name === 'null') {
        result= false;
    } return result;


}