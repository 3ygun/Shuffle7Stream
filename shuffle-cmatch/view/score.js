'use strict';

// Get the update areas
var $toSS = $('#toScoresSpacer');
var $preSS = $('#preScoresSpacer'); 
var $leftScore = $('#leftScore');
var $centerSS = $('#centerScoreSpacer');
var $rightScore = $('#rightScore');

/*
 *	Update Base Names
 */
nodecg.listenFor('updateScore-melee', function (data) {
    // Fix CSS
	$toSS.removeClass("toScores-smash4").addClass("toScores-melee");
    $preSS.removeClass("preScoreSpacer-smash4").addClass("preScoreSpacer-melee");
	$centerSS.removeClass("centerScoreSpacer-smash4").addClass("centerScoreSpacer-melee");
    
    // Update with the new names
    $leftScore.html("" + data.leftScore.toUpperCase());
    $rightScore.html("" + data.rightScore.toUpperCase());
});
nodecg.listenFor('updateScore-smash4', function (data) {
    // Fix CSS
	$toSS.removeClass("toScores-melee").addClass("toScores-smash4");
    $preSS.removeClass("preScoreSpacer-melee").addClass("preScoreSpacer-smash4");
	$centerSS.removeClass("centerScoreSpacer-melee").addClass("centerScoreSpacer-smash4");
    
    // Update with the new names
    $leftScore.html("" + data.leftScore.toUpperCase());
    $rightScore.html("" + data.rightScore.toUpperCase());
});

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