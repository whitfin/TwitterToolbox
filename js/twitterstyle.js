// Set up the local storage variables and defaults
chrome.extension.sendMessage({
    name: "getPreferences"
},

function (response) {
    var showWTF = response.WTF;
    var showTRENDS = response.TRENDS;
    var showPROMOTE = response.PROMO;
    var fullHEAD = response.FHEAD;
    var removeHEAD = response.RHEAD;

    var defaultSetting = "show";

    // Set up the defaults
    // This still needs major rework. 
    if (showWTF == undefined || showTRENDS == undefined) {
        showWTF = defaultSetting;
        showTRENDS = defaultSetting;
	showPROMOTE = defaultSetting;
        fullHEAD = defaultSetting;
        removeHEAD = defaultSetting;
    }

    // Create a new Style element
    var tstyle = document.createElement('style');
    tstyle.setAttribute("rel", "stylesheet");
    tstyle.setAttribute("type", "text/css");
    document.getElementsByTagName("head")[0].appendChild(tstyle);

    // Inject style for hiding Who To Follow 
    if (showWTF == "hide") {
        tstyle.appendChild(document.createTextNode(".wtf-module{display:none !important;}"));
    }

    // Inject style for hiding Trends
    if (showTRENDS == "hide") {
        tstyle.appendChild(document.createTextNode(".trends{display:none !important;}"));
    }

    // Inject style for hiding Promotions
    if (showPROMOTE == "hide") {
	tstyle.appendChild(document.createTextNode(".promo {display:none !important;}.definition {display:none !important;}.component .definition + hr {display:none !important;}.promoted-trend, .promoted-account, .promoted-tweet {display:none !important;}"));
    }

    // Inject style for extending Header
    if (fullHEAD == "show") {
        waitForKeyElements(".dashboard", moveSelectDivs);
        tstyle.appendChild(document.createTextNode(".profile-card.profile-header {width:100% !important;}.profile-card.profile-header .profile-header-inner {background-size:100% !important;}.profile-header-inner-overlay {width:100% !important;}"));
    }

    // Inject style for removing Header
    if (removeHEAD == "show") {
        tstyle.appendChild(document.createTextNode(".profile-card.profile-header .profile-header-inner {display:none !important;}.profile-card.profile-header {background-color:white !important;}"));
    }

});

function moveSelectDivs(jNode) {
    jNode.insertAfter(".module.profile-card.component.profile-header");
}
