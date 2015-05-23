'use strict';

// Get the update areas
var $leftName = $('#leftName');
var $rightName = $('#rightName');

/*
 *	Update Base Names
 */
nodecg.listenFor('updateLeftName', function (data) {
    $leftName.html("" + data.leftName.toUpperCase());
});