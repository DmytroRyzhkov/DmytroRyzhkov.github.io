/**
 * Created by ryzhkov on 19.05.17.
 */
'use strict';
var timer = document.getElementById('timer');
var toggleBtn = document.getElementById('toggle');
var resetBtn = document.getElementById('reset');
var splitBtn = document.getElementById('split');

var watch = new Stopwatch(timer);

toggleBtn.addEventListener('click', function () {
    if (watch.isOn) {
        watch.stop();
        toggleBtn.textContent = 'START';
    }
    else {
        watch.start();
        toggleBtn.textContent = 'STOP';

    }
});
resetBtn.addEventListener('click', function () {
    if (!watch.isOn) {
        watch.reset();
    }
});
splitBtn.addEventListener('click', function () {
    if (watch.isOn) {
        watch.split();
    }
});

