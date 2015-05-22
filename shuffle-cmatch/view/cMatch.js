'use strict';

// Get the name areas
var $leftName = $('#leftName');
var $rightName = $('#rightName');
var $matchTitle = $('#matchTitle');


// Act upon the button presses
nodecg.listenFor('showCMatch', function (data) {
    showNames(data);
});
nodecg.listenFor('showCMatch', function () {
    hideNames();
});


// The actions
function showNames(data) {
	// Update the title text
	$matchTitle.html("" + data.title.toUpperCase());

    // Update the name text
    $leftName.html("" + data.leftName.toUpperCase());
    $rightName.html("" + data.rightName.toUpperCase());
}

function hideNames() {

    // Update the name text
    $leftName.html(" ");
    $rightName.html(" ");
}