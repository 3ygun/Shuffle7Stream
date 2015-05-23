'use strict';

// Find the proper panel
var $panel = $bundle.filter('.cMatch-panel');

// Find the buttons
var $updateMatch = $panel.find('#shuffle-cMatch_update');

/*
 *  Update content
 */
$updateMatch.click(function () {
    nodecg.sendMessage('updateTitle', {'title': $('#shuffle-match_title').val()});
    nodecg.sendMessage('updateLeftName', {'leftName': $('#shuffle-names_left').val()});
    nodecg.sendMessage('updateRightName', {'rightName': $('#shuffle-names_right').val()});
    nodecg.sendMessage('updateLeftScore', {'leftScore': $('#shuffle-leftScore').val()});
    nodecg.sendMessage('updateRightScore', {'rightScore': $('#shuffle-rightScore').val()});
});