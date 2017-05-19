/**
 * Created by ryzhkov on 07.05.17.
 */
'use strict';
var startTime = Date.now();
var stopTime = Date.now();
var result = stopTime - startTime;
var box = document.createElement('p');
box.textContent = result.toString();
document.body.appendChild(box);



