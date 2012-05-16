(function () {
    'use strict';

    var options = {};
    options.steps = {
        "heading": {
            x: -300, y: -600, scale: 5 },
        "intro": {
            x: 2500, y: -1500, scale: 1 },

        "js": {
            x: 2500, y: -500, scale: 2 },
        "js-engines": {
            x: 3400, y: -1500, scale: 1  },
        "server-less": {
            x: 5500, y: -1500, scale: 4  },
        "roche-html5": {
            x: 3700, y: -900, scale: 1 },
        "code-stats": {
            x: 3700, y: -500, scale: 1  },
        "how-built": {
            x: 3700, y: -50, scale: 2  },
        "modules": {
            x: 5000, y: -500, scale: 1.5  },
        "webmake": {
            x: 6300, y: -500, scale: 1.5  },
        "modules-done-right": {
            x: 5500, y: 300, scale: 2  },

        "data-storage": {
            x: -1000, y: 600, scale: 2  },
        "data-manipulation": {
            x: -1200, y: 1600, scale: 1.5  },
        "data-collections": {
            x: 100, y: 800, scale: 1.5  },
        "data-lists": {
            x: 100, y: 1800, scale: 1.5  },
        "data-conflicts": {
            x: -700, y: 2500, scale: 2  },
        "templates": {
            x: 1700, y: 550, scale: 2  },
        "domjs": {
            x: 1400, y: 1400, scale: 1.5  },
        "routing": {
            x: 1400, y: 2200, scale: 1.5  },
        "views": {
            x: 2500, y: 700, scale: 1.5  },
        "others": {
            x: 3800, y: 200, scale: 1.5  },
        "socketio": {
            x: 3600, y: 400, scale: 1.5  },
        "formidable": {
            x: 3600, y: 600, scale: 1.5  },
        "forever": {
            x: 3600, y: 800, scale: 1.5  },
        "nodemailer": {
            x: 3600, y: 1000, scale: 1.5  },
        "jslint": {
            x: 3600, y: 1200, scale: 1.5  },
        "mongodb": {
            x: 3600, y: 1400, scale: 1.5  },
        "tad": {
            x: 3600, y: 1600, scale: 1.5  },
        "low-level": {
            x: 2400, y: 1400, scale: 1.5  },
        "es5-ext": {
            x: 2400, y: 1650, scale: 1.5  },
        "deferred": {
            x: 2400, y: 1900, scale: 1.5  },
        "event-emitter": {
            x: 3600, y: 1800, scale: 1.5 },
        "browsers-support": {
            x: 3700, y: 2200, scale: 1.5  },
        "es3": {
            x: 700, y: 2600, scale: 1.5  },
        "trend-growing": {
            x: 1500, y: 2500, scale: 1.5  },
        "trend": {
            x: 2600, y: 2600, scale: 1.5  },

        "questions": {
            x: 7200, y: 2000, rotate: { y: 65, z: -90 }, scale: 5 },

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
