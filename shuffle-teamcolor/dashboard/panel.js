'use strict';

// Find the proper panel
var $panel = $bundle.filter('.teamColor-panel');

// Find the buttons
var $updateTC = $panel.find('#shuffle-TeamColor_update');

/*
 *  Update content
 */
$updateTC.click(function () {
    nodecg.sendMessage('updateLeftTC', {'color': $('input[name="leftTeamColor"]:checked').val()});
    nodecg.sendMessage('updateRightTC', {'color': $('input[name="rightTeamColor"]:checked').val()});
    nodecg.sendMessage('updateTC', {'colorL': $('input[name="leftTeamColor"]:checked').val(), 'colorR': $('input[name="rightTeamColor"]:checked').val()});
});