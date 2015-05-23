'use strict';

// Get the update areas
var $leftName = $('#leftName');

/*
 *	Update Left Name
 */
nodecg.listenFor('updateLeftName', function (data) {
    $leftName.html("" + data.leftName.toUpperCase());
});