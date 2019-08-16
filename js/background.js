chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({'pause': false}, function() {
        chrome.runtime.openOptionsPage();
    });
});
