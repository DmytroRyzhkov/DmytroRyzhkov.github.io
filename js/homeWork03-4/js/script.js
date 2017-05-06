/**
 * Created by ryzhkov on 06.05.17.
 */
'use strict';
var test = {
    data: {
        title: 'Тест по программированию.',
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
                answers: ['Вариант овтета 1', 'Вариант овтета 2', 'Вариант овтета 3']
            }
        ]
    },
    createTest: function () {
        var x = document.createElement('div');
        x.setAttribute('class', 'container-fluid');
       document.body.appendChild(x);
       var z = document.createElement('div');
       z.setAttribute('class', 'page-header' );
       x.appendChild(z);
       var h = document.createElement('h3');
       h.setAttribute('class', 'text-center');
       var t = document.createTextNode(this.data.title);
       h.appendChild(t);
       z.appendChild(h);
       var len = this.data.questions.length;
       for (var i = 0; i < len; i++ ) {
           var qt = document.createElement('p');
           var tit = document.createTextNode(this.data.questions[i].title);
           qt.appendChild(tit);
           x.appendChild(qt);
           var ans = this.data.questions[i].answers.length;
           for(var m = 0; m <ans; ans++) {
             var a = document.createElement('div');
             a.setAttribute('class', 'checkbox');
             var label = document.createElement('label');
             a.appendChild(label);
             x.appendChild(a);
           }
       }


    }
};

test.createTest();