'use strict';

// Find the proper panel
var $panel = $bundle.filter('.names-panel');


// Find the buttons
var $showNames = $panel.find('#shuffle-names_show');
var $hideNames = $panel.find('#shuffle-names_hide');


// Act upon a possible button press
$showNames.click(function() {
	nodecg.sendMessage('showNames', updateData());
});
$hideNames.click(function() {
	nodecg.sendMessage('hideNames');
});


// Update data
function updateData() {
    return {
        'leftName': $('#shuffle-names_left').val(),
        'rightName': $('#shuffle-names_right').val()
    };
}