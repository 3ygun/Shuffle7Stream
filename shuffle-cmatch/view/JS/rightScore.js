'use strict';

// Get the update areas
var $rightScore = $('#rightScore');

/*
 *	Update Left Score
 */
nodecg.listenFor('updateRightScore', function (data) {
    $rightScore.html("" + data.rightScore.toUpperCase());
});





    