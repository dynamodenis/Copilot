import { Fragment as s2, h as tu, reactive as ck, getCurrentInstance as fk, Teleport as dk, createApp as pk, Comment as vk, Text as hk, defineComponent as mk, createBlock as yk, openBlock as gk, unref as Sk } from "vue";
function c2(m) {
  return m && m.__esModule && Object.prototype.hasOwnProperty.call(m, "default") ? m.default : m;
}
var fy = { exports: {} }, pv = {}, dy = { exports: {} }, Lt = {};
var NE;
function _k() {
  if (NE) return Lt;
  NE = 1;
  var m = /* @__PURE__ */ Symbol.for("react.element"), y = /* @__PURE__ */ Symbol.for("react.portal"), h = /* @__PURE__ */ Symbol.for("react.fragment"), R = /* @__PURE__ */ Symbol.for("react.strict_mode"), L = /* @__PURE__ */ Symbol.for("react.profiler"), b = /* @__PURE__ */ Symbol.for("react.provider"), v = /* @__PURE__ */ Symbol.for("react.context"), j = /* @__PURE__ */ Symbol.for("react.forward_ref"), k = /* @__PURE__ */ Symbol.for("react.suspense"), T = /* @__PURE__ */ Symbol.for("react.memo"), F = /* @__PURE__ */ Symbol.for("react.lazy"), $ = Symbol.iterator;
  function Q(U) {
    return U === null || typeof U != "object" ? null : (U = $ && U[$] || U["@@iterator"], typeof U == "function" ? U : null);
  }
  var q = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ae = Object.assign, he = {};
  function fe(U, X, Ze) {
    this.props = U, this.context = X, this.refs = he, this.updater = Ze || q;
  }
  fe.prototype.isReactComponent = {}, fe.prototype.setState = function(U, X) {
    if (typeof U != "object" && typeof U != "function" && U != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, U, X, "setState");
  }, fe.prototype.forceUpdate = function(U) {
    this.updater.enqueueForceUpdate(this, U, "forceUpdate");
  };
  function We() {
  }
  We.prototype = fe.prototype;
  function Se(U, X, Ze) {
    this.props = U, this.context = X, this.refs = he, this.updater = Ze || q;
  }
  var ge = Se.prototype = new We();
  ge.constructor = Se, ae(ge, fe.prototype), ge.isPureReactComponent = !0;
  var Ee = Array.isArray, ve = Object.prototype.hasOwnProperty, Qe = { current: null }, Pe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function He(U, X, Ze) {
    var Ue, ht = {}, tt = null, Le = null;
    if (X != null) for (Ue in X.ref !== void 0 && (Le = X.ref), X.key !== void 0 && (tt = "" + X.key), X) ve.call(X, Ue) && !Pe.hasOwnProperty(Ue) && (ht[Ue] = X[Ue]);
    var st = arguments.length - 2;
    if (st === 1) ht.children = Ze;
    else if (1 < st) {
      for (var dt = Array(st), Gt = 0; Gt < st; Gt++) dt[Gt] = arguments[Gt + 2];
      ht.children = dt;
    }
    if (U && U.defaultProps) for (Ue in st = U.defaultProps, st) ht[Ue] === void 0 && (ht[Ue] = st[Ue]);
    return { $$typeof: m, type: U, key: tt, ref: Le, props: ht, _owner: Qe.current };
  }
  function Xe(U, X) {
    return { $$typeof: m, type: U.type, key: X, ref: U.ref, props: U.props, _owner: U._owner };
  }
  function ot(U) {
    return typeof U == "object" && U !== null && U.$$typeof === m;
  }
  function ut(U) {
    var X = { "=": "=0", ":": "=2" };
    return "$" + U.replace(/[=:]/g, function(Ze) {
      return X[Ze];
    });
  }
  var K = /\/+/g;
  function ee(U, X) {
    return typeof U == "object" && U !== null && U.key != null ? ut("" + U.key) : X.toString(36);
  }
  function be(U, X, Ze, Ue, ht) {
    var tt = typeof U;
    (tt === "undefined" || tt === "boolean") && (U = null);
    var Le = !1;
    if (U === null) Le = !0;
    else switch (tt) {
      case "string":
      case "number":
        Le = !0;
        break;
      case "object":
        switch (U.$$typeof) {
          case m:
          case y:
            Le = !0;
        }
    }
    if (Le) return Le = U, ht = ht(Le), U = Ue === "" ? "." + ee(Le, 0) : Ue, Ee(ht) ? (Ze = "", U != null && (Ze = U.replace(K, "$&/") + "/"), be(ht, X, Ze, "", function(Gt) {
      return Gt;
    })) : ht != null && (ot(ht) && (ht = Xe(ht, Ze + (!ht.key || Le && Le.key === ht.key ? "" : ("" + ht.key).replace(K, "$&/") + "/") + U)), X.push(ht)), 1;
    if (Le = 0, Ue = Ue === "" ? "." : Ue + ":", Ee(U)) for (var st = 0; st < U.length; st++) {
      tt = U[st];
      var dt = Ue + ee(tt, st);
      Le += be(tt, X, Ze, dt, ht);
    }
    else if (dt = Q(U), typeof dt == "function") for (U = dt.call(U), st = 0; !(tt = U.next()).done; ) tt = tt.value, dt = Ue + ee(tt, st++), Le += be(tt, X, Ze, dt, ht);
    else if (tt === "object") throw X = String(U), Error("Objects are not valid as a React child (found: " + (X === "[object Object]" ? "object with keys {" + Object.keys(U).join(", ") + "}" : X) + "). If you meant to render a collection of children, use an array instead.");
    return Le;
  }
  function Ve(U, X, Ze) {
    if (U == null) return U;
    var Ue = [], ht = 0;
    return be(U, Ue, "", "", function(tt) {
      return X.call(Ze, tt, ht++);
    }), Ue;
  }
  function we(U) {
    if (U._status === -1) {
      var X = U._result;
      X = X(), X.then(function(Ze) {
        (U._status === 0 || U._status === -1) && (U._status = 1, U._result = Ze);
      }, function(Ze) {
        (U._status === 0 || U._status === -1) && (U._status = 2, U._result = Ze);
      }), U._status === -1 && (U._status = 0, U._result = X);
    }
    if (U._status === 1) return U._result.default;
    throw U._result;
  }
  var _e = { current: null }, te = { transition: null }, Oe = { ReactCurrentDispatcher: _e, ReactCurrentBatchConfig: te, ReactCurrentOwner: Qe };
  function me() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Lt.Children = { map: Ve, forEach: function(U, X, Ze) {
    Ve(U, function() {
      X.apply(this, arguments);
    }, Ze);
  }, count: function(U) {
    var X = 0;
    return Ve(U, function() {
      X++;
    }), X;
  }, toArray: function(U) {
    return Ve(U, function(X) {
      return X;
    }) || [];
  }, only: function(U) {
    if (!ot(U)) throw Error("React.Children.only expected to receive a single React element child.");
    return U;
  } }, Lt.Component = fe, Lt.Fragment = h, Lt.Profiler = L, Lt.PureComponent = Se, Lt.StrictMode = R, Lt.Suspense = k, Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Oe, Lt.act = me, Lt.cloneElement = function(U, X, Ze) {
    if (U == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + U + ".");
    var Ue = ae({}, U.props), ht = U.key, tt = U.ref, Le = U._owner;
    if (X != null) {
      if (X.ref !== void 0 && (tt = X.ref, Le = Qe.current), X.key !== void 0 && (ht = "" + X.key), U.type && U.type.defaultProps) var st = U.type.defaultProps;
      for (dt in X) ve.call(X, dt) && !Pe.hasOwnProperty(dt) && (Ue[dt] = X[dt] === void 0 && st !== void 0 ? st[dt] : X[dt]);
    }
    var dt = arguments.length - 2;
    if (dt === 1) Ue.children = Ze;
    else if (1 < dt) {
      st = Array(dt);
      for (var Gt = 0; Gt < dt; Gt++) st[Gt] = arguments[Gt + 2];
      Ue.children = st;
    }
    return { $$typeof: m, type: U.type, key: ht, ref: tt, props: Ue, _owner: Le };
  }, Lt.createContext = function(U) {
    return U = { $$typeof: v, _currentValue: U, _currentValue2: U, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, U.Provider = { $$typeof: b, _context: U }, U.Consumer = U;
  }, Lt.createElement = He, Lt.createFactory = function(U) {
    var X = He.bind(null, U);
    return X.type = U, X;
  }, Lt.createRef = function() {
    return { current: null };
  }, Lt.forwardRef = function(U) {
    return { $$typeof: j, render: U };
  }, Lt.isValidElement = ot, Lt.lazy = function(U) {
    return { $$typeof: F, _payload: { _status: -1, _result: U }, _init: we };
  }, Lt.memo = function(U, X) {
    return { $$typeof: T, type: U, compare: X === void 0 ? null : X };
  }, Lt.startTransition = function(U) {
    var X = te.transition;
    te.transition = {};
    try {
      U();
    } finally {
      te.transition = X;
    }
  }, Lt.unstable_act = me, Lt.useCallback = function(U, X) {
    return _e.current.useCallback(U, X);
  }, Lt.useContext = function(U) {
    return _e.current.useContext(U);
  }, Lt.useDebugValue = function() {
  }, Lt.useDeferredValue = function(U) {
    return _e.current.useDeferredValue(U);
  }, Lt.useEffect = function(U, X) {
    return _e.current.useEffect(U, X);
  }, Lt.useId = function() {
    return _e.current.useId();
  }, Lt.useImperativeHandle = function(U, X, Ze) {
    return _e.current.useImperativeHandle(U, X, Ze);
  }, Lt.useInsertionEffect = function(U, X) {
    return _e.current.useInsertionEffect(U, X);
  }, Lt.useLayoutEffect = function(U, X) {
    return _e.current.useLayoutEffect(U, X);
  }, Lt.useMemo = function(U, X) {
    return _e.current.useMemo(U, X);
  }, Lt.useReducer = function(U, X, Ze) {
    return _e.current.useReducer(U, X, Ze);
  }, Lt.useRef = function(U) {
    return _e.current.useRef(U);
  }, Lt.useState = function(U) {
    return _e.current.useState(U);
  }, Lt.useSyncExternalStore = function(U, X, Ze) {
    return _e.current.useSyncExternalStore(U, X, Ze);
  }, Lt.useTransition = function() {
    return _e.current.useTransition();
  }, Lt.version = "18.3.1", Lt;
}
var mv = { exports: {} };
mv.exports;
var ME;
function Ck() {
  return ME || (ME = 1, (function(m, y) {
    process.env.NODE_ENV !== "production" && (function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var h = "18.3.1", R = /* @__PURE__ */ Symbol.for("react.element"), L = /* @__PURE__ */ Symbol.for("react.portal"), b = /* @__PURE__ */ Symbol.for("react.fragment"), v = /* @__PURE__ */ Symbol.for("react.strict_mode"), j = /* @__PURE__ */ Symbol.for("react.profiler"), k = /* @__PURE__ */ Symbol.for("react.provider"), T = /* @__PURE__ */ Symbol.for("react.context"), F = /* @__PURE__ */ Symbol.for("react.forward_ref"), $ = /* @__PURE__ */ Symbol.for("react.suspense"), Q = /* @__PURE__ */ Symbol.for("react.suspense_list"), q = /* @__PURE__ */ Symbol.for("react.memo"), ae = /* @__PURE__ */ Symbol.for("react.lazy"), he = /* @__PURE__ */ Symbol.for("react.offscreen"), fe = Symbol.iterator, We = "@@iterator";
      function Se(S) {
        if (S === null || typeof S != "object")
          return null;
        var w = fe && S[fe] || S[We];
        return typeof w == "function" ? w : null;
      }
      var ge = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ee = {
        transition: null
      }, ve = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Qe = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Pe = {}, He = null;
      function Xe(S) {
        He = S;
      }
      Pe.setExtraStackFrame = function(S) {
        He = S;
      }, Pe.getCurrentStack = null, Pe.getStackAddendum = function() {
        var S = "";
        He && (S += He);
        var w = Pe.getCurrentStack;
        return w && (S += w() || ""), S;
      };
      var ot = !1, ut = !1, K = !1, ee = !1, be = !1, Ve = {
        ReactCurrentDispatcher: ge,
        ReactCurrentBatchConfig: Ee,
        ReactCurrentOwner: Qe
      };
      Ve.ReactDebugCurrentFrame = Pe, Ve.ReactCurrentActQueue = ve;
      function we(S) {
        {
          for (var w = arguments.length, B = new Array(w > 1 ? w - 1 : 0), G = 1; G < w; G++)
            B[G - 1] = arguments[G];
          te("warn", S, B);
        }
      }
      function _e(S) {
        {
          for (var w = arguments.length, B = new Array(w > 1 ? w - 1 : 0), G = 1; G < w; G++)
            B[G - 1] = arguments[G];
          te("error", S, B);
        }
      }
      function te(S, w, B) {
        {
          var G = Ve.ReactDebugCurrentFrame, ye = G.getStackAddendum();
          ye !== "" && (w += "%s", B = B.concat([ye]));
          var nt = B.map(function(Te) {
            return String(Te);
          });
          nt.unshift("Warning: " + w), Function.prototype.apply.call(console[S], console, nt);
        }
      }
      var Oe = {};
      function me(S, w) {
        {
          var B = S.constructor, G = B && (B.displayName || B.name) || "ReactClass", ye = G + "." + w;
          if (Oe[ye])
            return;
          _e("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", w, G), Oe[ye] = !0;
        }
      }
      var U = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(S) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(S, w, B) {
          me(S, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(S, w, B, G) {
          me(S, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(S, w, B, G) {
          me(S, "setState");
        }
      }, X = Object.assign, Ze = {};
      Object.freeze(Ze);
      function Ue(S, w, B) {
        this.props = S, this.context = w, this.refs = Ze, this.updater = B || U;
      }
      Ue.prototype.isReactComponent = {}, Ue.prototype.setState = function(S, w) {
        if (typeof S != "object" && typeof S != "function" && S != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, S, w, "setState");
      }, Ue.prototype.forceUpdate = function(S) {
        this.updater.enqueueForceUpdate(this, S, "forceUpdate");
      };
      {
        var ht = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, tt = function(S, w) {
          Object.defineProperty(Ue.prototype, S, {
            get: function() {
              we("%s(...) is deprecated in plain JavaScript React classes. %s", w[0], w[1]);
            }
          });
        };
        for (var Le in ht)
          ht.hasOwnProperty(Le) && tt(Le, ht[Le]);
      }
      function st() {
      }
      st.prototype = Ue.prototype;
      function dt(S, w, B) {
        this.props = S, this.context = w, this.refs = Ze, this.updater = B || U;
      }
      var Gt = dt.prototype = new st();
      Gt.constructor = dt, X(Gt, Ue.prototype), Gt.isPureReactComponent = !0;
      function Mn() {
        var S = {
          current: null
        };
        return Object.seal(S), S;
      }
      var Dr = Array.isArray;
      function bn(S) {
        return Dr(S);
      }
      function lr(S) {
        {
          var w = typeof Symbol == "function" && Symbol.toStringTag, B = w && S[Symbol.toStringTag] || S.constructor.name || "Object";
          return B;
        }
      }
      function $n(S) {
        try {
          return Wn(S), !1;
        } catch {
          return !0;
        }
      }
      function Wn(S) {
        return "" + S;
      }
      function qr(S) {
        if ($n(S))
          return _e("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", lr(S)), Wn(S);
      }
      function vi(S, w, B) {
        var G = S.displayName;
        if (G)
          return G;
        var ye = w.displayName || w.name || "";
        return ye !== "" ? B + "(" + ye + ")" : B;
      }
      function pa(S) {
        return S.displayName || "Context";
      }
      function Jn(S) {
        if (S == null)
          return null;
        if (typeof S.tag == "number" && _e("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof S == "function")
          return S.displayName || S.name || null;
        if (typeof S == "string")
          return S;
        switch (S) {
          case b:
            return "Fragment";
          case L:
            return "Portal";
          case j:
            return "Profiler";
          case v:
            return "StrictMode";
          case $:
            return "Suspense";
          case Q:
            return "SuspenseList";
        }
        if (typeof S == "object")
          switch (S.$$typeof) {
            case T:
              var w = S;
              return pa(w) + ".Consumer";
            case k:
              var B = S;
              return pa(B._context) + ".Provider";
            case F:
              return vi(S, S.render, "ForwardRef");
            case q:
              var G = S.displayName || null;
              return G !== null ? G : Jn(S.type) || "Memo";
            case ae: {
              var ye = S, nt = ye._payload, Te = ye._init;
              try {
                return Jn(Te(nt));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Tn = Object.prototype.hasOwnProperty, Yn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Er, qa, An;
      An = {};
      function Rr(S) {
        if (Tn.call(S, "ref")) {
          var w = Object.getOwnPropertyDescriptor(S, "ref").get;
          if (w && w.isReactWarning)
            return !1;
        }
        return S.ref !== void 0;
      }
      function va(S) {
        if (Tn.call(S, "key")) {
          var w = Object.getOwnPropertyDescriptor(S, "key").get;
          if (w && w.isReactWarning)
            return !1;
        }
        return S.key !== void 0;
      }
      function Ka(S, w) {
        var B = function() {
          Er || (Er = !0, _e("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        B.isReactWarning = !0, Object.defineProperty(S, "key", {
          get: B,
          configurable: !0
        });
      }
      function hi(S, w) {
        var B = function() {
          qa || (qa = !0, _e("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        B.isReactWarning = !0, Object.defineProperty(S, "ref", {
          get: B,
          configurable: !0
        });
      }
      function Ce(S) {
        if (typeof S.ref == "string" && Qe.current && S.__self && Qe.current.stateNode !== S.__self) {
          var w = Jn(Qe.current.type);
          An[w] || (_e('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w, S.ref), An[w] = !0);
        }
      }
      var Ge = function(S, w, B, G, ye, nt, Te) {
        var it = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: R,
          // Built-in properties that belong on the element
          type: S,
          key: w,
          ref: B,
          props: Te,
          // Record the component responsible for creating this element.
          _owner: nt
        };
        return it._store = {}, Object.defineProperty(it._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(it, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: G
        }), Object.defineProperty(it, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ye
        }), Object.freeze && (Object.freeze(it.props), Object.freeze(it)), it;
      };
      function bt(S, w, B) {
        var G, ye = {}, nt = null, Te = null, it = null, Dt = null;
        if (w != null) {
          Rr(w) && (Te = w.ref, Ce(w)), va(w) && (qr(w.key), nt = "" + w.key), it = w.__self === void 0 ? null : w.__self, Dt = w.__source === void 0 ? null : w.__source;
          for (G in w)
            Tn.call(w, G) && !Yn.hasOwnProperty(G) && (ye[G] = w[G]);
        }
        var zt = arguments.length - 2;
        if (zt === 1)
          ye.children = B;
        else if (zt > 1) {
          for (var un = Array(zt), Zt = 0; Zt < zt; Zt++)
            un[Zt] = arguments[Zt + 2];
          Object.freeze && Object.freeze(un), ye.children = un;
        }
        if (S && S.defaultProps) {
          var Tt = S.defaultProps;
          for (G in Tt)
            ye[G] === void 0 && (ye[G] = Tt[G]);
        }
        if (nt || Te) {
          var Jt = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
          nt && Ka(ye, Jt), Te && hi(ye, Jt);
        }
        return Ge(S, nt, Te, it, Dt, Qe.current, ye);
      }
      function Wt(S, w) {
        var B = Ge(S.type, w, S.ref, S._self, S._source, S._owner, S.props);
        return B;
      }
      function an(S, w, B) {
        if (S == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + S + ".");
        var G, ye = X({}, S.props), nt = S.key, Te = S.ref, it = S._self, Dt = S._source, zt = S._owner;
        if (w != null) {
          Rr(w) && (Te = w.ref, zt = Qe.current), va(w) && (qr(w.key), nt = "" + w.key);
          var un;
          S.type && S.type.defaultProps && (un = S.type.defaultProps);
          for (G in w)
            Tn.call(w, G) && !Yn.hasOwnProperty(G) && (w[G] === void 0 && un !== void 0 ? ye[G] = un[G] : ye[G] = w[G]);
        }
        var Zt = arguments.length - 2;
        if (Zt === 1)
          ye.children = B;
        else if (Zt > 1) {
          for (var Tt = Array(Zt), Jt = 0; Jt < Zt; Jt++)
            Tt[Jt] = arguments[Jt + 2];
          ye.children = Tt;
        }
        return Ge(S.type, nt, Te, it, Dt, zt, ye);
      }
      function mn(S) {
        return typeof S == "object" && S !== null && S.$$typeof === R;
      }
      var cn = ".", er = ":";
      function ln(S) {
        var w = /[=:]/g, B = {
          "=": "=0",
          ":": "=2"
        }, G = S.replace(w, function(ye) {
          return B[ye];
        });
        return "$" + G;
      }
      var qt = !1, Kt = /\/+/g;
      function ha(S) {
        return S.replace(Kt, "$&/");
      }
      function br(S, w) {
        return typeof S == "object" && S !== null && S.key != null ? (qr(S.key), ln("" + S.key)) : w.toString(36);
      }
      function ka(S, w, B, G, ye) {
        var nt = typeof S;
        (nt === "undefined" || nt === "boolean") && (S = null);
        var Te = !1;
        if (S === null)
          Te = !0;
        else
          switch (nt) {
            case "string":
            case "number":
              Te = !0;
              break;
            case "object":
              switch (S.$$typeof) {
                case R:
                case L:
                  Te = !0;
              }
          }
        if (Te) {
          var it = S, Dt = ye(it), zt = G === "" ? cn + br(it, 0) : G;
          if (bn(Dt)) {
            var un = "";
            zt != null && (un = ha(zt) + "/"), ka(Dt, w, un, "", function(fd) {
              return fd;
            });
          } else Dt != null && (mn(Dt) && (Dt.key && (!it || it.key !== Dt.key) && qr(Dt.key), Dt = Wt(
            Dt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            B + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (Dt.key && (!it || it.key !== Dt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              ha("" + Dt.key) + "/"
            ) : "") + zt
          )), w.push(Dt));
          return 1;
        }
        var Zt, Tt, Jt = 0, yn = G === "" ? cn : G + er;
        if (bn(S))
          for (var kl = 0; kl < S.length; kl++)
            Zt = S[kl], Tt = yn + br(Zt, kl), Jt += ka(Zt, w, B, Tt, ye);
        else {
          var as = Se(S);
          if (typeof as == "function") {
            var Gi = S;
            as === Gi.entries && (qt || we("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), qt = !0);
            for (var is = as.call(Gi), ho, cd = 0; !(ho = is.next()).done; )
              Zt = ho.value, Tt = yn + br(Zt, cd++), Jt += ka(Zt, w, B, Tt, ye);
          } else if (nt === "object") {
            var _c = String(S);
            throw new Error("Objects are not valid as a React child (found: " + (_c === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : _c) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Jt;
      }
      function Wi(S, w, B) {
        if (S == null)
          return S;
        var G = [], ye = 0;
        return ka(S, G, "", "", function(nt) {
          return w.call(B, nt, ye++);
        }), G;
      }
      function io(S) {
        var w = 0;
        return Wi(S, function() {
          w++;
        }), w;
      }
      function lo(S, w, B) {
        Wi(S, function() {
          w.apply(this, arguments);
        }, B);
      }
      function Sl(S) {
        return Wi(S, function(w) {
          return w;
        }) || [];
      }
      function _l(S) {
        if (!mn(S))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return S;
      }
      function oo(S) {
        var w = {
          $$typeof: T,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: S,
          _currentValue2: S,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        w.Provider = {
          $$typeof: k,
          _context: w
        };
        var B = !1, G = !1, ye = !1;
        {
          var nt = {
            $$typeof: T,
            _context: w
          };
          Object.defineProperties(nt, {
            Provider: {
              get: function() {
                return G || (G = !0, _e("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), w.Provider;
              },
              set: function(Te) {
                w.Provider = Te;
              }
            },
            _currentValue: {
              get: function() {
                return w._currentValue;
              },
              set: function(Te) {
                w._currentValue = Te;
              }
            },
            _currentValue2: {
              get: function() {
                return w._currentValue2;
              },
              set: function(Te) {
                w._currentValue2 = Te;
              }
            },
            _threadCount: {
              get: function() {
                return w._threadCount;
              },
              set: function(Te) {
                w._threadCount = Te;
              }
            },
            Consumer: {
              get: function() {
                return B || (B = !0, _e("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), w.Consumer;
              }
            },
            displayName: {
              get: function() {
                return w.displayName;
              },
              set: function(Te) {
                ye || (we("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Te), ye = !0);
              }
            }
          }), w.Consumer = nt;
        }
        return w._currentRenderer = null, w._currentRenderer2 = null, w;
      }
      var Or = -1, Lr = 0, or = 1, mi = 2;
      function Xa(S) {
        if (S._status === Or) {
          var w = S._result, B = w();
          if (B.then(function(nt) {
            if (S._status === Lr || S._status === Or) {
              var Te = S;
              Te._status = or, Te._result = nt;
            }
          }, function(nt) {
            if (S._status === Lr || S._status === Or) {
              var Te = S;
              Te._status = mi, Te._result = nt;
            }
          }), S._status === Or) {
            var G = S;
            G._status = Lr, G._result = B;
          }
        }
        if (S._status === or) {
          var ye = S._result;
          return ye === void 0 && _e(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ye), "default" in ye || _e(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ye), ye.default;
        } else
          throw S._result;
      }
      function yi(S) {
        var w = {
          // We use these fields to store the result.
          _status: Or,
          _result: S
        }, B = {
          $$typeof: ae,
          _payload: w,
          _init: Xa
        };
        {
          var G, ye;
          Object.defineProperties(B, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return G;
              },
              set: function(nt) {
                _e("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), G = nt, Object.defineProperty(B, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return ye;
              },
              set: function(nt) {
                _e("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ye = nt, Object.defineProperty(B, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return B;
      }
      function gi(S) {
        S != null && S.$$typeof === q ? _e("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof S != "function" ? _e("forwardRef requires a render function but was given %s.", S === null ? "null" : typeof S) : S.length !== 0 && S.length !== 2 && _e("forwardRef render functions accept exactly two parameters: props and ref. %s", S.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), S != null && (S.defaultProps != null || S.propTypes != null) && _e("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var w = {
          $$typeof: F,
          render: S
        };
        {
          var B;
          Object.defineProperty(w, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return B;
            },
            set: function(G) {
              B = G, !S.name && !S.displayName && (S.displayName = G);
            }
          });
        }
        return w;
      }
      var D;
      D = /* @__PURE__ */ Symbol.for("react.module.reference");
      function ie(S) {
        return !!(typeof S == "string" || typeof S == "function" || S === b || S === j || be || S === v || S === $ || S === Q || ee || S === he || ot || ut || K || typeof S == "object" && S !== null && (S.$$typeof === ae || S.$$typeof === q || S.$$typeof === k || S.$$typeof === T || S.$$typeof === F || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        S.$$typeof === D || S.getModuleId !== void 0));
      }
      function xe(S, w) {
        ie(S) || _e("memo: The first argument must be a component. Instead received: %s", S === null ? "null" : typeof S);
        var B = {
          $$typeof: q,
          type: S,
          compare: w === void 0 ? null : w
        };
        {
          var G;
          Object.defineProperty(B, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return G;
            },
            set: function(ye) {
              G = ye, !S.name && !S.displayName && (S.displayName = ye);
            }
          });
        }
        return B;
      }
      function Fe() {
        var S = ge.current;
        return S === null && _e(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), S;
      }
      function St(S) {
        var w = Fe();
        if (S._context !== void 0) {
          var B = S._context;
          B.Consumer === S ? _e("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : B.Provider === S && _e("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return w.useContext(S);
      }
      function mt(S) {
        var w = Fe();
        return w.useState(S);
      }
      function kt(S, w, B) {
        var G = Fe();
        return G.useReducer(S, w, B);
      }
      function xt(S) {
        var w = Fe();
        return w.useRef(S);
      }
      function xn(S, w) {
        var B = Fe();
        return B.useEffect(S, w);
      }
      function on(S, w) {
        var B = Fe();
        return B.useInsertionEffect(S, w);
      }
      function fn(S, w) {
        var B = Fe();
        return B.useLayoutEffect(S, w);
      }
      function ur(S, w) {
        var B = Fe();
        return B.useCallback(S, w);
      }
      function Za(S, w) {
        var B = Fe();
        return B.useMemo(S, w);
      }
      function Ja(S, w, B) {
        var G = Fe();
        return G.useImperativeHandle(S, w, B);
      }
      function _t(S, w) {
        {
          var B = Fe();
          return B.useDebugValue(S, w);
        }
      }
      function Rt() {
        var S = Fe();
        return S.useTransition();
      }
      function ei(S) {
        var w = Fe();
        return w.useDeferredValue(S);
      }
      function uo() {
        var S = Fe();
        return S.useId();
      }
      function so(S, w, B) {
        var G = Fe();
        return G.useSyncExternalStore(S, w, B);
      }
      var Cl = 0, nu, El, Kr, es, Nr, gc, Sc;
      function ru() {
      }
      ru.__reactDisabledLog = !0;
      function Rl() {
        {
          if (Cl === 0) {
            nu = console.log, El = console.info, Kr = console.warn, es = console.error, Nr = console.group, gc = console.groupCollapsed, Sc = console.groupEnd;
            var S = {
              configurable: !0,
              enumerable: !0,
              value: ru,
              writable: !0
            };
            Object.defineProperties(console, {
              info: S,
              log: S,
              warn: S,
              error: S,
              group: S,
              groupCollapsed: S,
              groupEnd: S
            });
          }
          Cl++;
        }
      }
      function ma() {
        {
          if (Cl--, Cl === 0) {
            var S = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: X({}, S, {
                value: nu
              }),
              info: X({}, S, {
                value: El
              }),
              warn: X({}, S, {
                value: Kr
              }),
              error: X({}, S, {
                value: es
              }),
              group: X({}, S, {
                value: Nr
              }),
              groupCollapsed: X({}, S, {
                value: gc
              }),
              groupEnd: X({}, S, {
                value: Sc
              })
            });
          }
          Cl < 0 && _e("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ti = Ve.ReactCurrentDispatcher, ni;
      function au(S, w, B) {
        {
          if (ni === void 0)
            try {
              throw Error();
            } catch (ye) {
              var G = ye.stack.trim().match(/\n( *(at )?)/);
              ni = G && G[1] || "";
            }
          return `
` + ni + S;
        }
      }
      var co = !1, bl;
      {
        var iu = typeof WeakMap == "function" ? WeakMap : Map;
        bl = new iu();
      }
      function lu(S, w) {
        if (!S || co)
          return "";
        {
          var B = bl.get(S);
          if (B !== void 0)
            return B;
        }
        var G;
        co = !0;
        var ye = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var nt;
        nt = ti.current, ti.current = null, Rl();
        try {
          if (w) {
            var Te = function() {
              throw Error();
            };
            if (Object.defineProperty(Te.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Te, []);
              } catch (yn) {
                G = yn;
              }
              Reflect.construct(S, [], Te);
            } else {
              try {
                Te.call();
              } catch (yn) {
                G = yn;
              }
              S.call(Te.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (yn) {
              G = yn;
            }
            S();
          }
        } catch (yn) {
          if (yn && G && typeof yn.stack == "string") {
            for (var it = yn.stack.split(`
`), Dt = G.stack.split(`
`), zt = it.length - 1, un = Dt.length - 1; zt >= 1 && un >= 0 && it[zt] !== Dt[un]; )
              un--;
            for (; zt >= 1 && un >= 0; zt--, un--)
              if (it[zt] !== Dt[un]) {
                if (zt !== 1 || un !== 1)
                  do
                    if (zt--, un--, un < 0 || it[zt] !== Dt[un]) {
                      var Zt = `
` + it[zt].replace(" at new ", " at ");
                      return S.displayName && Zt.includes("<anonymous>") && (Zt = Zt.replace("<anonymous>", S.displayName)), typeof S == "function" && bl.set(S, Zt), Zt;
                    }
                  while (zt >= 1 && un >= 0);
                break;
              }
          }
        } finally {
          co = !1, ti.current = nt, ma(), Error.prepareStackTrace = ye;
        }
        var Tt = S ? S.displayName || S.name : "", Jt = Tt ? au(Tt) : "";
        return typeof S == "function" && bl.set(S, Jt), Jt;
      }
      function Yi(S, w, B) {
        return lu(S, !1);
      }
      function ud(S) {
        var w = S.prototype;
        return !!(w && w.isReactComponent);
      }
      function Qi(S, w, B) {
        if (S == null)
          return "";
        if (typeof S == "function")
          return lu(S, ud(S));
        if (typeof S == "string")
          return au(S);
        switch (S) {
          case $:
            return au("Suspense");
          case Q:
            return au("SuspenseList");
        }
        if (typeof S == "object")
          switch (S.$$typeof) {
            case F:
              return Yi(S.render);
            case q:
              return Qi(S.type, w, B);
            case ae: {
              var G = S, ye = G._payload, nt = G._init;
              try {
                return Qi(nt(ye), w, B);
              } catch {
              }
            }
          }
        return "";
      }
      var Pt = {}, ou = Ve.ReactDebugCurrentFrame;
      function jt(S) {
        if (S) {
          var w = S._owner, B = Qi(S.type, S._source, w ? w.type : null);
          ou.setExtraStackFrame(B);
        } else
          ou.setExtraStackFrame(null);
      }
      function ts(S, w, B, G, ye) {
        {
          var nt = Function.call.bind(Tn);
          for (var Te in S)
            if (nt(S, Te)) {
              var it = void 0;
              try {
                if (typeof S[Te] != "function") {
                  var Dt = Error((G || "React class") + ": " + B + " type `" + Te + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[Te] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Dt.name = "Invariant Violation", Dt;
                }
                it = S[Te](w, Te, G, B, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (zt) {
                it = zt;
              }
              it && !(it instanceof Error) && (jt(ye), _e("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", G || "React class", B, Te, typeof it), jt(null)), it instanceof Error && !(it.message in Pt) && (Pt[it.message] = !0, jt(ye), _e("Failed %s type: %s", B, it.message), jt(null));
            }
        }
      }
      function Si(S) {
        if (S) {
          var w = S._owner, B = Qi(S.type, S._source, w ? w.type : null);
          Xe(B);
        } else
          Xe(null);
      }
      var vt;
      vt = !1;
      function uu() {
        if (Qe.current) {
          var S = Jn(Qe.current.type);
          if (S)
            return `

Check the render method of \`` + S + "`.";
        }
        return "";
      }
      function sr(S) {
        if (S !== void 0) {
          var w = S.fileName.replace(/^.*[\\\/]/, ""), B = S.lineNumber;
          return `

Check your code at ` + w + ":" + B + ".";
        }
        return "";
      }
      function _i(S) {
        return S != null ? sr(S.__source) : "";
      }
      var Mr = {};
      function Ci(S) {
        var w = uu();
        if (!w) {
          var B = typeof S == "string" ? S : S.displayName || S.name;
          B && (w = `

Check the top-level render call using <` + B + ">.");
        }
        return w;
      }
      function dn(S, w) {
        if (!(!S._store || S._store.validated || S.key != null)) {
          S._store.validated = !0;
          var B = Ci(w);
          if (!Mr[B]) {
            Mr[B] = !0;
            var G = "";
            S && S._owner && S._owner !== Qe.current && (G = " It was passed a child from " + Jn(S._owner.type) + "."), Si(S), _e('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', B, G), Si(null);
          }
        }
      }
      function Xt(S, w) {
        if (typeof S == "object") {
          if (bn(S))
            for (var B = 0; B < S.length; B++) {
              var G = S[B];
              mn(G) && dn(G, w);
            }
          else if (mn(S))
            S._store && (S._store.validated = !0);
          else if (S) {
            var ye = Se(S);
            if (typeof ye == "function" && ye !== S.entries)
              for (var nt = ye.call(S), Te; !(Te = nt.next()).done; )
                mn(Te.value) && dn(Te.value, w);
          }
        }
      }
      function Tl(S) {
        {
          var w = S.type;
          if (w == null || typeof w == "string")
            return;
          var B;
          if (typeof w == "function")
            B = w.propTypes;
          else if (typeof w == "object" && (w.$$typeof === F || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          w.$$typeof === q))
            B = w.propTypes;
          else
            return;
          if (B) {
            var G = Jn(w);
            ts(B, S.props, "prop", G, S);
          } else if (w.PropTypes !== void 0 && !vt) {
            vt = !0;
            var ye = Jn(w);
            _e("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ye || "Unknown");
          }
          typeof w.getDefaultProps == "function" && !w.getDefaultProps.isReactClassApproved && _e("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Qn(S) {
        {
          for (var w = Object.keys(S.props), B = 0; B < w.length; B++) {
            var G = w[B];
            if (G !== "children" && G !== "key") {
              Si(S), _e("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", G), Si(null);
              break;
            }
          }
          S.ref !== null && (Si(S), _e("Invalid attribute `ref` supplied to `React.Fragment`."), Si(null));
        }
      }
      function Ar(S, w, B) {
        var G = ie(S);
        if (!G) {
          var ye = "";
          (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (ye += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var nt = _i(w);
          nt ? ye += nt : ye += uu();
          var Te;
          S === null ? Te = "null" : bn(S) ? Te = "array" : S !== void 0 && S.$$typeof === R ? (Te = "<" + (Jn(S.type) || "Unknown") + " />", ye = " Did you accidentally export a JSX literal instead of a component?") : Te = typeof S, _e("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Te, ye);
        }
        var it = bt.apply(this, arguments);
        if (it == null)
          return it;
        if (G)
          for (var Dt = 2; Dt < arguments.length; Dt++)
            Xt(arguments[Dt], S);
        return S === b ? Qn(it) : Tl(it), it;
      }
      var Da = !1;
      function fo(S) {
        var w = Ar.bind(null, S);
        return w.type = S, Da || (Da = !0, we("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(w, "type", {
          enumerable: !1,
          get: function() {
            return we("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: S
            }), S;
          }
        }), w;
      }
      function ns(S, w, B) {
        for (var G = an.apply(this, arguments), ye = 2; ye < arguments.length; ye++)
          Xt(arguments[ye], G.type);
        return Tl(G), G;
      }
      function rs(S, w) {
        var B = Ee.transition;
        Ee.transition = {};
        var G = Ee.transition;
        Ee.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          S();
        } finally {
          if (Ee.transition = B, B === null && G._updatedFibers) {
            var ye = G._updatedFibers.size;
            ye > 10 && we("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), G._updatedFibers.clear();
          }
        }
      }
      var xl = !1, po = null;
      function sd(S) {
        if (po === null)
          try {
            var w = ("require" + Math.random()).slice(0, 7), B = m && m[w];
            po = B.call(m, "timers").setImmediate;
          } catch {
            po = function(ye) {
              xl === !1 && (xl = !0, typeof MessageChannel > "u" && _e("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var nt = new MessageChannel();
              nt.port1.onmessage = ye, nt.port2.postMessage(void 0);
            };
          }
        return po(S);
      }
      var Oa = 0, ri = !1;
      function Ei(S) {
        {
          var w = Oa;
          Oa++, ve.current === null && (ve.current = []);
          var B = ve.isBatchingLegacy, G;
          try {
            if (ve.isBatchingLegacy = !0, G = S(), !B && ve.didScheduleLegacyUpdate) {
              var ye = ve.current;
              ye !== null && (ve.didScheduleLegacyUpdate = !1, wl(ye));
            }
          } catch (Tt) {
            throw La(w), Tt;
          } finally {
            ve.isBatchingLegacy = B;
          }
          if (G !== null && typeof G == "object" && typeof G.then == "function") {
            var nt = G, Te = !1, it = {
              then: function(Tt, Jt) {
                Te = !0, nt.then(function(yn) {
                  La(w), Oa === 0 ? su(yn, Tt, Jt) : Tt(yn);
                }, function(yn) {
                  La(w), Jt(yn);
                });
              }
            };
            return !ri && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Te || (ri = !0, _e("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), it;
          } else {
            var Dt = G;
            if (La(w), Oa === 0) {
              var zt = ve.current;
              zt !== null && (wl(zt), ve.current = null);
              var un = {
                then: function(Tt, Jt) {
                  ve.current === null ? (ve.current = [], su(Dt, Tt, Jt)) : Tt(Dt);
                }
              };
              return un;
            } else {
              var Zt = {
                then: function(Tt, Jt) {
                  Tt(Dt);
                }
              };
              return Zt;
            }
          }
        }
      }
      function La(S) {
        S !== Oa - 1 && _e("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Oa = S;
      }
      function su(S, w, B) {
        {
          var G = ve.current;
          if (G !== null)
            try {
              wl(G), sd(function() {
                G.length === 0 ? (ve.current = null, w(S)) : su(S, w, B);
              });
            } catch (ye) {
              B(ye);
            }
          else
            w(S);
        }
      }
      var cu = !1;
      function wl(S) {
        if (!cu) {
          cu = !0;
          var w = 0;
          try {
            for (; w < S.length; w++) {
              var B = S[w];
              do
                B = B(!0);
              while (B !== null);
            }
            S.length = 0;
          } catch (G) {
            throw S = S.slice(w + 1), G;
          } finally {
            cu = !1;
          }
        }
      }
      var vo = Ar, fu = ns, du = fo, ai = {
        map: Wi,
        forEach: lo,
        count: io,
        toArray: Sl,
        only: _l
      };
      y.Children = ai, y.Component = Ue, y.Fragment = b, y.Profiler = j, y.PureComponent = dt, y.StrictMode = v, y.Suspense = $, y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ve, y.act = Ei, y.cloneElement = fu, y.createContext = oo, y.createElement = vo, y.createFactory = du, y.createRef = Mn, y.forwardRef = gi, y.isValidElement = mn, y.lazy = yi, y.memo = xe, y.startTransition = rs, y.unstable_act = Ei, y.useCallback = ur, y.useContext = St, y.useDebugValue = _t, y.useDeferredValue = ei, y.useEffect = xn, y.useId = uo, y.useImperativeHandle = Ja, y.useInsertionEffect = on, y.useLayoutEffect = fn, y.useMemo = Za, y.useReducer = kt, y.useRef = xt, y.useState = mt, y.useSyncExternalStore = so, y.useTransition = Rt, y.version = h, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  })(mv, mv.exports)), mv.exports;
}
var AE;
function yv() {
  return AE || (AE = 1, process.env.NODE_ENV === "production" ? dy.exports = _k() : dy.exports = Ck()), dy.exports;
}
var UE;
function Ek() {
  if (UE) return pv;
  UE = 1;
  var m = yv(), y = /* @__PURE__ */ Symbol.for("react.element"), h = /* @__PURE__ */ Symbol.for("react.fragment"), R = Object.prototype.hasOwnProperty, L = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, b = { key: !0, ref: !0, __self: !0, __source: !0 };
  function v(j, k, T) {
    var F, $ = {}, Q = null, q = null;
    T !== void 0 && (Q = "" + T), k.key !== void 0 && (Q = "" + k.key), k.ref !== void 0 && (q = k.ref);
    for (F in k) R.call(k, F) && !b.hasOwnProperty(F) && ($[F] = k[F]);
    if (j && j.defaultProps) for (F in k = j.defaultProps, k) $[F] === void 0 && ($[F] = k[F]);
    return { $$typeof: y, type: j, key: Q, ref: q, props: $, _owner: L.current };
  }
  return pv.Fragment = h, pv.jsx = v, pv.jsxs = v, pv;
}
var vv = {};
var jE;
function Rk() {
  return jE || (jE = 1, process.env.NODE_ENV !== "production" && (function() {
    var m = yv(), y = /* @__PURE__ */ Symbol.for("react.element"), h = /* @__PURE__ */ Symbol.for("react.portal"), R = /* @__PURE__ */ Symbol.for("react.fragment"), L = /* @__PURE__ */ Symbol.for("react.strict_mode"), b = /* @__PURE__ */ Symbol.for("react.profiler"), v = /* @__PURE__ */ Symbol.for("react.provider"), j = /* @__PURE__ */ Symbol.for("react.context"), k = /* @__PURE__ */ Symbol.for("react.forward_ref"), T = /* @__PURE__ */ Symbol.for("react.suspense"), F = /* @__PURE__ */ Symbol.for("react.suspense_list"), $ = /* @__PURE__ */ Symbol.for("react.memo"), Q = /* @__PURE__ */ Symbol.for("react.lazy"), q = /* @__PURE__ */ Symbol.for("react.offscreen"), ae = Symbol.iterator, he = "@@iterator";
    function fe(D) {
      if (D === null || typeof D != "object")
        return null;
      var ie = ae && D[ae] || D[he];
      return typeof ie == "function" ? ie : null;
    }
    var We = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Se(D) {
      {
        for (var ie = arguments.length, xe = new Array(ie > 1 ? ie - 1 : 0), Fe = 1; Fe < ie; Fe++)
          xe[Fe - 1] = arguments[Fe];
        ge("error", D, xe);
      }
    }
    function ge(D, ie, xe) {
      {
        var Fe = We.ReactDebugCurrentFrame, St = Fe.getStackAddendum();
        St !== "" && (ie += "%s", xe = xe.concat([St]));
        var mt = xe.map(function(kt) {
          return String(kt);
        });
        mt.unshift("Warning: " + ie), Function.prototype.apply.call(console[D], console, mt);
      }
    }
    var Ee = !1, ve = !1, Qe = !1, Pe = !1, He = !1, Xe;
    Xe = /* @__PURE__ */ Symbol.for("react.module.reference");
    function ot(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === R || D === b || He || D === L || D === T || D === F || Pe || D === q || Ee || ve || Qe || typeof D == "object" && D !== null && (D.$$typeof === Q || D.$$typeof === $ || D.$$typeof === v || D.$$typeof === j || D.$$typeof === k || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === Xe || D.getModuleId !== void 0));
    }
    function ut(D, ie, xe) {
      var Fe = D.displayName;
      if (Fe)
        return Fe;
      var St = ie.displayName || ie.name || "";
      return St !== "" ? xe + "(" + St + ")" : xe;
    }
    function K(D) {
      return D.displayName || "Context";
    }
    function ee(D) {
      if (D == null)
        return null;
      if (typeof D.tag == "number" && Se("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof D == "function")
        return D.displayName || D.name || null;
      if (typeof D == "string")
        return D;
      switch (D) {
        case R:
          return "Fragment";
        case h:
          return "Portal";
        case b:
          return "Profiler";
        case L:
          return "StrictMode";
        case T:
          return "Suspense";
        case F:
          return "SuspenseList";
      }
      if (typeof D == "object")
        switch (D.$$typeof) {
          case j:
            var ie = D;
            return K(ie) + ".Consumer";
          case v:
            var xe = D;
            return K(xe._context) + ".Provider";
          case k:
            return ut(D, D.render, "ForwardRef");
          case $:
            var Fe = D.displayName || null;
            return Fe !== null ? Fe : ee(D.type) || "Memo";
          case Q: {
            var St = D, mt = St._payload, kt = St._init;
            try {
              return ee(kt(mt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var be = Object.assign, Ve = 0, we, _e, te, Oe, me, U, X;
    function Ze() {
    }
    Ze.__reactDisabledLog = !0;
    function Ue() {
      {
        if (Ve === 0) {
          we = console.log, _e = console.info, te = console.warn, Oe = console.error, me = console.group, U = console.groupCollapsed, X = console.groupEnd;
          var D = {
            configurable: !0,
            enumerable: !0,
            value: Ze,
            writable: !0
          };
          Object.defineProperties(console, {
            info: D,
            log: D,
            warn: D,
            error: D,
            group: D,
            groupCollapsed: D,
            groupEnd: D
          });
        }
        Ve++;
      }
    }
    function ht() {
      {
        if (Ve--, Ve === 0) {
          var D = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: be({}, D, {
              value: we
            }),
            info: be({}, D, {
              value: _e
            }),
            warn: be({}, D, {
              value: te
            }),
            error: be({}, D, {
              value: Oe
            }),
            group: be({}, D, {
              value: me
            }),
            groupCollapsed: be({}, D, {
              value: U
            }),
            groupEnd: be({}, D, {
              value: X
            })
          });
        }
        Ve < 0 && Se("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var tt = We.ReactCurrentDispatcher, Le;
    function st(D, ie, xe) {
      {
        if (Le === void 0)
          try {
            throw Error();
          } catch (St) {
            var Fe = St.stack.trim().match(/\n( *(at )?)/);
            Le = Fe && Fe[1] || "";
          }
        return `
` + Le + D;
      }
    }
    var dt = !1, Gt;
    {
      var Mn = typeof WeakMap == "function" ? WeakMap : Map;
      Gt = new Mn();
    }
    function Dr(D, ie) {
      if (!D || dt)
        return "";
      {
        var xe = Gt.get(D);
        if (xe !== void 0)
          return xe;
      }
      var Fe;
      dt = !0;
      var St = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var mt;
      mt = tt.current, tt.current = null, Ue();
      try {
        if (ie) {
          var kt = function() {
            throw Error();
          };
          if (Object.defineProperty(kt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(kt, []);
            } catch (_t) {
              Fe = _t;
            }
            Reflect.construct(D, [], kt);
          } else {
            try {
              kt.call();
            } catch (_t) {
              Fe = _t;
            }
            D.call(kt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_t) {
            Fe = _t;
          }
          D();
        }
      } catch (_t) {
        if (_t && Fe && typeof _t.stack == "string") {
          for (var xt = _t.stack.split(`
`), xn = Fe.stack.split(`
`), on = xt.length - 1, fn = xn.length - 1; on >= 1 && fn >= 0 && xt[on] !== xn[fn]; )
            fn--;
          for (; on >= 1 && fn >= 0; on--, fn--)
            if (xt[on] !== xn[fn]) {
              if (on !== 1 || fn !== 1)
                do
                  if (on--, fn--, fn < 0 || xt[on] !== xn[fn]) {
                    var ur = `
` + xt[on].replace(" at new ", " at ");
                    return D.displayName && ur.includes("<anonymous>") && (ur = ur.replace("<anonymous>", D.displayName)), typeof D == "function" && Gt.set(D, ur), ur;
                  }
                while (on >= 1 && fn >= 0);
              break;
            }
        }
      } finally {
        dt = !1, tt.current = mt, ht(), Error.prepareStackTrace = St;
      }
      var Za = D ? D.displayName || D.name : "", Ja = Za ? st(Za) : "";
      return typeof D == "function" && Gt.set(D, Ja), Ja;
    }
    function bn(D, ie, xe) {
      return Dr(D, !1);
    }
    function lr(D) {
      var ie = D.prototype;
      return !!(ie && ie.isReactComponent);
    }
    function $n(D, ie, xe) {
      if (D == null)
        return "";
      if (typeof D == "function")
        return Dr(D, lr(D));
      if (typeof D == "string")
        return st(D);
      switch (D) {
        case T:
          return st("Suspense");
        case F:
          return st("SuspenseList");
      }
      if (typeof D == "object")
        switch (D.$$typeof) {
          case k:
            return bn(D.render);
          case $:
            return $n(D.type, ie, xe);
          case Q: {
            var Fe = D, St = Fe._payload, mt = Fe._init;
            try {
              return $n(mt(St), ie, xe);
            } catch {
            }
          }
        }
      return "";
    }
    var Wn = Object.prototype.hasOwnProperty, qr = {}, vi = We.ReactDebugCurrentFrame;
    function pa(D) {
      if (D) {
        var ie = D._owner, xe = $n(D.type, D._source, ie ? ie.type : null);
        vi.setExtraStackFrame(xe);
      } else
        vi.setExtraStackFrame(null);
    }
    function Jn(D, ie, xe, Fe, St) {
      {
        var mt = Function.call.bind(Wn);
        for (var kt in D)
          if (mt(D, kt)) {
            var xt = void 0;
            try {
              if (typeof D[kt] != "function") {
                var xn = Error((Fe || "React class") + ": " + xe + " type `" + kt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof D[kt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw xn.name = "Invariant Violation", xn;
              }
              xt = D[kt](ie, kt, Fe, xe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (on) {
              xt = on;
            }
            xt && !(xt instanceof Error) && (pa(St), Se("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Fe || "React class", xe, kt, typeof xt), pa(null)), xt instanceof Error && !(xt.message in qr) && (qr[xt.message] = !0, pa(St), Se("Failed %s type: %s", xe, xt.message), pa(null));
          }
      }
    }
    var Tn = Array.isArray;
    function Yn(D) {
      return Tn(D);
    }
    function Er(D) {
      {
        var ie = typeof Symbol == "function" && Symbol.toStringTag, xe = ie && D[Symbol.toStringTag] || D.constructor.name || "Object";
        return xe;
      }
    }
    function qa(D) {
      try {
        return An(D), !1;
      } catch {
        return !0;
      }
    }
    function An(D) {
      return "" + D;
    }
    function Rr(D) {
      if (qa(D))
        return Se("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Er(D)), An(D);
    }
    var va = We.ReactCurrentOwner, Ka = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, hi, Ce;
    function Ge(D) {
      if (Wn.call(D, "ref")) {
        var ie = Object.getOwnPropertyDescriptor(D, "ref").get;
        if (ie && ie.isReactWarning)
          return !1;
      }
      return D.ref !== void 0;
    }
    function bt(D) {
      if (Wn.call(D, "key")) {
        var ie = Object.getOwnPropertyDescriptor(D, "key").get;
        if (ie && ie.isReactWarning)
          return !1;
      }
      return D.key !== void 0;
    }
    function Wt(D, ie) {
      typeof D.ref == "string" && va.current;
    }
    function an(D, ie) {
      {
        var xe = function() {
          hi || (hi = !0, Se("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ie));
        };
        xe.isReactWarning = !0, Object.defineProperty(D, "key", {
          get: xe,
          configurable: !0
        });
      }
    }
    function mn(D, ie) {
      {
        var xe = function() {
          Ce || (Ce = !0, Se("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ie));
        };
        xe.isReactWarning = !0, Object.defineProperty(D, "ref", {
          get: xe,
          configurable: !0
        });
      }
    }
    var cn = function(D, ie, xe, Fe, St, mt, kt) {
      var xt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: y,
        // Built-in properties that belong on the element
        type: D,
        key: ie,
        ref: xe,
        props: kt,
        // Record the component responsible for creating this element.
        _owner: mt
      };
      return xt._store = {}, Object.defineProperty(xt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(xt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Fe
      }), Object.defineProperty(xt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: St
      }), Object.freeze && (Object.freeze(xt.props), Object.freeze(xt)), xt;
    };
    function er(D, ie, xe, Fe, St) {
      {
        var mt, kt = {}, xt = null, xn = null;
        xe !== void 0 && (Rr(xe), xt = "" + xe), bt(ie) && (Rr(ie.key), xt = "" + ie.key), Ge(ie) && (xn = ie.ref, Wt(ie, St));
        for (mt in ie)
          Wn.call(ie, mt) && !Ka.hasOwnProperty(mt) && (kt[mt] = ie[mt]);
        if (D && D.defaultProps) {
          var on = D.defaultProps;
          for (mt in on)
            kt[mt] === void 0 && (kt[mt] = on[mt]);
        }
        if (xt || xn) {
          var fn = typeof D == "function" ? D.displayName || D.name || "Unknown" : D;
          xt && an(kt, fn), xn && mn(kt, fn);
        }
        return cn(D, xt, xn, St, Fe, va.current, kt);
      }
    }
    var ln = We.ReactCurrentOwner, qt = We.ReactDebugCurrentFrame;
    function Kt(D) {
      if (D) {
        var ie = D._owner, xe = $n(D.type, D._source, ie ? ie.type : null);
        qt.setExtraStackFrame(xe);
      } else
        qt.setExtraStackFrame(null);
    }
    var ha;
    ha = !1;
    function br(D) {
      return typeof D == "object" && D !== null && D.$$typeof === y;
    }
    function ka() {
      {
        if (ln.current) {
          var D = ee(ln.current.type);
          if (D)
            return `

Check the render method of \`` + D + "`.";
        }
        return "";
      }
    }
    function Wi(D) {
      return "";
    }
    var io = {};
    function lo(D) {
      {
        var ie = ka();
        if (!ie) {
          var xe = typeof D == "string" ? D : D.displayName || D.name;
          xe && (ie = `

Check the top-level render call using <` + xe + ">.");
        }
        return ie;
      }
    }
    function Sl(D, ie) {
      {
        if (!D._store || D._store.validated || D.key != null)
          return;
        D._store.validated = !0;
        var xe = lo(ie);
        if (io[xe])
          return;
        io[xe] = !0;
        var Fe = "";
        D && D._owner && D._owner !== ln.current && (Fe = " It was passed a child from " + ee(D._owner.type) + "."), Kt(D), Se('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', xe, Fe), Kt(null);
      }
    }
    function _l(D, ie) {
      {
        if (typeof D != "object")
          return;
        if (Yn(D))
          for (var xe = 0; xe < D.length; xe++) {
            var Fe = D[xe];
            br(Fe) && Sl(Fe, ie);
          }
        else if (br(D))
          D._store && (D._store.validated = !0);
        else if (D) {
          var St = fe(D);
          if (typeof St == "function" && St !== D.entries)
            for (var mt = St.call(D), kt; !(kt = mt.next()).done; )
              br(kt.value) && Sl(kt.value, ie);
        }
      }
    }
    function oo(D) {
      {
        var ie = D.type;
        if (ie == null || typeof ie == "string")
          return;
        var xe;
        if (typeof ie == "function")
          xe = ie.propTypes;
        else if (typeof ie == "object" && (ie.$$typeof === k || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ie.$$typeof === $))
          xe = ie.propTypes;
        else
          return;
        if (xe) {
          var Fe = ee(ie);
          Jn(xe, D.props, "prop", Fe, D);
        } else if (ie.PropTypes !== void 0 && !ha) {
          ha = !0;
          var St = ee(ie);
          Se("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", St || "Unknown");
        }
        typeof ie.getDefaultProps == "function" && !ie.getDefaultProps.isReactClassApproved && Se("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Or(D) {
      {
        for (var ie = Object.keys(D.props), xe = 0; xe < ie.length; xe++) {
          var Fe = ie[xe];
          if (Fe !== "children" && Fe !== "key") {
            Kt(D), Se("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Fe), Kt(null);
            break;
          }
        }
        D.ref !== null && (Kt(D), Se("Invalid attribute `ref` supplied to `React.Fragment`."), Kt(null));
      }
    }
    var Lr = {};
    function or(D, ie, xe, Fe, St, mt) {
      {
        var kt = ot(D);
        if (!kt) {
          var xt = "";
          (D === void 0 || typeof D == "object" && D !== null && Object.keys(D).length === 0) && (xt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var xn = Wi();
          xn ? xt += xn : xt += ka();
          var on;
          D === null ? on = "null" : Yn(D) ? on = "array" : D !== void 0 && D.$$typeof === y ? (on = "<" + (ee(D.type) || "Unknown") + " />", xt = " Did you accidentally export a JSX literal instead of a component?") : on = typeof D, Se("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", on, xt);
        }
        var fn = er(D, ie, xe, St, mt);
        if (fn == null)
          return fn;
        if (kt) {
          var ur = ie.children;
          if (ur !== void 0)
            if (Fe)
              if (Yn(ur)) {
                for (var Za = 0; Za < ur.length; Za++)
                  _l(ur[Za], D);
                Object.freeze && Object.freeze(ur);
              } else
                Se("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _l(ur, D);
        }
        if (Wn.call(ie, "key")) {
          var Ja = ee(D), _t = Object.keys(ie).filter(function(uo) {
            return uo !== "key";
          }), Rt = _t.length > 0 ? "{key: someKey, " + _t.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Lr[Ja + Rt]) {
            var ei = _t.length > 0 ? "{" + _t.join(": ..., ") + ": ...}" : "{}";
            Se(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Rt, Ja, ei, Ja), Lr[Ja + Rt] = !0;
          }
        }
        return D === R ? Or(fn) : oo(fn), fn;
      }
    }
    function mi(D, ie, xe) {
      return or(D, ie, xe, !0);
    }
    function Xa(D, ie, xe) {
      return or(D, ie, xe, !1);
    }
    var yi = Xa, gi = mi;
    vv.Fragment = R, vv.jsx = yi, vv.jsxs = gi;
  })()), vv;
}
var zE;
function bk() {
  return zE || (zE = 1, process.env.NODE_ENV === "production" ? fy.exports = Ek() : fy.exports = Rk()), fy.exports;
}
var re = bk(), Et = yv();
const id = /* @__PURE__ */ c2(Et), Tk = "_sidebar_gxqe0_1", xk = "_sidebarNav_gxqe0_24", wk = "_sectionWrapper_gxqe0_32", kk = "_sectionHeader_gxqe0_37", Dk = "_active_gxqe0_48", Ok = "_sidebarItemInHeader_gxqe0_68", Lk = "_plusButton_gxqe0_71", Nk = "_sidebarItem_gxqe0_68", Mk = "_sidebarIcon_gxqe0_138", Ak = "_sidebarLabel_gxqe0_148", Uk = "_plusIcon_gxqe0_173", jk = "_rotated_gxqe0_178", Rn = {
  sidebar: Tk,
  sidebarNav: xk,
  sectionWrapper: wk,
  sectionHeader: kk,
  active: Dk,
  sidebarItemInHeader: Ok,
  plusButton: Lk,
  sidebarItem: Nk,
  sidebarIcon: Mk,
  sidebarLabel: Ak,
  plusIcon: Uk,
  rotated: jk
}, zk = "_expandedContent_1gnrr_1", Fk = "_searchContainer_1gnrr_16", Pk = "_searchIcon_1gnrr_28", Vk = "_searchInput_1gnrr_33", Hk = "_suggestionsList_1gnrr_45", Ik = "_suggestionItemWrapper_1gnrr_64", Bk = "_suggestionItem_1gnrr_64", $k = "_selected_1gnrr_87", Wk = "_statusIcon_1gnrr_92", Yk = "_moreButton_1gnrr_95", Qk = "_childItem_1gnrr_98", Gk = "_suggestionLabel_1gnrr_127", qk = "_expandArrow_1gnrr_134", Kk = "_expanded_1gnrr_1", Xk = "_childrenContainer_1gnrr_163", Zk = "_loadingState_1gnrr_172", Jk = "_loadingSpinner_1gnrr_182", eD = "_emptyState_1gnrr_196", Zn = {
  expandedContent: zk,
  searchContainer: Fk,
  searchIcon: Pk,
  searchInput: Vk,
  suggestionsList: Hk,
  suggestionItemWrapper: Ik,
  suggestionItem: Bk,
  selected: $k,
  statusIcon: Wk,
  moreButton: Yk,
  childItem: Qk,
  suggestionLabel: Gk,
  expandArrow: qk,
  expanded: Kk,
  childrenContainer: Xk,
  loadingState: Zk,
  loadingSpinner: Jk,
  emptyState: eD
}, tD = ({ status: m }) => {
  switch (m) {
    case "completed":
      return /* @__PURE__ */ re.jsx("span", { className: Zn.statusIcon, "data-status": "completed", children: "✓" });
    case "in-progress":
      return /* @__PURE__ */ re.jsx("span", { className: Zn.statusIcon, "data-status": "in-progress", children: "◐" });
    case "pending":
      return /* @__PURE__ */ re.jsx("span", { className: Zn.statusIcon, "data-status": "pending", children: "○" });
    case "archived":
      return /* @__PURE__ */ re.jsx("span", { className: Zn.statusIcon, "data-status": "archived", children: "📁" });
    default:
      return null;
  }
}, FE = ({
  contentType: m,
  items: y,
  selectedItemId: h,
  onItemSelect: R,
  isLoading: L = !1,
  emptyMessage: b = "No items found"
}) => {
  const [v, j] = Et.useState(/* @__PURE__ */ new Set()), [k, T] = Et.useState(""), F = (ae) => {
    j((he) => {
      const fe = new Set(he);
      return fe.has(ae) ? fe.delete(ae) : fe.add(ae), fe;
    });
  }, $ = (ae, he) => he ? ae.filter(
    (fe) => fe.label.toLowerCase().includes(he.toLowerCase()) || fe.children?.some(
      (We) => We.label.toLowerCase().includes(he.toLowerCase())
    )
  ) : ae, Q = (ae, he = !1) => {
    const fe = ae.children && ae.children.length > 0, We = v.has(ae.id), Se = h === ae.id;
    return /* @__PURE__ */ re.jsxs("div", { className: Zn.suggestionItemWrapper, children: [
      /* @__PURE__ */ re.jsxs(
        "button",
        {
          className: `${Zn.suggestionItem} ${he ? Zn.childItem : ""} ${Se ? Zn.selected : ""}`,
          onClick: () => {
            fe && F(ae.id), R(ae);
          },
          children: [
            /* @__PURE__ */ re.jsx(tD, { status: ae.status }),
            /* @__PURE__ */ re.jsx("span", { className: Zn.suggestionLabel, children: ae.label }),
            fe && /* @__PURE__ */ re.jsx("span", { className: `${Zn.expandArrow} ${We ? Zn.expanded : ""}`, children: "▸" }),
            /* @__PURE__ */ re.jsx("button", { className: Zn.moreButton, onClick: (ge) => ge.stopPropagation(), children: "⋮" })
          ]
        }
      ),
      fe && We && /* @__PURE__ */ re.jsx("div", { className: Zn.childrenContainer, children: ae.children.map((ge) => Q(ge, !0)) })
    ] }, ae.id);
  }, q = $(y, k);
  return /* @__PURE__ */ re.jsxs("div", { className: Zn.expandedContent, children: [
    /* @__PURE__ */ re.jsxs("div", { className: Zn.searchContainer, children: [
      /* @__PURE__ */ re.jsx("span", { className: Zn.searchIcon, children: "🔍" }),
      /* @__PURE__ */ re.jsx(
        "input",
        {
          type: "text",
          placeholder: `Search ${m === "outcomes" ? "outcomes" : "leverage loops"}...`,
          className: Zn.searchInput,
          value: k,
          onChange: (ae) => T(ae.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ re.jsx("div", { className: Zn.suggestionsList, children: L ? /* @__PURE__ */ re.jsxs("div", { className: Zn.loadingState, children: [
      /* @__PURE__ */ re.jsx("span", { className: Zn.loadingSpinner }),
      "Loading..."
    ] }) : q.length === 0 ? /* @__PURE__ */ re.jsx("div", { className: Zn.emptyState, children: k ? `No results for "${k}"` : b }) : q.map((ae) => Q(ae)) })
  ] });
}, PE = (m) => {
  let y;
  const h = /* @__PURE__ */ new Set(), R = (T, F) => {
    const $ = typeof T == "function" ? T(y) : T;
    if (!Object.is($, y)) {
      const Q = y;
      y = F ?? (typeof $ != "object" || $ === null) ? $ : Object.assign({}, y, $), h.forEach((q) => q(y, Q));
    }
  }, L = () => y, j = { setState: R, getState: L, getInitialState: () => k, subscribe: (T) => (h.add(T), () => h.delete(T)) }, k = y = m(R, L, j);
  return j;
}, nD = ((m) => m ? PE(m) : PE), rD = (m) => m;
function aD(m, y = rD) {
  const h = id.useSyncExternalStore(
    m.subscribe,
    id.useCallback(() => y(m.getState()), [m, y]),
    id.useCallback(() => y(m.getInitialState()), [m, y])
  );
  return id.useDebugValue(h), h;
}
const VE = (m) => {
  const y = nD(m), h = (R) => aD(y, R);
  return Object.assign(h, y), h;
}, iD = ((m) => m ? VE(m) : VE), lD = iD((m) => ({
  leverageLoops: [],
  isLoading: !1,
  error: null,
  fetchLeverageLoops: async () => {
    m({ isLoading: !0, error: null });
    try {
      const y = await fetch("/api/leverage-loops");
      if (!y.ok)
        throw new Error("Failed to fetch loops");
      const h = await y.json();
      m({ leverageLoops: h, isLoading: !1 });
    } catch (y) {
      m({
        error: y instanceof Error ? y.message : "Unknown error",
        isLoading: !1
      });
    }
  },
  setLeverageLoops: (y) => m({ leverageLoops: y }),
  addLeverageLoops: (y) => m((h) => ({ leverageLoops: [...h.leverageLoops, ...y] }))
})), oD = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.15816%2015.5394C4.42185%2015.8099%203.64142%2015.9909%202.82808%2016.0678C2.75965%2016.0739%202.69009%2016.0784%202.62129%2016.081C2.05326%2016.1048%201.47513%2015.9215%201.00732%2015.5213C0.154714%2014.7923%20-0.052828%2013.5813%200.443029%2012.6226C0.448638%2012.6116%200.453874%2012.6011%200.459857%2012.5898L3.41481%206.77869C2.08654%209.73401%202.83855%2013.3286%205.16339%2015.5372L5.15816%2015.5391V15.5394Z'%20fill='url(%23paint0_linear_23492_1459)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.8419%204.46013C15.5782%204.18972%2016.3587%204.00906%2017.172%203.93175C17.2401%203.92571%2017.31%203.92119%2017.3788%203.91855C17.9468%203.89479%2018.525%204.07808%2018.9928%204.47823C19.845%205.20726%2020.0529%206.41828%2019.5571%207.37699C19.5515%207.3883%2019.5458%207.39886%2019.5402%207.4098L16.5853%2013.2205C17.9132%2010.2648%2017.1615%206.67059%2014.8367%204.46202L14.8419%204.46013Z'%20fill='url(%23paint1_linear_23492_1459)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10%202.61975C11.8545%202.61975%2013.547%203.31559%2014.8367%204.46211C12.464%205.51888%2010.8283%207.5913%2010.1904%2010.0563C9.55242%2012.5214%207.60302%2014.6787%205.16338%2015.5378C3.66459%2014.2306%202.68222%2012.2057%202.68222%2010.0001C2.68259%205.92394%205.95877%202.61975%2010%202.61975Z'%20fill='url(%23paint2_linear_23492_1459)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.8367%204.46167C16.358%205.81412%2017.3179%207.79376%2017.3179%209.99932C17.3179%2014.0751%2014.0417%2017.3793%2010.0001%2017.3793C8.14604%2017.3793%206.45317%2016.6835%205.16342%2015.537C7.59222%2014.5651%209.36213%2012.4644%2010.0001%209.99932C10.638%207.53429%2012.4079%205.4332%2014.8367%204.46167Z'%20fill='url(%23paint3_linear_23492_1459)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_23492_1459'%20x1='1.41231'%20y1='10.771'%20x2='6.31346'%20y2='13.2684'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFAE00'%20stop-opacity='0.12'/%3e%3cstop%20offset='1'%20stop-color='%23FFAE00'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_23492_1459'%20x1='13.6991'%20y1='6.69473'%20x2='18.6306'%20y2='9.20746'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2313F562'/%3e%3cstop%20offset='1'%20stop-color='%2313F562'%20stop-opacity='0.09'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_23492_1459'%20x1='4.21878'%20y1='14.805'%20x2='10.8001'%20y2='2.68539'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FD5743'/%3e%3cstop%20offset='0.21'%20stop-color='%23D13D58'/%3e%3cstop%20offset='0.4'%20stop-color='%23AB2868'/%3e%3cstop%20offset='0.6'%20stop-color='%238C1B6F'/%3e%3cstop%20offset='1'%20stop-color='%23280553'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint3_linear_23492_1459'%20x1='9.19834'%20y1='17.5257'%20x2='15.8611'%20y2='5.25654'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23130F56'/%3e%3cstop%20offset='0.41'%20stop-color='%23105D8E'/%3e%3cstop%20offset='0.6'%20stop-color='%23107995'/%3e%3cstop%20offset='0.79'%20stop-color='%2311A39E'/%3e%3cstop%20offset='1'%20stop-color='%2313EBAF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e", uD = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%205.83329C9.17592%205.83329%208.37034%206.07766%207.68514%206.5355C6.99993%206.99334%206.46588%207.64408%206.15051%208.40544C5.83515%209.1668%205.75264%2010.0046%205.91341%2010.8128C6.07418%2011.6211%206.47102%2012.3635%207.05373%2012.9462C7.63645%2013.529%208.37888%2013.9258%209.18714%2014.0866C9.99539%2014.2473%2010.8332%2014.1648%2011.5945%2013.8495C12.3559%2013.5341%2013.0066%2013%2013.4645%2012.3148C13.9223%2011.6296%2014.1667%2010.824%2014.1667%209.99995M10.8333%202.54579C9.28839%202.37246%207.72776%202.68352%206.36733%203.43593C5.0069%204.18834%203.9139%205.34492%203.23953%206.74567C2.56516%208.14643%202.34274%209.72213%202.60305%2011.2548C2.86335%2012.7875%203.59352%2014.2014%204.69253%2015.301C5.79155%2016.4006%207.2051%2017.1314%208.73766%2017.3925C10.2702%2017.6536%2011.846%2017.432%2013.2471%2016.7583C14.6482%2016.0846%2015.8053%2014.9922%2016.5584%2013.6322C17.3115%2012.2721%2017.6234%2010.7117%2017.4508%209.16662M12.5%207.49995V4.99995L15%202.49995V4.99995H17.5L15%207.49995H12.5ZM12.5%207.49995L10%209.99995M9.16668%209.99995C9.16668%2010.221%209.25447%2010.4329%209.41076%2010.5892C9.56704%2010.7455%209.779%2010.8333%2010%2010.8333C10.221%2010.8333%2010.433%2010.7455%2010.5893%2010.5892C10.7455%2010.4329%2010.8333%2010.221%2010.8333%209.99995C10.8333%209.77894%2010.7455%209.56698%2010.5893%209.4107C10.433%209.25442%2010.221%209.16662%2010%209.16662C9.779%209.16662%209.56704%209.25442%209.41076%209.4107C9.25447%209.56698%209.16668%209.77894%209.16668%209.99995Z'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", sD = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.5533%205.43171C14.1448%204.53303%2013.4793%203.77539%2012.6409%203.2543C11.8024%202.73321%2010.8285%202.47198%209.84179%202.50353C8.8551%202.53509%207.89984%202.85802%207.09639%203.43162C6.29294%204.00523%205.67727%204.80383%205.32698%205.72679C4.97669%206.64974%204.90745%207.65573%205.12798%208.61798C5.34852%209.58022%205.84897%2010.4556%206.56625%2011.1339C7.28353%2011.8122%208.18555%2012.263%209.15861%2012.4294C10.1317%2012.5958%2011.1322%2012.4705%2012.0342%2012.0692'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M14.5683%2014.5533C15.467%2014.1448%2016.2246%2013.4793%2016.7457%2012.6409C17.2668%2011.8024%2017.5281%2010.8284%2017.4965%209.84176C17.4649%208.85507%2017.142%207.89981%2016.5684%207.09636C15.9948%206.29291%2015.1962%205.67724%2014.2732%205.32695C13.3503%204.97666%2012.3443%204.90742%2011.3821%205.12795C10.4198%205.34849%209.54439%205.84894%208.86612%206.56622C8.18784%207.2835%207.73708%208.18552%207.57064%209.15858C7.40419%2010.1316%207.52952%2011.1322%207.93083%2012.0341'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5.45001%2014.5684C5.8585%2015.467%206.52387%2016.2247%207.36227%2016.7459C8.20067%2017.267%209.17458%2017.5283%2010.1613%2017.4969C11.1479%2017.4654%2012.1032%2017.1425%2012.9067%2016.569C13.7102%2015.9955%2014.3259%2015.197%2014.6763%2014.2741C15.0267%2013.3512%2015.0961%2012.3452%2014.8756%2011.383C14.6552%2010.4207%2014.1549%209.54526%2013.4377%208.8669C12.7205%208.18855%2011.8186%207.73767%2010.8456%207.57109C9.87256%207.40451%208.872%207.52969%207.97001%207.93085'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5.43168%205.44995C4.53299%205.85844%203.77532%206.52381%203.25417%207.36221C2.73302%208.20061%202.47171%209.17452%202.50318%2010.1612C2.53465%2011.1479%202.85749%2012.1031%203.431%2012.9066C4.00451%2013.7101%204.80304%2014.3259%205.72594%2014.6763C6.64884%2015.0266%207.6548%2015.096%208.61706%2014.8756C9.57931%2014.6552%2010.4548%2014.1548%2011.1331%2013.4376C11.8115%2012.7205%2012.2624%2011.8185%2012.4289%2010.8455C12.5955%209.8725%2012.4703%208.87194%2012.0692%207.96995'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", cD = [
  { id: "1", label: "Brand Identity Design", status: "completed" },
  {
    id: "2",
    label: "Identify Launch Partners",
    status: "in-progress",
    children: [
      { id: "2a", label: "Map Your Partnership Categories", status: "completed" },
      { id: "2b", label: "Research & Score Potential Partners", status: "in-progress" },
      { id: "2c", label: "Build Your Partnership Value Prop", status: "pending" },
      { id: "2d", label: "Identify Key Stakeholders", status: "pending" },
      { id: "2e", label: "Create Outreach Sequence", status: "pending" },
      { id: "2f", label: "Secure Agreements", status: "pending" }
    ]
  },
  { id: "3", label: "Onboard Operator Pilots", status: "pending" },
  { id: "4", label: "1st Paying Enterprise Pilot", status: "pending" },
  { id: "5", label: "Close $30M+ Seed Round", status: "pending" },
  { id: "6", label: "Press Pickup", status: "pending" },
  { id: "7", label: "Archived", status: "archived" }
], fD = [
  { id: "l1", label: "Customer Feedback Loop", status: "completed" },
  { id: "l2", label: "Product Iteration Cycle", status: "in-progress" },
  { id: "l3", label: "Growth Experiments", status: "pending" }
], dD = ({
  activeSection: m,
  onSectionChange: y
}) => {
  const { leverageLoops: h, addLeverageLoops: R } = lD((F) => ({
    leverageLoops: F.leverageLoops,
    addLeverageLoops: F.addLeverageLoops
  })), [L, b] = Et.useState(/* @__PURE__ */ new Set()), [v, j] = Et.useState(null), k = (F) => {
    y(F), b(($) => {
      const Q = new Set($);
      return Q.has(F) ? Q.delete(F) : Q.add(F), Q;
    });
  }, T = (F) => {
    j(F.id), y("copilot");
  };
  return /* @__PURE__ */ re.jsx("div", { className: Rn.sidebar, children: /* @__PURE__ */ re.jsxs("nav", { className: Rn.sidebarNav, children: [
    /* @__PURE__ */ re.jsxs(
      "button",
      {
        className: `${Rn.sidebarItem} ${m === "copilot" ? Rn.active : ""}`,
        onClick: () => y("copilot"),
        "aria-label": "Orbiter.io Copilot",
        children: [
          /* @__PURE__ */ re.jsx("span", { className: Rn.sidebarIcon, children: /* @__PURE__ */ re.jsx("img", { src: oD, alt: "Orbiter", width: 18, height: 18 }) }),
          /* @__PURE__ */ re.jsx("span", { className: Rn.sidebarLabel, children: "Orbiter.io Copilot" })
        ]
      }
    ),
    /* @__PURE__ */ re.jsxs("div", { className: Rn.sectionWrapper, children: [
      /* @__PURE__ */ re.jsxs("div", { className: `${Rn.sectionHeader} ${m === "outcomes" ? Rn.active : ""}`, children: [
        /* @__PURE__ */ re.jsxs(
          "button",
          {
            className: Rn.sidebarItemInHeader,
            onClick: () => y("outcomes"),
            "aria-label": "Outcomes",
            children: [
              /* @__PURE__ */ re.jsx("span", { className: Rn.sidebarIcon, children: /* @__PURE__ */ re.jsx("img", { src: uD, alt: "Outcomes", width: 18, height: 18 }) }),
              /* @__PURE__ */ re.jsx("span", { className: Rn.sidebarLabel, children: "Outcomes" })
            ]
          }
        ),
        /* @__PURE__ */ re.jsx(
          "button",
          {
            className: Rn.plusButton,
            onClick: () => k("outcomes"),
            "aria-label": "Expand Outcomes",
            children: /* @__PURE__ */ re.jsx("span", { className: `${Rn.plusIcon} ${L.has("outcomes") ? Rn.rotated : ""}`, children: "+" })
          }
        )
      ] }),
      L.has("outcomes") && /* @__PURE__ */ re.jsx(
        FE,
        {
          contentType: "outcomes",
          items: cD,
          selectedItemId: v,
          onItemSelect: T
        }
      )
    ] }),
    /* @__PURE__ */ re.jsxs("div", { className: Rn.sectionWrapper, children: [
      /* @__PURE__ */ re.jsxs("div", { className: `${Rn.sectionHeader} ${m === "leverage-loops" ? Rn.active : ""}`, children: [
        /* @__PURE__ */ re.jsxs(
          "button",
          {
            className: Rn.sidebarItemInHeader,
            onClick: () => y("leverage-loops"),
            "aria-label": "Leverage Loops",
            children: [
              /* @__PURE__ */ re.jsx("span", { className: Rn.sidebarIcon, children: /* @__PURE__ */ re.jsx("img", { src: sD, alt: "Leverage Loops", width: 18, height: 18 }) }),
              /* @__PURE__ */ re.jsx("span", { className: Rn.sidebarLabel, children: "Leverage Loops" })
            ]
          }
        ),
        /* @__PURE__ */ re.jsx(
          "button",
          {
            className: Rn.plusButton,
            onClick: () => k("leverage-loops"),
            "aria-label": "Expand Leverage Loops",
            children: /* @__PURE__ */ re.jsx("span", { className: `${Rn.plusIcon} ${L.has("leverage-loops") ? Rn.rotated : ""}`, children: "+" })
          }
        )
      ] }),
      L.has("leverage-loops") && /* @__PURE__ */ re.jsx(
        FE,
        {
          contentType: "leverage-loops",
          items: fD,
          selectedItemId: v,
          onItemSelect: T
        }
      )
    ] })
  ] }) });
}, pD = "_composerContainer_1dqbd_1", vD = "_composer_1dqbd_1", hD = "_inputWrapper_1dqbd_15", mD = "_input_1dqbd_15", yD = "_actions_1dqbd_40", gD = "_leftActions_1dqbd_47", SD = "_rightActions_1dqbd_48", _D = "_actionButton_1dqbd_54", CD = "_sendButton_1dqbd_75", ED = "_active_1dqbd_92", Bi = {
  composerContainer: pD,
  composer: vD,
  inputWrapper: hD,
  input: mD,
  actions: yD,
  leftActions: gD,
  rightActions: SD,
  actionButton: _D,
  sendButton: CD,
  active: ED
}, RD = ({
  onSend: m,
  disabled: y = !1,
  placeholder: h = "Ask anything..",
  initialValue: R = ""
}) => {
  const [L, b] = Et.useState(R), v = Et.useRef(null);
  Et.useEffect(() => {
    R && (b(R), setTimeout(() => v.current?.focus(), 0));
  }, [R]), Et.useEffect(() => {
    const T = v.current;
    T && (T.style.height = "auto", T.style.height = `${Math.min(T.scrollHeight, 200)}px`);
  }, [L]);
  const j = (T) => {
    T?.preventDefault(), L.trim() && !y && (m(L.trim()), b(""));
  }, k = (T) => {
    T.key === "Enter" && !T.shiftKey && (T.preventDefault(), j());
  };
  return /* @__PURE__ */ re.jsx("div", { className: Bi.composerContainer, children: /* @__PURE__ */ re.jsxs("form", { onSubmit: j, className: Bi.composer, children: [
    /* @__PURE__ */ re.jsx("div", { className: Bi.inputWrapper, children: /* @__PURE__ */ re.jsx(
      "textarea",
      {
        ref: v,
        value: L,
        onChange: (T) => b(T.target.value),
        onKeyDown: k,
        placeholder: h,
        disabled: y,
        className: Bi.input,
        rows: 1
      }
    ) }),
    /* @__PURE__ */ re.jsxs("div", { className: Bi.actions, children: [
      /* @__PURE__ */ re.jsxs("div", { className: Bi.leftActions, children: [
        /* @__PURE__ */ re.jsx(
          "button",
          {
            type: "button",
            className: Bi.actionButton,
            title: "Attach file",
            children: /* @__PURE__ */ re.jsx(
              "svg",
              {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: /* @__PURE__ */ re.jsx("path", { d: "M12 5v14M5 12h14" })
              }
            )
          }
        ),
        /* @__PURE__ */ re.jsx(
          "button",
          {
            type: "button",
            className: Bi.actionButton,
            title: "Settings",
            children: /* @__PURE__ */ re.jsx(
              "svg",
              {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: /* @__PURE__ */ re.jsx("path", { d: "M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" })
              }
            )
          }
        )
      ] }),
      /* @__PURE__ */ re.jsxs("div", { className: Bi.rightActions, children: [
        /* @__PURE__ */ re.jsx(
          "button",
          {
            type: "button",
            className: Bi.actionButton,
            title: "Voice input",
            children: /* @__PURE__ */ re.jsxs(
              "svg",
              {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: [
                  /* @__PURE__ */ re.jsx("path", { d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" }),
                  /* @__PURE__ */ re.jsx("path", { d: "M19 10v2a7 7 0 0 1-14 0v-2" }),
                  /* @__PURE__ */ re.jsx("line", { x1: "12", y1: "19", x2: "12", y2: "23" }),
                  /* @__PURE__ */ re.jsx("line", { x1: "8", y1: "23", x2: "16", y2: "23" })
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ re.jsx(
          "button",
          {
            type: "submit",
            className: `${Bi.sendButton} ${L.trim() && !y ? Bi.active : ""}`,
            disabled: !L.trim() || y,
            title: "Send message",
            children: /* @__PURE__ */ re.jsx(
              "svg",
              {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: /* @__PURE__ */ re.jsx("path", { d: "M12 19V5M5 12l7-7 7 7" })
              }
            )
          }
        )
      ] })
    ] })
  ] }) });
}, bD = "_messageContainer_tnxih_1", TD = "_user_tnxih_6", xD = "_assistant_tnxih_9", wD = "_userMessage_tnxih_23", kD = "_assistantMessage_tnxih_38", DD = "_textContent_tnxih_45", OD = "_streamingIndicator_tnxih_50", hc = {
  messageContainer: bD,
  user: TD,
  assistant: xD,
  userMessage: wD,
  assistantMessage: kD,
  textContent: DD,
  streamingIndicator: OD
}, LD = ({
  message: m,
  // These props are available for custom Gen UI components
  onAction: y,
  onUpdateMessage: h
}) => {
  const R = m.role === "user", L = m.role === "assistant", b = () => /* @__PURE__ */ re.jsx("div", { className: hc.textContent, children: m.content || (m.isStreaming ? "" : "No response") });
  return /* @__PURE__ */ re.jsx(
    "div",
    {
      className: `${hc.messageContainer} ${R ? hc.user : hc.assistant}`,
      children: R ? /* @__PURE__ */ re.jsx("div", { className: hc.userMessage, children: /* @__PURE__ */ re.jsx("p", { children: m.content }) }) : L ? /* @__PURE__ */ re.jsxs("div", { className: hc.assistantMessage, children: [
        m.isStreaming && !m.content && /* @__PURE__ */ re.jsxs("div", { className: hc.streamingIndicator, children: [
          /* @__PURE__ */ re.jsx("span", {}),
          /* @__PURE__ */ re.jsx("span", {}),
          /* @__PURE__ */ re.jsx("span", {})
        ] }),
        b()
      ] }) : null
    }
  );
}, ND = "_overlay_271nu_1", MD = "_modal_271nu_21", AD = "_header_271nu_42", UD = "_closeButton_271nu_55", jD = "_selectedInfo_271nu_77", zD = "_inputGroup_271nu_99", FD = "_actions_271nu_130", PD = "_cancelBtn_271nu_136", VD = "_confirmBtn_271nu_137", eu = {
  overlay: ND,
  modal: MD,
  header: AD,
  closeButton: UD,
  selectedInfo: jD,
  inputGroup: zD,
  actions: FD,
  cancelBtn: PD,
  confirmBtn: VD
}, HD = ({
  isOpen: m,
  onClose: y,
  humanFriendlyMessage: h,
  llmFriendlyMessage: R,
  onConfirm: L
}) => {
  const [b, v] = Et.useState(R);
  if (Et.useEffect(() => {
    v(R);
  }, [R]), Et.useEffect(() => {
    const k = (T) => {
      T.key === "Escape" && y();
    };
    if (m)
      return window.addEventListener("keydown", k), () => window.removeEventListener("keydown", k);
  }, [m, y]), !m) return null;
  const j = (k) => {
    k.preventDefault(), b.trim() && L(b.trim());
  };
  return /* @__PURE__ */ re.jsx("div", { className: eu.overlay, onClick: y, children: /* @__PURE__ */ re.jsxs("div", { className: eu.modal, onClick: (k) => k.stopPropagation(), children: [
    /* @__PURE__ */ re.jsxs("div", { className: eu.header, children: [
      /* @__PURE__ */ re.jsx("h2", { children: "Edit Your Response" }),
      /* @__PURE__ */ re.jsx("button", { className: eu.closeButton, onClick: y, children: /* @__PURE__ */ re.jsx(
        "svg",
        {
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          children: /* @__PURE__ */ re.jsx("path", { d: "M18 6L6 18M6 6l12 12" })
        }
      ) })
    ] }),
    /* @__PURE__ */ re.jsxs("form", { onSubmit: j, children: [
      /* @__PURE__ */ re.jsxs("div", { className: eu.selectedInfo, children: [
        /* @__PURE__ */ re.jsx("label", { children: "Your Selection" }),
        /* @__PURE__ */ re.jsx("p", { children: h })
      ] }),
      /* @__PURE__ */ re.jsxs("div", { className: eu.inputGroup, children: [
        /* @__PURE__ */ re.jsx("label", { htmlFor: "editMessage", children: "Edit message before sending:" }),
        /* @__PURE__ */ re.jsx(
          "textarea",
          {
            id: "editMessage",
            value: b,
            onChange: (k) => v(k.target.value),
            placeholder: "Edit your message...",
            rows: 4,
            autoFocus: !0
          }
        )
      ] }),
      /* @__PURE__ */ re.jsxs("div", { className: eu.actions, children: [
        /* @__PURE__ */ re.jsx("button", { type: "button", className: eu.cancelBtn, onClick: y, children: "Cancel" }),
        /* @__PURE__ */ re.jsx(
          "button",
          {
            type: "submit",
            className: eu.confirmBtn,
            disabled: !b.trim(),
            children: "Send Message"
          }
        )
      ] })
    ] })
  ] }) });
}, ID = "_chatContainer_1fe7s_1", BD = "_header_1fe7s_9", $D = "_messagesContainer_1fe7s_23", WD = "_emptyState_1fe7s_42", py = {
  chatContainer: ID,
  header: BD,
  messagesContainer: $D,
  emptyState: WD
}, YD = "http://localhost:3001", HE = () => `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, IE = ({
  agentName: m = "Copilot"
}) => {
  const [y, h] = Et.useState([]), [R, L] = Et.useState(!1), [b] = Et.useState(() => `thread-${Date.now()}`), [v, j] = Et.useState(!1), [k, T] = Et.useState(null), F = Et.useRef(null);
  Et.useEffect(() => {
    F.current?.scrollIntoView({ behavior: "smooth" });
  }, [y]);
  const $ = Et.useCallback(
    async (fe) => {
      if (!fe.trim() || R) return;
      const We = {
        id: HE(),
        role: "user",
        content: fe.trim(),
        timestamp: /* @__PURE__ */ new Date()
      };
      h((Ee) => [...Ee, We]), L(!0);
      const Se = HE(), ge = {
        id: Se,
        role: "assistant",
        content: "",
        timestamp: /* @__PURE__ */ new Date(),
        isStreaming: !0
      };
      h((Ee) => [...Ee, ge]);
      try {
        const Ee = await fetch(`${YD}/api/chat`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            prompt: {
              role: "user",
              content: fe.trim(),
              id: We.id
            },
            threadId: b,
            responseId: Se
          })
        });
        if (!Ee.ok)
          throw new Error(`API error: ${Ee.status}`);
        const ve = Ee.body?.getReader(), Qe = new TextDecoder();
        let Pe = "";
        if (ve)
          for (; ; ) {
            const { done: He, value: Xe } = await ve.read();
            if (He) break;
            const ot = Qe.decode(Xe, { stream: !0 });
            Pe += ot, h(
              (ut) => ut.map(
                (K) => K.id === Se ? { ...K, content: Pe } : K
              )
            );
          }
        h(
          (He) => He.map(
            (Xe) => Xe.id === Se ? { ...Xe, isStreaming: !1 } : Xe
          )
        );
      } catch (Ee) {
        console.error("Failed to send message:", Ee), h(
          (ve) => ve.map(
            (Qe) => Qe.id === Se ? {
              ...Qe,
              content: "Sorry, there was an error processing your request.",
              isStreaming: !1
            } : Qe
          )
        );
      } finally {
        L(!1);
      }
    },
    [R, b]
  ), Q = Et.useCallback(
    (fe) => {
      switch (console.log("Action received:", fe), fe.type) {
        case "continue_conversation":
          if (fe.params) {
            const { humanFriendlyMessage: We, llmFriendlyMessage: Se } = fe.params;
            We && Se && (T({
              humanFriendlyMessage: We,
              llmFriendlyMessage: Se
            }), j(!0));
          }
          break;
        case "open_url":
          fe.params?.url && window.open(fe.params.url, "_blank", "noopener,noreferrer");
          break;
        default:
          console.log("Unhandled action type:", fe.type);
      }
    },
    []
  ), q = Et.useCallback((fe, We) => {
    h(
      (Se) => Se.map((ge) => ge.id === fe ? { ...ge, content: We } : ge)
    );
  }, []), ae = Et.useCallback(
    (fe) => {
      j(!1), T(null), $(fe);
    },
    [$]
  ), he = Et.useCallback(() => {
    j(!1), T(null);
  }, []);
  return /* @__PURE__ */ re.jsxs("div", { className: py.chatContainer, children: [
    /* @__PURE__ */ re.jsx("div", { className: py.header, children: /* @__PURE__ */ re.jsx("h1", { children: m }) }),
    /* @__PURE__ */ re.jsxs("div", { className: py.messagesContainer, children: [
      y.length === 0 ? /* @__PURE__ */ re.jsx("div", { className: py.emptyState, children: /* @__PURE__ */ re.jsxs("p", { children: [
        "Start a conversation with ",
        m
      ] }) }) : y.map((fe) => /* @__PURE__ */ re.jsx(
        LD,
        {
          message: fe,
          onAction: Q,
          onUpdateMessage: (We) => q(fe.id, We)
        },
        fe.id
      )),
      /* @__PURE__ */ re.jsx("div", { ref: F })
    ] }),
    /* @__PURE__ */ re.jsx(RD, { onSend: $, disabled: R }),
    k && /* @__PURE__ */ re.jsx(
      HD,
      {
        isOpen: v,
        onClose: he,
        humanFriendlyMessage: k.humanFriendlyMessage,
        llmFriendlyMessage: k.llmFriendlyMessage,
        onConfirm: ae
      }
    )
  ] });
}, QD = "_container_83jbb_1", GD = "_content_83jbb_10", qD = "_title_83jbb_15", KD = "_description_83jbb_22", Ju = {
  container: QD,
  content: GD,
  title: qD,
  description: KD
}, XD = () => /* @__PURE__ */ re.jsx("div", { className: Ju.container, children: /* @__PURE__ */ re.jsxs("div", { className: Ju.content, children: [
  /* @__PURE__ */ re.jsx("h1", { className: Ju.title, children: "Outcomes" }),
  /* @__PURE__ */ re.jsx("p", { className: Ju.description, children: "Manage and track your project outcomes here." })
] }) }), ZD = () => /* @__PURE__ */ re.jsx("div", { className: Ju.container, children: /* @__PURE__ */ re.jsxs("div", { className: Ju.content, children: [
  /* @__PURE__ */ re.jsx("h1", { className: Ju.title, children: "Leverage Loops" }),
  /* @__PURE__ */ re.jsx("p", { className: Ju.description, children: "Create and manage leverage loops for your workflow." })
] }) }), JD = "_app_rj7hb_1", eO = "_mainContent_rj7hb_11", BE = {
  app: JD,
  mainContent: eO
}, tO = ({
  agentName: m = "Copilot",
  logoUrl: y
}) => {
  const [h, R] = Et.useState("copilot"), L = () => {
    switch (h) {
      case "copilot":
        return /* @__PURE__ */ re.jsx(IE, { agentName: m, logoUrl: y });
      case "outcomes":
        return /* @__PURE__ */ re.jsx(XD, {});
      case "leverage-loops":
        return /* @__PURE__ */ re.jsx(ZD, {});
      default:
        return /* @__PURE__ */ re.jsx(IE, { agentName: m, logoUrl: y });
    }
  };
  return /* @__PURE__ */ re.jsxs("div", { className: BE.app, children: [
    /* @__PURE__ */ re.jsx(
      dD,
      {
        activeSection: h,
        onSectionChange: R
      }
    ),
    /* @__PURE__ */ re.jsx("main", { className: BE.mainContent, children: L() })
  ] });
};
var vy = { exports: {} }, Qa = {}, hy = { exports: {} }, VS = {};
var $E;
function nO() {
  return $E || ($E = 1, (function(m) {
    function y(te, Oe) {
      var me = te.length;
      te.push(Oe);
      e: for (; 0 < me; ) {
        var U = me - 1 >>> 1, X = te[U];
        if (0 < L(X, Oe)) te[U] = Oe, te[me] = X, me = U;
        else break e;
      }
    }
    function h(te) {
      return te.length === 0 ? null : te[0];
    }
    function R(te) {
      if (te.length === 0) return null;
      var Oe = te[0], me = te.pop();
      if (me !== Oe) {
        te[0] = me;
        e: for (var U = 0, X = te.length, Ze = X >>> 1; U < Ze; ) {
          var Ue = 2 * (U + 1) - 1, ht = te[Ue], tt = Ue + 1, Le = te[tt];
          if (0 > L(ht, me)) tt < X && 0 > L(Le, ht) ? (te[U] = Le, te[tt] = me, U = tt) : (te[U] = ht, te[Ue] = me, U = Ue);
          else if (tt < X && 0 > L(Le, me)) te[U] = Le, te[tt] = me, U = tt;
          else break e;
        }
      }
      return Oe;
    }
    function L(te, Oe) {
      var me = te.sortIndex - Oe.sortIndex;
      return me !== 0 ? me : te.id - Oe.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var b = performance;
      m.unstable_now = function() {
        return b.now();
      };
    } else {
      var v = Date, j = v.now();
      m.unstable_now = function() {
        return v.now() - j;
      };
    }
    var k = [], T = [], F = 1, $ = null, Q = 3, q = !1, ae = !1, he = !1, fe = typeof setTimeout == "function" ? setTimeout : null, We = typeof clearTimeout == "function" ? clearTimeout : null, Se = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ge(te) {
      for (var Oe = h(T); Oe !== null; ) {
        if (Oe.callback === null) R(T);
        else if (Oe.startTime <= te) R(T), Oe.sortIndex = Oe.expirationTime, y(k, Oe);
        else break;
        Oe = h(T);
      }
    }
    function Ee(te) {
      if (he = !1, ge(te), !ae) if (h(k) !== null) ae = !0, we(ve);
      else {
        var Oe = h(T);
        Oe !== null && _e(Ee, Oe.startTime - te);
      }
    }
    function ve(te, Oe) {
      ae = !1, he && (he = !1, We(He), He = -1), q = !0;
      var me = Q;
      try {
        for (ge(Oe), $ = h(k); $ !== null && (!($.expirationTime > Oe) || te && !ut()); ) {
          var U = $.callback;
          if (typeof U == "function") {
            $.callback = null, Q = $.priorityLevel;
            var X = U($.expirationTime <= Oe);
            Oe = m.unstable_now(), typeof X == "function" ? $.callback = X : $ === h(k) && R(k), ge(Oe);
          } else R(k);
          $ = h(k);
        }
        if ($ !== null) var Ze = !0;
        else {
          var Ue = h(T);
          Ue !== null && _e(Ee, Ue.startTime - Oe), Ze = !1;
        }
        return Ze;
      } finally {
        $ = null, Q = me, q = !1;
      }
    }
    var Qe = !1, Pe = null, He = -1, Xe = 5, ot = -1;
    function ut() {
      return !(m.unstable_now() - ot < Xe);
    }
    function K() {
      if (Pe !== null) {
        var te = m.unstable_now();
        ot = te;
        var Oe = !0;
        try {
          Oe = Pe(!0, te);
        } finally {
          Oe ? ee() : (Qe = !1, Pe = null);
        }
      } else Qe = !1;
    }
    var ee;
    if (typeof Se == "function") ee = function() {
      Se(K);
    };
    else if (typeof MessageChannel < "u") {
      var be = new MessageChannel(), Ve = be.port2;
      be.port1.onmessage = K, ee = function() {
        Ve.postMessage(null);
      };
    } else ee = function() {
      fe(K, 0);
    };
    function we(te) {
      Pe = te, Qe || (Qe = !0, ee());
    }
    function _e(te, Oe) {
      He = fe(function() {
        te(m.unstable_now());
      }, Oe);
    }
    m.unstable_IdlePriority = 5, m.unstable_ImmediatePriority = 1, m.unstable_LowPriority = 4, m.unstable_NormalPriority = 3, m.unstable_Profiling = null, m.unstable_UserBlockingPriority = 2, m.unstable_cancelCallback = function(te) {
      te.callback = null;
    }, m.unstable_continueExecution = function() {
      ae || q || (ae = !0, we(ve));
    }, m.unstable_forceFrameRate = function(te) {
      0 > te || 125 < te ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Xe = 0 < te ? Math.floor(1e3 / te) : 5;
    }, m.unstable_getCurrentPriorityLevel = function() {
      return Q;
    }, m.unstable_getFirstCallbackNode = function() {
      return h(k);
    }, m.unstable_next = function(te) {
      switch (Q) {
        case 1:
        case 2:
        case 3:
          var Oe = 3;
          break;
        default:
          Oe = Q;
      }
      var me = Q;
      Q = Oe;
      try {
        return te();
      } finally {
        Q = me;
      }
    }, m.unstable_pauseExecution = function() {
    }, m.unstable_requestPaint = function() {
    }, m.unstable_runWithPriority = function(te, Oe) {
      switch (te) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          te = 3;
      }
      var me = Q;
      Q = te;
      try {
        return Oe();
      } finally {
        Q = me;
      }
    }, m.unstable_scheduleCallback = function(te, Oe, me) {
      var U = m.unstable_now();
      switch (typeof me == "object" && me !== null ? (me = me.delay, me = typeof me == "number" && 0 < me ? U + me : U) : me = U, te) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return X = me + X, te = { id: F++, callback: Oe, priorityLevel: te, startTime: me, expirationTime: X, sortIndex: -1 }, me > U ? (te.sortIndex = me, y(T, te), h(k) === null && te === h(T) && (he ? (We(He), He = -1) : he = !0, _e(Ee, me - U))) : (te.sortIndex = X, y(k, te), ae || q || (ae = !0, we(ve))), te;
    }, m.unstable_shouldYield = ut, m.unstable_wrapCallback = function(te) {
      var Oe = Q;
      return function() {
        var me = Q;
        Q = Oe;
        try {
          return te.apply(this, arguments);
        } finally {
          Q = me;
        }
      };
    };
  })(VS)), VS;
}
var HS = {};
var WE;
function rO() {
  return WE || (WE = 1, (function(m) {
    process.env.NODE_ENV !== "production" && (function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var y = !1, h = 5;
      function R(Ce, Ge) {
        var bt = Ce.length;
        Ce.push(Ge), v(Ce, Ge, bt);
      }
      function L(Ce) {
        return Ce.length === 0 ? null : Ce[0];
      }
      function b(Ce) {
        if (Ce.length === 0)
          return null;
        var Ge = Ce[0], bt = Ce.pop();
        return bt !== Ge && (Ce[0] = bt, j(Ce, bt, 0)), Ge;
      }
      function v(Ce, Ge, bt) {
        for (var Wt = bt; Wt > 0; ) {
          var an = Wt - 1 >>> 1, mn = Ce[an];
          if (k(mn, Ge) > 0)
            Ce[an] = Ge, Ce[Wt] = mn, Wt = an;
          else
            return;
        }
      }
      function j(Ce, Ge, bt) {
        for (var Wt = bt, an = Ce.length, mn = an >>> 1; Wt < mn; ) {
          var cn = (Wt + 1) * 2 - 1, er = Ce[cn], ln = cn + 1, qt = Ce[ln];
          if (k(er, Ge) < 0)
            ln < an && k(qt, er) < 0 ? (Ce[Wt] = qt, Ce[ln] = Ge, Wt = ln) : (Ce[Wt] = er, Ce[cn] = Ge, Wt = cn);
          else if (ln < an && k(qt, Ge) < 0)
            Ce[Wt] = qt, Ce[ln] = Ge, Wt = ln;
          else
            return;
        }
      }
      function k(Ce, Ge) {
        var bt = Ce.sortIndex - Ge.sortIndex;
        return bt !== 0 ? bt : Ce.id - Ge.id;
      }
      var T = 1, F = 2, $ = 3, Q = 4, q = 5;
      function ae(Ce, Ge) {
      }
      var he = typeof performance == "object" && typeof performance.now == "function";
      if (he) {
        var fe = performance;
        m.unstable_now = function() {
          return fe.now();
        };
      } else {
        var We = Date, Se = We.now();
        m.unstable_now = function() {
          return We.now() - Se;
        };
      }
      var ge = 1073741823, Ee = -1, ve = 250, Qe = 5e3, Pe = 1e4, He = ge, Xe = [], ot = [], ut = 1, K = null, ee = $, be = !1, Ve = !1, we = !1, _e = typeof setTimeout == "function" ? setTimeout : null, te = typeof clearTimeout == "function" ? clearTimeout : null, Oe = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function me(Ce) {
        for (var Ge = L(ot); Ge !== null; ) {
          if (Ge.callback === null)
            b(ot);
          else if (Ge.startTime <= Ce)
            b(ot), Ge.sortIndex = Ge.expirationTime, R(Xe, Ge);
          else
            return;
          Ge = L(ot);
        }
      }
      function U(Ce) {
        if (we = !1, me(Ce), !Ve)
          if (L(Xe) !== null)
            Ve = !0, An(X);
          else {
            var Ge = L(ot);
            Ge !== null && Rr(U, Ge.startTime - Ce);
          }
      }
      function X(Ce, Ge) {
        Ve = !1, we && (we = !1, va()), be = !0;
        var bt = ee;
        try {
          var Wt;
          if (!y) return Ze(Ce, Ge);
        } finally {
          K = null, ee = bt, be = !1;
        }
      }
      function Ze(Ce, Ge) {
        var bt = Ge;
        for (me(bt), K = L(Xe); K !== null && !(K.expirationTime > bt && (!Ce || vi())); ) {
          var Wt = K.callback;
          if (typeof Wt == "function") {
            K.callback = null, ee = K.priorityLevel;
            var an = K.expirationTime <= bt, mn = Wt(an);
            bt = m.unstable_now(), typeof mn == "function" ? K.callback = mn : K === L(Xe) && b(Xe), me(bt);
          } else
            b(Xe);
          K = L(Xe);
        }
        if (K !== null)
          return !0;
        var cn = L(ot);
        return cn !== null && Rr(U, cn.startTime - bt), !1;
      }
      function Ue(Ce, Ge) {
        switch (Ce) {
          case T:
          case F:
          case $:
          case Q:
          case q:
            break;
          default:
            Ce = $;
        }
        var bt = ee;
        ee = Ce;
        try {
          return Ge();
        } finally {
          ee = bt;
        }
      }
      function ht(Ce) {
        var Ge;
        switch (ee) {
          case T:
          case F:
          case $:
            Ge = $;
            break;
          default:
            Ge = ee;
            break;
        }
        var bt = ee;
        ee = Ge;
        try {
          return Ce();
        } finally {
          ee = bt;
        }
      }
      function tt(Ce) {
        var Ge = ee;
        return function() {
          var bt = ee;
          ee = Ge;
          try {
            return Ce.apply(this, arguments);
          } finally {
            ee = bt;
          }
        };
      }
      function Le(Ce, Ge, bt) {
        var Wt = m.unstable_now(), an;
        if (typeof bt == "object" && bt !== null) {
          var mn = bt.delay;
          typeof mn == "number" && mn > 0 ? an = Wt + mn : an = Wt;
        } else
          an = Wt;
        var cn;
        switch (Ce) {
          case T:
            cn = Ee;
            break;
          case F:
            cn = ve;
            break;
          case q:
            cn = He;
            break;
          case Q:
            cn = Pe;
            break;
          case $:
          default:
            cn = Qe;
            break;
        }
        var er = an + cn, ln = {
          id: ut++,
          callback: Ge,
          priorityLevel: Ce,
          startTime: an,
          expirationTime: er,
          sortIndex: -1
        };
        return an > Wt ? (ln.sortIndex = an, R(ot, ln), L(Xe) === null && ln === L(ot) && (we ? va() : we = !0, Rr(U, an - Wt))) : (ln.sortIndex = er, R(Xe, ln), !Ve && !be && (Ve = !0, An(X))), ln;
      }
      function st() {
      }
      function dt() {
        !Ve && !be && (Ve = !0, An(X));
      }
      function Gt() {
        return L(Xe);
      }
      function Mn(Ce) {
        Ce.callback = null;
      }
      function Dr() {
        return ee;
      }
      var bn = !1, lr = null, $n = -1, Wn = h, qr = -1;
      function vi() {
        var Ce = m.unstable_now() - qr;
        return !(Ce < Wn);
      }
      function pa() {
      }
      function Jn(Ce) {
        if (Ce < 0 || Ce > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Ce > 0 ? Wn = Math.floor(1e3 / Ce) : Wn = h;
      }
      var Tn = function() {
        if (lr !== null) {
          var Ce = m.unstable_now();
          qr = Ce;
          var Ge = !0, bt = !0;
          try {
            bt = lr(Ge, Ce);
          } finally {
            bt ? Yn() : (bn = !1, lr = null);
          }
        } else
          bn = !1;
      }, Yn;
      if (typeof Oe == "function")
        Yn = function() {
          Oe(Tn);
        };
      else if (typeof MessageChannel < "u") {
        var Er = new MessageChannel(), qa = Er.port2;
        Er.port1.onmessage = Tn, Yn = function() {
          qa.postMessage(null);
        };
      } else
        Yn = function() {
          _e(Tn, 0);
        };
      function An(Ce) {
        lr = Ce, bn || (bn = !0, Yn());
      }
      function Rr(Ce, Ge) {
        $n = _e(function() {
          Ce(m.unstable_now());
        }, Ge);
      }
      function va() {
        te($n), $n = -1;
      }
      var Ka = pa, hi = null;
      m.unstable_IdlePriority = q, m.unstable_ImmediatePriority = T, m.unstable_LowPriority = Q, m.unstable_NormalPriority = $, m.unstable_Profiling = hi, m.unstable_UserBlockingPriority = F, m.unstable_cancelCallback = Mn, m.unstable_continueExecution = dt, m.unstable_forceFrameRate = Jn, m.unstable_getCurrentPriorityLevel = Dr, m.unstable_getFirstCallbackNode = Gt, m.unstable_next = ht, m.unstable_pauseExecution = st, m.unstable_requestPaint = Ka, m.unstable_runWithPriority = Ue, m.unstable_scheduleCallback = Le, m.unstable_shouldYield = vi, m.unstable_wrapCallback = tt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  })(HS)), HS;
}
var YE;
function f2() {
  return YE || (YE = 1, process.env.NODE_ENV === "production" ? hy.exports = nO() : hy.exports = rO()), hy.exports;
}
var QE;
function aO() {
  if (QE) return Qa;
  QE = 1;
  var m = yv(), y = f2();
  function h(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var R = /* @__PURE__ */ new Set(), L = {};
  function b(n, r) {
    v(n, r), v(n + "Capture", r);
  }
  function v(n, r) {
    for (L[n] = r, n = 0; n < r.length; n++) R.add(r[n]);
  }
  var j = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), k = Object.prototype.hasOwnProperty, T = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, F = {}, $ = {};
  function Q(n) {
    return k.call($, n) ? !0 : k.call(F, n) ? !1 : T.test(n) ? $[n] = !0 : (F[n] = !0, !1);
  }
  function q(n, r, l, u) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return u ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function ae(n, r, l, u) {
    if (r === null || typeof r > "u" || q(n, r, l, u)) return !0;
    if (u) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function he(n, r, l, u, c, d, _) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = _;
  }
  var fe = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    fe[n] = new he(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    fe[r] = new he(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    fe[n] = new he(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    fe[n] = new he(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    fe[n] = new he(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    fe[n] = new he(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    fe[n] = new he(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    fe[n] = new he(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    fe[n] = new he(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var We = /[\-:]([a-z])/g;
  function Se(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      We,
      Se
    );
    fe[r] = new he(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(We, Se);
    fe[r] = new he(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(We, Se);
    fe[r] = new he(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    fe[n] = new he(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), fe.xlinkHref = new he("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    fe[n] = new he(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function ge(n, r, l, u) {
    var c = fe.hasOwnProperty(r) ? fe[r] : null;
    (c !== null ? c.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ae(r, l, c, u) && (l = null), u || c === null ? Q(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, u = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, u ? n.setAttributeNS(u, r, l) : n.setAttribute(r, l))));
  }
  var Ee = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ve = /* @__PURE__ */ Symbol.for("react.element"), Qe = /* @__PURE__ */ Symbol.for("react.portal"), Pe = /* @__PURE__ */ Symbol.for("react.fragment"), He = /* @__PURE__ */ Symbol.for("react.strict_mode"), Xe = /* @__PURE__ */ Symbol.for("react.profiler"), ot = /* @__PURE__ */ Symbol.for("react.provider"), ut = /* @__PURE__ */ Symbol.for("react.context"), K = /* @__PURE__ */ Symbol.for("react.forward_ref"), ee = /* @__PURE__ */ Symbol.for("react.suspense"), be = /* @__PURE__ */ Symbol.for("react.suspense_list"), Ve = /* @__PURE__ */ Symbol.for("react.memo"), we = /* @__PURE__ */ Symbol.for("react.lazy"), _e = /* @__PURE__ */ Symbol.for("react.offscreen"), te = Symbol.iterator;
  function Oe(n) {
    return n === null || typeof n != "object" ? null : (n = te && n[te] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var me = Object.assign, U;
  function X(n) {
    if (U === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      U = r && r[1] || "";
    }
    return `
` + U + n;
  }
  var Ze = !1;
  function Ue(n, r) {
    if (!n || Ze) return "";
    Ze = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (W) {
          var u = W;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (W) {
          u = W;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (W) {
          u = W;
        }
        n();
      }
    } catch (W) {
      if (W && u && typeof W.stack == "string") {
        for (var c = W.stack.split(`
`), d = u.stack.split(`
`), _ = c.length - 1, x = d.length - 1; 1 <= _ && 0 <= x && c[_] !== d[x]; ) x--;
        for (; 1 <= _ && 0 <= x; _--, x--) if (c[_] !== d[x]) {
          if (_ !== 1 || x !== 1)
            do
              if (_--, x--, 0 > x || c[_] !== d[x]) {
                var O = `
` + c[_].replace(" at new ", " at ");
                return n.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", n.displayName)), O;
              }
            while (1 <= _ && 0 <= x);
          break;
        }
      }
    } finally {
      Ze = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? X(n) : "";
  }
  function ht(n) {
    switch (n.tag) {
      case 5:
        return X(n.type);
      case 16:
        return X("Lazy");
      case 13:
        return X("Suspense");
      case 19:
        return X("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ue(n.type, !1), n;
      case 11:
        return n = Ue(n.type.render, !1), n;
      case 1:
        return n = Ue(n.type, !0), n;
      default:
        return "";
    }
  }
  function tt(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Pe:
        return "Fragment";
      case Qe:
        return "Portal";
      case Xe:
        return "Profiler";
      case He:
        return "StrictMode";
      case ee:
        return "Suspense";
      case be:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case ut:
        return (n.displayName || "Context") + ".Consumer";
      case ot:
        return (n._context.displayName || "Context") + ".Provider";
      case K:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Ve:
        return r = n.displayName || null, r !== null ? r : tt(n.type) || "Memo";
      case we:
        r = n._payload, n = n._init;
        try {
          return tt(n(r));
        } catch {
        }
    }
    return null;
  }
  function Le(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return tt(r);
      case 8:
        return r === He ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function st(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function dt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Gt(n) {
    var r = dt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), u = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(_) {
        u = "" + _, d.call(this, _);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return u;
      }, setValue: function(_) {
        u = "" + _;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Mn(n) {
    n._valueTracker || (n._valueTracker = Gt(n));
  }
  function Dr(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), u = "";
    return n && (u = dt(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== l ? (r.setValue(n), !0) : !1;
  }
  function bn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function lr(n, r) {
    var l = r.checked;
    return me({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function $n(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    l = st(r.value != null ? r.value : l), n._wrapperState = { initialChecked: u, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Wn(n, r) {
    r = r.checked, r != null && ge(n, "checked", r, !1);
  }
  function qr(n, r) {
    Wn(n, r);
    var l = st(r.value), u = r.type;
    if (l != null) u === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? pa(n, r.type, l) : r.hasOwnProperty("defaultValue") && pa(n, r.type, st(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function vi(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var u = r.type;
      if (!(u !== "submit" && u !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function pa(n, r, l) {
    (r !== "number" || bn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Jn = Array.isArray;
  function Tn(n, r, l, u) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && u && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + st(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, u && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Yn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(h(91));
    return me({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Er(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(h(92));
        if (Jn(l)) {
          if (1 < l.length) throw Error(h(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: st(l) };
  }
  function qa(n, r) {
    var l = st(r.value), u = st(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), u != null && (n.defaultValue = "" + u);
  }
  function An(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Rr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function va(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Rr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Ka, hi = (function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, u, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, u, c);
      });
    } : n;
  })(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (Ka = Ka || document.createElement("div"), Ka.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Ka.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function Ce(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Ge = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, bt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ge).forEach(function(n) {
    bt.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Ge[r] = Ge[n];
    });
  });
  function Wt(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || Ge.hasOwnProperty(n) && Ge[n] ? ("" + r).trim() : r + "px";
  }
  function an(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var u = l.indexOf("--") === 0, c = Wt(l, r[l], u);
      l === "float" && (l = "cssFloat"), u ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var mn = me({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function cn(n, r) {
    if (r) {
      if (mn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(h(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(h(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(h(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(h(62));
    }
  }
  function er(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var ln = null;
  function qt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Kt = null, ha = null, br = null;
  function ka(n) {
    if (n = Je(n)) {
      if (typeof Kt != "function") throw Error(h(280));
      var r = n.stateNode;
      r && (r = gn(r), Kt(n.stateNode, n.type, r));
    }
  }
  function Wi(n) {
    ha ? br ? br.push(n) : br = [n] : ha = n;
  }
  function io() {
    if (ha) {
      var n = ha, r = br;
      if (br = ha = null, ka(n), r) for (n = 0; n < r.length; n++) ka(r[n]);
    }
  }
  function lo(n, r) {
    return n(r);
  }
  function Sl() {
  }
  var _l = !1;
  function oo(n, r, l) {
    if (_l) return n(r, l);
    _l = !0;
    try {
      return lo(n, r, l);
    } finally {
      _l = !1, (ha !== null || br !== null) && (Sl(), io());
    }
  }
  function Or(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var u = gn(l);
    if (u === null) return null;
    l = u[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (u = !u.disabled) || (n = n.type, u = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !u;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(h(231, r, typeof l));
    return l;
  }
  var Lr = !1;
  if (j) try {
    var or = {};
    Object.defineProperty(or, "passive", { get: function() {
      Lr = !0;
    } }), window.addEventListener("test", or, or), window.removeEventListener("test", or, or);
  } catch {
    Lr = !1;
  }
  function mi(n, r, l, u, c, d, _, x, O) {
    var W = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, W);
    } catch (se) {
      this.onError(se);
    }
  }
  var Xa = !1, yi = null, gi = !1, D = null, ie = { onError: function(n) {
    Xa = !0, yi = n;
  } };
  function xe(n, r, l, u, c, d, _, x, O) {
    Xa = !1, yi = null, mi.apply(ie, arguments);
  }
  function Fe(n, r, l, u, c, d, _, x, O) {
    if (xe.apply(this, arguments), Xa) {
      if (Xa) {
        var W = yi;
        Xa = !1, yi = null;
      } else throw Error(h(198));
      gi || (gi = !0, D = W);
    }
  }
  function St(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, (r.flags & 4098) !== 0 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function mt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function kt(n) {
    if (St(n) !== n) throw Error(h(188));
  }
  function xt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = St(n), r === null) throw Error(h(188));
      return r !== n ? null : n;
    }
    for (var l = n, u = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (u = c.return, u !== null) {
          l = u;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return kt(c), n;
          if (d === u) return kt(c), r;
          d = d.sibling;
        }
        throw Error(h(188));
      }
      if (l.return !== u.return) l = c, u = d;
      else {
        for (var _ = !1, x = c.child; x; ) {
          if (x === l) {
            _ = !0, l = c, u = d;
            break;
          }
          if (x === u) {
            _ = !0, u = c, l = d;
            break;
          }
          x = x.sibling;
        }
        if (!_) {
          for (x = d.child; x; ) {
            if (x === l) {
              _ = !0, l = d, u = c;
              break;
            }
            if (x === u) {
              _ = !0, u = d, l = c;
              break;
            }
            x = x.sibling;
          }
          if (!_) throw Error(h(189));
        }
      }
      if (l.alternate !== u) throw Error(h(190));
    }
    if (l.tag !== 3) throw Error(h(188));
    return l.stateNode.current === l ? n : r;
  }
  function xn(n) {
    return n = xt(n), n !== null ? on(n) : null;
  }
  function on(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = on(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var fn = y.unstable_scheduleCallback, ur = y.unstable_cancelCallback, Za = y.unstable_shouldYield, Ja = y.unstable_requestPaint, _t = y.unstable_now, Rt = y.unstable_getCurrentPriorityLevel, ei = y.unstable_ImmediatePriority, uo = y.unstable_UserBlockingPriority, so = y.unstable_NormalPriority, Cl = y.unstable_LowPriority, nu = y.unstable_IdlePriority, El = null, Kr = null;
  function es(n) {
    if (Kr && typeof Kr.onCommitFiberRoot == "function") try {
      Kr.onCommitFiberRoot(El, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Nr = Math.clz32 ? Math.clz32 : ru, gc = Math.log, Sc = Math.LN2;
  function ru(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (gc(n) / Sc | 0) | 0;
  }
  var Rl = 64, ma = 4194304;
  function ti(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function ni(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var u = 0, c = n.suspendedLanes, d = n.pingedLanes, _ = l & 268435455;
    if (_ !== 0) {
      var x = _ & ~c;
      x !== 0 ? u = ti(x) : (d &= _, d !== 0 && (u = ti(d)));
    } else _ = l & ~c, _ !== 0 ? u = ti(_) : d !== 0 && (u = ti(d));
    if (u === 0) return 0;
    if (r !== 0 && r !== u && (r & c) === 0 && (c = u & -u, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if ((u & 4) !== 0 && (u |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= u; 0 < r; ) l = 31 - Nr(r), c = 1 << l, u |= n[l], r &= ~c;
    return u;
  }
  function au(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function co(n, r) {
    for (var l = n.suspendedLanes, u = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var _ = 31 - Nr(d), x = 1 << _, O = c[_];
      O === -1 ? ((x & l) === 0 || (x & u) !== 0) && (c[_] = au(x, r)) : O <= r && (n.expiredLanes |= x), d &= ~x;
    }
  }
  function bl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function iu() {
    var n = Rl;
    return Rl <<= 1, (Rl & 4194240) === 0 && (Rl = 64), n;
  }
  function lu(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Yi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Nr(r), n[r] = l;
  }
  function ud(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var u = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Nr(l), d = 1 << c;
      r[c] = 0, u[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Qi(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var u = 31 - Nr(l), c = 1 << u;
      c & r | n[u] & r && (n[u] |= r), l &= ~c;
    }
  }
  var Pt = 0;
  function ou(n) {
    return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var jt, ts, Si, vt, uu, sr = !1, _i = [], Mr = null, Ci = null, dn = null, Xt = /* @__PURE__ */ new Map(), Tl = /* @__PURE__ */ new Map(), Qn = [], Ar = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Da(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Mr = null;
        break;
      case "dragenter":
      case "dragleave":
        Ci = null;
        break;
      case "mouseover":
      case "mouseout":
        dn = null;
        break;
      case "pointerover":
      case "pointerout":
        Xt.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Tl.delete(r.pointerId);
    }
  }
  function fo(n, r, l, u, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: u, nativeEvent: d, targetContainers: [c] }, r !== null && (r = Je(r), r !== null && ts(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function ns(n, r, l, u, c) {
    switch (r) {
      case "focusin":
        return Mr = fo(Mr, n, r, l, u, c), !0;
      case "dragenter":
        return Ci = fo(Ci, n, r, l, u, c), !0;
      case "mouseover":
        return dn = fo(dn, n, r, l, u, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Xt.set(d, fo(Xt.get(d) || null, n, r, l, u, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Tl.set(d, fo(Tl.get(d) || null, n, r, l, u, c)), !0;
    }
    return !1;
  }
  function rs(n) {
    var r = Co(n.target);
    if (r !== null) {
      var l = St(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = mt(l), r !== null) {
            n.blockedOn = r, uu(n.priority, function() {
              Si(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function xl(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = fu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var u = new l.constructor(l.type, l);
        ln = u, l.target.dispatchEvent(u), ln = null;
      } else return r = Je(l), r !== null && ts(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function po(n, r, l) {
    xl(n) && l.delete(r);
  }
  function sd() {
    sr = !1, Mr !== null && xl(Mr) && (Mr = null), Ci !== null && xl(Ci) && (Ci = null), dn !== null && xl(dn) && (dn = null), Xt.forEach(po), Tl.forEach(po);
  }
  function Oa(n, r) {
    n.blockedOn === r && (n.blockedOn = null, sr || (sr = !0, y.unstable_scheduleCallback(y.unstable_NormalPriority, sd)));
  }
  function ri(n) {
    function r(c) {
      return Oa(c, n);
    }
    if (0 < _i.length) {
      Oa(_i[0], n);
      for (var l = 1; l < _i.length; l++) {
        var u = _i[l];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (Mr !== null && Oa(Mr, n), Ci !== null && Oa(Ci, n), dn !== null && Oa(dn, n), Xt.forEach(r), Tl.forEach(r), l = 0; l < Qn.length; l++) u = Qn[l], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < Qn.length && (l = Qn[0], l.blockedOn === null); ) rs(l), l.blockedOn === null && Qn.shift();
  }
  var Ei = Ee.ReactCurrentBatchConfig, La = !0;
  function su(n, r, l, u) {
    var c = Pt, d = Ei.transition;
    Ei.transition = null;
    try {
      Pt = 1, wl(n, r, l, u);
    } finally {
      Pt = c, Ei.transition = d;
    }
  }
  function cu(n, r, l, u) {
    var c = Pt, d = Ei.transition;
    Ei.transition = null;
    try {
      Pt = 4, wl(n, r, l, u);
    } finally {
      Pt = c, Ei.transition = d;
    }
  }
  function wl(n, r, l, u) {
    if (La) {
      var c = fu(n, r, l, u);
      if (c === null) Lc(n, r, u, vo, l), Da(n, u);
      else if (ns(c, n, r, l, u)) u.stopPropagation();
      else if (Da(n, u), r & 4 && -1 < Ar.indexOf(n)) {
        for (; c !== null; ) {
          var d = Je(c);
          if (d !== null && jt(d), d = fu(n, r, l, u), d === null && Lc(n, r, u, vo, l), d === c) break;
          c = d;
        }
        c !== null && u.stopPropagation();
      } else Lc(n, r, u, null, l);
    }
  }
  var vo = null;
  function fu(n, r, l, u) {
    if (vo = null, n = qt(u), n = Co(n), n !== null) if (r = St(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = mt(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return vo = n, null;
  }
  function du(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Rt()) {
          case ei:
            return 1;
          case uo:
            return 4;
          case so:
          case Cl:
            return 16;
          case nu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ai = null, S = null, w = null;
  function B() {
    if (w) return w;
    var n, r = S, l = r.length, u, c = "value" in ai ? ai.value : ai.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var _ = l - n;
    for (u = 1; u <= _ && r[l - u] === c[d - u]; u++) ;
    return w = c.slice(n, 1 < u ? 1 - u : void 0);
  }
  function G(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function ye() {
    return !0;
  }
  function nt() {
    return !1;
  }
  function Te(n) {
    function r(l, u, c, d, _) {
      this._reactName = l, this._targetInst = c, this.type = u, this.nativeEvent = d, this.target = _, this.currentTarget = null;
      for (var x in n) n.hasOwnProperty(x) && (l = n[x], this[x] = l ? l(d) : d[x]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? ye : nt, this.isPropagationStopped = nt, this;
    }
    return me(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = ye);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = ye);
    }, persist: function() {
    }, isPersistent: ye }), r;
  }
  var it = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Dt = Te(it), zt = me({}, it, { view: 0, detail: 0 }), un = Te(zt), Zt, Tt, Jt, yn = me({}, zt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: vd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Jt && (Jt && n.type === "mousemove" ? (Zt = n.screenX - Jt.screenX, Tt = n.screenY - Jt.screenY) : Tt = Zt = 0, Jt = n), Zt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Tt;
  } }), kl = Te(yn), as = me({}, yn, { dataTransfer: 0 }), Gi = Te(as), is = me({}, zt, { relatedTarget: 0 }), ho = Te(is), cd = me({}, it, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), _c = Te(cd), fd = me({}, it, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), _v = Te(fd), dd = me({}, it, { data: 0 }), pd = Te(dd), Cv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Ev = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, by = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function qi(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = by[n]) ? !!r[n] : !1;
  }
  function vd() {
    return qi;
  }
  var hd = me({}, zt, { key: function(n) {
    if (n.key) {
      var r = Cv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = G(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Ev[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: vd, charCode: function(n) {
    return n.type === "keypress" ? G(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? G(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), md = Te(hd), yd = me({}, yn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Rv = Te(yd), Cc = me({}, zt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: vd }), bv = Te(Cc), Xr = me({}, it, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ki = Te(Xr), Un = me({}, yn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Xi = Te(Un), gd = [9, 13, 27, 32], pu = j && "CompositionEvent" in window, ls = null;
  j && "documentMode" in document && (ls = document.documentMode);
  var os = j && "TextEvent" in window && !ls, Tv = j && (!pu || ls && 8 < ls && 11 >= ls), xv = " ", Ec = !1;
  function wv(n, r) {
    switch (n) {
      case "keyup":
        return gd.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function kv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var vu = !1;
  function Dv(n, r) {
    switch (n) {
      case "compositionend":
        return kv(r);
      case "keypress":
        return r.which !== 32 ? null : (Ec = !0, xv);
      case "textInput":
        return n = r.data, n === xv && Ec ? null : n;
      default:
        return null;
    }
  }
  function Ty(n, r) {
    if (vu) return n === "compositionend" || !pu && wv(n, r) ? (n = B(), w = S = ai = null, vu = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Tv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var xy = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Ov(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!xy[n.type] : r === "textarea";
  }
  function Sd(n, r, l, u) {
    Wi(u), r = ps(r, "onChange"), 0 < r.length && (l = new Dt("onChange", "change", null, l, u), n.push({ event: l, listeners: r }));
  }
  var Ri = null, mo = null;
  function Lv(n) {
    So(n, 0);
  }
  function us(n) {
    var r = li(n);
    if (Dr(r)) return n;
  }
  function wy(n, r) {
    if (n === "change") return r;
  }
  var Nv = !1;
  if (j) {
    var _d;
    if (j) {
      var Cd = "oninput" in document;
      if (!Cd) {
        var Mv = document.createElement("div");
        Mv.setAttribute("oninput", "return;"), Cd = typeof Mv.oninput == "function";
      }
      _d = Cd;
    } else _d = !1;
    Nv = _d && (!document.documentMode || 9 < document.documentMode);
  }
  function Av() {
    Ri && (Ri.detachEvent("onpropertychange", Uv), mo = Ri = null);
  }
  function Uv(n) {
    if (n.propertyName === "value" && us(mo)) {
      var r = [];
      Sd(r, mo, n, qt(n)), oo(Lv, r);
    }
  }
  function ky(n, r, l) {
    n === "focusin" ? (Av(), Ri = r, mo = l, Ri.attachEvent("onpropertychange", Uv)) : n === "focusout" && Av();
  }
  function jv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return us(mo);
  }
  function Dy(n, r) {
    if (n === "click") return us(r);
  }
  function zv(n, r) {
    if (n === "input" || n === "change") return us(r);
  }
  function Oy(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ii = typeof Object.is == "function" ? Object.is : Oy;
  function ss(n, r) {
    if (ii(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), u = Object.keys(r);
    if (l.length !== u.length) return !1;
    for (u = 0; u < l.length; u++) {
      var c = l[u];
      if (!k.call(r, c) || !ii(n[c], r[c])) return !1;
    }
    return !0;
  }
  function Fv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Rc(n, r) {
    var l = Fv(n);
    n = 0;
    for (var u; l; ) {
      if (l.nodeType === 3) {
        if (u = n + l.textContent.length, n <= r && u >= r) return { node: l, offset: r - n };
        n = u;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Fv(l);
    }
  }
  function Dl(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Dl(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function cs() {
    for (var n = window, r = bn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = bn(n.document);
    }
    return r;
  }
  function bc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function hu(n) {
    var r = cs(), l = n.focusedElem, u = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Dl(l.ownerDocument.documentElement, l)) {
      if (u !== null && bc(l)) {
        if (r = u.start, n = u.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(u.start, c);
          u = u.end === void 0 ? d : Math.min(u.end, c), !n.extend && d > u && (c = u, u = d, d = c), c = Rc(l, d);
          var _ = Rc(
            l,
            u
          );
          c && _ && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== _.node || n.focusOffset !== _.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > u ? (n.addRange(r), n.extend(_.node, _.offset)) : (r.setEnd(_.node, _.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Ly = j && "documentMode" in document && 11 >= document.documentMode, mu = null, Ed = null, fs = null, Rd = !1;
  function bd(n, r, l) {
    var u = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Rd || mu == null || mu !== bn(u) || (u = mu, "selectionStart" in u && bc(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), fs && ss(fs, u) || (fs = u, u = ps(Ed, "onSelect"), 0 < u.length && (r = new Dt("onSelect", "select", null, r, l), n.push({ event: r, listeners: u }), r.target = mu)));
  }
  function Tc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var yo = { animationend: Tc("Animation", "AnimationEnd"), animationiteration: Tc("Animation", "AnimationIteration"), animationstart: Tc("Animation", "AnimationStart"), transitionend: Tc("Transition", "TransitionEnd") }, cr = {}, Td = {};
  j && (Td = document.createElement("div").style, "AnimationEvent" in window || (delete yo.animationend.animation, delete yo.animationiteration.animation, delete yo.animationstart.animation), "TransitionEvent" in window || delete yo.transitionend.transition);
  function xc(n) {
    if (cr[n]) return cr[n];
    if (!yo[n]) return n;
    var r = yo[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in Td) return cr[n] = r[l];
    return n;
  }
  var Pv = xc("animationend"), Vv = xc("animationiteration"), Hv = xc("animationstart"), Iv = xc("transitionend"), xd = /* @__PURE__ */ new Map(), wc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Na(n, r) {
    xd.set(n, r), b(r, [n]);
  }
  for (var wd = 0; wd < wc.length; wd++) {
    var go = wc[wd], Ny = go.toLowerCase(), My = go[0].toUpperCase() + go.slice(1);
    Na(Ny, "on" + My);
  }
  Na(Pv, "onAnimationEnd"), Na(Vv, "onAnimationIteration"), Na(Hv, "onAnimationStart"), Na("dblclick", "onDoubleClick"), Na("focusin", "onFocus"), Na("focusout", "onBlur"), Na(Iv, "onTransitionEnd"), v("onMouseEnter", ["mouseout", "mouseover"]), v("onMouseLeave", ["mouseout", "mouseover"]), v("onPointerEnter", ["pointerout", "pointerover"]), v("onPointerLeave", ["pointerout", "pointerover"]), b("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), b("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), b("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), b("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), b("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), b("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ds = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), kd = new Set("cancel close invalid load scroll toggle".split(" ").concat(ds));
  function kc(n, r, l) {
    var u = n.type || "unknown-event";
    n.currentTarget = l, Fe(u, r, void 0, n), n.currentTarget = null;
  }
  function So(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var u = n[l], c = u.event;
      u = u.listeners;
      e: {
        var d = void 0;
        if (r) for (var _ = u.length - 1; 0 <= _; _--) {
          var x = u[_], O = x.instance, W = x.currentTarget;
          if (x = x.listener, O !== d && c.isPropagationStopped()) break e;
          kc(c, x, W), d = O;
        }
        else for (_ = 0; _ < u.length; _++) {
          if (x = u[_], O = x.instance, W = x.currentTarget, x = x.listener, O !== d && c.isPropagationStopped()) break e;
          kc(c, x, W), d = O;
        }
      }
    }
    if (gi) throw n = D, gi = !1, D = null, n;
  }
  function Yt(n, r) {
    var l = r[ms];
    l === void 0 && (l = r[ms] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    l.has(u) || (Bv(r, n, 2, !1), l.add(u));
  }
  function Dc(n, r, l) {
    var u = 0;
    r && (u |= 4), Bv(l, n, u, r);
  }
  var Oc = "_reactListening" + Math.random().toString(36).slice(2);
  function yu(n) {
    if (!n[Oc]) {
      n[Oc] = !0, R.forEach(function(l) {
        l !== "selectionchange" && (kd.has(l) || Dc(l, !1, n), Dc(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Oc] || (r[Oc] = !0, Dc("selectionchange", !1, r));
    }
  }
  function Bv(n, r, l, u) {
    switch (du(r)) {
      case 1:
        var c = su;
        break;
      case 4:
        c = cu;
        break;
      default:
        c = wl;
    }
    l = c.bind(null, r, l, n), c = void 0, !Lr || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), u ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function Lc(n, r, l, u, c) {
    var d = u;
    if ((r & 1) === 0 && (r & 2) === 0 && u !== null) e: for (; ; ) {
      if (u === null) return;
      var _ = u.tag;
      if (_ === 3 || _ === 4) {
        var x = u.stateNode.containerInfo;
        if (x === c || x.nodeType === 8 && x.parentNode === c) break;
        if (_ === 4) for (_ = u.return; _ !== null; ) {
          var O = _.tag;
          if ((O === 3 || O === 4) && (O = _.stateNode.containerInfo, O === c || O.nodeType === 8 && O.parentNode === c)) return;
          _ = _.return;
        }
        for (; x !== null; ) {
          if (_ = Co(x), _ === null) return;
          if (O = _.tag, O === 5 || O === 6) {
            u = d = _;
            continue e;
          }
          x = x.parentNode;
        }
      }
      u = u.return;
    }
    oo(function() {
      var W = d, se = qt(l), de = [];
      e: {
        var ue = xd.get(n);
        if (ue !== void 0) {
          var Me = Dt, Ie = n;
          switch (n) {
            case "keypress":
              if (G(l) === 0) break e;
            case "keydown":
            case "keyup":
              Me = md;
              break;
            case "focusin":
              Ie = "focus", Me = ho;
              break;
            case "focusout":
              Ie = "blur", Me = ho;
              break;
            case "beforeblur":
            case "afterblur":
              Me = ho;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Me = kl;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Me = Gi;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Me = bv;
              break;
            case Pv:
            case Vv:
            case Hv:
              Me = _c;
              break;
            case Iv:
              Me = Ki;
              break;
            case "scroll":
              Me = un;
              break;
            case "wheel":
              Me = Xi;
              break;
            case "copy":
            case "cut":
            case "paste":
              Me = _v;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Me = Rv;
          }
          var Ye = (r & 4) !== 0, Ln = !Ye && n === "scroll", z = Ye ? ue !== null ? ue + "Capture" : null : ue;
          Ye = [];
          for (var M = W, H; M !== null; ) {
            H = M;
            var ce = H.stateNode;
            if (H.tag === 5 && ce !== null && (H = ce, z !== null && (ce = Or(M, z), ce != null && Ye.push(gu(M, ce, H)))), Ln) break;
            M = M.return;
          }
          0 < Ye.length && (ue = new Me(ue, Ie, null, l, se), de.push({ event: ue, listeners: Ye }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (ue = n === "mouseover" || n === "pointerover", Me = n === "mouseout" || n === "pointerout", ue && l !== ln && (Ie = l.relatedTarget || l.fromElement) && (Co(Ie) || Ie[Zi])) break e;
          if ((Me || ue) && (ue = se.window === se ? se : (ue = se.ownerDocument) ? ue.defaultView || ue.parentWindow : window, Me ? (Ie = l.relatedTarget || l.toElement, Me = W, Ie = Ie ? Co(Ie) : null, Ie !== null && (Ln = St(Ie), Ie !== Ln || Ie.tag !== 5 && Ie.tag !== 6) && (Ie = null)) : (Me = null, Ie = W), Me !== Ie)) {
            if (Ye = kl, ce = "onMouseLeave", z = "onMouseEnter", M = "mouse", (n === "pointerout" || n === "pointerover") && (Ye = Rv, ce = "onPointerLeave", z = "onPointerEnter", M = "pointer"), Ln = Me == null ? ue : li(Me), H = Ie == null ? ue : li(Ie), ue = new Ye(ce, M + "leave", Me, l, se), ue.target = Ln, ue.relatedTarget = H, ce = null, Co(se) === W && (Ye = new Ye(z, M + "enter", Ie, l, se), Ye.target = H, Ye.relatedTarget = Ln, ce = Ye), Ln = ce, Me && Ie) t: {
              for (Ye = Me, z = Ie, M = 0, H = Ye; H; H = Ol(H)) M++;
              for (H = 0, ce = z; ce; ce = Ol(ce)) H++;
              for (; 0 < M - H; ) Ye = Ol(Ye), M--;
              for (; 0 < H - M; ) z = Ol(z), H--;
              for (; M--; ) {
                if (Ye === z || z !== null && Ye === z.alternate) break t;
                Ye = Ol(Ye), z = Ol(z);
              }
              Ye = null;
            }
            else Ye = null;
            Me !== null && $v(de, ue, Me, Ye, !1), Ie !== null && Ln !== null && $v(de, Ln, Ie, Ye, !0);
          }
        }
        e: {
          if (ue = W ? li(W) : window, Me = ue.nodeName && ue.nodeName.toLowerCase(), Me === "select" || Me === "input" && ue.type === "file") var Be = wy;
          else if (Ov(ue)) if (Nv) Be = zv;
          else {
            Be = jv;
            var at = ky;
          }
          else (Me = ue.nodeName) && Me.toLowerCase() === "input" && (ue.type === "checkbox" || ue.type === "radio") && (Be = Dy);
          if (Be && (Be = Be(n, W))) {
            Sd(de, Be, l, se);
            break e;
          }
          at && at(n, ue, W), n === "focusout" && (at = ue._wrapperState) && at.controlled && ue.type === "number" && pa(ue, "number", ue.value);
        }
        switch (at = W ? li(W) : window, n) {
          case "focusin":
            (Ov(at) || at.contentEditable === "true") && (mu = at, Ed = W, fs = null);
            break;
          case "focusout":
            fs = Ed = mu = null;
            break;
          case "mousedown":
            Rd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Rd = !1, bd(de, l, se);
            break;
          case "selectionchange":
            if (Ly) break;
          case "keydown":
          case "keyup":
            bd(de, l, se);
        }
        var lt;
        if (pu) e: {
          switch (n) {
            case "compositionstart":
              var pt = "onCompositionStart";
              break e;
            case "compositionend":
              pt = "onCompositionEnd";
              break e;
            case "compositionupdate":
              pt = "onCompositionUpdate";
              break e;
          }
          pt = void 0;
        }
        else vu ? wv(n, l) && (pt = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (pt = "onCompositionStart");
        pt && (Tv && l.locale !== "ko" && (vu || pt !== "onCompositionStart" ? pt === "onCompositionEnd" && vu && (lt = B()) : (ai = se, S = "value" in ai ? ai.value : ai.textContent, vu = !0)), at = ps(W, pt), 0 < at.length && (pt = new pd(pt, n, null, l, se), de.push({ event: pt, listeners: at }), lt ? pt.data = lt : (lt = kv(l), lt !== null && (pt.data = lt)))), (lt = os ? Dv(n, l) : Ty(n, l)) && (W = ps(W, "onBeforeInput"), 0 < W.length && (se = new pd("onBeforeInput", "beforeinput", null, l, se), de.push({ event: se, listeners: W }), se.data = lt));
      }
      So(de, r);
    });
  }
  function gu(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function ps(n, r) {
    for (var l = r + "Capture", u = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = Or(n, l), d != null && u.unshift(gu(n, d, c)), d = Or(n, r), d != null && u.push(gu(n, d, c))), n = n.return;
    }
    return u;
  }
  function Ol(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function $v(n, r, l, u, c) {
    for (var d = r._reactName, _ = []; l !== null && l !== u; ) {
      var x = l, O = x.alternate, W = x.stateNode;
      if (O !== null && O === u) break;
      x.tag === 5 && W !== null && (x = W, c ? (O = Or(l, d), O != null && _.unshift(gu(l, O, x))) : c || (O = Or(l, d), O != null && _.push(gu(l, O, x)))), l = l.return;
    }
    _.length !== 0 && n.push({ event: r, listeners: _ });
  }
  var Wv = /\r\n?/g, Ay = /\u0000|\uFFFD/g;
  function Yv(n) {
    return (typeof n == "string" ? n : "" + n).replace(Wv, `
`).replace(Ay, "");
  }
  function Nc(n, r, l) {
    if (r = Yv(r), Yv(n) !== r && l) throw Error(h(425));
  }
  function Ll() {
  }
  var vs = null, _o = null;
  function Mc(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Ac = typeof setTimeout == "function" ? setTimeout : void 0, Dd = typeof clearTimeout == "function" ? clearTimeout : void 0, Qv = typeof Promise == "function" ? Promise : void 0, Su = typeof queueMicrotask == "function" ? queueMicrotask : typeof Qv < "u" ? function(n) {
    return Qv.resolve(null).then(n).catch(Uc);
  } : Ac;
  function Uc(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function _u(n, r) {
    var l = r, u = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (u === 0) {
          n.removeChild(c), ri(r);
          return;
        }
        u--;
      } else l !== "$" && l !== "$?" && l !== "$!" || u++;
      l = c;
    } while (l);
    ri(r);
  }
  function bi(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function Gv(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Nl = Math.random().toString(36).slice(2), Ti = "__reactFiber$" + Nl, hs = "__reactProps$" + Nl, Zi = "__reactContainer$" + Nl, ms = "__reactEvents$" + Nl, Cu = "__reactListeners$" + Nl, Uy = "__reactHandles$" + Nl;
  function Co(n) {
    var r = n[Ti];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Zi] || l[Ti]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Gv(n); n !== null; ) {
          if (l = n[Ti]) return l;
          n = Gv(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function Je(n) {
    return n = n[Ti] || n[Zi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function li(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(h(33));
  }
  function gn(n) {
    return n[hs] || null;
  }
  var Nt = [], Ma = -1;
  function Aa(n) {
    return { current: n };
  }
  function sn(n) {
    0 > Ma || (n.current = Nt[Ma], Nt[Ma] = null, Ma--);
  }
  function Ke(n, r) {
    Ma++, Nt[Ma] = n.current, n.current = r;
  }
  var Tr = {}, En = Aa(Tr), Gn = Aa(!1), Zr = Tr;
  function Jr(n, r) {
    var l = n.type.contextTypes;
    if (!l) return Tr;
    var u = n.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r) return u.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function jn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Eu() {
    sn(Gn), sn(En);
  }
  function qv(n, r, l) {
    if (En.current !== Tr) throw Error(h(168));
    Ke(En, r), Ke(Gn, l);
  }
  function ys(n, r, l) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function") return l;
    u = u.getChildContext();
    for (var c in u) if (!(c in r)) throw Error(h(108, Le(n) || "Unknown", c));
    return me({}, l, u);
  }
  function tr(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Tr, Zr = En.current, Ke(En, n), Ke(Gn, Gn.current), !0;
  }
  function jc(n, r, l) {
    var u = n.stateNode;
    if (!u) throw Error(h(169));
    l ? (n = ys(n, r, Zr), u.__reactInternalMemoizedMergedChildContext = n, sn(Gn), sn(En), Ke(En, n)) : sn(Gn), Ke(Gn, l);
  }
  var xi = null, Ru = !1, Ji = !1;
  function zc(n) {
    xi === null ? xi = [n] : xi.push(n);
  }
  function Ml(n) {
    Ru = !0, zc(n);
  }
  function wi() {
    if (!Ji && xi !== null) {
      Ji = !0;
      var n = 0, r = Pt;
      try {
        var l = xi;
        for (Pt = 1; n < l.length; n++) {
          var u = l[n];
          do
            u = u(!0);
          while (u !== null);
        }
        xi = null, Ru = !1;
      } catch (c) {
        throw xi !== null && (xi = xi.slice(n + 1)), fn(ei, wi), c;
      } finally {
        Pt = r, Ji = !1;
      }
    }
    return null;
  }
  var Al = [], Ul = 0, jl = null, el = 0, zn = [], Ua = 0, ya = null, ki = 1, Di = "";
  function Eo(n, r) {
    Al[Ul++] = el, Al[Ul++] = jl, jl = n, el = r;
  }
  function Kv(n, r, l) {
    zn[Ua++] = ki, zn[Ua++] = Di, zn[Ua++] = ya, ya = n;
    var u = ki;
    n = Di;
    var c = 32 - Nr(u) - 1;
    u &= ~(1 << c), l += 1;
    var d = 32 - Nr(r) + c;
    if (30 < d) {
      var _ = c - c % 5;
      d = (u & (1 << _) - 1).toString(32), u >>= _, c -= _, ki = 1 << 32 - Nr(r) + c | l << c | u, Di = d + n;
    } else ki = 1 << d | l << c | u, Di = n;
  }
  function Fc(n) {
    n.return !== null && (Eo(n, 1), Kv(n, 1, 0));
  }
  function Pc(n) {
    for (; n === jl; ) jl = Al[--Ul], Al[Ul] = null, el = Al[--Ul], Al[Ul] = null;
    for (; n === ya; ) ya = zn[--Ua], zn[Ua] = null, Di = zn[--Ua], zn[Ua] = null, ki = zn[--Ua], zn[Ua] = null;
  }
  var ea = null, ta = null, vn = !1, ja = null;
  function Od(n, r) {
    var l = Ha(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Xv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, ea = n, ta = bi(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, ea = n, ta = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = ya !== null ? { id: ki, overflow: Di } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Ha(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, ea = n, ta = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ld(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Nd(n) {
    if (vn) {
      var r = ta;
      if (r) {
        var l = r;
        if (!Xv(n, r)) {
          if (Ld(n)) throw Error(h(418));
          r = bi(l.nextSibling);
          var u = ea;
          r && Xv(n, r) ? Od(u, l) : (n.flags = n.flags & -4097 | 2, vn = !1, ea = n);
        }
      } else {
        if (Ld(n)) throw Error(h(418));
        n.flags = n.flags & -4097 | 2, vn = !1, ea = n;
      }
    }
  }
  function qn(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    ea = n;
  }
  function Vc(n) {
    if (n !== ea) return !1;
    if (!vn) return qn(n), vn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Mc(n.type, n.memoizedProps)), r && (r = ta)) {
      if (Ld(n)) throw gs(), Error(h(418));
      for (; r; ) Od(n, r), r = bi(r.nextSibling);
    }
    if (qn(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(h(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                ta = bi(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ta = null;
      }
    } else ta = ea ? bi(n.stateNode.nextSibling) : null;
    return !0;
  }
  function gs() {
    for (var n = ta; n; ) n = bi(n.nextSibling);
  }
  function zl() {
    ta = ea = null, vn = !1;
  }
  function tl(n) {
    ja === null ? ja = [n] : ja.push(n);
  }
  var jy = Ee.ReactCurrentBatchConfig;
  function Ro(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(h(309));
          var u = l.stateNode;
        }
        if (!u) throw Error(h(147, n));
        var c = u, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(_) {
          var x = c.refs;
          _ === null ? delete x[d] : x[d] = _;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(h(284));
      if (!l._owner) throw Error(h(290, n));
    }
    return n;
  }
  function Hc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(h(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Zv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function bo(n) {
    function r(z, M) {
      if (n) {
        var H = z.deletions;
        H === null ? (z.deletions = [M], z.flags |= 16) : H.push(M);
      }
    }
    function l(z, M) {
      if (!n) return null;
      for (; M !== null; ) r(z, M), M = M.sibling;
      return null;
    }
    function u(z, M) {
      for (z = /* @__PURE__ */ new Map(); M !== null; ) M.key !== null ? z.set(M.key, M) : z.set(M.index, M), M = M.sibling;
      return z;
    }
    function c(z, M) {
      return z = Wl(z, M), z.index = 0, z.sibling = null, z;
    }
    function d(z, M, H) {
      return z.index = H, n ? (H = z.alternate, H !== null ? (H = H.index, H < M ? (z.flags |= 2, M) : H) : (z.flags |= 2, M)) : (z.flags |= 1048576, M);
    }
    function _(z) {
      return n && z.alternate === null && (z.flags |= 2), z;
    }
    function x(z, M, H, ce) {
      return M === null || M.tag !== 6 ? (M = sp(H, z.mode, ce), M.return = z, M) : (M = c(M, H), M.return = z, M);
    }
    function O(z, M, H, ce) {
      var Be = H.type;
      return Be === Pe ? se(z, M, H.props.children, ce, H.key) : M !== null && (M.elementType === Be || typeof Be == "object" && Be !== null && Be.$$typeof === we && Zv(Be) === M.type) ? (ce = c(M, H.props), ce.ref = Ro(z, M, H), ce.return = z, ce) : (ce = Gs(H.type, H.key, H.props, null, z.mode, ce), ce.ref = Ro(z, M, H), ce.return = z, ce);
    }
    function W(z, M, H, ce) {
      return M === null || M.tag !== 4 || M.stateNode.containerInfo !== H.containerInfo || M.stateNode.implementation !== H.implementation ? (M = Cf(H, z.mode, ce), M.return = z, M) : (M = c(M, H.children || []), M.return = z, M);
    }
    function se(z, M, H, ce, Be) {
      return M === null || M.tag !== 7 ? (M = ol(H, z.mode, ce, Be), M.return = z, M) : (M = c(M, H), M.return = z, M);
    }
    function de(z, M, H) {
      if (typeof M == "string" && M !== "" || typeof M == "number") return M = sp("" + M, z.mode, H), M.return = z, M;
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case ve:
            return H = Gs(M.type, M.key, M.props, null, z.mode, H), H.ref = Ro(z, null, M), H.return = z, H;
          case Qe:
            return M = Cf(M, z.mode, H), M.return = z, M;
          case we:
            var ce = M._init;
            return de(z, ce(M._payload), H);
        }
        if (Jn(M) || Oe(M)) return M = ol(M, z.mode, H, null), M.return = z, M;
        Hc(z, M);
      }
      return null;
    }
    function ue(z, M, H, ce) {
      var Be = M !== null ? M.key : null;
      if (typeof H == "string" && H !== "" || typeof H == "number") return Be !== null ? null : x(z, M, "" + H, ce);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case ve:
            return H.key === Be ? O(z, M, H, ce) : null;
          case Qe:
            return H.key === Be ? W(z, M, H, ce) : null;
          case we:
            return Be = H._init, ue(
              z,
              M,
              Be(H._payload),
              ce
            );
        }
        if (Jn(H) || Oe(H)) return Be !== null ? null : se(z, M, H, ce, null);
        Hc(z, H);
      }
      return null;
    }
    function Me(z, M, H, ce, Be) {
      if (typeof ce == "string" && ce !== "" || typeof ce == "number") return z = z.get(H) || null, x(M, z, "" + ce, Be);
      if (typeof ce == "object" && ce !== null) {
        switch (ce.$$typeof) {
          case ve:
            return z = z.get(ce.key === null ? H : ce.key) || null, O(M, z, ce, Be);
          case Qe:
            return z = z.get(ce.key === null ? H : ce.key) || null, W(M, z, ce, Be);
          case we:
            var at = ce._init;
            return Me(z, M, H, at(ce._payload), Be);
        }
        if (Jn(ce) || Oe(ce)) return z = z.get(H) || null, se(M, z, ce, Be, null);
        Hc(M, ce);
      }
      return null;
    }
    function Ie(z, M, H, ce) {
      for (var Be = null, at = null, lt = M, pt = M = 0, ar = null; lt !== null && pt < H.length; pt++) {
        lt.index > pt ? (ar = lt, lt = null) : ar = lt.sibling;
        var It = ue(z, lt, H[pt], ce);
        if (It === null) {
          lt === null && (lt = ar);
          break;
        }
        n && lt && It.alternate === null && r(z, lt), M = d(It, M, pt), at === null ? Be = It : at.sibling = It, at = It, lt = ar;
      }
      if (pt === H.length) return l(z, lt), vn && Eo(z, pt), Be;
      if (lt === null) {
        for (; pt < H.length; pt++) lt = de(z, H[pt], ce), lt !== null && (M = d(lt, M, pt), at === null ? Be = lt : at.sibling = lt, at = lt);
        return vn && Eo(z, pt), Be;
      }
      for (lt = u(z, lt); pt < H.length; pt++) ar = Me(lt, z, pt, H[pt], ce), ar !== null && (n && ar.alternate !== null && lt.delete(ar.key === null ? pt : ar.key), M = d(ar, M, pt), at === null ? Be = ar : at.sibling = ar, at = ar);
      return n && lt.forEach(function(Gl) {
        return r(z, Gl);
      }), vn && Eo(z, pt), Be;
    }
    function Ye(z, M, H, ce) {
      var Be = Oe(H);
      if (typeof Be != "function") throw Error(h(150));
      if (H = Be.call(H), H == null) throw Error(h(151));
      for (var at = Be = null, lt = M, pt = M = 0, ar = null, It = H.next(); lt !== null && !It.done; pt++, It = H.next()) {
        lt.index > pt ? (ar = lt, lt = null) : ar = lt.sibling;
        var Gl = ue(z, lt, It.value, ce);
        if (Gl === null) {
          lt === null && (lt = ar);
          break;
        }
        n && lt && Gl.alternate === null && r(z, lt), M = d(Gl, M, pt), at === null ? Be = Gl : at.sibling = Gl, at = Gl, lt = ar;
      }
      if (It.done) return l(
        z,
        lt
      ), vn && Eo(z, pt), Be;
      if (lt === null) {
        for (; !It.done; pt++, It = H.next()) It = de(z, It.value, ce), It !== null && (M = d(It, M, pt), at === null ? Be = It : at.sibling = It, at = It);
        return vn && Eo(z, pt), Be;
      }
      for (lt = u(z, lt); !It.done; pt++, It = H.next()) It = Me(lt, z, pt, It.value, ce), It !== null && (n && It.alternate !== null && lt.delete(It.key === null ? pt : It.key), M = d(It, M, pt), at === null ? Be = It : at.sibling = It, at = It);
      return n && lt.forEach(function(Ah) {
        return r(z, Ah);
      }), vn && Eo(z, pt), Be;
    }
    function Ln(z, M, H, ce) {
      if (typeof H == "object" && H !== null && H.type === Pe && H.key === null && (H = H.props.children), typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case ve:
            e: {
              for (var Be = H.key, at = M; at !== null; ) {
                if (at.key === Be) {
                  if (Be = H.type, Be === Pe) {
                    if (at.tag === 7) {
                      l(z, at.sibling), M = c(at, H.props.children), M.return = z, z = M;
                      break e;
                    }
                  } else if (at.elementType === Be || typeof Be == "object" && Be !== null && Be.$$typeof === we && Zv(Be) === at.type) {
                    l(z, at.sibling), M = c(at, H.props), M.ref = Ro(z, at, H), M.return = z, z = M;
                    break e;
                  }
                  l(z, at);
                  break;
                } else r(z, at);
                at = at.sibling;
              }
              H.type === Pe ? (M = ol(H.props.children, z.mode, ce, H.key), M.return = z, z = M) : (ce = Gs(H.type, H.key, H.props, null, z.mode, ce), ce.ref = Ro(z, M, H), ce.return = z, z = ce);
            }
            return _(z);
          case Qe:
            e: {
              for (at = H.key; M !== null; ) {
                if (M.key === at) if (M.tag === 4 && M.stateNode.containerInfo === H.containerInfo && M.stateNode.implementation === H.implementation) {
                  l(z, M.sibling), M = c(M, H.children || []), M.return = z, z = M;
                  break e;
                } else {
                  l(z, M);
                  break;
                }
                else r(z, M);
                M = M.sibling;
              }
              M = Cf(H, z.mode, ce), M.return = z, z = M;
            }
            return _(z);
          case we:
            return at = H._init, Ln(z, M, at(H._payload), ce);
        }
        if (Jn(H)) return Ie(z, M, H, ce);
        if (Oe(H)) return Ye(z, M, H, ce);
        Hc(z, H);
      }
      return typeof H == "string" && H !== "" || typeof H == "number" ? (H = "" + H, M !== null && M.tag === 6 ? (l(z, M.sibling), M = c(M, H), M.return = z, z = M) : (l(z, M), M = sp(H, z.mode, ce), M.return = z, z = M), _(z)) : l(z, M);
    }
    return Ln;
  }
  var wn = bo(!0), ke = bo(!1), ga = Aa(null), na = null, bu = null, Md = null;
  function Ad() {
    Md = bu = na = null;
  }
  function Ud(n) {
    var r = ga.current;
    sn(ga), n._currentValue = r;
  }
  function jd(n, r, l) {
    for (; n !== null; ) {
      var u = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function Sn(n, r) {
    na = n, Md = bu = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & r) !== 0 && (Pn = !0), n.firstContext = null);
  }
  function za(n) {
    var r = n._currentValue;
    if (Md !== n) if (n = { context: n, memoizedValue: r, next: null }, bu === null) {
      if (na === null) throw Error(h(308));
      bu = n, na.dependencies = { lanes: 0, firstContext: n };
    } else bu = bu.next = n;
    return r;
  }
  var To = null;
  function zd(n) {
    To === null ? To = [n] : To.push(n);
  }
  function Fd(n, r, l, u) {
    var c = r.interleaved;
    return c === null ? (l.next = l, zd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Sa(n, u);
  }
  function Sa(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var _a = !1;
  function Pd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Jv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function nl(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Fl(n, r, l) {
    var u = n.updateQueue;
    if (u === null) return null;
    if (u = u.shared, (Mt & 2) !== 0) {
      var c = u.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), u.pending = r, Sa(n, l);
    }
    return c = u.interleaved, c === null ? (r.next = r, zd(u)) : (r.next = c.next, c.next = r), u.interleaved = r, Sa(n, l);
  }
  function Ic(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var u = r.lanes;
      u &= n.pendingLanes, l |= u, r.lanes = l, Qi(n, l);
    }
  }
  function eh(n, r) {
    var l = n.updateQueue, u = n.alternate;
    if (u !== null && (u = u.updateQueue, l === u)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var _ = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = _ : d = d.next = _, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: u.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: u.shared, effects: u.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function Ss(n, r, l, u) {
    var c = n.updateQueue;
    _a = !1;
    var d = c.firstBaseUpdate, _ = c.lastBaseUpdate, x = c.shared.pending;
    if (x !== null) {
      c.shared.pending = null;
      var O = x, W = O.next;
      O.next = null, _ === null ? d = W : _.next = W, _ = O;
      var se = n.alternate;
      se !== null && (se = se.updateQueue, x = se.lastBaseUpdate, x !== _ && (x === null ? se.firstBaseUpdate = W : x.next = W, se.lastBaseUpdate = O));
    }
    if (d !== null) {
      var de = c.baseState;
      _ = 0, se = W = O = null, x = d;
      do {
        var ue = x.lane, Me = x.eventTime;
        if ((u & ue) === ue) {
          se !== null && (se = se.next = {
            eventTime: Me,
            lane: 0,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null
          });
          e: {
            var Ie = n, Ye = x;
            switch (ue = r, Me = l, Ye.tag) {
              case 1:
                if (Ie = Ye.payload, typeof Ie == "function") {
                  de = Ie.call(Me, de, ue);
                  break e;
                }
                de = Ie;
                break e;
              case 3:
                Ie.flags = Ie.flags & -65537 | 128;
              case 0:
                if (Ie = Ye.payload, ue = typeof Ie == "function" ? Ie.call(Me, de, ue) : Ie, ue == null) break e;
                de = me({}, de, ue);
                break e;
              case 2:
                _a = !0;
            }
          }
          x.callback !== null && x.lane !== 0 && (n.flags |= 64, ue = c.effects, ue === null ? c.effects = [x] : ue.push(x));
        } else Me = { eventTime: Me, lane: ue, tag: x.tag, payload: x.payload, callback: x.callback, next: null }, se === null ? (W = se = Me, O = de) : se = se.next = Me, _ |= ue;
        if (x = x.next, x === null) {
          if (x = c.shared.pending, x === null) break;
          ue = x, x = ue.next, ue.next = null, c.lastBaseUpdate = ue, c.shared.pending = null;
        }
      } while (!0);
      if (se === null && (O = de), c.baseState = O, c.firstBaseUpdate = W, c.lastBaseUpdate = se, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          _ |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Ai |= _, n.lanes = _, n.memoizedState = de;
    }
  }
  function Vd(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var u = n[r], c = u.callback;
      if (c !== null) {
        if (u.callback = null, u = l, typeof c != "function") throw Error(h(191, c));
        c.call(u);
      }
    }
  }
  var _s = {}, Oi = Aa(_s), Cs = Aa(_s), Es = Aa(_s);
  function xo(n) {
    if (n === _s) throw Error(h(174));
    return n;
  }
  function Hd(n, r) {
    switch (Ke(Es, r), Ke(Cs, n), Ke(Oi, _s), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : va(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = va(r, n);
    }
    sn(Oi), Ke(Oi, r);
  }
  function wo() {
    sn(Oi), sn(Cs), sn(Es);
  }
  function th(n) {
    xo(Es.current);
    var r = xo(Oi.current), l = va(r, n.type);
    r !== l && (Ke(Cs, n), Ke(Oi, l));
  }
  function Bc(n) {
    Cs.current === n && (sn(Oi), sn(Cs));
  }
  var _n = Aa(0);
  function $c(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if ((r.flags & 128) !== 0) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Rs = [];
  function et() {
    for (var n = 0; n < Rs.length; n++) Rs[n]._workInProgressVersionPrimary = null;
    Rs.length = 0;
  }
  var wt = Ee.ReactCurrentDispatcher, Vt = Ee.ReactCurrentBatchConfig, en = 0, Ht = null, Fn = null, nr = null, Wc = !1, bs = !1, ko = 0, le = 0;
  function Ft() {
    throw Error(h(321));
  }
  function ct(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!ii(n[l], r[l])) return !1;
    return !0;
  }
  function Pl(n, r, l, u, c, d) {
    if (en = d, Ht = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, wt.current = n === null || n.memoizedState === null ? of : Os, n = l(u, c), bs) {
      d = 0;
      do {
        if (bs = !1, ko = 0, 25 <= d) throw Error(h(301));
        d += 1, nr = Fn = null, r.updateQueue = null, wt.current = uf, n = l(u, c);
      } while (bs);
    }
    if (wt.current = Mo, r = Fn !== null && Fn.next !== null, en = 0, nr = Fn = Ht = null, Wc = !1, r) throw Error(h(300));
    return n;
  }
  function oi() {
    var n = ko !== 0;
    return ko = 0, n;
  }
  function xr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return nr === null ? Ht.memoizedState = nr = n : nr = nr.next = n, nr;
  }
  function kn() {
    if (Fn === null) {
      var n = Ht.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Fn.next;
    var r = nr === null ? Ht.memoizedState : nr.next;
    if (r !== null) nr = r, Fn = n;
    else {
      if (n === null) throw Error(h(310));
      Fn = n, n = { memoizedState: Fn.memoizedState, baseState: Fn.baseState, baseQueue: Fn.baseQueue, queue: Fn.queue, next: null }, nr === null ? Ht.memoizedState = nr = n : nr = nr.next = n;
    }
    return nr;
  }
  function rl(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Vl(n) {
    var r = kn(), l = r.queue;
    if (l === null) throw Error(h(311));
    l.lastRenderedReducer = n;
    var u = Fn, c = u.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var _ = c.next;
        c.next = d.next, d.next = _;
      }
      u.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, u = u.baseState;
      var x = _ = null, O = null, W = d;
      do {
        var se = W.lane;
        if ((en & se) === se) O !== null && (O = O.next = { lane: 0, action: W.action, hasEagerState: W.hasEagerState, eagerState: W.eagerState, next: null }), u = W.hasEagerState ? W.eagerState : n(u, W.action);
        else {
          var de = {
            lane: se,
            action: W.action,
            hasEagerState: W.hasEagerState,
            eagerState: W.eagerState,
            next: null
          };
          O === null ? (x = O = de, _ = u) : O = O.next = de, Ht.lanes |= se, Ai |= se;
        }
        W = W.next;
      } while (W !== null && W !== d);
      O === null ? _ = u : O.next = x, ii(u, r.memoizedState) || (Pn = !0), r.memoizedState = u, r.baseState = _, r.baseQueue = O, l.lastRenderedState = u;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, Ht.lanes |= d, Ai |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Do(n) {
    var r = kn(), l = r.queue;
    if (l === null) throw Error(h(311));
    l.lastRenderedReducer = n;
    var u = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var _ = c = c.next;
      do
        d = n(d, _.action), _ = _.next;
      while (_ !== c);
      ii(d, r.memoizedState) || (Pn = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, u];
  }
  function Yc() {
  }
  function Qc(n, r) {
    var l = Ht, u = kn(), c = r(), d = !ii(u.memoizedState, c);
    if (d && (u.memoizedState = c, Pn = !0), u = u.queue, Ts(Kc.bind(null, l, u, n), [n]), u.getSnapshot !== r || d || nr !== null && nr.memoizedState.tag & 1) {
      if (l.flags |= 2048, Oo(9, qc.bind(null, l, u, c, r), void 0, null), Kn === null) throw Error(h(349));
      (en & 30) !== 0 || Gc(l, r, c);
    }
    return c;
  }
  function Gc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Ht.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ht.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function qc(n, r, l, u) {
    r.value = l, r.getSnapshot = u, Xc(r) && Zc(n);
  }
  function Kc(n, r, l) {
    return l(function() {
      Xc(r) && Zc(n);
    });
  }
  function Xc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ii(n, l);
    } catch {
      return !0;
    }
  }
  function Zc(n) {
    var r = Sa(n, 1);
    r !== null && Fr(r, n, 1, -1);
  }
  function Jc(n) {
    var r = xr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: rl, lastRenderedState: n }, r.queue = n, n = n.dispatch = No.bind(null, Ht, n), [r.memoizedState, n];
  }
  function Oo(n, r, l, u) {
    return n = { tag: n, create: r, destroy: l, deps: u, next: null }, r = Ht.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ht.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (u = l.next, l.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function ef() {
    return kn().memoizedState;
  }
  function Tu(n, r, l, u) {
    var c = xr();
    Ht.flags |= n, c.memoizedState = Oo(1 | r, l, void 0, u === void 0 ? null : u);
  }
  function xu(n, r, l, u) {
    var c = kn();
    u = u === void 0 ? null : u;
    var d = void 0;
    if (Fn !== null) {
      var _ = Fn.memoizedState;
      if (d = _.destroy, u !== null && ct(u, _.deps)) {
        c.memoizedState = Oo(r, l, d, u);
        return;
      }
    }
    Ht.flags |= n, c.memoizedState = Oo(1 | r, l, d, u);
  }
  function tf(n, r) {
    return Tu(8390656, 8, n, r);
  }
  function Ts(n, r) {
    return xu(2048, 8, n, r);
  }
  function nf(n, r) {
    return xu(4, 2, n, r);
  }
  function xs(n, r) {
    return xu(4, 4, n, r);
  }
  function Lo(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function rf(n, r, l) {
    return l = l != null ? l.concat([n]) : null, xu(4, 4, Lo.bind(null, r, n), l);
  }
  function ws() {
  }
  function af(n, r) {
    var l = kn();
    r = r === void 0 ? null : r;
    var u = l.memoizedState;
    return u !== null && r !== null && ct(r, u[1]) ? u[0] : (l.memoizedState = [n, r], n);
  }
  function lf(n, r) {
    var l = kn();
    r = r === void 0 ? null : r;
    var u = l.memoizedState;
    return u !== null && r !== null && ct(r, u[1]) ? u[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Id(n, r, l) {
    return (en & 21) === 0 ? (n.baseState && (n.baseState = !1, Pn = !0), n.memoizedState = l) : (ii(l, r) || (l = iu(), Ht.lanes |= l, Ai |= l, n.baseState = !0), r);
  }
  function ks(n, r) {
    var l = Pt;
    Pt = l !== 0 && 4 > l ? l : 4, n(!0);
    var u = Vt.transition;
    Vt.transition = {};
    try {
      n(!1), r();
    } finally {
      Pt = l, Vt.transition = u;
    }
  }
  function Bd() {
    return kn().memoizedState;
  }
  function Ds(n, r, l) {
    var u = Ui(n);
    if (l = { lane: u, action: l, hasEagerState: !1, eagerState: null, next: null }, ra(n)) nh(r, l);
    else if (l = Fd(n, r, l, u), l !== null) {
      var c = In();
      Fr(l, n, u, c), rn(l, r, u);
    }
  }
  function No(n, r, l) {
    var u = Ui(n), c = { lane: u, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (ra(n)) nh(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var _ = r.lastRenderedState, x = d(_, l);
        if (c.hasEagerState = !0, c.eagerState = x, ii(x, _)) {
          var O = r.interleaved;
          O === null ? (c.next = c, zd(r)) : (c.next = O.next, O.next = c), r.interleaved = c;
          return;
        }
      } catch {
      }
      l = Fd(n, r, c, u), l !== null && (c = In(), Fr(l, n, u, c), rn(l, r, u));
    }
  }
  function ra(n) {
    var r = n.alternate;
    return n === Ht || r !== null && r === Ht;
  }
  function nh(n, r) {
    bs = Wc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function rn(n, r, l) {
    if ((l & 4194240) !== 0) {
      var u = r.lanes;
      u &= n.pendingLanes, l |= u, r.lanes = l, Qi(n, l);
    }
  }
  var Mo = { readContext: za, useCallback: Ft, useContext: Ft, useEffect: Ft, useImperativeHandle: Ft, useInsertionEffect: Ft, useLayoutEffect: Ft, useMemo: Ft, useReducer: Ft, useRef: Ft, useState: Ft, useDebugValue: Ft, useDeferredValue: Ft, useTransition: Ft, useMutableSource: Ft, useSyncExternalStore: Ft, useId: Ft, unstable_isNewReconciler: !1 }, of = { readContext: za, useCallback: function(n, r) {
    return xr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: za, useEffect: tf, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Tu(
      4194308,
      4,
      Lo.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return Tu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Tu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = xr();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var u = xr();
    return r = l !== void 0 ? l(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = Ds.bind(null, Ht, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = xr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Jc, useDebugValue: ws, useDeferredValue: function(n) {
    return xr().memoizedState = n;
  }, useTransition: function() {
    var n = Jc(!1), r = n[0];
    return n = ks.bind(null, n[1]), xr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var u = Ht, c = xr();
    if (vn) {
      if (l === void 0) throw Error(h(407));
      l = l();
    } else {
      if (l = r(), Kn === null) throw Error(h(349));
      (en & 30) !== 0 || Gc(u, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, tf(Kc.bind(
      null,
      u,
      d,
      n
    ), [n]), u.flags |= 2048, Oo(9, qc.bind(null, u, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = xr(), r = Kn.identifierPrefix;
    if (vn) {
      var l = Di, u = ki;
      l = (u & ~(1 << 32 - Nr(u) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = ko++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = le++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Os = {
    readContext: za,
    useCallback: af,
    useContext: za,
    useEffect: Ts,
    useImperativeHandle: rf,
    useInsertionEffect: nf,
    useLayoutEffect: xs,
    useMemo: lf,
    useReducer: Vl,
    useRef: ef,
    useState: function() {
      return Vl(rl);
    },
    useDebugValue: ws,
    useDeferredValue: function(n) {
      var r = kn();
      return Id(r, Fn.memoizedState, n);
    },
    useTransition: function() {
      var n = Vl(rl)[0], r = kn().memoizedState;
      return [n, r];
    },
    useMutableSource: Yc,
    useSyncExternalStore: Qc,
    useId: Bd,
    unstable_isNewReconciler: !1
  }, uf = { readContext: za, useCallback: af, useContext: za, useEffect: Ts, useImperativeHandle: rf, useInsertionEffect: nf, useLayoutEffect: xs, useMemo: lf, useReducer: Do, useRef: ef, useState: function() {
    return Do(rl);
  }, useDebugValue: ws, useDeferredValue: function(n) {
    var r = kn();
    return Fn === null ? r.memoizedState = n : Id(r, Fn.memoizedState, n);
  }, useTransition: function() {
    var n = Do(rl)[0], r = kn().memoizedState;
    return [n, r];
  }, useMutableSource: Yc, useSyncExternalStore: Qc, useId: Bd, unstable_isNewReconciler: !1 };
  function ui(n, r) {
    if (n && n.defaultProps) {
      r = me({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function $d(n, r, l, u) {
    r = n.memoizedState, l = l(u, r), l = l == null ? r : me({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var sf = { isMounted: function(n) {
    return (n = n._reactInternals) ? St(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var u = In(), c = Ui(n), d = nl(u, c);
    d.payload = r, l != null && (d.callback = l), r = Fl(n, d, c), r !== null && (Fr(r, n, c, u), Ic(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var u = In(), c = Ui(n), d = nl(u, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Fl(n, d, c), r !== null && (Fr(r, n, c, u), Ic(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = In(), u = Ui(n), c = nl(l, u);
    c.tag = 2, r != null && (c.callback = r), r = Fl(n, c, u), r !== null && (Fr(r, n, u, l), Ic(r, n, u));
  } };
  function rh(n, r, l, u, c, d, _) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, d, _) : r.prototype && r.prototype.isPureReactComponent ? !ss(l, u) || !ss(c, d) : !0;
  }
  function cf(n, r, l) {
    var u = !1, c = Tr, d = r.contextType;
    return typeof d == "object" && d !== null ? d = za(d) : (c = jn(r) ? Zr : En.current, u = r.contextTypes, d = (u = u != null) ? Jr(n, c) : Tr), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = sf, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function ah(n, r, l, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, u), r.state !== n && sf.enqueueReplaceState(r, r.state, null);
  }
  function Ls(n, r, l, u) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Pd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = za(d) : (d = jn(r) ? Zr : En.current, c.context = Jr(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && ($d(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && sf.enqueueReplaceState(c, c.state, null), Ss(n, l, c, u), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Ao(n, r) {
    try {
      var l = "", u = r;
      do
        l += ht(u), u = u.return;
      while (u);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Wd(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Yd(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var ff = typeof WeakMap == "function" ? WeakMap : Map;
  function ih(n, r, l) {
    l = nl(-1, l), l.tag = 3, l.payload = { element: null };
    var u = r.value;
    return l.callback = function() {
      Nu || (Nu = !0, zo = u), Yd(n, r);
    }, l;
  }
  function Qd(n, r, l) {
    l = nl(-1, l), l.tag = 3;
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = r.value;
      l.payload = function() {
        return u(c);
      }, l.callback = function() {
        Yd(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Yd(n, r), typeof u != "function" && (Bl === null ? Bl = /* @__PURE__ */ new Set([this]) : Bl.add(this));
      var _ = r.stack;
      this.componentDidCatch(r.value, { componentStack: _ !== null ? _ : "" });
    }), l;
  }
  function Gd(n, r, l) {
    var u = n.pingCache;
    if (u === null) {
      u = n.pingCache = new ff();
      var c = /* @__PURE__ */ new Set();
      u.set(r, c);
    } else c = u.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), u.set(r, c));
    c.has(l) || (c.add(l), n = By.bind(null, n, r, l), r.then(n, n));
  }
  function lh(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Hl(n, r, l, u, c) {
    return (n.mode & 1) === 0 ? (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = nl(-1, 1), r.tag = 2, Fl(l, r, 1))), l.lanes |= 1), n) : (n.flags |= 65536, n.lanes = c, n);
  }
  var Ns = Ee.ReactCurrentOwner, Pn = !1;
  function fr(n, r, l, u) {
    r.child = n === null ? ke(r, null, l, u) : wn(r, n.child, l, u);
  }
  function aa(n, r, l, u, c) {
    l = l.render;
    var d = r.ref;
    return Sn(r, c), u = Pl(n, r, l, u, d, c), l = oi(), n !== null && !Pn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Pa(n, r, c)) : (vn && l && Fc(r), r.flags |= 1, fr(n, r, u, c), r.child);
  }
  function Uo(n, r, l, u, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !up(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Ct(n, r, d, u, c)) : (n = Gs(l.type, null, u, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, (n.lanes & c) === 0) {
      var _ = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : ss, l(_, u) && n.ref === r.ref) return Pa(n, r, c);
    }
    return r.flags |= 1, n = Wl(d, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Ct(n, r, l, u, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (ss(d, u) && n.ref === r.ref) if (Pn = !1, r.pendingProps = u = d, (n.lanes & c) !== 0) (n.flags & 131072) !== 0 && (Pn = !0);
      else return r.lanes = n.lanes, Pa(n, r, c);
    }
    return oh(n, r, l, u, c);
  }
  function Ms(n, r, l) {
    var u = r.pendingProps, c = u.children, d = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden") if ((r.mode & 1) === 0) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ke(Du, Ca), Ca |= l;
    else {
      if ((l & 1073741824) === 0) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Ke(Du, Ca), Ca |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = d !== null ? d.baseLanes : l, Ke(Du, Ca), Ca |= u;
    }
    else d !== null ? (u = d.baseLanes | l, r.memoizedState = null) : u = l, Ke(Du, Ca), Ca |= u;
    return fr(n, r, c, l), r.child;
  }
  function qd(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function oh(n, r, l, u, c) {
    var d = jn(l) ? Zr : En.current;
    return d = Jr(r, d), Sn(r, c), l = Pl(n, r, l, u, d, c), u = oi(), n !== null && !Pn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Pa(n, r, c)) : (vn && u && Fc(r), r.flags |= 1, fr(n, r, l, c), r.child);
  }
  function uh(n, r, l, u, c) {
    if (jn(l)) {
      var d = !0;
      tr(r);
    } else d = !1;
    if (Sn(r, c), r.stateNode === null) Fa(n, r), cf(r, l, u), Ls(r, l, u, c), u = !0;
    else if (n === null) {
      var _ = r.stateNode, x = r.memoizedProps;
      _.props = x;
      var O = _.context, W = l.contextType;
      typeof W == "object" && W !== null ? W = za(W) : (W = jn(l) ? Zr : En.current, W = Jr(r, W));
      var se = l.getDerivedStateFromProps, de = typeof se == "function" || typeof _.getSnapshotBeforeUpdate == "function";
      de || typeof _.UNSAFE_componentWillReceiveProps != "function" && typeof _.componentWillReceiveProps != "function" || (x !== u || O !== W) && ah(r, _, u, W), _a = !1;
      var ue = r.memoizedState;
      _.state = ue, Ss(r, u, _, c), O = r.memoizedState, x !== u || ue !== O || Gn.current || _a ? (typeof se == "function" && ($d(r, l, se, u), O = r.memoizedState), (x = _a || rh(r, l, x, u, ue, O, W)) ? (de || typeof _.UNSAFE_componentWillMount != "function" && typeof _.componentWillMount != "function" || (typeof _.componentWillMount == "function" && _.componentWillMount(), typeof _.UNSAFE_componentWillMount == "function" && _.UNSAFE_componentWillMount()), typeof _.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof _.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = O), _.props = u, _.state = O, _.context = W, u = x) : (typeof _.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      _ = r.stateNode, Jv(n, r), x = r.memoizedProps, W = r.type === r.elementType ? x : ui(r.type, x), _.props = W, de = r.pendingProps, ue = _.context, O = l.contextType, typeof O == "object" && O !== null ? O = za(O) : (O = jn(l) ? Zr : En.current, O = Jr(r, O));
      var Me = l.getDerivedStateFromProps;
      (se = typeof Me == "function" || typeof _.getSnapshotBeforeUpdate == "function") || typeof _.UNSAFE_componentWillReceiveProps != "function" && typeof _.componentWillReceiveProps != "function" || (x !== de || ue !== O) && ah(r, _, u, O), _a = !1, ue = r.memoizedState, _.state = ue, Ss(r, u, _, c);
      var Ie = r.memoizedState;
      x !== de || ue !== Ie || Gn.current || _a ? (typeof Me == "function" && ($d(r, l, Me, u), Ie = r.memoizedState), (W = _a || rh(r, l, W, u, ue, Ie, O) || !1) ? (se || typeof _.UNSAFE_componentWillUpdate != "function" && typeof _.componentWillUpdate != "function" || (typeof _.componentWillUpdate == "function" && _.componentWillUpdate(u, Ie, O), typeof _.UNSAFE_componentWillUpdate == "function" && _.UNSAFE_componentWillUpdate(u, Ie, O)), typeof _.componentDidUpdate == "function" && (r.flags |= 4), typeof _.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof _.componentDidUpdate != "function" || x === n.memoizedProps && ue === n.memoizedState || (r.flags |= 4), typeof _.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && ue === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = Ie), _.props = u, _.state = Ie, _.context = O, u = W) : (typeof _.componentDidUpdate != "function" || x === n.memoizedProps && ue === n.memoizedState || (r.flags |= 4), typeof _.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && ue === n.memoizedState || (r.flags |= 1024), u = !1);
    }
    return As(n, r, l, u, d, c);
  }
  function As(n, r, l, u, c, d) {
    qd(n, r);
    var _ = (r.flags & 128) !== 0;
    if (!u && !_) return c && jc(r, l, !1), Pa(n, r, d);
    u = r.stateNode, Ns.current = r;
    var x = _ && typeof l.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && _ ? (r.child = wn(r, n.child, null, d), r.child = wn(r, null, x, d)) : fr(n, r, x, d), r.memoizedState = u.state, c && jc(r, l, !0), r.child;
  }
  function wu(n) {
    var r = n.stateNode;
    r.pendingContext ? qv(n, r.pendingContext, r.pendingContext !== r.context) : r.context && qv(n, r.context, !1), Hd(n, r.containerInfo);
  }
  function sh(n, r, l, u, c) {
    return zl(), tl(c), r.flags |= 256, fr(n, r, l, u), r.child;
  }
  var df = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Kd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function pf(n, r, l) {
    var u = r.pendingProps, c = _n.current, d = !1, _ = (r.flags & 128) !== 0, x;
    if ((x = _) || (x = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), x ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Ke(_n, c & 1), n === null)
      return Nd(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824, null) : (_ = u.children, n = u.fallback, d ? (u = r.mode, d = r.child, _ = { mode: "hidden", children: _ }, (u & 1) === 0 && d !== null ? (d.childLanes = 0, d.pendingProps = _) : d = Yl(_, u, 0, null), n = ol(n, u, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Kd(l), r.memoizedState = df, n) : Xd(r, _));
    if (c = n.memoizedState, c !== null && (x = c.dehydrated, x !== null)) return ch(n, r, _, u, x, c, l);
    if (d) {
      d = u.fallback, _ = r.mode, c = n.child, x = c.sibling;
      var O = { mode: "hidden", children: u.children };
      return (_ & 1) === 0 && r.child !== c ? (u = r.child, u.childLanes = 0, u.pendingProps = O, r.deletions = null) : (u = Wl(c, O), u.subtreeFlags = c.subtreeFlags & 14680064), x !== null ? d = Wl(x, d) : (d = ol(d, _, l, null), d.flags |= 2), d.return = r, u.return = r, u.sibling = d, r.child = u, u = d, d = r.child, _ = n.child.memoizedState, _ = _ === null ? Kd(l) : { baseLanes: _.baseLanes | l, cachePool: null, transitions: _.transitions }, d.memoizedState = _, d.childLanes = n.childLanes & ~l, r.memoizedState = df, u;
    }
    return d = n.child, n = d.sibling, u = Wl(d, { mode: "visible", children: u.children }), (r.mode & 1) === 0 && (u.lanes = l), u.return = r, u.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function Xd(n, r) {
    return r = Yl({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Us(n, r, l, u) {
    return u !== null && tl(u), wn(r, n.child, null, l), n = Xd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function ch(n, r, l, u, c, d, _) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, u = Wd(Error(h(422))), Us(n, r, _, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = u.fallback, c = r.mode, u = Yl({ mode: "visible", children: u.children }, c, 0, null), d = ol(d, c, _, null), d.flags |= 2, u.return = r, d.return = r, u.sibling = d, r.child = u, (r.mode & 1) !== 0 && wn(r, n.child, null, _), r.child.memoizedState = Kd(_), r.memoizedState = df, d);
    if ((r.mode & 1) === 0) return Us(n, r, _, null);
    if (c.data === "$!") {
      if (u = c.nextSibling && c.nextSibling.dataset, u) var x = u.dgst;
      return u = x, d = Error(h(419)), u = Wd(d, u, void 0), Us(n, r, _, u);
    }
    if (x = (_ & n.childLanes) !== 0, Pn || x) {
      if (u = Kn, u !== null) {
        switch (_ & -_) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = (c & (u.suspendedLanes | _)) !== 0 ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Sa(n, c), Fr(u, n, c, -1));
      }
      return op(), u = Wd(Error(h(421))), Us(n, r, _, u);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = $y.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, ta = bi(c.nextSibling), ea = r, vn = !0, ja = null, n !== null && (zn[Ua++] = ki, zn[Ua++] = Di, zn[Ua++] = ya, ki = n.id, Di = n.overflow, ya = r), r = Xd(r, u.children), r.flags |= 4096, r);
  }
  function Zd(n, r, l) {
    n.lanes |= r;
    var u = n.alternate;
    u !== null && (u.lanes |= r), jd(n.return, r, l);
  }
  function Ur(n, r, l, u, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = u, d.tail = l, d.tailMode = c);
  }
  function Li(n, r, l) {
    var u = r.pendingProps, c = u.revealOrder, d = u.tail;
    if (fr(n, r, u.children, l), u = _n.current, (u & 2) !== 0) u = u & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && (n.flags & 128) !== 0) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Zd(n, l, r);
        else if (n.tag === 19) Zd(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      u &= 1;
    }
    if (Ke(_n, u), (r.mode & 1) === 0) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && $c(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Ur(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && $c(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        Ur(r, !0, l, null, d);
        break;
      case "together":
        Ur(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Fa(n, r) {
    (r.mode & 1) === 0 && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Pa(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Ai |= r.lanes, (l & r.childLanes) === 0) return null;
    if (n !== null && r.child !== n.child) throw Error(h(153));
    if (r.child !== null) {
      for (n = r.child, l = Wl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Wl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function js(n, r, l) {
    switch (r.tag) {
      case 3:
        wu(r), zl();
        break;
      case 5:
        th(r);
        break;
      case 1:
        jn(r.type) && tr(r);
        break;
      case 4:
        Hd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var u = r.type._context, c = r.memoizedProps.value;
        Ke(ga, u._currentValue), u._currentValue = c;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (Ke(_n, _n.current & 1), r.flags |= 128, null) : (l & r.child.childLanes) !== 0 ? pf(n, r, l) : (Ke(_n, _n.current & 1), n = Pa(n, r, l), n !== null ? n.sibling : null);
        Ke(_n, _n.current & 1);
        break;
      case 19:
        if (u = (l & r.childLanes) !== 0, (n.flags & 128) !== 0) {
          if (u) return Li(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Ke(_n, _n.current), u) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Ms(n, r, l);
    }
    return Pa(n, r, l);
  }
  var Va, Vn, fh, dh;
  Va = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, Vn = function() {
  }, fh = function(n, r, l, u) {
    var c = n.memoizedProps;
    if (c !== u) {
      n = r.stateNode, xo(Oi.current);
      var d = null;
      switch (l) {
        case "input":
          c = lr(n, c), u = lr(n, u), d = [];
          break;
        case "select":
          c = me({}, c, { value: void 0 }), u = me({}, u, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Yn(n, c), u = Yn(n, u), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof u.onClick == "function" && (n.onclick = Ll);
      }
      cn(l, u);
      var _;
      l = null;
      for (W in c) if (!u.hasOwnProperty(W) && c.hasOwnProperty(W) && c[W] != null) if (W === "style") {
        var x = c[W];
        for (_ in x) x.hasOwnProperty(_) && (l || (l = {}), l[_] = "");
      } else W !== "dangerouslySetInnerHTML" && W !== "children" && W !== "suppressContentEditableWarning" && W !== "suppressHydrationWarning" && W !== "autoFocus" && (L.hasOwnProperty(W) ? d || (d = []) : (d = d || []).push(W, null));
      for (W in u) {
        var O = u[W];
        if (x = c?.[W], u.hasOwnProperty(W) && O !== x && (O != null || x != null)) if (W === "style") if (x) {
          for (_ in x) !x.hasOwnProperty(_) || O && O.hasOwnProperty(_) || (l || (l = {}), l[_] = "");
          for (_ in O) O.hasOwnProperty(_) && x[_] !== O[_] && (l || (l = {}), l[_] = O[_]);
        } else l || (d || (d = []), d.push(
          W,
          l
        )), l = O;
        else W === "dangerouslySetInnerHTML" ? (O = O ? O.__html : void 0, x = x ? x.__html : void 0, O != null && x !== O && (d = d || []).push(W, O)) : W === "children" ? typeof O != "string" && typeof O != "number" || (d = d || []).push(W, "" + O) : W !== "suppressContentEditableWarning" && W !== "suppressHydrationWarning" && (L.hasOwnProperty(W) ? (O != null && W === "onScroll" && Yt("scroll", n), d || x === O || (d = [])) : (d = d || []).push(W, O));
      }
      l && (d = d || []).push("style", l);
      var W = d;
      (r.updateQueue = W) && (r.flags |= 4);
    }
  }, dh = function(n, r, l, u) {
    l !== u && (r.flags |= 4);
  };
  function zs(n, r) {
    if (!vn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var u = null; l !== null; ) l.alternate !== null && (u = l), l = l.sibling;
        u === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : u.sibling = null;
    }
  }
  function rr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, u = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, u |= c.subtreeFlags & 14680064, u |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, u |= c.subtreeFlags, u |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= u, n.childLanes = l, r;
  }
  function ph(n, r, l) {
    var u = r.pendingProps;
    switch (Pc(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return rr(r), null;
      case 1:
        return jn(r.type) && Eu(), rr(r), null;
      case 3:
        return u = r.stateNode, wo(), sn(Gn), sn(En), et(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (Vc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, ja !== null && (Fo(ja), ja = null))), Vn(n, r), rr(r), null;
      case 5:
        Bc(r);
        var c = xo(Es.current);
        if (l = r.type, n !== null && r.stateNode != null) fh(n, r, l, u, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null) throw Error(h(166));
            return rr(r), null;
          }
          if (n = xo(Oi.current), Vc(r)) {
            u = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (u[Ti] = r, u[hs] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Yt("cancel", u), Yt("close", u);
                break;
              case "iframe":
              case "object":
              case "embed":
                Yt("load", u);
                break;
              case "video":
              case "audio":
                for (c = 0; c < ds.length; c++) Yt(ds[c], u);
                break;
              case "source":
                Yt("error", u);
                break;
              case "img":
              case "image":
              case "link":
                Yt(
                  "error",
                  u
                ), Yt("load", u);
                break;
              case "details":
                Yt("toggle", u);
                break;
              case "input":
                $n(u, d), Yt("invalid", u);
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!d.multiple }, Yt("invalid", u);
                break;
              case "textarea":
                Er(u, d), Yt("invalid", u);
            }
            cn(l, d), c = null;
            for (var _ in d) if (d.hasOwnProperty(_)) {
              var x = d[_];
              _ === "children" ? typeof x == "string" ? u.textContent !== x && (d.suppressHydrationWarning !== !0 && Nc(u.textContent, x, n), c = ["children", x]) : typeof x == "number" && u.textContent !== "" + x && (d.suppressHydrationWarning !== !0 && Nc(
                u.textContent,
                x,
                n
              ), c = ["children", "" + x]) : L.hasOwnProperty(_) && x != null && _ === "onScroll" && Yt("scroll", u);
            }
            switch (l) {
              case "input":
                Mn(u), vi(u, d, !0);
                break;
              case "textarea":
                Mn(u), An(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (u.onclick = Ll);
            }
            u = c, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            _ = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Rr(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = _.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = _.createElement(l, { is: u.is }) : (n = _.createElement(l), l === "select" && (_ = n, u.multiple ? _.multiple = !0 : u.size && (_.size = u.size))) : n = _.createElementNS(n, l), n[Ti] = r, n[hs] = u, Va(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (_ = er(l, u), l) {
                case "dialog":
                  Yt("cancel", n), Yt("close", n), c = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Yt("load", n), c = u;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < ds.length; c++) Yt(ds[c], n);
                  c = u;
                  break;
                case "source":
                  Yt("error", n), c = u;
                  break;
                case "img":
                case "image":
                case "link":
                  Yt(
                    "error",
                    n
                  ), Yt("load", n), c = u;
                  break;
                case "details":
                  Yt("toggle", n), c = u;
                  break;
                case "input":
                  $n(n, u), c = lr(n, u), Yt("invalid", n);
                  break;
                case "option":
                  c = u;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!u.multiple }, c = me({}, u, { value: void 0 }), Yt("invalid", n);
                  break;
                case "textarea":
                  Er(n, u), c = Yn(n, u), Yt("invalid", n);
                  break;
                default:
                  c = u;
              }
              cn(l, c), x = c;
              for (d in x) if (x.hasOwnProperty(d)) {
                var O = x[d];
                d === "style" ? an(n, O) : d === "dangerouslySetInnerHTML" ? (O = O ? O.__html : void 0, O != null && hi(n, O)) : d === "children" ? typeof O == "string" ? (l !== "textarea" || O !== "") && Ce(n, O) : typeof O == "number" && Ce(n, "" + O) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (L.hasOwnProperty(d) ? O != null && d === "onScroll" && Yt("scroll", n) : O != null && ge(n, d, O, _));
              }
              switch (l) {
                case "input":
                  Mn(n), vi(n, u, !1);
                  break;
                case "textarea":
                  Mn(n), An(n);
                  break;
                case "option":
                  u.value != null && n.setAttribute("value", "" + st(u.value));
                  break;
                case "select":
                  n.multiple = !!u.multiple, d = u.value, d != null ? Tn(n, !!u.multiple, d, !1) : u.defaultValue != null && Tn(
                    n,
                    !!u.multiple,
                    u.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Ll);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u = !!u.autoFocus;
                  break e;
                case "img":
                  u = !0;
                  break e;
                default:
                  u = !1;
              }
            }
            u && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return rr(r), null;
      case 6:
        if (n && r.stateNode != null) dh(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null) throw Error(h(166));
          if (l = xo(Es.current), xo(Oi.current), Vc(r)) {
            if (u = r.stateNode, l = r.memoizedProps, u[Ti] = r, (d = u.nodeValue !== l) && (n = ea, n !== null)) switch (n.tag) {
              case 3:
                Nc(u.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Nc(u.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else u = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(u), u[Ti] = r, r.stateNode = u;
        }
        return rr(r), null;
      case 13:
        if (sn(_n), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (vn && ta !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0) gs(), zl(), r.flags |= 98560, d = !1;
          else if (d = Vc(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(h(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(h(317));
              d[Ti] = r;
            } else zl(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
            rr(r), d = !1;
          } else ja !== null && (Fo(ja), ja = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0 ? (r.lanes = l, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (n === null || (_n.current & 1) !== 0 ? On === 0 && (On = 3) : op())), r.updateQueue !== null && (r.flags |= 4), rr(r), null);
      case 4:
        return wo(), Vn(n, r), n === null && yu(r.stateNode.containerInfo), rr(r), null;
      case 10:
        return Ud(r.type._context), rr(r), null;
      case 17:
        return jn(r.type) && Eu(), rr(r), null;
      case 19:
        if (sn(_n), d = r.memoizedState, d === null) return rr(r), null;
        if (u = (r.flags & 128) !== 0, _ = d.rendering, _ === null) if (u) zs(d, !1);
        else {
          if (On !== 0 || n !== null && (n.flags & 128) !== 0) for (n = r.child; n !== null; ) {
            if (_ = $c(n), _ !== null) {
              for (r.flags |= 128, zs(d, !1), u = _.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = l, l = r.child; l !== null; ) d = l, n = u, d.flags &= 14680066, _ = d.alternate, _ === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = _.childLanes, d.lanes = _.lanes, d.child = _.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = _.memoizedProps, d.memoizedState = _.memoizedState, d.updateQueue = _.updateQueue, d.type = _.type, n = _.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return Ke(_n, _n.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && _t() > Lu && (r.flags |= 128, u = !0, zs(d, !1), r.lanes = 4194304);
        }
        else {
          if (!u) if (n = $c(_), n !== null) {
            if (r.flags |= 128, u = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), zs(d, !0), d.tail === null && d.tailMode === "hidden" && !_.alternate && !vn) return rr(r), null;
          } else 2 * _t() - d.renderingStartTime > Lu && l !== 1073741824 && (r.flags |= 128, u = !0, zs(d, !1), r.lanes = 4194304);
          d.isBackwards ? (_.sibling = r.child, r.child = _) : (l = d.last, l !== null ? l.sibling = _ : r.child = _, d.last = _);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = _t(), r.sibling = null, l = _n.current, Ke(_n, u ? l & 1 | 2 : l & 1), r) : (rr(r), null);
      case 22:
      case 23:
        return lp(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && (r.mode & 1) !== 0 ? (Ca & 1073741824) !== 0 && (rr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : rr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(h(156, r.tag));
  }
  function vf(n, r) {
    switch (Pc(r), r.tag) {
      case 1:
        return jn(r.type) && Eu(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return wo(), sn(Gn), sn(En), et(), n = r.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Bc(r), null;
      case 13:
        if (sn(_n), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(h(340));
          zl();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return sn(_n), null;
      case 4:
        return wo(), null;
      case 10:
        return Ud(r.type._context), null;
      case 22:
      case 23:
        return lp(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Fs = !1, wr = !1, zy = typeof WeakSet == "function" ? WeakSet : Set, ze = null;
  function ku(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (u) {
      hn(n, r, u);
    }
    else l.current = null;
  }
  function hf(n, r, l) {
    try {
      l();
    } catch (u) {
      hn(n, r, u);
    }
  }
  var vh = !1;
  function hh(n, r) {
    if (vs = La, n = cs(), bc(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var u = l.getSelection && l.getSelection();
        if (u && u.rangeCount !== 0) {
          l = u.anchorNode;
          var c = u.anchorOffset, d = u.focusNode;
          u = u.focusOffset;
          try {
            l.nodeType, d.nodeType;
          } catch {
            l = null;
            break e;
          }
          var _ = 0, x = -1, O = -1, W = 0, se = 0, de = n, ue = null;
          t: for (; ; ) {
            for (var Me; de !== l || c !== 0 && de.nodeType !== 3 || (x = _ + c), de !== d || u !== 0 && de.nodeType !== 3 || (O = _ + u), de.nodeType === 3 && (_ += de.nodeValue.length), (Me = de.firstChild) !== null; )
              ue = de, de = Me;
            for (; ; ) {
              if (de === n) break t;
              if (ue === l && ++W === c && (x = _), ue === d && ++se === u && (O = _), (Me = de.nextSibling) !== null) break;
              de = ue, ue = de.parentNode;
            }
            de = Me;
          }
          l = x === -1 || O === -1 ? null : { start: x, end: O };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (_o = { focusedElem: n, selectionRange: l }, La = !1, ze = r; ze !== null; ) if (r = ze, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, ze = n;
    else for (; ze !== null; ) {
      r = ze;
      try {
        var Ie = r.alternate;
        if ((r.flags & 1024) !== 0) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Ie !== null) {
              var Ye = Ie.memoizedProps, Ln = Ie.memoizedState, z = r.stateNode, M = z.getSnapshotBeforeUpdate(r.elementType === r.type ? Ye : ui(r.type, Ye), Ln);
              z.__reactInternalSnapshotBeforeUpdate = M;
            }
            break;
          case 3:
            var H = r.stateNode.containerInfo;
            H.nodeType === 1 ? H.textContent = "" : H.nodeType === 9 && H.documentElement && H.removeChild(H.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(h(163));
        }
      } catch (ce) {
        hn(r, r.return, ce);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, ze = n;
        break;
      }
      ze = r.return;
    }
    return Ie = vh, vh = !1, Ie;
  }
  function Ps(n, r, l) {
    var u = r.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var c = u = u.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && hf(r, l, d);
        }
        c = c.next;
      } while (c !== u);
    }
  }
  function Vs(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var u = l.create;
          l.destroy = u();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Jd(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      n.tag, n = l, typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function mf(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, mf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ti], delete r[hs], delete r[ms], delete r[Cu], delete r[Uy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Hs(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function al(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Hs(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Ni(n, r, l) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Ll));
    else if (u !== 4 && (n = n.child, n !== null)) for (Ni(n, r, l), n = n.sibling; n !== null; ) Ni(n, r, l), n = n.sibling;
  }
  function Mi(n, r, l) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (u !== 4 && (n = n.child, n !== null)) for (Mi(n, r, l), n = n.sibling; n !== null; ) Mi(n, r, l), n = n.sibling;
  }
  var Dn = null, jr = !1;
  function zr(n, r, l) {
    for (l = l.child; l !== null; ) mh(n, r, l), l = l.sibling;
  }
  function mh(n, r, l) {
    if (Kr && typeof Kr.onCommitFiberUnmount == "function") try {
      Kr.onCommitFiberUnmount(El, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        wr || ku(l, r);
      case 6:
        var u = Dn, c = jr;
        Dn = null, zr(n, r, l), Dn = u, jr = c, Dn !== null && (jr ? (n = Dn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : Dn.removeChild(l.stateNode));
        break;
      case 18:
        Dn !== null && (jr ? (n = Dn, l = l.stateNode, n.nodeType === 8 ? _u(n.parentNode, l) : n.nodeType === 1 && _u(n, l), ri(n)) : _u(Dn, l.stateNode));
        break;
      case 4:
        u = Dn, c = jr, Dn = l.stateNode.containerInfo, jr = !0, zr(n, r, l), Dn = u, jr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!wr && (u = l.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          c = u = u.next;
          do {
            var d = c, _ = d.destroy;
            d = d.tag, _ !== void 0 && ((d & 2) !== 0 || (d & 4) !== 0) && hf(l, r, _), c = c.next;
          } while (c !== u);
        }
        zr(n, r, l);
        break;
      case 1:
        if (!wr && (ku(l, r), u = l.stateNode, typeof u.componentWillUnmount == "function")) try {
          u.props = l.memoizedProps, u.state = l.memoizedState, u.componentWillUnmount();
        } catch (x) {
          hn(l, r, x);
        }
        zr(n, r, l);
        break;
      case 21:
        zr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (wr = (u = wr) || l.memoizedState !== null, zr(n, r, l), wr = u) : zr(n, r, l);
        break;
      default:
        zr(n, r, l);
    }
  }
  function yh(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new zy()), r.forEach(function(u) {
        var c = xh.bind(null, n, u);
        l.has(u) || (l.add(u), u.then(c, c));
      });
    }
  }
  function si(n, r) {
    var l = r.deletions;
    if (l !== null) for (var u = 0; u < l.length; u++) {
      var c = l[u];
      try {
        var d = n, _ = r, x = _;
        e: for (; x !== null; ) {
          switch (x.tag) {
            case 5:
              Dn = x.stateNode, jr = !1;
              break e;
            case 3:
              Dn = x.stateNode.containerInfo, jr = !0;
              break e;
            case 4:
              Dn = x.stateNode.containerInfo, jr = !0;
              break e;
          }
          x = x.return;
        }
        if (Dn === null) throw Error(h(160));
        mh(d, _, c), Dn = null, jr = !1;
        var O = c.alternate;
        O !== null && (O.return = null), c.return = null;
      } catch (W) {
        hn(c, r, W);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) ep(r, n), r = r.sibling;
  }
  function ep(n, r) {
    var l = n.alternate, u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (si(r, n), ia(n), u & 4) {
          try {
            Ps(3, n, n.return), Vs(3, n);
          } catch (Ye) {
            hn(n, n.return, Ye);
          }
          try {
            Ps(5, n, n.return);
          } catch (Ye) {
            hn(n, n.return, Ye);
          }
        }
        break;
      case 1:
        si(r, n), ia(n), u & 512 && l !== null && ku(l, l.return);
        break;
      case 5:
        if (si(r, n), ia(n), u & 512 && l !== null && ku(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            Ce(c, "");
          } catch (Ye) {
            hn(n, n.return, Ye);
          }
        }
        if (u & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, _ = l !== null ? l.memoizedProps : d, x = n.type, O = n.updateQueue;
          if (n.updateQueue = null, O !== null) try {
            x === "input" && d.type === "radio" && d.name != null && Wn(c, d), er(x, _);
            var W = er(x, d);
            for (_ = 0; _ < O.length; _ += 2) {
              var se = O[_], de = O[_ + 1];
              se === "style" ? an(c, de) : se === "dangerouslySetInnerHTML" ? hi(c, de) : se === "children" ? Ce(c, de) : ge(c, se, de, W);
            }
            switch (x) {
              case "input":
                qr(c, d);
                break;
              case "textarea":
                qa(c, d);
                break;
              case "select":
                var ue = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var Me = d.value;
                Me != null ? Tn(c, !!d.multiple, Me, !1) : ue !== !!d.multiple && (d.defaultValue != null ? Tn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Tn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[hs] = d;
          } catch (Ye) {
            hn(n, n.return, Ye);
          }
        }
        break;
      case 6:
        if (si(r, n), ia(n), u & 4) {
          if (n.stateNode === null) throw Error(h(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Ye) {
            hn(n, n.return, Ye);
          }
        }
        break;
      case 3:
        if (si(r, n), ia(n), u & 4 && l !== null && l.memoizedState.isDehydrated) try {
          ri(r.containerInfo);
        } catch (Ye) {
          hn(n, n.return, Ye);
        }
        break;
      case 4:
        si(r, n), ia(n);
        break;
      case 13:
        si(r, n), ia(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (rp = _t())), u & 4 && yh(n);
        break;
      case 22:
        if (se = l !== null && l.memoizedState !== null, n.mode & 1 ? (wr = (W = wr) || se, si(r, n), wr = W) : si(r, n), ia(n), u & 8192) {
          if (W = n.memoizedState !== null, (n.stateNode.isHidden = W) && !se && (n.mode & 1) !== 0) for (ze = n, se = n.child; se !== null; ) {
            for (de = ze = se; ze !== null; ) {
              switch (ue = ze, Me = ue.child, ue.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ps(4, ue, ue.return);
                  break;
                case 1:
                  ku(ue, ue.return);
                  var Ie = ue.stateNode;
                  if (typeof Ie.componentWillUnmount == "function") {
                    u = ue, l = ue.return;
                    try {
                      r = u, Ie.props = r.memoizedProps, Ie.state = r.memoizedState, Ie.componentWillUnmount();
                    } catch (Ye) {
                      hn(u, l, Ye);
                    }
                  }
                  break;
                case 5:
                  ku(ue, ue.return);
                  break;
                case 22:
                  if (ue.memoizedState !== null) {
                    Is(de);
                    continue;
                  }
              }
              Me !== null ? (Me.return = ue, ze = Me) : Is(de);
            }
            se = se.sibling;
          }
          e: for (se = null, de = n; ; ) {
            if (de.tag === 5) {
              if (se === null) {
                se = de;
                try {
                  c = de.stateNode, W ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (x = de.stateNode, O = de.memoizedProps.style, _ = O != null && O.hasOwnProperty("display") ? O.display : null, x.style.display = Wt("display", _));
                } catch (Ye) {
                  hn(n, n.return, Ye);
                }
              }
            } else if (de.tag === 6) {
              if (se === null) try {
                de.stateNode.nodeValue = W ? "" : de.memoizedProps;
              } catch (Ye) {
                hn(n, n.return, Ye);
              }
            } else if ((de.tag !== 22 && de.tag !== 23 || de.memoizedState === null || de === n) && de.child !== null) {
              de.child.return = de, de = de.child;
              continue;
            }
            if (de === n) break e;
            for (; de.sibling === null; ) {
              if (de.return === null || de.return === n) break e;
              se === de && (se = null), de = de.return;
            }
            se === de && (se = null), de.sibling.return = de.return, de = de.sibling;
          }
        }
        break;
      case 19:
        si(r, n), ia(n), u & 4 && yh(n);
        break;
      case 21:
        break;
      default:
        si(
          r,
          n
        ), ia(n);
    }
  }
  function ia(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Hs(l)) {
              var u = l;
              break e;
            }
            l = l.return;
          }
          throw Error(h(160));
        }
        switch (u.tag) {
          case 5:
            var c = u.stateNode;
            u.flags & 32 && (Ce(c, ""), u.flags &= -33);
            var d = al(n);
            Mi(n, d, c);
            break;
          case 3:
          case 4:
            var _ = u.stateNode.containerInfo, x = al(n);
            Ni(n, x, _);
            break;
          default:
            throw Error(h(161));
        }
      } catch (O) {
        hn(n, n.return, O);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Fy(n, r, l) {
    ze = n, tp(n);
  }
  function tp(n, r, l) {
    for (var u = (n.mode & 1) !== 0; ze !== null; ) {
      var c = ze, d = c.child;
      if (c.tag === 22 && u) {
        var _ = c.memoizedState !== null || Fs;
        if (!_) {
          var x = c.alternate, O = x !== null && x.memoizedState !== null || wr;
          x = Fs;
          var W = wr;
          if (Fs = _, (wr = O) && !W) for (ze = c; ze !== null; ) _ = ze, O = _.child, _.tag === 22 && _.memoizedState !== null ? np(c) : O !== null ? (O.return = _, ze = O) : np(c);
          for (; d !== null; ) ze = d, tp(d), d = d.sibling;
          ze = c, Fs = x, wr = W;
        }
        gh(n);
      } else (c.subtreeFlags & 8772) !== 0 && d !== null ? (d.return = c, ze = d) : gh(n);
    }
  }
  function gh(n) {
    for (; ze !== null; ) {
      var r = ze;
      if ((r.flags & 8772) !== 0) {
        var l = r.alternate;
        try {
          if ((r.flags & 8772) !== 0) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              wr || Vs(5, r);
              break;
            case 1:
              var u = r.stateNode;
              if (r.flags & 4 && !wr) if (l === null) u.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : ui(r.type, l.memoizedProps);
                u.componentDidUpdate(c, l.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && Vd(r, d, u);
              break;
            case 3:
              var _ = r.updateQueue;
              if (_ !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                Vd(r, _, l);
              }
              break;
            case 5:
              var x = r.stateNode;
              if (l === null && r.flags & 4) {
                l = x;
                var O = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    O.autoFocus && l.focus();
                    break;
                  case "img":
                    O.src && (l.src = O.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var W = r.alternate;
                if (W !== null) {
                  var se = W.memoizedState;
                  if (se !== null) {
                    var de = se.dehydrated;
                    de !== null && ri(de);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(h(163));
          }
          wr || r.flags & 512 && Jd(r);
        } catch (ue) {
          hn(r, r.return, ue);
        }
      }
      if (r === n) {
        ze = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, ze = l;
        break;
      }
      ze = r.return;
    }
  }
  function Is(n) {
    for (; ze !== null; ) {
      var r = ze;
      if (r === n) {
        ze = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, ze = l;
        break;
      }
      ze = r.return;
    }
  }
  function np(n) {
    for (; ze !== null; ) {
      var r = ze;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Vs(4, r);
            } catch (O) {
              hn(r, l, O);
            }
            break;
          case 1:
            var u = r.stateNode;
            if (typeof u.componentDidMount == "function") {
              var c = r.return;
              try {
                u.componentDidMount();
              } catch (O) {
                hn(r, c, O);
              }
            }
            var d = r.return;
            try {
              Jd(r);
            } catch (O) {
              hn(r, d, O);
            }
            break;
          case 5:
            var _ = r.return;
            try {
              Jd(r);
            } catch (O) {
              hn(r, _, O);
            }
        }
      } catch (O) {
        hn(r, r.return, O);
      }
      if (r === n) {
        ze = null;
        break;
      }
      var x = r.sibling;
      if (x !== null) {
        x.return = r.return, ze = x;
        break;
      }
      ze = r.return;
    }
  }
  var Py = Math.ceil, Il = Ee.ReactCurrentDispatcher, jo = Ee.ReactCurrentOwner, dr = Ee.ReactCurrentBatchConfig, Mt = 0, Kn = null, Hn = null, pr = 0, Ca = 0, Du = Aa(0), On = 0, Bs = null, Ai = 0, Ou = 0, yf = 0, $s = null, la = null, rp = 0, Lu = 1 / 0, Ea = null, Nu = !1, zo = null, Bl = null, gf = !1, il = null, Ws = 0, $l = 0, Mu = null, Ys = -1, kr = 0;
  function In() {
    return (Mt & 6) !== 0 ? _t() : Ys !== -1 ? Ys : Ys = _t();
  }
  function Ui(n) {
    return (n.mode & 1) === 0 ? 1 : (Mt & 2) !== 0 && pr !== 0 ? pr & -pr : jy.transition !== null ? (kr === 0 && (kr = iu()), kr) : (n = Pt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : du(n.type)), n);
  }
  function Fr(n, r, l, u) {
    if (50 < $l) throw $l = 0, Mu = null, Error(h(185));
    Yi(n, l, u), ((Mt & 2) === 0 || n !== Kn) && (n === Kn && ((Mt & 2) === 0 && (Ou |= l), On === 4 && ci(n, pr)), oa(n, u), l === 1 && Mt === 0 && (r.mode & 1) === 0 && (Lu = _t() + 500, Ru && wi()));
  }
  function oa(n, r) {
    var l = n.callbackNode;
    co(n, r);
    var u = ni(n, n === Kn ? pr : 0);
    if (u === 0) l !== null && ur(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (l != null && ur(l), r === 1) n.tag === 0 ? Ml(ap.bind(null, n)) : zc(ap.bind(null, n)), Su(function() {
        (Mt & 6) === 0 && wi();
      }), l = null;
      else {
        switch (ou(u)) {
          case 1:
            l = ei;
            break;
          case 4:
            l = uo;
            break;
          case 16:
            l = so;
            break;
          case 536870912:
            l = nu;
            break;
          default:
            l = so;
        }
        l = kh(l, Sf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function Sf(n, r) {
    if (Ys = -1, kr = 0, (Mt & 6) !== 0) throw Error(h(327));
    var l = n.callbackNode;
    if (Au() && n.callbackNode !== l) return null;
    var u = ni(n, n === Kn ? pr : 0);
    if (u === 0) return null;
    if ((u & 30) !== 0 || (u & n.expiredLanes) !== 0 || r) r = _f(n, u);
    else {
      r = u;
      var c = Mt;
      Mt |= 2;
      var d = _h();
      (Kn !== n || pr !== r) && (Ea = null, Lu = _t() + 500, ll(n, r));
      do
        try {
          Ch();
          break;
        } catch (x) {
          Sh(n, x);
        }
      while (!0);
      Ad(), Il.current = d, Mt = c, Hn !== null ? r = 0 : (Kn = null, pr = 0, r = On);
    }
    if (r !== 0) {
      if (r === 2 && (c = bl(n), c !== 0 && (u = c, r = Qs(n, c))), r === 1) throw l = Bs, ll(n, 0), ci(n, u), oa(n, _t()), l;
      if (r === 6) ci(n, u);
      else {
        if (c = n.current.alternate, (u & 30) === 0 && !Vy(c) && (r = _f(n, u), r === 2 && (d = bl(n), d !== 0 && (u = d, r = Qs(n, d))), r === 1)) throw l = Bs, ll(n, 0), ci(n, u), oa(n, _t()), l;
        switch (n.finishedWork = c, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(h(345));
          case 2:
            Vo(n, la, Ea);
            break;
          case 3:
            if (ci(n, u), (u & 130023424) === u && (r = rp + 500 - _t(), 10 < r)) {
              if (ni(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & u) !== u) {
                In(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Ac(Vo.bind(null, n, la, Ea), r);
              break;
            }
            Vo(n, la, Ea);
            break;
          case 4:
            if (ci(n, u), (u & 4194240) === u) break;
            for (r = n.eventTimes, c = -1; 0 < u; ) {
              var _ = 31 - Nr(u);
              d = 1 << _, _ = r[_], _ > c && (c = _), u &= ~d;
            }
            if (u = c, u = _t() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * Py(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = Ac(Vo.bind(null, n, la, Ea), u);
              break;
            }
            Vo(n, la, Ea);
            break;
          case 5:
            Vo(n, la, Ea);
            break;
          default:
            throw Error(h(329));
        }
      }
    }
    return oa(n, _t()), n.callbackNode === l ? Sf.bind(null, n) : null;
  }
  function Qs(n, r) {
    var l = $s;
    return n.current.memoizedState.isDehydrated && (ll(n, r).flags |= 256), n = _f(n, r), n !== 2 && (r = la, la = l, r !== null && Fo(r)), n;
  }
  function Fo(n) {
    la === null ? la = n : la.push.apply(la, n);
  }
  function Vy(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var u = 0; u < l.length; u++) {
          var c = l[u], d = c.getSnapshot;
          c = c.value;
          try {
            if (!ii(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function ci(n, r) {
    for (r &= ~yf, r &= ~Ou, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Nr(r), u = 1 << l;
      n[l] = -1, r &= ~u;
    }
  }
  function ap(n) {
    if ((Mt & 6) !== 0) throw Error(h(327));
    Au();
    var r = ni(n, 0);
    if ((r & 1) === 0) return oa(n, _t()), null;
    var l = _f(n, r);
    if (n.tag !== 0 && l === 2) {
      var u = bl(n);
      u !== 0 && (r = u, l = Qs(n, u));
    }
    if (l === 1) throw l = Bs, ll(n, 0), ci(n, r), oa(n, _t()), l;
    if (l === 6) throw Error(h(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Vo(n, la, Ea), oa(n, _t()), null;
  }
  function ip(n, r) {
    var l = Mt;
    Mt |= 1;
    try {
      return n(r);
    } finally {
      Mt = l, Mt === 0 && (Lu = _t() + 500, Ru && wi());
    }
  }
  function Po(n) {
    il !== null && il.tag === 0 && (Mt & 6) === 0 && Au();
    var r = Mt;
    Mt |= 1;
    var l = dr.transition, u = Pt;
    try {
      if (dr.transition = null, Pt = 1, n) return n();
    } finally {
      Pt = u, dr.transition = l, Mt = r, (Mt & 6) === 0 && wi();
    }
  }
  function lp() {
    Ca = Du.current, sn(Du);
  }
  function ll(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Dd(l)), Hn !== null) for (l = Hn.return; l !== null; ) {
      var u = l;
      switch (Pc(u), u.tag) {
        case 1:
          u = u.type.childContextTypes, u != null && Eu();
          break;
        case 3:
          wo(), sn(Gn), sn(En), et();
          break;
        case 5:
          Bc(u);
          break;
        case 4:
          wo();
          break;
        case 13:
          sn(_n);
          break;
        case 19:
          sn(_n);
          break;
        case 10:
          Ud(u.type._context);
          break;
        case 22:
        case 23:
          lp();
      }
      l = l.return;
    }
    if (Kn = n, Hn = n = Wl(n.current, null), pr = Ca = r, On = 0, Bs = null, yf = Ou = Ai = 0, la = $s = null, To !== null) {
      for (r = 0; r < To.length; r++) if (l = To[r], u = l.interleaved, u !== null) {
        l.interleaved = null;
        var c = u.next, d = l.pending;
        if (d !== null) {
          var _ = d.next;
          d.next = c, u.next = _;
        }
        l.pending = u;
      }
      To = null;
    }
    return n;
  }
  function Sh(n, r) {
    do {
      var l = Hn;
      try {
        if (Ad(), wt.current = Mo, Wc) {
          for (var u = Ht.memoizedState; u !== null; ) {
            var c = u.queue;
            c !== null && (c.pending = null), u = u.next;
          }
          Wc = !1;
        }
        if (en = 0, nr = Fn = Ht = null, bs = !1, ko = 0, jo.current = null, l === null || l.return === null) {
          On = 1, Bs = r, Hn = null;
          break;
        }
        e: {
          var d = n, _ = l.return, x = l, O = r;
          if (r = pr, x.flags |= 32768, O !== null && typeof O == "object" && typeof O.then == "function") {
            var W = O, se = x, de = se.tag;
            if ((se.mode & 1) === 0 && (de === 0 || de === 11 || de === 15)) {
              var ue = se.alternate;
              ue ? (se.updateQueue = ue.updateQueue, se.memoizedState = ue.memoizedState, se.lanes = ue.lanes) : (se.updateQueue = null, se.memoizedState = null);
            }
            var Me = lh(_);
            if (Me !== null) {
              Me.flags &= -257, Hl(Me, _, x, d, r), Me.mode & 1 && Gd(d, W, r), r = Me, O = W;
              var Ie = r.updateQueue;
              if (Ie === null) {
                var Ye = /* @__PURE__ */ new Set();
                Ye.add(O), r.updateQueue = Ye;
              } else Ie.add(O);
              break e;
            } else {
              if ((r & 1) === 0) {
                Gd(d, W, r), op();
                break e;
              }
              O = Error(h(426));
            }
          } else if (vn && x.mode & 1) {
            var Ln = lh(_);
            if (Ln !== null) {
              (Ln.flags & 65536) === 0 && (Ln.flags |= 256), Hl(Ln, _, x, d, r), tl(Ao(O, x));
              break e;
            }
          }
          d = O = Ao(O, x), On !== 4 && (On = 2), $s === null ? $s = [d] : $s.push(d), d = _;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var z = ih(d, O, r);
                eh(d, z);
                break e;
              case 1:
                x = O;
                var M = d.type, H = d.stateNode;
                if ((d.flags & 128) === 0 && (typeof M.getDerivedStateFromError == "function" || H !== null && typeof H.componentDidCatch == "function" && (Bl === null || !Bl.has(H)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var ce = Qd(d, x, r);
                  eh(d, ce);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Rh(l);
      } catch (Be) {
        r = Be, Hn === l && l !== null && (Hn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function _h() {
    var n = Il.current;
    return Il.current = Mo, n === null ? Mo : n;
  }
  function op() {
    (On === 0 || On === 3 || On === 2) && (On = 4), Kn === null || (Ai & 268435455) === 0 && (Ou & 268435455) === 0 || ci(Kn, pr);
  }
  function _f(n, r) {
    var l = Mt;
    Mt |= 2;
    var u = _h();
    (Kn !== n || pr !== r) && (Ea = null, ll(n, r));
    do
      try {
        Hy();
        break;
      } catch (c) {
        Sh(n, c);
      }
    while (!0);
    if (Ad(), Mt = l, Il.current = u, Hn !== null) throw Error(h(261));
    return Kn = null, pr = 0, On;
  }
  function Hy() {
    for (; Hn !== null; ) Eh(Hn);
  }
  function Ch() {
    for (; Hn !== null && !Za(); ) Eh(Hn);
  }
  function Eh(n) {
    var r = wh(n.alternate, n, Ca);
    n.memoizedProps = n.pendingProps, r === null ? Rh(n) : Hn = r, jo.current = null;
  }
  function Rh(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, (r.flags & 32768) === 0) {
        if (l = ph(l, r, Ca), l !== null) {
          Hn = l;
          return;
        }
      } else {
        if (l = vf(l, r), l !== null) {
          l.flags &= 32767, Hn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          On = 6, Hn = null;
          return;
        }
      }
      if (r = r.sibling, r !== null) {
        Hn = r;
        return;
      }
      Hn = r = n;
    } while (r !== null);
    On === 0 && (On = 5);
  }
  function Vo(n, r, l) {
    var u = Pt, c = dr.transition;
    try {
      dr.transition = null, Pt = 1, Iy(n, r, l, u);
    } finally {
      dr.transition = c, Pt = u;
    }
    return null;
  }
  function Iy(n, r, l, u) {
    do
      Au();
    while (il !== null);
    if ((Mt & 6) !== 0) throw Error(h(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(h(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (ud(n, d), n === Kn && (Hn = Kn = null, pr = 0), (l.subtreeFlags & 2064) === 0 && (l.flags & 2064) === 0 || gf || (gf = !0, kh(so, function() {
      return Au(), null;
    })), d = (l.flags & 15990) !== 0, (l.subtreeFlags & 15990) !== 0 || d) {
      d = dr.transition, dr.transition = null;
      var _ = Pt;
      Pt = 1;
      var x = Mt;
      Mt |= 4, jo.current = null, hh(n, l), ep(l, n), hu(_o), La = !!vs, _o = vs = null, n.current = l, Fy(l), Ja(), Mt = x, Pt = _, dr.transition = d;
    } else n.current = l;
    if (gf && (gf = !1, il = n, Ws = c), d = n.pendingLanes, d === 0 && (Bl = null), es(l.stateNode), oa(n, _t()), r !== null) for (u = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], u(c.value, { componentStack: c.stack, digest: c.digest });
    if (Nu) throw Nu = !1, n = zo, zo = null, n;
    return (Ws & 1) !== 0 && n.tag !== 0 && Au(), d = n.pendingLanes, (d & 1) !== 0 ? n === Mu ? $l++ : ($l = 0, Mu = n) : $l = 0, wi(), null;
  }
  function Au() {
    if (il !== null) {
      var n = ou(Ws), r = dr.transition, l = Pt;
      try {
        if (dr.transition = null, Pt = 16 > n ? 16 : n, il === null) var u = !1;
        else {
          if (n = il, il = null, Ws = 0, (Mt & 6) !== 0) throw Error(h(331));
          var c = Mt;
          for (Mt |= 4, ze = n.current; ze !== null; ) {
            var d = ze, _ = d.child;
            if ((ze.flags & 16) !== 0) {
              var x = d.deletions;
              if (x !== null) {
                for (var O = 0; O < x.length; O++) {
                  var W = x[O];
                  for (ze = W; ze !== null; ) {
                    var se = ze;
                    switch (se.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ps(8, se, d);
                    }
                    var de = se.child;
                    if (de !== null) de.return = se, ze = de;
                    else for (; ze !== null; ) {
                      se = ze;
                      var ue = se.sibling, Me = se.return;
                      if (mf(se), se === W) {
                        ze = null;
                        break;
                      }
                      if (ue !== null) {
                        ue.return = Me, ze = ue;
                        break;
                      }
                      ze = Me;
                    }
                  }
                }
                var Ie = d.alternate;
                if (Ie !== null) {
                  var Ye = Ie.child;
                  if (Ye !== null) {
                    Ie.child = null;
                    do {
                      var Ln = Ye.sibling;
                      Ye.sibling = null, Ye = Ln;
                    } while (Ye !== null);
                  }
                }
                ze = d;
              }
            }
            if ((d.subtreeFlags & 2064) !== 0 && _ !== null) _.return = d, ze = _;
            else e: for (; ze !== null; ) {
              if (d = ze, (d.flags & 2048) !== 0) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Ps(9, d, d.return);
              }
              var z = d.sibling;
              if (z !== null) {
                z.return = d.return, ze = z;
                break e;
              }
              ze = d.return;
            }
          }
          var M = n.current;
          for (ze = M; ze !== null; ) {
            _ = ze;
            var H = _.child;
            if ((_.subtreeFlags & 2064) !== 0 && H !== null) H.return = _, ze = H;
            else e: for (_ = M; ze !== null; ) {
              if (x = ze, (x.flags & 2048) !== 0) try {
                switch (x.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Vs(9, x);
                }
              } catch (Be) {
                hn(x, x.return, Be);
              }
              if (x === _) {
                ze = null;
                break e;
              }
              var ce = x.sibling;
              if (ce !== null) {
                ce.return = x.return, ze = ce;
                break e;
              }
              ze = x.return;
            }
          }
          if (Mt = c, wi(), Kr && typeof Kr.onPostCommitFiberRoot == "function") try {
            Kr.onPostCommitFiberRoot(El, n);
          } catch {
          }
          u = !0;
        }
        return u;
      } finally {
        Pt = l, dr.transition = r;
      }
    }
    return !1;
  }
  function bh(n, r, l) {
    r = Ao(l, r), r = ih(n, r, 1), n = Fl(n, r, 1), r = In(), n !== null && (Yi(n, 1, r), oa(n, r));
  }
  function hn(n, r, l) {
    if (n.tag === 3) bh(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        bh(r, n, l);
        break;
      } else if (r.tag === 1) {
        var u = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (Bl === null || !Bl.has(u))) {
          n = Ao(l, n), n = Qd(r, n, 1), r = Fl(r, n, 1), n = In(), r !== null && (Yi(r, 1, n), oa(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function By(n, r, l) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = In(), n.pingedLanes |= n.suspendedLanes & l, Kn === n && (pr & l) === l && (On === 4 || On === 3 && (pr & 130023424) === pr && 500 > _t() - rp ? ll(n, 0) : yf |= l), oa(n, r);
  }
  function Th(n, r) {
    r === 0 && ((n.mode & 1) === 0 ? r = 1 : (r = ma, ma <<= 1, (ma & 130023424) === 0 && (ma = 4194304)));
    var l = In();
    n = Sa(n, r), n !== null && (Yi(n, r, l), oa(n, l));
  }
  function $y(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), Th(n, l);
  }
  function xh(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var u = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        u = n.stateNode;
        break;
      default:
        throw Error(h(314));
    }
    u !== null && u.delete(r), Th(n, l);
  }
  var wh;
  wh = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Gn.current) Pn = !0;
    else {
      if ((n.lanes & l) === 0 && (r.flags & 128) === 0) return Pn = !1, js(n, r, l);
      Pn = (n.flags & 131072) !== 0;
    }
    else Pn = !1, vn && (r.flags & 1048576) !== 0 && Kv(r, el, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        Fa(n, r), n = r.pendingProps;
        var c = Jr(r, En.current);
        Sn(r, l), c = Pl(null, r, u, n, c, l);
        var d = oi();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, jn(u) ? (d = !0, tr(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Pd(r), c.updater = sf, r.stateNode = c, c._reactInternals = r, Ls(r, u, n, l), r = As(null, r, u, !0, d, l)) : (r.tag = 0, vn && d && Fc(r), fr(null, r, c, l), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (Fa(n, r), n = r.pendingProps, c = u._init, u = c(u._payload), r.type = u, c = r.tag = Yy(u), n = ui(u, n), c) {
            case 0:
              r = oh(null, r, u, n, l);
              break e;
            case 1:
              r = uh(null, r, u, n, l);
              break e;
            case 11:
              r = aa(null, r, u, n, l);
              break e;
            case 14:
              r = Uo(null, r, u, ui(u.type, n), l);
              break e;
          }
          throw Error(h(
            306,
            u,
            ""
          ));
        }
        return r;
      case 0:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : ui(u, c), oh(n, r, u, c, l);
      case 1:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : ui(u, c), uh(n, r, u, c, l);
      case 3:
        e: {
          if (wu(r), n === null) throw Error(h(387));
          u = r.pendingProps, d = r.memoizedState, c = d.element, Jv(n, r), Ss(r, u, null, l);
          var _ = r.memoizedState;
          if (u = _.element, d.isDehydrated) if (d = { element: u, isDehydrated: !1, cache: _.cache, pendingSuspenseBoundaries: _.pendingSuspenseBoundaries, transitions: _.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = Ao(Error(h(423)), r), r = sh(n, r, u, l, c);
            break e;
          } else if (u !== c) {
            c = Ao(Error(h(424)), r), r = sh(n, r, u, l, c);
            break e;
          } else for (ta = bi(r.stateNode.containerInfo.firstChild), ea = r, vn = !0, ja = null, l = ke(r, null, u, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (zl(), u === c) {
              r = Pa(n, r, l);
              break e;
            }
            fr(n, r, u, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return th(r), n === null && Nd(r), u = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, _ = c.children, Mc(u, c) ? _ = null : d !== null && Mc(u, d) && (r.flags |= 32), qd(n, r), fr(n, r, _, l), r.child;
      case 6:
        return n === null && Nd(r), null;
      case 13:
        return pf(n, r, l);
      case 4:
        return Hd(r, r.stateNode.containerInfo), u = r.pendingProps, n === null ? r.child = wn(r, null, u, l) : fr(n, r, u, l), r.child;
      case 11:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : ui(u, c), aa(n, r, u, c, l);
      case 7:
        return fr(n, r, r.pendingProps, l), r.child;
      case 8:
        return fr(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return fr(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (u = r.type._context, c = r.pendingProps, d = r.memoizedProps, _ = c.value, Ke(ga, u._currentValue), u._currentValue = _, d !== null) if (ii(d.value, _)) {
            if (d.children === c.children && !Gn.current) {
              r = Pa(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var x = d.dependencies;
            if (x !== null) {
              _ = d.child;
              for (var O = x.firstContext; O !== null; ) {
                if (O.context === u) {
                  if (d.tag === 1) {
                    O = nl(-1, l & -l), O.tag = 2;
                    var W = d.updateQueue;
                    if (W !== null) {
                      W = W.shared;
                      var se = W.pending;
                      se === null ? O.next = O : (O.next = se.next, se.next = O), W.pending = O;
                    }
                  }
                  d.lanes |= l, O = d.alternate, O !== null && (O.lanes |= l), jd(
                    d.return,
                    l,
                    r
                  ), x.lanes |= l;
                  break;
                }
                O = O.next;
              }
            } else if (d.tag === 10) _ = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (_ = d.return, _ === null) throw Error(h(341));
              _.lanes |= l, x = _.alternate, x !== null && (x.lanes |= l), jd(_, l, r), _ = d.sibling;
            } else _ = d.child;
            if (_ !== null) _.return = d;
            else for (_ = d; _ !== null; ) {
              if (_ === r) {
                _ = null;
                break;
              }
              if (d = _.sibling, d !== null) {
                d.return = _.return, _ = d;
                break;
              }
              _ = _.return;
            }
            d = _;
          }
          fr(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, u = r.pendingProps.children, Sn(r, l), c = za(c), u = u(c), r.flags |= 1, fr(n, r, u, l), r.child;
      case 14:
        return u = r.type, c = ui(u, r.pendingProps), c = ui(u.type, c), Uo(n, r, u, c, l);
      case 15:
        return Ct(n, r, r.type, r.pendingProps, l);
      case 17:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : ui(u, c), Fa(n, r), r.tag = 1, jn(u) ? (n = !0, tr(r)) : n = !1, Sn(r, l), cf(r, u, c), Ls(r, u, c, l), As(null, r, u, !0, n, l);
      case 19:
        return Li(n, r, l);
      case 22:
        return Ms(n, r, l);
    }
    throw Error(h(156, r.tag));
  };
  function kh(n, r) {
    return fn(n, r);
  }
  function Wy(n, r, l, u) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ha(n, r, l, u) {
    return new Wy(n, r, l, u);
  }
  function up(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Yy(n) {
    if (typeof n == "function") return up(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === K) return 11;
      if (n === Ve) return 14;
    }
    return 2;
  }
  function Wl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ha(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Gs(n, r, l, u, c, d) {
    var _ = 2;
    if (u = n, typeof n == "function") up(n) && (_ = 1);
    else if (typeof n == "string") _ = 5;
    else e: switch (n) {
      case Pe:
        return ol(l.children, c, d, r);
      case He:
        _ = 8, c |= 8;
        break;
      case Xe:
        return n = Ha(12, l, r, c | 2), n.elementType = Xe, n.lanes = d, n;
      case ee:
        return n = Ha(13, l, r, c), n.elementType = ee, n.lanes = d, n;
      case be:
        return n = Ha(19, l, r, c), n.elementType = be, n.lanes = d, n;
      case _e:
        return Yl(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case ot:
            _ = 10;
            break e;
          case ut:
            _ = 9;
            break e;
          case K:
            _ = 11;
            break e;
          case Ve:
            _ = 14;
            break e;
          case we:
            _ = 16, u = null;
            break e;
        }
        throw Error(h(130, n == null ? n : typeof n, ""));
    }
    return r = Ha(_, l, r, c), r.elementType = n, r.type = u, r.lanes = d, r;
  }
  function ol(n, r, l, u) {
    return n = Ha(7, n, u, r), n.lanes = l, n;
  }
  function Yl(n, r, l, u) {
    return n = Ha(22, n, u, r), n.elementType = _e, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function sp(n, r, l) {
    return n = Ha(6, n, null, r), n.lanes = l, n;
  }
  function Cf(n, r, l) {
    return r = Ha(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Dh(n, r, l, u, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = lu(0), this.expirationTimes = lu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = lu(0), this.identifierPrefix = u, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Ef(n, r, l, u, c, d, _, x, O) {
    return n = new Dh(n, r, l, x, O), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Ha(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: u, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Pd(d), n;
  }
  function Qy(n, r, l) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Qe, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: l };
  }
  function cp(n) {
    if (!n) return Tr;
    n = n._reactInternals;
    e: {
      if (St(n) !== n || n.tag !== 1) throw Error(h(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (jn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(h(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (jn(l)) return ys(n, l, r);
    }
    return r;
  }
  function Oh(n, r, l, u, c, d, _, x, O) {
    return n = Ef(l, u, !0, n, c, d, _, x, O), n.context = cp(null), l = n.current, u = In(), c = Ui(l), d = nl(u, c), d.callback = r ?? null, Fl(l, d, c), n.current.lanes = c, Yi(n, c, u), oa(n, u), n;
  }
  function Rf(n, r, l, u) {
    var c = r.current, d = In(), _ = Ui(c);
    return l = cp(l), r.context === null ? r.context = l : r.pendingContext = l, r = nl(d, _), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = Fl(c, r, _), n !== null && (Fr(n, c, _, d), Ic(n, c, _)), _;
  }
  function bf(n) {
    return n = n.current, n.child ? (n.child.tag === 5, n.child.stateNode) : null;
  }
  function fp(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Tf(n, r) {
    fp(n, r), (n = n.alternate) && fp(n, r);
  }
  function Lh() {
    return null;
  }
  var Ho = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function dp(n) {
    this._internalRoot = n;
  }
  xf.prototype.render = dp.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(h(409));
    Rf(n, r, null, null);
  }, xf.prototype.unmount = dp.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Po(function() {
        Rf(null, n, null, null);
      }), r[Zi] = null;
    }
  };
  function xf(n) {
    this._internalRoot = n;
  }
  xf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = vt();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Qn.length && r !== 0 && r < Qn[l].priority; l++) ;
      Qn.splice(l, 0, n), l === 0 && rs(n);
    }
  };
  function pp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function wf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Nh() {
  }
  function Gy(n, r, l, u, c) {
    if (c) {
      if (typeof u == "function") {
        var d = u;
        u = function() {
          var W = bf(_);
          d.call(W);
        };
      }
      var _ = Oh(r, u, n, 0, null, !1, !1, "", Nh);
      return n._reactRootContainer = _, n[Zi] = _.current, yu(n.nodeType === 8 ? n.parentNode : n), Po(), _;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof u == "function") {
      var x = u;
      u = function() {
        var W = bf(O);
        x.call(W);
      };
    }
    var O = Ef(n, 0, !1, null, null, !1, !1, "", Nh);
    return n._reactRootContainer = O, n[Zi] = O.current, yu(n.nodeType === 8 ? n.parentNode : n), Po(function() {
      Rf(r, O, l, u);
    }), O;
  }
  function qs(n, r, l, u, c) {
    var d = l._reactRootContainer;
    if (d) {
      var _ = d;
      if (typeof c == "function") {
        var x = c;
        c = function() {
          var O = bf(_);
          x.call(O);
        };
      }
      Rf(r, _, n, c);
    } else _ = Gy(l, r, n, c, u);
    return bf(_);
  }
  jt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = ti(r.pendingLanes);
          l !== 0 && (Qi(r, l | 1), oa(r, _t()), (Mt & 6) === 0 && (Lu = _t() + 500, wi()));
        }
        break;
      case 13:
        Po(function() {
          var u = Sa(n, 1);
          if (u !== null) {
            var c = In();
            Fr(u, n, 1, c);
          }
        }), Tf(n, 1);
    }
  }, ts = function(n) {
    if (n.tag === 13) {
      var r = Sa(n, 134217728);
      if (r !== null) {
        var l = In();
        Fr(r, n, 134217728, l);
      }
      Tf(n, 134217728);
    }
  }, Si = function(n) {
    if (n.tag === 13) {
      var r = Ui(n), l = Sa(n, r);
      if (l !== null) {
        var u = In();
        Fr(l, n, r, u);
      }
      Tf(n, r);
    }
  }, vt = function() {
    return Pt;
  }, uu = function(n, r) {
    var l = Pt;
    try {
      return Pt = n, r();
    } finally {
      Pt = l;
    }
  }, Kt = function(n, r, l) {
    switch (r) {
      case "input":
        if (qr(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var u = l[r];
            if (u !== n && u.form === n.form) {
              var c = gn(u);
              if (!c) throw Error(h(90));
              Dr(u), qr(u, c);
            }
          }
        }
        break;
      case "textarea":
        qa(n, l);
        break;
      case "select":
        r = l.value, r != null && Tn(n, !!l.multiple, r, !1);
    }
  }, lo = ip, Sl = Po;
  var qy = { usingClientEntryPoint: !1, Events: [Je, li, gn, Wi, io, ip] }, Ks = { findFiberByHostInstance: Co, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Mh = { bundleType: Ks.bundleType, version: Ks.version, rendererPackageName: Ks.rendererPackageName, rendererConfig: Ks.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ee.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = xn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Ks.findFiberByHostInstance || Lh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ql = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ql.isDisabled && Ql.supportsFiber) try {
      El = Ql.inject(Mh), Kr = Ql;
    } catch {
    }
  }
  return Qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qy, Qa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!pp(r)) throw Error(h(200));
    return Qy(n, r, null, l);
  }, Qa.createRoot = function(n, r) {
    if (!pp(n)) throw Error(h(299));
    var l = !1, u = "", c = Ho;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Ef(n, 1, !1, null, null, l, !1, u, c), n[Zi] = r.current, yu(n.nodeType === 8 ? n.parentNode : n), new dp(r);
  }, Qa.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(h(188)) : (n = Object.keys(n).join(","), Error(h(268, n)));
    return n = xn(r), n = n === null ? null : n.stateNode, n;
  }, Qa.flushSync = function(n) {
    return Po(n);
  }, Qa.hydrate = function(n, r, l) {
    if (!wf(r)) throw Error(h(200));
    return qs(null, n, r, !0, l);
  }, Qa.hydrateRoot = function(n, r, l) {
    if (!pp(n)) throw Error(h(405));
    var u = l != null && l.hydratedSources || null, c = !1, d = "", _ = Ho;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (_ = l.onRecoverableError)), r = Oh(r, null, n, 1, l ?? null, c, !1, d, _), n[Zi] = r.current, yu(n), u) for (n = 0; n < u.length; n++) l = u[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new xf(r);
  }, Qa.render = function(n, r, l) {
    if (!wf(r)) throw Error(h(200));
    return qs(null, n, r, !1, l);
  }, Qa.unmountComponentAtNode = function(n) {
    if (!wf(n)) throw Error(h(40));
    return n._reactRootContainer ? (Po(function() {
      qs(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Zi] = null;
      });
    }), !0) : !1;
  }, Qa.unstable_batchedUpdates = ip, Qa.unstable_renderSubtreeIntoContainer = function(n, r, l, u) {
    if (!wf(l)) throw Error(h(200));
    if (n == null || n._reactInternals === void 0) throw Error(h(38));
    return qs(n, r, l, !1, u);
  }, Qa.version = "18.3.1-next-f1338f8080-20240426", Qa;
}
var Ga = {};
var GE;
function iO() {
  return GE || (GE = 1, process.env.NODE_ENV !== "production" && (function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var m = yv(), y = f2(), h = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, R = !1;
    function L(e) {
      R = e;
    }
    function b(e) {
      if (!R) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        j("warn", e, a);
      }
    }
    function v(e) {
      if (!R) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        j("error", e, a);
      }
    }
    function j(e, t, a) {
      {
        var i = h.ReactDebugCurrentFrame, o = i.getStackAddendum();
        o !== "" && (t += "%s", a = a.concat([o]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var k = 0, T = 1, F = 2, $ = 3, Q = 4, q = 5, ae = 6, he = 7, fe = 8, We = 9, Se = 10, ge = 11, Ee = 12, ve = 13, Qe = 14, Pe = 15, He = 16, Xe = 17, ot = 18, ut = 19, K = 21, ee = 22, be = 23, Ve = 24, we = 25, _e = !0, te = !1, Oe = !1, me = !1, U = !1, X = !0, Ze = !0, Ue = !0, ht = !0, tt = /* @__PURE__ */ new Set(), Le = {}, st = {};
    function dt(e, t) {
      Gt(e, t), Gt(e + "Capture", t);
    }
    function Gt(e, t) {
      Le[e] && v("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Le[e] = t;
      {
        var a = e.toLowerCase();
        st[a] = e, e === "onDoubleClick" && (st.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        tt.add(t[i]);
    }
    var Mn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Dr = Object.prototype.hasOwnProperty;
    function bn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function lr(e) {
      try {
        return $n(e), !1;
      } catch {
        return !0;
      }
    }
    function $n(e) {
      return "" + e;
    }
    function Wn(e, t) {
      if (lr(e))
        return v("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, bn(e)), $n(e);
    }
    function qr(e) {
      if (lr(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", bn(e)), $n(e);
    }
    function vi(e, t) {
      if (lr(e))
        return v("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, bn(e)), $n(e);
    }
    function pa(e, t) {
      if (lr(e))
        return v("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, bn(e)), $n(e);
    }
    function Jn(e) {
      if (lr(e))
        return v("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", bn(e)), $n(e);
    }
    function Tn(e) {
      if (lr(e))
        return v("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", bn(e)), $n(e);
    }
    var Yn = 0, Er = 1, qa = 2, An = 3, Rr = 4, va = 5, Ka = 6, hi = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ce = hi + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ge = new RegExp("^[" + hi + "][" + Ce + "]*$"), bt = {}, Wt = {};
    function an(e) {
      return Dr.call(Wt, e) ? !0 : Dr.call(bt, e) ? !1 : Ge.test(e) ? (Wt[e] = !0, !0) : (bt[e] = !0, v("Invalid attribute name: `%s`", e), !1);
    }
    function mn(e, t, a) {
      return t !== null ? t.type === Yn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function cn(e, t, a, i) {
      if (a !== null && a.type === Yn)
        return !1;
      switch (typeof t) {
        case "function":
        // $FlowIssue symbol is perfectly valid here
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var o = e.toLowerCase().slice(0, 5);
          return o !== "data-" && o !== "aria-";
        }
        default:
          return !1;
      }
    }
    function er(e, t, a, i) {
      if (t === null || typeof t > "u" || cn(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case An:
            return !t;
          case Rr:
            return t === !1;
          case va:
            return isNaN(t);
          case Ka:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function ln(e) {
      return Kt.hasOwnProperty(e) ? Kt[e] : null;
    }
    function qt(e, t, a, i, o, s, f) {
      this.acceptsBooleans = t === qa || t === An || t === Rr, this.attributeName = i, this.attributeNamespace = o, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Kt = {}, ha = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    ha.forEach(function(e) {
      Kt[e] = new qt(
        e,
        Yn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Kt[t] = new qt(
        t,
        Er,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Kt[e] = new qt(
        e,
        qa,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Kt[e] = new qt(
        e,
        qa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Kt[e] = new qt(
        e,
        An,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Kt[e] = new qt(
        e,
        An,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Kt[e] = new qt(
        e,
        Rr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Kt[e] = new qt(
        e,
        Ka,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Kt[e] = new qt(
        e,
        va,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var br = /[\-\:]([a-z])/g, ka = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(br, ka);
      Kt[t] = new qt(
        t,
        Er,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(br, ka);
      Kt[t] = new qt(
        t,
        Er,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(br, ka);
      Kt[t] = new qt(
        t,
        Er,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Kt[e] = new qt(
        e,
        Er,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Wi = "xlinkHref";
    Kt[Wi] = new qt(
      "xlinkHref",
      Er,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Kt[e] = new qt(
        e,
        Er,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var io = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, lo = !1;
    function Sl(e) {
      !lo && io.test(e) && (lo = !0, v("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function _l(e, t, a, i) {
      if (i.mustUseProperty) {
        var o = i.propertyName;
        return e[o];
      } else {
        Wn(a, t), i.sanitizeURL && Sl("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Rr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : er(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (er(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === An)
            return a;
          f = e.getAttribute(s);
        }
        return er(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function oo(e, t, a, i) {
      {
        if (!an(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var o = e.getAttribute(t);
        return Wn(a, t), o === "" + a ? a : o;
      }
    }
    function Or(e, t, a, i) {
      var o = ln(t);
      if (!mn(t, o, i)) {
        if (er(t, a, o, i) && (a = null), i || o === null) {
          if (an(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Wn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = o.mustUseProperty;
        if (f) {
          var p = o.propertyName;
          if (a === null) {
            var g = o.type;
            e[p] = g === An ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var C = o.attributeName, E = o.attributeNamespace;
        if (a === null)
          e.removeAttribute(C);
        else {
          var A = o.type, N;
          A === An || A === Rr && a === !0 ? N = "" : (Wn(a, C), N = "" + a, o.sanitizeURL && Sl(N.toString())), E ? e.setAttributeNS(E, C, N) : e.setAttribute(C, N);
        }
      }
    }
    var Lr = /* @__PURE__ */ Symbol.for("react.element"), or = /* @__PURE__ */ Symbol.for("react.portal"), mi = /* @__PURE__ */ Symbol.for("react.fragment"), Xa = /* @__PURE__ */ Symbol.for("react.strict_mode"), yi = /* @__PURE__ */ Symbol.for("react.profiler"), gi = /* @__PURE__ */ Symbol.for("react.provider"), D = /* @__PURE__ */ Symbol.for("react.context"), ie = /* @__PURE__ */ Symbol.for("react.forward_ref"), xe = /* @__PURE__ */ Symbol.for("react.suspense"), Fe = /* @__PURE__ */ Symbol.for("react.suspense_list"), St = /* @__PURE__ */ Symbol.for("react.memo"), mt = /* @__PURE__ */ Symbol.for("react.lazy"), kt = /* @__PURE__ */ Symbol.for("react.scope"), xt = /* @__PURE__ */ Symbol.for("react.debug_trace_mode"), xn = /* @__PURE__ */ Symbol.for("react.offscreen"), on = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), fn = /* @__PURE__ */ Symbol.for("react.cache"), ur = /* @__PURE__ */ Symbol.for("react.tracing_marker"), Za = Symbol.iterator, Ja = "@@iterator";
    function _t(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Za && e[Za] || e[Ja];
      return typeof t == "function" ? t : null;
    }
    var Rt = Object.assign, ei = 0, uo, so, Cl, nu, El, Kr, es;
    function Nr() {
    }
    Nr.__reactDisabledLog = !0;
    function gc() {
      {
        if (ei === 0) {
          uo = console.log, so = console.info, Cl = console.warn, nu = console.error, El = console.group, Kr = console.groupCollapsed, es = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Nr,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        ei++;
      }
    }
    function Sc() {
      {
        if (ei--, ei === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Rt({}, e, {
              value: uo
            }),
            info: Rt({}, e, {
              value: so
            }),
            warn: Rt({}, e, {
              value: Cl
            }),
            error: Rt({}, e, {
              value: nu
            }),
            group: Rt({}, e, {
              value: El
            }),
            groupCollapsed: Rt({}, e, {
              value: Kr
            }),
            groupEnd: Rt({}, e, {
              value: es
            })
          });
        }
        ei < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ru = h.ReactCurrentDispatcher, Rl;
    function ma(e, t, a) {
      {
        if (Rl === void 0)
          try {
            throw Error();
          } catch (o) {
            var i = o.stack.trim().match(/\n( *(at )?)/);
            Rl = i && i[1] || "";
          }
        return `
` + Rl + e;
      }
    }
    var ti = !1, ni;
    {
      var au = typeof WeakMap == "function" ? WeakMap : Map;
      ni = new au();
    }
    function co(e, t) {
      if (!e || ti)
        return "";
      {
        var a = ni.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      ti = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = ru.current, ru.current = null, gc();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (Y) {
              i = Y;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (Y) {
              i = Y;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Y) {
            i = Y;
          }
          e();
        }
      } catch (Y) {
        if (Y && i && typeof Y.stack == "string") {
          for (var p = Y.stack.split(`
`), g = i.stack.split(`
`), C = p.length - 1, E = g.length - 1; C >= 1 && E >= 0 && p[C] !== g[E]; )
            E--;
          for (; C >= 1 && E >= 0; C--, E--)
            if (p[C] !== g[E]) {
              if (C !== 1 || E !== 1)
                do
                  if (C--, E--, E < 0 || p[C] !== g[E]) {
                    var A = `
` + p[C].replace(" at new ", " at ");
                    return e.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", e.displayName)), typeof e == "function" && ni.set(e, A), A;
                  }
                while (C >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        ti = !1, ru.current = s, Sc(), Error.prepareStackTrace = o;
      }
      var N = e ? e.displayName || e.name : "", I = N ? ma(N) : "";
      return typeof e == "function" && ni.set(e, I), I;
    }
    function bl(e, t, a) {
      return co(e, !0);
    }
    function iu(e, t, a) {
      return co(e, !1);
    }
    function lu(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Yi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return co(e, lu(e));
      if (typeof e == "string")
        return ma(e);
      switch (e) {
        case xe:
          return ma("Suspense");
        case Fe:
          return ma("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ie:
            return iu(e.render);
          case St:
            return Yi(e.type, t, a);
          case mt: {
            var i = e, o = i._payload, s = i._init;
            try {
              return Yi(s(o), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function ud(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case q:
          return ma(e.type);
        case He:
          return ma("Lazy");
        case ve:
          return ma("Suspense");
        case ut:
          return ma("SuspenseList");
        case k:
        case F:
        case Pe:
          return iu(e.type);
        case ge:
          return iu(e.type.render);
        case T:
          return bl(e.type);
        default:
          return "";
      }
    }
    function Qi(e) {
      try {
        var t = "", a = e;
        do
          t += ud(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Pt(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var o = t.displayName || t.name || "";
      return o !== "" ? a + "(" + o + ")" : a;
    }
    function ou(e) {
      return e.displayName || "Context";
    }
    function jt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case mi:
          return "Fragment";
        case or:
          return "Portal";
        case yi:
          return "Profiler";
        case Xa:
          return "StrictMode";
        case xe:
          return "Suspense";
        case Fe:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case D:
            var t = e;
            return ou(t) + ".Consumer";
          case gi:
            var a = e;
            return ou(a._context) + ".Provider";
          case ie:
            return Pt(e, e.render, "ForwardRef");
          case St:
            var i = e.displayName || null;
            return i !== null ? i : jt(e.type) || "Memo";
          case mt: {
            var o = e, s = o._payload, f = o._init;
            try {
              return jt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function ts(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Si(e) {
      return e.displayName || "Context";
    }
    function vt(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Ve:
          return "Cache";
        case We:
          var i = a;
          return Si(i) + ".Consumer";
        case Se:
          var o = a;
          return Si(o._context) + ".Provider";
        case ot:
          return "DehydratedFragment";
        case ge:
          return ts(a, a.render, "ForwardRef");
        case he:
          return "Fragment";
        case q:
          return a;
        case Q:
          return "Portal";
        case $:
          return "Root";
        case ae:
          return "Text";
        case He:
          return jt(a);
        case fe:
          return a === Xa ? "StrictMode" : "Mode";
        case ee:
          return "Offscreen";
        case Ee:
          return "Profiler";
        case K:
          return "Scope";
        case ve:
          return "Suspense";
        case ut:
          return "SuspenseList";
        case we:
          return "TracingMarker";
        // The display name for this tags come from the user-provided type:
        case T:
        case k:
        case Xe:
        case F:
        case Qe:
        case Pe:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var uu = h.ReactDebugCurrentFrame, sr = null, _i = !1;
    function Mr() {
      {
        if (sr === null)
          return null;
        var e = sr._debugOwner;
        if (e !== null && typeof e < "u")
          return vt(e);
      }
      return null;
    }
    function Ci() {
      return sr === null ? "" : Qi(sr);
    }
    function dn() {
      uu.getCurrentStack = null, sr = null, _i = !1;
    }
    function Xt(e) {
      uu.getCurrentStack = e === null ? null : Ci, sr = e, _i = !1;
    }
    function Tl() {
      return sr;
    }
    function Qn(e) {
      _i = e;
    }
    function Ar(e) {
      return "" + e;
    }
    function Da(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Tn(e), e;
        default:
          return "";
      }
    }
    var fo = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function ns(e, t) {
      fo[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || v("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || v("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function rs(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function xl(e) {
      return e._valueTracker;
    }
    function po(e) {
      e._valueTracker = null;
    }
    function sd(e) {
      var t = "";
      return e && (rs(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Oa(e) {
      var t = rs(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Tn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var o = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(p) {
            Tn(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Tn(p), i = "" + p;
          },
          stopTracking: function() {
            po(e), delete e[t];
          }
        };
        return f;
      }
    }
    function ri(e) {
      xl(e) || (e._valueTracker = Oa(e));
    }
    function Ei(e) {
      if (!e)
        return !1;
      var t = xl(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = sd(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function La(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var su = !1, cu = !1, wl = !1, vo = !1;
    function fu(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function du(e, t) {
      var a = e, i = t.checked, o = Rt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return o;
    }
    function ai(e, t) {
      ns("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !cu && (v("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Mr() || "A component", t.type), cu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !su && (v("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Mr() || "A component", t.type), su = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Da(t.value != null ? t.value : i),
        controlled: fu(t)
      };
    }
    function S(e, t) {
      var a = e, i = t.checked;
      i != null && Or(a, "checked", i, !1);
    }
    function w(e, t) {
      var a = e;
      {
        var i = fu(t);
        !a._wrapperState.controlled && i && !vo && (v("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), vo = !0), a._wrapperState.controlled && !i && !wl && (v("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), wl = !0);
      }
      S(e, t);
      var o = Da(t.value), s = t.type;
      if (o != null)
        s === "number" ? (o === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != o) && (a.value = Ar(o)) : a.value !== Ar(o) && (a.value = Ar(o));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? nt(a, t.type, o) : t.hasOwnProperty("defaultValue") && nt(a, t.type, Da(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function B(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var o = t.type, s = o === "submit" || o === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Ar(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function G(e, t) {
      var a = e;
      w(a, t), ye(a, t);
    }
    function ye(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Wn(a, "name");
        for (var o = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < o.length; s++) {
          var f = o[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Xh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Ei(f), w(f, p);
          }
        }
      }
    }
    function nt(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || La(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Ar(e._wrapperState.initialValue) : e.defaultValue !== Ar(a) && (e.defaultValue = Ar(a)));
    }
    var Te = !1, it = !1, Dt = !1;
    function zt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? m.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || it || (it = !0, v("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Dt || (Dt = !0, v("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Te && (v("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Te = !0);
    }
    function un(e, t) {
      t.value != null && e.setAttribute("value", Ar(Da(t.value)));
    }
    var Zt = Array.isArray;
    function Tt(e) {
      return Zt(e);
    }
    var Jt;
    Jt = !1;
    function yn() {
      var e = Mr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var kl = ["value", "defaultValue"];
    function as(e) {
      {
        ns("select", e);
        for (var t = 0; t < kl.length; t++) {
          var a = kl[t];
          if (e[a] != null) {
            var i = Tt(e[a]);
            e.multiple && !i ? v("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, yn()) : !e.multiple && i && v("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, yn());
          }
        }
      }
    }
    function Gi(e, t, a, i) {
      var o = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var g = 0; g < o.length; g++) {
          var C = f.hasOwnProperty("$" + o[g].value);
          o[g].selected !== C && (o[g].selected = C), C && i && (o[g].defaultSelected = !0);
        }
      } else {
        for (var E = Ar(Da(a)), A = null, N = 0; N < o.length; N++) {
          if (o[N].value === E) {
            o[N].selected = !0, i && (o[N].defaultSelected = !0);
            return;
          }
          A === null && !o[N].disabled && (A = o[N]);
        }
        A !== null && (A.selected = !0);
      }
    }
    function is(e, t) {
      return Rt({}, t, {
        value: void 0
      });
    }
    function ho(e, t) {
      var a = e;
      as(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Jt && (v("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Jt = !0);
    }
    function cd(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Gi(a, !!t.multiple, i, !1) : t.defaultValue != null && Gi(a, !!t.multiple, t.defaultValue, !0);
    }
    function _c(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var o = t.value;
      o != null ? Gi(a, !!t.multiple, o, !1) : i !== !!t.multiple && (t.defaultValue != null ? Gi(a, !!t.multiple, t.defaultValue, !0) : Gi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function fd(e, t) {
      var a = e, i = t.value;
      i != null && Gi(a, !!t.multiple, i, !1);
    }
    var _v = !1;
    function dd(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Rt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Ar(a._wrapperState.initialValue)
      });
      return i;
    }
    function pd(e, t) {
      var a = e;
      ns("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !_v && (v("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Mr() || "A component"), _v = !0);
      var i = t.value;
      if (i == null) {
        var o = t.children, s = t.defaultValue;
        if (o != null) {
          v("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Tt(o)) {
              if (o.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              o = o[0];
            }
            s = o;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: Da(i)
      };
    }
    function Cv(e, t) {
      var a = e, i = Da(t.value), o = Da(t.defaultValue);
      if (i != null) {
        var s = Ar(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      o != null && (a.defaultValue = Ar(o));
    }
    function Ev(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function by(e, t) {
      Cv(e, t);
    }
    var qi = "http://www.w3.org/1999/xhtml", vd = "http://www.w3.org/1998/Math/MathML", hd = "http://www.w3.org/2000/svg";
    function md(e) {
      switch (e) {
        case "svg":
          return hd;
        case "math":
          return vd;
        default:
          return qi;
      }
    }
    function yd(e, t) {
      return e == null || e === qi ? md(t) : e === hd && t === "foreignObject" ? qi : e;
    }
    var Rv = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, o) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, o);
        });
      } : e;
    }, Cc, bv = Rv(function(e, t) {
      if (e.namespaceURI === hd && !("innerHTML" in e)) {
        Cc = Cc || document.createElement("div"), Cc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Cc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Xr = 1, Ki = 3, Un = 8, Xi = 9, gd = 11, pu = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Ki) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, ls = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, os = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Tv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var xv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(os).forEach(function(e) {
      xv.forEach(function(t) {
        os[Tv(t, e)] = os[e];
      });
    });
    function Ec(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(os.hasOwnProperty(e) && os[e]) ? t + "px" : (pa(t, e), ("" + t).trim());
    }
    var wv = /([A-Z])/g, kv = /^ms-/;
    function vu(e) {
      return e.replace(wv, "-$1").toLowerCase().replace(kv, "-ms-");
    }
    var Dv = function() {
    };
    {
      var Ty = /^(?:webkit|moz|o)[A-Z]/, xy = /^-ms-/, Ov = /-(.)/g, Sd = /;\s*$/, Ri = {}, mo = {}, Lv = !1, us = !1, wy = function(e) {
        return e.replace(Ov, function(t, a) {
          return a.toUpperCase();
        });
      }, Nv = function(e) {
        Ri.hasOwnProperty(e) && Ri[e] || (Ri[e] = !0, v(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          wy(e.replace(xy, "ms-"))
        ));
      }, _d = function(e) {
        Ri.hasOwnProperty(e) && Ri[e] || (Ri[e] = !0, v("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Cd = function(e, t) {
        mo.hasOwnProperty(t) && mo[t] || (mo[t] = !0, v(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Sd, "")));
      }, Mv = function(e, t) {
        Lv || (Lv = !0, v("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Av = function(e, t) {
        us || (us = !0, v("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Dv = function(e, t) {
        e.indexOf("-") > -1 ? Nv(e) : Ty.test(e) ? _d(e) : Sd.test(t) && Cd(e, t), typeof t == "number" && (isNaN(t) ? Mv(e, t) : isFinite(t) || Av(e, t));
      };
    }
    var Uv = Dv;
    function ky(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var o = e[i];
            if (o != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : vu(i)) + ":", t += Ec(i, o, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function jv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var o = i.indexOf("--") === 0;
          o || Uv(i, t[i]);
          var s = Ec(i, t[i], o);
          i === "float" && (i = "cssFloat"), o ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Dy(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function zv(e) {
      var t = {};
      for (var a in e)
        for (var i = ls[a] || [a], o = 0; o < i.length; o++)
          t[i[o]] = a;
      return t;
    }
    function Oy(e, t) {
      {
        if (!t)
          return;
        var a = zv(e), i = zv(t), o = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var g = f + "," + p;
            if (o[g])
              continue;
            o[g] = !0, v("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Dy(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var ii = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, ss = Rt({
      menuitem: !0
    }, ii), Fv = "__html";
    function Rc(e, t) {
      if (t) {
        if (ss[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Fv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && v("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Dl(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        // These are reserved SVG and MathML elements.
        // We don't mind this list too much because we expect it to never grow.
        // The alternative is to track the namespace in a few places which is convoluted.
        // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var cs = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, bc = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, hu = {}, Ly = new RegExp("^(aria)-[" + Ce + "]*$"), mu = new RegExp("^(aria)[A-Z][" + Ce + "]*$");
    function Ed(e, t) {
      {
        if (Dr.call(hu, t) && hu[t])
          return !0;
        if (mu.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = bc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return v("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), hu[t] = !0, !0;
          if (t !== i)
            return v("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), hu[t] = !0, !0;
        }
        if (Ly.test(t)) {
          var o = t.toLowerCase(), s = bc.hasOwnProperty(o) ? o : null;
          if (s == null)
            return hu[t] = !0, !1;
          if (t !== s)
            return v("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), hu[t] = !0, !0;
        }
      }
      return !0;
    }
    function fs(e, t) {
      {
        var a = [];
        for (var i in t) {
          var o = Ed(e, i);
          o || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? v("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && v("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Rd(e, t) {
      Dl(e, t) || fs(e, t);
    }
    var bd = !1;
    function Tc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !bd && (bd = !0, e === "select" && t.multiple ? v("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : v("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var yo = function() {
    };
    {
      var cr = {}, Td = /^on./, xc = /^on[^A-Z]/, Pv = new RegExp("^(aria)-[" + Ce + "]*$"), Vv = new RegExp("^(aria)[A-Z][" + Ce + "]*$");
      yo = function(e, t, a, i) {
        if (Dr.call(cr, t) && cr[t])
          return !0;
        var o = t.toLowerCase();
        if (o === "onfocusin" || o === "onfocusout")
          return v("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), cr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(o) ? f[o] : null;
          if (p != null)
            return v("Invalid event handler property `%s`. Did you mean `%s`?", t, p), cr[t] = !0, !0;
          if (Td.test(t))
            return v("Unknown event handler property `%s`. It will be ignored.", t), cr[t] = !0, !0;
        } else if (Td.test(t))
          return xc.test(t) && v("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), cr[t] = !0, !0;
        if (Pv.test(t) || Vv.test(t))
          return !0;
        if (o === "innerhtml")
          return v("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), cr[t] = !0, !0;
        if (o === "aria")
          return v("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), cr[t] = !0, !0;
        if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
          return v("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), cr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return v("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), cr[t] = !0, !0;
        var g = ln(t), C = g !== null && g.type === Yn;
        if (cs.hasOwnProperty(o)) {
          var E = cs[o];
          if (E !== t)
            return v("Invalid DOM property `%s`. Did you mean `%s`?", t, E), cr[t] = !0, !0;
        } else if (!C && t !== o)
          return v("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, o), cr[t] = !0, !0;
        return typeof a == "boolean" && cn(t, a, g, !1) ? (a ? v('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : v('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), cr[t] = !0, !0) : C ? !0 : cn(t, a, g, !1) ? (cr[t] = !0, !1) : ((a === "false" || a === "true") && g !== null && g.type === An && (v("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), cr[t] = !0), !0);
      };
    }
    var Hv = function(e, t, a) {
      {
        var i = [];
        for (var o in t) {
          var s = yo(e, o, t[o], a);
          s || i.push(o);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? v("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && v("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Iv(e, t, a) {
      Dl(e, t) || Hv(e, t, a);
    }
    var xd = 1, wc = 2, Na = 4, wd = xd | wc | Na, go = null;
    function Ny(e) {
      go !== null && v("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), go = e;
    }
    function My() {
      go === null && v("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), go = null;
    }
    function ds(e) {
      return e === go;
    }
    function kd(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Ki ? t.parentNode : t;
    }
    var kc = null, So = null, Yt = null;
    function Dc(e) {
      var t = zu(e);
      if (t) {
        if (typeof kc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Xh(a);
          kc(t.stateNode, t.type, i);
        }
      }
    }
    function Oc(e) {
      kc = e;
    }
    function yu(e) {
      So ? Yt ? Yt.push(e) : Yt = [e] : So = e;
    }
    function Bv() {
      return So !== null || Yt !== null;
    }
    function Lc() {
      if (So) {
        var e = So, t = Yt;
        if (So = null, Yt = null, Dc(e), t)
          for (var a = 0; a < t.length; a++)
            Dc(t[a]);
      }
    }
    var gu = function(e, t) {
      return e(t);
    }, ps = function() {
    }, Ol = !1;
    function $v() {
      var e = Bv();
      e && (ps(), Lc());
    }
    function Wv(e, t, a) {
      if (Ol)
        return e(t, a);
      Ol = !0;
      try {
        return gu(e, t, a);
      } finally {
        Ol = !1, $v();
      }
    }
    function Ay(e, t, a) {
      gu = e, ps = a;
    }
    function Yv(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Nc(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && Yv(t));
        default:
          return !1;
      }
    }
    function Ll(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Xh(a);
      if (i === null)
        return null;
      var o = i[t];
      if (Nc(t, e.type, i))
        return null;
      if (o && typeof o != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof o + "` type.");
      return o;
    }
    var vs = !1;
    if (Mn)
      try {
        var _o = {};
        Object.defineProperty(_o, "passive", {
          get: function() {
            vs = !0;
          }
        }), window.addEventListener("test", _o, _o), window.removeEventListener("test", _o, _o);
      } catch {
        vs = !1;
      }
    function Mc(e, t, a, i, o, s, f, p, g) {
      var C = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, C);
      } catch (E) {
        this.onError(E);
      }
    }
    var Ac = Mc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Dd = document.createElement("react");
      Ac = function(t, a, i, o, s, f, p, g, C) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var E = document.createEvent("Event"), A = !1, N = !0, I = window.event, Y = Object.getOwnPropertyDescriptor(window, "event");
        function Z() {
          Dd.removeEventListener(J, rt, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = I);
        }
        var De = Array.prototype.slice.call(arguments, 3);
        function rt() {
          A = !0, Z(), a.apply(i, De), N = !1;
        }
        var qe, Ut = !1, Ot = !1;
        function P(V) {
          if (qe = V.error, Ut = !0, qe === null && V.colno === 0 && V.lineno === 0 && (Ot = !0), V.defaultPrevented && qe != null && typeof qe == "object")
            try {
              qe._suppressLogging = !0;
            } catch {
            }
        }
        var J = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", P), Dd.addEventListener(J, rt, !1), E.initEvent(J, !1, !1), Dd.dispatchEvent(E), Y && Object.defineProperty(window, "event", Y), A && N && (Ut ? Ot && (qe = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : qe = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(qe)), window.removeEventListener("error", P), !A)
          return Z(), Mc.apply(this, arguments);
      };
    }
    var Qv = Ac, Su = !1, Uc = null, _u = !1, bi = null, Gv = {
      onError: function(e) {
        Su = !0, Uc = e;
      }
    };
    function Nl(e, t, a, i, o, s, f, p, g) {
      Su = !1, Uc = null, Qv.apply(Gv, arguments);
    }
    function Ti(e, t, a, i, o, s, f, p, g) {
      if (Nl.apply(this, arguments), Su) {
        var C = ms();
        _u || (_u = !0, bi = C);
      }
    }
    function hs() {
      if (_u) {
        var e = bi;
        throw _u = !1, bi = null, e;
      }
    }
    function Zi() {
      return Su;
    }
    function ms() {
      if (Su) {
        var e = Uc;
        return Su = !1, Uc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Cu(e) {
      return e._reactInternals;
    }
    function Uy(e) {
      return e._reactInternals !== void 0;
    }
    function Co(e, t) {
      e._reactInternals = t;
    }
    var Je = (
      /*                      */
      0
    ), li = (
      /*                */
      1
    ), gn = (
      /*                    */
      2
    ), Nt = (
      /*                       */
      4
    ), Ma = (
      /*                */
      16
    ), Aa = (
      /*                 */
      32
    ), sn = (
      /*                     */
      64
    ), Ke = (
      /*                   */
      128
    ), Tr = (
      /*            */
      256
    ), En = (
      /*                          */
      512
    ), Gn = (
      /*                     */
      1024
    ), Zr = (
      /*                      */
      2048
    ), Jr = (
      /*                    */
      4096
    ), jn = (
      /*                   */
      8192
    ), Eu = (
      /*             */
      16384
    ), qv = (
      /*               */
      32767
    ), ys = (
      /*                   */
      32768
    ), tr = (
      /*                */
      65536
    ), jc = (
      /* */
      131072
    ), xi = (
      /*                       */
      1048576
    ), Ru = (
      /*                    */
      2097152
    ), Ji = (
      /*                 */
      4194304
    ), zc = (
      /*                */
      8388608
    ), Ml = (
      /*               */
      16777216
    ), wi = (
      /*              */
      33554432
    ), Al = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Nt | Gn | 0
    ), Ul = gn | Nt | Ma | Aa | En | Jr | jn, jl = Nt | sn | En | jn, el = Zr | Ma, zn = Ji | zc | Ru, Ua = h.ReactCurrentOwner;
    function ya(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (gn | Jr)) !== Je && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === $ ? a : null;
    }
    function ki(e) {
      if (e.tag === ve) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Di(e) {
      return e.tag === $ ? e.stateNode.containerInfo : null;
    }
    function Eo(e) {
      return ya(e) === e;
    }
    function Kv(e) {
      {
        var t = Ua.current;
        if (t !== null && t.tag === T) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || v("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", vt(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var o = Cu(e);
      return o ? ya(o) === o : !1;
    }
    function Fc(e) {
      if (ya(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Pc(e) {
      var t = e.alternate;
      if (!t) {
        var a = ya(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, o = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = o = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var g = s.child; g; ) {
            if (g === i)
              return Fc(s), e;
            if (g === o)
              return Fc(s), t;
            g = g.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== o.return)
          i = s, o = f;
        else {
          for (var C = !1, E = s.child; E; ) {
            if (E === i) {
              C = !0, i = s, o = f;
              break;
            }
            if (E === o) {
              C = !0, o = s, i = f;
              break;
            }
            E = E.sibling;
          }
          if (!C) {
            for (E = f.child; E; ) {
              if (E === i) {
                C = !0, i = f, o = s;
                break;
              }
              if (E === o) {
                C = !0, o = f, i = s;
                break;
              }
              E = E.sibling;
            }
            if (!C)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== o)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== $)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function ea(e) {
      var t = Pc(e);
      return t !== null ? ta(t) : null;
    }
    function ta(e) {
      if (e.tag === q || e.tag === ae)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = ta(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function vn(e) {
      var t = Pc(e);
      return t !== null ? ja(t) : null;
    }
    function ja(e) {
      if (e.tag === q || e.tag === ae)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== Q) {
          var a = ja(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Od = y.unstable_scheduleCallback, Xv = y.unstable_cancelCallback, Ld = y.unstable_shouldYield, Nd = y.unstable_requestPaint, qn = y.unstable_now, Vc = y.unstable_getCurrentPriorityLevel, gs = y.unstable_ImmediatePriority, zl = y.unstable_UserBlockingPriority, tl = y.unstable_NormalPriority, jy = y.unstable_LowPriority, Ro = y.unstable_IdlePriority, Hc = y.unstable_yieldValue, Zv = y.unstable_setDisableYieldValue, bo = null, wn = null, ke = null, ga = !1, na = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function bu(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return v("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Ze && (e = Rt({}, e, {
          getLaneLabelMap: To,
          injectProfilingHooks: za
        })), bo = t.inject(e), wn = t;
      } catch (a) {
        v("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Md(e, t) {
      if (wn && typeof wn.onScheduleFiberRoot == "function")
        try {
          wn.onScheduleFiberRoot(bo, e, t);
        } catch (a) {
          ga || (ga = !0, v("React instrumentation encountered an error: %s", a));
        }
    }
    function Ad(e, t) {
      if (wn && typeof wn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Ke) === Ke;
          if (Ue) {
            var i;
            switch (t) {
              case Ur:
                i = gs;
                break;
              case Li:
                i = zl;
                break;
              case Fa:
                i = tl;
                break;
              case Pa:
                i = Ro;
                break;
              default:
                i = tl;
                break;
            }
            wn.onCommitFiberRoot(bo, e, i, a);
          }
        } catch (o) {
          ga || (ga = !0, v("React instrumentation encountered an error: %s", o));
        }
    }
    function Ud(e) {
      if (wn && typeof wn.onPostCommitFiberRoot == "function")
        try {
          wn.onPostCommitFiberRoot(bo, e);
        } catch (t) {
          ga || (ga = !0, v("React instrumentation encountered an error: %s", t));
        }
    }
    function jd(e) {
      if (wn && typeof wn.onCommitFiberUnmount == "function")
        try {
          wn.onCommitFiberUnmount(bo, e);
        } catch (t) {
          ga || (ga = !0, v("React instrumentation encountered an error: %s", t));
        }
    }
    function Sn(e) {
      if (typeof Hc == "function" && (Zv(e), L(e)), wn && typeof wn.setStrictMode == "function")
        try {
          wn.setStrictMode(bo, e);
        } catch (t) {
          ga || (ga = !0, v("React instrumentation encountered an error: %s", t));
        }
    }
    function za(e) {
      ke = e;
    }
    function To() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < ko; a++) {
          var i = nh(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function zd(e) {
      ke !== null && typeof ke.markCommitStarted == "function" && ke.markCommitStarted(e);
    }
    function Fd() {
      ke !== null && typeof ke.markCommitStopped == "function" && ke.markCommitStopped();
    }
    function Sa(e) {
      ke !== null && typeof ke.markComponentRenderStarted == "function" && ke.markComponentRenderStarted(e);
    }
    function _a() {
      ke !== null && typeof ke.markComponentRenderStopped == "function" && ke.markComponentRenderStopped();
    }
    function Pd(e) {
      ke !== null && typeof ke.markComponentPassiveEffectMountStarted == "function" && ke.markComponentPassiveEffectMountStarted(e);
    }
    function Jv() {
      ke !== null && typeof ke.markComponentPassiveEffectMountStopped == "function" && ke.markComponentPassiveEffectMountStopped();
    }
    function nl(e) {
      ke !== null && typeof ke.markComponentPassiveEffectUnmountStarted == "function" && ke.markComponentPassiveEffectUnmountStarted(e);
    }
    function Fl() {
      ke !== null && typeof ke.markComponentPassiveEffectUnmountStopped == "function" && ke.markComponentPassiveEffectUnmountStopped();
    }
    function Ic(e) {
      ke !== null && typeof ke.markComponentLayoutEffectMountStarted == "function" && ke.markComponentLayoutEffectMountStarted(e);
    }
    function eh() {
      ke !== null && typeof ke.markComponentLayoutEffectMountStopped == "function" && ke.markComponentLayoutEffectMountStopped();
    }
    function Ss(e) {
      ke !== null && typeof ke.markComponentLayoutEffectUnmountStarted == "function" && ke.markComponentLayoutEffectUnmountStarted(e);
    }
    function Vd() {
      ke !== null && typeof ke.markComponentLayoutEffectUnmountStopped == "function" && ke.markComponentLayoutEffectUnmountStopped();
    }
    function _s(e, t, a) {
      ke !== null && typeof ke.markComponentErrored == "function" && ke.markComponentErrored(e, t, a);
    }
    function Oi(e, t, a) {
      ke !== null && typeof ke.markComponentSuspended == "function" && ke.markComponentSuspended(e, t, a);
    }
    function Cs(e) {
      ke !== null && typeof ke.markLayoutEffectsStarted == "function" && ke.markLayoutEffectsStarted(e);
    }
    function Es() {
      ke !== null && typeof ke.markLayoutEffectsStopped == "function" && ke.markLayoutEffectsStopped();
    }
    function xo(e) {
      ke !== null && typeof ke.markPassiveEffectsStarted == "function" && ke.markPassiveEffectsStarted(e);
    }
    function Hd() {
      ke !== null && typeof ke.markPassiveEffectsStopped == "function" && ke.markPassiveEffectsStopped();
    }
    function wo(e) {
      ke !== null && typeof ke.markRenderStarted == "function" && ke.markRenderStarted(e);
    }
    function th() {
      ke !== null && typeof ke.markRenderYielded == "function" && ke.markRenderYielded();
    }
    function Bc() {
      ke !== null && typeof ke.markRenderStopped == "function" && ke.markRenderStopped();
    }
    function _n(e) {
      ke !== null && typeof ke.markRenderScheduled == "function" && ke.markRenderScheduled(e);
    }
    function $c(e, t) {
      ke !== null && typeof ke.markForceUpdateScheduled == "function" && ke.markForceUpdateScheduled(e, t);
    }
    function Rs(e, t) {
      ke !== null && typeof ke.markStateUpdateScheduled == "function" && ke.markStateUpdateScheduled(e, t);
    }
    var et = (
      /*                         */
      0
    ), wt = (
      /*                 */
      1
    ), Vt = (
      /*                    */
      2
    ), en = (
      /*               */
      8
    ), Ht = (
      /*              */
      16
    ), Fn = Math.clz32 ? Math.clz32 : bs, nr = Math.log, Wc = Math.LN2;
    function bs(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (nr(t) / Wc | 0) | 0;
    }
    var ko = 31, le = (
      /*                        */
      0
    ), Ft = (
      /*                          */
      0
    ), ct = (
      /*                        */
      1
    ), Pl = (
      /*    */
      2
    ), oi = (
      /*             */
      4
    ), xr = (
      /*            */
      8
    ), kn = (
      /*                     */
      16
    ), rl = (
      /*                */
      32
    ), Vl = (
      /*                       */
      4194240
    ), Do = (
      /*                        */
      64
    ), Yc = (
      /*                        */
      128
    ), Qc = (
      /*                        */
      256
    ), Gc = (
      /*                        */
      512
    ), qc = (
      /*                        */
      1024
    ), Kc = (
      /*                        */
      2048
    ), Xc = (
      /*                        */
      4096
    ), Zc = (
      /*                        */
      8192
    ), Jc = (
      /*                        */
      16384
    ), Oo = (
      /*                       */
      32768
    ), ef = (
      /*                       */
      65536
    ), Tu = (
      /*                       */
      131072
    ), xu = (
      /*                       */
      262144
    ), tf = (
      /*                       */
      524288
    ), Ts = (
      /*                       */
      1048576
    ), nf = (
      /*                       */
      2097152
    ), xs = (
      /*                            */
      130023424
    ), Lo = (
      /*                             */
      4194304
    ), rf = (
      /*                             */
      8388608
    ), ws = (
      /*                             */
      16777216
    ), af = (
      /*                             */
      33554432
    ), lf = (
      /*                             */
      67108864
    ), Id = Lo, ks = (
      /*          */
      134217728
    ), Bd = (
      /*                          */
      268435455
    ), Ds = (
      /*               */
      268435456
    ), No = (
      /*                        */
      536870912
    ), ra = (
      /*                   */
      1073741824
    );
    function nh(e) {
      {
        if (e & ct)
          return "Sync";
        if (e & Pl)
          return "InputContinuousHydration";
        if (e & oi)
          return "InputContinuous";
        if (e & xr)
          return "DefaultHydration";
        if (e & kn)
          return "Default";
        if (e & rl)
          return "TransitionHydration";
        if (e & Vl)
          return "Transition";
        if (e & xs)
          return "Retry";
        if (e & ks)
          return "SelectiveHydration";
        if (e & Ds)
          return "IdleHydration";
        if (e & No)
          return "Idle";
        if (e & ra)
          return "Offscreen";
      }
    }
    var rn = -1, Mo = Do, of = Lo;
    function Os(e) {
      switch (Hl(e)) {
        case ct:
          return ct;
        case Pl:
          return Pl;
        case oi:
          return oi;
        case xr:
          return xr;
        case kn:
          return kn;
        case rl:
          return rl;
        case Do:
        case Yc:
        case Qc:
        case Gc:
        case qc:
        case Kc:
        case Xc:
        case Zc:
        case Jc:
        case Oo:
        case ef:
        case Tu:
        case xu:
        case tf:
        case Ts:
        case nf:
          return e & Vl;
        case Lo:
        case rf:
        case ws:
        case af:
        case lf:
          return e & xs;
        case ks:
          return ks;
        case Ds:
          return Ds;
        case No:
          return No;
        case ra:
          return ra;
        default:
          return v("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function uf(e, t) {
      var a = e.pendingLanes;
      if (a === le)
        return le;
      var i = le, o = e.suspendedLanes, s = e.pingedLanes, f = a & Bd;
      if (f !== le) {
        var p = f & ~o;
        if (p !== le)
          i = Os(p);
        else {
          var g = f & s;
          g !== le && (i = Os(g));
        }
      } else {
        var C = a & ~o;
        C !== le ? i = Os(C) : s !== le && (i = Os(s));
      }
      if (i === le)
        return le;
      if (t !== le && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & o) === le) {
        var E = Hl(i), A = Hl(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          E >= A || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          E === kn && (A & Vl) !== le
        )
          return t;
      }
      (i & oi) !== le && (i |= a & kn);
      var N = e.entangledLanes;
      if (N !== le)
        for (var I = e.entanglements, Y = i & N; Y > 0; ) {
          var Z = Pn(Y), De = 1 << Z;
          i |= I[Z], Y &= ~De;
        }
      return i;
    }
    function ui(e, t) {
      for (var a = e.eventTimes, i = rn; t > 0; ) {
        var o = Pn(t), s = 1 << o, f = a[o];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function $d(e, t) {
      switch (e) {
        case ct:
        case Pl:
        case oi:
          return t + 250;
        case xr:
        case kn:
        case rl:
        case Do:
        case Yc:
        case Qc:
        case Gc:
        case qc:
        case Kc:
        case Xc:
        case Zc:
        case Jc:
        case Oo:
        case ef:
        case Tu:
        case xu:
        case tf:
        case Ts:
        case nf:
          return t + 5e3;
        case Lo:
        case rf:
        case ws:
        case af:
        case lf:
          return rn;
        case ks:
        case Ds:
        case No:
        case ra:
          return rn;
        default:
          return v("Should have found matching lanes. This is a bug in React."), rn;
      }
    }
    function sf(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, o = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Pn(f), g = 1 << p, C = s[p];
        C === rn ? ((g & i) === le || (g & o) !== le) && (s[p] = $d(g, t)) : C <= t && (e.expiredLanes |= g), f &= ~g;
      }
    }
    function rh(e) {
      return Os(e.pendingLanes);
    }
    function cf(e) {
      var t = e.pendingLanes & ~ra;
      return t !== le ? t : t & ra ? ra : le;
    }
    function ah(e) {
      return (e & ct) !== le;
    }
    function Ls(e) {
      return (e & Bd) !== le;
    }
    function Ao(e) {
      return (e & xs) === e;
    }
    function Wd(e) {
      var t = ct | oi | kn;
      return (e & t) === le;
    }
    function Yd(e) {
      return (e & Vl) === e;
    }
    function ff(e, t) {
      var a = Pl | oi | xr | kn;
      return (t & a) !== le;
    }
    function ih(e, t) {
      return (t & e.expiredLanes) !== le;
    }
    function Qd(e) {
      return (e & Vl) !== le;
    }
    function Gd() {
      var e = Mo;
      return Mo <<= 1, (Mo & Vl) === le && (Mo = Do), e;
    }
    function lh() {
      var e = of;
      return of <<= 1, (of & xs) === le && (of = Lo), e;
    }
    function Hl(e) {
      return e & -e;
    }
    function Ns(e) {
      return Hl(e);
    }
    function Pn(e) {
      return 31 - Fn(e);
    }
    function fr(e) {
      return Pn(e);
    }
    function aa(e, t) {
      return (e & t) !== le;
    }
    function Uo(e, t) {
      return (e & t) === t;
    }
    function Ct(e, t) {
      return e | t;
    }
    function Ms(e, t) {
      return e & ~t;
    }
    function qd(e, t) {
      return e & t;
    }
    function oh(e) {
      return e;
    }
    function uh(e, t) {
      return e !== Ft && e < t ? e : t;
    }
    function As(e) {
      for (var t = [], a = 0; a < ko; a++)
        t.push(e);
      return t;
    }
    function wu(e, t, a) {
      e.pendingLanes |= t, t !== No && (e.suspendedLanes = le, e.pingedLanes = le);
      var i = e.eventTimes, o = fr(t);
      i[o] = a;
    }
    function sh(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var o = Pn(i), s = 1 << o;
        a[o] = rn, i &= ~s;
      }
    }
    function df(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Kd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = le, e.pingedLanes = le, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, o = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Pn(f), g = 1 << p;
        i[p] = le, o[p] = rn, s[p] = rn, f &= ~g;
      }
    }
    function pf(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, o = a; o; ) {
        var s = Pn(o), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), o &= ~f;
      }
    }
    function Xd(e, t) {
      var a = Hl(t), i;
      switch (a) {
        case oi:
          i = Pl;
          break;
        case kn:
          i = xr;
          break;
        case Do:
        case Yc:
        case Qc:
        case Gc:
        case qc:
        case Kc:
        case Xc:
        case Zc:
        case Jc:
        case Oo:
        case ef:
        case Tu:
        case xu:
        case tf:
        case Ts:
        case nf:
        case Lo:
        case rf:
        case ws:
        case af:
        case lf:
          i = rl;
          break;
        case No:
          i = Ds;
          break;
        default:
          i = Ft;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Ft ? Ft : i;
    }
    function Us(e, t, a) {
      if (na)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var o = fr(a), s = 1 << o, f = i[o];
          f.add(t), a &= ~s;
        }
    }
    function ch(e, t) {
      if (na)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var o = fr(t), s = 1 << o, f = a[o];
          f.size > 0 && (f.forEach(function(p) {
            var g = p.alternate;
            (g === null || !i.has(g)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Zd(e, t) {
      return null;
    }
    var Ur = ct, Li = oi, Fa = kn, Pa = No, js = Ft;
    function Va() {
      return js;
    }
    function Vn(e) {
      js = e;
    }
    function fh(e, t) {
      var a = js;
      try {
        return js = e, t();
      } finally {
        js = a;
      }
    }
    function dh(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function zs(e, t) {
      return e > t ? e : t;
    }
    function rr(e, t) {
      return e !== 0 && e < t;
    }
    function ph(e) {
      var t = Hl(e);
      return rr(Ur, t) ? rr(Li, t) ? Ls(t) ? Fa : Pa : Li : Ur;
    }
    function vf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Fs;
    function wr(e) {
      Fs = e;
    }
    function zy(e) {
      Fs(e);
    }
    var ze;
    function ku(e) {
      ze = e;
    }
    var hf;
    function vh(e) {
      hf = e;
    }
    var hh;
    function Ps(e) {
      hh = e;
    }
    var Vs;
    function Jd(e) {
      Vs = e;
    }
    var mf = !1, Hs = [], al = null, Ni = null, Mi = null, Dn = /* @__PURE__ */ new Map(), jr = /* @__PURE__ */ new Map(), zr = [], mh = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function yh(e) {
      return mh.indexOf(e) > -1;
    }
    function si(e, t, a, i, o) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: o,
        targetContainers: [i]
      };
    }
    function ep(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          al = null;
          break;
        case "dragenter":
        case "dragleave":
          Ni = null;
          break;
        case "mouseover":
        case "mouseout":
          Mi = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Dn.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          jr.delete(i);
          break;
        }
      }
    }
    function ia(e, t, a, i, o, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = si(t, a, i, o, s);
        if (t !== null) {
          var p = zu(t);
          p !== null && ze(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var g = e.targetContainers;
      return o !== null && g.indexOf(o) === -1 && g.push(o), e;
    }
    function Fy(e, t, a, i, o) {
      switch (t) {
        case "focusin": {
          var s = o;
          return al = ia(al, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = o;
          return Ni = ia(Ni, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = o;
          return Mi = ia(Mi, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var g = o, C = g.pointerId;
          return Dn.set(C, ia(Dn.get(C) || null, e, t, a, i, g)), !0;
        }
        case "gotpointercapture": {
          var E = o, A = E.pointerId;
          return jr.set(A, ia(jr.get(A) || null, e, t, a, i, E)), !0;
        }
      }
      return !1;
    }
    function tp(e) {
      var t = Js(e.target);
      if (t !== null) {
        var a = ya(t);
        if (a !== null) {
          var i = a.tag;
          if (i === ve) {
            var o = ki(a);
            if (o !== null) {
              e.blockedOn = o, Vs(e.priority, function() {
                hf(a);
              });
              return;
            }
          } else if (i === $) {
            var s = a.stateNode;
            if (vf(s)) {
              e.blockedOn = Di(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function gh(e) {
      for (var t = hh(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < zr.length && rr(t, zr[i].priority); i++)
        ;
      zr.splice(i, 0, a), i === 0 && tp(a);
    }
    function Is(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Ou(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var o = e.nativeEvent, s = new o.constructor(o.type, o);
          Ny(s), o.target.dispatchEvent(s), My();
        } else {
          var f = zu(i);
          return f !== null && ze(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function np(e, t, a) {
      Is(e) && a.delete(t);
    }
    function Py() {
      mf = !1, al !== null && Is(al) && (al = null), Ni !== null && Is(Ni) && (Ni = null), Mi !== null && Is(Mi) && (Mi = null), Dn.forEach(np), jr.forEach(np);
    }
    function Il(e, t) {
      e.blockedOn === t && (e.blockedOn = null, mf || (mf = !0, y.unstable_scheduleCallback(y.unstable_NormalPriority, Py)));
    }
    function jo(e) {
      if (Hs.length > 0) {
        Il(Hs[0], e);
        for (var t = 1; t < Hs.length; t++) {
          var a = Hs[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      al !== null && Il(al, e), Ni !== null && Il(Ni, e), Mi !== null && Il(Mi, e);
      var i = function(p) {
        return Il(p, e);
      };
      Dn.forEach(i), jr.forEach(i);
      for (var o = 0; o < zr.length; o++) {
        var s = zr[o];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; zr.length > 0; ) {
        var f = zr[0];
        if (f.blockedOn !== null)
          break;
        tp(f), f.blockedOn === null && zr.shift();
      }
    }
    var dr = h.ReactCurrentBatchConfig, Mt = !0;
    function Kn(e) {
      Mt = !!e;
    }
    function Hn() {
      return Mt;
    }
    function pr(e, t, a) {
      var i = yf(t), o;
      switch (i) {
        case Ur:
          o = Ca;
          break;
        case Li:
          o = Du;
          break;
        case Fa:
        default:
          o = On;
          break;
      }
      return o.bind(null, t, a, e);
    }
    function Ca(e, t, a, i) {
      var o = Va(), s = dr.transition;
      dr.transition = null;
      try {
        Vn(Ur), On(e, t, a, i);
      } finally {
        Vn(o), dr.transition = s;
      }
    }
    function Du(e, t, a, i) {
      var o = Va(), s = dr.transition;
      dr.transition = null;
      try {
        Vn(Li), On(e, t, a, i);
      } finally {
        Vn(o), dr.transition = s;
      }
    }
    function On(e, t, a, i) {
      Mt && Bs(e, t, a, i);
    }
    function Bs(e, t, a, i) {
      var o = Ou(e, t, a, i);
      if (o === null) {
        ng(e, t, i, Ai, a), ep(e, i);
        return;
      }
      if (Fy(o, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (ep(e, i), t & Na && yh(e)) {
        for (; o !== null; ) {
          var s = zu(o);
          s !== null && zy(s);
          var f = Ou(e, t, a, i);
          if (f === null && ng(e, t, i, Ai, a), f === o)
            break;
          o = f;
        }
        o !== null && i.stopPropagation();
        return;
      }
      ng(e, t, i, null, a);
    }
    var Ai = null;
    function Ou(e, t, a, i) {
      Ai = null;
      var o = kd(i), s = Js(o);
      if (s !== null) {
        var f = ya(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === ve) {
            var g = ki(f);
            if (g !== null)
              return g;
            s = null;
          } else if (p === $) {
            var C = f.stateNode;
            if (vf(C))
              return Di(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Ai = s, null;
    }
    function yf(e) {
      switch (e) {
        // Used by SimpleEventPlugin:
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        // Used by polyfills:
        // eslint-disable-next-line no-fallthrough
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        // Only enableCreateEventHandleAPI:
        // eslint-disable-next-line no-fallthrough
        case "beforeblur":
        case "afterblur":
        // Not used by React but could be by user code:
        // eslint-disable-next-line no-fallthrough
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Ur;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        // Not used by React but could be by user code:
        // eslint-disable-next-line no-fallthrough
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Li;
        case "message": {
          var t = Vc();
          switch (t) {
            case gs:
              return Ur;
            case zl:
              return Li;
            case tl:
            case jy:
              return Fa;
            case Ro:
              return Pa;
            default:
              return Fa;
          }
        }
        default:
          return Fa;
      }
    }
    function $s(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function la(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function rp(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Lu(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Ea = null, Nu = null, zo = null;
    function Bl(e) {
      return Ea = e, Nu = Ws(), !0;
    }
    function gf() {
      Ea = null, Nu = null, zo = null;
    }
    function il() {
      if (zo)
        return zo;
      var e, t = Nu, a = t.length, i, o = Ws(), s = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === o[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return zo = o.slice(e, p), zo;
    }
    function Ws() {
      return "value" in Ea ? Ea.value : Ea.textContent;
    }
    function $l(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Mu() {
      return !0;
    }
    function Ys() {
      return !1;
    }
    function kr(e) {
      function t(a, i, o, s, f) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var g = e[p];
            g ? this[p] = g(s) : this[p] = s[p];
          }
        var C = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return C ? this.isDefaultPrevented = Mu : this.isDefaultPrevented = Ys, this.isPropagationStopped = Ys, this;
      }
      return Rt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Mu);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Mu);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: Mu
      }), t;
    }
    var In = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Ui = kr(In), Fr = Rt({}, In, {
      view: 0,
      detail: 0
    }), oa = kr(Fr), Sf, Qs, Fo;
    function Vy(e) {
      e !== Fo && (Fo && e.type === "mousemove" ? (Sf = e.screenX - Fo.screenX, Qs = e.screenY - Fo.screenY) : (Sf = 0, Qs = 0), Fo = e);
    }
    var ci = Rt({}, Fr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: hn,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Vy(e), Sf);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Qs;
      }
    }), ap = kr(ci), ip = Rt({}, ci, {
      dataTransfer: 0
    }), Po = kr(ip), lp = Rt({}, Fr, {
      relatedTarget: 0
    }), ll = kr(lp), Sh = Rt({}, In, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), _h = kr(Sh), op = Rt({}, In, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), _f = kr(op), Hy = Rt({}, In, {
      data: 0
    }), Ch = kr(Hy), Eh = Ch, Rh = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Vo = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function Iy(e) {
      if (e.key) {
        var t = Rh[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = $l(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Vo[e.keyCode] || "Unidentified" : "";
    }
    var Au = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function bh(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Au[e];
      return i ? !!a[i] : !1;
    }
    function hn(e) {
      return bh;
    }
    var By = Rt({}, Fr, {
      key: Iy,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: hn,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? $l(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? $l(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Th = kr(By), $y = Rt({}, ci, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), xh = kr($y), wh = Rt({}, Fr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: hn
    }), kh = kr(wh), Wy = Rt({}, In, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Ha = kr(Wy), up = Rt({}, ci, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Yy = kr(up), Wl = [9, 13, 27, 32], Gs = 229, ol = Mn && "CompositionEvent" in window, Yl = null;
    Mn && "documentMode" in document && (Yl = document.documentMode);
    var sp = Mn && "TextEvent" in window && !Yl, Cf = Mn && (!ol || Yl && Yl > 8 && Yl <= 11), Dh = 32, Ef = String.fromCharCode(Dh);
    function Qy() {
      dt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), dt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), dt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), dt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var cp = !1;
    function Oh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Rf(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function bf(e, t) {
      return e === "keydown" && t.keyCode === Gs;
    }
    function fp(e, t) {
      switch (e) {
        case "keyup":
          return Wl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Gs;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Tf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Lh(e) {
      return e.locale === "ko";
    }
    var Ho = !1;
    function dp(e, t, a, i, o) {
      var s, f;
      if (ol ? s = Rf(t) : Ho ? fp(t, i) && (s = "onCompositionEnd") : bf(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Cf && !Lh(i) && (!Ho && s === "onCompositionStart" ? Ho = Bl(o) : s === "onCompositionEnd" && Ho && (f = il()));
      var p = Fh(a, s);
      if (p.length > 0) {
        var g = new Ch(s, t, null, i, o);
        if (e.push({
          event: g,
          listeners: p
        }), f)
          g.data = f;
        else {
          var C = Tf(i);
          C !== null && (g.data = C);
        }
      }
    }
    function xf(e, t) {
      switch (e) {
        case "compositionend":
          return Tf(t);
        case "keypress":
          var a = t.which;
          return a !== Dh ? null : (cp = !0, Ef);
        case "textInput":
          var i = t.data;
          return i === Ef && cp ? null : i;
        default:
          return null;
      }
    }
    function pp(e, t) {
      if (Ho) {
        if (e === "compositionend" || !ol && fp(e, t)) {
          var a = il();
          return gf(), Ho = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Oh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Cf && !Lh(t) ? null : t.data;
        default:
          return null;
      }
    }
    function wf(e, t, a, i, o) {
      var s;
      if (sp ? s = xf(t, i) : s = pp(t, i), !s)
        return null;
      var f = Fh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new Eh("onBeforeInput", "beforeinput", null, i, o);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function Nh(e, t, a, i, o, s, f) {
      dp(e, t, a, i, o), wf(e, t, a, i, o);
    }
    var Gy = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function qs(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Gy[e.type] : t === "textarea";
    }
    function qy(e) {
      if (!Mn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Ks() {
      dt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function Mh(e, t, a, i) {
      yu(i);
      var o = Fh(t, "onChange");
      if (o.length > 0) {
        var s = new Ui("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: o
        });
      }
    }
    var Ql = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function l(e) {
      var t = [];
      Mh(t, n, e, kd(e)), Wv(u, t);
    }
    function u(e) {
      s_(e, 0);
    }
    function c(e) {
      var t = Mf(e);
      if (Ei(t))
        return e;
    }
    function d(e, t) {
      if (e === "change")
        return t;
    }
    var _ = !1;
    Mn && (_ = qy("input") && (!document.documentMode || document.documentMode > 9));
    function x(e, t) {
      Ql = e, n = t, Ql.attachEvent("onpropertychange", W);
    }
    function O() {
      Ql && (Ql.detachEvent("onpropertychange", W), Ql = null, n = null);
    }
    function W(e) {
      e.propertyName === "value" && c(n) && l(e);
    }
    function se(e, t, a) {
      e === "focusin" ? (O(), x(t, a)) : e === "focusout" && O();
    }
    function de(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return c(n);
    }
    function ue(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Me(e, t) {
      if (e === "click")
        return c(t);
    }
    function Ie(e, t) {
      if (e === "input" || e === "change")
        return c(t);
    }
    function Ye(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || nt(e, "number", e.value);
    }
    function Ln(e, t, a, i, o, s, f) {
      var p = a ? Mf(a) : window, g, C;
      if (r(p) ? g = d : qs(p) ? _ ? g = Ie : (g = de, C = se) : ue(p) && (g = Me), g) {
        var E = g(t, a);
        if (E) {
          Mh(e, E, i, o);
          return;
        }
      }
      C && C(t, p, a), t === "focusout" && Ye(p);
    }
    function z() {
      Gt("onMouseEnter", ["mouseout", "mouseover"]), Gt("onMouseLeave", ["mouseout", "mouseover"]), Gt("onPointerEnter", ["pointerout", "pointerover"]), Gt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function M(e, t, a, i, o, s, f) {
      var p = t === "mouseover" || t === "pointerover", g = t === "mouseout" || t === "pointerout";
      if (p && !ds(i)) {
        var C = i.relatedTarget || i.fromElement;
        if (C && (Js(C) || wp(C)))
          return;
      }
      if (!(!g && !p)) {
        var E;
        if (o.window === o)
          E = o;
        else {
          var A = o.ownerDocument;
          A ? E = A.defaultView || A.parentWindow : E = window;
        }
        var N, I;
        if (g) {
          var Y = i.relatedTarget || i.toElement;
          if (N = a, I = Y ? Js(Y) : null, I !== null) {
            var Z = ya(I);
            (I !== Z || I.tag !== q && I.tag !== ae) && (I = null);
          }
        } else
          N = null, I = a;
        if (N !== I) {
          var De = ap, rt = "onMouseLeave", qe = "onMouseEnter", Ut = "mouse";
          (t === "pointerout" || t === "pointerover") && (De = xh, rt = "onPointerLeave", qe = "onPointerEnter", Ut = "pointer");
          var Ot = N == null ? E : Mf(N), P = I == null ? E : Mf(I), J = new De(rt, Ut + "leave", N, i, o);
          J.target = Ot, J.relatedTarget = P;
          var V = null, pe = Js(o);
          if (pe === a) {
            var je = new De(qe, Ut + "enter", I, i, o);
            je.target = P, je.relatedTarget = Ot, V = je;
          }
          I2(e, J, V, N, I);
        }
      }
    }
    function H(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ce = typeof Object.is == "function" ? Object.is : H;
    function Be(e, t) {
      if (ce(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var o = 0; o < a.length; o++) {
        var s = a[o];
        if (!Dr.call(t, s) || !ce(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function at(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function lt(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function pt(e, t) {
      for (var a = at(e), i = 0, o = 0; a; ) {
        if (a.nodeType === Ki) {
          if (o = i + a.textContent.length, i <= t && o >= t)
            return {
              node: a,
              offset: t - i
            };
          i = o;
        }
        a = at(lt(a));
      }
    }
    function ar(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var o = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        o.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return It(e, o, s, f, p);
    }
    function It(e, t, a, i, o) {
      var s = 0, f = -1, p = -1, g = 0, C = 0, E = e, A = null;
      e: for (; ; ) {
        for (var N = null; E === t && (a === 0 || E.nodeType === Ki) && (f = s + a), E === i && (o === 0 || E.nodeType === Ki) && (p = s + o), E.nodeType === Ki && (s += E.nodeValue.length), (N = E.firstChild) !== null; )
          A = E, E = N;
        for (; ; ) {
          if (E === e)
            break e;
          if (A === t && ++g === a && (f = s), A === i && ++C === o && (p = s), (N = E.nextSibling) !== null)
            break;
          E = A, A = E.parentNode;
        }
        E = N;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function Gl(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var o = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!o.extend && f > p) {
          var g = p;
          p = f, f = g;
        }
        var C = pt(e, f), E = pt(e, p);
        if (C && E) {
          if (o.rangeCount === 1 && o.anchorNode === C.node && o.anchorOffset === C.offset && o.focusNode === E.node && o.focusOffset === E.offset)
            return;
          var A = a.createRange();
          A.setStart(C.node, C.offset), o.removeAllRanges(), f > p ? (o.addRange(A), o.extend(E.node, E.offset)) : (A.setEnd(E.node, E.offset), o.addRange(A));
        }
      }
    }
    function Ah(e) {
      return e && e.nodeType === Ki;
    }
    function ZS(e, t) {
      return !e || !t ? !1 : e === t ? !0 : Ah(e) ? !1 : Ah(t) ? ZS(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function b2(e) {
      return e && e.ownerDocument && ZS(e.ownerDocument.documentElement, e);
    }
    function T2(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function JS() {
      for (var e = window, t = La(); t instanceof e.HTMLIFrameElement; ) {
        if (T2(t))
          e = t.contentWindow;
        else
          return t;
        t = La(e.document);
      }
      return t;
    }
    function Ky(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function x2() {
      var e = JS();
      return {
        focusedElem: e,
        selectionRange: Ky(e) ? k2(e) : null
      };
    }
    function w2(e) {
      var t = JS(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && b2(a)) {
        i !== null && Ky(a) && D2(a, i);
        for (var o = [], s = a; s = s.parentNode; )
          s.nodeType === Xr && o.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < o.length; f++) {
          var p = o[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function k2(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = ar(e), t || {
        start: 0,
        end: 0
      };
    }
    function D2(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Gl(e, t);
    }
    var O2 = Mn && "documentMode" in document && document.documentMode <= 11;
    function L2() {
      dt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var kf = null, Xy = null, vp = null, Zy = !1;
    function N2(e) {
      if ("selectionStart" in e && Ky(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function M2(e) {
      return e.window === e ? e.document : e.nodeType === Xi ? e : e.ownerDocument;
    }
    function e_(e, t, a) {
      var i = M2(a);
      if (!(Zy || kf == null || kf !== La(i))) {
        var o = N2(kf);
        if (!vp || !Be(vp, o)) {
          vp = o;
          var s = Fh(Xy, "onSelect");
          if (s.length > 0) {
            var f = new Ui("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = kf;
          }
        }
      }
    }
    function A2(e, t, a, i, o, s, f) {
      var p = a ? Mf(a) : window;
      switch (t) {
        // Track the input node that has focus.
        case "focusin":
          (qs(p) || p.contentEditable === "true") && (kf = p, Xy = a, vp = null);
          break;
        case "focusout":
          kf = null, Xy = null, vp = null;
          break;
        // Don't fire the event while the user is dragging. This matches the
        // semantics of the native select event.
        case "mousedown":
          Zy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Zy = !1, e_(e, i, o);
          break;
        // Chrome and IE fire non-standard event when selection is changed (and
        // sometimes when it hasn't). IE's event fires out of order with respect
        // to key and input events on deletion, so we discard it.
        //
        // Firefox doesn't support selectionchange, so check selection status
        // after each key entry. The selection changes after keydown and before
        // keyup, but we check on keydown as well in the case of holding down a
        // key, when multiple keydown events are fired but only one keyup is.
        // This is also our approach for IE handling, for the reason above.
        case "selectionchange":
          if (O2)
            break;
        // falls through
        case "keydown":
        case "keyup":
          e_(e, i, o);
      }
    }
    function Uh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Df = {
      animationend: Uh("Animation", "AnimationEnd"),
      animationiteration: Uh("Animation", "AnimationIteration"),
      animationstart: Uh("Animation", "AnimationStart"),
      transitionend: Uh("Transition", "TransitionEnd")
    }, Jy = {}, t_ = {};
    Mn && (t_ = document.createElement("div").style, "AnimationEvent" in window || (delete Df.animationend.animation, delete Df.animationiteration.animation, delete Df.animationstart.animation), "TransitionEvent" in window || delete Df.transitionend.transition);
    function jh(e) {
      if (Jy[e])
        return Jy[e];
      if (!Df[e])
        return e;
      var t = Df[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in t_)
          return Jy[e] = t[a];
      return e;
    }
    var n_ = jh("animationend"), r_ = jh("animationiteration"), a_ = jh("animationstart"), i_ = jh("transitionend"), l_ = /* @__PURE__ */ new Map(), o_ = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Uu(e, t) {
      l_.set(e, t), dt(t, [e]);
    }
    function U2() {
      for (var e = 0; e < o_.length; e++) {
        var t = o_[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Uu(a, "on" + i);
      }
      Uu(n_, "onAnimationEnd"), Uu(r_, "onAnimationIteration"), Uu(a_, "onAnimationStart"), Uu("dblclick", "onDoubleClick"), Uu("focusin", "onFocus"), Uu("focusout", "onBlur"), Uu(i_, "onTransitionEnd");
    }
    function j2(e, t, a, i, o, s, f) {
      var p = l_.get(t);
      if (p !== void 0) {
        var g = Ui, C = t;
        switch (t) {
          case "keypress":
            if ($l(i) === 0)
              return;
          /* falls through */
          case "keydown":
          case "keyup":
            g = Th;
            break;
          case "focusin":
            C = "focus", g = ll;
            break;
          case "focusout":
            C = "blur", g = ll;
            break;
          case "beforeblur":
          case "afterblur":
            g = ll;
            break;
          case "click":
            if (i.button === 2)
              return;
          /* falls through */
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          // TODO: Disabled elements should not respond to mouse events
          /* falls through */
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = ap;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Po;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = kh;
            break;
          case n_:
          case r_:
          case a_:
            g = _h;
            break;
          case i_:
            g = Ha;
            break;
          case "scroll":
            g = oa;
            break;
          case "wheel":
            g = Yy;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = _f;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = xh;
            break;
        }
        var E = (s & Na) !== 0;
        {
          var A = !E && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", N = V2(a, p, i.type, E, A);
          if (N.length > 0) {
            var I = new g(p, C, null, i, o);
            e.push({
              event: I,
              listeners: N
            });
          }
        }
      }
    }
    U2(), z(), Ks(), L2(), Qy();
    function z2(e, t, a, i, o, s, f) {
      j2(e, t, a, i, o, s);
      var p = (s & wd) === 0;
      p && (M(e, t, a, i, o), Ln(e, t, a, i, o), A2(e, t, a, i, o), Nh(e, t, a, i, o));
    }
    var hp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], eg = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(hp));
    function u_(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ti(i, t, void 0, e), e.currentTarget = null;
    }
    function F2(e, t, a) {
      var i;
      if (a)
        for (var o = t.length - 1; o >= 0; o--) {
          var s = t[o], f = s.instance, p = s.currentTarget, g = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          u_(e, g, p), i = f;
        }
      else
        for (var C = 0; C < t.length; C++) {
          var E = t[C], A = E.instance, N = E.currentTarget, I = E.listener;
          if (A !== i && e.isPropagationStopped())
            return;
          u_(e, I, N), i = A;
        }
    }
    function s_(e, t) {
      for (var a = (t & Na) !== 0, i = 0; i < e.length; i++) {
        var o = e[i], s = o.event, f = o.listeners;
        F2(s, f, a);
      }
      hs();
    }
    function P2(e, t, a, i, o) {
      var s = kd(a), f = [];
      z2(f, e, i, a, s, t), s_(f, t);
    }
    function Cn(e, t) {
      eg.has(e) || v('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = hb(t), o = B2(e);
      i.has(o) || (c_(t, e, wc, a), i.add(o));
    }
    function tg(e, t, a) {
      eg.has(e) && !t && v('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Na), c_(a, e, i, t);
    }
    var zh = "_reactListening" + Math.random().toString(36).slice(2);
    function mp(e) {
      if (!e[zh]) {
        e[zh] = !0, tt.forEach(function(a) {
          a !== "selectionchange" && (eg.has(a) || tg(a, !1, e), tg(a, !0, e));
        });
        var t = e.nodeType === Xi ? e : e.ownerDocument;
        t !== null && (t[zh] || (t[zh] = !0, tg("selectionchange", !1, t)));
      }
    }
    function c_(e, t, a, i, o) {
      var s = pr(e, t, a), f = void 0;
      vs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? rp(e, t, s, f) : la(e, t, s) : f !== void 0 ? Lu(e, t, s, f) : $s(e, t, s);
    }
    function f_(e, t) {
      return e === t || e.nodeType === Un && e.parentNode === t;
    }
    function ng(e, t, a, i, o) {
      var s = i;
      if ((t & xd) === 0 && (t & wc) === 0) {
        var f = o;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var g = p.tag;
            if (g === $ || g === Q) {
              var C = p.stateNode.containerInfo;
              if (f_(C, f))
                break;
              if (g === Q)
                for (var E = p.return; E !== null; ) {
                  var A = E.tag;
                  if (A === $ || A === Q) {
                    var N = E.stateNode.containerInfo;
                    if (f_(N, f))
                      return;
                  }
                  E = E.return;
                }
              for (; C !== null; ) {
                var I = Js(C);
                if (I === null)
                  return;
                var Y = I.tag;
                if (Y === q || Y === ae) {
                  p = s = I;
                  continue e;
                }
                C = C.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      Wv(function() {
        return P2(e, t, a, s);
      });
    }
    function yp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function V2(e, t, a, i, o, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, g = [], C = e, E = null; C !== null; ) {
        var A = C, N = A.stateNode, I = A.tag;
        if (I === q && N !== null && (E = N, p !== null)) {
          var Y = Ll(C, p);
          Y != null && g.push(yp(C, Y, E));
        }
        if (o)
          break;
        C = C.return;
      }
      return g;
    }
    function Fh(e, t) {
      for (var a = t + "Capture", i = [], o = e; o !== null; ) {
        var s = o, f = s.stateNode, p = s.tag;
        if (p === q && f !== null) {
          var g = f, C = Ll(o, a);
          C != null && i.unshift(yp(o, C, g));
          var E = Ll(o, t);
          E != null && i.push(yp(o, E, g));
        }
        o = o.return;
      }
      return i;
    }
    function Of(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== q);
      return e || null;
    }
    function H2(e, t) {
      for (var a = e, i = t, o = 0, s = a; s; s = Of(s))
        o++;
      for (var f = 0, p = i; p; p = Of(p))
        f++;
      for (; o - f > 0; )
        a = Of(a), o--;
      for (; f - o > 0; )
        i = Of(i), f--;
      for (var g = o; g--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Of(a), i = Of(i);
      }
      return null;
    }
    function d_(e, t, a, i, o) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var g = p, C = g.alternate, E = g.stateNode, A = g.tag;
        if (C !== null && C === i)
          break;
        if (A === q && E !== null) {
          var N = E;
          if (o) {
            var I = Ll(p, s);
            I != null && f.unshift(yp(p, I, N));
          } else if (!o) {
            var Y = Ll(p, s);
            Y != null && f.push(yp(p, Y, N));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function I2(e, t, a, i, o) {
      var s = i && o ? H2(i, o) : null;
      i !== null && d_(e, t, i, s, !1), o !== null && a !== null && d_(e, a, o, s, !0);
    }
    function B2(e, t) {
      return e + "__bubble";
    }
    var Ia = !1, gp = "dangerouslySetInnerHTML", Ph = "suppressContentEditableWarning", ju = "suppressHydrationWarning", p_ = "autoFocus", Xs = "children", Zs = "style", Vh = "__html", rg, Hh, Sp, v_, Ih, h_, m_;
    rg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Hh = function(e, t) {
      Rd(e, t), Tc(e, t), Iv(e, t, {
        registrationNameDependencies: Le,
        possibleRegistrationNames: st
      });
    }, h_ = Mn && !document.documentMode, Sp = function(e, t, a) {
      if (!Ia) {
        var i = Bh(a), o = Bh(t);
        o !== i && (Ia = !0, v("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(o), JSON.stringify(i)));
      }
    }, v_ = function(e) {
      if (!Ia) {
        Ia = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), v("Extra attributes from the server: %s", t);
      }
    }, Ih = function(e, t) {
      t === !1 ? v("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : v("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, m_ = function(e, t) {
      var a = e.namespaceURI === qi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var $2 = /\r\n?/g, W2 = /\u0000|\uFFFD/g;
    function Bh(e) {
      Jn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace($2, `
`).replace(W2, "");
    }
    function $h(e, t, a, i) {
      var o = Bh(t), s = Bh(e);
      if (s !== o && (i && (Ia || (Ia = !0, v('Text content did not match. Server: "%s" Client: "%s"', s, o))), a && _e))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function y_(e) {
      return e.nodeType === Xi ? e : e.ownerDocument;
    }
    function Y2() {
    }
    function Wh(e) {
      e.onclick = Y2;
    }
    function Q2(e, t, a, i, o) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Zs)
            f && Object.freeze(f), jv(t, f);
          else if (s === gp) {
            var p = f ? f[Vh] : void 0;
            p != null && bv(t, p);
          } else if (s === Xs)
            if (typeof f == "string") {
              var g = e !== "textarea" || f !== "";
              g && pu(t, f);
            } else typeof f == "number" && pu(t, "" + f);
          else s === Ph || s === ju || s === p_ || (Le.hasOwnProperty(s) ? f != null && (typeof f != "function" && Ih(s, f), s === "onScroll" && Cn("scroll", t)) : f != null && Or(t, s, f, o));
        }
    }
    function G2(e, t, a, i) {
      for (var o = 0; o < t.length; o += 2) {
        var s = t[o], f = t[o + 1];
        s === Zs ? jv(e, f) : s === gp ? bv(e, f) : s === Xs ? pu(e, f) : Or(e, s, f, i);
      }
    }
    function q2(e, t, a, i) {
      var o, s = y_(a), f, p = i;
      if (p === qi && (p = md(e)), p === qi) {
        if (o = Dl(e, t), !o && e !== e.toLowerCase() && v("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var g = s.createElement("div");
          g.innerHTML = "<script><\/script>";
          var C = g.firstChild;
          f = g.removeChild(C);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var E = f;
          t.multiple ? E.multiple = !0 : t.size && (E.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === qi && !o && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Dr.call(rg, e) && (rg[e] = !0, v("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function K2(e, t) {
      return y_(t).createTextNode(e);
    }
    function X2(e, t, a, i) {
      var o = Dl(t, a);
      Hh(t, a);
      var s;
      switch (t) {
        case "dialog":
          Cn("cancel", e), Cn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Cn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < hp.length; f++)
            Cn(hp[f], e);
          s = a;
          break;
        case "source":
          Cn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Cn("error", e), Cn("load", e), s = a;
          break;
        case "details":
          Cn("toggle", e), s = a;
          break;
        case "input":
          ai(e, a), s = du(e, a), Cn("invalid", e);
          break;
        case "option":
          zt(e, a), s = a;
          break;
        case "select":
          ho(e, a), s = is(e, a), Cn("invalid", e);
          break;
        case "textarea":
          pd(e, a), s = dd(e, a), Cn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Rc(t, s), Q2(t, e, i, s, o), t) {
        case "input":
          ri(e), B(e, a, !1);
          break;
        case "textarea":
          ri(e), Ev(e);
          break;
        case "option":
          un(e, a);
          break;
        case "select":
          cd(e, a);
          break;
        default:
          typeof s.onClick == "function" && Wh(e);
          break;
      }
    }
    function Z2(e, t, a, i, o) {
      Hh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = du(e, a), p = du(e, i), s = [];
          break;
        case "select":
          f = is(e, a), p = is(e, i), s = [];
          break;
        case "textarea":
          f = dd(e, a), p = dd(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && Wh(e);
          break;
      }
      Rc(t, p);
      var g, C, E = null;
      for (g in f)
        if (!(p.hasOwnProperty(g) || !f.hasOwnProperty(g) || f[g] == null))
          if (g === Zs) {
            var A = f[g];
            for (C in A)
              A.hasOwnProperty(C) && (E || (E = {}), E[C] = "");
          } else g === gp || g === Xs || g === Ph || g === ju || g === p_ || (Le.hasOwnProperty(g) ? s || (s = []) : (s = s || []).push(g, null));
      for (g in p) {
        var N = p[g], I = f?.[g];
        if (!(!p.hasOwnProperty(g) || N === I || N == null && I == null))
          if (g === Zs)
            if (N && Object.freeze(N), I) {
              for (C in I)
                I.hasOwnProperty(C) && (!N || !N.hasOwnProperty(C)) && (E || (E = {}), E[C] = "");
              for (C in N)
                N.hasOwnProperty(C) && I[C] !== N[C] && (E || (E = {}), E[C] = N[C]);
            } else
              E || (s || (s = []), s.push(g, E)), E = N;
          else if (g === gp) {
            var Y = N ? N[Vh] : void 0, Z = I ? I[Vh] : void 0;
            Y != null && Z !== Y && (s = s || []).push(g, Y);
          } else g === Xs ? (typeof N == "string" || typeof N == "number") && (s = s || []).push(g, "" + N) : g === Ph || g === ju || (Le.hasOwnProperty(g) ? (N != null && (typeof N != "function" && Ih(g, N), g === "onScroll" && Cn("scroll", e)), !s && I !== N && (s = [])) : (s = s || []).push(g, N));
      }
      return E && (Oy(E, p[Zs]), (s = s || []).push(Zs, E)), s;
    }
    function J2(e, t, a, i, o) {
      a === "input" && o.type === "radio" && o.name != null && S(e, o);
      var s = Dl(a, i), f = Dl(a, o);
      switch (G2(e, t, s, f), a) {
        case "input":
          w(e, o);
          break;
        case "textarea":
          Cv(e, o);
          break;
        case "select":
          _c(e, o);
          break;
      }
    }
    function eR(e) {
      {
        var t = e.toLowerCase();
        return cs.hasOwnProperty(t) && cs[t] || null;
      }
    }
    function tR(e, t, a, i, o, s, f) {
      var p, g;
      switch (p = Dl(t, a), Hh(t, a), t) {
        case "dialog":
          Cn("cancel", e), Cn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Cn("load", e);
          break;
        case "video":
        case "audio":
          for (var C = 0; C < hp.length; C++)
            Cn(hp[C], e);
          break;
        case "source":
          Cn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Cn("error", e), Cn("load", e);
          break;
        case "details":
          Cn("toggle", e);
          break;
        case "input":
          ai(e, a), Cn("invalid", e);
          break;
        case "option":
          zt(e, a);
          break;
        case "select":
          ho(e, a), Cn("invalid", e);
          break;
        case "textarea":
          pd(e, a), Cn("invalid", e);
          break;
      }
      Rc(t, a);
      {
        g = /* @__PURE__ */ new Set();
        for (var E = e.attributes, A = 0; A < E.length; A++) {
          var N = E[A].name.toLowerCase();
          switch (N) {
            // Controlled attributes are not validated
            // TODO: Only ignore them on controlled tags.
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              g.add(E[A].name);
          }
        }
      }
      var I = null;
      for (var Y in a)
        if (a.hasOwnProperty(Y)) {
          var Z = a[Y];
          if (Y === Xs)
            typeof Z == "string" ? e.textContent !== Z && (a[ju] !== !0 && $h(e.textContent, Z, s, f), I = [Xs, Z]) : typeof Z == "number" && e.textContent !== "" + Z && (a[ju] !== !0 && $h(e.textContent, Z, s, f), I = [Xs, "" + Z]);
          else if (Le.hasOwnProperty(Y))
            Z != null && (typeof Z != "function" && Ih(Y, Z), Y === "onScroll" && Cn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var De = void 0, rt = ln(Y);
            if (a[ju] !== !0) {
              if (!(Y === Ph || Y === ju || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              Y === "value" || Y === "checked" || Y === "selected")) {
                if (Y === gp) {
                  var qe = e.innerHTML, Ut = Z ? Z[Vh] : void 0;
                  if (Ut != null) {
                    var Ot = m_(e, Ut);
                    Ot !== qe && Sp(Y, qe, Ot);
                  }
                } else if (Y === Zs) {
                  if (g.delete(Y), h_) {
                    var P = ky(Z);
                    De = e.getAttribute("style"), P !== De && Sp(Y, De, P);
                  }
                } else if (p && !U)
                  g.delete(Y.toLowerCase()), De = oo(e, Y, Z), Z !== De && Sp(Y, De, Z);
                else if (!mn(Y, rt, p) && !er(Y, Z, rt, p)) {
                  var J = !1;
                  if (rt !== null)
                    g.delete(rt.attributeName), De = _l(e, Y, Z, rt);
                  else {
                    var V = i;
                    if (V === qi && (V = md(t)), V === qi)
                      g.delete(Y.toLowerCase());
                    else {
                      var pe = eR(Y);
                      pe !== null && pe !== Y && (J = !0, g.delete(pe)), g.delete(Y);
                    }
                    De = oo(e, Y, Z);
                  }
                  var je = U;
                  !je && Z !== De && !J && Sp(Y, De, Z);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      g.size > 0 && a[ju] !== !0 && v_(g), t) {
        case "input":
          ri(e), B(e, a, !0);
          break;
        case "textarea":
          ri(e), Ev(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Wh(e);
          break;
      }
      return I;
    }
    function nR(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function ag(e, t) {
      {
        if (Ia)
          return;
        Ia = !0, v("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function ig(e, t) {
      {
        if (Ia)
          return;
        Ia = !0, v('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function lg(e, t, a) {
      {
        if (Ia)
          return;
        Ia = !0, v("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function og(e, t) {
      {
        if (t === "" || Ia)
          return;
        Ia = !0, v('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function rR(e, t, a) {
      switch (t) {
        case "input":
          G(e, a);
          return;
        case "textarea":
          by(e, a);
          return;
        case "select":
          fd(e, a);
          return;
      }
    }
    var _p = function() {
    }, Cp = function() {
    };
    {
      var aR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], g_ = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], iR = g_.concat(["button"]), lR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], S_ = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Cp = function(e, t) {
        var a = Rt({}, e || S_), i = {
          tag: t
        };
        return g_.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), iR.indexOf(t) !== -1 && (a.pTagInButtonScope = null), aR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var oR = function(e, t) {
        switch (t) {
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          // Strictly speaking, seeing an <option> doesn't mean we're in a <select>
          // but
          case "option":
            return e === "#text";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
          // No special behavior since these rules fall back to "in body" mode for
          // all except special table nodes which cause bad parsing behavior anyway.
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
          case "colgroup":
            return e === "col" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return lR.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, uR = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, __ = {};
      _p = function(e, t, a) {
        a = a || S_;
        var i = a.current, o = i && i.tag;
        t != null && (e != null && v("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = oR(e, o) ? null : i, f = s ? null : uR(e, a), p = s || f;
        if (p) {
          var g = p.tag, C = !!s + "|" + e + "|" + g;
          if (!__[C]) {
            __[C] = !0;
            var E = e, A = "";
            if (e === "#text" ? /\S/.test(t) ? E = "Text nodes" : (E = "Whitespace text nodes", A = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : E = "<" + e + ">", s) {
              var N = "";
              g === "table" && e === "tr" && (N += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), v("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", E, g, A, N);
            } else
              v("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", E, g);
          }
        }
      };
    }
    var Yh = "suppressHydrationWarning", Qh = "$", Gh = "/$", Ep = "$?", Rp = "$!", sR = "style", ug = null, sg = null;
    function cR(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Xi:
        case gd: {
          t = i === Xi ? "#document" : "#fragment";
          var o = e.documentElement;
          a = o ? o.namespaceURI : yd(null, "");
          break;
        }
        default: {
          var s = i === Un ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = yd(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), g = Cp(null, p);
        return {
          namespace: a,
          ancestorInfo: g
        };
      }
    }
    function fR(e, t, a) {
      {
        var i = e, o = yd(i.namespace, t), s = Cp(i.ancestorInfo, t);
        return {
          namespace: o,
          ancestorInfo: s
        };
      }
    }
    function YO(e) {
      return e;
    }
    function dR(e) {
      ug = Hn(), sg = x2();
      var t = null;
      return Kn(!1), t;
    }
    function pR(e) {
      w2(sg), Kn(ug), ug = null, sg = null;
    }
    function vR(e, t, a, i, o) {
      var s;
      {
        var f = i;
        if (_p(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, g = Cp(f.ancestorInfo, e);
          _p(null, p, g);
        }
        s = f.namespace;
      }
      var C = q2(e, t, a, s);
      return xp(o, C), yg(C, t), C;
    }
    function hR(e, t) {
      e.appendChild(t);
    }
    function mR(e, t, a, i, o) {
      switch (X2(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function yR(e, t, a, i, o, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, g = Cp(f.ancestorInfo, t);
          _p(null, p, g);
        }
      }
      return Z2(e, t, a, i);
    }
    function cg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function gR(e, t, a, i) {
      {
        var o = a;
        _p(null, e, o.ancestorInfo);
      }
      var s = K2(e, t);
      return xp(i, s), s;
    }
    function SR() {
      var e = window.event;
      return e === void 0 ? Fa : yf(e.type);
    }
    var fg = typeof setTimeout == "function" ? setTimeout : void 0, _R = typeof clearTimeout == "function" ? clearTimeout : void 0, dg = -1, C_ = typeof Promise == "function" ? Promise : void 0, CR = typeof queueMicrotask == "function" ? queueMicrotask : typeof C_ < "u" ? function(e) {
      return C_.resolve(null).then(e).catch(ER);
    } : fg;
    function ER(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function RR(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function bR(e, t, a, i, o, s) {
      J2(e, t, a, i, o), yg(e, o);
    }
    function E_(e) {
      pu(e, "");
    }
    function TR(e, t, a) {
      e.nodeValue = a;
    }
    function xR(e, t) {
      e.appendChild(t);
    }
    function wR(e, t) {
      var a;
      e.nodeType === Un ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Wh(a);
    }
    function kR(e, t, a) {
      e.insertBefore(t, a);
    }
    function DR(e, t, a) {
      e.nodeType === Un ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function OR(e, t) {
      e.removeChild(t);
    }
    function LR(e, t) {
      e.nodeType === Un ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function pg(e, t) {
      var a = t, i = 0;
      do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === Un) {
          var s = o.data;
          if (s === Gh)
            if (i === 0) {
              e.removeChild(o), jo(t);
              return;
            } else
              i--;
          else (s === Qh || s === Ep || s === Rp) && i++;
        }
        a = o;
      } while (a);
      jo(t);
    }
    function NR(e, t) {
      e.nodeType === Un ? pg(e.parentNode, t) : e.nodeType === Xr && pg(e, t), jo(e);
    }
    function MR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function AR(e) {
      e.nodeValue = "";
    }
    function UR(e, t) {
      e = e;
      var a = t[sR], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Ec("display", i);
    }
    function jR(e, t) {
      e.nodeValue = t;
    }
    function zR(e) {
      e.nodeType === Xr ? e.textContent = "" : e.nodeType === Xi && e.documentElement && e.removeChild(e.documentElement);
    }
    function FR(e, t, a) {
      return e.nodeType !== Xr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function PR(e, t) {
      return t === "" || e.nodeType !== Ki ? null : e;
    }
    function VR(e) {
      return e.nodeType !== Un ? null : e;
    }
    function R_(e) {
      return e.data === Ep;
    }
    function vg(e) {
      return e.data === Rp;
    }
    function HR(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, o;
      return t && (a = t.dgst, i = t.msg, o = t.stck), {
        message: i,
        digest: a,
        stack: o
      };
    }
    function IR(e, t) {
      e._reactRetry = t;
    }
    function qh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Xr || t === Ki)
          break;
        if (t === Un) {
          var a = e.data;
          if (a === Qh || a === Rp || a === Ep)
            break;
          if (a === Gh)
            return null;
        }
      }
      return e;
    }
    function bp(e) {
      return qh(e.nextSibling);
    }
    function BR(e) {
      return qh(e.firstChild);
    }
    function $R(e) {
      return qh(e.firstChild);
    }
    function WR(e) {
      return qh(e.nextSibling);
    }
    function YR(e, t, a, i, o, s, f) {
      xp(s, e), yg(e, a);
      var p;
      {
        var g = o;
        p = g.namespace;
      }
      var C = (s.mode & wt) !== et;
      return tR(e, t, a, p, i, C, f);
    }
    function QR(e, t, a, i) {
      return xp(a, e), a.mode & wt, nR(e, t);
    }
    function GR(e, t) {
      xp(t, e);
    }
    function qR(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Un) {
          var i = t.data;
          if (i === Gh) {
            if (a === 0)
              return bp(t);
            a--;
          } else (i === Qh || i === Rp || i === Ep) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function b_(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Un) {
          var i = t.data;
          if (i === Qh || i === Rp || i === Ep) {
            if (a === 0)
              return t;
            a--;
          } else i === Gh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function KR(e) {
      jo(e);
    }
    function XR(e) {
      jo(e);
    }
    function ZR(e) {
      return e !== "head" && e !== "body";
    }
    function JR(e, t, a, i) {
      var o = !0;
      $h(t.nodeValue, a, i, o);
    }
    function eb(e, t, a, i, o, s) {
      if (t[Yh] !== !0) {
        var f = !0;
        $h(i.nodeValue, o, s, f);
      }
    }
    function tb(e, t) {
      t.nodeType === Xr ? ag(e, t) : t.nodeType === Un || ig(e, t);
    }
    function nb(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Xr ? ag(a, t) : t.nodeType === Un || ig(a, t));
      }
    }
    function rb(e, t, a, i, o) {
      (o || t[Yh] !== !0) && (i.nodeType === Xr ? ag(a, i) : i.nodeType === Un || ig(a, i));
    }
    function ab(e, t, a) {
      lg(e, t);
    }
    function ib(e, t) {
      og(e, t);
    }
    function lb(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && lg(i, t);
      }
    }
    function ob(e, t) {
      {
        var a = e.parentNode;
        a !== null && og(a, t);
      }
    }
    function ub(e, t, a, i, o, s) {
      (s || t[Yh] !== !0) && lg(a, i);
    }
    function sb(e, t, a, i, o) {
      (o || t[Yh] !== !0) && og(a, i);
    }
    function cb(e) {
      v("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function fb(e) {
      mp(e);
    }
    var Lf = Math.random().toString(36).slice(2), Nf = "__reactFiber$" + Lf, hg = "__reactProps$" + Lf, Tp = "__reactContainer$" + Lf, mg = "__reactEvents$" + Lf, db = "__reactListeners$" + Lf, pb = "__reactHandles$" + Lf;
    function vb(e) {
      delete e[Nf], delete e[hg], delete e[mg], delete e[db], delete e[pb];
    }
    function xp(e, t) {
      t[Nf] = e;
    }
    function Kh(e, t) {
      t[Tp] = e;
    }
    function T_(e) {
      e[Tp] = null;
    }
    function wp(e) {
      return !!e[Tp];
    }
    function Js(e) {
      var t = e[Nf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Tp] || a[Nf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var o = b_(e); o !== null; ) {
              var s = o[Nf];
              if (s)
                return s;
              o = b_(o);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function zu(e) {
      var t = e[Nf] || e[Tp];
      return t && (t.tag === q || t.tag === ae || t.tag === ve || t.tag === $) ? t : null;
    }
    function Mf(e) {
      if (e.tag === q || e.tag === ae)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Xh(e) {
      return e[hg] || null;
    }
    function yg(e, t) {
      e[hg] = t;
    }
    function hb(e) {
      var t = e[mg];
      return t === void 0 && (t = e[mg] = /* @__PURE__ */ new Set()), t;
    }
    var x_ = {}, w_ = h.ReactDebugCurrentFrame;
    function Zh(e) {
      if (e) {
        var t = e._owner, a = Yi(e.type, e._source, t ? t.type : null);
        w_.setExtraStackFrame(a);
      } else
        w_.setExtraStackFrame(null);
    }
    function ul(e, t, a, i, o) {
      {
        var s = Function.call.bind(Dr);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var g = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (C) {
              p = C;
            }
            p && !(p instanceof Error) && (Zh(o), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Zh(null)), p instanceof Error && !(p.message in x_) && (x_[p.message] = !0, Zh(o), v("Failed %s type: %s", a, p.message), Zh(null));
          }
      }
    }
    var gg = [], Jh;
    Jh = [];
    var Io = -1;
    function Fu(e) {
      return {
        current: e
      };
    }
    function ua(e, t) {
      if (Io < 0) {
        v("Unexpected pop.");
        return;
      }
      t !== Jh[Io] && v("Unexpected Fiber popped."), e.current = gg[Io], gg[Io] = null, Jh[Io] = null, Io--;
    }
    function sa(e, t, a) {
      Io++, gg[Io] = e.current, Jh[Io] = a, e.current = t;
    }
    var Sg;
    Sg = {};
    var fi = {};
    Object.freeze(fi);
    var Bo = Fu(fi), ql = Fu(!1), _g = fi;
    function Af(e, t, a) {
      return a && Kl(t) ? _g : Bo.current;
    }
    function k_(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Uf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return fi;
        var o = e.stateNode;
        if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
          return o.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = vt(e) || "Unknown";
          ul(i, s, "context", p);
        }
        return o && k_(e, t, s), s;
      }
    }
    function em() {
      return ql.current;
    }
    function Kl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function tm(e) {
      ua(ql, e), ua(Bo, e);
    }
    function Cg(e) {
      ua(ql, e), ua(Bo, e);
    }
    function D_(e, t, a) {
      {
        if (Bo.current !== fi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        sa(Bo, t, e), sa(ql, a, e);
      }
    }
    function O_(e, t, a) {
      {
        var i = e.stateNode, o = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = vt(e) || "Unknown";
            Sg[s] || (Sg[s] = !0, v("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in o))
            throw new Error((vt(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var g = vt(e) || "Unknown";
          ul(o, f, "child context", g);
        }
        return Rt({}, a, f);
      }
    }
    function nm(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || fi;
        return _g = Bo.current, sa(Bo, a, e), sa(ql, ql.current, e), !0;
      }
    }
    function L_(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var o = O_(e, t, _g);
          i.__reactInternalMemoizedMergedChildContext = o, ua(ql, e), ua(Bo, e), sa(Bo, o, e), sa(ql, a, e);
        } else
          ua(ql, e), sa(ql, a, e);
      }
    }
    function mb(e) {
      {
        if (!Eo(e) || e.tag !== T)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case $:
              return t.stateNode.context;
            case T: {
              var a = t.type;
              if (Kl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Pu = 0, rm = 1, $o = null, Eg = !1, Rg = !1;
    function N_(e) {
      $o === null ? $o = [e] : $o.push(e);
    }
    function yb(e) {
      Eg = !0, N_(e);
    }
    function M_() {
      Eg && Vu();
    }
    function Vu() {
      if (!Rg && $o !== null) {
        Rg = !0;
        var e = 0, t = Va();
        try {
          var a = !0, i = $o;
          for (Vn(Ur); e < i.length; e++) {
            var o = i[e];
            do
              o = o(a);
            while (o !== null);
          }
          $o = null, Eg = !1;
        } catch (s) {
          throw $o !== null && ($o = $o.slice(e + 1)), Od(gs, Vu), s;
        } finally {
          Vn(t), Rg = !1;
        }
      }
      return null;
    }
    var jf = [], zf = 0, am = null, im = 0, ji = [], zi = 0, ec = null, Wo = 1, Yo = "";
    function gb(e) {
      return nc(), (e.flags & xi) !== Je;
    }
    function Sb(e) {
      return nc(), im;
    }
    function _b() {
      var e = Yo, t = Wo, a = t & ~Cb(t);
      return a.toString(32) + e;
    }
    function tc(e, t) {
      nc(), jf[zf++] = im, jf[zf++] = am, am = e, im = t;
    }
    function A_(e, t, a) {
      nc(), ji[zi++] = Wo, ji[zi++] = Yo, ji[zi++] = ec, ec = e;
      var i = Wo, o = Yo, s = lm(i) - 1, f = i & ~(1 << s), p = a + 1, g = lm(t) + s;
      if (g > 30) {
        var C = s - s % 5, E = (1 << C) - 1, A = (f & E).toString(32), N = f >> C, I = s - C, Y = lm(t) + I, Z = p << I, De = Z | N, rt = A + o;
        Wo = 1 << Y | De, Yo = rt;
      } else {
        var qe = p << s, Ut = qe | f, Ot = o;
        Wo = 1 << g | Ut, Yo = Ot;
      }
    }
    function bg(e) {
      nc();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        tc(e, a), A_(e, a, i);
      }
    }
    function lm(e) {
      return 32 - Fn(e);
    }
    function Cb(e) {
      return 1 << lm(e) - 1;
    }
    function Tg(e) {
      for (; e === am; )
        am = jf[--zf], jf[zf] = null, im = jf[--zf], jf[zf] = null;
      for (; e === ec; )
        ec = ji[--zi], ji[zi] = null, Yo = ji[--zi], ji[zi] = null, Wo = ji[--zi], ji[zi] = null;
    }
    function Eb() {
      return nc(), ec !== null ? {
        id: Wo,
        overflow: Yo
      } : null;
    }
    function Rb(e, t) {
      nc(), ji[zi++] = Wo, ji[zi++] = Yo, ji[zi++] = ec, Wo = t.id, Yo = t.overflow, ec = e;
    }
    function nc() {
      Vr() || v("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Pr = null, Fi = null, sl = !1, rc = !1, Hu = null;
    function bb() {
      sl && v("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function U_() {
      rc = !0;
    }
    function Tb() {
      return rc;
    }
    function xb(e) {
      var t = e.stateNode.containerInfo;
      return Fi = $R(t), Pr = e, sl = !0, Hu = null, rc = !1, !0;
    }
    function wb(e, t, a) {
      return Fi = WR(t), Pr = e, sl = !0, Hu = null, rc = !1, a !== null && Rb(e, a), !0;
    }
    function j_(e, t) {
      switch (e.tag) {
        case $: {
          tb(e.stateNode.containerInfo, t);
          break;
        }
        case q: {
          var a = (e.mode & wt) !== et;
          rb(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case ve: {
          var i = e.memoizedState;
          i.dehydrated !== null && nb(i.dehydrated, t);
          break;
        }
      }
    }
    function z_(e, t) {
      j_(e, t);
      var a = Lw();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Ma) : i.push(a);
    }
    function xg(e, t) {
      {
        if (rc)
          return;
        switch (e.tag) {
          case $: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case q:
                var i = t.type;
                t.pendingProps, ab(a, i);
                break;
              case ae:
                var o = t.pendingProps;
                ib(a, o);
                break;
            }
            break;
          }
          case q: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case q: {
                var g = t.type, C = t.pendingProps, E = (e.mode & wt) !== et;
                ub(
                  s,
                  f,
                  p,
                  g,
                  C,
                  // TODO: Delete this argument when we remove the legacy root API.
                  E
                );
                break;
              }
              case ae: {
                var A = t.pendingProps, N = (e.mode & wt) !== et;
                sb(
                  s,
                  f,
                  p,
                  A,
                  // TODO: Delete this argument when we remove the legacy root API.
                  N
                );
                break;
              }
            }
            break;
          }
          case ve: {
            var I = e.memoizedState, Y = I.dehydrated;
            if (Y !== null) switch (t.tag) {
              case q:
                var Z = t.type;
                t.pendingProps, lb(Y, Z);
                break;
              case ae:
                var De = t.pendingProps;
                ob(Y, De);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function F_(e, t) {
      t.flags = t.flags & ~Jr | gn, xg(e, t);
    }
    function P_(e, t) {
      switch (e.tag) {
        case q: {
          var a = e.type;
          e.pendingProps;
          var i = FR(t, a);
          return i !== null ? (e.stateNode = i, Pr = e, Fi = BR(i), !0) : !1;
        }
        case ae: {
          var o = e.pendingProps, s = PR(t, o);
          return s !== null ? (e.stateNode = s, Pr = e, Fi = null, !0) : !1;
        }
        case ve: {
          var f = VR(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: Eb(),
              retryLane: ra
            };
            e.memoizedState = p;
            var g = Nw(f);
            return g.return = e, e.child = g, Pr = e, Fi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function wg(e) {
      return (e.mode & wt) !== et && (e.flags & Ke) === Je;
    }
    function kg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Dg(e) {
      if (sl) {
        var t = Fi;
        if (!t) {
          wg(e) && (xg(Pr, e), kg()), F_(Pr, e), sl = !1, Pr = e;
          return;
        }
        var a = t;
        if (!P_(e, t)) {
          wg(e) && (xg(Pr, e), kg()), t = bp(a);
          var i = Pr;
          if (!t || !P_(e, t)) {
            F_(Pr, e), sl = !1, Pr = e;
            return;
          }
          z_(i, a);
        }
      }
    }
    function kb(e, t, a) {
      var i = e.stateNode, o = !rc, s = YR(i, e.type, e.memoizedProps, t, a, e, o);
      return e.updateQueue = s, s !== null;
    }
    function Db(e) {
      var t = e.stateNode, a = e.memoizedProps, i = QR(t, a, e);
      if (i) {
        var o = Pr;
        if (o !== null)
          switch (o.tag) {
            case $: {
              var s = o.stateNode.containerInfo, f = (o.mode & wt) !== et;
              JR(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case q: {
              var p = o.type, g = o.memoizedProps, C = o.stateNode, E = (o.mode & wt) !== et;
              eb(
                p,
                g,
                C,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                E
              );
              break;
            }
          }
      }
      return i;
    }
    function Ob(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      GR(a, e);
    }
    function Lb(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return qR(a);
    }
    function V_(e) {
      for (var t = e.return; t !== null && t.tag !== q && t.tag !== $ && t.tag !== ve; )
        t = t.return;
      Pr = t;
    }
    function om(e) {
      if (e !== Pr)
        return !1;
      if (!sl)
        return V_(e), sl = !0, !1;
      if (e.tag !== $ && (e.tag !== q || ZR(e.type) && !cg(e.type, e.memoizedProps))) {
        var t = Fi;
        if (t)
          if (wg(e))
            H_(e), kg();
          else
            for (; t; )
              z_(e, t), t = bp(t);
      }
      return V_(e), e.tag === ve ? Fi = Lb(e) : Fi = Pr ? bp(e.stateNode) : null, !0;
    }
    function Nb() {
      return sl && Fi !== null;
    }
    function H_(e) {
      for (var t = Fi; t; )
        j_(e, t), t = bp(t);
    }
    function Ff() {
      Pr = null, Fi = null, sl = !1, rc = !1;
    }
    function I_() {
      Hu !== null && (UC(Hu), Hu = null);
    }
    function Vr() {
      return sl;
    }
    function Og(e) {
      Hu === null ? Hu = [e] : Hu.push(e);
    }
    var Mb = h.ReactCurrentBatchConfig, Ab = null;
    function Ub() {
      return Mb.transition;
    }
    var cl = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var jb = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & en && (t = a), a = a.return;
        return t;
      }, ac = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, kp = [], Dp = [], Op = [], Lp = [], Np = [], Mp = [], ic = /* @__PURE__ */ new Set();
      cl.recordUnsafeLifecycleWarnings = function(e, t) {
        ic.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && kp.push(e), e.mode & en && typeof t.UNSAFE_componentWillMount == "function" && Dp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Op.push(e), e.mode & en && typeof t.UNSAFE_componentWillReceiveProps == "function" && Lp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Np.push(e), e.mode & en && typeof t.UNSAFE_componentWillUpdate == "function" && Mp.push(e));
      }, cl.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        kp.length > 0 && (kp.forEach(function(N) {
          e.add(vt(N) || "Component"), ic.add(N.type);
        }), kp = []);
        var t = /* @__PURE__ */ new Set();
        Dp.length > 0 && (Dp.forEach(function(N) {
          t.add(vt(N) || "Component"), ic.add(N.type);
        }), Dp = []);
        var a = /* @__PURE__ */ new Set();
        Op.length > 0 && (Op.forEach(function(N) {
          a.add(vt(N) || "Component"), ic.add(N.type);
        }), Op = []);
        var i = /* @__PURE__ */ new Set();
        Lp.length > 0 && (Lp.forEach(function(N) {
          i.add(vt(N) || "Component"), ic.add(N.type);
        }), Lp = []);
        var o = /* @__PURE__ */ new Set();
        Np.length > 0 && (Np.forEach(function(N) {
          o.add(vt(N) || "Component"), ic.add(N.type);
        }), Np = []);
        var s = /* @__PURE__ */ new Set();
        if (Mp.length > 0 && (Mp.forEach(function(N) {
          s.add(vt(N) || "Component"), ic.add(N.type);
        }), Mp = []), t.size > 0) {
          var f = ac(t);
          v(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = ac(i);
          v(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var g = ac(s);
          v(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, g);
        }
        if (e.size > 0) {
          var C = ac(e);
          b(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, C);
        }
        if (a.size > 0) {
          var E = ac(a);
          b(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, E);
        }
        if (o.size > 0) {
          var A = ac(o);
          b(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, A);
        }
      };
      var um = /* @__PURE__ */ new Map(), B_ = /* @__PURE__ */ new Set();
      cl.recordLegacyContextWarning = function(e, t) {
        var a = jb(e);
        if (a === null) {
          v("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!B_.has(e.type)) {
          var i = um.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], um.set(a, i)), i.push(e));
        }
      }, cl.flushLegacyContextWarning = function() {
        um.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(vt(s) || "Component"), B_.add(s.type);
            });
            var o = ac(i);
            try {
              Xt(a), v(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, o);
            } finally {
              dn();
            }
          }
        });
      }, cl.discardPendingWarnings = function() {
        kp = [], Dp = [], Op = [], Lp = [], Np = [], Mp = [], um = /* @__PURE__ */ new Map();
      };
    }
    var Lg, Ng, Mg, Ag, Ug, $_ = function(e, t) {
    };
    Lg = !1, Ng = !1, Mg = {}, Ag = {}, Ug = {}, $_ = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = vt(t) || "Component";
        Ag[a] || (Ag[a] = !0, v('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function zb(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Ap(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & en || X) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== T) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !zb(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var o = vt(e) || "Component";
          Mg[o] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', o, i), Mg[o] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== T)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var g = f;
          vi(i, "ref");
          var C = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === C)
            return t.ref;
          var E = function(A) {
            var N = g.refs;
            A === null ? delete N[C] : N[C] = A;
          };
          return E._stringRef = C, E;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function sm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function cm(e) {
      {
        var t = vt(e) || "Component";
        if (Ug[t])
          return;
        Ug[t] = !0, v("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function W_(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function Y_(e) {
      function t(P, J) {
        if (e) {
          var V = P.deletions;
          V === null ? (P.deletions = [J], P.flags |= Ma) : V.push(J);
        }
      }
      function a(P, J) {
        if (!e)
          return null;
        for (var V = J; V !== null; )
          t(P, V), V = V.sibling;
        return null;
      }
      function i(P, J) {
        for (var V = /* @__PURE__ */ new Map(), pe = J; pe !== null; )
          pe.key !== null ? V.set(pe.key, pe) : V.set(pe.index, pe), pe = pe.sibling;
        return V;
      }
      function o(P, J) {
        var V = vc(P, J);
        return V.index = 0, V.sibling = null, V;
      }
      function s(P, J, V) {
        if (P.index = V, !e)
          return P.flags |= xi, J;
        var pe = P.alternate;
        if (pe !== null) {
          var je = pe.index;
          return je < J ? (P.flags |= gn, J) : je;
        } else
          return P.flags |= gn, J;
      }
      function f(P) {
        return e && P.alternate === null && (P.flags |= gn), P;
      }
      function p(P, J, V, pe) {
        if (J === null || J.tag !== ae) {
          var je = OS(V, P.mode, pe);
          return je.return = P, je;
        } else {
          var Ne = o(J, V);
          return Ne.return = P, Ne;
        }
      }
      function g(P, J, V, pe) {
        var je = V.type;
        if (je === mi)
          return E(P, J, V.props.children, pe, V.key);
        if (J !== null && (J.elementType === je || // Keep this check inline so it only runs on the false path:
        XC(J, V) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof je == "object" && je !== null && je.$$typeof === mt && W_(je) === J.type)) {
          var Ne = o(J, V.props);
          return Ne.ref = Ap(P, J, V), Ne.return = P, Ne._debugSource = V._source, Ne._debugOwner = V._owner, Ne;
        }
        var ft = DS(V, P.mode, pe);
        return ft.ref = Ap(P, J, V), ft.return = P, ft;
      }
      function C(P, J, V, pe) {
        if (J === null || J.tag !== Q || J.stateNode.containerInfo !== V.containerInfo || J.stateNode.implementation !== V.implementation) {
          var je = LS(V, P.mode, pe);
          return je.return = P, je;
        } else {
          var Ne = o(J, V.children || []);
          return Ne.return = P, Ne;
        }
      }
      function E(P, J, V, pe, je) {
        if (J === null || J.tag !== he) {
          var Ne = Zu(V, P.mode, pe, je);
          return Ne.return = P, Ne;
        } else {
          var ft = o(J, V);
          return ft.return = P, ft;
        }
      }
      function A(P, J, V) {
        if (typeof J == "string" && J !== "" || typeof J == "number") {
          var pe = OS("" + J, P.mode, V);
          return pe.return = P, pe;
        }
        if (typeof J == "object" && J !== null) {
          switch (J.$$typeof) {
            case Lr: {
              var je = DS(J, P.mode, V);
              return je.ref = Ap(P, null, J), je.return = P, je;
            }
            case or: {
              var Ne = LS(J, P.mode, V);
              return Ne.return = P, Ne;
            }
            case mt: {
              var ft = J._payload, gt = J._init;
              return A(P, gt(ft), V);
            }
          }
          if (Tt(J) || _t(J)) {
            var nn = Zu(J, P.mode, V, null);
            return nn.return = P, nn;
          }
          sm(P, J);
        }
        return typeof J == "function" && cm(P), null;
      }
      function N(P, J, V, pe) {
        var je = J !== null ? J.key : null;
        if (typeof V == "string" && V !== "" || typeof V == "number")
          return je !== null ? null : p(P, J, "" + V, pe);
        if (typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case Lr:
              return V.key === je ? g(P, J, V, pe) : null;
            case or:
              return V.key === je ? C(P, J, V, pe) : null;
            case mt: {
              var Ne = V._payload, ft = V._init;
              return N(P, J, ft(Ne), pe);
            }
          }
          if (Tt(V) || _t(V))
            return je !== null ? null : E(P, J, V, pe, null);
          sm(P, V);
        }
        return typeof V == "function" && cm(P), null;
      }
      function I(P, J, V, pe, je) {
        if (typeof pe == "string" && pe !== "" || typeof pe == "number") {
          var Ne = P.get(V) || null;
          return p(J, Ne, "" + pe, je);
        }
        if (typeof pe == "object" && pe !== null) {
          switch (pe.$$typeof) {
            case Lr: {
              var ft = P.get(pe.key === null ? V : pe.key) || null;
              return g(J, ft, pe, je);
            }
            case or: {
              var gt = P.get(pe.key === null ? V : pe.key) || null;
              return C(J, gt, pe, je);
            }
            case mt:
              var nn = pe._payload, Bt = pe._init;
              return I(P, J, V, Bt(nn), je);
          }
          if (Tt(pe) || _t(pe)) {
            var Xn = P.get(V) || null;
            return E(J, Xn, pe, je, null);
          }
          sm(J, pe);
        }
        return typeof pe == "function" && cm(J), null;
      }
      function Y(P, J, V) {
        {
          if (typeof P != "object" || P === null)
            return J;
          switch (P.$$typeof) {
            case Lr:
            case or:
              $_(P, V);
              var pe = P.key;
              if (typeof pe != "string")
                break;
              if (J === null) {
                J = /* @__PURE__ */ new Set(), J.add(pe);
                break;
              }
              if (!J.has(pe)) {
                J.add(pe);
                break;
              }
              v("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", pe);
              break;
            case mt:
              var je = P._payload, Ne = P._init;
              Y(Ne(je), J, V);
              break;
          }
        }
        return J;
      }
      function Z(P, J, V, pe) {
        for (var je = null, Ne = 0; Ne < V.length; Ne++) {
          var ft = V[Ne];
          je = Y(ft, je, P);
        }
        for (var gt = null, nn = null, Bt = J, Xn = 0, $t = 0, Bn = null; Bt !== null && $t < V.length; $t++) {
          Bt.index > $t ? (Bn = Bt, Bt = null) : Bn = Bt.sibling;
          var fa = N(P, Bt, V[$t], pe);
          if (fa === null) {
            Bt === null && (Bt = Bn);
            break;
          }
          e && Bt && fa.alternate === null && t(P, Bt), Xn = s(fa, Xn, $t), nn === null ? gt = fa : nn.sibling = fa, nn = fa, Bt = Bn;
        }
        if ($t === V.length) {
          if (a(P, Bt), Vr()) {
            var Qr = $t;
            tc(P, Qr);
          }
          return gt;
        }
        if (Bt === null) {
          for (; $t < V.length; $t++) {
            var pi = A(P, V[$t], pe);
            pi !== null && (Xn = s(pi, Xn, $t), nn === null ? gt = pi : nn.sibling = pi, nn = pi);
          }
          if (Vr()) {
            var xa = $t;
            tc(P, xa);
          }
          return gt;
        }
        for (var wa = i(P, Bt); $t < V.length; $t++) {
          var da = I(wa, P, $t, V[$t], pe);
          da !== null && (e && da.alternate !== null && wa.delete(da.key === null ? $t : da.key), Xn = s(da, Xn, $t), nn === null ? gt = da : nn.sibling = da, nn = da);
        }
        if (e && wa.forEach(function(rd) {
          return t(P, rd);
        }), Vr()) {
          var Jo = $t;
          tc(P, Jo);
        }
        return gt;
      }
      function De(P, J, V, pe) {
        var je = _t(V);
        if (typeof je != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          V[Symbol.toStringTag] === "Generator" && (Ng || v("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Ng = !0), V.entries === je && (Lg || v("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Lg = !0);
          var Ne = je.call(V);
          if (Ne)
            for (var ft = null, gt = Ne.next(); !gt.done; gt = Ne.next()) {
              var nn = gt.value;
              ft = Y(nn, ft, P);
            }
        }
        var Bt = je.call(V);
        if (Bt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Xn = null, $t = null, Bn = J, fa = 0, Qr = 0, pi = null, xa = Bt.next(); Bn !== null && !xa.done; Qr++, xa = Bt.next()) {
          Bn.index > Qr ? (pi = Bn, Bn = null) : pi = Bn.sibling;
          var wa = N(P, Bn, xa.value, pe);
          if (wa === null) {
            Bn === null && (Bn = pi);
            break;
          }
          e && Bn && wa.alternate === null && t(P, Bn), fa = s(wa, fa, Qr), $t === null ? Xn = wa : $t.sibling = wa, $t = wa, Bn = pi;
        }
        if (xa.done) {
          if (a(P, Bn), Vr()) {
            var da = Qr;
            tc(P, da);
          }
          return Xn;
        }
        if (Bn === null) {
          for (; !xa.done; Qr++, xa = Bt.next()) {
            var Jo = A(P, xa.value, pe);
            Jo !== null && (fa = s(Jo, fa, Qr), $t === null ? Xn = Jo : $t.sibling = Jo, $t = Jo);
          }
          if (Vr()) {
            var rd = Qr;
            tc(P, rd);
          }
          return Xn;
        }
        for (var dv = i(P, Bn); !xa.done; Qr++, xa = Bt.next()) {
          var ao = I(dv, P, Qr, xa.value, pe);
          ao !== null && (e && ao.alternate !== null && dv.delete(ao.key === null ? Qr : ao.key), fa = s(ao, fa, Qr), $t === null ? Xn = ao : $t.sibling = ao, $t = ao);
        }
        if (e && dv.forEach(function(sk) {
          return t(P, sk);
        }), Vr()) {
          var uk = Qr;
          tc(P, uk);
        }
        return Xn;
      }
      function rt(P, J, V, pe) {
        if (J !== null && J.tag === ae) {
          a(P, J.sibling);
          var je = o(J, V);
          return je.return = P, je;
        }
        a(P, J);
        var Ne = OS(V, P.mode, pe);
        return Ne.return = P, Ne;
      }
      function qe(P, J, V, pe) {
        for (var je = V.key, Ne = J; Ne !== null; ) {
          if (Ne.key === je) {
            var ft = V.type;
            if (ft === mi) {
              if (Ne.tag === he) {
                a(P, Ne.sibling);
                var gt = o(Ne, V.props.children);
                return gt.return = P, gt._debugSource = V._source, gt._debugOwner = V._owner, gt;
              }
            } else if (Ne.elementType === ft || // Keep this check inline so it only runs on the false path:
            XC(Ne, V) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof ft == "object" && ft !== null && ft.$$typeof === mt && W_(ft) === Ne.type) {
              a(P, Ne.sibling);
              var nn = o(Ne, V.props);
              return nn.ref = Ap(P, Ne, V), nn.return = P, nn._debugSource = V._source, nn._debugOwner = V._owner, nn;
            }
            a(P, Ne);
            break;
          } else
            t(P, Ne);
          Ne = Ne.sibling;
        }
        if (V.type === mi) {
          var Bt = Zu(V.props.children, P.mode, pe, V.key);
          return Bt.return = P, Bt;
        } else {
          var Xn = DS(V, P.mode, pe);
          return Xn.ref = Ap(P, J, V), Xn.return = P, Xn;
        }
      }
      function Ut(P, J, V, pe) {
        for (var je = V.key, Ne = J; Ne !== null; ) {
          if (Ne.key === je)
            if (Ne.tag === Q && Ne.stateNode.containerInfo === V.containerInfo && Ne.stateNode.implementation === V.implementation) {
              a(P, Ne.sibling);
              var ft = o(Ne, V.children || []);
              return ft.return = P, ft;
            } else {
              a(P, Ne);
              break;
            }
          else
            t(P, Ne);
          Ne = Ne.sibling;
        }
        var gt = LS(V, P.mode, pe);
        return gt.return = P, gt;
      }
      function Ot(P, J, V, pe) {
        var je = typeof V == "object" && V !== null && V.type === mi && V.key === null;
        if (je && (V = V.props.children), typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case Lr:
              return f(qe(P, J, V, pe));
            case or:
              return f(Ut(P, J, V, pe));
            case mt:
              var Ne = V._payload, ft = V._init;
              return Ot(P, J, ft(Ne), pe);
          }
          if (Tt(V))
            return Z(P, J, V, pe);
          if (_t(V))
            return De(P, J, V, pe);
          sm(P, V);
        }
        return typeof V == "string" && V !== "" || typeof V == "number" ? f(rt(P, J, "" + V, pe)) : (typeof V == "function" && cm(P), a(P, J));
      }
      return Ot;
    }
    var Pf = Y_(!0), Q_ = Y_(!1);
    function Fb(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = vc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = vc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Pb(e, t) {
      for (var a = e.child; a !== null; )
        xw(a, t), a = a.sibling;
    }
    var jg = Fu(null), zg;
    zg = {};
    var fm = null, Vf = null, Fg = null, dm = !1;
    function pm() {
      fm = null, Vf = null, Fg = null, dm = !1;
    }
    function G_() {
      dm = !0;
    }
    function q_() {
      dm = !1;
    }
    function K_(e, t, a) {
      sa(jg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== zg && v("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = zg;
    }
    function Pg(e, t) {
      var a = jg.current;
      ua(jg, t), e._currentValue = a;
    }
    function Vg(e, t, a) {
      for (var i = e; i !== null; ) {
        var o = i.alternate;
        if (Uo(i.childLanes, t) ? o !== null && !Uo(o.childLanes, t) && (o.childLanes = Ct(o.childLanes, t)) : (i.childLanes = Ct(i.childLanes, t), o !== null && (o.childLanes = Ct(o.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && v("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Vb(e, t, a) {
      Hb(e, t, a);
    }
    function Hb(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var o = void 0, s = i.dependencies;
        if (s !== null) {
          o = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === T) {
                var p = Ns(a), g = Qo(rn, p);
                g.tag = hm;
                var C = i.updateQueue;
                if (C !== null) {
                  var E = C.shared, A = E.pending;
                  A === null ? g.next = g : (g.next = A.next, A.next = g), E.pending = g;
                }
              }
              i.lanes = Ct(i.lanes, a);
              var N = i.alternate;
              N !== null && (N.lanes = Ct(N.lanes, a)), Vg(i.return, a, e), s.lanes = Ct(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === Se)
          o = i.type === e.type ? null : i.child;
        else if (i.tag === ot) {
          var I = i.return;
          if (I === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          I.lanes = Ct(I.lanes, a);
          var Y = I.alternate;
          Y !== null && (Y.lanes = Ct(Y.lanes, a)), Vg(I, a, e), o = i.sibling;
        } else
          o = i.child;
        if (o !== null)
          o.return = i;
        else
          for (o = i; o !== null; ) {
            if (o === e) {
              o = null;
              break;
            }
            var Z = o.sibling;
            if (Z !== null) {
              Z.return = o.return, o = Z;
              break;
            }
            o = o.return;
          }
        i = o;
      }
    }
    function Hf(e, t) {
      fm = e, Vf = null, Fg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (aa(a.lanes, t) && qp(), a.firstContext = null);
      }
    }
    function ir(e) {
      dm && v("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Fg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Vf === null) {
          if (fm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Vf = a, fm.dependencies = {
            lanes: le,
            firstContext: a
          };
        } else
          Vf = Vf.next = a;
      }
      return t;
    }
    var lc = null;
    function Hg(e) {
      lc === null ? lc = [e] : lc.push(e);
    }
    function Ib() {
      if (lc !== null) {
        for (var e = 0; e < lc.length; e++) {
          var t = lc[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, o = t.pending;
            if (o !== null) {
              var s = o.next;
              o.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        lc = null;
      }
    }
    function X_(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, Hg(t)) : (a.next = o.next, o.next = a), t.interleaved = a, vm(e, i);
    }
    function Bb(e, t, a, i) {
      var o = t.interleaved;
      o === null ? (a.next = a, Hg(t)) : (a.next = o.next, o.next = a), t.interleaved = a;
    }
    function $b(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, Hg(t)) : (a.next = o.next, o.next = a), t.interleaved = a, vm(e, i);
    }
    function Ba(e, t) {
      return vm(e, t);
    }
    var Wb = vm;
    function vm(e, t) {
      e.lanes = Ct(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Ct(a.lanes, t)), a === null && (e.flags & (gn | Jr)) !== Je && QC(e);
      for (var i = e, o = e.return; o !== null; )
        o.childLanes = Ct(o.childLanes, t), a = o.alternate, a !== null ? a.childLanes = Ct(a.childLanes, t) : (o.flags & (gn | Jr)) !== Je && QC(e), i = o, o = o.return;
      if (i.tag === $) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var Z_ = 0, J_ = 1, hm = 2, Ig = 3, mm = !1, Bg, ym;
    Bg = !1, ym = null;
    function $g(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: le
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function e1(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var o = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = o;
      }
    }
    function Qo(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: Z_,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Iu(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var o = i.shared;
      if (ym === o && !Bg && (v("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Bg = !0), Bx()) {
        var s = o.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), o.pending = t, Wb(e, a);
      } else
        return $b(e, o, t, a);
    }
    function gm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var o = i.shared;
        if (Qd(a)) {
          var s = o.lanes;
          s = qd(s, e.pendingLanes);
          var f = Ct(s, a);
          o.lanes = f, pf(e, f);
        }
      }
    }
    function Wg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var o = i.updateQueue;
        if (a === o) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var g = p;
            do {
              var C = {
                eventTime: g.eventTime,
                lane: g.lane,
                tag: g.tag,
                payload: g.payload,
                callback: g.callback,
                next: null
              };
              f === null ? s = f = C : (f.next = C, f = C), g = g.next;
            } while (g !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: o.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: o.shared,
            effects: o.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var E = a.lastBaseUpdate;
      E === null ? a.firstBaseUpdate = t : E.next = t, a.lastBaseUpdate = t;
    }
    function Yb(e, t, a, i, o, s) {
      switch (a.tag) {
        case J_: {
          var f = a.payload;
          if (typeof f == "function") {
            G_();
            var p = f.call(s, i, o);
            {
              if (e.mode & en) {
                Sn(!0);
                try {
                  f.call(s, i, o);
                } finally {
                  Sn(!1);
                }
              }
              q_();
            }
            return p;
          }
          return f;
        }
        case Ig:
          e.flags = e.flags & ~tr | Ke;
        // Intentional fallthrough
        case Z_: {
          var g = a.payload, C;
          if (typeof g == "function") {
            G_(), C = g.call(s, i, o);
            {
              if (e.mode & en) {
                Sn(!0);
                try {
                  g.call(s, i, o);
                } finally {
                  Sn(!1);
                }
              }
              q_();
            }
          } else
            C = g;
          return C == null ? i : Rt({}, i, C);
        }
        case hm:
          return mm = !0, i;
      }
      return i;
    }
    function Sm(e, t, a, i) {
      var o = e.updateQueue;
      mm = !1, ym = o.shared;
      var s = o.firstBaseUpdate, f = o.lastBaseUpdate, p = o.shared.pending;
      if (p !== null) {
        o.shared.pending = null;
        var g = p, C = g.next;
        g.next = null, f === null ? s = C : f.next = C, f = g;
        var E = e.alternate;
        if (E !== null) {
          var A = E.updateQueue, N = A.lastBaseUpdate;
          N !== f && (N === null ? A.firstBaseUpdate = C : N.next = C, A.lastBaseUpdate = g);
        }
      }
      if (s !== null) {
        var I = o.baseState, Y = le, Z = null, De = null, rt = null, qe = s;
        do {
          var Ut = qe.lane, Ot = qe.eventTime;
          if (Uo(i, Ut)) {
            if (rt !== null) {
              var J = {
                eventTime: Ot,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Ft,
                tag: qe.tag,
                payload: qe.payload,
                callback: qe.callback,
                next: null
              };
              rt = rt.next = J;
            }
            I = Yb(e, o, qe, I, t, a);
            var V = qe.callback;
            if (V !== null && // If the update was already committed, we should not queue its
            // callback again.
            qe.lane !== Ft) {
              e.flags |= sn;
              var pe = o.effects;
              pe === null ? o.effects = [qe] : pe.push(qe);
            }
          } else {
            var P = {
              eventTime: Ot,
              lane: Ut,
              tag: qe.tag,
              payload: qe.payload,
              callback: qe.callback,
              next: null
            };
            rt === null ? (De = rt = P, Z = I) : rt = rt.next = P, Y = Ct(Y, Ut);
          }
          if (qe = qe.next, qe === null) {
            if (p = o.shared.pending, p === null)
              break;
            var je = p, Ne = je.next;
            je.next = null, qe = Ne, o.lastBaseUpdate = je, o.shared.pending = null;
          }
        } while (!0);
        rt === null && (Z = I), o.baseState = Z, o.firstBaseUpdate = De, o.lastBaseUpdate = rt;
        var ft = o.shared.interleaved;
        if (ft !== null) {
          var gt = ft;
          do
            Y = Ct(Y, gt.lane), gt = gt.next;
          while (gt !== ft);
        } else s === null && (o.shared.lanes = le);
        ov(Y), e.lanes = Y, e.memoizedState = I;
      }
      ym = null;
    }
    function Qb(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function t1() {
      mm = !1;
    }
    function _m() {
      return mm;
    }
    function n1(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o], f = s.callback;
          f !== null && (s.callback = null, Qb(f, a));
        }
    }
    var Up = {}, Bu = Fu(Up), jp = Fu(Up), Cm = Fu(Up);
    function Em(e) {
      if (e === Up)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function r1() {
      var e = Em(Cm.current);
      return e;
    }
    function Yg(e, t) {
      sa(Cm, t, e), sa(jp, e, e), sa(Bu, Up, e);
      var a = cR(t);
      ua(Bu, e), sa(Bu, a, e);
    }
    function If(e) {
      ua(Bu, e), ua(jp, e), ua(Cm, e);
    }
    function Qg() {
      var e = Em(Bu.current);
      return e;
    }
    function a1(e) {
      Em(Cm.current);
      var t = Em(Bu.current), a = fR(t, e.type);
      t !== a && (sa(jp, e, e), sa(Bu, a, e));
    }
    function Gg(e) {
      jp.current === e && (ua(Bu, e), ua(jp, e));
    }
    var Gb = 0, i1 = 1, l1 = 1, zp = 2, fl = Fu(Gb);
    function qg(e, t) {
      return (e & t) !== 0;
    }
    function Bf(e) {
      return e & i1;
    }
    function Kg(e, t) {
      return e & i1 | t;
    }
    function qb(e, t) {
      return e | t;
    }
    function $u(e, t) {
      sa(fl, t, e);
    }
    function $f(e) {
      ua(fl, e);
    }
    function Kb(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Rm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === ve) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || R_(i) || vg(i))
              return t;
          }
        } else if (t.tag === ut && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var o = (t.flags & Ke) !== Je;
          if (o)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var $a = (
      /*   */
      0
    ), vr = (
      /* */
      1
    ), Xl = (
      /*  */
      2
    ), hr = (
      /*    */
      4
    ), Hr = (
      /*   */
      8
    ), Xg = [];
    function Zg() {
      for (var e = 0; e < Xg.length; e++) {
        var t = Xg[e];
        t._workInProgressVersionPrimary = null;
      }
      Xg.length = 0;
    }
    function Xb(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Ae = h.ReactCurrentDispatcher, Fp = h.ReactCurrentBatchConfig, Jg, Wf;
    Jg = /* @__PURE__ */ new Set();
    var oc = le, tn = null, mr = null, yr = null, bm = !1, Pp = !1, Vp = 0, Zb = 0, Jb = 25, ne = null, Pi = null, Wu = -1, e0 = !1;
    function Qt() {
      {
        var e = ne;
        Pi === null ? Pi = [e] : Pi.push(e);
      }
    }
    function Re() {
      {
        var e = ne;
        Pi !== null && (Wu++, Pi[Wu] !== e && eT(e));
      }
    }
    function Yf(e) {
      e != null && !Tt(e) && v("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ne, typeof e);
    }
    function eT(e) {
      {
        var t = vt(tn);
        if (!Jg.has(t) && (Jg.add(t), Pi !== null)) {
          for (var a = "", i = 30, o = 0; o <= Wu; o++) {
            for (var s = Pi[o], f = o === Wu ? e : s, p = o + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          v(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function ca() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function t0(e, t) {
      if (e0)
        return !1;
      if (t === null)
        return v("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ne), !1;
      e.length !== t.length && v(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ne, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!ce(e[a], t[a]))
          return !1;
      return !0;
    }
    function Qf(e, t, a, i, o, s) {
      oc = s, tn = t, Pi = e !== null ? e._debugHookTypes : null, Wu = -1, e0 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = le, e !== null && e.memoizedState !== null ? Ae.current = k1 : Pi !== null ? Ae.current = w1 : Ae.current = x1;
      var f = a(i, o);
      if (Pp) {
        var p = 0;
        do {
          if (Pp = !1, Vp = 0, p >= Jb)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, e0 = !1, mr = null, yr = null, t.updateQueue = null, Wu = -1, Ae.current = D1, f = a(i, o);
        } while (Pp);
      }
      Ae.current = zm, t._debugHookTypes = Pi;
      var g = mr !== null && mr.next !== null;
      if (oc = le, tn = null, mr = null, yr = null, ne = null, Pi = null, Wu = -1, e !== null && (e.flags & zn) !== (t.flags & zn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & wt) !== et && v("Internal React error: Expected static flag was missing. Please notify the React team."), bm = !1, g)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Gf() {
      var e = Vp !== 0;
      return Vp = 0, e;
    }
    function o1(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Ht) !== et ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = Ms(e.lanes, a);
    }
    function u1() {
      if (Ae.current = zm, bm) {
        for (var e = tn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        bm = !1;
      }
      oc = le, tn = null, mr = null, yr = null, Pi = null, Wu = -1, ne = null, C1 = !1, Pp = !1, Vp = 0;
    }
    function Zl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return yr === null ? tn.memoizedState = yr = e : yr = yr.next = e, yr;
    }
    function Vi() {
      var e;
      if (mr === null) {
        var t = tn.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = mr.next;
      var a;
      if (yr === null ? a = tn.memoizedState : a = yr.next, a !== null)
        yr = a, a = yr.next, mr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        mr = e;
        var i = {
          memoizedState: mr.memoizedState,
          baseState: mr.baseState,
          baseQueue: mr.baseQueue,
          queue: mr.queue,
          next: null
        };
        yr === null ? tn.memoizedState = yr = i : yr = yr.next = i;
      }
      return yr;
    }
    function s1() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function n0(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function r0(e, t, a) {
      var i = Zl(), o;
      a !== void 0 ? o = a(t) : o = t, i.memoizedState = i.baseState = o;
      var s = {
        pending: null,
        interleaved: null,
        lanes: le,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      };
      i.queue = s;
      var f = s.dispatch = aT.bind(null, tn, s);
      return [i.memoizedState, f];
    }
    function a0(e, t, a) {
      var i = Vi(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var s = mr, f = s.baseQueue, p = o.pending;
      if (p !== null) {
        if (f !== null) {
          var g = f.next, C = p.next;
          f.next = C, p.next = g;
        }
        s.baseQueue !== f && v("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, o.pending = null;
      }
      if (f !== null) {
        var E = f.next, A = s.baseState, N = null, I = null, Y = null, Z = E;
        do {
          var De = Z.lane;
          if (Uo(oc, De)) {
            if (Y !== null) {
              var qe = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Ft,
                action: Z.action,
                hasEagerState: Z.hasEagerState,
                eagerState: Z.eagerState,
                next: null
              };
              Y = Y.next = qe;
            }
            if (Z.hasEagerState)
              A = Z.eagerState;
            else {
              var Ut = Z.action;
              A = e(A, Ut);
            }
          } else {
            var rt = {
              lane: De,
              action: Z.action,
              hasEagerState: Z.hasEagerState,
              eagerState: Z.eagerState,
              next: null
            };
            Y === null ? (I = Y = rt, N = A) : Y = Y.next = rt, tn.lanes = Ct(tn.lanes, De), ov(De);
          }
          Z = Z.next;
        } while (Z !== null && Z !== E);
        Y === null ? N = A : Y.next = I, ce(A, i.memoizedState) || qp(), i.memoizedState = A, i.baseState = N, i.baseQueue = Y, o.lastRenderedState = A;
      }
      var Ot = o.interleaved;
      if (Ot !== null) {
        var P = Ot;
        do {
          var J = P.lane;
          tn.lanes = Ct(tn.lanes, J), ov(J), P = P.next;
        } while (P !== Ot);
      } else f === null && (o.lanes = le);
      var V = o.dispatch;
      return [i.memoizedState, V];
    }
    function i0(e, t, a) {
      var i = Vi(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var s = o.dispatch, f = o.pending, p = i.memoizedState;
      if (f !== null) {
        o.pending = null;
        var g = f.next, C = g;
        do {
          var E = C.action;
          p = e(p, E), C = C.next;
        } while (C !== g);
        ce(p, i.memoizedState) || qp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), o.lastRenderedState = p;
      }
      return [p, s];
    }
    function QO(e, t, a) {
    }
    function GO(e, t, a) {
    }
    function l0(e, t, a) {
      var i = tn, o = Zl(), s, f = Vr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Wf || s !== a() && (v("The result of getServerSnapshot should be cached to avoid an infinite loop"), Wf = !0);
      } else {
        if (s = t(), !Wf) {
          var p = t();
          ce(s, p) || (v("The result of getSnapshot should be cached to avoid an infinite loop"), Wf = !0);
        }
        var g = ny();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ff(g, oc) || c1(i, t, s);
      }
      o.memoizedState = s;
      var C = {
        value: s,
        getSnapshot: t
      };
      return o.queue = C, Dm(d1.bind(null, i, C, e), [e]), i.flags |= Zr, Hp(vr | Hr, f1.bind(null, i, C, s, t), void 0, null), s;
    }
    function Tm(e, t, a) {
      var i = tn, o = Vi(), s = t();
      if (!Wf) {
        var f = t();
        ce(s, f) || (v("The result of getSnapshot should be cached to avoid an infinite loop"), Wf = !0);
      }
      var p = o.memoizedState, g = !ce(p, s);
      g && (o.memoizedState = s, qp());
      var C = o.queue;
      if (Bp(d1.bind(null, i, C, e), [e]), C.getSnapshot !== t || g || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      yr !== null && yr.memoizedState.tag & vr) {
        i.flags |= Zr, Hp(vr | Hr, f1.bind(null, i, C, s, t), void 0, null);
        var E = ny();
        if (E === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ff(E, oc) || c1(i, t, s);
      }
      return s;
    }
    function c1(e, t, a) {
      e.flags |= Eu;
      var i = {
        getSnapshot: t,
        value: a
      }, o = tn.updateQueue;
      if (o === null)
        o = s1(), tn.updateQueue = o, o.stores = [i];
      else {
        var s = o.stores;
        s === null ? o.stores = [i] : s.push(i);
      }
    }
    function f1(e, t, a, i) {
      t.value = a, t.getSnapshot = i, p1(t) && v1(e);
    }
    function d1(e, t, a) {
      var i = function() {
        p1(t) && v1(e);
      };
      return a(i);
    }
    function p1(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !ce(a, i);
      } catch {
        return !0;
      }
    }
    function v1(e) {
      var t = Ba(e, ct);
      t !== null && Cr(t, e, ct, rn);
    }
    function xm(e) {
      var t = Zl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: le,
        dispatch: null,
        lastRenderedReducer: n0,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = iT.bind(null, tn, a);
      return [t.memoizedState, i];
    }
    function o0(e) {
      return a0(n0);
    }
    function u0(e) {
      return i0(n0);
    }
    function Hp(e, t, a, i) {
      var o = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = tn.updateQueue;
      if (s === null)
        s = s1(), tn.updateQueue = s, s.lastEffect = o.next = o;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = o.next = o;
        else {
          var p = f.next;
          f.next = o, o.next = p, s.lastEffect = o;
        }
      }
      return o;
    }
    function s0(e) {
      var t = Zl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function wm(e) {
      var t = Vi();
      return t.memoizedState;
    }
    function Ip(e, t, a, i) {
      var o = Zl(), s = i === void 0 ? null : i;
      tn.flags |= e, o.memoizedState = Hp(vr | t, a, void 0, s);
    }
    function km(e, t, a, i) {
      var o = Vi(), s = i === void 0 ? null : i, f = void 0;
      if (mr !== null) {
        var p = mr.memoizedState;
        if (f = p.destroy, s !== null) {
          var g = p.deps;
          if (t0(s, g)) {
            o.memoizedState = Hp(t, a, f, s);
            return;
          }
        }
      }
      tn.flags |= e, o.memoizedState = Hp(vr | t, a, f, s);
    }
    function Dm(e, t) {
      return (tn.mode & Ht) !== et ? Ip(wi | Zr | zc, Hr, e, t) : Ip(Zr | zc, Hr, e, t);
    }
    function Bp(e, t) {
      return km(Zr, Hr, e, t);
    }
    function c0(e, t) {
      return Ip(Nt, Xl, e, t);
    }
    function Om(e, t) {
      return km(Nt, Xl, e, t);
    }
    function f0(e, t) {
      var a = Nt;
      return a |= Ji, (tn.mode & Ht) !== et && (a |= Ml), Ip(a, hr, e, t);
    }
    function Lm(e, t) {
      return km(Nt, hr, e, t);
    }
    function h1(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var o = t;
        o.hasOwnProperty("current") || v("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(o).join(", ") + "}");
        var s = e();
        return o.current = s, function() {
          o.current = null;
        };
      }
    }
    function d0(e, t, a) {
      typeof t != "function" && v("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, o = Nt;
      return o |= Ji, (tn.mode & Ht) !== et && (o |= Ml), Ip(o, hr, h1.bind(null, t, e), i);
    }
    function Nm(e, t, a) {
      typeof t != "function" && v("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return km(Nt, hr, h1.bind(null, t, e), i);
    }
    function tT(e, t) {
    }
    var Mm = tT;
    function p0(e, t) {
      var a = Zl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Am(e, t) {
      var a = Vi(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var s = o[1];
        if (t0(i, s))
          return o[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function v0(e, t) {
      var a = Zl(), i = t === void 0 ? null : t, o = e();
      return a.memoizedState = [o, i], o;
    }
    function Um(e, t) {
      var a = Vi(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var s = o[1];
        if (t0(i, s))
          return o[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function h0(e) {
      var t = Zl();
      return t.memoizedState = e, e;
    }
    function m1(e) {
      var t = Vi(), a = mr, i = a.memoizedState;
      return g1(t, i, e);
    }
    function y1(e) {
      var t = Vi();
      if (mr === null)
        return t.memoizedState = e, e;
      var a = mr.memoizedState;
      return g1(t, a, e);
    }
    function g1(e, t, a) {
      var i = !Wd(oc);
      if (i) {
        if (!ce(a, t)) {
          var o = Gd();
          tn.lanes = Ct(tn.lanes, o), ov(o), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, qp()), e.memoizedState = a, a;
    }
    function nT(e, t, a) {
      var i = Va();
      Vn(dh(i, Li)), e(!0);
      var o = Fp.transition;
      Fp.transition = {};
      var s = Fp.transition;
      Fp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Vn(i), Fp.transition = o, o === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && b("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function m0() {
      var e = xm(!1), t = e[0], a = e[1], i = nT.bind(null, a), o = Zl();
      return o.memoizedState = i, [t, i];
    }
    function S1() {
      var e = o0(), t = e[0], a = Vi(), i = a.memoizedState;
      return [t, i];
    }
    function _1() {
      var e = u0(), t = e[0], a = Vi(), i = a.memoizedState;
      return [t, i];
    }
    var C1 = !1;
    function rT() {
      return C1;
    }
    function y0() {
      var e = Zl(), t = ny(), a = t.identifierPrefix, i;
      if (Vr()) {
        var o = _b();
        i = ":" + a + "R" + o;
        var s = Vp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Zb++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function jm() {
      var e = Vi(), t = e.memoizedState;
      return t;
    }
    function aT(e, t, a) {
      typeof arguments[3] == "function" && v("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Ku(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (E1(e))
        R1(t, o);
      else {
        var s = X_(e, t, o, i);
        if (s !== null) {
          var f = Ta();
          Cr(s, e, i, f), b1(s, t, i);
        }
      }
      T1(e, i);
    }
    function iT(e, t, a) {
      typeof arguments[3] == "function" && v("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Ku(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (E1(e))
        R1(t, o);
      else {
        var s = e.alternate;
        if (e.lanes === le && (s === null || s.lanes === le)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = Ae.current, Ae.current = dl;
            try {
              var g = t.lastRenderedState, C = f(g, a);
              if (o.hasEagerState = !0, o.eagerState = C, ce(C, g)) {
                Bb(e, t, o, i);
                return;
              }
            } catch {
            } finally {
              Ae.current = p;
            }
          }
        }
        var E = X_(e, t, o, i);
        if (E !== null) {
          var A = Ta();
          Cr(E, e, i, A), b1(E, t, i);
        }
      }
      T1(e, i);
    }
    function E1(e) {
      var t = e.alternate;
      return e === tn || t !== null && t === tn;
    }
    function R1(e, t) {
      Pp = bm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function b1(e, t, a) {
      if (Qd(a)) {
        var i = t.lanes;
        i = qd(i, e.pendingLanes);
        var o = Ct(i, a);
        t.lanes = o, pf(e, o);
      }
    }
    function T1(e, t, a) {
      Rs(e, t);
    }
    var zm = {
      readContext: ir,
      useCallback: ca,
      useContext: ca,
      useEffect: ca,
      useImperativeHandle: ca,
      useInsertionEffect: ca,
      useLayoutEffect: ca,
      useMemo: ca,
      useReducer: ca,
      useRef: ca,
      useState: ca,
      useDebugValue: ca,
      useDeferredValue: ca,
      useTransition: ca,
      useMutableSource: ca,
      useSyncExternalStore: ca,
      useId: ca,
      unstable_isNewReconciler: te
    }, x1 = null, w1 = null, k1 = null, D1 = null, Jl = null, dl = null, Fm = null;
    {
      var g0 = function() {
        v("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, yt = function() {
        v("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      x1 = {
        readContext: function(e) {
          return ir(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", Qt(), Yf(t), p0(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", Qt(), ir(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", Qt(), Yf(t), Dm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", Qt(), Yf(a), d0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", Qt(), Yf(t), c0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", Qt(), Yf(t), f0(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", Qt(), Yf(t);
          var a = Ae.current;
          Ae.current = Jl;
          try {
            return v0(e, t);
          } finally {
            Ae.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", Qt();
          var i = Ae.current;
          Ae.current = Jl;
          try {
            return r0(e, t, a);
          } finally {
            Ae.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", Qt(), s0(e);
        },
        useState: function(e) {
          ne = "useState", Qt();
          var t = Ae.current;
          Ae.current = Jl;
          try {
            return xm(e);
          } finally {
            Ae.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", Qt(), void 0;
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", Qt(), h0(e);
        },
        useTransition: function() {
          return ne = "useTransition", Qt(), m0();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", Qt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", Qt(), l0(e, t, a);
        },
        useId: function() {
          return ne = "useId", Qt(), y0();
        },
        unstable_isNewReconciler: te
      }, w1 = {
        readContext: function(e) {
          return ir(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", Re(), p0(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", Re(), ir(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", Re(), Dm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", Re(), d0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", Re(), c0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", Re(), f0(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", Re();
          var a = Ae.current;
          Ae.current = Jl;
          try {
            return v0(e, t);
          } finally {
            Ae.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", Re();
          var i = Ae.current;
          Ae.current = Jl;
          try {
            return r0(e, t, a);
          } finally {
            Ae.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", Re(), s0(e);
        },
        useState: function(e) {
          ne = "useState", Re();
          var t = Ae.current;
          Ae.current = Jl;
          try {
            return xm(e);
          } finally {
            Ae.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", Re(), void 0;
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", Re(), h0(e);
        },
        useTransition: function() {
          return ne = "useTransition", Re(), m0();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", Re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", Re(), l0(e, t, a);
        },
        useId: function() {
          return ne = "useId", Re(), y0();
        },
        unstable_isNewReconciler: te
      }, k1 = {
        readContext: function(e) {
          return ir(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", Re(), Am(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", Re(), ir(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", Re(), Bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", Re(), Nm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", Re(), Om(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", Re(), Lm(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", Re();
          var a = Ae.current;
          Ae.current = dl;
          try {
            return Um(e, t);
          } finally {
            Ae.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", Re();
          var i = Ae.current;
          Ae.current = dl;
          try {
            return a0(e, t, a);
          } finally {
            Ae.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", Re(), wm();
        },
        useState: function(e) {
          ne = "useState", Re();
          var t = Ae.current;
          Ae.current = dl;
          try {
            return o0(e);
          } finally {
            Ae.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", Re(), Mm();
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", Re(), m1(e);
        },
        useTransition: function() {
          return ne = "useTransition", Re(), S1();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", Re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", Re(), Tm(e, t);
        },
        useId: function() {
          return ne = "useId", Re(), jm();
        },
        unstable_isNewReconciler: te
      }, D1 = {
        readContext: function(e) {
          return ir(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", Re(), Am(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", Re(), ir(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", Re(), Bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", Re(), Nm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", Re(), Om(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", Re(), Lm(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", Re();
          var a = Ae.current;
          Ae.current = Fm;
          try {
            return Um(e, t);
          } finally {
            Ae.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", Re();
          var i = Ae.current;
          Ae.current = Fm;
          try {
            return i0(e, t, a);
          } finally {
            Ae.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", Re(), wm();
        },
        useState: function(e) {
          ne = "useState", Re();
          var t = Ae.current;
          Ae.current = Fm;
          try {
            return u0(e);
          } finally {
            Ae.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", Re(), Mm();
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", Re(), y1(e);
        },
        useTransition: function() {
          return ne = "useTransition", Re(), _1();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", Re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", Re(), Tm(e, t);
        },
        useId: function() {
          return ne = "useId", Re(), jm();
        },
        unstable_isNewReconciler: te
      }, Jl = {
        readContext: function(e) {
          return g0(), ir(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", yt(), Qt(), p0(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", yt(), Qt(), ir(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", yt(), Qt(), Dm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", yt(), Qt(), d0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", yt(), Qt(), c0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", yt(), Qt(), f0(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", yt(), Qt();
          var a = Ae.current;
          Ae.current = Jl;
          try {
            return v0(e, t);
          } finally {
            Ae.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", yt(), Qt();
          var i = Ae.current;
          Ae.current = Jl;
          try {
            return r0(e, t, a);
          } finally {
            Ae.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", yt(), Qt(), s0(e);
        },
        useState: function(e) {
          ne = "useState", yt(), Qt();
          var t = Ae.current;
          Ae.current = Jl;
          try {
            return xm(e);
          } finally {
            Ae.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", yt(), Qt(), void 0;
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", yt(), Qt(), h0(e);
        },
        useTransition: function() {
          return ne = "useTransition", yt(), Qt(), m0();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", yt(), Qt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", yt(), Qt(), l0(e, t, a);
        },
        useId: function() {
          return ne = "useId", yt(), Qt(), y0();
        },
        unstable_isNewReconciler: te
      }, dl = {
        readContext: function(e) {
          return g0(), ir(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", yt(), Re(), Am(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", yt(), Re(), ir(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", yt(), Re(), Bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", yt(), Re(), Nm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", yt(), Re(), Om(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", yt(), Re(), Lm(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", yt(), Re();
          var a = Ae.current;
          Ae.current = dl;
          try {
            return Um(e, t);
          } finally {
            Ae.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", yt(), Re();
          var i = Ae.current;
          Ae.current = dl;
          try {
            return a0(e, t, a);
          } finally {
            Ae.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", yt(), Re(), wm();
        },
        useState: function(e) {
          ne = "useState", yt(), Re();
          var t = Ae.current;
          Ae.current = dl;
          try {
            return o0(e);
          } finally {
            Ae.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", yt(), Re(), Mm();
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", yt(), Re(), m1(e);
        },
        useTransition: function() {
          return ne = "useTransition", yt(), Re(), S1();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", yt(), Re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", yt(), Re(), Tm(e, t);
        },
        useId: function() {
          return ne = "useId", yt(), Re(), jm();
        },
        unstable_isNewReconciler: te
      }, Fm = {
        readContext: function(e) {
          return g0(), ir(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", yt(), Re(), Am(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", yt(), Re(), ir(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", yt(), Re(), Bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", yt(), Re(), Nm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", yt(), Re(), Om(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", yt(), Re(), Lm(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", yt(), Re();
          var a = Ae.current;
          Ae.current = dl;
          try {
            return Um(e, t);
          } finally {
            Ae.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", yt(), Re();
          var i = Ae.current;
          Ae.current = dl;
          try {
            return i0(e, t, a);
          } finally {
            Ae.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", yt(), Re(), wm();
        },
        useState: function(e) {
          ne = "useState", yt(), Re();
          var t = Ae.current;
          Ae.current = dl;
          try {
            return u0(e);
          } finally {
            Ae.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", yt(), Re(), Mm();
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", yt(), Re(), y1(e);
        },
        useTransition: function() {
          return ne = "useTransition", yt(), Re(), _1();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", yt(), Re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", yt(), Re(), Tm(e, t);
        },
        useId: function() {
          return ne = "useId", yt(), Re(), jm();
        },
        unstable_isNewReconciler: te
      };
    }
    var Yu = y.unstable_now, O1 = 0, Pm = -1, $p = -1, Vm = -1, S0 = !1, Hm = !1;
    function L1() {
      return S0;
    }
    function lT() {
      Hm = !0;
    }
    function oT() {
      S0 = !1, Hm = !1;
    }
    function uT() {
      S0 = Hm, Hm = !1;
    }
    function N1() {
      return O1;
    }
    function M1() {
      O1 = Yu();
    }
    function _0(e) {
      $p = Yu(), e.actualStartTime < 0 && (e.actualStartTime = Yu());
    }
    function A1(e) {
      $p = -1;
    }
    function Im(e, t) {
      if ($p >= 0) {
        var a = Yu() - $p;
        e.actualDuration += a, t && (e.selfBaseDuration = a), $p = -1;
      }
    }
    function eo(e) {
      if (Pm >= 0) {
        var t = Yu() - Pm;
        Pm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case $:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Ee:
              var o = a.stateNode;
              o.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function C0(e) {
      if (Vm >= 0) {
        var t = Yu() - Vm;
        Vm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case $:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Ee:
              var o = a.stateNode;
              o !== null && (o.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function to() {
      Pm = Yu();
    }
    function E0() {
      Vm = Yu();
    }
    function R0(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function pl(e, t) {
      if (e && e.defaultProps) {
        var a = Rt({}, t), i = e.defaultProps;
        for (var o in i)
          a[o] === void 0 && (a[o] = i[o]);
        return a;
      }
      return t;
    }
    var b0 = {}, T0, x0, w0, k0, D0, U1, Bm, O0, L0, N0, Wp;
    {
      T0 = /* @__PURE__ */ new Set(), x0 = /* @__PURE__ */ new Set(), w0 = /* @__PURE__ */ new Set(), k0 = /* @__PURE__ */ new Set(), O0 = /* @__PURE__ */ new Set(), D0 = /* @__PURE__ */ new Set(), L0 = /* @__PURE__ */ new Set(), N0 = /* @__PURE__ */ new Set(), Wp = /* @__PURE__ */ new Set();
      var j1 = /* @__PURE__ */ new Set();
      Bm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          j1.has(a) || (j1.add(a), v("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, U1 = function(e, t) {
        if (t === void 0) {
          var a = jt(e) || "Component";
          D0.has(a) || (D0.add(a), v("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(b0, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(b0);
    }
    function M0(e, t, a, i) {
      var o = e.memoizedState, s = a(i, o);
      {
        if (e.mode & en) {
          Sn(!0);
          try {
            s = a(i, o);
          } finally {
            Sn(!1);
          }
        }
        U1(t, s);
      }
      var f = s == null ? o : Rt({}, o, s);
      if (e.memoizedState = f, e.lanes === le) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var A0 = {
      isMounted: Kv,
      enqueueSetState: function(e, t, a) {
        var i = Cu(e), o = Ta(), s = Ku(i), f = Qo(o, s);
        f.payload = t, a != null && (Bm(a, "setState"), f.callback = a);
        var p = Iu(i, f, s);
        p !== null && (Cr(p, i, s, o), gm(p, i, s)), Rs(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Cu(e), o = Ta(), s = Ku(i), f = Qo(o, s);
        f.tag = J_, f.payload = t, a != null && (Bm(a, "replaceState"), f.callback = a);
        var p = Iu(i, f, s);
        p !== null && (Cr(p, i, s, o), gm(p, i, s)), Rs(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Cu(e), i = Ta(), o = Ku(a), s = Qo(i, o);
        s.tag = hm, t != null && (Bm(t, "forceUpdate"), s.callback = t);
        var f = Iu(a, s, o);
        f !== null && (Cr(f, a, o, i), gm(f, a, o)), $c(a, o);
      }
    };
    function z1(e, t, a, i, o, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var g = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & en) {
            Sn(!0);
            try {
              g = p.shouldComponentUpdate(i, s, f);
            } finally {
              Sn(!1);
            }
          }
          g === void 0 && v("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", jt(t) || "Component");
        }
        return g;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Be(a, i) || !Be(o, s) : !0;
    }
    function sT(e, t, a) {
      var i = e.stateNode;
      {
        var o = jt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? v("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", o) : v("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", o)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && v("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", o), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && v("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", o), i.propTypes && v("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", o), i.contextType && v("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", o), t.childContextTypes && !Wp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & en) === et && (Wp.add(t), v(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, o)), t.contextTypes && !Wp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & en) === et && (Wp.add(t), v(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, o)), i.contextTypes && v("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", o), t.contextType && t.contextTypes && !L0.has(t) && (L0.add(t), v("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", o)), typeof i.componentShouldUpdate == "function" && v("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", o), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && v("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", jt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && v("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", o), typeof i.componentDidReceiveProps == "function" && v("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", o), typeof i.componentWillRecieveProps == "function" && v("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", o), typeof i.UNSAFE_componentWillRecieveProps == "function" && v("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", o);
        var f = i.props !== a;
        i.props !== void 0 && f && v("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", o, o), i.defaultProps && v("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", o, o), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !w0.has(t) && (w0.add(t), v("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", jt(t))), typeof i.getDerivedStateFromProps == "function" && v("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof i.getDerivedStateFromError == "function" && v("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof t.getSnapshotBeforeUpdate == "function" && v("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", o);
        var p = i.state;
        p && (typeof p != "object" || Tt(p)) && v("%s.state: must be set to an object or null", o), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && v("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", o);
      }
    }
    function F1(e, t) {
      t.updater = A0, e.stateNode = t, Co(t, e), t._reactInternalInstance = b0;
    }
    function P1(e, t, a) {
      var i = !1, o = fi, s = fi, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === D && f._context === void 0
        );
        if (!p && !N0.has(t)) {
          N0.add(t);
          var g = "";
          f === void 0 ? g = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? g = " However, it is set to a " + typeof f + "." : f.$$typeof === gi ? g = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? g = " Did you accidentally pass the Context.Consumer instead?" : g = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", v("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", jt(t) || "Component", g);
        }
      }
      if (typeof f == "object" && f !== null)
        s = ir(f);
      else {
        o = Af(e, t, !0);
        var C = t.contextTypes;
        i = C != null, s = i ? Uf(e, o) : fi;
      }
      var E = new t(a, s);
      if (e.mode & en) {
        Sn(!0);
        try {
          E = new t(a, s);
        } finally {
          Sn(!1);
        }
      }
      var A = e.memoizedState = E.state !== null && E.state !== void 0 ? E.state : null;
      F1(e, E);
      {
        if (typeof t.getDerivedStateFromProps == "function" && A === null) {
          var N = jt(t) || "Component";
          x0.has(N) || (x0.add(N), v("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", N, E.state === null ? "null" : "undefined", N));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof E.getSnapshotBeforeUpdate == "function") {
          var I = null, Y = null, Z = null;
          if (typeof E.componentWillMount == "function" && E.componentWillMount.__suppressDeprecationWarning !== !0 ? I = "componentWillMount" : typeof E.UNSAFE_componentWillMount == "function" && (I = "UNSAFE_componentWillMount"), typeof E.componentWillReceiveProps == "function" && E.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? Y = "componentWillReceiveProps" : typeof E.UNSAFE_componentWillReceiveProps == "function" && (Y = "UNSAFE_componentWillReceiveProps"), typeof E.componentWillUpdate == "function" && E.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Z = "componentWillUpdate" : typeof E.UNSAFE_componentWillUpdate == "function" && (Z = "UNSAFE_componentWillUpdate"), I !== null || Y !== null || Z !== null) {
            var De = jt(t) || "Component", rt = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            k0.has(De) || (k0.add(De), v(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, De, rt, I !== null ? `
  ` + I : "", Y !== null ? `
  ` + Y : "", Z !== null ? `
  ` + Z : ""));
          }
        }
      }
      return i && k_(e, o, s), E;
    }
    function cT(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (v("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", vt(e) || "Component"), A0.enqueueReplaceState(t, t.state, null));
    }
    function V1(e, t, a, i) {
      var o = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o) {
        {
          var s = vt(e) || "Component";
          T0.has(s) || (T0.add(s), v("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        A0.enqueueReplaceState(t, t.state, null);
      }
    }
    function U0(e, t, a, i) {
      sT(e, t, a);
      var o = e.stateNode;
      o.props = a, o.state = e.memoizedState, o.refs = {}, $g(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        o.context = ir(s);
      else {
        var f = Af(e, t, !0);
        o.context = Uf(e, f);
      }
      {
        if (o.state === a) {
          var p = jt(t) || "Component";
          O0.has(p) || (O0.add(p), v("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & en && cl.recordLegacyContextWarning(e, o), cl.recordUnsafeLifecycleWarnings(e, o);
      }
      o.state = e.memoizedState;
      var g = t.getDerivedStateFromProps;
      if (typeof g == "function" && (M0(e, t, g, a), o.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (cT(e, o), Sm(e, a, o, i), o.state = e.memoizedState), typeof o.componentDidMount == "function") {
        var C = Nt;
        C |= Ji, (e.mode & Ht) !== et && (C |= Ml), e.flags |= C;
      }
    }
    function fT(e, t, a, i) {
      var o = e.stateNode, s = e.memoizedProps;
      o.props = s;
      var f = o.context, p = t.contextType, g = fi;
      if (typeof p == "object" && p !== null)
        g = ir(p);
      else {
        var C = Af(e, t, !0);
        g = Uf(e, C);
      }
      var E = t.getDerivedStateFromProps, A = typeof E == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      !A && (typeof o.UNSAFE_componentWillReceiveProps == "function" || typeof o.componentWillReceiveProps == "function") && (s !== a || f !== g) && V1(e, o, a, g), t1();
      var N = e.memoizedState, I = o.state = N;
      if (Sm(e, a, o, i), I = e.memoizedState, s === a && N === I && !em() && !_m()) {
        if (typeof o.componentDidMount == "function") {
          var Y = Nt;
          Y |= Ji, (e.mode & Ht) !== et && (Y |= Ml), e.flags |= Y;
        }
        return !1;
      }
      typeof E == "function" && (M0(e, t, E, a), I = e.memoizedState);
      var Z = _m() || z1(e, t, s, a, N, I, g);
      if (Z) {
        if (!A && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function") {
          var De = Nt;
          De |= Ji, (e.mode & Ht) !== et && (De |= Ml), e.flags |= De;
        }
      } else {
        if (typeof o.componentDidMount == "function") {
          var rt = Nt;
          rt |= Ji, (e.mode & Ht) !== et && (rt |= Ml), e.flags |= rt;
        }
        e.memoizedProps = a, e.memoizedState = I;
      }
      return o.props = a, o.state = I, o.context = g, Z;
    }
    function dT(e, t, a, i, o) {
      var s = t.stateNode;
      e1(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : pl(t.type, f);
      s.props = p;
      var g = t.pendingProps, C = s.context, E = a.contextType, A = fi;
      if (typeof E == "object" && E !== null)
        A = ir(E);
      else {
        var N = Af(t, a, !0);
        A = Uf(t, N);
      }
      var I = a.getDerivedStateFromProps, Y = typeof I == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !Y && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== g || C !== A) && V1(t, s, i, A), t1();
      var Z = t.memoizedState, De = s.state = Z;
      if (Sm(t, i, s, o), De = t.memoizedState, f === g && Z === De && !em() && !_m() && !Oe)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= Nt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= Gn), !1;
      typeof I == "function" && (M0(t, a, I, i), De = t.memoizedState);
      var rt = _m() || z1(t, a, p, i, Z, De, A) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Oe;
      return rt ? (!Y && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, De, A), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, De, A)), typeof s.componentDidUpdate == "function" && (t.flags |= Nt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Gn)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= Nt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= Gn), t.memoizedProps = i, t.memoizedState = De), s.props = i, s.state = De, s.context = A, rt;
    }
    function uc(e, t) {
      return {
        value: e,
        source: t,
        stack: Qi(t),
        digest: null
      };
    }
    function j0(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function pT(e, t) {
      return !0;
    }
    function z0(e, t) {
      try {
        var a = pT(e, t);
        if (a === !1)
          return;
        var i = t.value, o = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === T)
            return;
          console.error(i);
        }
        var p = o ? vt(o) : null, g = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", C;
        if (e.tag === $)
          C = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var E = vt(e) || "Anonymous";
          C = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + E + ".");
        }
        var A = g + `
` + f + `

` + ("" + C);
        console.error(A);
      } catch (N) {
        setTimeout(function() {
          throw N;
        });
      }
    }
    var vT = typeof WeakMap == "function" ? WeakMap : Map;
    function H1(e, t, a) {
      var i = Qo(rn, a);
      i.tag = Ig, i.payload = {
        element: null
      };
      var o = t.value;
      return i.callback = function() {
        lw(o), z0(e, t);
      }, i;
    }
    function F0(e, t, a) {
      var i = Qo(rn, a);
      i.tag = Ig;
      var o = e.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var s = t.value;
        i.payload = function() {
          return o(s);
        }, i.callback = function() {
          ZC(e), z0(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        ZC(e), z0(e, t), typeof o != "function" && aw(this);
        var g = t.value, C = t.stack;
        this.componentDidCatch(g, {
          componentStack: C !== null ? C : ""
        }), typeof o != "function" && (aa(e.lanes, ct) || v("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", vt(e) || "Unknown"));
      }), i;
    }
    function I1(e, t, a) {
      var i = e.pingCache, o;
      if (i === null ? (i = e.pingCache = new vT(), o = /* @__PURE__ */ new Set(), i.set(t, o)) : (o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o))), !o.has(a)) {
        o.add(a);
        var s = ow.bind(null, e, t, a);
        na && uv(e, a), t.then(s, s);
      }
    }
    function hT(e, t, a, i) {
      var o = e.updateQueue;
      if (o === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        o.add(a);
    }
    function mT(e, t) {
      var a = e.tag;
      if ((e.mode & wt) === et && (a === k || a === ge || a === Pe)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function B1(e) {
      var t = e;
      do {
        if (t.tag === ve && Kb(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function $1(e, t, a, i, o) {
      if ((e.mode & wt) === et) {
        if (e === t)
          e.flags |= tr;
        else {
          if (e.flags |= Ke, a.flags |= jc, a.flags &= -52805, a.tag === T) {
            var s = a.alternate;
            if (s === null)
              a.tag = Xe;
            else {
              var f = Qo(rn, ct);
              f.tag = hm, Iu(a, f, ct);
            }
          }
          a.lanes = Ct(a.lanes, ct);
        }
        return e;
      }
      return e.flags |= tr, e.lanes = o, e;
    }
    function yT(e, t, a, i, o) {
      if (a.flags |= ys, na && uv(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        mT(a), Vr() && a.mode & wt && U_();
        var f = B1(t);
        if (f !== null) {
          f.flags &= ~Tr, $1(f, t, a, e, o), f.mode & wt && I1(e, s, o), hT(f, e, s);
          return;
        } else {
          if (!ah(o)) {
            I1(e, s, o), yS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Vr() && a.mode & wt) {
        U_();
        var g = B1(t);
        if (g !== null) {
          (g.flags & tr) === Je && (g.flags |= Tr), $1(g, t, a, e, o), Og(uc(i, a));
          return;
        }
      }
      i = uc(i, a), Kx(i);
      var C = t;
      do {
        switch (C.tag) {
          case $: {
            var E = i;
            C.flags |= tr;
            var A = Ns(o);
            C.lanes = Ct(C.lanes, A);
            var N = H1(C, E, A);
            Wg(C, N);
            return;
          }
          case T:
            var I = i, Y = C.type, Z = C.stateNode;
            if ((C.flags & Ke) === Je && (typeof Y.getDerivedStateFromError == "function" || Z !== null && typeof Z.componentDidCatch == "function" && !BC(Z))) {
              C.flags |= tr;
              var De = Ns(o);
              C.lanes = Ct(C.lanes, De);
              var rt = F0(C, I, De);
              Wg(C, rt);
              return;
            }
            break;
        }
        C = C.return;
      } while (C !== null);
    }
    function gT() {
      return null;
    }
    var Yp = h.ReactCurrentOwner, vl = !1, P0, Qp, V0, H0, I0, sc, B0, $m, Gp;
    P0 = {}, Qp = {}, V0 = {}, H0 = {}, I0 = {}, sc = !1, B0 = {}, $m = {}, Gp = {};
    function Ra(e, t, a, i) {
      e === null ? t.child = Q_(t, null, a, i) : t.child = Pf(t, e.child, a, i);
    }
    function ST(e, t, a, i) {
      t.child = Pf(t, e.child, null, i), t.child = Pf(t, null, a, i);
    }
    function W1(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && ul(
          s,
          i,
          // Resolved props
          "prop",
          jt(a)
        );
      }
      var f = a.render, p = t.ref, g, C;
      Hf(t, o), Sa(t);
      {
        if (Yp.current = t, Qn(!0), g = Qf(e, t, f, i, p, o), C = Gf(), t.mode & en) {
          Sn(!0);
          try {
            g = Qf(e, t, f, i, p, o), C = Gf();
          } finally {
            Sn(!1);
          }
        }
        Qn(!1);
      }
      return _a(), e !== null && !vl ? (o1(e, t, o), Go(e, t, o)) : (Vr() && C && bg(t), t.flags |= li, Ra(e, t, g, o), t.child);
    }
    function Y1(e, t, a, i, o) {
      if (e === null) {
        var s = a.type;
        if (bw(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = nd(s), t.tag = Pe, t.type = f, Y0(t, s), Q1(e, t, f, i, o);
        }
        {
          var p = s.propTypes;
          if (p && ul(
            p,
            i,
            // Resolved props
            "prop",
            jt(s)
          ), a.defaultProps !== void 0) {
            var g = jt(s) || "Unknown";
            Gp[g] || (v("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", g), Gp[g] = !0);
          }
        }
        var C = kS(a.type, null, i, t, t.mode, o);
        return C.ref = t.ref, C.return = t, t.child = C, C;
      }
      {
        var E = a.type, A = E.propTypes;
        A && ul(
          A,
          i,
          // Resolved props
          "prop",
          jt(E)
        );
      }
      var N = e.child, I = Z0(e, o);
      if (!I) {
        var Y = N.memoizedProps, Z = a.compare;
        if (Z = Z !== null ? Z : Be, Z(Y, i) && e.ref === t.ref)
          return Go(e, t, o);
      }
      t.flags |= li;
      var De = vc(N, i);
      return De.ref = t.ref, De.return = t, t.child = De, De;
    }
    function Q1(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === mt) {
          var f = s, p = f._payload, g = f._init;
          try {
            s = g(p);
          } catch {
            s = null;
          }
          var C = s && s.propTypes;
          C && ul(
            C,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            jt(s)
          );
        }
      }
      if (e !== null) {
        var E = e.memoizedProps;
        if (Be(E, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (vl = !1, t.pendingProps = i = E, Z0(e, o))
            (e.flags & jc) !== Je && (vl = !0);
          else return t.lanes = e.lanes, Go(e, t, o);
      }
      return $0(e, t, a, i, o);
    }
    function G1(e, t, a) {
      var i = t.pendingProps, o = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || me)
        if ((t.mode & wt) === et) {
          var f = {
            baseLanes: le,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, ry(t, a);
        } else if (aa(a, ra)) {
          var A = {
            baseLanes: le,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = A;
          var N = s !== null ? s.baseLanes : a;
          ry(t, N);
        } else {
          var p = null, g;
          if (s !== null) {
            var C = s.baseLanes;
            g = Ct(C, a);
          } else
            g = a;
          t.lanes = t.childLanes = ra;
          var E = {
            baseLanes: g,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = E, t.updateQueue = null, ry(t, g), null;
        }
      else {
        var I;
        s !== null ? (I = Ct(s.baseLanes, a), t.memoizedState = null) : I = a, ry(t, I);
      }
      return Ra(e, t, o, a), t.child;
    }
    function _T(e, t, a) {
      var i = t.pendingProps;
      return Ra(e, t, i, a), t.child;
    }
    function CT(e, t, a) {
      var i = t.pendingProps.children;
      return Ra(e, t, i, a), t.child;
    }
    function ET(e, t, a) {
      {
        t.flags |= Nt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var o = t.pendingProps, s = o.children;
      return Ra(e, t, s, a), t.child;
    }
    function q1(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= En, t.flags |= Ru);
    }
    function $0(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && ul(
          s,
          i,
          // Resolved props
          "prop",
          jt(a)
        );
      }
      var f;
      {
        var p = Af(t, a, !0);
        f = Uf(t, p);
      }
      var g, C;
      Hf(t, o), Sa(t);
      {
        if (Yp.current = t, Qn(!0), g = Qf(e, t, a, i, f, o), C = Gf(), t.mode & en) {
          Sn(!0);
          try {
            g = Qf(e, t, a, i, f, o), C = Gf();
          } finally {
            Sn(!1);
          }
        }
        Qn(!1);
      }
      return _a(), e !== null && !vl ? (o1(e, t, o), Go(e, t, o)) : (Vr() && C && bg(t), t.flags |= li, Ra(e, t, g, o), t.child);
    }
    function K1(e, t, a, i, o) {
      {
        switch (Pw(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), g = p.state;
            s.updater.enqueueSetState(s, g, null);
            break;
          }
          case !0: {
            t.flags |= Ke, t.flags |= tr;
            var C = new Error("Simulated error coming from DevTools"), E = Ns(o);
            t.lanes = Ct(t.lanes, E);
            var A = F0(t, uc(C, t), E);
            Wg(t, A);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var N = a.propTypes;
          N && ul(
            N,
            i,
            // Resolved props
            "prop",
            jt(a)
          );
        }
      }
      var I;
      Kl(a) ? (I = !0, nm(t)) : I = !1, Hf(t, o);
      var Y = t.stateNode, Z;
      Y === null ? (Ym(e, t), P1(t, a, i), U0(t, a, i, o), Z = !0) : e === null ? Z = fT(t, a, i, o) : Z = dT(e, t, a, i, o);
      var De = W0(e, t, a, Z, I, o);
      {
        var rt = t.stateNode;
        Z && rt.props !== i && (sc || v("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", vt(t) || "a component"), sc = !0);
      }
      return De;
    }
    function W0(e, t, a, i, o, s) {
      q1(e, t);
      var f = (t.flags & Ke) !== Je;
      if (!i && !f)
        return o && L_(t, a, !1), Go(e, t, s);
      var p = t.stateNode;
      Yp.current = t;
      var g;
      if (f && typeof a.getDerivedStateFromError != "function")
        g = null, A1();
      else {
        Sa(t);
        {
          if (Qn(!0), g = p.render(), t.mode & en) {
            Sn(!0);
            try {
              p.render();
            } finally {
              Sn(!1);
            }
          }
          Qn(!1);
        }
        _a();
      }
      return t.flags |= li, e !== null && f ? ST(e, t, g, s) : Ra(e, t, g, s), t.memoizedState = p.state, o && L_(t, a, !0), t.child;
    }
    function X1(e) {
      var t = e.stateNode;
      t.pendingContext ? D_(e, t.pendingContext, t.pendingContext !== t.context) : t.context && D_(e, t.context, !1), Yg(e, t.containerInfo);
    }
    function RT(e, t, a) {
      if (X1(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, o = t.memoizedState, s = o.element;
      e1(e, t), Sm(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (o.isDehydrated) {
        var g = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, C = t.updateQueue;
        if (C.baseState = g, t.memoizedState = g, t.flags & Tr) {
          var E = uc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return Z1(e, t, p, a, E);
        } else if (p !== s) {
          var A = uc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return Z1(e, t, p, a, A);
        } else {
          xb(t);
          var N = Q_(t, null, p, a);
          t.child = N;
          for (var I = N; I; )
            I.flags = I.flags & ~gn | Jr, I = I.sibling;
        }
      } else {
        if (Ff(), p === s)
          return Go(e, t, a);
        Ra(e, t, p, a);
      }
      return t.child;
    }
    function Z1(e, t, a, i, o) {
      return Ff(), Og(o), t.flags |= Tr, Ra(e, t, a, i), t.child;
    }
    function bT(e, t, a) {
      a1(t), e === null && Dg(t);
      var i = t.type, o = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = o.children, p = cg(i, o);
      return p ? f = null : s !== null && cg(i, s) && (t.flags |= Aa), q1(e, t), Ra(e, t, f, a), t.child;
    }
    function TT(e, t) {
      return e === null && Dg(t), null;
    }
    function xT(e, t, a, i) {
      Ym(e, t);
      var o = t.pendingProps, s = a, f = s._payload, p = s._init, g = p(f);
      t.type = g;
      var C = t.tag = Tw(g), E = pl(g, o), A;
      switch (C) {
        case k:
          return Y0(t, g), t.type = g = nd(g), A = $0(null, t, g, E, i), A;
        case T:
          return t.type = g = ES(g), A = K1(null, t, g, E, i), A;
        case ge:
          return t.type = g = RS(g), A = W1(null, t, g, E, i), A;
        case Qe: {
          if (t.type !== t.elementType) {
            var N = g.propTypes;
            N && ul(
              N,
              E,
              // Resolved for outer only
              "prop",
              jt(g)
            );
          }
          return A = Y1(
            null,
            t,
            g,
            pl(g.type, E),
            // The inner type can have defaults too
            i
          ), A;
        }
      }
      var I = "";
      throw g !== null && typeof g == "object" && g.$$typeof === mt && (I = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + g + ". " + ("Lazy element type must resolve to a class or function." + I));
    }
    function wT(e, t, a, i, o) {
      Ym(e, t), t.tag = T;
      var s;
      return Kl(a) ? (s = !0, nm(t)) : s = !1, Hf(t, o), P1(t, a, i), U0(t, a, i, o), W0(null, t, a, !0, s, o);
    }
    function kT(e, t, a, i) {
      Ym(e, t);
      var o = t.pendingProps, s;
      {
        var f = Af(t, a, !1);
        s = Uf(t, f);
      }
      Hf(t, i);
      var p, g;
      Sa(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var C = jt(a) || "Unknown";
          P0[C] || (v("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", C, C), P0[C] = !0);
        }
        t.mode & en && cl.recordLegacyContextWarning(t, null), Qn(!0), Yp.current = t, p = Qf(null, t, a, o, s, i), g = Gf(), Qn(!1);
      }
      if (_a(), t.flags |= li, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var E = jt(a) || "Unknown";
        Qp[E] || (v("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", E, E, E), Qp[E] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var A = jt(a) || "Unknown";
          Qp[A] || (v("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", A, A, A), Qp[A] = !0);
        }
        t.tag = T, t.memoizedState = null, t.updateQueue = null;
        var N = !1;
        return Kl(a) ? (N = !0, nm(t)) : N = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, $g(t), F1(t, p), U0(t, a, o, i), W0(null, t, a, !0, N, i);
      } else {
        if (t.tag = k, t.mode & en) {
          Sn(!0);
          try {
            p = Qf(null, t, a, o, s, i), g = Gf();
          } finally {
            Sn(!1);
          }
        }
        return Vr() && g && bg(t), Ra(null, t, p, i), Y0(t, a), t.child;
      }
    }
    function Y0(e, t) {
      {
        if (t && t.childContextTypes && v("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Mr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var o = i || "", s = e._debugSource;
          s && (o = s.fileName + ":" + s.lineNumber), I0[o] || (I0[o] = !0, v("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = jt(t) || "Unknown";
          Gp[f] || (v("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Gp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = jt(t) || "Unknown";
          H0[p] || (v("%s: Function components do not support getDerivedStateFromProps.", p), H0[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var g = jt(t) || "Unknown";
          V0[g] || (v("%s: Function components do not support contextType.", g), V0[g] = !0);
        }
      }
    }
    var Q0 = {
      dehydrated: null,
      treeContext: null,
      retryLane: Ft
    };
    function G0(e) {
      return {
        baseLanes: e,
        cachePool: gT(),
        transitions: null
      };
    }
    function DT(e, t) {
      var a = null;
      return {
        baseLanes: Ct(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function OT(e, t, a, i) {
      if (t !== null) {
        var o = t.memoizedState;
        if (o === null)
          return !1;
      }
      return qg(e, zp);
    }
    function LT(e, t) {
      return Ms(e.childLanes, t);
    }
    function J1(e, t, a) {
      var i = t.pendingProps;
      Vw(t) && (t.flags |= Ke);
      var o = fl.current, s = !1, f = (t.flags & Ke) !== Je;
      if (f || OT(o, e) ? (s = !0, t.flags &= ~Ke) : (e === null || e.memoizedState !== null) && (o = qb(o, l1)), o = Bf(o), $u(t, o), e === null) {
        Dg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var g = p.dehydrated;
          if (g !== null)
            return jT(t, g);
        }
        var C = i.children, E = i.fallback;
        if (s) {
          var A = NT(t, C, E, a), N = t.child;
          return N.memoizedState = G0(a), t.memoizedState = Q0, A;
        } else
          return q0(t, C);
      } else {
        var I = e.memoizedState;
        if (I !== null) {
          var Y = I.dehydrated;
          if (Y !== null)
            return zT(e, t, f, i, Y, I, a);
        }
        if (s) {
          var Z = i.fallback, De = i.children, rt = AT(e, t, De, Z, a), qe = t.child, Ut = e.child.memoizedState;
          return qe.memoizedState = Ut === null ? G0(a) : DT(Ut, a), qe.childLanes = LT(e, a), t.memoizedState = Q0, rt;
        } else {
          var Ot = i.children, P = MT(e, t, Ot, a);
          return t.memoizedState = null, P;
        }
      }
    }
    function q0(e, t, a) {
      var i = e.mode, o = {
        mode: "visible",
        children: t
      }, s = K0(o, i);
      return s.return = e, e.child = s, s;
    }
    function NT(e, t, a, i) {
      var o = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, g;
      return (o & wt) === et && s !== null ? (p = s, p.childLanes = le, p.pendingProps = f, e.mode & Vt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), g = Zu(a, o, i, null)) : (p = K0(f, o), g = Zu(a, o, i, null)), p.return = e, g.return = e, p.sibling = g, e.child = p, g;
    }
    function K0(e, t, a) {
      return eE(e, t, le, null);
    }
    function eC(e, t) {
      return vc(e, t);
    }
    function MT(e, t, a, i) {
      var o = e.child, s = o.sibling, f = eC(o, {
        mode: "visible",
        children: a
      });
      if ((t.mode & wt) === et && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Ma) : p.push(s);
      }
      return t.child = f, f;
    }
    function AT(e, t, a, i, o) {
      var s = t.mode, f = e.child, p = f.sibling, g = {
        mode: "hidden",
        children: a
      }, C;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & wt) === et && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var E = t.child;
        C = E, C.childLanes = le, C.pendingProps = g, t.mode & Vt && (C.actualDuration = 0, C.actualStartTime = -1, C.selfBaseDuration = f.selfBaseDuration, C.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        C = eC(f, g), C.subtreeFlags = f.subtreeFlags & zn;
      var A;
      return p !== null ? A = vc(p, i) : (A = Zu(i, s, o, null), A.flags |= gn), A.return = t, C.return = t, C.sibling = A, t.child = C, A;
    }
    function Wm(e, t, a, i) {
      i !== null && Og(i), Pf(t, e.child, null, a);
      var o = t.pendingProps, s = o.children, f = q0(t, s);
      return f.flags |= gn, t.memoizedState = null, f;
    }
    function UT(e, t, a, i, o) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = K0(f, s), g = Zu(i, s, o, null);
      return g.flags |= gn, p.return = t, g.return = t, p.sibling = g, t.child = p, (t.mode & wt) !== et && Pf(t, e.child, null, o), g;
    }
    function jT(e, t, a) {
      return (e.mode & wt) === et ? (v("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = ct) : vg(t) ? e.lanes = xr : e.lanes = ra, null;
    }
    function zT(e, t, a, i, o, s, f) {
      if (a)
        if (t.flags & Tr) {
          t.flags &= ~Tr;
          var P = j0(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Wm(e, t, f, P);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Ke, null;
          var J = i.children, V = i.fallback, pe = UT(e, t, J, V, f), je = t.child;
          return je.memoizedState = G0(f), t.memoizedState = Q0, pe;
        }
      else {
        if (bb(), (t.mode & wt) === et)
          return Wm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (vg(o)) {
          var p, g, C;
          {
            var E = HR(o);
            p = E.digest, g = E.message, C = E.stack;
          }
          var A;
          g ? A = new Error(g) : A = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var N = j0(A, p, C);
          return Wm(e, t, f, N);
        }
        var I = aa(f, e.childLanes);
        if (vl || I) {
          var Y = ny();
          if (Y !== null) {
            var Z = Xd(Y, f);
            if (Z !== Ft && Z !== s.retryLane) {
              s.retryLane = Z;
              var De = rn;
              Ba(e, Z), Cr(Y, e, Z, De);
            }
          }
          yS();
          var rt = j0(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Wm(e, t, f, rt);
        } else if (R_(o)) {
          t.flags |= Ke, t.child = e.child;
          var qe = uw.bind(null, e);
          return IR(o, qe), null;
        } else {
          wb(t, o, s.treeContext);
          var Ut = i.children, Ot = q0(t, Ut);
          return Ot.flags |= Jr, Ot;
        }
      }
    }
    function tC(e, t, a) {
      e.lanes = Ct(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Ct(i.lanes, t)), Vg(e.return, t, a);
    }
    function FT(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === ve) {
          var o = i.memoizedState;
          o !== null && tC(i, a, e);
        } else if (i.tag === ut)
          tC(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function PT(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Rm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function VT(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !B0[e])
        if (B0[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              v('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              v('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              v('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          v('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function HT(e, t) {
      e !== void 0 && !$m[e] && (e !== "collapsed" && e !== "hidden" ? ($m[e] = !0, v('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && ($m[e] = !0, v('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function nC(e, t) {
      {
        var a = Tt(e), i = !a && typeof _t(e) == "function";
        if (a || i) {
          var o = a ? "array" : "iterable";
          return v("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", o, t, o), !1;
        }
      }
      return !0;
    }
    function IT(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Tt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!nC(e[a], a))
              return;
        } else {
          var i = _t(e);
          if (typeof i == "function") {
            var o = i.call(e);
            if (o)
              for (var s = o.next(), f = 0; !s.done; s = o.next()) {
                if (!nC(s.value, f))
                  return;
                f++;
              }
          } else
            v('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function X0(e, t, a, i, o) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: o
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = o);
    }
    function rC(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, s = i.tail, f = i.children;
      VT(o), HT(s, o), IT(f, o), Ra(e, t, f, a);
      var p = fl.current, g = qg(p, zp);
      if (g)
        p = Kg(p, zp), t.flags |= Ke;
      else {
        var C = e !== null && (e.flags & Ke) !== Je;
        C && FT(t, t.child, a), p = Bf(p);
      }
      if ($u(t, p), (t.mode & wt) === et)
        t.memoizedState = null;
      else
        switch (o) {
          case "forwards": {
            var E = PT(t.child), A;
            E === null ? (A = t.child, t.child = null) : (A = E.sibling, E.sibling = null), X0(
              t,
              !1,
              // isBackwards
              A,
              E,
              s
            );
            break;
          }
          case "backwards": {
            var N = null, I = t.child;
            for (t.child = null; I !== null; ) {
              var Y = I.alternate;
              if (Y !== null && Rm(Y) === null) {
                t.child = I;
                break;
              }
              var Z = I.sibling;
              I.sibling = N, N = I, I = Z;
            }
            X0(
              t,
              !0,
              // isBackwards
              N,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            X0(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function BT(e, t, a) {
      Yg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Pf(t, null, i, a) : Ra(e, t, i, a), t.child;
    }
    var aC = !1;
    function $T(e, t, a) {
      var i = t.type, o = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || aC || (aC = !0, v("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var g = t.type.propTypes;
        g && ul(g, s, "prop", "Context.Provider");
      }
      if (K_(t, o, p), f !== null) {
        var C = f.value;
        if (ce(C, p)) {
          if (f.children === s.children && !em())
            return Go(e, t, a);
        } else
          Vb(t, o, a);
      }
      var E = s.children;
      return Ra(e, t, E, a), t.child;
    }
    var iC = !1;
    function WT(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (iC || (iC = !0, v("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var o = t.pendingProps, s = o.children;
      typeof s != "function" && v("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Hf(t, a);
      var f = ir(i);
      Sa(t);
      var p;
      return Yp.current = t, Qn(!0), p = s(f), Qn(!1), _a(), t.flags |= li, Ra(e, t, p, a), t.child;
    }
    function qp() {
      vl = !0;
    }
    function Ym(e, t) {
      (t.mode & wt) === et && e !== null && (e.alternate = null, t.alternate = null, t.flags |= gn);
    }
    function Go(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), A1(), ov(t.lanes), aa(a, t.childLanes) ? (Fb(e, t), t.child) : null;
    }
    function YT(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var o = i.child;
          if (o === null)
            throw new Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw new Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Ma) : s.push(e), a.flags |= gn, a;
      }
    }
    function Z0(e, t) {
      var a = e.lanes;
      return !!aa(a, t);
    }
    function QT(e, t, a) {
      switch (t.tag) {
        case $:
          X1(t), t.stateNode, Ff();
          break;
        case q:
          a1(t);
          break;
        case T: {
          var i = t.type;
          Kl(i) && nm(t);
          break;
        }
        case Q:
          Yg(t, t.stateNode.containerInfo);
          break;
        case Se: {
          var o = t.memoizedProps.value, s = t.type._context;
          K_(t, s, o);
          break;
        }
        case Ee:
          {
            var f = aa(a, t.childLanes);
            f && (t.flags |= Nt);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case ve: {
          var g = t.memoizedState;
          if (g !== null) {
            if (g.dehydrated !== null)
              return $u(t, Bf(fl.current)), t.flags |= Ke, null;
            var C = t.child, E = C.childLanes;
            if (aa(a, E))
              return J1(e, t, a);
            $u(t, Bf(fl.current));
            var A = Go(e, t, a);
            return A !== null ? A.sibling : null;
          } else
            $u(t, Bf(fl.current));
          break;
        }
        case ut: {
          var N = (e.flags & Ke) !== Je, I = aa(a, t.childLanes);
          if (N) {
            if (I)
              return rC(e, t, a);
            t.flags |= Ke;
          }
          var Y = t.memoizedState;
          if (Y !== null && (Y.rendering = null, Y.tail = null, Y.lastEffect = null), $u(t, fl.current), I)
            break;
          return null;
        }
        case ee:
        case be:
          return t.lanes = le, G1(e, t, a);
      }
      return Go(e, t, a);
    }
    function lC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return YT(e, t, kS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, o = t.pendingProps;
        if (i !== o || em() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          vl = !0;
        else {
          var s = Z0(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Ke) === Je)
            return vl = !1, QT(e, t, a);
          (e.flags & jc) !== Je ? vl = !0 : vl = !1;
        }
      } else if (vl = !1, Vr() && gb(t)) {
        var f = t.index, p = Sb();
        A_(t, p, f);
      }
      switch (t.lanes = le, t.tag) {
        case F:
          return kT(e, t, t.type, a);
        case He: {
          var g = t.elementType;
          return xT(e, t, g, a);
        }
        case k: {
          var C = t.type, E = t.pendingProps, A = t.elementType === C ? E : pl(C, E);
          return $0(e, t, C, A, a);
        }
        case T: {
          var N = t.type, I = t.pendingProps, Y = t.elementType === N ? I : pl(N, I);
          return K1(e, t, N, Y, a);
        }
        case $:
          return RT(e, t, a);
        case q:
          return bT(e, t, a);
        case ae:
          return TT(e, t);
        case ve:
          return J1(e, t, a);
        case Q:
          return BT(e, t, a);
        case ge: {
          var Z = t.type, De = t.pendingProps, rt = t.elementType === Z ? De : pl(Z, De);
          return W1(e, t, Z, rt, a);
        }
        case he:
          return _T(e, t, a);
        case fe:
          return CT(e, t, a);
        case Ee:
          return ET(e, t, a);
        case Se:
          return $T(e, t, a);
        case We:
          return WT(e, t, a);
        case Qe: {
          var qe = t.type, Ut = t.pendingProps, Ot = pl(qe, Ut);
          if (t.type !== t.elementType) {
            var P = qe.propTypes;
            P && ul(
              P,
              Ot,
              // Resolved for outer only
              "prop",
              jt(qe)
            );
          }
          return Ot = pl(qe.type, Ot), Y1(e, t, qe, Ot, a);
        }
        case Pe:
          return Q1(e, t, t.type, t.pendingProps, a);
        case Xe: {
          var J = t.type, V = t.pendingProps, pe = t.elementType === J ? V : pl(J, V);
          return wT(e, t, J, pe, a);
        }
        case ut:
          return rC(e, t, a);
        case K:
          break;
        case ee:
          return G1(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function qf(e) {
      e.flags |= Nt;
    }
    function oC(e) {
      e.flags |= En, e.flags |= Ru;
    }
    var uC, J0, sC, cC;
    uC = function(e, t, a, i) {
      for (var o = t.child; o !== null; ) {
        if (o.tag === q || o.tag === ae)
          hR(e, o.stateNode);
        else if (o.tag !== Q) {
          if (o.child !== null) {
            o.child.return = o, o = o.child;
            continue;
          }
        }
        if (o === t)
          return;
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === t)
            return;
          o = o.return;
        }
        o.sibling.return = o.return, o = o.sibling;
      }
    }, J0 = function(e, t) {
    }, sC = function(e, t, a, i, o) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Qg(), g = yR(f, a, s, i, o, p);
        t.updateQueue = g, g && qf(t);
      }
    }, cC = function(e, t, a, i) {
      a !== i && qf(t);
    };
    function Kp(e, t) {
      if (!Vr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var o = e.tail, s = null; o !== null; )
              o.alternate !== null && (s = o), o = o.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Ir(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = le, i = Je;
      if (t) {
        if ((e.mode & Vt) !== et) {
          for (var g = e.selfBaseDuration, C = e.child; C !== null; )
            a = Ct(a, Ct(C.lanes, C.childLanes)), i |= C.subtreeFlags & zn, i |= C.flags & zn, g += C.treeBaseDuration, C = C.sibling;
          e.treeBaseDuration = g;
        } else
          for (var E = e.child; E !== null; )
            a = Ct(a, Ct(E.lanes, E.childLanes)), i |= E.subtreeFlags & zn, i |= E.flags & zn, E.return = e, E = E.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Vt) !== et) {
          for (var o = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Ct(a, Ct(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, o += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = o, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Ct(a, Ct(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function GT(e, t, a) {
      if (Nb() && (t.mode & wt) !== et && (t.flags & Ke) === Je)
        return H_(t), Ff(), t.flags |= Tr | ys | tr, !1;
      var i = om(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Ob(t), Ir(t), (t.mode & Vt) !== et) {
            var o = a !== null;
            if (o) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Ff(), (t.flags & Ke) === Je && (t.memoizedState = null), t.flags |= Nt, Ir(t), (t.mode & Vt) !== et) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return I_(), !0;
    }
    function fC(e, t, a) {
      var i = t.pendingProps;
      switch (Tg(t), t.tag) {
        case F:
        case He:
        case Pe:
        case k:
        case ge:
        case he:
        case fe:
        case Ee:
        case We:
        case Qe:
          return Ir(t), null;
        case T: {
          var o = t.type;
          return Kl(o) && tm(t), Ir(t), null;
        }
        case $: {
          var s = t.stateNode;
          if (If(t), Cg(t), Zg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = om(t);
            if (f)
              qf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Tr) !== Je) && (t.flags |= Gn, I_());
            }
          }
          return J0(e, t), Ir(t), null;
        }
        case q: {
          Gg(t);
          var g = r1(), C = t.type;
          if (e !== null && t.stateNode != null)
            sC(e, t, C, i, g), e.ref !== t.ref && oC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Ir(t), null;
            }
            var E = Qg(), A = om(t);
            if (A)
              kb(t, g, E) && qf(t);
            else {
              var N = vR(C, i, g, E, t);
              uC(N, t, !1, !1), t.stateNode = N, mR(N, C, i, g) && qf(t);
            }
            t.ref !== null && oC(t);
          }
          return Ir(t), null;
        }
        case ae: {
          var I = i;
          if (e && t.stateNode != null) {
            var Y = e.memoizedProps;
            cC(e, t, Y, I);
          } else {
            if (typeof I != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var Z = r1(), De = Qg(), rt = om(t);
            rt ? Db(t) && qf(t) : t.stateNode = gR(I, Z, De, t);
          }
          return Ir(t), null;
        }
        case ve: {
          $f(t);
          var qe = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Ut = GT(e, t, qe);
            if (!Ut)
              return t.flags & tr ? t : null;
          }
          if ((t.flags & Ke) !== Je)
            return t.lanes = a, (t.mode & Vt) !== et && R0(t), t;
          var Ot = qe !== null, P = e !== null && e.memoizedState !== null;
          if (Ot !== P && Ot) {
            var J = t.child;
            if (J.flags |= jn, (t.mode & wt) !== et) {
              var V = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              V || qg(fl.current, l1) ? qx() : yS();
            }
          }
          var pe = t.updateQueue;
          if (pe !== null && (t.flags |= Nt), Ir(t), (t.mode & Vt) !== et && Ot) {
            var je = t.child;
            je !== null && (t.treeBaseDuration -= je.treeBaseDuration);
          }
          return null;
        }
        case Q:
          return If(t), J0(e, t), e === null && fb(t.stateNode.containerInfo), Ir(t), null;
        case Se:
          var Ne = t.type._context;
          return Pg(Ne, t), Ir(t), null;
        case Xe: {
          var ft = t.type;
          return Kl(ft) && tm(t), Ir(t), null;
        }
        case ut: {
          $f(t);
          var gt = t.memoizedState;
          if (gt === null)
            return Ir(t), null;
          var nn = (t.flags & Ke) !== Je, Bt = gt.rendering;
          if (Bt === null)
            if (nn)
              Kp(gt, !1);
            else {
              var Xn = Xx() && (e === null || (e.flags & Ke) === Je);
              if (!Xn)
                for (var $t = t.child; $t !== null; ) {
                  var Bn = Rm($t);
                  if (Bn !== null) {
                    nn = !0, t.flags |= Ke, Kp(gt, !1);
                    var fa = Bn.updateQueue;
                    return fa !== null && (t.updateQueue = fa, t.flags |= Nt), t.subtreeFlags = Je, Pb(t, a), $u(t, Kg(fl.current, zp)), t.child;
                  }
                  $t = $t.sibling;
                }
              gt.tail !== null && qn() > NC() && (t.flags |= Ke, nn = !0, Kp(gt, !1), t.lanes = Id);
            }
          else {
            if (!nn) {
              var Qr = Rm(Bt);
              if (Qr !== null) {
                t.flags |= Ke, nn = !0;
                var pi = Qr.updateQueue;
                if (pi !== null && (t.updateQueue = pi, t.flags |= Nt), Kp(gt, !0), gt.tail === null && gt.tailMode === "hidden" && !Bt.alternate && !Vr())
                  return Ir(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              qn() * 2 - gt.renderingStartTime > NC() && a !== ra && (t.flags |= Ke, nn = !0, Kp(gt, !1), t.lanes = Id);
            }
            if (gt.isBackwards)
              Bt.sibling = t.child, t.child = Bt;
            else {
              var xa = gt.last;
              xa !== null ? xa.sibling = Bt : t.child = Bt, gt.last = Bt;
            }
          }
          if (gt.tail !== null) {
            var wa = gt.tail;
            gt.rendering = wa, gt.tail = wa.sibling, gt.renderingStartTime = qn(), wa.sibling = null;
            var da = fl.current;
            return nn ? da = Kg(da, zp) : da = Bf(da), $u(t, da), wa;
          }
          return Ir(t), null;
        }
        case K:
          break;
        case ee:
        case be: {
          mS(t);
          var Jo = t.memoizedState, rd = Jo !== null;
          if (e !== null) {
            var dv = e.memoizedState, ao = dv !== null;
            ao !== rd && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !me && (t.flags |= jn);
          }
          return !rd || (t.mode & wt) === et ? Ir(t) : aa(ro, ra) && (Ir(t), t.subtreeFlags & (gn | Nt) && (t.flags |= jn)), null;
        }
        case Ve:
          return null;
        case we:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function qT(e, t, a) {
      switch (Tg(t), t.tag) {
        case T: {
          var i = t.type;
          Kl(i) && tm(t);
          var o = t.flags;
          return o & tr ? (t.flags = o & ~tr | Ke, (t.mode & Vt) !== et && R0(t), t) : null;
        }
        case $: {
          t.stateNode, If(t), Cg(t), Zg();
          var s = t.flags;
          return (s & tr) !== Je && (s & Ke) === Je ? (t.flags = s & ~tr | Ke, t) : null;
        }
        case q:
          return Gg(t), null;
        case ve: {
          $f(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Ff();
          }
          var p = t.flags;
          return p & tr ? (t.flags = p & ~tr | Ke, (t.mode & Vt) !== et && R0(t), t) : null;
        }
        case ut:
          return $f(t), null;
        case Q:
          return If(t), null;
        case Se:
          var g = t.type._context;
          return Pg(g, t), null;
        case ee:
        case be:
          return mS(t), null;
        case Ve:
          return null;
        default:
          return null;
      }
    }
    function dC(e, t, a) {
      switch (Tg(t), t.tag) {
        case T: {
          var i = t.type.childContextTypes;
          i != null && tm(t);
          break;
        }
        case $: {
          t.stateNode, If(t), Cg(t), Zg();
          break;
        }
        case q: {
          Gg(t);
          break;
        }
        case Q:
          If(t);
          break;
        case ve:
          $f(t);
          break;
        case ut:
          $f(t);
          break;
        case Se:
          var o = t.type._context;
          Pg(o, t);
          break;
        case ee:
        case be:
          mS(t);
          break;
      }
    }
    var pC = null;
    pC = /* @__PURE__ */ new Set();
    var Qm = !1, Br = !1, KT = typeof WeakSet == "function" ? WeakSet : Set, $e = null, Kf = null, Xf = null;
    function XT(e) {
      Nl(null, function() {
        throw e;
      }), ms();
    }
    var ZT = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Vt)
        try {
          to(), t.componentWillUnmount();
        } finally {
          eo(e);
        }
      else
        t.componentWillUnmount();
    };
    function vC(e, t) {
      try {
        Qu(hr, e);
      } catch (a) {
        pn(e, t, a);
      }
    }
    function eS(e, t, a) {
      try {
        ZT(e, a);
      } catch (i) {
        pn(e, t, i);
      }
    }
    function JT(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        pn(e, t, i);
      }
    }
    function hC(e, t) {
      try {
        yC(e);
      } catch (a) {
        pn(e, t, a);
      }
    }
    function Zf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Ue && ht && e.mode & Vt)
              try {
                to(), i = a(null);
              } finally {
                eo(e);
              }
            else
              i = a(null);
          } catch (o) {
            pn(e, t, o);
          }
          typeof i == "function" && v("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", vt(e));
        } else
          a.current = null;
    }
    function Gm(e, t, a) {
      try {
        a();
      } catch (i) {
        pn(e, t, i);
      }
    }
    var mC = !1;
    function ex(e, t) {
      dR(e.containerInfo), $e = t, tx();
      var a = mC;
      return mC = !1, a;
    }
    function tx() {
      for (; $e !== null; ) {
        var e = $e, t = e.child;
        (e.subtreeFlags & Al) !== Je && t !== null ? (t.return = e, $e = t) : nx();
      }
    }
    function nx() {
      for (; $e !== null; ) {
        var e = $e;
        Xt(e);
        try {
          rx(e);
        } catch (a) {
          pn(e, e.return, a);
        }
        dn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, $e = t;
          return;
        }
        $e = e.return;
      }
    }
    function rx(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Gn) !== Je) {
        switch (Xt(e), e.tag) {
          case k:
          case ge:
          case Pe:
            break;
          case T: {
            if (t !== null) {
              var i = t.memoizedProps, o = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !sc && (s.props !== e.memoizedProps && v("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", vt(e) || "instance"), s.state !== e.memoizedState && v("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", vt(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : pl(e.type, i), o);
              {
                var p = pC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), v("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", vt(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case $: {
            {
              var g = e.stateNode;
              zR(g.containerInfo);
            }
            break;
          }
          case q:
          case ae:
          case Q:
          case Xe:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        dn();
      }
    }
    function hl(e, t, a) {
      var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var s = o.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Hr) !== $a ? nl(t) : (e & hr) !== $a && Ss(t), (e & Xl) !== $a && sv(!0), Gm(t, a, p), (e & Xl) !== $a && sv(!1), (e & Hr) !== $a ? Fl() : (e & hr) !== $a && Vd());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Qu(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var o = i.next, s = o;
        do {
          if ((s.tag & e) === e) {
            (e & Hr) !== $a ? Pd(t) : (e & hr) !== $a && Ic(t);
            var f = s.create;
            (e & Xl) !== $a && sv(!0), s.destroy = f(), (e & Xl) !== $a && sv(!1), (e & Hr) !== $a ? Jv() : (e & hr) !== $a && eh();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var g = void 0;
                (s.tag & hr) !== Je ? g = "useLayoutEffect" : (s.tag & Xl) !== Je ? g = "useInsertionEffect" : g = "useEffect";
                var C = void 0;
                p === null ? C = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? C = `

It looks like you wrote ` + g + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + g + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : C = " You returned: " + p, v("%s must not return anything besides a function, which is used for clean-up.%s", g, C);
              }
            }
          }
          s = s.next;
        } while (s !== o);
      }
    }
    function ax(e, t) {
      if ((t.flags & Nt) !== Je)
        switch (t.tag) {
          case Ee: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, o = i.id, s = i.onPostCommit, f = N1(), p = t.alternate === null ? "mount" : "update";
            L1() && (p = "nested-update"), typeof s == "function" && s(o, p, a, f);
            var g = t.return;
            e: for (; g !== null; ) {
              switch (g.tag) {
                case $:
                  var C = g.stateNode;
                  C.passiveEffectDuration += a;
                  break e;
                case Ee:
                  var E = g.stateNode;
                  E.passiveEffectDuration += a;
                  break e;
              }
              g = g.return;
            }
            break;
          }
        }
    }
    function ix(e, t, a, i) {
      if ((a.flags & jl) !== Je)
        switch (a.tag) {
          case k:
          case ge:
          case Pe: {
            if (!Br)
              if (a.mode & Vt)
                try {
                  to(), Qu(hr | vr, a);
                } finally {
                  eo(a);
                }
              else
                Qu(hr | vr, a);
            break;
          }
          case T: {
            var o = a.stateNode;
            if (a.flags & Nt && !Br)
              if (t === null)
                if (a.type === a.elementType && !sc && (o.props !== a.memoizedProps && v("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", vt(a) || "instance"), o.state !== a.memoizedState && v("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", vt(a) || "instance")), a.mode & Vt)
                  try {
                    to(), o.componentDidMount();
                  } finally {
                    eo(a);
                  }
                else
                  o.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : pl(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !sc && (o.props !== a.memoizedProps && v("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", vt(a) || "instance"), o.state !== a.memoizedState && v("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", vt(a) || "instance")), a.mode & Vt)
                  try {
                    to(), o.componentDidUpdate(s, f, o.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    eo(a);
                  }
                else
                  o.componentDidUpdate(s, f, o.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !sc && (o.props !== a.memoizedProps && v("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", vt(a) || "instance"), o.state !== a.memoizedState && v("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", vt(a) || "instance")), n1(a, p, o));
            break;
          }
          case $: {
            var g = a.updateQueue;
            if (g !== null) {
              var C = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case q:
                    C = a.child.stateNode;
                    break;
                  case T:
                    C = a.child.stateNode;
                    break;
                }
              n1(a, g, C);
            }
            break;
          }
          case q: {
            var E = a.stateNode;
            if (t === null && a.flags & Nt) {
              var A = a.type, N = a.memoizedProps;
              RR(E, A, N);
            }
            break;
          }
          case ae:
            break;
          case Q:
            break;
          case Ee: {
            {
              var I = a.memoizedProps, Y = I.onCommit, Z = I.onRender, De = a.stateNode.effectDuration, rt = N1(), qe = t === null ? "mount" : "update";
              L1() && (qe = "nested-update"), typeof Z == "function" && Z(a.memoizedProps.id, qe, a.actualDuration, a.treeBaseDuration, a.actualStartTime, rt);
              {
                typeof Y == "function" && Y(a.memoizedProps.id, qe, De, rt), nw(a);
                var Ut = a.return;
                e: for (; Ut !== null; ) {
                  switch (Ut.tag) {
                    case $:
                      var Ot = Ut.stateNode;
                      Ot.effectDuration += De;
                      break e;
                    case Ee:
                      var P = Ut.stateNode;
                      P.effectDuration += De;
                      break e;
                  }
                  Ut = Ut.return;
                }
              }
            }
            break;
          }
          case ve: {
            px(e, a);
            break;
          }
          case ut:
          case Xe:
          case K:
          case ee:
          case be:
          case we:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Br || a.flags & En && yC(a);
    }
    function lx(e) {
      switch (e.tag) {
        case k:
        case ge:
        case Pe: {
          if (e.mode & Vt)
            try {
              to(), vC(e, e.return);
            } finally {
              eo(e);
            }
          else
            vC(e, e.return);
          break;
        }
        case T: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && JT(e, e.return, t), hC(e, e.return);
          break;
        }
        case q: {
          hC(e, e.return);
          break;
        }
      }
    }
    function ox(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === q) {
          if (a === null) {
            a = i;
            try {
              var o = i.stateNode;
              t ? MR(o) : UR(i.stateNode, i.memoizedProps);
            } catch (f) {
              pn(e, e.return, f);
            }
          }
        } else if (i.tag === ae) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? AR(s) : jR(s, i.memoizedProps);
            } catch (f) {
              pn(e, e.return, f);
            }
        } else if (!((i.tag === ee || i.tag === be) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function yC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        if (e.tag === q ? i = a : i = a, typeof t == "function") {
          var o;
          if (e.mode & Vt)
            try {
              to(), o = t(i);
            } finally {
              eo(e);
            }
          else
            o = t(i);
          typeof o == "function" && v("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", vt(e));
        } else
          t.hasOwnProperty("current") || v("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", vt(e)), t.current = i;
      }
    }
    function ux(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function gC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, gC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === q) {
          var a = e.stateNode;
          a !== null && vb(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function sx(e) {
      for (var t = e.return; t !== null; ) {
        if (SC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function SC(e) {
      return e.tag === q || e.tag === $ || e.tag === Q;
    }
    function _C(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || SC(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== q && t.tag !== ae && t.tag !== ot; ) {
          if (t.flags & gn || t.child === null || t.tag === Q)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & gn))
          return t.stateNode;
      }
    }
    function cx(e) {
      var t = sx(e);
      switch (t.tag) {
        case q: {
          var a = t.stateNode;
          t.flags & Aa && (E_(a), t.flags &= ~Aa);
          var i = _C(e);
          nS(e, i, a);
          break;
        }
        case $:
        case Q: {
          var o = t.stateNode.containerInfo, s = _C(e);
          tS(e, s, o);
          break;
        }
        // eslint-disable-next-line-no-fallthrough
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function tS(e, t, a) {
      var i = e.tag, o = i === q || i === ae;
      if (o) {
        var s = e.stateNode;
        t ? DR(a, s, t) : wR(a, s);
      } else if (i !== Q) {
        var f = e.child;
        if (f !== null) {
          tS(f, t, a);
          for (var p = f.sibling; p !== null; )
            tS(p, t, a), p = p.sibling;
        }
      }
    }
    function nS(e, t, a) {
      var i = e.tag, o = i === q || i === ae;
      if (o) {
        var s = e.stateNode;
        t ? kR(a, s, t) : xR(a, s);
      } else if (i !== Q) {
        var f = e.child;
        if (f !== null) {
          nS(f, t, a);
          for (var p = f.sibling; p !== null; )
            nS(p, t, a), p = p.sibling;
        }
      }
    }
    var $r = null, ml = !1;
    function fx(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case q: {
              $r = i.stateNode, ml = !1;
              break e;
            }
            case $: {
              $r = i.stateNode.containerInfo, ml = !0;
              break e;
            }
            case Q: {
              $r = i.stateNode.containerInfo, ml = !0;
              break e;
            }
          }
          i = i.return;
        }
        if ($r === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        CC(e, t, a), $r = null, ml = !1;
      }
      ux(a);
    }
    function Gu(e, t, a) {
      for (var i = a.child; i !== null; )
        CC(e, t, i), i = i.sibling;
    }
    function CC(e, t, a) {
      switch (jd(a), a.tag) {
        case q:
          Br || Zf(a, t);
        // eslint-disable-next-line-no-fallthrough
        case ae: {
          {
            var i = $r, o = ml;
            $r = null, Gu(e, t, a), $r = i, ml = o, $r !== null && (ml ? LR($r, a.stateNode) : OR($r, a.stateNode));
          }
          return;
        }
        case ot: {
          $r !== null && (ml ? NR($r, a.stateNode) : pg($r, a.stateNode));
          return;
        }
        case Q: {
          {
            var s = $r, f = ml;
            $r = a.stateNode.containerInfo, ml = !0, Gu(e, t, a), $r = s, ml = f;
          }
          return;
        }
        case k:
        case ge:
        case Qe:
        case Pe: {
          if (!Br) {
            var p = a.updateQueue;
            if (p !== null) {
              var g = p.lastEffect;
              if (g !== null) {
                var C = g.next, E = C;
                do {
                  var A = E, N = A.destroy, I = A.tag;
                  N !== void 0 && ((I & Xl) !== $a ? Gm(a, t, N) : (I & hr) !== $a && (Ss(a), a.mode & Vt ? (to(), Gm(a, t, N), eo(a)) : Gm(a, t, N), Vd())), E = E.next;
                } while (E !== C);
              }
            }
          }
          Gu(e, t, a);
          return;
        }
        case T: {
          if (!Br) {
            Zf(a, t);
            var Y = a.stateNode;
            typeof Y.componentWillUnmount == "function" && eS(a, t, Y);
          }
          Gu(e, t, a);
          return;
        }
        case K: {
          Gu(e, t, a);
          return;
        }
        case ee: {
          if (
            // TODO: Remove this dead flag
            a.mode & wt
          ) {
            var Z = Br;
            Br = Z || a.memoizedState !== null, Gu(e, t, a), Br = Z;
          } else
            Gu(e, t, a);
          break;
        }
        default: {
          Gu(e, t, a);
          return;
        }
      }
    }
    function dx(e) {
      e.memoizedState;
    }
    function px(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var o = i.memoizedState;
          if (o !== null) {
            var s = o.dehydrated;
            s !== null && XR(s);
          }
        }
      }
    }
    function EC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new KT()), t.forEach(function(i) {
          var o = sw.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), na)
              if (Kf !== null && Xf !== null)
                uv(Xf, Kf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(o, o);
          }
        });
      }
    }
    function vx(e, t, a) {
      Kf = a, Xf = e, Xt(t), RC(t, e), Xt(t), Kf = null, Xf = null;
    }
    function yl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o];
          try {
            fx(e, t, s);
          } catch (g) {
            pn(s, t, g);
          }
        }
      var f = Tl();
      if (t.subtreeFlags & Ul)
        for (var p = t.child; p !== null; )
          Xt(p), RC(p, e), p = p.sibling;
      Xt(f);
    }
    function RC(e, t, a) {
      var i = e.alternate, o = e.flags;
      switch (e.tag) {
        case k:
        case ge:
        case Qe:
        case Pe: {
          if (yl(t, e), no(e), o & Nt) {
            try {
              hl(Xl | vr, e, e.return), Qu(Xl | vr, e);
            } catch (ft) {
              pn(e, e.return, ft);
            }
            if (e.mode & Vt) {
              try {
                to(), hl(hr | vr, e, e.return);
              } catch (ft) {
                pn(e, e.return, ft);
              }
              eo(e);
            } else
              try {
                hl(hr | vr, e, e.return);
              } catch (ft) {
                pn(e, e.return, ft);
              }
          }
          return;
        }
        case T: {
          yl(t, e), no(e), o & En && i !== null && Zf(i, i.return);
          return;
        }
        case q: {
          yl(t, e), no(e), o & En && i !== null && Zf(i, i.return);
          {
            if (e.flags & Aa) {
              var s = e.stateNode;
              try {
                E_(s);
              } catch (ft) {
                pn(e, e.return, ft);
              }
            }
            if (o & Nt) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, g = i !== null ? i.memoizedProps : p, C = e.type, E = e.updateQueue;
                if (e.updateQueue = null, E !== null)
                  try {
                    bR(f, E, C, g, p, e);
                  } catch (ft) {
                    pn(e, e.return, ft);
                  }
              }
            }
          }
          return;
        }
        case ae: {
          if (yl(t, e), no(e), o & Nt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var A = e.stateNode, N = e.memoizedProps, I = i !== null ? i.memoizedProps : N;
            try {
              TR(A, I, N);
            } catch (ft) {
              pn(e, e.return, ft);
            }
          }
          return;
        }
        case $: {
          if (yl(t, e), no(e), o & Nt && i !== null) {
            var Y = i.memoizedState;
            if (Y.isDehydrated)
              try {
                KR(t.containerInfo);
              } catch (ft) {
                pn(e, e.return, ft);
              }
          }
          return;
        }
        case Q: {
          yl(t, e), no(e);
          return;
        }
        case ve: {
          yl(t, e), no(e);
          var Z = e.child;
          if (Z.flags & jn) {
            var De = Z.stateNode, rt = Z.memoizedState, qe = rt !== null;
            if (De.isHidden = qe, qe) {
              var Ut = Z.alternate !== null && Z.alternate.memoizedState !== null;
              Ut || Gx();
            }
          }
          if (o & Nt) {
            try {
              dx(e);
            } catch (ft) {
              pn(e, e.return, ft);
            }
            EC(e);
          }
          return;
        }
        case ee: {
          var Ot = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & wt
          ) {
            var P = Br;
            Br = P || Ot, yl(t, e), Br = P;
          } else
            yl(t, e);
          if (no(e), o & jn) {
            var J = e.stateNode, V = e.memoizedState, pe = V !== null, je = e;
            if (J.isHidden = pe, pe && !Ot && (je.mode & wt) !== et) {
              $e = je;
              for (var Ne = je.child; Ne !== null; )
                $e = Ne, mx(Ne), Ne = Ne.sibling;
            }
            ox(je, pe);
          }
          return;
        }
        case ut: {
          yl(t, e), no(e), o & Nt && EC(e);
          return;
        }
        case K:
          return;
        default: {
          yl(t, e), no(e);
          return;
        }
      }
    }
    function no(e) {
      var t = e.flags;
      if (t & gn) {
        try {
          cx(e);
        } catch (a) {
          pn(e, e.return, a);
        }
        e.flags &= ~gn;
      }
      t & Jr && (e.flags &= ~Jr);
    }
    function hx(e, t, a) {
      Kf = a, Xf = t, $e = e, bC(e, t, a), Kf = null, Xf = null;
    }
    function bC(e, t, a) {
      for (var i = (e.mode & wt) !== et; $e !== null; ) {
        var o = $e, s = o.child;
        if (o.tag === ee && i) {
          var f = o.memoizedState !== null, p = f || Qm;
          if (p) {
            rS(e, t, a);
            continue;
          } else {
            var g = o.alternate, C = g !== null && g.memoizedState !== null, E = C || Br, A = Qm, N = Br;
            Qm = p, Br = E, Br && !N && ($e = o, yx(o));
            for (var I = s; I !== null; )
              $e = I, bC(
                I,
                // New root; bubble back up to here and stop.
                t,
                a
              ), I = I.sibling;
            $e = o, Qm = A, Br = N, rS(e, t, a);
            continue;
          }
        }
        (o.subtreeFlags & jl) !== Je && s !== null ? (s.return = o, $e = s) : rS(e, t, a);
      }
    }
    function rS(e, t, a) {
      for (; $e !== null; ) {
        var i = $e;
        if ((i.flags & jl) !== Je) {
          var o = i.alternate;
          Xt(i);
          try {
            ix(t, o, i, a);
          } catch (f) {
            pn(i, i.return, f);
          }
          dn();
        }
        if (i === e) {
          $e = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, $e = s;
          return;
        }
        $e = i.return;
      }
    }
    function mx(e) {
      for (; $e !== null; ) {
        var t = $e, a = t.child;
        switch (t.tag) {
          case k:
          case ge:
          case Qe:
          case Pe: {
            if (t.mode & Vt)
              try {
                to(), hl(hr, t, t.return);
              } finally {
                eo(t);
              }
            else
              hl(hr, t, t.return);
            break;
          }
          case T: {
            Zf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && eS(t, t.return, i);
            break;
          }
          case q: {
            Zf(t, t.return);
            break;
          }
          case ee: {
            var o = t.memoizedState !== null;
            if (o) {
              TC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, $e = a) : TC(e);
      }
    }
    function TC(e) {
      for (; $e !== null; ) {
        var t = $e;
        if (t === e) {
          $e = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, $e = a;
          return;
        }
        $e = t.return;
      }
    }
    function yx(e) {
      for (; $e !== null; ) {
        var t = $e, a = t.child;
        if (t.tag === ee) {
          var i = t.memoizedState !== null;
          if (i) {
            xC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, $e = a) : xC(e);
      }
    }
    function xC(e) {
      for (; $e !== null; ) {
        var t = $e;
        Xt(t);
        try {
          lx(t);
        } catch (i) {
          pn(t, t.return, i);
        }
        if (dn(), t === e) {
          $e = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, $e = a;
          return;
        }
        $e = t.return;
      }
    }
    function gx(e, t, a, i) {
      $e = t, Sx(t, e, a, i);
    }
    function Sx(e, t, a, i) {
      for (; $e !== null; ) {
        var o = $e, s = o.child;
        (o.subtreeFlags & el) !== Je && s !== null ? (s.return = o, $e = s) : _x(e, t, a, i);
      }
    }
    function _x(e, t, a, i) {
      for (; $e !== null; ) {
        var o = $e;
        if ((o.flags & Zr) !== Je) {
          Xt(o);
          try {
            Cx(t, o, a, i);
          } catch (f) {
            pn(o, o.return, f);
          }
          dn();
        }
        if (o === e) {
          $e = null;
          return;
        }
        var s = o.sibling;
        if (s !== null) {
          s.return = o.return, $e = s;
          return;
        }
        $e = o.return;
      }
    }
    function Cx(e, t, a, i) {
      switch (t.tag) {
        case k:
        case ge:
        case Pe: {
          if (t.mode & Vt) {
            E0();
            try {
              Qu(Hr | vr, t);
            } finally {
              C0(t);
            }
          } else
            Qu(Hr | vr, t);
          break;
        }
      }
    }
    function Ex(e) {
      $e = e, Rx();
    }
    function Rx() {
      for (; $e !== null; ) {
        var e = $e, t = e.child;
        if (($e.flags & Ma) !== Je) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var o = a[i];
              $e = o, xx(o, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            $e = e;
          }
        }
        (e.subtreeFlags & el) !== Je && t !== null ? (t.return = e, $e = t) : bx();
      }
    }
    function bx() {
      for (; $e !== null; ) {
        var e = $e;
        (e.flags & Zr) !== Je && (Xt(e), Tx(e), dn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, $e = t;
          return;
        }
        $e = e.return;
      }
    }
    function Tx(e) {
      switch (e.tag) {
        case k:
        case ge:
        case Pe: {
          e.mode & Vt ? (E0(), hl(Hr | vr, e, e.return), C0(e)) : hl(Hr | vr, e, e.return);
          break;
        }
      }
    }
    function xx(e, t) {
      for (; $e !== null; ) {
        var a = $e;
        Xt(a), kx(a, t), dn();
        var i = a.child;
        i !== null ? (i.return = a, $e = i) : wx(e);
      }
    }
    function wx(e) {
      for (; $e !== null; ) {
        var t = $e, a = t.sibling, i = t.return;
        if (gC(t), t === e) {
          $e = null;
          return;
        }
        if (a !== null) {
          a.return = i, $e = a;
          return;
        }
        $e = i;
      }
    }
    function kx(e, t) {
      switch (e.tag) {
        case k:
        case ge:
        case Pe: {
          e.mode & Vt ? (E0(), hl(Hr, e, t), C0(e)) : hl(Hr, e, t);
          break;
        }
      }
    }
    function Dx(e) {
      switch (e.tag) {
        case k:
        case ge:
        case Pe: {
          try {
            Qu(hr | vr, e);
          } catch (a) {
            pn(e, e.return, a);
          }
          break;
        }
        case T: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            pn(e, e.return, a);
          }
          break;
        }
      }
    }
    function Ox(e) {
      switch (e.tag) {
        case k:
        case ge:
        case Pe: {
          try {
            Qu(Hr | vr, e);
          } catch (t) {
            pn(e, e.return, t);
          }
          break;
        }
      }
    }
    function Lx(e) {
      switch (e.tag) {
        case k:
        case ge:
        case Pe: {
          try {
            hl(hr | vr, e, e.return);
          } catch (a) {
            pn(e, e.return, a);
          }
          break;
        }
        case T: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && eS(e, e.return, t);
          break;
        }
      }
    }
    function Nx(e) {
      switch (e.tag) {
        case k:
        case ge:
        case Pe:
          try {
            hl(Hr | vr, e, e.return);
          } catch (t) {
            pn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Xp = Symbol.for;
      Xp("selector.component"), Xp("selector.has_pseudo_class"), Xp("selector.role"), Xp("selector.test_id"), Xp("selector.text");
    }
    var Mx = [];
    function Ax() {
      Mx.forEach(function(e) {
        return e();
      });
    }
    var Ux = h.ReactCurrentActQueue;
    function jx(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function wC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Ux.current !== null && v("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var zx = Math.ceil, aS = h.ReactCurrentDispatcher, iS = h.ReactCurrentOwner, Wr = h.ReactCurrentBatchConfig, gl = h.ReactCurrentActQueue, gr = (
      /*             */
      0
    ), kC = (
      /*               */
      1
    ), Yr = (
      /*                */
      2
    ), Hi = (
      /*                */
      4
    ), qo = 0, Zp = 1, cc = 2, qm = 3, Jp = 4, DC = 5, lS = 6, At = gr, ba = null, Nn = null, Sr = le, ro = le, oS = Fu(le), _r = qo, ev = null, Km = le, tv = le, Xm = le, nv = null, Wa = null, uS = 0, OC = 500, LC = 1 / 0, Fx = 500, Ko = null;
    function rv() {
      LC = qn() + Fx;
    }
    function NC() {
      return LC;
    }
    var Zm = !1, sS = null, Jf = null, fc = !1, qu = null, av = le, cS = [], fS = null, Px = 50, iv = 0, dS = null, pS = !1, Jm = !1, Vx = 50, ed = 0, ey = null, lv = rn, ty = le, MC = !1;
    function ny() {
      return ba;
    }
    function Ta() {
      return (At & (Yr | Hi)) !== gr ? qn() : (lv !== rn || (lv = qn()), lv);
    }
    function Ku(e) {
      var t = e.mode;
      if ((t & wt) === et)
        return ct;
      if ((At & Yr) !== gr && Sr !== le)
        return Ns(Sr);
      var a = Ub() !== Ab;
      if (a) {
        if (Wr.transition !== null) {
          var i = Wr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return ty === Ft && (ty = Gd()), ty;
      }
      var o = Va();
      if (o !== Ft)
        return o;
      var s = SR();
      return s;
    }
    function Hx(e) {
      var t = e.mode;
      return (t & wt) === et ? ct : lh();
    }
    function Cr(e, t, a, i) {
      fw(), MC && v("useInsertionEffect must not schedule updates."), pS && (Jm = !0), wu(e, a, i), (At & Yr) !== le && e === ba ? vw(t) : (na && Us(e, t, a), hw(t), e === ba && ((At & Yr) === gr && (tv = Ct(tv, a)), _r === Jp && Xu(e, Sr)), Ya(e, i), a === ct && At === gr && (t.mode & wt) === et && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !gl.isBatchingLegacy && (rv(), M_()));
    }
    function Ix(e, t, a) {
      var i = e.current;
      i.lanes = t, wu(e, t, a), Ya(e, a);
    }
    function Bx(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (At & Yr) !== gr
      );
    }
    function Ya(e, t) {
      var a = e.callbackNode;
      sf(e, t);
      var i = uf(e, e === ba ? Sr : le);
      if (i === le) {
        a !== null && qC(a), e.callbackNode = null, e.callbackPriority = Ft;
        return;
      }
      var o = Hl(i), s = e.callbackPriority;
      if (s === o && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(gl.current !== null && a !== _S)) {
        a == null && s !== ct && v("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && qC(a);
      var f;
      if (o === ct)
        e.tag === Pu ? (gl.isBatchingLegacy !== null && (gl.didScheduleLegacyUpdate = !0), yb(jC.bind(null, e))) : N_(jC.bind(null, e)), gl.current !== null ? gl.current.push(Vu) : CR(function() {
          (At & (Yr | Hi)) === gr && Vu();
        }), f = null;
      else {
        var p;
        switch (ph(i)) {
          case Ur:
            p = gs;
            break;
          case Li:
            p = zl;
            break;
          case Fa:
            p = tl;
            break;
          case Pa:
            p = Ro;
            break;
          default:
            p = tl;
            break;
        }
        f = CS(p, AC.bind(null, e));
      }
      e.callbackPriority = o, e.callbackNode = f;
    }
    function AC(e, t) {
      if (oT(), lv = rn, ty = le, (At & (Yr | Hi)) !== gr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Zo();
      if (i && e.callbackNode !== a)
        return null;
      var o = uf(e, e === ba ? Sr : le);
      if (o === le)
        return null;
      var s = !ff(e, o) && !ih(e, o) && !t, f = s ? Jx(e, o) : ay(e, o);
      if (f !== qo) {
        if (f === cc) {
          var p = cf(e);
          p !== le && (o = p, f = vS(e, p));
        }
        if (f === Zp) {
          var g = ev;
          throw dc(e, le), Xu(e, o), Ya(e, qn()), g;
        }
        if (f === lS)
          Xu(e, o);
        else {
          var C = !ff(e, o), E = e.current.alternate;
          if (C && !Wx(E)) {
            if (f = ay(e, o), f === cc) {
              var A = cf(e);
              A !== le && (o = A, f = vS(e, A));
            }
            if (f === Zp) {
              var N = ev;
              throw dc(e, le), Xu(e, o), Ya(e, qn()), N;
            }
          }
          e.finishedWork = E, e.finishedLanes = o, $x(e, f, o);
        }
      }
      return Ya(e, qn()), e.callbackNode === a ? AC.bind(null, e) : null;
    }
    function vS(e, t) {
      var a = nv;
      if (vf(e)) {
        var i = dc(e, t);
        i.flags |= Tr, cb(e.containerInfo);
      }
      var o = ay(e, t);
      if (o !== cc) {
        var s = Wa;
        Wa = a, s !== null && UC(s);
      }
      return o;
    }
    function UC(e) {
      Wa === null ? Wa = e : Wa.push.apply(Wa, e);
    }
    function $x(e, t, a) {
      switch (t) {
        case qo:
        case Zp:
          throw new Error("Root did not complete. This is a bug in React.");
        // Flow knows about invariant, so it complains if I add a break
        // statement, but eslint doesn't know about invariant, so it complains
        // if I do. eslint-disable-next-line no-fallthrough
        case cc: {
          pc(e, Wa, Ko);
          break;
        }
        case qm: {
          if (Xu(e, a), Ao(a) && // do not delay if we're inside an act() scope
          !KC()) {
            var i = uS + OC - qn();
            if (i > 10) {
              var o = uf(e, le);
              if (o !== le)
                break;
              var s = e.suspendedLanes;
              if (!Uo(s, a)) {
                Ta(), df(e, s);
                break;
              }
              e.timeoutHandle = fg(pc.bind(null, e, Wa, Ko), i);
              break;
            }
          }
          pc(e, Wa, Ko);
          break;
        }
        case Jp: {
          if (Xu(e, a), Yd(a))
            break;
          if (!KC()) {
            var f = ui(e, a), p = f, g = qn() - p, C = cw(g) - g;
            if (C > 10) {
              e.timeoutHandle = fg(pc.bind(null, e, Wa, Ko), C);
              break;
            }
          }
          pc(e, Wa, Ko);
          break;
        }
        case DC: {
          pc(e, Wa, Ko);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Wx(e) {
      for (var t = e; ; ) {
        if (t.flags & Eu) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var o = 0; o < i.length; o++) {
                var s = i[o], f = s.getSnapshot, p = s.value;
                try {
                  if (!ce(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var g = t.child;
        if (t.subtreeFlags & Eu && g !== null) {
          g.return = t, t = g;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Xu(e, t) {
      t = Ms(t, Xm), t = Ms(t, tv), sh(e, t);
    }
    function jC(e) {
      if (uT(), (At & (Yr | Hi)) !== gr)
        throw new Error("Should not already be working.");
      Zo();
      var t = uf(e, le);
      if (!aa(t, ct))
        return Ya(e, qn()), null;
      var a = ay(e, t);
      if (e.tag !== Pu && a === cc) {
        var i = cf(e);
        i !== le && (t = i, a = vS(e, i));
      }
      if (a === Zp) {
        var o = ev;
        throw dc(e, le), Xu(e, t), Ya(e, qn()), o;
      }
      if (a === lS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, pc(e, Wa, Ko), Ya(e, qn()), null;
    }
    function Yx(e, t) {
      t !== le && (pf(e, Ct(t, ct)), Ya(e, qn()), (At & (Yr | Hi)) === gr && (rv(), Vu()));
    }
    function hS(e, t) {
      var a = At;
      At |= kC;
      try {
        return e(t);
      } finally {
        At = a, At === gr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !gl.isBatchingLegacy && (rv(), M_());
      }
    }
    function Qx(e, t, a, i, o) {
      var s = Va(), f = Wr.transition;
      try {
        return Wr.transition = null, Vn(Ur), e(t, a, i, o);
      } finally {
        Vn(s), Wr.transition = f, At === gr && rv();
      }
    }
    function Xo(e) {
      qu !== null && qu.tag === Pu && (At & (Yr | Hi)) === gr && Zo();
      var t = At;
      At |= kC;
      var a = Wr.transition, i = Va();
      try {
        return Wr.transition = null, Vn(Ur), e ? e() : void 0;
      } finally {
        Vn(i), Wr.transition = a, At = t, (At & (Yr | Hi)) === gr && Vu();
      }
    }
    function zC() {
      return (At & (Yr | Hi)) !== gr;
    }
    function ry(e, t) {
      sa(oS, ro, e), ro = Ct(ro, t);
    }
    function mS(e) {
      ro = oS.current, ua(oS, e);
    }
    function dc(e, t) {
      e.finishedWork = null, e.finishedLanes = le;
      var a = e.timeoutHandle;
      if (a !== dg && (e.timeoutHandle = dg, _R(a)), Nn !== null)
        for (var i = Nn.return; i !== null; ) {
          var o = i.alternate;
          dC(o, i), i = i.return;
        }
      ba = e;
      var s = vc(e.current, null);
      return Nn = s, Sr = ro = t, _r = qo, ev = null, Km = le, tv = le, Xm = le, nv = null, Wa = null, Ib(), cl.discardPendingWarnings(), s;
    }
    function FC(e, t) {
      do {
        var a = Nn;
        try {
          if (pm(), u1(), dn(), iS.current = null, a === null || a.return === null) {
            _r = Zp, ev = t, Nn = null;
            return;
          }
          if (Ue && a.mode & Vt && Im(a, !0), Ze)
            if (_a(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Oi(a, i, Sr);
            } else
              _s(a, t, Sr);
          yT(e, a.return, a, t, Sr), IC(a);
        } catch (o) {
          t = o, Nn === a && a !== null ? (a = a.return, Nn = a) : a = Nn;
          continue;
        }
        return;
      } while (!0);
    }
    function PC() {
      var e = aS.current;
      return aS.current = zm, e === null ? zm : e;
    }
    function VC(e) {
      aS.current = e;
    }
    function Gx() {
      uS = qn();
    }
    function ov(e) {
      Km = Ct(e, Km);
    }
    function qx() {
      _r === qo && (_r = qm);
    }
    function yS() {
      (_r === qo || _r === qm || _r === cc) && (_r = Jp), ba !== null && (Ls(Km) || Ls(tv)) && Xu(ba, Sr);
    }
    function Kx(e) {
      _r !== Jp && (_r = cc), nv === null ? nv = [e] : nv.push(e);
    }
    function Xx() {
      return _r === qo;
    }
    function ay(e, t) {
      var a = At;
      At |= Yr;
      var i = PC();
      if (ba !== e || Sr !== t) {
        if (na) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (uv(e, Sr), o.clear()), ch(e, t);
        }
        Ko = Zd(), dc(e, t);
      }
      wo(t);
      do
        try {
          Zx();
          break;
        } catch (s) {
          FC(e, s);
        }
      while (!0);
      if (pm(), At = a, VC(i), Nn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Bc(), ba = null, Sr = le, _r;
    }
    function Zx() {
      for (; Nn !== null; )
        HC(Nn);
    }
    function Jx(e, t) {
      var a = At;
      At |= Yr;
      var i = PC();
      if (ba !== e || Sr !== t) {
        if (na) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (uv(e, Sr), o.clear()), ch(e, t);
        }
        Ko = Zd(), rv(), dc(e, t);
      }
      wo(t);
      do
        try {
          ew();
          break;
        } catch (s) {
          FC(e, s);
        }
      while (!0);
      return pm(), VC(i), At = a, Nn !== null ? (th(), qo) : (Bc(), ba = null, Sr = le, _r);
    }
    function ew() {
      for (; Nn !== null && !Ld(); )
        HC(Nn);
    }
    function HC(e) {
      var t = e.alternate;
      Xt(e);
      var a;
      (e.mode & Vt) !== et ? (_0(e), a = gS(t, e, ro), Im(e, !0)) : a = gS(t, e, ro), dn(), e.memoizedProps = e.pendingProps, a === null ? IC(e) : Nn = a, iS.current = null;
    }
    function IC(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & ys) === Je) {
          Xt(t);
          var o = void 0;
          if ((t.mode & Vt) === et ? o = fC(a, t, ro) : (_0(t), o = fC(a, t, ro), Im(t, !1)), dn(), o !== null) {
            Nn = o;
            return;
          }
        } else {
          var s = qT(a, t);
          if (s !== null) {
            s.flags &= qv, Nn = s;
            return;
          }
          if ((t.mode & Vt) !== et) {
            Im(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= ys, i.subtreeFlags = Je, i.deletions = null;
          else {
            _r = lS, Nn = null;
            return;
          }
        }
        var g = t.sibling;
        if (g !== null) {
          Nn = g;
          return;
        }
        t = i, Nn = t;
      } while (t !== null);
      _r === qo && (_r = DC);
    }
    function pc(e, t, a) {
      var i = Va(), o = Wr.transition;
      try {
        Wr.transition = null, Vn(Ur), tw(e, t, a, i);
      } finally {
        Wr.transition = o, Vn(i);
      }
      return null;
    }
    function tw(e, t, a, i) {
      do
        Zo();
      while (qu !== null);
      if (dw(), (At & (Yr | Hi)) !== gr)
        throw new Error("Should not already be working.");
      var o = e.finishedWork, s = e.finishedLanes;
      if (zd(s), o === null)
        return Fd(), null;
      if (s === le && v("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = le, o === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Ft;
      var f = Ct(o.lanes, o.childLanes);
      Kd(e, f), e === ba && (ba = null, Nn = null, Sr = le), ((o.subtreeFlags & el) !== Je || (o.flags & el) !== Je) && (fc || (fc = !0, fS = a, CS(tl, function() {
        return Zo(), null;
      })));
      var p = (o.subtreeFlags & (Al | Ul | jl | el)) !== Je, g = (o.flags & (Al | Ul | jl | el)) !== Je;
      if (p || g) {
        var C = Wr.transition;
        Wr.transition = null;
        var E = Va();
        Vn(Ur);
        var A = At;
        At |= Hi, iS.current = null, ex(e, o), M1(), vx(e, o, s), pR(e.containerInfo), e.current = o, Cs(s), hx(o, e, s), Es(), Nd(), At = A, Vn(E), Wr.transition = C;
      } else
        e.current = o, M1();
      var N = fc;
      if (fc ? (fc = !1, qu = e, av = s) : (ed = 0, ey = null), f = e.pendingLanes, f === le && (Jf = null), N || YC(e.current, !1), Ad(o.stateNode, i), na && e.memoizedUpdaters.clear(), Ax(), Ya(e, qn()), t !== null)
        for (var I = e.onRecoverableError, Y = 0; Y < t.length; Y++) {
          var Z = t[Y], De = Z.stack, rt = Z.digest;
          I(Z.value, {
            componentStack: De,
            digest: rt
          });
        }
      if (Zm) {
        Zm = !1;
        var qe = sS;
        throw sS = null, qe;
      }
      return aa(av, ct) && e.tag !== Pu && Zo(), f = e.pendingLanes, aa(f, ct) ? (lT(), e === dS ? iv++ : (iv = 0, dS = e)) : iv = 0, Vu(), Fd(), null;
    }
    function Zo() {
      if (qu !== null) {
        var e = ph(av), t = zs(Fa, e), a = Wr.transition, i = Va();
        try {
          return Wr.transition = null, Vn(t), rw();
        } finally {
          Vn(i), Wr.transition = a;
        }
      }
      return !1;
    }
    function nw(e) {
      cS.push(e), fc || (fc = !0, CS(tl, function() {
        return Zo(), null;
      }));
    }
    function rw() {
      if (qu === null)
        return !1;
      var e = fS;
      fS = null;
      var t = qu, a = av;
      if (qu = null, av = le, (At & (Yr | Hi)) !== gr)
        throw new Error("Cannot flush passive effects while already rendering.");
      pS = !0, Jm = !1, xo(a);
      var i = At;
      At |= Hi, Ex(t.current), gx(t, t.current, a, e);
      {
        var o = cS;
        cS = [];
        for (var s = 0; s < o.length; s++) {
          var f = o[s];
          ax(t, f);
        }
      }
      Hd(), YC(t.current, !0), At = i, Vu(), Jm ? t === ey ? ed++ : (ed = 0, ey = t) : ed = 0, pS = !1, Jm = !1, Ud(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function BC(e) {
      return Jf !== null && Jf.has(e);
    }
    function aw(e) {
      Jf === null ? Jf = /* @__PURE__ */ new Set([e]) : Jf.add(e);
    }
    function iw(e) {
      Zm || (Zm = !0, sS = e);
    }
    var lw = iw;
    function $C(e, t, a) {
      var i = uc(a, t), o = H1(e, i, ct), s = Iu(e, o, ct), f = Ta();
      s !== null && (wu(s, ct, f), Ya(s, f));
    }
    function pn(e, t, a) {
      if (XT(a), sv(!1), e.tag === $) {
        $C(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === $) {
          $C(i, e, a);
          return;
        } else if (i.tag === T) {
          var o = i.type, s = i.stateNode;
          if (typeof o.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !BC(s)) {
            var f = uc(a, e), p = F0(i, f, ct), g = Iu(i, p, ct), C = Ta();
            g !== null && (wu(g, ct, C), Ya(g, C));
            return;
          }
        }
        i = i.return;
      }
      v(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function ow(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var o = Ta();
      df(e, a), mw(e), ba === e && Uo(Sr, a) && (_r === Jp || _r === qm && Ao(Sr) && qn() - uS < OC ? dc(e, le) : Xm = Ct(Xm, a)), Ya(e, o);
    }
    function WC(e, t) {
      t === Ft && (t = Hx(e));
      var a = Ta(), i = Ba(e, t);
      i !== null && (wu(i, t, a), Ya(i, a));
    }
    function uw(e) {
      var t = e.memoizedState, a = Ft;
      t !== null && (a = t.retryLane), WC(e, a);
    }
    function sw(e, t) {
      var a = Ft, i;
      switch (e.tag) {
        case ve:
          i = e.stateNode;
          var o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case ut:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), WC(e, a);
    }
    function cw(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : zx(e / 1960) * 1960;
    }
    function fw() {
      if (iv > Px)
        throw iv = 0, dS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      ed > Vx && (ed = 0, ey = null, v("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function dw() {
      cl.flushLegacyContextWarning(), cl.flushPendingUnsafeLifecycleWarnings();
    }
    function YC(e, t) {
      Xt(e), iy(e, Ml, Lx), t && iy(e, wi, Nx), iy(e, Ml, Dx), t && iy(e, wi, Ox), dn();
    }
    function iy(e, t, a) {
      for (var i = e, o = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== o && i.child !== null && s !== Je ? i = i.child : ((i.flags & t) !== Je && a(i), i.sibling !== null ? i = i.sibling : i = o = i.return);
      }
    }
    var ly = null;
    function QC(e) {
      {
        if ((At & Yr) !== gr || !(e.mode & wt))
          return;
        var t = e.tag;
        if (t !== F && t !== $ && t !== T && t !== k && t !== ge && t !== Qe && t !== Pe)
          return;
        var a = vt(e) || "ReactComponent";
        if (ly !== null) {
          if (ly.has(a))
            return;
          ly.add(a);
        } else
          ly = /* @__PURE__ */ new Set([a]);
        var i = sr;
        try {
          Xt(e), v("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Xt(e) : dn();
        }
      }
    }
    var gS;
    {
      var pw = null;
      gS = function(e, t, a) {
        var i = tE(pw, t);
        try {
          return lC(e, t, a);
        } catch (s) {
          if (Tb() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (pm(), u1(), dC(e, t), tE(t, i), t.mode & Vt && _0(t), Nl(null, lC, null, e, t, a), Zi()) {
            var o = ms();
            typeof o == "object" && o !== null && o._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var GC = !1, SS;
    SS = /* @__PURE__ */ new Set();
    function vw(e) {
      if (_i && !rT())
        switch (e.tag) {
          case k:
          case ge:
          case Pe: {
            var t = Nn && vt(Nn) || "Unknown", a = t;
            if (!SS.has(a)) {
              SS.add(a);
              var i = vt(e) || "Unknown";
              v("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case T: {
            GC || (v("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), GC = !0);
            break;
          }
        }
    }
    function uv(e, t) {
      if (na) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Us(e, i, t);
        });
      }
    }
    var _S = {};
    function CS(e, t) {
      {
        var a = gl.current;
        return a !== null ? (a.push(t), _S) : Od(e, t);
      }
    }
    function qC(e) {
      if (e !== _S)
        return Xv(e);
    }
    function KC() {
      return gl.current !== null;
    }
    function hw(e) {
      {
        if (e.mode & wt) {
          if (!wC())
            return;
        } else if (!jx() || At !== gr || e.tag !== k && e.tag !== ge && e.tag !== Pe)
          return;
        if (gl.current === null) {
          var t = sr;
          try {
            Xt(e), v(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, vt(e));
          } finally {
            t ? Xt(e) : dn();
          }
        }
      }
    }
    function mw(e) {
      e.tag !== Pu && wC() && gl.current === null && v(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function sv(e) {
      MC = e;
    }
    var Ii = null, td = null, yw = function(e) {
      Ii = e;
    };
    function nd(e) {
      {
        if (Ii === null)
          return e;
        var t = Ii(e);
        return t === void 0 ? e : t.current;
      }
    }
    function ES(e) {
      return nd(e);
    }
    function RS(e) {
      {
        if (Ii === null)
          return e;
        var t = Ii(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = nd(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: ie,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function XC(e, t) {
      {
        if (Ii === null)
          return !1;
        var a = e.elementType, i = t.type, o = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case T: {
            typeof i == "function" && (o = !0);
            break;
          }
          case k: {
            (typeof i == "function" || s === mt) && (o = !0);
            break;
          }
          case ge: {
            (s === ie || s === mt) && (o = !0);
            break;
          }
          case Qe:
          case Pe: {
            (s === St || s === mt) && (o = !0);
            break;
          }
          default:
            return !1;
        }
        if (o) {
          var f = Ii(a);
          if (f !== void 0 && f === Ii(i))
            return !0;
        }
        return !1;
      }
    }
    function ZC(e) {
      {
        if (Ii === null || typeof WeakSet != "function")
          return;
        td === null && (td = /* @__PURE__ */ new WeakSet()), td.add(e);
      }
    }
    var gw = function(e, t) {
      {
        if (Ii === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Zo(), Xo(function() {
          bS(e.current, i, a);
        });
      }
    }, Sw = function(e, t) {
      {
        if (e.context !== fi)
          return;
        Zo(), Xo(function() {
          cv(t, e, null, null);
        });
      }
    };
    function bS(e, t, a) {
      {
        var i = e.alternate, o = e.child, s = e.sibling, f = e.tag, p = e.type, g = null;
        switch (f) {
          case k:
          case Pe:
          case T:
            g = p;
            break;
          case ge:
            g = p.render;
            break;
        }
        if (Ii === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var C = !1, E = !1;
        if (g !== null) {
          var A = Ii(g);
          A !== void 0 && (a.has(A) ? E = !0 : t.has(A) && (f === T ? E = !0 : C = !0));
        }
        if (td !== null && (td.has(e) || i !== null && td.has(i)) && (E = !0), E && (e._debugNeedsRemount = !0), E || C) {
          var N = Ba(e, ct);
          N !== null && Cr(N, e, ct, rn);
        }
        o !== null && !E && bS(o, t, a), s !== null && bS(s, t, a);
      }
    }
    var _w = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(o) {
          return o.current;
        }));
        return TS(e.current, i, a), a;
      }
    };
    function TS(e, t, a) {
      {
        var i = e.child, o = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case k:
          case Pe:
          case T:
            p = f;
            break;
          case ge:
            p = f.render;
            break;
        }
        var g = !1;
        p !== null && t.has(p) && (g = !0), g ? Cw(e, a) : i !== null && TS(i, t, a), o !== null && TS(o, t, a);
      }
    }
    function Cw(e, t) {
      {
        var a = Ew(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case q:
              t.add(i.stateNode);
              return;
            case Q:
              t.add(i.stateNode.containerInfo);
              return;
            case $:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function Ew(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === q)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var xS;
    {
      xS = !1;
      try {
        var JC = Object.preventExtensions({});
      } catch {
        xS = !0;
      }
    }
    function Rw(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Je, this.subtreeFlags = Je, this.deletions = null, this.lanes = le, this.childLanes = le, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !xS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var di = function(e, t, a, i) {
      return new Rw(e, t, a, i);
    };
    function wS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function bw(e) {
      return typeof e == "function" && !wS(e) && e.defaultProps === void 0;
    }
    function Tw(e) {
      if (typeof e == "function")
        return wS(e) ? T : k;
      if (e != null) {
        var t = e.$$typeof;
        if (t === ie)
          return ge;
        if (t === St)
          return Qe;
      }
      return F;
    }
    function vc(e, t) {
      var a = e.alternate;
      a === null ? (a = di(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Je, a.subtreeFlags = Je, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & zn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case F:
        case k:
        case Pe:
          a.type = nd(e.type);
          break;
        case T:
          a.type = ES(e.type);
          break;
        case ge:
          a.type = RS(e.type);
          break;
      }
      return a;
    }
    function xw(e, t) {
      e.flags &= zn | gn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = le, e.lanes = t, e.child = null, e.subtreeFlags = Je, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Je, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function ww(e, t, a) {
      var i;
      return e === rm ? (i = wt, t === !0 && (i |= en, i |= Ht)) : i = et, na && (i |= Vt), di($, null, null, i);
    }
    function kS(e, t, a, i, o, s) {
      var f = F, p = e;
      if (typeof e == "function")
        wS(e) ? (f = T, p = ES(p)) : p = nd(p);
      else if (typeof e == "string")
        f = q;
      else
        e: switch (e) {
          case mi:
            return Zu(a.children, o, s, t);
          case Xa:
            f = fe, o |= en, (o & wt) !== et && (o |= Ht);
            break;
          case yi:
            return kw(a, o, s, t);
          case xe:
            return Dw(a, o, s, t);
          case Fe:
            return Ow(a, o, s, t);
          case xn:
            return eE(a, o, s, t);
          case on:
          // eslint-disable-next-line no-fallthrough
          case kt:
          // eslint-disable-next-line no-fallthrough
          case fn:
          // eslint-disable-next-line no-fallthrough
          case ur:
          // eslint-disable-next-line no-fallthrough
          case xt:
          // eslint-disable-next-line no-fallthrough
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case gi:
                  f = Se;
                  break e;
                case D:
                  f = We;
                  break e;
                case ie:
                  f = ge, p = RS(p);
                  break e;
                case St:
                  f = Qe;
                  break e;
                case mt:
                  f = He, p = null;
                  break e;
              }
            var g = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var C = i ? vt(i) : null;
              C && (g += `

Check the render method of \`` + C + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + g));
          }
        }
      var E = di(f, a, t, o);
      return E.elementType = e, E.type = p, E.lanes = s, E._debugOwner = i, E;
    }
    function DS(e, t, a) {
      var i = null;
      i = e._owner;
      var o = e.type, s = e.key, f = e.props, p = kS(o, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Zu(e, t, a, i) {
      var o = di(he, e, i, t);
      return o.lanes = a, o;
    }
    function kw(e, t, a, i) {
      typeof e.id != "string" && v('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var o = di(Ee, e, i, t | Vt);
      return o.elementType = yi, o.lanes = a, o.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, o;
    }
    function Dw(e, t, a, i) {
      var o = di(ve, e, i, t);
      return o.elementType = xe, o.lanes = a, o;
    }
    function Ow(e, t, a, i) {
      var o = di(ut, e, i, t);
      return o.elementType = Fe, o.lanes = a, o;
    }
    function eE(e, t, a, i) {
      var o = di(ee, e, i, t);
      o.elementType = xn, o.lanes = a;
      var s = {
        isHidden: !1
      };
      return o.stateNode = s, o;
    }
    function OS(e, t, a) {
      var i = di(ae, e, null, t);
      return i.lanes = a, i;
    }
    function Lw() {
      var e = di(q, null, null, et);
      return e.elementType = "DELETED", e;
    }
    function Nw(e) {
      var t = di(ot, null, null, et);
      return t.stateNode = e, t;
    }
    function LS(e, t, a) {
      var i = e.children !== null ? e.children : [], o = di(Q, i, e.key, t);
      return o.lanes = a, o.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, o;
    }
    function tE(e, t) {
      return e === null && (e = di(F, null, null, et)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function Mw(e, t, a, i, o) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = dg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Ft, this.eventTimes = As(le), this.expirationTimes = As(rn), this.pendingLanes = le, this.suspendedLanes = le, this.pingedLanes = le, this.expiredLanes = le, this.mutableReadLanes = le, this.finishedLanes = le, this.entangledLanes = le, this.entanglements = As(le), this.identifierPrefix = i, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < ko; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case rm:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Pu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function nE(e, t, a, i, o, s, f, p, g, C) {
      var E = new Mw(e, t, a, p, g), A = ww(t, s);
      E.current = A, A.stateNode = E;
      {
        var N = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        A.memoizedState = N;
      }
      return $g(A), E;
    }
    var NS = "18.3.1";
    function Aw(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return qr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: or,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var MS, AS;
    MS = !1, AS = {};
    function rE(e) {
      if (!e)
        return fi;
      var t = Cu(e), a = mb(t);
      if (t.tag === T) {
        var i = t.type;
        if (Kl(i))
          return O_(t, i, a);
      }
      return a;
    }
    function Uw(e, t) {
      {
        var a = Cu(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var o = ea(a);
        if (o === null)
          return null;
        if (o.mode & en) {
          var s = vt(a) || "Component";
          if (!AS[s]) {
            AS[s] = !0;
            var f = sr;
            try {
              Xt(o), a.mode & en ? v("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : v("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Xt(f) : dn();
            }
          }
        }
        return o.stateNode;
      }
    }
    function aE(e, t, a, i, o, s, f, p) {
      var g = !1, C = null;
      return nE(e, t, g, C, a, i, o, s, f);
    }
    function iE(e, t, a, i, o, s, f, p, g, C) {
      var E = !0, A = nE(a, i, E, e, o, s, f, p, g);
      A.context = rE(null);
      var N = A.current, I = Ta(), Y = Ku(N), Z = Qo(I, Y);
      return Z.callback = t ?? null, Iu(N, Z, Y), Ix(A, Y, I), A;
    }
    function cv(e, t, a, i) {
      Md(t, e);
      var o = t.current, s = Ta(), f = Ku(o);
      _n(f);
      var p = rE(a);
      t.context === null ? t.context = p : t.pendingContext = p, _i && sr !== null && !MS && (MS = !0, v(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, vt(sr) || "Unknown"));
      var g = Qo(s, f);
      g.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && v("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), g.callback = i);
      var C = Iu(o, g, f);
      return C !== null && (Cr(C, o, f, s), gm(C, o, f)), f;
    }
    function oy(e) {
      var t = e.current;
      return t.child ? t.child.tag === q ? t.child.stateNode : t.child.stateNode : null;
    }
    function jw(e) {
      switch (e.tag) {
        case $: {
          var t = e.stateNode;
          if (vf(t)) {
            var a = rh(t);
            Yx(t, a);
          }
          break;
        }
        case ve: {
          Xo(function() {
            var o = Ba(e, ct);
            if (o !== null) {
              var s = Ta();
              Cr(o, e, ct, s);
            }
          });
          var i = ct;
          US(e, i);
          break;
        }
      }
    }
    function lE(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = uh(a.retryLane, t));
    }
    function US(e, t) {
      lE(e, t);
      var a = e.alternate;
      a && lE(a, t);
    }
    function zw(e) {
      if (e.tag === ve) {
        var t = ks, a = Ba(e, t);
        if (a !== null) {
          var i = Ta();
          Cr(a, e, t, i);
        }
        US(e, t);
      }
    }
    function Fw(e) {
      if (e.tag === ve) {
        var t = Ku(e), a = Ba(e, t);
        if (a !== null) {
          var i = Ta();
          Cr(a, e, t, i);
        }
        US(e, t);
      }
    }
    function oE(e) {
      var t = vn(e);
      return t === null ? null : t.stateNode;
    }
    var uE = function(e) {
      return null;
    };
    function Pw(e) {
      return uE(e);
    }
    var sE = function(e) {
      return !1;
    };
    function Vw(e) {
      return sE(e);
    }
    var cE = null, fE = null, dE = null, pE = null, vE = null, hE = null, mE = null, yE = null, gE = null;
    {
      var SE = function(e, t, a) {
        var i = t[a], o = Tt(e) ? e.slice() : Rt({}, e);
        return a + 1 === t.length ? (Tt(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = SE(e[i], t, a + 1), o);
      }, _E = function(e, t) {
        return SE(e, t, 0);
      }, CE = function(e, t, a, i) {
        var o = t[i], s = Tt(e) ? e.slice() : Rt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[o], Tt(s) ? s.splice(o, 1) : delete s[o];
        } else
          s[o] = CE(
            // $FlowFixMe number or string is fine here
            e[o],
            t,
            a,
            i + 1
          );
        return s;
      }, EE = function(e, t, a) {
        if (t.length !== a.length) {
          b("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              b("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return CE(e, t, a, 0);
      }, RE = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var o = t[a], s = Tt(e) ? e.slice() : Rt({}, e);
        return s[o] = RE(e[o], t, a + 1, i), s;
      }, bE = function(e, t, a) {
        return RE(e, t, 0, a);
      }, jS = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      cE = function(e, t, a, i) {
        var o = jS(e, t);
        if (o !== null) {
          var s = bE(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = Rt({}, e.memoizedProps);
          var f = Ba(e, ct);
          f !== null && Cr(f, e, ct, rn);
        }
      }, fE = function(e, t, a) {
        var i = jS(e, t);
        if (i !== null) {
          var o = _E(i.memoizedState, a);
          i.memoizedState = o, i.baseState = o, e.memoizedProps = Rt({}, e.memoizedProps);
          var s = Ba(e, ct);
          s !== null && Cr(s, e, ct, rn);
        }
      }, dE = function(e, t, a, i) {
        var o = jS(e, t);
        if (o !== null) {
          var s = EE(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = Rt({}, e.memoizedProps);
          var f = Ba(e, ct);
          f !== null && Cr(f, e, ct, rn);
        }
      }, pE = function(e, t, a) {
        e.pendingProps = bE(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, ct);
        i !== null && Cr(i, e, ct, rn);
      }, vE = function(e, t) {
        e.pendingProps = _E(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ba(e, ct);
        a !== null && Cr(a, e, ct, rn);
      }, hE = function(e, t, a) {
        e.pendingProps = EE(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, ct);
        i !== null && Cr(i, e, ct, rn);
      }, mE = function(e) {
        var t = Ba(e, ct);
        t !== null && Cr(t, e, ct, rn);
      }, yE = function(e) {
        uE = e;
      }, gE = function(e) {
        sE = e;
      };
    }
    function Hw(e) {
      var t = ea(e);
      return t === null ? null : t.stateNode;
    }
    function Iw(e) {
      return null;
    }
    function Bw() {
      return sr;
    }
    function $w(e) {
      var t = e.findFiberByHostInstance, a = h.ReactCurrentDispatcher;
      return bu({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: cE,
        overrideHookStateDeletePath: fE,
        overrideHookStateRenamePath: dE,
        overrideProps: pE,
        overridePropsDeletePath: vE,
        overridePropsRenamePath: hE,
        setErrorHandler: yE,
        setSuspenseHandler: gE,
        scheduleUpdate: mE,
        currentDispatcherRef: a,
        findHostInstanceByFiber: Hw,
        findFiberByHostInstance: t || Iw,
        // React Refresh
        findHostInstancesForRefresh: _w,
        scheduleRefresh: gw,
        scheduleRoot: Sw,
        setRefreshHandler: yw,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: Bw,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: NS
      });
    }
    var TE = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function zS(e) {
      this._internalRoot = e;
    }
    uy.prototype.render = zS.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? v("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : sy(arguments[1]) ? v("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && v("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Un) {
          var i = oE(t.current);
          i && i.parentNode !== a && v("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      cv(e, t, null, null);
    }, uy.prototype.unmount = zS.prototype.unmount = function() {
      typeof arguments[0] == "function" && v("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        zC() && v("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Xo(function() {
          cv(null, e, null, null);
        }), T_(t);
      }
    };
    function Ww(e, t) {
      if (!sy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      xE(e);
      var a = !1, i = !1, o = "", s = TE;
      t != null && (t.hydrate ? b("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Lr && v(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = aE(e, rm, null, a, i, o, s);
      Kh(f.current, e);
      var p = e.nodeType === Un ? e.parentNode : e;
      return mp(p), new zS(f);
    }
    function uy(e) {
      this._internalRoot = e;
    }
    function Yw(e) {
      e && gh(e);
    }
    uy.prototype.unstable_scheduleHydration = Yw;
    function Qw(e, t, a) {
      if (!sy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      xE(e), t === void 0 && v("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, o = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", g = TE;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (g = a.onRecoverableError));
      var C = iE(t, null, e, rm, i, s, f, p, g);
      if (Kh(C.current, e), mp(e), o)
        for (var E = 0; E < o.length; E++) {
          var A = o[E];
          Xb(C, A);
        }
      return new uy(C);
    }
    function sy(e) {
      return !!(e && (e.nodeType === Xr || e.nodeType === Xi || e.nodeType === gd));
    }
    function fv(e) {
      return !!(e && (e.nodeType === Xr || e.nodeType === Xi || e.nodeType === gd || e.nodeType === Un && e.nodeValue === " react-mount-point-unstable "));
    }
    function xE(e) {
      e.nodeType === Xr && e.tagName && e.tagName.toUpperCase() === "BODY" && v("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), wp(e) && (e._reactRootContainer ? v("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : v("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var Gw = h.ReactCurrentOwner, wE;
    wE = function(e) {
      if (e._reactRootContainer && e.nodeType !== Un) {
        var t = oE(e._reactRootContainer.current);
        t && t.parentNode !== e && v("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = FS(e), o = !!(i && zu(i));
      o && !a && v("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Xr && e.tagName && e.tagName.toUpperCase() === "BODY" && v("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function FS(e) {
      return e ? e.nodeType === Xi ? e.documentElement : e.firstChild : null;
    }
    function kE() {
    }
    function qw(e, t, a, i, o) {
      if (o) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var N = oy(f);
            s.call(N);
          };
        }
        var f = iE(
          t,
          i,
          e,
          Pu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          kE
        );
        e._reactRootContainer = f, Kh(f.current, e);
        var p = e.nodeType === Un ? e.parentNode : e;
        return mp(p), Xo(), f;
      } else {
        for (var g; g = e.lastChild; )
          e.removeChild(g);
        if (typeof i == "function") {
          var C = i;
          i = function() {
            var N = oy(E);
            C.call(N);
          };
        }
        var E = aE(
          e,
          Pu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          kE
        );
        e._reactRootContainer = E, Kh(E.current, e);
        var A = e.nodeType === Un ? e.parentNode : e;
        return mp(A), Xo(function() {
          cv(t, E, a, i);
        }), E;
      }
    }
    function Kw(e, t) {
      e !== null && typeof e != "function" && v("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function cy(e, t, a, i, o) {
      wE(a), Kw(o === void 0 ? null : o, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = qw(a, t, e, o, i);
      else {
        if (f = s, typeof o == "function") {
          var p = o;
          o = function() {
            var g = oy(f);
            p.call(g);
          };
        }
        cv(t, f, e, o);
      }
      return oy(f);
    }
    var DE = !1;
    function Xw(e) {
      {
        DE || (DE = !0, v("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = Gw.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || v("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", jt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Xr ? e : Uw(e, "findDOMNode");
    }
    function Zw(e, t, a) {
      if (v("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !fv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = wp(t) && t._reactRootContainer === void 0;
        i && v("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return cy(null, e, t, !0, a);
    }
    function Jw(e, t, a) {
      if (v("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !fv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = wp(t) && t._reactRootContainer === void 0;
        i && v("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return cy(null, e, t, !1, a);
    }
    function ek(e, t, a, i) {
      if (v("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !fv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Uy(e))
        throw new Error("parentComponent must be a valid React Component");
      return cy(e, t, a, !1, i);
    }
    var OE = !1;
    function tk(e) {
      if (OE || (OE = !0, v("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !fv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = wp(e) && e._reactRootContainer === void 0;
        t && v("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = FS(e), i = a && !zu(a);
          i && v("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Xo(function() {
          cy(null, null, e, !1, function() {
            e._reactRootContainer = null, T_(e);
          });
        }), !0;
      } else {
        {
          var o = FS(e), s = !!(o && zu(o)), f = e.nodeType === Xr && fv(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && v("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    wr(jw), ku(zw), vh(Fw), Ps(Va), Jd(fh), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && v("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Oc(rR), Ay(hS, Qx, Xo);
    function nk(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!sy(t))
        throw new Error("Target container is not a DOM element.");
      return Aw(e, t, null, a);
    }
    function rk(e, t, a, i) {
      return ek(e, t, a, i);
    }
    var PS = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [zu, Mf, Xh, yu, Lc, hS]
    };
    function ak(e, t) {
      return PS.usingClientEntryPoint || v('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Ww(e, t);
    }
    function ik(e, t, a) {
      return PS.usingClientEntryPoint || v('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Qw(e, t, a);
    }
    function lk(e) {
      return zC() && v("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Xo(e);
    }
    var ok = $w({
      findFiberByHostInstance: Js,
      bundleType: 1,
      version: NS,
      rendererPackageName: "react-dom"
    });
    if (!ok && Mn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var LE = window.location.protocol;
      /^(https?|file):$/.test(LE) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (LE === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ga.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = PS, Ga.createPortal = nk, Ga.createRoot = ak, Ga.findDOMNode = Xw, Ga.flushSync = lk, Ga.hydrate = Zw, Ga.hydrateRoot = ik, Ga.render = Jw, Ga.unmountComponentAtNode = tk, Ga.unstable_batchedUpdates = hS, Ga.unstable_renderSubtreeIntoContainer = rk, Ga.version = NS, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })()), Ga;
}
var qE;
function lO() {
  if (qE) return vy.exports;
  qE = 1;
  function m() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m);
      } catch (y) {
        console.error(y);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (m(), vy.exports = aO()) : vy.exports = iO(), vy.exports;
}
var KS = lO();
const hv = /* @__PURE__ */ c2(KS);
function $S(m, y) {
  (y == null || y > m.length) && (y = m.length);
  for (var h = 0, R = Array(y); h < y; h++) R[h] = m[h];
  return R;
}
function oO(m) {
  if (Array.isArray(m)) return m;
}
function uO(m) {
  if (Array.isArray(m)) return $S(m);
}
function sO(m) {
  if (m === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return m;
}
function KE(m, y, h, R, L, b, v) {
  try {
    var j = m[b](v), k = j.value;
  } catch (T) {
    return void h(T);
  }
  j.done ? y(k) : Promise.resolve(k).then(R, L);
}
function cO(m) {
  return function() {
    var y = this, h = arguments;
    return new Promise(function(R, L) {
      var b = m.apply(y, h);
      function v(k) {
        KE(b, R, L, v, j, "next", k);
      }
      function j(k) {
        KE(b, R, L, v, j, "throw", k);
      }
      v(void 0);
    });
  };
}
function gy(m, y, h) {
  return y = WS(y), mO(m, d2() ? Reflect.construct(y, h || [], WS(m).constructor) : y.apply(m, h));
}
function gv(m, y) {
  if (!(m instanceof y)) throw new TypeError("Cannot call a class as a function");
}
function XE(m, y) {
  for (var h = 0; h < y.length; h++) {
    var R = y[h];
    R.enumerable = R.enumerable || !1, R.configurable = !0, "value" in R && (R.writable = !0), Object.defineProperty(m, yy(R.key), R);
  }
}
function Sv(m, y, h) {
  return y && XE(m.prototype, y), h && XE(m, h), Object.defineProperty(m, "prototype", { writable: !1 }), m;
}
function od(m, y, h) {
  return (y = yy(y)) in m ? Object.defineProperty(m, y, { value: h, enumerable: !0, configurable: !0, writable: !0 }) : m[y] = h, m;
}
function yc() {
  return (yc = Object.assign ? Object.assign.bind() : function(m) {
    for (var y = 1; y < arguments.length; y++) {
      var h, R = arguments[y];
      for (h in R) !{}.hasOwnProperty.call(R, h) || (m[h] = R[h]);
    }
    return m;
  }).apply(null, arguments);
}
function WS(m) {
  return (WS = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(y) {
    return y.__proto__ || Object.getPrototypeOf(y);
  })(m);
}
function Sy(m, y) {
  if (typeof y != "function" && y !== null) throw new TypeError("Super expression must either be null or a function");
  m.prototype = Object.create(y && y.prototype, { constructor: { value: m, writable: !0, configurable: !0 } }), Object.defineProperty(m, "prototype", { writable: !1 }), y && p2(m, y);
}
function d2() {
  try {
    var m = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (d2 = function() {
    return !!m;
  })();
}
function fO(m) {
  if (typeof Symbol < "u" && m[Symbol.iterator] != null || m["@@iterator"] != null) return Array.from(m);
}
function dO(m, y) {
  var h = m == null ? null : typeof Symbol < "u" && m[Symbol.iterator] || m["@@iterator"];
  if (h != null) {
    var R, L, b, v, j = [], k = !0, T = !1;
    try {
      if (b = (h = h.call(m)).next, y !== 0) for (; !(k = (R = b.call(h)).done) && (j.push(R.value), j.length !== y); k = !0) ;
    } catch (F) {
      T = !0, L = F;
    } finally {
      try {
        if (!k && h.return != null && (v = h.return(), Object(v) !== v)) return;
      } finally {
        if (T) throw L;
      }
    }
    return j;
  }
}
function pO() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vO() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ZE(m, y) {
  var h, R = Object.keys(m);
  return Object.getOwnPropertySymbols && (h = Object.getOwnPropertySymbols(m), y && (h = h.filter(function(L) {
    return Object.getOwnPropertyDescriptor(m, L).enumerable;
  })), R.push.apply(R, h)), R;
}
function oe(m) {
  for (var y = 1; y < arguments.length; y++) {
    var h = arguments[y] != null ? arguments[y] : {};
    y % 2 ? ZE(Object(h), !0).forEach(function(R) {
      od(m, R, h[R]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(m, Object.getOwnPropertyDescriptors(h)) : ZE(Object(h)).forEach(function(R) {
      Object.defineProperty(m, R, Object.getOwnPropertyDescriptor(h, R));
    });
  }
  return m;
}
function $i(m, y) {
  if (m == null) return {};
  var h, R = hO(m, y);
  if (Object.getOwnPropertySymbols) for (var L = Object.getOwnPropertySymbols(m), b = 0; b < L.length; b++) h = L[b], y.includes(h) || {}.propertyIsEnumerable.call(m, h) && (R[h] = m[h]);
  return R;
}
function hO(m, y) {
  if (m == null) return {};
  var h, R = {};
  for (h in m) if ({}.hasOwnProperty.call(m, h)) {
    if (y.includes(h)) continue;
    R[h] = m[h];
  }
  return R;
}
function mO(m, y) {
  if (y && (typeof y == "object" || typeof y == "function")) return y;
  if (y !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return sO(m);
}
function ad() {
  ad = function() {
    return y;
  };
  var m, y = {}, h = Object.prototype, R = h.hasOwnProperty, L = Object.defineProperty || function(K, ee, be) {
    K[ee] = be.value;
  }, ge = typeof Symbol == "function" ? Symbol : {}, b = ge.iterator || "@@iterator", v = ge.asyncIterator || "@@asyncIterator", j = ge.toStringTag || "@@toStringTag";
  function k(K, ee, be) {
    return Object.defineProperty(K, ee, { value: be, enumerable: !0, configurable: !0, writable: !0 }), K[ee];
  }
  try {
    k({}, "");
  } catch {
    k = function(ee, be, Ve) {
      return ee[be] = Ve;
    };
  }
  function T(K, me, be, U) {
    var we, _e, te, Oe, me = me && me.prototype instanceof fe ? me : fe, me = Object.create(me.prototype), U = new ot(U || []);
    return L(me, "_invoke", { value: (we = K, _e = be, te = U, Oe = $, function(X, Ze) {
      if (Oe === q) throw Error("Generator is already running");
      if (Oe === ae) {
        if (X === "throw") throw Ze;
        return { value: m, done: !0 };
      }
      for (te.method = X, te.arg = Ze; ; ) {
        var Ue = te.delegate;
        if (Ue && (Ue = (function ht(tt, Le) {
          var st = Le.method, dt = tt.iterator[st];
          return dt === m ? (Le.delegate = null, st === "throw" && tt.iterator.return && (Le.method = "return", Le.arg = m, ht(tt, Le), Le.method === "throw") || st !== "return" && (Le.method = "throw", Le.arg = new TypeError("The iterator does not provide a '" + st + "' method")), he) : (st = F(dt, tt.iterator, Le.arg), st.type === "throw" ? (Le.method = "throw", Le.arg = st.arg, Le.delegate = null, he) : (dt = st.arg, dt ? dt.done ? (Le[tt.resultName] = dt.value, Le.next = tt.nextLoc, Le.method !== "return" && (Le.method = "next", Le.arg = m), Le.delegate = null, he) : dt : (Le.method = "throw", Le.arg = new TypeError("iterator result is not an object"), Le.delegate = null, he)));
        })(Ue, te), Ue)) {
          if (Ue === he) continue;
          return Ue;
        }
        if (te.method === "next") te.sent = te._sent = te.arg;
        else if (te.method === "throw") {
          if (Oe === $) throw Oe = ae, te.arg;
          te.dispatchException(te.arg);
        } else te.method === "return" && te.abrupt("return", te.arg);
        if (Oe = q, Ue = F(we, _e, te), Ue.type === "normal") {
          if (Oe = te.done ? ae : Q, Ue.arg === he) continue;
          return { value: Ue.arg, done: te.done };
        }
        Ue.type === "throw" && (Oe = ae, te.method = "throw", te.arg = Ue.arg);
      }
    }) }), me;
  }
  function F(K, ee, be) {
    try {
      return { type: "normal", arg: K.call(ee, be) };
    } catch (Ve) {
      return { type: "throw", arg: Ve };
    }
  }
  y.wrap = T;
  var $ = "suspendedStart", Q = "suspendedYield", q = "executing", ae = "completed", he = {};
  function fe() {
  }
  function We() {
  }
  function Se() {
  }
  var ge = {}, Ee = (k(ge, b, function() {
    return this;
  }), Object.getPrototypeOf), Ee = Ee && Ee(Ee(ut([]))), ve = (Ee && Ee !== h && R.call(Ee, b) && (ge = Ee), Se.prototype = fe.prototype = Object.create(ge));
  function Qe(K) {
    ["next", "throw", "return"].forEach(function(ee) {
      k(K, ee, function(be) {
        return this._invoke(ee, be);
      });
    });
  }
  function Pe(K, ee) {
    var be;
    L(this, "_invoke", { value: function(Ve, we) {
      function _e() {
        return new ee(function(te, Oe) {
          (function me(tt, X, Ze, Ue) {
            var ht, tt = F(K[tt], K, X);
            if (tt.type !== "throw") return (X = (ht = tt.arg).value) && typeof X == "object" && R.call(X, "__await") ? ee.resolve(X.__await).then(function(Le) {
              me("next", Le, Ze, Ue);
            }, function(Le) {
              me("throw", Le, Ze, Ue);
            }) : ee.resolve(X).then(function(Le) {
              ht.value = Le, Ze(ht);
            }, function(Le) {
              return me("throw", Le, Ze, Ue);
            });
            Ue(tt.arg);
          })(Ve, we, te, Oe);
        });
      }
      return be = be ? be.then(_e, _e) : _e();
    } });
  }
  function He(K) {
    var ee = { tryLoc: K[0] };
    1 in K && (ee.catchLoc = K[1]), 2 in K && (ee.finallyLoc = K[2], ee.afterLoc = K[3]), this.tryEntries.push(ee);
  }
  function Xe(K) {
    var ee = K.completion || {};
    ee.type = "normal", delete ee.arg, K.completion = ee;
  }
  function ot(K) {
    this.tryEntries = [{ tryLoc: "root" }], K.forEach(He, this), this.reset(!0);
  }
  function ut(K) {
    if (K || K === "") {
      var ee, be = K[b];
      if (be) return be.call(K);
      if (typeof K.next == "function") return K;
      if (!isNaN(K.length)) return ee = -1, (be = function Ve() {
        for (; ++ee < K.length; ) if (R.call(K, ee)) return Ve.value = K[ee], Ve.done = !1, Ve;
        return Ve.value = m, Ve.done = !0, Ve;
      }).next = be;
    }
    throw new TypeError(typeof K + " is not iterable");
  }
  return L(ve, "constructor", { value: We.prototype = Se, configurable: !0 }), L(Se, "constructor", { value: We, configurable: !0 }), We.displayName = k(Se, j, "GeneratorFunction"), y.isGeneratorFunction = function(K) {
    return K = typeof K == "function" && K.constructor, !!K && (K === We || (K.displayName || K.name) === "GeneratorFunction");
  }, y.mark = function(K) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(K, Se) : (K.__proto__ = Se, k(K, j, "GeneratorFunction")), K.prototype = Object.create(ve), K;
  }, y.awrap = function(K) {
    return { __await: K };
  }, Qe(Pe.prototype), k(Pe.prototype, v, function() {
    return this;
  }), y.AsyncIterator = Pe, y.async = function(K, ee, be, Ve, we) {
    we === void 0 && (we = Promise);
    var _e = new Pe(T(K, ee, be, Ve), we);
    return y.isGeneratorFunction(ee) ? _e : _e.next().then(function(te) {
      return te.done ? te.value : _e.next();
    });
  }, Qe(ve), k(ve, j, "Generator"), k(ve, b, function() {
    return this;
  }), k(ve, "toString", function() {
    return "[object Generator]";
  }), y.keys = function(K) {
    var ee, be = Object(K), Ve = [];
    for (ee in be) Ve.push(ee);
    return Ve.reverse(), function we() {
      for (; Ve.length; ) {
        var _e = Ve.pop();
        if (_e in be) return we.value = _e, we.done = !1, we;
      }
      return we.done = !0, we;
    };
  }, y.values = ut, ot.prototype = { constructor: ot, reset: function(K) {
    if (this.prev = 0, this.next = 0, this.sent = this._sent = m, this.done = !1, this.delegate = null, this.method = "next", this.arg = m, this.tryEntries.forEach(Xe), !K) for (var ee in this) ee.charAt(0) === "t" && R.call(this, ee) && !isNaN(+ee.slice(1)) && (this[ee] = m);
  }, stop: function() {
    this.done = !0;
    var K = this.tryEntries[0].completion;
    if (K.type === "throw") throw K.arg;
    return this.rval;
  }, dispatchException: function(K) {
    if (this.done) throw K;
    var ee = this;
    function be(me, U) {
      return _e.type = "throw", _e.arg = K, ee.next = me, U && (ee.method = "next", ee.arg = m), !!U;
    }
    for (var Ve = this.tryEntries.length - 1; 0 <= Ve; --Ve) {
      var we = this.tryEntries[Ve], _e = we.completion;
      if (we.tryLoc === "root") return be("end");
      if (we.tryLoc <= this.prev) {
        var te = R.call(we, "catchLoc"), Oe = R.call(we, "finallyLoc");
        if (te && Oe) {
          if (this.prev < we.catchLoc) return be(we.catchLoc, !0);
          if (this.prev < we.finallyLoc) return be(we.finallyLoc);
        } else if (te) {
          if (this.prev < we.catchLoc) return be(we.catchLoc, !0);
        } else {
          if (!Oe) throw Error("try statement without catch or finally");
          if (this.prev < we.finallyLoc) return be(we.finallyLoc);
        }
      }
    }
  }, abrupt: function(K, ee) {
    for (var be = this.tryEntries.length - 1; 0 <= be; --be) {
      var Ve = this.tryEntries[be];
      if (Ve.tryLoc <= this.prev && R.call(Ve, "finallyLoc") && this.prev < Ve.finallyLoc) {
        var we = Ve;
        break;
      }
    }
    var _e = (we = we && (K === "break" || K === "continue") && we.tryLoc <= ee && ee <= we.finallyLoc ? null : we) ? we.completion : {};
    return _e.type = K, _e.arg = ee, we ? (this.method = "next", this.next = we.finallyLoc, he) : this.complete(_e);
  }, complete: function(K, ee) {
    if (K.type === "throw") throw K.arg;
    return K.type === "break" || K.type === "continue" ? this.next = K.arg : K.type === "return" ? (this.rval = this.arg = K.arg, this.method = "return", this.next = "end") : K.type === "normal" && ee && (this.next = ee), he;
  }, finish: function(K) {
    for (var ee = this.tryEntries.length - 1; 0 <= ee; --ee) {
      var be = this.tryEntries[ee];
      if (be.finallyLoc === K) return this.complete(be.completion, be.afterLoc), Xe(be), he;
    }
  }, catch: function(K) {
    for (var ee = this.tryEntries.length - 1; 0 <= ee; --ee) {
      var be, Ve, we = this.tryEntries[ee];
      if (we.tryLoc === K) return (be = we.completion).type === "throw" && (Ve = be.arg, Xe(we)), Ve;
    }
    throw Error("illegal catch attempt");
  }, delegateYield: function(K, ee, be) {
    return this.delegate = { iterator: ut(K), resultName: ee, nextLoc: be }, this.method === "next" && (this.arg = m), he;
  } }, y;
}
function p2(m, y) {
  return (p2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(h, R) {
    return h.__proto__ = R, h;
  })(m, y);
}
function JE(m, y) {
  return oO(m) || dO(m, y) || v2(m, y) || pO();
}
function _y(m) {
  return uO(m) || fO(m) || v2(m) || vO();
}
function yO(m, y) {
  if (typeof m != "object" || !m) return m;
  var h = m[Symbol.toPrimitive];
  if (h === void 0) return (y === "string" ? String : Number)(m);
  if (h = h.call(m, y), typeof h != "object") return h;
  throw new TypeError("@@toPrimitive must return a primitive value.");
}
function yy(m) {
  return m = yO(m, "string"), typeof m == "symbol" ? m : m + "";
}
function Gr(m) {
  return (Gr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(y) {
    return typeof y;
  } : function(y) {
    return y && typeof Symbol == "function" && y.constructor === Symbol && y !== Symbol.prototype ? "symbol" : typeof y;
  })(m);
}
function v2(m, y) {
  var h;
  if (m) return typeof m == "string" ? $S(m, y) : (h = (h = {}.toString.call(m).slice(8, -1)) === "Object" && m.constructor ? m.constructor.name : h) === "Map" || h === "Set" ? Array.from(m) : h === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h) ? $S(m, y) : void 0;
}
var h2 = { react: { componentWrap: "div", slotWrap: "div", componentWrapAttrs: { __use_react_component_wrap: "", style: { all: "unset" } }, slotWrapAttrs: { __use_react_slot_wrap: "", style: { all: "unset" } }, vueNamedSlotsKey: ["node:"] }, vue: { componentWrapHOC: function(m) {
  return function() {
    var y = (0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}).portals;
    return Et.createElement(Et.Fragment, null, m, (y === void 0 ? [] : y).map(function(h) {
      var R = h.Portal;
      return Et.createElement(R, { key: h.key });
    }));
  };
}, componentWrapAttrs: { "data-use-vue-component-wrap": "", style: { all: "unset" } }, slotWrapAttrs: { "data-use-vue-slot-wrap": "", style: { all: "unset" } } } };
function m2() {
  var m = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : { react: {}, vue: {} }, h = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : h2, y = 2 < arguments.length ? arguments[2] : void 0, h = (m.vue || (m.vue = {}), m.react || (m.react = {}), [h, oe(oe({}, m), {}, { react: oe(oe(oe({}, h.react), m.react), {}, { componentWrapAttrs: oe(oe({}, h.react.componentWrapAttrs), m.react.componentWrapAttrs), slotWrapAttrs: oe(oe({}, h.react.slotWrapAttrs), m.react.slotWrapAttrs) }), vue: oe(oe(oe({}, h.vue), m.vue), {}, { componentWrapAttrs: oe(oe({}, h.vue.componentWrapAttrs), m.vue.componentWrapAttrs), slotWrapAttrs: oe(oe({}, h.vue.slotWrapAttrs), m.vue.slotWrapAttrs) }) })]);
  return y && h.unshift({}), Object.assign.apply(this, h);
}
var y2 = ["getElementById", "getElementsByClassName", "getElementsByTagName", "getElementsByTagNameNS", "querySelector", "querySelectorAll"], ld = { Document: {}, Element: {} };
function gO(m) {
  Object.keys(ld).forEach(function(y) {
    y2.forEach(function(h) {
      var R = ld[y][h] || window[y].prototype[h];
      R && (ld[y][h] = R, window[y].prototype[h] = function() {
        for (var L = arguments.length, b = new Array(L), v = 0; v < L; v++) b[v] = arguments[v];
        var j = R.apply(this, b);
        return j && (j.constructor !== NodeList || j.constructor === NodeList && 0 < j.length) ? j : ((j = h) === "getElementById" && (j = "querySelector", b = ["#" + b[0]]), (ld.Element[j] || Element.prototype[j]).apply(m, b));
      });
    });
  });
}
function SO() {
  Object.keys(ld).forEach(function(m) {
    y2.forEach(function(y) {
      window[m].prototype[y] = ld[m][y];
    });
  });
}
var _O = ["ref"], CO = ["key"], EO = ["hashList"], IS = parseInt(KS.version);
var RO = (() => {
  function m(y) {
    return gv(this, m), gy(this, m, [y]);
  }
  return Sy(m, Et.Component), Sv(m, [{ key: "render", value: function() {
    var y = this.props.component, h = this.props.passedProps, h = (h.ref, $i(h, _O));
    return Et.createElement(y, h, this.props.children);
  } }]);
})(), bO = function(m, y, h) {
  var R = (() => {
    function L(b) {
      var v;
      return gv(this, L), (v = gy(this, L, [b])).state = oe(oe({}, b), y.isSlots ? { children: m } : {}), v.setRef = v.setRef.bind(v), v.vueInReactCall = v.vueInReactCall.bind(v), (v.__veauryVueWrapperRef__ = h).__veauryVueInReactCall__ = v.vueInReactCall, v;
    }
    return Sy(L, Et.Component), Sv(L, [{ key: "reactPropsLinkToVueInstance", value: function(b) {
      Object.keys(b).forEach(function(v) {
        h[v] || (h[v] = b[v]);
      }), Object.getOwnPropertyNames(b.__proto__).filter(function(v) {
        return ["constructor", "render"].indexOf(v) < 0;
      }).forEach(function(v) {
        h[v] || (h[v] = b[v]);
      });
    } }, { key: "setRef", value: function(b) {
      var v = this;
      b && (h.__veauryReactRef__ = b, this.reactPropsLinkToVueInstance(b), Promise.resolve().then(function() {
        return v.reactPropsLinkToVueInstance(b);
      }), (this.setRef.current = b).__veauryVueWrapperRef__ = h);
    } }, { key: "createSlot", value: function(b) {
      return { originVNode: b, inheritAttrs: !1, __fromReactSlot: !0, render: function() {
        var v, j;
        return ((v = b = (b = ((j = this.$slots) == null || (v = j.default) == null ? void 0 : v.call(j)) || b) instanceof Function ? b(this) : b) == null ? void 0 : v.length) === 1 && (j = b[0]) != null && j.data && ((v = this.$attrs).key, j = $i(v, CO), b[0].props = oe(oe({}, j), b[0].props)), b;
      } };
    } }, { key: "componentWillUnmount", value: function() {
      h.__veauryReactRef__ && (h.__veauryReactRef__.__veauryVueWrapperRef__ = null, h.__veauryReactRef__ = null);
    } }, { key: "vueInReactCall", value: function(b) {
      var v = this, j = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
      return 2 < arguments.length && arguments[2] && b && b[0] ? b.map(function(k, T) {
        return my(v.createSlot(k instanceof Function ? k : [k]), oe(oe(oe({}, y), j), {}, { isSlots: !0, wrapInstance: h })).render({ key: k?.key || void 0 });
      }) : my(this.createSlot(b), oe(oe(oe({}, y), j), {}, { isSlots: !0, wrapInstance: h })).render();
    } }, { key: "render", value: function() {
      var b, v, j, k = this, he = this.state, T = he.hashList, F = $i(he, EO), $ = {}, Q = {};
      for (b in F) v = b, j = void 0, F.hasOwnProperty(v) && F[v] != null && (F[v].__slot ? (F[v].reactSlot ? F[v] = F[v].reactSlot : (j = F[v], y.defaultSlotsFormatter && F[v].__trueChildren ? (F[v].__trueChildren.__top__ = k.__veauryVueWrapperRef__, F[v] = y.defaultSlotsFormatter(F[v].__trueChildren, k.vueInReactCall, T), F[v] instanceof Array ? F[v] = _y(F[v]) : -1 < ["string", "number"].indexOf(Gr(F[v])) ? F[v] = [F[v]] : Gr(F[v]) === "object" && (F[v] = oe({}, F[v]))) : F[v] = oe({}, my(k.createSlot(F[v]), oe(oe({}, y), {}, { isSlots: !0, wrapInstance: h })).render()), F[v].vueFunction = j), $[v] = F[v]) : F[v].__scopedSlot && (F[v] = F[v](k.createSlot), Q[v] = F[v]));
      var q, ae, he = {};
      return he.ref = this.setRef, y.isSlots ? this.state.children || this.props.children : (q = F, m.__syncUpdateForPureReactInVue && Object.keys(m.__syncUpdateForPureReactInVue).map(function(fe) {
        var We, Se;
        q[fe] && typeof q[fe] == "function" && (We = k.__veauryVueWrapperRef__, Se = q[fe], q[fe] = function() {
          for (var ge = arguments.length, Ee = new Array(ge), ve = 0; ve < ge; ve++) Ee[ve] = arguments[ve];
          We.__veaurySyncUpdateProps__(m.__syncUpdateForPureReactInVue[fe].apply(this, Ee)), Se.apply(this, Ee), We.macroTaskUpdate = !0, We.__veauryMountReactComponent__(!0, !0, {});
        });
      }), ae = oe(oe(oe({}, q = y.defaultPropsFormatter ? y.defaultPropsFormatter.call(this, q, this.vueInReactCall, T) : q), $), Q), Object.getPrototypeOf(m) !== Function.prototype && (Gr(m) !== "object" || m.render) || L.catchVueRefs() ? (Object.getPrototypeOf(m) === Function.prototype && delete he.ref, Et.createElement(m, yc({}, ae, he))) : Et.createElement(RO, yc({ passedProps: ae, component: m }, he), ae.children));
    } }], [{ key: "catchVueRefs", value: function() {
      if (h.$parent) {
        for (var b in h.$parent.$refs) if (h.$parent.$refs[b] === h) return !0;
      }
      return !1;
    } }]);
  })();
  return od(R, "displayName", "applyReact_".concat(m.displayName || m.name || "Component")), R;
};
function XS(m) {
  var y = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
  return m.__esModule && m.default && (m = m.default), y.isSlots && (m = m()), y = m2(y, void 0, !0), { originReactComponent: m, setup: function(h, R) {
    var L, b, v, j;
    if (!y.isSlots) return L = {}, b = ck({}), v = fk(), typeof (j = y.useInjectPropsFromWrapper || m.__veauryInjectPropsFromWrapper__) == "function" && (typeof (j = j.call(v.proxy, h)) != "function" ? (Object.assign(b, j), L.__veauryInjectedProps__ = b) : v.proxy.__veauryInjectedComputed__ = j), L;
  }, data: function() {
    return { VEAURY_Portals: [] };
  }, created: function() {
    this.__veauryPortalKeyPool__ = [], this.__veauryMaxPortalCount__ = 0;
  }, computed: { __veauryInjectedProps__: function() {
    var h;
    return (h = this.__veauryInjectedComputed__) == null ? void 0 : h.call(this);
  } }, render: function() {
    var h = tu(y.react.componentWrap, oe({ ref: "react" }, y.react.componentWrapAttrs || {}), this.VEAURY_Portals.map(function(R) {
      return (0, R.Portal)(tu, R.key);
    }));
    return this.__veauryCheckReactSlot__(this.$slots), h;
  }, methods: { __veauryCheckReactSlot__: function(h) {
    var R = this;
    function L(b, v, j) {
      return v[j] && (b[j] = v[j], 1);
    }
    Gr(h) === "object" && h != null && (h instanceof Array ? h.forEach(function(b) {
      R.__veauryCheckReactSlot__(b.children);
    }) : Object.keys(h).forEach(function(k) {
      var v, j, k = h[k];
      if (typeof k == "function") {
        try {
          v = k.apply(R, k.__reactArgs || [{}]);
        } catch {
          return;
        }
        (k.__trueChildren = v).forEach(function(T) {
          T.children && R.__veauryCheckReactSlot__(T.children);
        }), v.length !== 1 || L(k, v = v[0], "reactSlot") || L(k, v, "reactFunction") || v.type !== s2 || ((j = v.children) == null ? void 0 : j.length) !== 1 || L(k, j = v.children[0], "reactSlot") || L(k, j, "reactFunction");
      }
    }));
  }, __veauryPushVuePortal__: function(h) {
    var R = this.__veauryPortalKeyPool__.shift() || this.__veauryMaxPortalCount__++;
    this.VEAURY_Portals.push({ Portal: h, key: R });
  }, __veauryRemoveVuePortal__: function(h) {
    var R, L = this.VEAURY_Portals.find(function(b, v) {
      if (b.Portal === h) return R = v, !0;
    });
    this.__veauryPortalKeyPool__.push(L.key), this.VEAURY_Portals.splice(R, 1);
  }, __veauryGetScopeSlot__: function(h, R, L) {
    var b = this;
    function v(j) {
      function k() {
        for (var T, F = this, $ = arguments.length, Q = new Array($), q = 0; q < $; q++) Q[q] = arguments[q];
        return h.reactFunction ? h.reactFunction.apply(this, Q) : y.defaultSlotsFormatter ? ((T = h.apply(this, Q)).__top__ = b, (T = y.defaultSlotsFormatter(T, b.__veauryVueInReactCall__, R)) instanceof Array || -1 < Gr(T).indexOf("string", "number") ? T = _y(T) : Gr(T) === "object" && (T = oe({}, T)), T) : my(j(function() {
          return h.apply(F, Q);
        }), oe(oe({}, y), {}, { isSlots: !0, wrapInstance: b })).render();
      }
      return y.pureTransformer && L ? k.vueFunction = L : k.vueFunction = h, k;
    }
    return v.__scopedSlot = !0, v;
  }, __veaurySyncUpdateProps__: function(h) {
    this.__veauryReactInstance__ && this.__veauryReactInstance__.setState(h);
  }, __veauryMountReactComponent__: function(h, R) {
    var L = arguments, b = this;
    return cO(ad().mark(function v() {
      var j, k, T, F, $, Q, q, ae, he, fe, We, Se, ge, Ee, ve, Qe, Pe;
      return ad().wrap(function(He) {
        for (; ; ) switch (He.prev = He.next) {
          case 0:
            if (j = 2 < L.length && L[2] !== void 0 ? L[2] : {}, k = {}, T = [], (ae = b.$.vnode.scopeId) && (k[ae] = "", T.push(ae)), F = {}, $ = {}, h && (R == null || !R.slot)) {
              He.next = 18;
              break;
            }
            q = ad().mark(function Xe(ot) {
              var ut;
              return ad().wrap(function(K) {
                for (; ; ) switch (K.prev = K.next) {
                  case 0:
                    if (b.$slots.hasOwnProperty(ot) && b.$slots[ot] != null) {
                      K.next = 2;
                      break;
                    }
                    return K.abrupt("return", 0);
                  case 2:
                    if ((ut = y.react.vueNamedSlotsKey.find(function(ee) {
                      return ot.indexOf(ee) === 0;
                    })) || ot === "default") return ut = ot.replace(new RegExp("^".concat(ut)), ""), F[ut] = b.$slots[ot], F[ut].__slot = !0, K.abrupt("return", 0);
                    K.next = 8;
                    break;
                  case 8:
                    $[ot] = b.__veauryGetScopeSlot__(b.$slots[ot], T, (ut = b.$.vnode) == null || (ut = ut.children) == null ? void 0 : ut[ot]);
                  case 9:
                  case "end":
                    return K.stop();
                }
              }, Xe);
            }), He.t0 = ad().keys(b.$slots || {});
          case 10:
            if ((He.t1 = He.t0()).done) {
              He.next = 18;
              break;
            }
            return ae = He.t1.value, He.delegateYield(q(ae), "t2", 13);
          case 13:
            if (He.t2 === 0) return He.abrupt("continue", 10);
            He.next = 16;
            break;
          case 16:
            He.next = 10;
            break;
          case 18:
            if ((!h || R != null && R.slot) && (he = oe({}, F), Q = he.default, delete he.default), b.__veauryLast__ = b.__veauryLast__ || {}, b.__veauryLast__.slot = b.__veauryLast__.slot || {}, b.__veauryLast__.attrs = b.__veauryLast__.attrs || {}, fe = { slot: function() {
              b.__veauryLast__.slot = oe(oe(oe({}, Q ? { children: Q } : { children: null }), he), $);
            }, attrs: function() {
              b.__veauryLast__.attrs = b.$attrs;
            } }, R && Object.keys(R).forEach(function(Xe) {
              return fe[Xe]();
            }), h) {
              He.next = 64;
              break;
            }
            if (b.__reactBoundedPromise__ = new Promise(function(Xe) {
              We = Xe;
            }), b.__reactBoundedPromise__.resolve = We, fe.slot(), fe.attrs(), Ee = bO(m, y, b), Se = Et.createElement(Ee, yc({}, b.$attrs, b.__veauryInjectedProps__, { children: Q }, he, $, b.$attrs.class ? { className: b.$attrs.class } : {}, k, { hashList: T }, b.$attrs.style ? { style: b.$attrs.style } : {}, { ref: function(Xe) {
              b.__veauryReactInstance__ = Xe, b.__reactBoundedPromise__.resolve(!0);
            } })), ge = b.$refs.react, Ee = y.wrapInstance) {
              He.next = 47;
              break;
            }
            ve = b.$parent;
          case 35:
            if (ve) {
              if (ve.parentReactWrapperRef) return Ee = ve.parentReactWrapperRef, He.abrupt("break", 45);
              He.next = 39;
            } else He.next = 45;
            break;
          case 39:
            if (ve.reactWrapperRef) return Ee = ve.reactWrapperRef, He.abrupt("break", 45);
            He.next = 42;
            break;
          case 42:
            ve = ve.$parent, He.next = 35;
            break;
          case 45:
            He.next = 49;
            break;
          case 47:
            (Ee = y.wrapInstance).__veauryVueWrapperRef__ = b;
          case 49:
            if (Ee) return b.parentReactWrapperRef = Ee, b.reactPortal = function() {
              return KS.createPortal(Se, ge);
            }, Ee.pushReactPortal(b.reactPortal), He.abrupt("return");
            He.next = 54;
            break;
          case 54:
            if (17 < IS) return hv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED !== void 0 && (hv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = !0), Qe = y.react.createRoot || hv.createRoot, 18 < IS && !Qe && console.warn("'react-dom 19' no longer supports dynamically determining whether to use 'render' or 'createRoot'. In order to be compatible with 'react-dom 17' and previous versions, you need to manually configure 'createRoot' in the veaury configuration."), b.__veauryReactApp__ = Qe(ge), b.__veauryReactApp__.render(Se), He.abrupt("return");
            He.next = 61;
            break;
          case 61:
            hv.render(Se, ge), He.next = 71;
            break;
          case 64:
            return He.next = 66, b.__reactBoundedPromise__;
          case 66:
            Pe = function() {
              b.__veauryReactInstance__.setState(function(Xe) {
                return Object.keys(Xe).forEach(function(ot) {
                  y.isSlots && ot === "children" || delete Xe[ot];
                }), oe(oe(oe(oe({}, b.__veauryCache__), b.__veauryInjectedProps__), !y.isSlots && b.__veauryLast__.slot), b.__veauryLast__.attrs);
              }), b.__veauryCache__ = null;
            }, !b.microTaskUpdate || b.__veauryCache__ || b.$nextTick(function() {
              Pe(), b.microTaskUpdate = !1;
            }), b.macroTaskUpdate && (clearTimeout(b.updateTimer), b.updateTimer = setTimeout(function() {
              clearTimeout(b.updateTimer), Pe(), b.macroTaskUpdate = !1;
            })), b.__veauryCache__ = oe(oe({}, b.__veauryCache__ || {}), oe(oe(oe(oe({}, j), b.$attrs.class ? { className: b.$attrs.class } : {}), oe({}, k)), {}, { hashList: T }, b.$attrs.style ? { style: b.$attrs.style } : {})), b.macroTaskUpdate || b.microTaskUpdate || Pe();
          case 71:
          case "end":
            return He.stop();
        }
      }, v);
    }))();
  } }, mounted: function() {
    var h = this;
    this.__VEAURY_IGNORE_STRANGE_UPDATE__ = !0, Promise.resolve().then(function() {
      h.__VEAURY_IGNORE_STRANGE_UPDATE__ = !1;
    }), clearTimeout(this.updateTimer), this.__veauryMountReactComponent__();
  }, beforeUnmount: function() {
    var h;
    clearTimeout(this.updateTimer), gO(this.$refs.react), this.reactPortal ? (h = this.parentReactWrapperRef) != null && h.removeReactPortal(this.reactPortal) : 17 < IS ? (h = this.__veauryReactApp__) != null && h.unmount() : hv.unmountComponentAtNode(this.$refs.react), SO();
  }, updated: function() {
    this.__VEAURY_IGNORE_STRANGE_UPDATE__ || this.__veauryMountReactComponent__(!0, { slot: !0 });
  }, inheritAttrs: !1, watch: { $attrs: { handler: function() {
    this.__veauryMountReactComponent__(!0, { attrs: !0 });
  }, deep: !0 }, __veauryInjectedProps__: { handler: function() {
    this.__veauryMountReactComponent__(!0, { attrs: !0 });
  }, deep: !0 } } };
}
var TO = /* @__PURE__ */ new Set(["onClick", "onContextMenu", "onDoubleClick", "onDrag", "onDragEnd", "onDragEnter", "onDragExit", "onDragLeave", "onDragOver", "onDragStart", "onDrop", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onChange", "onInput", "onInvalid", "onReset", "onSubmit", "onError", "onLoad", "onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onGotPointerCapture", "onLostPointerCapture", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut", "onSelect", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onScroll", "onWheel", "onAbort", "onCanPlay", "onCanPlayThrough", "onDurationChange", "onEmptied", "onEncrypted", "onEnded", "onError", "onLoadedData", "onLoadedMetadata", "onLoadStart", "onPause", "onPlay", "onPlaying", "onProgress", "onRateChange", "onSeeked", "onSeeking", "onStalled", "onSuspend", "onTimeUpdate", "onVolumeChange", "onWaiting", "onLoad", "onError", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionEnd", "onToggle"]);
function xO(m, y) {
  for (var h = (m = y = m?._reactInternals || m?._reactInternalFiber || y) == null ? void 0 : m.return; h; ) {
    var R = h.stateNode;
    if (R = R?.parentVueWrapperRef || R?.__veauryVueWrapperRef__) return R;
    h = h.return;
  }
}
function e2(m, y, h) {
  var R = {};
  return h.forEach(function(L) {
    R[L] = !0;
  }), m[(y === "modelValue" ? "model" : y) + "Modifiers"] = R;
}
function t2(m, y, h) {
  var R = this, L = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : "v-model";
  if (!(y instanceof Array)) throw Error("[error:veaury] Parameter type error from '".concat(L, "', a single v-model is an array, such as [val, setter, argumentKey, modifiers] or [val, setter, modifiers]"));
  if (typeof y[1] != "function") throw Error("[error:veaury] Parameter type error from '".concat(L, "', a single v-model is an array, the second element of the array must be a setter function"));
  var b = y[1], v = (typeof y[2] == "string" ? (h = y[2], y[3] instanceof Array && e2(m, h, y[3])) : y[2] instanceof Array && e2(m, h, y[2]), m["onUpdate:" + h]);
  m["onUpdate:" + h] = typeof v == "function" ? function() {
    for (var j = arguments.length, k = new Array(j), T = 0; T < j; T++) k[T] = arguments[T];
    v.apply(R, k), b.apply(R, k);
  } : b, m[h] = y[0];
}
function YS(m) {
  var y = this, h = {}, R = oe({}, m);
  return Object.keys(m).forEach(function(L) {
    var b, v = L.match(/^onUpdate-([^-]+)/);
    if (v) delete R[L], b = h["onUpdate:".concat(v[1])], h["onUpdate:".concat(v[1])] = typeof b == "function" ? function() {
      for (var k = arguments.length, T = new Array(k), F = 0; F < k; F++) T[F] = arguments[F];
      b.apply(y, T), m[L].apply(y, T);
    } : m[L];
    else if (v = L.match(/^v-model($|:([^:]+)|-([^:]+))/)) v = v[2] || v[3] || "modelValue", t2(h, m[L], v), delete R[L];
    else if (L === "v-models") {
      if (Gr(m[L]) !== "object" || m[L] instanceof Array) throw Error("[error:veaury] The parameter 'v-models' must be an object type, such as {[argumentKey]: singleVModel}");
      var j = m[L];
      Object.keys(j).forEach(function(k) {
        t2(h, j[k], k, "v-models");
      }), delete R[L];
    }
  }), oe(oe({}, R), h);
}
var Cy = Sv(function m() {
  gv(this, m), od(this, "pool", /* @__PURE__ */ new Set());
}, [{ key: "getRandomId", value: function(m) {
  var y = m + (Math.random() + "").substr(2);
  return this.pool.has(y) ? this.getRandomId(m) : (this.pool.add(y), y);
} }]);
function g2(R, y) {
  var h, R = R.node;
  if (typeof R == "function" && (R = R()), (h = y) != null && h.current || typeof y == "function" || (h = y) != null && h.toString().match(/^function/) || (y = null), -1 < ["string", "number"].indexOf(Gr(R))) return R;
  if (R instanceof Array) {
    if (R.length !== 1) return R;
    R = R[0];
  }
  return oe(oe({}, R), {}, { ref: y });
}
var wO = XS(g2);
function QS(m) {
  return tu(wO, { node: function() {
    return m.node;
  } });
}
QS.originReactComponent = Et.forwardRef(g2);
var kO = ["component", "node"], DO = ["component", "$slots", "children", "class", "style"], OO = ["className", "classname"], mc = "veaury-options", n2 = new Cy();
function LO(m, y) {
  var h;
  return m = typeof m == "string" && y ? (y = y.$) == null || (y = y.appContext) == null || (y = y.app) == null || (h = y.component) == null ? void 0 : h.call(y, m) : m;
}
function r2(m) {
  if (m) return Object.keys(m).forEach(function(y) {
    var h = m[y];
    h != null && (typeof h == "function" ? (m[y] = h, m[y].reactFunction = h) : (m[y] = function() {
      return h;
    }, m[y].reactSlot = h), h.vueFunction) && (m[y].vueFunction = h.vueFunction);
  }), m;
}
function NO(m) {
  var y;
  return (y = m.node) == null ? void 0 : y.call(m);
}
var GS = Et.forwardRef(function(L, y) {
  var h, v = L.component, R = L.node, L = $i(L, kO);
  if (v == null && R == null) return null;
  if (R != null) {
    if (R.$$typeof || typeof R == "string" || typeof R == "number") return R;
    typeof R != "function" && (h = R, R = function() {
      return h;
    });
  }
  var b, v = v || NO, j = m2(L[mc] || {}, void 0, !0), k = j.useInjectPropsFromWrapper || v.__veauryInjectPropsFromWrapper__;
  return j.isSlots || typeof k == "function" && (b = k(L)), Et.createElement(MO, yc({}, oe(oe(oe(oe({ component: v }, R ? { node: R } : {}), L), b), {}, od({}, mc, j)), { ref: y }));
}), MO = (() => {
  function m(y) {
    var h;
    return gv(this, m), (h = gy(this, m, [y])).state = { portals: [] }, h.__veauryPortalKeyPool__ = [], h.__veauryMaxPortalCount__ = 0, h.__veauryCurrentVueComponent__ = y.component, h.__veauryCreateVueInstance__ = h.__veauryCreateVueInstance__.bind(h), h.__veauryVueComponentContainer__ = h.createVueComponentContainer(), h;
  }
  return Sy(m, Et.Component), Sv(m, [{ key: "pushReactPortal", value: function(y) {
    var h = this.state.portals, R = this.__veauryPortalKeyPool__.shift() || this.__veauryMaxPortalCount__++;
    h.push({ Portal: y, key: R }), this.setState({ portals: h });
  } }, { key: "removeReactPortal", value: function(y) {
    var h, R = this.state.portals, L = R.find(function(b, v) {
      if (b.Portal === y) return h = v, !0;
    });
    this.__veauryPortalKeyPool__.push(L.key), R.splice(h, 1), this.__veauryVueRef__ && this.setState({ portals: R });
  } }, { key: "createVueComponentContainer", value: function() {
    var y = this, h = {}, R = this.props[mc];
    return R.isSlots ? (Object.keys(this.props).forEach(function(L) {
      TO.has(L) && typeof y.props[L] == "function" && (h[L] = y.props[L]);
    }), R.vue.slotWrapAttrs && (h = oe(oe({}, h), R.vue.slotWrapAttrs))) : R.vue.componentWrapAttrs && (h = oe(oe({}, h), R.vue.componentWrapAttrs)), R.vue.componentWrapHOC(Et.createElement("div", yc({}, R.vue.componentWrapAttrs, { ref: this.__veauryCreateVueInstance__, key: null })), h);
  } }, { key: "shouldComponentUpdate", value: function(y, h, R) {
    var L, b, v, j, k = this;
    return y === this.props || (L = y.component, b = (b = y["v-slots"]) === void 0 ? null : b, v = y.children, y = $i(y, ["component", mc, "v-slots", "children"].map(yy)), this.__veauryCurrentVueComponent__ !== L && this.updateVueComponent(L), L.__fromReactSlot) || this.__veauryVueInstance__ && (v && (b = b || {}, Gr(v) !== "object" || v instanceof Array || v.$$typeof ? b.default = v : b = v), (j = this.__veauryVueInstance__.$data.$slots) && Object.keys(j).forEach(function(T) {
      delete j[T];
    }), b && (j || (this.__veauryVueInstance__.$data.$slots = {}), Object.assign(this.__veauryVueInstance__.$data.$slots, r2(b))), Object.keys(this.__veauryVueInstance__.$data).forEach(function(T) {
      T !== "$slots" && delete k.__veauryVueInstance__.$data[T];
    }), this.__veauryVueInstance__) && Object.assign(this.__veauryVueInstance__.$data, YS(y)), !0;
  } }, { key: "componentWillUnmount", value: function() {
    this.vuePortal ? this.parentVueWrapperRef.__veauryRemoveVuePortal__(this.vuePortal) : (this.__veauryVueInstance__ && this.__veauryVueInstance__.$.appContext.app.unmount(), n2.pool.delete(this.__veauryVueTargetId__), this.vueCreated = !1);
  } }, { key: "componentDidMount", value: function() {
    this.__veauryCreateVueInstance__(this.vueContainerElement);
  } }, { key: "__veauryCreateVueInstance__", value: function(y) {
    var h, R, L, b, v, j, k, T, F = this;
    function $(Q) {
      this.__veauryVueInstance__ || (this.__veauryVueInstance__ = Q);
    }
    this.vueCreated || (this.vueCreated = !0, (h = this).vueContainerElement = y, (L = this.props).component, R = L[mc], k = L.children, T = (T = L["v-slots"]) === void 0 ? {} : T, L = $i(L, ["component", mc, "children", "v-slots"].map(yy)), k && (Gr(k) !== "object" || k instanceof Array || k.$$typeof ? T.default = k : T = k), (T = r2(T)) && (L.$slots = T), $ = $.bind(this), b = oe({}, YS(L)), v = { data: function() {
      return R.isSlots ? { children: h.__veauryCurrentVueComponent__.originVNode } : b;
    }, created: function() {
      this.reactWrapperRef = h, $(this);
    }, methods: { reactInVueCall: function(Q) {
      return 2 < arguments.length && arguments[2] && Q && Q[0] ? Q.map(function(q, ae) {
        return tu(QS, { node: q, key: (q == null || (q = q.data) == null ? void 0 : q.key) || ae });
      }) : tu(QS, { node: Q });
    }, getScopedSlots: function(Q, q) {
      var ae, he = this, fe = (this.getScopedSlots.__scopeSlots || (this.getScopedSlots.__scopeSlots = {}), oe({}, q));
      for (ae in fe) ((We) => {
        var Se, ge;
        !fe.hasOwnProperty(We) || (Se = fe[We]) == null || (fe[We] = (ge = Se, function() {
          for (var Ee, ve, Qe, Pe, He = arguments.length, Xe = new Array(He), ot = 0; ot < He; ot++) Xe[ot] = arguments[ot];
          return ge.vueFunction ? ge.vueFunction.apply(he, Xe) : (Qe = ge.reactFunction, Qe = ge.reactSlot || Qe?.apply(he, Xe), Pe = R.defaultSlotsFormatter, (Ee = he.getScopedSlots.__scopeSlots[We]) != null && (Ee = Ee.component) != null && (Ee = Ee.ctx) != null && Ee.__veauryReactInstance__ ? (ve = he.getScopedSlots.__scopeSlots[We], Promise.resolve().then(function() {
            var ut;
            (ut = ve) != null && (ut = ut.component) != null && (ut = ut.ctx) != null && (ut = ut.__veauryReactInstance__) != null && ut.setState({ children: ge.apply(he, Xe) });
          })) : (ve = Pe && Qe ? [Pe(Qe, he.reactInVueCall)] : Q(XS(function() {
            return ge.apply(he, Xe);
          }, oe(oe({}, R), {}, { isSlots: !0, wrapInstance: h }))), he.getScopedSlots.__scopeSlots[We] = ve), ge.reactFunction ? ve.reactFunction = ge.reactFunction : ge.reactSlot && (ve.reactSlot = ge.reactSlot), ve);
        }), fe[We].reactFunction = Se);
      })(ae);
      return fe;
    } }, mounted: function() {
      y.removeAttribute("id"), h.__veauryVueRef__ = this.$refs.use_vue_wrapper, this.$refs.use_vue_wrapper.reactWrapperRef = h;
    }, beforeUnmount: function() {
      h.__veauryVueRef__ = null, this.$refs.use_vue_wrapper.reactWrapperRef = null;
    }, render: function() {
      var Q = this, Se = this.$data, fe = (Se.component, Se.$slots), q = Se.class, ae = Se.style, Se = $i(Se, DO), he = this.getScopedSlots(tu, oe({}, fe)), fe = Se.className, We = Se.classname, Se = $i(Se, OO), ge = {};
      return Object.keys(he).forEach(function(Ee) {
        var ve = he[Ee];
        ge[Ee] = typeof ve == "function" ? ve : function() {
          return ve;
        };
      }), tu(LO(h.__veauryCurrentVueComponent__, this), oe(oe(oe(oe({}, Se), q || fe || We ? { class: q || fe || We } : {}), ae ? { style: ae } : {}), {}, { ref: "use_vue_wrapper" }), oe({}, R.isSlots && this.children ? { default: typeof this.children == "function" ? this.children : function() {
        return Q.children;
      } } : oe({}, ge)));
    } }, y && (j = n2.getRandomId("__vue_wrapper_container_"), y.id = j, this.__veauryVueTargetId__ = j, (k = R.wrapInstance) ? (k = R.wrapInstance).reactWrapperRef = h : k = xO(this), k && document.getElementById(j) ? (this.parentVueWrapperRef = k, this.vuePortal = function(Q, q) {
      return Q(dk, { to: "#" + j, key: j }, [Q(Object.assign(v, { router: F._router }))]);
    }, k.__veauryPushVuePortal__(this.vuePortal)) : (T = pk(v), typeof R.beforeVueAppMount == "function" && R.beforeVueAppMount(T), this.__veauryVueInstance__ = T.mount(y))));
  } }, { key: "updateVueComponent", value: function(y) {
    this.__veauryVueInstance__ && (y.__fromReactSlot ? this.__veauryVueInstance__.children = typeof y.originVNode == "function" ? y.originVNode : function() {
      return y.originVNode;
    } : (this.__veauryCurrentVueComponent__ = y, this.__veauryVueInstance__.$forceUpdate()));
  } }, { key: "render", value: function() {
    return Et.createElement(this.__veauryVueComponentContainer__, { portals: this.state.portals });
  } }]);
})();
function my(m) {
  var y = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, h = (m || console.warn("Component must be passed in applyVueInReact!"), m.__esModule && m.default && (m = m.default), Et.forwardRef(function(R, L) {
    return Et.createElement(GS, yc({}, R, { component: m, ref: L }, od({}, mc, y)));
  }));
  return h.originVueComponent = m, h;
}
new Cy();
function AO(m) {
  var y = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, h = y.globalName, R = XS(m, y.combinedOption || {});
  return R.install = function(L) {
    var b = (1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}).globalName;
    return h && L.component(b || h, R), R;
  }, R;
}
function a2(m) {
  return m.replace(/-(\w)/g, function(y, h) {
    return h.toUpperCase();
  });
}
function Ey(m) {
  var y;
  return m ? typeof m == "string" ? (m = m.trim()).split(/\s*;\s*/).reduce(function(h, R) {
    return R && (R = R.split(/\s*:\s*/)).length === 2 && Object.assign(h, od({}, a2(R[0]), R[1])), h;
  }, {}) : Gr(m) === "object" ? (y = {}, Object.keys(m).forEach(function(h) {
    y[a2(h)] = m[h];
  }), y) : {} : {};
}
function Ry(m) {
  return m ? m instanceof Array ? m : typeof m == "string" ? (m = m.trim()).split(/\s+/) : Gr(m) === "object" ? Object.keys(m).filter(function(y) {
    return !!m[y];
  }) : [] : [];
}
var UO = ["ref"];
function jO(m, y, h, R, L) {
  var b = m.props || {}, b = (b.ref, $i(b, UO)), v = {}, j = (Object.keys(m.children || {}).forEach(function(F) {
    var $ = m.children[F], Q = h2.react.vueNamedSlotsKey.find(function(q) {
      return F.indexOf(q) === 0;
    });
    Q || F === "default" ? (Q = F.replace(new RegExp("^".concat(Q)), "").replace(/^default$/, "children"), v[Q] = R.call(m.__top__, $(), h, L)) : typeof $ == "function" && (v[F] = function() {
      for (var q = arguments.length, ae = new Array(q), he = 0; he < q; he++) ae[he] = arguments[he];
      return $.__reactArgs = ae, R($.apply(this, ae), h, L);
    });
  }), {}), k = Ey(b.style), T = Array.from(new Set(Ry(b.class))).join(" ");
  return 0 < Object.keys(k).length && (j.style = k), T !== "" && (j.className = T), Object.assign(b, oe(oe({}, j), v)), delete b.class, typeof b.ref_for == "boolean" && delete b.ref_for, b;
}
function i2(m) {
  return m.type === hk;
}
new Cy();
function S2(m, y) {
  var h;
  return 0 < ((h = m.dirs) == null ? void 0 : h.length) ? Et.createElement(zO, { vnode: m }, y) : y;
}
var zO = (() => {
  function m(y) {
    var h;
    return gv(this, m), (h = gy(this, m, [y])).state = { prevVnode: null, savedDirectives: [], ref: null, prevProps: y }, h;
  }
  return Sy(m, Et.Component), Sv(m, [{ key: "findDirectiveName", value: function(y) {
    var h = y.dir, R = -1;
    return [this.state.savedDirectives.find(function(L, b) {
      if (L.dir === h) return R = b, !0;
    }), R];
  } }, { key: "doDirective", value: function() {
    var y = this, b = this.state, h = b.savedDirectives;
    if (!(R = b.ref)) {
      for (var R = (this._reactInternals || this._reactInternalFiber).child; R && R.tag !== 5; ) R = R.child;
      if (!R) return;
      R = R.stateNode;
    }
    var L = this.props.vnode, b = L.dirs;
    b && (b.forEach(function(v) {
      var j, k, T, F, $, Q, q;
      v && (q = (j = JE(y.findDirectiveName(v), 2))[0], j = j[1], k = ($ = v.dir).created, T = $.beforeMount, F = $.mounted, Q = $.beforeUpdate, $ = $.updated, q ? (h[j] = oe(oe(oe({}, q), v), {}, { oldValue: q.oldValue }), q = [R, h[j], L, y.state.prevVnode], Q?.apply(null, q), $?.apply(null, q), h[j].oldValue = v.value) : (h.push(v), Q = [R, v, L, null], k?.apply(null, Q), T?.apply(null, Q), F?.apply(null, Q), v.oldValue = v.value));
    }), this.setState({ prevVnode: oe({}, L), savedDirectives: h, ref: R }));
  } }, { key: "componentDidMount", value: function() {
    this.doDirective();
  } }, { key: "componentDidUpdate", value: function(y) {
    y.vnode !== this.props.vnode && this.doDirective();
  } }, { key: "componentWillUnmount", value: function() {
    var y = this, h = this.props.vnode, v = this.state, R = v.savedDirectives, L = v.ref, b = v.prevVnode, v = h.dirs;
    v && (v.forEach(function(j) {
      var k, T, F, $;
      j && (k = ($ = JE(y.findDirectiveName(j), 2))[0]) && (T = (F = j.dir).beforeUnmount, F = F.unmounted, R[$[1]] = oe(oe({}, k), j), $ = [L, k, h, b], T?.apply(null, $), F != null) && F.apply(null, $);
    }), this.setState({ prevVnode: oe({}, h), savedDirectives: R }));
  } }, { key: "render", value: function() {
    var y = this.props;
    return y.vnode, y.children;
  } }]);
})();
function FO(m, y) {
  var h;
  return typeof m == "function" && (h = m.toString(), m.prototype !== void 0) && m.prototype.constructor === m && (h.slice(0, 5) == "class" || 2 <= Object.getOwnPropertyNames(m.prototype).length || !/^function\s+\(|^function\s+anonymous\(/.test(h) && (!(!y || !/^function\s+[A-Z]/.test(h)) || !!/\b\(this\b|\bthis[\.\[]\b/.test(h) && (!(y && !/classCallCheck\(this/.test(h)) || /^function\sdefault_\d+\s*\(/.test(h))));
}
function _2(m, y) {
  var h, R, L, b;
  return typeof ((L = m.type) == null ? void 0 : L.originReactComponent) != "function" || FO((L = m.type) == null ? void 0 : L.originReactComponent) ? ((L = m.ref) != null && L.k ? (h = (L = m.ref) == null ? void 0 : L.k, R = (L = m.ref) == null ? void 0 : L.r) : h = (L = m.ref) == null ? void 0 : L.r, h && typeof h == "string" && (b = h, h = function(v) {
    var j;
    (j = m.ref) != null && (j = j.i) != null && j.refs && ((j = oe({}, m.ref.i.refs))[b] = v, m.ref.i.refs = j), R ? R.value = v : m.ref.i.setupState && b in m.ref.i.setupState && (m.ref.i.setupState[b] = v), v && (v.__syncUpdateProps = function() {
      y.__top__ && (m.__extraData = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, y.__top__.__syncUpdateProps({}));
    });
  }, h = new Proxy(h, { get: function(v, j) {
    return v[j];
  }, set: function(v, j, k) {
    var T;
    return (T = m.ref) != null && (T = T.i) != null && T.refs && b in ((T = m.ref) == null || (T = T.i) == null ? void 0 : T.refs) && ((T = oe({}, m.ref.i.refs))[j] = k, m.ref.i.refs = T), k;
  } })), h) : null;
}
function qS(m, y) {
  return !y || y instanceof Array && y.length === 0 || (typeof y == "string" && (y = [y]), (m = oe({}, m)).props = oe({}, m.props), y.forEach(function(h) {
    m.props[h] = "";
  })), m;
}
var PO = ["style", "class"];
function l2(m, y, h, R, L, b, v) {
  var j, k, T;
  return y === "all" || y instanceof Array || (y = y ? [y] : []), m.type === s2 ? L.call(v, m.children, h, b) : typeof m.type == "string" && (y === "all" || -1 < y.indexOf(m.type)) ? (y = _2(m), T = (k = m.props || {}).style, j = k.class, k = oe(oe({}, $i(k, PO)), {}, { style: Ey(T), className: Array.from(new Set(Ry(j))).join(" ") }, y ? { ref: y } : {}), (T = m.children || k.children) && ((T = -1 < ["string", "number"].indexOf(Gr(T)) ? [T] : _y(T)).__top__ = v), S2(m, qS(id.createElement(m.type, k, L.call(v, T, h, b)), m.scopeId))) : h([m], null, R);
}
function VO() {
  var m = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, y = 1 < arguments.length ? arguments[1] : void 0, h = 2 < arguments.length ? arguments[2] : void 0;
  return h.__syncUpdateForPureReactInVue && Object.keys(h.__syncUpdateForPureReactInVue).map(function(R) {
    var L;
    m[R] && typeof m[R] == "function" && y.__top__ && (L = m[R], m[R] = function() {
      for (var b = arguments.length, v = new Array(b), j = 0; j < b; j++) v[j] = arguments[j];
      y.__extraData = h.__syncUpdateForPureReactInVue[R].apply(this, v), y.__top__.__veaurySyncUpdateProps__({}), y.__top__.macroTaskUpdate = !0, L.apply(this, v), y.__top__ && Promise.resolve().then(function() {
        y.__extraData = null, y.__top__.__veauryMountReactComponent__(!0);
      });
    });
  }), m;
}
function o2(m, y, h) {
  return !((m = m instanceof Array && m.length === 1 ? m[0] : m) instanceof Array) && m.key == null && 1 < y.length && ((m = oe({}, m)).key = "_key_".concat(h)), m;
}
function C2(R) {
  var y = R.reactComponents, h = R.domTags, R = R.division, L = R === void 0 || R;
  return function b(v, j, k) {
    var T;
    return v && v.forEach ? (v.__top__ || (v.__top__ = this), T = [], v.forEach(function(F, $) {
      if (F && F.type !== vk) {
        if ((ae = F.type) == null || !ae.originReactComponent) return F.$$typeof || typeof F == "string" || typeof F == "number" ? void T.push(F) : i2(F) ? void (F.children.trim() !== "" && T.push(F.children.trim())) : void (F.type && (qS(ae = o2(l2(F, h, j, L, b, k, v.__top__), v, $), F.scopeId), T.push(ae)));
        var Q, q, ae = F.type.originReactComponent;
        qS(Q = o2(Q = (y = y === "all" || y instanceof Array ? y : [y]) === "all" || -1 < y.indexOf(ae) ? (F.__top__ = v.__top__, Q = jO(F, "_key_".concat($), j, b, k), q = _2(F, v), F.children && (F.children.__top__ = v.__top__), S2(F, id.createElement(ae, oe(oe(oe({}, VO(Q, F, ae)), F.__extraData || {}), q ? { ref: q } : {})))) : i2(F) ? F.text : l2(F, h, j, L, b, k), v, $), F.scopeId), T.push(Q);
      }
    }), T.length === 1 ? T[0] : T) : v;
  };
}
var BS = C2({ reactComponents: "all", domTags: "all" });
function HO(m, y) {
  return AO(m, { combinedOption: oe({ pureTransformer: !0, defaultSlotsFormatter: BS, defaultPropsFormatter: function(h, R, L) {
    var b = {};
    return Object.keys(h).forEach(function(v) {
      var j = h[v];
      j && (j.vueFunction ? (b[v] = function() {
        for (var k = arguments.length, T = new Array(k), F = 0; F < k; F++) T[F] = arguments[F];
        return BS(j.vueFunction.apply(this, T), R, L);
      }, Object.defineProperty(b[v], "length", { get: function() {
        return j.vueFunction.length;
      } })) : j.vueSlot && (b[v] = BS(j.vueSlot, R, L)));
    }), Object.assign(h, b);
  } }, y) });
}
C2({ reactComponents: "all", domTags: "all" });
var IO = ["ref", "children", "v-slots"];
function BO(k, y, h, R, L) {
  var k = k.props || {}, T = (k.ref, k.children), v = k["v-slots"], b = v === void 0 ? {} : v, v = $i(k, IO), j = (T && (Gr(T) !== "object" || T instanceof Array || T.$$typeof ? b.default = T : b = T), null), k = (Object.keys(b || {}).forEach(function($) {
    var Q = b[$];
    (j = j || {})[$] = function() {
      if (typeof Q == "function") {
        for (var q = arguments.length, ae = new Array(q), he = 0; he < q; he++) ae[he] = arguments[he];
        Q = Q.apply(this, ae);
      }
      return R(Q, h, L);
    };
  }), {}), T = Ey(v.style), F = Array.from(new Set(Ry(v.className))).join(" ");
  return 0 < Object.keys(T).length && (k.style = T), F !== "" && (k.class = F), Object.assign(v, oe({}, k)), delete v.className, { props: v = YS(v), slots: j };
}
function E2(m) {
  var y = m.ref;
  if (y) return Gr(y) === "object" ? function(h) {
    m.ref.current = h;
  } : typeof y == "function" ? y : void 0;
}
var $O = ["style", "class", "children"];
function u2(m, y, h, R, L, b) {
  var v, j, k, T;
  return y === "all" || y instanceof Array || (y = y ? [y] : []), m.type === Et.Fragment ? L((v = m.props) == null ? void 0 : v.children, h) : typeof m.type == "string" && (y === "all" || -1 < y.indexOf(m.type)) ? (v = E2(m), T = (y = m.props || {}).style, k = y.class, j = y.children, y = $i(y, $O), k = Array.from(new Set(Ry(k))).join(" "), T = Ey(T), y = oe(oe(oe(oe({}, y), Object.keys(T).length === 0 ? {} : { style: T }), k ? { className: k } : {}), v ? { ref: v } : {}), Object.keys(y).length === 0 && (y = null), (T = j) && ((T = -1 < ["string", "number"].indexOf(Gr(T)) ? [T] : T instanceof Array ? _y(T) : oe({}, T)).__top__ = b), tu(m.type, y, L(T, h))) : h([m], null, R);
}
function R2(R) {
  var y = R.vueComponents, h = R.domTags, R = R.division, L = R === void 0 || R;
  return function b(v, j) {
    if (v == null) return v;
    v instanceof Array || (v = [v]);
    var k = [];
    return v.forEach(function(T, F) {
      if ((($ = T.type) == null || !$.originVueComponent) && T.type !== GS) return T.__v_isVNode || typeof T == "string" || typeof T == "number" ? void k.push(T) : void (T.type && ($ = u2(T, h, j, L, b, v.__top__), k.push($)));
      var $ = T.type.originVueComponent;
      if (T.type === GS) {
        if (!T.props.component) return void k.push(T.props.node);
        $ = T.props.component, T = oe({}, T);
        var Q = oe({}, T.props);
        delete Q.component, T.props = Q;
      }
      $ = (y = y === "all" || y instanceof Array ? y : [y]) === "all" || -1 < y.indexOf($) ? ((T = oe({}, T)).__top__ = v.__top__, F = (Q = BO(T, "_key_".concat(F), j, b)).props, Q = Q.slots, E2(T), T.children && (T.children.__top__ = v.__top__), tu($, oe({}, F), Q)) : u2(T, h, j, L, b), k.push($);
    }), (k = k.flat(1 / 0)).length === 1 ? k[0] : k;
  };
}
R2({ vueComponents: "all", domTags: "all" });
R2({ reactComponents: "all", domTags: "all" });
new Cy();
const WO = /* @__PURE__ */ mk({
  __name: "CopilotApp",
  setup(m) {
    const y = HO(tO);
    return (h, R) => (gk(), yk(Sk(y)));
  }
}), KO = {
  install(m) {
    m.component("CopilotApp", WO);
  }
};
export {
  WO as CopilotApp,
  KO as default
};
