(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[39], {
    51901: (e, n, r) => {
        "use strict";
        r.r(n),
        r.d(n, {
            default: () => i
        });
        var s = r(95155)
          , t = r(12115);
        function i(e) {
            let {error: n, reset: r} = e;
            return (0,
            t.useEffect)( () => {
                console.error(n)
            }
            , [n]),
            (0,
            s.jsxs)("div", {
                children: [(0,
                s.jsx)("h2", {
                    children: "Something went wrong!"
                }), (0,
                s.jsx)("button", {
                    onClick: () => r(),
                    children: "Try again"
                })]
            })
        }
    }
    ,
    88707: (e, n, r) => {
        Promise.resolve().then(r.bind(r, 51901))
    }
}, e => {
    var n = n => e(e.s = n);
    e.O(0, [441, 684, 358], () => n(88707)),
    _N_E = e.O()
}
]);
