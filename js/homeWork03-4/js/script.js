/**
 * Created by ryzhkov on 06.05.17.
 */
'use strict';
var test = {
    data: {
        title: 'Тест по какой-то теме',
        questions: [{
            title: 'Вопрос №1',
            answers: ['Вариант овтета 1', 'Вариант овтета 2', 'Вариант овтета 3']
        },
            {
                title: 'Вопрос №2',
                answers: ['Вариант овтета 1', 'Вариант овтета 2', 'Вариант овтета 3']
            },
            {
                title: 'Вопрос №3',
                answers: ['Вариант овтета 1', 'Вариант овтета 2']
            }
        ]
    },
    createHeader: function () {
        var x = document.createElement("header");
        x.setAttribute("id", "myHeader");
        document.body.appendChild(x);

        var y = document.createElement("h3");
        var t = document.createTextNode("TEST");
        y.appendChild(t);

        document.getElementById("myHeader").appendChild(y);
    }
};

test.createHeader();