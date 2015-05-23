'use strict';

// Get the update areas
var $toC1S = $('#toCam1Spacer');
var $preC1S = $('#preCam1Spacer');
var $cam1 = $('#cam1');
var $toC2S = $('#toCam2Spacer');
var $preC2S = $('#preCam2Spacer');
var $cam2 = $('#cam2');

/*
 *	Update Base Names
 */
nodecg.listenFor('updateCamName-melee1Cam', function (data) {
    // No cam 1 in this scene
    
    // Fix CSS
	$toC1S.removeClass("toCam1Spacer-smash4 toCam1Spacer-melee2Cam");
    $preC1S.removeClass("preCam1Spacer-smash4 preCamSpacer-melee");
    $cam1.removeClass("cam-smash4 cam-melee");
	$toC2S.removeClass("toCam2Spacer-smash4 toCam2Spacer-melee2Cam").addClass("toCam2Spacer-melee1Cam");
    $preC2S.removeClass("preCam2Spacer-smash4").addClass("preCamSpacer-melee");
    $cam2.removeClass("cam-smash4 cam2-smash4").addClass("cam-melee");
    
    // Update with the new names
    $cam1.html(" ");
    $cam2.html("" + data.leftName.toUpperCase() + " v " + data.rightName.toUpperCase());
});
nodecg.listenFor('updateCamName-melee2Cam', function (data) {
    // Fix CSS
	$toC1S.removeClass("toCam1Spacer-smash4").addClass("toCam1Spacer-melee2Cam");
    $preC1S.removeClass("preCam1Spacer-smash4").addClass("preCamSpacer-melee");
    $cam1.removeClass("cam-smash4").addClass("cam-melee");
	$toC2S.removeClass("toCam2Spacer-smash4 toCam2Spacer-melee1Cam").addClass("toCam2Spacer-melee2Cam");
    $preC2S.removeClass("preCam2Spacer-smash4").addClass("preCamSpacer-melee");
    $cam2.removeClass("cam-smash4 cam2-smash4").addClass("cam-melee");
    
    // Update with the new names
    $cam1.html("" + data.leftName.toUpperCase());
    $cam2.html("" + data.rightName.toUpperCase());
});
nodecg.listenFor('updateCamName-smash4', function (data) {
    // Fix CSS
	$toC1S.removeClass("toCam1Spacer-melee2Cam").addClass("toCam1Spacer-smash4");
    $preC1S.removeClass("preCam1Spacer-melee").addClass("preCamSpacer-smash4");
    $cam1.removeClass("cam-melee").addClass("cam-smash4");
	$toC2S.removeClass("toCam2Spacer-melee2Cam toCam2Spacer-melee1Cam").addClass("toCam2Spacer-smash4");
    $preC2S.removeClass("preCamSpacer-melee").addClass("preCam2Spacer-smash4");
    $cam2.removeClass("cam-melee").addClass("cam-smash4 cam2-smash4");
    
    // Update with the new names
    $cam1.html("" + data.leftName.toUpperCase());
    $cam2.html("" + data.rightName.toUpperCase());
});

/*
 *  Show Base Names
 */
nodecg.listenFor('showCamName', function () {
    $("body").removeClass("hideText").addClass("showText");
});

/*
 *  Hide Base Names
 */
nodecg.listenFor('hideCameName', function () {
    $("body").removeClass("showText").addClass("hideText");
});