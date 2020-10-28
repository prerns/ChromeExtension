window.shit = {}
window.bitch = {}
window.drugs = {}
window.sex = {}
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  window.shit[request.url] = request.count1
  window.bitch[request.url] = request.count2
  window.drugs[request.url] = request.count3
  window.sex[request.url] = request.count4
})

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.create({url: 'popup.html'})
})