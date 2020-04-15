!function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.cloud = {});
}(this, function (t) {
  "use strict";
  var n = function (t, e) {
    return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
    })(t, e);
  };function e(t, e) {
    function r() {
      this.constructor = t;
    }n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
  }var d = function () {
    return (d = Object.assign || function (t) {
      for (var e, r = 1, n = arguments.length; r < n; r++) for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);return t;
    }).apply(this, arguments);
  };function r(t, e, r, n) {
    var o,
        i = arguments.length,
        a = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, r) : n;if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, r, n);else for (var s = t.length - 1; 0 <= s; s--) (o = t[s]) && (a = (i < 3 ? o(a) : 3 < i ? o(e, r, a) : o(e, r)) || a);return 3 < i && a && Object.defineProperty(e, r, a), a;
  }function h(t, a, s, c) {
    return new (s = s || Promise)(function (r, e) {
      function n(t) {
        try {
          i(c.next(t));
        } catch (t) {
          e(t);
        }
      }function o(t) {
        try {
          i(c.throw(t));
        } catch (t) {
          e(t);
        }
      }function i(t) {
        var e;t.done ? r(t.value) : ((e = t.value) instanceof s ? e : new s(function (t) {
          t(e);
        })).then(n, o);
      }i((c = c.apply(t, a || [])).next());
    });
  }function S(r, n) {
    var o,
        i,
        a,
        t,
        s = { label: 0, sent: function () {
        if (1 & a[0]) throw a[1];return a[1];
      }, trys: [], ops: [] };return t = { next: e(0), throw: e(1), return: e(2) }, "function" == typeof Symbol && (t[Symbol.iterator] = function () {
      return this;
    }), t;function e(e) {
      return function (t) {
        return function (e) {
          if (o) throw new TypeError("Generator is already executing.");for (; s;) try {
            if (o = 1, i && (a = 2 & e[0] ? i.return : e[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, e[1])).done) return a;switch (i = 0, a && (e = [2 & e[0], a.value]), e[0]) {case 0:case 1:
                a = e;break;case 4:
                return s.label++, { value: e[1], done: false };case 5:
                s.label++, i = e[1], e = [0];continue;case 7:
                e = s.ops.pop(), s.trys.pop();continue;default:
                if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                  s = 0;continue;
                }if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                  s.label = e[1];break;
                }if (6 === e[0] && s.label < a[1]) {
                  s.label = a[1], a = e;break;
                }if (a && s.label < a[2]) {
                  s.label = a[2], s.ops.push(e);break;
                }a[2] && s.ops.pop(), s.trys.pop();continue;}e = n.call(r, s);
          } catch (t) {
            e = [6, t], i = 0;
          } finally {
            o = a = 0;
          }if (5 & e[0]) throw e[1];return { value: e[0] ? e[1] : undefined, done: true };
        }([e, t]);
      };
    }
  }function o() {
    return function (t, e, r) {
      var l = r.value;r.value = function (t) {
        var e,
            r = t || {},
            n = r.success,
            o = undefined === n ? null : n,
            i = r.fail,
            a = undefined === i ? null : i,
            s = r.complete,
            c = undefined === s ? null : s,
            u = !c && !a && !o;try {
          e = l.apply(this, arguments);
        } catch (t) {
          return u ? Promise.reject(t) : (a && a(t), undefined);
        }if (e = e.then ? e : Promise.resolve(e), u) return e;e.then(function (t) {
          o && o(t), c && c(t);
        }).catch(function (t) {
          a && a(t), c && c(t);
        });
      };
    };
  }function k(t, e, r) {
    Array.isArray(e) || (e = e.split("."));var n = e.reduce(function (t, e) {
      return t ? t[e] : null;
    }, t);return r ? n || r : n;
  }function i(t, e) {
    return t(e = { exports: {} }, e.exports), e.exports;
  }var p,
      a,
      s = i(function (t, e) {
    var r;t.exports = (r = r || function (l) {
      var r = Object.create || function (t) {
        var e;return n.prototype = t, e = new n(), n.prototype = null, e;
      };function n() {}var t = {},
          e = t.lib = {},
          o = e.Base = { extend: function (t) {
          var e = r(this);return t && e.mixIn(t), e.hasOwnProperty("init") && this.init !== e.init || (e.init = function () {
            e.$super.init.apply(this, arguments);
          }), (e.init.prototype = e).$super = this, e;
        }, create: function () {
          var t = this.extend();return t.init.apply(t, arguments), t;
        }, init: function () {}, mixIn: function (t) {
          for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);t.hasOwnProperty("toString") && (this.toString = t.toString);
        }, clone: function () {
          return this.init.prototype.extend(this);
        } },
          p = e.WordArray = o.extend({ init: function (t, e) {
          t = this.words = t || [], this.sigBytes = null != e ? e : 4 * t.length;
        }, toString: function (t) {
          return (t || a).stringify(this);
        }, concat: function (t) {
          var e = this.words,
              r = t.words,
              n = this.sigBytes,
              o = t.sigBytes;if (this.clamp(), n % 4) for (var i = 0; i < o; i++) {
            var a = r[i >>> 2] >>> 24 - i % 4 * 8 & 255;e[n + i >>> 2] |= a << 24 - (n + i) % 4 * 8;
          } else for (i = 0; i < o; i += 4) e[n + i >>> 2] = r[i >>> 2];return this.sigBytes += o, this;
        }, clamp: function () {
          var t = this.words,
              e = this.sigBytes;t[e >>> 2] &= 4294967295 << 32 - e % 4 * 8, t.length = l.ceil(e / 4);
        }, clone: function () {
          var t = o.clone.call(this);return t.words = this.words.slice(0), t;
        }, random: function (t) {
          for (var e, r = [], n = function (e) {
            e = e;var r = 987654321,
                n = 4294967295;return function () {
              var t = ((r = 36969 * (65535 & r) + (r >> 16) & n) << 16) + (e = 18e3 * (65535 & e) + (e >> 16) & n) & n;return t /= 4294967296, (t += .5) * (.5 < l.random() ? 1 : -1);
            };
          }, o = 0; o < t; o += 4) {
            var i = n(4294967296 * (e || l.random()));e = 987654071 * i(), r.push(4294967296 * i() | 0);
          }return new p.init(r, t);
        } }),
          i = t.enc = {},
          a = i.Hex = { stringify: function (t) {
          for (var e = t.words, r = t.sigBytes, n = [], o = 0; o < r; o++) {
            var i = e[o >>> 2] >>> 24 - o % 4 * 8 & 255;n.push((i >>> 4).toString(16)), n.push((15 & i).toString(16));
          }return n.join("");
        }, parse: function (t) {
          for (var e = t.length, r = [], n = 0; n < e; n += 2) r[n >>> 3] |= parseInt(t.substr(n, 2), 16) << 24 - n % 8 * 4;return new p.init(r, e / 2);
        } },
          s = i.Latin1 = { stringify: function (t) {
          for (var e = t.words, r = t.sigBytes, n = [], o = 0; o < r; o++) {
            var i = e[o >>> 2] >>> 24 - o % 4 * 8 & 255;n.push(String.fromCharCode(i));
          }return n.join("");
        }, parse: function (t) {
          for (var e = t.length, r = [], n = 0; n < e; n++) r[n >>> 2] |= (255 & t.charCodeAt(n)) << 24 - n % 4 * 8;return new p.init(r, e);
        } },
          c = i.Utf8 = { stringify: function (t) {
          try {
            return decodeURIComponent(escape(s.stringify(t)));
          } catch (t) {
            throw new Error("Malformed UTF-8 data");
          }
        }, parse: function (t) {
          return s.parse(unescape(encodeURIComponent(t)));
        } },
          u = e.BufferedBlockAlgorithm = o.extend({ reset: function () {
          this._data = new p.init(), this._nDataBytes = 0;
        }, _append: function (t) {
          "string" == typeof t && (t = c.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes;
        }, _process: function (t) {
          var e = this._data,
              r = e.words,
              n = e.sigBytes,
              o = this.blockSize,
              i = n / (4 * o),
              a = (i = t ? l.ceil(i) : l.max((0 | i) - this._minBufferSize, 0)) * o,
              s = l.min(4 * a, n);if (a) {
            for (var c = 0; c < a; c += o) this._doProcessBlock(r, c);var u = r.splice(0, a);e.sigBytes -= s;
          }return new p.init(u, s);
        }, clone: function () {
          var t = o.clone.call(this);return t._data = this._data.clone(), t;
        }, _minBufferSize: 0 }),
          d = (e.Hasher = u.extend({ cfg: o.extend(), init: function (t) {
          this.cfg = this.cfg.extend(t), this.reset();
        }, reset: function () {
          u.reset.call(this), this._doReset();
        }, update: function (t) {
          return this._append(t), this._process(), this;
        }, finalize: function (t) {
          return t && this._append(t), this._doFinalize();
        }, blockSize: 16, _createHelper: function (r) {
          return function (t, e) {
            return new r.init(e).finalize(t);
          };
        }, _createHmacHelper: function (r) {
          return function (t, e) {
            return new d.HMAC.init(r, e).finalize(t);
          };
        } }), t.algo = {});return t;
    }(Math), r);
  }),
      c = (i(function (t, e) {
    var c;t.exports = (c = s, function (o) {
      var t = c,
          e = t.lib,
          r = e.WordArray,
          n = e.Hasher,
          i = t.algo,
          a = [],
          g = [];!function () {
        function t(t) {
          for (var e = o.sqrt(t), r = 2; r <= e; r++) if (!(t % r)) return;return 1;
        }function e(t) {
          return 4294967296 * (t - (0 | t)) | 0;
        }for (var r = 2, n = 0; n < 64;) t(r) && (n < 8 && (a[n] = e(o.pow(r, .5))), g[n] = e(o.pow(r, 0.3333333333333333)), n++), r++;
      }();var b = [],
          s = i.SHA256 = n.extend({ _doReset: function () {
          this._hash = new r.init(a.slice(0));
        }, _doProcessBlock: function (t, e) {
          for (var r = this._hash.words, n = r[0], o = r[1], i = r[2], a = r[3], s = r[4], c = r[5], u = r[6], l = r[7], p = 0; p < 64; p++) {
            if (p < 16) b[p] = 0 | t[e + p];else {
              var d = b[p - 15],
                  h = (d << 25 | d >>> 7) ^ (d << 14 | d >>> 18) ^ d >>> 3,
                  f = b[p - 2],
                  v = (f << 15 | f >>> 17) ^ (f << 13 | f >>> 19) ^ f >>> 10;b[p] = h + b[p - 7] + v + b[p - 16];
            }var y = n & o ^ n & i ^ o & i,
                m = (n << 30 | n >>> 2) ^ (n << 19 | n >>> 13) ^ (n << 10 | n >>> 22),
                w = l + ((s << 26 | s >>> 6) ^ (s << 21 | s >>> 11) ^ (s << 7 | s >>> 25)) + (s & c ^ ~s & u) + g[p] + b[p];l = u, u = c, c = s, s = a + w | 0, a = i, i = o, o = n, n = w + (m + y) | 0;
          }r[0] = r[0] + n | 0, r[1] = r[1] + o | 0, r[2] = r[2] + i | 0, r[3] = r[3] + a | 0, r[4] = r[4] + s | 0, r[5] = r[5] + c | 0, r[6] = r[6] + u | 0, r[7] = r[7] + l | 0;
        }, _doFinalize: function () {
          var t = this._data,
              e = t.words,
              r = 8 * this._nDataBytes,
              n = 8 * t.sigBytes;return e[n >>> 5] |= 128 << 24 - n % 32, e[14 + (64 + n >>> 9 << 4)] = o.floor(r / 4294967296), e[15 + (64 + n >>> 9 << 4)] = r, t.sigBytes = 4 * e.length, this._process(), this._hash;
        }, clone: function () {
          var t = n.clone.call(this);return t._hash = this._hash.clone(), t;
        } });t.SHA256 = n._createHelper(s), t.HmacSHA256 = n._createHmacHelper(s);
    }(Math), c.SHA256);
  }), i(function (t, e) {
    var r;t.exports = (r = s, undefined);
  }), i(function (t, e) {
    t.exports = s.HmacSHA256;
  })),
      u = i(function (t, e) {
    var r;t.exports = (r = s, function () {
      var c = r.lib.WordArray;r.enc.Base64 = { stringify: function (t) {
          var e = t.words,
              r = t.sigBytes,
              n = this._map;t.clamp();for (var o = [], i = 0; i < r; i += 3) for (var a = (e[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 16 | (e[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255) << 8 | e[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, s = 0; s < 4 && i + .75 * s < r; s++) o.push(n.charAt(a >>> 6 * (3 - s) & 63));var c = n.charAt(64);if (c) for (; o.length % 4;) o.push(c);return o.join("");
        }, parse: function (t) {
          var e = t.length,
              r = this._map,
              n = this._reverseMap;if (!n) {
            n = this._reverseMap = [];for (var o = 0; o < r.length; o++) n[r.charCodeAt(o)] = o;
          }var i = r.charAt(64);if (i) {
            var a = t.indexOf(i);-1 !== a && (e = a);
          }return function (t, e, r) {
            for (var n = [], o = 0, i = 0; i < e; i++) if (i % 4) {
              var a = r[t.charCodeAt(i - 1)] << i % 4 * 2,
                  s = r[t.charCodeAt(i)] >>> 6 - i % 4 * 2;n[o >>> 2] |= (a | s) << 24 - o % 4 * 8, o++;
            }return c.create(n, o);
          }(t, e, n);
        }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" };
    }(), r.enc.Base64);
  }),
      l = i(function (t, e) {
    var a;t.exports = (a = s, function (l) {
      var t = a,
          e = t.lib,
          r = e.WordArray,
          n = e.Hasher,
          o = t.algo,
          S = [];!function () {
        for (var t = 0; t < 64; t++) S[t] = 4294967296 * l.abs(l.sin(t + 1)) | 0;
      }();var i = o.MD5 = n.extend({ _doReset: function () {
          this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878]);
        }, _doProcessBlock: function (t, e) {
          for (var r = 0; r < 16; r++) {
            var n = e + r,
                o = t[n];t[n] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);
          }var i = this._hash.words,
              a = t[e + 0],
              s = t[e + 1],
              c = t[e + 2],
              u = t[e + 3],
              l = t[e + 4],
              p = t[e + 5],
              d = t[e + 6],
              h = t[e + 7],
              f = t[e + 8],
              v = t[e + 9],
              y = t[e + 10],
              m = t[e + 11],
              w = t[e + 12],
              g = t[e + 13],
              b = t[e + 14],
              _ = t[e + 15],
              x = i[0],
              A = i[1],
              q = i[2],
              R = i[3];x = k(x, A, q, R, a, 7, S[0]), R = k(R, x, A, q, s, 12, S[1]), q = k(q, R, x, A, c, 17, S[2]), A = k(A, q, R, x, u, 22, S[3]), x = k(x, A, q, R, l, 7, S[4]), R = k(R, x, A, q, p, 12, S[5]), q = k(q, R, x, A, d, 17, S[6]), A = k(A, q, R, x, h, 22, S[7]), x = k(x, A, q, R, f, 7, S[8]), R = k(R, x, A, q, v, 12, S[9]), q = k(q, R, x, A, y, 17, S[10]), A = k(A, q, R, x, m, 22, S[11]), x = k(x, A, q, R, w, 7, S[12]), R = k(R, x, A, q, g, 12, S[13]), q = k(q, R, x, A, b, 17, S[14]), x = T(x, A = k(A, q, R, x, _, 22, S[15]), q, R, s, 5, S[16]), R = T(R, x, A, q, d, 9, S[17]), q = T(q, R, x, A, m, 14, S[18]), A = T(A, q, R, x, a, 20, S[19]), x = T(x, A, q, R, p, 5, S[20]), R = T(R, x, A, q, y, 9, S[21]), q = T(q, R, x, A, _, 14, S[22]), A = T(A, q, R, x, l, 20, S[23]), x = T(x, A, q, R, v, 5, S[24]), R = T(R, x, A, q, b, 9, S[25]), q = T(q, R, x, A, u, 14, S[26]), A = T(A, q, R, x, f, 20, S[27]), x = T(x, A, q, R, g, 5, S[28]), R = T(R, x, A, q, c, 9, S[29]), q = T(q, R, x, A, h, 14, S[30]), x = M(x, A = T(A, q, R, x, w, 20, S[31]), q, R, p, 4, S[32]), R = M(R, x, A, q, f, 11, S[33]), q = M(q, R, x, A, m, 16, S[34]), A = M(A, q, R, x, b, 23, S[35]), x = M(x, A, q, R, s, 4, S[36]), R = M(R, x, A, q, l, 11, S[37]), q = M(q, R, x, A, h, 16, S[38]), A = M(A, q, R, x, y, 23, S[39]), x = M(x, A, q, R, g, 4, S[40]), R = M(R, x, A, q, a, 11, S[41]), q = M(q, R, x, A, u, 16, S[42]), A = M(A, q, R, x, d, 23, S[43]), x = M(x, A, q, R, v, 4, S[44]), R = M(R, x, A, q, w, 11, S[45]), q = M(q, R, x, A, _, 16, S[46]), x = E(x, A = M(A, q, R, x, c, 23, S[47]), q, R, a, 6, S[48]), R = E(R, x, A, q, h, 10, S[49]), q = E(q, R, x, A, b, 15, S[50]), A = E(A, q, R, x, p, 21, S[51]), x = E(x, A, q, R, w, 6, S[52]), R = E(R, x, A, q, u, 10, S[53]), q = E(q, R, x, A, y, 15, S[54]), A = E(A, q, R, x, s, 21, S[55]), x = E(x, A, q, R, f, 6, S[56]), R = E(R, x, A, q, _, 10, S[57]), q = E(q, R, x, A, d, 15, S[58]), A = E(A, q, R, x, g, 21, S[59]), x = E(x, A, q, R, l, 6, S[60]), R = E(R, x, A, q, m, 10, S[61]), q = E(q, R, x, A, c, 15, S[62]), A = E(A, q, R, x, v, 21, S[63]), i[0] = i[0] + x | 0, i[1] = i[1] + A | 0, i[2] = i[2] + q | 0, i[3] = i[3] + R | 0;
        }, _doFinalize: function () {
          var t = this._data,
              e = t.words,
              r = 8 * this._nDataBytes,
              n = 8 * t.sigBytes;e[n >>> 5] |= 128 << 24 - n % 32;var o = l.floor(r / 4294967296),
              i = r;e[15 + (64 + n >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), e[14 + (64 + n >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), t.sigBytes = 4 * (e.length + 1), this._process();for (var a = this._hash, s = a.words, c = 0; c < 4; c++) {
            var u = s[c];s[c] = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8);
          }return a;
        }, clone: function () {
          var t = n.clone.call(this);return t._hash = this._hash.clone(), t;
        } });function k(t, e, r, n, o, i, a) {
        var s = t + (e & r | ~e & n) + o + a;return (s << i | s >>> 32 - i) + e;
      }function T(t, e, r, n, o, i, a) {
        var s = t + (e & n | r & ~n) + o + a;return (s << i | s >>> 32 - i) + e;
      }function M(t, e, r, n, o, i, a) {
        var s = t + (e ^ r ^ n) + o + a;return (s << i | s >>> 32 - i) + e;
      }function E(t, e, r, n, o, i, a) {
        var s = t + (r ^ (e | ~n)) + o + a;return (s << i | s >>> 32 - i) + e;
      }t.MD5 = n._createHelper(i), t.HmacMD5 = n._createHmacHelper(i);
    }(Math), a.MD5);
  });(a = p = p || {})[a.MTOP = 1] = "MTOP", a[a.MY = 2] = "MY", a[a.GATEWAY = 3] = "GATEWAY";var f,
      v = (e(y, f = Error), y);function y() {
    return null !== f && f.apply(this, arguments) || this;
  }function m(t) {
    this.options = t || {}, this.options.dataProxyGatewayUrl = this.options.dataProxyGatewayUrl || this.options.gatewayUrl;
  }var w = (g.prototype.init = function (e, r) {
    return h(this, undefined, undefined, function () {
      return S(this, function (t) {
        switch (t.label) {case 0:
            return this.options = d({}, e), this.proxy = r, this.tasks = [], this.inited = true, [4, this.listenNetworkChange()];case 1:
            return t.sent(), this.flushGatewayRequestQueue(), this.pauseExecTask = false, [2];}
      });
    });
  }, g.prototype.listenNetworkChange = function () {
    return h(this, undefined, undefined, function () {
      var e,
          r = this;return S(this, function (t) {
        switch (t.label) {case 0:
            return t.trys.push([0, 2,, 3]), [4, this.exec({ url: "my.getNetworkType" })];case 1:
            return e = t.sent(), this.networkType = e.networkType, window.my && window.my.onNetworkStatusChange && window.my.onNetworkStatusChange(function (t) {
              t && t.networkType && (r.networkType = t.networkType);
            }), [3, 3];case 2:
            return t.sent(), [3, 3];case 3:
            return [2];}
      });
    });
  }, g.getRequestType = function (t) {
    return 0 === t.indexOf("mtop.") ? p.MTOP : 0 === t.indexOf("my.") ? p.MY : p.GATEWAY;
  }, g.prototype.verifyResponse = function (e, r, n) {
    return h(this, undefined, undefined, function () {
      return S(this, function (t) {
        switch (t.label) {case 0:
            if (k(n, "mc-code") || k(e, "errCode") || k(e, "error_response.code"), r.__is_retry_task__) return this.tryThrowError(e, n), [2, e];t.label = 1;case 1:
            return t.trys.push([1, 3,, 4]), this.tryThrowError(e, n), [2, e];case 2:
            return [2, t.sent()];case 3:
            throw t.sent();case 4:
            return [2];}
      });
    });
  }, g.prototype.tryThrowError = function (t, e) {
    var r = k(e, "mc-msg") || k(t, "errMsg") || k(t, "error_response.msg"),
        n = k(e, "mc-code") || k(t, "errCode") || k(t, "error_response.code");if (n && "200" != n) {
      var o = new v(n + ":::" + r);throw o.code = n, o.msg = r, o;
    }
  }, g.prototype.sendGatewayRequest = function (n) {
    return h(this, undefined, undefined, function () {
      var e,
          r = this;return S(this, function (t) {
        switch (t.label) {case 0:
            return this.pauseExecTask ? [2, new Promise(function (t, e) {
              r.tasks.push({ detail: n, success: t, fail: e });
            })] : [3, 1];case 1:
            return n = this.createGatewayRequest(n), [4, this.proxy.apply(d({}, n), p.GATEWAY)];case 2:
            return e = t.sent(), [4, this.verifyResponse(k(e, "data"), n, k(e, "headers"))];case 3:
            return [2, t.sent()];}
      });
    });
  }, g.prototype.flushGatewayRequestQueue = function (o) {
    var i = this;undefined === o && (o = false), this.tasks.forEach(function (t) {
      var e = t.detail,
          r = t.success,
          n = t.fail;if (o) return n("初始化失败");i.exec(e, p.GATEWAY).then(r).catch(n);
    }), this.tasks = [];
  }, g.prototype.exec = function (e, r) {
    return h(this, undefined, undefined, function () {
      return S(this, function (t) {
        switch (t.label) {case 0:
            if (r = r || g.getRequestType(e.url), !this.inited) throw new Error("请先调用cloud.init()");return r !== p.GATEWAY ? [3, 2] : [4, this.sendGatewayRequest(e)];case 1:
            return [2, t.sent()];case 2:
            return [4, this.proxy.apply(e, r)];case 3:
            return [2, t.sent()];}
      });
    });
  }, g.prototype.getHttpRequestSign = function (t, e, r, n, o) {
    if (this.options.signSecret) {
      var i = o;delete n["mc-sign"];var a = e + "\n" + u.stringify(l(i)) + "\napplication/json\n" + Object.keys(n).filter(function (t) {
        return (/^mc-/.test(t)
        );
      }).sort().map(function (t) {
        return t.toLowerCase() + ":" + n[t];
      }).join("\n") + "\n" + t + (r ? "?" + r : "");return u.stringify(c(a, this.options.signSecret));
    }
  }, g.prototype.createGatewayRequest = function (t) {
    var e = this.options,
        r = e.sessionKey,
        n = e.appKey,
        o = e.requestId,
        i = e.miniappId,
        a = e.openId,
        s = e.unionId,
        c = e.cloudId;t.method = "POST";var u = d(d({}, t.headers), { "Content-Type": "application/json", "mc-timestamp": "" + Date.now(), "mc-session": r });a && (u["mc-open-id"] = a), c && (u["mc-cloud-id"] = c), s && (u["mc-union-id"] = s), n && (u["mc-appKey"] = n), i && (u["mc-miniapp-id"] = i), o && (u["mc-request-id"] = o), t.env && (u["mc-env"] = t.env), this.networkType && (u["mc-network"] = this.networkType), u["mc-session"] || delete u["mc-session"], t.rawData = t.rawData || t.data, "object" == typeof t.data && (t.data = JSON.stringify(t.data));var l = this.getHttpRequestSign(t.url, t.method, "", u, t.data);return d(d({}, t), { url: "" + t.url, headers: d(d({}, u), { sign: l, "eagleeye-traceid": o }) });
  }, g);function g() {
    this.inited = false, this.pauseExecTask = false;
  }function b(t, e) {
    this.request = e, this.options = t;
  }new w();var _,
      x = (e(A, _ = b), A.prototype.invoke = function (e, r, n, o) {
    return undefined === n && (n = "main"), h(this, undefined, undefined, function () {
      return S(this, function (t) {
        switch (t.label) {case 0:
            return [4, this.fcRequest({ fcName: e, handler: n, data: r, options: o })];case 1:
            return [2, t.sent()];}
      });
    });
  }, A.prototype.fcRequest = function (e) {
    return h(this, undefined, undefined, function () {
      return S(this, function (t) {
        switch (t.label) {case 0:
            return [4, this.request.exec({ env: this.options.env || "online", url: "fc", data: e }, p.GATEWAY)];case 1:
            return [2, t.sent()];}
      });
    });
  }, r([o()], A.prototype, "invoke", null), A);function A() {
    return null !== _ && _.apply(this, arguments) || this;
  }var q,
      T = "mtop.taobao.miniapp.cloud.store.config.v2.get",
      M = "mtop.taobao.miniapp.cloud.store.config.v2.seller.get",
      E = "mtop.taobao.miniapp.cloud.store.file.v2.save",
      O = "mtop.taobao.miniapp.cloud.store.file.v2.seller.save",
      R = "mtop.taobao.miniapp.cloud.store.file.v2.delete",
      P = "mtop.taobao.miniapp.cloud.store.file.v2.seller.delete",
      B = "mtop.taobao.miniapp.cloud.store.file.v2.list",
      I = "mtop.taobao.miniapp.cloud.store.file.v2.seller.list",
      H = "other",
      C = (e(D, q = b), D.prototype.parseUploadResult = function (t, e) {
    return this.parsePostUploadResult(t, e);
  }, D.prototype.parsePostUploadResult = function (t, e) {
    var r, n, o;try {
      var i = JSON.parse(e.data);n = i.fileId, r = i.url, o = i.message;
    } catch (t) {}return { imageUrl: r, specialId: n, message: o };
  }, D.prototype.uploadFile = function (R) {
    return h(this, undefined, undefined, function () {
      var e, r, n, o, i, a, s, c, u, l, p, d, h, f, v, y, m, w, g, b, _, x, A, q;return S(this, function (t) {
        switch (t.label) {case 0:
            e = R.filePath, r = R.fileType, n = undefined === r ? H : r, o = R.fileName, i = undefined === o ? "miniappfile" : o, a = R.seller, s = undefined !== a && a, c = R.dirId, t.label = 1;case 1:
            return t.trys.push([1, 3,, 4]), [4, this.storageRequest(s ? M : T, { newContainer: true, cloudPath: i, fileType: n, sellerSpace: s, dirId: c })];case 2:
            return u = t.sent(), [3, 4];case 3:
            throw l = t.sent(), new Error("获取配置错误" + (l.message || l.toString()));case 4:
            return p = k(u, ["data", "model", n], {}), d = p.url, h = undefined === d ? "" : d, f = p.formData, v = undefined === f ? null : f, y = p.headers, (m = { url: h, fileType: n, header: undefined === y ? null : y, formData: v, filePath: e, fileName: "file" }).header && m.header.Authorization && (m.formData.Authorization = m.header.Authorization), i && (m.formData.localFileName = Date.now() + "-" + i), m.header ? "image" !== n && (m.header.origin = m.header.origin || "https://miniapp-cloud.taobao.com", m.header.referer = m.header.referer || "https://miniapp-cloud.taobao.com") : delete m.header, m.formData || delete m.formData, [4, this.storageRequest("my.uploadFile", m)];case 5:
            if (w = t.sent(), g = this.parseUploadResult(n, w), b = g.imageUrl, _ = g.specialId, x = g.message, !_) throw new Error(x || "upload exception:unknown error");return A = { fileType: n, specialId: _, url: b, cloudPath: i, sellerSpace: s }, [4, this.storageRequest(s ? O : E, A)];case 6:
            if (!k(q = t.sent(), "data.model.url")) throw new Error(k(q, ["result", "msgInfo"], "上传失败"));return [2, k(q, "data.model")];}
      });
    });
  }, D.prototype.deleteFile = function (c) {
    return h(this, undefined, undefined, function () {
      var e, r, n, o, i, a, s;return S(this, function (t) {
        switch (t.label) {case 0:
            return e = c.fileId, r = c.fileType, n = undefined === r ? H : r, o = c.seller, i = undefined !== o && o, a = Array.isArray(e) ? e : [e], a = JSON.stringify(a), [4, this.storageRequest(i ? P : R, { fileType: n, fileIds: a, sellerSpace: i })];case 1:
            if (k(s = t.sent(), ["data", "model"])) return [2, true];throw new Error(k(s, ["data", "msgInfo"]));}
      });
    });
  }, D.prototype.getTempFileURL = function (s) {
    return h(this, undefined, undefined, function () {
      var e, r, n, o, i, a;return S(this, function (t) {
        switch (t.label) {case 0:
            if (e = s.fileId, r = s.seller, n = undefined !== r && r, !e) throw new Error("缺少fileId,请检查参数");return o = Array.isArray(e) ? e : [e], o = JSON.stringify(o), [4, this.storageRequest(n ? I : B, { fileIds: o, sellerSpace: n })];case 1:
            if (i = t.sent(), a = k(i, ["data", "model"])) return [2, a];throw new Error(k(i, ["data", "msgInfo"]));}
      });
    });
  }, D.prototype.downloadByFileId = function (l) {
    return h(this, undefined, undefined, function () {
      var e, r, n, o, i, a, s, c, u;return S(this, function (t) {
        switch (t.label) {case 0:
            if (e = l.fileId, r = l.cache, !e) throw new Error("缺少fileId,请检查参数");return n = Array.isArray(e) ? e : [e], [4, this.storageRequest(B, { fileIds: JSON.stringify(n) })];case 1:
            o = t.sent(), i = k(o, ["data", "model"]) || [], a = [], s = 0, t.label = 2;case 2:
            return s < i.length ? (c = (i[s] || {}).url, [4, this._downloadByUrl(c, r)]) : [3, 5];case 3:
            (u = t.sent()) && a.push(u), t.label = 4;case 4:
            return s++, [3, 2];case 5:
            return [2, a];}
      });
    });
  }, D.prototype.storageRequest = function (r, n, o) {
    return h(this, undefined, undefined, function () {
      var e;return S(this, function (t) {
        switch (t.label) {case 0:
            return e = "test" === this.options.env ? "test" : "online", (n = n || {}).env = e, [4, this.request.exec({ url: r, data: n }, o)];case 1:
            return [2, t.sent()];}
      });
    });
  }, D.prototype._downloadByUrl = function (n, o) {
    return h(this, undefined, undefined, function () {
      var e, r;return S(this, function (t) {
        switch (t.label) {case 0:
            return n ? o ? [4, this.request.proxy.apply({ url: "my.getStorage", data: { key: n } })] : [3, 2] : [2, null];case 1:
            if (e = t.sent().data) return [2, e];t.label = 2;case 2:
            return [4, this.request.exec({ url: "my.downloadFile", data: { url: n } })];case 3:
            return r = t.sent().apFilePath, o ? [4, this.request.exec({ url: "my.setStorage", data: { key: n, data: r } })] : [3, 5];case 4:
            t.sent(), t.label = 5;case 5:
            return [2, r];}
      });
    });
  }, r([o()], D.prototype, "uploadFile", null), r([o()], D.prototype, "deleteFile", null), r([o()], D.prototype, "getTempFileURL", null), r([o()], D.prototype, "downloadByFileId", null), D);function D() {
    return null !== q && q.apply(this, arguments) || this;
  }var j = (Object.defineProperty(G.prototype, "name", { get: function () {
      return this._coll;
    }, enumerable: true, configurable: true }), G.prototype.aggregate = function (r) {
    return h(this, undefined, undefined, function () {
      var e;return S(this, function (t) {
        switch (t.label) {case 0:
            return Array.isArray(r) || (r = [r]), e = { aggregate_pipelines: r, collection_name: this._coll }, [4, this._db.dbRequest("miniapp.cloud.db.collection.aggregate", e)];case 1:
            return [2, t.sent()];}
      });
    });
  }, G.prototype.count = function (r) {
    return h(this, undefined, undefined, function () {
      var e;return S(this, function (t) {
        switch (t.label) {case 0:
            return e = { filter: r, collection_name: this._coll }, [4, this._db.dbRequest("miniapp.cloud.db.collection.count", e)];case 1:
            return [2, t.sent()];}
      });
    });
  }, G.prototype.deleteMany = function (r) {
    return h(this, undefined, undefined, function () {
      var e;return S(this, function (t) {
        switch (t.label) {case 0:
            return e = { filter: r, collection_name: this._coll }, [4, this._db.dbRequest("miniapp.cloud.db.collection.remove", e)];case 1:
            return [2, t.sent()];}
      });
    });
  }, G.prototype.find = function (r, n) {
    return undefined === n && (n = {}), h(this, undefined, undefined, function () {
      var e;return S(this, function (t) {
        switch (t.label) {case 0:
            return e = { displayed_fields: n.projection, order_by: n.sort, skip: n.skip, limit: n.limit, filter: r, collection_name: this._coll }, [4, this._db.dbRequest("miniapp.cloud.db.collection.get", e)];case 1:
            return [2, t.sent()];}
      });
    });
  }, G.prototype.replaceOne = function (r, n) {
    return h(this, undefined, undefined, function () {
      var e;return S(this, function (t) {
        switch (t.label) {case 0:
            return e = { filter: r, new_record: n, collection_name: this._coll }, [4, this._db.dbRequest("miniapp.cloud.db.collection.replace", e)];case 1:
            return [2, t.sent()];}
      });
    });
  }, G.prototype.insertOne = function (r) {
    return h(this, undefined, undefined, function () {
      var e;return S(this, function (t) {
        switch (t.label) {case 0:
            return e = { record: r, collection_name: this._coll }, [4, this._db.dbRequest("miniapp.cloud.db.collection.add", e)];case 1:
            return [2, t.sent()];}
      });
    });
  }, G.prototype.insertMany = function (r) {
    return h(this, undefined, undefined, function () {
      var e;return S(this, function (t) {
        switch (t.label) {case 0:
            if (e = { records: r, collection_name: this._coll }, !Array.isArray(r)) throw new Error("带插入的数据只能为数组");return [4, this._db.dbRequest("miniapp.cloud.db.collection.addMany", e)];case 1:
            return [2, t.sent()];}
      });
    });
  }, G.prototype.updateMany = function (r, n, o) {
    return h(this, undefined, undefined, function () {
      var e;return S(this, function (t) {
        switch (t.label) {case 0:
            return e = { filter: r, action: n, arrayFilters: o, collection_name: this._coll }, [4, this._db.dbRequest("miniapp.cloud.db.collection.update", e)];case 1:
            return [2, t.sent()];}
      });
    });
  }, G.prototype.createIndex = function (r, n, o) {
    return h(this, undefined, undefined, function () {
      var e;return S(this, function (t) {
        switch (t.label) {case 0:
            return e = { index_name: r, unique: n, fields: o, collection_name: this._coll }, [4, this._db.dbRequest("miniapp.cloud.db.index.create", e)];case 1:
            return [2, t.sent()];}
      });
    });
  }, r([o()], G.prototype, "aggregate", null), r([o()], G.prototype, "count", null), r([o()], G.prototype, "deleteMany", null), r([o()], G.prototype, "find", null), r([o()], G.prototype, "replaceOne", null), r([o()], G.prototype, "insertOne", null), r([o()], G.prototype, "insertMany", null), r([o()], G.prototype, "updateMany", null), r([o()], G.prototype, "createIndex", null), G);function G(t, e) {
    this._db = t, this._coll = e;
  }var N,
      U = (e(z, N = b), z.prototype.collection = function (t) {
    if (!t) throw new Error("集合名称不能为空");return new j(this, t);
  }, z.prototype.createCollection = function (r, t) {
    return h(this, undefined, undefined, function () {
      var e;return S(this, function (t) {
        switch (t.label) {case 0:
            return e = { collection_name: r }, [4, this.dbRequest("miniapp.cloud.db.collection.create", e)];case 1:
            return [2, t.sent()];}
      });
    });
  }, z.prototype.dbRequest = function (r, n) {
    return h(this, undefined, undefined, function () {
      var e;return S(this, function (t) {
        switch (t.label) {case 0:
            return "test" !== (e = this.options.env) && (e = "online"), n = d(d({}, n), { env: e }), [4, this.request.exec({ env: e, url: "db/" + r, data: n }, p.GATEWAY)];case 1:
            return [2, t.sent()];}
      });
    });
  }, r([o()], z.prototype, "createCollection", null), z);function z() {
    return null !== N && N.apply(this, arguments) || this;
  }var W,
      Y = (e(F, W = b), F.prototype.invoke = function (p) {
    return h(this, undefined, undefined, function () {
      var e, i, a, s, c, u, l;return S(this, function (t) {
        switch (t.label) {case 0:
            return e = p.data, i = p.headers, a = p.authScope, s = p.api, e = e || {}, Object.keys(e).forEach(function (t) {
              e[t] = "string" == typeof e[t] ? e[t] : JSON.stringify(e[t]);
            }), c = { apiName: s, httpHeaders: i, data: e }, [4, this.topRequest(c)];case 1:
            if (!k(u = t.sent(), "error_response")) return [2, u];if (26 !== (l = k(u, "error_response.code")) && 27 !== l || !a) return [3, 7];t.label = 2;case 2:
            return t.trys.push([2, 6,, 7]), [4, (r = my.authorize, n = { scopes: a }, r ? (n = n || {}, new Promise(function (t, e) {
              r.call(o || my, d(d({}, n), { success: t, fail: e }));
            })) : Promise.reject("未实现my.api"))];case 3:
            return [4, t.sent()];case 4:
            return t.sent(), [4, this.topRequest(c)];case 5:
            return k(u = t.sent(), "error_response") ? [3, 7] : [2, u];case 6:
            return t.sent(), [3, 7];case 7:
            throw new Error("" + JSON.stringify(k(u, "error_response")));}var r, n, o;
      });
    });
  }, F.prototype.topRequest = function (e) {
    return h(this, undefined, undefined, function () {
      return S(this, function (t) {
        switch (t.label) {case 0:
            return [4, this.request.exec({ env: this.options.env || "online", url: "top", data: e }, p.GATEWAY)];case 1:
            return [2, t.sent()];}
      });
    });
  }, r([o()], F.prototype, "invoke", null), F);function F() {
    return null !== W && W.apply(this, arguments) || this;
  }var J,
      K = (e(L, J = b), L.prototype.invoke = function (o) {
    return h(this, undefined, undefined, function () {
      var e, r, n;return S(this, function (t) {
        switch (t.label) {case 0:
            return e = o.data, r = o.headers, n = o.api, [4, this.topRequest({ apiName: n, httpHeaders: r, data: e })];case 1:
            return [2, t.sent()];}
      });
    });
  }, L.prototype.topRequest = function (e) {
    return h(this, undefined, undefined, function () {
      return S(this, function (t) {
        switch (t.label) {case 0:
            return [4, this.request.exec({ url: "process", data: e }, p.GATEWAY)];case 1:
            return [2, t.sent()];}
      });
    });
  }, r([o()], L.prototype, "invoke", null), L);function L() {
    return null !== J && J.apply(this, arguments) || this;
  }var Q,
      X = (e($, Q = b), $.prototype.invoke = function (i) {
    return h(this, undefined, undefined, function () {
      var e, r, n, o;return S(this, function (t) {
        switch (t.label) {case 0:
            return e = i.data, r = i.headers, n = i.api, o = i.targetAppKey, [4, this.qimenRequest({ apiName: n, httpHeaders: r, targetAppKey: o, data: e })];case 1:
            return [2, t.sent()];}
      });
    });
  }, $.prototype.qimenRequest = function (e) {
    return h(this, undefined, undefined, function () {
      return S(this, function (t) {
        switch (t.label) {case 0:
            return [4, this.request.exec({ env: this.options.env || "online", url: "qimen", data: e }, p.GATEWAY)];case 1:
            return [2, t.sent()];}
      });
    });
  }, r([o()], $.prototype, "invoke", null), $);function $() {
    return null !== Q && Q.apply(this, arguments) || this;
  }var V,
      Z = (e(tt, V = b), tt.prototype.httpRequest = function (s) {
    return h(this, undefined, undefined, function () {
      var e, r, n, o, i, a;return S(this, function (t) {
        switch (t.label) {case 0:
            return e = s.body, r = s.params, n = s.headers, o = s.path, i = s.method, a = s.exts, [4, this.innerRequest({ path: o, headers: n, body: e, queryString: r, method: i, options: a })];case 1:
            return [2, t.sent()];}
      });
    });
  }, tt.prototype.innerRequest = function (e) {
    return h(this, undefined, undefined, function () {
      return S(this, function (t) {
        switch (t.label) {case 0:
            return [4, this.request.exec({ env: this.options.env || "online", url: "cloudHttp", data: e }, p.GATEWAY)];case 1:
            return [2, t.sent()];}
      });
    });
  }, r([o()], tt.prototype, "httpRequest", null), tt);function tt() {
    return null !== V && V.apply(this, arguments) || this;
  }var et,
      rt = (e(nt, et = Error), nt.prototype.toString = function () {
    return (this.code || "") + " " + (this.message || "");
  }, nt);function nt() {
    return null !== et && et.apply(this, arguments) || this;
  }var ot,
      it = (e(at, ot = m), at.getMtopErrorMsg = function (t) {
    var e = new rt();if (!t) return e.code = "500", e.message = "mtop请求错误", e;var r,
        n,
        o = t.ret && t.ret[0] && t.ret[0].split("::");return t.data = t.data || k(t, ["err", "data"]), t.data && t.data.errCode && (r = t.data.errCode, n = t.data.errMessage || t.data.errMsg), t.data && t.data.errorCode && (r = t.data.errorCode), t.data && t.data.errorMessage && (n = t.data.errorMessage), t.data && t.data.success || o && "SUCCESS" === o[0] && !r ? undefined : (r = r || (o && "FAIL_SYS_SESSION_EXPIRED" === o[0] ? "904" : "500"), n = n || o && o[1] || "mtop请求错误", e.code = r, e.message = n, e);
  }, at.GATEWAY_APIS = { "db/miniapp.cloud.db.collection.create": "mtop.taobao.dataproxy.collection.create", "db/miniapp.cloud.db.index.create": "mtop.taobao.dataproxy.index.create", "db/miniapp.cloud.db.collection.aggregate": "mtop.taobao.dataproxy.record.aggregate", "db/miniapp.cloud.db.collection.count": "mtop.taobao.dataproxy.record.count", "db/miniapp.cloud.db.collection.remove": "mtop.taobao.dataproxy.record.delete", "db/miniapp.cloud.db.collection.get": "mtop.taobao.dataproxy.record.select", "db/miniapp.cloud.db.collection.replace": "mtop.taobao.dataproxy.record.replace", "db/miniapp.cloud.db.collection.add": "mtop.taobao.dataproxy.record.insert", "db/miniapp.cloud.db.collection.addMany": "mtop.taobao.dataproxy.record.batch.insert", "db/miniapp.cloud.db.collection.update": "mtop.taobao.dataproxy.record.update", fc: "mtop.miniapp.cloud.invoke.fc", top: "mtop.miniapp.cloud.invoke.top", qimen: "mtop.miniapp.cloud.invoke.qimen.cloud", process: "mtop.miniapp.cloud.invoke.process", cloudHttp: "mtop.miniapp.cloud.application.request" }, at);function at() {
    var t = null !== ot && ot.apply(this, arguments) || this;return t.sendMtop = function (i, a, s) {
      return h(t, undefined, undefined, function () {
        return S(this, function (t) {
          return console.log("sendMtop", a), [2, new Promise(function (r, n) {
            var e = 1,
                o = function () {
              my.sendMtop(d(d({ api: i, v: "1.0", data: a, method: "POST" }, s), { success: function (t) {
                  console.log("mtop success", t);var e = at.getMtopErrorMsg(t);e ? n(e) : r(t);
                }, fail: function (t) {
                  if (console.log("mtop error", t), 1 === t.error_type && 0 < e) return --e, o();n(at.getMtopErrorMsg(t));
                } }));
            };o();
          })];
        });
      });
    }, t.invokeMyApi = function (r, n) {
      return h(t, undefined, undefined, function () {
        return S(this, function (t) {
          return [2, new Promise(function (t, e) {
            return r = r.replace(/^my\./, ""), my[r](d(d({}, n), { success: t, fail: e }));
          })];
        });
      });
    }, t.sendHttpRequest = function (n, o, i, a) {
      return h(t, undefined, undefined, function () {
        var e = this;return S(this, function (t) {
          return [2, new Promise(function (r, t) {
            my.httpRequest({ url: e.options.gatewayUrl + "/" + n, data: o, dataType: "text", method: a, headers: i, success: function (e) {
                try {
                  r(d(d({}, e), { data: JSON.parse(e.data) }));
                } catch (t) {
                  r(d(d({}, e), { data: e.data }));
                }
              }, fail: t });
          })];
        });
      });
    }, t.apply = function (u, l) {
      return h(t, undefined, undefined, function () {
        var e, r, n, o, i, a, s, c;return S(this, function (t) {
          switch (t.label) {case 0:
              return e = u.url, r = u.data, n = u.headers, o = u.mtopOptions, i = u.method, l !== p.MTOP ? [3, 2] : [4, this.sendMtop(e, r, o)];case 1:
              return [2, t.sent()];case 2:
              return l !== p.GATEWAY ? [3, 8] : this.options.gatewayUrl ? [4, this.sendHttpRequest(e, r, n, i)] : [3, 4];case 3:
              return [2, t.sent()];case 4:
              return t.trys.push([4, 6,, 7]), u.rawData && Object.keys(u.rawData).forEach(function (t) {
                "object" == typeof u.rawData[t] && (u.rawData[t] = JSON.stringify(u.rawData[t]));
              }), [4, this.sendMtop(at.GATEWAY_APIS[e], d(d({}, u.rawData), { protocols: JSON.stringify(n) }), o)];case 5:
              return a = t.sent(), (s = a && a.data || {}).errCode ? [2, { headers: { "mc-code": s.errCode, "mc-msg": s.errMessage }, data: {} }] : [2, { headers: { "mc-code": 200, "mc-msg": "请求成功" }, data: k(s, ["data"]) || {} }];case 6:
              return (c = t.sent()) && c.code ? [2, { headers: { "mc-code": c.code, "mc-msg": c.message } }] : [2, { headers: { "mc-code": 500, "mc-msg": c.message || c } }];case 7:
              return [3, 10];case 8:
              return [4, this.invokeMyApi(e, r)];case 9:
              return [2, t.sent()];case 10:
              return [2];}
        });
      });
    }, t;
  }var st = (ct.prototype.init = function (i, a) {
    return h(this, undefined, undefined, function () {
      var r, n, o;return S(this, function (t) {
        switch (t.label) {case 0:
            return t.trys.push([0, 2,, 3]), e = i.env, r = "string" == typeof (e = e || "online") ? { database: e, file: e, function: e, message: e } : (e.database = e.database || "online", e.file = e.file || "online", e.function = e.function || "online", e.message = e.message || "online", e), n = new w(), this.db = new U({ env: r.database }, n), this.function = new x({ env: r.function }, n), this.file = new C({ env: r.file }, n), this.qimenApi = new X({ env: r.database }, n), this.topApi = new Y({ env: r.database }, n), this.processApi = new K({ env: r.database }, n), this.application = new Z({ env: r.database }, n), [4, n.init(d({}, i), a || new it({ gatewayUrl: i.__gatewayUrl }))];case 1:
            return t.sent(), [2, true];case 2:
            return o = t.sent(), console.error("SDK初始化失败 ", o), [3, 3];case 3:
            return [2, false];}var e;
      });
    });
  }, ct);function ct() {}var ut = new st();t.Cloud = st, t.default = ut, Object.defineProperty(t, "__esModule", { value: true });
});