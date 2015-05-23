'use strict';

// Hold the local variables
var $game = 'm';
var $match = '2';


/*
 *  Either update, show, hide
 */
// Act upon the button presses
nodecg.listenFor('updateCMatch', function (data) {
    // Update local variables
    $game = data.game;
    $match = data.match;
    
    // Act upon the current settings
    if ($game === 'm') {        // Melee
        nodecg.sendMessage('updateTitle-melee', data);
        nodecg.sendMessage('updateBaseName-melee', data);
        
        if ($match === '2') {   // 1v1
            nodecg.sendMessage('updateCamName-melee1Cam', data);
        } else if ($match === '4') { // 2v2
            nodecg.sendMessage('updateCamName-melee2Cam', data);
        } else {                // Error
            alert("Match was " + $match);
        }
    } else if ($game === '4') { // Smash 4
        nodecg.sendMessage('updateTitle-smash4', data);
        nodecg.sendMessage('updateBaseName-smash4', data);
        nodecg.sendMessage('updateCamName-smash4', data);
        
        if ($match === '2') {   // 1v1
            
        } else if ($match === '4') { // 2v2
            
        } else {                // Error
            alert("Match was " + $match);
        }
    } else {
        alert("Game was " + $game);
    }
});

nodecg.listenFor('showCMatch', function () {
    // Act upon the current settings
    if ($game === 'm') {        // Melee
        if ($match === '2') {   // 1v1
        
        } else if ($match === '4') { // 2v2
        
        } else {                // Error
            alert("Match was " + $match);
        }
        
        nodecg.sendMessage('showCamName');
        nodecg.sendMessage('showTitle');
        nodecg.sendMessage('showBaseName');
    } else if ($game === '4') { // Smash 4
        if ($match === '2') {   // 1v1
            
        } else if ($match === '4') { // 2v2
            
        } else {                // Error
            alert("Match was " + $match);
        }
        
        nodecg.sendMessage('showCamName');
        nodecg.sendMessage('showTitle');
        nodecg.sendMessage('showBaseName');
    } else {
        alert("Game was " + $game);
    }
});

nodecg.listenFor('hideCMatch', function () {
    nodecg.sendMessage('hideTitle');
    nodecg.sendMessage('hideBaseName');
    nodecg.sendMessage('hideCameName');
});