/**
 * Created by ryzhkov on 19.05.17.
 */
'use strict';
function Stopwatch(elem) {
    var time = 0;
    var interval;
    var offset;
    this.isOn = false;

    this.update = function () {
        if (this.isOn) {
            time += delta();
        }
        elem.textContent = timeFormatter(time);
    };

    function delta() {
        var timeNow = Date.now();
        var timePassed = timeNow - offset;
        offset = timeNow;
        return timePassed;


    }

    function timeFormatter(timeInMilliseconds) {
        var time = new Date(timeInMilliseconds);
        var minutes = time.getMinutes().toString();
        var seconds = time.getSeconds().toString();
        var milliseconds = time.getMilliseconds().toString();
        if (minutes.length < 2) {
            minutes = '0' + minutes;
        }
        if (seconds.length < 2) {
            seconds = '0' + seconds;
        }
        while (milliseconds.length < 3) {
            milliseconds = '0' + milliseconds;
        }
        return minutes + ':' + seconds + '.' + milliseconds;

    }


    this.start = function () {
        if (!this.isOn) {
            interval = setInterval(this.update.bind(this), 10);
            offset = Date.now();
            this.isOn = true;
        }

    };
    this.stop = function () {
        if (this.isOn) {
            clearInterval(interval);
            interval = null;
            this.isOn = false;
        }

    };
    this.split = function () {
        if (this.isOn) {
            var splitedTime = timeFormatter(time);
            var splitedTimeWindow = document.createElement('h3');
            splitedTimeWindow.setAttribute('id', 'splitWindow');
            splitedTimeWindow.textContent = splitedTime;
            document.body.appendChild(splitedTimeWindow);
        }

    };
    function deleteSplitWindow() {
        var list = document.querySelectorAll('#splitWindow');
        if (list.length > 0) {
            for (var i = 0, len = list.length; i < len; i++) {
                list[i].innerHTML = '';
            }
        }
    }

    this.reset = function () {
        time = 0;
        this.update();
        deleteSplitWindow();
    };
}
