(function(g) {
    var window = this;
    'use strict';
    var DOa = function(a, b) {
            return g.Ob(a, b)
        },
        EOa = function(a, b) {
            b = b instanceof g.Fc ? b : g.Lc(b, /^data:image\//i.test(b));
            a.src = g.Gc(b)
        },
        FOa = function(a) {
            if (a instanceof g.Vh) return a;
            if ("function" == typeof a.Kg) return a.Kg(!1);
            if (g.Ma(a)) {
                var b = 0,
                    c = new g.Vh;
                c.i = function() {
                    for (;;) {
                        if (b >= a.length) throw g.ai;
                        if (b in a) return a[b++];
                        b++
                    }
                };
                c.next = c.i.bind(c);
                return c
            }
            throw Error("Not implemented");
        },
        GOa = function(a, b, c) {
            if (g.Ma(a)) try {
                g.Cb(a, b, c)
            } catch (d) {
                if (d !== g.ai) throw d;
            } else {
                a = FOa(a);
                try {
                    for (;;) b.call(c, a.next(), void 0, a)
                } catch (d) {
                    if (d !== g.ai) throw d;
                }
            }
        },
        C6 = function(a) {
            g.qk(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ g.Sa()).toString(36));
            return a
        },
        D6 = function(a, b, c) {
            Array.isArray(c) || (c = [String(c)]);
            g.vk(a.l, b, c)
        },
        HOa = function(a, b) {
            var c = [];
            GOa(b, function(d) {
                try {
                    var e = g.jr.prototype.l.call(this, d, !0)
                } catch (f) {
                    if ("Storage: Invalid value was encountered" == f) return;
                    throw f;
                }
                void 0 === e ? c.push(d) : g.ir(e) && c.push(d)
            }, a);
            return c
        },
        IOa = function(a, b) {
            HOa(a, b).forEach(function(c) {
                g.jr.prototype.remove.call(this, c)
            }, a)
        },
        JOa = function(a) {
            if (a.V) {
                if (a.V.locationOverrideToken) return {
                    locationOverrideToken: a.V.locationOverrideToken
                };
                if (null != a.V.latitudeE7 && null != a.V.longitudeE7) return {
                    latitudeE7: a.V.latitudeE7,
                    longitudeE7: a.V.longitudeE7
                }
            }
            return null
        },
        KOa = function(a, b) {
            g.jb(a, b) || a.push(b)
        },
        E6 = function(a) {
            var b = 0,
                c;
            for (c in a) b++;
            return b
        },
        LOa = function(a) {
            try {
                return g.A.JSON.parse(a)
            } catch (b) {}
            a = String(a);
            if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        F6 = function(a) {
            if (g.A.JSON) try {
                return g.A.JSON.parse(a)
            } catch (b) {}
            return LOa(a)
        },
        MOa = function(a, b, c, d) {
            var e = new g.ck(null, void 0);
            a && g.dk(e, a);
            b && g.ek(e, b);
            c && g.fk(e, c);
            d && (e.J = d);
            return e
        },
        G6 = function(a, b) {
            g.Gu[a] = !0;
            var c = g.Eu();
            c && c.publish.apply(c, arguments);
            g.Gu[a] = !1
        },
        H6 = function(a) {
            this.name = this.id = "";
            this.clientName = "UNKNOWN_INTERFACE";
            this.app = "";
            this.type = "REMOTE_CONTROL";
            this.obfuscatedGaiaId = this.avatar = this.username = "";
            this.capabilities = new Set;
            this.experiments = new Set;
            this.theme = "u";
            new g.ci;
            this.model = this.brand = "";
            this.year = 0;
            this.chipset = this.osVersion = this.os = "";
            a && (this.id = a.id || a.name, this.name = a.name, this.clientName = a.clientName || "UNKNOWN_INTERFACE", this.app = a.app, this.type = a.type || "REMOTE_CONTROL", this.username = a.user || "", this.avatar = a.userAvatarUri || "", this.obfuscatedGaiaId = a.obfuscatedGaiaId ||
                "", this.theme = a.theme || "u", NOa(this, a.capabilities || ""), OOa(this, a.experiments || ""), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "")
        },
        NOa = function(a, b) {
            a.capabilities.clear();
            g.Ro(b.split(","), g.Qa(DOa, POa)).forEach(function(c) {
                a.capabilities.add(c)
            })
        },
        OOa = function(a, b) {
            a.experiments.clear();
            b.split(",").forEach(function(c) {
                a.experiments.add(c)
            })
        },
        I6 = function(a) {
            a = a || {};
            this.name = a.name || "";
            this.id = a.id || a.screenId || "";
            this.token = a.token || a.loungeToken || "";
            this.uuid = a.uuid || a.dialId || "";
            this.idType = a.screenIdType || "normal"
        },
        J6 = function(a, b) {
            return !!b && (a.id == b || a.uuid == b)
        },
        QOa = function(a) {
            return {
                name: a.name,
                screenId: a.id,
                loungeToken: a.token,
                dialId: a.uuid,
                screenIdType: a.idType
            }
        },
        ROa = function(a) {
            return new I6(a)
        },
        SOa = function(a) {
            return Array.isArray(a) ? g.Qe(a, ROa) : []
        },
        K6 = function(a) {
            return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + ((a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + ",idType:" + a.idType + "}") : "null"
        },
        L6 = function(a) {
            return Array.isArray(a) ? "[" + g.Qe(a, K6).join(",") + "]" : "null"
        },
        M6 = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
                function(a) {
                    var b = 16 * Math.random() | 0;
                    return ("x" == a ? b : b & 3 | 8).toString(16)
                })
        },
        TOa = function(a) {
            return g.Qe(a, function(b) {
                return {
                    key: b.id,
                    name: b.name
                }
            })
        },
        N6 = function(a, b) {
            return g.fb(a, function(c) {
                return c || b ? !c != !b ? !1 : c.id == b.id : !0
            })
        },
        O6 = function(a, b) {
            return g.fb(a, function(c) {
                return J6(c, b)
            })
        },
        UOa = function() {
            var a = (0, g.dz)();
            a && IOa(a, a.i.Kg(!0))
        },
        P6 = function() {
            var a = g.gz("yt-remote-connected-devices") || [];
            g.zb(a);
            return a
        },
        VOa = function(a) {
            if (g.kb(a)) return [];
            var b = a[0].indexOf("#"),
                c = -1 == b ? a[0] : a[0].substring(0, b);
            return g.Qe(a, function(d, e) {
                return 0 == e ? d : d.substring(c.length)
            })
        },
        WOa = function(a) {
            g.fz("yt-remote-connected-devices", a, 86400)
        },
        R6 = function() {
            if (Q6) return Q6;
            var a = g.gz("yt-remote-device-id");
            a || (a = M6(), g.fz("yt-remote-device-id", a, 31536E3));
            for (var b = P6(), c = 1, d = a; g.jb(b, d);) c++, d = a + "#" + c;
            return Q6 = d
        },
        S6 = function() {
            var a = P6(),
                b = R6();
            g.jb(a, b);
            g.jz() && g.Bb(a, b);
            a = VOa(a);
            if (g.kb(a)) try {
                g.nt("remote_sid")
            } catch (c) {} else try {
                g.lt("remote_sid", a.join(","), -1)
            } catch (c) {}
        },
        XOa = function() {
            return g.gz("yt-remote-session-browser-channel")
        },
        YOa = function() {
            return g.gz("yt-remote-local-screens") || []
        },
        ZOa = function() {
            g.fz("yt-remote-lounge-token-expiration", !0, 86400)
        },
        $Oa = function(a) {
            5 < a.length && (a = a.slice(a.length - 5));
            var b = g.Qe(YOa(), function(d) {
                    return d.loungeToken
                }),
                c = g.Qe(a, function(d) {
                    return d.loungeToken
                });
            g.Am(c, function(d) {
                return !g.jb(b, d)
            }) && ZOa();
            g.fz("yt-remote-local-screens", a, 31536E3)
        },
        aPa = function(a, b) {
            g.fz("yt-remote-session-browser-channel", a);
            g.fz("yt-remote-session-screen-id", b);
            a = P6();
            b = R6();
            g.jb(a, b) || a.push(b);
            WOa(a);
            S6()
        },
        T6 = function(a) {
            a || (g.iz("yt-remote-session-screen-id"), g.iz("yt-remote-session-video-id"));
            S6();
            a = P6();
            g.ob(a, R6());
            WOa(a)
        },
        bPa = function() {
            if (!U6) {
                var a = g.tr();
                a && (U6 = new g.dr(a))
            }
        },
        cPa = function() {
            bPa();
            return U6 ? !!U6.get("yt-remote-use-staging-server") : !1
        },
        V6 = function() {
            var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
            return a ? parseInt(a[1], 10) : 0
        },
        dPa = function(a) {
            return !!document.currentScript && (-1 != document.currentScript.src.indexOf("?" + a) || -1 != document.currentScript.src.indexOf("&" + a))
        },
        ePa = function() {
            return "function" == typeof window.__onGCastApiAvailable ? window.__onGCastApiAvailable : null
        },
        W6 = function(a) {
            a.length ? fPa(a.shift(), function() {
                W6(a)
            }) : X6()
        },
        gPa = function(a) {
            return "chrome-extension://" + a + "/cast_sender.js"
        },
        fPa = function(a, b, c) {
            var d = document.createElement("script");
            d.onerror = b;
            c && (d.onload = c);
            g.Cj(d, g.zl(a));
            (document.head || document.documentElement).appendChild(d)
        },
        hPa = function() {
            var a = V6(),
                b = [];
            if (1 < a) {
                var c = a - 1;
                b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
                b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js")
            }
            return b
        },
        X6 = function() {
            var a = ePa();
            a && a(!1, "No cast extension found")
        },
        Y6 = function() {
            if (iPa) {
                var a = 2,
                    b = ePa(),
                    c = function() {
                        a--;
                        0 == a && b && b(!0)
                    };
                window.__onGCastApiAvailable = c;
                fPa("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", X6, c)
            }
        },
        jPa = function() {
            Y6();
            var a = hPa();
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            W6(a)
        },
        lPa = function() {
            Y6();
            var a = hPa();
            a.push.apply(a, g.la(kPa.map(gPa)));
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            W6(a)
        },
        Z6 = function(a, b, c) {
            g.E.call(this);
            this.I = null != c ? (0, g.C)(a, c) : a;
            this.Rf = b;
            this.C = (0, g.C)(this.CO, this);
            this.i = !1;
            this.l = 0;
            this.u = this.Hb = null;
            this.B = []
        },
        $6 = function(a, b, c) {
            g.E.call(this);
            this.B = null != c ? a.bind(c) : a;
            this.Rf = b;
            this.u = null;
            this.i = !1;
            this.l = 0;
            this.Hb = null
        },
        a7 = function(a) {
            a.Hb = g.kh(function() {
                a.Hb = null;
                a.i && !a.l && (a.i = !1, a7(a))
            }, a.Rf);
            var b = a.u;
            a.u = null;
            a.B.apply(null, b)
        },
        b7 = function() {},
        c7 = function(a, b) {
            if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
            return g.A.setTimeout(function() {
                a()
            }, b)
        },
        e7 = function(a) {
            d7.dispatchEvent(new mPa(d7, a))
        },
        mPa = function(a, b) {
            g.jf.call(this, "statevent", a);
            this.stat = b
        },
        f7 = function(a, b, c, d) {
            this.i = a;
            this.l = b;
            this.L = c;
            this.J = d || 1;
            this.C = 45E3;
            this.B = new g.wk(this);
            this.u = new g.jh;
            this.u.setInterval(250)
        },
        oPa = function(a, b, c) {
            a.Es = 1;
            a.Dm = C6(b.clone());
            a.Vp = c;
            a.I = !0;
            nPa(a, null)
        },
        g7 = function(a, b, c, d, e) {
            a.Es = 1;
            a.Dm = C6(b.clone());
            a.Vp = null;
            a.I = c;
            e && (a.IL = !1);
            nPa(a, d)
        },
        nPa = function(a, b) {
            a.qs = Date.now();
            h7(a);
            a.Rn = a.Dm.clone();
            D6(a.Rn, "t", a.J);
            a.pw = 0;
            a.df = a.i.TB(a.i.Tv() ? b : null);
            0 < a.KA && (a.jz = new $6((0, g.C)(a.HM, a, a.df), a.KA));
            a.B.Pa(a.df, "readystatechange", a.DO);
            b = a.Co ? g.Vb(a.Co) : {};
            a.Vp ? (a.Vz = "POST", b["Content-Type"] = "application/x-www-form-urlencoded", a.df.send(a.Rn, a.Vz, a.Vp, b)) : (a.Vz = "GET", a.IL && !g.jg && (b.Connection = "close"), a.df.send(a.Rn, a.Vz, null, b));
            a.i.sj(1)
        },
        rPa = function(a, b, c) {
            for (var d = !0; !a.Oo && a.pw < c.length;) {
                var e = pPa(a, c);
                if (e == i7) {
                    4 == b && (a.zm = 4, e7(15), d = !1);
                    break
                } else if (e == qPa) {
                    a.zm = 4;
                    e7(16);
                    d = !1;
                    break
                } else j7(a, e)
            }
            4 == b && 0 == c.length && (a.zm = 1, e7(17), d = !1);
            a.Dj = a.Dj && d;
            d || (k7(a), l7(a))
        },
        pPa = function(a, b) {
            var c = a.pw,
                d = b.indexOf("\n", c);
            if (-1 == d) return i7;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return qPa;
            d += 1;
            if (d + c > b.length) return i7;
            b = b.substr(d, c);
            a.pw = d + c;
            return b
        },
        tPa = function(a, b) {
            a.qs = Date.now();
            h7(a);
            var c = b ? window.location.hostname : "";
            a.Rn = a.Dm.clone();
            g.qk(a.Rn, "DOMAIN", c);
            g.qk(a.Rn, "t", a.J);
            try {
                a.Hj = new ActiveXObject("htmlfile")
            } catch (m) {
                k7(a);
                a.zm = 7;
                e7(22);
                l7(a);
                return
            }
            var d = "<html><body>";
            if (b) {
                var e = "";
                for (b = 0; b < c.length; b++) {
                    var f = c.charAt(b);
                    if ("<" == f) f = e + "\\x3c";
                    else if (">" == f) f = e + "\\x3e";
                    else {
                        if (f in m7) f = m7[f];
                        else if (f in sPa) f = m7[f] = sPa[f];
                        else {
                            var h = f.charCodeAt(0);
                            if (31 < h && 127 > h) var l = f;
                            else {
                                if (256 > h) {
                                    if (l = "\\x", 16 > h || 256 < h) l += "0"
                                } else l = "\\u", 4096 > h && (l += "0");
                                l += h.toString(16).toUpperCase()
                            }
                            f =
                                m7[f] = l
                        }
                        f = e + f
                    }
                    e = f
                }
                d += '<script>document.domain="' + e + '"\x3c/script>'
            }
            d += "</body></html>";
            c = g.ed(g.gc("b/12014412"), d);
            a.Hj.open();
            a.Hj.write(g.ad(c));
            a.Hj.close();
            a.Hj.parentWindow.m = (0, g.C)(a.QU, a);
            a.Hj.parentWindow.d = (0, g.C)(a.ZK, a, !0);
            a.Hj.parentWindow.rpcClose = (0, g.C)(a.ZK, a, !1);
            c = a.Hj.createElement("DIV");
            a.Hj.parentWindow.document.body.appendChild(c);
            d = g.Kc(a.Rn.toString());
            d = g.qd(g.Gc(d));
            d = g.ed(g.gc("b/12014412"), '<iframe src="' + d + '"></iframe>');
            g.jd(c, d);
            a.i.sj(1)
        },
        h7 = function(a) {
            a.tF = Date.now() +
                a.C;
            uPa(a, a.C)
        },
        uPa = function(a, b) {
            if (null != a.Ls) throw Error("WatchDog timer not null");
            a.Ls = c7((0, g.C)(a.YU, a), b)
        },
        n7 = function(a) {
            a.Ls && (g.A.clearTimeout(a.Ls), a.Ls = null)
        },
        l7 = function(a) {
            a.i.mf() || a.Oo || a.i.Fw(a)
        },
        k7 = function(a) {
            n7(a);
            g.ff(a.jz);
            a.jz = null;
            a.u.stop();
            g.yk(a.B);
            if (a.df) {
                var b = a.df;
                a.df = null;
                b.abort();
                b.dispose()
            }
            a.Hj && (a.Hj = null)
        },
        j7 = function(a, b) {
            try {
                a.i.SK(a, b), a.i.sj(4)
            } catch (c) {}
        },
        wPa = function(a, b, c, d, e) {
            if (0 == d) c(!1);
            else {
                var f = e || 0;
                d--;
                vPa(a, b, function(h) {
                    h ? c(!0) : g.A.setTimeout(function() {
                        wPa(a, b, c, d, f)
                    }, f)
                })
            }
        },
        vPa = function(a, b, c) {
            var d = new Image;
            d.onload = function() {
                try {
                    o7(d), c(!0)
                } catch (e) {}
            };
            d.onerror = function() {
                try {
                    o7(d), c(!1)
                } catch (e) {}
            };
            d.onabort = function() {
                try {
                    o7(d), c(!1)
                } catch (e) {}
            };
            d.ontimeout = function() {
                try {
                    o7(d), c(!1)
                } catch (e) {}
            };
            g.A.setTimeout(function() {
                if (d.ontimeout) d.ontimeout()
            }, b);
            EOa(d, a)
        },
        o7 = function(a) {
            a.onload = null;
            a.onerror = null;
            a.onabort = null;
            a.ontimeout = null
        },
        xPa = function(a) {
            this.i = a;
            this.l = new b7
        },
        yPa = function(a) {
            var b = p7(a.i, a.Ft, "/mail/images/cleardot.gif");
            C6(b);
            wPa(b.toString(), 5E3, (0, g.C)(a.yP, a), 3, 2E3);
            a.sj(1)
        },
        r7 = function(a) {
            var b = a.i.L;
            if (null != b) e7(5), b ? (e7(11), q7(a.i, a, !1)) : (e7(12), q7(a.i, a, !0));
            else if (a.lh = new f7(a, void 0, void 0, void 0), a.lh.Co = a.LA, b = a.i, b = p7(b, b.Tv() ? a.qt : null, a.MA), e7(5), !g.ce || g.Xd(10)) D6(b, "TYPE", "xmlhttp"), g7(a.lh, b, !1, a.qt, !1);
            else {
                D6(b, "TYPE", "html");
                var c = a.lh;
                a = !!a.qt;
                c.Es = 3;
                c.Dm = C6(b.clone());
                tPa(c, a)
            }
        },
        s7 = function(a, b, c) {
            this.Oa = 1;
            this.i = [];
            this.u = [];
            this.B = new b7;
            this.J = a || null;
            this.L = null != b ? b : null;
            this.C = c || !1
        },
        zPa = function(a, b) {
            this.i = a;
            this.map = b;
            this.context = null
        },
        APa = function(a, b, c, d) {
            g.jf.call(this, "timingevent", a);
            this.size = b;
            this.Nv = d
        },
        BPa = function(a) {
            g.jf.call(this, "serverreachability", a)
        },
        EPa = function(a) {
            CPa(a);
            if (3 == a.Oa) {
                var b = a.Yu++,
                    c = a.ix.clone();
                g.qk(c, "SID", a.l);
                g.qk(c, "RID", b);
                g.qk(c, "TYPE", "terminate");
                t7(a, c);
                b = new f7(a, a.l, b, void 0);
                b.Es = 2;
                b.Dm = C6(c.clone());
                EOa(new Image, b.Dm.toString());
                b.qs = Date.now();
                h7(b)
            }
            DPa(a)
        },
        FPa = function(a) {
            a.YP(1, 0);
            a.ix = p7(a, null, a.NA);
            u7(a)
        },
        CPa = function(a) {
            a.Jm && (a.Jm.abort(), a.Jm = null);
            a.De && (a.De.cancel(), a.De = null);
            a.yl && (g.A.clearTimeout(a.yl), a.yl = null);
            v7(a);
            a.Ug && (a.Ug.cancel(), a.Ug = null);
            a.Qm && (g.A.clearTimeout(a.Qm), a.Qm = null)
        },
        GPa = function(a, b) {
            if (0 == a.Oa) throw Error("Invalid operation: sending map when state is closed");
            a.i.push(new zPa(a.HR++, b));
            2 != a.Oa && 3 != a.Oa || u7(a)
        },
        HPa = function(a) {
            var b = 0;
            a.De && b++;
            a.Ug && b++;
            return b
        },
        u7 = function(a) {
            a.Ug || a.Qm || (a.Qm = c7((0, g.C)(a.XK, a), 0), a.xr = 0)
        },
        JPa = function(a, b) {
            if (1 == a.Oa) {
                if (!b) {
                    a.Yu = Math.floor(1E5 * Math.random());
                    b = a.Yu++;
                    var c = new f7(a, "", b, void 0);
                    c.Co = a.Vj;
                    var d = w7(a),
                        e = a.ix.clone();
                    g.qk(e, "RID", b);
                    g.qk(e, "CVER", "1");
                    t7(a, e);
                    oPa(c, e, d);
                    a.Ug = c;
                    a.Oa = 2
                }
            } else 3 == a.Oa && (b ? IPa(a, b) : 0 == a.i.length || a.Ug || IPa(a))
        },
        IPa = function(a, b) {
            if (b)
                if (6 < a.Po) {
                    a.i = a.u.concat(a.i);
                    a.u.length = 0;
                    var c = a.Yu - 1;
                    b = w7(a)
                } else c = b.L, b = b.Vp;
            else c = a.Yu++, b = w7(a);
            var d = a.ix.clone();
            g.qk(d, "SID", a.l);
            g.qk(d, "RID", c);
            g.qk(d, "AID", a.Nr);
            t7(a, d);
            c = new f7(a, a.l, c, a.xr + 1);
            c.Co = a.Vj;
            c.setTimeout(1E4 + Math.round(1E4 * Math.random()));
            a.Ug = c;
            oPa(c, d, b)
        },
        t7 = function(a, b) {
            a.Nf && (a = a.Nf.xI()) && g.Eb(a, function(c, d) {
                g.qk(b, d, c)
            })
        },
        w7 = function(a) {
            var b = Math.min(a.i.length, 1E3),
                c = ["count=" + b];
            if (6 < a.Po && 0 < b) {
                var d = a.i[0].i;
                c.push("ofs=" + d)
            } else d = 0;
            for (var e = {}, f = 0; f < b; e = {
                    Cq: e.Cq
                }, f++) {
                e.Cq = a.i[f].i;
                var h = a.i[f].map;
                e.Cq = 6 >= a.Po ? f : e.Cq - d;
                try {
                    g.Eb(h, function(l) {
                        return function(m, n) {
                            c.push("req" + l.Cq + "_" + n + "=" + encodeURIComponent(m))
                        }
                    }(e))
                } catch (l) {
                    c.push("req" + e.Cq + "_type=" + encodeURIComponent("_badmap"))
                }
            }
            a.u = a.u.concat(a.i.splice(0, b));
            return c.join("&")
        },
        KPa = function(a) {
            a.De || a.yl || (a.I = 1, a.yl = c7((0, g.C)(a.WK, a), 0), a.Wq = 0)
        },
        x7 = function(a) {
            if (a.De || a.yl || 3 <= a.Wq) return !1;
            a.I++;
            a.yl = c7((0, g.C)(a.WK, a), LPa(a, a.Wq));
            a.Wq++;
            return !0
        },
        q7 = function(a, b, c) {
            a.Tz = c;
            a.Wj = b.Xk;
            a.C || FPa(a)
        },
        v7 = function(a) {
            null != a.Xo && (g.A.clearTimeout(a.Xo), a.Xo = null)
        },
        LPa = function(a, b) {
            var c = 5E3 + Math.floor(1E4 * Math.random());
            a.isActive() || (c *= 2);
            return c * b
        },
        y7 = function(a, b) {
            if (2 == b || 9 == b) {
                var c = null;
                a.Nf && (c = null);
                var d = (0, g.C)(a.WV, a);
                c || (c = new g.ck("//www.google.com/images/cleardot.gif"), C6(c));
                vPa(c.toString(), 1E4, d)
            } else e7(2);
            MPa(a, b)
        },
        MPa = function(a, b) {
            a.Oa = 0;
            a.Nf && a.Nf.MH(b);
            DPa(a);
            CPa(a)
        },
        DPa = function(a) {
            a.Oa = 0;
            a.Wj = -1;
            if (a.Nf)
                if (0 == a.u.length && 0 == a.i.length) a.Nf.GB();
                else {
                    g.rb(a.u);
                    var b = g.rb(a.i);
                    a.u.length = 0;
                    a.i.length = 0;
                    a.Nf.GB(b)
                }
        },
        p7 = function(a, b, c) {
            var d = g.rk(c);
            if ("" != d.i) b && g.ek(d, b + "." + d.i), g.fk(d, d.u);
            else {
                var e = window.location;
                d = MOa(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c)
            }
            a.Xt && g.Eb(a.Xt, function(f, h) {
                g.qk(d, h, f)
            });
            g.qk(d, "VER", a.Po);
            t7(a, d);
            return d
        },
        NPa = function() {},
        OPa = function() {
            this.i = [];
            this.l = []
        },
        PPa = function(a, b) {
            this.action = a;
            this.params = b || {}
        },
        z7 = function(a, b) {
            g.E.call(this);
            this.i = new g.J(this.IU, 0, this);
            g.F(this, this.i);
            this.Rf = 5E3;
            this.l = 0;
            if ("function" === typeof a) b && (a = (0, g.C)(a, b));
            else if (a && "function" === typeof a.handleEvent) a = (0, g.C)(a.handleEvent, a);
            else throw Error("Invalid listener argument");
            this.u = a
        },
        A7 = function(a, b, c, d, e) {
            c = void 0 === c ? !1 : c;
            d = void 0 === d ? function() {
                return ""
            } : d;
            e = void 0 === e ? !1 : e;
            this.va = a;
            this.I = b;
            this.u = new g.cr;
            this.l = new z7(this.AV, this);
            this.i = null;
            this.ea = !1;
            this.C = null;
            this.V = "";
            this.L = this.B = 0;
            this.J = [];
            this.ya = c;
            this.Y = d;
            this.Aa = e
        },
        QPa = function(a) {
            return {
                firstTestResults: [""],
                secondTestResults: !a.i.Tz,
                sessionId: a.i.l,
                arrayId: a.i.Nr
            }
        },
        RPa = function(a, b) {
            a.L = b || 0;
            a.l.stop();
            B7(a);
            a.i && (3 == a.i.getState() && JPa(a.i), EPa(a.i));
            a.L = 0
        },
        C7 = function(a) {
            return !!a.i && 3 == a.i.getState()
        },
        B7 = function(a) {
            if (a.i) {
                var b = a.Y(),
                    c = a.i.Vj || {};
                b ? c["x-youtube-lounge-xsrf-token"] = b : delete c["x-youtube-lounge-xsrf-token"];
                a.i.Vj = c
            }
        },
        D7 = function(a) {
            this.port = this.domain = "";
            this.i = "/api/lounge";
            this.l = !0;
            a = a || document.location.href;
            var b = Number(g.ii(4, a)) || "";
            b && (this.port = ":" + b);
            this.domain = g.ji(a) || "";
            a = g.Uc;
            0 <= a.search("MSIE") && (a = a.match(/MSIE ([\d.]+)/)[1], 0 > g.Dc(a, "10.0") && (this.l = !1))
        },
        E7 = function(a, b) {
            var c = a.i;
            a.l && (c = "https://" + a.domain + a.port + a.i);
            return g.ui(c + b, {})
        },
        F7 = function(a, b, c, d, e) {
            a = {
                format: "JSON",
                method: "POST",
                context: a,
                timeout: 5E3,
                withCredentials: !1,
                onSuccess: g.Qa(a.B, d, !0),
                onError: g.Qa(a.u, e),
                onTimeout: g.Qa(a.C, e)
            };
            c && (a.postParams = c, a.headers = {
                "Content-Type": "application/x-www-form-urlencoded"
            });
            return g.at(b, a)
        },
        VPa = function() {
            var a = SPa;
            TPa();
            G7.push(a);
            UPa()
        },
        H7 = function(a, b) {
            TPa();
            var c = WPa(a, String(b));
            g.kb(G7) ? XPa(c) : (UPa(), g.Cb(G7, function(d) {
                d(c)
            }))
        },
        TPa = function() {
            G7 || (G7 = g.Ha("yt.mdx.remote.debug.handlers_") || [], g.Ga("yt.mdx.remote.debug.handlers_", G7, void 0))
        },
        XPa = function(a) {
            var b = (I7 + 1) % 50;
            I7 = b;
            J7[b] = a;
            K7 || (K7 = 49 == b)
        },
        UPa = function() {
            var a = G7;
            if (J7[0]) {
                var b = K7 ? I7 : -1;
                do {
                    b = (b + 1) % 50;
                    var c = J7[b];
                    g.Cb(a, function(d) {
                        d(c)
                    })
                } while (b != I7);
                J7 = Array(50);
                I7 = -1;
                K7 = !1
            }
        },
        WPa = function(a, b) {
            var c = (Date.now() - YPa) / 1E3;
            c.toFixed && (c = c.toFixed(3));
            var d = [];
            d.push("[", c + "s", "] ");
            d.push("[", "yt.mdx.remote", "] ");
            d.push(a + ": " + b, "\n");
            return d.join("")
        },
        L7 = function(a) {
            g.Q.call(this);
            this.I = a;
            this.screens = []
        },
        ZPa = function(a, b) {
            var c = a.get(b.uuid) || a.get(b.id);
            if (c) return a = c.name, c.id = b.id || c.id, c.name = b.name, c.token = b.token, c.uuid = b.uuid || c.uuid, c.name != a;
            a.screens.push(b);
            return !0
        },
        $Pa = function(a, b) {
            var c = a.screens.length != b.length;
            a.screens = g.Ro(a.screens, function(f) {
                return !!N6(b, f)
            });
            for (var d = 0, e = b.length; d < e; d++) c = ZPa(a, b[d]) || c;
            return c
        },
        aQa = function(a, b) {
            var c = a.screens.length;
            a.screens = g.Ro(a.screens, function(d) {
                return !(d || b ? !d != !b ? 0 : d.id == b.id : 1)
            });
            return a.screens.length < c
        },
        M7 = function(a, b, c, d, e) {
            g.Q.call(this);
            this.u = a;
            this.J = b;
            this.B = c;
            this.I = d;
            this.C = e;
            this.l = 0;
            this.i = null;
            this.Hb = NaN
        },
        O7 = function(a) {
            L7.call(this, "LocalScreenService");
            this.l = a;
            this.i = NaN;
            N7(this);
            this.info("Initializing with " + L6(this.screens))
        },
        bQa = function(a) {
            if (a.screens.length) {
                var b = g.Qe(a.screens, function(d) {
                        return d.id
                    }),
                    c = E7(a.l, "/pairing/get_lounge_token_batch");
                F7(a.l, c, {
                    screen_ids: b.join(",")
                }, (0, g.C)(a.xQ, a), (0, g.C)(a.wQ, a))
            }
        },
        N7 = function(a) {
            if (g.Zr("deprecate_pair_servlet_enabled")) return $Pa(a, []);
            var b = SOa(YOa());
            b = g.Ro(b, function(c) {
                return !c.uuid
            });
            return $Pa(a, b)
        },
        P7 = function(a, b) {
            $Oa(g.Qe(a.screens, QOa));
            b && ZOa()
        },
        R7 = function(a, b) {
            g.Q.call(this);
            this.I = b;
            b = (b = g.gz("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
            for (var c = {}, d = this.I(), e = 0, f = d.length; e < f; ++e) {
                var h = d[e].id;
                c[h] = g.jb(b, h)
            }
            this.i = c;
            this.C = a;
            this.u = this.B = NaN;
            this.l = null;
            Q7("Initialized with " + g.Oh(this.i))
        },
        S7 = function(a, b, c) {
            var d = E7(a.C, "/pairing/get_screen_availability");
            F7(a.C, d, {
                lounge_token: b.token
            }, (0, g.C)(function(e) {
                e = e.screens || [];
                for (var f = 0, h = e.length; f < h; ++f)
                    if (e[f].loungeToken == b.token) {
                        c("online" == e[f].status);
                        return
                    }
                c(!1)
            }, a), (0, g.C)(function() {
                c(!1)
            }, a))
        },
        T7 = function(a, b) {
            a: if (E6(b) != E6(a.i)) var c = !1;
                else {
                    c = g.Mb(b);
                    for (var d = 0, e = c.length; d < e; ++d)
                        if (!a.i[c[d]]) {
                            c = !1;
                            break a
                        }
                    c = !0
                }c || (Q7("Updated online screens: " + g.Oh(a.i)), a.i = b, a.X("screenChange"));cQa(a)
        },
        U7 = function(a) {
            isNaN(a.u) || g.Ws(a.u);
            a.u = g.Us((0, g.C)(a.pE, a), 0 < a.B && a.B < g.Sa() ? 2E4 : 1E4)
        },
        Q7 = function(a) {
            H7("OnlineScreenService", a)
        },
        dQa = function(a) {
            var b = {};
            g.Cb(a.I(), function(c) {
                c.token ? b[c.token] = c.id : this.Wd("Requesting availability of screen w/o lounge token.")
            });
            return b
        },
        cQa = function(a) {
            a = g.Mb(g.Fb(a.i, function(b) {
                return b
            }));
            g.zb(a);
            a.length ? g.fz("yt-remote-online-screen-ids", a.join(","), 60) : g.iz("yt-remote-online-screen-ids")
        },
        V7 = function(a, b) {
            b = void 0 === b ? !1 : b;
            L7.call(this, "ScreenService");
            this.B = a;
            this.J = b;
            this.i = this.l = null;
            this.u = [];
            this.C = {};
            eQa(this)
        },
        gQa = function(a, b, c, d, e, f) {
            a.info("getAutomaticScreenByIds " + c + " / " + b);
            c || (c = a.C[b]);
            var h = a.Fh(),
                l = c ? O6(h, c) : null;
            c && (a.J || l) || (l = O6(h, b));
            if (l) {
                l.uuid = b;
                var m = W7(a, l);
                S7(a.i, m, function(n) {
                    e(n ? m : null)
                })
            } else c ? fQa(a, c, (0, g.C)(function(n) {
                var p = W7(this, new I6({
                    name: d,
                    screenId: c,
                    loungeToken: n,
                    dialId: b || ""
                }));
                S7(this.i, p, function(r) {
                    e(r ? p : null)
                })
            }, a), f) : e(null)
        },
        hQa = function(a, b) {
            for (var c = 0, d = a.screens.length; c < d; ++c)
                if (a.screens[c].name == b) return a.screens[c];
            return null
        },
        iQa = function(a, b, c) {
            S7(a.i, b, c)
        },
        fQa = function(a, b, c, d) {
            a.info("requestLoungeToken_ for " + b);
            var e = {
                postParams: {
                    screen_ids: b
                },
                method: "POST",
                context: a,
                onSuccess: function(f, h) {
                    f = h && h.screens || [];
                    f[0] && f[0].screenId == b ? c(f[0].loungeToken) : d(Error("Missing lounge token in token response"))
                },
                onError: function() {
                    d(Error("Request screen lounge token failed"))
                }
            };
            g.at(E7(a.B, "/pairing/get_lounge_token_batch"), e)
        },
        jQa = function(a) {
            a.screens = a.l.Fh();
            var b = a.C,
                c = {},
                d;
            for (d in b) c[b[d]] = d;
            b = 0;
            for (d = a.screens.length; b < d; ++b) {
                var e = a.screens[b];
                e.uuid = c[e.id] || ""
            }
            a.info("Updated manual screens: " + L6(a.screens))
        },
        eQa = function(a) {
            X7(a);
            a.l = new O7(a.B);
            a.l.subscribe("screenChange", (0, g.C)(a.GQ, a));
            jQa(a);
            a.J || (a.u = SOa(g.gz("yt-remote-automatic-screen-cache") || []));
            X7(a);
            a.info("Initializing automatic screens: " + L6(a.u));
            a.i = new R7(a.B, (0, g.C)(a.Fh, a, !0));
            a.i.subscribe("screenChange", (0, g.C)(function() {
                this.X("onlineScreenChange")
            }, a))
        },
        W7 = function(a, b) {
            var c = a.get(b.id);
            c ? (c.uuid = b.uuid, b = c) : ((c = O6(a.u, b.uuid)) ? (c.id = b.id, c.token = b.token, b = c) : a.u.push(b), a.J || kQa(a));
            X7(a);
            a.C[b.uuid] = b.id;
            g.fz("yt-remote-device-id-map", a.C, 31536E3);
            return b
        },
        kQa = function(a) {
            a = g.Ro(a.u, function(b) {
                return "shortLived" != b.idType
            });
            g.fz("yt-remote-automatic-screen-cache", g.Qe(a, QOa))
        },
        X7 = function(a) {
            a.C = g.gz("yt-remote-device-id-map") || {}
        },
        Y7 = function(a, b, c) {
            g.Q.call(this);
            this.Aa = c;
            this.u = a;
            this.i = b;
            this.B = null
        },
        Z7 = function(a, b) {
            a.B = b;
            a.X("sessionScreen", a.B)
        },
        lQa = function(a, b) {
            a.B && (a.B.token = b, W7(a.u, a.B));
            a.X("sessionScreen", a.B)
        },
        $7 = function(a, b) {
            H7(a.Aa, b)
        },
        a8 = function(a, b, c) {
            Y7.call(this, a, b, "CastSession");
            var d = this;
            this.config_ = c;
            this.l = null;
            this.Y = (0, g.C)(this.IO, this);
            this.ya = (0, g.C)(this.bV, this);
            this.ea = g.Us(function() {
                mQa(d, null)
            }, 12E4);
            this.J = this.C = this.I = this.L = 0;
            this.va = !1;
            this.V = "unknown"
        },
        b8 = function(a, b) {
            g.Ws(a.J);
            a.J = 0;
            0 == b ? nQa(a) : a.J = g.Us(function() {
                nQa(a)
            }, b)
        },
        nQa = function(a) {
            oQa(a, "getLoungeToken");
            g.Ws(a.C);
            a.C = g.Us(function() {
                pQa(a, null)
            }, 3E4)
        },
        oQa = function(a, b) {
            a.info("sendYoutubeMessage_: " + b + " " + g.Oh(void 0));
            var c = {};
            c.type = b;
            a.l ? a.l.sendMessage("urn:x-cast:com.google.youtube.mdx", c, g.Ia, (0, g.C)(function() {
                $7(this, "Failed to send message: " + b + ".")
            }, a)) : $7(a, "Sending yt message without session: " + g.Oh(c))
        },
        c8 = function(a, b) {
            b ? (a.info("onConnectedScreenId_: Received screenId: " + b), a.getScreen() && a.getScreen().id == b || a.MI(b, function(c) {
                Z7(a, c)
            }, function() {
                return a.qg()
            }, 5)) : a.qg(Error("Waiting for session status timed out."))
        },
        rQa = function(a, b, c) {
            a.info("onConnectedScreenData_: Received screenData: " + JSON.stringify(b));
            var d = new I6(b);
            qQa(a, d, function(e) {
                e ? (a.va = !0, W7(a.u, d), Z7(a, d), a.V = "unknown", b8(a, c)) : (g.ds(Error("CastSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online.")), a.qg())
            }, 5)
        },
        mQa = function(a, b) {
            g.Ws(a.ea);
            a.ea = 0;
            b ? a.config_.enableCastLoungeToken && b.loungeToken ? b.deviceId ? a.getScreen() && a.getScreen().uuid == b.deviceId || (b.loungeTokenRefreshIntervalMs ? rQa(a, {
                name: a.i.friendlyName,
                screenId: b.screenId,
                loungeToken: b.loungeToken,
                dialId: b.deviceId,
                screenIdType: "shortLived"
            }, b.loungeTokenRefreshIntervalMs) : (g.ds(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), c8(a, b.screenId))) : (g.ds(Error("No device id presents in mdxSessionStatusData: " + JSON.stringify(b) +
                ".")), c8(a, b.screenId)) : c8(a, b.screenId) : a.qg(Error("Waiting for session status timed out."))
        },
        pQa = function(a, b) {
            g.Ws(a.C);
            a.C = 0;
            var c = null;
            if (b)
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.getScreen()) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
            else c = "noLoungeTokenResponse";
            c ? (a.info("Did not receive a new lounge token in onLoungeToken_ with data: " + (JSON.stringify(b) + ", error: " + c)), a.V = c, b8(a, 3E4)) : (lQa(a, b.loungeToken), a.va = !1, a.V = "unknown", b8(a, b.loungeTokenRefreshIntervalMs))
        },
        qQa = function(a, b, c, d) {
            g.Ws(a.I);
            a.I = 0;
            iQa(a.u, b, function(e) {
                e || 0 > d ? c(e) : a.I = g.Us(function() {
                    qQa(a, b, c, d - 1)
                }, 300)
            })
        },
        sQa = function(a) {
            g.Ws(a.L);
            a.L = 0;
            g.Ws(a.I);
            a.I = 0;
            g.Ws(a.ea);
            a.ea = 0;
            g.Ws(a.C);
            a.C = 0;
            g.Ws(a.J);
            a.J = 0
        },
        d8 = function(a, b, c, d) {
            Y7.call(this, a, b, "DialSession");
            this.config_ = d;
            this.l = this.L = null;
            this.ya = "";
            this.Ga = c;
            this.Ia = null;
            this.ea = g.Ia;
            this.V = NaN;
            this.Da = (0, g.C)(this.JO, this);
            this.C = g.Ia;
            this.J = this.I = 0;
            this.Y = !1;
            this.va = "unknown"
        },
        e8 = function(a) {
            var b;
            return !!(a.config_.enableDialLoungeToken && (null == (b = a.l) ? 0 : b.getDialAppInfo))
        },
        tQa = function(a) {
            a.C = a.u.oG(a.ya, a.i.label, a.i.friendlyName, e8(a), function(b, c) {
                a.C = g.Ia;
                a.Y = !0;
                Z7(a, b);
                "shortLived" == b.idType && 0 < c && f8(a, c)
            }, function(b) {
                a.C = g.Ia;
                a.qg(b)
            })
        },
        uQa = function(a) {
            var b = {};
            b.pairingCode = a.ya;
            b.theme = a.Ga;
            cPa() && (b.env_useStageMdx = 1);
            return g.si(b)
        },
        g8 = function(a) {
            return new Promise(function(b) {
                a.ya = M6();
                if (a.Ia) {
                    var c = new chrome.cast.DialLaunchResponse(!0, uQa(a));
                    b(c);
                    tQa(a)
                } else a.ea = function() {
                    g.Ws(a.V);
                    a.ea = function() {};
                    a.V = NaN;
                    var d = new chrome.cast.DialLaunchResponse(!0, uQa(a));
                    b(d);
                    tQa(a)
                }, a.V = g.Us(function() {
                    a.ea()
                }, 100)
            })
        },
        wQa = function(a, b, c) {
            a.info("initOnConnectedScreenDataPromise_: Received screenData: " + JSON.stringify(b));
            var d = new I6(b);
            return (new Promise(function(e) {
                vQa(a, d, function(f) {
                    f ? (a.Y = !0, W7(a.u, d), Z7(a, d), f8(a, c)) : g.ds(Error("DialSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online."));
                    e(f)
                }, 5)
            })).then(function(e) {
                return e ? new chrome.cast.DialLaunchResponse(!1) : g8(a)
            })
        },
        xQa = function(a, b) {
            var c = a.L.receiver.label,
                d = a.i.friendlyName;
            return (new Promise(function(e) {
                gQa(a.u, c, b, d, function(f) {
                    f && f.token && Z7(a, f);
                    e(f)
                }, function(f) {
                    $7(a, "Failed to get DIAL screen: " + f);
                    e(null)
                })
            })).then(function(e) {
                return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : g8(a)
            })
        },
        vQa = function(a, b, c, d) {
            g.Ws(a.I);
            a.I = 0;
            iQa(a.u, b, function(e) {
                e || 0 > d ? c(e) : a.I = g.Us(function() {
                    vQa(a, b, c, d - 1)
                }, 300)
            })
        },
        f8 = function(a, b) {
            a.info("getDialAppInfoWithTimeout_ " + b);
            e8(a) && (g.Ws(a.J), a.J = 0, 0 == b ? yQa(a) : a.J = g.Us(function() {
                yQa(a)
            }, b))
        },
        yQa = function(a) {
            e8(a) && a.l.getDialAppInfo(function(b) {
                a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
                b = b.extraData || {};
                var c = null;
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.getScreen()) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
                c ? (a.va = c, f8(a, 3E4)) : (a.Y = !1, a.va = "unknown", lQa(a, b.loungeToken), f8(a, b.loungeTokenRefreshIntervalMs))
            }, function(b) {
                a.info("getDialAppInfo error: " + b);
                a.va = "noLoungeTokenResponse";
                f8(a, 3E4)
            })
        },
        zQa = function(a) {
            g.Ws(a.I);
            a.I = 0;
            g.Ws(a.J);
            a.J = 0;
            a.C();
            a.C = function() {};
            g.Ws(a.V)
        },
        h8 = function(a, b) {
            Y7.call(this, a, b, "ManualSession");
            this.l = g.Us((0, g.C)(this.Or, this, null), 150)
        },
        i8 = function(a, b) {
            g.Q.call(this);
            this.config_ = b;
            this.l = a;
            this.J = b.appId || "233637DE";
            this.B = b.theme || "cl";
            this.L = b.disableCastApi || !1;
            this.V = b.forceMirroring || !1;
            this.i = null;
            this.I = !1;
            this.u = [];
            this.C = (0, g.C)(this.TT, this)
        },
        AQa = function(a, b) {
            return b ? g.fb(a.u, function(c) {
                return J6(b, c.label)
            }, a) : null
        },
        j8 = function(a) {
            H7("Controller", a)
        },
        SPa = function(a) {
            window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a)
        },
        k8 = function(a) {
            return a.I || !!a.u.length || !!a.i
        },
        l8 = function(a, b, c) {
            b != a.i && (g.ff(a.i), (a.i = b) ? (c ? a.X("yt-remote-cast2-receiver-resumed",
                b.i) : a.X("yt-remote-cast2-receiver-selected", b.i), b.subscribe("sessionScreen", (0, g.C)(a.VK, a, b)), b.getScreen() ? a.X("yt-remote-cast2-session-change", b.getScreen()) : c && a.i.Or(null)) : a.X("yt-remote-cast2-session-change", null))
        },
        BQa = function(a) {
            var b = a.l.nG(),
                c = a.i && a.i.i;
            a = g.Qe(b, function(d) {
                c && J6(d, c.label) && (c = null);
                var e = d.uuid ? d.uuid : d.id,
                    f = AQa(this, d);
                f ? (f.label = e, f.friendlyName = d.name) : (f = new chrome.cast.Receiver(e, d.name), f.receiverType = chrome.cast.ReceiverType.CUSTOM);
                return f
            }, a);
            c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label, c.friendlyName), c.receiverType = chrome.cast.ReceiverType.CUSTOM), a.push(c));
            return a
        },
        GQa = function(a, b, c, d) {
            d.disableCastApi ? m8("Cannot initialize because disabled by Mdx config.") : CQa() ? DQa(b, d) && (n8(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? EQa(a, c) : (window.__onGCastApiAvailable = function(e, f) {
                e ? EQa(a, c) : (o8("Failed to load cast API: " + f), p8(!1), n8(!1), g.iz("yt-remote-cast-available"), g.iz("yt-remote-cast-receiver"),
                    FQa(), c(!1))
            }, d.loadCastApiSetupScript ? g.kz("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : 0 <= window.navigator.userAgent.indexOf("Android") && 0 <= window.navigator.userAgent.indexOf("Chrome/") && window.navigator.presentation ? 60 <= V6() && jPa() : !window.chrome || !window.navigator.presentation || 0 <= window.navigator.userAgent.indexOf("Edge") ? X6() : 89 <= V6() ? lPa() : (Y6(), W6(kPa.map(gPa))))) : m8("Cannot initialize because not running Chrome")
        },
        FQa = function() {
            m8("dispose");
            var a = q8();
            a && a.dispose();
            g.Ga("yt.mdx.remote.cloudview.instance_", null, void 0);
            HQa(!1);
            g.Ju(r8);
            r8.length = 0
        },
        s8 = function() {
            return !!g.gz("yt-remote-cast-installed")
        },
        IQa = function() {
            var a = g.gz("yt-remote-cast-receiver");
            return a ? a.friendlyName : null
        },
        JQa = function() {
            m8("clearCurrentReceiver");
            g.iz("yt-remote-cast-receiver")
        },
        KQa = function() {
            return s8() ? q8() ? q8().getCastSession() : (o8("getCastSelector: Cast is not initialized."), null) : (o8("getCastSelector: Cast API is not installed!"), null)
        },
        u8 = function() {
            s8() ? q8() ? t8() ? (m8("Requesting cast selector."), q8().requestSession()) : (m8("Wait for cast API to be ready to request the session."), r8.push(g.Iu("yt-remote-cast2-api-ready", u8))) : o8("requestCastSelector: Cast is not initialized.") : o8("requestCastSelector: Cast API is not installed!")
        },
        v8 =
        function(a, b) {
            t8() ? q8().setConnectedScreenStatus(a, b) : o8("setConnectedScreenStatus called before ready.")
        },
        CQa = function() {
            var a = 0 <= g.Uc.search(/ (CrMo|Chrome|CriOS)\//);
            return g.bj || a
        },
        LQa = function(a, b) {
            q8().init(a, b)
        },
        DQa = function(a, b) {
            var c = !1;
            q8() || (a = new i8(a, b), a.subscribe("yt-remote-cast2-availability-change", function(d) {
                g.fz("yt-remote-cast-available", d);
                G6("yt-remote-cast2-availability-change", d)
            }), a.subscribe("yt-remote-cast2-receiver-selected", function(d) {
                m8("onReceiverSelected: " + d.friendlyName);
                g.fz("yt-remote-cast-receiver", d);
                G6("yt-remote-cast2-receiver-selected", d)
            }), a.subscribe("yt-remote-cast2-receiver-resumed", function(d) {
                m8("onReceiverResumed: " + d.friendlyName);
                g.fz("yt-remote-cast-receiver", d);
                G6("yt-remote-cast2-receiver-resumed", d)
            }), a.subscribe("yt-remote-cast2-session-change", function(d) {
                m8("onSessionChange: " + K6(d));
                d || g.iz("yt-remote-cast-receiver");
                G6("yt-remote-cast2-session-change", d)
            }), g.Ga("yt.mdx.remote.cloudview.instance_", a, void 0), c = !0);
            m8("cloudview.createSingleton_: " + c);
            return c
        },
        q8 = function() {
            return g.Ha("yt.mdx.remote.cloudview.instance_")
        },
        EQa = function(a, b) {
            p8(!0);
            n8(!1);
            LQa(a, function(c) {
                c ? (HQa(!0), g.Ku("yt-remote-cast2-api-ready")) : (o8("Failed to initialize cast API."), p8(!1), g.iz("yt-remote-cast-available"), g.iz("yt-remote-cast-receiver"), FQa());
                b(c)
            })
        },
        m8 = function(a) {
            H7("cloudview", a)
        },
        o8 = function(a) {
            H7("cloudview", a)
        },
        p8 = function(a) {
            m8("setCastInstalled_ " + a);
            g.fz("yt-remote-cast-installed", a)
        },
        t8 = function() {
            return !!g.Ha("yt.mdx.remote.cloudview.apiReady_")
        },
        HQa = function(a) {
            m8("setApiReady_ " + a);
            g.Ga("yt.mdx.remote.cloudview.apiReady_", a, void 0)
        },
        n8 = function(a) {
            g.Ga("yt.mdx.remote.cloudview.initializing_", a, void 0)
        },
        w8 = function(a) {
            this.index = -1;
            this.videoId = this.listId = "";
            this.volume = this.playerState = -1;
            this.muted = !1;
            this.audioTrackId = null;
            this.I = this.J = 0;
            this.trackData = null;
            this.hasNext = this.vk = !1;
            this.L = this.C = this.i = this.B = 0;
            this.u = NaN;
            this.l = !1;
            this.reset(a)
        },
        x8 = function(a) {
            a.audioTrackId = null;
            a.trackData = null;
            a.playerState = -1;
            a.vk = !1;
            a.hasNext = !1;
            a.J = 0;
            a.I = g.Sa();
            a.B = 0;
            a.i = 0;
            a.C = 0;
            a.L = 0;
            a.u = NaN;
            a.l = !1
        },
        y8 = function(a) {
            return a.yc() ? (g.Sa() - a.I) / 1E3 : 0
        },
        z8 = function(a, b) {
            a.J = b;
            a.I = g.Sa()
        },
        A8 = function(a) {
            switch (a.playerState) {
                case 1:
                case 1081:
                    return (g.Sa() - a.I) / 1E3 + a.J;
                case -1E3:
                    return 0
            }
            return a.J
        },
        B8 = function(a, b, c) {
            var d = a.videoId;
            a.videoId = b;
            a.index = c;
            b != d && x8(a)
        },
        C8 = function(a) {
            var b = {};
            b.index = a.index;
            b.listId = a.listId;
            b.videoId = a.videoId;
            b.playerState = a.playerState;
            b.volume = a.volume;
            b.muted = a.muted;
            b.audioTrackId = a.audioTrackId;
            b.trackData = g.Wb(a.trackData);
            b.hasPrevious = a.vk;
            b.hasNext = a.hasNext;
            b.playerTime = a.J;
            b.playerTimeAt = a.I;
            b.seekableStart = a.B;
            b.seekableEnd = a.i;
            b.duration = a.C;
            b.loadedTime = a.L;
            b.liveIngestionTime = a.u;
            return b
        },
        E8 = function(a, b) {
            g.Q.call(this);
            this.Oa = 0;
            this.u = a;
            this.C = [];
            this.B = new OPa;
            this.l = this.i = null;
            this.L = (0, g.C)(this.rS, this);
            this.I = (0, g.C)(this.hv, this);
            this.J = (0, g.C)(this.qS, this);
            this.V = (0, g.C)(this.yS, this);
            var c = 0;
            a ? (c = a.getProxyState(), 3 != c && (a.subscribe("proxyStateChange", this.EE, this), MQa(this))) : c = 3;
            0 != c && (b ? this.EE(c) : g.Us((0, g.C)(function() {
                this.EE(c)
            }, this), 0));
            (a = KQa()) && D8(this, a);
            this.subscribe("yt-remote-cast2-session-change", this.V)
        },
        F8 = function(a) {
            return new w8(a.u.getPlayerContextData())
        },
        MQa = function(a) {
            g.Cb("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "), function(b) {
                this.C.push(this.u.subscribe(b, g.Qa(this.QT, b), this))
            }, a)
        },
        NQa = function(a) {
            g.Cb(a.C, function(b) {
                this.u.unsubscribeByKey(b)
            }, a);
            a.C.length = 0
        },
        G8 = function(a) {
            return 1 == a.getState()
        },
        H8 = function(a, b) {
            var c = a.B;
            50 > c.i.length + c.l.length && a.B.l.push(b)
        },
        J8 = function(a, b, c) {
            var d = F8(a);
            z8(d, c); - 1E3 != d.playerState && (d.playerState = b);
            I8(a, d)
        },
        K8 = function(a, b, c) {
            a.u.sendMessage(b, c)
        },
        I8 = function(a, b) {
            NQa(a);
            a.u.setPlayerContextData(C8(b));
            MQa(a)
        },
        D8 = function(a, b) {
            a.l && (a.l.removeUpdateListener(a.L), a.l.removeMediaListener(a.I), a.hv(null));
            a.l = b;
            a.l && (H7("CP", "Setting cast session: " + a.l.sessionId), a.l.addUpdateListener(a.L), a.l.addMediaListener(a.I), a.l.media.length && a.hv(a.l.media[0]))
        },
        OQa = function(a) {
            var b = a.i.media,
                c = a.i.customData;
            if (b && c) {
                var d = F8(a);
                b.contentId != d.videoId && H7("CP", "Cast changing video to: " + b.contentId);
                d.videoId = b.contentId;
                d.playerState = c.playerState;
                z8(d, a.i.getEstimatedTime());
                I8(a, d)
            } else H7("CP", "No cast media video. Ignoring state update.")
        },
        L8 = function(a, b, c) {
            return (0, g.C)(function(d) {
                this.Wd("Failed to " + b + " with cast v2 channel. Error code: " + d.code);
                d.code != chrome.cast.ErrorCode.TIMEOUT && (this.Wd("Retrying " + b + " using MDx browser channel."), K8(this, b, c))
            }, a)
        },
        M8 = function(a, b, c) {
            g.Q.call(this);
            this.C = NaN;
            this.va = !1;
            this.L = this.J = this.ea = this.Y = NaN;
            this.V = [];
            this.B = this.I = this.u = this.kc = this.i = null;
            this.Aa = a;
            this.V.push(g.$t(window, "beforeunload", (0, g.C)(this.sQ, this)));
            this.l = [];
            this.kc = new w8;
            this.Da = b.id;
            this.ya = b.idType;
            this.i = PQa(this, c);
            this.i.subscribe("handlerOpened", this.vS, this);
            this.i.subscribe("handlerClosed", this.sS, this);
            this.i.subscribe("handlerError", this.tS, this);
            this.i.subscribe("handlerMessage", this.uS, this);
            this.i.xz(b.token);
            this.subscribe("remoteQueueChange", function() {
                var d =
                    this.kc.videoId;
                g.jz() && g.fz("yt-remote-session-video-id", d)
            }, this)
        },
        N8 = function(a) {
            H7("conn", a)
        },
        PQa = function(a, b) {
            return new A7(E7(a.Aa, "/bc"), b, !1, function() {
                return a.sG()
            }, "shortLived" == a.ya)
        },
        O8 = function(a, b) {
            a.X("proxyStateChange", b)
        },
        QQa = function(a) {
            a.C = g.Us((0, g.C)(function() {
                N8("Connecting timeout");
                this.qr(1)
            }, a), 2E4)
        },
        P8 = function(a) {
            g.Ws(a.C);
            a.C = NaN
        },
        Q8 = function(a) {
            g.Ws(a.Y);
            a.Y = NaN
        },
        RQa = function(a) {
            R8(a);
            a.ea = g.Us((0, g.C)(function() {
                S8(this, "getNowPlaying")
            }, a), 2E4)
        },
        R8 = function(a) {
            g.Ws(a.ea);
            a.ea = NaN
        },
        TQa = function(a, b) {
            b && (P8(a), Q8(a));
            var c = C7(a.i) && isNaN(a.C);
            b == c ? b && (O8(a, 1), S8(a, "getSubtitlesTrack")) : b ? (a.LI() && a.kc.reset(), O8(a, 1), S8(a, "getNowPlaying"), SQa(a)) : a.qr(1)
        },
        UQa = function(a, b) {
            var c = b.params.videoId;
            delete b.params.videoId;
            c == a.kc.videoId && (g.Rb(b.params) ? a.kc.trackData = null : a.kc.trackData = b.params, a.X("remotePlayerChange"))
        },
        VQa = function(a, b) {
            var c = b.params.videoId || b.params.video_id,
                d = parseInt(b.params.currentIndex, 10);
            a.kc.listId = b.params.listId || a.kc.listId;
            B8(a.kc, c, d);
            a.X("remoteQueueChange")
        },
        XQa = function(a, b) {
            b.params = b.params || {};
            VQa(a, b);
            WQa(a, b);
            a.X("autoplayDismissed")
        },
        WQa = function(a, b) {
            var c = parseInt(b.params.currentTime || b.params.current_time, 10);
            z8(a.kc, isNaN(c) ? 0 : c);
            c = parseInt(b.params.state, 10);
            c = isNaN(c) ? -1 : c; - 1 == c && -1E3 == a.kc.playerState && (c = -1E3);
            a.kc.playerState = c;
            c = Number(b.params.loadedTime);
            a.kc.L = isNaN(c) ? 0 : c;
            a.kc.Bj(Number(b.params.duration));
            c = a.kc;
            var d = Number(b.params.liveIngestionTime);
            c.u = d;
            c.l = isNaN(d) ? !1 : !0;
            c = a.kc;
            d = Number(b.params.seekableStartTime);
            b = Number(b.params.seekableEndTime);
            c.B = isNaN(d) ? 0 : d;
            c.i = isNaN(b) ? 0 : b;
            1 == a.kc.playerState ? RQa(a) : R8(a);
            a.X("remotePlayerChange")
        },
        YQa = function(a, b) {
            if (-1E3 != a.kc.playerState) {
                var c =
                    1085;
                switch (parseInt(b.params.adState, 10)) {
                    case 1:
                        c = 1081;
                        break;
                    case 2:
                        c = 1084;
                        break;
                    case 0:
                        c = 1083
                }
                a.kc.playerState = c;
                b = parseInt(b.params.currentTime, 10);
                z8(a.kc, isNaN(b) ? 0 : b);
                a.X("remotePlayerChange")
            }
        },
        ZQa = function(a, b) {
            var c = "true" == b.params.muted;
            a.kc.volume = parseInt(b.params.volume, 10);
            a.kc.muted = c;
            a.X("remotePlayerChange")
        },
        $Qa = function(a, b) {
            a.I = b.params.videoId;
            a.X("nowAutoplaying", parseInt(b.params.timeout, 10))
        },
        aRa = function(a, b) {
            var c = "true" == b.params.hasNext;
            a.kc.vk = "true" == b.params.hasPrevious;
            a.kc.hasNext = c;
            a.X("previousNextChange")
        },
        SQa = function(a) {
            g.Ws(a.L);
            a.L = g.Us((0, g.C)(a.qr, a, 1), 864E5)
        },
        S8 = function(a, b, c) {
            c ? N8("Sending: action=" + b + ", params=" + g.Oh(c)) : N8("Sending: action=" + b);
            a.i.sendMessage(b, c)
        },
        T8 = function(a) {
            L7.call(this, "ScreenServiceProxy");
            this.Ke = a;
            this.i = [];
            this.i.push(this.Ke.$_s("screenChange", (0, g.C)(this.NO, this)));
            this.i.push(this.Ke.$_s("onlineScreenChange", (0, g.C)(this.wT, this)))
        },
        eRa = function(a, b) {
            bPa();
            if (!U6 || !U6.get("yt-remote-disable-remote-module-for-dev")) {
                b = g.O("MDX_CONFIG") || b;
                UOa();
                S6();
                U8 || (U8 = new D7(b ? b.loungeApiHost : void 0), cPa() && (U8.i = "/api/loungedev"));
                V8 || (V8 = g.Ha("yt.mdx.remote.deferredProxies_") || [], g.Ga("yt.mdx.remote.deferredProxies_", V8, void 0));
                bRa();
                var c = W8();
                if (!c) {
                    var d = new V7(U8, b ? b.disableAutomaticScreenCache || !1 : !1);
                    g.Ga("yt.mdx.remote.screenService_", d, void 0);
                    c = W8();
                    var e = {};
                    b && (e = {
                        appId: b.appId,
                        disableDial: b.disableDial,
                        theme: b.theme,
                        loadCastApiSetupScript: b.loadCastApiSetupScript,
                        disableCastApi: b.disableCastApi,
                        enableDialLoungeToken: b.enableDialLoungeToken,
                        enableCastLoungeToken: b.enableCastLoungeToken,
                        forceMirroring: b.forceMirroring
                    });
                    GQa(a, d, function(f) {
                        f ? X8() && v8(X8(), "YouTube TV") : d.subscribe("onlineScreenChange", function() {
                            G6("yt-remote-receiver-availability-change")
                        })
                    }, e)
                }
                b && !g.Ha("yt.mdx.remote.initialized_") && (g.Ga("yt.mdx.remote.initialized_", !0, void 0), Y8("Initializing: " + g.Oh(b)), Z8.push(g.Iu("yt-remote-cast2-availability-change", function() {
                        G6("yt-remote-receiver-availability-change")
                    })),
                    Z8.push(g.Iu("yt-remote-cast2-receiver-selected", function() {
                        $8(null);
                        G6("yt-remote-auto-connect", "cast-selector-receiver")
                    })), Z8.push(g.Iu("yt-remote-cast2-receiver-resumed", function() {
                        G6("yt-remote-receiver-resumed", "cast-selector-receiver")
                    })), Z8.push(g.Iu("yt-remote-cast2-session-change", cRa)), Z8.push(g.Iu("yt-remote-connection-change", function(f) {
                        f ? v8(X8(), "YouTube TV") : a9() || (v8(null, null), JQa())
                    })), a = b9(), b.isAuto && (a.id += "#dial"), e = b.capabilities || [], g.Zr("desktop_enable_autoplay") && e.push("atp"), 0 < e.length && (a.capabilities = e), a.name = b.device, a.app = b.app, (b =
                        b.theme) && (a.theme = b), Y8(" -- with channel params: " + g.Oh(a)), a ? (g.fz("yt-remote-session-app", a.app), g.fz("yt-remote-session-name", a.name)) : (g.iz("yt-remote-session-app"), g.iz("yt-remote-session-name")), g.Ga("yt.mdx.remote.channelParams_", a, void 0), c.start(), X8() || dRa())
            }
        },
        fRa = function() {
            var a = W8().Ke.$_gos();
            var b = c9();
            b && d9() && (N6(a, b) || a.push(b));
            return TOa(a)
        },
        e9 = function() {
            var a = gRa();
            !a && s8() && IQa() && (a = {
                key: "cast-selector-receiver",
                name: IQa()
            });
            return a
        },
        gRa = function() {
            var a = fRa(),
                b = c9();
            b || (b = a9());
            return g.fb(a, function(c) {
                return b && J6(b, c.key) ? !0 : !1
            })
        },
        c9 = function() {
            var a = X8();
            if (!a) return null;
            var b = W8().Fh();
            return O6(b, a)
        },
        cRa = function(a) {
            Y8("remote.onCastSessionChange_: " + K6(a));
            if (a) {
                var b = c9();
                if (b && b.id == a.id) {
                    if (v8(b.id, "YouTube TV"), "shortLived" == a.idType && (a = a.token)) f9 && (f9.token = a), (b = d9()) && b.xz(a)
                } else b && g9(), h9(a, 1)
            } else d9() && g9()
        },
        g9 = function() {
            t8() ? q8().stopSession() : o8("stopSession called before API ready.");
            var a = d9();
            a && (a.disconnect(1), i9(null))
        },
        j9 = function() {
            var a = d9();
            return !!a && 3 != a.getProxyState()
        },
        Y8 = function(a) {
            H7("remote", a)
        },
        W8 = function() {
            if (!k9) {
                var a = g.Ha("yt.mdx.remote.screenService_");
                k9 = a ? new T8(a) : null
            }
            return k9
        },
        X8 = function() {
            return g.Ha("yt.mdx.remote.currentScreenId_")
        },
        hRa = function(a) {
            g.Ga("yt.mdx.remote.currentScreenId_", a, void 0)
        },
        iRa = function() {
            return g.Ha("yt.mdx.remote.connectData_")
        },
        $8 = function(a) {
            g.Ga("yt.mdx.remote.connectData_", a, void 0)
        },
        d9 = function() {
            return g.Ha("yt.mdx.remote.connection_")
        },
        i9 = function(a) {
            var b = d9();
            $8(null);
            a || hRa("");
            g.Ga("yt.mdx.remote.connection_", a, void 0);
            V8 && (g.Cb(V8, function(c) {
                c(a)
            }), V8.length = 0);
            b && !a ? G6("yt-remote-connection-change", !1) : !b && a && G6("yt-remote-connection-change", !0)
        },
        a9 = function() {
            var a = g.jz();
            if (!a) return null;
            var b = W8();
            if (!b) return null;
            b = b.Fh();
            return O6(b, a)
        },
        h9 = function(a, b) {
            X8();
            c9() && c9();
            l9 ? f9 = a : (hRa(a.id), a = new M8(U8, a, b9()), a.connect(b, iRa()), a.subscribe("beforeDisconnect", function(c) {
                G6("yt-remote-before-disconnect", c)
            }), a.subscribe("beforeDispose", function() {
                d9() && (d9(), i9(null))
            }), a.subscribe("browserChannelAuthError", function() {
                var c = c9();
                c && "shortLived" == c.idType && (t8() ? q8().handleBrowserChannelAuthError() : o8("refreshLoungeToken called before API ready."))
            }), i9(a))
        },
        dRa = function() {
            var a = a9();
            a ? (Y8("Resume connection to: " + K6(a)), h9(a, 0)) : (T6(), JQa(), Y8("Skipping connecting because no session screen found."))
        },
        bRa = function() {
            var a = b9();
            if (g.Rb(a)) {
                a = R6();
                var b = g.gz("yt-remote-session-name") || "",
                    c = g.gz("yt-remote-session-app") || "";
                a = {
                    device: "REMOTE_CONTROL",
                    id: a,
                    name: b,
                    app: c,
                    mdxVersion: 3
                };
                g.Ga("yt.mdx.remote.channelParams_", a, void 0)
            }
        },
        b9 = function() {
            return g.Ha("yt.mdx.remote.channelParams_") || {}
        },
        m9 = function(a, b, c) {
            g.E.call(this);
            var d = this;
            this.l = a;
            this.G = b;
            this.Pb = c;
            this.events = new g.wN(this);
            this.ea = this.events.N(this.G, "onVolumeChange", function(e) {
                jRa(d, e)
            });
            this.C = !1;
            this.suggestion = null;
            this.I = new g.GK(64);
            this.i = new g.J(this.TL, 500, this);
            this.u = new g.J(this.UL, 1E3, this);
            this.L = new Z6(this.oW, 0, this);
            this.B = {};
            this.V = new g.J(this.BM, 1E3, this);
            this.J = new $6(this.seekTo, 1E3, this);
            this.Y = g.Ia;
            g.F(this, this.events);
            this.events.N(b, "onCaptionsTrackListChanged", this.gT);
            this.events.N(b, "captionschanged", this.oS);
            this.events.N(b, "captionssettingschanged", this.aM);
            this.events.N(b, "videoplayerreset", this.Sy);
            this.events.N(b, "mdxautoplaycancel", function() {
                d.Pb.fI()
            });
            a = this.Pb;
            a.isDisposed();
            a.subscribe("proxyStateChange", this.RK, this);
            a.subscribe("remotePlayerChange", this.wv, this);
            a.subscribe("remoteQueueChange", this.Sy, this);
            a.subscribe("previousNextChange", this.OK, this);
            a.subscribe("nowAutoplaying", this.IK, this);
            a.subscribe("autoplayDismissed", this.lK, this);
            g.F(this, this.i);
            g.F(this, this.u);
            g.F(this, this.L);
            g.F(this, this.V);
            g.F(this, this.J);
            this.aM();
            this.Sy();
            this.wv()
        },
        jRa = function(a, b) {
            if (n9(a)) {
                a.Pb.unsubscribe("remotePlayerChange", a.wv, a);
                var c = Math.round(b.volume);
                b = !!b.muted;
                var d = F8(a.Pb);
                if (c !== d.volume || b !== d.muted) a.Pb.setVolume(c, b), a.V.start();
                a.Pb.subscribe("remotePlayerChange", a.wv, a)
            }
        },
        kRa = function(a) {
            a.Rb(0);
            a.i.stop();
            a.Jb(new g.GK(64))
        },
        o9 = function(a, b) {
            if (n9(a) && !a.C) {
                var c = null;
                b && (c = {
                    style: a.G.getSubtitlesUserSettings()
                }, g.Yb(c, b));
                a.Pb.rG(a.G.getVideoData(1).videoId, c);
                a.B = F8(a.Pb).trackData
            }
        },
        p9 = function(a, b) {
            var c = a.G.getPlaylist();
            if (null === c || void 0 === c ? 0 : c.listId) {
                var d = c.index;
                var e = c.listId.toString()
            }
            c = a.G.getVideoData(1);
            a.Pb.playVideo(c.videoId, b, d, e, c.playerParams, c.La, JOa(c));
            a.Jb(new g.GK(1))
        },
        lRa = function(a, b) {
            if (b) {
                var c = a.G.getOption("captions", "tracklist", {
                    gJ: 1
                });
                c && c.length ? (a.G.setOption("captions", "track", b), a.C = !1) : (a.G.loadModule("captions"), a.C = !0)
            } else a.G.setOption("captions", "track", {})
        },
        n9 = function(a) {
            return F8(a.Pb).videoId === a.G.getVideoData(1).videoId
        },
        q9 = function() {
            g.W.call(this, {
                D: "div",
                K: "ytp-mdx-manual-pairing-popup-dialog",
                U: {
                    role: "dialog"
                },
                S: [{
                    D: "div",
                    K: "ytp-mdx-manual-pairing-popup-dialog-inner-content",
                    S: [{
                        D: "div",
                        K: "ytp-mdx-manual-pairing-popup-title",
                        ra: "Connecting to your TV on web using a code will be going away soon"
                    }, {
                        D: "div",
                        K: "ytp-mdx-manual-pairing-popup-buttons",
                        S: [{
                            D: "button",
                            Ea: ["ytp-button", "ytp-mdx-manual-pairing-popup-learn-more"],
                            ra: "Learn more"
                        }, {
                            D: "button",
                            Ea: ["ytp-button", "ytp-mdx-manual-pairing-popup-ok"],
                            ra: "OK"
                        }]
                    }]
                }]
            });
            this.i = new g.kM(this, 250);
            this.learnMoreButton =
                this.Ca("ytp-mdx-manual-pairing-popup-learn-more");
            this.okButton = this.Ca("ytp-mdx-manual-pairing-popup-ok");
            g.F(this, this.i);
            this.N(this.learnMoreButton, "click", this.l);
            this.N(this.okButton, "click", this.u)
        },
        r9 = function() {
            g.W.call(this, {
                D: "div",
                K: "ytp-mdx-popup-dialog",
                U: {
                    role: "dialog"
                },
                S: [{
                    D: "div",
                    K: "ytp-mdx-popup-dialog-inner-content",
                    S: [{
                        D: "div",
                        K: "ytp-mdx-popup-title",
                        ra: "You're signed out"
                    }, {
                        D: "div",
                        K: "ytp-mdx-popup-description",
                        ra: "Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."
                    }, {
                        D: "div",
                        K: "ytp-mdx-privacy-popup-buttons",
                        S: [{
                            D: "button",
                            Ea: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                            ra: "Cancel"
                        }, {
                            D: "button",
                            Ea: ["ytp-button",
                                "ytp-mdx-privacy-popup-confirm"
                            ],
                            ra: "Confirm"
                        }]
                    }]
                }]
            });
            this.i = new g.kM(this, 250);
            this.cancelButton = this.Ca("ytp-mdx-privacy-popup-cancel");
            this.confirmButton = this.Ca("ytp-mdx-privacy-popup-confirm");
            g.F(this, this.i);
            this.N(this.cancelButton, "click", this.l);
            this.N(this.confirmButton, "click", this.u)
        },
        s9 = function(a) {
            g.W.call(this, {
                D: "div",
                K: "ytp-remote",
                S: [{
                    D: "div",
                    K: "ytp-remote-display-status",
                    S: [{
                        D: "div",
                        K: "ytp-remote-display-status-icon",
                        S: [g.Kqa()]
                    }, {
                        D: "div",
                        K: "ytp-remote-display-status-text",
                        ra: "{{statustext}}"
                    }]
                }]
            });
            this.api = a;
            this.i = new g.kM(this, 250);
            g.F(this, this.i);
            this.N(a, "presentingplayerstatechange", this.l);
            mRa(this, a.ub())
        },
        mRa = function(a, b) {
            if (3 === a.api.getPresentingPlayerType()) {
                var c = {
                    RECEIVER_NAME: a.api.getOption("remote", "currentReceiver").name
                };
                b = g.V(b, 128) ? g.iJ("Error on $RECEIVER_NAME", c) : b.yc() || g.V(b, 4) ? g.iJ("Playing on $RECEIVER_NAME", c) : g.iJ("Connected to $RECEIVER_NAME", c);
                a.Ta("statustext", b);
                a.i.show()
            } else a.i.hide()
        },
        t9 = function(a, b) {
            g.vQ.call(this, "Play on", 0, a, b);
            this.G = a;
            this.Pn = {};
            this.N(a, "onMdxReceiversChange", this.C);
            this.N(a, "presentingplayerstatechange", this.C);
            this.C()
        },
        u9 = function(a) {
            g.FN.call(this, a);
            this.qj = {
                key: M6(),
                name: "This computer"
            };
            this.Wh = null;
            this.subscriptions = [];
            this.bE = this.Pb = null;
            this.Pn = [this.qj];
            this.Lm = this.qj;
            this.ld = new g.GK(64);
            this.FJ = 0;
            this.rf = -1;
            this.Sr = null;
            this.Cv = this.py = !1;
            this.cm = this.ds = null;
            if (!g.YF(this.player.T()) && !g.ZF(this.player.T())) {
                a = this.player;
                var b = g.kN(a);
                b && (b = b.Zm()) && (b = new t9(a, b), g.F(this, b));
                b = new s9(a);
                g.F(this, b);
                g.uN(a, b.element, 4);
                this.ds = new r9;
                g.F(this, this.ds);
                g.uN(a, this.ds.element, 4);
                g.S(this.player.T().experiments, "pair_servlet_deprecation_warning_enabled") &&
                    !g.S(this.player.T().experiments, "deprecate_pair_servlet_enabled") && (this.Sr = new q9, g.F(this, this.Sr), g.uN(a, this.Sr.element, 4));
                this.Cv = !!a9();
                this.py = !!g.gz("yt-remote-manual-pairing-warning-shown")
            }
        },
        v9 = function(a) {
            a.cm && (a.player.removeEventListener("presentingplayerstatechange", a.cm), a.cm = null)
        },
        nRa = function(a, b, c) {
            a.ld = c;
            a.player.X("presentingplayerstatechange", new g.WI(c, b))
        },
        oRa = function(a, b, c) {
            var d = !1;
            1 === b ? d = !a.Cv : 2 === b && (d = !a.py);
            d && g.YI(c, 8) && (a.player.pauseVideo(), v9(a))
        },
        w9 = function(a, b) {
            if (b.key !== a.Lm.key)
                if (b.key === a.qj.key) g9();
                else {
                    if (a.Sr && !a.py && b !== a.qj && "cast-selector-receiver" !== b.key && g.FG(a.player.T())) pRa(a);
                    else {
                        var c;
                        (c = !g.S(a.player.T().experiments, "mdx_enable_privacy_disclosure_ui")) || (c = ((c = g.O("PLAYER_CONFIG")) && c.args && void 0 !== c.args.authuser ? !0 : !(!g.O("SESSION_INDEX") && !g.O("LOGGED_IN"))) || a.Cv || !a.ds);
                        (c ? 0 : g.FG(a.player.T()) || g.JG(a.player.T())) && qRa(a)
                    }
                    a.Lm = b;
                    if (!a.player.T().Z("disable_mdx_connection_in_mdx_module_for_music_web") || !g.ZF(a.player.T())) {
                        var d = a.player.getPlaylistId();
                        c = a.player.getVideoData(1);
                        var e = c.videoId;
                        if (!d && !e || (2 === a.player.getAppState() || 1 === a.player.getAppState()) && g.S(a.player.T().experiments, "should_clear_video_data_on_player_cued_unstarted")) a = null;
                        else {
                            var f = a.player.getPlaylist();
                            if (f) {
                                var h = [];
                                for (var l = 0; l < f.length; l++) h[l] = f.ib(l).videoId
                            } else h = [e];
                            f = a.player.getCurrentTime(1);
                            a = {
                                videoIds: h,
                                listId: d,
                                videoId: e,
                                playerParams: c.playerParams,
                                clickTrackingParams: c.La,
                                index: Math.max(a.player.getPlaylistIndex(), 0),
                                currentTime: 0 === f ? void 0 : f
                            };
                            (c = JOa(c)) && (a.locationInfo = c)
                        }
                        Y8("Connecting to: " +
                            g.Oh(b));
                        "cast-selector-receiver" == b.key ? ($8(a || null), b = a || null, t8() ? q8().setLaunchParams(b) : o8("setLaunchParams called before ready.")) : !a && j9() && X8() == b.key ? G6("yt-remote-connection-change", !0) : (g9(), $8(a || null), a = W8().Fh(), (b = O6(a, b.key)) && h9(b, 1))
                    }
                }
        },
        qRa = function(a) {
            a.player.ub().yc() ? a.player.pauseVideo() : (a.cm = function(b) {
                oRa(a, 1, b)
            }, a.player.addEventListener("presentingplayerstatechange", a.cm));
            a.ds && a.ds.bd();
            d9() || (l9 = !0)
        },
        pRa = function(a) {
            a.player.ub().yc() ? a.player.pauseVideo() : (a.cm = function(b) {
                oRa(a, 2, b)
            }, a.player.addEventListener("presentingplayerstatechange", a.cm));
            a.Sr && a.Sr.bd();
            d9() || (l9 = !0)
        },
        sPa = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "\\u003C"
        },
        m7 = {
            "'": "\\'"
        },
        POa = {
            nX: "atp",
            Y6: "ska",
            O5: "que",
            a4: "mus",
            X6: "sus",
            k0: "dsp",
            i6: "seq",
            D3: "mic",
            i_: "dpa",
            BX: "cds",
            Y3: "mlm"
        },
        U6, Q6 = "",
        iPa = dPa("loadCastFramework") || dPa("loadCastApplicationFramework"),
        kPa = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    g.Ta(Z6, g.E);
    g.k = Z6.prototype;
    g.k.BO = function(a) {
        this.B = arguments;
        this.i = !1;
        this.Hb ? this.u = g.Sa() + this.Rf : this.Hb = g.kh(this.C, this.Rf)
    };
    g.k.stop = function() {
        this.Hb && (g.A.clearTimeout(this.Hb), this.Hb = null);
        this.u = null;
        this.i = !1;
        this.B = []
    };
    g.k.pause = function() {
        ++this.l
    };
    g.k.resume = function() {
        this.l && (--this.l, !this.l && this.i && (this.i = !1, this.I.apply(null, this.B)))
    };
    g.k.xa = function() {
        this.stop();
        Z6.Vd.xa.call(this)
    };
    g.k.CO = function() {
        this.Hb && (g.A.clearTimeout(this.Hb), this.Hb = null);
        this.u ? (this.Hb = g.kh(this.C, this.u - g.Sa()), this.u = null) : this.l ? this.i = !0 : (this.i = !1, this.I.apply(null, this.B))
    };
    g.v($6, g.E);
    g.k = $6.prototype;
    g.k.mG = function(a) {
        this.u = arguments;
        this.Hb || this.l ? this.i = !0 : a7(this)
    };
    g.k.stop = function() {
        this.Hb && (g.A.clearTimeout(this.Hb), this.Hb = null, this.i = !1, this.u = null)
    };
    g.k.pause = function() {
        this.l++
    };
    g.k.resume = function() {
        this.l--;
        this.l || !this.i || this.Hb || (this.i = !1, a7(this))
    };
    g.k.xa = function() {
        g.E.prototype.xa.call(this);
        this.stop()
    };
    b7.prototype.stringify = function(a) {
        return g.A.JSON.stringify(a, void 0)
    };
    b7.prototype.parse = function(a) {
        return g.A.JSON.parse(a, void 0)
    };
    var d7 = new g.Jf;
    g.v(mPa, g.jf);
    g.k = f7.prototype;
    g.k.Co = null;
    g.k.Dj = !1;
    g.k.Ls = null;
    g.k.tF = null;
    g.k.qs = null;
    g.k.Es = null;
    g.k.Dm = null;
    g.k.Rn = null;
    g.k.Vp = null;
    g.k.df = null;
    g.k.pw = 0;
    g.k.Hj = null;
    g.k.Vz = null;
    g.k.zm = null;
    g.k.ot = -1;
    g.k.IL = !0;
    g.k.Oo = !1;
    g.k.KA = 0;
    g.k.jz = null;
    var qPa = {},
        i7 = {};
    g.k = f7.prototype;
    g.k.setTimeout = function(a) {
        this.C = a
    };
    g.k.DO = function(a) {
        a = a.target;
        var b = this.jz;
        b && 3 == g.Hi(a) ? b.mG() : this.HM(a)
    };
    g.k.HM = function(a) {
        try {
            if (a == this.df) a: {
                var b = g.Hi(this.df),
                    c = this.df.l,
                    d = this.df.getStatus();
                if (g.ce && !g.Xd(10) || g.jg && !g.Wd("420+")) {
                    if (4 > b) break a
                } else if (3 > b || 3 == b && !g.Vk && !g.Ri(this.df)) break a;this.Oo || 4 != b || 7 == c || (8 == c || 0 >= d ? this.i.sj(3) : this.i.sj(2));n7(this);
                var e = this.df.getStatus();this.ot = e;
                var f = g.Ri(this.df);
                (this.Dj = 200 == e) ? (4 == b && k7(this), this.I ? (rPa(this, b, f), g.Vk && this.Dj && 3 == b && (this.B.Pa(this.u, "tick", this.hV), this.u.start())) : j7(this, f), this.Dj && !this.Oo && (4 == b ? this.i.Fw(this) :
                    (this.Dj = !1, h7(this)))) : (400 == e && 0 < f.indexOf("Unknown SID") ? (this.zm = 3, e7(13)) : (this.zm = 0, e7(14)), k7(this), l7(this))
            }
        } catch (h) {
            this.df && g.Ri(this.df)
        } finally {}
    };
    g.k.hV = function() {
        var a = g.Hi(this.df),
            b = g.Ri(this.df);
        this.pw < b.length && (n7(this), rPa(this, a, b), this.Dj && 4 != a && h7(this))
    };
    g.k.QU = function(a) {
        c7((0, g.C)(this.PU, this, a), 0)
    };
    g.k.PU = function(a) {
        this.Oo || (n7(this), j7(this, a), h7(this))
    };
    g.k.ZK = function(a) {
        c7((0, g.C)(this.OU, this, a), 0)
    };
    g.k.OU = function(a) {
        this.Oo || (k7(this), this.Dj = a, this.i.Fw(this), this.i.sj(4))
    };
    g.k.cancel = function() {
        this.Oo = !0;
        k7(this)
    };
    g.k.YU = function() {
        this.Ls = null;
        var a = Date.now();
        0 <= a - this.tF ? (2 != this.Es && this.i.sj(3), k7(this), this.zm = 2, e7(18), l7(this)) : uPa(this, this.tF - a)
    };
    g.k.getLastError = function() {
        return this.zm
    };
    g.k = xPa.prototype;
    g.k.LA = null;
    g.k.lh = null;
    g.k.kz = !1;
    g.k.VL = null;
    g.k.hx = null;
    g.k.jD = null;
    g.k.MA = null;
    g.k.Oa = null;
    g.k.Xk = -1;
    g.k.qt = null;
    g.k.Ft = null;
    g.k.connect = function(a) {
        this.MA = a;
        a = p7(this.i, null, this.MA);
        e7(3);
        this.VL = Date.now();
        var b = this.i.J;
        null != b ? (this.qt = b[0], (this.Ft = b[1]) ? (this.Oa = 1, yPa(this)) : (this.Oa = 2, r7(this))) : (D6(a, "MODE", "init"), this.lh = new f7(this, void 0, void 0, void 0), this.lh.Co = this.LA, g7(this.lh, a, !1, null, !0), this.Oa = 0)
    };
    g.k.yP = function(a) {
        if (a) this.Oa = 2, r7(this);
        else {
            e7(4);
            var b = this.i;
            b.Wj = b.Jm.Xk;
            y7(b, 9)
        }
        a && this.sj(2)
    };
    g.k.TB = function(a) {
        return this.i.TB(a)
    };
    g.k.abort = function() {
        this.lh && (this.lh.cancel(), this.lh = null);
        this.Xk = -1
    };
    g.k.mf = function() {
        return !1
    };
    g.k.SK = function(a, b) {
        this.Xk = a.ot;
        if (0 == this.Oa)
            if (b) {
                try {
                    var c = this.l.parse(b)
                } catch (d) {
                    a = this.i;
                    a.Wj = this.Xk;
                    y7(a, 2);
                    return
                }
                this.qt = c[0];
                this.Ft = c[1]
            } else a = this.i, a.Wj = this.Xk, y7(a, 2);
        else if (2 == this.Oa)
            if (this.kz) e7(7), this.jD = Date.now();
            else if ("11111" == b) {
            if (e7(6), this.kz = !0, this.hx = Date.now(), a = this.hx - this.VL, !g.ce || g.Xd(10) || 500 > a) this.Xk = 200, this.lh.cancel(), e7(12), q7(this.i, this, !0)
        } else e7(8), this.hx = this.jD = Date.now(), this.kz = !1
    };
    g.k.Fw = function() {
        this.Xk = this.lh.ot;
        if (this.lh.Dj) 0 == this.Oa ? this.Ft ? (this.Oa = 1, yPa(this)) : (this.Oa = 2, r7(this)) : 2 == this.Oa && ((!g.ce || g.Xd(10) ? !this.kz : 200 > this.jD - this.hx) ? (e7(11), q7(this.i, this, !1)) : (e7(12), q7(this.i, this, !0)));
        else {
            0 == this.Oa ? e7(9) : 2 == this.Oa && e7(10);
            var a = this.i;
            this.lh.getLastError();
            a.Wj = this.Xk;
            y7(a, 2)
        }
    };
    g.k.Tv = function() {
        return this.i.Tv()
    };
    g.k.isActive = function() {
        return this.i.isActive()
    };
    g.k.sj = function(a) {
        this.i.sj(a)
    };
    g.k = s7.prototype;
    g.k.Vj = null;
    g.k.Xt = null;
    g.k.Ug = null;
    g.k.De = null;
    g.k.NA = null;
    g.k.ix = null;
    g.k.yH = null;
    g.k.Gw = null;
    g.k.Yu = 0;
    g.k.HR = 0;
    g.k.Nf = null;
    g.k.Qm = null;
    g.k.yl = null;
    g.k.Xo = null;
    g.k.Jm = null;
    g.k.Tz = null;
    g.k.Nr = -1;
    g.k.EJ = -1;
    g.k.Wj = -1;
    g.k.xr = 0;
    g.k.Wq = 0;
    g.k.Po = 8;
    g.Ta(APa, g.jf);
    g.Ta(BPa, g.jf);
    g.k = s7.prototype;
    g.k.connect = function(a, b, c, d, e) {
        e7(0);
        this.NA = b;
        this.Xt = c || {};
        d && void 0 !== e && (this.Xt.OSID = d, this.Xt.OAID = e);
        this.C ? (c7((0, g.C)(this.SH, this, a), 100), FPa(this)) : this.SH(a)
    };
    g.k.SH = function(a) {
        this.Jm = new xPa(this);
        this.Jm.LA = this.Vj;
        this.Jm.l = this.B;
        this.Jm.connect(a)
    };
    g.k.mf = function() {
        return 0 == this.Oa
    };
    g.k.getState = function() {
        return this.Oa
    };
    g.k.XK = function(a) {
        this.Qm = null;
        JPa(this, a)
    };
    g.k.WK = function() {
        this.yl = null;
        this.De = new f7(this, this.l, "rpc", this.I);
        this.De.Co = this.Vj;
        this.De.KA = 0;
        var a = this.yH.clone();
        g.qk(a, "RID", "rpc");
        g.qk(a, "SID", this.l);
        g.qk(a, "CI", this.Tz ? "0" : "1");
        g.qk(a, "AID", this.Nr);
        t7(this, a);
        if (!g.ce || g.Xd(10)) g.qk(a, "TYPE", "xmlhttp"), g7(this.De, a, !0, this.Gw, !1);
        else {
            g.qk(a, "TYPE", "html");
            var b = this.De,
                c = !!this.Gw;
            b.Es = 3;
            b.Dm = C6(a.clone());
            tPa(b, c)
        }
    };
    g.k.SK = function(a, b) {
        if (0 != this.Oa && (this.De == a || this.Ug == a))
            if (this.Wj = a.ot, this.Ug == a && 3 == this.Oa)
                if (7 < this.Po) {
                    try {
                        var c = this.B.parse(b)
                    } catch (d) {
                        c = null
                    }
                    if (Array.isArray(c) && 3 == c.length)
                        if (a = c, 0 == a[0]) a: {
                            if (!this.yl) {
                                if (this.De)
                                    if (this.De.qs + 3E3 < this.Ug.qs) v7(this), this.De.cancel(), this.De = null;
                                    else break a;
                                x7(this);
                                e7(19)
                            }
                        }
                    else this.EJ = a[1], 0 < this.EJ - this.Nr && 37500 > a[2] && this.Tz && 0 == this.Wq && !this.Xo && (this.Xo = c7((0, g.C)(this.lS, this), 6E3));
                    else y7(this, 11)
                } else null != b && y7(this, 11);
        else if (this.De ==
            a && v7(this), !g.sc(b))
            for (a = this.B.parse(b), b = 0; b < a.length; b++) c = a[b], this.Nr = c[0], c = c[1], 2 == this.Oa ? "c" == c[0] ? (this.l = c[1], this.Gw = c[2], c = c[3], null != c ? this.Po = c : this.Po = 6, this.Oa = 3, this.Nf && this.Nf.OH(), this.yH = p7(this, this.Tv() ? this.Gw : null, this.NA), KPa(this)) : "stop" == c[0] && y7(this, 7) : 3 == this.Oa && ("stop" == c[0] ? y7(this, 7) : "noop" != c[0] && this.Nf && this.Nf.NH(c), this.Wq = 0)
    };
    g.k.lS = function() {
        null != this.Xo && (this.Xo = null, this.De.cancel(), this.De = null, x7(this), e7(20))
    };
    g.k.Fw = function(a) {
        if (this.De == a) {
            v7(this);
            this.De = null;
            var b = 2
        } else if (this.Ug == a) this.Ug = null, b = 1;
        else return;
        this.Wj = a.ot;
        if (0 != this.Oa)
            if (a.Dj)
                if (1 == b) {
                    b = Date.now() - a.qs;
                    var c = d7;
                    c.dispatchEvent(new APa(c, a.Vp ? a.Vp.length : 0, b, this.xr));
                    u7(this);
                    this.u.length = 0
                } else KPa(this);
        else {
            c = a.getLastError();
            var d;
            if (!(d = 3 == c || 7 == c || 0 == c && 0 < this.Wj)) {
                if (d = 1 == b) this.Ug || this.Qm || 1 == this.Oa || 2 <= this.xr ? d = !1 : (this.Qm = c7((0, g.C)(this.XK, this, a), LPa(this, this.xr)), this.xr++, d = !0);
                d = !(d || 2 == b && x7(this))
            }
            if (d) switch (c) {
                case 1:
                    y7(this,
                        5);
                    break;
                case 4:
                    y7(this, 10);
                    break;
                case 3:
                    y7(this, 6);
                    break;
                case 7:
                    y7(this, 12);
                    break;
                default:
                    y7(this, 2)
            }
        }
    };
    g.k.YP = function(a) {
        if (!g.jb(arguments, this.Oa)) throw Error("Unexpected channel state: " + this.Oa);
    };
    g.k.WV = function(a) {
        a ? e7(2) : (e7(1), MPa(this, 8))
    };
    g.k.TB = function(a) {
        if (a) throw Error("Can't create secondary domain capable XhrIo object.");
        a = new g.Bi;
        a.L = !1;
        return a
    };
    g.k.isActive = function() {
        return !!this.Nf && this.Nf.isActive(this)
    };
    g.k.sj = function(a) {
        var b = d7;
        b.dispatchEvent(new BPa(b, a))
    };
    g.k.Tv = function() {
        return !(!g.ce || g.Xd(10))
    };
    g.k = NPa.prototype;
    g.k.OH = function() {};
    g.k.NH = function() {};
    g.k.MH = function() {};
    g.k.GB = function() {};
    g.k.xI = function() {
        return {}
    };
    g.k.isActive = function() {
        return !0
    };
    g.k = OPa.prototype;
    g.k.isEmpty = function() {
        return 0 === this.i.length && 0 === this.l.length
    };
    g.k.clear = function() {
        this.i = [];
        this.l = []
    };
    g.k.contains = function(a) {
        return g.jb(this.i, a) || g.jb(this.l, a)
    };
    g.k.remove = function(a) {
        var b = this.i;
        var c = (0, g.XIa)(b, a);
        0 <= c ? (g.nb(b, c), b = !0) : b = !1;
        return b || g.ob(this.l, a)
    };
    g.k.Xg = function() {
        for (var a = [], b = this.i.length - 1; 0 <= b; --b) a.push(this.i[b]);
        var c = this.l.length;
        for (b = 0; b < c; ++b) a.push(this.l[b]);
        return a
    };
    g.Ta(z7, g.E);
    g.k = z7.prototype;
    g.k.IU = function() {
        this.Rf = Math.min(3E5, 2 * this.Rf);
        this.u();
        this.l && this.start()
    };
    g.k.start = function() {
        var a = this.Rf + 15E3 * Math.random();
        g.Fq(this.i, a);
        this.l = Date.now() + a
    };
    g.k.stop = function() {
        this.i.stop();
        this.l = 0
    };
    g.k.isActive = function() {
        return this.i.isActive()
    };
    g.k.reset = function() {
        this.i.stop();
        this.Rf = 5E3
    };
    g.Ta(A7, NPa);
    g.k = A7.prototype;
    g.k.subscribe = function(a, b, c) {
        return this.u.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.u.unsubscribe(a, b, c)
    };
    g.k.Wf = function(a) {
        return this.u.Wf(a)
    };
    g.k.X = function(a, b) {
        return this.u.X.apply(this.u, arguments)
    };
    g.k.dispose = function() {
        this.ea || (this.ea = !0, g.ff(this.u), RPa(this), g.ff(this.l), this.l = null, this.Y = function() {
            return ""
        })
    };
    g.k.isDisposed = function() {
        return this.ea
    };
    g.k.connect = function(a, b, c) {
        if (!this.i || 2 != this.i.getState()) {
            this.V = "";
            this.l.stop();
            this.C = a || null;
            this.B = b || 0;
            a = this.va + "/test";
            b = this.va + "/bind";
            var d = new s7(c ? c.firstTestResults : null, c ? c.secondTestResults : null, this.ya),
                e = this.i;
            e && (e.Nf = null);
            d.Nf = this;
            this.i = d;
            B7(this);
            if (this.i) {
                d = g.O("ID_TOKEN");
                var f = this.i.Vj || {};
                d ? f["x-youtube-identity-token"] = d : delete f["x-youtube-identity-token"];
                this.i.Vj = f
            }
            e ? (3 != e.getState() && 0 == HPa(e) || e.getState(), this.i.connect(a, b, this.I, e.l, e.Nr)) : c ? this.i.connect(a,
                b, this.I, c.sessionId, c.arrayId) : this.i.connect(a, b, this.I)
        }
    };
    g.k.sendMessage = function(a, b) {
        a = {
            _sc: a
        };
        b && g.Yb(a, b);
        this.l.isActive() || 2 == (this.i ? this.i.getState() : 0) ? this.J.push(a) : C7(this) && (B7(this), GPa(this.i, a))
    };
    g.k.OH = function() {
        this.l.reset();
        this.C = null;
        this.B = 0;
        if (this.J.length) {
            var a = this.J;
            this.J = [];
            for (var b = 0, c = a.length; b < c; ++b) GPa(this.i, a[b])
        }
        this.X("handlerOpened")
    };
    g.k.MH = function(a) {
        var b = 2 == a && 401 == this.i.Wj;
        4 == a || b || this.l.start();
        this.X("handlerError", a, b)
    };
    g.k.GB = function(a) {
        if (!this.l.isActive()) this.X("handlerClosed");
        else if (a)
            for (var b = 0, c = a.length; b < c; ++b) {
                var d = a[b].map;
                d && this.J.push(d)
            }
    };
    g.k.xI = function() {
        var a = {
            v: 2
        };
        this.V && (a.gsessionid = this.V);
        0 != this.B && (a.ui = "" + this.B);
        0 != this.L && (a.ui = "" + this.L);
        this.C && g.Yb(a, this.C);
        return a
    };
    g.k.NH = function(a) {
        "S" == a[0] ? this.V = a[1] : "gracefulReconnect" == a[0] ? (this.l.start(), EPa(this.i)) : this.X("handlerMessage", new PPa(a[0], a[1]))
    };
    g.k.xz = function(a) {
        (this.I.loungeIdToken = a) || this.l.stop();
        if (this.Aa && this.i) {
            var b = this.i.Vj || {};
            a ? b["X-YouTube-LoungeId-Token"] = a : delete b["X-YouTube-LoungeId-Token"];
            this.i.Vj = b
        }
    };
    g.k.AV = function() {
        this.l.isActive();
        0 == HPa(this.i) && this.connect(this.C, this.B)
    };
    D7.prototype.B = function(a, b, c, d) {
        b ? a(d) : a({
            text: c.responseText
        })
    };
    D7.prototype.u = function(a, b) {
        a(Error("Request error: " + b.status))
    };
    D7.prototype.C = function(a) {
        a(Error("request timed out"))
    };
    var YPa = Date.now(),
        G7 = null,
        J7 = Array(50),
        I7 = -1,
        K7 = !1;
    g.Ta(L7, g.Q);
    L7.prototype.Fh = function() {
        return this.screens
    };
    L7.prototype.contains = function(a) {
        return !!N6(this.screens, a)
    };
    L7.prototype.get = function(a) {
        return a ? O6(this.screens, a) : null
    };
    L7.prototype.info = function(a) {
        H7(this.I, a)
    };
    g.v(M7, g.Q);
    g.k = M7.prototype;
    g.k.start = function() {
        !this.i && isNaN(this.Hb) && this.gL()
    };
    g.k.stop = function() {
        this.i && (this.i.abort(), this.i = null);
        isNaN(this.Hb) || (g.Ws(this.Hb), this.Hb = NaN)
    };
    g.k.xa = function() {
        this.stop();
        g.Q.prototype.xa.call(this)
    };
    g.k.gL = function() {
        this.Hb = NaN;
        this.i = g.at(E7(this.u, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: this.J
            },
            timeout: 5E3,
            onSuccess: (0, g.C)(this.FO, this),
            onError: (0, g.C)(this.EO, this),
            onTimeout: (0, g.C)(this.GO, this)
        })
    };
    g.k.FO = function(a, b) {
        this.i = null;
        a = b.screen || {};
        a.dialId = this.B;
        a.name = this.I;
        b = -1;
        this.C && a.shortLivedLoungeToken && a.shortLivedLoungeToken.value && a.shortLivedLoungeToken.refreshIntervalMs && (a.screenIdType = "shortLived", a.loungeToken = a.shortLivedLoungeToken.value, b = a.shortLivedLoungeToken.refreshIntervalMs);
        this.X("pairingComplete", new I6(a), b)
    };
    g.k.EO = function(a) {
        this.i = null;
        a.status && 404 == a.status ? this.l >= rRa.length ? this.X("pairingFailed", Error("DIAL polling timed out")) : (a = rRa[this.l], this.Hb = g.Us((0, g.C)(this.gL, this), a), this.l++) : this.X("pairingFailed", Error("Server error " + a.status))
    };
    g.k.GO = function() {
        this.i = null;
        this.X("pairingFailed", Error("Server not responding"))
    };
    var rRa = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
    g.Ta(O7, L7);
    g.k = O7.prototype;
    g.k.start = function() {
        N7(this) && this.X("screenChange");
        !g.gz("yt-remote-lounge-token-expiration") && bQa(this);
        g.Ws(this.i);
        this.i = g.Us((0, g.C)(this.start, this), 1E4)
    };
    g.k.add = function(a, b) {
        N7(this);
        ZPa(this, a);
        P7(this, !1);
        this.X("screenChange");
        b(a);
        a.token || bQa(this)
    };
    g.k.remove = function(a, b) {
        var c = N7(this);
        aQa(this, a) && (P7(this, !1), c = !0);
        b(a);
        c && this.X("screenChange")
    };
    g.k.Rz = function(a, b, c, d) {
        var e = N7(this),
            f = this.get(a.id);
        f ? (f.name != b && (f.name = b, P7(this, !1), e = !0), c(a)) : d(Error("no such local screen."));
        e && this.X("screenChange")
    };
    g.k.xa = function() {
        g.Ws(this.i);
        O7.Vd.xa.call(this)
    };
    g.k.xQ = function(a) {
        N7(this);
        var b = this.screens.length;
        a = a && a.screens || [];
        for (var c = 0, d = a.length; c < d; ++c) {
            var e = a[c],
                f = this.get(e.screenId);
            f && (f.token = e.loungeToken, --b)
        }
        P7(this, !b);
        b && H7(this.I, "Missed " + b + " lounge tokens.")
    };
    g.k.wQ = function(a) {
        H7(this.I, "Requesting lounge tokens failed: " + a)
    };
    g.v(R7, g.Q);
    g.k = R7.prototype;
    g.k.start = function() {
        var a = parseInt(g.gz("yt-remote-fast-check-period") || "0", 10);
        (this.B = g.Sa() - 144E5 < a ? 0 : a) ? U7(this): (this.B = g.Sa() + 3E5, g.fz("yt-remote-fast-check-period", this.B), this.pE())
    };
    g.k.isEmpty = function() {
        return g.Rb(this.i)
    };
    g.k.update = function() {
        Q7("Updating availability on schedule.");
        var a = this.I(),
            b = g.Fb(this.i, function(c, d) {
                return c && !!O6(a, d)
            }, this);
        T7(this, b)
    };
    g.k.xa = function() {
        g.Ws(this.u);
        this.u = NaN;
        this.l && (this.l.abort(), this.l = null);
        g.Q.prototype.xa.call(this)
    };
    g.k.pE = function() {
        g.Ws(this.u);
        this.u = NaN;
        this.l && this.l.abort();
        var a = dQa(this);
        if (E6(a)) {
            var b = E7(this.C, "/pairing/get_screen_availability");
            this.l = F7(this.C, b, {
                lounge_token: g.Mb(a).join(",")
            }, (0, g.C)(this.oU, this, a), (0, g.C)(this.nU, this))
        } else T7(this, {}), U7(this)
    };
    g.k.oU = function(a, b) {
        this.l = null;
        var c = g.Mb(dQa(this));
        if (g.Ab(c, g.Mb(a))) {
            b = b.screens || [];
            c = {};
            for (var d = 0, e = b.length; d < e; ++d) c[a[b[d].loungeToken]] = "online" == b[d].status;
            T7(this, c);
            U7(this)
        } else this.Wd("Changing Screen set during request."), this.pE()
    };
    g.k.nU = function(a) {
        this.Wd("Screen availability failed: " + a);
        this.l = null;
        U7(this)
    };
    g.k.Wd = function(a) {
        H7("OnlineScreenService", a)
    };
    g.Ta(V7, L7);
    g.k = V7.prototype;
    g.k.start = function() {
        this.l.start();
        this.i.start();
        this.screens.length && (this.X("screenChange"), this.i.isEmpty() || this.X("onlineScreenChange"))
    };
    g.k.add = function(a, b, c) {
        this.l.add(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.l.remove(a, b, c);
        this.i.update()
    };
    g.k.Rz = function(a, b, c, d) {
        this.l.contains(a) ? this.l.Rz(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name, H7(this.I, a), d(Error(a)))
    };
    g.k.Fh = function(a) {
        return a ? this.screens : g.qb(this.screens, g.Ro(this.u, function(b) {
            return !this.contains(b)
        }, this))
    };
    g.k.nG = function() {
        return g.Ro(this.Fh(!0), function(a) {
            return !!this.i.i[a.id]
        }, this)
    };
    g.k.oG = function(a, b, c, d, e, f) {
        var h = this;
        this.info("getDialScreenByPairingCode " + a + " / " + b);
        var l = new M7(this.B, a, b, c, d);
        l.subscribe("pairingComplete", function(m, n) {
            g.ff(l);
            e(W7(h, m), n)
        });
        l.subscribe("pairingFailed", function(m) {
            g.ff(l);
            f(m)
        });
        l.start();
        return (0, g.C)(l.stop, l)
    };
    g.k.HO = function(a, b, c, d) {
        g.at(E7(this.B, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: a
            },
            timeout: 5E3,
            onSuccess: (0, g.C)(function(e, f) {
                e = new I6(f.screen || {});
                if (!e.name || hQa(this, e.name)) {
                    a: {
                        f = e.name;
                        for (var h = 2, l = b(f, h); hQa(this, l);) {
                            h++;
                            if (20 < h) break a;
                            l = b(f, h)
                        }
                        f = l
                    }
                    e.name = f
                }
                c(W7(this, e))
            }, this),
            onError: (0, g.C)(function(e) {
                d(Error("pairing request failed: " + e.status))
            }, this),
            onTimeout: (0, g.C)(function() {
                d(Error("pairing request timed out."))
            }, this)
        })
    };
    g.k.xa = function() {
        g.ff(this.l);
        g.ff(this.i);
        V7.Vd.xa.call(this)
    };
    g.k.GQ = function() {
        jQa(this);
        this.X("screenChange");
        this.i.update()
    };
    V7.prototype.dispose = V7.prototype.dispose;
    g.Ta(Y7, g.Q);
    g.k = Y7.prototype;
    g.k.getScreen = function() {
        return this.B
    };
    g.k.qg = function(a) {
        this.isDisposed() || (a && $7(this, "" + a), this.B = null, this.X("sessionScreen", null))
    };
    g.k.info = function(a) {
        H7(this.Aa, a)
    };
    g.k.pG = function() {
        return null
    };
    g.k.CE = function(a) {
        var b = this.i;
        a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, []), b.displayStatus.showStop = !0) : b.displayStatus = null;
        chrome.cast.setReceiverDisplayStatus(b, (0, g.C)(function() {
            this.info("Updated receiver status for " + b.friendlyName + ": " + a)
        }, this), (0, g.C)(function() {
            $7(this, "Failed to update receiver status for: " + b.friendlyName)
        }, this))
    };
    g.k.xa = function() {
        this.CE("");
        Y7.Vd.xa.call(this)
    };
    g.v(a8, Y7);
    g.k = a8.prototype;
    g.k.BE = function(a) {
        if (this.l) {
            if (this.l == a) return;
            $7(this, "Overriding cast session with new session object");
            sQa(this);
            this.va = !1;
            this.V = "unknown";
            this.l.removeUpdateListener(this.Y);
            this.l.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.ya)
        }
        this.l = a;
        this.l.addUpdateListener(this.Y);
        this.l.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.ya);
        oQa(this, "getMdxSessionStatus")
    };
    g.k.Or = function(a) {
        this.info("launchWithParams no-op for Cast: " + g.Oh(a))
    };
    g.k.stop = function() {
        this.l ? this.l.stop((0, g.C)(function() {
            this.qg()
        }, this), (0, g.C)(function() {
            this.qg(Error("Failed to stop receiver app."))
        }, this)) : this.qg(Error("Stopping cast device without session."))
    };
    g.k.CE = function() {};
    g.k.xa = function() {
        this.info("disposeInternal");
        sQa(this);
        this.l && (this.l.removeUpdateListener(this.Y), this.l.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.ya));
        this.l = null;
        Y7.prototype.xa.call(this)
    };
    g.k.bV = function(a, b) {
        if (!this.isDisposed())
            if (b)
                if (b = F6(b), g.Na(b)) switch (a = "" + b.type, b = b.data || {}, this.info("onYoutubeMessage_: " + a + " " + g.Oh(b)), a) {
                    case "mdxSessionStatus":
                        mQa(this, b);
                        break;
                    case "loungeToken":
                        pQa(this, b);
                        break;
                    default:
                        $7(this, "Unknown youtube message: " + a)
                } else $7(this, "Unable to parse message.");
                else $7(this, "No data in message.")
    };
    g.k.MI = function(a, b, c, d) {
        g.Ws(this.L);
        this.L = 0;
        gQa(this.u, this.i.label, a, this.i.friendlyName, (0, g.C)(function(e) {
            e ? b(e) : 0 <= d ? ($7(this, "Screen " + a + " appears to be offline. " + d + " retries left."), this.L = g.Us((0, g.C)(this.MI, this, a, b, c, d - 1), 300)) : c(Error("Unable to fetch screen."))
        }, this), c)
    };
    g.k.pG = function() {
        return this.l
    };
    g.k.IO = function(a) {
        this.isDisposed() || a || ($7(this, "Cast session died."), this.qg())
    };
    g.v(d8, Y7);
    g.k = d8.prototype;
    g.k.BE = function(a) {
        this.l = a;
        this.l.addUpdateListener(this.Da)
    };
    g.k.Or = function(a) {
        this.Ia = a;
        this.ea()
    };
    g.k.stop = function() {
        zQa(this);
        this.l ? this.l.stop((0, g.C)(this.qg, this, null), (0, g.C)(this.qg, this, "Failed to stop DIAL device.")) : this.qg()
    };
    g.k.xa = function() {
        zQa(this);
        this.l && this.l.removeUpdateListener(this.Da);
        this.l = null;
        Y7.prototype.xa.call(this)
    };
    g.k.JO = function(a) {
        this.isDisposed() || a || ($7(this, "DIAL session died."), this.C(), this.C = g.Ia, this.qg())
    };
    g.v(h8, Y7);
    h8.prototype.stop = function() {
        this.qg()
    };
    h8.prototype.BE = function() {};
    h8.prototype.Or = function() {
        g.Ws(this.l);
        this.l = NaN;
        var a = O6(this.u.Fh(), this.i.label);
        a ? Z7(this, a) : this.qg(Error("No such screen"))
    };
    h8.prototype.xa = function() {
        g.Ws(this.l);
        this.l = NaN;
        Y7.prototype.xa.call(this)
    };
    g.v(i8, g.Q);
    g.k = i8.prototype;
    g.k.init = function(a, b) {
        chrome.cast.timeout.requestSession = 3E4;
        var c = new chrome.cast.SessionRequest(this.J);
        this.L || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
        var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
        a = a || this.V ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
        var e = (0, g.C)(this.XT, this);
        c = new chrome.cast.ApiConfig(c, (0, g.C)(this.TK, this), e, d, a);
        c.customDialLaunchCallback = (0, g.C)(this.HS, this);
        chrome.cast.initialize(c, (0, g.C)(function() {
            this.isDisposed() ||
                (chrome.cast.addReceiverActionListener(this.C), VPa(), this.l.subscribe("onlineScreenChange", (0, g.C)(this.qG, this)), this.u = BQa(this), chrome.cast.setCustomReceivers(this.u, g.Ia, (0, g.C)(function(f) {
                    this.Wd("Failed to set initial custom receivers: " + g.Oh(f))
                }, this)), this.X("yt-remote-cast2-availability-change", k8(this)), b(!0))
        }, this), (0, g.C)(function(f) {
            this.Wd("Failed to initialize API: " + g.Oh(f));
            b(!1)
        }, this))
    };
    g.k.HV = function(a, b) {
        j8("Setting connected screen ID: " + a + " -> " + b);
        if (this.i) {
            var c = this.i.getScreen();
            if (!a || c && c.id != a) j8("Unsetting old screen status: " + this.i.i.friendlyName), l8(this, null)
        }
        if (a && b) {
            if (!this.i) {
                c = O6(this.l.Fh(), a);
                if (!c) {
                    j8("setConnectedScreenStatus: Unknown screen.");
                    return
                }
                if ("shortLived" == c.idType) {
                    j8("setConnectedScreenStatus: Screen with id type to be short lived.");
                    return
                }
                a = AQa(this, c);
                a || (j8("setConnectedScreenStatus: Connected receiver not custom..."), a = new chrome.cast.Receiver(c.uuid ?
                    c.uuid : c.id, c.name), a.receiverType = chrome.cast.ReceiverType.CUSTOM, this.u.push(a), chrome.cast.setCustomReceivers(this.u, g.Ia, (0, g.C)(function(d) {
                    this.Wd("Failed to set initial custom receivers: " + g.Oh(d))
                }, this)));
                j8("setConnectedScreenStatus: new active receiver: " + a.friendlyName);
                l8(this, new h8(this.l, a), !0)
            }
            this.i.CE(b)
        } else j8("setConnectedScreenStatus: no screen.")
    };
    g.k.IV = function(a) {
        this.isDisposed() ? this.Wd("Setting connection data on disposed cast v2") : this.i ? this.i.Or(a) : this.Wd("Setting connection data without a session")
    };
    g.k.LO = function() {
        this.isDisposed() ? this.Wd("Stopping session on disposed cast v2") : this.i ? (this.i.stop(), l8(this, null)) : j8("Stopping non-existing session")
    };
    g.k.requestSession = function() {
        chrome.cast.requestSession((0, g.C)(this.TK, this), (0, g.C)(this.rU, this))
    };
    g.k.xa = function() {
        this.l.unsubscribe("onlineScreenChange", (0, g.C)(this.qG, this));
        window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.C);
        var a = SPa,
            b = g.Ha("yt.mdx.remote.debug.handlers_");
        g.ob(b || [], a);
        g.ff(this.i);
        g.Q.prototype.xa.call(this)
    };
    g.k.Wd = function(a) {
        H7("Controller", a)
    };
    g.k.VK = function(a, b) {
        this.i == a && (b || l8(this, null), this.X("yt-remote-cast2-session-change", b))
    };
    g.k.TT = function(a, b) {
        if (!this.isDisposed())
            if (a) switch (a.friendlyName = chrome.cast.unescape(a.friendlyName), j8("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b), b) {
                case chrome.cast.ReceiverAction.CAST:
                    if (this.i)
                        if (this.i.i.label != a.label) j8("onReceiverAction_: Stopping active receiver: " + this.i.i.friendlyName), this.i.stop();
                        else {
                            j8("onReceiverAction_: Casting to active receiver.");
                            this.i.getScreen() && this.X("yt-remote-cast2-session-change", this.i.getScreen());
                            break
                        }
                    switch (a.receiverType) {
                        case chrome.cast.ReceiverType.CUSTOM:
                            l8(this,
                                new h8(this.l, a));
                            break;
                        case chrome.cast.ReceiverType.DIAL:
                            l8(this, new d8(this.l, a, this.B, this.config_));
                            break;
                        case chrome.cast.ReceiverType.CAST:
                            l8(this, new a8(this.l, a, this.config_));
                            break;
                        default:
                            this.Wd("Unknown receiver type: " + a.receiverType)
                    }
                    break;
                case chrome.cast.ReceiverAction.STOP:
                    this.i && this.i.i.label == a.label ? this.i.stop() : this.Wd("Stopping receiver w/o session: " + a.friendlyName)
            } else this.Wd("onReceiverAction_ called without receiver.")
    };
    g.k.HS = function(a) {
        if (this.isDisposed()) return Promise.reject(Error("disposed"));
        var b = a.receiver;
        b.receiverType != chrome.cast.ReceiverType.DIAL && (this.Wd("Not DIAL receiver: " + b.friendlyName), b.receiverType = chrome.cast.ReceiverType.DIAL);
        var c = this.i ? this.i.i : null;
        if (!c || c.label != b.label) return this.Wd("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName), Promise.reject(Error("illegal DIAL launch"));
        if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
            if (this.i.getScreen()) return j8("Reselecting dial screen."),
                this.X("yt-remote-cast2-session-change", this.i.getScreen()), Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
            this.Wd('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName);
            l8(this, new d8(this.l, b, this.B, this.config_))
        }
        b = this.i;
        b.L = a;
        b.L.appState == chrome.cast.DialAppState.RUNNING ? (a = b.L.extraData || {}, c = a.screenId || null, e8(b) && a.loungeToken ? a.loungeTokenRefreshIntervalMs ? a = wQa(b, {
            name: b.i.friendlyName,
            screenId: a.screenId,
            loungeToken: a.loungeToken,
            dialId: b.L.receiver.label,
            screenIdType: "shortLived"
        }, a.loungeTokenRefreshIntervalMs) : (g.ds(Error("No loungeTokenRefreshIntervalMs presents in additionalData: " + JSON.stringify(a) + ".")), a = xQa(b, c)) : a = xQa(b, c)) : a = g8(b);
        return a
    };
    g.k.TK = function(a) {
        if (!this.isDisposed()) {
            j8("New cast session ID: " + a.sessionId);
            var b = a.receiver;
            if (b.receiverType != chrome.cast.ReceiverType.CUSTOM) {
                if (!this.i)
                    if (b.receiverType == chrome.cast.ReceiverType.CAST) j8("Got resumed cast session before resumed mdx connection."), b.friendlyName = chrome.cast.unescape(b.friendlyName), l8(this, new a8(this.l, b, this.config_), !0);
                    else {
                        this.Wd("Got non-cast session without previous mdx receiver event, or mdx resume.");
                        return
                    }
                var c = this.i.i,
                    d = O6(this.l.Fh(), c.label);
                d && J6(d, b.label) && c.receiverType != chrome.cast.ReceiverType.CAST && b.receiverType == chrome.cast.ReceiverType.CAST && (j8("onSessionEstablished_: manual to cast session change " + b.friendlyName), g.ff(this.i), this.i = new a8(this.l, b, this.config_), this.i.subscribe("sessionScreen", (0, g.C)(this.VK, this, this.i)), this.i.Or(null));
                this.i.BE(a)
            }
        }
    };
    g.k.KO = function() {
        return this.i ? this.i.pG() : null
    };
    g.k.rU = function(a) {
        this.isDisposed() || (this.Wd("Failed to estabilish a session: " + g.Oh(a)), a.code != chrome.cast.ErrorCode.CANCEL && l8(this, null))
    };
    g.k.XT = function(a) {
        j8("Receiver availability updated: " + a);
        if (!this.isDisposed()) {
            var b = k8(this);
            this.I = a == chrome.cast.ReceiverAvailability.AVAILABLE;
            k8(this) != b && this.X("yt-remote-cast2-availability-change", k8(this))
        }
    };
    g.k.qG = function() {
        this.isDisposed() || (this.u = BQa(this), j8("Updating custom receivers: " + g.Oh(this.u)), chrome.cast.setCustomReceivers(this.u, g.Ia, (0, g.C)(function() {
            this.Wd("Failed to set custom receivers.")
        }, this)), this.X("yt-remote-cast2-availability-change", k8(this)))
    };
    i8.prototype.setLaunchParams = i8.prototype.IV;
    i8.prototype.setConnectedScreenStatus = i8.prototype.HV;
    i8.prototype.stopSession = i8.prototype.LO;
    i8.prototype.getCastSession = i8.prototype.KO;
    i8.prototype.requestSession = i8.prototype.requestSession;
    i8.prototype.init = i8.prototype.init;
    i8.prototype.dispose = i8.prototype.dispose;
    var r8 = [];
    g.k = w8.prototype;
    g.k.reset = function(a) {
        this.listId = "";
        this.index = -1;
        this.videoId = "";
        x8(this);
        this.volume = -1;
        this.muted = !1;
        a && (this.index = a.index, this.listId = a.listId, this.videoId = a.videoId, this.playerState = a.playerState, this.volume = a.volume, this.muted = a.muted, this.audioTrackId = a.audioTrackId, this.trackData = a.trackData, this.vk = a.hasPrevious, this.hasNext = a.hasNext, this.J = a.playerTime, this.I = a.playerTimeAt, this.B = a.seekableStart, this.i = a.seekableEnd, this.C = a.duration, this.L = a.loadedTime, this.u = a.liveIngestionTime, this.l = !isNaN(this.u))
    };
    g.k.yc = function() {
        return 1 == this.playerState
    };
    g.k.isAdPlaying = function() {
        return 1081 == this.playerState
    };
    g.k.Bj = function(a) {
        this.C = isNaN(a) ? 0 : a
    };
    g.k.getDuration = function() {
        return this.l ? this.C + y8(this) : this.C
    };
    g.k.clone = function() {
        return new w8(C8(this))
    };
    g.v(E8, g.Q);
    g.k = E8.prototype;
    g.k.getState = function() {
        return this.Oa
    };
    g.k.play = function() {
        G8(this) ? (this.i ? this.i.play(null, g.Ia, L8(this, "play")) : K8(this, "play"), J8(this, 1, A8(F8(this))), this.X("remotePlayerChange")) : H8(this, this.play)
    };
    g.k.pause = function() {
        G8(this) ? (this.i ? this.i.pause(null, g.Ia, L8(this, "pause")) : K8(this, "pause"), J8(this, 2, A8(F8(this))), this.X("remotePlayerChange")) : H8(this, this.pause)
    };
    g.k.seekTo = function(a) {
        if (G8(this)) {
            if (this.i) {
                var b = F8(this),
                    c = new chrome.cast.media.SeekRequest;
                c.currentTime = a;
                b.yc() || 3 == b.playerState ? c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
                this.i.seek(c, g.Ia, L8(this, "seekTo", {
                    newTime: a
                }))
            } else K8(this, "seekTo", {
                newTime: a
            });
            J8(this, 3, a);
            this.X("remotePlayerChange")
        } else H8(this, g.Qa(this.seekTo, a))
    };
    g.k.stop = function() {
        if (G8(this)) {
            this.i ? this.i.stop(null, g.Ia, L8(this, "stopVideo")) : K8(this, "stopVideo");
            var a = F8(this);
            a.index = -1;
            a.videoId = "";
            x8(a);
            I8(this, a);
            this.X("remotePlayerChange")
        } else H8(this, this.stop)
    };
    g.k.setVolume = function(a, b) {
        if (G8(this)) {
            var c = F8(this);
            if (this.l) {
                if (c.volume != a) {
                    var d = Math.round(a) / 100;
                    this.l.setReceiverVolumeLevel(d, (0, g.C)(function() {
                        H7("CP", "set receiver volume: " + d)
                    }, this), (0, g.C)(function() {
                        this.Wd("failed to set receiver volume.")
                    }, this))
                }
                c.muted != b && this.l.setReceiverMuted(b, (0, g.C)(function() {
                    H7("CP", "set receiver muted: " + b)
                }, this), (0, g.C)(function() {
                    this.Wd("failed to set receiver muted.")
                }, this))
            } else {
                var e = {
                    volume: a,
                    muted: b
                }; - 1 != c.volume && (e.delta = a - c.volume);
                K8(this, "setVolume", e)
            }
            c.muted = b;
            c.volume = a;
            I8(this, c)
        } else H8(this, g.Qa(this.setVolume, a, b))
    };
    g.k.rG = function(a, b) {
        if (G8(this)) {
            var c = F8(this);
            a = {
                videoId: a
            };
            b && (c.trackData = {
                trackName: b.name,
                languageCode: b.languageCode,
                sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "",
                languageName: b.languageName,
                kind: b.kind
            }, a.style = g.Oh(b.style), g.Yb(a, c.trackData));
            K8(this, "setSubtitlesTrack", a);
            I8(this, c)
        } else H8(this, g.Qa(this.rG, a, b))
    };
    g.k.setAudioTrack = function(a, b) {
        G8(this) ? (b = b.getLanguageInfo().getId(), K8(this, "setAudioTrack", {
            videoId: a,
            audioTrackId: b
        }), a = F8(this), a.audioTrackId = b, I8(this, a)) : H8(this, g.Qa(this.setAudioTrack, a, b))
    };
    g.k.playVideo = function(a, b, c, d, e, f, h) {
        d = void 0 === d ? null : d;
        e = void 0 === e ? null : e;
        f = void 0 === f ? null : f;
        h = void 0 === h ? null : h;
        var l = F8(this),
            m = {
                videoId: a
            };
        void 0 !== c && (m.currentIndex = c);
        B8(l, a, c || 0);
        void 0 !== b && (z8(l, b), m.currentTime = b);
        d && (m.listId = d);
        e && (m.playerParams = e);
        f && (m.clickTrackingParams = f);
        h && (m.locationInfo = g.Oh(h));
        K8(this, "setPlaylist", m);
        d || I8(this, l)
    };
    g.k.bz = function(a, b) {
        if (G8(this)) {
            if (a && b) {
                var c = F8(this);
                B8(c, a, b);
                I8(this, c)
            }
            K8(this, "previous")
        } else H8(this, g.Qa(this.bz, a, b))
    };
    g.k.nextVideo = function(a, b) {
        if (G8(this)) {
            if (a && b) {
                var c = F8(this);
                B8(c, a, b);
                I8(this, c)
            }
            K8(this, "next")
        } else H8(this, g.Qa(this.nextVideo, a, b))
    };
    g.k.fI = function() {
        G8(this) ? K8(this, "dismissAutoplay") : H8(this, this.fI)
    };
    g.k.dispose = function() {
        if (3 != this.Oa) {
            var a = this.Oa;
            this.Oa = 3;
            this.X("proxyStateChange", a, this.Oa)
        }
        g.Q.prototype.dispose.call(this)
    };
    g.k.xa = function() {
        NQa(this);
        this.u = null;
        this.B.clear();
        D8(this, null);
        g.Q.prototype.xa.call(this)
    };
    g.k.EE = function(a) {
        if ((a != this.Oa || 2 == a) && 3 != this.Oa && 0 != a) {
            var b = this.Oa;
            this.Oa = a;
            this.X("proxyStateChange", b, a);
            if (1 == a)
                for (; !this.B.isEmpty();) b = a = this.B, 0 === b.i.length && (b.i = b.l, b.i.reverse(), b.l = []), a.i.pop().apply(this);
            else 3 == a && this.dispose()
        }
    };
    g.k.QT = function(a, b) {
        this.X(a, b)
    };
    g.k.rS = function(a) {
        if (!a) this.hv(null), D8(this, null);
        else if (this.l.receiver.volume) {
            a = this.l.receiver.volume;
            var b = F8(this),
                c = Math.round(100 * a.level || 0);
            if (b.volume != c || b.muted != a.muted) H7("CP", "Cast volume update: " + a.level + (a.muted ? " muted" : "")), b.volume = c, b.muted = !!a.muted, I8(this, b)
        }
    };
    g.k.hv = function(a) {
        H7("CP", "Cast media: " + !!a);
        this.i && this.i.removeUpdateListener(this.J);
        if (this.i = a) this.i.addUpdateListener(this.J), OQa(this), this.X("remotePlayerChange")
    };
    g.k.qS = function(a) {
        a ? (OQa(this), this.X("remotePlayerChange")) : this.hv(null)
    };
    g.k.XE = function() {
        K8(this, "sendDebugCommand", {
            debugCommand: "stats4nerds "
        })
    };
    g.k.yS = function() {
        var a = KQa();
        a && D8(this, a)
    };
    g.k.Wd = function(a) {
        H7("CP", a)
    };
    g.v(M8, g.Q);
    g.k = M8.prototype;
    g.k.connect = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        if (b) {
            var d = b.listId,
                e = b.videoId,
                f = b.videoIds,
                h = b.playerParams,
                l = b.clickTrackingParams,
                m = b.index,
                n = {
                    videoId: e
                },
                p = b.currentTime,
                r = b.locationInfo;
            b = b.loopMode;
            void 0 !== p && (n.currentTime = 5 >= p ? 0 : p);
            h && (n.playerParams = h);
            r && (n.locationInfo = r);
            l && (n.clickTrackingParams = l);
            d && (n.listId = d);
            f && 0 < f.length && (n.videoIds = f.join(","));
            void 0 !== m && (n.currentIndex = m);
            c && (n.loopMode = b || "LOOP_MODE_OFF");
            d && (this.kc.listId = d);
            this.kc.videoId = e;
            this.kc.index = m || 0;
            this.kc.state =
                3;
            z8(this.kc, p);
            this.B = "UNSUPPORTED";
            c = c ? "setInitialState" : "setPlaylist";
            N8("Connecting with " + c + " and params: " + g.Oh(n));
            this.i.connect({
                method: c,
                params: g.Oh(n)
            }, a, XOa())
        } else N8("Connecting without params"), this.i.connect({}, a, XOa());
        QQa(this)
    };
    g.k.xz = function(a) {
        this.i.xz(a)
    };
    g.k.dispose = function() {
        this.isDisposed() || (this.X("beforeDispose"), O8(this, 3));
        g.Q.prototype.dispose.call(this)
    };
    g.k.xa = function() {
        P8(this);
        R8(this);
        Q8(this);
        g.Ws(this.J);
        this.J = NaN;
        g.Ws(this.L);
        this.L = NaN;
        this.u = null;
        g.au(this.V);
        this.V.length = 0;
        this.i.dispose();
        g.Q.prototype.xa.call(this);
        this.B = this.I = this.l = this.kc = this.i = null
    };
    g.k.sQ = function() {
        this.qr(2)
    };
    g.k.vS = function() {
        N8("Channel opened");
        this.va && (this.va = !1, Q8(this), this.Y = g.Us((0, g.C)(function() {
            N8("Timing out waiting for a screen.");
            this.qr(1)
        }, this), 15E3));
        aPa(QPa(this.i), this.Da)
    };
    g.k.sS = function() {
        N8("Channel closed");
        isNaN(this.C) ? T6(!0) : T6();
        this.dispose()
    };
    g.k.tS = function(a, b) {
        T6();
        isNaN(this.Au()) ? (b && "shortLived" == this.ya && this.X("browserChannelAuthError", a), N8("Channel error: " + a + " without reconnection"), this.dispose()) : (this.va = !0, N8("Channel error: " + a + " with reconnection in " + this.Au() + " ms"), O8(this, 2))
    };
    g.k.qJ = function(a) {
        if (!this.l || 0 === this.l.length) return !1;
        for (var b = g.q(this.l), c = b.next(); !c.done; c = b.next())
            if (!c.value.capabilities.has(a)) return !1;
        return !0
    };
    g.k.uS = function(a) {
        a.params ? N8("Received: action=" + a.action + ", params=" + g.Oh(a.params)) : N8("Received: action=" + a.action + " {}");
        switch (a.action) {
            case "loungeStatus":
                a = F6(a.params.devices);
                this.l = g.Qe(a, function(c) {
                    return new H6(c)
                });
                a = !!g.fb(this.l, function(c) {
                    return "LOUNGE_SCREEN" == c.type
                });
                TQa(this, a);
                a = this.qJ("mlm");
                this.X("multiStateLoopEnabled", a);
                break;
            case "loungeScreenDisconnected":
                g.pb(this.l, function(c) {
                    return "LOUNGE_SCREEN" == c.type
                });
                TQa(this, !1);
                break;
            case "remoteConnected":
                var b = new H6(F6(a.params.device));
                g.fb(this.l, function(c) {
                    return b ? c.id == b.id : !1
                }) || KOa(this.l, b);
                break;
            case "remoteDisconnected":
                b = new H6(F6(a.params.device));
                g.pb(this.l, function(c) {
                    return b ? c.id == b.id : !1
                });
                break;
            case "gracefulDisconnect":
                break;
            case "playlistModified":
                VQa(this, a);
                break;
            case "nowPlaying":
                XQa(this, a);
                break;
            case "onStateChange":
                WQa(this, a);
                break;
            case "onAdStateChange":
                YQa(this, a);
                break;
            case "onVolumeChanged":
                ZQa(this, a);
                break;
            case "onSubtitlesTrackChanged":
                UQa(this, a);
                break;
            case "nowAutoplaying":
                $Qa(this, a);
                break;
            case "autoplayDismissed":
                this.X("autoplayDismissed");
                break;
            case "autoplayUpNext":
                this.I = a.params.videoId || null;
                this.X("autoplayUpNext", this.I);
                break;
            case "onAutoplayModeChanged":
                this.B =
                    a.params.autoplayMode;
                this.X("autoplayModeChange", this.B);
                "DISABLED" == this.B && this.X("autoplayDismissed");
                break;
            case "onHasPreviousNextChanged":
                aRa(this, a);
                break;
            case "requestAssistedSignIn":
                this.X("assistedSignInRequested", a.params.authCode);
                break;
            case "onLoopModeChanged":
                this.X("loopModeChange", a.params.loopMode);
                break;
            default:
                N8("Unrecognized action: " + a.action)
        }
    };
    g.k.uV = function() {
        if (this.u) {
            var a = this.u;
            this.u = null;
            this.kc.videoId != a && S8(this, "getNowPlaying")
        }
    };
    g.k.nQ = function() {
        var a = 3;
        this.isDisposed() || (a = 0, isNaN(this.Au()) ? C7(this.i) && isNaN(this.C) && (a = 1) : a = 2);
        return a
    };
    g.k.qr = function(a) {
        N8("Disconnecting with " + a);
        P8(this);
        this.X("beforeDisconnect", a);
        1 == a && T6();
        RPa(this.i, a);
        this.dispose()
    };
    g.k.lQ = function() {
        var a = this.kc;
        this.u && (a = this.kc.clone(), B8(a, this.u, a.index));
        return C8(a)
    };
    g.k.JV = function(a) {
        var b = new w8(a);
        b.videoId && b.videoId != this.kc.videoId && (this.u = b.videoId, g.Ws(this.J), this.J = g.Us((0, g.C)(this.uV, this), 5E3));
        var c = [];
        this.kc.listId == b.listId && this.kc.videoId == b.videoId && this.kc.index == b.index || c.push("remoteQueueChange");
        this.kc.playerState == b.playerState && this.kc.volume == b.volume && this.kc.muted == b.muted && A8(this.kc) == A8(b) && g.Oh(this.kc.trackData) == g.Oh(b.trackData) || c.push("remotePlayerChange");
        this.kc.reset(a);
        g.Cb(c, function(d) {
            this.X(d)
        }, this)
    };
    g.k.LI = function() {
        var a = this.i.I.id,
            b = g.fb(this.l, function(c) {
                return "REMOTE_CONTROL" == c.type && c.id != a
            });
        return b ? b.id : ""
    };
    g.k.Au = function() {
        var a = this.i;
        return a.l.isActive() ? a.l.l - Date.now() : NaN
    };
    g.k.iQ = function() {
        return this.B || "UNSUPPORTED"
    };
    g.k.jQ = function() {
        return this.I || ""
    };
    g.k.MO = function() {
        if (!isNaN(this.Au())) {
            var a = this.i.l;
            g.Gq(a.i);
            a.start()
        }
    };
    g.k.GV = function(a, b) {
        S8(this, a, b);
        SQa(this)
    };
    g.k.sG = function() {
        var a = g.mt("SID", "") || "",
            b = g.mt("SAPISID", "") || "",
            c = g.mt("__Secure-3PAPISID", "") || "";
        if (!a && !b && !c) return "";
        a = g.$d(g.Ya(a), 2);
        b = g.$d(g.Ya(b), 2);
        c = g.$d(g.Ya(c), 2);
        return g.$d(g.Ya(a + "," + b + "," + c), 2)
    };
    M8.prototype.subscribe = M8.prototype.subscribe;
    M8.prototype.unsubscribeByKey = M8.prototype.Wf;
    M8.prototype.getProxyState = M8.prototype.nQ;
    M8.prototype.disconnect = M8.prototype.qr;
    M8.prototype.getPlayerContextData = M8.prototype.lQ;
    M8.prototype.setPlayerContextData = M8.prototype.JV;
    M8.prototype.getOtherConnectedRemoteId = M8.prototype.LI;
    M8.prototype.getReconnectTimeout = M8.prototype.Au;
    M8.prototype.getAutoplayMode = M8.prototype.iQ;
    M8.prototype.getAutoplayVideoId = M8.prototype.jQ;
    M8.prototype.reconnect = M8.prototype.MO;
    M8.prototype.sendMessage = M8.prototype.GV;
    M8.prototype.getXsrfToken = M8.prototype.sG;
    M8.prototype.isCapabilitySupportedOnConnectedDevices = M8.prototype.qJ;
    g.v(T8, L7);
    g.k = T8.prototype;
    g.k.Fh = function(a) {
        return this.Ke.$_gs(a)
    };
    g.k.contains = function(a) {
        return !!this.Ke.$_c(a)
    };
    g.k.get = function(a) {
        return this.Ke.$_g(a)
    };
    g.k.start = function() {
        this.Ke.$_st()
    };
    g.k.add = function(a, b, c) {
        this.Ke.$_a(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.Ke.$_r(a, b, c)
    };
    g.k.Rz = function(a, b, c, d) {
        this.Ke.$_un(a, b, c, d)
    };
    g.k.xa = function() {
        for (var a = 0, b = this.i.length; a < b; ++a) this.Ke.$_ubk(this.i[a]);
        this.i.length = 0;
        this.Ke = null;
        L7.prototype.xa.call(this)
    };
    g.k.NO = function() {
        this.X("screenChange")
    };
    g.k.wT = function() {
        this.X("onlineScreenChange")
    };
    V7.prototype.$_st = V7.prototype.start;
    V7.prototype.$_gspc = V7.prototype.HO;
    V7.prototype.$_gsppc = V7.prototype.oG;
    V7.prototype.$_c = V7.prototype.contains;
    V7.prototype.$_g = V7.prototype.get;
    V7.prototype.$_a = V7.prototype.add;
    V7.prototype.$_un = V7.prototype.Rz;
    V7.prototype.$_r = V7.prototype.remove;
    V7.prototype.$_gs = V7.prototype.Fh;
    V7.prototype.$_gos = V7.prototype.nG;
    V7.prototype.$_s = V7.prototype.subscribe;
    V7.prototype.$_ubk = V7.prototype.Wf;
    var f9 = null,
        l9 = !1,
        U8 = null,
        V8 = null,
        k9 = null,
        Z8 = [];
    g.v(m9, g.E);
    g.k = m9.prototype;
    g.k.xa = function() {
        g.E.prototype.xa.call(this);
        this.i.stop();
        this.u.stop();
        this.L.stop();
        this.Y();
        var a = this.Pb;
        a.unsubscribe("proxyStateChange", this.RK, this);
        a.unsubscribe("remotePlayerChange", this.wv, this);
        a.unsubscribe("remoteQueueChange", this.Sy, this);
        a.unsubscribe("previousNextChange", this.OK, this);
        a.unsubscribe("nowAutoplaying", this.IK, this);
        a.unsubscribe("autoplayDismissed", this.lK, this);
        this.Pb = this.l = null
    };
    g.k.lj = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        if (2 != this.Pb.Oa)
            if (n9(this)) {
                if (!F8(this.Pb).isAdPlaying() || "control_seek" !== a) switch (a) {
                    case "control_toggle_play_pause":
                        F8(this.Pb).yc() ? this.Pb.pause() : this.Pb.play();
                        break;
                    case "control_play":
                        this.Pb.play();
                        break;
                    case "control_pause":
                        this.Pb.pause();
                        break;
                    case "control_seek":
                        this.J.mG(c[0], c[1]);
                        break;
                    case "control_subtitles_set_track":
                        o9(this, c[0]);
                        break;
                    case "control_set_audio_track":
                        this.setAudioTrack(c[0])
                }
            } else switch (a) {
                case "control_toggle_play_pause":
                case "control_play":
                case "control_pause":
                    c =
                        this.G.getCurrentTime();
                    p9(this, 0 === c ? void 0 : c);
                    break;
                case "control_seek":
                    p9(this, c[0]);
                    break;
                case "control_subtitles_set_track":
                    o9(this, c[0]);
                    break;
                case "control_set_audio_track":
                    this.setAudioTrack(c[0])
            }
    };
    g.k.oS = function(a) {
        this.L.BO(a)
    };
    g.k.oW = function(a) {
        this.lj("control_subtitles_set_track", g.Rb(a) ? null : a)
    };
    g.k.aM = function() {
        var a = this.G.getOption("captions", "track");
        g.Rb(a) || o9(this, a)
    };
    g.k.Rb = function(a) {
        this.l.Rb(a, this.G.getVideoData().lengthSeconds)
    };
    g.k.gT = function() {
        g.Rb(this.B) || lRa(this, this.B);
        this.C = !1
    };
    g.k.RK = function(a, b) {
        this.u.stop();
        2 === b && this.UL()
    };
    g.k.wv = function() {
        if (n9(this)) {
            this.i.stop();
            var a = F8(this.Pb);
            switch (a.playerState) {
                case 1080:
                case 1081:
                case 1084:
                case 1085:
                    this.l.rf = 1;
                    break;
                case 1082:
                case 1083:
                    this.l.rf = 0;
                    break;
                default:
                    this.l.rf = -1
            }
            switch (a.playerState) {
                case 1081:
                case 1:
                    this.Jb(new g.GK(8));
                    this.TL();
                    break;
                case 1085:
                case 3:
                    this.Jb(new g.GK(9));
                    break;
                case 1083:
                case 0:
                    this.Jb(new g.GK(2));
                    this.J.stop();
                    this.Rb(this.G.getVideoData().lengthSeconds);
                    break;
                case 1084:
                    this.Jb(new g.GK(4));
                    break;
                case 2:
                    this.Jb(new g.GK(4));
                    this.Rb(A8(a));
                    break;
                case -1:
                    this.Jb(new g.GK(64));
                    break;
                case -1E3:
                    this.Jb(new g.GK(128, {
                        errorCode: "mdx.remoteerror",
                        errorMessage: "This video is not available for remote playback."
                    }))
            }
            a = F8(this.Pb).trackData;
            var b = this.B;
            (a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.kind == b.kind : 1) || (this.B = a, lRa(this, a));
            a = F8(this.Pb); - 1 === a.volume || Math.round(this.G.getVolume()) === a.volume && this.G.isMuted() === a.muted || this.V.isActive() || this.BM()
        } else kRa(this)
    };
    g.k.OK = function() {
        this.G.X("mdxpreviousnextchange")
    };
    g.k.Sy = function() {
        n9(this) || kRa(this)
    };
    g.k.IK = function(a) {
        isNaN(a) || this.G.X("mdxnowautoplaying", a)
    };
    g.k.lK = function() {
        this.G.X("mdxautoplaycanceled")
    };
    g.k.setAudioTrack = function(a) {
        n9(this) && this.Pb.setAudioTrack(this.G.getVideoData(1).videoId, a)
    };
    g.k.seekTo = function(a, b) {
        -1 === F8(this.Pb).playerState ? p9(this, a) : b && this.Pb.seekTo(a)
    };
    g.k.BM = function() {
        var a = this;
        if (n9(this)) {
            var b = F8(this.Pb);
            this.events.lc(this.ea);
            b.muted ? this.G.mute() : this.G.unMute();
            this.G.setVolume(b.volume);
            this.ea = this.events.N(this.G, "onVolumeChange", function(c) {
                jRa(a, c)
            })
        }
    };
    g.k.TL = function() {
        this.i.stop();
        if (!this.Pb.isDisposed()) {
            var a = F8(this.Pb);
            a.yc() && this.Jb(new g.GK(8));
            this.Rb(A8(a));
            this.i.start()
        }
    };
    g.k.UL = function() {
        this.u.stop();
        this.i.stop();
        var a = this.Pb.u.getReconnectTimeout();
        2 == this.Pb.Oa && !isNaN(a) && this.u.start()
    };
    g.k.Jb = function(a) {
        this.u.stop();
        var b = this.I;
        if (!g.LK(b, a)) {
            var c = g.V(a, 2);
            c !== g.V(this.I, 2) && this.G.eq(c);
            this.I = a;
            nRa(this.l, b, a)
        }
    };
    g.v(q9, g.W);
    q9.prototype.bd = function() {
        this.i.show()
    };
    q9.prototype.Ab = function() {
        this.i.hide()
    };
    q9.prototype.l = function() {
        g.nK("https://support.google.com/youtube/answer/7640706")
    };
    q9.prototype.u = function() {
        G6("mdx-manual-pairing-popup-ok");
        this.Ab()
    };
    g.v(r9, g.W);
    r9.prototype.bd = function() {
        this.i.show()
    };
    r9.prototype.Ab = function() {
        this.i.hide()
    };
    r9.prototype.l = function() {
        G6("mdx-privacy-popup-cancel");
        this.Ab()
    };
    r9.prototype.u = function() {
        G6("mdx-privacy-popup-confirm");
        this.Ab()
    };
    g.v(s9, g.W);
    s9.prototype.l = function(a) {
        mRa(this, a.state)
    };
    g.v(t9, g.vQ);
    t9.prototype.C = function() {
        var a = this.G.getOption("remote", "receivers");
        a && 1 < a.length && !this.G.getOption("remote", "quickCast") ? (this.Pn = g.Db(a, this.i, this), g.wQ(this, g.Qe(a, this.i)), a = this.G.getOption("remote", "currentReceiver"), a = this.i(a), this.options[a] && this.Th(a), this.enable(!0)) : this.enable(!1)
    };
    t9.prototype.i = function(a) {
        return a.key
    };
    t9.prototype.aj = function(a) {
        return "cast-selector-receiver" === a ? "Cast..." : this.Pn[a].name
    };
    t9.prototype.zf = function(a) {
        g.vQ.prototype.zf.call(this, a);
        this.G.setOption("remote", "currentReceiver", this.Pn[a]);
        this.yb.Ab()
    };
    g.v(u9, g.FN);
    g.k = u9.prototype;
    g.k.create = function() {
        var a = this.player.T(),
            b = g.WF(a);
        a = {
            device: "Desktop",
            app: "youtube-desktop",
            loadCastApiSetupScript: g.S(a.experiments, "mdx_load_cast_api_bootstrap_script"),
            enableDialLoungeToken: g.S(a.experiments, "enable_dial_short_lived_lounge_token"),
            enableCastLoungeToken: g.S(a.experiments, "enable_cast_short_lived_lounge_token")
        };
        eRa(b, a);
        this.subscriptions.push(g.Iu("yt-remote-before-disconnect", this.nS, this));
        this.subscriptions.push(g.Iu("yt-remote-connection-change", this.ZT, this));
        this.subscriptions.push(g.Iu("yt-remote-receiver-availability-change",
            this.QK, this));
        this.subscriptions.push(g.Iu("yt-remote-auto-connect", this.VT, this));
        this.subscriptions.push(g.Iu("yt-remote-receiver-resumed", this.UT, this));
        this.subscriptions.push(g.Iu("mdx-privacy-popup-confirm", this.kV, this));
        this.subscriptions.push(g.Iu("mdx-privacy-popup-cancel", this.jV, this));
        this.subscriptions.push(g.Iu("mdx-manual-pairing-popup-ok", this.sR, this));
        this.QK()
    };
    g.k.load = function() {
        this.player.cancelPlayback();
        g.FN.prototype.load.call(this);
        this.Wh = new m9(this, this.player, this.Pb);
        var a = (a = iRa()) ? a.currentTime : 0;
        var b = j9() ? new E8(d9(), void 0) : null;
        0 == a && b && (a = A8(F8(b)));
        0 !== a && this.Rb(a);
        nRa(this, this.ld, this.ld);
        this.player.Pk(6)
    };
    g.k.unload = function() {
        this.player.X("mdxautoplaycanceled");
        this.Lm = this.qj;
        g.gf(this.Wh, this.Pb);
        this.Pb = this.Wh = null;
        g.FN.prototype.unload.call(this);
        this.player.Pk(5);
        v9(this)
    };
    g.k.xa = function() {
        g.Ju(this.subscriptions);
        g.FN.prototype.xa.call(this)
    };
    g.k.Ek = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        this.loaded && this.Wh.lj.apply(this.Wh, [a].concat(g.la(c)))
    };
    g.k.getAdState = function() {
        return this.rf
    };
    g.k.oQ = function() {
        return this.loaded ? this.Wh.suggestion : null
    };
    g.k.vk = function() {
        return this.Pb ? F8(this.Pb).vk : !1
    };
    g.k.hasNext = function() {
        return this.Pb ? F8(this.Pb).hasNext : !1
    };
    g.k.Rb = function(a, b) {
        this.FJ = a || 0;
        this.player.X("progresssync", a, b);
        this.player.Na("onVideoProgress", a)
    };
    g.k.getCurrentTime = function() {
        return this.FJ
    };
    g.k.getProgressState = function() {
        var a = F8(this.Pb),
            b = this.player.getVideoData();
        return {
            allowSeeking: g.S(this.player.T().experiments, "web_player_mdx_allow_seeking_change_killswitch") ? this.player.nf() : !a.isAdPlaying() && this.player.nf(),
            clipEnd: b.clipEnd,
            clipStart: b.clipStart,
            current: this.getCurrentTime(),
            displayedStart: -1,
            duration: a.getDuration(),
            ingestionTime: a.l ? a.u + y8(a) : a.u,
            isAtLiveHead: 1 >= (a.l ? a.i + y8(a) : a.i) - this.getCurrentTime(),
            loaded: a.L,
            seekableEnd: a.l ? a.i + y8(a) : a.i,
            seekableStart: 0 < a.B ? a.B +
                y8(a) : a.B
        }
    };
    g.k.nextVideo = function() {
        this.Pb && this.Pb.nextVideo()
    };
    g.k.bz = function() {
        this.Pb && this.Pb.bz()
    };
    g.k.nS = function(a) {
        1 === a && (this.bE = this.Pb ? F8(this.Pb) : null)
    };
    g.k.ZT = function() {
        var a = j9() ? new E8(d9(), void 0) : null;
        if (a) {
            var b = this.Lm;
            this.loaded && this.unload();
            this.Pb = a;
            this.bE = null;
            b.key !== this.qj.key && (this.Lm = b, this.load())
        } else g.ff(this.Pb), this.Pb = null, this.loaded && (this.unload(), (a = this.bE) && a.videoId === this.player.getVideoData().videoId && this.player.cueVideoById(a.videoId, A8(a)));
        this.player.X("videodatachange", "newdata", this.player.getVideoData(), 3)
    };
    g.k.QK = function() {
        var a = [this.qj],
            b = a.concat,
            c = fRa();
        s8() && g.gz("yt-remote-cast-available") && c.push({
            key: "cast-selector-receiver",
            name: "Cast..."
        });
        this.Pn = b.call(a, c);
        a = e9() || this.qj;
        w9(this, a);
        this.player.Na("onMdxReceiversChange")
    };
    g.k.VT = function() {
        var a = e9();
        w9(this, a)
    };
    g.k.UT = function() {
        this.Lm = e9()
    };
    g.k.kV = function() {
        this.Cv = !0;
        v9(this);
        l9 = !1;
        f9 && h9(f9, 1);
        f9 = null
    };
    g.k.jV = function() {
        this.Cv = !1;
        v9(this);
        w9(this, this.qj);
        this.Lm = this.qj;
        l9 = !1;
        f9 = null;
        this.player.playVideo()
    };
    g.k.sR = function() {
        this.py = !0;
        v9(this);
        g.fz("yt-remote-manual-pairing-warning-shown", !0, 2592E3);
        l9 = !1;
        f9 && h9(f9, 1);
        f9 = null
    };
    g.k.hf = function(a, b) {
        switch (a) {
            case "casting":
                return this.loaded;
            case "receivers":
                return this.Pn;
            case "currentReceiver":
                return b && ("cast-selector-receiver" === b.key ? u8() : w9(this, b)), this.loaded ? this.Lm : this.qj;
            case "quickCast":
                return 2 === this.Pn.length && "cast-selector-receiver" === this.Pn[1].key ? (b && u8(), !0) : !1
        }
    };
    g.k.XE = function() {
        this.Pb.XE()
    };
    g.k.Li = function() {
        return !1
    };
    g.k.getOptions = function() {
        return ["casting", "receivers", "currentReceiver", "quickCast"]
    };
    g.QN.remote = u9;
})(_yt_player);