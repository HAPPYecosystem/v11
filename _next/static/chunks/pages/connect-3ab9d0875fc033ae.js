(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7784], {
        24308: function(n, t, e) {
            "use strict";
            e.d(t, {
                c4: function() {
                    return o
                }
            });
            var r = e(85623),
                i = e(83963),
                o = ["xxl", "xl", "lg", "md", "sm", "xs"],
                c = {
                    xs: "(max-width: 575px)",
                    sm: "(min-width: 576px)",
                    md: "(min-width: 768px)",
                    lg: "(min-width: 992px)",
                    xl: "(min-width: 1200px)",
                    xxl: "(min-width: 1600px)"
                },
                l = new Map,
                a = -1,
                s = {},
                u = {
                    matchHandlers: {},
                    dispatch: function(n) {
                        return s = n, l.forEach((function(n) {
                            return n(s)
                        })), l.size >= 1
                    },
                    subscribe: function(n) {
                        return l.size || this.register(), a += 1, l.set(a, n), n(s), a
                    },
                    unsubscribe: function(n) {
                        l.delete(n), l.size || this.unregister()
                    },
                    unregister: function() {
                        var n = this;
                        Object.keys(c).forEach((function(t) {
                            var e = c[t],
                                r = n.matchHandlers[e];
                            null === r || void 0 === r || r.mql.removeListener(null === r || void 0 === r ? void 0 : r.listener)
                        })), l.clear()
                    },
                    register: function() {
                        var n = this;
                        Object.keys(c).forEach((function(t) {
                            var e = c[t],
                                o = function(e) {
                                    var o = e.matches;
                                    n.dispatch((0, i.Z)((0, i.Z)({}, s), (0, r.Z)({}, t, o)))
                                },
                                l = window.matchMedia(e);
                            l.addListener(o), n.matchHandlers[e] = {
                                mql: l,
                                listener: o
                            }, o(l)
                        }))
                    }
                };
            t.ZP = u
        },
        15746: function(n, t, e) {
            "use strict";
            var r = e(21584);
            t.Z = r.Z
        },
        99134: function(n, t, e) {
            "use strict";
            var r = (0, e(67294).createContext)({});
            t.Z = r
        },
        21584: function(n, t, e) {
            "use strict";
            var r = e(85623),
                i = e(83963),
                o = e(38442),
                c = e(36228),
                l = e.n(c),
                a = e(67294),
                s = e(53124),
                u = e(99134),
                f = function(n, t) {
                    var e = {};
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && t.indexOf(r) < 0 && (e[r] = n[r]);
                    if (null != n && "function" === typeof Object.getOwnPropertySymbols) {
                        var i = 0;
                        for (r = Object.getOwnPropertySymbols(n); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(n, r[i]) && (e[r[i]] = n[r[i]])
                    }
                    return e
                };
            var d = ["xs", "sm", "md", "lg", "xl", "xxl"],
                p = a.forwardRef((function(n, t) {
                    var e, c = a.useContext(s.E_),
                        p = c.getPrefixCls,
                        x = c.direction,
                        h = a.useContext(u.Z),
                        L = h.gutter,
                        C = h.wrap,
                        m = h.supportFlexGap,
                        j = n.prefixCls,
                        b = n.span,
                        g = n.order,
                        v = n.offset,
                        Z = n.push,
                        y = n.pull,
                        w = n.className,
                        O = n.children,
                        M = n.flex,
                        P = n.style,
                        E = f(n, ["prefixCls", "span", "order", "offset", "push", "pull", "className", "children", "flex", "style"]),
                        k = p("col", j),
                        B = {};
                    d.forEach((function(t) {
                        var e, c = {},
                            l = n[t];
                        "number" === typeof l ? c.span = l : "object" === (0, o.Z)(l) && (c = l || {}), delete E[t], B = (0, i.Z)((0, i.Z)({}, B), (e = {}, (0, r.Z)(e, "".concat(k, "-").concat(t, "-").concat(c.span), void 0 !== c.span), (0, r.Z)(e, "".concat(k, "-").concat(t, "-order-").concat(c.order), c.order || 0 === c.order), (0, r.Z)(e, "".concat(k, "-").concat(t, "-offset-").concat(c.offset), c.offset || 0 === c.offset), (0, r.Z)(e, "".concat(k, "-").concat(t, "-push-").concat(c.push), c.push || 0 === c.push), (0, r.Z)(e, "".concat(k, "-").concat(t, "-pull-").concat(c.pull), c.pull || 0 === c.pull), (0, r.Z)(e, "".concat(k, "-rtl"), "rtl" === x), e))
                    }));
                    var F = l()(k, (e = {}, (0, r.Z)(e, "".concat(k, "-").concat(b), void 0 !== b), (0, r.Z)(e, "".concat(k, "-order-").concat(g), g), (0, r.Z)(e, "".concat(k, "-offset-").concat(v), v), (0, r.Z)(e, "".concat(k, "-push-").concat(Z), Z), (0, r.Z)(e, "".concat(k, "-pull-").concat(y), y), e), w, B),
                        V = {};
                    if (L && L[0] > 0) {
                        var I = L[0] / 2;
                        V.paddingLeft = I, V.paddingRight = I
                    }
                    if (L && L[1] > 0 && !m) {
                        var S = L[1] / 2;
                        V.paddingTop = S, V.paddingBottom = S
                    }
                    return M && (V.flex = function(n) {
                        return "number" === typeof n ? "".concat(n, " ").concat(n, " auto") : /^\d+(\.\d+)?(px|em|rem|%)$/.test(n) ? "0 0 ".concat(n) : n
                    }(M), !1 !== C || V.minWidth || (V.minWidth = 0)), a.createElement("div", (0, i.Z)({}, E, {
                        style: (0, i.Z)((0, i.Z)({}, V), P),
                        className: F,
                        ref: t
                    }), O)
                }));
            t.Z = p
        },
        14645: function(n, t, e) {
            "use strict";
            e.d(t, {
                Z: function() {
                    return m
                }
            });
            var r, i = e(83963),
                o = e(85623),
                c = e(38442),
                l = e(21656),
                a = e(36228),
                s = e.n(a),
                u = e(67294),
                f = e(53124),
                d = e(98924),
                p = function() {
                    if (!(0, d.Z)() || !window.document.documentElement) return !1;
                    if (void 0 !== r) return r;
                    var n = document.createElement("div");
                    return n.style.display = "flex", n.style.flexDirection = "column", n.style.rowGap = "1px", n.appendChild(document.createElement("div")), n.appendChild(document.createElement("div")), document.body.appendChild(n), r = 1 === n.scrollHeight, document.body.removeChild(n), r
                },
                x = e(24308),
                h = e(93355),
                L = e(99134),
                C = function(n, t) {
                    var e = {};
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && t.indexOf(r) < 0 && (e[r] = n[r]);
                    if (null != n && "function" === typeof Object.getOwnPropertySymbols) {
                        var i = 0;
                        for (r = Object.getOwnPropertySymbols(n); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(n, r[i]) && (e[r[i]] = n[r[i]])
                    }
                    return e
                };
            (0, h.b)("top", "middle", "bottom", "stretch"), (0, h.b)("start", "end", "center", "space-around", "space-between", "space-evenly");
            var m = u.forwardRef((function(n, t) {
                var e, r = n.prefixCls,
                    a = n.justify,
                    d = n.align,
                    h = n.className,
                    m = n.style,
                    j = n.children,
                    b = n.gutter,
                    g = void 0 === b ? 0 : b,
                    v = n.wrap,
                    Z = C(n, ["prefixCls", "justify", "align", "className", "style", "children", "gutter", "wrap"]),
                    y = u.useContext(f.E_),
                    w = y.getPrefixCls,
                    O = y.direction,
                    M = u.useState({
                        xs: !0,
                        sm: !0,
                        md: !0,
                        lg: !0,
                        xl: !0,
                        xxl: !0
                    }),
                    P = (0, l.Z)(M, 2),
                    E = P[0],
                    k = P[1],
                    B = function() {
                        var n = u.useState(!1),
                            t = (0, l.Z)(n, 2),
                            e = t[0],
                            r = t[1];
                        return u.useEffect((function() {
                            r(p())
                        }), []), e
                    }(),
                    F = u.useRef(g);
                u.useEffect((function() {
                    var n = x.ZP.subscribe((function(n) {
                        var t = F.current || 0;
                        (!Array.isArray(t) && "object" === (0, c.Z)(t) || Array.isArray(t) && ("object" === (0, c.Z)(t[0]) || "object" === (0, c.Z)(t[1]))) && k(n)
                    }));
                    return function() {
                        return x.ZP.unsubscribe(n)
                    }
                }), []);
                var V = w("row", r),
                    I = function() {
                        var n = [void 0, void 0];
                        return (Array.isArray(g) ? g : [g, void 0]).forEach((function(t, e) {
                            if ("object" === (0, c.Z)(t))
                                for (var r = 0; r < x.c4.length; r++) {
                                    var i = x.c4[r];
                                    if (E[i] && void 0 !== t[i]) {
                                        n[e] = t[i];
                                        break
                                    }
                                } else n[e] = t
                        })), n
                    }(),
                    S = s()(V, (e = {}, (0, o.Z)(e, "".concat(V, "-no-wrap"), !1 === v), (0, o.Z)(e, "".concat(V, "-").concat(a), a), (0, o.Z)(e, "".concat(V, "-").concat(d), d), (0, o.Z)(e, "".concat(V, "-rtl"), "rtl" === O), e), h),
                    H = {},
                    D = null != I[0] && I[0] > 0 ? I[0] / -2 : void 0,
                    z = null != I[1] && I[1] > 0 ? I[1] / -2 : void 0;
                if (D && (H.marginLeft = D, H.marginRight = D), B) {
                    var A = (0, l.Z)(I, 2);
                    H.rowGap = A[1]
                } else z && (H.marginTop = z, H.marginBottom = z);
                var N = (0, l.Z)(I, 2),
                    W = N[0],
                    _ = N[1],
                    T = u.useMemo((function() {
                        return {
                            gutter: [W, _],
                            wrap: v,
                            supportFlexGap: B
                        }
                    }), [W, _, v, B]);
                return u.createElement(L.Z.Provider, {
                    value: T
                }, u.createElement("div", (0, i.Z)({}, Z, {
                    className: S,
                    style: (0, i.Z)((0, i.Z)({}, H), m),
                    ref: t
                }), j))
            }))
        },
        71230: function(n, t, e) {
            "use strict";
            var r = e(14645);
            t.Z = r.Z
        },
        25813: function(n, t, e) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/connect", function() {
                return e(73351)
            }])
        },
        10573: function(n, t, e) {
            "use strict";
            var r = e(85893),
                i = e(67294),
                o = e(186),
                c = e(67383);

            function l(n, t, e) {
                return t in n ? Object.defineProperty(n, t, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[t] = e, n
            }

            function a(n) {
                for (var t = 1; t < arguments.length; t++) {
                    var e = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(e);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(e).filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    })))), r.forEach((function(t) {
                        l(n, t, e[t])
                    }))
                }
                return n
            }

            function s(n, t) {
                if (null == n) return {};
                var e, r, i = function(n, t) {
                    if (null == n) return {};
                    var e, r, i = {},
                        o = Object.keys(n);
                    for (r = 0; r < o.length; r++) e = o[r], t.indexOf(e) >= 0 || (i[e] = n[e]);
                    return i
                }(n, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(n);
                    for (r = 0; r < o.length; r++) e = o[r], t.indexOf(e) >= 0 || Object.prototype.propertyIsEnumerable.call(n, e) && (i[e] = n[e])
                }
                return i
            }

            function u(n, t) {
                return t || (t = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }

            function f() {
                var n = u([""]);
                return f = function() {
                    return n
                }, n
            }

            function d() {
                var n = u(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n\n  padding: 5px 10px;\n  border-radius: 6px;\n  /* background-color: rgba(255, 255, 255, 0.1); */\n  font-size: 20px;\n  font-weight: 300;\n"]);
                return d = function() {
                    return n
                }, n
            }

            function p() {
                var n = u(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"]);
                return p = function() {
                    return n
                }, n
            }

            function x() {
                var n = u(["\n  font-size: 20px;\n"]);
                return x = function() {
                    return n
                }, n
            }

            function h() {
                var n = u(["\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n"]);
                return h = function() {
                    return n
                }, n
            }

            function L() {
                var n = u(["\n  font-family: 'Helvetica';\n  font-size: 16px;\n  font-weight: bold;\n  white-space: nowrap;\n  overflow: hidden;\n"]);
                return L = function() {
                    return n
                }, n
            }
            var C = o.ZP.div.withConfig({
                    componentId: "sc-e97d4d46-0"
                })(f()),
                m = (0, o.ZP)(c.xv).attrs({
                    role: "button"
                }).withConfig({
                    componentId: "sc-e97d4d46-1"
                })(d(), (function(n) {
                    return n.theme.colors.primary
                })),
                j = o.ZP.div.withConfig({
                    componentId: "sc-e97d4d46-2"
                })(p(), (function(n) {
                    return n.isTooltipDisplayed ? "block" : "none"
                }), (function(n) {
                    return n.theme.colors.contrast
                }), (function(n) {
                    return n.theme.colors.invertedContrast
                })),
                b = (0, o.ZP)(c.xv).withConfig({
                    componentId: "sc-e97d4d46-3"
                })(x()),
                g = o.ZP.span.withConfig({
                    componentId: "sc-e97d4d46-4"
                })(h()),
                v = o.ZP.div.withConfig({
                    componentId: "sc-e97d4d46-5"
                })(L());
            t.Z = function(n) {
                var t = n.title,
                    e = n.value,
                    o = (n.height, n.children),
                    l = s(n, ["title", "value", "height", "children"]),
                    u = (0, i.useState)(!1),
                    f = u[0],
                    d = u[1];
                return (0, r.jsxs)(C, {
                    children: [(0, r.jsx)(b, {
                        children: t
                    }), (0, r.jsxs)(m, a({
                        small: !0,
                        bold: !0,
                        onClick: function() {
                            navigator.clipboard && (navigator.clipboard.writeText(e), d(!0), setTimeout((function() {
                                d(!1)
                            }), 1e3))
                        },
                        title: e
                    }, l, {
                        children: [(0, r.jsx)(v, {
                            children: o
                        }), (0, r.jsx)(g, {
                            children: (0, r.jsx)(c.kC, {
                                alignItems: "center",
                                justifyContent: "center",
                                background: "#00E39A1A",
                                ml: "1rem",
                                p: "6px 8px",
                                borderRadius: "8px",
                                children: (0, r.jsx)("img", {
                                    src: "/images/icons/copy.png",
                                    width: "16",
                                    alt: ""
                                })
                            })
                        }), (0, r.jsx)(j, {
                            isTooltipDisplayed: f,
                            children: "Copied"
                        })]
                    }))]
                })
            }
        },
        73351: function(n, t, e) {
            "use strict";
            e.r(t), e.d(t, {
                default: function() {
                    return z
                }
            });
            var r = e(85893),
                i = e(71230),
                o = e(15746),
                c = e(10573),
                l = e(34101),
                a = e(67294),
                s = e(67383);

            function u(n, t, e) {
                return t in n ? Object.defineProperty(n, t, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[t] = e, n
            }
            var f = function(n) {
                return (0, r.jsxs)(s.ny, function(n) {
                    for (var t = 1; t < arguments.length; t++) {
                        var e = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(e);
                        "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(e).filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })))), r.forEach((function(t) {
                            u(n, t, e[t])
                        }))
                    }
                    return n
                }({
                    viewBox: "0 0 96 96"
                }, n, {
                    children: [(0, r.jsx)("circle", {
                        cx: "48",
                        cy: "48",
                        r: "48",
                        fill: "white"
                    }), (0, r.jsx)("path", {
                        d: "M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z",
                        fill: "#E17726"
                    }), (0, r.jsx)("path", {
                        d: "M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z",
                        fill: "#E27625"
                    }), (0, r.jsx)("path", {
                        d: "M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z",
                        fill: "#E27625"
                    }), (0, r.jsx)("path", {
                        d: "M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z",
                        fill: "#E27625"
                    }), (0, r.jsx)("path", {
                        d: "M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z",
                        fill: "#E27625"
                    }), (0, r.jsx)("path", {
                        d: "M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z",
                        fill: "#E27625"
                    }), (0, r.jsx)("path", {
                        d: "M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z",
                        fill: "#E27625"
                    }), (0, r.jsx)("path", {
                        d: "M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z",
                        fill: "#E27625"
                    }), (0, r.jsx)("path", {
                        d: "M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z",
                        fill: "#D5BFB2"
                    }), (0, r.jsx)("path", {
                        d: "M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z",
                        fill: "#D5BFB2"
                    }), (0, r.jsx)("path", {
                        d: "M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z",
                        fill: "#233447"
                    }), (0, r.jsx)("path", {
                        d: "M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z",
                        fill: "#233447"
                    }), (0, r.jsx)("path", {
                        d: "M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z",
                        fill: "#CC6228"
                    }), (0, r.jsx)("path", {
                        d: "M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z",
                        fill: "#CC6228"
                    }), (0, r.jsx)("path", {
                        d: "M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z",
                        fill: "#CC6228"
                    }), (0, r.jsx)("path", {
                        d: "M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z",
                        fill: "#CC6228"
                    }), (0, r.jsx)("path", {
                        d: "M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z",
                        fill: "#E27525"
                    }), (0, r.jsx)("path", {
                        d: "M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z",
                        fill: "#E27525"
                    }), (0, r.jsx)("path", {
                        d: "M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z",
                        fill: "#E27525"
                    }), (0, r.jsx)("path", {
                        d: "M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z",
                        fill: "#E27525"
                    }), (0, r.jsx)("path", {
                        d: "M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z",
                        fill: "#F5841F"
                    }), (0, r.jsx)("path", {
                        d: "M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z",
                        fill: "#F5841F"
                    }), (0, r.jsx)("path", {
                        d: "M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z",
                        fill: "#C0AC9D"
                    }), (0, r.jsx)("path", {
                        d: "M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z",
                        fill: "#161616"
                    }), (0, r.jsx)("path", {
                        d: "M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z",
                        fill: "#763E1A"
                    }), (0, r.jsx)("path", {
                        d: "M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z",
                        fill: "#763E1A"
                    }), (0, r.jsx)("path", {
                        d: "M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z",
                        fill: "#F5841F"
                    }), (0, r.jsx)("path", {
                        d: "M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z",
                        fill: "#F5841F"
                    }), (0, r.jsx)("path", {
                        d: "M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z",
                        fill: "#F5841F"
                    })]
                }))
            };

            function d(n, t, e) {
                return t in n ? Object.defineProperty(n, t, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[t] = e, n
            }
            var p = function(n) {
                return (0, r.jsxs)(s.ny, function(n) {
                    for (var t = 1; t < arguments.length; t++) {
                        var e = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(e);
                        "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(e).filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })))), r.forEach((function(t) {
                            d(n, t, e[t])
                        }))
                    }
                    return n
                }({
                    viewBox: "0 0 96 96"
                }, n, {
                    children: [(0, r.jsx)("circle", {
                        cx: "48",
                        cy: "48",
                        r: "48",
                        fill: "white"
                    }), (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M66.4573 43.7107C64.8919 42.1452 64.8919 39.6071 66.4573 38.0416C68.0228 36.4762 70.5609 36.4762 72.1264 38.0416C73.6918 39.6071 73.6918 42.1452 72.1264 43.7107C70.5609 45.2762 68.0228 45.2762 66.4573 43.7107ZM52.9933 57.1747C51.8192 56.0006 51.8192 54.097 52.9933 52.9229C54.1674 51.7488 56.071 51.7488 57.2451 52.9229C58.4192 54.097 58.4192 56.0006 57.2451 57.1747C56.071 58.3488 54.1674 58.3488 52.9933 57.1747ZM74.2523 50.0884C73.0782 48.9143 73.0782 47.0107 74.2523 45.8366C75.4263 44.6625 77.3299 44.6625 78.504 45.8366C79.6781 47.0107 79.6781 48.9143 78.504 50.0884C77.3299 51.2625 75.4263 51.2625 74.2523 50.0884ZM67.166 57.1747C65.9919 56.0006 65.9919 54.097 67.166 52.9229C68.34 51.7488 70.2436 51.7488 71.4177 52.9229C72.5918 54.097 72.5918 56.0006 71.4177 57.1747C70.2436 58.3488 68.34 58.3488 67.166 57.1747ZM82.0472 56.466C81.2645 55.6833 81.2645 54.4142 82.0472 53.6315C82.8299 52.8488 84.099 52.8488 84.8817 53.6315C85.6644 54.4142 85.6644 55.6833 84.8817 56.466C84.099 57.2488 82.8299 57.2488 82.0472 56.466ZM74.9609 63.5523C74.1782 62.7696 74.1782 61.5005 74.9609 60.7178C75.7436 59.9351 77.0127 59.9351 77.7954 60.7178C78.5781 61.5005 78.5781 62.7696 77.7954 63.5523C77.0127 64.3351 75.7436 64.3351 74.9609 63.5523ZM59.371 50.797C57.8056 49.2315 57.8056 46.6934 59.371 45.1279C60.9365 43.5625 63.4746 43.5625 65.0401 45.1279C66.6055 46.6934 66.6055 49.2315 65.0401 50.797C63.4746 52.3625 60.9365 52.3625 59.371 50.797ZM59.371 36.6244C57.8056 35.0589 57.8056 32.5208 59.371 30.9553C60.9365 29.3899 63.4746 29.3899 65.0401 30.9553C66.6055 32.5208 66.6055 35.0589 65.0401 36.6244C63.4746 38.1898 60.9365 38.1898 59.371 36.6244ZM52.2847 43.7107C50.7193 42.1452 50.7193 39.6071 52.2847 38.0416C53.8502 36.4762 56.3883 36.4762 57.9538 38.0416C59.5192 39.6071 59.5192 42.1452 57.9538 43.7107C56.3883 45.2762 53.8502 45.2762 52.2847 43.7107ZM38.0462 43.7107C36.4808 42.1452 36.4808 39.6071 38.0462 38.0416C39.6117 36.4762 42.1498 36.4762 43.7153 38.0416C45.2807 39.6071 45.2807 42.1452 43.7153 43.7107C42.1498 45.2762 39.6117 45.2762 38.0462 43.7107ZM24.5823 57.1747C23.4082 56.0006 23.4082 54.097 24.5823 52.9229C25.7564 51.7488 27.66 51.7488 28.8341 52.9229C30.0081 54.097 30.0081 56.0006 28.8341 57.1747C27.66 58.3488 25.7564 58.3488 24.5823 57.1747ZM45.8412 50.0884C44.6671 48.9143 44.6671 47.0107 45.8412 45.8366C47.0153 44.6625 48.9189 44.6625 50.093 45.8366C51.2671 47.0107 51.2671 48.9143 50.093 50.0884C48.9189 51.2625 47.0153 51.2625 45.8412 50.0884ZM38.7549 57.1747C37.5808 56.0006 37.5808 54.097 38.7549 52.9229C39.929 51.7488 41.8326 51.7488 43.0067 52.9229C44.1807 54.097 44.1807 56.0006 43.0067 57.1747C41.8326 58.3488 39.929 58.3488 38.7549 57.1747ZM11.1183 56.466C10.3356 55.6833 10.3356 54.4142 11.1183 53.6315C11.901 52.8488 13.1701 52.8488 13.9528 53.6315C14.7356 54.4142 14.7356 55.6833 13.9528 56.466C13.1701 57.2488 11.901 57.2488 11.1183 56.466ZM18.2046 63.5523C17.4219 62.7696 17.4219 61.5005 18.2046 60.7178C18.9873 59.9351 20.2564 59.9351 21.0391 60.7178C21.8219 61.5005 21.8219 62.7696 21.0391 63.5523C20.2564 64.3351 18.9873 64.3351 18.2046 63.5523ZM46.5498 63.5523C45.7671 62.7696 45.7671 61.5005 46.5498 60.7178C47.3325 59.9351 48.6016 59.9351 49.3843 60.7178C50.1671 61.5005 50.1671 62.7696 49.3843 63.5523C48.6016 64.3351 47.3325 64.3351 46.5498 63.5523ZM17.496 50.0884C16.3219 48.9143 16.3219 47.0107 17.496 45.8366C18.6701 44.6625 20.5737 44.6625 21.7478 45.8366C22.9218 47.0107 22.9218 48.9143 21.7478 50.0884C20.5737 51.2625 18.6701 51.2625 17.496 50.0884ZM30.9599 50.797C29.3945 49.2315 29.3945 46.6934 30.9599 45.1279C32.5254 43.5625 35.0635 43.5625 36.629 45.1279C38.1944 46.6934 38.1944 49.2315 36.629 50.797C35.0635 52.3625 32.5254 52.3625 30.9599 50.797ZM30.9599 36.6244C29.3945 35.0589 29.3945 32.5208 30.9599 30.9553C32.5254 29.3899 35.0635 29.3899 36.629 30.9553C38.1944 32.5208 38.1944 35.0589 36.629 36.6244C35.0635 38.1898 32.5254 38.1898 30.9599 36.6244ZM23.8736 43.7107C22.3082 42.1452 22.3082 39.6071 23.8736 38.0416C25.4391 36.4762 27.9772 36.4762 29.5427 38.0416C31.1081 39.6071 31.1081 42.1452 29.5427 43.7107C27.9772 45.2762 25.4391 45.2762 23.8736 43.7107Z",
                        fill: "#1D222A"
                    })]
                }))
            };

            function x(n, t, e) {
                return t in n ? Object.defineProperty(n, t, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[t] = e, n
            }
            var h = function(n) {
                return (0, r.jsxs)(s.ny, function(n) {
                    for (var t = 1; t < arguments.length; t++) {
                        var e = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(e);
                        "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(e).filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })))), r.forEach((function(t) {
                            x(n, t, e[t])
                        }))
                    }
                    return n
                }({
                    viewBox: "0 0 96 96"
                }, n, {
                    children: [(0, r.jsx)("circle", {
                        cx: "48",
                        cy: "48",
                        r: "48",
                        fill: "white"
                    }), (0, r.jsx)("path", {
                        d: "M44.3288 35.3546V21.7134H19.0926C18.581 21.7134 18.24 22.0544 18.24 22.566V41.8342C18.24 42.3457 18.581 42.6867 19.0926 42.6867H28.8119V77.8129C28.8119 78.3244 29.153 78.6654 29.6645 78.6654H45.5224C46.0339 78.6654 46.375 78.3244 46.375 77.8129V35.3546H44.3288Z",
                        fill: "#29AEFF"
                    }), (0, r.jsx)("path", {
                        d: "M61.8919 17.2798H55.7534H39.2134C38.7019 17.2798 38.3608 17.6208 38.3608 18.1324V73.3792C38.3608 73.8908 38.7019 74.2318 39.2134 74.2318H55.0713C55.5829 74.2318 55.9239 73.8908 55.9239 73.3792V59.397H62.0624C73.6575 59.397 83.0358 50.0187 83.0358 38.4237C83.0358 26.6581 73.487 17.2798 61.8919 17.2798Z",
                        fill: "#2761E7"
                    })]
                }))
            };

            function L(n, t, e) {
                return t in n ? Object.defineProperty(n, t, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[t] = e, n
            }
            var C = function(n) {
                return (0, r.jsxs)(s.ny, function(n) {
                    for (var t = 1; t < arguments.length; t++) {
                        var e = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(e);
                        "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(e).filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })))), r.forEach((function(t) {
                            L(n, t, e[t])
                        }))
                    }
                    return n
                }({
                    viewBox: "0 0 96 96"
                }, n, {
                    children: [(0, r.jsxs)("g", {
                        clipPath: "url(#clip0)",
                        children: [(0, r.jsx)("path", {
                            d: "M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z",
                            fill: "#3375BB"
                        }), (0, r.jsx)("path", {
                            d: "M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z",
                            fill: "white"
                        })]
                    }), (0, r.jsx)("defs", {
                        children: (0, r.jsx)("clipPath", {
                            id: "clip0",
                            children: (0, r.jsx)("rect", {
                                width: "96",
                                height: "96",
                                fill: "white"
                            })
                        })
                    })]
                }))
            };

            function m(n, t, e) {
                return t in n ? Object.defineProperty(n, t, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[t] = e, n
            }
            var j = function(n) {
                return (0, r.jsxs)(s.ny, function(n) {
                    for (var t = 1; t < arguments.length; t++) {
                        var e = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(e);
                        "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(e).filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })))), r.forEach((function(t) {
                            m(n, t, e[t])
                        }))
                    }
                    return n
                }({
                    viewBox: "0 0 96 96"
                }, n, {
                    children: [(0, r.jsx)("path", {
                        d: "M96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96C74.5097 96 96 74.5097 96 48Z",
                        fill: "#3389FB"
                    }), (0, r.jsx)("path", {
                        d: "M29.6927 35.4245C39.8036 25.5252 56.1965 25.5252 66.3074 35.4245L67.5242 36.6159C68.0298 37.1109 68.0298 37.9134 67.5242 38.4084L63.3616 42.4839C63.1088 42.7314 62.699 42.7314 62.4462 42.4839L60.7717 40.8444C53.7181 33.9384 42.282 33.9384 35.2284 40.8444L33.4351 42.6002C33.1823 42.8477 32.7725 42.8477 32.5197 42.6002L28.3571 38.5247C27.8515 38.0297 27.8515 37.2272 28.3571 36.7322L29.6927 35.4245ZM74.9161 43.8532L78.6208 47.4805C79.1264 47.9755 79.1264 48.778 78.6208 49.2729L61.9159 65.6288C61.4103 66.1237 60.5907 66.1237 60.0851 65.6288C60.0851 65.6288 60.0851 65.6288 60.0851 65.6288L48.229 54.0206C48.1026 53.8968 47.8977 53.8968 47.7713 54.0206C47.7713 54.0206 47.7713 54.0206 47.7713 54.0206L35.9153 65.6288C35.4098 66.1237 34.5902 66.1237 34.0846 65.6288C34.0846 65.6288 34.0846 65.6288 34.0846 65.6288L17.3792 49.2727C16.8736 48.7778 16.8736 47.9753 17.3792 47.4803L21.0839 43.853C21.5895 43.3581 22.4091 43.3581 22.9146 43.853L34.771 55.4614C34.8974 55.5851 35.1023 55.5851 35.2287 55.4614C35.2287 55.4614 35.2287 55.4614 35.2287 55.4614L47.0844 43.853C47.59 43.358 48.4096 43.358 48.9152 43.853C48.9152 43.853 48.9152 43.853 48.9152 43.853L60.7715 55.4614C60.8979 55.5851 61.1028 55.5851 61.2292 55.4614L73.0854 43.8532C73.5909 43.3583 74.4105 43.3583 74.9161 43.8532Z",
                        fill: "white"
                    })]
                }))
            };

            function b(n, t, e) {
                return t in n ? Object.defineProperty(n, t, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[t] = e, n
            }
            var g = function(n) {
                    return (0, r.jsxs)(s.ny, function(n) {
                        for (var t = 1; t < arguments.length; t++) {
                            var e = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(e);
                            "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(e).filter((function(n) {
                                return Object.getOwnPropertyDescriptor(e, n).enumerable
                            })))), r.forEach((function(t) {
                                b(n, t, e[t])
                            }))
                        }
                        return n
                    }({
                        viewBox: "0 0 32 32"
                    }, n, {
                        children: [(0, r.jsx)("path", {
                            d: "M24 0H8C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0Z",
                            fill: "#1E2026"
                        }), (0, r.jsx)("path", {
                            d: "M16.2857 4L9.97035 7.6761L12.2922 9.03415L16.2857 6.7161L20.2792 9.03415L22.6011 7.6761L16.2857 4Z",
                            fill: "#F0B90B"
                        }), (0, r.jsx)("path", {
                            d: "M20.2792 10.9541L22.6011 12.3122V15.0283L18.6075 17.3463V21.9824L16.2857 23.3405L13.9639 21.9824V17.3463L9.97035 15.0283V12.3122L12.2922 10.9541L16.2857 13.2722L20.2792 10.9541Z",
                            fill: "#F0B90B"
                        }), (0, r.jsx)("path", {
                            d: "M22.6011 16.9483V19.6644L20.2792 21.0224V18.3063L22.6011 16.9483Z",
                            fill: "#F0B90B"
                        }), (0, r.jsx)("path", {
                            d: "M20.2561 22.9424L24.2496 20.6244V15.9883L26.5714 14.6302V21.9824L20.2561 25.6585V22.9424Z",
                            fill: "#F0B90B"
                        }), (0, r.jsx)("path", {
                            d: "M24.2496 11.3522L21.9278 9.99414L24.2496 8.63609L26.5714 9.99414V12.7102L24.2496 14.0683V11.3522Z",
                            fill: "#F0B90B"
                        }), (0, r.jsx)("path", {
                            d: "M13.9639 26.642V23.9259L16.2857 25.2839L18.6075 23.9259V26.642L16.2857 28L13.9639 26.642Z",
                            fill: "#F0B90B"
                        }), (0, r.jsx)("path", {
                            d: "M12.2922 21.0224L9.97035 19.6644V16.9483L12.2922 18.3063V21.0224Z",
                            fill: "#F0B90B"
                        }), (0, r.jsx)("path", {
                            d: "M16.2857 11.3522L13.9639 9.99414L16.2857 8.63609L18.6075 9.99414L16.2857 11.3522Z",
                            fill: "#F0B90B"
                        }), (0, r.jsx)("path", {
                            d: "M10.6437 9.99414L8.32183 11.3522V14.0683L6 12.7102V9.99414L8.32183 8.63609L10.6437 9.99414Z",
                            fill: "#F0B90B"
                        }), (0, r.jsx)("path", {
                            d: "M6 14.6302L8.32183 15.9883V20.6244L12.3154 22.9424V25.6585L6 21.9824V14.6302Z",
                            fill: "#F0B90B"
                        })]
                    }))
                },
                v = [{
                    title: "Metamask",
                    icon: f,
                    connectorId: l.Mt.Injected
                }, {
                    title: "TrustWallet",
                    icon: C,
                    connectorId: l.Mt.Injected
                }, {
                    title: "MathWallet",
                    icon: p,
                    connectorId: l.Mt.Injected
                }, {
                    title: "TokenPocket",
                    icon: h,
                    connectorId: l.Mt.Injected
                }, {
                    title: "WalletConnect",
                    icon: j,
                    connectorId: l.Mt.WalletConnect
                }, {
                    title: "Binance Chain Wallet",
                    icon: g,
                    connectorId: l.Mt.BSC
                }],
                Z = e(186),
                y = e(38566);

            function w() {
                var n, t, e = (n = ["\n  display: flex;\n  /* flex-direction: column; */\n  align-items: center;\n  /* justify-content: center; */\n  row-gap: 6px;\n  width: 100%;\n  /* height: 114px; */\n  padding: 10px 2rem;\n  border-radius: 10px;\n  cursor: pointer;\n  background: rgba(255, 255, 255, 0.1);\n\n  .modal-title {\n    color: #fff;\n    font-weight: 500;\n    font-size: 13px;\n    line-height: 20px;\n    letter-spacing: 0.04em;\n    text-shadow: 1px 7px 4px rgb(111 27 47 / 35%), 0px -1px 0px #b64034;\n    text-align: center;\n    transition: 0.3s ease;\n    margin-left: 2rem;\n  }\n  svg {\n    transition: 0.3s ease;\n  }\n\n  &:hover {\n    .modal-title {\n      font-size: 15px;\n    }\n    svg {\n      width: 42px;\n    }\n  }\n\n  ", " {\n    .modal-title {\n      font-size: 16px;\n      line-height: 100%;\n    }\n\n    &:hover {\n      .modal-title {\n        font-size: 18px;\n      }\n      svg {\n        width: 42px;\n      }\n    }\n  }\n"], t || (t = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(t)
                    }
                })));
                return w = function() {
                    return e
                }, e
            }
            var O = Z.ZP.div.withConfig({
                    componentId: "sc-aa934f6a-0"
                })(w(), (function(n) {
                    return n.theme.mediaQueries.sm
                })),
                M = function(n) {
                    var t = n.login,
                        e = n.walletConfig,
                        i = n.onDismiss,
                        o = e.title,
                        c = e.icon;
                    return (0, r.jsxs)(O, {
                        id: "wallet-connect-".concat(o.toLocaleLowerCase()),
                        onClick: function() {
                            t(e.connectorId), window.localStorage.setItem(y.OM, e.connectorId), i()
                        },
                        children: [(0, r.jsx)(c, {
                            width: "40px"
                        }), (0, r.jsx)("div", {
                            className: "modal-title",
                            children: o
                        })]
                    })
                },
                P = e(20316),
                E = e(18424),
                k = e(11163),
                B = e(9439);

            function F(n, t) {
                return t || (t = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }

            function V() {
                var n = F(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 20px;\n  .btn-logout {\n    width: fit-content;\n    margin: 0 auto;\n  }\n"]);
                return V = function() {
                    return n
                }, n
            }

            function I() {
                var n = F(["\n  /* background: #101724; */\n  min-height: 100vh;\n  padding-left: 24px;\n  padding-right: 24px;\n\n  .right-coin {\n    animation: upAndDown 2s infinite;\n    --transformX: 0%;\n    --transformY: 0%;\n  }\n\n  .left-coin {\n    animation: upAndDown 5s infinite;\n    --transformX: 0%;\n    --transformY: 0%;\n  }\n\n  .text-fill {\n    background: linear-gradient(249.52deg, #00ffa3 2.69%, #dc1fff 122.97%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    text-fill-color: transparent;\n  }\n"]);
                return I = function() {
                    return n
                }, n
            }
            var S = Z.ZP.div.withConfig({
                    componentId: "sc-d6cb8fd5-0"
                })(V()),
                H = Z.ZP.div.withConfig({
                    componentId: "sc-d6cb8fd5-1"
                })(I()),
                D = function() {
                    var n = (0, E.Z)(),
                        t = n.login,
                        e = n.logout,
                        l = (0, a.useState)(!1),
                        u = l[0],
                        f = l[1],
                        d = (0, P.Z)().account,
                        p = (0, k.useRouter)();
                    return (0, a.useEffect)((function() {
                        u && d && (f(!1), p.back())
                    }), [d, p, u]), (0, r.jsxs)(H, {
                        children: [(0, r.jsx)(s.xu, {
                            pt: "1rem",
                            children: (0, r.jsx)(s.rU, {
                                href: "/dashboard",
                                children: (0, r.jsx)("img", {
                                    src: "/images/logo.svg",
                                    alt: ""
                                })
                            })
                        }), (0, r.jsx)(s.xu, {
                            children: (0, r.jsxs)(i.Z, {
                                gutter: [24, 24],
                                children: [(0, r.jsx)(o.Z, {
                                    xs: 24,
                                    md: 12,
                                    children: (0, r.jsx)(s.xu, {
                                        position: "relative",
                                        children: (0, r.jsxs)(s.xu, {
                                            position: "relative",
                                            children: [(0, r.jsx)("img", {
                                                src: "/images/connect/bg.png",
                                                alt: "",
                                                style: {
                                                    animation: "linerShowHide 5s infinite"
                                                },
                                                width: "100%"
                                            }), (0, r.jsx)(s.xu, {
                                                position: "absolute",
                                                top: "27%",
                                                left: "22%",
                                                width: "61%",
                                                children: (0, r.jsx)("img", {
                                                    src: "/images/connect/wallet.png",
                                                    alt: "",
                                                    width: "100%"
                                                })
                                            }), (0, r.jsx)(s.xu, {
                                                position: "absolute",
                                                bottom: "2%",
                                                left: "7%",
                                                width: "21%",
                                                children: (0, r.jsx)("img", {
                                                    src: "/images/connect/left-coin.png",
                                                    alt: "",
                                                    className: "left-coin",
                                                    width: "100%"
                                                })
                                            }), (0, r.jsx)(s.xu, {
                                                position: "absolute",
                                                top: "19%",
                                                right: "14%",
                                                width: "17%",
                                                children: (0, r.jsx)("img", {
                                                    src: "/images/connect/right-coin.png",
                                                    alt: "",
                                                    className: "right-coin",
                                                    width: "100%"
                                                })
                                            })]
                                        })
                                    })
                                }), (0, r.jsx)(o.Z, {
                                    xs: 24,
                                    md: 12,
                                    children: (0, r.jsxs)(s.kC, {
                                        height: "100%",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        children: [(0, r.jsxs)(s.kC, {
                                            alignItems: "center",
                                            flexWrap: "wrap",
                                            children: [(0, r.jsx)(s.xu, {
                                                children: (0, r.jsx)("img", {
                                                    src: "/images/logo.svg",
                                                    alt: ""
                                                })
                                            }), (0, r.jsx)(s.xu, {
                                                height: "35px",
                                                borderLeft: "2px solid #FFFFFF",
                                                mx: "1rem"
                                            }), (0, r.jsx)(s.xv, {
                                                className: "text-fill",
                                                bold: !0,
                                                fontSize: "24px",
                                                children: "Web 3.0 Application"
                                            })]
                                        }), (0, r.jsx)(s.xv, {
                                            fontSize: "21px",
                                            mt: "1rem",
                                            children: "Connect by Web 3.0 Wallet"
                                        }), d ? (0, r.jsx)(s.xu, {
                                            mt: "2rem",
                                            width: "100%",
                                            maxWidth: "468px",
                                            children: (0, r.jsxs)(S, {
                                                children: [(0, r.jsx)(c.Z, {
                                                    title: "Your address",
                                                    value: d,
                                                    height: "44px",
                                                    children: d
                                                }), (0, r.jsxs)(s.kC, {
                                                    justifyContent: "center",
                                                    mt: "1rem",
                                                    alignItems: "center",
                                                    children: [(0, r.jsx)(B.Z, {
                                                        onClick: function() {
                                                            e(), window.localStorage.removeItem(y.OM)
                                                        },
                                                        children: "Logout"
                                                    }), (0, r.jsx)(B.Z, {
                                                        background: "#232323",
                                                        ml: "1rem",
                                                        onClick: function() {
                                                            return p.back()
                                                        },
                                                        children: "Back"
                                                    })]
                                                })]
                                            })
                                        }) : (0, r.jsxs)(s.xu, {
                                            mt: "1rem",
                                            children: [v.map((function(n) {
                                                return (0, r.jsx)(s.xu, {
                                                    mt: "1rem",
                                                    width: "100%",
                                                    maxWidth: "468px",
                                                    children: (0, r.jsx)(M, {
                                                        walletConfig: n,
                                                        login: function(n) {
                                                            t(n), f(!0)
                                                        },
                                                        onDismiss: function() {}
                                                    }, n.title)
                                                }, n.title)
                                            })), (0, r.jsx)(s.kC, {
                                                justifyContent: "center",
                                                mt: "1rem",
                                                alignItems: "center",
                                                maxWidth: "468px",
                                                children: (0, r.jsx)(B.Z, {
                                                    background: "#232323",
                                                    ml: "1rem",
                                                    onClick: function() {
                                                        return p.back()
                                                    },
                                                    children: "Back"
                                                })
                                            })]
                                        })]
                                    })
                                })]
                            })
                        })]
                    })
                };
            D.fullLayout = !0;
            var z = D
        }
    },
    function(n) {
        n.O(0, [9774, 2888, 179], (function() {
            return t = 25813, n(n.s = t);
            var t
        }));
        var t = n.O();
        _N_E = t
    }
]);
//# sourceMappingURL=connect-3ab9d0875fc033ae.js.map