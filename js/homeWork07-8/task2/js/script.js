/**
 * Created by ryzhkov on 29.05.17.
 */
'use strict';
$(function () {
    $('input').hover(function () {
        var tooltip = this.title;
        console.log(tooltip);
        makeRed(this);
    }, function () {
        makeWhite(this);
    });
    $('button').on('click', function (e) {
      var elem =  $('input');
      makeRed(elem);
      e.preventDefault();
    });
    function makeRed(elem) {
        $(elem).parent().css("background-color", "red");
    }
    function makeWhite(elem) {
        $(elem).parent().css("background-color", "white");
    }
});
