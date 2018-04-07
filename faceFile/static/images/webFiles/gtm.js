// Copyright 2012 Google Inc. All rights reserved.
// Container Version: 3
(function(w, g) {
    w[g] = w[g] || {};
})(window, 'google_tag_manager'); (function() {

    var __sp; (function() { (function(a) {
            __sp = a;
            __sp.a = "sp";
            __sp.b = ["google"];
            __sp.c = !0
        })(function(a) {
            var b = a["13"];
            ba("//www.googleadservices.com/pagead/conversion_async.js",
            function() {
                var c = q("google_trackConversion");
                if (S(c)) {
                    var d = {};
                    "DATA_LAYER" == a["10"] ? d = a[""] : "USER_SPECIFIED" == a["10"] && (d = R(a[""], "key", "value"));
                    c({
                        google_conversion_id: a["8"],
                        google_conversion_label: a["9"],
                        google_custom_params: d,
                        google_remarketing_only: !0,
                        onload_callback: a["12"],
                        google_gtm: za(void 0)
                    }) || b()
                } else b()
            },
            b)
        })
    })();
    var __e; (function() { (function(a) {
            __e = a;
            __e.a = "e";
            __e.b = ["google"];
            __e.c = !0
        })(function() {
            return Da
        })
    })();

    var __awct; (function() {
        var a = !1,
        b = [],
        c = function(a) {
            var b = q("google_trackConversion"),
            c = a.gtm_onFailure;
            "function" == typeof b ? b(a) || c() : c()
        },
        d = function() {
            for (; 0 < b.length;) c(b.shift())
        },
        e = function(b) {
            return function() {
                d();
                a = !1;
                var c = eb[b];
                c && 3 == c.status && (eb[b] = void 0)
            }
        },
        f = function() {
            return function() {
                d();
                b = {
                    push: c
                };
            }
        }; (function(a) {
            __awct = a;
            __awct.a = "awct";
            __awct.b = ["google"];
            __awct.c = !0
        })(function(c) {
            var d = {
                google_conversion_domain: "",
                google_conversion_id: c["8"],
                google_conversion_label: c["9"],
                google_conversion_value: c[""] || 0,
                google_remarketing_only: !1,
                onload_callback: c["12"],
                gtm_onFailure: c["13"],
                google_gtm: za(void 0)
            };
            c[""] && (d.google_conversion_currency = c[""]);
            c[""] && (d.google_conversion_order_id = c[""]);
            c[""] && (d.google_read_ga_cookie_opt_in = !0); ! c.hasOwnProperty("") || c[""] ? (c[""] && (d.google_gcl_cookie_prefix = c[""]), d.google_read_gcl_cookie_opt_out = !1) : d.google_read_gcl_cookie_opt_out = !0;
            b.push(d);
            a || (a = !0, Ta("//www.googleadservices.com/pagead/conversion_async.js", f(), e("//www.googleadservices.com/pagead/conversion_async.js")))
        })
    })();

    /*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Ib = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Jb = function(a) {
        if (null == a) return String(a);
        var b = Ib.exec(Object.prototype.toString.call(Object(a)));
        return b ? b[1].toLowerCase() : "object"
    },
    Kb = function(a, b) {
        return Object.prototype.hasOwnProperty.call(Object(a), b)
    },
    Na = function(a) {
        if (!a || "object" != Jb(a) || a.nodeType || a == a.window) return ! 1;
        try {
            if (a.constructor && !Kb(a, "constructor") && !Kb(a.constructor.prototype, "isPrototypeOf")) return ! 1
        } catch(c) {
            return ! 1
        }
        for (var b in a);
        return void 0 === b || Kb(a, b)
    },
    W = function(a, b) {
        var c = b || ("array" == Jb(a) ? [] : {}),
        d;
        for (d in a) if (Kb(a, d)) {
            var e = a[d];
            "array" == Jb(e) ? ("array" != Jb(c[d]) && (c[d] = []), c[d] = W(e, c[d])) : Na(e) ? (Na(c[d]) || (c[d] = {}), c[d] = W(e, c[d])) : c[d] = e
        }
        return c
    };
    var Ia = {},
    qb = null,
    Lb = Math.random();
    Ia.f = "GTM-KV8Z8NK";
    var Mb = null,
    Da = null,
    jb = !1,
    Nb = "//www.googletagmanager.com/a?id=" + Ia.f + "&cv=3",
    Ob = {},
    Pb = {},
    kb = {};
    var Qb, Rb, Sb, Tb, Ub, Vb, Wb, Xb, Yb, Zb, $b, ac, bc, cc, dc, ec, fc, gc, hc, ic, jc, kc, lc, mc, nc, oc, pc, qc, rc, sc, tc, uc, vc, wc, xc, yc, zc, Ac, Bc, Cc, Dc, Ec, Fc, Gc, Hc, Ic, Jc, Kc, Lc, Mc, Nc, Oc, Pc, Qc, Rc, Sc, Tc, Uc, Vc, Wc, Xc, Yc, Zc, $c, ad, bd, cd, dd, ed, fd, gd, hd, id, jd, kd, ld, md, nd, od, pd, qd, rd, sd, td, ud, vd, wd, xd, yd, zd, Ad, $a, Bd, Cd, Dd, Ed, Fd, Gd, Hd, Id, Jd, Kd, Ld, ab, Md, Nd, Od, Pd, Qd, Rd, Sd, Td, Ud, Vd, Wd, Xd, Yd, Zd, $d, ae, be, ce, de, ee, fe, ge, he, ie, je, ke, le, me, ne, oe, pe, qe, re, se, te, ue, ve, we, xe, ye, ze, Ae, Be, Ce, De, Ee, Fe, Ge, He, Ie, Je, Ke, Le, Me, Ne, Oe, Pe, Qe, Re, Se, Te, Ue, Ve, We, Xe, Ye, Ze, $e, af, bf, cf, df, ef, ff, gf, hf, jf, kf, lf, mf, nf, of, pf, qf, rf, sf, tf, uf, vf, wf, xf, yf, zf, Af, Bf, Cf, Df, Ef, Ff, Gf, Hf, If, Jf, Kf, Lf, Mf; (function() {
        var a = function(a) {
            return {
                toString: function() {
                    return a
                }
            }
        };
        Qb = a("");
        Rb = a("");
        Sb = "";
        Tb = a("");
        Ub = a("");
        Vb = a("");
        Wb = a("");
        Xb = a("");
        Yb = a("");
        Zb = a("");
        $b = a("");
        ac = a("0");
        bc = a("1");
        cc = a("");
        dc = a("");
        ec = a("");
        fc = a("");
        gc = a("");
        hc = a("");
        ic = a("");
        jc = a("");
        kc = a("");
        lc = a("");
        mc = a("");
        nc = a("");
        oc = a("");
        pc = a("");
        qc = a("");
        rc = a("");
        sc = a("");
        tc = a("");
        uc = a("");
        vc = a("");
        wc = a("");
        xc = a("");
        yc = a("");
        zc = a("2");
        Ac = a("");
        Bc = a("");
        Cc = a("");
        Dc = a("");
        Ec = a("");
        Fc = a("");
        Gc = a("");
        Hc = a("");
        Ic = a("");
        Jc = a("");
        Kc = a("");
        Lc = a("");
        Mc = a("");
        Nc = a("");
        Oc = a("");
        Pc = a("");
        Qc = a("");
        Rc = a("");
        Sc = a("");
        Tc = a("");
        Uc = a("");
        Vc = a("");
        Wc = a("");
        Xc = a("");
        Yc = a("");
        Zc = a("");
        $c = a("");
        ad = a("");
        bd = a("");
        cd = a("");
        dd = a("");
        ed = a("");
        fd = a("");
        gd = a("");
        hd = a("");
        id = a("");
        jd = a("");
        kd = a("");
        ld = a("");
        md = a("");
        nd = a("");
        od = a("");
        pd = a("");
        qd = a("");
        rd = a("");
        sd = a("");
        td = a("");
        ud = a("");
        vd = a("");
        wd = a("");
        xd = a("");
        yd = a("");
        zd = a("");
        Ad = a("");
        $a = a("3");
        Bd = a("");
        Cd = a("12");
        Dd = a("13");
        Ed = a("");
        Fd = a("");
        Gd = a("");
        Hd = a("");
        Id = a("");
        Jd = a("");
        Kd = a("");
        Ld = a("");
        ab = a("4");
        Md = a("");
        Nd = a("");
        Od = a("");
        Pd = a("");
        Qd = a("");
        Rd = a("");
        Sd = a("");
        Td = a("");
        Ud = a("");
        Vd = a("");
        Wd = a("");
        Xd = a("");
        Yd = a("");
        Zd = a("");
        $d = a("");
        ae = a("");
        be = a("");
        ce = a("");
        de = a("");
        ee = a("");
        fe = a("");
        ge = a("");
        he = a("");
        ie = a("");
        je = a("");
        ke = a("");
        le = a("");
        me = a("");
        ne = a("");
        oe = a("");
        pe = a("");
        qe = a("");
        re = a("");
        se = a("");
        te = a("");
        ue = a("");
        ve = a("");
        we = a("");
        xe = a("");
        ye = a("");
        ze = a("");
        Ae = a("");
        Be = a("");
        Ce = a("");
        De = a("");
        Ee = a("");
        Fe = a("");
        Ge = a("");
        He = a("");
        Ie = a("");
        Je = a("");
        Ke = a("");
        Le = a("");
        Me = a("");
        Ne = a("");
        Oe = a("");
        Pe = a("");
        Qe = a("");
        Re = a("");
        Se = a("");
        Te = a("");
        Ue = a("");
        Ve = a("");
        We = a("");
        Xe = a("");
        Ye = a("");
        Ze = a("6");
        $e = a("");
        af = a("");
        bf = a("");
        cf = a("");
        df = a("");
        ef = a("");
        ff = a("");
        gf = a("");
        hf = a("");
        jf = a("");
        kf = a("");
        lf = a("");
        mf = a("");
        nf = a("");
        of = a("");
        pf = a("");
        qf = a("");
        rf = a("");
        sf = a("");
        tf = a("");
        uf = a("");
        vf = a("");
        wf = "";
        xf = a("");
        yf = a("");
        zf = a("");
        Af = a("");
        Bf = a("");
        Cf = a("");
        Df = a("");
        Ef = a("");
        Ff = a("");
        Gf = a("");
        Hf = a("");
        If = a("");
        Jf = a("");
        Kf = a("");
        Lf = a("");
        Mf = a("")
    })();
    var Hb = function(a, b) {
        W(a, b)
    },
    Nf = function() {},
    S = function(a) {
        return "function" == typeof a
    },
    bb = function(a) {
        return "[object Array]" == Object.prototype.toString.call(Object(a))
    },
    Of = function(a) {
        return "number" == Jb(a) && !isNaN(a)
    },
    Pf = function(a) {
        return /^[0-9]+$/.test(a)
    },
    nb = function(a) {
        return "string" == Jb(a)
    },
    Qf = function(a, b) {
        if (Array.prototype.indexOf) {
            var c = a.indexOf(b);
            return "number" == typeof c ? c: -1
        }
        for (var d = 0; d < a.length; d++) if (a[d] === b) return d;
        return - 1
    },
    Rf = function(a, b) {
        if (a && bb(a) && 0 != a.length) for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c]
    },
    Ca = function(a) {
        return a ? a.replace(/^\s+|\s+$/g, "") : ""
    },
    X = function(a) {
        return Math.round(Number(a)) || 0
    },
    Pa = function(a) {
        return "false" == String(a).toLowerCase() ? !1 : !!a
    },
    Sf = function(a) {
        var b = [];
        if (bb(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
        return b
    },
    K = function() {
        return new Date
    },
    Ha = function(a, b) {
        if (!Of(a) || !Of(b) || a > b) a = 0,
        b = 2147483647;
        return Math.floor(Math.random() * (b - a + 1) + a)
    },
    Tf = function() {
        this.prefix = "gtm.";
        this.values = {}
    };
    Tf.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    Tf.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    Tf.prototype.contains = function(a) {
        return void 0 !== this.get(a)
    };
    var Uf = function(a, b, c) {
        try {
            if (!a[ae]) return a[$a](a, b || Nf, c || Nf);
            c && c()
        } catch(d) {}
        return ! 1
    },
    Vf = function(a, b) {
        function c(b, c) {
            a.contains(b) || a.set(b, []);
            a.get(b).push(c)
        }
        for (var d = Ca(b).split("&"), e = 0; e < d.length; e++) if (d[e]) {
            var f = d[e].indexOf("=");
            0 > f ? c(d[e], "1") : c(d[e].substring(0, f), d[e].substring(f + 1))
        }
    },
    Wf = function(a) {
        var b = a ? a.length: 0;
        return 0 < b ? a[b - 1] : ""
    },
    Xf = function(a) {
        var b = Ia.f;
        return function() {
            return a(b)
        }
    },
    Yf = function(a) {
        for (var b = 0; b < a.length; b++) a[b]()
    },
    La = function() {
        return "gtm" + Zf()
    },
    Zf = function() {
        var a = qb.sequence || 0;
        qb.sequence = a + 1;
        return a
    },
    Oa = function(a, b, c) {
        return a && a.hasOwnProperty(b) ? a[b] : c
    },
    $f = function(a) {
        return null !== a && void 0 !== a && void 0 !== a.length
    },
    ag = function(a, b) {
        0 == b ? a.fc = !0 : a.la = !0;
        var c = a.i;
        a.G && (a.G.xb[c] = b);
        Ob[c] && (Ob[c].state = b)
    },
    bg = function(a, b) {
        return "function" != typeof String.prototype.startsWith ? 0 === a.indexOf(b) : a.startsWith(b)
    },
    gg = function(a, b) {
        a.sort(function(a, d) {
            return b(a, d) ? -1 : b(d, a) ? 1 : 0
        })
    };
    var y = window,
    P = document,
    ig = navigator,
    ib = function(a, b) {
        var c = y[a];
        y[a] = void 0 === c ? b: c;
        return y[a]
    },
    ka = function(a, b, c, d) {
        return (d || "http:" != y.location.protocol ? a: b) + c
    },
    jg = function(a) {
        var b = P.getElementsByTagName("script")[0] || P.body || P.head;
        b.parentNode.insertBefore(a, b)
    },
    ub = function(a, b) {
        b && (a.addEventListener ? a.onload = b: a.onreadystatechange = function() {
            a.readyState in {
                loaded: 1,
                complete: 1
            } && (a.onreadystatechange = null, b())
        })
    },
    u = function(a, b, c) {
        var d = P.createElement("script");
        d.type = "text/javascript";
        d.async = !0;
        d.src = a;
        ub(d, b);
        c && (d.onerror = c);
        jg(d);
        return d
    },
    Ya = function(a, b) {
        var c = P.createElement("iframe");
        c.height = "0";
        c.width = "0";
        c.style.display = "none";
        c.style.visibility = "hidden";
        jg(c);
        ub(c, b);
        void 0 !== a && (c.src = a);
        return c
    },
    E = function(a, b, c) {
        var d = new Image(1, 1);
        d.onload = function() {
            d.onload = null;
            b && b()
        };
        d.onerror = function() {
            d.onerror = null;
            c && c()
        };
        d.src = a
    },
    wa = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
    },
    sa = function(a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, !!d) : a.detachEvent && a.detachEvent("on" + b, c)
    },
    w = function(a) {
        y.setTimeout(a, 0)
    },
    wb = !1,
    xb = [],
    kg = function(a) {
        if (!wb) {
            var b = P.createEventObject,
            c = "complete" == P.readyState,
            d = "interactive" == P.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                wb = !0;
                for (var e = 0; e < xb.length; e++) w(xb[e])
            }
            xb.push = function() {
                for (var a = 0; a < arguments.length; a++) w(arguments[a]);
                return 0
            }
        }
    },
    lg = 0,
    mg = function() {
        if (!wb && 140 > lg) {
            lg++;
            try {
                P.documentElement.doScroll("left"),
                kg()
            } catch(a) {
                y.setTimeout(mg, 50)
            }
        }
    },
    ha = function(a) {
        var b = P.getElementById(a);
        if (b && Aa(b, "id") != a) for (var c = 1; c < document.all[a].length; c++) if (Aa(document.all[a][c], "id") == a) return document.all[a][c];
        return b
    },
    Aa = function(a, b) {
        return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value: null
    },
    ng = function(a) {
        return a.target || a.srcElement || {}
    },
    Ba = function(a) {
        var b = a.innerText || a.textContent || "";
        b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
        b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
        return b
    },
    Bb = function(a) {
        var b = P.createElement("div");
        b.innerHTML = "A<div>" + a + "</div>";
        b = b.lastChild;
        for (var c = []; b.firstChild;) c.push(b.removeChild(b.firstChild));
        return c
    },
    og = function(a, b, c) {
        c = c || 100;
        for (var d = {},
        e = 0; e < b.length; e++) d[b[e]] = !0;
        var f = a;
        for (e = 0; f && e <= c; e++) {
            if (d[String(f.tagName).toLowerCase()]) return f;
            f = f.parentElement
        }
        return null
    },
    pg = !1,
    qg = [],
    rg = function() {
        if (!pg) {
            pg = !0;
            for (var a = 0; a < qg.length; a++) w(qg[a])
        }
    },
    sg = function(a) {
        a = a || y;
        var b = a.location.href,
        c = b.indexOf("#");
        return 0 > c ? "": b.substring(c + 1)
    },
    Ab = function(a) {
        window.console && window.console.log && window.console.log(a)
    };
    var tg = function(a, b) {
        for (var c = a.split("&"), d = 0; d < c.length; d++) {
            var e = c[d].split("=");
            if (decodeURIComponent(e[0]).replace(/\+/g, " ") == b) return decodeURIComponent(e.slice(1).join("=")).replace(/\+/g, " ")
        }
    },
    V = function(a, b, c, d, e) {
        var f, g = (a.protocol.replace(":", "") || y.location.protocol.replace(":", "")).toLowerCase();
        b && (b = String(b).toLowerCase());
        switch (b) {
        case "protocol":
            f = g;
            break;
        case "host":
            f = (a.hostname || y.location.hostname).split(":")[0].toLowerCase();
            if (c) {
                var h = /^www\d*\./.exec(f);
                h && h[0] && (f = f.substr(h[0].length))
            }
            break;
        case "port":
            f = String(1 * (a.hostname ? a.port: y.location.port) || ("http" == g ? 80 : "https" == g ? 443 : ""));
            break;
        case "path":
            f = "/" == a.pathname.substr(0, 1) ? a.pathname: "/" + a.pathname;
            var k = f.split("/");
            0 <= Qf(d || [], k[k.length - 1]) && (k[k.length - 1] = "");
            f = k.join("/");
            break;
        case "query":
            f = a.search.replace("?", "");
            e && (f = tg(f, e));
            break;
        case "fragment":
            f = a.hash.replace("#", "");
            break;
        default:
            f = a && a.href
        }
        return f
    },
    Ea = function(a) {
        var b = "";
        if (a && a.href) {
            var c = a.href.indexOf("#");
            b = 0 > c ? a.href: a.href.substr(0, c)
        }
        return b
    },
    U = function(a) {
        var b = P.createElement("a");
        a && (b.href = a);
        return b
    };
    var xa = function(a, b) {
        var c = function() {};
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    };
    var ob = function(a) {
        return encodeURIComponent(a)
    },
    da = function(a) {
        var b = ["veinteractive.com", "ve-interactive.cn"];
        if (!a) return ! 1;
        var c = V(U(a), "host");
        if (!c) return ! 1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                if (0 <= f && c.indexOf(e, f) == f) return ! 0
            }
        }
        return ! 1
    };
    var R = function(a, b, c) {
        for (var d = {},
        e = !1,
        f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
        return e ? d: null
    },
    sb = function(a, b) {
        for (var c = [], d = 0; a && d < a.length; d++) a[d] && a[d].hasOwnProperty(b) && c.push(a[d][b]);
        return c
    },
    Ja = function(a, b) {
        W(a, b)
    },
    Qa = function(a) {
        return X(a)
    },
    Cb = function(a, b) {
        return Qf(a, b)
    };
    var ug = {
        event: function(a) {
            var b = a[1];
            if (nb(b) && !(3 < a.length)) {
                var c;
                if (2 < a.length) {
                    if (!Na(a[2])) return;
                    c = a[2]
                }
                var d = c,
                e = {
                    event: b
                };
                d && (d = W(d, void 0), e.eventModel = d, e.eventCallback = d.eventCallback);
                return e
            }
        },
        set: function(a) {
            var b;
            2 == a.length && Na(a[1]) ? b = W(a[1], void 0) : 3 == a.length && nb(a[1]) && (b = {},
            b[a[1]] = a[2]);
            if (b) return b._clear = !0,
            b
        },
        js: function(a) {
            if (2 == a.length && a[1].getTime) return {
                event: "gtm.js",
                "gtm.start": a[1].getTime()
            }
        }
    };
    var vg = new Tf,
    wg = {},
    yg = {
        set: function(a, b) {
            W(xg(a, b), wg)
        },
        get: function(a) {
            return Z(a, 2)
        },
        reset: function() {
            vg = new Tf;
            wg = {}
        }
    },
    Z = function(a, b) {
        var c;
        if (2 != b) c = vg.get(a);
        else a: {
            for (var d = a.split("."), e = 0, f = wg.eventModel; void 0 !== f && e < d.length; e++) f = f[d[e]];
            if (void 0 !== f || 1 < e) c = f;
            else {
                var g = wg;
                for (e = 0; e < d.length; e++) {
                    if (void 0 === g[d[e]]) {
                        c = void 0;
                        break a
                    }
                    g = g[d[e]]
                }
                c = g
            }
        }
        return c
    },
    zg = function(a, b) {
        vg.set(a, b);
        W(xg(a, b), wg)
    },
    xg = function(a, b) {
        for (var c = {},
        d = c,
        e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
        d[e[e.length - 1]] = b;
        return c
    };
    var Ag = !1,
    Bg = !1;
    var Cg = Math.random(),
    Dg = "0.050000" > Cg;
    var Eg = function(a, b) {
        if (Dg) {
            var c = Nb,
            d = function(a, b) {
                b && (c += a + encodeURIComponent(b))
            };
            d("&v=", "t");
            d("&n=", a);
            d("&s=", b && b.state);
            d("&h=", b && b.hideLatency);
            d("&g=", b && b.gaLatency);
            d("&p=", b && b.loadBy);
            d("&o=", b && b.timeout);
            d("&l=", K().getTime() - X(Mb));
            c += "&sr=0.050000";
            d("&ps=", Cg);
            d("&cb=", Ha());
            E(c)
        }
    },
    Fg = Nf,
    Gg = function() {
        var a = !1;
    };
    var Ig = function(a) {
        var b = qb.zones;
        return b ? b.checkState(Ia.f, a) : Hg
    },
    Hg = {
        active: !0,
        isWhitelisted: function() {
            return ! 0
        }
    };
    var Kg = Nf,
    Lg = [],
    Mg = !1,
    Ng = function(a) {
        return y["dataLayer"].push(a)
    },
    Og = function(a) {
        var b = !1;
        return function() { ! b && S(a) && w(Xf(a));
            b = !0
        }
    },
    Xg = function() {
        for (var a = !1; ! Mg && 0 < Lg.length;) {
            Mg = !0;
            delete wg.eventModel;
            var b = Lg.shift();
            if (S(b)) try {
                b.call(yg)
            } catch(Ma) {} else if (bb(b)) a: {
                var c = b;
                if (nb(c[0])) {
                    for (var d = c[0].split("."), e = d.pop(), f = c.slice(1), g = wg, h = 0; h < d.length; h++) {
                        if (void 0 === g[d[h]]) break a;
                        g = g[d[h]]
                    }
                    try {
                        g[e].apply(g, f)
                    } catch(Ma) {}
                }
            } else {
                var k = b;
                if (k && ("[object Arguments]" == Object.prototype.toString.call(k) || Object.prototype.hasOwnProperty.call(k, "callee"))) {
                    a: {
                        var l = b;
                        if (l.length && nb(l[0])) {
                            var m = ug[l[0]];
                            if (m) {
                                b = m(l);
                                break a
                            }
                        }
                        b = void 0
                    }
                    if (!b) {
                        Mg = !1;
                        continue
                    }
                }
                var n = void 0,
                p = void 0,
                r = b,
                t = r._clear;
                for (p in r) r.hasOwnProperty(p) && "_clear" !== p && (t && zg(p, void 0), zg(p, r[p]));
                var v = !1,
                A = r.event;
                if (A) {
                    r.hasOwnProperty("gtm.uniqueEventId") || (r["gtm.uniqueEventId"] = Zf(), zg("gtm.uniqueEventId", r["gtm.uniqueEventId"]));
                    n = r["gtm.uniqueEventId"];
                    Da = A;
                    var J = Ig(n);
                    if (J.active) {
                        var I = Og(r.eventCallback),
                        F = r.eventTimeout;
                        F && y.setTimeout(I, Number(F));
                        v = Kg(n, A, J.isWhitelisted, I, r.eventReporter)
                    }
                }
                Mb || (Mb = r["gtm.start"]) && Fg();
                var L, B = r,
                D = n,
                z = A,
                C = wg;
                Da = null;
                a = v || a
            }
            Mg = !1
        }
        return ! a
    },
    Yg = function() {
        var a = Xg();
        try {
            var b = y["dataLayer"].hide;
            if (b && void 0 !== b[Ia.f] && b.end) {
                b[Ia.f] = !1;
                var c = !0,
                d;
                for (d in b) if (b.hasOwnProperty(d) && !0 === b[d]) {
                    c = !1;
                    break
                }
                c && (b.end(), b.end = null)
            }
        } catch(e) {}
        return a
    },
    Zg = function() {
        var a = ib("dataLayer", []),
        b = ib("google_tag_manager", {});
        b = b["dataLayer"] = b["dataLayer"] || {};
        xb.push(function() {
            b.gtmDom || (b.gtmDom = !0, a.push({
                event: "gtm.dom"
            }))
        });
        qg.push(function() {
            b.gtmLoad || (b.gtmLoad = !0, a.push({
                event: "gtm.load"
            }))
        });
        var c = a.push;
        a.push = function() {
            var b = [].slice.call(arguments, 0);
            c.apply(a, b);
            for (Lg.push.apply(Lg, b); 300 < this.length;) this.shift();
            return Xg()
        };
        Lg.push.apply(Lg, a.slice(0));
        w(Yg)
    };
    var $g, ah, bh;
    var Fa = function(a, b) {
        var c = {
            "gtm.element": a,
            "gtm.elementClasses": a.className,
            "gtm.elementId": a["for"] || Aa(a, "id") || "",
            "gtm.elementTarget": a.formTarget || a.target || ""
        };
        if (b && dh) if ("LINK_CLICK" == b) c["gtm.elementUrl"] = a.href;
        else if ("FORM_SUBMIT" == b) {
            var d = a.action;
            d && d.tagName && (d = a.cloneNode(!1).action);
            c["gtm.elementUrl"] = d
        }
        c.hasOwnProperty("gtm.elementUrl") || (c["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction: "") || a.action || a.href || a.src || a.code || a.codebase || "");
        return c
    },
    sh = function(a) {
        qb.hasOwnProperty("autoEventsSettings") || (qb.autoEventsSettings = {});
        var b = qb.autoEventsSettings;
        b.hasOwnProperty(a) || (b[a] = {});
        return b[a]
    },
    pa = function(a, b, c) {
        sh(a)[b] = c
    },
    hb = function(a, b, c, d) {
        var e = sh(a),
        f = Oa(e, b, d);
        e[b] = c(f)
    },
    ua = function(a, b, c) {
        var d = sh(a);
        return Oa(d, b, c)
    },
    ra = function(a) {
        return !! ua(a, "init", !1)
    },
    va = function(a) {
        pa(a, "init", !0)
    },
    th = function() {};
    var uh = /(^|\.)doubleclick\.net$/i,
    vh = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Ga = function(a, b, c) {
        for (var d = String(b || P.cookie).split(";"), e = [], f = 0; f < d.length; f++) {
            var g = d[f].split("="),
            h = Ca(g[0]);
            if (h && h == a) {
                var k = Ca(g.slice(1).join("="));
                k && !1 !== c && (k = decodeURIComponent(k));
                e.push(k)
            }
        }
        return e
    },
    xh = function(a, b, c, d, e, f) {
        f && (b = encodeURIComponent(b));
        var g = a + "=" + b + "; ";
        c && (g += "path=" + c + "; ");
        e && (g += "expires=" + e.toGMTString() + "; ");
        var h;
        h = "auto" == d ? wh() : [d || "none"];
        for (var k = 0; k < h.length; k++) {
            var l = g,
            m = h[k],
            n = c;
            if (uh.test(y.location.hostname) || "/" == n && vh.test(m)) break;
            "none" != h[k] && (l += "domain=" + h[k] + ";");
            var p = P.cookie;
            P.cookie = l;
            if (p != P.cookie || 0 <= Qf(Ga(a), b)) return ! 0
        }
        return ! 1
    },
    yh = function(a) {
        if ("none" == a) return 0;
        0 == a.indexOf(".") && (a = a.substr(1));
        return a.split(".").length
    },
    zh = function(a) {
        var b = a;
        b ? (1 < b.length && b.lastIndexOf("/") == b.length - 1 && (b = b.substr(0, b.length - 1)), 0 != b.indexOf("/") && (b = "/" + b), a = b) : a = "/";
        return "/" == a ? 1 : a.split("/").length
    },
    wh = function() {
        var a = V(y.location, "host", !0).split(".");
        if (4 == a.length && /^[0-9]*$/.exec(a[3])) return ["none"];
        for (var b = [], c = a.length - 2; 0 <= c; c--) b.push(a.slice(c).join("."));
        b.push("none");
        return b
    };
    var fa = function(a) {
        var b = P;
        return Ah ? b.querySelectorAll(a) : null
    },
    Bh = !1;
    if (P.querySelectorAll) try {
        var Ch = P.querySelectorAll(":root");
        Ch && 1 == Ch.length && Ch[0] == P.documentElement && (Bh = !0)
    } catch(a) {}
    var Ah = Bh;
    var Dh = function(a) {
        for (var b = [], c = P.cookie.split(";"), d = new RegExp("^\\s*" + a + "=\\s*(.*?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push(f[1])
        }
        var g = [];
        if (!b || 0 == b.length) return g;
        for (var h = 0; h < b.length; h++) {
            var k = b[h].split(".");
            3 == k.length && "GCL" == k[0] && k[1] && g.push(k[2])
        }
        return g
    };
    var Eh = /^\w+$/,
    Fh = /^[\w-]+$/,
    Gh = /^\d+\.fls\.doubleclick\.net$/;
    function Hh(a) {
        return a && "string" == typeof a && a.match(Eh) ? a: "_gcl"
    }
    function Ih(a) {
        if (a) {
            if ("string" == typeof a) {
                var b = Hh(a);
                return {
                    na: b,
                    ka: b
                }
            }
            if (a && "object" == typeof a) return {
                na: Hh(a.dc),
                ka: Hh(a.aw)
            }
        }
        return {
            na: "_gcl",
            ka: "_gcl"
        }
    }
    function Jh(a) {
        var b = U(y.location.href),
        c = V(b, "host", !1);
        if (c && c.match(Gh)) {
            var d = V(b, "path").split(a + "=");
            if (1 < d.length) return d[1].split(";")[0].split("?")[0]
        }
    }
    function Kh(a) {
        return a.filter(function(a) {
            return Fh.test(a)
        })
    }
    var Mh = function(a) {
        var b = Jh("gclaw");
        if (b) return b.split(".");
        var c = Ih(a);
        if ("_gcl" == c.ka) {
            var d = Lh();
            if (d && (null == d.L || "aw.ds" == d.L)) return [d.qa]
        }
        return Kh(Dh(c.ka + "_aw"))
    },
    Nh = function(a) {
        var b = Jh("gcldc");
        if (b) return b.split(".");
        var c = Ih(a);
        if ("_gcl" == c.na) {
            var d = Lh();
            if (d && ("ds" == d.L || "aw.ds" == d.L)) return [d.qa]
        }
        return Kh(Dh(c.na + "_dc"))
    };
    function Lh() {
        var a = U(y.location.href),
        b = V(a, "query", !1, void 0, "gclid"),
        c = V(a, "query", !1, void 0, "gclsrc");
        if (!b || !c) {
            var d = V(a, "fragment");
            b = b || tg(d, "gclid");
            c = c || tg(d, "gclsrc")
        }
        return void 0 !== b && b.match(Fh) ? {
            qa: b,
            L: c
        }: null
    }
    var Za = function(a, b, c) {
        var d = Ih(a);
        c = c || "auto";
        b = b || "/";
        var e = Lh();
        if (null !== e) {
            var f = (new Date).getTime(),
            g = new Date(f + 7776E6),
            h = ["GCL", Math.round(f / 1E3), e.qa].join(".");
            e.L && "aw.ds" != e.L || xh(d.ka + "_aw", h, b, c, g, !0);
            "aw.ds" != e.L && "ds" != e.L || xh(d.na + "_dc", h, b, c, g, !0)
        }
    },
    Oh = function() {
        var a = Jh("gac");
        if (a) return decodeURIComponent(a);
        for (var b = [], c = P.cookie.split(";"), d = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                zb: f[1],
                value: f[2]
            })
        }
        var g = {};
        if (b && b.length) for (var h = 0; h < b.length; h++) {
            var k = b[h].value.split(".");
            "1" == k[0] && 3 == k.length && k[1] && (g[b[h].zb] || (g[b[h].zb] = []), g[b[h].zb].push({
                timestamp: k[1],
                qa: k[2]
            }))
        }
        var l = [],
        m;
        for (m in g) if (g.hasOwnProperty(m)) {
            for (var n = [], p = g[m], r = 0; r < p.length; r++) n.push(p[r].qa);
            n = Kh(n);
            n.length && l.push(m + ":" + n.join(","))
        }
        return l.join(";")
    };
    var Ph;
    a: {
        Ph = "G"
    }
    var Qh = {
        "": "n",
        UA: "u",
        AW: "a",
        DC: "d",
        GTM: Ph
    },
    za = function(a) {
        var b = Ia.f.split("-"),
        c = b[0].toUpperCase();
        return (Qh[c] || "i") + "1j" + (a && "GTM" === c ? b[1] : "")
    };
    var Uh = {},
    Vh, Wh;
    var ei = function() {};
    var mi = "www.googletagmanager.com/gtm.js";
    var ni = mi,
    cb = function(a, b, c, d) {
        wa(a, b, c, d)
    },
    qa = function(a, b) {
        return y.setTimeout(a, b)
    },
    ba = function(a, b, c) {
        u(a, b, c)
    },
    eb = {},
    Ta = function(a, b, c) {
        var d = eb[a];
        if (void 0 === d) {
            var e = function(a, b) {
                return function() {
                    a.status = b;
                    for (var c = 2 == b ? a.vb: a.bb, d = 0; d < c.length; d++) y.setTimeout(c[d], 0)
                }
            };
            d = {
                status: 1,
                vb: [],
                bb: [],
                bc: void 0
            };
            d.rd = u(a, e(d, 2), e(d, 3));
            eb[a] = d
        }
        0 === d.status && (d.bc(), d.status = 2);
        2 === d.status ? b && b() : 3 === d.status ? c && c() : 1 === d.status && (b && d.vb.push(b), c && d.bb.push(c))
    },
    oi = function(a, b) {
        eb[a] = {
            status: 0,
            vb: [],
            bb: [],
            bc: b,
            rd: null
        }
    },
    ca = function() {
        return y.location.href
    },
    db = function(a) {
        return V(U(a), "fragment")
    },
    T = function(a, b) {
        return Z(a, b || 2)
    },
    na = function(a, b, c) {
        b && (a.eventCallback = b, c && (a.eventTimeout = c));
        return Ng(a)
    },
    aa = function(a, b) {
        y[a] = b
    },
    q = function(a, b, c) {
        var d = y;
        b && (void 0 === d[a] || c && !d[a]) && (d[a] = b);
        return d[a]
    },
    fb = function(a, b) {
        return og(a, b, 100)
    },
    x = function(a, b, c, d) {
        var e = !d && "http:" == y.location.protocol;
        e && (e = 2 !== pb());
        return (e ? b: a) + c
    },
    ia = function(a) {
        var b = 0;
        return b
    },
    Eb = function(a) {},
    ja = function(a) {
        var b = !1;
        return b
    },
    gb = function(a, b) {
        return Rf(a, b)
    },
    oa = function(a, b, c, d) {
        hb(a, b, c, d)
    },
    ta = function(a, b, c) {
        return ua(a, b, c)
    };

    var Gb = void 0,
    Wa = function(a) {
        if (!Gb) {
            var b = function() {
                var a = P.body;
                if (a) if (q("MutationObserver"))(new MutationObserver(function() {
                    for (var a = 0; a < Gb.length; a++) w(Gb[a])
                })).observe(a, {
                    childList: !0,
                    subtree: !0
                });
                else {
                    var b = !1;
                    cb(a, "DOMNodeInserted",
                    function() {
                        b || (b = !0, w(function() {
                            b = !1;
                            for (var a = 0; a < Gb.length; a++) w(Gb[a])
                        }))
                    })
                }
            };
            Gb = [];
            P.body ? b() : w(b)
        }
        Gb.push(a)
    },
    pb = function() {
        var a = ni;
        a = a.toLowerCase();
        for (var b = "https://" + a,
        c = "http://" + a,
        d = 1,
        e = P.getElementsByTagName("script"), f = 0; f < e.length && 100 > f; f++) {
            var g = e[f].src;
            if (g) {
                g = g.toLowerCase();
                if (bg(g, c)) return 3;
                1 === d && bg(g, b) && (d = 2)
            }
        }
        return d
    };
    var pi = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
    qi = {
        customPixels: ["nonGooglePixels"],
        html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        nonGooglePixels: [],
        nonGoogleScripts: ["nonGooglePixels"],
        nonGoogleIframes: ["nonGooglePixels"]
    },
    ri = {
        customPixels: ["customScripts", "html"],
        html: ["customScripts"],
        customScripts: ["html"],
        nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
        nonGoogleScripts: ["customScripts", "html"],
        nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
    },
    si = function(a, b) {
        for (var c = [], d = 0; d < a.length; d++) c.push(a[d]),
        c.push.apply(c, b[a[d]] || []);
        return c
    },
    Qg = function(a) {
        var b = Z("gtm.whitelist");
        var c = b && si(Sf(b), qi),
        d = Z("gtm.blacklist") || Z("tagTypeBlacklist") || [];
        pi.test(y.location && y.location.hostname) && (d = Sf(d), d.push("nonGooglePixels", "nonGoogleScripts"));
        var e = d && si(Sf(d), ri),
        f = {};
        return function(g) {
            var h = g && g[$a];
            if (!h) return ! 0;
            if (void 0 !== f[h.a]) return f[h.a];
            var k = a(h.a);
            if (b) {
                var l;
                if (l = k) a: {
                    if (0 > Qf(c, h.a)) if (h.b && 0 < h.b.length) for (var m = 0; m < h.b.length; m++) {
                        if (0 > Qf(c, h.b[m])) {
                            l = !1;
                            break a
                        }
                    } else {
                        l = !1;
                        break a
                    }
                    l = !0
                }
                k = l
            }
            var n = !1;
            if (d) {
                var p;
                if (! (p = 0 <= Qf(e, h.a))) a: {
                    for (var r = h.b || [], t = new Tf, v = 0; v < e.length; v++) t.set(e[v], !0);
                    for (v = 0; v < r.length; v++) if (t.get(r[v])) {
                        p = !0;
                        break a
                    }
                    p = !1
                }
                n = p
            }
            return f[h.a] = !k || n
        }
    };
    var _eu = function(a) {
        var b = String(Z("gtm.elementUrl") || a[Zc] || ""),
        c = U(b);
        return b
    };
    _eu.a = "eu";
    _eu.b = ["google"];
    var xi = function(a, b) {
        this.h = a;
        this.s = b
    };
    xi.prototype.toString = function() {
        var a = "" + this.h;
        1 < this.s && (a = a + "-" + this.s);
        return a
    };
    var yi = function(a, b) {
        this.ub = a;
        this.Ka = b
    };
    yi.prototype.toString = function() {
        return "" + this.Ka + "." + this.ub
    };
    var Bi = function(a, b) {
        var c = new zi(null, a, b);
        Ai(c);
        return c
    },
    zi = function(a, b, c) {
        this.Ob = Math.floor(K().getTime() / 864E5);
        this.Ia = b || "auto";
        this.ta = c || "/";
        var d = yh(this.Ia),
        e = zh(this.ta);
        this.N = a || new xi(d, e);
        this.m = [];
        this.I = new Tf
    },
    Di = function(a, b, c) {
        b && ("" == c.ub ? Ci(a, b) : (a.I.contains(b) || a.m.push(b), a.I.set(b, c)))
    },
    Ei = function(a, b) {
        for (var c = 0; c < b.length; c++) Di(a, b[c][0], b[c][1])
    },
    Ci = function(a, b) {
        var c = Qf(a.m, b);
        0 <= c && a.m.splice(c, 1);
        a.I.set(b, void 0)
    },
    Fi = function(a) {
        for (var b = [], c = 0; c < a.m.length; c++) {
            var d = a.m[c];
            b.push([d, a.I.get(d)])
        }
        return b
    },
    Gi = function(a) {
        for (var b = 0,
        c = 0; c < a.m.length; c++) b = Math.max(b, a.I.get(a.m[c]).Ka);
        return 864E5 * b
    };
    zi.prototype.toString = function() {
        if (0 == this.m.length) return "";
        for (var a = [], b = 0; b < this.m.length; b++) {
            var c = this.m[b];
            a.push("" + c + "." + this.I.get(c).toString())
        }
        return "GAX1." + this.N.toString() + "." + a.join("!")
    };
    var Hi = function(a, b) {
        for (var c = new Date,
        d = zh(a.ta), e = [], f = 0; f < a.m.length; f++) {
            var g = a.m[f];
            a.I.get(g).Ka < a.Ob && e.push(g)
        }
        for (f = 0; f < e.length; f++) Ci(a, e[f]);
        if (a.m.length > (b || 10)) return ! 1;
        c.setTime(Gi(a));
        if ("auto" != a.Ia) return xh("_gaexp", a.toString(), a.ta, a.Ia, c);
        for (var h = wh(), k = 0; k < h.length; k++) if ("none" != h[k] && (a.N = new xi(yh(h[k]), d), xh("_gaexp", a.toString(), a.ta, h[k], c))) return ! 0;
        return ! 1
    },
    Ai = function(a) {
        for (var b = a.N.h,
        c = a.N.s,
        d = Ga("_gaexp"), e = [], f = 0; f < d.length; f++) {
            var g = Ii(a, d[f]);
            g && e.push(g)
        }
        gg(e,
        function(a, d) {
            var e = a.N,
            f = d.N;
            return e.h == f.h && e.s == f.s ? !1 : e.h == b && e.s == c ? !0 : f.h == b && f.s == c ? !1 : e.h == b ? f.h != b || e.s < f.s: f.h == b ? !1 : e.s == c ? f.h != b && (f.s != c || e.h < f.h) : f.s == c ? !1 : e.h < f.h || e.h == f.h && e.s < f.s
        });
        a.N = 0 < e.length ? e[0].N: new xi(b, c);
        for (f = e.length - 1; 0 <= f; f--) Ei(a, Fi(e[f]))
    },
    Ii = function(a, b) {
        var c = b.match(/GAX1\.([^.]+).(.*)/);
        if (c) {
            var d;
            a: {
                var e = (c[1] || "").split("-");
                if (! (0 == e.length || 2 < e.length)) {
                    var f = Ca(e[0]);
                    if (0 != f.length) {
                        var g = 2 == e.length ? Ca(e[1]) : "1";
                        if (Pf(f) && Pf(g)) {
                            d = new xi(X(f), X(g));
                            break a
                        }
                    }
                }
                d = void 0
            }
            if (d) {
                for (var h = new zi(d, a.Ia, a.ta), k = (c[2] || "").split("!"), l = 0; l < k.length; l++) {
                    var m = k[l].split(".");
                    if (3 == m.length) {
                        if (!Pf(m[1])) return;
                        Di(h, m[0], new yi(m[2], X(m[1])))
                    }
                }
                return h
            }
        }
    };
    var _f = function(a) {
        var b = String(Z("gtm.referrer") || P.referrer);
        if (!b) return b;
        var c = U(b);
        return b
    };
    _f.a = "f";
    _f.b = ["google"];
    var Mi = function(a) {
        var b = y.location,
        c; (c = a[Oc] ? a[Oc] : Z("gtm.url")) && (b = U(String(c)));
        var d = b.href,
        e = d.indexOf("#"),
        f = 0 > e ? d: d.substr(0, e);
        a[zc] && (f = V(b, a[zc], a[Te], a[Yc], a[Ge]));
        return f
    },
    _u = Mi;
    _u.a = "u";
    _u.b = ["google"];
    var _cn = function(a) {
        return 0 <= String(a[ac]).indexOf(String(a[bc]))
    };
    _cn.a = "cn";
    _cn.b = ["google"];
    var _eq = function(a) {
        return String(a[ac]) == String(a[bc])
    };
    _eq.a = "eq";
    _eq.b = ["google"];
    var lb = new String("undefined"),
    yb = function(a) {
        this.resolve = function(b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === lb ? b: a[d]);
            return c.join("")
        }
    };
    yb.prototype.toString = function() {
        return this.resolve("undefined")
    };
    yb.prototype.valueOf = yb.prototype.toString;
    var Wi = {},
    zb = function(a, b) {
        var c = Zf();
        Wi[c] = [a, b];
        return c
    },
    Xi = function(a) {
        var b = a ? 0 : 1;
        return function(a) {
            var c = Wi[a];
            if (c && S(c[b])) c[b]();
            Wi[a] = void 0
        }
    };
    /*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

    var mj = function(a, b, c, d, e) {
        var f = a + "{" + (b + ": " + c + (d ? " !important": "")) + "}";
        e && (f = e + "{" + f + "}");
        var g = document;
        if (g.createStyleSheet) {
            var h = jj(g),
            k = h.rules.length;
            h.insertRule(f, k);
            return function() {
                h.deleteRule ? h.deleteRule(k) : h.removeRule(k);
                h.insertRule("x {}", k)
            }
        }
        var l = kj(f, g);
        lj(l, g);
        var m = l.parentNode;
        return function() {
            m.removeChild(l)
        }
    },
    nj = null,
    jj = function(a) {
        if (nj) return nj;
        for (var b = a.styleSheets.length - 1; 0 <= b; b--) {
            var c = a.styleSheets[b],
            d = c.ownerNode;
            if (d && d.parentNode && "HEAD" == d.parentNode.tagName) return nj = c
        }
        0 == a.styleSheets.length && a.createStyleSheet();
        return nj = a.styleSheets[0]
    },
    kj = function(a, b) {
        var c = (b || document).createElement("style");
        void 0 !== c.cssText ? c.cssText = a: c.innerHTML = a;
        return c
    },
    lj = function(a, b) {
        var c = b || document,
        d = c.getElementsByTagName("head")[0];
        d || (d = c.createElement("head"), c.body.parentNode.insertBefore(d, c.body));
        d.appendChild(a)
    };
    var uj = {},
    vj = void 0,
    wj = function(a) {
        var b = uj[a];
        b || (b = {
            id: a,
            w: [],
            pa: 0,
            Ab: null,
            ib: void 0,
            pb: !1
        },
        uj[a] = b);
        vj = b
    },
    yj = function(a, b, c, d) {
        var e = vj;
        if (!Ah || !e) return ! 1;
        var f = {
            id: e.id + ":" + e.w.length,
            tc: b,
            ea: [],
            oc: c,
            O: a,
            Wa: 0,
            Sa: d || null,
            Nb: 0,
            oa: !1
        };
        e.w.push(f);
        null === a ? (f.oa = !0, b(null)) : xj(e);
        return ! 0
    },
    zj = function(a) {
        var b = mj(a, "visibility", "hidden", !0);
        return function() {
            S(b) && b.apply();
            b = null
        }
    },
    Aj = function(a, b, c, d) {
        var e = b;
        if (!wb) {
            var f = zj(a.F);
            xb.push(f);
            e = function(a, c) {
                var d = b(a, c);
                f();
                return d
            }
        }
        return yj(a, e, c, d)
    },
    xj = function(a) {
        if (!a.pb) {
            for (var b = a.pa; b < a.w.length; b++) {
                var c = a.w[b],
                d = b == a.pa;
                if (!c.oa && !Bj(d, c)) break;
                c.oa && d && a.pa++
            }
            a.w.length > a.pa ? (a.Ab || (a.Ab = y.setTimeout(function() {
                a.Ab = null;
                xj(a)
            },
            80)), wb || a.ib || (a.ib = function() {
                w(function() {
                    xj(a)
                })
            },
            wa(P, "DOMContentLoaded", a.ib))) : Cj(a)
        }
    },
    Cj = function(a) {
        for (var b = 0; b < a.w.length; b++) {
            var c = a.w[b];
            if (c.O) for (var d = fa(c.O.F) || [], e = 0; e < d.length; e++) {
                var f = d[e];
                f.gtmProgressiveApplied && f.gtmProgressiveApplied[c.id] || (Dj(f, c.id), c.ea.push(Ej(f, c.id)))
            }
        }
    },
    Bj = function(a, b) {
        var c = [];
        if (b.O) {
            var d = Fj(b.O, b.id),
            e = null;
            b.Sa && (e = Fj(b.Sa, b.id + "-t"));
            for (var f = 0; f < d.length; f++) {
                var g = d[f],
                h;
                if (null != e && (h = e.length > f ? e[f] : null, !h && !wb && (null === b.Sa.v || b.Nb + c.length < b.Sa.v))) break;
                c.push({
                    element: g,
                    ud: h
                })
            }
        }
        if (!wb && b.oc && (!a || null == b.O.v || b.O.v != b.Wa + c.length)) return ! 1;
        for (var k = 0; k < c.length; k++) {
            var l = c[k].element,
            m = c[k].ud,
            n;
            b.Wa++;
            Dj(l, b.id);
            m && (b.Nb++, n = b.id + "-t", Dj(m, n));
            var p = b.tc(l, m);
            S(p) && b.ea.push(p);
            b.ea.push(Ej(l, b.id));
            m && n && b.ea.push(Ej(m, n))
        }
        if (b.O.v && b.O.v == b.Wa || wb) b.oa = !0;
        return ! 0
    },
    Dj = function(a, b) {
        a.gtmProgressiveApplied || (a.gtmProgressiveApplied = {});
        a.gtmProgressiveApplied[b] = !0
    },
    Ej = function(a, b) {
        return function() {
            a.gtmProgressiveApplied && delete a.gtmProgressiveApplied[b]
        }
    },
    Fj = function(a, b) {
        for (var c = fa(a.F) || [], d = [], e = 0; e < c.length; e++) {
            var f = c[e];
            if (!f.gtmProgressiveApplied || !f.gtmProgressiveApplied[b]) {
                if (a.M && !Gj(f)) break;
                d.push(f)
            }
        }
        return d
    },
    Gj = function(a) {
        if (wb) return ! 0;
        for (; a;) {
            if (a.nextSibling) return ! 0;
            a = a.parentNode
        }
        return ! 1
    };
    var dk = function(a) {
        if (!a) return ! 1;
        if (a[$b] && bb(a[bc])) {
            for (var b = a[bc], c = 0; c < b.length; c++) if (a[bc] = b[c], Uf(a)) return ! 0;
            return ! 1
        }
        return Uf(a)
    };
    var zk = 30,
    Ak = [],
    Bk = [],
    Rg = [],
    Ck = new Tf,
    Dk = [],
    Ek = [],
    ph = [],
    qh = [],
    Fk = function() {
        this.U = []
    };
    Fk.prototype.set = function(a, b) {
        this.U.push([a, b]);
        return this
    };
    Fk.prototype.resolve = function(a, b) {
        for (var c = {},
        d = 0; d < this.U.length; d++) {
            var e = Ug(this.U[d][0], a, b),
            f = Ug(this.U[d][1], a, b);
            c[e] = f
        }
        return c
    };
    var Gk = function(a) {
        this.index = a
    };
    Gk.prototype.resolve = function(a, b) {
        var c = Rg[this.index];
        if (c && !b(c)) {
            var d = c[ab];
            if (a) {
                if (a.get(d)) return;
                a.set(d, !0)
            }
            c = Ug(c, a, b);
            a && a.set(d, !1);
            return Uf(c)
        }
    };
    var _M = function(a) {
        return new Gk(a)
    },
    Hk = function(a) {
        this.resolve = function(b, c) {
            for (var d = [], e = !1, f = 0; f < a.length; f++) {
                var g = Ug(Ak[a[f]], b, c);
                g === lb && (e = !0);
                d.push(g)
            }
            return e ? new yb(d) : d.join("")
        }
    },
    _T = function(a) {
        return new Hk(arguments)
    },
    Ik = function(a) {
        function b(b) {
            for (var c = 1; c < a.length; c++) if (a[c] == b) return ! 0;
            return ! 1
        }
        this.resolve = function(c, d) {
            var e = Ug(a[0], c, d);
            if (a[0] instanceof Gk && b(8) && b(16)) {
                if (e === lb) return e;
                var f = La();
                Ck.set(f, e);
                return 'google_tag_manager["' + Ia.f + "\"].macro('" + f + "')"
            }
            e = String(e);
            for (var g = 1; g < a.length; g++) e = ek[a[g]](e);
            return e
        }
    },
    _E = function(a, b) {
        return new Ik(arguments)
    },
    Jk = function(a, b) {
        this.D = a;
        this.xa = b
    },
    _R = function(a, b) {
        return new Jk(a, b)
    };
    var Ug = function(a, b, c) {
        var d = a;
        if (a instanceof Gk || a instanceof Fk || a instanceof Hk || a instanceof Ik) return a.resolve(b, c);
        if (! (a instanceof Jk)) if (bb(a)) {
            d = [];
            for (var e = 0; e < a.length; e++) d[e] = Ug(a[e], b, c)
        } else if (a && "object" == typeof a) {
            d = {};
            for (var f in a) a.hasOwnProperty(f) && (d[f] = Ug(a[f], b, c))
        }
        return d
    },
    Mk = function() {
        for (var a = [_eq, __e, '_event', '1', _M(0), 'gtm.js', '7048748_2147479553', __sp, true, '940175154', 'NONE', _u, '_url', _M(1), 1, 'gtm.load', '7048748_6', 2, _cn, 'Page URL', _M(2), '/register/completion', '7048748_8', __awct, 'BixwCJzq1mIQst6nwAM', 3, 'Page Hostname', 'host', 'Page Path', 'path', _f, 'Referrer', 'Event'], b = [], c = 0; c < a.length; c++) b[c] = Lk(c, a);
        return b
    },
    Lk = function(a, b) {
        var c = b[a],
        d = c;
        if (c instanceof Gk || c instanceof Ik || c instanceof Hk || c instanceof Jk) d = c;
        else if (bb(c)) {
            d = [];
            for (var e = 0; e < c.length; e++) d[e] = Lk(c[e], b)
        } else if ("object" == typeof c) {
            d = new Fk;
            for (var f in c) c.hasOwnProperty(f) && d.set(b[f], Lk(c[f], b))
        }
        return d
    },
    Ok = function(a, b) {
        for (var c = b ? b.split(",") : [], d = 0; d < c.length; d++) {
            var e = c[d] = c[d].split(":");
            0 == a && (e[1] = Ak[e[1]]);
            if (1 == a) {
                var f = Nk(e[0]);
                e = c[d] = {};
                for (var g = 0; g < f.length; g++) {
                    var h = Bk[f[g]];
                    e[h[0]] = h[1]
                }
            }
            if (2 == a) for (g = 0; 4 > g; g++) e[g] = Nk(e[g]);
            3 == a && (c[d] = Ak[e[0]]);
            if (4 == a) for (g = 0; 2 > g; g++) if (e[g]) {
                e[g] = e[g].split(".");
                for (var k = 0; k < e[g].length; k++) e[g][k] = Ak[e[g][k]]
            } else e[g] = [];
            5 == a && (c[d] = e[0])
        }
        return c
    },
    Nk = function(a) {
        var b = [];
        if (!a) return b;
        for (var c = 0,
        d = 0; d < a.length && c < zk; c += 6, d++) {
            var e = a && a.charCodeAt(d) || 65;
            if (65 != e) {
                var f;
                f = 65 < e && 90 >= e ? e - 65 : 97 <= e && 122 >= e ? e - 97 + 26 : 95 == e ? 63 : 48 <= e ? e - 48 + 52 : 62;
                1 & f && b.push(c);
                2 & f && b.push(c + 1);
                4 & f && b.push(c + 2);
                8 & f && b.push(c + 3);
                16 & f && b.push(c + 4);
                32 & f && b.push(c + 5)
            }
        }
        return b
    },
    Pk = function(a, b, c) {
        a.push.apply(a, Ok(b, c))
    };
    var Qk;
    var Tg = function(a, b) {
        if (null === a || void 0 === a) return a;
        if (b.propertyRenamingRequired) {
            var c = {},
            d;
            for (d in a) if (a.hasOwnProperty(d)) {
                var e = Tk[d];
                e && 0 == e.indexOf("vtp_") && (c[e] = a[d])
            }
            c.__metadata = b;
            return c
        }
        return a
    },
    Wk = function(a) {},
    Xk = function(a, b) {},
    Wg = function(a) {};
    var Yk, Zk;
    var jl = function(a) {
        return function() {}
    },
    kl = function(a) {
        return function() {}
    };
    var ll = function(a) {
        var b = this;
        this.i = a;
        this.la = this.fc = !1;
        this.Ra = [];
        this.La = [];
        this.C = function() {
            b.la || Yf(b.Ra);
            ag(b, 1);
            if (Pb[a]) for (var c = 0; c < Pb[a].length; c++) Pb[a].shift().C()
        };
        this.B = function() {
            b.la || Yf(b.La);
            ag(b, 2);
            if (Pb[a]) for (var c = 0; c < Pb[a].length; c++) Pb[a].shift().B()
        };
        this.H = Nf
    },
    ml = function(a, b) {
        a.Ra.push(b)
    },
    nl = function(a, b) {
        a.La.push(b)
    },
    ol = function(a) {
        this.P = [];
        this.wb = [];
        this.Qb = {};
        this.Wb = [];
        this.ba = 0;
        this.tb = {};
        this.yb = {};
        this.xb = {};
        this.event = a
    };
    ol.prototype.addListener = function(a) {
        this.Wb.push(a)
    };
    var pl = function(a) {
        0 < a.ba || Yf(a.Wb)
    },
    ql = function(a, b, c, d, e, f) {
        if (!c.la) {
            a.P[b] = c;
            void 0 == d && (d = []);
            void 0 == e && (e = []);
            void 0 == f && (f = []);
            d = bb(d) ? d.slice() : ["or", d];
            e = bb(e) ? e.slice() : [e];
            f = bb(f) ? f.slice() : [f];
            a.Qb[b] = d;
            a.tb[b] = 0 < e.length;
            a.yb[b] = 0 < f.length;
            a.ba++;
            var g = function() {
                0 < a.ba && !a.tb[b] && !a.yb[b] && a.ba--;
                pl(a)
            };
            ml(c, g);
            nl(c, g)
        }
    },
    vl = function(a) {
        for (var b = [], c = {},
        d = 0; d < a.P.length; c = {
            W: c.W
        },
        d++) if (c.W = a.P[d], c.W) {
            var e = a.Qb[d],
            f = a.tb[d],
            g = a.yb[d];
            if (0 != e.length || f || g) {
                if (0 < e.length) for (var h = rl(e, c.W.H), k = 0; k < e.length; k++) e[k] instanceof Jk && e[k].D != d && sl(a, e[k].D, h); (f || g) && tl(a, d,
                function(a) {
                    return function() {
                        0 < a.W.G.ba && a.W.G.ba--;
                        pl(a.W.G)
                    }
                } (c))
            } else b.push(d)
        }
        for (d = 0; d < b.length; d++) a.P[b[d]].H();
        for (d = 0; d < a.wb.length; d++) {
            var l = a.wb[d];
            ul(l);
            0 < l.length && l[0].H()
        }
    },
    sl = function(a, b, c) {
        a.P[b] && (ml(a.P[b],
        function() {
            c(b, !0)
        }), nl(a.P[b],
        function() {
            c(b, !1)
        }))
    },
    rl = function(a, b) {
        var c = !1;
        return function(d, e) {
            var f;
            a: {
                for (var g = 0; g < a.length; g++) if (a[g] instanceof Jk && a[g].D === d || a[g] === d) {
                    f = g;
                    break a
                }
                f = -1
            }
            c || 0 > f || ("or" == a[0] ? e ? (c = !0, b()) : (a.splice(f, 1), 1 == a.length && (c = !0)) : e ? (a.splice(f, 1), 1 == a.length && (c = !0, b())) : c = !0)
        }
    },
    tl = function(a, b, c) {
        var d = [],
        e = !1,
        f = function(b) {
            var c, g, h = Ek[b];
            if (a.event.g(h)) {} else g = wl(h, b, a.event.g, a);
            if (c = g) {
                var k = xl(b, !0);
                0 < k.length && f(k[0].D);
                d.push(c);
                var l = xl(b, !1);
                0 < l.length && f(l[0].D)
            } else e = !0
        };
        f(b);
        if (!e) {
            for (var g = 0; g < d.length; g++) {
                var h = d[g],
                k = xl(h.i, !0);
                if (0 < k.length) {
                    var l = d[g - 1],
                    m = yl(h);
                    ml(l, m);
                    0 == k[0].xa ? nl(l, m) : nl(l, c)
                }
                var n = xl(h.i, !1);
                0 < n.length && (m = yl(d[g + 1]), ml(h, m), 0 == n[0].xa ? nl(h, m) : nl(h, c))
            }
            ml(d[d.length - 1], c);
            nl(d[d.length - 1], c);
            a.wb.push(d)
        }
    },
    xl = function(a, b) {
        var c = b ? Qe: gf,
        d = Ek[a],
        e = void 0 === d[c] ? [] : d[c];
        return bb(e) ? e: [e]
    },
    yl = function(a) {
        return function() {
            a.H()
        }
    },
    ul = function(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = a[c],
            e = d.i,
            f = Ob[e],
            g = f.firingOption;
            if (0 != g && (1 == g && void 0 !== d.G.xb[e] || 2 == g && void 0 !== f.state) && (b.push(d), 2 == f.state && c != a.length - 1)) {
                var h = xl(a[c + 1].i, !0);
                if (0 < h.length && 1 == h[0].xa) for (++c; c < a.length; c++) b.push(a[c])
            }
        }
        var k = zl(b),
        l;
        for (l in k) if (k.hasOwnProperty(l)) {
            for (var m = void 0,
            n = void 0,
            p = k[l], r = p[0], t = p[p.length - 1], v, A = 0; A < a.length; A++) {
                var J = a[A]; ! m && J.i == r && 0 < A && (m = a[A - 1]);
                J.i == t && A < a.length - 1 && (n = a[A + 1]);
                if ( - 1 < Qf(p, J.i)) if (v = a.splice(A, 1)[0], J.i == t) break;
                else A--
            }
            if (v) {
                var I = Number(l),
                F = m,
                L = n;
                if (F) {
                    var B = F.Ra[0],
                    D = F.La[0],
                    z = F;
                    z.Ra = [];
                    z.La = [];
                    ml(F, B);
                    nl(F, D)
                }
                if (F && L) {
                    var C = yl(L);
                    ml(F, C);
                    var G = xl(F.i, !1);
                    0 < G.length && G[0].D != I && 0 == G[0].xa && nl(F, C);
                    var H = xl(L.i, !0);
                    0 < H.length && H[0].D != I && 0 == H[0].xa && nl(F, C)
                }
            }
        }
    },
    zl = function(a) {
        for (var b = {},
        c = 0; c < a.length; c++) {
            var d = a[c],
            e = [],
            f = function(a) {
                var b = xl(a, !0);
                0 < b.length && f(b[0].D);
                e.push(a);
                var c = xl(a, !1);
                0 < c.length && f(c[0].D)
            };
            f(d.i);
            b[d.i] = e
        }
        Al(a, b);
        return b
    },
    Al = function(a, b) {
        for (var c = 0; c < a.length; c++) {
            var d = a[c].i,
            e;
            for (e in b) if (b.hasOwnProperty(e) && e != d && -1 < Qf(b[e], d)) {
                delete b[d];
                break
            }
        }
    };
    var Bl = function(a, b, c) {
        return function() {
            a[Cd] = b.C;
            a[Dd] = b.B;
            var d = b.i,
            e = b.G && b.G.xb[d],
            f = Ob[d] && Ob[d].state,
            g = e ? void 0 !== e: b.fc || b.la,
            h = Ob[d] && Ob[d].firingOption,
            k = h && 2 == h,
            l = h && 1 == h;
            if (!g && void 0 === f || !g && !k || !k && !l) {
                ag(b, 0);
                var m = b.G ? b.G.event: void 0,
                n = a;
                n = Ug(n, new Tf, c);
                a = n;
                if (m) {}
                Uf(a, b.C, b.B)
            } else k && 0 == f || l && 0 == e ? Pb[d].push(b) : k && 1 == f || l && 1 == e ? b.C() : b.B()
        }
    },
    wl = function(a, b, c, d) {
        function e(a) {
            return a.i === b
        }
        var f = function() {
            var a = d && d.P;
            return a && Rf(a, e)
        } () || new ll(b);
        f.G = d;
        ml(f, jl(a));
        nl(f, kl(a));
        f.H = Bl(a, f, c);
        return f
    };
    var Il = function() {
        var a = [];
        return function(b, c) {
            if (void 0 === a[b]) {
                var d = Dk[b] && Ug(Dk[b], new Tf, c),
                e = d;
                d && (e = dk(d));
                a[b] = [e, d]
            }
            return a[b]
        }
    },
    Jl = function(a, b) {
        for (var c = b[0], d = 0; d < c.length; d++) if (!a.aa(c[d], a.g)[0]) return ! 1;
        var e = b[2];
        for (d = 0; d < e.length; d++) if (a.aa(e[d], a.g)[0]) return ! 1;
        return ! 0
    },
    Kl = !1;
    Kg = function(a, b, c, d, e) {
        switch (b) {
        case "gtm.js":
            if (Kl) return ! 1;
            Kl = !0;
            break;
        case "gtm.sync":
            if (Z("gtm.snippet") != Lb) return ! 1
        }
        for (var f = {
            id: a,
            name: b,
            Fa: d || Nf,
            ja: Nk(),
            Pa: Nk(),
            aa: Il(),
            g: Qg(c)
        },
        g = [], h = 0; h < ph.length; h++) if (Jl(f, ph[h])) {
            g[h] = !0;
            for (var k = f,
            l = ph[h], m = l[1], n = 0; n < m.length; n++) k.ja[m[n]] = !0;
            var p = l[3];
            for (n = 0; n < p.length; n++) k.Pa[p[n]] = !0
        } else g[h] = !1;
        var Q = [];
        for (var M = 0; M < zk; M++) if (f.ja[M] && !f.Pa[M]) if (f.g(Ek[M])) {} else {
            Q[M] = Ek[M];
        }
        f.ua = Q;
        for (var ma = new ol(f), ea = 0; ea < zk; ea++) if (f.ja[ea] && !f.Pa[ea]) if (f.g(Ek[ea])) {} else {
            var Ma = f.ua[ea],
            Qj = wl(Ma, ea, f.g, ma);
            ql(ma, ea, Qj, Ma[$c], Ma[Qe], Ma[gf]);
            if (Ma[Qb]) break
        }
        ma.addListener(f.Fa);
        vl(ma);
        pl(ma);
        e && S(e) && e({
            passingRules: g,
            resolvedTags: f.ua
        });
        if ("gtm.js" == b || "gtm.sync" == b) a: {}
        for (var cg in f.ua) if (f.ua.hasOwnProperty(cg)) {
            var dg = f.ua[cg];
            if (void 0 == dg[ab] || !bg(dg[ab], "_implicit")) return ! 0
        }
        return ! 1
    };
    var Ml = function() {};
    var Nl = {};
    var Sl = function() {};
    var Ll = {
        macro: function(a) {
            if (Ck.contains(a)) return Ck.get(a)
        }
    };
    Ll.dataLayer = yg;
    Ll.onHtmlSuccess = Xi(!0);
    Ll.onHtmlFailure = Xi(!1);
    Ll.callback = function(a) {
        kb.hasOwnProperty(a) && S(kb[a]) && kb[a]();
        delete kb[a]
    };
    Ll.Bc = function() {
        var a = y.google_tag_manager;
        a || (a = y.google_tag_manager = {});
        qb = a;
        if (a[Ia.f]) {
            var b = qb.zones;
            b && b.registerNatural(Ia.f)
        } else {
            a[Ia.f] = Ll;
            ei();
            th();
            Ak.push.apply(Ak, Mk());
            Pk(Bk, 0, "3:0,3:1,4:2,7:3,0:4,1:5,3:7,5:8,8:9,10:10,3:11,4:12,11:13,6:14,1:15,6:17,3:18,4:19,0:20,1:21,3:23,9:24,6:25,4:26,2:27,4:28,2:29,3:30,4:31,4:32");
            Pk(Rg, 1, "O,Aw,AQg,AQAgB,AQAAG,AAAAY,KAAAg");
            Pk(Dk, 1, "x,RAE,AAQD");
            Pk(Ek, 1, "IPD,IPJ,IGBc");
            Pk(ph, 2, "B:B::,C:C::,F:E::");
            Pk(qh, 4, "6:,16:,22:");
            for (var c = 0; c < Ek.length; c++) {
                var d = Ek[c],
                e = 1;
                d[ne] ? e = 2 : d[zf] && (e = 0);
                Ob[c] = {
                    firingOption: e,
                    state: void 0
                };
                Pb[c] = []
            }
            Gg();
            Zg();
            var n = y;
            if ("interactive" == P.readyState && !P.createEventObject || "complete" == P.readyState) kg();
            else {
                wa(P, "DOMContentLoaded", kg);
                wa(P, "readystatechange", kg);
                if (P.createEventObject && P.documentElement.doScroll) {
                    var p = !0;
                    try {
                        p = !n.frameElement
                    } catch(J) {}
                    p && mg()
                }
                wa(n, "load", kg)
            }
            "complete" === P.readyState ? rg() : wa(y, "load", rg);
            Sl();
            Ml();
            a: {}
        }
    };
    Ll.Bc();
    var _vs = "res_ts:1499844433704000,srv_cl:182500101,ds:live,cv:3";
})()