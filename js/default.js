(function () {
    'use strict';

    var options = {};
    options.steps = {
        "future-web": {
            x: -300, y: -600, scale: 5 },
        "intro": {
            x: 2500, y: -1500, scale: 1 },
        "html5": {
            x: 3200, y: -500, scale: 3 },
        "brief": {
            x: 5800, y: -700, scale: 3  },
        "code": {
            x: -300, y: 1600, scale: 3 },
        "trend": {
            x: 2600, y: 1600, scale: 3  },

        "questions": {
            x: 8000, y: 2000, rotate: { y: 65, z: -90 }, scale: 5 },

        "thank-you": {
            x: 6400, y: 1600, scale: 5 }
    };
    if (location.pathname.match(/\/3d\/(?:index\.html)?$/)) {
        document.getElementById('fm1').className = 'fallback-message';
        document.getElementById('fm2').className = 'fallback-message hidden';
        impress.init(options);
    }

    hljs.initHighlightingOnLoad();

    if (!document.querySelector || !Array.prototype.forEach) {
        return;
    }
    var forEach = Array.prototype.forEach
      , keys = Object.keys
      , steps = document.querySelectorAll("div.step")

    forEach.call(steps, function (dom, index) {
        if (dom.id !== 'overview') {
            var wrap = document.createElement("div");
            wrap.className = 'wrap';
            while (dom.firstChild) {
                wrap.appendChild(dom.firstChild);
            }
            dom.appendChild(wrap);
            var counter = wrap.appendChild(document.createElement('div'));
            counter.className = "counter";
            counter.innerHTML = (index + 1) + " / " + steps.length;
        }
    });

    var start = Date.now();
    var timerDom = document.getElementById('timer')
      , log = window.TIMELOG = [];

    var durationToStr = function () {
        var now = Date.now()
          , min = String(Math.floor((now - start)/(1000*60)))
          , sec = String(Math.floor((now - start)/(1000))%60);
        return ((min.length > 1) ? min : ('0' + min)) + ':' +
            ((sec.length > 1) ? sec : ('0' + sec));
    };
    // setInterval(function () {
    //     timerDom.innerHTML = durationToStr();
    // }, 1000);


    window.addEventListener("hashchange", function () {
        console.log("HASH CHANGE", location.hash);
        log.push([location.hash, durationToStr()]);
    }, false);

}());
