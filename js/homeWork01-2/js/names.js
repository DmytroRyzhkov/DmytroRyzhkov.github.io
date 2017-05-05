/**
 * Created by ryzhkov on 04.05.17.
 */
"use strict";
var names = [];
for (var i = 0; i < 5; i++) {
    names[i] = prompt('Enter user names to DB ! \n' + (5 - i) + ' left.', "");
}
var userName = prompt('Enter user name!', '');
nameCheck(userName, names);
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
    if (!isCorrect) alert('No such username!')
}