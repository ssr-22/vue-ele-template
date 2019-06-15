 function setFontSize(doc, win) {
  var docEl = doc.documentElement
   // orientationchange  苹果移动端
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  var reCaculate = function () {
    var clientWidth = docEl.clientWidth
    if (!clientWidth) return
    docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px'
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, reCaculate, false)
  doc.addEventListener('DOMContentLoaded', reCaculate, false)
}
 setFontSize(document, window)
