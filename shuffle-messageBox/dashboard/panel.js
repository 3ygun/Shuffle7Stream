'use strict';

// Find the proper panel
var $panel = $bundle.filter('.message-panel');


// Find the buttons
var $showMessage = $panel.find('#shuffle-message_show');
var $hideMessage = $panel.find('#shuffle-message_hide');


// Act upon a possible button press
$showMessage.click(function() {
	nodecg.sendMessage('showMessage', updateMessageData());
});
$hideMessage.click(function() {
	nodecg.sendMessage('hideMessage');
});


// Update data
function updateMessageData() {
    return {
        'messageTitle': $('#shuffle-message_title').val(),
        'messageBody': $('#shuffle-message_body').val()
    };
}