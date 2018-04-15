const getTicketID = url => {
  var ticketArr = url.split("https://secure.helpscout.net/conversation/");
  var ticketArr2 = ticketArr[1].split("/");
  return ticketArr2[0];
};

var reviewingContainer = document.getElementById("js-viewingReplying");
var ticketID = getTicketID(window.location.href);
var sitting = reviewingContainer.firstChild.children;

if (sitting.length > 0) {
  chrome.runtime.sendMessage({ occupied: true, ticketID: ticketID });
} else {
  setTimeout(() => {
    reviewingContainer = document.getElementById("js-viewingReplying");
    sitting = reviewingContainer.firstChild.children;
    if (sitting.length > 0) {
      chrome.runtime.sendMessage({ occupied: true, ticketID: ticketID });
    } else {
      chrome.runtime.sendMessage({ occupied: false, ticketID: ticketID });
    }
  }, 1000);
}
