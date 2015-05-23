'use strict';

// Get the update areas
var $toNS = $('#toNameSpacer');
var $preNS = $('#preNameSpacer'); 
var $leftName = $('#leftName');
var $centerNS = $('#centerNameSpace');
var $rightName = $('#rightName');

/*
 *	Update Base Names
 */
nodecg.listenFor('updateBaseName-melee', function (data) {
    // Fix CSS
	$toNS.removeClass("toName-smash4 toName-other").addClass("toName-melee");
    $preNS.removeClass("preNameSpacer-smash4 preNameSpacer-other").addClass("preNameSpacer-melee");
    $leftName.removeClass("nameWidth-smash4 nameWidth-other").addClass("nameWidth-melee");
	$centerNS.removeClass("centerNameSpacer-smash4 centerNameSpacer-other").addClass("centerNameSpacer-melee");
    $rightName.removeClass("nameWidth-smash4 nameWidth-other").addClass("nameWidth-melee");
    
    // Update with the new names
    $leftName.html("" + data.leftName.toUpperCase());
    $rightName.html("" + data.rightName.toUpperCase());
});

// TODO - Smash 4 version

/*
 *  Show Base Names
 */
nodecg.listenFor('showBaseName', function () {
    $("body").removeClass("hideText").addClass("showText");
});

/*
 *  Hide Base Names
 */
nodecg.listenFor('hideBaseName', function () {
    $("body").removeClass("showText").addClass("hideText");
});