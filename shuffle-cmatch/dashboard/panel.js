'use strict';

// Find the proper panel
var $panel = $bundle.filter('.cMatch-panel');


// Find the buttons
var $showNames = $panel.find('#shuffle-cMatch_show');
var $hideNames = $panel.find('#shuffle-cMatch_hide');


// Act upon a possible button press
$showNames.click(function() {
	nodecg.sendMessage('showNames', updateMatchData());
});
$hideNames.click(function() {
	nodecg.sendMessage('hideNames');
});


// Update data
function updateMatchData() {
    // Game can be 'm' or '4'
    // Match can be '2' or '4'   
    return {
        'game': $('input[name="gameTypes"]:checked').val(),
        'match': $('input[name="matchType"]:checked').val(),
        'title': $('#shuffle-match_title').val(),
        'leftName': $('#shuffle-names_left').val(),
        'rightName': $('#shuffle-names_right').val()
    };
}