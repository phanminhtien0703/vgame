(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[974], {
    18945: (e, s, a) => {
        "use strict";
        a.d(s, {
            A: () => n
        });
        var i = a(95155)
          , t = a(6874)
          , l = a.n(t);
        let n = e => {
            let {title: s, isHidden: a, href: t} = e;
            return (0,
            i.jsxs)("div", {
                className: "d-flex justify-content-between align-items-center mb-3 text-white",
                children: [(0,
                i.jsx)("h3", {
                    className: "text-title",
                    children: s
                }), !a && (0,
                i.jsxs)(l(), {
                    href: t,
                    className: "d-flex align-items-center gap-2",
                    style: {
                        color: "#6C727F"
                    },
                    children: [(0,
                    i.jsx)("span", {
                        className: "text-navigate",
                        style: {
                            cursor: "pointer"
                        },
                        children: "Xem tất cả"
                    }), (0,
                    i.jsx)("img", {
                        src: "/icons/arrow.svg",
                        alt: ""
                    })]
                })]
            })
        }
    }
    ,
    27430: (e, s, a) => {
        "use strict";
        a.d(s, {
            A: () => r
        });
        var i = a(95155)
          , t = a(27677)
          , l = a(67269)
          , n = a(6874)
          , c = a.n(n);
        let r = e => {
            let {data: s, note: a} = e;
            return (0,
            i.jsx)("section", {
                className: "wrapper-slider",
                children: (0,
                i.jsx)(t.RC, {
                    autoplay: {
                        delay: 1e20,
                        disableOnInteraction: !1,
                        pauseOnMouseEnter: !0
                    },
                    loop: !0,
                    keyboard: !0,
                    rewind: !0,
                    noSwiping: !0,
                    pagination: {
                        clickable: !0,
                        renderBullet: function(e, s) {
                            return a ? '<span class="'.concat(s, ' custom-pagination-detailsGame"></span>') : '<span class="'.concat(s, ' custom-pagination-item"></span>')
                        }
                    },
                    slidesPerView: 1,
                    modules: [l.Ij, l.dK],
                    children: s.map( (e, s) => (0,
                    i.jsx)(t.qr, {
                        children: (0,
                        i.jsx)(c(), {
                            href: (null == e ? void 0 : e.targetLink) || "",
                            target: "_blank",
                            className: "item-banner",
                            children: (0,
                            i.jsx)("img", {
                                className: "object-fit-cover h-100 w-100",
                                src: (null == e ? void 0 : e.path) || (null == e ? void 0 : e.image),
                                alt: ""
                            })
                        })
                    }, s))
                })
            })
        }
    }
    ,
    47925: (e, s, a) => {
        "use strict";
        a.d(s, {
            default: () => N
        });
        var i = a(95155)
          , t = a(57383)
          , l = a(12115)
          , n = a(76188)
          , c = a(27677)
          , r = a(67269)
          , d = a(35695)
          , o = a(96834)
          , m = a(27430)
          , h = a(18945)
          , p = a(53180)
          , x = a(6874)
          , j = a.n(x);
        let u = (0,
        l.memo)(e => {
            let {data: s} = e;
            return (0,
            i.jsx)("a", {
                className: "promo_item",
                href: s.targetUrl,
                target: s.targetType,
                children: (0,
                i.jsx)("img", {
                    src: s.imageUrl,
                    alt: s.name
                })
            })
        }
        );
        var g = a(40364)
          , v = a(66766);
        let N = () => {
            let e = (0,
            n.A)()
              , s = (0,
            d.useRouter)();
            e.user,
            (0,
            d.usePathname)();
            let[a,x] = (0,
            l.useState)([])
              , [N,f] = (0,
            l.useState)([])
              , [w,b] = (0,
            l.useState)(!1)
              , [y,k] = (0,
            l.useState)(99)
              , [A,I] = (0,
            l.useState)(window.innerWidth)
              , [C,H] = (0,
            l.useState)([])
              , [_,S] = (0,
            l.useState)([])
              , [T,E] = (0,
            l.useState)([])
              , [G,P] = (0,
            l.useState)([])
              , [M,O] = (0,
            l.useState)([])
              , {isPlayVideo: U, setLoading: q, handle: {onPlayVideo: R, onPauseVideo: V}, activeIdVideo: B} = e
              , F = e => {
                e && s.push(e)
            }
              , K = async () => {
                let e = (await (0,
                o.zz)()).find(e => "HOME" === e.pagePosition);
                if (e && e.listImageItem.length > 0) {
                    if (t.A.get("popupHomeHistory"))
                        return void O([]);
                    O(e.listImageItem),
                    (0,
                    g.QH)("popupHomeHistory", "show")
                }
            }
            ;
            return (0,
            l.useEffect)( () => {
                q(!0);
                let e = t.A.get("game_token");
                return (0,
                o.Zi)().then(e => (q(!1),
                x(null == e ? void 0 : e.sort( (e, s) => e.sort < s.sort ? -1 : +(e.sort < s.sort))))),
                (0,
                o.$p)().then(e => f(e)),
                (0,
                o.Yg)().then(e => H(e)),
                K(),
                (0,
                o.qG)({
                    accessToken: e
                }).then(e => S(e)),
                (0,
                o.KP)().then(e => P(null == e ? void 0 : e.data)),
                (0,
                o.yF)(1, 4).then(e => E(null == e ? void 0 : e.data)),
                () => {
                    V()
                }
            }
            , []),
            (0,
            l.useEffect)( () => {
                A < 500 ? !0 == w ? k(99) : k(6) : A >= 500 && A < 700 ? !0 == w ? k(99) : k(8) : !0 == w ? k(99) : k(10)
            }
            , [A, w]),
            (0,
            l.useEffect)( () => {
                let e = document.body;
                M.length > 0 ? e.classList.add("not-scroll") : e.classList.remove("not-scroll")
            }
            , [M]),
            (0,
            i.jsxs)(i.Fragment, {
                children: [(0,
                i.jsx)(m.A, {
                    data: a
                }), (0,
                i.jsxs)("div", {
                    className: "home_menu",
                    children: [(0,
                    i.jsxs)(j(), {
                        href: (0,
                        g.Bq)(),
                        className: "item",
                        children: [(0,
                        i.jsx)(p.AH, {}), " ", (0,
                        i.jsx)("span", {
                            children: "Nạp OnG"
                        })]
                    }), (0,
                    i.jsxs)(j(), {
                        href: (0,
                        g.fT)(),
                        className: "item",
                        children: [(0,
                        i.jsx)(p.JM, {}), " ", (0,
                        i.jsx)("span", {
                            children: "T\xe0i khoản"
                        })]
                    }), (0,
                    i.jsxs)(j(), {
                        href: (0,
                        g.lA)(),
                        className: "item",
                        children: [(0,
                        i.jsx)(p.VA, {}), " ", (0,
                        i.jsx)("span", {
                            children: "Hỗ trợ"
                        })]
                    }), (0,
                    i.jsxs)(j(), {
                        href: (0,
                        g.XV)(),
                        className: "item",
                        children: [(0,
                        i.jsx)(p.ok, {}), " ", (0,
                        i.jsx)("span", {
                            children: "Giftcode"
                        })]
                    })]
                }), (0,
                i.jsxs)("div", {
                    className: "d-flex flex-column gap-5 mt-5",
                    style: {
                        margin: "0 12px"
                    },
                    children: [(0,
                    i.jsxs)("div", {
                        children: [(0,
                        i.jsx)(h.A, {
                            title: "GAME ĐỀ XUẤT",
                            isHidden: !1,
                            href: "/games"
                        }), (0,
                        i.jsx)("div", {
                            className: "product_list",
                            children: N.map( (e, s) => (0,
                            i.jsxs)(j(), {
                                href: 3 === e.type ? "play/".concat(null == e ? void 0 : e.id, " ") : "/games/".concat(null == e ? void 0 : e.id),
                                className: "item ".concat(s >= y ? "d-none" : ""),
                                children: [(0,
                                i.jsx)("div", {
                                    className: "img",
                                    children: (0,
                                    i.jsx)("img", {
                                        src: e.logoImage || "/images/imgGift.png",
                                        alt: ""
                                    })
                                }), (0,
                                i.jsxs)("div", {
                                    className: "desc",
                                    children: [(0,
                                    i.jsx)("h3", {
                                        className: "text-cover title-product ",
                                        children: e.name
                                    }), (0,
                                    i.jsx)("p", {
                                        children: e.gameType.name
                                    })]
                                })]
                            }, s))
                        }), (0,
                        i.jsxs)("div", {
                            className: "view_more",
                            children: [(0,
                            i.jsx)("span", {
                                className: "left"
                            }), !1 == w && (0,
                            i.jsxs)("span", {
                                className: "center",
                                onClick: () => b(!0),
                                children: ["Xem th\xeam ", (0,
                                i.jsx)(p.k5, {})]
                            }), !0 == w && (0,
                            i.jsxs)("span", {
                                className: "center",
                                onClick: () => b(!1),
                                children: ["Thu gọn ", (0,
                                i.jsx)(p.Hd, {})]
                            }), (0,
                            i.jsx)("span", {
                                className: "right"
                            })]
                        })]
                    }), (0,
                    i.jsxs)("div", {
                        className: "",
                        children: [(0,
                        i.jsx)(h.A, {
                            title: "KHUYẾN M\xc3I",
                            href: "",
                            isHidden: !0
                        }), (0,
                        i.jsx)("div", {
                            className: "list-product-info",
                            children: (0,
                            i.jsx)(c.RC, {
                                keyboard: !0,
                                noSwiping: !0,
                                spaceBetween: 24,
                                slidesPerView: "auto",
                                children: C.map( (e, s) => (0,
                                i.jsx)(c.qr, {
                                    children: (0,
                                    i.jsx)(u, {
                                        data: e
                                    })
                                }, s))
                            })
                        })]
                    }), (0,
                    i.jsxs)("div", {
                        className: "giftcode_list",
                        children: [(0,
                        i.jsx)(h.A, {
                            title: "GIFTCODE",
                            href: "https://giftcode.onlive.vn",
                            isHidden: !1
                        }), (0,
                        i.jsx)("div", {
                            className: "row",
                            children: _.map( (e, s) => (0,
                            i.jsx)("div", {
                                className: "col-12 col-sm-6",
                                children: (0,
                                i.jsxs)(j(), {
                                    href: "".concat("https://giftcode.onlive.vn", "/game/?appId=").concat(e.AppId),
                                    className: "item d-flex",
                                    children: [(0,
                                    i.jsx)("div", {
                                        className: "img",
                                        children: (0,
                                        i.jsx)("img", {
                                            src: e.AppImage,
                                            alt: ""
                                        })
                                    }), (0,
                                    i.jsxs)("div", {
                                        className: "detail",
                                        children: [(0,
                                        i.jsx)("h2", {
                                            children: e.AppName
                                        }), (0,
                                        i.jsxs)("p", {
                                            children: ["Giftcode: ", e.TotalGiftcode]
                                        }), (0,
                                        i.jsxs)("p", {
                                            children: ["Người nhận: ", e.TotalReceived]
                                        }), (0,
                                        i.jsx)("button", {
                                            className: "btn",
                                            children: "Nhận code"
                                        })]
                                    })]
                                })
                            }, s))
                        })]
                    }), (0,
                    i.jsxs)("div", {
                        className: "news-in-home",
                        children: [(0,
                        i.jsx)(h.A, {
                            title: "TIN TỨC",
                            href: "/tin-tuc/tin-tuc-moi-nhat",
                            isHidden: !1
                        }), (0,
                        i.jsx)("div", {
                            className: "row",
                            children: T.map(e => (0,
                            i.jsx)("div", {
                                className: "col-sm-6 mb-3",
                                style: {
                                    cursor: "pointer"
                                },
                                onClick: () => {
                                    F("/news/".concat(null == e ? void 0 : e.id))
                                }
                                ,
                                children: (0,
                                i.jsxs)("div", {
                                    className: "overflow-hidden news-item",
                                    children: [(0,
                                    i.jsx)("div", {
                                        className: "news-item-image",
                                        children: (0,
                                        i.jsx)("img", {
                                            src: null == e ? void 0 : e.image,
                                            alt: null == e ? void 0 : e.title
                                        })
                                    }), (0,
                                    i.jsxs)("div", {
                                        className: "news-item-content",
                                        children: [(0,
                                        i.jsx)("p", {
                                            children: null == e ? void 0 : e.title
                                        }), (0,
                                        i.jsx)("div", {
                                            className: "d-flex gap-2 flex-wrap mt-2",
                                            children: ((null == e ? void 0 : e.tag) || []).map(e => (0,
                                            i.jsx)("span", {
                                                className: "news-item-info",
                                                children: null == e ? void 0 : e.name
                                            }, e.id))
                                        })]
                                    })]
                                })
                            }, "news" + (null == e ? void 0 : e.id)))
                        })]
                    })]
                }), M.length > 0 && (0,
                i.jsx)("div", {
                    className: "popup-slider-container",
                    onClick: () => {
                        O([])
                    }
                    ,
                    children: (0,
                    i.jsx)
                })]
            })
        }
    }
    ,
    61485: (e, s, a) => {
        Promise.resolve().then(a.bind(a, 47925))
    }
}, e => {
    var s = s => e(e.s = s);
    e.O(0, [586, 942, 540, 677, 269, 212, 834, 8, 180, 441, 684, 358], () => s(61485)),
    _N_E = e.O()
}
]);
