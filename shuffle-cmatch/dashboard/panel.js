'use strict';

// Find the proper panel
var $panel = $bundle.filter('.cMatch-panel');

// Find the buttons
var $updateMatch = $panel.find('#shuffle-cMatch_update');
var $showMatch = $panel.find('#shuffle-cMatch_show');
var $hideMatch = $panel.find('#shuffle-cMatch_hide');

// Hold the local variables
var $data = updateMatchData();
var $game = 'm';
var $match = '2';

// Act upon a possible button press
$updateMatch.click(function () {
    // Update local variables
    data = updateMatchData();
    $game = data.game;
    $match = data.match;
    
    // Act upon the current settings
    if ($game === 'm') {        // Melee
        nodecg.sendMessage('updateTitle-melee', data);
        nodecg.sendMessage('updateBaseName-melee', data);
        nodecg.sendMessage('updateScore-melee', data);

    } else if ($game === '4') { // Smash 4
        nodecg.sendMessage('updateTitle-smash4', data);
        nodecg.sendMessage('updateBaseName-smash4', data);
        nodecg.sendMessage('updateScore-smash4', data);
        

    } else {
        alert("Game was " + $game);
    }
});
$showMatch.click(function () {
    nodecg.sendMessage('showCamName');
    nodecg.sendMessage('showTitle');
    nodecg.sendMessage('showBaseName');
});
$hideMatch.click(function () {
    nodecg.sendMessage('hideTitle');
    nodecg.sendMessage('hideBaseName');
    nodecg.sendMessage('hideCameName');
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