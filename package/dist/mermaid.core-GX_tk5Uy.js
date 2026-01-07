import { a3 as Fc, a4 as Ca, e as hl, a5 as Ve, _ as hr, a6 as Hr, a7 as Fe, Z as Fi, a8 as Ug, x as wa, z as Gg, a9 as ul, aa as Xg, ab as fl, ac as Dc, ad as Oc, ae as Rc, af as Ic, ag as Pc, ah as Nc, ai as Vg, aj as Kn, ak as zc, al as Wc, am as Zg, an as Kg, q as na, o as Qg } from "./main-Cdb_NCuJ.js";
function qc(e, t) {
  this._basis = new Fc(e), this._beta = t;
}
qc.prototype = {
  lineStart: function() {
    this._x = [], this._y = [], this._basis.lineStart();
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length - 1;
    if (r > 0)
      for (var i = e[0], a = t[0], n = e[r] - i, s = t[r] - a, o = -1, l; ++o <= r; )
        l = o / r, this._basis.point(
          this._beta * e[o] + (1 - this._beta) * (i + l * n),
          this._beta * t[o] + (1 - this._beta) * (a + l * s)
        );
    this._x = this._y = null, this._basis.lineEnd();
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
const Jg = (function e(t) {
  function r(i) {
    return t === 1 ? new Fc(i) : new qc(i, t);
  }
  return r.beta = function(i) {
    return e(+i);
  }, r;
})(0.85);
function ka(e, t, r) {
  e._context.bezierCurveTo(
    e._x1 + e._k * (e._x2 - e._x0),
    e._y1 + e._k * (e._y2 - e._y0),
    e._x2 + e._k * (e._x1 - t),
    e._y2 + e._k * (e._y1 - r),
    e._x2,
    e._y2
  );
}
function Gs(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Gs.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        ka(this, this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2, this._x1 = e, this._y1 = t;
        break;
      case 2:
        this._point = 3;
      // falls through
      default:
        ka(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Hc = (function e(t) {
  function r(i) {
    return new Gs(i, t);
  }
  return r.tension = function(i) {
    return e(+i);
  }, r;
})(0);
function Xs(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Xs.prototype = {
  areaStart: Ca,
  areaEnd: Ca,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x3 = e, this._y3 = t;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = e, this._y4 = t);
        break;
      case 2:
        this._point = 3, this._x5 = e, this._y5 = t;
        break;
      default:
        ka(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const tm = (function e(t) {
  function r(i) {
    return new Xs(i, t);
  }
  return r.tension = function(i) {
    return e(+i);
  }, r;
})(0);
function Vs(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Vs.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        ka(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const em = (function e(t) {
  function r(i) {
    return new Vs(i, t);
  }
  return r.tension = function(i) {
    return e(+i);
  }, r;
})(0);
function Zs(e, t, r) {
  var i = e._x1, a = e._y1, n = e._x2, s = e._y2;
  if (e._l01_a > hl) {
    var o = 2 * e._l01_2a + 3 * e._l01_a * e._l12_a + e._l12_2a, l = 3 * e._l01_a * (e._l01_a + e._l12_a);
    i = (i * o - e._x0 * e._l12_2a + e._x2 * e._l01_2a) / l, a = (a * o - e._y0 * e._l12_2a + e._y2 * e._l01_2a) / l;
  }
  if (e._l23_a > hl) {
    var c = 2 * e._l23_2a + 3 * e._l23_a * e._l12_a + e._l12_2a, h = 3 * e._l23_a * (e._l23_a + e._l12_a);
    n = (n * c + e._x1 * e._l23_2a - t * e._l12_2a) / h, s = (s * c + e._y1 * e._l23_2a - r * e._l12_2a) / h;
  }
  e._context.bezierCurveTo(i, a, n, s, e._x2, e._y2);
}
function jc(e, t) {
  this._context = e, this._alpha = t;
}
jc.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    if (e = +e, t = +t, this._point) {
      var r = this._x2 - e, i = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + i * i, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      // falls through
      default:
        Zs(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Yc = (function e(t) {
  function r(i) {
    return t ? new jc(i, t) : new Gs(i, 0);
  }
  return r.alpha = function(i) {
    return e(+i);
  }, r;
})(0.5);
function Uc(e, t) {
  this._context = e, this._alpha = t;
}
Uc.prototype = {
  areaStart: Ca,
  areaEnd: Ca,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(e, t) {
    if (e = +e, t = +t, this._point) {
      var r = this._x2 - e, i = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + i * i, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._x3 = e, this._y3 = t;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = e, this._y4 = t);
        break;
      case 2:
        this._point = 3, this._x5 = e, this._y5 = t;
        break;
      default:
        Zs(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const rm = (function e(t) {
  function r(i) {
    return t ? new Uc(i, t) : new Xs(i, 0);
  }
  return r.alpha = function(i) {
    return e(+i);
  }, r;
})(0.5);
function Gc(e, t) {
  this._context = e, this._alpha = t;
}
Gc.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    if (e = +e, t = +t, this._point) {
      var r = this._x2 - e, i = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + i * i, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        Zs(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const im = (function e(t) {
  function r(i) {
    return t ? new Gc(i, t) : new Vs(i, 0);
  }
  return r.alpha = function(i) {
    return e(+i);
  }, r;
})(0.5);
var dl = 180 / Math.PI, Qn = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Xc(e, t, r, i, a, n) {
  var s, o, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * r + t * i) && (r -= e * l, i -= t * l), (o = Math.sqrt(r * r + i * i)) && (r /= o, i /= o, l /= o), e * i < t * r && (e = -e, t = -t, l = -l, s = -s), {
    translateX: a,
    translateY: n,
    rotate: Math.atan2(t, e) * dl,
    skewX: Math.atan(l) * dl,
    scaleX: s,
    scaleY: o
  };
}
var Vi;
function am(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Qn : Xc(t.a, t.b, t.c, t.d, t.e, t.f);
}
function nm(e) {
  return e == null || (Vi || (Vi = document.createElementNS("http://www.w3.org/2000/svg", "g")), Vi.setAttribute("transform", e), !(e = Vi.transform.baseVal.consolidate())) ? Qn : (e = e.matrix, Xc(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Vc(e, t, r, i) {
  function a(c) {
    return c.length ? c.pop() + " " : "";
  }
  function n(c, h, u, f, d, g) {
    if (c !== u || h !== f) {
      var m = d.push("translate(", null, t, null, r);
      g.push({ i: m - 4, x: Ve(c, u) }, { i: m - 2, x: Ve(h, f) });
    } else (u || f) && d.push("translate(" + u + t + f + r);
  }
  function s(c, h, u, f) {
    c !== h ? (c - h > 180 ? h += 360 : h - c > 180 && (c += 360), f.push({ i: u.push(a(u) + "rotate(", null, i) - 2, x: Ve(c, h) })) : h && u.push(a(u) + "rotate(" + h + i);
  }
  function o(c, h, u, f) {
    c !== h ? f.push({ i: u.push(a(u) + "skewX(", null, i) - 2, x: Ve(c, h) }) : h && u.push(a(u) + "skewX(" + h + i);
  }
  function l(c, h, u, f, d, g) {
    if (c !== u || h !== f) {
      var m = d.push(a(d) + "scale(", null, ",", null, ")");
      g.push({ i: m - 4, x: Ve(c, u) }, { i: m - 2, x: Ve(h, f) });
    } else (u !== 1 || f !== 1) && d.push(a(d) + "scale(" + u + "," + f + ")");
  }
  return function(c, h) {
    var u = [], f = [];
    return c = e(c), h = e(h), n(c.translateX, c.translateY, h.translateX, h.translateY, u, f), s(c.rotate, h.rotate, u, f), o(c.skewX, h.skewX, u, f), l(c.scaleX, c.scaleY, h.scaleX, h.scaleY, u, f), c = h = null, function(d) {
      for (var g = -1, m = f.length, y; ++g < m; ) u[(y = f[g]).i] = y.x(d);
      return u.join("");
    };
  };
}
var sm = Vc(am, "px, ", "px)", "deg)"), om = Vc(nm, ", ", ")", ")");
function Zc(e) {
  return e;
}
var lm = "[object AsyncFunction]", cm = "[object Function]", hm = "[object GeneratorFunction]", um = "[object Proxy]";
function Ks(e) {
  if (!hr(e))
    return !1;
  var t = Hr(e);
  return t == cm || t == hm || t == lm || t == um;
}
var Fn = Fe["__core-js_shared__"], pl = (function() {
  var e = /[^.]+$/.exec(Fn && Fn.keys && Fn.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
})();
function fm(e) {
  return !!pl && pl in e;
}
var dm = Function.prototype, pm = dm.toString;
function ur(e) {
  if (e != null) {
    try {
      return pm.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var gm = /[\\^$.*+?()[\]{}|]/g, mm = /^\[object .+?Constructor\]$/, ym = Function.prototype, xm = Object.prototype, bm = ym.toString, Cm = xm.hasOwnProperty, wm = RegExp(
  "^" + bm.call(Cm).replace(gm, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function km(e) {
  if (!hr(e) || fm(e))
    return !1;
  var t = Ks(e) ? wm : mm;
  return t.test(ur(e));
}
function vm(e, t) {
  return e?.[t];
}
function fr(e, t) {
  var r = vm(e, t);
  return km(r) ? r : void 0;
}
var Jn = fr(Fe, "WeakMap"), gl = Object.create, _m = /* @__PURE__ */ (function() {
  function e() {
  }
  return function(t) {
    if (!hr(t))
      return {};
    if (gl)
      return gl(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
})();
function Sm(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
function Tm(e, t) {
  var r = -1, i = e.length;
  for (t || (t = Array(i)); ++r < i; )
    t[r] = e[r];
  return t;
}
var Bm = 800, Am = 16, Lm = Date.now;
function Mm(e) {
  var t = 0, r = 0;
  return function() {
    var i = Lm(), a = Am - (i - r);
    if (r = i, a > 0) {
      if (++t >= Bm)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Em(e) {
  return function() {
    return e;
  };
}
var va = (function() {
  try {
    var e = fr(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
})(), $m = va ? function(e, t) {
  return va(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Em(t),
    writable: !0
  });
} : Zc, Fm = Mm($m), Dm = 9007199254740991, Om = /^(?:0|[1-9]\d*)$/;
function Kc(e, t) {
  var r = typeof e;
  return t = t ?? Dm, !!t && (r == "number" || r != "symbol" && Om.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Qs(e, t, r) {
  t == "__proto__" && va ? va(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function Ka(e, t) {
  return e === t || e !== e && t !== t;
}
var Rm = Object.prototype, Im = Rm.hasOwnProperty;
function Pm(e, t, r) {
  var i = e[t];
  (!(Im.call(e, t) && Ka(i, r)) || r === void 0 && !(t in e)) && Qs(e, t, r);
}
function Nm(e, t, r, i) {
  var a = !r;
  r || (r = {});
  for (var n = -1, s = t.length; ++n < s; ) {
    var o = t[n], l = void 0;
    l === void 0 && (l = e[o]), a ? Qs(r, o, l) : Pm(r, o, l);
  }
  return r;
}
var ml = Math.max;
function zm(e, t, r) {
  return t = ml(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var i = arguments, a = -1, n = ml(i.length - t, 0), s = Array(n); ++a < n; )
      s[a] = i[t + a];
    a = -1;
    for (var o = Array(t + 1); ++a < t; )
      o[a] = i[a];
    return o[t] = r(s), Sm(e, this, o);
  };
}
function Wm(e, t) {
  return Fm(zm(e, t, Zc), e + "");
}
var qm = 9007199254740991;
function Qc(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= qm;
}
function Qa(e) {
  return e != null && Qc(e.length) && !Ks(e);
}
function Hm(e, t, r) {
  if (!hr(r))
    return !1;
  var i = typeof t;
  return (i == "number" ? Qa(r) && Kc(t, r.length) : i == "string" && t in r) ? Ka(r[t], e) : !1;
}
function jm(e) {
  return Wm(function(t, r) {
    var i = -1, a = r.length, n = a > 1 ? r[a - 1] : void 0, s = a > 2 ? r[2] : void 0;
    for (n = e.length > 3 && typeof n == "function" ? (a--, n) : void 0, s && Hm(r[0], r[1], s) && (n = a < 3 ? void 0 : n, a = 1), t = Object(t); ++i < a; ) {
      var o = r[i];
      o && e(t, o, i, n);
    }
    return t;
  });
}
var Ym = Object.prototype;
function Ja(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Ym;
  return e === r;
}
function Um(e, t) {
  for (var r = -1, i = Array(e); ++r < e; )
    i[r] = t(r);
  return i;
}
var Gm = "[object Arguments]";
function yl(e) {
  return Fi(e) && Hr(e) == Gm;
}
var Jc = Object.prototype, Xm = Jc.hasOwnProperty, Vm = Jc.propertyIsEnumerable, _a = yl(/* @__PURE__ */ (function() {
  return arguments;
})()) ? yl : function(e) {
  return Fi(e) && Xm.call(e, "callee") && !Vm.call(e, "callee");
};
function Zm() {
  return !1;
}
var th = typeof exports == "object" && exports && !exports.nodeType && exports, xl = th && typeof module == "object" && module && !module.nodeType && module, Km = xl && xl.exports === th, bl = Km ? Fe.Buffer : void 0, Qm = bl ? bl.isBuffer : void 0, Js = Qm || Zm, Jm = "[object Arguments]", ty = "[object Array]", ey = "[object Boolean]", ry = "[object Date]", iy = "[object Error]", ay = "[object Function]", ny = "[object Map]", sy = "[object Number]", oy = "[object Object]", ly = "[object RegExp]", cy = "[object Set]", hy = "[object String]", uy = "[object WeakMap]", fy = "[object ArrayBuffer]", dy = "[object DataView]", py = "[object Float32Array]", gy = "[object Float64Array]", my = "[object Int8Array]", yy = "[object Int16Array]", xy = "[object Int32Array]", by = "[object Uint8Array]", Cy = "[object Uint8ClampedArray]", wy = "[object Uint16Array]", ky = "[object Uint32Array]", pt = {};
pt[py] = pt[gy] = pt[my] = pt[yy] = pt[xy] = pt[by] = pt[Cy] = pt[wy] = pt[ky] = !0;
pt[Jm] = pt[ty] = pt[fy] = pt[ey] = pt[dy] = pt[ry] = pt[iy] = pt[ay] = pt[ny] = pt[sy] = pt[oy] = pt[ly] = pt[cy] = pt[hy] = pt[uy] = !1;
function vy(e) {
  return Fi(e) && Qc(e.length) && !!pt[Hr(e)];
}
function _y(e) {
  return function(t) {
    return e(t);
  };
}
var eh = typeof exports == "object" && exports && !exports.nodeType && exports, yi = eh && typeof module == "object" && module && !module.nodeType && module, Sy = yi && yi.exports === eh, Dn = Sy && Ug.process, Cl = (function() {
  try {
    var e = yi && yi.require && yi.require("util").types;
    return e || Dn && Dn.binding && Dn.binding("util");
  } catch {
  }
})(), wl = Cl && Cl.isTypedArray, to = wl ? _y(wl) : vy, Ty = Object.prototype, By = Ty.hasOwnProperty;
function Ay(e, t) {
  var r = wa(e), i = !r && _a(e), a = !r && !i && Js(e), n = !r && !i && !a && to(e), s = r || i || a || n, o = s ? Um(e.length, String) : [], l = o.length;
  for (var c in e)
    (t || By.call(e, c)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    n && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Kc(c, l))) && o.push(c);
  return o;
}
function rh(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Ly = rh(Object.keys, Object), My = Object.prototype, Ey = My.hasOwnProperty;
function $y(e) {
  if (!Ja(e))
    return Ly(e);
  var t = [];
  for (var r in Object(e))
    Ey.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function Fy(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Dy = Object.prototype, Oy = Dy.hasOwnProperty;
function Ry(e) {
  if (!hr(e))
    return Fy(e);
  var t = Ja(e), r = [];
  for (var i in e)
    i == "constructor" && (t || !Oy.call(e, i)) || r.push(i);
  return r;
}
function ih(e) {
  return Qa(e) ? Ay(e, !0) : Ry(e);
}
var vi = fr(Object, "create");
function Iy() {
  this.__data__ = vi ? vi(null) : {}, this.size = 0;
}
function Py(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Ny = "__lodash_hash_undefined__", zy = Object.prototype, Wy = zy.hasOwnProperty;
function qy(e) {
  var t = this.__data__;
  if (vi) {
    var r = t[e];
    return r === Ny ? void 0 : r;
  }
  return Wy.call(t, e) ? t[e] : void 0;
}
var Hy = Object.prototype, jy = Hy.hasOwnProperty;
function Yy(e) {
  var t = this.__data__;
  return vi ? t[e] !== void 0 : jy.call(t, e);
}
var Uy = "__lodash_hash_undefined__";
function Gy(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = vi && t === void 0 ? Uy : t, this;
}
function ir(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
ir.prototype.clear = Iy;
ir.prototype.delete = Py;
ir.prototype.get = qy;
ir.prototype.has = Yy;
ir.prototype.set = Gy;
function Xy() {
  this.__data__ = [], this.size = 0;
}
function tn(e, t) {
  for (var r = e.length; r--; )
    if (Ka(e[r][0], t))
      return r;
  return -1;
}
var Vy = Array.prototype, Zy = Vy.splice;
function Ky(e) {
  var t = this.__data__, r = tn(t, e);
  if (r < 0)
    return !1;
  var i = t.length - 1;
  return r == i ? t.pop() : Zy.call(t, r, 1), --this.size, !0;
}
function Qy(e) {
  var t = this.__data__, r = tn(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Jy(e) {
  return tn(this.__data__, e) > -1;
}
function t0(e, t) {
  var r = this.__data__, i = tn(r, e);
  return i < 0 ? (++this.size, r.push([e, t])) : r[i][1] = t, this;
}
function De(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
De.prototype.clear = Xy;
De.prototype.delete = Ky;
De.prototype.get = Qy;
De.prototype.has = Jy;
De.prototype.set = t0;
var _i = fr(Fe, "Map");
function e0() {
  this.size = 0, this.__data__ = {
    hash: new ir(),
    map: new (_i || De)(),
    string: new ir()
  };
}
function r0(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function en(e, t) {
  var r = e.__data__;
  return r0(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function i0(e) {
  var t = en(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function a0(e) {
  return en(this, e).get(e);
}
function n0(e) {
  return en(this, e).has(e);
}
function s0(e, t) {
  var r = en(this, e), i = r.size;
  return r.set(e, t), this.size += r.size == i ? 0 : 1, this;
}
function qe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
qe.prototype.clear = e0;
qe.prototype.delete = i0;
qe.prototype.get = a0;
qe.prototype.has = n0;
qe.prototype.set = s0;
var o0 = "Expected a function";
function Di(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(o0);
  var r = function() {
    var i = arguments, a = t ? t.apply(this, i) : i[0], n = r.cache;
    if (n.has(a))
      return n.get(a);
    var s = e.apply(this, i);
    return r.cache = n.set(a, s) || n, s;
  };
  return r.cache = new (Di.Cache || qe)(), r;
}
Di.Cache = qe;
var ah = rh(Object.getPrototypeOf, Object), l0 = "[object Object]", c0 = Function.prototype, h0 = Object.prototype, nh = c0.toString, u0 = h0.hasOwnProperty, f0 = nh.call(Object);
function d0(e) {
  if (!Fi(e) || Hr(e) != l0)
    return !1;
  var t = ah(e);
  if (t === null)
    return !0;
  var r = u0.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && nh.call(r) == f0;
}
function p0() {
  this.__data__ = new De(), this.size = 0;
}
function g0(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function m0(e) {
  return this.__data__.get(e);
}
function y0(e) {
  return this.__data__.has(e);
}
var x0 = 200;
function b0(e, t) {
  var r = this.__data__;
  if (r instanceof De) {
    var i = r.__data__;
    if (!_i || i.length < x0 - 1)
      return i.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new qe(i);
  }
  return r.set(e, t), this.size = r.size, this;
}
function jr(e) {
  var t = this.__data__ = new De(e);
  this.size = t.size;
}
jr.prototype.clear = p0;
jr.prototype.delete = g0;
jr.prototype.get = m0;
jr.prototype.has = y0;
jr.prototype.set = b0;
var sh = typeof exports == "object" && exports && !exports.nodeType && exports, kl = sh && typeof module == "object" && module && !module.nodeType && module, C0 = kl && kl.exports === sh, vl = C0 ? Fe.Buffer : void 0, _l = vl ? vl.allocUnsafe : void 0;
function w0(e, t) {
  if (t)
    return e.slice();
  var r = e.length, i = _l ? _l(r) : new e.constructor(r);
  return e.copy(i), i;
}
var ts = fr(Fe, "DataView"), es = fr(Fe, "Promise"), rs = fr(Fe, "Set"), Sl = "[object Map]", k0 = "[object Object]", Tl = "[object Promise]", Bl = "[object Set]", Al = "[object WeakMap]", Ll = "[object DataView]", v0 = ur(ts), _0 = ur(_i), S0 = ur(es), T0 = ur(rs), B0 = ur(Jn), Ze = Hr;
(ts && Ze(new ts(new ArrayBuffer(1))) != Ll || _i && Ze(new _i()) != Sl || es && Ze(es.resolve()) != Tl || rs && Ze(new rs()) != Bl || Jn && Ze(new Jn()) != Al) && (Ze = function(e) {
  var t = Hr(e), r = t == k0 ? e.constructor : void 0, i = r ? ur(r) : "";
  if (i)
    switch (i) {
      case v0:
        return Ll;
      case _0:
        return Sl;
      case S0:
        return Tl;
      case T0:
        return Bl;
      case B0:
        return Al;
    }
  return t;
});
var Ml = Fe.Uint8Array;
function A0(e) {
  var t = new e.constructor(e.byteLength);
  return new Ml(t).set(new Ml(e)), t;
}
function L0(e, t) {
  var r = t ? A0(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
function M0(e) {
  return typeof e.constructor == "function" && !Ja(e) ? _m(ah(e)) : {};
}
function E0(e) {
  return function(t, r, i) {
    for (var a = -1, n = Object(t), s = i(t), o = s.length; o--; ) {
      var l = s[++a];
      if (r(n[l], l, n) === !1)
        break;
    }
    return t;
  };
}
var $0 = E0();
function is(e, t, r) {
  (r !== void 0 && !Ka(e[t], r) || r === void 0 && !(t in e)) && Qs(e, t, r);
}
function F0(e) {
  return Fi(e) && Qa(e);
}
function as(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function D0(e) {
  return Nm(e, ih(e));
}
function O0(e, t, r, i, a, n, s) {
  var o = as(e, r), l = as(t, r), c = s.get(l);
  if (c) {
    is(e, r, c);
    return;
  }
  var h = n ? n(o, l, r + "", e, t, s) : void 0, u = h === void 0;
  if (u) {
    var f = wa(l), d = !f && Js(l), g = !f && !d && to(l);
    h = l, f || d || g ? wa(o) ? h = o : F0(o) ? h = Tm(o) : d ? (u = !1, h = w0(l, !0)) : g ? (u = !1, h = L0(l, !0)) : h = [] : d0(l) || _a(l) ? (h = o, _a(o) ? h = D0(o) : (!hr(o) || Ks(o)) && (h = M0(l))) : u = !1;
  }
  u && (s.set(l, h), a(h, l, i, n, s), s.delete(l)), is(e, r, h);
}
function oh(e, t, r, i, a) {
  e !== t && $0(t, function(n, s) {
    if (a || (a = new jr()), hr(n))
      O0(e, t, s, r, oh, i, a);
    else {
      var o = i ? i(as(e, s), n, s + "", e, t, a) : void 0;
      o === void 0 && (o = n), is(e, s, o);
    }
  }, ih);
}
var R0 = "[object Map]", I0 = "[object Set]", P0 = Object.prototype, N0 = P0.hasOwnProperty;
function El(e) {
  if (e == null)
    return !0;
  if (Qa(e) && (wa(e) || typeof e == "string" || typeof e.splice == "function" || Js(e) || to(e) || _a(e)))
    return !e.length;
  var t = Ze(e);
  if (t == R0 || t == I0)
    return !e.size;
  if (Ja(e))
    return !$y(e).length;
  for (var r in e)
    if (N0.call(e, r))
      return !1;
  return !0;
}
var z0 = jm(function(e, t, r) {
  oh(e, t, r);
}), $l = {
  name: "mermaid",
  version: "11.12.2",
  description: "Markdown-ish syntax for generating flowcharts, mindmaps, sequence diagrams, class diagrams, gantt charts, git graphs and more.",
  type: "module",
  module: "./dist/mermaid.core.mjs",
  types: "./dist/mermaid.d.ts",
  exports: {
    ".": {
      types: "./dist/mermaid.d.ts",
      import: "./dist/mermaid.core.mjs",
      default: "./dist/mermaid.core.mjs"
    },
    "./*": "./*"
  },
  keywords: [
    "diagram",
    "markdown",
    "flowchart",
    "sequence diagram",
    "gantt",
    "class diagram",
    "git graph",
    "mindmap",
    "packet diagram",
    "c4 diagram",
    "er diagram",
    "pie chart",
    "pie diagram",
    "quadrant chart",
    "requirement diagram",
    "graph"
  ],
  scripts: {
    clean: "rimraf dist",
    dev: "pnpm -w dev",
    "docs:code": "typedoc src/defaultConfig.ts src/config.ts src/mermaid.ts && prettier --write ./src/docs/config/setup",
    "docs:build": "rimraf ../../docs && pnpm docs:code && pnpm docs:spellcheck && tsx scripts/docs.cli.mts",
    "docs:verify": "pnpm docs:code && pnpm docs:spellcheck && tsx scripts/docs.cli.mts --verify",
    "docs:pre:vitepress": "pnpm --filter ./src/docs prefetch && rimraf src/vitepress && pnpm docs:code && tsx scripts/docs.cli.mts --vitepress && pnpm --filter ./src/vitepress install --no-frozen-lockfile --ignore-scripts",
    "docs:build:vitepress": "pnpm docs:pre:vitepress && (cd src/vitepress && pnpm run build) && cpy --flat src/docs/landing/ ./src/vitepress/.vitepress/dist/landing",
    "docs:dev": 'pnpm docs:pre:vitepress && concurrently "pnpm --filter ./src/vitepress dev" "tsx scripts/docs.cli.mts --watch --vitepress"',
    "docs:dev:docker": 'pnpm docs:pre:vitepress && concurrently "pnpm --filter ./src/vitepress dev:docker" "tsx scripts/docs.cli.mts --watch --vitepress"',
    "docs:serve": "pnpm docs:build:vitepress && vitepress serve src/vitepress",
    "docs:spellcheck": 'cspell "src/docs/**/*.md"',
    "docs:release-version": "tsx scripts/update-release-version.mts",
    "docs:verify-version": "tsx scripts/update-release-version.mts --verify",
    "types:build-config": "tsx scripts/create-types-from-json-schema.mts",
    "types:verify-config": "tsx scripts/create-types-from-json-schema.mts --verify",
    checkCircle: "npx madge --circular ./src",
    prepublishOnly: "pnpm docs:verify-version"
  },
  repository: {
    type: "git",
    url: "https://github.com/mermaid-js/mermaid"
  },
  author: "Knut Sveidqvist",
  license: "MIT",
  standard: {
    ignore: [
      "**/parser/*.js",
      "dist/**/*.js",
      "cypress/**/*.js"
    ],
    globals: [
      "page"
    ]
  },
  dependencies: {
    "@braintree/sanitize-url": "^7.1.1",
    "@iconify/utils": "^3.0.1",
    "@mermaid-js/parser": "workspace:^",
    "@types/d3": "^7.4.3",
    cytoscape: "^3.29.3",
    "cytoscape-cose-bilkent": "^4.1.0",
    "cytoscape-fcose": "^2.2.0",
    d3: "^7.9.0",
    "d3-sankey": "^0.12.3",
    "dagre-d3-es": "7.0.13",
    dayjs: "^1.11.18",
    dompurify: "^3.2.5",
    katex: "^0.16.22",
    khroma: "^2.1.0",
    "lodash-es": "^4.17.21",
    marked: "^16.2.1",
    roughjs: "^4.6.6",
    stylis: "^4.3.6",
    "ts-dedent": "^2.2.0",
    uuid: "^11.1.0"
  },
  devDependencies: {
    "@adobe/jsonschema2md": "^8.0.5",
    "@iconify/types": "^2.0.0",
    "@types/cytoscape": "^3.21.9",
    "@types/cytoscape-fcose": "^2.2.4",
    "@types/d3-sankey": "^0.12.4",
    "@types/d3-scale": "^4.0.9",
    "@types/d3-scale-chromatic": "^3.1.0",
    "@types/d3-selection": "^3.0.11",
    "@types/d3-shape": "^3.1.7",
    "@types/jsdom": "^21.1.7",
    "@types/katex": "^0.16.7",
    "@types/lodash-es": "^4.17.12",
    "@types/micromatch": "^4.0.9",
    "@types/stylis": "^4.2.7",
    "@types/uuid": "^10.0.0",
    ajv: "^8.17.1",
    canvas: "^3.1.2",
    chokidar: "3.6.0",
    concurrently: "^9.1.2",
    "csstree-validator": "^4.0.1",
    globby: "^14.1.0",
    jison: "^0.4.18",
    "js-base64": "^3.7.8",
    jsdom: "^26.1.0",
    "json-schema-to-typescript": "^15.0.4",
    micromatch: "^4.0.8",
    "path-browserify": "^1.0.1",
    prettier: "^3.5.3",
    remark: "^15.0.1",
    "remark-frontmatter": "^5.0.0",
    "remark-gfm": "^4.0.1",
    rimraf: "^6.0.1",
    "start-server-and-test": "^2.0.13",
    "type-fest": "^4.35.0",
    typedoc: "^0.28.12",
    "typedoc-plugin-markdown": "^4.8.1",
    typescript: "~5.7.3",
    "unist-util-flatmap": "^1.0.0",
    "unist-util-visit": "^5.0.0",
    vitepress: "^1.6.4",
    "vitepress-plugin-search": "1.0.4-alpha.22"
  },
  files: [
    "dist/",
    "README.md"
  ],
  publishConfig: {
    access: "public"
  }
}, sa = { exports: {} }, W0 = sa.exports, Fl;
function q0() {
  return Fl || (Fl = 1, (function(e, t) {
    (function(r, i) {
      e.exports = i();
    })(W0, (function() {
      var r = 1e3, i = 6e4, a = 36e5, n = "millisecond", s = "second", o = "minute", l = "hour", c = "day", h = "week", u = "month", f = "quarter", d = "year", g = "date", m = "Invalid Date", y = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, x = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, b = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(B) {
        var L = ["th", "st", "nd", "rd"], T = B % 100;
        return "[" + B + (L[(T - 20) % 10] || L[T] || L[0]) + "]";
      } }, C = function(B, L, T) {
        var $ = String(B);
        return !$ || $.length >= L ? B : "" + Array(L + 1 - $.length).join(T) + B;
      }, v = { s: C, z: function(B) {
        var L = -B.utcOffset(), T = Math.abs(L), $ = Math.floor(T / 60), M = T % 60;
        return (L <= 0 ? "+" : "-") + C($, 2, "0") + ":" + C(M, 2, "0");
      }, m: function B(L, T) {
        if (L.date() < T.date()) return -B(T, L);
        var $ = 12 * (T.year() - L.year()) + (T.month() - L.month()), M = L.clone().add($, u), q = T - M < 0, X = L.clone().add($ + (q ? -1 : 1), u);
        return +(-($ + (T - M) / (q ? M - X : X - M)) || 0);
      }, a: function(B) {
        return B < 0 ? Math.ceil(B) || 0 : Math.floor(B);
      }, p: function(B) {
        return { M: u, y: d, w: h, d: c, D: g, h: l, m: o, s, ms: n, Q: f }[B] || String(B || "").toLowerCase().replace(/s$/, "");
      }, u: function(B) {
        return B === void 0;
      } }, k = "en", A = {};
      A[k] = b;
      var S = "$isDayjsObject", D = function(B) {
        return B instanceof N || !(!B || !B[S]);
      }, I = function B(L, T, $) {
        var M;
        if (!L) return k;
        if (typeof L == "string") {
          var q = L.toLowerCase();
          A[q] && (M = q), T && (A[q] = T, M = q);
          var X = L.split("-");
          if (!M && X.length > 1) return B(X[0]);
        } else {
          var K = L.name;
          A[K] = L, M = K;
        }
        return !$ && M && (k = M), M || !$ && k;
      }, O = function(B, L) {
        if (D(B)) return B.clone();
        var T = typeof L == "object" ? L : {};
        return T.date = B, T.args = arguments, new N(T);
      }, E = v;
      E.l = I, E.i = D, E.w = function(B, L) {
        return O(B, { locale: L.$L, utc: L.$u, x: L.$x, $offset: L.$offset });
      };
      var N = (function() {
        function B(T) {
          this.$L = I(T.locale, null, !0), this.parse(T), this.$x = this.$x || T.x || {}, this[S] = !0;
        }
        var L = B.prototype;
        return L.parse = function(T) {
          this.$d = (function($) {
            var M = $.date, q = $.utc;
            if (M === null) return /* @__PURE__ */ new Date(NaN);
            if (E.u(M)) return /* @__PURE__ */ new Date();
            if (M instanceof Date) return new Date(M);
            if (typeof M == "string" && !/Z$/i.test(M)) {
              var X = M.match(y);
              if (X) {
                var K = X[2] - 1 || 0, J = (X[7] || "0").substring(0, 3);
                return q ? new Date(Date.UTC(X[1], K, X[3] || 1, X[4] || 0, X[5] || 0, X[6] || 0, J)) : new Date(X[1], K, X[3] || 1, X[4] || 0, X[5] || 0, X[6] || 0, J);
              }
            }
            return new Date(M);
          })(T), this.init();
        }, L.init = function() {
          var T = this.$d;
          this.$y = T.getFullYear(), this.$M = T.getMonth(), this.$D = T.getDate(), this.$W = T.getDay(), this.$H = T.getHours(), this.$m = T.getMinutes(), this.$s = T.getSeconds(), this.$ms = T.getMilliseconds();
        }, L.$utils = function() {
          return E;
        }, L.isValid = function() {
          return this.$d.toString() !== m;
        }, L.isSame = function(T, $) {
          var M = O(T);
          return this.startOf($) <= M && M <= this.endOf($);
        }, L.isAfter = function(T, $) {
          return O(T) < this.startOf($);
        }, L.isBefore = function(T, $) {
          return this.endOf($) < O(T);
        }, L.$g = function(T, $, M) {
          return E.u(T) ? this[$] : this.set(M, T);
        }, L.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, L.valueOf = function() {
          return this.$d.getTime();
        }, L.startOf = function(T, $) {
          var M = this, q = !!E.u($) || $, X = E.p(T), K = function(ee, yt) {
            var re = E.w(M.$u ? Date.UTC(M.$y, yt, ee) : new Date(M.$y, yt, ee), M);
            return q ? re : re.endOf(c);
          }, J = function(ee, yt) {
            return E.w(M.toDate()[ee].apply(M.toDate("s"), (q ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(yt)), M);
          }, Z = this.$W, ct = this.$M, nt = this.$D, bt = "set" + (this.$u ? "UTC" : "");
          switch (X) {
            case d:
              return q ? K(1, 0) : K(31, 11);
            case u:
              return q ? K(1, ct) : K(0, ct + 1);
            case h:
              var Ct = this.$locale().weekStart || 0, Pt = (Z < Ct ? Z + 7 : Z) - Ct;
              return K(q ? nt - Pt : nt + (6 - Pt), ct);
            case c:
            case g:
              return J(bt + "Hours", 0);
            case l:
              return J(bt + "Minutes", 1);
            case o:
              return J(bt + "Seconds", 2);
            case s:
              return J(bt + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, L.endOf = function(T) {
          return this.startOf(T, !1);
        }, L.$set = function(T, $) {
          var M, q = E.p(T), X = "set" + (this.$u ? "UTC" : ""), K = (M = {}, M[c] = X + "Date", M[g] = X + "Date", M[u] = X + "Month", M[d] = X + "FullYear", M[l] = X + "Hours", M[o] = X + "Minutes", M[s] = X + "Seconds", M[n] = X + "Milliseconds", M)[q], J = q === c ? this.$D + ($ - this.$W) : $;
          if (q === u || q === d) {
            var Z = this.clone().set(g, 1);
            Z.$d[K](J), Z.init(), this.$d = Z.set(g, Math.min(this.$D, Z.daysInMonth())).$d;
          } else K && this.$d[K](J);
          return this.init(), this;
        }, L.set = function(T, $) {
          return this.clone().$set(T, $);
        }, L.get = function(T) {
          return this[E.p(T)]();
        }, L.add = function(T, $) {
          var M, q = this;
          T = Number(T);
          var X = E.p($), K = function(ct) {
            var nt = O(q);
            return E.w(nt.date(nt.date() + Math.round(ct * T)), q);
          };
          if (X === u) return this.set(u, this.$M + T);
          if (X === d) return this.set(d, this.$y + T);
          if (X === c) return K(1);
          if (X === h) return K(7);
          var J = (M = {}, M[o] = i, M[l] = a, M[s] = r, M)[X] || 1, Z = this.$d.getTime() + T * J;
          return E.w(Z, this);
        }, L.subtract = function(T, $) {
          return this.add(-1 * T, $);
        }, L.format = function(T) {
          var $ = this, M = this.$locale();
          if (!this.isValid()) return M.invalidDate || m;
          var q = T || "YYYY-MM-DDTHH:mm:ssZ", X = E.z(this), K = this.$H, J = this.$m, Z = this.$M, ct = M.weekdays, nt = M.months, bt = M.meridiem, Ct = function(yt, re, Oe, ie) {
            return yt && (yt[re] || yt($, q)) || Oe[re].slice(0, ie);
          }, Pt = function(yt) {
            return E.s(K % 12 || 12, yt, "0");
          }, ee = bt || function(yt, re, Oe) {
            var ie = yt < 12 ? "AM" : "PM";
            return Oe ? ie.toLowerCase() : ie;
          };
          return q.replace(x, (function(yt, re) {
            return re || (function(Oe) {
              switch (Oe) {
                case "YY":
                  return String($.$y).slice(-2);
                case "YYYY":
                  return E.s($.$y, 4, "0");
                case "M":
                  return Z + 1;
                case "MM":
                  return E.s(Z + 1, 2, "0");
                case "MMM":
                  return Ct(M.monthsShort, Z, nt, 3);
                case "MMMM":
                  return Ct(nt, Z);
                case "D":
                  return $.$D;
                case "DD":
                  return E.s($.$D, 2, "0");
                case "d":
                  return String($.$W);
                case "dd":
                  return Ct(M.weekdaysMin, $.$W, ct, 2);
                case "ddd":
                  return Ct(M.weekdaysShort, $.$W, ct, 3);
                case "dddd":
                  return ct[$.$W];
                case "H":
                  return String(K);
                case "HH":
                  return E.s(K, 2, "0");
                case "h":
                  return Pt(1);
                case "hh":
                  return Pt(2);
                case "a":
                  return ee(K, J, !0);
                case "A":
                  return ee(K, J, !1);
                case "m":
                  return String(J);
                case "mm":
                  return E.s(J, 2, "0");
                case "s":
                  return String($.$s);
                case "ss":
                  return E.s($.$s, 2, "0");
                case "SSS":
                  return E.s($.$ms, 3, "0");
                case "Z":
                  return X;
              }
              return null;
            })(yt) || X.replace(":", "");
          }));
        }, L.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, L.diff = function(T, $, M) {
          var q, X = this, K = E.p($), J = O(T), Z = (J.utcOffset() - this.utcOffset()) * i, ct = this - J, nt = function() {
            return E.m(X, J);
          };
          switch (K) {
            case d:
              q = nt() / 12;
              break;
            case u:
              q = nt();
              break;
            case f:
              q = nt() / 3;
              break;
            case h:
              q = (ct - Z) / 6048e5;
              break;
            case c:
              q = (ct - Z) / 864e5;
              break;
            case l:
              q = ct / a;
              break;
            case o:
              q = ct / i;
              break;
            case s:
              q = ct / r;
              break;
            default:
              q = ct;
          }
          return M ? q : E.a(q);
        }, L.daysInMonth = function() {
          return this.endOf(u).$D;
        }, L.$locale = function() {
          return A[this.$L];
        }, L.locale = function(T, $) {
          if (!T) return this.$L;
          var M = this.clone(), q = I(T, $, !0);
          return q && (M.$L = q), M;
        }, L.clone = function() {
          return E.w(this.$d, this);
        }, L.toDate = function() {
          return new Date(this.valueOf());
        }, L.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, L.toISOString = function() {
          return this.$d.toISOString();
        }, L.toString = function() {
          return this.$d.toUTCString();
        }, B;
      })(), R = N.prototype;
      return O.prototype = R, [["$ms", n], ["$s", s], ["$m", o], ["$H", l], ["$W", c], ["$M", u], ["$y", d], ["$D", g]].forEach((function(B) {
        R[B[1]] = function(L) {
          return this.$g(L, B[0], B[1]);
        };
      })), O.extend = function(B, L) {
        return B.$i || (B(L, N, O), B.$i = !0), O;
      }, O.locale = I, O.isDayjs = D, O.unix = function(B) {
        return O(1e3 * B);
      }, O.en = A[k], O.Ls = A, O.p = {}, O;
    }));
  })(sa)), sa.exports;
}
var H0 = q0();
const j0 = /* @__PURE__ */ Gg(H0);
var lh = Object.defineProperty, p = (e, t) => lh(e, "name", { value: t, configurable: !0 }), Y0 = (e, t) => {
  for (var r in t)
    lh(e, r, { get: t[r], enumerable: !0 });
}, _e = {
  trace: 0,
  debug: 1,
  info: 2,
  warn: 3,
  error: 4,
  fatal: 5
}, F = {
  trace: /* @__PURE__ */ p((...e) => {
  }, "trace"),
  debug: /* @__PURE__ */ p((...e) => {
  }, "debug"),
  info: /* @__PURE__ */ p((...e) => {
  }, "info"),
  warn: /* @__PURE__ */ p((...e) => {
  }, "warn"),
  error: /* @__PURE__ */ p((...e) => {
  }, "error"),
  fatal: /* @__PURE__ */ p((...e) => {
  }, "fatal")
}, eo = /* @__PURE__ */ p(function(e = "fatal") {
  let t = _e.fatal;
  typeof e == "string" ? e.toLowerCase() in _e && (t = _e[e]) : typeof e == "number" && (t = e), F.trace = () => {
  }, F.debug = () => {
  }, F.info = () => {
  }, F.warn = () => {
  }, F.error = () => {
  }, F.fatal = () => {
  }, t <= _e.fatal && (F.fatal = console.error ? console.error.bind(console, Kt("FATAL"), "color: orange") : console.log.bind(console, "\x1B[35m", Kt("FATAL"))), t <= _e.error && (F.error = console.error ? console.error.bind(console, Kt("ERROR"), "color: orange") : console.log.bind(console, "\x1B[31m", Kt("ERROR"))), t <= _e.warn && (F.warn = console.warn ? console.warn.bind(console, Kt("WARN"), "color: orange") : console.log.bind(console, "\x1B[33m", Kt("WARN"))), t <= _e.info && (F.info = console.info ? console.info.bind(console, Kt("INFO"), "color: lightblue") : console.log.bind(console, "\x1B[34m", Kt("INFO"))), t <= _e.debug && (F.debug = console.debug ? console.debug.bind(console, Kt("DEBUG"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", Kt("DEBUG"))), t <= _e.trace && (F.trace = console.debug ? console.debug.bind(console, Kt("TRACE"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", Kt("TRACE")));
}, "setLogLevel"), Kt = /* @__PURE__ */ p((e) => `%c${j0().format("ss.SSS")} : ${e} : `, "format");
const oa = {
  /* CLAMP */
  min: {
    r: 0,
    g: 0,
    b: 0,
    s: 0,
    l: 0,
    a: 0
  },
  max: {
    r: 255,
    g: 255,
    b: 255,
    h: 360,
    s: 100,
    l: 100,
    a: 1
  },
  clamp: {
    r: (e) => e >= 255 ? 255 : e < 0 ? 0 : e,
    g: (e) => e >= 255 ? 255 : e < 0 ? 0 : e,
    b: (e) => e >= 255 ? 255 : e < 0 ? 0 : e,
    h: (e) => e % 360,
    s: (e) => e >= 100 ? 100 : e < 0 ? 0 : e,
    l: (e) => e >= 100 ? 100 : e < 0 ? 0 : e,
    a: (e) => e >= 1 ? 1 : e < 0 ? 0 : e
  },
  /* CONVERSION */
  //SOURCE: https://planetcalc.com/7779
  toLinear: (e) => {
    const t = e / 255;
    return e > 0.03928 ? Math.pow((t + 0.055) / 1.055, 2.4) : t / 12.92;
  },
  //SOURCE: https://gist.github.com/mjackson/5311256
  hue2rgb: (e, t, r) => (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e),
  hsl2rgb: ({ h: e, s: t, l: r }, i) => {
    if (!t)
      return r * 2.55;
    e /= 360, t /= 100, r /= 100;
    const a = r < 0.5 ? r * (1 + t) : r + t - r * t, n = 2 * r - a;
    switch (i) {
      case "r":
        return oa.hue2rgb(n, a, e + 1 / 3) * 255;
      case "g":
        return oa.hue2rgb(n, a, e) * 255;
      case "b":
        return oa.hue2rgb(n, a, e - 1 / 3) * 255;
    }
  },
  rgb2hsl: ({ r: e, g: t, b: r }, i) => {
    e /= 255, t /= 255, r /= 255;
    const a = Math.max(e, t, r), n = Math.min(e, t, r), s = (a + n) / 2;
    if (i === "l")
      return s * 100;
    if (a === n)
      return 0;
    const o = a - n, l = s > 0.5 ? o / (2 - a - n) : o / (a + n);
    if (i === "s")
      return l * 100;
    switch (a) {
      case e:
        return ((t - r) / o + (t < r ? 6 : 0)) * 60;
      case t:
        return ((r - e) / o + 2) * 60;
      case r:
        return ((e - t) / o + 4) * 60;
      default:
        return -1;
    }
  }
}, U0 = {
  /* API */
  clamp: (e, t, r) => t > r ? Math.min(t, Math.max(r, e)) : Math.min(r, Math.max(t, e)),
  round: (e) => Math.round(e * 1e10) / 1e10
}, G0 = {
  /* API */
  dec2hex: (e) => {
    const t = Math.round(e).toString(16);
    return t.length > 1 ? t : `0${t}`;
  }
}, st = {
  channel: oa,
  lang: U0,
  unit: G0
}, Re = {};
for (let e = 0; e <= 255; e++)
  Re[e] = st.unit.dec2hex(e);
const $t = {
  ALL: 0,
  RGB: 1,
  HSL: 2
};
class X0 {
  constructor() {
    this.type = $t.ALL;
  }
  /* API */
  get() {
    return this.type;
  }
  set(t) {
    if (this.type && this.type !== t)
      throw new Error("Cannot change both RGB and HSL channels at the same time");
    this.type = t;
  }
  reset() {
    this.type = $t.ALL;
  }
  is(t) {
    return this.type === t;
  }
}
class V0 {
  /* CONSTRUCTOR */
  constructor(t, r) {
    this.color = r, this.changed = !1, this.data = t, this.type = new X0();
  }
  /* API */
  set(t, r) {
    return this.color = r, this.changed = !1, this.data = t, this.type.type = $t.ALL, this;
  }
  /* HELPERS */
  _ensureHSL() {
    const t = this.data, { h: r, s: i, l: a } = t;
    r === void 0 && (t.h = st.channel.rgb2hsl(t, "h")), i === void 0 && (t.s = st.channel.rgb2hsl(t, "s")), a === void 0 && (t.l = st.channel.rgb2hsl(t, "l"));
  }
  _ensureRGB() {
    const t = this.data, { r, g: i, b: a } = t;
    r === void 0 && (t.r = st.channel.hsl2rgb(t, "r")), i === void 0 && (t.g = st.channel.hsl2rgb(t, "g")), a === void 0 && (t.b = st.channel.hsl2rgb(t, "b"));
  }
  /* GETTERS */
  get r() {
    const t = this.data, r = t.r;
    return !this.type.is($t.HSL) && r !== void 0 ? r : (this._ensureHSL(), st.channel.hsl2rgb(t, "r"));
  }
  get g() {
    const t = this.data, r = t.g;
    return !this.type.is($t.HSL) && r !== void 0 ? r : (this._ensureHSL(), st.channel.hsl2rgb(t, "g"));
  }
  get b() {
    const t = this.data, r = t.b;
    return !this.type.is($t.HSL) && r !== void 0 ? r : (this._ensureHSL(), st.channel.hsl2rgb(t, "b"));
  }
  get h() {
    const t = this.data, r = t.h;
    return !this.type.is($t.RGB) && r !== void 0 ? r : (this._ensureRGB(), st.channel.rgb2hsl(t, "h"));
  }
  get s() {
    const t = this.data, r = t.s;
    return !this.type.is($t.RGB) && r !== void 0 ? r : (this._ensureRGB(), st.channel.rgb2hsl(t, "s"));
  }
  get l() {
    const t = this.data, r = t.l;
    return !this.type.is($t.RGB) && r !== void 0 ? r : (this._ensureRGB(), st.channel.rgb2hsl(t, "l"));
  }
  get a() {
    return this.data.a;
  }
  /* SETTERS */
  set r(t) {
    this.type.set($t.RGB), this.changed = !0, this.data.r = t;
  }
  set g(t) {
    this.type.set($t.RGB), this.changed = !0, this.data.g = t;
  }
  set b(t) {
    this.type.set($t.RGB), this.changed = !0, this.data.b = t;
  }
  set h(t) {
    this.type.set($t.HSL), this.changed = !0, this.data.h = t;
  }
  set s(t) {
    this.type.set($t.HSL), this.changed = !0, this.data.s = t;
  }
  set l(t) {
    this.type.set($t.HSL), this.changed = !0, this.data.l = t;
  }
  set a(t) {
    this.changed = !0, this.data.a = t;
  }
}
const rn = new V0({ r: 0, g: 0, b: 0, a: 0 }, "transparent"), _r = {
  /* VARIABLES */
  re: /^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,
  /* API */
  parse: (e) => {
    if (e.charCodeAt(0) !== 35)
      return;
    const t = e.match(_r.re);
    if (!t)
      return;
    const r = t[1], i = parseInt(r, 16), a = r.length, n = a % 4 === 0, s = a > 4, o = s ? 1 : 17, l = s ? 8 : 4, c = n ? 0 : -1, h = s ? 255 : 15;
    return rn.set({
      r: (i >> l * (c + 3) & h) * o,
      g: (i >> l * (c + 2) & h) * o,
      b: (i >> l * (c + 1) & h) * o,
      a: n ? (i & h) * o / 255 : 1
    }, e);
  },
  stringify: (e) => {
    const { r: t, g: r, b: i, a } = e;
    return a < 1 ? `#${Re[Math.round(t)]}${Re[Math.round(r)]}${Re[Math.round(i)]}${Re[Math.round(a * 255)]}` : `#${Re[Math.round(t)]}${Re[Math.round(r)]}${Re[Math.round(i)]}`;
  }
}, Qe = {
  /* VARIABLES */
  re: /^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i,
  hueRe: /^(.+?)(deg|grad|rad|turn)$/i,
  /* HELPERS */
  _hue2deg: (e) => {
    const t = e.match(Qe.hueRe);
    if (t) {
      const [, r, i] = t;
      switch (i) {
        case "grad":
          return st.channel.clamp.h(parseFloat(r) * 0.9);
        case "rad":
          return st.channel.clamp.h(parseFloat(r) * 180 / Math.PI);
        case "turn":
          return st.channel.clamp.h(parseFloat(r) * 360);
      }
    }
    return st.channel.clamp.h(parseFloat(e));
  },
  /* API */
  parse: (e) => {
    const t = e.charCodeAt(0);
    if (t !== 104 && t !== 72)
      return;
    const r = e.match(Qe.re);
    if (!r)
      return;
    const [, i, a, n, s, o] = r;
    return rn.set({
      h: Qe._hue2deg(i),
      s: st.channel.clamp.s(parseFloat(a)),
      l: st.channel.clamp.l(parseFloat(n)),
      a: s ? st.channel.clamp.a(o ? parseFloat(s) / 100 : parseFloat(s)) : 1
    }, e);
  },
  stringify: (e) => {
    const { h: t, s: r, l: i, a } = e;
    return a < 1 ? `hsla(${st.lang.round(t)}, ${st.lang.round(r)}%, ${st.lang.round(i)}%, ${a})` : `hsl(${st.lang.round(t)}, ${st.lang.round(r)}%, ${st.lang.round(i)}%)`;
  }
}, xi = {
  /* VARIABLES */
  colors: {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyanaqua: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    transparent: "#00000000",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  },
  /* API */
  parse: (e) => {
    e = e.toLowerCase();
    const t = xi.colors[e];
    if (t)
      return _r.parse(t);
  },
  stringify: (e) => {
    const t = _r.stringify(e);
    for (const r in xi.colors)
      if (xi.colors[r] === t)
        return r;
  }
}, li = {
  /* VARIABLES */
  re: /^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i,
  /* API */
  parse: (e) => {
    const t = e.charCodeAt(0);
    if (t !== 114 && t !== 82)
      return;
    const r = e.match(li.re);
    if (!r)
      return;
    const [, i, a, n, s, o, l, c, h] = r;
    return rn.set({
      r: st.channel.clamp.r(a ? parseFloat(i) * 2.55 : parseFloat(i)),
      g: st.channel.clamp.g(s ? parseFloat(n) * 2.55 : parseFloat(n)),
      b: st.channel.clamp.b(l ? parseFloat(o) * 2.55 : parseFloat(o)),
      a: c ? st.channel.clamp.a(h ? parseFloat(c) / 100 : parseFloat(c)) : 1
    }, e);
  },
  stringify: (e) => {
    const { r: t, g: r, b: i, a } = e;
    return a < 1 ? `rgba(${st.lang.round(t)}, ${st.lang.round(r)}, ${st.lang.round(i)}, ${st.lang.round(a)})` : `rgb(${st.lang.round(t)}, ${st.lang.round(r)}, ${st.lang.round(i)})`;
  }
}, xe = {
  /* VARIABLES */
  format: {
    keyword: xi,
    hex: _r,
    rgb: li,
    rgba: li,
    hsl: Qe,
    hsla: Qe
  },
  /* API */
  parse: (e) => {
    if (typeof e != "string")
      return e;
    const t = _r.parse(e) || li.parse(e) || Qe.parse(e) || xi.parse(e);
    if (t)
      return t;
    throw new Error(`Unsupported color format: "${e}"`);
  },
  stringify: (e) => !e.changed && e.color ? e.color : e.type.is($t.HSL) || e.data.r === void 0 ? Qe.stringify(e) : e.a < 1 || !Number.isInteger(e.r) || !Number.isInteger(e.g) || !Number.isInteger(e.b) ? li.stringify(e) : _r.stringify(e)
}, ch = (e, t) => {
  const r = xe.parse(e);
  for (const i in t)
    r[i] = st.channel.clamp[i](t[i]);
  return xe.stringify(r);
}, bi = (e, t, r = 0, i = 1) => {
  if (typeof e != "number")
    return ch(e, { a: t });
  const a = rn.set({
    r: st.channel.clamp.r(e),
    g: st.channel.clamp.g(t),
    b: st.channel.clamp.b(r),
    a: st.channel.clamp.a(i)
  });
  return xe.stringify(a);
}, Z0 = (e) => {
  const { r: t, g: r, b: i } = xe.parse(e), a = 0.2126 * st.channel.toLinear(t) + 0.7152 * st.channel.toLinear(r) + 0.0722 * st.channel.toLinear(i);
  return st.lang.round(a);
}, K0 = (e) => Z0(e) >= 0.5, Oi = (e) => !K0(e), hh = (e, t, r) => {
  const i = xe.parse(e), a = i[t], n = st.channel.clamp[t](a + r);
  return a !== n && (i[t] = n), xe.stringify(i);
}, H = (e, t) => hh(e, "l", t), et = (e, t) => hh(e, "l", -t), _ = (e, t) => {
  const r = xe.parse(e), i = {};
  for (const a in t)
    t[a] && (i[a] = r[a] + t[a]);
  return ch(e, i);
}, Q0 = (e, t, r = 50) => {
  const { r: i, g: a, b: n, a: s } = xe.parse(e), { r: o, g: l, b: c, a: h } = xe.parse(t), u = r / 100, f = u * 2 - 1, d = s - h, m = ((f * d === -1 ? f : (f + d) / (1 + f * d)) + 1) / 2, y = 1 - m, x = i * m + o * y, b = a * m + l * y, C = n * m + c * y, v = s * u + h * (1 - u);
  return bi(x, b, C, v);
}, z = (e, t = 100) => {
  const r = xe.parse(e);
  return r.r = 255 - r.r, r.g = 255 - r.g, r.b = 255 - r.b, Q0(r, e, t);
};
const {
  entries: uh,
  setPrototypeOf: Dl,
  isFrozen: J0,
  getPrototypeOf: tx,
  getOwnPropertyDescriptor: ex
} = Object;
let {
  freeze: Ht,
  seal: Qt,
  create: ns
} = Object, {
  apply: ss,
  construct: os
} = typeof Reflect < "u" && Reflect;
Ht || (Ht = function(t) {
  return t;
});
Qt || (Qt = function(t) {
  return t;
});
ss || (ss = function(t, r) {
  for (var i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), n = 2; n < i; n++)
    a[n - 2] = arguments[n];
  return t.apply(r, a);
});
os || (os = function(t) {
  for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
    i[a - 1] = arguments[a];
  return new t(...i);
});
const Zi = jt(Array.prototype.forEach), rx = jt(Array.prototype.lastIndexOf), Ol = jt(Array.prototype.pop), Kr = jt(Array.prototype.push), ix = jt(Array.prototype.splice), la = jt(String.prototype.toLowerCase), On = jt(String.prototype.toString), Rn = jt(String.prototype.match), Qr = jt(String.prototype.replace), ax = jt(String.prototype.indexOf), nx = jt(String.prototype.trim), ae = jt(Object.prototype.hasOwnProperty), Nt = jt(RegExp.prototype.test), Jr = sx(TypeError);
function jt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      i[a - 1] = arguments[a];
    return ss(e, t, i);
  };
}
function sx(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
      r[i] = arguments[i];
    return os(e, r);
  };
}
function ot(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : la;
  Dl && Dl(e, null);
  let i = t.length;
  for (; i--; ) {
    let a = t[i];
    if (typeof a == "string") {
      const n = r(a);
      n !== a && (J0(t) || (t[i] = n), a = n);
    }
    e[a] = !0;
  }
  return e;
}
function ox(e) {
  for (let t = 0; t < e.length; t++)
    ae(e, t) || (e[t] = null);
  return e;
}
function pe(e) {
  const t = ns(null);
  for (const [r, i] of uh(e))
    ae(e, r) && (Array.isArray(i) ? t[r] = ox(i) : i && typeof i == "object" && i.constructor === Object ? t[r] = pe(i) : t[r] = i);
  return t;
}
function ti(e, t) {
  for (; e !== null; ) {
    const i = ex(e, t);
    if (i) {
      if (i.get)
        return jt(i.get);
      if (typeof i.value == "function")
        return jt(i.value);
    }
    e = tx(e);
  }
  function r() {
    return null;
  }
  return r;
}
const Rl = Ht(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), In = Ht(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Pn = Ht(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), lx = Ht(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Nn = Ht(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), cx = Ht(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Il = Ht(["#text"]), Pl = Ht(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), zn = Ht(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Nl = Ht(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ki = Ht(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), hx = Qt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), ux = Qt(/<%[\w\W]*|[\w\W]*%>/gm), fx = Qt(/\$\{[\w\W]*/gm), dx = Qt(/^data-[\-\w.\u00B7-\uFFFF]+$/), px = Qt(/^aria-[\-\w]+$/), fh = Qt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), gx = Qt(/^(?:\w+script|data):/i), mx = Qt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), dh = Qt(/^html$/i), yx = Qt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var zl = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: px,
  ATTR_WHITESPACE: mx,
  CUSTOM_ELEMENT: yx,
  DATA_ATTR: dx,
  DOCTYPE_NAME: dh,
  ERB_EXPR: ux,
  IS_ALLOWED_URI: fh,
  IS_SCRIPT_OR_DATA: gx,
  MUSTACHE_EXPR: hx,
  TMPLIT_EXPR: fx
});
const ei = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, xx = function() {
  return typeof window > "u" ? null : window;
}, bx = function(t, r) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let i = null;
  const a = "data-tt-policy-suffix";
  r && r.hasAttribute(a) && (i = r.getAttribute(a));
  const n = "dompurify" + (i ? "#" + i : "");
  try {
    return t.createPolicy(n, {
      createHTML(s) {
        return s;
      },
      createScriptURL(s) {
        return s;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + n + " could not be created."), null;
  }
}, Wl = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function ph() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : xx();
  const t = (tt) => ph(tt);
  if (t.version = "3.3.1", t.removed = [], !e || !e.document || e.document.nodeType !== ei.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const i = r, a = i.currentScript, {
    DocumentFragment: n,
    HTMLTemplateElement: s,
    Node: o,
    Element: l,
    NodeFilter: c,
    NamedNodeMap: h = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: u,
    DOMParser: f,
    trustedTypes: d
  } = e, g = l.prototype, m = ti(g, "cloneNode"), y = ti(g, "remove"), x = ti(g, "nextSibling"), b = ti(g, "childNodes"), C = ti(g, "parentNode");
  if (typeof s == "function") {
    const tt = r.createElement("template");
    tt.content && tt.content.ownerDocument && (r = tt.content.ownerDocument);
  }
  let v, k = "";
  const {
    implementation: A,
    createNodeIterator: S,
    createDocumentFragment: D,
    getElementsByTagName: I
  } = r, {
    importNode: O
  } = i;
  let E = Wl();
  t.isSupported = typeof uh == "function" && typeof C == "function" && A && A.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: N,
    ERB_EXPR: R,
    TMPLIT_EXPR: B,
    DATA_ATTR: L,
    ARIA_ATTR: T,
    IS_SCRIPT_OR_DATA: $,
    ATTR_WHITESPACE: M,
    CUSTOM_ELEMENT: q
  } = zl;
  let {
    IS_ALLOWED_URI: X
  } = zl, K = null;
  const J = ot({}, [...Rl, ...In, ...Pn, ...Nn, ...Il]);
  let Z = null;
  const ct = ot({}, [...Pl, ...zn, ...Nl, ...Ki]);
  let nt = Object.seal(ns(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), bt = null, Ct = null;
  const Pt = Object.seal(ns(null, {
    tagCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    }
  }));
  let ee = !0, yt = !0, re = !1, Oe = !0, ie = !1, qi = !0, Ue = !1, vn = !1, _n = !1, gr = !1, Hi = !1, ji = !1, Go = !0, Xo = !1;
  const Pg = "user-content-";
  let Sn = !0, Vr = !1, mr = {}, ue = null;
  const Tn = ot({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Vo = null;
  const Zo = ot({}, ["audio", "video", "img", "source", "image", "track"]);
  let Bn = null;
  const Ko = ot({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Yi = "http://www.w3.org/1998/Math/MathML", Ui = "http://www.w3.org/2000/svg", we = "http://www.w3.org/1999/xhtml";
  let yr = we, An = !1, Ln = null;
  const Ng = ot({}, [Yi, Ui, we], On);
  let Gi = ot({}, ["mi", "mo", "mn", "ms", "mtext"]), Xi = ot({}, ["annotation-xml"]);
  const zg = ot({}, ["title", "style", "font", "a", "script"]);
  let Zr = null;
  const Wg = ["application/xhtml+xml", "text/html"], qg = "text/html";
  let vt = null, xr = null;
  const Hg = r.createElement("form"), Qo = function(w) {
    return w instanceof RegExp || w instanceof Function;
  }, Mn = function() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(xr && xr === w)) {
      if ((!w || typeof w != "object") && (w = {}), w = pe(w), Zr = // eslint-disable-next-line unicorn/prefer-includes
      Wg.indexOf(w.PARSER_MEDIA_TYPE) === -1 ? qg : w.PARSER_MEDIA_TYPE, vt = Zr === "application/xhtml+xml" ? On : la, K = ae(w, "ALLOWED_TAGS") ? ot({}, w.ALLOWED_TAGS, vt) : J, Z = ae(w, "ALLOWED_ATTR") ? ot({}, w.ALLOWED_ATTR, vt) : ct, Ln = ae(w, "ALLOWED_NAMESPACES") ? ot({}, w.ALLOWED_NAMESPACES, On) : Ng, Bn = ae(w, "ADD_URI_SAFE_ATTR") ? ot(pe(Ko), w.ADD_URI_SAFE_ATTR, vt) : Ko, Vo = ae(w, "ADD_DATA_URI_TAGS") ? ot(pe(Zo), w.ADD_DATA_URI_TAGS, vt) : Zo, ue = ae(w, "FORBID_CONTENTS") ? ot({}, w.FORBID_CONTENTS, vt) : Tn, bt = ae(w, "FORBID_TAGS") ? ot({}, w.FORBID_TAGS, vt) : pe({}), Ct = ae(w, "FORBID_ATTR") ? ot({}, w.FORBID_ATTR, vt) : pe({}), mr = ae(w, "USE_PROFILES") ? w.USE_PROFILES : !1, ee = w.ALLOW_ARIA_ATTR !== !1, yt = w.ALLOW_DATA_ATTR !== !1, re = w.ALLOW_UNKNOWN_PROTOCOLS || !1, Oe = w.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ie = w.SAFE_FOR_TEMPLATES || !1, qi = w.SAFE_FOR_XML !== !1, Ue = w.WHOLE_DOCUMENT || !1, gr = w.RETURN_DOM || !1, Hi = w.RETURN_DOM_FRAGMENT || !1, ji = w.RETURN_TRUSTED_TYPE || !1, _n = w.FORCE_BODY || !1, Go = w.SANITIZE_DOM !== !1, Xo = w.SANITIZE_NAMED_PROPS || !1, Sn = w.KEEP_CONTENT !== !1, Vr = w.IN_PLACE || !1, X = w.ALLOWED_URI_REGEXP || fh, yr = w.NAMESPACE || we, Gi = w.MATHML_TEXT_INTEGRATION_POINTS || Gi, Xi = w.HTML_INTEGRATION_POINTS || Xi, nt = w.CUSTOM_ELEMENT_HANDLING || {}, w.CUSTOM_ELEMENT_HANDLING && Qo(w.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (nt.tagNameCheck = w.CUSTOM_ELEMENT_HANDLING.tagNameCheck), w.CUSTOM_ELEMENT_HANDLING && Qo(w.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (nt.attributeNameCheck = w.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), w.CUSTOM_ELEMENT_HANDLING && typeof w.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (nt.allowCustomizedBuiltInElements = w.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), ie && (yt = !1), Hi && (gr = !0), mr && (K = ot({}, Il), Z = [], mr.html === !0 && (ot(K, Rl), ot(Z, Pl)), mr.svg === !0 && (ot(K, In), ot(Z, zn), ot(Z, Ki)), mr.svgFilters === !0 && (ot(K, Pn), ot(Z, zn), ot(Z, Ki)), mr.mathMl === !0 && (ot(K, Nn), ot(Z, Nl), ot(Z, Ki))), w.ADD_TAGS && (typeof w.ADD_TAGS == "function" ? Pt.tagCheck = w.ADD_TAGS : (K === J && (K = pe(K)), ot(K, w.ADD_TAGS, vt))), w.ADD_ATTR && (typeof w.ADD_ATTR == "function" ? Pt.attributeCheck = w.ADD_ATTR : (Z === ct && (Z = pe(Z)), ot(Z, w.ADD_ATTR, vt))), w.ADD_URI_SAFE_ATTR && ot(Bn, w.ADD_URI_SAFE_ATTR, vt), w.FORBID_CONTENTS && (ue === Tn && (ue = pe(ue)), ot(ue, w.FORBID_CONTENTS, vt)), w.ADD_FORBID_CONTENTS && (ue === Tn && (ue = pe(ue)), ot(ue, w.ADD_FORBID_CONTENTS, vt)), Sn && (K["#text"] = !0), Ue && ot(K, ["html", "head", "body"]), K.table && (ot(K, ["tbody"]), delete bt.tbody), w.TRUSTED_TYPES_POLICY) {
        if (typeof w.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Jr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof w.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Jr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        v = w.TRUSTED_TYPES_POLICY, k = v.createHTML("");
      } else
        v === void 0 && (v = bx(d, a)), v !== null && typeof k == "string" && (k = v.createHTML(""));
      Ht && Ht(w), xr = w;
    }
  }, Jo = ot({}, [...In, ...Pn, ...lx]), tl = ot({}, [...Nn, ...cx]), jg = function(w) {
    let P = C(w);
    (!P || !P.tagName) && (P = {
      namespaceURI: yr,
      tagName: "template"
    });
    const V = la(w.tagName), gt = la(P.tagName);
    return Ln[w.namespaceURI] ? w.namespaceURI === Ui ? P.namespaceURI === we ? V === "svg" : P.namespaceURI === Yi ? V === "svg" && (gt === "annotation-xml" || Gi[gt]) : !!Jo[V] : w.namespaceURI === Yi ? P.namespaceURI === we ? V === "math" : P.namespaceURI === Ui ? V === "math" && Xi[gt] : !!tl[V] : w.namespaceURI === we ? P.namespaceURI === Ui && !Xi[gt] || P.namespaceURI === Yi && !Gi[gt] ? !1 : !tl[V] && (zg[V] || !Jo[V]) : !!(Zr === "application/xhtml+xml" && Ln[w.namespaceURI]) : !1;
  }, fe = function(w) {
    Kr(t.removed, {
      element: w
    });
    try {
      C(w).removeChild(w);
    } catch {
      y(w);
    }
  }, Ge = function(w, P) {
    try {
      Kr(t.removed, {
        attribute: P.getAttributeNode(w),
        from: P
      });
    } catch {
      Kr(t.removed, {
        attribute: null,
        from: P
      });
    }
    if (P.removeAttribute(w), w === "is")
      if (gr || Hi)
        try {
          fe(P);
        } catch {
        }
      else
        try {
          P.setAttribute(w, "");
        } catch {
        }
  }, el = function(w) {
    let P = null, V = null;
    if (_n)
      w = "<remove></remove>" + w;
    else {
      const wt = Rn(w, /^[\r\n\t ]+/);
      V = wt && wt[0];
    }
    Zr === "application/xhtml+xml" && yr === we && (w = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + w + "</body></html>");
    const gt = v ? v.createHTML(w) : w;
    if (yr === we)
      try {
        P = new f().parseFromString(gt, Zr);
      } catch {
      }
    if (!P || !P.documentElement) {
      P = A.createDocument(yr, "template", null);
      try {
        P.documentElement.innerHTML = An ? k : gt;
      } catch {
      }
    }
    const Et = P.body || P.documentElement;
    return w && V && Et.insertBefore(r.createTextNode(V), Et.childNodes[0] || null), yr === we ? I.call(P, Ue ? "html" : "body")[0] : Ue ? P.documentElement : Et;
  }, rl = function(w) {
    return S.call(
      w.ownerDocument || w,
      w,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, En = function(w) {
    return w instanceof u && (typeof w.nodeName != "string" || typeof w.textContent != "string" || typeof w.removeChild != "function" || !(w.attributes instanceof h) || typeof w.removeAttribute != "function" || typeof w.setAttribute != "function" || typeof w.namespaceURI != "string" || typeof w.insertBefore != "function" || typeof w.hasChildNodes != "function");
  }, il = function(w) {
    return typeof o == "function" && w instanceof o;
  };
  function ke(tt, w, P) {
    Zi(tt, (V) => {
      V.call(t, w, P, xr);
    });
  }
  const al = function(w) {
    let P = null;
    if (ke(E.beforeSanitizeElements, w, null), En(w))
      return fe(w), !0;
    const V = vt(w.nodeName);
    if (ke(E.uponSanitizeElement, w, {
      tagName: V,
      allowedTags: K
    }), qi && w.hasChildNodes() && !il(w.firstElementChild) && Nt(/<[/\w!]/g, w.innerHTML) && Nt(/<[/\w!]/g, w.textContent) || w.nodeType === ei.progressingInstruction || qi && w.nodeType === ei.comment && Nt(/<[/\w]/g, w.data))
      return fe(w), !0;
    if (!(Pt.tagCheck instanceof Function && Pt.tagCheck(V)) && (!K[V] || bt[V])) {
      if (!bt[V] && sl(V) && (nt.tagNameCheck instanceof RegExp && Nt(nt.tagNameCheck, V) || nt.tagNameCheck instanceof Function && nt.tagNameCheck(V)))
        return !1;
      if (Sn && !ue[V]) {
        const gt = C(w) || w.parentNode, Et = b(w) || w.childNodes;
        if (Et && gt) {
          const wt = Et.length;
          for (let Yt = wt - 1; Yt >= 0; --Yt) {
            const ve = m(Et[Yt], !0);
            ve.__removalCount = (w.__removalCount || 0) + 1, gt.insertBefore(ve, x(w));
          }
        }
      }
      return fe(w), !0;
    }
    return w instanceof l && !jg(w) || (V === "noscript" || V === "noembed" || V === "noframes") && Nt(/<\/no(script|embed|frames)/i, w.innerHTML) ? (fe(w), !0) : (ie && w.nodeType === ei.text && (P = w.textContent, Zi([N, R, B], (gt) => {
      P = Qr(P, gt, " ");
    }), w.textContent !== P && (Kr(t.removed, {
      element: w.cloneNode()
    }), w.textContent = P)), ke(E.afterSanitizeElements, w, null), !1);
  }, nl = function(w, P, V) {
    if (Go && (P === "id" || P === "name") && (V in r || V in Hg))
      return !1;
    if (!(yt && !Ct[P] && Nt(L, P))) {
      if (!(ee && Nt(T, P))) {
        if (!(Pt.attributeCheck instanceof Function && Pt.attributeCheck(P, w))) {
          if (!Z[P] || Ct[P]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(sl(w) && (nt.tagNameCheck instanceof RegExp && Nt(nt.tagNameCheck, w) || nt.tagNameCheck instanceof Function && nt.tagNameCheck(w)) && (nt.attributeNameCheck instanceof RegExp && Nt(nt.attributeNameCheck, P) || nt.attributeNameCheck instanceof Function && nt.attributeNameCheck(P, w)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              P === "is" && nt.allowCustomizedBuiltInElements && (nt.tagNameCheck instanceof RegExp && Nt(nt.tagNameCheck, V) || nt.tagNameCheck instanceof Function && nt.tagNameCheck(V)))
            ) return !1;
          } else if (!Bn[P]) {
            if (!Nt(X, Qr(V, M, ""))) {
              if (!((P === "src" || P === "xlink:href" || P === "href") && w !== "script" && ax(V, "data:") === 0 && Vo[w])) {
                if (!(re && !Nt($, Qr(V, M, "")))) {
                  if (V)
                    return !1;
                }
              }
            }
          }
        }
      }
    }
    return !0;
  }, sl = function(w) {
    return w !== "annotation-xml" && Rn(w, q);
  }, ol = function(w) {
    ke(E.beforeSanitizeAttributes, w, null);
    const {
      attributes: P
    } = w;
    if (!P || En(w))
      return;
    const V = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Z,
      forceKeepAttr: void 0
    };
    let gt = P.length;
    for (; gt--; ) {
      const Et = P[gt], {
        name: wt,
        namespaceURI: Yt,
        value: ve
      } = Et, br = vt(wt), $n = ve;
      let At = wt === "value" ? $n : nx($n);
      if (V.attrName = br, V.attrValue = At, V.keepAttr = !0, V.forceKeepAttr = void 0, ke(E.uponSanitizeAttribute, w, V), At = V.attrValue, Xo && (br === "id" || br === "name") && (Ge(wt, w), At = Pg + At), qi && Nt(/((--!?|])>)|<\/(style|title|textarea)/i, At)) {
        Ge(wt, w);
        continue;
      }
      if (br === "attributename" && Rn(At, "href")) {
        Ge(wt, w);
        continue;
      }
      if (V.forceKeepAttr)
        continue;
      if (!V.keepAttr) {
        Ge(wt, w);
        continue;
      }
      if (!Oe && Nt(/\/>/i, At)) {
        Ge(wt, w);
        continue;
      }
      ie && Zi([N, R, B], (cl) => {
        At = Qr(At, cl, " ");
      });
      const ll = vt(w.nodeName);
      if (!nl(ll, br, At)) {
        Ge(wt, w);
        continue;
      }
      if (v && typeof d == "object" && typeof d.getAttributeType == "function" && !Yt)
        switch (d.getAttributeType(ll, br)) {
          case "TrustedHTML": {
            At = v.createHTML(At);
            break;
          }
          case "TrustedScriptURL": {
            At = v.createScriptURL(At);
            break;
          }
        }
      if (At !== $n)
        try {
          Yt ? w.setAttributeNS(Yt, wt, At) : w.setAttribute(wt, At), En(w) ? fe(w) : Ol(t.removed);
        } catch {
          Ge(wt, w);
        }
    }
    ke(E.afterSanitizeAttributes, w, null);
  }, Yg = function tt(w) {
    let P = null;
    const V = rl(w);
    for (ke(E.beforeSanitizeShadowDOM, w, null); P = V.nextNode(); )
      ke(E.uponSanitizeShadowNode, P, null), al(P), ol(P), P.content instanceof n && tt(P.content);
    ke(E.afterSanitizeShadowDOM, w, null);
  };
  return t.sanitize = function(tt) {
    let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, P = null, V = null, gt = null, Et = null;
    if (An = !tt, An && (tt = "<!-->"), typeof tt != "string" && !il(tt))
      if (typeof tt.toString == "function") {
        if (tt = tt.toString(), typeof tt != "string")
          throw Jr("dirty is not a string, aborting");
      } else
        throw Jr("toString is not a function");
    if (!t.isSupported)
      return tt;
    if (vn || Mn(w), t.removed = [], typeof tt == "string" && (Vr = !1), Vr) {
      if (tt.nodeName) {
        const ve = vt(tt.nodeName);
        if (!K[ve] || bt[ve])
          throw Jr("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (tt instanceof o)
      P = el("<!---->"), V = P.ownerDocument.importNode(tt, !0), V.nodeType === ei.element && V.nodeName === "BODY" || V.nodeName === "HTML" ? P = V : P.appendChild(V);
    else {
      if (!gr && !ie && !Ue && // eslint-disable-next-line unicorn/prefer-includes
      tt.indexOf("<") === -1)
        return v && ji ? v.createHTML(tt) : tt;
      if (P = el(tt), !P)
        return gr ? null : ji ? k : "";
    }
    P && _n && fe(P.firstChild);
    const wt = rl(Vr ? tt : P);
    for (; gt = wt.nextNode(); )
      al(gt), ol(gt), gt.content instanceof n && Yg(gt.content);
    if (Vr)
      return tt;
    if (gr) {
      if (Hi)
        for (Et = D.call(P.ownerDocument); P.firstChild; )
          Et.appendChild(P.firstChild);
      else
        Et = P;
      return (Z.shadowroot || Z.shadowrootmode) && (Et = O.call(i, Et, !0)), Et;
    }
    let Yt = Ue ? P.outerHTML : P.innerHTML;
    return Ue && K["!doctype"] && P.ownerDocument && P.ownerDocument.doctype && P.ownerDocument.doctype.name && Nt(dh, P.ownerDocument.doctype.name) && (Yt = "<!DOCTYPE " + P.ownerDocument.doctype.name + `>
` + Yt), ie && Zi([N, R, B], (ve) => {
      Yt = Qr(Yt, ve, " ");
    }), v && ji ? v.createHTML(Yt) : Yt;
  }, t.setConfig = function() {
    let tt = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Mn(tt), vn = !0;
  }, t.clearConfig = function() {
    xr = null, vn = !1;
  }, t.isValidAttribute = function(tt, w, P) {
    xr || Mn({});
    const V = vt(tt), gt = vt(w);
    return nl(V, gt, P);
  }, t.addHook = function(tt, w) {
    typeof w == "function" && Kr(E[tt], w);
  }, t.removeHook = function(tt, w) {
    if (w !== void 0) {
      const P = rx(E[tt], w);
      return P === -1 ? void 0 : ix(E[tt], P, 1)[0];
    }
    return Ol(E[tt]);
  }, t.removeHooks = function(tt) {
    E[tt] = [];
  }, t.removeAllHooks = function() {
    E = Wl();
  }, t;
}
var Dr = ph(), gh = /^-{3}\s*[\n\r](.*?)[\n\r]-{3}\s*[\n\r]+/s, Ci = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, Cx = /\s*%%.*\n/gm, Tr, mh = (Tr = class extends Error {
  constructor(t) {
    super(t), this.name = "UnknownDiagramError";
  }
}, p(Tr, "UnknownDiagramError"), Tr), ar = {}, ro = /* @__PURE__ */ p(function(e, t) {
  e = e.replace(gh, "").replace(Ci, "").replace(Cx, `
`);
  for (const [r, { detector: i }] of Object.entries(ar))
    if (i(e, t))
      return r;
  throw new mh(
    `No diagram type detected matching given configuration for text: ${e}`
  );
}, "detectType"), ls = /* @__PURE__ */ p((...e) => {
  for (const { id: t, detector: r, loader: i } of e)
    yh(t, r, i);
}, "registerLazyLoadedDiagrams"), yh = /* @__PURE__ */ p((e, t, r) => {
  ar[e] && F.warn(`Detector with key ${e} already exists. Overwriting.`), ar[e] = { detector: t, loader: r }, F.debug(`Detector with key ${e} added${r ? " with loader" : ""}`);
}, "addDetector"), wx = /* @__PURE__ */ p((e) => ar[e].loader, "getDiagramLoader"), cs = /* @__PURE__ */ p((e, t, { depth: r = 2, clobber: i = !1 } = {}) => {
  const a = { depth: r, clobber: i };
  return Array.isArray(t) && !Array.isArray(e) ? (t.forEach((n) => cs(e, n, a)), e) : Array.isArray(t) && Array.isArray(e) ? (t.forEach((n) => {
    e.includes(n) || e.push(n);
  }), e) : e === void 0 || r <= 0 ? e != null && typeof e == "object" && typeof t == "object" ? Object.assign(e, t) : t : (t !== void 0 && typeof e == "object" && typeof t == "object" && Object.keys(t).forEach((n) => {
    typeof t[n] == "object" && (e[n] === void 0 || typeof e[n] == "object") ? (e[n] === void 0 && (e[n] = Array.isArray(t[n]) ? [] : {}), e[n] = cs(e[n], t[n], { depth: r - 1, clobber: i })) : (i || typeof e[n] != "object" && typeof t[n] != "object") && (e[n] = t[n]);
  }), e);
}, "assignWithDepth"), St = cs, an = "#ffffff", nn = "#f2f2f2", zt = /* @__PURE__ */ p((e, t) => t ? _(e, { s: -40, l: 10 }) : _(e, { s: -40, l: -10 }), "mkBorder"), Br, kx = (Br = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#fff4dd", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#333", this.THEME_COLOR_LIMIT = 12, this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px";
  }
  updateColors() {
    if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333"), this.secondaryColor = this.secondaryColor || _(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || _(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || zt(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || zt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || zt(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || zt(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#333", this.secondaryTextColor = this.secondaryTextColor || z(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || z(this.tertiaryColor), this.lineColor = this.lineColor || z(this.background), this.arrowheadColor = this.arrowheadColor || z(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? et(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || et(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || z(this.lineColor), this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || H(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.vertLineColor = this.vertLineColor || "navy", this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.darkMode ? (this.rowOdd = this.rowOdd || et(this.mainBkg, 5) || "#ffffff", this.rowEven = this.rowEven || et(this.mainBkg, 10)) : (this.rowOdd = this.rowOdd || H(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || H(this.mainBkg, 5)), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || this.tertiaryColor, this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || _(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || _(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || _(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || _(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || _(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || _(this.primaryColor, { h: 210, l: 150 }), this.cScale9 = this.cScale9 || _(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || _(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || _(this.primaryColor, { h: 330 }), this.darkMode)
      for (let r = 0; r < this.THEME_COLOR_LIMIT; r++)
        this["cScale" + r] = et(this["cScale" + r], 75);
    else
      for (let r = 0; r < this.THEME_COLOR_LIMIT; r++)
        this["cScale" + r] = et(this["cScale" + r], 25);
    for (let r = 0; r < this.THEME_COLOR_LIMIT; r++)
      this["cScaleInv" + r] = this["cScaleInv" + r] || z(this["cScale" + r]);
    for (let r = 0; r < this.THEME_COLOR_LIMIT; r++)
      this.darkMode ? this["cScalePeer" + r] = this["cScalePeer" + r] || H(this["cScale" + r], 10) : this["cScalePeer" + r] = this["cScalePeer" + r] || et(this["cScale" + r], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let r = 0; r < this.THEME_COLOR_LIMIT; r++)
      this["cScaleLabel" + r] = this["cScaleLabel" + r] || this.scaleLabelColor;
    const t = this.darkMode ? -4 : -1;
    for (let r = 0; r < 5; r++)
      this["surface" + r] = this["surface" + r] || _(this.mainBkg, { h: 180, s: -15, l: t * (5 + r * 3) }), this["surfacePeer" + r] = this["surfacePeer" + r] || _(this.mainBkg, { h: 180, s: -15, l: t * (8 + r * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || _(this.primaryColor, { h: 64 }), this.fillType3 = this.fillType3 || _(this.secondaryColor, { h: 64 }), this.fillType4 = this.fillType4 || _(this.primaryColor, { h: -64 }), this.fillType5 = this.fillType5 || _(this.secondaryColor, { h: -64 }), this.fillType6 = this.fillType6 || _(this.primaryColor, { h: 128 }), this.fillType7 = this.fillType7 || _(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || _(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || _(this.secondaryColor, { l: -10 }), this.pie6 = this.pie6 || _(this.tertiaryColor, { l: -10 }), this.pie7 = this.pie7 || _(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || _(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || _(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || _(this.primaryColor, { h: 60, l: -20 }), this.pie11 = this.pie11 || _(this.primaryColor, { h: -60, l: -20 }), this.pie12 = this.pie12 || _(this.primaryColor, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.radar = {
      axisColor: this.radar?.axisColor || this.lineColor,
      axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
      axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
      curveOpacity: this.radar?.curveOpacity || 0.5,
      curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
      graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
      graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
      graticuleOpacity: this.radar?.graticuleOpacity || 0.3,
      legendBoxSize: this.radar?.legendBoxSize || 12,
      legendFontSize: this.radar?.legendFontSize || 12
    }, this.archEdgeColor = this.archEdgeColor || "#777", this.archEdgeArrowColor = this.archEdgeArrowColor || "#777", this.archEdgeWidth = this.archEdgeWidth || "3", this.archGroupBorderColor = this.archGroupBorderColor || "#000", this.archGroupBorderWidth = this.archGroupBorderWidth || "2px", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || _(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || _(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || _(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || _(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || _(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || _(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Oi(this.quadrant1Fill) ? H(this.quadrant1Fill) : et(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? et(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || _(this.primaryColor, { h: -30 }), this.git4 = this.git4 || _(this.primaryColor, { h: -60 }), this.git5 = this.git5 || _(this.primaryColor, { h: -90 }), this.git6 = this.git6 || _(this.primaryColor, { h: 60 }), this.git7 = this.git7 || _(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = H(this.git0, 25), this.git1 = H(this.git1, 25), this.git2 = H(this.git2, 25), this.git3 = H(this.git3, 25), this.git4 = H(this.git4, 25), this.git5 = H(this.git5, 25), this.git6 = H(this.git6, 25), this.git7 = H(this.git7, 25)) : (this.git0 = et(this.git0, 25), this.git1 = et(this.git1, 25), this.git2 = et(this.git2, 25), this.git3 = et(this.git3, 25), this.git4 = et(this.git4, 25), this.git5 = et(this.git5, 25), this.git6 = et(this.git6, 25), this.git7 = et(this.git7, 25)), this.gitInv0 = this.gitInv0 || z(this.git0), this.gitInv1 = this.gitInv1 || z(this.git1), this.gitInv2 = this.gitInv2 || z(this.git2), this.gitInv3 = this.gitInv3 || z(this.git3), this.gitInv4 = this.gitInv4 || z(this.git4), this.gitInv5 = this.gitInv5 || z(this.git5), this.gitInv6 = this.gitInv6 || z(this.git6), this.gitInv7 = this.gitInv7 || z(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || an, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || nn;
  }
  calculate(t) {
    if (typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, p(Br, "Theme"), Br), vx = /* @__PURE__ */ p((e) => {
  const t = new kx();
  return t.calculate(e), t;
}, "getThemeVariables"), Ar, _x = (Ar = class {
  constructor() {
    this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = H(this.primaryColor, 16), this.tertiaryColor = _(this.primaryColor, { h: -160 }), this.primaryBorderColor = z(this.background), this.secondaryBorderColor = zt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = zt(this.tertiaryColor, this.darkMode), this.primaryTextColor = z(this.primaryColor), this.secondaryTextColor = z(this.secondaryColor), this.tertiaryTextColor = z(this.tertiaryColor), this.lineColor = z(this.background), this.textColor = z(this.background), this.mainBkg = "#1f2020", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = H(z("#323D47"), 10), this.lineColor = "calculated", this.border1 = "#ccc", this.border2 = bi(255, 255, 255, 0.25), this.arrowheadColor = "calculated", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "#181818", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#F9FFFE", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "calculated", this.activationBkgColor = "calculated", this.sequenceNumberColor = "black", this.sectionBkgColor = et("#EAE8D9", 30), this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "#EAE8D9", this.excludeBkgColor = et(this.sectionBkgColor, 10), this.taskBorderColor = bi(255, 255, 255, 70), this.taskBkgColor = "calculated", this.taskTextColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = bi(255, 255, 255, 50), this.activeTaskBkgColor = "#81B1DB", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "grey", this.critBorderColor = "#E83737", this.critBkgColor = "#E83737", this.taskTextDarkColor = "calculated", this.todayLineColor = "#DB5757", this.vertLineColor = "#00BFFF", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = this.rowOdd || H(this.mainBkg, 5) || "#ffffff", this.rowEven = this.rowEven || et(this.mainBkg, 10), this.labelColor = "calculated", this.errorBkgColor = "#a44141", this.errorTextColor = "#ddd";
  }
  updateColors() {
    this.secondBkg = H(this.mainBkg, 16), this.lineColor = this.mainContrastColor, this.arrowheadColor = this.mainContrastColor, this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.edgeLabelBackground = H(this.labelBackground, 25), this.actorBorder = this.border1, this.actorBkg = this.mainBkg, this.actorTextColor = this.mainContrastColor, this.actorLineColor = this.actorBorder, this.signalColor = this.mainContrastColor, this.signalTextColor = this.mainContrastColor, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.mainContrastColor, this.loopTextColor = this.mainContrastColor, this.noteBorderColor = this.secondaryBorderColor, this.noteBkgColor = this.secondBkg, this.noteTextColor = this.secondaryTextColor, this.activationBorderColor = this.border1, this.activationBkgColor = this.secondBkg, this.altSectionBkgColor = this.background, this.taskBkgColor = H(this.mainBkg, 23), this.taskTextColor = this.darkTextColor, this.taskTextLightColor = this.mainContrastColor, this.taskTextOutsideColor = this.taskTextLightColor, this.gridColor = this.mainContrastColor, this.doneTaskBkgColor = this.mainContrastColor, this.taskTextDarkColor = this.darkTextColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#555", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#f4f4f4", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = _(this.primaryColor, { h: 64 }), this.fillType3 = _(this.secondaryColor, { h: 64 }), this.fillType4 = _(this.primaryColor, { h: -64 }), this.fillType5 = _(this.secondaryColor, { h: -64 }), this.fillType6 = _(this.primaryColor, { h: 128 }), this.fillType7 = _(this.secondaryColor, { h: 128 }), this.cScale1 = this.cScale1 || "#0b0000", this.cScale2 = this.cScale2 || "#4d1037", this.cScale3 = this.cScale3 || "#3f5258", this.cScale4 = this.cScale4 || "#4f2f1b", this.cScale5 = this.cScale5 || "#6e0a0a", this.cScale6 = this.cScale6 || "#3b0048", this.cScale7 = this.cScale7 || "#995a01", this.cScale8 = this.cScale8 || "#154706", this.cScale9 = this.cScale9 || "#161722", this.cScale10 = this.cScale10 || "#00296f", this.cScale11 = this.cScale11 || "#01629c", this.cScale12 = this.cScale12 || "#010029", this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || _(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || _(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || _(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || _(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || _(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || _(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || _(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || _(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || _(this.primaryColor, { h: 330 });
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleInv" + t] = this["cScaleInv" + t] || z(this["cScale" + t]);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScalePeer" + t] = this["cScalePeer" + t] || H(this["cScale" + t], 10);
    for (let t = 0; t < 5; t++)
      this["surface" + t] = this["surface" + t] || _(this.mainBkg, { h: 30, s: -30, l: -(-10 + t * 4) }), this["surfacePeer" + t] = this["surfacePeer" + t] || _(this.mainBkg, { h: 30, s: -30, l: -(-7 + t * 4) });
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleLabel" + t] = this["cScaleLabel" + t] || this.scaleLabelColor;
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["pie" + t] = this["cScale" + t];
    this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || _(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || _(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || _(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || _(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || _(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || _(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Oi(this.quadrant1Fill) ? H(this.quadrant1Fill) : et(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#3498db,#2ecc71,#e74c3c,#f1c40f,#bdc3c7,#ffffff,#34495e,#9b59b6,#1abc9c,#e67e22"
    }, this.packet = {
      startByteColor: this.primaryTextColor,
      endByteColor: this.primaryTextColor,
      labelColor: this.primaryTextColor,
      titleColor: this.primaryTextColor,
      blockStrokeColor: this.primaryTextColor,
      blockFillColor: this.background
    }, this.radar = {
      axisColor: this.radar?.axisColor || this.lineColor,
      axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
      axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
      curveOpacity: this.radar?.curveOpacity || 0.5,
      curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
      graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
      graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
      graticuleOpacity: this.radar?.graticuleOpacity || 0.3,
      legendBoxSize: this.radar?.legendBoxSize || 12,
      legendFontSize: this.radar?.legendFontSize || 12
    }, this.classText = this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? et(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = H(this.secondaryColor, 20), this.git1 = H(this.pie2 || this.secondaryColor, 20), this.git2 = H(this.pie3 || this.tertiaryColor, 20), this.git3 = H(this.pie4 || _(this.primaryColor, { h: -30 }), 20), this.git4 = H(this.pie5 || _(this.primaryColor, { h: -60 }), 20), this.git5 = H(this.pie6 || _(this.primaryColor, { h: -90 }), 10), this.git6 = H(this.pie7 || _(this.primaryColor, { h: 60 }), 10), this.git7 = H(this.pie8 || _(this.primaryColor, { h: 120 }), 20), this.gitInv0 = this.gitInv0 || z(this.git0), this.gitInv1 = this.gitInv1 || z(this.git1), this.gitInv2 = this.gitInv2 || z(this.git2), this.gitInv3 = this.gitInv3 || z(this.git3), this.gitInv4 = this.gitInv4 || z(this.git4), this.gitInv5 = this.gitInv5 || z(this.git5), this.gitInv6 = this.gitInv6 || z(this.git6), this.gitInv7 = this.gitInv7 || z(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || z(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || z(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || H(this.background, 12), this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || H(this.background, 2), this.nodeBorder = this.nodeBorder || "#999";
  }
  calculate(t) {
    if (typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, p(Ar, "Theme"), Ar), Sx = /* @__PURE__ */ p((e) => {
  const t = new _x();
  return t.calculate(e), t;
}, "getThemeVariables"), Lr, Tx = (Lr = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#ECECFF", this.secondaryColor = _(this.primaryColor, { h: 120 }), this.secondaryColor = "#ffffde", this.tertiaryColor = _(this.primaryColor, { h: -160 }), this.primaryBorderColor = zt(this.primaryColor, this.darkMode), this.secondaryBorderColor = zt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = zt(this.tertiaryColor, this.darkMode), this.primaryTextColor = z(this.primaryColor), this.secondaryTextColor = z(this.secondaryColor), this.tertiaryTextColor = z(this.tertiaryColor), this.lineColor = z(this.background), this.textColor = z(this.background), this.background = "white", this.mainBkg = "#ECECFF", this.secondBkg = "#ffffde", this.lineColor = "#333333", this.border1 = "#9370DB", this.border2 = "#aaaa33", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "rgba(232,232,232, 0.8)", this.textColor = "#333", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = this.taskTextDarkColor, this.taskTextClickableColor = "calculated", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBorderColor = "calculated", this.critBkgColor = "calculated", this.todayLineColor = "calculated", this.vertLineColor = "calculated", this.sectionBkgColor = bi(102, 102, 255, 0.49), this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#fff400", this.taskBorderColor = "#534fbc", this.taskBkgColor = "#8a90dd", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "#534fbc", this.activeTaskBkgColor = "#bfc7ff", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.vertLineColor = "navy", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = "calculated", this.rowEven = "calculated", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222", this.updateColors();
  }
  updateColors() {
    this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || _(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || _(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || _(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || _(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || _(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || _(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || _(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || _(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || _(this.primaryColor, { h: 330 }), this.cScalePeer1 = this.cScalePeer1 || et(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || et(this.tertiaryColor, 40);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScale" + t] = et(this["cScale" + t], 10), this["cScalePeer" + t] = this["cScalePeer" + t] || et(this["cScale" + t], 25);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleInv" + t] = this["cScaleInv" + t] || _(this["cScale" + t], { h: 180 });
    for (let t = 0; t < 5; t++)
      this["surface" + t] = this["surface" + t] || _(this.mainBkg, { h: 30, l: -(5 + t * 5) }), this["surfacePeer" + t] = this["surfacePeer" + t] || _(this.mainBkg, { h: 30, l: -(7 + t * 5) });
    if (this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor, this.labelTextColor !== "calculated") {
      this.cScaleLabel0 = this.cScaleLabel0 || z(this.labelTextColor), this.cScaleLabel3 = this.cScaleLabel3 || z(this.labelTextColor);
      for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
        this["cScaleLabel" + t] = this["cScaleLabel" + t] || this.labelTextColor;
    }
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.textColor, this.edgeLabelBackground = this.labelBackground, this.actorBorder = H(this.border1, 23), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.signalColor = this.textColor, this.signalTextColor = this.textColor, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.actorLineColor = this.actorBorder, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.rowOdd = this.rowOdd || H(this.primaryColor, 75) || "#ffffff", this.rowEven = this.rowEven || H(this.primaryColor, 1), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = _(this.primaryColor, { h: 64 }), this.fillType3 = _(this.secondaryColor, { h: 64 }), this.fillType4 = _(this.primaryColor, { h: -64 }), this.fillType5 = _(this.secondaryColor, { h: -64 }), this.fillType6 = _(this.primaryColor, { h: 128 }), this.fillType7 = _(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || _(this.tertiaryColor, { l: -40 }), this.pie4 = this.pie4 || _(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || _(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || _(this.tertiaryColor, { l: -20 }), this.pie7 = this.pie7 || _(this.primaryColor, { h: 60, l: -20 }), this.pie8 = this.pie8 || _(this.primaryColor, { h: -60, l: -40 }), this.pie9 = this.pie9 || _(this.primaryColor, { h: 120, l: -40 }), this.pie10 = this.pie10 || _(this.primaryColor, { h: 60, l: -40 }), this.pie11 = this.pie11 || _(this.primaryColor, { h: -90, l: -40 }), this.pie12 = this.pie12 || _(this.primaryColor, { h: 120, l: -30 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || _(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || _(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || _(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || _(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || _(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || _(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Oi(this.quadrant1Fill) ? H(this.quadrant1Fill) : et(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.radar = {
      axisColor: this.radar?.axisColor || this.lineColor,
      axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
      axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
      curveOpacity: this.radar?.curveOpacity || 0.5,
      curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
      graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
      graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
      graticuleOpacity: this.radar?.graticuleOpacity || 0.3,
      legendBoxSize: this.radar?.legendBoxSize || 12,
      legendFontSize: this.radar?.legendFontSize || 12
    }, this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#ECECFF,#8493A6,#FFC3A0,#DCDDE1,#B8E994,#D1A36F,#C3CDE6,#FFB6C1,#496078,#F8F3E3"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.labelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || _(this.primaryColor, { h: -30 }), this.git4 = this.git4 || _(this.primaryColor, { h: -60 }), this.git5 = this.git5 || _(this.primaryColor, { h: -90 }), this.git6 = this.git6 || _(this.primaryColor, { h: 60 }), this.git7 = this.git7 || _(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = H(this.git0, 25), this.git1 = H(this.git1, 25), this.git2 = H(this.git2, 25), this.git3 = H(this.git3, 25), this.git4 = H(this.git4, 25), this.git5 = H(this.git5, 25), this.git6 = H(this.git6, 25), this.git7 = H(this.git7, 25)) : (this.git0 = et(this.git0, 25), this.git1 = et(this.git1, 25), this.git2 = et(this.git2, 25), this.git3 = et(this.git3, 25), this.git4 = et(this.git4, 25), this.git5 = et(this.git5, 25), this.git6 = et(this.git6, 25), this.git7 = et(this.git7, 25)), this.gitInv0 = this.gitInv0 || et(z(this.git0), 25), this.gitInv1 = this.gitInv1 || z(this.git1), this.gitInv2 = this.gitInv2 || z(this.git2), this.gitInv3 = this.gitInv3 || z(this.git3), this.gitInv4 = this.gitInv4 || z(this.git4), this.gitInv5 = this.gitInv5 || z(this.git5), this.gitInv6 = this.gitInv6 || z(this.git6), this.gitInv7 = this.gitInv7 || z(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || z(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || z(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || an, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || nn;
  }
  calculate(t) {
    if (Object.keys(this).forEach((i) => {
      this[i] === "calculated" && (this[i] = void 0);
    }), typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, p(Lr, "Theme"), Lr), Bx = /* @__PURE__ */ p((e) => {
  const t = new Tx();
  return t.calculate(e), t;
}, "getThemeVariables"), Mr, Ax = (Mr = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#cde498", this.secondaryColor = "#cdffb2", this.background = "white", this.mainBkg = "#cde498", this.secondBkg = "#cdffb2", this.lineColor = "green", this.border1 = "#13540c", this.border2 = "#6eaa49", this.arrowheadColor = "green", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.tertiaryColor = H("#cde498", 10), this.primaryBorderColor = zt(this.primaryColor, this.darkMode), this.secondaryBorderColor = zt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = zt(this.tertiaryColor, this.darkMode), this.primaryTextColor = z(this.primaryColor), this.secondaryTextColor = z(this.secondaryColor), this.tertiaryTextColor = z(this.primaryColor), this.lineColor = z(this.background), this.textColor = z(this.background), this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#333", this.edgeLabelBackground = "#e8e8e8", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "calculated", this.signalColor = "#333", this.signalTextColor = "#333", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "#326932", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "#6eaa49", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#6eaa49", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "#487e3a", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.vertLineColor = "#00BFFF", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
  }
  updateColors() {
    this.actorBorder = et(this.mainBkg, 20), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.actorLineColor = this.actorBorder, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || _(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || _(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || _(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || _(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || _(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || _(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || _(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || _(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || _(this.primaryColor, { h: 330 }), this.cScalePeer1 = this.cScalePeer1 || et(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || et(this.tertiaryColor, 40);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScale" + t] = et(this["cScale" + t], 10), this["cScalePeer" + t] = this["cScalePeer" + t] || et(this["cScale" + t], 25);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleInv" + t] = this["cScaleInv" + t] || _(this["cScale" + t], { h: 180 });
    this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor;
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleLabel" + t] = this["cScaleLabel" + t] || this.scaleLabelColor;
    for (let t = 0; t < 5; t++)
      this["surface" + t] = this["surface" + t] || _(this.mainBkg, { h: 30, s: -30, l: -(5 + t * 5) }), this["surfacePeer" + t] = this["surfacePeer" + t] || _(this.mainBkg, { h: 30, s: -30, l: -(8 + t * 5) });
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.taskBorderColor = this.border1, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.rowOdd = this.rowOdd || H(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || H(this.mainBkg, 20), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = _(this.primaryColor, { h: 64 }), this.fillType3 = _(this.secondaryColor, { h: 64 }), this.fillType4 = _(this.primaryColor, { h: -64 }), this.fillType5 = _(this.secondaryColor, { h: -64 }), this.fillType6 = _(this.primaryColor, { h: 128 }), this.fillType7 = _(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || _(this.primaryColor, { l: -30 }), this.pie5 = this.pie5 || _(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || _(this.tertiaryColor, { h: 40, l: -40 }), this.pie7 = this.pie7 || _(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || _(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || _(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || _(this.primaryColor, { h: 60, l: -50 }), this.pie11 = this.pie11 || _(this.primaryColor, { h: -60, l: -50 }), this.pie12 = this.pie12 || _(this.primaryColor, { h: 120, l: -50 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || _(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || _(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || _(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || _(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || _(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || _(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Oi(this.quadrant1Fill) ? H(this.quadrant1Fill) : et(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.packet = {
      startByteColor: this.primaryTextColor,
      endByteColor: this.primaryTextColor,
      labelColor: this.primaryTextColor,
      titleColor: this.primaryTextColor,
      blockStrokeColor: this.primaryTextColor,
      blockFillColor: this.mainBkg
    }, this.radar = {
      axisColor: this.radar?.axisColor || this.lineColor,
      axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
      axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
      curveOpacity: this.radar?.curveOpacity || 0.5,
      curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
      graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
      graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
      graticuleOpacity: this.radar?.graticuleOpacity || 0.3,
      legendBoxSize: this.radar?.legendBoxSize || 12,
      legendFontSize: this.radar?.legendFontSize || 12
    }, this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#CDE498,#FF6B6B,#A0D2DB,#D7BDE2,#F0F0F0,#FFC3A0,#7FD8BE,#FF9A8B,#FAF3E0,#FFF176"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || _(this.primaryColor, { h: -30 }), this.git4 = this.git4 || _(this.primaryColor, { h: -60 }), this.git5 = this.git5 || _(this.primaryColor, { h: -90 }), this.git6 = this.git6 || _(this.primaryColor, { h: 60 }), this.git7 = this.git7 || _(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = H(this.git0, 25), this.git1 = H(this.git1, 25), this.git2 = H(this.git2, 25), this.git3 = H(this.git3, 25), this.git4 = H(this.git4, 25), this.git5 = H(this.git5, 25), this.git6 = H(this.git6, 25), this.git7 = H(this.git7, 25)) : (this.git0 = et(this.git0, 25), this.git1 = et(this.git1, 25), this.git2 = et(this.git2, 25), this.git3 = et(this.git3, 25), this.git4 = et(this.git4, 25), this.git5 = et(this.git5, 25), this.git6 = et(this.git6, 25), this.git7 = et(this.git7, 25)), this.gitInv0 = this.gitInv0 || z(this.git0), this.gitInv1 = this.gitInv1 || z(this.git1), this.gitInv2 = this.gitInv2 || z(this.git2), this.gitInv3 = this.gitInv3 || z(this.git3), this.gitInv4 = this.gitInv4 || z(this.git4), this.gitInv5 = this.gitInv5 || z(this.git5), this.gitInv6 = this.gitInv6 || z(this.git6), this.gitInv7 = this.gitInv7 || z(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || z(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || z(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || an, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || nn;
  }
  calculate(t) {
    if (typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, p(Mr, "Theme"), Mr), Lx = /* @__PURE__ */ p((e) => {
  const t = new Ax();
  return t.calculate(e), t;
}, "getThemeVariables"), Er, Mx = (Er = class {
  constructor() {
    this.primaryColor = "#eee", this.contrast = "#707070", this.secondaryColor = H(this.contrast, 55), this.background = "#ffffff", this.tertiaryColor = _(this.primaryColor, { h: -160 }), this.primaryBorderColor = zt(this.primaryColor, this.darkMode), this.secondaryBorderColor = zt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = zt(this.tertiaryColor, this.darkMode), this.primaryTextColor = z(this.primaryColor), this.secondaryTextColor = z(this.secondaryColor), this.tertiaryTextColor = z(this.tertiaryColor), this.lineColor = z(this.background), this.textColor = z(this.background), this.mainBkg = "#eee", this.secondBkg = "calculated", this.lineColor = "#666", this.border1 = "#999", this.border2 = "calculated", this.note = "#ffa", this.text = "#333", this.critical = "#d42", this.done = "#bbb", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "white", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = this.actorBorder, this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "calculated", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBkgColor = "calculated", this.critBorderColor = "calculated", this.todayLineColor = "calculated", this.vertLineColor = "calculated", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = this.rowOdd || H(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || "#f4f4f4", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
  }
  updateColors() {
    this.secondBkg = H(this.contrast, 55), this.border2 = this.contrast, this.actorBorder = H(this.border1, 23), this.actorBkg = this.mainBkg, this.actorTextColor = this.text, this.actorLineColor = this.actorBorder, this.signalColor = this.text, this.signalTextColor = this.text, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.text, this.loopTextColor = this.text, this.noteBorderColor = "#999", this.noteBkgColor = "#666", this.noteTextColor = "#fff", this.cScale0 = this.cScale0 || "#555", this.cScale1 = this.cScale1 || "#F4F4F4", this.cScale2 = this.cScale2 || "#555", this.cScale3 = this.cScale3 || "#BBB", this.cScale4 = this.cScale4 || "#777", this.cScale5 = this.cScale5 || "#999", this.cScale6 = this.cScale6 || "#DDD", this.cScale7 = this.cScale7 || "#FFF", this.cScale8 = this.cScale8 || "#DDD", this.cScale9 = this.cScale9 || "#BBB", this.cScale10 = this.cScale10 || "#999", this.cScale11 = this.cScale11 || "#777";
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleInv" + t] = this["cScaleInv" + t] || z(this["cScale" + t]);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this.darkMode ? this["cScalePeer" + t] = this["cScalePeer" + t] || H(this["cScale" + t], 10) : this["cScalePeer" + t] = this["cScalePeer" + t] || et(this["cScale" + t], 10);
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.cScaleLabel0 = this.cScaleLabel0 || this.cScale1, this.cScaleLabel2 = this.cScaleLabel2 || this.cScale1;
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleLabel" + t] = this["cScaleLabel" + t] || this.scaleLabelColor;
    for (let t = 0; t < 5; t++)
      this["surface" + t] = this["surface" + t] || _(this.mainBkg, { l: -(5 + t * 5) }), this["surfacePeer" + t] = this["surfacePeer" + t] || _(this.mainBkg, { l: -(8 + t * 5) });
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.text, this.sectionBkgColor = H(this.contrast, 30), this.sectionBkgColor2 = H(this.contrast, 30), this.taskBorderColor = et(this.contrast, 10), this.taskBkgColor = this.contrast, this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = this.text, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.gridColor = H(this.border1, 30), this.doneTaskBkgColor = this.done, this.doneTaskBorderColor = this.lineColor, this.critBkgColor = this.critical, this.critBorderColor = et(this.critBkgColor, 10), this.todayLineColor = this.critBkgColor, this.vertLineColor = this.critBkgColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.transitionColor = this.transitionColor || "#000", this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f4f4f4", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.stateBorder = this.stateBorder || "#000", this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#222", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = _(this.primaryColor, { h: 64 }), this.fillType3 = _(this.secondaryColor, { h: 64 }), this.fillType4 = _(this.primaryColor, { h: -64 }), this.fillType5 = _(this.secondaryColor, { h: -64 }), this.fillType6 = _(this.primaryColor, { h: 128 }), this.fillType7 = _(this.secondaryColor, { h: 128 });
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["pie" + t] = this["cScale" + t];
    this.pie12 = this.pie0, this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || _(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || _(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || _(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || _(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || _(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || _(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Oi(this.quadrant1Fill) ? H(this.quadrant1Fill) : et(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#EEE,#6BB8E4,#8ACB88,#C7ACD6,#E8DCC2,#FFB2A8,#FFF380,#7E8D91,#FFD8B1,#FAF3E0"
    }, this.radar = {
      axisColor: this.radar?.axisColor || this.lineColor,
      axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
      axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
      curveOpacity: this.radar?.curveOpacity || 0.5,
      curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
      graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
      graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
      graticuleOpacity: this.radar?.graticuleOpacity || 0.3,
      legendBoxSize: this.radar?.legendBoxSize || 12,
      legendFontSize: this.radar?.legendFontSize || 12
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = et(this.pie1, 25) || this.primaryColor, this.git1 = this.pie2 || this.secondaryColor, this.git2 = this.pie3 || this.tertiaryColor, this.git3 = this.pie4 || _(this.primaryColor, { h: -30 }), this.git4 = this.pie5 || _(this.primaryColor, { h: -60 }), this.git5 = this.pie6 || _(this.primaryColor, { h: -90 }), this.git6 = this.pie7 || _(this.primaryColor, { h: 60 }), this.git7 = this.pie8 || _(this.primaryColor, { h: 120 }), this.gitInv0 = this.gitInv0 || z(this.git0), this.gitInv1 = this.gitInv1 || z(this.git1), this.gitInv2 = this.gitInv2 || z(this.git2), this.gitInv3 = this.gitInv3 || z(this.git3), this.gitInv4 = this.gitInv4 || z(this.git4), this.gitInv5 = this.gitInv5 || z(this.git5), this.gitInv6 = this.gitInv6 || z(this.git6), this.gitInv7 = this.gitInv7 || z(this.git7), this.branchLabelColor = this.branchLabelColor || this.labelTextColor, this.gitBranchLabel0 = this.branchLabelColor, this.gitBranchLabel1 = "white", this.gitBranchLabel2 = this.branchLabelColor, this.gitBranchLabel3 = "white", this.gitBranchLabel4 = this.branchLabelColor, this.gitBranchLabel5 = this.branchLabelColor, this.gitBranchLabel6 = this.branchLabelColor, this.gitBranchLabel7 = this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || an, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || nn;
  }
  calculate(t) {
    if (typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, p(Er, "Theme"), Er), Ex = /* @__PURE__ */ p((e) => {
  const t = new Mx();
  return t.calculate(e), t;
}, "getThemeVariables"), Ae = {
  base: {
    getThemeVariables: vx
  },
  dark: {
    getThemeVariables: Sx
  },
  default: {
    getThemeVariables: Bx
  },
  forest: {
    getThemeVariables: Lx
  },
  neutral: {
    getThemeVariables: Ex
  }
}, de = {
  flowchart: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    subGraphTitleMargin: {
      top: 0,
      bottom: 0
    },
    diagramPadding: 8,
    htmlLabels: !0,
    nodeSpacing: 50,
    rankSpacing: 50,
    curve: "basis",
    padding: 15,
    defaultRenderer: "dagre-wrapper",
    wrappingWidth: 200,
    inheritDir: !1
  },
  sequence: {
    useMaxWidth: !0,
    hideUnusedParticipants: !1,
    activationWidth: 10,
    diagramMarginX: 50,
    diagramMarginY: 10,
    actorMargin: 50,
    width: 150,
    height: 65,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    mirrorActors: !0,
    forceMenus: !1,
    bottomMarginAdj: 1,
    rightAngles: !1,
    showSequenceNumbers: !1,
    actorFontSize: 14,
    actorFontFamily: '"Open Sans", sans-serif',
    actorFontWeight: 400,
    noteFontSize: 14,
    noteFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    noteFontWeight: 400,
    noteAlign: "center",
    messageFontSize: 16,
    messageFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    messageFontWeight: 400,
    wrap: !1,
    wrapPadding: 10,
    labelBoxWidth: 50,
    labelBoxHeight: 20
  },
  gantt: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    barHeight: 20,
    barGap: 4,
    topPadding: 50,
    rightPadding: 75,
    leftPadding: 75,
    gridLineStartPadding: 35,
    fontSize: 11,
    sectionFontSize: 11,
    numberSectionStyles: 4,
    axisFormat: "%Y-%m-%d",
    topAxis: !1,
    displayMode: "",
    weekday: "sunday"
  },
  journey: {
    useMaxWidth: !0,
    diagramMarginX: 50,
    diagramMarginY: 10,
    leftMargin: 150,
    maxLabelWidth: 360,
    width: 150,
    height: 50,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    bottomMarginAdj: 1,
    rightAngles: !1,
    taskFontSize: 14,
    taskFontFamily: '"Open Sans", sans-serif',
    taskMargin: 50,
    activationWidth: 10,
    textPlacement: "fo",
    actorColours: [
      "#8FBC8F",
      "#7CFC00",
      "#00FFFF",
      "#20B2AA",
      "#B0E0E6",
      "#FFFFE0"
    ],
    sectionFills: [
      "#191970",
      "#8B008B",
      "#4B0082",
      "#2F4F4F",
      "#800000",
      "#8B4513",
      "#00008B"
    ],
    sectionColours: [
      "#fff"
    ],
    titleColor: "",
    titleFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    titleFontSize: "4ex"
  },
  class: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    arrowMarkerAbsolute: !1,
    dividerMargin: 10,
    padding: 5,
    textHeight: 10,
    defaultRenderer: "dagre-wrapper",
    htmlLabels: !1,
    hideEmptyMembersBox: !1
  },
  state: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    dividerMargin: 10,
    sizeUnit: 5,
    padding: 8,
    textHeight: 10,
    titleShift: -15,
    noteMargin: 10,
    forkWidth: 70,
    forkHeight: 7,
    miniPadding: 2,
    fontSizeFactor: 5.02,
    fontSize: 24,
    labelHeight: 16,
    edgeLengthFactor: "20",
    compositTitleSize: 35,
    radius: 5,
    defaultRenderer: "dagre-wrapper"
  },
  er: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    diagramPadding: 20,
    layoutDirection: "TB",
    minEntityWidth: 100,
    minEntityHeight: 75,
    entityPadding: 15,
    nodeSpacing: 140,
    rankSpacing: 80,
    stroke: "gray",
    fill: "honeydew",
    fontSize: 12
  },
  pie: {
    useMaxWidth: !0,
    textPosition: 0.75
  },
  quadrantChart: {
    useMaxWidth: !0,
    chartWidth: 500,
    chartHeight: 500,
    titleFontSize: 20,
    titlePadding: 10,
    quadrantPadding: 5,
    xAxisLabelPadding: 5,
    yAxisLabelPadding: 5,
    xAxisLabelFontSize: 16,
    yAxisLabelFontSize: 16,
    quadrantLabelFontSize: 16,
    quadrantTextTopPadding: 5,
    pointTextPadding: 5,
    pointLabelFontSize: 12,
    pointRadius: 5,
    xAxisPosition: "top",
    yAxisPosition: "left",
    quadrantInternalBorderStrokeWidth: 1,
    quadrantExternalBorderStrokeWidth: 2
  },
  xyChart: {
    useMaxWidth: !0,
    width: 700,
    height: 500,
    titleFontSize: 20,
    titlePadding: 10,
    showDataLabel: !1,
    showTitle: !0,
    xAxis: {
      $ref: "#/$defs/XYChartAxisConfig",
      showLabel: !0,
      labelFontSize: 14,
      labelPadding: 5,
      showTitle: !0,
      titleFontSize: 16,
      titlePadding: 5,
      showTick: !0,
      tickLength: 5,
      tickWidth: 2,
      showAxisLine: !0,
      axisLineWidth: 2
    },
    yAxis: {
      $ref: "#/$defs/XYChartAxisConfig",
      showLabel: !0,
      labelFontSize: 14,
      labelPadding: 5,
      showTitle: !0,
      titleFontSize: 16,
      titlePadding: 5,
      showTick: !0,
      tickLength: 5,
      tickWidth: 2,
      showAxisLine: !0,
      axisLineWidth: 2
    },
    chartOrientation: "vertical",
    plotReservedSpacePercent: 50
  },
  requirement: {
    useMaxWidth: !0,
    rect_fill: "#f9f9f9",
    text_color: "#333",
    rect_border_size: "0.5px",
    rect_border_color: "#bbb",
    rect_min_width: 200,
    rect_min_height: 200,
    fontSize: 14,
    rect_padding: 10,
    line_height: 20
  },
  mindmap: {
    useMaxWidth: !0,
    padding: 10,
    maxNodeWidth: 200,
    layoutAlgorithm: "cose-bilkent"
  },
  kanban: {
    useMaxWidth: !0,
    padding: 8,
    sectionWidth: 200,
    ticketBaseUrl: ""
  },
  timeline: {
    useMaxWidth: !0,
    diagramMarginX: 50,
    diagramMarginY: 10,
    leftMargin: 150,
    width: 150,
    height: 50,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    bottomMarginAdj: 1,
    rightAngles: !1,
    taskFontSize: 14,
    taskFontFamily: '"Open Sans", sans-serif',
    taskMargin: 50,
    activationWidth: 10,
    textPlacement: "fo",
    actorColours: [
      "#8FBC8F",
      "#7CFC00",
      "#00FFFF",
      "#20B2AA",
      "#B0E0E6",
      "#FFFFE0"
    ],
    sectionFills: [
      "#191970",
      "#8B008B",
      "#4B0082",
      "#2F4F4F",
      "#800000",
      "#8B4513",
      "#00008B"
    ],
    sectionColours: [
      "#fff"
    ],
    disableMulticolor: !1
  },
  gitGraph: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    diagramPadding: 8,
    nodeLabel: {
      width: 75,
      height: 100,
      x: -25,
      y: 0
    },
    mainBranchName: "main",
    mainBranchOrder: 0,
    showCommitLabel: !0,
    showBranches: !0,
    rotateCommitLabel: !0,
    parallelCommits: !1,
    arrowMarkerAbsolute: !1
  },
  c4: {
    useMaxWidth: !0,
    diagramMarginX: 50,
    diagramMarginY: 10,
    c4ShapeMargin: 50,
    c4ShapePadding: 20,
    width: 216,
    height: 60,
    boxMargin: 10,
    c4ShapeInRow: 4,
    nextLinePaddingX: 0,
    c4BoundaryInRow: 2,
    personFontSize: 14,
    personFontFamily: '"Open Sans", sans-serif',
    personFontWeight: "normal",
    external_personFontSize: 14,
    external_personFontFamily: '"Open Sans", sans-serif',
    external_personFontWeight: "normal",
    systemFontSize: 14,
    systemFontFamily: '"Open Sans", sans-serif',
    systemFontWeight: "normal",
    external_systemFontSize: 14,
    external_systemFontFamily: '"Open Sans", sans-serif',
    external_systemFontWeight: "normal",
    system_dbFontSize: 14,
    system_dbFontFamily: '"Open Sans", sans-serif',
    system_dbFontWeight: "normal",
    external_system_dbFontSize: 14,
    external_system_dbFontFamily: '"Open Sans", sans-serif',
    external_system_dbFontWeight: "normal",
    system_queueFontSize: 14,
    system_queueFontFamily: '"Open Sans", sans-serif',
    system_queueFontWeight: "normal",
    external_system_queueFontSize: 14,
    external_system_queueFontFamily: '"Open Sans", sans-serif',
    external_system_queueFontWeight: "normal",
    boundaryFontSize: 14,
    boundaryFontFamily: '"Open Sans", sans-serif',
    boundaryFontWeight: "normal",
    messageFontSize: 12,
    messageFontFamily: '"Open Sans", sans-serif',
    messageFontWeight: "normal",
    containerFontSize: 14,
    containerFontFamily: '"Open Sans", sans-serif',
    containerFontWeight: "normal",
    external_containerFontSize: 14,
    external_containerFontFamily: '"Open Sans", sans-serif',
    external_containerFontWeight: "normal",
    container_dbFontSize: 14,
    container_dbFontFamily: '"Open Sans", sans-serif',
    container_dbFontWeight: "normal",
    external_container_dbFontSize: 14,
    external_container_dbFontFamily: '"Open Sans", sans-serif',
    external_container_dbFontWeight: "normal",
    container_queueFontSize: 14,
    container_queueFontFamily: '"Open Sans", sans-serif',
    container_queueFontWeight: "normal",
    external_container_queueFontSize: 14,
    external_container_queueFontFamily: '"Open Sans", sans-serif',
    external_container_queueFontWeight: "normal",
    componentFontSize: 14,
    componentFontFamily: '"Open Sans", sans-serif',
    componentFontWeight: "normal",
    external_componentFontSize: 14,
    external_componentFontFamily: '"Open Sans", sans-serif',
    external_componentFontWeight: "normal",
    component_dbFontSize: 14,
    component_dbFontFamily: '"Open Sans", sans-serif',
    component_dbFontWeight: "normal",
    external_component_dbFontSize: 14,
    external_component_dbFontFamily: '"Open Sans", sans-serif',
    external_component_dbFontWeight: "normal",
    component_queueFontSize: 14,
    component_queueFontFamily: '"Open Sans", sans-serif',
    component_queueFontWeight: "normal",
    external_component_queueFontSize: 14,
    external_component_queueFontFamily: '"Open Sans", sans-serif',
    external_component_queueFontWeight: "normal",
    wrap: !0,
    wrapPadding: 10,
    person_bg_color: "#08427B",
    person_border_color: "#073B6F",
    external_person_bg_color: "#686868",
    external_person_border_color: "#8A8A8A",
    system_bg_color: "#1168BD",
    system_border_color: "#3C7FC0",
    system_db_bg_color: "#1168BD",
    system_db_border_color: "#3C7FC0",
    system_queue_bg_color: "#1168BD",
    system_queue_border_color: "#3C7FC0",
    external_system_bg_color: "#999999",
    external_system_border_color: "#8A8A8A",
    external_system_db_bg_color: "#999999",
    external_system_db_border_color: "#8A8A8A",
    external_system_queue_bg_color: "#999999",
    external_system_queue_border_color: "#8A8A8A",
    container_bg_color: "#438DD5",
    container_border_color: "#3C7FC0",
    container_db_bg_color: "#438DD5",
    container_db_border_color: "#3C7FC0",
    container_queue_bg_color: "#438DD5",
    container_queue_border_color: "#3C7FC0",
    external_container_bg_color: "#B3B3B3",
    external_container_border_color: "#A6A6A6",
    external_container_db_bg_color: "#B3B3B3",
    external_container_db_border_color: "#A6A6A6",
    external_container_queue_bg_color: "#B3B3B3",
    external_container_queue_border_color: "#A6A6A6",
    component_bg_color: "#85BBF0",
    component_border_color: "#78A8D8",
    component_db_bg_color: "#85BBF0",
    component_db_border_color: "#78A8D8",
    component_queue_bg_color: "#85BBF0",
    component_queue_border_color: "#78A8D8",
    external_component_bg_color: "#CCCCCC",
    external_component_border_color: "#BFBFBF",
    external_component_db_bg_color: "#CCCCCC",
    external_component_db_border_color: "#BFBFBF",
    external_component_queue_bg_color: "#CCCCCC",
    external_component_queue_border_color: "#BFBFBF"
  },
  sankey: {
    useMaxWidth: !0,
    width: 600,
    height: 400,
    linkColor: "gradient",
    nodeAlignment: "justify",
    showValues: !0,
    prefix: "",
    suffix: ""
  },
  block: {
    useMaxWidth: !0,
    padding: 8
  },
  packet: {
    useMaxWidth: !0,
    rowHeight: 32,
    bitWidth: 32,
    bitsPerRow: 32,
    showBits: !0,
    paddingX: 5,
    paddingY: 5
  },
  architecture: {
    useMaxWidth: !0,
    padding: 40,
    iconSize: 80,
    fontSize: 16
  },
  radar: {
    useMaxWidth: !0,
    width: 600,
    height: 600,
    marginTop: 50,
    marginRight: 50,
    marginBottom: 50,
    marginLeft: 50,
    axisScaleFactor: 1,
    axisLabelFactor: 1.05,
    curveTension: 0.17
  },
  theme: "default",
  look: "classic",
  handDrawnSeed: 0,
  layout: "dagre",
  maxTextSize: 5e4,
  maxEdges: 500,
  darkMode: !1,
  fontFamily: '"trebuchet ms", verdana, arial, sans-serif;',
  logLevel: 5,
  securityLevel: "strict",
  startOnLoad: !0,
  arrowMarkerAbsolute: !1,
  secure: [
    "secure",
    "securityLevel",
    "startOnLoad",
    "maxTextSize",
    "suppressErrorRendering",
    "maxEdges"
  ],
  legacyMathML: !1,
  forceLegacyMathML: !1,
  deterministicIds: !1,
  fontSize: 16,
  markdownAutoWrap: !0,
  suppressErrorRendering: !1
}, xh = {
  ...de,
  // Set, even though they're `undefined` so that `configKeys` finds these keys
  // TODO: Should we replace these with `null` so that they can go in the JSON Schema?
  deterministicIDSeed: void 0,
  elk: {
    // mergeEdges is needed here to be considered
    mergeEdges: !1,
    nodePlacementStrategy: "BRANDES_KOEPF",
    forceNodeModelOrder: !1,
    considerModelOrder: "NODES_AND_EDGES"
  },
  themeCSS: void 0,
  // add non-JSON default config values
  themeVariables: Ae.default.getThemeVariables(),
  sequence: {
    ...de.sequence,
    messageFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.messageFontFamily,
        fontSize: this.messageFontSize,
        fontWeight: this.messageFontWeight
      };
    }, "messageFont"),
    noteFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.noteFontFamily,
        fontSize: this.noteFontSize,
        fontWeight: this.noteFontWeight
      };
    }, "noteFont"),
    actorFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.actorFontFamily,
        fontSize: this.actorFontSize,
        fontWeight: this.actorFontWeight
      };
    }, "actorFont")
  },
  class: {
    hideEmptyMembersBox: !1
  },
  gantt: {
    ...de.gantt,
    tickInterval: void 0,
    useWidth: void 0
    // can probably be removed since `configKeys` already includes this
  },
  c4: {
    ...de.c4,
    useWidth: void 0,
    personFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.personFontFamily,
        fontSize: this.personFontSize,
        fontWeight: this.personFontWeight
      };
    }, "personFont"),
    flowchart: {
      ...de.flowchart,
      inheritDir: !1
      // default to legacy behavior
    },
    external_personFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_personFontFamily,
        fontSize: this.external_personFontSize,
        fontWeight: this.external_personFontWeight
      };
    }, "external_personFont"),
    systemFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.systemFontFamily,
        fontSize: this.systemFontSize,
        fontWeight: this.systemFontWeight
      };
    }, "systemFont"),
    external_systemFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_systemFontFamily,
        fontSize: this.external_systemFontSize,
        fontWeight: this.external_systemFontWeight
      };
    }, "external_systemFont"),
    system_dbFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.system_dbFontFamily,
        fontSize: this.system_dbFontSize,
        fontWeight: this.system_dbFontWeight
      };
    }, "system_dbFont"),
    external_system_dbFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_system_dbFontFamily,
        fontSize: this.external_system_dbFontSize,
        fontWeight: this.external_system_dbFontWeight
      };
    }, "external_system_dbFont"),
    system_queueFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.system_queueFontFamily,
        fontSize: this.system_queueFontSize,
        fontWeight: this.system_queueFontWeight
      };
    }, "system_queueFont"),
    external_system_queueFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_system_queueFontFamily,
        fontSize: this.external_system_queueFontSize,
        fontWeight: this.external_system_queueFontWeight
      };
    }, "external_system_queueFont"),
    containerFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.containerFontFamily,
        fontSize: this.containerFontSize,
        fontWeight: this.containerFontWeight
      };
    }, "containerFont"),
    external_containerFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_containerFontFamily,
        fontSize: this.external_containerFontSize,
        fontWeight: this.external_containerFontWeight
      };
    }, "external_containerFont"),
    container_dbFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.container_dbFontFamily,
        fontSize: this.container_dbFontSize,
        fontWeight: this.container_dbFontWeight
      };
    }, "container_dbFont"),
    external_container_dbFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_container_dbFontFamily,
        fontSize: this.external_container_dbFontSize,
        fontWeight: this.external_container_dbFontWeight
      };
    }, "external_container_dbFont"),
    container_queueFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.container_queueFontFamily,
        fontSize: this.container_queueFontSize,
        fontWeight: this.container_queueFontWeight
      };
    }, "container_queueFont"),
    external_container_queueFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_container_queueFontFamily,
        fontSize: this.external_container_queueFontSize,
        fontWeight: this.external_container_queueFontWeight
      };
    }, "external_container_queueFont"),
    componentFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.componentFontFamily,
        fontSize: this.componentFontSize,
        fontWeight: this.componentFontWeight
      };
    }, "componentFont"),
    external_componentFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_componentFontFamily,
        fontSize: this.external_componentFontSize,
        fontWeight: this.external_componentFontWeight
      };
    }, "external_componentFont"),
    component_dbFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.component_dbFontFamily,
        fontSize: this.component_dbFontSize,
        fontWeight: this.component_dbFontWeight
      };
    }, "component_dbFont"),
    external_component_dbFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_component_dbFontFamily,
        fontSize: this.external_component_dbFontSize,
        fontWeight: this.external_component_dbFontWeight
      };
    }, "external_component_dbFont"),
    component_queueFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.component_queueFontFamily,
        fontSize: this.component_queueFontSize,
        fontWeight: this.component_queueFontWeight
      };
    }, "component_queueFont"),
    external_component_queueFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_component_queueFontFamily,
        fontSize: this.external_component_queueFontSize,
        fontWeight: this.external_component_queueFontWeight
      };
    }, "external_component_queueFont"),
    boundaryFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.boundaryFontFamily,
        fontSize: this.boundaryFontSize,
        fontWeight: this.boundaryFontWeight
      };
    }, "boundaryFont"),
    messageFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.messageFontFamily,
        fontSize: this.messageFontSize,
        fontWeight: this.messageFontWeight
      };
    }, "messageFont")
  },
  pie: {
    ...de.pie,
    useWidth: 984
  },
  xyChart: {
    ...de.xyChart,
    useWidth: void 0
  },
  requirement: {
    ...de.requirement,
    useWidth: void 0
  },
  packet: {
    ...de.packet
  },
  radar: {
    ...de.radar
  },
  treemap: {
    useMaxWidth: !0,
    padding: 10,
    diagramPadding: 8,
    showValues: !0,
    nodeWidth: 100,
    nodeHeight: 40,
    borderWidth: 1,
    valueFontSize: 12,
    labelFontSize: 14,
    valueFormat: ","
  }
}, bh = /* @__PURE__ */ p((e, t = "") => Object.keys(e).reduce((r, i) => Array.isArray(e[i]) ? r : typeof e[i] == "object" && e[i] !== null ? [...r, t + i, ...bh(e[i], "")] : [...r, t + i], []), "keyify"), $x = new Set(bh(xh, "")), Ch = xh, Sa = /* @__PURE__ */ p((e) => {
  if (F.debug("sanitizeDirective called with", e), !(typeof e != "object" || e == null)) {
    if (Array.isArray(e)) {
      e.forEach((t) => Sa(t));
      return;
    }
    for (const t of Object.keys(e)) {
      if (F.debug("Checking key", t), t.startsWith("__") || t.includes("proto") || t.includes("constr") || !$x.has(t) || e[t] == null) {
        F.debug("sanitize deleting key: ", t), delete e[t];
        continue;
      }
      if (typeof e[t] == "object") {
        F.debug("sanitizing object", t), Sa(e[t]);
        continue;
      }
      const r = ["themeCSS", "fontFamily", "altFontFamily"];
      for (const i of r)
        t.includes(i) && (F.debug("sanitizing css option", t), e[t] = Fx(e[t]));
    }
    if (e.themeVariables)
      for (const t of Object.keys(e.themeVariables)) {
        const r = e.themeVariables[t];
        r?.match && !r.match(/^[\d "#%(),.;A-Za-z]+$/) && (e.themeVariables[t] = "");
      }
    F.debug("After sanitization", e);
  }
}, "sanitizeDirective"), Fx = /* @__PURE__ */ p((e) => {
  let t = 0, r = 0;
  for (const i of e) {
    if (t < r)
      return "{ /* ERROR: Unbalanced CSS */ }";
    i === "{" ? t++ : i === "}" && r++;
  }
  return t !== r ? "{ /* ERROR: Unbalanced CSS */ }" : e;
}, "sanitizeCss"), Or = Object.freeze(Ch), Gt = St({}, Or), Ta, nr = [], wi = St({}, Or), sn = /* @__PURE__ */ p((e, t) => {
  let r = St({}, e), i = {};
  for (const a of t)
    vh(a), i = St(i, a);
  if (r = St(r, i), i.theme && i.theme in Ae) {
    const a = St({}, Ta), n = St(
      a.themeVariables || {},
      i.themeVariables
    );
    r.theme && r.theme in Ae && (r.themeVariables = Ae[r.theme].getThemeVariables(n));
  }
  return wi = r, _h(wi), wi;
}, "updateCurrentConfig"), Dx = /* @__PURE__ */ p((e) => (Gt = St({}, Or), Gt = St(Gt, e), e.theme && Ae[e.theme] && (Gt.themeVariables = Ae[e.theme].getThemeVariables(e.themeVariables)), sn(Gt, nr), Gt), "setSiteConfig"), Ox = /* @__PURE__ */ p((e) => {
  Ta = St({}, e);
}, "saveConfigFromInitialize"), Rx = /* @__PURE__ */ p((e) => (Gt = St(Gt, e), sn(Gt, nr), Gt), "updateSiteConfig"), wh = /* @__PURE__ */ p(() => St({}, Gt), "getSiteConfig"), kh = /* @__PURE__ */ p((e) => (_h(e), St(wi, e), Dt()), "setConfig"), Dt = /* @__PURE__ */ p(() => St({}, wi), "getConfig"), vh = /* @__PURE__ */ p((e) => {
  e && (["secure", ...Gt.secure ?? []].forEach((t) => {
    Object.hasOwn(e, t) && (F.debug(`Denied attempt to modify a secure key ${t}`, e[t]), delete e[t]);
  }), Object.keys(e).forEach((t) => {
    t.startsWith("__") && delete e[t];
  }), Object.keys(e).forEach((t) => {
    typeof e[t] == "string" && (e[t].includes("<") || e[t].includes(">") || e[t].includes("url(data:")) && delete e[t], typeof e[t] == "object" && vh(e[t]);
  }));
}, "sanitize"), Ix = /* @__PURE__ */ p((e) => {
  Sa(e), e.fontFamily && !e.themeVariables?.fontFamily && (e.themeVariables = {
    ...e.themeVariables,
    fontFamily: e.fontFamily
  }), nr.push(e), sn(Gt, nr);
}, "addDirective"), Ba = /* @__PURE__ */ p((e = Gt) => {
  nr = [], sn(e, nr);
}, "reset"), Px = {
  LAZY_LOAD_DEPRECATED: "The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead."
}, ql = {}, Nx = /* @__PURE__ */ p((e) => {
  ql[e] || (F.warn(Px[e]), ql[e] = !0);
}, "issueWarning"), _h = /* @__PURE__ */ p((e) => {
  e && (e.lazyLoadedDiagrams || e.loadExternalDiagramsAtStartup) && Nx("LAZY_LOAD_DEPRECATED");
}, "checkConfig"), hB = /* @__PURE__ */ p(() => {
  let e = {};
  Ta && (e = St(e, Ta));
  for (const t of nr)
    e = St(e, t);
  return e;
}, "getUserDefinedConfig"), Ri = /<br\s*\/?>/gi, zx = /* @__PURE__ */ p((e) => e ? Bh(e).replace(/\\n/g, "#br#").split("#br#") : [""], "getRows"), Wx = /* @__PURE__ */ (() => {
  let e = !1;
  return () => {
    e || (Sh(), e = !0);
  };
})();
function Sh() {
  const e = "data-temp-href-target";
  Dr.addHook("beforeSanitizeAttributes", (t) => {
    t.tagName === "A" && t.hasAttribute("target") && t.setAttribute(e, t.getAttribute("target") ?? "");
  }), Dr.addHook("afterSanitizeAttributes", (t) => {
    t.tagName === "A" && t.hasAttribute(e) && (t.setAttribute("target", t.getAttribute(e) ?? ""), t.removeAttribute(e), t.getAttribute("target") === "_blank" && t.setAttribute("rel", "noopener"));
  });
}
p(Sh, "setupDompurifyHooks");
var Th = /* @__PURE__ */ p((e) => (Wx(), Dr.sanitize(e)), "removeScript"), Hl = /* @__PURE__ */ p((e, t) => {
  if (t.flowchart?.htmlLabels !== !1) {
    const r = t.securityLevel;
    r === "antiscript" || r === "strict" ? e = Th(e) : r !== "loose" && (e = Bh(e), e = e.replace(/</g, "&lt;").replace(/>/g, "&gt;"), e = e.replace(/=/g, "&equals;"), e = Yx(e));
  }
  return e;
}, "sanitizeMore"), Jt = /* @__PURE__ */ p((e, t) => e && (t.dompurifyConfig ? e = Dr.sanitize(Hl(e, t), t.dompurifyConfig).toString() : e = Dr.sanitize(Hl(e, t), {
  FORBID_TAGS: ["style"]
}).toString(), e), "sanitizeText"), qx = /* @__PURE__ */ p((e, t) => typeof e == "string" ? Jt(e, t) : e.flat().map((r) => Jt(r, t)), "sanitizeTextOrArray"), Hx = /* @__PURE__ */ p((e) => Ri.test(e), "hasBreaks"), jx = /* @__PURE__ */ p((e) => e.split(Ri), "splitBreaks"), Yx = /* @__PURE__ */ p((e) => e.replace(/#br#/g, "<br/>"), "placeholderToBreak"), Bh = /* @__PURE__ */ p((e) => e.replace(Ri, "#br#"), "breakToPlaceholder"), Ux = /* @__PURE__ */ p((e) => {
  let t = "";
  return e && (t = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, t = CSS.escape(t)), t;
}, "getUrl"), Bt = /* @__PURE__ */ p((e) => !(e === !1 || ["false", "null", "0"].includes(String(e).trim().toLowerCase())), "evaluate"), Gx = /* @__PURE__ */ p(function(...e) {
  const t = e.filter((r) => !isNaN(r));
  return Math.max(...t);
}, "getMax"), Xx = /* @__PURE__ */ p(function(...e) {
  const t = e.filter((r) => !isNaN(r));
  return Math.min(...t);
}, "getMin"), jl = /* @__PURE__ */ p(function(e) {
  const t = e.split(/(,)/), r = [];
  for (let i = 0; i < t.length; i++) {
    let a = t[i];
    if (a === "," && i > 0 && i + 1 < t.length) {
      const n = t[i - 1], s = t[i + 1];
      Vx(n, s) && (a = n + "," + s, i++, r.pop());
    }
    r.push(Zx(a));
  }
  return r.join("");
}, "parseGenericTypes"), hs = /* @__PURE__ */ p((e, t) => Math.max(0, e.split(t).length - 1), "countOccurrence"), Vx = /* @__PURE__ */ p((e, t) => {
  const r = hs(e, "~"), i = hs(t, "~");
  return r === 1 && i === 1;
}, "shouldCombineSets"), Zx = /* @__PURE__ */ p((e) => {
  const t = hs(e, "~");
  let r = !1;
  if (t <= 1)
    return e;
  t % 2 !== 0 && e.startsWith("~") && (e = e.substring(1), r = !0);
  const i = [...e];
  let a = i.indexOf("~"), n = i.lastIndexOf("~");
  for (; a !== -1 && n !== -1 && a !== n; )
    i[a] = "<", i[n] = ">", a = i.indexOf("~"), n = i.lastIndexOf("~");
  return r && i.unshift("~"), i.join("");
}, "processSet"), Yl = /* @__PURE__ */ p(() => window.MathMLElement !== void 0, "isMathMLSupported"), us = /\$\$(.*)\$\$/g, Rr = /* @__PURE__ */ p((e) => (e.match(us)?.length ?? 0) > 0, "hasKatex"), uB = /* @__PURE__ */ p(async (e, t) => {
  const r = document.createElement("div");
  r.innerHTML = await io(e, t), r.id = "katex-temp", r.style.visibility = "hidden", r.style.position = "absolute", r.style.top = "0", document.querySelector("body")?.insertAdjacentElement("beforeend", r);
  const a = { width: r.clientWidth, height: r.clientHeight };
  return r.remove(), a;
}, "calculateMathMLDimensions"), Kx = /* @__PURE__ */ p(async (e, t) => {
  if (!Rr(e))
    return e;
  if (!(Yl() || t.legacyMathML || t.forceLegacyMathML))
    return e.replace(us, "MathML is unsupported in this environment.");
  {
    const { default: r } = await import("./main-Cdb_NCuJ.js").then((a) => a.aq), i = t.forceLegacyMathML || !Yl() && t.legacyMathML ? "htmlAndMathml" : "mathml";
    return e.split(Ri).map(
      (a) => Rr(a) ? `<div style="display: flex; align-items: center; justify-content: center; white-space: nowrap;">${a}</div>` : `<div>${a}</div>`
    ).join("").replace(
      us,
      (a, n) => r.renderToString(n, {
        throwOnError: !0,
        displayMode: !0,
        output: i
      }).replace(/\n/g, " ").replace(/<annotation.*<\/annotation>/g, "")
    );
  }
}, "renderKatexUnsanitized"), io = /* @__PURE__ */ p(async (e, t) => Jt(await Kx(e, t), t), "renderKatexSanitized"), Yr = {
  getRows: zx,
  sanitizeText: Jt,
  sanitizeTextOrArray: qx,
  hasBreaks: Hx,
  splitBreaks: jx,
  lineBreakRegex: Ri,
  removeScript: Th,
  getUrl: Ux,
  evaluate: Bt,
  getMax: Gx,
  getMin: Xx
}, Qx = /* @__PURE__ */ p(function(e, t) {
  for (let r of t)
    e.attr(r[0], r[1]);
}, "d3Attrs"), Jx = /* @__PURE__ */ p(function(e, t, r) {
  let i = /* @__PURE__ */ new Map();
  return r ? (i.set("width", "100%"), i.set("style", `max-width: ${t}px;`)) : (i.set("height", e), i.set("width", t)), i;
}, "calculateSvgSizeAttrs"), Ah = /* @__PURE__ */ p(function(e, t, r, i) {
  const a = Jx(t, r, i);
  Qx(e, a);
}, "configureSvgSize"), tb = /* @__PURE__ */ p(function(e, t, r, i) {
  const a = t.node().getBBox(), n = a.width, s = a.height;
  F.info(`SVG bounds: ${n}x${s}`, a);
  let o = 0, l = 0;
  F.info(`Graph bounds: ${o}x${l}`, e), o = n + r * 2, l = s + r * 2, F.info(`Calculated bounds: ${o}x${l}`), Ah(t, l, o, i);
  const c = `${a.x - r} ${a.y - r} ${a.width + 2 * r} ${a.height + 2 * r}`;
  t.attr("viewBox", c);
}, "setupGraphViewbox"), ca = {}, eb = /* @__PURE__ */ p((e, t, r) => {
  let i = "";
  return e in ca && ca[e] ? i = ca[e](r) : F.warn(`No theme found for ${e}`), ` & {
    font-family: ${r.fontFamily};
    font-size: ${r.fontSize};
    fill: ${r.textColor}
  }
  @keyframes edge-animation-frame {
    from {
      stroke-dashoffset: 0;
    }
  }
  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
  & .edge-animation-slow {
    stroke-dasharray: 9,5 !important;
    stroke-dashoffset: 900;
    animation: dash 50s linear infinite;
    stroke-linecap: round;
  }
  & .edge-animation-fast {
    stroke-dasharray: 9,5 !important;
    stroke-dashoffset: 900;
    animation: dash 20s linear infinite;
    stroke-linecap: round;
  }
  /* Classes common for multiple diagrams */

  & .error-icon {
    fill: ${r.errorBkgColor};
  }
  & .error-text {
    fill: ${r.errorTextColor};
    stroke: ${r.errorTextColor};
  }

  & .edge-thickness-normal {
    stroke-width: 1px;
  }
  & .edge-thickness-thick {
    stroke-width: 3.5px
  }
  & .edge-pattern-solid {
    stroke-dasharray: 0;
  }
  & .edge-thickness-invisible {
    stroke-width: 0;
    fill: none;
  }
  & .edge-pattern-dashed{
    stroke-dasharray: 3;
  }
  .edge-pattern-dotted {
    stroke-dasharray: 2;
  }

  & .marker {
    fill: ${r.lineColor};
    stroke: ${r.lineColor};
  }
  & .marker.cross {
    stroke: ${r.lineColor};
  }

  & svg {
    font-family: ${r.fontFamily};
    font-size: ${r.fontSize};
  }
   & p {
    margin: 0
   }

  ${i}

  ${t}
`;
}, "getStyles"), rb = /* @__PURE__ */ p((e, t) => {
  t !== void 0 && (ca[e] = t);
}, "addStylesForDiagram"), ib = eb, Lh = {};
Y0(Lh, {
  clear: () => ab,
  getAccDescription: () => lb,
  getAccTitle: () => sb,
  getDiagramTitle: () => hb,
  setAccDescription: () => ob,
  setAccTitle: () => nb,
  setDiagramTitle: () => cb
});
var ao = "", no = "", so = "", oo = /* @__PURE__ */ p((e) => Jt(e, Dt()), "sanitizeText"), ab = /* @__PURE__ */ p(() => {
  ao = "", so = "", no = "";
}, "clear"), nb = /* @__PURE__ */ p((e) => {
  ao = oo(e).replace(/^\s+/g, "");
}, "setAccTitle"), sb = /* @__PURE__ */ p(() => ao, "getAccTitle"), ob = /* @__PURE__ */ p((e) => {
  so = oo(e).replace(/\n\s+/g, `
`);
}, "setAccDescription"), lb = /* @__PURE__ */ p(() => so, "getAccDescription"), cb = /* @__PURE__ */ p((e) => {
  no = oo(e);
}, "setDiagramTitle"), hb = /* @__PURE__ */ p(() => no, "getDiagramTitle"), Ul = F, ub = eo, ft = Dt, fB = kh, dB = Or, lo = /* @__PURE__ */ p((e) => Jt(e, ft()), "sanitizeText"), fb = tb, db = /* @__PURE__ */ p(() => Lh, "getCommonDb"), Aa = {}, La = /* @__PURE__ */ p((e, t, r) => {
  Aa[e] && Ul.warn(`Diagram with id ${e} already registered. Overwriting.`), Aa[e] = t, r && yh(e, r), rb(e, t.styles), t.injectUtils?.(
    Ul,
    ub,
    ft,
    lo,
    fb,
    db(),
    () => {
    }
  );
}, "registerDiagram"), fs = /* @__PURE__ */ p((e) => {
  if (e in Aa)
    return Aa[e];
  throw new pb(e);
}, "getDiagram"), $r, pb = ($r = class extends Error {
  constructor(t) {
    super(`Diagram ${t} not found.`);
  }
}, p($r, "DiagramNotFoundError"), $r), gb = { value: () => {
} };
function Mh() {
  for (var e = 0, t = arguments.length, r = {}, i; e < t; ++e) {
    if (!(i = arguments[e] + "") || i in r || /[\s.]/.test(i)) throw new Error("illegal type: " + i);
    r[i] = [];
  }
  return new ha(r);
}
function ha(e) {
  this._ = e;
}
function mb(e, t) {
  return e.trim().split(/^|\s+/).map(function(r) {
    var i = "", a = r.indexOf(".");
    if (a >= 0 && (i = r.slice(a + 1), r = r.slice(0, a)), r && !t.hasOwnProperty(r)) throw new Error("unknown type: " + r);
    return { type: r, name: i };
  });
}
ha.prototype = Mh.prototype = {
  constructor: ha,
  on: function(e, t) {
    var r = this._, i = mb(e + "", r), a, n = -1, s = i.length;
    if (arguments.length < 2) {
      for (; ++n < s; ) if ((a = (e = i[n]).type) && (a = yb(r[a], e.name))) return a;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++n < s; )
      if (a = (e = i[n]).type) r[a] = Gl(r[a], e.name, t);
      else if (t == null) for (a in r) r[a] = Gl(r[a], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var r in t) e[r] = t[r].slice();
    return new ha(e);
  },
  call: function(e, t) {
    if ((a = arguments.length - 2) > 0) for (var r = new Array(a), i = 0, a, n; i < a; ++i) r[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (n = this._[e], i = 0, a = n.length; i < a; ++i) n[i].value.apply(t, r);
  },
  apply: function(e, t, r) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var i = this._[e], a = 0, n = i.length; a < n; ++a) i[a].value.apply(t, r);
  }
};
function yb(e, t) {
  for (var r = 0, i = e.length, a; r < i; ++r)
    if ((a = e[r]).name === t)
      return a.value;
}
function Gl(e, t, r) {
  for (var i = 0, a = e.length; i < a; ++i)
    if (e[i].name === t) {
      e[i] = gb, e = e.slice(0, i).concat(e.slice(i + 1));
      break;
    }
  return r != null && e.push({ name: t, value: r }), e;
}
var ds = "http://www.w3.org/1999/xhtml";
const Xl = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: ds,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function on(e) {
  var t = e += "", r = t.indexOf(":");
  return r >= 0 && (t = e.slice(0, r)) !== "xmlns" && (e = e.slice(r + 1)), Xl.hasOwnProperty(t) ? { space: Xl[t], local: e } : e;
}
function xb(e) {
  return function() {
    var t = this.ownerDocument, r = this.namespaceURI;
    return r === ds && t.documentElement.namespaceURI === ds ? t.createElement(e) : t.createElementNS(r, e);
  };
}
function bb(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Eh(e) {
  var t = on(e);
  return (t.local ? bb : xb)(t);
}
function Cb() {
}
function co(e) {
  return e == null ? Cb : function() {
    return this.querySelector(e);
  };
}
function wb(e) {
  typeof e != "function" && (e = co(e));
  for (var t = this._groups, r = t.length, i = new Array(r), a = 0; a < r; ++a)
    for (var n = t[a], s = n.length, o = i[a] = new Array(s), l, c, h = 0; h < s; ++h)
      (l = n[h]) && (c = e.call(l, l.__data__, h, n)) && ("__data__" in l && (c.__data__ = l.__data__), o[h] = c);
  return new Zt(i, this._parents);
}
function kb(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function vb() {
  return [];
}
function $h(e) {
  return e == null ? vb : function() {
    return this.querySelectorAll(e);
  };
}
function _b(e) {
  return function() {
    return kb(e.apply(this, arguments));
  };
}
function Sb(e) {
  typeof e == "function" ? e = _b(e) : e = $h(e);
  for (var t = this._groups, r = t.length, i = [], a = [], n = 0; n < r; ++n)
    for (var s = t[n], o = s.length, l, c = 0; c < o; ++c)
      (l = s[c]) && (i.push(e.call(l, l.__data__, c, s)), a.push(l));
  return new Zt(i, a);
}
function Fh(e) {
  return function() {
    return this.matches(e);
  };
}
function Dh(e) {
  return function(t) {
    return t.matches(e);
  };
}
var Tb = Array.prototype.find;
function Bb(e) {
  return function() {
    return Tb.call(this.children, e);
  };
}
function Ab() {
  return this.firstElementChild;
}
function Lb(e) {
  return this.select(e == null ? Ab : Bb(typeof e == "function" ? e : Dh(e)));
}
var Mb = Array.prototype.filter;
function Eb() {
  return Array.from(this.children);
}
function $b(e) {
  return function() {
    return Mb.call(this.children, e);
  };
}
function Fb(e) {
  return this.selectAll(e == null ? Eb : $b(typeof e == "function" ? e : Dh(e)));
}
function Db(e) {
  typeof e != "function" && (e = Fh(e));
  for (var t = this._groups, r = t.length, i = new Array(r), a = 0; a < r; ++a)
    for (var n = t[a], s = n.length, o = i[a] = [], l, c = 0; c < s; ++c)
      (l = n[c]) && e.call(l, l.__data__, c, n) && o.push(l);
  return new Zt(i, this._parents);
}
function Oh(e) {
  return new Array(e.length);
}
function Ob() {
  return new Zt(this._enter || this._groups.map(Oh), this._parents);
}
function Ma(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Ma.prototype = {
  constructor: Ma,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function Rb(e) {
  return function() {
    return e;
  };
}
function Ib(e, t, r, i, a, n) {
  for (var s = 0, o, l = t.length, c = n.length; s < c; ++s)
    (o = t[s]) ? (o.__data__ = n[s], i[s] = o) : r[s] = new Ma(e, n[s]);
  for (; s < l; ++s)
    (o = t[s]) && (a[s] = o);
}
function Pb(e, t, r, i, a, n, s) {
  var o, l, c = /* @__PURE__ */ new Map(), h = t.length, u = n.length, f = new Array(h), d;
  for (o = 0; o < h; ++o)
    (l = t[o]) && (f[o] = d = s.call(l, l.__data__, o, t) + "", c.has(d) ? a[o] = l : c.set(d, l));
  for (o = 0; o < u; ++o)
    d = s.call(e, n[o], o, n) + "", (l = c.get(d)) ? (i[o] = l, l.__data__ = n[o], c.delete(d)) : r[o] = new Ma(e, n[o]);
  for (o = 0; o < h; ++o)
    (l = t[o]) && c.get(f[o]) === l && (a[o] = l);
}
function Nb(e) {
  return e.__data__;
}
function zb(e, t) {
  if (!arguments.length) return Array.from(this, Nb);
  var r = t ? Pb : Ib, i = this._parents, a = this._groups;
  typeof e != "function" && (e = Rb(e));
  for (var n = a.length, s = new Array(n), o = new Array(n), l = new Array(n), c = 0; c < n; ++c) {
    var h = i[c], u = a[c], f = u.length, d = Wb(e.call(h, h && h.__data__, c, i)), g = d.length, m = o[c] = new Array(g), y = s[c] = new Array(g), x = l[c] = new Array(f);
    r(h, u, m, y, x, d, t);
    for (var b = 0, C = 0, v, k; b < g; ++b)
      if (v = m[b]) {
        for (b >= C && (C = b + 1); !(k = y[C]) && ++C < g; ) ;
        v._next = k || null;
      }
  }
  return s = new Zt(s, i), s._enter = o, s._exit = l, s;
}
function Wb(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function qb() {
  return new Zt(this._exit || this._groups.map(Oh), this._parents);
}
function Hb(e, t, r) {
  var i = this.enter(), a = this, n = this.exit();
  return typeof e == "function" ? (i = e(i), i && (i = i.selection())) : i = i.append(e + ""), t != null && (a = t(a), a && (a = a.selection())), r == null ? n.remove() : r(n), i && a ? i.merge(a).order() : a;
}
function jb(e) {
  for (var t = e.selection ? e.selection() : e, r = this._groups, i = t._groups, a = r.length, n = i.length, s = Math.min(a, n), o = new Array(a), l = 0; l < s; ++l)
    for (var c = r[l], h = i[l], u = c.length, f = o[l] = new Array(u), d, g = 0; g < u; ++g)
      (d = c[g] || h[g]) && (f[g] = d);
  for (; l < a; ++l)
    o[l] = r[l];
  return new Zt(o, this._parents);
}
function Yb() {
  for (var e = this._groups, t = -1, r = e.length; ++t < r; )
    for (var i = e[t], a = i.length - 1, n = i[a], s; --a >= 0; )
      (s = i[a]) && (n && s.compareDocumentPosition(n) ^ 4 && n.parentNode.insertBefore(s, n), n = s);
  return this;
}
function Ub(e) {
  e || (e = Gb);
  function t(u, f) {
    return u && f ? e(u.__data__, f.__data__) : !u - !f;
  }
  for (var r = this._groups, i = r.length, a = new Array(i), n = 0; n < i; ++n) {
    for (var s = r[n], o = s.length, l = a[n] = new Array(o), c, h = 0; h < o; ++h)
      (c = s[h]) && (l[h] = c);
    l.sort(t);
  }
  return new Zt(a, this._parents).order();
}
function Gb(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Xb() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Vb() {
  return Array.from(this);
}
function Zb() {
  for (var e = this._groups, t = 0, r = e.length; t < r; ++t)
    for (var i = e[t], a = 0, n = i.length; a < n; ++a) {
      var s = i[a];
      if (s) return s;
    }
  return null;
}
function Kb() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function Qb() {
  return !this.node();
}
function Jb(e) {
  for (var t = this._groups, r = 0, i = t.length; r < i; ++r)
    for (var a = t[r], n = 0, s = a.length, o; n < s; ++n)
      (o = a[n]) && e.call(o, o.__data__, n, a);
  return this;
}
function t1(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function e1(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function r1(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function i1(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function a1(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.removeAttribute(e) : this.setAttribute(e, r);
  };
}
function n1(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, r);
  };
}
function s1(e, t) {
  var r = on(e);
  if (arguments.length < 2) {
    var i = this.node();
    return r.local ? i.getAttributeNS(r.space, r.local) : i.getAttribute(r);
  }
  return this.each((t == null ? r.local ? e1 : t1 : typeof t == "function" ? r.local ? n1 : a1 : r.local ? i1 : r1)(r, t));
}
function Rh(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function o1(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function l1(e, t, r) {
  return function() {
    this.style.setProperty(e, t, r);
  };
}
function c1(e, t, r) {
  return function() {
    var i = t.apply(this, arguments);
    i == null ? this.style.removeProperty(e) : this.style.setProperty(e, i, r);
  };
}
function h1(e, t, r) {
  return arguments.length > 1 ? this.each((t == null ? o1 : typeof t == "function" ? c1 : l1)(e, t, r ?? "")) : Ir(this.node(), e);
}
function Ir(e, t) {
  return e.style.getPropertyValue(t) || Rh(e).getComputedStyle(e, null).getPropertyValue(t);
}
function u1(e) {
  return function() {
    delete this[e];
  };
}
function f1(e, t) {
  return function() {
    this[e] = t;
  };
}
function d1(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? delete this[e] : this[e] = r;
  };
}
function p1(e, t) {
  return arguments.length > 1 ? this.each((t == null ? u1 : typeof t == "function" ? d1 : f1)(e, t)) : this.node()[e];
}
function Ih(e) {
  return e.trim().split(/^|\s+/);
}
function ho(e) {
  return e.classList || new Ph(e);
}
function Ph(e) {
  this._node = e, this._names = Ih(e.getAttribute("class") || "");
}
Ph.prototype = {
  add: function(e) {
    var t = this._names.indexOf(e);
    t < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var t = this._names.indexOf(e);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function Nh(e, t) {
  for (var r = ho(e), i = -1, a = t.length; ++i < a; ) r.add(t[i]);
}
function zh(e, t) {
  for (var r = ho(e), i = -1, a = t.length; ++i < a; ) r.remove(t[i]);
}
function g1(e) {
  return function() {
    Nh(this, e);
  };
}
function m1(e) {
  return function() {
    zh(this, e);
  };
}
function y1(e, t) {
  return function() {
    (t.apply(this, arguments) ? Nh : zh)(this, e);
  };
}
function x1(e, t) {
  var r = Ih(e + "");
  if (arguments.length < 2) {
    for (var i = ho(this.node()), a = -1, n = r.length; ++a < n; ) if (!i.contains(r[a])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? y1 : t ? g1 : m1)(r, t));
}
function b1() {
  this.textContent = "";
}
function C1(e) {
  return function() {
    this.textContent = e;
  };
}
function w1(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function k1(e) {
  return arguments.length ? this.each(e == null ? b1 : (typeof e == "function" ? w1 : C1)(e)) : this.node().textContent;
}
function v1() {
  this.innerHTML = "";
}
function _1(e) {
  return function() {
    this.innerHTML = e;
  };
}
function S1(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function T1(e) {
  return arguments.length ? this.each(e == null ? v1 : (typeof e == "function" ? S1 : _1)(e)) : this.node().innerHTML;
}
function B1() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function A1() {
  return this.each(B1);
}
function L1() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function M1() {
  return this.each(L1);
}
function E1(e) {
  var t = typeof e == "function" ? e : Eh(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function $1() {
  return null;
}
function F1(e, t) {
  var r = typeof e == "function" ? e : Eh(e), i = t == null ? $1 : typeof t == "function" ? t : co(t);
  return this.select(function() {
    return this.insertBefore(r.apply(this, arguments), i.apply(this, arguments) || null);
  });
}
function D1() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function O1() {
  return this.each(D1);
}
function R1() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function I1() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function P1(e) {
  return this.select(e ? I1 : R1);
}
function N1(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function z1(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function W1(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var r = "", i = t.indexOf(".");
    return i >= 0 && (r = t.slice(i + 1), t = t.slice(0, i)), { type: t, name: r };
  });
}
function q1(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var r = 0, i = -1, a = t.length, n; r < a; ++r)
        n = t[r], (!e.type || n.type === e.type) && n.name === e.name ? this.removeEventListener(n.type, n.listener, n.options) : t[++i] = n;
      ++i ? t.length = i : delete this.__on;
    }
  };
}
function H1(e, t, r) {
  return function() {
    var i = this.__on, a, n = z1(t);
    if (i) {
      for (var s = 0, o = i.length; s < o; ++s)
        if ((a = i[s]).type === e.type && a.name === e.name) {
          this.removeEventListener(a.type, a.listener, a.options), this.addEventListener(a.type, a.listener = n, a.options = r), a.value = t;
          return;
        }
    }
    this.addEventListener(e.type, n, r), a = { type: e.type, name: e.name, value: t, listener: n, options: r }, i ? i.push(a) : this.__on = [a];
  };
}
function j1(e, t, r) {
  var i = W1(e + ""), a, n = i.length, s;
  if (arguments.length < 2) {
    var o = this.node().__on;
    if (o) {
      for (var l = 0, c = o.length, h; l < c; ++l)
        for (a = 0, h = o[l]; a < n; ++a)
          if ((s = i[a]).type === h.type && s.name === h.name)
            return h.value;
    }
    return;
  }
  for (o = t ? H1 : q1, a = 0; a < n; ++a) this.each(o(i[a], t, r));
  return this;
}
function Wh(e, t, r) {
  var i = Rh(e), a = i.CustomEvent;
  typeof a == "function" ? a = new a(t, r) : (a = i.document.createEvent("Event"), r ? (a.initEvent(t, r.bubbles, r.cancelable), a.detail = r.detail) : a.initEvent(t, !1, !1)), e.dispatchEvent(a);
}
function Y1(e, t) {
  return function() {
    return Wh(this, e, t);
  };
}
function U1(e, t) {
  return function() {
    return Wh(this, e, t.apply(this, arguments));
  };
}
function G1(e, t) {
  return this.each((typeof t == "function" ? U1 : Y1)(e, t));
}
function* X1() {
  for (var e = this._groups, t = 0, r = e.length; t < r; ++t)
    for (var i = e[t], a = 0, n = i.length, s; a < n; ++a)
      (s = i[a]) && (yield s);
}
var qh = [null];
function Zt(e, t) {
  this._groups = e, this._parents = t;
}
function Ii() {
  return new Zt([[document.documentElement]], qh);
}
function V1() {
  return this;
}
Zt.prototype = Ii.prototype = {
  constructor: Zt,
  select: wb,
  selectAll: Sb,
  selectChild: Lb,
  selectChildren: Fb,
  filter: Db,
  data: zb,
  enter: Ob,
  exit: qb,
  join: Hb,
  merge: jb,
  selection: V1,
  order: Yb,
  sort: Ub,
  call: Xb,
  nodes: Vb,
  node: Zb,
  size: Kb,
  empty: Qb,
  each: Jb,
  attr: s1,
  style: h1,
  property: p1,
  classed: x1,
  text: k1,
  html: T1,
  raise: A1,
  lower: M1,
  append: E1,
  insert: F1,
  remove: O1,
  clone: P1,
  datum: N1,
  on: j1,
  dispatch: G1,
  [Symbol.iterator]: X1
};
function ht(e) {
  return typeof e == "string" ? new Zt([[document.querySelector(e)]], [document.documentElement]) : new Zt([[e]], qh);
}
var Pr = 0, ci = 0, ri = 0, Hh = 1e3, Ea, hi, $a = 0, sr = 0, ln = 0, Si = typeof performance == "object" && performance.now ? performance : Date, jh = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function uo() {
  return sr || (jh(Z1), sr = Si.now() + ln);
}
function Z1() {
  sr = 0;
}
function Fa() {
  this._call = this._time = this._next = null;
}
Fa.prototype = Yh.prototype = {
  constructor: Fa,
  restart: function(e, t, r) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    r = (r == null ? uo() : +r) + (t == null ? 0 : +t), !this._next && hi !== this && (hi ? hi._next = this : Ea = this, hi = this), this._call = e, this._time = r, ps();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ps());
  }
};
function Yh(e, t, r) {
  var i = new Fa();
  return i.restart(e, t, r), i;
}
function K1() {
  uo(), ++Pr;
  for (var e = Ea, t; e; )
    (t = sr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Pr;
}
function Vl() {
  sr = ($a = Si.now()) + ln, Pr = ci = 0;
  try {
    K1();
  } finally {
    Pr = 0, J1(), sr = 0;
  }
}
function Q1() {
  var e = Si.now(), t = e - $a;
  t > Hh && (ln -= t, $a = e);
}
function J1() {
  for (var e, t = Ea, r, i = 1 / 0; t; )
    t._call ? (i > t._time && (i = t._time), e = t, t = t._next) : (r = t._next, t._next = null, t = e ? e._next = r : Ea = r);
  hi = e, ps(i);
}
function ps(e) {
  if (!Pr) {
    ci && (ci = clearTimeout(ci));
    var t = e - sr;
    t > 24 ? (e < 1 / 0 && (ci = setTimeout(Vl, e - Si.now() - ln)), ri && (ri = clearInterval(ri))) : (ri || ($a = Si.now(), ri = setInterval(Q1, Hh)), Pr = 1, jh(Vl));
  }
}
function Zl(e, t, r) {
  var i = new Fa();
  return t = t == null ? 0 : +t, i.restart((a) => {
    i.stop(), e(a + t);
  }, t, r), i;
}
var t2 = Mh("start", "end", "cancel", "interrupt"), e2 = [], Uh = 0, Kl = 1, gs = 2, ua = 3, Ql = 4, ms = 5, fa = 6;
function cn(e, t, r, i, a, n) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (r in s) return;
  r2(e, r, {
    name: t,
    index: i,
    // For context during callback.
    group: a,
    // For context during callback.
    on: t2,
    tween: e2,
    time: n.time,
    delay: n.delay,
    duration: n.duration,
    ease: n.ease,
    timer: null,
    state: Uh
  });
}
function fo(e, t) {
  var r = he(e, t);
  if (r.state > Uh) throw new Error("too late; already scheduled");
  return r;
}
function Ce(e, t) {
  var r = he(e, t);
  if (r.state > ua) throw new Error("too late; already running");
  return r;
}
function he(e, t) {
  var r = e.__transition;
  if (!r || !(r = r[t])) throw new Error("transition not found");
  return r;
}
function r2(e, t, r) {
  var i = e.__transition, a;
  i[t] = r, r.timer = Yh(n, 0, r.time);
  function n(c) {
    r.state = Kl, r.timer.restart(s, r.delay, r.time), r.delay <= c && s(c - r.delay);
  }
  function s(c) {
    var h, u, f, d;
    if (r.state !== Kl) return l();
    for (h in i)
      if (d = i[h], d.name === r.name) {
        if (d.state === ua) return Zl(s);
        d.state === Ql ? (d.state = fa, d.timer.stop(), d.on.call("interrupt", e, e.__data__, d.index, d.group), delete i[h]) : +h < t && (d.state = fa, d.timer.stop(), d.on.call("cancel", e, e.__data__, d.index, d.group), delete i[h]);
      }
    if (Zl(function() {
      r.state === ua && (r.state = Ql, r.timer.restart(o, r.delay, r.time), o(c));
    }), r.state = gs, r.on.call("start", e, e.__data__, r.index, r.group), r.state === gs) {
      for (r.state = ua, a = new Array(f = r.tween.length), h = 0, u = -1; h < f; ++h)
        (d = r.tween[h].value.call(e, e.__data__, r.index, r.group)) && (a[++u] = d);
      a.length = u + 1;
    }
  }
  function o(c) {
    for (var h = c < r.duration ? r.ease.call(null, c / r.duration) : (r.timer.restart(l), r.state = ms, 1), u = -1, f = a.length; ++u < f; )
      a[u].call(e, h);
    r.state === ms && (r.on.call("end", e, e.__data__, r.index, r.group), l());
  }
  function l() {
    r.state = fa, r.timer.stop(), delete i[t];
    for (var c in i) return;
    delete e.__transition;
  }
}
function i2(e, t) {
  var r = e.__transition, i, a, n = !0, s;
  if (r) {
    t = t == null ? null : t + "";
    for (s in r) {
      if ((i = r[s]).name !== t) {
        n = !1;
        continue;
      }
      a = i.state > gs && i.state < ms, i.state = fa, i.timer.stop(), i.on.call(a ? "interrupt" : "cancel", e, e.__data__, i.index, i.group), delete r[s];
    }
    n && delete e.__transition;
  }
}
function a2(e) {
  return this.each(function() {
    i2(this, e);
  });
}
function n2(e, t) {
  var r, i;
  return function() {
    var a = Ce(this, e), n = a.tween;
    if (n !== r) {
      i = r = n;
      for (var s = 0, o = i.length; s < o; ++s)
        if (i[s].name === t) {
          i = i.slice(), i.splice(s, 1);
          break;
        }
    }
    a.tween = i;
  };
}
function s2(e, t, r) {
  var i, a;
  if (typeof r != "function") throw new Error();
  return function() {
    var n = Ce(this, e), s = n.tween;
    if (s !== i) {
      a = (i = s).slice();
      for (var o = { name: t, value: r }, l = 0, c = a.length; l < c; ++l)
        if (a[l].name === t) {
          a[l] = o;
          break;
        }
      l === c && a.push(o);
    }
    n.tween = a;
  };
}
function o2(e, t) {
  var r = this._id;
  if (e += "", arguments.length < 2) {
    for (var i = he(this.node(), r).tween, a = 0, n = i.length, s; a < n; ++a)
      if ((s = i[a]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? n2 : s2)(r, e, t));
}
function po(e, t, r) {
  var i = e._id;
  return e.each(function() {
    var a = Ce(this, i);
    (a.value || (a.value = {}))[t] = r.apply(this, arguments);
  }), function(a) {
    return he(a, i).value[t];
  };
}
function Gh(e, t) {
  var r;
  return (typeof t == "number" ? Ve : t instanceof fl ? ul : (r = fl(t)) ? (t = r, ul) : Xg)(e, t);
}
function l2(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function c2(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function h2(e, t, r) {
  var i, a = r + "", n;
  return function() {
    var s = this.getAttribute(e);
    return s === a ? null : s === i ? n : n = t(i = s, r);
  };
}
function u2(e, t, r) {
  var i, a = r + "", n;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === a ? null : s === i ? n : n = t(i = s, r);
  };
}
function f2(e, t, r) {
  var i, a, n;
  return function() {
    var s, o = r(this), l;
    return o == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = o + "", s === l ? null : s === i && l === a ? n : (a = l, n = t(i = s, o)));
  };
}
function d2(e, t, r) {
  var i, a, n;
  return function() {
    var s, o = r(this), l;
    return o == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = o + "", s === l ? null : s === i && l === a ? n : (a = l, n = t(i = s, o)));
  };
}
function p2(e, t) {
  var r = on(e), i = r === "transform" ? om : Gh;
  return this.attrTween(e, typeof t == "function" ? (r.local ? d2 : f2)(r, i, po(this, "attr." + e, t)) : t == null ? (r.local ? c2 : l2)(r) : (r.local ? u2 : h2)(r, i, t));
}
function g2(e, t) {
  return function(r) {
    this.setAttribute(e, t.call(this, r));
  };
}
function m2(e, t) {
  return function(r) {
    this.setAttributeNS(e.space, e.local, t.call(this, r));
  };
}
function y2(e, t) {
  var r, i;
  function a() {
    var n = t.apply(this, arguments);
    return n !== i && (r = (i = n) && m2(e, n)), r;
  }
  return a._value = t, a;
}
function x2(e, t) {
  var r, i;
  function a() {
    var n = t.apply(this, arguments);
    return n !== i && (r = (i = n) && g2(e, n)), r;
  }
  return a._value = t, a;
}
function b2(e, t) {
  var r = "attr." + e;
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  var i = on(e);
  return this.tween(r, (i.local ? y2 : x2)(i, t));
}
function C2(e, t) {
  return function() {
    fo(this, e).delay = +t.apply(this, arguments);
  };
}
function w2(e, t) {
  return t = +t, function() {
    fo(this, e).delay = t;
  };
}
function k2(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? C2 : w2)(t, e)) : he(this.node(), t).delay;
}
function v2(e, t) {
  return function() {
    Ce(this, e).duration = +t.apply(this, arguments);
  };
}
function _2(e, t) {
  return t = +t, function() {
    Ce(this, e).duration = t;
  };
}
function S2(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? v2 : _2)(t, e)) : he(this.node(), t).duration;
}
function T2(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Ce(this, e).ease = t;
  };
}
function B2(e) {
  var t = this._id;
  return arguments.length ? this.each(T2(t, e)) : he(this.node(), t).ease;
}
function A2(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    if (typeof r != "function") throw new Error();
    Ce(this, e).ease = r;
  };
}
function L2(e) {
  if (typeof e != "function") throw new Error();
  return this.each(A2(this._id, e));
}
function M2(e) {
  typeof e != "function" && (e = Fh(e));
  for (var t = this._groups, r = t.length, i = new Array(r), a = 0; a < r; ++a)
    for (var n = t[a], s = n.length, o = i[a] = [], l, c = 0; c < s; ++c)
      (l = n[c]) && e.call(l, l.__data__, c, n) && o.push(l);
  return new Me(i, this._parents, this._name, this._id);
}
function E2(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, r = e._groups, i = t.length, a = r.length, n = Math.min(i, a), s = new Array(i), o = 0; o < n; ++o)
    for (var l = t[o], c = r[o], h = l.length, u = s[o] = new Array(h), f, d = 0; d < h; ++d)
      (f = l[d] || c[d]) && (u[d] = f);
  for (; o < i; ++o)
    s[o] = t[o];
  return new Me(s, this._parents, this._name, this._id);
}
function $2(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var r = t.indexOf(".");
    return r >= 0 && (t = t.slice(0, r)), !t || t === "start";
  });
}
function F2(e, t, r) {
  var i, a, n = $2(t) ? fo : Ce;
  return function() {
    var s = n(this, e), o = s.on;
    o !== i && (a = (i = o).copy()).on(t, r), s.on = a;
  };
}
function D2(e, t) {
  var r = this._id;
  return arguments.length < 2 ? he(this.node(), r).on.on(e) : this.each(F2(r, e, t));
}
function O2(e) {
  return function() {
    var t = this.parentNode;
    for (var r in this.__transition) if (+r !== e) return;
    t && t.removeChild(this);
  };
}
function R2() {
  return this.on("end.remove", O2(this._id));
}
function I2(e) {
  var t = this._name, r = this._id;
  typeof e != "function" && (e = co(e));
  for (var i = this._groups, a = i.length, n = new Array(a), s = 0; s < a; ++s)
    for (var o = i[s], l = o.length, c = n[s] = new Array(l), h, u, f = 0; f < l; ++f)
      (h = o[f]) && (u = e.call(h, h.__data__, f, o)) && ("__data__" in h && (u.__data__ = h.__data__), c[f] = u, cn(c[f], t, r, f, c, he(h, r)));
  return new Me(n, this._parents, t, r);
}
function P2(e) {
  var t = this._name, r = this._id;
  typeof e != "function" && (e = $h(e));
  for (var i = this._groups, a = i.length, n = [], s = [], o = 0; o < a; ++o)
    for (var l = i[o], c = l.length, h, u = 0; u < c; ++u)
      if (h = l[u]) {
        for (var f = e.call(h, h.__data__, u, l), d, g = he(h, r), m = 0, y = f.length; m < y; ++m)
          (d = f[m]) && cn(d, t, r, m, f, g);
        n.push(f), s.push(h);
      }
  return new Me(n, s, t, r);
}
var N2 = Ii.prototype.constructor;
function z2() {
  return new N2(this._groups, this._parents);
}
function W2(e, t) {
  var r, i, a;
  return function() {
    var n = Ir(this, e), s = (this.style.removeProperty(e), Ir(this, e));
    return n === s ? null : n === r && s === i ? a : a = t(r = n, i = s);
  };
}
function Xh(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function q2(e, t, r) {
  var i, a = r + "", n;
  return function() {
    var s = Ir(this, e);
    return s === a ? null : s === i ? n : n = t(i = s, r);
  };
}
function H2(e, t, r) {
  var i, a, n;
  return function() {
    var s = Ir(this, e), o = r(this), l = o + "";
    return o == null && (l = o = (this.style.removeProperty(e), Ir(this, e))), s === l ? null : s === i && l === a ? n : (a = l, n = t(i = s, o));
  };
}
function j2(e, t) {
  var r, i, a, n = "style." + t, s = "end." + n, o;
  return function() {
    var l = Ce(this, e), c = l.on, h = l.value[n] == null ? o || (o = Xh(t)) : void 0;
    (c !== r || a !== h) && (i = (r = c).copy()).on(s, a = h), l.on = i;
  };
}
function Y2(e, t, r) {
  var i = (e += "") == "transform" ? sm : Gh;
  return t == null ? this.styleTween(e, W2(e, i)).on("end.style." + e, Xh(e)) : typeof t == "function" ? this.styleTween(e, H2(e, i, po(this, "style." + e, t))).each(j2(this._id, e)) : this.styleTween(e, q2(e, i, t), r).on("end.style." + e, null);
}
function U2(e, t, r) {
  return function(i) {
    this.style.setProperty(e, t.call(this, i), r);
  };
}
function G2(e, t, r) {
  var i, a;
  function n() {
    var s = t.apply(this, arguments);
    return s !== a && (i = (a = s) && U2(e, s, r)), i;
  }
  return n._value = t, n;
}
function X2(e, t, r) {
  var i = "style." + (e += "");
  if (arguments.length < 2) return (i = this.tween(i)) && i._value;
  if (t == null) return this.tween(i, null);
  if (typeof t != "function") throw new Error();
  return this.tween(i, G2(e, t, r ?? ""));
}
function V2(e) {
  return function() {
    this.textContent = e;
  };
}
function Z2(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function K2(e) {
  return this.tween("text", typeof e == "function" ? Z2(po(this, "text", e)) : V2(e == null ? "" : e + ""));
}
function Q2(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function J2(e) {
  var t, r;
  function i() {
    var a = e.apply(this, arguments);
    return a !== r && (t = (r = a) && Q2(a)), t;
  }
  return i._value = e, i;
}
function tC(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, J2(e));
}
function eC() {
  for (var e = this._name, t = this._id, r = Vh(), i = this._groups, a = i.length, n = 0; n < a; ++n)
    for (var s = i[n], o = s.length, l, c = 0; c < o; ++c)
      if (l = s[c]) {
        var h = he(l, t);
        cn(l, e, r, c, s, {
          time: h.time + h.delay + h.duration,
          delay: 0,
          duration: h.duration,
          ease: h.ease
        });
      }
  return new Me(i, this._parents, e, r);
}
function rC() {
  var e, t, r = this, i = r._id, a = r.size();
  return new Promise(function(n, s) {
    var o = { value: s }, l = { value: function() {
      --a === 0 && n();
    } };
    r.each(function() {
      var c = Ce(this, i), h = c.on;
      h !== e && (t = (e = h).copy(), t._.cancel.push(o), t._.interrupt.push(o), t._.end.push(l)), c.on = t;
    }), a === 0 && n();
  });
}
var iC = 0;
function Me(e, t, r, i) {
  this._groups = e, this._parents = t, this._name = r, this._id = i;
}
function Vh() {
  return ++iC;
}
var Se = Ii.prototype;
Me.prototype = {
  constructor: Me,
  select: I2,
  selectAll: P2,
  selectChild: Se.selectChild,
  selectChildren: Se.selectChildren,
  filter: M2,
  merge: E2,
  selection: z2,
  transition: eC,
  call: Se.call,
  nodes: Se.nodes,
  node: Se.node,
  size: Se.size,
  empty: Se.empty,
  each: Se.each,
  on: D2,
  attr: p2,
  attrTween: b2,
  style: Y2,
  styleTween: X2,
  text: K2,
  textTween: tC,
  remove: R2,
  tween: o2,
  delay: k2,
  duration: S2,
  ease: B2,
  easeVarying: L2,
  end: rC,
  [Symbol.iterator]: Se[Symbol.iterator]
};
function aC(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var nC = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: aC
};
function sC(e, t) {
  for (var r; !(r = e.__transition) || !(r = r[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return r;
}
function oC(e) {
  var t, r;
  e instanceof Me ? (t = e._id, e = e._name) : (t = Vh(), (r = nC).time = uo(), e = e == null ? null : e + "");
  for (var i = this._groups, a = i.length, n = 0; n < a; ++n)
    for (var s = i[n], o = s.length, l, c = 0; c < o; ++c)
      (l = s[c]) && cn(l, e, t, c, s, r || sC(l, t));
  return new Me(i, this._parents, e, t);
}
Ii.prototype.interrupt = a2;
Ii.prototype.transition = oC;
function ui(e, t, r) {
  this.k = e, this.x = t, this.y = r;
}
ui.prototype = {
  constructor: ui,
  scale: function(e) {
    return e === 1 ? this : new ui(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new ui(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function(e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function(e) {
    return e * this.k + this.x;
  },
  applyY: function(e) {
    return e * this.k + this.y;
  },
  invert: function(e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function(e) {
    return (e - this.x) / this.k;
  },
  invertY: function(e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function(e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function(e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
ui.prototype;
var lC = /* @__PURE__ */ p((e) => {
  const { securityLevel: t } = ft();
  let r = ht("body");
  if (t === "sandbox") {
    const n = ht(`#i${e}`).node()?.contentDocument ?? document;
    r = ht(n.body);
  }
  return r.select(`#${e}`);
}, "selectSvgElement");
function go(e) {
  return typeof e > "u" || e === null;
}
p(go, "isNothing");
function Zh(e) {
  return typeof e == "object" && e !== null;
}
p(Zh, "isObject");
function Kh(e) {
  return Array.isArray(e) ? e : go(e) ? [] : [e];
}
p(Kh, "toArray");
function Qh(e, t) {
  var r, i, a, n;
  if (t)
    for (n = Object.keys(t), r = 0, i = n.length; r < i; r += 1)
      a = n[r], e[a] = t[a];
  return e;
}
p(Qh, "extend");
function Jh(e, t) {
  var r = "", i;
  for (i = 0; i < t; i += 1)
    r += e;
  return r;
}
p(Jh, "repeat");
function tu(e) {
  return e === 0 && Number.NEGATIVE_INFINITY === 1 / e;
}
p(tu, "isNegativeZero");
var cC = go, hC = Zh, uC = Kh, fC = Jh, dC = tu, pC = Qh, Tt = {
  isNothing: cC,
  isObject: hC,
  toArray: uC,
  repeat: fC,
  isNegativeZero: dC,
  extend: pC
};
function mo(e, t) {
  var r = "", i = e.reason || "(unknown reason)";
  return e.mark ? (e.mark.name && (r += 'in "' + e.mark.name + '" '), r += "(" + (e.mark.line + 1) + ":" + (e.mark.column + 1) + ")", !t && e.mark.snippet && (r += `

` + e.mark.snippet), i + " " + r) : i;
}
p(mo, "formatError");
function Nr(e, t) {
  Error.call(this), this.name = "YAMLException", this.reason = e, this.mark = t, this.message = mo(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
p(Nr, "YAMLException$1");
Nr.prototype = Object.create(Error.prototype);
Nr.prototype.constructor = Nr;
Nr.prototype.toString = /* @__PURE__ */ p(function(t) {
  return this.name + ": " + mo(this, t);
}, "toString");
var Xt = Nr;
function da(e, t, r, i, a) {
  var n = "", s = "", o = Math.floor(a / 2) - 1;
  return i - t > o && (n = " ... ", t = i - o + n.length), r - i > o && (s = " ...", r = i + o - s.length), {
    str: n + e.slice(t, r).replace(/\t/g, "→") + s,
    pos: i - t + n.length
    // relative position
  };
}
p(da, "getLine");
function pa(e, t) {
  return Tt.repeat(" ", t - e.length) + e;
}
p(pa, "padStart");
function eu(e, t) {
  if (t = Object.create(t || null), !e.buffer) return null;
  t.maxLength || (t.maxLength = 79), typeof t.indent != "number" && (t.indent = 1), typeof t.linesBefore != "number" && (t.linesBefore = 3), typeof t.linesAfter != "number" && (t.linesAfter = 2);
  for (var r = /\r?\n|\r|\0/g, i = [0], a = [], n, s = -1; n = r.exec(e.buffer); )
    a.push(n.index), i.push(n.index + n[0].length), e.position <= n.index && s < 0 && (s = i.length - 2);
  s < 0 && (s = i.length - 1);
  var o = "", l, c, h = Math.min(e.line + t.linesAfter, a.length).toString().length, u = t.maxLength - (t.indent + h + 3);
  for (l = 1; l <= t.linesBefore && !(s - l < 0); l++)
    c = da(
      e.buffer,
      i[s - l],
      a[s - l],
      e.position - (i[s] - i[s - l]),
      u
    ), o = Tt.repeat(" ", t.indent) + pa((e.line - l + 1).toString(), h) + " | " + c.str + `
` + o;
  for (c = da(e.buffer, i[s], a[s], e.position, u), o += Tt.repeat(" ", t.indent) + pa((e.line + 1).toString(), h) + " | " + c.str + `
`, o += Tt.repeat("-", t.indent + h + 3 + c.pos) + `^
`, l = 1; l <= t.linesAfter && !(s + l >= a.length); l++)
    c = da(
      e.buffer,
      i[s + l],
      a[s + l],
      e.position - (i[s] - i[s + l]),
      u
    ), o += Tt.repeat(" ", t.indent) + pa((e.line + l + 1).toString(), h) + " | " + c.str + `
`;
  return o.replace(/\n$/, "");
}
p(eu, "makeSnippet");
var gC = eu, mC = [
  "kind",
  "multi",
  "resolve",
  "construct",
  "instanceOf",
  "predicate",
  "represent",
  "representName",
  "defaultStyle",
  "styleAliases"
], yC = [
  "scalar",
  "sequence",
  "mapping"
];
function ru(e) {
  var t = {};
  return e !== null && Object.keys(e).forEach(function(r) {
    e[r].forEach(function(i) {
      t[String(i)] = r;
    });
  }), t;
}
p(ru, "compileStyleAliases");
function iu(e, t) {
  if (t = t || {}, Object.keys(t).forEach(function(r) {
    if (mC.indexOf(r) === -1)
      throw new Xt('Unknown option "' + r + '" is met in definition of "' + e + '" YAML type.');
  }), this.options = t, this.tag = e, this.kind = t.kind || null, this.resolve = t.resolve || function() {
    return !0;
  }, this.construct = t.construct || function(r) {
    return r;
  }, this.instanceOf = t.instanceOf || null, this.predicate = t.predicate || null, this.represent = t.represent || null, this.representName = t.representName || null, this.defaultStyle = t.defaultStyle || null, this.multi = t.multi || !1, this.styleAliases = ru(t.styleAliases || null), yC.indexOf(this.kind) === -1)
    throw new Xt('Unknown kind "' + this.kind + '" is specified for "' + e + '" YAML type.');
}
p(iu, "Type$1");
var Ot = iu;
function ys(e, t) {
  var r = [];
  return e[t].forEach(function(i) {
    var a = r.length;
    r.forEach(function(n, s) {
      n.tag === i.tag && n.kind === i.kind && n.multi === i.multi && (a = s);
    }), r[a] = i;
  }), r;
}
p(ys, "compileList");
function au() {
  var e = {
    scalar: {},
    sequence: {},
    mapping: {},
    fallback: {},
    multi: {
      scalar: [],
      sequence: [],
      mapping: [],
      fallback: []
    }
  }, t, r;
  function i(a) {
    a.multi ? (e.multi[a.kind].push(a), e.multi.fallback.push(a)) : e[a.kind][a.tag] = e.fallback[a.tag] = a;
  }
  for (p(i, "collectType"), t = 0, r = arguments.length; t < r; t += 1)
    arguments[t].forEach(i);
  return e;
}
p(au, "compileMap");
function Da(e) {
  return this.extend(e);
}
p(Da, "Schema$1");
Da.prototype.extend = /* @__PURE__ */ p(function(t) {
  var r = [], i = [];
  if (t instanceof Ot)
    i.push(t);
  else if (Array.isArray(t))
    i = i.concat(t);
  else if (t && (Array.isArray(t.implicit) || Array.isArray(t.explicit)))
    t.implicit && (r = r.concat(t.implicit)), t.explicit && (i = i.concat(t.explicit));
  else
    throw new Xt("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  r.forEach(function(n) {
    if (!(n instanceof Ot))
      throw new Xt("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (n.loadKind && n.loadKind !== "scalar")
      throw new Xt("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (n.multi)
      throw new Xt("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), i.forEach(function(n) {
    if (!(n instanceof Ot))
      throw new Xt("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var a = Object.create(Da.prototype);
  return a.implicit = (this.implicit || []).concat(r), a.explicit = (this.explicit || []).concat(i), a.compiledImplicit = ys(a, "implicit"), a.compiledExplicit = ys(a, "explicit"), a.compiledTypeMap = au(a.compiledImplicit, a.compiledExplicit), a;
}, "extend");
var xC = Da, bC = new Ot("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: /* @__PURE__ */ p(function(e) {
    return e !== null ? e : "";
  }, "construct")
}), CC = new Ot("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: /* @__PURE__ */ p(function(e) {
    return e !== null ? e : [];
  }, "construct")
}), wC = new Ot("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: /* @__PURE__ */ p(function(e) {
    return e !== null ? e : {};
  }, "construct")
}), kC = new xC({
  explicit: [
    bC,
    CC,
    wC
  ]
});
function nu(e) {
  if (e === null) return !0;
  var t = e.length;
  return t === 1 && e === "~" || t === 4 && (e === "null" || e === "Null" || e === "NULL");
}
p(nu, "resolveYamlNull");
function su() {
  return null;
}
p(su, "constructYamlNull");
function ou(e) {
  return e === null;
}
p(ou, "isNull");
var vC = new Ot("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: nu,
  construct: su,
  predicate: ou,
  represent: {
    canonical: /* @__PURE__ */ p(function() {
      return "~";
    }, "canonical"),
    lowercase: /* @__PURE__ */ p(function() {
      return "null";
    }, "lowercase"),
    uppercase: /* @__PURE__ */ p(function() {
      return "NULL";
    }, "uppercase"),
    camelcase: /* @__PURE__ */ p(function() {
      return "Null";
    }, "camelcase"),
    empty: /* @__PURE__ */ p(function() {
      return "";
    }, "empty")
  },
  defaultStyle: "lowercase"
});
function lu(e) {
  if (e === null) return !1;
  var t = e.length;
  return t === 4 && (e === "true" || e === "True" || e === "TRUE") || t === 5 && (e === "false" || e === "False" || e === "FALSE");
}
p(lu, "resolveYamlBoolean");
function cu(e) {
  return e === "true" || e === "True" || e === "TRUE";
}
p(cu, "constructYamlBoolean");
function hu(e) {
  return Object.prototype.toString.call(e) === "[object Boolean]";
}
p(hu, "isBoolean");
var _C = new Ot("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: lu,
  construct: cu,
  predicate: hu,
  represent: {
    lowercase: /* @__PURE__ */ p(function(e) {
      return e ? "true" : "false";
    }, "lowercase"),
    uppercase: /* @__PURE__ */ p(function(e) {
      return e ? "TRUE" : "FALSE";
    }, "uppercase"),
    camelcase: /* @__PURE__ */ p(function(e) {
      return e ? "True" : "False";
    }, "camelcase")
  },
  defaultStyle: "lowercase"
});
function uu(e) {
  return 48 <= e && e <= 57 || 65 <= e && e <= 70 || 97 <= e && e <= 102;
}
p(uu, "isHexCode");
function fu(e) {
  return 48 <= e && e <= 55;
}
p(fu, "isOctCode");
function du(e) {
  return 48 <= e && e <= 57;
}
p(du, "isDecCode");
function pu(e) {
  if (e === null) return !1;
  var t = e.length, r = 0, i = !1, a;
  if (!t) return !1;
  if (a = e[r], (a === "-" || a === "+") && (a = e[++r]), a === "0") {
    if (r + 1 === t) return !0;
    if (a = e[++r], a === "b") {
      for (r++; r < t; r++)
        if (a = e[r], a !== "_") {
          if (a !== "0" && a !== "1") return !1;
          i = !0;
        }
      return i && a !== "_";
    }
    if (a === "x") {
      for (r++; r < t; r++)
        if (a = e[r], a !== "_") {
          if (!uu(e.charCodeAt(r))) return !1;
          i = !0;
        }
      return i && a !== "_";
    }
    if (a === "o") {
      for (r++; r < t; r++)
        if (a = e[r], a !== "_") {
          if (!fu(e.charCodeAt(r))) return !1;
          i = !0;
        }
      return i && a !== "_";
    }
  }
  if (a === "_") return !1;
  for (; r < t; r++)
    if (a = e[r], a !== "_") {
      if (!du(e.charCodeAt(r)))
        return !1;
      i = !0;
    }
  return !(!i || a === "_");
}
p(pu, "resolveYamlInteger");
function gu(e) {
  var t = e, r = 1, i;
  if (t.indexOf("_") !== -1 && (t = t.replace(/_/g, "")), i = t[0], (i === "-" || i === "+") && (i === "-" && (r = -1), t = t.slice(1), i = t[0]), t === "0") return 0;
  if (i === "0") {
    if (t[1] === "b") return r * parseInt(t.slice(2), 2);
    if (t[1] === "x") return r * parseInt(t.slice(2), 16);
    if (t[1] === "o") return r * parseInt(t.slice(2), 8);
  }
  return r * parseInt(t, 10);
}
p(gu, "constructYamlInteger");
function mu(e) {
  return Object.prototype.toString.call(e) === "[object Number]" && e % 1 === 0 && !Tt.isNegativeZero(e);
}
p(mu, "isInteger");
var SC = new Ot("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: pu,
  construct: gu,
  predicate: mu,
  represent: {
    binary: /* @__PURE__ */ p(function(e) {
      return e >= 0 ? "0b" + e.toString(2) : "-0b" + e.toString(2).slice(1);
    }, "binary"),
    octal: /* @__PURE__ */ p(function(e) {
      return e >= 0 ? "0o" + e.toString(8) : "-0o" + e.toString(8).slice(1);
    }, "octal"),
    decimal: /* @__PURE__ */ p(function(e) {
      return e.toString(10);
    }, "decimal"),
    /* eslint-disable max-len */
    hexadecimal: /* @__PURE__ */ p(function(e) {
      return e >= 0 ? "0x" + e.toString(16).toUpperCase() : "-0x" + e.toString(16).toUpperCase().slice(1);
    }, "hexadecimal")
  },
  defaultStyle: "decimal",
  styleAliases: {
    binary: [2, "bin"],
    octal: [8, "oct"],
    decimal: [10, "dec"],
    hexadecimal: [16, "hex"]
  }
}), TC = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function yu(e) {
  return !(e === null || !TC.test(e) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  e[e.length - 1] === "_");
}
p(yu, "resolveYamlFloat");
function xu(e) {
  var t, r;
  return t = e.replace(/_/g, "").toLowerCase(), r = t[0] === "-" ? -1 : 1, "+-".indexOf(t[0]) >= 0 && (t = t.slice(1)), t === ".inf" ? r === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : t === ".nan" ? NaN : r * parseFloat(t, 10);
}
p(xu, "constructYamlFloat");
var BC = /^[-+]?[0-9]+e/;
function bu(e, t) {
  var r;
  if (isNaN(e))
    switch (t) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  else if (Number.POSITIVE_INFINITY === e)
    switch (t) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  else if (Number.NEGATIVE_INFINITY === e)
    switch (t) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  else if (Tt.isNegativeZero(e))
    return "-0.0";
  return r = e.toString(10), BC.test(r) ? r.replace("e", ".e") : r;
}
p(bu, "representYamlFloat");
function Cu(e) {
  return Object.prototype.toString.call(e) === "[object Number]" && (e % 1 !== 0 || Tt.isNegativeZero(e));
}
p(Cu, "isFloat");
var AC = new Ot("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: yu,
  construct: xu,
  predicate: Cu,
  represent: bu,
  defaultStyle: "lowercase"
}), wu = kC.extend({
  implicit: [
    vC,
    _C,
    SC,
    AC
  ]
}), LC = wu, ku = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
), vu = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function _u(e) {
  return e === null ? !1 : ku.exec(e) !== null || vu.exec(e) !== null;
}
p(_u, "resolveYamlTimestamp");
function Su(e) {
  var t, r, i, a, n, s, o, l = 0, c = null, h, u, f;
  if (t = ku.exec(e), t === null && (t = vu.exec(e)), t === null) throw new Error("Date resolve error");
  if (r = +t[1], i = +t[2] - 1, a = +t[3], !t[4])
    return new Date(Date.UTC(r, i, a));
  if (n = +t[4], s = +t[5], o = +t[6], t[7]) {
    for (l = t[7].slice(0, 3); l.length < 3; )
      l += "0";
    l = +l;
  }
  return t[9] && (h = +t[10], u = +(t[11] || 0), c = (h * 60 + u) * 6e4, t[9] === "-" && (c = -c)), f = new Date(Date.UTC(r, i, a, n, s, o, l)), c && f.setTime(f.getTime() - c), f;
}
p(Su, "constructYamlTimestamp");
function Tu(e) {
  return e.toISOString();
}
p(Tu, "representYamlTimestamp");
var MC = new Ot("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: _u,
  construct: Su,
  instanceOf: Date,
  represent: Tu
});
function Bu(e) {
  return e === "<<" || e === null;
}
p(Bu, "resolveYamlMerge");
var EC = new Ot("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: Bu
}), yo = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function Au(e) {
  if (e === null) return !1;
  var t, r, i = 0, a = e.length, n = yo;
  for (r = 0; r < a; r++)
    if (t = n.indexOf(e.charAt(r)), !(t > 64)) {
      if (t < 0) return !1;
      i += 6;
    }
  return i % 8 === 0;
}
p(Au, "resolveYamlBinary");
function Lu(e) {
  var t, r, i = e.replace(/[\r\n=]/g, ""), a = i.length, n = yo, s = 0, o = [];
  for (t = 0; t < a; t++)
    t % 4 === 0 && t && (o.push(s >> 16 & 255), o.push(s >> 8 & 255), o.push(s & 255)), s = s << 6 | n.indexOf(i.charAt(t));
  return r = a % 4 * 6, r === 0 ? (o.push(s >> 16 & 255), o.push(s >> 8 & 255), o.push(s & 255)) : r === 18 ? (o.push(s >> 10 & 255), o.push(s >> 2 & 255)) : r === 12 && o.push(s >> 4 & 255), new Uint8Array(o);
}
p(Lu, "constructYamlBinary");
function Mu(e) {
  var t = "", r = 0, i, a, n = e.length, s = yo;
  for (i = 0; i < n; i++)
    i % 3 === 0 && i && (t += s[r >> 18 & 63], t += s[r >> 12 & 63], t += s[r >> 6 & 63], t += s[r & 63]), r = (r << 8) + e[i];
  return a = n % 3, a === 0 ? (t += s[r >> 18 & 63], t += s[r >> 12 & 63], t += s[r >> 6 & 63], t += s[r & 63]) : a === 2 ? (t += s[r >> 10 & 63], t += s[r >> 4 & 63], t += s[r << 2 & 63], t += s[64]) : a === 1 && (t += s[r >> 2 & 63], t += s[r << 4 & 63], t += s[64], t += s[64]), t;
}
p(Mu, "representYamlBinary");
function Eu(e) {
  return Object.prototype.toString.call(e) === "[object Uint8Array]";
}
p(Eu, "isBinary");
var $C = new Ot("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: Au,
  construct: Lu,
  predicate: Eu,
  represent: Mu
}), FC = Object.prototype.hasOwnProperty, DC = Object.prototype.toString;
function $u(e) {
  if (e === null) return !0;
  var t = [], r, i, a, n, s, o = e;
  for (r = 0, i = o.length; r < i; r += 1) {
    if (a = o[r], s = !1, DC.call(a) !== "[object Object]") return !1;
    for (n in a)
      if (FC.call(a, n))
        if (!s) s = !0;
        else return !1;
    if (!s) return !1;
    if (t.indexOf(n) === -1) t.push(n);
    else return !1;
  }
  return !0;
}
p($u, "resolveYamlOmap");
function Fu(e) {
  return e !== null ? e : [];
}
p(Fu, "constructYamlOmap");
var OC = new Ot("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: $u,
  construct: Fu
}), RC = Object.prototype.toString;
function Du(e) {
  if (e === null) return !0;
  var t, r, i, a, n, s = e;
  for (n = new Array(s.length), t = 0, r = s.length; t < r; t += 1) {
    if (i = s[t], RC.call(i) !== "[object Object]" || (a = Object.keys(i), a.length !== 1)) return !1;
    n[t] = [a[0], i[a[0]]];
  }
  return !0;
}
p(Du, "resolveYamlPairs");
function Ou(e) {
  if (e === null) return [];
  var t, r, i, a, n, s = e;
  for (n = new Array(s.length), t = 0, r = s.length; t < r; t += 1)
    i = s[t], a = Object.keys(i), n[t] = [a[0], i[a[0]]];
  return n;
}
p(Ou, "constructYamlPairs");
var IC = new Ot("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: Du,
  construct: Ou
}), PC = Object.prototype.hasOwnProperty;
function Ru(e) {
  if (e === null) return !0;
  var t, r = e;
  for (t in r)
    if (PC.call(r, t) && r[t] !== null)
      return !1;
  return !0;
}
p(Ru, "resolveYamlSet");
function Iu(e) {
  return e !== null ? e : {};
}
p(Iu, "constructYamlSet");
var NC = new Ot("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: Ru,
  construct: Iu
}), Pu = LC.extend({
  implicit: [
    MC,
    EC
  ],
  explicit: [
    $C,
    OC,
    IC,
    NC
  ]
}), Ne = Object.prototype.hasOwnProperty, Oa = 1, Nu = 2, zu = 3, Ra = 4, Wn = 1, zC = 2, Jl = 3, WC = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, qC = /[\x85\u2028\u2029]/, HC = /[,\[\]\{\}]/, Wu = /^(?:!|!!|![a-z\-]+!)$/i, qu = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function xs(e) {
  return Object.prototype.toString.call(e);
}
p(xs, "_class");
function le(e) {
  return e === 10 || e === 13;
}
p(le, "is_EOL");
function Pe(e) {
  return e === 9 || e === 32;
}
p(Pe, "is_WHITE_SPACE");
function Wt(e) {
  return e === 9 || e === 32 || e === 10 || e === 13;
}
p(Wt, "is_WS_OR_EOL");
function Je(e) {
  return e === 44 || e === 91 || e === 93 || e === 123 || e === 125;
}
p(Je, "is_FLOW_INDICATOR");
function Hu(e) {
  var t;
  return 48 <= e && e <= 57 ? e - 48 : (t = e | 32, 97 <= t && t <= 102 ? t - 97 + 10 : -1);
}
p(Hu, "fromHexCode");
function ju(e) {
  return e === 120 ? 2 : e === 117 ? 4 : e === 85 ? 8 : 0;
}
p(ju, "escapedHexLen");
function Yu(e) {
  return 48 <= e && e <= 57 ? e - 48 : -1;
}
p(Yu, "fromDecimalCode");
function bs(e) {
  return e === 48 ? "\0" : e === 97 ? "\x07" : e === 98 ? "\b" : e === 116 || e === 9 ? "	" : e === 110 ? `
` : e === 118 ? "\v" : e === 102 ? "\f" : e === 114 ? "\r" : e === 101 ? "\x1B" : e === 32 ? " " : e === 34 ? '"' : e === 47 ? "/" : e === 92 ? "\\" : e === 78 ? "" : e === 95 ? " " : e === 76 ? "\u2028" : e === 80 ? "\u2029" : "";
}
p(bs, "simpleEscapeSequence");
function Uu(e) {
  return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode(
    (e - 65536 >> 10) + 55296,
    (e - 65536 & 1023) + 56320
  );
}
p(Uu, "charFromCodepoint");
var Gu = new Array(256), Xu = new Array(256);
for (Xe = 0; Xe < 256; Xe++)
  Gu[Xe] = bs(Xe) ? 1 : 0, Xu[Xe] = bs(Xe);
var Xe;
function Vu(e, t) {
  this.input = e, this.filename = t.filename || null, this.schema = t.schema || Pu, this.onWarning = t.onWarning || null, this.legacy = t.legacy || !1, this.json = t.json || !1, this.listener = t.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = e.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
p(Vu, "State$1");
function xo(e, t) {
  var r = {
    name: e.filename,
    buffer: e.input.slice(0, -1),
    // omit trailing \0
    position: e.position,
    line: e.line,
    column: e.position - e.lineStart
  };
  return r.snippet = gC(r), new Xt(t, r);
}
p(xo, "generateError");
function Q(e, t) {
  throw xo(e, t);
}
p(Q, "throwError");
function Ti(e, t) {
  e.onWarning && e.onWarning.call(null, xo(e, t));
}
p(Ti, "throwWarning");
var tc = {
  YAML: /* @__PURE__ */ p(function(t, r, i) {
    var a, n, s;
    t.version !== null && Q(t, "duplication of %YAML directive"), i.length !== 1 && Q(t, "YAML directive accepts exactly one argument"), a = /^([0-9]+)\.([0-9]+)$/.exec(i[0]), a === null && Q(t, "ill-formed argument of the YAML directive"), n = parseInt(a[1], 10), s = parseInt(a[2], 10), n !== 1 && Q(t, "unacceptable YAML version of the document"), t.version = i[0], t.checkLineBreaks = s < 2, s !== 1 && s !== 2 && Ti(t, "unsupported YAML version of the document");
  }, "handleYamlDirective"),
  TAG: /* @__PURE__ */ p(function(t, r, i) {
    var a, n;
    i.length !== 2 && Q(t, "TAG directive accepts exactly two arguments"), a = i[0], n = i[1], Wu.test(a) || Q(t, "ill-formed tag handle (first argument) of the TAG directive"), Ne.call(t.tagMap, a) && Q(t, 'there is a previously declared suffix for "' + a + '" tag handle'), qu.test(n) || Q(t, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      n = decodeURIComponent(n);
    } catch {
      Q(t, "tag prefix is malformed: " + n);
    }
    t.tagMap[a] = n;
  }, "handleTagDirective")
};
function Le(e, t, r, i) {
  var a, n, s, o;
  if (t < r) {
    if (o = e.input.slice(t, r), i)
      for (a = 0, n = o.length; a < n; a += 1)
        s = o.charCodeAt(a), s === 9 || 32 <= s && s <= 1114111 || Q(e, "expected valid JSON character");
    else WC.test(o) && Q(e, "the stream contains non-printable characters");
    e.result += o;
  }
}
p(Le, "captureSegment");
function Cs(e, t, r, i) {
  var a, n, s, o;
  for (Tt.isObject(r) || Q(e, "cannot merge mappings; the provided source object is unacceptable"), a = Object.keys(r), s = 0, o = a.length; s < o; s += 1)
    n = a[s], Ne.call(t, n) || (t[n] = r[n], i[n] = !0);
}
p(Cs, "mergeMappings");
function tr(e, t, r, i, a, n, s, o, l) {
  var c, h;
  if (Array.isArray(a))
    for (a = Array.prototype.slice.call(a), c = 0, h = a.length; c < h; c += 1)
      Array.isArray(a[c]) && Q(e, "nested arrays are not supported inside keys"), typeof a == "object" && xs(a[c]) === "[object Object]" && (a[c] = "[object Object]");
  if (typeof a == "object" && xs(a) === "[object Object]" && (a = "[object Object]"), a = String(a), t === null && (t = {}), i === "tag:yaml.org,2002:merge")
    if (Array.isArray(n))
      for (c = 0, h = n.length; c < h; c += 1)
        Cs(e, t, n[c], r);
    else
      Cs(e, t, n, r);
  else
    !e.json && !Ne.call(r, a) && Ne.call(t, a) && (e.line = s || e.line, e.lineStart = o || e.lineStart, e.position = l || e.position, Q(e, "duplicated mapping key")), a === "__proto__" ? Object.defineProperty(t, a, {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: n
    }) : t[a] = n, delete r[a];
  return t;
}
p(tr, "storeMappingPair");
function hn(e) {
  var t;
  t = e.input.charCodeAt(e.position), t === 10 ? e.position++ : t === 13 ? (e.position++, e.input.charCodeAt(e.position) === 10 && e.position++) : Q(e, "a line break is expected"), e.line += 1, e.lineStart = e.position, e.firstTabInLine = -1;
}
p(hn, "readLineBreak");
function xt(e, t, r) {
  for (var i = 0, a = e.input.charCodeAt(e.position); a !== 0; ) {
    for (; Pe(a); )
      a === 9 && e.firstTabInLine === -1 && (e.firstTabInLine = e.position), a = e.input.charCodeAt(++e.position);
    if (t && a === 35)
      do
        a = e.input.charCodeAt(++e.position);
      while (a !== 10 && a !== 13 && a !== 0);
    if (le(a))
      for (hn(e), a = e.input.charCodeAt(e.position), i++, e.lineIndent = 0; a === 32; )
        e.lineIndent++, a = e.input.charCodeAt(++e.position);
    else
      break;
  }
  return r !== -1 && i !== 0 && e.lineIndent < r && Ti(e, "deficient indentation"), i;
}
p(xt, "skipSeparationSpace");
function Pi(e) {
  var t = e.position, r;
  return r = e.input.charCodeAt(t), !!((r === 45 || r === 46) && r === e.input.charCodeAt(t + 1) && r === e.input.charCodeAt(t + 2) && (t += 3, r = e.input.charCodeAt(t), r === 0 || Wt(r)));
}
p(Pi, "testDocumentSeparator");
function un(e, t) {
  t === 1 ? e.result += " " : t > 1 && (e.result += Tt.repeat(`
`, t - 1));
}
p(un, "writeFoldedLines");
function Zu(e, t, r) {
  var i, a, n, s, o, l, c, h, u = e.kind, f = e.result, d;
  if (d = e.input.charCodeAt(e.position), Wt(d) || Je(d) || d === 35 || d === 38 || d === 42 || d === 33 || d === 124 || d === 62 || d === 39 || d === 34 || d === 37 || d === 64 || d === 96 || (d === 63 || d === 45) && (a = e.input.charCodeAt(e.position + 1), Wt(a) || r && Je(a)))
    return !1;
  for (e.kind = "scalar", e.result = "", n = s = e.position, o = !1; d !== 0; ) {
    if (d === 58) {
      if (a = e.input.charCodeAt(e.position + 1), Wt(a) || r && Je(a))
        break;
    } else if (d === 35) {
      if (i = e.input.charCodeAt(e.position - 1), Wt(i))
        break;
    } else {
      if (e.position === e.lineStart && Pi(e) || r && Je(d))
        break;
      if (le(d))
        if (l = e.line, c = e.lineStart, h = e.lineIndent, xt(e, !1, -1), e.lineIndent >= t) {
          o = !0, d = e.input.charCodeAt(e.position);
          continue;
        } else {
          e.position = s, e.line = l, e.lineStart = c, e.lineIndent = h;
          break;
        }
    }
    o && (Le(e, n, s, !1), un(e, e.line - l), n = s = e.position, o = !1), Pe(d) || (s = e.position + 1), d = e.input.charCodeAt(++e.position);
  }
  return Le(e, n, s, !1), e.result ? !0 : (e.kind = u, e.result = f, !1);
}
p(Zu, "readPlainScalar");
function Ku(e, t) {
  var r, i, a;
  if (r = e.input.charCodeAt(e.position), r !== 39)
    return !1;
  for (e.kind = "scalar", e.result = "", e.position++, i = a = e.position; (r = e.input.charCodeAt(e.position)) !== 0; )
    if (r === 39)
      if (Le(e, i, e.position, !0), r = e.input.charCodeAt(++e.position), r === 39)
        i = e.position, e.position++, a = e.position;
      else
        return !0;
    else le(r) ? (Le(e, i, a, !0), un(e, xt(e, !1, t)), i = a = e.position) : e.position === e.lineStart && Pi(e) ? Q(e, "unexpected end of the document within a single quoted scalar") : (e.position++, a = e.position);
  Q(e, "unexpected end of the stream within a single quoted scalar");
}
p(Ku, "readSingleQuotedScalar");
function Qu(e, t) {
  var r, i, a, n, s, o;
  if (o = e.input.charCodeAt(e.position), o !== 34)
    return !1;
  for (e.kind = "scalar", e.result = "", e.position++, r = i = e.position; (o = e.input.charCodeAt(e.position)) !== 0; ) {
    if (o === 34)
      return Le(e, r, e.position, !0), e.position++, !0;
    if (o === 92) {
      if (Le(e, r, e.position, !0), o = e.input.charCodeAt(++e.position), le(o))
        xt(e, !1, t);
      else if (o < 256 && Gu[o])
        e.result += Xu[o], e.position++;
      else if ((s = ju(o)) > 0) {
        for (a = s, n = 0; a > 0; a--)
          o = e.input.charCodeAt(++e.position), (s = Hu(o)) >= 0 ? n = (n << 4) + s : Q(e, "expected hexadecimal character");
        e.result += Uu(n), e.position++;
      } else
        Q(e, "unknown escape sequence");
      r = i = e.position;
    } else le(o) ? (Le(e, r, i, !0), un(e, xt(e, !1, t)), r = i = e.position) : e.position === e.lineStart && Pi(e) ? Q(e, "unexpected end of the document within a double quoted scalar") : (e.position++, i = e.position);
  }
  Q(e, "unexpected end of the stream within a double quoted scalar");
}
p(Qu, "readDoubleQuotedScalar");
function Ju(e, t) {
  var r = !0, i, a, n, s = e.tag, o, l = e.anchor, c, h, u, f, d, g = /* @__PURE__ */ Object.create(null), m, y, x, b;
  if (b = e.input.charCodeAt(e.position), b === 91)
    h = 93, d = !1, o = [];
  else if (b === 123)
    h = 125, d = !0, o = {};
  else
    return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = o), b = e.input.charCodeAt(++e.position); b !== 0; ) {
    if (xt(e, !0, t), b = e.input.charCodeAt(e.position), b === h)
      return e.position++, e.tag = s, e.anchor = l, e.kind = d ? "mapping" : "sequence", e.result = o, !0;
    r ? b === 44 && Q(e, "expected the node content, but found ','") : Q(e, "missed comma between flow collection entries"), y = m = x = null, u = f = !1, b === 63 && (c = e.input.charCodeAt(e.position + 1), Wt(c) && (u = f = !0, e.position++, xt(e, !0, t))), i = e.line, a = e.lineStart, n = e.position, or(e, t, Oa, !1, !0), y = e.tag, m = e.result, xt(e, !0, t), b = e.input.charCodeAt(e.position), (f || e.line === i) && b === 58 && (u = !0, b = e.input.charCodeAt(++e.position), xt(e, !0, t), or(e, t, Oa, !1, !0), x = e.result), d ? tr(e, o, g, y, m, x, i, a, n) : u ? o.push(tr(e, null, g, y, m, x, i, a, n)) : o.push(m), xt(e, !0, t), b = e.input.charCodeAt(e.position), b === 44 ? (r = !0, b = e.input.charCodeAt(++e.position)) : r = !1;
  }
  Q(e, "unexpected end of the stream within a flow collection");
}
p(Ju, "readFlowCollection");
function tf(e, t) {
  var r, i, a = Wn, n = !1, s = !1, o = t, l = 0, c = !1, h, u;
  if (u = e.input.charCodeAt(e.position), u === 124)
    i = !1;
  else if (u === 62)
    i = !0;
  else
    return !1;
  for (e.kind = "scalar", e.result = ""; u !== 0; )
    if (u = e.input.charCodeAt(++e.position), u === 43 || u === 45)
      Wn === a ? a = u === 43 ? Jl : zC : Q(e, "repeat of a chomping mode identifier");
    else if ((h = Yu(u)) >= 0)
      h === 0 ? Q(e, "bad explicit indentation width of a block scalar; it cannot be less than one") : s ? Q(e, "repeat of an indentation width identifier") : (o = t + h - 1, s = !0);
    else
      break;
  if (Pe(u)) {
    do
      u = e.input.charCodeAt(++e.position);
    while (Pe(u));
    if (u === 35)
      do
        u = e.input.charCodeAt(++e.position);
      while (!le(u) && u !== 0);
  }
  for (; u !== 0; ) {
    for (hn(e), e.lineIndent = 0, u = e.input.charCodeAt(e.position); (!s || e.lineIndent < o) && u === 32; )
      e.lineIndent++, u = e.input.charCodeAt(++e.position);
    if (!s && e.lineIndent > o && (o = e.lineIndent), le(u)) {
      l++;
      continue;
    }
    if (e.lineIndent < o) {
      a === Jl ? e.result += Tt.repeat(`
`, n ? 1 + l : l) : a === Wn && n && (e.result += `
`);
      break;
    }
    for (i ? Pe(u) ? (c = !0, e.result += Tt.repeat(`
`, n ? 1 + l : l)) : c ? (c = !1, e.result += Tt.repeat(`
`, l + 1)) : l === 0 ? n && (e.result += " ") : e.result += Tt.repeat(`
`, l) : e.result += Tt.repeat(`
`, n ? 1 + l : l), n = !0, s = !0, l = 0, r = e.position; !le(u) && u !== 0; )
      u = e.input.charCodeAt(++e.position);
    Le(e, r, e.position, !1);
  }
  return !0;
}
p(tf, "readBlockScalar");
function ws(e, t) {
  var r, i = e.tag, a = e.anchor, n = [], s, o = !1, l;
  if (e.firstTabInLine !== -1) return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = n), l = e.input.charCodeAt(e.position); l !== 0 && (e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, Q(e, "tab characters must not be used in indentation")), !(l !== 45 || (s = e.input.charCodeAt(e.position + 1), !Wt(s)))); ) {
    if (o = !0, e.position++, xt(e, !0, -1) && e.lineIndent <= t) {
      n.push(null), l = e.input.charCodeAt(e.position);
      continue;
    }
    if (r = e.line, or(e, t, zu, !1, !0), n.push(e.result), xt(e, !0, -1), l = e.input.charCodeAt(e.position), (e.line === r || e.lineIndent > t) && l !== 0)
      Q(e, "bad indentation of a sequence entry");
    else if (e.lineIndent < t)
      break;
  }
  return o ? (e.tag = i, e.anchor = a, e.kind = "sequence", e.result = n, !0) : !1;
}
p(ws, "readBlockSequence");
function ef(e, t, r) {
  var i, a, n, s, o, l, c = e.tag, h = e.anchor, u = {}, f = /* @__PURE__ */ Object.create(null), d = null, g = null, m = null, y = !1, x = !1, b;
  if (e.firstTabInLine !== -1) return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = u), b = e.input.charCodeAt(e.position); b !== 0; ) {
    if (!y && e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, Q(e, "tab characters must not be used in indentation")), i = e.input.charCodeAt(e.position + 1), n = e.line, (b === 63 || b === 58) && Wt(i))
      b === 63 ? (y && (tr(e, u, f, d, g, null, s, o, l), d = g = m = null), x = !0, y = !0, a = !0) : y ? (y = !1, a = !0) : Q(e, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), e.position += 1, b = i;
    else {
      if (s = e.line, o = e.lineStart, l = e.position, !or(e, r, Nu, !1, !0))
        break;
      if (e.line === n) {
        for (b = e.input.charCodeAt(e.position); Pe(b); )
          b = e.input.charCodeAt(++e.position);
        if (b === 58)
          b = e.input.charCodeAt(++e.position), Wt(b) || Q(e, "a whitespace character is expected after the key-value separator within a block mapping"), y && (tr(e, u, f, d, g, null, s, o, l), d = g = m = null), x = !0, y = !1, a = !1, d = e.tag, g = e.result;
        else if (x)
          Q(e, "can not read an implicit mapping pair; a colon is missed");
        else
          return e.tag = c, e.anchor = h, !0;
      } else if (x)
        Q(e, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return e.tag = c, e.anchor = h, !0;
    }
    if ((e.line === n || e.lineIndent > t) && (y && (s = e.line, o = e.lineStart, l = e.position), or(e, t, Ra, !0, a) && (y ? g = e.result : m = e.result), y || (tr(e, u, f, d, g, m, s, o, l), d = g = m = null), xt(e, !0, -1), b = e.input.charCodeAt(e.position)), (e.line === n || e.lineIndent > t) && b !== 0)
      Q(e, "bad indentation of a mapping entry");
    else if (e.lineIndent < t)
      break;
  }
  return y && tr(e, u, f, d, g, null, s, o, l), x && (e.tag = c, e.anchor = h, e.kind = "mapping", e.result = u), x;
}
p(ef, "readBlockMapping");
function rf(e) {
  var t, r = !1, i = !1, a, n, s;
  if (s = e.input.charCodeAt(e.position), s !== 33) return !1;
  if (e.tag !== null && Q(e, "duplication of a tag property"), s = e.input.charCodeAt(++e.position), s === 60 ? (r = !0, s = e.input.charCodeAt(++e.position)) : s === 33 ? (i = !0, a = "!!", s = e.input.charCodeAt(++e.position)) : a = "!", t = e.position, r) {
    do
      s = e.input.charCodeAt(++e.position);
    while (s !== 0 && s !== 62);
    e.position < e.length ? (n = e.input.slice(t, e.position), s = e.input.charCodeAt(++e.position)) : Q(e, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; s !== 0 && !Wt(s); )
      s === 33 && (i ? Q(e, "tag suffix cannot contain exclamation marks") : (a = e.input.slice(t - 1, e.position + 1), Wu.test(a) || Q(e, "named tag handle cannot contain such characters"), i = !0, t = e.position + 1)), s = e.input.charCodeAt(++e.position);
    n = e.input.slice(t, e.position), HC.test(n) && Q(e, "tag suffix cannot contain flow indicator characters");
  }
  n && !qu.test(n) && Q(e, "tag name cannot contain such characters: " + n);
  try {
    n = decodeURIComponent(n);
  } catch {
    Q(e, "tag name is malformed: " + n);
  }
  return r ? e.tag = n : Ne.call(e.tagMap, a) ? e.tag = e.tagMap[a] + n : a === "!" ? e.tag = "!" + n : a === "!!" ? e.tag = "tag:yaml.org,2002:" + n : Q(e, 'undeclared tag handle "' + a + '"'), !0;
}
p(rf, "readTagProperty");
function af(e) {
  var t, r;
  if (r = e.input.charCodeAt(e.position), r !== 38) return !1;
  for (e.anchor !== null && Q(e, "duplication of an anchor property"), r = e.input.charCodeAt(++e.position), t = e.position; r !== 0 && !Wt(r) && !Je(r); )
    r = e.input.charCodeAt(++e.position);
  return e.position === t && Q(e, "name of an anchor node must contain at least one character"), e.anchor = e.input.slice(t, e.position), !0;
}
p(af, "readAnchorProperty");
function nf(e) {
  var t, r, i;
  if (i = e.input.charCodeAt(e.position), i !== 42) return !1;
  for (i = e.input.charCodeAt(++e.position), t = e.position; i !== 0 && !Wt(i) && !Je(i); )
    i = e.input.charCodeAt(++e.position);
  return e.position === t && Q(e, "name of an alias node must contain at least one character"), r = e.input.slice(t, e.position), Ne.call(e.anchorMap, r) || Q(e, 'unidentified alias "' + r + '"'), e.result = e.anchorMap[r], xt(e, !0, -1), !0;
}
p(nf, "readAlias");
function or(e, t, r, i, a) {
  var n, s, o, l = 1, c = !1, h = !1, u, f, d, g, m, y;
  if (e.listener !== null && e.listener("open", e), e.tag = null, e.anchor = null, e.kind = null, e.result = null, n = s = o = Ra === r || zu === r, i && xt(e, !0, -1) && (c = !0, e.lineIndent > t ? l = 1 : e.lineIndent === t ? l = 0 : e.lineIndent < t && (l = -1)), l === 1)
    for (; rf(e) || af(e); )
      xt(e, !0, -1) ? (c = !0, o = n, e.lineIndent > t ? l = 1 : e.lineIndent === t ? l = 0 : e.lineIndent < t && (l = -1)) : o = !1;
  if (o && (o = c || a), (l === 1 || Ra === r) && (Oa === r || Nu === r ? m = t : m = t + 1, y = e.position - e.lineStart, l === 1 ? o && (ws(e, y) || ef(e, y, m)) || Ju(e, m) ? h = !0 : (s && tf(e, m) || Ku(e, m) || Qu(e, m) ? h = !0 : nf(e) ? (h = !0, (e.tag !== null || e.anchor !== null) && Q(e, "alias node should not have any properties")) : Zu(e, m, Oa === r) && (h = !0, e.tag === null && (e.tag = "?")), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : l === 0 && (h = o && ws(e, y))), e.tag === null)
    e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
  else if (e.tag === "?") {
    for (e.result !== null && e.kind !== "scalar" && Q(e, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + e.kind + '"'), u = 0, f = e.implicitTypes.length; u < f; u += 1)
      if (g = e.implicitTypes[u], g.resolve(e.result)) {
        e.result = g.construct(e.result), e.tag = g.tag, e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
        break;
      }
  } else if (e.tag !== "!") {
    if (Ne.call(e.typeMap[e.kind || "fallback"], e.tag))
      g = e.typeMap[e.kind || "fallback"][e.tag];
    else
      for (g = null, d = e.typeMap.multi[e.kind || "fallback"], u = 0, f = d.length; u < f; u += 1)
        if (e.tag.slice(0, d[u].tag.length) === d[u].tag) {
          g = d[u];
          break;
        }
    g || Q(e, "unknown tag !<" + e.tag + ">"), e.result !== null && g.kind !== e.kind && Q(e, "unacceptable node kind for !<" + e.tag + '> tag; it should be "' + g.kind + '", not "' + e.kind + '"'), g.resolve(e.result, e.tag) ? (e.result = g.construct(e.result, e.tag), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : Q(e, "cannot resolve a node with !<" + e.tag + "> explicit tag");
  }
  return e.listener !== null && e.listener("close", e), e.tag !== null || e.anchor !== null || h;
}
p(or, "composeNode");
function sf(e) {
  var t = e.position, r, i, a, n = !1, s;
  for (e.version = null, e.checkLineBreaks = e.legacy, e.tagMap = /* @__PURE__ */ Object.create(null), e.anchorMap = /* @__PURE__ */ Object.create(null); (s = e.input.charCodeAt(e.position)) !== 0 && (xt(e, !0, -1), s = e.input.charCodeAt(e.position), !(e.lineIndent > 0 || s !== 37)); ) {
    for (n = !0, s = e.input.charCodeAt(++e.position), r = e.position; s !== 0 && !Wt(s); )
      s = e.input.charCodeAt(++e.position);
    for (i = e.input.slice(r, e.position), a = [], i.length < 1 && Q(e, "directive name must not be less than one character in length"); s !== 0; ) {
      for (; Pe(s); )
        s = e.input.charCodeAt(++e.position);
      if (s === 35) {
        do
          s = e.input.charCodeAt(++e.position);
        while (s !== 0 && !le(s));
        break;
      }
      if (le(s)) break;
      for (r = e.position; s !== 0 && !Wt(s); )
        s = e.input.charCodeAt(++e.position);
      a.push(e.input.slice(r, e.position));
    }
    s !== 0 && hn(e), Ne.call(tc, i) ? tc[i](e, i, a) : Ti(e, 'unknown document directive "' + i + '"');
  }
  if (xt(e, !0, -1), e.lineIndent === 0 && e.input.charCodeAt(e.position) === 45 && e.input.charCodeAt(e.position + 1) === 45 && e.input.charCodeAt(e.position + 2) === 45 ? (e.position += 3, xt(e, !0, -1)) : n && Q(e, "directives end mark is expected"), or(e, e.lineIndent - 1, Ra, !1, !0), xt(e, !0, -1), e.checkLineBreaks && qC.test(e.input.slice(t, e.position)) && Ti(e, "non-ASCII line breaks are interpreted as content"), e.documents.push(e.result), e.position === e.lineStart && Pi(e)) {
    e.input.charCodeAt(e.position) === 46 && (e.position += 3, xt(e, !0, -1));
    return;
  }
  if (e.position < e.length - 1)
    Q(e, "end of the stream or a document separator is expected");
  else
    return;
}
p(sf, "readDocument");
function bo(e, t) {
  e = String(e), t = t || {}, e.length !== 0 && (e.charCodeAt(e.length - 1) !== 10 && e.charCodeAt(e.length - 1) !== 13 && (e += `
`), e.charCodeAt(0) === 65279 && (e = e.slice(1)));
  var r = new Vu(e, t), i = e.indexOf("\0");
  for (i !== -1 && (r.position = i, Q(r, "null byte is not allowed in input")), r.input += "\0"; r.input.charCodeAt(r.position) === 32; )
    r.lineIndent += 1, r.position += 1;
  for (; r.position < r.length - 1; )
    sf(r);
  return r.documents;
}
p(bo, "loadDocuments");
function jC(e, t, r) {
  t !== null && typeof t == "object" && typeof r > "u" && (r = t, t = null);
  var i = bo(e, r);
  if (typeof t != "function")
    return i;
  for (var a = 0, n = i.length; a < n; a += 1)
    t(i[a]);
}
p(jC, "loadAll$1");
function of(e, t) {
  var r = bo(e, t);
  if (r.length !== 0) {
    if (r.length === 1)
      return r[0];
    throw new Xt("expected a single document in the stream, but found more");
  }
}
p(of, "load$1");
var YC = of, UC = {
  load: YC
}, lf = Object.prototype.toString, cf = Object.prototype.hasOwnProperty, Co = 65279, GC = 9, Bi = 10, XC = 13, VC = 32, ZC = 33, KC = 34, ks = 35, QC = 37, JC = 38, tw = 39, ew = 42, hf = 44, rw = 45, Ia = 58, iw = 61, aw = 62, nw = 63, sw = 64, uf = 91, ff = 93, ow = 96, df = 123, lw = 124, pf = 125, It = {};
It[0] = "\\0";
It[7] = "\\a";
It[8] = "\\b";
It[9] = "\\t";
It[10] = "\\n";
It[11] = "\\v";
It[12] = "\\f";
It[13] = "\\r";
It[27] = "\\e";
It[34] = '\\"';
It[92] = "\\\\";
It[133] = "\\N";
It[160] = "\\_";
It[8232] = "\\L";
It[8233] = "\\P";
var cw = [
  "y",
  "Y",
  "yes",
  "Yes",
  "YES",
  "on",
  "On",
  "ON",
  "n",
  "N",
  "no",
  "No",
  "NO",
  "off",
  "Off",
  "OFF"
], hw = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function gf(e, t) {
  var r, i, a, n, s, o, l;
  if (t === null) return {};
  for (r = {}, i = Object.keys(t), a = 0, n = i.length; a < n; a += 1)
    s = i[a], o = String(t[s]), s.slice(0, 2) === "!!" && (s = "tag:yaml.org,2002:" + s.slice(2)), l = e.compiledTypeMap.fallback[s], l && cf.call(l.styleAliases, o) && (o = l.styleAliases[o]), r[s] = o;
  return r;
}
p(gf, "compileStyleMap");
function mf(e) {
  var t, r, i;
  if (t = e.toString(16).toUpperCase(), e <= 255)
    r = "x", i = 2;
  else if (e <= 65535)
    r = "u", i = 4;
  else if (e <= 4294967295)
    r = "U", i = 8;
  else
    throw new Xt("code point within a string may not be greater than 0xFFFFFFFF");
  return "\\" + r + Tt.repeat("0", i - t.length) + t;
}
p(mf, "encodeHex");
var uw = 1, Ai = 2;
function yf(e) {
  this.schema = e.schema || Pu, this.indent = Math.max(1, e.indent || 2), this.noArrayIndent = e.noArrayIndent || !1, this.skipInvalid = e.skipInvalid || !1, this.flowLevel = Tt.isNothing(e.flowLevel) ? -1 : e.flowLevel, this.styleMap = gf(this.schema, e.styles || null), this.sortKeys = e.sortKeys || !1, this.lineWidth = e.lineWidth || 80, this.noRefs = e.noRefs || !1, this.noCompatMode = e.noCompatMode || !1, this.condenseFlow = e.condenseFlow || !1, this.quotingType = e.quotingType === '"' ? Ai : uw, this.forceQuotes = e.forceQuotes || !1, this.replacer = typeof e.replacer == "function" ? e.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
p(yf, "State");
function vs(e, t) {
  for (var r = Tt.repeat(" ", t), i = 0, a = -1, n = "", s, o = e.length; i < o; )
    a = e.indexOf(`
`, i), a === -1 ? (s = e.slice(i), i = o) : (s = e.slice(i, a + 1), i = a + 1), s.length && s !== `
` && (n += r), n += s;
  return n;
}
p(vs, "indentString");
function Pa(e, t) {
  return `
` + Tt.repeat(" ", e.indent * t);
}
p(Pa, "generateNextLine");
function xf(e, t) {
  var r, i, a;
  for (r = 0, i = e.implicitTypes.length; r < i; r += 1)
    if (a = e.implicitTypes[r], a.resolve(t))
      return !0;
  return !1;
}
p(xf, "testImplicitResolving");
function Li(e) {
  return e === VC || e === GC;
}
p(Li, "isWhitespace");
function zr(e) {
  return 32 <= e && e <= 126 || 161 <= e && e <= 55295 && e !== 8232 && e !== 8233 || 57344 <= e && e <= 65533 && e !== Co || 65536 <= e && e <= 1114111;
}
p(zr, "isPrintable");
function _s(e) {
  return zr(e) && e !== Co && e !== XC && e !== Bi;
}
p(_s, "isNsCharOrWhitespace");
function Ss(e, t, r) {
  var i = _s(e), a = i && !Li(e);
  return (
    // ns-plain-safe
    (r ? (
      // c = flow-in
      i
    ) : i && e !== hf && e !== uf && e !== ff && e !== df && e !== pf) && e !== ks && !(t === Ia && !a) || _s(t) && !Li(t) && e === ks || t === Ia && a
  );
}
p(Ss, "isPlainSafe");
function bf(e) {
  return zr(e) && e !== Co && !Li(e) && e !== rw && e !== nw && e !== Ia && e !== hf && e !== uf && e !== ff && e !== df && e !== pf && e !== ks && e !== JC && e !== ew && e !== ZC && e !== lw && e !== iw && e !== aw && e !== tw && e !== KC && e !== QC && e !== sw && e !== ow;
}
p(bf, "isPlainSafeFirst");
function Cf(e) {
  return !Li(e) && e !== Ia;
}
p(Cf, "isPlainSafeLast");
function vr(e, t) {
  var r = e.charCodeAt(t), i;
  return r >= 55296 && r <= 56319 && t + 1 < e.length && (i = e.charCodeAt(t + 1), i >= 56320 && i <= 57343) ? (r - 55296) * 1024 + i - 56320 + 65536 : r;
}
p(vr, "codePointAt");
function wo(e) {
  var t = /^\n* /;
  return t.test(e);
}
p(wo, "needIndentIndicator");
var wf = 1, Ts = 2, kf = 3, vf = 4, wr = 5;
function _f(e, t, r, i, a, n, s, o) {
  var l, c = 0, h = null, u = !1, f = !1, d = i !== -1, g = -1, m = bf(vr(e, 0)) && Cf(vr(e, e.length - 1));
  if (t || s)
    for (l = 0; l < e.length; c >= 65536 ? l += 2 : l++) {
      if (c = vr(e, l), !zr(c))
        return wr;
      m = m && Ss(c, h, o), h = c;
    }
  else {
    for (l = 0; l < e.length; c >= 65536 ? l += 2 : l++) {
      if (c = vr(e, l), c === Bi)
        u = !0, d && (f = f || // Foldable line = too long, and not more-indented.
        l - g - 1 > i && e[g + 1] !== " ", g = l);
      else if (!zr(c))
        return wr;
      m = m && Ss(c, h, o), h = c;
    }
    f = f || d && l - g - 1 > i && e[g + 1] !== " ";
  }
  return !u && !f ? m && !s && !a(e) ? wf : n === Ai ? wr : Ts : r > 9 && wo(e) ? wr : s ? n === Ai ? wr : Ts : f ? vf : kf;
}
p(_f, "chooseScalarStyle");
function Sf(e, t, r, i, a) {
  e.dump = (function() {
    if (t.length === 0)
      return e.quotingType === Ai ? '""' : "''";
    if (!e.noCompatMode && (cw.indexOf(t) !== -1 || hw.test(t)))
      return e.quotingType === Ai ? '"' + t + '"' : "'" + t + "'";
    var n = e.indent * Math.max(1, r), s = e.lineWidth === -1 ? -1 : Math.max(Math.min(e.lineWidth, 40), e.lineWidth - n), o = i || e.flowLevel > -1 && r >= e.flowLevel;
    function l(c) {
      return xf(e, c);
    }
    switch (p(l, "testAmbiguity"), _f(
      t,
      o,
      e.indent,
      s,
      l,
      e.quotingType,
      e.forceQuotes && !i,
      a
    )) {
      case wf:
        return t;
      case Ts:
        return "'" + t.replace(/'/g, "''") + "'";
      case kf:
        return "|" + Bs(t, e.indent) + As(vs(t, n));
      case vf:
        return ">" + Bs(t, e.indent) + As(vs(Tf(t, s), n));
      case wr:
        return '"' + Bf(t) + '"';
      default:
        throw new Xt("impossible error: invalid scalar style");
    }
  })();
}
p(Sf, "writeScalar");
function Bs(e, t) {
  var r = wo(e) ? String(t) : "", i = e[e.length - 1] === `
`, a = i && (e[e.length - 2] === `
` || e === `
`), n = a ? "+" : i ? "" : "-";
  return r + n + `
`;
}
p(Bs, "blockHeader");
function As(e) {
  return e[e.length - 1] === `
` ? e.slice(0, -1) : e;
}
p(As, "dropEndingNewline");
function Tf(e, t) {
  for (var r = /(\n+)([^\n]*)/g, i = (function() {
    var c = e.indexOf(`
`);
    return c = c !== -1 ? c : e.length, r.lastIndex = c, Ls(e.slice(0, c), t);
  })(), a = e[0] === `
` || e[0] === " ", n, s; s = r.exec(e); ) {
    var o = s[1], l = s[2];
    n = l[0] === " ", i += o + (!a && !n && l !== "" ? `
` : "") + Ls(l, t), a = n;
  }
  return i;
}
p(Tf, "foldString");
function Ls(e, t) {
  if (e === "" || e[0] === " ") return e;
  for (var r = / [^ ]/g, i, a = 0, n, s = 0, o = 0, l = ""; i = r.exec(e); )
    o = i.index, o - a > t && (n = s > a ? s : o, l += `
` + e.slice(a, n), a = n + 1), s = o;
  return l += `
`, e.length - a > t && s > a ? l += e.slice(a, s) + `
` + e.slice(s + 1) : l += e.slice(a), l.slice(1);
}
p(Ls, "foldLine");
function Bf(e) {
  for (var t = "", r = 0, i, a = 0; a < e.length; r >= 65536 ? a += 2 : a++)
    r = vr(e, a), i = It[r], !i && zr(r) ? (t += e[a], r >= 65536 && (t += e[a + 1])) : t += i || mf(r);
  return t;
}
p(Bf, "escapeString");
function Af(e, t, r) {
  var i = "", a = e.tag, n, s, o;
  for (n = 0, s = r.length; n < s; n += 1)
    o = r[n], e.replacer && (o = e.replacer.call(r, String(n), o)), (be(e, t, o, !1, !1) || typeof o > "u" && be(e, t, null, !1, !1)) && (i !== "" && (i += "," + (e.condenseFlow ? "" : " ")), i += e.dump);
  e.tag = a, e.dump = "[" + i + "]";
}
p(Af, "writeFlowSequence");
function Ms(e, t, r, i) {
  var a = "", n = e.tag, s, o, l;
  for (s = 0, o = r.length; s < o; s += 1)
    l = r[s], e.replacer && (l = e.replacer.call(r, String(s), l)), (be(e, t + 1, l, !0, !0, !1, !0) || typeof l > "u" && be(e, t + 1, null, !0, !0, !1, !0)) && ((!i || a !== "") && (a += Pa(e, t)), e.dump && Bi === e.dump.charCodeAt(0) ? a += "-" : a += "- ", a += e.dump);
  e.tag = n, e.dump = a || "[]";
}
p(Ms, "writeBlockSequence");
function Lf(e, t, r) {
  var i = "", a = e.tag, n = Object.keys(r), s, o, l, c, h;
  for (s = 0, o = n.length; s < o; s += 1)
    h = "", i !== "" && (h += ", "), e.condenseFlow && (h += '"'), l = n[s], c = r[l], e.replacer && (c = e.replacer.call(r, l, c)), be(e, t, l, !1, !1) && (e.dump.length > 1024 && (h += "? "), h += e.dump + (e.condenseFlow ? '"' : "") + ":" + (e.condenseFlow ? "" : " "), be(e, t, c, !1, !1) && (h += e.dump, i += h));
  e.tag = a, e.dump = "{" + i + "}";
}
p(Lf, "writeFlowMapping");
function Mf(e, t, r, i) {
  var a = "", n = e.tag, s = Object.keys(r), o, l, c, h, u, f;
  if (e.sortKeys === !0)
    s.sort();
  else if (typeof e.sortKeys == "function")
    s.sort(e.sortKeys);
  else if (e.sortKeys)
    throw new Xt("sortKeys must be a boolean or a function");
  for (o = 0, l = s.length; o < l; o += 1)
    f = "", (!i || a !== "") && (f += Pa(e, t)), c = s[o], h = r[c], e.replacer && (h = e.replacer.call(r, c, h)), be(e, t + 1, c, !0, !0, !0) && (u = e.tag !== null && e.tag !== "?" || e.dump && e.dump.length > 1024, u && (e.dump && Bi === e.dump.charCodeAt(0) ? f += "?" : f += "? "), f += e.dump, u && (f += Pa(e, t)), be(e, t + 1, h, !0, u) && (e.dump && Bi === e.dump.charCodeAt(0) ? f += ":" : f += ": ", f += e.dump, a += f));
  e.tag = n, e.dump = a || "{}";
}
p(Mf, "writeBlockMapping");
function Es(e, t, r) {
  var i, a, n, s, o, l;
  for (a = r ? e.explicitTypes : e.implicitTypes, n = 0, s = a.length; n < s; n += 1)
    if (o = a[n], (o.instanceOf || o.predicate) && (!o.instanceOf || typeof t == "object" && t instanceof o.instanceOf) && (!o.predicate || o.predicate(t))) {
      if (r ? o.multi && o.representName ? e.tag = o.representName(t) : e.tag = o.tag : e.tag = "?", o.represent) {
        if (l = e.styleMap[o.tag] || o.defaultStyle, lf.call(o.represent) === "[object Function]")
          i = o.represent(t, l);
        else if (cf.call(o.represent, l))
          i = o.represent[l](t, l);
        else
          throw new Xt("!<" + o.tag + '> tag resolver accepts not "' + l + '" style');
        e.dump = i;
      }
      return !0;
    }
  return !1;
}
p(Es, "detectType");
function be(e, t, r, i, a, n, s) {
  e.tag = null, e.dump = r, Es(e, r, !1) || Es(e, r, !0);
  var o = lf.call(e.dump), l = i, c;
  i && (i = e.flowLevel < 0 || e.flowLevel > t);
  var h = o === "[object Object]" || o === "[object Array]", u, f;
  if (h && (u = e.duplicates.indexOf(r), f = u !== -1), (e.tag !== null && e.tag !== "?" || f || e.indent !== 2 && t > 0) && (a = !1), f && e.usedDuplicates[u])
    e.dump = "*ref_" + u;
  else {
    if (h && f && !e.usedDuplicates[u] && (e.usedDuplicates[u] = !0), o === "[object Object]")
      i && Object.keys(e.dump).length !== 0 ? (Mf(e, t, e.dump, a), f && (e.dump = "&ref_" + u + e.dump)) : (Lf(e, t, e.dump), f && (e.dump = "&ref_" + u + " " + e.dump));
    else if (o === "[object Array]")
      i && e.dump.length !== 0 ? (e.noArrayIndent && !s && t > 0 ? Ms(e, t - 1, e.dump, a) : Ms(e, t, e.dump, a), f && (e.dump = "&ref_" + u + e.dump)) : (Af(e, t, e.dump), f && (e.dump = "&ref_" + u + " " + e.dump));
    else if (o === "[object String]")
      e.tag !== "?" && Sf(e, e.dump, t, n, l);
    else {
      if (o === "[object Undefined]")
        return !1;
      if (e.skipInvalid) return !1;
      throw new Xt("unacceptable kind of an object to dump " + o);
    }
    e.tag !== null && e.tag !== "?" && (c = encodeURI(
      e.tag[0] === "!" ? e.tag.slice(1) : e.tag
    ).replace(/!/g, "%21"), e.tag[0] === "!" ? c = "!" + c : c.slice(0, 18) === "tag:yaml.org,2002:" ? c = "!!" + c.slice(18) : c = "!<" + c + ">", e.dump = c + " " + e.dump);
  }
  return !0;
}
p(be, "writeNode");
function Ef(e, t) {
  var r = [], i = [], a, n;
  for (Na(e, r, i), a = 0, n = i.length; a < n; a += 1)
    t.duplicates.push(r[i[a]]);
  t.usedDuplicates = new Array(n);
}
p(Ef, "getDuplicateReferences");
function Na(e, t, r) {
  var i, a, n;
  if (e !== null && typeof e == "object")
    if (a = t.indexOf(e), a !== -1)
      r.indexOf(a) === -1 && r.push(a);
    else if (t.push(e), Array.isArray(e))
      for (a = 0, n = e.length; a < n; a += 1)
        Na(e[a], t, r);
    else
      for (i = Object.keys(e), a = 0, n = i.length; a < n; a += 1)
        Na(e[i[a]], t, r);
}
p(Na, "inspectNode");
function fw(e, t) {
  t = t || {};
  var r = new yf(t);
  r.noRefs || Ef(e, r);
  var i = e;
  return r.replacer && (i = r.replacer.call({ "": i }, "", i)), be(r, 0, i, !0, !0) ? r.dump + `
` : "";
}
p(fw, "dump$1");
function dw(e, t) {
  return function() {
    throw new Error("Function yaml." + e + " is removed in js-yaml 4. Use yaml." + t + " instead, which is now safe by default.");
  };
}
p(dw, "renamed");
var pw = wu, gw = UC.load;
var Ft = {
  aggregation: 17.25,
  extension: 17.25,
  composition: 17.25,
  dependency: 6,
  lollipop: 13.5,
  arrow_point: 4
  //arrow_cross: 24,
}, ec = {
  arrow_point: 9,
  arrow_cross: 12.5,
  arrow_circle: 12.5
};
function fi(e, t) {
  if (e === void 0 || t === void 0)
    return { angle: 0, deltaX: 0, deltaY: 0 };
  e = mt(e), t = mt(t);
  const [r, i] = [e.x, e.y], [a, n] = [t.x, t.y], s = a - r, o = n - i;
  return { angle: Math.atan(o / s), deltaX: s, deltaY: o };
}
p(fi, "calculateDeltaAndAngle");
var mt = /* @__PURE__ */ p((e) => Array.isArray(e) ? { x: e[0], y: e[1] } : e, "pointTransformer"), mw = /* @__PURE__ */ p((e) => ({
  x: /* @__PURE__ */ p(function(t, r, i) {
    let a = 0;
    const n = mt(i[0]).x < mt(i[i.length - 1]).x ? "left" : "right";
    if (r === 0 && Object.hasOwn(Ft, e.arrowTypeStart)) {
      const { angle: d, deltaX: g } = fi(i[0], i[1]);
      a = Ft[e.arrowTypeStart] * Math.cos(d) * (g >= 0 ? 1 : -1);
    } else if (r === i.length - 1 && Object.hasOwn(Ft, e.arrowTypeEnd)) {
      const { angle: d, deltaX: g } = fi(
        i[i.length - 1],
        i[i.length - 2]
      );
      a = Ft[e.arrowTypeEnd] * Math.cos(d) * (g >= 0 ? 1 : -1);
    }
    const s = Math.abs(
      mt(t).x - mt(i[i.length - 1]).x
    ), o = Math.abs(
      mt(t).y - mt(i[i.length - 1]).y
    ), l = Math.abs(mt(t).x - mt(i[0]).x), c = Math.abs(mt(t).y - mt(i[0]).y), h = Ft[e.arrowTypeStart], u = Ft[e.arrowTypeEnd], f = 1;
    if (s < u && s > 0 && o < u) {
      let d = u + f - s;
      d *= n === "right" ? -1 : 1, a -= d;
    }
    if (l < h && l > 0 && c < h) {
      let d = h + f - l;
      d *= n === "right" ? -1 : 1, a += d;
    }
    return mt(t).x + a;
  }, "x"),
  y: /* @__PURE__ */ p(function(t, r, i) {
    let a = 0;
    const n = mt(i[0]).y < mt(i[i.length - 1]).y ? "down" : "up";
    if (r === 0 && Object.hasOwn(Ft, e.arrowTypeStart)) {
      const { angle: d, deltaY: g } = fi(i[0], i[1]);
      a = Ft[e.arrowTypeStart] * Math.abs(Math.sin(d)) * (g >= 0 ? 1 : -1);
    } else if (r === i.length - 1 && Object.hasOwn(Ft, e.arrowTypeEnd)) {
      const { angle: d, deltaY: g } = fi(
        i[i.length - 1],
        i[i.length - 2]
      );
      a = Ft[e.arrowTypeEnd] * Math.abs(Math.sin(d)) * (g >= 0 ? 1 : -1);
    }
    const s = Math.abs(
      mt(t).y - mt(i[i.length - 1]).y
    ), o = Math.abs(
      mt(t).x - mt(i[i.length - 1]).x
    ), l = Math.abs(mt(t).y - mt(i[0]).y), c = Math.abs(mt(t).x - mt(i[0]).x), h = Ft[e.arrowTypeStart], u = Ft[e.arrowTypeEnd], f = 1;
    if (s < u && s > 0 && o < u) {
      let d = u + f - s;
      d *= n === "up" ? -1 : 1, a -= d;
    }
    if (l < h && l > 0 && c < h) {
      let d = h + f - l;
      d *= n === "up" ? -1 : 1, a += d;
    }
    return mt(t).y + a;
  }, "y")
}), "getLineFunctionsWithOffset"), ko = /* @__PURE__ */ p(({
  flowchart: e
}) => {
  const t = e?.subGraphTitleMargin?.top ?? 0, r = e?.subGraphTitleMargin?.bottom ?? 0, i = t + r;
  return {
    subGraphTitleTopMargin: t,
    subGraphTitleBottomMargin: r,
    subGraphTitleTotalMargin: i
  };
}, "getSubGraphTitleMargins"), yw = /* @__PURE__ */ p((e) => {
  const { handDrawnSeed: t } = ft();
  return {
    fill: e,
    hachureAngle: 120,
    // angle of hachure,
    hachureGap: 4,
    fillWeight: 2,
    roughness: 0.7,
    stroke: e,
    seed: t
  };
}, "solidStateFill"), Ur = /* @__PURE__ */ p((e) => {
  const t = xw([
    ...e.cssCompiledStyles || [],
    ...e.cssStyles || [],
    ...e.labelStyle || []
  ]);
  return { stylesMap: t, stylesArray: [...t] };
}, "compileStyles"), xw = /* @__PURE__ */ p((e) => {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((r) => {
    const [i, a] = r.split(":");
    t.set(i.trim(), a?.trim());
  }), t;
}, "styles2Map"), $f = /* @__PURE__ */ p((e) => e === "color" || e === "font-size" || e === "font-family" || e === "font-weight" || e === "font-style" || e === "text-decoration" || e === "text-align" || e === "text-transform" || e === "line-height" || e === "letter-spacing" || e === "word-spacing" || e === "text-shadow" || e === "text-overflow" || e === "white-space" || e === "word-wrap" || e === "word-break" || e === "overflow-wrap" || e === "hyphens", "isLabelStyle"), U = /* @__PURE__ */ p((e) => {
  const { stylesArray: t } = Ur(e), r = [], i = [], a = [], n = [];
  return t.forEach((s) => {
    const o = s[0];
    $f(o) ? r.push(s.join(":") + " !important") : (i.push(s.join(":") + " !important"), o.includes("stroke") && a.push(s.join(":") + " !important"), o === "fill" && n.push(s.join(":") + " !important"));
  }), {
    labelStyles: r.join(";"),
    nodeStyles: i.join(";"),
    stylesArray: t,
    borderStyles: a,
    backgroundStyles: n
  };
}, "styles2String"), Y = /* @__PURE__ */ p((e, t) => {
  const { themeVariables: r, handDrawnSeed: i } = ft(), { nodeBorder: a, mainBkg: n } = r, { stylesMap: s } = Ur(e);
  return Object.assign(
    {
      roughness: 0.7,
      fill: s.get("fill") || n,
      fillStyle: "hachure",
      // solid fill
      fillWeight: 4,
      hachureGap: 5.2,
      stroke: s.get("stroke") || a,
      seed: i,
      strokeWidth: s.get("stroke-width")?.replace("px", "") || 1.3,
      fillLineDash: [0, 0],
      strokeLineDash: bw(s.get("stroke-dasharray"))
    },
    t
  );
}, "userNodeOverrides"), bw = /* @__PURE__ */ p((e) => {
  if (!e)
    return [0, 0];
  const t = e.trim().split(/\s+/).map(Number);
  if (t.length === 1) {
    const a = isNaN(t[0]) ? 0 : t[0];
    return [a, a];
  }
  const r = isNaN(t[0]) ? 0 : t[0], i = isNaN(t[1]) ? 0 : t[1];
  return [r, i];
}, "getStrokeDashArray"), ii = {}, _t = {}, rc;
function Cw() {
  return rc || (rc = 1, Object.defineProperty(_t, "__esModule", { value: !0 }), _t.BLANK_URL = _t.relativeFirstCharacters = _t.whitespaceEscapeCharsRegex = _t.urlSchemeRegex = _t.ctrlCharactersRegex = _t.htmlCtrlEntityRegex = _t.htmlEntitiesRegex = _t.invalidProtocolRegex = void 0, _t.invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im, _t.htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g, _t.htmlCtrlEntityRegex = /&(newline|tab);/gi, _t.ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim, _t.urlSchemeRegex = /^.+(:|&colon;)/gim, _t.whitespaceEscapeCharsRegex = /(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g, _t.relativeFirstCharacters = [".", "/"], _t.BLANK_URL = "about:blank"), _t;
}
var ic;
function ww() {
  if (ic) return ii;
  ic = 1, Object.defineProperty(ii, "__esModule", { value: !0 }), ii.sanitizeUrl = void 0;
  var e = Cw();
  function t(s) {
    return e.relativeFirstCharacters.indexOf(s[0]) > -1;
  }
  function r(s) {
    var o = s.replace(e.ctrlCharactersRegex, "");
    return o.replace(e.htmlEntitiesRegex, function(l, c) {
      return String.fromCharCode(c);
    });
  }
  function i(s) {
    return URL.canParse(s);
  }
  function a(s) {
    try {
      return decodeURIComponent(s);
    } catch {
      return s;
    }
  }
  function n(s) {
    if (!s)
      return e.BLANK_URL;
    var o, l = a(s.trim());
    do
      l = r(l).replace(e.htmlCtrlEntityRegex, "").replace(e.ctrlCharactersRegex, "").replace(e.whitespaceEscapeCharsRegex, "").trim(), l = a(l), o = l.match(e.ctrlCharactersRegex) || l.match(e.htmlEntitiesRegex) || l.match(e.htmlCtrlEntityRegex) || l.match(e.whitespaceEscapeCharsRegex);
    while (o && o.length > 0);
    var c = l;
    if (!c)
      return e.BLANK_URL;
    if (t(c))
      return c;
    var h = c.trimStart(), u = h.match(e.urlSchemeRegex);
    if (!u)
      return c;
    var f = u[0].toLowerCase().trim();
    if (e.invalidProtocolRegex.test(f))
      return e.BLANK_URL;
    var d = h.replace(/\\/g, "/");
    if (f === "mailto:" || f.includes("://"))
      return d;
    if (f === "http:" || f === "https:") {
      if (!i(d))
        return e.BLANK_URL;
      var g = new URL(d);
      return g.protocol = g.protocol.toLowerCase(), g.hostname = g.hostname.toLowerCase(), g.toString();
    }
    return d;
  }
  return ii.sanitizeUrl = n, ii;
}
var kw = ww(), vw = "​", _w = {
  curveBasis: na,
  curveBasisClosed: Kg,
  curveBasisOpen: Zg,
  curveBumpX: Wc,
  curveBumpY: zc,
  curveBundle: Jg,
  curveCardinalClosed: tm,
  curveCardinalOpen: em,
  curveCardinal: Hc,
  curveCatmullRomClosed: rm,
  curveCatmullRomOpen: im,
  curveCatmullRom: Yc,
  curveLinear: Kn,
  curveLinearClosed: Vg,
  curveMonotoneX: Nc,
  curveMonotoneY: Pc,
  curveNatural: Ic,
  curveStep: Rc,
  curveStepAfter: Oc,
  curveStepBefore: Dc
}, Sw = /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, Tw = /* @__PURE__ */ p(function(e, t) {
  const r = Ff(e, /(?:init\b)|(?:initialize\b)/);
  let i = {};
  if (Array.isArray(r)) {
    const s = r.map((o) => o.args);
    Sa(s), i = St(i, [...s]);
  } else
    i = r.args;
  if (!i)
    return;
  let a = ro(e, t);
  const n = "config";
  return i[n] !== void 0 && (a === "flowchart-v2" && (a = "flowchart"), i[a] = i[n], delete i[n]), i;
}, "detectInit"), Ff = /* @__PURE__ */ p(function(e, t = null) {
  try {
    const r = new RegExp(
      `[%]{2}(?![{]${Sw.source})(?=[}][%]{2}).*
`,
      "ig"
    );
    e = e.trim().replace(r, "").replace(/'/gm, '"'), F.debug(
      `Detecting diagram directive${t !== null ? " type:" + t : ""} based on the text:${e}`
    );
    let i;
    const a = [];
    for (; (i = Ci.exec(e)) !== null; )
      if (i.index === Ci.lastIndex && Ci.lastIndex++, i && !t || t && i[1]?.match(t) || t && i[2]?.match(t)) {
        const n = i[1] ? i[1] : i[2], s = i[3] ? i[3].trim() : i[4] ? JSON.parse(i[4].trim()) : null;
        a.push({ type: n, args: s });
      }
    return a.length === 0 ? { type: e, args: null } : a.length === 1 ? a[0] : a;
  } catch (r) {
    return F.error(
      `ERROR: ${r.message} - Unable to parse directive type: '${t}' based on the text: '${e}'`
    ), { type: void 0, args: null };
  }
}, "detectDirective"), Bw = /* @__PURE__ */ p(function(e) {
  return e.replace(Ci, "");
}, "removeDirectives"), Aw = /* @__PURE__ */ p(function(e, t) {
  for (const [r, i] of t.entries())
    if (i.match(e))
      return r;
  return -1;
}, "isSubstringInArray");
function vo(e, t) {
  if (!e)
    return t;
  const r = `curve${e.charAt(0).toUpperCase() + e.slice(1)}`;
  return _w[r] ?? t;
}
p(vo, "interpolateToCurve");
function Df(e, t) {
  const r = e.trim();
  if (r)
    return t.securityLevel !== "loose" ? kw.sanitizeUrl(r) : r;
}
p(Df, "formatUrl");
var Lw = /* @__PURE__ */ p((e, ...t) => {
  const r = e.split("."), i = r.length - 1, a = r[i];
  let n = window;
  for (let s = 0; s < i; s++)
    if (n = n[r[s]], !n) {
      F.error(`Function name: ${e} not found in window`);
      return;
    }
  n[a](...t);
}, "runFunc");
function _o(e, t) {
  return !e || !t ? 0 : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
p(_o, "distance");
function Of(e) {
  let t, r = 0;
  e.forEach((a) => {
    r += _o(a, t), t = a;
  });
  const i = r / 2;
  return So(e, i);
}
p(Of, "traverseEdge");
function Rf(e) {
  return e.length === 1 ? e[0] : Of(e);
}
p(Rf, "calcLabelPosition");
var ac = /* @__PURE__ */ p((e, t = 2) => {
  const r = Math.pow(10, t);
  return Math.round(e * r) / r;
}, "roundNumber"), So = /* @__PURE__ */ p((e, t) => {
  let r, i = t;
  for (const a of e) {
    if (r) {
      const n = _o(a, r);
      if (n === 0)
        return r;
      if (n < i)
        i -= n;
      else {
        const s = i / n;
        if (s <= 0)
          return r;
        if (s >= 1)
          return { x: a.x, y: a.y };
        if (s > 0 && s < 1)
          return {
            x: ac((1 - s) * r.x + s * a.x, 5),
            y: ac((1 - s) * r.y + s * a.y, 5)
          };
      }
    }
    r = a;
  }
  throw new Error("Could not find a suitable point for the given distance");
}, "calculatePoint"), Mw = /* @__PURE__ */ p((e, t, r) => {
  F.info(`our points ${JSON.stringify(t)}`), t[0] !== r && (t = t.reverse());
  const a = So(t, 25), n = e ? 10 : 5, s = Math.atan2(t[0].y - a.y, t[0].x - a.x), o = { x: 0, y: 0 };
  return o.x = Math.sin(s) * n + (t[0].x + a.x) / 2, o.y = -Math.cos(s) * n + (t[0].y + a.y) / 2, o;
}, "calcCardinalityPosition");
function If(e, t, r) {
  const i = structuredClone(r);
  F.info("our points", i), t !== "start_left" && t !== "start_right" && i.reverse();
  const a = 25 + e, n = So(i, a), s = 10 + e * 0.5, o = Math.atan2(i[0].y - n.y, i[0].x - n.x), l = { x: 0, y: 0 };
  return t === "start_left" ? (l.x = Math.sin(o + Math.PI) * s + (i[0].x + n.x) / 2, l.y = -Math.cos(o + Math.PI) * s + (i[0].y + n.y) / 2) : t === "end_right" ? (l.x = Math.sin(o - Math.PI) * s + (i[0].x + n.x) / 2 - 5, l.y = -Math.cos(o - Math.PI) * s + (i[0].y + n.y) / 2 - 5) : t === "end_left" ? (l.x = Math.sin(o) * s + (i[0].x + n.x) / 2 - 5, l.y = -Math.cos(o) * s + (i[0].y + n.y) / 2 - 5) : (l.x = Math.sin(o) * s + (i[0].x + n.x) / 2, l.y = -Math.cos(o) * s + (i[0].y + n.y) / 2), l;
}
p(If, "calcTerminalLabelPosition");
function Pf(e) {
  let t = "", r = "";
  for (const i of e)
    i !== void 0 && (i.startsWith("color:") || i.startsWith("text-align:") ? r = r + i + ";" : t = t + i + ";");
  return { style: t, labelStyle: r };
}
p(Pf, "getStylesFromArray");
var nc = 0, Ew = /* @__PURE__ */ p(() => (nc++, "id-" + Math.random().toString(36).substr(2, 12) + "-" + nc), "generateId");
function Nf(e) {
  let t = "";
  const r = "0123456789abcdef", i = r.length;
  for (let a = 0; a < e; a++)
    t += r.charAt(Math.floor(Math.random() * i));
  return t;
}
p(Nf, "makeRandomHex");
var $w = /* @__PURE__ */ p((e) => Nf(e.length), "random"), Fw = /* @__PURE__ */ p(function() {
  return {
    x: 0,
    y: 0,
    fill: void 0,
    anchor: "start",
    style: "#666",
    width: 100,
    height: 100,
    textMargin: 0,
    rx: 0,
    ry: 0,
    valign: void 0,
    text: ""
  };
}, "getTextObj"), Dw = /* @__PURE__ */ p(function(e, t) {
  const r = t.text.replace(Yr.lineBreakRegex, " "), [, i] = fn(t.fontSize), a = e.append("text");
  a.attr("x", t.x), a.attr("y", t.y), a.style("text-anchor", t.anchor), a.style("font-family", t.fontFamily), a.style("font-size", i), a.style("font-weight", t.fontWeight), a.attr("fill", t.fill), t.class !== void 0 && a.attr("class", t.class);
  const n = a.append("tspan");
  return n.attr("x", t.x + t.textMargin * 2), n.attr("fill", t.fill), n.text(r), a;
}, "drawSimpleText"), Ow = Di(
  (e, t, r) => {
    if (!e || (r = Object.assign(
      { fontSize: 12, fontWeight: 400, fontFamily: "Arial", joinWith: "<br/>" },
      r
    ), Yr.lineBreakRegex.test(e)))
      return e;
    const i = e.split(" ").filter(Boolean), a = [];
    let n = "";
    return i.forEach((s, o) => {
      const l = Ee(`${s} `, r), c = Ee(n, r);
      if (l > t) {
        const { hyphenatedStrings: f, remainingWord: d } = Rw(s, t, "-", r);
        a.push(n, ...f), n = d;
      } else c + l >= t ? (a.push(n), n = s) : n = [n, s].filter(Boolean).join(" ");
      o + 1 === i.length && a.push(n);
    }), a.filter((s) => s !== "").join(r.joinWith);
  },
  (e, t, r) => `${e}${t}${r.fontSize}${r.fontWeight}${r.fontFamily}${r.joinWith}`
), Rw = Di(
  (e, t, r = "-", i) => {
    i = Object.assign(
      { fontSize: 12, fontWeight: 400, fontFamily: "Arial", margin: 0 },
      i
    );
    const a = [...e], n = [];
    let s = "";
    return a.forEach((o, l) => {
      const c = `${s}${o}`;
      if (Ee(c, i) >= t) {
        const u = l + 1, f = a.length === u, d = `${c}${r}`;
        n.push(f ? c : d), s = "";
      } else
        s = c;
    }), { hyphenatedStrings: n, remainingWord: s };
  },
  (e, t, r = "-", i) => `${e}${t}${r}${i.fontSize}${i.fontWeight}${i.fontFamily}`
);
function zf(e, t) {
  return To(e, t).height;
}
p(zf, "calculateTextHeight");
function Ee(e, t) {
  return To(e, t).width;
}
p(Ee, "calculateTextWidth");
var To = Di(
  (e, t) => {
    const { fontSize: r = 12, fontFamily: i = "Arial", fontWeight: a = 400 } = t;
    if (!e)
      return { width: 0, height: 0 };
    const [, n] = fn(r), s = ["sans-serif", i], o = e.split(Yr.lineBreakRegex), l = [], c = ht("body");
    if (!c.remove)
      return { width: 0, height: 0, lineHeight: 0 };
    const h = c.append("svg");
    for (const f of s) {
      let d = 0;
      const g = { width: 0, height: 0, lineHeight: 0 };
      for (const m of o) {
        const y = Fw();
        y.text = m || vw;
        const x = Dw(h, y).style("font-size", n).style("font-weight", a).style("font-family", f), b = (x._groups || x)[0][0].getBBox();
        if (b.width === 0 && b.height === 0)
          throw new Error("svg element not in render tree");
        g.width = Math.round(Math.max(g.width, b.width)), d = Math.round(b.height), g.height += d, g.lineHeight = Math.round(Math.max(g.lineHeight, d));
      }
      l.push(g);
    }
    h.remove();
    const u = isNaN(l[1].height) || isNaN(l[1].width) || isNaN(l[1].lineHeight) || l[0].height > l[1].height && l[0].width > l[1].width && l[0].lineHeight > l[1].lineHeight ? 0 : 1;
    return l[u];
  },
  (e, t) => `${e}${t.fontSize}${t.fontWeight}${t.fontFamily}`
), Fr, Iw = (Fr = class {
  constructor(t = !1, r) {
    this.count = 0, this.count = r ? r.length : 0, this.next = t ? () => this.count++ : () => Date.now();
  }
}, p(Fr, "InitIDGenerator"), Fr), Qi, Pw = /* @__PURE__ */ p(function(e) {
  return Qi = Qi || document.createElement("div"), e = escape(e).replace(/%26/g, "&").replace(/%23/g, "#").replace(/%3B/g, ";"), Qi.innerHTML = e, unescape(Qi.textContent);
}, "entityDecode");
function Bo(e) {
  return "str" in e;
}
p(Bo, "isDetailedError");
var Nw = /* @__PURE__ */ p((e, t, r, i) => {
  if (!i)
    return;
  const a = e.node()?.getBBox();
  a && e.append("text").text(i).attr("text-anchor", "middle").attr("x", a.x + a.width / 2).attr("y", -r).attr("class", t);
}, "insertTitle"), fn = /* @__PURE__ */ p((e) => {
  if (typeof e == "number")
    return [e, e + "px"];
  const t = parseInt(e ?? "", 10);
  return Number.isNaN(t) ? [void 0, void 0] : e === String(t) ? [t, e + "px"] : [t, e];
}, "parseFontSize");
function Ao(e, t) {
  return z0({}, e, t);
}
p(Ao, "cleanAndMerge");
var oe = {
  assignWithDepth: St,
  wrapLabel: Ow,
  calculateTextHeight: zf,
  calculateTextWidth: Ee,
  calculateTextDimensions: To,
  cleanAndMerge: Ao,
  detectInit: Tw,
  detectDirective: Ff,
  isSubstringInArray: Aw,
  interpolateToCurve: vo,
  calcLabelPosition: Rf,
  calcCardinalityPosition: Mw,
  calcTerminalLabelPosition: If,
  formatUrl: Df,
  getStylesFromArray: Pf,
  generateId: Ew,
  random: $w,
  runFunc: Lw,
  entityDecode: Pw,
  insertTitle: Nw,
  isLabelCoordinateInPath: Wf,
  parseFontSize: fn,
  InitIDGenerator: Iw
}, zw = /* @__PURE__ */ p(function(e) {
  let t = e;
  return t = t.replace(/style.*:\S*#.*;/g, function(r) {
    return r.substring(0, r.length - 1);
  }), t = t.replace(/classDef.*:\S*#.*;/g, function(r) {
    return r.substring(0, r.length - 1);
  }), t = t.replace(/#\w+;/g, function(r) {
    const i = r.substring(1, r.length - 1);
    return /^\+?\d+$/.test(i) ? "ﬂ°°" + i + "¶ß" : "ﬂ°" + i + "¶ß";
  }), t;
}, "encodeEntities"), dr = /* @__PURE__ */ p(function(e) {
  return e.replace(/ﬂ°°/g, "&#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
}, "decodeEntities"), pB = /* @__PURE__ */ p((e, t, {
  counter: r = 0,
  prefix: i,
  suffix: a
}, n) => n || `${i ? `${i}_` : ""}${e}_${t}_${r}${a ? `_${a}` : ""}`, "getEdgeId");
function Rt(e) {
  return e ?? null;
}
p(Rt, "handleUndefinedAttr");
function Wf(e, t) {
  const r = Math.round(e.x), i = Math.round(e.y), a = t.replace(
    /(\d+\.\d+)/g,
    (n) => Math.round(parseFloat(n)).toString()
  );
  return a.includes(r.toString()) || a.includes(i.toString());
}
p(Wf, "isLabelCoordinateInPath");
const Ww = Object.freeze({
  left: 0,
  top: 0,
  width: 16,
  height: 16
}), za = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), qf = Object.freeze({
  ...Ww,
  ...za
}), qw = Object.freeze({
  ...qf,
  body: "",
  hidden: !1
}), Hw = Object.freeze({
  width: null,
  height: null
}), jw = Object.freeze({
  ...Hw,
  ...za
}), Yw = (e, t, r, i = "") => {
  const a = e.split(":");
  if (e.slice(0, 1) === "@") {
    if (a.length < 2 || a.length > 3) return null;
    i = a.shift().slice(1);
  }
  if (a.length > 3 || !a.length) return null;
  if (a.length > 1) {
    const o = a.pop(), l = a.pop(), c = {
      provider: a.length > 0 ? a[0] : i,
      prefix: l,
      name: o
    };
    return qn(c) ? c : null;
  }
  const n = a[0], s = n.split("-");
  if (s.length > 1) {
    const o = {
      provider: i,
      prefix: s.shift(),
      name: s.join("-")
    };
    return qn(o) ? o : null;
  }
  if (r && i === "") {
    const o = {
      provider: i,
      prefix: "",
      name: n
    };
    return qn(o, r) ? o : null;
  }
  return null;
}, qn = (e, t) => e ? !!((t && e.prefix === "" || e.prefix) && e.name) : !1;
function Uw(e, t) {
  const r = {};
  !e.hFlip != !t.hFlip && (r.hFlip = !0), !e.vFlip != !t.vFlip && (r.vFlip = !0);
  const i = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return i && (r.rotate = i), r;
}
function sc(e, t) {
  const r = Uw(e, t);
  for (const i in qw) i in za ? i in e && !(i in r) && (r[i] = za[i]) : i in t ? r[i] = t[i] : i in e && (r[i] = e[i]);
  return r;
}
function Gw(e, t) {
  const r = e.icons, i = e.aliases || /* @__PURE__ */ Object.create(null), a = /* @__PURE__ */ Object.create(null);
  function n(s) {
    if (r[s]) return a[s] = [];
    if (!(s in a)) {
      a[s] = null;
      const o = i[s] && i[s].parent, l = o && n(o);
      l && (a[s] = [o].concat(l));
    }
    return a[s];
  }
  return (t || Object.keys(r).concat(Object.keys(i))).forEach(n), a;
}
function oc(e, t, r) {
  const i = e.icons, a = e.aliases || /* @__PURE__ */ Object.create(null);
  let n = {};
  function s(o) {
    n = sc(i[o] || a[o], n);
  }
  return s(t), r.forEach(s), sc(e, n);
}
function Xw(e, t) {
  if (e.icons[t]) return oc(e, t, []);
  const r = Gw(e, [t])[t];
  return r ? oc(e, t, r) : null;
}
const Vw = /(-?[0-9.]*[0-9]+[0-9.]*)/g, Zw = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function lc(e, t, r) {
  if (t === 1) return e;
  if (r = r || 100, typeof e == "number") return Math.ceil(e * t * r) / r;
  if (typeof e != "string") return e;
  const i = e.split(Vw);
  if (i === null || !i.length) return e;
  const a = [];
  let n = i.shift(), s = Zw.test(n);
  for (; ; ) {
    if (s) {
      const o = parseFloat(n);
      isNaN(o) ? a.push(n) : a.push(Math.ceil(o * t * r) / r);
    } else a.push(n);
    if (n = i.shift(), n === void 0) return a.join("");
    s = !s;
  }
}
function Kw(e, t = "defs") {
  let r = "";
  const i = e.indexOf("<" + t);
  for (; i >= 0; ) {
    const a = e.indexOf(">", i), n = e.indexOf("</" + t);
    if (a === -1 || n === -1) break;
    const s = e.indexOf(">", n);
    if (s === -1) break;
    r += e.slice(a + 1, n).trim(), e = e.slice(0, i).trim() + e.slice(s + 1);
  }
  return {
    defs: r,
    content: e
  };
}
function Qw(e, t) {
  return e ? "<defs>" + e + "</defs>" + t : t;
}
function Jw(e, t, r) {
  const i = Kw(e);
  return Qw(i.defs, t + i.content + r);
}
const tk = (e) => e === "unset" || e === "undefined" || e === "none";
function ek(e, t) {
  const r = {
    ...qf,
    ...e
  }, i = {
    ...jw,
    ...t
  }, a = {
    left: r.left,
    top: r.top,
    width: r.width,
    height: r.height
  };
  let n = r.body;
  [r, i].forEach((m) => {
    const y = [], x = m.hFlip, b = m.vFlip;
    let C = m.rotate;
    x ? b ? C += 2 : (y.push("translate(" + (a.width + a.left).toString() + " " + (0 - a.top).toString() + ")"), y.push("scale(-1 1)"), a.top = a.left = 0) : b && (y.push("translate(" + (0 - a.left).toString() + " " + (a.height + a.top).toString() + ")"), y.push("scale(1 -1)"), a.top = a.left = 0);
    let v;
    switch (C < 0 && (C -= Math.floor(C / 4) * 4), C = C % 4, C) {
      case 1:
        v = a.height / 2 + a.top, y.unshift("rotate(90 " + v.toString() + " " + v.toString() + ")");
        break;
      case 2:
        y.unshift("rotate(180 " + (a.width / 2 + a.left).toString() + " " + (a.height / 2 + a.top).toString() + ")");
        break;
      case 3:
        v = a.width / 2 + a.left, y.unshift("rotate(-90 " + v.toString() + " " + v.toString() + ")");
        break;
    }
    C % 2 === 1 && (a.left !== a.top && (v = a.left, a.left = a.top, a.top = v), a.width !== a.height && (v = a.width, a.width = a.height, a.height = v)), y.length && (n = Jw(n, '<g transform="' + y.join(" ") + '">', "</g>"));
  });
  const s = i.width, o = i.height, l = a.width, c = a.height;
  let h, u;
  s === null ? (u = o === null ? "1em" : o === "auto" ? c : o, h = lc(u, l / c)) : (h = s === "auto" ? l : s, u = o === null ? lc(h, c / l) : o === "auto" ? c : o);
  const f = {}, d = (m, y) => {
    tk(y) || (f[m] = y.toString());
  };
  d("width", h), d("height", u);
  const g = [
    a.left,
    a.top,
    l,
    c
  ];
  return f.viewBox = g.join(" "), {
    attributes: f,
    viewBox: g,
    body: n
  };
}
const rk = /\sid="(\S+)"/g, cc = /* @__PURE__ */ new Map();
function ik(e) {
  e = e.replace(/[0-9]+$/, "") || "a";
  const t = cc.get(e) || 0;
  return cc.set(e, t + 1), t ? `${e}${t}` : e;
}
function ak(e) {
  const t = [];
  let r;
  for (; r = rk.exec(e); ) t.push(r[1]);
  if (!t.length) return e;
  const i = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return t.forEach((a) => {
    const n = ik(a), s = a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(new RegExp('([#;"])(' + s + ')([")]|\\.[a-z])', "g"), "$1" + n + i + "$3");
  }), e = e.replace(new RegExp(i, "g"), ""), e;
}
function nk(e, t) {
  let r = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const i in t) r += " " + i + '="' + t[i] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + r + ">" + e + "</svg>";
}
function Lo() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var pr = Lo();
function Hf(e) {
  pr = e;
}
var ki = { exec: () => null };
function ut(e, t = "") {
  let r = typeof e == "string" ? e : e.source, i = { replace: (a, n) => {
    let s = typeof n == "string" ? n : n.source;
    return s = s.replace(qt.caret, "$1"), r = r.replace(a, s), i;
  }, getRegex: () => new RegExp(r, t) };
  return i;
}
var sk = (() => {
  try {
    return !!new RegExp("(?<=1)(?<!1)");
  } catch {
    return !1;
  }
})(), qt = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] /, listReplaceTask: /^\[[ xX]\] +/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`), htmlBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i") }, ok = /^(?:[ \t]*(?:\n|$))+/, lk = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, ck = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Ni = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, hk = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Mo = /(?:[*+-]|\d{1,9}[.)])/, jf = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, Yf = ut(jf).replace(/bull/g, Mo).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), uk = ut(jf).replace(/bull/g, Mo).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), Eo = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, fk = /^[^\n]+/, $o = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, dk = ut(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", $o).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), pk = ut(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Mo).getRegex(), dn = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Fo = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, gk = ut("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", Fo).replace("tag", dn).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Uf = ut(Eo).replace("hr", Ni).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", dn).getRegex(), mk = ut(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Uf).getRegex(), Do = { blockquote: mk, code: lk, def: dk, fences: ck, heading: hk, hr: Ni, html: gk, lheading: Yf, list: pk, newline: ok, paragraph: Uf, table: ki, text: fk }, hc = ut("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Ni).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", dn).getRegex(), yk = { ...Do, lheading: uk, table: hc, paragraph: ut(Eo).replace("hr", Ni).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", hc).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", dn).getRegex() }, xk = { ...Do, html: ut(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Fo).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: ki, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: ut(Eo).replace("hr", Ni).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Yf).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, bk = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Ck = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Gf = /^( {2,}|\\)\n(?!\s*$)/, wk = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, pn = /[\p{P}\p{S}]/u, Oo = /[\s\p{P}\p{S}]/u, Xf = /[^\s\p{P}\p{S}]/u, kk = ut(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Oo).getRegex(), Vf = /(?!~)[\p{P}\p{S}]/u, vk = /(?!~)[\s\p{P}\p{S}]/u, _k = /(?:[^\s\p{P}\p{S}]|~)/u, Sk = ut(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", sk ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), Zf = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, Tk = ut(Zf, "u").replace(/punct/g, pn).getRegex(), Bk = ut(Zf, "u").replace(/punct/g, Vf).getRegex(), Kf = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Ak = ut(Kf, "gu").replace(/notPunctSpace/g, Xf).replace(/punctSpace/g, Oo).replace(/punct/g, pn).getRegex(), Lk = ut(Kf, "gu").replace(/notPunctSpace/g, _k).replace(/punctSpace/g, vk).replace(/punct/g, Vf).getRegex(), Mk = ut("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Xf).replace(/punctSpace/g, Oo).replace(/punct/g, pn).getRegex(), Ek = ut(/\\(punct)/, "gu").replace(/punct/g, pn).getRegex(), $k = ut(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Fk = ut(Fo).replace("(?:-->|$)", "-->").getRegex(), Dk = ut("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Fk).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Wa = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, Ok = ut(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", Wa).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Qf = ut(/^!?\[(label)\]\[(ref)\]/).replace("label", Wa).replace("ref", $o).getRegex(), Jf = ut(/^!?\[(ref)\](?:\[\])?/).replace("ref", $o).getRegex(), Rk = ut("reflink|nolink(?!\\()", "g").replace("reflink", Qf).replace("nolink", Jf).getRegex(), uc = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, Ro = { _backpedal: ki, anyPunctuation: Ek, autolink: $k, blockSkip: Sk, br: Gf, code: Ck, del: ki, emStrongLDelim: Tk, emStrongRDelimAst: Ak, emStrongRDelimUnd: Mk, escape: bk, link: Ok, nolink: Jf, punctuation: kk, reflink: Qf, reflinkSearch: Rk, tag: Dk, text: wk, url: ki }, Ik = { ...Ro, link: ut(/^!?\[(label)\]\((.*?)\)/).replace("label", Wa).getRegex(), reflink: ut(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Wa).getRegex() }, $s = { ...Ro, emStrongRDelimAst: Lk, emStrongLDelim: Bk, url: ut(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", uc).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: ut(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", uc).getRegex() }, Pk = { ...$s, br: ut(Gf).replace("{2,}", "*").getRegex(), text: ut($s.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, Ji = { normal: Do, gfm: yk, pedantic: xk }, ai = { normal: Ro, gfm: $s, breaks: Pk, pedantic: Ik }, Nk = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, fc = (e) => Nk[e];
function ge(e, t) {
  if (t) {
    if (qt.escapeTest.test(e)) return e.replace(qt.escapeReplace, fc);
  } else if (qt.escapeTestNoEncode.test(e)) return e.replace(qt.escapeReplaceNoEncode, fc);
  return e;
}
function dc(e) {
  try {
    e = encodeURI(e).replace(qt.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function pc(e, t) {
  let r = e.replace(qt.findPipe, (n, s, o) => {
    let l = !1, c = s;
    for (; --c >= 0 && o[c] === "\\"; ) l = !l;
    return l ? "|" : " |";
  }), i = r.split(qt.splitPipe), a = 0;
  if (i[0].trim() || i.shift(), i.length > 0 && !i.at(-1)?.trim() && i.pop(), t) if (i.length > t) i.splice(t);
  else for (; i.length < t; ) i.push("");
  for (; a < i.length; a++) i[a] = i[a].trim().replace(qt.slashPipe, "|");
  return i;
}
function ni(e, t, r) {
  let i = e.length;
  if (i === 0) return "";
  let a = 0;
  for (; a < i && e.charAt(i - a - 1) === t; )
    a++;
  return e.slice(0, i - a);
}
function zk(e, t) {
  if (e.indexOf(t[1]) === -1) return -1;
  let r = 0;
  for (let i = 0; i < e.length; i++) if (e[i] === "\\") i++;
  else if (e[i] === t[0]) r++;
  else if (e[i] === t[1] && (r--, r < 0)) return i;
  return r > 0 ? -2 : -1;
}
function gc(e, t, r, i, a) {
  let n = t.href, s = t.title || null, o = e[1].replace(a.other.outputLinkReplace, "$1");
  i.state.inLink = !0;
  let l = { type: e[0].charAt(0) === "!" ? "image" : "link", raw: r, href: n, title: s, text: o, tokens: i.inlineTokens(o) };
  return i.state.inLink = !1, l;
}
function Wk(e, t, r) {
  let i = e.match(r.other.indentCodeCompensation);
  if (i === null) return t;
  let a = i[1];
  return t.split(`
`).map((n) => {
    let s = n.match(r.other.beginningSpace);
    if (s === null) return n;
    let [o] = s;
    return o.length >= a.length ? n.slice(a.length) : n;
  }).join(`
`);
}
var qa = class {
  options;
  rules;
  lexer;
  constructor(t) {
    this.options = t || pr;
  }
  space(t) {
    let r = this.rules.block.newline.exec(t);
    if (r && r[0].length > 0) return { type: "space", raw: r[0] };
  }
  code(t) {
    let r = this.rules.block.code.exec(t);
    if (r) {
      let i = r[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: r[0], codeBlockStyle: "indented", text: this.options.pedantic ? i : ni(i, `
`) };
    }
  }
  fences(t) {
    let r = this.rules.block.fences.exec(t);
    if (r) {
      let i = r[0], a = Wk(i, r[3] || "", this.rules);
      return { type: "code", raw: i, lang: r[2] ? r[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : r[2], text: a };
    }
  }
  heading(t) {
    let r = this.rules.block.heading.exec(t);
    if (r) {
      let i = r[2].trim();
      if (this.rules.other.endingHash.test(i)) {
        let a = ni(i, "#");
        (this.options.pedantic || !a || this.rules.other.endingSpaceChar.test(a)) && (i = a.trim());
      }
      return { type: "heading", raw: r[0], depth: r[1].length, text: i, tokens: this.lexer.inline(i) };
    }
  }
  hr(t) {
    let r = this.rules.block.hr.exec(t);
    if (r) return { type: "hr", raw: ni(r[0], `
`) };
  }
  blockquote(t) {
    let r = this.rules.block.blockquote.exec(t);
    if (r) {
      let i = ni(r[0], `
`).split(`
`), a = "", n = "", s = [];
      for (; i.length > 0; ) {
        let o = !1, l = [], c;
        for (c = 0; c < i.length; c++) if (this.rules.other.blockquoteStart.test(i[c])) l.push(i[c]), o = !0;
        else if (!o) l.push(i[c]);
        else break;
        i = i.slice(c);
        let h = l.join(`
`), u = h.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        a = a ? `${a}
${h}` : h, n = n ? `${n}
${u}` : u;
        let f = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(u, s, !0), this.lexer.state.top = f, i.length === 0) break;
        let d = s.at(-1);
        if (d?.type === "code") break;
        if (d?.type === "blockquote") {
          let g = d, m = g.raw + `
` + i.join(`
`), y = this.blockquote(m);
          s[s.length - 1] = y, a = a.substring(0, a.length - g.raw.length) + y.raw, n = n.substring(0, n.length - g.text.length) + y.text;
          break;
        } else if (d?.type === "list") {
          let g = d, m = g.raw + `
` + i.join(`
`), y = this.list(m);
          s[s.length - 1] = y, a = a.substring(0, a.length - d.raw.length) + y.raw, n = n.substring(0, n.length - g.raw.length) + y.raw, i = m.substring(s.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: a, tokens: s, text: n };
    }
  }
  list(t) {
    let r = this.rules.block.list.exec(t);
    if (r) {
      let i = r[1].trim(), a = i.length > 1, n = { type: "list", raw: "", ordered: a, start: a ? +i.slice(0, -1) : "", loose: !1, items: [] };
      i = a ? `\\d{1,9}\\${i.slice(-1)}` : `\\${i}`, this.options.pedantic && (i = a ? i : "[*+-]");
      let s = this.rules.other.listItemRegex(i), o = !1;
      for (; t; ) {
        let c = !1, h = "", u = "";
        if (!(r = s.exec(t)) || this.rules.block.hr.test(t)) break;
        h = r[0], t = t.substring(h.length);
        let f = r[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (b) => " ".repeat(3 * b.length)), d = t.split(`
`, 1)[0], g = !f.trim(), m = 0;
        if (this.options.pedantic ? (m = 2, u = f.trimStart()) : g ? m = r[1].length + 1 : (m = r[2].search(this.rules.other.nonSpaceChar), m = m > 4 ? 1 : m, u = f.slice(m), m += r[1].length), g && this.rules.other.blankLine.test(d) && (h += d + `
`, t = t.substring(d.length + 1), c = !0), !c) {
          let b = this.rules.other.nextBulletRegex(m), C = this.rules.other.hrRegex(m), v = this.rules.other.fencesBeginRegex(m), k = this.rules.other.headingBeginRegex(m), A = this.rules.other.htmlBeginRegex(m);
          for (; t; ) {
            let S = t.split(`
`, 1)[0], D;
            if (d = S, this.options.pedantic ? (d = d.replace(this.rules.other.listReplaceNesting, "  "), D = d) : D = d.replace(this.rules.other.tabCharGlobal, "    "), v.test(d) || k.test(d) || A.test(d) || b.test(d) || C.test(d)) break;
            if (D.search(this.rules.other.nonSpaceChar) >= m || !d.trim()) u += `
` + D.slice(m);
            else {
              if (g || f.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || v.test(f) || k.test(f) || C.test(f)) break;
              u += `
` + d;
            }
            !g && !d.trim() && (g = !0), h += S + `
`, t = t.substring(S.length + 1), f = D.slice(m);
          }
        }
        n.loose || (o ? n.loose = !0 : this.rules.other.doubleBlankLine.test(h) && (o = !0));
        let y = null, x;
        this.options.gfm && (y = this.rules.other.listIsTask.exec(u), y && (x = y[0] !== "[ ] ", u = u.replace(this.rules.other.listReplaceTask, ""))), n.items.push({ type: "list_item", raw: h, task: !!y, checked: x, loose: !1, text: u, tokens: [] }), n.raw += h;
      }
      let l = n.items.at(-1);
      if (l) l.raw = l.raw.trimEnd(), l.text = l.text.trimEnd();
      else return;
      n.raw = n.raw.trimEnd();
      for (let c = 0; c < n.items.length; c++) if (this.lexer.state.top = !1, n.items[c].tokens = this.lexer.blockTokens(n.items[c].text, []), !n.loose) {
        let h = n.items[c].tokens.filter((f) => f.type === "space"), u = h.length > 0 && h.some((f) => this.rules.other.anyLine.test(f.raw));
        n.loose = u;
      }
      if (n.loose) for (let c = 0; c < n.items.length; c++) n.items[c].loose = !0;
      return n;
    }
  }
  html(t) {
    let r = this.rules.block.html.exec(t);
    if (r) return { type: "html", block: !0, raw: r[0], pre: r[1] === "pre" || r[1] === "script" || r[1] === "style", text: r[0] };
  }
  def(t) {
    let r = this.rules.block.def.exec(t);
    if (r) {
      let i = r[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), a = r[2] ? r[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", n = r[3] ? r[3].substring(1, r[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : r[3];
      return { type: "def", tag: i, raw: r[0], href: a, title: n };
    }
  }
  table(t) {
    let r = this.rules.block.table.exec(t);
    if (!r || !this.rules.other.tableDelimiter.test(r[2])) return;
    let i = pc(r[1]), a = r[2].replace(this.rules.other.tableAlignChars, "").split("|"), n = r[3]?.trim() ? r[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], s = { type: "table", raw: r[0], header: [], align: [], rows: [] };
    if (i.length === a.length) {
      for (let o of a) this.rules.other.tableAlignRight.test(o) ? s.align.push("right") : this.rules.other.tableAlignCenter.test(o) ? s.align.push("center") : this.rules.other.tableAlignLeft.test(o) ? s.align.push("left") : s.align.push(null);
      for (let o = 0; o < i.length; o++) s.header.push({ text: i[o], tokens: this.lexer.inline(i[o]), header: !0, align: s.align[o] });
      for (let o of n) s.rows.push(pc(o, s.header.length).map((l, c) => ({ text: l, tokens: this.lexer.inline(l), header: !1, align: s.align[c] })));
      return s;
    }
  }
  lheading(t) {
    let r = this.rules.block.lheading.exec(t);
    if (r) return { type: "heading", raw: r[0], depth: r[2].charAt(0) === "=" ? 1 : 2, text: r[1], tokens: this.lexer.inline(r[1]) };
  }
  paragraph(t) {
    let r = this.rules.block.paragraph.exec(t);
    if (r) {
      let i = r[1].charAt(r[1].length - 1) === `
` ? r[1].slice(0, -1) : r[1];
      return { type: "paragraph", raw: r[0], text: i, tokens: this.lexer.inline(i) };
    }
  }
  text(t) {
    let r = this.rules.block.text.exec(t);
    if (r) return { type: "text", raw: r[0], text: r[0], tokens: this.lexer.inline(r[0]) };
  }
  escape(t) {
    let r = this.rules.inline.escape.exec(t);
    if (r) return { type: "escape", raw: r[0], text: r[1] };
  }
  tag(t) {
    let r = this.rules.inline.tag.exec(t);
    if (r) return !this.lexer.state.inLink && this.rules.other.startATag.test(r[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(r[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(r[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(r[0]) && (this.lexer.state.inRawBlock = !1), { type: "html", raw: r[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: !1, text: r[0] };
  }
  link(t) {
    let r = this.rules.inline.link.exec(t);
    if (r) {
      let i = r[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(i)) {
        if (!this.rules.other.endAngleBracket.test(i)) return;
        let s = ni(i.slice(0, -1), "\\");
        if ((i.length - s.length) % 2 === 0) return;
      } else {
        let s = zk(r[2], "()");
        if (s === -2) return;
        if (s > -1) {
          let o = (r[0].indexOf("!") === 0 ? 5 : 4) + r[1].length + s;
          r[2] = r[2].substring(0, s), r[0] = r[0].substring(0, o).trim(), r[3] = "";
        }
      }
      let a = r[2], n = "";
      if (this.options.pedantic) {
        let s = this.rules.other.pedanticHrefTitle.exec(a);
        s && (a = s[1], n = s[3]);
      } else n = r[3] ? r[3].slice(1, -1) : "";
      return a = a.trim(), this.rules.other.startAngleBracket.test(a) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(i) ? a = a.slice(1) : a = a.slice(1, -1)), gc(r, { href: a && a.replace(this.rules.inline.anyPunctuation, "$1"), title: n && n.replace(this.rules.inline.anyPunctuation, "$1") }, r[0], this.lexer, this.rules);
    }
  }
  reflink(t, r) {
    let i;
    if ((i = this.rules.inline.reflink.exec(t)) || (i = this.rules.inline.nolink.exec(t))) {
      let a = (i[2] || i[1]).replace(this.rules.other.multipleSpaceGlobal, " "), n = r[a.toLowerCase()];
      if (!n) {
        let s = i[0].charAt(0);
        return { type: "text", raw: s, text: s };
      }
      return gc(i, n, i[0], this.lexer, this.rules);
    }
  }
  emStrong(t, r, i = "") {
    let a = this.rules.inline.emStrongLDelim.exec(t);
    if (!(!a || a[3] && i.match(this.rules.other.unicodeAlphaNumeric)) && (!(a[1] || a[2]) || !i || this.rules.inline.punctuation.exec(i))) {
      let n = [...a[0]].length - 1, s, o, l = n, c = 0, h = a[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (h.lastIndex = 0, r = r.slice(-1 * t.length + n); (a = h.exec(r)) != null; ) {
        if (s = a[1] || a[2] || a[3] || a[4] || a[5] || a[6], !s) continue;
        if (o = [...s].length, a[3] || a[4]) {
          l += o;
          continue;
        } else if ((a[5] || a[6]) && n % 3 && !((n + o) % 3)) {
          c += o;
          continue;
        }
        if (l -= o, l > 0) continue;
        o = Math.min(o, o + l + c);
        let u = [...a[0]][0].length, f = t.slice(0, n + a.index + u + o);
        if (Math.min(n, o) % 2) {
          let g = f.slice(1, -1);
          return { type: "em", raw: f, text: g, tokens: this.lexer.inlineTokens(g) };
        }
        let d = f.slice(2, -2);
        return { type: "strong", raw: f, text: d, tokens: this.lexer.inlineTokens(d) };
      }
    }
  }
  codespan(t) {
    let r = this.rules.inline.code.exec(t);
    if (r) {
      let i = r[2].replace(this.rules.other.newLineCharGlobal, " "), a = this.rules.other.nonSpaceChar.test(i), n = this.rules.other.startingSpaceChar.test(i) && this.rules.other.endingSpaceChar.test(i);
      return a && n && (i = i.substring(1, i.length - 1)), { type: "codespan", raw: r[0], text: i };
    }
  }
  br(t) {
    let r = this.rules.inline.br.exec(t);
    if (r) return { type: "br", raw: r[0] };
  }
  del(t) {
    let r = this.rules.inline.del.exec(t);
    if (r) return { type: "del", raw: r[0], text: r[2], tokens: this.lexer.inlineTokens(r[2]) };
  }
  autolink(t) {
    let r = this.rules.inline.autolink.exec(t);
    if (r) {
      let i, a;
      return r[2] === "@" ? (i = r[1], a = "mailto:" + i) : (i = r[1], a = i), { type: "link", raw: r[0], text: i, href: a, tokens: [{ type: "text", raw: i, text: i }] };
    }
  }
  url(t) {
    let r;
    if (r = this.rules.inline.url.exec(t)) {
      let i, a;
      if (r[2] === "@") i = r[0], a = "mailto:" + i;
      else {
        let n;
        do
          n = r[0], r[0] = this.rules.inline._backpedal.exec(r[0])?.[0] ?? "";
        while (n !== r[0]);
        i = r[0], r[1] === "www." ? a = "http://" + r[0] : a = r[0];
      }
      return { type: "link", raw: r[0], text: i, href: a, tokens: [{ type: "text", raw: i, text: i }] };
    }
  }
  inlineText(t) {
    let r = this.rules.inline.text.exec(t);
    if (r) {
      let i = this.lexer.state.inRawBlock;
      return { type: "text", raw: r[0], text: r[0], escaped: i };
    }
  }
}, ne = class Fs {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(t) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || pr, this.options.tokenizer = this.options.tokenizer || new qa(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let r = { other: qt, block: Ji.normal, inline: ai.normal };
    this.options.pedantic ? (r.block = Ji.pedantic, r.inline = ai.pedantic) : this.options.gfm && (r.block = Ji.gfm, this.options.breaks ? r.inline = ai.breaks : r.inline = ai.gfm), this.tokenizer.rules = r;
  }
  static get rules() {
    return { block: Ji, inline: ai };
  }
  static lex(t, r) {
    return new Fs(r).lex(t);
  }
  static lexInline(t, r) {
    return new Fs(r).inlineTokens(t);
  }
  lex(t) {
    t = t.replace(qt.carriageReturn, `
`), this.blockTokens(t, this.tokens);
    for (let r = 0; r < this.inlineQueue.length; r++) {
      let i = this.inlineQueue[r];
      this.inlineTokens(i.src, i.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, r = [], i = !1) {
    for (this.options.pedantic && (t = t.replace(qt.tabCharGlobal, "    ").replace(qt.spaceLine, "")); t; ) {
      let a;
      if (this.options.extensions?.block?.some((s) => (a = s.call({ lexer: this }, t, r)) ? (t = t.substring(a.raw.length), r.push(a), !0) : !1)) continue;
      if (a = this.tokenizer.space(t)) {
        t = t.substring(a.raw.length);
        let s = r.at(-1);
        a.raw.length === 1 && s !== void 0 ? s.raw += `
` : r.push(a);
        continue;
      }
      if (a = this.tokenizer.code(t)) {
        t = t.substring(a.raw.length);
        let s = r.at(-1);
        s?.type === "paragraph" || s?.type === "text" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + a.raw, s.text += `
` + a.text, this.inlineQueue.at(-1).src = s.text) : r.push(a);
        continue;
      }
      if (a = this.tokenizer.fences(t)) {
        t = t.substring(a.raw.length), r.push(a);
        continue;
      }
      if (a = this.tokenizer.heading(t)) {
        t = t.substring(a.raw.length), r.push(a);
        continue;
      }
      if (a = this.tokenizer.hr(t)) {
        t = t.substring(a.raw.length), r.push(a);
        continue;
      }
      if (a = this.tokenizer.blockquote(t)) {
        t = t.substring(a.raw.length), r.push(a);
        continue;
      }
      if (a = this.tokenizer.list(t)) {
        t = t.substring(a.raw.length), r.push(a);
        continue;
      }
      if (a = this.tokenizer.html(t)) {
        t = t.substring(a.raw.length), r.push(a);
        continue;
      }
      if (a = this.tokenizer.def(t)) {
        t = t.substring(a.raw.length);
        let s = r.at(-1);
        s?.type === "paragraph" || s?.type === "text" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + a.raw, s.text += `
` + a.raw, this.inlineQueue.at(-1).src = s.text) : this.tokens.links[a.tag] || (this.tokens.links[a.tag] = { href: a.href, title: a.title }, r.push(a));
        continue;
      }
      if (a = this.tokenizer.table(t)) {
        t = t.substring(a.raw.length), r.push(a);
        continue;
      }
      if (a = this.tokenizer.lheading(t)) {
        t = t.substring(a.raw.length), r.push(a);
        continue;
      }
      let n = t;
      if (this.options.extensions?.startBlock) {
        let s = 1 / 0, o = t.slice(1), l;
        this.options.extensions.startBlock.forEach((c) => {
          l = c.call({ lexer: this }, o), typeof l == "number" && l >= 0 && (s = Math.min(s, l));
        }), s < 1 / 0 && s >= 0 && (n = t.substring(0, s + 1));
      }
      if (this.state.top && (a = this.tokenizer.paragraph(n))) {
        let s = r.at(-1);
        i && s?.type === "paragraph" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + a.raw, s.text += `
` + a.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = s.text) : r.push(a), i = n.length !== t.length, t = t.substring(a.raw.length);
        continue;
      }
      if (a = this.tokenizer.text(t)) {
        t = t.substring(a.raw.length);
        let s = r.at(-1);
        s?.type === "text" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + a.raw, s.text += `
` + a.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = s.text) : r.push(a);
        continue;
      }
      if (t) {
        let s = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(s);
          break;
        } else throw new Error(s);
      }
    }
    return this.state.top = !0, r;
  }
  inline(t, r = []) {
    return this.inlineQueue.push({ src: t, tokens: r }), r;
  }
  inlineTokens(t, r = []) {
    let i = t, a = null;
    if (this.tokens.links) {
      let l = Object.keys(this.tokens.links);
      if (l.length > 0) for (; (a = this.tokenizer.rules.inline.reflinkSearch.exec(i)) != null; ) l.includes(a[0].slice(a[0].lastIndexOf("[") + 1, -1)) && (i = i.slice(0, a.index) + "[" + "a".repeat(a[0].length - 2) + "]" + i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (a = this.tokenizer.rules.inline.anyPunctuation.exec(i)) != null; ) i = i.slice(0, a.index) + "++" + i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    let n;
    for (; (a = this.tokenizer.rules.inline.blockSkip.exec(i)) != null; ) n = a[2] ? a[2].length : 0, i = i.slice(0, a.index + n) + "[" + "a".repeat(a[0].length - n - 2) + "]" + i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    i = this.options.hooks?.emStrongMask?.call({ lexer: this }, i) ?? i;
    let s = !1, o = "";
    for (; t; ) {
      s || (o = ""), s = !1;
      let l;
      if (this.options.extensions?.inline?.some((h) => (l = h.call({ lexer: this }, t, r)) ? (t = t.substring(l.raw.length), r.push(l), !0) : !1)) continue;
      if (l = this.tokenizer.escape(t)) {
        t = t.substring(l.raw.length), r.push(l);
        continue;
      }
      if (l = this.tokenizer.tag(t)) {
        t = t.substring(l.raw.length), r.push(l);
        continue;
      }
      if (l = this.tokenizer.link(t)) {
        t = t.substring(l.raw.length), r.push(l);
        continue;
      }
      if (l = this.tokenizer.reflink(t, this.tokens.links)) {
        t = t.substring(l.raw.length);
        let h = r.at(-1);
        l.type === "text" && h?.type === "text" ? (h.raw += l.raw, h.text += l.text) : r.push(l);
        continue;
      }
      if (l = this.tokenizer.emStrong(t, i, o)) {
        t = t.substring(l.raw.length), r.push(l);
        continue;
      }
      if (l = this.tokenizer.codespan(t)) {
        t = t.substring(l.raw.length), r.push(l);
        continue;
      }
      if (l = this.tokenizer.br(t)) {
        t = t.substring(l.raw.length), r.push(l);
        continue;
      }
      if (l = this.tokenizer.del(t)) {
        t = t.substring(l.raw.length), r.push(l);
        continue;
      }
      if (l = this.tokenizer.autolink(t)) {
        t = t.substring(l.raw.length), r.push(l);
        continue;
      }
      if (!this.state.inLink && (l = this.tokenizer.url(t))) {
        t = t.substring(l.raw.length), r.push(l);
        continue;
      }
      let c = t;
      if (this.options.extensions?.startInline) {
        let h = 1 / 0, u = t.slice(1), f;
        this.options.extensions.startInline.forEach((d) => {
          f = d.call({ lexer: this }, u), typeof f == "number" && f >= 0 && (h = Math.min(h, f));
        }), h < 1 / 0 && h >= 0 && (c = t.substring(0, h + 1));
      }
      if (l = this.tokenizer.inlineText(c)) {
        t = t.substring(l.raw.length), l.raw.slice(-1) !== "_" && (o = l.raw.slice(-1)), s = !0;
        let h = r.at(-1);
        h?.type === "text" ? (h.raw += l.raw, h.text += l.text) : r.push(l);
        continue;
      }
      if (t) {
        let h = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(h);
          break;
        } else throw new Error(h);
      }
    }
    return r;
  }
}, Ha = class {
  options;
  parser;
  constructor(t) {
    this.options = t || pr;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: r, escaped: i }) {
    let a = (r || "").match(qt.notSpaceStart)?.[0], n = t.replace(qt.endingNewline, "") + `
`;
    return a ? '<pre><code class="language-' + ge(a) + '">' + (i ? n : ge(n, !0)) + `</code></pre>
` : "<pre><code>" + (i ? n : ge(n, !0)) + `</code></pre>
`;
  }
  blockquote({ tokens: t }) {
    return `<blockquote>
${this.parser.parse(t)}</blockquote>
`;
  }
  html({ text: t }) {
    return t;
  }
  def(t) {
    return "";
  }
  heading({ tokens: t, depth: r }) {
    return `<h${r}>${this.parser.parseInline(t)}</h${r}>
`;
  }
  hr(t) {
    return `<hr>
`;
  }
  list(t) {
    let r = t.ordered, i = t.start, a = "";
    for (let o = 0; o < t.items.length; o++) {
      let l = t.items[o];
      a += this.listitem(l);
    }
    let n = r ? "ol" : "ul", s = r && i !== 1 ? ' start="' + i + '"' : "";
    return "<" + n + s + `>
` + a + "</" + n + `>
`;
  }
  listitem(t) {
    let r = "";
    if (t.task) {
      let i = this.checkbox({ checked: !!t.checked });
      t.loose ? t.tokens[0]?.type === "paragraph" ? (t.tokens[0].text = i + " " + t.tokens[0].text, t.tokens[0].tokens && t.tokens[0].tokens.length > 0 && t.tokens[0].tokens[0].type === "text" && (t.tokens[0].tokens[0].text = i + " " + ge(t.tokens[0].tokens[0].text), t.tokens[0].tokens[0].escaped = !0)) : t.tokens.unshift({ type: "text", raw: i + " ", text: i + " ", escaped: !0 }) : r += i + " ";
    }
    return r += this.parser.parse(t.tokens, !!t.loose), `<li>${r}</li>
`;
  }
  checkbox({ checked: t }) {
    return "<input " + (t ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens: t }) {
    return `<p>${this.parser.parseInline(t)}</p>
`;
  }
  table(t) {
    let r = "", i = "";
    for (let n = 0; n < t.header.length; n++) i += this.tablecell(t.header[n]);
    r += this.tablerow({ text: i });
    let a = "";
    for (let n = 0; n < t.rows.length; n++) {
      let s = t.rows[n];
      i = "";
      for (let o = 0; o < s.length; o++) i += this.tablecell(s[o]);
      a += this.tablerow({ text: i });
    }
    return a && (a = `<tbody>${a}</tbody>`), `<table>
<thead>
` + r + `</thead>
` + a + `</table>
`;
  }
  tablerow({ text: t }) {
    return `<tr>
${t}</tr>
`;
  }
  tablecell(t) {
    let r = this.parser.parseInline(t.tokens), i = t.header ? "th" : "td";
    return (t.align ? `<${i} align="${t.align}">` : `<${i}>`) + r + `</${i}>
`;
  }
  strong({ tokens: t }) {
    return `<strong>${this.parser.parseInline(t)}</strong>`;
  }
  em({ tokens: t }) {
    return `<em>${this.parser.parseInline(t)}</em>`;
  }
  codespan({ text: t }) {
    return `<code>${ge(t, !0)}</code>`;
  }
  br(t) {
    return "<br>";
  }
  del({ tokens: t }) {
    return `<del>${this.parser.parseInline(t)}</del>`;
  }
  link({ href: t, title: r, tokens: i }) {
    let a = this.parser.parseInline(i), n = dc(t);
    if (n === null) return a;
    t = n;
    let s = '<a href="' + t + '"';
    return r && (s += ' title="' + ge(r) + '"'), s += ">" + a + "</a>", s;
  }
  image({ href: t, title: r, text: i, tokens: a }) {
    a && (i = this.parser.parseInline(a, this.parser.textRenderer));
    let n = dc(t);
    if (n === null) return ge(i);
    t = n;
    let s = `<img src="${t}" alt="${i}"`;
    return r && (s += ` title="${ge(r)}"`), s += ">", s;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : ge(t.text);
  }
}, Io = class {
  strong({ text: t }) {
    return t;
  }
  em({ text: t }) {
    return t;
  }
  codespan({ text: t }) {
    return t;
  }
  del({ text: t }) {
    return t;
  }
  html({ text: t }) {
    return t;
  }
  text({ text: t }) {
    return t;
  }
  link({ text: t }) {
    return "" + t;
  }
  image({ text: t }) {
    return "" + t;
  }
  br() {
    return "";
  }
}, se = class Ds {
  options;
  renderer;
  textRenderer;
  constructor(t) {
    this.options = t || pr, this.options.renderer = this.options.renderer || new Ha(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Io();
  }
  static parse(t, r) {
    return new Ds(r).parse(t);
  }
  static parseInline(t, r) {
    return new Ds(r).parseInline(t);
  }
  parse(t, r = !0) {
    let i = "";
    for (let a = 0; a < t.length; a++) {
      let n = t[a];
      if (this.options.extensions?.renderers?.[n.type]) {
        let o = n, l = this.options.extensions.renderers[o.type].call({ parser: this }, o);
        if (l !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(o.type)) {
          i += l || "";
          continue;
        }
      }
      let s = n;
      switch (s.type) {
        case "space": {
          i += this.renderer.space(s);
          continue;
        }
        case "hr": {
          i += this.renderer.hr(s);
          continue;
        }
        case "heading": {
          i += this.renderer.heading(s);
          continue;
        }
        case "code": {
          i += this.renderer.code(s);
          continue;
        }
        case "table": {
          i += this.renderer.table(s);
          continue;
        }
        case "blockquote": {
          i += this.renderer.blockquote(s);
          continue;
        }
        case "list": {
          i += this.renderer.list(s);
          continue;
        }
        case "html": {
          i += this.renderer.html(s);
          continue;
        }
        case "def": {
          i += this.renderer.def(s);
          continue;
        }
        case "paragraph": {
          i += this.renderer.paragraph(s);
          continue;
        }
        case "text": {
          let o = s, l = this.renderer.text(o);
          for (; a + 1 < t.length && t[a + 1].type === "text"; ) o = t[++a], l += `
` + this.renderer.text(o);
          r ? i += this.renderer.paragraph({ type: "paragraph", raw: l, text: l, tokens: [{ type: "text", raw: l, text: l, escaped: !0 }] }) : i += l;
          continue;
        }
        default: {
          let o = 'Token with "' + s.type + '" type was not found.';
          if (this.options.silent) return console.error(o), "";
          throw new Error(o);
        }
      }
    }
    return i;
  }
  parseInline(t, r = this.renderer) {
    let i = "";
    for (let a = 0; a < t.length; a++) {
      let n = t[a];
      if (this.options.extensions?.renderers?.[n.type]) {
        let o = this.options.extensions.renderers[n.type].call({ parser: this }, n);
        if (o !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(n.type)) {
          i += o || "";
          continue;
        }
      }
      let s = n;
      switch (s.type) {
        case "escape": {
          i += r.text(s);
          break;
        }
        case "html": {
          i += r.html(s);
          break;
        }
        case "link": {
          i += r.link(s);
          break;
        }
        case "image": {
          i += r.image(s);
          break;
        }
        case "strong": {
          i += r.strong(s);
          break;
        }
        case "em": {
          i += r.em(s);
          break;
        }
        case "codespan": {
          i += r.codespan(s);
          break;
        }
        case "br": {
          i += r.br(s);
          break;
        }
        case "del": {
          i += r.del(s);
          break;
        }
        case "text": {
          i += r.text(s);
          break;
        }
        default: {
          let o = 'Token with "' + s.type + '" type was not found.';
          if (this.options.silent) return console.error(o), "";
          throw new Error(o);
        }
      }
    }
    return i;
  }
}, di = class {
  options;
  block;
  constructor(t) {
    this.options = t || pr;
  }
  static passThroughHooks = /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"]);
  static passThroughHooksRespectAsync = /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"]);
  preprocess(t) {
    return t;
  }
  postprocess(t) {
    return t;
  }
  processAllTokens(t) {
    return t;
  }
  emStrongMask(t) {
    return t;
  }
  provideLexer() {
    return this.block ? ne.lex : ne.lexInline;
  }
  provideParser() {
    return this.block ? se.parse : se.parseInline;
  }
}, qk = class {
  defaults = Lo();
  options = this.setOptions;
  parse = this.parseMarkdown(!0);
  parseInline = this.parseMarkdown(!1);
  Parser = se;
  Renderer = Ha;
  TextRenderer = Io;
  Lexer = ne;
  Tokenizer = qa;
  Hooks = di;
  constructor(...t) {
    this.use(...t);
  }
  walkTokens(t, r) {
    let i = [];
    for (let a of t) switch (i = i.concat(r.call(this, a)), a.type) {
      case "table": {
        let n = a;
        for (let s of n.header) i = i.concat(this.walkTokens(s.tokens, r));
        for (let s of n.rows) for (let o of s) i = i.concat(this.walkTokens(o.tokens, r));
        break;
      }
      case "list": {
        let n = a;
        i = i.concat(this.walkTokens(n.items, r));
        break;
      }
      default: {
        let n = a;
        this.defaults.extensions?.childTokens?.[n.type] ? this.defaults.extensions.childTokens[n.type].forEach((s) => {
          let o = n[s].flat(1 / 0);
          i = i.concat(this.walkTokens(o, r));
        }) : n.tokens && (i = i.concat(this.walkTokens(n.tokens, r)));
      }
    }
    return i;
  }
  use(...t) {
    let r = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return t.forEach((i) => {
      let a = { ...i };
      if (a.async = this.defaults.async || a.async || !1, i.extensions && (i.extensions.forEach((n) => {
        if (!n.name) throw new Error("extension name required");
        if ("renderer" in n) {
          let s = r.renderers[n.name];
          s ? r.renderers[n.name] = function(...o) {
            let l = n.renderer.apply(this, o);
            return l === !1 && (l = s.apply(this, o)), l;
          } : r.renderers[n.name] = n.renderer;
        }
        if ("tokenizer" in n) {
          if (!n.level || n.level !== "block" && n.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let s = r[n.level];
          s ? s.unshift(n.tokenizer) : r[n.level] = [n.tokenizer], n.start && (n.level === "block" ? r.startBlock ? r.startBlock.push(n.start) : r.startBlock = [n.start] : n.level === "inline" && (r.startInline ? r.startInline.push(n.start) : r.startInline = [n.start]));
        }
        "childTokens" in n && n.childTokens && (r.childTokens[n.name] = n.childTokens);
      }), a.extensions = r), i.renderer) {
        let n = this.defaults.renderer || new Ha(this.defaults);
        for (let s in i.renderer) {
          if (!(s in n)) throw new Error(`renderer '${s}' does not exist`);
          if (["options", "parser"].includes(s)) continue;
          let o = s, l = i.renderer[o], c = n[o];
          n[o] = (...h) => {
            let u = l.apply(n, h);
            return u === !1 && (u = c.apply(n, h)), u || "";
          };
        }
        a.renderer = n;
      }
      if (i.tokenizer) {
        let n = this.defaults.tokenizer || new qa(this.defaults);
        for (let s in i.tokenizer) {
          if (!(s in n)) throw new Error(`tokenizer '${s}' does not exist`);
          if (["options", "rules", "lexer"].includes(s)) continue;
          let o = s, l = i.tokenizer[o], c = n[o];
          n[o] = (...h) => {
            let u = l.apply(n, h);
            return u === !1 && (u = c.apply(n, h)), u;
          };
        }
        a.tokenizer = n;
      }
      if (i.hooks) {
        let n = this.defaults.hooks || new di();
        for (let s in i.hooks) {
          if (!(s in n)) throw new Error(`hook '${s}' does not exist`);
          if (["options", "block"].includes(s)) continue;
          let o = s, l = i.hooks[o], c = n[o];
          di.passThroughHooks.has(s) ? n[o] = (h) => {
            if (this.defaults.async && di.passThroughHooksRespectAsync.has(s)) return (async () => {
              let f = await l.call(n, h);
              return c.call(n, f);
            })();
            let u = l.call(n, h);
            return c.call(n, u);
          } : n[o] = (...h) => {
            if (this.defaults.async) return (async () => {
              let f = await l.apply(n, h);
              return f === !1 && (f = await c.apply(n, h)), f;
            })();
            let u = l.apply(n, h);
            return u === !1 && (u = c.apply(n, h)), u;
          };
        }
        a.hooks = n;
      }
      if (i.walkTokens) {
        let n = this.defaults.walkTokens, s = i.walkTokens;
        a.walkTokens = function(o) {
          let l = [];
          return l.push(s.call(this, o)), n && (l = l.concat(n.call(this, o))), l;
        };
      }
      this.defaults = { ...this.defaults, ...a };
    }), this;
  }
  setOptions(t) {
    return this.defaults = { ...this.defaults, ...t }, this;
  }
  lexer(t, r) {
    return ne.lex(t, r ?? this.defaults);
  }
  parser(t, r) {
    return se.parse(t, r ?? this.defaults);
  }
  parseMarkdown(t) {
    return (r, i) => {
      let a = { ...i }, n = { ...this.defaults, ...a }, s = this.onError(!!n.silent, !!n.async);
      if (this.defaults.async === !0 && a.async === !1) return s(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof r > "u" || r === null) return s(new Error("marked(): input parameter is undefined or null"));
      if (typeof r != "string") return s(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(r) + ", string expected"));
      if (n.hooks && (n.hooks.options = n, n.hooks.block = t), n.async) return (async () => {
        let o = n.hooks ? await n.hooks.preprocess(r) : r, l = await (n.hooks ? await n.hooks.provideLexer() : t ? ne.lex : ne.lexInline)(o, n), c = n.hooks ? await n.hooks.processAllTokens(l) : l;
        n.walkTokens && await Promise.all(this.walkTokens(c, n.walkTokens));
        let h = await (n.hooks ? await n.hooks.provideParser() : t ? se.parse : se.parseInline)(c, n);
        return n.hooks ? await n.hooks.postprocess(h) : h;
      })().catch(s);
      try {
        n.hooks && (r = n.hooks.preprocess(r));
        let o = (n.hooks ? n.hooks.provideLexer() : t ? ne.lex : ne.lexInline)(r, n);
        n.hooks && (o = n.hooks.processAllTokens(o)), n.walkTokens && this.walkTokens(o, n.walkTokens);
        let l = (n.hooks ? n.hooks.provideParser() : t ? se.parse : se.parseInline)(o, n);
        return n.hooks && (l = n.hooks.postprocess(l)), l;
      } catch (o) {
        return s(o);
      }
    };
  }
  onError(t, r) {
    return (i) => {
      if (i.message += `
Please report this to https://github.com/markedjs/marked.`, t) {
        let a = "<p>An error occurred:</p><pre>" + ge(i.message + "", !0) + "</pre>";
        return r ? Promise.resolve(a) : a;
      }
      if (r) return Promise.reject(i);
      throw i;
    };
  }
}, lr = new qk();
function dt(e, t) {
  return lr.parse(e, t);
}
dt.options = dt.setOptions = function(e) {
  return lr.setOptions(e), dt.defaults = lr.defaults, Hf(dt.defaults), dt;
};
dt.getDefaults = Lo;
dt.defaults = pr;
dt.use = function(...e) {
  return lr.use(...e), dt.defaults = lr.defaults, Hf(dt.defaults), dt;
};
dt.walkTokens = function(e, t) {
  return lr.walkTokens(e, t);
};
dt.parseInline = lr.parseInline;
dt.Parser = se;
dt.parser = se.parse;
dt.Renderer = Ha;
dt.TextRenderer = Io;
dt.Lexer = ne;
dt.lexer = ne.lex;
dt.Tokenizer = qa;
dt.Hooks = di;
dt.parse = dt;
dt.options;
dt.setOptions;
dt.use;
dt.walkTokens;
dt.parseInline;
se.parse;
ne.lex;
function td(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  var i = Array.from(typeof e == "string" ? [e] : e);
  i[i.length - 1] = i[i.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var a = i.reduce(function(o, l) {
    var c = l.match(/\n([\t ]+|(?!\s).)/g);
    return c ? o.concat(c.map(function(h) {
      var u, f;
      return (f = (u = h.match(/[\t ]/g)) === null || u === void 0 ? void 0 : u.length) !== null && f !== void 0 ? f : 0;
    })) : o;
  }, []);
  if (a.length) {
    var n = new RegExp(`
[	 ]{` + Math.min.apply(Math, a) + "}", "g");
    i = i.map(function(o) {
      return o.replace(n, `
`);
    });
  }
  i[0] = i[0].replace(/^\r?\n/, "");
  var s = i[0];
  return t.forEach(function(o, l) {
    var c = s.match(/(?:^|\n)( *)$/), h = c ? c[1] : "", u = o;
    typeof o == "string" && o.includes(`
`) && (u = String(o).split(`
`).map(function(f, d) {
      return d === 0 ? f : "" + h + f;
    }).join(`
`)), s += u + i[l + 1];
  }), s;
}
var Hk = {
  body: '<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/><text transform="translate(21.16 64.67)" style="fill: #fff; font-family: ArialMT, Arial; font-size: 67.75px;"><tspan x="0" y="0">?</tspan></text></g>',
  height: 80,
  width: 80
}, Os = /* @__PURE__ */ new Map(), ed = /* @__PURE__ */ new Map(), jk = /* @__PURE__ */ p((e) => {
  for (const t of e) {
    if (!t.name)
      throw new Error(
        'Invalid icon loader. Must have a "name" property with non-empty string value.'
      );
    if (F.debug("Registering icon pack:", t.name), "loader" in t)
      ed.set(t.name, t.loader);
    else if ("icons" in t)
      Os.set(t.name, t.icons);
    else
      throw F.error("Invalid icon loader:", t), new Error('Invalid icon loader. Must have either "icons" or "loader" property.');
  }
}, "registerIconPacks"), rd = /* @__PURE__ */ p(async (e, t) => {
  const r = Yw(e, !0, t !== void 0);
  if (!r)
    throw new Error(`Invalid icon name: ${e}`);
  const i = r.prefix || t;
  if (!i)
    throw new Error(`Icon name must contain a prefix: ${e}`);
  let a = Os.get(i);
  if (!a) {
    const s = ed.get(i);
    if (!s)
      throw new Error(`Icon set not found: ${r.prefix}`);
    try {
      a = { ...await s(), prefix: i }, Os.set(i, a);
    } catch (o) {
      throw F.error(o), new Error(`Failed to load icon set: ${r.prefix}`);
    }
  }
  const n = Xw(a, r.name);
  if (!n)
    throw new Error(`Icon not found: ${e}`);
  return n;
}, "getRegisteredIconData"), Yk = /* @__PURE__ */ p(async (e) => {
  try {
    return await rd(e), !0;
  } catch {
    return !1;
  }
}, "isIconAvailable"), zi = /* @__PURE__ */ p(async (e, t, r) => {
  let i;
  try {
    i = await rd(e, t?.fallbackPrefix);
  } catch (s) {
    F.error(s), i = Hk;
  }
  const a = ek(i, t), n = nk(ak(a.body), {
    ...a.attributes,
    ...r
  });
  return Jt(n, Dt());
}, "getIconSVG");
function id(e, { markdownAutoWrap: t }) {
  const i = e.replace(/<br\/>/g, `
`).replace(/\n{2,}/g, `
`), a = td(i);
  return t === !1 ? a.replace(/ /g, "&nbsp;") : a;
}
p(id, "preprocessMarkdown");
function ad(e, t = {}) {
  const r = id(e, t), i = dt.lexer(r), a = [[]];
  let n = 0;
  function s(o, l = "normal") {
    o.type === "text" ? o.text.split(`
`).forEach((h, u) => {
      u !== 0 && (n++, a.push([])), h.split(" ").forEach((f) => {
        f = f.replace(/&#39;/g, "'"), f && a[n].push({ content: f, type: l });
      });
    }) : o.type === "strong" || o.type === "em" ? o.tokens.forEach((c) => {
      s(c, o.type);
    }) : o.type === "html" && a[n].push({ content: o.text, type: "normal" });
  }
  return p(s, "processNode"), i.forEach((o) => {
    o.type === "paragraph" ? o.tokens?.forEach((l) => {
      s(l);
    }) : o.type === "html" ? a[n].push({ content: o.text, type: "normal" }) : a[n].push({ content: o.raw, type: "normal" });
  }), a;
}
p(ad, "markdownToLines");
function nd(e, { markdownAutoWrap: t } = {}) {
  const r = dt.lexer(e);
  function i(a) {
    return a.type === "text" ? t === !1 ? a.text.replace(/\n */g, "<br/>").replace(/ /g, "&nbsp;") : a.text.replace(/\n */g, "<br/>") : a.type === "strong" ? `<strong>${a.tokens?.map(i).join("")}</strong>` : a.type === "em" ? `<em>${a.tokens?.map(i).join("")}</em>` : a.type === "paragraph" ? `<p>${a.tokens?.map(i).join("")}</p>` : a.type === "space" ? "" : a.type === "html" ? `${a.text}` : a.type === "escape" ? a.text : (F.warn(`Unsupported markdown: ${a.type}`), a.raw);
  }
  return p(i, "output"), r.map(i).join("");
}
p(nd, "markdownToHTML");
function sd(e) {
  return Intl.Segmenter ? [...new Intl.Segmenter().segment(e)].map((t) => t.segment) : [...e];
}
p(sd, "splitTextToChars");
function od(e, t) {
  const r = sd(t.content);
  return Po(e, [], r, t.type);
}
p(od, "splitWordToFitWidth");
function Po(e, t, r, i) {
  if (r.length === 0)
    return [
      { content: t.join(""), type: i },
      { content: "", type: i }
    ];
  const [a, ...n] = r, s = [...t, a];
  return e([{ content: s.join(""), type: i }]) ? Po(e, s, n, i) : (t.length === 0 && a && (t.push(a), r.shift()), [
    { content: t.join(""), type: i },
    { content: r.join(""), type: i }
  ]);
}
p(Po, "splitWordToFitWidthRecursion");
function ld(e, t) {
  if (e.some(({ content: r }) => r.includes(`
`)))
    throw new Error("splitLineToFitWidth does not support newlines in the line");
  return ja(e, t);
}
p(ld, "splitLineToFitWidth");
function ja(e, t, r = [], i = []) {
  if (e.length === 0)
    return i.length > 0 && r.push(i), r.length > 0 ? r : [];
  let a = "";
  e[0].content === " " && (a = " ", e.shift());
  const n = e.shift() ?? { content: " ", type: "normal" }, s = [...i];
  if (a !== "" && s.push({ content: a, type: "normal" }), s.push(n), t(s))
    return ja(e, t, r, s);
  if (i.length > 0)
    r.push(i), e.unshift(n);
  else if (n.content) {
    const [o, l] = od(t, n);
    r.push([o]), l.content && e.unshift(l);
  }
  return ja(e, t, r);
}
p(ja, "splitLineToFitWidthRecursion");
function Rs(e, t) {
  t && e.attr("style", t);
}
p(Rs, "applyStyle");
async function cd(e, t, r, i, a = !1, n = Dt()) {
  const s = e.append("foreignObject");
  s.attr("width", `${10 * r}px`), s.attr("height", `${10 * r}px`);
  const o = s.append("xhtml:div"), l = Rr(t.label) ? await io(t.label.replace(Yr.lineBreakRegex, `
`), n) : Jt(t.label, n), c = t.isNode ? "nodeLabel" : "edgeLabel", h = o.append("span");
  h.html(l), Rs(h, t.labelStyle), h.attr("class", `${c} ${i}`), Rs(o, t.labelStyle), o.style("display", "table-cell"), o.style("white-space", "nowrap"), o.style("line-height", "1.5"), o.style("max-width", r + "px"), o.style("text-align", "center"), o.attr("xmlns", "http://www.w3.org/1999/xhtml"), a && o.attr("class", "labelBkg");
  let u = o.node().getBoundingClientRect();
  return u.width === r && (o.style("display", "table"), o.style("white-space", "break-spaces"), o.style("width", r + "px"), u = o.node().getBoundingClientRect()), s.node();
}
p(cd, "addHtmlSpan");
function gn(e, t, r) {
  return e.append("tspan").attr("class", "text-outer-tspan").attr("x", 0).attr("y", t * r - 0.1 + "em").attr("dy", r + "em");
}
p(gn, "createTspan");
function hd(e, t, r) {
  const i = e.append("text"), a = gn(i, 1, t);
  mn(a, r);
  const n = a.node().getComputedTextLength();
  return i.remove(), n;
}
p(hd, "computeWidthOfText");
function Uk(e, t, r) {
  const i = e.append("text"), a = gn(i, 1, t);
  mn(a, [{ content: r, type: "normal" }]);
  const n = a.node()?.getBoundingClientRect();
  return n && i.remove(), n;
}
p(Uk, "computeDimensionOfText");
function ud(e, t, r, i = !1) {
  const n = t.append("g"), s = n.insert("rect").attr("class", "background").attr("style", "stroke: none"), o = n.append("text").attr("y", "-10.1");
  let l = 0;
  for (const c of r) {
    const h = /* @__PURE__ */ p((f) => hd(n, 1.1, f) <= e, "checkWidth"), u = h(c) ? [c] : ld(c, h);
    for (const f of u) {
      const d = gn(o, l, 1.1);
      mn(d, f), l++;
    }
  }
  if (i) {
    const c = o.node().getBBox(), h = 2;
    return s.attr("x", c.x - h).attr("y", c.y - h).attr("width", c.width + 2 * h).attr("height", c.height + 2 * h), n.node();
  } else
    return o.node();
}
p(ud, "createFormattedText");
function mn(e, t) {
  e.text(""), t.forEach((r, i) => {
    const a = e.append("tspan").attr("font-style", r.type === "em" ? "italic" : "normal").attr("class", "text-inner-tspan").attr("font-weight", r.type === "strong" ? "bold" : "normal");
    i === 0 ? a.text(r.content) : a.text(" " + r.content);
  });
}
p(mn, "updateTextContentAndStyles");
async function fd(e, t = {}) {
  const r = [];
  e.replace(/(fa[bklrs]?):fa-([\w-]+)/g, (a, n, s) => (r.push(
    (async () => {
      const o = `${n}:${s}`;
      return await Yk(o) ? await zi(o, void 0, { class: "label-icon" }) : `<i class='${Jt(a, t).replace(":", " ")}'></i>`;
    })()
  ), a));
  const i = await Promise.all(r);
  return e.replace(/(fa[bklrs]?):fa-([\w-]+)/g, () => i.shift() ?? "");
}
p(fd, "replaceIconSubstring");
var He = /* @__PURE__ */ p(async (e, t = "", {
  style: r = "",
  isTitle: i = !1,
  classes: a = "",
  useHtmlLabels: n = !0,
  isNode: s = !0,
  width: o = 200,
  addSvgBackground: l = !1
} = {}, c) => {
  if (F.debug(
    "XYZ createText",
    t,
    r,
    i,
    a,
    n,
    s,
    "addSvgBackground: ",
    l
  ), n) {
    const h = nd(t, c), u = await fd(dr(h), c), f = t.replace(/\\\\/g, "\\"), d = {
      isNode: s,
      label: Rr(t) ? f : u,
      labelStyle: r.replace("fill:", "color:")
    };
    return await cd(e, d, o, a, l, c);
  } else {
    const h = t.replace(/<br\s*\/?>/g, "<br/>"), u = ad(h.replace("<br>", "<br/>"), c), f = ud(
      o,
      e,
      u,
      t ? l : !1
    );
    if (s) {
      /stroke:/.exec(r) && (r = r.replace("stroke:", "lineColor:"));
      const d = r.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
      ht(f).attr("style", d);
    } else {
      const d = r.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/background:/g, "fill:");
      ht(f).select("rect").attr("style", d.replace(/background:/g, "fill:"));
      const g = r.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
      ht(f).select("text").attr("style", g);
    }
    return f;
  }
}, "createText");
function Hn(e, t, r) {
  if (e && e.length) {
    const [i, a] = t, n = Math.PI / 180 * r, s = Math.cos(n), o = Math.sin(n);
    for (const l of e) {
      const [c, h] = l;
      l[0] = (c - i) * s - (h - a) * o + i, l[1] = (c - i) * o + (h - a) * s + a;
    }
  }
}
function Gk(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}
function Xk(e, t, r, i = 1) {
  const a = r, n = Math.max(t, 0.1), s = e[0] && e[0][0] && typeof e[0][0] == "number" ? [e] : e, o = [0, 0];
  if (a) for (const c of s) Hn(c, o, a);
  const l = (function(c, h, u) {
    const f = [];
    for (const b of c) {
      const C = [...b];
      Gk(C[0], C[C.length - 1]) || C.push([C[0][0], C[0][1]]), C.length > 2 && f.push(C);
    }
    const d = [];
    h = Math.max(h, 0.1);
    const g = [];
    for (const b of f) for (let C = 0; C < b.length - 1; C++) {
      const v = b[C], k = b[C + 1];
      if (v[1] !== k[1]) {
        const A = Math.min(v[1], k[1]);
        g.push({ ymin: A, ymax: Math.max(v[1], k[1]), x: A === v[1] ? v[0] : k[0], islope: (k[0] - v[0]) / (k[1] - v[1]) });
      }
    }
    if (g.sort(((b, C) => b.ymin < C.ymin ? -1 : b.ymin > C.ymin ? 1 : b.x < C.x ? -1 : b.x > C.x ? 1 : b.ymax === C.ymax ? 0 : (b.ymax - C.ymax) / Math.abs(b.ymax - C.ymax))), !g.length) return d;
    let m = [], y = g[0].ymin, x = 0;
    for (; m.length || g.length; ) {
      if (g.length) {
        let b = -1;
        for (let C = 0; C < g.length && !(g[C].ymin > y); C++) b = C;
        g.splice(0, b + 1).forEach(((C) => {
          m.push({ s: y, edge: C });
        }));
      }
      if (m = m.filter(((b) => !(b.edge.ymax <= y))), m.sort(((b, C) => b.edge.x === C.edge.x ? 0 : (b.edge.x - C.edge.x) / Math.abs(b.edge.x - C.edge.x))), (u !== 1 || x % h == 0) && m.length > 1) for (let b = 0; b < m.length; b += 2) {
        const C = b + 1;
        if (C >= m.length) break;
        const v = m[b].edge, k = m[C].edge;
        d.push([[Math.round(v.x), y], [Math.round(k.x), y]]);
      }
      y += u, m.forEach(((b) => {
        b.edge.x = b.edge.x + u * b.edge.islope;
      })), x++;
    }
    return d;
  })(s, n, i);
  if (a) {
    for (const c of s) Hn(c, o, -a);
    (function(c, h, u) {
      const f = [];
      c.forEach(((d) => f.push(...d))), Hn(f, h, u);
    })(l, o, -a);
  }
  return l;
}
function Wi(e, t) {
  var r;
  const i = t.hachureAngle + 90;
  let a = t.hachureGap;
  a < 0 && (a = 4 * t.strokeWidth), a = Math.round(Math.max(a, 0.1));
  let n = 1;
  return t.roughness >= 1 && (((r = t.randomizer) === null || r === void 0 ? void 0 : r.next()) || Math.random()) > 0.7 && (n = a), Xk(e, a, i, n || 1);
}
class No {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, r) {
    return this._fillPolygons(t, r);
  }
  _fillPolygons(t, r) {
    const i = Wi(t, r);
    return { type: "fillSketch", ops: this.renderLines(i, r) };
  }
  renderLines(t, r) {
    const i = [];
    for (const a of t) i.push(...this.helper.doubleLineOps(a[0][0], a[0][1], a[1][0], a[1][1], r));
    return i;
  }
}
function yn(e) {
  const t = e[0], r = e[1];
  return Math.sqrt(Math.pow(t[0] - r[0], 2) + Math.pow(t[1] - r[1], 2));
}
class Vk extends No {
  fillPolygons(t, r) {
    let i = r.hachureGap;
    i < 0 && (i = 4 * r.strokeWidth), i = Math.max(i, 0.1);
    const a = Wi(t, Object.assign({}, r, { hachureGap: i })), n = Math.PI / 180 * r.hachureAngle, s = [], o = 0.5 * i * Math.cos(n), l = 0.5 * i * Math.sin(n);
    for (const [c, h] of a) yn([c, h]) && s.push([[c[0] - o, c[1] + l], [...h]], [[c[0] + o, c[1] - l], [...h]]);
    return { type: "fillSketch", ops: this.renderLines(s, r) };
  }
}
class Zk extends No {
  fillPolygons(t, r) {
    const i = this._fillPolygons(t, r), a = Object.assign({}, r, { hachureAngle: r.hachureAngle + 90 }), n = this._fillPolygons(t, a);
    return i.ops = i.ops.concat(n.ops), i;
  }
}
class Kk {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, r) {
    const i = Wi(t, r = Object.assign({}, r, { hachureAngle: 0 }));
    return this.dotsOnLines(i, r);
  }
  dotsOnLines(t, r) {
    const i = [];
    let a = r.hachureGap;
    a < 0 && (a = 4 * r.strokeWidth), a = Math.max(a, 0.1);
    let n = r.fillWeight;
    n < 0 && (n = r.strokeWidth / 2);
    const s = a / 4;
    for (const o of t) {
      const l = yn(o), c = l / a, h = Math.ceil(c) - 1, u = l - h * a, f = (o[0][0] + o[1][0]) / 2 - a / 4, d = Math.min(o[0][1], o[1][1]);
      for (let g = 0; g < h; g++) {
        const m = d + u + g * a, y = f - s + 2 * Math.random() * s, x = m - s + 2 * Math.random() * s, b = this.helper.ellipse(y, x, n, n, r);
        i.push(...b.ops);
      }
    }
    return { type: "fillSketch", ops: i };
  }
}
class Qk {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, r) {
    const i = Wi(t, r);
    return { type: "fillSketch", ops: this.dashedLine(i, r) };
  }
  dashedLine(t, r) {
    const i = r.dashOffset < 0 ? r.hachureGap < 0 ? 4 * r.strokeWidth : r.hachureGap : r.dashOffset, a = r.dashGap < 0 ? r.hachureGap < 0 ? 4 * r.strokeWidth : r.hachureGap : r.dashGap, n = [];
    return t.forEach(((s) => {
      const o = yn(s), l = Math.floor(o / (i + a)), c = (o + a - l * (i + a)) / 2;
      let h = s[0], u = s[1];
      h[0] > u[0] && (h = s[1], u = s[0]);
      const f = Math.atan((u[1] - h[1]) / (u[0] - h[0]));
      for (let d = 0; d < l; d++) {
        const g = d * (i + a), m = g + i, y = [h[0] + g * Math.cos(f) + c * Math.cos(f), h[1] + g * Math.sin(f) + c * Math.sin(f)], x = [h[0] + m * Math.cos(f) + c * Math.cos(f), h[1] + m * Math.sin(f) + c * Math.sin(f)];
        n.push(...this.helper.doubleLineOps(y[0], y[1], x[0], x[1], r));
      }
    })), n;
  }
}
class Jk {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, r) {
    const i = r.hachureGap < 0 ? 4 * r.strokeWidth : r.hachureGap, a = r.zigzagOffset < 0 ? i : r.zigzagOffset, n = Wi(t, r = Object.assign({}, r, { hachureGap: i + a }));
    return { type: "fillSketch", ops: this.zigzagLines(n, a, r) };
  }
  zigzagLines(t, r, i) {
    const a = [];
    return t.forEach(((n) => {
      const s = yn(n), o = Math.round(s / (2 * r));
      let l = n[0], c = n[1];
      l[0] > c[0] && (l = n[1], c = n[0]);
      const h = Math.atan((c[1] - l[1]) / (c[0] - l[0]));
      for (let u = 0; u < o; u++) {
        const f = 2 * u * r, d = 2 * (u + 1) * r, g = Math.sqrt(2 * Math.pow(r, 2)), m = [l[0] + f * Math.cos(h), l[1] + f * Math.sin(h)], y = [l[0] + d * Math.cos(h), l[1] + d * Math.sin(h)], x = [m[0] + g * Math.cos(h + Math.PI / 4), m[1] + g * Math.sin(h + Math.PI / 4)];
        a.push(...this.helper.doubleLineOps(m[0], m[1], x[0], x[1], i), ...this.helper.doubleLineOps(x[0], x[1], y[0], y[1], i));
      }
    })), a;
  }
}
const Ut = {};
class tv {
  constructor(t) {
    this.seed = t;
  }
  next() {
    return this.seed ? (2 ** 31 - 1 & (this.seed = Math.imul(48271, this.seed))) / 2 ** 31 : Math.random();
  }
}
const ev = 0, jn = 1, mc = 2, ta = { A: 7, a: 7, C: 6, c: 6, H: 1, h: 1, L: 2, l: 2, M: 2, m: 2, Q: 4, q: 4, S: 4, s: 4, T: 2, t: 2, V: 1, v: 1, Z: 0, z: 0 };
function Yn(e, t) {
  return e.type === t;
}
function zo(e) {
  const t = [], r = (function(s) {
    const o = new Array();
    for (; s !== ""; ) if (s.match(/^([ \t\r\n,]+)/)) s = s.substr(RegExp.$1.length);
    else if (s.match(/^([aAcChHlLmMqQsStTvVzZ])/)) o[o.length] = { type: ev, text: RegExp.$1 }, s = s.substr(RegExp.$1.length);
    else {
      if (!s.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/)) return [];
      o[o.length] = { type: jn, text: `${parseFloat(RegExp.$1)}` }, s = s.substr(RegExp.$1.length);
    }
    return o[o.length] = { type: mc, text: "" }, o;
  })(e);
  let i = "BOD", a = 0, n = r[a];
  for (; !Yn(n, mc); ) {
    let s = 0;
    const o = [];
    if (i === "BOD") {
      if (n.text !== "M" && n.text !== "m") return zo("M0,0" + e);
      a++, s = ta[n.text], i = n.text;
    } else Yn(n, jn) ? s = ta[i] : (a++, s = ta[n.text], i = n.text);
    if (!(a + s < r.length)) throw new Error("Path data ended short");
    for (let l = a; l < a + s; l++) {
      const c = r[l];
      if (!Yn(c, jn)) throw new Error("Param not a number: " + i + "," + c.text);
      o[o.length] = +c.text;
    }
    if (typeof ta[i] != "number") throw new Error("Bad segment: " + i);
    {
      const l = { key: i, data: o };
      t.push(l), a += s, n = r[a], i === "M" && (i = "L"), i === "m" && (i = "l");
    }
  }
  return t;
}
function dd(e) {
  let t = 0, r = 0, i = 0, a = 0;
  const n = [];
  for (const { key: s, data: o } of e) switch (s) {
    case "M":
      n.push({ key: "M", data: [...o] }), [t, r] = o, [i, a] = o;
      break;
    case "m":
      t += o[0], r += o[1], n.push({ key: "M", data: [t, r] }), i = t, a = r;
      break;
    case "L":
      n.push({ key: "L", data: [...o] }), [t, r] = o;
      break;
    case "l":
      t += o[0], r += o[1], n.push({ key: "L", data: [t, r] });
      break;
    case "C":
      n.push({ key: "C", data: [...o] }), t = o[4], r = o[5];
      break;
    case "c": {
      const l = o.map(((c, h) => h % 2 ? c + r : c + t));
      n.push({ key: "C", data: l }), t = l[4], r = l[5];
      break;
    }
    case "Q":
      n.push({ key: "Q", data: [...o] }), t = o[2], r = o[3];
      break;
    case "q": {
      const l = o.map(((c, h) => h % 2 ? c + r : c + t));
      n.push({ key: "Q", data: l }), t = l[2], r = l[3];
      break;
    }
    case "A":
      n.push({ key: "A", data: [...o] }), t = o[5], r = o[6];
      break;
    case "a":
      t += o[5], r += o[6], n.push({ key: "A", data: [o[0], o[1], o[2], o[3], o[4], t, r] });
      break;
    case "H":
      n.push({ key: "H", data: [...o] }), t = o[0];
      break;
    case "h":
      t += o[0], n.push({ key: "H", data: [t] });
      break;
    case "V":
      n.push({ key: "V", data: [...o] }), r = o[0];
      break;
    case "v":
      r += o[0], n.push({ key: "V", data: [r] });
      break;
    case "S":
      n.push({ key: "S", data: [...o] }), t = o[2], r = o[3];
      break;
    case "s": {
      const l = o.map(((c, h) => h % 2 ? c + r : c + t));
      n.push({ key: "S", data: l }), t = l[2], r = l[3];
      break;
    }
    case "T":
      n.push({ key: "T", data: [...o] }), t = o[0], r = o[1];
      break;
    case "t":
      t += o[0], r += o[1], n.push({ key: "T", data: [t, r] });
      break;
    case "Z":
    case "z":
      n.push({ key: "Z", data: [] }), t = i, r = a;
  }
  return n;
}
function pd(e) {
  const t = [];
  let r = "", i = 0, a = 0, n = 0, s = 0, o = 0, l = 0;
  for (const { key: c, data: h } of e) {
    switch (c) {
      case "M":
        t.push({ key: "M", data: [...h] }), [i, a] = h, [n, s] = h;
        break;
      case "C":
        t.push({ key: "C", data: [...h] }), i = h[4], a = h[5], o = h[2], l = h[3];
        break;
      case "L":
        t.push({ key: "L", data: [...h] }), [i, a] = h;
        break;
      case "H":
        i = h[0], t.push({ key: "L", data: [i, a] });
        break;
      case "V":
        a = h[0], t.push({ key: "L", data: [i, a] });
        break;
      case "S": {
        let u = 0, f = 0;
        r === "C" || r === "S" ? (u = i + (i - o), f = a + (a - l)) : (u = i, f = a), t.push({ key: "C", data: [u, f, ...h] }), o = h[0], l = h[1], i = h[2], a = h[3];
        break;
      }
      case "T": {
        const [u, f] = h;
        let d = 0, g = 0;
        r === "Q" || r === "T" ? (d = i + (i - o), g = a + (a - l)) : (d = i, g = a);
        const m = i + 2 * (d - i) / 3, y = a + 2 * (g - a) / 3, x = u + 2 * (d - u) / 3, b = f + 2 * (g - f) / 3;
        t.push({ key: "C", data: [m, y, x, b, u, f] }), o = d, l = g, i = u, a = f;
        break;
      }
      case "Q": {
        const [u, f, d, g] = h, m = i + 2 * (u - i) / 3, y = a + 2 * (f - a) / 3, x = d + 2 * (u - d) / 3, b = g + 2 * (f - g) / 3;
        t.push({ key: "C", data: [m, y, x, b, d, g] }), o = u, l = f, i = d, a = g;
        break;
      }
      case "A": {
        const u = Math.abs(h[0]), f = Math.abs(h[1]), d = h[2], g = h[3], m = h[4], y = h[5], x = h[6];
        u === 0 || f === 0 ? (t.push({ key: "C", data: [i, a, y, x, y, x] }), i = y, a = x) : (i !== y || a !== x) && (gd(i, a, y, x, u, f, d, g, m).forEach((function(b) {
          t.push({ key: "C", data: b });
        })), i = y, a = x);
        break;
      }
      case "Z":
        t.push({ key: "Z", data: [] }), i = n, a = s;
    }
    r = c;
  }
  return t;
}
function si(e, t, r) {
  return [e * Math.cos(r) - t * Math.sin(r), e * Math.sin(r) + t * Math.cos(r)];
}
function gd(e, t, r, i, a, n, s, o, l, c) {
  const h = (u = s, Math.PI * u / 180);
  var u;
  let f = [], d = 0, g = 0, m = 0, y = 0;
  if (c) [d, g, m, y] = c;
  else {
    [e, t] = si(e, t, -h), [r, i] = si(r, i, -h);
    const R = (e - r) / 2, B = (t - i) / 2;
    let L = R * R / (a * a) + B * B / (n * n);
    L > 1 && (L = Math.sqrt(L), a *= L, n *= L);
    const T = a * a, $ = n * n, M = T * $ - T * B * B - $ * R * R, q = T * B * B + $ * R * R, X = (o === l ? -1 : 1) * Math.sqrt(Math.abs(M / q));
    m = X * a * B / n + (e + r) / 2, y = X * -n * R / a + (t + i) / 2, d = Math.asin(parseFloat(((t - y) / n).toFixed(9))), g = Math.asin(parseFloat(((i - y) / n).toFixed(9))), e < m && (d = Math.PI - d), r < m && (g = Math.PI - g), d < 0 && (d = 2 * Math.PI + d), g < 0 && (g = 2 * Math.PI + g), l && d > g && (d -= 2 * Math.PI), !l && g > d && (g -= 2 * Math.PI);
  }
  let x = g - d;
  if (Math.abs(x) > 120 * Math.PI / 180) {
    const R = g, B = r, L = i;
    g = l && g > d ? d + 120 * Math.PI / 180 * 1 : d + 120 * Math.PI / 180 * -1, f = gd(r = m + a * Math.cos(g), i = y + n * Math.sin(g), B, L, a, n, s, 0, l, [g, R, m, y]);
  }
  x = g - d;
  const b = Math.cos(d), C = Math.sin(d), v = Math.cos(g), k = Math.sin(g), A = Math.tan(x / 4), S = 4 / 3 * a * A, D = 4 / 3 * n * A, I = [e, t], O = [e + S * C, t - D * b], E = [r + S * k, i - D * v], N = [r, i];
  if (O[0] = 2 * I[0] - O[0], O[1] = 2 * I[1] - O[1], c) return [O, E, N].concat(f);
  {
    f = [O, E, N].concat(f);
    const R = [];
    for (let B = 0; B < f.length; B += 3) {
      const L = si(f[B][0], f[B][1], h), T = si(f[B + 1][0], f[B + 1][1], h), $ = si(f[B + 2][0], f[B + 2][1], h);
      R.push([L[0], L[1], T[0], T[1], $[0], $[1]]);
    }
    return R;
  }
}
const rv = { randOffset: function(e, t) {
  return at(e, t);
}, randOffsetWithRange: function(e, t, r) {
  return Ya(e, t, r);
}, ellipse: function(e, t, r, i, a) {
  const n = yd(r, i, a);
  return Is(e, t, a, n).opset;
}, doubleLineOps: function(e, t, r, i, a) {
  return ze(e, t, r, i, a, !0);
} };
function md(e, t, r, i, a) {
  return { type: "path", ops: ze(e, t, r, i, a) };
}
function ga(e, t, r) {
  const i = (e || []).length;
  if (i > 2) {
    const a = [];
    for (let n = 0; n < i - 1; n++) a.push(...ze(e[n][0], e[n][1], e[n + 1][0], e[n + 1][1], r));
    return t && a.push(...ze(e[i - 1][0], e[i - 1][1], e[0][0], e[0][1], r)), { type: "path", ops: a };
  }
  return i === 2 ? md(e[0][0], e[0][1], e[1][0], e[1][1], r) : { type: "path", ops: [] };
}
function iv(e, t, r, i, a) {
  return (function(n, s) {
    return ga(n, !0, s);
  })([[e, t], [e + r, t], [e + r, t + i], [e, t + i]], a);
}
function yc(e, t) {
  if (e.length) {
    const r = typeof e[0][0] == "number" ? [e] : e, i = ea(r[0], 1 * (1 + 0.2 * t.roughness), t), a = t.disableMultiStroke ? [] : ea(r[0], 1.5 * (1 + 0.22 * t.roughness), Cc(t));
    for (let n = 1; n < r.length; n++) {
      const s = r[n];
      if (s.length) {
        const o = ea(s, 1 * (1 + 0.2 * t.roughness), t), l = t.disableMultiStroke ? [] : ea(s, 1.5 * (1 + 0.22 * t.roughness), Cc(t));
        for (const c of o) c.op !== "move" && i.push(c);
        for (const c of l) c.op !== "move" && a.push(c);
      }
    }
    return { type: "path", ops: i.concat(a) };
  }
  return { type: "path", ops: [] };
}
function yd(e, t, r) {
  const i = Math.sqrt(2 * Math.PI * Math.sqrt((Math.pow(e / 2, 2) + Math.pow(t / 2, 2)) / 2)), a = Math.ceil(Math.max(r.curveStepCount, r.curveStepCount / Math.sqrt(200) * i)), n = 2 * Math.PI / a;
  let s = Math.abs(e / 2), o = Math.abs(t / 2);
  const l = 1 - r.curveFitting;
  return s += at(s * l, r), o += at(o * l, r), { increment: n, rx: s, ry: o };
}
function Is(e, t, r, i) {
  const [a, n] = wc(i.increment, e, t, i.rx, i.ry, 1, i.increment * Ya(0.1, Ya(0.4, 1, r), r), r);
  let s = Ua(a, null, r);
  if (!r.disableMultiStroke && r.roughness !== 0) {
    const [o] = wc(i.increment, e, t, i.rx, i.ry, 1.5, 0, r), l = Ua(o, null, r);
    s = s.concat(l);
  }
  return { estimatedPoints: n, opset: { type: "path", ops: s } };
}
function xc(e, t, r, i, a, n, s, o, l) {
  const c = e, h = t;
  let u = Math.abs(r / 2), f = Math.abs(i / 2);
  u += at(0.01 * u, l), f += at(0.01 * f, l);
  let d = a, g = n;
  for (; d < 0; ) d += 2 * Math.PI, g += 2 * Math.PI;
  g - d > 2 * Math.PI && (d = 0, g = 2 * Math.PI);
  const m = 2 * Math.PI / l.curveStepCount, y = Math.min(m / 2, (g - d) / 2), x = kc(y, c, h, u, f, d, g, 1, l);
  if (!l.disableMultiStroke) {
    const b = kc(y, c, h, u, f, d, g, 1.5, l);
    x.push(...b);
  }
  return s && (o ? x.push(...ze(c, h, c + u * Math.cos(d), h + f * Math.sin(d), l), ...ze(c, h, c + u * Math.cos(g), h + f * Math.sin(g), l)) : x.push({ op: "lineTo", data: [c, h] }, { op: "lineTo", data: [c + u * Math.cos(d), h + f * Math.sin(d)] })), { type: "path", ops: x };
}
function bc(e, t) {
  const r = pd(dd(zo(e))), i = [];
  let a = [0, 0], n = [0, 0];
  for (const { key: s, data: o } of r) switch (s) {
    case "M":
      n = [o[0], o[1]], a = [o[0], o[1]];
      break;
    case "L":
      i.push(...ze(n[0], n[1], o[0], o[1], t)), n = [o[0], o[1]];
      break;
    case "C": {
      const [l, c, h, u, f, d] = o;
      i.push(...av(l, c, h, u, f, d, n, t)), n = [f, d];
      break;
    }
    case "Z":
      i.push(...ze(n[0], n[1], a[0], a[1], t)), n = [a[0], a[1]];
  }
  return { type: "path", ops: i };
}
function Un(e, t) {
  const r = [];
  for (const i of e) if (i.length) {
    const a = t.maxRandomnessOffset || 0, n = i.length;
    if (n > 2) {
      r.push({ op: "move", data: [i[0][0] + at(a, t), i[0][1] + at(a, t)] });
      for (let s = 1; s < n; s++) r.push({ op: "lineTo", data: [i[s][0] + at(a, t), i[s][1] + at(a, t)] });
    }
  }
  return { type: "fillPath", ops: r };
}
function Cr(e, t) {
  return (function(r, i) {
    let a = r.fillStyle || "hachure";
    if (!Ut[a]) switch (a) {
      case "zigzag":
        Ut[a] || (Ut[a] = new Vk(i));
        break;
      case "cross-hatch":
        Ut[a] || (Ut[a] = new Zk(i));
        break;
      case "dots":
        Ut[a] || (Ut[a] = new Kk(i));
        break;
      case "dashed":
        Ut[a] || (Ut[a] = new Qk(i));
        break;
      case "zigzag-line":
        Ut[a] || (Ut[a] = new Jk(i));
        break;
      default:
        a = "hachure", Ut[a] || (Ut[a] = new No(i));
    }
    return Ut[a];
  })(t, rv).fillPolygons(e, t);
}
function Cc(e) {
  const t = Object.assign({}, e);
  return t.randomizer = void 0, e.seed && (t.seed = e.seed + 1), t;
}
function xd(e) {
  return e.randomizer || (e.randomizer = new tv(e.seed || 0)), e.randomizer.next();
}
function Ya(e, t, r, i = 1) {
  return r.roughness * i * (xd(r) * (t - e) + e);
}
function at(e, t, r = 1) {
  return Ya(-e, e, t, r);
}
function ze(e, t, r, i, a, n = !1) {
  const s = n ? a.disableMultiStrokeFill : a.disableMultiStroke, o = Ps(e, t, r, i, a, !0, !1);
  if (s) return o;
  const l = Ps(e, t, r, i, a, !0, !0);
  return o.concat(l);
}
function Ps(e, t, r, i, a, n, s) {
  const o = Math.pow(e - r, 2) + Math.pow(t - i, 2), l = Math.sqrt(o);
  let c = 1;
  c = l < 200 ? 1 : l > 500 ? 0.4 : -16668e-7 * l + 1.233334;
  let h = a.maxRandomnessOffset || 0;
  h * h * 100 > o && (h = l / 10);
  const u = h / 2, f = 0.2 + 0.2 * xd(a);
  let d = a.bowing * a.maxRandomnessOffset * (i - t) / 200, g = a.bowing * a.maxRandomnessOffset * (e - r) / 200;
  d = at(d, a, c), g = at(g, a, c);
  const m = [], y = () => at(u, a, c), x = () => at(h, a, c), b = a.preserveVertices;
  return s ? m.push({ op: "move", data: [e + (b ? 0 : y()), t + (b ? 0 : y())] }) : m.push({ op: "move", data: [e + (b ? 0 : at(h, a, c)), t + (b ? 0 : at(h, a, c))] }), s ? m.push({ op: "bcurveTo", data: [d + e + (r - e) * f + y(), g + t + (i - t) * f + y(), d + e + 2 * (r - e) * f + y(), g + t + 2 * (i - t) * f + y(), r + (b ? 0 : y()), i + (b ? 0 : y())] }) : m.push({ op: "bcurveTo", data: [d + e + (r - e) * f + x(), g + t + (i - t) * f + x(), d + e + 2 * (r - e) * f + x(), g + t + 2 * (i - t) * f + x(), r + (b ? 0 : x()), i + (b ? 0 : x())] }), m;
}
function ea(e, t, r) {
  if (!e.length) return [];
  const i = [];
  i.push([e[0][0] + at(t, r), e[0][1] + at(t, r)]), i.push([e[0][0] + at(t, r), e[0][1] + at(t, r)]);
  for (let a = 1; a < e.length; a++) i.push([e[a][0] + at(t, r), e[a][1] + at(t, r)]), a === e.length - 1 && i.push([e[a][0] + at(t, r), e[a][1] + at(t, r)]);
  return Ua(i, null, r);
}
function Ua(e, t, r) {
  const i = e.length, a = [];
  if (i > 3) {
    const n = [], s = 1 - r.curveTightness;
    a.push({ op: "move", data: [e[1][0], e[1][1]] });
    for (let o = 1; o + 2 < i; o++) {
      const l = e[o];
      n[0] = [l[0], l[1]], n[1] = [l[0] + (s * e[o + 1][0] - s * e[o - 1][0]) / 6, l[1] + (s * e[o + 1][1] - s * e[o - 1][1]) / 6], n[2] = [e[o + 1][0] + (s * e[o][0] - s * e[o + 2][0]) / 6, e[o + 1][1] + (s * e[o][1] - s * e[o + 2][1]) / 6], n[3] = [e[o + 1][0], e[o + 1][1]], a.push({ op: "bcurveTo", data: [n[1][0], n[1][1], n[2][0], n[2][1], n[3][0], n[3][1]] });
    }
  } else i === 3 ? (a.push({ op: "move", data: [e[1][0], e[1][1]] }), a.push({ op: "bcurveTo", data: [e[1][0], e[1][1], e[2][0], e[2][1], e[2][0], e[2][1]] })) : i === 2 && a.push(...Ps(e[0][0], e[0][1], e[1][0], e[1][1], r, !0, !0));
  return a;
}
function wc(e, t, r, i, a, n, s, o) {
  const l = [], c = [];
  if (o.roughness === 0) {
    e /= 4, c.push([t + i * Math.cos(-e), r + a * Math.sin(-e)]);
    for (let h = 0; h <= 2 * Math.PI; h += e) {
      const u = [t + i * Math.cos(h), r + a * Math.sin(h)];
      l.push(u), c.push(u);
    }
    c.push([t + i * Math.cos(0), r + a * Math.sin(0)]), c.push([t + i * Math.cos(e), r + a * Math.sin(e)]);
  } else {
    const h = at(0.5, o) - Math.PI / 2;
    c.push([at(n, o) + t + 0.9 * i * Math.cos(h - e), at(n, o) + r + 0.9 * a * Math.sin(h - e)]);
    const u = 2 * Math.PI + h - 0.01;
    for (let f = h; f < u; f += e) {
      const d = [at(n, o) + t + i * Math.cos(f), at(n, o) + r + a * Math.sin(f)];
      l.push(d), c.push(d);
    }
    c.push([at(n, o) + t + i * Math.cos(h + 2 * Math.PI + 0.5 * s), at(n, o) + r + a * Math.sin(h + 2 * Math.PI + 0.5 * s)]), c.push([at(n, o) + t + 0.98 * i * Math.cos(h + s), at(n, o) + r + 0.98 * a * Math.sin(h + s)]), c.push([at(n, o) + t + 0.9 * i * Math.cos(h + 0.5 * s), at(n, o) + r + 0.9 * a * Math.sin(h + 0.5 * s)]);
  }
  return [c, l];
}
function kc(e, t, r, i, a, n, s, o, l) {
  const c = n + at(0.1, l), h = [];
  h.push([at(o, l) + t + 0.9 * i * Math.cos(c - e), at(o, l) + r + 0.9 * a * Math.sin(c - e)]);
  for (let u = c; u <= s; u += e) h.push([at(o, l) + t + i * Math.cos(u), at(o, l) + r + a * Math.sin(u)]);
  return h.push([t + i * Math.cos(s), r + a * Math.sin(s)]), h.push([t + i * Math.cos(s), r + a * Math.sin(s)]), Ua(h, null, l);
}
function av(e, t, r, i, a, n, s, o) {
  const l = [], c = [o.maxRandomnessOffset || 1, (o.maxRandomnessOffset || 1) + 0.3];
  let h = [0, 0];
  const u = o.disableMultiStroke ? 1 : 2, f = o.preserveVertices;
  for (let d = 0; d < u; d++) d === 0 ? l.push({ op: "move", data: [s[0], s[1]] }) : l.push({ op: "move", data: [s[0] + (f ? 0 : at(c[0], o)), s[1] + (f ? 0 : at(c[0], o))] }), h = f ? [a, n] : [a + at(c[d], o), n + at(c[d], o)], l.push({ op: "bcurveTo", data: [e + at(c[d], o), t + at(c[d], o), r + at(c[d], o), i + at(c[d], o), h[0], h[1]] });
  return l;
}
function oi(e) {
  return [...e];
}
function vc(e, t = 0) {
  const r = e.length;
  if (r < 3) throw new Error("A curve must have at least three points.");
  const i = [];
  if (r === 3) i.push(oi(e[0]), oi(e[1]), oi(e[2]), oi(e[2]));
  else {
    const a = [];
    a.push(e[0], e[0]);
    for (let o = 1; o < e.length; o++) a.push(e[o]), o === e.length - 1 && a.push(e[o]);
    const n = [], s = 1 - t;
    i.push(oi(a[0]));
    for (let o = 1; o + 2 < a.length; o++) {
      const l = a[o];
      n[0] = [l[0], l[1]], n[1] = [l[0] + (s * a[o + 1][0] - s * a[o - 1][0]) / 6, l[1] + (s * a[o + 1][1] - s * a[o - 1][1]) / 6], n[2] = [a[o + 1][0] + (s * a[o][0] - s * a[o + 2][0]) / 6, a[o + 1][1] + (s * a[o][1] - s * a[o + 2][1]) / 6], n[3] = [a[o + 1][0], a[o + 1][1]], i.push(n[1], n[2], n[3]);
    }
  }
  return i;
}
function ma(e, t) {
  return Math.pow(e[0] - t[0], 2) + Math.pow(e[1] - t[1], 2);
}
function nv(e, t, r) {
  const i = ma(t, r);
  if (i === 0) return ma(e, t);
  let a = ((e[0] - t[0]) * (r[0] - t[0]) + (e[1] - t[1]) * (r[1] - t[1])) / i;
  return a = Math.max(0, Math.min(1, a)), ma(e, Ke(t, r, a));
}
function Ke(e, t, r) {
  return [e[0] + (t[0] - e[0]) * r, e[1] + (t[1] - e[1]) * r];
}
function Ns(e, t, r, i) {
  const a = i || [];
  if ((function(o, l) {
    const c = o[l + 0], h = o[l + 1], u = o[l + 2], f = o[l + 3];
    let d = 3 * h[0] - 2 * c[0] - f[0];
    d *= d;
    let g = 3 * h[1] - 2 * c[1] - f[1];
    g *= g;
    let m = 3 * u[0] - 2 * f[0] - c[0];
    m *= m;
    let y = 3 * u[1] - 2 * f[1] - c[1];
    return y *= y, d < m && (d = m), g < y && (g = y), d + g;
  })(e, t) < r) {
    const o = e[t + 0];
    a.length ? (n = a[a.length - 1], s = o, Math.sqrt(ma(n, s)) > 1 && a.push(o)) : a.push(o), a.push(e[t + 3]);
  } else {
    const l = e[t + 0], c = e[t + 1], h = e[t + 2], u = e[t + 3], f = Ke(l, c, 0.5), d = Ke(c, h, 0.5), g = Ke(h, u, 0.5), m = Ke(f, d, 0.5), y = Ke(d, g, 0.5), x = Ke(m, y, 0.5);
    Ns([l, f, m, x], 0, r, a), Ns([x, y, g, u], 0, r, a);
  }
  var n, s;
  return a;
}
function sv(e, t) {
  return Ga(e, 0, e.length, t);
}
function Ga(e, t, r, i, a) {
  const n = a || [], s = e[t], o = e[r - 1];
  let l = 0, c = 1;
  for (let h = t + 1; h < r - 1; ++h) {
    const u = nv(e[h], s, o);
    u > l && (l = u, c = h);
  }
  return Math.sqrt(l) > i ? (Ga(e, t, c + 1, i, n), Ga(e, c, r, i, n)) : (n.length || n.push(s), n.push(o)), n;
}
function Gn(e, t = 0.15, r) {
  const i = [], a = (e.length - 1) / 3;
  for (let n = 0; n < a; n++)
    Ns(e, 3 * n, t, i);
  return r && r > 0 ? Ga(i, 0, i.length, r) : i;
}
const Vt = "none";
class Xa {
  constructor(t) {
    this.defaultOptions = { maxRandomnessOffset: 2, roughness: 1, bowing: 1, stroke: "#000", strokeWidth: 1, curveTightness: 0, curveFitting: 0.95, curveStepCount: 9, fillStyle: "hachure", fillWeight: -1, hachureAngle: -41, hachureGap: -1, dashOffset: -1, dashGap: -1, zigzagOffset: -1, seed: 0, disableMultiStroke: !1, disableMultiStrokeFill: !1, preserveVertices: !1, fillShapeRoughnessGain: 0.8 }, this.config = t || {}, this.config.options && (this.defaultOptions = this._o(this.config.options));
  }
  static newSeed() {
    return Math.floor(Math.random() * 2 ** 31);
  }
  _o(t) {
    return t ? Object.assign({}, this.defaultOptions, t) : this.defaultOptions;
  }
  _d(t, r, i) {
    return { shape: t, sets: r || [], options: i || this.defaultOptions };
  }
  line(t, r, i, a, n) {
    const s = this._o(n);
    return this._d("line", [md(t, r, i, a, s)], s);
  }
  rectangle(t, r, i, a, n) {
    const s = this._o(n), o = [], l = iv(t, r, i, a, s);
    if (s.fill) {
      const c = [[t, r], [t + i, r], [t + i, r + a], [t, r + a]];
      s.fillStyle === "solid" ? o.push(Un([c], s)) : o.push(Cr([c], s));
    }
    return s.stroke !== Vt && o.push(l), this._d("rectangle", o, s);
  }
  ellipse(t, r, i, a, n) {
    const s = this._o(n), o = [], l = yd(i, a, s), c = Is(t, r, s, l);
    if (s.fill) if (s.fillStyle === "solid") {
      const h = Is(t, r, s, l).opset;
      h.type = "fillPath", o.push(h);
    } else o.push(Cr([c.estimatedPoints], s));
    return s.stroke !== Vt && o.push(c.opset), this._d("ellipse", o, s);
  }
  circle(t, r, i, a) {
    const n = this.ellipse(t, r, i, i, a);
    return n.shape = "circle", n;
  }
  linearPath(t, r) {
    const i = this._o(r);
    return this._d("linearPath", [ga(t, !1, i)], i);
  }
  arc(t, r, i, a, n, s, o = !1, l) {
    const c = this._o(l), h = [], u = xc(t, r, i, a, n, s, o, !0, c);
    if (o && c.fill) if (c.fillStyle === "solid") {
      const f = Object.assign({}, c);
      f.disableMultiStroke = !0;
      const d = xc(t, r, i, a, n, s, !0, !1, f);
      d.type = "fillPath", h.push(d);
    } else h.push((function(f, d, g, m, y, x, b) {
      const C = f, v = d;
      let k = Math.abs(g / 2), A = Math.abs(m / 2);
      k += at(0.01 * k, b), A += at(0.01 * A, b);
      let S = y, D = x;
      for (; S < 0; ) S += 2 * Math.PI, D += 2 * Math.PI;
      D - S > 2 * Math.PI && (S = 0, D = 2 * Math.PI);
      const I = (D - S) / b.curveStepCount, O = [];
      for (let E = S; E <= D; E += I) O.push([C + k * Math.cos(E), v + A * Math.sin(E)]);
      return O.push([C + k * Math.cos(D), v + A * Math.sin(D)]), O.push([C, v]), Cr([O], b);
    })(t, r, i, a, n, s, c));
    return c.stroke !== Vt && h.push(u), this._d("arc", h, c);
  }
  curve(t, r) {
    const i = this._o(r), a = [], n = yc(t, i);
    if (i.fill && i.fill !== Vt) if (i.fillStyle === "solid") {
      const s = yc(t, Object.assign(Object.assign({}, i), { disableMultiStroke: !0, roughness: i.roughness ? i.roughness + i.fillShapeRoughnessGain : 0 }));
      a.push({ type: "fillPath", ops: this._mergedShape(s.ops) });
    } else {
      const s = [], o = t;
      if (o.length) {
        const l = typeof o[0][0] == "number" ? [o] : o;
        for (const c of l) c.length < 3 ? s.push(...c) : c.length === 3 ? s.push(...Gn(vc([c[0], c[0], c[1], c[2]]), 10, (1 + i.roughness) / 2)) : s.push(...Gn(vc(c), 10, (1 + i.roughness) / 2));
      }
      s.length && a.push(Cr([s], i));
    }
    return i.stroke !== Vt && a.push(n), this._d("curve", a, i);
  }
  polygon(t, r) {
    const i = this._o(r), a = [], n = ga(t, !0, i);
    return i.fill && (i.fillStyle === "solid" ? a.push(Un([t], i)) : a.push(Cr([t], i))), i.stroke !== Vt && a.push(n), this._d("polygon", a, i);
  }
  path(t, r) {
    const i = this._o(r), a = [];
    if (!t) return this._d("path", a, i);
    t = (t || "").replace(/\n/g, " ").replace(/(-\s)/g, "-").replace("/(ss)/g", " ");
    const n = i.fill && i.fill !== "transparent" && i.fill !== Vt, s = i.stroke !== Vt, o = !!(i.simplification && i.simplification < 1), l = (function(h, u, f) {
      const d = pd(dd(zo(h))), g = [];
      let m = [], y = [0, 0], x = [];
      const b = () => {
        x.length >= 4 && m.push(...Gn(x, u)), x = [];
      }, C = () => {
        b(), m.length && (g.push(m), m = []);
      };
      for (const { key: k, data: A } of d) switch (k) {
        case "M":
          C(), y = [A[0], A[1]], m.push(y);
          break;
        case "L":
          b(), m.push([A[0], A[1]]);
          break;
        case "C":
          if (!x.length) {
            const S = m.length ? m[m.length - 1] : y;
            x.push([S[0], S[1]]);
          }
          x.push([A[0], A[1]]), x.push([A[2], A[3]]), x.push([A[4], A[5]]);
          break;
        case "Z":
          b(), m.push([y[0], y[1]]);
      }
      if (C(), !f) return g;
      const v = [];
      for (const k of g) {
        const A = sv(k, f);
        A.length && v.push(A);
      }
      return v;
    })(t, 1, o ? 4 - 4 * (i.simplification || 1) : (1 + i.roughness) / 2), c = bc(t, i);
    if (n) if (i.fillStyle === "solid") if (l.length === 1) {
      const h = bc(t, Object.assign(Object.assign({}, i), { disableMultiStroke: !0, roughness: i.roughness ? i.roughness + i.fillShapeRoughnessGain : 0 }));
      a.push({ type: "fillPath", ops: this._mergedShape(h.ops) });
    } else a.push(Un(l, i));
    else a.push(Cr(l, i));
    return s && (o ? l.forEach(((h) => {
      a.push(ga(h, !1, i));
    })) : a.push(c)), this._d("path", a, i);
  }
  opsToPath(t, r) {
    let i = "";
    for (const a of t.ops) {
      const n = typeof r == "number" && r >= 0 ? a.data.map(((s) => +s.toFixed(r))) : a.data;
      switch (a.op) {
        case "move":
          i += `M${n[0]} ${n[1]} `;
          break;
        case "bcurveTo":
          i += `C${n[0]} ${n[1]}, ${n[2]} ${n[3]}, ${n[4]} ${n[5]} `;
          break;
        case "lineTo":
          i += `L${n[0]} ${n[1]} `;
      }
    }
    return i.trim();
  }
  toPaths(t) {
    const r = t.sets || [], i = t.options || this.defaultOptions, a = [];
    for (const n of r) {
      let s = null;
      switch (n.type) {
        case "path":
          s = { d: this.opsToPath(n), stroke: i.stroke, strokeWidth: i.strokeWidth, fill: Vt };
          break;
        case "fillPath":
          s = { d: this.opsToPath(n), stroke: Vt, strokeWidth: 0, fill: i.fill || Vt };
          break;
        case "fillSketch":
          s = this.fillSketch(n, i);
      }
      s && a.push(s);
    }
    return a;
  }
  fillSketch(t, r) {
    let i = r.fillWeight;
    return i < 0 && (i = r.strokeWidth / 2), { d: this.opsToPath(t), stroke: r.fill || Vt, strokeWidth: i, fill: Vt };
  }
  _mergedShape(t) {
    return t.filter(((r, i) => i === 0 || r.op !== "move"));
  }
}
class ov {
  constructor(t, r) {
    this.canvas = t, this.ctx = this.canvas.getContext("2d"), this.gen = new Xa(r);
  }
  draw(t) {
    const r = t.sets || [], i = t.options || this.getDefaultOptions(), a = this.ctx, n = t.options.fixedDecimalPlaceDigits;
    for (const s of r) switch (s.type) {
      case "path":
        a.save(), a.strokeStyle = i.stroke === "none" ? "transparent" : i.stroke, a.lineWidth = i.strokeWidth, i.strokeLineDash && a.setLineDash(i.strokeLineDash), i.strokeLineDashOffset && (a.lineDashOffset = i.strokeLineDashOffset), this._drawToContext(a, s, n), a.restore();
        break;
      case "fillPath": {
        a.save(), a.fillStyle = i.fill || "";
        const o = t.shape === "curve" || t.shape === "polygon" || t.shape === "path" ? "evenodd" : "nonzero";
        this._drawToContext(a, s, n, o), a.restore();
        break;
      }
      case "fillSketch":
        this.fillSketch(a, s, i);
    }
  }
  fillSketch(t, r, i) {
    let a = i.fillWeight;
    a < 0 && (a = i.strokeWidth / 2), t.save(), i.fillLineDash && t.setLineDash(i.fillLineDash), i.fillLineDashOffset && (t.lineDashOffset = i.fillLineDashOffset), t.strokeStyle = i.fill || "", t.lineWidth = a, this._drawToContext(t, r, i.fixedDecimalPlaceDigits), t.restore();
  }
  _drawToContext(t, r, i, a = "nonzero") {
    t.beginPath();
    for (const n of r.ops) {
      const s = typeof i == "number" && i >= 0 ? n.data.map(((o) => +o.toFixed(i))) : n.data;
      switch (n.op) {
        case "move":
          t.moveTo(s[0], s[1]);
          break;
        case "bcurveTo":
          t.bezierCurveTo(s[0], s[1], s[2], s[3], s[4], s[5]);
          break;
        case "lineTo":
          t.lineTo(s[0], s[1]);
      }
    }
    r.type === "fillPath" ? t.fill(a) : t.stroke();
  }
  get generator() {
    return this.gen;
  }
  getDefaultOptions() {
    return this.gen.defaultOptions;
  }
  line(t, r, i, a, n) {
    const s = this.gen.line(t, r, i, a, n);
    return this.draw(s), s;
  }
  rectangle(t, r, i, a, n) {
    const s = this.gen.rectangle(t, r, i, a, n);
    return this.draw(s), s;
  }
  ellipse(t, r, i, a, n) {
    const s = this.gen.ellipse(t, r, i, a, n);
    return this.draw(s), s;
  }
  circle(t, r, i, a) {
    const n = this.gen.circle(t, r, i, a);
    return this.draw(n), n;
  }
  linearPath(t, r) {
    const i = this.gen.linearPath(t, r);
    return this.draw(i), i;
  }
  polygon(t, r) {
    const i = this.gen.polygon(t, r);
    return this.draw(i), i;
  }
  arc(t, r, i, a, n, s, o = !1, l) {
    const c = this.gen.arc(t, r, i, a, n, s, o, l);
    return this.draw(c), c;
  }
  curve(t, r) {
    const i = this.gen.curve(t, r);
    return this.draw(i), i;
  }
  path(t, r) {
    const i = this.gen.path(t, r);
    return this.draw(i), i;
  }
}
const ra = "http://www.w3.org/2000/svg";
class lv {
  constructor(t, r) {
    this.svg = t, this.gen = new Xa(r);
  }
  draw(t) {
    const r = t.sets || [], i = t.options || this.getDefaultOptions(), a = this.svg.ownerDocument || window.document, n = a.createElementNS(ra, "g"), s = t.options.fixedDecimalPlaceDigits;
    for (const o of r) {
      let l = null;
      switch (o.type) {
        case "path":
          l = a.createElementNS(ra, "path"), l.setAttribute("d", this.opsToPath(o, s)), l.setAttribute("stroke", i.stroke), l.setAttribute("stroke-width", i.strokeWidth + ""), l.setAttribute("fill", "none"), i.strokeLineDash && l.setAttribute("stroke-dasharray", i.strokeLineDash.join(" ").trim()), i.strokeLineDashOffset && l.setAttribute("stroke-dashoffset", `${i.strokeLineDashOffset}`);
          break;
        case "fillPath":
          l = a.createElementNS(ra, "path"), l.setAttribute("d", this.opsToPath(o, s)), l.setAttribute("stroke", "none"), l.setAttribute("stroke-width", "0"), l.setAttribute("fill", i.fill || ""), t.shape !== "curve" && t.shape !== "polygon" || l.setAttribute("fill-rule", "evenodd");
          break;
        case "fillSketch":
          l = this.fillSketch(a, o, i);
      }
      l && n.appendChild(l);
    }
    return n;
  }
  fillSketch(t, r, i) {
    let a = i.fillWeight;
    a < 0 && (a = i.strokeWidth / 2);
    const n = t.createElementNS(ra, "path");
    return n.setAttribute("d", this.opsToPath(r, i.fixedDecimalPlaceDigits)), n.setAttribute("stroke", i.fill || ""), n.setAttribute("stroke-width", a + ""), n.setAttribute("fill", "none"), i.fillLineDash && n.setAttribute("stroke-dasharray", i.fillLineDash.join(" ").trim()), i.fillLineDashOffset && n.setAttribute("stroke-dashoffset", `${i.fillLineDashOffset}`), n;
  }
  get generator() {
    return this.gen;
  }
  getDefaultOptions() {
    return this.gen.defaultOptions;
  }
  opsToPath(t, r) {
    return this.gen.opsToPath(t, r);
  }
  line(t, r, i, a, n) {
    const s = this.gen.line(t, r, i, a, n);
    return this.draw(s);
  }
  rectangle(t, r, i, a, n) {
    const s = this.gen.rectangle(t, r, i, a, n);
    return this.draw(s);
  }
  ellipse(t, r, i, a, n) {
    const s = this.gen.ellipse(t, r, i, a, n);
    return this.draw(s);
  }
  circle(t, r, i, a) {
    const n = this.gen.circle(t, r, i, a);
    return this.draw(n);
  }
  linearPath(t, r) {
    const i = this.gen.linearPath(t, r);
    return this.draw(i);
  }
  polygon(t, r) {
    const i = this.gen.polygon(t, r);
    return this.draw(i);
  }
  arc(t, r, i, a, n, s, o = !1, l) {
    const c = this.gen.arc(t, r, i, a, n, s, o, l);
    return this.draw(c);
  }
  curve(t, r) {
    const i = this.gen.curve(t, r);
    return this.draw(i);
  }
  path(t, r) {
    const i = this.gen.path(t, r);
    return this.draw(i);
  }
}
var j = { canvas: (e, t) => new ov(e, t), svg: (e, t) => new lv(e, t), generator: (e) => new Xa(e), newSeed: () => Xa.newSeed() }, it = /* @__PURE__ */ p(async (e, t, r) => {
  let i;
  const a = t.useHtmlLabels || Bt(ft()?.htmlLabels);
  r ? i = r : i = "node default";
  const n = e.insert("g").attr("class", i).attr("id", t.domId || t.id), s = n.insert("g").attr("class", "label").attr("style", Rt(t.labelStyle));
  let o;
  t.label === void 0 ? o = "" : o = typeof t.label == "string" ? t.label : t.label[0];
  const l = await He(s, Jt(dr(o), ft()), {
    useHtmlLabels: a,
    width: t.width || ft().flowchart?.wrappingWidth,
    // @ts-expect-error -- This is currently not used. Should this be `classes` instead?
    cssClasses: "markdown-node-label",
    style: t.labelStyle,
    addSvgBackground: !!t.icon || !!t.img
  });
  let c = l.getBBox();
  const h = (t?.padding ?? 0) / 2;
  if (a) {
    const u = l.children[0], f = ht(l), d = u.getElementsByTagName("img");
    if (d) {
      const g = o.replace(/<img[^>]*>/g, "").trim() === "";
      await Promise.all(
        [...d].map(
          (m) => new Promise((y) => {
            function x() {
              if (m.style.display = "flex", m.style.flexDirection = "column", g) {
                const b = ft().fontSize ? ft().fontSize : window.getComputedStyle(document.body).fontSize, C = 5, [v = Ch.fontSize] = fn(b), k = v * C + "px";
                m.style.minWidth = k, m.style.maxWidth = k;
              } else
                m.style.width = "100%";
              y(m);
            }
            p(x, "setupImage"), setTimeout(() => {
              m.complete && x();
            }), m.addEventListener("error", x), m.addEventListener("load", x);
          })
        )
      );
    }
    c = u.getBoundingClientRect(), f.attr("width", c.width), f.attr("height", c.height);
  }
  return a ? s.attr("transform", "translate(" + -c.width / 2 + ", " + -c.height / 2 + ")") : s.attr("transform", "translate(0, " + -c.height / 2 + ")"), t.centerLabel && s.attr("transform", "translate(" + -c.width / 2 + ", " + -c.height / 2 + ")"), s.insert("rect", ":first-child"), { shapeSvg: n, bbox: c, halfPadding: h, label: s };
}, "labelHelper"), Xn = /* @__PURE__ */ p(async (e, t, r) => {
  const i = r.useHtmlLabels || Bt(ft()?.flowchart?.htmlLabels), a = e.insert("g").attr("class", "label").attr("style", r.labelStyle || ""), n = await He(a, Jt(dr(t), ft()), {
    useHtmlLabels: i,
    width: r.width || ft()?.flowchart?.wrappingWidth,
    style: r.labelStyle,
    addSvgBackground: !!r.icon || !!r.img
  });
  let s = n.getBBox();
  const o = r.padding / 2;
  if (Bt(ft()?.flowchart?.htmlLabels)) {
    const l = n.children[0], c = ht(n);
    s = l.getBoundingClientRect(), c.attr("width", s.width), c.attr("height", s.height);
  }
  return i ? a.attr("transform", "translate(" + -s.width / 2 + ", " + -s.height / 2 + ")") : a.attr("transform", "translate(0, " + -s.height / 2 + ")"), r.centerLabel && a.attr("transform", "translate(" + -s.width / 2 + ", " + -s.height / 2 + ")"), a.insert("rect", ":first-child"), { shapeSvg: e, bbox: s, halfPadding: o, label: a };
}, "insertLabel"), G = /* @__PURE__ */ p((e, t) => {
  const r = t.node().getBBox();
  e.width = r.width, e.height = r.height;
}, "updateNodeBounds"), rt = /* @__PURE__ */ p((e, t) => (e.look === "handDrawn" ? "rough-node" : "node") + " " + e.cssClasses + " " + (t || ""), "getNodeClasses");
function lt(e) {
  const t = e.map((r, i) => `${i === 0 ? "M" : "L"}${r.x},${r.y}`);
  return t.push("Z"), t.join(" ");
}
p(lt, "createPathFromPoints");
function We(e, t, r, i, a, n) {
  const s = [], l = r - e, c = i - t, h = l / n, u = 2 * Math.PI / h, f = t + c / 2;
  for (let d = 0; d <= 50; d++) {
    const g = d / 50, m = e + g * l, y = f + a * Math.sin(u * (m - e));
    s.push({ x: m, y });
  }
  return s;
}
p(We, "generateFullSineWavePoints");
function Mi(e, t, r, i, a, n) {
  const s = [], o = a * Math.PI / 180, h = (n * Math.PI / 180 - o) / (i - 1);
  for (let u = 0; u < i; u++) {
    const f = o + u * h, d = e + r * Math.cos(f), g = t + r * Math.sin(f);
    s.push({ x: -d, y: -g });
  }
  return s;
}
p(Mi, "generateCirclePoints");
var cv = /* @__PURE__ */ p((e, t) => {
  var r = e.x, i = e.y, a = t.x - r, n = t.y - i, s = e.width / 2, o = e.height / 2, l, c;
  return Math.abs(n) * s > Math.abs(a) * o ? (n < 0 && (o = -o), l = n === 0 ? 0 : o * a / n, c = o) : (a < 0 && (s = -s), l = s, c = a === 0 ? 0 : s * n / a), { x: r + l, y: i + c };
}, "intersectRect"), Gr = cv;
function bd(e, t) {
  t && e.attr("style", t);
}
p(bd, "applyStyle");
async function Cd(e) {
  const t = ht(document.createElementNS("http://www.w3.org/2000/svg", "foreignObject")), r = t.append("xhtml:div"), i = ft();
  let a = e.label;
  e.label && Rr(e.label) && (a = await io(e.label.replace(Yr.lineBreakRegex, `
`), i));
  const s = '<span class="' + (e.isNode ? "nodeLabel" : "edgeLabel") + '" ' + (e.labelStyle ? 'style="' + e.labelStyle + '"' : "") + // codeql [js/html-constructed-from-input] : false positive
  ">" + a + "</span>";
  return r.html(Jt(s, i)), bd(r, e.labelStyle), r.style("display", "inline-block"), r.style("padding-right", "1px"), r.style("white-space", "nowrap"), r.attr("xmlns", "http://www.w3.org/1999/xhtml"), t.node();
}
p(Cd, "addHtmlLabel");
var hv = /* @__PURE__ */ p(async (e, t, r, i) => {
  let a = e || "";
  if (typeof a == "object" && (a = a[0]), Bt(ft().flowchart.htmlLabels)) {
    a = a.replace(/\\n|\n/g, "<br />"), F.info("vertexText" + a);
    const n = {
      isNode: i,
      label: dr(a).replace(
        /fa[blrs]?:fa-[\w-]+/g,
        (o) => `<i class='${o.replace(":", " ")}'></i>`
      ),
      labelStyle: t && t.replace("fill:", "color:")
    };
    return await Cd(n);
  } else {
    const n = document.createElementNS("http://www.w3.org/2000/svg", "text");
    n.setAttribute("style", t.replace("color:", "fill:"));
    let s = [];
    typeof a == "string" ? s = a.split(/\\n|\n|<br\s*\/?>/gi) : Array.isArray(a) ? s = a : s = [];
    for (const o of s) {
      const l = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
      l.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), l.setAttribute("dy", "1em"), l.setAttribute("x", "0"), r ? l.setAttribute("class", "title-row") : l.setAttribute("class", "row"), l.textContent = o.trim(), n.appendChild(l);
    }
    return n;
  }
}, "createLabel"), er = hv, je = /* @__PURE__ */ p((e, t, r, i, a) => [
  "M",
  e + a,
  t,
  // Move to the first point
  "H",
  e + r - a,
  // Draw horizontal line to the beginning of the right corner
  "A",
  a,
  a,
  0,
  0,
  1,
  e + r,
  t + a,
  // Draw arc to the right top corner
  "V",
  t + i - a,
  // Draw vertical line down to the beginning of the right bottom corner
  "A",
  a,
  a,
  0,
  0,
  1,
  e + r - a,
  t + i,
  // Draw arc to the right bottom corner
  "H",
  e + a,
  // Draw horizontal line to the beginning of the left bottom corner
  "A",
  a,
  a,
  0,
  0,
  1,
  e,
  t + i - a,
  // Draw arc to the left bottom corner
  "V",
  t + a,
  // Draw vertical line up to the beginning of the left top corner
  "A",
  a,
  a,
  0,
  0,
  1,
  e + a,
  t,
  // Draw arc to the left top corner
  "Z"
  // Close the path
].join(" "), "createRoundedRectPathD"), wd = /* @__PURE__ */ p(async (e, t) => {
  F.info("Creating subgraph rect for ", t.id, t);
  const r = ft(), { themeVariables: i, handDrawnSeed: a } = r, { clusterBkg: n, clusterBorder: s } = i, { labelStyles: o, nodeStyles: l, borderStyles: c, backgroundStyles: h } = U(t), u = e.insert("g").attr("class", "cluster " + t.cssClasses).attr("id", t.id).attr("data-look", t.look), f = Bt(r.flowchart.htmlLabels), d = u.insert("g").attr("class", "cluster-label "), g = await He(d, t.label, {
    style: t.labelStyle,
    useHtmlLabels: f,
    isNode: !0
  });
  let m = g.getBBox();
  if (Bt(r.flowchart.htmlLabels)) {
    const S = g.children[0], D = ht(g);
    m = S.getBoundingClientRect(), D.attr("width", m.width), D.attr("height", m.height);
  }
  const y = t.width <= m.width + t.padding ? m.width + t.padding : t.width;
  t.width <= m.width + t.padding ? t.diff = (y - t.width) / 2 - t.padding : t.diff = -t.padding;
  const x = t.height, b = t.x - y / 2, C = t.y - x / 2;
  F.trace("Data ", t, JSON.stringify(t));
  let v;
  if (t.look === "handDrawn") {
    const S = j.svg(u), D = Y(t, {
      roughness: 0.7,
      fill: n,
      // fill: 'red',
      stroke: s,
      fillWeight: 3,
      seed: a
    }), I = S.path(je(b, C, y, x, 0), D);
    v = u.insert(() => (F.debug("Rough node insert CXC", I), I), ":first-child"), v.select("path:nth-child(2)").attr("style", c.join(";")), v.select("path").attr("style", h.join(";").replace("fill", "stroke"));
  } else
    v = u.insert("rect", ":first-child"), v.attr("style", l).attr("rx", t.rx).attr("ry", t.ry).attr("x", b).attr("y", C).attr("width", y).attr("height", x);
  const { subGraphTitleTopMargin: k } = ko(r);
  if (d.attr(
    "transform",
    // This puts the label on top of the box instead of inside it
    `translate(${t.x - m.width / 2}, ${t.y - t.height / 2 + k})`
  ), o) {
    const S = d.select("span");
    S && S.attr("style", o);
  }
  const A = v.node().getBBox();
  return t.offsetX = 0, t.width = A.width, t.height = A.height, t.offsetY = m.height - t.padding / 2, t.intersect = function(S) {
    return Gr(t, S);
  }, { cluster: u, labelBBox: m };
}, "rect"), uv = /* @__PURE__ */ p((e, t) => {
  const r = e.insert("g").attr("class", "note-cluster").attr("id", t.id), i = r.insert("rect", ":first-child"), a = 0 * t.padding, n = a / 2;
  i.attr("rx", t.rx).attr("ry", t.ry).attr("x", t.x - t.width / 2 - n).attr("y", t.y - t.height / 2 - n).attr("width", t.width + a).attr("height", t.height + a).attr("fill", "none");
  const s = i.node().getBBox();
  return t.width = s.width, t.height = s.height, t.intersect = function(o) {
    return Gr(t, o);
  }, { cluster: r, labelBBox: { width: 0, height: 0 } };
}, "noteGroup"), fv = /* @__PURE__ */ p(async (e, t) => {
  const r = ft(), { themeVariables: i, handDrawnSeed: a } = r, { altBackground: n, compositeBackground: s, compositeTitleBackground: o, nodeBorder: l } = i, c = e.insert("g").attr("class", t.cssClasses).attr("id", t.id).attr("data-id", t.id).attr("data-look", t.look), h = c.insert("g", ":first-child"), u = c.insert("g").attr("class", "cluster-label");
  let f = c.append("rect");
  const d = u.node().appendChild(await er(t.label, t.labelStyle, void 0, !0));
  let g = d.getBBox();
  if (Bt(r.flowchart.htmlLabels)) {
    const I = d.children[0], O = ht(d);
    g = I.getBoundingClientRect(), O.attr("width", g.width), O.attr("height", g.height);
  }
  const m = 0 * t.padding, y = m / 2, x = (t.width <= g.width + t.padding ? g.width + t.padding : t.width) + m;
  t.width <= g.width + t.padding ? t.diff = (x - t.width) / 2 - t.padding : t.diff = -t.padding;
  const b = t.height + m, C = t.height + m - g.height - 6, v = t.x - x / 2, k = t.y - b / 2;
  t.width = x;
  const A = t.y - t.height / 2 - y + g.height + 2;
  let S;
  if (t.look === "handDrawn") {
    const I = t.cssClasses.includes("statediagram-cluster-alt"), O = j.svg(c), E = t.rx || t.ry ? O.path(je(v, k, x, b, 10), {
      roughness: 0.7,
      fill: o,
      fillStyle: "solid",
      stroke: l,
      seed: a
    }) : O.rectangle(v, k, x, b, { seed: a });
    S = c.insert(() => E, ":first-child");
    const N = O.rectangle(v, A, x, C, {
      fill: I ? n : s,
      fillStyle: I ? "hachure" : "solid",
      stroke: l,
      seed: a
    });
    S = c.insert(() => E, ":first-child"), f = c.insert(() => N);
  } else
    S = h.insert("rect", ":first-child"), S.attr("class", "outer").attr("x", v).attr("y", k).attr("width", x).attr("height", b).attr("data-look", t.look), f.attr("class", "inner").attr("x", v).attr("y", A).attr("width", x).attr("height", C);
  u.attr(
    "transform",
    `translate(${t.x - g.width / 2}, ${k + 1 - (Bt(r.flowchart.htmlLabels) ? 0 : 3)})`
  );
  const D = S.node().getBBox();
  return t.height = D.height, t.offsetX = 0, t.offsetY = g.height - t.padding / 2, t.labelBBox = g, t.intersect = function(I) {
    return Gr(t, I);
  }, { cluster: c, labelBBox: g };
}, "roundedWithTitle"), dv = /* @__PURE__ */ p(async (e, t) => {
  F.info("Creating subgraph rect for ", t.id, t);
  const r = ft(), { themeVariables: i, handDrawnSeed: a } = r, { clusterBkg: n, clusterBorder: s } = i, { labelStyles: o, nodeStyles: l, borderStyles: c, backgroundStyles: h } = U(t), u = e.insert("g").attr("class", "cluster " + t.cssClasses).attr("id", t.id).attr("data-look", t.look), f = Bt(r.flowchart.htmlLabels), d = u.insert("g").attr("class", "cluster-label "), g = await He(d, t.label, {
    style: t.labelStyle,
    useHtmlLabels: f,
    isNode: !0,
    width: t.width
  });
  let m = g.getBBox();
  if (Bt(r.flowchart.htmlLabels)) {
    const S = g.children[0], D = ht(g);
    m = S.getBoundingClientRect(), D.attr("width", m.width), D.attr("height", m.height);
  }
  const y = t.width <= m.width + t.padding ? m.width + t.padding : t.width;
  t.width <= m.width + t.padding ? t.diff = (y - t.width) / 2 - t.padding : t.diff = -t.padding;
  const x = t.height, b = t.x - y / 2, C = t.y - x / 2;
  F.trace("Data ", t, JSON.stringify(t));
  let v;
  if (t.look === "handDrawn") {
    const S = j.svg(u), D = Y(t, {
      roughness: 0.7,
      fill: n,
      // fill: 'red',
      stroke: s,
      fillWeight: 4,
      seed: a
    }), I = S.path(je(b, C, y, x, t.rx), D);
    v = u.insert(() => (F.debug("Rough node insert CXC", I), I), ":first-child"), v.select("path:nth-child(2)").attr("style", c.join(";")), v.select("path").attr("style", h.join(";").replace("fill", "stroke"));
  } else
    v = u.insert("rect", ":first-child"), v.attr("style", l).attr("rx", t.rx).attr("ry", t.ry).attr("x", b).attr("y", C).attr("width", y).attr("height", x);
  const { subGraphTitleTopMargin: k } = ko(r);
  if (d.attr(
    "transform",
    // This puts the label on top of the box instead of inside it
    `translate(${t.x - m.width / 2}, ${t.y - t.height / 2 + k})`
  ), o) {
    const S = d.select("span");
    S && S.attr("style", o);
  }
  const A = v.node().getBBox();
  return t.offsetX = 0, t.width = A.width, t.height = A.height, t.offsetY = m.height - t.padding / 2, t.intersect = function(S) {
    return Gr(t, S);
  }, { cluster: u, labelBBox: m };
}, "kanbanSection"), pv = /* @__PURE__ */ p((e, t) => {
  const r = ft(), { themeVariables: i, handDrawnSeed: a } = r, { nodeBorder: n } = i, s = e.insert("g").attr("class", t.cssClasses).attr("id", t.id).attr("data-look", t.look), o = s.insert("g", ":first-child"), l = 0 * t.padding, c = t.width + l;
  t.diff = -t.padding;
  const h = t.height + l, u = t.x - c / 2, f = t.y - h / 2;
  t.width = c;
  let d;
  if (t.look === "handDrawn") {
    const y = j.svg(s).rectangle(u, f, c, h, {
      fill: "lightgrey",
      roughness: 0.5,
      strokeLineDash: [5],
      stroke: n,
      seed: a
    });
    d = s.insert(() => y, ":first-child");
  } else
    d = o.insert("rect", ":first-child"), d.attr("class", "divider").attr("x", u).attr("y", f).attr("width", c).attr("height", h).attr("data-look", t.look);
  const g = d.node().getBBox();
  return t.height = g.height, t.offsetX = 0, t.offsetY = 0, t.intersect = function(m) {
    return Gr(t, m);
  }, { cluster: s, labelBBox: {} };
}, "divider"), gv = wd, mv = {
  rect: wd,
  squareRect: gv,
  roundedWithTitle: fv,
  noteGroup: uv,
  divider: pv,
  kanbanSection: dv
}, kd = /* @__PURE__ */ new Map(), yv = /* @__PURE__ */ p(async (e, t) => {
  const r = t.shape || "rect", i = await mv[r](e, t);
  return kd.set(t.id, i), i;
}, "insertCluster"), CB = /* @__PURE__ */ p(() => {
  kd = /* @__PURE__ */ new Map();
}, "clear");
function vd(e, t) {
  return e.intersect(t);
}
p(vd, "intersectNode");
var xv = vd;
function _d(e, t, r, i) {
  var a = e.x, n = e.y, s = a - i.x, o = n - i.y, l = Math.sqrt(t * t * o * o + r * r * s * s), c = Math.abs(t * r * s / l);
  i.x < a && (c = -c);
  var h = Math.abs(t * r * o / l);
  return i.y < n && (h = -h), { x: a + c, y: n + h };
}
p(_d, "intersectEllipse");
var Sd = _d;
function Td(e, t, r) {
  return Sd(e, t, t, r);
}
p(Td, "intersectCircle");
var bv = Td;
function Bd(e, t, r, i) {
  {
    const a = t.y - e.y, n = e.x - t.x, s = t.x * e.y - e.x * t.y, o = a * r.x + n * r.y + s, l = a * i.x + n * i.y + s, c = 1e-6;
    if (o !== 0 && l !== 0 && zs(o, l))
      return;
    const h = i.y - r.y, u = r.x - i.x, f = i.x * r.y - r.x * i.y, d = h * e.x + u * e.y + f, g = h * t.x + u * t.y + f;
    if (Math.abs(d) < c && Math.abs(g) < c && zs(d, g))
      return;
    const m = a * u - h * n;
    if (m === 0)
      return;
    const y = Math.abs(m / 2);
    let x = n * f - u * s;
    const b = x < 0 ? (x - y) / m : (x + y) / m;
    x = h * s - a * f;
    const C = x < 0 ? (x - y) / m : (x + y) / m;
    return { x: b, y: C };
  }
}
p(Bd, "intersectLine");
function zs(e, t) {
  return e * t > 0;
}
p(zs, "sameSign");
var Cv = Bd;
function Ad(e, t, r) {
  let i = e.x, a = e.y, n = [], s = Number.POSITIVE_INFINITY, o = Number.POSITIVE_INFINITY;
  typeof t.forEach == "function" ? t.forEach(function(h) {
    s = Math.min(s, h.x), o = Math.min(o, h.y);
  }) : (s = Math.min(s, t.x), o = Math.min(o, t.y));
  let l = i - e.width / 2 - s, c = a - e.height / 2 - o;
  for (let h = 0; h < t.length; h++) {
    let u = t[h], f = t[h < t.length - 1 ? h + 1 : 0], d = Cv(
      e,
      r,
      { x: l + u.x, y: c + u.y },
      { x: l + f.x, y: c + f.y }
    );
    d && n.push(d);
  }
  return n.length ? (n.length > 1 && n.sort(function(h, u) {
    let f = h.x - r.x, d = h.y - r.y, g = Math.sqrt(f * f + d * d), m = u.x - r.x, y = u.y - r.y, x = Math.sqrt(m * m + y * y);
    return g < x ? -1 : g === x ? 0 : 1;
  }), n[0]) : e;
}
p(Ad, "intersectPolygon");
var wv = Ad, W = {
  node: xv,
  circle: bv,
  ellipse: Sd,
  polygon: wv,
  rect: Gr
};
function Ld(e, t) {
  const { labelStyles: r } = U(t);
  t.labelStyle = r;
  const i = rt(t);
  let a = i;
  i || (a = "anchor");
  const n = e.insert("g").attr("class", a).attr("id", t.domId || t.id), s = 1, { cssStyles: o } = t, l = j.svg(n), c = Y(t, { fill: "black", stroke: "none", fillStyle: "solid" });
  t.look !== "handDrawn" && (c.roughness = 0);
  const h = l.circle(0, 0, s * 2, c), u = n.insert(() => h, ":first-child");
  return u.attr("class", "anchor").attr("style", Rt(o)), G(t, u), t.intersect = function(f) {
    return F.info("Circle intersect", t, s, f), W.circle(t, s, f);
  }, n;
}
p(Ld, "anchor");
function Ws(e, t, r, i, a, n, s) {
  const l = (e + r) / 2, c = (t + i) / 2, h = Math.atan2(i - t, r - e), u = (r - e) / 2, f = (i - t) / 2, d = u / a, g = f / n, m = Math.sqrt(d ** 2 + g ** 2);
  if (m > 1)
    throw new Error("The given radii are too small to create an arc between the points.");
  const y = Math.sqrt(1 - m ** 2), x = l + y * n * Math.sin(h) * (s ? -1 : 1), b = c - y * a * Math.cos(h) * (s ? -1 : 1), C = Math.atan2((t - b) / n, (e - x) / a);
  let k = Math.atan2((i - b) / n, (r - x) / a) - C;
  s && k < 0 && (k += 2 * Math.PI), !s && k > 0 && (k -= 2 * Math.PI);
  const A = [];
  for (let S = 0; S < 20; S++) {
    const D = S / 19, I = C + D * k, O = x + a * Math.cos(I), E = b + n * Math.sin(I);
    A.push({ x: O, y: E });
  }
  return A;
}
p(Ws, "generateArcPoints");
async function Md(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: a, bbox: n } = await it(e, t, rt(t)), s = n.width + t.padding + 20, o = n.height + t.padding, l = o / 2, c = l / (2.5 + o / 50), { cssStyles: h } = t, u = [
    { x: s / 2, y: -o / 2 },
    { x: -s / 2, y: -o / 2 },
    ...Ws(-s / 2, -o / 2, -s / 2, o / 2, c, l, !1),
    { x: s / 2, y: o / 2 },
    ...Ws(s / 2, o / 2, s / 2, -o / 2, c, l, !0)
  ], f = j.svg(a), d = Y(t, {});
  t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
  const g = lt(u), m = f.path(g, d), y = a.insert(() => m, ":first-child");
  return y.attr("class", "basic label-container"), h && t.look !== "handDrawn" && y.selectAll("path").attr("style", h), i && t.look !== "handDrawn" && y.selectAll("path").attr("style", i), y.attr("transform", `translate(${c / 2}, 0)`), G(t, y), t.intersect = function(x) {
    return W.polygon(t, u, x);
  }, a;
}
p(Md, "bowTieRect");
function Ye(e, t, r, i) {
  return e.insert("polygon", ":first-child").attr(
    "points",
    i.map(function(a) {
      return a.x + "," + a.y;
    }).join(" ")
  ).attr("class", "label-container").attr("transform", "translate(" + -t / 2 + "," + r / 2 + ")");
}
p(Ye, "insertPolygonShape");
async function Ed(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: a, bbox: n } = await it(e, t, rt(t)), s = n.height + t.padding, o = 12, l = n.width + t.padding + o, c = 0, h = l, u = -s, f = 0, d = [
    { x: c + o, y: u },
    { x: h, y: u },
    { x: h, y: f },
    { x: c, y: f },
    { x: c, y: u + o },
    { x: c + o, y: u }
  ];
  let g;
  const { cssStyles: m } = t;
  if (t.look === "handDrawn") {
    const y = j.svg(a), x = Y(t, {}), b = lt(d), C = y.path(b, x);
    g = a.insert(() => C, ":first-child").attr("transform", `translate(${-l / 2}, ${s / 2})`), m && g.attr("style", m);
  } else
    g = Ye(a, l, s, d);
  return i && g.attr("style", i), G(t, g), t.intersect = function(y) {
    return W.polygon(t, d, y);
  }, a;
}
p(Ed, "card");
function $d(e, t) {
  const { nodeStyles: r } = U(t);
  t.label = "";
  const i = e.insert("g").attr("class", rt(t)).attr("id", t.domId ?? t.id), { cssStyles: a } = t, n = Math.max(28, t.width ?? 0), s = [
    { x: 0, y: n / 2 },
    { x: n / 2, y: 0 },
    { x: 0, y: -n / 2 },
    { x: -n / 2, y: 0 }
  ], o = j.svg(i), l = Y(t, {});
  t.look !== "handDrawn" && (l.roughness = 0, l.fillStyle = "solid");
  const c = lt(s), h = o.path(c, l), u = i.insert(() => h, ":first-child");
  return a && t.look !== "handDrawn" && u.selectAll("path").attr("style", a), r && t.look !== "handDrawn" && u.selectAll("path").attr("style", r), t.width = 28, t.height = 28, t.intersect = function(f) {
    return W.polygon(t, s, f);
  }, i;
}
p($d, "choice");
async function Wo(e, t, r) {
  const { labelStyles: i, nodeStyles: a } = U(t);
  t.labelStyle = i;
  const { shapeSvg: n, bbox: s, halfPadding: o } = await it(e, t, rt(t)), l = r?.padding ?? o, c = s.width / 2 + l;
  let h;
  const { cssStyles: u } = t;
  if (t.look === "handDrawn") {
    const f = j.svg(n), d = Y(t, {}), g = f.circle(0, 0, c * 2, d);
    h = n.insert(() => g, ":first-child"), h.attr("class", "basic label-container").attr("style", Rt(u));
  } else
    h = n.insert("circle", ":first-child").attr("class", "basic label-container").attr("style", a).attr("r", c).attr("cx", 0).attr("cy", 0);
  return G(t, h), t.calcIntersect = function(f, d) {
    const g = f.width / 2;
    return W.circle(f, g, d);
  }, t.intersect = function(f) {
    return F.info("Circle intersect", t, c, f), W.circle(t, c, f);
  }, n;
}
p(Wo, "circle");
function Fd(e) {
  const t = Math.cos(Math.PI / 4), r = Math.sin(Math.PI / 4), i = e * 2, a = { x: i / 2 * t, y: i / 2 * r }, n = { x: -(i / 2) * t, y: i / 2 * r }, s = { x: -(i / 2) * t, y: -(i / 2) * r }, o = { x: i / 2 * t, y: -(i / 2) * r };
  return `M ${n.x},${n.y} L ${o.x},${o.y}
                   M ${a.x},${a.y} L ${s.x},${s.y}`;
}
p(Fd, "createLine");
function Dd(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r, t.label = "";
  const a = e.insert("g").attr("class", rt(t)).attr("id", t.domId ?? t.id), n = Math.max(30, t?.width ?? 0), { cssStyles: s } = t, o = j.svg(a), l = Y(t, {});
  t.look !== "handDrawn" && (l.roughness = 0, l.fillStyle = "solid");
  const c = o.circle(0, 0, n * 2, l), h = Fd(n), u = o.path(h, l), f = a.insert(() => c, ":first-child");
  return f.insert(() => u), s && t.look !== "handDrawn" && f.selectAll("path").attr("style", s), i && t.look !== "handDrawn" && f.selectAll("path").attr("style", i), G(t, f), t.intersect = function(d) {
    return F.info("crossedCircle intersect", t, { radius: n, point: d }), W.circle(t, n, d);
  }, a;
}
p(Dd, "crossedCircle");
function Te(e, t, r, i = 100, a = 0, n = 180) {
  const s = [], o = a * Math.PI / 180, h = (n * Math.PI / 180 - o) / (i - 1);
  for (let u = 0; u < i; u++) {
    const f = o + u * h, d = e + r * Math.cos(f), g = t + r * Math.sin(f);
    s.push({ x: -d, y: -g });
  }
  return s;
}
p(Te, "generateCirclePoints");
async function Od(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: a, bbox: n, label: s } = await it(e, t, rt(t)), o = n.width + (t.padding ?? 0), l = n.height + (t.padding ?? 0), c = Math.max(5, l * 0.1), { cssStyles: h } = t, u = [
    ...Te(o / 2, -l / 2, c, 30, -90, 0),
    { x: -o / 2 - c, y: c },
    ...Te(o / 2 + c * 2, -c, c, 20, -180, -270),
    ...Te(o / 2 + c * 2, c, c, 20, -90, -180),
    { x: -o / 2 - c, y: -l / 2 },
    ...Te(o / 2, l / 2, c, 20, 0, 90)
  ], f = [
    { x: o / 2, y: -l / 2 - c },
    { x: -o / 2, y: -l / 2 - c },
    ...Te(o / 2, -l / 2, c, 20, -90, 0),
    { x: -o / 2 - c, y: -c },
    ...Te(o / 2 + o * 0.1, -c, c, 20, -180, -270),
    ...Te(o / 2 + o * 0.1, c, c, 20, -90, -180),
    { x: -o / 2 - c, y: l / 2 },
    ...Te(o / 2, l / 2, c, 20, 0, 90),
    { x: -o / 2, y: l / 2 + c },
    { x: o / 2, y: l / 2 + c }
  ], d = j.svg(a), g = Y(t, { fill: "none" });
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const y = lt(u).replace("Z", ""), x = d.path(y, g), b = lt(f), C = d.path(b, { ...g }), v = a.insert("g", ":first-child");
  return v.insert(() => C, ":first-child").attr("stroke-opacity", 0), v.insert(() => x, ":first-child"), v.attr("class", "text"), h && t.look !== "handDrawn" && v.selectAll("path").attr("style", h), i && t.look !== "handDrawn" && v.selectAll("path").attr("style", i), v.attr("transform", `translate(${c}, 0)`), s.attr(
    "transform",
    `translate(${-o / 2 + c - (n.x - (n.left ?? 0))},${-l / 2 + (t.padding ?? 0) / 2 - (n.y - (n.top ?? 0))})`
  ), G(t, v), t.intersect = function(k) {
    return W.polygon(t, f, k);
  }, a;
}
p(Od, "curlyBraceLeft");
function Be(e, t, r, i = 100, a = 0, n = 180) {
  const s = [], o = a * Math.PI / 180, h = (n * Math.PI / 180 - o) / (i - 1);
  for (let u = 0; u < i; u++) {
    const f = o + u * h, d = e + r * Math.cos(f), g = t + r * Math.sin(f);
    s.push({ x: d, y: g });
  }
  return s;
}
p(Be, "generateCirclePoints");
async function Rd(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: a, bbox: n, label: s } = await it(e, t, rt(t)), o = n.width + (t.padding ?? 0), l = n.height + (t.padding ?? 0), c = Math.max(5, l * 0.1), { cssStyles: h } = t, u = [
    ...Be(o / 2, -l / 2, c, 20, -90, 0),
    { x: o / 2 + c, y: -c },
    ...Be(o / 2 + c * 2, -c, c, 20, -180, -270),
    ...Be(o / 2 + c * 2, c, c, 20, -90, -180),
    { x: o / 2 + c, y: l / 2 },
    ...Be(o / 2, l / 2, c, 20, 0, 90)
  ], f = [
    { x: -o / 2, y: -l / 2 - c },
    { x: o / 2, y: -l / 2 - c },
    ...Be(o / 2, -l / 2, c, 20, -90, 0),
    { x: o / 2 + c, y: -c },
    ...Be(o / 2 + c * 2, -c, c, 20, -180, -270),
    ...Be(o / 2 + c * 2, c, c, 20, -90, -180),
    { x: o / 2 + c, y: l / 2 },
    ...Be(o / 2, l / 2, c, 20, 0, 90),
    { x: o / 2, y: l / 2 + c },
    { x: -o / 2, y: l / 2 + c }
  ], d = j.svg(a), g = Y(t, { fill: "none" });
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const y = lt(u).replace("Z", ""), x = d.path(y, g), b = lt(f), C = d.path(b, { ...g }), v = a.insert("g", ":first-child");
  return v.insert(() => C, ":first-child").attr("stroke-opacity", 0), v.insert(() => x, ":first-child"), v.attr("class", "text"), h && t.look !== "handDrawn" && v.selectAll("path").attr("style", h), i && t.look !== "handDrawn" && v.selectAll("path").attr("style", i), v.attr("transform", `translate(${-c}, 0)`), s.attr(
    "transform",
    `translate(${-o / 2 + (t.padding ?? 0) / 2 - (n.x - (n.left ?? 0))},${-l / 2 + (t.padding ?? 0) / 2 - (n.y - (n.top ?? 0))})`
  ), G(t, v), t.intersect = function(k) {
    return W.polygon(t, f, k);
  }, a;
}
p(Rd, "curlyBraceRight");
function Lt(e, t, r, i = 100, a = 0, n = 180) {
  const s = [], o = a * Math.PI / 180, h = (n * Math.PI / 180 - o) / (i - 1);
  for (let u = 0; u < i; u++) {
    const f = o + u * h, d = e + r * Math.cos(f), g = t + r * Math.sin(f);
    s.push({ x: -d, y: -g });
  }
  return s;
}
p(Lt, "generateCirclePoints");
async function Id(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: a, bbox: n, label: s } = await it(e, t, rt(t)), o = n.width + (t.padding ?? 0), l = n.height + (t.padding ?? 0), c = Math.max(5, l * 0.1), { cssStyles: h } = t, u = [
    ...Lt(o / 2, -l / 2, c, 30, -90, 0),
    { x: -o / 2 - c, y: c },
    ...Lt(o / 2 + c * 2, -c, c, 20, -180, -270),
    ...Lt(o / 2 + c * 2, c, c, 20, -90, -180),
    { x: -o / 2 - c, y: -l / 2 },
    ...Lt(o / 2, l / 2, c, 20, 0, 90)
  ], f = [
    ...Lt(-o / 2 + c + c / 2, -l / 2, c, 20, -90, -180),
    { x: o / 2 - c / 2, y: c },
    ...Lt(-o / 2 - c / 2, -c, c, 20, 0, 90),
    ...Lt(-o / 2 - c / 2, c, c, 20, -90, 0),
    { x: o / 2 - c / 2, y: -c },
    ...Lt(-o / 2 + c + c / 2, l / 2, c, 30, -180, -270)
  ], d = [
    { x: o / 2, y: -l / 2 - c },
    { x: -o / 2, y: -l / 2 - c },
    ...Lt(o / 2, -l / 2, c, 20, -90, 0),
    { x: -o / 2 - c, y: -c },
    ...Lt(o / 2 + c * 2, -c, c, 20, -180, -270),
    ...Lt(o / 2 + c * 2, c, c, 20, -90, -180),
    { x: -o / 2 - c, y: l / 2 },
    ...Lt(o / 2, l / 2, c, 20, 0, 90),
    { x: -o / 2, y: l / 2 + c },
    { x: o / 2 - c - c / 2, y: l / 2 + c },
    ...Lt(-o / 2 + c + c / 2, -l / 2, c, 20, -90, -180),
    { x: o / 2 - c / 2, y: c },
    ...Lt(-o / 2 - c / 2, -c, c, 20, 0, 90),
    ...Lt(-o / 2 - c / 2, c, c, 20, -90, 0),
    { x: o / 2 - c / 2, y: -c },
    ...Lt(-o / 2 + c + c / 2, l / 2, c, 30, -180, -270)
  ], g = j.svg(a), m = Y(t, { fill: "none" });
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const x = lt(u).replace("Z", ""), b = g.path(x, m), v = lt(f).replace("Z", ""), k = g.path(v, m), A = lt(d), S = g.path(A, { ...m }), D = a.insert("g", ":first-child");
  return D.insert(() => S, ":first-child").attr("stroke-opacity", 0), D.insert(() => b, ":first-child"), D.insert(() => k, ":first-child"), D.attr("class", "text"), h && t.look !== "handDrawn" && D.selectAll("path").attr("style", h), i && t.look !== "handDrawn" && D.selectAll("path").attr("style", i), D.attr("transform", `translate(${c - c / 4}, 0)`), s.attr(
    "transform",
    `translate(${-o / 2 + (t.padding ?? 0) / 2 - (n.x - (n.left ?? 0))},${-l / 2 + (t.padding ?? 0) / 2 - (n.y - (n.top ?? 0))})`
  ), G(t, D), t.intersect = function(I) {
    return W.polygon(t, d, I);
  }, a;
}
p(Id, "curlyBraces");
async function Pd(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: a, bbox: n } = await it(e, t, rt(t)), s = 80, o = 20, l = Math.max(s, (n.width + (t.padding ?? 0) * 2) * 1.25, t?.width ?? 0), c = Math.max(o, n.height + (t.padding ?? 0) * 2, t?.height ?? 0), h = c / 2, { cssStyles: u } = t, f = j.svg(a), d = Y(t, {});
  t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
  const g = l, m = c, y = g - h, x = m / 4, b = [
    { x: y, y: 0 },
    { x, y: 0 },
    { x: 0, y: m / 2 },
    { x, y: m },
    { x: y, y: m },
    ...Mi(-y, -m / 2, h, 50, 270, 90)
  ], C = lt(b), v = f.path(C, d), k = a.insert(() => v, ":first-child");
  return k.attr("class", "basic label-container"), u && t.look !== "handDrawn" && k.selectChildren("path").attr("style", u), i && t.look !== "handDrawn" && k.selectChildren("path").attr("style", i), k.attr("transform", `translate(${-l / 2}, ${-c / 2})`), G(t, k), t.intersect = function(A) {
    return W.polygon(t, b, A);
  }, a;
}
p(Pd, "curvedTrapezoid");
var kv = /* @__PURE__ */ p((e, t, r, i, a, n) => [
  `M${e},${t + n}`,
  `a${a},${n} 0,0,0 ${r},0`,
  `a${a},${n} 0,0,0 ${-r},0`,
  `l0,${i}`,
  `a${a},${n} 0,0,0 ${r},0`,
  `l0,${-i}`
].join(" "), "createCylinderPathD"), vv = /* @__PURE__ */ p((e, t, r, i, a, n) => [
  `M${e},${t + n}`,
  `M${e + r},${t + n}`,
  `a${a},${n} 0,0,0 ${-r},0`,
  `l0,${i}`,
  `a${a},${n} 0,0,0 ${r},0`,
  `l0,${-i}`
].join(" "), "createOuterCylinderPathD"), _v = /* @__PURE__ */ p((e, t, r, i, a, n) => [`M${e - r / 2},${-i / 2}`, `a${a},${n} 0,0,0 ${r},0`].join(" "), "createInnerCylinderPathD");
async function Nd(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: a, bbox: n, label: s } = await it(e, t, rt(t)), o = Math.max(n.width + t.padding, t.width ?? 0), l = o / 2, c = l / (2.5 + o / 50), h = Math.max(n.height + c + t.padding, t.height ?? 0);
  let u;
  const { cssStyles: f } = t;
  if (t.look === "handDrawn") {
    const d = j.svg(a), g = vv(0, 0, o, h, l, c), m = _v(0, c, o, h, l, c), y = d.path(g, Y(t, {})), x = d.path(m, Y(t, { fill: "none" }));
    u = a.insert(() => x, ":first-child"), u = a.insert(() => y, ":first-child"), u.attr("class", "basic label-container"), f && u.attr("style", f);
  } else {
    const d = kv(0, 0, o, h, l, c);
    u = a.insert("path", ":first-child").attr("d", d).attr("class", "basic label-container").attr("style", Rt(f)).attr("style", i);
  }
  return u.attr("label-offset-y", c), u.attr("transform", `translate(${-o / 2}, ${-(h / 2 + c)})`), G(t, u), s.attr(
    "transform",
    `translate(${-(n.width / 2) - (n.x - (n.left ?? 0))}, ${-(n.height / 2) + (t.padding ?? 0) / 1.5 - (n.y - (n.top ?? 0))})`
  ), t.intersect = function(d) {
    const g = W.rect(t, d), m = g.x - (t.x ?? 0);
    if (l != 0 && (Math.abs(m) < (t.width ?? 0) / 2 || Math.abs(m) == (t.width ?? 0) / 2 && Math.abs(g.y - (t.y ?? 0)) > (t.height ?? 0) / 2 - c)) {
      let y = c * c * (1 - m * m / (l * l));
      y > 0 && (y = Math.sqrt(y)), y = c - y, d.y - (t.y ?? 0) > 0 && (y = -y), g.y += y;
    }
    return g;
  }, a;
}
p(Nd, "cylinder");
async function zd(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: a, bbox: n, label: s } = await it(e, t, rt(t)), o = n.width + t.padding, l = n.height + t.padding, c = l * 0.2, h = -o / 2, u = -l / 2 - c / 2, { cssStyles: f } = t, d = j.svg(a), g = Y(t, {});
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const m = [
    { x: h, y: u + c },
    { x: -h, y: u + c },
    { x: -h, y: -u },
    { x: h, y: -u },
    { x: h, y: u },
    { x: -h, y: u },
    { x: -h, y: u + c }
  ], y = d.polygon(
    m.map((b) => [b.x, b.y]),
    g
  ), x = a.insert(() => y, ":first-child");
  return x.attr("class", "basic label-container"), f && t.look !== "handDrawn" && x.selectAll("path").attr("style", f), i && t.look !== "handDrawn" && x.selectAll("path").attr("style", i), s.attr(
    "transform",
    `translate(${h + (t.padding ?? 0) / 2 - (n.x - (n.left ?? 0))}, ${u + c + (t.padding ?? 0) / 2 - (n.y - (n.top ?? 0))})`
  ), G(t, x), t.intersect = function(b) {
    return W.rect(t, b);
  }, a;
}
p(zd, "dividedRectangle");
async function Wd(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: a, bbox: n, halfPadding: s } = await it(e, t, rt(t)), l = n.width / 2 + s + 5, c = n.width / 2 + s;
  let h;
  const { cssStyles: u } = t;
  if (t.look === "handDrawn") {
    const f = j.svg(a), d = Y(t, { roughness: 0.2, strokeWidth: 2.5 }), g = Y(t, { roughness: 0.2, strokeWidth: 1.5 }), m = f.circle(0, 0, l * 2, d), y = f.circle(0, 0, c * 2, g);
    h = a.insert("g", ":first-child"), h.attr("class", Rt(t.cssClasses)).attr("style", Rt(u)), h.node()?.appendChild(m), h.node()?.appendChild(y);
  } else {
    h = a.insert("g", ":first-child");
    const f = h.insert("circle", ":first-child"), d = h.insert("circle");
    h.attr("class", "basic label-container").attr("style", i), f.attr("class", "outer-circle").attr("style", i).attr("r", l).attr("cx", 0).attr("cy", 0), d.attr("class", "inner-circle").attr("style", i).attr("r", c).attr("cx", 0).attr("cy", 0);
  }
  return G(t, h), t.intersect = function(f) {
    return F.info("DoubleCircle intersect", t, l, f), W.circle(t, l, f);
  }, a;
}
p(Wd, "doublecircle");
function qd(e, t, { config: { themeVariables: r } }) {
  const { labelStyles: i, nodeStyles: a } = U(t);
  t.label = "", t.labelStyle = i;
  const n = e.insert("g").attr("class", rt(t)).attr("id", t.domId ?? t.id), s = 7, { cssStyles: o } = t, l = j.svg(n), { nodeBorder: c } = r, h = Y(t, { fillStyle: "solid" });
  t.look !== "handDrawn" && (h.roughness = 0);
  const u = l.circle(0, 0, s * 2, h), f = n.insert(() => u, ":first-child");
  return f.selectAll("path").attr("style", `fill: ${c} !important;`), o && o.length > 0 && t.look !== "handDrawn" && f.selectAll("path").attr("style", o), a && t.look !== "handDrawn" && f.selectAll("path").attr("style", a), G(t, f), t.intersect = function(d) {
    return F.info("filledCircle intersect", t, { radius: s, point: d }), W.circle(t, s, d);
  }, n;
}
p(qd, "filledCircle");
async function Hd(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: a, bbox: n, label: s } = await it(e, t, rt(t)), o = n.width + (t.padding ?? 0), l = o + n.height, c = o + n.height, h = [
    { x: 0, y: -l },
    { x: c, y: -l },
    { x: c / 2, y: 0 }
  ], { cssStyles: u } = t, f = j.svg(a), d = Y(t, {});
  t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
  const g = lt(h), m = f.path(g, d), y = a.insert(() => m, ":first-child").attr("transform", `translate(${-l / 2}, ${l / 2})`);
  return u && t.look !== "handDrawn" && y.selectChildren("path").attr("style", u), i && t.look !== "handDrawn" && y.selectChildren("path").attr("style", i), t.width = o, t.height = l, G(t, y), s.attr(
    "transform",
    `translate(${-n.width / 2 - (n.x - (n.left ?? 0))}, ${-l / 2 + (t.padding ?? 0) / 2 + (n.y - (n.top ?? 0))})`
  ), t.intersect = function(x) {
    return F.info("Triangle intersect", t, h, x), W.polygon(t, h, x);
  }, a;
}
p(Hd, "flippedTriangle");
function jd(e, t, { dir: r, config: { state: i, themeVariables: a } }) {
  const { nodeStyles: n } = U(t);
  t.label = "";
  const s = e.insert("g").attr("class", rt(t)).attr("id", t.domId ?? t.id), { cssStyles: o } = t;
  let l = Math.max(70, t?.width ?? 0), c = Math.max(10, t?.height ?? 0);
  r === "LR" && (l = Math.max(10, t?.width ?? 0), c = Math.max(70, t?.height ?? 0));
  const h = -1 * l / 2, u = -1 * c / 2, f = j.svg(s), d = Y(t, {
    stroke: a.lineColor,
    fill: a.lineColor
  });
  t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
  const g = f.rectangle(h, u, l, c, d), m = s.insert(() => g, ":first-child");
  o && t.look !== "handDrawn" && m.selectAll("path").attr("style", o), n && t.look !== "handDrawn" && m.selectAll("path").attr("style", n), G(t, m);
  const y = i?.padding ?? 0;
  return t.width && t.height && (t.width += y / 2 || 0, t.height += y / 2 || 0), t.intersect = function(x) {
    return W.rect(t, x);
  }, s;
}
p(jd, "forkJoin");
async function Yd(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const a = 80, n = 50, { shapeSvg: s, bbox: o } = await it(e, t, rt(t)), l = Math.max(a, o.width + (t.padding ?? 0) * 2, t?.width ?? 0), c = Math.max(n, o.height + (t.padding ?? 0) * 2, t?.height ?? 0), h = c / 2, { cssStyles: u } = t, f = j.svg(s), d = Y(t, {});
  t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
  const g = [
    { x: -l / 2, y: -c / 2 },
    { x: l / 2 - h, y: -c / 2 },
    ...Mi(-l / 2 + h, 0, h, 50, 90, 270),
    { x: l / 2 - h, y: c / 2 },
    { x: -l / 2, y: c / 2 }
  ], m = lt(g), y = f.path(m, d), x = s.insert(() => y, ":first-child");
  return x.attr("class", "basic label-container"), u && t.look !== "handDrawn" && x.selectChildren("path").attr("style", u), i && t.look !== "handDrawn" && x.selectChildren("path").attr("style", i), G(t, x), t.intersect = function(b) {
    return F.info("Pill intersect", t, { radius: h, point: b }), W.polygon(t, g, b);
  }, s;
}
p(Yd, "halfRoundedRectangle");
async function Ud(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: a, bbox: n } = await it(e, t, rt(t)), s = n.height + (t.padding ?? 0), o = n.width + (t.padding ?? 0) * 2.5, { cssStyles: l } = t, c = j.svg(a), h = Y(t, {});
  t.look !== "handDrawn" && (h.roughness = 0, h.fillStyle = "solid");
  let u = o / 2;
  const f = u / 6;
  u = u + f;
  const d = s / 2, g = d / 2, m = u - g, y = [
    { x: -m, y: -d },
    { x: 0, y: -d },
    { x: m, y: -d },
    { x: u, y: 0 },
    { x: m, y: d },
    { x: 0, y: d },
    { x: -m, y: d },
    { x: -u, y: 0 }
  ], x = lt(y), b = c.path(x, h), C = a.insert(() => b, ":first-child");
  return C.attr("class", "basic label-container"), l && t.look !== "handDrawn" && C.selectChildren("path").attr("style", l), i && t.look !== "handDrawn" && C.selectChildren("path").attr("style", i), t.width = o, t.height = s, G(t, C), t.intersect = function(v) {
    return W.polygon(t, y, v);
  }, a;
}
p(Ud, "hexagon");
async function Gd(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.label = "", t.labelStyle = r;
  const { shapeSvg: a } = await it(e, t, rt(t)), n = Math.max(30, t?.width ?? 0), s = Math.max(30, t?.height ?? 0), { cssStyles: o } = t, l = j.svg(a), c = Y(t, {});
  t.look !== "handDrawn" && (c.roughness = 0, c.fillStyle = "solid");
  const h = [
    { x: 0, y: 0 },
    { x: n, y: 0 },
    { x: 0, y: s },
    { x: n, y: s }
  ], u = lt(h), f = l.path(u, c), d = a.insert(() => f, ":first-child");
  return d.attr("class", "basic label-container"), o && t.look !== "handDrawn" && d.selectChildren("path").attr("style", o), i && t.look !== "handDrawn" && d.selectChildren("path").attr("style", i), d.attr("transform", `translate(${-n / 2}, ${-s / 2})`), G(t, d), t.intersect = function(g) {
    return F.info("Pill intersect", t, { points: h }), W.polygon(t, h, g);
  }, a;
}
p(Gd, "hourglass");
async function Xd(e, t, { config: { themeVariables: r, flowchart: i } }) {
  const { labelStyles: a } = U(t);
  t.labelStyle = a;
  const n = t.assetHeight ?? 48, s = t.assetWidth ?? 48, o = Math.max(n, s), l = i?.wrappingWidth;
  t.width = Math.max(o, l ?? 0);
  const { shapeSvg: c, bbox: h, label: u } = await it(e, t, "icon-shape default"), f = t.pos === "t", d = o, g = o, { nodeBorder: m } = r, { stylesMap: y } = Ur(t), x = -g / 2, b = -d / 2, C = t.label ? 8 : 0, v = j.svg(c), k = Y(t, { stroke: "none", fill: "none" });
  t.look !== "handDrawn" && (k.roughness = 0, k.fillStyle = "solid");
  const A = v.rectangle(x, b, g, d, k), S = Math.max(g, h.width), D = d + h.height + C, I = v.rectangle(-S / 2, -D / 2, S, D, {
    ...k,
    fill: "transparent",
    stroke: "none"
  }), O = c.insert(() => A, ":first-child"), E = c.insert(() => I);
  if (t.icon) {
    const N = c.append("g");
    N.html(
      `<g>${await zi(t.icon, {
        height: o,
        width: o,
        fallbackPrefix: ""
      })}</g>`
    );
    const R = N.node().getBBox(), B = R.width, L = R.height, T = R.x, $ = R.y;
    N.attr(
      "transform",
      `translate(${-B / 2 - T},${f ? h.height / 2 + C / 2 - L / 2 - $ : -h.height / 2 - C / 2 - L / 2 - $})`
    ), N.attr("style", `color: ${y.get("stroke") ?? m};`);
  }
  return u.attr(
    "transform",
    `translate(${-h.width / 2 - (h.x - (h.left ?? 0))},${f ? -D / 2 : D / 2 - h.height})`
  ), O.attr(
    "transform",
    `translate(0,${f ? h.height / 2 + C / 2 : -h.height / 2 - C / 2})`
  ), G(t, E), t.intersect = function(N) {
    if (F.info("iconSquare intersect", t, N), !t.label)
      return W.rect(t, N);
    const R = t.x ?? 0, B = t.y ?? 0, L = t.height ?? 0;
    let T = [];
    return f ? T = [
      { x: R - h.width / 2, y: B - L / 2 },
      { x: R + h.width / 2, y: B - L / 2 },
      { x: R + h.width / 2, y: B - L / 2 + h.height + C },
      { x: R + g / 2, y: B - L / 2 + h.height + C },
      { x: R + g / 2, y: B + L / 2 },
      { x: R - g / 2, y: B + L / 2 },
      { x: R - g / 2, y: B - L / 2 + h.height + C },
      { x: R - h.width / 2, y: B - L / 2 + h.height + C }
    ] : T = [
      { x: R - g / 2, y: B - L / 2 },
      { x: R + g / 2, y: B - L / 2 },
      { x: R + g / 2, y: B - L / 2 + d },
      { x: R + h.width / 2, y: B - L / 2 + d },
      { x: R + h.width / 2 / 2, y: B + L / 2 },
      { x: R - h.width / 2, y: B + L / 2 },
      { x: R - h.width / 2, y: B - L / 2 + d },
      { x: R - g / 2, y: B - L / 2 + d }
    ], W.polygon(t, T, N);
  }, c;
}
p(Xd, "icon");
async function Vd(e, t, { config: { themeVariables: r, flowchart: i } }) {
  const { labelStyles: a } = U(t);
  t.labelStyle = a;
  const n = t.assetHeight ?? 48, s = t.assetWidth ?? 48, o = Math.max(n, s), l = i?.wrappingWidth;
  t.width = Math.max(o, l ?? 0);
  const { shapeSvg: c, bbox: h, label: u } = await it(e, t, "icon-shape default"), f = 20, d = t.label ? 8 : 0, g = t.pos === "t", { nodeBorder: m, mainBkg: y } = r, { stylesMap: x } = Ur(t), b = j.svg(c), C = Y(t, {});
  t.look !== "handDrawn" && (C.roughness = 0, C.fillStyle = "solid");
  const v = x.get("fill");
  C.stroke = v ?? y;
  const k = c.append("g");
  t.icon && k.html(
    `<g>${await zi(t.icon, {
      height: o,
      width: o,
      fallbackPrefix: ""
    })}</g>`
  );
  const A = k.node().getBBox(), S = A.width, D = A.height, I = A.x, O = A.y, E = Math.max(S, D) * Math.SQRT2 + f * 2, N = b.circle(0, 0, E, C), R = Math.max(E, h.width), B = E + h.height + d, L = b.rectangle(-R / 2, -B / 2, R, B, {
    ...C,
    fill: "transparent",
    stroke: "none"
  }), T = c.insert(() => N, ":first-child"), $ = c.insert(() => L);
  return k.attr(
    "transform",
    `translate(${-S / 2 - I},${g ? h.height / 2 + d / 2 - D / 2 - O : -h.height / 2 - d / 2 - D / 2 - O})`
  ), k.attr("style", `color: ${x.get("stroke") ?? m};`), u.attr(
    "transform",
    `translate(${-h.width / 2 - (h.x - (h.left ?? 0))},${g ? -B / 2 : B / 2 - h.height})`
  ), T.attr(
    "transform",
    `translate(0,${g ? h.height / 2 + d / 2 : -h.height / 2 - d / 2})`
  ), G(t, $), t.intersect = function(M) {
    return F.info("iconSquare intersect", t, M), W.rect(t, M);
  }, c;
}
p(Vd, "iconCircle");
async function Zd(e, t, { config: { themeVariables: r, flowchart: i } }) {
  const { labelStyles: a } = U(t);
  t.labelStyle = a;
  const n = t.assetHeight ?? 48, s = t.assetWidth ?? 48, o = Math.max(n, s), l = i?.wrappingWidth;
  t.width = Math.max(o, l ?? 0);
  const { shapeSvg: c, bbox: h, halfPadding: u, label: f } = await it(
    e,
    t,
    "icon-shape default"
  ), d = t.pos === "t", g = o + u * 2, m = o + u * 2, { nodeBorder: y, mainBkg: x } = r, { stylesMap: b } = Ur(t), C = -m / 2, v = -g / 2, k = t.label ? 8 : 0, A = j.svg(c), S = Y(t, {});
  t.look !== "handDrawn" && (S.roughness = 0, S.fillStyle = "solid");
  const D = b.get("fill");
  S.stroke = D ?? x;
  const I = A.path(je(C, v, m, g, 5), S), O = Math.max(m, h.width), E = g + h.height + k, N = A.rectangle(-O / 2, -E / 2, O, E, {
    ...S,
    fill: "transparent",
    stroke: "none"
  }), R = c.insert(() => I, ":first-child").attr("class", "icon-shape2"), B = c.insert(() => N);
  if (t.icon) {
    const L = c.append("g");
    L.html(
      `<g>${await zi(t.icon, {
        height: o,
        width: o,
        fallbackPrefix: ""
      })}</g>`
    );
    const T = L.node().getBBox(), $ = T.width, M = T.height, q = T.x, X = T.y;
    L.attr(
      "transform",
      `translate(${-$ / 2 - q},${d ? h.height / 2 + k / 2 - M / 2 - X : -h.height / 2 - k / 2 - M / 2 - X})`
    ), L.attr("style", `color: ${b.get("stroke") ?? y};`);
  }
  return f.attr(
    "transform",
    `translate(${-h.width / 2 - (h.x - (h.left ?? 0))},${d ? -E / 2 : E / 2 - h.height})`
  ), R.attr(
    "transform",
    `translate(0,${d ? h.height / 2 + k / 2 : -h.height / 2 - k / 2})`
  ), G(t, B), t.intersect = function(L) {
    if (F.info("iconSquare intersect", t, L), !t.label)
      return W.rect(t, L);
    const T = t.x ?? 0, $ = t.y ?? 0, M = t.height ?? 0;
    let q = [];
    return d ? q = [
      { x: T - h.width / 2, y: $ - M / 2 },
      { x: T + h.width / 2, y: $ - M / 2 },
      { x: T + h.width / 2, y: $ - M / 2 + h.height + k },
      { x: T + m / 2, y: $ - M / 2 + h.height + k },
      { x: T + m / 2, y: $ + M / 2 },
      { x: T - m / 2, y: $ + M / 2 },
      { x: T - m / 2, y: $ - M / 2 + h.height + k },
      { x: T - h.width / 2, y: $ - M / 2 + h.height + k }
    ] : q = [
      { x: T - m / 2, y: $ - M / 2 },
      { x: T + m / 2, y: $ - M / 2 },
      { x: T + m / 2, y: $ - M / 2 + g },
      { x: T + h.width / 2, y: $ - M / 2 + g },
      { x: T + h.width / 2 / 2, y: $ + M / 2 },
      { x: T - h.width / 2, y: $ + M / 2 },
      { x: T - h.width / 2, y: $ - M / 2 + g },
      { x: T - m / 2, y: $ - M / 2 + g }
    ], W.polygon(t, q, L);
  }, c;
}
p(Zd, "iconRounded");
async function Kd(e, t, { config: { themeVariables: r, flowchart: i } }) {
  const { labelStyles: a } = U(t);
  t.labelStyle = a;
  const n = t.assetHeight ?? 48, s = t.assetWidth ?? 48, o = Math.max(n, s), l = i?.wrappingWidth;
  t.width = Math.max(o, l ?? 0);
  const { shapeSvg: c, bbox: h, halfPadding: u, label: f } = await it(
    e,
    t,
    "icon-shape default"
  ), d = t.pos === "t", g = o + u * 2, m = o + u * 2, { nodeBorder: y, mainBkg: x } = r, { stylesMap: b } = Ur(t), C = -m / 2, v = -g / 2, k = t.label ? 8 : 0, A = j.svg(c), S = Y(t, {});
  t.look !== "handDrawn" && (S.roughness = 0, S.fillStyle = "solid");
  const D = b.get("fill");
  S.stroke = D ?? x;
  const I = A.path(je(C, v, m, g, 0.1), S), O = Math.max(m, h.width), E = g + h.height + k, N = A.rectangle(-O / 2, -E / 2, O, E, {
    ...S,
    fill: "transparent",
    stroke: "none"
  }), R = c.insert(() => I, ":first-child"), B = c.insert(() => N);
  if (t.icon) {
    const L = c.append("g");
    L.html(
      `<g>${await zi(t.icon, {
        height: o,
        width: o,
        fallbackPrefix: ""
      })}</g>`
    );
    const T = L.node().getBBox(), $ = T.width, M = T.height, q = T.x, X = T.y;
    L.attr(
      "transform",
      `translate(${-$ / 2 - q},${d ? h.height / 2 + k / 2 - M / 2 - X : -h.height / 2 - k / 2 - M / 2 - X})`
    ), L.attr("style", `color: ${b.get("stroke") ?? y};`);
  }
  return f.attr(
    "transform",
    `translate(${-h.width / 2 - (h.x - (h.left ?? 0))},${d ? -E / 2 : E / 2 - h.height})`
  ), R.attr(
    "transform",
    `translate(0,${d ? h.height / 2 + k / 2 : -h.height / 2 - k / 2})`
  ), G(t, B), t.intersect = function(L) {
    if (F.info("iconSquare intersect", t, L), !t.label)
      return W.rect(t, L);
    const T = t.x ?? 0, $ = t.y ?? 0, M = t.height ?? 0;
    let q = [];
    return d ? q = [
      { x: T - h.width / 2, y: $ - M / 2 },
      { x: T + h.width / 2, y: $ - M / 2 },
      { x: T + h.width / 2, y: $ - M / 2 + h.height + k },
      { x: T + m / 2, y: $ - M / 2 + h.height + k },
      { x: T + m / 2, y: $ + M / 2 },
      { x: T - m / 2, y: $ + M / 2 },
      { x: T - m / 2, y: $ - M / 2 + h.height + k },
      { x: T - h.width / 2, y: $ - M / 2 + h.height + k }
    ] : q = [
      { x: T - m / 2, y: $ - M / 2 },
      { x: T + m / 2, y: $ - M / 2 },
      { x: T + m / 2, y: $ - M / 2 + g },
      { x: T + h.width / 2, y: $ - M / 2 + g },
      { x: T + h.width / 2 / 2, y: $ + M / 2 },
      { x: T - h.width / 2, y: $ + M / 2 },
      { x: T - h.width / 2, y: $ - M / 2 + g },
      { x: T - m / 2, y: $ - M / 2 + g }
    ], W.polygon(t, q, L);
  }, c;
}
p(Kd, "iconSquare");
async function Qd(e, t, { config: { flowchart: r } }) {
  const i = new Image();
  i.src = t?.img ?? "", await i.decode();
  const a = Number(i.naturalWidth.toString().replace("px", "")), n = Number(i.naturalHeight.toString().replace("px", ""));
  t.imageAspectRatio = a / n;
  const { labelStyles: s } = U(t);
  t.labelStyle = s;
  const o = r?.wrappingWidth;
  t.defaultWidth = r?.wrappingWidth;
  const l = Math.max(
    t.label ? o ?? 0 : 0,
    t?.assetWidth ?? a
  ), c = t.constraint === "on" && t?.assetHeight ? t.assetHeight * t.imageAspectRatio : l, h = t.constraint === "on" ? c / t.imageAspectRatio : t?.assetHeight ?? n;
  t.width = Math.max(c, o ?? 0);
  const { shapeSvg: u, bbox: f, label: d } = await it(e, t, "image-shape default"), g = t.pos === "t", m = -c / 2, y = -h / 2, x = t.label ? 8 : 0, b = j.svg(u), C = Y(t, {});
  t.look !== "handDrawn" && (C.roughness = 0, C.fillStyle = "solid");
  const v = b.rectangle(m, y, c, h, C), k = Math.max(c, f.width), A = h + f.height + x, S = b.rectangle(-k / 2, -A / 2, k, A, {
    ...C,
    fill: "none",
    stroke: "none"
  }), D = u.insert(() => v, ":first-child"), I = u.insert(() => S);
  if (t.img) {
    const O = u.append("image");
    O.attr("href", t.img), O.attr("width", c), O.attr("height", h), O.attr("preserveAspectRatio", "none"), O.attr(
      "transform",
      `translate(${-c / 2},${g ? A / 2 - h : -A / 2})`
    );
  }
  return d.attr(
    "transform",
    `translate(${-f.width / 2 - (f.x - (f.left ?? 0))},${g ? -h / 2 - f.height / 2 - x / 2 : h / 2 - f.height / 2 + x / 2})`
  ), D.attr(
    "transform",
    `translate(0,${g ? f.height / 2 + x / 2 : -f.height / 2 - x / 2})`
  ), G(t, I), t.intersect = function(O) {
    if (F.info("iconSquare intersect", t, O), !t.label)
      return W.rect(t, O);
    const E = t.x ?? 0, N = t.y ?? 0, R = t.height ?? 0;
    let B = [];
    return g ? B = [
      { x: E - f.width / 2, y: N - R / 2 },
      { x: E + f.width / 2, y: N - R / 2 },
      { x: E + f.width / 2, y: N - R / 2 + f.height + x },
      { x: E + c / 2, y: N - R / 2 + f.height + x },
      { x: E + c / 2, y: N + R / 2 },
      { x: E - c / 2, y: N + R / 2 },
      { x: E - c / 2, y: N - R / 2 + f.height + x },
      { x: E - f.width / 2, y: N - R / 2 + f.height + x }
    ] : B = [
      { x: E - c / 2, y: N - R / 2 },
      { x: E + c / 2, y: N - R / 2 },
      { x: E + c / 2, y: N - R / 2 + h },
      { x: E + f.width / 2, y: N - R / 2 + h },
      { x: E + f.width / 2 / 2, y: N + R / 2 },
      { x: E - f.width / 2, y: N + R / 2 },
      { x: E - f.width / 2, y: N - R / 2 + h },
      { x: E - c / 2, y: N - R / 2 + h }
    ], W.polygon(t, B, O);
  }, u;
}
p(Qd, "imageSquare");
async function Jd(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: a, bbox: n } = await it(e, t, rt(t)), s = Math.max(n.width + (t.padding ?? 0) * 2, t?.width ?? 0), o = Math.max(n.height + (t.padding ?? 0) * 2, t?.height ?? 0), l = [
    { x: 0, y: 0 },
    { x: s, y: 0 },
    { x: s + 3 * o / 6, y: -o },
    { x: -3 * o / 6, y: -o }
  ];
  let c;
  const { cssStyles: h } = t;
  if (t.look === "handDrawn") {
    const u = j.svg(a), f = Y(t, {}), d = lt(l), g = u.path(d, f);
    c = a.insert(() => g, ":first-child").attr("transform", `translate(${-s / 2}, ${o / 2})`), h && c.attr("style", h);
  } else
    c = Ye(a, s, o, l);
  return i && c.attr("style", i), t.width = s, t.height = o, G(t, c), t.intersect = function(u) {
    return W.polygon(t, l, u);
  }, a;
}
p(Jd, "inv_trapezoid");
async function xn(e, t, r) {
  const { labelStyles: i, nodeStyles: a } = U(t);
  t.labelStyle = i;
  const { shapeSvg: n, bbox: s } = await it(e, t, rt(t)), o = Math.max(s.width + r.labelPaddingX * 2, t?.width || 0), l = Math.max(s.height + r.labelPaddingY * 2, t?.height || 0), c = -o / 2, h = -l / 2;
  let u, { rx: f, ry: d } = t;
  const { cssStyles: g } = t;
  if (r?.rx && r.ry && (f = r.rx, d = r.ry), t.look === "handDrawn") {
    const m = j.svg(n), y = Y(t, {}), x = f || d ? m.path(je(c, h, o, l, f || 0), y) : m.rectangle(c, h, o, l, y);
    u = n.insert(() => x, ":first-child"), u.attr("class", "basic label-container").attr("style", Rt(g));
  } else
    u = n.insert("rect", ":first-child"), u.attr("class", "basic label-container").attr("style", a).attr("rx", Rt(f)).attr("ry", Rt(d)).attr("x", c).attr("y", h).attr("width", o).attr("height", l);
  return G(t, u), t.calcIntersect = function(m, y) {
    return W.rect(m, y);
  }, t.intersect = function(m) {
    return W.rect(t, m);
  }, n;
}
p(xn, "drawRect");
async function tp(e, t) {
  const { shapeSvg: r, bbox: i, label: a } = await it(e, t, "label"), n = r.insert("rect", ":first-child");
  return n.attr("width", 0.1).attr("height", 0.1), r.attr("class", "label edgeLabel"), a.attr(
    "transform",
    `translate(${-(i.width / 2) - (i.x - (i.left ?? 0))}, ${-(i.height / 2) - (i.y - (i.top ?? 0))})`
  ), G(t, n), t.intersect = function(l) {
    return W.rect(t, l);
  }, r;
}
p(tp, "labelRect");
async function ep(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: a, bbox: n } = await it(e, t, rt(t)), s = Math.max(n.width + (t.padding ?? 0), t?.width ?? 0), o = Math.max(n.height + (t.padding ?? 0), t?.height ?? 0), l = [
    { x: 0, y: 0 },
    { x: s + 3 * o / 6, y: 0 },
    { x: s, y: -o },
    { x: -(3 * o) / 6, y: -o }
  ];
  let c;
  const { cssStyles: h } = t;
  if (t.look === "handDrawn") {
    const u = j.svg(a), f = Y(t, {}), d = lt(l), g = u.path(d, f);
    c = a.insert(() => g, ":first-child").attr("transform", `translate(${-s / 2}, ${o / 2})`), h && c.attr("style", h);
  } else
    c = Ye(a, s, o, l);
  return i && c.attr("style", i), t.width = s, t.height = o, G(t, c), t.intersect = function(u) {
    return W.polygon(t, l, u);
  }, a;
}
p(ep, "lean_left");
async function rp(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: a, bbox: n } = await it(e, t, rt(t)), s = Math.max(n.width + (t.padding ?? 0), t?.width ?? 0), o = Math.max(n.height + (t.padding ?? 0), t?.height ?? 0), l = [
    { x: -3 * o / 6, y: 0 },
    { x: s, y: 0 },
    { x: s + 3 * o / 6, y: -o },
    { x: 0, y: -o }
  ];
  let c;
  const { cssStyles: h } = t;
  if (t.look === "handDrawn") {
    const u = j.svg(a), f = Y(t, {}), d = lt(l), g = u.path(d, f);
    c = a.insert(() => g, ":first-child").attr("transform", `translate(${-s / 2}, ${o / 2})`), h && c.attr("style", h);
  } else
    c = Ye(a, s, o, l);
  return i && c.attr("style", i), t.width = s, t.height = o, G(t, c), t.intersect = function(u) {
    return W.polygon(t, l, u);
  }, a;
}
p(rp, "lean_right");
function ip(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.label = "", t.labelStyle = r;
  const a = e.insert("g").attr("class", rt(t)).attr("id", t.domId ?? t.id), { cssStyles: n } = t, s = Math.max(35, t?.width ?? 0), o = Math.max(35, t?.height ?? 0), l = 7, c = [
    { x: s, y: 0 },
    { x: 0, y: o + l / 2 },
    { x: s - 2 * l, y: o + l / 2 },
    { x: 0, y: 2 * o },
    { x: s, y: o - l / 2 },
    { x: 2 * l, y: o - l / 2 }
  ], h = j.svg(a), u = Y(t, {});
  t.look !== "handDrawn" && (u.roughness = 0, u.fillStyle = "solid");
  const f = lt(c), d = h.path(f, u), g = a.insert(() => d, ":first-child");
  return n && t.look !== "handDrawn" && g.selectAll("path").attr("style", n), i && t.look !== "handDrawn" && g.selectAll("path").attr("style", i), g.attr("transform", `translate(-${s / 2},${-o})`), G(t, g), t.intersect = function(m) {
    return F.info("lightningBolt intersect", t, m), W.polygon(t, c, m);
  }, a;
}
p(ip, "lightningBolt");
var Sv = /* @__PURE__ */ p((e, t, r, i, a, n, s) => [
  `M${e},${t + n}`,
  `a${a},${n} 0,0,0 ${r},0`,
  `a${a},${n} 0,0,0 ${-r},0`,
  `l0,${i}`,
  `a${a},${n} 0,0,0 ${r},0`,
  `l0,${-i}`,
  `M${e},${t + n + s}`,
  `a${a},${n} 0,0,0 ${r},0`
].join(" "), "createCylinderPathD"), Tv = /* @__PURE__ */ p((e, t, r, i, a, n, s) => [
  `M${e},${t + n}`,
  `M${e + r},${t + n}`,
  `a${a},${n} 0,0,0 ${-r},0`,
  `l0,${i}`,
  `a${a},${n} 0,0,0 ${r},0`,
  `l0,${-i}`,
  `M${e},${t + n + s}`,
  `a${a},${n} 0,0,0 ${r},0`
].join(" "), "createOuterCylinderPathD"), Bv = /* @__PURE__ */ p((e, t, r, i, a, n) => [`M${e - r / 2},${-i / 2}`, `a${a},${n} 0,0,0 ${r},0`].join(" "), "createInnerCylinderPathD");
async function ap(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: a, bbox: n, label: s } = await it(e, t, rt(t)), o = Math.max(n.width + (t.padding ?? 0), t.width ?? 0), l = o / 2, c = l / (2.5 + o / 50), h = Math.max(n.height + c + (t.padding ?? 0), t.height ?? 0), u = h * 0.1;
  let f;
  const { cssStyles: d } = t;
  if (t.look === "handDrawn") {
    const g = j.svg(a), m = Tv(0, 0, o, h, l, c, u), y = Bv(0, c, o, h, l, c), x = Y(t, {}), b = g.path(m, x), C = g.path(y, x);
    a.insert(() => C, ":first-child").attr("class", "line"), f = a.insert(() => b, ":first-child"), f.attr("class", "basic label-container"), d && f.attr("style", d);
  } else {
    const g = Sv(0, 0, o, h, l, c, u);
    f = a.insert("path", ":first-child").attr("d", g).attr("class", "basic label-container").attr("style", Rt(d)).attr("style", i);
  }
  return f.attr("label-offset-y", c), f.attr("transform", `translate(${-o / 2}, ${-(h / 2 + c)})`), G(t, f), s.attr(
    "transform",
    `translate(${-(n.width / 2) - (n.x - (n.left ?? 0))}, ${-(n.height / 2) + c - (n.y - (n.top ?? 0))})`
  ), t.intersect = function(g) {
    const m = W.rect(t, g), y = m.x - (t.x ?? 0);
    if (l != 0 && (Math.abs(y) < (t.width ?? 0) / 2 || Math.abs(y) == (t.width ?? 0) / 2 && Math.abs(m.y - (t.y ?? 0)) > (t.height ?? 0) / 2 - c)) {
      let x = c * c * (1 - y * y / (l * l));
      x > 0 && (x = Math.sqrt(x)), x = c - x, g.y - (t.y ?? 0) > 0 && (x = -x), m.y += x;
    }
    return m;
  }, a;
}
p(ap, "linedCylinder");
async function np(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: a, bbox: n, label: s } = await it(e, t, rt(t)), o = Math.max(n.width + (t.padding ?? 0) * 2, t?.width ?? 0), l = Math.max(n.height + (t.padding ?? 0) * 2, t?.height ?? 0), c = l / 4, h = l + c, { cssStyles: u } = t, f = j.svg(a), d = Y(t, {});
  t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
  const g = [
    { x: -o / 2 - o / 2 * 0.1, y: -h / 2 },
    { x: -o / 2 - o / 2 * 0.1, y: h / 2 },
    ...We(
      -o / 2 - o / 2 * 0.1,
      h / 2,
      o / 2 + o / 2 * 0.1,
      h / 2,
      c,
      0.8
    ),
    { x: o / 2 + o / 2 * 0.1, y: -h / 2 },
    { x: -o / 2 - o / 2 * 0.1, y: -h / 2 },
    { x: -o / 2, y: -h / 2 },
    { x: -o / 2, y: h / 2 * 1.1 },
    { x: -o / 2, y: -h / 2 }
  ], m = f.polygon(
    g.map((x) => [x.x, x.y]),
    d
  ), y = a.insert(() => m, ":first-child");
  return y.attr("class", "basic label-container"), u && t.look !== "handDrawn" && y.selectAll("path").attr("style", u), i && t.look !== "handDrawn" && y.selectAll("path").attr("style", i), y.attr("transform", `translate(0,${-c / 2})`), s.attr(
    "transform",
    `translate(${-o / 2 + (t.padding ?? 0) + o / 2 * 0.1 / 2 - (n.x - (n.left ?? 0))},${-l / 2 + (t.padding ?? 0) - c / 2 - (n.y - (n.top ?? 0))})`
  ), G(t, y), t.intersect = function(x) {
    return W.polygon(t, g, x);
  }, a;
}
p(np, "linedWaveEdgedRect");
async function sp(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: a, bbox: n, label: s } = await it(e, t, rt(t)), o = Math.max(n.width + (t.padding ?? 0) * 2, t?.width ?? 0), l = Math.max(n.height + (t.padding ?? 0) * 2, t?.height ?? 0), c = 5, h = -o / 2, u = -l / 2, { cssStyles: f } = t, d = j.svg(a), g = Y(t, {}), m = [
    { x: h - c, y: u + c },
    { x: h - c, y: u + l + c },
    { x: h + o - c, y: u + l + c },
    { x: h + o - c, y: u + l },
    { x: h + o, y: u + l },
    { x: h + o, y: u + l - c },
    { x: h + o + c, y: u + l - c },
    { x: h + o + c, y: u - c },
    { x: h + c, y: u - c },
    { x: h + c, y: u },
    { x: h, y: u },
    { x: h, y: u + c }
  ], y = [
    { x: h, y: u + c },
    { x: h + o - c, y: u + c },
    { x: h + o - c, y: u + l },
    { x: h + o, y: u + l },
    { x: h + o, y: u },
    { x: h, y: u }
  ];
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const x = lt(m), b = d.path(x, g), C = lt(y), v = d.path(C, { ...g, fill: "none" }), k = a.insert(() => v, ":first-child");
  return k.insert(() => b, ":first-child"), k.attr("class", "basic label-container"), f && t.look !== "handDrawn" && k.selectAll("path").attr("style", f), i && t.look !== "handDrawn" && k.selectAll("path").attr("style", i), s.attr(
    "transform",
    `translate(${-(n.width / 2) - c - (n.x - (n.left ?? 0))}, ${-(n.height / 2) + c - (n.y - (n.top ?? 0))})`
  ), G(t, k), t.intersect = function(A) {
    return W.polygon(t, m, A);
  }, a;
}
p(sp, "multiRect");
async function op(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: a, bbox: n, label: s } = await it(e, t, rt(t)), o = Math.max(n.width + (t.padding ?? 0) * 2, t?.width ?? 0), l = Math.max(n.height + (t.padding ?? 0) * 2, t?.height ?? 0), c = l / 4, h = l + c, u = -o / 2, f = -h / 2, d = 5, { cssStyles: g } = t, m = We(
    u - d,
    f + h + d,
    u + o - d,
    f + h + d,
    c,
    0.8
  ), y = m?.[m.length - 1], x = [
    { x: u - d, y: f + d },
    { x: u - d, y: f + h + d },
    ...m,
    { x: u + o - d, y: y.y - d },
    { x: u + o, y: y.y - d },
    { x: u + o, y: y.y - 2 * d },
    { x: u + o + d, y: y.y - 2 * d },
    { x: u + o + d, y: f - d },
    { x: u + d, y: f - d },
    { x: u + d, y: f },
    { x: u, y: f },
    { x: u, y: f + d }
  ], b = [
    { x: u, y: f + d },
    { x: u + o - d, y: f + d },
    { x: u + o - d, y: y.y - d },
    { x: u + o, y: y.y - d },
    { x: u + o, y: f },
    { x: u, y: f }
  ], C = j.svg(a), v = Y(t, {});
  t.look !== "handDrawn" && (v.roughness = 0, v.fillStyle = "solid");
  const k = lt(x), A = C.path(k, v), S = lt(b), D = C.path(S, v), I = a.insert(() => A, ":first-child");
  return I.insert(() => D), I.attr("class", "basic label-container"), g && t.look !== "handDrawn" && I.selectAll("path").attr("style", g), i && t.look !== "handDrawn" && I.selectAll("path").attr("style", i), I.attr("transform", `translate(0,${-c / 2})`), s.attr(
    "transform",
    `translate(${-(n.width / 2) - d - (n.x - (n.left ?? 0))}, ${-(n.height / 2) + d - c / 2 - (n.y - (n.top ?? 0))})`
  ), G(t, I), t.intersect = function(O) {
    return W.polygon(t, x, O);
  }, a;
}
p(op, "multiWaveEdgedRectangle");
async function lp(e, t, { config: { themeVariables: r } }) {
  const { labelStyles: i, nodeStyles: a } = U(t);
  t.labelStyle = i, t.useHtmlLabels || Dt().flowchart?.htmlLabels !== !1 || (t.centerLabel = !0);
  const { shapeSvg: s, bbox: o, label: l } = await it(e, t, rt(t)), c = Math.max(o.width + (t.padding ?? 0) * 2, t?.width ?? 0), h = Math.max(o.height + (t.padding ?? 0) * 2, t?.height ?? 0), u = -c / 2, f = -h / 2, { cssStyles: d } = t, g = j.svg(s), m = Y(t, {
    fill: r.noteBkgColor,
    stroke: r.noteBorderColor
  });
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const y = g.rectangle(u, f, c, h, m), x = s.insert(() => y, ":first-child");
  return x.attr("class", "basic label-container"), d && t.look !== "handDrawn" && x.selectAll("path").attr("style", d), a && t.look !== "handDrawn" && x.selectAll("path").attr("style", a), l.attr(
    "transform",
    `translate(${-o.width / 2 - (o.x - (o.left ?? 0))}, ${-(o.height / 2) - (o.y - (o.top ?? 0))})`
  ), G(t, x), t.intersect = function(b) {
    return W.rect(t, b);
  }, s;
}
p(lp, "note");
var Av = /* @__PURE__ */ p((e, t, r) => [
  `M${e + r / 2},${t}`,
  `L${e + r},${t - r / 2}`,
  `L${e + r / 2},${t - r}`,
  `L${e},${t - r / 2}`,
  "Z"
].join(" "), "createDecisionBoxPathD");
async function cp(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: a, bbox: n } = await it(e, t, rt(t)), s = n.width + t.padding, o = n.height + t.padding, l = s + o, c = 0.5, h = [
    { x: l / 2, y: 0 },
    { x: l, y: -l / 2 },
    { x: l / 2, y: -l },
    { x: 0, y: -l / 2 }
  ];
  let u;
  const { cssStyles: f } = t;
  if (t.look === "handDrawn") {
    const d = j.svg(a), g = Y(t, {}), m = Av(0, 0, l), y = d.path(m, g);
    u = a.insert(() => y, ":first-child").attr("transform", `translate(${-l / 2 + c}, ${l / 2})`), f && u.attr("style", f);
  } else
    u = Ye(a, l, l, h), u.attr("transform", `translate(${-l / 2 + c}, ${l / 2})`);
  return i && u.attr("style", i), G(t, u), t.calcIntersect = function(d, g) {
    const m = d.width, y = [
      { x: m / 2, y: 0 },
      { x: m, y: -m / 2 },
      { x: m / 2, y: -m },
      { x: 0, y: -m / 2 }
    ], x = W.polygon(d, y, g);
    return { x: x.x - 0.5, y: x.y - 0.5 };
  }, t.intersect = function(d) {
    return this.calcIntersect(t, d);
  }, a;
}
p(cp, "question");
async function hp(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: a, bbox: n, label: s } = await it(e, t, rt(t)), o = Math.max(n.width + (t.padding ?? 0), t?.width ?? 0), l = Math.max(n.height + (t.padding ?? 0), t?.height ?? 0), c = -o / 2, h = -l / 2, u = h / 2, f = [
    { x: c + u, y: h },
    { x: c, y: 0 },
    { x: c + u, y: -h },
    { x: -c, y: -h },
    { x: -c, y: h }
  ], { cssStyles: d } = t, g = j.svg(a), m = Y(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const y = lt(f), x = g.path(y, m), b = a.insert(() => x, ":first-child");
  return b.attr("class", "basic label-container"), d && t.look !== "handDrawn" && b.selectAll("path").attr("style", d), i && t.look !== "handDrawn" && b.selectAll("path").attr("style", i), b.attr("transform", `translate(${-u / 2},0)`), s.attr(
    "transform",
    `translate(${-u / 2 - n.width / 2 - (n.x - (n.left ?? 0))}, ${-(n.height / 2) - (n.y - (n.top ?? 0))})`
  ), G(t, b), t.intersect = function(C) {
    return W.polygon(t, f, C);
  }, a;
}
p(hp, "rect_left_inv_arrow");
async function up(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  let a;
  t.cssClasses ? a = "node " + t.cssClasses : a = "node default";
  const n = e.insert("g").attr("class", a).attr("id", t.domId || t.id), s = n.insert("g"), o = n.insert("g").attr("class", "label").attr("style", i), l = t.description, c = t.label, h = o.node().appendChild(await er(c, t.labelStyle, !0, !0));
  let u = { width: 0, height: 0 };
  if (Bt(ft()?.flowchart?.htmlLabels)) {
    const D = h.children[0], I = ht(h);
    u = D.getBoundingClientRect(), I.attr("width", u.width), I.attr("height", u.height);
  }
  F.info("Text 2", l);
  const f = l || [], d = h.getBBox(), g = o.node().appendChild(
    await er(
      f.join ? f.join("<br/>") : f,
      t.labelStyle,
      !0,
      !0
    )
  ), m = g.children[0], y = ht(g);
  u = m.getBoundingClientRect(), y.attr("width", u.width), y.attr("height", u.height);
  const x = (t.padding || 0) / 2;
  ht(g).attr(
    "transform",
    "translate( " + (u.width > d.width ? 0 : (d.width - u.width) / 2) + ", " + (d.height + x + 5) + ")"
  ), ht(h).attr(
    "transform",
    "translate( " + (u.width < d.width ? 0 : -(d.width - u.width) / 2) + ", 0)"
  ), u = o.node().getBBox(), o.attr(
    "transform",
    "translate(" + -u.width / 2 + ", " + (-u.height / 2 - x + 3) + ")"
  );
  const b = u.width + (t.padding || 0), C = u.height + (t.padding || 0), v = -u.width / 2 - x, k = -u.height / 2 - x;
  let A, S;
  if (t.look === "handDrawn") {
    const D = j.svg(n), I = Y(t, {}), O = D.path(
      je(v, k, b, C, t.rx || 0),
      I
    ), E = D.line(
      -u.width / 2 - x,
      -u.height / 2 - x + d.height + x,
      u.width / 2 + x,
      -u.height / 2 - x + d.height + x,
      I
    );
    S = n.insert(() => (F.debug("Rough node insert CXC", O), E), ":first-child"), A = n.insert(() => (F.debug("Rough node insert CXC", O), O), ":first-child");
  } else
    A = s.insert("rect", ":first-child"), S = s.insert("line"), A.attr("class", "outer title-state").attr("style", i).attr("x", -u.width / 2 - x).attr("y", -u.height / 2 - x).attr("width", u.width + (t.padding || 0)).attr("height", u.height + (t.padding || 0)), S.attr("class", "divider").attr("x1", -u.width / 2 - x).attr("x2", u.width / 2 + x).attr("y1", -u.height / 2 - x + d.height + x).attr("y2", -u.height / 2 - x + d.height + x);
  return G(t, A), t.intersect = function(D) {
    return W.rect(t, D);
  }, n;
}
p(up, "rectWithTitle");
function pi(e, t, r, i, a, n, s) {
  const l = (e + r) / 2, c = (t + i) / 2, h = Math.atan2(i - t, r - e), u = (r - e) / 2, f = (i - t) / 2, d = u / a, g = f / n, m = Math.sqrt(d ** 2 + g ** 2);
  if (m > 1)
    throw new Error("The given radii are too small to create an arc between the points.");
  const y = Math.sqrt(1 - m ** 2), x = l + y * n * Math.sin(h) * (s ? -1 : 1), b = c - y * a * Math.cos(h) * (s ? -1 : 1), C = Math.atan2((t - b) / n, (e - x) / a);
  let k = Math.atan2((i - b) / n, (r - x) / a) - C;
  s && k < 0 && (k += 2 * Math.PI), !s && k > 0 && (k -= 2 * Math.PI);
  const A = [];
  for (let S = 0; S < 20; S++) {
    const D = S / 19, I = C + D * k, O = x + a * Math.cos(I), E = b + n * Math.sin(I);
    A.push({ x: O, y: E });
  }
  return A;
}
p(pi, "generateArcPoints");
async function fp(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: a, bbox: n } = await it(e, t, rt(t)), s = t?.padding ?? 0, o = t?.padding ?? 0, l = (t?.width ? t?.width : n.width) + s * 2, c = (t?.height ? t?.height : n.height) + o * 2, h = t.radius || 5, u = t.taper || 5, { cssStyles: f } = t, d = j.svg(a), g = Y(t, {});
  t.stroke && (g.stroke = t.stroke), t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const m = [
    // Top edge (left to right)
    { x: -l / 2 + u, y: -c / 2 },
    // Top-left corner start (1)
    { x: l / 2 - u, y: -c / 2 },
    // Top-right corner start (2)
    ...pi(l / 2 - u, -c / 2, l / 2, -c / 2 + u, h, h, !0),
    // Top-left arc (2 to 3)
    // Right edge (top to bottom)
    { x: l / 2, y: -c / 2 + u },
    // Top-right taper point (3)
    { x: l / 2, y: c / 2 - u },
    // Bottom-right taper point (4)
    ...pi(l / 2, c / 2 - u, l / 2 - u, c / 2, h, h, !0),
    // Top-left arc (4 to 5)
    // Bottom edge (right to left)
    { x: l / 2 - u, y: c / 2 },
    // Bottom-right corner start (5)
    { x: -l / 2 + u, y: c / 2 },
    // Bottom-left corner start (6)
    ...pi(-l / 2 + u, c / 2, -l / 2, c / 2 - u, h, h, !0),
    // Top-left arc (4 to 5)
    // Left edge (bottom to top)
    { x: -l / 2, y: c / 2 - u },
    // Bottom-left taper point (7)
    { x: -l / 2, y: -c / 2 + u },
    // Top-left taper point (8)
    ...pi(-l / 2, -c / 2 + u, -l / 2 + u, -c / 2, h, h, !0)
    // Top-left arc (4 to 5)
  ], y = lt(m), x = d.path(y, g), b = a.insert(() => x, ":first-child");
  return b.attr("class", "basic label-container outer-path"), f && t.look !== "handDrawn" && b.selectChildren("path").attr("style", f), i && t.look !== "handDrawn" && b.selectChildren("path").attr("style", i), G(t, b), t.intersect = function(C) {
    return W.polygon(t, m, C);
  }, a;
}
p(fp, "roundedRect");
async function dp(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: a, bbox: n, label: s } = await it(e, t, rt(t)), o = t?.padding ?? 0, l = Math.max(n.width + (t.padding ?? 0) * 2, t?.width ?? 0), c = Math.max(n.height + (t.padding ?? 0) * 2, t?.height ?? 0), h = -n.width / 2 - o, u = -n.height / 2 - o, { cssStyles: f } = t, d = j.svg(a), g = Y(t, {});
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const m = [
    { x: h, y: u },
    { x: h + l + 8, y: u },
    { x: h + l + 8, y: u + c },
    { x: h - 8, y: u + c },
    { x: h - 8, y: u },
    { x: h, y: u },
    { x: h, y: u + c }
  ], y = d.polygon(
    m.map((b) => [b.x, b.y]),
    g
  ), x = a.insert(() => y, ":first-child");
  return x.attr("class", "basic label-container").attr("style", Rt(f)), i && t.look !== "handDrawn" && x.selectAll("path").attr("style", i), f && t.look !== "handDrawn" && x.selectAll("path").attr("style", i), s.attr(
    "transform",
    `translate(${-l / 2 + 4 + (t.padding ?? 0) - (n.x - (n.left ?? 0))},${-c / 2 + (t.padding ?? 0) - (n.y - (n.top ?? 0))})`
  ), G(t, x), t.intersect = function(b) {
    return W.rect(t, b);
  }, a;
}
p(dp, "shadedProcess");
async function pp(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: a, bbox: n, label: s } = await it(e, t, rt(t)), o = Math.max(n.width + (t.padding ?? 0) * 2, t?.width ?? 0), l = Math.max(n.height + (t.padding ?? 0) * 2, t?.height ?? 0), c = -o / 2, h = -l / 2, { cssStyles: u } = t, f = j.svg(a), d = Y(t, {});
  t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
  const g = [
    { x: c, y: h },
    { x: c, y: h + l },
    { x: c + o, y: h + l },
    { x: c + o, y: h - l / 2 }
  ], m = lt(g), y = f.path(m, d), x = a.insert(() => y, ":first-child");
  return x.attr("class", "basic label-container"), u && t.look !== "handDrawn" && x.selectChildren("path").attr("style", u), i && t.look !== "handDrawn" && x.selectChildren("path").attr("style", i), x.attr("transform", `translate(0, ${l / 4})`), s.attr(
    "transform",
    `translate(${-o / 2 + (t.padding ?? 0) - (n.x - (n.left ?? 0))}, ${-l / 4 + (t.padding ?? 0) - (n.y - (n.top ?? 0))})`
  ), G(t, x), t.intersect = function(b) {
    return W.polygon(t, g, b);
  }, a;
}
p(pp, "slopedRect");
async function gp(e, t) {
  const r = {
    rx: 0,
    ry: 0,
    labelPaddingX: t.labelPaddingX ?? (t?.padding || 0) * 2,
    labelPaddingY: (t?.padding || 0) * 1
  };
  return xn(e, t, r);
}
p(gp, "squareRect");
async function mp(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: a, bbox: n } = await it(e, t, rt(t)), s = n.height + t.padding, o = n.width + s / 4 + t.padding, l = s / 2, { cssStyles: c } = t, h = j.svg(a), u = Y(t, {});
  t.look !== "handDrawn" && (u.roughness = 0, u.fillStyle = "solid");
  const f = [
    { x: -o / 2 + l, y: -s / 2 },
    { x: o / 2 - l, y: -s / 2 },
    ...Mi(-o / 2 + l, 0, l, 50, 90, 270),
    { x: o / 2 - l, y: s / 2 },
    ...Mi(o / 2 - l, 0, l, 50, 270, 450)
  ], d = lt(f), g = h.path(d, u), m = a.insert(() => g, ":first-child");
  return m.attr("class", "basic label-container outer-path"), c && t.look !== "handDrawn" && m.selectChildren("path").attr("style", c), i && t.look !== "handDrawn" && m.selectChildren("path").attr("style", i), G(t, m), t.intersect = function(y) {
    return W.polygon(t, f, y);
  }, a;
}
p(mp, "stadium");
async function yp(e, t) {
  return xn(e, t, {
    rx: 5,
    ry: 5
  });
}
p(yp, "state");
function xp(e, t, { config: { themeVariables: r } }) {
  const { labelStyles: i, nodeStyles: a } = U(t);
  t.labelStyle = i;
  const { cssStyles: n } = t, { lineColor: s, stateBorder: o, nodeBorder: l } = r, c = e.insert("g").attr("class", "node default").attr("id", t.domId || t.id), h = j.svg(c), u = Y(t, {});
  t.look !== "handDrawn" && (u.roughness = 0, u.fillStyle = "solid");
  const f = h.circle(0, 0, 14, {
    ...u,
    stroke: s,
    strokeWidth: 2
  }), d = o ?? l, g = h.circle(0, 0, 5, {
    ...u,
    fill: d,
    stroke: d,
    strokeWidth: 2,
    fillStyle: "solid"
  }), m = c.insert(() => f, ":first-child");
  return m.insert(() => g), n && m.selectAll("path").attr("style", n), a && m.selectAll("path").attr("style", a), G(t, m), t.intersect = function(y) {
    return W.circle(t, 7, y);
  }, c;
}
p(xp, "stateEnd");
function bp(e, t, { config: { themeVariables: r } }) {
  const { lineColor: i } = r, a = e.insert("g").attr("class", "node default").attr("id", t.domId || t.id);
  let n;
  if (t.look === "handDrawn") {
    const o = j.svg(a).circle(0, 0, 14, yw(i));
    n = a.insert(() => o), n.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
  } else
    n = a.insert("circle", ":first-child"), n.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
  return G(t, n), t.intersect = function(s) {
    return W.circle(t, 7, s);
  }, a;
}
p(bp, "stateStart");
async function Cp(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: a, bbox: n } = await it(e, t, rt(t)), s = (t?.padding || 0) / 2, o = n.width + t.padding, l = n.height + t.padding, c = -n.width / 2 - s, h = -n.height / 2 - s, u = [
    { x: 0, y: 0 },
    { x: o, y: 0 },
    { x: o, y: -l },
    { x: 0, y: -l },
    { x: 0, y: 0 },
    { x: -8, y: 0 },
    { x: o + 8, y: 0 },
    { x: o + 8, y: -l },
    { x: -8, y: -l },
    { x: -8, y: 0 }
  ];
  if (t.look === "handDrawn") {
    const f = j.svg(a), d = Y(t, {}), g = f.rectangle(c - 8, h, o + 16, l, d), m = f.line(c, h, c, h + l, d), y = f.line(c + o, h, c + o, h + l, d);
    a.insert(() => m, ":first-child"), a.insert(() => y, ":first-child");
    const x = a.insert(() => g, ":first-child"), { cssStyles: b } = t;
    x.attr("class", "basic label-container").attr("style", Rt(b)), G(t, x);
  } else {
    const f = Ye(a, o, l, u);
    i && f.attr("style", i), G(t, f);
  }
  return t.intersect = function(f) {
    return W.polygon(t, u, f);
  }, a;
}
p(Cp, "subroutine");
async function wp(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: a, bbox: n } = await it(e, t, rt(t)), s = Math.max(n.width + (t.padding ?? 0) * 2, t?.width ?? 0), o = Math.max(n.height + (t.padding ?? 0) * 2, t?.height ?? 0), l = -s / 2, c = -o / 2, h = 0.2 * o, u = 0.2 * o, { cssStyles: f } = t, d = j.svg(a), g = Y(t, {}), m = [
    { x: l - h / 2, y: c },
    { x: l + s + h / 2, y: c },
    { x: l + s + h / 2, y: c + o },
    { x: l - h / 2, y: c + o }
  ], y = [
    { x: l + s - h / 2, y: c + o },
    { x: l + s + h / 2, y: c + o },
    { x: l + s + h / 2, y: c + o - u }
  ];
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const x = lt(m), b = d.path(x, g), C = lt(y), v = d.path(C, { ...g, fillStyle: "solid" }), k = a.insert(() => v, ":first-child");
  return k.insert(() => b, ":first-child"), k.attr("class", "basic label-container"), f && t.look !== "handDrawn" && k.selectAll("path").attr("style", f), i && t.look !== "handDrawn" && k.selectAll("path").attr("style", i), G(t, k), t.intersect = function(A) {
    return W.polygon(t, m, A);
  }, a;
}
p(wp, "taggedRect");
async function kp(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: a, bbox: n, label: s } = await it(e, t, rt(t)), o = Math.max(n.width + (t.padding ?? 0) * 2, t?.width ?? 0), l = Math.max(n.height + (t.padding ?? 0) * 2, t?.height ?? 0), c = l / 4, h = 0.2 * o, u = 0.2 * l, f = l + c, { cssStyles: d } = t, g = j.svg(a), m = Y(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const y = [
    { x: -o / 2 - o / 2 * 0.1, y: f / 2 },
    ...We(
      -o / 2 - o / 2 * 0.1,
      f / 2,
      o / 2 + o / 2 * 0.1,
      f / 2,
      c,
      0.8
    ),
    { x: o / 2 + o / 2 * 0.1, y: -f / 2 },
    { x: -o / 2 - o / 2 * 0.1, y: -f / 2 }
  ], x = -o / 2 + o / 2 * 0.1, b = -f / 2 - u * 0.4, C = [
    { x: x + o - h, y: (b + l) * 1.4 },
    { x: x + o, y: b + l - u },
    { x: x + o, y: (b + l) * 0.9 },
    ...We(
      x + o,
      (b + l) * 1.3,
      x + o - h,
      (b + l) * 1.5,
      -l * 0.03,
      0.5
    )
  ], v = lt(y), k = g.path(v, m), A = lt(C), S = g.path(A, {
    ...m,
    fillStyle: "solid"
  }), D = a.insert(() => S, ":first-child");
  return D.insert(() => k, ":first-child"), D.attr("class", "basic label-container"), d && t.look !== "handDrawn" && D.selectAll("path").attr("style", d), i && t.look !== "handDrawn" && D.selectAll("path").attr("style", i), D.attr("transform", `translate(0,${-c / 2})`), s.attr(
    "transform",
    `translate(${-o / 2 + (t.padding ?? 0) - (n.x - (n.left ?? 0))},${-l / 2 + (t.padding ?? 0) - c / 2 - (n.y - (n.top ?? 0))})`
  ), G(t, D), t.intersect = function(I) {
    return W.polygon(t, y, I);
  }, a;
}
p(kp, "taggedWaveEdgedRectangle");
async function vp(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: a, bbox: n } = await it(e, t, rt(t)), s = Math.max(n.width + t.padding, t?.width || 0), o = Math.max(n.height + t.padding, t?.height || 0), l = -s / 2, c = -o / 2, h = a.insert("rect", ":first-child");
  return h.attr("class", "text").attr("style", i).attr("rx", 0).attr("ry", 0).attr("x", l).attr("y", c).attr("width", s).attr("height", o), G(t, h), t.intersect = function(u) {
    return W.rect(t, u);
  }, a;
}
p(vp, "text");
var Lv = /* @__PURE__ */ p((e, t, r, i, a, n) => `M${e},${t}
    a${a},${n} 0,0,1 0,${-i}
    l${r},0
    a${a},${n} 0,0,1 0,${i}
    M${r},${-i}
    a${a},${n} 0,0,0 0,${i}
    l${-r},0`, "createCylinderPathD"), Mv = /* @__PURE__ */ p((e, t, r, i, a, n) => [
  `M${e},${t}`,
  `M${e + r},${t}`,
  `a${a},${n} 0,0,0 0,${-i}`,
  `l${-r},0`,
  `a${a},${n} 0,0,0 0,${i}`,
  `l${r},0`
].join(" "), "createOuterCylinderPathD"), Ev = /* @__PURE__ */ p((e, t, r, i, a, n) => [`M${e + r / 2},${-i / 2}`, `a${a},${n} 0,0,0 0,${i}`].join(" "), "createInnerCylinderPathD");
async function _p(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: a, bbox: n, label: s, halfPadding: o } = await it(
    e,
    t,
    rt(t)
  ), l = t.look === "neo" ? o * 2 : o, c = n.height + l, h = c / 2, u = h / (2.5 + c / 50), f = n.width + u + l, { cssStyles: d } = t;
  let g;
  if (t.look === "handDrawn") {
    const m = j.svg(a), y = Mv(0, 0, f, c, u, h), x = Ev(0, 0, f, c, u, h), b = m.path(y, Y(t, {})), C = m.path(x, Y(t, { fill: "none" }));
    g = a.insert(() => C, ":first-child"), g = a.insert(() => b, ":first-child"), g.attr("class", "basic label-container"), d && g.attr("style", d);
  } else {
    const m = Lv(0, 0, f, c, u, h);
    g = a.insert("path", ":first-child").attr("d", m).attr("class", "basic label-container").attr("style", Rt(d)).attr("style", i), g.attr("class", "basic label-container"), d && g.selectAll("path").attr("style", d), i && g.selectAll("path").attr("style", i);
  }
  return g.attr("label-offset-x", u), g.attr("transform", `translate(${-f / 2}, ${c / 2} )`), s.attr(
    "transform",
    `translate(${-(n.width / 2) - u - (n.x - (n.left ?? 0))}, ${-(n.height / 2) - (n.y - (n.top ?? 0))})`
  ), G(t, g), t.intersect = function(m) {
    const y = W.rect(t, m), x = y.y - (t.y ?? 0);
    if (h != 0 && (Math.abs(x) < (t.height ?? 0) / 2 || Math.abs(x) == (t.height ?? 0) / 2 && Math.abs(y.x - (t.x ?? 0)) > (t.width ?? 0) / 2 - u)) {
      let b = u * u * (1 - x * x / (h * h));
      b != 0 && (b = Math.sqrt(Math.abs(b))), b = u - b, m.x - (t.x ?? 0) > 0 && (b = -b), y.x += b;
    }
    return y;
  }, a;
}
p(_p, "tiltedCylinder");
async function Sp(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: a, bbox: n } = await it(e, t, rt(t)), s = n.width + t.padding, o = n.height + t.padding, l = [
    { x: -3 * o / 6, y: 0 },
    { x: s + 3 * o / 6, y: 0 },
    { x: s, y: -o },
    { x: 0, y: -o }
  ];
  let c;
  const { cssStyles: h } = t;
  if (t.look === "handDrawn") {
    const u = j.svg(a), f = Y(t, {}), d = lt(l), g = u.path(d, f);
    c = a.insert(() => g, ":first-child").attr("transform", `translate(${-s / 2}, ${o / 2})`), h && c.attr("style", h);
  } else
    c = Ye(a, s, o, l);
  return i && c.attr("style", i), t.width = s, t.height = o, G(t, c), t.intersect = function(u) {
    return W.polygon(t, l, u);
  }, a;
}
p(Sp, "trapezoid");
async function Tp(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: a, bbox: n } = await it(e, t, rt(t)), s = 60, o = 20, l = Math.max(s, n.width + (t.padding ?? 0) * 2, t?.width ?? 0), c = Math.max(o, n.height + (t.padding ?? 0) * 2, t?.height ?? 0), { cssStyles: h } = t, u = j.svg(a), f = Y(t, {});
  t.look !== "handDrawn" && (f.roughness = 0, f.fillStyle = "solid");
  const d = [
    { x: -l / 2 * 0.8, y: -c / 2 },
    { x: l / 2 * 0.8, y: -c / 2 },
    { x: l / 2, y: -c / 2 * 0.6 },
    { x: l / 2, y: c / 2 },
    { x: -l / 2, y: c / 2 },
    { x: -l / 2, y: -c / 2 * 0.6 }
  ], g = lt(d), m = u.path(g, f), y = a.insert(() => m, ":first-child");
  return y.attr("class", "basic label-container"), h && t.look !== "handDrawn" && y.selectChildren("path").attr("style", h), i && t.look !== "handDrawn" && y.selectChildren("path").attr("style", i), G(t, y), t.intersect = function(x) {
    return W.polygon(t, d, x);
  }, a;
}
p(Tp, "trapezoidalPentagon");
async function Bp(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: a, bbox: n, label: s } = await it(e, t, rt(t)), o = Bt(ft().flowchart?.htmlLabels), l = n.width + (t.padding ?? 0), c = l + n.height, h = l + n.height, u = [
    { x: 0, y: 0 },
    { x: h, y: 0 },
    { x: h / 2, y: -c }
  ], { cssStyles: f } = t, d = j.svg(a), g = Y(t, {});
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const m = lt(u), y = d.path(m, g), x = a.insert(() => y, ":first-child").attr("transform", `translate(${-c / 2}, ${c / 2})`);
  return f && t.look !== "handDrawn" && x.selectChildren("path").attr("style", f), i && t.look !== "handDrawn" && x.selectChildren("path").attr("style", i), t.width = l, t.height = c, G(t, x), s.attr(
    "transform",
    `translate(${-n.width / 2 - (n.x - (n.left ?? 0))}, ${c / 2 - (n.height + (t.padding ?? 0) / (o ? 2 : 1) - (n.y - (n.top ?? 0)))})`
  ), t.intersect = function(b) {
    return F.info("Triangle intersect", t, u, b), W.polygon(t, u, b);
  }, a;
}
p(Bp, "triangle");
async function Ap(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: a, bbox: n, label: s } = await it(e, t, rt(t)), o = Math.max(n.width + (t.padding ?? 0) * 2, t?.width ?? 0), l = Math.max(n.height + (t.padding ?? 0) * 2, t?.height ?? 0), c = l / 8, h = l + c, { cssStyles: u } = t, d = 70 - o, g = d > 0 ? d / 2 : 0, m = j.svg(a), y = Y(t, {});
  t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
  const x = [
    { x: -o / 2 - g, y: h / 2 },
    ...We(
      -o / 2 - g,
      h / 2,
      o / 2 + g,
      h / 2,
      c,
      0.8
    ),
    { x: o / 2 + g, y: -h / 2 },
    { x: -o / 2 - g, y: -h / 2 }
  ], b = lt(x), C = m.path(b, y), v = a.insert(() => C, ":first-child");
  return v.attr("class", "basic label-container"), u && t.look !== "handDrawn" && v.selectAll("path").attr("style", u), i && t.look !== "handDrawn" && v.selectAll("path").attr("style", i), v.attr("transform", `translate(0,${-c / 2})`), s.attr(
    "transform",
    `translate(${-o / 2 + (t.padding ?? 0) - (n.x - (n.left ?? 0))},${-l / 2 + (t.padding ?? 0) - c - (n.y - (n.top ?? 0))})`
  ), G(t, v), t.intersect = function(k) {
    return W.polygon(t, x, k);
  }, a;
}
p(Ap, "waveEdgedRectangle");
async function Lp(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: a, bbox: n } = await it(e, t, rt(t)), s = 100, o = 50, l = Math.max(n.width + (t.padding ?? 0) * 2, t?.width ?? 0), c = Math.max(n.height + (t.padding ?? 0) * 2, t?.height ?? 0), h = l / c;
  let u = l, f = c;
  u > f * h ? f = u / h : u = f * h, u = Math.max(u, s), f = Math.max(f, o);
  const d = Math.min(f * 0.2, f / 4), g = f + d * 2, { cssStyles: m } = t, y = j.svg(a), x = Y(t, {});
  t.look !== "handDrawn" && (x.roughness = 0, x.fillStyle = "solid");
  const b = [
    { x: -u / 2, y: g / 2 },
    ...We(-u / 2, g / 2, u / 2, g / 2, d, 1),
    { x: u / 2, y: -g / 2 },
    ...We(u / 2, -g / 2, -u / 2, -g / 2, d, -1)
  ], C = lt(b), v = y.path(C, x), k = a.insert(() => v, ":first-child");
  return k.attr("class", "basic label-container"), m && t.look !== "handDrawn" && k.selectAll("path").attr("style", m), i && t.look !== "handDrawn" && k.selectAll("path").attr("style", i), G(t, k), t.intersect = function(A) {
    return W.polygon(t, b, A);
  }, a;
}
p(Lp, "waveRectangle");
async function Mp(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: a, bbox: n, label: s } = await it(e, t, rt(t)), o = Math.max(n.width + (t.padding ?? 0) * 2, t?.width ?? 0), l = Math.max(n.height + (t.padding ?? 0) * 2, t?.height ?? 0), c = 5, h = -o / 2, u = -l / 2, { cssStyles: f } = t, d = j.svg(a), g = Y(t, {}), m = [
    { x: h - c, y: u - c },
    { x: h - c, y: u + l },
    { x: h + o, y: u + l },
    { x: h + o, y: u - c }
  ], y = `M${h - c},${u - c} L${h + o},${u - c} L${h + o},${u + l} L${h - c},${u + l} L${h - c},${u - c}
                M${h - c},${u} L${h + o},${u}
                M${h},${u - c} L${h},${u + l}`;
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const x = d.path(y, g), b = a.insert(() => x, ":first-child");
  return b.attr("transform", `translate(${c / 2}, ${c / 2})`), b.attr("class", "basic label-container"), f && t.look !== "handDrawn" && b.selectAll("path").attr("style", f), i && t.look !== "handDrawn" && b.selectAll("path").attr("style", i), s.attr(
    "transform",
    `translate(${-(n.width / 2) + c / 2 - (n.x - (n.left ?? 0))}, ${-(n.height / 2) + c / 2 - (n.y - (n.top ?? 0))})`
  ), G(t, b), t.intersect = function(C) {
    return W.polygon(t, m, C);
  }, a;
}
p(Mp, "windowPane");
async function qo(e, t) {
  const r = t;
  if (r.alias && (t.label = r.alias), t.look === "handDrawn") {
    const { themeVariables: J } = Dt(), { background: Z } = J, ct = {
      ...t,
      id: t.id + "-background",
      look: "default",
      cssStyles: ["stroke: none", `fill: ${Z}`]
    };
    await qo(e, ct);
  }
  const i = Dt();
  t.useHtmlLabels = i.htmlLabels;
  let a = i.er?.diagramPadding ?? 10, n = i.er?.entityPadding ?? 6;
  const { cssStyles: s } = t, { labelStyles: o, nodeStyles: l } = U(t);
  if (r.attributes.length === 0 && t.label) {
    const J = {
      rx: 0,
      ry: 0,
      labelPaddingX: a,
      labelPaddingY: a * 1.5
    };
    Ee(t.label, i) + J.labelPaddingX * 2 < i.er.minEntityWidth && (t.width = i.er.minEntityWidth);
    const Z = await xn(e, t, J);
    if (!Bt(i.htmlLabels)) {
      const ct = Z.select("text"), nt = ct.node()?.getBBox();
      ct.attr("transform", `translate(${-nt.width / 2}, 0)`);
    }
    return Z;
  }
  i.htmlLabels || (a *= 1.25, n *= 1.25);
  let c = rt(t);
  c || (c = "node default");
  const h = e.insert("g").attr("class", c).attr("id", t.domId || t.id), u = await kr(h, t.label ?? "", i, 0, 0, ["name"], o);
  u.height += n;
  let f = 0;
  const d = [], g = [];
  let m = 0, y = 0, x = 0, b = 0, C = !0, v = !0;
  for (const J of r.attributes) {
    const Z = await kr(
      h,
      J.type,
      i,
      0,
      f,
      ["attribute-type"],
      o
    );
    m = Math.max(m, Z.width + a);
    const ct = await kr(
      h,
      J.name,
      i,
      0,
      f,
      ["attribute-name"],
      o
    );
    y = Math.max(y, ct.width + a);
    const nt = await kr(
      h,
      J.keys.join(),
      i,
      0,
      f,
      ["attribute-keys"],
      o
    );
    x = Math.max(x, nt.width + a);
    const bt = await kr(
      h,
      J.comment,
      i,
      0,
      f,
      ["attribute-comment"],
      o
    );
    b = Math.max(b, bt.width + a);
    const Ct = Math.max(Z.height, ct.height, nt.height, bt.height) + n;
    g.push({ yOffset: f, rowHeight: Ct }), f += Ct;
  }
  let k = 4;
  x <= a && (C = !1, x = 0, k--), b <= a && (v = !1, b = 0, k--);
  const A = h.node().getBBox();
  if (u.width + a * 2 - (m + y + x + b) > 0) {
    const J = u.width + a * 2 - (m + y + x + b);
    m += J / k, y += J / k, x > 0 && (x += J / k), b > 0 && (b += J / k);
  }
  const S = m + y + x + b, D = j.svg(h), I = Y(t, {});
  t.look !== "handDrawn" && (I.roughness = 0, I.fillStyle = "solid");
  let O = 0;
  g.length > 0 && (O = g.reduce((J, Z) => J + (Z?.rowHeight ?? 0), 0));
  const E = Math.max(A.width + a * 2, t?.width || 0, S), N = Math.max((O ?? 0) + u.height, t?.height || 0), R = -E / 2, B = -N / 2;
  h.selectAll("g:not(:first-child)").each((J, Z, ct) => {
    const nt = ht(ct[Z]), bt = nt.attr("transform");
    let Ct = 0, Pt = 0;
    if (bt) {
      const yt = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(bt);
      yt && (Ct = parseFloat(yt[1]), Pt = parseFloat(yt[2]), nt.attr("class").includes("attribute-name") ? Ct += m : nt.attr("class").includes("attribute-keys") ? Ct += m + y : nt.attr("class").includes("attribute-comment") && (Ct += m + y + x));
    }
    nt.attr(
      "transform",
      `translate(${R + a / 2 + Ct}, ${Pt + B + u.height + n / 2})`
    );
  }), h.select(".name").attr("transform", "translate(" + -u.width / 2 + ", " + (B + n / 2) + ")");
  const L = D.rectangle(R, B, E, N, I), T = h.insert(() => L, ":first-child").attr("style", s.join("")), { themeVariables: $ } = Dt(), { rowEven: M, rowOdd: q, nodeBorder: X } = $;
  d.push(0);
  for (const [J, Z] of g.entries()) {
    const nt = (J + 1) % 2 === 0 && Z.yOffset !== 0, bt = D.rectangle(R, u.height + B + Z?.yOffset, E, Z?.rowHeight, {
      ...I,
      fill: nt ? M : q,
      stroke: X
    });
    h.insert(() => bt, "g.label").attr("style", s.join("")).attr("class", `row-rect-${nt ? "even" : "odd"}`);
  }
  let K = D.line(R, u.height + B, E + R, u.height + B, I);
  h.insert(() => K).attr("class", "divider"), K = D.line(m + R, u.height + B, m + R, N + B, I), h.insert(() => K).attr("class", "divider"), C && (K = D.line(
    m + y + R,
    u.height + B,
    m + y + R,
    N + B,
    I
  ), h.insert(() => K).attr("class", "divider")), v && (K = D.line(
    m + y + x + R,
    u.height + B,
    m + y + x + R,
    N + B,
    I
  ), h.insert(() => K).attr("class", "divider"));
  for (const J of d)
    K = D.line(
      R,
      u.height + B + J,
      E + R,
      u.height + B + J,
      I
    ), h.insert(() => K).attr("class", "divider");
  if (G(t, T), l && t.look !== "handDrawn") {
    const Z = l.split(";")?.filter((ct) => ct.includes("stroke"))?.map((ct) => `${ct}`).join("; ");
    h.selectAll("path").attr("style", Z ?? ""), h.selectAll(".row-rect-even path").attr("style", l);
  }
  return t.intersect = function(J) {
    return W.rect(t, J);
  }, h;
}
p(qo, "erBox");
async function kr(e, t, r, i = 0, a = 0, n = [], s = "") {
  const o = e.insert("g").attr("class", `label ${n.join(" ")}`).attr("transform", `translate(${i}, ${a})`).attr("style", s);
  t !== jl(t) && (t = jl(t), t = t.replaceAll("<", "&lt;").replaceAll(">", "&gt;"));
  const l = o.node().appendChild(
    await He(
      o,
      t,
      {
        width: Ee(t, r) + 100,
        style: s,
        useHtmlLabels: r.htmlLabels
      },
      r
    )
  );
  if (t.includes("&lt;") || t.includes("&gt;")) {
    let h = l.children[0];
    for (h.textContent = h.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">"); h.childNodes[0]; )
      h = h.childNodes[0], h.textContent = h.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">");
  }
  let c = l.getBBox();
  if (Bt(r.htmlLabels)) {
    const h = l.children[0];
    h.style.textAlign = "start";
    const u = ht(l);
    c = h.getBoundingClientRect(), u.attr("width", c.width), u.attr("height", c.height);
  }
  return c;
}
p(kr, "addText");
async function Ep(e, t, r, i, a = r.class.padding ?? 12) {
  const n = i ? 0 : 3, s = e.insert("g").attr("class", rt(t)).attr("id", t.domId || t.id);
  let o = null, l = null, c = null, h = null, u = 0, f = 0, d = 0;
  if (o = s.insert("g").attr("class", "annotation-group text"), t.annotations.length > 0) {
    const b = t.annotations[0];
    await gi(o, { text: `«${b}»` }, 0), u = o.node().getBBox().height;
  }
  l = s.insert("g").attr("class", "label-group text"), await gi(l, t, 0, ["font-weight: bolder"]);
  const g = l.node().getBBox();
  f = g.height, c = s.insert("g").attr("class", "members-group text");
  let m = 0;
  for (const b of t.members) {
    const C = await gi(c, b, m, [b.parseClassifier()]);
    m += C + n;
  }
  d = c.node().getBBox().height, d <= 0 && (d = a / 2), h = s.insert("g").attr("class", "methods-group text");
  let y = 0;
  for (const b of t.methods) {
    const C = await gi(h, b, y, [b.parseClassifier()]);
    y += C + n;
  }
  let x = s.node().getBBox();
  if (o !== null) {
    const b = o.node().getBBox();
    o.attr("transform", `translate(${-b.width / 2})`);
  }
  return l.attr("transform", `translate(${-g.width / 2}, ${u})`), x = s.node().getBBox(), c.attr(
    "transform",
    `translate(0, ${u + f + a * 2})`
  ), x = s.node().getBBox(), h.attr(
    "transform",
    `translate(0, ${u + f + (d ? d + a * 4 : a * 2)})`
  ), x = s.node().getBBox(), { shapeSvg: s, bbox: x };
}
p(Ep, "textHelper");
async function gi(e, t, r, i = []) {
  const a = e.insert("g").attr("class", "label").attr("style", i.join("; ")), n = Dt();
  let s = "useHtmlLabels" in t ? t.useHtmlLabels : Bt(n.htmlLabels) ?? !0, o = "";
  "text" in t ? o = t.text : o = t.label, !s && o.startsWith("\\") && (o = o.substring(1)), Rr(o) && (s = !0);
  const l = await He(
    a,
    lo(dr(o)),
    {
      width: Ee(o, n) + 50,
      // Add room for error when splitting text into multiple lines
      classes: "markdown-node-label",
      useHtmlLabels: s
    },
    n
  );
  let c, h = 1;
  if (s) {
    const u = l.children[0], f = ht(l);
    h = u.innerHTML.split("<br>").length, u.innerHTML.includes("</math>") && (h += u.innerHTML.split("<mrow>").length - 1);
    const d = u.getElementsByTagName("img");
    if (d) {
      const g = o.replace(/<img[^>]*>/g, "").trim() === "";
      await Promise.all(
        [...d].map(
          (m) => new Promise((y) => {
            function x() {
              if (m.style.display = "flex", m.style.flexDirection = "column", g) {
                const b = n.fontSize?.toString() ?? window.getComputedStyle(document.body).fontSize, v = parseInt(b, 10) * 5 + "px";
                m.style.minWidth = v, m.style.maxWidth = v;
              } else
                m.style.width = "100%";
              y(m);
            }
            p(x, "setupImage"), setTimeout(() => {
              m.complete && x();
            }), m.addEventListener("error", x), m.addEventListener("load", x);
          })
        )
      );
    }
    c = u.getBoundingClientRect(), f.attr("width", c.width), f.attr("height", c.height);
  } else {
    i.includes("font-weight: bolder") && ht(l).selectAll("tspan").attr("font-weight", ""), h = l.children.length;
    const u = l.children[0];
    (l.textContent === "" || l.textContent.includes("&gt")) && (u.textContent = o[0] + o.substring(1).replaceAll("&gt;", ">").replaceAll("&lt;", "<").trim(), o[1] === " " && (u.textContent = u.textContent[0] + " " + u.textContent.substring(1))), u.textContent === "undefined" && (u.textContent = ""), c = l.getBBox();
  }
  return a.attr("transform", "translate(0," + (-c.height / (2 * h) + r) + ")"), c.height;
}
p(gi, "addText");
async function $p(e, t) {
  const r = ft(), i = r.class.padding ?? 12, a = i, n = t.useHtmlLabels ?? Bt(r.htmlLabels) ?? !0, s = t;
  s.annotations = s.annotations ?? [], s.members = s.members ?? [], s.methods = s.methods ?? [];
  const { shapeSvg: o, bbox: l } = await Ep(e, t, r, n, a), { labelStyles: c, nodeStyles: h } = U(t);
  t.labelStyle = c, t.cssStyles = s.styles || "";
  const u = s.styles?.join(";") || h || "";
  t.cssStyles || (t.cssStyles = u.replaceAll("!important", "").split(";"));
  const f = s.members.length === 0 && s.methods.length === 0 && !r.class?.hideEmptyMembersBox, d = j.svg(o), g = Y(t, {});
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const m = l.width;
  let y = l.height;
  s.members.length === 0 && s.methods.length === 0 ? y += a : s.members.length > 0 && s.methods.length === 0 && (y += a * 2);
  const x = -m / 2, b = -y / 2, C = d.rectangle(
    x - i,
    b - i - (f ? i : s.members.length === 0 && s.methods.length === 0 ? -i / 2 : 0),
    m + 2 * i,
    y + 2 * i + (f ? i * 2 : s.members.length === 0 && s.methods.length === 0 ? -i : 0),
    g
  ), v = o.insert(() => C, ":first-child");
  v.attr("class", "basic label-container");
  const k = v.node().getBBox();
  o.selectAll(".text").each((I, O, E) => {
    const N = ht(E[O]), R = N.attr("transform");
    let B = 0;
    if (R) {
      const M = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(R);
      M && (B = parseFloat(M[2]));
    }
    let L = B + b + i - (f ? i : s.members.length === 0 && s.methods.length === 0 ? -i / 2 : 0);
    n || (L -= 4);
    let T = x;
    (N.attr("class").includes("label-group") || N.attr("class").includes("annotation-group")) && (T = -N.node()?.getBBox().width / 2 || 0, o.selectAll("text").each(function($, M, q) {
      window.getComputedStyle(q[M]).textAnchor === "middle" && (T = 0);
    })), N.attr("transform", `translate(${T}, ${L})`);
  });
  const A = o.select(".annotation-group").node().getBBox().height - (f ? i / 2 : 0) || 0, S = o.select(".label-group").node().getBBox().height - (f ? i / 2 : 0) || 0, D = o.select(".members-group").node().getBBox().height - (f ? i / 2 : 0) || 0;
  if (s.members.length > 0 || s.methods.length > 0 || f) {
    const I = d.line(
      k.x,
      A + S + b + i,
      k.x + k.width,
      A + S + b + i,
      g
    );
    o.insert(() => I).attr("class", "divider").attr("style", u);
  }
  if (f || s.members.length > 0 || s.methods.length > 0) {
    const I = d.line(
      k.x,
      A + S + D + b + a * 2 + i,
      k.x + k.width,
      A + S + D + b + i + a * 2,
      g
    );
    o.insert(() => I).attr("class", "divider").attr("style", u);
  }
  if (s.look !== "handDrawn" && o.selectAll("path").attr("style", u), v.select(":nth-child(2)").attr("style", u), o.selectAll(".divider").select("path").attr("style", u), t.labelStyle ? o.selectAll("span").attr("style", t.labelStyle) : o.selectAll("span").attr("style", u), !n) {
    const I = RegExp(/color\s*:\s*([^;]*)/), O = I.exec(u);
    if (O) {
      const E = O[0].replace("color", "fill");
      o.selectAll("tspan").attr("style", E);
    } else if (c) {
      const E = I.exec(c);
      if (E) {
        const N = E[0].replace("color", "fill");
        o.selectAll("tspan").attr("style", N);
      }
    }
  }
  return G(t, v), t.intersect = function(I) {
    return W.rect(t, I);
  }, o;
}
p($p, "classBox");
async function Fp(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const a = t, n = t, s = 20, o = 20, l = "verifyMethod" in t, c = rt(t), h = e.insert("g").attr("class", c).attr("id", t.domId ?? t.id);
  let u;
  l ? u = await me(
    h,
    `&lt;&lt;${a.type}&gt;&gt;`,
    0,
    t.labelStyle
  ) : u = await me(h, "&lt;&lt;Element&gt;&gt;", 0, t.labelStyle);
  let f = u;
  const d = await me(
    h,
    a.name,
    f,
    t.labelStyle + "; font-weight: bold;"
  );
  if (f += d + o, l) {
    const A = await me(
      h,
      `${a.requirementId ? `ID: ${a.requirementId}` : ""}`,
      f,
      t.labelStyle
    );
    f += A;
    const S = await me(
      h,
      `${a.text ? `Text: ${a.text}` : ""}`,
      f,
      t.labelStyle
    );
    f += S;
    const D = await me(
      h,
      `${a.risk ? `Risk: ${a.risk}` : ""}`,
      f,
      t.labelStyle
    );
    f += D, await me(
      h,
      `${a.verifyMethod ? `Verification: ${a.verifyMethod}` : ""}`,
      f,
      t.labelStyle
    );
  } else {
    const A = await me(
      h,
      `${n.type ? `Type: ${n.type}` : ""}`,
      f,
      t.labelStyle
    );
    f += A, await me(
      h,
      `${n.docRef ? `Doc Ref: ${n.docRef}` : ""}`,
      f,
      t.labelStyle
    );
  }
  const g = (h.node()?.getBBox().width ?? 200) + s, m = (h.node()?.getBBox().height ?? 200) + s, y = -g / 2, x = -m / 2, b = j.svg(h), C = Y(t, {});
  t.look !== "handDrawn" && (C.roughness = 0, C.fillStyle = "solid");
  const v = b.rectangle(y, x, g, m, C), k = h.insert(() => v, ":first-child");
  if (k.attr("class", "basic label-container").attr("style", i), h.selectAll(".label").each((A, S, D) => {
    const I = ht(D[S]), O = I.attr("transform");
    let E = 0, N = 0;
    if (O) {
      const T = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(O);
      T && (E = parseFloat(T[1]), N = parseFloat(T[2]));
    }
    const R = N - m / 2;
    let B = y + s / 2;
    (S === 0 || S === 1) && (B = E), I.attr("transform", `translate(${B}, ${R + s})`);
  }), f > u + d + o) {
    const A = b.line(
      y,
      x + u + d + o,
      y + g,
      x + u + d + o,
      C
    );
    h.insert(() => A).attr("style", i);
  }
  return G(t, k), t.intersect = function(A) {
    return W.rect(t, A);
  }, h;
}
p(Fp, "requirementBox");
async function me(e, t, r, i = "") {
  if (t === "")
    return 0;
  const a = e.insert("g").attr("class", "label").attr("style", i), n = ft(), s = n.htmlLabels ?? !0, o = await He(
    a,
    lo(dr(t)),
    {
      width: Ee(t, n) + 50,
      // Add room for error when splitting text into multiple lines
      classes: "markdown-node-label",
      useHtmlLabels: s,
      style: i
    },
    n
  );
  let l;
  if (s) {
    const c = o.children[0], h = ht(o);
    l = c.getBoundingClientRect(), h.attr("width", l.width), h.attr("height", l.height);
  } else {
    const c = o.children[0];
    for (const h of c.children)
      h.textContent = h.textContent.replaceAll("&gt;", ">").replaceAll("&lt;", "<"), i && h.setAttribute("style", i);
    l = o.getBBox(), l.height += 6;
  }
  return a.attr("transform", `translate(${-l.width / 2},${-l.height / 2 + r})`), l.height;
}
p(me, "addText");
var $v = /* @__PURE__ */ p((e) => {
  switch (e) {
    case "Very High":
      return "red";
    case "High":
      return "orange";
    case "Medium":
      return null;
    // no stroke
    case "Low":
      return "blue";
    case "Very Low":
      return "lightblue";
  }
}, "colorFromPriority");
async function Dp(e, t, { config: r }) {
  const { labelStyles: i, nodeStyles: a } = U(t);
  t.labelStyle = i || "";
  const n = 10, s = t.width;
  t.width = (t.width ?? 200) - 10;
  const {
    shapeSvg: o,
    bbox: l,
    label: c
  } = await it(e, t, rt(t)), h = t.padding || 10;
  let u = "", f;
  "ticket" in t && t.ticket && r?.kanban?.ticketBaseUrl && (u = r?.kanban?.ticketBaseUrl.replace("#TICKET#", t.ticket), f = o.insert("svg:a", ":first-child").attr("class", "kanban-ticket-link").attr("xlink:href", u).attr("target", "_blank"));
  const d = {
    useHtmlLabels: t.useHtmlLabels,
    labelStyle: t.labelStyle || "",
    width: t.width,
    img: t.img,
    padding: t.padding || 8,
    centerLabel: !1
  };
  let g, m;
  f ? { label: g, bbox: m } = await Xn(
    f,
    "ticket" in t && t.ticket || "",
    d
  ) : { label: g, bbox: m } = await Xn(
    o,
    "ticket" in t && t.ticket || "",
    d
  );
  const { label: y, bbox: x } = await Xn(
    o,
    "assigned" in t && t.assigned || "",
    d
  );
  t.width = s;
  const b = 10, C = t?.width || 0, v = Math.max(m.height, x.height) / 2, k = Math.max(l.height + b * 2, t?.height || 0) + v, A = -C / 2, S = -k / 2;
  c.attr(
    "transform",
    "translate(" + (h - C / 2) + ", " + (-v - l.height / 2) + ")"
  ), g.attr(
    "transform",
    "translate(" + (h - C / 2) + ", " + (-v + l.height / 2) + ")"
  ), y.attr(
    "transform",
    "translate(" + (h + C / 2 - x.width - 2 * n) + ", " + (-v + l.height / 2) + ")"
  );
  let D;
  const { rx: I, ry: O } = t, { cssStyles: E } = t;
  if (t.look === "handDrawn") {
    const N = j.svg(o), R = Y(t, {}), B = I || O ? N.path(je(A, S, C, k, I || 0), R) : N.rectangle(A, S, C, k, R);
    D = o.insert(() => B, ":first-child"), D.attr("class", "basic label-container").attr("style", E || null);
  } else {
    D = o.insert("rect", ":first-child"), D.attr("class", "basic label-container __APA__").attr("style", a).attr("rx", I ?? 5).attr("ry", O ?? 5).attr("x", A).attr("y", S).attr("width", C).attr("height", k);
    const N = "priority" in t && t.priority;
    if (N) {
      const R = o.append("line"), B = A + 2, L = S + Math.floor((I ?? 0) / 2), T = S + k - Math.floor((I ?? 0) / 2);
      R.attr("x1", B).attr("y1", L).attr("x2", B).attr("y2", T).attr("stroke-width", "4").attr("stroke", $v(N));
    }
  }
  return G(t, D), t.height = k, t.intersect = function(N) {
    return W.rect(t, N);
  }, o;
}
p(Dp, "kanbanItem");
async function Op(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: a, bbox: n, halfPadding: s, label: o } = await it(
    e,
    t,
    rt(t)
  ), l = n.width + 10 * s, c = n.height + 8 * s, h = 0.15 * l, { cssStyles: u } = t, f = n.width + 20, d = n.height + 20, g = Math.max(l, f), m = Math.max(c, d);
  o.attr("transform", `translate(${-n.width / 2}, ${-n.height / 2})`);
  let y;
  const x = `M0 0 
    a${h},${h} 1 0,0 ${g * 0.25},${-1 * m * 0.1}
    a${h},${h} 1 0,0 ${g * 0.25},0
    a${h},${h} 1 0,0 ${g * 0.25},0
    a${h},${h} 1 0,0 ${g * 0.25},${m * 0.1}

    a${h},${h} 1 0,0 ${g * 0.15},${m * 0.33}
    a${h * 0.8},${h * 0.8} 1 0,0 0,${m * 0.34}
    a${h},${h} 1 0,0 ${-1 * g * 0.15},${m * 0.33}

    a${h},${h} 1 0,0 ${-1 * g * 0.25},${m * 0.15}
    a${h},${h} 1 0,0 ${-1 * g * 0.25},0
    a${h},${h} 1 0,0 ${-1 * g * 0.25},0
    a${h},${h} 1 0,0 ${-1 * g * 0.25},${-1 * m * 0.15}

    a${h},${h} 1 0,0 ${-1 * g * 0.1},${-1 * m * 0.33}
    a${h * 0.8},${h * 0.8} 1 0,0 0,${-1 * m * 0.34}
    a${h},${h} 1 0,0 ${g * 0.1},${-1 * m * 0.33}
  H0 V0 Z`;
  if (t.look === "handDrawn") {
    const b = j.svg(a), C = Y(t, {}), v = b.path(x, C);
    y = a.insert(() => v, ":first-child"), y.attr("class", "basic label-container").attr("style", Rt(u));
  } else
    y = a.insert("path", ":first-child").attr("class", "basic label-container").attr("style", i).attr("d", x);
  return y.attr("transform", `translate(${-g / 2}, ${-m / 2})`), G(t, y), t.calcIntersect = function(b, C) {
    return W.rect(b, C);
  }, t.intersect = function(b) {
    return F.info("Bang intersect", t, b), W.rect(t, b);
  }, a;
}
p(Op, "bang");
async function Rp(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: a, bbox: n, halfPadding: s, label: o } = await it(
    e,
    t,
    rt(t)
  ), l = n.width + 2 * s, c = n.height + 2 * s, h = 0.15 * l, u = 0.25 * l, f = 0.35 * l, d = 0.2 * l, { cssStyles: g } = t;
  let m;
  const y = `M0 0 
    a${h},${h} 0 0,1 ${l * 0.25},${-1 * l * 0.1}
    a${f},${f} 1 0,1 ${l * 0.4},${-1 * l * 0.1}
    a${u},${u} 1 0,1 ${l * 0.35},${l * 0.2}

    a${h},${h} 1 0,1 ${l * 0.15},${c * 0.35}
    a${d},${d} 1 0,1 ${-1 * l * 0.15},${c * 0.65}

    a${u},${h} 1 0,1 ${-1 * l * 0.25},${l * 0.15}
    a${f},${f} 1 0,1 ${-1 * l * 0.5},0
    a${h},${h} 1 0,1 ${-1 * l * 0.25},${-1 * l * 0.15}

    a${h},${h} 1 0,1 ${-1 * l * 0.1},${-1 * c * 0.35}
    a${d},${d} 1 0,1 ${l * 0.1},${-1 * c * 0.65}
  H0 V0 Z`;
  if (t.look === "handDrawn") {
    const x = j.svg(a), b = Y(t, {}), C = x.path(y, b);
    m = a.insert(() => C, ":first-child"), m.attr("class", "basic label-container").attr("style", Rt(g));
  } else
    m = a.insert("path", ":first-child").attr("class", "basic label-container").attr("style", i).attr("d", y);
  return o.attr("transform", `translate(${-n.width / 2}, ${-n.height / 2})`), m.attr("transform", `translate(${-l / 2}, ${-c / 2})`), G(t, m), t.calcIntersect = function(x, b) {
    return W.rect(x, b);
  }, t.intersect = function(x) {
    return F.info("Cloud intersect", t, x), W.rect(t, x);
  }, a;
}
p(Rp, "cloud");
async function Ip(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: a, bbox: n, halfPadding: s, label: o } = await it(
    e,
    t,
    rt(t)
  ), l = n.width + 8 * s, c = n.height + 2 * s, h = 5, u = `
    M${-l / 2} ${c / 2 - h}
    v${-c + 2 * h}
    q0,-${h} ${h},-${h}
    h${l - 2 * h}
    q${h},0 ${h},${h}
    v${c - 2 * h}
    q0,${h} -${h},${h}
    h${-l + 2 * h}
    q-${h},0 -${h},-${h}
    Z
  `, f = a.append("path").attr("id", "node-" + t.id).attr("class", "node-bkg node-" + t.type).attr("style", i).attr("d", u);
  return a.append("line").attr("class", "node-line-").attr("x1", -l / 2).attr("y1", c / 2).attr("x2", l / 2).attr("y2", c / 2), o.attr("transform", `translate(${-n.width / 2}, ${-n.height / 2})`), a.append(() => o.node()), G(t, f), t.calcIntersect = function(d, g) {
    return W.rect(d, g);
  }, t.intersect = function(d) {
    return W.rect(t, d);
  }, a;
}
p(Ip, "defaultMindmapNode");
async function Pp(e, t) {
  const r = {
    padding: t.padding ?? 0
  };
  return Wo(e, t, r);
}
p(Pp, "mindmapCircle");
var Fv = [
  {
    semanticName: "Process",
    name: "Rectangle",
    shortName: "rect",
    description: "Standard process shape",
    aliases: ["proc", "process", "rectangle"],
    internalAliases: ["squareRect"],
    handler: gp
  },
  {
    semanticName: "Event",
    name: "Rounded Rectangle",
    shortName: "rounded",
    description: "Represents an event",
    aliases: ["event"],
    internalAliases: ["roundedRect"],
    handler: fp
  },
  {
    semanticName: "Terminal Point",
    name: "Stadium",
    shortName: "stadium",
    description: "Terminal point",
    aliases: ["terminal", "pill"],
    handler: mp
  },
  {
    semanticName: "Subprocess",
    name: "Framed Rectangle",
    shortName: "fr-rect",
    description: "Subprocess",
    aliases: ["subprocess", "subproc", "framed-rectangle", "subroutine"],
    handler: Cp
  },
  {
    semanticName: "Database",
    name: "Cylinder",
    shortName: "cyl",
    description: "Database storage",
    aliases: ["db", "database", "cylinder"],
    handler: Nd
  },
  {
    semanticName: "Start",
    name: "Circle",
    shortName: "circle",
    description: "Starting point",
    aliases: ["circ"],
    handler: Wo
  },
  {
    semanticName: "Bang",
    name: "Bang",
    shortName: "bang",
    description: "Bang",
    aliases: ["bang"],
    handler: Op
  },
  {
    semanticName: "Cloud",
    name: "Cloud",
    shortName: "cloud",
    description: "cloud",
    aliases: ["cloud"],
    handler: Rp
  },
  {
    semanticName: "Decision",
    name: "Diamond",
    shortName: "diam",
    description: "Decision-making step",
    aliases: ["decision", "diamond", "question"],
    handler: cp
  },
  {
    semanticName: "Prepare Conditional",
    name: "Hexagon",
    shortName: "hex",
    description: "Preparation or condition step",
    aliases: ["hexagon", "prepare"],
    handler: Ud
  },
  {
    semanticName: "Data Input/Output",
    name: "Lean Right",
    shortName: "lean-r",
    description: "Represents input or output",
    aliases: ["lean-right", "in-out"],
    internalAliases: ["lean_right"],
    handler: rp
  },
  {
    semanticName: "Data Input/Output",
    name: "Lean Left",
    shortName: "lean-l",
    description: "Represents output or input",
    aliases: ["lean-left", "out-in"],
    internalAliases: ["lean_left"],
    handler: ep
  },
  {
    semanticName: "Priority Action",
    name: "Trapezoid Base Bottom",
    shortName: "trap-b",
    description: "Priority action",
    aliases: ["priority", "trapezoid-bottom", "trapezoid"],
    handler: Sp
  },
  {
    semanticName: "Manual Operation",
    name: "Trapezoid Base Top",
    shortName: "trap-t",
    description: "Represents a manual task",
    aliases: ["manual", "trapezoid-top", "inv-trapezoid"],
    internalAliases: ["inv_trapezoid"],
    handler: Jd
  },
  {
    semanticName: "Stop",
    name: "Double Circle",
    shortName: "dbl-circ",
    description: "Represents a stop point",
    aliases: ["double-circle"],
    internalAliases: ["doublecircle"],
    handler: Wd
  },
  {
    semanticName: "Text Block",
    name: "Text Block",
    shortName: "text",
    description: "Text block",
    handler: vp
  },
  {
    semanticName: "Card",
    name: "Notched Rectangle",
    shortName: "notch-rect",
    description: "Represents a card",
    aliases: ["card", "notched-rectangle"],
    handler: Ed
  },
  {
    semanticName: "Lined/Shaded Process",
    name: "Lined Rectangle",
    shortName: "lin-rect",
    description: "Lined process shape",
    aliases: ["lined-rectangle", "lined-process", "lin-proc", "shaded-process"],
    handler: dp
  },
  {
    semanticName: "Start",
    name: "Small Circle",
    shortName: "sm-circ",
    description: "Small starting point",
    aliases: ["start", "small-circle"],
    internalAliases: ["stateStart"],
    handler: bp
  },
  {
    semanticName: "Stop",
    name: "Framed Circle",
    shortName: "fr-circ",
    description: "Stop point",
    aliases: ["stop", "framed-circle"],
    internalAliases: ["stateEnd"],
    handler: xp
  },
  {
    semanticName: "Fork/Join",
    name: "Filled Rectangle",
    shortName: "fork",
    description: "Fork or join in process flow",
    aliases: ["join"],
    internalAliases: ["forkJoin"],
    handler: jd
  },
  {
    semanticName: "Collate",
    name: "Hourglass",
    shortName: "hourglass",
    description: "Represents a collate operation",
    aliases: ["hourglass", "collate"],
    handler: Gd
  },
  {
    semanticName: "Comment",
    name: "Curly Brace",
    shortName: "brace",
    description: "Adds a comment",
    aliases: ["comment", "brace-l"],
    handler: Od
  },
  {
    semanticName: "Comment Right",
    name: "Curly Brace",
    shortName: "brace-r",
    description: "Adds a comment",
    handler: Rd
  },
  {
    semanticName: "Comment with braces on both sides",
    name: "Curly Braces",
    shortName: "braces",
    description: "Adds a comment",
    handler: Id
  },
  {
    semanticName: "Com Link",
    name: "Lightning Bolt",
    shortName: "bolt",
    description: "Communication link",
    aliases: ["com-link", "lightning-bolt"],
    handler: ip
  },
  {
    semanticName: "Document",
    name: "Document",
    shortName: "doc",
    description: "Represents a document",
    aliases: ["doc", "document"],
    handler: Ap
  },
  {
    semanticName: "Delay",
    name: "Half-Rounded Rectangle",
    shortName: "delay",
    description: "Represents a delay",
    aliases: ["half-rounded-rectangle"],
    handler: Yd
  },
  {
    semanticName: "Direct Access Storage",
    name: "Horizontal Cylinder",
    shortName: "h-cyl",
    description: "Direct access storage",
    aliases: ["das", "horizontal-cylinder"],
    handler: _p
  },
  {
    semanticName: "Disk Storage",
    name: "Lined Cylinder",
    shortName: "lin-cyl",
    description: "Disk storage",
    aliases: ["disk", "lined-cylinder"],
    handler: ap
  },
  {
    semanticName: "Display",
    name: "Curved Trapezoid",
    shortName: "curv-trap",
    description: "Represents a display",
    aliases: ["curved-trapezoid", "display"],
    handler: Pd
  },
  {
    semanticName: "Divided Process",
    name: "Divided Rectangle",
    shortName: "div-rect",
    description: "Divided process shape",
    aliases: ["div-proc", "divided-rectangle", "divided-process"],
    handler: zd
  },
  {
    semanticName: "Extract",
    name: "Triangle",
    shortName: "tri",
    description: "Extraction process",
    aliases: ["extract", "triangle"],
    handler: Bp
  },
  {
    semanticName: "Internal Storage",
    name: "Window Pane",
    shortName: "win-pane",
    description: "Internal storage",
    aliases: ["internal-storage", "window-pane"],
    handler: Mp
  },
  {
    semanticName: "Junction",
    name: "Filled Circle",
    shortName: "f-circ",
    description: "Junction point",
    aliases: ["junction", "filled-circle"],
    handler: qd
  },
  {
    semanticName: "Loop Limit",
    name: "Trapezoidal Pentagon",
    shortName: "notch-pent",
    description: "Loop limit step",
    aliases: ["loop-limit", "notched-pentagon"],
    handler: Tp
  },
  {
    semanticName: "Manual File",
    name: "Flipped Triangle",
    shortName: "flip-tri",
    description: "Manual file operation",
    aliases: ["manual-file", "flipped-triangle"],
    handler: Hd
  },
  {
    semanticName: "Manual Input",
    name: "Sloped Rectangle",
    shortName: "sl-rect",
    description: "Manual input step",
    aliases: ["manual-input", "sloped-rectangle"],
    handler: pp
  },
  {
    semanticName: "Multi-Document",
    name: "Stacked Document",
    shortName: "docs",
    description: "Multiple documents",
    aliases: ["documents", "st-doc", "stacked-document"],
    handler: op
  },
  {
    semanticName: "Multi-Process",
    name: "Stacked Rectangle",
    shortName: "st-rect",
    description: "Multiple processes",
    aliases: ["procs", "processes", "stacked-rectangle"],
    handler: sp
  },
  {
    semanticName: "Stored Data",
    name: "Bow Tie Rectangle",
    shortName: "bow-rect",
    description: "Stored data",
    aliases: ["stored-data", "bow-tie-rectangle"],
    handler: Md
  },
  {
    semanticName: "Summary",
    name: "Crossed Circle",
    shortName: "cross-circ",
    description: "Summary",
    aliases: ["summary", "crossed-circle"],
    handler: Dd
  },
  {
    semanticName: "Tagged Document",
    name: "Tagged Document",
    shortName: "tag-doc",
    description: "Tagged document",
    aliases: ["tag-doc", "tagged-document"],
    handler: kp
  },
  {
    semanticName: "Tagged Process",
    name: "Tagged Rectangle",
    shortName: "tag-rect",
    description: "Tagged process",
    aliases: ["tagged-rectangle", "tag-proc", "tagged-process"],
    handler: wp
  },
  {
    semanticName: "Paper Tape",
    name: "Flag",
    shortName: "flag",
    description: "Paper tape",
    aliases: ["paper-tape"],
    handler: Lp
  },
  {
    semanticName: "Odd",
    name: "Odd",
    shortName: "odd",
    description: "Odd shape",
    internalAliases: ["rect_left_inv_arrow"],
    handler: hp
  },
  {
    semanticName: "Lined Document",
    name: "Lined Document",
    shortName: "lin-doc",
    description: "Lined document",
    aliases: ["lined-document"],
    handler: np
  }
], Dv = /* @__PURE__ */ p(() => {
  const t = [
    ...Object.entries({
      // States
      state: yp,
      choice: $d,
      note: lp,
      // Rectangles
      rectWithTitle: up,
      labelRect: tp,
      // Icons
      iconSquare: Kd,
      iconCircle: Vd,
      icon: Xd,
      iconRounded: Zd,
      imageSquare: Qd,
      anchor: Ld,
      // Kanban diagram
      kanbanItem: Dp,
      //Mindmap diagram
      mindmapCircle: Pp,
      defaultMindmapNode: Ip,
      // class diagram
      classBox: $p,
      // er diagram
      erBox: qo,
      // Requirement diagram
      requirementBox: Fp
    }),
    ...Fv.flatMap((r) => [
      r.shortName,
      ..."aliases" in r ? r.aliases : [],
      ..."internalAliases" in r ? r.internalAliases : []
    ].map((a) => [a, r.handler]))
  ];
  return Object.fromEntries(t);
}, "generateShapeMap"), Np = Dv();
function Ov(e) {
  return e in Np;
}
p(Ov, "isValidShape");
var bn = /* @__PURE__ */ new Map();
async function zp(e, t, r) {
  let i, a;
  t.shape === "rect" && (t.rx && t.ry ? t.shape = "roundedRect" : t.shape = "squareRect");
  const n = t.shape ? Np[t.shape] : void 0;
  if (!n)
    throw new Error(`No such shape: ${t.shape}. Please check your syntax.`);
  if (t.link) {
    let s;
    r.config.securityLevel === "sandbox" ? s = "_top" : t.linkTarget && (s = t.linkTarget || "_blank"), i = e.insert("svg:a").attr("xlink:href", t.link).attr("target", s ?? null), a = await n(i, t, r);
  } else
    a = await n(e, t, r), i = a;
  return t.tooltip && a.attr("title", t.tooltip), bn.set(t.id, i), t.haveCallback && i.attr("class", i.attr("class") + " clickable"), i;
}
p(zp, "insertNode");
var wB = /* @__PURE__ */ p((e, t) => {
  bn.set(t.id, e);
}, "setNodeElem"), kB = /* @__PURE__ */ p(() => {
  bn.clear();
}, "clear"), vB = /* @__PURE__ */ p((e) => {
  const t = bn.get(e.id);
  F.trace(
    "Transforming node",
    e.diff,
    e,
    "translate(" + (e.x - e.width / 2 - 5) + ", " + e.width / 2 + ")"
  );
  const r = 8, i = e.diff || 0;
  return e.clusterNode ? t.attr(
    "transform",
    "translate(" + (e.x + i - e.width / 2) + ", " + (e.y - e.height / 2 - r) + ")"
  ) : t.attr("transform", "translate(" + e.x + ", " + e.y + ")"), i;
}, "positionNode"), Rv = /* @__PURE__ */ p((e, t, r, i, a, n) => {
  t.arrowTypeStart && _c(e, "start", t.arrowTypeStart, r, i, a, n), t.arrowTypeEnd && _c(e, "end", t.arrowTypeEnd, r, i, a, n);
}, "addEdgeMarkers"), Iv = {
  arrow_cross: { type: "cross", fill: !1 },
  arrow_point: { type: "point", fill: !0 },
  arrow_barb: { type: "barb", fill: !0 },
  arrow_circle: { type: "circle", fill: !1 },
  aggregation: { type: "aggregation", fill: !1 },
  extension: { type: "extension", fill: !1 },
  composition: { type: "composition", fill: !0 },
  dependency: { type: "dependency", fill: !0 },
  lollipop: { type: "lollipop", fill: !1 },
  only_one: { type: "onlyOne", fill: !1 },
  zero_or_one: { type: "zeroOrOne", fill: !1 },
  one_or_more: { type: "oneOrMore", fill: !1 },
  zero_or_more: { type: "zeroOrMore", fill: !1 },
  requirement_arrow: { type: "requirement_arrow", fill: !1 },
  requirement_contains: { type: "requirement_contains", fill: !1 }
}, _c = /* @__PURE__ */ p((e, t, r, i, a, n, s) => {
  const o = Iv[r];
  if (!o) {
    F.warn(`Unknown arrow type: ${r}`);
    return;
  }
  const l = o.type, h = `${a}_${n}-${l}${t === "start" ? "Start" : "End"}`;
  if (s && s.trim() !== "") {
    const u = s.replace(/[^\dA-Za-z]/g, "_"), f = `${h}_${u}`;
    if (!document.getElementById(f)) {
      const d = document.getElementById(h);
      if (d) {
        const g = d.cloneNode(!0);
        g.id = f, g.querySelectorAll("path, circle, line").forEach((y) => {
          y.setAttribute("stroke", s), o.fill && y.setAttribute("fill", s);
        }), d.parentNode?.appendChild(g);
      }
    }
    e.attr(`marker-${t}`, `url(${i}#${f})`);
  } else
    e.attr(`marker-${t}`, `url(${i}#${h})`);
}, "addEdgeMarker"), Va = /* @__PURE__ */ new Map(), Mt = /* @__PURE__ */ new Map(), _B = /* @__PURE__ */ p(() => {
  Va.clear(), Mt.clear();
}, "clear"), ia = /* @__PURE__ */ p((e) => e ? e.reduce((r, i) => r + ";" + i, "") : "", "getLabelStyles"), Pv = /* @__PURE__ */ p(async (e, t) => {
  let r = Bt(ft().flowchart.htmlLabels);
  const { labelStyles: i } = U(t);
  t.labelStyle = i;
  const a = await He(e, t.label, {
    style: t.labelStyle,
    useHtmlLabels: r,
    addSvgBackground: !0,
    isNode: !1
  });
  F.info("abc82", t, t.labelType);
  const n = e.insert("g").attr("class", "edgeLabel"), s = n.insert("g").attr("class", "label").attr("data-id", t.id);
  s.node().appendChild(a);
  let o = a.getBBox();
  if (r) {
    const c = a.children[0], h = ht(a);
    o = c.getBoundingClientRect(), h.attr("width", o.width), h.attr("height", o.height);
  }
  s.attr("transform", "translate(" + -o.width / 2 + ", " + -o.height / 2 + ")"), Va.set(t.id, n), t.width = o.width, t.height = o.height;
  let l;
  if (t.startLabelLeft) {
    const c = await er(
      t.startLabelLeft,
      ia(t.labelStyle)
    ), h = e.insert("g").attr("class", "edgeTerminals"), u = h.insert("g").attr("class", "inner");
    l = u.node().appendChild(c);
    const f = c.getBBox();
    u.attr("transform", "translate(" + -f.width / 2 + ", " + -f.height / 2 + ")"), Mt.get(t.id) || Mt.set(t.id, {}), Mt.get(t.id).startLeft = h, mi(l, t.startLabelLeft);
  }
  if (t.startLabelRight) {
    const c = await er(
      t.startLabelRight,
      ia(t.labelStyle)
    ), h = e.insert("g").attr("class", "edgeTerminals"), u = h.insert("g").attr("class", "inner");
    l = h.node().appendChild(c), u.node().appendChild(c);
    const f = c.getBBox();
    u.attr("transform", "translate(" + -f.width / 2 + ", " + -f.height / 2 + ")"), Mt.get(t.id) || Mt.set(t.id, {}), Mt.get(t.id).startRight = h, mi(l, t.startLabelRight);
  }
  if (t.endLabelLeft) {
    const c = await er(t.endLabelLeft, ia(t.labelStyle)), h = e.insert("g").attr("class", "edgeTerminals"), u = h.insert("g").attr("class", "inner");
    l = u.node().appendChild(c);
    const f = c.getBBox();
    u.attr("transform", "translate(" + -f.width / 2 + ", " + -f.height / 2 + ")"), h.node().appendChild(c), Mt.get(t.id) || Mt.set(t.id, {}), Mt.get(t.id).endLeft = h, mi(l, t.endLabelLeft);
  }
  if (t.endLabelRight) {
    const c = await er(t.endLabelRight, ia(t.labelStyle)), h = e.insert("g").attr("class", "edgeTerminals"), u = h.insert("g").attr("class", "inner");
    l = u.node().appendChild(c);
    const f = c.getBBox();
    u.attr("transform", "translate(" + -f.width / 2 + ", " + -f.height / 2 + ")"), h.node().appendChild(c), Mt.get(t.id) || Mt.set(t.id, {}), Mt.get(t.id).endRight = h, mi(l, t.endLabelRight);
  }
  return a;
}, "insertEdgeLabel");
function mi(e, t) {
  ft().flowchart.htmlLabels && e && (e.style.width = t.length * 9 + "px", e.style.height = "12px");
}
p(mi, "setTerminalWidth");
var Nv = /* @__PURE__ */ p((e, t) => {
  F.debug("Moving label abc88 ", e.id, e.label, Va.get(e.id), t);
  let r = t.updatedPath ? t.updatedPath : t.originalPath;
  const i = ft(), { subGraphTitleTotalMargin: a } = ko(i);
  if (e.label) {
    const n = Va.get(e.id);
    let s = e.x, o = e.y;
    if (r) {
      const l = oe.calcLabelPosition(r);
      F.debug(
        "Moving label " + e.label + " from (",
        s,
        ",",
        o,
        ") to (",
        l.x,
        ",",
        l.y,
        ") abc88"
      ), t.updatedPath && (s = l.x, o = l.y);
    }
    n.attr("transform", `translate(${s}, ${o + a / 2})`);
  }
  if (e.startLabelLeft) {
    const n = Mt.get(e.id).startLeft;
    let s = e.x, o = e.y;
    if (r) {
      const l = oe.calcTerminalLabelPosition(e.arrowTypeStart ? 10 : 0, "start_left", r);
      s = l.x, o = l.y;
    }
    n.attr("transform", `translate(${s}, ${o})`);
  }
  if (e.startLabelRight) {
    const n = Mt.get(e.id).startRight;
    let s = e.x, o = e.y;
    if (r) {
      const l = oe.calcTerminalLabelPosition(
        e.arrowTypeStart ? 10 : 0,
        "start_right",
        r
      );
      s = l.x, o = l.y;
    }
    n.attr("transform", `translate(${s}, ${o})`);
  }
  if (e.endLabelLeft) {
    const n = Mt.get(e.id).endLeft;
    let s = e.x, o = e.y;
    if (r) {
      const l = oe.calcTerminalLabelPosition(e.arrowTypeEnd ? 10 : 0, "end_left", r);
      s = l.x, o = l.y;
    }
    n.attr("transform", `translate(${s}, ${o})`);
  }
  if (e.endLabelRight) {
    const n = Mt.get(e.id).endRight;
    let s = e.x, o = e.y;
    if (r) {
      const l = oe.calcTerminalLabelPosition(e.arrowTypeEnd ? 10 : 0, "end_right", r);
      s = l.x, o = l.y;
    }
    n.attr("transform", `translate(${s}, ${o})`);
  }
}, "positionEdgeLabel"), zv = /* @__PURE__ */ p((e, t) => {
  const r = e.x, i = e.y, a = Math.abs(t.x - r), n = Math.abs(t.y - i), s = e.width / 2, o = e.height / 2;
  return a >= s || n >= o;
}, "outsideNode"), Wv = /* @__PURE__ */ p((e, t, r) => {
  F.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(t)}
  insidePoint : ${JSON.stringify(r)}
  node        : x:${e.x} y:${e.y} w:${e.width} h:${e.height}`);
  const i = e.x, a = e.y, n = Math.abs(i - r.x), s = e.width / 2;
  let o = r.x < t.x ? s - n : s + n;
  const l = e.height / 2, c = Math.abs(t.y - r.y), h = Math.abs(t.x - r.x);
  if (Math.abs(a - t.y) * s > Math.abs(i - t.x) * l) {
    let u = r.y < t.y ? t.y - l - a : a - l - t.y;
    o = h * u / c;
    const f = {
      x: r.x < t.x ? r.x + o : r.x - h + o,
      y: r.y < t.y ? r.y + c - u : r.y - c + u
    };
    return o === 0 && (f.x = t.x, f.y = t.y), h === 0 && (f.x = t.x), c === 0 && (f.y = t.y), F.debug(`abc89 top/bottom calc, Q ${c}, q ${u}, R ${h}, r ${o}`, f), f;
  } else {
    r.x < t.x ? o = t.x - s - i : o = i - s - t.x;
    let u = c * o / h, f = r.x < t.x ? r.x + h - o : r.x - h + o, d = r.y < t.y ? r.y + u : r.y - u;
    return F.debug(`sides calc abc89, Q ${c}, q ${u}, R ${h}, r ${o}`, { _x: f, _y: d }), o === 0 && (f = t.x, d = t.y), h === 0 && (f = t.x), c === 0 && (d = t.y), { x: f, y: d };
  }
}, "intersection"), Sc = /* @__PURE__ */ p((e, t) => {
  F.warn("abc88 cutPathAtIntersect", e, t);
  let r = [], i = e[0], a = !1;
  return e.forEach((n) => {
    if (F.info("abc88 checking point", n, t), !zv(t, n) && !a) {
      const s = Wv(t, i, n);
      F.debug("abc88 inside", n, i, s), F.debug("abc88 intersection", s, t);
      let o = !1;
      r.forEach((l) => {
        o = o || l.x === s.x && l.y === s.y;
      }), r.some((l) => l.x === s.x && l.y === s.y) ? F.warn("abc88 no intersect", s, r) : r.push(s), a = !0;
    } else
      F.warn("abc88 outside", n, i), i = n, a || r.push(n);
  }), F.debug("returning points", r), r;
}, "cutPathAtIntersect");
function Wp(e) {
  const t = [], r = [];
  for (let i = 1; i < e.length - 1; i++) {
    const a = e[i - 1], n = e[i], s = e[i + 1];
    (a.x === n.x && n.y === s.y && Math.abs(n.x - s.x) > 5 && Math.abs(n.y - a.y) > 5 || a.y === n.y && n.x === s.x && Math.abs(n.x - a.x) > 5 && Math.abs(n.y - s.y) > 5) && (t.push(n), r.push(i));
  }
  return { cornerPoints: t, cornerPointPositions: r };
}
p(Wp, "extractCornerPoints");
var Tc = /* @__PURE__ */ p(function(e, t, r) {
  const i = t.x - e.x, a = t.y - e.y, n = Math.sqrt(i * i + a * a), s = r / n;
  return { x: t.x - s * i, y: t.y - s * a };
}, "findAdjacentPoint"), qv = /* @__PURE__ */ p(function(e) {
  const { cornerPointPositions: t } = Wp(e), r = [];
  for (let i = 0; i < e.length; i++)
    if (t.includes(i)) {
      const a = e[i - 1], n = e[i + 1], s = e[i], o = Tc(a, s, 5), l = Tc(n, s, 5), c = l.x - o.x, h = l.y - o.y;
      r.push(o);
      const u = Math.sqrt(2) * 2;
      let f = { x: s.x, y: s.y };
      if (Math.abs(n.x - a.x) > 10 && Math.abs(n.y - a.y) >= 10) {
        F.debug(
          "Corner point fixing",
          Math.abs(n.x - a.x),
          Math.abs(n.y - a.y)
        );
        const d = 5;
        s.x === o.x ? f = {
          x: c < 0 ? o.x - d + u : o.x + d - u,
          y: h < 0 ? o.y - u : o.y + u
        } : f = {
          x: c < 0 ? o.x - u : o.x + u,
          y: h < 0 ? o.y - d + u : o.y + d - u
        };
      } else
        F.debug(
          "Corner point skipping fixing",
          Math.abs(n.x - a.x),
          Math.abs(n.y - a.y)
        );
      r.push(f, l);
    } else
      r.push(e[i]);
  return r;
}, "fixCorners"), Hv = /* @__PURE__ */ p((e, t, r) => {
  const i = e - t - r, a = 2, n = 2, s = a + n, o = Math.floor(i / s), l = Array(o).fill(`${a} ${n}`).join(" ");
  return `0 ${t} ${l} ${r}`;
}, "generateDashArray"), jv = /* @__PURE__ */ p(function(e, t, r, i, a, n, s, o = !1) {
  const { handDrawnSeed: l } = ft();
  let c = t.points, h = !1;
  const u = a;
  var f = n;
  const d = [];
  for (const B in t.cssCompiledStyles)
    $f(B) || d.push(t.cssCompiledStyles[B]);
  F.debug("UIO intersect check", t.points, f.x, u.x), f.intersect && u.intersect && !o && (c = c.slice(1, t.points.length - 1), c.unshift(u.intersect(c[0])), F.debug(
    "Last point UIO",
    t.start,
    "-->",
    t.end,
    c[c.length - 1],
    f,
    f.intersect(c[c.length - 1])
  ), c.push(f.intersect(c[c.length - 1])));
  const g = btoa(JSON.stringify(c));
  t.toCluster && (F.info("to cluster abc88", r.get(t.toCluster)), c = Sc(t.points, r.get(t.toCluster).node), h = !0), t.fromCluster && (F.debug(
    "from cluster abc88",
    r.get(t.fromCluster),
    JSON.stringify(c, null, 2)
  ), c = Sc(c.reverse(), r.get(t.fromCluster).node).reverse(), h = !0);
  let m = c.filter((B) => !Number.isNaN(B.y));
  m = qv(m);
  let y = na;
  switch (y = Kn, t.curve) {
    case "linear":
      y = Kn;
      break;
    case "basis":
      y = na;
      break;
    case "cardinal":
      y = Hc;
      break;
    case "bumpX":
      y = Wc;
      break;
    case "bumpY":
      y = zc;
      break;
    case "catmullRom":
      y = Yc;
      break;
    case "monotoneX":
      y = Nc;
      break;
    case "monotoneY":
      y = Pc;
      break;
    case "natural":
      y = Ic;
      break;
    case "step":
      y = Rc;
      break;
    case "stepAfter":
      y = Oc;
      break;
    case "stepBefore":
      y = Dc;
      break;
    default:
      y = na;
  }
  const { x, y: b } = mw(t), C = Qg().x(x).y(b).curve(y);
  let v;
  switch (t.thickness) {
    case "normal":
      v = "edge-thickness-normal";
      break;
    case "thick":
      v = "edge-thickness-thick";
      break;
    case "invisible":
      v = "edge-thickness-invisible";
      break;
    default:
      v = "edge-thickness-normal";
  }
  switch (t.pattern) {
    case "solid":
      v += " edge-pattern-solid";
      break;
    case "dotted":
      v += " edge-pattern-dotted";
      break;
    case "dashed":
      v += " edge-pattern-dashed";
      break;
    default:
      v += " edge-pattern-solid";
  }
  let k, A = t.curve === "rounded" ? qp(Hp(m, t), 5) : C(m);
  const S = Array.isArray(t.style) ? t.style : [t.style];
  let D = S.find((B) => B?.startsWith("stroke:")), I = !1;
  if (t.look === "handDrawn") {
    const B = j.svg(e);
    Object.assign([], m);
    const L = B.path(A, {
      roughness: 0.3,
      seed: l
    });
    v += " transition", k = ht(L).select("path").attr("id", t.id).attr("class", " " + v + (t.classes ? " " + t.classes : "")).attr("style", S ? S.reduce(($, M) => $ + ";" + M, "") : "");
    let T = k.attr("d");
    k.attr("d", T), e.node().appendChild(k.node());
  } else {
    const B = d.join(";"), L = S ? S.reduce((J, Z) => J + Z + ";", "") : "";
    let T = "";
    t.animate && (T = " edge-animation-fast"), t.animation && (T = " edge-animation-" + t.animation);
    const $ = (B ? B + ";" + L + ";" : L) + ";" + (S ? S.reduce((J, Z) => J + ";" + Z, "") : "");
    k = e.append("path").attr("d", A).attr("id", t.id).attr(
      "class",
      " " + v + (t.classes ? " " + t.classes : "") + (T ?? "")
    ).attr("style", $), D = $.match(/stroke:([^;]+)/)?.[1], I = t.animate === !0 || !!t.animation || B.includes("animation");
    const M = k.node(), q = typeof M.getTotalLength == "function" ? M.getTotalLength() : 0, X = ec[t.arrowTypeStart] || 0, K = ec[t.arrowTypeEnd] || 0;
    if (t.look === "neo" && !I) {
      const Z = `stroke-dasharray: ${t.pattern === "dotted" || t.pattern === "dashed" ? Hv(q, X, K) : `0 ${X} ${q - X - K} ${K}`}; stroke-dashoffset: 0;`;
      k.attr("style", Z + k.attr("style"));
    }
  }
  k.attr("data-edge", !0), k.attr("data-et", "edge"), k.attr("data-id", t.id), k.attr("data-points", g), t.showPoints && m.forEach((B) => {
    e.append("circle").style("stroke", "red").style("fill", "red").attr("r", 1).attr("cx", B.x).attr("cy", B.y);
  });
  let O = "";
  (ft().flowchart.arrowMarkerAbsolute || ft().state.arrowMarkerAbsolute) && (O = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, O = O.replace(/\(/g, "\\(").replace(/\)/g, "\\)")), F.info("arrowTypeStart", t.arrowTypeStart), F.info("arrowTypeEnd", t.arrowTypeEnd), Rv(k, t, O, s, i, D);
  const E = Math.floor(c.length / 2), N = c[E];
  oe.isLabelCoordinateInPath(N, k.attr("d")) || (h = !0);
  let R = {};
  return h && (R.updatedPath = c), R.originalPath = t.points, R;
}, "insertEdge");
function qp(e, t) {
  if (e.length < 2)
    return "";
  let r = "";
  const i = e.length, a = 1e-5;
  for (let n = 0; n < i; n++) {
    const s = e[n], o = e[n - 1], l = e[n + 1];
    if (n === 0)
      r += `M${s.x},${s.y}`;
    else if (n === i - 1)
      r += `L${s.x},${s.y}`;
    else {
      const c = s.x - o.x, h = s.y - o.y, u = l.x - s.x, f = l.y - s.y, d = Math.hypot(c, h), g = Math.hypot(u, f);
      if (d < a || g < a) {
        r += `L${s.x},${s.y}`;
        continue;
      }
      const m = c / d, y = h / d, x = u / g, b = f / g, C = m * x + y * b, v = Math.max(-1, Math.min(1, C)), k = Math.acos(v);
      if (k < a || Math.abs(Math.PI - k) < a) {
        r += `L${s.x},${s.y}`;
        continue;
      }
      const A = Math.min(t / Math.sin(k / 2), d / 2, g / 2), S = s.x - m * A, D = s.y - y * A, I = s.x + x * A, O = s.y + b * A;
      r += `L${S},${D}`, r += `Q${s.x},${s.y} ${I},${O}`;
    }
  }
  return r;
}
p(qp, "generateRoundedPath");
function qs(e, t) {
  if (!e || !t)
    return { angle: 0, deltaX: 0, deltaY: 0 };
  const r = t.x - e.x, i = t.y - e.y;
  return { angle: Math.atan2(i, r), deltaX: r, deltaY: i };
}
p(qs, "calculateDeltaAndAngle");
function Hp(e, t) {
  const r = e.map((a) => ({ ...a }));
  if (e.length >= 2 && Ft[t.arrowTypeStart]) {
    const a = Ft[t.arrowTypeStart], n = e[0], s = e[1], { angle: o } = qs(n, s), l = a * Math.cos(o), c = a * Math.sin(o);
    r[0].x = n.x + l, r[0].y = n.y + c;
  }
  const i = e.length;
  if (i >= 2 && Ft[t.arrowTypeEnd]) {
    const a = Ft[t.arrowTypeEnd], n = e[i - 1], s = e[i - 2], { angle: o } = qs(s, n), l = a * Math.cos(o), c = a * Math.sin(o);
    r[i - 1].x = n.x - l, r[i - 1].y = n.y - c;
  }
  return r;
}
p(Hp, "applyMarkerOffsetsToPoints");
var Yv = /* @__PURE__ */ p((e, t, r, i) => {
  t.forEach((a) => {
    o_[a](e, r, i);
  });
}, "insertMarkers"), Uv = /* @__PURE__ */ p((e, t, r) => {
  F.trace("Making markers for ", r), e.append("defs").append("marker").attr("id", r + "_" + t + "-extensionStart").attr("class", "marker extension " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 1,7 L18,13 V 1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-extensionEnd").attr("class", "marker extension " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 1,1 V 13 L18,7 Z");
}, "extension"), Gv = /* @__PURE__ */ p((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-compositionStart").attr("class", "marker composition " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-compositionEnd").attr("class", "marker composition " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
}, "composition"), Xv = /* @__PURE__ */ p((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-aggregationStart").attr("class", "marker aggregation " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-aggregationEnd").attr("class", "marker aggregation " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
}, "aggregation"), Vv = /* @__PURE__ */ p((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-dependencyStart").attr("class", "marker dependency " + t).attr("refX", 6).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-dependencyEnd").attr("class", "marker dependency " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
}, "dependency"), Zv = /* @__PURE__ */ p((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-lollipopStart").attr("class", "marker lollipop " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6), e.append("defs").append("marker").attr("id", r + "_" + t + "-lollipopEnd").attr("class", "marker lollipop " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6);
}, "lollipop"), Kv = /* @__PURE__ */ p((e, t, r) => {
  e.append("marker").attr("id", r + "_" + t + "-pointEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-pointStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 4.5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 5 L 10 10 L 10 0 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
}, "point"), Qv = /* @__PURE__ */ p((e, t, r) => {
  e.append("marker").attr("id", r + "_" + t + "-circleEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 11).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-circleStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", -1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
}, "circle"), Jv = /* @__PURE__ */ p((e, t, r) => {
  e.append("marker").attr("id", r + "_" + t + "-crossEnd").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", 12).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-crossStart").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", -1).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0");
}, "cross"), t_ = /* @__PURE__ */ p((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
}, "barb"), e_ = /* @__PURE__ */ p((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-onlyOneStart").attr("class", "marker onlyOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("d", "M9,0 L9,18 M15,0 L15,18"), e.append("defs").append("marker").attr("id", r + "_" + t + "-onlyOneEnd").attr("class", "marker onlyOne " + t).attr("refX", 18).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("d", "M3,0 L3,18 M9,0 L9,18");
}, "only_one"), r_ = /* @__PURE__ */ p((e, t, r) => {
  const i = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrOneStart").attr("class", "marker zeroOrOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
  i.append("circle").attr("fill", "white").attr("cx", 21).attr("cy", 9).attr("r", 6), i.append("path").attr("d", "M9,0 L9,18");
  const a = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrOneEnd").attr("class", "marker zeroOrOne " + t).attr("refX", 30).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
  a.append("circle").attr("fill", "white").attr("cx", 9).attr("cy", 9).attr("r", 6), a.append("path").attr("d", "M21,0 L21,18");
}, "zero_or_one"), i_ = /* @__PURE__ */ p((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-oneOrMoreStart").attr("class", "marker oneOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("d", "M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27"), e.append("defs").append("marker").attr("id", r + "_" + t + "-oneOrMoreEnd").attr("class", "marker oneOrMore " + t).attr("refX", 27).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("d", "M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18");
}, "one_or_more"), a_ = /* @__PURE__ */ p((e, t, r) => {
  const i = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrMoreStart").attr("class", "marker zeroOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
  i.append("circle").attr("fill", "white").attr("cx", 48).attr("cy", 18).attr("r", 6), i.append("path").attr("d", "M0,18 Q18,0 36,18 Q18,36 0,18");
  const a = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrMoreEnd").attr("class", "marker zeroOrMore " + t).attr("refX", 39).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
  a.append("circle").attr("fill", "white").attr("cx", 9).attr("cy", 18).attr("r", 6), a.append("path").attr("d", "M21,18 Q39,0 57,18 Q39,36 21,18");
}, "zero_or_more"), n_ = /* @__PURE__ */ p((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-requirement_arrowEnd").attr("refX", 20).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").append("path").attr(
    "d",
    `M0,0
      L20,10
      M20,10
      L0,20`
  );
}, "requirement_arrow"), s_ = /* @__PURE__ */ p((e, t, r) => {
  const i = e.append("defs").append("marker").attr("id", r + "_" + t + "-requirement_containsStart").attr("refX", 0).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").append("g");
  i.append("circle").attr("cx", 10).attr("cy", 10).attr("r", 9).attr("fill", "none"), i.append("line").attr("x1", 1).attr("x2", 19).attr("y1", 10).attr("y2", 10), i.append("line").attr("y1", 1).attr("y2", 19).attr("x1", 10).attr("x2", 10);
}, "requirement_contains"), o_ = {
  extension: Uv,
  composition: Gv,
  aggregation: Xv,
  dependency: Vv,
  lollipop: Zv,
  point: Kv,
  circle: Qv,
  cross: Jv,
  barb: t_,
  only_one: e_,
  zero_or_one: r_,
  one_or_more: i_,
  zero_or_more: a_,
  requirement_arrow: n_,
  requirement_contains: s_
}, l_ = Yv, c_ = {
  common: Yr,
  getConfig: Dt,
  insertCluster: yv,
  insertEdge: jv,
  insertEdgeLabel: Pv,
  insertMarkers: l_,
  insertNode: zp,
  interpolateToCurve: vo,
  labelHelper: it,
  log: F,
  positionEdgeLabel: Nv
}, Ei = {}, jp = /* @__PURE__ */ p((e) => {
  for (const t of e)
    Ei[t.name] = t;
}, "registerLayoutLoaders"), h_ = /* @__PURE__ */ p(() => {
  jp([
    {
      name: "dagre",
      loader: /* @__PURE__ */ p(async () => await import("./dagre-6UL2VRFP-ElJmj3Qx.js"), "loader")
    },
    {
      name: "cose-bilkent",
      loader: /* @__PURE__ */ p(async () => await import("./cose-bilkent-S5V4N54A-DbbgAnHs.js"), "loader")
    }
  ]);
}, "registerDefaultLayoutLoaders");
h_();
var SB = /* @__PURE__ */ p(async (e, t) => {
  if (!(e.layoutAlgorithm in Ei))
    throw new Error(`Unknown layout algorithm: ${e.layoutAlgorithm}`);
  const r = Ei[e.layoutAlgorithm];
  return (await r.loader()).render(e, t, c_, {
    algorithm: r.algorithm
  });
}, "render"), TB = /* @__PURE__ */ p((e = "", { fallback: t = "dagre" } = {}) => {
  if (e in Ei)
    return e;
  if (t in Ei)
    return F.warn(`Layout algorithm ${e} is not registered. Using ${t} as fallback.`), t;
  throw new Error(`Both layout algorithms ${e} and ${t} are not registered.`);
}, "getRegisteredLayoutAlgorithm"), Yp = "comm", Up = "rule", Gp = "decl", u_ = "@import", f_ = "@namespace", d_ = "@keyframes", p_ = "@layer", Xp = Math.abs, Ho = String.fromCharCode;
function Vp(e) {
  return e.trim();
}
function ya(e, t, r) {
  return e.replace(t, r);
}
function g_(e, t, r) {
  return e.indexOf(t, r);
}
function Sr(e, t) {
  return e.charCodeAt(t) | 0;
}
function Wr(e, t, r) {
  return e.slice(t, r);
}
function ye(e) {
  return e.length;
}
function m_(e) {
  return e.length;
}
function aa(e, t) {
  return t.push(e), e;
}
var Cn = 1, qr = 1, Zp = 0, te = 0, kt = 0, Xr = "";
function jo(e, t, r, i, a, n, s, o) {
  return { value: e, root: t, parent: r, type: i, props: a, children: n, line: Cn, column: qr, length: s, return: "", siblings: o };
}
function y_() {
  return kt;
}
function x_() {
  return kt = te > 0 ? Sr(Xr, --te) : 0, qr--, kt === 10 && (qr = 1, Cn--), kt;
}
function ce() {
  return kt = te < Zp ? Sr(Xr, te++) : 0, qr++, kt === 10 && (qr = 1, Cn++), kt;
}
function Ie() {
  return Sr(Xr, te);
}
function xa() {
  return te;
}
function wn(e, t) {
  return Wr(Xr, e, t);
}
function $i(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function b_(e) {
  return Cn = qr = 1, Zp = ye(Xr = e), te = 0, [];
}
function C_(e) {
  return Xr = "", e;
}
function Vn(e) {
  return Vp(wn(te - 1, Hs(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function w_(e) {
  for (; (kt = Ie()) && kt < 33; )
    ce();
  return $i(e) > 2 || $i(kt) > 3 ? "" : " ";
}
function k_(e, t) {
  for (; --t && ce() && !(kt < 48 || kt > 102 || kt > 57 && kt < 65 || kt > 70 && kt < 97); )
    ;
  return wn(e, xa() + (t < 6 && Ie() == 32 && ce() == 32));
}
function Hs(e) {
  for (; ce(); )
    switch (kt) {
      // ] ) " '
      case e:
        return te;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Hs(kt);
        break;
      // (
      case 40:
        e === 41 && Hs(e);
        break;
      // \
      case 92:
        ce();
        break;
    }
  return te;
}
function v_(e, t) {
  for (; ce() && e + kt !== 57; )
    if (e + kt === 84 && Ie() === 47)
      break;
  return "/*" + wn(t, te - 1) + "*" + Ho(e === 47 ? e : ce());
}
function __(e) {
  for (; !$i(Ie()); )
    ce();
  return wn(e, te);
}
function S_(e) {
  return C_(ba("", null, null, null, [""], e = b_(e), 0, [0], e));
}
function ba(e, t, r, i, a, n, s, o, l) {
  for (var c = 0, h = 0, u = s, f = 0, d = 0, g = 0, m = 1, y = 1, x = 1, b = 0, C = "", v = a, k = n, A = i, S = C; y; )
    switch (g = b, b = ce()) {
      // (
      case 40:
        if (g != 108 && Sr(S, u - 1) == 58) {
          g_(S += ya(Vn(b), "&", "&\f"), "&\f", Xp(c ? o[c - 1] : 0)) != -1 && (x = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        S += Vn(b);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        S += w_(g);
        break;
      // \
      case 92:
        S += k_(xa() - 1, 7);
        continue;
      // /
      case 47:
        switch (Ie()) {
          case 42:
          case 47:
            aa(T_(v_(ce(), xa()), t, r, l), l), ($i(g || 1) == 5 || $i(Ie() || 1) == 5) && ye(S) && Wr(S, -1, void 0) !== " " && (S += " ");
            break;
          default:
            S += "/";
        }
        break;
      // {
      case 123 * m:
        o[c++] = ye(S) * x;
      // } ; \0
      case 125 * m:
      case 59:
      case 0:
        switch (b) {
          // \0 }
          case 0:
          case 125:
            y = 0;
          // ;
          case 59 + h:
            x == -1 && (S = ya(S, /\f/g, "")), d > 0 && (ye(S) - u || m === 0 && g === 47) && aa(d > 32 ? Ac(S + ";", i, r, u - 1, l) : Ac(ya(S, " ", "") + ";", i, r, u - 2, l), l);
            break;
          // @ ;
          case 59:
            S += ";";
          // { rule/at-rule
          default:
            if (aa(A = Bc(S, t, r, c, h, a, o, C, v = [], k = [], u, n), n), b === 123)
              if (h === 0)
                ba(S, t, A, A, v, n, u, o, k);
              else {
                switch (f) {
                  // c(ontainer)
                  case 99:
                    if (Sr(S, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (Sr(S, 2) === 97) break;
                  default:
                    h = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                h ? ba(e, A, A, i && aa(Bc(e, A, A, 0, 0, a, o, C, a, v = [], u, k), k), a, k, u, o, i ? v : k) : ba(S, A, A, A, [""], k, 0, o, k);
              }
        }
        c = h = d = 0, m = x = 1, C = S = "", u = s;
        break;
      // :
      case 58:
        u = 1 + ye(S), d = g;
      default:
        if (m < 1) {
          if (b == 123)
            --m;
          else if (b == 125 && m++ == 0 && x_() == 125)
            continue;
        }
        switch (S += Ho(b), b * m) {
          // &
          case 38:
            x = h > 0 ? 1 : (S += "\f", -1);
            break;
          // ,
          case 44:
            o[c++] = (ye(S) - 1) * x, x = 1;
            break;
          // @
          case 64:
            Ie() === 45 && (S += Vn(ce())), f = Ie(), h = u = ye(C = S += __(xa())), b++;
            break;
          // -
          case 45:
            g === 45 && ye(S) == 2 && (m = 0);
        }
    }
  return n;
}
function Bc(e, t, r, i, a, n, s, o, l, c, h, u) {
  for (var f = a - 1, d = a === 0 ? n : [""], g = m_(d), m = 0, y = 0, x = 0; m < i; ++m)
    for (var b = 0, C = Wr(e, f + 1, f = Xp(y = s[m])), v = e; b < g; ++b)
      (v = Vp(y > 0 ? d[b] + " " + C : ya(C, /&\f/g, d[b]))) && (l[x++] = v);
  return jo(e, t, r, a === 0 ? Up : o, l, c, h, u);
}
function T_(e, t, r, i) {
  return jo(e, t, r, Yp, Ho(y_()), Wr(e, 2, -2), 0, i);
}
function Ac(e, t, r, i, a) {
  return jo(e, t, r, Gp, Wr(e, 0, i), Wr(e, i + 1, -1), i, a);
}
function js(e, t) {
  for (var r = "", i = 0; i < e.length; i++)
    r += t(e[i], i, e, t) || "";
  return r;
}
function B_(e, t, r, i) {
  switch (e.type) {
    case p_:
      if (e.children.length) break;
    case u_:
    case f_:
    case Gp:
      return e.return = e.return || e.value;
    case Yp:
      return "";
    case d_:
      return e.return = e.value + "{" + js(e.children, i) + "}";
    case Up:
      if (!ye(e.value = e.props.join(","))) return "";
  }
  return ye(r = js(e.children, i)) ? e.return = e.value + "{" + r + "}" : "";
}
var Kp = "c4", A_ = /* @__PURE__ */ p((e) => /^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/.test(e), "detector"), L_ = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./c4Diagram-YG6GDRKO-oxTguRTK.js");
  return { id: Kp, diagram: e };
}, "loader"), M_ = {
  id: Kp,
  detector: A_,
  loader: L_
}, E_ = M_, Qp = "flowchart", $_ = /* @__PURE__ */ p((e, t) => t?.flowchart?.defaultRenderer === "dagre-wrapper" || t?.flowchart?.defaultRenderer === "elk" ? !1 : /^\s*graph/.test(e), "detector"), F_ = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./flowDiagram-NV44I4VS-BUCjkQ6g.js");
  return { id: Qp, diagram: e };
}, "loader"), D_ = {
  id: Qp,
  detector: $_,
  loader: F_
}, O_ = D_, Jp = "flowchart-v2", R_ = /* @__PURE__ */ p((e, t) => t?.flowchart?.defaultRenderer === "dagre-d3" ? !1 : (t?.flowchart?.defaultRenderer === "elk" && (t.layout = "elk"), /^\s*graph/.test(e) && t?.flowchart?.defaultRenderer === "dagre-wrapper" ? !0 : /^\s*flowchart/.test(e)), "detector"), I_ = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./flowDiagram-NV44I4VS-BUCjkQ6g.js");
  return { id: Jp, diagram: e };
}, "loader"), P_ = {
  id: Jp,
  detector: R_,
  loader: I_
}, N_ = P_, tg = "er", z_ = /* @__PURE__ */ p((e) => /^\s*erDiagram/.test(e), "detector"), W_ = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./erDiagram-Q2GNP2WA-CG8fFfXt.js");
  return { id: tg, diagram: e };
}, "loader"), q_ = {
  id: tg,
  detector: z_,
  loader: W_
}, H_ = q_, eg = "gitGraph", j_ = /* @__PURE__ */ p((e) => /^\s*gitGraph/.test(e), "detector"), Y_ = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./gitGraphDiagram-NY62KEGX-CukfY1Ko.js");
  return { id: eg, diagram: e };
}, "loader"), U_ = {
  id: eg,
  detector: j_,
  loader: Y_
}, G_ = U_, rg = "gantt", X_ = /* @__PURE__ */ p((e) => /^\s*gantt/.test(e), "detector"), V_ = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./ganttDiagram-JELNMOA3-C2Dtkhr1.js");
  return { id: rg, diagram: e };
}, "loader"), Z_ = {
  id: rg,
  detector: X_,
  loader: V_
}, K_ = Z_, ig = "info", Q_ = /* @__PURE__ */ p((e) => /^\s*info/.test(e), "detector"), J_ = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./infoDiagram-WHAUD3N6-BFIbnMC2.js");
  return { id: ig, diagram: e };
}, "loader"), tS = {
  id: ig,
  detector: Q_,
  loader: J_
}, ag = "pie", eS = /* @__PURE__ */ p((e) => /^\s*pie/.test(e), "detector"), rS = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./pieDiagram-ADFJNKIX-BJpBoh1q.js");
  return { id: ag, diagram: e };
}, "loader"), iS = {
  id: ag,
  detector: eS,
  loader: rS
}, ng = "quadrantChart", aS = /* @__PURE__ */ p((e) => /^\s*quadrantChart/.test(e), "detector"), nS = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./quadrantDiagram-AYHSOK5B-DBWfQdT-.js");
  return { id: ng, diagram: e };
}, "loader"), sS = {
  id: ng,
  detector: aS,
  loader: nS
}, oS = sS, sg = "xychart", lS = /* @__PURE__ */ p((e) => /^\s*xychart(-beta)?/.test(e), "detector"), cS = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./xychartDiagram-PRI3JC2R-CP0RQ0Jc.js");
  return { id: sg, diagram: e };
}, "loader"), hS = {
  id: sg,
  detector: lS,
  loader: cS
}, uS = hS, og = "requirement", fS = /* @__PURE__ */ p((e) => /^\s*requirement(Diagram)?/.test(e), "detector"), dS = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./requirementDiagram-UZGBJVZJ-DsABCYvk.js");
  return { id: og, diagram: e };
}, "loader"), pS = {
  id: og,
  detector: fS,
  loader: dS
}, gS = pS, lg = "sequence", mS = /* @__PURE__ */ p((e) => /^\s*sequenceDiagram/.test(e), "detector"), yS = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./sequenceDiagram-WL72ISMW-VULtBlwq.js");
  return { id: lg, diagram: e };
}, "loader"), xS = {
  id: lg,
  detector: mS,
  loader: yS
}, bS = xS, cg = "class", CS = /* @__PURE__ */ p((e, t) => t?.class?.defaultRenderer === "dagre-wrapper" ? !1 : /^\s*classDiagram/.test(e), "detector"), wS = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./classDiagram-2ON5EDUG-DEapduGv.js");
  return { id: cg, diagram: e };
}, "loader"), kS = {
  id: cg,
  detector: CS,
  loader: wS
}, vS = kS, hg = "classDiagram", _S = /* @__PURE__ */ p((e, t) => /^\s*classDiagram/.test(e) && t?.class?.defaultRenderer === "dagre-wrapper" ? !0 : /^\s*classDiagram-v2/.test(e), "detector"), SS = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./classDiagram-v2-WZHVMYZB-DEapduGv.js");
  return { id: hg, diagram: e };
}, "loader"), TS = {
  id: hg,
  detector: _S,
  loader: SS
}, BS = TS, ug = "state", AS = /* @__PURE__ */ p((e, t) => t?.state?.defaultRenderer === "dagre-wrapper" ? !1 : /^\s*stateDiagram/.test(e), "detector"), LS = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./stateDiagram-FKZM4ZOC-CKiZozr2.js");
  return { id: ug, diagram: e };
}, "loader"), MS = {
  id: ug,
  detector: AS,
  loader: LS
}, ES = MS, fg = "stateDiagram", $S = /* @__PURE__ */ p((e, t) => !!(/^\s*stateDiagram-v2/.test(e) || /^\s*stateDiagram/.test(e) && t?.state?.defaultRenderer === "dagre-wrapper"), "detector"), FS = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./stateDiagram-v2-4FDKWEC3-B-_O0tOu.js");
  return { id: fg, diagram: e };
}, "loader"), DS = {
  id: fg,
  detector: $S,
  loader: FS
}, OS = DS, dg = "journey", RS = /* @__PURE__ */ p((e) => /^\s*journey/.test(e), "detector"), IS = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./journeyDiagram-XKPGCS4Q-fhGYU6D4.js");
  return { id: dg, diagram: e };
}, "loader"), PS = {
  id: dg,
  detector: RS,
  loader: IS
}, NS = PS, zS = /* @__PURE__ */ p((e, t, r) => {
  F.debug(`rendering svg for syntax error
`);
  const i = lC(t), a = i.append("g");
  i.attr("viewBox", "0 0 2412 512"), Ah(i, 100, 512, !0), a.append("path").attr("class", "error-icon").attr(
    "d",
    "m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z"
  ), a.append("path").attr("class", "error-icon").attr(
    "d",
    "m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z"
  ), a.append("path").attr("class", "error-icon").attr(
    "d",
    "m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z"
  ), a.append("path").attr("class", "error-icon").attr(
    "d",
    "m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z"
  ), a.append("path").attr("class", "error-icon").attr(
    "d",
    "m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z"
  ), a.append("path").attr("class", "error-icon").attr(
    "d",
    "m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z"
  ), a.append("text").attr("class", "error-text").attr("x", 1440).attr("y", 250).attr("font-size", "150px").style("text-anchor", "middle").text("Syntax error in text"), a.append("text").attr("class", "error-text").attr("x", 1250).attr("y", 400).attr("font-size", "100px").style("text-anchor", "middle").text(`mermaid version ${r}`);
}, "draw"), pg = { draw: zS }, WS = pg, qS = {
  db: {},
  renderer: pg,
  parser: {
    parse: /* @__PURE__ */ p(() => {
    }, "parse")
  }
}, HS = qS, gg = "flowchart-elk", jS = /* @__PURE__ */ p((e, t = {}) => (
  // If diagram explicitly states flowchart-elk
  /^\s*flowchart-elk/.test(e) || // If a flowchart/graph diagram has their default renderer set to elk
  /^\s*(flowchart|graph)/.test(e) && t?.flowchart?.defaultRenderer === "elk" ? (t.layout = "elk", !0) : !1
), "detector"), YS = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./flowDiagram-NV44I4VS-BUCjkQ6g.js");
  return { id: gg, diagram: e };
}, "loader"), US = {
  id: gg,
  detector: jS,
  loader: YS
}, GS = US, mg = "timeline", XS = /* @__PURE__ */ p((e) => /^\s*timeline/.test(e), "detector"), VS = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./timeline-definition-IT6M3QCI-D_GKhmy3.js");
  return { id: mg, diagram: e };
}, "loader"), ZS = {
  id: mg,
  detector: XS,
  loader: VS
}, KS = ZS, yg = "mindmap", QS = /* @__PURE__ */ p((e) => /^\s*mindmap/.test(e), "detector"), JS = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./mindmap-definition-VGOIOE7T-CJhUzxww.js");
  return { id: yg, diagram: e };
}, "loader"), tT = {
  id: yg,
  detector: QS,
  loader: JS
}, eT = tT, xg = "kanban", rT = /* @__PURE__ */ p((e) => /^\s*kanban/.test(e), "detector"), iT = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./kanban-definition-3W4ZIXB7-COXCMZA_.js");
  return { id: xg, diagram: e };
}, "loader"), aT = {
  id: xg,
  detector: rT,
  loader: iT
}, nT = aT, bg = "sankey", sT = /* @__PURE__ */ p((e) => /^\s*sankey(-beta)?/.test(e), "detector"), oT = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./sankeyDiagram-TZEHDZUN-DwL8wd0x.js");
  return { id: bg, diagram: e };
}, "loader"), lT = {
  id: bg,
  detector: sT,
  loader: oT
}, cT = lT, Cg = "packet", hT = /* @__PURE__ */ p((e) => /^\s*packet(-beta)?/.test(e), "detector"), uT = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./diagram-S2PKOQOG-BfqRn6Ud.js");
  return { id: Cg, diagram: e };
}, "loader"), fT = {
  id: Cg,
  detector: hT,
  loader: uT
}, wg = "radar", dT = /* @__PURE__ */ p((e) => /^\s*radar-beta/.test(e), "detector"), pT = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./diagram-QEK2KX5R-BNZhry8Q.js");
  return { id: wg, diagram: e };
}, "loader"), gT = {
  id: wg,
  detector: dT,
  loader: pT
}, kg = "block", mT = /* @__PURE__ */ p((e) => /^\s*block(-beta)?/.test(e), "detector"), yT = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./blockDiagram-VD42YOAC-BJIkQa4S.js");
  return { id: kg, diagram: e };
}, "loader"), xT = {
  id: kg,
  detector: mT,
  loader: yT
}, bT = xT, vg = "architecture", CT = /* @__PURE__ */ p((e) => /^\s*architecture/.test(e), "detector"), wT = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./architectureDiagram-VXUJARFQ-DxGyt-RC.js");
  return { id: vg, diagram: e };
}, "loader"), kT = {
  id: vg,
  detector: CT,
  loader: wT
}, vT = kT, _g = "treemap", _T = /* @__PURE__ */ p((e) => /^\s*treemap/.test(e), "detector"), ST = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./diagram-PSM6KHXK-DrVSnnSN.js");
  return { id: _g, diagram: e };
}, "loader"), TT = {
  id: _g,
  detector: _T,
  loader: ST
}, Lc = !1, kn = /* @__PURE__ */ p(() => {
  Lc || (Lc = !0, La("error", HS, (e) => e.toLowerCase().trim() === "error"), La(
    "---",
    // --- diagram type may appear if YAML front-matter is not parsed correctly
    {
      db: {
        clear: /* @__PURE__ */ p(() => {
        }, "clear")
      },
      styles: {},
      // should never be used
      renderer: {
        draw: /* @__PURE__ */ p(() => {
        }, "draw")
      },
      parser: {
        parse: /* @__PURE__ */ p(() => {
          throw new Error(
            "Diagrams beginning with --- are not valid. If you were trying to use a YAML front-matter, please ensure that you've correctly opened and closed the YAML front-matter with un-indented `---` blocks"
          );
        }, "parse")
      },
      init: /* @__PURE__ */ p(() => null, "init")
      // no op
    },
    (e) => e.toLowerCase().trimStart().startsWith("---")
  ), ls(GS, eT, vT), ls(
    E_,
    nT,
    BS,
    vS,
    H_,
    K_,
    tS,
    iS,
    gS,
    bS,
    N_,
    O_,
    KS,
    G_,
    OS,
    ES,
    NS,
    oS,
    cT,
    fT,
    uS,
    bT,
    gT,
    TT
  ));
}, "addDiagrams"), BT = /* @__PURE__ */ p(async () => {
  F.debug("Loading registered diagrams");
  const t = (await Promise.allSettled(
    Object.entries(ar).map(async ([r, { detector: i, loader: a }]) => {
      if (a)
        try {
          fs(r);
        } catch {
          try {
            const { diagram: n, id: s } = await a();
            La(s, n, i);
          } catch (n) {
            throw F.error(`Failed to load external diagram with key ${r}. Removing from detectors.`), delete ar[r], n;
          }
        }
    })
  )).filter((r) => r.status === "rejected");
  if (t.length > 0) {
    F.error(`Failed to load ${t.length} external diagrams`);
    for (const r of t)
      F.error(r);
    throw new Error(`Failed to load ${t.length} external diagrams`);
  }
}, "loadRegisteredDiagrams"), AT = "graphics-document document";
function Sg(e, t) {
  e.attr("role", AT), t !== "" && e.attr("aria-roledescription", t);
}
p(Sg, "setA11yDiagramInfo");
function Tg(e, t, r, i) {
  if (e.insert !== void 0) {
    if (r) {
      const a = `chart-desc-${i}`;
      e.attr("aria-describedby", a), e.insert("desc", ":first-child").attr("id", a).text(r);
    }
    if (t) {
      const a = `chart-title-${i}`;
      e.attr("aria-labelledby", a), e.insert("title", ":first-child").attr("id", a).text(t);
    }
  }
}
p(Tg, "addSVGa11yTitleDescription");
var rr, Ys = (rr = class {
  constructor(t, r, i, a, n) {
    this.type = t, this.text = r, this.db = i, this.parser = a, this.renderer = n;
  }
  static async fromText(t, r = {}) {
    const i = Dt(), a = ro(t, i);
    t = zw(t) + `
`;
    try {
      fs(a);
    } catch {
      const c = wx(a);
      if (!c)
        throw new mh(`Diagram ${a} not found.`);
      const { id: h, diagram: u } = await c();
      La(h, u);
    }
    const { db: n, parser: s, renderer: o, init: l } = fs(a);
    return s.parser && (s.parser.yy = n), n.clear?.(), l?.(i), r.title && n.setDiagramTitle?.(r.title), await s.parse(t), new rr(a, t, n, s, o);
  }
  async render(t, r) {
    await this.renderer.draw(this.text, t, r, this);
  }
  getParser() {
    return this.parser;
  }
  getType() {
    return this.type;
  }
}, p(rr, "Diagram"), rr), Mc = [], LT = /* @__PURE__ */ p(() => {
  Mc.forEach((e) => {
    e();
  }), Mc = [];
}, "attachFunctions"), MT = /* @__PURE__ */ p((e) => e.replace(/^\s*%%(?!{)[^\n]+\n?/gm, "").trimStart(), "cleanupComments");
function Bg(e) {
  const t = e.match(gh);
  if (!t)
    return {
      text: e,
      metadata: {}
    };
  let r = gw(t[1], {
    // To support config, we need JSON schema.
    // https://www.yaml.org/spec/1.2/spec.html#id2803231
    schema: pw
  }) ?? {};
  r = typeof r == "object" && !Array.isArray(r) ? r : {};
  const i = {};
  return r.displayMode && (i.displayMode = r.displayMode.toString()), r.title && (i.title = r.title.toString()), r.config && (i.config = r.config), {
    text: e.slice(t[0].length),
    metadata: i
  };
}
p(Bg, "extractFrontMatter");
var ET = /* @__PURE__ */ p((e) => e.replace(/\r\n?/g, `
`).replace(
  /<(\w+)([^>]*)>/g,
  (t, r, i) => "<" + r + i.replace(/="([^"]*)"/g, "='$1'") + ">"
), "cleanupText"), $T = /* @__PURE__ */ p((e) => {
  const { text: t, metadata: r } = Bg(e), { displayMode: i, title: a, config: n = {} } = r;
  return i && (n.gantt || (n.gantt = {}), n.gantt.displayMode = i), { title: a, config: n, text: t };
}, "processFrontmatter"), FT = /* @__PURE__ */ p((e) => {
  const t = oe.detectInit(e) ?? {}, r = oe.detectDirective(e, "wrap");
  return Array.isArray(r) ? t.wrap = r.some(({ type: i }) => i === "wrap") : r?.type === "wrap" && (t.wrap = !0), {
    text: Bw(e),
    directive: t
  };
}, "processDirectives");
function Yo(e) {
  const t = ET(e), r = $T(t), i = FT(r.text), a = Ao(r.config, i.directive);
  return e = MT(i.text), {
    code: e,
    title: r.title,
    config: a
  };
}
p(Yo, "preprocessDiagram");
function Ag(e) {
  const t = new TextEncoder().encode(e), r = Array.from(t, (i) => String.fromCodePoint(i)).join("");
  return btoa(r);
}
p(Ag, "toBase64");
var DT = 5e4, OT = "graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa", RT = "sandbox", IT = "loose", PT = "http://www.w3.org/2000/svg", NT = "http://www.w3.org/1999/xlink", zT = "http://www.w3.org/1999/xhtml", WT = "100%", qT = "100%", HT = "border:0;margin:0;", jT = "margin:0", YT = "allow-top-navigation-by-user-activation allow-popups", UT = 'The "iframe" tag is not supported by your browser.', GT = ["foreignobject"], XT = ["dominant-baseline"];
function Uo(e) {
  const t = Yo(e);
  return Ba(), Ix(t.config ?? {}), t;
}
p(Uo, "processAndSetConfigs");
async function Lg(e, t) {
  kn();
  try {
    const { code: r, config: i } = Uo(e);
    return { diagramType: (await Eg(r)).type, config: i };
  } catch (r) {
    if (t?.suppressErrors)
      return !1;
    throw r;
  }
}
p(Lg, "parse");
var Ec = /* @__PURE__ */ p((e, t, r = []) => `
.${e} ${t} { ${r.join(" !important; ")} !important; }`, "cssImportantStyles"), VT = /* @__PURE__ */ p((e, t = /* @__PURE__ */ new Map()) => {
  let r = "";
  if (e.themeCSS !== void 0 && (r += `
${e.themeCSS}`), e.fontFamily !== void 0 && (r += `
:root { --mermaid-font-family: ${e.fontFamily}}`), e.altFontFamily !== void 0 && (r += `
:root { --mermaid-alt-font-family: ${e.altFontFamily}}`), t instanceof Map) {
    const s = e.htmlLabels ?? e.flowchart?.htmlLabels ? ["> *", "span"] : ["rect", "polygon", "ellipse", "circle", "path"];
    t.forEach((o) => {
      El(o.styles) || s.forEach((l) => {
        r += Ec(o.id, l, o.styles);
      }), El(o.textStyles) || (r += Ec(
        o.id,
        "tspan",
        (o?.textStyles || []).map((l) => l.replace("color", "fill"))
      ));
    });
  }
  return r;
}, "createCssStyles"), ZT = /* @__PURE__ */ p((e, t, r, i) => {
  const a = VT(e, r), n = ib(t, a, e.themeVariables);
  return js(S_(`${i}{${n}}`), B_);
}, "createUserStyles"), KT = /* @__PURE__ */ p((e = "", t, r) => {
  let i = e;
  return !r && !t && (i = i.replace(
    /marker-end="url\([\d+./:=?A-Za-z-]*?#/g,
    'marker-end="url(#'
  )), i = dr(i), i = i.replace(/<br>/g, "<br/>"), i;
}, "cleanUpSvgCode"), QT = /* @__PURE__ */ p((e = "", t) => {
  const r = t?.viewBox?.baseVal?.height ? t.viewBox.baseVal.height + "px" : qT, i = Ag(`<body style="${jT}">${e}</body>`);
  return `<iframe style="width:${WT};height:${r};${HT}" src="data:text/html;charset=UTF-8;base64,${i}" sandbox="${YT}">
  ${UT}
</iframe>`;
}, "putIntoIFrame"), $c = /* @__PURE__ */ p((e, t, r, i, a) => {
  const n = e.append("div");
  n.attr("id", r), i && n.attr("style", i);
  const s = n.append("svg").attr("id", t).attr("width", "100%").attr("xmlns", PT);
  return a && s.attr("xmlns:xlink", a), s.append("g"), e;
}, "appendDivSvgG");
function Us(e, t) {
  return e.append("iframe").attr("id", t).attr("style", "width: 100%; height: 100%;").attr("sandbox", "");
}
p(Us, "sandboxedIframe");
var JT = /* @__PURE__ */ p((e, t, r, i) => {
  e.getElementById(t)?.remove(), e.getElementById(r)?.remove(), e.getElementById(i)?.remove();
}, "removeExistingElements"), tB = /* @__PURE__ */ p(async function(e, t, r) {
  kn();
  const i = Uo(t);
  t = i.code;
  const a = Dt();
  F.debug(a), t.length > (a?.maxTextSize ?? DT) && (t = OT);
  const n = "#" + e, s = "i" + e, o = "#" + s, l = "d" + e, c = "#" + l, h = /* @__PURE__ */ p(() => {
    const R = ht(f ? o : c).node();
    R && "remove" in R && R.remove();
  }, "removeTempElements");
  let u = ht("body");
  const f = a.securityLevel === RT, d = a.securityLevel === IT, g = a.fontFamily;
  if (r !== void 0) {
    if (r && (r.innerHTML = ""), f) {
      const N = Us(ht(r), s);
      u = ht(N.nodes()[0].contentDocument.body), u.node().style.margin = 0;
    } else
      u = ht(r);
    $c(u, e, l, `font-family: ${g}`, NT);
  } else {
    if (JT(document, e, l, s), f) {
      const N = Us(ht("body"), s);
      u = ht(N.nodes()[0].contentDocument.body), u.node().style.margin = 0;
    } else
      u = ht("body");
    $c(u, e, l);
  }
  let m, y;
  try {
    m = await Ys.fromText(t, { title: i.title });
  } catch (N) {
    if (a.suppressErrorRendering)
      throw h(), N;
    m = await Ys.fromText("error"), y = N;
  }
  const x = u.select(c).node(), b = m.type, C = x.firstChild, v = C.firstChild, k = m.renderer.getClasses?.(t, m), A = ZT(a, b, k, n), S = document.createElement("style");
  S.innerHTML = A, C.insertBefore(S, v);
  try {
    await m.renderer.draw(t, e, $l.version, m);
  } catch (N) {
    throw a.suppressErrorRendering ? h() : WS.draw(t, e, $l.version), N;
  }
  const D = u.select(`${c} svg`), I = m.db.getAccTitle?.(), O = m.db.getAccDescription?.();
  $g(b, D, I, O), u.select(`[id="${e}"]`).selectAll("foreignobject > *").attr("xmlns", zT);
  let E = u.select(c).node().innerHTML;
  if (F.debug("config.arrowMarkerAbsolute", a.arrowMarkerAbsolute), E = KT(E, f, Bt(a.arrowMarkerAbsolute)), f) {
    const N = u.select(c + " svg").node();
    E = QT(E, N);
  } else d || (E = Dr.sanitize(E, {
    ADD_TAGS: GT,
    ADD_ATTR: XT,
    HTML_INTEGRATION_POINTS: { foreignobject: !0 }
  }));
  if (LT(), y)
    throw y;
  return h(), {
    diagramType: b,
    svg: E,
    bindFunctions: m.db.bindFunctions
  };
}, "render");
function Mg(e = {}) {
  const t = St({}, e);
  t?.fontFamily && !t.themeVariables?.fontFamily && (t.themeVariables || (t.themeVariables = {}), t.themeVariables.fontFamily = t.fontFamily), Ox(t), t?.theme && t.theme in Ae ? t.themeVariables = Ae[t.theme].getThemeVariables(
    t.themeVariables
  ) : t && (t.themeVariables = Ae.default.getThemeVariables(t.themeVariables));
  const r = typeof t == "object" ? Dx(t) : wh();
  eo(r.logLevel), kn();
}
p(Mg, "initialize");
var Eg = /* @__PURE__ */ p((e, t = {}) => {
  const { code: r } = Yo(e);
  return Ys.fromText(r, t);
}, "getDiagramFromText");
function $g(e, t, r, i) {
  Sg(t, e), Tg(t, r, i, t.attr("id"));
}
p($g, "addA11yInfo");
var cr = Object.freeze({
  render: tB,
  parse: Lg,
  getDiagramFromText: Eg,
  initialize: Mg,
  getConfig: Dt,
  setConfig: kh,
  getSiteConfig: wh,
  updateSiteConfig: Rx,
  reset: /* @__PURE__ */ p(() => {
    Ba();
  }, "reset"),
  globalReset: /* @__PURE__ */ p(() => {
    Ba(Or);
  }, "globalReset"),
  defaultConfig: Or
});
eo(Dt().logLevel);
Ba(Dt());
var eB = /* @__PURE__ */ p((e, t, r) => {
  F.warn(e), Bo(e) ? (r && r(e.str, e.hash), t.push({ ...e, message: e.str, error: e })) : (r && r(e), e instanceof Error && t.push({
    str: e.message,
    message: e.message,
    hash: e.name,
    error: e
  }));
}, "handleError"), Fg = /* @__PURE__ */ p(async function(e = {
  querySelector: ".mermaid"
}) {
  try {
    await rB(e);
  } catch (t) {
    if (Bo(t) && F.error(t.str), $e.parseError && $e.parseError(t), !e.suppressErrors)
      throw F.error("Use the suppressErrors option to suppress these errors"), t;
  }
}, "run"), rB = /* @__PURE__ */ p(async function({ postRenderCallback: e, querySelector: t, nodes: r } = {
  querySelector: ".mermaid"
}) {
  const i = cr.getConfig();
  F.debug(`${e ? "" : "No "}Callback function found`);
  let a;
  if (r)
    a = r;
  else if (t)
    a = document.querySelectorAll(t);
  else
    throw new Error("Nodes and querySelector are both undefined");
  F.debug(`Found ${a.length} diagrams`), i?.startOnLoad !== void 0 && (F.debug("Start On Load: " + i?.startOnLoad), cr.updateSiteConfig({ startOnLoad: i?.startOnLoad }));
  const n = new oe.InitIDGenerator(i.deterministicIds, i.deterministicIDSeed);
  let s;
  const o = [];
  for (const l of Array.from(a)) {
    if (F.info("Rendering diagram: " + l.id), l.getAttribute("data-processed"))
      continue;
    l.setAttribute("data-processed", "true");
    const c = `mermaid-${n.next()}`;
    s = l.innerHTML, s = td(oe.entityDecode(s)).trim().replace(/<br\s*\/?>/gi, "<br/>");
    const h = oe.detectInit(s);
    h && F.debug("Detected early reinit: ", h);
    try {
      const { svg: u, bindFunctions: f } = await Ig(c, s, l);
      l.innerHTML = u, e && await e(c), f && f(l);
    } catch (u) {
      eB(u, o, $e.parseError);
    }
  }
  if (o.length > 0)
    throw o[0];
}, "runThrowsErrors"), Dg = /* @__PURE__ */ p(function(e) {
  cr.initialize(e);
}, "initialize"), iB = /* @__PURE__ */ p(async function(e, t, r) {
  F.warn("mermaid.init is deprecated. Please use run instead."), e && Dg(e);
  const i = { postRenderCallback: r, querySelector: ".mermaid" };
  typeof t == "string" ? i.querySelector = t : t && (t instanceof HTMLElement ? i.nodes = [t] : i.nodes = t), await Fg(i);
}, "init"), aB = /* @__PURE__ */ p(async (e, {
  lazyLoad: t = !0
} = {}) => {
  kn(), ls(...e), t === !1 && await BT();
}, "registerExternalDiagrams"), Og = /* @__PURE__ */ p(function() {
  if ($e.startOnLoad) {
    const { startOnLoad: e } = cr.getConfig();
    e && $e.run().catch((t) => F.error("Mermaid failed to initialize", t));
  }
}, "contentLoaded");
typeof document < "u" && window.addEventListener("load", Og, !1);
var nB = /* @__PURE__ */ p(function(e) {
  $e.parseError = e;
}, "setParseErrorHandler"), Za = [], Zn = !1, Rg = /* @__PURE__ */ p(async () => {
  if (!Zn) {
    for (Zn = !0; Za.length > 0; ) {
      const e = Za.shift();
      if (e)
        try {
          await e();
        } catch (t) {
          F.error("Error executing queue", t);
        }
    }
    Zn = !1;
  }
}, "executeQueue"), sB = /* @__PURE__ */ p(async (e, t) => new Promise((r, i) => {
  const a = /* @__PURE__ */ p(() => new Promise((n, s) => {
    cr.parse(e, t).then(
      (o) => {
        n(o), r(o);
      },
      (o) => {
        F.error("Error parsing", o), $e.parseError?.(o), s(o), i(o);
      }
    );
  }), "performCall");
  Za.push(a), Rg().catch(i);
}), "parse"), Ig = /* @__PURE__ */ p((e, t, r) => new Promise((i, a) => {
  const n = /* @__PURE__ */ p(() => new Promise((s, o) => {
    cr.render(e, t, r).then(
      (l) => {
        s(l), i(l);
      },
      (l) => {
        F.error("Error parsing", l), $e.parseError?.(l), o(l), a(l);
      }
    );
  }), "performCall");
  Za.push(n), Rg().catch(a);
}), "render"), oB = /* @__PURE__ */ p(() => Object.keys(ar).map((e) => ({
  id: e
})), "getRegisteredDiagramsMetadata"), $e = {
  startOnLoad: !0,
  mermaidAPI: cr,
  parse: sB,
  render: Ig,
  init: iB,
  run: Fg,
  registerExternalDiagrams: aB,
  registerLayoutLoaders: jp,
  initialize: Dg,
  parseError: void 0,
  contentLoaded: Og,
  setParseErrorHandler: nB,
  detectType: ro,
  registerIconPacks: jk,
  getRegisteredDiagramsMetadata: oB
}, lB = $e;
const BB = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lB
}, Symbol.toStringTag, { value: "Module" }));
export {
  et as $,
  dB as A,
  bi as B,
  xe as C,
  Y0 as D,
  fb as E,
  Ao as F,
  Dt as G,
  Ch as H,
  $w as I,
  pw as J,
  lC as K,
  $l as L,
  Bx as M,
  Uk as N,
  Rr as O,
  uB as P,
  fn as Q,
  Ux as R,
  io as S,
  jl as T,
  st as U,
  Ew as V,
  tb as W,
  Oi as X,
  H as Y,
  vw as Z,
  p as _,
  sb as a,
  Qs as a$,
  Lh as a0,
  yv as a1,
  zp as a2,
  vB as a3,
  mw as a4,
  Bt as a5,
  He as a6,
  ko as a7,
  fd as a8,
  dr as a9,
  Js as aA,
  w0 as aB,
  M0 as aC,
  jr as aD,
  Pm as aE,
  Wm as aF,
  F0 as aG,
  Em as aH,
  Ks as aI,
  El as aJ,
  U as aK,
  $f as aL,
  Ay as aM,
  $y as aN,
  Di as aO,
  _a as aP,
  qe as aQ,
  Ka as aR,
  Ml as aS,
  to as aT,
  Qc as aU,
  Kc as aV,
  $0 as aW,
  rs as aX,
  Fm as aY,
  zm as aZ,
  Hm as a_,
  Pf as aa,
  l_ as ab,
  kB as ac,
  _B as ad,
  CB as ae,
  G as af,
  wB as ag,
  jv as ah,
  Nv as ai,
  Pv as aj,
  hB as ak,
  Qa as al,
  Zc as am,
  zi as an,
  jk as ao,
  Hk as ap,
  j0 as aq,
  Nm as ar,
  ih as as,
  ah as at,
  A0 as au,
  L0 as av,
  Ze as aw,
  _y as ax,
  Cl as ay,
  Tm as az,
  nb as b,
  z0 as b0,
  BB as b1,
  ft as c,
  ht as d,
  Ah as e,
  St as f,
  lb as g,
  Ee as h,
  Jt as i,
  kw as j,
  Yr as k,
  F as l,
  zf as m,
  Ri as n,
  fB as o,
  TB as p,
  cb as q,
  SB as r,
  ob as s,
  hb as t,
  oe as u,
  gw as v,
  Ow as w,
  Ov as x,
  pB as y,
  ab as z
};
