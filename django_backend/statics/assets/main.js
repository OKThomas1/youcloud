import {S as D, i as R, s as W, e as Z, a as _, g as tt, t as C, c as et, b as H, d as h, L as Q, f as m, h as q, j as w, k as T, l as g, m as f, n as N, o as F, p as S, q as M, r as B, u as E, R as nt, v as J, w as lt} from "./vendor.js"
function st(s) {
  let t,
    e,
    n,
    a = s[2].username + "",
    r,
    o,
    u,
    c,
    b,
    p,
    i,
    l,
    d,
    v,
    $,
    L
  return (
    (b = new Q({props: {to: "nodejs", $$slots: {default: [ot]}, $$scope: {ctx: s}}})),
    (l = new Q({props: {to: "mysql", $$slots: {default: [it]}, $$scope: {ctx: s}}})),
    ($ = new Q({props: {to: "website", $$slots: {default: [ut]}, $$scope: {ctx: s}}})),
    {
      c() {
        ;(t = m("div")), (e = m("p")), (n = q("Hello ")), (r = q(a)), (o = w()), (u = m("div")), (c = m("div")), T(b.$$.fragment), (p = w()), (i = m("div")), T(l.$$.fragment), (d = w()), (v = m("div")), T($.$$.fragment), g(e, "class", "display-2"), g(t, "class", "container mt-5 d-flex justify-content-center"), g(c, "class", "col-md-4"), g(i, "class", "col-md-4"), g(v, "class", "col-md-4"), g(u, "class", "row bg-primary")
      },
      m(k, x) {
        _(k, t, x), f(t, e), f(e, n), f(e, r), _(k, o, x), _(k, u, x), f(u, c), N(b, c, null), f(u, p), f(u, i), N(l, i, null), f(u, d), f(u, v), N($, v, null), (L = !0)
      },
      p(k, x) {
        ;(!L || x & 4) && a !== (a = k[2].username + "") && F(r, a)
        const A = {}
        x & 8 && (A.$$scope = {dirty: x, ctx: k}), b.$set(A)
        const U = {}
        x & 8 && (U.$$scope = {dirty: x, ctx: k}), l.$set(U)
        const P = {}
        x & 8 && (P.$$scope = {dirty: x, ctx: k}), $.$set(P)
      },
      i(k) {
        L || (H(b.$$.fragment, k), H(l.$$.fragment, k), H($.$$.fragment, k), (L = !0))
      },
      o(k) {
        C(b.$$.fragment, k), C(l.$$.fragment, k), C($.$$.fragment, k), (L = !1)
      },
      d(k) {
        k && h(t), k && h(o), k && h(u), S(b), S(l), S($)
      }
    }
  )
}
function rt(s) {
  let t, e
  return {
    c() {
      ;(t = m("h1")), (e = q(s[1]))
    },
    m(n, a) {
      _(n, t, a), f(t, e)
    },
    p(n, a) {
      a & 2 && F(e, n[1])
    },
    i: M,
    o: M,
    d(n) {
      n && h(t)
    }
  }
}
function at(s) {
  let t
  return {
    c() {
      ;(t = m("div")), (t.innerHTML = '<div class="my-5 spinner-border text-primary" style="width: 10rem; height: 10rem;"></div>'), g(t, "class", "d-flex justify-content-center align-items-center")
    },
    m(e, n) {
      _(e, t, n)
    },
    p: M,
    i: M,
    o: M,
    d(e) {
      e && h(t)
    }
  }
}
function ot(s) {
  let t
  return {
    c() {
      ;(t = m("div")), (t.innerHTML = '<div class="card-header"><h2 class="h2 card-title">Node</h2></div>'), g(t, "class", "m-4 card")
    },
    m(e, n) {
      _(e, t, n)
    },
    d(e) {
      e && h(t)
    }
  }
}
function it(s) {
  let t
  return {
    c() {
      ;(t = m("div")), (t.innerHTML = '<div class="card-header"><h2 class="h2 card-title">mySQL</h2></div>'), g(t, "class", "m-4 card")
    },
    m(e, n) {
      _(e, t, n)
    },
    d(e) {
      e && h(t)
    }
  }
}
function ut(s) {
  let t
  return {
    c() {
      ;(t = m("div")), (t.innerHTML = '<div class="card-header"><h2 class="h2 card-title">Website</h2></div>'), g(t, "class", "m-4 card")
    },
    m(e, n) {
      _(e, t, n)
    },
    d(e) {
      e && h(t)
    }
  }
}
function ct(s) {
  let t, e, n, a
  const r = [at, rt, st],
    o = []
  function u(c, b) {
    return c[0] ? 0 : c[1] ? 1 : 2
  }
  return (
    (t = u(s)),
    (e = o[t] = r[t](s)),
    {
      c() {
        e.c(), (n = Z())
      },
      m(c, b) {
        o[t].m(c, b), _(c, n, b), (a = !0)
      },
      p(c, [b]) {
        let p = t
        ;(t = u(c)),
          t === p
            ? o[t].p(c, b)
            : (tt(),
              C(o[p], 1, 1, () => {
                o[p] = null
              }),
              et(),
              (e = o[t]),
              e ? e.p(c, b) : ((e = o[t] = r[t](c)), e.c()),
              H(e, 1),
              e.m(n.parentNode, n))
      },
      i(c) {
        a || (H(e), (a = !0))
      },
      o(c) {
        C(e), (a = !1)
      },
      d(c) {
        o[t].d(c), c && h(n)
      }
    }
  )
}
function ft(s, t, e) {
  let n = !0,
    a = null,
    r = null
  try {
    ;(r = {username: "Thomas", nodejsleft: 1, mysqlleft: 1, webstiesleft: 1}), (n = !1)
  } catch {
    ;(a = "could not get data"), (n = !1)
  }
  return [n, a, r]
}
class $t extends D {
  constructor(t) {
    super()
    R(this, t, ft, ct, W, {})
  }
}
function G(s, t, e) {
  const n = s.slice()
  return (n[2] = t[e]), n
}
function mt(s) {
  let t
  return {
    c() {
      ;(t = m("button")), (t.textContent = "Upload (New Page)"), g(t, "class", "btn btn-primary"), g(t, "type", "button")
    },
    m(e, n) {
      _(e, t, n)
    },
    d(e) {
      e && h(t)
    }
  }
}
function K(s) {
  let t,
    e,
    n = s[2].name + "",
    a,
    r,
    o,
    u = s[2].status + "",
    c,
    b,
    p,
    i
  return {
    c() {
      ;(t = m("tr")), (e = m("td")), (a = q(n)), (r = w()), (o = m("td")), (c = q(u)), (b = w()), (p = m("td")), (p.innerHTML = '<button class="btn btn-danger">Delete</button>'), (i = w())
    },
    m(l, d) {
      _(l, t, d), f(t, e), f(e, a), f(t, r), f(t, o), f(o, c), f(t, b), f(t, p), f(t, i)
    },
    p: M,
    d(l) {
      l && h(t)
    }
  }
}
function pt(s) {
  let t, e, n, a, r, o, u, c, b
  n = new Q({props: {to: "nodecreate", $$slots: {default: [mt]}, $$scope: {ctx: s}}})
  let p = s[0],
    i = []
  for (let l = 0; l < p.length; l += 1) i[l] = K(G(s, p, l))
  return {
    c() {
      ;(t = m("h1")),
        (t.textContent = "Node JS"),
        (e = w()),
        T(n.$$.fragment),
        (a = w()),
        (r = m("table")),
        (o = m("thead")),
        (o.innerHTML = `<tr><th>Name</th> 
      <th>Status</th> 
      <th>Remove</th></tr>`),
        (u = w()),
        (c = m("tbody"))
      for (let l = 0; l < i.length; l += 1) i[l].c()
      g(t, "class", "display-01"), g(r, "class", "table table-hover")
    },
    m(l, d) {
      _(l, t, d), _(l, e, d), N(n, l, d), _(l, a, d), _(l, r, d), f(r, o), f(r, u), f(r, c)
      for (let v = 0; v < i.length; v += 1) i[v].m(c, null)
      b = !0
    },
    p(l, [d]) {
      const v = {}
      if ((d & 32 && (v.$$scope = {dirty: d, ctx: l}), n.$set(v), d & 1)) {
        p = l[0]
        let $
        for ($ = 0; $ < p.length; $ += 1) {
          const L = G(l, p, $)
          i[$] ? i[$].p(L, d) : ((i[$] = K(L)), i[$].c(), i[$].m(c, null))
        }
        for (; $ < i.length; $ += 1) i[$].d(1)
        i.length = p.length
      }
    },
    i(l) {
      b || (H(n.$$.fragment, l), (b = !0))
    },
    o(l) {
      C(n.$$.fragment, l), (b = !1)
    },
    d(l) {
      l && h(t), l && h(e), S(n, l), l && h(a), l && h(r), B(i, l)
    }
  }
}
function dt(s) {
  return [[{name: "testscript", status: "running", id: 1}]]
}
class bt extends D {
  constructor(t) {
    super()
    R(this, t, dt, pt, W, {})
  }
}
function _t(s) {
  let t, e, n, a, r
  return {
    c() {
      ;(t = m("h1")),
        (t.textContent = "Website Upload"),
        (e = w()),
        (n = m("form")),
        (n.innerHTML = `<label for="script-input">Script Name</label> 
    <input id="script-input" type="text"/> 
    <input type="file"/> 
    <button class="btn btn-primary" type="submit">Upload</button>`),
        g(t, "class", "display-01")
    },
    m(o, u) {
      _(o, t, u), _(o, e, u), _(o, n, u), a || ((r = E(n, "submit", s[0])), (a = !0))
    },
    p: M,
    i: M,
    o: M,
    d(o) {
      o && h(t), o && h(e), o && h(n), (a = !1), r()
    }
  }
}
function ht(s) {
  try {
    let e = [{name: "testscript", status: "running", id: 1}]
  } catch {}
  return [e => {}]
}
class gt extends D {
  constructor(t) {
    super()
    R(this, t, ht, _t, W, {})
  }
}
function O(s, t, e) {
  const n = s.slice()
  return (n[2] = t[e]), n
}
function vt(s) {
  let t
  return {
    c() {
      ;(t = m("button")), (t.textContent = "Upload Database (New Page)"), g(t, "class", "btn btn-primary"), g(t, "type", "button")
    },
    m(e, n) {
      _(e, t, n)
    },
    d(e) {
      e && h(t)
    }
  }
}
function V(s) {
  let t,
    e,
    n = s[2].name + "",
    a,
    r,
    o,
    u = s[2].username + "",
    c,
    b,
    p,
    i
  return {
    c() {
      ;(t = m("tr")), (e = m("td")), (a = q(n)), (r = w()), (o = m("td")), (c = q(u)), (b = w()), (p = m("td")), (p.innerHTML = '<button class="btn btn-danger">Delete</button>'), (i = w())
    },
    m(l, d) {
      _(l, t, d), f(t, e), f(e, a), f(t, r), f(t, o), f(o, c), f(t, b), f(t, p), f(t, i)
    },
    p: M,
    d(l) {
      l && h(t)
    }
  }
}
function wt(s) {
  let t, e, n, a, r, o, u, c, b
  n = new Q({props: {to: "mysqlcreate", $$slots: {default: [vt]}, $$scope: {ctx: s}}})
  let p = s[0],
    i = []
  for (let l = 0; l < p.length; l += 1) i[l] = V(O(s, p, l))
  return {
    c() {
      ;(t = m("h1")),
        (t.textContent = "mySQL"),
        (e = w()),
        T(n.$$.fragment),
        (a = w()),
        (r = m("table")),
        (o = m("thead")),
        (o.innerHTML = `<tr><th>Database Name</th> 
      <th>username</th> 
      <th>Remove</th></tr>`),
        (u = w()),
        (c = m("tbody"))
      for (let l = 0; l < i.length; l += 1) i[l].c()
      g(t, "class", "display-02"), g(r, "class", "table table-hover")
    },
    m(l, d) {
      _(l, t, d), _(l, e, d), N(n, l, d), _(l, a, d), _(l, r, d), f(r, o), f(r, u), f(r, c)
      for (let v = 0; v < i.length; v += 1) i[v].m(c, null)
      b = !0
    },
    p(l, [d]) {
      const v = {}
      if ((d & 32 && (v.$$scope = {dirty: d, ctx: l}), n.$set(v), d & 1)) {
        p = l[0]
        let $
        for ($ = 0; $ < p.length; $ += 1) {
          const L = O(l, p, $)
          i[$] ? i[$].p(L, d) : ((i[$] = V(L)), i[$].c(), i[$].m(c, null))
        }
        for (; $ < i.length; $ += 1) i[$].d(1)
        i.length = p.length
      }
    },
    i(l) {
      b || (H(n.$$.fragment, l), (b = !0))
    },
    o(l) {
      C(n.$$.fragment, l), (b = !1)
    },
    d(l) {
      l && h(t), l && h(e), S(n, l), l && h(a), l && h(r), B(i, l)
    }
  }
}
function yt(s) {
  return [[{name: "testdb", username: "testusername", password: "huh?", id: 1}]]
}
class kt extends D {
  constructor(t) {
    super()
    R(this, t, yt, wt, W, {})
  }
}
function Lt(s) {
  let t, e, n, a, r
  return {
    c() {
      ;(t = m("h1")),
        (t.textContent = "Create Database"),
        (e = w()),
        (n = m("form")),
        (n.innerHTML = `<label for="database-name">Database Name</label> 
    <input id="database-name" type="text"/> 
    <label for="database-username">Username</label> 
    <input id="database-username" type="text"/> 
    <label for="database-password">Password</label> 
    <input id="database-password" type="password"/> 
    <button class="btn btn-primary" type="submit">Submit</button>`),
        g(t, "class", "display-01")
    },
    m(o, u) {
      _(o, t, u), _(o, e, u), _(o, n, u), a || ((r = E(n, "submit", s[0])), (a = !0))
    },
    p: M,
    i: M,
    o: M,
    d(o) {
      o && h(t), o && h(e), o && h(n), (a = !1), r()
    }
  }
}
function xt(s) {
  try {
    let e = [{name: "testdb", username: "testusername", password: "huh?", id: 1}]
  } catch {}
  return [e => {}]
}
class Ct extends D {
  constructor(t) {
    super()
    R(this, t, xt, Lt, W, {})
  }
}
function X(s, t, e) {
  const n = s.slice()
  return (n[2] = t[e]), n
}
function Ht(s) {
  let t
  return {
    c() {
      ;(t = m("button")), (t.textContent = "Upload (New Page)"), g(t, "class", "btn btn-primary"), g(t, "type", "button")
    },
    m(e, n) {
      _(e, t, n)
    },
    d(e) {
      e && h(t)
    }
  }
}
function Y(s) {
  let t,
    e,
    n = s[2].name + "",
    a,
    r,
    o,
    u = s[2].url + "",
    c,
    b,
    p,
    i
  return {
    c() {
      ;(t = m("tr")), (e = m("td")), (a = q(n)), (r = w()), (o = m("td")), (c = q(u)), (b = w()), (p = m("td")), (p.innerHTML = '<button class="btn btn-danger">Delete</button>'), (i = w())
    },
    m(l, d) {
      _(l, t, d), f(t, e), f(e, a), f(t, r), f(t, o), f(o, c), f(t, b), f(t, p), f(t, i)
    },
    p: M,
    d(l) {
      l && h(t)
    }
  }
}
function Mt(s) {
  let t, e, n, a, r, o, u, c, b
  n = new Q({props: {to: "websitecreate", $$slots: {default: [Ht]}, $$scope: {ctx: s}}})
  let p = s[0],
    i = []
  for (let l = 0; l < p.length; l += 1) i[l] = Y(X(s, p, l))
  return {
    c() {
      ;(t = m("h1")),
        (t.textContent = "Node JS"),
        (e = w()),
        T(n.$$.fragment),
        (a = w()),
        (r = m("table")),
        (o = m("thead")),
        (o.innerHTML = `<tr><th>Name</th> 
      <th>URL</th> 
      <th>Remove</th></tr>`),
        (u = w()),
        (c = m("tbody"))
      for (let l = 0; l < i.length; l += 1) i[l].c()
      g(t, "class", "display-01"), g(r, "class", "table table-hover")
    },
    m(l, d) {
      _(l, t, d), _(l, e, d), N(n, l, d), _(l, a, d), _(l, r, d), f(r, o), f(r, u), f(r, c)
      for (let v = 0; v < i.length; v += 1) i[v].m(c, null)
      b = !0
    },
    p(l, [d]) {
      const v = {}
      if ((d & 32 && (v.$$scope = {dirty: d, ctx: l}), n.$set(v), d & 1)) {
        p = l[0]
        let $
        for ($ = 0; $ < p.length; $ += 1) {
          const L = X(l, p, $)
          i[$] ? i[$].p(L, d) : ((i[$] = Y(L)), i[$].c(), i[$].m(c, null))
        }
        for (; $ < i.length; $ += 1) i[$].d(1)
        i.length = p.length
      }
    },
    i(l) {
      b || (H(n.$$.fragment, l), (b = !0))
    },
    o(l) {
      C(n.$$.fragment, l), (b = !1)
    },
    d(l) {
      l && h(t), l && h(e), S(n, l), l && h(a), l && h(r), B(i, l)
    }
  }
}
function Tt(s) {
  return [[{name: "testscript", url: "www.google.com", id: 1}]]
}
class Nt extends D {
  constructor(t) {
    super()
    R(this, t, Tt, Mt, W, {})
  }
}
function St(s) {
  let t, e, n, a, r
  return {
    c() {
      ;(t = m("h1")),
        (t.textContent = "Website Upload"),
        (e = w()),
        (n = m("form")),
        (n.innerHTML = `<label for="website-input">Website Name</label> 
    <input id="website-input" type="text"/> 
    <input type="file"/> 
    <button class="btn btn-primary" type="submit">Upload</button>`),
        g(t, "class", "display-01")
    },
    m(o, u) {
      _(o, t, u), _(o, e, u), _(o, n, u), a || ((r = E(n, "submit", s[0])), (a = !0))
    },
    p: M,
    i: M,
    o: M,
    d(o) {
      o && h(t), o && h(e), o && h(n), (a = !1), r()
    }
  }
}
function Ut(s) {
  try {
    let e = [{name: "testscript", status: "running", id: 1}]
  } catch {}
  return [e => {}]
}
class qt extends D {
  constructor(t) {
    super()
    R(this, t, Ut, St, W, {})
  }
}
function jt(s) {
  let t, e
  return {
    c() {
      ;(t = m("img")), lt(t.src, (e = "https://cdn.discordapp.com/attachments/1041569265813291048/1045169599433416744/logocroppped.png")) || g(t, "src", e), g(t, "alt", "youCloud")
    },
    m(n, a) {
      _(n, t, a)
    },
    d(n) {
      n && h(t)
    }
  }
}
function Dt(s) {
  let t, e
  return (
    (t = new $t({})),
    {
      c() {
        T(t.$$.fragment)
      },
      m(n, a) {
        N(t, n, a), (e = !0)
      },
      i(n) {
        e || (H(t.$$.fragment, n), (e = !0))
      },
      o(n) {
        C(t.$$.fragment, n), (e = !1)
      },
      d(n) {
        S(t, n)
      }
    }
  )
}
function Rt(s) {
  let t, e, n, a, r, o, u, c, b, p, i, l, d, v, $, L, k, x, A, U, P
  return (
    (n = new Q({props: {to: "/", $$slots: {default: [jt]}, $$scope: {ctx: s}}})),
    (c = new J({props: {path: "nodejs", component: bt}})),
    (p = new J({props: {path: "nodecreate", component: gt}})),
    (l = new J({props: {path: "mysql", component: kt}})),
    (v = new J({props: {path: "mysqlcreate", component: Ct}})),
    (L = new J({props: {path: "website", component: Nt}})),
    (x = new J({props: {path: "websitecreate", component: qt}})),
    (U = new J({props: {path: "/", $$slots: {default: [Dt]}, $$scope: {ctx: s}}})),
    {
      c() {
        ;(t = m("nav")),
          (e = m("div")),
          T(n.$$.fragment),
          (a = w()),
          (r = m("button")),
          (r.innerHTML = '<span class="navbar-toggler-icon"></span>'),
          (o = w()),
          (u = m("div")),
          T(c.$$.fragment),
          (b = w()),
          T(p.$$.fragment),
          (i = w()),
          T(l.$$.fragment),
          (d = w()),
          T(v.$$.fragment),
          ($ = w()),
          T(L.$$.fragment),
          (k = w()),
          T(x.$$.fragment),
          (A = w()),
          T(U.$$.fragment),
          g(r, "class", "navbar-toggler"),
          g(r, "type", "button"),
          g(r, "data-bs-toggle", "collapse"),
          g(r, "data-bs-target", "#navbarColor03"),
          g(r, "aria-controls", "navbarColor03"),
          g(r, "aria-expanded", "false"),
          g(r, "aria-label", "Toggle navigation"),
          g(e, "class", "container-fluid"),
          g(t, "class", "navbar navbar-expand-lg navbar-light bg-light"),
          g(u, "class", "container")
      },
      m(y, j) {
        _(y, t, j), f(t, e), N(n, e, null), f(e, a), f(e, r), _(y, o, j), _(y, u, j), N(c, u, null), f(u, b), N(p, u, null), f(u, i), N(l, u, null), f(u, d), N(v, u, null), f(u, $), N(L, u, null), f(u, k), N(x, u, null), f(u, A), N(U, u, null), (P = !0)
      },
      p(y, j) {
        const I = {}
        j & 2 && (I.$$scope = {dirty: j, ctx: y}), n.$set(I)
        const z = {}
        j & 2 && (z.$$scope = {dirty: j, ctx: y}), U.$set(z)
      },
      i(y) {
        P || (H(n.$$.fragment, y), H(c.$$.fragment, y), H(p.$$.fragment, y), H(l.$$.fragment, y), H(v.$$.fragment, y), H(L.$$.fragment, y), H(x.$$.fragment, y), H(U.$$.fragment, y), (P = !0))
      },
      o(y) {
        C(n.$$.fragment, y), C(c.$$.fragment, y), C(p.$$.fragment, y), C(l.$$.fragment, y), C(v.$$.fragment, y), C(L.$$.fragment, y), C(x.$$.fragment, y), C(U.$$.fragment, y), (P = !1)
      },
      d(y) {
        y && h(t), S(n), y && h(o), y && h(u), S(c), S(p), S(l), S(v), S(L), S(x), S(U)
      }
    }
  )
}
function Wt(s) {
  let t, e
  return (
    (t = new nt({props: {url: s[0], $$slots: {default: [Rt]}, $$scope: {ctx: s}}})),
    {
      c() {
        T(t.$$.fragment)
      },
      m(n, a) {
        N(t, n, a), (e = !0)
      },
      p(n, [a]) {
        const r = {}
        a & 1 && (r.url = n[0]), a & 2 && (r.$$scope = {dirty: a, ctx: n}), t.$set(r)
      },
      i(n) {
        e || (H(t.$$.fragment, n), (e = !0))
      },
      o(n) {
        C(t.$$.fragment, n), (e = !1)
      },
      d(n) {
        S(t, n)
      }
    }
  )
}
function Pt(s, t, e) {
  let {url: n = ""} = t
  return (
    (s.$$set = a => {
      "url" in a && e(0, (n = a.url))
    }),
    [n]
  )
}
class Qt extends D {
  constructor(t) {
    super()
    R(this, t, Pt, Wt, W, {url: 0})
  }
}
new Qt({target: document.getElementById("app")})
