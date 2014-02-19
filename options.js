function loadOptions() {
    var background = chrome.extension.getBackgroundPage();
    // Get selected options from localstore
    document.getElementById("full-header").value = background.getItem("full-header") || false;
    document.getElementById("photos").value = background.getItem("photos") || false;
    document.getElementById("promotions").value = background.getItem("promo") || false;
    document.getElementById("remove-header").value = background.getItem("remove-header") || false;
    document.getElementById("trends").value = background.getItem("trends") || false;
    document.getElementById("whotofollow").value = background.getItem("whoToFollow") || false;
}

function saveOptions() {
    var background = chrome.extension.getBackgroundPage();
    // Save selected options to localstore
    background.setItem("full-header", document.getElementById("full-header").value);
    background.setItem("photos", document.getElementById("photos").value);
    background.setItem("promo", document.getElementById("promotions").value);
    background.setItem("remove-header", document.getElementById("remove-header").value);
    background.setItem("trends", document.getElementById("trends").value);
    background.setItem("whoToFollow", document.getElementById("whotofollow").value);
    document.getElementById("msg").style.visibility = "visible";
    chrome.tabs.getSelected(null, function(tab) {
        chrome.tabs.reload(tab.id);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', saveOptions);
});

window.addEventListener('load', loadOptions, false);