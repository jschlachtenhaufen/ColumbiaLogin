chrome.storage.sync.get('pause', function(data) {
    let pauseButton = document.getElementById('pause');
    if (data.pause)
        pauseButton.innerHTML = "Resume";
    else
        pauseButton.innerHTML = "Pause";

    pauseButton.onclick = function(element) {
        data.pause = !data.pause;
        chrome.storage.sync.set({'pause': data.pause}, function() {
            pauseButton.innerHTML = data.pause ? "Resume" : "Pause";
        });
    };
});

document.getElementById('options').onclick = function(element) {
    chrome.runtime.openOptionsPage();
}

