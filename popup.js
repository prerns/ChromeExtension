
document.addEventListener('DOMContentLoaded', function () {
    
    const bg = chrome.extension.getBackgroundPage()
    Object.keys(bg.shit).forEach(function (url) {
      const ol = document.createElement('ol')
      ol.textContent = `${url}: ${bg.shit[url]} instances of "shit", ${bg.bitch[url]} instances of "bitch", ${bg.drugs[url]} instances of "drugs", ${bg.sex[url]} instances of "sex"`
      document.body.appendChild(ol)
    })

}, false)