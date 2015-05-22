'use strict';

// Get the update areas
var $matchTitle = $('#matchTitle');
var $leftName = $('#leftName');
var $rightName = $('#rightName');


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
    // Hide everything
    $matchTitle.html (" ");
    $leftName.html(" ");
    $rightName.html(" ");
}