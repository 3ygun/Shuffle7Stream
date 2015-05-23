'use strict';

// Find the proper panel
var $panel = $bundle.filter('.cMatch-panel');


// Find the buttons
var $updateMatch = $panel.find('#shuffle-cMatch_update');
var $showMatch = $panel.find('#shuffle-cMatch_show');
var $hideMatch = $panel.find('#shuffle-cMatch_hide');


// Act upon a possible button press
$updateMatch.click(function () {
    nodecg.sendMessage('updateCMatch', updateMatchData());
});
$showMatch.click(function () {
	nodecg.sendMessage('showCMatch');
});
$hideMatch.click(function () {
	nodecg.sendMessage('hideCMatch');
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
        'rightName': $('#shuffle-names_right').val(),
        'leftScore': $('#shuffle-leftScore').val(),
        'rightScore': $('#shuffle-rightScore').val()
    };
}