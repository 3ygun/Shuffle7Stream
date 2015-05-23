'use strict';

// Get the update areas
var $leftScore = $('#leftScore');

/*
 *	Update Left Score
 */
nodecg.listenFor('updateLeftScore', function (data) {
    $leftScore.html("" + data.leftScore.toUpperCase());
});