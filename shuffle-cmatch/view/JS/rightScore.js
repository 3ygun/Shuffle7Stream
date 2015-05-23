'use strict';

// Get the update areas
var $rightScore = $('#rightScore');

/*
 *	Update Left Score
 */
nodecg.listenFor('updateLeftScore', function (data) {
    $rightScore.html("" + data.rightScore.toUpperCase());
});





    