'use strict';

// Get the update areas
var $titleSpacer = $('#titleSpacer');
var $matchTitle = $('#matchTitle');

/*
 *	Update Base Names
 */
nodecg.listenFor('updateTitle-melee', function (data) {
    // Fix CSS
	$titleSpacer.removeClass("titleSpacer-smash4").addClass("titleSpacer-melee");
	
    // Update with the new names
	$matchTitle.html("" + data.title.toUpperCase());
});
nodecg.listenFor('updateTitle-smash4', function (data) {
    // Fix CSS
	$titleSpacer.removeClass("titleSpacer-melee").addClass("titleSpacer-smash4");
	
    // Update with the new names
	$matchTitle.html("" + data.title.toUpperCase());
});

/*
 *  Show Base Names
 */
nodecg.listenFor('showTitle', function () {
    $("body").removeClass("hideText").addClass("showText");
});

/*
 *  Hide Base Names
 */
nodecg.listenFor('hideTitle', function () {
    $("body").removeClass("showText").addClass("hideText");
});