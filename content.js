  
//alert('Grrr.')
//chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    
/*
var sWords = ['shit', 'fuck', 'drugs', 'bitch']
var wordCount = new Array()
for (i = 0; i < sWords.length; i++) {
   
   wordCount[i] = wordParser(sWords[i])
}

function wordParser(sWord) {
    const word = new RegExp(sWord, 'gi')
    const matches = document.documentElement.innerHTML.match(word)
    if (matches != undefined){
        return matches.length
    }
    else
    {
        return 0
    }
}

function sendMessage(wordCount) {
    for (j= 0; j < wordCount.length; j++) {
        chrome.runtime.sendMessage({
            url:window.location.href,
            count:wordCount[j]
        })
    }
        
}
*/
    
    
    const word1 = new RegExp('shit', 'gi')
    const word2 = new RegExp('bitch', 'gi')
    const word3 = new RegExp('drugs', 'gi')
    const word4 = new RegExp('sex', 'gi')
    var matches1 = document.documentElement.innerHTML.match(word1)
    var matches2 = document.documentElement.innerHTML.match(word2)
    var matches3 = document.documentElement.innerHTML.match(word3)
    var matches4 = document.documentElement.innerHTML.match(word4)
    if (matches1 == null) {
        matches1 = 0
    }
    if (matches2 == null) {
        matches2 = 0
    }
    if (matches3 == null) {
        matches3 = 0
    }
    if (matches4 == null) {
        matches4 = 0
    }
    
        chrome.runtime.sendMessage({
            url:window.location.href,
            count1: matches1.length,
            count2: matches2.length,
            count3: matches3.length,
            count4: matches4.length
        })

