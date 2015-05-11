'use strict';

// Get the name areas
var $messageBox = $('#messageBox');
var $messageTitle = $('#messageTitle');
var $messageBody = $('#messageBody');


// Act upon the button presses
nodecg.listenFor('showMessage', function (data) {
    showMessage(data);
});
nodecg.listenFor('hideMessage', function () {
    hideMessage();
});


// The actions
function showMessage(data) {
    $messageTitle.html("" + data.messageTitle.toUpperCase());
    $messageBody.html("" + data.messageBody.toUpperCase());

}

function hideMessage() {

    $messageTitle.html(" ");
    $messageBody.html(" ");
}