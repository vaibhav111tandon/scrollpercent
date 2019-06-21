function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    var percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
    return parseInt(Math.floor(percent));
}

var scrollpercent = document.querySelector('.scrollpercent');
window.addEventListener('scroll', (e) => {
    scrollpercent.innerHTML = ''+getScrollPercent()+'%';
});