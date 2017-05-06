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
        var wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'container-fluid');
        document.body.appendChild(wrapper);
        var header = document.createElement('div');
        header.setAttribute('class', 'page-header');
        wrapper.appendChild(header);
        var h3 = document.createElement('h3');
        h3.setAttribute('class', 'text-center');
        var textHeader = document.createTextNode(this.data.title);
        h3.appendChild(textHeader);
        header.appendChild(h3);
        var len = this.data.questions.length;
        for (var i = 0; i < len; i++) {
            var questionHeader = document.createElement('p');
            var questionHeaderText = document.createTextNode(this.data.questions[i].title);
            questionHeader.appendChild(questionHeaderText);
            wrapper.appendChild(questionHeader);
            var ans = this.data.questions[i].answers.length;
            for (var m = 0; m < ans; m++) {
                var checkboxContainer = document.createElement('div');
                checkboxContainer.setAttribute('class', 'checkbox');
                var label = document.createElement('label');
                var input = document.createElement('input');
                input.setAttribute('type', 'checkbox');
                label.appendChild(input);
                var answerText = document.createTextNode(this.data.questions[i].answers[m]);
                label.appendChild(answerText);
                checkboxContainer.appendChild(label);
                wrapper.appendChild(checkboxContainer);
            }
        }
        var buttonWrapper = document.createElement('div');
        buttonWrapper.setAttribute('class', 'col-sm-offset-5 col-sm-2 text-center');
        var button = document.createElement('button');
        button.setAttribute('class', 'btn ');
        button.setAttribute('type', 'button');
        var buttonText = document.createTextNode('Проверить мои результаты.');
        button.appendChild(buttonText);
        buttonWrapper.appendChild(button);
        wrapper.appendChild(buttonWrapper);


    }
};

test.createTest();