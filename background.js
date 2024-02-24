// Function to redirect reddit.com pages to new.reddit.com
function redirect(reddit) {
    let url = "https://new.reddit.com/" + reddit;
    chrome.tabs.update({ url: url });
}

// Add the listener for omnibox input
chrome.omnibox.onInputEntered.addListener(function (text) {
    redirect(text);
});

