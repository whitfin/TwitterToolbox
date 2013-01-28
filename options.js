function loadOptions() {

    // Load up the background page
    var background = chrome.extension.getBackgroundPage();

    // declare the SHOW variables and get their values from LocalStorage
    var showWTF = background.getItem("showWTF");
    var showTRENDS = background.getItem("showTRENDS");
    var fullHEAD = background.getItem("fullHEAD");
    var removeHEAD = background.getItem("removeHEAD");


    // the default setting is to hide the elements
    var defaultSetting = "show";

    // Set up the defaults if no values are present in LocalStorage
    // Needs major rework too
    if (showWTF == undefined || showTRENDS == undefined) s {
        // if undefined, set to defaults
        background.setItem("showWTF", defaultSetting);
        background.setItem("showTRENDS", defaultSetting);
        background.setItem("fullHEAD", defaultSetting);
        background.setItem("removeHEAD", defaultSetting);

        // retrieve them from the localstore
        showWTF = background.getItem("showWTF");
        showTRENDS = background.getItem("showTRENDS");
        fullHEAD = background.getItem("fullHEAD");
        removeHEAD = background.getItem("removeHEAD");
    }

    // get the options form elements
    var wtf = document.getElementById("whotofollow");
    var trends = document.getElementById("trends");
    var fullHeader = document.getElementById("full-header");
    var removeHeader = document.getElementById("remove-header");

    selectPreference(wtf, wchild, showWTF);
    selectPreference(trends, trendschild, showTRENDS);
    selectPreference(fullHeader, fhchild, fullHEAD);
    selectPreference(removeHeader, rhchild, removeHEAD);

}

function selectPreference($option, $child, $local) {
    for (var i = 0; i < $option.children.length; i++) {
        var $child = $option.children[i];
        if ($child.value == $local) {
            $child.selected = "true";
            break;
        }
    }
}

function saveOptions() {
    var background = chrome.extension.getBackgroundPage();
    var wtf = document.getElementById("whotofollow");
    var trends = document.getElementById("trends");
    var fullHeader = document.getElementById("full-header");
    var removeHeader = document.getElementById("remove-header");

    // Save selected options to localstore
    background.setItem("showTRENDS", trends.children[trends.selectedIndex].value);
    background.setItem("showWTF", wtf.children[wtf.selectedIndex].value);
    background.setItem("fullHEAD", fullHeader.children[fullHeader.selectedIndex].value);
    background.setItem("removeHEAD", removeHeader.children[removeHeader.selectedIndex].value);
    document.getElementById("msg").style.visibility = "visible";
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', saveOptions);
});

window.addEventListener('load', loadOptions, false);