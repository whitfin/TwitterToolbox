// Set up the local storage variables and defaults
chrome.extension.sendMessage({
    name: "getPreferences"
}, function(response){
    // Create a new Style element
    var tstyle = document.createElement('style');
    tstyle.setAttribute("rel", "stylesheet");
    tstyle.setAttribute("type", "text/css");
    document.getElementsByTagName("head")[0].appendChild(tstyle);

    // Simple inserter for CSS
    function insert(css){
        tstyle.appendChild(document.createTextNode(css));
    }

    // Moves a div after another with jQuery
    function moveSelectDivs(jNode, selector){
        jNode.insertAfter(selector);
    }

    // Inject style for hiding Who To Follow
    if(response["whoToFollow"] == "true"){
        insert(".wtf-module{display:none !important;}");
    }
    // Inject style for hiding Trends
    if(response["trends"] == "true"){
        insert(".trends{display:none !important;}");
    }
    // Inject style for hiding Photos
    if(response["photos"] == "true"){
        insert(".module.enhanced-media-thumbnails.hidden{display:none !important;}");
    }
    // Inject style for hiding Promotions
    if(response["promo"] == "true"){
        insert(".promo {display:none !important;}.definition {display:none !important;}.component .definition + hr {display:none !important;}.promoted-trend, .promoted-account, .promoted-tweet {display:none !important;}");
    }
    // Inject style for extending Header
    if(response["full-header"] == "true"){
        waitForKeyElements(".dashboard", function(node){
            moveSelectDivs(node, ".module.profile-card.component.profile-header");
            insert(".profile-card.profile-header {width:100% !important;}.profile-card.profile-header .profile-header-inner {background-size:100% !important;}.profile-header-inner-overlay {width:100% !important;}");
        });
    }
    // Inject style for removing Header
    if(response["remove-header"] == "true"){
        insert(".profile-card.profile-header .profile-header-inner {display:none !important;}.profile-card.profile-header {background-color:white !important;}");
    }
});
