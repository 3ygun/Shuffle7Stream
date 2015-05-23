'use strict';

// Get the update areas
var $rightName = $('#rightName');

/*
 *	Update Right Name
 */
nodecg.listenFor('updateRightName', function (data) {
    $rightName.html("" + data.rightName.toUpperCase());
});