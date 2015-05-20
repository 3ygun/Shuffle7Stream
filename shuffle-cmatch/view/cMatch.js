'use strict';

// Get the name areas
var $leftName = $('#leftName');
var $rightName = $('#rightName');


// Act upon the button presses
nodecg.listenFor('showNames', function (data) {
    showNames(data);
});
nodecg.listenFor('hideNames', function () {
    hideNames();
});


// The actions
function showNames(data) {

    // Update the name text
    $leftName.html("" + data.leftName.toUpperCase());
    $rightName.html("" + data.rightName.toUpperCase());
}

function hideNames() {

    // Update the name text
    $leftName.html(" ");
    $rightName.html(" ");
}