chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({'state': 'off'});
    // chrome.storage.sync.set({'urls': []});
    // chrome.storage.sync.set({'playlists': []});
    // chrome.storage.sync.set({'redirect_url': ''});    
});

chrome.tabs.onActivated.addListener(function(info) {
    console.log("activated");
        // chrome.scripting.executeScript({
        //     files: ['contentScript.js'],
        //     target: {tabId: info.tabId}
        // });
});
chrome.tabs.onCreated.addListener((activeinfo) => {
    console.log('new tab');
        chrome.tabs.query({'active': true, 'lastFocusedWindow': true, 'currentWindow': true}, function (tabs) {
            console.log(tabs,activeinfo);
            var url = tabs[0].url;
            if (url.includes("www.youtube.com/watch")) {
                console.log("INSIDE YOUTUBE IF ELSE");
                chrome.scripting.executeScript({
                    files: ['contentScript.js'],
                    target: {tabId: tabs[0].id}
                });
            }
    });
    
});