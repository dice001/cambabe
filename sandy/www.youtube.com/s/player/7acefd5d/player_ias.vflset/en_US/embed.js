(function(g) {
    var window = this;
    'use strict';
    var BNa = function(a, b) {
            var c = (b - a.i) / (a.l - a.i);
            if (0 >= c) return 0;
            if (1 <= c) return 1;
            for (var d = 0, e = 1, f = 0, h = 0; 8 > h; h++) {
                f = g.Yq(a, c);
                var l = (g.Yq(a, c + 1E-6) - f) / 1E-6;
                if (1E-6 > Math.abs(f - b)) return c;
                if (1E-6 > Math.abs(l)) break;
                else f < b ? d = c : e = c, c -= (f - b) / l
            }
            for (h = 0; 1E-6 < Math.abs(f - b) && 8 > h; h++) f < b ? (d = c, c = (c + e) / 2) : (e = c, c = (c + d) / 2), f = g.Yq(a, c);
            return c
        },
        l5 = function() {
            return {
                D: "svg",
                U: {
                    height: "100%",
                    version: "1.1",
                    viewBox: "0 0 110 26",
                    width: "100%"
                },
                S: [{
                    D: "path",
                    Kb: !0,
                    K: "ytp-svg-fill",
                    U: {
                        d: "M 16.68,.99 C 13.55,1.03 7.02,1.16 4.99,1.68 c -1.49,.4 -2.59,1.6 -2.99,3 -0.69,2.7 -0.68,8.31 -0.68,8.31 0,0 -0.01,5.61 .68,8.31 .39,1.5 1.59,2.6 2.99,3 2.69,.7 13.40,.68 13.40,.68 0,0 10.70,.01 13.40,-0.68 1.5,-0.4 2.59,-1.6 2.99,-3 .69,-2.7 .68,-8.31 .68,-8.31 0,0 .11,-5.61 -0.68,-8.31 -0.4,-1.5 -1.59,-2.6 -2.99,-3 C 29.11,.98 18.40,.99 18.40,.99 c 0,0 -0.67,-0.01 -1.71,0 z m 72.21,.90 0,21.28 2.78,0 .31,-1.37 .09,0 c .3,.5 .71,.88 1.21,1.18 .5,.3 1.08,.40 1.68,.40 1.1,0 1.99,-0.49 2.49,-1.59 .5,-1.1 .81,-2.70 .81,-4.90 l 0,-2.40 c 0,-1.6 -0.11,-2.90 -0.31,-3.90 -0.2,-0.89 -0.5,-1.59 -1,-2.09 -0.5,-0.4 -1.10,-0.59 -1.90,-0.59 -0.59,0 -1.18,.19 -1.68,.49 -0.49,.3 -1.01,.80 -1.21,1.40 l 0,-7.90 -3.28,0 z m -49.99,.78 3.90,13.90 .18,6.71 3.31,0 0,-6.71 3.87,-13.90 -3.37,0 -1.40,6.31 c -0.4,1.89 -0.71,3.19 -0.81,3.99 l -0.09,0 c -0.2,-1.1 -0.51,-2.4 -0.81,-3.99 l -1.37,-6.31 -3.40,0 z m 29.59,0 0,2.71 3.40,0 0,17.90 3.28,0 0,-17.90 3.40,0 c 0,0 .00,-2.71 -0.09,-2.71 l -9.99,0 z m -53.49,5.12 8.90,5.18 -8.90,5.09 0,-10.28 z m 89.40,.09 c -1.7,0 -2.89,.59 -3.59,1.59 -0.69,.99 -0.99,2.60 -0.99,4.90 l 0,2.59 c 0,2.2 .30,3.90 .99,4.90 .7,1.1 1.8,1.59 3.5,1.59 1.4,0 2.38,-0.3 3.18,-1 .7,-0.7 1.09,-1.69 1.09,-3.09 l 0,-0.5 -2.90,-0.21 c 0,1 -0.08,1.6 -0.28,2 -0.1,.4 -0.5,.62 -1,.62 -0.3,0 -0.61,-0.11 -0.81,-0.31 -0.2,-0.3 -0.30,-0.59 -0.40,-1.09 -0.1,-0.5 -0.09,-1.21 -0.09,-2.21 l 0,-0.78 5.71,-0.09 0,-2.62 c 0,-1.6 -0.10,-2.78 -0.40,-3.68 -0.2,-0.89 -0.71,-1.59 -1.31,-1.99 -0.7,-0.4 -1.48,-0.59 -2.68,-0.59 z m -50.49,.09 c -1.09,0 -2.01,.18 -2.71,.68 -0.7,.4 -1.2,1.12 -1.49,2.12 -0.3,1 -0.5,2.27 -0.5,3.87 l 0,2.21 c 0,1.5 .10,2.78 .40,3.78 .2,.9 .70,1.62 1.40,2.12 .69,.5 1.71,.68 2.81,.78 1.19,0 2.08,-0.28 2.78,-0.68 .69,-0.4 1.09,-1.09 1.49,-2.09 .39,-1 .49,-2.30 .49,-3.90 l 0,-2.21 c 0,-1.6 -0.2,-2.87 -0.49,-3.87 -0.3,-0.89 -0.8,-1.62 -1.49,-2.12 -0.7,-0.5 -1.58,-0.68 -2.68,-0.68 z m 12.18,.09 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.18,-0.70 -0.18,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .18,2.39 .68,3.09 .49,.7 1.21,1 2.21,1 1.4,0 2.48,-0.69 3.18,-2.09 l .09,0 .31,1.78 2.59,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 17.31,0 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.21,-0.70 -0.21,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .21,2.39 .71,3.09 .5,.7 1.18,1 2.18,1 1.39,0 2.51,-0.69 3.21,-2.09 l .09,0 .28,1.78 2.62,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 20.90,2.09 c .4,0 .58,.11 .78,.31 .2,.3 .30,.59 .40,1.09 .1,.5 .09,1.21 .09,2.21 l 0,1.09 -2.5,0 0,-1.09 c 0,-1 -0.00,-1.71 .09,-2.21 0,-0.4 .11,-0.8 .31,-1 .2,-0.3 .51,-0.40 .81,-0.40 z m -50.49,.12 c .5,0 .8,.18 1,.68 .19,.5 .28,1.30 .28,2.40 l 0,4.68 c 0,1.1 -0.08,1.90 -0.28,2.40 -0.2,.5 -0.5,.68 -1,.68 -0.5,0 -0.79,-0.18 -0.99,-0.68 -0.2,-0.5 -0.31,-1.30 -0.31,-2.40 l 0,-4.68 c 0,-1.1 .11,-1.90 .31,-2.40 .2,-0.5 .49,-0.68 .99,-0.68 z m 39.68,.09 c .3,0 .61,.10 .81,.40 .2,.3 .27,.67 .37,1.37 .1,.6 .12,1.51 .12,2.71 l .09,1.90 c 0,1.1 .00,1.99 -0.09,2.59 -0.1,.6 -0.19,1.08 -0.49,1.28 -0.2,.3 -0.50,.40 -0.90,.40 -0.3,0 -0.51,-0.08 -0.81,-0.18 -0.2,-0.1 -0.39,-0.29 -0.59,-0.59 l 0,-8.5 c .1,-0.4 .29,-0.7 .59,-1 .3,-0.3 .60,-0.40 .90,-0.40 z"
                    }
                }]
            }
        },
        m5 = function(a) {
            g.E.call(this);
            this.callback = a;
            this.u = new g.Xq(0, 0, .4, 0, .2, 1, 1, 1);
            this.delay = new g.Bq(this.next, window, this);
            this.startTime = this.duration = this.l = this.i = NaN;
            g.F(this, this.delay)
        },
        n5 = function(a) {
            g.W.call(this, {
                D: "div",
                K: "ytp-related-on-error-overlay"
            });
            var b = this;
            this.api = a;
            this.C = this.i = 0;
            this.B = new g.wN(this);
            this.u = [];
            this.suggestionData = [];
            this.containerWidth = 0;
            this.title = new g.W({
                D: "h2",
                K: "ytp-related-title",
                ra: "{{title}}"
            });
            this.previous = new g.W({
                D: "button",
                Ea: ["ytp-button", "ytp-previous"],
                U: {
                    "aria-label": "Show previous suggested videos"
                },
                S: [g.GL()]
            });
            this.L = new m5(function(f) {
                b.suggestions.element.scrollLeft = -f
            });
            this.tileWidth = this.l = 0;
            this.I = !0;
            this.next = new g.W({
                D: "button",
                Ea: ["ytp-button", "ytp-next"],
                U: {
                    "aria-label": "Show more suggested videos"
                },
                S: [g.HL()]
            });
            g.F(this, this.B);
            a = a.T();
            this.J = a.l;
            g.F(this, this.title);
            this.title.Ba(this.element);
            this.suggestions = new g.W({
                D: "div",
                K: "ytp-suggestions"
            });
            g.F(this, this.suggestions);
            this.suggestions.Ba(this.element);
            g.F(this, this.previous);
            this.previous.Ba(this.element);
            this.previous.Pa("click", this.jO, this);
            g.F(this, this.L);
            for (var c = 0; 16 > c; c++) {
                var d = new g.W({
                    D: "a",
                    K: "ytp-suggestion-link",
                    U: {
                        href: "{{link}}",
                        target: a.I,
                        "aria-label": "{{aria_label}}"
                    },
                    S: [{
                        D: "div",
                        K: "ytp-suggestion-image",
                        S: [{
                            D: "div",
                            U: {
                                "data-is-live": "{{is_live}}"
                            },
                            K: "ytp-suggestion-duration",
                            ra: "{{duration}}"
                        }]
                    }, {
                        D: "div",
                        K: "ytp-suggestion-title",
                        U: {
                            title: "{{hover_title}}"
                        },
                        ra: "{{title}}"
                    }, {
                        D: "div",
                        K: "ytp-suggestion-author",
                        ra: "{{views_or_author}}"
                    }]
                });
                g.F(this, d);
                d.Ba(this.suggestions.element);
                var e = d.Ca("ytp-suggestion-link");
                g.Bl(e, "transitionDelay", c / 20 + "s");
                this.B.N(e, "click", g.Qa(this.kO,
                    c));
                this.u.push(d)
            }
            g.F(this, this.next);
            this.next.Ba(this.element);
            this.next.Pa("click", this.iO, this);
            this.B.N(this.api, "videodatachange", this.ob);
            this.resize(this.api.bb().getPlayerSize());
            this.ob();
            this.show()
        },
        o5 = function(a) {
            a.next.element.style.bottom = a.C + "px";
            a.previous.element.style.bottom = a.C + "px";
            var b = a.l,
                c = a.containerWidth - a.suggestionData.length * (a.tileWidth + a.i);
            g.M(a.element, "ytp-scroll-min", 0 <= b);
            g.M(a.element, "ytp-scroll-max", b <= c)
        },
        DNa = function(a) {
            for (var b = 0; b < a.suggestionData.length; b++) {
                var c = b,
                    d = a.suggestionData[b].ib();
                c = a.u[c];
                var e = d.shortViewCount ? d.shortViewCount : d.author,
                    f = d.dn();
                g.QF(a.api.T()) && (f = g.ui(f, g.IO("emb_rel_err")));
                c.element.style.display = "";
                var h = c.Ca("ytp-suggestion-title");
                g.Vq.test(d.title) ? h.dir = "rtl" : CNa.test(d.title) && (h.dir = "ltr");
                h = c.Ca("ytp-suggestion-author");
                g.Vq.test(e) ? h.dir = "rtl" : CNa.test(e) && (h.dir = "ltr");
                h = d.isLivePlayback ? "Live" : d.lengthSeconds ? g.yM(d.lengthSeconds) : "";
                c.update({
                    views_or_author: e,
                    duration: h,
                    link: f,
                    hover_title: d.title,
                    title: d.title,
                    aria_label: d.Uq || null,
                    is_live: d.isLivePlayback
                });
                c = c.Ca("ytp-suggestion-image");
                d = d.We();
                c.style.backgroundImage = d ? "url(" + d + ")" : ""
            }
            for (; b < a.u.length; b++) a.u[b].element.style.display = "none";
            o5(a)
        },
        p5 = function(a) {
            g.iO.call(this, a);
            var b = this,
                c = a.T(),
                d = {
                    D: "svg",
                    U: {
                        fill: "#fff",
                        height: "100%",
                        viewBox: "0 0 24 24",
                        width: "100%"
                    },
                    S: [{
                        D: "path",
                        U: {
                            d: "M0 0h24v24H0V0z",
                            fill: "none"
                        }
                    }, {
                        D: "path",
                        U: {
                            d: "M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"
                        }
                    }]
                };
            g.aG(c) && (d = {
                D: "svg",
                U: {
                    fill: "none",
                    height: "100%",
                    viewBox: "0 0 25 25",
                    width: "100%"
                },
                S: [{
                        D: "g",
                        U: {
                            "clip-path": "url(#clip0)",
                            fill: "#fff"
                        },
                        S: [{
                            D: "path",
                            U: {
                                d: "M12.57.98C6.21.98 1.05 6.14 1.05 12.5c0 6.36 5.16 11.52 11.52 11.52 6.36 0 11.52-5.16 11.52-11.52C24.09 6.14 18.93.98 12.57.98zm0 18.34c-3.77 0-6.82-3.05-6.82-6.82 0-3.77 3.05-6.82 6.82-6.82 3.77 0 6.82 3.05 6.82 6.82 0 3.77-3.05 6.82-6.82 6.82z"
                            }
                        }, {
                            D: "path",
                            U: {
                                d: "M12.57 6.52c-3.29 0-5.98 2.68-5.98 5.98 0 3.3 2.68 5.98 5.98 5.98 3.3 0 5.98-2.68 5.98-5.98 0-3.3-2.69-5.98-5.98-5.98zm-2.25 9.38V9.1l5.88 3.4-5.88 3.4z"
                            }
                        }]
                    },
                    {
                        D: "defs",
                        S: [{
                            D: "clipPath",
                            U: {
                                id: "clip0"
                            },
                            S: [{
                                D: "path",
                                U: {
                                    d: "M0 0h24v24H0z",
                                    fill: "#fff",
                                    transform: "translate(.57 .5)"
                                }
                            }]
                        }]
                    }
                ]
            });
            c = new g.W({
                D: "a",
                K: "ytp-small-redirect",
                U: {
                    href: g.QG(c),
                    target: c.I,
                    "aria-label": "Visit YouTube to search for more videos"
                },
                S: [d]
            });
            c.Ba(this.element);
            g.F(this, c);
            this.i = new n5(a);
            this.i.Ba(this.element);
            g.F(this, this.i);
            this.N(a, "videodatachange", function() {
                b.show()
            });
            this.resize(this.api.bb().getPlayerSize())
        },
        ENa = function(a, b) {
            a.Ca("ytp-error-content").style.paddingTop = "0px";
            var c = a.Ca("ytp-error-content"),
                d = c.clientHeight;
            a.i.resize(b, b.height - d);
            c.style.paddingTop = (b.height - a.i.element.clientHeight) / 2 - d / 2 + "px"
        },
        FNa = function(a, b) {
            var c, d, e, f, h;
            b.reason && (q5(b.reason) ? h = g.Zz(b.reason) : h = g.jO(g.Yz(b.reason)), a.dd(h, "content"));
            var l;
            b.subreason && (q5(b.subreason) ? l = g.Zz(b.subreason) : l = g.jO(g.Yz(b.subreason)), a.dd(l, "subreason"));
            if (b.proceedButton && b.proceedButton.buttonRenderer && (h = a.Ca("ytp-error-content-wrap-subreason"), l = b.proceedButton.buttonRenderer, b = g.og("A"), l.text && l.text.simpleText)) {
                var m = l.text.simpleText;
                b.textContent = m;
                a: {
                    for (var n = g.ag("A", h), p = 0; p < n.length; p++)
                        if (n[p].textContent === m) {
                            m = !0;
                            break a
                        }
                    m = !1
                }
                m || (m = null === (d = null ===
                    (c = null === l || void 0 === l ? void 0 : l.navigationEndpoint) || void 0 === c ? void 0 : c.urlEndpoint) || void 0 === d ? void 0 : d.url, l = null === (f = null === (e = null === l || void 0 === l ? void 0 : l.navigationEndpoint) || void 0 === e ? void 0 : e.urlEndpoint) || void 0 === f ? void 0 : f.target, m && b.setAttribute("href", m), l && b.setAttribute("target", l), g.S(a.api.T().experiments, "embeds_enable_playability_on_web_preview") ? (a = g.og("DIV"), a.appendChild(b), h.appendChild(a)) : h.appendChild(b))
            }
        },
        q5 = function(a) {
            if (a.runs)
                for (var b = 0; b < a.runs.length; b++)
                    if (a.runs[b].navigationEndpoint) return !0;
            return !1
        },
        r5 = function(a, b) {
            g.W.call(this, {
                D: "a",
                Ea: ["ytp-impression-link"],
                U: {
                    target: "{{target}}",
                    href: "{{url}}",
                    "aria-label": "Watch on YouTube"
                },
                S: [{
                    D: "div",
                    K: "ytp-impression-link-content",
                    U: {
                        "aria-hidden": "true"
                    },
                    S: [{
                        D: "div",
                        K: "ytp-impression-link-text",
                        ra: "Watch on"
                    }, {
                        D: "div",
                        K: "ytp-impression-link-logo",
                        S: [l5()]
                    }]
                }]
            });
            this.api = a;
            this.l = b;
            this.Ta("target", a.T().I);
            this.api.Yb(this.element, this, 96714);
            this.N(this.api, "presentingplayerstatechange", this.hh);
            this.N(this.api, "videoplayerreset", this.i);
            this.N(this.element, "click", this.onClick);
            this.i()
        },
        s5 = function(a) {
            g.W.call(this, {
                D: "div",
                K: "ytp-muted-autoplay-endscreen-overlay",
                S: [{
                    D: "div",
                    K: "ytp-muted-autoplay-end-panel",
                    S: [{
                        D: "div",
                        K: "ytp-muted-autoplay-end-text",
                        ra: "{{text}}"
                    }]
                }]
            });
            this.api = a;
            this.u = this.Ca("ytp-muted-autoplay-end-panel");
            this.i = new g.bO(this.api);
            g.F(this, this.i);
            this.i.Ba(this.u, 0);
            this.api.Yb(this.element, this, 52428);
            this.N(this.api, "presentingplayerstatechange", this.l);
            this.Pa("click", this.onClick);
            this.hide()
        },
        t5 = function(a) {
            g.W.call(this, {
                D: "div",
                K: "ytp-muted-autoplay-overlay",
                S: [{
                    D: "div",
                    K: "ytp-muted-autoplay-bottom-buttons",
                    S: [{
                        D: "button",
                        Ea: ["ytp-muted-autoplay-equalizer", "ytp-button"],
                        S: [{
                            D: "div",
                            Ea: ["ytp-muted-autoplay-equalizer-icon"],
                            S: [{
                                D: "svg",
                                U: {
                                    height: "100%",
                                    version: "1.1",
                                    viewBox: "-4 -4 24 24",
                                    width: "100%"
                                },
                                S: [{
                                    D: "g",
                                    U: {
                                        fill: "#fff"
                                    },
                                    S: [{
                                        D: "rect",
                                        K: "ytp-equalizer-bar-left",
                                        U: {
                                            height: "9",
                                            width: "4",
                                            x: "1",
                                            y: "7"
                                        }
                                    }, {
                                        D: "rect",
                                        K: "ytp-equalizer-bar-middle",
                                        U: {
                                            height: "14",
                                            width: "4",
                                            x: "6",
                                            y: "2"
                                        }
                                    }, {
                                        D: "rect",
                                        K: "ytp-equalizer-bar-right",
                                        U: {
                                            height: "12",
                                            width: "4",
                                            x: "11",
                                            y: "4"
                                        }
                                    }]
                                }]
                            }]
                        }]
                    }]
                }]
            });
            this.api = a;
            this.bottomButtons = this.Ca("ytp-muted-autoplay-bottom-buttons");
            this.Ca("ytp-muted-autoplay-equalizer");
            this.u = new g.J(this.l, 4E3, this);
            a.Yb(this.element, this, 39306);
            this.N(a, "presentingplayerstatechange", this.i);
            this.N(a, "onMutedAutoplayStarts", this.i);
            this.Pa("click", this.onClick);
            this.hide()
        },
        u5 = function(a, b) {
            g.W.call(this, {
                D: "div",
                K: "ytp-pause-overlay"
            });
            var c = this;
            this.api = a;
            this.I = b;
            this.i = new g.wN(this);
            this.B = new g.kM(this, 1E3, !1, 100);
            this.u = [];
            this.suggestionData = [];
            this.containerWidth = 0;
            this.C = !1;
            this.Y = 0;
            this.title = new g.W({
                D: "h2",
                K: "ytp-related-title",
                ra: "{{title}}"
            });
            this.previous = new g.W({
                D: "button",
                Ea: ["ytp-button", "ytp-previous"],
                U: {
                    "aria-label": "Show previous suggested videos"
                },
                S: [g.GL()]
            });
            this.L = new m5(function(f) {
                c.suggestions.element.scrollLeft = -f
            });
            this.V = this.tileWidth = this.l = 0;
            this.next = new g.W({
                D: "button",
                Ea: ["ytp-button", "ytp-next"],
                U: {
                    "aria-label": "Show more suggested videos"
                },
                S: [g.HL()]
            });
            this.expandButton = new g.W({
                D: "button",
                Ea: ["ytp-button", "ytp-expand"],
                ra: "More videos"
            });
            g.F(this, this.i);
            g.F(this, this.B);
            b = a.T();
            "0" === b.controlsType && g.K(a.getRootNode(), "ytp-pause-overlay-controls-hidden");
            this.J = b.l;
            g.F(this, this.title);
            this.title.Ba(this.element);
            this.suggestions = new g.W({
                D: "div",
                K: "ytp-suggestions"
            });
            g.F(this, this.suggestions);
            this.suggestions.Ba(this.element);
            g.F(this, this.previous);
            this.previous.Ba(this.element);
            this.previous.Pa("click", this.mO, this);
            g.F(this, this.L);
            for (a = 0; 16 > a; a++) {
                var d = new g.W({
                    D: "a",
                    K: "ytp-suggestion-link",
                    U: {
                        href: "{{link}}",
                        target: b.I,
                        "aria-label": "{{aria_label}}"
                    },
                    S: [{
                        D: "div",
                        K: "ytp-suggestion-image"
                    }, {
                        D: "div",
                        K: "ytp-suggestion-overlay",
                        U: {
                            style: "{{blink_rendering_hack}}",
                            "aria-hidden": "{{aria_hidden}}"
                        },
                        S: [{
                                D: "div",
                                K: "ytp-suggestion-title",
                                ra: "{{title}}"
                            }, {
                                D: "div",
                                K: "ytp-suggestion-author",
                                ra: "{{author_and_views}}"
                            },
                            {
                                D: "div",
                                U: {
                                    "data-is-live": "{{is_live}}"
                                },
                                K: "ytp-suggestion-duration",
                                ra: "{{duration}}"
                            }
                        ]
                    }]
                });
                g.F(this, d);
                d.Ba(this.suggestions.element);
                var e = d.Ca("ytp-suggestion-link");
                g.Bl(e, "transitionDelay", a / 20 + "s");
                this.i.N(e, "click", g.Qa(this.nO, a));
                this.u.push(d)
            }
            g.F(this, this.next);
            this.next.Ba(this.element);
            this.next.Pa("click", this.lO, this);
            b = new g.W({
                D: "button",
                Ea: ["ytp-button", "ytp-collapse"],
                U: {
                    "aria-label": "Hide more videos"
                },
                S: [{
                    D: "svg",
                    U: {
                        height: "100%",
                        viewBox: "0 0 16 16",
                        width: "100%"
                    },
                    S: [{
                        D: "path",
                        U: {
                            d: "M13 4L12 3 8 7 4 3 3 4 7 8 3 12 4 13 8 9 12 13 13 12 9 8z",
                            fill: "#fff"
                        }
                    }]
                }]
            });
            g.F(this, b);
            b.Ba(this.element);
            b.Pa("click", this.wS, this);
            g.F(this, this.expandButton);
            this.expandButton.Ba(this.element);
            this.expandButton.Pa("click", this.xS, this);
            this.i.N(this.api, "appresize", this.tb);
            this.i.N(this.api, "fullscreentoggled", this.Yl);
            this.i.N(this.api, "presentingplayerstatechange", this.Hc);
            this.i.N(this.api, "videodatachange", this.ob);
            this.tb(this.api.bb().getPlayerSize());
            this.ob()
        },
        v5 = function(a) {
            var b =
                a.I.Le() ? 32 : 16;
            b = a.V / 2 + b;
            a.next.element.style.bottom = b + "px";
            a.previous.element.style.bottom = b + "px";
            b = a.l;
            var c = a.containerWidth - a.suggestionData.length * (a.tileWidth + 8);
            g.M(a.element, "ytp-scroll-min", 0 <= b);
            g.M(a.element, "ytp-scroll-max", b <= c)
        },
        HNa = function(a) {
            for (var b = 0; b < a.suggestionData.length; b++) {
                var c = a.suggestionData[b].ib(),
                    d = a.u[b],
                    e = c.shortViewCount ? c.author + " \u2022 " + c.shortViewCount : c.author;
                d.element.style.display = "";
                GNa.test(c.title) && (d.Ca("ytp-suggestion-title").dir = "rtl");
                GNa.test(e) && (d.Ca("ytp-suggestion-author").dir = "rtl");
                var f = c.isLivePlayback ? "Live" : c.lengthSeconds ? g.yM(c.lengthSeconds) : "";
                var h = c.dn();
                g.QF(a.api.T()) && (h = g.ui(h, g.IO("emb_rel_pause")));
                d.update({
                    author_and_views: e,
                    duration: f,
                    link: h,
                    title: c.title,
                    aria_label: c.Uq || null,
                    is_live: c.isLivePlayback,
                    aria_hidden: !(!c.Uq || a.api.T().Z("embeds_rv_aria_hidden_killswitch")),
                    blink_rendering_hack: g.bj || g.Vk ? "will-change: opacity" : void 0
                });
                d = d.Ca("ytp-suggestion-image");
                c = c.We();
                d.style.backgroundImage = c ? "url(" + c + ")" : ""
            }
            for (; b < a.u.length; b++) a.u[b].element.style.display = "none";
            v5(a)
        },
        w5 = function(a) {
            var b = a.T();
            g.W.call(this, {
                D: "a",
                Ea: ["ytp-watermark", "yt-uix-sessionlink"],
                U: {
                    target: b.I,
                    href: "{{url}}",
                    "aria-label": g.iJ("Watch on $WEBSITE", {
                        WEBSITE: g.BG(b)
                    }),
                    "data-sessionlink": "feature=player-watermark"
                },
                S: [l5()]
            });
            this.api = a;
            this.i = null;
            this.l = !1;
            this.state = a.ub();
            a.Yb(this.element, this, 76758);
            this.N(a, "videodatachange", this.rF);
            this.N(a, "videodatachange", this.ob);
            this.N(a, "presentingplayerstatechange", this.oO);
            this.N(a, "appresize", this.tb);
            b = this.state;
            this.state !== b && (this.state = b);
            this.rF();
            this.ob();
            this.tb(a.bb().getPlayerSize())
        },
        x5 = function(a) {
            g.FN.call(this, a);
            this.G = a;
            this.l = new g.wN(this);
            g.F(this, this.l);
            this.load()
        },
        GNa = /^[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]/,
        CNa = /^[^\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]/;
    g.v(m5, g.E);
    m5.prototype.start = function(a, b, c) {
        this.i = a;
        this.l = b;
        this.duration = c;
        this.startTime = (0, g.P)();
        this.next()
    };
    m5.prototype.next = function() {
        var a = (0, g.P)() - this.startTime;
        var b = this.u;
        a = BNa(b, a / this.duration);
        if (0 == a) b = b.C;
        else if (1 == a) b = b.L;
        else {
            var c = g.Pf(b.C, b.I, a),
                d = g.Pf(b.I, b.J, a);
            b = g.Pf(b.J, b.L, a);
            c = g.Pf(c, d, a);
            d = g.Pf(d, b, a);
            b = g.Pf(c, d, a)
        }
        b = g.Nf(b, 0, 1);
        this.callback((this.l - this.i) * b + this.i);
        1 > b && this.delay.start()
    };
    g.v(n5, g.W);
    g.k = n5.prototype;
    g.k.hide = function() {
        this.I = !0;
        g.W.prototype.hide.call(this)
    };
    g.k.show = function() {
        this.I = !1;
        g.W.prototype.show.call(this)
    };
    g.k.isHidden = function() {
        return this.I
    };
    g.k.iO = function() {
        this.scrollTo(this.l - this.containerWidth)
    };
    g.k.jO = function() {
        this.scrollTo(this.l + this.containerWidth)
    };
    g.k.kO = function(a, b) {
        a = this.suggestionData[a];
        var c = a.Ud;
        g.dO(b, this.api, this.J, c || void 0) && this.api.Kj(a.ib().videoId, c, a.getPlaylistId())
    };
    g.k.resize = function(a, b) {
        var c = this.api.T(),
            d = 16 / 9,
            e = 650 <= a.width,
            f = 480 > a.width || 290 > a.height,
            h = Math.min(this.suggestionData.length, this.u.length);
        if (150 >= Math.min(a.width, a.height) || 0 === h || !c.xb) this.hide();
        else {
            var l;
            if (e) {
                var m = l = 28;
                this.i = 16
            } else this.i = m = l = 8;
            if (f) {
                var n = 6;
                e = 14;
                var p = 12;
                f = 24;
                c = 12
            } else n = 8, e = 18, p = 16, f = 36, c = 16;
            a = a.width - (48 + l + m);
            l = Math.ceil(a / 150);
            l = Math.min(3, l);
            l = a / l - this.i;
            m = Math.floor(l / d);
            b && m + 100 > b && 50 < l && (m = Math.max(b, 50 / d), l = Math.ceil(a / (d * (m - 100) + this.i)), l = a / l - this.i,
                m = Math.floor(l / d));
            50 > l || g.rN(this.api) ? this.hide() : this.show();
            for (b = 0; b < h; b++) {
                d = this.u[b];
                var r = d.Ca("ytp-suggestion-image");
                r.style.width = l + "px";
                r.style.height = m + "px";
                d.Ca("ytp-suggestion-title").style.width = l + "px";
                d.Ca("ytp-suggestion-author").style.width = l + "px";
                d = d.Ca("ytp-suggestion-duration");
                d.style.display = d && 100 > l ? "none" : ""
            }
            h = e + n + p + 4;
            this.C = h + c + (m - f) / 2;
            this.suggestions.element.style.height = m + h + "px";
            this.tileWidth = l;
            this.containerWidth = a;
            this.l = 0;
            this.suggestions.element.scrollLeft = -0;
            o5(this)
        }
    };
    g.k.ob = function() {
        var a = this,
            b = this.api.getVideoData(),
            c = this.api.T();
        this.J = b.C ? !1 : c.l;
        if (b.suggestions) {
            var d = g.Ro(b.suggestions, function(e) {
                return e && !e.list
            });
            this.suggestionData = g.Qe(d, function(e) {
                e = g.ZP(c, e);
                g.F(a, e);
                return e
            })
        } else this.suggestionData.length = 0;
        DNa(this);
        b.C ? this.title.update({
            title: g.iJ("More videos from $DNI_RELATED_CHANNEL", {
                DNI_RELATED_CHANNEL: b.author
            })
        }) : this.title.update({
            title: "More videos on YouTube"
        })
    };
    g.k.scrollTo = function(a) {
        a = g.Nf(a, this.containerWidth - this.suggestionData.length * (this.tileWidth + this.i), 0);
        this.L.start(this.l, a, 1E3);
        this.l = a;
        o5(this)
    };
    g.v(p5, g.iO);
    p5.prototype.show = function() {
        g.iO.prototype.show.call(this);
        ENa(this, this.api.bb().getPlayerSize())
    };
    p5.prototype.resize = function(a) {
        g.iO.prototype.resize.call(this, a);
        ENa(this, a);
        g.M(this.element, "related-on-error-overlay-visible", !this.i.isHidden())
    };
    p5.prototype.l = function(a) {
        g.iO.prototype.l.call(this, a);
        var b = this.api.getVideoData();
        if (b.lB || b.playerErrorMessageRenderer)(a = b.lB) ? FNa(this, a) : b.playerErrorMessageRenderer && FNa(this, b.playerErrorMessageRenderer);
        else {
            var c;
            a.di && (b.Wo ? q5(b.Wo) ? c = g.Zz(b.Wo) : c = g.jO(g.Yz(b.Wo)) : c = g.jO(a.di), this.dd(c, "subreason"))
        }
    };
    g.v(r5, g.W);
    r5.prototype.hh = function() {
        this.api.ub().isCued() || (this.hide(), this.api.kb(this.element, !1))
    };
    r5.prototype.i = function() {
        var a = this.api.getVideoData(),
            b = this.api.T(),
            c = this.api.getVideoData().C,
            d = b.Bb,
            e = !b.xb,
            f = this.l.qf();
        b = g.aG(b);
        d || f || c || e || b || !a.videoId ? (this.hide(), this.api.kb(this.element, !1)) : (a = g.ui(this.api.getVideoUrl(), g.IO("emb_imp_woyt")), this.Ta("url", a), this.show())
    };
    r5.prototype.onClick = function(a) {
        var b = g.ui(this.api.getVideoUrl(), g.IO("emb_imp_woyt"));
        g.eO(b, this.api, a);
        this.api.Gb(this.element)
    };
    r5.prototype.show = function() {
        this.api.ub().isCued() && (g.W.prototype.show.call(this), this.api.Hu(this.element) && this.api.kb(this.element, !0))
    };
    g.v(s5, g.W);
    s5.prototype.l = function() {
        var a = this.api.ub(),
            b = this.api.getVideoData();
        g.S(this.api.T().experiments, "embeds_enable_muted_autoplay") && b.mutedAutoplay && (g.V(a, 2) && !this.vb ? (this.show(), this.i.show(), a = this.api.getVideoData(), this.Ta("text", a.zF), g.M(this.element, "ytp-muted-autoplay-show-end-panel", !0), this.api.kb(this.element, this.vb), this.api.Na("onMutedAutoplayEnds")) : this.hide())
    };
    s5.prototype.onClick = function() {
        var a = this.api.getVideoData(),
            b = this.api.getCurrentTime();
        a.mutedAutoplay = !1;
        a.endSeconds = NaN;
        g.yH(a);
        this.api.loadVideoById(a.videoId, b);
        this.api.Gb(this.element);
        this.hide()
    };
    g.v(t5, g.W);
    t5.prototype.i = function() {
        var a = this.api.ub(),
            b = this.api.getVideoData();
        g.S(this.api.T().experiments, "embeds_enable_muted_autoplay") && b.mutedAutoplay && !g.V(a, 2) ? this.vb || (g.W.prototype.show.call(this), this.u.start(), this.api.kb(this.element, this.vb)) : this.hide()
    };
    t5.prototype.l = function() {
        g.M(this.element, "ytp-muted-autoplay-hide-watermark", !0)
    };
    t5.prototype.onClick = function() {
        var a = this.api.getVideoData(),
            b = this.api.getCurrentTime();
        a.mutedAutoplay = !1;
        a.endSeconds = NaN;
        g.yH(a);
        this.api.loadVideoById(a.videoId, b);
        this.api.Gb(this.element)
    };
    g.v(u5, g.W);
    g.k = u5.prototype;
    g.k.hide = function() {
        g.Nq(this.api.getRootNode(), "ytp-expand-pause-overlay");
        g.W.prototype.hide.call(this)
    };
    g.k.wS = function() {
        this.C = !0;
        g.Nq(this.api.getRootNode(), "ytp-expand-pause-overlay");
        this.expandButton.focus()
    };
    g.k.xS = function() {
        this.C = !1;
        g.K(this.api.getRootNode(), "ytp-expand-pause-overlay")
    };
    g.k.lO = function() {
        this.scrollTo(this.l - this.containerWidth)
    };
    g.k.mO = function() {
        this.scrollTo(this.l + this.containerWidth)
    };
    g.k.nO = function(a, b) {
        if (1E3 > (0, g.P)() - this.Y) g.fu(b), document.activeElement.blur();
        else {
            a = this.suggestionData[a];
            var c = a.Ud;
            g.dO(b, this.api, this.J, c || void 0) && this.api.Kj(a.ib().videoId, c, a.getPlaylistId())
        }
    };
    g.k.Yl = function() {
        this.tb(this.api.bb().getPlayerSize())
    };
    g.k.Hc = function(a) {
        g.V(a.state, 1) || g.V(a.state, 16) || g.V(a.state, 32) || (g.V(a.state, 4) && !g.V(a.state, 2) ? this.suggestionData.length && (this.C || (g.K(this.api.getRootNode(), "ytp-expand-pause-overlay"), v5(this)), this.B.show(), this.Y = (0, g.P)()) : this.B.hide())
    };
    g.k.tb = function(a) {
        var b = 16 / 9,
            c = this.I.Le();
        a = a.width - (c ? 112 : 58);
        c = Math.ceil(a / (c ? 320 : 192));
        c = (a - 8 * c) / c;
        b = Math.floor(c / b);
        for (var d = 0; d < this.u.length; d++) {
            var e = this.u[d].Ca("ytp-suggestion-image");
            e.style.width = c + "px";
            e.style.height = b + "px"
        }
        this.suggestions.element.style.height = b + "px";
        this.tileWidth = c;
        this.V = b;
        this.containerWidth = a;
        this.l = 0;
        this.suggestions.element.scrollLeft = -0;
        v5(this)
    };
    g.k.ob = function() {
        var a = this,
            b = this.api.T(),
            c = this.api.getVideoData();
        this.J = c.C ? !1 : b.l;
        if (c.suggestions) {
            var d = g.Ro(c.suggestions, function(e) {
                return e && !e.list
            });
            this.suggestionData = g.Qe(d, function(e) {
                e = g.ZP(b, e);
                g.F(a, e);
                return e
            })
        } else this.suggestionData.length = 0;
        HNa(this);
        c.C ? this.title.update({
            title: g.iJ("More videos from $DNI_RELATED_CHANNEL", {
                DNI_RELATED_CHANNEL: c.author
            })
        }) : this.title.update({
            title: "More videos"
        })
    };
    g.k.scrollTo = function(a) {
        a = g.Nf(a, this.containerWidth - this.suggestionData.length * (this.tileWidth + 8), 0);
        this.L.start(this.l, a, 1E3);
        this.l = a;
        v5(this)
    };
    g.v(w5, g.W);
    g.k = w5.prototype;
    g.k.rF = function() {
        var a = this.api.getVideoData(),
            b = this.api.getVideoData(1).C,
            c = this.api.T();
        a = (a.mutedAutoplay || c.Bb && !g.V(this.state, 2)) && !(b && c.pfpChazalUi);
        g.BL(this, a);
        this.api.kb(this.element, a)
    };
    g.k.oO = function(a) {
        a = a.state;
        this.state !== a && (this.state = a);
        this.rF()
    };
    g.k.ob = function() {
        if (this.api.getVideoData().videoId) {
            var a = this.api.getVideoUrl(!0, !1, !1, !0);
            this.Ta("url", a);
            this.i || (this.i = this.Pa("click", this.onClick))
        } else this.i && (this.Ta("url", null), this.lc(this.i), this.i = null)
    };
    g.k.onClick = function(a) {
        var b = this.api.getVideoUrl(!g.zM(a), !1, !0, !0);
        g.eO(b, this.api, a);
        this.api.Gb(this.element)
    };
    g.k.tb = function(a) {
        if ((a = 480 > a.width) && !this.l || !a && this.l) {
            var b = new g.W(l5()),
                c = this.Ca("ytp-watermark");
            g.M(c, "ytp-watermark-small", a);
            g.qg(c);
            b.Ba(c);
            this.l = a
        }
    };
    g.v(x5, g.FN);
    g.k = x5.prototype;
    g.k.Li = function() {
        return !1
    };
    g.k.create = function() {
        var a, b = this.G.T(),
            c = g.kN(this.G),
            d = null === (a = this.G.getVideoData()) || void 0 === a ? void 0 : a.clientPlaybackNonce;
        d && g.MA("cpn", d);
        b.xb && (this.C = new u5(this.G, c), g.F(this, this.C), g.uN(this.G, this.C.element, 4));
        g.S(b.experiments, "embeds_enable_muted_autoplay") && (this.i = new t5(this.G), g.F(this, this.i), g.uN(this.G, this.i.element, 4), this.B = new s5(this.G), g.F(this, this.B), g.uN(this.G, this.B.element, 4));
        if (b.Bb || this.i) this.watermark = new w5(this.G), g.F(this, this.watermark), g.uN(this.G,
            this.watermark.element, 7);
        g.S(b.experiments, "embeds_impression_link") && (this.u = new r5(this.G, c), g.F(this, this.u), g.uN(this.G, this.u.element, 7));
        this.l.N(this.G, "appresize", this.tb);
        this.l.N(this.G, "presentingplayerstatechange", this.hh);
        this.l.N(this.G, "videodatachange", this.rW);
        this.l.N(this.G, "onMutedAutoplayStarts", this.qT);
        this.Jb(this.G.ub());
        this.player.Ed("embed")
    };
    g.k.tb = function() {
        var a = this.G.bb().getPlayerSize();
        this.oe && this.oe.resize(a)
    };
    g.k.hh = function(a) {
        this.Jb(a.state)
    };
    g.k.Jb = function(a) {
        g.V(a, 128) ? (this.oe || (this.oe = new p5(this.G), g.F(this, this.oe), g.uN(this.G, this.oe.element, 4)), this.oe.l(a.getData()), this.oe.show(), g.K(this.G.getRootNode(), "ytp-embed-error")) : this.oe && (this.oe.dispose(), this.oe = null, g.Nq(this.G.getRootNode(), "ytp-embed-error"))
    };
    g.k.qT = function() {
        this.G.getVideoData().mutedAutoplay && this.i && this.watermark && this.watermark.Ba(this.i.bottomButtons, 0)
    };
    g.k.rW = function() {
        var a = this.G.getVideoData();
        this.watermark && this.i && !a.mutedAutoplay && g.ug(this.i.element, this.watermark.element) && g.uN(this.G, this.watermark.element, 7)
    };
    g.QN.embed = x5;
})(_yt_player);