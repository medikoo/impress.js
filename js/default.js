(function () {
    'use strict';

    var options = {};
    options.steps = {
        "patient-registry": {
            x: -300, y: -600, scale: 5 },
        "html5": {
            x: 2500, y: -1500, scale: 2 },
        "html5-wykorzystanie": {
            x: 2500, y: -200, scale: 2 },
        "aplikacja": {
            x: 5000, y: 80, scale: 5  },
        "organizacja": {
            x: 4500, y: -1300, scale: 2 },
        "webmake": {
            x: 6500, y: -1400, scale: 2 },
        "moduly": {
            x: 6500, y: -400, scale: 2  },
        "domjs": {
            x: -1000, y: 1900, scale: 2  },
        "db": {
            x: 800, y: 1900, scale: 2  },
        "db-kolekcje": {
            x: 2700, y: 1000, scale: 1.7 },
        "db-listy": {
            x: 4300, y: 1000, scale: 1.7  },
        "widoki": {
            x: 2700, y: 2200, scale: 1.7  },
        "pozostale": {
            x: 4300, y: 2200, scale: 1.7  },

        "pytania": {
            x: 8000, y: 2000, rotate: { y: 65, z: -90 }, scale: 5 },

        "dziekuje": {
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
