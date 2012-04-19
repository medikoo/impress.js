(function () {
    'use strict';

    var options = {};
    options.steps = {
        "javascript": {
            x: -300, y: -600, scale: 5 },
        "misunderstood": {
            x: 2200, y: -1800, scale: 2 },
        "overall": {
            x: 2200, y: -1200, scale: 2 },
        "functional": {
            x: 2200, y: -300, scale: 2  },
        "closure": {
            x: 4100, y: -1700, scale: 2 },
        "closure-2": {
            x: 4100, y: -700, scale: 2 },
        "oop": {
            x: 5700, y: -2000, scale: 1.5  },
        "oop-sample": {
            x: 5700, y: -1000, scale: 1.5  },
        "oop-1": {
            x: 7200, y: -1800, scale: 1.5  },
        "oop-2": {
            x: 7200, y: -800, scale: 1.5 },
        "oop-3": {
            x: 7200, y: 200, scale: 1.5 },

        "oop-private": {
            x: -900, y: 1300, scale: 2  },
        "oop-super": {
            x: -900, y: 2300, scale: 2  },
        "ecosystem": {
            x: 1000, y: 1800, scale: 2  },
        "ecma": {
            x: 2700, y: 700, scale: 2  },
        "dom": {
            x: 4500, y: 500, scale: 2  },
        "modules": {
            x: 2900, y: 2200, scale: 2  },
        "tests": {
            x: 4500, y: 1500, scale: 2  },

        "questions": {
            x: 8000, y: 2000, rotate: { y: 65, z: -90 }, scale: 5 },

        "thank-you": {
            x: 6400, y: 1700, scale: 5 }
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
            counter.innerHTML = (index + 1) + " / " + (steps.length - 1);
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
