/**
 * Created by ryzhkov on 29.05.17.
 */
'use strict';
$(function () {
    var input = $('input');
    input.each(function () {
        console.log(this);
        var parent = $(this).parent();
        $('<span>' + this.title + '</span>').appendTo(parent);
        this.setAttribute('title', '');
        $('span').css({
            border: 'solid black 1px',
            backgroundColor: 'aqua',
            padding: '5px',
            fontSize: '10px',
            borderRadius: '2px',
            display: 'none'
        });
    });
    input.hover(function () {

        showTooltip(this);
    }, function () {
        hideTooltip(this);
    });
    $('button').on('click', function (e) {
        var elem = $('input');
        showTooltip(elem);
        e.preventDefault();
    });
    function showTooltip(elem) {
        $(elem).parent().find('span').animate({opacity: 'show', right: '0'}, 'slow');
    }

    function hideTooltip(elem) {
        $(elem).parent().find('span').animate({opacity: 'hide', right: '0'}, 'fast');
    }

});
