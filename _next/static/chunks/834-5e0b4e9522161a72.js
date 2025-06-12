"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[834], {
    96834: (a, t, e) => {
        e.d(t, {
            $8: () => X,
            $p: () => s,
            DW: () => f,
            ED: () => A,
            I3: () => h,
            KP: () => d,
            LP: () => v,
            PM: () => C,
            SK: () => D,
            UW: () => y,
            V2: () => g,
            WK: () => z,
            Yg: () => E,
            Zi: () => l,
            Zw: () => I,
            gy: () => V,
            hu: () => u,
            iW: () => b,
            pG: () => p,
            qG: () => N,
            r1: () => o,
            uM: () => P,
            ug: () => n,
            wV: () => w,
            yF: () => c,
            yh: () => m,
            zz: () => i
        });
        var r = e(37063);
        e(44246);
        let n = async a => {
            var t, e;
            let {accessToken: n} = a
              , o = await r.A.get("https://id.onlive.vn/api-core/v2/oidc-service/oauth2/me", {
                headers: {
                    "X-Core-Api-Version": "v1",
                    Authorization: "Bearer " + n,
                    "X-Core-Client-Id": "97158af7fd8e46f8"
                }
            });
            return (null == o || null == (t = o.data) ? void 0 : t.data) ? null == o || null == (e = o.data) ? void 0 : e.data : null
        }
          , o = async a => {
            let {accessToken: t} = a;
            try {
                var e, n;
                let a = await r.A.get("https://id.onlive.vn/api-core/v2/oidc-service/accounts/balance", {
                    headers: {
                        "X-Core-Api-Version": "v1",
                        Authorization: "Bearer " + t
                    }
                });
                if (null == a || null == (e = a.data) ? void 0 : e.data)
                    return null == a || null == (n = a.data) ? void 0 : n.data.balance;
                throw Error("Error!")
            } catch (a) {
                return 0
            }
        }
          , i = async () => await r.A.get("https://api-game-portal.vplay.vn/api/popup/list?IsPublic=true&DomainName=vplay.onlive.vn").then(a => a.data.data ? a.data.data : null).catch(a => null)
          , s = async () => {
            let a = await r.A.get("".concat("https://api-game-portal.vplay.vn", "/api/game/list?IsPublic=true&PageNumber=1&PageSize=100"));
            return 200 === a.status ? a.data.data : []
        }
          , c = async (a, t) => {
            let e = await r.A.get("".concat("https://api-game-portal.vplay.vn", "/api/news/list?Status=ACTIVE&PageNumber=").concat(null != a ? a : 1, "&PageSize=").concat(null != t ? t : 7));
            return 200 === e.status ? e.data : []
        }
          , p = async a => {
            try {
                let t = await r.A.get("".concat("https://api-game-portal.vplay.vn", "/api/game/list?TypeId=").concat(a, "&IsPublic=true&PageNumber=1&PageSize=10"));
                if (200 === t.status)
                    return t.data.data;
                throw Error("Data not found!")
            } catch (a) {
                return []
            }
        }
          , l = async () => {
            try {
                let a = await r.A.get("".concat("https://api-game-portal.vplay.vn", "/api/album/images/list?PageNumber=1&PageSize=10"));
                if (200 === a.status)
                    return a.data.data;
                throw Error("Data not found!")
            } catch (a) {
                return []
            }
        }
          , d = async function() {
            let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5;
            try {
                let e = await r.A.get("".concat("https://api-game-portal.vplay.vn", "/api/video/list?IsPublic=true&PageNumber=").concat(null != a ? a : 1, "&PageSize=").concat(null != t ? t : 5));
                if (200 === e.status)
                    return e.data;
                throw Error("Data not found!")
            } catch (a) {
                return []
            }
        }
          , u = async a => {
            try {
                let t = await r.A.get("".concat("https://api-game-portal.vplay.vn", "/api/game/").concat(a));
                if (200 === t.status)
                    return t.data;
                throw Error("Data not found!")
            } catch (a) {
                return []
            }
        }
          , h = async a => {
            try {
                let t = await r.A.get("".concat("https://api-game-portal.vplay.vn", "/api/news/").concat(a));
                if (200 === t.status)
                    return t.data.data;
                throw Error("Data not found!")
            } catch (a) {
                return []
            }
        }
          , v = async a => {
            try {
                let t = await r.A.get("".concat("https://api-game-portal.vplay.vn", "/api/news/related?Id=").concat(a, "&PageNumber=1&PageSize=3"));
                if (200 === t.status)
                    return t.data.data;
                throw Error("Data not found!")
            } catch (a) {
                return []
            }
        }
          , g = async (a, t) => {
            try {
                let n = await r.A.get("".concat("https://api-game-portal.vplay.vn", "/api/gamer/info?CoreId=").concat(t), {
                    headers: {
                        Authorization: a
                    }
                });
                if (200 === n.status) {
                    var e;
                    return null == (e = n.data.data) ? void 0 : e.avatar
                }
                throw Error("Data not found!")
            } catch (a) {
                return []
            }
        }
          , f = async a => {
            try {
                let t = await r.A.get("".concat("https://api-game-portal.vplay.vn", "/api/frontend/search"), {
                    params: {
                        KeyWord: a
                    }
                });
                if (200 === t.status)
                    return t.data;
                throw Error("Data not found!")
            } catch (a) {
                return []
            }
        }
          , y = async () => {
            let a = [];
            return await r.A.get("https://hub.onlive.vn/webshop-api/giftcode/newest").then(t => {
                a = t.data.data
            }
            ).catch(a => {
                console.log(a)
            }
            ),
            a
        }
          , w = async (a, t) => {
            let e = {
                status: 0,
                data: {
                    code: 0
                }
            }
              , n = {
                itc: t.toUpperCase().trim(),
                ip: "127.0.0.1",
                os: "Web"
            };
            try {
                let t = await r.A.post("https://id.onlive.vn/api-core/v1/payment-service/partner/check_voucher_onlive", {
                    jwt: a,
                    client_id: "97158af7fd8e46f8",
                    data: n
                }, {
                    headers: {
                        "x-core-api-version": "v2",
                        "x-core-client-id": "97158af7fd8e46f8"
                    }
                });
                return e.status = t.status,
                e.data.code = t.data.code,
                console.log("line 749: ", t),
                t
            } catch (a) {
                console.log("line 753: ", a.response)
            }
            return e
        }
          , A = async (a, t) => {
            let e = {
                itc: t.toUpperCase().trim(),
                pmc: "VPLAY",
                mkc: "T009",
                pty: "ong",
                description: "Sử dụng thẻ để đổi qu\xe0",
                ip: "127.0.0.1",
                os: "Web"
            };
            try {
                let t = await r.A.post("https://id.onlive.vn/api-core/v1/payment-service/partner/card_onlive", {
                    jwt: a,
                    client_id: "97158af7fd8e46f8",
                    data: e
                }, {
                    headers: {
                        "x-core-api-version": "v2",
                        "x-core-client-id": "97158af7fd8e46f8"
                    }
                });
                return console.log("line 790: ", t),
                t
            } catch (a) {
                console.log("line 793: ", a.response)
            }
            return {
                status: 0,
                data: {
                    isSuccessed: !1
                }
            }
        }
          , m = async (a, t) => await r.A.get("https://hub.onlive.vn/webshop-api/giftcode/app/giftcodes", {
            headers: {
                "X-Core-Api-Version": "v2",
                Authorization: a,
                "X-Core-Client-Id": "97158af7fd8e46f8"
            },
            params: {
                appId: t
            }
        }).then(a => {
            var t;
            return 200 !== a.status ? [] : null == a || null == (t = a.data) ? void 0 : t.data
        }
        ).catch(a => [])
          , b = async (a, t) => await r.A.get("https://hub.onlive.vn/webshop-api/giftcode/app/info", {
            headers: {
                "X-Core-Api-Version": "v2",
                Authorization: a,
                "X-Core-Client-Id": "97158af7fd8e46f8"
            },
            params: {
                appId: t
            }
        }).then(a => a.data.data).catch(a => (console.log(a),
        {}))
          , C = async (a, t) => {
            try {
                return (await r.A.get("https://hub.onlive.vn/webshop-api/apps/servers", {
                    headers: {
                        "X-Core-Api-Version": "v2",
                        Authorization: a,
                        "X-Core-Client-Id": "97158af7fd8e46f8"
                    },
                    params: {
                        appId: t,
                        forPage: "giftcode"
                    }
                })).data
            } catch (a) {
                return console.log(a),
                []
            }
        }
          , I = async (a, t, e) => {
            try {
                return (await r.A.get("https://hub.onlive.vn/webshop-api/apps/characters", {
                    headers: {
                        Authorization: a,
                        "X-Core-Api-Version": "v2",
                        "X-Core-Client-Id": "97158af7fd8e46f8"
                    },
                    params: {
                        appId: t,
                        serverId: e
                    }
                })).data
            } catch (a) {
                return console.log(a),
                []
            }
        }
          , P = async (a, t, e, n, o, i, s) => {
            try {
                return (await r.A.post("https://hub.onlive.vn/webshop-api/giftcode/apply-by-code", {
                    appId: t,
                    characterId: e,
                    characterName: n,
                    code: o,
                    serverId: i,
                    serverName: s
                }, {
                    headers: {
                        "X-Core-Api-Version": "v2",
                        Authorization: a,
                        "X-Core-Client-Id": "97158af7fd8e46f8"
                    }
                })).data
            } catch (a) {
                return console.log(a),
                a.response.data
            }
        }
          , X = async (a, t, e) => {
            try {
                return (await r.A.post("https://hub.onlive.vn/webshop-api/giftcode/event/finish", {
                    appId: t,
                    giftcodeId: e
                }, {
                    headers: {
                        "X-Core-Api-Version": "v2",
                        Authorization: a,
                        "X-Core-Client-Id": "97158af7fd8e46f8"
                    }
                })).data
            } catch (a) {
                return a.response.data
            }
        }
          , z = async (a, t, e, n) => {
            try {
                return (await r.A.get("https://hub.onlive.vn/webshop-api/giftcode/app/history", {
                    headers: {
                        Authorization: a,
                        "X-Core-Api-Version": "v2",
                        "X-Core-Client-Id": "97158af7fd8e46f8"
                    },
                    params: {
                        appId: t,
                        fromDate: e,
                        toDate: n
                    }
                })).data
            } catch (a) {
                return console.log(a),
                []
            }
        }
          , V = async (a, t, e, n, o, i, s) => {
            try {
                return (await r.A.post("https://hub.onlive.vn/webshop-api/giftcode/apply-by-id", {
                    appId: t,
                    characterId: e,
                    characterName: n,
                    giftcodeId: o,
                    serverId: i,
                    serverName: s
                }, {
                    headers: {
                        "X-Core-Api-Version": "v2",
                        Authorization: a,
                        "X-Core-Client-Id": "97158af7fd8e46f8"
                    }
                })).data
            } catch (a) {
                return console.log(a),
                []
            }
        }
          , D = async a => {
            let t = !1;
            return await n({
                accessToken: a
            }).then(a => {
                t = null != a && !!a.Status
            }
            ),
            t
        }
          , E = async () => {
            try {
                return (await r.A.get("https://api-game-portal.vplay.vn/api/image-slide/list?DomainName=vplay.onlive.vn&IsPublic=true&ShortBy=true")).data.data
            } catch (a) {
                return []
            }
        }
          , N = async a => {
            let {accessToken: t} = a;
            try {
                return (await r.A.get("https://hub.onlive.vn/webshop-api/giftcode/apps", {
                    headers: {
                        Authorization: t,
                        "X-Core-Api-Version": "v2",
                        "X-Core-Client-Id": "97158af7fd8e46f8"
                    }
                })).data.data
            } catch (a) {
                return console.log(a),
                []
            }
        }
    }
}]);

