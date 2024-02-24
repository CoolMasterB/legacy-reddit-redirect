const host = "https://new.reddit.com";
const regex = /^https?:\/\/(?:www.reddit.com|reddit.com)([\S\s]*)/;

chrome.declarativeNetRequest.updateDynamicRules({
  addRules: [{
    id: "redirectRule",
    priority: 1,
    action: {
      type: "redirect",
      redirect: {
        url: host + "$1"
      }
    },
    condition: {
      regexFilter: regex.source,
      resourceTypes: ["main_frame", "sub_frame"]
    }
  }]
});


