(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [974], {
        18945: (e, s, a) => {
            "use strict";
            a.d(s, {
                A: () => n
            });
            var i = a(95155),
                t = a(6874),
                l = a.n(t);
            let n = e => {
                let { title: s, isHidden: a, href: t } = e;
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
                                    children: []
                                })]
                    })
            }
        },
        27430: (e, s, a) => {
            "use strict";
            a.d(s, {
                A: () => r
            });
            var i = a(95155),
                t = a(27677),
                l = a(67269),
                n = a(6874),
                c = a.n(n);
            const data = {
                data: [
                    { image: '/images/tmgt/tmgt-banner.png', link: 'https://new.yxtgym.com/y92.0l110/EdIf1XkalZCqknYO0sCRwA/Icch.html' },
                    { image: './images/ltg/ltg-banner.jpg', link: 'http://www.poopogame.com/url/2I3cOUjH' },
                    { image: './images/dvdl/dvdl-banner.jpg', link: 'http://www.poopogame.com/url/KCRAcDTh' }
                ],
                note: false // Hoặc true nếu muốn style khác cho pagination
            };
            let r = () => {
                let { data: s, note: a } = data;
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
                                    renderBullet: function (data, s) {
                                        return a ? '<span class="'.concat(s, ' custom-pagination-detailsGame"></span>') : '<span class="'.concat(s, ' custom-pagination-item"></span>')
                                    }
                                },
                                slidesPerView: 1,
                                modules: [l.Ij, l.dK],
                                children: s.map((item, index) =>
                                    (0, i.jsx)(t.qr, {
                                        children: (0, i.jsx)(c(), {
                                            href: item.link || "#",
                                            target: "_blank",
                                            className: "item-banner",
                                            children: (0, i.jsx)("img", {
                                                className: "object-fit-cover h-100 w-100",
                                                src: item.image || "",
                                                alt: ""
                                            })
                                        })
                                    }, index)
                                )

                            })
                    })
            }
        },
        47925: (e, s, a) => {
            "use strict";
            a.d(s, {
                default: () => N
            });
            var i = a(95155),
                t = a(57383),
                l = a(12115),
                n = a(76188),
                c = a(27677),
                r = a(67269),
                d = a(35695),
                o = a(96834),
                m = a(27430),
                h = a(18945),
                p = a(53180),
                x = a(6874),
                j = a.n(x);
            let u = (0,
                l.memo)(e => {
                    let { data: s } = e;
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
                });
            var g = a(40364),
                v = a(66766);

            const dataGame = [{
                id: 1,
                name: "Linh Tiêu Giới",
                logoImage: "./images/ltg/ltg-logo.jpg",
                type: 3,
                gameType: { name: "game hot" },
                href: "http://www.poopogame.com/url/2I3cOUjH"
            },
            {
                id: 2,
                name: "Thần Ma Giáng Thế",
                logoImage: "./images/tmgt/tmgt-logo.png",
                type: 3,
                gameType: { name: "game mới" },
                href: "https://new.yxtgym.com/y92.0l110/EdIf1XkalZCqknYO0sCRwA/Icch.html"
            },
            {
                id: 3,
                name: "Đế Vương Đại Lục",
                logoImage: "./images/dvdl/dvdl-logo.jpg",
                type: 3,
                gameType: { name: "game mới" },
                href: "http://www.poopogame.com/url/KCRAcDTh"
            },
            {
                id: 4,
                name: "Infinity Kingdom",
                logoImage: "./images/ik/ik-logo.png",
                type: 3,
                gameType: { name: "game mới" },
                href: "https://yzdpik.onelink.me/Llhn?af_xp=social&pid=IK-CPS&c=IFK-CPS-13902&af_dp=yzdpik%3A%2F%2F"
            },
            {
                id: 5,
                name: "Ethereal Slayer",
                logoImage: "./images/es/es-logo.jpg",
                type: 3,
                gameType: { name: "game mới" },
                href: "https://app.adjust.com/1sokpzx5"
            }
            ];

            const dataGiftcode = [
                {
                    id: 1,
                    name: "Linh Tiêu Giới",
                    image: "./images/ltg/ltg-logo.jpg", // link ảnh
                    totalGiftcode: 300,
                    totalReceived: 281,
                    type: 1,
                    text: "Nhận code game Linh Tiêu Giới",
                },
                {
                    id: 2,
                    name: "Thần Ma Giáng Thế",
                    image: "./images/tmgt/tmgt-logo.png",
                    totalGiftcode: 500,
                    totalReceived: 412,
                    type: 2,
                    text: "Nhận code game Thần Ma Giáng Thế",
                },
                {
                    id: 3,
                    name: "Đế Vương Đại Lục",
                    image: "./images/dvdl/dvdl-logo.jpg",
                    totalGiftcode: 300,
                    totalReceived: 90,
                    type: 3,
                    text: "Nhận code game Đế Vương Đại Lục",
                },
                {
                    id: 4,
                    name: "Infinity Kingdom",
                    image: "./images/ik/ik-logo.png",
                    totalGiftcode: 200,
                    totalReceived: 151,
                    type: 4,
                    text: "Nhận code game Infinity Kingdom",
                },
                {
                    id: 5,
                    name: "Ethereal Slayer",
                    image: "./images/es/es-logo.jpg",
                    totalGiftcode: 200,
                    totalReceived: 124,
                    type: 5,
                    text: "Nhận code game Ethereal Slayer",
                }

            ];

            const dataWelfare = [
                {
                    id: 1,
                    title: "Hỗ trợ nạp x4",
                    image: "./images/welfare/ho-tro-nap-x4.png",
                    href: "https://www.facebook.com/share/p/1F8qAYyrpa/"
                },
                {
                    id: 2,
                    title: "Người cũ quay về",
                    image: "./images/welfare/nguoi-cu-quay-ve.png",
                    href: "https://www.facebook.com/share/p/169XL1LJ39/"
                }
            ];

            const dataNews = [{
                id: 1,
                title: "Linh Tiêu Giới - Khai mở server lúc 13h Thứ 2 hàng tuần",
                image: "./images/ltg/ltg-banner.jpg",
                tag: [
                    { id: "tag1", name: "04-09-2025" },
                ],
                href: "http://www.poopogame.com/url/2I3cOUjH"
            },
            {
                id: 2,
                title: "Thần Ma Giáng Thế - Khai mở server lúc 13h Thứ 4 & 7 hàng tuần",
                image: "./images/tmgt/tmgt-banner.png",
                tag: [
                    { id: "tag2", name: "04-09-2025" }
                ],
                href: "https://new.yxtgym.com/y92.0l110/EdIf1XkalZCqknYO0sCRwA/Icch.html"
            },
            {
                id: 3,
                title: "Đế Vương Đại Lục - Khai mở server lúc 13h Thứ 3 & 6 hàng tuần",
                image: "./images/dvdl/dvdl-banner.jpg",
                tag: [
                    { id: "tag3", name: "04-09-2025" }
                ],
                href: "http://www.poopogame.com/url/KCRAcDTh"
            },
            {
                id: 4,
                title: "Infinity Kingdom - is a real-time strategy game based in a land of magic and alchemy.",
                image: "./images/ik/ik-banner.png",
                tag: [
                    { id: "tag4", name: "15-09-2025" }
                ],
                href: "https://yzdpik.onelink.me/Llhn?af_xp=social&pid=IK-CPS&c=IFK-CPS-13902&af_dp=yzdpik%3A%2F%2F"
            },
            {
                id: 5,
                title: "Ethereal Slayer - A Xianxia-inspired 3D MMORPG with real-time aerial combat, 100+ skills, and epic realms to explore.",
                image: "./images/es/es-banner.jpg",
                tag: [
                    { id: "tag5", name: "15-09-2025" }
                ],
                href: "https://app.adjust.com/1sokpzx5"
            }
            ];

            const dataMenu = [{
                id: 1,
                name: "Hỗ trợ",
                link: "https://www.facebook.com/gamemobilestudio"
            },]

            let N = () => {
                let e = (0,
                    n.A)(),
                    s = (0,
                        d.useRouter)();
                e.user,
                    (0,
                        d.usePathname)();
                let [a, x] = (0,
                    l.useState)([]), [N, f] = (0,
                        l.useState)([]), [w, b] = (0,
                            l.useState)(!1), [y, k] = (0,
                                l.useState)(99), [A, I] = (0,
                                    l.useState)(window.innerWidth), [C, H] = (0,
                                        l.useState)([]), [_, S] = (0,
                                            l.useState)([]), [T, E] = (0,
                                                l.useState)([]), [G, P] = (0,
                                                    l.useState)([]), [M, O] = (0,
                                                        l.useState)([]), { isPlayVideo: U, setLoading: q, handle: { onPlayVideo: R, onPauseVideo: V }, activeIdVideo: B } = e, F = e => {
                                                            e && s.push(e)
                                                        }, K = async () => {
                                                            let e = (await (0,
                                                                o.zz)()).find(e => "HOME" === e.pagePosition);
                                                            if (e && e.listImageItem.length > 0) {
                                                                if (t.A.get("popupHomeHistory"))
                                                                    return void O([]);
                                                                O(e.listImageItem),
                                                                    (0,
                                                                        g.QH)("popupHomeHistory", "show")
                                                            }
                                                        };
                return (0,
                    l.useEffect)(() => {
                        q(!0);
                        let e = t.A.get("game_token");
                        return (0,
                            o.Zi)().then(e => (q(!1),
                                x(null == e ? void 0 : e.sort((e, s) => e.sort < s.sort ? -1 : +(e.sort < s.sort))))),
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
                    }, []),
                    (0,
                        l.useEffect)(() => {
                            A < 500 ? !0 == w ? k(99) : k(6) : A >= 500 && A < 700 ? !0 == w ? k(99) : k(8) : !0 == w ? k(99) : k(10)
                        }, [A, w]),
                    (0,
                        l.useEffect)(() => {
                            let e = document.body;
                            M.length > 0 ? e.classList.add("not-scroll") : e.classList.remove("not-scroll")
                        }, [M]),
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
                                                href: (
                                                    dataMenu[0].link),
                                                className: "item",
                                                children: [(0,
                                                    i.jsx)(p.VA, {}), " ", (0,
                                                        i.jsx)("span", {
                                                            children: "Hỗ trợ"
                                                        })]
                                            }), (0,
                                                i.jsxs)(j(), {
                                                    href: (dataMenu[0].link),
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
                                                                children: dataGame.map((e, s) => (0,
                                                                    i.jsxs)(j(), {
                                                                        href: e.href || (e.type === 3 ? `/play/${e.id}` : `/games/${e.id}`),
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
                                                }), (0, i.jsxs)("div", {
                                                className: "welfare",
                                                children: [
                                                    (0, i.jsxs)("div", {
                                                        className: "d-flex justify-content-between align-items-center mb-3 text-white",
                                                        children: [
                                                            (0, i.jsx)("h3", {
                                                                className: "text-title",
                                                                children: "KHUYẾN MÃI"
                                                            })
                                                        ]
                                                    }),
                                                    (0, i.jsx)("div", {
                                                        className: "list-product-info",
                                                        children: (0, i.jsx)(c.RC, { // RC = Swiper
                                                            spaceBetween: 24,
                                                            slidesPerView: "auto",
                                                            freeMode: !0,
                                                            keyboard: !0,
                                                            noSwiping: !0,
                                                            children: dataWelfare.map((e) =>
                                                                (0, i.jsx)(c.qr, { // qr = SwiperSlide
                                                                    children: (0, i.jsx)("a", {
                                                                        className: "promo_item",
                                                                        href: e.href,
                                                                        target: "_blank",
                                                                        children: (0, i.jsx)("img", {
                                                                            src: e.image,
                                                                            alt: e.title,
                                                                            style: {
                                                                                width: "505px",
                                                                                height: "266px",
                                                                                objectFit: "cover",
                                                                                borderRadius: "8px"
                                                                            }
                                                                        })
                                                                    })
                                                                }, e.id)
                                                            )
                                                        })
                                                    })
                                                ]
                                            }),
                                                    (0, i.jsxs)("div", {
                                                        className: "giftcode_list",
                                                        children: [
                                                            // Header
                                                            (0, i.jsxs)("div", {
                                                                className: "d-flex justify-content-between align-items-center mb-3 text-white",
                                                                children: [
                                                                    (0, i.jsx)("h3", {
                                                                        className: "text-title",
                                                                        children: "GIFTCODE"
                                                                    }),
                                                                ]
                                                            }),

                                                            // List Giftcode
                                                            (0, i.jsx)("div", {
                                                                className: "row",
                                                                children: dataGiftcode.map((e, s) =>
                                                                    (0, i.jsx)("div", {
                                                                        className: "col-12 col-sm-6",
                                                                        children: (0, i.jsxs)("div", {   // ⚡ đổi a -> div bọc ngoài
                                                                            className: "item d-flex",
                                                                            children: [
                                                                                (0, i.jsx)("div", {
                                                                                    className: "img",
                                                                                    children: (0, i.jsx)("img", {
                                                                                        src: e.image || "https://via.placeholder.com/80x80",
                                                                                        alt: e.name || "giftcode image"
                                                                                    })
                                                                                }),
                                                                                (0, i.jsxs)("div", {
                                                                                    className: "detail",
                                                                                    children: [
                                                                                        (0, i.jsx)("h2", { children: e.name }),
                                                                                        (0, i.jsx)("p", { children: `Giftcode: ${e.totalGiftcode || 0}` }),
                                                                                        (0, i.jsx)("p", { children: `Người nhận: ${e.totalReceived || 0}` }),
                                                                                        (0, i.jsx)("a", {
                                                                                            className: "btn",
                                                                                            href: `https://m.me/gamemobilestudio?text=${encodeURIComponent(e.text)}`,
                                                                                            target: "_blank",
                                                                                            rel: "noopener noreferrer",
                                                                                            children: "Nhận code"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    }, s)
                                                                )
                                                            })
                                                        ]
                                                    })
                                                , (0, i.jsxs)("div", {
                                                    className: "news-in-home",
                                                    children: [
                                                        (0, i.jsx)(h.A, {
                                                            title: "TIN TỨC",
                                                            href: "",
                                                            isHidden: !1
                                                        }),
                                                        (0, i.jsx)("div", {
                                                            className: "row",
                                                            children: dataNews.map(news => (
                                                                (0, i.jsx)("div", {
                                                                    className: "col-sm-6 mb-3",
                                                                    style: { cursor: "pointer" },
                                                                    onClick: () => F(news.href),
                                                                    children: (0, i.jsxs)("div", {
                                                                        className: "news-item overflow-hidden",
                                                                        children: [
                                                                            (0, i.jsx)("div", {
                                                                                className: "news-item-image",
                                                                                children: (0, i.jsx)("img", {
                                                                                    src: news.image,
                                                                                    alt: news.title
                                                                                })
                                                                            }),
                                                                            (0, i.jsxs)("div", {
                                                                                className: "news-item-content",
                                                                                children: [
                                                                                    (0, i.jsx)("p", { children: news.title }),
                                                                                    (0, i.jsx)("div", {
                                                                                        className: "d-flex gap-2 flex-wrap mt-2",
                                                                                        children: (news.tag || []).map(tag =>
                                                                                            (0, i.jsx)("span", {
                                                                                                className: "news-item-info",
                                                                                                children: tag.name
                                                                                            }, tag.id)
                                                                                        )
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                }, "news" + news.id)
                                                            ))
                                                        })
                                                    ]
                                                })]
                                        }), M.length > 0 && (0,
                                            i.jsx)("div", {
                                                className: "popup-slider-container",
                                                onClick: () => {
                                                    O([])
                                                },
                                                children: (0,
                                                    i.jsx)
                                            })]
                        })
            }
        },
        61485: (e, s, a) => {
            Promise.resolve().then(a.bind(a, 47925))
        }
    },
    e => {
        var s = s => e(e.s = s);
        e.O(0, [586, 942, 540, 677, 269, 212, 834, 8, 180, 441, 684, 358], () => s(61485)),
            _N_E = e.O()
    }
]);