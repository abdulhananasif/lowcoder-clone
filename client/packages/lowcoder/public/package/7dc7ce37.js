var Li = (t, e, r) => new Promise((a, n) => {
  var i = (l) => {
    try {
      o(r.next(l));
    } catch (u) {
      n(u);
    }
  }, s = (l) => {
    try {
      o(r.throw(l));
    } catch (u) {
      n(u);
    }
  }, o = (l) => l.done ? a(l.value) : Promise.resolve(l.value).then(i, s);
  o((r = r.apply(t, e)).next());
});
import { P as Vt, Q as Xs, l as ur, c as Qn, T as Ul, t as Hl, V as _a, d as Ua, h as Yl, as as Xl, at as Wl, au as ql, X as Kl } from "./1269154d.js";
import { a as Zl } from "./945d7302.js";
function Ql(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var la = Ql, Jl = typeof Vt == "object" && Vt && Vt.Object === Object && Vt, jl = Jl, eu = jl, tu = typeof self == "object" && self && self.Object === Object && self, ru = eu || tu || Function("return this")(), tn = ru, au = tn, nu = function() {
  return au.Date.now();
}, iu = nu, su = /\s/;
function ou(t) {
  for (var e = t.length; e-- && su.test(t.charAt(e)); )
    ;
  return e;
}
var lu = ou, uu = lu, fu = /^\s+/;
function hu(t) {
  return t && t.slice(0, uu(t) + 1).replace(fu, "");
}
var vu = hu, cu = tn, du = cu.Symbol, Jn = du, Ai = Jn, Ws = Object.prototype, gu = Ws.hasOwnProperty, pu = Ws.toString, Vr = Ai ? Ai.toStringTag : void 0;
function yu(t) {
  var e = gu.call(t, Vr), r = t[Vr];
  try {
    t[Vr] = void 0;
    var a = !0;
  } catch (i) {
  }
  var n = pu.call(t);
  return a && (e ? t[Vr] = r : delete t[Vr]), n;
}
var mu = yu, bu = Object.prototype, Eu = bu.toString;
function wu(t) {
  return Eu.call(t);
}
var xu = wu, Oi = Jn, Tu = mu, Cu = xu, Du = "[object Null]", Su = "[object Undefined]", Ni = Oi ? Oi.toStringTag : void 0;
function Lu(t) {
  return t == null ? t === void 0 ? Su : Du : Ni && Ni in Object(t) ? Tu(t) : Cu(t);
}
var qs = Lu;
function Au(t) {
  return t != null && typeof t == "object";
}
var Ou = Au, Nu = qs, Iu = Ou, Mu = "[object Symbol]";
function Ru(t) {
  return typeof t == "symbol" || Iu(t) && Nu(t) == Mu;
}
var ua = Ru, ku = vu, Ii = la, Pu = ua, Mi = 0 / 0, Bu = /^[-+]0x[0-9a-f]+$/i, Fu = /^0b[01]+$/i, Gu = /^0o[0-7]+$/i, zu = parseInt;
function $u(t) {
  if (typeof t == "number")
    return t;
  if (Pu(t))
    return Mi;
  if (Ii(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = Ii(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = ku(t);
  var r = Fu.test(t);
  return r || Gu.test(t) ? zu(t.slice(2), r ? 2 : 8) : Bu.test(t) ? Mi : +t;
}
var Vu = $u, _u = la, Tn = iu, Ri = Vu, Uu = "Expected a function", Hu = Math.max, Yu = Math.min;
function Xu(t, e, r) {
  var a, n, i, s, o, l, u = 0, f = !1, h = !1, c = !0;
  if (typeof t != "function")
    throw new TypeError(Uu);
  e = Ri(e) || 0, _u(r) && (f = !!r.leading, h = "maxWait" in r, i = h ? Hu(Ri(r.maxWait) || 0, e) : i, c = "trailing" in r ? !!r.trailing : c);
  function v(S) {
    var b = a, x = n;
    return a = n = void 0, u = S, s = t.apply(x, b), s;
  }
  function d(S) {
    return u = S, o = setTimeout(y, e), f ? v(S) : s;
  }
  function g(S) {
    var b = S - l, x = S - u, w = e - b;
    return h ? Yu(w, i - x) : w;
  }
  function p(S) {
    var b = S - l, x = S - u;
    return l === void 0 || b >= e || b < 0 || h && x >= i;
  }
  function y() {
    var S = Tn();
    if (p(S))
      return E(S);
    o = setTimeout(y, g(S));
  }
  function E(S) {
    return o = void 0, c && a ? v(S) : (a = n = void 0, s);
  }
  function m() {
    o !== void 0 && clearTimeout(o), u = 0, a = l = n = o = void 0;
  }
  function T() {
    return o === void 0 ? s : E(Tn());
  }
  function C() {
    var S = Tn(), b = p(S);
    if (a = arguments, n = this, l = S, b) {
      if (o === void 0)
        return d(l);
      if (h)
        return clearTimeout(o), o = setTimeout(y, e), v(l);
    }
    return o === void 0 && (o = setTimeout(y, e)), s;
  }
  return C.cancel = m, C.flush = T, C;
}
var Wu = Xu, Ks = { exports: {} };
(function(t, e) {
  (function() {
    var r, a, n, i, s, o, l, u, f, h, c, v, d, g, p;
    n = Math.floor, h = Math.min, a = function(y, E) {
      return y < E ? -1 : y > E ? 1 : 0;
    }, f = function(y, E, m, T, C) {
      var S;
      if (m == null && (m = 0), C == null && (C = a), m < 0)
        throw new Error("lo must be non-negative");
      for (T == null && (T = y.length); m < T; )
        S = n((m + T) / 2), C(E, y[S]) < 0 ? T = S : m = S + 1;
      return [].splice.apply(y, [m, m - m].concat(E)), E;
    }, o = function(y, E, m) {
      return m == null && (m = a), y.push(E), g(y, 0, y.length - 1, m);
    }, s = function(y, E) {
      var m, T;
      return E == null && (E = a), m = y.pop(), y.length ? (T = y[0], y[0] = m, p(y, 0, E)) : T = m, T;
    }, u = function(y, E, m) {
      var T;
      return m == null && (m = a), T = y[0], y[0] = E, p(y, 0, m), T;
    }, l = function(y, E, m) {
      var T;
      return m == null && (m = a), y.length && m(y[0], E) < 0 && (T = [y[0], E], E = T[0], y[0] = T[1], p(y, 0, m)), E;
    }, i = function(y, E) {
      var m, T, C, S, b, x;
      for (E == null && (E = a), S = function() {
        x = [];
        for (var w = 0, D = n(y.length / 2); 0 <= D ? w < D : w > D; 0 <= D ? w++ : w--)
          x.push(w);
        return x;
      }.apply(this).reverse(), b = [], T = 0, C = S.length; T < C; T++)
        m = S[T], b.push(p(y, m, E));
      return b;
    }, d = function(y, E, m) {
      var T;
      if (m == null && (m = a), T = y.indexOf(E), T !== -1)
        return g(y, 0, T, m), p(y, T, m);
    }, c = function(y, E, m) {
      var T, C, S, b, x;
      if (m == null && (m = a), C = y.slice(0, E), !C.length)
        return C;
      for (i(C, m), x = y.slice(E), S = 0, b = x.length; S < b; S++)
        T = x[S], l(C, T, m);
      return C.sort(m).reverse();
    }, v = function(y, E, m) {
      var T, C, S, b, x, w, D, A, L;
      if (m == null && (m = a), E * 10 <= y.length) {
        if (S = y.slice(0, E).sort(m), !S.length)
          return S;
        for (C = S[S.length - 1], D = y.slice(E), b = 0, w = D.length; b < w; b++)
          T = D[b], m(T, C) < 0 && (f(S, T, 0, null, m), S.pop(), C = S[S.length - 1]);
        return S;
      }
      for (i(y, m), L = [], x = 0, A = h(E, y.length); 0 <= A ? x < A : x > A; 0 <= A ? ++x : --x)
        L.push(s(y, m));
      return L;
    }, g = function(y, E, m, T) {
      var C, S, b;
      for (T == null && (T = a), C = y[m]; m > E; ) {
        if (b = m - 1 >> 1, S = y[b], T(C, S) < 0) {
          y[m] = S, m = b;
          continue;
        }
        break;
      }
      return y[m] = C;
    }, p = function(y, E, m) {
      var T, C, S, b, x;
      for (m == null && (m = a), C = y.length, x = E, S = y[E], T = 2 * E + 1; T < C; )
        b = T + 1, b < C && !(m(y[T], y[b]) < 0) && (T = b), y[E] = y[T], E = T, T = 2 * E + 1;
      return y[E] = S, g(y, x, E, m);
    }, r = function() {
      y.push = o, y.pop = s, y.replace = u, y.pushpop = l, y.heapify = i, y.updateItem = d, y.nlargest = c, y.nsmallest = v;
      function y(E) {
        this.cmp = E != null ? E : a, this.nodes = [];
      }
      return y.prototype.push = function(E) {
        return o(this.nodes, E, this.cmp);
      }, y.prototype.pop = function() {
        return s(this.nodes, this.cmp);
      }, y.prototype.peek = function() {
        return this.nodes[0];
      }, y.prototype.contains = function(E) {
        return this.nodes.indexOf(E) !== -1;
      }, y.prototype.replace = function(E) {
        return u(this.nodes, E, this.cmp);
      }, y.prototype.pushpop = function(E) {
        return l(this.nodes, E, this.cmp);
      }, y.prototype.heapify = function() {
        return i(this.nodes, this.cmp);
      }, y.prototype.updateItem = function(E) {
        return d(this.nodes, E, this.cmp);
      }, y.prototype.clear = function() {
        return this.nodes = [];
      }, y.prototype.empty = function() {
        return this.nodes.length === 0;
      }, y.prototype.size = function() {
        return this.nodes.length;
      }, y.prototype.clone = function() {
        var E;
        return E = new y(), E.nodes = this.nodes.slice(0), E;
      }, y.prototype.toArray = function() {
        return this.nodes.slice(0);
      }, y.prototype.insert = y.prototype.push, y.prototype.top = y.prototype.peek, y.prototype.front = y.prototype.peek, y.prototype.has = y.prototype.contains, y.prototype.copy = y.prototype.clone, y;
    }(), function(y, E) {
      return t.exports = E();
    }(this, function() {
      return r;
    });
  }).call(Vt);
})(Ks);
var qu = Ks.exports, Ku = qu, Zu = Array.isArray, rn = Zu, Qu = rn, Ju = ua, ju = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ef = /^\w*$/;
function tf(t, e) {
  if (Qu(t))
    return !1;
  var r = typeof t;
  return r == "number" || r == "symbol" || r == "boolean" || t == null || Ju(t) ? !0 : ef.test(t) || !ju.test(t) || e != null && t in Object(e);
}
var rf = tf, af = qs, nf = la, sf = "[object AsyncFunction]", of = "[object Function]", lf = "[object GeneratorFunction]", uf = "[object Proxy]";
function ff(t) {
  if (!nf(t))
    return !1;
  var e = af(t);
  return e == of || e == lf || e == sf || e == uf;
}
var hf = ff, vf = tn, cf = vf["__core-js_shared__"], df = cf, Cn = df, ki = function() {
  var t = /[^.]+$/.exec(Cn && Cn.keys && Cn.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function gf(t) {
  return !!ki && ki in t;
}
var pf = gf, yf = Function.prototype, mf = yf.toString;
function bf(t) {
  if (t != null) {
    try {
      return mf.call(t);
    } catch (e) {
    }
    try {
      return t + "";
    } catch (e) {
    }
  }
  return "";
}
var Ef = bf, wf = hf, xf = pf, Tf = la, Cf = Ef, Df = /[\\^$.*+?()[\]{}|]/g, Sf = /^\[object .+?Constructor\]$/, Lf = Function.prototype, Af = Object.prototype, Of = Lf.toString, Nf = Af.hasOwnProperty, If = RegExp(
  "^" + Of.call(Nf).replace(Df, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Mf(t) {
  if (!Tf(t) || xf(t))
    return !1;
  var e = wf(t) ? If : Sf;
  return e.test(Cf(t));
}
var Rf = Mf;
function kf(t, e) {
  return t == null ? void 0 : t[e];
}
var Pf = kf, Bf = Rf, Ff = Pf;
function Gf(t, e) {
  var r = Ff(t, e);
  return Bf(r) ? r : void 0;
}
var jn = Gf, zf = jn, $f = zf(Object, "create"), an = $f, Pi = an;
function Vf() {
  this.__data__ = Pi ? Pi(null) : {}, this.size = 0;
}
var _f = Vf;
function Uf(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var Hf = Uf, Yf = an, Xf = "__lodash_hash_undefined__", Wf = Object.prototype, qf = Wf.hasOwnProperty;
function Kf(t) {
  var e = this.__data__;
  if (Yf) {
    var r = e[t];
    return r === Xf ? void 0 : r;
  }
  return qf.call(e, t) ? e[t] : void 0;
}
var Zf = Kf, Qf = an, Jf = Object.prototype, jf = Jf.hasOwnProperty;
function eh(t) {
  var e = this.__data__;
  return Qf ? e[t] !== void 0 : jf.call(e, t);
}
var th = eh, rh = an, ah = "__lodash_hash_undefined__";
function nh(t, e) {
  var r = this.__data__;
  return this.size += this.has(t) ? 0 : 1, r[t] = rh && e === void 0 ? ah : e, this;
}
var ih = nh, sh = _f, oh = Hf, lh = Zf, uh = th, fh = ih;
function Or(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var a = t[e];
    this.set(a[0], a[1]);
  }
}
Or.prototype.clear = sh;
Or.prototype.delete = oh;
Or.prototype.get = lh;
Or.prototype.has = uh;
Or.prototype.set = fh;
var hh = Or;
function vh() {
  this.__data__ = [], this.size = 0;
}
var ch = vh;
function dh(t, e) {
  return t === e || t !== t && e !== e;
}
var Zs = dh, gh = Zs;
function ph(t, e) {
  for (var r = t.length; r--; )
    if (gh(t[r][0], e))
      return r;
  return -1;
}
var nn = ph, yh = nn, mh = Array.prototype, bh = mh.splice;
function Eh(t) {
  var e = this.__data__, r = yh(e, t);
  if (r < 0)
    return !1;
  var a = e.length - 1;
  return r == a ? e.pop() : bh.call(e, r, 1), --this.size, !0;
}
var wh = Eh, xh = nn;
function Th(t) {
  var e = this.__data__, r = xh(e, t);
  return r < 0 ? void 0 : e[r][1];
}
var Ch = Th, Dh = nn;
function Sh(t) {
  return Dh(this.__data__, t) > -1;
}
var Lh = Sh, Ah = nn;
function Oh(t, e) {
  var r = this.__data__, a = Ah(r, t);
  return a < 0 ? (++this.size, r.push([t, e])) : r[a][1] = e, this;
}
var Nh = Oh, Ih = ch, Mh = wh, Rh = Ch, kh = Lh, Ph = Nh;
function Nr(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var a = t[e];
    this.set(a[0], a[1]);
  }
}
Nr.prototype.clear = Ih;
Nr.prototype.delete = Mh;
Nr.prototype.get = Rh;
Nr.prototype.has = kh;
Nr.prototype.set = Ph;
var Bh = Nr, Fh = jn, Gh = tn, zh = Fh(Gh, "Map"), $h = zh, Bi = hh, Vh = Bh, _h = $h;
function Uh() {
  this.size = 0, this.__data__ = {
    hash: new Bi(),
    map: new (_h || Vh)(),
    string: new Bi()
  };
}
var Hh = Uh;
function Yh(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
var Xh = Yh, Wh = Xh;
function qh(t, e) {
  var r = t.__data__;
  return Wh(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
}
var sn = qh, Kh = sn;
function Zh(t) {
  var e = Kh(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
var Qh = Zh, Jh = sn;
function jh(t) {
  return Jh(this, t).get(t);
}
var ev = jh, tv = sn;
function rv(t) {
  return tv(this, t).has(t);
}
var av = rv, nv = sn;
function iv(t, e) {
  var r = nv(this, t), a = r.size;
  return r.set(t, e), this.size += r.size == a ? 0 : 1, this;
}
var sv = iv, ov = Hh, lv = Qh, uv = ev, fv = av, hv = sv;
function Ir(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var a = t[e];
    this.set(a[0], a[1]);
  }
}
Ir.prototype.clear = ov;
Ir.prototype.delete = lv;
Ir.prototype.get = uv;
Ir.prototype.has = fv;
Ir.prototype.set = hv;
var vv = Ir, Qs = vv, cv = "Expected a function";
function ei(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(cv);
  var r = function() {
    var a = arguments, n = e ? e.apply(this, a) : a[0], i = r.cache;
    if (i.has(n))
      return i.get(n);
    var s = t.apply(this, a);
    return r.cache = i.set(n, s) || i, s;
  };
  return r.cache = new (ei.Cache || Qs)(), r;
}
ei.Cache = Qs;
var dv = ei, gv = dv, pv = 500;
function yv(t) {
  var e = gv(t, function(a) {
    return r.size === pv && r.clear(), a;
  }), r = e.cache;
  return e;
}
var mv = yv, bv = mv, Ev = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, wv = /\\(\\)?/g, xv = bv(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(Ev, function(r, a, n, i) {
    e.push(n ? i.replace(wv, "$1") : a || r);
  }), e;
}), Js = xv;
function Tv(t, e) {
  for (var r = -1, a = t == null ? 0 : t.length, n = Array(a); ++r < a; )
    n[r] = e(t[r], r, t);
  return n;
}
var js = Tv, Fi = Jn, Cv = js, Dv = rn, Sv = ua, Lv = 1 / 0, Gi = Fi ? Fi.prototype : void 0, zi = Gi ? Gi.toString : void 0;
function eo(t) {
  if (typeof t == "string")
    return t;
  if (Dv(t))
    return Cv(t, eo) + "";
  if (Sv(t))
    return zi ? zi.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -Lv ? "-0" : e;
}
var Av = eo, Ov = Av;
function Nv(t) {
  return t == null ? "" : Ov(t);
}
var to = Nv, Iv = rn, Mv = rf, Rv = Js, kv = to;
function Pv(t, e) {
  return Iv(t) ? t : Mv(t, e) ? [t] : Rv(kv(t));
}
var ro = Pv, Bv = ua, Fv = 1 / 0;
function Gv(t) {
  if (typeof t == "string" || Bv(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -Fv ? "-0" : e;
}
var ti = Gv, zv = ro, $v = ti;
function Vv(t, e) {
  e = zv(e, t);
  for (var r = 0, a = e.length; t != null && r < a; )
    t = t[$v(e[r++])];
  return r && r == a ? t : void 0;
}
var _v = Vv, Uv = _v;
function Hv(t, e, r) {
  var a = t == null ? void 0 : Uv(t, e);
  return a === void 0 ? r : a;
}
var Yv = Hv, Xv = jn, Wv = function() {
  try {
    var t = Xv(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch (e) {
  }
}(), qv = Wv, $i = qv;
function Kv(t, e, r) {
  e == "__proto__" && $i ? $i(t, e, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : t[e] = r;
}
var Zv = Kv, Qv = Zv, Jv = Zs, jv = Object.prototype, ec = jv.hasOwnProperty;
function tc(t, e, r) {
  var a = t[e];
  (!(ec.call(t, e) && Jv(a, r)) || r === void 0 && !(e in t)) && Qv(t, e, r);
}
var rc = tc, ac = 9007199254740991, nc = /^(?:0|[1-9]\d*)$/;
function ic(t, e) {
  var r = typeof t;
  return e = e == null ? ac : e, !!e && (r == "number" || r != "symbol" && nc.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
var sc = ic, oc = rc, lc = ro, uc = sc, Vi = la, fc = ti;
function hc(t, e, r, a) {
  if (!Vi(t))
    return t;
  e = lc(e, t);
  for (var n = -1, i = e.length, s = i - 1, o = t; o != null && ++n < i; ) {
    var l = fc(e[n]), u = r;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return t;
    if (n != s) {
      var f = o[l];
      u = a ? a(f, l, o) : void 0, u === void 0 && (u = Vi(f) ? f : uc(e[n + 1]) ? [] : {});
    }
    oc(o, l, u), o = o[l];
  }
  return t;
}
var vc = hc, cc = vc;
function dc(t, e, r) {
  return t == null ? t : cc(t, e, r);
}
var gc = dc;
function pc(t, e) {
  var r = -1, a = t.length;
  for (e || (e = Array(a)); ++r < a; )
    e[r] = t[r];
  return e;
}
var yc = pc, mc = js, bc = yc, Ec = rn, wc = ua, xc = Js, Tc = ti, Cc = to;
function Dc(t) {
  return Ec(t) ? mc(t, Tc) : wc(t) ? [t] : bc(xc(Cc(t)));
}
var Sc = Dc, Lc = Wu, Ac = Ku, Oc = Yv, Nc = gc, Ic = Sc;
function fa(t) {
  return t && typeof t == "object" && "default" in t ? t : { default: t };
}
var on = /* @__PURE__ */ fa(Lc), ha = /* @__PURE__ */ fa(Ac), Mc = /* @__PURE__ */ fa(Oc), Rc = /* @__PURE__ */ fa(Nc), kc = /* @__PURE__ */ fa(Ic);
function Ue(t) {
  "@babel/helpers - typeof";
  return Ue = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ue(t);
}
function ri(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function _i(t, e) {
  for (var r = 0; r < e.length; r++) {
    var a = e[r];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
  }
}
function ai(t, e, r) {
  return e && _i(t.prototype, e), r && _i(t, r), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function ao(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function Et(t, e) {
  return Pc(t) || Bc(t, e) || Fc(t, e) || Gc();
}
function Pc(t) {
  if (Array.isArray(t))
    return t;
}
function Bc(t, e) {
  var r = t == null ? null : typeof Symbol != "undefined" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var a = [], n = !0, i = !1, s, o;
    try {
      for (r = r.call(t); !(n = (s = r.next()).done) && (a.push(s.value), !(e && a.length === e)); n = !0)
        ;
    } catch (l) {
      i = !0, o = l;
    } finally {
      try {
        !n && r.return != null && r.return();
      } finally {
        if (i)
          throw o;
      }
    }
    return a;
  }
}
function Fc(t, e) {
  if (t) {
    if (typeof t == "string")
      return Ui(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ui(t, e);
  }
}
function Ui(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, a = new Array(e); r < e; r++)
    a[r] = t[r];
  return a;
}
function Gc() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var $e = typeof window == "undefined" ? null : window, Hi = $e ? $e.navigator : null;
$e && $e.document;
var zc = Ue(""), no = Ue({}), $c = Ue(function() {
}), Vc = typeof HTMLElement == "undefined" ? "undefined" : Ue(HTMLElement), va = function(e) {
  return e && e.instanceString && Be(e.instanceString) ? e.instanceString() : null;
}, ve = function(e) {
  return e != null && Ue(e) == zc;
}, Be = function(e) {
  return e != null && Ue(e) === $c;
}, Me = function(e) {
  return !ht(e) && (Array.isArray ? Array.isArray(e) : e != null && e instanceof Array);
}, De = function(e) {
  return e != null && Ue(e) === no && !Me(e) && e.constructor === Object;
}, _c = function(e) {
  return e != null && Ue(e) === no;
}, ae = function(e) {
  return e != null && Ue(e) === Ue(1) && !isNaN(e);
}, Uc = function(e) {
  return ae(e) && Math.floor(e) === e;
}, Ha = function(e) {
  if (Vc !== "undefined")
    return e != null && e instanceof HTMLElement;
}, ht = function(e) {
  return ca(e) || io(e);
}, ca = function(e) {
  return va(e) === "collection" && e._private.single;
}, io = function(e) {
  return va(e) === "collection" && !e._private.single;
}, ni = function(e) {
  return va(e) === "core";
}, so = function(e) {
  return va(e) === "stylesheet";
}, Hc = function(e) {
  return va(e) === "event";
}, Yt = function(e) {
  return e == null ? !0 : !!(e === "" || e.match(/^\s+$/));
}, Yc = function(e) {
  return typeof HTMLElement == "undefined" ? !1 : e instanceof HTMLElement;
}, Xc = function(e) {
  return De(e) && ae(e.x1) && ae(e.x2) && ae(e.y1) && ae(e.y2);
}, Wc = function(e) {
  return _c(e) && Be(e.then);
}, qc = function() {
  return Hi && Hi.userAgent.match(/msie|trident|edge/i);
}, Jr = function(e, r) {
  r || (r = function() {
    if (arguments.length === 1)
      return arguments[0];
    if (arguments.length === 0)
      return "undefined";
    for (var i = [], s = 0; s < arguments.length; s++)
      i.push(arguments[s]);
    return i.join("$");
  });
  var a = function n() {
    var i = this, s = arguments, o, l = r.apply(i, s), u = n.cache;
    return (o = u[l]) || (o = u[l] = e.apply(i, s)), o;
  };
  return a.cache = {}, a;
}, ii = Jr(function(t) {
  return t.replace(/([A-Z])/g, function(e) {
    return "-" + e.toLowerCase();
  });
}), ln = Jr(function(t) {
  return t.replace(/(-\w)/g, function(e) {
    return e[1].toUpperCase();
  });
}), oo = Jr(function(t, e) {
  return t + e[0].toUpperCase() + e.substring(1);
}, function(t, e) {
  return t + "$" + e;
}), Yi = function(e) {
  return Yt(e) ? e : e.charAt(0).toUpperCase() + e.substring(1);
}, _e = "(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))", Kc = "rgb[a]?\\((" + _e + "[%]?)\\s*,\\s*(" + _e + "[%]?)\\s*,\\s*(" + _e + "[%]?)(?:\\s*,\\s*(" + _e + "))?\\)", Zc = "rgb[a]?\\((?:" + _e + "[%]?)\\s*,\\s*(?:" + _e + "[%]?)\\s*,\\s*(?:" + _e + "[%]?)(?:\\s*,\\s*(?:" + _e + "))?\\)", Qc = "hsl[a]?\\((" + _e + ")\\s*,\\s*(" + _e + "[%])\\s*,\\s*(" + _e + "[%])(?:\\s*,\\s*(" + _e + "))?\\)", Jc = "hsl[a]?\\((?:" + _e + ")\\s*,\\s*(?:" + _e + "[%])\\s*,\\s*(?:" + _e + "[%])(?:\\s*,\\s*(?:" + _e + "))?\\)", jc = "\\#[0-9a-fA-F]{3}", ed = "\\#[0-9a-fA-F]{6}", lo = function(e, r) {
  return e < r ? -1 : e > r ? 1 : 0;
}, td = function(e, r) {
  return -1 * lo(e, r);
}, de = Object.assign != null ? Object.assign.bind(Object) : function(t) {
  for (var e = arguments, r = 1; r < e.length; r++) {
    var a = e[r];
    if (a != null)
      for (var n = Object.keys(a), i = 0; i < n.length; i++) {
        var s = n[i];
        t[s] = a[s];
      }
  }
  return t;
}, rd = function(e) {
  if (!(!(e.length === 4 || e.length === 7) || e[0] !== "#")) {
    var r = e.length === 4, a, n, i, s = 16;
    return r ? (a = parseInt(e[1] + e[1], s), n = parseInt(e[2] + e[2], s), i = parseInt(e[3] + e[3], s)) : (a = parseInt(e[1] + e[2], s), n = parseInt(e[3] + e[4], s), i = parseInt(e[5] + e[6], s)), [a, n, i];
  }
}, ad = function(e) {
  var r, a, n, i, s, o, l, u;
  function f(d, g, p) {
    return p < 0 && (p += 1), p > 1 && (p -= 1), p < 1 / 6 ? d + (g - d) * 6 * p : p < 1 / 2 ? g : p < 2 / 3 ? d + (g - d) * (2 / 3 - p) * 6 : d;
  }
  var h = new RegExp("^" + Qc + "$").exec(e);
  if (h) {
    if (a = parseInt(h[1]), a < 0 ? a = (360 - -1 * a % 360) % 360 : a > 360 && (a = a % 360), a /= 360, n = parseFloat(h[2]), n < 0 || n > 100 || (n = n / 100, i = parseFloat(h[3]), i < 0 || i > 100) || (i = i / 100, s = h[4], s !== void 0 && (s = parseFloat(s), s < 0 || s > 1)))
      return;
    if (n === 0)
      o = l = u = Math.round(i * 255);
    else {
      var c = i < 0.5 ? i * (1 + n) : i + n - i * n, v = 2 * i - c;
      o = Math.round(255 * f(v, c, a + 1 / 3)), l = Math.round(255 * f(v, c, a)), u = Math.round(255 * f(v, c, a - 1 / 3));
    }
    r = [o, l, u, s];
  }
  return r;
}, nd = function(e) {
  var r, a = new RegExp("^" + Kc + "$").exec(e);
  if (a) {
    r = [];
    for (var n = [], i = 1; i <= 3; i++) {
      var s = a[i];
      if (s[s.length - 1] === "%" && (n[i] = !0), s = parseFloat(s), n[i] && (s = s / 100 * 255), s < 0 || s > 255)
        return;
      r.push(Math.floor(s));
    }
    var o = n[1] || n[2] || n[3], l = n[1] && n[2] && n[3];
    if (o && !l)
      return;
    var u = a[4];
    if (u !== void 0) {
      if (u = parseFloat(u), u < 0 || u > 1)
        return;
      r.push(u);
    }
  }
  return r;
}, id = function(e) {
  return od[e.toLowerCase()];
}, sd = function(e) {
  return (Me(e) ? e : null) || id(e) || rd(e) || nd(e) || ad(e);
}, od = {
  // special colour names
  transparent: [0, 0, 0, 0],
  // NB alpha === 0
  // regular colours
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 134, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 250, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  grey: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 221],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [112, 128, 144],
  slategrey: [112, 128, 144],
  snow: [255, 250, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 50]
}, uo = function(e) {
  for (var r = e.map, a = e.keys, n = a.length, i = 0; i < n; i++) {
    var s = a[i];
    if (De(s))
      throw Error("Tried to set map with object key");
    i < a.length - 1 ? (r[s] == null && (r[s] = {}), r = r[s]) : r[s] = e.value;
  }
}, fo = function(e) {
  for (var r = e.map, a = e.keys, n = a.length, i = 0; i < n; i++) {
    var s = a[i];
    if (De(s))
      throw Error("Tried to get map with object key");
    if (r = r[s], r == null)
      return r;
  }
  return r;
}, Dn = $e ? $e.performance : null, ho = Dn && Dn.now ? function() {
  return Dn.now();
} : function() {
  return Date.now();
}, ld = function() {
  if ($e) {
    if ($e.requestAnimationFrame)
      return function(t) {
        $e.requestAnimationFrame(t);
      };
    if ($e.mozRequestAnimationFrame)
      return function(t) {
        $e.mozRequestAnimationFrame(t);
      };
    if ($e.webkitRequestAnimationFrame)
      return function(t) {
        $e.webkitRequestAnimationFrame(t);
      };
    if ($e.msRequestAnimationFrame)
      return function(t) {
        $e.msRequestAnimationFrame(t);
      };
  }
  return function(t) {
    t && setTimeout(function() {
      t(ho());
    }, 1e3 / 60);
  };
}(), Ya = function(e) {
  return ld(e);
}, Mt = ho, br = 9261, vo = 65599, Xr = 5381, co = function(e) {
  for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : br, a = r, n; n = e.next(), !n.done; )
    a = a * vo + n.value | 0;
  return a;
}, jr = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : br;
  return r * vo + e | 0;
}, ea = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xr;
  return (r << 5) + r + e | 0;
}, ud = function(e, r) {
  return e * 2097152 + r;
}, Gt = function(e) {
  return e[0] * 2097152 + e[1];
}, Ta = function(e, r) {
  return [jr(e[0], r[0]), ea(e[1], r[1])];
}, fd = function(e, r) {
  var a = {
    value: 0,
    done: !1
  }, n = 0, i = e.length, s = {
    next: function() {
      return n < i ? a.value = e[n++] : a.done = !0, a;
    }
  };
  return co(s, r);
}, ar = function(e, r) {
  var a = {
    value: 0,
    done: !1
  }, n = 0, i = e.length, s = {
    next: function() {
      return n < i ? a.value = e.charCodeAt(n++) : a.done = !0, a;
    }
  };
  return co(s, r);
}, go = function() {
  return hd(arguments);
}, hd = function(e) {
  for (var r, a = 0; a < e.length; a++) {
    var n = e[a];
    a === 0 ? r = ar(n) : r = ar(n, r);
  }
  return r;
}, Xi = !0, vd = console.warn != null, cd = console.trace != null, si = Number.MAX_SAFE_INTEGER || 9007199254740991, po = function() {
  return !0;
}, Xa = function() {
  return !1;
}, Wi = function() {
  return 0;
}, oi = function() {
}, Ge = function(e) {
  throw new Error(e);
}, yo = function(e) {
  if (e !== void 0)
    Xi = !!e;
  else
    return Xi;
}, Ne = function(e) {
  yo() && (vd ? console.warn(e) : (console.log(e), cd && console.trace()));
}, dd = function(e) {
  return de({}, e);
}, St = function(e) {
  return e == null ? e : Me(e) ? e.slice() : De(e) ? dd(e) : e;
}, gd = function(e) {
  return e.slice();
}, mo = function(e, r) {
  for (
    // loop :)
    r = e = "";
    // b - result , a - numeric letiable
    e++ < 36;
    //
    r += e * 51 & 52 ? (
      //  return a random number or 4
      (e ^ 15 ? (
        // generate a random number from 0 to 15
        8 ^ Math.random() * (e ^ 20 ? 16 : 4)
      ) : 4).toString(16)
    ) : "-"
  )
    ;
  return r;
}, pd = {}, bo = function() {
  return pd;
}, Qe = function(e) {
  var r = Object.keys(e);
  return function(a) {
    for (var n = {}, i = 0; i < r.length; i++) {
      var s = r[i], o = a == null ? void 0 : a[s];
      n[s] = o === void 0 ? e[s] : o;
    }
    return n;
  };
}, Xt = function(e, r, a) {
  for (var n = e.length - 1; n >= 0 && !(e[n] === r && (e.splice(n, 1), a)); n--)
    ;
}, li = function(e) {
  e.splice(0, e.length);
}, yd = function(e, r) {
  for (var a = 0; a < r.length; a++) {
    var n = r[a];
    e.push(n);
  }
}, xt = function(e, r, a) {
  return a && (r = oo(a, r)), e[r];
}, $t = function(e, r, a, n) {
  a && (r = oo(a, r)), e[r] = n;
}, md = /* @__PURE__ */ function() {
  function t() {
    ri(this, t), this._obj = {};
  }
  return ai(t, [{
    key: "set",
    value: function(r, a) {
      return this._obj[r] = a, this;
    }
  }, {
    key: "delete",
    value: function(r) {
      return this._obj[r] = void 0, this;
    }
  }, {
    key: "clear",
    value: function() {
      this._obj = {};
    }
  }, {
    key: "has",
    value: function(r) {
      return this._obj[r] !== void 0;
    }
  }, {
    key: "get",
    value: function(r) {
      return this._obj[r];
    }
  }]), t;
}(), Lt = typeof Map != "undefined" ? Map : md, bd = "undefined", Ed = /* @__PURE__ */ function() {
  function t(e) {
    if (ri(this, t), this._obj = /* @__PURE__ */ Object.create(null), this.size = 0, e != null) {
      var r;
      e.instanceString != null && e.instanceString() === this.instanceString() ? r = e.toArray() : r = e;
      for (var a = 0; a < r.length; a++)
        this.add(r[a]);
    }
  }
  return ai(t, [{
    key: "instanceString",
    value: function() {
      return "set";
    }
  }, {
    key: "add",
    value: function(r) {
      var a = this._obj;
      a[r] !== 1 && (a[r] = 1, this.size++);
    }
  }, {
    key: "delete",
    value: function(r) {
      var a = this._obj;
      a[r] === 1 && (a[r] = 0, this.size--);
    }
  }, {
    key: "clear",
    value: function() {
      this._obj = /* @__PURE__ */ Object.create(null);
    }
  }, {
    key: "has",
    value: function(r) {
      return this._obj[r] === 1;
    }
  }, {
    key: "toArray",
    value: function() {
      var r = this;
      return Object.keys(this._obj).filter(function(a) {
        return r.has(a);
      });
    }
  }, {
    key: "forEach",
    value: function(r, a) {
      return this.toArray().forEach(r, a);
    }
  }]), t;
}(), Mr = (typeof Set == "undefined" ? "undefined" : Ue(Set)) !== bd ? Set : Ed, un = function(e, r) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (e === void 0 || r === void 0 || !ni(e)) {
    Ge("An element must have a core reference and parameters set");
    return;
  }
  var n = r.group;
  if (n == null && (r.data && r.data.source != null && r.data.target != null ? n = "edges" : n = "nodes"), n !== "nodes" && n !== "edges") {
    Ge("An element must be of type `nodes` or `edges`; you specified `" + n + "`");
    return;
  }
  this.length = 1, this[0] = this;
  var i = this._private = {
    cy: e,
    single: !0,
    // indicates this is an element
    data: r.data || {},
    // data object
    position: r.position || {
      x: 0,
      y: 0
    },
    // (x, y) position pair
    autoWidth: void 0,
    // width and height of nodes calculated by the renderer when set to special 'auto' value
    autoHeight: void 0,
    autoPadding: void 0,
    compoundBoundsClean: !1,
    // whether the compound dimensions need to be recalculated the next time dimensions are read
    listeners: [],
    // array of bound listeners
    group: n,
    // string; 'nodes' or 'edges'
    style: {},
    // properties as set by the style
    rstyle: {},
    // properties for style sent from the renderer to the core
    styleCxts: [],
    // applied style contexts from the styler
    styleKeys: {},
    // per-group keys of style property values
    removed: !0,
    // whether it's inside the vis; true if removed (set true here since we call restore)
    selected: !!r.selected,
    // whether it's selected
    selectable: r.selectable === void 0 ? !0 : !!r.selectable,
    // whether it's selectable
    locked: !!r.locked,
    // whether the element is locked (cannot be moved)
    grabbed: !1,
    // whether the element is grabbed by the mouse; renderer sets this privately
    grabbable: r.grabbable === void 0 ? !0 : !!r.grabbable,
    // whether the element can be grabbed
    pannable: r.pannable === void 0 ? n === "edges" : !!r.pannable,
    // whether the element has passthrough panning enabled
    active: !1,
    // whether the element is active from user interaction
    classes: new Mr(),
    // map ( className => true )
    animation: {
      // object for currently-running animations
      current: [],
      queue: []
    },
    rscratch: {},
    // object in which the renderer can store information
    scratch: r.scratch || {},
    // scratch objects
    edges: [],
    // array of connected edges
    children: [],
    // array of children
    parent: r.parent && r.parent.isNode() ? r.parent : null,
    // parent ref
    traversalCache: {},
    // cache of output of traversal functions
    backgrounding: !1,
    // whether background images are loading
    bbCache: null,
    // cache of the current bounding box
    bbCacheShift: {
      x: 0,
      y: 0
    },
    // shift applied to cached bb to be applied on next get
    bodyBounds: null,
    // bounds cache of element body, w/o overlay
    overlayBounds: null,
    // bounds cache of element body, including overlay
    labelBounds: {
      // bounds cache of labels
      all: null,
      source: null,
      target: null,
      main: null
    },
    arrowBounds: {
      // bounds cache of edge arrows
      source: null,
      target: null,
      "mid-source": null,
      "mid-target": null
    }
  };
  if (i.position.x == null && (i.position.x = 0), i.position.y == null && (i.position.y = 0), r.renderedPosition) {
    var s = r.renderedPosition, o = e.pan(), l = e.zoom();
    i.position = {
      x: (s.x - o.x) / l,
      y: (s.y - o.y) / l
    };
  }
  var u = [];
  Me(r.classes) ? u = r.classes : ve(r.classes) && (u = r.classes.split(/\s+/));
  for (var f = 0, h = u.length; f < h; f++) {
    var c = u[f];
    !c || c === "" || i.classes.add(c);
  }
  this.createEmitter();
  var v = r.style || r.css;
  v && (Ne("Setting a `style` bypass at element creation should be done only when absolutely necessary.  Try to use the stylesheet instead."), this.style(v)), (a === void 0 || a) && this.restore();
}, qi = function(e) {
  return e = {
    bfs: e.bfs || !e.dfs,
    dfs: e.dfs || !e.bfs
  }, function(a, n, i) {
    var s;
    De(a) && !ht(a) && (s = a, a = s.roots || s.root, n = s.visit, i = s.directed), i = arguments.length === 2 && !Be(n) ? n : i, n = Be(n) ? n : function() {
    };
    for (var o = this._private.cy, l = a = ve(a) ? this.filter(a) : a, u = [], f = [], h = {}, c = {}, v = {}, d = 0, g, p = this.byGroup(), y = p.nodes, E = p.edges, m = 0; m < l.length; m++) {
      var T = l[m], C = T.id();
      T.isNode() && (u.unshift(T), e.bfs && (v[C] = !0, f.push(T)), c[C] = 0);
    }
    for (var S = function() {
      var I = e.bfs ? u.shift() : u.pop(), O = I.id();
      if (e.dfs) {
        if (v[O])
          return "continue";
        v[O] = !0, f.push(I);
      }
      var P = c[O], R = h[O], M = R != null ? R.source() : null, k = R != null ? R.target() : null, B = R == null ? void 0 : I.same(M) ? k[0] : M[0], G = void 0;
      if (G = n(I, R, B, d++, P), G === !0)
        return g = I, "break";
      if (G === !1)
        return "break";
      for (var F = I.connectedEdges().filter(function(W) {
        return (!i || W.source().same(I)) && E.has(W);
      }), $ = 0; $ < F.length; $++) {
        var U = F[$], _ = U.connectedNodes().filter(function(W) {
          return !W.same(I) && y.has(W);
        }), Y = _.id();
        _.length !== 0 && !v[Y] && (_ = _[0], u.push(_), e.bfs && (v[Y] = !0, f.push(_)), h[Y] = U, c[Y] = c[O] + 1);
      }
    }; u.length !== 0; ) {
      var b = S();
      if (b !== "continue" && b === "break")
        break;
    }
    for (var x = o.collection(), w = 0; w < f.length; w++) {
      var D = f[w], A = h[D.id()];
      A != null && x.push(A), x.push(D);
    }
    return {
      path: o.collection(x),
      found: o.collection(g)
    };
  };
}, ta = {
  breadthFirstSearch: qi({
    bfs: !0
  }),
  depthFirstSearch: qi({
    dfs: !0
  })
};
ta.bfs = ta.breadthFirstSearch;
ta.dfs = ta.depthFirstSearch;
var wd = Qe({
  root: null,
  weight: function(e) {
    return 1;
  },
  directed: !1
}), xd = {
  dijkstra: function(e) {
    if (!De(e)) {
      var r = arguments;
      e = {
        root: r[0],
        weight: r[1],
        directed: r[2]
      };
    }
    var a = wd(e), n = a.root, i = a.weight, s = a.directed, o = this, l = i, u = ve(n) ? this.filter(n)[0] : n[0], f = {}, h = {}, c = {}, v = this.byGroup(), d = v.nodes, g = v.edges;
    g.unmergeBy(function(P) {
      return P.isLoop();
    });
    for (var p = function(R) {
      return f[R.id()];
    }, y = function(R, M) {
      f[R.id()] = M, E.updateItem(R);
    }, E = new ha.default(function(P, R) {
      return p(P) - p(R);
    }), m = 0; m < d.length; m++) {
      var T = d[m];
      f[T.id()] = T.same(u) ? 0 : 1 / 0, E.push(T);
    }
    for (var C = function(R, M) {
      for (var k = (s ? R.edgesTo(M) : R.edgesWith(M)).intersect(g), B = 1 / 0, G, F = 0; F < k.length; F++) {
        var $ = k[F], U = l($);
        (U < B || !G) && (B = U, G = $);
      }
      return {
        edge: G,
        dist: B
      };
    }; E.size() > 0; ) {
      var S = E.pop(), b = p(S), x = S.id();
      if (c[x] = b, b !== 1 / 0)
        for (var w = S.neighborhood().intersect(d), D = 0; D < w.length; D++) {
          var A = w[D], L = A.id(), I = C(S, A), O = b + I.dist;
          O < p(A) && (y(A, O), h[L] = {
            node: S,
            edge: I.edge
          });
        }
    }
    return {
      distanceTo: function(R) {
        var M = ve(R) ? d.filter(R)[0] : R[0];
        return c[M.id()];
      },
      pathTo: function(R) {
        var M = ve(R) ? d.filter(R)[0] : R[0], k = [], B = M, G = B.id();
        if (M.length > 0)
          for (k.unshift(M); h[G]; ) {
            var F = h[G];
            k.unshift(F.edge), k.unshift(F.node), B = F.node, G = B.id();
          }
        return o.spawn(k);
      }
    };
  }
}, Td = {
  // kruskal's algorithm (finds min spanning tree, assuming undirected graph)
  // implemented from pseudocode from wikipedia
  kruskal: function(e) {
    e = e || function(m) {
      return 1;
    };
    for (var r = this.byGroup(), a = r.nodes, n = r.edges, i = a.length, s = new Array(i), o = a, l = function(T) {
      for (var C = 0; C < s.length; C++) {
        var S = s[C];
        if (S.has(T))
          return C;
      }
    }, u = 0; u < i; u++)
      s[u] = this.spawn(a[u]);
    for (var f = n.sort(function(m, T) {
      return e(m) - e(T);
    }), h = 0; h < f.length; h++) {
      var c = f[h], v = c.source()[0], d = c.target()[0], g = l(v), p = l(d), y = s[g], E = s[p];
      g !== p && (o.merge(c), y.merge(E), s.splice(p, 1));
    }
    return o;
  }
}, Cd = Qe({
  root: null,
  goal: null,
  weight: function(e) {
    return 1;
  },
  heuristic: function(e) {
    return 0;
  },
  directed: !1
}), Dd = {
  // Implemented from pseudocode from wikipedia
  aStar: function(e) {
    var r = this.cy(), a = Cd(e), n = a.root, i = a.goal, s = a.heuristic, o = a.directed, l = a.weight;
    n = r.collection(n)[0], i = r.collection(i)[0];
    var u = n.id(), f = i.id(), h = {}, c = {}, v = {}, d = new ha.default(function(G, F) {
      return c[G.id()] - c[F.id()];
    }), g = new Mr(), p = {}, y = {}, E = function(F, $) {
      d.push(F), g.add($);
    }, m, T, C = function() {
      m = d.pop(), T = m.id(), g.delete(T);
    }, S = function(F) {
      return g.has(F);
    };
    E(n, u), h[u] = 0, c[u] = s(n);
    for (var b = 0; d.size() > 0; ) {
      if (C(), b++, T === f) {
        for (var x = [], w = i, D = f, A = y[D]; x.unshift(w), A != null && x.unshift(A), w = p[D], w != null; )
          D = w.id(), A = y[D];
        return {
          found: !0,
          distance: h[T],
          path: this.spawn(x),
          steps: b
        };
      }
      v[T] = !0;
      for (var L = m._private.edges, I = 0; I < L.length; I++) {
        var O = L[I];
        if (this.hasElementWithId(O.id()) && !(o && O.data("source") !== T)) {
          var P = O.source(), R = O.target(), M = P.id() !== T ? P : R, k = M.id();
          if (this.hasElementWithId(k) && !v[k]) {
            var B = h[T] + l(O);
            if (!S(k)) {
              h[k] = B, c[k] = B + s(M), E(M, k), p[k] = m, y[k] = O;
              continue;
            }
            B < h[k] && (h[k] = B, c[k] = B + s(M), p[k] = m, y[k] = O);
          }
        }
      }
    }
    return {
      found: !1,
      distance: void 0,
      path: void 0,
      steps: b
    };
  }
}, Sd = Qe({
  weight: function(e) {
    return 1;
  },
  directed: !1
}), Ld = {
  // Implemented from pseudocode from wikipedia
  floydWarshall: function(e) {
    for (var r = this.cy(), a = Sd(e), n = a.weight, i = a.directed, s = n, o = this.byGroup(), l = o.nodes, u = o.edges, f = l.length, h = f * f, c = function(U) {
      return l.indexOf(U);
    }, v = function(U) {
      return l[U];
    }, d = new Array(h), g = 0; g < h; g++) {
      var p = g % f, y = (g - p) / f;
      y === p ? d[g] = 0 : d[g] = 1 / 0;
    }
    for (var E = new Array(h), m = new Array(h), T = 0; T < u.length; T++) {
      var C = u[T], S = C.source()[0], b = C.target()[0];
      if (S !== b) {
        var x = c(S), w = c(b), D = x * f + w, A = s(C);
        if (d[D] > A && (d[D] = A, E[D] = w, m[D] = C), !i) {
          var L = w * f + x;
          !i && d[L] > A && (d[L] = A, E[L] = x, m[L] = C);
        }
      }
    }
    for (var I = 0; I < f; I++)
      for (var O = 0; O < f; O++)
        for (var P = O * f + I, R = 0; R < f; R++) {
          var M = O * f + R, k = I * f + R;
          d[P] + d[k] < d[M] && (d[M] = d[P] + d[k], E[M] = E[P]);
        }
    var B = function(U) {
      return (ve(U) ? r.filter(U) : U)[0];
    }, G = function(U) {
      return c(B(U));
    }, F = {
      distance: function(U, _) {
        var Y = G(U), W = G(_);
        return d[Y * f + W];
      },
      path: function(U, _) {
        var Y = G(U), W = G(_), z = v(Y);
        if (Y === W)
          return z.collection();
        if (E[Y * f + W] == null)
          return r.collection();
        var K = r.collection(), j = Y, Q;
        for (K.merge(z); Y !== W; )
          j = Y, Y = E[Y * f + W], Q = m[j * f + Y], K.merge(Q), K.merge(v(Y));
        return K;
      }
    };
    return F;
  }
  // floydWarshall
}, Ad = Qe({
  weight: function(e) {
    return 1;
  },
  directed: !1,
  root: null
}), Od = {
  // Implemented from pseudocode from wikipedia
  bellmanFord: function(e) {
    var r = this, a = Ad(e), n = a.weight, i = a.directed, s = a.root, o = n, l = this, u = this.cy(), f = this.byGroup(), h = f.edges, c = f.nodes, v = c.length, d = new Lt(), g = !1, p = [];
    s = u.collection(s)[0], h.unmergeBy(function(le) {
      return le.isLoop();
    });
    for (var y = h.length, E = function(se) {
      var fe = d.get(se.id());
      return fe || (fe = {}, d.set(se.id(), fe)), fe;
    }, m = function(se) {
      return (ve(se) ? u.$(se) : se)[0];
    }, T = function(se) {
      return E(m(se)).dist;
    }, C = function(se) {
      for (var fe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s, xe = m(se), Ee = [], ge = xe; ; ) {
        if (ge == null)
          return r.spawn();
        var we = E(ge), H = we.edge, N = we.pred;
        if (Ee.unshift(ge[0]), ge.same(fe) && Ee.length > 0)
          break;
        H != null && Ee.unshift(H), ge = N;
      }
      return l.spawn(Ee);
    }, S = 0; S < v; S++) {
      var b = c[S], x = E(b);
      b.same(s) ? x.dist = 0 : x.dist = 1 / 0, x.pred = null, x.edge = null;
    }
    for (var w = !1, D = function(se, fe, xe, Ee, ge, we) {
      var H = Ee.dist + we;
      H < ge.dist && !xe.same(Ee.edge) && (ge.dist = H, ge.pred = se, ge.edge = xe, w = !0);
    }, A = 1; A < v; A++) {
      w = !1;
      for (var L = 0; L < y; L++) {
        var I = h[L], O = I.source(), P = I.target(), R = o(I), M = E(O), k = E(P);
        D(O, P, I, M, k, R), i || D(P, O, I, k, M, R);
      }
      if (!w)
        break;
    }
    if (w)
      for (var B = [], G = 0; G < y; G++) {
        var F = h[G], $ = F.source(), U = F.target(), _ = o(F), Y = E($).dist, W = E(U).dist;
        if (Y + _ < W || !i && W + _ < Y)
          if (g || (Ne("Graph contains a negative weight cycle for Bellman-Ford"), g = !0), e.findNegativeWeightCycles !== !1) {
            var z = [];
            Y + _ < W && z.push($), !i && W + _ < Y && z.push(U);
            for (var K = z.length, j = 0; j < K; j++) {
              var Q = z[j], ee = [Q];
              ee.push(E(Q).edge);
              for (var ne = E(Q).pred; ee.indexOf(ne) === -1; )
                ee.push(ne), ee.push(E(ne).edge), ne = E(ne).pred;
              ee = ee.slice(ee.indexOf(ne));
              for (var ce = ee[0].id(), te = 0, re = 2; re < ee.length; re += 2)
                ee[re].id() < ce && (ce = ee[re].id(), te = re);
              ee = ee.slice(te).concat(ee.slice(0, te)), ee.push(ee[0]);
              var ue = ee.map(function(le) {
                return le.id();
              }).join(",");
              B.indexOf(ue) === -1 && (p.push(l.spawn(ee)), B.push(ue));
            }
          } else
            break;
      }
    return {
      distanceTo: T,
      pathTo: C,
      hasNegativeWeightCycle: g,
      negativeWeightCycles: p
    };
  }
  // bellmanFord
}, Nd = Math.sqrt(2), Id = function(e, r, a) {
  a.length === 0 && Ge("Karger-Stein must be run on a connected (sub)graph");
  for (var n = a[e], i = n[1], s = n[2], o = r[i], l = r[s], u = a, f = u.length - 1; f >= 0; f--) {
    var h = u[f], c = h[1], v = h[2];
    (r[c] === o && r[v] === l || r[c] === l && r[v] === o) && u.splice(f, 1);
  }
  for (var d = 0; d < u.length; d++) {
    var g = u[d];
    g[1] === l ? (u[d] = g.slice(), u[d][1] = o) : g[2] === l && (u[d] = g.slice(), u[d][2] = o);
  }
  for (var p = 0; p < r.length; p++)
    r[p] === l && (r[p] = o);
  return u;
}, Sn = function(e, r, a, n) {
  for (; a > n; ) {
    var i = Math.floor(Math.random() * r.length);
    r = Id(i, e, r), a--;
  }
  return r;
}, Md = {
  // Computes the minimum cut of an undirected graph
  // Returns the correct answer with high probability
  kargerStein: function() {
    var e = this, r = this.byGroup(), a = r.nodes, n = r.edges;
    n.unmergeBy(function(k) {
      return k.isLoop();
    });
    var i = a.length, s = n.length, o = Math.ceil(Math.pow(Math.log(i) / Math.LN2, 2)), l = Math.floor(i / Nd);
    if (i < 2) {
      Ge("At least 2 nodes are required for Karger-Stein algorithm");
      return;
    }
    for (var u = [], f = 0; f < s; f++) {
      var h = n[f];
      u.push([f, a.indexOf(h.source()), a.indexOf(h.target())]);
    }
    for (var c = 1 / 0, v = [], d = new Array(i), g = new Array(i), p = new Array(i), y = function(B, G) {
      for (var F = 0; F < i; F++)
        G[F] = B[F];
    }, E = 0; E <= o; E++) {
      for (var m = 0; m < i; m++)
        g[m] = m;
      var T = Sn(g, u.slice(), i, l), C = T.slice();
      y(g, p);
      var S = Sn(g, T, l, 2), b = Sn(p, C, l, 2);
      S.length <= b.length && S.length < c ? (c = S.length, v = S, y(g, d)) : b.length <= S.length && b.length < c && (c = b.length, v = b, y(p, d));
    }
    for (var x = this.spawn(v.map(function(k) {
      return n[k[0]];
    })), w = this.spawn(), D = this.spawn(), A = d[0], L = 0; L < d.length; L++) {
      var I = d[L], O = a[L];
      I === A ? w.merge(O) : D.merge(O);
    }
    var P = function(B) {
      var G = e.spawn();
      return B.forEach(function(F) {
        G.merge(F), F.connectedEdges().forEach(function($) {
          e.contains($) && !x.contains($) && G.merge($);
        });
      }), G;
    }, R = [P(w), P(D)], M = {
      cut: x,
      components: R,
      // n.b. partitions are included to be compatible with the old api spec
      // (could be removed in a future major version)
      partition1: w,
      partition2: D
    };
    return M;
  }
}, Rd = function(e) {
  return {
    x: e.x,
    y: e.y
  };
}, fn = function(e, r, a) {
  return {
    x: e.x * r + a.x,
    y: e.y * r + a.y
  };
}, Eo = function(e, r, a) {
  return {
    x: (e.x - a.x) / r,
    y: (e.y - a.y) / r
  };
}, Er = function(e) {
  return {
    x: e[0],
    y: e[1]
  };
}, kd = function(e) {
  for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = 1 / 0, i = r; i < a; i++) {
    var s = e[i];
    isFinite(s) && (n = Math.min(s, n));
  }
  return n;
}, Pd = function(e) {
  for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = -1 / 0, i = r; i < a; i++) {
    var s = e[i];
    isFinite(s) && (n = Math.max(s, n));
  }
  return n;
}, Bd = function(e) {
  for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = 0, i = 0, s = r; s < a; s++) {
    var o = e[s];
    isFinite(o) && (n += o, i++);
  }
  return n / i;
}, Fd = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !0;
  n ? e = e.slice(r, a) : (a < e.length && e.splice(a, e.length - a), r > 0 && e.splice(0, r));
  for (var o = 0, l = e.length - 1; l >= 0; l--) {
    var u = e[l];
    s ? isFinite(u) || (e[l] = -1 / 0, o++) : e.splice(l, 1);
  }
  i && e.sort(function(c, v) {
    return c - v;
  });
  var f = e.length, h = Math.floor(f / 2);
  return f % 2 !== 0 ? e[h + 1 + o] : (e[h - 1 + o] + e[h + o]) / 2;
}, Gd = function(e) {
  return Math.PI * e / 180;
}, Ca = function(e, r) {
  return Math.atan2(r, e) - Math.PI / 2;
}, ui = Math.log2 || function(t) {
  return Math.log(t) / Math.log(2);
}, wo = function(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}, nr = function(e, r) {
  return Math.sqrt(er(e, r));
}, er = function(e, r) {
  var a = r.x - e.x, n = r.y - e.y;
  return a * a + n * n;
}, zd = function(e) {
  for (var r = e.length, a = 0, n = 0; n < r; n++)
    a += e[n];
  for (var i = 0; i < r; i++)
    e[i] = e[i] / a;
  return e;
}, Ye = function(e, r, a, n) {
  return (1 - n) * (1 - n) * e + 2 * (1 - n) * n * r + n * n * a;
}, xr = function(e, r, a, n) {
  return {
    x: Ye(e.x, r.x, a.x, n),
    y: Ye(e.y, r.y, a.y, n)
  };
}, $d = function(e, r, a, n) {
  var i = {
    x: r.x - e.x,
    y: r.y - e.y
  }, s = nr(e, r), o = {
    x: i.x / s,
    y: i.y / s
  };
  return a = a == null ? 0 : a, n = n != null ? n : a * s, {
    x: e.x + o.x * n,
    y: e.y + o.y * n
  };
}, ra = function(e, r, a) {
  return Math.max(e, Math.min(a, r));
}, ft = function(e) {
  if (e == null)
    return {
      x1: 1 / 0,
      y1: 1 / 0,
      x2: -1 / 0,
      y2: -1 / 0,
      w: 0,
      h: 0
    };
  if (e.x1 != null && e.y1 != null) {
    if (e.x2 != null && e.y2 != null && e.x2 >= e.x1 && e.y2 >= e.y1)
      return {
        x1: e.x1,
        y1: e.y1,
        x2: e.x2,
        y2: e.y2,
        w: e.x2 - e.x1,
        h: e.y2 - e.y1
      };
    if (e.w != null && e.h != null && e.w >= 0 && e.h >= 0)
      return {
        x1: e.x1,
        y1: e.y1,
        x2: e.x1 + e.w,
        y2: e.y1 + e.h,
        w: e.w,
        h: e.h
      };
  }
}, Vd = function(e) {
  return {
    x1: e.x1,
    x2: e.x2,
    w: e.w,
    y1: e.y1,
    y2: e.y2,
    h: e.h
  };
}, _d = function(e) {
  e.x1 = 1 / 0, e.y1 = 1 / 0, e.x2 = -1 / 0, e.y2 = -1 / 0, e.w = 0, e.h = 0;
}, Ud = function(e, r, a) {
  return {
    x1: e.x1 + r,
    x2: e.x2 + r,
    y1: e.y1 + a,
    y2: e.y2 + a,
    w: e.w,
    h: e.h
  };
}, xo = function(e, r) {
  e.x1 = Math.min(e.x1, r.x1), e.x2 = Math.max(e.x2, r.x2), e.w = e.x2 - e.x1, e.y1 = Math.min(e.y1, r.y1), e.y2 = Math.max(e.y2, r.y2), e.h = e.y2 - e.y1;
}, Hd = function(e, r, a) {
  e.x1 = Math.min(e.x1, r), e.x2 = Math.max(e.x2, r), e.w = e.x2 - e.x1, e.y1 = Math.min(e.y1, a), e.y2 = Math.max(e.y2, a), e.h = e.y2 - e.y1;
}, ka = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return e.x1 -= r, e.x2 += r, e.y1 -= r, e.y2 += r, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1, e;
}, Pa = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [0], a, n, i, s;
  if (r.length === 1)
    a = n = i = s = r[0];
  else if (r.length === 2)
    a = i = r[0], s = n = r[1];
  else if (r.length === 4) {
    var o = Et(r, 4);
    a = o[0], n = o[1], i = o[2], s = o[3];
  }
  return e.x1 -= s, e.x2 += n, e.y1 -= a, e.y2 += i, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1, e;
}, Ki = function(e, r) {
  e.x1 = r.x1, e.y1 = r.y1, e.x2 = r.x2, e.y2 = r.y2, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1;
}, fi = function(e, r) {
  return !(e.x1 > r.x2 || r.x1 > e.x2 || e.x2 < r.x1 || r.x2 < e.x1 || e.y2 < r.y1 || r.y2 < e.y1 || e.y1 > r.y2 || r.y1 > e.y2);
}, Sr = function(e, r, a) {
  return e.x1 <= r && r <= e.x2 && e.y1 <= a && a <= e.y2;
}, Yd = function(e, r) {
  return Sr(e, r.x, r.y);
}, To = function(e, r) {
  return Sr(e, r.x1, r.y1) && Sr(e, r.x2, r.y2);
}, Co = function(e, r, a, n, i, s, o) {
  var l = da(i, s), u = i / 2, f = s / 2, h;
  {
    var c = a - u + l - o, v = n - f - o, d = a + u - l + o, g = v;
    if (h = _t(e, r, a, n, c, v, d, g, !1), h.length > 0)
      return h;
  }
  {
    var p = a + u + o, y = n - f + l - o, E = p, m = n + f - l + o;
    if (h = _t(e, r, a, n, p, y, E, m, !1), h.length > 0)
      return h;
  }
  {
    var T = a - u + l - o, C = n + f + o, S = a + u - l + o, b = C;
    if (h = _t(e, r, a, n, T, C, S, b, !1), h.length > 0)
      return h;
  }
  {
    var x = a - u - o, w = n - f + l - o, D = x, A = n + f - l + o;
    if (h = _t(e, r, a, n, x, w, D, A, !1), h.length > 0)
      return h;
  }
  var L;
  {
    var I = a - u + l, O = n - f + l;
    if (L = Wr(e, r, a, n, I, O, l + o), L.length > 0 && L[0] <= I && L[1] <= O)
      return [L[0], L[1]];
  }
  {
    var P = a + u - l, R = n - f + l;
    if (L = Wr(e, r, a, n, P, R, l + o), L.length > 0 && L[0] >= P && L[1] <= R)
      return [L[0], L[1]];
  }
  {
    var M = a + u - l, k = n + f - l;
    if (L = Wr(e, r, a, n, M, k, l + o), L.length > 0 && L[0] >= M && L[1] >= k)
      return [L[0], L[1]];
  }
  {
    var B = a - u + l, G = n + f - l;
    if (L = Wr(e, r, a, n, B, G, l + o), L.length > 0 && L[0] <= B && L[1] >= G)
      return [L[0], L[1]];
  }
  return [];
}, Xd = function(e, r, a, n, i, s, o) {
  var l = o, u = Math.min(a, i), f = Math.max(a, i), h = Math.min(n, s), c = Math.max(n, s);
  return u - l <= e && e <= f + l && h - l <= r && r <= c + l;
}, Wd = function(e, r, a, n, i, s, o, l, u) {
  var f = {
    x1: Math.min(a, o, i) - u,
    x2: Math.max(a, o, i) + u,
    y1: Math.min(n, l, s) - u,
    y2: Math.max(n, l, s) + u
  };
  return !(e < f.x1 || e > f.x2 || r < f.y1 || r > f.y2);
}, qd = function(e, r, a, n) {
  a -= n;
  var i = r * r - 4 * e * a;
  if (i < 0)
    return [];
  var s = Math.sqrt(i), o = 2 * e, l = (-r + s) / o, u = (-r - s) / o;
  return [l, u];
}, Kd = function(e, r, a, n, i) {
  var s = 1e-5;
  e === 0 && (e = s), r /= e, a /= e, n /= e;
  var o, l, u, f, h, c, v, d;
  if (l = (3 * a - r * r) / 9, u = -(27 * n) + r * (9 * a - 2 * (r * r)), u /= 54, o = l * l * l + u * u, i[1] = 0, v = r / 3, o > 0) {
    h = u + Math.sqrt(o), h = h < 0 ? -Math.pow(-h, 1 / 3) : Math.pow(h, 1 / 3), c = u - Math.sqrt(o), c = c < 0 ? -Math.pow(-c, 1 / 3) : Math.pow(c, 1 / 3), i[0] = -v + h + c, v += (h + c) / 2, i[4] = i[2] = -v, v = Math.sqrt(3) * (-c + h) / 2, i[3] = v, i[5] = -v;
    return;
  }
  if (i[5] = i[3] = 0, o === 0) {
    d = u < 0 ? -Math.pow(-u, 1 / 3) : Math.pow(u, 1 / 3), i[0] = -v + 2 * d, i[4] = i[2] = -(d + v);
    return;
  }
  l = -l, f = l * l * l, f = Math.acos(u / Math.sqrt(f)), d = 2 * Math.sqrt(l), i[0] = -v + d * Math.cos(f / 3), i[2] = -v + d * Math.cos((f + 2 * Math.PI) / 3), i[4] = -v + d * Math.cos((f + 4 * Math.PI) / 3);
}, Zd = function(e, r, a, n, i, s, o, l) {
  var u = 1 * a * a - 4 * a * i + 2 * a * o + 4 * i * i - 4 * i * o + o * o + n * n - 4 * n * s + 2 * n * l + 4 * s * s - 4 * s * l + l * l, f = 1 * 9 * a * i - 3 * a * a - 3 * a * o - 6 * i * i + 3 * i * o + 9 * n * s - 3 * n * n - 3 * n * l - 6 * s * s + 3 * s * l, h = 1 * 3 * a * a - 6 * a * i + a * o - a * e + 2 * i * i + 2 * i * e - o * e + 3 * n * n - 6 * n * s + n * l - n * r + 2 * s * s + 2 * s * r - l * r, c = 1 * a * i - a * a + a * e - i * e + n * s - n * n + n * r - s * r, v = [];
  Kd(u, f, h, c, v);
  for (var d = 1e-7, g = [], p = 0; p < 6; p += 2)
    Math.abs(v[p + 1]) < d && v[p] >= 0 && v[p] <= 1 && g.push(v[p]);
  g.push(1), g.push(0);
  for (var y = -1, E, m, T, C = 0; C < g.length; C++)
    E = Math.pow(1 - g[C], 2) * a + 2 * (1 - g[C]) * g[C] * i + g[C] * g[C] * o, m = Math.pow(1 - g[C], 2) * n + 2 * (1 - g[C]) * g[C] * s + g[C] * g[C] * l, T = Math.pow(E - e, 2) + Math.pow(m - r, 2), y >= 0 ? T < y && (y = T) : y = T;
  return y;
}, Qd = function(e, r, a, n, i, s) {
  var o = [e - a, r - n], l = [i - a, s - n], u = l[0] * l[0] + l[1] * l[1], f = o[0] * o[0] + o[1] * o[1], h = o[0] * l[0] + o[1] * l[1], c = h * h / u;
  return h < 0 ? f : c > u ? (e - i) * (e - i) + (r - s) * (r - s) : f - c;
}, ut = function(e, r, a) {
  for (var n, i, s, o, l, u = 0, f = 0; f < a.length / 2; f++)
    if (n = a[f * 2], i = a[f * 2 + 1], f + 1 < a.length / 2 ? (s = a[(f + 1) * 2], o = a[(f + 1) * 2 + 1]) : (s = a[(f + 1 - a.length / 2) * 2], o = a[(f + 1 - a.length / 2) * 2 + 1]), !(n == e && s == e))
      if (n >= e && e >= s || n <= e && e <= s)
        l = (e - n) / (s - n) * (o - i) + i, l > r && u++;
      else
        continue;
  return u % 2 !== 0;
}, Rt = function(e, r, a, n, i, s, o, l, u) {
  var f = new Array(a.length), h;
  l[0] != null ? (h = Math.atan(l[1] / l[0]), l[0] < 0 ? h = h + Math.PI / 2 : h = -h - Math.PI / 2) : h = l;
  for (var c = Math.cos(-h), v = Math.sin(-h), d = 0; d < f.length / 2; d++)
    f[d * 2] = s / 2 * (a[d * 2] * c - a[d * 2 + 1] * v), f[d * 2 + 1] = o / 2 * (a[d * 2 + 1] * c + a[d * 2] * v), f[d * 2] += n, f[d * 2 + 1] += i;
  var g;
  if (u > 0) {
    var p = qa(f, -u);
    g = Wa(p);
  } else
    g = f;
  return ut(e, r, g);
}, Jd = function(e, r, a, n, i, s, o) {
  for (var l = new Array(a.length), u = s / 2, f = o / 2, h = hi(s, o), c = h * h, v = 0; v < a.length / 4; v++) {
    var d = void 0, g = void 0;
    v === 0 ? d = a.length - 2 : d = v * 4 - 2, g = v * 4 + 2;
    var p = n + u * a[v * 4], y = i + f * a[v * 4 + 1], E = -a[d] * a[g] - a[d + 1] * a[g + 1], m = h / Math.tan(Math.acos(E) / 2), T = p - m * a[d], C = y - m * a[d + 1], S = p + m * a[g], b = y + m * a[g + 1];
    l[v * 4] = T, l[v * 4 + 1] = C, l[v * 4 + 2] = S, l[v * 4 + 3] = b;
    var x = a[d + 1], w = -a[d], D = x * a[g] + w * a[g + 1];
    D < 0 && (x *= -1, w *= -1);
    var A = T + x * h, L = C + w * h, I = Math.pow(A - e, 2) + Math.pow(L - r, 2);
    if (I <= c)
      return !0;
  }
  return ut(e, r, l);
}, Wa = function(e) {
  for (var r = new Array(e.length / 2), a, n, i, s, o, l, u, f, h = 0; h < e.length / 4; h++) {
    a = e[h * 4], n = e[h * 4 + 1], i = e[h * 4 + 2], s = e[h * 4 + 3], h < e.length / 4 - 1 ? (o = e[(h + 1) * 4], l = e[(h + 1) * 4 + 1], u = e[(h + 1) * 4 + 2], f = e[(h + 1) * 4 + 3]) : (o = e[0], l = e[1], u = e[2], f = e[3]);
    var c = _t(a, n, i, s, o, l, u, f, !0);
    r[h * 2] = c[0], r[h * 2 + 1] = c[1];
  }
  return r;
}, qa = function(e, r) {
  for (var a = new Array(e.length * 2), n, i, s, o, l = 0; l < e.length / 2; l++) {
    n = e[l * 2], i = e[l * 2 + 1], l < e.length / 2 - 1 ? (s = e[(l + 1) * 2], o = e[(l + 1) * 2 + 1]) : (s = e[0], o = e[1]);
    var u = o - i, f = -(s - n), h = Math.sqrt(u * u + f * f), c = u / h, v = f / h;
    a[l * 4] = n + c * r, a[l * 4 + 1] = i + v * r, a[l * 4 + 2] = s + c * r, a[l * 4 + 3] = o + v * r;
  }
  return a;
}, jd = function(e, r, a, n, i, s) {
  var o = a - e, l = n - r;
  o /= i, l /= s;
  var u = Math.sqrt(o * o + l * l), f = u - 1;
  if (f < 0)
    return [];
  var h = f / u;
  return [(a - e) * h + e, (n - r) * h + r];
}, rr = function(e, r, a, n, i, s, o) {
  return e -= i, r -= s, e /= a / 2 + o, r /= n / 2 + o, e * e + r * r <= 1;
}, Wr = function(e, r, a, n, i, s, o) {
  var l = [a - e, n - r], u = [e - i, r - s], f = l[0] * l[0] + l[1] * l[1], h = 2 * (u[0] * l[0] + u[1] * l[1]), c = u[0] * u[0] + u[1] * u[1] - o * o, v = h * h - 4 * f * c;
  if (v < 0)
    return [];
  var d = (-h + Math.sqrt(v)) / (2 * f), g = (-h - Math.sqrt(v)) / (2 * f), p = Math.min(d, g), y = Math.max(d, g), E = [];
  if (p >= 0 && p <= 1 && E.push(p), y >= 0 && y <= 1 && E.push(y), E.length === 0)
    return [];
  var m = E[0] * l[0] + e, T = E[0] * l[1] + r;
  if (E.length > 1) {
    if (E[0] == E[1])
      return [m, T];
    var C = E[1] * l[0] + e, S = E[1] * l[1] + r;
    return [m, T, C, S];
  } else
    return [m, T];
}, Ln = function(e, r, a) {
  return r <= e && e <= a || a <= e && e <= r ? e : e <= r && r <= a || a <= r && r <= e ? r : a;
}, _t = function(e, r, a, n, i, s, o, l, u) {
  var f = e - i, h = a - e, c = o - i, v = r - s, d = n - r, g = l - s, p = c * v - g * f, y = h * v - d * f, E = g * h - c * d;
  if (E !== 0) {
    var m = p / E, T = y / E, C = 1e-3, S = 0 - C, b = 1 + C;
    return S <= m && m <= b && S <= T && T <= b ? [e + m * h, r + m * d] : u ? [e + m * h, r + m * d] : [];
  } else
    return p === 0 || y === 0 ? Ln(e, a, o) === o ? [o, l] : Ln(e, a, i) === i ? [i, s] : Ln(i, o, a) === a ? [a, n] : [] : [];
}, aa = function(e, r, a, n, i, s, o, l) {
  var u = [], f, h = new Array(a.length), c = !0;
  s == null && (c = !1);
  var v;
  if (c) {
    for (var d = 0; d < h.length / 2; d++)
      h[d * 2] = a[d * 2] * s + n, h[d * 2 + 1] = a[d * 2 + 1] * o + i;
    if (l > 0) {
      var g = qa(h, -l);
      v = Wa(g);
    } else
      v = h;
  } else
    v = a;
  for (var p, y, E, m, T = 0; T < v.length / 2; T++)
    p = v[T * 2], y = v[T * 2 + 1], T < v.length / 2 - 1 ? (E = v[(T + 1) * 2], m = v[(T + 1) * 2 + 1]) : (E = v[0], m = v[1]), f = _t(e, r, n, i, p, y, E, m), f.length !== 0 && u.push(f[0], f[1]);
  return u;
}, eg = function(e, r, a, n, i, s, o, l) {
  for (var u = [], f, h = new Array(a.length), c = s / 2, v = o / 2, d = hi(s, o), g = 0; g < a.length / 4; g++) {
    var p = void 0, y = void 0;
    g === 0 ? p = a.length - 2 : p = g * 4 - 2, y = g * 4 + 2;
    var E = n + c * a[g * 4], m = i + v * a[g * 4 + 1], T = -a[p] * a[y] - a[p + 1] * a[y + 1], C = d / Math.tan(Math.acos(T) / 2), S = E - C * a[p], b = m - C * a[p + 1], x = E + C * a[y], w = m + C * a[y + 1];
    g === 0 ? (h[a.length - 2] = S, h[a.length - 1] = b) : (h[g * 4 - 2] = S, h[g * 4 - 1] = b), h[g * 4] = x, h[g * 4 + 1] = w;
    var D = a[p + 1], A = -a[p], L = D * a[y] + A * a[y + 1];
    L < 0 && (D *= -1, A *= -1);
    var I = S + D * d, O = b + A * d;
    f = Wr(e, r, n, i, I, O, d), f.length !== 0 && u.push(f[0], f[1]);
  }
  for (var P = 0; P < h.length / 4; P++)
    f = _t(e, r, n, i, h[P * 4], h[P * 4 + 1], h[P * 4 + 2], h[P * 4 + 3], !1), f.length !== 0 && u.push(f[0], f[1]);
  if (u.length > 2) {
    for (var R = [u[0], u[1]], M = Math.pow(R[0] - e, 2) + Math.pow(R[1] - r, 2), k = 1; k < u.length / 2; k++) {
      var B = Math.pow(u[k * 2] - e, 2) + Math.pow(u[k * 2 + 1] - r, 2);
      B <= M && (R[0] = u[k * 2], R[1] = u[k * 2 + 1], M = B);
    }
    return R;
  }
  return u;
}, Da = function(e, r, a) {
  var n = [e[0] - r[0], e[1] - r[1]], i = Math.sqrt(n[0] * n[0] + n[1] * n[1]), s = (i - a) / i;
  return s < 0 && (s = 1e-5), [r[0] + s * n[0], r[1] + s * n[1]];
}, st = function(e, r) {
  var a = Gn(e, r);
  return a = Do(a), a;
}, Do = function(e) {
  for (var r, a, n = e.length / 2, i = 1 / 0, s = 1 / 0, o = -1 / 0, l = -1 / 0, u = 0; u < n; u++)
    r = e[2 * u], a = e[2 * u + 1], i = Math.min(i, r), o = Math.max(o, r), s = Math.min(s, a), l = Math.max(l, a);
  for (var f = 2 / (o - i), h = 2 / (l - s), c = 0; c < n; c++)
    r = e[2 * c] = e[2 * c] * f, a = e[2 * c + 1] = e[2 * c + 1] * h, i = Math.min(i, r), o = Math.max(o, r), s = Math.min(s, a), l = Math.max(l, a);
  if (s < -1)
    for (var v = 0; v < n; v++)
      a = e[2 * v + 1] = e[2 * v + 1] + (-1 - s);
  return e;
}, Gn = function(e, r) {
  var a = 1 / e * 2 * Math.PI, n = e % 2 === 0 ? Math.PI / 2 + a / 2 : Math.PI / 2;
  n += r;
  for (var i = new Array(e * 2), s, o = 0; o < e; o++)
    s = o * a + n, i[2 * o] = Math.cos(s), i[2 * o + 1] = Math.sin(-s);
  return i;
}, da = function(e, r) {
  return Math.min(e / 4, r / 4, 8);
}, hi = function(e, r) {
  return Math.min(e / 10, r / 10, 8);
}, So = function() {
  return 8;
}, tg = function(e, r, a) {
  return [e - 2 * r + a, 2 * (r - e), e];
}, zn = function(e, r) {
  return {
    heightOffset: Math.min(15, 0.05 * r),
    widthOffset: Math.min(100, 0.25 * e),
    ctrlPtOffsetPct: 0.05
  };
}, rg = Qe({
  dampingFactor: 0.8,
  precision: 1e-6,
  iterations: 200,
  weight: function(e) {
    return 1;
  }
}), ag = {
  pageRank: function(e) {
    for (var r = rg(e), a = r.dampingFactor, n = r.precision, i = r.iterations, s = r.weight, o = this._private.cy, l = this.byGroup(), u = l.nodes, f = l.edges, h = u.length, c = h * h, v = f.length, d = new Array(c), g = new Array(h), p = (1 - a) / h, y = 0; y < h; y++) {
      for (var E = 0; E < h; E++) {
        var m = y * h + E;
        d[m] = 0;
      }
      g[y] = 0;
    }
    for (var T = 0; T < v; T++) {
      var C = f[T], S = C.data("source"), b = C.data("target");
      if (S !== b) {
        var x = u.indexOfId(S), w = u.indexOfId(b), D = s(C), A = w * h + x;
        d[A] += D, g[x] += D;
      }
    }
    for (var L = 1 / h + p, I = 0; I < h; I++)
      if (g[I] === 0)
        for (var O = 0; O < h; O++) {
          var P = O * h + I;
          d[P] = L;
        }
      else
        for (var R = 0; R < h; R++) {
          var M = R * h + I;
          d[M] = d[M] / g[I] + p;
        }
    for (var k = new Array(h), B = new Array(h), G, F = 0; F < h; F++)
      k[F] = 1;
    for (var $ = 0; $ < i; $++) {
      for (var U = 0; U < h; U++)
        B[U] = 0;
      for (var _ = 0; _ < h; _++)
        for (var Y = 0; Y < h; Y++) {
          var W = _ * h + Y;
          B[_] += d[W] * k[Y];
        }
      zd(B), G = k, k = B, B = G;
      for (var z = 0, K = 0; K < h; K++) {
        var j = G[K] - k[K];
        z += j * j;
      }
      if (z < n)
        break;
    }
    var Q = {
      rank: function(ne) {
        return ne = o.collection(ne)[0], k[u.indexOf(ne)];
      }
    };
    return Q;
  }
  // pageRank
}, Zi = Qe({
  root: null,
  weight: function(e) {
    return 1;
  },
  directed: !1,
  alpha: 0
}), Tr = {
  degreeCentralityNormalized: function(e) {
    e = Zi(e);
    var r = this.cy(), a = this.nodes(), n = a.length;
    if (e.directed) {
      for (var f = {}, h = {}, c = 0, v = 0, d = 0; d < n; d++) {
        var g = a[d], p = g.id();
        e.root = g;
        var y = this.degreeCentrality(e);
        c < y.indegree && (c = y.indegree), v < y.outdegree && (v = y.outdegree), f[p] = y.indegree, h[p] = y.outdegree;
      }
      return {
        indegree: function(m) {
          return c == 0 ? 0 : (ve(m) && (m = r.filter(m)), f[m.id()] / c);
        },
        outdegree: function(m) {
          return v === 0 ? 0 : (ve(m) && (m = r.filter(m)), h[m.id()] / v);
        }
      };
    } else {
      for (var i = {}, s = 0, o = 0; o < n; o++) {
        var l = a[o];
        e.root = l;
        var u = this.degreeCentrality(e);
        s < u.degree && (s = u.degree), i[l.id()] = u.degree;
      }
      return {
        degree: function(m) {
          return s === 0 ? 0 : (ve(m) && (m = r.filter(m)), i[m.id()] / s);
        }
      };
    }
  },
  // degreeCentralityNormalized
  // Implemented from the algorithm in Opsahl's paper
  // "Node centrality in weighted networks: Generalizing degree and shortest paths"
  // check the heading 2 "Degree"
  degreeCentrality: function(e) {
    e = Zi(e);
    var r = this.cy(), a = this, n = e, i = n.root, s = n.weight, o = n.directed, l = n.alpha;
    if (i = r.collection(i)[0], o) {
      for (var v = i.connectedEdges(), d = v.filter(function(S) {
        return S.target().same(i) && a.has(S);
      }), g = v.filter(function(S) {
        return S.source().same(i) && a.has(S);
      }), p = d.length, y = g.length, E = 0, m = 0, T = 0; T < d.length; T++)
        E += s(d[T]);
      for (var C = 0; C < g.length; C++)
        m += s(g[C]);
      return {
        indegree: Math.pow(p, 1 - l) * Math.pow(E, l),
        outdegree: Math.pow(y, 1 - l) * Math.pow(m, l)
      };
    } else {
      for (var u = i.connectedEdges().intersection(a), f = u.length, h = 0, c = 0; c < u.length; c++)
        h += s(u[c]);
      return {
        degree: Math.pow(f, 1 - l) * Math.pow(h, l)
      };
    }
  }
  // degreeCentrality
};
Tr.dc = Tr.degreeCentrality;
Tr.dcn = Tr.degreeCentralityNormalised = Tr.degreeCentralityNormalized;
var Qi = Qe({
  harmonic: !0,
  weight: function() {
    return 1;
  },
  directed: !1,
  root: null
}), Cr = {
  closenessCentralityNormalized: function(e) {
    for (var r = Qi(e), a = r.harmonic, n = r.weight, i = r.directed, s = this.cy(), o = {}, l = 0, u = this.nodes(), f = this.floydWarshall({
      weight: n,
      directed: i
    }), h = 0; h < u.length; h++) {
      for (var c = 0, v = u[h], d = 0; d < u.length; d++)
        if (h !== d) {
          var g = f.distance(v, u[d]);
          a ? c += 1 / g : c += g;
        }
      a || (c = 1 / c), l < c && (l = c), o[v.id()] = c;
    }
    return {
      closeness: function(y) {
        return l == 0 ? 0 : (ve(y) ? y = s.filter(y)[0].id() : y = y.id(), o[y] / l);
      }
    };
  },
  // Implemented from pseudocode from wikipedia
  closenessCentrality: function(e) {
    var r = Qi(e), a = r.root, n = r.weight, i = r.directed, s = r.harmonic;
    a = this.filter(a)[0];
    for (var o = this.dijkstra({
      root: a,
      weight: n,
      directed: i
    }), l = 0, u = this.nodes(), f = 0; f < u.length; f++) {
      var h = u[f];
      if (!h.same(a)) {
        var c = o.distanceTo(h);
        s ? l += 1 / c : l += c;
      }
    }
    return s ? l : 1 / l;
  }
  // closenessCentrality
};
Cr.cc = Cr.closenessCentrality;
Cr.ccn = Cr.closenessCentralityNormalised = Cr.closenessCentralityNormalized;
var ng = Qe({
  weight: null,
  directed: !1
}), $n = {
  // Implemented from the algorithm in the paper "On Variants of Shortest-Path Betweenness Centrality and their Generic Computation" by Ulrik Brandes
  betweennessCentrality: function(e) {
    for (var r = ng(e), a = r.directed, n = r.weight, i = n != null, s = this.cy(), o = this.nodes(), l = {}, u = {}, f = 0, h = {
      set: function(m, T) {
        u[m] = T, T > f && (f = T);
      },
      get: function(m) {
        return u[m];
      }
    }, c = 0; c < o.length; c++) {
      var v = o[c], d = v.id();
      a ? l[d] = v.outgoers().nodes() : l[d] = v.openNeighborhood().nodes(), h.set(d, 0);
    }
    for (var g = function(m) {
      for (var T = o[m].id(), C = [], S = {}, b = {}, x = {}, w = new ha.default(function(Y, W) {
        return x[Y] - x[W];
      }), D = 0; D < o.length; D++) {
        var A = o[D].id();
        S[A] = [], b[A] = 0, x[A] = 1 / 0;
      }
      for (b[T] = 1, x[T] = 0, w.push(T); !w.empty(); ) {
        var L = w.pop();
        if (C.push(L), i)
          for (var I = 0; I < l[L].length; I++) {
            var O = l[L][I], P = s.getElementById(L), R = void 0;
            P.edgesTo(O).length > 0 ? R = P.edgesTo(O)[0] : R = O.edgesTo(P)[0];
            var M = n(R);
            O = O.id(), x[O] > x[L] + M && (x[O] = x[L] + M, w.nodes.indexOf(O) < 0 ? w.push(O) : w.updateItem(O), b[O] = 0, S[O] = []), x[O] == x[L] + M && (b[O] = b[O] + b[L], S[O].push(L));
          }
        else
          for (var k = 0; k < l[L].length; k++) {
            var B = l[L][k].id();
            x[B] == 1 / 0 && (w.push(B), x[B] = x[L] + 1), x[B] == x[L] + 1 && (b[B] = b[B] + b[L], S[B].push(L));
          }
      }
      for (var G = {}, F = 0; F < o.length; F++)
        G[o[F].id()] = 0;
      for (; C.length > 0; ) {
        for (var $ = C.pop(), U = 0; U < S[$].length; U++) {
          var _ = S[$][U];
          G[_] = G[_] + b[_] / b[$] * (1 + G[$]);
        }
        $ != o[m].id() && h.set($, h.get($) + G[$]);
      }
    }, p = 0; p < o.length; p++)
      g(p);
    var y = {
      betweenness: function(m) {
        var T = s.collection(m).id();
        return h.get(T);
      },
      betweennessNormalized: function(m) {
        if (f == 0)
          return 0;
        var T = s.collection(m).id();
        return h.get(T) / f;
      }
    };
    return y.betweennessNormalised = y.betweennessNormalized, y;
  }
  // betweennessCentrality
};
$n.bc = $n.betweennessCentrality;
var ig = Qe({
  expandFactor: 2,
  // affects time of computation and cluster granularity to some extent: M * M
  inflateFactor: 2,
  // affects cluster granularity (the greater the value, the more clusters): M(i,j) / E(j)
  multFactor: 1,
  // optional self loops for each node. Use a neutral value to improve cluster computations.
  maxIterations: 20,
  // maximum number of iterations of the MCL algorithm in a single run
  attributes: [
    // attributes/features used to group nodes, ie. similarity values between nodes
    function(t) {
      return 1;
    }
  ]
}), sg = function(e) {
  return ig(e);
}, og = function(e, r) {
  for (var a = 0, n = 0; n < r.length; n++)
    a += r[n](e);
  return a;
}, lg = function(e, r, a) {
  for (var n = 0; n < r; n++)
    e[n * r + n] = a;
}, Lo = function(e, r) {
  for (var a, n = 0; n < r; n++) {
    a = 0;
    for (var i = 0; i < r; i++)
      a += e[i * r + n];
    for (var s = 0; s < r; s++)
      e[s * r + n] = e[s * r + n] / a;
  }
}, ug = function(e, r, a) {
  for (var n = new Array(a * a), i = 0; i < a; i++) {
    for (var s = 0; s < a; s++)
      n[i * a + s] = 0;
    for (var o = 0; o < a; o++)
      for (var l = 0; l < a; l++)
        n[i * a + l] += e[i * a + o] * r[o * a + l];
  }
  return n;
}, fg = function(e, r, a) {
  for (var n = e.slice(0), i = 1; i < a; i++)
    e = ug(e, n, r);
  return e;
}, hg = function(e, r, a) {
  for (var n = new Array(r * r), i = 0; i < r * r; i++)
    n[i] = Math.pow(e[i], a);
  return Lo(n, r), n;
}, vg = function(e, r, a, n) {
  for (var i = 0; i < a; i++) {
    var s = Math.round(e[i] * Math.pow(10, n)) / Math.pow(10, n), o = Math.round(r[i] * Math.pow(10, n)) / Math.pow(10, n);
    if (s !== o)
      return !1;
  }
  return !0;
}, cg = function(e, r, a, n) {
  for (var i = [], s = 0; s < r; s++) {
    for (var o = [], l = 0; l < r; l++)
      Math.round(e[s * r + l] * 1e3) / 1e3 > 0 && o.push(a[l]);
    o.length !== 0 && i.push(n.collection(o));
  }
  return i;
}, dg = function(e, r) {
  for (var a = 0; a < e.length; a++)
    if (!r[a] || e[a].id() !== r[a].id())
      return !1;
  return !0;
}, gg = function(e) {
  for (var r = 0; r < e.length; r++)
    for (var a = 0; a < e.length; a++)
      r != a && dg(e[r], e[a]) && e.splice(a, 1);
  return e;
}, Ji = function(e) {
  for (var r = this.nodes(), a = this.edges(), n = this.cy(), i = sg(e), s = {}, o = 0; o < r.length; o++)
    s[r[o].id()] = o;
  for (var l = r.length, u = l * l, f = new Array(u), h, c = 0; c < u; c++)
    f[c] = 0;
  for (var v = 0; v < a.length; v++) {
    var d = a[v], g = s[d.source().id()], p = s[d.target().id()], y = og(d, i.attributes);
    f[g * l + p] += y, f[p * l + g] += y;
  }
  lg(f, l, i.multFactor), Lo(f, l);
  for (var E = !0, m = 0; E && m < i.maxIterations; )
    E = !1, h = fg(f, l, i.expandFactor), f = hg(h, l, i.inflateFactor), vg(f, h, u, 4) || (E = !0), m++;
  var T = cg(f, l, r, n);
  return T = gg(T), T;
}, pg = {
  markovClustering: Ji,
  mcl: Ji
}, yg = function(e) {
  return e;
}, Ao = function(e, r) {
  return Math.abs(r - e);
}, ji = function(e, r, a) {
  return e + Ao(r, a);
}, es = function(e, r, a) {
  return e + Math.pow(a - r, 2);
}, mg = function(e) {
  return Math.sqrt(e);
}, bg = function(e, r, a) {
  return Math.max(e, Ao(r, a));
}, _r = function(e, r, a, n, i) {
  for (var s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : yg, o = n, l, u, f = 0; f < e; f++)
    l = r(f), u = a(f), o = i(o, l, u);
  return s(o);
}, Lr = {
  euclidean: function(e, r, a) {
    return e >= 2 ? _r(e, r, a, 0, es, mg) : _r(e, r, a, 0, ji);
  },
  squaredEuclidean: function(e, r, a) {
    return _r(e, r, a, 0, es);
  },
  manhattan: function(e, r, a) {
    return _r(e, r, a, 0, ji);
  },
  max: function(e, r, a) {
    return _r(e, r, a, -1 / 0, bg);
  }
};
Lr["squared-euclidean"] = Lr.squaredEuclidean;
Lr.squaredeuclidean = Lr.squaredEuclidean;
function hn(t, e, r, a, n, i) {
  var s;
  return Be(t) ? s = t : s = Lr[t] || Lr.euclidean, e === 0 && Be(t) ? s(n, i) : s(e, r, a, n, i);
}
var Eg = Qe({
  k: 2,
  m: 2,
  sensitivityThreshold: 1e-4,
  distance: "euclidean",
  maxIterations: 10,
  attributes: [],
  testMode: !1,
  testCentroids: null
}), vi = function(e) {
  return Eg(e);
}, Ka = function(e, r, a, n, i) {
  var s = i !== "kMedoids", o = s ? function(h) {
    return a[h];
  } : function(h) {
    return n[h](a);
  }, l = function(c) {
    return n[c](r);
  }, u = a, f = r;
  return hn(e, n.length, o, l, u, f);
}, An = function(e, r, a) {
  for (var n = a.length, i = new Array(n), s = new Array(n), o = new Array(r), l = null, u = 0; u < n; u++)
    i[u] = e.min(a[u]).value, s[u] = e.max(a[u]).value;
  for (var f = 0; f < r; f++) {
    l = [];
    for (var h = 0; h < n; h++)
      l[h] = Math.random() * (s[h] - i[h]) + i[h];
    o[f] = l;
  }
  return o;
}, Oo = function(e, r, a, n, i) {
  for (var s = 1 / 0, o = 0, l = 0; l < r.length; l++) {
    var u = Ka(a, e, r[l], n, i);
    u < s && (s = u, o = l);
  }
  return o;
}, No = function(e, r, a) {
  for (var n = [], i = null, s = 0; s < r.length; s++)
    i = r[s], a[i.id()] === e && n.push(i);
  return n;
}, wg = function(e, r, a) {
  return Math.abs(r - e) <= a;
}, xg = function(e, r, a) {
  for (var n = 0; n < e.length; n++)
    for (var i = 0; i < e[n].length; i++) {
      var s = Math.abs(e[n][i] - r[n][i]);
      if (s > a)
        return !1;
    }
  return !0;
}, Tg = function(e, r, a) {
  for (var n = 0; n < a; n++)
    if (e === r[n])
      return !0;
  return !1;
}, ts = function(e, r) {
  var a = new Array(r);
  if (e.length < 50)
    for (var n = 0; n < r; n++) {
      for (var i = e[Math.floor(Math.random() * e.length)]; Tg(i, a, n); )
        i = e[Math.floor(Math.random() * e.length)];
      a[n] = i;
    }
  else
    for (var s = 0; s < r; s++)
      a[s] = e[Math.floor(Math.random() * e.length)];
  return a;
}, rs = function(e, r, a) {
  for (var n = 0, i = 0; i < r.length; i++)
    n += Ka("manhattan", r[i], e, a, "kMedoids");
  return n;
}, Cg = function(e) {
  var r = this.cy(), a = this.nodes(), n = null, i = vi(e), s = new Array(i.k), o = {}, l;
  i.testMode ? typeof i.testCentroids == "number" ? (i.testCentroids, l = An(a, i.k, i.attributes)) : Ue(i.testCentroids) === "object" ? l = i.testCentroids : l = An(a, i.k, i.attributes) : l = An(a, i.k, i.attributes);
  for (var u = !0, f = 0; u && f < i.maxIterations; ) {
    for (var h = 0; h < a.length; h++)
      n = a[h], o[n.id()] = Oo(n, l, i.distance, i.attributes, "kMeans");
    u = !1;
    for (var c = 0; c < i.k; c++) {
      var v = No(c, a, o);
      if (v.length !== 0) {
        for (var d = i.attributes.length, g = l[c], p = new Array(d), y = new Array(d), E = 0; E < d; E++) {
          y[E] = 0;
          for (var m = 0; m < v.length; m++)
            n = v[m], y[E] += i.attributes[E](n);
          p[E] = y[E] / v.length, wg(p[E], g[E], i.sensitivityThreshold) || (u = !0);
        }
        l[c] = p, s[c] = r.collection(v);
      }
    }
    f++;
  }
  return s;
}, Dg = function(e) {
  var r = this.cy(), a = this.nodes(), n = null, i = vi(e), s = new Array(i.k), o, l = {}, u, f = new Array(i.k);
  i.testMode ? typeof i.testCentroids == "number" || (Ue(i.testCentroids) === "object" ? o = i.testCentroids : o = ts(a, i.k)) : o = ts(a, i.k);
  for (var h = !0, c = 0; h && c < i.maxIterations; ) {
    for (var v = 0; v < a.length; v++)
      n = a[v], l[n.id()] = Oo(n, o, i.distance, i.attributes, "kMedoids");
    h = !1;
    for (var d = 0; d < o.length; d++) {
      var g = No(d, a, l);
      if (g.length !== 0) {
        f[d] = rs(o[d], g, i.attributes);
        for (var p = 0; p < g.length; p++)
          u = rs(g[p], g, i.attributes), u < f[d] && (f[d] = u, o[d] = g[p], h = !0);
        s[d] = r.collection(g);
      }
    }
    c++;
  }
  return s;
}, Sg = function(e, r, a, n, i) {
  for (var s, o, l = 0; l < r.length; l++)
    for (var u = 0; u < e.length; u++)
      n[l][u] = Math.pow(a[l][u], i.m);
  for (var f = 0; f < e.length; f++)
    for (var h = 0; h < i.attributes.length; h++) {
      s = 0, o = 0;
      for (var c = 0; c < r.length; c++)
        s += n[c][f] * i.attributes[h](r[c]), o += n[c][f];
      e[f][h] = s / o;
    }
}, Lg = function(e, r, a, n, i) {
  for (var s = 0; s < e.length; s++)
    r[s] = e[s].slice();
  for (var o, l, u, f = 2 / (i.m - 1), h = 0; h < a.length; h++)
    for (var c = 0; c < n.length; c++) {
      o = 0;
      for (var v = 0; v < a.length; v++)
        l = Ka(i.distance, n[c], a[h], i.attributes, "cmeans"), u = Ka(i.distance, n[c], a[v], i.attributes, "cmeans"), o += Math.pow(l / u, f);
      e[c][h] = 1 / o;
    }
}, Ag = function(e, r, a, n) {
  for (var i = new Array(a.k), s = 0; s < i.length; s++)
    i[s] = [];
  for (var o, l, u = 0; u < r.length; u++) {
    o = -1 / 0, l = -1;
    for (var f = 0; f < r[0].length; f++)
      r[u][f] > o && (o = r[u][f], l = f);
    i[l].push(e[u]);
  }
  for (var h = 0; h < i.length; h++)
    i[h] = n.collection(i[h]);
  return i;
}, as = function(e) {
  var r = this.cy(), a = this.nodes(), n = vi(e), i, s, o, l, u;
  l = new Array(a.length);
  for (var f = 0; f < a.length; f++)
    l[f] = new Array(n.k);
  o = new Array(a.length);
  for (var h = 0; h < a.length; h++)
    o[h] = new Array(n.k);
  for (var c = 0; c < a.length; c++) {
    for (var v = 0, d = 0; d < n.k; d++)
      o[c][d] = Math.random(), v += o[c][d];
    for (var g = 0; g < n.k; g++)
      o[c][g] = o[c][g] / v;
  }
  s = new Array(n.k);
  for (var p = 0; p < n.k; p++)
    s[p] = new Array(n.attributes.length);
  u = new Array(a.length);
  for (var y = 0; y < a.length; y++)
    u[y] = new Array(n.k);
  for (var E = !0, m = 0; E && m < n.maxIterations; )
    E = !1, Sg(s, a, o, u, n), Lg(o, l, s, a, n), xg(o, l, n.sensitivityThreshold) || (E = !0), m++;
  return i = Ag(a, o, n, r), {
    clusters: i,
    degreeOfMembership: o
  };
}, Og = {
  kMeans: Cg,
  kMedoids: Dg,
  fuzzyCMeans: as,
  fcm: as
}, Ng = Qe({
  distance: "euclidean",
  // distance metric to compare nodes
  linkage: "min",
  // linkage criterion : how to determine the distance between clusters of nodes
  mode: "threshold",
  // mode:'threshold' => clusters must be threshold distance apart
  threshold: 1 / 0,
  // the distance threshold
  // mode:'dendrogram' => the nodes are organised as leaves in a tree (siblings are close), merging makes clusters
  addDendrogram: !1,
  // whether to add the dendrogram to the graph for viz
  dendrogramDepth: 0,
  // depth at which dendrogram branches are merged into the returned clusters
  attributes: []
  // array of attr functions
}), Ig = {
  single: "min",
  complete: "max"
}, Mg = function(e) {
  var r = Ng(e), a = Ig[r.linkage];
  return a != null && (r.linkage = a), r;
}, ns = function(e, r, a, n, i) {
  for (var s = 0, o = 1 / 0, l, u = i.attributes, f = function(w, D) {
    return hn(i.distance, u.length, function(A) {
      return u[A](w);
    }, function(A) {
      return u[A](D);
    }, w, D);
  }, h = 0; h < e.length; h++) {
    var c = e[h].key, v = a[c][n[c]];
    v < o && (s = c, o = v);
  }
  if (i.mode === "threshold" && o >= i.threshold || i.mode === "dendrogram" && e.length === 1)
    return !1;
  var d = r[s], g = r[n[s]], p;
  i.mode === "dendrogram" ? p = {
    left: d,
    right: g,
    key: d.key
  } : p = {
    value: d.value.concat(g.value),
    key: d.key
  }, e[d.index] = p, e.splice(g.index, 1), r[d.key] = p;
  for (var y = 0; y < e.length; y++) {
    var E = e[y];
    d.key === E.key ? l = 1 / 0 : i.linkage === "min" ? (l = a[d.key][E.key], a[d.key][E.key] > a[g.key][E.key] && (l = a[g.key][E.key])) : i.linkage === "max" ? (l = a[d.key][E.key], a[d.key][E.key] < a[g.key][E.key] && (l = a[g.key][E.key])) : i.linkage === "mean" ? l = (a[d.key][E.key] * d.size + a[g.key][E.key] * g.size) / (d.size + g.size) : i.mode === "dendrogram" ? l = f(E.value, d.value) : l = f(E.value[0], d.value[0]), a[d.key][E.key] = a[E.key][d.key] = l;
  }
  for (var m = 0; m < e.length; m++) {
    var T = e[m].key;
    if (n[T] === d.key || n[T] === g.key) {
      for (var C = T, S = 0; S < e.length; S++) {
        var b = e[S].key;
        a[T][b] < a[T][C] && (C = b);
      }
      n[T] = C;
    }
    e[m].index = m;
  }
  return d.key = g.key = d.index = g.index = null, !0;
}, Sa = function t(e, r, a) {
  e && (e.value ? r.push(e.value) : (e.left && t(e.left, r), e.right && t(e.right, r)));
}, Rg = function t(e, r) {
  if (!e)
    return "";
  if (e.left && e.right) {
    var a = t(e.left, r), n = t(e.right, r), i = r.add({
      group: "nodes",
      data: {
        id: a + "," + n
      }
    });
    return r.add({
      group: "edges",
      data: {
        source: a,
        target: i.id()
      }
    }), r.add({
      group: "edges",
      data: {
        source: n,
        target: i.id()
      }
    }), i.id();
  } else if (e.value)
    return e.value.id();
}, kg = function t(e, r, a) {
  if (!e)
    return [];
  var n = [], i = [], s = [];
  return r === 0 ? (e.left && Sa(e.left, n), e.right && Sa(e.right, i), s = n.concat(i), [a.collection(s)]) : r === 1 ? e.value ? [a.collection(e.value)] : (e.left && Sa(e.left, n), e.right && Sa(e.right, i), [a.collection(n), a.collection(i)]) : e.value ? [a.collection(e.value)] : (e.left && (n = t(e.left, r - 1, a)), e.right && (i = t(e.right, r - 1, a)), n.concat(i));
}, is = function(e) {
  for (var r = this.cy(), a = this.nodes(), n = Mg(e), i = n.attributes, s = function(m, T) {
    return hn(n.distance, i.length, function(C) {
      return i[C](m);
    }, function(C) {
      return i[C](T);
    }, m, T);
  }, o = [], l = [], u = [], f = [], h = 0; h < a.length; h++) {
    var c = {
      value: n.mode === "dendrogram" ? a[h] : [a[h]],
      key: h,
      index: h
    };
    o[h] = c, f[h] = c, l[h] = [], u[h] = 0;
  }
  for (var v = 0; v < o.length; v++)
    for (var d = 0; d <= v; d++) {
      var g = void 0;
      n.mode === "dendrogram" ? g = v === d ? 1 / 0 : s(o[v].value, o[d].value) : g = v === d ? 1 / 0 : s(o[v].value[0], o[d].value[0]), l[v][d] = g, l[d][v] = g, g < l[v][u[v]] && (u[v] = d);
    }
  for (var p = ns(o, f, l, u, n); p; )
    p = ns(o, f, l, u, n);
  var y;
  return n.mode === "dendrogram" ? (y = kg(o[0], n.dendrogramDepth, r), n.addDendrogram && Rg(o[0], r)) : (y = new Array(o.length), o.forEach(function(E, m) {
    E.key = E.index = null, y[m] = r.collection(E.value);
  })), y;
}, Pg = {
  hierarchicalClustering: is,
  hca: is
}, Bg = Qe({
  distance: "euclidean",
  // distance metric to compare attributes between two nodes
  preference: "median",
  // suitability of a data point to serve as an exemplar
  damping: 0.8,
  // damping factor between [0.5, 1)
  maxIterations: 1e3,
  // max number of iterations to run
  minIterations: 100,
  // min number of iterations to run in order for clustering to stop
  attributes: [
    // functions to quantify the similarity between any two points
    // e.g. node => node.data('weight')
  ]
}), Fg = function(e) {
  var r = e.damping, a = e.preference;
  0.5 <= r && r < 1 || Ge("Damping must range on [0.5, 1).  Got: ".concat(r));
  var n = ["median", "mean", "min", "max"];
  return n.some(function(i) {
    return i === a;
  }) || ae(a) || Ge("Preference must be one of [".concat(n.map(function(i) {
    return "'".concat(i, "'");
  }).join(", "), "] or a number.  Got: ").concat(a)), Bg(e);
}, Gg = function(e, r, a, n) {
  var i = function(o, l) {
    return n[l](o);
  };
  return -hn(e, n.length, function(s) {
    return i(r, s);
  }, function(s) {
    return i(a, s);
  }, r, a);
}, zg = function(e, r) {
  var a = null;
  return r === "median" ? a = Fd(e) : r === "mean" ? a = Bd(e) : r === "min" ? a = kd(e) : r === "max" ? a = Pd(e) : a = r, a;
}, $g = function(e, r, a) {
  for (var n = [], i = 0; i < e; i++)
    r[i * e + i] + a[i * e + i] > 0 && n.push(i);
  return n;
}, ss = function(e, r, a) {
  for (var n = [], i = 0; i < e; i++) {
    for (var s = -1, o = -1 / 0, l = 0; l < a.length; l++) {
      var u = a[l];
      r[i * e + u] > o && (s = u, o = r[i * e + u]);
    }
    s > 0 && n.push(s);
  }
  for (var f = 0; f < a.length; f++)
    n[a[f]] = a[f];
  return n;
}, Vg = function(e, r, a) {
  for (var n = ss(e, r, a), i = 0; i < a.length; i++) {
    for (var s = [], o = 0; o < n.length; o++)
      n[o] === a[i] && s.push(o);
    for (var l = -1, u = -1 / 0, f = 0; f < s.length; f++) {
      for (var h = 0, c = 0; c < s.length; c++)
        h += r[s[c] * e + s[f]];
      h > u && (l = f, u = h);
    }
    a[i] = s[l];
  }
  return n = ss(e, r, a), n;
}, os = function(e) {
  for (var r = this.cy(), a = this.nodes(), n = Fg(e), i = {}, s = 0; s < a.length; s++)
    i[a[s].id()] = s;
  var o, l, u, f, h, c;
  o = a.length, l = o * o, u = new Array(l);
  for (var v = 0; v < l; v++)
    u[v] = -1 / 0;
  for (var d = 0; d < o; d++)
    for (var g = 0; g < o; g++)
      d !== g && (u[d * o + g] = Gg(n.distance, a[d], a[g], n.attributes));
  f = zg(u, n.preference);
  for (var p = 0; p < o; p++)
    u[p * o + p] = f;
  h = new Array(l);
  for (var y = 0; y < l; y++)
    h[y] = 0;
  c = new Array(l);
  for (var E = 0; E < l; E++)
    c[E] = 0;
  for (var m = new Array(o), T = new Array(o), C = new Array(o), S = 0; S < o; S++)
    m[S] = 0, T[S] = 0, C[S] = 0;
  for (var b = new Array(o * n.minIterations), x = 0; x < b.length; x++)
    b[x] = 0;
  var w;
  for (w = 0; w < n.maxIterations; w++) {
    for (var D = 0; D < o; D++) {
      for (var A = -1 / 0, L = -1 / 0, I = -1, O = 0, P = 0; P < o; P++)
        m[P] = h[D * o + P], O = c[D * o + P] + u[D * o + P], O >= A ? (L = A, A = O, I = P) : O > L && (L = O);
      for (var R = 0; R < o; R++)
        h[D * o + R] = (1 - n.damping) * (u[D * o + R] - A) + n.damping * m[R];
      h[D * o + I] = (1 - n.damping) * (u[D * o + I] - L) + n.damping * m[I];
    }
    for (var M = 0; M < o; M++) {
      for (var k = 0, B = 0; B < o; B++)
        m[B] = c[B * o + M], T[B] = Math.max(0, h[B * o + M]), k += T[B];
      k -= T[M], T[M] = h[M * o + M], k += T[M];
      for (var G = 0; G < o; G++)
        c[G * o + M] = (1 - n.damping) * Math.min(0, k - T[G]) + n.damping * m[G];
      c[M * o + M] = (1 - n.damping) * (k - T[M]) + n.damping * m[M];
    }
    for (var F = 0, $ = 0; $ < o; $++) {
      var U = c[$ * o + $] + h[$ * o + $] > 0 ? 1 : 0;
      b[w % n.minIterations * o + $] = U, F += U;
    }
    if (F > 0 && (w >= n.minIterations - 1 || w == n.maxIterations - 1)) {
      for (var _ = 0, Y = 0; Y < o; Y++) {
        C[Y] = 0;
        for (var W = 0; W < n.minIterations; W++)
          C[Y] += b[W * o + Y];
        (C[Y] === 0 || C[Y] === n.minIterations) && _++;
      }
      if (_ === o)
        break;
    }
  }
  for (var z = $g(o, h, c), K = Vg(o, u, z), j = {}, Q = 0; Q < z.length; Q++)
    j[z[Q]] = [];
  for (var ee = 0; ee < a.length; ee++) {
    var ne = i[a[ee].id()], ce = K[ne];
    ce != null && j[ce].push(a[ee]);
  }
  for (var te = new Array(z.length), re = 0; re < z.length; re++)
    te[re] = r.collection(j[z[re]]);
  return te;
}, _g = {
  affinityPropagation: os,
  ap: os
}, Ug = Qe({
  root: void 0,
  directed: !1
}), Hg = {
  hierholzer: function(e) {
    if (!De(e)) {
      var r = arguments;
      e = {
        root: r[0],
        directed: r[1]
      };
    }
    var a = Ug(e), n = a.root, i = a.directed, s = this, o = !1, l, u, f;
    n && (f = ve(n) ? this.filter(n)[0].id() : n[0].id());
    var h = {}, c = {};
    i ? s.forEach(function(E) {
      var m = E.id();
      if (E.isNode()) {
        var T = E.indegree(!0), C = E.outdegree(!0), S = T - C, b = C - T;
        S == 1 ? l ? o = !0 : l = m : b == 1 ? u ? o = !0 : u = m : (b > 1 || S > 1) && (o = !0), h[m] = [], E.outgoers().forEach(function(x) {
          x.isEdge() && h[m].push(x.id());
        });
      } else
        c[m] = [void 0, E.target().id()];
    }) : s.forEach(function(E) {
      var m = E.id();
      if (E.isNode()) {
        var T = E.degree(!0);
        T % 2 && (l ? u ? o = !0 : u = m : l = m), h[m] = [], E.connectedEdges().forEach(function(C) {
          return h[m].push(C.id());
        });
      } else
        c[m] = [E.source().id(), E.target().id()];
    });
    var v = {
      found: !1,
      trail: void 0
    };
    if (o)
      return v;
    if (u && l)
      if (i) {
        if (f && u != f)
          return v;
        f = u;
      } else {
        if (f && u != f && l != f)
          return v;
        f || (f = u);
      }
    else
      f || (f = s[0].id());
    var d = function(m) {
      for (var T = m, C = [m], S, b, x; h[T].length; )
        S = h[T].shift(), b = c[S][0], x = c[S][1], T != x ? (h[x] = h[x].filter(function(w) {
          return w != S;
        }), T = x) : !i && T != b && (h[b] = h[b].filter(function(w) {
          return w != S;
        }), T = b), C.unshift(S), C.unshift(T);
      return C;
    }, g = [], p = [];
    for (p = d(f); p.length != 1; )
      h[p[0]].length == 0 ? (g.unshift(s.getElementById(p.shift())), g.unshift(s.getElementById(p.shift()))) : p = d(p.shift()).concat(p);
    g.unshift(s.getElementById(p.shift()));
    for (var y in h)
      if (h[y].length)
        return v;
    return v.found = !0, v.trail = this.spawn(g, !0), v;
  }
}, La = function() {
  var e = this, r = {}, a = 0, n = 0, i = [], s = [], o = {}, l = function(c, v) {
    for (var d = s.length - 1, g = [], p = e.spawn(); s[d].x != c || s[d].y != v; )
      g.push(s.pop().edge), d--;
    g.push(s.pop().edge), g.forEach(function(y) {
      var E = y.connectedNodes().intersection(e);
      p.merge(y), E.forEach(function(m) {
        var T = m.id(), C = m.connectedEdges().intersection(e);
        p.merge(m), r[T].cutVertex ? p.merge(C.filter(function(S) {
          return S.isLoop();
        })) : p.merge(C);
      });
    }), i.push(p);
  }, u = function h(c, v, d) {
    c === d && (n += 1), r[v] = {
      id: a,
      low: a++,
      cutVertex: !1
    };
    var g = e.getElementById(v).connectedEdges().intersection(e);
    if (g.size() === 0)
      i.push(e.spawn(e.getElementById(v)));
    else {
      var p, y, E, m;
      g.forEach(function(T) {
        p = T.source().id(), y = T.target().id(), E = p === v ? y : p, E !== d && (m = T.id(), o[m] || (o[m] = !0, s.push({
          x: v,
          y: E,
          edge: T
        })), E in r ? r[v].low = Math.min(r[v].low, r[E].id) : (h(c, E, v), r[v].low = Math.min(r[v].low, r[E].low), r[v].id <= r[E].low && (r[v].cutVertex = !0, l(v, E))));
      });
    }
  };
  e.forEach(function(h) {
    if (h.isNode()) {
      var c = h.id();
      c in r || (n = 0, u(c, c), r[c].cutVertex = n > 1);
    }
  });
  var f = Object.keys(r).filter(function(h) {
    return r[h].cutVertex;
  }).map(function(h) {
    return e.getElementById(h);
  });
  return {
    cut: e.spawn(f),
    components: i
  };
}, Yg = {
  hopcroftTarjanBiconnected: La,
  htbc: La,
  htb: La,
  hopcroftTarjanBiconnectedComponents: La
}, Aa = function() {
  var e = this, r = {}, a = 0, n = [], i = [], s = e.spawn(e), o = function l(u) {
    i.push(u), r[u] = {
      index: a,
      low: a++,
      explored: !1
    };
    var f = e.getElementById(u).connectedEdges().intersection(e);
    if (f.forEach(function(g) {
      var p = g.target().id();
      p !== u && (p in r || l(p), r[p].explored || (r[u].low = Math.min(r[u].low, r[p].low)));
    }), r[u].index === r[u].low) {
      for (var h = e.spawn(); ; ) {
        var c = i.pop();
        if (h.merge(e.getElementById(c)), r[c].low = r[u].index, r[c].explored = !0, c === u)
          break;
      }
      var v = h.edgesWith(h), d = h.merge(v);
      n.push(d), s = s.difference(d);
    }
  };
  return e.forEach(function(l) {
    if (l.isNode()) {
      var u = l.id();
      u in r || o(u);
    }
  }), {
    cut: s,
    components: n
  };
}, Xg = {
  tarjanStronglyConnected: Aa,
  tsc: Aa,
  tscc: Aa,
  tarjanStronglyConnectedComponents: Aa
}, Io = {};
[ta, xd, Td, Dd, Ld, Od, Md, ag, Tr, Cr, $n, pg, Og, Pg, _g, Hg, Yg, Xg].forEach(function(t) {
  de(Io, t);
});
/*!
Embeddable Minimum Strictly-Compliant Promises/A+ 1.1.1 Thenable
Copyright (c) 2013-2014 Ralf S. Engelschall (http://engelschall.com)
Licensed under The MIT License (http://opensource.org/licenses/MIT)
*/
var Mo = 0, Ro = 1, ko = 2, kt = function t(e) {
  if (!(this instanceof t))
    return new t(e);
  this.id = "Thenable/1.0.7", this.state = Mo, this.fulfillValue = void 0, this.rejectReason = void 0, this.onFulfilled = [], this.onRejected = [], this.proxy = {
    then: this.then.bind(this)
  }, typeof e == "function" && e.call(this, this.fulfill.bind(this), this.reject.bind(this));
};
kt.prototype = {
  /*  promise resolving methods  */
  fulfill: function(e) {
    return ls(this, Ro, "fulfillValue", e);
  },
  reject: function(e) {
    return ls(this, ko, "rejectReason", e);
  },
  /*  "The then Method" [Promises/A+ 1.1, 1.2, 2.2]  */
  then: function(e, r) {
    var a = this, n = new kt();
    return a.onFulfilled.push(fs(e, n, "fulfill")), a.onRejected.push(fs(r, n, "reject")), Po(a), n.proxy;
  }
};
var ls = function(e, r, a, n) {
  return e.state === Mo && (e.state = r, e[a] = n, Po(e)), e;
}, Po = function(e) {
  e.state === Ro ? us(e, "onFulfilled", e.fulfillValue) : e.state === ko && us(e, "onRejected", e.rejectReason);
}, us = function(e, r, a) {
  if (e[r].length !== 0) {
    var n = e[r];
    e[r] = [];
    var i = function() {
      for (var o = 0; o < n.length; o++)
        n[o](a);
    };
    typeof setImmediate == "function" ? setImmediate(i) : setTimeout(i, 0);
  }
}, fs = function(e, r, a) {
  return function(n) {
    if (typeof e != "function")
      r[a].call(r, n);
    else {
      var i;
      try {
        i = e(n);
      } catch (s) {
        r.reject(s);
        return;
      }
      Wg(r, i);
    }
  };
}, Wg = function t(e, r) {
  if (e === r || e.proxy === r) {
    e.reject(new TypeError("cannot resolve promise with itself"));
    return;
  }
  var a;
  if (Ue(r) === "object" && r !== null || typeof r == "function")
    try {
      a = r.then;
    } catch (i) {
      e.reject(i);
      return;
    }
  if (typeof a == "function") {
    var n = !1;
    try {
      a.call(
        r,
        /*  resolvePromise  */
        /*  [Promises/A+ 2.3.3.3.1]  */
        function(i) {
          n || (n = !0, i === r ? e.reject(new TypeError("circular thenable chain")) : t(e, i));
        },
        /*  rejectPromise  */
        /*  [Promises/A+ 2.3.3.3.2]  */
        function(i) {
          n || (n = !0, e.reject(i));
        }
      );
    } catch (i) {
      n || e.reject(i);
    }
    return;
  }
  e.fulfill(r);
};
kt.all = function(t) {
  return new kt(function(e, r) {
    for (var a = new Array(t.length), n = 0, i = function(l, u) {
      a[l] = u, n++, n === t.length && e(a);
    }, s = 0; s < t.length; s++)
      (function(o) {
        var l = t[o], u = l != null && l.then != null;
        if (u)
          l.then(function(h) {
            i(o, h);
          }, function(h) {
            r(h);
          });
        else {
          var f = l;
          i(o, f);
        }
      })(s);
  });
};
kt.resolve = function(t) {
  return new kt(function(e, r) {
    e(t);
  });
};
kt.reject = function(t) {
  return new kt(function(e, r) {
    r(t);
  });
};
var Rr = typeof Promise != "undefined" ? Promise : kt, Vn = function(e, r, a) {
  var n = ni(e), i = !n, s = this._private = de({
    duration: 1e3
  }, r, a);
  if (s.target = e, s.style = s.style || s.css, s.started = !1, s.playing = !1, s.hooked = !1, s.applying = !1, s.progress = 0, s.completes = [], s.frames = [], s.complete && Be(s.complete) && s.completes.push(s.complete), i) {
    var o = e.position();
    s.startPosition = s.startPosition || {
      x: o.x,
      y: o.y
    }, s.startStyle = s.startStyle || e.cy().style().getAnimationStartStyle(e, s.style);
  }
  if (n) {
    var l = e.pan();
    s.startPan = {
      x: l.x,
      y: l.y
    }, s.startZoom = e.zoom();
  }
  this.length = 1, this[0] = this;
}, ir = Vn.prototype;
de(ir, {
  instanceString: function() {
    return "animation";
  },
  hook: function() {
    var e = this._private;
    if (!e.hooked) {
      var r, a = e.target._private.animation;
      e.queue ? r = a.queue : r = a.current, r.push(this), ht(e.target) && e.target.cy().addToAnimationPool(e.target), e.hooked = !0;
    }
    return this;
  },
  play: function() {
    var e = this._private;
    return e.progress === 1 && (e.progress = 0), e.playing = !0, e.started = !1, e.stopped = !1, this.hook(), this;
  },
  playing: function() {
    return this._private.playing;
  },
  apply: function() {
    var e = this._private;
    return e.applying = !0, e.started = !1, e.stopped = !1, this.hook(), this;
  },
  applying: function() {
    return this._private.applying;
  },
  pause: function() {
    var e = this._private;
    return e.playing = !1, e.started = !1, this;
  },
  stop: function() {
    var e = this._private;
    return e.playing = !1, e.started = !1, e.stopped = !0, this;
  },
  rewind: function() {
    return this.progress(0);
  },
  fastforward: function() {
    return this.progress(1);
  },
  time: function(e) {
    var r = this._private;
    return e === void 0 ? r.progress * r.duration : this.progress(e / r.duration);
  },
  progress: function(e) {
    var r = this._private, a = r.playing;
    return e === void 0 ? r.progress : (a && this.pause(), r.progress = e, r.started = !1, a && this.play(), this);
  },
  completed: function() {
    return this._private.progress === 1;
  },
  reverse: function() {
    var e = this._private, r = e.playing;
    r && this.pause(), e.progress = 1 - e.progress, e.started = !1;
    var a = function(u, f) {
      var h = e[u];
      h != null && (e[u] = e[f], e[f] = h);
    };
    if (a("zoom", "startZoom"), a("pan", "startPan"), a("position", "startPosition"), e.style)
      for (var n = 0; n < e.style.length; n++) {
        var i = e.style[n], s = i.name, o = e.startStyle[s];
        e.startStyle[s] = i, e.style[n] = o;
      }
    return r && this.play(), this;
  },
  promise: function(e) {
    var r = this._private, a;
    switch (e) {
      case "frame":
        a = r.frames;
        break;
      default:
      case "complete":
      case "completed":
        a = r.completes;
    }
    return new Rr(function(n, i) {
      a.push(function() {
        n();
      });
    });
  }
});
ir.complete = ir.completed;
ir.run = ir.play;
ir.running = ir.playing;
var qg = {
  animated: function() {
    return function() {
      var r = this, a = r.length !== void 0, n = a ? r : [r], i = this._private.cy || this;
      if (!i.styleEnabled())
        return !1;
      var s = n[0];
      if (s)
        return s._private.animation.current.length > 0;
    };
  },
  // animated
  clearQueue: function() {
    return function() {
      var r = this, a = r.length !== void 0, n = a ? r : [r], i = this._private.cy || this;
      if (!i.styleEnabled())
        return this;
      for (var s = 0; s < n.length; s++) {
        var o = n[s];
        o._private.animation.queue = [];
      }
      return this;
    };
  },
  // clearQueue
  delay: function() {
    return function(r, a) {
      var n = this._private.cy || this;
      return n.styleEnabled() ? this.animate({
        delay: r,
        duration: r,
        complete: a
      }) : this;
    };
  },
  // delay
  delayAnimation: function() {
    return function(r, a) {
      var n = this._private.cy || this;
      return n.styleEnabled() ? this.animation({
        delay: r,
        duration: r,
        complete: a
      }) : this;
    };
  },
  // delay
  animation: function() {
    return function(r, a) {
      var n = this, i = n.length !== void 0, s = i ? n : [n], o = this._private.cy || this, l = !i, u = !l;
      if (!o.styleEnabled())
        return this;
      var f = o.style();
      r = de({}, r, a);
      var h = Object.keys(r).length === 0;
      if (h)
        return new Vn(s[0], r);
      switch (r.duration === void 0 && (r.duration = 400), r.duration) {
        case "slow":
          r.duration = 600;
          break;
        case "fast":
          r.duration = 200;
          break;
      }
      if (u && (r.style = f.getPropsList(r.style || r.css), r.css = void 0), u && r.renderedPosition != null) {
        var c = r.renderedPosition, v = o.pan(), d = o.zoom();
        r.position = Eo(c, d, v);
      }
      if (l && r.panBy != null) {
        var g = r.panBy, p = o.pan();
        r.pan = {
          x: p.x + g.x,
          y: p.y + g.y
        };
      }
      var y = r.center || r.centre;
      if (l && y != null) {
        var E = o.getCenterPan(y.eles, r.zoom);
        E != null && (r.pan = E);
      }
      if (l && r.fit != null) {
        var m = r.fit, T = o.getFitViewport(m.eles || m.boundingBox, m.padding);
        T != null && (r.pan = T.pan, r.zoom = T.zoom);
      }
      if (l && De(r.zoom)) {
        var C = o.getZoomedViewport(r.zoom);
        C != null ? (C.zoomed && (r.zoom = C.zoom), C.panned && (r.pan = C.pan)) : r.zoom = null;
      }
      return new Vn(s[0], r);
    };
  },
  // animate
  animate: function() {
    return function(r, a) {
      var n = this, i = n.length !== void 0, s = i ? n : [n], o = this._private.cy || this;
      if (!o.styleEnabled())
        return this;
      a && (r = de({}, r, a));
      for (var l = 0; l < s.length; l++) {
        var u = s[l], f = u.animated() && (r.queue === void 0 || r.queue), h = u.animation(r, f ? {
          queue: !0
        } : void 0);
        h.play();
      }
      return this;
    };
  },
  // animate
  stop: function() {
    return function(r, a) {
      var n = this, i = n.length !== void 0, s = i ? n : [n], o = this._private.cy || this;
      if (!o.styleEnabled())
        return this;
      for (var l = 0; l < s.length; l++) {
        for (var u = s[l], f = u._private, h = f.animation.current, c = 0; c < h.length; c++) {
          var v = h[c], d = v._private;
          a && (d.duration = 0);
        }
        r && (f.animation.queue = []), a || (f.animation.current = []);
      }
      return o.notify("draw"), this;
    };
  }
  // stop
}, Kg = {
  // access data field
  data: function(e) {
    var r = {
      field: "data",
      bindingEvent: "data",
      allowBinding: !1,
      allowSetting: !1,
      allowGetting: !1,
      settingEvent: "data",
      settingTriggersEvent: !1,
      triggerFnName: "trigger",
      immutableKeys: {},
      // key => true if immutable
      updateStyle: !1,
      beforeGet: function(n) {
      },
      beforeSet: function(n, i) {
      },
      onSet: function(n) {
      },
      canSet: function(n) {
        return !0;
      }
    };
    return e = de({}, r, e), function(n, i) {
      var s = e, o = this, l = o.length !== void 0, u = l ? o : [o], f = l ? o[0] : o;
      if (ve(n)) {
        var h = n.indexOf(".") !== -1, c = h && kc.default(n);
        if (s.allowGetting && i === void 0) {
          var v;
          return f && (s.beforeGet(f), c && f._private[s.field][n] === void 0 ? v = Mc.default(f._private[s.field], c) : v = f._private[s.field][n]), v;
        } else if (s.allowSetting && i !== void 0) {
          var d = !s.immutableKeys[n];
          if (d) {
            var g = ao({}, n, i);
            s.beforeSet(o, g);
            for (var p = 0, y = u.length; p < y; p++) {
              var E = u[p];
              s.canSet(E) && (c && f._private[s.field][n] === void 0 ? Rc.default(E._private[s.field], c, i) : E._private[s.field][n] = i);
            }
            s.updateStyle && o.updateStyle(), s.onSet(o), s.settingTriggersEvent && o[s.triggerFnName](s.settingEvent);
          }
        }
      } else if (s.allowSetting && De(n)) {
        var m = n, T, C, S = Object.keys(m);
        s.beforeSet(o, m);
        for (var b = 0; b < S.length; b++) {
          T = S[b], C = m[T];
          var x = !s.immutableKeys[T];
          if (x)
            for (var w = 0; w < u.length; w++) {
              var D = u[w];
              s.canSet(D) && (D._private[s.field][T] = C);
            }
        }
        s.updateStyle && o.updateStyle(), s.onSet(o), s.settingTriggersEvent && o[s.triggerFnName](s.settingEvent);
      } else if (s.allowBinding && Be(n)) {
        var A = n;
        o.on(s.bindingEvent, A);
      } else if (s.allowGetting && n === void 0) {
        var L;
        return f && (s.beforeGet(f), L = f._private[s.field]), L;
      }
      return o;
    };
  },
  // data
  // remove data field
  removeData: function(e) {
    var r = {
      field: "data",
      event: "data",
      triggerFnName: "trigger",
      triggerEvent: !1,
      immutableKeys: {}
      // key => true if immutable
    };
    return e = de({}, r, e), function(n) {
      var i = e, s = this, o = s.length !== void 0, l = o ? s : [s];
      if (ve(n)) {
        for (var u = n.split(/\s+/), f = u.length, h = 0; h < f; h++) {
          var c = u[h];
          if (!Yt(c)) {
            var v = !i.immutableKeys[c];
            if (v)
              for (var d = 0, g = l.length; d < g; d++)
                l[d]._private[i.field][c] = void 0;
          }
        }
        i.triggerEvent && s[i.triggerFnName](i.event);
      } else if (n === void 0) {
        for (var p = 0, y = l.length; p < y; p++)
          for (var E = l[p]._private[i.field], m = Object.keys(E), T = 0; T < m.length; T++) {
            var C = m[T], S = !i.immutableKeys[C];
            S && (E[C] = void 0);
          }
        i.triggerEvent && s[i.triggerFnName](i.event);
      }
      return s;
    };
  }
  // removeData
}, Zg = {
  eventAliasesOn: function(e) {
    var r = e;
    r.addListener = r.listen = r.bind = r.on, r.unlisten = r.unbind = r.off = r.removeListener, r.trigger = r.emit, r.pon = r.promiseOn = function(a, n) {
      var i = this, s = Array.prototype.slice.call(arguments, 0);
      return new Rr(function(o, l) {
        var u = function(v) {
          i.off.apply(i, h), o(v);
        }, f = s.concat([u]), h = f.concat([]);
        i.on.apply(i, f);
      });
    };
  }
}, Oe = {};
[qg, Kg, Zg].forEach(function(t) {
  de(Oe, t);
});
var Qg = {
  animate: Oe.animate(),
  animation: Oe.animation(),
  animated: Oe.animated(),
  clearQueue: Oe.clearQueue(),
  delay: Oe.delay(),
  delayAnimation: Oe.delayAnimation(),
  stop: Oe.stop()
}, Ba = {
  classes: function(e) {
    var r = this;
    if (e === void 0) {
      var a = [];
      return r[0]._private.classes.forEach(function(d) {
        return a.push(d);
      }), a;
    } else
      Me(e) || (e = (e || "").match(/\S+/g) || []);
    for (var n = [], i = new Mr(e), s = 0; s < r.length; s++) {
      for (var o = r[s], l = o._private, u = l.classes, f = !1, h = 0; h < e.length; h++) {
        var c = e[h], v = u.has(c);
        if (!v) {
          f = !0;
          break;
        }
      }
      f || (f = u.size !== e.length), f && (l.classes = i, n.push(o));
    }
    return n.length > 0 && this.spawn(n).updateStyle().emit("class"), r;
  },
  addClass: function(e) {
    return this.toggleClass(e, !0);
  },
  hasClass: function(e) {
    var r = this[0];
    return r != null && r._private.classes.has(e);
  },
  toggleClass: function(e, r) {
    Me(e) || (e = e.match(/\S+/g) || []);
    for (var a = this, n = r === void 0, i = [], s = 0, o = a.length; s < o; s++)
      for (var l = a[s], u = l._private.classes, f = !1, h = 0; h < e.length; h++) {
        var c = e[h], v = u.has(c), d = !1;
        r || n && !v ? (u.add(c), d = !0) : (!r || n && v) && (u.delete(c), d = !0), !f && d && (i.push(l), f = !0);
      }
    return i.length > 0 && this.spawn(i).updateStyle().emit("class"), a;
  },
  removeClass: function(e) {
    return this.toggleClass(e, !1);
  },
  flashClass: function(e, r) {
    var a = this;
    if (r == null)
      r = 250;
    else if (r === 0)
      return a;
    return a.addClass(e), setTimeout(function() {
      a.removeClass(e);
    }, r), a;
  }
};
Ba.className = Ba.classNames = Ba.classes;
var Ce = {
  metaChar: "[\\!\\\"\\#\\$\\%\\&\\'\\(\\)\\*\\+\\,\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\]\\^\\`\\{\\|\\}\\~]",
  // chars we need to escape in let names, etc
  comparatorOp: "=|\\!=|>|>=|<|<=|\\$=|\\^=|\\*=",
  // binary comparison op (used in data selectors)
  boolOp: "\\?|\\!|\\^",
  // boolean (unary) operators (used in data selectors)
  string: `"(?:\\\\"|[^"])*"|'(?:\\\\'|[^'])*'`,
  // string literals (used in data selectors) -- doublequotes | singlequotes
  number: _e,
  // number literal (used in data selectors) --- e.g. 0.1234, 1234, 12e123
  meta: "degree|indegree|outdegree",
  // allowed metadata fields (i.e. allowed functions to use from Collection)
  separator: "\\s*,\\s*",
  // queries are separated by commas, e.g. edge[foo = 'bar'], node.someClass
  descendant: "\\s+",
  child: "\\s+>\\s+",
  subject: "\\$",
  group: "node|edge|\\*",
  directedEdge: "\\s+->\\s+",
  undirectedEdge: "\\s+<->\\s+"
};
Ce.variable = "(?:[\\w-.]|(?:\\\\" + Ce.metaChar + "))+";
Ce.className = "(?:[\\w-]|(?:\\\\" + Ce.metaChar + "))+";
Ce.value = Ce.string + "|" + Ce.number;
Ce.id = Ce.variable;
(function() {
  var t, e, r;
  for (t = Ce.comparatorOp.split("|"), r = 0; r < t.length; r++)
    e = t[r], Ce.comparatorOp += "|@" + e;
  for (t = Ce.comparatorOp.split("|"), r = 0; r < t.length; r++)
    e = t[r], !(e.indexOf("!") >= 0) && e !== "=" && (Ce.comparatorOp += "|\\!" + e);
})();
var Ie = function() {
  return {
    checks: []
  };
}, ie = {
  /** E.g. node */
  GROUP: 0,
  /** A collection of elements */
  COLLECTION: 1,
  /** A filter(ele) function */
  FILTER: 2,
  /** E.g. [foo > 1] */
  DATA_COMPARE: 3,
  /** E.g. [foo] */
  DATA_EXIST: 4,
  /** E.g. [?foo] */
  DATA_BOOL: 5,
  /** E.g. [[degree > 2]] */
  META_COMPARE: 6,
  /** E.g. :selected */
  STATE: 7,
  /** E.g. #foo */
  ID: 8,
  /** E.g. .foo */
  CLASS: 9,
  /** E.g. #foo <-> #bar */
  UNDIRECTED_EDGE: 10,
  /** E.g. #foo -> #bar */
  DIRECTED_EDGE: 11,
  /** E.g. $#foo -> #bar */
  NODE_SOURCE: 12,
  /** E.g. #foo -> $#bar */
  NODE_TARGET: 13,
  /** E.g. $#foo <-> #bar */
  NODE_NEIGHBOR: 14,
  /** E.g. #foo > #bar */
  CHILD: 15,
  /** E.g. #foo #bar */
  DESCENDANT: 16,
  /** E.g. $#foo > #bar */
  PARENT: 17,
  /** E.g. $#foo #bar */
  ANCESTOR: 18,
  /** E.g. #foo > $bar > #baz */
  COMPOUND_SPLIT: 19,
  /** Always matches, useful placeholder for subject in `COMPOUND_SPLIT` */
  TRUE: 20
}, _n = [{
  selector: ":selected",
  matches: function(e) {
    return e.selected();
  }
}, {
  selector: ":unselected",
  matches: function(e) {
    return !e.selected();
  }
}, {
  selector: ":selectable",
  matches: function(e) {
    return e.selectable();
  }
}, {
  selector: ":unselectable",
  matches: function(e) {
    return !e.selectable();
  }
}, {
  selector: ":locked",
  matches: function(e) {
    return e.locked();
  }
}, {
  selector: ":unlocked",
  matches: function(e) {
    return !e.locked();
  }
}, {
  selector: ":visible",
  matches: function(e) {
    return e.visible();
  }
}, {
  selector: ":hidden",
  matches: function(e) {
    return !e.visible();
  }
}, {
  selector: ":transparent",
  matches: function(e) {
    return e.transparent();
  }
}, {
  selector: ":grabbed",
  matches: function(e) {
    return e.grabbed();
  }
}, {
  selector: ":free",
  matches: function(e) {
    return !e.grabbed();
  }
}, {
  selector: ":removed",
  matches: function(e) {
    return e.removed();
  }
}, {
  selector: ":inside",
  matches: function(e) {
    return !e.removed();
  }
}, {
  selector: ":grabbable",
  matches: function(e) {
    return e.grabbable();
  }
}, {
  selector: ":ungrabbable",
  matches: function(e) {
    return !e.grabbable();
  }
}, {
  selector: ":animated",
  matches: function(e) {
    return e.animated();
  }
}, {
  selector: ":unanimated",
  matches: function(e) {
    return !e.animated();
  }
}, {
  selector: ":parent",
  matches: function(e) {
    return e.isParent();
  }
}, {
  selector: ":childless",
  matches: function(e) {
    return e.isChildless();
  }
}, {
  selector: ":child",
  matches: function(e) {
    return e.isChild();
  }
}, {
  selector: ":orphan",
  matches: function(e) {
    return e.isOrphan();
  }
}, {
  selector: ":nonorphan",
  matches: function(e) {
    return e.isChild();
  }
}, {
  selector: ":compound",
  matches: function(e) {
    return e.isNode() ? e.isParent() : e.source().isParent() || e.target().isParent();
  }
}, {
  selector: ":loop",
  matches: function(e) {
    return e.isLoop();
  }
}, {
  selector: ":simple",
  matches: function(e) {
    return e.isSimple();
  }
}, {
  selector: ":active",
  matches: function(e) {
    return e.active();
  }
}, {
  selector: ":inactive",
  matches: function(e) {
    return !e.active();
  }
}, {
  selector: ":backgrounding",
  matches: function(e) {
    return e.backgrounding();
  }
}, {
  selector: ":nonbackgrounding",
  matches: function(e) {
    return !e.backgrounding();
  }
}].sort(function(t, e) {
  return td(t.selector, e.selector);
}), Jg = function() {
  for (var t = {}, e, r = 0; r < _n.length; r++)
    e = _n[r], t[e.selector] = e.matches;
  return t;
}(), jg = function(e, r) {
  return Jg[e](r);
}, ep = "(" + _n.map(function(t) {
  return t.selector;
}).join("|") + ")", dr = function(e) {
  return e.replace(new RegExp("\\\\(" + Ce.metaChar + ")", "g"), function(r, a) {
    return a;
  });
}, zt = function(e, r, a) {
  e[e.length - 1] = a;
}, Un = [{
  name: "group",
  // just used for identifying when debugging
  query: !0,
  regex: "(" + Ce.group + ")",
  populate: function(e, r, a) {
    var n = Et(a, 1), i = n[0];
    r.checks.push({
      type: ie.GROUP,
      value: i === "*" ? i : i + "s"
    });
  }
}, {
  name: "state",
  query: !0,
  regex: ep,
  populate: function(e, r, a) {
    var n = Et(a, 1), i = n[0];
    r.checks.push({
      type: ie.STATE,
      value: i
    });
  }
}, {
  name: "id",
  query: !0,
  regex: "\\#(" + Ce.id + ")",
  populate: function(e, r, a) {
    var n = Et(a, 1), i = n[0];
    r.checks.push({
      type: ie.ID,
      value: dr(i)
    });
  }
}, {
  name: "className",
  query: !0,
  regex: "\\.(" + Ce.className + ")",
  populate: function(e, r, a) {
    var n = Et(a, 1), i = n[0];
    r.checks.push({
      type: ie.CLASS,
      value: dr(i)
    });
  }
}, {
  name: "dataExists",
  query: !0,
  regex: "\\[\\s*(" + Ce.variable + ")\\s*\\]",
  populate: function(e, r, a) {
    var n = Et(a, 1), i = n[0];
    r.checks.push({
      type: ie.DATA_EXIST,
      field: dr(i)
    });
  }
}, {
  name: "dataCompare",
  query: !0,
  regex: "\\[\\s*(" + Ce.variable + ")\\s*(" + Ce.comparatorOp + ")\\s*(" + Ce.value + ")\\s*\\]",
  populate: function(e, r, a) {
    var n = Et(a, 3), i = n[0], s = n[1], o = n[2], l = new RegExp("^" + Ce.string + "$").exec(o) != null;
    l ? o = o.substring(1, o.length - 1) : o = parseFloat(o), r.checks.push({
      type: ie.DATA_COMPARE,
      field: dr(i),
      operator: s,
      value: o
    });
  }
}, {
  name: "dataBool",
  query: !0,
  regex: "\\[\\s*(" + Ce.boolOp + ")\\s*(" + Ce.variable + ")\\s*\\]",
  populate: function(e, r, a) {
    var n = Et(a, 2), i = n[0], s = n[1];
    r.checks.push({
      type: ie.DATA_BOOL,
      field: dr(s),
      operator: i
    });
  }
}, {
  name: "metaCompare",
  query: !0,
  regex: "\\[\\[\\s*(" + Ce.meta + ")\\s*(" + Ce.comparatorOp + ")\\s*(" + Ce.number + ")\\s*\\]\\]",
  populate: function(e, r, a) {
    var n = Et(a, 3), i = n[0], s = n[1], o = n[2];
    r.checks.push({
      type: ie.META_COMPARE,
      field: dr(i),
      operator: s,
      value: parseFloat(o)
    });
  }
}, {
  name: "nextQuery",
  separator: !0,
  regex: Ce.separator,
  populate: function(e, r) {
    var a = e.currentSubject, n = e.edgeCount, i = e.compoundCount, s = e[e.length - 1];
    a != null && (s.subject = a, e.currentSubject = null), s.edgeCount = n, s.compoundCount = i, e.edgeCount = 0, e.compoundCount = 0;
    var o = e[e.length++] = Ie();
    return o;
  }
}, {
  name: "directedEdge",
  separator: !0,
  regex: Ce.directedEdge,
  populate: function(e, r) {
    if (e.currentSubject == null) {
      var a = Ie(), n = r, i = Ie();
      return a.checks.push({
        type: ie.DIRECTED_EDGE,
        source: n,
        target: i
      }), zt(e, r, a), e.edgeCount++, i;
    } else {
      var s = Ie(), o = r, l = Ie();
      return s.checks.push({
        type: ie.NODE_SOURCE,
        source: o,
        target: l
      }), zt(e, r, s), e.edgeCount++, l;
    }
  }
}, {
  name: "undirectedEdge",
  separator: !0,
  regex: Ce.undirectedEdge,
  populate: function(e, r) {
    if (e.currentSubject == null) {
      var a = Ie(), n = r, i = Ie();
      return a.checks.push({
        type: ie.UNDIRECTED_EDGE,
        nodes: [n, i]
      }), zt(e, r, a), e.edgeCount++, i;
    } else {
      var s = Ie(), o = r, l = Ie();
      return s.checks.push({
        type: ie.NODE_NEIGHBOR,
        node: o,
        neighbor: l
      }), zt(e, r, s), l;
    }
  }
}, {
  name: "child",
  separator: !0,
  regex: Ce.child,
  populate: function(e, r) {
    if (e.currentSubject == null) {
      var a = Ie(), n = Ie(), i = e[e.length - 1];
      return a.checks.push({
        type: ie.CHILD,
        parent: i,
        child: n
      }), zt(e, r, a), e.compoundCount++, n;
    } else if (e.currentSubject === r) {
      var s = Ie(), o = e[e.length - 1], l = Ie(), u = Ie(), f = Ie(), h = Ie();
      return s.checks.push({
        type: ie.COMPOUND_SPLIT,
        left: o,
        right: l,
        subject: u
      }), u.checks = r.checks, r.checks = [{
        type: ie.TRUE
      }], h.checks.push({
        type: ie.TRUE
      }), l.checks.push({
        type: ie.PARENT,
        // type is swapped on right side queries
        parent: h,
        child: f
        // empty for now
      }), zt(e, o, s), e.currentSubject = u, e.compoundCount++, f;
    } else {
      var c = Ie(), v = Ie(), d = [{
        type: ie.PARENT,
        parent: c,
        child: v
      }];
      return c.checks = r.checks, r.checks = d, e.compoundCount++, v;
    }
  }
}, {
  name: "descendant",
  separator: !0,
  regex: Ce.descendant,
  populate: function(e, r) {
    if (e.currentSubject == null) {
      var a = Ie(), n = Ie(), i = e[e.length - 1];
      return a.checks.push({
        type: ie.DESCENDANT,
        ancestor: i,
        descendant: n
      }), zt(e, r, a), e.compoundCount++, n;
    } else if (e.currentSubject === r) {
      var s = Ie(), o = e[e.length - 1], l = Ie(), u = Ie(), f = Ie(), h = Ie();
      return s.checks.push({
        type: ie.COMPOUND_SPLIT,
        left: o,
        right: l,
        subject: u
      }), u.checks = r.checks, r.checks = [{
        type: ie.TRUE
      }], h.checks.push({
        type: ie.TRUE
      }), l.checks.push({
        type: ie.ANCESTOR,
        // type is swapped on right side queries
        ancestor: h,
        descendant: f
        // empty for now
      }), zt(e, o, s), e.currentSubject = u, e.compoundCount++, f;
    } else {
      var c = Ie(), v = Ie(), d = [{
        type: ie.ANCESTOR,
        ancestor: c,
        descendant: v
      }];
      return c.checks = r.checks, r.checks = d, e.compoundCount++, v;
    }
  }
}, {
  name: "subject",
  modifier: !0,
  regex: Ce.subject,
  populate: function(e, r) {
    if (e.currentSubject != null && e.currentSubject !== r)
      return Ne("Redefinition of subject in selector `" + e.toString() + "`"), !1;
    e.currentSubject = r;
    var a = e[e.length - 1], n = a.checks[0], i = n == null ? null : n.type;
    i === ie.DIRECTED_EDGE ? n.type = ie.NODE_TARGET : i === ie.UNDIRECTED_EDGE && (n.type = ie.NODE_NEIGHBOR, n.node = n.nodes[1], n.neighbor = n.nodes[0], n.nodes = null);
  }
}];
Un.forEach(function(t) {
  return t.regexObj = new RegExp("^" + t.regex);
});
var tp = function(e) {
  for (var r, a, n, i = 0; i < Un.length; i++) {
    var s = Un[i], o = s.name, l = e.match(s.regexObj);
    if (l != null) {
      a = l, r = s, n = o;
      var u = l[0];
      e = e.substring(u.length);
      break;
    }
  }
  return {
    expr: r,
    match: a,
    name: n,
    remaining: e
  };
}, rp = function(e) {
  var r = e.match(/^\s+/);
  if (r) {
    var a = r[0];
    e = e.substring(a.length);
  }
  return e;
}, ap = function(e) {
  var r = this, a = r.inputText = e, n = r[0] = Ie();
  for (r.length = 1, a = rp(a); ; ) {
    var i = tp(a);
    if (i.expr == null)
      return Ne("The selector `" + e + "`is invalid"), !1;
    var s = i.match.slice(1), o = i.expr.populate(r, n, s);
    if (o === !1)
      return !1;
    if (o != null && (n = o), a = i.remaining, a.match(/^\s*$/))
      break;
  }
  var l = r[r.length - 1];
  r.currentSubject != null && (l.subject = r.currentSubject), l.edgeCount = r.edgeCount, l.compoundCount = r.compoundCount;
  for (var u = 0; u < r.length; u++) {
    var f = r[u];
    if (f.compoundCount > 0 && f.edgeCount > 0)
      return Ne("The selector `" + e + "` is invalid because it uses both a compound selector and an edge selector"), !1;
    if (f.edgeCount > 1)
      return Ne("The selector `" + e + "` is invalid because it uses multiple edge selectors"), !1;
    f.edgeCount === 1 && Ne("The selector `" + e + "` is deprecated.  Edge selectors do not take effect on changes to source and target nodes after an edge is added, for performance reasons.  Use a class or data selector on edges instead, updating the class or data of an edge when your app detects a change in source or target nodes.");
  }
  return !0;
}, np = function() {
  if (this.toStringCache != null)
    return this.toStringCache;
  for (var e = function(f) {
    return f == null ? "" : f;
  }, r = function(f) {
    return ve(f) ? '"' + f + '"' : e(f);
  }, a = function(f) {
    return " " + f + " ";
  }, n = function(f, h) {
    var c = f.type, v = f.value;
    switch (c) {
      case ie.GROUP: {
        var d = e(v);
        return d.substring(0, d.length - 1);
      }
      case ie.DATA_COMPARE: {
        var g = f.field, p = f.operator;
        return "[" + g + a(e(p)) + r(v) + "]";
      }
      case ie.DATA_BOOL: {
        var y = f.operator, E = f.field;
        return "[" + e(y) + E + "]";
      }
      case ie.DATA_EXIST: {
        var m = f.field;
        return "[" + m + "]";
      }
      case ie.META_COMPARE: {
        var T = f.operator, C = f.field;
        return "[[" + C + a(e(T)) + r(v) + "]]";
      }
      case ie.STATE:
        return v;
      case ie.ID:
        return "#" + v;
      case ie.CLASS:
        return "." + v;
      case ie.PARENT:
      case ie.CHILD:
        return i(f.parent, h) + a(">") + i(f.child, h);
      case ie.ANCESTOR:
      case ie.DESCENDANT:
        return i(f.ancestor, h) + " " + i(f.descendant, h);
      case ie.COMPOUND_SPLIT: {
        var S = i(f.left, h), b = i(f.subject, h), x = i(f.right, h);
        return S + (S.length > 0 ? " " : "") + b + x;
      }
      case ie.TRUE:
        return "";
    }
  }, i = function(f, h) {
    return f.checks.reduce(function(c, v, d) {
      return c + (h === f && d === 0 ? "$" : "") + n(v, h);
    }, "");
  }, s = "", o = 0; o < this.length; o++) {
    var l = this[o];
    s += i(l, l.subject), this.length > 1 && o < this.length - 1 && (s += ", ");
  }
  return this.toStringCache = s, s;
}, ip = {
  parse: ap,
  toString: np
}, Bo = function(e, r, a) {
  var n, i = ve(e), s = ae(e), o = ve(a), l, u, f = !1, h = !1, c = !1;
  switch (r.indexOf("!") >= 0 && (r = r.replace("!", ""), h = !0), r.indexOf("@") >= 0 && (r = r.replace("@", ""), f = !0), (i || o || f) && (l = !i && !s ? "" : "" + e, u = "" + a), f && (e = l = l.toLowerCase(), a = u = u.toLowerCase()), r) {
    case "*=":
      n = l.indexOf(u) >= 0;
      break;
    case "$=":
      n = l.indexOf(u, l.length - u.length) >= 0;
      break;
    case "^=":
      n = l.indexOf(u) === 0;
      break;
    case "=":
      n = e === a;
      break;
    case ">":
      c = !0, n = e > a;
      break;
    case ">=":
      c = !0, n = e >= a;
      break;
    case "<":
      c = !0, n = e < a;
      break;
    case "<=":
      c = !0, n = e <= a;
      break;
    default:
      n = !1;
      break;
  }
  return h && (e != null || !c) && (n = !n), n;
}, sp = function(e, r) {
  switch (r) {
    case "?":
      return !!e;
    case "!":
      return !e;
    case "^":
      return e === void 0;
  }
}, op = function(e) {
  return e !== void 0;
}, ci = function(e, r) {
  return e.data(r);
}, lp = function(e, r) {
  return e[r]();
}, ze = [], Pe = function(e, r) {
  return e.checks.every(function(a) {
    return ze[a.type](a, r);
  });
};
ze[ie.GROUP] = function(t, e) {
  var r = t.value;
  return r === "*" || r === e.group();
};
ze[ie.STATE] = function(t, e) {
  var r = t.value;
  return jg(r, e);
};
ze[ie.ID] = function(t, e) {
  var r = t.value;
  return e.id() === r;
};
ze[ie.CLASS] = function(t, e) {
  var r = t.value;
  return e.hasClass(r);
};
ze[ie.META_COMPARE] = function(t, e) {
  var r = t.field, a = t.operator, n = t.value;
  return Bo(lp(e, r), a, n);
};
ze[ie.DATA_COMPARE] = function(t, e) {
  var r = t.field, a = t.operator, n = t.value;
  return Bo(ci(e, r), a, n);
};
ze[ie.DATA_BOOL] = function(t, e) {
  var r = t.field, a = t.operator;
  return sp(ci(e, r), a);
};
ze[ie.DATA_EXIST] = function(t, e) {
  var r = t.field;
  return t.operator, op(ci(e, r));
};
ze[ie.UNDIRECTED_EDGE] = function(t, e) {
  var r = t.nodes[0], a = t.nodes[1], n = e.source(), i = e.target();
  return Pe(r, n) && Pe(a, i) || Pe(a, n) && Pe(r, i);
};
ze[ie.NODE_NEIGHBOR] = function(t, e) {
  return Pe(t.node, e) && e.neighborhood().some(function(r) {
    return r.isNode() && Pe(t.neighbor, r);
  });
};
ze[ie.DIRECTED_EDGE] = function(t, e) {
  return Pe(t.source, e.source()) && Pe(t.target, e.target());
};
ze[ie.NODE_SOURCE] = function(t, e) {
  return Pe(t.source, e) && e.outgoers().some(function(r) {
    return r.isNode() && Pe(t.target, r);
  });
};
ze[ie.NODE_TARGET] = function(t, e) {
  return Pe(t.target, e) && e.incomers().some(function(r) {
    return r.isNode() && Pe(t.source, r);
  });
};
ze[ie.CHILD] = function(t, e) {
  return Pe(t.child, e) && Pe(t.parent, e.parent());
};
ze[ie.PARENT] = function(t, e) {
  return Pe(t.parent, e) && e.children().some(function(r) {
    return Pe(t.child, r);
  });
};
ze[ie.DESCENDANT] = function(t, e) {
  return Pe(t.descendant, e) && e.ancestors().some(function(r) {
    return Pe(t.ancestor, r);
  });
};
ze[ie.ANCESTOR] = function(t, e) {
  return Pe(t.ancestor, e) && e.descendants().some(function(r) {
    return Pe(t.descendant, r);
  });
};
ze[ie.COMPOUND_SPLIT] = function(t, e) {
  return Pe(t.subject, e) && Pe(t.left, e) && Pe(t.right, e);
};
ze[ie.TRUE] = function() {
  return !0;
};
ze[ie.COLLECTION] = function(t, e) {
  var r = t.value;
  return r.has(e);
};
ze[ie.FILTER] = function(t, e) {
  var r = t.value;
  return r(e);
};
var up = function(e) {
  var r = this;
  if (r.length === 1 && r[0].checks.length === 1 && r[0].checks[0].type === ie.ID)
    return e.getElementById(r[0].checks[0].value).collection();
  var a = function(i) {
    for (var s = 0; s < r.length; s++) {
      var o = r[s];
      if (Pe(o, i))
        return !0;
    }
    return !1;
  };
  return r.text() == null && (a = function() {
    return !0;
  }), e.filter(a);
}, fp = function(e) {
  for (var r = this, a = 0; a < r.length; a++) {
    var n = r[a];
    if (Pe(n, e))
      return !0;
  }
  return !1;
}, hp = {
  matches: fp,
  filter: up
}, Wt = function(e) {
  this.inputText = e, this.currentSubject = null, this.compoundCount = 0, this.edgeCount = 0, this.length = 0, e == null || ve(e) && e.match(/^\s*$/) || (ht(e) ? this.addQuery({
    checks: [{
      type: ie.COLLECTION,
      value: e.collection()
    }]
  }) : Be(e) ? this.addQuery({
    checks: [{
      type: ie.FILTER,
      value: e
    }]
  }) : ve(e) ? this.parse(e) || (this.invalid = !0) : Ge("A selector must be created from a string; found "));
}, qt = Wt.prototype;
[ip, hp].forEach(function(t) {
  return de(qt, t);
});
qt.text = function() {
  return this.inputText;
};
qt.size = function() {
  return this.length;
};
qt.eq = function(t) {
  return this[t];
};
qt.sameText = function(t) {
  return !this.invalid && !t.invalid && this.text() === t.text();
};
qt.addQuery = function(t) {
  this[this.length++] = t;
};
qt.selector = qt.toString;
var Ut = {
  allAre: function(e) {
    var r = new Wt(e);
    return this.every(function(a) {
      return r.matches(a);
    });
  },
  is: function(e) {
    var r = new Wt(e);
    return this.some(function(a) {
      return r.matches(a);
    });
  },
  some: function(e, r) {
    for (var a = 0; a < this.length; a++) {
      var n = r ? e.apply(r, [this[a], a, this]) : e(this[a], a, this);
      if (n)
        return !0;
    }
    return !1;
  },
  every: function(e, r) {
    for (var a = 0; a < this.length; a++) {
      var n = r ? e.apply(r, [this[a], a, this]) : e(this[a], a, this);
      if (!n)
        return !1;
    }
    return !0;
  },
  same: function(e) {
    if (this === e)
      return !0;
    e = this.cy().collection(e);
    var r = this.length, a = e.length;
    return r !== a ? !1 : r === 1 ? this[0] === e[0] : this.every(function(n) {
      return e.hasElementWithId(n.id());
    });
  },
  anySame: function(e) {
    return e = this.cy().collection(e), this.some(function(r) {
      return e.hasElementWithId(r.id());
    });
  },
  allAreNeighbors: function(e) {
    e = this.cy().collection(e);
    var r = this.neighborhood();
    return e.every(function(a) {
      return r.hasElementWithId(a.id());
    });
  },
  contains: function(e) {
    e = this.cy().collection(e);
    var r = this;
    return e.every(function(a) {
      return r.hasElementWithId(a.id());
    });
  }
};
Ut.allAreNeighbours = Ut.allAreNeighbors;
Ut.has = Ut.contains;
Ut.equal = Ut.equals = Ut.same;
var gt = function(e, r) {
  return function(n, i, s, o) {
    var l = n, u = this, f;
    if (l == null ? f = "" : ht(l) && l.length === 1 && (f = l.id()), u.length === 1 && f) {
      var h = u[0]._private, c = h.traversalCache = h.traversalCache || {}, v = c[r] = c[r] || [], d = ar(f), g = v[d];
      return g || (v[d] = e.call(u, n, i, s, o));
    } else
      return e.call(u, n, i, s, o);
  };
}, Ar = {
  parent: function(e) {
    var r = [];
    if (this.length === 1) {
      var a = this[0]._private.parent;
      if (a)
        return a;
    }
    for (var n = 0; n < this.length; n++) {
      var i = this[n], s = i._private.parent;
      s && r.push(s);
    }
    return this.spawn(r, !0).filter(e);
  },
  parents: function(e) {
    for (var r = [], a = this.parent(); a.nonempty(); ) {
      for (var n = 0; n < a.length; n++) {
        var i = a[n];
        r.push(i);
      }
      a = a.parent();
    }
    return this.spawn(r, !0).filter(e);
  },
  commonAncestors: function(e) {
    for (var r, a = 0; a < this.length; a++) {
      var n = this[a], i = n.parents();
      r = r || i, r = r.intersect(i);
    }
    return r.filter(e);
  },
  orphans: function(e) {
    return this.stdFilter(function(r) {
      return r.isOrphan();
    }).filter(e);
  },
  nonorphans: function(e) {
    return this.stdFilter(function(r) {
      return r.isChild();
    }).filter(e);
  },
  children: gt(function(t) {
    for (var e = [], r = 0; r < this.length; r++)
      for (var a = this[r], n = a._private.children, i = 0; i < n.length; i++)
        e.push(n[i]);
    return this.spawn(e, !0).filter(t);
  }, "children"),
  siblings: function(e) {
    return this.parent().children().not(this).filter(e);
  },
  isParent: function() {
    var e = this[0];
    if (e)
      return e.isNode() && e._private.children.length !== 0;
  },
  isChildless: function() {
    var e = this[0];
    if (e)
      return e.isNode() && e._private.children.length === 0;
  },
  isChild: function() {
    var e = this[0];
    if (e)
      return e.isNode() && e._private.parent != null;
  },
  isOrphan: function() {
    var e = this[0];
    if (e)
      return e.isNode() && e._private.parent == null;
  },
  descendants: function(e) {
    var r = [];
    function a(n) {
      for (var i = 0; i < n.length; i++) {
        var s = n[i];
        r.push(s), s.children().nonempty() && a(s.children());
      }
    }
    return a(this.children()), this.spawn(r, !0).filter(e);
  }
};
function di(t, e, r, a) {
  for (var n = [], i = new Mr(), s = t.cy(), o = s.hasCompoundNodes(), l = 0; l < t.length; l++) {
    var u = t[l];
    r ? n.push(u) : o && a(n, i, u);
  }
  for (; n.length > 0; ) {
    var f = n.shift();
    e(f), i.add(f.id()), o && a(n, i, f);
  }
  return t;
}
function Fo(t, e, r) {
  if (r.isParent())
    for (var a = r._private.children, n = 0; n < a.length; n++) {
      var i = a[n];
      e.has(i.id()) || t.push(i);
    }
}
Ar.forEachDown = function(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return di(this, t, e, Fo);
};
function Go(t, e, r) {
  if (r.isChild()) {
    var a = r._private.parent;
    e.has(a.id()) || t.push(a);
  }
}
Ar.forEachUp = function(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return di(this, t, e, Go);
};
function vp(t, e, r) {
  Go(t, e, r), Fo(t, e, r);
}
Ar.forEachUpAndDown = function(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return di(this, t, e, vp);
};
Ar.ancestors = Ar.parents;
var na, zo;
na = zo = {
  data: Oe.data({
    field: "data",
    bindingEvent: "data",
    allowBinding: !0,
    allowSetting: !0,
    settingEvent: "data",
    settingTriggersEvent: !0,
    triggerFnName: "trigger",
    allowGetting: !0,
    immutableKeys: {
      id: !0,
      source: !0,
      target: !0,
      parent: !0
    },
    updateStyle: !0
  }),
  removeData: Oe.removeData({
    field: "data",
    event: "data",
    triggerFnName: "trigger",
    triggerEvent: !0,
    immutableKeys: {
      id: !0,
      source: !0,
      target: !0,
      parent: !0
    },
    updateStyle: !0
  }),
  scratch: Oe.data({
    field: "scratch",
    bindingEvent: "scratch",
    allowBinding: !0,
    allowSetting: !0,
    settingEvent: "scratch",
    settingTriggersEvent: !0,
    triggerFnName: "trigger",
    allowGetting: !0,
    updateStyle: !0
  }),
  removeScratch: Oe.removeData({
    field: "scratch",
    event: "scratch",
    triggerFnName: "trigger",
    triggerEvent: !0,
    updateStyle: !0
  }),
  rscratch: Oe.data({
    field: "rscratch",
    allowBinding: !1,
    allowSetting: !0,
    settingTriggersEvent: !1,
    allowGetting: !0
  }),
  removeRscratch: Oe.removeData({
    field: "rscratch",
    triggerEvent: !1
  }),
  id: function() {
    var e = this[0];
    if (e)
      return e._private.data.id;
  }
};
na.attr = na.data;
na.removeAttr = na.removeData;
var cp = zo, vn = {};
function On(t) {
  return function(e) {
    var r = this;
    if (e === void 0 && (e = !0), r.length !== 0)
      if (r.isNode() && !r.removed()) {
        for (var a = 0, n = r[0], i = n._private.edges, s = 0; s < i.length; s++) {
          var o = i[s];
          !e && o.isLoop() || (a += t(n, o));
        }
        return a;
      } else
        return;
  };
}
de(vn, {
  degree: On(function(t, e) {
    return e.source().same(e.target()) ? 2 : 1;
  }),
  indegree: On(function(t, e) {
    return e.target().same(t) ? 1 : 0;
  }),
  outdegree: On(function(t, e) {
    return e.source().same(t) ? 1 : 0;
  })
});
function gr(t, e) {
  return function(r) {
    for (var a, n = this.nodes(), i = 0; i < n.length; i++) {
      var s = n[i], o = s[t](r);
      o !== void 0 && (a === void 0 || e(o, a)) && (a = o);
    }
    return a;
  };
}
de(vn, {
  minDegree: gr("degree", function(t, e) {
    return t < e;
  }),
  maxDegree: gr("degree", function(t, e) {
    return t > e;
  }),
  minIndegree: gr("indegree", function(t, e) {
    return t < e;
  }),
  maxIndegree: gr("indegree", function(t, e) {
    return t > e;
  }),
  minOutdegree: gr("outdegree", function(t, e) {
    return t < e;
  }),
  maxOutdegree: gr("outdegree", function(t, e) {
    return t > e;
  })
});
de(vn, {
  totalDegree: function(e) {
    for (var r = 0, a = this.nodes(), n = 0; n < a.length; n++)
      r += a[n].degree(e);
    return r;
  }
});
var Tt, $o, Vo = function(e, r, a) {
  for (var n = 0; n < e.length; n++) {
    var i = e[n];
    if (!i.locked()) {
      var s = i._private.position, o = {
        x: r.x != null ? r.x - s.x : 0,
        y: r.y != null ? r.y - s.y : 0
      };
      i.isParent() && !(o.x === 0 && o.y === 0) && i.children().shift(o, a), i.dirtyBoundingBoxCache();
    }
  }
}, hs = {
  field: "position",
  bindingEvent: "position",
  allowBinding: !0,
  allowSetting: !0,
  settingEvent: "position",
  settingTriggersEvent: !0,
  triggerFnName: "emitAndNotify",
  allowGetting: !0,
  validKeys: ["x", "y"],
  beforeGet: function(e) {
    e.updateCompoundBounds();
  },
  beforeSet: function(e, r) {
    Vo(e, r, !1);
  },
  onSet: function(e) {
    e.dirtyCompoundBoundsCache();
  },
  canSet: function(e) {
    return !e.locked();
  }
};
Tt = $o = {
  position: Oe.data(hs),
  // position but no notification to renderer
  silentPosition: Oe.data(de({}, hs, {
    allowBinding: !1,
    allowSetting: !0,
    settingTriggersEvent: !1,
    allowGetting: !1,
    beforeSet: function(e, r) {
      Vo(e, r, !0);
    },
    onSet: function(e) {
      e.dirtyCompoundBoundsCache();
    }
  })),
  positions: function(e, r) {
    if (De(e))
      r ? this.silentPosition(e) : this.position(e);
    else if (Be(e)) {
      var a = e, n = this.cy();
      n.startBatch();
      for (var i = 0; i < this.length; i++) {
        var s = this[i], o = void 0;
        (o = a(s, i)) && (r ? s.silentPosition(o) : s.position(o));
      }
      n.endBatch();
    }
    return this;
  },
  silentPositions: function(e) {
    return this.positions(e, !0);
  },
  shift: function(e, r, a) {
    var n;
    if (De(e) ? (n = {
      x: ae(e.x) ? e.x : 0,
      y: ae(e.y) ? e.y : 0
    }, a = r) : ve(e) && ae(r) && (n = {
      x: 0,
      y: 0
    }, n[e] = r), n != null) {
      var i = this.cy();
      i.startBatch();
      for (var s = 0; s < this.length; s++) {
        var o = this[s];
        if (!(i.hasCompoundNodes() && o.isChild() && o.ancestors().anySame(this))) {
          var l = o.position(), u = {
            x: l.x + n.x,
            y: l.y + n.y
          };
          a ? o.silentPosition(u) : o.position(u);
        }
      }
      i.endBatch();
    }
    return this;
  },
  silentShift: function(e, r) {
    return De(e) ? this.shift(e, !0) : ve(e) && ae(r) && this.shift(e, r, !0), this;
  },
  // get/set the rendered (i.e. on screen) positon of the element
  renderedPosition: function(e, r) {
    var a = this[0], n = this.cy(), i = n.zoom(), s = n.pan(), o = De(e) ? e : void 0, l = o !== void 0 || r !== void 0 && ve(e);
    if (a && a.isNode())
      if (l)
        for (var u = 0; u < this.length; u++) {
          var f = this[u];
          r !== void 0 ? f.position(e, (r - s[e]) / i) : o !== void 0 && f.position(Eo(o, i, s));
        }
      else {
        var h = a.position();
        return o = fn(h, i, s), e === void 0 ? o : o[e];
      }
    else if (!l)
      return;
    return this;
  },
  // get/set the position relative to the parent
  relativePosition: function(e, r) {
    var a = this[0], n = this.cy(), i = De(e) ? e : void 0, s = i !== void 0 || r !== void 0 && ve(e), o = n.hasCompoundNodes();
    if (a && a.isNode())
      if (s)
        for (var l = 0; l < this.length; l++) {
          var u = this[l], f = o ? u.parent() : null, h = f && f.length > 0, c = h;
          h && (f = f[0]);
          var v = c ? f.position() : {
            x: 0,
            y: 0
          };
          r !== void 0 ? u.position(e, r + v[e]) : i !== void 0 && u.position({
            x: i.x + v.x,
            y: i.y + v.y
          });
        }
      else {
        var d = a.position(), g = o ? a.parent() : null, p = g && g.length > 0, y = p;
        p && (g = g[0]);
        var E = y ? g.position() : {
          x: 0,
          y: 0
        };
        return i = {
          x: d.x - E.x,
          y: d.y - E.y
        }, e === void 0 ? i : i[e];
      }
    else if (!s)
      return;
    return this;
  }
};
Tt.modelPosition = Tt.point = Tt.position;
Tt.modelPositions = Tt.points = Tt.positions;
Tt.renderedPoint = Tt.renderedPosition;
Tt.relativePoint = Tt.relativePosition;
var dp = $o, Dr, Zt;
Dr = Zt = {};
Zt.renderedBoundingBox = function(t) {
  var e = this.boundingBox(t), r = this.cy(), a = r.zoom(), n = r.pan(), i = e.x1 * a + n.x, s = e.x2 * a + n.x, o = e.y1 * a + n.y, l = e.y2 * a + n.y;
  return {
    x1: i,
    x2: s,
    y1: o,
    y2: l,
    w: s - i,
    h: l - o
  };
};
Zt.dirtyCompoundBoundsCache = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, e = this.cy();
  return !e.styleEnabled() || !e.hasCompoundNodes() ? this : (this.forEachUp(function(r) {
    if (r.isParent()) {
      var a = r._private;
      a.compoundBoundsClean = !1, a.bbCache = null, t || r.emitAndNotify("bounds");
    }
  }), this);
};
Zt.updateCompoundBounds = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, e = this.cy();
  if (!e.styleEnabled() || !e.hasCompoundNodes())
    return this;
  if (!t && e.batching())
    return this;
  function r(s) {
    if (!s.isParent())
      return;
    var o = s._private, l = s.children(), u = s.pstyle("compound-sizing-wrt-labels").value === "include", f = {
      width: {
        val: s.pstyle("min-width").pfValue,
        left: s.pstyle("min-width-bias-left"),
        right: s.pstyle("min-width-bias-right")
      },
      height: {
        val: s.pstyle("min-height").pfValue,
        top: s.pstyle("min-height-bias-top"),
        bottom: s.pstyle("min-height-bias-bottom")
      }
    }, h = l.boundingBox({
      includeLabels: u,
      includeOverlays: !1,
      // updating the compound bounds happens outside of the regular
      // cache cycle (i.e. before fired events)
      useCache: !1
    }), c = o.position;
    (h.w === 0 || h.h === 0) && (h = {
      w: s.pstyle("width").pfValue,
      h: s.pstyle("height").pfValue
    }, h.x1 = c.x - h.w / 2, h.x2 = c.x + h.w / 2, h.y1 = c.y - h.h / 2, h.y2 = c.y + h.h / 2);
    function v(w, D, A) {
      var L = 0, I = 0, O = D + A;
      return w > 0 && O > 0 && (L = D / O * w, I = A / O * w), {
        biasDiff: L,
        biasComplementDiff: I
      };
    }
    function d(w, D, A, L) {
      if (A.units === "%")
        switch (L) {
          case "width":
            return w > 0 ? A.pfValue * w : 0;
          case "height":
            return D > 0 ? A.pfValue * D : 0;
          case "average":
            return w > 0 && D > 0 ? A.pfValue * (w + D) / 2 : 0;
          case "min":
            return w > 0 && D > 0 ? w > D ? A.pfValue * D : A.pfValue * w : 0;
          case "max":
            return w > 0 && D > 0 ? w > D ? A.pfValue * w : A.pfValue * D : 0;
          default:
            return 0;
        }
      else
        return A.units === "px" ? A.pfValue : 0;
    }
    var g = f.width.left.value;
    f.width.left.units === "px" && f.width.val > 0 && (g = g * 100 / f.width.val);
    var p = f.width.right.value;
    f.width.right.units === "px" && f.width.val > 0 && (p = p * 100 / f.width.val);
    var y = f.height.top.value;
    f.height.top.units === "px" && f.height.val > 0 && (y = y * 100 / f.height.val);
    var E = f.height.bottom.value;
    f.height.bottom.units === "px" && f.height.val > 0 && (E = E * 100 / f.height.val);
    var m = v(f.width.val - h.w, g, p), T = m.biasDiff, C = m.biasComplementDiff, S = v(f.height.val - h.h, y, E), b = S.biasDiff, x = S.biasComplementDiff;
    o.autoPadding = d(h.w, h.h, s.pstyle("padding"), s.pstyle("padding-relative-to").value), o.autoWidth = Math.max(h.w, f.width.val), c.x = (-T + h.x1 + h.x2 + C) / 2, o.autoHeight = Math.max(h.h, f.height.val), c.y = (-b + h.y1 + h.y2 + x) / 2;
  }
  for (var a = 0; a < this.length; a++) {
    var n = this[a], i = n._private;
    (!i.compoundBoundsClean || t) && (r(n), e.batching() || (i.compoundBoundsClean = !0));
  }
  return this;
};
var dt = function(e) {
  return e === 1 / 0 || e === -1 / 0 ? 0 : e;
}, wt = function(e, r, a, n, i) {
  n - r === 0 || i - a === 0 || r == null || a == null || n == null || i == null || (e.x1 = r < e.x1 ? r : e.x1, e.x2 = n > e.x2 ? n : e.x2, e.y1 = a < e.y1 ? a : e.y1, e.y2 = i > e.y2 ? i : e.y2, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1);
}, tr = function(e, r) {
  return r == null ? e : wt(e, r.x1, r.y1, r.x2, r.y2);
}, Ur = function(e, r, a) {
  return xt(e, r, a);
}, Oa = function(e, r, a) {
  if (!r.cy().headless()) {
    var n = r._private, i = n.rstyle, s = i.arrowWidth / 2, o = r.pstyle(a + "-arrow-shape").value, l, u;
    if (o !== "none") {
      a === "source" ? (l = i.srcX, u = i.srcY) : a === "target" ? (l = i.tgtX, u = i.tgtY) : (l = i.midX, u = i.midY);
      var f = n.arrowBounds = n.arrowBounds || {}, h = f[a] = f[a] || {};
      h.x1 = l - s, h.y1 = u - s, h.x2 = l + s, h.y2 = u + s, h.w = h.x2 - h.x1, h.h = h.y2 - h.y1, ka(h, 1), wt(e, h.x1, h.y1, h.x2, h.y2);
    }
  }
}, Nn = function(e, r, a) {
  if (!r.cy().headless()) {
    var n;
    a ? n = a + "-" : n = "";
    var i = r._private, s = i.rstyle, o = r.pstyle(n + "label").strValue;
    if (o) {
      var l = r.pstyle("text-halign"), u = r.pstyle("text-valign"), f = Ur(s, "labelWidth", a), h = Ur(s, "labelHeight", a), c = Ur(s, "labelX", a), v = Ur(s, "labelY", a), d = r.pstyle(n + "text-margin-x").pfValue, g = r.pstyle(n + "text-margin-y").pfValue, p = r.isEdge(), y = r.pstyle(n + "text-rotation"), E = r.pstyle("text-outline-width").pfValue, m = r.pstyle("text-border-width").pfValue, T = m / 2, C = r.pstyle("text-background-padding").pfValue, S = 2, b = h, x = f, w = x / 2, D = b / 2, A, L, I, O;
      if (p)
        A = c - w, L = c + w, I = v - D, O = v + D;
      else {
        switch (l.value) {
          case "left":
            A = c - x, L = c;
            break;
          case "center":
            A = c - w, L = c + w;
            break;
          case "right":
            A = c, L = c + x;
            break;
        }
        switch (u.value) {
          case "top":
            I = v - b, O = v;
            break;
          case "center":
            I = v - D, O = v + D;
            break;
          case "bottom":
            I = v, O = v + b;
            break;
        }
      }
      A += d - Math.max(E, T) - C - S, L += d + Math.max(E, T) + C + S, I += g - Math.max(E, T) - C - S, O += g + Math.max(E, T) + C + S;
      var P = a || "main", R = i.labelBounds, M = R[P] = R[P] || {};
      M.x1 = A, M.y1 = I, M.x2 = L, M.y2 = O, M.w = L - A, M.h = O - I;
      var k = p && y.strValue === "autorotate", B = y.pfValue != null && y.pfValue !== 0;
      if (k || B) {
        var G = k ? Ur(i.rstyle, "labelAngle", a) : y.pfValue, F = Math.cos(G), $ = Math.sin(G), U = (A + L) / 2, _ = (I + O) / 2;
        if (!p) {
          switch (l.value) {
            case "left":
              U = L;
              break;
            case "right":
              U = A;
              break;
          }
          switch (u.value) {
            case "top":
              _ = O;
              break;
            case "bottom":
              _ = I;
              break;
          }
        }
        var Y = function(ce, te) {
          return ce = ce - U, te = te - _, {
            x: ce * F - te * $ + U,
            y: ce * $ + te * F + _
          };
        }, W = Y(A, I), z = Y(A, O), K = Y(L, I), j = Y(L, O);
        A = Math.min(W.x, z.x, K.x, j.x), L = Math.max(W.x, z.x, K.x, j.x), I = Math.min(W.y, z.y, K.y, j.y), O = Math.max(W.y, z.y, K.y, j.y);
      }
      var Q = P + "Rot", ee = R[Q] = R[Q] || {};
      ee.x1 = A, ee.y1 = I, ee.x2 = L, ee.y2 = O, ee.w = L - A, ee.h = O - I, wt(e, A, I, L, O), wt(i.labelBounds.all, A, I, L, O);
    }
    return e;
  }
}, gp = function(e, r) {
  if (!r.cy().headless()) {
    var a = r.pstyle("outline-opacity").value, n = r.pstyle("outline-width").value;
    if (a > 0 && n > 0) {
      var i = r.pstyle("outline-offset").value, s = r.pstyle("shape").value, o = n + i, l = (e.w + o * 2) / e.w, u = (e.h + o * 2) / e.h, f = 0, h = 0;
      ["diamond", "pentagon", "round-triangle"].includes(s) ? (l = (e.w + o * 2.4) / e.w, h = -o / 3.6) : ["concave-hexagon", "rhomboid", "right-rhomboid"].includes(s) ? l = (e.w + o * 2.4) / e.w : s === "star" ? (l = (e.w + o * 2.8) / e.w, u = (e.h + o * 2.6) / e.h, h = -o / 3.8) : s === "triangle" ? (l = (e.w + o * 2.8) / e.w, u = (e.h + o * 2.4) / e.h, h = -o / 1.4) : s === "vee" && (l = (e.w + o * 4.4) / e.w, u = (e.h + o * 3.8) / e.h, h = -o * 0.5);
      var c = e.h * u - e.h, v = e.w * l - e.w;
      if (Pa(e, [Math.ceil(c / 2), Math.ceil(v / 2)]), f != 0 || h !== 0) {
        var d = Ud(e, f, h);
        xo(e, d);
      }
    }
  }
}, pp = function(e, r) {
  var a = e._private.cy, n = a.styleEnabled(), i = a.headless(), s = ft(), o = e._private, l = e.isNode(), u = e.isEdge(), f, h, c, v, d, g, p = o.rstyle, y = l && n ? e.pstyle("bounds-expansion").pfValue : [0], E = function(ue) {
    return ue.pstyle("display").value !== "none";
  }, m = !n || E(e) && (!u || E(e.source()) && E(e.target()));
  if (m) {
    var T = 0, C = 0;
    n && r.includeOverlays && (T = e.pstyle("overlay-opacity").value, T !== 0 && (C = e.pstyle("overlay-padding").value));
    var S = 0, b = 0;
    n && r.includeUnderlays && (S = e.pstyle("underlay-opacity").value, S !== 0 && (b = e.pstyle("underlay-padding").value));
    var x = Math.max(C, b), w = 0, D = 0;
    if (n && (w = e.pstyle("width").pfValue, D = w / 2), l && r.includeNodes) {
      var A = e.position();
      d = A.x, g = A.y;
      var L = e.outerWidth(), I = L / 2, O = e.outerHeight(), P = O / 2;
      f = d - I, h = d + I, c = g - P, v = g + P, wt(s, f, c, h, v), n && r.includeOutlines && gp(s, e);
    } else if (u && r.includeEdges)
      if (n && !i) {
        var R = e.pstyle("curve-style").strValue;
        if (f = Math.min(p.srcX, p.midX, p.tgtX), h = Math.max(p.srcX, p.midX, p.tgtX), c = Math.min(p.srcY, p.midY, p.tgtY), v = Math.max(p.srcY, p.midY, p.tgtY), f -= D, h += D, c -= D, v += D, wt(s, f, c, h, v), R === "haystack") {
          var M = p.haystackPts;
          if (M && M.length === 2) {
            if (f = M[0].x, c = M[0].y, h = M[1].x, v = M[1].y, f > h) {
              var k = f;
              f = h, h = k;
            }
            if (c > v) {
              var B = c;
              c = v, v = B;
            }
            wt(s, f - D, c - D, h + D, v + D);
          }
        } else if (R === "bezier" || R === "unbundled-bezier" || R === "segments" || R === "taxi") {
          var G;
          switch (R) {
            case "bezier":
            case "unbundled-bezier":
              G = p.bezierPts;
              break;
            case "segments":
            case "taxi":
              G = p.linePts;
              break;
          }
          if (G != null)
            for (var F = 0; F < G.length; F++) {
              var $ = G[F];
              f = $.x - D, h = $.x + D, c = $.y - D, v = $.y + D, wt(s, f, c, h, v);
            }
        }
      } else {
        var U = e.source(), _ = U.position(), Y = e.target(), W = Y.position();
        if (f = _.x, h = W.x, c = _.y, v = W.y, f > h) {
          var z = f;
          f = h, h = z;
        }
        if (c > v) {
          var K = c;
          c = v, v = K;
        }
        f -= D, h += D, c -= D, v += D, wt(s, f, c, h, v);
      }
    if (n && r.includeEdges && u && (Oa(s, e, "mid-source"), Oa(s, e, "mid-target"), Oa(s, e, "source"), Oa(s, e, "target")), n) {
      var j = e.pstyle("ghost").value === "yes";
      if (j) {
        var Q = e.pstyle("ghost-offset-x").pfValue, ee = e.pstyle("ghost-offset-y").pfValue;
        wt(s, s.x1 + Q, s.y1 + ee, s.x2 + Q, s.y2 + ee);
      }
    }
    var ne = o.bodyBounds = o.bodyBounds || {};
    Ki(ne, s), Pa(ne, y), ka(ne, 1), n && (f = s.x1, h = s.x2, c = s.y1, v = s.y2, wt(s, f - x, c - x, h + x, v + x));
    var ce = o.overlayBounds = o.overlayBounds || {};
    Ki(ce, s), Pa(ce, y), ka(ce, 1);
    var te = o.labelBounds = o.labelBounds || {};
    te.all != null ? _d(te.all) : te.all = ft(), n && r.includeLabels && (r.includeMainLabels && Nn(s, e, null), u && (r.includeSourceLabels && Nn(s, e, "source"), r.includeTargetLabels && Nn(s, e, "target")));
  }
  return s.x1 = dt(s.x1), s.y1 = dt(s.y1), s.x2 = dt(s.x2), s.y2 = dt(s.y2), s.w = dt(s.x2 - s.x1), s.h = dt(s.y2 - s.y1), s.w > 0 && s.h > 0 && m && (Pa(s, y), ka(s, 1)), s;
}, _o = function(e) {
  var r = 0, a = function(s) {
    return (s ? 1 : 0) << r++;
  }, n = 0;
  return n += a(e.incudeNodes), n += a(e.includeEdges), n += a(e.includeLabels), n += a(e.includeMainLabels), n += a(e.includeSourceLabels), n += a(e.includeTargetLabels), n += a(e.includeOverlays), n += a(e.includeOutlines), n;
}, Uo = function(e) {
  if (e.isEdge()) {
    var r = e.source().position(), a = e.target().position(), n = function(s) {
      return Math.round(s);
    };
    return fd([n(r.x), n(r.y), n(a.x), n(a.y)]);
  } else
    return 0;
}, vs = function(e, r) {
  var a = e._private, n, i = e.isEdge(), s = r == null ? cs : _o(r), o = s === cs, l = Uo(e), u = a.bbCachePosKey === l, f = r.useCache && u, h = function(g) {
    return g._private.bbCache == null || g._private.styleDirty;
  }, c = !f || h(e) || i && h(e.source()) || h(e.target());
  if (c ? (u || e.recalculateRenderedStyle(f), n = pp(e, ia), a.bbCache = n, a.bbCachePosKey = l) : n = a.bbCache, !o) {
    var v = e.isNode();
    n = ft(), (r.includeNodes && v || r.includeEdges && !v) && (r.includeOverlays ? tr(n, a.overlayBounds) : tr(n, a.bodyBounds)), r.includeLabels && (r.includeMainLabels && (!i || r.includeSourceLabels && r.includeTargetLabels) ? tr(n, a.labelBounds.all) : (r.includeMainLabels && tr(n, a.labelBounds.mainRot), r.includeSourceLabels && tr(n, a.labelBounds.sourceRot), r.includeTargetLabels && tr(n, a.labelBounds.targetRot))), n.w = n.x2 - n.x1, n.h = n.y2 - n.y1;
  }
  return n;
}, ia = {
  includeNodes: !0,
  includeEdges: !0,
  includeLabels: !0,
  includeMainLabels: !0,
  includeSourceLabels: !0,
  includeTargetLabels: !0,
  includeOverlays: !0,
  includeUnderlays: !0,
  includeOutlines: !0,
  useCache: !0
}, cs = _o(ia), ds = Qe(ia);
Zt.boundingBox = function(t) {
  var e;
  if (this.length === 1 && this[0]._private.bbCache != null && !this[0]._private.styleDirty && (t === void 0 || t.useCache === void 0 || t.useCache === !0))
    t === void 0 ? t = ia : t = ds(t), e = vs(this[0], t);
  else {
    e = ft(), t = t || ia;
    var r = ds(t), a = this, n = a.cy(), i = n.styleEnabled();
    if (i)
      for (var s = 0; s < a.length; s++) {
        var o = a[s], l = o._private, u = Uo(o), f = l.bbCachePosKey === u, h = r.useCache && f && !l.styleDirty;
        o.recalculateRenderedStyle(h);
      }
    this.updateCompoundBounds(!t.useCache);
    for (var c = 0; c < a.length; c++) {
      var v = a[c];
      tr(e, vs(v, r));
    }
  }
  return e.x1 = dt(e.x1), e.y1 = dt(e.y1), e.x2 = dt(e.x2), e.y2 = dt(e.y2), e.w = dt(e.x2 - e.x1), e.h = dt(e.y2 - e.y1), e;
};
Zt.dirtyBoundingBoxCache = function() {
  for (var t = 0; t < this.length; t++) {
    var e = this[t]._private;
    e.bbCache = null, e.bbCachePosKey = null, e.bodyBounds = null, e.overlayBounds = null, e.labelBounds.all = null, e.labelBounds.source = null, e.labelBounds.target = null, e.labelBounds.main = null, e.labelBounds.sourceRot = null, e.labelBounds.targetRot = null, e.labelBounds.mainRot = null, e.arrowBounds.source = null, e.arrowBounds.target = null, e.arrowBounds["mid-source"] = null, e.arrowBounds["mid-target"] = null;
  }
  return this.emitAndNotify("bounds"), this;
};
Zt.boundingBoxAt = function(t) {
  var e = this.nodes(), r = this.cy(), a = r.hasCompoundNodes(), n = r.collection();
  if (a && (n = e.filter(function(u) {
    return u.isParent();
  }), e = e.not(n)), De(t)) {
    var i = t;
    t = function() {
      return i;
    };
  }
  var s = function(f, h) {
    return f._private.bbAtOldPos = t(f, h);
  }, o = function(f) {
    return f._private.bbAtOldPos;
  };
  r.startBatch(), e.forEach(s).silentPositions(t), a && (n.dirtyCompoundBoundsCache(), n.dirtyBoundingBoxCache(), n.updateCompoundBounds(!0));
  var l = Vd(this.boundingBox({
    useCache: !1
  }));
  return e.silentPositions(o), a && (n.dirtyCompoundBoundsCache(), n.dirtyBoundingBoxCache(), n.updateCompoundBounds(!0)), r.endBatch(), l;
};
Dr.boundingbox = Dr.bb = Dr.boundingBox;
Dr.renderedBoundingbox = Dr.renderedBoundingBox;
var yp = Zt, qr, ga;
qr = ga = {};
var Ho = function(e) {
  e.uppercaseName = Yi(e.name), e.autoName = "auto" + e.uppercaseName, e.labelName = "label" + e.uppercaseName, e.outerName = "outer" + e.uppercaseName, e.uppercaseOuterName = Yi(e.outerName), qr[e.name] = function() {
    var a = this[0], n = a._private, i = n.cy, s = i._private.styleEnabled;
    if (a)
      if (s) {
        if (a.isParent())
          return a.updateCompoundBounds(), n[e.autoName] || 0;
        var o = a.pstyle(e.name);
        switch (o.strValue) {
          case "label":
            return a.recalculateRenderedStyle(), n.rstyle[e.labelName] || 0;
          default:
            return o.pfValue;
        }
      } else
        return 1;
  }, qr["outer" + e.uppercaseName] = function() {
    var a = this[0], n = a._private, i = n.cy, s = i._private.styleEnabled;
    if (a)
      if (s) {
        var o = a[e.name](), l = a.pstyle("border-width").pfValue, u = 2 * a.padding();
        return o + l + u;
      } else
        return 1;
  }, qr["rendered" + e.uppercaseName] = function() {
    var a = this[0];
    if (a) {
      var n = a[e.name]();
      return n * this.cy().zoom();
    }
  }, qr["rendered" + e.uppercaseOuterName] = function() {
    var a = this[0];
    if (a) {
      var n = a[e.outerName]();
      return n * this.cy().zoom();
    }
  };
};
Ho({
  name: "width"
});
Ho({
  name: "height"
});
ga.padding = function() {
  var t = this[0], e = t._private;
  return t.isParent() ? (t.updateCompoundBounds(), e.autoPadding !== void 0 ? e.autoPadding : t.pstyle("padding").pfValue) : t.pstyle("padding").pfValue;
};
ga.paddedHeight = function() {
  var t = this[0];
  return t.height() + 2 * t.padding();
};
ga.paddedWidth = function() {
  var t = this[0];
  return t.width() + 2 * t.padding();
};
var mp = ga, bp = function(e, r) {
  if (e.isEdge())
    return r(e);
}, Ep = function(e, r) {
  if (e.isEdge()) {
    var a = e.cy();
    return fn(r(e), a.zoom(), a.pan());
  }
}, wp = function(e, r) {
  if (e.isEdge()) {
    var a = e.cy(), n = a.pan(), i = a.zoom();
    return r(e).map(function(s) {
      return fn(s, i, n);
    });
  }
}, xp = function(e) {
  return e.renderer().getControlPoints(e);
}, Tp = function(e) {
  return e.renderer().getSegmentPoints(e);
}, Cp = function(e) {
  return e.renderer().getSourceEndpoint(e);
}, Dp = function(e) {
  return e.renderer().getTargetEndpoint(e);
}, Sp = function(e) {
  return e.renderer().getEdgeMidpoint(e);
}, gs = {
  controlPoints: {
    get: xp,
    mult: !0
  },
  segmentPoints: {
    get: Tp,
    mult: !0
  },
  sourceEndpoint: {
    get: Cp
  },
  targetEndpoint: {
    get: Dp
  },
  midpoint: {
    get: Sp
  }
}, Lp = function(e) {
  return "rendered" + e[0].toUpperCase() + e.substr(1);
}, Ap = Object.keys(gs).reduce(function(t, e) {
  var r = gs[e], a = Lp(e);
  return t[e] = function() {
    return bp(this, r.get);
  }, r.mult ? t[a] = function() {
    return wp(this, r.get);
  } : t[a] = function() {
    return Ep(this, r.get);
  }, t;
}, {}), Op = de({}, dp, yp, mp, Ap);
/*!
Event object based on jQuery events, MIT license

https://jquery.org/license/
https://tldrlegal.com/license/mit-license
https://github.com/jquery/jquery/blob/master/src/event.js
*/
var Yo = function(e, r) {
  this.recycle(e, r);
};
function Hr() {
  return !1;
}
function Na() {
  return !0;
}
Yo.prototype = {
  instanceString: function() {
    return "event";
  },
  recycle: function(e, r) {
    if (this.isImmediatePropagationStopped = this.isPropagationStopped = this.isDefaultPrevented = Hr, e != null && e.preventDefault ? (this.type = e.type, this.isDefaultPrevented = e.defaultPrevented ? Na : Hr) : e != null && e.type ? r = e : this.type = e, r != null && (this.originalEvent = r.originalEvent, this.type = r.type != null ? r.type : this.type, this.cy = r.cy, this.target = r.target, this.position = r.position, this.renderedPosition = r.renderedPosition, this.namespace = r.namespace, this.layout = r.layout), this.cy != null && this.position != null && this.renderedPosition == null) {
      var a = this.position, n = this.cy.zoom(), i = this.cy.pan();
      this.renderedPosition = {
        x: a.x * n + i.x,
        y: a.y * n + i.y
      };
    }
    this.timeStamp = e && e.timeStamp || Date.now();
  },
  preventDefault: function() {
    this.isDefaultPrevented = Na;
    var e = this.originalEvent;
    e && e.preventDefault && e.preventDefault();
  },
  stopPropagation: function() {
    this.isPropagationStopped = Na;
    var e = this.originalEvent;
    e && e.stopPropagation && e.stopPropagation();
  },
  stopImmediatePropagation: function() {
    this.isImmediatePropagationStopped = Na, this.stopPropagation();
  },
  isDefaultPrevented: Hr,
  isPropagationStopped: Hr,
  isImmediatePropagationStopped: Hr
};
var Xo = /^([^.]+)(\.(?:[^.]+))?$/, Np = ".*", Wo = {
  qualifierCompare: function(e, r) {
    return e === r;
  },
  eventMatches: function() {
    return !0;
  },
  addEventFields: function() {
  },
  callbackContext: function(e) {
    return e;
  },
  beforeEmit: function() {
  },
  afterEmit: function() {
  },
  bubble: function() {
    return !1;
  },
  parent: function() {
    return null;
  },
  context: null
}, ps = Object.keys(Wo), Ip = {};
function cn() {
  for (var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ip, e = arguments.length > 1 ? arguments[1] : void 0, r = 0; r < ps.length; r++) {
    var a = ps[r];
    this[a] = t[a] || Wo[a];
  }
  this.context = e || this.context, this.listeners = [], this.emitting = 0;
}
var Kt = cn.prototype, qo = function(e, r, a, n, i, s, o) {
  Be(n) && (i = n, n = null), o && (s == null ? s = o : s = de({}, s, o));
  for (var l = Me(a) ? a : a.split(/\s+/), u = 0; u < l.length; u++) {
    var f = l[u];
    if (!Yt(f)) {
      var h = f.match(Xo);
      if (h) {
        var c = h[1], v = h[2] ? h[2] : null, d = r(e, f, c, v, n, i, s);
        if (d === !1)
          break;
      }
    }
  }
}, ys = function(e, r) {
  return e.addEventFields(e.context, r), new Yo(r.type, r);
}, Mp = function(e, r, a) {
  if (Hc(a)) {
    r(e, a);
    return;
  } else if (De(a)) {
    r(e, ys(e, a));
    return;
  }
  for (var n = Me(a) ? a : a.split(/\s+/), i = 0; i < n.length; i++) {
    var s = n[i];
    if (!Yt(s)) {
      var o = s.match(Xo);
      if (o) {
        var l = o[1], u = o[2] ? o[2] : null, f = ys(e, {
          type: l,
          namespace: u,
          target: e.context
        });
        r(e, f);
      }
    }
  }
};
Kt.on = Kt.addListener = function(t, e, r, a, n) {
  return qo(this, function(i, s, o, l, u, f, h) {
    Be(f) && i.listeners.push({
      event: s,
      // full event string
      callback: f,
      // callback to run
      type: o,
      // the event type (e.g. 'click')
      namespace: l,
      // the event namespace (e.g. ".foo")
      qualifier: u,
      // a restriction on whether to match this emitter
      conf: h
      // additional configuration
    });
  }, t, e, r, a, n), this;
};
Kt.one = function(t, e, r, a) {
  return this.on(t, e, r, a, {
    one: !0
  });
};
Kt.removeListener = Kt.off = function(t, e, r, a) {
  var n = this;
  this.emitting !== 0 && (this.listeners = gd(this.listeners));
  for (var i = this.listeners, s = function(u) {
    var f = i[u];
    qo(n, function(h, c, v, d, g, p) {
      if ((f.type === v || t === "*") && (!d && f.namespace !== ".*" || f.namespace === d) && (!g || h.qualifierCompare(f.qualifier, g)) && (!p || f.callback === p))
        return i.splice(u, 1), !1;
    }, t, e, r, a);
  }, o = i.length - 1; o >= 0; o--)
    s(o);
  return this;
};
Kt.removeAllListeners = function() {
  return this.removeListener("*");
};
Kt.emit = Kt.trigger = function(t, e, r) {
  var a = this.listeners, n = a.length;
  return this.emitting++, Me(e) || (e = [e]), Mp(this, function(i, s) {
    r != null && (a = [{
      event: s.event,
      type: s.type,
      namespace: s.namespace,
      callback: r
    }], n = a.length);
    for (var o = function(f) {
      var h = a[f];
      if (h.type === s.type && (!h.namespace || h.namespace === s.namespace || h.namespace === Np) && i.eventMatches(i.context, h, s)) {
        var c = [s];
        e != null && yd(c, e), i.beforeEmit(i.context, h, s), h.conf && h.conf.one && (i.listeners = i.listeners.filter(function(g) {
          return g !== h;
        }));
        var v = i.callbackContext(i.context, h, s), d = h.callback.apply(v, c);
        i.afterEmit(i.context, h, s), d === !1 && (s.stopPropagation(), s.preventDefault());
      }
    }, l = 0; l < n; l++)
      o(l);
    i.bubble(i.context) && !s.isPropagationStopped() && i.parent(i.context).emit(s, e);
  }, t), this.emitting--, this;
};
var Rp = {
  qualifierCompare: function(e, r) {
    return e == null || r == null ? e == null && r == null : e.sameText(r);
  },
  eventMatches: function(e, r, a) {
    var n = r.qualifier;
    return n != null ? e !== a.target && ca(a.target) && n.matches(a.target) : !0;
  },
  addEventFields: function(e, r) {
    r.cy = e.cy(), r.target = e;
  },
  callbackContext: function(e, r, a) {
    return r.qualifier != null ? a.target : e;
  },
  beforeEmit: function(e, r) {
    r.conf && r.conf.once && r.conf.onceCollection.removeListener(r.event, r.qualifier, r.callback);
  },
  bubble: function() {
    return !0;
  },
  parent: function(e) {
    return e.isChild() ? e.parent() : e.cy();
  }
}, Ia = function(e) {
  return ve(e) ? new Wt(e) : e;
}, Ko = {
  createEmitter: function() {
    for (var e = 0; e < this.length; e++) {
      var r = this[e], a = r._private;
      a.emitter || (a.emitter = new cn(Rp, r));
    }
    return this;
  },
  emitter: function() {
    return this._private.emitter;
  },
  on: function(e, r, a) {
    for (var n = Ia(r), i = 0; i < this.length; i++) {
      var s = this[i];
      s.emitter().on(e, n, a);
    }
    return this;
  },
  removeListener: function(e, r, a) {
    for (var n = Ia(r), i = 0; i < this.length; i++) {
      var s = this[i];
      s.emitter().removeListener(e, n, a);
    }
    return this;
  },
  removeAllListeners: function() {
    for (var e = 0; e < this.length; e++) {
      var r = this[e];
      r.emitter().removeAllListeners();
    }
    return this;
  },
  one: function(e, r, a) {
    for (var n = Ia(r), i = 0; i < this.length; i++) {
      var s = this[i];
      s.emitter().one(e, n, a);
    }
    return this;
  },
  once: function(e, r, a) {
    for (var n = Ia(r), i = 0; i < this.length; i++) {
      var s = this[i];
      s.emitter().on(e, n, a, {
        once: !0,
        onceCollection: this
      });
    }
  },
  emit: function(e, r) {
    for (var a = 0; a < this.length; a++) {
      var n = this[a];
      n.emitter().emit(e, r);
    }
    return this;
  },
  emitAndNotify: function(e, r) {
    if (this.length !== 0)
      return this.cy().notify(e, this), this.emit(e, r), this;
  }
};
Oe.eventAliasesOn(Ko);
var Zo = {
  nodes: function(e) {
    return this.filter(function(r) {
      return r.isNode();
    }).filter(e);
  },
  edges: function(e) {
    return this.filter(function(r) {
      return r.isEdge();
    }).filter(e);
  },
  // internal helper to get nodes and edges as separate collections with single iteration over elements
  byGroup: function() {
    for (var e = this.spawn(), r = this.spawn(), a = 0; a < this.length; a++) {
      var n = this[a];
      n.isNode() ? e.push(n) : r.push(n);
    }
    return {
      nodes: e,
      edges: r
    };
  },
  filter: function(e, r) {
    if (e === void 0)
      return this;
    if (ve(e) || ht(e))
      return new Wt(e).filter(this);
    if (Be(e)) {
      for (var a = this.spawn(), n = this, i = 0; i < n.length; i++) {
        var s = n[i], o = r ? e.apply(r, [s, i, n]) : e(s, i, n);
        o && a.push(s);
      }
      return a;
    }
    return this.spawn();
  },
  not: function(e) {
    if (e) {
      ve(e) && (e = this.filter(e));
      for (var r = this.spawn(), a = 0; a < this.length; a++) {
        var n = this[a], i = e.has(n);
        i || r.push(n);
      }
      return r;
    } else
      return this;
  },
  absoluteComplement: function() {
    var e = this.cy();
    return e.mutableElements().not(this);
  },
  intersect: function(e) {
    if (ve(e)) {
      var r = e;
      return this.filter(r);
    }
    for (var a = this.spawn(), n = this, i = e, s = this.length < e.length, o = s ? n : i, l = s ? i : n, u = 0; u < o.length; u++) {
      var f = o[u];
      l.has(f) && a.push(f);
    }
    return a;
  },
  xor: function(e) {
    var r = this._private.cy;
    ve(e) && (e = r.$(e));
    var a = this.spawn(), n = this, i = e, s = function(l, u) {
      for (var f = 0; f < l.length; f++) {
        var h = l[f], c = h._private.data.id, v = u.hasElementWithId(c);
        v || a.push(h);
      }
    };
    return s(n, i), s(i, n), a;
  },
  diff: function(e) {
    var r = this._private.cy;
    ve(e) && (e = r.$(e));
    var a = this.spawn(), n = this.spawn(), i = this.spawn(), s = this, o = e, l = function(f, h, c) {
      for (var v = 0; v < f.length; v++) {
        var d = f[v], g = d._private.data.id, p = h.hasElementWithId(g);
        p ? i.merge(d) : c.push(d);
      }
    };
    return l(s, o, a), l(o, s, n), {
      left: a,
      right: n,
      both: i
    };
  },
  add: function(e) {
    var r = this._private.cy;
    if (!e)
      return this;
    if (ve(e)) {
      var a = e;
      e = r.mutableElements().filter(a);
    }
    for (var n = this.spawnSelf(), i = 0; i < e.length; i++) {
      var s = e[i], o = !this.has(s);
      o && n.push(s);
    }
    return n;
  },
  // in place merge on calling collection
  merge: function(e) {
    var r = this._private, a = r.cy;
    if (!e)
      return this;
    if (e && ve(e)) {
      var n = e;
      e = a.mutableElements().filter(n);
    }
    for (var i = r.map, s = 0; s < e.length; s++) {
      var o = e[s], l = o._private.data.id, u = !i.has(l);
      if (u) {
        var f = this.length++;
        this[f] = o, i.set(l, {
          ele: o,
          index: f
        });
      }
    }
    return this;
  },
  unmergeAt: function(e) {
    var r = this[e], a = r.id(), n = this._private, i = n.map;
    this[e] = void 0, i.delete(a);
    var s = e === this.length - 1;
    if (this.length > 1 && !s) {
      var o = this.length - 1, l = this[o], u = l._private.data.id;
      this[o] = void 0, this[e] = l, i.set(u, {
        ele: l,
        index: e
      });
    }
    return this.length--, this;
  },
  // remove single ele in place in calling collection
  unmergeOne: function(e) {
    e = e[0];
    var r = this._private, a = e._private.data.id, n = r.map, i = n.get(a);
    if (!i)
      return this;
    var s = i.index;
    return this.unmergeAt(s), this;
  },
  // remove eles in place on calling collection
  unmerge: function(e) {
    var r = this._private.cy;
    if (!e)
      return this;
    if (e && ve(e)) {
      var a = e;
      e = r.mutableElements().filter(a);
    }
    for (var n = 0; n < e.length; n++)
      this.unmergeOne(e[n]);
    return this;
  },
  unmergeBy: function(e) {
    for (var r = this.length - 1; r >= 0; r--) {
      var a = this[r];
      e(a) && this.unmergeAt(r);
    }
    return this;
  },
  map: function(e, r) {
    for (var a = [], n = this, i = 0; i < n.length; i++) {
      var s = n[i], o = r ? e.apply(r, [s, i, n]) : e(s, i, n);
      a.push(o);
    }
    return a;
  },
  reduce: function(e, r) {
    for (var a = r, n = this, i = 0; i < n.length; i++)
      a = e(a, n[i], i, n);
    return a;
  },
  max: function(e, r) {
    for (var a = -1 / 0, n, i = this, s = 0; s < i.length; s++) {
      var o = i[s], l = r ? e.apply(r, [o, s, i]) : e(o, s, i);
      l > a && (a = l, n = o);
    }
    return {
      value: a,
      ele: n
    };
  },
  min: function(e, r) {
    for (var a = 1 / 0, n, i = this, s = 0; s < i.length; s++) {
      var o = i[s], l = r ? e.apply(r, [o, s, i]) : e(o, s, i);
      l < a && (a = l, n = o);
    }
    return {
      value: a,
      ele: n
    };
  }
}, Ae = Zo;
Ae.u = Ae["|"] = Ae["+"] = Ae.union = Ae.or = Ae.add;
Ae["\\"] = Ae["!"] = Ae["-"] = Ae.difference = Ae.relativeComplement = Ae.subtract = Ae.not;
Ae.n = Ae["&"] = Ae["."] = Ae.and = Ae.intersection = Ae.intersect;
Ae["^"] = Ae["(+)"] = Ae["(-)"] = Ae.symmetricDifference = Ae.symdiff = Ae.xor;
Ae.fnFilter = Ae.filterFn = Ae.stdFilter = Ae.filter;
Ae.complement = Ae.abscomp = Ae.absoluteComplement;
var kp = {
  isNode: function() {
    return this.group() === "nodes";
  },
  isEdge: function() {
    return this.group() === "edges";
  },
  isLoop: function() {
    return this.isEdge() && this.source()[0] === this.target()[0];
  },
  isSimple: function() {
    return this.isEdge() && this.source()[0] !== this.target()[0];
  },
  group: function() {
    var e = this[0];
    if (e)
      return e._private.group;
  }
}, Qo = function(e, r) {
  var a = e.cy(), n = a.hasCompoundNodes();
  function i(f) {
    var h = f.pstyle("z-compound-depth");
    return h.value === "auto" ? n ? f.zDepth() : 0 : h.value === "bottom" ? -1 : h.value === "top" ? si : 0;
  }
  var s = i(e) - i(r);
  if (s !== 0)
    return s;
  function o(f) {
    var h = f.pstyle("z-index-compare");
    return h.value === "auto" && f.isNode() ? 1 : 0;
  }
  var l = o(e) - o(r);
  if (l !== 0)
    return l;
  var u = e.pstyle("z-index").value - r.pstyle("z-index").value;
  return u !== 0 ? u : e.poolIndex() - r.poolIndex();
}, Za = {
  forEach: function(e, r) {
    if (Be(e))
      for (var a = this.length, n = 0; n < a; n++) {
        var i = this[n], s = r ? e.apply(r, [i, n, this]) : e(i, n, this);
        if (s === !1)
          break;
      }
    return this;
  },
  toArray: function() {
    for (var e = [], r = 0; r < this.length; r++)
      e.push(this[r]);
    return e;
  },
  slice: function(e, r) {
    var a = [], n = this.length;
    r == null && (r = n), e == null && (e = 0), e < 0 && (e = n + e), r < 0 && (r = n + r);
    for (var i = e; i >= 0 && i < r && i < n; i++)
      a.push(this[i]);
    return this.spawn(a);
  },
  size: function() {
    return this.length;
  },
  eq: function(e) {
    return this[e] || this.spawn();
  },
  first: function() {
    return this[0] || this.spawn();
  },
  last: function() {
    return this[this.length - 1] || this.spawn();
  },
  empty: function() {
    return this.length === 0;
  },
  nonempty: function() {
    return !this.empty();
  },
  sort: function(e) {
    if (!Be(e))
      return this;
    var r = this.toArray().sort(e);
    return this.spawn(r);
  },
  sortByZIndex: function() {
    return this.sort(Qo);
  },
  zDepth: function() {
    var e = this[0];
    if (e) {
      var r = e._private, a = r.group;
      if (a === "nodes") {
        var n = r.data.parent ? e.parents().size() : 0;
        return e.isParent() ? n : si - 1;
      } else {
        var i = r.source, s = r.target, o = i.zDepth(), l = s.zDepth();
        return Math.max(o, l, 0);
      }
    }
  }
};
Za.each = Za.forEach;
var Pp = function() {
  var e = "undefined", r = (typeof Symbol == "undefined" ? "undefined" : Ue(Symbol)) != e && Ue(Symbol.iterator) != e;
  r && (Za[Symbol.iterator] = function() {
    var a = this, n = {
      value: void 0,
      done: !1
    }, i = 0, s = this.length;
    return ao({
      next: function() {
        return i < s ? n.value = a[i++] : (n.value = void 0, n.done = !0), n;
      }
    }, Symbol.iterator, function() {
      return this;
    });
  });
};
Pp();
var Bp = Qe({
  nodeDimensionsIncludeLabels: !1
}), Fa = {
  // Calculates and returns node dimensions { x, y } based on options given
  layoutDimensions: function(e) {
    e = Bp(e);
    var r;
    if (!this.takesUpSpace())
      r = {
        w: 0,
        h: 0
      };
    else if (e.nodeDimensionsIncludeLabels) {
      var a = this.boundingBox();
      r = {
        w: a.w,
        h: a.h
      };
    } else
      r = {
        w: this.outerWidth(),
        h: this.outerHeight()
      };
    return (r.w === 0 || r.h === 0) && (r.w = r.h = 1), r;
  },
  // using standard layout options, apply position function (w/ or w/o animation)
  layoutPositions: function(e, r, a) {
    var n = this.nodes().filter(function(C) {
      return !C.isParent();
    }), i = this.cy(), s = r.eles, o = function(S) {
      return S.id();
    }, l = Jr(a, o);
    e.emit({
      type: "layoutstart",
      layout: e
    }), e.animations = [];
    var u = function(S, b, x) {
      var w = {
        x: b.x1 + b.w / 2,
        y: b.y1 + b.h / 2
      }, D = {
        // scale from center of bounding box (not necessarily 0,0)
        x: (x.x - w.x) * S,
        y: (x.y - w.y) * S
      };
      return {
        x: w.x + D.x,
        y: w.y + D.y
      };
    }, f = r.spacingFactor && r.spacingFactor !== 1, h = function() {
      if (!f)
        return null;
      for (var S = ft(), b = 0; b < n.length; b++) {
        var x = n[b], w = l(x, b);
        Hd(S, w.x, w.y);
      }
      return S;
    }, c = h(), v = Jr(function(C, S) {
      var b = l(C, S);
      if (f) {
        var x = Math.abs(r.spacingFactor);
        b = u(x, c, b);
      }
      return r.transform != null && (b = r.transform(C, b)), b;
    }, o);
    if (r.animate) {
      for (var d = 0; d < n.length; d++) {
        var g = n[d], p = v(g, d), y = r.animateFilter == null || r.animateFilter(g, d);
        if (y) {
          var E = g.animation({
            position: p,
            duration: r.animationDuration,
            easing: r.animationEasing
          });
          e.animations.push(E);
        } else
          g.position(p);
      }
      if (r.fit) {
        var m = i.animation({
          fit: {
            boundingBox: s.boundingBoxAt(v),
            padding: r.padding
          },
          duration: r.animationDuration,
          easing: r.animationEasing
        });
        e.animations.push(m);
      } else if (r.zoom !== void 0 && r.pan !== void 0) {
        var T = i.animation({
          zoom: r.zoom,
          pan: r.pan,
          duration: r.animationDuration,
          easing: r.animationEasing
        });
        e.animations.push(T);
      }
      e.animations.forEach(function(C) {
        return C.play();
      }), e.one("layoutready", r.ready), e.emit({
        type: "layoutready",
        layout: e
      }), Rr.all(e.animations.map(function(C) {
        return C.promise();
      })).then(function() {
        e.one("layoutstop", r.stop), e.emit({
          type: "layoutstop",
          layout: e
        });
      });
    } else
      n.positions(v), r.fit && i.fit(r.eles, r.padding), r.zoom != null && i.zoom(r.zoom), r.pan && i.pan(r.pan), e.one("layoutready", r.ready), e.emit({
        type: "layoutready",
        layout: e
      }), e.one("layoutstop", r.stop), e.emit({
        type: "layoutstop",
        layout: e
      });
    return this;
  },
  layout: function(e) {
    var r = this.cy();
    return r.makeLayout(de({}, e, {
      eles: this
    }));
  }
};
Fa.createLayout = Fa.makeLayout = Fa.layout;
function Jo(t, e, r) {
  var a = r._private, n = a.styleCache = a.styleCache || [], i;
  return (i = n[t]) != null || (i = n[t] = e(r)), i;
}
function dn(t, e) {
  return t = ar(t), function(a) {
    return Jo(t, e, a);
  };
}
function gn(t, e) {
  t = ar(t);
  var r = function(n) {
    return e.call(n);
  };
  return function() {
    var n = this[0];
    if (n)
      return Jo(t, r, n);
  };
}
var Ke = {
  recalculateRenderedStyle: function(e) {
    var r = this.cy(), a = r.renderer(), n = r.styleEnabled();
    return a && n && a.recalculateRenderedStyle(this, e), this;
  },
  dirtyStyleCache: function() {
    var e = this.cy(), r = function(i) {
      return i._private.styleCache = null;
    };
    if (e.hasCompoundNodes()) {
      var a;
      a = this.spawnSelf().merge(this.descendants()).merge(this.parents()), a.merge(a.connectedEdges()), a.forEach(r);
    } else
      this.forEach(function(n) {
        r(n), n.connectedEdges().forEach(r);
      });
    return this;
  },
  // fully updates (recalculates) the style for the elements
  updateStyle: function(e) {
    var r = this._private.cy;
    if (!r.styleEnabled())
      return this;
    if (r.batching()) {
      var a = r._private.batchStyleEles;
      return a.merge(this), this;
    }
    var n = r.hasCompoundNodes(), i = this;
    e = !!(e || e === void 0), n && (i = this.spawnSelf().merge(this.descendants()).merge(this.parents()));
    var s = i;
    return e ? s.emitAndNotify("style") : s.emit("style"), i.forEach(function(o) {
      return o._private.styleDirty = !0;
    }), this;
  },
  // private: clears dirty flag and recalculates style
  cleanStyle: function() {
    var e = this.cy();
    if (e.styleEnabled())
      for (var r = 0; r < this.length; r++) {
        var a = this[r];
        a._private.styleDirty && (a._private.styleDirty = !1, e.style().apply(a));
      }
  },
  // get the internal parsed style object for the specified property
  parsedStyle: function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, a = this[0], n = a.cy();
    if (n.styleEnabled() && a) {
      this.cleanStyle();
      var i = a._private.style[e];
      return i != null ? i : r ? n.style().getDefaultProperty(e) : null;
    }
  },
  numericStyle: function(e) {
    var r = this[0];
    if (r.cy().styleEnabled() && r) {
      var a = r.pstyle(e);
      return a.pfValue !== void 0 ? a.pfValue : a.value;
    }
  },
  numericStyleUnits: function(e) {
    var r = this[0];
    if (r.cy().styleEnabled() && r)
      return r.pstyle(e).units;
  },
  // get the specified css property as a rendered value (i.e. on-screen value)
  // or get the whole rendered style if no property specified (NB doesn't allow setting)
  renderedStyle: function(e) {
    var r = this.cy();
    if (!r.styleEnabled())
      return this;
    var a = this[0];
    if (a)
      return r.style().getRenderedStyle(a, e);
  },
  // read the calculated css style of the element or override the style (via a bypass)
  style: function(e, r) {
    var a = this.cy();
    if (!a.styleEnabled())
      return this;
    var n = !1, i = a.style();
    if (De(e)) {
      var s = e;
      i.applyBypass(this, s, n), this.emitAndNotify("style");
    } else if (ve(e))
      if (r === void 0) {
        var o = this[0];
        return o ? i.getStylePropertyValue(o, e) : void 0;
      } else
        i.applyBypass(this, e, r, n), this.emitAndNotify("style");
    else if (e === void 0) {
      var l = this[0];
      return l ? i.getRawStyle(l) : void 0;
    }
    return this;
  },
  removeStyle: function(e) {
    var r = this.cy();
    if (!r.styleEnabled())
      return this;
    var a = !1, n = r.style(), i = this;
    if (e === void 0)
      for (var s = 0; s < i.length; s++) {
        var o = i[s];
        n.removeAllBypasses(o, a);
      }
    else {
      e = e.split(/\s+/);
      for (var l = 0; l < i.length; l++) {
        var u = i[l];
        n.removeBypasses(u, e, a);
      }
    }
    return this.emitAndNotify("style"), this;
  },
  show: function() {
    return this.css("display", "element"), this;
  },
  hide: function() {
    return this.css("display", "none"), this;
  },
  effectiveOpacity: function() {
    var e = this.cy();
    if (!e.styleEnabled())
      return 1;
    var r = e.hasCompoundNodes(), a = this[0];
    if (a) {
      var n = a._private, i = a.pstyle("opacity").value;
      if (!r)
        return i;
      var s = n.data.parent ? a.parents() : null;
      if (s)
        for (var o = 0; o < s.length; o++) {
          var l = s[o], u = l.pstyle("opacity").value;
          i = u * i;
        }
      return i;
    }
  },
  transparent: function() {
    var e = this.cy();
    if (!e.styleEnabled())
      return !1;
    var r = this[0], a = r.cy().hasCompoundNodes();
    if (r)
      return a ? r.effectiveOpacity() === 0 : r.pstyle("opacity").value === 0;
  },
  backgrounding: function() {
    var e = this.cy();
    if (!e.styleEnabled())
      return !1;
    var r = this[0];
    return !!r._private.backgrounding;
  }
};
function In(t, e) {
  var r = t._private, a = r.data.parent ? t.parents() : null;
  if (a)
    for (var n = 0; n < a.length; n++) {
      var i = a[n];
      if (!e(i))
        return !1;
    }
  return !0;
}
function gi(t) {
  var e = t.ok, r = t.edgeOkViaNode || t.ok, a = t.parentOk || t.ok;
  return function() {
    var n = this.cy();
    if (!n.styleEnabled())
      return !0;
    var i = this[0], s = n.hasCompoundNodes();
    if (i) {
      var o = i._private;
      if (!e(i))
        return !1;
      if (i.isNode())
        return !s || In(i, a);
      var l = o.source, u = o.target;
      return r(l) && (!s || In(l, r)) && (l === u || r(u) && (!s || In(u, r)));
    }
  };
}
var kr = dn("eleTakesUpSpace", function(t) {
  return t.pstyle("display").value === "element" && t.width() !== 0 && (t.isNode() ? t.height() !== 0 : !0);
});
Ke.takesUpSpace = gn("takesUpSpace", gi({
  ok: kr
}));
var Fp = dn("eleInteractive", function(t) {
  return t.pstyle("events").value === "yes" && t.pstyle("visibility").value === "visible" && kr(t);
}), Gp = dn("parentInteractive", function(t) {
  return t.pstyle("visibility").value === "visible" && kr(t);
});
Ke.interactive = gn("interactive", gi({
  ok: Fp,
  parentOk: Gp,
  edgeOkViaNode: kr
}));
Ke.noninteractive = function() {
  var t = this[0];
  if (t)
    return !t.interactive();
};
var zp = dn("eleVisible", function(t) {
  return t.pstyle("visibility").value === "visible" && t.pstyle("opacity").pfValue !== 0 && kr(t);
}), $p = kr;
Ke.visible = gn("visible", gi({
  ok: zp,
  edgeOkViaNode: $p
}));
Ke.hidden = function() {
  var t = this[0];
  if (t)
    return !t.visible();
};
Ke.isBundledBezier = gn("isBundledBezier", function() {
  return this.cy().styleEnabled() ? !this.removed() && this.pstyle("curve-style").value === "bezier" && this.takesUpSpace() : !1;
});
Ke.bypass = Ke.css = Ke.style;
Ke.renderedCss = Ke.renderedStyle;
Ke.removeBypass = Ke.removeCss = Ke.removeStyle;
Ke.pstyle = Ke.parsedStyle;
var Ht = {};
function ms(t) {
  return function() {
    var e = arguments, r = [];
    if (e.length === 2) {
      var a = e[0], n = e[1];
      this.on(t.event, a, n);
    } else if (e.length === 1 && Be(e[0])) {
      var i = e[0];
      this.on(t.event, i);
    } else if (e.length === 0 || e.length === 1 && Me(e[0])) {
      for (var s = e.length === 1 ? e[0] : null, o = 0; o < this.length; o++) {
        var l = this[o], u = !t.ableField || l._private[t.ableField], f = l._private[t.field] != t.value;
        if (t.overrideAble) {
          var h = t.overrideAble(l);
          if (h !== void 0 && (u = h, !h))
            return this;
        }
        u && (l._private[t.field] = t.value, f && r.push(l));
      }
      var c = this.spawn(r);
      c.updateStyle(), c.emit(t.event), s && c.emit(s);
    }
    return this;
  };
}
function Pr(t) {
  Ht[t.field] = function() {
    var e = this[0];
    if (e) {
      if (t.overrideField) {
        var r = t.overrideField(e);
        if (r !== void 0)
          return r;
      }
      return e._private[t.field];
    }
  }, Ht[t.on] = ms({
    event: t.on,
    field: t.field,
    ableField: t.ableField,
    overrideAble: t.overrideAble,
    value: !0
  }), Ht[t.off] = ms({
    event: t.off,
    field: t.field,
    ableField: t.ableField,
    overrideAble: t.overrideAble,
    value: !1
  });
}
Pr({
  field: "locked",
  overrideField: function(e) {
    return e.cy().autolock() ? !0 : void 0;
  },
  on: "lock",
  off: "unlock"
});
Pr({
  field: "grabbable",
  overrideField: function(e) {
    return e.cy().autoungrabify() || e.pannable() ? !1 : void 0;
  },
  on: "grabify",
  off: "ungrabify"
});
Pr({
  field: "selected",
  ableField: "selectable",
  overrideAble: function(e) {
    return e.cy().autounselectify() ? !1 : void 0;
  },
  on: "select",
  off: "unselect"
});
Pr({
  field: "selectable",
  overrideField: function(e) {
    return e.cy().autounselectify() ? !1 : void 0;
  },
  on: "selectify",
  off: "unselectify"
});
Ht.deselect = Ht.unselect;
Ht.grabbed = function() {
  var t = this[0];
  if (t)
    return t._private.grabbed;
};
Pr({
  field: "active",
  on: "activate",
  off: "unactivate"
});
Pr({
  field: "pannable",
  on: "panify",
  off: "unpanify"
});
Ht.inactive = function() {
  var t = this[0];
  if (t)
    return !t._private.active;
};
var tt = {}, bs = function(e) {
  return function(a) {
    for (var n = this, i = [], s = 0; s < n.length; s++) {
      var o = n[s];
      if (o.isNode()) {
        for (var l = !1, u = o.connectedEdges(), f = 0; f < u.length; f++) {
          var h = u[f], c = h.source(), v = h.target();
          if (e.noIncomingEdges && v === o && c !== o || e.noOutgoingEdges && c === o && v !== o) {
            l = !0;
            break;
          }
        }
        l || i.push(o);
      }
    }
    return this.spawn(i, !0).filter(a);
  };
}, Es = function(e) {
  return function(r) {
    for (var a = this, n = [], i = 0; i < a.length; i++) {
      var s = a[i];
      if (s.isNode())
        for (var o = s.connectedEdges(), l = 0; l < o.length; l++) {
          var u = o[l], f = u.source(), h = u.target();
          e.outgoing && f === s ? (n.push(u), n.push(h)) : e.incoming && h === s && (n.push(u), n.push(f));
        }
    }
    return this.spawn(n, !0).filter(r);
  };
}, ws = function(e) {
  return function(r) {
    for (var a = this, n = [], i = {}; ; ) {
      var s = e.outgoing ? a.outgoers() : a.incomers();
      if (s.length === 0)
        break;
      for (var o = !1, l = 0; l < s.length; l++) {
        var u = s[l], f = u.id();
        i[f] || (i[f] = !0, n.push(u), o = !0);
      }
      if (!o)
        break;
      a = s;
    }
    return this.spawn(n, !0).filter(r);
  };
};
tt.clearTraversalCache = function() {
  for (var t = 0; t < this.length; t++)
    this[t]._private.traversalCache = null;
};
de(tt, {
  // get the root nodes in the DAG
  roots: bs({
    noIncomingEdges: !0
  }),
  // get the leaf nodes in the DAG
  leaves: bs({
    noOutgoingEdges: !0
  }),
  // normally called children in graph theory
  // these nodes =edges=> outgoing nodes
  outgoers: gt(Es({
    outgoing: !0
  }), "outgoers"),
  // aka DAG descendants
  successors: ws({
    outgoing: !0
  }),
  // normally called parents in graph theory
  // these nodes <=edges= incoming nodes
  incomers: gt(Es({
    incoming: !0
  }), "incomers"),
  // aka DAG ancestors
  predecessors: ws({
    incoming: !0
  })
});
de(tt, {
  neighborhood: gt(function(t) {
    for (var e = [], r = this.nodes(), a = 0; a < r.length; a++)
      for (var n = r[a], i = n.connectedEdges(), s = 0; s < i.length; s++) {
        var o = i[s], l = o.source(), u = o.target(), f = n === l ? u : l;
        f.length > 0 && e.push(f[0]), e.push(o[0]);
      }
    return this.spawn(e, !0).filter(t);
  }, "neighborhood"),
  closedNeighborhood: function(e) {
    return this.neighborhood().add(this).filter(e);
  },
  openNeighborhood: function(e) {
    return this.neighborhood(e);
  }
});
tt.neighbourhood = tt.neighborhood;
tt.closedNeighbourhood = tt.closedNeighborhood;
tt.openNeighbourhood = tt.openNeighborhood;
de(tt, {
  source: gt(function(e) {
    var r = this[0], a;
    return r && (a = r._private.source || r.cy().collection()), a && e ? a.filter(e) : a;
  }, "source"),
  target: gt(function(e) {
    var r = this[0], a;
    return r && (a = r._private.target || r.cy().collection()), a && e ? a.filter(e) : a;
  }, "target"),
  sources: xs({
    attr: "source"
  }),
  targets: xs({
    attr: "target"
  })
});
function xs(t) {
  return function(r) {
    for (var a = [], n = 0; n < this.length; n++) {
      var i = this[n], s = i._private[t.attr];
      s && a.push(s);
    }
    return this.spawn(a, !0).filter(r);
  };
}
de(tt, {
  edgesWith: gt(Ts(), "edgesWith"),
  edgesTo: gt(Ts({
    thisIsSrc: !0
  }), "edgesTo")
});
function Ts(t) {
  return function(r) {
    var a = [], n = this._private.cy, i = t || {};
    ve(r) && (r = n.$(r));
    for (var s = 0; s < r.length; s++)
      for (var o = r[s]._private.edges, l = 0; l < o.length; l++) {
        var u = o[l], f = u._private.data, h = this.hasElementWithId(f.source) && r.hasElementWithId(f.target), c = r.hasElementWithId(f.source) && this.hasElementWithId(f.target), v = h || c;
        v && ((i.thisIsSrc || i.thisIsTgt) && (i.thisIsSrc && !h || i.thisIsTgt && !c) || a.push(u));
      }
    return this.spawn(a, !0);
  };
}
de(tt, {
  connectedEdges: gt(function(t) {
    for (var e = [], r = this, a = 0; a < r.length; a++) {
      var n = r[a];
      if (n.isNode())
        for (var i = n._private.edges, s = 0; s < i.length; s++) {
          var o = i[s];
          e.push(o);
        }
    }
    return this.spawn(e, !0).filter(t);
  }, "connectedEdges"),
  connectedNodes: gt(function(t) {
    for (var e = [], r = this, a = 0; a < r.length; a++) {
      var n = r[a];
      n.isEdge() && (e.push(n.source()[0]), e.push(n.target()[0]));
    }
    return this.spawn(e, !0).filter(t);
  }, "connectedNodes"),
  parallelEdges: gt(Cs(), "parallelEdges"),
  codirectedEdges: gt(Cs({
    codirected: !0
  }), "codirectedEdges")
});
function Cs(t) {
  var e = {
    codirected: !1
  };
  return t = de({}, e, t), function(a) {
    for (var n = [], i = this.edges(), s = t, o = 0; o < i.length; o++)
      for (var l = i[o], u = l._private, f = u.source, h = f._private.data.id, c = u.data.target, v = f._private.edges, d = 0; d < v.length; d++) {
        var g = v[d], p = g._private.data, y = p.target, E = p.source, m = y === c && E === h, T = h === y && c === E;
        (s.codirected && m || !s.codirected && (m || T)) && n.push(g);
      }
    return this.spawn(n, !0).filter(a);
  };
}
de(tt, {
  components: function(e) {
    var r = this, a = r.cy(), n = a.collection(), i = e == null ? r.nodes() : e.nodes(), s = [];
    e != null && i.empty() && (i = e.sources());
    var o = function(f, h) {
      n.merge(f), i.unmerge(f), h.merge(f);
    };
    if (i.empty())
      return r.spawn();
    var l = function() {
      var f = a.collection();
      s.push(f);
      var h = i[0];
      o(h, f), r.bfs({
        directed: !1,
        roots: h,
        visit: function(v) {
          return o(v, f);
        }
      }), f.forEach(function(c) {
        c.connectedEdges().forEach(function(v) {
          r.has(v) && f.has(v.source()) && f.has(v.target()) && f.merge(v);
        });
      });
    };
    do
      l();
    while (i.length > 0);
    return s;
  },
  component: function() {
    var e = this[0];
    return e.cy().mutableElements().components(e)[0];
  }
});
tt.componentsOf = tt.components;
var Ze = function(e, r) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (e === void 0) {
    Ge("A collection must have a reference to the core");
    return;
  }
  var i = new Lt(), s = !1;
  if (!r)
    r = [];
  else if (r.length > 0 && De(r[0]) && !ca(r[0])) {
    s = !0;
    for (var o = [], l = new Mr(), u = 0, f = r.length; u < f; u++) {
      var h = r[u];
      h.data == null && (h.data = {});
      var c = h.data;
      if (c.id == null)
        c.id = mo();
      else if (e.hasElementWithId(c.id) || l.has(c.id))
        continue;
      var v = new un(e, h, !1);
      o.push(v), l.add(c.id);
    }
    r = o;
  }
  this.length = 0;
  for (var d = 0, g = r.length; d < g; d++) {
    var p = r[d][0];
    if (p != null) {
      var y = p._private.data.id;
      (!a || !i.has(y)) && (a && i.set(y, {
        index: this.length,
        ele: p
      }), this[this.length] = p, this.length++);
    }
  }
  this._private = {
    eles: this,
    cy: e,
    get map() {
      return this.lazyMap == null && this.rebuildMap(), this.lazyMap;
    },
    set map(E) {
      this.lazyMap = E;
    },
    rebuildMap: function() {
      for (var m = this.lazyMap = new Lt(), T = this.eles, C = 0; C < T.length; C++) {
        var S = T[C];
        m.set(S.id(), {
          index: C,
          ele: S
        });
      }
    }
  }, a && (this._private.map = i), s && !n && this.restore();
}, ke = un.prototype = Ze.prototype = Object.create(Array.prototype);
ke.instanceString = function() {
  return "collection";
};
ke.spawn = function(t, e) {
  return new Ze(this.cy(), t, e);
};
ke.spawnSelf = function() {
  return this.spawn(this);
};
ke.cy = function() {
  return this._private.cy;
};
ke.renderer = function() {
  return this._private.cy.renderer();
};
ke.element = function() {
  return this[0];
};
ke.collection = function() {
  return io(this) ? this : new Ze(this._private.cy, [this]);
};
ke.unique = function() {
  return new Ze(this._private.cy, this, !0);
};
ke.hasElementWithId = function(t) {
  return t = "" + t, this._private.map.has(t);
};
ke.getElementById = function(t) {
  t = "" + t;
  var e = this._private.cy, r = this._private.map.get(t);
  return r ? r.ele : new Ze(e);
};
ke.$id = ke.getElementById;
ke.poolIndex = function() {
  var t = this._private.cy, e = t._private.elements, r = this[0]._private.data.id;
  return e._private.map.get(r).index;
};
ke.indexOf = function(t) {
  var e = t[0]._private.data.id;
  return this._private.map.get(e).index;
};
ke.indexOfId = function(t) {
  return t = "" + t, this._private.map.get(t).index;
};
ke.json = function(t) {
  var e = this.element(), r = this.cy();
  if (e == null && t)
    return this;
  if (e != null) {
    var a = e._private;
    if (De(t)) {
      if (r.startBatch(), t.data) {
        e.data(t.data);
        var n = a.data;
        if (e.isEdge()) {
          var i = !1, s = {}, o = t.data.source, l = t.data.target;
          o != null && o != n.source && (s.source = "" + o, i = !0), l != null && l != n.target && (s.target = "" + l, i = !0), i && (e = e.move(s));
        } else {
          var u = "parent" in t.data, f = t.data.parent;
          u && (f != null || n.parent != null) && f != n.parent && (f === void 0 && (f = null), f != null && (f = "" + f), e = e.move({
            parent: f
          }));
        }
      }
      t.position && e.position(t.position);
      var h = function(g, p, y) {
        var E = t[g];
        E != null && E !== a[g] && (E ? e[p]() : e[y]());
      };
      return h("removed", "remove", "restore"), h("selected", "select", "unselect"), h("selectable", "selectify", "unselectify"), h("locked", "lock", "unlock"), h("grabbable", "grabify", "ungrabify"), h("pannable", "panify", "unpanify"), t.classes != null && e.classes(t.classes), r.endBatch(), this;
    } else if (t === void 0) {
      var c = {
        data: St(a.data),
        position: St(a.position),
        group: a.group,
        removed: a.removed,
        selected: a.selected,
        selectable: a.selectable,
        locked: a.locked,
        grabbable: a.grabbable,
        pannable: a.pannable,
        classes: null
      };
      c.classes = "";
      var v = 0;
      return a.classes.forEach(function(d) {
        return c.classes += v++ === 0 ? d : " " + d;
      }), c;
    }
  }
};
ke.jsons = function() {
  for (var t = [], e = 0; e < this.length; e++) {
    var r = this[e], a = r.json();
    t.push(a);
  }
  return t;
};
ke.clone = function() {
  for (var t = this.cy(), e = [], r = 0; r < this.length; r++) {
    var a = this[r], n = a.json(), i = new un(t, n, !1);
    e.push(i);
  }
  return new Ze(t, e);
};
ke.copy = ke.clone;
ke.restore = function() {
  for (var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, r = this, a = r.cy(), n = a._private, i = [], s = [], o, l = 0, u = r.length; l < u; l++) {
    var f = r[l];
    e && !f.removed() || (f.isNode() ? i.push(f) : s.push(f));
  }
  o = i.concat(s);
  var h, c = function() {
    o.splice(h, 1), h--;
  };
  for (h = 0; h < o.length; h++) {
    var v = o[h], d = v._private, g = d.data;
    if (v.clearTraversalCache(), !(!e && !d.removed)) {
      if (g.id === void 0)
        g.id = mo();
      else if (ae(g.id))
        g.id = "" + g.id;
      else if (Yt(g.id) || !ve(g.id)) {
        Ge("Can not create element with invalid string ID `" + g.id + "`"), c();
        continue;
      } else if (a.hasElementWithId(g.id)) {
        Ge("Can not create second element with ID `" + g.id + "`"), c();
        continue;
      }
    }
    var p = g.id;
    if (v.isNode()) {
      var y = d.position;
      y.x == null && (y.x = 0), y.y == null && (y.y = 0);
    }
    if (v.isEdge()) {
      for (var E = v, m = ["source", "target"], T = m.length, C = !1, S = 0; S < T; S++) {
        var b = m[S], x = g[b];
        ae(x) && (x = g[b] = "" + g[b]), x == null || x === "" ? (Ge("Can not create edge `" + p + "` with unspecified " + b), C = !0) : a.hasElementWithId(x) || (Ge("Can not create edge `" + p + "` with nonexistant " + b + " `" + x + "`"), C = !0);
      }
      if (C) {
        c();
        continue;
      }
      var w = a.getElementById(g.source), D = a.getElementById(g.target);
      w.same(D) ? w._private.edges.push(E) : (w._private.edges.push(E), D._private.edges.push(E)), E._private.source = w, E._private.target = D;
    }
    d.map = new Lt(), d.map.set(p, {
      ele: v,
      index: 0
    }), d.removed = !1, e && a.addToPool(v);
  }
  for (var A = 0; A < i.length; A++) {
    var L = i[A], I = L._private.data;
    ae(I.parent) && (I.parent = "" + I.parent);
    var O = I.parent, P = O != null;
    if (P || L._private.parent) {
      var R = L._private.parent ? a.collection().merge(L._private.parent) : a.getElementById(O);
      if (R.empty())
        I.parent = void 0;
      else if (R[0].removed())
        Ne("Node added with missing parent, reference to parent removed"), I.parent = void 0, L._private.parent = null;
      else {
        for (var M = !1, k = R; !k.empty(); ) {
          if (L.same(k)) {
            M = !0, I.parent = void 0;
            break;
          }
          k = k.parent();
        }
        M || (R[0]._private.children.push(L), L._private.parent = R[0], n.hasCompoundNodes = !0);
      }
    }
  }
  if (o.length > 0) {
    for (var B = o.length === r.length ? r : new Ze(a, o), G = 0; G < B.length; G++) {
      var F = B[G];
      F.isNode() || (F.parallelEdges().clearTraversalCache(), F.source().clearTraversalCache(), F.target().clearTraversalCache());
    }
    var $;
    n.hasCompoundNodes ? $ = a.collection().merge(B).merge(B.connectedNodes()).merge(B.parent()) : $ = B, $.dirtyCompoundBoundsCache().dirtyBoundingBoxCache().updateStyle(t), t ? B.emitAndNotify("add") : e && B.emit("add");
  }
  return r;
};
ke.removed = function() {
  var t = this[0];
  return t && t._private.removed;
};
ke.inside = function() {
  var t = this[0];
  return t && !t._private.removed;
};
ke.remove = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, r = this, a = [], n = {}, i = r._private.cy;
  function s(O) {
    for (var P = O._private.edges, R = 0; R < P.length; R++)
      l(P[R]);
  }
  function o(O) {
    for (var P = O._private.children, R = 0; R < P.length; R++)
      l(P[R]);
  }
  function l(O) {
    var P = n[O.id()];
    e && O.removed() || P || (n[O.id()] = !0, O.isNode() ? (a.push(O), s(O), o(O)) : a.unshift(O));
  }
  for (var u = 0, f = r.length; u < f; u++) {
    var h = r[u];
    l(h);
  }
  function c(O, P) {
    var R = O._private.edges;
    Xt(R, P), O.clearTraversalCache();
  }
  function v(O) {
    O.clearTraversalCache();
  }
  var d = [];
  d.ids = {};
  function g(O, P) {
    P = P[0], O = O[0];
    var R = O._private.children, M = O.id();
    Xt(R, P), P._private.parent = null, d.ids[M] || (d.ids[M] = !0, d.push(O));
  }
  r.dirtyCompoundBoundsCache(), e && i.removeFromPool(a);
  for (var p = 0; p < a.length; p++) {
    var y = a[p];
    if (y.isEdge()) {
      var E = y.source()[0], m = y.target()[0];
      c(E, y), c(m, y);
      for (var T = y.parallelEdges(), C = 0; C < T.length; C++) {
        var S = T[C];
        v(S), S.isBundledBezier() && S.dirtyBoundingBoxCache();
      }
    } else {
      var b = y.parent();
      b.length !== 0 && g(b, y);
    }
    e && (y._private.removed = !0);
  }
  var x = i._private.elements;
  i._private.hasCompoundNodes = !1;
  for (var w = 0; w < x.length; w++) {
    var D = x[w];
    if (D.isParent()) {
      i._private.hasCompoundNodes = !0;
      break;
    }
  }
  var A = new Ze(this.cy(), a);
  A.size() > 0 && (t ? A.emitAndNotify("remove") : e && A.emit("remove"));
  for (var L = 0; L < d.length; L++) {
    var I = d[L];
    (!e || !I.removed()) && I.updateStyle();
  }
  return A;
};
ke.move = function(t) {
  var e = this._private.cy, r = this, a = !1, n = !1, i = function(d) {
    return d == null ? d : "" + d;
  };
  if (t.source !== void 0 || t.target !== void 0) {
    var s = i(t.source), o = i(t.target), l = s != null && e.hasElementWithId(s), u = o != null && e.hasElementWithId(o);
    (l || u) && (e.batch(function() {
      r.remove(a, n), r.emitAndNotify("moveout");
      for (var v = 0; v < r.length; v++) {
        var d = r[v], g = d._private.data;
        d.isEdge() && (l && (g.source = s), u && (g.target = o));
      }
      r.restore(a, n);
    }), r.emitAndNotify("move"));
  } else if (t.parent !== void 0) {
    var f = i(t.parent), h = f === null || e.hasElementWithId(f);
    if (h) {
      var c = f === null ? void 0 : f;
      e.batch(function() {
        var v = r.remove(a, n);
        v.emitAndNotify("moveout");
        for (var d = 0; d < r.length; d++) {
          var g = r[d], p = g._private.data;
          g.isNode() && (p.parent = c);
        }
        v.restore(a, n);
      }), r.emitAndNotify("move");
    }
  }
  return this;
};
[Io, Qg, Ba, Ut, Ar, cp, vn, Op, Ko, Zo, kp, Za, Fa, Ke, Ht, tt].forEach(function(t) {
  de(ke, t);
});
var Vp = {
  add: function(e) {
    var r, a = this;
    if (ht(e)) {
      var n = e;
      if (n._private.cy === a)
        r = n.restore();
      else {
        for (var i = [], s = 0; s < n.length; s++) {
          var o = n[s];
          i.push(o.json());
        }
        r = new Ze(a, i);
      }
    } else if (Me(e)) {
      var l = e;
      r = new Ze(a, l);
    } else if (De(e) && (Me(e.nodes) || Me(e.edges))) {
      for (var u = e, f = [], h = ["nodes", "edges"], c = 0, v = h.length; c < v; c++) {
        var d = h[c], g = u[d];
        if (Me(g))
          for (var p = 0, y = g.length; p < y; p++) {
            var E = de({
              group: d
            }, g[p]);
            f.push(E);
          }
      }
      r = new Ze(a, f);
    } else {
      var m = e;
      r = new un(a, m).collection();
    }
    return r;
  },
  remove: function(e) {
    if (!ht(e)) {
      if (ve(e)) {
        var r = e;
        e = this.$(r);
      }
    }
    return e.remove();
  }
};
/*! Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */
function _p(t, e, r, a) {
  var n = 4, i = 1e-3, s = 1e-7, o = 10, l = 11, u = 1 / (l - 1), f = typeof Float32Array != "undefined";
  if (arguments.length !== 4)
    return !1;
  for (var h = 0; h < 4; ++h)
    if (typeof arguments[h] != "number" || isNaN(arguments[h]) || !isFinite(arguments[h]))
      return !1;
  t = Math.min(t, 1), r = Math.min(r, 1), t = Math.max(t, 0), r = Math.max(r, 0);
  var c = f ? new Float32Array(l) : new Array(l);
  function v(D, A) {
    return 1 - 3 * A + 3 * D;
  }
  function d(D, A) {
    return 3 * A - 6 * D;
  }
  function g(D) {
    return 3 * D;
  }
  function p(D, A, L) {
    return ((v(A, L) * D + d(A, L)) * D + g(A)) * D;
  }
  function y(D, A, L) {
    return 3 * v(A, L) * D * D + 2 * d(A, L) * D + g(A);
  }
  function E(D, A) {
    for (var L = 0; L < n; ++L) {
      var I = y(A, t, r);
      if (I === 0)
        return A;
      var O = p(A, t, r) - D;
      A -= O / I;
    }
    return A;
  }
  function m() {
    for (var D = 0; D < l; ++D)
      c[D] = p(D * u, t, r);
  }
  function T(D, A, L) {
    var I, O, P = 0;
    do
      O = A + (L - A) / 2, I = p(O, t, r) - D, I > 0 ? L = O : A = O;
    while (Math.abs(I) > s && ++P < o);
    return O;
  }
  function C(D) {
    for (var A = 0, L = 1, I = l - 1; L !== I && c[L] <= D; ++L)
      A += u;
    --L;
    var O = (D - c[L]) / (c[L + 1] - c[L]), P = A + O * u, R = y(P, t, r);
    return R >= i ? E(D, P) : R === 0 ? P : T(D, A, A + u);
  }
  var S = !1;
  function b() {
    S = !0, (t !== e || r !== a) && m();
  }
  var x = function(A) {
    return S || b(), t === e && r === a ? A : A === 0 ? 0 : A === 1 ? 1 : p(C(A), e, a);
  };
  x.getControlPoints = function() {
    return [{
      x: t,
      y: e
    }, {
      x: r,
      y: a
    }];
  };
  var w = "generateBezier(" + [t, e, r, a] + ")";
  return x.toString = function() {
    return w;
  }, x;
}
/*! Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
var Up = function() {
  function t(a) {
    return -a.tension * a.x - a.friction * a.v;
  }
  function e(a, n, i) {
    var s = {
      x: a.x + i.dx * n,
      v: a.v + i.dv * n,
      tension: a.tension,
      friction: a.friction
    };
    return {
      dx: s.v,
      dv: t(s)
    };
  }
  function r(a, n) {
    var i = {
      dx: a.v,
      dv: t(a)
    }, s = e(a, n * 0.5, i), o = e(a, n * 0.5, s), l = e(a, n, o), u = 1 / 6 * (i.dx + 2 * (s.dx + o.dx) + l.dx), f = 1 / 6 * (i.dv + 2 * (s.dv + o.dv) + l.dv);
    return a.x = a.x + u * n, a.v = a.v + f * n, a;
  }
  return function a(n, i, s) {
    var o = {
      x: -1,
      v: 0,
      tension: null,
      friction: null
    }, l = [0], u = 0, f = 1 / 1e4, h = 16 / 1e3, c, v, d;
    for (n = parseFloat(n) || 500, i = parseFloat(i) || 20, s = s || null, o.tension = n, o.friction = i, c = s !== null, c ? (u = a(n, i), v = u / s * h) : v = h; d = r(d || o, v), l.push(1 + d.x), u += 16, Math.abs(d.x) > f && Math.abs(d.v) > f; )
      ;
    return c ? function(g) {
      return l[g * (l.length - 1) | 0];
    } : u;
  };
}(), Re = function(e, r, a, n) {
  var i = _p(e, r, a, n);
  return function(s, o, l) {
    return s + (o - s) * i(l);
  };
}, Ga = {
  linear: function(e, r, a) {
    return e + (r - e) * a;
  },
  // default easings
  ease: Re(0.25, 0.1, 0.25, 1),
  "ease-in": Re(0.42, 0, 1, 1),
  "ease-out": Re(0, 0, 0.58, 1),
  "ease-in-out": Re(0.42, 0, 0.58, 1),
  // sine
  "ease-in-sine": Re(0.47, 0, 0.745, 0.715),
  "ease-out-sine": Re(0.39, 0.575, 0.565, 1),
  "ease-in-out-sine": Re(0.445, 0.05, 0.55, 0.95),
  // quad
  "ease-in-quad": Re(0.55, 0.085, 0.68, 0.53),
  "ease-out-quad": Re(0.25, 0.46, 0.45, 0.94),
  "ease-in-out-quad": Re(0.455, 0.03, 0.515, 0.955),
  // cubic
  "ease-in-cubic": Re(0.55, 0.055, 0.675, 0.19),
  "ease-out-cubic": Re(0.215, 0.61, 0.355, 1),
  "ease-in-out-cubic": Re(0.645, 0.045, 0.355, 1),
  // quart
  "ease-in-quart": Re(0.895, 0.03, 0.685, 0.22),
  "ease-out-quart": Re(0.165, 0.84, 0.44, 1),
  "ease-in-out-quart": Re(0.77, 0, 0.175, 1),
  // quint
  "ease-in-quint": Re(0.755, 0.05, 0.855, 0.06),
  "ease-out-quint": Re(0.23, 1, 0.32, 1),
  "ease-in-out-quint": Re(0.86, 0, 0.07, 1),
  // expo
  "ease-in-expo": Re(0.95, 0.05, 0.795, 0.035),
  "ease-out-expo": Re(0.19, 1, 0.22, 1),
  "ease-in-out-expo": Re(1, 0, 0, 1),
  // circ
  "ease-in-circ": Re(0.6, 0.04, 0.98, 0.335),
  "ease-out-circ": Re(0.075, 0.82, 0.165, 1),
  "ease-in-out-circ": Re(0.785, 0.135, 0.15, 0.86),
  // user param easings...
  spring: function(e, r, a) {
    if (a === 0)
      return Ga.linear;
    var n = Up(e, r, a);
    return function(i, s, o) {
      return i + (s - i) * n(o);
    };
  },
  "cubic-bezier": Re
};
function Ds(t, e, r, a, n) {
  if (a === 1 || e === r)
    return r;
  var i = n(e, r, a);
  return t == null || ((t.roundValue || t.color) && (i = Math.round(i)), t.min !== void 0 && (i = Math.max(i, t.min)), t.max !== void 0 && (i = Math.min(i, t.max))), i;
}
function Ss(t, e) {
  return t.pfValue != null || t.value != null ? t.pfValue != null && (e == null || e.type.units !== "%") ? t.pfValue : t.value : t;
}
function pr(t, e, r, a, n) {
  var i = n != null ? n.type : null;
  r < 0 ? r = 0 : r > 1 && (r = 1);
  var s = Ss(t, n), o = Ss(e, n);
  if (ae(s) && ae(o))
    return Ds(i, s, o, r, a);
  if (Me(s) && Me(o)) {
    for (var l = [], u = 0; u < o.length; u++) {
      var f = s[u], h = o[u];
      if (f != null && h != null) {
        var c = Ds(i, f, h, r, a);
        l.push(c);
      } else
        l.push(h);
    }
    return l;
  }
}
function Hp(t, e, r, a) {
  var n = !a, i = t._private, s = e._private, o = s.easing, l = s.startTime, u = a ? t : t.cy(), f = u.style();
  if (!s.easingImpl)
    if (o == null)
      s.easingImpl = Ga.linear;
    else {
      var h;
      if (ve(o)) {
        var c = f.parse("transition-timing-function", o);
        h = c.value;
      } else
        h = o;
      var v, d;
      ve(h) ? (v = h, d = []) : (v = h[1], d = h.slice(2).map(function(B) {
        return +B;
      })), d.length > 0 ? (v === "spring" && d.push(s.duration), s.easingImpl = Ga[v].apply(null, d)) : s.easingImpl = Ga[v];
    }
  var g = s.easingImpl, p;
  if (s.duration === 0 ? p = 1 : p = (r - l) / s.duration, s.applying && (p = s.progress), p < 0 ? p = 0 : p > 1 && (p = 1), s.delay == null) {
    var y = s.startPosition, E = s.position;
    if (E && n && !t.locked()) {
      var m = {};
      Yr(y.x, E.x) && (m.x = pr(y.x, E.x, p, g)), Yr(y.y, E.y) && (m.y = pr(y.y, E.y, p, g)), t.position(m);
    }
    var T = s.startPan, C = s.pan, S = i.pan, b = C != null && a;
    b && (Yr(T.x, C.x) && (S.x = pr(T.x, C.x, p, g)), Yr(T.y, C.y) && (S.y = pr(T.y, C.y, p, g)), t.emit("pan"));
    var x = s.startZoom, w = s.zoom, D = w != null && a;
    D && (Yr(x, w) && (i.zoom = ra(i.minZoom, pr(x, w, p, g), i.maxZoom)), t.emit("zoom")), (b || D) && t.emit("viewport");
    var A = s.style;
    if (A && A.length > 0 && n) {
      for (var L = 0; L < A.length; L++) {
        var I = A[L], O = I.name, P = I, R = s.startStyle[O], M = f.properties[R.name], k = pr(R, P, p, g, M);
        f.overrideBypass(t, O, k);
      }
      t.emit("style");
    }
  }
  return s.progress = p, p;
}
function Yr(t, e) {
  return t == null || e == null ? !1 : ae(t) && ae(e) ? !0 : !!(t && e);
}
function Yp(t, e, r, a) {
  var n = e._private;
  n.started = !0, n.startTime = r - n.progress * n.duration;
}
function Ls(t, e) {
  var r = e._private.aniEles, a = [];
  function n(f, h) {
    var c = f._private, v = c.animation.current, d = c.animation.queue, g = !1;
    if (v.length === 0) {
      var p = d.shift();
      p && v.push(p);
    }
    for (var y = function(S) {
      for (var b = S.length - 1; b >= 0; b--) {
        var x = S[b];
        x();
      }
      S.splice(0, S.length);
    }, E = v.length - 1; E >= 0; E--) {
      var m = v[E], T = m._private;
      if (T.stopped) {
        v.splice(E, 1), T.hooked = !1, T.playing = !1, T.started = !1, y(T.frames);
        continue;
      }
      !T.playing && !T.applying || (T.playing && T.applying && (T.applying = !1), T.started || Yp(f, m, t), Hp(f, m, t, h), T.applying && (T.applying = !1), y(T.frames), T.step != null && T.step(t), m.completed() && (v.splice(E, 1), T.hooked = !1, T.playing = !1, T.started = !1, y(T.completes)), g = !0);
    }
    return !h && v.length === 0 && d.length === 0 && a.push(f), g;
  }
  for (var i = !1, s = 0; s < r.length; s++) {
    var o = r[s], l = n(o);
    i = i || l;
  }
  var u = n(e, !0);
  (i || u) && (r.length > 0 ? e.notify("draw", r) : e.notify("draw")), r.unmerge(a), e.emit("step");
}
var Xp = {
  // pull in animation functions
  animate: Oe.animate(),
  animation: Oe.animation(),
  animated: Oe.animated(),
  clearQueue: Oe.clearQueue(),
  delay: Oe.delay(),
  delayAnimation: Oe.delayAnimation(),
  stop: Oe.stop(),
  addToAnimationPool: function(e) {
    var r = this;
    r.styleEnabled() && r._private.aniEles.merge(e);
  },
  stopAnimationLoop: function() {
    this._private.animationsRunning = !1;
  },
  startAnimationLoop: function() {
    var e = this;
    if (e._private.animationsRunning = !0, !e.styleEnabled())
      return;
    function r() {
      e._private.animationsRunning && Ya(function(i) {
        Ls(i, e), r();
      });
    }
    var a = e.renderer();
    a && a.beforeRender ? a.beforeRender(function(i, s) {
      Ls(s, e);
    }, a.beforeRenderPriorities.animations) : r();
  }
}, Wp = {
  qualifierCompare: function(e, r) {
    return e == null || r == null ? e == null && r == null : e.sameText(r);
  },
  eventMatches: function(e, r, a) {
    var n = r.qualifier;
    return n != null ? e !== a.target && ca(a.target) && n.matches(a.target) : !0;
  },
  addEventFields: function(e, r) {
    r.cy = e, r.target = e;
  },
  callbackContext: function(e, r, a) {
    return r.qualifier != null ? a.target : e;
  }
}, Ma = function(e) {
  return ve(e) ? new Wt(e) : e;
}, jo = {
  createEmitter: function() {
    var e = this._private;
    return e.emitter || (e.emitter = new cn(Wp, this)), this;
  },
  emitter: function() {
    return this._private.emitter;
  },
  on: function(e, r, a) {
    return this.emitter().on(e, Ma(r), a), this;
  },
  removeListener: function(e, r, a) {
    return this.emitter().removeListener(e, Ma(r), a), this;
  },
  removeAllListeners: function() {
    return this.emitter().removeAllListeners(), this;
  },
  one: function(e, r, a) {
    return this.emitter().one(e, Ma(r), a), this;
  },
  once: function(e, r, a) {
    return this.emitter().one(e, Ma(r), a), this;
  },
  emit: function(e, r) {
    return this.emitter().emit(e, r), this;
  },
  emitAndNotify: function(e, r) {
    return this.emit(e), this.notify(e, r), this;
  }
};
Oe.eventAliasesOn(jo);
var Hn = {
  png: function(e) {
    var r = this._private.renderer;
    return e = e || {}, r.png(e);
  },
  jpg: function(e) {
    var r = this._private.renderer;
    return e = e || {}, e.bg = e.bg || "#fff", r.jpg(e);
  }
};
Hn.jpeg = Hn.jpg;
var za = {
  layout: function(e) {
    var r = this;
    if (e == null) {
      Ge("Layout options must be specified to make a layout");
      return;
    }
    if (e.name == null) {
      Ge("A `name` must be specified to make a layout");
      return;
    }
    var a = e.name, n = r.extension("layout", a);
    if (n == null) {
      Ge("No such layout `" + a + "` found.  Did you forget to import it and `cytoscape.use()` it?");
      return;
    }
    var i;
    ve(e.eles) ? i = r.$(e.eles) : i = e.eles != null ? e.eles : r.$();
    var s = new n(de({}, e, {
      cy: r,
      eles: i
    }));
    return s;
  }
};
za.createLayout = za.makeLayout = za.layout;
var qp = {
  notify: function(e, r) {
    var a = this._private;
    if (this.batching()) {
      a.batchNotifications = a.batchNotifications || {};
      var n = a.batchNotifications[e] = a.batchNotifications[e] || this.collection();
      r != null && n.merge(r);
      return;
    }
    if (a.notificationsEnabled) {
      var i = this.renderer();
      this.destroyed() || !i || i.notify(e, r);
    }
  },
  notifications: function(e) {
    var r = this._private;
    return e === void 0 ? r.notificationsEnabled : (r.notificationsEnabled = !!e, this);
  },
  noNotifications: function(e) {
    this.notifications(!1), e(), this.notifications(!0);
  },
  batching: function() {
    return this._private.batchCount > 0;
  },
  startBatch: function() {
    var e = this._private;
    return e.batchCount == null && (e.batchCount = 0), e.batchCount === 0 && (e.batchStyleEles = this.collection(), e.batchNotifications = {}), e.batchCount++, this;
  },
  endBatch: function() {
    var e = this._private;
    if (e.batchCount === 0)
      return this;
    if (e.batchCount--, e.batchCount === 0) {
      e.batchStyleEles.updateStyle();
      var r = this.renderer();
      Object.keys(e.batchNotifications).forEach(function(a) {
        var n = e.batchNotifications[a];
        n.empty() ? r.notify(a) : r.notify(a, n);
      });
    }
    return this;
  },
  batch: function(e) {
    return this.startBatch(), e(), this.endBatch(), this;
  },
  // for backwards compatibility
  batchData: function(e) {
    var r = this;
    return this.batch(function() {
      for (var a = Object.keys(e), n = 0; n < a.length; n++) {
        var i = a[n], s = e[i], o = r.getElementById(i);
        o.data(s);
      }
    });
  }
}, Kp = Qe({
  hideEdgesOnViewport: !1,
  textureOnViewport: !1,
  motionBlur: !1,
  motionBlurOpacity: 0.05,
  pixelRatio: void 0,
  desktopTapThreshold: 4,
  touchTapThreshold: 8,
  wheelSensitivity: 1,
  debug: !1,
  showFps: !1
}), Yn = {
  renderTo: function(e, r, a, n) {
    var i = this._private.renderer;
    return i.renderTo(e, r, a, n), this;
  },
  renderer: function() {
    return this._private.renderer;
  },
  forceRender: function() {
    return this.notify("draw"), this;
  },
  resize: function() {
    return this.invalidateSize(), this.emitAndNotify("resize"), this;
  },
  initRenderer: function(e) {
    var r = this, a = r.extension("renderer", e.name);
    if (a == null) {
      Ge("Can not initialise: No such renderer `".concat(e.name, "` found. Did you forget to import it and `cytoscape.use()` it?"));
      return;
    }
    e.wheelSensitivity !== void 0 && Ne("You have set a custom wheel sensitivity.  This will make your app zoom unnaturally when using mainstream mice.  You should change this value from the default only if you can guarantee that all your users will use the same hardware and OS configuration as your current machine.");
    var n = Kp(e);
    n.cy = r, r._private.renderer = new a(n), this.notify("init");
  },
  destroyRenderer: function() {
    var e = this;
    e.notify("destroy");
    var r = e.container();
    if (r)
      for (r._cyreg = null; r.childNodes.length > 0; )
        r.removeChild(r.childNodes[0]);
    e._private.renderer = null, e.mutableElements().forEach(function(a) {
      var n = a._private;
      n.rscratch = {}, n.rstyle = {}, n.animation.current = [], n.animation.queue = [];
    });
  },
  onRender: function(e) {
    return this.on("render", e);
  },
  offRender: function(e) {
    return this.off("render", e);
  }
};
Yn.invalidateDimensions = Yn.resize;
var $a = {
  // get a collection
  // - empty collection on no args
  // - collection of elements in the graph on selector arg
  // - guarantee a returned collection when elements or collection specified
  collection: function(e, r) {
    return ve(e) ? this.$(e) : ht(e) ? e.collection() : Me(e) ? (r || (r = {}), new Ze(this, e, r.unique, r.removed)) : new Ze(this);
  },
  nodes: function(e) {
    var r = this.$(function(a) {
      return a.isNode();
    });
    return e ? r.filter(e) : r;
  },
  edges: function(e) {
    var r = this.$(function(a) {
      return a.isEdge();
    });
    return e ? r.filter(e) : r;
  },
  // search the graph like jQuery
  $: function(e) {
    var r = this._private.elements;
    return e ? r.filter(e) : r.spawnSelf();
  },
  mutableElements: function() {
    return this._private.elements;
  }
};
$a.elements = $a.filter = $a.$;
var at = {}, Zr = "t", Zp = "f";
at.apply = function(t) {
  for (var e = this, r = e._private, a = r.cy, n = a.collection(), i = 0; i < t.length; i++) {
    var s = t[i], o = e.getContextMeta(s);
    if (!o.empty) {
      var l = e.getContextStyle(o), u = e.applyContextStyle(o, l, s);
      s._private.appliedInitStyle ? e.updateTransitions(s, u.diffProps) : s._private.appliedInitStyle = !0;
      var f = e.updateStyleHints(s);
      f && n.push(s);
    }
  }
  return n;
};
at.getPropertiesDiff = function(t, e) {
  var r = this, a = r._private.propDiffs = r._private.propDiffs || {}, n = t + "-" + e, i = a[n];
  if (i)
    return i;
  for (var s = [], o = {}, l = 0; l < r.length; l++) {
    var u = r[l], f = t[l] === Zr, h = e[l] === Zr, c = f !== h, v = u.mappedProperties.length > 0;
    if (c || h && v) {
      var d = void 0;
      c && v || c ? d = u.properties : v && (d = u.mappedProperties);
      for (var g = 0; g < d.length; g++) {
        for (var p = d[g], y = p.name, E = !1, m = l + 1; m < r.length; m++) {
          var T = r[m], C = e[m] === Zr;
          if (C && (E = T.properties[p.name] != null, E))
            break;
        }
        !o[y] && !E && (o[y] = !0, s.push(y));
      }
    }
  }
  return a[n] = s, s;
};
at.getContextMeta = function(t) {
  for (var e = this, r = "", a, n = t._private.styleCxtKey || "", i = 0; i < e.length; i++) {
    var s = e[i], o = s.selector && s.selector.matches(t);
    o ? r += Zr : r += Zp;
  }
  return a = e.getPropertiesDiff(n, r), t._private.styleCxtKey = r, {
    key: r,
    diffPropNames: a,
    empty: a.length === 0
  };
};
at.getContextStyle = function(t) {
  var e = t.key, r = this, a = this._private.contextStyles = this._private.contextStyles || {};
  if (a[e])
    return a[e];
  for (var n = {
    _private: {
      key: e
    }
  }, i = 0; i < r.length; i++) {
    var s = r[i], o = e[i] === Zr;
    if (o)
      for (var l = 0; l < s.properties.length; l++) {
        var u = s.properties[l];
        n[u.name] = u;
      }
  }
  return a[e] = n, n;
};
at.applyContextStyle = function(t, e, r) {
  for (var a = this, n = t.diffPropNames, i = {}, s = a.types, o = 0; o < n.length; o++) {
    var l = n[o], u = e[l], f = r.pstyle(l);
    if (!u)
      if (f)
        f.bypass ? u = {
          name: l,
          deleteBypassed: !0
        } : u = {
          name: l,
          delete: !0
        };
      else
        continue;
    if (f !== u) {
      if (u.mapped === s.fn && f != null && f.mapping != null && f.mapping.value === u.value) {
        var h = f.mapping, c = h.fnValue = u.value(r);
        if (c === h.prevFnValue)
          continue;
      }
      var v = i[l] = {
        prev: f
      };
      a.applyParsedProperty(r, u), v.next = r.pstyle(l), v.next && v.next.bypass && (v.next = v.next.bypassed);
    }
  }
  return {
    diffProps: i
  };
};
at.updateStyleHints = function(t) {
  var e = t._private, r = this, a = r.propertyGroupNames, n = r.propertyGroupKeys, i = function(ee, ne, ce) {
    return r.getPropertiesHash(ee, ne, ce);
  }, s = e.styleKey;
  if (t.removed())
    return !1;
  var o = e.group === "nodes", l = t._private.style;
  a = Object.keys(l);
  for (var u = 0; u < n.length; u++) {
    var f = n[u];
    e.styleKeys[f] = [br, Xr];
  }
  for (var h = function(ee, ne) {
    return e.styleKeys[ne][0] = jr(ee, e.styleKeys[ne][0]);
  }, c = function(ee, ne) {
    return e.styleKeys[ne][1] = ea(ee, e.styleKeys[ne][1]);
  }, v = function(ee, ne) {
    h(ee, ne), c(ee, ne);
  }, d = function(ee, ne) {
    for (var ce = 0; ce < ee.length; ce++) {
      var te = ee.charCodeAt(ce);
      h(te, ne), c(te, ne);
    }
  }, g = 2e9, p = function(ee) {
    return -128 < ee && ee < 128 && Math.floor(ee) !== ee ? g - (ee * 1024 | 0) : ee;
  }, y = 0; y < a.length; y++) {
    var E = a[y], m = l[E];
    if (m != null) {
      var T = this.properties[E], C = T.type, S = T.groupKey, b = void 0;
      T.hashOverride != null ? b = T.hashOverride(t, m) : m.pfValue != null && (b = m.pfValue);
      var x = T.enums == null ? m.value : null, w = b != null, D = x != null, A = w || D, L = m.units;
      if (C.number && A && !C.multiple) {
        var I = w ? b : x;
        v(p(I), S), !w && L != null && d(L, S);
      } else
        d(m.strValue, S);
    }
  }
  for (var O = [br, Xr], P = 0; P < n.length; P++) {
    var R = n[P], M = e.styleKeys[R];
    O[0] = jr(M[0], O[0]), O[1] = ea(M[1], O[1]);
  }
  e.styleKey = ud(O[0], O[1]);
  var k = e.styleKeys;
  e.labelDimsKey = Gt(k.labelDimensions);
  var B = i(t, ["label"], k.labelDimensions);
  if (e.labelKey = Gt(B), e.labelStyleKey = Gt(Ta(k.commonLabel, B)), !o) {
    var G = i(t, ["source-label"], k.labelDimensions);
    e.sourceLabelKey = Gt(G), e.sourceLabelStyleKey = Gt(Ta(k.commonLabel, G));
    var F = i(t, ["target-label"], k.labelDimensions);
    e.targetLabelKey = Gt(F), e.targetLabelStyleKey = Gt(Ta(k.commonLabel, F));
  }
  if (o) {
    var $ = e.styleKeys, U = $.nodeBody, _ = $.nodeBorder, Y = $.nodeOutline, W = $.backgroundImage, z = $.compound, K = $.pie, j = [U, _, Y, W, z, K].filter(function(Q) {
      return Q != null;
    }).reduce(Ta, [br, Xr]);
    e.nodeKey = Gt(j), e.hasPie = K != null && K[0] !== br && K[1] !== Xr;
  }
  return s !== e.styleKey;
};
at.clearStyleHints = function(t) {
  var e = t._private;
  e.styleCxtKey = "", e.styleKeys = {}, e.styleKey = null, e.labelKey = null, e.labelStyleKey = null, e.sourceLabelKey = null, e.sourceLabelStyleKey = null, e.targetLabelKey = null, e.targetLabelStyleKey = null, e.nodeKey = null, e.hasPie = null;
};
at.applyParsedProperty = function(t, e) {
  var r = this, a = e, n = t._private.style, i, s = r.types, o = r.properties[a.name].type, l = a.bypass, u = n[a.name], f = u && u.bypass, h = t._private, c = "mapping", v = function(U) {
    return U == null ? null : U.pfValue != null ? U.pfValue : U.value;
  }, d = function() {
    var U = v(u), _ = v(a);
    r.checkTriggers(t, a.name, U, _);
  };
  if (e.name === "curve-style" && t.isEdge() && // loops must be bundled beziers
  (e.value !== "bezier" && t.isLoop() || // edges connected to compound nodes can not be haystacks
  e.value === "haystack" && (t.source().isParent() || t.target().isParent())) && (a = e = this.parse(e.name, "bezier", l)), a.delete)
    return n[a.name] = void 0, d(), !0;
  if (a.deleteBypassed)
    return u ? u.bypass ? (u.bypassed = void 0, d(), !0) : !1 : (d(), !0);
  if (a.deleteBypass)
    return u ? u.bypass ? (n[a.name] = u.bypassed, d(), !0) : !1 : (d(), !0);
  var g = function() {
    Ne("Do not assign mappings to elements without corresponding data (i.e. ele `" + t.id() + "` has no mapping for property `" + a.name + "` with data field `" + a.field + "`); try a `[" + a.field + "]` selector to limit scope to elements with `" + a.field + "` defined");
  };
  switch (a.mapped) {
    case s.mapData: {
      for (var p = a.field.split("."), y = h.data, E = 0; E < p.length && y; E++) {
        var m = p[E];
        y = y[m];
      }
      if (y == null)
        return g(), !1;
      var T;
      if (ae(y)) {
        var C = a.fieldMax - a.fieldMin;
        C === 0 ? T = 0 : T = (y - a.fieldMin) / C;
      } else
        return Ne("Do not use continuous mappers without specifying numeric data (i.e. `" + a.field + ": " + y + "` for `" + t.id() + "` is non-numeric)"), !1;
      if (T < 0 ? T = 0 : T > 1 && (T = 1), o.color) {
        var S = a.valueMin[0], b = a.valueMax[0], x = a.valueMin[1], w = a.valueMax[1], D = a.valueMin[2], A = a.valueMax[2], L = a.valueMin[3] == null ? 1 : a.valueMin[3], I = a.valueMax[3] == null ? 1 : a.valueMax[3], O = [Math.round(S + (b - S) * T), Math.round(x + (w - x) * T), Math.round(D + (A - D) * T), Math.round(L + (I - L) * T)];
        i = {
          // colours are simple, so just create the flat property instead of expensive string parsing
          bypass: a.bypass,
          // we're a bypass if the mapping property is a bypass
          name: a.name,
          value: O,
          strValue: "rgb(" + O[0] + ", " + O[1] + ", " + O[2] + ")"
        };
      } else if (o.number) {
        var P = a.valueMin + (a.valueMax - a.valueMin) * T;
        i = this.parse(a.name, P, a.bypass, c);
      } else
        return !1;
      if (!i)
        return g(), !1;
      i.mapping = a, a = i;
      break;
    }
    case s.data: {
      for (var R = a.field.split("."), M = h.data, k = 0; k < R.length && M; k++) {
        var B = R[k];
        M = M[B];
      }
      if (M != null && (i = this.parse(a.name, M, a.bypass, c)), !i)
        return g(), !1;
      i.mapping = a, a = i;
      break;
    }
    case s.fn: {
      var G = a.value, F = a.fnValue != null ? a.fnValue : G(t);
      if (a.prevFnValue = F, F == null)
        return Ne("Custom function mappers may not return null (i.e. `" + a.name + "` for ele `" + t.id() + "` is null)"), !1;
      if (i = this.parse(a.name, F, a.bypass, c), !i)
        return Ne("Custom function mappers may not return invalid values for the property type (i.e. `" + a.name + "` for ele `" + t.id() + "` is invalid)"), !1;
      i.mapping = St(a), a = i;
      break;
    }
    case void 0:
      break;
    default:
      return !1;
  }
  return l ? (f ? a.bypassed = u.bypassed : a.bypassed = u, n[a.name] = a) : f ? u.bypassed = a : n[a.name] = a, d(), !0;
};
at.cleanElements = function(t, e) {
  for (var r = 0; r < t.length; r++) {
    var a = t[r];
    if (this.clearStyleHints(a), a.dirtyCompoundBoundsCache(), a.dirtyBoundingBoxCache(), !e)
      a._private.style = {};
    else
      for (var n = a._private.style, i = Object.keys(n), s = 0; s < i.length; s++) {
        var o = i[s], l = n[o];
        l != null && (l.bypass ? l.bypassed = null : n[o] = null);
      }
  }
};
at.update = function() {
  var t = this._private.cy, e = t.mutableElements();
  e.updateStyle();
};
at.updateTransitions = function(t, e) {
  var r = this, a = t._private, n = t.pstyle("transition-property").value, i = t.pstyle("transition-duration").pfValue, s = t.pstyle("transition-delay").pfValue;
  if (n.length > 0 && i > 0) {
    for (var o = {}, l = !1, u = 0; u < n.length; u++) {
      var f = n[u], h = t.pstyle(f), c = e[f];
      if (c) {
        var v = c.prev, d = v, g = c.next != null ? c.next : h, p = !1, y = void 0, E = 1e-6;
        d && (ae(d.pfValue) && ae(g.pfValue) ? (p = g.pfValue - d.pfValue, y = d.pfValue + E * p) : ae(d.value) && ae(g.value) ? (p = g.value - d.value, y = d.value + E * p) : Me(d.value) && Me(g.value) && (p = d.value[0] !== g.value[0] || d.value[1] !== g.value[1] || d.value[2] !== g.value[2], y = d.strValue), p && (o[f] = g.strValue, this.applyBypass(t, f, y), l = !0));
      }
    }
    if (!l)
      return;
    a.transitioning = !0, new Rr(function(m) {
      s > 0 ? t.delayAnimation(s).play().promise().then(m) : m();
    }).then(function() {
      return t.animation({
        style: o,
        duration: i,
        easing: t.pstyle("transition-timing-function").value,
        queue: !1
      }).play().promise();
    }).then(function() {
      r.removeBypasses(t, n), t.emitAndNotify("style"), a.transitioning = !1;
    });
  } else
    a.transitioning && (this.removeBypasses(t, n), t.emitAndNotify("style"), a.transitioning = !1);
};
at.checkTrigger = function(t, e, r, a, n, i) {
  var s = this.properties[e], o = n(s);
  o != null && o(r, a) && i(s);
};
at.checkZOrderTrigger = function(t, e, r, a) {
  var n = this;
  this.checkTrigger(t, e, r, a, function(i) {
    return i.triggersZOrder;
  }, function() {
    n._private.cy.notify("zorder", t);
  });
};
at.checkBoundsTrigger = function(t, e, r, a) {
  this.checkTrigger(t, e, r, a, function(n) {
    return n.triggersBounds;
  }, function(n) {
    t.dirtyCompoundBoundsCache(), t.dirtyBoundingBoxCache(), // only for beziers -- so performance of other edges isn't affected
    n.triggersBoundsOfParallelBeziers && e === "curve-style" && (r === "bezier" || a === "bezier") && t.parallelEdges().forEach(function(i) {
      i.isBundledBezier() && i.dirtyBoundingBoxCache();
    }), n.triggersBoundsOfConnectedEdges && e === "display" && (r === "none" || a === "none") && t.connectedEdges().forEach(function(i) {
      i.dirtyBoundingBoxCache();
    });
  });
};
at.checkTriggers = function(t, e, r, a) {
  t.dirtyStyleCache(), this.checkZOrderTrigger(t, e, r, a), this.checkBoundsTrigger(t, e, r, a);
};
var pa = {};
pa.applyBypass = function(t, e, r, a) {
  var n = this, i = [], s = !0;
  if (e === "*" || e === "**") {
    if (r !== void 0)
      for (var o = 0; o < n.properties.length; o++) {
        var l = n.properties[o], u = l.name, f = this.parse(u, r, !0);
        f && i.push(f);
      }
  } else if (ve(e)) {
    var h = this.parse(e, r, !0);
    h && i.push(h);
  } else if (De(e)) {
    var c = e;
    a = r;
    for (var v = Object.keys(c), d = 0; d < v.length; d++) {
      var g = v[d], p = c[g];
      if (p === void 0 && (p = c[ln(g)]), p !== void 0) {
        var y = this.parse(g, p, !0);
        y && i.push(y);
      }
    }
  } else
    return !1;
  if (i.length === 0)
    return !1;
  for (var E = !1, m = 0; m < t.length; m++) {
    for (var T = t[m], C = {}, S = void 0, b = 0; b < i.length; b++) {
      var x = i[b];
      if (a) {
        var w = T.pstyle(x.name);
        S = C[x.name] = {
          prev: w
        };
      }
      E = this.applyParsedProperty(T, St(x)) || E, a && (S.next = T.pstyle(x.name));
    }
    E && this.updateStyleHints(T), a && this.updateTransitions(T, C, s);
  }
  return E;
};
pa.overrideBypass = function(t, e, r) {
  e = ii(e);
  for (var a = 0; a < t.length; a++) {
    var n = t[a], i = n._private.style[e], s = this.properties[e].type, o = s.color, l = s.mutiple, u = i ? i.pfValue != null ? i.pfValue : i.value : null;
    !i || !i.bypass ? this.applyBypass(n, e, r) : (i.value = r, i.pfValue != null && (i.pfValue = r), o ? i.strValue = "rgb(" + r.join(",") + ")" : l ? i.strValue = r.join(" ") : i.strValue = "" + r, this.updateStyleHints(n)), this.checkTriggers(n, e, u, r);
  }
};
pa.removeAllBypasses = function(t, e) {
  return this.removeBypasses(t, this.propertyNames, e);
};
pa.removeBypasses = function(t, e, r) {
  for (var a = !0, n = 0; n < t.length; n++) {
    for (var i = t[n], s = {}, o = 0; o < e.length; o++) {
      var l = e[o], u = this.properties[l], f = i.pstyle(u.name);
      if (!(!f || !f.bypass)) {
        var h = "", c = this.parse(l, h, !0), v = s[u.name] = {
          prev: f
        };
        this.applyParsedProperty(i, c), v.next = i.pstyle(u.name);
      }
    }
    this.updateStyleHints(i), r && this.updateTransitions(i, s, a);
  }
};
var pi = {};
pi.getEmSizeInPixels = function() {
  var t = this.containerCss("font-size");
  return t != null ? parseFloat(t) : 1;
};
pi.containerCss = function(t) {
  var e = this._private.cy, r = e.container(), a = e.window();
  if (a && r && a.getComputedStyle)
    return a.getComputedStyle(r).getPropertyValue(t);
};
var At = {};
At.getRenderedStyle = function(t, e) {
  return e ? this.getStylePropertyValue(t, e, !0) : this.getRawStyle(t, !0);
};
At.getRawStyle = function(t, e) {
  var r = this;
  if (t = t[0], t) {
    for (var a = {}, n = 0; n < r.properties.length; n++) {
      var i = r.properties[n], s = r.getStylePropertyValue(t, i.name, e);
      s != null && (a[i.name] = s, a[ln(i.name)] = s);
    }
    return a;
  }
};
At.getIndexedStyle = function(t, e, r, a) {
  var n = t.pstyle(e)[r][a];
  return n != null ? n : t.cy().style().getDefaultProperty(e)[r][0];
};
At.getStylePropertyValue = function(t, e, r) {
  var a = this;
  if (t = t[0], t) {
    var n = a.properties[e];
    n.alias && (n = n.pointsTo);
    var i = n.type, s = t.pstyle(n.name);
    if (s) {
      var o = s.value, l = s.units, u = s.strValue;
      if (r && i.number && o != null && ae(o)) {
        var f = t.cy().zoom(), h = function(p) {
          return p * f;
        }, c = function(p, y) {
          return h(p) + y;
        }, v = Me(o), d = v ? l.every(function(g) {
          return g != null;
        }) : l != null;
        return d ? v ? o.map(function(g, p) {
          return c(g, l[p]);
        }).join(" ") : c(o, l) : v ? o.map(function(g) {
          return ve(g) ? g : "" + h(g);
        }).join(" ") : "" + h(o);
      } else if (u != null)
        return u;
    }
    return null;
  }
};
At.getAnimationStartStyle = function(t, e) {
  for (var r = {}, a = 0; a < e.length; a++) {
    var n = e[a], i = n.name, s = t.pstyle(i);
    s !== void 0 && (De(s) ? s = this.parse(i, s.strValue) : s = this.parse(i, s)), s && (r[i] = s);
  }
  return r;
};
At.getPropsList = function(t) {
  var e = this, r = [], a = t, n = e.properties;
  if (a)
    for (var i = Object.keys(a), s = 0; s < i.length; s++) {
      var o = i[s], l = a[o], u = n[o] || n[ii(o)], f = this.parse(u.name, l);
      f && r.push(f);
    }
  return r;
};
At.getNonDefaultPropertiesHash = function(t, e, r) {
  var a = r.slice(), n, i, s, o, l, u;
  for (l = 0; l < e.length; l++)
    if (n = e[l], i = t.pstyle(n, !1), i != null)
      if (i.pfValue != null)
        a[0] = jr(o, a[0]), a[1] = ea(o, a[1]);
      else
        for (s = i.strValue, u = 0; u < s.length; u++)
          o = s.charCodeAt(u), a[0] = jr(o, a[0]), a[1] = ea(o, a[1]);
  return a;
};
At.getPropertiesHash = At.getNonDefaultPropertiesHash;
var pn = {};
pn.appendFromJson = function(t) {
  for (var e = this, r = 0; r < t.length; r++) {
    var a = t[r], n = a.selector, i = a.style || a.css, s = Object.keys(i);
    e.selector(n);
    for (var o = 0; o < s.length; o++) {
      var l = s[o], u = i[l];
      e.css(l, u);
    }
  }
  return e;
};
pn.fromJson = function(t) {
  var e = this;
  return e.resetToDefault(), e.appendFromJson(t), e;
};
pn.json = function() {
  for (var t = [], e = this.defaultLength; e < this.length; e++) {
    for (var r = this[e], a = r.selector, n = r.properties, i = {}, s = 0; s < n.length; s++) {
      var o = n[s];
      i[o.name] = o.strValue;
    }
    t.push({
      selector: a ? a.toString() : "core",
      style: i
    });
  }
  return t;
};
var yi = {};
yi.appendFromString = function(t) {
  var e = this, r = this, a = "" + t, n, i, s;
  a = a.replace(/[/][*](\s|.)+?[*][/]/g, "");
  function o() {
    a.length > n.length ? a = a.substr(n.length) : a = "";
  }
  function l() {
    i.length > s.length ? i = i.substr(s.length) : i = "";
  }
  for (; ; ) {
    var u = a.match(/^\s*$/);
    if (u)
      break;
    var f = a.match(/^\s*((?:.|\s)+?)\s*\{((?:.|\s)+?)\}/);
    if (!f) {
      Ne("Halting stylesheet parsing: String stylesheet contains more to parse but no selector and block found in: " + a);
      break;
    }
    n = f[0];
    var h = f[1];
    if (h !== "core") {
      var c = new Wt(h);
      if (c.invalid) {
        Ne("Skipping parsing of block: Invalid selector found in string stylesheet: " + h), o();
        continue;
      }
    }
    var v = f[2], d = !1;
    i = v;
    for (var g = []; ; ) {
      var p = i.match(/^\s*$/);
      if (p)
        break;
      var y = i.match(/^\s*(.+?)\s*:\s*(.+?)(?:\s*;|\s*$)/);
      if (!y) {
        Ne("Skipping parsing of block: Invalid formatting of style property and value definitions found in:" + v), d = !0;
        break;
      }
      s = y[0];
      var E = y[1], m = y[2], T = e.properties[E];
      if (!T) {
        Ne("Skipping property: Invalid property name in: " + s), l();
        continue;
      }
      var C = r.parse(E, m);
      if (!C) {
        Ne("Skipping property: Invalid property definition in: " + s), l();
        continue;
      }
      g.push({
        name: E,
        val: m
      }), l();
    }
    if (d) {
      o();
      break;
    }
    r.selector(h);
    for (var S = 0; S < g.length; S++) {
      var b = g[S];
      r.css(b.name, b.val);
    }
    o();
  }
  return r;
};
yi.fromString = function(t) {
  var e = this;
  return e.resetToDefault(), e.appendFromString(t), e;
};
var qe = {};
(function() {
  var t = _e, e = Zc, r = Jc, a = jc, n = ed, i = function(j) {
    return "^" + j + "\\s*\\(\\s*([\\w\\.]+)\\s*\\)$";
  }, s = function(j) {
    var Q = t + "|\\w+|" + e + "|" + r + "|" + a + "|" + n;
    return "^" + j + "\\s*\\(([\\w\\.]+)\\s*\\,\\s*(" + t + ")\\s*\\,\\s*(" + t + ")\\s*,\\s*(" + Q + ")\\s*\\,\\s*(" + Q + ")\\)$";
  }, o = [`^url\\s*\\(\\s*['"]?(.+?)['"]?\\s*\\)$`, "^(none)$", "^(.+)$"];
  qe.types = {
    time: {
      number: !0,
      min: 0,
      units: "s|ms",
      implicitUnits: "ms"
    },
    percent: {
      number: !0,
      min: 0,
      max: 100,
      units: "%",
      implicitUnits: "%"
    },
    percentages: {
      number: !0,
      min: 0,
      max: 100,
      units: "%",
      implicitUnits: "%",
      multiple: !0
    },
    zeroOneNumber: {
      number: !0,
      min: 0,
      max: 1,
      unitless: !0
    },
    zeroOneNumbers: {
      number: !0,
      min: 0,
      max: 1,
      unitless: !0,
      multiple: !0
    },
    nOneOneNumber: {
      number: !0,
      min: -1,
      max: 1,
      unitless: !0
    },
    nonNegativeInt: {
      number: !0,
      min: 0,
      integer: !0,
      unitless: !0
    },
    nonNegativeNumber: {
      number: !0,
      min: 0,
      unitless: !0
    },
    position: {
      enums: ["parent", "origin"]
    },
    nodeSize: {
      number: !0,
      min: 0,
      enums: ["label"]
    },
    number: {
      number: !0,
      unitless: !0
    },
    numbers: {
      number: !0,
      unitless: !0,
      multiple: !0
    },
    positiveNumber: {
      number: !0,
      unitless: !0,
      min: 0,
      strictMin: !0
    },
    size: {
      number: !0,
      min: 0
    },
    bidirectionalSize: {
      number: !0
    },
    // allows negative
    bidirectionalSizeMaybePercent: {
      number: !0,
      allowPercent: !0
    },
    // allows negative
    bidirectionalSizes: {
      number: !0,
      multiple: !0
    },
    // allows negative
    sizeMaybePercent: {
      number: !0,
      min: 0,
      allowPercent: !0
    },
    axisDirection: {
      enums: ["horizontal", "leftward", "rightward", "vertical", "upward", "downward", "auto"]
    },
    paddingRelativeTo: {
      enums: ["width", "height", "average", "min", "max"]
    },
    bgWH: {
      number: !0,
      min: 0,
      allowPercent: !0,
      enums: ["auto"],
      multiple: !0
    },
    bgPos: {
      number: !0,
      allowPercent: !0,
      multiple: !0
    },
    bgRelativeTo: {
      enums: ["inner", "include-padding"],
      multiple: !0
    },
    bgRepeat: {
      enums: ["repeat", "repeat-x", "repeat-y", "no-repeat"],
      multiple: !0
    },
    bgFit: {
      enums: ["none", "contain", "cover"],
      multiple: !0
    },
    bgCrossOrigin: {
      enums: ["anonymous", "use-credentials", "null"],
      multiple: !0
    },
    bgClip: {
      enums: ["none", "node"],
      multiple: !0
    },
    bgContainment: {
      enums: ["inside", "over"],
      multiple: !0
    },
    color: {
      color: !0
    },
    colors: {
      color: !0,
      multiple: !0
    },
    fill: {
      enums: ["solid", "linear-gradient", "radial-gradient"]
    },
    bool: {
      enums: ["yes", "no"]
    },
    bools: {
      enums: ["yes", "no"],
      multiple: !0
    },
    lineStyle: {
      enums: ["solid", "dotted", "dashed"]
    },
    lineCap: {
      enums: ["butt", "round", "square"]
    },
    borderStyle: {
      enums: ["solid", "dotted", "dashed", "double"]
    },
    curveStyle: {
      enums: ["bezier", "unbundled-bezier", "haystack", "segments", "straight", "straight-triangle", "taxi"]
    },
    fontFamily: {
      regex: '^([\\w- \\"]+(?:\\s*,\\s*[\\w- \\"]+)*)$'
    },
    fontStyle: {
      enums: ["italic", "normal", "oblique"]
    },
    fontWeight: {
      enums: ["normal", "bold", "bolder", "lighter", "100", "200", "300", "400", "500", "600", "800", "900", 100, 200, 300, 400, 500, 600, 700, 800, 900]
    },
    textDecoration: {
      enums: ["none", "underline", "overline", "line-through"]
    },
    textTransform: {
      enums: ["none", "uppercase", "lowercase"]
    },
    textWrap: {
      enums: ["none", "wrap", "ellipsis"]
    },
    textOverflowWrap: {
      enums: ["whitespace", "anywhere"]
    },
    textBackgroundShape: {
      enums: ["rectangle", "roundrectangle", "round-rectangle"]
    },
    nodeShape: {
      enums: ["rectangle", "roundrectangle", "round-rectangle", "cutrectangle", "cut-rectangle", "bottomroundrectangle", "bottom-round-rectangle", "barrel", "ellipse", "triangle", "round-triangle", "square", "pentagon", "round-pentagon", "hexagon", "round-hexagon", "concavehexagon", "concave-hexagon", "heptagon", "round-heptagon", "octagon", "round-octagon", "tag", "round-tag", "star", "diamond", "round-diamond", "vee", "rhomboid", "right-rhomboid", "polygon"]
    },
    overlayShape: {
      enums: ["roundrectangle", "round-rectangle", "ellipse"]
    },
    compoundIncludeLabels: {
      enums: ["include", "exclude"]
    },
    arrowShape: {
      enums: ["tee", "triangle", "triangle-tee", "circle-triangle", "triangle-cross", "triangle-backcurve", "vee", "square", "circle", "diamond", "chevron", "none"]
    },
    arrowFill: {
      enums: ["filled", "hollow"]
    },
    arrowWidth: {
      number: !0,
      units: "%|px|em",
      implicitUnits: "px",
      enums: ["match-line"]
    },
    display: {
      enums: ["element", "none"]
    },
    visibility: {
      enums: ["hidden", "visible"]
    },
    zCompoundDepth: {
      enums: ["bottom", "orphan", "auto", "top"]
    },
    zIndexCompare: {
      enums: ["auto", "manual"]
    },
    valign: {
      enums: ["top", "center", "bottom"]
    },
    halign: {
      enums: ["left", "center", "right"]
    },
    justification: {
      enums: ["left", "center", "right", "auto"]
    },
    text: {
      string: !0
    },
    data: {
      mapping: !0,
      regex: i("data")
    },
    layoutData: {
      mapping: !0,
      regex: i("layoutData")
    },
    scratch: {
      mapping: !0,
      regex: i("scratch")
    },
    mapData: {
      mapping: !0,
      regex: s("mapData")
    },
    mapLayoutData: {
      mapping: !0,
      regex: s("mapLayoutData")
    },
    mapScratch: {
      mapping: !0,
      regex: s("mapScratch")
    },
    fn: {
      mapping: !0,
      fn: !0
    },
    url: {
      regexes: o,
      singleRegexMatchValue: !0
    },
    urls: {
      regexes: o,
      singleRegexMatchValue: !0,
      multiple: !0
    },
    propList: {
      propList: !0
    },
    angle: {
      number: !0,
      units: "deg|rad",
      implicitUnits: "rad"
    },
    textRotation: {
      number: !0,
      units: "deg|rad",
      implicitUnits: "rad",
      enums: ["none", "autorotate"]
    },
    polygonPointList: {
      number: !0,
      multiple: !0,
      evenMultiple: !0,
      min: -1,
      max: 1,
      unitless: !0
    },
    edgeDistances: {
      enums: ["intersection", "node-position", "endpoints"]
    },
    edgeEndpoint: {
      number: !0,
      multiple: !0,
      units: "%|px|em|deg|rad",
      implicitUnits: "px",
      enums: ["inside-to-node", "outside-to-node", "outside-to-node-or-label", "outside-to-line", "outside-to-line-or-label"],
      singleEnum: !0,
      validate: function(j, Q) {
        switch (j.length) {
          case 2:
            return Q[0] !== "deg" && Q[0] !== "rad" && Q[1] !== "deg" && Q[1] !== "rad";
          case 1:
            return ve(j[0]) || Q[0] === "deg" || Q[0] === "rad";
          default:
            return !1;
        }
      }
    },
    easing: {
      regexes: ["^(spring)\\s*\\(\\s*(" + t + ")\\s*,\\s*(" + t + ")\\s*\\)$", "^(cubic-bezier)\\s*\\(\\s*(" + t + ")\\s*,\\s*(" + t + ")\\s*,\\s*(" + t + ")\\s*,\\s*(" + t + ")\\s*\\)$"],
      enums: ["linear", "ease", "ease-in", "ease-out", "ease-in-out", "ease-in-sine", "ease-out-sine", "ease-in-out-sine", "ease-in-quad", "ease-out-quad", "ease-in-out-quad", "ease-in-cubic", "ease-out-cubic", "ease-in-out-cubic", "ease-in-quart", "ease-out-quart", "ease-in-out-quart", "ease-in-quint", "ease-out-quint", "ease-in-out-quint", "ease-in-expo", "ease-out-expo", "ease-in-out-expo", "ease-in-circ", "ease-out-circ", "ease-in-out-circ"]
    },
    gradientDirection: {
      enums: [
        "to-bottom",
        "to-top",
        "to-left",
        "to-right",
        "to-bottom-right",
        "to-bottom-left",
        "to-top-right",
        "to-top-left",
        "to-right-bottom",
        "to-left-bottom",
        "to-right-top",
        "to-left-top"
        // different order
      ]
    },
    boundsExpansion: {
      number: !0,
      multiple: !0,
      min: 0,
      validate: function(j) {
        var Q = j.length;
        return Q === 1 || Q === 2 || Q === 4;
      }
    }
  };
  var l = {
    zeroNonZero: function(j, Q) {
      return (j == null || Q == null) && j !== Q || j == 0 && Q != 0 ? !0 : j != 0 && Q == 0;
    },
    any: function(j, Q) {
      return j != Q;
    },
    emptyNonEmpty: function(j, Q) {
      var ee = Yt(j), ne = Yt(Q);
      return ee && !ne || !ee && ne;
    }
  }, u = qe.types, f = [{
    name: "label",
    type: u.text,
    triggersBounds: l.any,
    triggersZOrder: l.emptyNonEmpty
  }, {
    name: "text-rotation",
    type: u.textRotation,
    triggersBounds: l.any
  }, {
    name: "text-margin-x",
    type: u.bidirectionalSize,
    triggersBounds: l.any
  }, {
    name: "text-margin-y",
    type: u.bidirectionalSize,
    triggersBounds: l.any
  }], h = [{
    name: "source-label",
    type: u.text,
    triggersBounds: l.any
  }, {
    name: "source-text-rotation",
    type: u.textRotation,
    triggersBounds: l.any
  }, {
    name: "source-text-margin-x",
    type: u.bidirectionalSize,
    triggersBounds: l.any
  }, {
    name: "source-text-margin-y",
    type: u.bidirectionalSize,
    triggersBounds: l.any
  }, {
    name: "source-text-offset",
    type: u.size,
    triggersBounds: l.any
  }], c = [{
    name: "target-label",
    type: u.text,
    triggersBounds: l.any
  }, {
    name: "target-text-rotation",
    type: u.textRotation,
    triggersBounds: l.any
  }, {
    name: "target-text-margin-x",
    type: u.bidirectionalSize,
    triggersBounds: l.any
  }, {
    name: "target-text-margin-y",
    type: u.bidirectionalSize,
    triggersBounds: l.any
  }, {
    name: "target-text-offset",
    type: u.size,
    triggersBounds: l.any
  }], v = [{
    name: "font-family",
    type: u.fontFamily,
    triggersBounds: l.any
  }, {
    name: "font-style",
    type: u.fontStyle,
    triggersBounds: l.any
  }, {
    name: "font-weight",
    type: u.fontWeight,
    triggersBounds: l.any
  }, {
    name: "font-size",
    type: u.size,
    triggersBounds: l.any
  }, {
    name: "text-transform",
    type: u.textTransform,
    triggersBounds: l.any
  }, {
    name: "text-wrap",
    type: u.textWrap,
    triggersBounds: l.any
  }, {
    name: "text-overflow-wrap",
    type: u.textOverflowWrap,
    triggersBounds: l.any
  }, {
    name: "text-max-width",
    type: u.size,
    triggersBounds: l.any
  }, {
    name: "text-outline-width",
    type: u.size,
    triggersBounds: l.any
  }, {
    name: "line-height",
    type: u.positiveNumber,
    triggersBounds: l.any
  }], d = [{
    name: "text-valign",
    type: u.valign,
    triggersBounds: l.any
  }, {
    name: "text-halign",
    type: u.halign,
    triggersBounds: l.any
  }, {
    name: "color",
    type: u.color
  }, {
    name: "text-outline-color",
    type: u.color
  }, {
    name: "text-outline-opacity",
    type: u.zeroOneNumber
  }, {
    name: "text-background-color",
    type: u.color
  }, {
    name: "text-background-opacity",
    type: u.zeroOneNumber
  }, {
    name: "text-background-padding",
    type: u.size,
    triggersBounds: l.any
  }, {
    name: "text-border-opacity",
    type: u.zeroOneNumber
  }, {
    name: "text-border-color",
    type: u.color
  }, {
    name: "text-border-width",
    type: u.size,
    triggersBounds: l.any
  }, {
    name: "text-border-style",
    type: u.borderStyle,
    triggersBounds: l.any
  }, {
    name: "text-background-shape",
    type: u.textBackgroundShape,
    triggersBounds: l.any
  }, {
    name: "text-justification",
    type: u.justification
  }], g = [{
    name: "events",
    type: u.bool,
    triggersZOrder: l.any
  }, {
    name: "text-events",
    type: u.bool,
    triggersZOrder: l.any
  }], p = [{
    name: "display",
    type: u.display,
    triggersZOrder: l.any,
    triggersBounds: l.any,
    triggersBoundsOfConnectedEdges: !0
  }, {
    name: "visibility",
    type: u.visibility,
    triggersZOrder: l.any
  }, {
    name: "opacity",
    type: u.zeroOneNumber,
    triggersZOrder: l.zeroNonZero
  }, {
    name: "text-opacity",
    type: u.zeroOneNumber
  }, {
    name: "min-zoomed-font-size",
    type: u.size
  }, {
    name: "z-compound-depth",
    type: u.zCompoundDepth,
    triggersZOrder: l.any
  }, {
    name: "z-index-compare",
    type: u.zIndexCompare,
    triggersZOrder: l.any
  }, {
    name: "z-index",
    type: u.number,
    triggersZOrder: l.any
  }], y = [{
    name: "overlay-padding",
    type: u.size,
    triggersBounds: l.any
  }, {
    name: "overlay-color",
    type: u.color
  }, {
    name: "overlay-opacity",
    type: u.zeroOneNumber,
    triggersBounds: l.zeroNonZero
  }, {
    name: "overlay-shape",
    type: u.overlayShape,
    triggersBounds: l.any
  }], E = [{
    name: "underlay-padding",
    type: u.size,
    triggersBounds: l.any
  }, {
    name: "underlay-color",
    type: u.color
  }, {
    name: "underlay-opacity",
    type: u.zeroOneNumber,
    triggersBounds: l.zeroNonZero
  }, {
    name: "underlay-shape",
    type: u.overlayShape,
    triggersBounds: l.any
  }], m = [{
    name: "transition-property",
    type: u.propList
  }, {
    name: "transition-duration",
    type: u.time
  }, {
    name: "transition-delay",
    type: u.time
  }, {
    name: "transition-timing-function",
    type: u.easing
  }], T = function(j, Q) {
    return Q.value === "label" ? -j.poolIndex() : Q.pfValue;
  }, C = [{
    name: "height",
    type: u.nodeSize,
    triggersBounds: l.any,
    hashOverride: T
  }, {
    name: "width",
    type: u.nodeSize,
    triggersBounds: l.any,
    hashOverride: T
  }, {
    name: "shape",
    type: u.nodeShape,
    triggersBounds: l.any
  }, {
    name: "shape-polygon-points",
    type: u.polygonPointList,
    triggersBounds: l.any
  }, {
    name: "background-color",
    type: u.color
  }, {
    name: "background-fill",
    type: u.fill
  }, {
    name: "background-opacity",
    type: u.zeroOneNumber
  }, {
    name: "background-blacken",
    type: u.nOneOneNumber
  }, {
    name: "background-gradient-stop-colors",
    type: u.colors
  }, {
    name: "background-gradient-stop-positions",
    type: u.percentages
  }, {
    name: "background-gradient-direction",
    type: u.gradientDirection
  }, {
    name: "padding",
    type: u.sizeMaybePercent,
    triggersBounds: l.any
  }, {
    name: "padding-relative-to",
    type: u.paddingRelativeTo,
    triggersBounds: l.any
  }, {
    name: "bounds-expansion",
    type: u.boundsExpansion,
    triggersBounds: l.any
  }], S = [{
    name: "border-color",
    type: u.color
  }, {
    name: "border-opacity",
    type: u.zeroOneNumber
  }, {
    name: "border-width",
    type: u.size,
    triggersBounds: l.any
  }, {
    name: "border-style",
    type: u.borderStyle
  }], b = [{
    name: "outline-color",
    type: u.color
  }, {
    name: "outline-opacity",
    type: u.zeroOneNumber
  }, {
    name: "outline-width",
    type: u.size,
    triggersBounds: l.any
  }, {
    name: "outline-style",
    type: u.borderStyle
  }, {
    name: "outline-offset",
    type: u.size,
    triggersBounds: l.any
  }], x = [{
    name: "background-image",
    type: u.urls
  }, {
    name: "background-image-crossorigin",
    type: u.bgCrossOrigin
  }, {
    name: "background-image-opacity",
    type: u.zeroOneNumbers
  }, {
    name: "background-image-containment",
    type: u.bgContainment
  }, {
    name: "background-image-smoothing",
    type: u.bools
  }, {
    name: "background-position-x",
    type: u.bgPos
  }, {
    name: "background-position-y",
    type: u.bgPos
  }, {
    name: "background-width-relative-to",
    type: u.bgRelativeTo
  }, {
    name: "background-height-relative-to",
    type: u.bgRelativeTo
  }, {
    name: "background-repeat",
    type: u.bgRepeat
  }, {
    name: "background-fit",
    type: u.bgFit
  }, {
    name: "background-clip",
    type: u.bgClip
  }, {
    name: "background-width",
    type: u.bgWH
  }, {
    name: "background-height",
    type: u.bgWH
  }, {
    name: "background-offset-x",
    type: u.bgPos
  }, {
    name: "background-offset-y",
    type: u.bgPos
  }], w = [{
    name: "position",
    type: u.position,
    triggersBounds: l.any
  }, {
    name: "compound-sizing-wrt-labels",
    type: u.compoundIncludeLabels,
    triggersBounds: l.any
  }, {
    name: "min-width",
    type: u.size,
    triggersBounds: l.any
  }, {
    name: "min-width-bias-left",
    type: u.sizeMaybePercent,
    triggersBounds: l.any
  }, {
    name: "min-width-bias-right",
    type: u.sizeMaybePercent,
    triggersBounds: l.any
  }, {
    name: "min-height",
    type: u.size,
    triggersBounds: l.any
  }, {
    name: "min-height-bias-top",
    type: u.sizeMaybePercent,
    triggersBounds: l.any
  }, {
    name: "min-height-bias-bottom",
    type: u.sizeMaybePercent,
    triggersBounds: l.any
  }], D = [{
    name: "line-style",
    type: u.lineStyle
  }, {
    name: "line-color",
    type: u.color
  }, {
    name: "line-fill",
    type: u.fill
  }, {
    name: "line-cap",
    type: u.lineCap
  }, {
    name: "line-opacity",
    type: u.zeroOneNumber
  }, {
    name: "line-dash-pattern",
    type: u.numbers
  }, {
    name: "line-dash-offset",
    type: u.number
  }, {
    name: "line-gradient-stop-colors",
    type: u.colors
  }, {
    name: "line-gradient-stop-positions",
    type: u.percentages
  }, {
    name: "curve-style",
    type: u.curveStyle,
    triggersBounds: l.any,
    triggersBoundsOfParallelBeziers: !0
  }, {
    name: "haystack-radius",
    type: u.zeroOneNumber,
    triggersBounds: l.any
  }, {
    name: "source-endpoint",
    type: u.edgeEndpoint,
    triggersBounds: l.any
  }, {
    name: "target-endpoint",
    type: u.edgeEndpoint,
    triggersBounds: l.any
  }, {
    name: "control-point-step-size",
    type: u.size,
    triggersBounds: l.any
  }, {
    name: "control-point-distances",
    type: u.bidirectionalSizes,
    triggersBounds: l.any
  }, {
    name: "control-point-weights",
    type: u.numbers,
    triggersBounds: l.any
  }, {
    name: "segment-distances",
    type: u.bidirectionalSizes,
    triggersBounds: l.any
  }, {
    name: "segment-weights",
    type: u.numbers,
    triggersBounds: l.any
  }, {
    name: "taxi-turn",
    type: u.bidirectionalSizeMaybePercent,
    triggersBounds: l.any
  }, {
    name: "taxi-turn-min-distance",
    type: u.size,
    triggersBounds: l.any
  }, {
    name: "taxi-direction",
    type: u.axisDirection,
    triggersBounds: l.any
  }, {
    name: "edge-distances",
    type: u.edgeDistances,
    triggersBounds: l.any
  }, {
    name: "arrow-scale",
    type: u.positiveNumber,
    triggersBounds: l.any
  }, {
    name: "loop-direction",
    type: u.angle,
    triggersBounds: l.any
  }, {
    name: "loop-sweep",
    type: u.angle,
    triggersBounds: l.any
  }, {
    name: "source-distance-from-node",
    type: u.size,
    triggersBounds: l.any
  }, {
    name: "target-distance-from-node",
    type: u.size,
    triggersBounds: l.any
  }], A = [{
    name: "ghost",
    type: u.bool,
    triggersBounds: l.any
  }, {
    name: "ghost-offset-x",
    type: u.bidirectionalSize,
    triggersBounds: l.any
  }, {
    name: "ghost-offset-y",
    type: u.bidirectionalSize,
    triggersBounds: l.any
  }, {
    name: "ghost-opacity",
    type: u.zeroOneNumber
  }], L = [{
    name: "selection-box-color",
    type: u.color
  }, {
    name: "selection-box-opacity",
    type: u.zeroOneNumber
  }, {
    name: "selection-box-border-color",
    type: u.color
  }, {
    name: "selection-box-border-width",
    type: u.size
  }, {
    name: "active-bg-color",
    type: u.color
  }, {
    name: "active-bg-opacity",
    type: u.zeroOneNumber
  }, {
    name: "active-bg-size",
    type: u.size
  }, {
    name: "outside-texture-bg-color",
    type: u.color
  }, {
    name: "outside-texture-bg-opacity",
    type: u.zeroOneNumber
  }], I = [];
  qe.pieBackgroundN = 16, I.push({
    name: "pie-size",
    type: u.sizeMaybePercent
  });
  for (var O = 1; O <= qe.pieBackgroundN; O++)
    I.push({
      name: "pie-" + O + "-background-color",
      type: u.color
    }), I.push({
      name: "pie-" + O + "-background-size",
      type: u.percent
    }), I.push({
      name: "pie-" + O + "-background-opacity",
      type: u.zeroOneNumber
    });
  var P = [], R = qe.arrowPrefixes = ["source", "mid-source", "target", "mid-target"];
  [{
    name: "arrow-shape",
    type: u.arrowShape,
    triggersBounds: l.any
  }, {
    name: "arrow-color",
    type: u.color
  }, {
    name: "arrow-fill",
    type: u.arrowFill
  }, {
    name: "arrow-width",
    type: u.arrowWidth
  }].forEach(function(K) {
    R.forEach(function(j) {
      var Q = j + "-" + K.name, ee = K.type, ne = K.triggersBounds;
      P.push({
        name: Q,
        type: ee,
        triggersBounds: ne
      });
    });
  }, {});
  var M = qe.properties = [].concat(g, m, p, y, E, A, d, v, f, h, c, C, S, b, x, I, w, D, P, L), k = qe.propertyGroups = {
    // common to all eles
    behavior: g,
    transition: m,
    visibility: p,
    overlay: y,
    underlay: E,
    ghost: A,
    // labels
    commonLabel: d,
    labelDimensions: v,
    mainLabel: f,
    sourceLabel: h,
    targetLabel: c,
    // node props
    nodeBody: C,
    nodeBorder: S,
    nodeOutline: b,
    backgroundImage: x,
    pie: I,
    compound: w,
    // edge props
    edgeLine: D,
    edgeArrow: P,
    core: L
  }, B = qe.propertyGroupNames = {}, G = qe.propertyGroupKeys = Object.keys(k);
  G.forEach(function(K) {
    B[K] = k[K].map(function(j) {
      return j.name;
    }), k[K].forEach(function(j) {
      return j.groupKey = K;
    });
  });
  var F = qe.aliases = [{
    name: "content",
    pointsTo: "label"
  }, {
    name: "control-point-distance",
    pointsTo: "control-point-distances"
  }, {
    name: "control-point-weight",
    pointsTo: "control-point-weights"
  }, {
    name: "edge-text-rotation",
    pointsTo: "text-rotation"
  }, {
    name: "padding-left",
    pointsTo: "padding"
  }, {
    name: "padding-right",
    pointsTo: "padding"
  }, {
    name: "padding-top",
    pointsTo: "padding"
  }, {
    name: "padding-bottom",
    pointsTo: "padding"
  }];
  qe.propertyNames = M.map(function(K) {
    return K.name;
  });
  for (var $ = 0; $ < M.length; $++) {
    var U = M[$];
    M[U.name] = U;
  }
  for (var _ = 0; _ < F.length; _++) {
    var Y = F[_], W = M[Y.pointsTo], z = {
      name: Y.name,
      alias: !0,
      pointsTo: W
    };
    M.push(z), M[Y.name] = z;
  }
})();
qe.getDefaultProperty = function(t) {
  return this.getDefaultProperties()[t];
};
qe.getDefaultProperties = function() {
  var t = this._private;
  if (t.defaultProperties != null)
    return t.defaultProperties;
  for (var e = de({
    // core props
    "selection-box-color": "#ddd",
    "selection-box-opacity": 0.65,
    "selection-box-border-color": "#aaa",
    "selection-box-border-width": 1,
    "active-bg-color": "black",
    "active-bg-opacity": 0.15,
    "active-bg-size": 30,
    "outside-texture-bg-color": "#000",
    "outside-texture-bg-opacity": 0.125,
    // common node/edge props
    events: "yes",
    "text-events": "no",
    "text-valign": "top",
    "text-halign": "center",
    "text-justification": "auto",
    "line-height": 1,
    color: "#000",
    "text-outline-color": "#000",
    "text-outline-width": 0,
    "text-outline-opacity": 1,
    "text-opacity": 1,
    "text-decoration": "none",
    "text-transform": "none",
    "text-wrap": "none",
    "text-overflow-wrap": "whitespace",
    "text-max-width": 9999,
    "text-background-color": "#000",
    "text-background-opacity": 0,
    "text-background-shape": "rectangle",
    "text-background-padding": 0,
    "text-border-opacity": 0,
    "text-border-width": 0,
    "text-border-style": "solid",
    "text-border-color": "#000",
    "font-family": "Helvetica Neue, Helvetica, sans-serif",
    "font-style": "normal",
    "font-weight": "normal",
    "font-size": 16,
    "min-zoomed-font-size": 0,
    "text-rotation": "none",
    "source-text-rotation": "none",
    "target-text-rotation": "none",
    visibility: "visible",
    display: "element",
    opacity: 1,
    "z-compound-depth": "auto",
    "z-index-compare": "auto",
    "z-index": 0,
    label: "",
    "text-margin-x": 0,
    "text-margin-y": 0,
    "source-label": "",
    "source-text-offset": 0,
    "source-text-margin-x": 0,
    "source-text-margin-y": 0,
    "target-label": "",
    "target-text-offset": 0,
    "target-text-margin-x": 0,
    "target-text-margin-y": 0,
    "overlay-opacity": 0,
    "overlay-color": "#000",
    "overlay-padding": 10,
    "overlay-shape": "round-rectangle",
    "underlay-opacity": 0,
    "underlay-color": "#000",
    "underlay-padding": 10,
    "underlay-shape": "round-rectangle",
    "transition-property": "none",
    "transition-duration": 0,
    "transition-delay": 0,
    "transition-timing-function": "linear",
    // node props
    "background-blacken": 0,
    "background-color": "#999",
    "background-fill": "solid",
    "background-opacity": 1,
    "background-image": "none",
    "background-image-crossorigin": "anonymous",
    "background-image-opacity": 1,
    "background-image-containment": "inside",
    "background-image-smoothing": "yes",
    "background-position-x": "50%",
    "background-position-y": "50%",
    "background-offset-x": 0,
    "background-offset-y": 0,
    "background-width-relative-to": "include-padding",
    "background-height-relative-to": "include-padding",
    "background-repeat": "no-repeat",
    "background-fit": "none",
    "background-clip": "node",
    "background-width": "auto",
    "background-height": "auto",
    "border-color": "#000",
    "border-opacity": 1,
    "border-width": 0,
    "border-style": "solid",
    "outline-color": "#999",
    "outline-opacity": 1,
    "outline-width": 0,
    "outline-offset": 0,
    "outline-style": "solid",
    height: 30,
    width: 30,
    shape: "ellipse",
    "shape-polygon-points": "-1, -1,   1, -1,   1, 1,   -1, 1",
    "bounds-expansion": 0,
    // node gradient
    "background-gradient-direction": "to-bottom",
    "background-gradient-stop-colors": "#999",
    "background-gradient-stop-positions": "0%",
    // ghost props
    ghost: "no",
    "ghost-offset-y": 0,
    "ghost-offset-x": 0,
    "ghost-opacity": 0,
    // compound props
    padding: 0,
    "padding-relative-to": "width",
    position: "origin",
    "compound-sizing-wrt-labels": "include",
    "min-width": 0,
    "min-width-bias-left": 0,
    "min-width-bias-right": 0,
    "min-height": 0,
    "min-height-bias-top": 0,
    "min-height-bias-bottom": 0
  }, {
    // node pie bg
    "pie-size": "100%"
  }, [{
    name: "pie-{{i}}-background-color",
    value: "black"
  }, {
    name: "pie-{{i}}-background-size",
    value: "0%"
  }, {
    name: "pie-{{i}}-background-opacity",
    value: 1
  }].reduce(function(l, u) {
    for (var f = 1; f <= qe.pieBackgroundN; f++) {
      var h = u.name.replace("{{i}}", f), c = u.value;
      l[h] = c;
    }
    return l;
  }, {}), {
    // edge props
    "line-style": "solid",
    "line-color": "#999",
    "line-fill": "solid",
    "line-cap": "butt",
    "line-opacity": 1,
    "line-gradient-stop-colors": "#999",
    "line-gradient-stop-positions": "0%",
    "control-point-step-size": 40,
    "control-point-weights": 0.5,
    "segment-weights": 0.5,
    "segment-distances": 20,
    "taxi-turn": "50%",
    "taxi-turn-min-distance": 10,
    "taxi-direction": "auto",
    "edge-distances": "intersection",
    "curve-style": "haystack",
    "haystack-radius": 0,
    "arrow-scale": 1,
    "loop-direction": "-45deg",
    "loop-sweep": "-90deg",
    "source-distance-from-node": 0,
    "target-distance-from-node": 0,
    "source-endpoint": "outside-to-node",
    "target-endpoint": "outside-to-node",
    "line-dash-pattern": [6, 3],
    "line-dash-offset": 0
  }, [{
    name: "arrow-shape",
    value: "none"
  }, {
    name: "arrow-color",
    value: "#999"
  }, {
    name: "arrow-fill",
    value: "filled"
  }, {
    name: "arrow-width",
    value: 1
  }].reduce(function(l, u) {
    return qe.arrowPrefixes.forEach(function(f) {
      var h = f + "-" + u.name, c = u.value;
      l[h] = c;
    }), l;
  }, {})), r = {}, a = 0; a < this.properties.length; a++) {
    var n = this.properties[a];
    if (!n.pointsTo) {
      var i = n.name, s = e[i], o = this.parse(i, s);
      r[i] = o;
    }
  }
  return t.defaultProperties = r, t.defaultProperties;
};
qe.addDefaultStylesheet = function() {
  this.selector(":parent").css({
    shape: "rectangle",
    padding: 10,
    "background-color": "#eee",
    "border-color": "#ccc",
    "border-width": 1
  }).selector("edge").css({
    width: 3
  }).selector(":loop").css({
    "curve-style": "bezier"
  }).selector("edge:compound").css({
    "curve-style": "bezier",
    "source-endpoint": "outside-to-line",
    "target-endpoint": "outside-to-line"
  }).selector(":selected").css({
    "background-color": "#0169D9",
    "line-color": "#0169D9",
    "source-arrow-color": "#0169D9",
    "target-arrow-color": "#0169D9",
    "mid-source-arrow-color": "#0169D9",
    "mid-target-arrow-color": "#0169D9"
  }).selector(":parent:selected").css({
    "background-color": "#CCE1F9",
    "border-color": "#aec8e5"
  }).selector(":active").css({
    "overlay-color": "black",
    "overlay-padding": 10,
    "overlay-opacity": 0.25
  }), this.defaultLength = this.length;
};
var yn = {};
yn.parse = function(t, e, r, a) {
  var n = this;
  if (Be(e))
    return n.parseImplWarn(t, e, r, a);
  var i = a === "mapping" || a === !0 || a === !1 || a == null ? "dontcare" : a, s = r ? "t" : "f", o = "" + e, l = go(t, o, s, i), u = n.propCache = n.propCache || [], f;
  return (f = u[l]) || (f = u[l] = n.parseImplWarn(t, e, r, a)), (r || a === "mapping") && (f = St(f), f && (f.value = St(f.value))), f;
};
yn.parseImplWarn = function(t, e, r, a) {
  var n = this.parseImpl(t, e, r, a);
  return !n && e != null && Ne("The style property `".concat(t, ": ").concat(e, "` is invalid")), n && (n.name === "width" || n.name === "height") && e === "label" && Ne("The style value of `label` is deprecated for `" + n.name + "`"), n;
};
yn.parseImpl = function(t, e, r, a) {
  var n = this;
  t = ii(t);
  var i = n.properties[t], s = e, o = n.types;
  if (!i || e === void 0)
    return null;
  i.alias && (i = i.pointsTo, t = i.name);
  var l = ve(e);
  l && (e = e.trim());
  var u = i.type;
  if (!u)
    return null;
  if (r && (e === "" || e === null))
    return {
      name: t,
      value: e,
      bypass: !0,
      deleteBypass: !0
    };
  if (Be(e))
    return {
      name: t,
      value: e,
      strValue: "fn",
      mapped: o.fn,
      bypass: r
    };
  var f, h;
  if (!(!l || a || e.length < 7 || e[1] !== "a")) {
    if (e.length >= 7 && e[0] === "d" && (f = new RegExp(o.data.regex).exec(e))) {
      if (r)
        return !1;
      var c = o.data;
      return {
        name: t,
        value: f,
        strValue: "" + e,
        mapped: c,
        field: f[1],
        bypass: r
      };
    } else if (e.length >= 10 && e[0] === "m" && (h = new RegExp(o.mapData.regex).exec(e))) {
      if (r || u.multiple)
        return !1;
      var v = o.mapData;
      if (!(u.color || u.number))
        return !1;
      var d = this.parse(t, h[4]);
      if (!d || d.mapped)
        return !1;
      var g = this.parse(t, h[5]);
      if (!g || g.mapped)
        return !1;
      if (d.pfValue === g.pfValue || d.strValue === g.strValue)
        return Ne("`" + t + ": " + e + "` is not a valid mapper because the output range is zero; converting to `" + t + ": " + d.strValue + "`"), this.parse(t, d.strValue);
      if (u.color) {
        var p = d.value, y = g.value, E = p[0] === y[0] && p[1] === y[1] && p[2] === y[2] && // optional alpha
        (p[3] === y[3] || (p[3] == null || p[3] === 1) && (y[3] == null || y[3] === 1));
        if (E)
          return !1;
      }
      return {
        name: t,
        value: h,
        strValue: "" + e,
        mapped: v,
        field: h[1],
        fieldMin: parseFloat(h[2]),
        // min & max are numeric
        fieldMax: parseFloat(h[3]),
        valueMin: d.value,
        valueMax: g.value,
        bypass: r
      };
    }
  }
  if (u.multiple && a !== "multiple") {
    var m;
    if (l ? m = e.split(/\s+/) : Me(e) ? m = e : m = [e], u.evenMultiple && m.length % 2 !== 0)
      return null;
    for (var T = [], C = [], S = [], b = "", x = !1, w = 0; w < m.length; w++) {
      var D = n.parse(t, m[w], r, "multiple");
      x = x || ve(D.value), T.push(D.value), S.push(D.pfValue != null ? D.pfValue : D.value), C.push(D.units), b += (w > 0 ? " " : "") + D.strValue;
    }
    return u.validate && !u.validate(T, C) ? null : u.singleEnum && x ? T.length === 1 && ve(T[0]) ? {
      name: t,
      value: T[0],
      strValue: T[0],
      bypass: r
    } : null : {
      name: t,
      value: T,
      pfValue: S,
      strValue: b,
      bypass: r,
      units: C
    };
  }
  var A = function() {
    for (var j = 0; j < u.enums.length; j++) {
      var Q = u.enums[j];
      if (Q === e)
        return {
          name: t,
          value: e,
          strValue: "" + e,
          bypass: r
        };
    }
    return null;
  };
  if (u.number) {
    var L, I = "px";
    if (u.units && (L = u.units), u.implicitUnits && (I = u.implicitUnits), !u.unitless)
      if (l) {
        var O = "px|em" + (u.allowPercent ? "|\\%" : "");
        L && (O = L);
        var P = e.match("^(" + _e + ")(" + O + ")?$");
        P && (e = P[1], L = P[2] || I);
      } else
        (!L || u.implicitUnits) && (L = I);
    if (e = parseFloat(e), isNaN(e) && u.enums === void 0)
      return null;
    if (isNaN(e) && u.enums !== void 0)
      return e = s, A();
    if (u.integer && !Uc(e) || u.min !== void 0 && (e < u.min || u.strictMin && e === u.min) || u.max !== void 0 && (e > u.max || u.strictMax && e === u.max))
      return null;
    var R = {
      name: t,
      value: e,
      strValue: "" + e + (L || ""),
      units: L,
      bypass: r
    };
    return u.unitless || L !== "px" && L !== "em" ? R.pfValue = e : R.pfValue = L === "px" || !L ? e : this.getEmSizeInPixels() * e, (L === "ms" || L === "s") && (R.pfValue = L === "ms" ? e : 1e3 * e), (L === "deg" || L === "rad") && (R.pfValue = L === "rad" ? e : Gd(e)), L === "%" && (R.pfValue = e / 100), R;
  } else if (u.propList) {
    var M = [], k = "" + e;
    if (k !== "none") {
      for (var B = k.split(/\s*,\s*|\s+/), G = 0; G < B.length; G++) {
        var F = B[G].trim();
        n.properties[F] ? M.push(F) : Ne("`" + F + "` is not a valid property name");
      }
      if (M.length === 0)
        return null;
    }
    return {
      name: t,
      value: M,
      strValue: M.length === 0 ? "none" : M.join(" "),
      bypass: r
    };
  } else if (u.color) {
    var $ = sd(e);
    return $ ? {
      name: t,
      value: $,
      pfValue: $,
      strValue: "rgb(" + $[0] + "," + $[1] + "," + $[2] + ")",
      // n.b. no spaces b/c of multiple support
      bypass: r
    } : null;
  } else if (u.regex || u.regexes) {
    if (u.enums) {
      var U = A();
      if (U)
        return U;
    }
    for (var _ = u.regexes ? u.regexes : [u.regex], Y = 0; Y < _.length; Y++) {
      var W = new RegExp(_[Y]), z = W.exec(e);
      if (z)
        return {
          name: t,
          value: u.singleRegexMatchValue ? z[1] : z,
          strValue: "" + e,
          bypass: r
        };
    }
    return null;
  } else
    return u.string ? {
      name: t,
      value: "" + e,
      strValue: "" + e,
      bypass: r
    } : u.enums ? A() : null;
};
var et = function t(e) {
  if (!(this instanceof t))
    return new t(e);
  if (!ni(e)) {
    Ge("A style must have a core reference");
    return;
  }
  this._private = {
    cy: e,
    coreStyle: {}
  }, this.length = 0, this.resetToDefault();
}, rt = et.prototype;
rt.instanceString = function() {
  return "style";
};
rt.clear = function() {
  for (var t = this._private, e = t.cy, r = e.elements(), a = 0; a < this.length; a++)
    this[a] = void 0;
  return this.length = 0, t.contextStyles = {}, t.propDiffs = {}, this.cleanElements(r, !0), r.forEach(function(n) {
    var i = n[0]._private;
    i.styleDirty = !0, i.appliedInitStyle = !1;
  }), this;
};
rt.resetToDefault = function() {
  return this.clear(), this.addDefaultStylesheet(), this;
};
rt.core = function(t) {
  return this._private.coreStyle[t] || this.getDefaultProperty(t);
};
rt.selector = function(t) {
  var e = t === "core" ? null : new Wt(t), r = this.length++;
  return this[r] = {
    selector: e,
    properties: [],
    mappedProperties: [],
    index: r
  }, this;
};
rt.css = function() {
  var t = this, e = arguments;
  if (e.length === 1)
    for (var r = e[0], a = 0; a < t.properties.length; a++) {
      var n = t.properties[a], i = r[n.name];
      i === void 0 && (i = r[ln(n.name)]), i !== void 0 && this.cssRule(n.name, i);
    }
  else
    e.length === 2 && this.cssRule(e[0], e[1]);
  return this;
};
rt.style = rt.css;
rt.cssRule = function(t, e) {
  var r = this.parse(t, e);
  if (r) {
    var a = this.length - 1;
    this[a].properties.push(r), this[a].properties[r.name] = r, r.name.match(/pie-(\d+)-background-size/) && r.value && (this._private.hasPie = !0), r.mapped && this[a].mappedProperties.push(r);
    var n = !this[a].selector;
    n && (this._private.coreStyle[r.name] = r);
  }
  return this;
};
rt.append = function(t) {
  return so(t) ? t.appendToStyle(this) : Me(t) ? this.appendFromJson(t) : ve(t) && this.appendFromString(t), this;
};
et.fromJson = function(t, e) {
  var r = new et(t);
  return r.fromJson(e), r;
};
et.fromString = function(t, e) {
  return new et(t).fromString(e);
};
[at, pa, pi, At, pn, yi, qe, yn].forEach(function(t) {
  de(rt, t);
});
et.types = rt.types;
et.properties = rt.properties;
et.propertyGroups = rt.propertyGroups;
et.propertyGroupNames = rt.propertyGroupNames;
et.propertyGroupKeys = rt.propertyGroupKeys;
var Qp = {
  style: function(e) {
    if (e) {
      var r = this.setStyle(e);
      r.update();
    }
    return this._private.style;
  },
  setStyle: function(e) {
    var r = this._private;
    return so(e) ? r.style = e.generateStyle(this) : Me(e) ? r.style = et.fromJson(this, e) : ve(e) ? r.style = et.fromString(this, e) : r.style = et(this), r.style;
  },
  // e.g. cy.data() changed => recalc ele mappers
  updateStyle: function() {
    this.mutableElements().updateStyle();
  }
}, Jp = "single", sr = {
  autolock: function(e) {
    if (e !== void 0)
      this._private.autolock = !!e;
    else
      return this._private.autolock;
    return this;
  },
  autoungrabify: function(e) {
    if (e !== void 0)
      this._private.autoungrabify = !!e;
    else
      return this._private.autoungrabify;
    return this;
  },
  autounselectify: function(e) {
    if (e !== void 0)
      this._private.autounselectify = !!e;
    else
      return this._private.autounselectify;
    return this;
  },
  selectionType: function(e) {
    var r = this._private;
    if (r.selectionType == null && (r.selectionType = Jp), e !== void 0)
      (e === "additive" || e === "single") && (r.selectionType = e);
    else
      return r.selectionType;
    return this;
  },
  panningEnabled: function(e) {
    if (e !== void 0)
      this._private.panningEnabled = !!e;
    else
      return this._private.panningEnabled;
    return this;
  },
  userPanningEnabled: function(e) {
    if (e !== void 0)
      this._private.userPanningEnabled = !!e;
    else
      return this._private.userPanningEnabled;
    return this;
  },
  zoomingEnabled: function(e) {
    if (e !== void 0)
      this._private.zoomingEnabled = !!e;
    else
      return this._private.zoomingEnabled;
    return this;
  },
  userZoomingEnabled: function(e) {
    if (e !== void 0)
      this._private.userZoomingEnabled = !!e;
    else
      return this._private.userZoomingEnabled;
    return this;
  },
  boxSelectionEnabled: function(e) {
    if (e !== void 0)
      this._private.boxSelectionEnabled = !!e;
    else
      return this._private.boxSelectionEnabled;
    return this;
  },
  pan: function() {
    var e = arguments, r = this._private.pan, a, n, i, s, o;
    switch (e.length) {
      case 0:
        return r;
      case 1:
        if (ve(e[0]))
          return a = e[0], r[a];
        if (De(e[0])) {
          if (!this._private.panningEnabled)
            return this;
          i = e[0], s = i.x, o = i.y, ae(s) && (r.x = s), ae(o) && (r.y = o), this.emit("pan viewport");
        }
        break;
      case 2:
        if (!this._private.panningEnabled)
          return this;
        a = e[0], n = e[1], (a === "x" || a === "y") && ae(n) && (r[a] = n), this.emit("pan viewport");
        break;
    }
    return this.notify("viewport"), this;
  },
  panBy: function(e, r) {
    var a = arguments, n = this._private.pan, i, s, o, l, u;
    if (!this._private.panningEnabled)
      return this;
    switch (a.length) {
      case 1:
        De(e) && (o = a[0], l = o.x, u = o.y, ae(l) && (n.x += l), ae(u) && (n.y += u), this.emit("pan viewport"));
        break;
      case 2:
        i = e, s = r, (i === "x" || i === "y") && ae(s) && (n[i] += s), this.emit("pan viewport");
        break;
    }
    return this.notify("viewport"), this;
  },
  fit: function(e, r) {
    var a = this.getFitViewport(e, r);
    if (a) {
      var n = this._private;
      n.zoom = a.zoom, n.pan = a.pan, this.emit("pan zoom viewport"), this.notify("viewport");
    }
    return this;
  },
  getFitViewport: function(e, r) {
    if (ae(e) && r === void 0 && (r = e, e = void 0), !(!this._private.panningEnabled || !this._private.zoomingEnabled)) {
      var a;
      if (ve(e)) {
        var n = e;
        e = this.$(n);
      } else if (Xc(e)) {
        var i = e;
        a = {
          x1: i.x1,
          y1: i.y1,
          x2: i.x2,
          y2: i.y2
        }, a.w = a.x2 - a.x1, a.h = a.y2 - a.y1;
      } else
        ht(e) || (e = this.mutableElements());
      if (!(ht(e) && e.empty())) {
        a = a || e.boundingBox();
        var s = this.width(), o = this.height(), l;
        if (r = ae(r) ? r : 0, !isNaN(s) && !isNaN(o) && s > 0 && o > 0 && !isNaN(a.w) && !isNaN(a.h) && a.w > 0 && a.h > 0) {
          l = Math.min((s - 2 * r) / a.w, (o - 2 * r) / a.h), l = l > this._private.maxZoom ? this._private.maxZoom : l, l = l < this._private.minZoom ? this._private.minZoom : l;
          var u = {
            // now pan to middle
            x: (s - l * (a.x1 + a.x2)) / 2,
            y: (o - l * (a.y1 + a.y2)) / 2
          };
          return {
            zoom: l,
            pan: u
          };
        }
      }
    }
  },
  zoomRange: function(e, r) {
    var a = this._private;
    if (r == null) {
      var n = e;
      e = n.min, r = n.max;
    }
    return ae(e) && ae(r) && e <= r ? (a.minZoom = e, a.maxZoom = r) : ae(e) && r === void 0 && e <= a.maxZoom ? a.minZoom = e : ae(r) && e === void 0 && r >= a.minZoom && (a.maxZoom = r), this;
  },
  minZoom: function(e) {
    return e === void 0 ? this._private.minZoom : this.zoomRange({
      min: e
    });
  },
  maxZoom: function(e) {
    return e === void 0 ? this._private.maxZoom : this.zoomRange({
      max: e
    });
  },
  getZoomedViewport: function(e) {
    var r = this._private, a = r.pan, n = r.zoom, i, s, o = !1;
    if (r.zoomingEnabled || (o = !0), ae(e) ? s = e : De(e) && (s = e.level, e.position != null ? i = fn(e.position, n, a) : e.renderedPosition != null && (i = e.renderedPosition), i != null && !r.panningEnabled && (o = !0)), s = s > r.maxZoom ? r.maxZoom : s, s = s < r.minZoom ? r.minZoom : s, o || !ae(s) || s === n || i != null && (!ae(i.x) || !ae(i.y)))
      return null;
    if (i != null) {
      var l = a, u = n, f = s, h = {
        x: -f / u * (i.x - l.x) + i.x,
        y: -f / u * (i.y - l.y) + i.y
      };
      return {
        zoomed: !0,
        panned: !0,
        zoom: f,
        pan: h
      };
    } else
      return {
        zoomed: !0,
        panned: !1,
        zoom: s,
        pan: a
      };
  },
  zoom: function(e) {
    if (e === void 0)
      return this._private.zoom;
    var r = this.getZoomedViewport(e), a = this._private;
    return r == null || !r.zoomed ? this : (a.zoom = r.zoom, r.panned && (a.pan.x = r.pan.x, a.pan.y = r.pan.y), this.emit("zoom" + (r.panned ? " pan" : "") + " viewport"), this.notify("viewport"), this);
  },
  viewport: function(e) {
    var r = this._private, a = !0, n = !0, i = [], s = !1, o = !1;
    if (!e)
      return this;
    if (ae(e.zoom) || (a = !1), De(e.pan) || (n = !1), !a && !n)
      return this;
    if (a) {
      var l = e.zoom;
      l < r.minZoom || l > r.maxZoom || !r.zoomingEnabled ? s = !0 : (r.zoom = l, i.push("zoom"));
    }
    if (n && (!s || !e.cancelOnFailedZoom) && r.panningEnabled) {
      var u = e.pan;
      ae(u.x) && (r.pan.x = u.x, o = !1), ae(u.y) && (r.pan.y = u.y, o = !1), o || i.push("pan");
    }
    return i.length > 0 && (i.push("viewport"), this.emit(i.join(" ")), this.notify("viewport")), this;
  },
  center: function(e) {
    var r = this.getCenterPan(e);
    return r && (this._private.pan = r, this.emit("pan viewport"), this.notify("viewport")), this;
  },
  getCenterPan: function(e, r) {
    if (this._private.panningEnabled) {
      if (ve(e)) {
        var a = e;
        e = this.mutableElements().filter(a);
      } else
        ht(e) || (e = this.mutableElements());
      if (e.length !== 0) {
        var n = e.boundingBox(), i = this.width(), s = this.height();
        r = r === void 0 ? this._private.zoom : r;
        var o = {
          // middle
          x: (i - r * (n.x1 + n.x2)) / 2,
          y: (s - r * (n.y1 + n.y2)) / 2
        };
        return o;
      }
    }
  },
  reset: function() {
    return !this._private.panningEnabled || !this._private.zoomingEnabled ? this : (this.viewport({
      pan: {
        x: 0,
        y: 0
      },
      zoom: 1
    }), this);
  },
  invalidateSize: function() {
    this._private.sizeCache = null;
  },
  size: function() {
    var e = this._private, r = e.container, a = this;
    return e.sizeCache = e.sizeCache || (r ? function() {
      var n = a.window().getComputedStyle(r), i = function(o) {
        return parseFloat(n.getPropertyValue(o));
      };
      return {
        width: r.clientWidth - i("padding-left") - i("padding-right"),
        height: r.clientHeight - i("padding-top") - i("padding-bottom")
      };
    }() : {
      // fallback if no container (not 0 b/c can be used for dividing etc)
      width: 1,
      height: 1
    });
  },
  width: function() {
    return this.size().width;
  },
  height: function() {
    return this.size().height;
  },
  extent: function() {
    var e = this._private.pan, r = this._private.zoom, a = this.renderedExtent(), n = {
      x1: (a.x1 - e.x) / r,
      x2: (a.x2 - e.x) / r,
      y1: (a.y1 - e.y) / r,
      y2: (a.y2 - e.y) / r
    };
    return n.w = n.x2 - n.x1, n.h = n.y2 - n.y1, n;
  },
  renderedExtent: function() {
    var e = this.width(), r = this.height();
    return {
      x1: 0,
      y1: 0,
      x2: e,
      y2: r,
      w: e,
      h: r
    };
  },
  multiClickDebounceTime: function(e) {
    if (e)
      this._private.multiClickDebounceTime = e;
    else
      return this._private.multiClickDebounceTime;
    return this;
  }
};
sr.centre = sr.center;
sr.autolockNodes = sr.autolock;
sr.autoungrabifyNodes = sr.autoungrabify;
var sa = {
  data: Oe.data({
    field: "data",
    bindingEvent: "data",
    allowBinding: !0,
    allowSetting: !0,
    settingEvent: "data",
    settingTriggersEvent: !0,
    triggerFnName: "trigger",
    allowGetting: !0,
    updateStyle: !0
  }),
  removeData: Oe.removeData({
    field: "data",
    event: "data",
    triggerFnName: "trigger",
    triggerEvent: !0,
    updateStyle: !0
  }),
  scratch: Oe.data({
    field: "scratch",
    bindingEvent: "scratch",
    allowBinding: !0,
    allowSetting: !0,
    settingEvent: "scratch",
    settingTriggersEvent: !0,
    triggerFnName: "trigger",
    allowGetting: !0,
    updateStyle: !0
  }),
  removeScratch: Oe.removeData({
    field: "scratch",
    event: "scratch",
    triggerFnName: "trigger",
    triggerEvent: !0,
    updateStyle: !0
  })
};
sa.attr = sa.data;
sa.removeAttr = sa.removeData;
var oa = function(e) {
  var r = this;
  e = de({}, e);
  var a = e.container;
  a && !Ha(a) && Ha(a[0]) && (a = a[0]);
  var n = a ? a._cyreg : null;
  n = n || {}, n && n.cy && (n.cy.destroy(), n = {});
  var i = n.readies = n.readies || [];
  a && (a._cyreg = n), n.cy = r;
  var s = $e !== void 0 && a !== void 0 && !e.headless, o = e;
  o.layout = de({
    name: s ? "grid" : "null"
  }, o.layout), o.renderer = de({
    name: s ? "canvas" : "null"
  }, o.renderer);
  var l = function(d, g, p) {
    return g !== void 0 ? g : p !== void 0 ? p : d;
  }, u = this._private = {
    container: a,
    // html dom ele container
    ready: !1,
    // whether ready has been triggered
    options: o,
    // cached options
    elements: new Ze(this),
    // elements in the graph
    listeners: [],
    // list of listeners
    aniEles: new Ze(this),
    // elements being animated
    data: o.data || {},
    // data for the core
    scratch: {},
    // scratch object for core
    layout: null,
    renderer: null,
    destroyed: !1,
    // whether destroy was called
    notificationsEnabled: !0,
    // whether notifications are sent to the renderer
    minZoom: 1e-50,
    maxZoom: 1e50,
    zoomingEnabled: l(!0, o.zoomingEnabled),
    userZoomingEnabled: l(!0, o.userZoomingEnabled),
    panningEnabled: l(!0, o.panningEnabled),
    userPanningEnabled: l(!0, o.userPanningEnabled),
    boxSelectionEnabled: l(!0, o.boxSelectionEnabled),
    autolock: l(!1, o.autolock, o.autolockNodes),
    autoungrabify: l(!1, o.autoungrabify, o.autoungrabifyNodes),
    autounselectify: l(!1, o.autounselectify),
    styleEnabled: o.styleEnabled === void 0 ? s : o.styleEnabled,
    zoom: ae(o.zoom) ? o.zoom : 1,
    pan: {
      x: De(o.pan) && ae(o.pan.x) ? o.pan.x : 0,
      y: De(o.pan) && ae(o.pan.y) ? o.pan.y : 0
    },
    animation: {
      // object for currently-running animations
      current: [],
      queue: []
    },
    hasCompoundNodes: !1,
    multiClickDebounceTime: l(250, o.multiClickDebounceTime)
  };
  this.createEmitter(), this.selectionType(o.selectionType), this.zoomRange({
    min: o.minZoom,
    max: o.maxZoom
  });
  var f = function(d, g) {
    var p = d.some(Wc);
    if (p)
      return Rr.all(d).then(g);
    g(d);
  };
  u.styleEnabled && r.setStyle([]);
  var h = de({}, o, o.renderer);
  r.initRenderer(h);
  var c = function(d, g, p) {
    r.notifications(!1);
    var y = r.mutableElements();
    y.length > 0 && y.remove(), d != null && (De(d) || Me(d)) && r.add(d), r.one("layoutready", function(m) {
      r.notifications(!0), r.emit(m), r.one("load", g), r.emitAndNotify("load");
    }).one("layoutstop", function() {
      r.one("done", p), r.emit("done");
    });
    var E = de({}, r._private.options.layout);
    E.eles = r.elements(), r.layout(E).run();
  };
  f([o.style, o.elements], function(v) {
    var d = v[0], g = v[1];
    u.styleEnabled && r.style().append(d), c(g, function() {
      r.startAnimationLoop(), u.ready = !0, Be(o.ready) && r.on("ready", o.ready);
      for (var p = 0; p < i.length; p++) {
        var y = i[p];
        r.on("ready", y);
      }
      n && (n.readies = []), r.emit("ready");
    }, o.done);
  });
}, Qa = oa.prototype;
de(Qa, {
  instanceString: function() {
    return "core";
  },
  isReady: function() {
    return this._private.ready;
  },
  destroyed: function() {
    return this._private.destroyed;
  },
  ready: function(e) {
    return this.isReady() ? this.emitter().emit("ready", [], e) : this.on("ready", e), this;
  },
  destroy: function() {
    var e = this;
    if (!e.destroyed())
      return e.stopAnimationLoop(), e.destroyRenderer(), this.emit("destroy"), e._private.destroyed = !0, e;
  },
  hasElementWithId: function(e) {
    return this._private.elements.hasElementWithId(e);
  },
  getElementById: function(e) {
    return this._private.elements.getElementById(e);
  },
  hasCompoundNodes: function() {
    return this._private.hasCompoundNodes;
  },
  headless: function() {
    return this._private.renderer.isHeadless();
  },
  styleEnabled: function() {
    return this._private.styleEnabled;
  },
  addToPool: function(e) {
    return this._private.elements.merge(e), this;
  },
  removeFromPool: function(e) {
    return this._private.elements.unmerge(e), this;
  },
  container: function() {
    return this._private.container || null;
  },
  window: function() {
    var e = this._private.container;
    if (e == null)
      return $e;
    var r = this._private.container.ownerDocument;
    return r === void 0 || r == null ? $e : r.defaultView || $e;
  },
  mount: function(e) {
    if (e != null) {
      var r = this, a = r._private, n = a.options;
      return !Ha(e) && Ha(e[0]) && (e = e[0]), r.stopAnimationLoop(), r.destroyRenderer(), a.container = e, a.styleEnabled = !0, r.invalidateSize(), r.initRenderer(de({}, n, n.renderer, {
        // allow custom renderer name to be re-used, otherwise use canvas
        name: n.renderer.name === "null" ? "canvas" : n.renderer.name
      })), r.startAnimationLoop(), r.style(n.style), r.emit("mount"), r;
    }
  },
  unmount: function() {
    var e = this;
    return e.stopAnimationLoop(), e.destroyRenderer(), e.initRenderer({
      name: "null"
    }), e.emit("unmount"), e;
  },
  options: function() {
    return St(this._private.options);
  },
  json: function(e) {
    var r = this, a = r._private, n = r.mutableElements(), i = function(T) {
      return r.getElementById(T.id());
    };
    if (De(e)) {
      if (r.startBatch(), e.elements) {
        var s = {}, o = function(T, C) {
          for (var S = [], b = [], x = 0; x < T.length; x++) {
            var w = T[x];
            if (!w.data.id) {
              Ne("cy.json() cannot handle elements without an ID attribute");
              continue;
            }
            var D = "" + w.data.id, A = r.getElementById(D);
            s[D] = !0, A.length !== 0 ? b.push({
              ele: A,
              json: w
            }) : (C && (w.group = C), S.push(w));
          }
          r.add(S);
          for (var L = 0; L < b.length; L++) {
            var I = b[L], O = I.ele, P = I.json;
            O.json(P);
          }
        };
        if (Me(e.elements))
          o(e.elements);
        else
          for (var l = ["nodes", "edges"], u = 0; u < l.length; u++) {
            var f = l[u], h = e.elements[f];
            Me(h) && o(h, f);
          }
        var c = r.collection();
        n.filter(function(m) {
          return !s[m.id()];
        }).forEach(function(m) {
          m.isParent() ? c.merge(m) : m.remove();
        }), c.forEach(function(m) {
          return m.children().move({
            parent: null
          });
        }), c.forEach(function(m) {
          return i(m).remove();
        });
      }
      e.style && r.style(e.style), e.zoom != null && e.zoom !== a.zoom && r.zoom(e.zoom), e.pan && (e.pan.x !== a.pan.x || e.pan.y !== a.pan.y) && r.pan(e.pan), e.data && r.data(e.data);
      for (var v = ["minZoom", "maxZoom", "zoomingEnabled", "userZoomingEnabled", "panningEnabled", "userPanningEnabled", "boxSelectionEnabled", "autolock", "autoungrabify", "autounselectify", "multiClickDebounceTime"], d = 0; d < v.length; d++) {
        var g = v[d];
        e[g] != null && r[g](e[g]);
      }
      return r.endBatch(), this;
    } else {
      var p = !!e, y = {};
      p ? y.elements = this.elements().map(function(m) {
        return m.json();
      }) : (y.elements = {}, n.forEach(function(m) {
        var T = m.group();
        y.elements[T] || (y.elements[T] = []), y.elements[T].push(m.json());
      })), this._private.styleEnabled && (y.style = r.style().json()), y.data = St(r.data());
      var E = a.options;
      return y.zoomingEnabled = a.zoomingEnabled, y.userZoomingEnabled = a.userZoomingEnabled, y.zoom = a.zoom, y.minZoom = a.minZoom, y.maxZoom = a.maxZoom, y.panningEnabled = a.panningEnabled, y.userPanningEnabled = a.userPanningEnabled, y.pan = St(a.pan), y.boxSelectionEnabled = a.boxSelectionEnabled, y.renderer = St(E.renderer), y.hideEdgesOnViewport = E.hideEdgesOnViewport, y.textureOnViewport = E.textureOnViewport, y.wheelSensitivity = E.wheelSensitivity, y.motionBlur = E.motionBlur, y.multiClickDebounceTime = E.multiClickDebounceTime, y;
    }
  }
});
Qa.$id = Qa.getElementById;
[Vp, Xp, jo, Hn, za, qp, Yn, $a, Qp, sr, sa].forEach(function(t) {
  de(Qa, t);
});
var jp = {
  fit: !0,
  // whether to fit the viewport to the graph
  directed: !1,
  // whether the tree is directed downwards (or edges can point in any direction if false)
  padding: 30,
  // padding on fit
  circle: !1,
  // put depths in concentric circles if true, put depths top down if false
  grid: !1,
  // whether to create an even grid into which the DAG is placed (circle:false only)
  spacingFactor: 1.75,
  // positive spacing factor, larger => more space between nodes (N.B. n/a if causes overlap)
  boundingBox: void 0,
  // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  avoidOverlap: !0,
  // prevents node overlap, may overflow boundingBox if not enough space
  nodeDimensionsIncludeLabels: !1,
  // Excludes the label when calculating node bounding boxes for the layout algorithm
  roots: void 0,
  // the roots of the trees
  depthSort: void 0,
  // a sorting function to order nodes at equal depth. e.g. function(a, b){ return a.data('weight') - b.data('weight') }
  animate: !1,
  // whether to transition the node positions
  animationDuration: 500,
  // duration of animation in ms if enabled
  animationEasing: void 0,
  // easing of animation if enabled,
  animateFilter: function(e, r) {
    return !0;
  },
  // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: void 0,
  // callback on layoutready
  stop: void 0,
  // callback on layoutstop
  transform: function(e, r) {
    return r;
  }
  // transform a given node position. Useful for changing flow direction in discrete layouts
}, ey = {
  maximal: !1,
  // whether to shift nodes down their natural BFS depths in order to avoid upwards edges (DAGS only); setting acyclic to true sets maximal to true also
  acyclic: !1
  // whether the tree is acyclic and thus a node could be shifted (due to the maximal option) multiple times without causing an infinite loop; setting to true sets maximal to true also; if you are uncertain whether a tree is acyclic, set to false to avoid potential infinite loops
}, yr = function(e) {
  return e.scratch("breadthfirst");
}, As = function(e, r) {
  return e.scratch("breadthfirst", r);
};
function el(t) {
  this.options = de({}, jp, ey, t);
}
el.prototype.run = function() {
  var t = this.options, e = t, r = t.cy, a = e.eles, n = a.nodes().filter(function(te) {
    return !te.isParent();
  }), i = a, s = e.directed, o = e.acyclic || e.maximal || e.maximalAdjustments > 0, l = ft(e.boundingBox ? e.boundingBox : {
    x1: 0,
    y1: 0,
    w: r.width(),
    h: r.height()
  }), u;
  if (ht(e.roots))
    u = e.roots;
  else if (Me(e.roots)) {
    for (var f = [], h = 0; h < e.roots.length; h++) {
      var c = e.roots[h], v = r.getElementById(c);
      f.push(v);
    }
    u = r.collection(f);
  } else if (ve(e.roots))
    u = r.$(e.roots);
  else if (s)
    u = n.roots();
  else {
    var d = a.components();
    u = r.collection();
    for (var g = function(re) {
      var ue = d[re], le = ue.maxDegree(!1), se = ue.filter(function(fe) {
        return fe.degree(!1) === le;
      });
      u = u.add(se);
    }, p = 0; p < d.length; p++)
      g(p);
  }
  var y = [], E = {}, m = function(re, ue) {
    y[ue] == null && (y[ue] = []);
    var le = y[ue].length;
    y[ue].push(re), As(re, {
      index: le,
      depth: ue
    });
  }, T = function(re, ue) {
    var le = yr(re), se = le.depth, fe = le.index;
    y[se][fe] = null, m(re, ue);
  };
  i.bfs({
    roots: u,
    directed: e.directed,
    visit: function(re, ue, le, se, fe) {
      var xe = re[0], Ee = xe.id();
      m(xe, fe), E[Ee] = !0;
    }
  });
  for (var C = [], S = 0; S < n.length; S++) {
    var b = n[S];
    E[b.id()] || C.push(b);
  }
  var x = function(re) {
    for (var ue = y[re], le = 0; le < ue.length; le++) {
      var se = ue[le];
      if (se == null) {
        ue.splice(le, 1), le--;
        continue;
      }
      As(se, {
        depth: re,
        index: le
      });
    }
  }, w = function() {
    for (var re = 0; re < y.length; re++)
      x(re);
  }, D = function(re, ue) {
    for (var le = yr(re), se = re.incomers().filter(function(N) {
      return N.isNode() && a.has(N);
    }), fe = -1, xe = re.id(), Ee = 0; Ee < se.length; Ee++) {
      var ge = se[Ee], we = yr(ge);
      fe = Math.max(fe, we.depth);
    }
    if (le.depth <= fe) {
      if (!e.acyclic && ue[xe])
        return null;
      var H = fe + 1;
      return T(re, H), ue[xe] = H, !0;
    }
    return !1;
  };
  if (s && o) {
    var A = [], L = {}, I = function(re) {
      return A.push(re);
    }, O = function() {
      return A.shift();
    };
    for (n.forEach(function(te) {
      return A.push(te);
    }); A.length > 0; ) {
      var P = O(), R = D(P, L);
      if (R)
        P.outgoers().filter(function(te) {
          return te.isNode() && a.has(te);
        }).forEach(I);
      else if (R === null) {
        Ne("Detected double maximal shift for node `" + P.id() + "`.  Bailing maximal adjustment due to cycle.  Use `options.maximal: true` only on DAGs.");
        break;
      }
    }
  }
  w();
  var M = 0;
  if (e.avoidOverlap)
    for (var k = 0; k < n.length; k++) {
      var B = n[k], G = B.layoutDimensions(e), F = G.w, $ = G.h;
      M = Math.max(M, F, $);
    }
  var U = {}, _ = function(re) {
    if (U[re.id()])
      return U[re.id()];
    for (var ue = yr(re).depth, le = re.neighborhood(), se = 0, fe = 0, xe = 0; xe < le.length; xe++) {
      var Ee = le[xe];
      if (!(Ee.isEdge() || Ee.isParent() || !n.has(Ee))) {
        var ge = yr(Ee);
        if (ge != null) {
          var we = ge.index, H = ge.depth;
          if (!(we == null || H == null)) {
            var N = y[H].length;
            H < ue && (se += we / N, fe++);
          }
        }
      }
    }
    return fe = Math.max(1, fe), se = se / fe, fe === 0 && (se = 0), U[re.id()] = se, se;
  }, Y = function(re, ue) {
    var le = _(re), se = _(ue), fe = le - se;
    return fe === 0 ? lo(re.id(), ue.id()) : fe;
  };
  e.depthSort !== void 0 && (Y = e.depthSort);
  for (var W = 0; W < y.length; W++)
    y[W].sort(Y), x(W);
  for (var z = [], K = 0; K < C.length; K++)
    z.push(C[K]);
  y.unshift(z), w();
  for (var j = 0, Q = 0; Q < y.length; Q++)
    j = Math.max(y[Q].length, j);
  var ee = {
    x: l.x1 + l.w / 2,
    y: l.x1 + l.h / 2
  }, ne = y.reduce(function(te, re) {
    return Math.max(te, re.length);
  }, 0), ce = function(re) {
    var ue = yr(re), le = ue.depth, se = ue.index, fe = y[le].length, xe = Math.max(l.w / ((e.grid ? ne : fe) + 1), M), Ee = Math.max(l.h / (y.length + 1), M), ge = Math.min(l.w / 2 / y.length, l.h / 2 / y.length);
    if (ge = Math.max(ge, M), e.circle) {
      var H = ge * le + ge - (y.length > 0 && y[0].length <= 3 ? ge / 2 : 0), N = 2 * Math.PI / y[le].length * se;
      return le === 0 && y[0].length === 1 && (H = 1), {
        x: ee.x + H * Math.cos(N),
        y: ee.y + H * Math.sin(N)
      };
    } else {
      var we = {
        x: ee.x + (se + 1 - (fe + 1) / 2) * xe,
        y: (le + 1) * Ee
      };
      return we;
    }
  };
  return a.nodes().layoutPositions(this, e, ce), this;
};
var ty = {
  fit: !0,
  // whether to fit the viewport to the graph
  padding: 30,
  // the padding on fit
  boundingBox: void 0,
  // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  avoidOverlap: !0,
  // prevents node overlap, may overflow boundingBox and radius if not enough space
  nodeDimensionsIncludeLabels: !1,
  // Excludes the label when calculating node bounding boxes for the layout algorithm
  spacingFactor: void 0,
  // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
  radius: void 0,
  // the radius of the circle
  startAngle: 3 / 2 * Math.PI,
  // where nodes start in radians
  sweep: void 0,
  // how many radians should be between the first and last node (defaults to full circle)
  clockwise: !0,
  // whether the layout should go clockwise (true) or counterclockwise/anticlockwise (false)
  sort: void 0,
  // a sorting function to order the nodes; e.g. function(a, b){ return a.data('weight') - b.data('weight') }
  animate: !1,
  // whether to transition the node positions
  animationDuration: 500,
  // duration of animation in ms if enabled
  animationEasing: void 0,
  // easing of animation if enabled
  animateFilter: function(e, r) {
    return !0;
  },
  // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: void 0,
  // callback on layoutready
  stop: void 0,
  // callback on layoutstop
  transform: function(e, r) {
    return r;
  }
  // transform a given node position. Useful for changing flow direction in discrete layouts 
};
function tl(t) {
  this.options = de({}, ty, t);
}
tl.prototype.run = function() {
  var t = this.options, e = t, r = t.cy, a = e.eles, n = e.counterclockwise !== void 0 ? !e.counterclockwise : e.clockwise, i = a.nodes().not(":parent");
  e.sort && (i = i.sort(e.sort));
  for (var s = ft(e.boundingBox ? e.boundingBox : {
    x1: 0,
    y1: 0,
    w: r.width(),
    h: r.height()
  }), o = {
    x: s.x1 + s.w / 2,
    y: s.y1 + s.h / 2
  }, l = e.sweep === void 0 ? 2 * Math.PI - 2 * Math.PI / i.length : e.sweep, u = l / Math.max(1, i.length - 1), f, h = 0, c = 0; c < i.length; c++) {
    var v = i[c], d = v.layoutDimensions(e), g = d.w, p = d.h;
    h = Math.max(h, g, p);
  }
  if (ae(e.radius) ? f = e.radius : i.length <= 1 ? f = 0 : f = Math.min(s.h, s.w) / 2 - h, i.length > 1 && e.avoidOverlap) {
    h *= 1.75;
    var y = Math.cos(u) - Math.cos(0), E = Math.sin(u) - Math.sin(0), m = Math.sqrt(h * h / (y * y + E * E));
    f = Math.max(m, f);
  }
  var T = function(S, b) {
    var x = e.startAngle + b * u * (n ? 1 : -1), w = f * Math.cos(x), D = f * Math.sin(x), A = {
      x: o.x + w,
      y: o.y + D
    };
    return A;
  };
  return a.nodes().layoutPositions(this, e, T), this;
};
var ry = {
  fit: !0,
  // whether to fit the viewport to the graph
  padding: 30,
  // the padding on fit
  startAngle: 3 / 2 * Math.PI,
  // where nodes start in radians
  sweep: void 0,
  // how many radians should be between the first and last node (defaults to full circle)
  clockwise: !0,
  // whether the layout should go clockwise (true) or counterclockwise/anticlockwise (false)
  equidistant: !1,
  // whether levels have an equal radial distance betwen them, may cause bounding box overflow
  minNodeSpacing: 10,
  // min spacing between outside of nodes (used for radius adjustment)
  boundingBox: void 0,
  // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  avoidOverlap: !0,
  // prevents node overlap, may overflow boundingBox if not enough space
  nodeDimensionsIncludeLabels: !1,
  // Excludes the label when calculating node bounding boxes for the layout algorithm
  height: void 0,
  // height of layout area (overrides container height)
  width: void 0,
  // width of layout area (overrides container width)
  spacingFactor: void 0,
  // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
  concentric: function(e) {
    return e.degree();
  },
  levelWidth: function(e) {
    return e.maxDegree() / 4;
  },
  animate: !1,
  // whether to transition the node positions
  animationDuration: 500,
  // duration of animation in ms if enabled
  animationEasing: void 0,
  // easing of animation if enabled
  animateFilter: function(e, r) {
    return !0;
  },
  // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: void 0,
  // callback on layoutready
  stop: void 0,
  // callback on layoutstop
  transform: function(e, r) {
    return r;
  }
  // transform a given node position. Useful for changing flow direction in discrete layouts
};
function rl(t) {
  this.options = de({}, ry, t);
}
rl.prototype.run = function() {
  for (var t = this.options, e = t, r = e.counterclockwise !== void 0 ? !e.counterclockwise : e.clockwise, a = t.cy, n = e.eles, i = n.nodes().not(":parent"), s = ft(e.boundingBox ? e.boundingBox : {
    x1: 0,
    y1: 0,
    w: a.width(),
    h: a.height()
  }), o = {
    x: s.x1 + s.w / 2,
    y: s.y1 + s.h / 2
  }, l = [], u = 0, f = 0; f < i.length; f++) {
    var h = i[f], c = void 0;
    c = e.concentric(h), l.push({
      value: c,
      node: h
    }), h._private.scratch.concentric = c;
  }
  i.updateStyle();
  for (var v = 0; v < i.length; v++) {
    var d = i[v], g = d.layoutDimensions(e);
    u = Math.max(u, g.w, g.h);
  }
  l.sort(function(te, re) {
    return re.value - te.value;
  });
  for (var p = e.levelWidth(i), y = [[]], E = y[0], m = 0; m < l.length; m++) {
    var T = l[m];
    if (E.length > 0) {
      var C = Math.abs(E[0].value - T.value);
      C >= p && (E = [], y.push(E));
    }
    E.push(T);
  }
  var S = u + e.minNodeSpacing;
  if (!e.avoidOverlap) {
    var b = y.length > 0 && y[0].length > 1, x = Math.min(s.w, s.h) / 2 - S, w = x / (y.length + b ? 1 : 0);
    S = Math.min(S, w);
  }
  for (var D = 0, A = 0; A < y.length; A++) {
    var L = y[A], I = e.sweep === void 0 ? 2 * Math.PI - 2 * Math.PI / L.length : e.sweep, O = L.dTheta = I / Math.max(1, L.length - 1);
    if (L.length > 1 && e.avoidOverlap) {
      var P = Math.cos(O) - Math.cos(0), R = Math.sin(O) - Math.sin(0), M = Math.sqrt(S * S / (P * P + R * R));
      D = Math.max(M, D);
    }
    L.r = D, D += S;
  }
  if (e.equidistant) {
    for (var k = 0, B = 0, G = 0; G < y.length; G++) {
      var F = y[G], $ = F.r - B;
      k = Math.max(k, $);
    }
    B = 0;
    for (var U = 0; U < y.length; U++) {
      var _ = y[U];
      U === 0 && (B = _.r), _.r = B, B += k;
    }
  }
  for (var Y = {}, W = 0; W < y.length; W++)
    for (var z = y[W], K = z.dTheta, j = z.r, Q = 0; Q < z.length; Q++) {
      var ee = z[Q], ne = e.startAngle + (r ? 1 : -1) * K * Q, ce = {
        x: o.x + j * Math.cos(ne),
        y: o.y + j * Math.sin(ne)
      };
      Y[ee.node.id()] = ce;
    }
  return n.nodes().layoutPositions(this, e, function(te) {
    var re = te.id();
    return Y[re];
  }), this;
};
var Mn, ay = {
  // Called on `layoutready`
  ready: function() {
  },
  // Called on `layoutstop`
  stop: function() {
  },
  // Whether to animate while running the layout
  // true : Animate continuously as the layout is running
  // false : Just show the end result
  // 'end' : Animate with the end result, from the initial positions to the end positions
  animate: !0,
  // Easing of the animation for animate:'end'
  animationEasing: void 0,
  // The duration of the animation for animate:'end'
  animationDuration: void 0,
  // A function that determines whether the node should be animated
  // All nodes animated by default on animate enabled
  // Non-animated nodes are positioned immediately when the layout starts
  animateFilter: function(e, r) {
    return !0;
  },
  // The layout animates only after this many milliseconds for animate:true
  // (prevents flashing on fast runs)
  animationThreshold: 250,
  // Number of iterations between consecutive screen positions update
  refresh: 20,
  // Whether to fit the network view after when done
  fit: !0,
  // Padding on fit
  padding: 30,
  // Constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  boundingBox: void 0,
  // Excludes the label when calculating node bounding boxes for the layout algorithm
  nodeDimensionsIncludeLabels: !1,
  // Randomize the initial positions of the nodes (true) or use existing positions (false)
  randomize: !1,
  // Extra spacing between components in non-compound graphs
  componentSpacing: 40,
  // Node repulsion (non overlapping) multiplier
  nodeRepulsion: function(e) {
    return 2048;
  },
  // Node repulsion (overlapping) multiplier
  nodeOverlap: 4,
  // Ideal edge (non nested) length
  idealEdgeLength: function(e) {
    return 32;
  },
  // Divisor to compute edge forces
  edgeElasticity: function(e) {
    return 32;
  },
  // Nesting factor (multiplier) to compute ideal edge length for nested edges
  nestingFactor: 1.2,
  // Gravity force (constant)
  gravity: 1,
  // Maximum number of iterations to perform
  numIter: 1e3,
  // Initial temperature (maximum node displacement)
  initialTemp: 1e3,
  // Cooling factor (how the temperature is reduced between consecutive iterations
  coolingFactor: 0.99,
  // Lower temperature threshold (below this point the layout will end)
  minTemp: 1
};
function mn(t) {
  this.options = de({}, ay, t), this.options.layout = this;
  var e = this.options.eles.nodes(), r = this.options.eles.edges(), a = r.filter(function(n) {
    var i = n.source().data("id"), s = n.target().data("id"), o = e.some(function(u) {
      return u.data("id") === i;
    }), l = e.some(function(u) {
      return u.data("id") === s;
    });
    return !o || !l;
  });
  this.options.eles = this.options.eles.not(a);
}
mn.prototype.run = function() {
  var t = this.options, e = t.cy, r = this;
  r.stopped = !1, (t.animate === !0 || t.animate === !1) && r.emit({
    type: "layoutstart",
    layout: r
  }), t.debug === !0 ? Mn = !0 : Mn = !1;
  var a = ny(e, r, t);
  Mn && oy(a), t.randomize && ly(a);
  var n = Mt(), i = function() {
    uy(a, e, t), t.fit === !0 && e.fit(t.padding);
  }, s = function(c) {
    return !(r.stopped || c >= t.numIter || (fy(a, t), a.temperature = a.temperature * t.coolingFactor, a.temperature < t.minTemp));
  }, o = function() {
    if (t.animate === !0 || t.animate === !1)
      i(), r.one("layoutstop", t.stop), r.emit({
        type: "layoutstop",
        layout: r
      });
    else {
      var c = t.eles.nodes(), v = al(a, t, c);
      c.layoutPositions(r, t, v);
    }
  }, l = 0, u = !0;
  if (t.animate === !0) {
    var f = function h() {
      for (var c = 0; u && c < t.refresh; )
        u = s(l), l++, c++;
      if (!u)
        Ns(a, t), o();
      else {
        var v = Mt();
        v - n >= t.animationThreshold && i(), Ya(h);
      }
    };
    f();
  } else {
    for (; u; )
      u = s(l), l++;
    Ns(a, t), o();
  }
  return this;
};
mn.prototype.stop = function() {
  return this.stopped = !0, this.thread && this.thread.stop(), this.emit("layoutstop"), this;
};
mn.prototype.destroy = function() {
  return this.thread && this.thread.stop(), this;
};
var ny = function(e, r, a) {
  for (var n = a.eles.edges(), i = a.eles.nodes(), s = ft(a.boundingBox ? a.boundingBox : {
    x1: 0,
    y1: 0,
    w: e.width(),
    h: e.height()
  }), o = {
    isCompound: e.hasCompoundNodes(),
    layoutNodes: [],
    idToIndex: {},
    nodeSize: i.size(),
    graphSet: [],
    indexToGraph: [],
    layoutEdges: [],
    edgeSize: n.size(),
    temperature: a.initialTemp,
    clientWidth: s.w,
    clientHeight: s.h,
    boundingBox: s
  }, l = a.eles.components(), u = {}, f = 0; f < l.length; f++)
    for (var h = l[f], c = 0; c < h.length; c++) {
      var v = h[c];
      u[v.id()] = f;
    }
  for (var f = 0; f < o.nodeSize; f++) {
    var d = i[f], g = d.layoutDimensions(a), p = {};
    p.isLocked = d.locked(), p.id = d.data("id"), p.parentId = d.data("parent"), p.cmptId = u[d.id()], p.children = [], p.positionX = d.position("x"), p.positionY = d.position("y"), p.offsetX = 0, p.offsetY = 0, p.height = g.w, p.width = g.h, p.maxX = p.positionX + p.width / 2, p.minX = p.positionX - p.width / 2, p.maxY = p.positionY + p.height / 2, p.minY = p.positionY - p.height / 2, p.padLeft = parseFloat(d.style("padding")), p.padRight = parseFloat(d.style("padding")), p.padTop = parseFloat(d.style("padding")), p.padBottom = parseFloat(d.style("padding")), p.nodeRepulsion = Be(a.nodeRepulsion) ? a.nodeRepulsion(d) : a.nodeRepulsion, o.layoutNodes.push(p), o.idToIndex[p.id] = f;
  }
  for (var y = [], E = 0, m = -1, T = [], f = 0; f < o.nodeSize; f++) {
    var d = o.layoutNodes[f], C = d.parentId;
    C != null ? o.layoutNodes[o.idToIndex[C]].children.push(d.id) : (y[++m] = d.id, T.push(d.id));
  }
  for (o.graphSet.push(T); E <= m; ) {
    var S = y[E++], b = o.idToIndex[S], v = o.layoutNodes[b], x = v.children;
    if (x.length > 0) {
      o.graphSet.push(x);
      for (var f = 0; f < x.length; f++)
        y[++m] = x[f];
    }
  }
  for (var f = 0; f < o.graphSet.length; f++)
    for (var w = o.graphSet[f], c = 0; c < w.length; c++) {
      var D = o.idToIndex[w[c]];
      o.indexToGraph[D] = f;
    }
  for (var f = 0; f < o.edgeSize; f++) {
    var A = n[f], L = {};
    L.id = A.data("id"), L.sourceId = A.data("source"), L.targetId = A.data("target");
    var I = Be(a.idealEdgeLength) ? a.idealEdgeLength(A) : a.idealEdgeLength, O = Be(a.edgeElasticity) ? a.edgeElasticity(A) : a.edgeElasticity, P = o.idToIndex[L.sourceId], R = o.idToIndex[L.targetId], M = o.indexToGraph[P], k = o.indexToGraph[R];
    if (M != k) {
      for (var B = iy(L.sourceId, L.targetId, o), G = o.graphSet[B], F = 0, p = o.layoutNodes[P]; G.indexOf(p.id) === -1; )
        p = o.layoutNodes[o.idToIndex[p.parentId]], F++;
      for (p = o.layoutNodes[R]; G.indexOf(p.id) === -1; )
        p = o.layoutNodes[o.idToIndex[p.parentId]], F++;
      I *= F * a.nestingFactor;
    }
    L.idealLength = I, L.elasticity = O, o.layoutEdges.push(L);
  }
  return o;
}, iy = function(e, r, a) {
  var n = sy(e, r, 0, a);
  return 2 > n.count ? 0 : n.graph;
}, sy = function t(e, r, a, n) {
  var i = n.graphSet[a];
  if (-1 < i.indexOf(e) && -1 < i.indexOf(r))
    return {
      count: 2,
      graph: a
    };
  for (var s = 0, o = 0; o < i.length; o++) {
    var l = i[o], u = n.idToIndex[l], f = n.layoutNodes[u].children;
    if (f.length !== 0) {
      var h = n.indexToGraph[n.idToIndex[f[0]]], c = t(e, r, h, n);
      if (c.count !== 0)
        if (c.count === 1) {
          if (s++, s === 2)
            break;
        } else
          return c;
    }
  }
  return {
    count: s,
    graph: a
  };
}, oy, ly = function(e, r) {
  for (var a = e.clientWidth, n = e.clientHeight, i = 0; i < e.nodeSize; i++) {
    var s = e.layoutNodes[i];
    s.children.length === 0 && !s.isLocked && (s.positionX = Math.random() * a, s.positionY = Math.random() * n);
  }
}, al = function(e, r, a) {
  var n = e.boundingBox, i = {
    x1: 1 / 0,
    x2: -1 / 0,
    y1: 1 / 0,
    y2: -1 / 0
  };
  return r.boundingBox && (a.forEach(function(s) {
    var o = e.layoutNodes[e.idToIndex[s.data("id")]];
    i.x1 = Math.min(i.x1, o.positionX), i.x2 = Math.max(i.x2, o.positionX), i.y1 = Math.min(i.y1, o.positionY), i.y2 = Math.max(i.y2, o.positionY);
  }), i.w = i.x2 - i.x1, i.h = i.y2 - i.y1), function(s, o) {
    var l = e.layoutNodes[e.idToIndex[s.data("id")]];
    if (r.boundingBox) {
      var u = (l.positionX - i.x1) / i.w, f = (l.positionY - i.y1) / i.h;
      return {
        x: n.x1 + u * n.w,
        y: n.y1 + f * n.h
      };
    } else
      return {
        x: l.positionX,
        y: l.positionY
      };
  };
}, uy = function(e, r, a) {
  var n = a.layout, i = a.eles.nodes(), s = al(e, a, i);
  i.positions(s), e.ready !== !0 && (e.ready = !0, n.one("layoutready", a.ready), n.emit({
    type: "layoutready",
    layout: this
  }));
}, fy = function(e, r, a) {
  hy(e, r), dy(e), gy(e, r), py(e), yy(e);
}, hy = function(e, r) {
  for (var a = 0; a < e.graphSet.length; a++)
    for (var n = e.graphSet[a], i = n.length, s = 0; s < i; s++)
      for (var o = e.layoutNodes[e.idToIndex[n[s]]], l = s + 1; l < i; l++) {
        var u = e.layoutNodes[e.idToIndex[n[l]]];
        vy(o, u, e, r);
      }
}, Os = function(e) {
  return -e + 2 * e * Math.random();
}, vy = function(e, r, a, n) {
  var i = e.cmptId, s = r.cmptId;
  if (!(i !== s && !a.isCompound)) {
    var o = r.positionX - e.positionX, l = r.positionY - e.positionY, u = 1;
    o === 0 && l === 0 && (o = Os(u), l = Os(u));
    var f = cy(e, r, o, l);
    if (f > 0)
      var h = n.nodeOverlap * f, c = Math.sqrt(o * o + l * l), v = h * o / c, d = h * l / c;
    else
      var g = Ja(e, o, l), p = Ja(r, -1 * o, -1 * l), y = p.x - g.x, E = p.y - g.y, m = y * y + E * E, c = Math.sqrt(m), h = (e.nodeRepulsion + r.nodeRepulsion) / m, v = h * y / c, d = h * E / c;
    e.isLocked || (e.offsetX -= v, e.offsetY -= d), r.isLocked || (r.offsetX += v, r.offsetY += d);
  }
}, cy = function(e, r, a, n) {
  if (a > 0)
    var i = e.maxX - r.minX;
  else
    var i = r.maxX - e.minX;
  if (n > 0)
    var s = e.maxY - r.minY;
  else
    var s = r.maxY - e.minY;
  return i >= 0 && s >= 0 ? Math.sqrt(i * i + s * s) : 0;
}, Ja = function(e, r, a) {
  var n = e.positionX, i = e.positionY, s = e.height || 1, o = e.width || 1, l = a / r, u = s / o, f = {};
  return r === 0 && 0 < a || r === 0 && 0 > a ? (f.x = n, f.y = i + s / 2, f) : 0 < r && -1 * u <= l && l <= u ? (f.x = n + o / 2, f.y = i + o * a / 2 / r, f) : 0 > r && -1 * u <= l && l <= u ? (f.x = n - o / 2, f.y = i - o * a / 2 / r, f) : 0 < a && (l <= -1 * u || l >= u) ? (f.x = n + s * r / 2 / a, f.y = i + s / 2, f) : (0 > a && (l <= -1 * u || l >= u) && (f.x = n - s * r / 2 / a, f.y = i - s / 2), f);
}, dy = function(e, r) {
  for (var a = 0; a < e.edgeSize; a++) {
    var n = e.layoutEdges[a], i = e.idToIndex[n.sourceId], s = e.layoutNodes[i], o = e.idToIndex[n.targetId], l = e.layoutNodes[o], u = l.positionX - s.positionX, f = l.positionY - s.positionY;
    if (!(u === 0 && f === 0)) {
      var h = Ja(s, u, f), c = Ja(l, -1 * u, -1 * f), v = c.x - h.x, d = c.y - h.y, g = Math.sqrt(v * v + d * d), p = Math.pow(n.idealLength - g, 2) / n.elasticity;
      if (g !== 0)
        var y = p * v / g, E = p * d / g;
      else
        var y = 0, E = 0;
      s.isLocked || (s.offsetX += y, s.offsetY += E), l.isLocked || (l.offsetX -= y, l.offsetY -= E);
    }
  }
}, gy = function(e, r) {
  if (r.gravity !== 0)
    for (var a = 1, n = 0; n < e.graphSet.length; n++) {
      var i = e.graphSet[n], s = i.length;
      if (n === 0)
        var o = e.clientHeight / 2, l = e.clientWidth / 2;
      else
        var u = e.layoutNodes[e.idToIndex[i[0]]], f = e.layoutNodes[e.idToIndex[u.parentId]], o = f.positionX, l = f.positionY;
      for (var h = 0; h < s; h++) {
        var c = e.layoutNodes[e.idToIndex[i[h]]];
        if (!c.isLocked) {
          var v = o - c.positionX, d = l - c.positionY, g = Math.sqrt(v * v + d * d);
          if (g > a) {
            var p = r.gravity * v / g, y = r.gravity * d / g;
            c.offsetX += p, c.offsetY += y;
          }
        }
      }
    }
}, py = function(e, r) {
  var a = [], n = 0, i = -1;
  for (a.push.apply(a, e.graphSet[0]), i += e.graphSet[0].length; n <= i; ) {
    var s = a[n++], o = e.idToIndex[s], l = e.layoutNodes[o], u = l.children;
    if (0 < u.length && !l.isLocked) {
      for (var f = l.offsetX, h = l.offsetY, c = 0; c < u.length; c++) {
        var v = e.layoutNodes[e.idToIndex[u[c]]];
        v.offsetX += f, v.offsetY += h, a[++i] = u[c];
      }
      l.offsetX = 0, l.offsetY = 0;
    }
  }
}, yy = function(e, r) {
  for (var a = 0; a < e.nodeSize; a++) {
    var n = e.layoutNodes[a];
    0 < n.children.length && (n.maxX = void 0, n.minX = void 0, n.maxY = void 0, n.minY = void 0);
  }
  for (var a = 0; a < e.nodeSize; a++) {
    var n = e.layoutNodes[a];
    if (!(0 < n.children.length || n.isLocked)) {
      var i = my(n.offsetX, n.offsetY, e.temperature);
      n.positionX += i.x, n.positionY += i.y, n.offsetX = 0, n.offsetY = 0, n.minX = n.positionX - n.width, n.maxX = n.positionX + n.width, n.minY = n.positionY - n.height, n.maxY = n.positionY + n.height, by(n, e);
    }
  }
  for (var a = 0; a < e.nodeSize; a++) {
    var n = e.layoutNodes[a];
    0 < n.children.length && !n.isLocked && (n.positionX = (n.maxX + n.minX) / 2, n.positionY = (n.maxY + n.minY) / 2, n.width = n.maxX - n.minX, n.height = n.maxY - n.minY);
  }
}, my = function(e, r, a) {
  var n = Math.sqrt(e * e + r * r);
  if (n > a)
    var i = {
      x: a * e / n,
      y: a * r / n
    };
  else
    var i = {
      x: e,
      y: r
    };
  return i;
}, by = function t(e, r) {
  var a = e.parentId;
  if (a != null) {
    var n = r.layoutNodes[r.idToIndex[a]], i = !1;
    if ((n.maxX == null || e.maxX + n.padRight > n.maxX) && (n.maxX = e.maxX + n.padRight, i = !0), (n.minX == null || e.minX - n.padLeft < n.minX) && (n.minX = e.minX - n.padLeft, i = !0), (n.maxY == null || e.maxY + n.padBottom > n.maxY) && (n.maxY = e.maxY + n.padBottom, i = !0), (n.minY == null || e.minY - n.padTop < n.minY) && (n.minY = e.minY - n.padTop, i = !0), i)
      return t(n, r);
  }
}, Ns = function(e, r) {
  for (var a = e.layoutNodes, n = [], i = 0; i < a.length; i++) {
    var s = a[i], o = s.cmptId, l = n[o] = n[o] || [];
    l.push(s);
  }
  for (var u = 0, i = 0; i < n.length; i++) {
    var f = n[i];
    if (f) {
      f.x1 = 1 / 0, f.x2 = -1 / 0, f.y1 = 1 / 0, f.y2 = -1 / 0;
      for (var h = 0; h < f.length; h++) {
        var c = f[h];
        f.x1 = Math.min(f.x1, c.positionX - c.width / 2), f.x2 = Math.max(f.x2, c.positionX + c.width / 2), f.y1 = Math.min(f.y1, c.positionY - c.height / 2), f.y2 = Math.max(f.y2, c.positionY + c.height / 2);
      }
      f.w = f.x2 - f.x1, f.h = f.y2 - f.y1, u += f.w * f.h;
    }
  }
  n.sort(function(E, m) {
    return m.w * m.h - E.w * E.h;
  });
  for (var v = 0, d = 0, g = 0, p = 0, y = Math.sqrt(u) * e.clientWidth / e.clientHeight, i = 0; i < n.length; i++) {
    var f = n[i];
    if (f) {
      for (var h = 0; h < f.length; h++) {
        var c = f[h];
        c.isLocked || (c.positionX += v - f.x1, c.positionY += d - f.y1);
      }
      v += f.w + r.componentSpacing, g += f.w + r.componentSpacing, p = Math.max(p, f.h), g > y && (d += p + r.componentSpacing, v = 0, g = 0, p = 0);
    }
  }
}, Ey = {
  fit: !0,
  // whether to fit the viewport to the graph
  padding: 30,
  // padding used on fit
  boundingBox: void 0,
  // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  avoidOverlap: !0,
  // prevents node overlap, may overflow boundingBox if not enough space
  avoidOverlapPadding: 10,
  // extra spacing around nodes when avoidOverlap: true
  nodeDimensionsIncludeLabels: !1,
  // Excludes the label when calculating node bounding boxes for the layout algorithm
  spacingFactor: void 0,
  // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
  condense: !1,
  // uses all available space on false, uses minimal space on true
  rows: void 0,
  // force num of rows in the grid
  cols: void 0,
  // force num of columns in the grid
  position: function(e) {
  },
  // returns { row, col } for element
  sort: void 0,
  // a sorting function to order the nodes; e.g. function(a, b){ return a.data('weight') - b.data('weight') }
  animate: !1,
  // whether to transition the node positions
  animationDuration: 500,
  // duration of animation in ms if enabled
  animationEasing: void 0,
  // easing of animation if enabled
  animateFilter: function(e, r) {
    return !0;
  },
  // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: void 0,
  // callback on layoutready
  stop: void 0,
  // callback on layoutstop
  transform: function(e, r) {
    return r;
  }
  // transform a given node position. Useful for changing flow direction in discrete layouts 
};
function nl(t) {
  this.options = de({}, Ey, t);
}
nl.prototype.run = function() {
  var t = this.options, e = t, r = t.cy, a = e.eles, n = a.nodes().not(":parent");
  e.sort && (n = n.sort(e.sort));
  var i = ft(e.boundingBox ? e.boundingBox : {
    x1: 0,
    y1: 0,
    w: r.width(),
    h: r.height()
  });
  if (i.h === 0 || i.w === 0)
    a.nodes().layoutPositions(this, e, function(U) {
      return {
        x: i.x1,
        y: i.y1
      };
    });
  else {
    var s = n.size(), o = Math.sqrt(s * i.h / i.w), l = Math.round(o), u = Math.round(i.w / i.h * o), f = function(_) {
      if (_ == null)
        return Math.min(l, u);
      var Y = Math.min(l, u);
      Y == l ? l = _ : u = _;
    }, h = function(_) {
      if (_ == null)
        return Math.max(l, u);
      var Y = Math.max(l, u);
      Y == l ? l = _ : u = _;
    }, c = e.rows, v = e.cols != null ? e.cols : e.columns;
    if (c != null && v != null)
      l = c, u = v;
    else if (c != null && v == null)
      l = c, u = Math.ceil(s / l);
    else if (c == null && v != null)
      u = v, l = Math.ceil(s / u);
    else if (u * l > s) {
      var d = f(), g = h();
      (d - 1) * g >= s ? f(d - 1) : (g - 1) * d >= s && h(g - 1);
    } else
      for (; u * l < s; ) {
        var p = f(), y = h();
        (y + 1) * p >= s ? h(y + 1) : f(p + 1);
      }
    var E = i.w / u, m = i.h / l;
    if (e.condense && (E = 0, m = 0), e.avoidOverlap)
      for (var T = 0; T < n.length; T++) {
        var C = n[T], S = C._private.position;
        (S.x == null || S.y == null) && (S.x = 0, S.y = 0);
        var b = C.layoutDimensions(e), x = e.avoidOverlapPadding, w = b.w + x, D = b.h + x;
        E = Math.max(E, w), m = Math.max(m, D);
      }
    for (var A = {}, L = function(_, Y) {
      return !!A["c-" + _ + "-" + Y];
    }, I = function(_, Y) {
      A["c-" + _ + "-" + Y] = !0;
    }, O = 0, P = 0, R = function() {
      P++, P >= u && (P = 0, O++);
    }, M = {}, k = 0; k < n.length; k++) {
      var B = n[k], G = e.position(B);
      if (G && (G.row !== void 0 || G.col !== void 0)) {
        var F = {
          row: G.row,
          col: G.col
        };
        if (F.col === void 0)
          for (F.col = 0; L(F.row, F.col); )
            F.col++;
        else if (F.row === void 0)
          for (F.row = 0; L(F.row, F.col); )
            F.row++;
        M[B.id()] = F, I(F.row, F.col);
      }
    }
    var $ = function(_, Y) {
      var W, z;
      if (_.locked() || _.isParent())
        return !1;
      var K = M[_.id()];
      if (K)
        W = K.col * E + E / 2 + i.x1, z = K.row * m + m / 2 + i.y1;
      else {
        for (; L(O, P); )
          R();
        W = P * E + E / 2 + i.x1, z = O * m + m / 2 + i.y1, I(O, P), R();
      }
      return {
        x: W,
        y: z
      };
    };
    n.layoutPositions(this, e, $);
  }
  return this;
};
var wy = {
  ready: function() {
  },
  // on layoutready
  stop: function() {
  }
  // on layoutstop
};
function mi(t) {
  this.options = de({}, wy, t);
}
mi.prototype.run = function() {
  var t = this.options, e = t.eles, r = this;
  return t.cy, r.emit("layoutstart"), e.nodes().positions(function() {
    return {
      x: 0,
      y: 0
    };
  }), r.one("layoutready", t.ready), r.emit("layoutready"), r.one("layoutstop", t.stop), r.emit("layoutstop"), this;
};
mi.prototype.stop = function() {
  return this;
};
var xy = {
  positions: void 0,
  // map of (node id) => (position obj); or function(node){ return somPos; }
  zoom: void 0,
  // the zoom level to set (prob want fit = false if set)
  pan: void 0,
  // the pan level to set (prob want fit = false if set)
  fit: !0,
  // whether to fit to viewport
  padding: 30,
  // padding on fit
  spacingFactor: void 0,
  // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
  animate: !1,
  // whether to transition the node positions
  animationDuration: 500,
  // duration of animation in ms if enabled
  animationEasing: void 0,
  // easing of animation if enabled
  animateFilter: function(e, r) {
    return !0;
  },
  // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: void 0,
  // callback on layoutready
  stop: void 0,
  // callback on layoutstop
  transform: function(e, r) {
    return r;
  }
  // transform a given node position. Useful for changing flow direction in discrete layouts
};
function il(t) {
  this.options = de({}, xy, t);
}
il.prototype.run = function() {
  var t = this.options, e = t.eles, r = e.nodes(), a = Be(t.positions);
  function n(i) {
    if (t.positions == null)
      return Rd(i.position());
    if (a)
      return t.positions(i);
    var s = t.positions[i._private.data.id];
    return s == null ? null : s;
  }
  return r.layoutPositions(this, t, function(i, s) {
    var o = n(i);
    return i.locked() || o == null ? !1 : o;
  }), this;
};
var Ty = {
  fit: !0,
  // whether to fit to viewport
  padding: 30,
  // fit padding
  boundingBox: void 0,
  // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  animate: !1,
  // whether to transition the node positions
  animationDuration: 500,
  // duration of animation in ms if enabled
  animationEasing: void 0,
  // easing of animation if enabled
  animateFilter: function(e, r) {
    return !0;
  },
  // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: void 0,
  // callback on layoutready
  stop: void 0,
  // callback on layoutstop
  transform: function(e, r) {
    return r;
  }
  // transform a given node position. Useful for changing flow direction in discrete layouts 
};
function sl(t) {
  this.options = de({}, Ty, t);
}
sl.prototype.run = function() {
  var t = this.options, e = t.cy, r = t.eles, a = ft(t.boundingBox ? t.boundingBox : {
    x1: 0,
    y1: 0,
    w: e.width(),
    h: e.height()
  }), n = function(s, o) {
    return {
      x: a.x1 + Math.round(Math.random() * a.w),
      y: a.y1 + Math.round(Math.random() * a.h)
    };
  };
  return r.nodes().layoutPositions(this, t, n), this;
};
var Cy = [{
  name: "breadthfirst",
  impl: el
}, {
  name: "circle",
  impl: tl
}, {
  name: "concentric",
  impl: rl
}, {
  name: "cose",
  impl: mn
}, {
  name: "grid",
  impl: nl
}, {
  name: "null",
  impl: mi
}, {
  name: "preset",
  impl: il
}, {
  name: "random",
  impl: sl
}];
function ol(t) {
  this.options = t, this.notifications = 0;
}
var Is = function() {
}, Ms = function() {
  throw new Error("A headless instance can not render images");
};
ol.prototype = {
  recalculateRenderedStyle: Is,
  notify: function() {
    this.notifications++;
  },
  init: Is,
  isHeadless: function() {
    return !0;
  },
  png: Ms,
  jpg: Ms
};
var bi = {};
bi.arrowShapeWidth = 0.3;
bi.registerArrowShapes = function() {
  var t = this.arrowShapes = {}, e = this, r = function(u, f, h, c, v, d, g) {
    var p = v.x - h / 2 - g, y = v.x + h / 2 + g, E = v.y - h / 2 - g, m = v.y + h / 2 + g, T = p <= u && u <= y && E <= f && f <= m;
    return T;
  }, a = function(u, f, h, c, v) {
    var d = u * Math.cos(c) - f * Math.sin(c), g = u * Math.sin(c) + f * Math.cos(c), p = d * h, y = g * h, E = p + v.x, m = y + v.y;
    return {
      x: E,
      y: m
    };
  }, n = function(u, f, h, c) {
    for (var v = [], d = 0; d < u.length; d += 2) {
      var g = u[d], p = u[d + 1];
      v.push(a(g, p, f, h, c));
    }
    return v;
  }, i = function(u) {
    for (var f = [], h = 0; h < u.length; h++) {
      var c = u[h];
      f.push(c.x, c.y);
    }
    return f;
  }, s = function(u) {
    return u.pstyle("width").pfValue * u.pstyle("arrow-scale").pfValue * 2;
  }, o = function(u, f) {
    ve(f) && (f = t[f]), t[u] = de({
      name: u,
      points: [-0.15, -0.3, 0.15, -0.3, 0.15, 0.3, -0.15, 0.3],
      collide: function(c, v, d, g, p, y) {
        var E = i(n(this.points, d + 2 * y, g, p)), m = ut(c, v, E);
        return m;
      },
      roughCollide: r,
      draw: function(c, v, d, g) {
        var p = n(this.points, v, d, g);
        e.arrowShapeImpl("polygon")(c, p);
      },
      spacing: function(c) {
        return 0;
      },
      gap: s
    }, f);
  };
  o("none", {
    collide: Xa,
    roughCollide: Xa,
    draw: oi,
    spacing: Wi,
    gap: Wi
  }), o("triangle", {
    points: [-0.15, -0.3, 0, 0, 0.15, -0.3]
  }), o("arrow", "triangle"), o("triangle-backcurve", {
    points: t.triangle.points,
    controlPoint: [0, -0.15],
    roughCollide: r,
    draw: function(u, f, h, c, v) {
      var d = n(this.points, f, h, c), g = this.controlPoint, p = a(g[0], g[1], f, h, c);
      e.arrowShapeImpl(this.name)(u, d, p);
    },
    gap: function(u) {
      return s(u) * 0.8;
    }
  }), o("triangle-tee", {
    points: [0, 0, 0.15, -0.3, -0.15, -0.3, 0, 0],
    pointsTee: [-0.15, -0.4, -0.15, -0.5, 0.15, -0.5, 0.15, -0.4],
    collide: function(u, f, h, c, v, d, g) {
      var p = i(n(this.points, h + 2 * g, c, v)), y = i(n(this.pointsTee, h + 2 * g, c, v)), E = ut(u, f, p) || ut(u, f, y);
      return E;
    },
    draw: function(u, f, h, c, v) {
      var d = n(this.points, f, h, c), g = n(this.pointsTee, f, h, c);
      e.arrowShapeImpl(this.name)(u, d, g);
    }
  }), o("circle-triangle", {
    radius: 0.15,
    pointsTr: [0, -0.15, 0.15, -0.45, -0.15, -0.45, 0, -0.15],
    collide: function(u, f, h, c, v, d, g) {
      var p = v, y = Math.pow(p.x - u, 2) + Math.pow(p.y - f, 2) <= Math.pow((h + 2 * g) * this.radius, 2), E = i(n(this.points, h + 2 * g, c, v));
      return ut(u, f, E) || y;
    },
    draw: function(u, f, h, c, v) {
      var d = n(this.pointsTr, f, h, c);
      e.arrowShapeImpl(this.name)(u, d, c.x, c.y, this.radius * f);
    },
    spacing: function(u) {
      return e.getArrowWidth(u.pstyle("width").pfValue, u.pstyle("arrow-scale").value) * this.radius;
    }
  }), o("triangle-cross", {
    points: [0, 0, 0.15, -0.3, -0.15, -0.3, 0, 0],
    baseCrossLinePts: [
      -0.15,
      -0.4,
      // first half of the rectangle
      -0.15,
      -0.4,
      0.15,
      -0.4,
      // second half of the rectangle
      0.15,
      -0.4
    ],
    crossLinePts: function(u, f) {
      var h = this.baseCrossLinePts.slice(), c = f / u, v = 3, d = 5;
      return h[v] = h[v] - c, h[d] = h[d] - c, h;
    },
    collide: function(u, f, h, c, v, d, g) {
      var p = i(n(this.points, h + 2 * g, c, v)), y = i(n(this.crossLinePts(h, d), h + 2 * g, c, v)), E = ut(u, f, p) || ut(u, f, y);
      return E;
    },
    draw: function(u, f, h, c, v) {
      var d = n(this.points, f, h, c), g = n(this.crossLinePts(f, v), f, h, c);
      e.arrowShapeImpl(this.name)(u, d, g);
    }
  }), o("vee", {
    points: [-0.15, -0.3, 0, 0, 0.15, -0.3, 0, -0.15],
    gap: function(u) {
      return s(u) * 0.525;
    }
  }), o("circle", {
    radius: 0.15,
    collide: function(u, f, h, c, v, d, g) {
      var p = v, y = Math.pow(p.x - u, 2) + Math.pow(p.y - f, 2) <= Math.pow((h + 2 * g) * this.radius, 2);
      return y;
    },
    draw: function(u, f, h, c, v) {
      e.arrowShapeImpl(this.name)(u, c.x, c.y, this.radius * f);
    },
    spacing: function(u) {
      return e.getArrowWidth(u.pstyle("width").pfValue, u.pstyle("arrow-scale").value) * this.radius;
    }
  }), o("tee", {
    points: [-0.15, 0, -0.15, -0.1, 0.15, -0.1, 0.15, 0],
    spacing: function(u) {
      return 1;
    },
    gap: function(u) {
      return 1;
    }
  }), o("square", {
    points: [-0.15, 0, 0.15, 0, 0.15, -0.3, -0.15, -0.3]
  }), o("diamond", {
    points: [-0.15, -0.15, 0, -0.3, 0.15, -0.15, 0, 0],
    gap: function(u) {
      return u.pstyle("width").pfValue * u.pstyle("arrow-scale").value;
    }
  }), o("chevron", {
    points: [0, 0, -0.15, -0.15, -0.1, -0.2, 0, -0.1, 0.1, -0.2, 0.15, -0.15],
    gap: function(u) {
      return 0.95 * u.pstyle("width").pfValue * u.pstyle("arrow-scale").value;
    }
  });
};
var fr = {};
fr.projectIntoViewport = function(t, e) {
  var r = this.cy, a = this.findContainerClientCoords(), n = a[0], i = a[1], s = a[4], o = r.pan(), l = r.zoom(), u = ((t - n) / s - o.x) / l, f = ((e - i) / s - o.y) / l;
  return [u, f];
};
fr.findContainerClientCoords = function() {
  if (this.containerBB)
    return this.containerBB;
  var t = this.container, e = t.getBoundingClientRect(), r = this.cy.window().getComputedStyle(t), a = function(y) {
    return parseFloat(r.getPropertyValue(y));
  }, n = {
    left: a("padding-left"),
    right: a("padding-right"),
    top: a("padding-top"),
    bottom: a("padding-bottom")
  }, i = {
    left: a("border-left-width"),
    right: a("border-right-width"),
    top: a("border-top-width"),
    bottom: a("border-bottom-width")
  }, s = t.clientWidth, o = t.clientHeight, l = n.left + n.right, u = n.top + n.bottom, f = i.left + i.right, h = e.width / (s + f), c = s - l, v = o - u, d = e.left + n.left + i.left, g = e.top + n.top + i.top;
  return this.containerBB = [d, g, c, v, h];
};
fr.invalidateContainerClientCoordsCache = function() {
  this.containerBB = null;
};
fr.findNearestElement = function(t, e, r, a) {
  return this.findNearestElements(t, e, r, a)[0];
};
fr.findNearestElements = function(t, e, r, a) {
  var n = this, i = this, s = i.getCachedZSortedEles(), o = [], l = i.cy.zoom(), u = i.cy.hasCompoundNodes(), f = (a ? 24 : 8) / l, h = (a ? 8 : 2) / l, c = (a ? 8 : 2) / l, v = 1 / 0, d, g;
  r && (s = s.interactive);
  function p(b, x) {
    if (b.isNode()) {
      if (g)
        return;
      g = b, o.push(b);
    }
    if (b.isEdge() && (x == null || x < v))
      if (d) {
        if (d.pstyle("z-compound-depth").value === b.pstyle("z-compound-depth").value && d.pstyle("z-compound-depth").value === b.pstyle("z-compound-depth").value) {
          for (var w = 0; w < o.length; w++)
            if (o[w].isEdge()) {
              o[w] = b, d = b, v = x != null ? x : v;
              break;
            }
        }
      } else
        o.push(b), d = b, v = x != null ? x : v;
  }
  function y(b) {
    var x = b.outerWidth() + 2 * h, w = b.outerHeight() + 2 * h, D = x / 2, A = w / 2, L = b.position();
    if (L.x - D <= t && t <= L.x + D && L.y - A <= e && e <= L.y + A) {
      var I = i.nodeShapes[n.getNodeShape(b)];
      if (I.checkPoint(t, e, 0, x, w, L.x, L.y))
        return p(b, 0), !0;
    }
  }
  function E(b) {
    var x = b._private, w = x.rscratch, D = b.pstyle("width").pfValue, A = b.pstyle("arrow-scale").value, L = D / 2 + f, I = L * L, O = L * 2, k = x.source, B = x.target, P;
    if (w.edgeType === "segments" || w.edgeType === "straight" || w.edgeType === "haystack") {
      for (var R = w.allpts, M = 0; M + 3 < R.length; M += 2)
        if (Xd(t, e, R[M], R[M + 1], R[M + 2], R[M + 3], O) && I > (P = Qd(t, e, R[M], R[M + 1], R[M + 2], R[M + 3])))
          return p(b, P), !0;
    } else if (w.edgeType === "bezier" || w.edgeType === "multibezier" || w.edgeType === "self" || w.edgeType === "compound") {
      for (var R = w.allpts, M = 0; M + 5 < w.allpts.length; M += 4)
        if (Wd(t, e, R[M], R[M + 1], R[M + 2], R[M + 3], R[M + 4], R[M + 5], O) && I > (P = Zd(t, e, R[M], R[M + 1], R[M + 2], R[M + 3], R[M + 4], R[M + 5])))
          return p(b, P), !0;
    }
    for (var k = k || x.source, B = B || x.target, G = n.getArrowWidth(D, A), F = [{
      name: "source",
      x: w.arrowStartX,
      y: w.arrowStartY,
      angle: w.srcArrowAngle
    }, {
      name: "target",
      x: w.arrowEndX,
      y: w.arrowEndY,
      angle: w.tgtArrowAngle
    }, {
      name: "mid-source",
      x: w.midX,
      y: w.midY,
      angle: w.midsrcArrowAngle
    }, {
      name: "mid-target",
      x: w.midX,
      y: w.midY,
      angle: w.midtgtArrowAngle
    }], M = 0; M < F.length; M++) {
      var $ = F[M], U = i.arrowShapes[b.pstyle($.name + "-arrow-shape").value], _ = b.pstyle("width").pfValue;
      if (U.roughCollide(t, e, G, $.angle, {
        x: $.x,
        y: $.y
      }, _, f) && U.collide(t, e, G, $.angle, {
        x: $.x,
        y: $.y
      }, _, f))
        return p(b), !0;
    }
    u && o.length > 0 && (y(k), y(B));
  }
  function m(b, x, w) {
    return xt(b, x, w);
  }
  function T(b, x) {
    var w = b._private, D = c, A;
    x ? A = x + "-" : A = "", b.boundingBox();
    var L = w.labelBounds[x || "main"], I = b.pstyle(A + "label").value, O = b.pstyle("text-events").strValue === "yes";
    if (!(!O || !I)) {
      var P = m(w.rscratch, "labelX", x), R = m(w.rscratch, "labelY", x), M = m(w.rscratch, "labelAngle", x), k = b.pstyle(A + "text-margin-x").pfValue, B = b.pstyle(A + "text-margin-y").pfValue, G = L.x1 - D - k, F = L.x2 + D - k, $ = L.y1 - D - B, U = L.y2 + D - B;
      if (M) {
        var _ = Math.cos(M), Y = Math.sin(M), W = function(ce, te) {
          return ce = ce - P, te = te - R, {
            x: ce * _ - te * Y + P,
            y: ce * Y + te * _ + R
          };
        }, z = W(G, $), K = W(G, U), j = W(F, $), Q = W(F, U), ee = [
          // with the margin added after the rotation is applied
          z.x + k,
          z.y + B,
          j.x + k,
          j.y + B,
          Q.x + k,
          Q.y + B,
          K.x + k,
          K.y + B
        ];
        if (ut(t, e, ee))
          return p(b), !0;
      } else if (Sr(L, t, e))
        return p(b), !0;
    }
  }
  for (var C = s.length - 1; C >= 0; C--) {
    var S = s[C];
    S.isNode() ? y(S) || T(S) : E(S) || T(S) || T(S, "source") || T(S, "target");
  }
  return o;
};
fr.getAllInBox = function(t, e, r, a) {
  var n = this.getCachedZSortedEles().interactive, i = [], s = Math.min(t, r), o = Math.max(t, r), l = Math.min(e, a), u = Math.max(e, a);
  t = s, r = o, e = l, a = u;
  for (var f = ft({
    x1: t,
    y1: e,
    x2: r,
    y2: a
  }), h = 0; h < n.length; h++) {
    var c = n[h];
    if (c.isNode()) {
      var v = c, d = v.boundingBox({
        includeNodes: !0,
        includeEdges: !1,
        includeLabels: !1
      });
      fi(f, d) && !To(d, f) && i.push(v);
    } else {
      var g = c, p = g._private, y = p.rscratch;
      if (y.startX != null && y.startY != null && !Sr(f, y.startX, y.startY) || y.endX != null && y.endY != null && !Sr(f, y.endX, y.endY))
        continue;
      if (y.edgeType === "bezier" || y.edgeType === "multibezier" || y.edgeType === "self" || y.edgeType === "compound" || y.edgeType === "segments" || y.edgeType === "haystack") {
        for (var E = p.rstyle.bezierPts || p.rstyle.linePts || p.rstyle.haystackPts, m = !0, T = 0; T < E.length; T++)
          if (!Yd(f, E[T])) {
            m = !1;
            break;
          }
        m && i.push(g);
      } else
        (y.edgeType === "haystack" || y.edgeType === "straight") && i.push(g);
    }
  }
  return i;
};
var ja = {};
ja.calculateArrowAngles = function(t) {
  var e = t._private.rscratch, r = e.edgeType === "haystack", a = e.edgeType === "bezier", n = e.edgeType === "multibezier", i = e.edgeType === "segments", s = e.edgeType === "compound", o = e.edgeType === "self", l, u, f, h, c, v, y, E;
  if (r ? (f = e.haystackPts[0], h = e.haystackPts[1], c = e.haystackPts[2], v = e.haystackPts[3]) : (f = e.arrowStartX, h = e.arrowStartY, c = e.arrowEndX, v = e.arrowEndY), y = e.midX, E = e.midY, i)
    l = f - e.segpts[0], u = h - e.segpts[1];
  else if (n || s || o || a) {
    var d = e.allpts, g = Ye(d[0], d[2], d[4], 0.1), p = Ye(d[1], d[3], d[5], 0.1);
    l = f - g, u = h - p;
  } else
    l = f - y, u = h - E;
  e.srcArrowAngle = Ca(l, u);
  var y = e.midX, E = e.midY;
  if (r && (y = (f + c) / 2, E = (h + v) / 2), l = c - f, u = v - h, i) {
    var d = e.allpts;
    if (d.length / 2 % 2 === 0) {
      var m = d.length / 2, T = m - 2;
      l = d[m] - d[T], u = d[m + 1] - d[T + 1];
    } else {
      var m = d.length / 2 - 1, T = m - 2, C = m + 2;
      l = d[m] - d[T], u = d[m + 1] - d[T + 1];
    }
  } else if (n || s || o) {
    var d = e.allpts, S = e.ctrlpts, b, x, w, D;
    if (S.length / 2 % 2 === 0) {
      var A = d.length / 2 - 1, L = A + 2, I = L + 2;
      b = Ye(d[A], d[L], d[I], 0), x = Ye(d[A + 1], d[L + 1], d[I + 1], 0), w = Ye(d[A], d[L], d[I], 1e-4), D = Ye(d[A + 1], d[L + 1], d[I + 1], 1e-4);
    } else {
      var L = d.length / 2 - 1, A = L - 2, I = L + 2;
      b = Ye(d[A], d[L], d[I], 0.4999), x = Ye(d[A + 1], d[L + 1], d[I + 1], 0.4999), w = Ye(d[A], d[L], d[I], 0.5), D = Ye(d[A + 1], d[L + 1], d[I + 1], 0.5);
    }
    l = w - b, u = D - x;
  }
  if (e.midtgtArrowAngle = Ca(l, u), e.midDispX = l, e.midDispY = u, l *= -1, u *= -1, i) {
    var d = e.allpts;
    if (d.length / 2 % 2 !== 0) {
      var m = d.length / 2 - 1, C = m + 2;
      l = -(d[C] - d[m]), u = -(d[C + 1] - d[m + 1]);
    }
  }
  if (e.midsrcArrowAngle = Ca(l, u), i)
    l = c - e.segpts[e.segpts.length - 2], u = v - e.segpts[e.segpts.length - 1];
  else if (n || s || o || a) {
    var d = e.allpts, O = d.length, g = Ye(d[O - 6], d[O - 4], d[O - 2], 0.9), p = Ye(d[O - 5], d[O - 3], d[O - 1], 0.9);
    l = c - g, u = v - p;
  } else
    l = c - y, u = v - E;
  e.tgtArrowAngle = Ca(l, u);
};
ja.getArrowWidth = ja.getArrowHeight = function(t, e) {
  var r = this.arrowWidthCache = this.arrowWidthCache || {}, a = r[t + ", " + e];
  return a || (a = Math.max(Math.pow(t * 13.37, 0.9), 29) * e, r[t + ", " + e] = a, a);
};
var nt = {};
nt.findMidptPtsEtc = function(t, e) {
  var r = e.posPts, a = e.intersectionPts, n = e.vectorNormInverse, i, s = t.pstyle("source-endpoint"), o = t.pstyle("target-endpoint"), l = s.units != null && o.units != null, u = function(C, S, b, x) {
    var w = x - S, D = b - C, A = Math.sqrt(D * D + w * w);
    return {
      x: -w / A,
      y: D / A
    };
  }, f = t.pstyle("edge-distances").value;
  switch (f) {
    case "node-position":
      i = r;
      break;
    case "intersection":
      i = a;
      break;
    case "endpoints": {
      if (l) {
        var h = this.manualEndptToPx(t.source()[0], s), c = Et(h, 2), v = c[0], d = c[1], g = this.manualEndptToPx(t.target()[0], o), p = Et(g, 2), y = p[0], E = p[1], m = {
          x1: v,
          y1: d,
          x2: y,
          y2: E
        };
        n = u(v, d, y, E), i = m;
      } else
        Ne("Edge ".concat(t.id(), " has edge-distances:endpoints specified without manual endpoints specified via source-endpoint and target-endpoint.  Falling back on edge-distances:intersection (default).")), i = a;
      break;
    }
  }
  return {
    midptPts: i,
    vectorNormInverse: n
  };
};
nt.findHaystackPoints = function(t) {
  for (var e = 0; e < t.length; e++) {
    var r = t[e], a = r._private, n = a.rscratch;
    if (!n.haystack) {
      var i = Math.random() * 2 * Math.PI;
      n.source = {
        x: Math.cos(i),
        y: Math.sin(i)
      }, i = Math.random() * 2 * Math.PI, n.target = {
        x: Math.cos(i),
        y: Math.sin(i)
      };
    }
    var s = a.source, o = a.target, l = s.position(), u = o.position(), f = s.width(), h = o.width(), c = s.height(), v = o.height(), d = r.pstyle("haystack-radius").value, g = d / 2;
    n.haystackPts = n.allpts = [n.source.x * f * g + l.x, n.source.y * c * g + l.y, n.target.x * h * g + u.x, n.target.y * v * g + u.y], n.midX = (n.allpts[0] + n.allpts[2]) / 2, n.midY = (n.allpts[1] + n.allpts[3]) / 2, n.edgeType = "haystack", n.haystack = !0, this.storeEdgeProjections(r), this.calculateArrowAngles(r), this.recalculateEdgeLabelProjections(r), this.calculateLabelAngles(r);
  }
};
nt.findSegmentsPoints = function(t, e) {
  var r = t._private.rscratch, a = t.pstyle("segment-weights"), n = t.pstyle("segment-distances"), i = Math.min(a.pfValue.length, n.pfValue.length);
  r.edgeType = "segments", r.segpts = [];
  for (var s = 0; s < i; s++) {
    var o = a.pfValue[s], l = n.pfValue[s], u = 1 - o, f = o, h = this.findMidptPtsEtc(t, e), c = h.midptPts, v = h.vectorNormInverse, d = {
      x: c.x1 * u + c.x2 * f,
      y: c.y1 * u + c.y2 * f
    };
    r.segpts.push(d.x + v.x * l, d.y + v.y * l);
  }
};
nt.findLoopPoints = function(t, e, r, a) {
  var n = t._private.rscratch, i = e.dirCounts, s = e.srcPos, o = t.pstyle("control-point-distances"), l = o ? o.pfValue[0] : void 0, u = t.pstyle("loop-direction").pfValue, f = t.pstyle("loop-sweep").pfValue, h = t.pstyle("control-point-step-size").pfValue;
  n.edgeType = "self";
  var c = r, v = h;
  a && (c = 0, v = l);
  var d = u - Math.PI / 2, g = d - f / 2, p = d + f / 2, y = u + "_" + f;
  c = i[y] === void 0 ? i[y] = 0 : ++i[y], n.ctrlpts = [s.x + Math.cos(g) * 1.4 * v * (c / 3 + 1), s.y + Math.sin(g) * 1.4 * v * (c / 3 + 1), s.x + Math.cos(p) * 1.4 * v * (c / 3 + 1), s.y + Math.sin(p) * 1.4 * v * (c / 3 + 1)];
};
nt.findCompoundLoopPoints = function(t, e, r, a) {
  var n = t._private.rscratch;
  n.edgeType = "compound";
  var i = e.srcPos, s = e.tgtPos, o = e.srcW, l = e.srcH, u = e.tgtW, f = e.tgtH, h = t.pstyle("control-point-step-size").pfValue, c = t.pstyle("control-point-distances"), v = c ? c.pfValue[0] : void 0, d = r, g = h;
  a && (d = 0, g = v);
  var p = 50, y = {
    x: i.x - o / 2,
    y: i.y - l / 2
  }, E = {
    x: s.x - u / 2,
    y: s.y - f / 2
  }, m = {
    x: Math.min(y.x, E.x),
    y: Math.min(y.y, E.y)
  }, T = 0.5, C = Math.max(T, Math.log(o * 0.01)), S = Math.max(T, Math.log(u * 0.01));
  n.ctrlpts = [m.x, m.y - (1 + Math.pow(p, 1.12) / 100) * g * (d / 3 + 1) * C, m.x - (1 + Math.pow(p, 1.12) / 100) * g * (d / 3 + 1) * S, m.y];
};
nt.findStraightEdgePoints = function(t) {
  t._private.rscratch.edgeType = "straight";
};
nt.findBezierPoints = function(t, e, r, a, n) {
  var i = t._private.rscratch, s = t.pstyle("control-point-step-size").pfValue, o = t.pstyle("control-point-distances"), l = t.pstyle("control-point-weights"), u = o && l ? Math.min(o.value.length, l.value.length) : 1, f = o ? o.pfValue[0] : void 0, h = l.value[0], c = a;
  i.edgeType = c ? "multibezier" : "bezier", i.ctrlpts = [];
  for (var v = 0; v < u; v++) {
    var d = (0.5 - e.eles.length / 2 + r) * s * (n ? -1 : 1), g = void 0, p = wo(d);
    c && (f = o ? o.pfValue[v] : s, h = l.value[v]), a ? g = f : g = f !== void 0 ? p * f : void 0;
    var y = g !== void 0 ? g : d, E = 1 - h, m = h, T = this.findMidptPtsEtc(t, e), C = T.midptPts, S = T.vectorNormInverse, b = {
      x: C.x1 * E + C.x2 * m,
      y: C.y1 * E + C.y2 * m
    };
    i.ctrlpts.push(b.x + S.x * y, b.y + S.y * y);
  }
};
nt.findTaxiPoints = function(t, e) {
  var r = t._private.rscratch;
  r.edgeType = "segments";
  var a = "vertical", n = "horizontal", i = "leftward", s = "rightward", o = "downward", l = "upward", u = "auto", f = e.posPts, h = e.srcW, c = e.srcH, v = e.tgtW, d = e.tgtH, g = t.pstyle("edge-distances").value, p = g !== "node-position", y = t.pstyle("taxi-direction").value, E = y, m = t.pstyle("taxi-turn"), T = m.units === "%", C = m.pfValue, S = C < 0, b = t.pstyle("taxi-turn-min-distance").pfValue, x = p ? (h + v) / 2 : 0, w = p ? (c + d) / 2 : 0, D = f.x2 - f.x1, A = f.y2 - f.y1, L = function(Z, oe) {
    return Z > 0 ? Math.max(Z - oe, 0) : Math.min(Z + oe, 0);
  }, I = L(D, x), O = L(A, w), P = !1;
  E === u ? y = Math.abs(I) > Math.abs(O) ? n : a : E === l || E === o ? (y = a, P = !0) : (E === i || E === s) && (y = n, P = !0);
  var R = y === a, M = R ? O : I, k = R ? A : D, B = wo(k), G = !1;
  !(P && (T || S)) && (E === o && k < 0 || E === l && k > 0 || E === i && k > 0 || E === s && k < 0) && (B *= -1, M = B * Math.abs(M), G = !0);
  var F;
  if (T) {
    var $ = C < 0 ? 1 + C : C;
    F = $ * M;
  } else {
    var U = C < 0 ? M : 0;
    F = U + C * B;
  }
  var _ = function(Z) {
    return Math.abs(Z) < b || Math.abs(Z) >= Math.abs(M);
  }, Y = _(F), W = _(Math.abs(M) - Math.abs(F)), z = Y || W;
  if (z && !G)
    if (R) {
      var K = Math.abs(k) <= c / 2, j = Math.abs(D) <= v / 2;
      if (K) {
        var Q = (f.x1 + f.x2) / 2, ee = f.y1, ne = f.y2;
        r.segpts = [Q, ee, Q, ne];
      } else if (j) {
        var ce = (f.y1 + f.y2) / 2, te = f.x1, re = f.x2;
        r.segpts = [te, ce, re, ce];
      } else
        r.segpts = [f.x1, f.y2];
    } else {
      var ue = Math.abs(k) <= h / 2, le = Math.abs(A) <= d / 2;
      if (ue) {
        var se = (f.y1 + f.y2) / 2, fe = f.x1, xe = f.x2;
        r.segpts = [fe, se, xe, se];
      } else if (le) {
        var Ee = (f.x1 + f.x2) / 2, ge = f.y1, we = f.y2;
        r.segpts = [Ee, ge, Ee, we];
      } else
        r.segpts = [f.x2, f.y1];
    }
  else if (R) {
    var H = f.y1 + F + (p ? c / 2 * B : 0), N = f.x1, V = f.x2;
    r.segpts = [N, H, V, H];
  } else {
    var J = f.x1 + F + (p ? h / 2 * B : 0), X = f.y1, q = f.y2;
    r.segpts = [J, X, J, q];
  }
};
nt.tryToCorrectInvalidPoints = function(t, e) {
  var r = t._private.rscratch;
  if (r.edgeType === "bezier") {
    var a = e.srcPos, n = e.tgtPos, i = e.srcW, s = e.srcH, o = e.tgtW, l = e.tgtH, u = e.srcShape, f = e.tgtShape, h = !ae(r.startX) || !ae(r.startY), c = !ae(r.arrowStartX) || !ae(r.arrowStartY), v = !ae(r.endX) || !ae(r.endY), d = !ae(r.arrowEndX) || !ae(r.arrowEndY), g = 3, p = this.getArrowWidth(t.pstyle("width").pfValue, t.pstyle("arrow-scale").value) * this.arrowShapeWidth, y = g * p, E = nr({
      x: r.ctrlpts[0],
      y: r.ctrlpts[1]
    }, {
      x: r.startX,
      y: r.startY
    }), m = E < y, T = nr({
      x: r.ctrlpts[0],
      y: r.ctrlpts[1]
    }, {
      x: r.endX,
      y: r.endY
    }), C = T < y, S = !1;
    if (h || c || m) {
      S = !0;
      var b = {
        // delta
        x: r.ctrlpts[0] - a.x,
        y: r.ctrlpts[1] - a.y
      }, x = Math.sqrt(b.x * b.x + b.y * b.y), w = {
        // normalised delta
        x: b.x / x,
        y: b.y / x
      }, D = Math.max(i, s), A = {
        // *2 radius guarantees outside shape
        x: r.ctrlpts[0] + w.x * 2 * D,
        y: r.ctrlpts[1] + w.y * 2 * D
      }, L = u.intersectLine(a.x, a.y, i, s, A.x, A.y, 0);
      m ? (r.ctrlpts[0] = r.ctrlpts[0] + w.x * (y - E), r.ctrlpts[1] = r.ctrlpts[1] + w.y * (y - E)) : (r.ctrlpts[0] = L[0] + w.x * y, r.ctrlpts[1] = L[1] + w.y * y);
    }
    if (v || d || C) {
      S = !0;
      var I = {
        // delta
        x: r.ctrlpts[0] - n.x,
        y: r.ctrlpts[1] - n.y
      }, O = Math.sqrt(I.x * I.x + I.y * I.y), P = {
        // normalised delta
        x: I.x / O,
        y: I.y / O
      }, R = Math.max(i, s), M = {
        // *2 radius guarantees outside shape
        x: r.ctrlpts[0] + P.x * 2 * R,
        y: r.ctrlpts[1] + P.y * 2 * R
      }, k = f.intersectLine(n.x, n.y, o, l, M.x, M.y, 0);
      C ? (r.ctrlpts[0] = r.ctrlpts[0] + P.x * (y - T), r.ctrlpts[1] = r.ctrlpts[1] + P.y * (y - T)) : (r.ctrlpts[0] = k[0] + P.x * y, r.ctrlpts[1] = k[1] + P.y * y);
    }
    S && this.findEndpoints(t);
  }
};
nt.storeAllpts = function(t) {
  var e = t._private.rscratch;
  if (e.edgeType === "multibezier" || e.edgeType === "bezier" || e.edgeType === "self" || e.edgeType === "compound") {
    e.allpts = [], e.allpts.push(e.startX, e.startY);
    for (var r = 0; r + 1 < e.ctrlpts.length; r += 2)
      e.allpts.push(e.ctrlpts[r], e.ctrlpts[r + 1]), r + 3 < e.ctrlpts.length && e.allpts.push((e.ctrlpts[r] + e.ctrlpts[r + 2]) / 2, (e.ctrlpts[r + 1] + e.ctrlpts[r + 3]) / 2);
    e.allpts.push(e.endX, e.endY);
    var a, n;
    e.ctrlpts.length / 2 % 2 === 0 ? (a = e.allpts.length / 2 - 1, e.midX = e.allpts[a], e.midY = e.allpts[a + 1]) : (a = e.allpts.length / 2 - 3, n = 0.5, e.midX = Ye(e.allpts[a], e.allpts[a + 2], e.allpts[a + 4], n), e.midY = Ye(e.allpts[a + 1], e.allpts[a + 3], e.allpts[a + 5], n));
  } else if (e.edgeType === "straight")
    e.allpts = [e.startX, e.startY, e.endX, e.endY], e.midX = (e.startX + e.endX + e.arrowStartX + e.arrowEndX) / 4, e.midY = (e.startY + e.endY + e.arrowStartY + e.arrowEndY) / 4;
  else if (e.edgeType === "segments")
    if (e.allpts = [], e.allpts.push(e.startX, e.startY), e.allpts.push.apply(e.allpts, e.segpts), e.allpts.push(e.endX, e.endY), e.segpts.length % 4 === 0) {
      var i = e.segpts.length / 2, s = i - 2;
      e.midX = (e.segpts[s] + e.segpts[i]) / 2, e.midY = (e.segpts[s + 1] + e.segpts[i + 1]) / 2;
    } else {
      var o = e.segpts.length / 2 - 1;
      e.midX = e.segpts[o], e.midY = e.segpts[o + 1];
    }
};
nt.checkForInvalidEdgeWarning = function(t) {
  var e = t[0]._private.rscratch;
  e.nodesOverlap || ae(e.startX) && ae(e.startY) && ae(e.endX) && ae(e.endY) ? e.loggedErr = !1 : e.loggedErr || (e.loggedErr = !0, Ne("Edge `" + t.id() + "` has invalid endpoints and so it is impossible to draw.  Adjust your edge style (e.g. control points) accordingly or use an alternative edge type.  This is expected behaviour when the source node and the target node overlap."));
};
nt.findEdgeControlPoints = function(t) {
  var e = this;
  if (!(!t || t.length === 0)) {
    for (var r = this, a = r.cy, n = a.hasCompoundNodes(), i = {
      map: new Lt(),
      get: function(b) {
        var x = this.map.get(b[0]);
        return x != null ? x.get(b[1]) : null;
      },
      set: function(b, x) {
        var w = this.map.get(b[0]);
        w == null && (w = new Lt(), this.map.set(b[0], w)), w.set(b[1], x);
      }
    }, s = [], o = [], l = 0; l < t.length; l++) {
      var u = t[l], f = u._private, h = u.pstyle("curve-style").value;
      if (!(u.removed() || !u.takesUpSpace())) {
        if (h === "haystack") {
          o.push(u);
          continue;
        }
        var c = h === "unbundled-bezier" || h === "segments" || h === "straight" || h === "straight-triangle" || h === "taxi", v = h === "unbundled-bezier" || h === "bezier", d = f.source, g = f.target, p = d.poolIndex(), y = g.poolIndex(), E = [p, y].sort(), m = i.get(E);
        m == null && (m = {
          eles: []
        }, i.set(E, m), s.push(E)), m.eles.push(u), c && (m.hasUnbundled = !0), v && (m.hasBezier = !0);
      }
    }
    for (var T = function(b) {
      var x = s[b], w = i.get(x), D = void 0;
      if (!w.hasUnbundled) {
        var A = w.eles[0].parallelEdges().filter(function(we) {
          return we.isBundledBezier();
        });
        li(w.eles), A.forEach(function(we) {
          return w.eles.push(we);
        }), w.eles.sort(function(we, H) {
          return we.poolIndex() - H.poolIndex();
        });
      }
      var L = w.eles[0], I = L.source(), O = L.target();
      if (I.poolIndex() > O.poolIndex()) {
        var P = I;
        I = O, O = P;
      }
      var R = w.srcPos = I.position(), M = w.tgtPos = O.position(), k = w.srcW = I.outerWidth(), B = w.srcH = I.outerHeight(), G = w.tgtW = O.outerWidth(), F = w.tgtH = O.outerHeight(), $ = w.srcShape = r.nodeShapes[e.getNodeShape(I)], U = w.tgtShape = r.nodeShapes[e.getNodeShape(O)];
      w.dirCounts = {
        north: 0,
        west: 0,
        south: 0,
        east: 0,
        northwest: 0,
        southwest: 0,
        northeast: 0,
        southeast: 0
      };
      for (var _ = 0; _ < w.eles.length; _++) {
        var Y = w.eles[_], W = Y[0]._private.rscratch, z = Y.pstyle("curve-style").value, K = z === "unbundled-bezier" || z === "segments" || z === "taxi", j = !I.same(Y.source());
        if (!w.calculatedIntersection && I !== O && (w.hasBezier || w.hasUnbundled)) {
          w.calculatedIntersection = !0;
          var Q = $.intersectLine(R.x, R.y, k, B, M.x, M.y, 0), ee = w.srcIntn = Q, ne = U.intersectLine(M.x, M.y, G, F, R.x, R.y, 0), ce = w.tgtIntn = ne, te = w.intersectionPts = {
            x1: Q[0],
            x2: ne[0],
            y1: Q[1],
            y2: ne[1]
          }, re = w.posPts = {
            x1: R.x,
            x2: M.x,
            y1: R.y,
            y2: M.y
          }, ue = ne[1] - Q[1], le = ne[0] - Q[0], se = Math.sqrt(le * le + ue * ue), fe = w.vector = {
            x: le,
            y: ue
          }, xe = w.vectorNorm = {
            x: fe.x / se,
            y: fe.y / se
          }, Ee = {
            x: -xe.y,
            y: xe.x
          };
          w.nodesOverlap = !ae(se) || U.checkPoint(Q[0], Q[1], 0, G, F, M.x, M.y) || $.checkPoint(ne[0], ne[1], 0, k, B, R.x, R.y), w.vectorNormInverse = Ee, D = {
            nodesOverlap: w.nodesOverlap,
            dirCounts: w.dirCounts,
            calculatedIntersection: !0,
            hasBezier: w.hasBezier,
            hasUnbundled: w.hasUnbundled,
            eles: w.eles,
            srcPos: M,
            tgtPos: R,
            srcW: G,
            srcH: F,
            tgtW: k,
            tgtH: B,
            srcIntn: ce,
            tgtIntn: ee,
            srcShape: U,
            tgtShape: $,
            posPts: {
              x1: re.x2,
              y1: re.y2,
              x2: re.x1,
              y2: re.y1
            },
            intersectionPts: {
              x1: te.x2,
              y1: te.y2,
              x2: te.x1,
              y2: te.y1
            },
            vector: {
              x: -fe.x,
              y: -fe.y
            },
            vectorNorm: {
              x: -xe.x,
              y: -xe.y
            },
            vectorNormInverse: {
              x: -Ee.x,
              y: -Ee.y
            }
          };
        }
        var ge = j ? D : w;
        W.nodesOverlap = ge.nodesOverlap, W.srcIntn = ge.srcIntn, W.tgtIntn = ge.tgtIntn, n && (I.isParent() || I.isChild() || O.isParent() || O.isChild()) && (I.parents().anySame(O) || O.parents().anySame(I) || I.same(O) && I.isParent()) ? e.findCompoundLoopPoints(Y, ge, _, K) : I === O ? e.findLoopPoints(Y, ge, _, K) : z === "segments" ? e.findSegmentsPoints(Y, ge) : z === "taxi" ? e.findTaxiPoints(Y, ge) : z === "straight" || !K && w.eles.length % 2 === 1 && _ === Math.floor(w.eles.length / 2) ? e.findStraightEdgePoints(Y) : e.findBezierPoints(Y, ge, _, K, j), e.findEndpoints(Y), e.tryToCorrectInvalidPoints(Y, ge), e.checkForInvalidEdgeWarning(Y), e.storeAllpts(Y), e.storeEdgeProjections(Y), e.calculateArrowAngles(Y), e.recalculateEdgeLabelProjections(Y), e.calculateLabelAngles(Y);
      }
    }, C = 0; C < s.length; C++)
      T(C);
    this.findHaystackPoints(o);
  }
};
function ll(t) {
  var e = [];
  if (t != null) {
    for (var r = 0; r < t.length; r += 2) {
      var a = t[r], n = t[r + 1];
      e.push({
        x: a,
        y: n
      });
    }
    return e;
  }
}
nt.getSegmentPoints = function(t) {
  var e = t[0]._private.rscratch, r = e.edgeType;
  if (r === "segments")
    return this.recalculateRenderedStyle(t), ll(e.segpts);
};
nt.getControlPoints = function(t) {
  var e = t[0]._private.rscratch, r = e.edgeType;
  if (r === "bezier" || r === "multibezier" || r === "self" || r === "compound")
    return this.recalculateRenderedStyle(t), ll(e.ctrlpts);
};
nt.getEdgeMidpoint = function(t) {
  var e = t[0]._private.rscratch;
  return this.recalculateRenderedStyle(t), {
    x: e.midX,
    y: e.midY
  };
};
var ya = {};
ya.manualEndptToPx = function(t, e) {
  var r = this, a = t.position(), n = t.outerWidth(), i = t.outerHeight();
  if (e.value.length === 2) {
    var s = [e.pfValue[0], e.pfValue[1]];
    return e.units[0] === "%" && (s[0] = s[0] * n), e.units[1] === "%" && (s[1] = s[1] * i), s[0] += a.x, s[1] += a.y, s;
  } else {
    var o = e.pfValue[0];
    o = -Math.PI / 2 + o;
    var l = 2 * Math.max(n, i), u = [a.x + Math.cos(o) * l, a.y + Math.sin(o) * l];
    return r.nodeShapes[this.getNodeShape(t)].intersectLine(a.x, a.y, n, i, u[0], u[1], 0);
  }
};
ya.findEndpoints = function(t) {
  var e = this, r, a = t.source()[0], n = t.target()[0], i = a.position(), s = n.position(), o = t.pstyle("target-arrow-shape").value, l = t.pstyle("source-arrow-shape").value, u = t.pstyle("target-distance-from-node").pfValue, f = t.pstyle("source-distance-from-node").pfValue, h = t.pstyle("curve-style").value, c = t._private.rscratch, v = c.edgeType, d = h === "taxi", g = v === "self" || v === "compound", p = v === "bezier" || v === "multibezier" || g, y = v !== "bezier", E = v === "straight" || v === "segments", m = v === "segments", T = p || y || E, C = g || d, S = t.pstyle("source-endpoint"), b = C ? "outside-to-node" : S.value, x = t.pstyle("target-endpoint"), w = C ? "outside-to-node" : x.value;
  c.srcManEndpt = S, c.tgtManEndpt = x;
  var D, A, L, I;
  if (p) {
    var O = [c.ctrlpts[0], c.ctrlpts[1]], P = y ? [c.ctrlpts[c.ctrlpts.length - 2], c.ctrlpts[c.ctrlpts.length - 1]] : O;
    D = P, A = O;
  } else if (E) {
    var R = m ? c.segpts.slice(0, 2) : [s.x, s.y], M = m ? c.segpts.slice(c.segpts.length - 2) : [i.x, i.y];
    D = M, A = R;
  }
  if (w === "inside-to-node")
    r = [s.x, s.y];
  else if (x.units)
    r = this.manualEndptToPx(n, x);
  else if (w === "outside-to-line")
    r = c.tgtIntn;
  else if (w === "outside-to-node" || w === "outside-to-node-or-label" ? L = D : (w === "outside-to-line" || w === "outside-to-line-or-label") && (L = [i.x, i.y]), r = e.nodeShapes[this.getNodeShape(n)].intersectLine(s.x, s.y, n.outerWidth(), n.outerHeight(), L[0], L[1], 0), w === "outside-to-node-or-label" || w === "outside-to-line-or-label") {
    var k = n._private.rscratch, B = k.labelWidth, G = k.labelHeight, F = k.labelX, $ = k.labelY, U = B / 2, _ = G / 2, Y = n.pstyle("text-valign").value;
    Y === "top" ? $ -= _ : Y === "bottom" && ($ += _);
    var W = n.pstyle("text-halign").value;
    W === "left" ? F -= U : W === "right" && (F += U);
    var z = aa(L[0], L[1], [F - U, $ - _, F + U, $ - _, F + U, $ + _, F - U, $ + _], s.x, s.y);
    if (z.length > 0) {
      var K = i, j = er(K, Er(r)), Q = er(K, Er(z)), ee = j;
      if (Q < j && (r = z, ee = Q), z.length > 2) {
        var ne = er(K, {
          x: z[2],
          y: z[3]
        });
        ne < ee && (r = [z[2], z[3]]);
      }
    }
  }
  var ce = Da(r, D, e.arrowShapes[o].spacing(t) + u), te = Da(r, D, e.arrowShapes[o].gap(t) + u);
  if (c.endX = te[0], c.endY = te[1], c.arrowEndX = ce[0], c.arrowEndY = ce[1], b === "inside-to-node")
    r = [i.x, i.y];
  else if (S.units)
    r = this.manualEndptToPx(a, S);
  else if (b === "outside-to-line")
    r = c.srcIntn;
  else if (b === "outside-to-node" || b === "outside-to-node-or-label" ? I = A : (b === "outside-to-line" || b === "outside-to-line-or-label") && (I = [s.x, s.y]), r = e.nodeShapes[this.getNodeShape(a)].intersectLine(i.x, i.y, a.outerWidth(), a.outerHeight(), I[0], I[1], 0), b === "outside-to-node-or-label" || b === "outside-to-line-or-label") {
    var re = a._private.rscratch, ue = re.labelWidth, le = re.labelHeight, se = re.labelX, fe = re.labelY, xe = ue / 2, Ee = le / 2, ge = a.pstyle("text-valign").value;
    ge === "top" ? fe -= Ee : ge === "bottom" && (fe += Ee);
    var we = a.pstyle("text-halign").value;
    we === "left" ? se -= xe : we === "right" && (se += xe);
    var H = aa(I[0], I[1], [se - xe, fe - Ee, se + xe, fe - Ee, se + xe, fe + Ee, se - xe, fe + Ee], i.x, i.y);
    if (H.length > 0) {
      var N = s, V = er(N, Er(r)), J = er(N, Er(H)), X = V;
      if (J < V && (r = [H[0], H[1]], X = J), H.length > 2) {
        var q = er(N, {
          x: H[2],
          y: H[3]
        });
        q < X && (r = [H[2], H[3]]);
      }
    }
  }
  var he = Da(r, A, e.arrowShapes[l].spacing(t) + f), Z = Da(r, A, e.arrowShapes[l].gap(t) + f);
  c.startX = Z[0], c.startY = Z[1], c.arrowStartX = he[0], c.arrowStartY = he[1], T && (!ae(c.startX) || !ae(c.startY) || !ae(c.endX) || !ae(c.endY) ? c.badLine = !0 : c.badLine = !1);
};
ya.getSourceEndpoint = function(t) {
  var e = t[0]._private.rscratch;
  switch (this.recalculateRenderedStyle(t), e.edgeType) {
    case "haystack":
      return {
        x: e.haystackPts[0],
        y: e.haystackPts[1]
      };
    default:
      return {
        x: e.arrowStartX,
        y: e.arrowStartY
      };
  }
};
ya.getTargetEndpoint = function(t) {
  var e = t[0]._private.rscratch;
  switch (this.recalculateRenderedStyle(t), e.edgeType) {
    case "haystack":
      return {
        x: e.haystackPts[2],
        y: e.haystackPts[3]
      };
    default:
      return {
        x: e.arrowEndX,
        y: e.arrowEndY
      };
  }
};
var Ei = {};
function Dy(t, e, r) {
  for (var a = function(u, f, h, c) {
    return Ye(u, f, h, c);
  }, n = e._private, i = n.rstyle.bezierPts, s = 0; s < t.bezierProjPcts.length; s++) {
    var o = t.bezierProjPcts[s];
    i.push({
      x: a(r[0], r[2], r[4], o),
      y: a(r[1], r[3], r[5], o)
    });
  }
}
Ei.storeEdgeProjections = function(t) {
  var e = t._private, r = e.rscratch, a = r.edgeType;
  if (e.rstyle.bezierPts = null, e.rstyle.linePts = null, e.rstyle.haystackPts = null, a === "multibezier" || a === "bezier" || a === "self" || a === "compound") {
    e.rstyle.bezierPts = [];
    for (var n = 0; n + 5 < r.allpts.length; n += 4)
      Dy(this, t, r.allpts.slice(n, n + 6));
  } else if (a === "segments")
    for (var i = e.rstyle.linePts = [], n = 0; n + 1 < r.allpts.length; n += 2)
      i.push({
        x: r.allpts[n],
        y: r.allpts[n + 1]
      });
  else if (a === "haystack") {
    var s = r.haystackPts;
    e.rstyle.haystackPts = [{
      x: s[0],
      y: s[1]
    }, {
      x: s[2],
      y: s[3]
    }];
  }
  e.rstyle.arrowWidth = this.getArrowWidth(t.pstyle("width").pfValue, t.pstyle("arrow-scale").value) * this.arrowShapeWidth;
};
Ei.recalculateEdgeProjections = function(t) {
  this.findEdgeControlPoints(t);
};
var Ot = {};
Ot.recalculateNodeLabelProjection = function(t) {
  var e = t.pstyle("label").strValue;
  if (!Yt(e)) {
    var r, a, n = t._private, i = t.width(), s = t.height(), o = t.padding(), l = t.position(), u = t.pstyle("text-halign").strValue, f = t.pstyle("text-valign").strValue, h = n.rscratch, c = n.rstyle;
    switch (u) {
      case "left":
        r = l.x - i / 2 - o;
        break;
      case "right":
        r = l.x + i / 2 + o;
        break;
      default:
        r = l.x;
    }
    switch (f) {
      case "top":
        a = l.y - s / 2 - o;
        break;
      case "bottom":
        a = l.y + s / 2 + o;
        break;
      default:
        a = l.y;
    }
    h.labelX = r, h.labelY = a, c.labelX = r, c.labelY = a, this.calculateLabelAngles(t), this.applyLabelDimensions(t);
  }
};
var ul = function(e, r) {
  var a = Math.atan(r / e);
  return e === 0 && a < 0 && (a = a * -1), a;
}, fl = function(e, r) {
  var a = r.x - e.x, n = r.y - e.y;
  return ul(a, n);
}, Sy = function(e, r, a, n) {
  var i = ra(0, n - 1e-3, 1), s = ra(0, n + 1e-3, 1), o = xr(e, r, a, i), l = xr(e, r, a, s);
  return fl(o, l);
};
Ot.recalculateEdgeLabelProjections = function(t) {
  var e, r = t._private, a = r.rscratch, n = this, i = {
    mid: t.pstyle("label").strValue,
    source: t.pstyle("source-label").strValue,
    target: t.pstyle("target-label").strValue
  };
  if (i.mid || i.source || i.target) {
    e = {
      x: a.midX,
      y: a.midY
    };
    var s = function(h, c, v) {
      $t(r.rscratch, h, c, v), $t(r.rstyle, h, c, v);
    };
    s("labelX", null, e.x), s("labelY", null, e.y);
    var o = ul(a.midDispX, a.midDispY);
    s("labelAutoAngle", null, o);
    var l = function f() {
      if (f.cache)
        return f.cache;
      for (var h = [], c = 0; c + 5 < a.allpts.length; c += 4) {
        var v = {
          x: a.allpts[c],
          y: a.allpts[c + 1]
        }, d = {
          x: a.allpts[c + 2],
          y: a.allpts[c + 3]
        }, g = {
          x: a.allpts[c + 4],
          y: a.allpts[c + 5]
        };
        h.push({
          p0: v,
          p1: d,
          p2: g,
          startDist: 0,
          length: 0,
          segments: []
        });
      }
      var p = r.rstyle.bezierPts, y = n.bezierProjPcts.length;
      function E(b, x, w, D, A) {
        var L = nr(x, w), I = b.segments[b.segments.length - 1], O = {
          p0: x,
          p1: w,
          t0: D,
          t1: A,
          startDist: I ? I.startDist + I.length : 0,
          length: L
        };
        b.segments.push(O), b.length += L;
      }
      for (var m = 0; m < h.length; m++) {
        var T = h[m], C = h[m - 1];
        C && (T.startDist = C.startDist + C.length), E(T, T.p0, p[m * y], 0, n.bezierProjPcts[0]);
        for (var S = 0; S < y - 1; S++)
          E(T, p[m * y + S], p[m * y + S + 1], n.bezierProjPcts[S], n.bezierProjPcts[S + 1]);
        E(T, p[m * y + y - 1], T.p2, n.bezierProjPcts[y - 1], 1);
      }
      return f.cache = h;
    }, u = function(h) {
      var c, v = h === "source";
      if (i[h]) {
        var d = t.pstyle(h + "-text-offset").pfValue;
        switch (a.edgeType) {
          case "self":
          case "compound":
          case "bezier":
          case "multibezier": {
            for (var g = l(), p, y = 0, E = 0, m = 0; m < g.length; m++) {
              for (var T = g[v ? m : g.length - 1 - m], C = 0; C < T.segments.length; C++) {
                var S = T.segments[v ? C : T.segments.length - 1 - C], b = m === g.length - 1 && C === T.segments.length - 1;
                if (y = E, E += S.length, E >= d || b) {
                  p = {
                    cp: T,
                    segment: S
                  };
                  break;
                }
              }
              if (p)
                break;
            }
            var x = p.cp, w = p.segment, D = (d - y) / w.length, A = w.t1 - w.t0, L = v ? w.t0 + A * D : w.t1 - A * D;
            L = ra(0, L, 1), e = xr(x.p0, x.p1, x.p2, L), c = Sy(x.p0, x.p1, x.p2, L);
            break;
          }
          case "straight":
          case "segments":
          case "haystack": {
            for (var I = 0, O, P, R, M, k = a.allpts.length, B = 0; B + 3 < k && (v ? (R = {
              x: a.allpts[B],
              y: a.allpts[B + 1]
            }, M = {
              x: a.allpts[B + 2],
              y: a.allpts[B + 3]
            }) : (R = {
              x: a.allpts[k - 2 - B],
              y: a.allpts[k - 1 - B]
            }, M = {
              x: a.allpts[k - 4 - B],
              y: a.allpts[k - 3 - B]
            }), O = nr(R, M), P = I, I += O, !(I >= d)); B += 2)
              ;
            var G = d - P, F = G / O;
            F = ra(0, F, 1), e = $d(R, M, F), c = fl(R, M);
            break;
          }
        }
        s("labelX", h, e.x), s("labelY", h, e.y), s("labelAutoAngle", h, c);
      }
    };
    u("source"), u("target"), this.applyLabelDimensions(t);
  }
};
Ot.applyLabelDimensions = function(t) {
  this.applyPrefixedLabelDimensions(t), t.isEdge() && (this.applyPrefixedLabelDimensions(t, "source"), this.applyPrefixedLabelDimensions(t, "target"));
};
Ot.applyPrefixedLabelDimensions = function(t, e) {
  var r = t._private, a = this.getLabelText(t, e), n = this.calculateLabelDimensions(t, a), i = t.pstyle("line-height").pfValue, s = t.pstyle("text-wrap").strValue, o = xt(r.rscratch, "labelWrapCachedLines", e) || [], l = s !== "wrap" ? 1 : Math.max(o.length, 1), u = n.height / l, f = u * i, h = n.width, c = n.height + (l - 1) * (i - 1) * u;
  $t(r.rstyle, "labelWidth", e, h), $t(r.rscratch, "labelWidth", e, h), $t(r.rstyle, "labelHeight", e, c), $t(r.rscratch, "labelHeight", e, c), $t(r.rscratch, "labelLineHeight", e, f);
};
Ot.getLabelText = function(t, e) {
  var r = t._private, a = e ? e + "-" : "", n = t.pstyle(a + "label").strValue, i = t.pstyle("text-transform").value, s = function(G, F) {
    return F ? ($t(r.rscratch, G, e, F), F) : xt(r.rscratch, G, e);
  };
  if (!n)
    return "";
  i == "none" || (i == "uppercase" ? n = n.toUpperCase() : i == "lowercase" && (n = n.toLowerCase()));
  var o = t.pstyle("text-wrap").value;
  if (o === "wrap") {
    var l = s("labelKey");
    if (l != null && s("labelWrapKey") === l)
      return s("labelWrapCachedText");
    for (var u = "​", f = n.split(`
`), h = t.pstyle("text-max-width").pfValue, c = t.pstyle("text-overflow-wrap").value, v = c === "anywhere", d = [], g = /[\s\u200b]+/, p = v ? "" : " ", y = 0; y < f.length; y++) {
      var E = f[y], m = this.calculateLabelDimensions(t, E), T = m.width;
      if (v) {
        var C = E.split("").join(u);
        E = C;
      }
      if (T > h) {
        for (var S = E.split(g), b = "", x = 0; x < S.length; x++) {
          var w = S[x], D = b.length === 0 ? w : b + p + w, A = this.calculateLabelDimensions(t, D), L = A.width;
          L <= h ? b += w + p : (b && d.push(b), b = w + p);
        }
        b.match(/^[\s\u200b]+$/) || d.push(b);
      } else
        d.push(E);
    }
    s("labelWrapCachedLines", d), n = s("labelWrapCachedText", d.join(`
`)), s("labelWrapKey", l);
  } else if (o === "ellipsis") {
    var I = t.pstyle("text-max-width").pfValue, O = "", P = "…", R = !1;
    if (this.calculateLabelDimensions(t, n).width < I)
      return n;
    for (var M = 0; M < n.length; M++) {
      var k = this.calculateLabelDimensions(t, O + n[M] + P).width;
      if (k > I)
        break;
      O += n[M], M === n.length - 1 && (R = !0);
    }
    return R || (O += P), O;
  }
  return n;
};
Ot.getLabelJustification = function(t) {
  var e = t.pstyle("text-justification").strValue, r = t.pstyle("text-halign").strValue;
  if (e === "auto")
    if (t.isNode())
      switch (r) {
        case "left":
          return "right";
        case "right":
          return "left";
        default:
          return "center";
      }
    else
      return "center";
  else
    return e;
};
Ot.calculateLabelDimensions = function(t, e) {
  var r = this, a = ar(e, t._private.labelDimsKey), n = r.labelDimCache || (r.labelDimCache = []), i = n[a];
  if (i != null)
    return i;
  var s = 0, o = t.pstyle("font-style").strValue, l = t.pstyle("font-size").pfValue, u = t.pstyle("font-family").strValue, f = t.pstyle("font-weight").strValue, h = this.labelCalcCanvas, c = this.labelCalcCanvasContext;
  if (!h) {
    h = this.labelCalcCanvas = document.createElement("canvas"), c = this.labelCalcCanvasContext = h.getContext("2d");
    var v = h.style;
    v.position = "absolute", v.left = "-9999px", v.top = "-9999px", v.zIndex = "-1", v.visibility = "hidden", v.pointerEvents = "none";
  }
  c.font = "".concat(o, " ").concat(f, " ").concat(l, "px ").concat(u);
  for (var d = 0, g = 0, p = e.split(`
`), y = 0; y < p.length; y++) {
    var E = p[y], m = c.measureText(E), T = Math.ceil(m.width), C = l;
    d = Math.max(T, d), g += C;
  }
  return d += s, g += s, n[a] = {
    width: d,
    height: g
  };
};
Ot.calculateLabelAngle = function(t, e) {
  var r = t._private, a = r.rscratch, n = t.isEdge(), i = e ? e + "-" : "", s = t.pstyle(i + "text-rotation"), o = s.strValue;
  return o === "none" ? 0 : n && o === "autorotate" ? a.labelAutoAngle : o === "autorotate" ? 0 : s.pfValue;
};
Ot.calculateLabelAngles = function(t) {
  var e = this, r = t.isEdge(), a = t._private, n = a.rscratch;
  n.labelAngle = e.calculateLabelAngle(t), r && (n.sourceLabelAngle = e.calculateLabelAngle(t, "source"), n.targetLabelAngle = e.calculateLabelAngle(t, "target"));
};
var hl = {}, Rs = 28, ks = !1;
hl.getNodeShape = function(t) {
  var e = this, r = t.pstyle("shape").value;
  if (r === "cutrectangle" && (t.width() < Rs || t.height() < Rs))
    return ks || (Ne("The `cutrectangle` node shape can not be used at small sizes so `rectangle` is used instead"), ks = !0), "rectangle";
  if (t.isParent())
    return r === "rectangle" || r === "roundrectangle" || r === "round-rectangle" || r === "cutrectangle" || r === "cut-rectangle" || r === "barrel" ? r : "rectangle";
  if (r === "polygon") {
    var a = t.pstyle("shape-polygon-points").value;
    return e.nodeShapes.makePolygon(a).name;
  }
  return r;
};
var bn = {};
bn.registerCalculationListeners = function() {
  var t = this.cy, e = t.collection(), r = this, a = function(s) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    if (e.merge(s), o)
      for (var l = 0; l < s.length; l++) {
        var u = s[l], f = u._private, h = f.rstyle;
        h.clean = !1, h.cleanConnected = !1;
      }
  };
  r.binder(t).on("bounds.* dirty.*", function(s) {
    var o = s.target;
    a(o);
  }).on("style.* background.*", function(s) {
    var o = s.target;
    a(o, !1);
  });
  var n = function(s) {
    if (s) {
      var o = r.onUpdateEleCalcsFns;
      e.cleanStyle();
      for (var l = 0; l < e.length; l++) {
        var u = e[l], f = u._private.rstyle;
        u.isNode() && !f.cleanConnected && (a(u.connectedEdges()), f.cleanConnected = !0);
      }
      if (o)
        for (var h = 0; h < o.length; h++) {
          var c = o[h];
          c(s, e);
        }
      r.recalculateRenderedStyle(e), e = t.collection();
    }
  };
  r.flushRenderedStyleQueue = function() {
    n(!0);
  }, r.beforeRender(n, r.beforeRenderPriorities.eleCalcs);
};
bn.onUpdateEleCalcs = function(t) {
  var e = this.onUpdateEleCalcsFns = this.onUpdateEleCalcsFns || [];
  e.push(t);
};
bn.recalculateRenderedStyle = function(t, e) {
  var r = function(T) {
    return T._private.rstyle.cleanConnected;
  }, a = [], n = [];
  if (!this.destroyed) {
    e === void 0 && (e = !0);
    for (var i = 0; i < t.length; i++) {
      var s = t[i], o = s._private, l = o.rstyle;
      s.isEdge() && (!r(s.source()) || !r(s.target())) && (l.clean = !1), !(e && l.clean || s.removed()) && s.pstyle("display").value !== "none" && (o.group === "nodes" ? n.push(s) : a.push(s), l.clean = !0);
    }
    for (var u = 0; u < n.length; u++) {
      var f = n[u], h = f._private, c = h.rstyle, v = f.position();
      this.recalculateNodeLabelProjection(f), c.nodeX = v.x, c.nodeY = v.y, c.nodeW = f.pstyle("width").pfValue, c.nodeH = f.pstyle("height").pfValue;
    }
    this.recalculateEdgeProjections(a);
    for (var d = 0; d < a.length; d++) {
      var g = a[d], p = g._private, y = p.rstyle, E = p.rscratch;
      y.srcX = E.arrowStartX, y.srcY = E.arrowStartY, y.tgtX = E.arrowEndX, y.tgtY = E.arrowEndY, y.midX = E.midX, y.midY = E.midY, y.labelAngle = E.labelAngle, y.sourceLabelAngle = E.sourceLabelAngle, y.targetLabelAngle = E.targetLabelAngle;
    }
  }
};
var En = {};
En.updateCachedGrabbedEles = function() {
  var t = this.cachedZSortedEles;
  if (t) {
    t.drag = [], t.nondrag = [];
    for (var e = [], r = 0; r < t.length; r++) {
      var a = t[r], n = a._private.rscratch;
      a.grabbed() && !a.isParent() ? e.push(a) : n.inDragLayer ? t.drag.push(a) : t.nondrag.push(a);
    }
    for (var r = 0; r < e.length; r++) {
      var a = e[r];
      t.drag.push(a);
    }
  }
};
En.invalidateCachedZSortedEles = function() {
  this.cachedZSortedEles = null;
};
En.getCachedZSortedEles = function(t) {
  if (t || !this.cachedZSortedEles) {
    var e = this.cy.mutableElements().toArray();
    e.sort(Qo), e.interactive = e.filter(function(r) {
      return r.interactive();
    }), this.cachedZSortedEles = e, this.updateCachedGrabbedEles();
  } else
    e = this.cachedZSortedEles;
  return e;
};
var vl = {};
[fr, ja, nt, ya, Ei, Ot, hl, bn, En].forEach(function(t) {
  de(vl, t);
});
var cl = {};
cl.getCachedImage = function(t, e, r) {
  var a = this, n = a.imageCache = a.imageCache || {}, i = n[t];
  if (i)
    return i.image.complete || i.image.addEventListener("load", r), i.image;
  i = n[t] = n[t] || {};
  var s = i.image = new Image();
  s.addEventListener("load", r), s.addEventListener("error", function() {
    s.error = !0;
  });
  var o = "data:", l = t.substring(0, o.length).toLowerCase() === o;
  return l || (e = e === "null" ? null : e, s.crossOrigin = e), s.src = t, s;
};
var Br = {};
Br.registerBinding = function(t, e, r, a) {
  var n = Array.prototype.slice.apply(arguments, [1]), i = this.binder(t);
  return i.on.apply(i, n);
};
Br.binder = function(t) {
  var e = this, r = e.cy.window(), a = t === r || t === r.document || t === r.document.body || Yc(t);
  if (e.supportsPassiveEvents == null) {
    var n = !1;
    try {
      var i = Object.defineProperty({}, "passive", {
        get: function() {
          return n = !0, !0;
        }
      });
      r.addEventListener("test", null, i);
    } catch (o) {
    }
    e.supportsPassiveEvents = n;
  }
  var s = function(l, u, f) {
    var h = Array.prototype.slice.call(arguments);
    return a && e.supportsPassiveEvents && (h[2] = {
      capture: f != null ? f : !1,
      passive: !1,
      once: !1
    }), e.bindings.push({
      target: t,
      args: h
    }), (t.addEventListener || t.on).apply(t, h), this;
  };
  return {
    on: s,
    addEventListener: s,
    addListener: s,
    bind: s
  };
};
Br.nodeIsDraggable = function(t) {
  return t && t.isNode() && !t.locked() && t.grabbable();
};
Br.nodeIsGrabbable = function(t) {
  return this.nodeIsDraggable(t) && t.interactive();
};
Br.load = function() {
  var t = this, e = t.cy.window(), r = function(N) {
    return N.selected();
  }, a = function(N, V, J, X) {
    N == null && (N = t.cy);
    for (var q = 0; q < V.length; q++) {
      var he = V[q];
      N.emit({
        originalEvent: J,
        type: he,
        position: X
      });
    }
  }, n = function(N) {
    return N.shiftKey || N.metaKey || N.ctrlKey;
  }, i = function(N, V) {
    var J = !0;
    if (t.cy.hasCompoundNodes() && N && N.pannable())
      for (var X = 0; V && X < V.length; X++) {
        var N = V[X];
        if (N.isNode() && N.isParent() && !N.pannable()) {
          J = !1;
          break;
        }
      }
    else
      J = !0;
    return J;
  }, s = function(N) {
    N[0]._private.grabbed = !0;
  }, o = function(N) {
    N[0]._private.grabbed = !1;
  }, l = function(N) {
    N[0]._private.rscratch.inDragLayer = !0;
  }, u = function(N) {
    N[0]._private.rscratch.inDragLayer = !1;
  }, f = function(N) {
    N[0]._private.rscratch.isGrabTarget = !0;
  }, h = function(N) {
    N[0]._private.rscratch.isGrabTarget = !1;
  }, c = function(N, V) {
    var J = V.addToList, X = J.has(N);
    !X && N.grabbable() && !N.locked() && (J.merge(N), s(N));
  }, v = function(N, V) {
    if (N.cy().hasCompoundNodes() && !(V.inDragLayer == null && V.addToList == null)) {
      var J = N.descendants();
      V.inDragLayer && (J.forEach(l), J.connectedEdges().forEach(l)), V.addToList && c(J, V);
    }
  }, d = function(N, V) {
    V = V || {};
    var J = N.cy().hasCompoundNodes();
    V.inDragLayer && (N.forEach(l), N.neighborhood().stdFilter(function(X) {
      return !J || X.isEdge();
    }).forEach(l)), V.addToList && N.forEach(function(X) {
      c(X, V);
    }), v(N, V), y(N, {
      inDragLayer: V.inDragLayer
    }), t.updateCachedGrabbedEles();
  }, g = d, p = function(N) {
    N && (t.getCachedZSortedEles().forEach(function(V) {
      o(V), u(V), h(V);
    }), t.updateCachedGrabbedEles());
  }, y = function(N, V) {
    if (!(V.inDragLayer == null && V.addToList == null) && N.cy().hasCompoundNodes()) {
      var J = N.ancestors().orphans();
      if (!J.same(N)) {
        var X = J.descendants().spawnSelf().merge(J).unmerge(N).unmerge(N.descendants()), q = X.connectedEdges();
        V.inDragLayer && (q.forEach(l), X.forEach(l)), V.addToList && X.forEach(function(he) {
          c(he, V);
        });
      }
    }
  }, E = function() {
    document.activeElement != null && document.activeElement.blur != null && document.activeElement.blur();
  }, m = typeof MutationObserver != "undefined", T = typeof ResizeObserver != "undefined";
  m ? (t.removeObserver = new MutationObserver(function(H) {
    for (var N = 0; N < H.length; N++) {
      var V = H[N], J = V.removedNodes;
      if (J)
        for (var X = 0; X < J.length; X++) {
          var q = J[X];
          if (q === t.container) {
            t.destroy();
            break;
          }
        }
    }
  }), t.container.parentNode && t.removeObserver.observe(t.container.parentNode, {
    childList: !0
  })) : t.registerBinding(t.container, "DOMNodeRemoved", function(H) {
    t.destroy();
  });
  var C = on.default(function() {
    t.cy.resize();
  }, 100);
  m && (t.styleObserver = new MutationObserver(C), t.styleObserver.observe(t.container, {
    attributes: !0
  })), t.registerBinding(e, "resize", C), T && (t.resizeObserver = new ResizeObserver(C), t.resizeObserver.observe(t.container));
  var S = function(N, V) {
    for (; N != null; )
      V(N), N = N.parentNode;
  }, b = function() {
    t.invalidateContainerClientCoordsCache();
  };
  S(t.container, function(H) {
    t.registerBinding(H, "transitionend", b), t.registerBinding(H, "animationend", b), t.registerBinding(H, "scroll", b);
  }), t.registerBinding(t.container, "contextmenu", function(H) {
    H.preventDefault();
  });
  var x = function() {
    return t.selection[4] !== 0;
  }, w = function(N) {
    for (var V = t.findContainerClientCoords(), J = V[0], X = V[1], q = V[2], he = V[3], Z = N.touches ? N.touches : [N], oe = !1, me = 0; me < Z.length; me++) {
      var Se = Z[me];
      if (J <= Se.clientX && Se.clientX <= J + q && X <= Se.clientY && Se.clientY <= X + he) {
        oe = !0;
        break;
      }
    }
    if (!oe)
      return !1;
    for (var pe = t.container, Te = N.target, ye = Te.parentNode, be = !1; ye; ) {
      if (ye === pe) {
        be = !0;
        break;
      }
      ye = ye.parentNode;
    }
    return !!be;
  };
  t.registerBinding(t.container, "mousedown", function(N) {
    if (w(N)) {
      N.preventDefault(), E(), t.hoverData.capture = !0, t.hoverData.which = N.which;
      var V = t.cy, J = [N.clientX, N.clientY], X = t.projectIntoViewport(J[0], J[1]), q = t.selection, he = t.findNearestElements(X[0], X[1], !0, !1), Z = he[0], oe = t.dragData.possibleDragElements;
      t.hoverData.mdownPos = X, t.hoverData.mdownGPos = J;
      var me = function() {
        t.hoverData.tapholdCancelled = !1, clearTimeout(t.hoverData.tapholdTimeout), t.hoverData.tapholdTimeout = setTimeout(function() {
          if (!t.hoverData.tapholdCancelled) {
            var Fe = t.hoverData.down;
            Fe ? Fe.emit({
              originalEvent: N,
              type: "taphold",
              position: {
                x: X[0],
                y: X[1]
              }
            }) : V.emit({
              originalEvent: N,
              type: "taphold",
              position: {
                x: X[0],
                y: X[1]
              }
            });
          }
        }, t.tapholdDuration);
      };
      if (N.which == 3) {
        t.hoverData.cxtStarted = !0;
        var Se = {
          originalEvent: N,
          type: "cxttapstart",
          position: {
            x: X[0],
            y: X[1]
          }
        };
        Z ? (Z.activate(), Z.emit(Se), t.hoverData.down = Z) : V.emit(Se), t.hoverData.downTime = (/* @__PURE__ */ new Date()).getTime(), t.hoverData.cxtDragged = !1;
      } else if (N.which == 1) {
        Z && Z.activate();
        {
          if (Z != null && t.nodeIsGrabbable(Z)) {
            var pe = function(Fe) {
              return {
                originalEvent: N,
                type: Fe,
                position: {
                  x: X[0],
                  y: X[1]
                }
              };
            }, Te = function(Fe) {
              Fe.emit(pe("grab"));
            };
            if (f(Z), !Z.selected())
              oe = t.dragData.possibleDragElements = V.collection(), g(Z, {
                addToList: oe
              }), Z.emit(pe("grabon")).emit(pe("grab"));
            else {
              oe = t.dragData.possibleDragElements = V.collection();
              var ye = V.$(function(be) {
                return be.isNode() && be.selected() && t.nodeIsGrabbable(be);
              });
              d(ye, {
                addToList: oe
              }), Z.emit(pe("grabon")), ye.forEach(Te);
            }
            t.redrawHint("eles", !0), t.redrawHint("drag", !0);
          }
          t.hoverData.down = Z, t.hoverData.downs = he, t.hoverData.downTime = (/* @__PURE__ */ new Date()).getTime();
        }
        a(Z, ["mousedown", "tapstart", "vmousedown"], N, {
          x: X[0],
          y: X[1]
        }), Z == null ? (q[4] = 1, t.data.bgActivePosistion = {
          x: X[0],
          y: X[1]
        }, t.redrawHint("select", !0), t.redraw()) : Z.pannable() && (q[4] = 1), me();
      }
      q[0] = q[2] = X[0], q[1] = q[3] = X[1];
    }
  }, !1), t.registerBinding(e, "mousemove", function(N) {
    var V = t.hoverData.capture;
    if (!(!V && !w(N))) {
      var J = !1, X = t.cy, q = X.zoom(), he = [N.clientX, N.clientY], Z = t.projectIntoViewport(he[0], he[1]), oe = t.hoverData.mdownPos, me = t.hoverData.mdownGPos, Se = t.selection, pe = null;
      !t.hoverData.draggingEles && !t.hoverData.dragging && !t.hoverData.selecting && (pe = t.findNearestElement(Z[0], Z[1], !0, !1));
      var Te = t.hoverData.last, ye = t.hoverData.down, be = [Z[0] - Se[2], Z[1] - Se[3]], Fe = t.dragData.possibleDragElements, Xe;
      if (me) {
        var pt = he[0] - me[0], yt = pt * pt, We = he[1] - me[1], ct = We * We, it = yt + ct;
        t.hoverData.isOverThresholdDrag = Xe = it >= t.desktopTapThreshold2;
      }
      var It = n(N);
      Xe && (t.hoverData.tapholdCancelled = !0);
      var Ft = function() {
        var Dt = t.hoverData.dragDelta = t.hoverData.dragDelta || [];
        Dt.length === 0 ? (Dt.push(be[0]), Dt.push(be[1])) : (Dt[0] += be[0], Dt[1] += be[1]);
      };
      J = !0, a(pe, ["mousemove", "vmousemove", "tapdrag"], N, {
        x: Z[0],
        y: Z[1]
      });
      var vr = function() {
        t.data.bgActivePosistion = void 0, t.hoverData.selecting || X.emit({
          originalEvent: N,
          type: "boxstart",
          position: {
            x: Z[0],
            y: Z[1]
          }
        }), Se[4] = 1, t.hoverData.selecting = !0, t.redrawHint("select", !0), t.redraw();
      };
      if (t.hoverData.which === 3) {
        if (Xe) {
          var Jt = {
            originalEvent: N,
            type: "cxtdrag",
            position: {
              x: Z[0],
              y: Z[1]
            }
          };
          ye ? ye.emit(Jt) : X.emit(Jt), t.hoverData.cxtDragged = !0, (!t.hoverData.cxtOver || pe !== t.hoverData.cxtOver) && (t.hoverData.cxtOver && t.hoverData.cxtOver.emit({
            originalEvent: N,
            type: "cxtdragout",
            position: {
              x: Z[0],
              y: Z[1]
            }
          }), t.hoverData.cxtOver = pe, pe && pe.emit({
            originalEvent: N,
            type: "cxtdragover",
            position: {
              x: Z[0],
              y: Z[1]
            }
          }));
        }
      } else if (t.hoverData.dragging) {
        if (J = !0, X.panningEnabled() && X.userPanningEnabled()) {
          var cr;
          if (t.hoverData.justStartedPan) {
            var Ea = t.hoverData.mdownPos;
            cr = {
              x: (Z[0] - Ea[0]) * q,
              y: (Z[1] - Ea[1]) * q
            }, t.hoverData.justStartedPan = !1;
          } else
            cr = {
              x: be[0] * q,
              y: be[1] * q
            };
          X.panBy(cr), X.emit("dragpan"), t.hoverData.dragged = !0;
        }
        Z = t.projectIntoViewport(N.clientX, N.clientY);
      } else if (Se[4] == 1 && (ye == null || ye.pannable())) {
        if (Xe) {
          if (!t.hoverData.dragging && X.boxSelectionEnabled() && (It || !X.panningEnabled() || !X.userPanningEnabled()))
            vr();
          else if (!t.hoverData.selecting && X.panningEnabled() && X.userPanningEnabled()) {
            var jt = i(ye, t.hoverData.downs);
            jt && (t.hoverData.dragging = !0, t.hoverData.justStartedPan = !0, Se[4] = 0, t.data.bgActivePosistion = Er(oe), t.redrawHint("select", !0), t.redraw());
          }
          ye && ye.pannable() && ye.active() && ye.unactivate();
        }
      } else {
        if (ye && ye.pannable() && ye.active() && ye.unactivate(), (!ye || !ye.grabbed()) && pe != Te && (Te && a(Te, ["mouseout", "tapdragout"], N, {
          x: Z[0],
          y: Z[1]
        }), pe && a(pe, ["mouseover", "tapdragover"], N, {
          x: Z[0],
          y: Z[1]
        }), t.hoverData.last = pe), ye)
          if (Xe) {
            if (X.boxSelectionEnabled() && It)
              ye && ye.grabbed() && (p(Fe), ye.emit("freeon"), Fe.emit("free"), t.dragData.didDrag && (ye.emit("dragfreeon"), Fe.emit("dragfree"))), vr();
            else if (ye && ye.grabbed() && t.nodeIsDraggable(ye)) {
              var ot = !t.dragData.didDrag;
              ot && t.redrawHint("eles", !0), t.dragData.didDrag = !0, t.hoverData.draggingEles || d(Fe, {
                inDragLayer: !0
              });
              var je = {
                x: 0,
                y: 0
              };
              if (ae(be[0]) && ae(be[1]) && (je.x += be[0], je.y += be[1], ot)) {
                var lt = t.hoverData.dragDelta;
                lt && ae(lt[0]) && ae(lt[1]) && (je.x += lt[0], je.y += lt[1]);
              }
              t.hoverData.draggingEles = !0, Fe.silentShift(je).emit("position drag"), t.redrawHint("drag", !0), t.redraw();
            }
          } else
            Ft();
        J = !0;
      }
      if (Se[2] = Z[0], Se[3] = Z[1], J)
        return N.stopPropagation && N.stopPropagation(), N.preventDefault && N.preventDefault(), !1;
    }
  }, !1);
  var D, A, L;
  t.registerBinding(e, "mouseup", function(N) {
    var V = t.hoverData.capture;
    if (V) {
      t.hoverData.capture = !1;
      var J = t.cy, X = t.projectIntoViewport(N.clientX, N.clientY), q = t.selection, he = t.findNearestElement(X[0], X[1], !0, !1), Z = t.dragData.possibleDragElements, oe = t.hoverData.down, me = n(N);
      if (t.data.bgActivePosistion && (t.redrawHint("select", !0), t.redraw()), t.hoverData.tapholdCancelled = !0, t.data.bgActivePosistion = void 0, oe && oe.unactivate(), t.hoverData.which === 3) {
        var Se = {
          originalEvent: N,
          type: "cxttapend",
          position: {
            x: X[0],
            y: X[1]
          }
        };
        if (oe ? oe.emit(Se) : J.emit(Se), !t.hoverData.cxtDragged) {
          var pe = {
            originalEvent: N,
            type: "cxttap",
            position: {
              x: X[0],
              y: X[1]
            }
          };
          oe ? oe.emit(pe) : J.emit(pe);
        }
        t.hoverData.cxtDragged = !1, t.hoverData.which = null;
      } else if (t.hoverData.which === 1) {
        if (a(he, ["mouseup", "tapend", "vmouseup"], N, {
          x: X[0],
          y: X[1]
        }), !t.dragData.didDrag && // didn't move a node around
        !t.hoverData.dragged && // didn't pan
        !t.hoverData.selecting && // not box selection
        !t.hoverData.isOverThresholdDrag && (a(oe, ["click", "tap", "vclick"], N, {
          x: X[0],
          y: X[1]
        }), A = !1, N.timeStamp - L <= J.multiClickDebounceTime() ? (D && clearTimeout(D), A = !0, L = null, a(oe, ["dblclick", "dbltap", "vdblclick"], N, {
          x: X[0],
          y: X[1]
        })) : (D = setTimeout(function() {
          A || a(oe, ["oneclick", "onetap", "voneclick"], N, {
            x: X[0],
            y: X[1]
          });
        }, J.multiClickDebounceTime()), L = N.timeStamp)), oe == null && !t.dragData.didDrag && !t.hoverData.selecting && !t.hoverData.dragged && !n(N) && (J.$(r).unselect(["tapunselect"]), Z.length > 0 && t.redrawHint("eles", !0), t.dragData.possibleDragElements = Z = J.collection()), he == oe && !t.dragData.didDrag && !t.hoverData.selecting && he != null && he._private.selectable && (t.hoverData.dragging || (J.selectionType() === "additive" || me ? he.selected() ? he.unselect(["tapunselect"]) : he.select(["tapselect"]) : me || (J.$(r).unmerge(he).unselect(["tapunselect"]), he.select(["tapselect"]))), t.redrawHint("eles", !0)), t.hoverData.selecting) {
          var Te = J.collection(t.getAllInBox(q[0], q[1], q[2], q[3]));
          t.redrawHint("select", !0), Te.length > 0 && t.redrawHint("eles", !0), J.emit({
            type: "boxend",
            originalEvent: N,
            position: {
              x: X[0],
              y: X[1]
            }
          });
          var ye = function(Xe) {
            return Xe.selectable() && !Xe.selected();
          };
          J.selectionType() === "additive" || me || J.$(r).unmerge(Te).unselect(), Te.emit("box").stdFilter(ye).select().emit("boxselect"), t.redraw();
        }
        if (t.hoverData.dragging && (t.hoverData.dragging = !1, t.redrawHint("select", !0), t.redrawHint("eles", !0), t.redraw()), !q[4]) {
          t.redrawHint("drag", !0), t.redrawHint("eles", !0);
          var be = oe && oe.grabbed();
          p(Z), be && (oe.emit("freeon"), Z.emit("free"), t.dragData.didDrag && (oe.emit("dragfreeon"), Z.emit("dragfree")));
        }
      }
      q[4] = 0, t.hoverData.down = null, t.hoverData.cxtStarted = !1, t.hoverData.draggingEles = !1, t.hoverData.selecting = !1, t.hoverData.isOverThresholdDrag = !1, t.dragData.didDrag = !1, t.hoverData.dragged = !1, t.hoverData.dragDelta = [], t.hoverData.mdownPos = null, t.hoverData.mdownGPos = null;
    }
  }, !1);
  var I = function(N) {
    if (!t.scrollingPage) {
      var V = t.cy, J = V.zoom(), X = V.pan(), q = t.projectIntoViewport(N.clientX, N.clientY), he = [q[0] * J + X.x, q[1] * J + X.y];
      if (t.hoverData.draggingEles || t.hoverData.dragging || t.hoverData.cxtStarted || x()) {
        N.preventDefault();
        return;
      }
      if (V.panningEnabled() && V.userPanningEnabled() && V.zoomingEnabled() && V.userZoomingEnabled()) {
        N.preventDefault(), t.data.wheelZooming = !0, clearTimeout(t.data.wheelTimeout), t.data.wheelTimeout = setTimeout(function() {
          t.data.wheelZooming = !1, t.redrawHint("eles", !0), t.redraw();
        }, 150);
        var Z;
        N.deltaY != null ? Z = N.deltaY / -250 : N.wheelDeltaY != null ? Z = N.wheelDeltaY / 1e3 : Z = N.wheelDelta / 1e3, Z = Z * t.wheelSensitivity;
        var oe = N.deltaMode === 1;
        oe && (Z *= 33);
        var me = V.zoom() * Math.pow(10, Z);
        N.type === "gesturechange" && (me = t.gestureStartZoom * N.scale), V.zoom({
          level: me,
          renderedPosition: {
            x: he[0],
            y: he[1]
          }
        }), V.emit(N.type === "gesturechange" ? "pinchzoom" : "scrollzoom");
      }
    }
  };
  t.registerBinding(t.container, "wheel", I, !0), t.registerBinding(e, "scroll", function(N) {
    t.scrollingPage = !0, clearTimeout(t.scrollingPageTimeout), t.scrollingPageTimeout = setTimeout(function() {
      t.scrollingPage = !1;
    }, 250);
  }, !0), t.registerBinding(t.container, "gesturestart", function(N) {
    t.gestureStartZoom = t.cy.zoom(), t.hasTouchStarted || N.preventDefault();
  }, !0), t.registerBinding(t.container, "gesturechange", function(H) {
    t.hasTouchStarted || I(H);
  }, !0), t.registerBinding(t.container, "mouseout", function(N) {
    var V = t.projectIntoViewport(N.clientX, N.clientY);
    t.cy.emit({
      originalEvent: N,
      type: "mouseout",
      position: {
        x: V[0],
        y: V[1]
      }
    });
  }, !1), t.registerBinding(t.container, "mouseover", function(N) {
    var V = t.projectIntoViewport(N.clientX, N.clientY);
    t.cy.emit({
      originalEvent: N,
      type: "mouseover",
      position: {
        x: V[0],
        y: V[1]
      }
    });
  }, !1);
  var O, P, R, M, k, B, G, F, $, U, _, Y, W, z = function(N, V, J, X) {
    return Math.sqrt((J - N) * (J - N) + (X - V) * (X - V));
  }, K = function(N, V, J, X) {
    return (J - N) * (J - N) + (X - V) * (X - V);
  }, j;
  t.registerBinding(t.container, "touchstart", j = function(N) {
    if (t.hasTouchStarted = !0, !!w(N)) {
      E(), t.touchData.capture = !0, t.data.bgActivePosistion = void 0;
      var V = t.cy, J = t.touchData.now, X = t.touchData.earlier;
      if (N.touches[0]) {
        var q = t.projectIntoViewport(N.touches[0].clientX, N.touches[0].clientY);
        J[0] = q[0], J[1] = q[1];
      }
      if (N.touches[1]) {
        var q = t.projectIntoViewport(N.touches[1].clientX, N.touches[1].clientY);
        J[2] = q[0], J[3] = q[1];
      }
      if (N.touches[2]) {
        var q = t.projectIntoViewport(N.touches[2].clientX, N.touches[2].clientY);
        J[4] = q[0], J[5] = q[1];
      }
      if (N.touches[1]) {
        t.touchData.singleTouchMoved = !0, p(t.dragData.touchDragEles);
        var he = t.findContainerClientCoords();
        $ = he[0], U = he[1], _ = he[2], Y = he[3], O = N.touches[0].clientX - $, P = N.touches[0].clientY - U, R = N.touches[1].clientX - $, M = N.touches[1].clientY - U, W = 0 <= O && O <= _ && 0 <= R && R <= _ && 0 <= P && P <= Y && 0 <= M && M <= Y;
        var Z = V.pan(), oe = V.zoom();
        k = z(O, P, R, M), B = K(O, P, R, M), G = [(O + R) / 2, (P + M) / 2], F = [(G[0] - Z.x) / oe, (G[1] - Z.y) / oe];
        var me = 200, Se = me * me;
        if (B < Se && !N.touches[2]) {
          var pe = t.findNearestElement(J[0], J[1], !0, !0), Te = t.findNearestElement(J[2], J[3], !0, !0);
          pe && pe.isNode() ? (pe.activate().emit({
            originalEvent: N,
            type: "cxttapstart",
            position: {
              x: J[0],
              y: J[1]
            }
          }), t.touchData.start = pe) : Te && Te.isNode() ? (Te.activate().emit({
            originalEvent: N,
            type: "cxttapstart",
            position: {
              x: J[0],
              y: J[1]
            }
          }), t.touchData.start = Te) : V.emit({
            originalEvent: N,
            type: "cxttapstart",
            position: {
              x: J[0],
              y: J[1]
            }
          }), t.touchData.start && (t.touchData.start._private.grabbed = !1), t.touchData.cxt = !0, t.touchData.cxtDragged = !1, t.data.bgActivePosistion = void 0, t.redraw();
          return;
        }
      }
      if (N.touches[2])
        V.boxSelectionEnabled() && N.preventDefault();
      else if (!N.touches[1]) {
        if (N.touches[0]) {
          var ye = t.findNearestElements(J[0], J[1], !0, !0), be = ye[0];
          if (be != null && (be.activate(), t.touchData.start = be, t.touchData.starts = ye, t.nodeIsGrabbable(be))) {
            var Fe = t.dragData.touchDragEles = V.collection(), Xe = null;
            t.redrawHint("eles", !0), t.redrawHint("drag", !0), be.selected() ? (Xe = V.$(function(it) {
              return it.selected() && t.nodeIsGrabbable(it);
            }), d(Xe, {
              addToList: Fe
            })) : g(be, {
              addToList: Fe
            }), f(be);
            var pt = function(It) {
              return {
                originalEvent: N,
                type: It,
                position: {
                  x: J[0],
                  y: J[1]
                }
              };
            };
            be.emit(pt("grabon")), Xe ? Xe.forEach(function(it) {
              it.emit(pt("grab"));
            }) : be.emit(pt("grab"));
          }
          a(be, ["touchstart", "tapstart", "vmousedown"], N, {
            x: J[0],
            y: J[1]
          }), be == null && (t.data.bgActivePosistion = {
            x: q[0],
            y: q[1]
          }, t.redrawHint("select", !0), t.redraw()), t.touchData.singleTouchMoved = !1, t.touchData.singleTouchStartTime = +/* @__PURE__ */ new Date(), clearTimeout(t.touchData.tapholdTimeout), t.touchData.tapholdTimeout = setTimeout(function() {
            t.touchData.singleTouchMoved === !1 && !t.pinching && !t.touchData.selecting && a(t.touchData.start, ["taphold"], N, {
              x: J[0],
              y: J[1]
            });
          }, t.tapholdDuration);
        }
      }
      if (N.touches.length >= 1) {
        for (var yt = t.touchData.startPosition = [null, null, null, null, null, null], We = 0; We < J.length; We++)
          yt[We] = X[We] = J[We];
        var ct = N.touches[0];
        t.touchData.startGPosition = [ct.clientX, ct.clientY];
      }
    }
  }, !1);
  var Q;
  t.registerBinding(window, "touchmove", Q = function(N) {
    var V = t.touchData.capture;
    if (!(!V && !w(N))) {
      var J = t.selection, X = t.cy, q = t.touchData.now, he = t.touchData.earlier, Z = X.zoom();
      if (N.touches[0]) {
        var oe = t.projectIntoViewport(N.touches[0].clientX, N.touches[0].clientY);
        q[0] = oe[0], q[1] = oe[1];
      }
      if (N.touches[1]) {
        var oe = t.projectIntoViewport(N.touches[1].clientX, N.touches[1].clientY);
        q[2] = oe[0], q[3] = oe[1];
      }
      if (N.touches[2]) {
        var oe = t.projectIntoViewport(N.touches[2].clientX, N.touches[2].clientY);
        q[4] = oe[0], q[5] = oe[1];
      }
      var me = t.touchData.startGPosition, Se;
      if (V && N.touches[0] && me) {
        for (var pe = [], Te = 0; Te < q.length; Te++)
          pe[Te] = q[Te] - he[Te];
        var ye = N.touches[0].clientX - me[0], be = ye * ye, Fe = N.touches[0].clientY - me[1], Xe = Fe * Fe, pt = be + Xe;
        Se = pt >= t.touchTapThreshold2;
      }
      if (V && t.touchData.cxt) {
        N.preventDefault();
        var yt = N.touches[0].clientX - $, We = N.touches[0].clientY - U, ct = N.touches[1].clientX - $, it = N.touches[1].clientY - U, It = K(yt, We, ct, it), Ft = It / B, vr = 150, Jt = vr * vr, cr = 1.5, Ea = cr * cr;
        if (Ft >= Ea || It >= Jt) {
          t.touchData.cxt = !1, t.data.bgActivePosistion = void 0, t.redrawHint("select", !0);
          var jt = {
            originalEvent: N,
            type: "cxttapend",
            position: {
              x: q[0],
              y: q[1]
            }
          };
          t.touchData.start ? (t.touchData.start.unactivate().emit(jt), t.touchData.start = null) : X.emit(jt);
        }
      }
      if (V && t.touchData.cxt) {
        var jt = {
          originalEvent: N,
          type: "cxtdrag",
          position: {
            x: q[0],
            y: q[1]
          }
        };
        t.data.bgActivePosistion = void 0, t.redrawHint("select", !0), t.touchData.start ? t.touchData.start.emit(jt) : X.emit(jt), t.touchData.start && (t.touchData.start._private.grabbed = !1), t.touchData.cxtDragged = !0;
        var ot = t.findNearestElement(q[0], q[1], !0, !0);
        (!t.touchData.cxtOver || ot !== t.touchData.cxtOver) && (t.touchData.cxtOver && t.touchData.cxtOver.emit({
          originalEvent: N,
          type: "cxtdragout",
          position: {
            x: q[0],
            y: q[1]
          }
        }), t.touchData.cxtOver = ot, ot && ot.emit({
          originalEvent: N,
          type: "cxtdragover",
          position: {
            x: q[0],
            y: q[1]
          }
        }));
      } else if (V && N.touches[2] && X.boxSelectionEnabled())
        N.preventDefault(), t.data.bgActivePosistion = void 0, this.lastThreeTouch = +/* @__PURE__ */ new Date(), t.touchData.selecting || X.emit({
          originalEvent: N,
          type: "boxstart",
          position: {
            x: q[0],
            y: q[1]
          }
        }), t.touchData.selecting = !0, t.touchData.didSelect = !0, J[4] = 1, !J || J.length === 0 || J[0] === void 0 ? (J[0] = (q[0] + q[2] + q[4]) / 3, J[1] = (q[1] + q[3] + q[5]) / 3, J[2] = (q[0] + q[2] + q[4]) / 3 + 1, J[3] = (q[1] + q[3] + q[5]) / 3 + 1) : (J[2] = (q[0] + q[2] + q[4]) / 3, J[3] = (q[1] + q[3] + q[5]) / 3), t.redrawHint("select", !0), t.redraw();
      else if (V && N.touches[1] && !t.touchData.didSelect && X.zoomingEnabled() && X.panningEnabled() && X.userZoomingEnabled() && X.userPanningEnabled()) {
        N.preventDefault(), t.data.bgActivePosistion = void 0, t.redrawHint("select", !0);
        var je = t.dragData.touchDragEles;
        if (je) {
          t.redrawHint("drag", !0);
          for (var lt = 0; lt < je.length; lt++) {
            var wa = je[lt]._private;
            wa.grabbed = !1, wa.rscratch.inDragLayer = !1;
          }
        }
        var Dt = t.touchData.start, yt = N.touches[0].clientX - $, We = N.touches[0].clientY - U, ct = N.touches[1].clientX - $, it = N.touches[1].clientY - U, Ti = z(yt, We, ct, it), kl = Ti / k;
        if (W) {
          var Pl = yt - O, Bl = We - P, Fl = ct - R, Gl = it - M, zl = (Pl + Fl) / 2, $l = (Bl + Gl) / 2, zr = X.zoom(), wn = zr * kl, xa = X.pan(), Ci = F[0] * zr + xa.x, Di = F[1] * zr + xa.y, Vl = {
            x: -wn / zr * (Ci - xa.x - zl) + Ci,
            y: -wn / zr * (Di - xa.y - $l) + Di
          };
          if (Dt && Dt.active()) {
            var je = t.dragData.touchDragEles;
            p(je), t.redrawHint("drag", !0), t.redrawHint("eles", !0), Dt.unactivate().emit("freeon"), je.emit("free"), t.dragData.didDrag && (Dt.emit("dragfreeon"), je.emit("dragfree"));
          }
          X.viewport({
            zoom: wn,
            pan: Vl,
            cancelOnFailedZoom: !0
          }), X.emit("pinchzoom"), k = Ti, O = yt, P = We, R = ct, M = it, t.pinching = !0;
        }
        if (N.touches[0]) {
          var oe = t.projectIntoViewport(N.touches[0].clientX, N.touches[0].clientY);
          q[0] = oe[0], q[1] = oe[1];
        }
        if (N.touches[1]) {
          var oe = t.projectIntoViewport(N.touches[1].clientX, N.touches[1].clientY);
          q[2] = oe[0], q[3] = oe[1];
        }
        if (N.touches[2]) {
          var oe = t.projectIntoViewport(N.touches[2].clientX, N.touches[2].clientY);
          q[4] = oe[0], q[5] = oe[1];
        }
      } else if (N.touches[0] && !t.touchData.didSelect) {
        var mt = t.touchData.start, xn = t.touchData.last, ot;
        if (!t.hoverData.draggingEles && !t.swipePanning && (ot = t.findNearestElement(q[0], q[1], !0, !0)), V && mt != null && N.preventDefault(), V && mt != null && t.nodeIsDraggable(mt))
          if (Se) {
            var je = t.dragData.touchDragEles, Si = !t.dragData.didDrag;
            Si && d(je, {
              inDragLayer: !0
            }), t.dragData.didDrag = !0;
            var $r = {
              x: 0,
              y: 0
            };
            if (ae(pe[0]) && ae(pe[1]) && ($r.x += pe[0], $r.y += pe[1], Si)) {
              t.redrawHint("eles", !0);
              var bt = t.touchData.dragDelta;
              bt && ae(bt[0]) && ae(bt[1]) && ($r.x += bt[0], $r.y += bt[1]);
            }
            t.hoverData.draggingEles = !0, je.silentShift($r).emit("position drag"), t.redrawHint("drag", !0), t.touchData.startPosition[0] == he[0] && t.touchData.startPosition[1] == he[1] && t.redrawHint("eles", !0), t.redraw();
          } else {
            var bt = t.touchData.dragDelta = t.touchData.dragDelta || [];
            bt.length === 0 ? (bt.push(pe[0]), bt.push(pe[1])) : (bt[0] += pe[0], bt[1] += pe[1]);
          }
        if (a(mt || ot, ["touchmove", "tapdrag", "vmousemove"], N, {
          x: q[0],
          y: q[1]
        }), (!mt || !mt.grabbed()) && ot != xn && (xn && xn.emit({
          originalEvent: N,
          type: "tapdragout",
          position: {
            x: q[0],
            y: q[1]
          }
        }), ot && ot.emit({
          originalEvent: N,
          type: "tapdragover",
          position: {
            x: q[0],
            y: q[1]
          }
        })), t.touchData.last = ot, V)
          for (var lt = 0; lt < q.length; lt++)
            q[lt] && t.touchData.startPosition[lt] && Se && (t.touchData.singleTouchMoved = !0);
        if (V && (mt == null || mt.pannable()) && X.panningEnabled() && X.userPanningEnabled()) {
          var _l = i(mt, t.touchData.starts);
          _l && (N.preventDefault(), t.data.bgActivePosistion || (t.data.bgActivePosistion = Er(t.touchData.startPosition)), t.swipePanning ? (X.panBy({
            x: pe[0] * Z,
            y: pe[1] * Z
          }), X.emit("dragpan")) : Se && (t.swipePanning = !0, X.panBy({
            x: ye * Z,
            y: Fe * Z
          }), X.emit("dragpan"), mt && (mt.unactivate(), t.redrawHint("select", !0), t.touchData.start = null)));
          var oe = t.projectIntoViewport(N.touches[0].clientX, N.touches[0].clientY);
          q[0] = oe[0], q[1] = oe[1];
        }
      }
      for (var Te = 0; Te < q.length; Te++)
        he[Te] = q[Te];
      V && N.touches.length > 0 && !t.hoverData.draggingEles && !t.swipePanning && t.data.bgActivePosistion != null && (t.data.bgActivePosistion = void 0, t.redrawHint("select", !0), t.redraw());
    }
  }, !1);
  var ee;
  t.registerBinding(e, "touchcancel", ee = function(N) {
    var V = t.touchData.start;
    t.touchData.capture = !1, V && V.unactivate();
  });
  var ne, ce, te, re;
  if (t.registerBinding(e, "touchend", ne = function(N) {
    var V = t.touchData.start, J = t.touchData.capture;
    if (J)
      N.touches.length === 0 && (t.touchData.capture = !1), N.preventDefault();
    else
      return;
    var X = t.selection;
    t.swipePanning = !1, t.hoverData.draggingEles = !1;
    var q = t.cy, he = q.zoom(), Z = t.touchData.now, oe = t.touchData.earlier;
    if (N.touches[0]) {
      var me = t.projectIntoViewport(N.touches[0].clientX, N.touches[0].clientY);
      Z[0] = me[0], Z[1] = me[1];
    }
    if (N.touches[1]) {
      var me = t.projectIntoViewport(N.touches[1].clientX, N.touches[1].clientY);
      Z[2] = me[0], Z[3] = me[1];
    }
    if (N.touches[2]) {
      var me = t.projectIntoViewport(N.touches[2].clientX, N.touches[2].clientY);
      Z[4] = me[0], Z[5] = me[1];
    }
    V && V.unactivate();
    var Se;
    if (t.touchData.cxt) {
      if (Se = {
        originalEvent: N,
        type: "cxttapend",
        position: {
          x: Z[0],
          y: Z[1]
        }
      }, V ? V.emit(Se) : q.emit(Se), !t.touchData.cxtDragged) {
        var pe = {
          originalEvent: N,
          type: "cxttap",
          position: {
            x: Z[0],
            y: Z[1]
          }
        };
        V ? V.emit(pe) : q.emit(pe);
      }
      t.touchData.start && (t.touchData.start._private.grabbed = !1), t.touchData.cxt = !1, t.touchData.start = null, t.redraw();
      return;
    }
    if (!N.touches[2] && q.boxSelectionEnabled() && t.touchData.selecting) {
      t.touchData.selecting = !1;
      var Te = q.collection(t.getAllInBox(X[0], X[1], X[2], X[3]));
      X[0] = void 0, X[1] = void 0, X[2] = void 0, X[3] = void 0, X[4] = 0, t.redrawHint("select", !0), q.emit({
        type: "boxend",
        originalEvent: N,
        position: {
          x: Z[0],
          y: Z[1]
        }
      });
      var ye = function(Jt) {
        return Jt.selectable() && !Jt.selected();
      };
      Te.emit("box").stdFilter(ye).select().emit("boxselect"), Te.nonempty() && t.redrawHint("eles", !0), t.redraw();
    }
    if (V != null && V.unactivate(), N.touches[2])
      t.data.bgActivePosistion = void 0, t.redrawHint("select", !0);
    else if (!N.touches[1]) {
      if (!N.touches[0]) {
        if (!N.touches[0]) {
          t.data.bgActivePosistion = void 0, t.redrawHint("select", !0);
          var be = t.dragData.touchDragEles;
          if (V != null) {
            var Fe = V._private.grabbed;
            p(be), t.redrawHint("drag", !0), t.redrawHint("eles", !0), Fe && (V.emit("freeon"), be.emit("free"), t.dragData.didDrag && (V.emit("dragfreeon"), be.emit("dragfree"))), a(V, ["touchend", "tapend", "vmouseup", "tapdragout"], N, {
              x: Z[0],
              y: Z[1]
            }), V.unactivate(), t.touchData.start = null;
          } else {
            var Xe = t.findNearestElement(Z[0], Z[1], !0, !0);
            a(Xe, ["touchend", "tapend", "vmouseup", "tapdragout"], N, {
              x: Z[0],
              y: Z[1]
            });
          }
          var pt = t.touchData.startPosition[0] - Z[0], yt = pt * pt, We = t.touchData.startPosition[1] - Z[1], ct = We * We, it = yt + ct, It = it * he * he;
          t.touchData.singleTouchMoved || (V || q.$(":selected").unselect(["tapunselect"]), a(V, ["tap", "vclick"], N, {
            x: Z[0],
            y: Z[1]
          }), ce = !1, N.timeStamp - re <= q.multiClickDebounceTime() ? (te && clearTimeout(te), ce = !0, re = null, a(V, ["dbltap", "vdblclick"], N, {
            x: Z[0],
            y: Z[1]
          })) : (te = setTimeout(function() {
            ce || a(V, ["onetap", "voneclick"], N, {
              x: Z[0],
              y: Z[1]
            });
          }, q.multiClickDebounceTime()), re = N.timeStamp)), V != null && !t.dragData.didDrag && V._private.selectable && It < t.touchTapThreshold2 && !t.pinching && (q.selectionType() === "single" ? (q.$(r).unmerge(V).unselect(["tapunselect"]), V.select(["tapselect"])) : V.selected() ? V.unselect(["tapunselect"]) : V.select(["tapselect"]), t.redrawHint("eles", !0)), t.touchData.singleTouchMoved = !0;
        }
      }
    }
    for (var Ft = 0; Ft < Z.length; Ft++)
      oe[Ft] = Z[Ft];
    t.dragData.didDrag = !1, N.touches.length === 0 && (t.touchData.dragDelta = [], t.touchData.startPosition = [null, null, null, null, null, null], t.touchData.startGPosition = null, t.touchData.didSelect = !1), N.touches.length < 2 && (N.touches.length === 1 && (t.touchData.startGPosition = [N.touches[0].clientX, N.touches[0].clientY]), t.pinching = !1, t.redrawHint("eles", !0), t.redraw());
  }, !1), typeof TouchEvent == "undefined") {
    var ue = [], le = function(N) {
      return {
        clientX: N.clientX,
        clientY: N.clientY,
        force: 1,
        identifier: N.pointerId,
        pageX: N.pageX,
        pageY: N.pageY,
        radiusX: N.width / 2,
        radiusY: N.height / 2,
        screenX: N.screenX,
        screenY: N.screenY,
        target: N.target
      };
    }, se = function(N) {
      return {
        event: N,
        touch: le(N)
      };
    }, fe = function(N) {
      ue.push(se(N));
    }, xe = function(N) {
      for (var V = 0; V < ue.length; V++) {
        var J = ue[V];
        if (J.event.pointerId === N.pointerId) {
          ue.splice(V, 1);
          return;
        }
      }
    }, Ee = function(N) {
      var V = ue.filter(function(J) {
        return J.event.pointerId === N.pointerId;
      })[0];
      V.event = N, V.touch = le(N);
    }, ge = function(N) {
      N.touches = ue.map(function(V) {
        return V.touch;
      });
    }, we = function(N) {
      return N.pointerType === "mouse" || N.pointerType === 4;
    };
    t.registerBinding(t.container, "pointerdown", function(H) {
      we(H) || (H.preventDefault(), fe(H), ge(H), j(H));
    }), t.registerBinding(t.container, "pointerup", function(H) {
      we(H) || (xe(H), ge(H), ne(H));
    }), t.registerBinding(t.container, "pointercancel", function(H) {
      we(H) || (xe(H), ge(H), ee(H));
    }), t.registerBinding(t.container, "pointermove", function(H) {
      we(H) || (H.preventDefault(), Ee(H), ge(H), Q(H));
    });
  }
};
var Pt = {};
Pt.generatePolygon = function(t, e) {
  return this.nodeShapes[t] = {
    renderer: this,
    name: t,
    points: e,
    draw: function(a, n, i, s, o) {
      this.renderer.nodeShapeImpl("polygon", a, n, i, s, o, this.points);
    },
    intersectLine: function(a, n, i, s, o, l, u) {
      return aa(o, l, this.points, a, n, i / 2, s / 2, u);
    },
    checkPoint: function(a, n, i, s, o, l, u) {
      return Rt(a, n, this.points, l, u, s, o, [0, -1], i);
    }
  };
};
Pt.generateEllipse = function() {
  return this.nodeShapes.ellipse = {
    renderer: this,
    name: "ellipse",
    draw: function(e, r, a, n, i) {
      this.renderer.nodeShapeImpl(this.name, e, r, a, n, i);
    },
    intersectLine: function(e, r, a, n, i, s, o) {
      return jd(i, s, e, r, a / 2 + o, n / 2 + o);
    },
    checkPoint: function(e, r, a, n, i, s, o) {
      return rr(e, r, n, i, s, o, a);
    }
  };
};
Pt.generateRoundPolygon = function(t, e) {
  for (var r = new Array(e.length * 2), a = 0; a < e.length / 2; a++) {
    var n = a * 2, i = void 0;
    a < e.length / 2 - 1 ? i = (a + 1) * 2 : i = 0, r[a * 4] = e[n], r[a * 4 + 1] = e[n + 1];
    var s = e[i] - e[n], o = e[i + 1] - e[n + 1], l = Math.sqrt(s * s + o * o);
    r[a * 4 + 2] = s / l, r[a * 4 + 3] = o / l;
  }
  return this.nodeShapes[t] = {
    renderer: this,
    name: t,
    points: r,
    draw: function(f, h, c, v, d) {
      this.renderer.nodeShapeImpl("round-polygon", f, h, c, v, d, this.points);
    },
    intersectLine: function(f, h, c, v, d, g, p) {
      return eg(d, g, this.points, f, h, c, v);
    },
    checkPoint: function(f, h, c, v, d, g, p) {
      return Jd(f, h, this.points, g, p, v, d);
    }
  };
};
Pt.generateRoundRectangle = function() {
  return this.nodeShapes["round-rectangle"] = this.nodeShapes.roundrectangle = {
    renderer: this,
    name: "round-rectangle",
    points: st(4, 0),
    draw: function(e, r, a, n, i) {
      this.renderer.nodeShapeImpl(this.name, e, r, a, n, i);
    },
    intersectLine: function(e, r, a, n, i, s, o) {
      return Co(i, s, e, r, a, n, o);
    },
    checkPoint: function(e, r, a, n, i, s, o) {
      var l = da(n, i), u = l * 2;
      return !!(Rt(e, r, this.points, s, o, n, i - u, [0, -1], a) || Rt(e, r, this.points, s, o, n - u, i, [0, -1], a) || rr(e, r, u, u, s - n / 2 + l, o - i / 2 + l, a) || rr(e, r, u, u, s + n / 2 - l, o - i / 2 + l, a) || rr(e, r, u, u, s + n / 2 - l, o + i / 2 - l, a) || rr(e, r, u, u, s - n / 2 + l, o + i / 2 - l, a));
    }
  };
};
Pt.generateCutRectangle = function() {
  return this.nodeShapes["cut-rectangle"] = this.nodeShapes.cutrectangle = {
    renderer: this,
    name: "cut-rectangle",
    cornerLength: So(),
    points: st(4, 0),
    draw: function(e, r, a, n, i) {
      this.renderer.nodeShapeImpl(this.name, e, r, a, n, i);
    },
    generateCutTrianglePts: function(e, r, a, n) {
      var i = this.cornerLength, s = r / 2, o = e / 2, l = a - o, u = a + o, f = n - s, h = n + s;
      return {
        topLeft: [l, f + i, l + i, f, l + i, f + i],
        topRight: [u - i, f, u, f + i, u - i, f + i],
        bottomRight: [u, h - i, u - i, h, u - i, h - i],
        bottomLeft: [l + i, h, l, h - i, l + i, h - i]
      };
    },
    intersectLine: function(e, r, a, n, i, s, o) {
      var l = this.generateCutTrianglePts(a + 2 * o, n + 2 * o, e, r), u = [].concat.apply([], [l.topLeft.splice(0, 4), l.topRight.splice(0, 4), l.bottomRight.splice(0, 4), l.bottomLeft.splice(0, 4)]);
      return aa(i, s, u, e, r);
    },
    checkPoint: function(e, r, a, n, i, s, o) {
      if (Rt(e, r, this.points, s, o, n, i - 2 * this.cornerLength, [0, -1], a) || Rt(e, r, this.points, s, o, n - 2 * this.cornerLength, i, [0, -1], a))
        return !0;
      var l = this.generateCutTrianglePts(n, i, s, o);
      return ut(e, r, l.topLeft) || ut(e, r, l.topRight) || ut(e, r, l.bottomRight) || ut(e, r, l.bottomLeft);
    }
  };
};
Pt.generateBarrel = function() {
  return this.nodeShapes.barrel = {
    renderer: this,
    name: "barrel",
    points: st(4, 0),
    draw: function(e, r, a, n, i) {
      this.renderer.nodeShapeImpl(this.name, e, r, a, n, i);
    },
    intersectLine: function(e, r, a, n, i, s, o) {
      var l = 0.15, u = 0.5, f = 0.85, h = this.generateBarrelBezierPts(a + 2 * o, n + 2 * o, e, r), c = function(g) {
        var p = xr({
          x: g[0],
          y: g[1]
        }, {
          x: g[2],
          y: g[3]
        }, {
          x: g[4],
          y: g[5]
        }, l), y = xr({
          x: g[0],
          y: g[1]
        }, {
          x: g[2],
          y: g[3]
        }, {
          x: g[4],
          y: g[5]
        }, u), E = xr({
          x: g[0],
          y: g[1]
        }, {
          x: g[2],
          y: g[3]
        }, {
          x: g[4],
          y: g[5]
        }, f);
        return [g[0], g[1], p.x, p.y, y.x, y.y, E.x, E.y, g[4], g[5]];
      }, v = [].concat(c(h.topLeft), c(h.topRight), c(h.bottomRight), c(h.bottomLeft));
      return aa(i, s, v, e, r);
    },
    generateBarrelBezierPts: function(e, r, a, n) {
      var i = r / 2, s = e / 2, o = a - s, l = a + s, u = n - i, f = n + i, h = zn(e, r), c = h.heightOffset, v = h.widthOffset, d = h.ctrlPtOffsetPct * e, g = {
        topLeft: [o, u + c, o + d, u, o + v, u],
        topRight: [l - v, u, l - d, u, l, u + c],
        bottomRight: [l, f - c, l - d, f, l - v, f],
        bottomLeft: [o + v, f, o + d, f, o, f - c]
      };
      return g.topLeft.isTop = !0, g.topRight.isTop = !0, g.bottomLeft.isBottom = !0, g.bottomRight.isBottom = !0, g;
    },
    checkPoint: function(e, r, a, n, i, s, o) {
      var l = zn(n, i), u = l.heightOffset, f = l.widthOffset;
      if (Rt(e, r, this.points, s, o, n, i - 2 * u, [0, -1], a) || Rt(e, r, this.points, s, o, n - 2 * f, i, [0, -1], a))
        return !0;
      for (var h = this.generateBarrelBezierPts(n, i, s, o), c = function(b, x, w) {
        var D = w[4], A = w[2], L = w[0], I = w[5], O = w[1], P = Math.min(D, L), R = Math.max(D, L), M = Math.min(I, O), k = Math.max(I, O);
        if (P <= b && b <= R && M <= x && x <= k) {
          var B = tg(D, A, L), G = qd(B[0], B[1], B[2], b), F = G.filter(function($) {
            return 0 <= $ && $ <= 1;
          });
          if (F.length > 0)
            return F[0];
        }
        return null;
      }, v = Object.keys(h), d = 0; d < v.length; d++) {
        var g = v[d], p = h[g], y = c(e, r, p);
        if (y != null) {
          var E = p[5], m = p[3], T = p[1], C = Ye(E, m, T, y);
          if (p.isTop && C <= r || p.isBottom && r <= C)
            return !0;
        }
      }
      return !1;
    }
  };
};
Pt.generateBottomRoundrectangle = function() {
  return this.nodeShapes["bottom-round-rectangle"] = this.nodeShapes.bottomroundrectangle = {
    renderer: this,
    name: "bottom-round-rectangle",
    points: st(4, 0),
    draw: function(e, r, a, n, i) {
      this.renderer.nodeShapeImpl(this.name, e, r, a, n, i);
    },
    intersectLine: function(e, r, a, n, i, s, o) {
      var l = e - (a / 2 + o), u = r - (n / 2 + o), f = u, h = e + (a / 2 + o), c = _t(i, s, e, r, l, u, h, f, !1);
      return c.length > 0 ? c : Co(i, s, e, r, a, n, o);
    },
    checkPoint: function(e, r, a, n, i, s, o) {
      var l = da(n, i), u = 2 * l;
      if (Rt(e, r, this.points, s, o, n, i - u, [0, -1], a) || Rt(e, r, this.points, s, o, n - u, i, [0, -1], a))
        return !0;
      var f = n / 2 + 2 * a, h = i / 2 + 2 * a, c = [s - f, o - h, s - f, o, s + f, o, s + f, o - h];
      return !!(ut(e, r, c) || rr(e, r, u, u, s + n / 2 - l, o + i / 2 - l, a) || rr(e, r, u, u, s - n / 2 + l, o + i / 2 - l, a));
    }
  };
};
Pt.registerNodeShapes = function() {
  var t = this.nodeShapes = {}, e = this;
  this.generateEllipse(), this.generatePolygon("triangle", st(3, 0)), this.generateRoundPolygon("round-triangle", st(3, 0)), this.generatePolygon("rectangle", st(4, 0)), t.square = t.rectangle, this.generateRoundRectangle(), this.generateCutRectangle(), this.generateBarrel(), this.generateBottomRoundrectangle();
  {
    var r = [0, 1, 1, 0, 0, -1, -1, 0];
    this.generatePolygon("diamond", r), this.generateRoundPolygon("round-diamond", r);
  }
  this.generatePolygon("pentagon", st(5, 0)), this.generateRoundPolygon("round-pentagon", st(5, 0)), this.generatePolygon("hexagon", st(6, 0)), this.generateRoundPolygon("round-hexagon", st(6, 0)), this.generatePolygon("heptagon", st(7, 0)), this.generateRoundPolygon("round-heptagon", st(7, 0)), this.generatePolygon("octagon", st(8, 0)), this.generateRoundPolygon("round-octagon", st(8, 0));
  var a = new Array(20);
  {
    var n = Gn(5, 0), i = Gn(5, Math.PI / 5), s = 0.5 * (3 - Math.sqrt(5));
    s *= 1.57;
    for (var o = 0; o < i.length / 2; o++)
      i[o * 2] *= s, i[o * 2 + 1] *= s;
    for (var o = 0; o < 20 / 4; o++)
      a[o * 4] = n[o * 2], a[o * 4 + 1] = n[o * 2 + 1], a[o * 4 + 2] = i[o * 2], a[o * 4 + 3] = i[o * 2 + 1];
  }
  a = Do(a), this.generatePolygon("star", a), this.generatePolygon("vee", [-1, -1, 0, -0.333, 1, -1, 0, 1]), this.generatePolygon("rhomboid", [-1, -1, 0.333, -1, 1, 1, -0.333, 1]), this.generatePolygon("right-rhomboid", [-0.333, -1, 1, -1, 0.333, 1, -1, 1]), this.nodeShapes.concavehexagon = this.generatePolygon("concave-hexagon", [-1, -0.95, -0.75, 0, -1, 0.95, 1, 0.95, 0.75, 0, 1, -0.95]);
  {
    var l = [-1, -1, 0.25, -1, 1, 0, 0.25, 1, -1, 1];
    this.generatePolygon("tag", l), this.generateRoundPolygon("round-tag", l);
  }
  t.makePolygon = function(u) {
    var f = u.join("$"), h = "polygon-" + f, c;
    return (c = this[h]) ? c : e.generatePolygon(h, u);
  };
};
var ma = {};
ma.timeToRender = function() {
  return this.redrawTotalTime / this.redrawCount;
};
ma.redraw = function(t) {
  t = t || bo();
  var e = this;
  e.averageRedrawTime === void 0 && (e.averageRedrawTime = 0), e.lastRedrawTime === void 0 && (e.lastRedrawTime = 0), e.lastDrawTime === void 0 && (e.lastDrawTime = 0), e.requestedFrame = !0, e.renderOptions = t;
};
ma.beforeRender = function(t, e) {
  if (!this.destroyed) {
    e == null && Ge("Priority is not optional for beforeRender");
    var r = this.beforeRenderCallbacks;
    r.push({
      fn: t,
      priority: e
    }), r.sort(function(a, n) {
      return n.priority - a.priority;
    });
  }
};
var Ps = function(e, r, a) {
  for (var n = e.beforeRenderCallbacks, i = 0; i < n.length; i++)
    n[i].fn(r, a);
};
ma.startRenderLoop = function() {
  var t = this, e = t.cy;
  if (!t.renderLoopStarted) {
    t.renderLoopStarted = !0;
    var r = function a(n) {
      if (!t.destroyed) {
        if (!e.batching())
          if (t.requestedFrame && !t.skipFrame) {
            Ps(t, !0, n);
            var i = Mt();
            t.render(t.renderOptions);
            var s = t.lastDrawTime = Mt();
            t.averageRedrawTime === void 0 && (t.averageRedrawTime = s - i), t.redrawCount === void 0 && (t.redrawCount = 0), t.redrawCount++, t.redrawTotalTime === void 0 && (t.redrawTotalTime = 0);
            var o = s - i;
            t.redrawTotalTime += o, t.lastRedrawTime = o, t.averageRedrawTime = t.averageRedrawTime / 2 + o / 2, t.requestedFrame = !1;
          } else
            Ps(t, !1, n);
        t.skipFrame = !1, Ya(a);
      }
    };
    Ya(r);
  }
};
var Ly = function(e) {
  this.init(e);
}, dl = Ly, Fr = dl.prototype;
Fr.clientFunctions = ["redrawHint", "render", "renderTo", "matchCanvasSize", "nodeShapeImpl", "arrowShapeImpl"];
Fr.init = function(t) {
  var e = this;
  e.options = t, e.cy = t.cy;
  var r = e.container = t.cy.container(), a = e.cy.window();
  if (a) {
    var n = a.document, i = n.head, s = "__________cytoscape_stylesheet", o = "__________cytoscape_container", l = n.getElementById(s) != null;
    if (r.className.indexOf(o) < 0 && (r.className = (r.className || "") + " " + o), !l) {
      var u = n.createElement("style");
      u.id = s, u.textContent = "." + o + " { position: relative; }", i.insertBefore(u, i.children[0]);
    }
    var f = a.getComputedStyle(r), h = f.getPropertyValue("position");
    h === "static" && Ne("A Cytoscape container has style position:static and so can not use UI extensions properly");
  }
  e.selection = [void 0, void 0, void 0, void 0, 0], e.bezierProjPcts = [0.05, 0.225, 0.4, 0.5, 0.6, 0.775, 0.95], e.hoverData = {
    down: null,
    last: null,
    downTime: null,
    triggerMode: null,
    dragging: !1,
    initialPan: [null, null],
    capture: !1
  }, e.dragData = {
    possibleDragElements: []
  }, e.touchData = {
    start: null,
    capture: !1,
    // These 3 fields related to tap, taphold events
    startPosition: [null, null, null, null, null, null],
    singleTouchStartTime: null,
    singleTouchMoved: !0,
    now: [null, null, null, null, null, null],
    earlier: [null, null, null, null, null, null]
  }, e.redraws = 0, e.showFps = t.showFps, e.debug = t.debug, e.hideEdgesOnViewport = t.hideEdgesOnViewport, e.textureOnViewport = t.textureOnViewport, e.wheelSensitivity = t.wheelSensitivity, e.motionBlurEnabled = t.motionBlur, e.forcedPixelRatio = ae(t.pixelRatio) ? t.pixelRatio : null, e.motionBlur = t.motionBlur, e.motionBlurOpacity = t.motionBlurOpacity, e.motionBlurTransparency = 1 - e.motionBlurOpacity, e.motionBlurPxRatio = 1, e.mbPxRBlurry = 1, e.minMbLowQualFrames = 4, e.fullQualityMb = !1, e.clearedForMotionBlur = [], e.desktopTapThreshold = t.desktopTapThreshold, e.desktopTapThreshold2 = t.desktopTapThreshold * t.desktopTapThreshold, e.touchTapThreshold = t.touchTapThreshold, e.touchTapThreshold2 = t.touchTapThreshold * t.touchTapThreshold, e.tapholdDuration = 500, e.bindings = [], e.beforeRenderCallbacks = [], e.beforeRenderPriorities = {
    // higher priority execs before lower one
    animations: 400,
    eleCalcs: 300,
    eleTxrDeq: 200,
    lyrTxrDeq: 150,
    lyrTxrSkip: 100
  }, e.registerNodeShapes(), e.registerArrowShapes(), e.registerCalculationListeners();
};
Fr.notify = function(t, e) {
  var r = this, a = r.cy;
  if (!this.destroyed) {
    if (t === "init") {
      r.load();
      return;
    }
    if (t === "destroy") {
      r.destroy();
      return;
    }
    (t === "add" || t === "remove" || t === "move" && a.hasCompoundNodes() || t === "load" || t === "zorder" || t === "mount") && r.invalidateCachedZSortedEles(), t === "viewport" && r.redrawHint("select", !0), (t === "load" || t === "resize" || t === "mount") && (r.invalidateContainerClientCoordsCache(), r.matchCanvasSize(r.container)), r.redrawHint("eles", !0), r.redrawHint("drag", !0), this.startRenderLoop(), this.redraw();
  }
};
Fr.destroy = function() {
  var t = this;
  t.destroyed = !0, t.cy.stopAnimationLoop();
  for (var e = 0; e < t.bindings.length; e++) {
    var r = t.bindings[e], a = r, n = a.target;
    (n.off || n.removeEventListener).apply(n, a.args);
  }
  if (t.bindings = [], t.beforeRenderCallbacks = [], t.onUpdateEleCalcsFns = [], t.removeObserver && t.removeObserver.disconnect(), t.styleObserver && t.styleObserver.disconnect(), t.resizeObserver && t.resizeObserver.disconnect(), t.labelCalcDiv)
    try {
      document.body.removeChild(t.labelCalcDiv);
    } catch (i) {
    }
};
Fr.isHeadless = function() {
  return !1;
};
[bi, vl, cl, Br, Pt, ma].forEach(function(t) {
  de(Fr, t);
});
var Rn = 1e3 / 60, gl = {
  setupDequeueing: function(e) {
    return function() {
      var a = this, n = this.renderer;
      if (!a.dequeueingSetup) {
        a.dequeueingSetup = !0;
        var i = on.default(function() {
          n.redrawHint("eles", !0), n.redrawHint("drag", !0), n.redraw();
        }, e.deqRedrawThreshold), s = function(u, f) {
          var h = Mt(), c = n.averageRedrawTime, v = n.lastRedrawTime, d = [], g = n.cy.extent(), p = n.getPixelRatio();
          for (u || n.flushRenderedStyleQueue(); ; ) {
            var y = Mt(), E = y - h, m = y - f;
            if (v < Rn) {
              var T = Rn - (u ? c : 0);
              if (m >= e.deqFastCost * T)
                break;
            } else if (u) {
              if (E >= e.deqCost * v || E >= e.deqAvgCost * c)
                break;
            } else if (m >= e.deqNoDrawCost * Rn)
              break;
            var C = e.deq(a, p, g);
            if (C.length > 0)
              for (var S = 0; S < C.length; S++)
                d.push(C[S]);
            else
              break;
          }
          d.length > 0 && (e.onDeqd(a, d), !u && e.shouldRedraw(a, d, p, g) && i());
        }, o = e.priority || oi;
        n.beforeRender(s, o(a));
      }
    };
  }
}, Ay = /* @__PURE__ */ function() {
  function t(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xa;
    ri(this, t), this.idsByKey = new Lt(), this.keyForId = new Lt(), this.cachesByLvl = new Lt(), this.lvls = [], this.getKey = e, this.doesEleInvalidateKey = r;
  }
  return ai(t, [{
    key: "getIdsFor",
    value: function(r) {
      r == null && Ge("Can not get id list for null key");
      var a = this.idsByKey, n = this.idsByKey.get(r);
      return n || (n = new Mr(), a.set(r, n)), n;
    }
  }, {
    key: "addIdForKey",
    value: function(r, a) {
      r != null && this.getIdsFor(r).add(a);
    }
  }, {
    key: "deleteIdForKey",
    value: function(r, a) {
      r != null && this.getIdsFor(r).delete(a);
    }
  }, {
    key: "getNumberOfIdsForKey",
    value: function(r) {
      return r == null ? 0 : this.getIdsFor(r).size;
    }
  }, {
    key: "updateKeyMappingFor",
    value: function(r) {
      var a = r.id(), n = this.keyForId.get(a), i = this.getKey(r);
      this.deleteIdForKey(n, a), this.addIdForKey(i, a), this.keyForId.set(a, i);
    }
  }, {
    key: "deleteKeyMappingFor",
    value: function(r) {
      var a = r.id(), n = this.keyForId.get(a);
      this.deleteIdForKey(n, a), this.keyForId.delete(a);
    }
  }, {
    key: "keyHasChangedFor",
    value: function(r) {
      var a = r.id(), n = this.keyForId.get(a), i = this.getKey(r);
      return n !== i;
    }
  }, {
    key: "isInvalid",
    value: function(r) {
      return this.keyHasChangedFor(r) || this.doesEleInvalidateKey(r);
    }
  }, {
    key: "getCachesAt",
    value: function(r) {
      var a = this.cachesByLvl, n = this.lvls, i = a.get(r);
      return i || (i = new Lt(), a.set(r, i), n.push(r)), i;
    }
  }, {
    key: "getCache",
    value: function(r, a) {
      return this.getCachesAt(a).get(r);
    }
  }, {
    key: "get",
    value: function(r, a) {
      var n = this.getKey(r), i = this.getCache(n, a);
      return i != null && this.updateKeyMappingFor(r), i;
    }
  }, {
    key: "getForCachedKey",
    value: function(r, a) {
      var n = this.keyForId.get(r.id()), i = this.getCache(n, a);
      return i;
    }
  }, {
    key: "hasCache",
    value: function(r, a) {
      return this.getCachesAt(a).has(r);
    }
  }, {
    key: "has",
    value: function(r, a) {
      var n = this.getKey(r);
      return this.hasCache(n, a);
    }
  }, {
    key: "setCache",
    value: function(r, a, n) {
      n.key = r, this.getCachesAt(a).set(r, n);
    }
  }, {
    key: "set",
    value: function(r, a, n) {
      var i = this.getKey(r);
      this.setCache(i, a, n), this.updateKeyMappingFor(r);
    }
  }, {
    key: "deleteCache",
    value: function(r, a) {
      this.getCachesAt(a).delete(r);
    }
  }, {
    key: "delete",
    value: function(r, a) {
      var n = this.getKey(r);
      this.deleteCache(n, a);
    }
  }, {
    key: "invalidateKey",
    value: function(r) {
      var a = this;
      this.lvls.forEach(function(n) {
        return a.deleteCache(r, n);
      });
    }
    // returns true if no other eles reference the invalidated cache (n.b. other eles may need the cache with the same key)
  }, {
    key: "invalidate",
    value: function(r) {
      var a = r.id(), n = this.keyForId.get(a);
      this.deleteKeyMappingFor(r);
      var i = this.doesEleInvalidateKey(r);
      return i && this.invalidateKey(n), i || this.getNumberOfIdsForKey(n) === 0;
    }
  }]), t;
}(), Bs = 25, Ra = 50, Va = -4, Xn = 3, Oy = 7.99, Ny = 8, Iy = 1024, My = 1024, Ry = 1024, ky = 0.2, Py = 0.8, By = 10, Fy = 0.15, Gy = 0.1, zy = 0.9, $y = 0.9, Vy = 100, _y = 1, wr = {
  dequeue: "dequeue",
  downscale: "downscale",
  highQuality: "highQuality"
}, Uy = Qe({
  getKey: null,
  doesEleInvalidateKey: Xa,
  drawElement: null,
  getBoundingBox: null,
  getRotationPoint: null,
  getRotationOffset: null,
  isVisible: po,
  allowEdgeTxrCaching: !0,
  allowParentTxrCaching: !0
}), Kr = function(e, r) {
  var a = this;
  a.renderer = e, a.onDequeues = [];
  var n = Uy(r);
  de(a, n), a.lookup = new Ay(n.getKey, n.doesEleInvalidateKey), a.setupDequeueing();
}, He = Kr.prototype;
He.reasons = wr;
He.getTextureQueue = function(t) {
  var e = this;
  return e.eleImgCaches = e.eleImgCaches || {}, e.eleImgCaches[t] = e.eleImgCaches[t] || [];
};
He.getRetiredTextureQueue = function(t) {
  var e = this, r = e.eleImgCaches.retired = e.eleImgCaches.retired || {}, a = r[t] = r[t] || [];
  return a;
};
He.getElementQueue = function() {
  var t = this, e = t.eleCacheQueue = t.eleCacheQueue || new ha.default(function(r, a) {
    return a.reqs - r.reqs;
  });
  return e;
};
He.getElementKeyToQueue = function() {
  var t = this, e = t.eleKeyToCacheQueue = t.eleKeyToCacheQueue || {};
  return e;
};
He.getElement = function(t, e, r, a, n) {
  var i = this, s = this.renderer, o = s.cy.zoom(), l = this.lookup;
  if (!e || e.w === 0 || e.h === 0 || isNaN(e.w) || isNaN(e.h) || !t.visible() || t.removed() || !i.allowEdgeTxrCaching && t.isEdge() || !i.allowParentTxrCaching && t.isParent())
    return null;
  if (a == null && (a = Math.ceil(ui(o * r))), a < Va)
    a = Va;
  else if (o >= Oy || a > Xn)
    return null;
  var u = Math.pow(2, a), f = e.h * u, h = e.w * u, c = s.eleTextBiggerThanMin(t, u);
  if (!this.isVisible(t, c))
    return null;
  var v = l.get(t, a);
  if (v && v.invalidated && (v.invalidated = !1, v.texture.invalidatedWidth -= v.width), v)
    return v;
  var d;
  if (f <= Bs ? d = Bs : f <= Ra ? d = Ra : d = Math.ceil(f / Ra) * Ra, f > Ry || h > My)
    return null;
  var g = i.getTextureQueue(d), p = g[g.length - 2], y = function() {
    return i.recycleTexture(d, h) || i.addTexture(d, h);
  };
  p || (p = g[g.length - 1]), p || (p = y()), p.width - p.usedWidth < h && (p = y());
  for (var E = function(R) {
    return R && R.scaledLabelShown === c;
  }, m = n && n === wr.dequeue, T = n && n === wr.highQuality, C = n && n === wr.downscale, S, b = a + 1; b <= Xn; b++) {
    var x = l.get(t, b);
    if (x) {
      S = x;
      break;
    }
  }
  var w = S && S.level === a + 1 ? S : null, D = function() {
    p.context.drawImage(w.texture.canvas, w.x, 0, w.width, w.height, p.usedWidth, 0, h, f);
  };
  if (p.context.setTransform(1, 0, 0, 1, 0, 0), p.context.clearRect(p.usedWidth, 0, h, d), E(w))
    D();
  else if (E(S))
    if (T) {
      for (var A = S.level; A > a; A--)
        w = i.getElement(t, e, r, A, wr.downscale);
      D();
    } else
      return i.queueElement(t, S.level - 1), S;
  else {
    var L;
    if (!m && !T && !C)
      for (var I = a - 1; I >= Va; I--) {
        var O = l.get(t, I);
        if (O) {
          L = O;
          break;
        }
      }
    if (E(L))
      return i.queueElement(t, a), L;
    p.context.translate(p.usedWidth, 0), p.context.scale(u, u), this.drawElement(p.context, t, e, c, !1), p.context.scale(1 / u, 1 / u), p.context.translate(-p.usedWidth, 0);
  }
  return v = {
    x: p.usedWidth,
    texture: p,
    level: a,
    scale: u,
    width: h,
    height: f,
    scaledLabelShown: c
  }, p.usedWidth += Math.ceil(h + Ny), p.eleCaches.push(v), l.set(t, a, v), i.checkTextureFullness(p), v;
};
He.invalidateElements = function(t) {
  for (var e = 0; e < t.length; e++)
    this.invalidateElement(t[e]);
};
He.invalidateElement = function(t) {
  var e = this, r = e.lookup, a = [], n = r.isInvalid(t);
  if (n) {
    for (var i = Va; i <= Xn; i++) {
      var s = r.getForCachedKey(t, i);
      s && a.push(s);
    }
    var o = r.invalidate(t);
    if (o)
      for (var l = 0; l < a.length; l++) {
        var u = a[l], f = u.texture;
        f.invalidatedWidth += u.width, u.invalidated = !0, e.checkTextureUtility(f);
      }
    e.removeFromQueue(t);
  }
};
He.checkTextureUtility = function(t) {
  t.invalidatedWidth >= ky * t.width && this.retireTexture(t);
};
He.checkTextureFullness = function(t) {
  var e = this, r = e.getTextureQueue(t.height);
  t.usedWidth / t.width > Py && t.fullnessChecks >= By ? Xt(r, t) : t.fullnessChecks++;
};
He.retireTexture = function(t) {
  var e = this, r = t.height, a = e.getTextureQueue(r), n = this.lookup;
  Xt(a, t), t.retired = !0;
  for (var i = t.eleCaches, s = 0; s < i.length; s++) {
    var o = i[s];
    n.deleteCache(o.key, o.level);
  }
  li(i);
  var l = e.getRetiredTextureQueue(r);
  l.push(t);
};
He.addTexture = function(t, e) {
  var r = this, a = r.getTextureQueue(t), n = {};
  return a.push(n), n.eleCaches = [], n.height = t, n.width = Math.max(Iy, e), n.usedWidth = 0, n.invalidatedWidth = 0, n.fullnessChecks = 0, n.canvas = r.renderer.makeOffscreenCanvas(n.width, n.height), n.context = n.canvas.getContext("2d"), n;
};
He.recycleTexture = function(t, e) {
  for (var r = this, a = r.getTextureQueue(t), n = r.getRetiredTextureQueue(t), i = 0; i < n.length; i++) {
    var s = n[i];
    if (s.width >= e)
      return s.retired = !1, s.usedWidth = 0, s.invalidatedWidth = 0, s.fullnessChecks = 0, li(s.eleCaches), s.context.setTransform(1, 0, 0, 1, 0, 0), s.context.clearRect(0, 0, s.width, s.height), Xt(n, s), a.push(s), s;
  }
};
He.queueElement = function(t, e) {
  var r = this, a = r.getElementQueue(), n = r.getElementKeyToQueue(), i = this.getKey(t), s = n[i];
  if (s)
    s.level = Math.max(s.level, e), s.eles.merge(t), s.reqs++, a.updateItem(s);
  else {
    var o = {
      eles: t.spawn().merge(t),
      level: e,
      reqs: 1,
      key: i
    };
    a.push(o), n[i] = o;
  }
};
He.dequeue = function(t) {
  for (var e = this, r = e.getElementQueue(), a = e.getElementKeyToQueue(), n = [], i = e.lookup, s = 0; s < _y && r.size() > 0; s++) {
    var o = r.pop(), l = o.key, u = o.eles[0], f = i.hasCache(u, o.level);
    if (a[l] = null, f)
      continue;
    n.push(o);
    var h = e.getBoundingBox(u);
    e.getElement(u, h, t, o.level, wr.dequeue);
  }
  return n;
};
He.removeFromQueue = function(t) {
  var e = this, r = e.getElementQueue(), a = e.getElementKeyToQueue(), n = this.getKey(t), i = a[n];
  i != null && (i.eles.length === 1 ? (i.reqs = si, r.updateItem(i), r.pop(), a[n] = null) : i.eles.unmerge(t));
};
He.onDequeue = function(t) {
  this.onDequeues.push(t);
};
He.offDequeue = function(t) {
  Xt(this.onDequeues, t);
};
He.setupDequeueing = gl.setupDequeueing({
  deqRedrawThreshold: Vy,
  deqCost: Fy,
  deqAvgCost: Gy,
  deqNoDrawCost: zy,
  deqFastCost: $y,
  deq: function(e, r, a) {
    return e.dequeue(r, a);
  },
  onDeqd: function(e, r) {
    for (var a = 0; a < e.onDequeues.length; a++) {
      var n = e.onDequeues[a];
      n(r);
    }
  },
  shouldRedraw: function(e, r, a, n) {
    for (var i = 0; i < r.length; i++)
      for (var s = r[i].eles, o = 0; o < s.length; o++) {
        var l = s[o].boundingBox();
        if (fi(l, n))
          return !0;
      }
    return !1;
  },
  priority: function(e) {
    return e.renderer.beforeRenderPriorities.eleTxrDeq;
  }
});
var Hy = 1, Qr = -4, en = 2, Yy = 3.99, Xy = 50, Wy = 50, qy = 0.15, Ky = 0.1, Zy = 0.9, Qy = 0.9, Jy = 1, Fs = 250, jy = 4e3 * 4e3, em = !0, pl = function(e) {
  var r = this, a = r.renderer = e, n = a.cy;
  r.layersByLevel = {}, r.firstGet = !0, r.lastInvalidationTime = Mt() - 2 * Fs, r.skipping = !1, r.eleTxrDeqs = n.collection(), r.scheduleElementRefinement = on.default(function() {
    r.refineElementTextures(r.eleTxrDeqs), r.eleTxrDeqs.unmerge(r.eleTxrDeqs);
  }, Wy), a.beforeRender(function(s, o) {
    o - r.lastInvalidationTime <= Fs ? r.skipping = !0 : r.skipping = !1;
  }, a.beforeRenderPriorities.lyrTxrSkip);
  var i = function(o, l) {
    return l.reqs - o.reqs;
  };
  r.layersQueue = new ha.default(i), r.setupDequeueing();
}, Je = pl.prototype, Gs = 0, tm = Math.pow(2, 53) - 1;
Je.makeLayer = function(t, e) {
  var r = Math.pow(2, e), a = Math.ceil(t.w * r), n = Math.ceil(t.h * r), i = this.renderer.makeOffscreenCanvas(a, n), s = {
    id: Gs = ++Gs % tm,
    bb: t,
    level: e,
    width: a,
    height: n,
    canvas: i,
    context: i.getContext("2d"),
    eles: [],
    elesQueue: [],
    reqs: 0
  }, o = s.context, l = -s.bb.x1, u = -s.bb.y1;
  return o.scale(r, r), o.translate(l, u), s;
};
Je.getLayers = function(t, e, r) {
  var a = this, n = a.renderer, i = n.cy, s = i.zoom(), o = a.firstGet;
  if (a.firstGet = !1, r == null) {
    if (r = Math.ceil(ui(s * e)), r < Qr)
      r = Qr;
    else if (s >= Yy || r > en)
      return null;
  }
  a.validateLayersElesOrdering(r, t);
  var l = a.layersByLevel, u = Math.pow(2, r), f = l[r] = l[r] || [], h, c = a.levelIsComplete(r, t), v, d = function() {
    var D = function(P) {
      if (a.validateLayersElesOrdering(P, t), a.levelIsComplete(P, t))
        return v = l[P], !0;
    }, A = function(P) {
      if (!v)
        for (var R = r + P; Qr <= R && R <= en && !D(R); R += P)
          ;
    };
    A(1), A(-1);
    for (var L = f.length - 1; L >= 0; L--) {
      var I = f[L];
      I.invalid && Xt(f, I);
    }
  };
  if (!c)
    d();
  else
    return f;
  var g = function() {
    if (!h) {
      h = ft();
      for (var D = 0; D < t.length; D++)
        xo(h, t[D].boundingBox());
    }
    return h;
  }, p = function(D) {
    D = D || {};
    var A = D.after;
    g();
    var L = h.w * u * (h.h * u);
    if (L > jy)
      return null;
    var I = a.makeLayer(h, r);
    if (A != null) {
      var O = f.indexOf(A) + 1;
      f.splice(O, 0, I);
    } else
      (D.insert === void 0 || D.insert) && f.unshift(I);
    return I;
  };
  if (a.skipping && !o)
    return null;
  for (var y = null, E = t.length / Hy, m = !o, T = 0; T < t.length; T++) {
    var C = t[T], S = C._private.rscratch, b = S.imgLayerCaches = S.imgLayerCaches || {}, x = b[r];
    if (x) {
      y = x;
      continue;
    }
    if ((!y || y.eles.length >= E || !To(y.bb, C.boundingBox())) && (y = p({
      insert: !0,
      after: y
    }), !y))
      return null;
    v || m ? a.queueLayer(y, C) : a.drawEleInLayer(y, C, r, e), y.eles.push(C), b[r] = y;
  }
  return v || (m ? null : f);
};
Je.getEleLevelForLayerLevel = function(t, e) {
  return t;
};
Je.drawEleInLayer = function(t, e, r, a) {
  var n = this, i = this.renderer, s = t.context, o = e.boundingBox();
  o.w === 0 || o.h === 0 || !e.visible() || (r = n.getEleLevelForLayerLevel(r, a), i.setImgSmoothing(s, !1), i.drawCachedElement(s, e, null, null, r, em), i.setImgSmoothing(s, !0));
};
Je.levelIsComplete = function(t, e) {
  var r = this, a = r.layersByLevel[t];
  if (!a || a.length === 0)
    return !1;
  for (var n = 0, i = 0; i < a.length; i++) {
    var s = a[i];
    if (s.reqs > 0 || s.invalid)
      return !1;
    n += s.eles.length;
  }
  return n === e.length;
};
Je.validateLayersElesOrdering = function(t, e) {
  var r = this.layersByLevel[t];
  if (r)
    for (var a = 0; a < r.length; a++) {
      for (var n = r[a], i = -1, s = 0; s < e.length; s++)
        if (n.eles[0] === e[s]) {
          i = s;
          break;
        }
      if (i < 0) {
        this.invalidateLayer(n);
        continue;
      }
      for (var o = i, s = 0; s < n.eles.length; s++)
        if (n.eles[s] !== e[o + s]) {
          this.invalidateLayer(n);
          break;
        }
    }
};
Je.updateElementsInLayers = function(t, e) {
  for (var r = this, a = ca(t[0]), n = 0; n < t.length; n++)
    for (var i = a ? null : t[n], s = a ? t[n] : t[n].ele, o = s._private.rscratch, l = o.imgLayerCaches = o.imgLayerCaches || {}, u = Qr; u <= en; u++) {
      var f = l[u];
      f && (i && r.getEleLevelForLayerLevel(f.level) !== i.level || e(f, s, i));
    }
};
Je.haveLayers = function() {
  for (var t = this, e = !1, r = Qr; r <= en; r++) {
    var a = t.layersByLevel[r];
    if (a && a.length > 0) {
      e = !0;
      break;
    }
  }
  return e;
};
Je.invalidateElements = function(t) {
  var e = this;
  t.length !== 0 && (e.lastInvalidationTime = Mt(), !(t.length === 0 || !e.haveLayers()) && e.updateElementsInLayers(t, function(a, n, i) {
    e.invalidateLayer(a);
  }));
};
Je.invalidateLayer = function(t) {
  if (this.lastInvalidationTime = Mt(), !t.invalid) {
    var e = t.level, r = t.eles, a = this.layersByLevel[e];
    Xt(a, t), t.elesQueue = [], t.invalid = !0, t.replacement && (t.replacement.invalid = !0);
    for (var n = 0; n < r.length; n++) {
      var i = r[n]._private.rscratch.imgLayerCaches;
      i && (i[e] = null);
    }
  }
};
Je.refineElementTextures = function(t) {
  var e = this;
  e.updateElementsInLayers(t, function(a, n, i) {
    var s = a.replacement;
    if (s || (s = a.replacement = e.makeLayer(a.bb, a.level), s.replaces = a, s.eles = a.eles), !s.reqs)
      for (var o = 0; o < s.eles.length; o++)
        e.queueLayer(s, s.eles[o]);
  });
};
Je.enqueueElementRefinement = function(t) {
  this.eleTxrDeqs.merge(t), this.scheduleElementRefinement();
};
Je.queueLayer = function(t, e) {
  var r = this, a = r.layersQueue, n = t.elesQueue, i = n.hasId = n.hasId || {};
  if (!t.replacement) {
    if (e) {
      if (i[e.id()])
        return;
      n.push(e), i[e.id()] = !0;
    }
    t.reqs ? (t.reqs++, a.updateItem(t)) : (t.reqs = 1, a.push(t));
  }
};
Je.dequeue = function(t) {
  for (var e = this, r = e.layersQueue, a = [], n = 0; n < Jy && r.size() !== 0; ) {
    var i = r.peek();
    if (i.replacement) {
      r.pop();
      continue;
    }
    if (i.replaces && i !== i.replaces.replacement) {
      r.pop();
      continue;
    }
    if (i.invalid) {
      r.pop();
      continue;
    }
    var s = i.elesQueue.shift();
    s && (e.drawEleInLayer(i, s, i.level, t), n++), a.length === 0 && a.push(!0), i.elesQueue.length === 0 && (r.pop(), i.reqs = 0, i.replaces && e.applyLayerReplacement(i), e.requestRedraw());
  }
  return a;
};
Je.applyLayerReplacement = function(t) {
  var e = this, r = e.layersByLevel[t.level], a = t.replaces, n = r.indexOf(a);
  if (!(n < 0 || a.invalid)) {
    r[n] = t;
    for (var i = 0; i < t.eles.length; i++) {
      var s = t.eles[i]._private, o = s.imgLayerCaches = s.imgLayerCaches || {};
      o && (o[t.level] = t);
    }
    e.requestRedraw();
  }
};
Je.requestRedraw = on.default(function() {
  var t = this.renderer;
  t.redrawHint("eles", !0), t.redrawHint("drag", !0), t.redraw();
}, 100);
Je.setupDequeueing = gl.setupDequeueing({
  deqRedrawThreshold: Xy,
  deqCost: qy,
  deqAvgCost: Ky,
  deqNoDrawCost: Zy,
  deqFastCost: Qy,
  deq: function(e, r) {
    return e.dequeue(r);
  },
  onDeqd: oi,
  shouldRedraw: po,
  priority: function(e) {
    return e.renderer.beforeRenderPriorities.lyrTxrDeq;
  }
});
var yl = {}, zs;
function rm(t, e) {
  for (var r = 0; r < e.length; r++) {
    var a = e[r];
    t.lineTo(a.x, a.y);
  }
}
function am(t, e, r) {
  for (var a, n = 0; n < e.length; n++) {
    var i = e[n];
    n === 0 && (a = i), t.lineTo(i.x, i.y);
  }
  t.quadraticCurveTo(r.x, r.y, a.x, a.y);
}
function $s(t, e, r) {
  t.beginPath && t.beginPath();
  for (var a = e, n = 0; n < a.length; n++) {
    var i = a[n];
    t.lineTo(i.x, i.y);
  }
  var s = r, o = r[0];
  t.moveTo(o.x, o.y);
  for (var n = 1; n < s.length; n++) {
    var i = s[n];
    t.lineTo(i.x, i.y);
  }
  t.closePath && t.closePath();
}
function nm(t, e, r, a, n) {
  t.beginPath && t.beginPath(), t.arc(r, a, n, 0, Math.PI * 2, !1);
  var i = e, s = i[0];
  t.moveTo(s.x, s.y);
  for (var o = 0; o < i.length; o++) {
    var l = i[o];
    t.lineTo(l.x, l.y);
  }
  t.closePath && t.closePath();
}
function im(t, e, r, a) {
  t.arc(e, r, a, 0, Math.PI * 2, !1);
}
yl.arrowShapeImpl = function(t) {
  return (zs || (zs = {
    polygon: rm,
    "triangle-backcurve": am,
    "triangle-tee": $s,
    "circle-triangle": nm,
    "triangle-cross": $s,
    circle: im
  }))[t];
};
var Nt = {};
Nt.drawElement = function(t, e, r, a, n, i) {
  var s = this;
  e.isNode() ? s.drawNode(t, e, r, a, n, i) : s.drawEdge(t, e, r, a, n, i);
};
Nt.drawElementOverlay = function(t, e) {
  var r = this;
  e.isNode() ? r.drawNodeOverlay(t, e) : r.drawEdgeOverlay(t, e);
};
Nt.drawElementUnderlay = function(t, e) {
  var r = this;
  e.isNode() ? r.drawNodeUnderlay(t, e) : r.drawEdgeUnderlay(t, e);
};
Nt.drawCachedElementPortion = function(t, e, r, a, n, i, s, o) {
  var l = this, u = r.getBoundingBox(e);
  if (!(u.w === 0 || u.h === 0)) {
    var f = r.getElement(e, u, a, n, i);
    if (f != null) {
      var h = o(l, e);
      if (h === 0)
        return;
      var c = s(l, e), v = u.x1, d = u.y1, g = u.w, p = u.h, y, E, m, T, C;
      if (c !== 0) {
        var S = r.getRotationPoint(e);
        m = S.x, T = S.y, t.translate(m, T), t.rotate(c), C = l.getImgSmoothing(t), C || l.setImgSmoothing(t, !0);
        var b = r.getRotationOffset(e);
        y = b.x, E = b.y;
      } else
        y = v, E = d;
      var x;
      h !== 1 && (x = t.globalAlpha, t.globalAlpha = x * h), t.drawImage(f.texture.canvas, f.x, 0, f.width, f.height, y, E, g, p), h !== 1 && (t.globalAlpha = x), c !== 0 && (t.rotate(-c), t.translate(-m, -T), C || l.setImgSmoothing(t, !1));
    } else
      r.drawElement(t, e);
  }
};
var sm = function() {
  return 0;
}, om = function(e, r) {
  return e.getTextAngle(r, null);
}, lm = function(e, r) {
  return e.getTextAngle(r, "source");
}, um = function(e, r) {
  return e.getTextAngle(r, "target");
}, fm = function(e, r) {
  return r.effectiveOpacity();
}, kn = function(e, r) {
  return r.pstyle("text-opacity").pfValue * r.effectiveOpacity();
};
Nt.drawCachedElement = function(t, e, r, a, n, i) {
  var s = this, o = s.data, l = o.eleTxrCache, u = o.lblTxrCache, f = o.slbTxrCache, h = o.tlbTxrCache, c = e.boundingBox(), v = i === !0 ? l.reasons.highQuality : null;
  if (!(c.w === 0 || c.h === 0 || !e.visible()) && (!a || fi(c, a))) {
    var d = e.isEdge(), g = e.element()._private.rscratch.badLine;
    s.drawElementUnderlay(t, e), s.drawCachedElementPortion(t, e, l, r, n, v, sm, fm), (!d || !g) && s.drawCachedElementPortion(t, e, u, r, n, v, om, kn), d && !g && (s.drawCachedElementPortion(t, e, f, r, n, v, lm, kn), s.drawCachedElementPortion(t, e, h, r, n, v, um, kn)), s.drawElementOverlay(t, e);
  }
};
Nt.drawElements = function(t, e) {
  for (var r = this, a = 0; a < e.length; a++) {
    var n = e[a];
    r.drawElement(t, n);
  }
};
Nt.drawCachedElements = function(t, e, r, a) {
  for (var n = this, i = 0; i < e.length; i++) {
    var s = e[i];
    n.drawCachedElement(t, s, r, a);
  }
};
Nt.drawCachedNodes = function(t, e, r, a) {
  for (var n = this, i = 0; i < e.length; i++) {
    var s = e[i];
    s.isNode() && n.drawCachedElement(t, s, r, a);
  }
};
Nt.drawLayeredElements = function(t, e, r, a) {
  var n = this, i = n.data.lyrTxrCache.getLayers(e, r);
  if (i)
    for (var s = 0; s < i.length; s++) {
      var o = i[s], l = o.bb;
      l.w === 0 || l.h === 0 || t.drawImage(o.canvas, l.x1, l.y1, l.w, l.h);
    }
  else
    n.drawCachedElements(t, e, r, a);
};
var Bt = {};
Bt.drawEdge = function(t, e, r) {
  var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !0, s = this, o = e._private.rscratch;
  if (!(i && !e.visible()) && !(o.badLine || o.allpts == null || isNaN(o.allpts[0]))) {
    var l;
    r && (l = r, t.translate(-l.x1, -l.y1));
    var u = i ? e.pstyle("opacity").value : 1, f = i ? e.pstyle("line-opacity").value : 1, h = e.pstyle("curve-style").value, c = e.pstyle("line-style").value, v = e.pstyle("width").pfValue, d = e.pstyle("line-cap").value, g = u * f, p = u * f, y = function() {
      var L = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : g;
      h === "straight-triangle" ? (s.eleStrokeStyle(t, e, L), s.drawEdgeTrianglePath(e, t, o.allpts)) : (t.lineWidth = v, t.lineCap = d, s.eleStrokeStyle(t, e, L), s.drawEdgePath(e, t, o.allpts, c), t.lineCap = "butt");
    }, E = function() {
      n && s.drawEdgeOverlay(t, e);
    }, m = function() {
      n && s.drawEdgeUnderlay(t, e);
    }, T = function() {
      var L = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : p;
      s.drawArrowheads(t, e, L);
    }, C = function() {
      s.drawElementText(t, e, null, a);
    };
    t.lineJoin = "round";
    var S = e.pstyle("ghost").value === "yes";
    if (S) {
      var b = e.pstyle("ghost-offset-x").pfValue, x = e.pstyle("ghost-offset-y").pfValue, w = e.pstyle("ghost-opacity").value, D = g * w;
      t.translate(b, x), y(D), T(D), t.translate(-b, -x);
    }
    m(), y(), T(), E(), C(), r && t.translate(l.x1, l.y1);
  }
};
var ml = function(e) {
  if (!["overlay", "underlay"].includes(e))
    throw new Error("Invalid state");
  return function(r, a) {
    if (a.visible()) {
      var n = a.pstyle("".concat(e, "-opacity")).value;
      if (n !== 0) {
        var i = this, s = i.usePaths(), o = a._private.rscratch, l = a.pstyle("".concat(e, "-padding")).pfValue, u = 2 * l, f = a.pstyle("".concat(e, "-color")).value;
        r.lineWidth = u, o.edgeType === "self" && !s ? r.lineCap = "butt" : r.lineCap = "round", i.colorStrokeStyle(r, f[0], f[1], f[2], n), i.drawEdgePath(a, r, o.allpts, "solid");
      }
    }
  };
};
Bt.drawEdgeOverlay = ml("overlay");
Bt.drawEdgeUnderlay = ml("underlay");
Bt.drawEdgePath = function(t, e, r, a) {
  var n = t._private.rscratch, i = e, s, o = !1, l = this.usePaths(), u = t.pstyle("line-dash-pattern").pfValue, f = t.pstyle("line-dash-offset").pfValue;
  if (l) {
    var h = r.join("$"), c = n.pathCacheKey && n.pathCacheKey === h;
    c ? (s = e = n.pathCache, o = !0) : (s = e = new Path2D(), n.pathCacheKey = h, n.pathCache = s);
  }
  if (i.setLineDash)
    switch (a) {
      case "dotted":
        i.setLineDash([1, 1]);
        break;
      case "dashed":
        i.setLineDash(u), i.lineDashOffset = f;
        break;
      case "solid":
        i.setLineDash([]);
        break;
    }
  if (!o && !n.badLine)
    switch (e.beginPath && e.beginPath(), e.moveTo(r[0], r[1]), n.edgeType) {
      case "bezier":
      case "self":
      case "compound":
      case "multibezier":
        for (var v = 2; v + 3 < r.length; v += 4)
          e.quadraticCurveTo(r[v], r[v + 1], r[v + 2], r[v + 3]);
        break;
      case "straight":
      case "segments":
      case "haystack":
        for (var d = 2; d + 1 < r.length; d += 2)
          e.lineTo(r[d], r[d + 1]);
        break;
    }
  e = i, l ? e.stroke(s) : e.stroke(), e.setLineDash && e.setLineDash([]);
};
Bt.drawEdgeTrianglePath = function(t, e, r) {
  e.fillStyle = e.strokeStyle;
  for (var a = t.pstyle("width").pfValue, n = 0; n + 1 < r.length; n += 2) {
    var i = [r[n + 2] - r[n], r[n + 3] - r[n + 1]], s = Math.sqrt(i[0] * i[0] + i[1] * i[1]), o = [i[1] / s, -i[0] / s], l = [o[0] * a / 2, o[1] * a / 2];
    e.beginPath(), e.moveTo(r[n] - l[0], r[n + 1] - l[1]), e.lineTo(r[n] + l[0], r[n + 1] + l[1]), e.lineTo(r[n + 2], r[n + 3]), e.closePath(), e.fill();
  }
};
Bt.drawArrowheads = function(t, e, r) {
  var a = e._private.rscratch, n = a.edgeType === "haystack";
  n || this.drawArrowhead(t, e, "source", a.arrowStartX, a.arrowStartY, a.srcArrowAngle, r), this.drawArrowhead(t, e, "mid-target", a.midX, a.midY, a.midtgtArrowAngle, r), this.drawArrowhead(t, e, "mid-source", a.midX, a.midY, a.midsrcArrowAngle, r), n || this.drawArrowhead(t, e, "target", a.arrowEndX, a.arrowEndY, a.tgtArrowAngle, r);
};
Bt.drawArrowhead = function(t, e, r, a, n, i, s) {
  if (!(isNaN(a) || a == null || isNaN(n) || n == null || isNaN(i) || i == null)) {
    var o = this, l = e.pstyle(r + "-arrow-shape").value;
    if (l !== "none") {
      var u = e.pstyle(r + "-arrow-fill").value === "hollow" ? "both" : "filled", f = e.pstyle(r + "-arrow-fill").value, h = e.pstyle("width").pfValue, c = e.pstyle(r + "-arrow-width"), v = c.value === "match-line" ? h : c.pfValue;
      c.units === "%" && (v *= h);
      var d = e.pstyle("opacity").value;
      s === void 0 && (s = d);
      var g = t.globalCompositeOperation;
      (s !== 1 || f === "hollow") && (t.globalCompositeOperation = "destination-out", o.colorFillStyle(t, 255, 255, 255, 1), o.colorStrokeStyle(t, 255, 255, 255, 1), o.drawArrowShape(e, t, u, h, l, v, a, n, i), t.globalCompositeOperation = g);
      var p = e.pstyle(r + "-arrow-color").value;
      o.colorFillStyle(t, p[0], p[1], p[2], s), o.colorStrokeStyle(t, p[0], p[1], p[2], s), o.drawArrowShape(e, t, f, h, l, v, a, n, i);
    }
  }
};
Bt.drawArrowShape = function(t, e, r, a, n, i, s, o, l) {
  var u = this, f = this.usePaths() && n !== "triangle-cross", h = !1, c, v = e, d = {
    x: s,
    y: o
  }, g = t.pstyle("arrow-scale").value, p = this.getArrowWidth(a, g), y = u.arrowShapes[n];
  if (f) {
    var E = u.arrowPathCache = u.arrowPathCache || [], m = ar(n), T = E[m];
    T != null ? (c = e = T, h = !0) : (c = e = new Path2D(), E[m] = c);
  }
  h || (e.beginPath && e.beginPath(), f ? y.draw(e, 1, 0, {
    x: 0,
    y: 0
  }, 1) : y.draw(e, p, l, d, a), e.closePath && e.closePath()), e = v, f && (e.translate(s, o), e.rotate(l), e.scale(p, p)), (r === "filled" || r === "both") && (f ? e.fill(c) : e.fill()), (r === "hollow" || r === "both") && (e.lineWidth = i / (f ? p : 1), e.lineJoin = "miter", f ? e.stroke(c) : e.stroke()), f && (e.scale(1 / p, 1 / p), e.rotate(-l), e.translate(-s, -o));
};
var wi = {};
wi.safeDrawImage = function(t, e, r, a, n, i, s, o, l, u) {
  if (!(n <= 0 || i <= 0 || l <= 0 || u <= 0))
    try {
      t.drawImage(e, r, a, n, i, s, o, l, u);
    } catch (f) {
      Ne(f);
    }
};
wi.drawInscribedImage = function(t, e, r, a, n) {
  var i = this, s = r.position(), o = s.x, l = s.y, u = r.cy().style(), f = u.getIndexedStyle.bind(u), h = f(r, "background-fit", "value", a), c = f(r, "background-repeat", "value", a), v = r.width(), d = r.height(), g = r.padding() * 2, p = v + (f(r, "background-width-relative-to", "value", a) === "inner" ? 0 : g), y = d + (f(r, "background-height-relative-to", "value", a) === "inner" ? 0 : g), E = r._private.rscratch, m = f(r, "background-clip", "value", a), T = m === "node", C = f(r, "background-image-opacity", "value", a) * n, S = f(r, "background-image-smoothing", "value", a), b = e.width || e.cachedW, x = e.height || e.cachedH;
  (b == null || x == null) && (document.body.appendChild(e), b = e.cachedW = e.width || e.offsetWidth, x = e.cachedH = e.height || e.offsetHeight, document.body.removeChild(e));
  var w = b, D = x;
  if (f(r, "background-width", "value", a) !== "auto" && (f(r, "background-width", "units", a) === "%" ? w = f(r, "background-width", "pfValue", a) * p : w = f(r, "background-width", "pfValue", a)), f(r, "background-height", "value", a) !== "auto" && (f(r, "background-height", "units", a) === "%" ? D = f(r, "background-height", "pfValue", a) * y : D = f(r, "background-height", "pfValue", a)), !(w === 0 || D === 0)) {
    if (h === "contain") {
      var A = Math.min(p / w, y / D);
      w *= A, D *= A;
    } else if (h === "cover") {
      var A = Math.max(p / w, y / D);
      w *= A, D *= A;
    }
    var L = o - p / 2, I = f(r, "background-position-x", "units", a), O = f(r, "background-position-x", "pfValue", a);
    I === "%" ? L += (p - w) * O : L += O;
    var P = f(r, "background-offset-x", "units", a), R = f(r, "background-offset-x", "pfValue", a);
    P === "%" ? L += (p - w) * R : L += R;
    var M = l - y / 2, k = f(r, "background-position-y", "units", a), B = f(r, "background-position-y", "pfValue", a);
    k === "%" ? M += (y - D) * B : M += B;
    var G = f(r, "background-offset-y", "units", a), F = f(r, "background-offset-y", "pfValue", a);
    G === "%" ? M += (y - D) * F : M += F, E.pathCache && (L -= o, M -= l, o = 0, l = 0);
    var $ = t.globalAlpha;
    t.globalAlpha = C;
    var U = i.getImgSmoothing(t), _ = !1;
    if (S === "no" && U ? (i.setImgSmoothing(t, !1), _ = !0) : S === "yes" && !U && (i.setImgSmoothing(t, !0), _ = !0), c === "no-repeat")
      T && (t.save(), E.pathCache ? t.clip(E.pathCache) : (i.nodeShapes[i.getNodeShape(r)].draw(t, o, l, p, y), t.clip())), i.safeDrawImage(t, e, 0, 0, b, x, L, M, w, D), T && t.restore();
    else {
      var Y = t.createPattern(e, c);
      t.fillStyle = Y, i.nodeShapes[i.getNodeShape(r)].draw(t, o, l, p, y), t.translate(L, M), t.fill(), t.translate(-L, -M);
    }
    t.globalAlpha = $, _ && i.setImgSmoothing(t, U);
  }
};
var hr = {};
hr.eleTextBiggerThanMin = function(t, e) {
  if (!e) {
    var r = t.cy().zoom(), a = this.getPixelRatio(), n = Math.ceil(ui(r * a));
    e = Math.pow(2, n);
  }
  var i = t.pstyle("font-size").pfValue * e, s = t.pstyle("min-zoomed-font-size").pfValue;
  return !(i < s);
};
hr.drawElementText = function(t, e, r, a, n) {
  var i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !0, s = this;
  if (a == null) {
    if (i && !s.eleTextBiggerThanMin(e))
      return;
  } else if (a === !1)
    return;
  if (e.isNode()) {
    var o = e.pstyle("label");
    if (!o || !o.value)
      return;
    var l = s.getLabelJustification(e);
    t.textAlign = l, t.textBaseline = "bottom";
  } else {
    var u = e.element()._private.rscratch.badLine, f = e.pstyle("label"), h = e.pstyle("source-label"), c = e.pstyle("target-label");
    if (u || (!f || !f.value) && (!h || !h.value) && (!c || !c.value))
      return;
    t.textAlign = "center", t.textBaseline = "bottom";
  }
  var v = !r, d;
  r && (d = r, t.translate(-d.x1, -d.y1)), n == null ? (s.drawText(t, e, null, v, i), e.isEdge() && (s.drawText(t, e, "source", v, i), s.drawText(t, e, "target", v, i))) : s.drawText(t, e, n, v, i), r && t.translate(d.x1, d.y1);
};
hr.getFontCache = function(t) {
  var e;
  this.fontCaches = this.fontCaches || [];
  for (var r = 0; r < this.fontCaches.length; r++)
    if (e = this.fontCaches[r], e.context === t)
      return e;
  return e = {
    context: t
  }, this.fontCaches.push(e), e;
};
hr.setupTextStyle = function(t, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, a = e.pstyle("font-style").strValue, n = e.pstyle("font-size").pfValue + "px", i = e.pstyle("font-family").strValue, s = e.pstyle("font-weight").strValue, o = r ? e.effectiveOpacity() * e.pstyle("text-opacity").value : 1, l = e.pstyle("text-outline-opacity").value * o, u = e.pstyle("color").value, f = e.pstyle("text-outline-color").value;
  t.font = a + " " + s + " " + n + " " + i, t.lineJoin = "round", this.colorFillStyle(t, u[0], u[1], u[2], o), this.colorStrokeStyle(t, f[0], f[1], f[2], l);
};
function Pn(t, e, r, a, n) {
  var i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 5, s = arguments.length > 6 ? arguments[6] : void 0;
  t.beginPath(), t.moveTo(e + i, r), t.lineTo(e + a - i, r), t.quadraticCurveTo(e + a, r, e + a, r + i), t.lineTo(e + a, r + n - i), t.quadraticCurveTo(e + a, r + n, e + a - i, r + n), t.lineTo(e + i, r + n), t.quadraticCurveTo(e, r + n, e, r + n - i), t.lineTo(e, r + i), t.quadraticCurveTo(e, r, e + i, r), t.closePath(), s ? t.stroke() : t.fill();
}
hr.getTextAngle = function(t, e) {
  var r, a = t._private, n = a.rscratch, i = e ? e + "-" : "", s = t.pstyle(i + "text-rotation"), o = xt(n, "labelAngle", e);
  return s.strValue === "autorotate" ? r = t.isEdge() ? o : 0 : s.strValue === "none" ? r = 0 : r = s.pfValue, r;
};
hr.drawText = function(t, e, r) {
  var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = e._private, s = i.rscratch, o = n ? e.effectiveOpacity() : 1;
  if (!(n && (o === 0 || e.pstyle("text-opacity").value === 0))) {
    r === "main" && (r = null);
    var l = xt(s, "labelX", r), u = xt(s, "labelY", r), f, h, c = this.getLabelText(e, r);
    if (c != null && c !== "" && !isNaN(l) && !isNaN(u)) {
      this.setupTextStyle(t, e, n);
      var v = r ? r + "-" : "", d = xt(s, "labelWidth", r), g = xt(s, "labelHeight", r), p = e.pstyle(v + "text-margin-x").pfValue, y = e.pstyle(v + "text-margin-y").pfValue, E = e.isEdge(), m = e.pstyle("text-halign").value, T = e.pstyle("text-valign").value;
      E && (m = "center", T = "center"), l += p, u += y;
      var C;
      switch (a ? C = this.getTextAngle(e, r) : C = 0, C !== 0 && (f = l, h = u, t.translate(f, h), t.rotate(C), l = 0, u = 0), T) {
        case "top":
          break;
        case "center":
          u += g / 2;
          break;
        case "bottom":
          u += g;
          break;
      }
      var S = e.pstyle("text-background-opacity").value, b = e.pstyle("text-border-opacity").value, x = e.pstyle("text-border-width").pfValue, w = e.pstyle("text-background-padding").pfValue, D = e.pstyle("text-background-shape").strValue, A = D.indexOf("round") === 0, L = 2;
      if (S > 0 || x > 0 && b > 0) {
        var I = l - w;
        switch (m) {
          case "left":
            I -= d;
            break;
          case "center":
            I -= d / 2;
            break;
        }
        var O = u - g - w, P = d + 2 * w, R = g + 2 * w;
        if (S > 0) {
          var M = t.fillStyle, k = e.pstyle("text-background-color").value;
          t.fillStyle = "rgba(" + k[0] + "," + k[1] + "," + k[2] + "," + S * o + ")", A ? Pn(t, I, O, P, R, L) : t.fillRect(I, O, P, R), t.fillStyle = M;
        }
        if (x > 0 && b > 0) {
          var B = t.strokeStyle, G = t.lineWidth, F = e.pstyle("text-border-color").value, $ = e.pstyle("text-border-style").value;
          if (t.strokeStyle = "rgba(" + F[0] + "," + F[1] + "," + F[2] + "," + b * o + ")", t.lineWidth = x, t.setLineDash)
            switch ($) {
              case "dotted":
                t.setLineDash([1, 1]);
                break;
              case "dashed":
                t.setLineDash([4, 2]);
                break;
              case "double":
                t.lineWidth = x / 4, t.setLineDash([]);
                break;
              case "solid":
                t.setLineDash([]);
                break;
            }
          if (A ? Pn(t, I, O, P, R, L, "stroke") : t.strokeRect(I, O, P, R), $ === "double") {
            var U = x / 2;
            A ? Pn(t, I + U, O + U, P - U * 2, R - U * 2, L, "stroke") : t.strokeRect(I + U, O + U, P - U * 2, R - U * 2);
          }
          t.setLineDash && t.setLineDash([]), t.lineWidth = G, t.strokeStyle = B;
        }
      }
      var _ = 2 * e.pstyle("text-outline-width").pfValue;
      if (_ > 0 && (t.lineWidth = _), e.pstyle("text-wrap").value === "wrap") {
        var Y = xt(s, "labelWrapCachedLines", r), W = xt(s, "labelLineHeight", r), z = d / 2, K = this.getLabelJustification(e);
        switch (K === "auto" || (m === "left" ? K === "left" ? l += -d : K === "center" && (l += -z) : m === "center" ? K === "left" ? l += -z : K === "right" && (l += z) : m === "right" && (K === "center" ? l += z : K === "right" && (l += d))), T) {
          case "top":
            u -= (Y.length - 1) * W;
            break;
          case "center":
          case "bottom":
            u -= (Y.length - 1) * W;
            break;
        }
        for (var j = 0; j < Y.length; j++)
          _ > 0 && t.strokeText(Y[j], l, u), t.fillText(Y[j], l, u), u += W;
      } else
        _ > 0 && t.strokeText(c, l, u), t.fillText(c, l, u);
      C !== 0 && (t.rotate(-C), t.translate(-f, -h));
    }
  }
};
var Gr = {};
Gr.drawNode = function(t, e, r) {
  var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !0, s = this, o, l, u = e._private, f = u.rscratch, h = e.position();
  if (!(!ae(h.x) || !ae(h.y)) && !(i && !e.visible())) {
    var c = i ? e.effectiveOpacity() : 1, v = s.usePaths(), d, g = !1, p = e.padding();
    o = e.width() + 2 * p, l = e.height() + 2 * p;
    var y;
    r && (y = r, t.translate(-y.x1, -y.y1));
    for (var E = e.pstyle("background-image"), m = E.value, T = new Array(m.length), C = new Array(m.length), S = 0, b = 0; b < m.length; b++) {
      var x = m[b], w = T[b] = x != null && x !== "none";
      if (w) {
        var D = e.cy().style().getIndexedStyle(e, "background-image-crossorigin", "value", b);
        S++, C[b] = s.getCachedImage(x, D, function() {
          u.backgroundTimestamp = Date.now(), e.emitAndNotify("background");
        });
      }
    }
    var A = e.pstyle("background-blacken").value, L = e.pstyle("border-width").pfValue, I = e.pstyle("background-opacity").value * c, O = e.pstyle("border-color").value, P = e.pstyle("border-style").value, R = e.pstyle("border-opacity").value * c, M = e.pstyle("outline-width").pfValue, k = e.pstyle("outline-color").value, B = e.pstyle("outline-style").value, G = e.pstyle("outline-opacity").value * c, F = e.pstyle("outline-offset").value;
    t.lineJoin = "miter";
    var $ = function() {
      var H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : I;
      s.eleFillStyle(t, e, H);
    }, U = function() {
      var H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : R;
      s.colorStrokeStyle(t, O[0], O[1], O[2], H);
    }, _ = function() {
      var H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : G;
      s.colorStrokeStyle(t, k[0], k[1], k[2], H);
    }, Y = function(H, N, V, J) {
      var X = s.nodePathCache = s.nodePathCache || [], q = go(V === "polygon" ? V + "," + J.join(",") : V, "" + N, "" + H), he = X[q], Z, oe = !1;
      return he != null ? (Z = he, oe = !0, f.pathCache = Z) : (Z = new Path2D(), X[q] = f.pathCache = Z), {
        path: Z,
        cacheHit: oe
      };
    }, W = e.pstyle("shape").strValue, z = e.pstyle("shape-polygon-points").pfValue;
    if (v) {
      t.translate(h.x, h.y);
      var K = Y(o, l, W, z);
      d = K.path, g = K.cacheHit;
    }
    var j = function() {
      if (!g) {
        var H = h;
        v && (H = {
          x: 0,
          y: 0
        }), s.nodeShapes[s.getNodeShape(e)].draw(d || t, H.x, H.y, o, l);
      }
      v ? t.fill(d) : t.fill();
    }, Q = function() {
      for (var H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : c, N = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, V = u.backgrounding, J = 0, X = 0; X < C.length; X++) {
        var q = e.cy().style().getIndexedStyle(e, "background-image-containment", "value", X);
        if (N && q === "over" || !N && q === "inside") {
          J++;
          continue;
        }
        T[X] && C[X].complete && !C[X].error && (J++, s.drawInscribedImage(t, C[X], e, X, H));
      }
      u.backgrounding = J !== S, V !== u.backgrounding && e.updateStyle(!1);
    }, ee = function() {
      var H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, N = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : c;
      s.hasPie(e) && (s.drawPie(t, e, N), H && (v || s.nodeShapes[s.getNodeShape(e)].draw(t, h.x, h.y, o, l)));
    }, ne = function() {
      var H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : c, N = (A > 0 ? A : -A) * H, V = A > 0 ? 0 : 255;
      A !== 0 && (s.colorFillStyle(t, V, V, V, N), v ? t.fill(d) : t.fill());
    }, ce = function() {
      if (L > 0) {
        if (t.lineWidth = L, t.lineCap = "butt", t.setLineDash)
          switch (P) {
            case "dotted":
              t.setLineDash([1, 1]);
              break;
            case "dashed":
              t.setLineDash([4, 2]);
              break;
            case "solid":
            case "double":
              t.setLineDash([]);
              break;
          }
        if (v ? t.stroke(d) : t.stroke(), P === "double") {
          t.lineWidth = L / 3;
          var H = t.globalCompositeOperation;
          t.globalCompositeOperation = "destination-out", v ? t.stroke(d) : t.stroke(), t.globalCompositeOperation = H;
        }
        t.setLineDash && t.setLineDash([]);
      }
    }, te = function() {
      if (M > 0) {
        if (t.lineWidth = M, t.lineCap = "butt", t.setLineDash)
          switch (B) {
            case "dotted":
              t.setLineDash([1, 1]);
              break;
            case "dashed":
              t.setLineDash([4, 2]);
              break;
            case "solid":
            case "double":
              t.setLineDash([]);
              break;
          }
        var H = h;
        v && (H = {
          x: 0,
          y: 0
        });
        var N = s.getNodeShape(e), V = (o + L + (M + F)) / o, J = (l + L + (M + F)) / l, X = o * V, q = l * J, he = s.nodeShapes[N].points, Z;
        if (v) {
          var oe = Y(X, q, N, he);
          Z = oe.path;
        }
        if (N === "ellipse")
          s.drawEllipsePath(Z || t, H.x, H.y, X, q);
        else if (["round-diamond", "round-heptagon", "round-hexagon", "round-octagon", "round-pentagon", "round-polygon", "round-triangle", "round-tag"].includes(N)) {
          var me = 0, Se = 0, pe = 0;
          N === "round-diamond" ? me = (L + F + M) * 1.4 : N === "round-heptagon" ? (me = (L + F + M) * 1.075, pe = -(L / 2 + F + M) / 35) : N === "round-hexagon" ? me = (L + F + M) * 1.12 : N === "round-pentagon" ? (me = (L + F + M) * 1.13, pe = -(L / 2 + F + M) / 15) : N === "round-tag" ? (me = (L + F + M) * 1.12, Se = (L / 2 + M + F) * 0.07) : N === "round-triangle" && (me = (L + F + M) * (Math.PI / 2), pe = -(L + F / 2 + M) / Math.PI), me !== 0 && (V = (o + me) / o, J = (l + me) / l), s.drawRoundPolygonPath(Z || t, H.x + Se, H.y + pe, o * V, l * J, he);
        } else if (["roundrectangle", "round-rectangle"].includes(N))
          s.drawRoundRectanglePath(Z || t, H.x, H.y, X, q);
        else if (["cutrectangle", "cut-rectangle"].includes(N))
          s.drawCutRectanglePath(Z || t, H.x, H.y, X, q);
        else if (["bottomroundrectangle", "bottom-round-rectangle"].includes(N))
          s.drawBottomRoundRectanglePath(Z || t, H.x, H.y, X, q);
        else if (N === "barrel")
          s.drawBarrelPath(Z || t, H.x, H.y, X, q);
        else if (N.startsWith("polygon") || ["rhomboid", "right-rhomboid", "round-tag", "tag", "vee"].includes(N)) {
          var Te = (L + M + F) / o;
          he = Wa(qa(he, Te)), s.drawPolygonPath(Z || t, H.x, H.y, o, l, he);
        } else {
          var ye = (L + M + F) / o;
          he = Wa(qa(he, -ye)), s.drawPolygonPath(Z || t, H.x, H.y, o, l, he);
        }
        if (v ? t.stroke(Z) : t.stroke(), B === "double") {
          t.lineWidth = L / 3;
          var be = t.globalCompositeOperation;
          t.globalCompositeOperation = "destination-out", v ? t.stroke(Z) : t.stroke(), t.globalCompositeOperation = be;
        }
        t.setLineDash && t.setLineDash([]);
      }
    }, re = function() {
      n && s.drawNodeOverlay(t, e, h, o, l);
    }, ue = function() {
      n && s.drawNodeUnderlay(t, e, h, o, l);
    }, le = function() {
      s.drawElementText(t, e, null, a);
    }, se = e.pstyle("ghost").value === "yes";
    if (se) {
      var fe = e.pstyle("ghost-offset-x").pfValue, xe = e.pstyle("ghost-offset-y").pfValue, Ee = e.pstyle("ghost-opacity").value, ge = Ee * c;
      t.translate(fe, xe), _(), te(), $(Ee * I), j(), Q(ge, !0), U(Ee * R), ce(), ee(A !== 0 || L !== 0), Q(ge, !1), ne(ge), t.translate(-fe, -xe);
    }
    v && t.translate(-h.x, -h.y), ue(), v && t.translate(h.x, h.y), _(), te(), $(), j(), Q(c, !0), U(), ce(), ee(A !== 0 || L !== 0), Q(c, !1), ne(), v && t.translate(-h.x, -h.y), le(), re(), r && t.translate(y.x1, y.y1);
  }
};
var bl = function(e) {
  if (!["overlay", "underlay"].includes(e))
    throw new Error("Invalid state");
  return function(r, a, n, i, s) {
    var o = this;
    if (a.visible()) {
      var l = a.pstyle("".concat(e, "-padding")).pfValue, u = a.pstyle("".concat(e, "-opacity")).value, f = a.pstyle("".concat(e, "-color")).value, h = a.pstyle("".concat(e, "-shape")).value;
      if (u > 0) {
        if (n = n || a.position(), i == null || s == null) {
          var c = a.padding();
          i = a.width() + 2 * c, s = a.height() + 2 * c;
        }
        o.colorFillStyle(r, f[0], f[1], f[2], u), o.nodeShapes[h].draw(r, n.x, n.y, i + l * 2, s + l * 2), r.fill();
      }
    }
  };
};
Gr.drawNodeOverlay = bl("overlay");
Gr.drawNodeUnderlay = bl("underlay");
Gr.hasPie = function(t) {
  return t = t[0], t._private.hasPie;
};
Gr.drawPie = function(t, e, r, a) {
  e = e[0], a = a || e.position();
  var n = e.cy().style(), i = e.pstyle("pie-size"), s = a.x, o = a.y, l = e.width(), u = e.height(), f = Math.min(l, u) / 2, h = 0, c = this.usePaths();
  c && (s = 0, o = 0), i.units === "%" ? f = f * i.pfValue : i.pfValue !== void 0 && (f = i.pfValue / 2);
  for (var v = 1; v <= n.pieBackgroundN; v++) {
    var d = e.pstyle("pie-" + v + "-background-size").value, g = e.pstyle("pie-" + v + "-background-color").value, p = e.pstyle("pie-" + v + "-background-opacity").value * r, y = d / 100;
    y + h > 1 && (y = 1 - h);
    var E = 1.5 * Math.PI + 2 * Math.PI * h, m = 2 * Math.PI * y, T = E + m;
    d === 0 || h >= 1 || h + y > 1 || (t.beginPath(), t.moveTo(s, o), t.arc(s, o, f, E, T), t.closePath(), this.colorFillStyle(t, g[0], g[1], g[2], p), t.fill(), h += y);
  }
};
var vt = {}, hm = 100;
vt.getPixelRatio = function() {
  var t = this.data.contexts[0];
  if (this.forcedPixelRatio != null)
    return this.forcedPixelRatio;
  var e = t.backingStorePixelRatio || t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1;
  return (window.devicePixelRatio || 1) / e;
};
vt.paintCache = function(t) {
  for (var e = this.paintCaches = this.paintCaches || [], r = !0, a, n = 0; n < e.length; n++)
    if (a = e[n], a.context === t) {
      r = !1;
      break;
    }
  return r && (a = {
    context: t
  }, e.push(a)), a;
};
vt.createGradientStyleFor = function(t, e, r, a, n) {
  var i, s = this.usePaths(), o = r.pstyle(e + "-gradient-stop-colors").value, l = r.pstyle(e + "-gradient-stop-positions").pfValue;
  if (a === "radial-gradient")
    if (r.isEdge()) {
      var u = r.sourceEndpoint(), f = r.targetEndpoint(), h = r.midpoint(), c = nr(u, h), v = nr(f, h);
      i = t.createRadialGradient(h.x, h.y, 0, h.x, h.y, Math.max(c, v));
    } else {
      var d = s ? {
        x: 0,
        y: 0
      } : r.position(), g = r.paddedWidth(), p = r.paddedHeight();
      i = t.createRadialGradient(d.x, d.y, 0, d.x, d.y, Math.max(g, p));
    }
  else if (r.isEdge()) {
    var y = r.sourceEndpoint(), E = r.targetEndpoint();
    i = t.createLinearGradient(y.x, y.y, E.x, E.y);
  } else {
    var m = s ? {
      x: 0,
      y: 0
    } : r.position(), T = r.paddedWidth(), C = r.paddedHeight(), S = T / 2, b = C / 2, x = r.pstyle("background-gradient-direction").value;
    switch (x) {
      case "to-bottom":
        i = t.createLinearGradient(m.x, m.y - b, m.x, m.y + b);
        break;
      case "to-top":
        i = t.createLinearGradient(m.x, m.y + b, m.x, m.y - b);
        break;
      case "to-left":
        i = t.createLinearGradient(m.x + S, m.y, m.x - S, m.y);
        break;
      case "to-right":
        i = t.createLinearGradient(m.x - S, m.y, m.x + S, m.y);
        break;
      case "to-bottom-right":
      case "to-right-bottom":
        i = t.createLinearGradient(m.x - S, m.y - b, m.x + S, m.y + b);
        break;
      case "to-top-right":
      case "to-right-top":
        i = t.createLinearGradient(m.x - S, m.y + b, m.x + S, m.y - b);
        break;
      case "to-bottom-left":
      case "to-left-bottom":
        i = t.createLinearGradient(m.x + S, m.y - b, m.x - S, m.y + b);
        break;
      case "to-top-left":
      case "to-left-top":
        i = t.createLinearGradient(m.x + S, m.y + b, m.x - S, m.y - b);
        break;
    }
  }
  if (!i)
    return null;
  for (var w = l.length === o.length, D = o.length, A = 0; A < D; A++)
    i.addColorStop(w ? l[A] : A / (D - 1), "rgba(" + o[A][0] + "," + o[A][1] + "," + o[A][2] + "," + n + ")");
  return i;
};
vt.gradientFillStyle = function(t, e, r, a) {
  var n = this.createGradientStyleFor(t, "background", e, r, a);
  if (!n)
    return null;
  t.fillStyle = n;
};
vt.colorFillStyle = function(t, e, r, a, n) {
  t.fillStyle = "rgba(" + e + "," + r + "," + a + "," + n + ")";
};
vt.eleFillStyle = function(t, e, r) {
  var a = e.pstyle("background-fill").value;
  if (a === "linear-gradient" || a === "radial-gradient")
    this.gradientFillStyle(t, e, a, r);
  else {
    var n = e.pstyle("background-color").value;
    this.colorFillStyle(t, n[0], n[1], n[2], r);
  }
};
vt.gradientStrokeStyle = function(t, e, r, a) {
  var n = this.createGradientStyleFor(t, "line", e, r, a);
  if (!n)
    return null;
  t.strokeStyle = n;
};
vt.colorStrokeStyle = function(t, e, r, a, n) {
  t.strokeStyle = "rgba(" + e + "," + r + "," + a + "," + n + ")";
};
vt.eleStrokeStyle = function(t, e, r) {
  var a = e.pstyle("line-fill").value;
  if (a === "linear-gradient" || a === "radial-gradient")
    this.gradientStrokeStyle(t, e, a, r);
  else {
    var n = e.pstyle("line-color").value;
    this.colorStrokeStyle(t, n[0], n[1], n[2], r);
  }
};
vt.matchCanvasSize = function(t) {
  var e = this, r = e.data, a = e.findContainerClientCoords(), n = a[2], i = a[3], s = e.getPixelRatio(), o = e.motionBlurPxRatio;
  (t === e.data.bufferCanvases[e.MOTIONBLUR_BUFFER_NODE] || t === e.data.bufferCanvases[e.MOTIONBLUR_BUFFER_DRAG]) && (s = o);
  var l = n * s, u = i * s, f;
  if (!(l === e.canvasWidth && u === e.canvasHeight)) {
    e.fontCaches = null;
    var h = r.canvasContainer;
    h.style.width = n + "px", h.style.height = i + "px";
    for (var c = 0; c < e.CANVAS_LAYERS; c++)
      f = r.canvases[c], f.width = l, f.height = u, f.style.width = n + "px", f.style.height = i + "px";
    for (var c = 0; c < e.BUFFER_COUNT; c++)
      f = r.bufferCanvases[c], f.width = l, f.height = u, f.style.width = n + "px", f.style.height = i + "px";
    e.textureMult = 1, s <= 1 && (f = r.bufferCanvases[e.TEXTURE_BUFFER], e.textureMult = 2, f.width = l * e.textureMult, f.height = u * e.textureMult), e.canvasWidth = l, e.canvasHeight = u;
  }
};
vt.renderTo = function(t, e, r, a) {
  this.render({
    forcedContext: t,
    forcedZoom: e,
    forcedPan: r,
    drawAllLayers: !0,
    forcedPxRatio: a
  });
};
vt.render = function(t) {
  t = t || bo();
  var e = t.forcedContext, r = t.drawAllLayers, a = t.drawOnlyNodeLayer, n = t.forcedZoom, i = t.forcedPan, s = this, o = t.forcedPxRatio === void 0 ? this.getPixelRatio() : t.forcedPxRatio, l = s.cy, u = s.data, f = u.canvasNeedsRedraw, h = s.textureOnViewport && !e && (s.pinching || s.hoverData.dragging || s.swipePanning || s.data.wheelZooming), c = t.motionBlur !== void 0 ? t.motionBlur : s.motionBlur, v = s.motionBlurPxRatio, d = l.hasCompoundNodes(), g = s.hoverData.draggingEles, p = !!(s.hoverData.selecting || s.touchData.selecting);
  c = c && !e && s.motionBlurEnabled && !p;
  var y = c;
  e || (s.prevPxRatio !== o && (s.invalidateContainerClientCoordsCache(), s.matchCanvasSize(s.container), s.redrawHint("eles", !0), s.redrawHint("drag", !0)), s.prevPxRatio = o), !e && s.motionBlurTimeout && clearTimeout(s.motionBlurTimeout), c && (s.mbFrames == null && (s.mbFrames = 0), s.mbFrames++, s.mbFrames < 3 && (y = !1), s.mbFrames > s.minMbLowQualFrames && (s.motionBlurPxRatio = s.mbPxRBlurry)), s.clearingMotionBlur && (s.motionBlurPxRatio = 1), s.textureDrawLastFrame && !h && (f[s.NODE] = !0, f[s.SELECT_BOX] = !0);
  var E = l.style(), m = l.zoom(), T = n !== void 0 ? n : m, C = l.pan(), S = {
    x: C.x,
    y: C.y
  }, b = {
    zoom: m,
    pan: {
      x: C.x,
      y: C.y
    }
  }, x = s.prevViewport, w = x === void 0 || b.zoom !== x.zoom || b.pan.x !== x.pan.x || b.pan.y !== x.pan.y;
  !w && !(g && !d) && (s.motionBlurPxRatio = 1), i && (S = i), T *= o, S.x *= o, S.y *= o;
  var D = s.getCachedZSortedEles();
  function A(te, re, ue, le, se) {
    var fe = te.globalCompositeOperation;
    te.globalCompositeOperation = "destination-out", s.colorFillStyle(te, 255, 255, 255, s.motionBlurTransparency), te.fillRect(re, ue, le, se), te.globalCompositeOperation = fe;
  }
  function L(te, re) {
    var ue, le, se, fe;
    !s.clearingMotionBlur && (te === u.bufferContexts[s.MOTIONBLUR_BUFFER_NODE] || te === u.bufferContexts[s.MOTIONBLUR_BUFFER_DRAG]) ? (ue = {
      x: C.x * v,
      y: C.y * v
    }, le = m * v, se = s.canvasWidth * v, fe = s.canvasHeight * v) : (ue = S, le = T, se = s.canvasWidth, fe = s.canvasHeight), te.setTransform(1, 0, 0, 1, 0, 0), re === "motionBlur" ? A(te, 0, 0, se, fe) : !e && (re === void 0 || re) && te.clearRect(0, 0, se, fe), r || (te.translate(ue.x, ue.y), te.scale(le, le)), i && te.translate(i.x, i.y), n && te.scale(n, n);
  }
  if (h || (s.textureDrawLastFrame = !1), h) {
    if (s.textureDrawLastFrame = !0, !s.textureCache) {
      s.textureCache = {}, s.textureCache.bb = l.mutableElements().boundingBox(), s.textureCache.texture = s.data.bufferCanvases[s.TEXTURE_BUFFER];
      var I = s.data.bufferContexts[s.TEXTURE_BUFFER];
      I.setTransform(1, 0, 0, 1, 0, 0), I.clearRect(0, 0, s.canvasWidth * s.textureMult, s.canvasHeight * s.textureMult), s.render({
        forcedContext: I,
        drawOnlyNodeLayer: !0,
        forcedPxRatio: o * s.textureMult
      });
      var b = s.textureCache.viewport = {
        zoom: l.zoom(),
        pan: l.pan(),
        width: s.canvasWidth,
        height: s.canvasHeight
      };
      b.mpan = {
        x: (0 - b.pan.x) / b.zoom,
        y: (0 - b.pan.y) / b.zoom
      };
    }
    f[s.DRAG] = !1, f[s.NODE] = !1;
    var O = u.contexts[s.NODE], P = s.textureCache.texture, b = s.textureCache.viewport;
    O.setTransform(1, 0, 0, 1, 0, 0), c ? A(O, 0, 0, b.width, b.height) : O.clearRect(0, 0, b.width, b.height);
    var R = E.core("outside-texture-bg-color").value, M = E.core("outside-texture-bg-opacity").value;
    s.colorFillStyle(O, R[0], R[1], R[2], M), O.fillRect(0, 0, b.width, b.height);
    var m = l.zoom();
    L(O, !1), O.clearRect(b.mpan.x, b.mpan.y, b.width / b.zoom / o, b.height / b.zoom / o), O.drawImage(P, b.mpan.x, b.mpan.y, b.width / b.zoom / o, b.height / b.zoom / o);
  } else
    s.textureOnViewport && !e && (s.textureCache = null);
  var k = l.extent(), B = s.pinching || s.hoverData.dragging || s.swipePanning || s.data.wheelZooming || s.hoverData.draggingEles || s.cy.animated(), G = s.hideEdgesOnViewport && B, F = [];
  if (F[s.NODE] = !f[s.NODE] && c && !s.clearedForMotionBlur[s.NODE] || s.clearingMotionBlur, F[s.NODE] && (s.clearedForMotionBlur[s.NODE] = !0), F[s.DRAG] = !f[s.DRAG] && c && !s.clearedForMotionBlur[s.DRAG] || s.clearingMotionBlur, F[s.DRAG] && (s.clearedForMotionBlur[s.DRAG] = !0), f[s.NODE] || r || a || F[s.NODE]) {
    var $ = c && !F[s.NODE] && v !== 1, O = e || ($ ? s.data.bufferContexts[s.MOTIONBLUR_BUFFER_NODE] : u.contexts[s.NODE]), U = c && !$ ? "motionBlur" : void 0;
    L(O, U), G ? s.drawCachedNodes(O, D.nondrag, o, k) : s.drawLayeredElements(O, D.nondrag, o, k), s.debug && s.drawDebugPoints(O, D.nondrag), !r && !c && (f[s.NODE] = !1);
  }
  if (!a && (f[s.DRAG] || r || F[s.DRAG])) {
    var $ = c && !F[s.DRAG] && v !== 1, O = e || ($ ? s.data.bufferContexts[s.MOTIONBLUR_BUFFER_DRAG] : u.contexts[s.DRAG]);
    L(O, c && !$ ? "motionBlur" : void 0), G ? s.drawCachedNodes(O, D.drag, o, k) : s.drawCachedElements(O, D.drag, o, k), s.debug && s.drawDebugPoints(O, D.drag), !r && !c && (f[s.DRAG] = !1);
  }
  if (s.showFps || !a && f[s.SELECT_BOX] && !r) {
    var O = e || u.contexts[s.SELECT_BOX];
    if (L(O), s.selection[4] == 1 && (s.hoverData.selecting || s.touchData.selecting)) {
      var m = s.cy.zoom(), _ = E.core("selection-box-border-width").value / m;
      O.lineWidth = _, O.fillStyle = "rgba(" + E.core("selection-box-color").value[0] + "," + E.core("selection-box-color").value[1] + "," + E.core("selection-box-color").value[2] + "," + E.core("selection-box-opacity").value + ")", O.fillRect(s.selection[0], s.selection[1], s.selection[2] - s.selection[0], s.selection[3] - s.selection[1]), _ > 0 && (O.strokeStyle = "rgba(" + E.core("selection-box-border-color").value[0] + "," + E.core("selection-box-border-color").value[1] + "," + E.core("selection-box-border-color").value[2] + "," + E.core("selection-box-opacity").value + ")", O.strokeRect(s.selection[0], s.selection[1], s.selection[2] - s.selection[0], s.selection[3] - s.selection[1]));
    }
    if (u.bgActivePosistion && !s.hoverData.selecting) {
      var m = s.cy.zoom(), Y = u.bgActivePosistion;
      O.fillStyle = "rgba(" + E.core("active-bg-color").value[0] + "," + E.core("active-bg-color").value[1] + "," + E.core("active-bg-color").value[2] + "," + E.core("active-bg-opacity").value + ")", O.beginPath(), O.arc(Y.x, Y.y, E.core("active-bg-size").pfValue / m, 0, 2 * Math.PI), O.fill();
    }
    var W = s.lastRedrawTime;
    if (s.showFps && W) {
      W = Math.round(W);
      var z = Math.round(1e3 / W);
      O.setTransform(1, 0, 0, 1, 0, 0), O.fillStyle = "rgba(255, 0, 0, 0.75)", O.strokeStyle = "rgba(255, 0, 0, 0.75)", O.lineWidth = 1, O.fillText("1 frame = " + W + " ms = " + z + " fps", 0, 20);
      var K = 60;
      O.strokeRect(0, 30, 250, 20), O.fillRect(0, 30, 250 * Math.min(z / K, 1), 20);
    }
    r || (f[s.SELECT_BOX] = !1);
  }
  if (c && v !== 1) {
    var j = u.contexts[s.NODE], Q = s.data.bufferCanvases[s.MOTIONBLUR_BUFFER_NODE], ee = u.contexts[s.DRAG], ne = s.data.bufferCanvases[s.MOTIONBLUR_BUFFER_DRAG], ce = function(re, ue, le) {
      re.setTransform(1, 0, 0, 1, 0, 0), le || !y ? re.clearRect(0, 0, s.canvasWidth, s.canvasHeight) : A(re, 0, 0, s.canvasWidth, s.canvasHeight);
      var se = v;
      re.drawImage(
        ue,
        // img
        0,
        0,
        // sx, sy
        s.canvasWidth * se,
        s.canvasHeight * se,
        // sw, sh
        0,
        0,
        // x, y
        s.canvasWidth,
        s.canvasHeight
        // w, h
      );
    };
    (f[s.NODE] || F[s.NODE]) && (ce(j, Q, F[s.NODE]), f[s.NODE] = !1), (f[s.DRAG] || F[s.DRAG]) && (ce(ee, ne, F[s.DRAG]), f[s.DRAG] = !1);
  }
  s.prevViewport = b, s.clearingMotionBlur && (s.clearingMotionBlur = !1, s.motionBlurCleared = !0, s.motionBlur = !0), c && (s.motionBlurTimeout = setTimeout(function() {
    s.motionBlurTimeout = null, s.clearedForMotionBlur[s.NODE] = !1, s.clearedForMotionBlur[s.DRAG] = !1, s.motionBlur = !1, s.clearingMotionBlur = !h, s.mbFrames = 0, f[s.NODE] = !0, f[s.DRAG] = !0, s.redraw();
  }, hm)), e || l.emit("render");
};
var Qt = {};
Qt.drawPolygonPath = function(t, e, r, a, n, i) {
  var s = a / 2, o = n / 2;
  t.beginPath && t.beginPath(), t.moveTo(e + s * i[0], r + o * i[1]);
  for (var l = 1; l < i.length / 2; l++)
    t.lineTo(e + s * i[l * 2], r + o * i[l * 2 + 1]);
  t.closePath();
};
Qt.drawRoundPolygonPath = function(t, e, r, a, n, i) {
  var s = a / 2, o = n / 2, l = hi(a, n);
  t.beginPath && t.beginPath();
  for (var u = 0; u < i.length / 4; u++) {
    var f = void 0, h = void 0;
    u === 0 ? f = i.length - 2 : f = u * 4 - 2, h = u * 4 + 2;
    var c = e + s * i[u * 4], v = r + o * i[u * 4 + 1], d = -i[f] * i[h] - i[f + 1] * i[h + 1], g = l / Math.tan(Math.acos(d) / 2), p = c - g * i[f], y = v - g * i[f + 1], E = c + g * i[h], m = v + g * i[h + 1];
    u === 0 ? t.moveTo(p, y) : t.lineTo(p, y), t.arcTo(c, v, E, m, l);
  }
  t.closePath();
};
Qt.drawRoundRectanglePath = function(t, e, r, a, n) {
  var i = a / 2, s = n / 2, o = da(a, n);
  t.beginPath && t.beginPath(), t.moveTo(e, r - s), t.arcTo(e + i, r - s, e + i, r, o), t.arcTo(e + i, r + s, e, r + s, o), t.arcTo(e - i, r + s, e - i, r, o), t.arcTo(e - i, r - s, e, r - s, o), t.lineTo(e, r - s), t.closePath();
};
Qt.drawBottomRoundRectanglePath = function(t, e, r, a, n) {
  var i = a / 2, s = n / 2, o = da(a, n);
  t.beginPath && t.beginPath(), t.moveTo(e, r - s), t.lineTo(e + i, r - s), t.lineTo(e + i, r), t.arcTo(e + i, r + s, e, r + s, o), t.arcTo(e - i, r + s, e - i, r, o), t.lineTo(e - i, r - s), t.lineTo(e, r - s), t.closePath();
};
Qt.drawCutRectanglePath = function(t, e, r, a, n) {
  var i = a / 2, s = n / 2, o = So();
  t.beginPath && t.beginPath(), t.moveTo(e - i + o, r - s), t.lineTo(e + i - o, r - s), t.lineTo(e + i, r - s + o), t.lineTo(e + i, r + s - o), t.lineTo(e + i - o, r + s), t.lineTo(e - i + o, r + s), t.lineTo(e - i, r + s - o), t.lineTo(e - i, r - s + o), t.closePath();
};
Qt.drawBarrelPath = function(t, e, r, a, n) {
  var i = a / 2, s = n / 2, o = e - i, l = e + i, u = r - s, f = r + s, h = zn(a, n), c = h.widthOffset, v = h.heightOffset, d = h.ctrlPtOffsetPct * c;
  t.beginPath && t.beginPath(), t.moveTo(o, u + v), t.lineTo(o, f - v), t.quadraticCurveTo(o + d, f, o + c, f), t.lineTo(l - c, f), t.quadraticCurveTo(l - d, f, l, f - v), t.lineTo(l, u + v), t.quadraticCurveTo(l - d, u, l - c, u), t.lineTo(o + c, u), t.quadraticCurveTo(o + d, u, o, u + v), t.closePath();
};
var Vs = Math.sin(0), _s = Math.cos(0), Wn = {}, qn = {}, El = Math.PI / 40;
for (var mr = 0 * Math.PI; mr < 2 * Math.PI; mr += El)
  Wn[mr] = Math.sin(mr), qn[mr] = Math.cos(mr);
Qt.drawEllipsePath = function(t, e, r, a, n) {
  if (t.beginPath && t.beginPath(), t.ellipse)
    t.ellipse(e, r, a / 2, n / 2, 0, 0, 2 * Math.PI);
  else
    for (var i, s, o = a / 2, l = n / 2, u = 0 * Math.PI; u < 2 * Math.PI; u += El)
      i = e - o * Wn[u] * Vs + o * qn[u] * _s, s = r + l * qn[u] * Vs + l * Wn[u] * _s, u === 0 ? t.moveTo(i, s) : t.lineTo(i, s);
  t.closePath();
};
var ba = {};
ba.createBuffer = function(t, e) {
  var r = document.createElement("canvas");
  return r.width = t, r.height = e, [r, r.getContext("2d")];
};
ba.bufferCanvasImage = function(t) {
  var e = this.cy, r = e.mutableElements(), a = r.boundingBox(), n = this.findContainerClientCoords(), i = t.full ? Math.ceil(a.w) : n[2], s = t.full ? Math.ceil(a.h) : n[3], o = ae(t.maxWidth) || ae(t.maxHeight), l = this.getPixelRatio(), u = 1;
  if (t.scale !== void 0)
    i *= t.scale, s *= t.scale, u = t.scale;
  else if (o) {
    var f = 1 / 0, h = 1 / 0;
    ae(t.maxWidth) && (f = u * t.maxWidth / i), ae(t.maxHeight) && (h = u * t.maxHeight / s), u = Math.min(f, h), i *= u, s *= u;
  }
  o || (i *= l, s *= l, u *= l);
  var c = document.createElement("canvas");
  c.width = i, c.height = s, c.style.width = i + "px", c.style.height = s + "px";
  var v = c.getContext("2d");
  if (i > 0 && s > 0) {
    v.clearRect(0, 0, i, s), v.globalCompositeOperation = "source-over";
    var d = this.getCachedZSortedEles();
    if (t.full)
      v.translate(-a.x1 * u, -a.y1 * u), v.scale(u, u), this.drawElements(v, d), v.scale(1 / u, 1 / u), v.translate(a.x1 * u, a.y1 * u);
    else {
      var g = e.pan(), p = {
        x: g.x * u,
        y: g.y * u
      };
      u *= e.zoom(), v.translate(p.x, p.y), v.scale(u, u), this.drawElements(v, d), v.scale(1 / u, 1 / u), v.translate(-p.x, -p.y);
    }
    t.bg && (v.globalCompositeOperation = "destination-over", v.fillStyle = t.bg, v.rect(0, 0, i, s), v.fill());
  }
  return c;
};
function vm(t, e) {
  for (var r = atob(t), a = new ArrayBuffer(r.length), n = new Uint8Array(a), i = 0; i < r.length; i++)
    n[i] = r.charCodeAt(i);
  return new Blob([a], {
    type: e
  });
}
function Us(t) {
  var e = t.indexOf(",");
  return t.substr(e + 1);
}
function wl(t, e, r) {
  var a = function() {
    return e.toDataURL(r, t.quality);
  };
  switch (t.output) {
    case "blob-promise":
      return new Rr(function(n, i) {
        try {
          e.toBlob(function(s) {
            s != null ? n(s) : i(new Error("`canvas.toBlob()` sent a null value in its callback"));
          }, r, t.quality);
        } catch (s) {
          i(s);
        }
      });
    case "blob":
      return vm(Us(a()), r);
    case "base64":
      return Us(a());
    case "base64uri":
    default:
      return a();
  }
}
ba.png = function(t) {
  return wl(t, this.bufferCanvasImage(t), "image/png");
};
ba.jpg = function(t) {
  return wl(t, this.bufferCanvasImage(t), "image/jpeg");
};
var xl = {};
xl.nodeShapeImpl = function(t, e, r, a, n, i, s) {
  switch (t) {
    case "ellipse":
      return this.drawEllipsePath(e, r, a, n, i);
    case "polygon":
      return this.drawPolygonPath(e, r, a, n, i, s);
    case "round-polygon":
      return this.drawRoundPolygonPath(e, r, a, n, i, s);
    case "roundrectangle":
    case "round-rectangle":
      return this.drawRoundRectanglePath(e, r, a, n, i);
    case "cutrectangle":
    case "cut-rectangle":
      return this.drawCutRectanglePath(e, r, a, n, i);
    case "bottomroundrectangle":
    case "bottom-round-rectangle":
      return this.drawBottomRoundRectanglePath(e, r, a, n, i);
    case "barrel":
      return this.drawBarrelPath(e, r, a, n, i);
  }
};
var cm = Tl, Le = Tl.prototype;
Le.CANVAS_LAYERS = 3;
Le.SELECT_BOX = 0;
Le.DRAG = 1;
Le.NODE = 2;
Le.BUFFER_COUNT = 3;
Le.TEXTURE_BUFFER = 0;
Le.MOTIONBLUR_BUFFER_NODE = 1;
Le.MOTIONBLUR_BUFFER_DRAG = 2;
function Tl(t) {
  var e = this;
  e.data = {
    canvases: new Array(Le.CANVAS_LAYERS),
    contexts: new Array(Le.CANVAS_LAYERS),
    canvasNeedsRedraw: new Array(Le.CANVAS_LAYERS),
    bufferCanvases: new Array(Le.BUFFER_COUNT),
    bufferContexts: new Array(Le.CANVAS_LAYERS)
  };
  var r = "-webkit-tap-highlight-color", a = "rgba(0,0,0,0)";
  e.data.canvasContainer = document.createElement("div");
  var n = e.data.canvasContainer.style;
  e.data.canvasContainer.style[r] = a, n.position = "relative", n.zIndex = "0", n.overflow = "hidden";
  var i = t.cy.container();
  i.appendChild(e.data.canvasContainer), i.style[r] = a;
  var s = {
    "-webkit-user-select": "none",
    "-moz-user-select": "-moz-none",
    "user-select": "none",
    "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
    "outline-style": "none"
  };
  qc() && (s["-ms-touch-action"] = "none", s["touch-action"] = "none");
  for (var o = 0; o < Le.CANVAS_LAYERS; o++) {
    var l = e.data.canvases[o] = document.createElement("canvas");
    e.data.contexts[o] = l.getContext("2d"), Object.keys(s).forEach(function(W) {
      l.style[W] = s[W];
    }), l.style.position = "absolute", l.setAttribute("data-id", "layer" + o), l.style.zIndex = String(Le.CANVAS_LAYERS - o), e.data.canvasContainer.appendChild(l), e.data.canvasNeedsRedraw[o] = !1;
  }
  e.data.topCanvas = e.data.canvases[0], e.data.canvases[Le.NODE].setAttribute("data-id", "layer" + Le.NODE + "-node"), e.data.canvases[Le.SELECT_BOX].setAttribute("data-id", "layer" + Le.SELECT_BOX + "-selectbox"), e.data.canvases[Le.DRAG].setAttribute("data-id", "layer" + Le.DRAG + "-drag");
  for (var o = 0; o < Le.BUFFER_COUNT; o++)
    e.data.bufferCanvases[o] = document.createElement("canvas"), e.data.bufferContexts[o] = e.data.bufferCanvases[o].getContext("2d"), e.data.bufferCanvases[o].style.position = "absolute", e.data.bufferCanvases[o].setAttribute("data-id", "buffer" + o), e.data.bufferCanvases[o].style.zIndex = String(-o - 1), e.data.bufferCanvases[o].style.visibility = "hidden";
  e.pathsEnabled = !0;
  var u = ft(), f = function(z) {
    return {
      x: (z.x1 + z.x2) / 2,
      y: (z.y1 + z.y2) / 2
    };
  }, h = function(z) {
    return {
      x: -z.w / 2,
      y: -z.h / 2
    };
  }, c = function(z) {
    var K = z[0]._private, j = K.oldBackgroundTimestamp === K.backgroundTimestamp;
    return !j;
  }, v = function(z) {
    return z[0]._private.nodeKey;
  }, d = function(z) {
    return z[0]._private.labelStyleKey;
  }, g = function(z) {
    return z[0]._private.sourceLabelStyleKey;
  }, p = function(z) {
    return z[0]._private.targetLabelStyleKey;
  }, y = function(z, K, j, Q, ee) {
    return e.drawElement(z, K, j, !1, !1, ee);
  }, E = function(z, K, j, Q, ee) {
    return e.drawElementText(z, K, j, Q, "main", ee);
  }, m = function(z, K, j, Q, ee) {
    return e.drawElementText(z, K, j, Q, "source", ee);
  }, T = function(z, K, j, Q, ee) {
    return e.drawElementText(z, K, j, Q, "target", ee);
  }, C = function(z) {
    return z.boundingBox(), z[0]._private.bodyBounds;
  }, S = function(z) {
    return z.boundingBox(), z[0]._private.labelBounds.main || u;
  }, b = function(z) {
    return z.boundingBox(), z[0]._private.labelBounds.source || u;
  }, x = function(z) {
    return z.boundingBox(), z[0]._private.labelBounds.target || u;
  }, w = function(z, K) {
    return K;
  }, D = function(z) {
    return f(C(z));
  }, A = function(z, K, j) {
    var Q = z ? z + "-" : "";
    return {
      x: K.x + j.pstyle(Q + "text-margin-x").pfValue,
      y: K.y + j.pstyle(Q + "text-margin-y").pfValue
    };
  }, L = function(z, K, j) {
    var Q = z[0]._private.rscratch;
    return {
      x: Q[K],
      y: Q[j]
    };
  }, I = function(z) {
    return A("", L(z, "labelX", "labelY"), z);
  }, O = function(z) {
    return A("source", L(z, "sourceLabelX", "sourceLabelY"), z);
  }, P = function(z) {
    return A("target", L(z, "targetLabelX", "targetLabelY"), z);
  }, R = function(z) {
    return h(C(z));
  }, M = function(z) {
    return h(b(z));
  }, k = function(z) {
    return h(x(z));
  }, B = function(z) {
    var K = S(z), j = h(S(z));
    if (z.isNode()) {
      switch (z.pstyle("text-halign").value) {
        case "left":
          j.x = -K.w;
          break;
        case "right":
          j.x = 0;
          break;
      }
      switch (z.pstyle("text-valign").value) {
        case "top":
          j.y = -K.h;
          break;
        case "bottom":
          j.y = 0;
          break;
      }
    }
    return j;
  }, G = e.data.eleTxrCache = new Kr(e, {
    getKey: v,
    doesEleInvalidateKey: c,
    drawElement: y,
    getBoundingBox: C,
    getRotationPoint: D,
    getRotationOffset: R,
    allowEdgeTxrCaching: !1,
    allowParentTxrCaching: !1
  }), F = e.data.lblTxrCache = new Kr(e, {
    getKey: d,
    drawElement: E,
    getBoundingBox: S,
    getRotationPoint: I,
    getRotationOffset: B,
    isVisible: w
  }), $ = e.data.slbTxrCache = new Kr(e, {
    getKey: g,
    drawElement: m,
    getBoundingBox: b,
    getRotationPoint: O,
    getRotationOffset: M,
    isVisible: w
  }), U = e.data.tlbTxrCache = new Kr(e, {
    getKey: p,
    drawElement: T,
    getBoundingBox: x,
    getRotationPoint: P,
    getRotationOffset: k,
    isVisible: w
  }), _ = e.data.lyrTxrCache = new pl(e);
  e.onUpdateEleCalcs(function(z, K) {
    G.invalidateElements(K), F.invalidateElements(K), $.invalidateElements(K), U.invalidateElements(K), _.invalidateElements(K);
    for (var j = 0; j < K.length; j++) {
      var Q = K[j]._private;
      Q.oldBackgroundTimestamp = Q.backgroundTimestamp;
    }
  });
  var Y = function(z) {
    for (var K = 0; K < z.length; K++)
      _.enqueueElementRefinement(z[K].ele);
  };
  G.onDequeue(Y), F.onDequeue(Y), $.onDequeue(Y), U.onDequeue(Y);
}
Le.redrawHint = function(t, e) {
  var r = this;
  switch (t) {
    case "eles":
      r.data.canvasNeedsRedraw[Le.NODE] = e;
      break;
    case "drag":
      r.data.canvasNeedsRedraw[Le.DRAG] = e;
      break;
    case "select":
      r.data.canvasNeedsRedraw[Le.SELECT_BOX] = e;
      break;
  }
};
var dm = typeof Path2D != "undefined";
Le.path2dEnabled = function(t) {
  if (t === void 0)
    return this.pathsEnabled;
  this.pathsEnabled = !!t;
};
Le.usePaths = function() {
  return dm && this.pathsEnabled;
};
Le.setImgSmoothing = function(t, e) {
  t.imageSmoothingEnabled != null ? t.imageSmoothingEnabled = e : (t.webkitImageSmoothingEnabled = e, t.mozImageSmoothingEnabled = e, t.msImageSmoothingEnabled = e);
};
Le.getImgSmoothing = function(t) {
  return t.imageSmoothingEnabled != null ? t.imageSmoothingEnabled : t.webkitImageSmoothingEnabled || t.mozImageSmoothingEnabled || t.msImageSmoothingEnabled;
};
Le.makeOffscreenCanvas = function(t, e) {
  var r;
  return (typeof OffscreenCanvas == "undefined" ? "undefined" : Ue(OffscreenCanvas)) !== "undefined" ? r = new OffscreenCanvas(t, e) : (r = document.createElement("canvas"), r.width = t, r.height = e), r;
};
[yl, Nt, Bt, wi, hr, Gr, vt, Qt, ba, xl].forEach(function(t) {
  de(Le, t);
});
var gm = [{
  name: "null",
  impl: ol
}, {
  name: "base",
  impl: dl
}, {
  name: "canvas",
  impl: cm
}], pm = [{
  type: "layout",
  extensions: Cy
}, {
  type: "renderer",
  extensions: gm
}], Cl = {}, Dl = {};
function Sl(t, e, r) {
  var a = r, n = function(x) {
    Ne("Can not register `" + e + "` for `" + t + "` since `" + x + "` already exists in the prototype and can not be overridden");
  };
  if (t === "core") {
    if (oa.prototype[e])
      return n(e);
    oa.prototype[e] = r;
  } else if (t === "collection") {
    if (Ze.prototype[e])
      return n(e);
    Ze.prototype[e] = r;
  } else if (t === "layout") {
    for (var i = function(x) {
      this.options = x, r.call(this, x), De(this._private) || (this._private = {}), this._private.cy = x.cy, this._private.listeners = [], this.createEmitter();
    }, s = i.prototype = Object.create(r.prototype), o = [], l = 0; l < o.length; l++) {
      var u = o[l];
      s[u] = s[u] || function() {
        return this;
      };
    }
    s.start && !s.run ? s.run = function() {
      return this.start(), this;
    } : !s.start && s.run && (s.start = function() {
      return this.run(), this;
    });
    var f = r.prototype.stop;
    s.stop = function() {
      var b = this.options;
      if (b && b.animate) {
        var x = this.animations;
        if (x)
          for (var w = 0; w < x.length; w++)
            x[w].stop();
      }
      return f ? f.call(this) : this.emit("layoutstop"), this;
    }, s.destroy || (s.destroy = function() {
      return this;
    }), s.cy = function() {
      return this._private.cy;
    };
    var h = function(x) {
      return x._private.cy;
    }, c = {
      addEventFields: function(x, w) {
        w.layout = x, w.cy = h(x), w.target = x;
      },
      bubble: function() {
        return !0;
      },
      parent: function(x) {
        return h(x);
      }
    };
    de(s, {
      createEmitter: function() {
        return this._private.emitter = new cn(c, this), this;
      },
      emitter: function() {
        return this._private.emitter;
      },
      on: function(x, w) {
        return this.emitter().on(x, w), this;
      },
      one: function(x, w) {
        return this.emitter().one(x, w), this;
      },
      once: function(x, w) {
        return this.emitter().one(x, w), this;
      },
      removeListener: function(x, w) {
        return this.emitter().removeListener(x, w), this;
      },
      removeAllListeners: function() {
        return this.emitter().removeAllListeners(), this;
      },
      emit: function(x, w) {
        return this.emitter().emit(x, w), this;
      }
    }), Oe.eventAliasesOn(s), a = i;
  } else if (t === "renderer" && e !== "null" && e !== "base") {
    var v = Ll("renderer", "base"), d = v.prototype, g = r, p = r.prototype, y = function() {
      v.apply(this, arguments), g.apply(this, arguments);
    }, E = y.prototype;
    for (var m in d) {
      var T = d[m], C = p[m] != null;
      if (C)
        return n(m);
      E[m] = T;
    }
    for (var S in p)
      E[S] = p[S];
    d.clientFunctions.forEach(function(b) {
      E[b] = E[b] || function() {
        Ge("Renderer does not implement `renderer." + b + "()` on its prototype");
      };
    }), a = y;
  } else if (t === "__proto__" || t === "constructor" || t === "prototype")
    return Ge(t + " is an illegal type to be registered, possibly lead to prototype pollutions");
  return uo({
    map: Cl,
    keys: [t, e],
    value: a
  });
}
function Ll(t, e) {
  return fo({
    map: Cl,
    keys: [t, e]
  });
}
function ym(t, e, r, a, n) {
  return uo({
    map: Dl,
    keys: [t, e, r, a],
    value: n
  });
}
function mm(t, e, r, a) {
  return fo({
    map: Dl,
    keys: [t, e, r, a]
  });
}
var Kn = function() {
  if (arguments.length === 2)
    return Ll.apply(null, arguments);
  if (arguments.length === 3)
    return Sl.apply(null, arguments);
  if (arguments.length === 4)
    return mm.apply(null, arguments);
  if (arguments.length === 5)
    return ym.apply(null, arguments);
  Ge("Invalid extension access syntax");
};
oa.prototype.extension = Kn;
pm.forEach(function(t) {
  t.extensions.forEach(function(e) {
    Sl(t.type, e.name, e.impl);
  });
});
var Al = function t() {
  if (!(this instanceof t))
    return new t();
  this.length = 0;
}, or = Al.prototype;
or.instanceString = function() {
  return "stylesheet";
};
or.selector = function(t) {
  var e = this.length++;
  return this[e] = {
    selector: t,
    properties: []
  }, this;
};
or.css = function(t, e) {
  var r = this.length - 1;
  if (ve(t))
    this[r].properties.push({
      name: t,
      value: e
    });
  else if (De(t))
    for (var a = t, n = Object.keys(a), i = 0; i < n.length; i++) {
      var s = n[i], o = a[s];
      if (o != null) {
        var l = et.properties[s] || et.properties[ln(s)];
        if (l != null) {
          var u = l.name, f = o;
          this[r].properties.push({
            name: u,
            value: f
          });
        }
      }
    }
  return this;
};
or.style = or.css;
or.generateStyle = function(t) {
  var e = new et(t);
  return this.appendToStyle(e);
};
or.appendToStyle = function(t) {
  for (var e = 0; e < this.length; e++) {
    var r = this[e], a = r.selector, n = r.properties;
    t.selector(a);
    for (var i = 0; i < n.length; i++) {
      var s = n[i];
      t.css(s.name, s.value);
    }
  }
  return t;
};
var bm = "3.28.1", lr = function(e) {
  if (e === void 0 && (e = {}), De(e))
    return new oa(e);
  if (ve(e))
    return Kn.apply(Kn, arguments);
};
lr.use = function(t) {
  var e = Array.prototype.slice.call(arguments, 1);
  return e.unshift(lr), t.apply(null, e), this;
};
lr.warnings = function(t) {
  return yo(t);
};
lr.version = bm;
lr.stylesheet = lr.Stylesheet = Al;
var Em = lr;
const Ol = /* @__PURE__ */ Xs(Em);
var Nl = { exports: {} }, Bn = { exports: {} }, Fn = { exports: {} }, Hs;
function wm() {
  return Hs || (Hs = 1, function(t, e) {
    (function(a, n) {
      t.exports = n();
    })(Vt, function() {
      return (
        /******/
        function(r) {
          var a = {};
          function n(i) {
            if (a[i])
              return a[i].exports;
            var s = a[i] = {
              /******/
              i,
              /******/
              l: !1,
              /******/
              exports: {}
              /******/
            };
            return r[i].call(s.exports, s, s.exports, n), s.l = !0, s.exports;
          }
          return n.m = r, n.c = a, n.i = function(i) {
            return i;
          }, n.d = function(i, s, o) {
            n.o(i, s) || Object.defineProperty(i, s, {
              /******/
              configurable: !1,
              /******/
              enumerable: !0,
              /******/
              get: o
              /******/
            });
          }, n.n = function(i) {
            var s = i && i.__esModule ? (
              /******/
              function() {
                return i.default;
              }
            ) : (
              /******/
              function() {
                return i;
              }
            );
            return n.d(s, "a", s), s;
          }, n.o = function(i, s) {
            return Object.prototype.hasOwnProperty.call(i, s);
          }, n.p = "", n(n.s = 26);
        }([
          /* 0 */
          /***/
          function(r, a, n) {
            function i() {
            }
            i.QUALITY = 1, i.DEFAULT_CREATE_BENDS_AS_NEEDED = !1, i.DEFAULT_INCREMENTAL = !1, i.DEFAULT_ANIMATION_ON_LAYOUT = !0, i.DEFAULT_ANIMATION_DURING_LAYOUT = !1, i.DEFAULT_ANIMATION_PERIOD = 50, i.DEFAULT_UNIFORM_LEAF_NODE_SIZES = !1, i.DEFAULT_GRAPH_MARGIN = 15, i.NODE_DIMENSIONS_INCLUDE_LABELS = !1, i.SIMPLE_NODE_SIZE = 40, i.SIMPLE_NODE_HALF_SIZE = i.SIMPLE_NODE_SIZE / 2, i.EMPTY_COMPOUND_NODE_SIZE = 40, i.MIN_EDGE_LENGTH = 1, i.WORLD_BOUNDARY = 1e6, i.INITIAL_WORLD_BOUNDARY = i.WORLD_BOUNDARY / 1e3, i.WORLD_CENTER_X = 1200, i.WORLD_CENTER_Y = 900, r.exports = i;
          },
          /* 1 */
          /***/
          function(r, a, n) {
            var i = n(2), s = n(8), o = n(9);
            function l(f, h, c) {
              i.call(this, c), this.isOverlapingSourceAndTarget = !1, this.vGraphObject = c, this.bendpoints = [], this.source = f, this.target = h;
            }
            l.prototype = Object.create(i.prototype);
            for (var u in i)
              l[u] = i[u];
            l.prototype.getSource = function() {
              return this.source;
            }, l.prototype.getTarget = function() {
              return this.target;
            }, l.prototype.isInterGraph = function() {
              return this.isInterGraph;
            }, l.prototype.getLength = function() {
              return this.length;
            }, l.prototype.isOverlapingSourceAndTarget = function() {
              return this.isOverlapingSourceAndTarget;
            }, l.prototype.getBendpoints = function() {
              return this.bendpoints;
            }, l.prototype.getLca = function() {
              return this.lca;
            }, l.prototype.getSourceInLca = function() {
              return this.sourceInLca;
            }, l.prototype.getTargetInLca = function() {
              return this.targetInLca;
            }, l.prototype.getOtherEnd = function(f) {
              if (this.source === f)
                return this.target;
              if (this.target === f)
                return this.source;
              throw "Node is not incident with this edge";
            }, l.prototype.getOtherEndInGraph = function(f, h) {
              for (var c = this.getOtherEnd(f), v = h.getGraphManager().getRoot(); ; ) {
                if (c.getOwner() == h)
                  return c;
                if (c.getOwner() == v)
                  break;
                c = c.getOwner().getParent();
              }
              return null;
            }, l.prototype.updateLength = function() {
              var f = new Array(4);
              this.isOverlapingSourceAndTarget = s.getIntersection(this.target.getRect(), this.source.getRect(), f), this.isOverlapingSourceAndTarget || (this.lengthX = f[0] - f[2], this.lengthY = f[1] - f[3], Math.abs(this.lengthX) < 1 && (this.lengthX = o.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = o.sign(this.lengthY)), this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY));
            }, l.prototype.updateLengthSimple = function() {
              this.lengthX = this.target.getCenterX() - this.source.getCenterX(), this.lengthY = this.target.getCenterY() - this.source.getCenterY(), Math.abs(this.lengthX) < 1 && (this.lengthX = o.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = o.sign(this.lengthY)), this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
            }, r.exports = l;
          },
          /* 2 */
          /***/
          function(r, a, n) {
            function i(s) {
              this.vGraphObject = s;
            }
            r.exports = i;
          },
          /* 3 */
          /***/
          function(r, a, n) {
            var i = n(2), s = n(10), o = n(13), l = n(0), u = n(16), f = n(4);
            function h(v, d, g, p) {
              g == null && p == null && (p = d), i.call(this, p), v.graphManager != null && (v = v.graphManager), this.estimatedSize = s.MIN_VALUE, this.inclusionTreeDepth = s.MAX_VALUE, this.vGraphObject = p, this.edges = [], this.graphManager = v, g != null && d != null ? this.rect = new o(d.x, d.y, g.width, g.height) : this.rect = new o();
            }
            h.prototype = Object.create(i.prototype);
            for (var c in i)
              h[c] = i[c];
            h.prototype.getEdges = function() {
              return this.edges;
            }, h.prototype.getChild = function() {
              return this.child;
            }, h.prototype.getOwner = function() {
              return this.owner;
            }, h.prototype.getWidth = function() {
              return this.rect.width;
            }, h.prototype.setWidth = function(v) {
              this.rect.width = v;
            }, h.prototype.getHeight = function() {
              return this.rect.height;
            }, h.prototype.setHeight = function(v) {
              this.rect.height = v;
            }, h.prototype.getCenterX = function() {
              return this.rect.x + this.rect.width / 2;
            }, h.prototype.getCenterY = function() {
              return this.rect.y + this.rect.height / 2;
            }, h.prototype.getCenter = function() {
              return new f(this.rect.x + this.rect.width / 2, this.rect.y + this.rect.height / 2);
            }, h.prototype.getLocation = function() {
              return new f(this.rect.x, this.rect.y);
            }, h.prototype.getRect = function() {
              return this.rect;
            }, h.prototype.getDiagonal = function() {
              return Math.sqrt(this.rect.width * this.rect.width + this.rect.height * this.rect.height);
            }, h.prototype.getHalfTheDiagonal = function() {
              return Math.sqrt(this.rect.height * this.rect.height + this.rect.width * this.rect.width) / 2;
            }, h.prototype.setRect = function(v, d) {
              this.rect.x = v.x, this.rect.y = v.y, this.rect.width = d.width, this.rect.height = d.height;
            }, h.prototype.setCenter = function(v, d) {
              this.rect.x = v - this.rect.width / 2, this.rect.y = d - this.rect.height / 2;
            }, h.prototype.setLocation = function(v, d) {
              this.rect.x = v, this.rect.y = d;
            }, h.prototype.moveBy = function(v, d) {
              this.rect.x += v, this.rect.y += d;
            }, h.prototype.getEdgeListToNode = function(v) {
              var d = [], g = this;
              return g.edges.forEach(function(p) {
                if (p.target == v) {
                  if (p.source != g)
                    throw "Incorrect edge source!";
                  d.push(p);
                }
              }), d;
            }, h.prototype.getEdgesBetween = function(v) {
              var d = [], g = this;
              return g.edges.forEach(function(p) {
                if (!(p.source == g || p.target == g))
                  throw "Incorrect edge source and/or target";
                (p.target == v || p.source == v) && d.push(p);
              }), d;
            }, h.prototype.getNeighborsList = function() {
              var v = /* @__PURE__ */ new Set(), d = this;
              return d.edges.forEach(function(g) {
                if (g.source == d)
                  v.add(g.target);
                else {
                  if (g.target != d)
                    throw "Incorrect incidency!";
                  v.add(g.source);
                }
              }), v;
            }, h.prototype.withChildren = function() {
              var v = /* @__PURE__ */ new Set(), d, g;
              if (v.add(this), this.child != null)
                for (var p = this.child.getNodes(), y = 0; y < p.length; y++)
                  d = p[y], g = d.withChildren(), g.forEach(function(E) {
                    v.add(E);
                  });
              return v;
            }, h.prototype.getNoOfChildren = function() {
              var v = 0, d;
              if (this.child == null)
                v = 1;
              else
                for (var g = this.child.getNodes(), p = 0; p < g.length; p++)
                  d = g[p], v += d.getNoOfChildren();
              return v == 0 && (v = 1), v;
            }, h.prototype.getEstimatedSize = function() {
              if (this.estimatedSize == s.MIN_VALUE)
                throw "assert failed";
              return this.estimatedSize;
            }, h.prototype.calcEstimatedSize = function() {
              return this.child == null ? this.estimatedSize = (this.rect.width + this.rect.height) / 2 : (this.estimatedSize = this.child.calcEstimatedSize(), this.rect.width = this.estimatedSize, this.rect.height = this.estimatedSize, this.estimatedSize);
            }, h.prototype.scatter = function() {
              var v, d, g = -l.INITIAL_WORLD_BOUNDARY, p = l.INITIAL_WORLD_BOUNDARY;
              v = l.WORLD_CENTER_X + u.nextDouble() * (p - g) + g;
              var y = -l.INITIAL_WORLD_BOUNDARY, E = l.INITIAL_WORLD_BOUNDARY;
              d = l.WORLD_CENTER_Y + u.nextDouble() * (E - y) + y, this.rect.x = v, this.rect.y = d;
            }, h.prototype.updateBounds = function() {
              if (this.getChild() == null)
                throw "assert failed";
              if (this.getChild().getNodes().length != 0) {
                var v = this.getChild();
                if (v.updateBounds(!0), this.rect.x = v.getLeft(), this.rect.y = v.getTop(), this.setWidth(v.getRight() - v.getLeft()), this.setHeight(v.getBottom() - v.getTop()), l.NODE_DIMENSIONS_INCLUDE_LABELS) {
                  var d = v.getRight() - v.getLeft(), g = v.getBottom() - v.getTop();
                  this.labelWidth > d && (this.rect.x -= (this.labelWidth - d) / 2, this.setWidth(this.labelWidth)), this.labelHeight > g && (this.labelPos == "center" ? this.rect.y -= (this.labelHeight - g) / 2 : this.labelPos == "top" && (this.rect.y -= this.labelHeight - g), this.setHeight(this.labelHeight));
                }
              }
            }, h.prototype.getInclusionTreeDepth = function() {
              if (this.inclusionTreeDepth == s.MAX_VALUE)
                throw "assert failed";
              return this.inclusionTreeDepth;
            }, h.prototype.transform = function(v) {
              var d = this.rect.x;
              d > l.WORLD_BOUNDARY ? d = l.WORLD_BOUNDARY : d < -l.WORLD_BOUNDARY && (d = -l.WORLD_BOUNDARY);
              var g = this.rect.y;
              g > l.WORLD_BOUNDARY ? g = l.WORLD_BOUNDARY : g < -l.WORLD_BOUNDARY && (g = -l.WORLD_BOUNDARY);
              var p = new f(d, g), y = v.inverseTransformPoint(p);
              this.setLocation(y.x, y.y);
            }, h.prototype.getLeft = function() {
              return this.rect.x;
            }, h.prototype.getRight = function() {
              return this.rect.x + this.rect.width;
            }, h.prototype.getTop = function() {
              return this.rect.y;
            }, h.prototype.getBottom = function() {
              return this.rect.y + this.rect.height;
            }, h.prototype.getParent = function() {
              return this.owner == null ? null : this.owner.getParent();
            }, r.exports = h;
          },
          /* 4 */
          /***/
          function(r, a, n) {
            function i(s, o) {
              s == null && o == null ? (this.x = 0, this.y = 0) : (this.x = s, this.y = o);
            }
            i.prototype.getX = function() {
              return this.x;
            }, i.prototype.getY = function() {
              return this.y;
            }, i.prototype.setX = function(s) {
              this.x = s;
            }, i.prototype.setY = function(s) {
              this.y = s;
            }, i.prototype.getDifference = function(s) {
              return new DimensionD(this.x - s.x, this.y - s.y);
            }, i.prototype.getCopy = function() {
              return new i(this.x, this.y);
            }, i.prototype.translate = function(s) {
              return this.x += s.width, this.y += s.height, this;
            }, r.exports = i;
          },
          /* 5 */
          /***/
          function(r, a, n) {
            var i = n(2), s = n(10), o = n(0), l = n(6), u = n(3), f = n(1), h = n(13), c = n(12), v = n(11);
            function d(p, y, E) {
              i.call(this, E), this.estimatedSize = s.MIN_VALUE, this.margin = o.DEFAULT_GRAPH_MARGIN, this.edges = [], this.nodes = [], this.isConnected = !1, this.parent = p, y != null && y instanceof l ? this.graphManager = y : y != null && y instanceof Layout && (this.graphManager = y.graphManager);
            }
            d.prototype = Object.create(i.prototype);
            for (var g in i)
              d[g] = i[g];
            d.prototype.getNodes = function() {
              return this.nodes;
            }, d.prototype.getEdges = function() {
              return this.edges;
            }, d.prototype.getGraphManager = function() {
              return this.graphManager;
            }, d.prototype.getParent = function() {
              return this.parent;
            }, d.prototype.getLeft = function() {
              return this.left;
            }, d.prototype.getRight = function() {
              return this.right;
            }, d.prototype.getTop = function() {
              return this.top;
            }, d.prototype.getBottom = function() {
              return this.bottom;
            }, d.prototype.isConnected = function() {
              return this.isConnected;
            }, d.prototype.add = function(p, y, E) {
              if (y == null && E == null) {
                var m = p;
                if (this.graphManager == null)
                  throw "Graph has no graph mgr!";
                if (this.getNodes().indexOf(m) > -1)
                  throw "Node already in graph!";
                return m.owner = this, this.getNodes().push(m), m;
              } else {
                var T = p;
                if (!(this.getNodes().indexOf(y) > -1 && this.getNodes().indexOf(E) > -1))
                  throw "Source or target not in graph!";
                if (!(y.owner == E.owner && y.owner == this))
                  throw "Both owners must be this graph!";
                return y.owner != E.owner ? null : (T.source = y, T.target = E, T.isInterGraph = !1, this.getEdges().push(T), y.edges.push(T), E != y && E.edges.push(T), T);
              }
            }, d.prototype.remove = function(p) {
              var y = p;
              if (p instanceof u) {
                if (y == null)
                  throw "Node is null!";
                if (!(y.owner != null && y.owner == this))
                  throw "Owner graph is invalid!";
                if (this.graphManager == null)
                  throw "Owner graph manager is invalid!";
                for (var E = y.edges.slice(), m, T = E.length, C = 0; C < T; C++)
                  m = E[C], m.isInterGraph ? this.graphManager.remove(m) : m.source.owner.remove(m);
                var S = this.nodes.indexOf(y);
                if (S == -1)
                  throw "Node not in owner node list!";
                this.nodes.splice(S, 1);
              } else if (p instanceof f) {
                var m = p;
                if (m == null)
                  throw "Edge is null!";
                if (!(m.source != null && m.target != null))
                  throw "Source and/or target is null!";
                if (!(m.source.owner != null && m.target.owner != null && m.source.owner == this && m.target.owner == this))
                  throw "Source and/or target owner is invalid!";
                var b = m.source.edges.indexOf(m), x = m.target.edges.indexOf(m);
                if (!(b > -1 && x > -1))
                  throw "Source and/or target doesn't know this edge!";
                m.source.edges.splice(b, 1), m.target != m.source && m.target.edges.splice(x, 1);
                var S = m.source.owner.getEdges().indexOf(m);
                if (S == -1)
                  throw "Not in owner's edge list!";
                m.source.owner.getEdges().splice(S, 1);
              }
            }, d.prototype.updateLeftTop = function() {
              for (var p = s.MAX_VALUE, y = s.MAX_VALUE, E, m, T, C = this.getNodes(), S = C.length, b = 0; b < S; b++) {
                var x = C[b];
                E = x.getTop(), m = x.getLeft(), p > E && (p = E), y > m && (y = m);
              }
              return p == s.MAX_VALUE ? null : (C[0].getParent().paddingLeft != null ? T = C[0].getParent().paddingLeft : T = this.margin, this.left = y - T, this.top = p - T, new c(this.left, this.top));
            }, d.prototype.updateBounds = function(p) {
              for (var y = s.MAX_VALUE, E = -s.MAX_VALUE, m = s.MAX_VALUE, T = -s.MAX_VALUE, C, S, b, x, w, D = this.nodes, A = D.length, L = 0; L < A; L++) {
                var I = D[L];
                p && I.child != null && I.updateBounds(), C = I.getLeft(), S = I.getRight(), b = I.getTop(), x = I.getBottom(), y > C && (y = C), E < S && (E = S), m > b && (m = b), T < x && (T = x);
              }
              var O = new h(y, m, E - y, T - m);
              y == s.MAX_VALUE && (this.left = this.parent.getLeft(), this.right = this.parent.getRight(), this.top = this.parent.getTop(), this.bottom = this.parent.getBottom()), D[0].getParent().paddingLeft != null ? w = D[0].getParent().paddingLeft : w = this.margin, this.left = O.x - w, this.right = O.x + O.width + w, this.top = O.y - w, this.bottom = O.y + O.height + w;
            }, d.calculateBounds = function(p) {
              for (var y = s.MAX_VALUE, E = -s.MAX_VALUE, m = s.MAX_VALUE, T = -s.MAX_VALUE, C, S, b, x, w = p.length, D = 0; D < w; D++) {
                var A = p[D];
                C = A.getLeft(), S = A.getRight(), b = A.getTop(), x = A.getBottom(), y > C && (y = C), E < S && (E = S), m > b && (m = b), T < x && (T = x);
              }
              var L = new h(y, m, E - y, T - m);
              return L;
            }, d.prototype.getInclusionTreeDepth = function() {
              return this == this.graphManager.getRoot() ? 1 : this.parent.getInclusionTreeDepth();
            }, d.prototype.getEstimatedSize = function() {
              if (this.estimatedSize == s.MIN_VALUE)
                throw "assert failed";
              return this.estimatedSize;
            }, d.prototype.calcEstimatedSize = function() {
              for (var p = 0, y = this.nodes, E = y.length, m = 0; m < E; m++) {
                var T = y[m];
                p += T.calcEstimatedSize();
              }
              return p == 0 ? this.estimatedSize = o.EMPTY_COMPOUND_NODE_SIZE : this.estimatedSize = p / Math.sqrt(this.nodes.length), this.estimatedSize;
            }, d.prototype.updateConnected = function() {
              var p = this;
              if (this.nodes.length == 0) {
                this.isConnected = !0;
                return;
              }
              var y = new v(), E = /* @__PURE__ */ new Set(), m = this.nodes[0], T, C, S = m.withChildren();
              for (S.forEach(function(L) {
                y.push(L), E.add(L);
              }); y.length !== 0; ) {
                m = y.shift(), T = m.getEdges();
                for (var b = T.length, x = 0; x < b; x++) {
                  var w = T[x];
                  if (C = w.getOtherEndInGraph(m, this), C != null && !E.has(C)) {
                    var D = C.withChildren();
                    D.forEach(function(L) {
                      y.push(L), E.add(L);
                    });
                  }
                }
              }
              if (this.isConnected = !1, E.size >= this.nodes.length) {
                var A = 0;
                E.forEach(function(L) {
                  L.owner == p && A++;
                }), A == this.nodes.length && (this.isConnected = !0);
              }
            }, r.exports = d;
          },
          /* 6 */
          /***/
          function(r, a, n) {
            var i, s = n(1);
            function o(l) {
              i = n(5), this.layout = l, this.graphs = [], this.edges = [];
            }
            o.prototype.addRoot = function() {
              var l = this.layout.newGraph(), u = this.layout.newNode(null), f = this.add(l, u);
              return this.setRootGraph(f), this.rootGraph;
            }, o.prototype.add = function(l, u, f, h, c) {
              if (f == null && h == null && c == null) {
                if (l == null)
                  throw "Graph is null!";
                if (u == null)
                  throw "Parent node is null!";
                if (this.graphs.indexOf(l) > -1)
                  throw "Graph already in this graph mgr!";
                if (this.graphs.push(l), l.parent != null)
                  throw "Already has a parent!";
                if (u.child != null)
                  throw "Already has a child!";
                return l.parent = u, u.child = l, l;
              } else {
                c = f, h = u, f = l;
                var v = h.getOwner(), d = c.getOwner();
                if (!(v != null && v.getGraphManager() == this))
                  throw "Source not in this graph mgr!";
                if (!(d != null && d.getGraphManager() == this))
                  throw "Target not in this graph mgr!";
                if (v == d)
                  return f.isInterGraph = !1, v.add(f, h, c);
                if (f.isInterGraph = !0, f.source = h, f.target = c, this.edges.indexOf(f) > -1)
                  throw "Edge already in inter-graph edge list!";
                if (this.edges.push(f), !(f.source != null && f.target != null))
                  throw "Edge source and/or target is null!";
                if (!(f.source.edges.indexOf(f) == -1 && f.target.edges.indexOf(f) == -1))
                  throw "Edge already in source and/or target incidency list!";
                return f.source.edges.push(f), f.target.edges.push(f), f;
              }
            }, o.prototype.remove = function(l) {
              if (l instanceof i) {
                var u = l;
                if (u.getGraphManager() != this)
                  throw "Graph not in this graph mgr";
                if (!(u == this.rootGraph || u.parent != null && u.parent.graphManager == this))
                  throw "Invalid parent node!";
                var f = [];
                f = f.concat(u.getEdges());
                for (var h, c = f.length, v = 0; v < c; v++)
                  h = f[v], u.remove(h);
                var d = [];
                d = d.concat(u.getNodes());
                var g;
                c = d.length;
                for (var v = 0; v < c; v++)
                  g = d[v], u.remove(g);
                u == this.rootGraph && this.setRootGraph(null);
                var p = this.graphs.indexOf(u);
                this.graphs.splice(p, 1), u.parent = null;
              } else if (l instanceof s) {
                if (h = l, h == null)
                  throw "Edge is null!";
                if (!h.isInterGraph)
                  throw "Not an inter-graph edge!";
                if (!(h.source != null && h.target != null))
                  throw "Source and/or target is null!";
                if (!(h.source.edges.indexOf(h) != -1 && h.target.edges.indexOf(h) != -1))
                  throw "Source and/or target doesn't know this edge!";
                var p = h.source.edges.indexOf(h);
                if (h.source.edges.splice(p, 1), p = h.target.edges.indexOf(h), h.target.edges.splice(p, 1), !(h.source.owner != null && h.source.owner.getGraphManager() != null))
                  throw "Edge owner graph or owner graph manager is null!";
                if (h.source.owner.getGraphManager().edges.indexOf(h) == -1)
                  throw "Not in owner graph manager's edge list!";
                var p = h.source.owner.getGraphManager().edges.indexOf(h);
                h.source.owner.getGraphManager().edges.splice(p, 1);
              }
            }, o.prototype.updateBounds = function() {
              this.rootGraph.updateBounds(!0);
            }, o.prototype.getGraphs = function() {
              return this.graphs;
            }, o.prototype.getAllNodes = function() {
              if (this.allNodes == null) {
                for (var l = [], u = this.getGraphs(), f = u.length, h = 0; h < f; h++)
                  l = l.concat(u[h].getNodes());
                this.allNodes = l;
              }
              return this.allNodes;
            }, o.prototype.resetAllNodes = function() {
              this.allNodes = null;
            }, o.prototype.resetAllEdges = function() {
              this.allEdges = null;
            }, o.prototype.resetAllNodesToApplyGravitation = function() {
              this.allNodesToApplyGravitation = null;
            }, o.prototype.getAllEdges = function() {
              if (this.allEdges == null) {
                var l = [], u = this.getGraphs();
                u.length;
                for (var f = 0; f < u.length; f++)
                  l = l.concat(u[f].getEdges());
                l = l.concat(this.edges), this.allEdges = l;
              }
              return this.allEdges;
            }, o.prototype.getAllNodesToApplyGravitation = function() {
              return this.allNodesToApplyGravitation;
            }, o.prototype.setAllNodesToApplyGravitation = function(l) {
              if (this.allNodesToApplyGravitation != null)
                throw "assert failed";
              this.allNodesToApplyGravitation = l;
            }, o.prototype.getRoot = function() {
              return this.rootGraph;
            }, o.prototype.setRootGraph = function(l) {
              if (l.getGraphManager() != this)
                throw "Root not in this graph mgr!";
              this.rootGraph = l, l.parent == null && (l.parent = this.layout.newNode("Root node"));
            }, o.prototype.getLayout = function() {
              return this.layout;
            }, o.prototype.isOneAncestorOfOther = function(l, u) {
              if (!(l != null && u != null))
                throw "assert failed";
              if (l == u)
                return !0;
              var f = l.getOwner(), h;
              do {
                if (h = f.getParent(), h == null)
                  break;
                if (h == u)
                  return !0;
                if (f = h.getOwner(), f == null)
                  break;
              } while (!0);
              f = u.getOwner();
              do {
                if (h = f.getParent(), h == null)
                  break;
                if (h == l)
                  return !0;
                if (f = h.getOwner(), f == null)
                  break;
              } while (!0);
              return !1;
            }, o.prototype.calcLowestCommonAncestors = function() {
              for (var l, u, f, h, c, v = this.getAllEdges(), d = v.length, g = 0; g < d; g++) {
                if (l = v[g], u = l.source, f = l.target, l.lca = null, l.sourceInLca = u, l.targetInLca = f, u == f) {
                  l.lca = u.getOwner();
                  continue;
                }
                for (h = u.getOwner(); l.lca == null; ) {
                  for (l.targetInLca = f, c = f.getOwner(); l.lca == null; ) {
                    if (c == h) {
                      l.lca = c;
                      break;
                    }
                    if (c == this.rootGraph)
                      break;
                    if (l.lca != null)
                      throw "assert failed";
                    l.targetInLca = c.getParent(), c = l.targetInLca.getOwner();
                  }
                  if (h == this.rootGraph)
                    break;
                  l.lca == null && (l.sourceInLca = h.getParent(), h = l.sourceInLca.getOwner());
                }
                if (l.lca == null)
                  throw "assert failed";
              }
            }, o.prototype.calcLowestCommonAncestor = function(l, u) {
              if (l == u)
                return l.getOwner();
              var f = l.getOwner();
              do {
                if (f == null)
                  break;
                var h = u.getOwner();
                do {
                  if (h == null)
                    break;
                  if (h == f)
                    return h;
                  h = h.getParent().getOwner();
                } while (!0);
                f = f.getParent().getOwner();
              } while (!0);
              return f;
            }, o.prototype.calcInclusionTreeDepths = function(l, u) {
              l == null && u == null && (l = this.rootGraph, u = 1);
              for (var f, h = l.getNodes(), c = h.length, v = 0; v < c; v++)
                f = h[v], f.inclusionTreeDepth = u, f.child != null && this.calcInclusionTreeDepths(f.child, u + 1);
            }, o.prototype.includesInvalidEdge = function() {
              for (var l, u = this.edges.length, f = 0; f < u; f++)
                if (l = this.edges[f], this.isOneAncestorOfOther(l.source, l.target))
                  return !0;
              return !1;
            }, r.exports = o;
          },
          /* 7 */
          /***/
          function(r, a, n) {
            var i = n(0);
            function s() {
            }
            for (var o in i)
              s[o] = i[o];
            s.MAX_ITERATIONS = 2500, s.DEFAULT_EDGE_LENGTH = 50, s.DEFAULT_SPRING_STRENGTH = 0.45, s.DEFAULT_REPULSION_STRENGTH = 4500, s.DEFAULT_GRAVITY_STRENGTH = 0.4, s.DEFAULT_COMPOUND_GRAVITY_STRENGTH = 1, s.DEFAULT_GRAVITY_RANGE_FACTOR = 3.8, s.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = 1.5, s.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION = !0, s.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION = !0, s.DEFAULT_COOLING_FACTOR_INCREMENTAL = 0.3, s.COOLING_ADAPTATION_FACTOR = 0.33, s.ADAPTATION_LOWER_NODE_LIMIT = 1e3, s.ADAPTATION_UPPER_NODE_LIMIT = 5e3, s.MAX_NODE_DISPLACEMENT_INCREMENTAL = 100, s.MAX_NODE_DISPLACEMENT = s.MAX_NODE_DISPLACEMENT_INCREMENTAL * 3, s.MIN_REPULSION_DIST = s.DEFAULT_EDGE_LENGTH / 10, s.CONVERGENCE_CHECK_PERIOD = 100, s.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = 0.1, s.MIN_EDGE_LENGTH = 1, s.GRID_CALCULATION_CHECK_PERIOD = 10, r.exports = s;
          },
          /* 8 */
          /***/
          function(r, a, n) {
            var i = n(12);
            function s() {
            }
            s.calcSeparationAmount = function(o, l, u, f) {
              if (!o.intersects(l))
                throw "assert failed";
              var h = new Array(2);
              this.decideDirectionsForOverlappingNodes(o, l, h), u[0] = Math.min(o.getRight(), l.getRight()) - Math.max(o.x, l.x), u[1] = Math.min(o.getBottom(), l.getBottom()) - Math.max(o.y, l.y), o.getX() <= l.getX() && o.getRight() >= l.getRight() ? u[0] += Math.min(l.getX() - o.getX(), o.getRight() - l.getRight()) : l.getX() <= o.getX() && l.getRight() >= o.getRight() && (u[0] += Math.min(o.getX() - l.getX(), l.getRight() - o.getRight())), o.getY() <= l.getY() && o.getBottom() >= l.getBottom() ? u[1] += Math.min(l.getY() - o.getY(), o.getBottom() - l.getBottom()) : l.getY() <= o.getY() && l.getBottom() >= o.getBottom() && (u[1] += Math.min(o.getY() - l.getY(), l.getBottom() - o.getBottom()));
              var c = Math.abs((l.getCenterY() - o.getCenterY()) / (l.getCenterX() - o.getCenterX()));
              l.getCenterY() === o.getCenterY() && l.getCenterX() === o.getCenterX() && (c = 1);
              var v = c * u[0], d = u[1] / c;
              u[0] < d ? d = u[0] : v = u[1], u[0] = -1 * h[0] * (d / 2 + f), u[1] = -1 * h[1] * (v / 2 + f);
            }, s.decideDirectionsForOverlappingNodes = function(o, l, u) {
              o.getCenterX() < l.getCenterX() ? u[0] = -1 : u[0] = 1, o.getCenterY() < l.getCenterY() ? u[1] = -1 : u[1] = 1;
            }, s.getIntersection2 = function(o, l, u) {
              var f = o.getCenterX(), h = o.getCenterY(), c = l.getCenterX(), v = l.getCenterY();
              if (o.intersects(l))
                return u[0] = f, u[1] = h, u[2] = c, u[3] = v, !0;
              var d = o.getX(), g = o.getY(), p = o.getRight(), y = o.getX(), E = o.getBottom(), m = o.getRight(), T = o.getWidthHalf(), C = o.getHeightHalf(), S = l.getX(), b = l.getY(), x = l.getRight(), w = l.getX(), D = l.getBottom(), A = l.getRight(), L = l.getWidthHalf(), I = l.getHeightHalf(), O = !1, P = !1;
              if (f === c) {
                if (h > v)
                  return u[0] = f, u[1] = g, u[2] = c, u[3] = D, !1;
                if (h < v)
                  return u[0] = f, u[1] = E, u[2] = c, u[3] = b, !1;
              } else if (h === v) {
                if (f > c)
                  return u[0] = d, u[1] = h, u[2] = x, u[3] = v, !1;
                if (f < c)
                  return u[0] = p, u[1] = h, u[2] = S, u[3] = v, !1;
              } else {
                var R = o.height / o.width, M = l.height / l.width, k = (v - h) / (c - f), B = void 0, G = void 0, F = void 0, $ = void 0, U = void 0, _ = void 0;
                if (-R === k ? f > c ? (u[0] = y, u[1] = E, O = !0) : (u[0] = p, u[1] = g, O = !0) : R === k && (f > c ? (u[0] = d, u[1] = g, O = !0) : (u[0] = m, u[1] = E, O = !0)), -M === k ? c > f ? (u[2] = w, u[3] = D, P = !0) : (u[2] = x, u[3] = b, P = !0) : M === k && (c > f ? (u[2] = S, u[3] = b, P = !0) : (u[2] = A, u[3] = D, P = !0)), O && P)
                  return !1;
                if (f > c ? h > v ? (B = this.getCardinalDirection(R, k, 4), G = this.getCardinalDirection(M, k, 2)) : (B = this.getCardinalDirection(-R, k, 3), G = this.getCardinalDirection(-M, k, 1)) : h > v ? (B = this.getCardinalDirection(-R, k, 1), G = this.getCardinalDirection(-M, k, 3)) : (B = this.getCardinalDirection(R, k, 2), G = this.getCardinalDirection(M, k, 4)), !O)
                  switch (B) {
                    case 1:
                      $ = g, F = f + -C / k, u[0] = F, u[1] = $;
                      break;
                    case 2:
                      F = m, $ = h + T * k, u[0] = F, u[1] = $;
                      break;
                    case 3:
                      $ = E, F = f + C / k, u[0] = F, u[1] = $;
                      break;
                    case 4:
                      F = y, $ = h + -T * k, u[0] = F, u[1] = $;
                      break;
                  }
                if (!P)
                  switch (G) {
                    case 1:
                      _ = b, U = c + -I / k, u[2] = U, u[3] = _;
                      break;
                    case 2:
                      U = A, _ = v + L * k, u[2] = U, u[3] = _;
                      break;
                    case 3:
                      _ = D, U = c + I / k, u[2] = U, u[3] = _;
                      break;
                    case 4:
                      U = w, _ = v + -L * k, u[2] = U, u[3] = _;
                      break;
                  }
              }
              return !1;
            }, s.getCardinalDirection = function(o, l, u) {
              return o > l ? u : 1 + u % 4;
            }, s.getIntersection = function(o, l, u, f) {
              if (f == null)
                return this.getIntersection2(o, l, u);
              var h = o.x, c = o.y, v = l.x, d = l.y, g = u.x, p = u.y, y = f.x, E = f.y, m = void 0, T = void 0, C = void 0, S = void 0, b = void 0, x = void 0, w = void 0, D = void 0, A = void 0;
              return C = d - c, b = h - v, w = v * c - h * d, S = E - p, x = g - y, D = y * p - g * E, A = C * x - S * b, A === 0 ? null : (m = (b * D - x * w) / A, T = (S * w - C * D) / A, new i(m, T));
            }, s.angleOfVector = function(o, l, u, f) {
              var h = void 0;
              return o !== u ? (h = Math.atan((f - l) / (u - o)), u < o ? h += Math.PI : f < l && (h += this.TWO_PI)) : f < l ? h = this.ONE_AND_HALF_PI : h = this.HALF_PI, h;
            }, s.doIntersect = function(o, l, u, f) {
              var h = o.x, c = o.y, v = l.x, d = l.y, g = u.x, p = u.y, y = f.x, E = f.y, m = (v - h) * (E - p) - (y - g) * (d - c);
              if (m === 0)
                return !1;
              var T = ((E - p) * (y - h) + (g - y) * (E - c)) / m, C = ((c - d) * (y - h) + (v - h) * (E - c)) / m;
              return 0 < T && T < 1 && 0 < C && C < 1;
            }, s.HALF_PI = 0.5 * Math.PI, s.ONE_AND_HALF_PI = 1.5 * Math.PI, s.TWO_PI = 2 * Math.PI, s.THREE_PI = 3 * Math.PI, r.exports = s;
          },
          /* 9 */
          /***/
          function(r, a, n) {
            function i() {
            }
            i.sign = function(s) {
              return s > 0 ? 1 : s < 0 ? -1 : 0;
            }, i.floor = function(s) {
              return s < 0 ? Math.ceil(s) : Math.floor(s);
            }, i.ceil = function(s) {
              return s < 0 ? Math.floor(s) : Math.ceil(s);
            }, r.exports = i;
          },
          /* 10 */
          /***/
          function(r, a, n) {
            function i() {
            }
            i.MAX_VALUE = 2147483647, i.MIN_VALUE = -2147483648, r.exports = i;
          },
          /* 11 */
          /***/
          function(r, a, n) {
            var i = function() {
              function h(c, v) {
                for (var d = 0; d < v.length; d++) {
                  var g = v[d];
                  g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(c, g.key, g);
                }
              }
              return function(c, v, d) {
                return v && h(c.prototype, v), d && h(c, d), c;
              };
            }();
            function s(h, c) {
              if (!(h instanceof c))
                throw new TypeError("Cannot call a class as a function");
            }
            var o = function(c) {
              return { value: c, next: null, prev: null };
            }, l = function(c, v, d, g) {
              return c !== null ? c.next = v : g.head = v, d !== null ? d.prev = v : g.tail = v, v.prev = c, v.next = d, g.length++, v;
            }, u = function(c, v) {
              var d = c.prev, g = c.next;
              return d !== null ? d.next = g : v.head = g, g !== null ? g.prev = d : v.tail = d, c.prev = c.next = null, v.length--, c;
            }, f = function() {
              function h(c) {
                var v = this;
                s(this, h), this.length = 0, this.head = null, this.tail = null, c != null && c.forEach(function(d) {
                  return v.push(d);
                });
              }
              return i(h, [{
                key: "size",
                value: function() {
                  return this.length;
                }
              }, {
                key: "insertBefore",
                value: function(v, d) {
                  return l(d.prev, o(v), d, this);
                }
              }, {
                key: "insertAfter",
                value: function(v, d) {
                  return l(d, o(v), d.next, this);
                }
              }, {
                key: "insertNodeBefore",
                value: function(v, d) {
                  return l(d.prev, v, d, this);
                }
              }, {
                key: "insertNodeAfter",
                value: function(v, d) {
                  return l(d, v, d.next, this);
                }
              }, {
                key: "push",
                value: function(v) {
                  return l(this.tail, o(v), null, this);
                }
              }, {
                key: "unshift",
                value: function(v) {
                  return l(null, o(v), this.head, this);
                }
              }, {
                key: "remove",
                value: function(v) {
                  return u(v, this);
                }
              }, {
                key: "pop",
                value: function() {
                  return u(this.tail, this).value;
                }
              }, {
                key: "popNode",
                value: function() {
                  return u(this.tail, this);
                }
              }, {
                key: "shift",
                value: function() {
                  return u(this.head, this).value;
                }
              }, {
                key: "shiftNode",
                value: function() {
                  return u(this.head, this);
                }
              }, {
                key: "get_object_at",
                value: function(v) {
                  if (v <= this.length()) {
                    for (var d = 1, g = this.head; d < v; )
                      g = g.next, d++;
                    return g.value;
                  }
                }
              }, {
                key: "set_object_at",
                value: function(v, d) {
                  if (v <= this.length()) {
                    for (var g = 1, p = this.head; g < v; )
                      p = p.next, g++;
                    p.value = d;
                  }
                }
              }]), h;
            }();
            r.exports = f;
          },
          /* 12 */
          /***/
          function(r, a, n) {
            function i(s, o, l) {
              this.x = null, this.y = null, s == null && o == null && l == null ? (this.x = 0, this.y = 0) : typeof s == "number" && typeof o == "number" && l == null ? (this.x = s, this.y = o) : s.constructor.name == "Point" && o == null && l == null && (l = s, this.x = l.x, this.y = l.y);
            }
            i.prototype.getX = function() {
              return this.x;
            }, i.prototype.getY = function() {
              return this.y;
            }, i.prototype.getLocation = function() {
              return new i(this.x, this.y);
            }, i.prototype.setLocation = function(s, o, l) {
              s.constructor.name == "Point" && o == null && l == null ? (l = s, this.setLocation(l.x, l.y)) : typeof s == "number" && typeof o == "number" && l == null && (parseInt(s) == s && parseInt(o) == o ? this.move(s, o) : (this.x = Math.floor(s + 0.5), this.y = Math.floor(o + 0.5)));
            }, i.prototype.move = function(s, o) {
              this.x = s, this.y = o;
            }, i.prototype.translate = function(s, o) {
              this.x += s, this.y += o;
            }, i.prototype.equals = function(s) {
              if (s.constructor.name == "Point") {
                var o = s;
                return this.x == o.x && this.y == o.y;
              }
              return this == s;
            }, i.prototype.toString = function() {
              return new i().constructor.name + "[x=" + this.x + ",y=" + this.y + "]";
            }, r.exports = i;
          },
          /* 13 */
          /***/
          function(r, a, n) {
            function i(s, o, l, u) {
              this.x = 0, this.y = 0, this.width = 0, this.height = 0, s != null && o != null && l != null && u != null && (this.x = s, this.y = o, this.width = l, this.height = u);
            }
            i.prototype.getX = function() {
              return this.x;
            }, i.prototype.setX = function(s) {
              this.x = s;
            }, i.prototype.getY = function() {
              return this.y;
            }, i.prototype.setY = function(s) {
              this.y = s;
            }, i.prototype.getWidth = function() {
              return this.width;
            }, i.prototype.setWidth = function(s) {
              this.width = s;
            }, i.prototype.getHeight = function() {
              return this.height;
            }, i.prototype.setHeight = function(s) {
              this.height = s;
            }, i.prototype.getRight = function() {
              return this.x + this.width;
            }, i.prototype.getBottom = function() {
              return this.y + this.height;
            }, i.prototype.intersects = function(s) {
              return !(this.getRight() < s.x || this.getBottom() < s.y || s.getRight() < this.x || s.getBottom() < this.y);
            }, i.prototype.getCenterX = function() {
              return this.x + this.width / 2;
            }, i.prototype.getMinX = function() {
              return this.getX();
            }, i.prototype.getMaxX = function() {
              return this.getX() + this.width;
            }, i.prototype.getCenterY = function() {
              return this.y + this.height / 2;
            }, i.prototype.getMinY = function() {
              return this.getY();
            }, i.prototype.getMaxY = function() {
              return this.getY() + this.height;
            }, i.prototype.getWidthHalf = function() {
              return this.width / 2;
            }, i.prototype.getHeightHalf = function() {
              return this.height / 2;
            }, r.exports = i;
          },
          /* 14 */
          /***/
          function(r, a, n) {
            var i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
              return typeof o;
            } : function(o) {
              return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
            };
            function s() {
            }
            s.lastID = 0, s.createID = function(o) {
              return s.isPrimitive(o) ? o : (o.uniqueID != null || (o.uniqueID = s.getString(), s.lastID++), o.uniqueID);
            }, s.getString = function(o) {
              return o == null && (o = s.lastID), "Object#" + o;
            }, s.isPrimitive = function(o) {
              var l = typeof o == "undefined" ? "undefined" : i(o);
              return o == null || l != "object" && l != "function";
            }, r.exports = s;
          },
          /* 15 */
          /***/
          function(r, a, n) {
            function i(g) {
              if (Array.isArray(g)) {
                for (var p = 0, y = Array(g.length); p < g.length; p++)
                  y[p] = g[p];
                return y;
              } else
                return Array.from(g);
            }
            var s = n(0), o = n(6), l = n(3), u = n(1), f = n(5), h = n(4), c = n(17), v = n(27);
            function d(g) {
              v.call(this), this.layoutQuality = s.QUALITY, this.createBendsAsNeeded = s.DEFAULT_CREATE_BENDS_AS_NEEDED, this.incremental = s.DEFAULT_INCREMENTAL, this.animationOnLayout = s.DEFAULT_ANIMATION_ON_LAYOUT, this.animationDuringLayout = s.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = s.DEFAULT_ANIMATION_PERIOD, this.uniformLeafNodeSizes = s.DEFAULT_UNIFORM_LEAF_NODE_SIZES, this.edgeToDummyNodes = /* @__PURE__ */ new Map(), this.graphManager = new o(this), this.isLayoutFinished = !1, this.isSubLayout = !1, this.isRemoteUse = !1, g != null && (this.isRemoteUse = g);
            }
            d.RANDOM_SEED = 1, d.prototype = Object.create(v.prototype), d.prototype.getGraphManager = function() {
              return this.graphManager;
            }, d.prototype.getAllNodes = function() {
              return this.graphManager.getAllNodes();
            }, d.prototype.getAllEdges = function() {
              return this.graphManager.getAllEdges();
            }, d.prototype.getAllNodesToApplyGravitation = function() {
              return this.graphManager.getAllNodesToApplyGravitation();
            }, d.prototype.newGraphManager = function() {
              var g = new o(this);
              return this.graphManager = g, g;
            }, d.prototype.newGraph = function(g) {
              return new f(null, this.graphManager, g);
            }, d.prototype.newNode = function(g) {
              return new l(this.graphManager, g);
            }, d.prototype.newEdge = function(g) {
              return new u(null, null, g);
            }, d.prototype.checkLayoutSuccess = function() {
              return this.graphManager.getRoot() == null || this.graphManager.getRoot().getNodes().length == 0 || this.graphManager.includesInvalidEdge();
            }, d.prototype.runLayout = function() {
              this.isLayoutFinished = !1, this.tilingPreLayout && this.tilingPreLayout(), this.initParameters();
              var g;
              return this.checkLayoutSuccess() ? g = !1 : g = this.layout(), s.ANIMATE === "during" ? !1 : (g && (this.isSubLayout || this.doPostLayout()), this.tilingPostLayout && this.tilingPostLayout(), this.isLayoutFinished = !0, g);
            }, d.prototype.doPostLayout = function() {
              this.incremental || this.transform(), this.update();
            }, d.prototype.update2 = function() {
              if (this.createBendsAsNeeded && (this.createBendpointsFromDummyNodes(), this.graphManager.resetAllEdges()), !this.isRemoteUse) {
                for (var g = this.graphManager.getAllEdges(), p = 0; p < g.length; p++)
                  g[p];
                for (var y = this.graphManager.getRoot().getNodes(), p = 0; p < y.length; p++)
                  y[p];
                this.update(this.graphManager.getRoot());
              }
            }, d.prototype.update = function(g) {
              if (g == null)
                this.update2();
              else if (g instanceof l) {
                var p = g;
                if (p.getChild() != null)
                  for (var y = p.getChild().getNodes(), E = 0; E < y.length; E++)
                    update(y[E]);
                if (p.vGraphObject != null) {
                  var m = p.vGraphObject;
                  m.update(p);
                }
              } else if (g instanceof u) {
                var T = g;
                if (T.vGraphObject != null) {
                  var C = T.vGraphObject;
                  C.update(T);
                }
              } else if (g instanceof f) {
                var S = g;
                if (S.vGraphObject != null) {
                  var b = S.vGraphObject;
                  b.update(S);
                }
              }
            }, d.prototype.initParameters = function() {
              this.isSubLayout || (this.layoutQuality = s.QUALITY, this.animationDuringLayout = s.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = s.DEFAULT_ANIMATION_PERIOD, this.animationOnLayout = s.DEFAULT_ANIMATION_ON_LAYOUT, this.incremental = s.DEFAULT_INCREMENTAL, this.createBendsAsNeeded = s.DEFAULT_CREATE_BENDS_AS_NEEDED, this.uniformLeafNodeSizes = s.DEFAULT_UNIFORM_LEAF_NODE_SIZES), this.animationDuringLayout && (this.animationOnLayout = !1);
            }, d.prototype.transform = function(g) {
              if (g == null)
                this.transform(new h(0, 0));
              else {
                var p = new c(), y = this.graphManager.getRoot().updateLeftTop();
                if (y != null) {
                  p.setWorldOrgX(g.x), p.setWorldOrgY(g.y), p.setDeviceOrgX(y.x), p.setDeviceOrgY(y.y);
                  for (var E = this.getAllNodes(), m, T = 0; T < E.length; T++)
                    m = E[T], m.transform(p);
                }
              }
            }, d.prototype.positionNodesRandomly = function(g) {
              if (g == null)
                this.positionNodesRandomly(this.getGraphManager().getRoot()), this.getGraphManager().getRoot().updateBounds(!0);
              else
                for (var p, y, E = g.getNodes(), m = 0; m < E.length; m++)
                  p = E[m], y = p.getChild(), y == null || y.getNodes().length == 0 ? p.scatter() : (this.positionNodesRandomly(y), p.updateBounds());
            }, d.prototype.getFlatForest = function() {
              for (var g = [], p = !0, y = this.graphManager.getRoot().getNodes(), E = !0, m = 0; m < y.length; m++)
                y[m].getChild() != null && (E = !1);
              if (!E)
                return g;
              var T = /* @__PURE__ */ new Set(), C = [], S = /* @__PURE__ */ new Map(), b = [];
              for (b = b.concat(y); b.length > 0 && p; ) {
                for (C.push(b[0]); C.length > 0 && p; ) {
                  var x = C[0];
                  C.splice(0, 1), T.add(x);
                  for (var w = x.getEdges(), m = 0; m < w.length; m++) {
                    var D = w[m].getOtherEnd(x);
                    if (S.get(x) != D)
                      if (!T.has(D))
                        C.push(D), S.set(D, x);
                      else {
                        p = !1;
                        break;
                      }
                  }
                }
                if (!p)
                  g = [];
                else {
                  var A = [].concat(i(T));
                  g.push(A);
                  for (var m = 0; m < A.length; m++) {
                    var L = A[m], I = b.indexOf(L);
                    I > -1 && b.splice(I, 1);
                  }
                  T = /* @__PURE__ */ new Set(), S = /* @__PURE__ */ new Map();
                }
              }
              return g;
            }, d.prototype.createDummyNodesForBendpoints = function(g) {
              for (var p = [], y = g.source, E = this.graphManager.calcLowestCommonAncestor(g.source, g.target), m = 0; m < g.bendpoints.length; m++) {
                var T = this.newNode(null);
                T.setRect(new Point(0, 0), new Dimension(1, 1)), E.add(T);
                var C = this.newEdge(null);
                this.graphManager.add(C, y, T), p.add(T), y = T;
              }
              var C = this.newEdge(null);
              return this.graphManager.add(C, y, g.target), this.edgeToDummyNodes.set(g, p), g.isInterGraph() ? this.graphManager.remove(g) : E.remove(g), p;
            }, d.prototype.createBendpointsFromDummyNodes = function() {
              var g = [];
              g = g.concat(this.graphManager.getAllEdges()), g = [].concat(i(this.edgeToDummyNodes.keys())).concat(g);
              for (var p = 0; p < g.length; p++) {
                var y = g[p];
                if (y.bendpoints.length > 0) {
                  for (var E = this.edgeToDummyNodes.get(y), m = 0; m < E.length; m++) {
                    var T = E[m], C = new h(T.getCenterX(), T.getCenterY()), S = y.bendpoints.get(m);
                    S.x = C.x, S.y = C.y, T.getOwner().remove(T);
                  }
                  this.graphManager.add(y, y.source, y.target);
                }
              }
            }, d.transform = function(g, p, y, E) {
              if (y != null && E != null) {
                var m = p;
                if (g <= 50) {
                  var T = p / y;
                  m -= (p - T) / 50 * (50 - g);
                } else {
                  var C = p * E;
                  m += (C - p) / 50 * (g - 50);
                }
                return m;
              } else {
                var S, b;
                return g <= 50 ? (S = 9 * p / 500, b = p / 10) : (S = 9 * p / 50, b = -8 * p), S * g + b;
              }
            }, d.findCenterOfTree = function(g) {
              var p = [];
              p = p.concat(g);
              var y = [], E = /* @__PURE__ */ new Map(), m = !1, T = null;
              (p.length == 1 || p.length == 2) && (m = !0, T = p[0]);
              for (var C = 0; C < p.length; C++) {
                var S = p[C], b = S.getNeighborsList().size;
                E.set(S, S.getNeighborsList().size), b == 1 && y.push(S);
              }
              var x = [];
              for (x = x.concat(y); !m; ) {
                var w = [];
                w = w.concat(x), x = [];
                for (var C = 0; C < p.length; C++) {
                  var S = p[C], D = p.indexOf(S);
                  D >= 0 && p.splice(D, 1);
                  var A = S.getNeighborsList();
                  A.forEach(function(O) {
                    if (y.indexOf(O) < 0) {
                      var P = E.get(O), R = P - 1;
                      R == 1 && x.push(O), E.set(O, R);
                    }
                  });
                }
                y = y.concat(x), (p.length == 1 || p.length == 2) && (m = !0, T = p[0]);
              }
              return T;
            }, d.prototype.setGraphManager = function(g) {
              this.graphManager = g;
            }, r.exports = d;
          },
          /* 16 */
          /***/
          function(r, a, n) {
            function i() {
            }
            i.seed = 1, i.x = 0, i.nextDouble = function() {
              return i.x = Math.sin(i.seed++) * 1e4, i.x - Math.floor(i.x);
            }, r.exports = i;
          },
          /* 17 */
          /***/
          function(r, a, n) {
            var i = n(4);
            function s(o, l) {
              this.lworldOrgX = 0, this.lworldOrgY = 0, this.ldeviceOrgX = 0, this.ldeviceOrgY = 0, this.lworldExtX = 1, this.lworldExtY = 1, this.ldeviceExtX = 1, this.ldeviceExtY = 1;
            }
            s.prototype.getWorldOrgX = function() {
              return this.lworldOrgX;
            }, s.prototype.setWorldOrgX = function(o) {
              this.lworldOrgX = o;
            }, s.prototype.getWorldOrgY = function() {
              return this.lworldOrgY;
            }, s.prototype.setWorldOrgY = function(o) {
              this.lworldOrgY = o;
            }, s.prototype.getWorldExtX = function() {
              return this.lworldExtX;
            }, s.prototype.setWorldExtX = function(o) {
              this.lworldExtX = o;
            }, s.prototype.getWorldExtY = function() {
              return this.lworldExtY;
            }, s.prototype.setWorldExtY = function(o) {
              this.lworldExtY = o;
            }, s.prototype.getDeviceOrgX = function() {
              return this.ldeviceOrgX;
            }, s.prototype.setDeviceOrgX = function(o) {
              this.ldeviceOrgX = o;
            }, s.prototype.getDeviceOrgY = function() {
              return this.ldeviceOrgY;
            }, s.prototype.setDeviceOrgY = function(o) {
              this.ldeviceOrgY = o;
            }, s.prototype.getDeviceExtX = function() {
              return this.ldeviceExtX;
            }, s.prototype.setDeviceExtX = function(o) {
              this.ldeviceExtX = o;
            }, s.prototype.getDeviceExtY = function() {
              return this.ldeviceExtY;
            }, s.prototype.setDeviceExtY = function(o) {
              this.ldeviceExtY = o;
            }, s.prototype.transformX = function(o) {
              var l = 0, u = this.lworldExtX;
              return u != 0 && (l = this.ldeviceOrgX + (o - this.lworldOrgX) * this.ldeviceExtX / u), l;
            }, s.prototype.transformY = function(o) {
              var l = 0, u = this.lworldExtY;
              return u != 0 && (l = this.ldeviceOrgY + (o - this.lworldOrgY) * this.ldeviceExtY / u), l;
            }, s.prototype.inverseTransformX = function(o) {
              var l = 0, u = this.ldeviceExtX;
              return u != 0 && (l = this.lworldOrgX + (o - this.ldeviceOrgX) * this.lworldExtX / u), l;
            }, s.prototype.inverseTransformY = function(o) {
              var l = 0, u = this.ldeviceExtY;
              return u != 0 && (l = this.lworldOrgY + (o - this.ldeviceOrgY) * this.lworldExtY / u), l;
            }, s.prototype.inverseTransformPoint = function(o) {
              var l = new i(this.inverseTransformX(o.x), this.inverseTransformY(o.y));
              return l;
            }, r.exports = s;
          },
          /* 18 */
          /***/
          function(r, a, n) {
            function i(v) {
              if (Array.isArray(v)) {
                for (var d = 0, g = Array(v.length); d < v.length; d++)
                  g[d] = v[d];
                return g;
              } else
                return Array.from(v);
            }
            var s = n(15), o = n(7), l = n(0), u = n(8), f = n(9);
            function h() {
              s.call(this), this.useSmartIdealEdgeLengthCalculation = o.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.idealEdgeLength = o.DEFAULT_EDGE_LENGTH, this.springConstant = o.DEFAULT_SPRING_STRENGTH, this.repulsionConstant = o.DEFAULT_REPULSION_STRENGTH, this.gravityConstant = o.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = o.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = o.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = o.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.displacementThresholdPerNode = 3 * o.DEFAULT_EDGE_LENGTH / 100, this.coolingFactor = o.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.initialCoolingFactor = o.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.totalDisplacement = 0, this.oldTotalDisplacement = 0, this.maxIterations = o.MAX_ITERATIONS;
            }
            h.prototype = Object.create(s.prototype);
            for (var c in s)
              h[c] = s[c];
            h.prototype.initParameters = function() {
              s.prototype.initParameters.call(this, arguments), this.totalIterations = 0, this.notAnimatedIterations = 0, this.useFRGridVariant = o.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION, this.grid = [];
            }, h.prototype.calcIdealEdgeLengths = function() {
              for (var v, d, g, p, y, E, m = this.getGraphManager().getAllEdges(), T = 0; T < m.length; T++)
                v = m[T], v.idealLength = this.idealEdgeLength, v.isInterGraph && (g = v.getSource(), p = v.getTarget(), y = v.getSourceInLca().getEstimatedSize(), E = v.getTargetInLca().getEstimatedSize(), this.useSmartIdealEdgeLengthCalculation && (v.idealLength += y + E - 2 * l.SIMPLE_NODE_SIZE), d = v.getLca().getInclusionTreeDepth(), v.idealLength += o.DEFAULT_EDGE_LENGTH * o.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR * (g.getInclusionTreeDepth() + p.getInclusionTreeDepth() - 2 * d));
            }, h.prototype.initSpringEmbedder = function() {
              var v = this.getAllNodes().length;
              this.incremental ? (v > o.ADAPTATION_LOWER_NODE_LIMIT && (this.coolingFactor = Math.max(this.coolingFactor * o.COOLING_ADAPTATION_FACTOR, this.coolingFactor - (v - o.ADAPTATION_LOWER_NODE_LIMIT) / (o.ADAPTATION_UPPER_NODE_LIMIT - o.ADAPTATION_LOWER_NODE_LIMIT) * this.coolingFactor * (1 - o.COOLING_ADAPTATION_FACTOR))), this.maxNodeDisplacement = o.MAX_NODE_DISPLACEMENT_INCREMENTAL) : (v > o.ADAPTATION_LOWER_NODE_LIMIT ? this.coolingFactor = Math.max(o.COOLING_ADAPTATION_FACTOR, 1 - (v - o.ADAPTATION_LOWER_NODE_LIMIT) / (o.ADAPTATION_UPPER_NODE_LIMIT - o.ADAPTATION_LOWER_NODE_LIMIT) * (1 - o.COOLING_ADAPTATION_FACTOR)) : this.coolingFactor = 1, this.initialCoolingFactor = this.coolingFactor, this.maxNodeDisplacement = o.MAX_NODE_DISPLACEMENT), this.maxIterations = Math.max(this.getAllNodes().length * 5, this.maxIterations), this.totalDisplacementThreshold = this.displacementThresholdPerNode * this.getAllNodes().length, this.repulsionRange = this.calcRepulsionRange();
            }, h.prototype.calcSpringForces = function() {
              for (var v = this.getAllEdges(), d, g = 0; g < v.length; g++)
                d = v[g], this.calcSpringForce(d, d.idealLength);
            }, h.prototype.calcRepulsionForces = function() {
              var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, g, p, y, E, m = this.getAllNodes(), T;
              if (this.useFRGridVariant)
                for (this.totalIterations % o.GRID_CALCULATION_CHECK_PERIOD == 1 && v && this.updateGrid(), T = /* @__PURE__ */ new Set(), g = 0; g < m.length; g++)
                  y = m[g], this.calculateRepulsionForceOfANode(y, T, v, d), T.add(y);
              else
                for (g = 0; g < m.length; g++)
                  for (y = m[g], p = g + 1; p < m.length; p++)
                    E = m[p], y.getOwner() == E.getOwner() && this.calcRepulsionForce(y, E);
            }, h.prototype.calcGravitationalForces = function() {
              for (var v, d = this.getAllNodesToApplyGravitation(), g = 0; g < d.length; g++)
                v = d[g], this.calcGravitationalForce(v);
            }, h.prototype.moveNodes = function() {
              for (var v = this.getAllNodes(), d, g = 0; g < v.length; g++)
                d = v[g], d.move();
            }, h.prototype.calcSpringForce = function(v, d) {
              var g = v.getSource(), p = v.getTarget(), y, E, m, T;
              if (this.uniformLeafNodeSizes && g.getChild() == null && p.getChild() == null)
                v.updateLengthSimple();
              else if (v.updateLength(), v.isOverlapingSourceAndTarget)
                return;
              y = v.getLength(), y != 0 && (E = this.springConstant * (y - d), m = E * (v.lengthX / y), T = E * (v.lengthY / y), g.springForceX += m, g.springForceY += T, p.springForceX -= m, p.springForceY -= T);
            }, h.prototype.calcRepulsionForce = function(v, d) {
              var g = v.getRect(), p = d.getRect(), y = new Array(2), E = new Array(4), m, T, C, S, b, x, w;
              if (g.intersects(p)) {
                u.calcSeparationAmount(g, p, y, o.DEFAULT_EDGE_LENGTH / 2), x = 2 * y[0], w = 2 * y[1];
                var D = v.noOfChildren * d.noOfChildren / (v.noOfChildren + d.noOfChildren);
                v.repulsionForceX -= D * x, v.repulsionForceY -= D * w, d.repulsionForceX += D * x, d.repulsionForceY += D * w;
              } else
                this.uniformLeafNodeSizes && v.getChild() == null && d.getChild() == null ? (m = p.getCenterX() - g.getCenterX(), T = p.getCenterY() - g.getCenterY()) : (u.getIntersection(g, p, E), m = E[2] - E[0], T = E[3] - E[1]), Math.abs(m) < o.MIN_REPULSION_DIST && (m = f.sign(m) * o.MIN_REPULSION_DIST), Math.abs(T) < o.MIN_REPULSION_DIST && (T = f.sign(T) * o.MIN_REPULSION_DIST), C = m * m + T * T, S = Math.sqrt(C), b = this.repulsionConstant * v.noOfChildren * d.noOfChildren / C, x = b * m / S, w = b * T / S, v.repulsionForceX -= x, v.repulsionForceY -= w, d.repulsionForceX += x, d.repulsionForceY += w;
            }, h.prototype.calcGravitationalForce = function(v) {
              var d, g, p, y, E, m, T, C;
              d = v.getOwner(), g = (d.getRight() + d.getLeft()) / 2, p = (d.getTop() + d.getBottom()) / 2, y = v.getCenterX() - g, E = v.getCenterY() - p, m = Math.abs(y) + v.getWidth() / 2, T = Math.abs(E) + v.getHeight() / 2, v.getOwner() == this.graphManager.getRoot() ? (C = d.getEstimatedSize() * this.gravityRangeFactor, (m > C || T > C) && (v.gravitationForceX = -this.gravityConstant * y, v.gravitationForceY = -this.gravityConstant * E)) : (C = d.getEstimatedSize() * this.compoundGravityRangeFactor, (m > C || T > C) && (v.gravitationForceX = -this.gravityConstant * y * this.compoundGravityConstant, v.gravitationForceY = -this.gravityConstant * E * this.compoundGravityConstant));
            }, h.prototype.isConverged = function() {
              var v, d = !1;
              return this.totalIterations > this.maxIterations / 3 && (d = Math.abs(this.totalDisplacement - this.oldTotalDisplacement) < 2), v = this.totalDisplacement < this.totalDisplacementThreshold, this.oldTotalDisplacement = this.totalDisplacement, v || d;
            }, h.prototype.animate = function() {
              this.animationDuringLayout && !this.isSubLayout && (this.notAnimatedIterations == this.animationPeriod ? (this.update(), this.notAnimatedIterations = 0) : this.notAnimatedIterations++);
            }, h.prototype.calcNoOfChildrenForAllNodes = function() {
              for (var v, d = this.graphManager.getAllNodes(), g = 0; g < d.length; g++)
                v = d[g], v.noOfChildren = v.getNoOfChildren();
            }, h.prototype.calcGrid = function(v) {
              var d = 0, g = 0;
              d = parseInt(Math.ceil((v.getRight() - v.getLeft()) / this.repulsionRange)), g = parseInt(Math.ceil((v.getBottom() - v.getTop()) / this.repulsionRange));
              for (var p = new Array(d), y = 0; y < d; y++)
                p[y] = new Array(g);
              for (var y = 0; y < d; y++)
                for (var E = 0; E < g; E++)
                  p[y][E] = new Array();
              return p;
            }, h.prototype.addNodeToGrid = function(v, d, g) {
              var p = 0, y = 0, E = 0, m = 0;
              p = parseInt(Math.floor((v.getRect().x - d) / this.repulsionRange)), y = parseInt(Math.floor((v.getRect().width + v.getRect().x - d) / this.repulsionRange)), E = parseInt(Math.floor((v.getRect().y - g) / this.repulsionRange)), m = parseInt(Math.floor((v.getRect().height + v.getRect().y - g) / this.repulsionRange));
              for (var T = p; T <= y; T++)
                for (var C = E; C <= m; C++)
                  this.grid[T][C].push(v), v.setGridCoordinates(p, y, E, m);
            }, h.prototype.updateGrid = function() {
              var v, d, g = this.getAllNodes();
              for (this.grid = this.calcGrid(this.graphManager.getRoot()), v = 0; v < g.length; v++)
                d = g[v], this.addNodeToGrid(d, this.graphManager.getRoot().getLeft(), this.graphManager.getRoot().getTop());
            }, h.prototype.calculateRepulsionForceOfANode = function(v, d, g, p) {
              if (this.totalIterations % o.GRID_CALCULATION_CHECK_PERIOD == 1 && g || p) {
                var y = /* @__PURE__ */ new Set();
                v.surrounding = new Array();
                for (var E, m = this.grid, T = v.startX - 1; T < v.finishX + 2; T++)
                  for (var C = v.startY - 1; C < v.finishY + 2; C++)
                    if (!(T < 0 || C < 0 || T >= m.length || C >= m[0].length)) {
                      for (var S = 0; S < m[T][C].length; S++)
                        if (E = m[T][C][S], !(v.getOwner() != E.getOwner() || v == E) && !d.has(E) && !y.has(E)) {
                          var b = Math.abs(v.getCenterX() - E.getCenterX()) - (v.getWidth() / 2 + E.getWidth() / 2), x = Math.abs(v.getCenterY() - E.getCenterY()) - (v.getHeight() / 2 + E.getHeight() / 2);
                          b <= this.repulsionRange && x <= this.repulsionRange && y.add(E);
                        }
                    }
                v.surrounding = [].concat(i(y));
              }
              for (T = 0; T < v.surrounding.length; T++)
                this.calcRepulsionForce(v, v.surrounding[T]);
            }, h.prototype.calcRepulsionRange = function() {
              return 0;
            }, r.exports = h;
          },
          /* 19 */
          /***/
          function(r, a, n) {
            var i = n(1), s = n(7);
            function o(u, f, h) {
              i.call(this, u, f, h), this.idealLength = s.DEFAULT_EDGE_LENGTH;
            }
            o.prototype = Object.create(i.prototype);
            for (var l in i)
              o[l] = i[l];
            r.exports = o;
          },
          /* 20 */
          /***/
          function(r, a, n) {
            var i = n(3);
            function s(l, u, f, h) {
              i.call(this, l, u, f, h), this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0, this.startX = 0, this.finishX = 0, this.startY = 0, this.finishY = 0, this.surrounding = [];
            }
            s.prototype = Object.create(i.prototype);
            for (var o in i)
              s[o] = i[o];
            s.prototype.setGridCoordinates = function(l, u, f, h) {
              this.startX = l, this.finishX = u, this.startY = f, this.finishY = h;
            }, r.exports = s;
          },
          /* 21 */
          /***/
          function(r, a, n) {
            function i(s, o) {
              this.width = 0, this.height = 0, s !== null && o !== null && (this.height = o, this.width = s);
            }
            i.prototype.getWidth = function() {
              return this.width;
            }, i.prototype.setWidth = function(s) {
              this.width = s;
            }, i.prototype.getHeight = function() {
              return this.height;
            }, i.prototype.setHeight = function(s) {
              this.height = s;
            }, r.exports = i;
          },
          /* 22 */
          /***/
          function(r, a, n) {
            var i = n(14);
            function s() {
              this.map = {}, this.keys = [];
            }
            s.prototype.put = function(o, l) {
              var u = i.createID(o);
              this.contains(u) || (this.map[u] = l, this.keys.push(o));
            }, s.prototype.contains = function(o) {
              return i.createID(o), this.map[o] != null;
            }, s.prototype.get = function(o) {
              var l = i.createID(o);
              return this.map[l];
            }, s.prototype.keySet = function() {
              return this.keys;
            }, r.exports = s;
          },
          /* 23 */
          /***/
          function(r, a, n) {
            var i = n(14);
            function s() {
              this.set = {};
            }
            s.prototype.add = function(o) {
              var l = i.createID(o);
              this.contains(l) || (this.set[l] = o);
            }, s.prototype.remove = function(o) {
              delete this.set[i.createID(o)];
            }, s.prototype.clear = function() {
              this.set = {};
            }, s.prototype.contains = function(o) {
              return this.set[i.createID(o)] == o;
            }, s.prototype.isEmpty = function() {
              return this.size() === 0;
            }, s.prototype.size = function() {
              return Object.keys(this.set).length;
            }, s.prototype.addAllTo = function(o) {
              for (var l = Object.keys(this.set), u = l.length, f = 0; f < u; f++)
                o.push(this.set[l[f]]);
            }, s.prototype.size = function() {
              return Object.keys(this.set).length;
            }, s.prototype.addAll = function(o) {
              for (var l = o.length, u = 0; u < l; u++) {
                var f = o[u];
                this.add(f);
              }
            }, r.exports = s;
          },
          /* 24 */
          /***/
          function(r, a, n) {
            var i = function() {
              function u(f, h) {
                for (var c = 0; c < h.length; c++) {
                  var v = h[c];
                  v.enumerable = v.enumerable || !1, v.configurable = !0, "value" in v && (v.writable = !0), Object.defineProperty(f, v.key, v);
                }
              }
              return function(f, h, c) {
                return h && u(f.prototype, h), c && u(f, c), f;
              };
            }();
            function s(u, f) {
              if (!(u instanceof f))
                throw new TypeError("Cannot call a class as a function");
            }
            var o = n(11), l = function() {
              function u(f, h) {
                s(this, u), (h !== null || h !== void 0) && (this.compareFunction = this._defaultCompareFunction);
                var c = void 0;
                f instanceof o ? c = f.size() : c = f.length, this._quicksort(f, 0, c - 1);
              }
              return i(u, [{
                key: "_quicksort",
                value: function(h, c, v) {
                  if (c < v) {
                    var d = this._partition(h, c, v);
                    this._quicksort(h, c, d), this._quicksort(h, d + 1, v);
                  }
                }
              }, {
                key: "_partition",
                value: function(h, c, v) {
                  for (var d = this._get(h, c), g = c, p = v; ; ) {
                    for (; this.compareFunction(d, this._get(h, p)); )
                      p--;
                    for (; this.compareFunction(this._get(h, g), d); )
                      g++;
                    if (g < p)
                      this._swap(h, g, p), g++, p--;
                    else
                      return p;
                  }
                }
              }, {
                key: "_get",
                value: function(h, c) {
                  return h instanceof o ? h.get_object_at(c) : h[c];
                }
              }, {
                key: "_set",
                value: function(h, c, v) {
                  h instanceof o ? h.set_object_at(c, v) : h[c] = v;
                }
              }, {
                key: "_swap",
                value: function(h, c, v) {
                  var d = this._get(h, c);
                  this._set(h, c, this._get(h, v)), this._set(h, v, d);
                }
              }, {
                key: "_defaultCompareFunction",
                value: function(h, c) {
                  return c > h;
                }
              }]), u;
            }();
            r.exports = l;
          },
          /* 25 */
          /***/
          function(r, a, n) {
            var i = function() {
              function l(u, f) {
                for (var h = 0; h < f.length; h++) {
                  var c = f[h];
                  c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(u, c.key, c);
                }
              }
              return function(u, f, h) {
                return f && l(u.prototype, f), h && l(u, h), u;
              };
            }();
            function s(l, u) {
              if (!(l instanceof u))
                throw new TypeError("Cannot call a class as a function");
            }
            var o = function() {
              function l(u, f) {
                var h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, c = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : -1, v = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : -1;
                s(this, l), this.sequence1 = u, this.sequence2 = f, this.match_score = h, this.mismatch_penalty = c, this.gap_penalty = v, this.iMax = u.length + 1, this.jMax = f.length + 1, this.grid = new Array(this.iMax);
                for (var d = 0; d < this.iMax; d++) {
                  this.grid[d] = new Array(this.jMax);
                  for (var g = 0; g < this.jMax; g++)
                    this.grid[d][g] = 0;
                }
                this.tracebackGrid = new Array(this.iMax);
                for (var p = 0; p < this.iMax; p++) {
                  this.tracebackGrid[p] = new Array(this.jMax);
                  for (var y = 0; y < this.jMax; y++)
                    this.tracebackGrid[p][y] = [null, null, null];
                }
                this.alignments = [], this.score = -1, this.computeGrids();
              }
              return i(l, [{
                key: "getScore",
                value: function() {
                  return this.score;
                }
              }, {
                key: "getAlignments",
                value: function() {
                  return this.alignments;
                }
                // Main dynamic programming procedure
              }, {
                key: "computeGrids",
                value: function() {
                  for (var f = 1; f < this.jMax; f++)
                    this.grid[0][f] = this.grid[0][f - 1] + this.gap_penalty, this.tracebackGrid[0][f] = [!1, !1, !0];
                  for (var h = 1; h < this.iMax; h++)
                    this.grid[h][0] = this.grid[h - 1][0] + this.gap_penalty, this.tracebackGrid[h][0] = [!1, !0, !1];
                  for (var c = 1; c < this.iMax; c++)
                    for (var v = 1; v < this.jMax; v++) {
                      var d = void 0;
                      this.sequence1[c - 1] === this.sequence2[v - 1] ? d = this.grid[c - 1][v - 1] + this.match_score : d = this.grid[c - 1][v - 1] + this.mismatch_penalty;
                      var g = this.grid[c - 1][v] + this.gap_penalty, p = this.grid[c][v - 1] + this.gap_penalty, y = [d, g, p], E = this.arrayAllMaxIndexes(y);
                      this.grid[c][v] = y[E[0]], this.tracebackGrid[c][v] = [E.includes(0), E.includes(1), E.includes(2)];
                    }
                  this.score = this.grid[this.iMax - 1][this.jMax - 1];
                }
                // Gets all possible valid sequence combinations
              }, {
                key: "alignmentTraceback",
                value: function() {
                  var f = [];
                  for (f.push({
                    pos: [this.sequence1.length, this.sequence2.length],
                    seq1: "",
                    seq2: ""
                  }); f[0]; ) {
                    var h = f[0], c = this.tracebackGrid[h.pos[0]][h.pos[1]];
                    c[0] && f.push({
                      pos: [h.pos[0] - 1, h.pos[1] - 1],
                      seq1: this.sequence1[h.pos[0] - 1] + h.seq1,
                      seq2: this.sequence2[h.pos[1] - 1] + h.seq2
                    }), c[1] && f.push({
                      pos: [h.pos[0] - 1, h.pos[1]],
                      seq1: this.sequence1[h.pos[0] - 1] + h.seq1,
                      seq2: "-" + h.seq2
                    }), c[2] && f.push({
                      pos: [h.pos[0], h.pos[1] - 1],
                      seq1: "-" + h.seq1,
                      seq2: this.sequence2[h.pos[1] - 1] + h.seq2
                    }), h.pos[0] === 0 && h.pos[1] === 0 && this.alignments.push({
                      sequence1: h.seq1,
                      sequence2: h.seq2
                    }), f.shift();
                  }
                  return this.alignments;
                }
                // Helper Functions
              }, {
                key: "getAllIndexes",
                value: function(f, h) {
                  for (var c = [], v = -1; (v = f.indexOf(h, v + 1)) !== -1; )
                    c.push(v);
                  return c;
                }
              }, {
                key: "arrayAllMaxIndexes",
                value: function(f) {
                  return this.getAllIndexes(f, Math.max.apply(null, f));
                }
              }]), l;
            }();
            r.exports = o;
          },
          /* 26 */
          /***/
          function(r, a, n) {
            var i = function() {
            };
            i.FDLayout = n(18), i.FDLayoutConstants = n(7), i.FDLayoutEdge = n(19), i.FDLayoutNode = n(20), i.DimensionD = n(21), i.HashMap = n(22), i.HashSet = n(23), i.IGeometry = n(8), i.IMath = n(9), i.Integer = n(10), i.Point = n(12), i.PointD = n(4), i.RandomSeed = n(16), i.RectangleD = n(13), i.Transform = n(17), i.UniqueIDGeneretor = n(14), i.Quicksort = n(24), i.LinkedList = n(11), i.LGraphObject = n(2), i.LGraph = n(5), i.LEdge = n(1), i.LGraphManager = n(6), i.LNode = n(3), i.Layout = n(15), i.LayoutConstants = n(0), i.NeedlemanWunsch = n(25), r.exports = i;
          },
          /* 27 */
          /***/
          function(r, a, n) {
            function i() {
              this.listeners = [];
            }
            var s = i.prototype;
            s.addListener = function(o, l) {
              this.listeners.push({
                event: o,
                callback: l
              });
            }, s.removeListener = function(o, l) {
              for (var u = this.listeners.length; u >= 0; u--) {
                var f = this.listeners[u];
                f.event === o && f.callback === l && this.listeners.splice(u, 1);
              }
            }, s.emit = function(o, l) {
              for (var u = 0; u < this.listeners.length; u++) {
                var f = this.listeners[u];
                o === f.event && f.callback(l);
              }
            }, r.exports = i;
          }
          /******/
        ])
      );
    });
  }(Fn)), Fn.exports;
}
var Ys;
function xm() {
  return Ys || (Ys = 1, function(t, e) {
    (function(a, n) {
      t.exports = n(wm());
    })(Vt, function(r) {
      return (
        /******/
        function(a) {
          var n = {};
          function i(s) {
            if (n[s])
              return n[s].exports;
            var o = n[s] = {
              /******/
              i: s,
              /******/
              l: !1,
              /******/
              exports: {}
              /******/
            };
            return a[s].call(o.exports, o, o.exports, i), o.l = !0, o.exports;
          }
          return i.m = a, i.c = n, i.i = function(s) {
            return s;
          }, i.d = function(s, o, l) {
            i.o(s, o) || Object.defineProperty(s, o, {
              /******/
              configurable: !1,
              /******/
              enumerable: !0,
              /******/
              get: l
              /******/
            });
          }, i.n = function(s) {
            var o = s && s.__esModule ? (
              /******/
              function() {
                return s.default;
              }
            ) : (
              /******/
              function() {
                return s;
              }
            );
            return i.d(o, "a", o), o;
          }, i.o = function(s, o) {
            return Object.prototype.hasOwnProperty.call(s, o);
          }, i.p = "", i(i.s = 7);
        }([
          /* 0 */
          /***/
          function(a, n) {
            a.exports = r;
          },
          /* 1 */
          /***/
          function(a, n, i) {
            var s = i(0).FDLayoutConstants;
            function o() {
            }
            for (var l in s)
              o[l] = s[l];
            o.DEFAULT_USE_MULTI_LEVEL_SCALING = !1, o.DEFAULT_RADIAL_SEPARATION = s.DEFAULT_EDGE_LENGTH, o.DEFAULT_COMPONENT_SEPERATION = 60, o.TILE = !0, o.TILING_PADDING_VERTICAL = 10, o.TILING_PADDING_HORIZONTAL = 10, o.TREE_REDUCTION_ON_INCREMENTAL = !1, a.exports = o;
          },
          /* 2 */
          /***/
          function(a, n, i) {
            var s = i(0).FDLayoutEdge;
            function o(u, f, h) {
              s.call(this, u, f, h);
            }
            o.prototype = Object.create(s.prototype);
            for (var l in s)
              o[l] = s[l];
            a.exports = o;
          },
          /* 3 */
          /***/
          function(a, n, i) {
            var s = i(0).LGraph;
            function o(u, f, h) {
              s.call(this, u, f, h);
            }
            o.prototype = Object.create(s.prototype);
            for (var l in s)
              o[l] = s[l];
            a.exports = o;
          },
          /* 4 */
          /***/
          function(a, n, i) {
            var s = i(0).LGraphManager;
            function o(u) {
              s.call(this, u);
            }
            o.prototype = Object.create(s.prototype);
            for (var l in s)
              o[l] = s[l];
            a.exports = o;
          },
          /* 5 */
          /***/
          function(a, n, i) {
            var s = i(0).FDLayoutNode, o = i(0).IMath;
            function l(f, h, c, v) {
              s.call(this, f, h, c, v);
            }
            l.prototype = Object.create(s.prototype);
            for (var u in s)
              l[u] = s[u];
            l.prototype.move = function() {
              var f = this.graphManager.getLayout();
              this.displacementX = f.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.noOfChildren, this.displacementY = f.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.noOfChildren, Math.abs(this.displacementX) > f.coolingFactor * f.maxNodeDisplacement && (this.displacementX = f.coolingFactor * f.maxNodeDisplacement * o.sign(this.displacementX)), Math.abs(this.displacementY) > f.coolingFactor * f.maxNodeDisplacement && (this.displacementY = f.coolingFactor * f.maxNodeDisplacement * o.sign(this.displacementY)), this.child == null ? this.moveBy(this.displacementX, this.displacementY) : this.child.getNodes().length == 0 ? this.moveBy(this.displacementX, this.displacementY) : this.propogateDisplacementToChildren(this.displacementX, this.displacementY), f.totalDisplacement += Math.abs(this.displacementX) + Math.abs(this.displacementY), this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0;
            }, l.prototype.propogateDisplacementToChildren = function(f, h) {
              for (var c = this.getChild().getNodes(), v, d = 0; d < c.length; d++)
                v = c[d], v.getChild() == null ? (v.moveBy(f, h), v.displacementX += f, v.displacementY += h) : v.propogateDisplacementToChildren(f, h);
            }, l.prototype.setPred1 = function(f) {
              this.pred1 = f;
            }, l.prototype.getPred1 = function() {
              return pred1;
            }, l.prototype.getPred2 = function() {
              return pred2;
            }, l.prototype.setNext = function(f) {
              this.next = f;
            }, l.prototype.getNext = function() {
              return next;
            }, l.prototype.setProcessed = function(f) {
              this.processed = f;
            }, l.prototype.isProcessed = function() {
              return processed;
            }, a.exports = l;
          },
          /* 6 */
          /***/
          function(a, n, i) {
            var s = i(0).FDLayout, o = i(4), l = i(3), u = i(5), f = i(2), h = i(1), c = i(0).FDLayoutConstants, v = i(0).LayoutConstants, d = i(0).Point, g = i(0).PointD, p = i(0).Layout, y = i(0).Integer, E = i(0).IGeometry, m = i(0).LGraph, T = i(0).Transform;
            function C() {
              s.call(this), this.toBeTiled = {};
            }
            C.prototype = Object.create(s.prototype);
            for (var S in s)
              C[S] = s[S];
            C.prototype.newGraphManager = function() {
              var b = new o(this);
              return this.graphManager = b, b;
            }, C.prototype.newGraph = function(b) {
              return new l(null, this.graphManager, b);
            }, C.prototype.newNode = function(b) {
              return new u(this.graphManager, b);
            }, C.prototype.newEdge = function(b) {
              return new f(null, null, b);
            }, C.prototype.initParameters = function() {
              s.prototype.initParameters.call(this, arguments), this.isSubLayout || (h.DEFAULT_EDGE_LENGTH < 10 ? this.idealEdgeLength = 10 : this.idealEdgeLength = h.DEFAULT_EDGE_LENGTH, this.useSmartIdealEdgeLengthCalculation = h.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.springConstant = c.DEFAULT_SPRING_STRENGTH, this.repulsionConstant = c.DEFAULT_REPULSION_STRENGTH, this.gravityConstant = c.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = c.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = c.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = c.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.prunedNodesAll = [], this.growTreeIterations = 0, this.afterGrowthIterations = 0, this.isTreeGrowing = !1, this.isGrowthFinished = !1, this.coolingCycle = 0, this.maxCoolingCycle = this.maxIterations / c.CONVERGENCE_CHECK_PERIOD, this.finalTemperature = c.CONVERGENCE_CHECK_PERIOD / this.maxIterations, this.coolingAdjuster = 1);
            }, C.prototype.layout = function() {
              var b = v.DEFAULT_CREATE_BENDS_AS_NEEDED;
              return b && (this.createBendpoints(), this.graphManager.resetAllEdges()), this.level = 0, this.classicLayout();
            }, C.prototype.classicLayout = function() {
              if (this.nodesWithGravity = this.calculateNodesToApplyGravitationTo(), this.graphManager.setAllNodesToApplyGravitation(this.nodesWithGravity), this.calcNoOfChildrenForAllNodes(), this.graphManager.calcLowestCommonAncestors(), this.graphManager.calcInclusionTreeDepths(), this.graphManager.getRoot().calcEstimatedSize(), this.calcIdealEdgeLengths(), this.incremental) {
                if (h.TREE_REDUCTION_ON_INCREMENTAL) {
                  this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
                  var x = new Set(this.getAllNodes()), w = this.nodesWithGravity.filter(function(L) {
                    return x.has(L);
                  });
                  this.graphManager.setAllNodesToApplyGravitation(w);
                }
              } else {
                var b = this.getFlatForest();
                if (b.length > 0)
                  this.positionNodesRadially(b);
                else {
                  this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
                  var x = new Set(this.getAllNodes()), w = this.nodesWithGravity.filter(function(D) {
                    return x.has(D);
                  });
                  this.graphManager.setAllNodesToApplyGravitation(w), this.positionNodesRandomly();
                }
              }
              return this.initSpringEmbedder(), this.runSpringEmbedder(), !0;
            }, C.prototype.tick = function() {
              if (this.totalIterations++, this.totalIterations === this.maxIterations && !this.isTreeGrowing && !this.isGrowthFinished)
                if (this.prunedNodesAll.length > 0)
                  this.isTreeGrowing = !0;
                else
                  return !0;
              if (this.totalIterations % c.CONVERGENCE_CHECK_PERIOD == 0 && !this.isTreeGrowing && !this.isGrowthFinished) {
                if (this.isConverged())
                  if (this.prunedNodesAll.length > 0)
                    this.isTreeGrowing = !0;
                  else
                    return !0;
                this.coolingCycle++, this.layoutQuality == 0 ? this.coolingAdjuster = this.coolingCycle : this.layoutQuality == 1 && (this.coolingAdjuster = this.coolingCycle / 3), this.coolingFactor = Math.max(this.initialCoolingFactor - Math.pow(this.coolingCycle, Math.log(100 * (this.initialCoolingFactor - this.finalTemperature)) / Math.log(this.maxCoolingCycle)) / 100 * this.coolingAdjuster, this.finalTemperature), this.animationPeriod = Math.ceil(this.initialAnimationPeriod * Math.sqrt(this.coolingFactor));
              }
              if (this.isTreeGrowing) {
                if (this.growTreeIterations % 10 == 0)
                  if (this.prunedNodesAll.length > 0) {
                    this.graphManager.updateBounds(), this.updateGrid(), this.growTree(this.prunedNodesAll), this.graphManager.resetAllNodesToApplyGravitation();
                    var b = new Set(this.getAllNodes()), x = this.nodesWithGravity.filter(function(A) {
                      return b.has(A);
                    });
                    this.graphManager.setAllNodesToApplyGravitation(x), this.graphManager.updateBounds(), this.updateGrid(), this.coolingFactor = c.DEFAULT_COOLING_FACTOR_INCREMENTAL;
                  } else
                    this.isTreeGrowing = !1, this.isGrowthFinished = !0;
                this.growTreeIterations++;
              }
              if (this.isGrowthFinished) {
                if (this.isConverged())
                  return !0;
                this.afterGrowthIterations % 10 == 0 && (this.graphManager.updateBounds(), this.updateGrid()), this.coolingFactor = c.DEFAULT_COOLING_FACTOR_INCREMENTAL * ((100 - this.afterGrowthIterations) / 100), this.afterGrowthIterations++;
              }
              var w = !this.isTreeGrowing && !this.isGrowthFinished, D = this.growTreeIterations % 10 == 1 && this.isTreeGrowing || this.afterGrowthIterations % 10 == 1 && this.isGrowthFinished;
              return this.totalDisplacement = 0, this.graphManager.updateBounds(), this.calcSpringForces(), this.calcRepulsionForces(w, D), this.calcGravitationalForces(), this.moveNodes(), this.animate(), !1;
            }, C.prototype.getPositionsData = function() {
              for (var b = this.graphManager.getAllNodes(), x = {}, w = 0; w < b.length; w++) {
                var D = b[w].rect, A = b[w].id;
                x[A] = {
                  id: A,
                  x: D.getCenterX(),
                  y: D.getCenterY(),
                  w: D.width,
                  h: D.height
                };
              }
              return x;
            }, C.prototype.runSpringEmbedder = function() {
              this.initialAnimationPeriod = 25, this.animationPeriod = this.initialAnimationPeriod;
              var b = !1;
              if (c.ANIMATE === "during")
                this.emit("layoutstarted");
              else {
                for (; !b; )
                  b = this.tick();
                this.graphManager.updateBounds();
              }
            }, C.prototype.calculateNodesToApplyGravitationTo = function() {
              var b = [], x, w = this.graphManager.getGraphs(), D = w.length, A;
              for (A = 0; A < D; A++)
                x = w[A], x.updateConnected(), x.isConnected || (b = b.concat(x.getNodes()));
              return b;
            }, C.prototype.createBendpoints = function() {
              var b = [];
              b = b.concat(this.graphManager.getAllEdges());
              var x = /* @__PURE__ */ new Set(), w;
              for (w = 0; w < b.length; w++) {
                var D = b[w];
                if (!x.has(D)) {
                  var A = D.getSource(), L = D.getTarget();
                  if (A == L)
                    D.getBendpoints().push(new g()), D.getBendpoints().push(new g()), this.createDummyNodesForBendpoints(D), x.add(D);
                  else {
                    var I = [];
                    if (I = I.concat(A.getEdgeListToNode(L)), I = I.concat(L.getEdgeListToNode(A)), !x.has(I[0])) {
                      if (I.length > 1) {
                        var O;
                        for (O = 0; O < I.length; O++) {
                          var P = I[O];
                          P.getBendpoints().push(new g()), this.createDummyNodesForBendpoints(P);
                        }
                      }
                      I.forEach(function(R) {
                        x.add(R);
                      });
                    }
                  }
                }
                if (x.size == b.length)
                  break;
              }
            }, C.prototype.positionNodesRadially = function(b) {
              for (var x = new d(0, 0), w = Math.ceil(Math.sqrt(b.length)), D = 0, A = 0, L = 0, I = new g(0, 0), O = 0; O < b.length; O++) {
                O % w == 0 && (L = 0, A = D, O != 0 && (A += h.DEFAULT_COMPONENT_SEPERATION), D = 0);
                var P = b[O], R = p.findCenterOfTree(P);
                x.x = L, x.y = A, I = C.radialLayout(P, R, x), I.y > D && (D = Math.floor(I.y)), L = Math.floor(I.x + h.DEFAULT_COMPONENT_SEPERATION);
              }
              this.transform(new g(v.WORLD_CENTER_X - I.x / 2, v.WORLD_CENTER_Y - I.y / 2));
            }, C.radialLayout = function(b, x, w) {
              var D = Math.max(this.maxDiagonalInTree(b), h.DEFAULT_RADIAL_SEPARATION);
              C.branchRadialLayout(x, null, 0, 359, 0, D);
              var A = m.calculateBounds(b), L = new T();
              L.setDeviceOrgX(A.getMinX()), L.setDeviceOrgY(A.getMinY()), L.setWorldOrgX(w.x), L.setWorldOrgY(w.y);
              for (var I = 0; I < b.length; I++) {
                var O = b[I];
                O.transform(L);
              }
              var P = new g(A.getMaxX(), A.getMaxY());
              return L.inverseTransformPoint(P);
            }, C.branchRadialLayout = function(b, x, w, D, A, L) {
              var I = (D - w + 1) / 2;
              I < 0 && (I += 180);
              var O = (I + w) % 360, P = O * E.TWO_PI / 360, R = A * Math.cos(P), M = A * Math.sin(P);
              b.setCenter(R, M);
              var k = [];
              k = k.concat(b.getEdges());
              var B = k.length;
              x != null && B--;
              for (var G = 0, F = k.length, $, U = b.getEdgesBetween(x); U.length > 1; ) {
                var _ = U[0];
                U.splice(0, 1);
                var Y = k.indexOf(_);
                Y >= 0 && k.splice(Y, 1), F--, B--;
              }
              x != null ? $ = (k.indexOf(U[0]) + 1) % F : $ = 0;
              for (var W = Math.abs(D - w) / B, z = $; G != B; z = ++z % F) {
                var K = k[z].getOtherEnd(b);
                if (K != x) {
                  var j = (w + G * W) % 360, Q = (j + W) % 360;
                  C.branchRadialLayout(K, b, j, Q, A + L, L), G++;
                }
              }
            }, C.maxDiagonalInTree = function(b) {
              for (var x = y.MIN_VALUE, w = 0; w < b.length; w++) {
                var D = b[w], A = D.getDiagonal();
                A > x && (x = A);
              }
              return x;
            }, C.prototype.calcRepulsionRange = function() {
              return 2 * (this.level + 1) * this.idealEdgeLength;
            }, C.prototype.groupZeroDegreeMembers = function() {
              var b = this, x = {};
              this.memberGroups = {}, this.idToDummyNode = {};
              for (var w = [], D = this.graphManager.getAllNodes(), A = 0; A < D.length; A++) {
                var L = D[A], I = L.getParent();
                this.getNodeDegreeWithChildren(L) === 0 && (I.id == null || !this.getToBeTiled(I)) && w.push(L);
              }
              for (var A = 0; A < w.length; A++) {
                var L = w[A], O = L.getParent().id;
                typeof x[O] == "undefined" && (x[O] = []), x[O] = x[O].concat(L);
              }
              Object.keys(x).forEach(function(P) {
                if (x[P].length > 1) {
                  var R = "DummyCompound_" + P;
                  b.memberGroups[R] = x[P];
                  var M = x[P][0].getParent(), k = new u(b.graphManager);
                  k.id = R, k.paddingLeft = M.paddingLeft || 0, k.paddingRight = M.paddingRight || 0, k.paddingBottom = M.paddingBottom || 0, k.paddingTop = M.paddingTop || 0, b.idToDummyNode[R] = k;
                  var B = b.getGraphManager().add(b.newGraph(), k), G = M.getChild();
                  G.add(k);
                  for (var F = 0; F < x[P].length; F++) {
                    var $ = x[P][F];
                    G.remove($), B.add($);
                  }
                }
              });
            }, C.prototype.clearCompounds = function() {
              var b = {}, x = {};
              this.performDFSOnCompounds();
              for (var w = 0; w < this.compoundOrder.length; w++)
                x[this.compoundOrder[w].id] = this.compoundOrder[w], b[this.compoundOrder[w].id] = [].concat(this.compoundOrder[w].getChild().getNodes()), this.graphManager.remove(this.compoundOrder[w].getChild()), this.compoundOrder[w].child = null;
              this.graphManager.resetAllNodes(), this.tileCompoundMembers(b, x);
            }, C.prototype.clearZeroDegreeMembers = function() {
              var b = this, x = this.tiledZeroDegreePack = [];
              Object.keys(this.memberGroups).forEach(function(w) {
                var D = b.idToDummyNode[w];
                x[w] = b.tileNodes(b.memberGroups[w], D.paddingLeft + D.paddingRight), D.rect.width = x[w].width, D.rect.height = x[w].height;
              });
            }, C.prototype.repopulateCompounds = function() {
              for (var b = this.compoundOrder.length - 1; b >= 0; b--) {
                var x = this.compoundOrder[b], w = x.id, D = x.paddingLeft, A = x.paddingTop;
                this.adjustLocations(this.tiledMemberPack[w], x.rect.x, x.rect.y, D, A);
              }
            }, C.prototype.repopulateZeroDegreeMembers = function() {
              var b = this, x = this.tiledZeroDegreePack;
              Object.keys(x).forEach(function(w) {
                var D = b.idToDummyNode[w], A = D.paddingLeft, L = D.paddingTop;
                b.adjustLocations(x[w], D.rect.x, D.rect.y, A, L);
              });
            }, C.prototype.getToBeTiled = function(b) {
              var x = b.id;
              if (this.toBeTiled[x] != null)
                return this.toBeTiled[x];
              var w = b.getChild();
              if (w == null)
                return this.toBeTiled[x] = !1, !1;
              for (var D = w.getNodes(), A = 0; A < D.length; A++) {
                var L = D[A];
                if (this.getNodeDegree(L) > 0)
                  return this.toBeTiled[x] = !1, !1;
                if (L.getChild() == null) {
                  this.toBeTiled[L.id] = !1;
                  continue;
                }
                if (!this.getToBeTiled(L))
                  return this.toBeTiled[x] = !1, !1;
              }
              return this.toBeTiled[x] = !0, !0;
            }, C.prototype.getNodeDegree = function(b) {
              b.id;
              for (var x = b.getEdges(), w = 0, D = 0; D < x.length; D++) {
                var A = x[D];
                A.getSource().id !== A.getTarget().id && (w = w + 1);
              }
              return w;
            }, C.prototype.getNodeDegreeWithChildren = function(b) {
              var x = this.getNodeDegree(b);
              if (b.getChild() == null)
                return x;
              for (var w = b.getChild().getNodes(), D = 0; D < w.length; D++) {
                var A = w[D];
                x += this.getNodeDegreeWithChildren(A);
              }
              return x;
            }, C.prototype.performDFSOnCompounds = function() {
              this.compoundOrder = [], this.fillCompexOrderByDFS(this.graphManager.getRoot().getNodes());
            }, C.prototype.fillCompexOrderByDFS = function(b) {
              for (var x = 0; x < b.length; x++) {
                var w = b[x];
                w.getChild() != null && this.fillCompexOrderByDFS(w.getChild().getNodes()), this.getToBeTiled(w) && this.compoundOrder.push(w);
              }
            }, C.prototype.adjustLocations = function(b, x, w, D, A) {
              x += D, w += A;
              for (var L = x, I = 0; I < b.rows.length; I++) {
                var O = b.rows[I];
                x = L;
                for (var P = 0, R = 0; R < O.length; R++) {
                  var M = O[R];
                  M.rect.x = x, M.rect.y = w, x += M.rect.width + b.horizontalPadding, M.rect.height > P && (P = M.rect.height);
                }
                w += P + b.verticalPadding;
              }
            }, C.prototype.tileCompoundMembers = function(b, x) {
              var w = this;
              this.tiledMemberPack = [], Object.keys(b).forEach(function(D) {
                var A = x[D];
                w.tiledMemberPack[D] = w.tileNodes(b[D], A.paddingLeft + A.paddingRight), A.rect.width = w.tiledMemberPack[D].width, A.rect.height = w.tiledMemberPack[D].height;
              });
            }, C.prototype.tileNodes = function(b, x) {
              var w = h.TILING_PADDING_VERTICAL, D = h.TILING_PADDING_HORIZONTAL, A = {
                rows: [],
                rowWidth: [],
                rowHeight: [],
                width: 0,
                height: x,
                // assume minHeight equals to minWidth
                verticalPadding: w,
                horizontalPadding: D
              };
              b.sort(function(O, P) {
                return O.rect.width * O.rect.height > P.rect.width * P.rect.height ? -1 : O.rect.width * O.rect.height < P.rect.width * P.rect.height ? 1 : 0;
              });
              for (var L = 0; L < b.length; L++) {
                var I = b[L];
                A.rows.length == 0 ? this.insertNodeToRow(A, I, 0, x) : this.canAddHorizontal(A, I.rect.width, I.rect.height) ? this.insertNodeToRow(A, I, this.getShortestRowIndex(A), x) : this.insertNodeToRow(A, I, A.rows.length, x), this.shiftToLastRow(A);
              }
              return A;
            }, C.prototype.insertNodeToRow = function(b, x, w, D) {
              var A = D;
              if (w == b.rows.length) {
                var L = [];
                b.rows.push(L), b.rowWidth.push(A), b.rowHeight.push(0);
              }
              var I = b.rowWidth[w] + x.rect.width;
              b.rows[w].length > 0 && (I += b.horizontalPadding), b.rowWidth[w] = I, b.width < I && (b.width = I);
              var O = x.rect.height;
              w > 0 && (O += b.verticalPadding);
              var P = 0;
              O > b.rowHeight[w] && (P = b.rowHeight[w], b.rowHeight[w] = O, P = b.rowHeight[w] - P), b.height += P, b.rows[w].push(x);
            }, C.prototype.getShortestRowIndex = function(b) {
              for (var x = -1, w = Number.MAX_VALUE, D = 0; D < b.rows.length; D++)
                b.rowWidth[D] < w && (x = D, w = b.rowWidth[D]);
              return x;
            }, C.prototype.getLongestRowIndex = function(b) {
              for (var x = -1, w = Number.MIN_VALUE, D = 0; D < b.rows.length; D++)
                b.rowWidth[D] > w && (x = D, w = b.rowWidth[D]);
              return x;
            }, C.prototype.canAddHorizontal = function(b, x, w) {
              var D = this.getShortestRowIndex(b);
              if (D < 0)
                return !0;
              var A = b.rowWidth[D];
              if (A + b.horizontalPadding + x <= b.width)
                return !0;
              var L = 0;
              b.rowHeight[D] < w && D > 0 && (L = w + b.verticalPadding - b.rowHeight[D]);
              var I;
              b.width - A >= x + b.horizontalPadding ? I = (b.height + L) / (A + x + b.horizontalPadding) : I = (b.height + L) / b.width, L = w + b.verticalPadding;
              var O;
              return b.width < x ? O = (b.height + L) / x : O = (b.height + L) / b.width, O < 1 && (O = 1 / O), I < 1 && (I = 1 / I), I < O;
            }, C.prototype.shiftToLastRow = function(b) {
              var x = this.getLongestRowIndex(b), w = b.rowWidth.length - 1, D = b.rows[x], A = D[D.length - 1], L = A.width + b.horizontalPadding;
              if (b.width - b.rowWidth[w] > L && x != w) {
                D.splice(-1, 1), b.rows[w].push(A), b.rowWidth[x] = b.rowWidth[x] - L, b.rowWidth[w] = b.rowWidth[w] + L, b.width = b.rowWidth[instance.getLongestRowIndex(b)];
                for (var I = Number.MIN_VALUE, O = 0; O < D.length; O++)
                  D[O].height > I && (I = D[O].height);
                x > 0 && (I += b.verticalPadding);
                var P = b.rowHeight[x] + b.rowHeight[w];
                b.rowHeight[x] = I, b.rowHeight[w] < A.height + b.verticalPadding && (b.rowHeight[w] = A.height + b.verticalPadding);
                var R = b.rowHeight[x] + b.rowHeight[w];
                b.height += R - P, this.shiftToLastRow(b);
              }
            }, C.prototype.tilingPreLayout = function() {
              h.TILE && (this.groupZeroDegreeMembers(), this.clearCompounds(), this.clearZeroDegreeMembers());
            }, C.prototype.tilingPostLayout = function() {
              h.TILE && (this.repopulateZeroDegreeMembers(), this.repopulateCompounds());
            }, C.prototype.reduceTrees = function() {
              for (var b = [], x = !0, w; x; ) {
                var D = this.graphManager.getAllNodes(), A = [];
                x = !1;
                for (var L = 0; L < D.length; L++)
                  w = D[L], w.getEdges().length == 1 && !w.getEdges()[0].isInterGraph && w.getChild() == null && (A.push([w, w.getEdges()[0], w.getOwner()]), x = !0);
                if (x == !0) {
                  for (var I = [], O = 0; O < A.length; O++)
                    A[O][0].getEdges().length == 1 && (I.push(A[O]), A[O][0].getOwner().remove(A[O][0]));
                  b.push(I), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
                }
              }
              this.prunedNodesAll = b;
            }, C.prototype.growTree = function(b) {
              for (var x = b.length, w = b[x - 1], D, A = 0; A < w.length; A++)
                D = w[A], this.findPlaceforPrunedNode(D), D[2].add(D[0]), D[2].add(D[1], D[1].source, D[1].target);
              b.splice(b.length - 1, 1), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
            }, C.prototype.findPlaceforPrunedNode = function(b) {
              var x, w, D = b[0];
              D == b[1].source ? w = b[1].target : w = b[1].source;
              var A = w.startX, L = w.finishX, I = w.startY, O = w.finishY, P = 0, R = 0, M = 0, k = 0, B = [P, M, R, k];
              if (I > 0)
                for (var G = A; G <= L; G++)
                  B[0] += this.grid[G][I - 1].length + this.grid[G][I].length - 1;
              if (L < this.grid.length - 1)
                for (var G = I; G <= O; G++)
                  B[1] += this.grid[L + 1][G].length + this.grid[L][G].length - 1;
              if (O < this.grid[0].length - 1)
                for (var G = A; G <= L; G++)
                  B[2] += this.grid[G][O + 1].length + this.grid[G][O].length - 1;
              if (A > 0)
                for (var G = I; G <= O; G++)
                  B[3] += this.grid[A - 1][G].length + this.grid[A][G].length - 1;
              for (var F = y.MAX_VALUE, $, U, _ = 0; _ < B.length; _++)
                B[_] < F ? (F = B[_], $ = 1, U = _) : B[_] == F && $++;
              if ($ == 3 && F == 0)
                B[0] == 0 && B[1] == 0 && B[2] == 0 ? x = 1 : B[0] == 0 && B[1] == 0 && B[3] == 0 ? x = 0 : B[0] == 0 && B[2] == 0 && B[3] == 0 ? x = 3 : B[1] == 0 && B[2] == 0 && B[3] == 0 && (x = 2);
              else if ($ == 2 && F == 0) {
                var Y = Math.floor(Math.random() * 2);
                B[0] == 0 && B[1] == 0 ? Y == 0 ? x = 0 : x = 1 : B[0] == 0 && B[2] == 0 ? Y == 0 ? x = 0 : x = 2 : B[0] == 0 && B[3] == 0 ? Y == 0 ? x = 0 : x = 3 : B[1] == 0 && B[2] == 0 ? Y == 0 ? x = 1 : x = 2 : B[1] == 0 && B[3] == 0 ? Y == 0 ? x = 1 : x = 3 : Y == 0 ? x = 2 : x = 3;
              } else if ($ == 4 && F == 0) {
                var Y = Math.floor(Math.random() * 4);
                x = Y;
              } else
                x = U;
              x == 0 ? D.setCenter(w.getCenterX(), w.getCenterY() - w.getHeight() / 2 - c.DEFAULT_EDGE_LENGTH - D.getHeight() / 2) : x == 1 ? D.setCenter(w.getCenterX() + w.getWidth() / 2 + c.DEFAULT_EDGE_LENGTH + D.getWidth() / 2, w.getCenterY()) : x == 2 ? D.setCenter(w.getCenterX(), w.getCenterY() + w.getHeight() / 2 + c.DEFAULT_EDGE_LENGTH + D.getHeight() / 2) : D.setCenter(w.getCenterX() - w.getWidth() / 2 - c.DEFAULT_EDGE_LENGTH - D.getWidth() / 2, w.getCenterY());
            }, a.exports = C;
          },
          /* 7 */
          /***/
          function(a, n, i) {
            var s = {};
            s.layoutBase = i(0), s.CoSEConstants = i(1), s.CoSEEdge = i(2), s.CoSEGraph = i(3), s.CoSEGraphManager = i(4), s.CoSELayout = i(6), s.CoSENode = i(5), a.exports = s;
          }
          /******/
        ])
      );
    });
  }(Bn)), Bn.exports;
}
(function(t, e) {
  (function(a, n) {
    t.exports = n(xm());
  })(Vt, function(r) {
    return (
      /******/
      function(a) {
        var n = {};
        function i(s) {
          if (n[s])
            return n[s].exports;
          var o = n[s] = {
            /******/
            i: s,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return a[s].call(o.exports, o, o.exports, i), o.l = !0, o.exports;
        }
        return i.m = a, i.c = n, i.i = function(s) {
          return s;
        }, i.d = function(s, o, l) {
          i.o(s, o) || Object.defineProperty(s, o, {
            /******/
            configurable: !1,
            /******/
            enumerable: !0,
            /******/
            get: l
            /******/
          });
        }, i.n = function(s) {
          var o = s && s.__esModule ? (
            /******/
            function() {
              return s.default;
            }
          ) : (
            /******/
            function() {
              return s;
            }
          );
          return i.d(o, "a", o), o;
        }, i.o = function(s, o) {
          return Object.prototype.hasOwnProperty.call(s, o);
        }, i.p = "", i(i.s = 1);
      }([
        /* 0 */
        /***/
        function(a, n) {
          a.exports = r;
        },
        /* 1 */
        /***/
        function(a, n, i) {
          var s = i(0).layoutBase.LayoutConstants, o = i(0).layoutBase.FDLayoutConstants, l = i(0).CoSEConstants, u = i(0).CoSELayout, f = i(0).CoSENode, h = i(0).layoutBase.PointD, c = i(0).layoutBase.DimensionD, v = {
            // Called on `layoutready`
            ready: function() {
            },
            // Called on `layoutstop`
            stop: function() {
            },
            // 'draft', 'default' or 'proof" 
            // - 'draft' fast cooling rate 
            // - 'default' moderate cooling rate 
            // - "proof" slow cooling rate
            quality: "default",
            // include labels in node dimensions
            nodeDimensionsIncludeLabels: !1,
            // number of ticks per frame; higher is faster but more jerky
            refresh: 30,
            // Whether to fit the network view after when done
            fit: !0,
            // Padding on fit
            padding: 10,
            // Whether to enable incremental mode
            randomize: !0,
            // Node repulsion (non overlapping) multiplier
            nodeRepulsion: 4500,
            // Ideal edge (non nested) length
            idealEdgeLength: 50,
            // Divisor to compute edge forces
            edgeElasticity: 0.45,
            // Nesting factor (multiplier) to compute ideal edge length for nested edges
            nestingFactor: 0.1,
            // Gravity force (constant)
            gravity: 0.25,
            // Maximum number of iterations to perform
            numIter: 2500,
            // For enabling tiling
            tile: !0,
            // Type of layout animation. The option set is {'during', 'end', false}
            animate: "end",
            // Duration for animate:end
            animationDuration: 500,
            // Represents the amount of the vertical space to put between the zero degree members during the tiling operation(can also be a function)
            tilingPaddingVertical: 10,
            // Represents the amount of the horizontal space to put between the zero degree members during the tiling operation(can also be a function)
            tilingPaddingHorizontal: 10,
            // Gravity range (constant) for compounds
            gravityRangeCompound: 1.5,
            // Gravity force (constant) for compounds
            gravityCompound: 1,
            // Gravity range (constant)
            gravityRange: 3.8,
            // Initial cooling factor for incremental layout
            initialEnergyOnIncremental: 0.5
          };
          function d(E, m) {
            var T = {};
            for (var C in E)
              T[C] = E[C];
            for (var C in m)
              T[C] = m[C];
            return T;
          }
          function g(E) {
            this.options = d(v, E), p(this.options);
          }
          var p = function(m) {
            m.nodeRepulsion != null && (l.DEFAULT_REPULSION_STRENGTH = o.DEFAULT_REPULSION_STRENGTH = m.nodeRepulsion), m.idealEdgeLength != null && (l.DEFAULT_EDGE_LENGTH = o.DEFAULT_EDGE_LENGTH = m.idealEdgeLength), m.edgeElasticity != null && (l.DEFAULT_SPRING_STRENGTH = o.DEFAULT_SPRING_STRENGTH = m.edgeElasticity), m.nestingFactor != null && (l.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = o.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = m.nestingFactor), m.gravity != null && (l.DEFAULT_GRAVITY_STRENGTH = o.DEFAULT_GRAVITY_STRENGTH = m.gravity), m.numIter != null && (l.MAX_ITERATIONS = o.MAX_ITERATIONS = m.numIter), m.gravityRange != null && (l.DEFAULT_GRAVITY_RANGE_FACTOR = o.DEFAULT_GRAVITY_RANGE_FACTOR = m.gravityRange), m.gravityCompound != null && (l.DEFAULT_COMPOUND_GRAVITY_STRENGTH = o.DEFAULT_COMPOUND_GRAVITY_STRENGTH = m.gravityCompound), m.gravityRangeCompound != null && (l.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = o.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = m.gravityRangeCompound), m.initialEnergyOnIncremental != null && (l.DEFAULT_COOLING_FACTOR_INCREMENTAL = o.DEFAULT_COOLING_FACTOR_INCREMENTAL = m.initialEnergyOnIncremental), m.quality == "draft" ? s.QUALITY = 0 : m.quality == "proof" ? s.QUALITY = 2 : s.QUALITY = 1, l.NODE_DIMENSIONS_INCLUDE_LABELS = o.NODE_DIMENSIONS_INCLUDE_LABELS = s.NODE_DIMENSIONS_INCLUDE_LABELS = m.nodeDimensionsIncludeLabels, l.DEFAULT_INCREMENTAL = o.DEFAULT_INCREMENTAL = s.DEFAULT_INCREMENTAL = !m.randomize, l.ANIMATE = o.ANIMATE = s.ANIMATE = m.animate, l.TILE = m.tile, l.TILING_PADDING_VERTICAL = typeof m.tilingPaddingVertical == "function" ? m.tilingPaddingVertical.call() : m.tilingPaddingVertical, l.TILING_PADDING_HORIZONTAL = typeof m.tilingPaddingHorizontal == "function" ? m.tilingPaddingHorizontal.call() : m.tilingPaddingHorizontal;
          };
          g.prototype.run = function() {
            var E, m, T = this.options;
            this.idToLNode = {};
            var C = this.layout = new u(), S = this;
            S.stopped = !1, this.cy = this.options.cy, this.cy.trigger({ type: "layoutstart", layout: this });
            var b = C.newGraphManager();
            this.gm = b;
            var x = this.options.eles.nodes(), w = this.options.eles.edges();
            this.root = b.addRoot(), this.processChildrenList(this.root, this.getTopMostNodes(x), C);
            for (var D = 0; D < w.length; D++) {
              var A = w[D], L = this.idToLNode[A.data("source")], I = this.idToLNode[A.data("target")];
              if (L !== I && L.getEdgesBetween(I).length == 0) {
                var O = b.add(C.newEdge(), L, I);
                O.id = A.id();
              }
            }
            var P = function(k, B) {
              typeof k == "number" && (k = B);
              var G = k.data("id"), F = S.idToLNode[G];
              return {
                x: F.getRect().getCenterX(),
                y: F.getRect().getCenterY()
              };
            }, R = function M() {
              for (var k = function() {
                T.fit && T.cy.fit(T.eles, T.padding), E || (E = !0, S.cy.one("layoutready", T.ready), S.cy.trigger({ type: "layoutready", layout: S }));
              }, B = S.options.refresh, G, F = 0; F < B && !G; F++)
                G = S.stopped || S.layout.tick();
              if (G) {
                C.checkLayoutSuccess() && !C.isSubLayout && C.doPostLayout(), C.tilingPostLayout && C.tilingPostLayout(), C.isLayoutFinished = !0, S.options.eles.nodes().positions(P), k(), S.cy.one("layoutstop", S.options.stop), S.cy.trigger({ type: "layoutstop", layout: S }), m && cancelAnimationFrame(m), E = !1;
                return;
              }
              var $ = S.layout.getPositionsData();
              T.eles.nodes().positions(function(U, _) {
                if (typeof U == "number" && (U = _), !U.isParent()) {
                  for (var Y = U.id(), W = $[Y], z = U; W == null && (W = $[z.data("parent")] || $["DummyCompound_" + z.data("parent")], $[Y] = W, z = z.parent()[0], z != null); )
                    ;
                  return W != null ? {
                    x: W.x,
                    y: W.y
                  } : {
                    x: U.position("x"),
                    y: U.position("y")
                  };
                }
              }), k(), m = requestAnimationFrame(M);
            };
            return C.addListener("layoutstarted", function() {
              S.options.animate === "during" && (m = requestAnimationFrame(R));
            }), C.runLayout(), this.options.animate !== "during" && (S.options.eles.nodes().not(":parent").layoutPositions(S, S.options, P), E = !1), this;
          }, g.prototype.getTopMostNodes = function(E) {
            for (var m = {}, T = 0; T < E.length; T++)
              m[E[T].id()] = !0;
            var C = E.filter(function(S, b) {
              typeof S == "number" && (S = b);
              for (var x = S.parent()[0]; x != null; ) {
                if (m[x.id()])
                  return !1;
                x = x.parent()[0];
              }
              return !0;
            });
            return C;
          }, g.prototype.processChildrenList = function(E, m, T) {
            for (var C = m.length, S = 0; S < C; S++) {
              var b = m[S], x = b.children(), w, D = b.layoutDimensions({
                nodeDimensionsIncludeLabels: this.options.nodeDimensionsIncludeLabels
              });
              if (b.outerWidth() != null && b.outerHeight() != null ? w = E.add(new f(T.graphManager, new h(b.position("x") - D.w / 2, b.position("y") - D.h / 2), new c(parseFloat(D.w), parseFloat(D.h)))) : w = E.add(new f(this.graphManager)), w.id = b.data("id"), w.paddingLeft = parseInt(b.css("padding")), w.paddingTop = parseInt(b.css("padding")), w.paddingRight = parseInt(b.css("padding")), w.paddingBottom = parseInt(b.css("padding")), this.options.nodeDimensionsIncludeLabels && b.isParent()) {
                var A = b.boundingBox({ includeLabels: !0, includeNodes: !1 }).w, L = b.boundingBox({ includeLabels: !0, includeNodes: !1 }).h, I = b.css("text-halign");
                w.labelWidth = A, w.labelHeight = L, w.labelPos = I;
              }
              if (this.idToLNode[b.data("id")] = w, isNaN(w.rect.x) && (w.rect.x = 0), isNaN(w.rect.y) && (w.rect.y = 0), x != null && x.length > 0) {
                var O;
                O = T.getGraphManager().add(T.newGraph(), w), this.processChildrenList(O, x, T);
              }
            }
          }, g.prototype.stop = function() {
            return this.stopped = !0, this;
          };
          var y = function(m) {
            m("layout", "cose-bilkent", g);
          };
          typeof cytoscape != "undefined" && y(cytoscape), a.exports = y;
        }
        /******/
      ])
    );
  });
})(Nl);
var Tm = Nl.exports;
const Cm = /* @__PURE__ */ Xs(Tm);
var Zn = function() {
  var t = function(T, C, S, b) {
    for (S = S || {}, b = T.length; b--; S[T[b]] = C)
      ;
    return S;
  }, e = [1, 4], r = [1, 13], a = [1, 12], n = [1, 15], i = [1, 16], s = [1, 20], o = [1, 19], l = [6, 7, 8], u = [1, 26], f = [1, 24], h = [1, 25], c = [6, 7, 11], v = [1, 6, 13, 15, 16, 19, 22], d = [1, 33], g = [1, 34], p = [1, 6, 7, 11, 13, 15, 16, 19, 22], y = {
    trace: function() {
    },
    yy: {},
    symbols_: { error: 2, start: 3, mindMap: 4, spaceLines: 5, SPACELINE: 6, NL: 7, MINDMAP: 8, document: 9, stop: 10, EOF: 11, statement: 12, SPACELIST: 13, node: 14, ICON: 15, CLASS: 16, nodeWithId: 17, nodeWithoutId: 18, NODE_DSTART: 19, NODE_DESCR: 20, NODE_DEND: 21, NODE_ID: 22, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 6: "SPACELINE", 7: "NL", 8: "MINDMAP", 11: "EOF", 13: "SPACELIST", 15: "ICON", 16: "CLASS", 19: "NODE_DSTART", 20: "NODE_DESCR", 21: "NODE_DEND", 22: "NODE_ID" },
    productions_: [0, [3, 1], [3, 2], [5, 1], [5, 2], [5, 2], [4, 2], [4, 3], [10, 1], [10, 1], [10, 1], [10, 2], [10, 2], [9, 3], [9, 2], [12, 2], [12, 2], [12, 2], [12, 1], [12, 1], [12, 1], [12, 1], [12, 1], [14, 1], [14, 1], [18, 3], [17, 1], [17, 4]],
    performAction: function(C, S, b, x, w, D, A) {
      var L = D.length - 1;
      switch (w) {
        case 6:
        case 7:
          return x;
        case 8:
          x.getLogger().trace("Stop NL ");
          break;
        case 9:
          x.getLogger().trace("Stop EOF ");
          break;
        case 11:
          x.getLogger().trace("Stop NL2 ");
          break;
        case 12:
          x.getLogger().trace("Stop EOF2 ");
          break;
        case 15:
          x.getLogger().info("Node: ", D[L].id), x.addNode(D[L - 1].length, D[L].id, D[L].descr, D[L].type);
          break;
        case 16:
          x.getLogger().trace("Icon: ", D[L]), x.decorateNode({ icon: D[L] });
          break;
        case 17:
        case 21:
          x.decorateNode({ class: D[L] });
          break;
        case 18:
          x.getLogger().trace("SPACELIST");
          break;
        case 19:
          x.getLogger().trace("Node: ", D[L].id), x.addNode(0, D[L].id, D[L].descr, D[L].type);
          break;
        case 20:
          x.decorateNode({ icon: D[L] });
          break;
        case 25:
          x.getLogger().trace("node found ..", D[L - 2]), this.$ = { id: D[L - 1], descr: D[L - 1], type: x.getType(D[L - 2], D[L]) };
          break;
        case 26:
          this.$ = { id: D[L], descr: D[L], type: x.nodeType.DEFAULT };
          break;
        case 27:
          x.getLogger().trace("node found ..", D[L - 3]), this.$ = { id: D[L - 3], descr: D[L - 1], type: x.getType(D[L - 2], D[L]) };
          break;
      }
    },
    table: [{ 3: 1, 4: 2, 5: 3, 6: [1, 5], 8: e }, { 1: [3] }, { 1: [2, 1] }, { 4: 6, 6: [1, 7], 7: [1, 8], 8: e }, { 6: r, 7: [1, 10], 9: 9, 12: 11, 13: a, 14: 14, 15: n, 16: i, 17: 17, 18: 18, 19: s, 22: o }, t(l, [2, 3]), { 1: [2, 2] }, t(l, [2, 4]), t(l, [2, 5]), { 1: [2, 6], 6: r, 12: 21, 13: a, 14: 14, 15: n, 16: i, 17: 17, 18: 18, 19: s, 22: o }, { 6: r, 9: 22, 12: 11, 13: a, 14: 14, 15: n, 16: i, 17: 17, 18: 18, 19: s, 22: o }, { 6: u, 7: f, 10: 23, 11: h }, t(c, [2, 22], { 17: 17, 18: 18, 14: 27, 15: [1, 28], 16: [1, 29], 19: s, 22: o }), t(c, [2, 18]), t(c, [2, 19]), t(c, [2, 20]), t(c, [2, 21]), t(c, [2, 23]), t(c, [2, 24]), t(c, [2, 26], { 19: [1, 30] }), { 20: [1, 31] }, { 6: u, 7: f, 10: 32, 11: h }, { 1: [2, 7], 6: r, 12: 21, 13: a, 14: 14, 15: n, 16: i, 17: 17, 18: 18, 19: s, 22: o }, t(v, [2, 14], { 7: d, 11: g }), t(p, [2, 8]), t(p, [2, 9]), t(p, [2, 10]), t(c, [2, 15]), t(c, [2, 16]), t(c, [2, 17]), { 20: [1, 35] }, { 21: [1, 36] }, t(v, [2, 13], { 7: d, 11: g }), t(p, [2, 11]), t(p, [2, 12]), { 21: [1, 37] }, t(c, [2, 25]), t(c, [2, 27])],
    defaultActions: { 2: [2, 1], 6: [2, 2] },
    parseError: function(C, S) {
      if (S.recoverable)
        this.trace(C);
      else {
        var b = new Error(C);
        throw b.hash = S, b;
      }
    },
    parse: function(C) {
      var S = this, b = [0], x = [], w = [null], D = [], A = this.table, L = "", I = 0, O = 0, P = 2, R = 1, M = D.slice.call(arguments, 1), k = Object.create(this.lexer), B = { yy: {} };
      for (var G in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, G) && (B.yy[G] = this.yy[G]);
      k.setInput(C, B.yy), B.yy.lexer = k, B.yy.parser = this, typeof k.yylloc == "undefined" && (k.yylloc = {});
      var F = k.yylloc;
      D.push(F);
      var $ = k.options && k.options.ranges;
      typeof B.yy.parseError == "function" ? this.parseError = B.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function U() {
        var te;
        return te = x.pop() || k.lex() || R, typeof te != "number" && (te instanceof Array && (x = te, te = x.pop()), te = S.symbols_[te] || te), te;
      }
      for (var _, Y, W, z, K = {}, j, Q, ee, ne; ; ) {
        if (Y = b[b.length - 1], this.defaultActions[Y] ? W = this.defaultActions[Y] : ((_ === null || typeof _ == "undefined") && (_ = U()), W = A[Y] && A[Y][_]), typeof W == "undefined" || !W.length || !W[0]) {
          var ce = "";
          ne = [];
          for (j in A[Y])
            this.terminals_[j] && j > P && ne.push("'" + this.terminals_[j] + "'");
          k.showPosition ? ce = "Parse error on line " + (I + 1) + `:
` + k.showPosition() + `
Expecting ` + ne.join(", ") + ", got '" + (this.terminals_[_] || _) + "'" : ce = "Parse error on line " + (I + 1) + ": Unexpected " + (_ == R ? "end of input" : "'" + (this.terminals_[_] || _) + "'"), this.parseError(ce, {
            text: k.match,
            token: this.terminals_[_] || _,
            line: k.yylineno,
            loc: F,
            expected: ne
          });
        }
        if (W[0] instanceof Array && W.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + Y + ", token: " + _);
        switch (W[0]) {
          case 1:
            b.push(_), w.push(k.yytext), D.push(k.yylloc), b.push(W[1]), _ = null, O = k.yyleng, L = k.yytext, I = k.yylineno, F = k.yylloc;
            break;
          case 2:
            if (Q = this.productions_[W[1]][1], K.$ = w[w.length - Q], K._$ = {
              first_line: D[D.length - (Q || 1)].first_line,
              last_line: D[D.length - 1].last_line,
              first_column: D[D.length - (Q || 1)].first_column,
              last_column: D[D.length - 1].last_column
            }, $ && (K._$.range = [
              D[D.length - (Q || 1)].range[0],
              D[D.length - 1].range[1]
            ]), z = this.performAction.apply(K, [
              L,
              O,
              I,
              B.yy,
              W[1],
              w,
              D
            ].concat(M)), typeof z != "undefined")
              return z;
            Q && (b = b.slice(0, -1 * Q * 2), w = w.slice(0, -1 * Q), D = D.slice(0, -1 * Q)), b.push(this.productions_[W[1]][0]), w.push(K.$), D.push(K._$), ee = A[b[b.length - 2]][b[b.length - 1]], b.push(ee);
            break;
          case 3:
            return !0;
        }
      }
      return !0;
    }
  }, E = function() {
    var T = {
      EOF: 1,
      parseError: function(S, b) {
        if (this.yy.parser)
          this.yy.parser.parseError(S, b);
        else
          throw new Error(S);
      },
      // resets the lexer, sets new input
      setInput: function(C, S) {
        return this.yy = S || this.yy || {}, this._input = C, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      },
      // consumes and returns one char from the input
      input: function() {
        var C = this._input[0];
        this.yytext += C, this.yyleng++, this.offset++, this.match += C, this.matched += C;
        var S = C.match(/(?:\r\n?|\n).*/g);
        return S ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), C;
      },
      // unshifts one char (or a string) into the input
      unput: function(C) {
        var S = C.length, b = C.split(/(?:\r\n?|\n)/g);
        this._input = C + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - S), this.offset -= S;
        var x = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), b.length - 1 && (this.yylineno -= b.length - 1);
        var w = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: b ? (b.length === x.length ? this.yylloc.first_column : 0) + x[x.length - b.length].length - b[0].length : this.yylloc.first_column - S
        }, this.options.ranges && (this.yylloc.range = [w[0], w[0] + this.yyleng - S]), this.yyleng = this.yytext.length, this;
      },
      // When called from action, caches matched text and appends it on next action
      more: function() {
        return this._more = !0, this;
      },
      // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
      reject: function() {
        if (this.options.backtrack_lexer)
          this._backtrack = !0;
        else
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        return this;
      },
      // retain first n characters of the match
      less: function(C) {
        this.unput(this.match.slice(C));
      },
      // displays already matched input, i.e. for error messages
      pastInput: function() {
        var C = this.matched.substr(0, this.matched.length - this.match.length);
        return (C.length > 20 ? "..." : "") + C.substr(-20).replace(/\n/g, "");
      },
      // displays upcoming input, i.e. for error messages
      upcomingInput: function() {
        var C = this.match;
        return C.length < 20 && (C += this._input.substr(0, 20 - C.length)), (C.substr(0, 20) + (C.length > 20 ? "..." : "")).replace(/\n/g, "");
      },
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: function() {
        var C = this.pastInput(), S = new Array(C.length + 1).join("-");
        return C + this.upcomingInput() + `
` + S + "^";
      },
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: function(C, S) {
        var b, x, w;
        if (this.options.backtrack_lexer && (w = {
          yylineno: this.yylineno,
          yylloc: {
            first_line: this.yylloc.first_line,
            last_line: this.last_line,
            first_column: this.yylloc.first_column,
            last_column: this.yylloc.last_column
          },
          yytext: this.yytext,
          match: this.match,
          matches: this.matches,
          matched: this.matched,
          yyleng: this.yyleng,
          offset: this.offset,
          _more: this._more,
          _input: this._input,
          yy: this.yy,
          conditionStack: this.conditionStack.slice(0),
          done: this.done
        }, this.options.ranges && (w.yylloc.range = this.yylloc.range.slice(0))), x = C[0].match(/(?:\r\n?|\n).*/g), x && (this.yylineno += x.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: x ? x[x.length - 1].length - x[x.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + C[0].length
        }, this.yytext += C[0], this.match += C[0], this.matches = C, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(C[0].length), this.matched += C[0], b = this.performAction.call(this, this.yy, this, S, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), b)
          return b;
        if (this._backtrack) {
          for (var D in w)
            this[D] = w[D];
          return !1;
        }
        return !1;
      },
      // return next match in input
      next: function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = !0);
        var C, S, b, x;
        this._more || (this.yytext = "", this.match = "");
        for (var w = this._currentRules(), D = 0; D < w.length; D++)
          if (b = this._input.match(this.rules[w[D]]), b && (!S || b[0].length > S[0].length)) {
            if (S = b, x = D, this.options.backtrack_lexer) {
              if (C = this.test_match(b, w[D]), C !== !1)
                return C;
              if (this._backtrack) {
                S = !1;
                continue;
              } else
                return !1;
            } else if (!this.options.flex)
              break;
          }
        return S ? (C = this.test_match(S, w[x]), C !== !1 ? C : !1) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      },
      // return next match that has a token
      lex: function() {
        var S = this.next();
        return S || this.lex();
      },
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: function(S) {
        this.conditionStack.push(S);
      },
      // pop the previously active lexer condition state off the condition stack
      popState: function() {
        var S = this.conditionStack.length - 1;
        return S > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      },
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      },
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: function(S) {
        return S = this.conditionStack.length - 1 - Math.abs(S || 0), S >= 0 ? this.conditionStack[S] : "INITIAL";
      },
      // alias for begin(condition)
      pushState: function(S) {
        this.begin(S);
      },
      // return the number of states currently on the stack
      stateStackSize: function() {
        return this.conditionStack.length;
      },
      options: { "case-insensitive": !0 },
      performAction: function(S, b, x, w) {
        switch (x) {
          case 0:
            return S.getLogger().trace("Found comment", b.yytext), 6;
          case 1:
            return 8;
          case 2:
            this.begin("CLASS");
            break;
          case 3:
            return this.popState(), 16;
          case 4:
            this.popState();
            break;
          case 5:
            S.getLogger().trace("Begin icon"), this.begin("ICON");
            break;
          case 6:
            return S.getLogger().trace("SPACELINE"), 6;
          case 7:
            return 7;
          case 8:
            return 15;
          case 9:
            S.getLogger().trace("end icon"), this.popState();
            break;
          case 10:
            return S.getLogger().trace("Exploding node"), this.begin("NODE"), 19;
          case 11:
            return S.getLogger().trace("Cloud"), this.begin("NODE"), 19;
          case 12:
            return S.getLogger().trace("Explosion Bang"), this.begin("NODE"), 19;
          case 13:
            return S.getLogger().trace("Cloud Bang"), this.begin("NODE"), 19;
          case 14:
            return this.begin("NODE"), 19;
          case 15:
            return this.begin("NODE"), 19;
          case 16:
            return this.begin("NODE"), 19;
          case 17:
            return this.begin("NODE"), 19;
          case 18:
            return 13;
          case 19:
            return 22;
          case 20:
            return 11;
          case 21:
            this.begin("NSTR2");
            break;
          case 22:
            return "NODE_DESCR";
          case 23:
            this.popState();
            break;
          case 24:
            S.getLogger().trace("Starting NSTR"), this.begin("NSTR");
            break;
          case 25:
            return S.getLogger().trace("description:", b.yytext), "NODE_DESCR";
          case 26:
            this.popState();
            break;
          case 27:
            return this.popState(), S.getLogger().trace("node end ))"), "NODE_DEND";
          case 28:
            return this.popState(), S.getLogger().trace("node end )"), "NODE_DEND";
          case 29:
            return this.popState(), S.getLogger().trace("node end ...", b.yytext), "NODE_DEND";
          case 30:
            return this.popState(), S.getLogger().trace("node end (("), "NODE_DEND";
          case 31:
            return this.popState(), S.getLogger().trace("node end (-"), "NODE_DEND";
          case 32:
            return this.popState(), S.getLogger().trace("node end (-"), "NODE_DEND";
          case 33:
            return this.popState(), S.getLogger().trace("node end (("), "NODE_DEND";
          case 34:
            return this.popState(), S.getLogger().trace("node end (("), "NODE_DEND";
          case 35:
            return S.getLogger().trace("Long description:", b.yytext), 20;
          case 36:
            return S.getLogger().trace("Long description:", b.yytext), 20;
        }
      },
      rules: [/^(?:\s*%%.*)/i, /^(?:mindmap\b)/i, /^(?::::)/i, /^(?:.+)/i, /^(?:\n)/i, /^(?:::icon\()/i, /^(?:[\s]+[\n])/i, /^(?:[\n]+)/i, /^(?:[^\)]+)/i, /^(?:\))/i, /^(?:-\))/i, /^(?:\(-)/i, /^(?:\)\))/i, /^(?:\))/i, /^(?:\(\()/i, /^(?:\{\{)/i, /^(?:\()/i, /^(?:\[)/i, /^(?:[\s]+)/i, /^(?:[^\(\[\n\)\{\}]+)/i, /^(?:$)/i, /^(?:["][`])/i, /^(?:[^`"]+)/i, /^(?:[`]["])/i, /^(?:["])/i, /^(?:[^"]+)/i, /^(?:["])/i, /^(?:[\)]\))/i, /^(?:[\)])/i, /^(?:[\]])/i, /^(?:\}\})/i, /^(?:\(-)/i, /^(?:-\))/i, /^(?:\(\()/i, /^(?:\()/i, /^(?:[^\)\]\(\}]+)/i, /^(?:.+(?!\(\())/i],
      conditions: { CLASS: { rules: [3, 4], inclusive: !1 }, ICON: { rules: [8, 9], inclusive: !1 }, NSTR2: { rules: [22, 23], inclusive: !1 }, NSTR: { rules: [25, 26], inclusive: !1 }, NODE: { rules: [21, 24, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], inclusive: !1 }, INITIAL: { rules: [0, 1, 2, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], inclusive: !0 } }
    };
    return T;
  }();
  y.lexer = E;
  function m() {
    this.yy = {};
  }
  return m.prototype = y, y.Parser = m, new m();
}();
Zn.parser = Zn;
const Dm = Zn;
let Ct = [], Il = 0, xi = {};
const Sm = () => {
  Ct = [], Il = 0, xi = {};
}, Lm = function(t) {
  for (let e = Ct.length - 1; e >= 0; e--)
    if (Ct[e].level < t)
      return Ct[e];
  return null;
}, Am = () => Ct.length > 0 ? Ct[0] : null, Om = (t, e, r, a) => {
  var f, h;
  var n, i;
  ur.info("addNode", t, e, r, a);
  const s = Qn();
  let o = (f = (n = s.mindmap) == null ? void 0 : n.padding) != null ? f : _a.mindmap.padding;
  switch (a) {
    case Ve.ROUNDED_RECT:
    case Ve.RECT:
    case Ve.HEXAGON:
      o *= 2;
  }
  const l = {
    id: Il++,
    nodeId: Ua(e, s),
    level: t,
    descr: Ua(r, s),
    type: a,
    children: [],
    width: (h = (i = s.mindmap) == null ? void 0 : i.maxNodeWidth) != null ? h : _a.mindmap.maxNodeWidth,
    padding: o
  }, u = Lm(t);
  if (u)
    u.children.push(l), Ct.push(l);
  else if (Ct.length === 0)
    Ct.push(l);
  else
    throw new Error(
      'There can be only one root. No parent could be found for ("' + l.descr + '")'
    );
}, Ve = {
  DEFAULT: 0,
  NO_BORDER: 0,
  ROUNDED_RECT: 1,
  RECT: 2,
  CIRCLE: 3,
  CLOUD: 4,
  BANG: 5,
  HEXAGON: 6
}, Nm = (t, e) => {
  switch (ur.debug("In get type", t, e), t) {
    case "[":
      return Ve.RECT;
    case "(":
      return e === ")" ? Ve.ROUNDED_RECT : Ve.CLOUD;
    case "((":
      return Ve.CIRCLE;
    case ")":
      return Ve.CLOUD;
    case "))":
      return Ve.BANG;
    case "{{":
      return Ve.HEXAGON;
    default:
      return Ve.DEFAULT;
  }
}, Im = (t, e) => {
  xi[t] = e;
}, Mm = (t) => {
  if (!t)
    return;
  const e = Qn(), r = Ct[Ct.length - 1];
  t.icon && (r.icon = Ua(t.icon, e)), t.class && (r.class = Ua(t.class, e));
}, Rm = (t) => {
  switch (t) {
    case Ve.DEFAULT:
      return "no-border";
    case Ve.RECT:
      return "rect";
    case Ve.ROUNDED_RECT:
      return "rounded-rect";
    case Ve.CIRCLE:
      return "circle";
    case Ve.CLOUD:
      return "cloud";
    case Ve.BANG:
      return "bang";
    case Ve.HEXAGON:
      return "hexgon";
    default:
      return "no-border";
  }
}, km = () => ur, Pm = (t) => xi[t], Bm = {
  clear: Sm,
  addNode: Om,
  getMindmap: Am,
  nodeType: Ve,
  getType: Nm,
  setElementForId: Im,
  decorateNode: Mm,
  type2Str: Rm,
  getLogger: km,
  getElementById: Pm
}, Fm = Bm, Gm = 12, zm = function(t, e, r, a) {
  e.append("path").attr("id", "node-" + r.id).attr("class", "node-bkg node-" + t.type2Str(r.type)).attr(
    "d",
    `M0 ${r.height - 5} v${-r.height + 2 * 5} q0,-5 5,-5 h${r.width - 2 * 5} q5,0 5,5 v${r.height - 5} H0 Z`
  ), e.append("line").attr("class", "node-line-" + a).attr("x1", 0).attr("y1", r.height).attr("x2", r.width).attr("y2", r.height);
}, $m = function(t, e, r) {
  e.append("rect").attr("id", "node-" + r.id).attr("class", "node-bkg node-" + t.type2Str(r.type)).attr("height", r.height).attr("width", r.width);
}, Vm = function(t, e, r) {
  const a = r.width, n = r.height, i = 0.15 * a, s = 0.25 * a, o = 0.35 * a, l = 0.2 * a;
  e.append("path").attr("id", "node-" + r.id).attr("class", "node-bkg node-" + t.type2Str(r.type)).attr(
    "d",
    `M0 0 a${i},${i} 0 0,1 ${a * 0.25},${-1 * a * 0.1}
      a${o},${o} 1 0,1 ${a * 0.4},${-1 * a * 0.1}
      a${s},${s} 1 0,1 ${a * 0.35},${1 * a * 0.2}

      a${i},${i} 1 0,1 ${a * 0.15},${1 * n * 0.35}
      a${l},${l} 1 0,1 ${-1 * a * 0.15},${1 * n * 0.65}

      a${s},${i} 1 0,1 ${-1 * a * 0.25},${a * 0.15}
      a${o},${o} 1 0,1 ${-1 * a * 0.5},0
      a${i},${i} 1 0,1 ${-1 * a * 0.25},${-1 * a * 0.15}

      a${i},${i} 1 0,1 ${-1 * a * 0.1},${-1 * n * 0.35}
      a${l},${l} 1 0,1 ${a * 0.1},${-1 * n * 0.65}

    H0 V0 Z`
  );
}, _m = function(t, e, r) {
  const a = r.width, n = r.height, i = 0.15 * a;
  e.append("path").attr("id", "node-" + r.id).attr("class", "node-bkg node-" + t.type2Str(r.type)).attr(
    "d",
    `M0 0 a${i},${i} 1 0,0 ${a * 0.25},${-1 * n * 0.1}
      a${i},${i} 1 0,0 ${a * 0.25},0
      a${i},${i} 1 0,0 ${a * 0.25},0
      a${i},${i} 1 0,0 ${a * 0.25},${1 * n * 0.1}

      a${i},${i} 1 0,0 ${a * 0.15},${1 * n * 0.33}
      a${i * 0.8},${i * 0.8} 1 0,0 0,${1 * n * 0.34}
      a${i},${i} 1 0,0 ${-1 * a * 0.15},${1 * n * 0.33}

      a${i},${i} 1 0,0 ${-1 * a * 0.25},${n * 0.15}
      a${i},${i} 1 0,0 ${-1 * a * 0.25},0
      a${i},${i} 1 0,0 ${-1 * a * 0.25},0
      a${i},${i} 1 0,0 ${-1 * a * 0.25},${-1 * n * 0.15}

      a${i},${i} 1 0,0 ${-1 * a * 0.1},${-1 * n * 0.33}
      a${i * 0.8},${i * 0.8} 1 0,0 0,${-1 * n * 0.34}
      a${i},${i} 1 0,0 ${a * 0.1},${-1 * n * 0.33}

    H0 V0 Z`
  );
}, Um = function(t, e, r) {
  e.append("circle").attr("id", "node-" + r.id).attr("class", "node-bkg node-" + t.type2Str(r.type)).attr("r", r.width / 2);
};
function Hm(t, e, r, a, n) {
  return t.insert("polygon", ":first-child").attr(
    "points",
    a.map(function(i) {
      return i.x + "," + i.y;
    }).join(" ")
  ).attr("transform", "translate(" + (n.width - e) / 2 + ", " + r + ")");
}
const Ym = function(t, e, r) {
  const a = r.height, i = a / 4, s = r.width - r.padding + 2 * i, o = [
    { x: i, y: 0 },
    { x: s - i, y: 0 },
    { x: s, y: -a / 2 },
    { x: s - i, y: -a },
    { x: i, y: -a },
    { x: 0, y: -a / 2 }
  ];
  Hm(e, s, a, o, r);
}, Xm = function(t, e, r) {
  e.append("rect").attr("id", "node-" + r.id).attr("class", "node-bkg node-" + t.type2Str(r.type)).attr("height", r.height).attr("rx", r.padding).attr("ry", r.padding).attr("width", r.width);
}, Wm = function(t, e, r, a, n) {
  const i = n.htmlLabels, s = a % (Gm - 1), o = e.append("g");
  r.section = s;
  let l = "section-" + s;
  s < 0 && (l += " section-root"), o.attr("class", (r.class ? r.class + " " : "") + "mindmap-node " + l);
  const u = o.append("g"), f = o.append("g"), h = r.descr.replace(/(<br\/*>)/g, `
`);
  Zl(f, h, {
    useHtmlLabels: i,
    width: r.width,
    classes: "mindmap-node-label"
  }), i || f.attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle");
  const c = f.node().getBBox(), [v] = Kl(n.fontSize);
  if (r.height = c.height + v * 1.1 * 0.5 + r.padding, r.width = c.width + 2 * r.padding, r.icon)
    if (r.type === t.nodeType.CIRCLE)
      r.height += 50, r.width += 50, o.append("foreignObject").attr("height", "50px").attr("width", r.width).attr("style", "text-align: center;").append("div").attr("class", "icon-container").append("i").attr("class", "node-icon-" + s + " " + r.icon), f.attr(
        "transform",
        "translate(" + r.width / 2 + ", " + (r.height / 2 - 1.5 * r.padding) + ")"
      );
    else {
      r.width += 50;
      const d = r.height;
      r.height = Math.max(d, 60);
      const g = Math.abs(r.height - d);
      o.append("foreignObject").attr("width", "60px").attr("height", r.height).attr("style", "text-align: center;margin-top:" + g / 2 + "px;").append("div").attr("class", "icon-container").append("i").attr("class", "node-icon-" + s + " " + r.icon), f.attr(
        "transform",
        "translate(" + (25 + r.width / 2) + ", " + (g / 2 + r.padding / 2) + ")"
      );
    }
  else if (i) {
    const d = (r.width - c.width) / 2, g = (r.height - c.height) / 2;
    f.attr("transform", "translate(" + d + ", " + g + ")");
  } else {
    const d = r.width / 2, g = r.padding / 2;
    f.attr("transform", "translate(" + d + ", " + g + ")");
  }
  switch (r.type) {
    case t.nodeType.DEFAULT:
      zm(t, u, r, s);
      break;
    case t.nodeType.ROUNDED_RECT:
      Xm(t, u, r);
      break;
    case t.nodeType.RECT:
      $m(t, u, r);
      break;
    case t.nodeType.CIRCLE:
      u.attr("transform", "translate(" + r.width / 2 + ", " + +r.height / 2 + ")"), Um(t, u, r);
      break;
    case t.nodeType.CLOUD:
      Vm(t, u, r);
      break;
    case t.nodeType.BANG:
      _m(t, u, r);
      break;
    case t.nodeType.HEXAGON:
      Ym(t, u, r);
      break;
  }
  return t.setElementForId(r.id, o), r.height;
}, qm = function(t, e) {
  const r = t.getElementById(e.id), a = e.x || 0, n = e.y || 0;
  r.attr("transform", "translate(" + a + "," + n + ")");
};
Ol.use(Cm);
function Ml(t, e, r, a, n) {
  Wm(t, e, r, a, n), r.children && r.children.forEach((i, s) => {
    Ml(t, e, i, a < 0 ? s : a, n);
  });
}
function Km(t, e) {
  e.edges().map((r, a) => {
    const n = r.data();
    if (r[0]._private.bodyBounds) {
      const i = r[0]._private.rscratch;
      ur.trace("Edge: ", a, n), t.insert("path").attr(
        "d",
        `M ${i.startX},${i.startY} L ${i.midX},${i.midY} L${i.endX},${i.endY} `
      ).attr("class", "edge section-edge-" + n.section + " edge-depth-" + n.depth);
    }
  });
}
function Rl(t, e, r, a) {
  e.add({
    group: "nodes",
    data: {
      id: t.id.toString(),
      labelText: t.descr,
      height: t.height,
      width: t.width,
      level: a,
      nodeId: t.id,
      padding: t.padding,
      type: t.type
    },
    position: {
      x: t.x,
      y: t.y
    }
  }), t.children && t.children.forEach((n) => {
    Rl(n, e, r, a + 1), e.add({
      group: "edges",
      data: {
        id: `${t.id}_${n.id}`,
        source: t.id,
        target: n.id,
        depth: a,
        section: n.section
      }
    });
  });
}
function Zm(t, e) {
  return new Promise((r) => {
    const a = Yl("body").append("div").attr("id", "cy").attr("style", "display:none"), n = Ol({
      container: document.getElementById("cy"),
      // container to render in
      style: [
        {
          selector: "edge",
          style: {
            "curve-style": "bezier"
          }
        }
      ]
    });
    a.remove(), Rl(t, n, e, 0), n.nodes().forEach(function(i) {
      i.layoutDimensions = () => {
        const s = i.data();
        return { w: s.width, h: s.height };
      };
    }), n.layout({
      name: "cose-bilkent",
      // @ts-ignore Types for cose-bilkent are not correct?
      quality: "proof",
      styleEnabled: !1,
      animate: !1
    }).run(), n.ready((i) => {
      ur.info("Ready", i), r(n);
    });
  });
}
function Qm(t, e) {
  e.nodes().map((r, a) => {
    const n = r.data();
    n.x = r.position().x, n.y = r.position().y, qm(t, n);
    const i = t.getElementById(n.nodeId);
    ur.info("Id:", a, "Position: (", r.position().x, ", ", r.position().y, ")", n), i.attr(
      "transform",
      `translate(${r.position().x - n.width / 2}, ${r.position().y - n.height / 2})`
    ), i.attr("attr", `apa-${a})`);
  });
}
const Jm = (t, e, r, a) => Li(void 0, null, function* () {
  var v, d;
  var n, i;
  ur.debug(`Rendering mindmap diagram
` + t);
  const s = a.db, o = s.getMindmap();
  if (!o)
    return;
  const l = Qn();
  l.htmlLabels = !1;
  const u = Ul(e), f = u.append("g");
  f.attr("class", "mindmap-edges");
  const h = u.append("g");
  h.attr("class", "mindmap-nodes"), Ml(s, h, o, -1, l);
  const c = yield Zm(o, l);
  Km(f, c), Qm(s, c), Hl(
    void 0,
    u,
    (v = (n = l.mindmap) == null ? void 0 : n.padding) != null ? v : _a.mindmap.padding,
    (d = (i = l.mindmap) == null ? void 0 : i.useMaxWidth) != null ? d : _a.mindmap.useMaxWidth
  );
}), jm = {
  draw: Jm
}, e0 = (t) => {
  let e = "";
  for (let r = 0; r < t.THEME_COLOR_LIMIT; r++)
    t["lineColor" + r] = t["lineColor" + r] || t["cScaleInv" + r], Xl(t["lineColor" + r]) ? t["lineColor" + r] = Wl(t["lineColor" + r], 20) : t["lineColor" + r] = ql(t["lineColor" + r], 20);
  for (let r = 0; r < t.THEME_COLOR_LIMIT; r++) {
    const a = "" + (17 - 3 * r);
    e += `
    .section-${r - 1} rect, .section-${r - 1} path, .section-${r - 1} circle, .section-${r - 1} polygon, .section-${r - 1} path  {
      fill: ${t["cScale" + r]};
    }
    .section-${r - 1} text {
     fill: ${t["cScaleLabel" + r]};
    }
    .node-icon-${r - 1} {
      font-size: 40px;
      color: ${t["cScaleLabel" + r]};
    }
    .section-edge-${r - 1}{
      stroke: ${t["cScale" + r]};
    }
    .edge-depth-${r - 1}{
      stroke-width: ${a};
    }
    .section-${r - 1} line {
      stroke: ${t["cScaleInv" + r]} ;
      stroke-width: 3;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `;
  }
  return e;
}, t0 = (t) => `
  .edge {
    stroke-width: 3;
  }
  ${e0(t)}
  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {
    fill: ${t.git0};
  }
  .section-root text {
    fill: ${t.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .mindmap-node-label {
    dy: 1em;
    alignment-baseline: middle;
    text-anchor: middle;
    dominant-baseline: middle;
    text-align: center;
  }
`, r0 = t0, s0 = {
  db: Fm,
  renderer: jm,
  parser: Dm,
  styles: r0
};
export {
  s0 as diagram
};
