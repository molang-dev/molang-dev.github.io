import {
  __commonJS,
  __publicField,
  __toESM
} from "./chunk-NBMM2TZK.js";

// node_modules/vscode-oniguruma/release/main.js
var require_main = __commonJS({
  "node_modules/vscode-oniguruma/release/main.js"(exports, module) {
    "use strict";
    !(function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.onig = t() : e.onig = t();
    })(exports, (() => {
      return e = { 770: function(e2, t2, n) {
        "use strict";
        var r = this && this.__importDefault || function(e3) {
          return e3 && e3.__esModule ? e3 : { default: e3 };
        };
        Object.defineProperty(t2, "__esModule", { value: true }), t2.setDefaultDebugCall = t2.createOnigScanner = t2.createOnigString = t2.loadWASM = t2.OnigScanner = t2.OnigString = void 0;
        const i = r(n(418));
        let o = null, a = false;
        class s {
          static _utf8ByteLength(e3) {
            let t3 = 0;
            for (let n2 = 0, r2 = e3.length; n2 < r2; n2++) {
              const i2 = e3.charCodeAt(n2);
              let o2 = i2, a2 = false;
              if (i2 >= 55296 && i2 <= 56319 && n2 + 1 < r2) {
                const t4 = e3.charCodeAt(n2 + 1);
                t4 >= 56320 && t4 <= 57343 && (o2 = 65536 + (i2 - 55296 << 10) | t4 - 56320, a2 = true);
              }
              t3 += o2 <= 127 ? 1 : o2 <= 2047 ? 2 : o2 <= 65535 ? 3 : 4, a2 && n2++;
            }
            return t3;
          }
          constructor(e3) {
            const t3 = e3.length, n2 = s._utf8ByteLength(e3), r2 = n2 !== t3, i2 = r2 ? new Uint32Array(t3 + 1) : null;
            r2 && (i2[t3] = n2);
            const o2 = r2 ? new Uint32Array(n2 + 1) : null;
            r2 && (o2[n2] = t3);
            const a2 = new Uint8Array(n2);
            let f2 = 0;
            for (let n3 = 0; n3 < t3; n3++) {
              const s2 = e3.charCodeAt(n3);
              let u2 = s2, c2 = false;
              if (s2 >= 55296 && s2 <= 56319 && n3 + 1 < t3) {
                const t4 = e3.charCodeAt(n3 + 1);
                t4 >= 56320 && t4 <= 57343 && (u2 = 65536 + (s2 - 55296 << 10) | t4 - 56320, c2 = true);
              }
              r2 && (i2[n3] = f2, c2 && (i2[n3 + 1] = f2), u2 <= 127 ? o2[f2 + 0] = n3 : u2 <= 2047 ? (o2[f2 + 0] = n3, o2[f2 + 1] = n3) : u2 <= 65535 ? (o2[f2 + 0] = n3, o2[f2 + 1] = n3, o2[f2 + 2] = n3) : (o2[f2 + 0] = n3, o2[f2 + 1] = n3, o2[f2 + 2] = n3, o2[f2 + 3] = n3)), u2 <= 127 ? a2[f2++] = u2 : u2 <= 2047 ? (a2[f2++] = 192 | (1984 & u2) >>> 6, a2[f2++] = 128 | (63 & u2) >>> 0) : u2 <= 65535 ? (a2[f2++] = 224 | (61440 & u2) >>> 12, a2[f2++] = 128 | (4032 & u2) >>> 6, a2[f2++] = 128 | (63 & u2) >>> 0) : (a2[f2++] = 240 | (1835008 & u2) >>> 18, a2[f2++] = 128 | (258048 & u2) >>> 12, a2[f2++] = 128 | (4032 & u2) >>> 6, a2[f2++] = 128 | (63 & u2) >>> 0), c2 && n3++;
            }
            this.utf16Length = t3, this.utf8Length = n2, this.utf16Value = e3, this.utf8Value = a2, this.utf16OffsetToUtf8 = i2, this.utf8OffsetToUtf16 = o2;
          }
          createString(e3) {
            const t3 = e3._omalloc(this.utf8Length);
            return e3.HEAPU8.set(this.utf8Value, t3), t3;
          }
        }
        class f {
          constructor(e3) {
            if (this.id = ++f.LAST_ID, !o) throw new Error("Must invoke loadWASM first.");
            this._onigBinding = o, this.content = e3;
            const t3 = new s(e3);
            this.utf16Length = t3.utf16Length, this.utf8Length = t3.utf8Length, this.utf16OffsetToUtf8 = t3.utf16OffsetToUtf8, this.utf8OffsetToUtf16 = t3.utf8OffsetToUtf16, this.utf8Length < 1e4 && !f._sharedPtrInUse ? (f._sharedPtr || (f._sharedPtr = o._omalloc(1e4)), f._sharedPtrInUse = true, o.HEAPU8.set(t3.utf8Value, f._sharedPtr), this.ptr = f._sharedPtr) : this.ptr = t3.createString(o);
          }
          convertUtf8OffsetToUtf16(e3) {
            return this.utf8OffsetToUtf16 ? e3 < 0 ? 0 : e3 > this.utf8Length ? this.utf16Length : this.utf8OffsetToUtf16[e3] : e3;
          }
          convertUtf16OffsetToUtf8(e3) {
            return this.utf16OffsetToUtf8 ? e3 < 0 ? 0 : e3 > this.utf16Length ? this.utf8Length : this.utf16OffsetToUtf8[e3] : e3;
          }
          dispose() {
            this.ptr === f._sharedPtr ? f._sharedPtrInUse = false : this._onigBinding._ofree(this.ptr);
          }
        }
        t2.OnigString = f, f.LAST_ID = 0, f._sharedPtr = 0, f._sharedPtrInUse = false;
        class u {
          constructor(e3, t3) {
            var n2, r2;
            if (!o) throw new Error("Must invoke loadWASM first.");
            const i2 = [], a2 = [];
            for (let t4 = 0, n3 = e3.length; t4 < n3; t4++) {
              const n4 = new s(e3[t4]);
              i2[t4] = n4.createString(o), a2[t4] = n4.utf8Length;
            }
            const f2 = o._omalloc(4 * e3.length);
            o.HEAPU32.set(i2, f2 / 4);
            const u2 = o._omalloc(4 * e3.length);
            o.HEAPU32.set(a2, u2 / 4), this._onigBinding = o, this._options = null !== (n2 = null == t3 ? void 0 : t3.options) && void 0 !== n2 ? n2 : [10];
            const c2 = this.onigOptions(this._options), _2 = this.onigSyntax(null !== (r2 = null == t3 ? void 0 : t3.syntax) && void 0 !== r2 ? r2 : 0), d = o._createOnigScanner(f2, u2, e3.length, c2, _2);
            this._ptr = d;
            for (let t4 = 0, n3 = e3.length; t4 < n3; t4++) o._ofree(i2[t4]);
            o._ofree(u2), o._ofree(f2), 0 === d && (function(e4) {
              throw new Error(e4.UTF8ToString(e4._getLastOnigError()));
            })(o);
          }
          dispose() {
            this._onigBinding._freeOnigScanner(this._ptr);
          }
          findNextMatchSync(e3, t3, n2) {
            let r2 = a, i2 = this._options;
            if (Array.isArray(n2) ? (n2.includes(25) && (r2 = true), i2 = i2.concat(n2)) : "boolean" == typeof n2 && (r2 = n2), "string" == typeof e3) {
              e3 = new f(e3);
              const n3 = this._findNextMatchSync(e3, t3, r2, i2);
              return e3.dispose(), n3;
            }
            return this._findNextMatchSync(e3, t3, r2, i2);
          }
          _findNextMatchSync(e3, t3, n2, r2) {
            const i2 = this._onigBinding, o2 = this.onigOptions(r2);
            let a2;
            if (a2 = n2 ? i2._findNextOnigScannerMatchDbg(this._ptr, e3.id, e3.ptr, e3.utf8Length, e3.convertUtf16OffsetToUtf8(t3), o2) : i2._findNextOnigScannerMatch(this._ptr, e3.id, e3.ptr, e3.utf8Length, e3.convertUtf16OffsetToUtf8(t3), o2), 0 === a2) return null;
            const s2 = i2.HEAPU32;
            let f2 = a2 / 4;
            const u2 = s2[f2++], c2 = s2[f2++];
            let _2 = [];
            for (let t4 = 0; t4 < c2; t4++) {
              const n3 = e3.convertUtf8OffsetToUtf16(s2[f2++]), r3 = e3.convertUtf8OffsetToUtf16(s2[f2++]);
              _2[t4] = { start: n3, end: r3, length: r3 - n3 };
            }
            return { index: u2, captureIndices: _2 };
          }
          onigOptions(e3) {
            return e3.map(((e4) => this.onigOption(e4))).reduce(((e4, t3) => e4 | t3), this._onigBinding.ONIG_OPTION_NONE);
          }
          onigSyntax(e3) {
            switch (e3) {
              case 0:
                return this._onigBinding.ONIG_SYNTAX_DEFAULT;
              case 1:
                return this._onigBinding.ONIG_SYNTAX_ASIS;
              case 2:
                return this._onigBinding.ONIG_SYNTAX_POSIX_BASIC;
              case 3:
                return this._onigBinding.ONIG_SYNTAX_POSIX_EXTENDED;
              case 4:
                return this._onigBinding.ONIG_SYNTAX_EMACS;
              case 5:
                return this._onigBinding.ONIG_SYNTAX_GREP;
              case 6:
                return this._onigBinding.ONIG_SYNTAX_GNU_REGEX;
              case 7:
                return this._onigBinding.ONIG_SYNTAX_JAVA;
              case 8:
                return this._onigBinding.ONIG_SYNTAX_PERL;
              case 9:
                return this._onigBinding.ONIG_SYNTAX_PERL_NG;
              case 10:
                return this._onigBinding.ONIG_SYNTAX_RUBY;
              case 11:
                return this._onigBinding.ONIG_SYNTAX_PYTHON;
              case 12:
                return this._onigBinding.ONIG_SYNTAX_ONIGURUMA;
            }
          }
          onigOption(e3) {
            switch (e3) {
              case 1:
                return this._onigBinding.ONIG_OPTION_NONE;
              case 0:
              case 25:
                return this._onigBinding.ONIG_OPTION_DEFAULT;
              case 2:
                return this._onigBinding.ONIG_OPTION_IGNORECASE;
              case 3:
                return this._onigBinding.ONIG_OPTION_EXTEND;
              case 4:
                return this._onigBinding.ONIG_OPTION_MULTILINE;
              case 5:
                return this._onigBinding.ONIG_OPTION_SINGLELINE;
              case 6:
                return this._onigBinding.ONIG_OPTION_FIND_LONGEST;
              case 7:
                return this._onigBinding.ONIG_OPTION_FIND_NOT_EMPTY;
              case 8:
                return this._onigBinding.ONIG_OPTION_NEGATE_SINGLELINE;
              case 9:
                return this._onigBinding.ONIG_OPTION_DONT_CAPTURE_GROUP;
              case 10:
                return this._onigBinding.ONIG_OPTION_CAPTURE_GROUP;
              case 11:
                return this._onigBinding.ONIG_OPTION_NOTBOL;
              case 12:
                return this._onigBinding.ONIG_OPTION_NOTEOL;
              case 13:
                return this._onigBinding.ONIG_OPTION_CHECK_VALIDITY_OF_STRING;
              case 14:
                return this._onigBinding.ONIG_OPTION_IGNORECASE_IS_ASCII;
              case 15:
                return this._onigBinding.ONIG_OPTION_WORD_IS_ASCII;
              case 16:
                return this._onigBinding.ONIG_OPTION_DIGIT_IS_ASCII;
              case 17:
                return this._onigBinding.ONIG_OPTION_SPACE_IS_ASCII;
              case 18:
                return this._onigBinding.ONIG_OPTION_POSIX_IS_ASCII;
              case 19:
                return this._onigBinding.ONIG_OPTION_TEXT_SEGMENT_EXTENDED_GRAPHEME_CLUSTER;
              case 20:
                return this._onigBinding.ONIG_OPTION_TEXT_SEGMENT_WORD;
              case 21:
                return this._onigBinding.ONIG_OPTION_NOT_BEGIN_STRING;
              case 22:
                return this._onigBinding.ONIG_OPTION_NOT_END_STRING;
              case 23:
                return this._onigBinding.ONIG_OPTION_NOT_BEGIN_POSITION;
              case 24:
                return this._onigBinding.ONIG_OPTION_CALLBACK_EACH_MATCH;
            }
          }
        }
        t2.OnigScanner = u;
        let c = false, _ = null;
        t2.loadWASM = function(e3) {
          if (c) return _;
          let t3, n2, r2, a2;
          if (c = true, (function(e4) {
            return "function" == typeof e4.instantiator;
          })(e3)) t3 = e3.instantiator, n2 = e3.print;
          else {
            let r3;
            !(function(e4) {
              return void 0 !== e4.data;
            })(e3) ? r3 = e3 : (r3 = e3.data, n2 = e3.print), t3 = (function(e4) {
              return "undefined" != typeof Response && e4 instanceof Response;
            })(r3) ? "function" == typeof WebAssembly.instantiateStreaming ? /* @__PURE__ */ (function(e4) {
              return (t4) => WebAssembly.instantiateStreaming(e4, t4);
            })(r3) : /* @__PURE__ */ (function(e4) {
              return async (t4) => {
                const n3 = await e4.arrayBuffer();
                return WebAssembly.instantiate(n3, t4);
              };
            })(r3) : /* @__PURE__ */ (function(e4) {
              return (t4) => WebAssembly.instantiate(e4, t4);
            })(r3);
          }
          return _ = new Promise(((e4, t4) => {
            r2 = e4, a2 = t4;
          })), (function(e4, t4, n3, r3) {
            (0, i.default)({ print: t4, instantiateWasm: (t5, n4) => {
              if ("undefined" == typeof performance) {
                const e5 = () => Date.now();
                t5.env.emscripten_get_now = e5, t5.wasi_snapshot_preview1.emscripten_get_now = e5;
              }
              return e4(t5).then(((e5) => n4(e5.instance)), r3), {};
            } }).then(((e5) => {
              o = e5, n3();
            }));
          })(t3, n2, r2, a2), _;
        }, t2.createOnigString = function(e3) {
          return new f(e3);
        }, t2.createOnigScanner = function(e3) {
          return new u(e3);
        }, t2.setDefaultDebugCall = function(e3) {
          a = e3;
        };
      }, 418: (e2) => {
        var t2 = ("undefined" != typeof document && document.currentScript && document.currentScript.src, function(e3 = {}) {
          var t3, n, r = e3;
          r.ready = new Promise(((e4, r2) => {
            t3 = e4, n = r2;
          }));
          var i, o = Object.assign({}, r);
          "undefined" != typeof read && read, i = (e4) => {
            if ("function" == typeof readbuffer) return new Uint8Array(readbuffer(e4));
            let t4 = read(e4, "binary");
            return "object" == typeof t4 || P(n2), t4;
            var n2;
          }, "undefined" == typeof clearTimeout && (globalThis.clearTimeout = (e4) => {
          }), "undefined" == typeof setTimeout && (globalThis.setTimeout = (e4) => "function" == typeof e4 ? e4() : P()), "undefined" != typeof scriptArgs && scriptArgs, "undefined" != typeof onig_print && ("undefined" == typeof console && (console = {}), console.log = onig_print, console.warn = console.error = "undefined" != typeof printErr ? printErr : onig_print);
          var a, s, f = r.print || console.log.bind(console), u = r.printErr || console.error.bind(console);
          Object.assign(r, o), o = null, r.arguments && r.arguments, r.thisProgram && r.thisProgram, r.quit && r.quit, r.wasmBinary && (a = r.wasmBinary), r.noExitRuntime, "object" != typeof WebAssembly && P("no native wasm support detected");
          var c, _, d, g, l, h, p, O, v = false;
          function m() {
            var e4 = s.buffer;
            r.HEAP8 = c = new Int8Array(e4), r.HEAP16 = d = new Int16Array(e4), r.HEAPU8 = _ = new Uint8Array(e4), r.HEAPU16 = g = new Uint16Array(e4), r.HEAP32 = l = new Int32Array(e4), r.HEAPU32 = h = new Uint32Array(e4), r.HEAPF32 = p = new Float32Array(e4), r.HEAPF64 = O = new Float64Array(e4);
          }
          var y = [], I = [], T = [];
          var N = 0, A = null, S = null;
          function P(e4) {
            r.onAbort && r.onAbort(e4), u(e4 = "Aborted(" + e4 + ")"), v = true, e4 += ". Build with -sASSERTIONS for more info.";
            var t4 = new WebAssembly.RuntimeError(e4);
            throw n(t4), t4;
          }
          var E, w;
          function b(e4) {
            return e4.startsWith("data:application/octet-stream;base64,");
          }
          function C(e4) {
            if (e4 == E && a) return new Uint8Array(a);
            if (i) return i(e4);
            throw "both async and sync fetching of the wasm failed";
          }
          function U(e4, t4, n2) {
            return (function(e5) {
              return Promise.resolve().then((() => C(e5)));
            })(e4).then(((e5) => WebAssembly.instantiate(e5, t4))).then(((e5) => e5)).then(n2, ((e5) => {
              u(`failed to asynchronously prepare wasm: ${e5}`), P(e5);
            }));
          }
          b(E = "onig.wasm") || (w = E, E = r.locateFile ? r.locateFile(w, "") : "" + w);
          var G = (e4) => {
            for (; e4.length > 0; ) e4.shift()(r);
          }, B = void 0, R = (e4) => {
            for (var t4 = "", n2 = e4; _[n2]; ) t4 += B[_[n2++]];
            return t4;
          }, W = {}, L = {}, D = {}, x = void 0, M = (e4) => {
            throw new x(e4);
          }, F = void 0, X = (e4, t4, n2) => {
            function r2(t5) {
              var r3 = n2(t5);
              r3.length !== e4.length && ((e5) => {
                throw new F(e5);
              })("Mismatched type converter count");
              for (var i3 = 0; i3 < e4.length; ++i3) k(e4[i3], r3[i3]);
            }
            e4.forEach((function(e5) {
              D[e5] = t4;
            }));
            var i2 = new Array(t4.length), o2 = [], a2 = 0;
            t4.forEach(((e5, t5) => {
              L.hasOwnProperty(e5) ? i2[t5] = L[e5] : (o2.push(e5), W.hasOwnProperty(e5) || (W[e5] = []), W[e5].push((() => {
                i2[t5] = L[e5], ++a2 === o2.length && r2(i2);
              })));
            })), 0 === o2.length && r2(i2);
          };
          function k(e4, t4, n2 = {}) {
            if (!("argPackAdvance" in t4)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
            return (function(e5, t5, n3 = {}) {
              var r2 = t5.name;
              if (e5 || M(`type "${r2}" must have a positive integer typeid pointer`), L.hasOwnProperty(e5)) {
                if (n3.ignoreDuplicateRegistrations) return;
                M(`Cannot register type '${r2}' twice`);
              }
              if (L[e5] = t5, delete D[e5], W.hasOwnProperty(e5)) {
                var i2 = W[e5];
                delete W[e5], i2.forEach(((e6) => e6()));
              }
            })(e4, t4, n2);
          }
          function H() {
            this.allocated = [void 0], this.freelist = [];
          }
          var Y = new H(), j = () => {
            for (var e4 = 0, t4 = Y.reserved; t4 < Y.allocated.length; ++t4) void 0 !== Y.allocated[t4] && ++e4;
            return e4;
          }, V = (e4) => (e4 || M("Cannot use deleted val. handle = " + e4), Y.get(e4).value), $ = (e4) => {
            switch (e4) {
              case void 0:
                return 1;
              case null:
                return 2;
              case true:
                return 3;
              case false:
                return 4;
              default:
                return Y.allocate({ refcount: 1, value: e4 });
            }
          };
          function z(e4) {
            return this.fromWireType(l[e4 >> 2]);
          }
          var q = (e4, t4) => {
            switch (t4) {
              case 4:
                return function(e5) {
                  return this.fromWireType(p[e5 >> 2]);
                };
              case 8:
                return function(e5) {
                  return this.fromWireType(O[e5 >> 3]);
                };
              default:
                throw new TypeError(`invalid float width (${t4}): ${e4}`);
            }
          }, K = (e4, t4, n2) => {
            switch (t4) {
              case 1:
                return n2 ? (e5) => c[e5 >> 0] : (e5) => _[e5 >> 0];
              case 2:
                return n2 ? (e5) => d[e5 >> 1] : (e5) => g[e5 >> 1];
              case 4:
                return n2 ? (e5) => l[e5 >> 2] : (e5) => h[e5 >> 2];
              default:
                throw new TypeError(`invalid integer width (${t4}): ${e4}`);
            }
          };
          function J(e4) {
            return this.fromWireType(h[e4 >> 2]);
          }
          var Q, Z = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0, ee = (e4, t4, n2) => {
            for (var r2 = t4 + n2, i2 = t4; e4[i2] && !(i2 >= r2); ) ++i2;
            if (i2 - t4 > 16 && e4.buffer && Z) return Z.decode(e4.subarray(t4, i2));
            for (var o2 = ""; t4 < i2; ) {
              var a2 = e4[t4++];
              if (128 & a2) {
                var s2 = 63 & e4[t4++];
                if (192 != (224 & a2)) {
                  var f2 = 63 & e4[t4++];
                  if ((a2 = 224 == (240 & a2) ? (15 & a2) << 12 | s2 << 6 | f2 : (7 & a2) << 18 | s2 << 12 | f2 << 6 | 63 & e4[t4++]) < 65536) o2 += String.fromCharCode(a2);
                  else {
                    var u2 = a2 - 65536;
                    o2 += String.fromCharCode(55296 | u2 >> 10, 56320 | 1023 & u2);
                  }
                } else o2 += String.fromCharCode((31 & a2) << 6 | s2);
              } else o2 += String.fromCharCode(a2);
            }
            return o2;
          }, te = (e4, t4) => e4 ? ee(_, e4, t4) : "", ne = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0, re = (e4, t4) => {
            for (var n2 = e4, r2 = n2 >> 1, i2 = r2 + t4 / 2; !(r2 >= i2) && g[r2]; ) ++r2;
            if ((n2 = r2 << 1) - e4 > 32 && ne) return ne.decode(_.subarray(e4, n2));
            for (var o2 = "", a2 = 0; !(a2 >= t4 / 2); ++a2) {
              var s2 = d[e4 + 2 * a2 >> 1];
              if (0 == s2) break;
              o2 += String.fromCharCode(s2);
            }
            return o2;
          }, ie = (e4, t4, n2) => {
            if (void 0 === n2 && (n2 = 2147483647), n2 < 2) return 0;
            for (var r2 = t4, i2 = (n2 -= 2) < 2 * e4.length ? n2 / 2 : e4.length, o2 = 0; o2 < i2; ++o2) {
              var a2 = e4.charCodeAt(o2);
              d[t4 >> 1] = a2, t4 += 2;
            }
            return d[t4 >> 1] = 0, t4 - r2;
          }, oe = (e4) => 2 * e4.length, ae = (e4, t4) => {
            for (var n2 = 0, r2 = ""; !(n2 >= t4 / 4); ) {
              var i2 = l[e4 + 4 * n2 >> 2];
              if (0 == i2) break;
              if (++n2, i2 >= 65536) {
                var o2 = i2 - 65536;
                r2 += String.fromCharCode(55296 | o2 >> 10, 56320 | 1023 & o2);
              } else r2 += String.fromCharCode(i2);
            }
            return r2;
          }, se = (e4, t4, n2) => {
            if (void 0 === n2 && (n2 = 2147483647), n2 < 4) return 0;
            for (var r2 = t4, i2 = r2 + n2 - 4, o2 = 0; o2 < e4.length; ++o2) {
              var a2 = e4.charCodeAt(o2);
              if (a2 >= 55296 && a2 <= 57343 && (a2 = 65536 + ((1023 & a2) << 10) | 1023 & e4.charCodeAt(++o2)), l[t4 >> 2] = a2, (t4 += 4) + 4 > i2) break;
            }
            return l[t4 >> 2] = 0, t4 - r2;
          }, fe = (e4) => {
            for (var t4 = 0, n2 = 0; n2 < e4.length; ++n2) {
              var r2 = e4.charCodeAt(n2);
              r2 >= 55296 && r2 <= 57343 && ++n2, t4 += 4;
            }
            return t4;
          };
          Q = () => performance.now();
          var ue = (e4) => {
            var t4 = (e4 - s.buffer.byteLength + 65535) / 65536;
            try {
              return s.grow(t4), m(), 1;
            } catch (e5) {
            }
          }, ce = [null, [], []];
          (() => {
            for (var e4 = new Array(256), t4 = 0; t4 < 256; ++t4) e4[t4] = String.fromCharCode(t4);
            B = e4;
          })(), x = r.BindingError = class extends Error {
            constructor(e4) {
              super(e4), this.name = "BindingError";
            }
          }, F = r.InternalError = class extends Error {
            constructor(e4) {
              super(e4), this.name = "InternalError";
            }
          }, Object.assign(H.prototype, { get(e4) {
            return this.allocated[e4];
          }, has(e4) {
            return void 0 !== this.allocated[e4];
          }, allocate(e4) {
            var t4 = this.freelist.pop() || this.allocated.length;
            return this.allocated[t4] = e4, t4;
          }, free(e4) {
            this.allocated[e4] = void 0, this.freelist.push(e4);
          } }), Y.allocated.push({ value: void 0 }, { value: null }, { value: true }, { value: false }), Y.reserved = Y.allocated.length, r.count_emval_handles = j;
          var _e, de = { _embind_register_bigint: (e4, t4, n2, r2, i2) => {
          }, _embind_register_bool: (e4, t4, n2, r2) => {
            k(e4, { name: t4 = R(t4), fromWireType: function(e5) {
              return !!e5;
            }, toWireType: function(e5, t5) {
              return t5 ? n2 : r2;
            }, argPackAdvance: 8, readValueFromPointer: function(e5) {
              return this.fromWireType(_[e5]);
            }, destructorFunction: null });
          }, _embind_register_constant: (e4, t4, n2) => {
            e4 = R(e4), X([], [t4], (function(t5) {
              return t5 = t5[0], r[e4] = t5.fromWireType(n2), [];
            }));
          }, _embind_register_emval: (e4, t4) => {
            k(e4, { name: t4 = R(t4), fromWireType: (e5) => {
              var t5 = V(e5);
              return ((e6) => {
                e6 >= Y.reserved && 0 == --Y.get(e6).refcount && Y.free(e6);
              })(e5), t5;
            }, toWireType: (e5, t5) => $(t5), argPackAdvance: 8, readValueFromPointer: z, destructorFunction: null });
          }, _embind_register_float: (e4, t4, n2) => {
            k(e4, { name: t4 = R(t4), fromWireType: (e5) => e5, toWireType: (e5, t5) => t5, argPackAdvance: 8, readValueFromPointer: q(t4, n2), destructorFunction: null });
          }, _embind_register_integer: (e4, t4, n2, r2, i2) => {
            t4 = R(t4), -1 === i2 && (i2 = 4294967295);
            var o2 = (e5) => e5;
            if (0 === r2) {
              var a2 = 32 - 8 * n2;
              o2 = (e5) => e5 << a2 >>> a2;
            }
            var s2 = t4.includes("unsigned");
            k(e4, { name: t4, fromWireType: o2, toWireType: s2 ? function(e5, t5) {
              return this.name, t5 >>> 0;
            } : function(e5, t5) {
              return this.name, t5;
            }, argPackAdvance: 8, readValueFromPointer: K(t4, n2, 0 !== r2), destructorFunction: null });
          }, _embind_register_memory_view: (e4, t4, n2) => {
            var r2 = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][t4];
            function i2(e5) {
              var t5 = h[e5 >> 2], n3 = h[e5 + 4 >> 2];
              return new r2(c.buffer, n3, t5);
            }
            k(e4, { name: n2 = R(n2), fromWireType: i2, argPackAdvance: 8, readValueFromPointer: i2 }, { ignoreDuplicateRegistrations: true });
          }, _embind_register_std_string: (e4, t4) => {
            var n2 = "std::string" === (t4 = R(t4));
            k(e4, { name: t4, fromWireType: (e5) => {
              var t5, r2 = h[e5 >> 2], i2 = e5 + 4;
              if (n2) for (var o2 = i2, a2 = 0; a2 <= r2; ++a2) {
                var s2 = i2 + a2;
                if (a2 == r2 || 0 == _[s2]) {
                  var f2 = te(o2, s2 - o2);
                  void 0 === t5 ? t5 = f2 : (t5 += String.fromCharCode(0), t5 += f2), o2 = s2 + 1;
                }
              }
              else {
                var u2 = new Array(r2);
                for (a2 = 0; a2 < r2; ++a2) u2[a2] = String.fromCharCode(_[i2 + a2]);
                t5 = u2.join("");
              }
              return he(e5), t5;
            }, toWireType: (e5, t5) => {
              var r2;
              t5 instanceof ArrayBuffer && (t5 = new Uint8Array(t5));
              var i2 = "string" == typeof t5;
              i2 || t5 instanceof Uint8Array || t5 instanceof Uint8ClampedArray || t5 instanceof Int8Array || M("Cannot pass non-string to std::string"), r2 = n2 && i2 ? ((e6) => {
                for (var t6 = 0, n3 = 0; n3 < e6.length; ++n3) {
                  var r3 = e6.charCodeAt(n3);
                  r3 <= 127 ? t6++ : r3 <= 2047 ? t6 += 2 : r3 >= 55296 && r3 <= 57343 ? (t6 += 4, ++n3) : t6 += 3;
                }
                return t6;
              })(t5) : t5.length;
              var o2 = le(4 + r2 + 1), a2 = o2 + 4;
              if (h[o2 >> 2] = r2, n2 && i2) ((e6, t6, n3, r3) => {
                if (!(r3 > 0)) return 0;
                for (var i3 = n3, o3 = n3 + r3 - 1, a3 = 0; a3 < e6.length; ++a3) {
                  var s3 = e6.charCodeAt(a3);
                  if (s3 >= 55296 && s3 <= 57343 && (s3 = 65536 + ((1023 & s3) << 10) | 1023 & e6.charCodeAt(++a3)), s3 <= 127) {
                    if (n3 >= o3) break;
                    t6[n3++] = s3;
                  } else if (s3 <= 2047) {
                    if (n3 + 1 >= o3) break;
                    t6[n3++] = 192 | s3 >> 6, t6[n3++] = 128 | 63 & s3;
                  } else if (s3 <= 65535) {
                    if (n3 + 2 >= o3) break;
                    t6[n3++] = 224 | s3 >> 12, t6[n3++] = 128 | s3 >> 6 & 63, t6[n3++] = 128 | 63 & s3;
                  } else {
                    if (n3 + 3 >= o3) break;
                    t6[n3++] = 240 | s3 >> 18, t6[n3++] = 128 | s3 >> 12 & 63, t6[n3++] = 128 | s3 >> 6 & 63, t6[n3++] = 128 | 63 & s3;
                  }
                }
                t6[n3] = 0;
              })(t5, _, a2, r2 + 1);
              else if (i2) for (var s2 = 0; s2 < r2; ++s2) {
                var f2 = t5.charCodeAt(s2);
                f2 > 255 && (he(a2), M("String has UTF-16 code units that do not fit in 8 bits")), _[a2 + s2] = f2;
              }
              else for (s2 = 0; s2 < r2; ++s2) _[a2 + s2] = t5[s2];
              return null !== e5 && e5.push(he, o2), o2;
            }, argPackAdvance: 8, readValueFromPointer: J, destructorFunction: (e5) => he(e5) });
          }, _embind_register_std_wstring: (e4, t4, n2) => {
            var r2, i2, o2, a2, s2;
            n2 = R(n2), 2 === t4 ? (r2 = re, i2 = ie, a2 = oe, o2 = () => g, s2 = 1) : 4 === t4 && (r2 = ae, i2 = se, a2 = fe, o2 = () => h, s2 = 2), k(e4, { name: n2, fromWireType: (e5) => {
              for (var n3, i3 = h[e5 >> 2], a3 = o2(), f2 = e5 + 4, u2 = 0; u2 <= i3; ++u2) {
                var c2 = e5 + 4 + u2 * t4;
                if (u2 == i3 || 0 == a3[c2 >> s2]) {
                  var _2 = r2(f2, c2 - f2);
                  void 0 === n3 ? n3 = _2 : (n3 += String.fromCharCode(0), n3 += _2), f2 = c2 + t4;
                }
              }
              return he(e5), n3;
            }, toWireType: (e5, r3) => {
              "string" != typeof r3 && M(`Cannot pass non-string to C++ string type ${n2}`);
              var o3 = a2(r3), f2 = le(4 + o3 + t4);
              return h[f2 >> 2] = o3 >> s2, i2(r3, f2 + 4, o3 + t4), null !== e5 && e5.push(he, f2), f2;
            }, argPackAdvance: 8, readValueFromPointer: z, destructorFunction: (e5) => he(e5) });
          }, _embind_register_void: (e4, t4) => {
            k(e4, { isVoid: true, name: t4 = R(t4), argPackAdvance: 0, fromWireType: () => {
            }, toWireType: (e5, t5) => {
            } });
          }, emscripten_get_now: Q, emscripten_memcpy_big: (e4, t4, n2) => _.copyWithin(e4, t4, t4 + n2), emscripten_resize_heap: (e4) => {
            var t4 = _.length, n2 = 2147483648;
            if ((e4 >>>= 0) > n2) return false;
            for (var r2, i2 = 1; i2 <= 4; i2 *= 2) {
              var o2 = t4 * (1 + 0.2 / i2);
              o2 = Math.min(o2, e4 + 100663296);
              var a2 = Math.min(n2, (r2 = Math.max(e4, o2)) + (65536 - r2 % 65536) % 65536);
              if (ue(a2)) return true;
            }
            return false;
          }, fd_write: (e4, t4, n2, r2) => {
            for (var i2 = 0, o2 = 0; o2 < n2; o2++) {
              var a2 = h[t4 >> 2], s2 = h[t4 + 4 >> 2];
              t4 += 8;
              for (var c2 = 0; c2 < s2; c2++) d2 = e4, g2 = _[a2 + c2], l2 = void 0, l2 = ce[d2], 0 === g2 || 10 === g2 ? ((1 === d2 ? f : u)(ee(l2, 0)), l2.length = 0) : l2.push(g2);
              i2 += s2;
            }
            var d2, g2, l2;
            return h[r2 >> 2] = i2, 0;
          } }, ge = (function() {
            var e4, t4, i2, o2, f2 = { env: de, wasi_snapshot_preview1: de };
            function c2(e5, t5) {
              var n2, i3 = e5.exports;
              return s = (ge = i3).memory, m(), ge.__indirect_function_table, n2 = ge.__wasm_call_ctors, I.unshift(n2), (function(e6) {
                if (N--, r.monitorRunDependencies && r.monitorRunDependencies(N), 0 == N && (null !== A && (clearInterval(A), A = null), S)) {
                  var t6 = S;
                  S = null, t6();
                }
              })(), i3;
            }
            if (N++, r.monitorRunDependencies && r.monitorRunDependencies(N), r.instantiateWasm) try {
              return r.instantiateWasm(f2, c2);
            } catch (e5) {
              u(`Module.instantiateWasm callback failed with error: ${e5}`), n(e5);
            }
            return (e4 = a, t4 = E, i2 = f2, o2 = function(e5) {
              c2(e5.instance);
            }, e4 || "function" != typeof WebAssembly.instantiateStreaming || b(t4) || "function" != typeof fetch ? U(t4, i2, o2) : fetch(t4, { credentials: "same-origin" }).then(((e5) => WebAssembly.instantiateStreaming(e5, i2).then(o2, (function(e6) {
              return u(`wasm streaming compile failed: ${e6}`), u("falling back to ArrayBuffer instantiation"), U(t4, i2, o2);
            }))))).catch(n), {};
          })(), le = (e4) => (le = ge.malloc)(e4), he = (e4) => (he = ge.free)(e4);
          function pe() {
            function e4() {
              _e || (_e = true, r.calledRun = true, v || (G(I), t3(r), r.onRuntimeInitialized && r.onRuntimeInitialized(), (function() {
                if (r.postRun) for ("function" == typeof r.postRun && (r.postRun = [r.postRun]); r.postRun.length; ) e5 = r.postRun.shift(), T.unshift(e5);
                var e5;
                G(T);
              })()));
            }
            N > 0 || ((function() {
              if (r.preRun) for ("function" == typeof r.preRun && (r.preRun = [r.preRun]); r.preRun.length; ) e5 = r.preRun.shift(), y.unshift(e5);
              var e5;
              G(y);
            })(), N > 0 || (r.setStatus ? (r.setStatus("Running..."), setTimeout((function() {
              setTimeout((function() {
                r.setStatus("");
              }), 1), e4();
            }), 1)) : e4()));
          }
          if (r._omalloc = (e4) => (r._omalloc = ge.omalloc)(e4), r._ofree = (e4) => (r._ofree = ge.ofree)(e4), r._getLastOnigError = () => (r._getLastOnigError = ge.getLastOnigError)(), r._createOnigScanner = (e4, t4, n2, i2, o2) => (r._createOnigScanner = ge.createOnigScanner)(e4, t4, n2, i2, o2), r._freeOnigScanner = (e4) => (r._freeOnigScanner = ge.freeOnigScanner)(e4), r._findNextOnigScannerMatch = (e4, t4, n2, i2, o2, a2) => (r._findNextOnigScannerMatch = ge.findNextOnigScannerMatch)(e4, t4, n2, i2, o2, a2), r._findNextOnigScannerMatchDbg = (e4, t4, n2, i2, o2, a2) => (r._findNextOnigScannerMatchDbg = ge.findNextOnigScannerMatchDbg)(e4, t4, n2, i2, o2, a2), r.__embind_initialize_bindings = () => (r.__embind_initialize_bindings = ge._embind_initialize_bindings)(), r.dynCall_jiji = (e4, t4, n2, i2, o2) => (r.dynCall_jiji = ge.dynCall_jiji)(e4, t4, n2, i2, o2), r.UTF8ToString = te, S = function e4() {
            _e || pe(), _e || (S = e4);
          }, r.preInit) for ("function" == typeof r.preInit && (r.preInit = [r.preInit]); r.preInit.length > 0; ) r.preInit.pop()();
          return pe(), e3.ready;
        });
        e2.exports = t2;
      } }, t = {}, (function n(r) {
        var i = t[r];
        if (void 0 !== i) return i.exports;
        var o = t[r] = { exports: {} };
        return e[r].call(o.exports, o, o.exports, n), o.exports;
      })(770);
      var e, t;
    }));
  }
});

// node_modules/vscode-textmate/release/main.js
var require_main2 = __commonJS({
  "node_modules/vscode-textmate/release/main.js"(exports, module) {
    "use strict";
    !(function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.vscodetextmate = t() : e.vscodetextmate = t();
    })(exports, (() => (() => {
      "use strict";
      var e = { 185: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.UseOnigurumaFindOptions = t2.DebugFlags = void 0, t2.DebugFlags = { InDebugMode: "undefined" != typeof process && !!process.env.VSCODE_TEXTMATE_DEBUG }, t2.UseOnigurumaFindOptions = false;
      }, 151: (e2, t2, n) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.applyStateStackDiff = t2.diffStateStacksRefEq = void 0;
        const s = n(752);
        t2.diffStateStacksRefEq = function(e3, t3) {
          let n2 = 0;
          const s2 = [];
          let r = e3, i = t3;
          for (; r !== i; ) r && (!i || r.depth >= i.depth) ? (n2++, r = r.parent) : (s2.push(i.toStateStackFrame()), i = i.parent);
          return { pops: n2, newFrames: s2.reverse() };
        }, t2.applyStateStackDiff = function(e3, t3) {
          let n2 = e3;
          for (let e4 = 0; e4 < t3.pops; e4++) n2 = n2.parent;
          for (const e4 of t3.newFrames) n2 = s.StateStackImpl.pushFrame(n2, e4);
          return n2;
        };
      }, 490: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.toOptionalTokenType = t2.EncodedTokenAttributes = t2.FontAttribute = void 0;
        class n {
          constructor(e3, t3, n2) {
            this.fontFamily = e3, this.fontSize = t3, this.lineHeight = n2;
          }
          static _getKey(e3, t3, n2) {
            return `${e3}|${t3}|${n2}`;
          }
          static _get(e3, t3, s2) {
            const r = this._getKey(e3, t3, s2);
            let i = this._map.get(r);
            return i || (i = new n(e3, t3, s2), this._map.set(r, i)), i;
          }
          static from(e3, t3, s2) {
            return new n(e3, t3, s2);
          }
          with(e3) {
            return e3 ? n._get(e3.fontFamily || this.fontFamily, e3.fontSize || this.fontSize, e3.lineHeight || this.lineHeight) : this;
          }
        }
        var s;
        t2.FontAttribute = n, n._map = /* @__PURE__ */ new Map(), (s = t2.EncodedTokenAttributes || (t2.EncodedTokenAttributes = {})).toBinaryStr = function(e3) {
          return e3.toString(2).padStart(32, "0");
        }, s.print = function(e3) {
          const t3 = s.getLanguageId(e3), n2 = s.getTokenType(e3), r = s.getFontStyle(e3), i = s.getForeground(e3), o = s.getBackground(e3);
          console.log({ languageId: t3, tokenType: n2, fontStyle: r, foreground: i, background: o });
        }, s.getLanguageId = function(e3) {
          return (255 & e3) >>> 0;
        }, s.getTokenType = function(e3) {
          return (768 & e3) >>> 8;
        }, s.containsBalancedBrackets = function(e3) {
          return !!(1024 & e3);
        }, s.getFontStyle = function(e3) {
          return (30720 & e3) >>> 11;
        }, s.getForeground = function(e3) {
          return (16744448 & e3) >>> 15;
        }, s.getBackground = function(e3) {
          return (4278190080 & e3) >>> 24;
        }, s.set = function(e3, t3, n2, r, i, o, a) {
          let c = s.getLanguageId(e3), l = s.getTokenType(e3), u = s.containsBalancedBrackets(e3) ? 1 : 0, h = s.getFontStyle(e3), p = s.getForeground(e3), d = s.getBackground(e3);
          return 0 !== t3 && (c = t3), 8 !== n2 && (l = n2), null !== r && (u = r ? 1 : 0), -1 !== i && (h = i), 0 !== o && (p = o), 0 !== a && (d = a), (c | l << 8 | u << 10 | h << 11 | p << 15 | d << 24) >>> 0;
        }, t2.toOptionalTokenType = function(e3) {
          return e3;
        };
      }, 214: (e2, t2, n) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.BasicScopeAttributesProvider = t2.BasicScopeAttributes = void 0;
        const s = n(807);
        class r {
          constructor(e3, t3) {
            this.languageId = e3, this.tokenType = t3;
          }
        }
        t2.BasicScopeAttributes = r;
        class i {
          constructor(e3, t3) {
            this._getBasicScopeAttributes = new s.CachedFn(((e4) => {
              const t4 = this._scopeToLanguage(e4), n2 = this._toStandardTokenType(e4);
              return new r(t4, n2);
            })), this._defaultAttributes = new r(e3, 8), this._embeddedLanguagesMatcher = new o(Object.entries(t3 || {}));
          }
          getDefaultAttributes() {
            return this._defaultAttributes;
          }
          getBasicScopeAttributes(e3) {
            return null === e3 ? i._NULL_SCOPE_METADATA : this._getBasicScopeAttributes.get(e3);
          }
          _scopeToLanguage(e3) {
            return this._embeddedLanguagesMatcher.match(e3) || 0;
          }
          _toStandardTokenType(e3) {
            const t3 = e3.match(i.STANDARD_TOKEN_TYPE_REGEXP);
            if (!t3) return 8;
            switch (t3[1]) {
              case "comment":
                return 1;
              case "string":
                return 2;
              case "regex":
                return 3;
              case "meta.embedded":
                return 0;
            }
            throw new Error("Unexpected match for standard token type!");
          }
        }
        t2.BasicScopeAttributesProvider = i, i._NULL_SCOPE_METADATA = new r(0, 0), i.STANDARD_TOKEN_TYPE_REGEXP = /\b(comment|string|regex|meta\.embedded)\b/;
        class o {
          constructor(e3) {
            if (0 === e3.length) this.values = null, this.scopesRegExp = null;
            else {
              this.values = new Map(e3);
              const t3 = e3.map((([e4, t4]) => s.escapeRegExpCharacters(e4)));
              t3.sort(), t3.reverse(), this.scopesRegExp = new RegExp(`^((${t3.join(")|(")}))($|\\.)`, "");
            }
          }
          match(e3) {
            if (!this.scopesRegExp) return;
            const t3 = e3.match(this.scopesRegExp);
            return t3 ? this.values.get(t3[1]) : void 0;
          }
        }
      }, 929: (e2, t2, n) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.LineFonts = t2.FontInfo = t2.LineTokens = t2.BalancedBracketSelectors = t2.StateStackImpl = t2.AttributedScopeStack = t2.Grammar = t2.createGrammar = void 0;
        const s = n(185), r = n(490), i = n(916), o = n(810), a = n(666), c = n(63), l = n(807), u = n(214), h = n(398);
        function p(e3, t3, n2, s2, r2) {
          const o2 = i.createMatchers(t3, d), c2 = a.RuleFactory.getCompiledRuleId(n2, s2, r2.repository);
          for (const n3 of o2) e3.push({ debugSelector: t3, matcher: n3.matcher, ruleId: c2, grammar: r2, priority: n3.priority });
        }
        function d(e3, t3) {
          if (t3.length < e3.length) return false;
          let n2 = 0;
          return e3.every(((e4) => {
            for (let s2 = n2; s2 < t3.length; s2++) if (f(t3[s2], e4)) return n2 = s2 + 1, true;
            return false;
          }));
        }
        function f(e3, t3) {
          if (!e3) return false;
          if (e3 === t3) return true;
          const n2 = t3.length;
          return e3.length > n2 && e3.substr(0, n2) === t3 && "." === e3[n2];
        }
        t2.createGrammar = function(e3, t3, n2, s2, r2, i2, o2, a2) {
          return new m(e3, t3, n2, s2, r2, i2, o2, a2);
        };
        class m {
          constructor(e3, t3, n2, s2, r2, o2, a2, c2) {
            if (this._rootScopeName = e3, this.balancedBracketSelectors = o2, this._onigLib = c2, this._basicScopeAttributesProvider = new u.BasicScopeAttributesProvider(n2, s2), this._rootId = -1, this._lastRuleId = 0, this._ruleId2desc = [null], this._includedGrammars = {}, this._grammarRepository = a2, this._grammar = g(t3, null), this._injections = null, this._tokenTypeMatchers = [], r2) for (const e4 of Object.keys(r2)) {
              const t4 = i.createMatchers(e4, d);
              for (const n3 of t4) this._tokenTypeMatchers.push({ matcher: n3.matcher, type: r2[e4] });
            }
          }
          get themeProvider() {
            return this._grammarRepository;
          }
          dispose() {
            for (const e3 of this._ruleId2desc) e3 && e3.dispose();
          }
          createOnigScanner(e3) {
            return this._onigLib.createOnigScanner(e3);
          }
          createOnigString(e3) {
            return this._onigLib.createOnigString(e3);
          }
          getMetadataForScope(e3) {
            return this._basicScopeAttributesProvider.getBasicScopeAttributes(e3);
          }
          _collectInjections() {
            const e3 = [], t3 = this._rootScopeName, n2 = ((e4) => e4 === this._rootScopeName ? this._grammar : this.getExternalGrammar(e4))(t3);
            if (n2) {
              const s2 = n2.injections;
              if (s2) for (let t4 in s2) p(e3, t4, s2[t4], this, n2);
              const r2 = this._grammarRepository.injections(t3);
              r2 && r2.forEach(((t4) => {
                const n3 = this.getExternalGrammar(t4);
                if (n3) {
                  const t5 = n3.injectionSelector;
                  t5 && p(e3, t5, n3, this, n3);
                }
              }));
            }
            return e3.sort(((e4, t4) => e4.priority - t4.priority)), e3;
          }
          getInjections() {
            if (null === this._injections && (this._injections = this._collectInjections(), s.DebugFlags.InDebugMode && this._injections.length > 0)) {
              console.log(`Grammar ${this._rootScopeName} contains the following injections:`);
              for (const e3 of this._injections) console.log(`  - ${e3.debugSelector}`);
            }
            return this._injections;
          }
          registerRule(e3) {
            const t3 = ++this._lastRuleId, n2 = e3(a.ruleIdFromNumber(t3));
            return this._ruleId2desc[t3] = n2, n2;
          }
          getRule(e3) {
            return this._ruleId2desc[a.ruleIdToNumber(e3)];
          }
          getExternalGrammar(e3, t3) {
            if (this._includedGrammars[e3]) return this._includedGrammars[e3];
            if (this._grammarRepository) {
              const n2 = this._grammarRepository.lookup(e3);
              if (n2) return this._includedGrammars[e3] = g(n2, t3 && t3.$base), this._includedGrammars[e3];
            }
          }
          tokenizeLine(e3, t3, n2 = 0) {
            const s2 = this._tokenize(e3, t3, false, n2);
            return { tokens: s2.lineTokens.getResult(s2.ruleStack, s2.lineLength), ruleStack: s2.ruleStack, stoppedEarly: s2.stoppedEarly, fonts: s2.lineFonts.getResult() };
          }
          tokenizeLine2(e3, t3, n2 = 0) {
            const s2 = this._tokenize(e3, t3, true, n2);
            return { tokens: s2.lineTokens.getBinaryResult(s2.ruleStack, s2.lineLength), ruleStack: s2.ruleStack, stoppedEarly: s2.stoppedEarly, fonts: s2.lineFonts.getResult() };
          }
          _tokenize(e3, t3, n2, s2) {
            let i2;
            if (-1 === this._rootId && (this._rootId = a.RuleFactory.getCompiledRuleId(this._grammar.repository.$self, this, this._grammar.repository), this.getInjections()), t3 && t3 !== b.NULL) i2 = false, t3.reset();
            else {
              i2 = true;
              const e4 = this._basicScopeAttributesProvider.getDefaultAttributes(), n3 = this.themeProvider.getDefaults(), s3 = r.EncodedTokenAttributes.set(0, e4.languageId, e4.tokenType, null, n3.fontStyle, n3.foregroundId, n3.backgroundId), o2 = r.FontAttribute.from(n3.fontFamily, n3.fontSize, n3.lineHeight), a2 = this.getRule(this._rootId).getName(null, null);
              let c3;
              c3 = a2 ? _.createRootAndLookUpScopeName(a2, s3, o2, this) : _.createRoot("unknown", s3, o2), t3 = new b(null, this._rootId, -1, -1, false, null, c3, c3);
            }
            e3 += "\n";
            const c2 = this.createOnigString(e3), l2 = c2.content.length, u2 = new y(n2, e3, this._tokenTypeMatchers, this.balancedBracketSelectors), p2 = new k(), d2 = h._tokenizeString(this, c2, i2, 0, t3, u2, p2, true, s2);
            return o.disposeOnigString(c2), { lineLength: l2, lineTokens: u2, lineFonts: p2, ruleStack: d2.stack, stoppedEarly: d2.stoppedEarly };
          }
        }
        function g(e3, t3) {
          return (e3 = l.clone(e3)).repository = e3.repository || {}, e3.repository.$self = { $vscodeTextmateLocation: e3.$vscodeTextmateLocation, patterns: e3.patterns, name: e3.scopeName }, e3.repository.$base = t3 || e3.repository.$self, e3;
        }
        t2.Grammar = m;
        class _ {
          constructor(e3, t3, n2, s2, r2) {
            this.parent = e3, this.scopePath = t3, this.tokenAttributes = n2, this.fontAttributes = s2, this.styleAttributes = r2;
          }
          static fromExtension(e3, t3) {
            let n2 = e3, s2 = e3?.scopePath ?? null;
            for (const e4 of t3) s2 = c.ScopeStack.push(s2, e4.scopeNames), n2 = new _(n2, s2, e4.encodedTokenAttributes, null, null);
            return n2;
          }
          static createRoot(e3, t3, n2) {
            return new _(null, new c.ScopeStack(null, e3), t3, n2, null);
          }
          static createRootAndLookUpScopeName(e3, t3, n2, s2) {
            const r2 = s2.getMetadataForScope(e3), i2 = new c.ScopeStack(null, e3), o2 = s2.themeProvider.themeMatch(i2), a2 = _.mergeAttributes(t3, r2, o2), l2 = n2.with(o2);
            return new _(null, i2, a2, l2, o2);
          }
          get scopeName() {
            return this.scopePath.scopeName;
          }
          toString() {
            return this.getScopeNames().join(" ");
          }
          equals(e3) {
            return _.equals(this, e3);
          }
          static equals(e3, t3) {
            for (; ; ) {
              if (e3 === t3) return true;
              if (!e3 && !t3) return true;
              if (!e3 || !t3) return false;
              if (e3.scopeName !== t3.scopeName || e3.tokenAttributes !== t3.tokenAttributes) return false;
              e3 = e3.parent, t3 = t3.parent;
            }
          }
          static mergeAttributes(e3, t3, n2) {
            let s2 = -1, i2 = 0, o2 = 0;
            return null !== n2 && (s2 = n2.fontStyle, i2 = n2.foregroundId, o2 = n2.backgroundId), r.EncodedTokenAttributes.set(e3, t3.languageId, t3.tokenType, null, s2, i2, o2);
          }
          pushAttributed(e3, t3) {
            if (null === e3) return this;
            if (-1 === e3.indexOf(" ")) return _._pushAttributed(this, e3, t3);
            const n2 = e3.split(/ /g);
            let s2 = this;
            for (const e4 of n2) s2 = _._pushAttributed(s2, e4, t3);
            return s2;
          }
          static _pushAttributed(e3, t3, n2) {
            const s2 = n2.getMetadataForScope(t3), r2 = e3.scopePath.push(t3), i2 = n2.themeProvider.themeMatch(r2), o2 = _.mergeAttributes(e3.tokenAttributes, s2, i2), a2 = e3.fontAttributes?.with(i2) ?? null;
            return new _(e3, r2, o2, a2, i2);
          }
          getScopeNames() {
            return this.scopePath.getSegments();
          }
          getExtensionIfDefined(e3) {
            const t3 = [];
            let n2 = this;
            for (; n2 && n2 !== e3; ) t3.push({ encodedTokenAttributes: n2.tokenAttributes, scopeNames: n2.scopePath.getExtensionIfDefined(n2.parent?.scopePath ?? null) }), n2 = n2.parent;
            return n2 === e3 ? t3.reverse() : void 0;
          }
        }
        t2.AttributedScopeStack = _;
        class b {
          constructor(e3, t3, n2, s2, r2, i2, o2, a2) {
            this.parent = e3, this.ruleId = t3, this.beginRuleCapturedEOL = r2, this.endRule = i2, this.nameScopesList = o2, this.contentNameScopesList = a2, this._stackElementBrand = void 0, this.depth = this.parent ? this.parent.depth + 1 : 1, this._enterPos = n2, this._anchorPos = s2;
          }
          equals(e3) {
            return null !== e3 && b._equals(this, e3);
          }
          static _equals(e3, t3) {
            return e3 === t3 || !!this._structuralEquals(e3, t3) && _.equals(e3.contentNameScopesList, t3.contentNameScopesList);
          }
          static _structuralEquals(e3, t3) {
            for (; ; ) {
              if (e3 === t3) return true;
              if (!e3 && !t3) return true;
              if (!e3 || !t3) return false;
              if (e3.depth !== t3.depth || e3.ruleId !== t3.ruleId || e3.endRule !== t3.endRule) return false;
              e3 = e3.parent, t3 = t3.parent;
            }
          }
          clone() {
            return this;
          }
          static _reset(e3) {
            for (; e3; ) e3._enterPos = -1, e3._anchorPos = -1, e3 = e3.parent;
          }
          reset() {
            b._reset(this);
          }
          pop() {
            return this.parent;
          }
          safePop() {
            return this.parent ? this.parent : this;
          }
          push(e3, t3, n2, s2, r2, i2, o2) {
            return new b(this, e3, t3, n2, s2, r2, i2, o2);
          }
          getEnterPos() {
            return this._enterPos;
          }
          getAnchorPos() {
            return this._anchorPos;
          }
          getRule(e3) {
            return e3.getRule(this.ruleId);
          }
          toString() {
            const e3 = [];
            return this._writeString(e3, 0), "[" + e3.join(",") + "]";
          }
          _writeString(e3, t3) {
            return this.parent && (t3 = this.parent._writeString(e3, t3)), e3[t3++] = `(${this.ruleId}, ${this.nameScopesList?.toString()}, ${this.contentNameScopesList?.toString()})`, t3;
          }
          withContentNameScopesList(e3) {
            return this.contentNameScopesList === e3 ? this : this.parent.push(this.ruleId, this._enterPos, this._anchorPos, this.beginRuleCapturedEOL, this.endRule, this.nameScopesList, e3);
          }
          withEndRule(e3) {
            return this.endRule === e3 ? this : new b(this.parent, this.ruleId, this._enterPos, this._anchorPos, this.beginRuleCapturedEOL, e3, this.nameScopesList, this.contentNameScopesList);
          }
          hasSameRuleAs(e3) {
            let t3 = this;
            for (; t3 && t3._enterPos === e3._enterPos; ) {
              if (t3.ruleId === e3.ruleId) return true;
              t3 = t3.parent;
            }
            return false;
          }
          toStateStackFrame() {
            return { ruleId: a.ruleIdToNumber(this.ruleId), beginRuleCapturedEOL: this.beginRuleCapturedEOL, endRule: this.endRule, nameScopesList: this.nameScopesList?.getExtensionIfDefined(this.parent?.nameScopesList ?? null) ?? [], contentNameScopesList: this.contentNameScopesList?.getExtensionIfDefined(this.nameScopesList) ?? [] };
          }
          static pushFrame(e3, t3) {
            const n2 = _.fromExtension(e3?.nameScopesList ?? null, t3.nameScopesList);
            return new b(e3, a.ruleIdFromNumber(t3.ruleId), t3.enterPos ?? -1, t3.anchorPos ?? -1, t3.beginRuleCapturedEOL, t3.endRule, n2, _.fromExtension(n2, t3.contentNameScopesList));
          }
        }
        t2.StateStackImpl = b, b.NULL = new b(null, 0, 0, 0, false, null, null, null), t2.BalancedBracketSelectors = class {
          constructor(e3, t3) {
            this.allowAny = false, this.balancedBracketScopes = e3.flatMap(((e4) => "*" === e4 ? (this.allowAny = true, []) : i.createMatchers(e4, d).map(((e5) => e5.matcher)))), this.unbalancedBracketScopes = t3.flatMap(((e4) => i.createMatchers(e4, d).map(((e5) => e5.matcher))));
          }
          get matchesAlways() {
            return this.allowAny && 0 === this.unbalancedBracketScopes.length;
          }
          get matchesNever() {
            return 0 === this.balancedBracketScopes.length && !this.allowAny;
          }
          match(e3) {
            for (const t3 of this.unbalancedBracketScopes) if (t3(e3)) return false;
            for (const t3 of this.balancedBracketScopes) if (t3(e3)) return true;
            return this.allowAny;
          }
        };
        class y {
          constructor(e3, t3, n2, r2) {
            this.balancedBracketSelectors = r2, this._emitBinaryTokens = e3, this._tokenTypeOverrides = n2, s.DebugFlags.InDebugMode ? this._lineText = t3 : this._lineText = null, this._mergeConsecutiveTokensWithEqualMetadata = !l.containsRTL(t3), this._tokens = [], this._binaryTokens = [], this._lastTokenEndIndex = 0;
          }
          produce(e3, t3) {
            this.produceFromScopes(e3.contentNameScopesList, t3);
          }
          produceFromScopes(e3, t3) {
            if (this._lastTokenEndIndex >= t3) return;
            if (this._emitBinaryTokens) {
              let n3 = e3?.tokenAttributes ?? 0, i2 = false;
              if (this.balancedBracketSelectors?.matchesAlways && (i2 = true), this._tokenTypeOverrides.length > 0 || this.balancedBracketSelectors && !this.balancedBracketSelectors.matchesAlways && !this.balancedBracketSelectors.matchesNever) {
                const t4 = e3?.getScopeNames() ?? [];
                for (const e4 of this._tokenTypeOverrides) e4.matcher(t4) && (n3 = r.EncodedTokenAttributes.set(n3, 0, r.toOptionalTokenType(e4.type), null, -1, 0, 0));
                this.balancedBracketSelectors && (i2 = this.balancedBracketSelectors.match(t4));
              }
              if (i2 && (n3 = r.EncodedTokenAttributes.set(n3, 0, 8, i2, -1, 0, 0)), this._mergeConsecutiveTokensWithEqualMetadata && this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 1] === n3) return void (this._lastTokenEndIndex = t3);
              if (s.DebugFlags.InDebugMode) {
                const n4 = e3?.getScopeNames() ?? [];
                console.log("  token: |" + this._lineText.substring(this._lastTokenEndIndex, t3).replace(/\n$/, "\\n") + "|");
                for (let e4 = 0; e4 < n4.length; e4++) console.log("      * " + n4[e4]);
              }
              return this._binaryTokens.push(this._lastTokenEndIndex), this._binaryTokens.push(n3), void (this._lastTokenEndIndex = t3);
            }
            const n2 = e3?.getScopeNames() ?? [];
            if (s.DebugFlags.InDebugMode) {
              console.log("  token: |" + this._lineText.substring(this._lastTokenEndIndex, t3).replace(/\n$/, "\\n") + "|");
              for (let e4 = 0; e4 < n2.length; e4++) console.log("      * " + n2[e4]);
            }
            this._tokens.push({ startIndex: this._lastTokenEndIndex, endIndex: t3, scopes: n2 }), this._lastTokenEndIndex = t3;
          }
          getResult(e3, t3) {
            return this._tokens.length > 0 && this._tokens[this._tokens.length - 1].startIndex === t3 - 1 && this._tokens.pop(), 0 === this._tokens.length && (this._lastTokenEndIndex = -1, this.produce(e3, t3), this._tokens[this._tokens.length - 1].startIndex = 0), this._tokens;
          }
          getBinaryResult(e3, t3) {
            this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 2] === t3 - 1 && (this._binaryTokens.pop(), this._binaryTokens.pop()), 0 === this._binaryTokens.length && (this._lastTokenEndIndex = -1, this.produce(e3, t3), this._binaryTokens[this._binaryTokens.length - 2] = 0);
            const n2 = new Uint32Array(this._binaryTokens.length);
            for (let e4 = 0, t4 = this._binaryTokens.length; e4 < t4; e4++) n2[e4] = this._binaryTokens[e4];
            return n2;
          }
        }
        t2.LineTokens = y;
        class S {
          constructor(e3, t3, n2, s2, r2) {
            this.startIndex = e3, this.endIndex = t3, this.fontFamily = n2, this.fontSizeMultiplier = s2, this.lineHeightMultiplier = r2;
          }
          optionsEqual(e3) {
            return this.fontFamily === e3.fontFamily && this.fontSizeMultiplier === e3.fontSizeMultiplier && this.lineHeightMultiplier === e3.lineHeightMultiplier;
          }
        }
        t2.FontInfo = S;
        class k {
          constructor() {
            this._fonts = [], this._lastIndex = 0;
          }
          produce(e3, t3) {
            this.produceFromScopes(e3.contentNameScopesList, t3);
          }
          produceFromScopes(e3, t3) {
            if (!e3?.fontAttributes) return void (this._lastIndex = t3);
            const n2 = e3.fontAttributes.fontFamily, s2 = e3.fontAttributes.fontSize, r2 = e3.fontAttributes.lineHeight;
            if (!n2 && !s2 && !r2) return void (this._lastIndex = t3);
            const i2 = new S(this._lastIndex, t3, n2, s2, r2), o2 = this._fonts[this._fonts.length - 1];
            o2 && o2.endIndex === this._lastIndex && o2.optionsEqual(i2) ? o2.endIndex = i2.endIndex : this._fonts.push(i2), this._lastIndex = t3;
          }
          getResult() {
            return this._fonts;
          }
        }
        t2.LineFonts = k;
      }, 784: (e2, t2, n) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.parseInclude = t2.TopLevelRepositoryReference = t2.TopLevelReference = t2.RelativeReference = t2.SelfReference = t2.BaseReference = t2.ScopeDependencyProcessor = t2.ExternalReferenceCollector = t2.TopLevelRepositoryRuleReference = t2.TopLevelRuleReference = void 0;
        const s = n(807);
        class r {
          constructor(e3) {
            this.scopeName = e3;
          }
          toKey() {
            return this.scopeName;
          }
        }
        t2.TopLevelRuleReference = r;
        class i {
          constructor(e3, t3) {
            this.scopeName = e3, this.ruleName = t3;
          }
          toKey() {
            return `${this.scopeName}#${this.ruleName}`;
          }
        }
        t2.TopLevelRepositoryRuleReference = i;
        class o {
          constructor() {
            this._references = [], this._seenReferenceKeys = /* @__PURE__ */ new Set(), this.visitedRule = /* @__PURE__ */ new Set();
          }
          get references() {
            return this._references;
          }
          add(e3) {
            const t3 = e3.toKey();
            this._seenReferenceKeys.has(t3) || (this._seenReferenceKeys.add(t3), this._references.push(e3));
          }
        }
        function a(e3, t3, n2, s2) {
          const i2 = n2.lookup(e3.scopeName);
          if (!i2) {
            if (e3.scopeName === t3) throw new Error(`No grammar provided for <${t3}>`);
            return;
          }
          const o2 = n2.lookup(t3);
          e3 instanceof r ? l({ baseGrammar: o2, selfGrammar: i2 }, s2) : c(e3.ruleName, { baseGrammar: o2, selfGrammar: i2, repository: i2.repository }, s2);
          const a2 = n2.injections(e3.scopeName);
          if (a2) for (const e4 of a2) s2.add(new r(e4));
        }
        function c(e3, t3, n2) {
          t3.repository && t3.repository[e3] && u([t3.repository[e3]], t3, n2);
        }
        function l(e3, t3) {
          e3.selfGrammar.patterns && Array.isArray(e3.selfGrammar.patterns) && u(e3.selfGrammar.patterns, { ...e3, repository: e3.selfGrammar.repository }, t3), e3.selfGrammar.injections && u(Object.values(e3.selfGrammar.injections), { ...e3, repository: e3.selfGrammar.repository }, t3);
        }
        function u(e3, t3, n2) {
          for (const o2 of e3) {
            if (n2.visitedRule.has(o2)) continue;
            n2.visitedRule.add(o2);
            const e4 = o2.repository ? s.mergeObjects({}, t3.repository, o2.repository) : t3.repository;
            Array.isArray(o2.patterns) && u(o2.patterns, { ...t3, repository: e4 }, n2);
            const a2 = o2.include;
            if (!a2) continue;
            const h2 = g(a2);
            switch (h2.kind) {
              case 0:
                l({ ...t3, selfGrammar: t3.baseGrammar }, n2);
                break;
              case 1:
                l(t3, n2);
                break;
              case 2:
                c(h2.ruleName, { ...t3, repository: e4 }, n2);
                break;
              case 3:
              case 4:
                const s2 = h2.scopeName === t3.selfGrammar.scopeName ? t3.selfGrammar : h2.scopeName === t3.baseGrammar.scopeName ? t3.baseGrammar : void 0;
                if (s2) {
                  const r2 = { baseGrammar: t3.baseGrammar, selfGrammar: s2, repository: e4 };
                  4 === h2.kind ? c(h2.ruleName, r2, n2) : l(r2, n2);
                } else 4 === h2.kind ? n2.add(new i(h2.scopeName, h2.ruleName)) : n2.add(new r(h2.scopeName));
            }
          }
        }
        t2.ExternalReferenceCollector = o, t2.ScopeDependencyProcessor = class {
          constructor(e3, t3) {
            this.repo = e3, this.initialScopeName = t3, this.seenFullScopeRequests = /* @__PURE__ */ new Set(), this.seenPartialScopeRequests = /* @__PURE__ */ new Set(), this.seenFullScopeRequests.add(this.initialScopeName), this.Q = [new r(this.initialScopeName)];
          }
          processQueue() {
            const e3 = this.Q;
            this.Q = [];
            const t3 = new o();
            for (const n2 of e3) a(n2, this.initialScopeName, this.repo, t3);
            for (const e4 of t3.references) if (e4 instanceof r) {
              if (this.seenFullScopeRequests.has(e4.scopeName)) continue;
              this.seenFullScopeRequests.add(e4.scopeName), this.Q.push(e4);
            } else {
              if (this.seenFullScopeRequests.has(e4.scopeName)) continue;
              if (this.seenPartialScopeRequests.has(e4.toKey())) continue;
              this.seenPartialScopeRequests.add(e4.toKey()), this.Q.push(e4);
            }
          }
        };
        class h {
          constructor() {
            this.kind = 0;
          }
        }
        t2.BaseReference = h;
        class p {
          constructor() {
            this.kind = 1;
          }
        }
        t2.SelfReference = p;
        class d {
          constructor(e3) {
            this.ruleName = e3, this.kind = 2;
          }
        }
        t2.RelativeReference = d;
        class f {
          constructor(e3) {
            this.scopeName = e3, this.kind = 3;
          }
        }
        t2.TopLevelReference = f;
        class m {
          constructor(e3, t3) {
            this.scopeName = e3, this.ruleName = t3, this.kind = 4;
          }
        }
        function g(e3) {
          if ("$base" === e3) return new h();
          if ("$self" === e3) return new p();
          const t3 = e3.indexOf("#");
          if (-1 === t3) return new f(e3);
          if (0 === t3) return new d(e3.substring(1));
          {
            const n2 = e3.substring(0, t3), s2 = e3.substring(t3 + 1);
            return new m(n2, s2);
          }
        }
        t2.TopLevelRepositoryReference = m, t2.parseInclude = g;
      }, 752: function(e2, t2, n) {
        var s = this && this.__createBinding || (Object.create ? function(e3, t3, n2, s2) {
          void 0 === s2 && (s2 = n2), Object.defineProperty(e3, s2, { enumerable: true, get: function() {
            return t3[n2];
          } });
        } : function(e3, t3, n2, s2) {
          void 0 === s2 && (s2 = n2), e3[s2] = t3[n2];
        }), r = this && this.__exportStar || function(e3, t3) {
          for (var n2 in e3) "default" === n2 || Object.prototype.hasOwnProperty.call(t3, n2) || s(t3, e3, n2);
        };
        Object.defineProperty(t2, "__esModule", { value: true }), r(n(929), t2);
      }, 398: (e2, t2, n) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.LocalStackElement = t2._tokenizeString = void 0;
        const s = n(185), r = n(810), i = n(666), o = n(807);
        class a {
          constructor(e3, t3) {
            this.stack = e3, this.stoppedEarly = t3;
          }
        }
        function c(e3, t3, n2, r2, c2, h2, d2, f, m) {
          const g = (e4, t4) => {
            h2.produce(e4, t4), d2.produce(e4, t4);
          }, _ = t3.content.length;
          let b = false, y = -1;
          if (f) {
            const o2 = (function(e4, t4, n3, r3, o3, a2, c3) {
              const l2 = (e5, t5) => {
                a2.produce(e5, t5), c3.produce(e5, t5);
              };
              let h3 = o3.beginRuleCapturedEOL ? 0 : -1;
              const d3 = [];
              for (let t5 = o3; t5; t5 = t5.pop()) {
                const n4 = t5.getRule(e4);
                n4 instanceof i.BeginWhileRule && d3.push({ rule: n4, stack: t5 });
              }
              for (let f2 = d3.pop(); f2; f2 = d3.pop()) {
                const { ruleScanner: d4, findOptions: m2 } = u(f2.rule, e4, f2.stack.endRule, n3, r3 === h3), g2 = d4.findNextMatchSync(t4, r3, m2);
                if (s.DebugFlags.InDebugMode && (console.log("  scanning for while rule"), console.log(d4.toString())), !g2) {
                  s.DebugFlags.InDebugMode && console.log("  popping " + f2.rule.debugName + " - " + f2.rule.debugWhileRegExp), o3 = f2.stack.pop();
                  break;
                }
                if (g2.ruleId !== i.whileRuleId) {
                  o3 = f2.stack.pop();
                  break;
                }
                g2.captureIndices && g2.captureIndices.length && (l2(f2.stack, g2.captureIndices[0].start), p(e4, t4, n3, f2.stack, a2, c3, f2.rule.whileCaptures, g2.captureIndices), l2(f2.stack, g2.captureIndices[0].end), h3 = g2.captureIndices[0].end, g2.captureIndices[0].end > r3 && (r3 = g2.captureIndices[0].end, n3 = false));
              }
              return { stack: o3, linePos: r3, anchorPosition: h3, isFirstLine: n3 };
            })(e3, t3, n2, r2, c2, h2, d2);
            c2 = o2.stack, r2 = o2.linePos, n2 = o2.isFirstLine, y = o2.anchorPosition;
          }
          const S = Date.now();
          for (; !b; ) {
            if (0 !== m && Date.now() - S > m) return new a(c2, true);
            k();
          }
          return new a(c2, false);
          function k() {
            s.DebugFlags.InDebugMode && (console.log(""), console.log(`@@scanNext ${r2}: |${t3.content.substr(r2).replace(/\n$/, "\\n")}|`));
            const a2 = (function(e4, t4, n3, r3, i2, a3) {
              const c3 = (function(e5, t5, n4, r4, i3, a4) {
                const c4 = i3.getRule(e5), { ruleScanner: u4, findOptions: h4 } = l(c4, e5, i3.endRule, n4, r4 === a4);
                let p3 = 0;
                s.DebugFlags.InDebugMode && (p3 = o.performanceNow());
                const d4 = u4.findNextMatchSync(t5, r4, h4);
                if (s.DebugFlags.InDebugMode) {
                  const e6 = o.performanceNow() - p3;
                  e6 > 5 && console.warn(`Rule ${c4.debugName} (${c4.id}) matching took ${e6} against '${t5}'`), console.log(`  scanning for (linePos: ${r4}, anchorPosition: ${a4})`), console.log(u4.toString()), d4 && console.log(`matched rule id: ${d4.ruleId} from ${d4.captureIndices[0].start} to ${d4.captureIndices[0].end}`);
                }
                return d4 ? { captureIndices: d4.captureIndices, matchedRuleId: d4.ruleId } : null;
              })(e4, t4, n3, r3, i2, a3), u3 = e4.getInjections();
              if (0 === u3.length) return c3;
              const h3 = (function(e5, t5, n4, r4, i3, o2, a4) {
                let c4, u4 = Number.MAX_VALUE, h4 = null, p3 = 0;
                const d4 = o2.contentNameScopesList.getScopeNames();
                for (let o3 = 0, f3 = e5.length; o3 < f3; o3++) {
                  const f4 = e5[o3];
                  if (!f4.matcher(d4)) continue;
                  const m3 = t5.getRule(f4.ruleId), { ruleScanner: g2, findOptions: _2 } = l(m3, t5, null, r4, i3 === a4), b2 = g2.findNextMatchSync(n4, i3, _2);
                  if (!b2) continue;
                  s.DebugFlags.InDebugMode && (console.log(`  matched injection: ${f4.debugSelector}`), console.log(g2.toString()));
                  const y2 = b2.captureIndices[0].start;
                  if (!(y2 >= u4) && (u4 = y2, h4 = b2.captureIndices, c4 = b2.ruleId, p3 = f4.priority, u4 === i3)) break;
                }
                return h4 ? { priorityMatch: -1 === p3, captureIndices: h4, matchedRuleId: c4 } : null;
              })(u3, e4, t4, n3, r3, i2, a3);
              if (!h3) return c3;
              if (!c3) return h3;
              const p2 = c3.captureIndices[0].start, d3 = h3.captureIndices[0].start;
              return d3 < p2 || h3.priorityMatch && d3 === p2 ? h3 : c3;
            })(e3, t3, n2, r2, c2, y);
            if (!a2) return s.DebugFlags.InDebugMode && console.log("  no more matches."), g(c2, _), void (b = true);
            const u2 = a2.captureIndices, f2 = a2.matchedRuleId, m2 = !!(u2 && u2.length > 0) && u2[0].end > r2;
            if (f2 === i.endRuleId) {
              const i2 = c2.getRule(e3);
              s.DebugFlags.InDebugMode && console.log("  popping " + i2.debugName + " - " + i2.debugEndRegExp), g(c2, u2[0].start), c2 = c2.withContentNameScopesList(c2.nameScopesList), p(e3, t3, n2, c2, h2, d2, i2.endCaptures, u2), g(c2, u2[0].end);
              const o2 = c2;
              if (c2 = c2.parent, y = o2.getAnchorPos(), !m2 && o2.getEnterPos() === r2) return s.DebugFlags.InDebugMode && console.error("[1] - Grammar is in an endless loop - Grammar pushed & popped a rule without advancing"), g(c2 = o2, _), void (b = true);
            } else {
              const o2 = e3.getRule(f2);
              g(c2, u2[0].start);
              const a3 = c2, l2 = o2.getName(t3.content, u2), S2 = c2.contentNameScopesList.pushAttributed(l2, e3);
              if (c2 = c2.push(f2, r2, y, u2[0].end === _, null, S2, S2), o2 instanceof i.BeginEndRule) {
                const r3 = o2;
                s.DebugFlags.InDebugMode && console.log("  pushing " + r3.debugName + " - " + r3.debugBeginRegExp), p(e3, t3, n2, c2, h2, d2, r3.beginCaptures, u2), g(c2, u2[0].end), y = u2[0].end;
                const i2 = r3.getContentName(t3.content, u2), l3 = S2.pushAttributed(i2, e3);
                if (c2 = c2.withContentNameScopesList(l3), r3.endHasBackReferences && (c2 = c2.withEndRule(r3.getEndWithResolvedBackReferences(t3.content, u2))), !m2 && a3.hasSameRuleAs(c2)) return s.DebugFlags.InDebugMode && console.error("[2] - Grammar is in an endless loop - Grammar pushed the same rule without advancing"), c2 = c2.pop(), g(c2, _), void (b = true);
              } else if (o2 instanceof i.BeginWhileRule) {
                const r3 = o2;
                s.DebugFlags.InDebugMode && console.log("  pushing " + r3.debugName), p(e3, t3, n2, c2, h2, d2, r3.beginCaptures, u2), g(c2, u2[0].end), y = u2[0].end;
                const i2 = r3.getContentName(t3.content, u2), l3 = S2.pushAttributed(i2, e3);
                if (c2 = c2.withContentNameScopesList(l3), r3.whileHasBackReferences && (c2 = c2.withEndRule(r3.getWhileWithResolvedBackReferences(t3.content, u2))), !m2 && a3.hasSameRuleAs(c2)) return s.DebugFlags.InDebugMode && console.error("[3] - Grammar is in an endless loop - Grammar pushed the same rule without advancing"), c2 = c2.pop(), g(c2, _), void (b = true);
              } else {
                const r3 = o2;
                if (s.DebugFlags.InDebugMode && console.log("  matched " + r3.debugName + " - " + r3.debugMatchRegExp), p(e3, t3, n2, c2, h2, d2, r3.captures, u2), g(c2, u2[0].end), c2 = c2.pop(), !m2) return s.DebugFlags.InDebugMode && console.error("[4] - Grammar is in an endless loop - Grammar is not advancing, nor is it pushing/popping"), c2 = c2.safePop(), g(c2, _), void (b = true);
              }
            }
            u2[0].end > r2 && (r2 = u2[0].end, n2 = false);
          }
        }
        function l(e3, t3, n2, r2, i2) {
          return s.UseOnigurumaFindOptions ? { ruleScanner: e3.compile(t3, n2), findOptions: h(r2, i2) } : { ruleScanner: e3.compileAG(t3, n2, r2, i2), findOptions: 0 };
        }
        function u(e3, t3, n2, r2, i2) {
          return s.UseOnigurumaFindOptions ? { ruleScanner: e3.compileWhile(t3, n2), findOptions: h(r2, i2) } : { ruleScanner: e3.compileWhileAG(t3, n2, r2, i2), findOptions: 0 };
        }
        function h(e3, t3) {
          let n2 = 0;
          return e3 || (n2 |= 1), t3 || (n2 |= 4), n2;
        }
        function p(e3, t3, n2, s2, i2, o2, a2, l2) {
          const u2 = (e4, t4) => {
            i2.produceFromScopes(e4, t4), o2.produceFromScopes(e4, t4);
          }, h2 = (e4, t4) => {
            i2.produce(e4, t4), o2.produce(e4, t4);
          };
          if (0 === a2.length) return;
          const p2 = t3.content, f = Math.min(a2.length, l2.length), m = [], g = l2[0].end;
          for (let t4 = 0; t4 < f; t4++) {
            const f2 = a2[t4];
            if (null === f2) continue;
            const _ = l2[t4];
            if (0 === _.length) continue;
            if (_.start > g) break;
            for (; m.length > 0 && m[m.length - 1].endPos <= _.start; ) u2(m[m.length - 1].scopes, m[m.length - 1].endPos), m.pop();
            if (m.length > 0 ? u2(m[m.length - 1].scopes, _.start) : h2(s2, _.start), f2.retokenizeCapturedWithRuleId) {
              const t5 = f2.getName(p2, l2), a3 = s2.contentNameScopesList.pushAttributed(t5, e3), u3 = f2.getContentName(p2, l2), h3 = a3.pushAttributed(u3, e3), d2 = s2.push(f2.retokenizeCapturedWithRuleId, _.start, -1, false, null, a3, h3), m2 = e3.createOnigString(p2.substring(0, _.end));
              c(e3, m2, n2 && 0 === _.start, _.start, d2, i2, o2, false, 0), r.disposeOnigString(m2);
              continue;
            }
            const b = f2.getName(p2, l2);
            if (null !== b) {
              const t5 = (m.length > 0 ? m[m.length - 1].scopes : s2.contentNameScopesList).pushAttributed(b, e3);
              m.push(new d(t5, _.end));
            }
          }
          for (; m.length > 0; ) u2(m[m.length - 1].scopes, m[m.length - 1].endPos), m.pop();
        }
        t2._tokenizeString = c;
        class d {
          constructor(e3, t3) {
            this.scopes = e3, this.endPos = t3;
          }
        }
        t2.LocalStackElement = d;
      }, 726: (e2, t2) => {
        function n(e3, t3) {
          throw new Error("Near offset " + e3.pos + ": " + t3 + " ~~~" + e3.source.substr(e3.pos, 50) + "~~~");
        }
        Object.defineProperty(t2, "__esModule", { value: true }), t2.parseJSON = void 0, t2.parseJSON = function(e3, t3, o) {
          let a = new s(e3), c = new r(), l = 0, u = null, h = [], p = [];
          function d() {
            h.push(l), p.push(u);
          }
          function f() {
            l = h.pop(), u = p.pop();
          }
          function m(e4) {
            n(a, e4);
          }
          for (; i(a, c); ) {
            if (0 === l) {
              if (null !== u && m("too many constructs in root"), 3 === c.type) {
                u = {}, o && (u.$vscodeTextmateLocation = c.toLocation(t3)), d(), l = 1;
                continue;
              }
              if (2 === c.type) {
                u = [], d(), l = 4;
                continue;
              }
              m("unexpected token in root");
            }
            if (2 === l) {
              if (5 === c.type) {
                f();
                continue;
              }
              if (7 === c.type) {
                l = 3;
                continue;
              }
              m("expected , or }");
            }
            if (1 === l || 3 === l) {
              if (1 === l && 5 === c.type) {
                f();
                continue;
              }
              if (1 === c.type) {
                let e4 = c.value;
                if (i(a, c) && 6 === c.type || m("expected colon"), i(a, c) || m("expected value"), l = 2, 1 === c.type) {
                  u[e4] = c.value;
                  continue;
                }
                if (8 === c.type) {
                  u[e4] = null;
                  continue;
                }
                if (9 === c.type) {
                  u[e4] = true;
                  continue;
                }
                if (10 === c.type) {
                  u[e4] = false;
                  continue;
                }
                if (11 === c.type) {
                  u[e4] = parseFloat(c.value);
                  continue;
                }
                if (2 === c.type) {
                  let t4 = [];
                  u[e4] = t4, d(), l = 4, u = t4;
                  continue;
                }
                if (3 === c.type) {
                  let n2 = {};
                  o && (n2.$vscodeTextmateLocation = c.toLocation(t3)), u[e4] = n2, d(), l = 1, u = n2;
                  continue;
                }
              }
              m("unexpected token in dict");
            }
            if (5 === l) {
              if (4 === c.type) {
                f();
                continue;
              }
              if (7 === c.type) {
                l = 6;
                continue;
              }
              m("expected , or ]");
            }
            if (4 === l || 6 === l) {
              if (4 === l && 4 === c.type) {
                f();
                continue;
              }
              if (l = 5, 1 === c.type) {
                u.push(c.value);
                continue;
              }
              if (8 === c.type) {
                u.push(null);
                continue;
              }
              if (9 === c.type) {
                u.push(true);
                continue;
              }
              if (10 === c.type) {
                u.push(false);
                continue;
              }
              if (11 === c.type) {
                u.push(parseFloat(c.value));
                continue;
              }
              if (2 === c.type) {
                let e4 = [];
                u.push(e4), d(), l = 4, u = e4;
                continue;
              }
              if (3 === c.type) {
                let e4 = {};
                o && (e4.$vscodeTextmateLocation = c.toLocation(t3)), u.push(e4), d(), l = 1, u = e4;
                continue;
              }
              m("unexpected token in array");
            }
            m("unknown state");
          }
          return 0 !== p.length && m("unclosed constructs"), u;
        };
        class s {
          constructor(e3) {
            this.source = e3, this.pos = 0, this.len = e3.length, this.line = 1, this.char = 0;
          }
        }
        class r {
          constructor() {
            this.value = null, this.type = 0, this.offset = -1, this.len = -1, this.line = -1, this.char = -1;
          }
          toLocation(e3) {
            return { filename: e3, line: this.line, char: this.char };
          }
        }
        function i(e3, t3) {
          t3.value = null, t3.type = 0, t3.offset = -1, t3.len = -1, t3.line = -1, t3.char = -1;
          let s2, r2 = e3.source, i2 = e3.pos, o = e3.len, a = e3.line, c = e3.char;
          for (; ; ) {
            if (i2 >= o) return false;
            if (s2 = r2.charCodeAt(i2), 32 !== s2 && 9 !== s2 && 13 !== s2) {
              if (10 !== s2) break;
              i2++, a++, c = 0;
            } else i2++, c++;
          }
          if (t3.offset = i2, t3.line = a, t3.char = c, 34 === s2) {
            for (t3.type = 1, i2++, c++; ; ) {
              if (i2 >= o) return false;
              if (s2 = r2.charCodeAt(i2), i2++, c++, 92 !== s2) {
                if (34 === s2) break;
              } else i2++, c++;
            }
            t3.value = r2.substring(t3.offset + 1, i2 - 1).replace(/\\u([0-9A-Fa-f]{4})/g, ((e4, t4) => String.fromCodePoint(parseInt(t4, 16)))).replace(/\\(.)/g, ((t4, s3) => {
              switch (s3) {
                case '"':
                  return '"';
                case "\\":
                  return "\\";
                case "/":
                  return "/";
                case "b":
                  return "\b";
                case "f":
                  return "\f";
                case "n":
                  return "\n";
                case "r":
                  return "\r";
                case "t":
                  return "	";
                default:
                  n(e3, "invalid escape sequence");
              }
              throw new Error("unreachable");
            }));
          } else if (91 === s2) t3.type = 2, i2++, c++;
          else if (123 === s2) t3.type = 3, i2++, c++;
          else if (93 === s2) t3.type = 4, i2++, c++;
          else if (125 === s2) t3.type = 5, i2++, c++;
          else if (58 === s2) t3.type = 6, i2++, c++;
          else if (44 === s2) t3.type = 7, i2++, c++;
          else if (110 === s2) {
            if (t3.type = 8, i2++, c++, s2 = r2.charCodeAt(i2), 117 !== s2) return false;
            if (i2++, c++, s2 = r2.charCodeAt(i2), 108 !== s2) return false;
            if (i2++, c++, s2 = r2.charCodeAt(i2), 108 !== s2) return false;
            i2++, c++;
          } else if (116 === s2) {
            if (t3.type = 9, i2++, c++, s2 = r2.charCodeAt(i2), 114 !== s2) return false;
            if (i2++, c++, s2 = r2.charCodeAt(i2), 117 !== s2) return false;
            if (i2++, c++, s2 = r2.charCodeAt(i2), 101 !== s2) return false;
            i2++, c++;
          } else if (102 === s2) {
            if (t3.type = 10, i2++, c++, s2 = r2.charCodeAt(i2), 97 !== s2) return false;
            if (i2++, c++, s2 = r2.charCodeAt(i2), 108 !== s2) return false;
            if (i2++, c++, s2 = r2.charCodeAt(i2), 115 !== s2) return false;
            if (i2++, c++, s2 = r2.charCodeAt(i2), 101 !== s2) return false;
            i2++, c++;
          } else for (t3.type = 11; ; ) {
            if (i2 >= o) return false;
            if (s2 = r2.charCodeAt(i2), !(46 === s2 || s2 >= 48 && s2 <= 57 || 101 === s2 || 69 === s2 || 45 === s2 || 43 === s2)) break;
            i2++, c++;
          }
          return t3.len = i2 - t3.offset, null === t3.value && (t3.value = r2.substr(t3.offset, t3.len)), e3.pos = i2, e3.line = a, e3.char = c, true;
        }
      }, 625: function(e2, t2, n) {
        var s = this && this.__createBinding || (Object.create ? function(e3, t3, n2, s2) {
          void 0 === s2 && (s2 = n2), Object.defineProperty(e3, s2, { enumerable: true, get: function() {
            return t3[n2];
          } });
        } : function(e3, t3, n2, s2) {
          void 0 === s2 && (s2 = n2), e3[s2] = t3[n2];
        }), r = this && this.__exportStar || function(e3, t3) {
          for (var n2 in e3) "default" === n2 || Object.prototype.hasOwnProperty.call(t3, n2) || s(t3, e3, n2);
        };
        Object.defineProperty(t2, "__esModule", { value: true }), t2.applyStateStackDiff = t2.diffStateStacksRefEq = t2.parseRawGrammar = t2.INITIAL = t2.Registry = void 0;
        const i = n(752), o = n(150), a = n(583), c = n(63), l = n(784), u = n(151);
        Object.defineProperty(t2, "applyStateStackDiff", { enumerable: true, get: function() {
          return u.applyStateStackDiff;
        } }), Object.defineProperty(t2, "diffStateStacksRefEq", { enumerable: true, get: function() {
          return u.diffStateStacksRefEq;
        } }), r(n(810), t2), t2.Registry = class {
          constructor(e3) {
            this._options = e3, this._syncRegistry = new a.SyncRegistry(c.Theme.createFromRawTheme(e3.theme, e3.colorMap), e3.onigLib), this._ensureGrammarCache = /* @__PURE__ */ new Map();
          }
          dispose() {
            this._syncRegistry.dispose();
          }
          setTheme(e3, t3) {
            this._syncRegistry.setTheme(c.Theme.createFromRawTheme(e3, t3));
          }
          getColorMap() {
            return this._syncRegistry.getColorMap();
          }
          loadGrammarWithEmbeddedLanguages(e3, t3, n2) {
            return this.loadGrammarWithConfiguration(e3, t3, { embeddedLanguages: n2 });
          }
          loadGrammarWithConfiguration(e3, t3, n2) {
            return this._loadGrammar(e3, t3, n2.embeddedLanguages, n2.tokenTypes, new i.BalancedBracketSelectors(n2.balancedBracketSelectors || [], n2.unbalancedBracketSelectors || []));
          }
          loadGrammar(e3) {
            return this._loadGrammar(e3, 0, null, null, null);
          }
          async _loadGrammar(e3, t3, n2, s2, r2) {
            const i2 = new l.ScopeDependencyProcessor(this._syncRegistry, e3);
            for (; i2.Q.length > 0; ) await Promise.all(i2.Q.map(((e4) => this._loadSingleGrammar(e4.scopeName)))), i2.processQueue();
            return this._grammarForScopeName(e3, t3, n2, s2, r2);
          }
          async _loadSingleGrammar(e3) {
            return this._ensureGrammarCache.has(e3) || this._ensureGrammarCache.set(e3, this._doLoadSingleGrammar(e3)), this._ensureGrammarCache.get(e3);
          }
          async _doLoadSingleGrammar(e3) {
            const t3 = await this._options.loadGrammar(e3);
            if (t3) {
              const n2 = "function" == typeof this._options.getInjections ? this._options.getInjections(e3) : void 0;
              this._syncRegistry.addGrammar(t3, n2);
            }
          }
          async addGrammar(e3, t3 = [], n2 = 0, s2 = null) {
            return this._syncRegistry.addGrammar(e3, t3), await this._grammarForScopeName(e3.scopeName, n2, s2);
          }
          _grammarForScopeName(e3, t3 = 0, n2 = null, s2 = null, r2 = null) {
            return this._syncRegistry.grammarForScopeName(e3, t3, n2, s2, r2);
          }
        }, t2.INITIAL = i.StateStackImpl.NULL, t2.parseRawGrammar = o.parseRawGrammar;
      }, 916: (e2, t2) => {
        function n(e3) {
          return !!e3 && !!e3.match(/[\w\.:]+/);
        }
        Object.defineProperty(t2, "__esModule", { value: true }), t2.createMatchers = void 0, t2.createMatchers = function(e3, t3) {
          const s = [], r = (function(e4) {
            let t4 = /([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g, n2 = t4.exec(e4);
            return { next: () => {
              if (!n2) return null;
              const s2 = n2[0];
              return n2 = t4.exec(e4), s2;
            } };
          })(e3);
          let i = r.next();
          for (; null !== i; ) {
            let e4 = 0;
            if (2 === i.length && ":" === i.charAt(1)) {
              switch (i.charAt(0)) {
                case "R":
                  e4 = 1;
                  break;
                case "L":
                  e4 = -1;
                  break;
                default:
                  console.log(`Unknown priority ${i} in scope selector`);
              }
              i = r.next();
            }
            let t4 = a();
            if (s.push({ matcher: t4, priority: e4 }), "," !== i) break;
            i = r.next();
          }
          return s;
          function o() {
            if ("-" === i) {
              i = r.next();
              const e4 = o();
              return (t4) => !!e4 && !e4(t4);
            }
            if ("(" === i) {
              i = r.next();
              const e4 = (function() {
                const e5 = [];
                let t4 = a();
                for (; t4 && (e5.push(t4), "|" === i || "," === i); ) {
                  do {
                    i = r.next();
                  } while ("|" === i || "," === i);
                  t4 = a();
                }
                return (t5) => e5.some(((e6) => e6(t5)));
              })();
              return ")" === i && (i = r.next()), e4;
            }
            if (n(i)) {
              const e4 = [];
              do {
                e4.push(i), i = r.next();
              } while (n(i));
              return (n2) => t3(e4, n2);
            }
            return null;
          }
          function a() {
            const e4 = [];
            let t4 = o();
            for (; t4; ) e4.push(t4), t4 = o();
            return (t5) => e4.every(((e5) => e5(t5)));
          }
        };
      }, 810: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.disposeOnigString = void 0, t2.disposeOnigString = function(e3) {
          "function" == typeof e3.dispose && e3.dispose();
        };
      }, 150: (e2, t2, n) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.parseRawGrammar = void 0;
        const s = n(578), r = n(185), i = n(726);
        t2.parseRawGrammar = function(e3, t3 = null) {
          return null !== t3 && /\.json$/.test(t3) ? (n2 = e3, o = t3, r.DebugFlags.InDebugMode ? i.parseJSON(n2, o, true) : JSON.parse(n2)) : (function(e4, t4) {
            return r.DebugFlags.InDebugMode ? s.parseWithLocation(e4, t4, "$vscodeTextmateLocation") : s.parsePLIST(e4);
          })(e3, t3);
          var n2, o;
        };
      }, 578: (e2, t2) => {
        function n(e3, t3, n2) {
          const s = e3.length;
          let r = 0, i = 1, o = 0;
          function a(t4) {
            if (null === n2) r += t4;
            else for (; t4 > 0; ) 10 === e3.charCodeAt(r) ? (r++, i++, o = 0) : (r++, o++), t4--;
          }
          function c(e4) {
            null === n2 ? r = e4 : a(e4 - r);
          }
          function l() {
            for (; r < s; ) {
              let t4 = e3.charCodeAt(r);
              if (32 !== t4 && 9 !== t4 && 13 !== t4 && 10 !== t4) break;
              a(1);
            }
          }
          function u(t4) {
            return e3.substr(r, t4.length) === t4 && (a(t4.length), true);
          }
          function h(t4) {
            let n3 = e3.indexOf(t4, r);
            c(-1 !== n3 ? n3 + t4.length : s);
          }
          function p(t4) {
            let n3 = e3.indexOf(t4, r);
            if (-1 !== n3) {
              let s2 = e3.substring(r, n3);
              return c(n3 + t4.length), s2;
            }
            {
              let t5 = e3.substr(r);
              return c(s), t5;
            }
          }
          s > 0 && 65279 === e3.charCodeAt(0) && (r = 1);
          let d = 0, f = null, m = [], g = [], _ = null;
          function b(e4, t4) {
            m.push(d), g.push(f), d = e4, f = t4;
          }
          function y() {
            if (0 === m.length) return S("illegal state stack");
            d = m.pop(), f = g.pop();
          }
          function S(t4) {
            throw new Error("Near offset " + r + ": " + t4 + " ~~~" + e3.substr(r, 50) + "~~~");
          }
          const k = function() {
            if (null === _) return S("missing <key>");
            let e4 = {};
            null !== n2 && (e4[n2] = { filename: t3, line: i, char: o }), f[_] = e4, _ = null, b(1, e4);
          }, C = function() {
            if (null === _) return S("missing <key>");
            let e4 = [];
            f[_] = e4, _ = null, b(2, e4);
          }, R = function() {
            let e4 = {};
            null !== n2 && (e4[n2] = { filename: t3, line: i, char: o }), f.push(e4), b(1, e4);
          }, A = function() {
            let e4 = [];
            f.push(e4), b(2, e4);
          };
          function w() {
            if (1 !== d) return S("unexpected </dict>");
            y();
          }
          function I() {
            return 1 === d || 2 !== d ? S("unexpected </array>") : void y();
          }
          function P(e4) {
            if (1 === d) {
              if (null === _) return S("missing <key>");
              f[_] = e4, _ = null;
            } else 2 === d ? f.push(e4) : f = e4;
          }
          function v(e4) {
            if (isNaN(e4)) return S("cannot parse float");
            if (1 === d) {
              if (null === _) return S("missing <key>");
              f[_] = e4, _ = null;
            } else 2 === d ? f.push(e4) : f = e4;
          }
          function x(e4) {
            if (isNaN(e4)) return S("cannot parse integer");
            if (1 === d) {
              if (null === _) return S("missing <key>");
              f[_] = e4, _ = null;
            } else 2 === d ? f.push(e4) : f = e4;
          }
          function N(e4) {
            if (1 === d) {
              if (null === _) return S("missing <key>");
              f[_] = e4, _ = null;
            } else 2 === d ? f.push(e4) : f = e4;
          }
          function E(e4) {
            if (1 === d) {
              if (null === _) return S("missing <key>");
              f[_] = e4, _ = null;
            } else 2 === d ? f.push(e4) : f = e4;
          }
          function F(e4) {
            if (1 === d) {
              if (null === _) return S("missing <key>");
              f[_] = e4, _ = null;
            } else 2 === d ? f.push(e4) : f = e4;
          }
          function T() {
            let e4 = p(">"), t4 = false;
            return 47 === e4.charCodeAt(e4.length - 1) && (t4 = true, e4 = e4.substring(0, e4.length - 1)), { name: e4.trim(), isClosed: t4 };
          }
          function D(e4) {
            if (e4.isClosed) return "";
            let t4 = p("</");
            return h(">"), t4.replace(/&#([0-9]+);/g, (function(e5, t5) {
              return String.fromCodePoint(parseInt(t5, 10));
            })).replace(/&#x([0-9a-f]+);/g, (function(e5, t5) {
              return String.fromCodePoint(parseInt(t5, 16));
            })).replace(/&amp;|&lt;|&gt;|&quot;|&apos;/g, (function(e5) {
              switch (e5) {
                case "&amp;":
                  return "&";
                case "&lt;":
                  return "<";
                case "&gt;":
                  return ">";
                case "&quot;":
                  return '"';
                case "&apos;":
                  return "'";
              }
              return e5;
            }));
          }
          for (; r < s && (l(), !(r >= s)); ) {
            const c2 = e3.charCodeAt(r);
            if (a(1), 60 !== c2) return S("expected <");
            if (r >= s) return S("unexpected end of input");
            const p2 = e3.charCodeAt(r);
            if (63 === p2) {
              a(1), h("?>");
              continue;
            }
            if (33 === p2) {
              if (a(1), u("--")) {
                h("-->");
                continue;
              }
              h(">");
              continue;
            }
            if (47 === p2) {
              if (a(1), l(), u("plist")) {
                h(">");
                continue;
              }
              if (u("dict")) {
                h(">"), w();
                continue;
              }
              if (u("array")) {
                h(">"), I();
                continue;
              }
              return S("unexpected closed tag");
            }
            let m2 = T();
            switch (m2.name) {
              case "dict":
                1 === d ? k() : 2 === d ? R() : (f = {}, null !== n2 && (f[n2] = { filename: t3, line: i, char: o }), b(1, f)), m2.isClosed && w();
                continue;
              case "array":
                1 === d ? C() : 2 === d ? A() : (f = [], b(2, f)), m2.isClosed && I();
                continue;
              case "key":
                G = D(m2), 1 !== d ? S("unexpected <key>") : null !== _ ? S("too many <key>") : _ = G;
                continue;
              case "string":
                P(D(m2));
                continue;
              case "real":
                v(parseFloat(D(m2)));
                continue;
              case "integer":
                x(parseInt(D(m2), 10));
                continue;
              case "date":
                N(new Date(D(m2)));
                continue;
              case "data":
                E(D(m2));
                continue;
              case "true":
                D(m2), F(true);
                continue;
              case "false":
                D(m2), F(false);
                continue;
            }
            if (!/^plist/.test(m2.name)) return S("unexpected opened tag " + m2.name);
          }
          var G;
          return f;
        }
        Object.defineProperty(t2, "__esModule", { value: true }), t2.parsePLIST = t2.parseWithLocation = void 0, t2.parseWithLocation = function(e3, t3, s) {
          return n(e3, t3, s);
        }, t2.parsePLIST = function(e3) {
          return n(e3, null, null);
        };
      }, 583: (e2, t2, n) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.SyncRegistry = void 0;
        const s = n(752);
        t2.SyncRegistry = class {
          constructor(e3, t3) {
            this._onigLibPromise = t3, this._grammars = /* @__PURE__ */ new Map(), this._rawGrammars = /* @__PURE__ */ new Map(), this._injectionGrammars = /* @__PURE__ */ new Map(), this._theme = e3;
          }
          dispose() {
            for (const e3 of this._grammars.values()) e3.dispose();
          }
          setTheme(e3) {
            this._theme = e3;
          }
          getColorMap() {
            return this._theme.getColorMap();
          }
          addGrammar(e3, t3) {
            this._rawGrammars.set(e3.scopeName, e3), t3 && this._injectionGrammars.set(e3.scopeName, t3);
          }
          lookup(e3) {
            return this._rawGrammars.get(e3);
          }
          injections(e3) {
            return this._injectionGrammars.get(e3);
          }
          getDefaults() {
            return this._theme.getDefaults();
          }
          themeMatch(e3) {
            return this._theme.match(e3);
          }
          async grammarForScopeName(e3, t3, n2, r, i) {
            if (!this._grammars.has(e3)) {
              let o = this._rawGrammars.get(e3);
              if (!o) return null;
              this._grammars.set(e3, s.createGrammar(e3, o, t3, n2, r, i, this, await this._onigLibPromise));
            }
            return this._grammars.get(e3);
          }
        };
      }, 666: (e2, t2, n) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.CompiledRule = t2.RegExpSourceList = t2.RegExpSource = t2.RuleFactory = t2.BeginWhileRule = t2.BeginEndRule = t2.IncludeOnlyRule = t2.MatchRule = t2.CaptureRule = t2.Rule = t2.ruleIdToNumber = t2.ruleIdFromNumber = t2.whileRuleId = t2.endRuleId = void 0;
        const s = n(807), r = n(784), i = /\\(\d+)/, o = /\\(\d+)/g;
        /* @__PURE__ */ Symbol("RuleId"), t2.endRuleId = -1, t2.whileRuleId = -2, t2.ruleIdFromNumber = function(e3) {
          return e3;
        }, t2.ruleIdToNumber = function(e3) {
          return e3;
        };
        class a {
          constructor(e3, t3, n2, r2) {
            this.$location = e3, this.id = t3, this._name = n2 || null, this._nameIsCapturing = s.RegexSource.hasCaptures(this._name), this._contentName = r2 || null, this._contentNameIsCapturing = s.RegexSource.hasCaptures(this._contentName);
          }
          get debugName() {
            const e3 = this.$location ? `${s.basename(this.$location.filename)}:${this.$location.line}` : "unknown";
            return `${this.constructor.name}#${this.id} @ ${e3}`;
          }
          getName(e3, t3) {
            return this._nameIsCapturing && null !== this._name && null !== e3 && null !== t3 ? s.RegexSource.replaceCaptures(this._name, e3, t3) : this._name;
          }
          getContentName(e3, t3) {
            return this._contentNameIsCapturing && null !== this._contentName ? s.RegexSource.replaceCaptures(this._contentName, e3, t3) : this._contentName;
          }
        }
        t2.Rule = a;
        class c extends a {
          constructor(e3, t3, n2, s2, r2) {
            super(e3, t3, n2, s2), this.retokenizeCapturedWithRuleId = r2;
          }
          dispose() {
          }
          collectPatterns(e3, t3) {
            throw new Error("Not supported!");
          }
          compile(e3, t3) {
            throw new Error("Not supported!");
          }
          compileAG(e3, t3, n2, s2) {
            throw new Error("Not supported!");
          }
        }
        t2.CaptureRule = c;
        class l extends a {
          constructor(e3, t3, n2, s2, r2) {
            super(e3, t3, n2, null), this._match = new f(s2, this.id), this.captures = r2, this._cachedCompiledPatterns = null;
          }
          dispose() {
            this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(), this._cachedCompiledPatterns = null);
          }
          get debugMatchRegExp() {
            return `${this._match.source}`;
          }
          collectPatterns(e3, t3) {
            t3.push(this._match);
          }
          compile(e3, t3) {
            return this._getCachedCompiledPatterns(e3).compile(e3);
          }
          compileAG(e3, t3, n2, s2) {
            return this._getCachedCompiledPatterns(e3).compileAG(e3, n2, s2);
          }
          _getCachedCompiledPatterns(e3) {
            return this._cachedCompiledPatterns || (this._cachedCompiledPatterns = new m(), this.collectPatterns(e3, this._cachedCompiledPatterns)), this._cachedCompiledPatterns;
          }
        }
        t2.MatchRule = l;
        class u extends a {
          constructor(e3, t3, n2, s2, r2) {
            super(e3, t3, n2, s2), this.patterns = r2.patterns, this.hasMissingPatterns = r2.hasMissingPatterns, this._cachedCompiledPatterns = null;
          }
          dispose() {
            this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(), this._cachedCompiledPatterns = null);
          }
          collectPatterns(e3, t3) {
            for (const n2 of this.patterns) e3.getRule(n2).collectPatterns(e3, t3);
          }
          compile(e3, t3) {
            return this._getCachedCompiledPatterns(e3).compile(e3);
          }
          compileAG(e3, t3, n2, s2) {
            return this._getCachedCompiledPatterns(e3).compileAG(e3, n2, s2);
          }
          _getCachedCompiledPatterns(e3) {
            return this._cachedCompiledPatterns || (this._cachedCompiledPatterns = new m(), this.collectPatterns(e3, this._cachedCompiledPatterns)), this._cachedCompiledPatterns;
          }
        }
        t2.IncludeOnlyRule = u;
        class h extends a {
          constructor(e3, t3, n2, s2, r2, i2, o2, a2, c2, l2) {
            super(e3, t3, n2, s2), this._begin = new f(r2, this.id), this.beginCaptures = i2, this._end = new f(o2 || "\uFFFF", -1), this.endHasBackReferences = this._end.hasBackReferences, this.endCaptures = a2, this.applyEndPatternLast = c2 || false, this.patterns = l2.patterns, this.hasMissingPatterns = l2.hasMissingPatterns, this._cachedCompiledPatterns = null;
          }
          dispose() {
            this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(), this._cachedCompiledPatterns = null);
          }
          get debugBeginRegExp() {
            return `${this._begin.source}`;
          }
          get debugEndRegExp() {
            return `${this._end.source}`;
          }
          getEndWithResolvedBackReferences(e3, t3) {
            return this._end.resolveBackReferences(e3, t3);
          }
          collectPatterns(e3, t3) {
            t3.push(this._begin);
          }
          compile(e3, t3) {
            return this._getCachedCompiledPatterns(e3, t3).compile(e3);
          }
          compileAG(e3, t3, n2, s2) {
            return this._getCachedCompiledPatterns(e3, t3).compileAG(e3, n2, s2);
          }
          _getCachedCompiledPatterns(e3, t3) {
            if (!this._cachedCompiledPatterns) {
              this._cachedCompiledPatterns = new m();
              for (const t4 of this.patterns) e3.getRule(t4).collectPatterns(e3, this._cachedCompiledPatterns);
              this.applyEndPatternLast ? this._cachedCompiledPatterns.push(this._end.hasBackReferences ? this._end.clone() : this._end) : this._cachedCompiledPatterns.unshift(this._end.hasBackReferences ? this._end.clone() : this._end);
            }
            return this._end.hasBackReferences && (this.applyEndPatternLast ? this._cachedCompiledPatterns.setSource(this._cachedCompiledPatterns.length() - 1, t3) : this._cachedCompiledPatterns.setSource(0, t3)), this._cachedCompiledPatterns;
          }
        }
        t2.BeginEndRule = h;
        class p extends a {
          constructor(e3, n2, s2, r2, i2, o2, a2, c2, l2) {
            super(e3, n2, s2, r2), this._begin = new f(i2, this.id), this.beginCaptures = o2, this.whileCaptures = c2, this._while = new f(a2, t2.whileRuleId), this.whileHasBackReferences = this._while.hasBackReferences, this.patterns = l2.patterns, this.hasMissingPatterns = l2.hasMissingPatterns, this._cachedCompiledPatterns = null, this._cachedCompiledWhilePatterns = null;
          }
          dispose() {
            this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(), this._cachedCompiledPatterns = null), this._cachedCompiledWhilePatterns && (this._cachedCompiledWhilePatterns.dispose(), this._cachedCompiledWhilePatterns = null);
          }
          get debugBeginRegExp() {
            return `${this._begin.source}`;
          }
          get debugWhileRegExp() {
            return `${this._while.source}`;
          }
          getWhileWithResolvedBackReferences(e3, t3) {
            return this._while.resolveBackReferences(e3, t3);
          }
          collectPatterns(e3, t3) {
            t3.push(this._begin);
          }
          compile(e3, t3) {
            return this._getCachedCompiledPatterns(e3).compile(e3);
          }
          compileAG(e3, t3, n2, s2) {
            return this._getCachedCompiledPatterns(e3).compileAG(e3, n2, s2);
          }
          _getCachedCompiledPatterns(e3) {
            if (!this._cachedCompiledPatterns) {
              this._cachedCompiledPatterns = new m();
              for (const t3 of this.patterns) e3.getRule(t3).collectPatterns(e3, this._cachedCompiledPatterns);
            }
            return this._cachedCompiledPatterns;
          }
          compileWhile(e3, t3) {
            return this._getCachedCompiledWhilePatterns(e3, t3).compile(e3);
          }
          compileWhileAG(e3, t3, n2, s2) {
            return this._getCachedCompiledWhilePatterns(e3, t3).compileAG(e3, n2, s2);
          }
          _getCachedCompiledWhilePatterns(e3, t3) {
            return this._cachedCompiledWhilePatterns || (this._cachedCompiledWhilePatterns = new m(), this._cachedCompiledWhilePatterns.push(this._while.hasBackReferences ? this._while.clone() : this._while)), this._while.hasBackReferences && this._cachedCompiledWhilePatterns.setSource(0, t3 || "\uFFFF"), this._cachedCompiledWhilePatterns;
          }
        }
        t2.BeginWhileRule = p;
        class d {
          static createCaptureRule(e3, t3, n2, s2, r2) {
            return e3.registerRule(((e4) => new c(t3, e4, n2, s2, r2)));
          }
          static getCompiledRuleId(e3, t3, n2) {
            return e3.id || t3.registerRule(((r2) => {
              if (e3.id = r2, e3.match) return new l(e3.$vscodeTextmateLocation, e3.id, e3.name, e3.match, d._compileCaptures(e3.captures, t3, n2));
              if (void 0 === e3.begin) {
                e3.repository && (n2 = s.mergeObjects({}, n2, e3.repository));
                let r3 = e3.patterns;
                return void 0 === r3 && e3.include && (r3 = [{ include: e3.include }]), new u(e3.$vscodeTextmateLocation, e3.id, e3.name, e3.contentName, d._compilePatterns(r3, t3, n2));
              }
              return e3.while ? new p(e3.$vscodeTextmateLocation, e3.id, e3.name, e3.contentName, e3.begin, d._compileCaptures(e3.beginCaptures || e3.captures, t3, n2), e3.while, d._compileCaptures(e3.whileCaptures || e3.captures, t3, n2), d._compilePatterns(e3.patterns, t3, n2)) : new h(e3.$vscodeTextmateLocation, e3.id, e3.name, e3.contentName, e3.begin, d._compileCaptures(e3.beginCaptures || e3.captures, t3, n2), e3.end, d._compileCaptures(e3.endCaptures || e3.captures, t3, n2), e3.applyEndPatternLast, d._compilePatterns(e3.patterns, t3, n2));
            })), e3.id;
          }
          static _compileCaptures(e3, t3, n2) {
            let s2 = [];
            if (e3) {
              let r2 = 0;
              for (const t4 in e3) {
                if ("$vscodeTextmateLocation" === t4) continue;
                const e4 = parseInt(t4, 10);
                e4 > r2 && (r2 = e4);
              }
              for (let e4 = 0; e4 <= r2; e4++) s2[e4] = null;
              for (const r3 in e3) {
                if ("$vscodeTextmateLocation" === r3) continue;
                const i2 = parseInt(r3, 10);
                let o2 = 0;
                e3[r3].patterns && (o2 = d.getCompiledRuleId(e3[r3], t3, n2)), s2[i2] = d.createCaptureRule(t3, e3[r3].$vscodeTextmateLocation, e3[r3].name, e3[r3].contentName, o2);
              }
            }
            return s2;
          }
          static _compilePatterns(e3, t3, n2) {
            let s2 = [];
            if (e3) for (let i2 = 0, o2 = e3.length; i2 < o2; i2++) {
              const o3 = e3[i2];
              let a2 = -1;
              if (o3.include) {
                const e4 = r.parseInclude(o3.include);
                switch (e4.kind) {
                  case 0:
                  case 1:
                    a2 = d.getCompiledRuleId(n2[o3.include], t3, n2);
                    break;
                  case 2:
                    let s3 = n2[e4.ruleName];
                    s3 && (a2 = d.getCompiledRuleId(s3, t3, n2));
                    break;
                  case 3:
                  case 4:
                    const r2 = e4.scopeName, i3 = 4 === e4.kind ? e4.ruleName : null, c2 = t3.getExternalGrammar(r2, n2);
                    if (c2) if (i3) {
                      let e5 = c2.repository[i3];
                      e5 && (a2 = d.getCompiledRuleId(e5, t3, c2.repository));
                    } else a2 = d.getCompiledRuleId(c2.repository.$self, t3, c2.repository);
                }
              } else a2 = d.getCompiledRuleId(o3, t3, n2);
              if (-1 !== a2) {
                const e4 = t3.getRule(a2);
                let n3 = false;
                if ((e4 instanceof u || e4 instanceof h || e4 instanceof p) && e4.hasMissingPatterns && 0 === e4.patterns.length && (n3 = true), n3) continue;
                s2.push(a2);
              }
            }
            return { patterns: s2, hasMissingPatterns: (e3 ? e3.length : 0) !== s2.length };
          }
        }
        t2.RuleFactory = d;
        class f {
          constructor(e3, t3) {
            if (e3) {
              const t4 = e3.length;
              let n2 = 0, s2 = [], r2 = false;
              for (let i2 = 0; i2 < t4; i2++) if ("\\" === e3.charAt(i2) && i2 + 1 < t4) {
                const t5 = e3.charAt(i2 + 1);
                "z" === t5 ? (s2.push(e3.substring(n2, i2)), s2.push("$(?!\\n)(?<!\\n)"), n2 = i2 + 2) : "A" !== t5 && "G" !== t5 || (r2 = true), i2++;
              }
              this.hasAnchor = r2, 0 === n2 ? this.source = e3 : (s2.push(e3.substring(n2, t4)), this.source = s2.join(""));
            } else this.hasAnchor = false, this.source = e3;
            this.hasAnchor ? this._anchorCache = this._buildAnchorCache() : this._anchorCache = null, this.ruleId = t3, this.hasBackReferences = i.test(this.source);
          }
          clone() {
            return new f(this.source, this.ruleId);
          }
          setSource(e3) {
            this.source !== e3 && (this.source = e3, this.hasAnchor && (this._anchorCache = this._buildAnchorCache()));
          }
          resolveBackReferences(e3, t3) {
            let n2 = t3.map(((t4) => e3.substring(t4.start, t4.end)));
            return o.lastIndex = 0, this.source.replace(o, ((e4, t4) => s.escapeRegExpCharacters(n2[parseInt(t4, 10)] || "")));
          }
          _buildAnchorCache() {
            let e3, t3, n2, s2, r2 = [], i2 = [], o2 = [], a2 = [];
            for (e3 = 0, t3 = this.source.length; e3 < t3; e3++) n2 = this.source.charAt(e3), r2[e3] = n2, i2[e3] = n2, o2[e3] = n2, a2[e3] = n2, "\\" === n2 && e3 + 1 < t3 && (s2 = this.source.charAt(e3 + 1), "A" === s2 ? (r2[e3 + 1] = "\uFFFF", i2[e3 + 1] = "\uFFFF", o2[e3 + 1] = "A", a2[e3 + 1] = "A") : "G" === s2 ? (r2[e3 + 1] = "\uFFFF", i2[e3 + 1] = "G", o2[e3 + 1] = "\uFFFF", a2[e3 + 1] = "G") : (r2[e3 + 1] = s2, i2[e3 + 1] = s2, o2[e3 + 1] = s2, a2[e3 + 1] = s2), e3++);
            return { A0_G0: r2.join(""), A0_G1: i2.join(""), A1_G0: o2.join(""), A1_G1: a2.join("") };
          }
          resolveAnchors(e3, t3) {
            return this.hasAnchor && this._anchorCache ? e3 ? t3 ? this._anchorCache.A1_G1 : this._anchorCache.A1_G0 : t3 ? this._anchorCache.A0_G1 : this._anchorCache.A0_G0 : this.source;
          }
        }
        t2.RegExpSource = f;
        class m {
          constructor() {
            this._items = [], this._hasAnchors = false, this._cached = null, this._anchorCache = { A0_G0: null, A0_G1: null, A1_G0: null, A1_G1: null };
          }
          dispose() {
            this._disposeCaches();
          }
          _disposeCaches() {
            this._cached && (this._cached.dispose(), this._cached = null), this._anchorCache.A0_G0 && (this._anchorCache.A0_G0.dispose(), this._anchorCache.A0_G0 = null), this._anchorCache.A0_G1 && (this._anchorCache.A0_G1.dispose(), this._anchorCache.A0_G1 = null), this._anchorCache.A1_G0 && (this._anchorCache.A1_G0.dispose(), this._anchorCache.A1_G0 = null), this._anchorCache.A1_G1 && (this._anchorCache.A1_G1.dispose(), this._anchorCache.A1_G1 = null);
          }
          push(e3) {
            this._items.push(e3), this._hasAnchors = this._hasAnchors || e3.hasAnchor;
          }
          unshift(e3) {
            this._items.unshift(e3), this._hasAnchors = this._hasAnchors || e3.hasAnchor;
          }
          length() {
            return this._items.length;
          }
          setSource(e3, t3) {
            this._items[e3].source !== t3 && (this._disposeCaches(), this._items[e3].setSource(t3));
          }
          compile(e3) {
            if (!this._cached) {
              let t3 = this._items.map(((e4) => e4.source));
              this._cached = new g(e3, t3, this._items.map(((e4) => e4.ruleId)));
            }
            return this._cached;
          }
          compileAG(e3, t3, n2) {
            return this._hasAnchors ? t3 ? n2 ? (this._anchorCache.A1_G1 || (this._anchorCache.A1_G1 = this._resolveAnchors(e3, t3, n2)), this._anchorCache.A1_G1) : (this._anchorCache.A1_G0 || (this._anchorCache.A1_G0 = this._resolveAnchors(e3, t3, n2)), this._anchorCache.A1_G0) : n2 ? (this._anchorCache.A0_G1 || (this._anchorCache.A0_G1 = this._resolveAnchors(e3, t3, n2)), this._anchorCache.A0_G1) : (this._anchorCache.A0_G0 || (this._anchorCache.A0_G0 = this._resolveAnchors(e3, t3, n2)), this._anchorCache.A0_G0) : this.compile(e3);
          }
          _resolveAnchors(e3, t3, n2) {
            let s2 = this._items.map(((e4) => e4.resolveAnchors(t3, n2)));
            return new g(e3, s2, this._items.map(((e4) => e4.ruleId)));
          }
        }
        t2.RegExpSourceList = m;
        class g {
          constructor(e3, t3, n2) {
            this.regExps = t3, this.rules = n2, this.scanner = e3.createOnigScanner(t3);
          }
          dispose() {
            "function" == typeof this.scanner.dispose && this.scanner.dispose();
          }
          toString() {
            const e3 = [];
            for (let t3 = 0, n2 = this.rules.length; t3 < n2; t3++) e3.push("   - " + this.rules[t3] + ": " + this.regExps[t3]);
            return e3.join("\n");
          }
          findNextMatchSync(e3, t3, n2) {
            const s2 = this.scanner.findNextMatchSync(e3, t3, n2);
            return s2 ? { ruleId: this.rules[s2.index], captureIndices: s2.captureIndices } : null;
          }
        }
        t2.CompiledRule = g;
      }, 63: (e2, t2, n) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.ThemeTrieElement = t2.ThemeTrieElementRule = t2.ColorMap = t2.fontStyleToString = t2.ParsedThemeRule = t2.parseTheme = t2.StyleAttributes = t2.ScopeStack = t2.Theme = void 0;
        const s = n(807);
        class r {
          constructor(e3, t3, n2) {
            this._colorMap = e3, this._defaults = t3, this._root = n2, this._cachedMatchRoot = new s.CachedFn(((e4) => this._root.match(e4)));
          }
          static createFromRawTheme(e3, t3) {
            return this.createFromParsedTheme(c(e3), t3);
          }
          static createFromParsedTheme(e3, t3) {
            return (function(e4, t4) {
              e4.sort(((e5, t5) => {
                let n3 = s.strcmp(e5.scope, t5.scope);
                return 0 !== n3 ? n3 : (n3 = s.strArrCmp(e5.parentScopes, t5.parentScopes), 0 !== n3 ? n3 : e5.index - t5.index);
              }));
              let n2 = 0, i2 = "#000000", o2 = "#ffffff", c2 = "", l2 = 0, h2 = 0;
              for (; e4.length >= 1 && "" === e4[0].scope; ) {
                let t5 = e4.shift();
                -1 !== t5.fontStyle && (n2 = t5.fontStyle), null !== t5.foreground && (i2 = t5.foreground), null !== t5.background && (o2 = t5.background), null !== t5.fontFamily && (c2 = t5.fontFamily), null !== t5.fontSize && (l2 = t5.fontSize), null !== t5.lineHeight && (h2 = t5.lineHeight);
              }
              let f = new u(t4), m = new a(n2, f.getId(i2), f.getId(o2), c2, l2, h2), g = new d(new p(0, null, -1, 0, 0, c2, l2, h2), []);
              for (let t5 = 0, n3 = e4.length; t5 < n3; t5++) {
                let n4 = e4[t5];
                g.insert(0, n4.scope, n4.parentScopes, n4.fontStyle, f.getId(n4.foreground), f.getId(n4.background), n4.fontFamily, n4.fontSize, n4.lineHeight);
              }
              return new r(f, m, g);
            })(e3, t3);
          }
          getColorMap() {
            return this._colorMap.getColorMap();
          }
          getDefaults() {
            return this._defaults;
          }
          match(e3) {
            if (null === e3) return this._defaults;
            const t3 = e3.scopeName, n2 = this._cachedMatchRoot.get(t3).find(((t4) => (function(e4, t5) {
              if (0 === t5.length) return true;
              for (let n3 = 0; n3 < t5.length; n3++) {
                let s2 = t5[n3], r2 = false;
                if (">" === s2) {
                  if (n3 === t5.length - 1) return false;
                  s2 = t5[++n3], r2 = true;
                }
                for (; e4 && !o(e4.scopeName, s2); ) {
                  if (r2) return false;
                  e4 = e4.parent;
                }
                if (!e4) return false;
                e4 = e4.parent;
              }
              return true;
            })(e3.parent, t4.parentScopes)));
            return n2 ? new a(n2.fontStyle, n2.foreground, n2.background, n2.fontFamily, n2.fontSize, n2.lineHeight) : null;
          }
        }
        t2.Theme = r;
        class i {
          constructor(e3, t3) {
            this.parent = e3, this.scopeName = t3;
          }
          static push(e3, t3) {
            for (const n2 of t3) e3 = new i(e3, n2);
            return e3;
          }
          static from(...e3) {
            let t3 = null;
            for (let n2 = 0; n2 < e3.length; n2++) t3 = new i(t3, e3[n2]);
            return t3;
          }
          push(e3) {
            return new i(this, e3);
          }
          getSegments() {
            let e3 = this;
            const t3 = [];
            for (; e3; ) t3.push(e3.scopeName), e3 = e3.parent;
            return t3.reverse(), t3;
          }
          toString() {
            return this.getSegments().join(" ");
          }
          extends(e3) {
            return this === e3 || null !== this.parent && this.parent.extends(e3);
          }
          getExtensionIfDefined(e3) {
            const t3 = [];
            let n2 = this;
            for (; n2 && n2 !== e3; ) t3.push(n2.scopeName), n2 = n2.parent;
            return n2 === e3 ? t3.reverse() : void 0;
          }
        }
        function o(e3, t3) {
          return t3 === e3 || e3.startsWith(t3) && "." === e3[t3.length];
        }
        t2.ScopeStack = i;
        class a {
          constructor(e3, t3, n2, s2, r2, i2) {
            this.fontStyle = e3, this.foregroundId = t3, this.backgroundId = n2, this.fontFamily = s2, this.fontSize = r2, this.lineHeight = i2;
          }
        }
        function c(e3) {
          if (!e3) return [];
          if (!e3.settings || !Array.isArray(e3.settings)) return [];
          let t3 = e3.settings, n2 = [], r2 = 0;
          for (let e4 = 0, i2 = t3.length; e4 < i2; e4++) {
            let i3, o2 = t3[e4];
            if (!o2.settings) continue;
            if ("string" == typeof o2.scope) {
              let e5 = o2.scope;
              e5 = e5.replace(/^[,]+/, ""), e5 = e5.replace(/[,]+$/, ""), i3 = e5.split(",");
            } else i3 = Array.isArray(o2.scope) ? o2.scope : [""];
            let a2 = -1;
            if ("string" == typeof o2.settings.fontStyle) {
              a2 = 0;
              let e5 = o2.settings.fontStyle.split(" ");
              for (let t4 = 0, n3 = e5.length; t4 < n3; t4++) switch (e5[t4]) {
                case "italic":
                  a2 |= 1;
                  break;
                case "bold":
                  a2 |= 2;
                  break;
                case "underline":
                  a2 |= 4;
                  break;
                case "strikethrough":
                  a2 |= 8;
              }
            }
            let c2 = null;
            "string" == typeof o2.settings.foreground && s.isValidHexColor(o2.settings.foreground) && (c2 = o2.settings.foreground);
            let u2 = null;
            "string" == typeof o2.settings.background && s.isValidHexColor(o2.settings.background) && (u2 = o2.settings.background);
            let h2 = "";
            "string" == typeof o2.settings.fontFamily && (h2 = o2.settings.fontFamily);
            let p2 = 0;
            "number" == typeof o2.settings.fontSize && (p2 = o2.settings.fontSize);
            let d2 = 0;
            "number" == typeof o2.settings.lineHeight && (d2 = o2.settings.lineHeight);
            for (let t4 = 0, s2 = i3.length; t4 < s2; t4++) {
              let s3 = i3[t4].trim().split(" "), o3 = s3[s3.length - 1], f = null;
              s3.length > 1 && (f = s3.slice(0, s3.length - 1), f.reverse()), n2[r2++] = new l(o3, f, e4, a2, c2, u2, h2, p2, d2);
            }
          }
          return n2;
        }
        t2.StyleAttributes = a, t2.parseTheme = c;
        class l {
          constructor(e3, t3, n2, s2, r2, i2, o2, a2, c2) {
            this.scope = e3, this.parentScopes = t3, this.index = n2, this.fontStyle = s2, this.foreground = r2, this.background = i2, this.fontFamily = o2, this.fontSize = a2, this.lineHeight = c2;
          }
        }
        t2.ParsedThemeRule = l, t2.fontStyleToString = function(e3) {
          if (-1 === e3) return "not set";
          let t3 = "";
          return 1 & e3 && (t3 += "italic "), 2 & e3 && (t3 += "bold "), 4 & e3 && (t3 += "underline "), 8 & e3 && (t3 += "strikethrough "), "" === t3 && (t3 = "none"), t3.trim();
        };
        class u {
          constructor(e3) {
            if (this._lastColorId = 0, this._id2color = [], this._color2id = /* @__PURE__ */ Object.create(null), Array.isArray(e3)) {
              this._isFrozen = true;
              for (let t3 = 0, n2 = e3.length; t3 < n2; t3++) this._color2id[e3[t3]] = t3, this._id2color[t3] = e3[t3];
            } else this._isFrozen = false;
          }
          getId(e3) {
            if (null === e3) return 0;
            e3 = e3.toUpperCase();
            let t3 = this._color2id[e3];
            if (t3) return t3;
            if (this._isFrozen) throw new Error(`Missing color in color map - ${e3}`);
            return t3 = ++this._lastColorId, this._color2id[e3] = t3, this._id2color[t3] = e3, t3;
          }
          getColorMap() {
            return this._id2color.slice(0);
          }
        }
        t2.ColorMap = u;
        const h = Object.freeze([]);
        class p {
          constructor(e3, t3, n2, s2, r2, i2, o2, a2) {
            this.scopeDepth = e3, this.parentScopes = t3 || h, this.fontStyle = n2, this.foreground = s2, this.background = r2, this.fontFamily = i2, this.fontSize = o2, this.lineHeight = a2;
          }
          clone() {
            return new p(this.scopeDepth, this.parentScopes, this.fontStyle, this.foreground, this.background, this.fontFamily, this.fontSize, this.lineHeight);
          }
          static cloneArr(e3) {
            let t3 = [];
            for (let n2 = 0, s2 = e3.length; n2 < s2; n2++) t3[n2] = e3[n2].clone();
            return t3;
          }
          acceptOverwrite(e3, t3, n2, s2, r2, i2, o2) {
            this.scopeDepth > e3 ? console.log("how did this happen?") : this.scopeDepth = e3, -1 !== t3 && (this.fontStyle = t3), 0 !== n2 && (this.foreground = n2), 0 !== s2 && (this.background = s2), "" !== r2 && (this.fontFamily = r2), 0 !== i2 && (this.fontSize = i2), 0 !== o2 && (this.lineHeight = o2);
          }
        }
        t2.ThemeTrieElementRule = p;
        class d {
          constructor(e3, t3 = [], n2 = {}) {
            this._mainRule = e3, this._children = n2, this._rulesWithParentScopes = t3;
          }
          static _cmpBySpecificity(e3, t3) {
            if (e3.scopeDepth !== t3.scopeDepth) return t3.scopeDepth - e3.scopeDepth;
            let n2 = 0, s2 = 0;
            for (; ">" === e3.parentScopes[n2] && n2++, ">" === t3.parentScopes[s2] && s2++, !(n2 >= e3.parentScopes.length || s2 >= t3.parentScopes.length); ) {
              const r2 = t3.parentScopes[s2].length - e3.parentScopes[n2].length;
              if (0 !== r2) return r2;
              n2++, s2++;
            }
            return t3.parentScopes.length - e3.parentScopes.length;
          }
          match(e3) {
            if ("" !== e3) {
              let t4, n2, s2 = e3.indexOf(".");
              if (-1 === s2 ? (t4 = e3, n2 = "") : (t4 = e3.substring(0, s2), n2 = e3.substring(s2 + 1)), this._children.hasOwnProperty(t4)) return this._children[t4].match(n2);
            }
            const t3 = this._rulesWithParentScopes.concat(this._mainRule);
            return t3.sort(d._cmpBySpecificity), t3;
          }
          insert(e3, t3, n2, s2, r2, i2, o2, a2, c2) {
            if ("" === t3) return void this._doInsertHere(e3, n2, s2, r2, i2, o2, a2, c2);
            let l2, u2, h2, f = t3.indexOf(".");
            -1 === f ? (l2 = t3, u2 = "") : (l2 = t3.substring(0, f), u2 = t3.substring(f + 1)), this._children.hasOwnProperty(l2) ? h2 = this._children[l2] : (h2 = new d(this._mainRule.clone(), p.cloneArr(this._rulesWithParentScopes)), this._children[l2] = h2), h2.insert(e3 + 1, u2, n2, s2, r2, i2, o2, a2, c2);
          }
          _doInsertHere(e3, t3, n2, r2, i2, o2, a2, c2) {
            if (null !== t3) {
              for (let l2 = 0, u2 = this._rulesWithParentScopes.length; l2 < u2; l2++) {
                let u3 = this._rulesWithParentScopes[l2];
                if (0 === s.strArrCmp(u3.parentScopes, t3)) return void u3.acceptOverwrite(e3, n2, r2, i2, o2, a2, c2);
              }
              -1 === n2 && (n2 = this._mainRule.fontStyle), 0 === r2 && (r2 = this._mainRule.foreground), 0 === i2 && (i2 = this._mainRule.background), "" === o2 && (o2 = this._mainRule.fontFamily), 0 === a2 && (a2 = this._mainRule.fontSize), 0 === c2 && (c2 = this._mainRule.lineHeight), this._rulesWithParentScopes.push(new p(e3, t3, n2, r2, i2, o2, a2, c2));
            } else this._mainRule.acceptOverwrite(e3, n2, r2, i2, o2, a2, c2);
          }
        }
        t2.ThemeTrieElement = d;
      }, 807: (e2, t2) => {
        function n(e3) {
          return Array.isArray(e3) ? (function(e4) {
            let t3 = [];
            for (let s2 = 0, r2 = e4.length; s2 < r2; s2++) t3[s2] = n(e4[s2]);
            return t3;
          })(e3) : "object" == typeof e3 ? (function(e4) {
            let t3 = {};
            for (let s2 in e4) t3[s2] = n(e4[s2]);
            return t3;
          })(e3) : e3;
        }
        Object.defineProperty(t2, "__esModule", { value: true }), t2.containsRTL = t2.performanceNow = t2.CachedFn = t2.escapeRegExpCharacters = t2.isValidHexColor = t2.strArrCmp = t2.strcmp = t2.RegexSource = t2.basename = t2.mergeObjects = t2.clone = void 0, t2.clone = function(e3) {
          return n(e3);
        }, t2.mergeObjects = function(e3, ...t3) {
          return t3.forEach(((t4) => {
            for (let n2 in t4) e3[n2] = t4[n2];
          })), e3;
        }, t2.basename = function e3(t3) {
          const n2 = ~t3.lastIndexOf("/") || ~t3.lastIndexOf("\\");
          return 0 === n2 ? t3 : ~n2 == t3.length - 1 ? e3(t3.substring(0, t3.length - 1)) : t3.substr(1 + ~n2);
        };
        let s, r = /\$(\d+)|\${(\d+):\/(downcase|upcase)}/g;
        function i(e3, t3) {
          return e3 < t3 ? -1 : e3 > t3 ? 1 : 0;
        }
        t2.RegexSource = class {
          static hasCaptures(e3) {
            return null !== e3 && (r.lastIndex = 0, r.test(e3));
          }
          static replaceCaptures(e3, t3, n2) {
            return e3.replace(r, ((e4, s2, r2, i2) => {
              let o = n2[parseInt(s2 || r2, 10)];
              if (!o) return e4;
              {
                let e5 = t3.substring(o.start, o.end);
                for (; "." === e5[0]; ) e5 = e5.substring(1);
                switch (i2) {
                  case "downcase":
                    return e5.toLowerCase();
                  case "upcase":
                    return e5.toUpperCase();
                  default:
                    return e5;
                }
              }
            }));
          }
        }, t2.strcmp = i, t2.strArrCmp = function(e3, t3) {
          if (null === e3 && null === t3) return 0;
          if (!e3) return -1;
          if (!t3) return 1;
          let n2 = e3.length, s2 = t3.length;
          if (n2 === s2) {
            for (let s3 = 0; s3 < n2; s3++) {
              let n3 = i(e3[s3], t3[s3]);
              if (0 !== n3) return n3;
            }
            return 0;
          }
          return n2 - s2;
        }, t2.isValidHexColor = function(e3) {
          return !!(/^#[0-9a-f]{6}$/i.test(e3) || /^#[0-9a-f]{8}$/i.test(e3) || /^#[0-9a-f]{3}$/i.test(e3) || /^#[0-9a-f]{4}$/i.test(e3));
        }, t2.escapeRegExpCharacters = function(e3) {
          return e3.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&");
        }, t2.CachedFn = class {
          constructor(e3) {
            this.fn = e3, this.cache = /* @__PURE__ */ new Map();
          }
          get(e3) {
            if (this.cache.has(e3)) return this.cache.get(e3);
            const t3 = this.fn(e3);
            return this.cache.set(e3, t3), t3;
          }
        }, t2.performanceNow = "undefined" == typeof performance ? function() {
          return Date.now();
        } : function() {
          return performance.now();
        }, t2.containsRTL = function(e3) {
          return s || (s = /(?:[\u05BE\u05C0\u05C3\u05C6\u05D0-\u05F4\u0608\u060B\u060D\u061B-\u064A\u066D-\u066F\u0671-\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u0710\u0712-\u072F\u074D-\u07A5\u07B1-\u07EA\u07F4\u07F5\u07FA\u07FE-\u0815\u081A\u0824\u0828\u0830-\u0858\u085E-\u088E\u08A0-\u08C9\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFD3D\uFD50-\uFDC7\uFDF0-\uFDFC\uFE70-\uFEFC]|\uD802[\uDC00-\uDD1B\uDD20-\uDE00\uDE10-\uDE35\uDE40-\uDEE4\uDEEB-\uDF35\uDF40-\uDFFF]|\uD803[\uDC00-\uDD23\uDE80-\uDEA9\uDEAD-\uDF45\uDF51-\uDF81\uDF86-\uDFF6]|\uD83A[\uDC00-\uDCCF\uDD00-\uDD43\uDD4B-\uDFFF]|\uD83B[\uDC00-\uDEBB])/), s.test(e3);
        };
      } }, t = {};
      return (function n(s) {
        var r = t[s];
        if (void 0 !== r) return r.exports;
        var i = t[s] = { exports: {} };
        return e[s].call(i.exports, i, i.exports, n), i.exports;
      })(625);
    })()));
  }
});

// node_modules/@molang/alogjs/dist/index.js
var Level = {
  Verbose: 0,
  Debug: 1,
  Info: 2,
  Warning: 3,
  Error: 4,
  Fatal: 5
};
var LevelVerbose = Level.Verbose;
var LevelDebug = Level.Debug;
var LevelInfo = Level.Info;
var LevelWarning = Level.Warning;
var LevelError = Level.Error;
var LevelFatal = Level.Fatal;
var FlagScreen = 1 << 0;
var FlagFile = 1 << 1;
var FlagColor = 1 << 2;
var FlagShortFile = 1 << 0;
var FlagLongFile = 1 << 1;
var FlagFunc = 1 << 2;
var LogFormat = {
  Text: 0,
  JSON: 1
};
var FormatText = LogFormat.Text;
var FormatJSON = LogFormat.JSON;
var defaultFlags = FlagScreen | FlagColor;
var callerSkip = 5;
var ALogger = class {
  constructor(runtime = browserRuntime) {
    __publicField(this, "output");
    __publicField(this, "flags", defaultFlags);
    __publicField(this, "screenFormat", FormatText);
    __publicField(this, "fileFormat", FormatText);
    __publicField(this, "dir", "");
    __publicField(this, "filePrefix", "");
    __publicField(this, "level", LevelVerbose);
    __publicField(this, "callerLevel", LevelFatal);
    __publicField(this, "callerFlags", 0);
    __publicField(this, "times", /* @__PURE__ */ new Map());
    __publicField(this, "nextTimeID", 0);
    __publicField(this, "runtime");
    this.runtime = runtime;
    this.output = browserWriter;
  }
  V(tag, format, ...msg) {
    this.log(LevelVerbose, tag, format, ...msg);
  }
  D(tag, format, ...msg) {
    this.log(LevelDebug, tag, format, ...msg);
  }
  I(tag, format, ...msg) {
    this.log(LevelInfo, tag, format, ...msg);
  }
  W(tag, format, ...msg) {
    this.log(LevelWarning, tag, format, ...msg);
  }
  E(tag, format, ...msg) {
    this.log(LevelError, tag, format, ...msg);
  }
  Fatal(tag, format, ...msg) {
    this.log(LevelFatal, tag, format, ...msg);
    this.writeStack();
    return this.runtime.exit(1);
  }
  Time() {
    this.nextTimeID += 1;
    this.times.set(this.nextTimeID, this.runtime.nowNs());
    return this.nextTimeID;
  }
  TimeEnd(id, tag, format, ...msg) {
    const start = this.times.get(id);
    if (start === void 0) {
      this.D(tag, format, ...msg);
      return;
    }
    this.times.delete(id);
    let message = formatMessage(format, ...msg);
    if (message !== "") {
      message += " ";
    }
    message += `elapsed=${formatDuration(this.runtime.nowNs() - start)}`;
    this.D(tag, "%s", message);
  }
  SetOutput(w) {
    this.output = w === null ? { write() {
    } } : w;
  }
  Flags() {
    return this.flags;
  }
  SetFlags(flag) {
    this.flags = flag;
  }
  Format() {
    return [this.screenFormat, this.fileFormat];
  }
  SetFormat(screen, file) {
    this.screenFormat = screen;
    this.fileFormat = file;
  }
  Dir() {
    return this.dir;
  }
  SetDir(dir) {
    this.dir = dir;
    this.runtime.closeFile?.();
  }
  FilePrefix() {
    return this.filePrefix;
  }
  SetFilePrefix(prefix) {
    this.filePrefix = prefix;
    this.runtime.closeFile?.();
  }
  Level() {
    return this.level;
  }
  SetLevel(level) {
    this.level = level;
  }
  CallerFlags() {
    return [this.callerLevel, this.callerFlags];
  }
  SetCallerFlags(level, flags) {
    this.callerLevel = level;
    this.callerFlags = flags;
  }
  log(level, tag, format, ...msg) {
    if (level < this.level && level < LevelError) {
      return;
    }
    if ((this.flags & FlagScreen) !== 0) {
      const line = this.formatLine(level, tag, format, this.screenFormat, ...msg);
      if (this.screenFormat === FormatText && (this.flags & FlagColor) !== 0) {
        this.output.write(`${levelColor(level)}${line}\x1B[0m
`);
      } else {
        this.output.write(`${line}
`);
      }
    }
    if ((this.flags & FlagFile) !== 0 && this.runtime.writeFileLine !== void 0) {
      const line = this.formatLine(level, tag, format, this.fileFormat, ...msg);
      this.runtime.writeFileLine(line, /* @__PURE__ */ new Date(), this.dir, this.filePrefix);
    }
  }
  formatLine(level, tag, format, outputFormat, ...msg) {
    const now = /* @__PURE__ */ new Date();
    const message = formatMessage(format, ...msg);
    const caller = this.callerInfo(level);
    const pid = this.runtime.pid();
    if (outputFormat === FormatJSON) {
      return this.formatJSONLine(formatDateTime(now), levelLetter(level), pid, tag, caller, message, "");
    }
    const parts = [formatDateTime(now), levelLetter(level), `${pid}`];
    if (tag !== "") {
      parts.push(tag);
    }
    if (caller.file !== "") {
      parts.push(caller.file);
    }
    if (caller.fn !== "") {
      parts.push(caller.fn);
    }
    if (message !== "") {
      parts.push(message);
    }
    return parts.join("|");
  }
  formatJSONLine(now, level, pid, tag, caller, message, stack) {
    let out = `{"time":"${now}","level":"${level}","pid":${pid}`;
    if (tag !== "") {
      out += `,"tag":${quoteJSON(tag)}`;
    }
    if (caller.file !== "") {
      out += `,"file":${quoteJSON(caller.file)}`;
    }
    if (caller.fn !== "") {
      out += `,"func":${quoteJSON(caller.fn)}`;
    }
    if (message !== "") {
      out += ',"msg":';
      out += isJSONValue(message) ? message : quoteJSON(message);
    }
    if (stack !== "") {
      out += `,"stack":${quoteJSON(stack)}`;
    }
    out += "}";
    return out;
  }
  callerInfo(level) {
    if (this.callerFlags === 0 || level < this.callerLevel) {
      return { file: "", fn: "" };
    }
    const stack = this.runtime.stack();
    if (stack === "") {
      return { file: "", fn: "" };
    }
    const lines2 = stack.split("\n").slice(1);
    const line = lines2[callerSkip];
    if (line === void 0) {
      return { file: "", fn: "" };
    }
    const parsed = parseStackLine(line);
    if (parsed === null) {
      return { file: "", fn: "" };
    }
    let file = "";
    if ((this.callerFlags & FlagLongFile) !== 0) {
      file = `${parsed.file}:${parsed.line}`;
    } else if ((this.callerFlags & FlagShortFile) !== 0) {
      file = `${this.runtime.shortPath(parsed.file)}:${parsed.line}`;
    }
    return {
      file,
      fn: (this.callerFlags & FlagFunc) !== 0 ? parsed.fn : ""
    };
  }
  writeStack() {
    const stack = this.runtime.stack().trimEnd();
    if ((this.flags & FlagScreen) !== 0) {
      let line = stack;
      if (this.screenFormat === FormatJSON) {
        line = this.formatJSONLine(formatDateTime(/* @__PURE__ */ new Date()), levelLetter(LevelFatal), this.runtime.pid(), "", { file: "", fn: "" }, "", stack);
      }
      if (this.screenFormat === FormatText && (this.flags & FlagColor) !== 0) {
        this.output.write(`${levelColor(LevelFatal)}${line}\x1B[0m
`);
      } else {
        this.output.write(`${line}
`);
      }
    }
    if ((this.flags & FlagFile) !== 0 && this.runtime.writeFileLine !== void 0) {
      let line = stack;
      if (this.fileFormat === FormatJSON) {
        line = this.formatJSONLine(formatDateTime(/* @__PURE__ */ new Date()), levelLetter(LevelFatal), this.runtime.pid(), "", { file: "", fn: "" }, "", stack);
      }
      this.runtime.writeFileLine(line, /* @__PURE__ */ new Date(), this.dir, this.filePrefix);
    }
  }
};
var browserWriter = {
  write(text) {
    const value = text.endsWith("\n") ? text.slice(0, -1) : text;
    console.log(value);
  }
};
var browserRuntime = {
  pid() {
    return 0;
  },
  nowNs() {
    const now = globalThis.performance?.now?.() ?? Date.now();
    return BigInt(Math.floor(now * 1e6));
  },
  stack() {
    return new Error().stack ?? "";
  },
  exit(code) {
    throw new Error(`alog fatal exit ${code}`);
  },
  shortPath
};
function createLogger(runtime = browserRuntime) {
  return new ALogger(runtime);
}
var log = createLogger();
function formatDateTime(date) {
  return `${formatDate(date)} ${pad2(date.getHours())}:${pad2(date.getMinutes())}:${pad2(date.getSeconds())}.${pad3(date.getMilliseconds())}`;
}
function formatDate(date) {
  return `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())}`;
}
function pad2(n) {
  return n < 10 ? `0${n}` : `${n}`;
}
function pad3(n) {
  if (n < 10) {
    return `00${n}`;
  }
  if (n < 100) {
    return `0${n}`;
  }
  return `${n}`;
}
function levelLetter(level) {
  switch (level) {
    case LevelVerbose:
      return "V";
    case LevelDebug:
      return "D";
    case LevelInfo:
      return "I";
    case LevelWarning:
      return "W";
    case LevelError:
      return "E";
    case LevelFatal:
      return "F";
    default:
      return "I";
  }
}
function levelColor(level) {
  switch (level) {
    case LevelVerbose:
      return "\x1B[37m";
    case LevelDebug:
      return "\x1B[34m";
    case LevelInfo:
      return "\x1B[32m";
    case LevelWarning:
      return "\x1B[33m";
    case LevelError:
    case LevelFatal:
      return "\x1B[31m";
    default:
      return "";
  }
}
function quoteJSON(s) {
  return JSON.stringify(s);
}
function isJSONValue(s) {
  let start = 0;
  while (start < s.length && isJSONSpace(s.charCodeAt(start))) {
    start++;
  }
  if (start >= s.length) {
    return false;
  }
  let end = s.length - 1;
  while (end > start && isJSONSpace(s.charCodeAt(end))) {
    end--;
  }
  const first = s[start];
  if (first === "{") {
    if (s[end] !== "}") {
      return false;
    }
    let next = start + 1;
    while (next < end && isJSONSpace(s.charCodeAt(next))) {
      next++;
    }
    return next < end && s[next] === '"';
  }
  if (first === "[") {
    return s[end] === "]";
  }
  return false;
}
function isJSONSpace(code) {
  return code === 32 || code === 10 || code === 13 || code === 9;
}
function formatDuration(ns) {
  if (ns < 1000n) {
    return `${ns}ns`;
  }
  if (ns < 1000000n) {
    return `${Number(ns) / 1e3}us`;
  }
  if (ns < 1000000000n) {
    return `${Number(ns) / 1e6}ms`;
  }
  return `${Number(ns) / 1e9}s`;
}
function formatMessage(format, ...msg) {
  let index = 0;
  let out = format.replace(/%[sdv]/g, (token) => {
    if (index >= msg.length) {
      return token;
    }
    const value = msg[index];
    index += 1;
    if (token === "%d") {
      return Number(value).toString();
    }
    return String(value);
  });
  for (; index < msg.length; index += 1) {
    out += ` ${String(msg[index])}`;
  }
  return out;
}
function parseStackLine(line) {
  const text = line.trim();
  let match = /^at (.+) \((.+):(\d+):(\d+)\)$/.exec(text);
  if (match !== null) {
    return { fn: match[1], file: normalizeFile(match[2]), line: Number(match[3]) };
  }
  match = /^at (.+):(\d+):(\d+)$/.exec(text);
  if (match !== null) {
    return { fn: "", file: normalizeFile(match[1]), line: Number(match[2]) };
  }
  return null;
}
function normalizeFile(file) {
  if (file.startsWith("file://")) {
    try {
      return new URL(file).pathname;
    } catch {
      return file;
    }
  }
  return file;
}
function shortPath(file) {
  const slash = file.lastIndexOf("/");
  const backslash = file.lastIndexOf("\\");
  const index = Math.max(slash, backslash);
  return index >= 0 ? file.slice(index + 1) : file;
}

// src/worker/highlight.worker.ts
var import_vscode_oniguruma = __toESM(require_main(), 1);
var import_vscode_textmate = __toESM(require_main2(), 1);

// src/themes/dark-plus.json
var dark_plus_default = { colors: { "actionBar.toggledBackground": "#383a49", "activityBarBadge.background": "#007ACC", "checkbox.border": "#6B6B6B", "editor.background": "#1E1E1E", "editor.foreground": "#D4D4D4", "editor.inactiveSelectionBackground": "#3A3D41", "editor.selectionHighlightBackground": "#ADD6FF26", "editorIndentGuide.activeBackground1": "#707070", "editorIndentGuide.background1": "#404040", "input.placeholderForeground": "#A6A6A6", "list.activeSelectionIconForeground": "#FFF", "list.dropBackground": "#383B3D", "menu.background": "#252526", "menu.border": "#454545", "menu.foreground": "#CCCCCC", "menu.selectionBackground": "#0078d4", "menu.separatorBackground": "#454545", "ports.iconRunningProcessForeground": "#369432", "sideBarSectionHeader.background": "#0000", "sideBarSectionHeader.border": "#ccc3", "sideBarTitle.foreground": "#BBBBBB", "statusBarItem.remoteBackground": "#16825D", "statusBarItem.remoteForeground": "#FFF", "tab.lastPinnedBorder": "#ccc3", "tab.selectedBackground": "#222222", "tab.selectedForeground": "#ffffffa0", "terminal.inactiveSelectionBackground": "#3A3D41", "widget.border": "#303031" }, displayName: "Dark Plus", name: "dark-plus", semanticHighlighting: true, semanticTokenColors: { customLiteral: "#DCDCAA", newOperator: "#C586C0", numberLiteral: "#b5cea8", stringLiteral: "#ce9178" }, tokenColors: [{ scope: ["meta.embedded", "source.groovy.embedded", "string meta.image.inline.markdown", "variable.legacy.builtin.python"], settings: { foreground: "#D4D4D4" } }, { scope: "emphasis", settings: { fontStyle: "italic" } }, { scope: "strong", settings: { fontStyle: "bold" } }, { scope: "header", settings: { foreground: "#000080" } }, { scope: "comment", settings: { foreground: "#6A9955" } }, { scope: "constant.language", settings: { foreground: "#569cd6" } }, { scope: ["constant.numeric", "variable.other.enummember", "keyword.operator.plus.exponent", "keyword.operator.minus.exponent"], settings: { foreground: "#b5cea8" } }, { scope: "constant.regexp", settings: { foreground: "#646695" } }, { scope: "entity.name.tag", settings: { foreground: "#569cd6" } }, { scope: ["entity.name.tag.css", "entity.name.tag.less"], settings: { foreground: "#d7ba7d" } }, { scope: "entity.other.attribute-name", settings: { foreground: "#9cdcfe" } }, { scope: ["entity.other.attribute-name.class.css", "source.css entity.other.attribute-name.class", "entity.other.attribute-name.id.css", "entity.other.attribute-name.parent-selector.css", "entity.other.attribute-name.parent.less", "source.css entity.other.attribute-name.pseudo-class", "entity.other.attribute-name.pseudo-element.css", "source.css.less entity.other.attribute-name.id", "entity.other.attribute-name.scss"], settings: { foreground: "#d7ba7d" } }, { scope: "invalid", settings: { foreground: "#f44747" } }, { scope: "markup.underline", settings: { fontStyle: "underline" } }, { scope: "markup.bold", settings: { fontStyle: "bold", foreground: "#569cd6" } }, { scope: "markup.heading", settings: { fontStyle: "bold", foreground: "#569cd6" } }, { scope: "markup.italic", settings: { fontStyle: "italic" } }, { scope: "markup.strikethrough", settings: { fontStyle: "strikethrough" } }, { scope: "markup.inserted", settings: { foreground: "#b5cea8" } }, { scope: "markup.deleted", settings: { foreground: "#ce9178" } }, { scope: "markup.changed", settings: { foreground: "#569cd6" } }, { scope: "punctuation.definition.quote.begin.markdown", settings: { foreground: "#6A9955" } }, { scope: "punctuation.definition.list.begin.markdown", settings: { foreground: "#6796e6" } }, { scope: "markup.inline.raw", settings: { foreground: "#ce9178" } }, { scope: "punctuation.definition.tag", settings: { foreground: "#808080" } }, { scope: ["meta.preprocessor", "entity.name.function.preprocessor"], settings: { foreground: "#569cd6" } }, { scope: "meta.preprocessor.string", settings: { foreground: "#ce9178" } }, { scope: "meta.preprocessor.numeric", settings: { foreground: "#b5cea8" } }, { scope: "meta.structure.dictionary.key.python", settings: { foreground: "#9cdcfe" } }, { scope: "meta.diff.header", settings: { foreground: "#569cd6" } }, { scope: "storage", settings: { foreground: "#569cd6" } }, { scope: "storage.type", settings: { foreground: "#569cd6" } }, { scope: ["storage.modifier", "keyword.operator.noexcept"], settings: { foreground: "#569cd6" } }, { scope: ["string", "meta.embedded.assembly"], settings: { foreground: "#ce9178" } }, { scope: "string.tag", settings: { foreground: "#ce9178" } }, { scope: "string.value", settings: { foreground: "#ce9178" } }, { scope: "string.regexp", settings: { foreground: "#d16969" } }, { scope: ["punctuation.definition.template-expression.begin", "punctuation.definition.template-expression.end", "punctuation.section.embedded"], settings: { foreground: "#569cd6" } }, { scope: ["meta.template.expression"], settings: { foreground: "#d4d4d4" } }, { scope: ["support.type.vendored.property-name", "support.type.property-name", "source.css variable", "source.coffee.embedded"], settings: { foreground: "#9cdcfe" } }, { scope: "keyword", settings: { foreground: "#569cd6" } }, { scope: "keyword.control", settings: { foreground: "#569cd6" } }, { scope: "keyword.operator", settings: { foreground: "#d4d4d4" } }, { scope: ["keyword.operator.new", "keyword.operator.expression", "keyword.operator.cast", "keyword.operator.sizeof", "keyword.operator.alignof", "keyword.operator.typeid", "keyword.operator.alignas", "keyword.operator.instanceof", "keyword.operator.logical.python", "keyword.operator.wordlike"], settings: { foreground: "#569cd6" } }, { scope: "keyword.other.unit", settings: { foreground: "#b5cea8" } }, { scope: ["punctuation.section.embedded.begin.php", "punctuation.section.embedded.end.php"], settings: { foreground: "#569cd6" } }, { scope: "support.function.git-rebase", settings: { foreground: "#9cdcfe" } }, { scope: "constant.sha.git-rebase", settings: { foreground: "#b5cea8" } }, { scope: ["storage.modifier.import.java", "variable.language.wildcard.java", "storage.modifier.package.java"], settings: { foreground: "#d4d4d4" } }, { scope: "variable.language", settings: { foreground: "#569cd6" } }, { scope: ["entity.name.function", "support.function", "support.constant.handlebars", "source.powershell variable.other.member", "entity.name.operator.custom-literal"], settings: { foreground: "#DCDCAA" } }, { scope: ["support.class", "support.type", "entity.name.type", "entity.name.namespace", "entity.other.attribute", "entity.name.scope-resolution", "entity.name.class", "storage.type.numeric.go", "storage.type.byte.go", "storage.type.boolean.go", "storage.type.string.go", "storage.type.uintptr.go", "storage.type.error.go", "storage.type.rune.go", "storage.type.cs", "storage.type.generic.cs", "storage.type.modifier.cs", "storage.type.variable.cs", "storage.type.annotation.java", "storage.type.generic.java", "storage.type.java", "storage.type.object.array.java", "storage.type.primitive.array.java", "storage.type.primitive.java", "storage.type.token.java", "storage.type.groovy", "storage.type.annotation.groovy", "storage.type.parameters.groovy", "storage.type.generic.groovy", "storage.type.object.array.groovy", "storage.type.primitive.array.groovy", "storage.type.primitive.groovy"], settings: { foreground: "#4EC9B0" } }, { scope: ["meta.type.cast.expr", "meta.type.new.expr", "support.constant.math", "support.constant.dom", "support.constant.json", "entity.other.inherited-class", "punctuation.separator.namespace.ruby"], settings: { foreground: "#4EC9B0" } }, { scope: ["keyword.control", "source.cpp keyword.operator.new", "keyword.operator.delete", "keyword.other.using", "keyword.other.directive.using", "keyword.other.operator", "entity.name.operator"], settings: { foreground: "#C586C0" } }, { scope: ["variable", "meta.definition.variable.name", "support.variable", "entity.name.variable", "constant.other.placeholder"], settings: { foreground: "#9CDCFE" } }, { scope: ["variable.other.constant", "variable.other.enummember"], settings: { foreground: "#4FC1FF" } }, { scope: ["meta.object-literal.key"], settings: { foreground: "#9CDCFE" } }, { scope: ["support.constant.property-value", "support.constant.font-name", "support.constant.media-type", "support.constant.media", "constant.other.color.rgb-value", "constant.other.rgb-value", "support.constant.color"], settings: { foreground: "#CE9178" } }, { scope: ["punctuation.definition.group.regexp", "punctuation.definition.group.assertion.regexp", "punctuation.definition.character-class.regexp", "punctuation.character.set.begin.regexp", "punctuation.character.set.end.regexp", "keyword.operator.negation.regexp", "support.other.parenthesis.regexp"], settings: { foreground: "#CE9178" } }, { scope: ["constant.character.character-class.regexp", "constant.other.character-class.set.regexp", "constant.other.character-class.regexp", "constant.character.set.regexp"], settings: { foreground: "#d16969" } }, { scope: ["keyword.operator.or.regexp", "keyword.control.anchor.regexp"], settings: { foreground: "#DCDCAA" } }, { scope: "keyword.operator.quantifier.regexp", settings: { foreground: "#d7ba7d" } }, { scope: ["constant.character", "constant.other.option"], settings: { foreground: "#569cd6" } }, { scope: "constant.character.escape", settings: { foreground: "#d7ba7d" } }, { scope: "entity.name.label", settings: { foreground: "#C8C8C8" } }], type: "dark" };

// src/themes/dracula.json
var dracula_default = {
  colors: {
    "activityBar.activeBackground": "#BD93F910",
    "activityBar.activeBorder": "#FF79C680",
    "activityBar.background": "#343746",
    "activityBar.foreground": "#F8F8F2",
    "activityBar.inactiveForeground": "#6272A4",
    "activityBarBadge.background": "#FF79C6",
    "activityBarBadge.foreground": "#F8F8F2",
    "badge.background": "#44475A",
    "badge.foreground": "#F8F8F2",
    "breadcrumb.activeSelectionForeground": "#F8F8F2",
    "breadcrumb.background": "#282A36",
    "breadcrumb.focusForeground": "#F8F8F2",
    "breadcrumb.foreground": "#6272A4",
    "breadcrumbPicker.background": "#191A21",
    "button.background": "#44475A",
    "button.foreground": "#F8F8F2",
    "button.secondaryBackground": "#282A36",
    "button.secondaryForeground": "#F8F8F2",
    "button.secondaryHoverBackground": "#343746",
    "debugToolBar.background": "#21222C",
    "diffEditor.insertedTextBackground": "#50FA7B20",
    "diffEditor.removedTextBackground": "#FF555550",
    "dropdown.background": "#343746",
    "dropdown.border": "#191A21",
    "dropdown.foreground": "#F8F8F2",
    "editor.background": "#282A36",
    "editor.findMatchBackground": "#FFB86C80",
    "editor.findMatchHighlightBackground": "#FFFFFF40",
    "editor.findRangeHighlightBackground": "#44475A75",
    "editor.foldBackground": "#21222C80",
    "editor.foreground": "#F8F8F2",
    "editor.hoverHighlightBackground": "#8BE9FD50",
    "editor.lineHighlightBorder": "#44475A",
    "editor.rangeHighlightBackground": "#BD93F915",
    "editor.selectionBackground": "#44475A",
    "editor.selectionHighlightBackground": "#424450",
    "editor.snippetFinalTabstopHighlightBackground": "#282A36",
    "editor.snippetFinalTabstopHighlightBorder": "#50FA7B",
    "editor.snippetTabstopHighlightBackground": "#282A36",
    "editor.snippetTabstopHighlightBorder": "#6272A4",
    "editor.wordHighlightBackground": "#8BE9FD50",
    "editor.wordHighlightStrongBackground": "#50FA7B50",
    "editorBracketHighlight.foreground1": "#F8F8F2",
    "editorBracketHighlight.foreground2": "#FF79C6",
    "editorBracketHighlight.foreground3": "#8BE9FD",
    "editorBracketHighlight.foreground4": "#50FA7B",
    "editorBracketHighlight.foreground5": "#BD93F9",
    "editorBracketHighlight.foreground6": "#FFB86C",
    "editorBracketHighlight.unexpectedBracket.foreground": "#FF5555",
    "editorCodeLens.foreground": "#6272A4",
    "editorError.foreground": "#FF5555",
    "editorGroup.border": "#BD93F9",
    "editorGroup.dropBackground": "#44475A70",
    "editorGroupHeader.tabsBackground": "#191A21",
    "editorGutter.addedBackground": "#50FA7B80",
    "editorGutter.deletedBackground": "#FF555580",
    "editorGutter.modifiedBackground": "#8BE9FD80",
    "editorHoverWidget.background": "#282A36",
    "editorHoverWidget.border": "#6272A4",
    "editorIndentGuide.activeBackground": "#FFFFFF45",
    "editorIndentGuide.background": "#FFFFFF1A",
    "editorLineNumber.foreground": "#6272A4",
    "editorLink.activeForeground": "#8BE9FD",
    "editorMarkerNavigation.background": "#21222C",
    "editorOverviewRuler.addedForeground": "#50FA7B80",
    "editorOverviewRuler.border": "#191A21",
    "editorOverviewRuler.currentContentForeground": "#50FA7B",
    "editorOverviewRuler.deletedForeground": "#FF555580",
    "editorOverviewRuler.errorForeground": "#FF555580",
    "editorOverviewRuler.incomingContentForeground": "#BD93F9",
    "editorOverviewRuler.infoForeground": "#8BE9FD80",
    "editorOverviewRuler.modifiedForeground": "#8BE9FD80",
    "editorOverviewRuler.selectionHighlightForeground": "#FFB86C",
    "editorOverviewRuler.warningForeground": "#FFB86C80",
    "editorOverviewRuler.wordHighlightForeground": "#8BE9FD",
    "editorOverviewRuler.wordHighlightStrongForeground": "#50FA7B",
    "editorRuler.foreground": "#FFFFFF1A",
    "editorSuggestWidget.background": "#21222C",
    "editorSuggestWidget.foreground": "#F8F8F2",
    "editorSuggestWidget.selectedBackground": "#44475A",
    "editorWarning.foreground": "#8BE9FD",
    "editorWhitespace.foreground": "#FFFFFF1A",
    "editorWidget.background": "#21222C",
    errorForeground: "#FF5555",
    "extensionButton.prominentBackground": "#50FA7B90",
    "extensionButton.prominentForeground": "#F8F8F2",
    "extensionButton.prominentHoverBackground": "#50FA7B60",
    focusBorder: "#6272A4",
    foreground: "#F8F8F2",
    "gitDecoration.conflictingResourceForeground": "#FFB86C",
    "gitDecoration.deletedResourceForeground": "#FF5555",
    "gitDecoration.ignoredResourceForeground": "#6272A4",
    "gitDecoration.modifiedResourceForeground": "#8BE9FD",
    "gitDecoration.untrackedResourceForeground": "#50FA7B",
    "inlineChat.regionHighlight": "#343746",
    "input.background": "#282A36",
    "input.border": "#191A21",
    "input.foreground": "#F8F8F2",
    "input.placeholderForeground": "#6272A4",
    "inputOption.activeBorder": "#BD93F9",
    "inputValidation.errorBorder": "#FF5555",
    "inputValidation.infoBorder": "#FF79C6",
    "inputValidation.warningBorder": "#FFB86C",
    "list.activeSelectionBackground": "#44475A",
    "list.activeSelectionForeground": "#F8F8F2",
    "list.dropBackground": "#44475A",
    "list.errorForeground": "#FF5555",
    "list.focusBackground": "#44475A75",
    "list.highlightForeground": "#8BE9FD",
    "list.hoverBackground": "#44475A75",
    "list.inactiveSelectionBackground": "#44475A75",
    "list.warningForeground": "#FFB86C",
    "listFilterWidget.background": "#343746",
    "listFilterWidget.noMatchesOutline": "#FF5555",
    "listFilterWidget.outline": "#424450",
    "merge.currentHeaderBackground": "#50FA7B90",
    "merge.incomingHeaderBackground": "#BD93F990",
    "panel.background": "#282A36",
    "panel.border": "#BD93F9",
    "panelTitle.activeBorder": "#FF79C6",
    "panelTitle.activeForeground": "#F8F8F2",
    "panelTitle.inactiveForeground": "#6272A4",
    "peekView.border": "#44475A",
    "peekViewEditor.background": "#282A36",
    "peekViewEditor.matchHighlightBackground": "#F1FA8C80",
    "peekViewResult.background": "#21222C",
    "peekViewResult.fileForeground": "#F8F8F2",
    "peekViewResult.lineForeground": "#F8F8F2",
    "peekViewResult.matchHighlightBackground": "#F1FA8C80",
    "peekViewResult.selectionBackground": "#44475A",
    "peekViewResult.selectionForeground": "#F8F8F2",
    "peekViewTitle.background": "#191A21",
    "peekViewTitleDescription.foreground": "#6272A4",
    "peekViewTitleLabel.foreground": "#F8F8F2",
    "pickerGroup.border": "#BD93F9",
    "pickerGroup.foreground": "#8BE9FD",
    "progressBar.background": "#FF79C6",
    "selection.background": "#BD93F9",
    "settings.checkboxBackground": "#21222C",
    "settings.checkboxBorder": "#191A21",
    "settings.checkboxForeground": "#F8F8F2",
    "settings.dropdownBackground": "#21222C",
    "settings.dropdownBorder": "#191A21",
    "settings.dropdownForeground": "#F8F8F2",
    "settings.headerForeground": "#F8F8F2",
    "settings.modifiedItemIndicator": "#FFB86C",
    "settings.numberInputBackground": "#21222C",
    "settings.numberInputBorder": "#191A21",
    "settings.numberInputForeground": "#F8F8F2",
    "settings.textInputBackground": "#21222C",
    "settings.textInputBorder": "#191A21",
    "settings.textInputForeground": "#F8F8F2",
    "sideBar.background": "#21222C",
    "sideBarSectionHeader.background": "#282A36",
    "sideBarSectionHeader.border": "#191A21",
    "sideBarTitle.foreground": "#F8F8F2",
    "statusBar.background": "#191A21",
    "statusBar.debuggingBackground": "#FF5555",
    "statusBar.debuggingForeground": "#191A21",
    "statusBar.foreground": "#F8F8F2",
    "statusBar.noFolderBackground": "#191A21",
    "statusBar.noFolderForeground": "#F8F8F2",
    "statusBarItem.prominentBackground": "#FF5555",
    "statusBarItem.prominentHoverBackground": "#FFB86C",
    "statusBarItem.remoteBackground": "#BD93F9",
    "statusBarItem.remoteForeground": "#282A36",
    "tab.activeBackground": "#282A36",
    "tab.activeBorderTop": "#FF79C680",
    "tab.activeForeground": "#F8F8F2",
    "tab.border": "#191A21",
    "tab.inactiveBackground": "#21222C",
    "tab.inactiveForeground": "#6272A4",
    "terminal.ansiBlack": "#21222C",
    "terminal.ansiBlue": "#BD93F9",
    "terminal.ansiBrightBlack": "#6272A4",
    "terminal.ansiBrightBlue": "#D6ACFF",
    "terminal.ansiBrightCyan": "#A4FFFF",
    "terminal.ansiBrightGreen": "#69FF94",
    "terminal.ansiBrightMagenta": "#FF92DF",
    "terminal.ansiBrightRed": "#FF6E6E",
    "terminal.ansiBrightWhite": "#FFFFFF",
    "terminal.ansiBrightYellow": "#FFFFA5",
    "terminal.ansiCyan": "#8BE9FD",
    "terminal.ansiGreen": "#50FA7B",
    "terminal.ansiMagenta": "#FF79C6",
    "terminal.ansiRed": "#FF5555",
    "terminal.ansiWhite": "#F8F8F2",
    "terminal.ansiYellow": "#F1FA8C",
    "terminal.background": "#282A36",
    "terminal.foreground": "#F8F8F2",
    "titleBar.activeBackground": "#21222C",
    "titleBar.activeForeground": "#F8F8F2",
    "titleBar.inactiveBackground": "#191A21",
    "titleBar.inactiveForeground": "#6272A4",
    "walkThrough.embeddedEditorBackground": "#21222C"
  },
  displayName: "Dracula Theme",
  name: "dracula",
  semanticHighlighting: true,
  tokenColors: [
    {
      scope: [
        "emphasis"
      ],
      settings: {
        fontStyle: "italic"
      }
    },
    {
      scope: [
        "strong"
      ],
      settings: {
        fontStyle: "bold"
      }
    },
    {
      scope: [
        "header"
      ],
      settings: {
        foreground: "#BD93F9"
      }
    },
    {
      scope: [
        "meta.diff",
        "meta.diff.header"
      ],
      settings: {
        foreground: "#6272A4"
      }
    },
    {
      scope: [
        "markup.inserted"
      ],
      settings: {
        foreground: "#50FA7B"
      }
    },
    {
      scope: [
        "markup.deleted"
      ],
      settings: {
        foreground: "#FF5555"
      }
    },
    {
      scope: [
        "markup.changed"
      ],
      settings: {
        foreground: "#FFB86C"
      }
    },
    {
      scope: [
        "invalid"
      ],
      settings: {
        fontStyle: "underline italic",
        foreground: "#FF5555"
      }
    },
    {
      scope: [
        "invalid.deprecated"
      ],
      settings: {
        fontStyle: "underline italic",
        foreground: "#F8F8F2"
      }
    },
    {
      scope: [
        "entity.name.filename"
      ],
      settings: {
        foreground: "#F1FA8C"
      }
    },
    {
      scope: [
        "markup.error"
      ],
      settings: {
        foreground: "#FF5555"
      }
    },
    {
      scope: [
        "markup.underline"
      ],
      settings: {
        fontStyle: "underline"
      }
    },
    {
      scope: [
        "markup.bold"
      ],
      settings: {
        fontStyle: "bold",
        foreground: "#FFB86C"
      }
    },
    {
      scope: [
        "markup.heading"
      ],
      settings: {
        fontStyle: "bold",
        foreground: "#BD93F9"
      }
    },
    {
      scope: [
        "markup.italic"
      ],
      settings: {
        fontStyle: "italic",
        foreground: "#F1FA8C"
      }
    },
    {
      scope: [
        "beginning.punctuation.definition.list.markdown",
        "beginning.punctuation.definition.quote.markdown",
        "punctuation.definition.link.restructuredtext"
      ],
      settings: {
        foreground: "#8BE9FD"
      }
    },
    {
      scope: [
        "markup.inline.raw",
        "markup.raw.restructuredtext"
      ],
      settings: {
        foreground: "#50FA7B"
      }
    },
    {
      scope: [
        "markup.underline.link",
        "markup.underline.link.image"
      ],
      settings: {
        foreground: "#8BE9FD"
      }
    },
    {
      scope: [
        "meta.link.reference.def.restructuredtext",
        "punctuation.definition.directive.restructuredtext",
        "string.other.link.description",
        "string.other.link.title"
      ],
      settings: {
        foreground: "#FF79C6"
      }
    },
    {
      scope: [
        "entity.name.directive.restructuredtext",
        "markup.quote"
      ],
      settings: {
        fontStyle: "italic",
        foreground: "#F1FA8C"
      }
    },
    {
      scope: [
        "meta.separator.markdown"
      ],
      settings: {
        foreground: "#6272A4"
      }
    },
    {
      scope: [
        "fenced_code.block.language",
        "markup.raw.inner.restructuredtext",
        "markup.fenced_code.block.markdown punctuation.definition.markdown"
      ],
      settings: {
        foreground: "#50FA7B"
      }
    },
    {
      scope: [
        "punctuation.definition.constant.restructuredtext"
      ],
      settings: {
        foreground: "#BD93F9"
      }
    },
    {
      scope: [
        "markup.heading.markdown punctuation.definition.string.begin",
        "markup.heading.markdown punctuation.definition.string.end"
      ],
      settings: {
        foreground: "#BD93F9"
      }
    },
    {
      scope: [
        "meta.paragraph.markdown punctuation.definition.string.begin",
        "meta.paragraph.markdown punctuation.definition.string.end"
      ],
      settings: {
        foreground: "#F8F8F2"
      }
    },
    {
      scope: [
        "markup.quote.markdown meta.paragraph.markdown punctuation.definition.string.begin",
        "markup.quote.markdown meta.paragraph.markdown punctuation.definition.string.end"
      ],
      settings: {
        foreground: "#F1FA8C"
      }
    },
    {
      scope: [
        "entity.name.type.class",
        "entity.name.class"
      ],
      settings: {
        fontStyle: "normal",
        foreground: "#8BE9FD"
      }
    },
    {
      scope: [
        "keyword.expressions-and-types.swift",
        "keyword.other.this",
        "variable.language",
        "variable.language punctuation.definition.variable.php",
        "variable.other.readwrite.instance.ruby",
        "variable.parameter.function.language.special"
      ],
      settings: {
        fontStyle: "italic",
        foreground: "#BD93F9"
      }
    },
    {
      scope: [
        "entity.other.inherited-class"
      ],
      settings: {
        fontStyle: "italic",
        foreground: "#8BE9FD"
      }
    },
    {
      scope: [
        "comment",
        "punctuation.definition.comment",
        "unused.comment",
        "wildcard.comment"
      ],
      settings: {
        foreground: "#6272A4"
      }
    },
    {
      scope: [
        "comment keyword.codetag.notation",
        "comment.block.documentation keyword",
        "comment.block.documentation storage.type.class"
      ],
      settings: {
        foreground: "#FF79C6"
      }
    },
    {
      scope: [
        "comment.block.documentation entity.name.type"
      ],
      settings: {
        fontStyle: "italic",
        foreground: "#8BE9FD"
      }
    },
    {
      scope: [
        "comment.block.documentation entity.name.type punctuation.definition.bracket"
      ],
      settings: {
        foreground: "#8BE9FD"
      }
    },
    {
      scope: [
        "comment.block.documentation variable"
      ],
      settings: {
        fontStyle: "italic",
        foreground: "#FFB86C"
      }
    },
    {
      scope: [
        "constant",
        "variable.other.constant"
      ],
      settings: {
        foreground: "#BD93F9"
      }
    },
    {
      scope: [
        "constant.character.escape",
        "constant.character.string.escape",
        "constant.regexp"
      ],
      settings: {
        foreground: "#FF79C6"
      }
    },
    {
      scope: [
        "entity.name.tag"
      ],
      settings: {
        foreground: "#FF79C6"
      }
    },
    {
      scope: [
        "entity.other.attribute-name.parent-selector"
      ],
      settings: {
        foreground: "#FF79C6"
      }
    },
    {
      scope: [
        "entity.other.attribute-name"
      ],
      settings: {
        fontStyle: "italic",
        foreground: "#50FA7B"
      }
    },
    {
      scope: [
        "entity.name.function",
        "meta.function-call.object",
        "meta.function-call.php",
        "meta.function-call.static",
        "meta.method-call.java meta.method",
        "meta.method.groovy",
        "support.function.any-method.lua",
        "keyword.operator.function.infix"
      ],
      settings: {
        foreground: "#50FA7B"
      }
    },
    {
      scope: [
        "entity.name.variable.parameter",
        "meta.at-rule.function variable",
        "meta.at-rule.mixin variable",
        "meta.function.arguments variable.other.php",
        "meta.selectionset.graphql meta.arguments.graphql variable.arguments.graphql",
        "variable.parameter"
      ],
      settings: {
        fontStyle: "italic",
        foreground: "#FFB86C"
      }
    },
    {
      scope: [
        "meta.decorator variable.other.readwrite",
        "meta.decorator variable.other.property"
      ],
      settings: {
        fontStyle: "italic",
        foreground: "#50FA7B"
      }
    },
    {
      scope: [
        "meta.decorator variable.other.object"
      ],
      settings: {
        foreground: "#50FA7B"
      }
    },
    {
      scope: [
        "keyword",
        "punctuation.definition.keyword"
      ],
      settings: {
        foreground: "#FF79C6"
      }
    },
    {
      scope: [
        "keyword.control.new",
        "keyword.operator.new"
      ],
      settings: {
        fontStyle: "bold"
      }
    },
    {
      scope: [
        "meta.selector"
      ],
      settings: {
        foreground: "#FF79C6"
      }
    },
    {
      scope: [
        "support"
      ],
      settings: {
        fontStyle: "italic",
        foreground: "#8BE9FD"
      }
    },
    {
      scope: [
        "support.function.magic",
        "support.variable",
        "variable.other.predefined"
      ],
      settings: {
        fontStyle: "regular",
        foreground: "#BD93F9"
      }
    },
    {
      scope: [
        "support.function",
        "support.type.property-name"
      ],
      settings: {
        fontStyle: "regular"
      }
    },
    {
      scope: [
        "constant.other.symbol.hashkey punctuation.definition.constant.ruby",
        "entity.other.attribute-name.placeholder punctuation",
        "entity.other.attribute-name.pseudo-class punctuation",
        "entity.other.attribute-name.pseudo-element punctuation",
        "meta.group.double.toml",
        "meta.group.toml",
        "meta.object-binding-pattern-variable punctuation.destructuring",
        "punctuation.colon.graphql",
        "punctuation.definition.block.scalar.folded.yaml",
        "punctuation.definition.block.scalar.literal.yaml",
        "punctuation.definition.block.sequence.item.yaml",
        "punctuation.definition.entity.other.inherited-class",
        "punctuation.function.swift",
        "punctuation.separator.dictionary.key-value",
        "punctuation.separator.hash",
        "punctuation.separator.inheritance",
        "punctuation.separator.key-value",
        "punctuation.separator.key-value.mapping.yaml",
        "punctuation.separator.namespace",
        "punctuation.separator.pointer-access",
        "punctuation.separator.slice",
        "string.unquoted.heredoc punctuation.definition.string",
        "support.other.chomping-indicator.yaml",
        "punctuation.separator.annotation"
      ],
      settings: {
        foreground: "#FF79C6"
      }
    },
    {
      scope: [
        "keyword.operator.other.powershell",
        "keyword.other.statement-separator.powershell",
        "meta.brace.round",
        "meta.function-call punctuation",
        "punctuation.definition.arguments.begin",
        "punctuation.definition.arguments.end",
        "punctuation.definition.entity.begin",
        "punctuation.definition.entity.end",
        "punctuation.definition.tag.cs",
        "punctuation.definition.type.begin",
        "punctuation.definition.type.end",
        "punctuation.section.scope.begin",
        "punctuation.section.scope.end",
        "punctuation.terminator.expression.php",
        "storage.type.generic.java",
        "string.template meta.brace",
        "string.template punctuation.accessor"
      ],
      settings: {
        foreground: "#F8F8F2"
      }
    },
    {
      scope: [
        "meta.string-contents.quoted.double punctuation.definition.variable",
        "punctuation.definition.interpolation.begin",
        "punctuation.definition.interpolation.end",
        "punctuation.definition.template-expression.begin",
        "punctuation.definition.template-expression.end",
        "punctuation.section.embedded.begin",
        "punctuation.section.embedded.coffee",
        "punctuation.section.embedded.end",
        "punctuation.section.embedded.end source.php",
        "punctuation.section.embedded.end source.ruby",
        "punctuation.definition.variable.makefile"
      ],
      settings: {
        foreground: "#FF79C6"
      }
    },
    {
      scope: [
        "entity.name.function.target.makefile",
        "entity.name.section.toml",
        "entity.name.tag.yaml",
        "variable.other.key.toml"
      ],
      settings: {
        foreground: "#8BE9FD"
      }
    },
    {
      scope: [
        "constant.other.date",
        "constant.other.timestamp"
      ],
      settings: {
        foreground: "#FFB86C"
      }
    },
    {
      scope: [
        "variable.other.alias.yaml"
      ],
      settings: {
        fontStyle: "italic underline",
        foreground: "#50FA7B"
      }
    },
    {
      scope: [
        "storage",
        "meta.implementation storage.type.objc",
        "meta.interface-or-protocol storage.type.objc",
        "source.groovy storage.type.def"
      ],
      settings: {
        fontStyle: "regular",
        foreground: "#FF79C6"
      }
    },
    {
      scope: [
        "entity.name.type",
        "keyword.primitive-datatypes.swift",
        "keyword.type.cs",
        "meta.protocol-list.objc",
        "meta.return-type.objc",
        "source.go storage.type",
        "source.groovy storage.type",
        "source.java storage.type",
        "source.powershell entity.other.attribute-name",
        "storage.class.std.rust",
        "storage.type.attribute.swift",
        "storage.type.c",
        "storage.type.core.rust",
        "storage.type.cs",
        "storage.type.groovy",
        "storage.type.objc",
        "storage.type.php",
        "storage.type.haskell",
        "storage.type.ocaml"
      ],
      settings: {
        fontStyle: "italic",
        foreground: "#8BE9FD"
      }
    },
    {
      scope: [
        "entity.name.type.type-parameter",
        "meta.indexer.mappedtype.declaration entity.name.type",
        "meta.type.parameters entity.name.type"
      ],
      settings: {
        foreground: "#FFB86C"
      }
    },
    {
      scope: [
        "storage.modifier"
      ],
      settings: {
        foreground: "#FF79C6"
      }
    },
    {
      scope: [
        "string.regexp",
        "constant.other.character-class.set.regexp",
        "constant.character.escape.backslash.regexp"
      ],
      settings: {
        foreground: "#F1FA8C"
      }
    },
    {
      scope: [
        "punctuation.definition.group.capture.regexp"
      ],
      settings: {
        foreground: "#FF79C6"
      }
    },
    {
      scope: [
        "string.regexp punctuation.definition.string.begin",
        "string.regexp punctuation.definition.string.end"
      ],
      settings: {
        foreground: "#FF5555"
      }
    },
    {
      scope: [
        "punctuation.definition.character-class.regexp"
      ],
      settings: {
        foreground: "#8BE9FD"
      }
    },
    {
      scope: [
        "punctuation.definition.group.regexp"
      ],
      settings: {
        foreground: "#FFB86C"
      }
    },
    {
      scope: [
        "punctuation.definition.group.assertion.regexp",
        "keyword.operator.negation.regexp"
      ],
      settings: {
        foreground: "#FF5555"
      }
    },
    {
      scope: [
        "meta.assertion.look-ahead.regexp"
      ],
      settings: {
        foreground: "#50FA7B"
      }
    },
    {
      scope: [
        "string"
      ],
      settings: {
        foreground: "#F1FA8C"
      }
    },
    {
      scope: [
        "punctuation.definition.string.begin",
        "punctuation.definition.string.end"
      ],
      settings: {
        foreground: "#E9F284"
      }
    },
    {
      scope: [
        "punctuation.support.type.property-name.begin",
        "punctuation.support.type.property-name.end"
      ],
      settings: {
        foreground: "#8BE9FE"
      }
    },
    {
      scope: [
        "string.quoted.docstring.multi",
        "string.quoted.docstring.multi.python punctuation.definition.string.begin",
        "string.quoted.docstring.multi.python punctuation.definition.string.end",
        "string.quoted.docstring.multi.python constant.character.escape"
      ],
      settings: {
        foreground: "#6272A4"
      }
    },
    {
      scope: [
        "variable",
        "constant.other.key.perl",
        "support.variable.property",
        "variable.other.constant.js",
        "variable.other.constant.ts",
        "variable.other.constant.tsx"
      ],
      settings: {
        foreground: "#F8F8F2"
      }
    },
    {
      scope: [
        "meta.import variable.other.readwrite",
        "meta.variable.assignment.destructured.object.coffee variable"
      ],
      settings: {
        fontStyle: "italic",
        foreground: "#FFB86C"
      }
    },
    {
      scope: [
        "meta.import variable.other.readwrite.alias",
        "meta.export variable.other.readwrite.alias",
        "meta.variable.assignment.destructured.object.coffee variable variable"
      ],
      settings: {
        fontStyle: "normal",
        foreground: "#F8F8F2"
      }
    },
    {
      scope: [
        "meta.selectionset.graphql variable"
      ],
      settings: {
        foreground: "#F1FA8C"
      }
    },
    {
      scope: [
        "meta.selectionset.graphql meta.arguments variable"
      ],
      settings: {
        foreground: "#F8F8F2"
      }
    },
    {
      scope: [
        "entity.name.fragment.graphql",
        "variable.fragment.graphql"
      ],
      settings: {
        foreground: "#8BE9FD"
      }
    },
    {
      scope: [
        "constant.other.symbol.hashkey.ruby",
        "keyword.operator.dereference.java",
        "keyword.operator.navigation.groovy",
        "meta.scope.for-loop.shell punctuation.definition.string.begin",
        "meta.scope.for-loop.shell punctuation.definition.string.end",
        "meta.scope.for-loop.shell string",
        "storage.modifier.import",
        "punctuation.section.embedded.begin.tsx",
        "punctuation.section.embedded.end.tsx",
        "punctuation.section.embedded.begin.jsx",
        "punctuation.section.embedded.end.jsx",
        "punctuation.separator.list.comma.css",
        "constant.language.empty-list.haskell"
      ],
      settings: {
        foreground: "#F8F8F2"
      }
    },
    {
      scope: [
        "source.shell variable.other"
      ],
      settings: {
        foreground: "#BD93F9"
      }
    },
    {
      scope: [
        "support.constant"
      ],
      settings: {
        fontStyle: "normal",
        foreground: "#BD93F9"
      }
    },
    {
      scope: [
        "meta.scope.prerequisites.makefile"
      ],
      settings: {
        foreground: "#F1FA8C"
      }
    },
    {
      scope: [
        "meta.attribute-selector.scss"
      ],
      settings: {
        foreground: "#F1FA8C"
      }
    },
    {
      scope: [
        "punctuation.definition.attribute-selector.end.bracket.square.scss",
        "punctuation.definition.attribute-selector.begin.bracket.square.scss"
      ],
      settings: {
        foreground: "#F8F8F2"
      }
    },
    {
      scope: [
        "meta.preprocessor.haskell"
      ],
      settings: {
        foreground: "#6272A4"
      }
    },
    {
      scope: [
        "log.error"
      ],
      settings: {
        fontStyle: "bold",
        foreground: "#FF5555"
      }
    },
    {
      scope: [
        "log.warning"
      ],
      settings: {
        fontStyle: "bold",
        foreground: "#F1FA8C"
      }
    }
  ],
  type: "dark"
};

// src/themes/github-light.json
var github_light_default = {
  colors: {
    "activityBar.activeBorder": "#f9826c",
    "activityBar.background": "#fff",
    "activityBar.border": "#e1e4e8",
    "activityBar.foreground": "#2f363d",
    "activityBar.inactiveForeground": "#959da5",
    "activityBarBadge.background": "#2188ff",
    "activityBarBadge.foreground": "#fff",
    "badge.background": "#dbedff",
    "badge.foreground": "#005cc5",
    "breadcrumb.activeSelectionForeground": "#586069",
    "breadcrumb.focusForeground": "#2f363d",
    "breadcrumb.foreground": "#6a737d",
    "breadcrumbPicker.background": "#fafbfc",
    "button.background": "#159739",
    "button.foreground": "#fff",
    "button.hoverBackground": "#138934",
    "button.secondaryBackground": "#e1e4e8",
    "button.secondaryForeground": "#1b1f23",
    "button.secondaryHoverBackground": "#d1d5da",
    "checkbox.background": "#fafbfc",
    "checkbox.border": "#d1d5da",
    "debugToolBar.background": "#fff",
    descriptionForeground: "#6a737d",
    "diffEditor.insertedTextBackground": "#34d05822",
    "diffEditor.removedTextBackground": "#d73a4922",
    "dropdown.background": "#fafbfc",
    "dropdown.border": "#e1e4e8",
    "dropdown.foreground": "#2f363d",
    "dropdown.listBackground": "#fff",
    "editor.background": "#fff",
    "editor.findMatchBackground": "#ffdf5d",
    "editor.findMatchHighlightBackground": "#ffdf5d66",
    "editor.focusedStackFrameHighlightBackground": "#28a74525",
    "editor.foldBackground": "#d1d5da11",
    "editor.foreground": "#24292e",
    "editor.inactiveSelectionBackground": "#0366d611",
    "editor.lineHighlightBackground": "#f6f8fa",
    "editor.linkedEditingBackground": "#0366d611",
    "editor.selectionBackground": "#0366d625",
    "editor.selectionHighlightBackground": "#34d05840",
    "editor.selectionHighlightBorder": "#34d05800",
    "editor.stackFrameHighlightBackground": "#ffd33d33",
    "editor.wordHighlightBackground": "#34d05800",
    "editor.wordHighlightBorder": "#24943e99",
    "editor.wordHighlightStrongBackground": "#34d05800",
    "editor.wordHighlightStrongBorder": "#24943e50",
    "editorBracketHighlight.foreground1": "#005cc5",
    "editorBracketHighlight.foreground2": "#e36209",
    "editorBracketHighlight.foreground3": "#5a32a3",
    "editorBracketHighlight.foreground4": "#005cc5",
    "editorBracketHighlight.foreground5": "#e36209",
    "editorBracketHighlight.foreground6": "#5a32a3",
    "editorBracketMatch.background": "#34d05840",
    "editorBracketMatch.border": "#34d05800",
    "editorCursor.foreground": "#044289",
    "editorError.foreground": "#cb2431",
    "editorGroup.border": "#e1e4e8",
    "editorGroupHeader.tabsBackground": "#f6f8fa",
    "editorGroupHeader.tabsBorder": "#e1e4e8",
    "editorGutter.addedBackground": "#28a745",
    "editorGutter.deletedBackground": "#d73a49",
    "editorGutter.modifiedBackground": "#2188ff",
    "editorIndentGuide.activeBackground": "#d7dbe0",
    "editorIndentGuide.background": "#eff2f6",
    "editorLineNumber.activeForeground": "#24292e",
    "editorLineNumber.foreground": "#1b1f234d",
    "editorOverviewRuler.border": "#fff",
    "editorWarning.foreground": "#f9c513",
    "editorWhitespace.foreground": "#d1d5da",
    "editorWidget.background": "#f6f8fa",
    errorForeground: "#cb2431",
    focusBorder: "#2188ff",
    foreground: "#444d56",
    "gitDecoration.addedResourceForeground": "#28a745",
    "gitDecoration.conflictingResourceForeground": "#e36209",
    "gitDecoration.deletedResourceForeground": "#d73a49",
    "gitDecoration.ignoredResourceForeground": "#959da5",
    "gitDecoration.modifiedResourceForeground": "#005cc5",
    "gitDecoration.submoduleResourceForeground": "#959da5",
    "gitDecoration.untrackedResourceForeground": "#28a745",
    "input.background": "#fafbfc",
    "input.border": "#e1e4e8",
    "input.foreground": "#2f363d",
    "input.placeholderForeground": "#959da5",
    "list.activeSelectionBackground": "#e2e5e9",
    "list.activeSelectionForeground": "#2f363d",
    "list.focusBackground": "#cce5ff",
    "list.hoverBackground": "#ebf0f4",
    "list.hoverForeground": "#2f363d",
    "list.inactiveFocusBackground": "#dbedff",
    "list.inactiveSelectionBackground": "#e8eaed",
    "list.inactiveSelectionForeground": "#2f363d",
    "notificationCenterHeader.background": "#e1e4e8",
    "notificationCenterHeader.foreground": "#6a737d",
    "notifications.background": "#fafbfc",
    "notifications.border": "#e1e4e8",
    "notifications.foreground": "#2f363d",
    "notificationsErrorIcon.foreground": "#d73a49",
    "notificationsInfoIcon.foreground": "#005cc5",
    "notificationsWarningIcon.foreground": "#e36209",
    "panel.background": "#f6f8fa",
    "panel.border": "#e1e4e8",
    "panelInput.border": "#e1e4e8",
    "panelTitle.activeBorder": "#f9826c",
    "panelTitle.activeForeground": "#2f363d",
    "panelTitle.inactiveForeground": "#6a737d",
    "pickerGroup.border": "#e1e4e8",
    "pickerGroup.foreground": "#2f363d",
    "progressBar.background": "#2188ff",
    "quickInput.background": "#fafbfc",
    "quickInput.foreground": "#2f363d",
    "scrollbar.shadow": "#6a737d33",
    "scrollbarSlider.activeBackground": "#959da588",
    "scrollbarSlider.background": "#959da533",
    "scrollbarSlider.hoverBackground": "#959da544",
    "settings.headerForeground": "#2f363d",
    "settings.modifiedItemIndicator": "#2188ff",
    "sideBar.background": "#f6f8fa",
    "sideBar.border": "#e1e4e8",
    "sideBar.foreground": "#586069",
    "sideBarSectionHeader.background": "#f6f8fa",
    "sideBarSectionHeader.border": "#e1e4e8",
    "sideBarSectionHeader.foreground": "#2f363d",
    "sideBarTitle.foreground": "#2f363d",
    "statusBar.background": "#fff",
    "statusBar.border": "#e1e4e8",
    "statusBar.debuggingBackground": "#f9826c",
    "statusBar.debuggingForeground": "#fff",
    "statusBar.foreground": "#586069",
    "statusBar.noFolderBackground": "#fff",
    "statusBarItem.prominentBackground": "#e8eaed",
    "statusBarItem.remoteBackground": "#fff",
    "statusBarItem.remoteForeground": "#586069",
    "tab.activeBackground": "#fff",
    "tab.activeBorder": "#fff",
    "tab.activeBorderTop": "#f9826c",
    "tab.activeForeground": "#2f363d",
    "tab.border": "#e1e4e8",
    "tab.hoverBackground": "#fff",
    "tab.inactiveBackground": "#f6f8fa",
    "tab.inactiveForeground": "#6a737d",
    "tab.unfocusedActiveBorder": "#fff",
    "tab.unfocusedActiveBorderTop": "#e1e4e8",
    "tab.unfocusedHoverBackground": "#fff",
    "terminal.ansiBlack": "#24292e",
    "terminal.ansiBlue": "#0366d6",
    "terminal.ansiBrightBlack": "#959da5",
    "terminal.ansiBrightBlue": "#005cc5",
    "terminal.ansiBrightCyan": "#3192aa",
    "terminal.ansiBrightGreen": "#22863a",
    "terminal.ansiBrightMagenta": "#5a32a3",
    "terminal.ansiBrightRed": "#cb2431",
    "terminal.ansiBrightWhite": "#d1d5da",
    "terminal.ansiBrightYellow": "#b08800",
    "terminal.ansiCyan": "#1b7c83",
    "terminal.ansiGreen": "#28a745",
    "terminal.ansiMagenta": "#5a32a3",
    "terminal.ansiRed": "#d73a49",
    "terminal.ansiWhite": "#6a737d",
    "terminal.ansiYellow": "#dbab09",
    "terminal.foreground": "#586069",
    "terminal.tab.activeBorder": "#f9826c",
    "terminalCursor.background": "#d1d5da",
    "terminalCursor.foreground": "#005cc5",
    "textBlockQuote.background": "#fafbfc",
    "textBlockQuote.border": "#e1e4e8",
    "textCodeBlock.background": "#f6f8fa",
    "textLink.activeForeground": "#005cc5",
    "textLink.foreground": "#0366d6",
    "textPreformat.foreground": "#586069",
    "textSeparator.foreground": "#d1d5da",
    "titleBar.activeBackground": "#fff",
    "titleBar.activeForeground": "#2f363d",
    "titleBar.border": "#e1e4e8",
    "titleBar.inactiveBackground": "#f6f8fa",
    "titleBar.inactiveForeground": "#6a737d",
    "tree.indentGuidesStroke": "#e1e4e8",
    "welcomePage.buttonBackground": "#f6f8fa",
    "welcomePage.buttonHoverBackground": "#e1e4e8"
  },
  displayName: "GitHub Light",
  name: "github-light",
  semanticHighlighting: true,
  tokenColors: [
    {
      scope: [
        "comment",
        "punctuation.definition.comment",
        "string.comment"
      ],
      settings: {
        foreground: "#6a737d"
      }
    },
    {
      scope: [
        "constant",
        "entity.name.constant",
        "variable.other.constant",
        "variable.other.enummember",
        "variable.language"
      ],
      settings: {
        foreground: "#005cc5"
      }
    },
    {
      scope: [
        "entity",
        "entity.name"
      ],
      settings: {
        foreground: "#6f42c1"
      }
    },
    {
      scope: "variable.parameter.function",
      settings: {
        foreground: "#24292e"
      }
    },
    {
      scope: "entity.name.tag",
      settings: {
        foreground: "#22863a"
      }
    },
    {
      scope: "keyword",
      settings: {
        foreground: "#d73a49"
      }
    },
    {
      scope: [
        "storage",
        "storage.type"
      ],
      settings: {
        foreground: "#d73a49"
      }
    },
    {
      scope: [
        "storage.modifier.package",
        "storage.modifier.import",
        "storage.type.java"
      ],
      settings: {
        foreground: "#24292e"
      }
    },
    {
      scope: [
        "string",
        "punctuation.definition.string",
        "string punctuation.section.embedded source"
      ],
      settings: {
        foreground: "#032f62"
      }
    },
    {
      scope: "support",
      settings: {
        foreground: "#005cc5"
      }
    },
    {
      scope: "meta.property-name",
      settings: {
        foreground: "#005cc5"
      }
    },
    {
      scope: "variable",
      settings: {
        foreground: "#e36209"
      }
    },
    {
      scope: "variable.other",
      settings: {
        foreground: "#24292e"
      }
    },
    {
      scope: "invalid.broken",
      settings: {
        fontStyle: "italic",
        foreground: "#b31d28"
      }
    },
    {
      scope: "invalid.deprecated",
      settings: {
        fontStyle: "italic",
        foreground: "#b31d28"
      }
    },
    {
      scope: "invalid.illegal",
      settings: {
        fontStyle: "italic",
        foreground: "#b31d28"
      }
    },
    {
      scope: "invalid.unimplemented",
      settings: {
        fontStyle: "italic",
        foreground: "#b31d28"
      }
    },
    {
      scope: "carriage-return",
      settings: {
        background: "#d73a49",
        content: "^M",
        fontStyle: "italic underline",
        foreground: "#fafbfc"
      }
    },
    {
      scope: "message.error",
      settings: {
        foreground: "#b31d28"
      }
    },
    {
      scope: "string variable",
      settings: {
        foreground: "#005cc5"
      }
    },
    {
      scope: [
        "source.regexp",
        "string.regexp"
      ],
      settings: {
        foreground: "#032f62"
      }
    },
    {
      scope: [
        "string.regexp.character-class",
        "string.regexp constant.character.escape",
        "string.regexp source.ruby.embedded",
        "string.regexp string.regexp.arbitrary-repitition"
      ],
      settings: {
        foreground: "#032f62"
      }
    },
    {
      scope: "string.regexp constant.character.escape",
      settings: {
        fontStyle: "bold",
        foreground: "#22863a"
      }
    },
    {
      scope: "support.constant",
      settings: {
        foreground: "#005cc5"
      }
    },
    {
      scope: "support.variable",
      settings: {
        foreground: "#005cc5"
      }
    },
    {
      scope: "meta.module-reference",
      settings: {
        foreground: "#005cc5"
      }
    },
    {
      scope: "punctuation.definition.list.begin.markdown",
      settings: {
        foreground: "#e36209"
      }
    },
    {
      scope: [
        "markup.heading",
        "markup.heading entity.name"
      ],
      settings: {
        fontStyle: "bold",
        foreground: "#005cc5"
      }
    },
    {
      scope: "markup.quote",
      settings: {
        foreground: "#22863a"
      }
    },
    {
      scope: "markup.italic",
      settings: {
        fontStyle: "italic",
        foreground: "#24292e"
      }
    },
    {
      scope: "markup.bold",
      settings: {
        fontStyle: "bold",
        foreground: "#24292e"
      }
    },
    {
      scope: [
        "markup.underline"
      ],
      settings: {
        fontStyle: "underline"
      }
    },
    {
      scope: [
        "markup.strikethrough"
      ],
      settings: {
        fontStyle: "strikethrough"
      }
    },
    {
      scope: "markup.inline.raw",
      settings: {
        foreground: "#005cc5"
      }
    },
    {
      scope: [
        "markup.deleted",
        "meta.diff.header.from-file",
        "punctuation.definition.deleted"
      ],
      settings: {
        background: "#ffeef0",
        foreground: "#b31d28"
      }
    },
    {
      scope: [
        "markup.inserted",
        "meta.diff.header.to-file",
        "punctuation.definition.inserted"
      ],
      settings: {
        background: "#f0fff4",
        foreground: "#22863a"
      }
    },
    {
      scope: [
        "markup.changed",
        "punctuation.definition.changed"
      ],
      settings: {
        background: "#ffebda",
        foreground: "#e36209"
      }
    },
    {
      scope: [
        "markup.ignored",
        "markup.untracked"
      ],
      settings: {
        background: "#005cc5",
        foreground: "#f6f8fa"
      }
    },
    {
      scope: "meta.diff.range",
      settings: {
        fontStyle: "bold",
        foreground: "#6f42c1"
      }
    },
    {
      scope: "meta.diff.header",
      settings: {
        foreground: "#005cc5"
      }
    },
    {
      scope: "meta.separator",
      settings: {
        fontStyle: "bold",
        foreground: "#005cc5"
      }
    },
    {
      scope: "meta.output",
      settings: {
        foreground: "#005cc5"
      }
    },
    {
      scope: [
        "brackethighlighter.tag",
        "brackethighlighter.curly",
        "brackethighlighter.round",
        "brackethighlighter.square",
        "brackethighlighter.angle",
        "brackethighlighter.quote"
      ],
      settings: {
        foreground: "#586069"
      }
    },
    {
      scope: "brackethighlighter.unmatched",
      settings: {
        foreground: "#b31d28"
      }
    },
    {
      scope: [
        "constant.other.reference.link",
        "string.other.link"
      ],
      settings: {
        fontStyle: "underline",
        foreground: "#032f62"
      }
    }
  ],
  type: "light"
};

// src/grammars/index.json
var grammars_default = {
  typescript: {
    scopeName: "source.ts"
  },
  tsx: {
    scopeName: "source.tsx"
  },
  javascript: {
    scopeName: "source.js"
  },
  jsx: {
    scopeName: "source.js.jsx"
  },
  python: {
    scopeName: "source.python"
  },
  rust: {
    scopeName: "source.rust"
  },
  go: {
    scopeName: "source.go"
  },
  c: {
    scopeName: "source.c"
  },
  regexp: {
    scopeName: "source.regexp.python"
  },
  glsl: {
    scopeName: "source.glsl",
    embeddedLangs: [
      "c"
    ]
  },
  sql: {
    scopeName: "source.sql"
  },
  "cpp-macro": {
    scopeName: "source.cpp.embedded.macro",
    embeddedLangs: [
      "regexp",
      "glsl",
      "sql"
    ]
  },
  cpp: {
    scopeName: "source.cpp",
    embeddedLangs: [
      "cpp-macro",
      "regexp",
      "glsl",
      "sql"
    ]
  },
  csharp: {
    scopeName: "source.cs"
  },
  java: {
    scopeName: "source.java"
  },
  kotlin: {
    scopeName: "source.kotlin"
  },
  swift: {
    scopeName: "source.swift"
  },
  css: {
    scopeName: "source.css"
  },
  html: {
    scopeName: "text.html.basic",
    embeddedLangs: [
      "javascript",
      "css"
    ]
  },
  haml: {
    scopeName: "text.haml",
    embeddedLangs: [
      "javascript",
      "css"
    ]
  },
  xml: {
    scopeName: "text.xml",
    embeddedLangs: [
      "java"
    ]
  },
  graphql: {
    scopeName: "source.graphql",
    embeddedLangs: [
      "javascript",
      "typescript",
      "jsx",
      "tsx"
    ]
  },
  shellscript: {
    scopeName: "source.shell"
  },
  lua: {
    scopeName: "source.lua",
    embeddedLangs: [
      "c"
    ]
  },
  yaml: {
    scopeName: "source.yaml"
  },
  ruby: {
    scopeName: "source.ruby",
    embeddedLangs: [
      "html",
      "haml",
      "xml",
      "sql",
      "graphql",
      "css",
      "cpp",
      "c",
      "javascript",
      "shellscript",
      "lua",
      "yaml"
    ]
  },
  json: {
    scopeName: "source.json"
  },
  php: {
    scopeName: "source.php",
    embeddedLangs: [
      "html",
      "xml",
      "sql",
      "javascript",
      "json",
      "css"
    ]
  },
  r: {
    scopeName: "source.r"
  },
  dart: {
    scopeName: "source.dart"
  },
  scala: {
    scopeName: "source.scala"
  },
  scss: {
    scopeName: "source.css.scss",
    embeddedLangs: [
      "css"
    ]
  },
  less: {
    scopeName: "source.css.less"
  },
  "html-derivative": {
    scopeName: "text.html.derivative",
    embeddedLangs: [
      "html"
    ]
  },
  "markdown-vue": {
    scopeName: "markdown.vue.codeblock"
  },
  "vue-directives": {
    scopeName: "vue.directives"
  },
  "vue-interpolations": {
    scopeName: "vue.interpolations"
  },
  "vue-sfc-style-variable-injection": {
    scopeName: "vue.sfc.style.variable.injection",
    embeddedLangs: [
      "javascript"
    ]
  },
  vue: {
    scopeName: "text.html.vue",
    embeddedLangs: [
      "css",
      "javascript",
      "typescript",
      "json",
      "html",
      "html-derivative",
      "markdown-vue",
      "vue-directives",
      "vue-interpolations",
      "vue-sfc-style-variable-injection"
    ]
  },
  postcss: {
    scopeName: "source.css.postcss"
  },
  svelte: {
    scopeName: "source.svelte",
    embeddedLangs: [
      "javascript",
      "typescript",
      "css",
      "postcss"
    ]
  },
  jsonc: {
    scopeName: "source.json.comments"
  },
  toml: {
    scopeName: "source.toml"
  },
  markdown: {
    scopeName: "text.html.markdown",
    embeddedLangs: []
  },
  fish: {
    scopeName: "source.fish"
  }
};

// src/worker/highlight.worker.ts
var GRAMMAR_LOADERS = {
  "source.ts": () => import("./typescript-PFS3N6GD.js"),
  "source.tsx": () => import("./tsx-XB4JESW7.js"),
  "source.js": () => import("./javascript-ZCMNZEFT.js"),
  "source.js.jsx": () => import("./jsx-K43O42VR.js"),
  "source.python": () => import("./python-6566ZCAQ.js"),
  "source.rust": () => import("./rust-FVGL2577.js"),
  "source.go": () => import("./go-TQD27PFX.js"),
  "source.c": () => import("./c-V7MMGYUL.js"),
  "source.regexp.python": () => import("./regexp-IMOPG2ET.js"),
  "source.glsl": () => import("./glsl-O2KDKKMR.js"),
  "source.sql": () => import("./sql-HI4UNVBT.js"),
  "source.cpp.embedded.macro": () => import("./cpp-macro-TF4W5FJB.js"),
  "source.cpp": () => import("./cpp-OA6SQL47.js"),
  "source.cs": () => import("./csharp-LWCWQR6T.js"),
  "source.java": () => import("./java-PYFS42EV.js"),
  "source.kotlin": () => import("./kotlin-JAF3XYOD.js"),
  "source.swift": () => import("./swift-HRRAVL2C.js"),
  "source.css": () => import("./css-XQ6GODOG.js"),
  "text.html.basic": () => import("./html-43ZRJUMK.js"),
  "text.haml": () => import("./haml-ZVW5XIDO.js"),
  "text.xml": () => import("./xml-JCBVWNKB.js"),
  "source.graphql": () => import("./graphql-WX3JGOA7.js"),
  "source.shell": () => import("./shellscript-F6I2JJOQ.js"),
  "source.lua": () => import("./lua-PYPEBCXF.js"),
  "source.yaml": () => import("./yaml-6BY247BJ.js"),
  "source.ruby": () => import("./ruby-2T7RTMNY.js"),
  "source.json": () => import("./json-XG4AQPZD.js"),
  "source.php": () => import("./php-WHCXWVNF.js"),
  "source.r": () => import("./r-EIHLOWH6.js"),
  "source.dart": () => import("./dart-KU7I67YJ.js"),
  "source.scala": () => import("./scala-QKEKFI5Y.js"),
  "source.css.scss": () => import("./scss-LUUQQVIC.js"),
  "source.css.less": () => import("./less-NL757NLH.js"),
  "text.html.derivative": () => import("./html-derivative-XIUGXLTS.js"),
  "markdown.vue.codeblock": () => import("./markdown-vue-I3QRCUZF.js"),
  "vue.directives": () => import("./vue-directives-BU2LONMI.js"),
  "vue.interpolations": () => import("./vue-interpolations-5FXWYTZ3.js"),
  "vue.sfc.style.variable.injection": () => import("./vue-sfc-style-variable-injection-7Z7V26UE.js"),
  "text.html.vue": () => import("./vue-BMNPTOKI.js"),
  "source.css.postcss": () => import("./postcss-NYG3EKEO.js"),
  "source.svelte": () => import("./svelte-IW6FNI6N.js"),
  "source.json.comments": () => import("./jsonc-F4W5AHFX.js"),
  "source.toml": () => import("./toml-QQM4ODQX.js"),
  "text.html.markdown": () => import("./markdown-7CN4HMUW.js"),
  "source.fish": () => import("./fish-ZV4PZPNF.js")
};
var LANG_ALIASES = {
  bash: "shellscript",
  sh: "shellscript",
  zsh: "shellscript",
  mdx: "markdown"
};
function toVtmTheme(raw) {
  const fg = raw.colors?.["editor.foreground"] ?? "#D4D4D4";
  const bg = raw.colors?.["editor.background"] ?? "#1E1E1E";
  return { name: raw.name, settings: [{ settings: { foreground: fg, background: bg } }, ...raw.tokenColors] };
}
var VTM_THEMES = {
  "dark-plus": { theme: toVtmTheme(dark_plus_default), defaultFg: "#D4D4D4" },
  "dracula": { theme: toVtmTheme(dracula_default), defaultFg: "#F8F8F2" },
  "github-light": { theme: toVtmTheme(github_light_default), defaultFg: "#24292e" }
};
var FOREGROUND_MASK = 16744448;
var FOREGROUND_SHIFT = 15;
var defaultFg = "#D4D4D4";
var registry = null;
var grammar = null;
var colorMap = [];
var lines = [];
var lineEndStacks = [];
var tokenLines = [];
var currentReqId = 0;
async function initWasm() {
  const wasmUrl = new URL("./onig.wasm", import.meta.url);
  const wasmBuf = await fetch(wasmUrl).then((r) => r.arrayBuffer());
  await (0, import_vscode_oniguruma.loadWASM)({ data: wasmBuf });
  const onigLib = Promise.resolve({ createOnigScanner: import_vscode_oniguruma.createOnigScanner, createOnigString: import_vscode_oniguruma.createOnigString });
  registry = new import_vscode_textmate.Registry({
    onigLib,
    theme: VTM_THEMES["dark-plus"].theme,
    loadGrammar: async (scope) => {
      const loader = GRAMMAR_LOADERS[scope];
      if (!loader) return null;
      const mod = await loader();
      return mod.default ?? mod;
    }
  });
  colorMap = registry.getColorMap();
}
function handleSetTheme(themeName) {
  const entry = VTM_THEMES[themeName];
  if (!registry || !entry) return;
  registry.setTheme(entry.theme);
  colorMap = registry.getColorMap();
  defaultFg = entry.defaultFg;
}
async function handleSetLang(lang) {
  if (!registry) return;
  const resolved = LANG_ALIASES[lang] ?? lang;
  const info = grammars_default[resolved];
  if (!info) return;
  grammar = await registry.loadGrammar(info.scopeName);
  colorMap = registry.getColorMap();
  self.postMessage({ type: "langReady", colorMap });
}
function applyEdit(fromLine, removedCount, addedLines) {
  lines.splice(fromLine, removedCount, ...addedLines);
  lineEndStacks.splice(fromLine, removedCount, ...new Array(addedLines.length).fill(null));
  tokenLines.splice(fromLine, removedCount, ...new Array(addedLines.length).fill([]));
}
function tokenizeRange(from, to) {
  if (!grammar) return [];
  let stack = from > 0 ? lineEndStacks[from - 1] ?? import_vscode_textmate.INITIAL : import_vscode_textmate.INITIAL;
  const result = [];
  for (let i = from; i < to && i < lines.length; i++) {
    const res = grammar.tokenizeLine2(lines[i], stack, 500);
    if (res.stoppedEarly) {
      tokenLines[i] = [];
      lineEndStacks[i] = null;
      result.push([]);
      continue;
    }
    const raw = res.tokens;
    const n = raw.length / 2;
    const tl = [];
    for (let j = 0; j < n; j++) {
      const start = raw[2 * j];
      const end = j + 1 < n ? raw[2 * j + 2] : lines[i].length;
      if (start >= end) continue;
      const fgIdx = (raw[2 * j + 1] & FOREGROUND_MASK) >>> FOREGROUND_SHIFT;
      tl.push({ text: lines[i].slice(start, end), color: colorMap[fgIdx] ?? defaultFg });
    }
    const newStack = res.ruleStack;
    const oldStack = lineEndStacks[i];
    tokenLines[i] = tl;
    lineEndStacks[i] = newStack;
    stack = newStack;
    result.push(tl);
    if (i > from && oldStack && newStack.equals(oldStack)) {
      return result;
    }
  }
  return result;
}
function tokenizeRangePreview(from, to) {
  if (!grammar) return [];
  let stack = import_vscode_textmate.INITIAL;
  const result = [];
  for (let i = from; i < to && i < lines.length; i++) {
    const res = grammar.tokenizeLine2(lines[i], stack, 500);
    if (res.stoppedEarly) {
      tokenLines[i] = [];
      result.push([]);
      continue;
    }
    const raw = res.tokens;
    const n = raw.length / 2;
    const tl = [];
    for (let j = 0; j < n; j++) {
      const start = raw[2 * j];
      const end = j + 1 < n ? raw[2 * j + 2] : lines[i].length;
      if (start >= end) continue;
      const fgIdx = (raw[2 * j + 1] & FOREGROUND_MASK) >>> FOREGROUND_SHIFT;
      tl.push({ text: lines[i].slice(start, end), color: colorMap[fgIdx] ?? defaultFg });
    }
    stack = res.ruleStack;
    tokenLines[i] = tl;
    result.push(tl);
  }
  return result;
}
var BATCH_SIZES = [200, 400, 800, 1600];
var latestPriorityEnd = 0;
var currentFromLine = 0;
async function tokenizeBatches(reqId, fromLine, visFrom, visTo) {
  latestPriorityEnd = 0;
  let from = fromLine;
  if (false) log2.D("hl", "tokenizeBatches reqId=%v fromLine=%v visibleTo=%v totalLines=%v", reqId, fromLine, visTo, lines.length);
  const prefetch = Math.max(0, visTo - visFrom);
  const phase1End = Math.min(lines.length, visTo + prefetch);
  if (phase1End > from) {
    if (currentReqId !== reqId) return;
    if (false) log2.D("hl", "phase1 start from=%v to=%v", from, phase1End);
    const result = tokenizeRange(from, phase1End);
    const actualTo = from + result.length;
    if (false) log2.D("hl", "phase1 done actualTo=%v", actualTo);
    if (currentReqId !== reqId) return;
    self.postMessage({ type: "batch", reqId, from, to: actualTo, tokenLines: result });
    if (result.length < phase1End - from) return;
    from = phase1End;
    await new Promise((r) => setTimeout(r, 0));
  }
  let bi = 0;
  while (from < lines.length) {
    if (currentReqId !== reqId) return;
    const pEnd = latestPriorityEnd;
    if (pEnd > from) {
      const size2 = BATCH_SIZES[Math.min(bi++, BATCH_SIZES.length - 1)];
      const to2 = Math.min(from + size2, pEnd, lines.length);
      const result2 = tokenizeRange(from, to2);
      const actualTo2 = from + result2.length;
      if (currentReqId !== reqId) return;
      if (false) log2.D("hl", "phase2 batch from=%v to=%v", from, actualTo2);
      self.postMessage({ type: "batch", reqId, from, to: actualTo2, tokenLines: result2 });
      if (result2.length < to2 - from) break;
      from = actualTo2;
      await new Promise((r) => setTimeout(r, 0));
      continue;
    }
    const size = BATCH_SIZES[Math.min(bi++, BATCH_SIZES.length - 1)];
    const to = Math.min(from + size, lines.length);
    const result = tokenizeRange(from, to);
    const actualTo = from + result.length;
    if (currentReqId !== reqId) return;
    if (false) log2.D("hl", "phase2 batch from=%v to=%v", from, actualTo);
    self.postMessage({ type: "batch", reqId, from, to: actualTo, tokenLines: result });
    if (result.length < to - from) break;
    from = to;
    if (from < lines.length) {
      await new Promise((r) => setTimeout(r, 0));
    }
  }
}
var wasmReady = false;
var pendingMsgs = [];
self.addEventListener("message", (e) => {
  const msg = e.data;
  if (!wasmReady) {
    pendingMsgs.push(msg);
    return;
  }
  dispatch(msg);
});
function dispatch(msg) {
  if (msg.type === "setLang") {
    handleSetLang(msg.lang);
  } else if (msg.type === "setTheme") {
    handleSetTheme(msg.themeName);
  } else if (msg.type === "update") {
    currentFromLine = msg.fromLine;
    applyEdit(msg.fromLine, msg.removedCount, msg.addedLines);
    currentReqId = msg.reqId;
    tokenizeBatches(
      currentReqId,
      msg.fromLine,
      msg.visibleFrom ?? 0,
      msg.visibleTo ?? 0
    );
  } else if (msg.type === "viewport") {
    const visFrom = msg.visFrom;
    const visTo = msg.visTo;
    const pEnd = visTo + Math.max(0, visTo - visFrom);
    if (pEnd > latestPriorityEnd) latestPriorityEnd = pEnd;
    const N = visTo - visFrom;
    const previewFrom = Math.max(currentFromLine, Math.max(0, visFrom - N));
    const previewTo = Math.min(lines.length, visTo + N);
    let previewStart = previewFrom;
    while (previewStart < previewTo && lineEndStacks[previewStart] !== null) previewStart++;
    if (previewStart < previewTo) {
      const result = tokenizeRangePreview(previewStart, previewTo);
      if (result.length > 0) {
        self.postMessage({ type: "batch", reqId: currentReqId, from: previewStart, to: previewStart + result.length, tokenLines: result });
      }
    }
  }
}
initWasm().then(() => {
  wasmReady = true;
  for (const msg of pendingMsgs) dispatch(msg);
  pendingMsgs.length = 0;
}).catch((e) => {
  self.postMessage({ type: "error", message: String(e) });
});
