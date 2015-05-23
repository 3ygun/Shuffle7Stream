'use strict';

// Get the update areas
var $matchTitle = $('#matchTitle');

/*
 *	Update Title
 */
nodecg.listenFor('updateTitle', function (data) {
	$matchTitle.html("" + data.title.toUpperCase());
});