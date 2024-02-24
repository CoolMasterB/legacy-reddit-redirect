function redirect(reddit) {
    let url = "https://new.reddit.com/" + reddit;
    chrome.tabs.update({ url: url });
}

// Add the listener when the extension is installed or started
chrome.runtime.onInstalled.addListener(function () {
    chrome.omnibox.setDefaultSuggestion({ description: "Redirect to new.reddit.com" });
});

// Add the listener for omnibox input
chrome.omnibox.onInputEntered.addListener(function (text) {
    redirect(text);
});
