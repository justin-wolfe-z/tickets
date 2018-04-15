import settings from "./data/settings";
const folders = {
  highvalue: {}
};
var tickets = [];
var messages = [];

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log(request);
  console.log(sender);
});

chrome.browserAction.onClicked.addListener(function(tab) {
  console.log("ticket button clicked");
});

