import { Fragment as f2, h as tu, reactive as dk, getCurrentInstance as pk, Teleport as vk, createApp as hk, Comment as mk, Text as yk, defineComponent as gk, createBlock as Sk, openBlock as _k, unref as Ck } from "vue";
function d2(v) {
  return v && v.__esModule && Object.prototype.hasOwnProperty.call(v, "default") ? v.default : v;
}
var fy = { exports: {} }, pv = {}, dy = { exports: {} }, Lt = {};
var ME;
function Ek() {
  if (ME) return Lt;
  ME = 1;
  var v = /* @__PURE__ */ Symbol.for("react.element"), y = /* @__PURE__ */ Symbol.for("react.portal"), m = /* @__PURE__ */ Symbol.for("react.fragment"), R = /* @__PURE__ */ Symbol.for("react.strict_mode"), L = /* @__PURE__ */ Symbol.for("react.profiler"), b = /* @__PURE__ */ Symbol.for("react.provider"), h = /* @__PURE__ */ Symbol.for("react.context"), j = /* @__PURE__ */ Symbol.for("react.forward_ref"), k = /* @__PURE__ */ Symbol.for("react.suspense"), T = /* @__PURE__ */ Symbol.for("react.memo"), V = /* @__PURE__ */ Symbol.for("react.lazy"), $ = Symbol.iterator;
  function Q(U) {
    return U === null || typeof U != "object" ? null : (U = $ && U[$] || U["@@iterator"], typeof U == "function" ? U : null);
  }
  var G = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ve = Object.assign, ue = {};
  function pe(U, X, Je) {
    this.props = U, this.context = X, this.refs = ue, this.updater = Je || G;
  }
  pe.prototype.isReactComponent = {}, pe.prototype.setState = function(U, X) {
    if (typeof U != "object" && typeof U != "function" && U != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, U, X, "setState");
  }, pe.prototype.forceUpdate = function(U) {
    this.updater.enqueueForceUpdate(this, U, "forceUpdate");
  };
  function Ne() {
  }
  Ne.prototype = pe.prototype;
  function ge(U, X, Je) {
    this.props = U, this.context = X, this.refs = ue, this.updater = Je || G;
  }
  var Se = ge.prototype = new Ne();
  Se.constructor = ge, ve(Se, pe.prototype), Se.isPureReactComponent = !0;
  var Ee = Array.isArray, he = Object.prototype.hasOwnProperty, Qe = { current: null }, Ve = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ie(U, X, Je) {
    var je, ht = {}, tt = null, Le = null;
    if (X != null) for (je in X.ref !== void 0 && (Le = X.ref), X.key !== void 0 && (tt = "" + X.key), X) he.call(X, je) && !Ve.hasOwnProperty(je) && (ht[je] = X[je]);
    var st = arguments.length - 2;
    if (st === 1) ht.children = Je;
    else if (1 < st) {
      for (var dt = Array(st), Gt = 0; Gt < st; Gt++) dt[Gt] = arguments[Gt + 2];
      ht.children = dt;
    }
    if (U && U.defaultProps) for (je in st = U.defaultProps, st) ht[je] === void 0 && (ht[je] = st[je]);
    return { $$typeof: v, type: U, key: tt, ref: Le, props: ht, _owner: Qe.current };
  }
  function Xe(U, X) {
    return { $$typeof: v, type: U.type, key: X, ref: U.ref, props: U.props, _owner: U._owner };
  }
  function lt(U) {
    return typeof U == "object" && U !== null && U.$$typeof === v;
  }
  function ut(U) {
    var X = { "=": "=0", ":": "=2" };
    return "$" + U.replace(/[=:]/g, function(Je) {
      return X[Je];
    });
  }
  var K = /\/+/g;
  function ee(U, X) {
    return typeof U == "object" && U !== null && U.key != null ? ut("" + U.key) : X.toString(36);
  }
  function be(U, X, Je, je, ht) {
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
          case v:
          case y:
            Le = !0;
        }
    }
    if (Le) return Le = U, ht = ht(Le), U = je === "" ? "." + ee(Le, 0) : je, Ee(ht) ? (Je = "", U != null && (Je = U.replace(K, "$&/") + "/"), be(ht, X, Je, "", function(Gt) {
      return Gt;
    })) : ht != null && (lt(ht) && (ht = Xe(ht, Je + (!ht.key || Le && Le.key === ht.key ? "" : ("" + ht.key).replace(K, "$&/") + "/") + U)), X.push(ht)), 1;
    if (Le = 0, je = je === "" ? "." : je + ":", Ee(U)) for (var st = 0; st < U.length; st++) {
      tt = U[st];
      var dt = je + ee(tt, st);
      Le += be(tt, X, Je, dt, ht);
    }
    else if (dt = Q(U), typeof dt == "function") for (U = dt.call(U), st = 0; !(tt = U.next()).done; ) tt = tt.value, dt = je + ee(tt, st++), Le += be(tt, X, Je, dt, ht);
    else if (tt === "object") throw X = String(U), Error("Objects are not valid as a React child (found: " + (X === "[object Object]" ? "object with keys {" + Object.keys(U).join(", ") + "}" : X) + "). If you meant to render a collection of children, use an array instead.");
    return Le;
  }
  function He(U, X, Je) {
    if (U == null) return U;
    var je = [], ht = 0;
    return be(U, je, "", "", function(tt) {
      return X.call(Je, tt, ht++);
    }), je;
  }
  function we(U) {
    if (U._status === -1) {
      var X = U._result;
      X = X(), X.then(function(Je) {
        (U._status === 0 || U._status === -1) && (U._status = 1, U._result = Je);
      }, function(Je) {
        (U._status === 0 || U._status === -1) && (U._status = 2, U._result = Je);
      }), U._status === -1 && (U._status = 0, U._result = X);
    }
    if (U._status === 1) return U._result.default;
    throw U._result;
  }
  var _e = { current: null }, te = { transition: null }, Oe = { ReactCurrentDispatcher: _e, ReactCurrentBatchConfig: te, ReactCurrentOwner: Qe };
  function me() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Lt.Children = { map: He, forEach: function(U, X, Je) {
    He(U, function() {
      X.apply(this, arguments);
    }, Je);
  }, count: function(U) {
    var X = 0;
    return He(U, function() {
      X++;
    }), X;
  }, toArray: function(U) {
    return He(U, function(X) {
      return X;
    }) || [];
  }, only: function(U) {
    if (!lt(U)) throw Error("React.Children.only expected to receive a single React element child.");
    return U;
  } }, Lt.Component = pe, Lt.Fragment = m, Lt.Profiler = L, Lt.PureComponent = ge, Lt.StrictMode = R, Lt.Suspense = k, Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Oe, Lt.act = me, Lt.cloneElement = function(U, X, Je) {
    if (U == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + U + ".");
    var je = ve({}, U.props), ht = U.key, tt = U.ref, Le = U._owner;
    if (X != null) {
      if (X.ref !== void 0 && (tt = X.ref, Le = Qe.current), X.key !== void 0 && (ht = "" + X.key), U.type && U.type.defaultProps) var st = U.type.defaultProps;
      for (dt in X) he.call(X, dt) && !Ve.hasOwnProperty(dt) && (je[dt] = X[dt] === void 0 && st !== void 0 ? st[dt] : X[dt]);
    }
    var dt = arguments.length - 2;
    if (dt === 1) je.children = Je;
    else if (1 < dt) {
      st = Array(dt);
      for (var Gt = 0; Gt < dt; Gt++) st[Gt] = arguments[Gt + 2];
      je.children = st;
    }
    return { $$typeof: v, type: U.type, key: ht, ref: tt, props: je, _owner: Le };
  }, Lt.createContext = function(U) {
    return U = { $$typeof: h, _currentValue: U, _currentValue2: U, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, U.Provider = { $$typeof: b, _context: U }, U.Consumer = U;
  }, Lt.createElement = Ie, Lt.createFactory = function(U) {
    var X = Ie.bind(null, U);
    return X.type = U, X;
  }, Lt.createRef = function() {
    return { current: null };
  }, Lt.forwardRef = function(U) {
    return { $$typeof: j, render: U };
  }, Lt.isValidElement = lt, Lt.lazy = function(U) {
    return { $$typeof: V, _payload: { _status: -1, _result: U }, _init: we };
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
  }, Lt.useImperativeHandle = function(U, X, Je) {
    return _e.current.useImperativeHandle(U, X, Je);
  }, Lt.useInsertionEffect = function(U, X) {
    return _e.current.useInsertionEffect(U, X);
  }, Lt.useLayoutEffect = function(U, X) {
    return _e.current.useLayoutEffect(U, X);
  }, Lt.useMemo = function(U, X) {
    return _e.current.useMemo(U, X);
  }, Lt.useReducer = function(U, X, Je) {
    return _e.current.useReducer(U, X, Je);
  }, Lt.useRef = function(U) {
    return _e.current.useRef(U);
  }, Lt.useState = function(U) {
    return _e.current.useState(U);
  }, Lt.useSyncExternalStore = function(U, X, Je) {
    return _e.current.useSyncExternalStore(U, X, Je);
  }, Lt.useTransition = function() {
    return _e.current.useTransition();
  }, Lt.version = "18.3.1", Lt;
}
var mv = { exports: {} };
mv.exports;
var NE;
function Rk() {
  return NE || (NE = 1, (function(v, y) {
    process.env.NODE_ENV !== "production" && (function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var m = "18.3.1", R = /* @__PURE__ */ Symbol.for("react.element"), L = /* @__PURE__ */ Symbol.for("react.portal"), b = /* @__PURE__ */ Symbol.for("react.fragment"), h = /* @__PURE__ */ Symbol.for("react.strict_mode"), j = /* @__PURE__ */ Symbol.for("react.profiler"), k = /* @__PURE__ */ Symbol.for("react.provider"), T = /* @__PURE__ */ Symbol.for("react.context"), V = /* @__PURE__ */ Symbol.for("react.forward_ref"), $ = /* @__PURE__ */ Symbol.for("react.suspense"), Q = /* @__PURE__ */ Symbol.for("react.suspense_list"), G = /* @__PURE__ */ Symbol.for("react.memo"), ve = /* @__PURE__ */ Symbol.for("react.lazy"), ue = /* @__PURE__ */ Symbol.for("react.offscreen"), pe = Symbol.iterator, Ne = "@@iterator";
      function ge(S) {
        if (S === null || typeof S != "object")
          return null;
        var w = pe && S[pe] || S[Ne];
        return typeof w == "function" ? w : null;
      }
      var Se = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ee = {
        transition: null
      }, he = {
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
      }, Ve = {}, Ie = null;
      function Xe(S) {
        Ie = S;
      }
      Ve.setExtraStackFrame = function(S) {
        Ie = S;
      }, Ve.getCurrentStack = null, Ve.getStackAddendum = function() {
        var S = "";
        Ie && (S += Ie);
        var w = Ve.getCurrentStack;
        return w && (S += w() || ""), S;
      };
      var lt = !1, ut = !1, K = !1, ee = !1, be = !1, He = {
        ReactCurrentDispatcher: Se,
        ReactCurrentBatchConfig: Ee,
        ReactCurrentOwner: Qe
      };
      He.ReactDebugCurrentFrame = Ve, He.ReactCurrentActQueue = he;
      function we(S) {
        {
          for (var w = arguments.length, B = new Array(w > 1 ? w - 1 : 0), q = 1; q < w; q++)
            B[q - 1] = arguments[q];
          te("warn", S, B);
        }
      }
      function _e(S) {
        {
          for (var w = arguments.length, B = new Array(w > 1 ? w - 1 : 0), q = 1; q < w; q++)
            B[q - 1] = arguments[q];
          te("error", S, B);
        }
      }
      function te(S, w, B) {
        {
          var q = He.ReactDebugCurrentFrame, ye = q.getStackAddendum();
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
          var B = S.constructor, q = B && (B.displayName || B.name) || "ReactClass", ye = q + "." + w;
          if (Oe[ye])
            return;
          _e("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", w, q), Oe[ye] = !0;
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
        enqueueReplaceState: function(S, w, B, q) {
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
        enqueueSetState: function(S, w, B, q) {
          me(S, "setState");
        }
      }, X = Object.assign, Je = {};
      Object.freeze(Je);
      function je(S, w, B) {
        this.props = S, this.context = w, this.refs = Je, this.updater = B || U;
      }
      je.prototype.isReactComponent = {}, je.prototype.setState = function(S, w) {
        if (typeof S != "object" && typeof S != "function" && S != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, S, w, "setState");
      }, je.prototype.forceUpdate = function(S) {
        this.updater.enqueueForceUpdate(this, S, "forceUpdate");
      };
      {
        var ht = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, tt = function(S, w) {
          Object.defineProperty(je.prototype, S, {
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
      st.prototype = je.prototype;
      function dt(S, w, B) {
        this.props = S, this.context = w, this.refs = Je, this.updater = B || U;
      }
      var Gt = dt.prototype = new st();
      Gt.constructor = dt, X(Gt, je.prototype), Gt.isPureReactComponent = !0;
      function Nn() {
        var S = {
          current: null
        };
        return Object.seal(S), S;
      }
      var kr = Array.isArray;
      function bn(S) {
        return kr(S);
      }
      function ir(S) {
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
          return _e("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ir(S)), Wn(S);
      }
      function vi(S, w, B) {
        var q = S.displayName;
        if (q)
          return q;
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
          case h:
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
            case V:
              return vi(S, S.render, "ForwardRef");
            case G:
              var q = S.displayName || null;
              return q !== null ? q : Jn(S.type) || "Memo";
            case ve: {
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
      }, Cr, qa, An;
      An = {};
      function Er(S) {
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
          Cr || (Cr = !0, _e("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
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
      var Ge = function(S, w, B, q, ye, nt, Te) {
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
          value: q
        }), Object.defineProperty(it, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ye
        }), Object.freeze && (Object.freeze(it.props), Object.freeze(it)), it;
      };
      function bt(S, w, B) {
        var q, ye = {}, nt = null, Te = null, it = null, Dt = null;
        if (w != null) {
          Er(w) && (Te = w.ref, Ce(w)), va(w) && (qr(w.key), nt = "" + w.key), it = w.__self === void 0 ? null : w.__self, Dt = w.__source === void 0 ? null : w.__source;
          for (q in w)
            Tn.call(w, q) && !Yn.hasOwnProperty(q) && (ye[q] = w[q]);
        }
        var zt = arguments.length - 2;
        if (zt === 1)
          ye.children = B;
        else if (zt > 1) {
          for (var un = Array(zt), Jt = 0; Jt < zt; Jt++)
            un[Jt] = arguments[Jt + 2];
          Object.freeze && Object.freeze(un), ye.children = un;
        }
        if (S && S.defaultProps) {
          var Tt = S.defaultProps;
          for (q in Tt)
            ye[q] === void 0 && (ye[q] = Tt[q]);
        }
        if (nt || Te) {
          var Zt = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
          nt && Ka(ye, Zt), Te && hi(ye, Zt);
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
        var q, ye = X({}, S.props), nt = S.key, Te = S.ref, it = S._self, Dt = S._source, zt = S._owner;
        if (w != null) {
          Er(w) && (Te = w.ref, zt = Qe.current), va(w) && (qr(w.key), nt = "" + w.key);
          var un;
          S.type && S.type.defaultProps && (un = S.type.defaultProps);
          for (q in w)
            Tn.call(w, q) && !Yn.hasOwnProperty(q) && (w[q] === void 0 && un !== void 0 ? ye[q] = un[q] : ye[q] = w[q]);
        }
        var Jt = arguments.length - 2;
        if (Jt === 1)
          ye.children = B;
        else if (Jt > 1) {
          for (var Tt = Array(Jt), Zt = 0; Zt < Jt; Zt++)
            Tt[Zt] = arguments[Zt + 2];
          ye.children = Tt;
        }
        return Ge(S.type, nt, Te, it, Dt, zt, ye);
      }
      function mn(S) {
        return typeof S == "object" && S !== null && S.$$typeof === R;
      }
      var cn = ".", Zn = ":";
      function on(S) {
        var w = /[=:]/g, B = {
          "=": "=0",
          ":": "=2"
        }, q = S.replace(w, function(ye) {
          return B[ye];
        });
        return "$" + q;
      }
      var qt = !1, Kt = /\/+/g;
      function ha(S) {
        return S.replace(Kt, "$&/");
      }
      function Rr(S, w) {
        return typeof S == "object" && S !== null && S.key != null ? (qr(S.key), on("" + S.key)) : w.toString(36);
      }
      function ka(S, w, B, q, ye) {
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
          var it = S, Dt = ye(it), zt = q === "" ? cn + Rr(it, 0) : q;
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
        var Jt, Tt, Zt = 0, yn = q === "" ? cn : q + Zn;
        if (bn(S))
          for (var Do = 0; Do < S.length; Do++)
            Jt = S[Do], Tt = yn + Rr(Jt, Do), Zt += ka(Jt, w, B, Tt, ye);
        else {
          var as = ge(S);
          if (typeof as == "function") {
            var Gi = S;
            as === Gi.entries && (qt || we("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), qt = !0);
            for (var is = as.call(Gi), hl, cd = 0; !(hl = is.next()).done; )
              Jt = hl.value, Tt = yn + Rr(Jt, cd++), Zt += ka(Jt, w, B, Tt, ye);
          } else if (nt === "object") {
            var Cc = String(S);
            throw new Error("Objects are not valid as a React child (found: " + (Cc === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : Cc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Zt;
      }
      function Wi(S, w, B) {
        if (S == null)
          return S;
        var q = [], ye = 0;
        return ka(S, q, "", "", function(nt) {
          return w.call(B, nt, ye++);
        }), q;
      }
      function ol(S) {
        var w = 0;
        return Wi(S, function() {
          w++;
        }), w;
      }
      function ll(S, w, B) {
        Wi(S, function() {
          w.apply(this, arguments);
        }, B);
      }
      function _o(S) {
        return Wi(S, function(w) {
          return w;
        }) || [];
      }
      function Co(S) {
        if (!mn(S))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return S;
      }
      function ul(S) {
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
        var B = !1, q = !1, ye = !1;
        {
          var nt = {
            $$typeof: T,
            _context: w
          };
          Object.defineProperties(nt, {
            Provider: {
              get: function() {
                return q || (q = !0, _e("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), w.Provider;
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
      var Dr = -1, Or = 0, or = 1, mi = 2;
      function Xa(S) {
        if (S._status === Dr) {
          var w = S._result, B = w();
          if (B.then(function(nt) {
            if (S._status === Or || S._status === Dr) {
              var Te = S;
              Te._status = or, Te._result = nt;
            }
          }, function(nt) {
            if (S._status === Or || S._status === Dr) {
              var Te = S;
              Te._status = mi, Te._result = nt;
            }
          }), S._status === Dr) {
            var q = S;
            q._status = Or, q._result = B;
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
          _status: Dr,
          _result: S
        }, B = {
          $$typeof: ve,
          _payload: w,
          _init: Xa
        };
        {
          var q, ye;
          Object.defineProperties(B, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return q;
              },
              set: function(nt) {
                _e("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), q = nt, Object.defineProperty(B, "defaultProps", {
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
        S != null && S.$$typeof === G ? _e("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof S != "function" ? _e("forwardRef requires a render function but was given %s.", S === null ? "null" : typeof S) : S.length !== 0 && S.length !== 2 && _e("forwardRef render functions accept exactly two parameters: props and ref. %s", S.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), S != null && (S.defaultProps != null || S.propTypes != null) && _e("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var w = {
          $$typeof: V,
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
            set: function(q) {
              B = q, !S.name && !S.displayName && (S.displayName = q);
            }
          });
        }
        return w;
      }
      var D;
      D = /* @__PURE__ */ Symbol.for("react.module.reference");
      function ae(S) {
        return !!(typeof S == "string" || typeof S == "function" || S === b || S === j || be || S === h || S === $ || S === Q || ee || S === ue || lt || ut || K || typeof S == "object" && S !== null && (S.$$typeof === ve || S.$$typeof === G || S.$$typeof === k || S.$$typeof === T || S.$$typeof === V || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        S.$$typeof === D || S.getModuleId !== void 0));
      }
      function xe(S, w) {
        ae(S) || _e("memo: The first argument must be a component. Instead received: %s", S === null ? "null" : typeof S);
        var B = {
          $$typeof: G,
          type: S,
          compare: w === void 0 ? null : w
        };
        {
          var q;
          Object.defineProperty(B, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return q;
            },
            set: function(ye) {
              q = ye, !S.name && !S.displayName && (S.displayName = ye);
            }
          });
        }
        return B;
      }
      function Pe() {
        var S = Se.current;
        return S === null && _e(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), S;
      }
      function St(S) {
        var w = Pe();
        if (S._context !== void 0) {
          var B = S._context;
          B.Consumer === S ? _e("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : B.Provider === S && _e("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return w.useContext(S);
      }
      function mt(S) {
        var w = Pe();
        return w.useState(S);
      }
      function kt(S, w, B) {
        var q = Pe();
        return q.useReducer(S, w, B);
      }
      function xt(S) {
        var w = Pe();
        return w.useRef(S);
      }
      function xn(S, w) {
        var B = Pe();
        return B.useEffect(S, w);
      }
      function ln(S, w) {
        var B = Pe();
        return B.useInsertionEffect(S, w);
      }
      function fn(S, w) {
        var B = Pe();
        return B.useLayoutEffect(S, w);
      }
      function lr(S, w) {
        var B = Pe();
        return B.useCallback(S, w);
      }
      function Ja(S, w) {
        var B = Pe();
        return B.useMemo(S, w);
      }
      function Za(S, w, B) {
        var q = Pe();
        return q.useImperativeHandle(S, w, B);
      }
      function _t(S, w) {
        {
          var B = Pe();
          return B.useDebugValue(S, w);
        }
      }
      function Rt() {
        var S = Pe();
        return S.useTransition();
      }
      function ei(S) {
        var w = Pe();
        return w.useDeferredValue(S);
      }
      function sl() {
        var S = Pe();
        return S.useId();
      }
      function cl(S, w, B) {
        var q = Pe();
        return q.useSyncExternalStore(S, w, B);
      }
      var Eo = 0, nu, Ro, Kr, es, Lr, Sc, _c;
      function ru() {
      }
      ru.__reactDisabledLog = !0;
      function bo() {
        {
          if (Eo === 0) {
            nu = console.log, Ro = console.info, Kr = console.warn, es = console.error, Lr = console.group, Sc = console.groupCollapsed, _c = console.groupEnd;
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
          Eo++;
        }
      }
      function ma() {
        {
          if (Eo--, Eo === 0) {
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
                value: Ro
              }),
              warn: X({}, S, {
                value: Kr
              }),
              error: X({}, S, {
                value: es
              }),
              group: X({}, S, {
                value: Lr
              }),
              groupCollapsed: X({}, S, {
                value: Sc
              }),
              groupEnd: X({}, S, {
                value: _c
              })
            });
          }
          Eo < 0 && _e("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ti = He.ReactCurrentDispatcher, ni;
      function au(S, w, B) {
        {
          if (ni === void 0)
            try {
              throw Error();
            } catch (ye) {
              var q = ye.stack.trim().match(/\n( *(at )?)/);
              ni = q && q[1] || "";
            }
          return `
` + ni + S;
        }
      }
      var fl = !1, To;
      {
        var iu = typeof WeakMap == "function" ? WeakMap : Map;
        To = new iu();
      }
      function ou(S, w) {
        if (!S || fl)
          return "";
        {
          var B = To.get(S);
          if (B !== void 0)
            return B;
        }
        var q;
        fl = !0;
        var ye = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var nt;
        nt = ti.current, ti.current = null, bo();
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
                q = yn;
              }
              Reflect.construct(S, [], Te);
            } else {
              try {
                Te.call();
              } catch (yn) {
                q = yn;
              }
              S.call(Te.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (yn) {
              q = yn;
            }
            S();
          }
        } catch (yn) {
          if (yn && q && typeof yn.stack == "string") {
            for (var it = yn.stack.split(`
`), Dt = q.stack.split(`
`), zt = it.length - 1, un = Dt.length - 1; zt >= 1 && un >= 0 && it[zt] !== Dt[un]; )
              un--;
            for (; zt >= 1 && un >= 0; zt--, un--)
              if (it[zt] !== Dt[un]) {
                if (zt !== 1 || un !== 1)
                  do
                    if (zt--, un--, un < 0 || it[zt] !== Dt[un]) {
                      var Jt = `
` + it[zt].replace(" at new ", " at ");
                      return S.displayName && Jt.includes("<anonymous>") && (Jt = Jt.replace("<anonymous>", S.displayName)), typeof S == "function" && To.set(S, Jt), Jt;
                    }
                  while (zt >= 1 && un >= 0);
                break;
              }
          }
        } finally {
          fl = !1, ti.current = nt, ma(), Error.prepareStackTrace = ye;
        }
        var Tt = S ? S.displayName || S.name : "", Zt = Tt ? au(Tt) : "";
        return typeof S == "function" && To.set(S, Zt), Zt;
      }
      function Yi(S, w, B) {
        return ou(S, !1);
      }
      function ud(S) {
        var w = S.prototype;
        return !!(w && w.isReactComponent);
      }
      function Qi(S, w, B) {
        if (S == null)
          return "";
        if (typeof S == "function")
          return ou(S, ud(S));
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
            case V:
              return Yi(S.render);
            case G:
              return Qi(S.type, w, B);
            case ve: {
              var q = S, ye = q._payload, nt = q._init;
              try {
                return Qi(nt(ye), w, B);
              } catch {
              }
            }
          }
        return "";
      }
      var Pt = {}, lu = He.ReactDebugCurrentFrame;
      function jt(S) {
        if (S) {
          var w = S._owner, B = Qi(S.type, S._source, w ? w.type : null);
          lu.setExtraStackFrame(B);
        } else
          lu.setExtraStackFrame(null);
      }
      function ts(S, w, B, q, ye) {
        {
          var nt = Function.call.bind(Tn);
          for (var Te in S)
            if (nt(S, Te)) {
              var it = void 0;
              try {
                if (typeof S[Te] != "function") {
                  var Dt = Error((q || "React class") + ": " + B + " type `" + Te + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[Te] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Dt.name = "Invariant Violation", Dt;
                }
                it = S[Te](w, Te, q, B, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (zt) {
                it = zt;
              }
              it && !(it instanceof Error) && (jt(ye), _e("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", q || "React class", B, Te, typeof it), jt(null)), it instanceof Error && !(it.message in Pt) && (Pt[it.message] = !0, jt(ye), _e("Failed %s type: %s", B, it.message), jt(null));
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
      function ur(S) {
        if (S !== void 0) {
          var w = S.fileName.replace(/^.*[\\\/]/, ""), B = S.lineNumber;
          return `

Check your code at ` + w + ":" + B + ".";
        }
        return "";
      }
      function _i(S) {
        return S != null ? ur(S.__source) : "";
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
            var q = "";
            S && S._owner && S._owner !== Qe.current && (q = " It was passed a child from " + Jn(S._owner.type) + "."), Si(S), _e('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', B, q), Si(null);
          }
        }
      }
      function Xt(S, w) {
        if (typeof S == "object") {
          if (bn(S))
            for (var B = 0; B < S.length; B++) {
              var q = S[B];
              mn(q) && dn(q, w);
            }
          else if (mn(S))
            S._store && (S._store.validated = !0);
          else if (S) {
            var ye = ge(S);
            if (typeof ye == "function" && ye !== S.entries)
              for (var nt = ye.call(S), Te; !(Te = nt.next()).done; )
                mn(Te.value) && dn(Te.value, w);
          }
        }
      }
      function xo(S) {
        {
          var w = S.type;
          if (w == null || typeof w == "string")
            return;
          var B;
          if (typeof w == "function")
            B = w.propTypes;
          else if (typeof w == "object" && (w.$$typeof === V || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          w.$$typeof === G))
            B = w.propTypes;
          else
            return;
          if (B) {
            var q = Jn(w);
            ts(B, S.props, "prop", q, S);
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
            var q = w[B];
            if (q !== "children" && q !== "key") {
              Si(S), _e("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", q), Si(null);
              break;
            }
          }
          S.ref !== null && (Si(S), _e("Invalid attribute `ref` supplied to `React.Fragment`."), Si(null));
        }
      }
      function Nr(S, w, B) {
        var q = ae(S);
        if (!q) {
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
        if (q)
          for (var Dt = 2; Dt < arguments.length; Dt++)
            Xt(arguments[Dt], S);
        return S === b ? Qn(it) : xo(it), it;
      }
      var Da = !1;
      function dl(S) {
        var w = Nr.bind(null, S);
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
        for (var q = an.apply(this, arguments), ye = 2; ye < arguments.length; ye++)
          Xt(arguments[ye], q.type);
        return xo(q), q;
      }
      function rs(S, w) {
        var B = Ee.transition;
        Ee.transition = {};
        var q = Ee.transition;
        Ee.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          S();
        } finally {
          if (Ee.transition = B, B === null && q._updatedFibers) {
            var ye = q._updatedFibers.size;
            ye > 10 && we("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), q._updatedFibers.clear();
          }
        }
      }
      var wo = !1, pl = null;
      function sd(S) {
        if (pl === null)
          try {
            var w = ("require" + Math.random()).slice(0, 7), B = v && v[w];
            pl = B.call(v, "timers").setImmediate;
          } catch {
            pl = function(ye) {
              wo === !1 && (wo = !0, typeof MessageChannel > "u" && _e("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var nt = new MessageChannel();
              nt.port1.onmessage = ye, nt.port2.postMessage(void 0);
            };
          }
        return pl(S);
      }
      var Oa = 0, ri = !1;
      function Ei(S) {
        {
          var w = Oa;
          Oa++, he.current === null && (he.current = []);
          var B = he.isBatchingLegacy, q;
          try {
            if (he.isBatchingLegacy = !0, q = S(), !B && he.didScheduleLegacyUpdate) {
              var ye = he.current;
              ye !== null && (he.didScheduleLegacyUpdate = !1, ko(ye));
            }
          } catch (Tt) {
            throw La(w), Tt;
          } finally {
            he.isBatchingLegacy = B;
          }
          if (q !== null && typeof q == "object" && typeof q.then == "function") {
            var nt = q, Te = !1, it = {
              then: function(Tt, Zt) {
                Te = !0, nt.then(function(yn) {
                  La(w), Oa === 0 ? su(yn, Tt, Zt) : Tt(yn);
                }, function(yn) {
                  La(w), Zt(yn);
                });
              }
            };
            return !ri && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Te || (ri = !0, _e("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), it;
          } else {
            var Dt = q;
            if (La(w), Oa === 0) {
              var zt = he.current;
              zt !== null && (ko(zt), he.current = null);
              var un = {
                then: function(Tt, Zt) {
                  he.current === null ? (he.current = [], su(Dt, Tt, Zt)) : Tt(Dt);
                }
              };
              return un;
            } else {
              var Jt = {
                then: function(Tt, Zt) {
                  Tt(Dt);
                }
              };
              return Jt;
            }
          }
        }
      }
      function La(S) {
        S !== Oa - 1 && _e("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Oa = S;
      }
      function su(S, w, B) {
        {
          var q = he.current;
          if (q !== null)
            try {
              ko(q), sd(function() {
                q.length === 0 ? (he.current = null, w(S)) : su(S, w, B);
              });
            } catch (ye) {
              B(ye);
            }
          else
            w(S);
        }
      }
      var cu = !1;
      function ko(S) {
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
          } catch (q) {
            throw S = S.slice(w + 1), q;
          } finally {
            cu = !1;
          }
        }
      }
      var vl = Nr, fu = ns, du = dl, ai = {
        map: Wi,
        forEach: ll,
        count: ol,
        toArray: _o,
        only: Co
      };
      y.Children = ai, y.Component = je, y.Fragment = b, y.Profiler = j, y.PureComponent = dt, y.StrictMode = h, y.Suspense = $, y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = He, y.act = Ei, y.cloneElement = fu, y.createContext = ul, y.createElement = vl, y.createFactory = du, y.createRef = Nn, y.forwardRef = gi, y.isValidElement = mn, y.lazy = yi, y.memo = xe, y.startTransition = rs, y.unstable_act = Ei, y.useCallback = lr, y.useContext = St, y.useDebugValue = _t, y.useDeferredValue = ei, y.useEffect = xn, y.useId = sl, y.useImperativeHandle = Za, y.useInsertionEffect = ln, y.useLayoutEffect = fn, y.useMemo = Ja, y.useReducer = kt, y.useRef = xt, y.useState = mt, y.useSyncExternalStore = cl, y.useTransition = Rt, y.version = m, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  })(mv, mv.exports)), mv.exports;
}
var AE;
function yv() {
  return AE || (AE = 1, process.env.NODE_ENV === "production" ? dy.exports = Ek() : dy.exports = Rk()), dy.exports;
}
var UE;
function bk() {
  if (UE) return pv;
  UE = 1;
  var v = yv(), y = /* @__PURE__ */ Symbol.for("react.element"), m = /* @__PURE__ */ Symbol.for("react.fragment"), R = Object.prototype.hasOwnProperty, L = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, b = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(j, k, T) {
    var V, $ = {}, Q = null, G = null;
    T !== void 0 && (Q = "" + T), k.key !== void 0 && (Q = "" + k.key), k.ref !== void 0 && (G = k.ref);
    for (V in k) R.call(k, V) && !b.hasOwnProperty(V) && ($[V] = k[V]);
    if (j && j.defaultProps) for (V in k = j.defaultProps, k) $[V] === void 0 && ($[V] = k[V]);
    return { $$typeof: y, type: j, key: Q, ref: G, props: $, _owner: L.current };
  }
  return pv.Fragment = m, pv.jsx = h, pv.jsxs = h, pv;
}
var vv = {};
var jE;
function Tk() {
  return jE || (jE = 1, process.env.NODE_ENV !== "production" && (function() {
    var v = yv(), y = /* @__PURE__ */ Symbol.for("react.element"), m = /* @__PURE__ */ Symbol.for("react.portal"), R = /* @__PURE__ */ Symbol.for("react.fragment"), L = /* @__PURE__ */ Symbol.for("react.strict_mode"), b = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.provider"), j = /* @__PURE__ */ Symbol.for("react.context"), k = /* @__PURE__ */ Symbol.for("react.forward_ref"), T = /* @__PURE__ */ Symbol.for("react.suspense"), V = /* @__PURE__ */ Symbol.for("react.suspense_list"), $ = /* @__PURE__ */ Symbol.for("react.memo"), Q = /* @__PURE__ */ Symbol.for("react.lazy"), G = /* @__PURE__ */ Symbol.for("react.offscreen"), ve = Symbol.iterator, ue = "@@iterator";
    function pe(D) {
      if (D === null || typeof D != "object")
        return null;
      var ae = ve && D[ve] || D[ue];
      return typeof ae == "function" ? ae : null;
    }
    var Ne = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ge(D) {
      {
        for (var ae = arguments.length, xe = new Array(ae > 1 ? ae - 1 : 0), Pe = 1; Pe < ae; Pe++)
          xe[Pe - 1] = arguments[Pe];
        Se("error", D, xe);
      }
    }
    function Se(D, ae, xe) {
      {
        var Pe = Ne.ReactDebugCurrentFrame, St = Pe.getStackAddendum();
        St !== "" && (ae += "%s", xe = xe.concat([St]));
        var mt = xe.map(function(kt) {
          return String(kt);
        });
        mt.unshift("Warning: " + ae), Function.prototype.apply.call(console[D], console, mt);
      }
    }
    var Ee = !1, he = !1, Qe = !1, Ve = !1, Ie = !1, Xe;
    Xe = /* @__PURE__ */ Symbol.for("react.module.reference");
    function lt(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === R || D === b || Ie || D === L || D === T || D === V || Ve || D === G || Ee || he || Qe || typeof D == "object" && D !== null && (D.$$typeof === Q || D.$$typeof === $ || D.$$typeof === h || D.$$typeof === j || D.$$typeof === k || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === Xe || D.getModuleId !== void 0));
    }
    function ut(D, ae, xe) {
      var Pe = D.displayName;
      if (Pe)
        return Pe;
      var St = ae.displayName || ae.name || "";
      return St !== "" ? xe + "(" + St + ")" : xe;
    }
    function K(D) {
      return D.displayName || "Context";
    }
    function ee(D) {
      if (D == null)
        return null;
      if (typeof D.tag == "number" && ge("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof D == "function")
        return D.displayName || D.name || null;
      if (typeof D == "string")
        return D;
      switch (D) {
        case R:
          return "Fragment";
        case m:
          return "Portal";
        case b:
          return "Profiler";
        case L:
          return "StrictMode";
        case T:
          return "Suspense";
        case V:
          return "SuspenseList";
      }
      if (typeof D == "object")
        switch (D.$$typeof) {
          case j:
            var ae = D;
            return K(ae) + ".Consumer";
          case h:
            var xe = D;
            return K(xe._context) + ".Provider";
          case k:
            return ut(D, D.render, "ForwardRef");
          case $:
            var Pe = D.displayName || null;
            return Pe !== null ? Pe : ee(D.type) || "Memo";
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
    var be = Object.assign, He = 0, we, _e, te, Oe, me, U, X;
    function Je() {
    }
    Je.__reactDisabledLog = !0;
    function je() {
      {
        if (He === 0) {
          we = console.log, _e = console.info, te = console.warn, Oe = console.error, me = console.group, U = console.groupCollapsed, X = console.groupEnd;
          var D = {
            configurable: !0,
            enumerable: !0,
            value: Je,
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
        He++;
      }
    }
    function ht() {
      {
        if (He--, He === 0) {
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
        He < 0 && ge("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var tt = Ne.ReactCurrentDispatcher, Le;
    function st(D, ae, xe) {
      {
        if (Le === void 0)
          try {
            throw Error();
          } catch (St) {
            var Pe = St.stack.trim().match(/\n( *(at )?)/);
            Le = Pe && Pe[1] || "";
          }
        return `
` + Le + D;
      }
    }
    var dt = !1, Gt;
    {
      var Nn = typeof WeakMap == "function" ? WeakMap : Map;
      Gt = new Nn();
    }
    function kr(D, ae) {
      if (!D || dt)
        return "";
      {
        var xe = Gt.get(D);
        if (xe !== void 0)
          return xe;
      }
      var Pe;
      dt = !0;
      var St = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var mt;
      mt = tt.current, tt.current = null, je();
      try {
        if (ae) {
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
              Pe = _t;
            }
            Reflect.construct(D, [], kt);
          } else {
            try {
              kt.call();
            } catch (_t) {
              Pe = _t;
            }
            D.call(kt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_t) {
            Pe = _t;
          }
          D();
        }
      } catch (_t) {
        if (_t && Pe && typeof _t.stack == "string") {
          for (var xt = _t.stack.split(`
`), xn = Pe.stack.split(`
`), ln = xt.length - 1, fn = xn.length - 1; ln >= 1 && fn >= 0 && xt[ln] !== xn[fn]; )
            fn--;
          for (; ln >= 1 && fn >= 0; ln--, fn--)
            if (xt[ln] !== xn[fn]) {
              if (ln !== 1 || fn !== 1)
                do
                  if (ln--, fn--, fn < 0 || xt[ln] !== xn[fn]) {
                    var lr = `
` + xt[ln].replace(" at new ", " at ");
                    return D.displayName && lr.includes("<anonymous>") && (lr = lr.replace("<anonymous>", D.displayName)), typeof D == "function" && Gt.set(D, lr), lr;
                  }
                while (ln >= 1 && fn >= 0);
              break;
            }
        }
      } finally {
        dt = !1, tt.current = mt, ht(), Error.prepareStackTrace = St;
      }
      var Ja = D ? D.displayName || D.name : "", Za = Ja ? st(Ja) : "";
      return typeof D == "function" && Gt.set(D, Za), Za;
    }
    function bn(D, ae, xe) {
      return kr(D, !1);
    }
    function ir(D) {
      var ae = D.prototype;
      return !!(ae && ae.isReactComponent);
    }
    function $n(D, ae, xe) {
      if (D == null)
        return "";
      if (typeof D == "function")
        return kr(D, ir(D));
      if (typeof D == "string")
        return st(D);
      switch (D) {
        case T:
          return st("Suspense");
        case V:
          return st("SuspenseList");
      }
      if (typeof D == "object")
        switch (D.$$typeof) {
          case k:
            return bn(D.render);
          case $:
            return $n(D.type, ae, xe);
          case Q: {
            var Pe = D, St = Pe._payload, mt = Pe._init;
            try {
              return $n(mt(St), ae, xe);
            } catch {
            }
          }
        }
      return "";
    }
    var Wn = Object.prototype.hasOwnProperty, qr = {}, vi = Ne.ReactDebugCurrentFrame;
    function pa(D) {
      if (D) {
        var ae = D._owner, xe = $n(D.type, D._source, ae ? ae.type : null);
        vi.setExtraStackFrame(xe);
      } else
        vi.setExtraStackFrame(null);
    }
    function Jn(D, ae, xe, Pe, St) {
      {
        var mt = Function.call.bind(Wn);
        for (var kt in D)
          if (mt(D, kt)) {
            var xt = void 0;
            try {
              if (typeof D[kt] != "function") {
                var xn = Error((Pe || "React class") + ": " + xe + " type `" + kt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof D[kt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw xn.name = "Invariant Violation", xn;
              }
              xt = D[kt](ae, kt, Pe, xe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ln) {
              xt = ln;
            }
            xt && !(xt instanceof Error) && (pa(St), ge("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Pe || "React class", xe, kt, typeof xt), pa(null)), xt instanceof Error && !(xt.message in qr) && (qr[xt.message] = !0, pa(St), ge("Failed %s type: %s", xe, xt.message), pa(null));
          }
      }
    }
    var Tn = Array.isArray;
    function Yn(D) {
      return Tn(D);
    }
    function Cr(D) {
      {
        var ae = typeof Symbol == "function" && Symbol.toStringTag, xe = ae && D[Symbol.toStringTag] || D.constructor.name || "Object";
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
    function Er(D) {
      if (qa(D))
        return ge("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Cr(D)), An(D);
    }
    var va = Ne.ReactCurrentOwner, Ka = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, hi, Ce;
    function Ge(D) {
      if (Wn.call(D, "ref")) {
        var ae = Object.getOwnPropertyDescriptor(D, "ref").get;
        if (ae && ae.isReactWarning)
          return !1;
      }
      return D.ref !== void 0;
    }
    function bt(D) {
      if (Wn.call(D, "key")) {
        var ae = Object.getOwnPropertyDescriptor(D, "key").get;
        if (ae && ae.isReactWarning)
          return !1;
      }
      return D.key !== void 0;
    }
    function Wt(D, ae) {
      typeof D.ref == "string" && va.current;
    }
    function an(D, ae) {
      {
        var xe = function() {
          hi || (hi = !0, ge("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ae));
        };
        xe.isReactWarning = !0, Object.defineProperty(D, "key", {
          get: xe,
          configurable: !0
        });
      }
    }
    function mn(D, ae) {
      {
        var xe = function() {
          Ce || (Ce = !0, ge("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ae));
        };
        xe.isReactWarning = !0, Object.defineProperty(D, "ref", {
          get: xe,
          configurable: !0
        });
      }
    }
    var cn = function(D, ae, xe, Pe, St, mt, kt) {
      var xt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: y,
        // Built-in properties that belong on the element
        type: D,
        key: ae,
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
        value: Pe
      }), Object.defineProperty(xt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: St
      }), Object.freeze && (Object.freeze(xt.props), Object.freeze(xt)), xt;
    };
    function Zn(D, ae, xe, Pe, St) {
      {
        var mt, kt = {}, xt = null, xn = null;
        xe !== void 0 && (Er(xe), xt = "" + xe), bt(ae) && (Er(ae.key), xt = "" + ae.key), Ge(ae) && (xn = ae.ref, Wt(ae, St));
        for (mt in ae)
          Wn.call(ae, mt) && !Ka.hasOwnProperty(mt) && (kt[mt] = ae[mt]);
        if (D && D.defaultProps) {
          var ln = D.defaultProps;
          for (mt in ln)
            kt[mt] === void 0 && (kt[mt] = ln[mt]);
        }
        if (xt || xn) {
          var fn = typeof D == "function" ? D.displayName || D.name || "Unknown" : D;
          xt && an(kt, fn), xn && mn(kt, fn);
        }
        return cn(D, xt, xn, St, Pe, va.current, kt);
      }
    }
    var on = Ne.ReactCurrentOwner, qt = Ne.ReactDebugCurrentFrame;
    function Kt(D) {
      if (D) {
        var ae = D._owner, xe = $n(D.type, D._source, ae ? ae.type : null);
        qt.setExtraStackFrame(xe);
      } else
        qt.setExtraStackFrame(null);
    }
    var ha;
    ha = !1;
    function Rr(D) {
      return typeof D == "object" && D !== null && D.$$typeof === y;
    }
    function ka() {
      {
        if (on.current) {
          var D = ee(on.current.type);
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
    var ol = {};
    function ll(D) {
      {
        var ae = ka();
        if (!ae) {
          var xe = typeof D == "string" ? D : D.displayName || D.name;
          xe && (ae = `

Check the top-level render call using <` + xe + ">.");
        }
        return ae;
      }
    }
    function _o(D, ae) {
      {
        if (!D._store || D._store.validated || D.key != null)
          return;
        D._store.validated = !0;
        var xe = ll(ae);
        if (ol[xe])
          return;
        ol[xe] = !0;
        var Pe = "";
        D && D._owner && D._owner !== on.current && (Pe = " It was passed a child from " + ee(D._owner.type) + "."), Kt(D), ge('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', xe, Pe), Kt(null);
      }
    }
    function Co(D, ae) {
      {
        if (typeof D != "object")
          return;
        if (Yn(D))
          for (var xe = 0; xe < D.length; xe++) {
            var Pe = D[xe];
            Rr(Pe) && _o(Pe, ae);
          }
        else if (Rr(D))
          D._store && (D._store.validated = !0);
        else if (D) {
          var St = pe(D);
          if (typeof St == "function" && St !== D.entries)
            for (var mt = St.call(D), kt; !(kt = mt.next()).done; )
              Rr(kt.value) && _o(kt.value, ae);
        }
      }
    }
    function ul(D) {
      {
        var ae = D.type;
        if (ae == null || typeof ae == "string")
          return;
        var xe;
        if (typeof ae == "function")
          xe = ae.propTypes;
        else if (typeof ae == "object" && (ae.$$typeof === k || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ae.$$typeof === $))
          xe = ae.propTypes;
        else
          return;
        if (xe) {
          var Pe = ee(ae);
          Jn(xe, D.props, "prop", Pe, D);
        } else if (ae.PropTypes !== void 0 && !ha) {
          ha = !0;
          var St = ee(ae);
          ge("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", St || "Unknown");
        }
        typeof ae.getDefaultProps == "function" && !ae.getDefaultProps.isReactClassApproved && ge("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Dr(D) {
      {
        for (var ae = Object.keys(D.props), xe = 0; xe < ae.length; xe++) {
          var Pe = ae[xe];
          if (Pe !== "children" && Pe !== "key") {
            Kt(D), ge("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Pe), Kt(null);
            break;
          }
        }
        D.ref !== null && (Kt(D), ge("Invalid attribute `ref` supplied to `React.Fragment`."), Kt(null));
      }
    }
    var Or = {};
    function or(D, ae, xe, Pe, St, mt) {
      {
        var kt = lt(D);
        if (!kt) {
          var xt = "";
          (D === void 0 || typeof D == "object" && D !== null && Object.keys(D).length === 0) && (xt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var xn = Wi();
          xn ? xt += xn : xt += ka();
          var ln;
          D === null ? ln = "null" : Yn(D) ? ln = "array" : D !== void 0 && D.$$typeof === y ? (ln = "<" + (ee(D.type) || "Unknown") + " />", xt = " Did you accidentally export a JSX literal instead of a component?") : ln = typeof D, ge("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ln, xt);
        }
        var fn = Zn(D, ae, xe, St, mt);
        if (fn == null)
          return fn;
        if (kt) {
          var lr = ae.children;
          if (lr !== void 0)
            if (Pe)
              if (Yn(lr)) {
                for (var Ja = 0; Ja < lr.length; Ja++)
                  Co(lr[Ja], D);
                Object.freeze && Object.freeze(lr);
              } else
                ge("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Co(lr, D);
        }
        if (Wn.call(ae, "key")) {
          var Za = ee(D), _t = Object.keys(ae).filter(function(sl) {
            return sl !== "key";
          }), Rt = _t.length > 0 ? "{key: someKey, " + _t.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Or[Za + Rt]) {
            var ei = _t.length > 0 ? "{" + _t.join(": ..., ") + ": ...}" : "{}";
            ge(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Rt, Za, ei, Za), Or[Za + Rt] = !0;
          }
        }
        return D === R ? Dr(fn) : ul(fn), fn;
      }
    }
    function mi(D, ae, xe) {
      return or(D, ae, xe, !0);
    }
    function Xa(D, ae, xe) {
      return or(D, ae, xe, !1);
    }
    var yi = Xa, gi = mi;
    vv.Fragment = R, vv.jsx = yi, vv.jsxs = gi;
  })()), vv;
}
var zE;
function xk() {
  return zE || (zE = 1, process.env.NODE_ENV === "production" ? fy.exports = bk() : fy.exports = Tk()), fy.exports;
}
var re = xk(), Ct = yv();
const mc = /* @__PURE__ */ d2(Ct), FE = (v) => Symbol.iterator in v, PE = (v) => (
  // HACK: avoid checking entries type
  "entries" in v
), VE = (v, y) => {
  const m = v instanceof Map ? v : new Map(v.entries()), R = y instanceof Map ? y : new Map(y.entries());
  if (m.size !== R.size)
    return !1;
  for (const [L, b] of m)
    if (!R.has(L) || !Object.is(b, R.get(L)))
      return !1;
  return !0;
}, wk = (v, y) => {
  const m = v[Symbol.iterator](), R = y[Symbol.iterator]();
  let L = m.next(), b = R.next();
  for (; !L.done && !b.done; ) {
    if (!Object.is(L.value, b.value))
      return !1;
    L = m.next(), b = R.next();
  }
  return !!L.done && !!b.done;
};
function kk(v, y) {
  return Object.is(v, y) ? !0 : typeof v != "object" || v === null || typeof y != "object" || y === null || Object.getPrototypeOf(v) !== Object.getPrototypeOf(y) ? !1 : FE(v) && FE(y) ? PE(v) && PE(y) ? VE(v, y) : wk(v, y) : VE(
    { entries: () => Object.entries(v) },
    { entries: () => Object.entries(y) }
  );
}
function Dk(v) {
  const y = mc.useRef(void 0);
  return (m) => {
    const R = v(m);
    return kk(y.current, R) ? y.current : y.current = R;
  };
}
const Ok = "_sidebar_gxqe0_1", Lk = "_sidebarNav_gxqe0_24", Mk = "_sectionWrapper_gxqe0_32", Nk = "_sectionHeader_gxqe0_37", Ak = "_active_gxqe0_48", Uk = "_sidebarItemInHeader_gxqe0_68", jk = "_plusButton_gxqe0_71", zk = "_sidebarItem_gxqe0_68", Fk = "_sidebarIcon_gxqe0_138", Pk = "_sidebarLabel_gxqe0_148", Vk = "_plusIcon_gxqe0_173", Hk = "_rotated_gxqe0_178", Rn = {
  sidebar: Ok,
  sidebarNav: Lk,
  sectionWrapper: Mk,
  sectionHeader: Nk,
  active: Ak,
  sidebarItemInHeader: Uk,
  plusButton: jk,
  sidebarItem: zk,
  sidebarIcon: Fk,
  sidebarLabel: Pk,
  plusIcon: Vk,
  rotated: Hk
}, Ik = "_expandedContent_1h40k_2", Bk = "_searchContainer_1h40k_17", $k = "_searchIcon_1h40k_29", Wk = "_searchInput_1h40k_34", Yk = "_suggestionsList_1h40k_46", Qk = "_suggestionItemWrapper_1h40k_65", Gk = "_suggestionItem_1h40k_65", qk = "_selected_1h40k_88", Kk = "_statusIcon_1h40k_93", Xk = "_moreButton_1h40k_96", Jk = "_childItem_1h40k_99", Zk = "_suggestionLabel_1h40k_128", eD = "_loadingState_1h40k_173", tD = "_loadingSpinner_1h40k_183", nD = "_emptyState_1h40k_197", rD = "_errorState_1h40k_204", Qr = {
  expandedContent: Ik,
  searchContainer: Bk,
  searchIcon: $k,
  searchInput: Wk,
  suggestionsList: Yk,
  suggestionItemWrapper: Qk,
  suggestionItem: Gk,
  selected: qk,
  statusIcon: Kk,
  moreButton: Xk,
  childItem: Jk,
  suggestionLabel: Zk,
  loadingState: eD,
  loadingSpinner: tD,
  emptyState: nD,
  errorState: rD
}, aD = ({ status: v }) => v === "completed" ? /* @__PURE__ */ re.jsx("span", { className: Qr.statusIcon, "data-status": "completed", children: "✓" }) : /* @__PURE__ */ re.jsx("span", { className: Qr.statusIcon, "data-status": "completed", children: "✓" }), iD = ({
  contentType: v,
  items: y,
  selectedItem: m,
  onItemSelect: R,
  isLoading: L = !1,
  emptyMessage: b = "No items found",
  error: h = null
}) => {
  const [j, k] = Ct.useState(/* @__PURE__ */ new Set()), [T, V] = Ct.useState(""), $ = (ue) => {
    k((pe) => {
      const Ne = new Set(pe);
      return Ne.has(ue) ? Ne.delete(ue) : Ne.add(ue), Ne;
    });
  }, Q = (ue, pe) => pe ? ue.filter(
    (Ne) => Ne.full_name?.toLowerCase().includes(pe.toLowerCase()) || // item.my_person_emails.some((email) => email.email_address.toLowerCase().includes(query.toLowerCase())) ||
    Ne.master_person.name?.toLowerCase().includes(pe.toLowerCase()) || Ne.master_person.current_title?.toLowerCase().includes(pe.toLowerCase()) || Ne.master_person.bio?.toLowerCase().includes(pe.toLowerCase()) || Ne.master_person.master_company?.company_name?.toLowerCase().includes(pe.toLowerCase())
  ) : ue, G = (ue, pe = !1) => {
    const Ne = m?.full_name === ue.full_name;
    return /* @__PURE__ */ re.jsx("div", { className: Qr.suggestionItemWrapper, children: /* @__PURE__ */ re.jsxs(
      "button",
      {
        className: `${Qr.suggestionItem} ${pe ? Qr.childItem : ""} ${Ne ? Qr.selected : ""}`,
        onClick: () => {
          $(ue.full_name), R(ue);
        },
        children: [
          /* @__PURE__ */ re.jsx(aD, { status: ue.status }),
          /* @__PURE__ */ re.jsx("span", { className: Qr.suggestionLabel, children: ue.full_name }),
          /* @__PURE__ */ re.jsx("button", { className: Qr.moreButton, onClick: (ge) => ge.stopPropagation(), children: "⋮" })
        ]
      }
    ) }, ue.id);
  }, ve = Q(y, T);
  return /* @__PURE__ */ re.jsxs("div", { className: Qr.expandedContent, children: [
    /* @__PURE__ */ re.jsxs("div", { className: Qr.searchContainer, children: [
      /* @__PURE__ */ re.jsx("span", { className: Qr.searchIcon, children: "🔍" }),
      /* @__PURE__ */ re.jsx(
        "input",
        {
          type: "text",
          placeholder: `Search ${v === "outcomes" ? "outcomes" : "leverage loops"}...`,
          className: Qr.searchInput,
          value: T,
          onChange: (ue) => V(ue.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ re.jsx("div", { className: Qr.suggestionsList, children: L ? /* @__PURE__ */ re.jsxs("div", { className: Qr.loadingState, children: [
      /* @__PURE__ */ re.jsx("span", { className: Qr.loadingSpinner }),
      "Loading..."
    ] }) : ve.length === 0 ? /* @__PURE__ */ re.jsx("div", { className: Qr.emptyState, children: T ? `No results for "${T}"` : b }) : h ? /* @__PURE__ */ re.jsx("div", { className: Qr.errorState, children: h }) : ve.map((ue) => G(ue)) })
  ] });
}, HE = (v) => {
  let y;
  const m = /* @__PURE__ */ new Set(), R = (T, V) => {
    const $ = typeof T == "function" ? T(y) : T;
    if (!Object.is($, y)) {
      const Q = y;
      y = V ?? (typeof $ != "object" || $ === null) ? $ : Object.assign({}, y, $), m.forEach((G) => G(y, Q));
    }
  }, L = () => y, j = { setState: R, getState: L, getInitialState: () => k, subscribe: (T) => (m.add(T), () => m.delete(T)) }, k = y = v(R, L, j);
  return j;
}, oD = ((v) => v ? HE(v) : HE), lD = (v) => v;
function uD(v, y = lD) {
  const m = mc.useSyncExternalStore(
    v.subscribe,
    mc.useCallback(() => y(v.getState()), [v, y]),
    mc.useCallback(() => y(v.getInitialState()), [v, y])
  );
  return mc.useDebugValue(m), m;
}
const IE = (v) => {
  const y = oD(v), m = (R) => uD(y, R);
  return Object.assign(m, y), m;
}, sD = ((v) => v ? IE(v) : IE), cD = "https://xh2o-yths-38lt.n7c.xano.io/api:Et3oQAtI", fD = "eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwiemlwIjoiREVGIn0.aB8syx86WnMAOQtx97qS84qETMr3MTTtJoh7wkDcen1-27BNGPEEC3Su4M5cFWU0wWz9JiJfU0nuDJhctHHwnKDqavxfgHJl.5McjFbda_X4rzzrsXQJh1A.x0vtNc5y0nRrg3dqKCk4ERXSZkzlO3-H8oUzEVn25astheZy6sO9JH-xZTozXn37W9kdZckd6qCBD86C8TOEerL7WLljA6pr-7FTscWTz6wDk7BlBrYyXbY6LLOkJ9nSt50v4TwA0b1WxQ9VGCZmHeRCognzOE0VfFUQvXy4PBk.qrLXZ9YzrW7tfQ45eNg8nzeM8ujx56mr7r6tiRjZ82o", dD = "staging", pD = sD((v) => ({
  leverageLoops: [],
  isLoading: !1,
  error: null,
  fetchLeverageLoops: async () => {
    v({ isLoading: !0, error: null });
    try {
      const y = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${fD}`,
        "x-data-source": dD
      }, m = await fetch(`${cD}/my-persons`, { headers: y }), R = await m.json();
      if (!m.ok) {
        const L = R?.message || R?.error || "Failed to fetch loops", b = `HTTP ${m.status}: ${L}`;
        throw new Error(b);
      }
      v({ leverageLoops: R, isLoading: !1 });
    } catch (y) {
      v({
        error: y instanceof Error ? y.message : "Unknown error",
        isLoading: !1
      });
    }
  },
  setLeverageLoops: (y) => v({ leverageLoops: y }),
  addLeverageLoops: (y) => v((m) => ({ leverageLoops: [...m.leverageLoops, ...y] }))
})), vD = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.15816%2015.5394C4.42185%2015.8099%203.64142%2015.9909%202.82808%2016.0678C2.75965%2016.0739%202.69009%2016.0784%202.62129%2016.081C2.05326%2016.1048%201.47513%2015.9215%201.00732%2015.5213C0.154714%2014.7923%20-0.052828%2013.5813%200.443029%2012.6226C0.448638%2012.6116%200.453874%2012.6011%200.459857%2012.5898L3.41481%206.77869C2.08654%209.73401%202.83855%2013.3286%205.16339%2015.5372L5.15816%2015.5391V15.5394Z'%20fill='url(%23paint0_linear_23492_1459)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.8419%204.46013C15.5782%204.18972%2016.3587%204.00906%2017.172%203.93175C17.2401%203.92571%2017.31%203.92119%2017.3788%203.91855C17.9468%203.89479%2018.525%204.07808%2018.9928%204.47823C19.845%205.20726%2020.0529%206.41828%2019.5571%207.37699C19.5515%207.3883%2019.5458%207.39886%2019.5402%207.4098L16.5853%2013.2205C17.9132%2010.2648%2017.1615%206.67059%2014.8367%204.46202L14.8419%204.46013Z'%20fill='url(%23paint1_linear_23492_1459)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10%202.61975C11.8545%202.61975%2013.547%203.31559%2014.8367%204.46211C12.464%205.51888%2010.8283%207.5913%2010.1904%2010.0563C9.55242%2012.5214%207.60302%2014.6787%205.16338%2015.5378C3.66459%2014.2306%202.68222%2012.2057%202.68222%2010.0001C2.68259%205.92394%205.95877%202.61975%2010%202.61975Z'%20fill='url(%23paint2_linear_23492_1459)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.8367%204.46167C16.358%205.81412%2017.3179%207.79376%2017.3179%209.99932C17.3179%2014.0751%2014.0417%2017.3793%2010.0001%2017.3793C8.14604%2017.3793%206.45317%2016.6835%205.16342%2015.537C7.59222%2014.5651%209.36213%2012.4644%2010.0001%209.99932C10.638%207.53429%2012.4079%205.4332%2014.8367%204.46167Z'%20fill='url(%23paint3_linear_23492_1459)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_23492_1459'%20x1='1.41231'%20y1='10.771'%20x2='6.31346'%20y2='13.2684'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFAE00'%20stop-opacity='0.12'/%3e%3cstop%20offset='1'%20stop-color='%23FFAE00'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_23492_1459'%20x1='13.6991'%20y1='6.69473'%20x2='18.6306'%20y2='9.20746'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2313F562'/%3e%3cstop%20offset='1'%20stop-color='%2313F562'%20stop-opacity='0.09'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_23492_1459'%20x1='4.21878'%20y1='14.805'%20x2='10.8001'%20y2='2.68539'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FD5743'/%3e%3cstop%20offset='0.21'%20stop-color='%23D13D58'/%3e%3cstop%20offset='0.4'%20stop-color='%23AB2868'/%3e%3cstop%20offset='0.6'%20stop-color='%238C1B6F'/%3e%3cstop%20offset='1'%20stop-color='%23280553'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint3_linear_23492_1459'%20x1='9.19834'%20y1='17.5257'%20x2='15.8611'%20y2='5.25654'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23130F56'/%3e%3cstop%20offset='0.41'%20stop-color='%23105D8E'/%3e%3cstop%20offset='0.6'%20stop-color='%23107995'/%3e%3cstop%20offset='0.79'%20stop-color='%2311A39E'/%3e%3cstop%20offset='1'%20stop-color='%2313EBAF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e", hD = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%205.83329C9.17592%205.83329%208.37034%206.07766%207.68514%206.5355C6.99993%206.99334%206.46588%207.64408%206.15051%208.40544C5.83515%209.1668%205.75264%2010.0046%205.91341%2010.8128C6.07418%2011.6211%206.47102%2012.3635%207.05373%2012.9462C7.63645%2013.529%208.37888%2013.9258%209.18714%2014.0866C9.99539%2014.2473%2010.8332%2014.1648%2011.5945%2013.8495C12.3559%2013.5341%2013.0066%2013%2013.4645%2012.3148C13.9223%2011.6296%2014.1667%2010.824%2014.1667%209.99995M10.8333%202.54579C9.28839%202.37246%207.72776%202.68352%206.36733%203.43593C5.0069%204.18834%203.9139%205.34492%203.23953%206.74567C2.56516%208.14643%202.34274%209.72213%202.60305%2011.2548C2.86335%2012.7875%203.59352%2014.2014%204.69253%2015.301C5.79155%2016.4006%207.2051%2017.1314%208.73766%2017.3925C10.2702%2017.6536%2011.846%2017.432%2013.2471%2016.7583C14.6482%2016.0846%2015.8053%2014.9922%2016.5584%2013.6322C17.3115%2012.2721%2017.6234%2010.7117%2017.4508%209.16662M12.5%207.49995V4.99995L15%202.49995V4.99995H17.5L15%207.49995H12.5ZM12.5%207.49995L10%209.99995M9.16668%209.99995C9.16668%2010.221%209.25447%2010.4329%209.41076%2010.5892C9.56704%2010.7455%209.779%2010.8333%2010%2010.8333C10.221%2010.8333%2010.433%2010.7455%2010.5893%2010.5892C10.7455%2010.4329%2010.8333%2010.221%2010.8333%209.99995C10.8333%209.77894%2010.7455%209.56698%2010.5893%209.4107C10.433%209.25442%2010.221%209.16662%2010%209.16662C9.779%209.16662%209.56704%209.25442%209.41076%209.4107C9.25447%209.56698%209.16668%209.77894%209.16668%209.99995Z'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", mD = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.5533%205.43171C14.1448%204.53303%2013.4793%203.77539%2012.6409%203.2543C11.8024%202.73321%2010.8285%202.47198%209.84179%202.50353C8.8551%202.53509%207.89984%202.85802%207.09639%203.43162C6.29294%204.00523%205.67727%204.80383%205.32698%205.72679C4.97669%206.64974%204.90745%207.65573%205.12798%208.61798C5.34852%209.58022%205.84897%2010.4556%206.56625%2011.1339C7.28353%2011.8122%208.18555%2012.263%209.15861%2012.4294C10.1317%2012.5958%2011.1322%2012.4705%2012.0342%2012.0692'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M14.5683%2014.5533C15.467%2014.1448%2016.2246%2013.4793%2016.7457%2012.6409C17.2668%2011.8024%2017.5281%2010.8284%2017.4965%209.84176C17.4649%208.85507%2017.142%207.89981%2016.5684%207.09636C15.9948%206.29291%2015.1962%205.67724%2014.2732%205.32695C13.3503%204.97666%2012.3443%204.90742%2011.3821%205.12795C10.4198%205.34849%209.54439%205.84894%208.86612%206.56622C8.18784%207.2835%207.73708%208.18552%207.57064%209.15858C7.40419%2010.1316%207.52952%2011.1322%207.93083%2012.0341'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5.45001%2014.5684C5.8585%2015.467%206.52387%2016.2247%207.36227%2016.7459C8.20067%2017.267%209.17458%2017.5283%2010.1613%2017.4969C11.1479%2017.4654%2012.1032%2017.1425%2012.9067%2016.569C13.7102%2015.9955%2014.3259%2015.197%2014.6763%2014.2741C15.0267%2013.3512%2015.0961%2012.3452%2014.8756%2011.383C14.6552%2010.4207%2014.1549%209.54526%2013.4377%208.8669C12.7205%208.18855%2011.8186%207.73767%2010.8456%207.57109C9.87256%207.40451%208.872%207.52969%207.97001%207.93085'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5.43168%205.44995C4.53299%205.85844%203.77532%206.52381%203.25417%207.36221C2.73302%208.20061%202.47171%209.17452%202.50318%2010.1612C2.53465%2011.1479%202.85749%2012.1031%203.431%2012.9066C4.00451%2013.7101%204.80304%2014.3259%205.72594%2014.6763C6.64884%2015.0266%207.6548%2015.096%208.61706%2014.8756C9.57931%2014.6552%2010.4548%2014.1548%2011.1331%2013.4376C11.8115%2012.7205%2012.2624%2011.8185%2012.4289%2010.8455C12.5955%209.8725%2012.4703%208.87194%2012.0692%207.96995'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", yD = ({
  activeSection: v,
  onSectionChange: y
}) => {
  const { leverageLoops: m, fetchLeverageLoops: R, isLoading: L, error: b } = pD(
    Dk((Q) => ({
      leverageLoops: Q.leverageLoops,
      fetchLeverageLoops: Q.fetchLeverageLoops,
      isLoading: Q.isLoading,
      error: Q.error
    }))
  ), [h, j] = Ct.useState(/* @__PURE__ */ new Set()), [k, T] = Ct.useState(null), V = (Q) => {
    y(Q), j((G) => {
      const ve = new Set(G);
      return ve.has(Q) ? ve.delete(Q) : ve.add(Q), ve;
    });
  }, $ = (Q) => {
    T(Q), y("copilot");
  };
  return Ct.useEffect(() => {
    R();
  }, []), /* @__PURE__ */ re.jsx("div", { className: Rn.sidebar, children: /* @__PURE__ */ re.jsxs("nav", { className: Rn.sidebarNav, children: [
    /* @__PURE__ */ re.jsxs(
      "button",
      {
        className: `${Rn.sidebarItem} ${v === "copilot" ? Rn.active : ""}`,
        onClick: () => y("copilot"),
        "aria-label": "Orbiter.io Copilot",
        children: [
          /* @__PURE__ */ re.jsx("span", { className: Rn.sidebarIcon, children: /* @__PURE__ */ re.jsx("img", { src: vD, alt: "Orbiter", width: 18, height: 18 }) }),
          /* @__PURE__ */ re.jsx("span", { className: Rn.sidebarLabel, children: "Orbiter.io Copilot" })
        ]
      }
    ),
    /* @__PURE__ */ re.jsx("div", { className: Rn.sectionWrapper, children: /* @__PURE__ */ re.jsxs("div", { className: `${Rn.sectionHeader} ${v === "outcomes" ? Rn.active : ""}`, children: [
      /* @__PURE__ */ re.jsxs(
        "button",
        {
          className: Rn.sidebarItemInHeader,
          onClick: () => y("outcomes"),
          "aria-label": "Outcomes",
          children: [
            /* @__PURE__ */ re.jsx("span", { className: Rn.sidebarIcon, children: /* @__PURE__ */ re.jsx("img", { src: hD, alt: "Outcomes", width: 18, height: 18 }) }),
            /* @__PURE__ */ re.jsx("span", { className: Rn.sidebarLabel, children: "Outcomes" })
          ]
        }
      ),
      /* @__PURE__ */ re.jsx(
        "button",
        {
          className: Rn.plusButton,
          onClick: () => V("outcomes"),
          "aria-label": "Expand Outcomes",
          children: /* @__PURE__ */ re.jsx("span", { className: `${Rn.plusIcon} ${h.has("outcomes") ? Rn.rotated : ""}`, children: "+" })
        }
      )
    ] }) }),
    /* @__PURE__ */ re.jsxs("div", { className: Rn.sectionWrapper, children: [
      /* @__PURE__ */ re.jsxs("div", { className: `${Rn.sectionHeader} ${v === "leverage-loops" ? Rn.active : ""}`, children: [
        /* @__PURE__ */ re.jsxs(
          "button",
          {
            className: Rn.sidebarItemInHeader,
            onClick: () => y("leverage-loops"),
            "aria-label": "Leverage Loops",
            children: [
              /* @__PURE__ */ re.jsx("span", { className: Rn.sidebarIcon, children: /* @__PURE__ */ re.jsx("img", { src: mD, alt: "Leverage Loops", width: 18, height: 18 }) }),
              /* @__PURE__ */ re.jsx("span", { className: Rn.sidebarLabel, children: "Leverage Loops" })
            ]
          }
        ),
        /* @__PURE__ */ re.jsx(
          "button",
          {
            className: Rn.plusButton,
            onClick: () => V("leverage-loops"),
            "aria-label": "Expand Leverage Loops",
            children: /* @__PURE__ */ re.jsx("span", { className: `${Rn.plusIcon} ${h.has("leverage-loops") ? Rn.rotated : ""}`, children: "+" })
          }
        )
      ] }),
      h.has("leverage-loops") && /* @__PURE__ */ re.jsx(
        iD,
        {
          contentType: "leverage-loops",
          items: m,
          selectedItem: k ?? null,
          onItemSelect: $,
          isLoading: L,
          error: b
        }
      )
    ] })
  ] }) });
}, gD = "_composerContainer_1dqbd_1", SD = "_composer_1dqbd_1", _D = "_inputWrapper_1dqbd_15", CD = "_input_1dqbd_15", ED = "_actions_1dqbd_40", RD = "_leftActions_1dqbd_47", bD = "_rightActions_1dqbd_48", TD = "_actionButton_1dqbd_54", xD = "_sendButton_1dqbd_75", wD = "_active_1dqbd_92", Bi = {
  composerContainer: gD,
  composer: SD,
  inputWrapper: _D,
  input: CD,
  actions: ED,
  leftActions: RD,
  rightActions: bD,
  actionButton: TD,
  sendButton: xD,
  active: wD
}, kD = ({
  onSend: v,
  disabled: y = !1,
  placeholder: m = "Ask anything..",
  initialValue: R = ""
}) => {
  const [L, b] = Ct.useState(R), h = Ct.useRef(null);
  Ct.useEffect(() => {
    R && (b(R), setTimeout(() => h.current?.focus(), 0));
  }, [R]), Ct.useEffect(() => {
    const T = h.current;
    T && (T.style.height = "auto", T.style.height = `${Math.min(T.scrollHeight, 200)}px`);
  }, [L]);
  const j = (T) => {
    T?.preventDefault(), L.trim() && !y && (v(L.trim()), b(""));
  }, k = (T) => {
    T.key === "Enter" && !T.shiftKey && (T.preventDefault(), j());
  };
  return /* @__PURE__ */ re.jsx("div", { className: Bi.composerContainer, children: /* @__PURE__ */ re.jsxs("form", { onSubmit: j, className: Bi.composer, children: [
    /* @__PURE__ */ re.jsx("div", { className: Bi.inputWrapper, children: /* @__PURE__ */ re.jsx(
      "textarea",
      {
        ref: h,
        value: L,
        onChange: (T) => b(T.target.value),
        onKeyDown: k,
        placeholder: m,
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
}, DD = "_messageContainer_tnxih_1", OD = "_user_tnxih_6", LD = "_assistant_tnxih_9", MD = "_userMessage_tnxih_23", ND = "_assistantMessage_tnxih_38", AD = "_textContent_tnxih_45", UD = "_streamingIndicator_tnxih_50", hc = {
  messageContainer: DD,
  user: OD,
  assistant: LD,
  userMessage: MD,
  assistantMessage: ND,
  textContent: AD,
  streamingIndicator: UD
}, jD = ({
  message: v,
  // These props are available for custom Gen UI components
  onAction: y,
  onUpdateMessage: m
}) => {
  const R = v.role === "user", L = v.role === "assistant", b = () => /* @__PURE__ */ re.jsx("div", { className: hc.textContent, children: v.content || (v.isStreaming ? "" : "No response") });
  return /* @__PURE__ */ re.jsx(
    "div",
    {
      className: `${hc.messageContainer} ${R ? hc.user : hc.assistant}`,
      children: R ? /* @__PURE__ */ re.jsx("div", { className: hc.userMessage, children: /* @__PURE__ */ re.jsx("p", { children: v.content }) }) : L ? /* @__PURE__ */ re.jsxs("div", { className: hc.assistantMessage, children: [
        v.isStreaming && !v.content && /* @__PURE__ */ re.jsxs("div", { className: hc.streamingIndicator, children: [
          /* @__PURE__ */ re.jsx("span", {}),
          /* @__PURE__ */ re.jsx("span", {}),
          /* @__PURE__ */ re.jsx("span", {})
        ] }),
        b()
      ] }) : null
    }
  );
}, zD = "_overlay_271nu_1", FD = "_modal_271nu_21", PD = "_header_271nu_42", VD = "_closeButton_271nu_55", HD = "_selectedInfo_271nu_77", ID = "_inputGroup_271nu_99", BD = "_actions_271nu_130", $D = "_cancelBtn_271nu_136", WD = "_confirmBtn_271nu_137", eu = {
  overlay: zD,
  modal: FD,
  header: PD,
  closeButton: VD,
  selectedInfo: HD,
  inputGroup: ID,
  actions: BD,
  cancelBtn: $D,
  confirmBtn: WD
}, YD = ({
  isOpen: v,
  onClose: y,
  humanFriendlyMessage: m,
  llmFriendlyMessage: R,
  onConfirm: L
}) => {
  const [b, h] = Ct.useState(R);
  if (Ct.useEffect(() => {
    h(R);
  }, [R]), Ct.useEffect(() => {
    const k = (T) => {
      T.key === "Escape" && y();
    };
    if (v)
      return window.addEventListener("keydown", k), () => window.removeEventListener("keydown", k);
  }, [v, y]), !v) return null;
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
        /* @__PURE__ */ re.jsx("p", { children: m })
      ] }),
      /* @__PURE__ */ re.jsxs("div", { className: eu.inputGroup, children: [
        /* @__PURE__ */ re.jsx("label", { htmlFor: "editMessage", children: "Edit message before sending:" }),
        /* @__PURE__ */ re.jsx(
          "textarea",
          {
            id: "editMessage",
            value: b,
            onChange: (k) => h(k.target.value),
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
}, QD = "_chatContainer_1fe7s_1", GD = "_header_1fe7s_9", qD = "_messagesContainer_1fe7s_23", KD = "_emptyState_1fe7s_42", py = {
  chatContainer: QD,
  header: GD,
  messagesContainer: qD,
  emptyState: KD
}, XD = "https://xh2o-yths-38lt.n7c.xano.io/api:Et3oQAtI", BE = () => `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, $E = ({
  agentName: v = "Copilot"
}) => {
  const [y, m] = Ct.useState([]), [R, L] = Ct.useState(!1), [b] = Ct.useState(() => `thread-${Date.now()}`), [h, j] = Ct.useState(!1), [k, T] = Ct.useState(null), V = Ct.useRef(null);
  Ct.useEffect(() => {
    V.current?.scrollIntoView({ behavior: "smooth" });
  }, [y]);
  const $ = Ct.useCallback(
    async (pe) => {
      if (!pe.trim() || R) return;
      const Ne = {
        id: BE(),
        role: "user",
        content: pe.trim(),
        timestamp: /* @__PURE__ */ new Date()
      };
      m((Ee) => [...Ee, Ne]), L(!0);
      const ge = BE(), Se = {
        id: ge,
        role: "assistant",
        content: "",
        timestamp: /* @__PURE__ */ new Date(),
        isStreaming: !0
      };
      m((Ee) => [...Ee, Se]);
      try {
        const Ee = await fetch(`${XD}/api/chat`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            prompt: {
              role: "user",
              content: pe.trim(),
              id: Ne.id
            },
            threadId: b,
            responseId: ge
          })
        });
        if (!Ee.ok)
          throw new Error(`API error: ${Ee.status}`);
        const he = Ee.body?.getReader(), Qe = new TextDecoder();
        let Ve = "";
        if (he)
          for (; ; ) {
            const { done: Ie, value: Xe } = await he.read();
            if (Ie) break;
            const lt = Qe.decode(Xe, { stream: !0 });
            Ve += lt, m(
              (ut) => ut.map(
                (K) => K.id === ge ? { ...K, content: Ve } : K
              )
            );
          }
        m(
          (Ie) => Ie.map(
            (Xe) => Xe.id === ge ? { ...Xe, isStreaming: !1 } : Xe
          )
        );
      } catch (Ee) {
        console.error("Failed to send message:", Ee), m(
          (he) => he.map(
            (Qe) => Qe.id === ge ? {
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
  ), Q = Ct.useCallback(
    (pe) => {
      switch (console.log("Action received:", pe), pe.type) {
        case "continue_conversation":
          if (pe.params) {
            const { humanFriendlyMessage: Ne, llmFriendlyMessage: ge } = pe.params;
            Ne && ge && (T({
              humanFriendlyMessage: Ne,
              llmFriendlyMessage: ge
            }), j(!0));
          }
          break;
        case "open_url":
          pe.params?.url && window.open(pe.params.url, "_blank", "noopener,noreferrer");
          break;
        default:
          console.log("Unhandled action type:", pe.type);
      }
    },
    []
  ), G = Ct.useCallback((pe, Ne) => {
    m(
      (ge) => ge.map((Se) => Se.id === pe ? { ...Se, content: Ne } : Se)
    );
  }, []), ve = Ct.useCallback(
    (pe) => {
      j(!1), T(null), $(pe);
    },
    [$]
  ), ue = Ct.useCallback(() => {
    j(!1), T(null);
  }, []);
  return /* @__PURE__ */ re.jsxs("div", { className: py.chatContainer, children: [
    /* @__PURE__ */ re.jsx("div", { className: py.header, children: /* @__PURE__ */ re.jsx("h1", { children: v }) }),
    /* @__PURE__ */ re.jsxs("div", { className: py.messagesContainer, children: [
      y.length === 0 ? /* @__PURE__ */ re.jsx("div", { className: py.emptyState, children: /* @__PURE__ */ re.jsxs("p", { children: [
        "Start a conversation with ",
        v
      ] }) }) : y.map((pe) => /* @__PURE__ */ re.jsx(
        jD,
        {
          message: pe,
          onAction: Q,
          onUpdateMessage: (Ne) => G(pe.id, Ne)
        },
        pe.id
      )),
      /* @__PURE__ */ re.jsx("div", { ref: V })
    ] }),
    /* @__PURE__ */ re.jsx(kD, { onSend: $, disabled: R }),
    k && /* @__PURE__ */ re.jsx(
      YD,
      {
        isOpen: h,
        onClose: ue,
        humanFriendlyMessage: k.humanFriendlyMessage,
        llmFriendlyMessage: k.llmFriendlyMessage,
        onConfirm: ve
      }
    )
  ] });
}, JD = "_container_83jbb_1", ZD = "_content_83jbb_10", eO = "_title_83jbb_15", tO = "_description_83jbb_22", Zu = {
  container: JD,
  content: ZD,
  title: eO,
  description: tO
}, nO = () => /* @__PURE__ */ re.jsx("div", { className: Zu.container, children: /* @__PURE__ */ re.jsxs("div", { className: Zu.content, children: [
  /* @__PURE__ */ re.jsx("h1", { className: Zu.title, children: "Outcomes" }),
  /* @__PURE__ */ re.jsx("p", { className: Zu.description, children: "Manage and track your project outcomes here." })
] }) }), rO = () => /* @__PURE__ */ re.jsx("div", { className: Zu.container, children: /* @__PURE__ */ re.jsxs("div", { className: Zu.content, children: [
  /* @__PURE__ */ re.jsx("h1", { className: Zu.title, children: "Leverage Loops" }),
  /* @__PURE__ */ re.jsx("p", { className: Zu.description, children: "Create and manage leverage loops for your workflow." })
] }) }), aO = "_app_rj7hb_1", iO = "_mainContent_rj7hb_11", WE = {
  app: aO,
  mainContent: iO
}, oO = ({
  agentName: v = "Copilot",
  logoUrl: y
}) => {
  const [m, R] = Ct.useState("copilot"), L = () => {
    switch (m) {
      case "copilot":
        return /* @__PURE__ */ re.jsx($E, { agentName: v, logoUrl: y });
      case "outcomes":
        return /* @__PURE__ */ re.jsx(nO, {});
      case "leverage-loops":
        return /* @__PURE__ */ re.jsx(rO, {});
      default:
        return /* @__PURE__ */ re.jsx($E, { agentName: v, logoUrl: y });
    }
  };
  return /* @__PURE__ */ re.jsxs("div", { className: WE.app, children: [
    /* @__PURE__ */ re.jsx(
      yD,
      {
        activeSection: m,
        onSectionChange: R
      }
    ),
    /* @__PURE__ */ re.jsx("main", { className: WE.mainContent, children: L() })
  ] });
};
var vy = { exports: {} }, Qa = {}, hy = { exports: {} }, VS = {};
var YE;
function lO() {
  return YE || (YE = 1, (function(v) {
    function y(te, Oe) {
      var me = te.length;
      te.push(Oe);
      e: for (; 0 < me; ) {
        var U = me - 1 >>> 1, X = te[U];
        if (0 < L(X, Oe)) te[U] = Oe, te[me] = X, me = U;
        else break e;
      }
    }
    function m(te) {
      return te.length === 0 ? null : te[0];
    }
    function R(te) {
      if (te.length === 0) return null;
      var Oe = te[0], me = te.pop();
      if (me !== Oe) {
        te[0] = me;
        e: for (var U = 0, X = te.length, Je = X >>> 1; U < Je; ) {
          var je = 2 * (U + 1) - 1, ht = te[je], tt = je + 1, Le = te[tt];
          if (0 > L(ht, me)) tt < X && 0 > L(Le, ht) ? (te[U] = Le, te[tt] = me, U = tt) : (te[U] = ht, te[je] = me, U = je);
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
      v.unstable_now = function() {
        return b.now();
      };
    } else {
      var h = Date, j = h.now();
      v.unstable_now = function() {
        return h.now() - j;
      };
    }
    var k = [], T = [], V = 1, $ = null, Q = 3, G = !1, ve = !1, ue = !1, pe = typeof setTimeout == "function" ? setTimeout : null, Ne = typeof clearTimeout == "function" ? clearTimeout : null, ge = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Se(te) {
      for (var Oe = m(T); Oe !== null; ) {
        if (Oe.callback === null) R(T);
        else if (Oe.startTime <= te) R(T), Oe.sortIndex = Oe.expirationTime, y(k, Oe);
        else break;
        Oe = m(T);
      }
    }
    function Ee(te) {
      if (ue = !1, Se(te), !ve) if (m(k) !== null) ve = !0, we(he);
      else {
        var Oe = m(T);
        Oe !== null && _e(Ee, Oe.startTime - te);
      }
    }
    function he(te, Oe) {
      ve = !1, ue && (ue = !1, Ne(Ie), Ie = -1), G = !0;
      var me = Q;
      try {
        for (Se(Oe), $ = m(k); $ !== null && (!($.expirationTime > Oe) || te && !ut()); ) {
          var U = $.callback;
          if (typeof U == "function") {
            $.callback = null, Q = $.priorityLevel;
            var X = U($.expirationTime <= Oe);
            Oe = v.unstable_now(), typeof X == "function" ? $.callback = X : $ === m(k) && R(k), Se(Oe);
          } else R(k);
          $ = m(k);
        }
        if ($ !== null) var Je = !0;
        else {
          var je = m(T);
          je !== null && _e(Ee, je.startTime - Oe), Je = !1;
        }
        return Je;
      } finally {
        $ = null, Q = me, G = !1;
      }
    }
    var Qe = !1, Ve = null, Ie = -1, Xe = 5, lt = -1;
    function ut() {
      return !(v.unstable_now() - lt < Xe);
    }
    function K() {
      if (Ve !== null) {
        var te = v.unstable_now();
        lt = te;
        var Oe = !0;
        try {
          Oe = Ve(!0, te);
        } finally {
          Oe ? ee() : (Qe = !1, Ve = null);
        }
      } else Qe = !1;
    }
    var ee;
    if (typeof ge == "function") ee = function() {
      ge(K);
    };
    else if (typeof MessageChannel < "u") {
      var be = new MessageChannel(), He = be.port2;
      be.port1.onmessage = K, ee = function() {
        He.postMessage(null);
      };
    } else ee = function() {
      pe(K, 0);
    };
    function we(te) {
      Ve = te, Qe || (Qe = !0, ee());
    }
    function _e(te, Oe) {
      Ie = pe(function() {
        te(v.unstable_now());
      }, Oe);
    }
    v.unstable_IdlePriority = 5, v.unstable_ImmediatePriority = 1, v.unstable_LowPriority = 4, v.unstable_NormalPriority = 3, v.unstable_Profiling = null, v.unstable_UserBlockingPriority = 2, v.unstable_cancelCallback = function(te) {
      te.callback = null;
    }, v.unstable_continueExecution = function() {
      ve || G || (ve = !0, we(he));
    }, v.unstable_forceFrameRate = function(te) {
      0 > te || 125 < te ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Xe = 0 < te ? Math.floor(1e3 / te) : 5;
    }, v.unstable_getCurrentPriorityLevel = function() {
      return Q;
    }, v.unstable_getFirstCallbackNode = function() {
      return m(k);
    }, v.unstable_next = function(te) {
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
    }, v.unstable_pauseExecution = function() {
    }, v.unstable_requestPaint = function() {
    }, v.unstable_runWithPriority = function(te, Oe) {
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
    }, v.unstable_scheduleCallback = function(te, Oe, me) {
      var U = v.unstable_now();
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
      return X = me + X, te = { id: V++, callback: Oe, priorityLevel: te, startTime: me, expirationTime: X, sortIndex: -1 }, me > U ? (te.sortIndex = me, y(T, te), m(k) === null && te === m(T) && (ue ? (Ne(Ie), Ie = -1) : ue = !0, _e(Ee, me - U))) : (te.sortIndex = X, y(k, te), ve || G || (ve = !0, we(he))), te;
    }, v.unstable_shouldYield = ut, v.unstable_wrapCallback = function(te) {
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
var QE;
function uO() {
  return QE || (QE = 1, (function(v) {
    process.env.NODE_ENV !== "production" && (function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var y = !1, m = 5;
      function R(Ce, Ge) {
        var bt = Ce.length;
        Ce.push(Ge), h(Ce, Ge, bt);
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
      function h(Ce, Ge, bt) {
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
          var cn = (Wt + 1) * 2 - 1, Zn = Ce[cn], on = cn + 1, qt = Ce[on];
          if (k(Zn, Ge) < 0)
            on < an && k(qt, Zn) < 0 ? (Ce[Wt] = qt, Ce[on] = Ge, Wt = on) : (Ce[Wt] = Zn, Ce[cn] = Ge, Wt = cn);
          else if (on < an && k(qt, Ge) < 0)
            Ce[Wt] = qt, Ce[on] = Ge, Wt = on;
          else
            return;
        }
      }
      function k(Ce, Ge) {
        var bt = Ce.sortIndex - Ge.sortIndex;
        return bt !== 0 ? bt : Ce.id - Ge.id;
      }
      var T = 1, V = 2, $ = 3, Q = 4, G = 5;
      function ve(Ce, Ge) {
      }
      var ue = typeof performance == "object" && typeof performance.now == "function";
      if (ue) {
        var pe = performance;
        v.unstable_now = function() {
          return pe.now();
        };
      } else {
        var Ne = Date, ge = Ne.now();
        v.unstable_now = function() {
          return Ne.now() - ge;
        };
      }
      var Se = 1073741823, Ee = -1, he = 250, Qe = 5e3, Ve = 1e4, Ie = Se, Xe = [], lt = [], ut = 1, K = null, ee = $, be = !1, He = !1, we = !1, _e = typeof setTimeout == "function" ? setTimeout : null, te = typeof clearTimeout == "function" ? clearTimeout : null, Oe = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function me(Ce) {
        for (var Ge = L(lt); Ge !== null; ) {
          if (Ge.callback === null)
            b(lt);
          else if (Ge.startTime <= Ce)
            b(lt), Ge.sortIndex = Ge.expirationTime, R(Xe, Ge);
          else
            return;
          Ge = L(lt);
        }
      }
      function U(Ce) {
        if (we = !1, me(Ce), !He)
          if (L(Xe) !== null)
            He = !0, An(X);
          else {
            var Ge = L(lt);
            Ge !== null && Er(U, Ge.startTime - Ce);
          }
      }
      function X(Ce, Ge) {
        He = !1, we && (we = !1, va()), be = !0;
        var bt = ee;
        try {
          var Wt;
          if (!y) return Je(Ce, Ge);
        } finally {
          K = null, ee = bt, be = !1;
        }
      }
      function Je(Ce, Ge) {
        var bt = Ge;
        for (me(bt), K = L(Xe); K !== null && !(K.expirationTime > bt && (!Ce || vi())); ) {
          var Wt = K.callback;
          if (typeof Wt == "function") {
            K.callback = null, ee = K.priorityLevel;
            var an = K.expirationTime <= bt, mn = Wt(an);
            bt = v.unstable_now(), typeof mn == "function" ? K.callback = mn : K === L(Xe) && b(Xe), me(bt);
          } else
            b(Xe);
          K = L(Xe);
        }
        if (K !== null)
          return !0;
        var cn = L(lt);
        return cn !== null && Er(U, cn.startTime - bt), !1;
      }
      function je(Ce, Ge) {
        switch (Ce) {
          case T:
          case V:
          case $:
          case Q:
          case G:
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
          case V:
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
        var Wt = v.unstable_now(), an;
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
          case V:
            cn = he;
            break;
          case G:
            cn = Ie;
            break;
          case Q:
            cn = Ve;
            break;
          case $:
          default:
            cn = Qe;
            break;
        }
        var Zn = an + cn, on = {
          id: ut++,
          callback: Ge,
          priorityLevel: Ce,
          startTime: an,
          expirationTime: Zn,
          sortIndex: -1
        };
        return an > Wt ? (on.sortIndex = an, R(lt, on), L(Xe) === null && on === L(lt) && (we ? va() : we = !0, Er(U, an - Wt))) : (on.sortIndex = Zn, R(Xe, on), !He && !be && (He = !0, An(X))), on;
      }
      function st() {
      }
      function dt() {
        !He && !be && (He = !0, An(X));
      }
      function Gt() {
        return L(Xe);
      }
      function Nn(Ce) {
        Ce.callback = null;
      }
      function kr() {
        return ee;
      }
      var bn = !1, ir = null, $n = -1, Wn = m, qr = -1;
      function vi() {
        var Ce = v.unstable_now() - qr;
        return !(Ce < Wn);
      }
      function pa() {
      }
      function Jn(Ce) {
        if (Ce < 0 || Ce > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Ce > 0 ? Wn = Math.floor(1e3 / Ce) : Wn = m;
      }
      var Tn = function() {
        if (ir !== null) {
          var Ce = v.unstable_now();
          qr = Ce;
          var Ge = !0, bt = !0;
          try {
            bt = ir(Ge, Ce);
          } finally {
            bt ? Yn() : (bn = !1, ir = null);
          }
        } else
          bn = !1;
      }, Yn;
      if (typeof Oe == "function")
        Yn = function() {
          Oe(Tn);
        };
      else if (typeof MessageChannel < "u") {
        var Cr = new MessageChannel(), qa = Cr.port2;
        Cr.port1.onmessage = Tn, Yn = function() {
          qa.postMessage(null);
        };
      } else
        Yn = function() {
          _e(Tn, 0);
        };
      function An(Ce) {
        ir = Ce, bn || (bn = !0, Yn());
      }
      function Er(Ce, Ge) {
        $n = _e(function() {
          Ce(v.unstable_now());
        }, Ge);
      }
      function va() {
        te($n), $n = -1;
      }
      var Ka = pa, hi = null;
      v.unstable_IdlePriority = G, v.unstable_ImmediatePriority = T, v.unstable_LowPriority = Q, v.unstable_NormalPriority = $, v.unstable_Profiling = hi, v.unstable_UserBlockingPriority = V, v.unstable_cancelCallback = Nn, v.unstable_continueExecution = dt, v.unstable_forceFrameRate = Jn, v.unstable_getCurrentPriorityLevel = kr, v.unstable_getFirstCallbackNode = Gt, v.unstable_next = ht, v.unstable_pauseExecution = st, v.unstable_requestPaint = Ka, v.unstable_runWithPriority = je, v.unstable_scheduleCallback = Le, v.unstable_shouldYield = vi, v.unstable_wrapCallback = tt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  })(HS)), HS;
}
var GE;
function p2() {
  return GE || (GE = 1, process.env.NODE_ENV === "production" ? hy.exports = lO() : hy.exports = uO()), hy.exports;
}
var qE;
function sO() {
  if (qE) return Qa;
  qE = 1;
  var v = yv(), y = p2();
  function m(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++) r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var R = /* @__PURE__ */ new Set(), L = {};
  function b(n, r) {
    h(n, r), h(n + "Capture", r);
  }
  function h(n, r) {
    for (L[n] = r, n = 0; n < r.length; n++) R.add(r[n]);
  }
  var j = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), k = Object.prototype.hasOwnProperty, T = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, V = {}, $ = {};
  function Q(n) {
    return k.call($, n) ? !0 : k.call(V, n) ? !1 : T.test(n) ? $[n] = !0 : (V[n] = !0, !1);
  }
  function G(n, r, o, u) {
    if (o !== null && o.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return u ? !1 : o !== null ? !o.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function ve(n, r, o, u) {
    if (r === null || typeof r > "u" || G(n, r, o, u)) return !0;
    if (u) return !1;
    if (o !== null) switch (o.type) {
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
  function ue(n, r, o, u, c, d, _) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = c, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = _;
  }
  var pe = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    pe[n] = new ue(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    pe[r] = new ue(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    pe[n] = new ue(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    pe[n] = new ue(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    pe[n] = new ue(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    pe[n] = new ue(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    pe[n] = new ue(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    pe[n] = new ue(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    pe[n] = new ue(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Ne = /[\-:]([a-z])/g;
  function ge(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Ne,
      ge
    );
    pe[r] = new ue(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Ne, ge);
    pe[r] = new ue(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Ne, ge);
    pe[r] = new ue(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    pe[n] = new ue(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), pe.xlinkHref = new ue("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    pe[n] = new ue(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Se(n, r, o, u) {
    var c = pe.hasOwnProperty(r) ? pe[r] : null;
    (c !== null ? c.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ve(r, o, c, u) && (o = null), u || c === null ? Q(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : c.mustUseProperty ? n[c.propertyName] = o === null ? c.type === 3 ? !1 : "" : o : (r = c.attributeName, u = c.attributeNamespace, o === null ? n.removeAttribute(r) : (c = c.type, o = c === 3 || c === 4 && o === !0 ? "" : "" + o, u ? n.setAttributeNS(u, r, o) : n.setAttribute(r, o))));
  }
  var Ee = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, he = /* @__PURE__ */ Symbol.for("react.element"), Qe = /* @__PURE__ */ Symbol.for("react.portal"), Ve = /* @__PURE__ */ Symbol.for("react.fragment"), Ie = /* @__PURE__ */ Symbol.for("react.strict_mode"), Xe = /* @__PURE__ */ Symbol.for("react.profiler"), lt = /* @__PURE__ */ Symbol.for("react.provider"), ut = /* @__PURE__ */ Symbol.for("react.context"), K = /* @__PURE__ */ Symbol.for("react.forward_ref"), ee = /* @__PURE__ */ Symbol.for("react.suspense"), be = /* @__PURE__ */ Symbol.for("react.suspense_list"), He = /* @__PURE__ */ Symbol.for("react.memo"), we = /* @__PURE__ */ Symbol.for("react.lazy"), _e = /* @__PURE__ */ Symbol.for("react.offscreen"), te = Symbol.iterator;
  function Oe(n) {
    return n === null || typeof n != "object" ? null : (n = te && n[te] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var me = Object.assign, U;
  function X(n) {
    if (U === void 0) try {
      throw Error();
    } catch (o) {
      var r = o.stack.trim().match(/\n( *(at )?)/);
      U = r && r[1] || "";
    }
    return `
` + U + n;
  }
  var Je = !1;
  function je(n, r) {
    if (!n || Je) return "";
    Je = !0;
    var o = Error.prepareStackTrace;
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
      Je = !1, Error.prepareStackTrace = o;
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
        return n = je(n.type, !1), n;
      case 11:
        return n = je(n.type.render, !1), n;
      case 1:
        return n = je(n.type, !0), n;
      default:
        return "";
    }
  }
  function tt(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Ve:
        return "Fragment";
      case Qe:
        return "Portal";
      case Xe:
        return "Profiler";
      case Ie:
        return "StrictMode";
      case ee:
        return "Suspense";
      case be:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case ut:
        return (n.displayName || "Context") + ".Consumer";
      case lt:
        return (n._context.displayName || "Context") + ".Provider";
      case K:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case He:
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
        return r === Ie ? "StrictMode" : "Mode";
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
    var r = dt(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), u = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var c = o.get, d = o.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(_) {
        u = "" + _, d.call(this, _);
      } }), Object.defineProperty(n, r, { enumerable: o.enumerable }), { getValue: function() {
        return u;
      }, setValue: function(_) {
        u = "" + _;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Nn(n) {
    n._valueTracker || (n._valueTracker = Gt(n));
  }
  function kr(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var o = r.getValue(), u = "";
    return n && (u = dt(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== o ? (r.setValue(n), !0) : !1;
  }
  function bn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function ir(n, r) {
    var o = r.checked;
    return me({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function $n(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    o = st(r.value != null ? r.value : o), n._wrapperState = { initialChecked: u, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Wn(n, r) {
    r = r.checked, r != null && Se(n, "checked", r, !1);
  }
  function qr(n, r) {
    Wn(n, r);
    var o = st(r.value), u = r.type;
    if (o != null) u === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? pa(n, r.type, o) : r.hasOwnProperty("defaultValue") && pa(n, r.type, st(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function vi(n, r, o) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var u = r.type;
      if (!(u !== "submit" && u !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, o || r === n.value || (n.value = r), n.defaultValue = r;
    }
    o = n.name, o !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, o !== "" && (n.name = o);
  }
  function pa(n, r, o) {
    (r !== "number" || bn(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o));
  }
  var Jn = Array.isArray;
  function Tn(n, r, o, u) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < o.length; c++) r["$" + o[c]] = !0;
      for (o = 0; o < n.length; o++) c = r.hasOwnProperty("$" + n[o].value), n[o].selected !== c && (n[o].selected = c), c && u && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + st(o), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === o) {
          n[c].selected = !0, u && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Yn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(m(91));
    return me({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Cr(n, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null) throw Error(m(92));
        if (Jn(o)) {
          if (1 < o.length) throw Error(m(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), o = r;
    }
    n._wrapperState = { initialValue: st(o) };
  }
  function qa(n, r) {
    var o = st(r.value), u = st(r.defaultValue);
    o != null && (o = "" + o, o !== n.value && (n.value = o), r.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), u != null && (n.defaultValue = "" + u);
  }
  function An(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Er(n) {
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
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Er(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Ka, hi = (function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, o, u, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, o, u, c);
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
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
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
  function Wt(n, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || Ge.hasOwnProperty(n) && Ge[n] ? ("" + r).trim() : r + "px";
  }
  function an(n, r) {
    n = n.style;
    for (var o in r) if (r.hasOwnProperty(o)) {
      var u = o.indexOf("--") === 0, c = Wt(o, r[o], u);
      o === "float" && (o = "cssFloat"), u ? n.setProperty(o, c) : n[o] = c;
    }
  }
  var mn = me({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function cn(n, r) {
    if (r) {
      if (mn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(m(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(m(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(m(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(m(62));
    }
  }
  function Zn(n, r) {
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
  var on = null;
  function qt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Kt = null, ha = null, Rr = null;
  function ka(n) {
    if (n = Ze(n)) {
      if (typeof Kt != "function") throw Error(m(280));
      var r = n.stateNode;
      r && (r = gn(r), Kt(n.stateNode, n.type, r));
    }
  }
  function Wi(n) {
    ha ? Rr ? Rr.push(n) : Rr = [n] : ha = n;
  }
  function ol() {
    if (ha) {
      var n = ha, r = Rr;
      if (Rr = ha = null, ka(n), r) for (n = 0; n < r.length; n++) ka(r[n]);
    }
  }
  function ll(n, r) {
    return n(r);
  }
  function _o() {
  }
  var Co = !1;
  function ul(n, r, o) {
    if (Co) return n(r, o);
    Co = !0;
    try {
      return ll(n, r, o);
    } finally {
      Co = !1, (ha !== null || Rr !== null) && (_o(), ol());
    }
  }
  function Dr(n, r) {
    var o = n.stateNode;
    if (o === null) return null;
    var u = gn(o);
    if (u === null) return null;
    o = u[r];
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
    if (o && typeof o != "function") throw Error(m(231, r, typeof o));
    return o;
  }
  var Or = !1;
  if (j) try {
    var or = {};
    Object.defineProperty(or, "passive", { get: function() {
      Or = !0;
    } }), window.addEventListener("test", or, or), window.removeEventListener("test", or, or);
  } catch {
    Or = !1;
  }
  function mi(n, r, o, u, c, d, _, x, O) {
    var W = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, W);
    } catch (se) {
      this.onError(se);
    }
  }
  var Xa = !1, yi = null, gi = !1, D = null, ae = { onError: function(n) {
    Xa = !0, yi = n;
  } };
  function xe(n, r, o, u, c, d, _, x, O) {
    Xa = !1, yi = null, mi.apply(ae, arguments);
  }
  function Pe(n, r, o, u, c, d, _, x, O) {
    if (xe.apply(this, arguments), Xa) {
      if (Xa) {
        var W = yi;
        Xa = !1, yi = null;
      } else throw Error(m(198));
      gi || (gi = !0, D = W);
    }
  }
  function St(n) {
    var r = n, o = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, (r.flags & 4098) !== 0 && (o = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? o : null;
  }
  function mt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function kt(n) {
    if (St(n) !== n) throw Error(m(188));
  }
  function xt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = St(n), r === null) throw Error(m(188));
      return r !== n ? null : n;
    }
    for (var o = n, u = r; ; ) {
      var c = o.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (u = c.return, u !== null) {
          o = u;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === o) return kt(c), n;
          if (d === u) return kt(c), r;
          d = d.sibling;
        }
        throw Error(m(188));
      }
      if (o.return !== u.return) o = c, u = d;
      else {
        for (var _ = !1, x = c.child; x; ) {
          if (x === o) {
            _ = !0, o = c, u = d;
            break;
          }
          if (x === u) {
            _ = !0, u = c, o = d;
            break;
          }
          x = x.sibling;
        }
        if (!_) {
          for (x = d.child; x; ) {
            if (x === o) {
              _ = !0, o = d, u = c;
              break;
            }
            if (x === u) {
              _ = !0, u = d, o = c;
              break;
            }
            x = x.sibling;
          }
          if (!_) throw Error(m(189));
        }
      }
      if (o.alternate !== u) throw Error(m(190));
    }
    if (o.tag !== 3) throw Error(m(188));
    return o.stateNode.current === o ? n : r;
  }
  function xn(n) {
    return n = xt(n), n !== null ? ln(n) : null;
  }
  function ln(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = ln(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var fn = y.unstable_scheduleCallback, lr = y.unstable_cancelCallback, Ja = y.unstable_shouldYield, Za = y.unstable_requestPaint, _t = y.unstable_now, Rt = y.unstable_getCurrentPriorityLevel, ei = y.unstable_ImmediatePriority, sl = y.unstable_UserBlockingPriority, cl = y.unstable_NormalPriority, Eo = y.unstable_LowPriority, nu = y.unstable_IdlePriority, Ro = null, Kr = null;
  function es(n) {
    if (Kr && typeof Kr.onCommitFiberRoot == "function") try {
      Kr.onCommitFiberRoot(Ro, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Lr = Math.clz32 ? Math.clz32 : ru, Sc = Math.log, _c = Math.LN2;
  function ru(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Sc(n) / _c | 0) | 0;
  }
  var bo = 64, ma = 4194304;
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
    var o = n.pendingLanes;
    if (o === 0) return 0;
    var u = 0, c = n.suspendedLanes, d = n.pingedLanes, _ = o & 268435455;
    if (_ !== 0) {
      var x = _ & ~c;
      x !== 0 ? u = ti(x) : (d &= _, d !== 0 && (u = ti(d)));
    } else _ = o & ~c, _ !== 0 ? u = ti(_) : d !== 0 && (u = ti(d));
    if (u === 0) return 0;
    if (r !== 0 && r !== u && (r & c) === 0 && (c = u & -u, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if ((u & 4) !== 0 && (u |= o & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= u; 0 < r; ) o = 31 - Lr(r), c = 1 << o, u |= n[o], r &= ~c;
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
  function fl(n, r) {
    for (var o = n.suspendedLanes, u = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var _ = 31 - Lr(d), x = 1 << _, O = c[_];
      O === -1 ? ((x & o) === 0 || (x & u) !== 0) && (c[_] = au(x, r)) : O <= r && (n.expiredLanes |= x), d &= ~x;
    }
  }
  function To(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function iu() {
    var n = bo;
    return bo <<= 1, (bo & 4194240) === 0 && (bo = 64), n;
  }
  function ou(n) {
    for (var r = [], o = 0; 31 > o; o++) r.push(n);
    return r;
  }
  function Yi(n, r, o) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Lr(r), n[r] = o;
  }
  function ud(n, r) {
    var o = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var u = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var c = 31 - Lr(o), d = 1 << c;
      r[c] = 0, u[c] = -1, n[c] = -1, o &= ~d;
    }
  }
  function Qi(n, r) {
    var o = n.entangledLanes |= r;
    for (n = n.entanglements; o; ) {
      var u = 31 - Lr(o), c = 1 << u;
      c & r | n[u] & r && (n[u] |= r), o &= ~c;
    }
  }
  var Pt = 0;
  function lu(n) {
    return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var jt, ts, Si, vt, uu, ur = !1, _i = [], Mr = null, Ci = null, dn = null, Xt = /* @__PURE__ */ new Map(), xo = /* @__PURE__ */ new Map(), Qn = [], Nr = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
        xo.delete(r.pointerId);
    }
  }
  function dl(n, r, o, u, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: o, eventSystemFlags: u, nativeEvent: d, targetContainers: [c] }, r !== null && (r = Ze(r), r !== null && ts(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function ns(n, r, o, u, c) {
    switch (r) {
      case "focusin":
        return Mr = dl(Mr, n, r, o, u, c), !0;
      case "dragenter":
        return Ci = dl(Ci, n, r, o, u, c), !0;
      case "mouseover":
        return dn = dl(dn, n, r, o, u, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Xt.set(d, dl(Xt.get(d) || null, n, r, o, u, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, xo.set(d, dl(xo.get(d) || null, n, r, o, u, c)), !0;
    }
    return !1;
  }
  function rs(n) {
    var r = Cl(n.target);
    if (r !== null) {
      var o = St(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = mt(o), r !== null) {
            n.blockedOn = r, uu(n.priority, function() {
              Si(o);
            });
            return;
          }
        } else if (r === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function wo(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var o = fu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var u = new o.constructor(o.type, o);
        on = u, o.target.dispatchEvent(u), on = null;
      } else return r = Ze(o), r !== null && ts(r), n.blockedOn = o, !1;
      r.shift();
    }
    return !0;
  }
  function pl(n, r, o) {
    wo(n) && o.delete(r);
  }
  function sd() {
    ur = !1, Mr !== null && wo(Mr) && (Mr = null), Ci !== null && wo(Ci) && (Ci = null), dn !== null && wo(dn) && (dn = null), Xt.forEach(pl), xo.forEach(pl);
  }
  function Oa(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ur || (ur = !0, y.unstable_scheduleCallback(y.unstable_NormalPriority, sd)));
  }
  function ri(n) {
    function r(c) {
      return Oa(c, n);
    }
    if (0 < _i.length) {
      Oa(_i[0], n);
      for (var o = 1; o < _i.length; o++) {
        var u = _i[o];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (Mr !== null && Oa(Mr, n), Ci !== null && Oa(Ci, n), dn !== null && Oa(dn, n), Xt.forEach(r), xo.forEach(r), o = 0; o < Qn.length; o++) u = Qn[o], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < Qn.length && (o = Qn[0], o.blockedOn === null); ) rs(o), o.blockedOn === null && Qn.shift();
  }
  var Ei = Ee.ReactCurrentBatchConfig, La = !0;
  function su(n, r, o, u) {
    var c = Pt, d = Ei.transition;
    Ei.transition = null;
    try {
      Pt = 1, ko(n, r, o, u);
    } finally {
      Pt = c, Ei.transition = d;
    }
  }
  function cu(n, r, o, u) {
    var c = Pt, d = Ei.transition;
    Ei.transition = null;
    try {
      Pt = 4, ko(n, r, o, u);
    } finally {
      Pt = c, Ei.transition = d;
    }
  }
  function ko(n, r, o, u) {
    if (La) {
      var c = fu(n, r, o, u);
      if (c === null) Mc(n, r, u, vl, o), Da(n, u);
      else if (ns(c, n, r, o, u)) u.stopPropagation();
      else if (Da(n, u), r & 4 && -1 < Nr.indexOf(n)) {
        for (; c !== null; ) {
          var d = Ze(c);
          if (d !== null && jt(d), d = fu(n, r, o, u), d === null && Mc(n, r, u, vl, o), d === c) break;
          c = d;
        }
        c !== null && u.stopPropagation();
      } else Mc(n, r, u, null, o);
    }
  }
  var vl = null;
  function fu(n, r, o, u) {
    if (vl = null, n = qt(u), n = Cl(n), n !== null) if (r = St(n), r === null) n = null;
    else if (o = r.tag, o === 13) {
      if (n = mt(r), n !== null) return n;
      n = null;
    } else if (o === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return vl = n, null;
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
          case sl:
            return 4;
          case cl:
          case Eo:
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
    var n, r = S, o = r.length, u, c = "value" in ai ? ai.value : ai.textContent, d = c.length;
    for (n = 0; n < o && r[n] === c[n]; n++) ;
    var _ = o - n;
    for (u = 1; u <= _ && r[o - u] === c[d - u]; u++) ;
    return w = c.slice(n, 1 < u ? 1 - u : void 0);
  }
  function q(n) {
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
    function r(o, u, c, d, _) {
      this._reactName = o, this._targetInst = c, this.type = u, this.nativeEvent = d, this.target = _, this.currentTarget = null;
      for (var x in n) n.hasOwnProperty(x) && (o = n[x], this[x] = o ? o(d) : d[x]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? ye : nt, this.isPropagationStopped = nt, this;
    }
    return me(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = ye);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = ye);
    }, persist: function() {
    }, isPersistent: ye }), r;
  }
  var it = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Dt = Te(it), zt = me({}, it, { view: 0, detail: 0 }), un = Te(zt), Jt, Tt, Zt, yn = me({}, zt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: vd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Zt && (Zt && n.type === "mousemove" ? (Jt = n.screenX - Zt.screenX, Tt = n.screenY - Zt.screenY) : Tt = Jt = 0, Zt = n), Jt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Tt;
  } }), Do = Te(yn), as = me({}, yn, { dataTransfer: 0 }), Gi = Te(as), is = me({}, zt, { relatedTarget: 0 }), hl = Te(is), cd = me({}, it, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Cc = Te(cd), fd = me({}, it, { clipboardData: function(n) {
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
    return n.type === "keypress" ? (n = q(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Ev[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: vd, charCode: function(n) {
    return n.type === "keypress" ? q(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? q(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), md = Te(hd), yd = me({}, yn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Rv = Te(yd), Ec = me({}, zt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: vd }), bv = Te(Ec), Xr = me({}, it, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ki = Te(Xr), Un = me({}, yn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Xi = Te(Un), gd = [9, 13, 27, 32], pu = j && "CompositionEvent" in window, os = null;
  j && "documentMode" in document && (os = document.documentMode);
  var ls = j && "TextEvent" in window && !os, Tv = j && (!pu || os && 8 < os && 11 >= os), xv = " ", Rc = !1;
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
        return r.which !== 32 ? null : (Rc = !0, xv);
      case "textInput":
        return n = r.data, n === xv && Rc ? null : n;
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
  function Sd(n, r, o, u) {
    Wi(u), r = ps(r, "onChange"), 0 < r.length && (o = new Dt("onChange", "change", null, o, u), n.push({ event: o, listeners: r }));
  }
  var Ri = null, ml = null;
  function Lv(n) {
    Sl(n, 0);
  }
  function us(n) {
    var r = oi(n);
    if (kr(r)) return n;
  }
  function wy(n, r) {
    if (n === "change") return r;
  }
  var Mv = !1;
  if (j) {
    var _d;
    if (j) {
      var Cd = "oninput" in document;
      if (!Cd) {
        var Nv = document.createElement("div");
        Nv.setAttribute("oninput", "return;"), Cd = typeof Nv.oninput == "function";
      }
      _d = Cd;
    } else _d = !1;
    Mv = _d && (!document.documentMode || 9 < document.documentMode);
  }
  function Av() {
    Ri && (Ri.detachEvent("onpropertychange", Uv), ml = Ri = null);
  }
  function Uv(n) {
    if (n.propertyName === "value" && us(ml)) {
      var r = [];
      Sd(r, ml, n, qt(n)), ul(Lv, r);
    }
  }
  function ky(n, r, o) {
    n === "focusin" ? (Av(), Ri = r, ml = o, Ri.attachEvent("onpropertychange", Uv)) : n === "focusout" && Av();
  }
  function jv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return us(ml);
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
    var o = Object.keys(n), u = Object.keys(r);
    if (o.length !== u.length) return !1;
    for (u = 0; u < o.length; u++) {
      var c = o[u];
      if (!k.call(r, c) || !ii(n[c], r[c])) return !1;
    }
    return !0;
  }
  function Fv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function bc(n, r) {
    var o = Fv(n);
    n = 0;
    for (var u; o; ) {
      if (o.nodeType === 3) {
        if (u = n + o.textContent.length, n <= r && u >= r) return { node: o, offset: r - n };
        n = u;
      }
      e: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break e;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = Fv(o);
    }
  }
  function Oo(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Oo(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function cs() {
    for (var n = window, r = bn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o) n = r.contentWindow;
      else break;
      r = bn(n.document);
    }
    return r;
  }
  function Tc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function hu(n) {
    var r = cs(), o = n.focusedElem, u = n.selectionRange;
    if (r !== o && o && o.ownerDocument && Oo(o.ownerDocument.documentElement, o)) {
      if (u !== null && Tc(o)) {
        if (r = u.start, n = u.end, n === void 0 && (n = r), "selectionStart" in o) o.selectionStart = r, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (r = o.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = o.textContent.length, d = Math.min(u.start, c);
          u = u.end === void 0 ? d : Math.min(u.end, c), !n.extend && d > u && (c = u, u = d, d = c), c = bc(o, d);
          var _ = bc(
            o,
            u
          );
          c && _ && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== _.node || n.focusOffset !== _.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > u ? (n.addRange(r), n.extend(_.node, _.offset)) : (r.setEnd(_.node, _.offset), n.addRange(r)));
        }
      }
      for (r = [], n = o; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < r.length; o++) n = r[o], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Ly = j && "documentMode" in document && 11 >= document.documentMode, mu = null, Ed = null, fs = null, Rd = !1;
  function bd(n, r, o) {
    var u = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    Rd || mu == null || mu !== bn(u) || (u = mu, "selectionStart" in u && Tc(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), fs && ss(fs, u) || (fs = u, u = ps(Ed, "onSelect"), 0 < u.length && (r = new Dt("onSelect", "select", null, r, o), n.push({ event: r, listeners: u }), r.target = mu)));
  }
  function xc(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var yl = { animationend: xc("Animation", "AnimationEnd"), animationiteration: xc("Animation", "AnimationIteration"), animationstart: xc("Animation", "AnimationStart"), transitionend: xc("Transition", "TransitionEnd") }, sr = {}, Td = {};
  j && (Td = document.createElement("div").style, "AnimationEvent" in window || (delete yl.animationend.animation, delete yl.animationiteration.animation, delete yl.animationstart.animation), "TransitionEvent" in window || delete yl.transitionend.transition);
  function wc(n) {
    if (sr[n]) return sr[n];
    if (!yl[n]) return n;
    var r = yl[n], o;
    for (o in r) if (r.hasOwnProperty(o) && o in Td) return sr[n] = r[o];
    return n;
  }
  var Pv = wc("animationend"), Vv = wc("animationiteration"), Hv = wc("animationstart"), Iv = wc("transitionend"), xd = /* @__PURE__ */ new Map(), kc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ma(n, r) {
    xd.set(n, r), b(r, [n]);
  }
  for (var wd = 0; wd < kc.length; wd++) {
    var gl = kc[wd], My = gl.toLowerCase(), Ny = gl[0].toUpperCase() + gl.slice(1);
    Ma(My, "on" + Ny);
  }
  Ma(Pv, "onAnimationEnd"), Ma(Vv, "onAnimationIteration"), Ma(Hv, "onAnimationStart"), Ma("dblclick", "onDoubleClick"), Ma("focusin", "onFocus"), Ma("focusout", "onBlur"), Ma(Iv, "onTransitionEnd"), h("onMouseEnter", ["mouseout", "mouseover"]), h("onMouseLeave", ["mouseout", "mouseover"]), h("onPointerEnter", ["pointerout", "pointerover"]), h("onPointerLeave", ["pointerout", "pointerover"]), b("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), b("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), b("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), b("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), b("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), b("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ds = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), kd = new Set("cancel close invalid load scroll toggle".split(" ").concat(ds));
  function Dc(n, r, o) {
    var u = n.type || "unknown-event";
    n.currentTarget = o, Pe(u, r, void 0, n), n.currentTarget = null;
  }
  function Sl(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var u = n[o], c = u.event;
      u = u.listeners;
      e: {
        var d = void 0;
        if (r) for (var _ = u.length - 1; 0 <= _; _--) {
          var x = u[_], O = x.instance, W = x.currentTarget;
          if (x = x.listener, O !== d && c.isPropagationStopped()) break e;
          Dc(c, x, W), d = O;
        }
        else for (_ = 0; _ < u.length; _++) {
          if (x = u[_], O = x.instance, W = x.currentTarget, x = x.listener, O !== d && c.isPropagationStopped()) break e;
          Dc(c, x, W), d = O;
        }
      }
    }
    if (gi) throw n = D, gi = !1, D = null, n;
  }
  function Yt(n, r) {
    var o = r[ms];
    o === void 0 && (o = r[ms] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    o.has(u) || (Bv(r, n, 2, !1), o.add(u));
  }
  function Oc(n, r, o) {
    var u = 0;
    r && (u |= 4), Bv(o, n, u, r);
  }
  var Lc = "_reactListening" + Math.random().toString(36).slice(2);
  function yu(n) {
    if (!n[Lc]) {
      n[Lc] = !0, R.forEach(function(o) {
        o !== "selectionchange" && (kd.has(o) || Oc(o, !1, n), Oc(o, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Lc] || (r[Lc] = !0, Oc("selectionchange", !1, r));
    }
  }
  function Bv(n, r, o, u) {
    switch (du(r)) {
      case 1:
        var c = su;
        break;
      case 4:
        c = cu;
        break;
      default:
        c = ko;
    }
    o = c.bind(null, r, o, n), c = void 0, !Or || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), u ? c !== void 0 ? n.addEventListener(r, o, { capture: !0, passive: c }) : n.addEventListener(r, o, !0) : c !== void 0 ? n.addEventListener(r, o, { passive: c }) : n.addEventListener(r, o, !1);
  }
  function Mc(n, r, o, u, c) {
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
          if (_ = Cl(x), _ === null) return;
          if (O = _.tag, O === 5 || O === 6) {
            u = d = _;
            continue e;
          }
          x = x.parentNode;
        }
      }
      u = u.return;
    }
    ul(function() {
      var W = d, se = qt(o), fe = [];
      e: {
        var le = xd.get(n);
        if (le !== void 0) {
          var Ae = Dt, Be = n;
          switch (n) {
            case "keypress":
              if (q(o) === 0) break e;
            case "keydown":
            case "keyup":
              Ae = md;
              break;
            case "focusin":
              Be = "focus", Ae = hl;
              break;
            case "focusout":
              Be = "blur", Ae = hl;
              break;
            case "beforeblur":
            case "afterblur":
              Ae = hl;
              break;
            case "click":
              if (o.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Ae = Do;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Ae = Gi;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Ae = bv;
              break;
            case Pv:
            case Vv:
            case Hv:
              Ae = Cc;
              break;
            case Iv:
              Ae = Ki;
              break;
            case "scroll":
              Ae = un;
              break;
            case "wheel":
              Ae = Xi;
              break;
            case "copy":
            case "cut":
            case "paste":
              Ae = _v;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Ae = Rv;
          }
          var Ye = (r & 4) !== 0, Ln = !Ye && n === "scroll", z = Ye ? le !== null ? le + "Capture" : null : le;
          Ye = [];
          for (var N = W, H; N !== null; ) {
            H = N;
            var ce = H.stateNode;
            if (H.tag === 5 && ce !== null && (H = ce, z !== null && (ce = Dr(N, z), ce != null && Ye.push(gu(N, ce, H)))), Ln) break;
            N = N.return;
          }
          0 < Ye.length && (le = new Ae(le, Be, null, o, se), fe.push({ event: le, listeners: Ye }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (le = n === "mouseover" || n === "pointerover", Ae = n === "mouseout" || n === "pointerout", le && o !== on && (Be = o.relatedTarget || o.fromElement) && (Cl(Be) || Be[Ji])) break e;
          if ((Ae || le) && (le = se.window === se ? se : (le = se.ownerDocument) ? le.defaultView || le.parentWindow : window, Ae ? (Be = o.relatedTarget || o.toElement, Ae = W, Be = Be ? Cl(Be) : null, Be !== null && (Ln = St(Be), Be !== Ln || Be.tag !== 5 && Be.tag !== 6) && (Be = null)) : (Ae = null, Be = W), Ae !== Be)) {
            if (Ye = Do, ce = "onMouseLeave", z = "onMouseEnter", N = "mouse", (n === "pointerout" || n === "pointerover") && (Ye = Rv, ce = "onPointerLeave", z = "onPointerEnter", N = "pointer"), Ln = Ae == null ? le : oi(Ae), H = Be == null ? le : oi(Be), le = new Ye(ce, N + "leave", Ae, o, se), le.target = Ln, le.relatedTarget = H, ce = null, Cl(se) === W && (Ye = new Ye(z, N + "enter", Be, o, se), Ye.target = H, Ye.relatedTarget = Ln, ce = Ye), Ln = ce, Ae && Be) t: {
              for (Ye = Ae, z = Be, N = 0, H = Ye; H; H = Lo(H)) N++;
              for (H = 0, ce = z; ce; ce = Lo(ce)) H++;
              for (; 0 < N - H; ) Ye = Lo(Ye), N--;
              for (; 0 < H - N; ) z = Lo(z), H--;
              for (; N--; ) {
                if (Ye === z || z !== null && Ye === z.alternate) break t;
                Ye = Lo(Ye), z = Lo(z);
              }
              Ye = null;
            }
            else Ye = null;
            Ae !== null && $v(fe, le, Ae, Ye, !1), Be !== null && Ln !== null && $v(fe, Ln, Be, Ye, !0);
          }
        }
        e: {
          if (le = W ? oi(W) : window, Ae = le.nodeName && le.nodeName.toLowerCase(), Ae === "select" || Ae === "input" && le.type === "file") var $e = wy;
          else if (Ov(le)) if (Mv) $e = zv;
          else {
            $e = jv;
            var at = ky;
          }
          else (Ae = le.nodeName) && Ae.toLowerCase() === "input" && (le.type === "checkbox" || le.type === "radio") && ($e = Dy);
          if ($e && ($e = $e(n, W))) {
            Sd(fe, $e, o, se);
            break e;
          }
          at && at(n, le, W), n === "focusout" && (at = le._wrapperState) && at.controlled && le.type === "number" && pa(le, "number", le.value);
        }
        switch (at = W ? oi(W) : window, n) {
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
            Rd = !1, bd(fe, o, se);
            break;
          case "selectionchange":
            if (Ly) break;
          case "keydown":
          case "keyup":
            bd(fe, o, se);
        }
        var ot;
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
        else vu ? wv(n, o) && (pt = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (pt = "onCompositionStart");
        pt && (Tv && o.locale !== "ko" && (vu || pt !== "onCompositionStart" ? pt === "onCompositionEnd" && vu && (ot = B()) : (ai = se, S = "value" in ai ? ai.value : ai.textContent, vu = !0)), at = ps(W, pt), 0 < at.length && (pt = new pd(pt, n, null, o, se), fe.push({ event: pt, listeners: at }), ot ? pt.data = ot : (ot = kv(o), ot !== null && (pt.data = ot)))), (ot = ls ? Dv(n, o) : Ty(n, o)) && (W = ps(W, "onBeforeInput"), 0 < W.length && (se = new pd("onBeforeInput", "beforeinput", null, o, se), fe.push({ event: se, listeners: W }), se.data = ot));
      }
      Sl(fe, r);
    });
  }
  function gu(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function ps(n, r) {
    for (var o = r + "Capture", u = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = Dr(n, o), d != null && u.unshift(gu(n, d, c)), d = Dr(n, r), d != null && u.push(gu(n, d, c))), n = n.return;
    }
    return u;
  }
  function Lo(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function $v(n, r, o, u, c) {
    for (var d = r._reactName, _ = []; o !== null && o !== u; ) {
      var x = o, O = x.alternate, W = x.stateNode;
      if (O !== null && O === u) break;
      x.tag === 5 && W !== null && (x = W, c ? (O = Dr(o, d), O != null && _.unshift(gu(o, O, x))) : c || (O = Dr(o, d), O != null && _.push(gu(o, O, x)))), o = o.return;
    }
    _.length !== 0 && n.push({ event: r, listeners: _ });
  }
  var Wv = /\r\n?/g, Ay = /\u0000|\uFFFD/g;
  function Yv(n) {
    return (typeof n == "string" ? n : "" + n).replace(Wv, `
`).replace(Ay, "");
  }
  function Nc(n, r, o) {
    if (r = Yv(r), Yv(n) !== r && o) throw Error(m(425));
  }
  function Mo() {
  }
  var vs = null, _l = null;
  function Ac(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Uc = typeof setTimeout == "function" ? setTimeout : void 0, Dd = typeof clearTimeout == "function" ? clearTimeout : void 0, Qv = typeof Promise == "function" ? Promise : void 0, Su = typeof queueMicrotask == "function" ? queueMicrotask : typeof Qv < "u" ? function(n) {
    return Qv.resolve(null).then(n).catch(jc);
  } : Uc;
  function jc(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function _u(n, r) {
    var o = r, u = 0;
    do {
      var c = o.nextSibling;
      if (n.removeChild(o), c && c.nodeType === 8) if (o = c.data, o === "/$") {
        if (u === 0) {
          n.removeChild(c), ri(r);
          return;
        }
        u--;
      } else o !== "$" && o !== "$?" && o !== "$!" || u++;
      o = c;
    } while (o);
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
        var o = n.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (r === 0) return n;
          r--;
        } else o === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var No = Math.random().toString(36).slice(2), Ti = "__reactFiber$" + No, hs = "__reactProps$" + No, Ji = "__reactContainer$" + No, ms = "__reactEvents$" + No, Cu = "__reactListeners$" + No, Uy = "__reactHandles$" + No;
  function Cl(n) {
    var r = n[Ti];
    if (r) return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[Ji] || o[Ti]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null) for (n = Gv(n); n !== null; ) {
          if (o = n[Ti]) return o;
          n = Gv(n);
        }
        return r;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function Ze(n) {
    return n = n[Ti] || n[Ji], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function oi(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(m(33));
  }
  function gn(n) {
    return n[hs] || null;
  }
  var Mt = [], Na = -1;
  function Aa(n) {
    return { current: n };
  }
  function sn(n) {
    0 > Na || (n.current = Mt[Na], Mt[Na] = null, Na--);
  }
  function Ke(n, r) {
    Na++, Mt[Na] = n.current, n.current = r;
  }
  var br = {}, En = Aa(br), Gn = Aa(!1), Jr = br;
  function Zr(n, r) {
    var o = n.type.contextTypes;
    if (!o) return br;
    var u = n.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r) return u.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in o) c[d] = r[d];
    return u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function jn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Eu() {
    sn(Gn), sn(En);
  }
  function qv(n, r, o) {
    if (En.current !== br) throw Error(m(168));
    Ke(En, r), Ke(Gn, o);
  }
  function ys(n, r, o) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function") return o;
    u = u.getChildContext();
    for (var c in u) if (!(c in r)) throw Error(m(108, Le(n) || "Unknown", c));
    return me({}, o, u);
  }
  function er(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || br, Jr = En.current, Ke(En, n), Ke(Gn, Gn.current), !0;
  }
  function zc(n, r, o) {
    var u = n.stateNode;
    if (!u) throw Error(m(169));
    o ? (n = ys(n, r, Jr), u.__reactInternalMemoizedMergedChildContext = n, sn(Gn), sn(En), Ke(En, n)) : sn(Gn), Ke(Gn, o);
  }
  var xi = null, Ru = !1, Zi = !1;
  function Fc(n) {
    xi === null ? xi = [n] : xi.push(n);
  }
  function Ao(n) {
    Ru = !0, Fc(n);
  }
  function wi() {
    if (!Zi && xi !== null) {
      Zi = !0;
      var n = 0, r = Pt;
      try {
        var o = xi;
        for (Pt = 1; n < o.length; n++) {
          var u = o[n];
          do
            u = u(!0);
          while (u !== null);
        }
        xi = null, Ru = !1;
      } catch (c) {
        throw xi !== null && (xi = xi.slice(n + 1)), fn(ei, wi), c;
      } finally {
        Pt = r, Zi = !1;
      }
    }
    return null;
  }
  var Uo = [], jo = 0, zo = null, eo = 0, zn = [], Ua = 0, ya = null, ki = 1, Di = "";
  function El(n, r) {
    Uo[jo++] = eo, Uo[jo++] = zo, zo = n, eo = r;
  }
  function Kv(n, r, o) {
    zn[Ua++] = ki, zn[Ua++] = Di, zn[Ua++] = ya, ya = n;
    var u = ki;
    n = Di;
    var c = 32 - Lr(u) - 1;
    u &= ~(1 << c), o += 1;
    var d = 32 - Lr(r) + c;
    if (30 < d) {
      var _ = c - c % 5;
      d = (u & (1 << _) - 1).toString(32), u >>= _, c -= _, ki = 1 << 32 - Lr(r) + c | o << c | u, Di = d + n;
    } else ki = 1 << d | o << c | u, Di = n;
  }
  function Pc(n) {
    n.return !== null && (El(n, 1), Kv(n, 1, 0));
  }
  function Vc(n) {
    for (; n === zo; ) zo = Uo[--jo], Uo[jo] = null, eo = Uo[--jo], Uo[jo] = null;
    for (; n === ya; ) ya = zn[--Ua], zn[Ua] = null, Di = zn[--Ua], zn[Ua] = null, ki = zn[--Ua], zn[Ua] = null;
  }
  var ea = null, ta = null, vn = !1, ja = null;
  function Od(n, r) {
    var o = Ha(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function Xv(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, ea = n, ta = bi(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, ea = n, ta = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = ya !== null ? { id: ki, overflow: Di } : null, n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = Ha(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, ea = n, ta = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ld(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Md(n) {
    if (vn) {
      var r = ta;
      if (r) {
        var o = r;
        if (!Xv(n, r)) {
          if (Ld(n)) throw Error(m(418));
          r = bi(o.nextSibling);
          var u = ea;
          r && Xv(n, r) ? Od(u, o) : (n.flags = n.flags & -4097 | 2, vn = !1, ea = n);
        }
      } else {
        if (Ld(n)) throw Error(m(418));
        n.flags = n.flags & -4097 | 2, vn = !1, ea = n;
      }
    }
  }
  function qn(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    ea = n;
  }
  function Hc(n) {
    if (n !== ea) return !1;
    if (!vn) return qn(n), vn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Ac(n.type, n.memoizedProps)), r && (r = ta)) {
      if (Ld(n)) throw gs(), Error(m(418));
      for (; r; ) Od(n, r), r = bi(r.nextSibling);
    }
    if (qn(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(m(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === "/$") {
              if (r === 0) {
                ta = bi(n.nextSibling);
                break e;
              }
              r--;
            } else o !== "$" && o !== "$!" && o !== "$?" || r++;
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
  function Fo() {
    ta = ea = null, vn = !1;
  }
  function to(n) {
    ja === null ? ja = [n] : ja.push(n);
  }
  var jy = Ee.ReactCurrentBatchConfig;
  function Rl(n, r, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1) throw Error(m(309));
          var u = o.stateNode;
        }
        if (!u) throw Error(m(147, n));
        var c = u, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(_) {
          var x = c.refs;
          _ === null ? delete x[d] : x[d] = _;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(m(284));
      if (!o._owner) throw Error(m(290, n));
    }
    return n;
  }
  function Ic(n, r) {
    throw n = Object.prototype.toString.call(r), Error(m(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Jv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function bl(n) {
    function r(z, N) {
      if (n) {
        var H = z.deletions;
        H === null ? (z.deletions = [N], z.flags |= 16) : H.push(N);
      }
    }
    function o(z, N) {
      if (!n) return null;
      for (; N !== null; ) r(z, N), N = N.sibling;
      return null;
    }
    function u(z, N) {
      for (z = /* @__PURE__ */ new Map(); N !== null; ) N.key !== null ? z.set(N.key, N) : z.set(N.index, N), N = N.sibling;
      return z;
    }
    function c(z, N) {
      return z = Yo(z, N), z.index = 0, z.sibling = null, z;
    }
    function d(z, N, H) {
      return z.index = H, n ? (H = z.alternate, H !== null ? (H = H.index, H < N ? (z.flags |= 2, N) : H) : (z.flags |= 2, N)) : (z.flags |= 1048576, N);
    }
    function _(z) {
      return n && z.alternate === null && (z.flags |= 2), z;
    }
    function x(z, N, H, ce) {
      return N === null || N.tag !== 6 ? (N = sp(H, z.mode, ce), N.return = z, N) : (N = c(N, H), N.return = z, N);
    }
    function O(z, N, H, ce) {
      var $e = H.type;
      return $e === Ve ? se(z, N, H.props.children, ce, H.key) : N !== null && (N.elementType === $e || typeof $e == "object" && $e !== null && $e.$$typeof === we && Jv($e) === N.type) ? (ce = c(N, H.props), ce.ref = Rl(z, N, H), ce.return = z, ce) : (ce = Gs(H.type, H.key, H.props, null, z.mode, ce), ce.ref = Rl(z, N, H), ce.return = z, ce);
    }
    function W(z, N, H, ce) {
      return N === null || N.tag !== 4 || N.stateNode.containerInfo !== H.containerInfo || N.stateNode.implementation !== H.implementation ? (N = Ef(H, z.mode, ce), N.return = z, N) : (N = c(N, H.children || []), N.return = z, N);
    }
    function se(z, N, H, ce, $e) {
      return N === null || N.tag !== 7 ? (N = lo(H, z.mode, ce, $e), N.return = z, N) : (N = c(N, H), N.return = z, N);
    }
    function fe(z, N, H) {
      if (typeof N == "string" && N !== "" || typeof N == "number") return N = sp("" + N, z.mode, H), N.return = z, N;
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case he:
            return H = Gs(N.type, N.key, N.props, null, z.mode, H), H.ref = Rl(z, null, N), H.return = z, H;
          case Qe:
            return N = Ef(N, z.mode, H), N.return = z, N;
          case we:
            var ce = N._init;
            return fe(z, ce(N._payload), H);
        }
        if (Jn(N) || Oe(N)) return N = lo(N, z.mode, H, null), N.return = z, N;
        Ic(z, N);
      }
      return null;
    }
    function le(z, N, H, ce) {
      var $e = N !== null ? N.key : null;
      if (typeof H == "string" && H !== "" || typeof H == "number") return $e !== null ? null : x(z, N, "" + H, ce);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case he:
            return H.key === $e ? O(z, N, H, ce) : null;
          case Qe:
            return H.key === $e ? W(z, N, H, ce) : null;
          case we:
            return $e = H._init, le(
              z,
              N,
              $e(H._payload),
              ce
            );
        }
        if (Jn(H) || Oe(H)) return $e !== null ? null : se(z, N, H, ce, null);
        Ic(z, H);
      }
      return null;
    }
    function Ae(z, N, H, ce, $e) {
      if (typeof ce == "string" && ce !== "" || typeof ce == "number") return z = z.get(H) || null, x(N, z, "" + ce, $e);
      if (typeof ce == "object" && ce !== null) {
        switch (ce.$$typeof) {
          case he:
            return z = z.get(ce.key === null ? H : ce.key) || null, O(N, z, ce, $e);
          case Qe:
            return z = z.get(ce.key === null ? H : ce.key) || null, W(N, z, ce, $e);
          case we:
            var at = ce._init;
            return Ae(z, N, H, at(ce._payload), $e);
        }
        if (Jn(ce) || Oe(ce)) return z = z.get(H) || null, se(N, z, ce, $e, null);
        Ic(N, ce);
      }
      return null;
    }
    function Be(z, N, H, ce) {
      for (var $e = null, at = null, ot = N, pt = N = 0, rr = null; ot !== null && pt < H.length; pt++) {
        ot.index > pt ? (rr = ot, ot = null) : rr = ot.sibling;
        var It = le(z, ot, H[pt], ce);
        if (It === null) {
          ot === null && (ot = rr);
          break;
        }
        n && ot && It.alternate === null && r(z, ot), N = d(It, N, pt), at === null ? $e = It : at.sibling = It, at = It, ot = rr;
      }
      if (pt === H.length) return o(z, ot), vn && El(z, pt), $e;
      if (ot === null) {
        for (; pt < H.length; pt++) ot = fe(z, H[pt], ce), ot !== null && (N = d(ot, N, pt), at === null ? $e = ot : at.sibling = ot, at = ot);
        return vn && El(z, pt), $e;
      }
      for (ot = u(z, ot); pt < H.length; pt++) rr = Ae(ot, z, pt, H[pt], ce), rr !== null && (n && rr.alternate !== null && ot.delete(rr.key === null ? pt : rr.key), N = d(rr, N, pt), at === null ? $e = rr : at.sibling = rr, at = rr);
      return n && ot.forEach(function(qo) {
        return r(z, qo);
      }), vn && El(z, pt), $e;
    }
    function Ye(z, N, H, ce) {
      var $e = Oe(H);
      if (typeof $e != "function") throw Error(m(150));
      if (H = $e.call(H), H == null) throw Error(m(151));
      for (var at = $e = null, ot = N, pt = N = 0, rr = null, It = H.next(); ot !== null && !It.done; pt++, It = H.next()) {
        ot.index > pt ? (rr = ot, ot = null) : rr = ot.sibling;
        var qo = le(z, ot, It.value, ce);
        if (qo === null) {
          ot === null && (ot = rr);
          break;
        }
        n && ot && qo.alternate === null && r(z, ot), N = d(qo, N, pt), at === null ? $e = qo : at.sibling = qo, at = qo, ot = rr;
      }
      if (It.done) return o(
        z,
        ot
      ), vn && El(z, pt), $e;
      if (ot === null) {
        for (; !It.done; pt++, It = H.next()) It = fe(z, It.value, ce), It !== null && (N = d(It, N, pt), at === null ? $e = It : at.sibling = It, at = It);
        return vn && El(z, pt), $e;
      }
      for (ot = u(z, ot); !It.done; pt++, It = H.next()) It = Ae(ot, z, pt, It.value, ce), It !== null && (n && It.alternate !== null && ot.delete(It.key === null ? pt : It.key), N = d(It, N, pt), at === null ? $e = It : at.sibling = It, at = It);
      return n && ot.forEach(function(Ah) {
        return r(z, Ah);
      }), vn && El(z, pt), $e;
    }
    function Ln(z, N, H, ce) {
      if (typeof H == "object" && H !== null && H.type === Ve && H.key === null && (H = H.props.children), typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case he:
            e: {
              for (var $e = H.key, at = N; at !== null; ) {
                if (at.key === $e) {
                  if ($e = H.type, $e === Ve) {
                    if (at.tag === 7) {
                      o(z, at.sibling), N = c(at, H.props.children), N.return = z, z = N;
                      break e;
                    }
                  } else if (at.elementType === $e || typeof $e == "object" && $e !== null && $e.$$typeof === we && Jv($e) === at.type) {
                    o(z, at.sibling), N = c(at, H.props), N.ref = Rl(z, at, H), N.return = z, z = N;
                    break e;
                  }
                  o(z, at);
                  break;
                } else r(z, at);
                at = at.sibling;
              }
              H.type === Ve ? (N = lo(H.props.children, z.mode, ce, H.key), N.return = z, z = N) : (ce = Gs(H.type, H.key, H.props, null, z.mode, ce), ce.ref = Rl(z, N, H), ce.return = z, z = ce);
            }
            return _(z);
          case Qe:
            e: {
              for (at = H.key; N !== null; ) {
                if (N.key === at) if (N.tag === 4 && N.stateNode.containerInfo === H.containerInfo && N.stateNode.implementation === H.implementation) {
                  o(z, N.sibling), N = c(N, H.children || []), N.return = z, z = N;
                  break e;
                } else {
                  o(z, N);
                  break;
                }
                else r(z, N);
                N = N.sibling;
              }
              N = Ef(H, z.mode, ce), N.return = z, z = N;
            }
            return _(z);
          case we:
            return at = H._init, Ln(z, N, at(H._payload), ce);
        }
        if (Jn(H)) return Be(z, N, H, ce);
        if (Oe(H)) return Ye(z, N, H, ce);
        Ic(z, H);
      }
      return typeof H == "string" && H !== "" || typeof H == "number" ? (H = "" + H, N !== null && N.tag === 6 ? (o(z, N.sibling), N = c(N, H), N.return = z, z = N) : (o(z, N), N = sp(H, z.mode, ce), N.return = z, z = N), _(z)) : o(z, N);
    }
    return Ln;
  }
  var wn = bl(!0), ke = bl(!1), ga = Aa(null), na = null, bu = null, Nd = null;
  function Ad() {
    Nd = bu = na = null;
  }
  function Ud(n) {
    var r = ga.current;
    sn(ga), n._currentValue = r;
  }
  function jd(n, r, o) {
    for (; n !== null; ) {
      var u = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), n === o) break;
      n = n.return;
    }
  }
  function Sn(n, r) {
    na = n, Nd = bu = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & r) !== 0 && (Pn = !0), n.firstContext = null);
  }
  function za(n) {
    var r = n._currentValue;
    if (Nd !== n) if (n = { context: n, memoizedValue: r, next: null }, bu === null) {
      if (na === null) throw Error(m(308));
      bu = n, na.dependencies = { lanes: 0, firstContext: n };
    } else bu = bu.next = n;
    return r;
  }
  var Tl = null;
  function zd(n) {
    Tl === null ? Tl = [n] : Tl.push(n);
  }
  function Fd(n, r, o, u) {
    var c = r.interleaved;
    return c === null ? (o.next = o, zd(r)) : (o.next = c.next, c.next = o), r.interleaved = o, Sa(n, u);
  }
  function Sa(n, r) {
    n.lanes |= r;
    var o = n.alternate;
    for (o !== null && (o.lanes |= r), o = n, n = n.return; n !== null; ) n.childLanes |= r, o = n.alternate, o !== null && (o.childLanes |= r), o = n, n = n.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var _a = !1;
  function Pd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Zv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function no(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Po(n, r, o) {
    var u = n.updateQueue;
    if (u === null) return null;
    if (u = u.shared, (Nt & 2) !== 0) {
      var c = u.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), u.pending = r, Sa(n, o);
    }
    return c = u.interleaved, c === null ? (r.next = r, zd(u)) : (r.next = c.next, c.next = r), u.interleaved = r, Sa(n, o);
  }
  function Bc(n, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
      var u = r.lanes;
      u &= n.pendingLanes, o |= u, r.lanes = o, Qi(n, o);
    }
  }
  function eh(n, r) {
    var o = n.updateQueue, u = n.alternate;
    if (u !== null && (u = u.updateQueue, o === u)) {
      var c = null, d = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var _ = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          d === null ? c = d = _ : d = d.next = _, o = o.next;
        } while (o !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      o = { baseState: u.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: u.shared, effects: u.effects }, n.updateQueue = o;
      return;
    }
    n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = r : n.next = r, o.lastBaseUpdate = r;
  }
  function Ss(n, r, o, u) {
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
      var fe = c.baseState;
      _ = 0, se = W = O = null, x = d;
      do {
        var le = x.lane, Ae = x.eventTime;
        if ((u & le) === le) {
          se !== null && (se = se.next = {
            eventTime: Ae,
            lane: 0,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null
          });
          e: {
            var Be = n, Ye = x;
            switch (le = r, Ae = o, Ye.tag) {
              case 1:
                if (Be = Ye.payload, typeof Be == "function") {
                  fe = Be.call(Ae, fe, le);
                  break e;
                }
                fe = Be;
                break e;
              case 3:
                Be.flags = Be.flags & -65537 | 128;
              case 0:
                if (Be = Ye.payload, le = typeof Be == "function" ? Be.call(Ae, fe, le) : Be, le == null) break e;
                fe = me({}, fe, le);
                break e;
              case 2:
                _a = !0;
            }
          }
          x.callback !== null && x.lane !== 0 && (n.flags |= 64, le = c.effects, le === null ? c.effects = [x] : le.push(x));
        } else Ae = { eventTime: Ae, lane: le, tag: x.tag, payload: x.payload, callback: x.callback, next: null }, se === null ? (W = se = Ae, O = fe) : se = se.next = Ae, _ |= le;
        if (x = x.next, x === null) {
          if (x = c.shared.pending, x === null) break;
          le = x, x = le.next, le.next = null, c.lastBaseUpdate = le, c.shared.pending = null;
        }
      } while (!0);
      if (se === null && (O = fe), c.baseState = O, c.firstBaseUpdate = W, c.lastBaseUpdate = se, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          _ |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Ai |= _, n.lanes = _, n.memoizedState = fe;
    }
  }
  function Vd(n, r, o) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var u = n[r], c = u.callback;
      if (c !== null) {
        if (u.callback = null, u = o, typeof c != "function") throw Error(m(191, c));
        c.call(u);
      }
    }
  }
  var _s = {}, Oi = Aa(_s), Cs = Aa(_s), Es = Aa(_s);
  function xl(n) {
    if (n === _s) throw Error(m(174));
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
  function wl() {
    sn(Oi), sn(Cs), sn(Es);
  }
  function th(n) {
    xl(Es.current);
    var r = xl(Oi.current), o = va(r, n.type);
    r !== o && (Ke(Cs, n), Ke(Oi, o));
  }
  function $c(n) {
    Cs.current === n && (sn(Oi), sn(Cs));
  }
  var _n = Aa(0);
  function Wc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var o = r.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!")) return r;
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
  var wt = Ee.ReactCurrentDispatcher, Vt = Ee.ReactCurrentBatchConfig, en = 0, Ht = null, Fn = null, tr = null, Yc = !1, bs = !1, kl = 0, ie = 0;
  function Ft() {
    throw Error(m(321));
  }
  function ct(n, r) {
    if (r === null) return !1;
    for (var o = 0; o < r.length && o < n.length; o++) if (!ii(n[o], r[o])) return !1;
    return !0;
  }
  function Vo(n, r, o, u, c, d) {
    if (en = d, Ht = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, wt.current = n === null || n.memoizedState === null ? uf : Os, n = o(u, c), bs) {
      d = 0;
      do {
        if (bs = !1, kl = 0, 25 <= d) throw Error(m(301));
        d += 1, tr = Fn = null, r.updateQueue = null, wt.current = sf, n = o(u, c);
      } while (bs);
    }
    if (wt.current = Nl, r = Fn !== null && Fn.next !== null, en = 0, tr = Fn = Ht = null, Yc = !1, r) throw Error(m(300));
    return n;
  }
  function li() {
    var n = kl !== 0;
    return kl = 0, n;
  }
  function Tr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return tr === null ? Ht.memoizedState = tr = n : tr = tr.next = n, tr;
  }
  function kn() {
    if (Fn === null) {
      var n = Ht.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Fn.next;
    var r = tr === null ? Ht.memoizedState : tr.next;
    if (r !== null) tr = r, Fn = n;
    else {
      if (n === null) throw Error(m(310));
      Fn = n, n = { memoizedState: Fn.memoizedState, baseState: Fn.baseState, baseQueue: Fn.baseQueue, queue: Fn.queue, next: null }, tr === null ? Ht.memoizedState = tr = n : tr = tr.next = n;
    }
    return tr;
  }
  function ro(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Ho(n) {
    var r = kn(), o = r.queue;
    if (o === null) throw Error(m(311));
    o.lastRenderedReducer = n;
    var u = Fn, c = u.baseQueue, d = o.pending;
    if (d !== null) {
      if (c !== null) {
        var _ = c.next;
        c.next = d.next, d.next = _;
      }
      u.baseQueue = c = d, o.pending = null;
    }
    if (c !== null) {
      d = c.next, u = u.baseState;
      var x = _ = null, O = null, W = d;
      do {
        var se = W.lane;
        if ((en & se) === se) O !== null && (O = O.next = { lane: 0, action: W.action, hasEagerState: W.hasEagerState, eagerState: W.eagerState, next: null }), u = W.hasEagerState ? W.eagerState : n(u, W.action);
        else {
          var fe = {
            lane: se,
            action: W.action,
            hasEagerState: W.hasEagerState,
            eagerState: W.eagerState,
            next: null
          };
          O === null ? (x = O = fe, _ = u) : O = O.next = fe, Ht.lanes |= se, Ai |= se;
        }
        W = W.next;
      } while (W !== null && W !== d);
      O === null ? _ = u : O.next = x, ii(u, r.memoizedState) || (Pn = !0), r.memoizedState = u, r.baseState = _, r.baseQueue = O, o.lastRenderedState = u;
    }
    if (n = o.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, Ht.lanes |= d, Ai |= d, c = c.next;
      while (c !== n);
    } else c === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function Dl(n) {
    var r = kn(), o = r.queue;
    if (o === null) throw Error(m(311));
    o.lastRenderedReducer = n;
    var u = o.dispatch, c = o.pending, d = r.memoizedState;
    if (c !== null) {
      o.pending = null;
      var _ = c = c.next;
      do
        d = n(d, _.action), _ = _.next;
      while (_ !== c);
      ii(d, r.memoizedState) || (Pn = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), o.lastRenderedState = d;
    }
    return [d, u];
  }
  function Qc() {
  }
  function Gc(n, r) {
    var o = Ht, u = kn(), c = r(), d = !ii(u.memoizedState, c);
    if (d && (u.memoizedState = c, Pn = !0), u = u.queue, Ts(Xc.bind(null, o, u, n), [n]), u.getSnapshot !== r || d || tr !== null && tr.memoizedState.tag & 1) {
      if (o.flags |= 2048, Ol(9, Kc.bind(null, o, u, c, r), void 0, null), Kn === null) throw Error(m(349));
      (en & 30) !== 0 || qc(o, r, c);
    }
    return c;
  }
  function qc(n, r, o) {
    n.flags |= 16384, n = { getSnapshot: r, value: o }, r = Ht.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ht.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
  }
  function Kc(n, r, o, u) {
    r.value = o, r.getSnapshot = u, Jc(r) && Zc(n);
  }
  function Xc(n, r, o) {
    return o(function() {
      Jc(r) && Zc(n);
    });
  }
  function Jc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var o = r();
      return !ii(n, o);
    } catch {
      return !0;
    }
  }
  function Zc(n) {
    var r = Sa(n, 1);
    r !== null && zr(r, n, 1, -1);
  }
  function ef(n) {
    var r = Tr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ro, lastRenderedState: n }, r.queue = n, n = n.dispatch = Ml.bind(null, Ht, n), [r.memoizedState, n];
  }
  function Ol(n, r, o, u) {
    return n = { tag: n, create: r, destroy: o, deps: u, next: null }, r = Ht.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ht.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (u = o.next, o.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function tf() {
    return kn().memoizedState;
  }
  function Tu(n, r, o, u) {
    var c = Tr();
    Ht.flags |= n, c.memoizedState = Ol(1 | r, o, void 0, u === void 0 ? null : u);
  }
  function xu(n, r, o, u) {
    var c = kn();
    u = u === void 0 ? null : u;
    var d = void 0;
    if (Fn !== null) {
      var _ = Fn.memoizedState;
      if (d = _.destroy, u !== null && ct(u, _.deps)) {
        c.memoizedState = Ol(r, o, d, u);
        return;
      }
    }
    Ht.flags |= n, c.memoizedState = Ol(1 | r, o, d, u);
  }
  function nf(n, r) {
    return Tu(8390656, 8, n, r);
  }
  function Ts(n, r) {
    return xu(2048, 8, n, r);
  }
  function rf(n, r) {
    return xu(4, 2, n, r);
  }
  function xs(n, r) {
    return xu(4, 4, n, r);
  }
  function Ll(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function af(n, r, o) {
    return o = o != null ? o.concat([n]) : null, xu(4, 4, Ll.bind(null, r, n), o);
  }
  function ws() {
  }
  function of(n, r) {
    var o = kn();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && ct(r, u[1]) ? u[0] : (o.memoizedState = [n, r], n);
  }
  function lf(n, r) {
    var o = kn();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && ct(r, u[1]) ? u[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function Id(n, r, o) {
    return (en & 21) === 0 ? (n.baseState && (n.baseState = !1, Pn = !0), n.memoizedState = o) : (ii(o, r) || (o = iu(), Ht.lanes |= o, Ai |= o, n.baseState = !0), r);
  }
  function ks(n, r) {
    var o = Pt;
    Pt = o !== 0 && 4 > o ? o : 4, n(!0);
    var u = Vt.transition;
    Vt.transition = {};
    try {
      n(!1), r();
    } finally {
      Pt = o, Vt.transition = u;
    }
  }
  function Bd() {
    return kn().memoizedState;
  }
  function Ds(n, r, o) {
    var u = Ui(n);
    if (o = { lane: u, action: o, hasEagerState: !1, eagerState: null, next: null }, ra(n)) nh(r, o);
    else if (o = Fd(n, r, o, u), o !== null) {
      var c = In();
      zr(o, n, u, c), rn(o, r, u);
    }
  }
  function Ml(n, r, o) {
    var u = Ui(n), c = { lane: u, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (ra(n)) nh(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var _ = r.lastRenderedState, x = d(_, o);
        if (c.hasEagerState = !0, c.eagerState = x, ii(x, _)) {
          var O = r.interleaved;
          O === null ? (c.next = c, zd(r)) : (c.next = O.next, O.next = c), r.interleaved = c;
          return;
        }
      } catch {
      }
      o = Fd(n, r, c, u), o !== null && (c = In(), zr(o, n, u, c), rn(o, r, u));
    }
  }
  function ra(n) {
    var r = n.alternate;
    return n === Ht || r !== null && r === Ht;
  }
  function nh(n, r) {
    bs = Yc = !0;
    var o = n.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
  }
  function rn(n, r, o) {
    if ((o & 4194240) !== 0) {
      var u = r.lanes;
      u &= n.pendingLanes, o |= u, r.lanes = o, Qi(n, o);
    }
  }
  var Nl = { readContext: za, useCallback: Ft, useContext: Ft, useEffect: Ft, useImperativeHandle: Ft, useInsertionEffect: Ft, useLayoutEffect: Ft, useMemo: Ft, useReducer: Ft, useRef: Ft, useState: Ft, useDebugValue: Ft, useDeferredValue: Ft, useTransition: Ft, useMutableSource: Ft, useSyncExternalStore: Ft, useId: Ft, unstable_isNewReconciler: !1 }, uf = { readContext: za, useCallback: function(n, r) {
    return Tr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: za, useEffect: nf, useImperativeHandle: function(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Tu(
      4194308,
      4,
      Ll.bind(null, r, n),
      o
    );
  }, useLayoutEffect: function(n, r) {
    return Tu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Tu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var o = Tr();
    return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
  }, useReducer: function(n, r, o) {
    var u = Tr();
    return r = o !== void 0 ? o(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = Ds.bind(null, Ht, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = Tr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: ef, useDebugValue: ws, useDeferredValue: function(n) {
    return Tr().memoizedState = n;
  }, useTransition: function() {
    var n = ef(!1), r = n[0];
    return n = ks.bind(null, n[1]), Tr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var u = Ht, c = Tr();
    if (vn) {
      if (o === void 0) throw Error(m(407));
      o = o();
    } else {
      if (o = r(), Kn === null) throw Error(m(349));
      (en & 30) !== 0 || qc(u, r, o);
    }
    c.memoizedState = o;
    var d = { value: o, getSnapshot: r };
    return c.queue = d, nf(Xc.bind(
      null,
      u,
      d,
      n
    ), [n]), u.flags |= 2048, Ol(9, Kc.bind(null, u, d, o, r), void 0, null), o;
  }, useId: function() {
    var n = Tr(), r = Kn.identifierPrefix;
    if (vn) {
      var o = Di, u = ki;
      o = (u & ~(1 << 32 - Lr(u) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = kl++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else o = ie++, r = ":" + r + "r" + o.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Os = {
    readContext: za,
    useCallback: of,
    useContext: za,
    useEffect: Ts,
    useImperativeHandle: af,
    useInsertionEffect: rf,
    useLayoutEffect: xs,
    useMemo: lf,
    useReducer: Ho,
    useRef: tf,
    useState: function() {
      return Ho(ro);
    },
    useDebugValue: ws,
    useDeferredValue: function(n) {
      var r = kn();
      return Id(r, Fn.memoizedState, n);
    },
    useTransition: function() {
      var n = Ho(ro)[0], r = kn().memoizedState;
      return [n, r];
    },
    useMutableSource: Qc,
    useSyncExternalStore: Gc,
    useId: Bd,
    unstable_isNewReconciler: !1
  }, sf = { readContext: za, useCallback: of, useContext: za, useEffect: Ts, useImperativeHandle: af, useInsertionEffect: rf, useLayoutEffect: xs, useMemo: lf, useReducer: Dl, useRef: tf, useState: function() {
    return Dl(ro);
  }, useDebugValue: ws, useDeferredValue: function(n) {
    var r = kn();
    return Fn === null ? r.memoizedState = n : Id(r, Fn.memoizedState, n);
  }, useTransition: function() {
    var n = Dl(ro)[0], r = kn().memoizedState;
    return [n, r];
  }, useMutableSource: Qc, useSyncExternalStore: Gc, useId: Bd, unstable_isNewReconciler: !1 };
  function ui(n, r) {
    if (n && n.defaultProps) {
      r = me({}, r), n = n.defaultProps;
      for (var o in n) r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  function $d(n, r, o, u) {
    r = n.memoizedState, o = o(u, r), o = o == null ? r : me({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var cf = { isMounted: function(n) {
    return (n = n._reactInternals) ? St(n) === n : !1;
  }, enqueueSetState: function(n, r, o) {
    n = n._reactInternals;
    var u = In(), c = Ui(n), d = no(u, c);
    d.payload = r, o != null && (d.callback = o), r = Po(n, d, c), r !== null && (zr(r, n, c, u), Bc(r, n, c));
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternals;
    var u = In(), c = Ui(n), d = no(u, c);
    d.tag = 1, d.payload = r, o != null && (d.callback = o), r = Po(n, d, c), r !== null && (zr(r, n, c, u), Bc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var o = In(), u = Ui(n), c = no(o, u);
    c.tag = 2, r != null && (c.callback = r), r = Po(n, c, u), r !== null && (zr(r, n, u, o), Bc(r, n, u));
  } };
  function rh(n, r, o, u, c, d, _) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, d, _) : r.prototype && r.prototype.isPureReactComponent ? !ss(o, u) || !ss(c, d) : !0;
  }
  function ff(n, r, o) {
    var u = !1, c = br, d = r.contextType;
    return typeof d == "object" && d !== null ? d = za(d) : (c = jn(r) ? Jr : En.current, u = r.contextTypes, d = (u = u != null) ? Zr(n, c) : br), r = new r(o, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = cf, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function ah(n, r, o, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, u), r.state !== n && cf.enqueueReplaceState(r, r.state, null);
  }
  function Ls(n, r, o, u) {
    var c = n.stateNode;
    c.props = o, c.state = n.memoizedState, c.refs = {}, Pd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = za(d) : (d = jn(r) ? Jr : En.current, c.context = Zr(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && ($d(n, r, d, o), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && cf.enqueueReplaceState(c, c.state, null), Ss(n, o, c, u), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Al(n, r) {
    try {
      var o = "", u = r;
      do
        o += ht(u), u = u.return;
      while (u);
      var c = o;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Wd(n, r, o) {
    return { value: n, source: null, stack: o ?? null, digest: r ?? null };
  }
  function Yd(n, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var df = typeof WeakMap == "function" ? WeakMap : Map;
  function ih(n, r, o) {
    o = no(-1, o), o.tag = 3, o.payload = { element: null };
    var u = r.value;
    return o.callback = function() {
      Mu || (Mu = !0, zl = u), Yd(n, r);
    }, o;
  }
  function Qd(n, r, o) {
    o = no(-1, o), o.tag = 3;
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = r.value;
      o.payload = function() {
        return u(c);
      }, o.callback = function() {
        Yd(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (o.callback = function() {
      Yd(n, r), typeof u != "function" && ($o === null ? $o = /* @__PURE__ */ new Set([this]) : $o.add(this));
      var _ = r.stack;
      this.componentDidCatch(r.value, { componentStack: _ !== null ? _ : "" });
    }), o;
  }
  function Gd(n, r, o) {
    var u = n.pingCache;
    if (u === null) {
      u = n.pingCache = new df();
      var c = /* @__PURE__ */ new Set();
      u.set(r, c);
    } else c = u.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), u.set(r, c));
    c.has(o) || (c.add(o), n = By.bind(null, n, r, o), r.then(n, n));
  }
  function oh(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Io(n, r, o, u, c) {
    return (n.mode & 1) === 0 ? (n === r ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = no(-1, 1), r.tag = 2, Po(o, r, 1))), o.lanes |= 1), n) : (n.flags |= 65536, n.lanes = c, n);
  }
  var Ms = Ee.ReactCurrentOwner, Pn = !1;
  function cr(n, r, o, u) {
    r.child = n === null ? ke(r, null, o, u) : wn(r, n.child, o, u);
  }
  function aa(n, r, o, u, c) {
    o = o.render;
    var d = r.ref;
    return Sn(r, c), u = Vo(n, r, o, u, d, c), o = li(), n !== null && !Pn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Pa(n, r, c)) : (vn && o && Pc(r), r.flags |= 1, cr(n, r, u, c), r.child);
  }
  function Ul(n, r, o, u, c) {
    if (n === null) {
      var d = o.type;
      return typeof d == "function" && !up(d) && d.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = d, Et(n, r, d, u, c)) : (n = Gs(o.type, null, u, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, (n.lanes & c) === 0) {
      var _ = d.memoizedProps;
      if (o = o.compare, o = o !== null ? o : ss, o(_, u) && n.ref === r.ref) return Pa(n, r, c);
    }
    return r.flags |= 1, n = Yo(d, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Et(n, r, o, u, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (ss(d, u) && n.ref === r.ref) if (Pn = !1, r.pendingProps = u = d, (n.lanes & c) !== 0) (n.flags & 131072) !== 0 && (Pn = !0);
      else return r.lanes = n.lanes, Pa(n, r, c);
    }
    return lh(n, r, o, u, c);
  }
  function Ns(n, r, o) {
    var u = r.pendingProps, c = u.children, d = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden") if ((r.mode & 1) === 0) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ke(Du, Ca), Ca |= o;
    else {
      if ((o & 1073741824) === 0) return n = d !== null ? d.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Ke(Du, Ca), Ca |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = d !== null ? d.baseLanes : o, Ke(Du, Ca), Ca |= u;
    }
    else d !== null ? (u = d.baseLanes | o, r.memoizedState = null) : u = o, Ke(Du, Ca), Ca |= u;
    return cr(n, r, c, o), r.child;
  }
  function qd(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function lh(n, r, o, u, c) {
    var d = jn(o) ? Jr : En.current;
    return d = Zr(r, d), Sn(r, c), o = Vo(n, r, o, u, d, c), u = li(), n !== null && !Pn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Pa(n, r, c)) : (vn && u && Pc(r), r.flags |= 1, cr(n, r, o, c), r.child);
  }
  function uh(n, r, o, u, c) {
    if (jn(o)) {
      var d = !0;
      er(r);
    } else d = !1;
    if (Sn(r, c), r.stateNode === null) Fa(n, r), ff(r, o, u), Ls(r, o, u, c), u = !0;
    else if (n === null) {
      var _ = r.stateNode, x = r.memoizedProps;
      _.props = x;
      var O = _.context, W = o.contextType;
      typeof W == "object" && W !== null ? W = za(W) : (W = jn(o) ? Jr : En.current, W = Zr(r, W));
      var se = o.getDerivedStateFromProps, fe = typeof se == "function" || typeof _.getSnapshotBeforeUpdate == "function";
      fe || typeof _.UNSAFE_componentWillReceiveProps != "function" && typeof _.componentWillReceiveProps != "function" || (x !== u || O !== W) && ah(r, _, u, W), _a = !1;
      var le = r.memoizedState;
      _.state = le, Ss(r, u, _, c), O = r.memoizedState, x !== u || le !== O || Gn.current || _a ? (typeof se == "function" && ($d(r, o, se, u), O = r.memoizedState), (x = _a || rh(r, o, x, u, le, O, W)) ? (fe || typeof _.UNSAFE_componentWillMount != "function" && typeof _.componentWillMount != "function" || (typeof _.componentWillMount == "function" && _.componentWillMount(), typeof _.UNSAFE_componentWillMount == "function" && _.UNSAFE_componentWillMount()), typeof _.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof _.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = O), _.props = u, _.state = O, _.context = W, u = x) : (typeof _.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      _ = r.stateNode, Zv(n, r), x = r.memoizedProps, W = r.type === r.elementType ? x : ui(r.type, x), _.props = W, fe = r.pendingProps, le = _.context, O = o.contextType, typeof O == "object" && O !== null ? O = za(O) : (O = jn(o) ? Jr : En.current, O = Zr(r, O));
      var Ae = o.getDerivedStateFromProps;
      (se = typeof Ae == "function" || typeof _.getSnapshotBeforeUpdate == "function") || typeof _.UNSAFE_componentWillReceiveProps != "function" && typeof _.componentWillReceiveProps != "function" || (x !== fe || le !== O) && ah(r, _, u, O), _a = !1, le = r.memoizedState, _.state = le, Ss(r, u, _, c);
      var Be = r.memoizedState;
      x !== fe || le !== Be || Gn.current || _a ? (typeof Ae == "function" && ($d(r, o, Ae, u), Be = r.memoizedState), (W = _a || rh(r, o, W, u, le, Be, O) || !1) ? (se || typeof _.UNSAFE_componentWillUpdate != "function" && typeof _.componentWillUpdate != "function" || (typeof _.componentWillUpdate == "function" && _.componentWillUpdate(u, Be, O), typeof _.UNSAFE_componentWillUpdate == "function" && _.UNSAFE_componentWillUpdate(u, Be, O)), typeof _.componentDidUpdate == "function" && (r.flags |= 4), typeof _.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof _.componentDidUpdate != "function" || x === n.memoizedProps && le === n.memoizedState || (r.flags |= 4), typeof _.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && le === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = Be), _.props = u, _.state = Be, _.context = O, u = W) : (typeof _.componentDidUpdate != "function" || x === n.memoizedProps && le === n.memoizedState || (r.flags |= 4), typeof _.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && le === n.memoizedState || (r.flags |= 1024), u = !1);
    }
    return As(n, r, o, u, d, c);
  }
  function As(n, r, o, u, c, d) {
    qd(n, r);
    var _ = (r.flags & 128) !== 0;
    if (!u && !_) return c && zc(r, o, !1), Pa(n, r, d);
    u = r.stateNode, Ms.current = r;
    var x = _ && typeof o.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && _ ? (r.child = wn(r, n.child, null, d), r.child = wn(r, null, x, d)) : cr(n, r, x, d), r.memoizedState = u.state, c && zc(r, o, !0), r.child;
  }
  function wu(n) {
    var r = n.stateNode;
    r.pendingContext ? qv(n, r.pendingContext, r.pendingContext !== r.context) : r.context && qv(n, r.context, !1), Hd(n, r.containerInfo);
  }
  function sh(n, r, o, u, c) {
    return Fo(), to(c), r.flags |= 256, cr(n, r, o, u), r.child;
  }
  var pf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Kd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function vf(n, r, o) {
    var u = r.pendingProps, c = _n.current, d = !1, _ = (r.flags & 128) !== 0, x;
    if ((x = _) || (x = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), x ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Ke(_n, c & 1), n === null)
      return Md(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824, null) : (_ = u.children, n = u.fallback, d ? (u = r.mode, d = r.child, _ = { mode: "hidden", children: _ }, (u & 1) === 0 && d !== null ? (d.childLanes = 0, d.pendingProps = _) : d = Qo(_, u, 0, null), n = lo(n, u, o, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Kd(o), r.memoizedState = pf, n) : Xd(r, _));
    if (c = n.memoizedState, c !== null && (x = c.dehydrated, x !== null)) return ch(n, r, _, u, x, c, o);
    if (d) {
      d = u.fallback, _ = r.mode, c = n.child, x = c.sibling;
      var O = { mode: "hidden", children: u.children };
      return (_ & 1) === 0 && r.child !== c ? (u = r.child, u.childLanes = 0, u.pendingProps = O, r.deletions = null) : (u = Yo(c, O), u.subtreeFlags = c.subtreeFlags & 14680064), x !== null ? d = Yo(x, d) : (d = lo(d, _, o, null), d.flags |= 2), d.return = r, u.return = r, u.sibling = d, r.child = u, u = d, d = r.child, _ = n.child.memoizedState, _ = _ === null ? Kd(o) : { baseLanes: _.baseLanes | o, cachePool: null, transitions: _.transitions }, d.memoizedState = _, d.childLanes = n.childLanes & ~o, r.memoizedState = pf, u;
    }
    return d = n.child, n = d.sibling, u = Yo(d, { mode: "visible", children: u.children }), (r.mode & 1) === 0 && (u.lanes = o), u.return = r, u.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function Xd(n, r) {
    return r = Qo({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Us(n, r, o, u) {
    return u !== null && to(u), wn(r, n.child, null, o), n = Xd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function ch(n, r, o, u, c, d, _) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, u = Wd(Error(m(422))), Us(n, r, _, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = u.fallback, c = r.mode, u = Qo({ mode: "visible", children: u.children }, c, 0, null), d = lo(d, c, _, null), d.flags |= 2, u.return = r, d.return = r, u.sibling = d, r.child = u, (r.mode & 1) !== 0 && wn(r, n.child, null, _), r.child.memoizedState = Kd(_), r.memoizedState = pf, d);
    if ((r.mode & 1) === 0) return Us(n, r, _, null);
    if (c.data === "$!") {
      if (u = c.nextSibling && c.nextSibling.dataset, u) var x = u.dgst;
      return u = x, d = Error(m(419)), u = Wd(d, u, void 0), Us(n, r, _, u);
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
        c = (c & (u.suspendedLanes | _)) !== 0 ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Sa(n, c), zr(u, n, c, -1));
      }
      return lp(), u = Wd(Error(m(421))), Us(n, r, _, u);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = $y.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, ta = bi(c.nextSibling), ea = r, vn = !0, ja = null, n !== null && (zn[Ua++] = ki, zn[Ua++] = Di, zn[Ua++] = ya, ki = n.id, Di = n.overflow, ya = r), r = Xd(r, u.children), r.flags |= 4096, r);
  }
  function Jd(n, r, o) {
    n.lanes |= r;
    var u = n.alternate;
    u !== null && (u.lanes |= r), jd(n.return, r, o);
  }
  function Ar(n, r, o, u, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: o, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = u, d.tail = o, d.tailMode = c);
  }
  function Li(n, r, o) {
    var u = r.pendingProps, c = u.revealOrder, d = u.tail;
    if (cr(n, r, u.children, o), u = _n.current, (u & 2) !== 0) u = u & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && (n.flags & 128) !== 0) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Jd(n, o, r);
        else if (n.tag === 19) Jd(n, o, r);
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
        for (o = r.child, c = null; o !== null; ) n = o.alternate, n !== null && Wc(n) === null && (c = o), o = o.sibling;
        o = c, o === null ? (c = r.child, r.child = null) : (c = o.sibling, o.sibling = null), Ar(r, !1, c, o, d);
        break;
      case "backwards":
        for (o = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && Wc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = o, o = c, c = n;
        }
        Ar(r, !0, o, null, d);
        break;
      case "together":
        Ar(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Fa(n, r) {
    (r.mode & 1) === 0 && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Pa(n, r, o) {
    if (n !== null && (r.dependencies = n.dependencies), Ai |= r.lanes, (o & r.childLanes) === 0) return null;
    if (n !== null && r.child !== n.child) throw Error(m(153));
    if (r.child !== null) {
      for (n = r.child, o = Yo(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; ) n = n.sibling, o = o.sibling = Yo(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function js(n, r, o) {
    switch (r.tag) {
      case 3:
        wu(r), Fo();
        break;
      case 5:
        th(r);
        break;
      case 1:
        jn(r.type) && er(r);
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
          return u.dehydrated !== null ? (Ke(_n, _n.current & 1), r.flags |= 128, null) : (o & r.child.childLanes) !== 0 ? vf(n, r, o) : (Ke(_n, _n.current & 1), n = Pa(n, r, o), n !== null ? n.sibling : null);
        Ke(_n, _n.current & 1);
        break;
      case 19:
        if (u = (o & r.childLanes) !== 0, (n.flags & 128) !== 0) {
          if (u) return Li(n, r, o);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Ke(_n, _n.current), u) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Ns(n, r, o);
    }
    return Pa(n, r, o);
  }
  var Va, Vn, fh, dh;
  Va = function(n, r) {
    for (var o = r.child; o !== null; ) {
      if (o.tag === 5 || o.tag === 6) n.appendChild(o.stateNode);
      else if (o.tag !== 4 && o.child !== null) {
        o.child.return = o, o = o.child;
        continue;
      }
      if (o === r) break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === r) return;
        o = o.return;
      }
      o.sibling.return = o.return, o = o.sibling;
    }
  }, Vn = function() {
  }, fh = function(n, r, o, u) {
    var c = n.memoizedProps;
    if (c !== u) {
      n = r.stateNode, xl(Oi.current);
      var d = null;
      switch (o) {
        case "input":
          c = ir(n, c), u = ir(n, u), d = [];
          break;
        case "select":
          c = me({}, c, { value: void 0 }), u = me({}, u, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Yn(n, c), u = Yn(n, u), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof u.onClick == "function" && (n.onclick = Mo);
      }
      cn(o, u);
      var _;
      o = null;
      for (W in c) if (!u.hasOwnProperty(W) && c.hasOwnProperty(W) && c[W] != null) if (W === "style") {
        var x = c[W];
        for (_ in x) x.hasOwnProperty(_) && (o || (o = {}), o[_] = "");
      } else W !== "dangerouslySetInnerHTML" && W !== "children" && W !== "suppressContentEditableWarning" && W !== "suppressHydrationWarning" && W !== "autoFocus" && (L.hasOwnProperty(W) ? d || (d = []) : (d = d || []).push(W, null));
      for (W in u) {
        var O = u[W];
        if (x = c?.[W], u.hasOwnProperty(W) && O !== x && (O != null || x != null)) if (W === "style") if (x) {
          for (_ in x) !x.hasOwnProperty(_) || O && O.hasOwnProperty(_) || (o || (o = {}), o[_] = "");
          for (_ in O) O.hasOwnProperty(_) && x[_] !== O[_] && (o || (o = {}), o[_] = O[_]);
        } else o || (d || (d = []), d.push(
          W,
          o
        )), o = O;
        else W === "dangerouslySetInnerHTML" ? (O = O ? O.__html : void 0, x = x ? x.__html : void 0, O != null && x !== O && (d = d || []).push(W, O)) : W === "children" ? typeof O != "string" && typeof O != "number" || (d = d || []).push(W, "" + O) : W !== "suppressContentEditableWarning" && W !== "suppressHydrationWarning" && (L.hasOwnProperty(W) ? (O != null && W === "onScroll" && Yt("scroll", n), d || x === O || (d = [])) : (d = d || []).push(W, O));
      }
      o && (d = d || []).push("style", o);
      var W = d;
      (r.updateQueue = W) && (r.flags |= 4);
    }
  }, dh = function(n, r, o, u) {
    o !== u && (r.flags |= 4);
  };
  function zs(n, r) {
    if (!vn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var o = null; r !== null; ) r.alternate !== null && (o = r), r = r.sibling;
        o === null ? n.tail = null : o.sibling = null;
        break;
      case "collapsed":
        o = n.tail;
        for (var u = null; o !== null; ) o.alternate !== null && (u = o), o = o.sibling;
        u === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : u.sibling = null;
    }
  }
  function nr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, o = 0, u = 0;
    if (r) for (var c = n.child; c !== null; ) o |= c.lanes | c.childLanes, u |= c.subtreeFlags & 14680064, u |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) o |= c.lanes | c.childLanes, u |= c.subtreeFlags, u |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= u, n.childLanes = o, r;
  }
  function ph(n, r, o) {
    var u = r.pendingProps;
    switch (Vc(r), r.tag) {
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
        return nr(r), null;
      case 1:
        return jn(r.type) && Eu(), nr(r), null;
      case 3:
        return u = r.stateNode, wl(), sn(Gn), sn(En), et(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (Hc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, ja !== null && (Fl(ja), ja = null))), Vn(n, r), nr(r), null;
      case 5:
        $c(r);
        var c = xl(Es.current);
        if (o = r.type, n !== null && r.stateNode != null) fh(n, r, o, u, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null) throw Error(m(166));
            return nr(r), null;
          }
          if (n = xl(Oi.current), Hc(r)) {
            u = r.stateNode, o = r.type;
            var d = r.memoizedProps;
            switch (u[Ti] = r, u[hs] = d, n = (r.mode & 1) !== 0, o) {
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
                Cr(u, d), Yt("invalid", u);
            }
            cn(o, d), c = null;
            for (var _ in d) if (d.hasOwnProperty(_)) {
              var x = d[_];
              _ === "children" ? typeof x == "string" ? u.textContent !== x && (d.suppressHydrationWarning !== !0 && Nc(u.textContent, x, n), c = ["children", x]) : typeof x == "number" && u.textContent !== "" + x && (d.suppressHydrationWarning !== !0 && Nc(
                u.textContent,
                x,
                n
              ), c = ["children", "" + x]) : L.hasOwnProperty(_) && x != null && _ === "onScroll" && Yt("scroll", u);
            }
            switch (o) {
              case "input":
                Nn(u), vi(u, d, !0);
                break;
              case "textarea":
                Nn(u), An(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (u.onclick = Mo);
            }
            u = c, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            _ = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Er(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = _.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = _.createElement(o, { is: u.is }) : (n = _.createElement(o), o === "select" && (_ = n, u.multiple ? _.multiple = !0 : u.size && (_.size = u.size))) : n = _.createElementNS(n, o), n[Ti] = r, n[hs] = u, Va(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (_ = Zn(o, u), o) {
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
                  $n(n, u), c = ir(n, u), Yt("invalid", n);
                  break;
                case "option":
                  c = u;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!u.multiple }, c = me({}, u, { value: void 0 }), Yt("invalid", n);
                  break;
                case "textarea":
                  Cr(n, u), c = Yn(n, u), Yt("invalid", n);
                  break;
                default:
                  c = u;
              }
              cn(o, c), x = c;
              for (d in x) if (x.hasOwnProperty(d)) {
                var O = x[d];
                d === "style" ? an(n, O) : d === "dangerouslySetInnerHTML" ? (O = O ? O.__html : void 0, O != null && hi(n, O)) : d === "children" ? typeof O == "string" ? (o !== "textarea" || O !== "") && Ce(n, O) : typeof O == "number" && Ce(n, "" + O) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (L.hasOwnProperty(d) ? O != null && d === "onScroll" && Yt("scroll", n) : O != null && Se(n, d, O, _));
              }
              switch (o) {
                case "input":
                  Nn(n), vi(n, u, !1);
                  break;
                case "textarea":
                  Nn(n), An(n);
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
                  typeof c.onClick == "function" && (n.onclick = Mo);
              }
              switch (o) {
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
        return nr(r), null;
      case 6:
        if (n && r.stateNode != null) dh(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null) throw Error(m(166));
          if (o = xl(Es.current), xl(Oi.current), Hc(r)) {
            if (u = r.stateNode, o = r.memoizedProps, u[Ti] = r, (d = u.nodeValue !== o) && (n = ea, n !== null)) switch (n.tag) {
              case 3:
                Nc(u.nodeValue, o, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Nc(u.nodeValue, o, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else u = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(u), u[Ti] = r, r.stateNode = u;
        }
        return nr(r), null;
      case 13:
        if (sn(_n), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (vn && ta !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0) gs(), Fo(), r.flags |= 98560, d = !1;
          else if (d = Hc(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(m(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(m(317));
              d[Ti] = r;
            } else Fo(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
            nr(r), d = !1;
          } else ja !== null && (Fl(ja), ja = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0 ? (r.lanes = o, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (n === null || (_n.current & 1) !== 0 ? On === 0 && (On = 3) : lp())), r.updateQueue !== null && (r.flags |= 4), nr(r), null);
      case 4:
        return wl(), Vn(n, r), n === null && yu(r.stateNode.containerInfo), nr(r), null;
      case 10:
        return Ud(r.type._context), nr(r), null;
      case 17:
        return jn(r.type) && Eu(), nr(r), null;
      case 19:
        if (sn(_n), d = r.memoizedState, d === null) return nr(r), null;
        if (u = (r.flags & 128) !== 0, _ = d.rendering, _ === null) if (u) zs(d, !1);
        else {
          if (On !== 0 || n !== null && (n.flags & 128) !== 0) for (n = r.child; n !== null; ) {
            if (_ = Wc(n), _ !== null) {
              for (r.flags |= 128, zs(d, !1), u = _.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = o, o = r.child; o !== null; ) d = o, n = u, d.flags &= 14680066, _ = d.alternate, _ === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = _.childLanes, d.lanes = _.lanes, d.child = _.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = _.memoizedProps, d.memoizedState = _.memoizedState, d.updateQueue = _.updateQueue, d.type = _.type, n = _.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
              return Ke(_n, _n.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && _t() > Lu && (r.flags |= 128, u = !0, zs(d, !1), r.lanes = 4194304);
        }
        else {
          if (!u) if (n = Wc(_), n !== null) {
            if (r.flags |= 128, u = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), zs(d, !0), d.tail === null && d.tailMode === "hidden" && !_.alternate && !vn) return nr(r), null;
          } else 2 * _t() - d.renderingStartTime > Lu && o !== 1073741824 && (r.flags |= 128, u = !0, zs(d, !1), r.lanes = 4194304);
          d.isBackwards ? (_.sibling = r.child, r.child = _) : (o = d.last, o !== null ? o.sibling = _ : r.child = _, d.last = _);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = _t(), r.sibling = null, o = _n.current, Ke(_n, u ? o & 1 | 2 : o & 1), r) : (nr(r), null);
      case 22:
      case 23:
        return op(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && (r.mode & 1) !== 0 ? (Ca & 1073741824) !== 0 && (nr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : nr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, r.tag));
  }
  function hf(n, r) {
    switch (Vc(r), r.tag) {
      case 1:
        return jn(r.type) && Eu(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return wl(), sn(Gn), sn(En), et(), n = r.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return $c(r), null;
      case 13:
        if (sn(_n), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(m(340));
          Fo();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return sn(_n), null;
      case 4:
        return wl(), null;
      case 10:
        return Ud(r.type._context), null;
      case 22:
      case 23:
        return op(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Fs = !1, xr = !1, zy = typeof WeakSet == "function" ? WeakSet : Set, Fe = null;
  function ku(n, r) {
    var o = n.ref;
    if (o !== null) if (typeof o == "function") try {
      o(null);
    } catch (u) {
      hn(n, r, u);
    }
    else o.current = null;
  }
  function mf(n, r, o) {
    try {
      o();
    } catch (u) {
      hn(n, r, u);
    }
  }
  var vh = !1;
  function hh(n, r) {
    if (vs = La, n = cs(), Tc(n)) {
      if ("selectionStart" in n) var o = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        o = (o = n.ownerDocument) && o.defaultView || window;
        var u = o.getSelection && o.getSelection();
        if (u && u.rangeCount !== 0) {
          o = u.anchorNode;
          var c = u.anchorOffset, d = u.focusNode;
          u = u.focusOffset;
          try {
            o.nodeType, d.nodeType;
          } catch {
            o = null;
            break e;
          }
          var _ = 0, x = -1, O = -1, W = 0, se = 0, fe = n, le = null;
          t: for (; ; ) {
            for (var Ae; fe !== o || c !== 0 && fe.nodeType !== 3 || (x = _ + c), fe !== d || u !== 0 && fe.nodeType !== 3 || (O = _ + u), fe.nodeType === 3 && (_ += fe.nodeValue.length), (Ae = fe.firstChild) !== null; )
              le = fe, fe = Ae;
            for (; ; ) {
              if (fe === n) break t;
              if (le === o && ++W === c && (x = _), le === d && ++se === u && (O = _), (Ae = fe.nextSibling) !== null) break;
              fe = le, le = fe.parentNode;
            }
            fe = Ae;
          }
          o = x === -1 || O === -1 ? null : { start: x, end: O };
        } else o = null;
      }
      o = o || { start: 0, end: 0 };
    } else o = null;
    for (_l = { focusedElem: n, selectionRange: o }, La = !1, Fe = r; Fe !== null; ) if (r = Fe, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, Fe = n;
    else for (; Fe !== null; ) {
      r = Fe;
      try {
        var Be = r.alternate;
        if ((r.flags & 1024) !== 0) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Be !== null) {
              var Ye = Be.memoizedProps, Ln = Be.memoizedState, z = r.stateNode, N = z.getSnapshotBeforeUpdate(r.elementType === r.type ? Ye : ui(r.type, Ye), Ln);
              z.__reactInternalSnapshotBeforeUpdate = N;
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
            throw Error(m(163));
        }
      } catch (ce) {
        hn(r, r.return, ce);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, Fe = n;
        break;
      }
      Fe = r.return;
    }
    return Be = vh, vh = !1, Be;
  }
  function Ps(n, r, o) {
    var u = r.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var c = u = u.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && mf(r, o, d);
        }
        c = c.next;
      } while (c !== u);
    }
  }
  function Vs(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & n) === n) {
          var u = o.create;
          o.destroy = u();
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function Zd(n) {
    var r = n.ref;
    if (r !== null) {
      var o = n.stateNode;
      n.tag, n = o, typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function yf(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, yf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ti], delete r[hs], delete r[ms], delete r[Cu], delete r[Uy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Hs(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function ao(n) {
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
  function Mi(n, r, o) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? o.nodeType === 8 ? o.parentNode.insertBefore(n, r) : o.insertBefore(n, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(n, o)) : (r = o, r.appendChild(n)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = Mo));
    else if (u !== 4 && (n = n.child, n !== null)) for (Mi(n, r, o), n = n.sibling; n !== null; ) Mi(n, r, o), n = n.sibling;
  }
  function Ni(n, r, o) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? o.insertBefore(n, r) : o.appendChild(n);
    else if (u !== 4 && (n = n.child, n !== null)) for (Ni(n, r, o), n = n.sibling; n !== null; ) Ni(n, r, o), n = n.sibling;
  }
  var Dn = null, Ur = !1;
  function jr(n, r, o) {
    for (o = o.child; o !== null; ) mh(n, r, o), o = o.sibling;
  }
  function mh(n, r, o) {
    if (Kr && typeof Kr.onCommitFiberUnmount == "function") try {
      Kr.onCommitFiberUnmount(Ro, o);
    } catch {
    }
    switch (o.tag) {
      case 5:
        xr || ku(o, r);
      case 6:
        var u = Dn, c = Ur;
        Dn = null, jr(n, r, o), Dn = u, Ur = c, Dn !== null && (Ur ? (n = Dn, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : Dn.removeChild(o.stateNode));
        break;
      case 18:
        Dn !== null && (Ur ? (n = Dn, o = o.stateNode, n.nodeType === 8 ? _u(n.parentNode, o) : n.nodeType === 1 && _u(n, o), ri(n)) : _u(Dn, o.stateNode));
        break;
      case 4:
        u = Dn, c = Ur, Dn = o.stateNode.containerInfo, Ur = !0, jr(n, r, o), Dn = u, Ur = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!xr && (u = o.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          c = u = u.next;
          do {
            var d = c, _ = d.destroy;
            d = d.tag, _ !== void 0 && ((d & 2) !== 0 || (d & 4) !== 0) && mf(o, r, _), c = c.next;
          } while (c !== u);
        }
        jr(n, r, o);
        break;
      case 1:
        if (!xr && (ku(o, r), u = o.stateNode, typeof u.componentWillUnmount == "function")) try {
          u.props = o.memoizedProps, u.state = o.memoizedState, u.componentWillUnmount();
        } catch (x) {
          hn(o, r, x);
        }
        jr(n, r, o);
        break;
      case 21:
        jr(n, r, o);
        break;
      case 22:
        o.mode & 1 ? (xr = (u = xr) || o.memoizedState !== null, jr(n, r, o), xr = u) : jr(n, r, o);
        break;
      default:
        jr(n, r, o);
    }
  }
  function yh(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new zy()), r.forEach(function(u) {
        var c = xh.bind(null, n, u);
        o.has(u) || (o.add(u), u.then(c, c));
      });
    }
  }
  function si(n, r) {
    var o = r.deletions;
    if (o !== null) for (var u = 0; u < o.length; u++) {
      var c = o[u];
      try {
        var d = n, _ = r, x = _;
        e: for (; x !== null; ) {
          switch (x.tag) {
            case 5:
              Dn = x.stateNode, Ur = !1;
              break e;
            case 3:
              Dn = x.stateNode.containerInfo, Ur = !0;
              break e;
            case 4:
              Dn = x.stateNode.containerInfo, Ur = !0;
              break e;
          }
          x = x.return;
        }
        if (Dn === null) throw Error(m(160));
        mh(d, _, c), Dn = null, Ur = !1;
        var O = c.alternate;
        O !== null && (O.return = null), c.return = null;
      } catch (W) {
        hn(c, r, W);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) ep(r, n), r = r.sibling;
  }
  function ep(n, r) {
    var o = n.alternate, u = n.flags;
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
        si(r, n), ia(n), u & 512 && o !== null && ku(o, o.return);
        break;
      case 5:
        if (si(r, n), ia(n), u & 512 && o !== null && ku(o, o.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            Ce(c, "");
          } catch (Ye) {
            hn(n, n.return, Ye);
          }
        }
        if (u & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, _ = o !== null ? o.memoizedProps : d, x = n.type, O = n.updateQueue;
          if (n.updateQueue = null, O !== null) try {
            x === "input" && d.type === "radio" && d.name != null && Wn(c, d), Zn(x, _);
            var W = Zn(x, d);
            for (_ = 0; _ < O.length; _ += 2) {
              var se = O[_], fe = O[_ + 1];
              se === "style" ? an(c, fe) : se === "dangerouslySetInnerHTML" ? hi(c, fe) : se === "children" ? Ce(c, fe) : Se(c, se, fe, W);
            }
            switch (x) {
              case "input":
                qr(c, d);
                break;
              case "textarea":
                qa(c, d);
                break;
              case "select":
                var le = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var Ae = d.value;
                Ae != null ? Tn(c, !!d.multiple, Ae, !1) : le !== !!d.multiple && (d.defaultValue != null ? Tn(
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
          if (n.stateNode === null) throw Error(m(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Ye) {
            hn(n, n.return, Ye);
          }
        }
        break;
      case 3:
        if (si(r, n), ia(n), u & 4 && o !== null && o.memoizedState.isDehydrated) try {
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
        if (se = o !== null && o.memoizedState !== null, n.mode & 1 ? (xr = (W = xr) || se, si(r, n), xr = W) : si(r, n), ia(n), u & 8192) {
          if (W = n.memoizedState !== null, (n.stateNode.isHidden = W) && !se && (n.mode & 1) !== 0) for (Fe = n, se = n.child; se !== null; ) {
            for (fe = Fe = se; Fe !== null; ) {
              switch (le = Fe, Ae = le.child, le.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ps(4, le, le.return);
                  break;
                case 1:
                  ku(le, le.return);
                  var Be = le.stateNode;
                  if (typeof Be.componentWillUnmount == "function") {
                    u = le, o = le.return;
                    try {
                      r = u, Be.props = r.memoizedProps, Be.state = r.memoizedState, Be.componentWillUnmount();
                    } catch (Ye) {
                      hn(u, o, Ye);
                    }
                  }
                  break;
                case 5:
                  ku(le, le.return);
                  break;
                case 22:
                  if (le.memoizedState !== null) {
                    Is(fe);
                    continue;
                  }
              }
              Ae !== null ? (Ae.return = le, Fe = Ae) : Is(fe);
            }
            se = se.sibling;
          }
          e: for (se = null, fe = n; ; ) {
            if (fe.tag === 5) {
              if (se === null) {
                se = fe;
                try {
                  c = fe.stateNode, W ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (x = fe.stateNode, O = fe.memoizedProps.style, _ = O != null && O.hasOwnProperty("display") ? O.display : null, x.style.display = Wt("display", _));
                } catch (Ye) {
                  hn(n, n.return, Ye);
                }
              }
            } else if (fe.tag === 6) {
              if (se === null) try {
                fe.stateNode.nodeValue = W ? "" : fe.memoizedProps;
              } catch (Ye) {
                hn(n, n.return, Ye);
              }
            } else if ((fe.tag !== 22 && fe.tag !== 23 || fe.memoizedState === null || fe === n) && fe.child !== null) {
              fe.child.return = fe, fe = fe.child;
              continue;
            }
            if (fe === n) break e;
            for (; fe.sibling === null; ) {
              if (fe.return === null || fe.return === n) break e;
              se === fe && (se = null), fe = fe.return;
            }
            se === fe && (se = null), fe.sibling.return = fe.return, fe = fe.sibling;
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
          for (var o = n.return; o !== null; ) {
            if (Hs(o)) {
              var u = o;
              break e;
            }
            o = o.return;
          }
          throw Error(m(160));
        }
        switch (u.tag) {
          case 5:
            var c = u.stateNode;
            u.flags & 32 && (Ce(c, ""), u.flags &= -33);
            var d = ao(n);
            Ni(n, d, c);
            break;
          case 3:
          case 4:
            var _ = u.stateNode.containerInfo, x = ao(n);
            Mi(n, x, _);
            break;
          default:
            throw Error(m(161));
        }
      } catch (O) {
        hn(n, n.return, O);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Fy(n, r, o) {
    Fe = n, tp(n);
  }
  function tp(n, r, o) {
    for (var u = (n.mode & 1) !== 0; Fe !== null; ) {
      var c = Fe, d = c.child;
      if (c.tag === 22 && u) {
        var _ = c.memoizedState !== null || Fs;
        if (!_) {
          var x = c.alternate, O = x !== null && x.memoizedState !== null || xr;
          x = Fs;
          var W = xr;
          if (Fs = _, (xr = O) && !W) for (Fe = c; Fe !== null; ) _ = Fe, O = _.child, _.tag === 22 && _.memoizedState !== null ? np(c) : O !== null ? (O.return = _, Fe = O) : np(c);
          for (; d !== null; ) Fe = d, tp(d), d = d.sibling;
          Fe = c, Fs = x, xr = W;
        }
        gh(n);
      } else (c.subtreeFlags & 8772) !== 0 && d !== null ? (d.return = c, Fe = d) : gh(n);
    }
  }
  function gh(n) {
    for (; Fe !== null; ) {
      var r = Fe;
      if ((r.flags & 8772) !== 0) {
        var o = r.alternate;
        try {
          if ((r.flags & 8772) !== 0) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              xr || Vs(5, r);
              break;
            case 1:
              var u = r.stateNode;
              if (r.flags & 4 && !xr) if (o === null) u.componentDidMount();
              else {
                var c = r.elementType === r.type ? o.memoizedProps : ui(r.type, o.memoizedProps);
                u.componentDidUpdate(c, o.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && Vd(r, d, u);
              break;
            case 3:
              var _ = r.updateQueue;
              if (_ !== null) {
                if (o = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    o = r.child.stateNode;
                    break;
                  case 1:
                    o = r.child.stateNode;
                }
                Vd(r, _, o);
              }
              break;
            case 5:
              var x = r.stateNode;
              if (o === null && r.flags & 4) {
                o = x;
                var O = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    O.autoFocus && o.focus();
                    break;
                  case "img":
                    O.src && (o.src = O.src);
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
                    var fe = se.dehydrated;
                    fe !== null && ri(fe);
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
              throw Error(m(163));
          }
          xr || r.flags & 512 && Zd(r);
        } catch (le) {
          hn(r, r.return, le);
        }
      }
      if (r === n) {
        Fe = null;
        break;
      }
      if (o = r.sibling, o !== null) {
        o.return = r.return, Fe = o;
        break;
      }
      Fe = r.return;
    }
  }
  function Is(n) {
    for (; Fe !== null; ) {
      var r = Fe;
      if (r === n) {
        Fe = null;
        break;
      }
      var o = r.sibling;
      if (o !== null) {
        o.return = r.return, Fe = o;
        break;
      }
      Fe = r.return;
    }
  }
  function np(n) {
    for (; Fe !== null; ) {
      var r = Fe;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              Vs(4, r);
            } catch (O) {
              hn(r, o, O);
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
              Zd(r);
            } catch (O) {
              hn(r, d, O);
            }
            break;
          case 5:
            var _ = r.return;
            try {
              Zd(r);
            } catch (O) {
              hn(r, _, O);
            }
        }
      } catch (O) {
        hn(r, r.return, O);
      }
      if (r === n) {
        Fe = null;
        break;
      }
      var x = r.sibling;
      if (x !== null) {
        x.return = r.return, Fe = x;
        break;
      }
      Fe = r.return;
    }
  }
  var Py = Math.ceil, Bo = Ee.ReactCurrentDispatcher, jl = Ee.ReactCurrentOwner, fr = Ee.ReactCurrentBatchConfig, Nt = 0, Kn = null, Hn = null, dr = 0, Ca = 0, Du = Aa(0), On = 0, Bs = null, Ai = 0, Ou = 0, gf = 0, $s = null, oa = null, rp = 0, Lu = 1 / 0, Ea = null, Mu = !1, zl = null, $o = null, Sf = !1, io = null, Ws = 0, Wo = 0, Nu = null, Ys = -1, wr = 0;
  function In() {
    return (Nt & 6) !== 0 ? _t() : Ys !== -1 ? Ys : Ys = _t();
  }
  function Ui(n) {
    return (n.mode & 1) === 0 ? 1 : (Nt & 2) !== 0 && dr !== 0 ? dr & -dr : jy.transition !== null ? (wr === 0 && (wr = iu()), wr) : (n = Pt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : du(n.type)), n);
  }
  function zr(n, r, o, u) {
    if (50 < Wo) throw Wo = 0, Nu = null, Error(m(185));
    Yi(n, o, u), ((Nt & 2) === 0 || n !== Kn) && (n === Kn && ((Nt & 2) === 0 && (Ou |= o), On === 4 && ci(n, dr)), la(n, u), o === 1 && Nt === 0 && (r.mode & 1) === 0 && (Lu = _t() + 500, Ru && wi()));
  }
  function la(n, r) {
    var o = n.callbackNode;
    fl(n, r);
    var u = ni(n, n === Kn ? dr : 0);
    if (u === 0) o !== null && lr(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (o != null && lr(o), r === 1) n.tag === 0 ? Ao(ap.bind(null, n)) : Fc(ap.bind(null, n)), Su(function() {
        (Nt & 6) === 0 && wi();
      }), o = null;
      else {
        switch (lu(u)) {
          case 1:
            o = ei;
            break;
          case 4:
            o = sl;
            break;
          case 16:
            o = cl;
            break;
          case 536870912:
            o = nu;
            break;
          default:
            o = cl;
        }
        o = kh(o, _f.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = o;
    }
  }
  function _f(n, r) {
    if (Ys = -1, wr = 0, (Nt & 6) !== 0) throw Error(m(327));
    var o = n.callbackNode;
    if (Au() && n.callbackNode !== o) return null;
    var u = ni(n, n === Kn ? dr : 0);
    if (u === 0) return null;
    if ((u & 30) !== 0 || (u & n.expiredLanes) !== 0 || r) r = Cf(n, u);
    else {
      r = u;
      var c = Nt;
      Nt |= 2;
      var d = _h();
      (Kn !== n || dr !== r) && (Ea = null, Lu = _t() + 500, oo(n, r));
      do
        try {
          Ch();
          break;
        } catch (x) {
          Sh(n, x);
        }
      while (!0);
      Ad(), Bo.current = d, Nt = c, Hn !== null ? r = 0 : (Kn = null, dr = 0, r = On);
    }
    if (r !== 0) {
      if (r === 2 && (c = To(n), c !== 0 && (u = c, r = Qs(n, c))), r === 1) throw o = Bs, oo(n, 0), ci(n, u), la(n, _t()), o;
      if (r === 6) ci(n, u);
      else {
        if (c = n.current.alternate, (u & 30) === 0 && !Vy(c) && (r = Cf(n, u), r === 2 && (d = To(n), d !== 0 && (u = d, r = Qs(n, d))), r === 1)) throw o = Bs, oo(n, 0), ci(n, u), la(n, _t()), o;
        switch (n.finishedWork = c, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            Vl(n, oa, Ea);
            break;
          case 3:
            if (ci(n, u), (u & 130023424) === u && (r = rp + 500 - _t(), 10 < r)) {
              if (ni(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & u) !== u) {
                In(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Uc(Vl.bind(null, n, oa, Ea), r);
              break;
            }
            Vl(n, oa, Ea);
            break;
          case 4:
            if (ci(n, u), (u & 4194240) === u) break;
            for (r = n.eventTimes, c = -1; 0 < u; ) {
              var _ = 31 - Lr(u);
              d = 1 << _, _ = r[_], _ > c && (c = _), u &= ~d;
            }
            if (u = c, u = _t() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * Py(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = Uc(Vl.bind(null, n, oa, Ea), u);
              break;
            }
            Vl(n, oa, Ea);
            break;
          case 5:
            Vl(n, oa, Ea);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return la(n, _t()), n.callbackNode === o ? _f.bind(null, n) : null;
  }
  function Qs(n, r) {
    var o = $s;
    return n.current.memoizedState.isDehydrated && (oo(n, r).flags |= 256), n = Cf(n, r), n !== 2 && (r = oa, oa = o, r !== null && Fl(r)), n;
  }
  function Fl(n) {
    oa === null ? oa = n : oa.push.apply(oa, n);
  }
  function Vy(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var o = r.updateQueue;
        if (o !== null && (o = o.stores, o !== null)) for (var u = 0; u < o.length; u++) {
          var c = o[u], d = c.getSnapshot;
          c = c.value;
          try {
            if (!ii(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (o = r.child, r.subtreeFlags & 16384 && o !== null) o.return = r, r = o;
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
    for (r &= ~gf, r &= ~Ou, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var o = 31 - Lr(r), u = 1 << o;
      n[o] = -1, r &= ~u;
    }
  }
  function ap(n) {
    if ((Nt & 6) !== 0) throw Error(m(327));
    Au();
    var r = ni(n, 0);
    if ((r & 1) === 0) return la(n, _t()), null;
    var o = Cf(n, r);
    if (n.tag !== 0 && o === 2) {
      var u = To(n);
      u !== 0 && (r = u, o = Qs(n, u));
    }
    if (o === 1) throw o = Bs, oo(n, 0), ci(n, r), la(n, _t()), o;
    if (o === 6) throw Error(m(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Vl(n, oa, Ea), la(n, _t()), null;
  }
  function ip(n, r) {
    var o = Nt;
    Nt |= 1;
    try {
      return n(r);
    } finally {
      Nt = o, Nt === 0 && (Lu = _t() + 500, Ru && wi());
    }
  }
  function Pl(n) {
    io !== null && io.tag === 0 && (Nt & 6) === 0 && Au();
    var r = Nt;
    Nt |= 1;
    var o = fr.transition, u = Pt;
    try {
      if (fr.transition = null, Pt = 1, n) return n();
    } finally {
      Pt = u, fr.transition = o, Nt = r, (Nt & 6) === 0 && wi();
    }
  }
  function op() {
    Ca = Du.current, sn(Du);
  }
  function oo(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, Dd(o)), Hn !== null) for (o = Hn.return; o !== null; ) {
      var u = o;
      switch (Vc(u), u.tag) {
        case 1:
          u = u.type.childContextTypes, u != null && Eu();
          break;
        case 3:
          wl(), sn(Gn), sn(En), et();
          break;
        case 5:
          $c(u);
          break;
        case 4:
          wl();
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
          op();
      }
      o = o.return;
    }
    if (Kn = n, Hn = n = Yo(n.current, null), dr = Ca = r, On = 0, Bs = null, gf = Ou = Ai = 0, oa = $s = null, Tl !== null) {
      for (r = 0; r < Tl.length; r++) if (o = Tl[r], u = o.interleaved, u !== null) {
        o.interleaved = null;
        var c = u.next, d = o.pending;
        if (d !== null) {
          var _ = d.next;
          d.next = c, u.next = _;
        }
        o.pending = u;
      }
      Tl = null;
    }
    return n;
  }
  function Sh(n, r) {
    do {
      var o = Hn;
      try {
        if (Ad(), wt.current = Nl, Yc) {
          for (var u = Ht.memoizedState; u !== null; ) {
            var c = u.queue;
            c !== null && (c.pending = null), u = u.next;
          }
          Yc = !1;
        }
        if (en = 0, tr = Fn = Ht = null, bs = !1, kl = 0, jl.current = null, o === null || o.return === null) {
          On = 1, Bs = r, Hn = null;
          break;
        }
        e: {
          var d = n, _ = o.return, x = o, O = r;
          if (r = dr, x.flags |= 32768, O !== null && typeof O == "object" && typeof O.then == "function") {
            var W = O, se = x, fe = se.tag;
            if ((se.mode & 1) === 0 && (fe === 0 || fe === 11 || fe === 15)) {
              var le = se.alternate;
              le ? (se.updateQueue = le.updateQueue, se.memoizedState = le.memoizedState, se.lanes = le.lanes) : (se.updateQueue = null, se.memoizedState = null);
            }
            var Ae = oh(_);
            if (Ae !== null) {
              Ae.flags &= -257, Io(Ae, _, x, d, r), Ae.mode & 1 && Gd(d, W, r), r = Ae, O = W;
              var Be = r.updateQueue;
              if (Be === null) {
                var Ye = /* @__PURE__ */ new Set();
                Ye.add(O), r.updateQueue = Ye;
              } else Be.add(O);
              break e;
            } else {
              if ((r & 1) === 0) {
                Gd(d, W, r), lp();
                break e;
              }
              O = Error(m(426));
            }
          } else if (vn && x.mode & 1) {
            var Ln = oh(_);
            if (Ln !== null) {
              (Ln.flags & 65536) === 0 && (Ln.flags |= 256), Io(Ln, _, x, d, r), to(Al(O, x));
              break e;
            }
          }
          d = O = Al(O, x), On !== 4 && (On = 2), $s === null ? $s = [d] : $s.push(d), d = _;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var z = ih(d, O, r);
                eh(d, z);
                break e;
              case 1:
                x = O;
                var N = d.type, H = d.stateNode;
                if ((d.flags & 128) === 0 && (typeof N.getDerivedStateFromError == "function" || H !== null && typeof H.componentDidCatch == "function" && ($o === null || !$o.has(H)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var ce = Qd(d, x, r);
                  eh(d, ce);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Rh(o);
      } catch ($e) {
        r = $e, Hn === o && o !== null && (Hn = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function _h() {
    var n = Bo.current;
    return Bo.current = Nl, n === null ? Nl : n;
  }
  function lp() {
    (On === 0 || On === 3 || On === 2) && (On = 4), Kn === null || (Ai & 268435455) === 0 && (Ou & 268435455) === 0 || ci(Kn, dr);
  }
  function Cf(n, r) {
    var o = Nt;
    Nt |= 2;
    var u = _h();
    (Kn !== n || dr !== r) && (Ea = null, oo(n, r));
    do
      try {
        Hy();
        break;
      } catch (c) {
        Sh(n, c);
      }
    while (!0);
    if (Ad(), Nt = o, Bo.current = u, Hn !== null) throw Error(m(261));
    return Kn = null, dr = 0, On;
  }
  function Hy() {
    for (; Hn !== null; ) Eh(Hn);
  }
  function Ch() {
    for (; Hn !== null && !Ja(); ) Eh(Hn);
  }
  function Eh(n) {
    var r = wh(n.alternate, n, Ca);
    n.memoizedProps = n.pendingProps, r === null ? Rh(n) : Hn = r, jl.current = null;
  }
  function Rh(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, (r.flags & 32768) === 0) {
        if (o = ph(o, r, Ca), o !== null) {
          Hn = o;
          return;
        }
      } else {
        if (o = hf(o, r), o !== null) {
          o.flags &= 32767, Hn = o;
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
  function Vl(n, r, o) {
    var u = Pt, c = fr.transition;
    try {
      fr.transition = null, Pt = 1, Iy(n, r, o, u);
    } finally {
      fr.transition = c, Pt = u;
    }
    return null;
  }
  function Iy(n, r, o, u) {
    do
      Au();
    while (io !== null);
    if ((Nt & 6) !== 0) throw Error(m(327));
    o = n.finishedWork;
    var c = n.finishedLanes;
    if (o === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current) throw Error(m(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = o.lanes | o.childLanes;
    if (ud(n, d), n === Kn && (Hn = Kn = null, dr = 0), (o.subtreeFlags & 2064) === 0 && (o.flags & 2064) === 0 || Sf || (Sf = !0, kh(cl, function() {
      return Au(), null;
    })), d = (o.flags & 15990) !== 0, (o.subtreeFlags & 15990) !== 0 || d) {
      d = fr.transition, fr.transition = null;
      var _ = Pt;
      Pt = 1;
      var x = Nt;
      Nt |= 4, jl.current = null, hh(n, o), ep(o, n), hu(_l), La = !!vs, _l = vs = null, n.current = o, Fy(o), Za(), Nt = x, Pt = _, fr.transition = d;
    } else n.current = o;
    if (Sf && (Sf = !1, io = n, Ws = c), d = n.pendingLanes, d === 0 && ($o = null), es(o.stateNode), la(n, _t()), r !== null) for (u = n.onRecoverableError, o = 0; o < r.length; o++) c = r[o], u(c.value, { componentStack: c.stack, digest: c.digest });
    if (Mu) throw Mu = !1, n = zl, zl = null, n;
    return (Ws & 1) !== 0 && n.tag !== 0 && Au(), d = n.pendingLanes, (d & 1) !== 0 ? n === Nu ? Wo++ : (Wo = 0, Nu = n) : Wo = 0, wi(), null;
  }
  function Au() {
    if (io !== null) {
      var n = lu(Ws), r = fr.transition, o = Pt;
      try {
        if (fr.transition = null, Pt = 16 > n ? 16 : n, io === null) var u = !1;
        else {
          if (n = io, io = null, Ws = 0, (Nt & 6) !== 0) throw Error(m(331));
          var c = Nt;
          for (Nt |= 4, Fe = n.current; Fe !== null; ) {
            var d = Fe, _ = d.child;
            if ((Fe.flags & 16) !== 0) {
              var x = d.deletions;
              if (x !== null) {
                for (var O = 0; O < x.length; O++) {
                  var W = x[O];
                  for (Fe = W; Fe !== null; ) {
                    var se = Fe;
                    switch (se.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ps(8, se, d);
                    }
                    var fe = se.child;
                    if (fe !== null) fe.return = se, Fe = fe;
                    else for (; Fe !== null; ) {
                      se = Fe;
                      var le = se.sibling, Ae = se.return;
                      if (yf(se), se === W) {
                        Fe = null;
                        break;
                      }
                      if (le !== null) {
                        le.return = Ae, Fe = le;
                        break;
                      }
                      Fe = Ae;
                    }
                  }
                }
                var Be = d.alternate;
                if (Be !== null) {
                  var Ye = Be.child;
                  if (Ye !== null) {
                    Be.child = null;
                    do {
                      var Ln = Ye.sibling;
                      Ye.sibling = null, Ye = Ln;
                    } while (Ye !== null);
                  }
                }
                Fe = d;
              }
            }
            if ((d.subtreeFlags & 2064) !== 0 && _ !== null) _.return = d, Fe = _;
            else e: for (; Fe !== null; ) {
              if (d = Fe, (d.flags & 2048) !== 0) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Ps(9, d, d.return);
              }
              var z = d.sibling;
              if (z !== null) {
                z.return = d.return, Fe = z;
                break e;
              }
              Fe = d.return;
            }
          }
          var N = n.current;
          for (Fe = N; Fe !== null; ) {
            _ = Fe;
            var H = _.child;
            if ((_.subtreeFlags & 2064) !== 0 && H !== null) H.return = _, Fe = H;
            else e: for (_ = N; Fe !== null; ) {
              if (x = Fe, (x.flags & 2048) !== 0) try {
                switch (x.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Vs(9, x);
                }
              } catch ($e) {
                hn(x, x.return, $e);
              }
              if (x === _) {
                Fe = null;
                break e;
              }
              var ce = x.sibling;
              if (ce !== null) {
                ce.return = x.return, Fe = ce;
                break e;
              }
              Fe = x.return;
            }
          }
          if (Nt = c, wi(), Kr && typeof Kr.onPostCommitFiberRoot == "function") try {
            Kr.onPostCommitFiberRoot(Ro, n);
          } catch {
          }
          u = !0;
        }
        return u;
      } finally {
        Pt = o, fr.transition = r;
      }
    }
    return !1;
  }
  function bh(n, r, o) {
    r = Al(o, r), r = ih(n, r, 1), n = Po(n, r, 1), r = In(), n !== null && (Yi(n, 1, r), la(n, r));
  }
  function hn(n, r, o) {
    if (n.tag === 3) bh(n, n, o);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        bh(r, n, o);
        break;
      } else if (r.tag === 1) {
        var u = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && ($o === null || !$o.has(u))) {
          n = Al(o, n), n = Qd(r, n, 1), r = Po(r, n, 1), n = In(), r !== null && (Yi(r, 1, n), la(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function By(n, r, o) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = In(), n.pingedLanes |= n.suspendedLanes & o, Kn === n && (dr & o) === o && (On === 4 || On === 3 && (dr & 130023424) === dr && 500 > _t() - rp ? oo(n, 0) : gf |= o), la(n, r);
  }
  function Th(n, r) {
    r === 0 && ((n.mode & 1) === 0 ? r = 1 : (r = ma, ma <<= 1, (ma & 130023424) === 0 && (ma = 4194304)));
    var o = In();
    n = Sa(n, r), n !== null && (Yi(n, r, o), la(n, o));
  }
  function $y(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), Th(n, o);
  }
  function xh(n, r) {
    var o = 0;
    switch (n.tag) {
      case 13:
        var u = n.stateNode, c = n.memoizedState;
        c !== null && (o = c.retryLane);
        break;
      case 19:
        u = n.stateNode;
        break;
      default:
        throw Error(m(314));
    }
    u !== null && u.delete(r), Th(n, o);
  }
  var wh;
  wh = function(n, r, o) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Gn.current) Pn = !0;
    else {
      if ((n.lanes & o) === 0 && (r.flags & 128) === 0) return Pn = !1, js(n, r, o);
      Pn = (n.flags & 131072) !== 0;
    }
    else Pn = !1, vn && (r.flags & 1048576) !== 0 && Kv(r, eo, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        Fa(n, r), n = r.pendingProps;
        var c = Zr(r, En.current);
        Sn(r, o), c = Vo(null, r, u, n, c, o);
        var d = li();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, jn(u) ? (d = !0, er(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Pd(r), c.updater = cf, r.stateNode = c, c._reactInternals = r, Ls(r, u, n, o), r = As(null, r, u, !0, d, o)) : (r.tag = 0, vn && d && Pc(r), cr(null, r, c, o), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (Fa(n, r), n = r.pendingProps, c = u._init, u = c(u._payload), r.type = u, c = r.tag = Yy(u), n = ui(u, n), c) {
            case 0:
              r = lh(null, r, u, n, o);
              break e;
            case 1:
              r = uh(null, r, u, n, o);
              break e;
            case 11:
              r = aa(null, r, u, n, o);
              break e;
            case 14:
              r = Ul(null, r, u, ui(u.type, n), o);
              break e;
          }
          throw Error(m(
            306,
            u,
            ""
          ));
        }
        return r;
      case 0:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : ui(u, c), lh(n, r, u, c, o);
      case 1:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : ui(u, c), uh(n, r, u, c, o);
      case 3:
        e: {
          if (wu(r), n === null) throw Error(m(387));
          u = r.pendingProps, d = r.memoizedState, c = d.element, Zv(n, r), Ss(r, u, null, o);
          var _ = r.memoizedState;
          if (u = _.element, d.isDehydrated) if (d = { element: u, isDehydrated: !1, cache: _.cache, pendingSuspenseBoundaries: _.pendingSuspenseBoundaries, transitions: _.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = Al(Error(m(423)), r), r = sh(n, r, u, o, c);
            break e;
          } else if (u !== c) {
            c = Al(Error(m(424)), r), r = sh(n, r, u, o, c);
            break e;
          } else for (ta = bi(r.stateNode.containerInfo.firstChild), ea = r, vn = !0, ja = null, o = ke(r, null, u, o), r.child = o; o; ) o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (Fo(), u === c) {
              r = Pa(n, r, o);
              break e;
            }
            cr(n, r, u, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return th(r), n === null && Md(r), u = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, _ = c.children, Ac(u, c) ? _ = null : d !== null && Ac(u, d) && (r.flags |= 32), qd(n, r), cr(n, r, _, o), r.child;
      case 6:
        return n === null && Md(r), null;
      case 13:
        return vf(n, r, o);
      case 4:
        return Hd(r, r.stateNode.containerInfo), u = r.pendingProps, n === null ? r.child = wn(r, null, u, o) : cr(n, r, u, o), r.child;
      case 11:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : ui(u, c), aa(n, r, u, c, o);
      case 7:
        return cr(n, r, r.pendingProps, o), r.child;
      case 8:
        return cr(n, r, r.pendingProps.children, o), r.child;
      case 12:
        return cr(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (u = r.type._context, c = r.pendingProps, d = r.memoizedProps, _ = c.value, Ke(ga, u._currentValue), u._currentValue = _, d !== null) if (ii(d.value, _)) {
            if (d.children === c.children && !Gn.current) {
              r = Pa(n, r, o);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var x = d.dependencies;
            if (x !== null) {
              _ = d.child;
              for (var O = x.firstContext; O !== null; ) {
                if (O.context === u) {
                  if (d.tag === 1) {
                    O = no(-1, o & -o), O.tag = 2;
                    var W = d.updateQueue;
                    if (W !== null) {
                      W = W.shared;
                      var se = W.pending;
                      se === null ? O.next = O : (O.next = se.next, se.next = O), W.pending = O;
                    }
                  }
                  d.lanes |= o, O = d.alternate, O !== null && (O.lanes |= o), jd(
                    d.return,
                    o,
                    r
                  ), x.lanes |= o;
                  break;
                }
                O = O.next;
              }
            } else if (d.tag === 10) _ = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (_ = d.return, _ === null) throw Error(m(341));
              _.lanes |= o, x = _.alternate, x !== null && (x.lanes |= o), jd(_, o, r), _ = d.sibling;
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
          cr(n, r, c.children, o), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, u = r.pendingProps.children, Sn(r, o), c = za(c), u = u(c), r.flags |= 1, cr(n, r, u, o), r.child;
      case 14:
        return u = r.type, c = ui(u, r.pendingProps), c = ui(u.type, c), Ul(n, r, u, c, o);
      case 15:
        return Et(n, r, r.type, r.pendingProps, o);
      case 17:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : ui(u, c), Fa(n, r), r.tag = 1, jn(u) ? (n = !0, er(r)) : n = !1, Sn(r, o), ff(r, u, c), Ls(r, u, c, o), As(null, r, u, !0, n, o);
      case 19:
        return Li(n, r, o);
      case 22:
        return Ns(n, r, o);
    }
    throw Error(m(156, r.tag));
  };
  function kh(n, r) {
    return fn(n, r);
  }
  function Wy(n, r, o, u) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ha(n, r, o, u) {
    return new Wy(n, r, o, u);
  }
  function up(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Yy(n) {
    if (typeof n == "function") return up(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === K) return 11;
      if (n === He) return 14;
    }
    return 2;
  }
  function Yo(n, r) {
    var o = n.alternate;
    return o === null ? (o = Ha(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function Gs(n, r, o, u, c, d) {
    var _ = 2;
    if (u = n, typeof n == "function") up(n) && (_ = 1);
    else if (typeof n == "string") _ = 5;
    else e: switch (n) {
      case Ve:
        return lo(o.children, c, d, r);
      case Ie:
        _ = 8, c |= 8;
        break;
      case Xe:
        return n = Ha(12, o, r, c | 2), n.elementType = Xe, n.lanes = d, n;
      case ee:
        return n = Ha(13, o, r, c), n.elementType = ee, n.lanes = d, n;
      case be:
        return n = Ha(19, o, r, c), n.elementType = be, n.lanes = d, n;
      case _e:
        return Qo(o, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case lt:
            _ = 10;
            break e;
          case ut:
            _ = 9;
            break e;
          case K:
            _ = 11;
            break e;
          case He:
            _ = 14;
            break e;
          case we:
            _ = 16, u = null;
            break e;
        }
        throw Error(m(130, n == null ? n : typeof n, ""));
    }
    return r = Ha(_, o, r, c), r.elementType = n, r.type = u, r.lanes = d, r;
  }
  function lo(n, r, o, u) {
    return n = Ha(7, n, u, r), n.lanes = o, n;
  }
  function Qo(n, r, o, u) {
    return n = Ha(22, n, u, r), n.elementType = _e, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
  }
  function sp(n, r, o) {
    return n = Ha(6, n, null, r), n.lanes = o, n;
  }
  function Ef(n, r, o) {
    return r = Ha(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Dh(n, r, o, u, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ou(0), this.expirationTimes = ou(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ou(0), this.identifierPrefix = u, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Rf(n, r, o, u, c, d, _, x, O) {
    return n = new Dh(n, r, o, x, O), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Ha(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: u, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Pd(d), n;
  }
  function Qy(n, r, o) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Qe, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: o };
  }
  function cp(n) {
    if (!n) return br;
    n = n._reactInternals;
    e: {
      if (St(n) !== n || n.tag !== 1) throw Error(m(170));
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
      throw Error(m(171));
    }
    if (n.tag === 1) {
      var o = n.type;
      if (jn(o)) return ys(n, o, r);
    }
    return r;
  }
  function Oh(n, r, o, u, c, d, _, x, O) {
    return n = Rf(o, u, !0, n, c, d, _, x, O), n.context = cp(null), o = n.current, u = In(), c = Ui(o), d = no(u, c), d.callback = r ?? null, Po(o, d, c), n.current.lanes = c, Yi(n, c, u), la(n, u), n;
  }
  function bf(n, r, o, u) {
    var c = r.current, d = In(), _ = Ui(c);
    return o = cp(o), r.context === null ? r.context = o : r.pendingContext = o, r = no(d, _), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = Po(c, r, _), n !== null && (zr(n, c, _, d), Bc(n, c, _)), _;
  }
  function Tf(n) {
    return n = n.current, n.child ? (n.child.tag === 5, n.child.stateNode) : null;
  }
  function fp(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function xf(n, r) {
    fp(n, r), (n = n.alternate) && fp(n, r);
  }
  function Lh() {
    return null;
  }
  var Hl = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function dp(n) {
    this._internalRoot = n;
  }
  wf.prototype.render = dp.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(m(409));
    bf(n, r, null, null);
  }, wf.prototype.unmount = dp.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Pl(function() {
        bf(null, n, null, null);
      }), r[Ji] = null;
    }
  };
  function wf(n) {
    this._internalRoot = n;
  }
  wf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = vt();
      n = { blockedOn: null, target: n, priority: r };
      for (var o = 0; o < Qn.length && r !== 0 && r < Qn[o].priority; o++) ;
      Qn.splice(o, 0, n), o === 0 && rs(n);
    }
  };
  function pp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function kf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Mh() {
  }
  function Gy(n, r, o, u, c) {
    if (c) {
      if (typeof u == "function") {
        var d = u;
        u = function() {
          var W = Tf(_);
          d.call(W);
        };
      }
      var _ = Oh(r, u, n, 0, null, !1, !1, "", Mh);
      return n._reactRootContainer = _, n[Ji] = _.current, yu(n.nodeType === 8 ? n.parentNode : n), Pl(), _;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof u == "function") {
      var x = u;
      u = function() {
        var W = Tf(O);
        x.call(W);
      };
    }
    var O = Rf(n, 0, !1, null, null, !1, !1, "", Mh);
    return n._reactRootContainer = O, n[Ji] = O.current, yu(n.nodeType === 8 ? n.parentNode : n), Pl(function() {
      bf(r, O, o, u);
    }), O;
  }
  function qs(n, r, o, u, c) {
    var d = o._reactRootContainer;
    if (d) {
      var _ = d;
      if (typeof c == "function") {
        var x = c;
        c = function() {
          var O = Tf(_);
          x.call(O);
        };
      }
      bf(r, _, n, c);
    } else _ = Gy(o, r, n, c, u);
    return Tf(_);
  }
  jt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = ti(r.pendingLanes);
          o !== 0 && (Qi(r, o | 1), la(r, _t()), (Nt & 6) === 0 && (Lu = _t() + 500, wi()));
        }
        break;
      case 13:
        Pl(function() {
          var u = Sa(n, 1);
          if (u !== null) {
            var c = In();
            zr(u, n, 1, c);
          }
        }), xf(n, 1);
    }
  }, ts = function(n) {
    if (n.tag === 13) {
      var r = Sa(n, 134217728);
      if (r !== null) {
        var o = In();
        zr(r, n, 134217728, o);
      }
      xf(n, 134217728);
    }
  }, Si = function(n) {
    if (n.tag === 13) {
      var r = Ui(n), o = Sa(n, r);
      if (o !== null) {
        var u = In();
        zr(o, n, r, u);
      }
      xf(n, r);
    }
  }, vt = function() {
    return Pt;
  }, uu = function(n, r) {
    var o = Pt;
    try {
      return Pt = n, r();
    } finally {
      Pt = o;
    }
  }, Kt = function(n, r, o) {
    switch (r) {
      case "input":
        if (qr(n, o), r = o.name, o.type === "radio" && r != null) {
          for (o = n; o.parentNode; ) o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < o.length; r++) {
            var u = o[r];
            if (u !== n && u.form === n.form) {
              var c = gn(u);
              if (!c) throw Error(m(90));
              kr(u), qr(u, c);
            }
          }
        }
        break;
      case "textarea":
        qa(n, o);
        break;
      case "select":
        r = o.value, r != null && Tn(n, !!o.multiple, r, !1);
    }
  }, ll = ip, _o = Pl;
  var qy = { usingClientEntryPoint: !1, Events: [Ze, oi, gn, Wi, ol, ip] }, Ks = { findFiberByHostInstance: Cl, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Nh = { bundleType: Ks.bundleType, version: Ks.version, rendererPackageName: Ks.rendererPackageName, rendererConfig: Ks.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ee.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = xn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Ks.findFiberByHostInstance || Lh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Go = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Go.isDisabled && Go.supportsFiber) try {
      Ro = Go.inject(Nh), Kr = Go;
    } catch {
    }
  }
  return Qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qy, Qa.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!pp(r)) throw Error(m(200));
    return Qy(n, r, null, o);
  }, Qa.createRoot = function(n, r) {
    if (!pp(n)) throw Error(m(299));
    var o = !1, u = "", c = Hl;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Rf(n, 1, !1, null, null, o, !1, u, c), n[Ji] = r.current, yu(n.nodeType === 8 ? n.parentNode : n), new dp(r);
  }, Qa.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(m(188)) : (n = Object.keys(n).join(","), Error(m(268, n)));
    return n = xn(r), n = n === null ? null : n.stateNode, n;
  }, Qa.flushSync = function(n) {
    return Pl(n);
  }, Qa.hydrate = function(n, r, o) {
    if (!kf(r)) throw Error(m(200));
    return qs(null, n, r, !0, o);
  }, Qa.hydrateRoot = function(n, r, o) {
    if (!pp(n)) throw Error(m(405));
    var u = o != null && o.hydratedSources || null, c = !1, d = "", _ = Hl;
    if (o != null && (o.unstable_strictMode === !0 && (c = !0), o.identifierPrefix !== void 0 && (d = o.identifierPrefix), o.onRecoverableError !== void 0 && (_ = o.onRecoverableError)), r = Oh(r, null, n, 1, o ?? null, c, !1, d, _), n[Ji] = r.current, yu(n), u) for (n = 0; n < u.length; n++) o = u[n], c = o._getVersion, c = c(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, c] : r.mutableSourceEagerHydrationData.push(
      o,
      c
    );
    return new wf(r);
  }, Qa.render = function(n, r, o) {
    if (!kf(r)) throw Error(m(200));
    return qs(null, n, r, !1, o);
  }, Qa.unmountComponentAtNode = function(n) {
    if (!kf(n)) throw Error(m(40));
    return n._reactRootContainer ? (Pl(function() {
      qs(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Ji] = null;
      });
    }), !0) : !1;
  }, Qa.unstable_batchedUpdates = ip, Qa.unstable_renderSubtreeIntoContainer = function(n, r, o, u) {
    if (!kf(o)) throw Error(m(200));
    if (n == null || n._reactInternals === void 0) throw Error(m(38));
    return qs(n, r, o, !1, u);
  }, Qa.version = "18.3.1-next-f1338f8080-20240426", Qa;
}
var Ga = {};
var KE;
function cO() {
  return KE || (KE = 1, process.env.NODE_ENV !== "production" && (function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var v = yv(), y = p2(), m = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, R = !1;
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
    function h(e) {
      if (!R) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        j("error", e, a);
      }
    }
    function j(e, t, a) {
      {
        var i = m.ReactDebugCurrentFrame, l = i.getStackAddendum();
        l !== "" && (t += "%s", a = a.concat([l]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var k = 0, T = 1, V = 2, $ = 3, Q = 4, G = 5, ve = 6, ue = 7, pe = 8, Ne = 9, ge = 10, Se = 11, Ee = 12, he = 13, Qe = 14, Ve = 15, Ie = 16, Xe = 17, lt = 18, ut = 19, K = 21, ee = 22, be = 23, He = 24, we = 25, _e = !0, te = !1, Oe = !1, me = !1, U = !1, X = !0, Je = !0, je = !0, ht = !0, tt = /* @__PURE__ */ new Set(), Le = {}, st = {};
    function dt(e, t) {
      Gt(e, t), Gt(e + "Capture", t);
    }
    function Gt(e, t) {
      Le[e] && h("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Le[e] = t;
      {
        var a = e.toLowerCase();
        st[a] = e, e === "onDoubleClick" && (st.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        tt.add(t[i]);
    }
    var Nn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", kr = Object.prototype.hasOwnProperty;
    function bn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function ir(e) {
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
      if (ir(e))
        return h("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, bn(e)), $n(e);
    }
    function qr(e) {
      if (ir(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", bn(e)), $n(e);
    }
    function vi(e, t) {
      if (ir(e))
        return h("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, bn(e)), $n(e);
    }
    function pa(e, t) {
      if (ir(e))
        return h("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, bn(e)), $n(e);
    }
    function Jn(e) {
      if (ir(e))
        return h("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", bn(e)), $n(e);
    }
    function Tn(e) {
      if (ir(e))
        return h("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", bn(e)), $n(e);
    }
    var Yn = 0, Cr = 1, qa = 2, An = 3, Er = 4, va = 5, Ka = 6, hi = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ce = hi + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ge = new RegExp("^[" + hi + "][" + Ce + "]*$"), bt = {}, Wt = {};
    function an(e) {
      return kr.call(Wt, e) ? !0 : kr.call(bt, e) ? !1 : Ge.test(e) ? (Wt[e] = !0, !0) : (bt[e] = !0, h("Invalid attribute name: `%s`", e), !1);
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
          var l = e.toLowerCase().slice(0, 5);
          return l !== "data-" && l !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Zn(e, t, a, i) {
      if (t === null || typeof t > "u" || cn(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case An:
            return !t;
          case Er:
            return t === !1;
          case va:
            return isNaN(t);
          case Ka:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function on(e) {
      return Kt.hasOwnProperty(e) ? Kt[e] : null;
    }
    function qt(e, t, a, i, l, s, f) {
      this.acceptsBooleans = t === qa || t === An || t === Er, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
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
        Cr,
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
        Er,
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
    var Rr = /[\-\:]([a-z])/g, ka = function(e) {
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
      var t = e.replace(Rr, ka);
      Kt[t] = new qt(
        t,
        Cr,
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
      var t = e.replace(Rr, ka);
      Kt[t] = new qt(
        t,
        Cr,
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
      var t = e.replace(Rr, ka);
      Kt[t] = new qt(
        t,
        Cr,
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
        Cr,
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
      Cr,
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
        Cr,
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
    var ol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, ll = !1;
    function _o(e) {
      !ll && ol.test(e) && (ll = !0, h("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Co(e, t, a, i) {
      if (i.mustUseProperty) {
        var l = i.propertyName;
        return e[l];
      } else {
        Wn(a, t), i.sanitizeURL && _o("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Er) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Zn(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Zn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === An)
            return a;
          f = e.getAttribute(s);
        }
        return Zn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function ul(e, t, a, i) {
      {
        if (!an(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var l = e.getAttribute(t);
        return Wn(a, t), l === "" + a ? a : l;
      }
    }
    function Dr(e, t, a, i) {
      var l = on(t);
      if (!mn(t, l, i)) {
        if (Zn(t, a, l, i) && (a = null), i || l === null) {
          if (an(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Wn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = l.mustUseProperty;
        if (f) {
          var p = l.propertyName;
          if (a === null) {
            var g = l.type;
            e[p] = g === An ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var C = l.attributeName, E = l.attributeNamespace;
        if (a === null)
          e.removeAttribute(C);
        else {
          var A = l.type, M;
          A === An || A === Er && a === !0 ? M = "" : (Wn(a, C), M = "" + a, l.sanitizeURL && _o(M.toString())), E ? e.setAttributeNS(E, C, M) : e.setAttribute(C, M);
        }
      }
    }
    var Or = /* @__PURE__ */ Symbol.for("react.element"), or = /* @__PURE__ */ Symbol.for("react.portal"), mi = /* @__PURE__ */ Symbol.for("react.fragment"), Xa = /* @__PURE__ */ Symbol.for("react.strict_mode"), yi = /* @__PURE__ */ Symbol.for("react.profiler"), gi = /* @__PURE__ */ Symbol.for("react.provider"), D = /* @__PURE__ */ Symbol.for("react.context"), ae = /* @__PURE__ */ Symbol.for("react.forward_ref"), xe = /* @__PURE__ */ Symbol.for("react.suspense"), Pe = /* @__PURE__ */ Symbol.for("react.suspense_list"), St = /* @__PURE__ */ Symbol.for("react.memo"), mt = /* @__PURE__ */ Symbol.for("react.lazy"), kt = /* @__PURE__ */ Symbol.for("react.scope"), xt = /* @__PURE__ */ Symbol.for("react.debug_trace_mode"), xn = /* @__PURE__ */ Symbol.for("react.offscreen"), ln = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), fn = /* @__PURE__ */ Symbol.for("react.cache"), lr = /* @__PURE__ */ Symbol.for("react.tracing_marker"), Ja = Symbol.iterator, Za = "@@iterator";
    function _t(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ja && e[Ja] || e[Za];
      return typeof t == "function" ? t : null;
    }
    var Rt = Object.assign, ei = 0, sl, cl, Eo, nu, Ro, Kr, es;
    function Lr() {
    }
    Lr.__reactDisabledLog = !0;
    function Sc() {
      {
        if (ei === 0) {
          sl = console.log, cl = console.info, Eo = console.warn, nu = console.error, Ro = console.group, Kr = console.groupCollapsed, es = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Lr,
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
    function _c() {
      {
        if (ei--, ei === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Rt({}, e, {
              value: sl
            }),
            info: Rt({}, e, {
              value: cl
            }),
            warn: Rt({}, e, {
              value: Eo
            }),
            error: Rt({}, e, {
              value: nu
            }),
            group: Rt({}, e, {
              value: Ro
            }),
            groupCollapsed: Rt({}, e, {
              value: Kr
            }),
            groupEnd: Rt({}, e, {
              value: es
            })
          });
        }
        ei < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ru = m.ReactCurrentDispatcher, bo;
    function ma(e, t, a) {
      {
        if (bo === void 0)
          try {
            throw Error();
          } catch (l) {
            var i = l.stack.trim().match(/\n( *(at )?)/);
            bo = i && i[1] || "";
          }
        return `
` + bo + e;
      }
    }
    var ti = !1, ni;
    {
      var au = typeof WeakMap == "function" ? WeakMap : Map;
      ni = new au();
    }
    function fl(e, t) {
      if (!e || ti)
        return "";
      {
        var a = ni.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      ti = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = ru.current, ru.current = null, Sc();
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
        ti = !1, ru.current = s, _c(), Error.prepareStackTrace = l;
      }
      var M = e ? e.displayName || e.name : "", I = M ? ma(M) : "";
      return typeof e == "function" && ni.set(e, I), I;
    }
    function To(e, t, a) {
      return fl(e, !0);
    }
    function iu(e, t, a) {
      return fl(e, !1);
    }
    function ou(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Yi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fl(e, ou(e));
      if (typeof e == "string")
        return ma(e);
      switch (e) {
        case xe:
          return ma("Suspense");
        case Pe:
          return ma("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ae:
            return iu(e.render);
          case St:
            return Yi(e.type, t, a);
          case mt: {
            var i = e, l = i._payload, s = i._init;
            try {
              return Yi(s(l), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function ud(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case G:
          return ma(e.type);
        case Ie:
          return ma("Lazy");
        case he:
          return ma("Suspense");
        case ut:
          return ma("SuspenseList");
        case k:
        case V:
        case Ve:
          return iu(e.type);
        case Se:
          return iu(e.type.render);
        case T:
          return To(e.type);
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
      var l = t.displayName || t.name || "";
      return l !== "" ? a + "(" + l + ")" : a;
    }
    function lu(e) {
      return e.displayName || "Context";
    }
    function jt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
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
        case Pe:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case D:
            var t = e;
            return lu(t) + ".Consumer";
          case gi:
            var a = e;
            return lu(a._context) + ".Provider";
          case ae:
            return Pt(e, e.render, "ForwardRef");
          case St:
            var i = e.displayName || null;
            return i !== null ? i : jt(e.type) || "Memo";
          case mt: {
            var l = e, s = l._payload, f = l._init;
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
        case He:
          return "Cache";
        case Ne:
          var i = a;
          return Si(i) + ".Consumer";
        case ge:
          var l = a;
          return Si(l._context) + ".Provider";
        case lt:
          return "DehydratedFragment";
        case Se:
          return ts(a, a.render, "ForwardRef");
        case ue:
          return "Fragment";
        case G:
          return a;
        case Q:
          return "Portal";
        case $:
          return "Root";
        case ve:
          return "Text";
        case Ie:
          return jt(a);
        case pe:
          return a === Xa ? "StrictMode" : "Mode";
        case ee:
          return "Offscreen";
        case Ee:
          return "Profiler";
        case K:
          return "Scope";
        case he:
          return "Suspense";
        case ut:
          return "SuspenseList";
        case we:
          return "TracingMarker";
        // The display name for this tags come from the user-provided type:
        case T:
        case k:
        case Xe:
        case V:
        case Qe:
        case Ve:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var uu = m.ReactDebugCurrentFrame, ur = null, _i = !1;
    function Mr() {
      {
        if (ur === null)
          return null;
        var e = ur._debugOwner;
        if (e !== null && typeof e < "u")
          return vt(e);
      }
      return null;
    }
    function Ci() {
      return ur === null ? "" : Qi(ur);
    }
    function dn() {
      uu.getCurrentStack = null, ur = null, _i = !1;
    }
    function Xt(e) {
      uu.getCurrentStack = e === null ? null : Ci, ur = e, _i = !1;
    }
    function xo() {
      return ur;
    }
    function Qn(e) {
      _i = e;
    }
    function Nr(e) {
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
    var dl = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function ns(e, t) {
      dl[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || h("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || h("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function rs(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function wo(e) {
      return e._valueTracker;
    }
    function pl(e) {
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
        var l = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return l.call(this);
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
            pl(e), delete e[t];
          }
        };
        return f;
      }
    }
    function ri(e) {
      wo(e) || (e._valueTracker = Oa(e));
    }
    function Ei(e) {
      if (!e)
        return !1;
      var t = wo(e);
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
    var su = !1, cu = !1, ko = !1, vl = !1;
    function fu(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function du(e, t) {
      var a = e, i = t.checked, l = Rt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return l;
    }
    function ai(e, t) {
      ns("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !cu && (h("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Mr() || "A component", t.type), cu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !su && (h("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Mr() || "A component", t.type), su = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Da(t.value != null ? t.value : i),
        controlled: fu(t)
      };
    }
    function S(e, t) {
      var a = e, i = t.checked;
      i != null && Dr(a, "checked", i, !1);
    }
    function w(e, t) {
      var a = e;
      {
        var i = fu(t);
        !a._wrapperState.controlled && i && !vl && (h("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), vl = !0), a._wrapperState.controlled && !i && !ko && (h("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ko = !0);
      }
      S(e, t);
      var l = Da(t.value), s = t.type;
      if (l != null)
        s === "number" ? (l === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != l) && (a.value = Nr(l)) : a.value !== Nr(l) && (a.value = Nr(l));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? nt(a, t.type, l) : t.hasOwnProperty("defaultValue") && nt(a, t.type, Da(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function B(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var l = t.type, s = l === "submit" || l === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Nr(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function q(e, t) {
      var a = e;
      w(a, t), ye(a, t);
    }
    function ye(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Wn(a, "name");
        for (var l = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < l.length; s++) {
          var f = l[s];
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
      (t !== "number" || La(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Nr(e._wrapperState.initialValue) : e.defaultValue !== Nr(a) && (e.defaultValue = Nr(a)));
    }
    var Te = !1, it = !1, Dt = !1;
    function zt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? v.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || it || (it = !0, h("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Dt || (Dt = !0, h("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Te && (h("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Te = !0);
    }
    function un(e, t) {
      t.value != null && e.setAttribute("value", Nr(Da(t.value)));
    }
    var Jt = Array.isArray;
    function Tt(e) {
      return Jt(e);
    }
    var Zt;
    Zt = !1;
    function yn() {
      var e = Mr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Do = ["value", "defaultValue"];
    function as(e) {
      {
        ns("select", e);
        for (var t = 0; t < Do.length; t++) {
          var a = Do[t];
          if (e[a] != null) {
            var i = Tt(e[a]);
            e.multiple && !i ? h("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, yn()) : !e.multiple && i && h("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, yn());
          }
        }
      }
    }
    function Gi(e, t, a, i) {
      var l = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var g = 0; g < l.length; g++) {
          var C = f.hasOwnProperty("$" + l[g].value);
          l[g].selected !== C && (l[g].selected = C), C && i && (l[g].defaultSelected = !0);
        }
      } else {
        for (var E = Nr(Da(a)), A = null, M = 0; M < l.length; M++) {
          if (l[M].value === E) {
            l[M].selected = !0, i && (l[M].defaultSelected = !0);
            return;
          }
          A === null && !l[M].disabled && (A = l[M]);
        }
        A !== null && (A.selected = !0);
      }
    }
    function is(e, t) {
      return Rt({}, t, {
        value: void 0
      });
    }
    function hl(e, t) {
      var a = e;
      as(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Zt && (h("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Zt = !0);
    }
    function cd(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Gi(a, !!t.multiple, i, !1) : t.defaultValue != null && Gi(a, !!t.multiple, t.defaultValue, !0);
    }
    function Cc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var l = t.value;
      l != null ? Gi(a, !!t.multiple, l, !1) : i !== !!t.multiple && (t.defaultValue != null ? Gi(a, !!t.multiple, t.defaultValue, !0) : Gi(a, !!t.multiple, t.multiple ? [] : "", !1));
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
        children: Nr(a._wrapperState.initialValue)
      });
      return i;
    }
    function pd(e, t) {
      var a = e;
      ns("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !_v && (h("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Mr() || "A component"), _v = !0);
      var i = t.value;
      if (i == null) {
        var l = t.children, s = t.defaultValue;
        if (l != null) {
          h("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Tt(l)) {
              if (l.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              l = l[0];
            }
            s = l;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: Da(i)
      };
    }
    function Cv(e, t) {
      var a = e, i = Da(t.value), l = Da(t.defaultValue);
      if (i != null) {
        var s = Nr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      l != null && (a.defaultValue = Nr(l));
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
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, l);
        });
      } : e;
    }, Ec, bv = Rv(function(e, t) {
      if (e.namespaceURI === hd && !("innerHTML" in e)) {
        Ec = Ec || document.createElement("div"), Ec.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Ec.firstChild; e.firstChild; )
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
    }, os = {
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
    }, ls = {
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
    Object.keys(ls).forEach(function(e) {
      xv.forEach(function(t) {
        ls[Tv(t, e)] = ls[e];
      });
    });
    function Rc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(ls.hasOwnProperty(e) && ls[e]) ? t + "px" : (pa(t, e), ("" + t).trim());
    }
    var wv = /([A-Z])/g, kv = /^ms-/;
    function vu(e) {
      return e.replace(wv, "-$1").toLowerCase().replace(kv, "-ms-");
    }
    var Dv = function() {
    };
    {
      var Ty = /^(?:webkit|moz|o)[A-Z]/, xy = /^-ms-/, Ov = /-(.)/g, Sd = /;\s*$/, Ri = {}, ml = {}, Lv = !1, us = !1, wy = function(e) {
        return e.replace(Ov, function(t, a) {
          return a.toUpperCase();
        });
      }, Mv = function(e) {
        Ri.hasOwnProperty(e) && Ri[e] || (Ri[e] = !0, h(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          wy(e.replace(xy, "ms-"))
        ));
      }, _d = function(e) {
        Ri.hasOwnProperty(e) && Ri[e] || (Ri[e] = !0, h("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Cd = function(e, t) {
        ml.hasOwnProperty(t) && ml[t] || (ml[t] = !0, h(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Sd, "")));
      }, Nv = function(e, t) {
        Lv || (Lv = !0, h("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Av = function(e, t) {
        us || (us = !0, h("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Dv = function(e, t) {
        e.indexOf("-") > -1 ? Mv(e) : Ty.test(e) ? _d(e) : Sd.test(t) && Cd(e, t), typeof t == "number" && (isNaN(t) ? Nv(e, t) : isFinite(t) || Av(e, t));
      };
    }
    var Uv = Dv;
    function ky(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var l = e[i];
            if (l != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : vu(i)) + ":", t += Rc(i, l, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function jv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var l = i.indexOf("--") === 0;
          l || Uv(i, t[i]);
          var s = Rc(i, t[i], l);
          i === "float" && (i = "cssFloat"), l ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Dy(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function zv(e) {
      var t = {};
      for (var a in e)
        for (var i = os[a] || [a], l = 0; l < i.length; l++)
          t[i[l]] = a;
      return t;
    }
    function Oy(e, t) {
      {
        if (!t)
          return;
        var a = zv(e), i = zv(t), l = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var g = f + "," + p;
            if (l[g])
              continue;
            l[g] = !0, h("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Dy(e[f]) ? "Removing" : "Updating", f, p);
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
    function bc(e, t) {
      if (t) {
        if (ss[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Fv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && h("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Oo(e, t) {
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
    }, Tc = {
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
        if (kr.call(hu, t) && hu[t])
          return !0;
        if (mu.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Tc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return h("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), hu[t] = !0, !0;
          if (t !== i)
            return h("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), hu[t] = !0, !0;
        }
        if (Ly.test(t)) {
          var l = t.toLowerCase(), s = Tc.hasOwnProperty(l) ? l : null;
          if (s == null)
            return hu[t] = !0, !1;
          if (t !== s)
            return h("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), hu[t] = !0, !0;
        }
      }
      return !0;
    }
    function fs(e, t) {
      {
        var a = [];
        for (var i in t) {
          var l = Ed(e, i);
          l || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? h("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && h("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Rd(e, t) {
      Oo(e, t) || fs(e, t);
    }
    var bd = !1;
    function xc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !bd && (bd = !0, e === "select" && t.multiple ? h("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : h("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var yl = function() {
    };
    {
      var sr = {}, Td = /^on./, wc = /^on[^A-Z]/, Pv = new RegExp("^(aria)-[" + Ce + "]*$"), Vv = new RegExp("^(aria)[A-Z][" + Ce + "]*$");
      yl = function(e, t, a, i) {
        if (kr.call(sr, t) && sr[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return h("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), sr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(l) ? f[l] : null;
          if (p != null)
            return h("Invalid event handler property `%s`. Did you mean `%s`?", t, p), sr[t] = !0, !0;
          if (Td.test(t))
            return h("Unknown event handler property `%s`. It will be ignored.", t), sr[t] = !0, !0;
        } else if (Td.test(t))
          return wc.test(t) && h("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), sr[t] = !0, !0;
        if (Pv.test(t) || Vv.test(t))
          return !0;
        if (l === "innerhtml")
          return h("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), sr[t] = !0, !0;
        if (l === "aria")
          return h("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), sr[t] = !0, !0;
        if (l === "is" && a !== null && a !== void 0 && typeof a != "string")
          return h("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), sr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return h("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), sr[t] = !0, !0;
        var g = on(t), C = g !== null && g.type === Yn;
        if (cs.hasOwnProperty(l)) {
          var E = cs[l];
          if (E !== t)
            return h("Invalid DOM property `%s`. Did you mean `%s`?", t, E), sr[t] = !0, !0;
        } else if (!C && t !== l)
          return h("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), sr[t] = !0, !0;
        return typeof a == "boolean" && cn(t, a, g, !1) ? (a ? h('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : h('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), sr[t] = !0, !0) : C ? !0 : cn(t, a, g, !1) ? (sr[t] = !0, !1) : ((a === "false" || a === "true") && g !== null && g.type === An && (h("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), sr[t] = !0), !0);
      };
    }
    var Hv = function(e, t, a) {
      {
        var i = [];
        for (var l in t) {
          var s = yl(e, l, t[l], a);
          s || i.push(l);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? h("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && h("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Iv(e, t, a) {
      Oo(e, t) || Hv(e, t, a);
    }
    var xd = 1, kc = 2, Ma = 4, wd = xd | kc | Ma, gl = null;
    function My(e) {
      gl !== null && h("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), gl = e;
    }
    function Ny() {
      gl === null && h("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), gl = null;
    }
    function ds(e) {
      return e === gl;
    }
    function kd(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Ki ? t.parentNode : t;
    }
    var Dc = null, Sl = null, Yt = null;
    function Oc(e) {
      var t = zu(e);
      if (t) {
        if (typeof Dc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Xh(a);
          Dc(t.stateNode, t.type, i);
        }
      }
    }
    function Lc(e) {
      Dc = e;
    }
    function yu(e) {
      Sl ? Yt ? Yt.push(e) : Yt = [e] : Sl = e;
    }
    function Bv() {
      return Sl !== null || Yt !== null;
    }
    function Mc() {
      if (Sl) {
        var e = Sl, t = Yt;
        if (Sl = null, Yt = null, Oc(e), t)
          for (var a = 0; a < t.length; a++)
            Oc(t[a]);
      }
    }
    var gu = function(e, t) {
      return e(t);
    }, ps = function() {
    }, Lo = !1;
    function $v() {
      var e = Bv();
      e && (ps(), Mc());
    }
    function Wv(e, t, a) {
      if (Lo)
        return e(t, a);
      Lo = !0;
      try {
        return gu(e, t, a);
      } finally {
        Lo = !1, $v();
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
    function Mo(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Xh(a);
      if (i === null)
        return null;
      var l = i[t];
      if (Nc(t, e.type, i))
        return null;
      if (l && typeof l != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof l + "` type.");
      return l;
    }
    var vs = !1;
    if (Nn)
      try {
        var _l = {};
        Object.defineProperty(_l, "passive", {
          get: function() {
            vs = !0;
          }
        }), window.addEventListener("test", _l, _l), window.removeEventListener("test", _l, _l);
      } catch {
        vs = !1;
      }
    function Ac(e, t, a, i, l, s, f, p, g) {
      var C = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, C);
      } catch (E) {
        this.onError(E);
      }
    }
    var Uc = Ac;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Dd = document.createElement("react");
      Uc = function(t, a, i, l, s, f, p, g, C) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var E = document.createEvent("Event"), A = !1, M = !0, I = window.event, Y = Object.getOwnPropertyDescriptor(window, "event");
        function J() {
          Dd.removeEventListener(Z, rt, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = I);
        }
        var De = Array.prototype.slice.call(arguments, 3);
        function rt() {
          A = !0, J(), a.apply(i, De), M = !1;
        }
        var qe, Ut = !1, Ot = !1;
        function F(P) {
          if (qe = P.error, Ut = !0, qe === null && P.colno === 0 && P.lineno === 0 && (Ot = !0), P.defaultPrevented && qe != null && typeof qe == "object")
            try {
              qe._suppressLogging = !0;
            } catch {
            }
        }
        var Z = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", F), Dd.addEventListener(Z, rt, !1), E.initEvent(Z, !1, !1), Dd.dispatchEvent(E), Y && Object.defineProperty(window, "event", Y), A && M && (Ut ? Ot && (qe = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : qe = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(qe)), window.removeEventListener("error", F), !A)
          return J(), Ac.apply(this, arguments);
      };
    }
    var Qv = Uc, Su = !1, jc = null, _u = !1, bi = null, Gv = {
      onError: function(e) {
        Su = !0, jc = e;
      }
    };
    function No(e, t, a, i, l, s, f, p, g) {
      Su = !1, jc = null, Qv.apply(Gv, arguments);
    }
    function Ti(e, t, a, i, l, s, f, p, g) {
      if (No.apply(this, arguments), Su) {
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
    function Ji() {
      return Su;
    }
    function ms() {
      if (Su) {
        var e = jc;
        return Su = !1, jc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Cu(e) {
      return e._reactInternals;
    }
    function Uy(e) {
      return e._reactInternals !== void 0;
    }
    function Cl(e, t) {
      e._reactInternals = t;
    }
    var Ze = (
      /*                      */
      0
    ), oi = (
      /*                */
      1
    ), gn = (
      /*                    */
      2
    ), Mt = (
      /*                       */
      4
    ), Na = (
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
    ), br = (
      /*            */
      256
    ), En = (
      /*                          */
      512
    ), Gn = (
      /*                     */
      1024
    ), Jr = (
      /*                      */
      2048
    ), Zr = (
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
    ), er = (
      /*                */
      65536
    ), zc = (
      /* */
      131072
    ), xi = (
      /*                       */
      1048576
    ), Ru = (
      /*                    */
      2097152
    ), Zi = (
      /*                 */
      4194304
    ), Fc = (
      /*                */
      8388608
    ), Ao = (
      /*               */
      16777216
    ), wi = (
      /*              */
      33554432
    ), Uo = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Mt | Gn | 0
    ), jo = gn | Mt | Na | Aa | En | Zr | jn, zo = Mt | sn | En | jn, eo = Jr | Na, zn = Zi | Fc | Ru, Ua = m.ReactCurrentOwner;
    function ya(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (gn | Zr)) !== Ze && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === $ ? a : null;
    }
    function ki(e) {
      if (e.tag === he) {
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
    function El(e) {
      return ya(e) === e;
    }
    function Kv(e) {
      {
        var t = Ua.current;
        if (t !== null && t.tag === T) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || h("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", vt(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var l = Cu(e);
      return l ? ya(l) === l : !1;
    }
    function Pc(e) {
      if (ya(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Vc(e) {
      var t = e.alternate;
      if (!t) {
        var a = ya(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, l = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = l = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var g = s.child; g; ) {
            if (g === i)
              return Pc(s), e;
            if (g === l)
              return Pc(s), t;
            g = g.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== l.return)
          i = s, l = f;
        else {
          for (var C = !1, E = s.child; E; ) {
            if (E === i) {
              C = !0, i = s, l = f;
              break;
            }
            if (E === l) {
              C = !0, l = s, i = f;
              break;
            }
            E = E.sibling;
          }
          if (!C) {
            for (E = f.child; E; ) {
              if (E === i) {
                C = !0, i = f, l = s;
                break;
              }
              if (E === l) {
                C = !0, l = f, i = s;
                break;
              }
              E = E.sibling;
            }
            if (!C)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== l)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== $)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function ea(e) {
      var t = Vc(e);
      return t !== null ? ta(t) : null;
    }
    function ta(e) {
      if (e.tag === G || e.tag === ve)
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
      var t = Vc(e);
      return t !== null ? ja(t) : null;
    }
    function ja(e) {
      if (e.tag === G || e.tag === ve)
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
    var Od = y.unstable_scheduleCallback, Xv = y.unstable_cancelCallback, Ld = y.unstable_shouldYield, Md = y.unstable_requestPaint, qn = y.unstable_now, Hc = y.unstable_getCurrentPriorityLevel, gs = y.unstable_ImmediatePriority, Fo = y.unstable_UserBlockingPriority, to = y.unstable_NormalPriority, jy = y.unstable_LowPriority, Rl = y.unstable_IdlePriority, Ic = y.unstable_yieldValue, Jv = y.unstable_setDisableYieldValue, bl = null, wn = null, ke = null, ga = !1, na = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function bu(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return h("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Je && (e = Rt({}, e, {
          getLaneLabelMap: Tl,
          injectProfilingHooks: za
        })), bl = t.inject(e), wn = t;
      } catch (a) {
        h("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Nd(e, t) {
      if (wn && typeof wn.onScheduleFiberRoot == "function")
        try {
          wn.onScheduleFiberRoot(bl, e, t);
        } catch (a) {
          ga || (ga = !0, h("React instrumentation encountered an error: %s", a));
        }
    }
    function Ad(e, t) {
      if (wn && typeof wn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Ke) === Ke;
          if (je) {
            var i;
            switch (t) {
              case Ar:
                i = gs;
                break;
              case Li:
                i = Fo;
                break;
              case Fa:
                i = to;
                break;
              case Pa:
                i = Rl;
                break;
              default:
                i = to;
                break;
            }
            wn.onCommitFiberRoot(bl, e, i, a);
          }
        } catch (l) {
          ga || (ga = !0, h("React instrumentation encountered an error: %s", l));
        }
    }
    function Ud(e) {
      if (wn && typeof wn.onPostCommitFiberRoot == "function")
        try {
          wn.onPostCommitFiberRoot(bl, e);
        } catch (t) {
          ga || (ga = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    function jd(e) {
      if (wn && typeof wn.onCommitFiberUnmount == "function")
        try {
          wn.onCommitFiberUnmount(bl, e);
        } catch (t) {
          ga || (ga = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    function Sn(e) {
      if (typeof Ic == "function" && (Jv(e), L(e)), wn && typeof wn.setStrictMode == "function")
        try {
          wn.setStrictMode(bl, e);
        } catch (t) {
          ga || (ga = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    function za(e) {
      ke = e;
    }
    function Tl() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < kl; a++) {
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
    function Zv() {
      ke !== null && typeof ke.markComponentPassiveEffectMountStopped == "function" && ke.markComponentPassiveEffectMountStopped();
    }
    function no(e) {
      ke !== null && typeof ke.markComponentPassiveEffectUnmountStarted == "function" && ke.markComponentPassiveEffectUnmountStarted(e);
    }
    function Po() {
      ke !== null && typeof ke.markComponentPassiveEffectUnmountStopped == "function" && ke.markComponentPassiveEffectUnmountStopped();
    }
    function Bc(e) {
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
    function xl(e) {
      ke !== null && typeof ke.markPassiveEffectsStarted == "function" && ke.markPassiveEffectsStarted(e);
    }
    function Hd() {
      ke !== null && typeof ke.markPassiveEffectsStopped == "function" && ke.markPassiveEffectsStopped();
    }
    function wl(e) {
      ke !== null && typeof ke.markRenderStarted == "function" && ke.markRenderStarted(e);
    }
    function th() {
      ke !== null && typeof ke.markRenderYielded == "function" && ke.markRenderYielded();
    }
    function $c() {
      ke !== null && typeof ke.markRenderStopped == "function" && ke.markRenderStopped();
    }
    function _n(e) {
      ke !== null && typeof ke.markRenderScheduled == "function" && ke.markRenderScheduled(e);
    }
    function Wc(e, t) {
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
    ), Fn = Math.clz32 ? Math.clz32 : bs, tr = Math.log, Yc = Math.LN2;
    function bs(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (tr(t) / Yc | 0) | 0;
    }
    var kl = 31, ie = (
      /*                        */
      0
    ), Ft = (
      /*                          */
      0
    ), ct = (
      /*                        */
      1
    ), Vo = (
      /*    */
      2
    ), li = (
      /*             */
      4
    ), Tr = (
      /*            */
      8
    ), kn = (
      /*                     */
      16
    ), ro = (
      /*                */
      32
    ), Ho = (
      /*                       */
      4194240
    ), Dl = (
      /*                        */
      64
    ), Qc = (
      /*                        */
      128
    ), Gc = (
      /*                        */
      256
    ), qc = (
      /*                        */
      512
    ), Kc = (
      /*                        */
      1024
    ), Xc = (
      /*                        */
      2048
    ), Jc = (
      /*                        */
      4096
    ), Zc = (
      /*                        */
      8192
    ), ef = (
      /*                        */
      16384
    ), Ol = (
      /*                       */
      32768
    ), tf = (
      /*                       */
      65536
    ), Tu = (
      /*                       */
      131072
    ), xu = (
      /*                       */
      262144
    ), nf = (
      /*                       */
      524288
    ), Ts = (
      /*                       */
      1048576
    ), rf = (
      /*                       */
      2097152
    ), xs = (
      /*                            */
      130023424
    ), Ll = (
      /*                             */
      4194304
    ), af = (
      /*                             */
      8388608
    ), ws = (
      /*                             */
      16777216
    ), of = (
      /*                             */
      33554432
    ), lf = (
      /*                             */
      67108864
    ), Id = Ll, ks = (
      /*          */
      134217728
    ), Bd = (
      /*                          */
      268435455
    ), Ds = (
      /*               */
      268435456
    ), Ml = (
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
        if (e & Vo)
          return "InputContinuousHydration";
        if (e & li)
          return "InputContinuous";
        if (e & Tr)
          return "DefaultHydration";
        if (e & kn)
          return "Default";
        if (e & ro)
          return "TransitionHydration";
        if (e & Ho)
          return "Transition";
        if (e & xs)
          return "Retry";
        if (e & ks)
          return "SelectiveHydration";
        if (e & Ds)
          return "IdleHydration";
        if (e & Ml)
          return "Idle";
        if (e & ra)
          return "Offscreen";
      }
    }
    var rn = -1, Nl = Dl, uf = Ll;
    function Os(e) {
      switch (Io(e)) {
        case ct:
          return ct;
        case Vo:
          return Vo;
        case li:
          return li;
        case Tr:
          return Tr;
        case kn:
          return kn;
        case ro:
          return ro;
        case Dl:
        case Qc:
        case Gc:
        case qc:
        case Kc:
        case Xc:
        case Jc:
        case Zc:
        case ef:
        case Ol:
        case tf:
        case Tu:
        case xu:
        case nf:
        case Ts:
        case rf:
          return e & Ho;
        case Ll:
        case af:
        case ws:
        case of:
        case lf:
          return e & xs;
        case ks:
          return ks;
        case Ds:
          return Ds;
        case Ml:
          return Ml;
        case ra:
          return ra;
        default:
          return h("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function sf(e, t) {
      var a = e.pendingLanes;
      if (a === ie)
        return ie;
      var i = ie, l = e.suspendedLanes, s = e.pingedLanes, f = a & Bd;
      if (f !== ie) {
        var p = f & ~l;
        if (p !== ie)
          i = Os(p);
        else {
          var g = f & s;
          g !== ie && (i = Os(g));
        }
      } else {
        var C = a & ~l;
        C !== ie ? i = Os(C) : s !== ie && (i = Os(s));
      }
      if (i === ie)
        return ie;
      if (t !== ie && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & l) === ie) {
        var E = Io(i), A = Io(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          E >= A || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          E === kn && (A & Ho) !== ie
        )
          return t;
      }
      (i & li) !== ie && (i |= a & kn);
      var M = e.entangledLanes;
      if (M !== ie)
        for (var I = e.entanglements, Y = i & M; Y > 0; ) {
          var J = Pn(Y), De = 1 << J;
          i |= I[J], Y &= ~De;
        }
      return i;
    }
    function ui(e, t) {
      for (var a = e.eventTimes, i = rn; t > 0; ) {
        var l = Pn(t), s = 1 << l, f = a[l];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function $d(e, t) {
      switch (e) {
        case ct:
        case Vo:
        case li:
          return t + 250;
        case Tr:
        case kn:
        case ro:
        case Dl:
        case Qc:
        case Gc:
        case qc:
        case Kc:
        case Xc:
        case Jc:
        case Zc:
        case ef:
        case Ol:
        case tf:
        case Tu:
        case xu:
        case nf:
        case Ts:
        case rf:
          return t + 5e3;
        case Ll:
        case af:
        case ws:
        case of:
        case lf:
          return rn;
        case ks:
        case Ds:
        case Ml:
        case ra:
          return rn;
        default:
          return h("Should have found matching lanes. This is a bug in React."), rn;
      }
    }
    function cf(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, l = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Pn(f), g = 1 << p, C = s[p];
        C === rn ? ((g & i) === ie || (g & l) !== ie) && (s[p] = $d(g, t)) : C <= t && (e.expiredLanes |= g), f &= ~g;
      }
    }
    function rh(e) {
      return Os(e.pendingLanes);
    }
    function ff(e) {
      var t = e.pendingLanes & ~ra;
      return t !== ie ? t : t & ra ? ra : ie;
    }
    function ah(e) {
      return (e & ct) !== ie;
    }
    function Ls(e) {
      return (e & Bd) !== ie;
    }
    function Al(e) {
      return (e & xs) === e;
    }
    function Wd(e) {
      var t = ct | li | kn;
      return (e & t) === ie;
    }
    function Yd(e) {
      return (e & Ho) === e;
    }
    function df(e, t) {
      var a = Vo | li | Tr | kn;
      return (t & a) !== ie;
    }
    function ih(e, t) {
      return (t & e.expiredLanes) !== ie;
    }
    function Qd(e) {
      return (e & Ho) !== ie;
    }
    function Gd() {
      var e = Nl;
      return Nl <<= 1, (Nl & Ho) === ie && (Nl = Dl), e;
    }
    function oh() {
      var e = uf;
      return uf <<= 1, (uf & xs) === ie && (uf = Ll), e;
    }
    function Io(e) {
      return e & -e;
    }
    function Ms(e) {
      return Io(e);
    }
    function Pn(e) {
      return 31 - Fn(e);
    }
    function cr(e) {
      return Pn(e);
    }
    function aa(e, t) {
      return (e & t) !== ie;
    }
    function Ul(e, t) {
      return (e & t) === t;
    }
    function Et(e, t) {
      return e | t;
    }
    function Ns(e, t) {
      return e & ~t;
    }
    function qd(e, t) {
      return e & t;
    }
    function lh(e) {
      return e;
    }
    function uh(e, t) {
      return e !== Ft && e < t ? e : t;
    }
    function As(e) {
      for (var t = [], a = 0; a < kl; a++)
        t.push(e);
      return t;
    }
    function wu(e, t, a) {
      e.pendingLanes |= t, t !== Ml && (e.suspendedLanes = ie, e.pingedLanes = ie);
      var i = e.eventTimes, l = cr(t);
      i[l] = a;
    }
    function sh(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var l = Pn(i), s = 1 << l;
        a[l] = rn, i &= ~s;
      }
    }
    function pf(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Kd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = ie, e.pingedLanes = ie, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, l = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Pn(f), g = 1 << p;
        i[p] = ie, l[p] = rn, s[p] = rn, f &= ~g;
      }
    }
    function vf(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, l = a; l; ) {
        var s = Pn(l), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), l &= ~f;
      }
    }
    function Xd(e, t) {
      var a = Io(t), i;
      switch (a) {
        case li:
          i = Vo;
          break;
        case kn:
          i = Tr;
          break;
        case Dl:
        case Qc:
        case Gc:
        case qc:
        case Kc:
        case Xc:
        case Jc:
        case Zc:
        case ef:
        case Ol:
        case tf:
        case Tu:
        case xu:
        case nf:
        case Ts:
        case rf:
        case Ll:
        case af:
        case ws:
        case of:
        case lf:
          i = ro;
          break;
        case Ml:
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
          var l = cr(a), s = 1 << l, f = i[l];
          f.add(t), a &= ~s;
        }
    }
    function ch(e, t) {
      if (na)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var l = cr(t), s = 1 << l, f = a[l];
          f.size > 0 && (f.forEach(function(p) {
            var g = p.alternate;
            (g === null || !i.has(g)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Jd(e, t) {
      return null;
    }
    var Ar = ct, Li = li, Fa = kn, Pa = Ml, js = Ft;
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
    function nr(e, t) {
      return e !== 0 && e < t;
    }
    function ph(e) {
      var t = Io(e);
      return nr(Ar, t) ? nr(Li, t) ? Ls(t) ? Fa : Pa : Li : Ar;
    }
    function hf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Fs;
    function xr(e) {
      Fs = e;
    }
    function zy(e) {
      Fs(e);
    }
    var Fe;
    function ku(e) {
      Fe = e;
    }
    var mf;
    function vh(e) {
      mf = e;
    }
    var hh;
    function Ps(e) {
      hh = e;
    }
    var Vs;
    function Zd(e) {
      Vs = e;
    }
    var yf = !1, Hs = [], ao = null, Mi = null, Ni = null, Dn = /* @__PURE__ */ new Map(), Ur = /* @__PURE__ */ new Map(), jr = [], mh = [
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
    function si(e, t, a, i, l) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: l,
        targetContainers: [i]
      };
    }
    function ep(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          ao = null;
          break;
        case "dragenter":
        case "dragleave":
          Mi = null;
          break;
        case "mouseover":
        case "mouseout":
          Ni = null;
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
          Ur.delete(i);
          break;
        }
      }
    }
    function ia(e, t, a, i, l, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = si(t, a, i, l, s);
        if (t !== null) {
          var p = zu(t);
          p !== null && Fe(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var g = e.targetContainers;
      return l !== null && g.indexOf(l) === -1 && g.push(l), e;
    }
    function Fy(e, t, a, i, l) {
      switch (t) {
        case "focusin": {
          var s = l;
          return ao = ia(ao, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = l;
          return Mi = ia(Mi, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = l;
          return Ni = ia(Ni, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var g = l, C = g.pointerId;
          return Dn.set(C, ia(Dn.get(C) || null, e, t, a, i, g)), !0;
        }
        case "gotpointercapture": {
          var E = l, A = E.pointerId;
          return Ur.set(A, ia(Ur.get(A) || null, e, t, a, i, E)), !0;
        }
      }
      return !1;
    }
    function tp(e) {
      var t = Zs(e.target);
      if (t !== null) {
        var a = ya(t);
        if (a !== null) {
          var i = a.tag;
          if (i === he) {
            var l = ki(a);
            if (l !== null) {
              e.blockedOn = l, Vs(e.priority, function() {
                mf(a);
              });
              return;
            }
          } else if (i === $) {
            var s = a.stateNode;
            if (hf(s)) {
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
      }, i = 0; i < jr.length && nr(t, jr[i].priority); i++)
        ;
      jr.splice(i, 0, a), i === 0 && tp(a);
    }
    function Is(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Ou(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var l = e.nativeEvent, s = new l.constructor(l.type, l);
          My(s), l.target.dispatchEvent(s), Ny();
        } else {
          var f = zu(i);
          return f !== null && Fe(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function np(e, t, a) {
      Is(e) && a.delete(t);
    }
    function Py() {
      yf = !1, ao !== null && Is(ao) && (ao = null), Mi !== null && Is(Mi) && (Mi = null), Ni !== null && Is(Ni) && (Ni = null), Dn.forEach(np), Ur.forEach(np);
    }
    function Bo(e, t) {
      e.blockedOn === t && (e.blockedOn = null, yf || (yf = !0, y.unstable_scheduleCallback(y.unstable_NormalPriority, Py)));
    }
    function jl(e) {
      if (Hs.length > 0) {
        Bo(Hs[0], e);
        for (var t = 1; t < Hs.length; t++) {
          var a = Hs[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      ao !== null && Bo(ao, e), Mi !== null && Bo(Mi, e), Ni !== null && Bo(Ni, e);
      var i = function(p) {
        return Bo(p, e);
      };
      Dn.forEach(i), Ur.forEach(i);
      for (var l = 0; l < jr.length; l++) {
        var s = jr[l];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; jr.length > 0; ) {
        var f = jr[0];
        if (f.blockedOn !== null)
          break;
        tp(f), f.blockedOn === null && jr.shift();
      }
    }
    var fr = m.ReactCurrentBatchConfig, Nt = !0;
    function Kn(e) {
      Nt = !!e;
    }
    function Hn() {
      return Nt;
    }
    function dr(e, t, a) {
      var i = gf(t), l;
      switch (i) {
        case Ar:
          l = Ca;
          break;
        case Li:
          l = Du;
          break;
        case Fa:
        default:
          l = On;
          break;
      }
      return l.bind(null, t, a, e);
    }
    function Ca(e, t, a, i) {
      var l = Va(), s = fr.transition;
      fr.transition = null;
      try {
        Vn(Ar), On(e, t, a, i);
      } finally {
        Vn(l), fr.transition = s;
      }
    }
    function Du(e, t, a, i) {
      var l = Va(), s = fr.transition;
      fr.transition = null;
      try {
        Vn(Li), On(e, t, a, i);
      } finally {
        Vn(l), fr.transition = s;
      }
    }
    function On(e, t, a, i) {
      Nt && Bs(e, t, a, i);
    }
    function Bs(e, t, a, i) {
      var l = Ou(e, t, a, i);
      if (l === null) {
        ng(e, t, i, Ai, a), ep(e, i);
        return;
      }
      if (Fy(l, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (ep(e, i), t & Ma && yh(e)) {
        for (; l !== null; ) {
          var s = zu(l);
          s !== null && zy(s);
          var f = Ou(e, t, a, i);
          if (f === null && ng(e, t, i, Ai, a), f === l)
            break;
          l = f;
        }
        l !== null && i.stopPropagation();
        return;
      }
      ng(e, t, i, null, a);
    }
    var Ai = null;
    function Ou(e, t, a, i) {
      Ai = null;
      var l = kd(i), s = Zs(l);
      if (s !== null) {
        var f = ya(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === he) {
            var g = ki(f);
            if (g !== null)
              return g;
            s = null;
          } else if (p === $) {
            var C = f.stateNode;
            if (hf(C))
              return Di(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Ai = s, null;
    }
    function gf(e) {
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
          return Ar;
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
          var t = Hc();
          switch (t) {
            case gs:
              return Ar;
            case Fo:
              return Li;
            case to:
            case jy:
              return Fa;
            case Rl:
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
    function oa(e, t, a) {
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
    var Ea = null, Mu = null, zl = null;
    function $o(e) {
      return Ea = e, Mu = Ws(), !0;
    }
    function Sf() {
      Ea = null, Mu = null, zl = null;
    }
    function io() {
      if (zl)
        return zl;
      var e, t = Mu, a = t.length, i, l = Ws(), s = l.length;
      for (e = 0; e < a && t[e] === l[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === l[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return zl = l.slice(e, p), zl;
    }
    function Ws() {
      return "value" in Ea ? Ea.value : Ea.textContent;
    }
    function Wo(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Nu() {
      return !0;
    }
    function Ys() {
      return !1;
    }
    function wr(e) {
      function t(a, i, l, s, f) {
        this._reactName = a, this._targetInst = l, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var g = e[p];
            g ? this[p] = g(s) : this[p] = s[p];
          }
        var C = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return C ? this.isDefaultPrevented = Nu : this.isDefaultPrevented = Ys, this.isPropagationStopped = Ys, this;
      }
      return Rt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Nu);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Nu);
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
        isPersistent: Nu
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
    }, Ui = wr(In), zr = Rt({}, In, {
      view: 0,
      detail: 0
    }), la = wr(zr), _f, Qs, Fl;
    function Vy(e) {
      e !== Fl && (Fl && e.type === "mousemove" ? (_f = e.screenX - Fl.screenX, Qs = e.screenY - Fl.screenY) : (_f = 0, Qs = 0), Fl = e);
    }
    var ci = Rt({}, zr, {
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
        return "movementX" in e ? e.movementX : (Vy(e), _f);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Qs;
      }
    }), ap = wr(ci), ip = Rt({}, ci, {
      dataTransfer: 0
    }), Pl = wr(ip), op = Rt({}, zr, {
      relatedTarget: 0
    }), oo = wr(op), Sh = Rt({}, In, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), _h = wr(Sh), lp = Rt({}, In, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Cf = wr(lp), Hy = Rt({}, In, {
      data: 0
    }), Ch = wr(Hy), Eh = Ch, Rh = {
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
    }, Vl = {
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
        var a = Wo(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Vl[e.keyCode] || "Unidentified" : "";
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
    var By = Rt({}, zr, {
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
        return e.type === "keypress" ? Wo(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Wo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Th = wr(By), $y = Rt({}, ci, {
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
    }), xh = wr($y), wh = Rt({}, zr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: hn
    }), kh = wr(wh), Wy = Rt({}, In, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Ha = wr(Wy), up = Rt({}, ci, {
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
    }), Yy = wr(up), Yo = [9, 13, 27, 32], Gs = 229, lo = Nn && "CompositionEvent" in window, Qo = null;
    Nn && "documentMode" in document && (Qo = document.documentMode);
    var sp = Nn && "TextEvent" in window && !Qo, Ef = Nn && (!lo || Qo && Qo > 8 && Qo <= 11), Dh = 32, Rf = String.fromCharCode(Dh);
    function Qy() {
      dt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), dt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), dt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), dt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var cp = !1;
    function Oh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function bf(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Tf(e, t) {
      return e === "keydown" && t.keyCode === Gs;
    }
    function fp(e, t) {
      switch (e) {
        case "keyup":
          return Yo.indexOf(t.keyCode) !== -1;
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
    function xf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Lh(e) {
      return e.locale === "ko";
    }
    var Hl = !1;
    function dp(e, t, a, i, l) {
      var s, f;
      if (lo ? s = bf(t) : Hl ? fp(t, i) && (s = "onCompositionEnd") : Tf(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Ef && !Lh(i) && (!Hl && s === "onCompositionStart" ? Hl = $o(l) : s === "onCompositionEnd" && Hl && (f = io()));
      var p = Fh(a, s);
      if (p.length > 0) {
        var g = new Ch(s, t, null, i, l);
        if (e.push({
          event: g,
          listeners: p
        }), f)
          g.data = f;
        else {
          var C = xf(i);
          C !== null && (g.data = C);
        }
      }
    }
    function wf(e, t) {
      switch (e) {
        case "compositionend":
          return xf(t);
        case "keypress":
          var a = t.which;
          return a !== Dh ? null : (cp = !0, Rf);
        case "textInput":
          var i = t.data;
          return i === Rf && cp ? null : i;
        default:
          return null;
      }
    }
    function pp(e, t) {
      if (Hl) {
        if (e === "compositionend" || !lo && fp(e, t)) {
          var a = io();
          return Sf(), Hl = !1, a;
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
          return Ef && !Lh(t) ? null : t.data;
        default:
          return null;
      }
    }
    function kf(e, t, a, i, l) {
      var s;
      if (sp ? s = wf(t, i) : s = pp(t, i), !s)
        return null;
      var f = Fh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new Eh("onBeforeInput", "beforeinput", null, i, l);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function Mh(e, t, a, i, l, s, f) {
      dp(e, t, a, i, l), kf(e, t, a, i, l);
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
      if (!Nn)
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
    function Nh(e, t, a, i) {
      yu(i);
      var l = Fh(t, "onChange");
      if (l.length > 0) {
        var s = new Ui("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: l
        });
      }
    }
    var Go = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function o(e) {
      var t = [];
      Nh(t, n, e, kd(e)), Wv(u, t);
    }
    function u(e) {
      s_(e, 0);
    }
    function c(e) {
      var t = Af(e);
      if (Ei(t))
        return e;
    }
    function d(e, t) {
      if (e === "change")
        return t;
    }
    var _ = !1;
    Nn && (_ = qy("input") && (!document.documentMode || document.documentMode > 9));
    function x(e, t) {
      Go = e, n = t, Go.attachEvent("onpropertychange", W);
    }
    function O() {
      Go && (Go.detachEvent("onpropertychange", W), Go = null, n = null);
    }
    function W(e) {
      e.propertyName === "value" && c(n) && o(e);
    }
    function se(e, t, a) {
      e === "focusin" ? (O(), x(t, a)) : e === "focusout" && O();
    }
    function fe(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return c(n);
    }
    function le(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Ae(e, t) {
      if (e === "click")
        return c(t);
    }
    function Be(e, t) {
      if (e === "input" || e === "change")
        return c(t);
    }
    function Ye(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || nt(e, "number", e.value);
    }
    function Ln(e, t, a, i, l, s, f) {
      var p = a ? Af(a) : window, g, C;
      if (r(p) ? g = d : qs(p) ? _ ? g = Be : (g = fe, C = se) : le(p) && (g = Ae), g) {
        var E = g(t, a);
        if (E) {
          Nh(e, E, i, l);
          return;
        }
      }
      C && C(t, p, a), t === "focusout" && Ye(p);
    }
    function z() {
      Gt("onMouseEnter", ["mouseout", "mouseover"]), Gt("onMouseLeave", ["mouseout", "mouseover"]), Gt("onPointerEnter", ["pointerout", "pointerover"]), Gt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function N(e, t, a, i, l, s, f) {
      var p = t === "mouseover" || t === "pointerover", g = t === "mouseout" || t === "pointerout";
      if (p && !ds(i)) {
        var C = i.relatedTarget || i.fromElement;
        if (C && (Zs(C) || wp(C)))
          return;
      }
      if (!(!g && !p)) {
        var E;
        if (l.window === l)
          E = l;
        else {
          var A = l.ownerDocument;
          A ? E = A.defaultView || A.parentWindow : E = window;
        }
        var M, I;
        if (g) {
          var Y = i.relatedTarget || i.toElement;
          if (M = a, I = Y ? Zs(Y) : null, I !== null) {
            var J = ya(I);
            (I !== J || I.tag !== G && I.tag !== ve) && (I = null);
          }
        } else
          M = null, I = a;
        if (M !== I) {
          var De = ap, rt = "onMouseLeave", qe = "onMouseEnter", Ut = "mouse";
          (t === "pointerout" || t === "pointerover") && (De = xh, rt = "onPointerLeave", qe = "onPointerEnter", Ut = "pointer");
          var Ot = M == null ? E : Af(M), F = I == null ? E : Af(I), Z = new De(rt, Ut + "leave", M, i, l);
          Z.target = Ot, Z.relatedTarget = F;
          var P = null, de = Zs(l);
          if (de === a) {
            var ze = new De(qe, Ut + "enter", I, i, l);
            ze.target = F, ze.relatedTarget = Ot, P = ze;
          }
          $2(e, Z, P, M, I);
        }
      }
    }
    function H(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ce = typeof Object.is == "function" ? Object.is : H;
    function $e(e, t) {
      if (ce(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var l = 0; l < a.length; l++) {
        var s = a[l];
        if (!kr.call(t, s) || !ce(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function at(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function ot(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function pt(e, t) {
      for (var a = at(e), i = 0, l = 0; a; ) {
        if (a.nodeType === Ki) {
          if (l = i + a.textContent.length, i <= t && l >= t)
            return {
              node: a,
              offset: t - i
            };
          i = l;
        }
        a = at(ot(a));
      }
    }
    function rr(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var l = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        l.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return It(e, l, s, f, p);
    }
    function It(e, t, a, i, l) {
      var s = 0, f = -1, p = -1, g = 0, C = 0, E = e, A = null;
      e: for (; ; ) {
        for (var M = null; E === t && (a === 0 || E.nodeType === Ki) && (f = s + a), E === i && (l === 0 || E.nodeType === Ki) && (p = s + l), E.nodeType === Ki && (s += E.nodeValue.length), (M = E.firstChild) !== null; )
          A = E, E = M;
        for (; ; ) {
          if (E === e)
            break e;
          if (A === t && ++g === a && (f = s), A === i && ++C === l && (p = s), (M = E.nextSibling) !== null)
            break;
          E = A, A = E.parentNode;
        }
        E = M;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function qo(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var l = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!l.extend && f > p) {
          var g = p;
          p = f, f = g;
        }
        var C = pt(e, f), E = pt(e, p);
        if (C && E) {
          if (l.rangeCount === 1 && l.anchorNode === C.node && l.anchorOffset === C.offset && l.focusNode === E.node && l.focusOffset === E.offset)
            return;
          var A = a.createRange();
          A.setStart(C.node, C.offset), l.removeAllRanges(), f > p ? (l.addRange(A), l.extend(E.node, E.offset)) : (A.setEnd(E.node, E.offset), l.addRange(A));
        }
      }
    }
    function Ah(e) {
      return e && e.nodeType === Ki;
    }
    function JS(e, t) {
      return !e || !t ? !1 : e === t ? !0 : Ah(e) ? !1 : Ah(t) ? JS(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function x2(e) {
      return e && e.ownerDocument && JS(e.ownerDocument.documentElement, e);
    }
    function w2(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function ZS() {
      for (var e = window, t = La(); t instanceof e.HTMLIFrameElement; ) {
        if (w2(t))
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
    function k2() {
      var e = ZS();
      return {
        focusedElem: e,
        selectionRange: Ky(e) ? O2(e) : null
      };
    }
    function D2(e) {
      var t = ZS(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && x2(a)) {
        i !== null && Ky(a) && L2(a, i);
        for (var l = [], s = a; s = s.parentNode; )
          s.nodeType === Xr && l.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < l.length; f++) {
          var p = l[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function O2(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = rr(e), t || {
        start: 0,
        end: 0
      };
    }
    function L2(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : qo(e, t);
    }
    var M2 = Nn && "documentMode" in document && document.documentMode <= 11;
    function N2() {
      dt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Df = null, Xy = null, vp = null, Jy = !1;
    function A2(e) {
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
    function U2(e) {
      return e.window === e ? e.document : e.nodeType === Xi ? e : e.ownerDocument;
    }
    function e_(e, t, a) {
      var i = U2(a);
      if (!(Jy || Df == null || Df !== La(i))) {
        var l = A2(Df);
        if (!vp || !$e(vp, l)) {
          vp = l;
          var s = Fh(Xy, "onSelect");
          if (s.length > 0) {
            var f = new Ui("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Df;
          }
        }
      }
    }
    function j2(e, t, a, i, l, s, f) {
      var p = a ? Af(a) : window;
      switch (t) {
        // Track the input node that has focus.
        case "focusin":
          (qs(p) || p.contentEditable === "true") && (Df = p, Xy = a, vp = null);
          break;
        case "focusout":
          Df = null, Xy = null, vp = null;
          break;
        // Don't fire the event while the user is dragging. This matches the
        // semantics of the native select event.
        case "mousedown":
          Jy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Jy = !1, e_(e, i, l);
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
          if (M2)
            break;
        // falls through
        case "keydown":
        case "keyup":
          e_(e, i, l);
      }
    }
    function Uh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Of = {
      animationend: Uh("Animation", "AnimationEnd"),
      animationiteration: Uh("Animation", "AnimationIteration"),
      animationstart: Uh("Animation", "AnimationStart"),
      transitionend: Uh("Transition", "TransitionEnd")
    }, Zy = {}, t_ = {};
    Nn && (t_ = document.createElement("div").style, "AnimationEvent" in window || (delete Of.animationend.animation, delete Of.animationiteration.animation, delete Of.animationstart.animation), "TransitionEvent" in window || delete Of.transitionend.transition);
    function jh(e) {
      if (Zy[e])
        return Zy[e];
      if (!Of[e])
        return e;
      var t = Of[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in t_)
          return Zy[e] = t[a];
      return e;
    }
    var n_ = jh("animationend"), r_ = jh("animationiteration"), a_ = jh("animationstart"), i_ = jh("transitionend"), o_ = /* @__PURE__ */ new Map(), l_ = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Uu(e, t) {
      o_.set(e, t), dt(t, [e]);
    }
    function z2() {
      for (var e = 0; e < l_.length; e++) {
        var t = l_[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Uu(a, "on" + i);
      }
      Uu(n_, "onAnimationEnd"), Uu(r_, "onAnimationIteration"), Uu(a_, "onAnimationStart"), Uu("dblclick", "onDoubleClick"), Uu("focusin", "onFocus"), Uu("focusout", "onBlur"), Uu(i_, "onTransitionEnd");
    }
    function F2(e, t, a, i, l, s, f) {
      var p = o_.get(t);
      if (p !== void 0) {
        var g = Ui, C = t;
        switch (t) {
          case "keypress":
            if (Wo(i) === 0)
              return;
          /* falls through */
          case "keydown":
          case "keyup":
            g = Th;
            break;
          case "focusin":
            C = "focus", g = oo;
            break;
          case "focusout":
            C = "blur", g = oo;
            break;
          case "beforeblur":
          case "afterblur":
            g = oo;
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
            g = Pl;
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
            g = la;
            break;
          case "wheel":
            g = Yy;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Cf;
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
        var E = (s & Ma) !== 0;
        {
          var A = !E && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", M = I2(a, p, i.type, E, A);
          if (M.length > 0) {
            var I = new g(p, C, null, i, l);
            e.push({
              event: I,
              listeners: M
            });
          }
        }
      }
    }
    z2(), z(), Ks(), N2(), Qy();
    function P2(e, t, a, i, l, s, f) {
      F2(e, t, a, i, l, s);
      var p = (s & wd) === 0;
      p && (N(e, t, a, i, l), Ln(e, t, a, i, l), j2(e, t, a, i, l), Mh(e, t, a, i, l));
    }
    var hp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], eg = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(hp));
    function u_(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ti(i, t, void 0, e), e.currentTarget = null;
    }
    function V2(e, t, a) {
      var i;
      if (a)
        for (var l = t.length - 1; l >= 0; l--) {
          var s = t[l], f = s.instance, p = s.currentTarget, g = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          u_(e, g, p), i = f;
        }
      else
        for (var C = 0; C < t.length; C++) {
          var E = t[C], A = E.instance, M = E.currentTarget, I = E.listener;
          if (A !== i && e.isPropagationStopped())
            return;
          u_(e, I, M), i = A;
        }
    }
    function s_(e, t) {
      for (var a = (t & Ma) !== 0, i = 0; i < e.length; i++) {
        var l = e[i], s = l.event, f = l.listeners;
        V2(s, f, a);
      }
      hs();
    }
    function H2(e, t, a, i, l) {
      var s = kd(a), f = [];
      P2(f, e, i, a, s, t), s_(f, t);
    }
    function Cn(e, t) {
      eg.has(e) || h('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = yb(t), l = W2(e);
      i.has(l) || (c_(t, e, kc, a), i.add(l));
    }
    function tg(e, t, a) {
      eg.has(e) && !t && h('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Ma), c_(a, e, i, t);
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
    function c_(e, t, a, i, l) {
      var s = dr(e, t, a), f = void 0;
      vs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? rp(e, t, s, f) : oa(e, t, s) : f !== void 0 ? Lu(e, t, s, f) : $s(e, t, s);
    }
    function f_(e, t) {
      return e === t || e.nodeType === Un && e.parentNode === t;
    }
    function ng(e, t, a, i, l) {
      var s = i;
      if ((t & xd) === 0 && (t & kc) === 0) {
        var f = l;
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
                    var M = E.stateNode.containerInfo;
                    if (f_(M, f))
                      return;
                  }
                  E = E.return;
                }
              for (; C !== null; ) {
                var I = Zs(C);
                if (I === null)
                  return;
                var Y = I.tag;
                if (Y === G || Y === ve) {
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
        return H2(e, t, a, s);
      });
    }
    function yp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function I2(e, t, a, i, l, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, g = [], C = e, E = null; C !== null; ) {
        var A = C, M = A.stateNode, I = A.tag;
        if (I === G && M !== null && (E = M, p !== null)) {
          var Y = Mo(C, p);
          Y != null && g.push(yp(C, Y, E));
        }
        if (l)
          break;
        C = C.return;
      }
      return g;
    }
    function Fh(e, t) {
      for (var a = t + "Capture", i = [], l = e; l !== null; ) {
        var s = l, f = s.stateNode, p = s.tag;
        if (p === G && f !== null) {
          var g = f, C = Mo(l, a);
          C != null && i.unshift(yp(l, C, g));
          var E = Mo(l, t);
          E != null && i.push(yp(l, E, g));
        }
        l = l.return;
      }
      return i;
    }
    function Lf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== G);
      return e || null;
    }
    function B2(e, t) {
      for (var a = e, i = t, l = 0, s = a; s; s = Lf(s))
        l++;
      for (var f = 0, p = i; p; p = Lf(p))
        f++;
      for (; l - f > 0; )
        a = Lf(a), l--;
      for (; f - l > 0; )
        i = Lf(i), f--;
      for (var g = l; g--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Lf(a), i = Lf(i);
      }
      return null;
    }
    function d_(e, t, a, i, l) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var g = p, C = g.alternate, E = g.stateNode, A = g.tag;
        if (C !== null && C === i)
          break;
        if (A === G && E !== null) {
          var M = E;
          if (l) {
            var I = Mo(p, s);
            I != null && f.unshift(yp(p, I, M));
          } else if (!l) {
            var Y = Mo(p, s);
            Y != null && f.push(yp(p, Y, M));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function $2(e, t, a, i, l) {
      var s = i && l ? B2(i, l) : null;
      i !== null && d_(e, t, i, s, !1), l !== null && a !== null && d_(e, a, l, s, !0);
    }
    function W2(e, t) {
      return e + "__bubble";
    }
    var Ia = !1, gp = "dangerouslySetInnerHTML", Ph = "suppressContentEditableWarning", ju = "suppressHydrationWarning", p_ = "autoFocus", Xs = "children", Js = "style", Vh = "__html", rg, Hh, Sp, v_, Ih, h_, m_;
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
      Rd(e, t), xc(e, t), Iv(e, t, {
        registrationNameDependencies: Le,
        possibleRegistrationNames: st
      });
    }, h_ = Nn && !document.documentMode, Sp = function(e, t, a) {
      if (!Ia) {
        var i = Bh(a), l = Bh(t);
        l !== i && (Ia = !0, h("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(i)));
      }
    }, v_ = function(e) {
      if (!Ia) {
        Ia = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), h("Extra attributes from the server: %s", t);
      }
    }, Ih = function(e, t) {
      t === !1 ? h("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : h("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, m_ = function(e, t) {
      var a = e.namespaceURI === qi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var Y2 = /\r\n?/g, Q2 = /\u0000|\uFFFD/g;
    function Bh(e) {
      Jn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(Y2, `
`).replace(Q2, "");
    }
    function $h(e, t, a, i) {
      var l = Bh(t), s = Bh(e);
      if (s !== l && (i && (Ia || (Ia = !0, h('Text content did not match. Server: "%s" Client: "%s"', s, l))), a && _e))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function y_(e) {
      return e.nodeType === Xi ? e : e.ownerDocument;
    }
    function G2() {
    }
    function Wh(e) {
      e.onclick = G2;
    }
    function q2(e, t, a, i, l) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Js)
            f && Object.freeze(f), jv(t, f);
          else if (s === gp) {
            var p = f ? f[Vh] : void 0;
            p != null && bv(t, p);
          } else if (s === Xs)
            if (typeof f == "string") {
              var g = e !== "textarea" || f !== "";
              g && pu(t, f);
            } else typeof f == "number" && pu(t, "" + f);
          else s === Ph || s === ju || s === p_ || (Le.hasOwnProperty(s) ? f != null && (typeof f != "function" && Ih(s, f), s === "onScroll" && Cn("scroll", t)) : f != null && Dr(t, s, f, l));
        }
    }
    function K2(e, t, a, i) {
      for (var l = 0; l < t.length; l += 2) {
        var s = t[l], f = t[l + 1];
        s === Js ? jv(e, f) : s === gp ? bv(e, f) : s === Xs ? pu(e, f) : Dr(e, s, f, i);
      }
    }
    function X2(e, t, a, i) {
      var l, s = y_(a), f, p = i;
      if (p === qi && (p = md(e)), p === qi) {
        if (l = Oo(e, t), !l && e !== e.toLowerCase() && h("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
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
      return p === qi && !l && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !kr.call(rg, e) && (rg[e] = !0, h("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function J2(e, t) {
      return y_(t).createTextNode(e);
    }
    function Z2(e, t, a, i) {
      var l = Oo(t, a);
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
          hl(e, a), s = is(e, a), Cn("invalid", e);
          break;
        case "textarea":
          pd(e, a), s = dd(e, a), Cn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (bc(t, s), q2(t, e, i, s, l), t) {
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
    function eR(e, t, a, i, l) {
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
      bc(t, p);
      var g, C, E = null;
      for (g in f)
        if (!(p.hasOwnProperty(g) || !f.hasOwnProperty(g) || f[g] == null))
          if (g === Js) {
            var A = f[g];
            for (C in A)
              A.hasOwnProperty(C) && (E || (E = {}), E[C] = "");
          } else g === gp || g === Xs || g === Ph || g === ju || g === p_ || (Le.hasOwnProperty(g) ? s || (s = []) : (s = s || []).push(g, null));
      for (g in p) {
        var M = p[g], I = f?.[g];
        if (!(!p.hasOwnProperty(g) || M === I || M == null && I == null))
          if (g === Js)
            if (M && Object.freeze(M), I) {
              for (C in I)
                I.hasOwnProperty(C) && (!M || !M.hasOwnProperty(C)) && (E || (E = {}), E[C] = "");
              for (C in M)
                M.hasOwnProperty(C) && I[C] !== M[C] && (E || (E = {}), E[C] = M[C]);
            } else
              E || (s || (s = []), s.push(g, E)), E = M;
          else if (g === gp) {
            var Y = M ? M[Vh] : void 0, J = I ? I[Vh] : void 0;
            Y != null && J !== Y && (s = s || []).push(g, Y);
          } else g === Xs ? (typeof M == "string" || typeof M == "number") && (s = s || []).push(g, "" + M) : g === Ph || g === ju || (Le.hasOwnProperty(g) ? (M != null && (typeof M != "function" && Ih(g, M), g === "onScroll" && Cn("scroll", e)), !s && I !== M && (s = [])) : (s = s || []).push(g, M));
      }
      return E && (Oy(E, p[Js]), (s = s || []).push(Js, E)), s;
    }
    function tR(e, t, a, i, l) {
      a === "input" && l.type === "radio" && l.name != null && S(e, l);
      var s = Oo(a, i), f = Oo(a, l);
      switch (K2(e, t, s, f), a) {
        case "input":
          w(e, l);
          break;
        case "textarea":
          Cv(e, l);
          break;
        case "select":
          Cc(e, l);
          break;
      }
    }
    function nR(e) {
      {
        var t = e.toLowerCase();
        return cs.hasOwnProperty(t) && cs[t] || null;
      }
    }
    function rR(e, t, a, i, l, s, f) {
      var p, g;
      switch (p = Oo(t, a), Hh(t, a), t) {
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
          hl(e, a), Cn("invalid", e);
          break;
        case "textarea":
          pd(e, a), Cn("invalid", e);
          break;
      }
      bc(t, a);
      {
        g = /* @__PURE__ */ new Set();
        for (var E = e.attributes, A = 0; A < E.length; A++) {
          var M = E[A].name.toLowerCase();
          switch (M) {
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
          var J = a[Y];
          if (Y === Xs)
            typeof J == "string" ? e.textContent !== J && (a[ju] !== !0 && $h(e.textContent, J, s, f), I = [Xs, J]) : typeof J == "number" && e.textContent !== "" + J && (a[ju] !== !0 && $h(e.textContent, J, s, f), I = [Xs, "" + J]);
          else if (Le.hasOwnProperty(Y))
            J != null && (typeof J != "function" && Ih(Y, J), Y === "onScroll" && Cn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var De = void 0, rt = on(Y);
            if (a[ju] !== !0) {
              if (!(Y === Ph || Y === ju || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              Y === "value" || Y === "checked" || Y === "selected")) {
                if (Y === gp) {
                  var qe = e.innerHTML, Ut = J ? J[Vh] : void 0;
                  if (Ut != null) {
                    var Ot = m_(e, Ut);
                    Ot !== qe && Sp(Y, qe, Ot);
                  }
                } else if (Y === Js) {
                  if (g.delete(Y), h_) {
                    var F = ky(J);
                    De = e.getAttribute("style"), F !== De && Sp(Y, De, F);
                  }
                } else if (p && !U)
                  g.delete(Y.toLowerCase()), De = ul(e, Y, J), J !== De && Sp(Y, De, J);
                else if (!mn(Y, rt, p) && !Zn(Y, J, rt, p)) {
                  var Z = !1;
                  if (rt !== null)
                    g.delete(rt.attributeName), De = Co(e, Y, J, rt);
                  else {
                    var P = i;
                    if (P === qi && (P = md(t)), P === qi)
                      g.delete(Y.toLowerCase());
                    else {
                      var de = nR(Y);
                      de !== null && de !== Y && (Z = !0, g.delete(de)), g.delete(Y);
                    }
                    De = ul(e, Y, J);
                  }
                  var ze = U;
                  !ze && J !== De && !Z && Sp(Y, De, J);
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
    function aR(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function ag(e, t) {
      {
        if (Ia)
          return;
        Ia = !0, h("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function ig(e, t) {
      {
        if (Ia)
          return;
        Ia = !0, h('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function og(e, t, a) {
      {
        if (Ia)
          return;
        Ia = !0, h("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function lg(e, t) {
      {
        if (t === "" || Ia)
          return;
        Ia = !0, h('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function iR(e, t, a) {
      switch (t) {
        case "input":
          q(e, a);
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
      var oR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], g_ = [
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
      ], lR = g_.concat(["button"]), uR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], S_ = {
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
        return g_.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), lR.indexOf(t) !== -1 && (a.pTagInButtonScope = null), oR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var sR = function(e, t) {
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
            return uR.indexOf(t) === -1;
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
      }, cR = function(e, t) {
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
        var i = a.current, l = i && i.tag;
        t != null && (e != null && h("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = sR(e, l) ? null : i, f = s ? null : cR(e, a), p = s || f;
        if (p) {
          var g = p.tag, C = !!s + "|" + e + "|" + g;
          if (!__[C]) {
            __[C] = !0;
            var E = e, A = "";
            if (e === "#text" ? /\S/.test(t) ? E = "Text nodes" : (E = "Whitespace text nodes", A = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : E = "<" + e + ">", s) {
              var M = "";
              g === "table" && e === "tr" && (M += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), h("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", E, g, A, M);
            } else
              h("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", E, g);
          }
        }
      };
    }
    var Yh = "suppressHydrationWarning", Qh = "$", Gh = "/$", Ep = "$?", Rp = "$!", fR = "style", ug = null, sg = null;
    function dR(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Xi:
        case gd: {
          t = i === Xi ? "#document" : "#fragment";
          var l = e.documentElement;
          a = l ? l.namespaceURI : yd(null, "");
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
    function pR(e, t, a) {
      {
        var i = e, l = yd(i.namespace, t), s = Cp(i.ancestorInfo, t);
        return {
          namespace: l,
          ancestorInfo: s
        };
      }
    }
    function XO(e) {
      return e;
    }
    function vR(e) {
      ug = Hn(), sg = k2();
      var t = null;
      return Kn(!1), t;
    }
    function hR(e) {
      D2(sg), Kn(ug), ug = null, sg = null;
    }
    function mR(e, t, a, i, l) {
      var s;
      {
        var f = i;
        if (_p(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, g = Cp(f.ancestorInfo, e);
          _p(null, p, g);
        }
        s = f.namespace;
      }
      var C = X2(e, t, a, s);
      return xp(l, C), yg(C, t), C;
    }
    function yR(e, t) {
      e.appendChild(t);
    }
    function gR(e, t, a, i, l) {
      switch (Z2(e, t, a, i), t) {
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
    function SR(e, t, a, i, l, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, g = Cp(f.ancestorInfo, t);
          _p(null, p, g);
        }
      }
      return eR(e, t, a, i);
    }
    function cg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function _R(e, t, a, i) {
      {
        var l = a;
        _p(null, e, l.ancestorInfo);
      }
      var s = J2(e, t);
      return xp(i, s), s;
    }
    function CR() {
      var e = window.event;
      return e === void 0 ? Fa : gf(e.type);
    }
    var fg = typeof setTimeout == "function" ? setTimeout : void 0, ER = typeof clearTimeout == "function" ? clearTimeout : void 0, dg = -1, C_ = typeof Promise == "function" ? Promise : void 0, RR = typeof queueMicrotask == "function" ? queueMicrotask : typeof C_ < "u" ? function(e) {
      return C_.resolve(null).then(e).catch(bR);
    } : fg;
    function bR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function TR(e, t, a, i) {
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
    function xR(e, t, a, i, l, s) {
      tR(e, t, a, i, l), yg(e, l);
    }
    function E_(e) {
      pu(e, "");
    }
    function wR(e, t, a) {
      e.nodeValue = a;
    }
    function kR(e, t) {
      e.appendChild(t);
    }
    function DR(e, t) {
      var a;
      e.nodeType === Un ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Wh(a);
    }
    function OR(e, t, a) {
      e.insertBefore(t, a);
    }
    function LR(e, t, a) {
      e.nodeType === Un ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function MR(e, t) {
      e.removeChild(t);
    }
    function NR(e, t) {
      e.nodeType === Un ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function pg(e, t) {
      var a = t, i = 0;
      do {
        var l = a.nextSibling;
        if (e.removeChild(a), l && l.nodeType === Un) {
          var s = l.data;
          if (s === Gh)
            if (i === 0) {
              e.removeChild(l), jl(t);
              return;
            } else
              i--;
          else (s === Qh || s === Ep || s === Rp) && i++;
        }
        a = l;
      } while (a);
      jl(t);
    }
    function AR(e, t) {
      e.nodeType === Un ? pg(e.parentNode, t) : e.nodeType === Xr && pg(e, t), jl(e);
    }
    function UR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function jR(e) {
      e.nodeValue = "";
    }
    function zR(e, t) {
      e = e;
      var a = t[fR], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Rc("display", i);
    }
    function FR(e, t) {
      e.nodeValue = t;
    }
    function PR(e) {
      e.nodeType === Xr ? e.textContent = "" : e.nodeType === Xi && e.documentElement && e.removeChild(e.documentElement);
    }
    function VR(e, t, a) {
      return e.nodeType !== Xr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function HR(e, t) {
      return t === "" || e.nodeType !== Ki ? null : e;
    }
    function IR(e) {
      return e.nodeType !== Un ? null : e;
    }
    function R_(e) {
      return e.data === Ep;
    }
    function vg(e) {
      return e.data === Rp;
    }
    function BR(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, l;
      return t && (a = t.dgst, i = t.msg, l = t.stck), {
        message: i,
        digest: a,
        stack: l
      };
    }
    function $R(e, t) {
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
    function WR(e) {
      return qh(e.firstChild);
    }
    function YR(e) {
      return qh(e.firstChild);
    }
    function QR(e) {
      return qh(e.nextSibling);
    }
    function GR(e, t, a, i, l, s, f) {
      xp(s, e), yg(e, a);
      var p;
      {
        var g = l;
        p = g.namespace;
      }
      var C = (s.mode & wt) !== et;
      return rR(e, t, a, p, i, C, f);
    }
    function qR(e, t, a, i) {
      return xp(a, e), a.mode & wt, aR(e, t);
    }
    function KR(e, t) {
      xp(t, e);
    }
    function XR(e) {
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
    function JR(e) {
      jl(e);
    }
    function ZR(e) {
      jl(e);
    }
    function eb(e) {
      return e !== "head" && e !== "body";
    }
    function tb(e, t, a, i) {
      var l = !0;
      $h(t.nodeValue, a, i, l);
    }
    function nb(e, t, a, i, l, s) {
      if (t[Yh] !== !0) {
        var f = !0;
        $h(i.nodeValue, l, s, f);
      }
    }
    function rb(e, t) {
      t.nodeType === Xr ? ag(e, t) : t.nodeType === Un || ig(e, t);
    }
    function ab(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Xr ? ag(a, t) : t.nodeType === Un || ig(a, t));
      }
    }
    function ib(e, t, a, i, l) {
      (l || t[Yh] !== !0) && (i.nodeType === Xr ? ag(a, i) : i.nodeType === Un || ig(a, i));
    }
    function ob(e, t, a) {
      og(e, t);
    }
    function lb(e, t) {
      lg(e, t);
    }
    function ub(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && og(i, t);
      }
    }
    function sb(e, t) {
      {
        var a = e.parentNode;
        a !== null && lg(a, t);
      }
    }
    function cb(e, t, a, i, l, s) {
      (s || t[Yh] !== !0) && og(a, i);
    }
    function fb(e, t, a, i, l) {
      (l || t[Yh] !== !0) && lg(a, i);
    }
    function db(e) {
      h("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function pb(e) {
      mp(e);
    }
    var Mf = Math.random().toString(36).slice(2), Nf = "__reactFiber$" + Mf, hg = "__reactProps$" + Mf, Tp = "__reactContainer$" + Mf, mg = "__reactEvents$" + Mf, vb = "__reactListeners$" + Mf, hb = "__reactHandles$" + Mf;
    function mb(e) {
      delete e[Nf], delete e[hg], delete e[mg], delete e[vb], delete e[hb];
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
    function Zs(e) {
      var t = e[Nf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Tp] || a[Nf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var l = b_(e); l !== null; ) {
              var s = l[Nf];
              if (s)
                return s;
              l = b_(l);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function zu(e) {
      var t = e[Nf] || e[Tp];
      return t && (t.tag === G || t.tag === ve || t.tag === he || t.tag === $) ? t : null;
    }
    function Af(e) {
      if (e.tag === G || e.tag === ve)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Xh(e) {
      return e[hg] || null;
    }
    function yg(e, t) {
      e[hg] = t;
    }
    function yb(e) {
      var t = e[mg];
      return t === void 0 && (t = e[mg] = /* @__PURE__ */ new Set()), t;
    }
    var x_ = {}, w_ = m.ReactDebugCurrentFrame;
    function Jh(e) {
      if (e) {
        var t = e._owner, a = Yi(e.type, e._source, t ? t.type : null);
        w_.setExtraStackFrame(a);
      } else
        w_.setExtraStackFrame(null);
    }
    function uo(e, t, a, i, l) {
      {
        var s = Function.call.bind(kr);
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
            p && !(p instanceof Error) && (Jh(l), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Jh(null)), p instanceof Error && !(p.message in x_) && (x_[p.message] = !0, Jh(l), h("Failed %s type: %s", a, p.message), Jh(null));
          }
      }
    }
    var gg = [], Zh;
    Zh = [];
    var Il = -1;
    function Fu(e) {
      return {
        current: e
      };
    }
    function ua(e, t) {
      if (Il < 0) {
        h("Unexpected pop.");
        return;
      }
      t !== Zh[Il] && h("Unexpected Fiber popped."), e.current = gg[Il], gg[Il] = null, Zh[Il] = null, Il--;
    }
    function sa(e, t, a) {
      Il++, gg[Il] = e.current, Zh[Il] = a, e.current = t;
    }
    var Sg;
    Sg = {};
    var fi = {};
    Object.freeze(fi);
    var Bl = Fu(fi), Ko = Fu(!1), _g = fi;
    function Uf(e, t, a) {
      return a && Xo(t) ? _g : Bl.current;
    }
    function k_(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function jf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return fi;
        var l = e.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
          return l.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = vt(e) || "Unknown";
          uo(i, s, "context", p);
        }
        return l && k_(e, t, s), s;
      }
    }
    function em() {
      return Ko.current;
    }
    function Xo(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function tm(e) {
      ua(Ko, e), ua(Bl, e);
    }
    function Cg(e) {
      ua(Ko, e), ua(Bl, e);
    }
    function D_(e, t, a) {
      {
        if (Bl.current !== fi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        sa(Bl, t, e), sa(Ko, a, e);
      }
    }
    function O_(e, t, a) {
      {
        var i = e.stateNode, l = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = vt(e) || "Unknown";
            Sg[s] || (Sg[s] = !0, h("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in l))
            throw new Error((vt(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var g = vt(e) || "Unknown";
          uo(l, f, "child context", g);
        }
        return Rt({}, a, f);
      }
    }
    function nm(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || fi;
        return _g = Bl.current, sa(Bl, a, e), sa(Ko, Ko.current, e), !0;
      }
    }
    function L_(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var l = O_(e, t, _g);
          i.__reactInternalMemoizedMergedChildContext = l, ua(Ko, e), ua(Bl, e), sa(Bl, l, e), sa(Ko, a, e);
        } else
          ua(Ko, e), sa(Ko, a, e);
      }
    }
    function gb(e) {
      {
        if (!El(e) || e.tag !== T)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case $:
              return t.stateNode.context;
            case T: {
              var a = t.type;
              if (Xo(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Pu = 0, rm = 1, $l = null, Eg = !1, Rg = !1;
    function M_(e) {
      $l === null ? $l = [e] : $l.push(e);
    }
    function Sb(e) {
      Eg = !0, M_(e);
    }
    function N_() {
      Eg && Vu();
    }
    function Vu() {
      if (!Rg && $l !== null) {
        Rg = !0;
        var e = 0, t = Va();
        try {
          var a = !0, i = $l;
          for (Vn(Ar); e < i.length; e++) {
            var l = i[e];
            do
              l = l(a);
            while (l !== null);
          }
          $l = null, Eg = !1;
        } catch (s) {
          throw $l !== null && ($l = $l.slice(e + 1)), Od(gs, Vu), s;
        } finally {
          Vn(t), Rg = !1;
        }
      }
      return null;
    }
    var zf = [], Ff = 0, am = null, im = 0, ji = [], zi = 0, ec = null, Wl = 1, Yl = "";
    function _b(e) {
      return nc(), (e.flags & xi) !== Ze;
    }
    function Cb(e) {
      return nc(), im;
    }
    function Eb() {
      var e = Yl, t = Wl, a = t & ~Rb(t);
      return a.toString(32) + e;
    }
    function tc(e, t) {
      nc(), zf[Ff++] = im, zf[Ff++] = am, am = e, im = t;
    }
    function A_(e, t, a) {
      nc(), ji[zi++] = Wl, ji[zi++] = Yl, ji[zi++] = ec, ec = e;
      var i = Wl, l = Yl, s = om(i) - 1, f = i & ~(1 << s), p = a + 1, g = om(t) + s;
      if (g > 30) {
        var C = s - s % 5, E = (1 << C) - 1, A = (f & E).toString(32), M = f >> C, I = s - C, Y = om(t) + I, J = p << I, De = J | M, rt = A + l;
        Wl = 1 << Y | De, Yl = rt;
      } else {
        var qe = p << s, Ut = qe | f, Ot = l;
        Wl = 1 << g | Ut, Yl = Ot;
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
    function om(e) {
      return 32 - Fn(e);
    }
    function Rb(e) {
      return 1 << om(e) - 1;
    }
    function Tg(e) {
      for (; e === am; )
        am = zf[--Ff], zf[Ff] = null, im = zf[--Ff], zf[Ff] = null;
      for (; e === ec; )
        ec = ji[--zi], ji[zi] = null, Yl = ji[--zi], ji[zi] = null, Wl = ji[--zi], ji[zi] = null;
    }
    function bb() {
      return nc(), ec !== null ? {
        id: Wl,
        overflow: Yl
      } : null;
    }
    function Tb(e, t) {
      nc(), ji[zi++] = Wl, ji[zi++] = Yl, ji[zi++] = ec, Wl = t.id, Yl = t.overflow, ec = e;
    }
    function nc() {
      Pr() || h("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Fr = null, Fi = null, so = !1, rc = !1, Hu = null;
    function xb() {
      so && h("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function U_() {
      rc = !0;
    }
    function wb() {
      return rc;
    }
    function kb(e) {
      var t = e.stateNode.containerInfo;
      return Fi = YR(t), Fr = e, so = !0, Hu = null, rc = !1, !0;
    }
    function Db(e, t, a) {
      return Fi = QR(t), Fr = e, so = !0, Hu = null, rc = !1, a !== null && Tb(e, a), !0;
    }
    function j_(e, t) {
      switch (e.tag) {
        case $: {
          rb(e.stateNode.containerInfo, t);
          break;
        }
        case G: {
          var a = (e.mode & wt) !== et;
          ib(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case he: {
          var i = e.memoizedState;
          i.dehydrated !== null && ab(i.dehydrated, t);
          break;
        }
      }
    }
    function z_(e, t) {
      j_(e, t);
      var a = Nw();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Na) : i.push(a);
    }
    function xg(e, t) {
      {
        if (rc)
          return;
        switch (e.tag) {
          case $: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case G:
                var i = t.type;
                t.pendingProps, ob(a, i);
                break;
              case ve:
                var l = t.pendingProps;
                lb(a, l);
                break;
            }
            break;
          }
          case G: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case G: {
                var g = t.type, C = t.pendingProps, E = (e.mode & wt) !== et;
                cb(
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
              case ve: {
                var A = t.pendingProps, M = (e.mode & wt) !== et;
                fb(
                  s,
                  f,
                  p,
                  A,
                  // TODO: Delete this argument when we remove the legacy root API.
                  M
                );
                break;
              }
            }
            break;
          }
          case he: {
            var I = e.memoizedState, Y = I.dehydrated;
            if (Y !== null) switch (t.tag) {
              case G:
                var J = t.type;
                t.pendingProps, ub(Y, J);
                break;
              case ve:
                var De = t.pendingProps;
                sb(Y, De);
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
      t.flags = t.flags & ~Zr | gn, xg(e, t);
    }
    function P_(e, t) {
      switch (e.tag) {
        case G: {
          var a = e.type;
          e.pendingProps;
          var i = VR(t, a);
          return i !== null ? (e.stateNode = i, Fr = e, Fi = WR(i), !0) : !1;
        }
        case ve: {
          var l = e.pendingProps, s = HR(t, l);
          return s !== null ? (e.stateNode = s, Fr = e, Fi = null, !0) : !1;
        }
        case he: {
          var f = IR(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: bb(),
              retryLane: ra
            };
            e.memoizedState = p;
            var g = Aw(f);
            return g.return = e, e.child = g, Fr = e, Fi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function wg(e) {
      return (e.mode & wt) !== et && (e.flags & Ke) === Ze;
    }
    function kg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Dg(e) {
      if (so) {
        var t = Fi;
        if (!t) {
          wg(e) && (xg(Fr, e), kg()), F_(Fr, e), so = !1, Fr = e;
          return;
        }
        var a = t;
        if (!P_(e, t)) {
          wg(e) && (xg(Fr, e), kg()), t = bp(a);
          var i = Fr;
          if (!t || !P_(e, t)) {
            F_(Fr, e), so = !1, Fr = e;
            return;
          }
          z_(i, a);
        }
      }
    }
    function Ob(e, t, a) {
      var i = e.stateNode, l = !rc, s = GR(i, e.type, e.memoizedProps, t, a, e, l);
      return e.updateQueue = s, s !== null;
    }
    function Lb(e) {
      var t = e.stateNode, a = e.memoizedProps, i = qR(t, a, e);
      if (i) {
        var l = Fr;
        if (l !== null)
          switch (l.tag) {
            case $: {
              var s = l.stateNode.containerInfo, f = (l.mode & wt) !== et;
              tb(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case G: {
              var p = l.type, g = l.memoizedProps, C = l.stateNode, E = (l.mode & wt) !== et;
              nb(
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
    function Mb(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      KR(a, e);
    }
    function Nb(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return XR(a);
    }
    function V_(e) {
      for (var t = e.return; t !== null && t.tag !== G && t.tag !== $ && t.tag !== he; )
        t = t.return;
      Fr = t;
    }
    function lm(e) {
      if (e !== Fr)
        return !1;
      if (!so)
        return V_(e), so = !0, !1;
      if (e.tag !== $ && (e.tag !== G || eb(e.type) && !cg(e.type, e.memoizedProps))) {
        var t = Fi;
        if (t)
          if (wg(e))
            H_(e), kg();
          else
            for (; t; )
              z_(e, t), t = bp(t);
      }
      return V_(e), e.tag === he ? Fi = Nb(e) : Fi = Fr ? bp(e.stateNode) : null, !0;
    }
    function Ab() {
      return so && Fi !== null;
    }
    function H_(e) {
      for (var t = Fi; t; )
        j_(e, t), t = bp(t);
    }
    function Pf() {
      Fr = null, Fi = null, so = !1, rc = !1;
    }
    function I_() {
      Hu !== null && (UC(Hu), Hu = null);
    }
    function Pr() {
      return so;
    }
    function Og(e) {
      Hu === null ? Hu = [e] : Hu.push(e);
    }
    var Ub = m.ReactCurrentBatchConfig, jb = null;
    function zb() {
      return Ub.transition;
    }
    var co = {
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
      var Fb = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & en && (t = a), a = a.return;
        return t;
      }, ac = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, kp = [], Dp = [], Op = [], Lp = [], Mp = [], Np = [], ic = /* @__PURE__ */ new Set();
      co.recordUnsafeLifecycleWarnings = function(e, t) {
        ic.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && kp.push(e), e.mode & en && typeof t.UNSAFE_componentWillMount == "function" && Dp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Op.push(e), e.mode & en && typeof t.UNSAFE_componentWillReceiveProps == "function" && Lp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Mp.push(e), e.mode & en && typeof t.UNSAFE_componentWillUpdate == "function" && Np.push(e));
      }, co.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        kp.length > 0 && (kp.forEach(function(M) {
          e.add(vt(M) || "Component"), ic.add(M.type);
        }), kp = []);
        var t = /* @__PURE__ */ new Set();
        Dp.length > 0 && (Dp.forEach(function(M) {
          t.add(vt(M) || "Component"), ic.add(M.type);
        }), Dp = []);
        var a = /* @__PURE__ */ new Set();
        Op.length > 0 && (Op.forEach(function(M) {
          a.add(vt(M) || "Component"), ic.add(M.type);
        }), Op = []);
        var i = /* @__PURE__ */ new Set();
        Lp.length > 0 && (Lp.forEach(function(M) {
          i.add(vt(M) || "Component"), ic.add(M.type);
        }), Lp = []);
        var l = /* @__PURE__ */ new Set();
        Mp.length > 0 && (Mp.forEach(function(M) {
          l.add(vt(M) || "Component"), ic.add(M.type);
        }), Mp = []);
        var s = /* @__PURE__ */ new Set();
        if (Np.length > 0 && (Np.forEach(function(M) {
          s.add(vt(M) || "Component"), ic.add(M.type);
        }), Np = []), t.size > 0) {
          var f = ac(t);
          h(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = ac(i);
          h(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var g = ac(s);
          h(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

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
        if (l.size > 0) {
          var A = ac(l);
          b(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, A);
        }
      };
      var um = /* @__PURE__ */ new Map(), B_ = /* @__PURE__ */ new Set();
      co.recordLegacyContextWarning = function(e, t) {
        var a = Fb(e);
        if (a === null) {
          h("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!B_.has(e.type)) {
          var i = um.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], um.set(a, i)), i.push(e));
        }
      }, co.flushLegacyContextWarning = function() {
        um.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(vt(s) || "Component"), B_.add(s.type);
            });
            var l = ac(i);
            try {
              Xt(a), h(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l);
            } finally {
              dn();
            }
          }
        });
      }, co.discardPendingWarnings = function() {
        kp = [], Dp = [], Op = [], Lp = [], Mp = [], Np = [], um = /* @__PURE__ */ new Map();
      };
    }
    var Lg, Mg, Ng, Ag, Ug, $_ = function(e, t) {
    };
    Lg = !1, Mg = !1, Ng = {}, Ag = {}, Ug = {}, $_ = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = vt(t) || "Component";
        Ag[a] || (Ag[a] = !0, h('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Pb(e) {
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
        !(typeof a.type == "function" && !Pb(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var l = vt(e) || "Component";
          Ng[l] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l, i), Ng[l] = !0);
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
            var M = g.refs;
            A === null ? delete M[C] : M[C] = A;
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
        Ug[t] = !0, h("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function W_(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function Y_(e) {
      function t(F, Z) {
        if (e) {
          var P = F.deletions;
          P === null ? (F.deletions = [Z], F.flags |= Na) : P.push(Z);
        }
      }
      function a(F, Z) {
        if (!e)
          return null;
        for (var P = Z; P !== null; )
          t(F, P), P = P.sibling;
        return null;
      }
      function i(F, Z) {
        for (var P = /* @__PURE__ */ new Map(), de = Z; de !== null; )
          de.key !== null ? P.set(de.key, de) : P.set(de.index, de), de = de.sibling;
        return P;
      }
      function l(F, Z) {
        var P = vc(F, Z);
        return P.index = 0, P.sibling = null, P;
      }
      function s(F, Z, P) {
        if (F.index = P, !e)
          return F.flags |= xi, Z;
        var de = F.alternate;
        if (de !== null) {
          var ze = de.index;
          return ze < Z ? (F.flags |= gn, Z) : ze;
        } else
          return F.flags |= gn, Z;
      }
      function f(F) {
        return e && F.alternate === null && (F.flags |= gn), F;
      }
      function p(F, Z, P, de) {
        if (Z === null || Z.tag !== ve) {
          var ze = OS(P, F.mode, de);
          return ze.return = F, ze;
        } else {
          var Me = l(Z, P);
          return Me.return = F, Me;
        }
      }
      function g(F, Z, P, de) {
        var ze = P.type;
        if (ze === mi)
          return E(F, Z, P.props.children, de, P.key);
        if (Z !== null && (Z.elementType === ze || // Keep this check inline so it only runs on the false path:
        XC(Z, P) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ze == "object" && ze !== null && ze.$$typeof === mt && W_(ze) === Z.type)) {
          var Me = l(Z, P.props);
          return Me.ref = Ap(F, Z, P), Me.return = F, Me._debugSource = P._source, Me._debugOwner = P._owner, Me;
        }
        var ft = DS(P, F.mode, de);
        return ft.ref = Ap(F, Z, P), ft.return = F, ft;
      }
      function C(F, Z, P, de) {
        if (Z === null || Z.tag !== Q || Z.stateNode.containerInfo !== P.containerInfo || Z.stateNode.implementation !== P.implementation) {
          var ze = LS(P, F.mode, de);
          return ze.return = F, ze;
        } else {
          var Me = l(Z, P.children || []);
          return Me.return = F, Me;
        }
      }
      function E(F, Z, P, de, ze) {
        if (Z === null || Z.tag !== ue) {
          var Me = Ju(P, F.mode, de, ze);
          return Me.return = F, Me;
        } else {
          var ft = l(Z, P);
          return ft.return = F, ft;
        }
      }
      function A(F, Z, P) {
        if (typeof Z == "string" && Z !== "" || typeof Z == "number") {
          var de = OS("" + Z, F.mode, P);
          return de.return = F, de;
        }
        if (typeof Z == "object" && Z !== null) {
          switch (Z.$$typeof) {
            case Or: {
              var ze = DS(Z, F.mode, P);
              return ze.ref = Ap(F, null, Z), ze.return = F, ze;
            }
            case or: {
              var Me = LS(Z, F.mode, P);
              return Me.return = F, Me;
            }
            case mt: {
              var ft = Z._payload, gt = Z._init;
              return A(F, gt(ft), P);
            }
          }
          if (Tt(Z) || _t(Z)) {
            var nn = Ju(Z, F.mode, P, null);
            return nn.return = F, nn;
          }
          sm(F, Z);
        }
        return typeof Z == "function" && cm(F), null;
      }
      function M(F, Z, P, de) {
        var ze = Z !== null ? Z.key : null;
        if (typeof P == "string" && P !== "" || typeof P == "number")
          return ze !== null ? null : p(F, Z, "" + P, de);
        if (typeof P == "object" && P !== null) {
          switch (P.$$typeof) {
            case Or:
              return P.key === ze ? g(F, Z, P, de) : null;
            case or:
              return P.key === ze ? C(F, Z, P, de) : null;
            case mt: {
              var Me = P._payload, ft = P._init;
              return M(F, Z, ft(Me), de);
            }
          }
          if (Tt(P) || _t(P))
            return ze !== null ? null : E(F, Z, P, de, null);
          sm(F, P);
        }
        return typeof P == "function" && cm(F), null;
      }
      function I(F, Z, P, de, ze) {
        if (typeof de == "string" && de !== "" || typeof de == "number") {
          var Me = F.get(P) || null;
          return p(Z, Me, "" + de, ze);
        }
        if (typeof de == "object" && de !== null) {
          switch (de.$$typeof) {
            case Or: {
              var ft = F.get(de.key === null ? P : de.key) || null;
              return g(Z, ft, de, ze);
            }
            case or: {
              var gt = F.get(de.key === null ? P : de.key) || null;
              return C(Z, gt, de, ze);
            }
            case mt:
              var nn = de._payload, Bt = de._init;
              return I(F, Z, P, Bt(nn), ze);
          }
          if (Tt(de) || _t(de)) {
            var Xn = F.get(P) || null;
            return E(Z, Xn, de, ze, null);
          }
          sm(Z, de);
        }
        return typeof de == "function" && cm(Z), null;
      }
      function Y(F, Z, P) {
        {
          if (typeof F != "object" || F === null)
            return Z;
          switch (F.$$typeof) {
            case Or:
            case or:
              $_(F, P);
              var de = F.key;
              if (typeof de != "string")
                break;
              if (Z === null) {
                Z = /* @__PURE__ */ new Set(), Z.add(de);
                break;
              }
              if (!Z.has(de)) {
                Z.add(de);
                break;
              }
              h("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", de);
              break;
            case mt:
              var ze = F._payload, Me = F._init;
              Y(Me(ze), Z, P);
              break;
          }
        }
        return Z;
      }
      function J(F, Z, P, de) {
        for (var ze = null, Me = 0; Me < P.length; Me++) {
          var ft = P[Me];
          ze = Y(ft, ze, F);
        }
        for (var gt = null, nn = null, Bt = Z, Xn = 0, $t = 0, Bn = null; Bt !== null && $t < P.length; $t++) {
          Bt.index > $t ? (Bn = Bt, Bt = null) : Bn = Bt.sibling;
          var fa = M(F, Bt, P[$t], de);
          if (fa === null) {
            Bt === null && (Bt = Bn);
            break;
          }
          e && Bt && fa.alternate === null && t(F, Bt), Xn = s(fa, Xn, $t), nn === null ? gt = fa : nn.sibling = fa, nn = fa, Bt = Bn;
        }
        if ($t === P.length) {
          if (a(F, Bt), Pr()) {
            var Yr = $t;
            tc(F, Yr);
          }
          return gt;
        }
        if (Bt === null) {
          for (; $t < P.length; $t++) {
            var pi = A(F, P[$t], de);
            pi !== null && (Xn = s(pi, Xn, $t), nn === null ? gt = pi : nn.sibling = pi, nn = pi);
          }
          if (Pr()) {
            var xa = $t;
            tc(F, xa);
          }
          return gt;
        }
        for (var wa = i(F, Bt); $t < P.length; $t++) {
          var da = I(wa, F, $t, P[$t], de);
          da !== null && (e && da.alternate !== null && wa.delete(da.key === null ? $t : da.key), Xn = s(da, Xn, $t), nn === null ? gt = da : nn.sibling = da, nn = da);
        }
        if (e && wa.forEach(function(ad) {
          return t(F, ad);
        }), Pr()) {
          var Zl = $t;
          tc(F, Zl);
        }
        return gt;
      }
      function De(F, Z, P, de) {
        var ze = _t(P);
        if (typeof ze != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          P[Symbol.toStringTag] === "Generator" && (Mg || h("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Mg = !0), P.entries === ze && (Lg || h("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Lg = !0);
          var Me = ze.call(P);
          if (Me)
            for (var ft = null, gt = Me.next(); !gt.done; gt = Me.next()) {
              var nn = gt.value;
              ft = Y(nn, ft, F);
            }
        }
        var Bt = ze.call(P);
        if (Bt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Xn = null, $t = null, Bn = Z, fa = 0, Yr = 0, pi = null, xa = Bt.next(); Bn !== null && !xa.done; Yr++, xa = Bt.next()) {
          Bn.index > Yr ? (pi = Bn, Bn = null) : pi = Bn.sibling;
          var wa = M(F, Bn, xa.value, de);
          if (wa === null) {
            Bn === null && (Bn = pi);
            break;
          }
          e && Bn && wa.alternate === null && t(F, Bn), fa = s(wa, fa, Yr), $t === null ? Xn = wa : $t.sibling = wa, $t = wa, Bn = pi;
        }
        if (xa.done) {
          if (a(F, Bn), Pr()) {
            var da = Yr;
            tc(F, da);
          }
          return Xn;
        }
        if (Bn === null) {
          for (; !xa.done; Yr++, xa = Bt.next()) {
            var Zl = A(F, xa.value, de);
            Zl !== null && (fa = s(Zl, fa, Yr), $t === null ? Xn = Zl : $t.sibling = Zl, $t = Zl);
          }
          if (Pr()) {
            var ad = Yr;
            tc(F, ad);
          }
          return Xn;
        }
        for (var dv = i(F, Bn); !xa.done; Yr++, xa = Bt.next()) {
          var il = I(dv, F, Yr, xa.value, de);
          il !== null && (e && il.alternate !== null && dv.delete(il.key === null ? Yr : il.key), fa = s(il, fa, Yr), $t === null ? Xn = il : $t.sibling = il, $t = il);
        }
        if (e && dv.forEach(function(fk) {
          return t(F, fk);
        }), Pr()) {
          var ck = Yr;
          tc(F, ck);
        }
        return Xn;
      }
      function rt(F, Z, P, de) {
        if (Z !== null && Z.tag === ve) {
          a(F, Z.sibling);
          var ze = l(Z, P);
          return ze.return = F, ze;
        }
        a(F, Z);
        var Me = OS(P, F.mode, de);
        return Me.return = F, Me;
      }
      function qe(F, Z, P, de) {
        for (var ze = P.key, Me = Z; Me !== null; ) {
          if (Me.key === ze) {
            var ft = P.type;
            if (ft === mi) {
              if (Me.tag === ue) {
                a(F, Me.sibling);
                var gt = l(Me, P.props.children);
                return gt.return = F, gt._debugSource = P._source, gt._debugOwner = P._owner, gt;
              }
            } else if (Me.elementType === ft || // Keep this check inline so it only runs on the false path:
            XC(Me, P) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof ft == "object" && ft !== null && ft.$$typeof === mt && W_(ft) === Me.type) {
              a(F, Me.sibling);
              var nn = l(Me, P.props);
              return nn.ref = Ap(F, Me, P), nn.return = F, nn._debugSource = P._source, nn._debugOwner = P._owner, nn;
            }
            a(F, Me);
            break;
          } else
            t(F, Me);
          Me = Me.sibling;
        }
        if (P.type === mi) {
          var Bt = Ju(P.props.children, F.mode, de, P.key);
          return Bt.return = F, Bt;
        } else {
          var Xn = DS(P, F.mode, de);
          return Xn.ref = Ap(F, Z, P), Xn.return = F, Xn;
        }
      }
      function Ut(F, Z, P, de) {
        for (var ze = P.key, Me = Z; Me !== null; ) {
          if (Me.key === ze)
            if (Me.tag === Q && Me.stateNode.containerInfo === P.containerInfo && Me.stateNode.implementation === P.implementation) {
              a(F, Me.sibling);
              var ft = l(Me, P.children || []);
              return ft.return = F, ft;
            } else {
              a(F, Me);
              break;
            }
          else
            t(F, Me);
          Me = Me.sibling;
        }
        var gt = LS(P, F.mode, de);
        return gt.return = F, gt;
      }
      function Ot(F, Z, P, de) {
        var ze = typeof P == "object" && P !== null && P.type === mi && P.key === null;
        if (ze && (P = P.props.children), typeof P == "object" && P !== null) {
          switch (P.$$typeof) {
            case Or:
              return f(qe(F, Z, P, de));
            case or:
              return f(Ut(F, Z, P, de));
            case mt:
              var Me = P._payload, ft = P._init;
              return Ot(F, Z, ft(Me), de);
          }
          if (Tt(P))
            return J(F, Z, P, de);
          if (_t(P))
            return De(F, Z, P, de);
          sm(F, P);
        }
        return typeof P == "string" && P !== "" || typeof P == "number" ? f(rt(F, Z, "" + P, de)) : (typeof P == "function" && cm(F), a(F, Z));
      }
      return Ot;
    }
    var Vf = Y_(!0), Q_ = Y_(!1);
    function Vb(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = vc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = vc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Hb(e, t) {
      for (var a = e.child; a !== null; )
        kw(a, t), a = a.sibling;
    }
    var jg = Fu(null), zg;
    zg = {};
    var fm = null, Hf = null, Fg = null, dm = !1;
    function pm() {
      fm = null, Hf = null, Fg = null, dm = !1;
    }
    function G_() {
      dm = !0;
    }
    function q_() {
      dm = !1;
    }
    function K_(e, t, a) {
      sa(jg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== zg && h("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = zg;
    }
    function Pg(e, t) {
      var a = jg.current;
      ua(jg, t), e._currentValue = a;
    }
    function Vg(e, t, a) {
      for (var i = e; i !== null; ) {
        var l = i.alternate;
        if (Ul(i.childLanes, t) ? l !== null && !Ul(l.childLanes, t) && (l.childLanes = Et(l.childLanes, t)) : (i.childLanes = Et(i.childLanes, t), l !== null && (l.childLanes = Et(l.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && h("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ib(e, t, a) {
      Bb(e, t, a);
    }
    function Bb(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var l = void 0, s = i.dependencies;
        if (s !== null) {
          l = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === T) {
                var p = Ms(a), g = Ql(rn, p);
                g.tag = hm;
                var C = i.updateQueue;
                if (C !== null) {
                  var E = C.shared, A = E.pending;
                  A === null ? g.next = g : (g.next = A.next, A.next = g), E.pending = g;
                }
              }
              i.lanes = Et(i.lanes, a);
              var M = i.alternate;
              M !== null && (M.lanes = Et(M.lanes, a)), Vg(i.return, a, e), s.lanes = Et(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === ge)
          l = i.type === e.type ? null : i.child;
        else if (i.tag === lt) {
          var I = i.return;
          if (I === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          I.lanes = Et(I.lanes, a);
          var Y = I.alternate;
          Y !== null && (Y.lanes = Et(Y.lanes, a)), Vg(I, a, e), l = i.sibling;
        } else
          l = i.child;
        if (l !== null)
          l.return = i;
        else
          for (l = i; l !== null; ) {
            if (l === e) {
              l = null;
              break;
            }
            var J = l.sibling;
            if (J !== null) {
              J.return = l.return, l = J;
              break;
            }
            l = l.return;
          }
        i = l;
      }
    }
    function If(e, t) {
      fm = e, Hf = null, Fg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (aa(a.lanes, t) && qp(), a.firstContext = null);
      }
    }
    function ar(e) {
      dm && h("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Fg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Hf === null) {
          if (fm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Hf = a, fm.dependencies = {
            lanes: ie,
            firstContext: a
          };
        } else
          Hf = Hf.next = a;
      }
      return t;
    }
    var oc = null;
    function Hg(e) {
      oc === null ? oc = [e] : oc.push(e);
    }
    function $b() {
      if (oc !== null) {
        for (var e = 0; e < oc.length; e++) {
          var t = oc[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, l = t.pending;
            if (l !== null) {
              var s = l.next;
              l.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        oc = null;
      }
    }
    function X_(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, Hg(t)) : (a.next = l.next, l.next = a), t.interleaved = a, vm(e, i);
    }
    function Wb(e, t, a, i) {
      var l = t.interleaved;
      l === null ? (a.next = a, Hg(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
    }
    function Yb(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, Hg(t)) : (a.next = l.next, l.next = a), t.interleaved = a, vm(e, i);
    }
    function Ba(e, t) {
      return vm(e, t);
    }
    var Qb = vm;
    function vm(e, t) {
      e.lanes = Et(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Et(a.lanes, t)), a === null && (e.flags & (gn | Zr)) !== Ze && QC(e);
      for (var i = e, l = e.return; l !== null; )
        l.childLanes = Et(l.childLanes, t), a = l.alternate, a !== null ? a.childLanes = Et(a.childLanes, t) : (l.flags & (gn | Zr)) !== Ze && QC(e), i = l, l = l.return;
      if (i.tag === $) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var J_ = 0, Z_ = 1, hm = 2, Ig = 3, mm = !1, Bg, ym;
    Bg = !1, ym = null;
    function $g(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: ie
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function e1(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var l = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = l;
      }
    }
    function Ql(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: J_,
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
      var l = i.shared;
      if (ym === l && !Bg && (h("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Bg = !0), Wx()) {
        var s = l.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), l.pending = t, Qb(e, a);
      } else
        return Yb(e, l, t, a);
    }
    function gm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var l = i.shared;
        if (Qd(a)) {
          var s = l.lanes;
          s = qd(s, e.pendingLanes);
          var f = Et(s, a);
          l.lanes = f, vf(e, f);
        }
      }
    }
    function Wg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var l = i.updateQueue;
        if (a === l) {
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
            baseState: l.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: l.shared,
            effects: l.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var E = a.lastBaseUpdate;
      E === null ? a.firstBaseUpdate = t : E.next = t, a.lastBaseUpdate = t;
    }
    function Gb(e, t, a, i, l, s) {
      switch (a.tag) {
        case Z_: {
          var f = a.payload;
          if (typeof f == "function") {
            G_();
            var p = f.call(s, i, l);
            {
              if (e.mode & en) {
                Sn(!0);
                try {
                  f.call(s, i, l);
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
          e.flags = e.flags & ~er | Ke;
        // Intentional fallthrough
        case J_: {
          var g = a.payload, C;
          if (typeof g == "function") {
            G_(), C = g.call(s, i, l);
            {
              if (e.mode & en) {
                Sn(!0);
                try {
                  g.call(s, i, l);
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
      var l = e.updateQueue;
      mm = !1, ym = l.shared;
      var s = l.firstBaseUpdate, f = l.lastBaseUpdate, p = l.shared.pending;
      if (p !== null) {
        l.shared.pending = null;
        var g = p, C = g.next;
        g.next = null, f === null ? s = C : f.next = C, f = g;
        var E = e.alternate;
        if (E !== null) {
          var A = E.updateQueue, M = A.lastBaseUpdate;
          M !== f && (M === null ? A.firstBaseUpdate = C : M.next = C, A.lastBaseUpdate = g);
        }
      }
      if (s !== null) {
        var I = l.baseState, Y = ie, J = null, De = null, rt = null, qe = s;
        do {
          var Ut = qe.lane, Ot = qe.eventTime;
          if (Ul(i, Ut)) {
            if (rt !== null) {
              var Z = {
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
              rt = rt.next = Z;
            }
            I = Gb(e, l, qe, I, t, a);
            var P = qe.callback;
            if (P !== null && // If the update was already committed, we should not queue its
            // callback again.
            qe.lane !== Ft) {
              e.flags |= sn;
              var de = l.effects;
              de === null ? l.effects = [qe] : de.push(qe);
            }
          } else {
            var F = {
              eventTime: Ot,
              lane: Ut,
              tag: qe.tag,
              payload: qe.payload,
              callback: qe.callback,
              next: null
            };
            rt === null ? (De = rt = F, J = I) : rt = rt.next = F, Y = Et(Y, Ut);
          }
          if (qe = qe.next, qe === null) {
            if (p = l.shared.pending, p === null)
              break;
            var ze = p, Me = ze.next;
            ze.next = null, qe = Me, l.lastBaseUpdate = ze, l.shared.pending = null;
          }
        } while (!0);
        rt === null && (J = I), l.baseState = J, l.firstBaseUpdate = De, l.lastBaseUpdate = rt;
        var ft = l.shared.interleaved;
        if (ft !== null) {
          var gt = ft;
          do
            Y = Et(Y, gt.lane), gt = gt.next;
          while (gt !== ft);
        } else s === null && (l.shared.lanes = ie);
        lv(Y), e.lanes = Y, e.memoizedState = I;
      }
      ym = null;
    }
    function qb(e, t) {
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
        for (var l = 0; l < i.length; l++) {
          var s = i[l], f = s.callback;
          f !== null && (s.callback = null, qb(f, a));
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
      var a = dR(t);
      ua(Bu, e), sa(Bu, a, e);
    }
    function Bf(e) {
      ua(Bu, e), ua(jp, e), ua(Cm, e);
    }
    function Qg() {
      var e = Em(Bu.current);
      return e;
    }
    function a1(e) {
      Em(Cm.current);
      var t = Em(Bu.current), a = pR(t, e.type);
      t !== a && (sa(jp, e, e), sa(Bu, a, e));
    }
    function Gg(e) {
      jp.current === e && (ua(Bu, e), ua(jp, e));
    }
    var Kb = 0, i1 = 1, o1 = 1, zp = 2, fo = Fu(Kb);
    function qg(e, t) {
      return (e & t) !== 0;
    }
    function $f(e) {
      return e & i1;
    }
    function Kg(e, t) {
      return e & i1 | t;
    }
    function Xb(e, t) {
      return e | t;
    }
    function $u(e, t) {
      sa(fo, t, e);
    }
    function Wf(e) {
      ua(fo, e);
    }
    function Jb(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Rm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === he) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || R_(i) || vg(i))
              return t;
          }
        } else if (t.tag === ut && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var l = (t.flags & Ke) !== Ze;
          if (l)
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
    ), pr = (
      /* */
      1
    ), Jo = (
      /*  */
      2
    ), vr = (
      /*    */
      4
    ), Vr = (
      /*   */
      8
    ), Xg = [];
    function Jg() {
      for (var e = 0; e < Xg.length; e++) {
        var t = Xg[e];
        t._workInProgressVersionPrimary = null;
      }
      Xg.length = 0;
    }
    function Zb(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Ue = m.ReactCurrentDispatcher, Fp = m.ReactCurrentBatchConfig, Zg, Yf;
    Zg = /* @__PURE__ */ new Set();
    var lc = ie, tn = null, hr = null, mr = null, bm = !1, Pp = !1, Vp = 0, eT = 0, tT = 25, ne = null, Pi = null, Wu = -1, e0 = !1;
    function Qt() {
      {
        var e = ne;
        Pi === null ? Pi = [e] : Pi.push(e);
      }
    }
    function Re() {
      {
        var e = ne;
        Pi !== null && (Wu++, Pi[Wu] !== e && nT(e));
      }
    }
    function Qf(e) {
      e != null && !Tt(e) && h("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ne, typeof e);
    }
    function nT(e) {
      {
        var t = vt(tn);
        if (!Zg.has(t) && (Zg.add(t), Pi !== null)) {
          for (var a = "", i = 30, l = 0; l <= Wu; l++) {
            for (var s = Pi[l], f = l === Wu ? e : s, p = l + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          h(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

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
        return h("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ne), !1;
      e.length !== t.length && h(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ne, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!ce(e[a], t[a]))
          return !1;
      return !0;
    }
    function Gf(e, t, a, i, l, s) {
      lc = s, tn = t, Pi = e !== null ? e._debugHookTypes : null, Wu = -1, e0 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = ie, e !== null && e.memoizedState !== null ? Ue.current = k1 : Pi !== null ? Ue.current = w1 : Ue.current = x1;
      var f = a(i, l);
      if (Pp) {
        var p = 0;
        do {
          if (Pp = !1, Vp = 0, p >= tT)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, e0 = !1, hr = null, mr = null, t.updateQueue = null, Wu = -1, Ue.current = D1, f = a(i, l);
        } while (Pp);
      }
      Ue.current = zm, t._debugHookTypes = Pi;
      var g = hr !== null && hr.next !== null;
      if (lc = ie, tn = null, hr = null, mr = null, ne = null, Pi = null, Wu = -1, e !== null && (e.flags & zn) !== (t.flags & zn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & wt) !== et && h("Internal React error: Expected static flag was missing. Please notify the React team."), bm = !1, g)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function qf() {
      var e = Vp !== 0;
      return Vp = 0, e;
    }
    function l1(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Ht) !== et ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = Ns(e.lanes, a);
    }
    function u1() {
      if (Ue.current = zm, bm) {
        for (var e = tn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        bm = !1;
      }
      lc = ie, tn = null, hr = null, mr = null, Pi = null, Wu = -1, ne = null, C1 = !1, Pp = !1, Vp = 0;
    }
    function Zo() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return mr === null ? tn.memoizedState = mr = e : mr = mr.next = e, mr;
    }
    function Vi() {
      var e;
      if (hr === null) {
        var t = tn.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = hr.next;
      var a;
      if (mr === null ? a = tn.memoizedState : a = mr.next, a !== null)
        mr = a, a = mr.next, hr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        hr = e;
        var i = {
          memoizedState: hr.memoizedState,
          baseState: hr.baseState,
          baseQueue: hr.baseQueue,
          queue: hr.queue,
          next: null
        };
        mr === null ? tn.memoizedState = mr = i : mr = mr.next = i;
      }
      return mr;
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
      var i = Zo(), l;
      a !== void 0 ? l = a(t) : l = t, i.memoizedState = i.baseState = l;
      var s = {
        pending: null,
        interleaved: null,
        lanes: ie,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      };
      i.queue = s;
      var f = s.dispatch = oT.bind(null, tn, s);
      return [i.memoizedState, f];
    }
    function a0(e, t, a) {
      var i = Vi(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = hr, f = s.baseQueue, p = l.pending;
      if (p !== null) {
        if (f !== null) {
          var g = f.next, C = p.next;
          f.next = C, p.next = g;
        }
        s.baseQueue !== f && h("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, l.pending = null;
      }
      if (f !== null) {
        var E = f.next, A = s.baseState, M = null, I = null, Y = null, J = E;
        do {
          var De = J.lane;
          if (Ul(lc, De)) {
            if (Y !== null) {
              var qe = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Ft,
                action: J.action,
                hasEagerState: J.hasEagerState,
                eagerState: J.eagerState,
                next: null
              };
              Y = Y.next = qe;
            }
            if (J.hasEagerState)
              A = J.eagerState;
            else {
              var Ut = J.action;
              A = e(A, Ut);
            }
          } else {
            var rt = {
              lane: De,
              action: J.action,
              hasEagerState: J.hasEagerState,
              eagerState: J.eagerState,
              next: null
            };
            Y === null ? (I = Y = rt, M = A) : Y = Y.next = rt, tn.lanes = Et(tn.lanes, De), lv(De);
          }
          J = J.next;
        } while (J !== null && J !== E);
        Y === null ? M = A : Y.next = I, ce(A, i.memoizedState) || qp(), i.memoizedState = A, i.baseState = M, i.baseQueue = Y, l.lastRenderedState = A;
      }
      var Ot = l.interleaved;
      if (Ot !== null) {
        var F = Ot;
        do {
          var Z = F.lane;
          tn.lanes = Et(tn.lanes, Z), lv(Z), F = F.next;
        } while (F !== Ot);
      } else f === null && (l.lanes = ie);
      var P = l.dispatch;
      return [i.memoizedState, P];
    }
    function i0(e, t, a) {
      var i = Vi(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = l.dispatch, f = l.pending, p = i.memoizedState;
      if (f !== null) {
        l.pending = null;
        var g = f.next, C = g;
        do {
          var E = C.action;
          p = e(p, E), C = C.next;
        } while (C !== g);
        ce(p, i.memoizedState) || qp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), l.lastRenderedState = p;
      }
      return [p, s];
    }
    function JO(e, t, a) {
    }
    function ZO(e, t, a) {
    }
    function o0(e, t, a) {
      var i = tn, l = Zo(), s, f = Pr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Yf || s !== a() && (h("The result of getServerSnapshot should be cached to avoid an infinite loop"), Yf = !0);
      } else {
        if (s = t(), !Yf) {
          var p = t();
          ce(s, p) || (h("The result of getSnapshot should be cached to avoid an infinite loop"), Yf = !0);
        }
        var g = ny();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        df(g, lc) || c1(i, t, s);
      }
      l.memoizedState = s;
      var C = {
        value: s,
        getSnapshot: t
      };
      return l.queue = C, Dm(d1.bind(null, i, C, e), [e]), i.flags |= Jr, Hp(pr | Vr, f1.bind(null, i, C, s, t), void 0, null), s;
    }
    function Tm(e, t, a) {
      var i = tn, l = Vi(), s = t();
      if (!Yf) {
        var f = t();
        ce(s, f) || (h("The result of getSnapshot should be cached to avoid an infinite loop"), Yf = !0);
      }
      var p = l.memoizedState, g = !ce(p, s);
      g && (l.memoizedState = s, qp());
      var C = l.queue;
      if (Bp(d1.bind(null, i, C, e), [e]), C.getSnapshot !== t || g || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      mr !== null && mr.memoizedState.tag & pr) {
        i.flags |= Jr, Hp(pr | Vr, f1.bind(null, i, C, s, t), void 0, null);
        var E = ny();
        if (E === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        df(E, lc) || c1(i, t, s);
      }
      return s;
    }
    function c1(e, t, a) {
      e.flags |= Eu;
      var i = {
        getSnapshot: t,
        value: a
      }, l = tn.updateQueue;
      if (l === null)
        l = s1(), tn.updateQueue = l, l.stores = [i];
      else {
        var s = l.stores;
        s === null ? l.stores = [i] : s.push(i);
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
      t !== null && _r(t, e, ct, rn);
    }
    function xm(e) {
      var t = Zo();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: ie,
        dispatch: null,
        lastRenderedReducer: n0,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = lT.bind(null, tn, a);
      return [t.memoizedState, i];
    }
    function l0(e) {
      return a0(n0);
    }
    function u0(e) {
      return i0(n0);
    }
    function Hp(e, t, a, i) {
      var l = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = tn.updateQueue;
      if (s === null)
        s = s1(), tn.updateQueue = s, s.lastEffect = l.next = l;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = l.next = l;
        else {
          var p = f.next;
          f.next = l, l.next = p, s.lastEffect = l;
        }
      }
      return l;
    }
    function s0(e) {
      var t = Zo();
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
      var l = Zo(), s = i === void 0 ? null : i;
      tn.flags |= e, l.memoizedState = Hp(pr | t, a, void 0, s);
    }
    function km(e, t, a, i) {
      var l = Vi(), s = i === void 0 ? null : i, f = void 0;
      if (hr !== null) {
        var p = hr.memoizedState;
        if (f = p.destroy, s !== null) {
          var g = p.deps;
          if (t0(s, g)) {
            l.memoizedState = Hp(t, a, f, s);
            return;
          }
        }
      }
      tn.flags |= e, l.memoizedState = Hp(pr | t, a, f, s);
    }
    function Dm(e, t) {
      return (tn.mode & Ht) !== et ? Ip(wi | Jr | Fc, Vr, e, t) : Ip(Jr | Fc, Vr, e, t);
    }
    function Bp(e, t) {
      return km(Jr, Vr, e, t);
    }
    function c0(e, t) {
      return Ip(Mt, Jo, e, t);
    }
    function Om(e, t) {
      return km(Mt, Jo, e, t);
    }
    function f0(e, t) {
      var a = Mt;
      return a |= Zi, (tn.mode & Ht) !== et && (a |= Ao), Ip(a, vr, e, t);
    }
    function Lm(e, t) {
      return km(Mt, vr, e, t);
    }
    function h1(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var l = t;
        l.hasOwnProperty("current") || h("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(l).join(", ") + "}");
        var s = e();
        return l.current = s, function() {
          l.current = null;
        };
      }
    }
    function d0(e, t, a) {
      typeof t != "function" && h("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, l = Mt;
      return l |= Zi, (tn.mode & Ht) !== et && (l |= Ao), Ip(l, vr, h1.bind(null, t, e), i);
    }
    function Mm(e, t, a) {
      typeof t != "function" && h("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return km(Mt, vr, h1.bind(null, t, e), i);
    }
    function rT(e, t) {
    }
    var Nm = rT;
    function p0(e, t) {
      var a = Zo(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Am(e, t) {
      var a = Vi(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (t0(i, s))
          return l[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function v0(e, t) {
      var a = Zo(), i = t === void 0 ? null : t, l = e();
      return a.memoizedState = [l, i], l;
    }
    function Um(e, t) {
      var a = Vi(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (t0(i, s))
          return l[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function h0(e) {
      var t = Zo();
      return t.memoizedState = e, e;
    }
    function m1(e) {
      var t = Vi(), a = hr, i = a.memoizedState;
      return g1(t, i, e);
    }
    function y1(e) {
      var t = Vi();
      if (hr === null)
        return t.memoizedState = e, e;
      var a = hr.memoizedState;
      return g1(t, a, e);
    }
    function g1(e, t, a) {
      var i = !Wd(lc);
      if (i) {
        if (!ce(a, t)) {
          var l = Gd();
          tn.lanes = Et(tn.lanes, l), lv(l), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, qp()), e.memoizedState = a, a;
    }
    function aT(e, t, a) {
      var i = Va();
      Vn(dh(i, Li)), e(!0);
      var l = Fp.transition;
      Fp.transition = {};
      var s = Fp.transition;
      Fp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Vn(i), Fp.transition = l, l === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && b("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function m0() {
      var e = xm(!1), t = e[0], a = e[1], i = aT.bind(null, a), l = Zo();
      return l.memoizedState = i, [t, i];
    }
    function S1() {
      var e = l0(), t = e[0], a = Vi(), i = a.memoizedState;
      return [t, i];
    }
    function _1() {
      var e = u0(), t = e[0], a = Vi(), i = a.memoizedState;
      return [t, i];
    }
    var C1 = !1;
    function iT() {
      return C1;
    }
    function y0() {
      var e = Zo(), t = ny(), a = t.identifierPrefix, i;
      if (Pr()) {
        var l = Eb();
        i = ":" + a + "R" + l;
        var s = Vp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = eT++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function jm() {
      var e = Vi(), t = e.memoizedState;
      return t;
    }
    function oT(e, t, a) {
      typeof arguments[3] == "function" && h("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Ku(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (E1(e))
        R1(t, l);
      else {
        var s = X_(e, t, l, i);
        if (s !== null) {
          var f = Ta();
          _r(s, e, i, f), b1(s, t, i);
        }
      }
      T1(e, i);
    }
    function lT(e, t, a) {
      typeof arguments[3] == "function" && h("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Ku(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (E1(e))
        R1(t, l);
      else {
        var s = e.alternate;
        if (e.lanes === ie && (s === null || s.lanes === ie)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = Ue.current, Ue.current = po;
            try {
              var g = t.lastRenderedState, C = f(g, a);
              if (l.hasEagerState = !0, l.eagerState = C, ce(C, g)) {
                Wb(e, t, l, i);
                return;
              }
            } catch {
            } finally {
              Ue.current = p;
            }
          }
        }
        var E = X_(e, t, l, i);
        if (E !== null) {
          var A = Ta();
          _r(E, e, i, A), b1(E, t, i);
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
        var l = Et(i, a);
        t.lanes = l, vf(e, l);
      }
    }
    function T1(e, t, a) {
      Rs(e, t);
    }
    var zm = {
      readContext: ar,
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
    }, x1 = null, w1 = null, k1 = null, D1 = null, el = null, po = null, Fm = null;
    {
      var g0 = function() {
        h("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, yt = function() {
        h("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      x1 = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", Qt(), Qf(t), p0(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", Qt(), ar(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", Qt(), Qf(t), Dm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", Qt(), Qf(a), d0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", Qt(), Qf(t), c0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", Qt(), Qf(t), f0(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", Qt(), Qf(t);
          var a = Ue.current;
          Ue.current = el;
          try {
            return v0(e, t);
          } finally {
            Ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", Qt();
          var i = Ue.current;
          Ue.current = el;
          try {
            return r0(e, t, a);
          } finally {
            Ue.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", Qt(), s0(e);
        },
        useState: function(e) {
          ne = "useState", Qt();
          var t = Ue.current;
          Ue.current = el;
          try {
            return xm(e);
          } finally {
            Ue.current = t;
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
          return ne = "useSyncExternalStore", Qt(), o0(e, t, a);
        },
        useId: function() {
          return ne = "useId", Qt(), y0();
        },
        unstable_isNewReconciler: te
      }, w1 = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", Re(), p0(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", Re(), ar(e);
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
          var a = Ue.current;
          Ue.current = el;
          try {
            return v0(e, t);
          } finally {
            Ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", Re();
          var i = Ue.current;
          Ue.current = el;
          try {
            return r0(e, t, a);
          } finally {
            Ue.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", Re(), s0(e);
        },
        useState: function(e) {
          ne = "useState", Re();
          var t = Ue.current;
          Ue.current = el;
          try {
            return xm(e);
          } finally {
            Ue.current = t;
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
          return ne = "useSyncExternalStore", Re(), o0(e, t, a);
        },
        useId: function() {
          return ne = "useId", Re(), y0();
        },
        unstable_isNewReconciler: te
      }, k1 = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", Re(), Am(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", Re(), ar(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", Re(), Bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", Re(), Mm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", Re(), Om(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", Re(), Lm(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", Re();
          var a = Ue.current;
          Ue.current = po;
          try {
            return Um(e, t);
          } finally {
            Ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", Re();
          var i = Ue.current;
          Ue.current = po;
          try {
            return a0(e, t, a);
          } finally {
            Ue.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", Re(), wm();
        },
        useState: function(e) {
          ne = "useState", Re();
          var t = Ue.current;
          Ue.current = po;
          try {
            return l0(e);
          } finally {
            Ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", Re(), Nm();
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
          return ar(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", Re(), Am(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", Re(), ar(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", Re(), Bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", Re(), Mm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", Re(), Om(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", Re(), Lm(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", Re();
          var a = Ue.current;
          Ue.current = Fm;
          try {
            return Um(e, t);
          } finally {
            Ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", Re();
          var i = Ue.current;
          Ue.current = Fm;
          try {
            return i0(e, t, a);
          } finally {
            Ue.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", Re(), wm();
        },
        useState: function(e) {
          ne = "useState", Re();
          var t = Ue.current;
          Ue.current = Fm;
          try {
            return u0(e);
          } finally {
            Ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", Re(), Nm();
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
      }, el = {
        readContext: function(e) {
          return g0(), ar(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", yt(), Qt(), p0(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", yt(), Qt(), ar(e);
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
          var a = Ue.current;
          Ue.current = el;
          try {
            return v0(e, t);
          } finally {
            Ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", yt(), Qt();
          var i = Ue.current;
          Ue.current = el;
          try {
            return r0(e, t, a);
          } finally {
            Ue.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", yt(), Qt(), s0(e);
        },
        useState: function(e) {
          ne = "useState", yt(), Qt();
          var t = Ue.current;
          Ue.current = el;
          try {
            return xm(e);
          } finally {
            Ue.current = t;
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
          return ne = "useSyncExternalStore", yt(), Qt(), o0(e, t, a);
        },
        useId: function() {
          return ne = "useId", yt(), Qt(), y0();
        },
        unstable_isNewReconciler: te
      }, po = {
        readContext: function(e) {
          return g0(), ar(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", yt(), Re(), Am(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", yt(), Re(), ar(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", yt(), Re(), Bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", yt(), Re(), Mm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", yt(), Re(), Om(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", yt(), Re(), Lm(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", yt(), Re();
          var a = Ue.current;
          Ue.current = po;
          try {
            return Um(e, t);
          } finally {
            Ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", yt(), Re();
          var i = Ue.current;
          Ue.current = po;
          try {
            return a0(e, t, a);
          } finally {
            Ue.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", yt(), Re(), wm();
        },
        useState: function(e) {
          ne = "useState", yt(), Re();
          var t = Ue.current;
          Ue.current = po;
          try {
            return l0(e);
          } finally {
            Ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", yt(), Re(), Nm();
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
          return g0(), ar(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", yt(), Re(), Am(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", yt(), Re(), ar(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", yt(), Re(), Bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", yt(), Re(), Mm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", yt(), Re(), Om(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", yt(), Re(), Lm(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", yt(), Re();
          var a = Ue.current;
          Ue.current = po;
          try {
            return Um(e, t);
          } finally {
            Ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", yt(), Re();
          var i = Ue.current;
          Ue.current = po;
          try {
            return i0(e, t, a);
          } finally {
            Ue.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", yt(), Re(), wm();
        },
        useState: function(e) {
          ne = "useState", yt(), Re();
          var t = Ue.current;
          Ue.current = po;
          try {
            return u0(e);
          } finally {
            Ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", yt(), Re(), Nm();
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
    function uT() {
      Hm = !0;
    }
    function sT() {
      S0 = !1, Hm = !1;
    }
    function cT() {
      S0 = Hm, Hm = !1;
    }
    function M1() {
      return O1;
    }
    function N1() {
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
    function tl(e) {
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
              var l = a.stateNode;
              l.effectDuration += t;
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
              var l = a.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function nl() {
      Pm = Yu();
    }
    function E0() {
      Vm = Yu();
    }
    function R0(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function vo(e, t) {
      if (e && e.defaultProps) {
        var a = Rt({}, t), i = e.defaultProps;
        for (var l in i)
          a[l] === void 0 && (a[l] = i[l]);
        return a;
      }
      return t;
    }
    var b0 = {}, T0, x0, w0, k0, D0, U1, Bm, O0, L0, M0, Wp;
    {
      T0 = /* @__PURE__ */ new Set(), x0 = /* @__PURE__ */ new Set(), w0 = /* @__PURE__ */ new Set(), k0 = /* @__PURE__ */ new Set(), O0 = /* @__PURE__ */ new Set(), D0 = /* @__PURE__ */ new Set(), L0 = /* @__PURE__ */ new Set(), M0 = /* @__PURE__ */ new Set(), Wp = /* @__PURE__ */ new Set();
      var j1 = /* @__PURE__ */ new Set();
      Bm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          j1.has(a) || (j1.add(a), h("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, U1 = function(e, t) {
        if (t === void 0) {
          var a = jt(e) || "Component";
          D0.has(a) || (D0.add(a), h("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(b0, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(b0);
    }
    function N0(e, t, a, i) {
      var l = e.memoizedState, s = a(i, l);
      {
        if (e.mode & en) {
          Sn(!0);
          try {
            s = a(i, l);
          } finally {
            Sn(!1);
          }
        }
        U1(t, s);
      }
      var f = s == null ? l : Rt({}, l, s);
      if (e.memoizedState = f, e.lanes === ie) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var A0 = {
      isMounted: Kv,
      enqueueSetState: function(e, t, a) {
        var i = Cu(e), l = Ta(), s = Ku(i), f = Ql(l, s);
        f.payload = t, a != null && (Bm(a, "setState"), f.callback = a);
        var p = Iu(i, f, s);
        p !== null && (_r(p, i, s, l), gm(p, i, s)), Rs(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Cu(e), l = Ta(), s = Ku(i), f = Ql(l, s);
        f.tag = Z_, f.payload = t, a != null && (Bm(a, "replaceState"), f.callback = a);
        var p = Iu(i, f, s);
        p !== null && (_r(p, i, s, l), gm(p, i, s)), Rs(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Cu(e), i = Ta(), l = Ku(a), s = Ql(i, l);
        s.tag = hm, t != null && (Bm(t, "forceUpdate"), s.callback = t);
        var f = Iu(a, s, l);
        f !== null && (_r(f, a, l, i), gm(f, a, l)), Wc(a, l);
      }
    };
    function z1(e, t, a, i, l, s, f) {
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
          g === void 0 && h("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", jt(t) || "Component");
        }
        return g;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !$e(a, i) || !$e(l, s) : !0;
    }
    function fT(e, t, a) {
      var i = e.stateNode;
      {
        var l = jt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? h("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : h("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && h("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && h("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), i.propTypes && h("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), i.contextType && h("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), t.childContextTypes && !Wp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & en) === et && (Wp.add(t), h(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), t.contextTypes && !Wp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & en) === et && (Wp.add(t), h(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), i.contextTypes && h("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !L0.has(t) && (L0.add(t), h("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof i.componentShouldUpdate == "function" && h("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && h("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", jt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && h("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof i.componentDidReceiveProps == "function" && h("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof i.componentWillRecieveProps == "function" && h("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof i.UNSAFE_componentWillRecieveProps == "function" && h("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var f = i.props !== a;
        i.props !== void 0 && f && h("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), i.defaultProps && h("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !w0.has(t) && (w0.add(t), h("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", jt(t))), typeof i.getDerivedStateFromProps == "function" && h("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof i.getDerivedStateFromError == "function" && h("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && h("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var p = i.state;
        p && (typeof p != "object" || Tt(p)) && h("%s.state: must be set to an object or null", l), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && h("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function F1(e, t) {
      t.updater = A0, e.stateNode = t, Cl(t, e), t._reactInternalInstance = b0;
    }
    function P1(e, t, a) {
      var i = !1, l = fi, s = fi, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === D && f._context === void 0
        );
        if (!p && !M0.has(t)) {
          M0.add(t);
          var g = "";
          f === void 0 ? g = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? g = " However, it is set to a " + typeof f + "." : f.$$typeof === gi ? g = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? g = " Did you accidentally pass the Context.Consumer instead?" : g = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", h("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", jt(t) || "Component", g);
        }
      }
      if (typeof f == "object" && f !== null)
        s = ar(f);
      else {
        l = Uf(e, t, !0);
        var C = t.contextTypes;
        i = C != null, s = i ? jf(e, l) : fi;
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
          var M = jt(t) || "Component";
          x0.has(M) || (x0.add(M), h("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", M, E.state === null ? "null" : "undefined", M));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof E.getSnapshotBeforeUpdate == "function") {
          var I = null, Y = null, J = null;
          if (typeof E.componentWillMount == "function" && E.componentWillMount.__suppressDeprecationWarning !== !0 ? I = "componentWillMount" : typeof E.UNSAFE_componentWillMount == "function" && (I = "UNSAFE_componentWillMount"), typeof E.componentWillReceiveProps == "function" && E.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? Y = "componentWillReceiveProps" : typeof E.UNSAFE_componentWillReceiveProps == "function" && (Y = "UNSAFE_componentWillReceiveProps"), typeof E.componentWillUpdate == "function" && E.componentWillUpdate.__suppressDeprecationWarning !== !0 ? J = "componentWillUpdate" : typeof E.UNSAFE_componentWillUpdate == "function" && (J = "UNSAFE_componentWillUpdate"), I !== null || Y !== null || J !== null) {
            var De = jt(t) || "Component", rt = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            k0.has(De) || (k0.add(De), h(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, De, rt, I !== null ? `
  ` + I : "", Y !== null ? `
  ` + Y : "", J !== null ? `
  ` + J : ""));
          }
        }
      }
      return i && k_(e, l, s), E;
    }
    function dT(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (h("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", vt(e) || "Component"), A0.enqueueReplaceState(t, t.state, null));
    }
    function V1(e, t, a, i) {
      var l = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== l) {
        {
          var s = vt(e) || "Component";
          T0.has(s) || (T0.add(s), h("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        A0.enqueueReplaceState(t, t.state, null);
      }
    }
    function U0(e, t, a, i) {
      fT(e, t, a);
      var l = e.stateNode;
      l.props = a, l.state = e.memoizedState, l.refs = {}, $g(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        l.context = ar(s);
      else {
        var f = Uf(e, t, !0);
        l.context = jf(e, f);
      }
      {
        if (l.state === a) {
          var p = jt(t) || "Component";
          O0.has(p) || (O0.add(p), h("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & en && co.recordLegacyContextWarning(e, l), co.recordUnsafeLifecycleWarnings(e, l);
      }
      l.state = e.memoizedState;
      var g = t.getDerivedStateFromProps;
      if (typeof g == "function" && (N0(e, t, g, a), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (dT(e, l), Sm(e, a, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var C = Mt;
        C |= Zi, (e.mode & Ht) !== et && (C |= Ao), e.flags |= C;
      }
    }
    function pT(e, t, a, i) {
      var l = e.stateNode, s = e.memoizedProps;
      l.props = s;
      var f = l.context, p = t.contextType, g = fi;
      if (typeof p == "object" && p !== null)
        g = ar(p);
      else {
        var C = Uf(e, t, !0);
        g = jf(e, C);
      }
      var E = t.getDerivedStateFromProps, A = typeof E == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !A && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (s !== a || f !== g) && V1(e, l, a, g), t1();
      var M = e.memoizedState, I = l.state = M;
      if (Sm(e, a, l, i), I = e.memoizedState, s === a && M === I && !em() && !_m()) {
        if (typeof l.componentDidMount == "function") {
          var Y = Mt;
          Y |= Zi, (e.mode & Ht) !== et && (Y |= Ao), e.flags |= Y;
        }
        return !1;
      }
      typeof E == "function" && (N0(e, t, E, a), I = e.memoizedState);
      var J = _m() || z1(e, t, s, a, M, I, g);
      if (J) {
        if (!A && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
          var De = Mt;
          De |= Zi, (e.mode & Ht) !== et && (De |= Ao), e.flags |= De;
        }
      } else {
        if (typeof l.componentDidMount == "function") {
          var rt = Mt;
          rt |= Zi, (e.mode & Ht) !== et && (rt |= Ao), e.flags |= rt;
        }
        e.memoizedProps = a, e.memoizedState = I;
      }
      return l.props = a, l.state = I, l.context = g, J;
    }
    function vT(e, t, a, i, l) {
      var s = t.stateNode;
      e1(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : vo(t.type, f);
      s.props = p;
      var g = t.pendingProps, C = s.context, E = a.contextType, A = fi;
      if (typeof E == "object" && E !== null)
        A = ar(E);
      else {
        var M = Uf(t, a, !0);
        A = jf(t, M);
      }
      var I = a.getDerivedStateFromProps, Y = typeof I == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !Y && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== g || C !== A) && V1(t, s, i, A), t1();
      var J = t.memoizedState, De = s.state = J;
      if (Sm(t, i, s, l), De = t.memoizedState, f === g && J === De && !em() && !_m() && !Oe)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || J !== e.memoizedState) && (t.flags |= Mt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || J !== e.memoizedState) && (t.flags |= Gn), !1;
      typeof I == "function" && (N0(t, a, I, i), De = t.memoizedState);
      var rt = _m() || z1(t, a, p, i, J, De, A) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Oe;
      return rt ? (!Y && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, De, A), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, De, A)), typeof s.componentDidUpdate == "function" && (t.flags |= Mt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Gn)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || J !== e.memoizedState) && (t.flags |= Mt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || J !== e.memoizedState) && (t.flags |= Gn), t.memoizedProps = i, t.memoizedState = De), s.props = i, s.state = De, s.context = A, rt;
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
    function hT(e, t) {
      return !0;
    }
    function z0(e, t) {
      try {
        var a = hT(e, t);
        if (a === !1)
          return;
        var i = t.value, l = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === T)
            return;
          console.error(i);
        }
        var p = l ? vt(l) : null, g = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", C;
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
      } catch (M) {
        setTimeout(function() {
          throw M;
        });
      }
    }
    var mT = typeof WeakMap == "function" ? WeakMap : Map;
    function H1(e, t, a) {
      var i = Ql(rn, a);
      i.tag = Ig, i.payload = {
        element: null
      };
      var l = t.value;
      return i.callback = function() {
        uw(l), z0(e, t);
      }, i;
    }
    function F0(e, t, a) {
      var i = Ql(rn, a);
      i.tag = Ig;
      var l = e.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var s = t.value;
        i.payload = function() {
          return l(s);
        }, i.callback = function() {
          JC(e), z0(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        JC(e), z0(e, t), typeof l != "function" && ow(this);
        var g = t.value, C = t.stack;
        this.componentDidCatch(g, {
          componentStack: C !== null ? C : ""
        }), typeof l != "function" && (aa(e.lanes, ct) || h("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", vt(e) || "Unknown"));
      }), i;
    }
    function I1(e, t, a) {
      var i = e.pingCache, l;
      if (i === null ? (i = e.pingCache = new mT(), l = /* @__PURE__ */ new Set(), i.set(t, l)) : (l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l))), !l.has(a)) {
        l.add(a);
        var s = sw.bind(null, e, t, a);
        na && uv(e, a), t.then(s, s);
      }
    }
    function yT(e, t, a, i) {
      var l = e.updateQueue;
      if (l === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        l.add(a);
    }
    function gT(e, t) {
      var a = e.tag;
      if ((e.mode & wt) === et && (a === k || a === Se || a === Ve)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function B1(e) {
      var t = e;
      do {
        if (t.tag === he && Jb(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function $1(e, t, a, i, l) {
      if ((e.mode & wt) === et) {
        if (e === t)
          e.flags |= er;
        else {
          if (e.flags |= Ke, a.flags |= zc, a.flags &= -52805, a.tag === T) {
            var s = a.alternate;
            if (s === null)
              a.tag = Xe;
            else {
              var f = Ql(rn, ct);
              f.tag = hm, Iu(a, f, ct);
            }
          }
          a.lanes = Et(a.lanes, ct);
        }
        return e;
      }
      return e.flags |= er, e.lanes = l, e;
    }
    function ST(e, t, a, i, l) {
      if (a.flags |= ys, na && uv(e, l), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        gT(a), Pr() && a.mode & wt && U_();
        var f = B1(t);
        if (f !== null) {
          f.flags &= ~br, $1(f, t, a, e, l), f.mode & wt && I1(e, s, l), yT(f, e, s);
          return;
        } else {
          if (!ah(l)) {
            I1(e, s, l), yS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Pr() && a.mode & wt) {
        U_();
        var g = B1(t);
        if (g !== null) {
          (g.flags & er) === Ze && (g.flags |= br), $1(g, t, a, e, l), Og(uc(i, a));
          return;
        }
      }
      i = uc(i, a), Jx(i);
      var C = t;
      do {
        switch (C.tag) {
          case $: {
            var E = i;
            C.flags |= er;
            var A = Ms(l);
            C.lanes = Et(C.lanes, A);
            var M = H1(C, E, A);
            Wg(C, M);
            return;
          }
          case T:
            var I = i, Y = C.type, J = C.stateNode;
            if ((C.flags & Ke) === Ze && (typeof Y.getDerivedStateFromError == "function" || J !== null && typeof J.componentDidCatch == "function" && !BC(J))) {
              C.flags |= er;
              var De = Ms(l);
              C.lanes = Et(C.lanes, De);
              var rt = F0(C, I, De);
              Wg(C, rt);
              return;
            }
            break;
        }
        C = C.return;
      } while (C !== null);
    }
    function _T() {
      return null;
    }
    var Yp = m.ReactCurrentOwner, ho = !1, P0, Qp, V0, H0, I0, sc, B0, $m, Gp;
    P0 = {}, Qp = {}, V0 = {}, H0 = {}, I0 = {}, sc = !1, B0 = {}, $m = {}, Gp = {};
    function Ra(e, t, a, i) {
      e === null ? t.child = Q_(t, null, a, i) : t.child = Vf(t, e.child, a, i);
    }
    function CT(e, t, a, i) {
      t.child = Vf(t, e.child, null, i), t.child = Vf(t, null, a, i);
    }
    function W1(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && uo(
          s,
          i,
          // Resolved props
          "prop",
          jt(a)
        );
      }
      var f = a.render, p = t.ref, g, C;
      If(t, l), Sa(t);
      {
        if (Yp.current = t, Qn(!0), g = Gf(e, t, f, i, p, l), C = qf(), t.mode & en) {
          Sn(!0);
          try {
            g = Gf(e, t, f, i, p, l), C = qf();
          } finally {
            Sn(!1);
          }
        }
        Qn(!1);
      }
      return _a(), e !== null && !ho ? (l1(e, t, l), Gl(e, t, l)) : (Pr() && C && bg(t), t.flags |= oi, Ra(e, t, g, l), t.child);
    }
    function Y1(e, t, a, i, l) {
      if (e === null) {
        var s = a.type;
        if (xw(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = rd(s), t.tag = Ve, t.type = f, Y0(t, s), Q1(e, t, f, i, l);
        }
        {
          var p = s.propTypes;
          if (p && uo(
            p,
            i,
            // Resolved props
            "prop",
            jt(s)
          ), a.defaultProps !== void 0) {
            var g = jt(s) || "Unknown";
            Gp[g] || (h("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", g), Gp[g] = !0);
          }
        }
        var C = kS(a.type, null, i, t, t.mode, l);
        return C.ref = t.ref, C.return = t, t.child = C, C;
      }
      {
        var E = a.type, A = E.propTypes;
        A && uo(
          A,
          i,
          // Resolved props
          "prop",
          jt(E)
        );
      }
      var M = e.child, I = J0(e, l);
      if (!I) {
        var Y = M.memoizedProps, J = a.compare;
        if (J = J !== null ? J : $e, J(Y, i) && e.ref === t.ref)
          return Gl(e, t, l);
      }
      t.flags |= oi;
      var De = vc(M, i);
      return De.ref = t.ref, De.return = t, t.child = De, De;
    }
    function Q1(e, t, a, i, l) {
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
          C && uo(
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
        if ($e(E, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ho = !1, t.pendingProps = i = E, J0(e, l))
            (e.flags & zc) !== Ze && (ho = !0);
          else return t.lanes = e.lanes, Gl(e, t, l);
      }
      return $0(e, t, a, i, l);
    }
    function G1(e, t, a) {
      var i = t.pendingProps, l = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || me)
        if ((t.mode & wt) === et) {
          var f = {
            baseLanes: ie,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, ry(t, a);
        } else if (aa(a, ra)) {
          var A = {
            baseLanes: ie,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = A;
          var M = s !== null ? s.baseLanes : a;
          ry(t, M);
        } else {
          var p = null, g;
          if (s !== null) {
            var C = s.baseLanes;
            g = Et(C, a);
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
        s !== null ? (I = Et(s.baseLanes, a), t.memoizedState = null) : I = a, ry(t, I);
      }
      return Ra(e, t, l, a), t.child;
    }
    function ET(e, t, a) {
      var i = t.pendingProps;
      return Ra(e, t, i, a), t.child;
    }
    function RT(e, t, a) {
      var i = t.pendingProps.children;
      return Ra(e, t, i, a), t.child;
    }
    function bT(e, t, a) {
      {
        t.flags |= Mt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var l = t.pendingProps, s = l.children;
      return Ra(e, t, s, a), t.child;
    }
    function q1(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= En, t.flags |= Ru);
    }
    function $0(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && uo(
          s,
          i,
          // Resolved props
          "prop",
          jt(a)
        );
      }
      var f;
      {
        var p = Uf(t, a, !0);
        f = jf(t, p);
      }
      var g, C;
      If(t, l), Sa(t);
      {
        if (Yp.current = t, Qn(!0), g = Gf(e, t, a, i, f, l), C = qf(), t.mode & en) {
          Sn(!0);
          try {
            g = Gf(e, t, a, i, f, l), C = qf();
          } finally {
            Sn(!1);
          }
        }
        Qn(!1);
      }
      return _a(), e !== null && !ho ? (l1(e, t, l), Gl(e, t, l)) : (Pr() && C && bg(t), t.flags |= oi, Ra(e, t, g, l), t.child);
    }
    function K1(e, t, a, i, l) {
      {
        switch (Hw(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), g = p.state;
            s.updater.enqueueSetState(s, g, null);
            break;
          }
          case !0: {
            t.flags |= Ke, t.flags |= er;
            var C = new Error("Simulated error coming from DevTools"), E = Ms(l);
            t.lanes = Et(t.lanes, E);
            var A = F0(t, uc(C, t), E);
            Wg(t, A);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var M = a.propTypes;
          M && uo(
            M,
            i,
            // Resolved props
            "prop",
            jt(a)
          );
        }
      }
      var I;
      Xo(a) ? (I = !0, nm(t)) : I = !1, If(t, l);
      var Y = t.stateNode, J;
      Y === null ? (Ym(e, t), P1(t, a, i), U0(t, a, i, l), J = !0) : e === null ? J = pT(t, a, i, l) : J = vT(e, t, a, i, l);
      var De = W0(e, t, a, J, I, l);
      {
        var rt = t.stateNode;
        J && rt.props !== i && (sc || h("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", vt(t) || "a component"), sc = !0);
      }
      return De;
    }
    function W0(e, t, a, i, l, s) {
      q1(e, t);
      var f = (t.flags & Ke) !== Ze;
      if (!i && !f)
        return l && L_(t, a, !1), Gl(e, t, s);
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
      return t.flags |= oi, e !== null && f ? CT(e, t, g, s) : Ra(e, t, g, s), t.memoizedState = p.state, l && L_(t, a, !0), t.child;
    }
    function X1(e) {
      var t = e.stateNode;
      t.pendingContext ? D_(e, t.pendingContext, t.pendingContext !== t.context) : t.context && D_(e, t.context, !1), Yg(e, t.containerInfo);
    }
    function TT(e, t, a) {
      if (X1(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, l = t.memoizedState, s = l.element;
      e1(e, t), Sm(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (l.isDehydrated) {
        var g = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, C = t.updateQueue;
        if (C.baseState = g, t.memoizedState = g, t.flags & br) {
          var E = uc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return J1(e, t, p, a, E);
        } else if (p !== s) {
          var A = uc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return J1(e, t, p, a, A);
        } else {
          kb(t);
          var M = Q_(t, null, p, a);
          t.child = M;
          for (var I = M; I; )
            I.flags = I.flags & ~gn | Zr, I = I.sibling;
        }
      } else {
        if (Pf(), p === s)
          return Gl(e, t, a);
        Ra(e, t, p, a);
      }
      return t.child;
    }
    function J1(e, t, a, i, l) {
      return Pf(), Og(l), t.flags |= br, Ra(e, t, a, i), t.child;
    }
    function xT(e, t, a) {
      a1(t), e === null && Dg(t);
      var i = t.type, l = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = l.children, p = cg(i, l);
      return p ? f = null : s !== null && cg(i, s) && (t.flags |= Aa), q1(e, t), Ra(e, t, f, a), t.child;
    }
    function wT(e, t) {
      return e === null && Dg(t), null;
    }
    function kT(e, t, a, i) {
      Ym(e, t);
      var l = t.pendingProps, s = a, f = s._payload, p = s._init, g = p(f);
      t.type = g;
      var C = t.tag = ww(g), E = vo(g, l), A;
      switch (C) {
        case k:
          return Y0(t, g), t.type = g = rd(g), A = $0(null, t, g, E, i), A;
        case T:
          return t.type = g = ES(g), A = K1(null, t, g, E, i), A;
        case Se:
          return t.type = g = RS(g), A = W1(null, t, g, E, i), A;
        case Qe: {
          if (t.type !== t.elementType) {
            var M = g.propTypes;
            M && uo(
              M,
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
            vo(g.type, E),
            // The inner type can have defaults too
            i
          ), A;
        }
      }
      var I = "";
      throw g !== null && typeof g == "object" && g.$$typeof === mt && (I = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + g + ". " + ("Lazy element type must resolve to a class or function." + I));
    }
    function DT(e, t, a, i, l) {
      Ym(e, t), t.tag = T;
      var s;
      return Xo(a) ? (s = !0, nm(t)) : s = !1, If(t, l), P1(t, a, i), U0(t, a, i, l), W0(null, t, a, !0, s, l);
    }
    function OT(e, t, a, i) {
      Ym(e, t);
      var l = t.pendingProps, s;
      {
        var f = Uf(t, a, !1);
        s = jf(t, f);
      }
      If(t, i);
      var p, g;
      Sa(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var C = jt(a) || "Unknown";
          P0[C] || (h("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", C, C), P0[C] = !0);
        }
        t.mode & en && co.recordLegacyContextWarning(t, null), Qn(!0), Yp.current = t, p = Gf(null, t, a, l, s, i), g = qf(), Qn(!1);
      }
      if (_a(), t.flags |= oi, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var E = jt(a) || "Unknown";
        Qp[E] || (h("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", E, E, E), Qp[E] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var A = jt(a) || "Unknown";
          Qp[A] || (h("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", A, A, A), Qp[A] = !0);
        }
        t.tag = T, t.memoizedState = null, t.updateQueue = null;
        var M = !1;
        return Xo(a) ? (M = !0, nm(t)) : M = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, $g(t), F1(t, p), U0(t, a, l, i), W0(null, t, a, !0, M, i);
      } else {
        if (t.tag = k, t.mode & en) {
          Sn(!0);
          try {
            p = Gf(null, t, a, l, s, i), g = qf();
          } finally {
            Sn(!1);
          }
        }
        return Pr() && g && bg(t), Ra(null, t, p, i), Y0(t, a), t.child;
      }
    }
    function Y0(e, t) {
      {
        if (t && t.childContextTypes && h("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Mr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var l = i || "", s = e._debugSource;
          s && (l = s.fileName + ":" + s.lineNumber), I0[l] || (I0[l] = !0, h("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = jt(t) || "Unknown";
          Gp[f] || (h("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Gp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = jt(t) || "Unknown";
          H0[p] || (h("%s: Function components do not support getDerivedStateFromProps.", p), H0[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var g = jt(t) || "Unknown";
          V0[g] || (h("%s: Function components do not support contextType.", g), V0[g] = !0);
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
        cachePool: _T(),
        transitions: null
      };
    }
    function LT(e, t) {
      var a = null;
      return {
        baseLanes: Et(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function MT(e, t, a, i) {
      if (t !== null) {
        var l = t.memoizedState;
        if (l === null)
          return !1;
      }
      return qg(e, zp);
    }
    function NT(e, t) {
      return Ns(e.childLanes, t);
    }
    function Z1(e, t, a) {
      var i = t.pendingProps;
      Iw(t) && (t.flags |= Ke);
      var l = fo.current, s = !1, f = (t.flags & Ke) !== Ze;
      if (f || MT(l, e) ? (s = !0, t.flags &= ~Ke) : (e === null || e.memoizedState !== null) && (l = Xb(l, o1)), l = $f(l), $u(t, l), e === null) {
        Dg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var g = p.dehydrated;
          if (g !== null)
            return FT(t, g);
        }
        var C = i.children, E = i.fallback;
        if (s) {
          var A = AT(t, C, E, a), M = t.child;
          return M.memoizedState = G0(a), t.memoizedState = Q0, A;
        } else
          return q0(t, C);
      } else {
        var I = e.memoizedState;
        if (I !== null) {
          var Y = I.dehydrated;
          if (Y !== null)
            return PT(e, t, f, i, Y, I, a);
        }
        if (s) {
          var J = i.fallback, De = i.children, rt = jT(e, t, De, J, a), qe = t.child, Ut = e.child.memoizedState;
          return qe.memoizedState = Ut === null ? G0(a) : LT(Ut, a), qe.childLanes = NT(e, a), t.memoizedState = Q0, rt;
        } else {
          var Ot = i.children, F = UT(e, t, Ot, a);
          return t.memoizedState = null, F;
        }
      }
    }
    function q0(e, t, a) {
      var i = e.mode, l = {
        mode: "visible",
        children: t
      }, s = K0(l, i);
      return s.return = e, e.child = s, s;
    }
    function AT(e, t, a, i) {
      var l = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, g;
      return (l & wt) === et && s !== null ? (p = s, p.childLanes = ie, p.pendingProps = f, e.mode & Vt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), g = Ju(a, l, i, null)) : (p = K0(f, l), g = Ju(a, l, i, null)), p.return = e, g.return = e, p.sibling = g, e.child = p, g;
    }
    function K0(e, t, a) {
      return eE(e, t, ie, null);
    }
    function eC(e, t) {
      return vc(e, t);
    }
    function UT(e, t, a, i) {
      var l = e.child, s = l.sibling, f = eC(l, {
        mode: "visible",
        children: a
      });
      if ((t.mode & wt) === et && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Na) : p.push(s);
      }
      return t.child = f, f;
    }
    function jT(e, t, a, i, l) {
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
        C = E, C.childLanes = ie, C.pendingProps = g, t.mode & Vt && (C.actualDuration = 0, C.actualStartTime = -1, C.selfBaseDuration = f.selfBaseDuration, C.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        C = eC(f, g), C.subtreeFlags = f.subtreeFlags & zn;
      var A;
      return p !== null ? A = vc(p, i) : (A = Ju(i, s, l, null), A.flags |= gn), A.return = t, C.return = t, C.sibling = A, t.child = C, A;
    }
    function Wm(e, t, a, i) {
      i !== null && Og(i), Vf(t, e.child, null, a);
      var l = t.pendingProps, s = l.children, f = q0(t, s);
      return f.flags |= gn, t.memoizedState = null, f;
    }
    function zT(e, t, a, i, l) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = K0(f, s), g = Ju(i, s, l, null);
      return g.flags |= gn, p.return = t, g.return = t, p.sibling = g, t.child = p, (t.mode & wt) !== et && Vf(t, e.child, null, l), g;
    }
    function FT(e, t, a) {
      return (e.mode & wt) === et ? (h("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = ct) : vg(t) ? e.lanes = Tr : e.lanes = ra, null;
    }
    function PT(e, t, a, i, l, s, f) {
      if (a)
        if (t.flags & br) {
          t.flags &= ~br;
          var F = j0(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Wm(e, t, f, F);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Ke, null;
          var Z = i.children, P = i.fallback, de = zT(e, t, Z, P, f), ze = t.child;
          return ze.memoizedState = G0(f), t.memoizedState = Q0, de;
        }
      else {
        if (xb(), (t.mode & wt) === et)
          return Wm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (vg(l)) {
          var p, g, C;
          {
            var E = BR(l);
            p = E.digest, g = E.message, C = E.stack;
          }
          var A;
          g ? A = new Error(g) : A = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var M = j0(A, p, C);
          return Wm(e, t, f, M);
        }
        var I = aa(f, e.childLanes);
        if (ho || I) {
          var Y = ny();
          if (Y !== null) {
            var J = Xd(Y, f);
            if (J !== Ft && J !== s.retryLane) {
              s.retryLane = J;
              var De = rn;
              Ba(e, J), _r(Y, e, J, De);
            }
          }
          yS();
          var rt = j0(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Wm(e, t, f, rt);
        } else if (R_(l)) {
          t.flags |= Ke, t.child = e.child;
          var qe = cw.bind(null, e);
          return $R(l, qe), null;
        } else {
          Db(t, l, s.treeContext);
          var Ut = i.children, Ot = q0(t, Ut);
          return Ot.flags |= Zr, Ot;
        }
      }
    }
    function tC(e, t, a) {
      e.lanes = Et(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Et(i.lanes, t)), Vg(e.return, t, a);
    }
    function VT(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === he) {
          var l = i.memoizedState;
          l !== null && tC(i, a, e);
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
    function HT(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Rm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function IT(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !B0[e])
        if (B0[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              h('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              h('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              h('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          h('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function BT(e, t) {
      e !== void 0 && !$m[e] && (e !== "collapsed" && e !== "hidden" ? ($m[e] = !0, h('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && ($m[e] = !0, h('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function nC(e, t) {
      {
        var a = Tt(e), i = !a && typeof _t(e) == "function";
        if (a || i) {
          var l = a ? "array" : "iterable";
          return h("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", l, t, l), !1;
        }
      }
      return !0;
    }
    function $T(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Tt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!nC(e[a], a))
              return;
        } else {
          var i = _t(e);
          if (typeof i == "function") {
            var l = i.call(e);
            if (l)
              for (var s = l.next(), f = 0; !s.done; s = l.next()) {
                if (!nC(s.value, f))
                  return;
                f++;
              }
          } else
            h('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function X0(e, t, a, i, l) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: l
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = l);
    }
    function rC(e, t, a) {
      var i = t.pendingProps, l = i.revealOrder, s = i.tail, f = i.children;
      IT(l), BT(s, l), $T(f, l), Ra(e, t, f, a);
      var p = fo.current, g = qg(p, zp);
      if (g)
        p = Kg(p, zp), t.flags |= Ke;
      else {
        var C = e !== null && (e.flags & Ke) !== Ze;
        C && VT(t, t.child, a), p = $f(p);
      }
      if ($u(t, p), (t.mode & wt) === et)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var E = HT(t.child), A;
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
            var M = null, I = t.child;
            for (t.child = null; I !== null; ) {
              var Y = I.alternate;
              if (Y !== null && Rm(Y) === null) {
                t.child = I;
                break;
              }
              var J = I.sibling;
              I.sibling = M, M = I, I = J;
            }
            X0(
              t,
              !0,
              // isBackwards
              M,
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
    function WT(e, t, a) {
      Yg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Vf(t, null, i, a) : Ra(e, t, i, a), t.child;
    }
    var aC = !1;
    function YT(e, t, a) {
      var i = t.type, l = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || aC || (aC = !0, h("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var g = t.type.propTypes;
        g && uo(g, s, "prop", "Context.Provider");
      }
      if (K_(t, l, p), f !== null) {
        var C = f.value;
        if (ce(C, p)) {
          if (f.children === s.children && !em())
            return Gl(e, t, a);
        } else
          Ib(t, l, a);
      }
      var E = s.children;
      return Ra(e, t, E, a), t.child;
    }
    var iC = !1;
    function QT(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (iC || (iC = !0, h("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var l = t.pendingProps, s = l.children;
      typeof s != "function" && h("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), If(t, a);
      var f = ar(i);
      Sa(t);
      var p;
      return Yp.current = t, Qn(!0), p = s(f), Qn(!1), _a(), t.flags |= oi, Ra(e, t, p, a), t.child;
    }
    function qp() {
      ho = !0;
    }
    function Ym(e, t) {
      (t.mode & wt) === et && e !== null && (e.alternate = null, t.alternate = null, t.flags |= gn);
    }
    function Gl(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), A1(), lv(t.lanes), aa(a, t.childLanes) ? (Vb(e, t), t.child) : null;
    }
    function GT(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var l = i.child;
          if (l === null)
            throw new Error("Expected parent to have a child.");
          for (; l.sibling !== t; )
            if (l = l.sibling, l === null)
              throw new Error("Expected to find the previous sibling.");
          l.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Na) : s.push(e), a.flags |= gn, a;
      }
    }
    function J0(e, t) {
      var a = e.lanes;
      return !!aa(a, t);
    }
    function qT(e, t, a) {
      switch (t.tag) {
        case $:
          X1(t), t.stateNode, Pf();
          break;
        case G:
          a1(t);
          break;
        case T: {
          var i = t.type;
          Xo(i) && nm(t);
          break;
        }
        case Q:
          Yg(t, t.stateNode.containerInfo);
          break;
        case ge: {
          var l = t.memoizedProps.value, s = t.type._context;
          K_(t, s, l);
          break;
        }
        case Ee:
          {
            var f = aa(a, t.childLanes);
            f && (t.flags |= Mt);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case he: {
          var g = t.memoizedState;
          if (g !== null) {
            if (g.dehydrated !== null)
              return $u(t, $f(fo.current)), t.flags |= Ke, null;
            var C = t.child, E = C.childLanes;
            if (aa(a, E))
              return Z1(e, t, a);
            $u(t, $f(fo.current));
            var A = Gl(e, t, a);
            return A !== null ? A.sibling : null;
          } else
            $u(t, $f(fo.current));
          break;
        }
        case ut: {
          var M = (e.flags & Ke) !== Ze, I = aa(a, t.childLanes);
          if (M) {
            if (I)
              return rC(e, t, a);
            t.flags |= Ke;
          }
          var Y = t.memoizedState;
          if (Y !== null && (Y.rendering = null, Y.tail = null, Y.lastEffect = null), $u(t, fo.current), I)
            break;
          return null;
        }
        case ee:
        case be:
          return t.lanes = ie, G1(e, t, a);
      }
      return Gl(e, t, a);
    }
    function oC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return GT(e, t, kS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, l = t.pendingProps;
        if (i !== l || em() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ho = !0;
        else {
          var s = J0(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Ke) === Ze)
            return ho = !1, qT(e, t, a);
          (e.flags & zc) !== Ze ? ho = !0 : ho = !1;
        }
      } else if (ho = !1, Pr() && _b(t)) {
        var f = t.index, p = Cb();
        A_(t, p, f);
      }
      switch (t.lanes = ie, t.tag) {
        case V:
          return OT(e, t, t.type, a);
        case Ie: {
          var g = t.elementType;
          return kT(e, t, g, a);
        }
        case k: {
          var C = t.type, E = t.pendingProps, A = t.elementType === C ? E : vo(C, E);
          return $0(e, t, C, A, a);
        }
        case T: {
          var M = t.type, I = t.pendingProps, Y = t.elementType === M ? I : vo(M, I);
          return K1(e, t, M, Y, a);
        }
        case $:
          return TT(e, t, a);
        case G:
          return xT(e, t, a);
        case ve:
          return wT(e, t);
        case he:
          return Z1(e, t, a);
        case Q:
          return WT(e, t, a);
        case Se: {
          var J = t.type, De = t.pendingProps, rt = t.elementType === J ? De : vo(J, De);
          return W1(e, t, J, rt, a);
        }
        case ue:
          return ET(e, t, a);
        case pe:
          return RT(e, t, a);
        case Ee:
          return bT(e, t, a);
        case ge:
          return YT(e, t, a);
        case Ne:
          return QT(e, t, a);
        case Qe: {
          var qe = t.type, Ut = t.pendingProps, Ot = vo(qe, Ut);
          if (t.type !== t.elementType) {
            var F = qe.propTypes;
            F && uo(
              F,
              Ot,
              // Resolved for outer only
              "prop",
              jt(qe)
            );
          }
          return Ot = vo(qe.type, Ot), Y1(e, t, qe, Ot, a);
        }
        case Ve:
          return Q1(e, t, t.type, t.pendingProps, a);
        case Xe: {
          var Z = t.type, P = t.pendingProps, de = t.elementType === Z ? P : vo(Z, P);
          return DT(e, t, Z, de, a);
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
    function Kf(e) {
      e.flags |= Mt;
    }
    function lC(e) {
      e.flags |= En, e.flags |= Ru;
    }
    var uC, Z0, sC, cC;
    uC = function(e, t, a, i) {
      for (var l = t.child; l !== null; ) {
        if (l.tag === G || l.tag === ve)
          yR(e, l.stateNode);
        else if (l.tag !== Q) {
          if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
        }
        if (l === t)
          return;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            return;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }, Z0 = function(e, t) {
    }, sC = function(e, t, a, i, l) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Qg(), g = SR(f, a, s, i, l, p);
        t.updateQueue = g, g && Kf(t);
      }
    }, cC = function(e, t, a, i) {
      a !== i && Kf(t);
    };
    function Kp(e, t) {
      if (!Pr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var l = e.tail, s = null; l !== null; )
              l.alternate !== null && (s = l), l = l.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Hr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = ie, i = Ze;
      if (t) {
        if ((e.mode & Vt) !== et) {
          for (var g = e.selfBaseDuration, C = e.child; C !== null; )
            a = Et(a, Et(C.lanes, C.childLanes)), i |= C.subtreeFlags & zn, i |= C.flags & zn, g += C.treeBaseDuration, C = C.sibling;
          e.treeBaseDuration = g;
        } else
          for (var E = e.child; E !== null; )
            a = Et(a, Et(E.lanes, E.childLanes)), i |= E.subtreeFlags & zn, i |= E.flags & zn, E.return = e, E = E.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Vt) !== et) {
          for (var l = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Et(a, Et(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, l += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = l, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Et(a, Et(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function KT(e, t, a) {
      if (Ab() && (t.mode & wt) !== et && (t.flags & Ke) === Ze)
        return H_(t), Pf(), t.flags |= br | ys | er, !1;
      var i = lm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Mb(t), Hr(t), (t.mode & Vt) !== et) {
            var l = a !== null;
            if (l) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Pf(), (t.flags & Ke) === Ze && (t.memoizedState = null), t.flags |= Mt, Hr(t), (t.mode & Vt) !== et) {
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
        case V:
        case Ie:
        case Ve:
        case k:
        case Se:
        case ue:
        case pe:
        case Ee:
        case Ne:
        case Qe:
          return Hr(t), null;
        case T: {
          var l = t.type;
          return Xo(l) && tm(t), Hr(t), null;
        }
        case $: {
          var s = t.stateNode;
          if (Bf(t), Cg(t), Jg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = lm(t);
            if (f)
              Kf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & br) !== Ze) && (t.flags |= Gn, I_());
            }
          }
          return Z0(e, t), Hr(t), null;
        }
        case G: {
          Gg(t);
          var g = r1(), C = t.type;
          if (e !== null && t.stateNode != null)
            sC(e, t, C, i, g), e.ref !== t.ref && lC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Hr(t), null;
            }
            var E = Qg(), A = lm(t);
            if (A)
              Ob(t, g, E) && Kf(t);
            else {
              var M = mR(C, i, g, E, t);
              uC(M, t, !1, !1), t.stateNode = M, gR(M, C, i, g) && Kf(t);
            }
            t.ref !== null && lC(t);
          }
          return Hr(t), null;
        }
        case ve: {
          var I = i;
          if (e && t.stateNode != null) {
            var Y = e.memoizedProps;
            cC(e, t, Y, I);
          } else {
            if (typeof I != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var J = r1(), De = Qg(), rt = lm(t);
            rt ? Lb(t) && Kf(t) : t.stateNode = _R(I, J, De, t);
          }
          return Hr(t), null;
        }
        case he: {
          Wf(t);
          var qe = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Ut = KT(e, t, qe);
            if (!Ut)
              return t.flags & er ? t : null;
          }
          if ((t.flags & Ke) !== Ze)
            return t.lanes = a, (t.mode & Vt) !== et && R0(t), t;
          var Ot = qe !== null, F = e !== null && e.memoizedState !== null;
          if (Ot !== F && Ot) {
            var Z = t.child;
            if (Z.flags |= jn, (t.mode & wt) !== et) {
              var P = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              P || qg(fo.current, o1) ? Xx() : yS();
            }
          }
          var de = t.updateQueue;
          if (de !== null && (t.flags |= Mt), Hr(t), (t.mode & Vt) !== et && Ot) {
            var ze = t.child;
            ze !== null && (t.treeBaseDuration -= ze.treeBaseDuration);
          }
          return null;
        }
        case Q:
          return Bf(t), Z0(e, t), e === null && pb(t.stateNode.containerInfo), Hr(t), null;
        case ge:
          var Me = t.type._context;
          return Pg(Me, t), Hr(t), null;
        case Xe: {
          var ft = t.type;
          return Xo(ft) && tm(t), Hr(t), null;
        }
        case ut: {
          Wf(t);
          var gt = t.memoizedState;
          if (gt === null)
            return Hr(t), null;
          var nn = (t.flags & Ke) !== Ze, Bt = gt.rendering;
          if (Bt === null)
            if (nn)
              Kp(gt, !1);
            else {
              var Xn = Zx() && (e === null || (e.flags & Ke) === Ze);
              if (!Xn)
                for (var $t = t.child; $t !== null; ) {
                  var Bn = Rm($t);
                  if (Bn !== null) {
                    nn = !0, t.flags |= Ke, Kp(gt, !1);
                    var fa = Bn.updateQueue;
                    return fa !== null && (t.updateQueue = fa, t.flags |= Mt), t.subtreeFlags = Ze, Hb(t, a), $u(t, Kg(fo.current, zp)), t.child;
                  }
                  $t = $t.sibling;
                }
              gt.tail !== null && qn() > MC() && (t.flags |= Ke, nn = !0, Kp(gt, !1), t.lanes = Id);
            }
          else {
            if (!nn) {
              var Yr = Rm(Bt);
              if (Yr !== null) {
                t.flags |= Ke, nn = !0;
                var pi = Yr.updateQueue;
                if (pi !== null && (t.updateQueue = pi, t.flags |= Mt), Kp(gt, !0), gt.tail === null && gt.tailMode === "hidden" && !Bt.alternate && !Pr())
                  return Hr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              qn() * 2 - gt.renderingStartTime > MC() && a !== ra && (t.flags |= Ke, nn = !0, Kp(gt, !1), t.lanes = Id);
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
            var da = fo.current;
            return nn ? da = Kg(da, zp) : da = $f(da), $u(t, da), wa;
          }
          return Hr(t), null;
        }
        case K:
          break;
        case ee:
        case be: {
          mS(t);
          var Zl = t.memoizedState, ad = Zl !== null;
          if (e !== null) {
            var dv = e.memoizedState, il = dv !== null;
            il !== ad && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !me && (t.flags |= jn);
          }
          return !ad || (t.mode & wt) === et ? Hr(t) : aa(al, ra) && (Hr(t), t.subtreeFlags & (gn | Mt) && (t.flags |= jn)), null;
        }
        case He:
          return null;
        case we:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function XT(e, t, a) {
      switch (Tg(t), t.tag) {
        case T: {
          var i = t.type;
          Xo(i) && tm(t);
          var l = t.flags;
          return l & er ? (t.flags = l & ~er | Ke, (t.mode & Vt) !== et && R0(t), t) : null;
        }
        case $: {
          t.stateNode, Bf(t), Cg(t), Jg();
          var s = t.flags;
          return (s & er) !== Ze && (s & Ke) === Ze ? (t.flags = s & ~er | Ke, t) : null;
        }
        case G:
          return Gg(t), null;
        case he: {
          Wf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Pf();
          }
          var p = t.flags;
          return p & er ? (t.flags = p & ~er | Ke, (t.mode & Vt) !== et && R0(t), t) : null;
        }
        case ut:
          return Wf(t), null;
        case Q:
          return Bf(t), null;
        case ge:
          var g = t.type._context;
          return Pg(g, t), null;
        case ee:
        case be:
          return mS(t), null;
        case He:
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
          t.stateNode, Bf(t), Cg(t), Jg();
          break;
        }
        case G: {
          Gg(t);
          break;
        }
        case Q:
          Bf(t);
          break;
        case he:
          Wf(t);
          break;
        case ut:
          Wf(t);
          break;
        case ge:
          var l = t.type._context;
          Pg(l, t);
          break;
        case ee:
        case be:
          mS(t);
          break;
      }
    }
    var pC = null;
    pC = /* @__PURE__ */ new Set();
    var Qm = !1, Ir = !1, JT = typeof WeakSet == "function" ? WeakSet : Set, We = null, Xf = null, Jf = null;
    function ZT(e) {
      No(null, function() {
        throw e;
      }), ms();
    }
    var ex = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Vt)
        try {
          nl(), t.componentWillUnmount();
        } finally {
          tl(e);
        }
      else
        t.componentWillUnmount();
    };
    function vC(e, t) {
      try {
        Qu(vr, e);
      } catch (a) {
        pn(e, t, a);
      }
    }
    function eS(e, t, a) {
      try {
        ex(e, a);
      } catch (i) {
        pn(e, t, i);
      }
    }
    function tx(e, t, a) {
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
            if (je && ht && e.mode & Vt)
              try {
                nl(), i = a(null);
              } finally {
                tl(e);
              }
            else
              i = a(null);
          } catch (l) {
            pn(e, t, l);
          }
          typeof i == "function" && h("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", vt(e));
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
    function nx(e, t) {
      vR(e.containerInfo), We = t, rx();
      var a = mC;
      return mC = !1, a;
    }
    function rx() {
      for (; We !== null; ) {
        var e = We, t = e.child;
        (e.subtreeFlags & Uo) !== Ze && t !== null ? (t.return = e, We = t) : ax();
      }
    }
    function ax() {
      for (; We !== null; ) {
        var e = We;
        Xt(e);
        try {
          ix(e);
        } catch (a) {
          pn(e, e.return, a);
        }
        dn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, We = t;
          return;
        }
        We = e.return;
      }
    }
    function ix(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Gn) !== Ze) {
        switch (Xt(e), e.tag) {
          case k:
          case Se:
          case Ve:
            break;
          case T: {
            if (t !== null) {
              var i = t.memoizedProps, l = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !sc && (s.props !== e.memoizedProps && h("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", vt(e) || "instance"), s.state !== e.memoizedState && h("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", vt(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : vo(e.type, i), l);
              {
                var p = pC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), h("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", vt(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case $: {
            {
              var g = e.stateNode;
              PR(g.containerInfo);
            }
            break;
          }
          case G:
          case ve:
          case Q:
          case Xe:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        dn();
      }
    }
    function mo(e, t, a) {
      var i = t.updateQueue, l = i !== null ? i.lastEffect : null;
      if (l !== null) {
        var s = l.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Vr) !== $a ? no(t) : (e & vr) !== $a && Ss(t), (e & Jo) !== $a && sv(!0), Gm(t, a, p), (e & Jo) !== $a && sv(!1), (e & Vr) !== $a ? Po() : (e & vr) !== $a && Vd());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Qu(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var l = i.next, s = l;
        do {
          if ((s.tag & e) === e) {
            (e & Vr) !== $a ? Pd(t) : (e & vr) !== $a && Bc(t);
            var f = s.create;
            (e & Jo) !== $a && sv(!0), s.destroy = f(), (e & Jo) !== $a && sv(!1), (e & Vr) !== $a ? Zv() : (e & vr) !== $a && eh();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var g = void 0;
                (s.tag & vr) !== Ze ? g = "useLayoutEffect" : (s.tag & Jo) !== Ze ? g = "useInsertionEffect" : g = "useEffect";
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

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : C = " You returned: " + p, h("%s must not return anything besides a function, which is used for clean-up.%s", g, C);
              }
            }
          }
          s = s.next;
        } while (s !== l);
      }
    }
    function ox(e, t) {
      if ((t.flags & Mt) !== Ze)
        switch (t.tag) {
          case Ee: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, l = i.id, s = i.onPostCommit, f = M1(), p = t.alternate === null ? "mount" : "update";
            L1() && (p = "nested-update"), typeof s == "function" && s(l, p, a, f);
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
    function lx(e, t, a, i) {
      if ((a.flags & zo) !== Ze)
        switch (a.tag) {
          case k:
          case Se:
          case Ve: {
            if (!Ir)
              if (a.mode & Vt)
                try {
                  nl(), Qu(vr | pr, a);
                } finally {
                  tl(a);
                }
              else
                Qu(vr | pr, a);
            break;
          }
          case T: {
            var l = a.stateNode;
            if (a.flags & Mt && !Ir)
              if (t === null)
                if (a.type === a.elementType && !sc && (l.props !== a.memoizedProps && h("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", vt(a) || "instance"), l.state !== a.memoizedState && h("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", vt(a) || "instance")), a.mode & Vt)
                  try {
                    nl(), l.componentDidMount();
                  } finally {
                    tl(a);
                  }
                else
                  l.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : vo(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !sc && (l.props !== a.memoizedProps && h("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", vt(a) || "instance"), l.state !== a.memoizedState && h("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", vt(a) || "instance")), a.mode & Vt)
                  try {
                    nl(), l.componentDidUpdate(s, f, l.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    tl(a);
                  }
                else
                  l.componentDidUpdate(s, f, l.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !sc && (l.props !== a.memoizedProps && h("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", vt(a) || "instance"), l.state !== a.memoizedState && h("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", vt(a) || "instance")), n1(a, p, l));
            break;
          }
          case $: {
            var g = a.updateQueue;
            if (g !== null) {
              var C = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case G:
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
          case G: {
            var E = a.stateNode;
            if (t === null && a.flags & Mt) {
              var A = a.type, M = a.memoizedProps;
              TR(E, A, M);
            }
            break;
          }
          case ve:
            break;
          case Q:
            break;
          case Ee: {
            {
              var I = a.memoizedProps, Y = I.onCommit, J = I.onRender, De = a.stateNode.effectDuration, rt = M1(), qe = t === null ? "mount" : "update";
              L1() && (qe = "nested-update"), typeof J == "function" && J(a.memoizedProps.id, qe, a.actualDuration, a.treeBaseDuration, a.actualStartTime, rt);
              {
                typeof Y == "function" && Y(a.memoizedProps.id, qe, De, rt), aw(a);
                var Ut = a.return;
                e: for (; Ut !== null; ) {
                  switch (Ut.tag) {
                    case $:
                      var Ot = Ut.stateNode;
                      Ot.effectDuration += De;
                      break e;
                    case Ee:
                      var F = Ut.stateNode;
                      F.effectDuration += De;
                      break e;
                  }
                  Ut = Ut.return;
                }
              }
            }
            break;
          }
          case he: {
            hx(e, a);
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
      Ir || a.flags & En && yC(a);
    }
    function ux(e) {
      switch (e.tag) {
        case k:
        case Se:
        case Ve: {
          if (e.mode & Vt)
            try {
              nl(), vC(e, e.return);
            } finally {
              tl(e);
            }
          else
            vC(e, e.return);
          break;
        }
        case T: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && tx(e, e.return, t), hC(e, e.return);
          break;
        }
        case G: {
          hC(e, e.return);
          break;
        }
      }
    }
    function sx(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === G) {
          if (a === null) {
            a = i;
            try {
              var l = i.stateNode;
              t ? UR(l) : zR(i.stateNode, i.memoizedProps);
            } catch (f) {
              pn(e, e.return, f);
            }
          }
        } else if (i.tag === ve) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? jR(s) : FR(s, i.memoizedProps);
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
        if (e.tag === G ? i = a : i = a, typeof t == "function") {
          var l;
          if (e.mode & Vt)
            try {
              nl(), l = t(i);
            } finally {
              tl(e);
            }
          else
            l = t(i);
          typeof l == "function" && h("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", vt(e));
        } else
          t.hasOwnProperty("current") || h("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", vt(e)), t.current = i;
      }
    }
    function cx(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function gC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, gC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === G) {
          var a = e.stateNode;
          a !== null && mb(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function fx(e) {
      for (var t = e.return; t !== null; ) {
        if (SC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function SC(e) {
      return e.tag === G || e.tag === $ || e.tag === Q;
    }
    function _C(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || SC(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== G && t.tag !== ve && t.tag !== lt; ) {
          if (t.flags & gn || t.child === null || t.tag === Q)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & gn))
          return t.stateNode;
      }
    }
    function dx(e) {
      var t = fx(e);
      switch (t.tag) {
        case G: {
          var a = t.stateNode;
          t.flags & Aa && (E_(a), t.flags &= ~Aa);
          var i = _C(e);
          nS(e, i, a);
          break;
        }
        case $:
        case Q: {
          var l = t.stateNode.containerInfo, s = _C(e);
          tS(e, s, l);
          break;
        }
        // eslint-disable-next-line-no-fallthrough
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function tS(e, t, a) {
      var i = e.tag, l = i === G || i === ve;
      if (l) {
        var s = e.stateNode;
        t ? LR(a, s, t) : DR(a, s);
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
      var i = e.tag, l = i === G || i === ve;
      if (l) {
        var s = e.stateNode;
        t ? OR(a, s, t) : kR(a, s);
      } else if (i !== Q) {
        var f = e.child;
        if (f !== null) {
          nS(f, t, a);
          for (var p = f.sibling; p !== null; )
            nS(p, t, a), p = p.sibling;
        }
      }
    }
    var Br = null, yo = !1;
    function px(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case G: {
              Br = i.stateNode, yo = !1;
              break e;
            }
            case $: {
              Br = i.stateNode.containerInfo, yo = !0;
              break e;
            }
            case Q: {
              Br = i.stateNode.containerInfo, yo = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Br === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        CC(e, t, a), Br = null, yo = !1;
      }
      cx(a);
    }
    function Gu(e, t, a) {
      for (var i = a.child; i !== null; )
        CC(e, t, i), i = i.sibling;
    }
    function CC(e, t, a) {
      switch (jd(a), a.tag) {
        case G:
          Ir || Zf(a, t);
        // eslint-disable-next-line-no-fallthrough
        case ve: {
          {
            var i = Br, l = yo;
            Br = null, Gu(e, t, a), Br = i, yo = l, Br !== null && (yo ? NR(Br, a.stateNode) : MR(Br, a.stateNode));
          }
          return;
        }
        case lt: {
          Br !== null && (yo ? AR(Br, a.stateNode) : pg(Br, a.stateNode));
          return;
        }
        case Q: {
          {
            var s = Br, f = yo;
            Br = a.stateNode.containerInfo, yo = !0, Gu(e, t, a), Br = s, yo = f;
          }
          return;
        }
        case k:
        case Se:
        case Qe:
        case Ve: {
          if (!Ir) {
            var p = a.updateQueue;
            if (p !== null) {
              var g = p.lastEffect;
              if (g !== null) {
                var C = g.next, E = C;
                do {
                  var A = E, M = A.destroy, I = A.tag;
                  M !== void 0 && ((I & Jo) !== $a ? Gm(a, t, M) : (I & vr) !== $a && (Ss(a), a.mode & Vt ? (nl(), Gm(a, t, M), tl(a)) : Gm(a, t, M), Vd())), E = E.next;
                } while (E !== C);
              }
            }
          }
          Gu(e, t, a);
          return;
        }
        case T: {
          if (!Ir) {
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
            var J = Ir;
            Ir = J || a.memoizedState !== null, Gu(e, t, a), Ir = J;
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
    function vx(e) {
      e.memoizedState;
    }
    function hx(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var l = i.memoizedState;
          if (l !== null) {
            var s = l.dehydrated;
            s !== null && ZR(s);
          }
        }
      }
    }
    function EC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new JT()), t.forEach(function(i) {
          var l = fw.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), na)
              if (Xf !== null && Jf !== null)
                uv(Jf, Xf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(l, l);
          }
        });
      }
    }
    function mx(e, t, a) {
      Xf = a, Jf = e, Xt(t), RC(t, e), Xt(t), Xf = null, Jf = null;
    }
    function go(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l];
          try {
            px(e, t, s);
          } catch (g) {
            pn(s, t, g);
          }
        }
      var f = xo();
      if (t.subtreeFlags & jo)
        for (var p = t.child; p !== null; )
          Xt(p), RC(p, e), p = p.sibling;
      Xt(f);
    }
    function RC(e, t, a) {
      var i = e.alternate, l = e.flags;
      switch (e.tag) {
        case k:
        case Se:
        case Qe:
        case Ve: {
          if (go(t, e), rl(e), l & Mt) {
            try {
              mo(Jo | pr, e, e.return), Qu(Jo | pr, e);
            } catch (ft) {
              pn(e, e.return, ft);
            }
            if (e.mode & Vt) {
              try {
                nl(), mo(vr | pr, e, e.return);
              } catch (ft) {
                pn(e, e.return, ft);
              }
              tl(e);
            } else
              try {
                mo(vr | pr, e, e.return);
              } catch (ft) {
                pn(e, e.return, ft);
              }
          }
          return;
        }
        case T: {
          go(t, e), rl(e), l & En && i !== null && Zf(i, i.return);
          return;
        }
        case G: {
          go(t, e), rl(e), l & En && i !== null && Zf(i, i.return);
          {
            if (e.flags & Aa) {
              var s = e.stateNode;
              try {
                E_(s);
              } catch (ft) {
                pn(e, e.return, ft);
              }
            }
            if (l & Mt) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, g = i !== null ? i.memoizedProps : p, C = e.type, E = e.updateQueue;
                if (e.updateQueue = null, E !== null)
                  try {
                    xR(f, E, C, g, p, e);
                  } catch (ft) {
                    pn(e, e.return, ft);
                  }
              }
            }
          }
          return;
        }
        case ve: {
          if (go(t, e), rl(e), l & Mt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var A = e.stateNode, M = e.memoizedProps, I = i !== null ? i.memoizedProps : M;
            try {
              wR(A, I, M);
            } catch (ft) {
              pn(e, e.return, ft);
            }
          }
          return;
        }
        case $: {
          if (go(t, e), rl(e), l & Mt && i !== null) {
            var Y = i.memoizedState;
            if (Y.isDehydrated)
              try {
                JR(t.containerInfo);
              } catch (ft) {
                pn(e, e.return, ft);
              }
          }
          return;
        }
        case Q: {
          go(t, e), rl(e);
          return;
        }
        case he: {
          go(t, e), rl(e);
          var J = e.child;
          if (J.flags & jn) {
            var De = J.stateNode, rt = J.memoizedState, qe = rt !== null;
            if (De.isHidden = qe, qe) {
              var Ut = J.alternate !== null && J.alternate.memoizedState !== null;
              Ut || Kx();
            }
          }
          if (l & Mt) {
            try {
              vx(e);
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
            var F = Ir;
            Ir = F || Ot, go(t, e), Ir = F;
          } else
            go(t, e);
          if (rl(e), l & jn) {
            var Z = e.stateNode, P = e.memoizedState, de = P !== null, ze = e;
            if (Z.isHidden = de, de && !Ot && (ze.mode & wt) !== et) {
              We = ze;
              for (var Me = ze.child; Me !== null; )
                We = Me, gx(Me), Me = Me.sibling;
            }
            sx(ze, de);
          }
          return;
        }
        case ut: {
          go(t, e), rl(e), l & Mt && EC(e);
          return;
        }
        case K:
          return;
        default: {
          go(t, e), rl(e);
          return;
        }
      }
    }
    function rl(e) {
      var t = e.flags;
      if (t & gn) {
        try {
          dx(e);
        } catch (a) {
          pn(e, e.return, a);
        }
        e.flags &= ~gn;
      }
      t & Zr && (e.flags &= ~Zr);
    }
    function yx(e, t, a) {
      Xf = a, Jf = t, We = e, bC(e, t, a), Xf = null, Jf = null;
    }
    function bC(e, t, a) {
      for (var i = (e.mode & wt) !== et; We !== null; ) {
        var l = We, s = l.child;
        if (l.tag === ee && i) {
          var f = l.memoizedState !== null, p = f || Qm;
          if (p) {
            rS(e, t, a);
            continue;
          } else {
            var g = l.alternate, C = g !== null && g.memoizedState !== null, E = C || Ir, A = Qm, M = Ir;
            Qm = p, Ir = E, Ir && !M && (We = l, Sx(l));
            for (var I = s; I !== null; )
              We = I, bC(
                I,
                // New root; bubble back up to here and stop.
                t,
                a
              ), I = I.sibling;
            We = l, Qm = A, Ir = M, rS(e, t, a);
            continue;
          }
        }
        (l.subtreeFlags & zo) !== Ze && s !== null ? (s.return = l, We = s) : rS(e, t, a);
      }
    }
    function rS(e, t, a) {
      for (; We !== null; ) {
        var i = We;
        if ((i.flags & zo) !== Ze) {
          var l = i.alternate;
          Xt(i);
          try {
            lx(t, l, i, a);
          } catch (f) {
            pn(i, i.return, f);
          }
          dn();
        }
        if (i === e) {
          We = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, We = s;
          return;
        }
        We = i.return;
      }
    }
    function gx(e) {
      for (; We !== null; ) {
        var t = We, a = t.child;
        switch (t.tag) {
          case k:
          case Se:
          case Qe:
          case Ve: {
            if (t.mode & Vt)
              try {
                nl(), mo(vr, t, t.return);
              } finally {
                tl(t);
              }
            else
              mo(vr, t, t.return);
            break;
          }
          case T: {
            Zf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && eS(t, t.return, i);
            break;
          }
          case G: {
            Zf(t, t.return);
            break;
          }
          case ee: {
            var l = t.memoizedState !== null;
            if (l) {
              TC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, We = a) : TC(e);
      }
    }
    function TC(e) {
      for (; We !== null; ) {
        var t = We;
        if (t === e) {
          We = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, We = a;
          return;
        }
        We = t.return;
      }
    }
    function Sx(e) {
      for (; We !== null; ) {
        var t = We, a = t.child;
        if (t.tag === ee) {
          var i = t.memoizedState !== null;
          if (i) {
            xC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, We = a) : xC(e);
      }
    }
    function xC(e) {
      for (; We !== null; ) {
        var t = We;
        Xt(t);
        try {
          ux(t);
        } catch (i) {
          pn(t, t.return, i);
        }
        if (dn(), t === e) {
          We = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, We = a;
          return;
        }
        We = t.return;
      }
    }
    function _x(e, t, a, i) {
      We = t, Cx(t, e, a, i);
    }
    function Cx(e, t, a, i) {
      for (; We !== null; ) {
        var l = We, s = l.child;
        (l.subtreeFlags & eo) !== Ze && s !== null ? (s.return = l, We = s) : Ex(e, t, a, i);
      }
    }
    function Ex(e, t, a, i) {
      for (; We !== null; ) {
        var l = We;
        if ((l.flags & Jr) !== Ze) {
          Xt(l);
          try {
            Rx(t, l, a, i);
          } catch (f) {
            pn(l, l.return, f);
          }
          dn();
        }
        if (l === e) {
          We = null;
          return;
        }
        var s = l.sibling;
        if (s !== null) {
          s.return = l.return, We = s;
          return;
        }
        We = l.return;
      }
    }
    function Rx(e, t, a, i) {
      switch (t.tag) {
        case k:
        case Se:
        case Ve: {
          if (t.mode & Vt) {
            E0();
            try {
              Qu(Vr | pr, t);
            } finally {
              C0(t);
            }
          } else
            Qu(Vr | pr, t);
          break;
        }
      }
    }
    function bx(e) {
      We = e, Tx();
    }
    function Tx() {
      for (; We !== null; ) {
        var e = We, t = e.child;
        if ((We.flags & Na) !== Ze) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var l = a[i];
              We = l, kx(l, e);
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
            We = e;
          }
        }
        (e.subtreeFlags & eo) !== Ze && t !== null ? (t.return = e, We = t) : xx();
      }
    }
    function xx() {
      for (; We !== null; ) {
        var e = We;
        (e.flags & Jr) !== Ze && (Xt(e), wx(e), dn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, We = t;
          return;
        }
        We = e.return;
      }
    }
    function wx(e) {
      switch (e.tag) {
        case k:
        case Se:
        case Ve: {
          e.mode & Vt ? (E0(), mo(Vr | pr, e, e.return), C0(e)) : mo(Vr | pr, e, e.return);
          break;
        }
      }
    }
    function kx(e, t) {
      for (; We !== null; ) {
        var a = We;
        Xt(a), Ox(a, t), dn();
        var i = a.child;
        i !== null ? (i.return = a, We = i) : Dx(e);
      }
    }
    function Dx(e) {
      for (; We !== null; ) {
        var t = We, a = t.sibling, i = t.return;
        if (gC(t), t === e) {
          We = null;
          return;
        }
        if (a !== null) {
          a.return = i, We = a;
          return;
        }
        We = i;
      }
    }
    function Ox(e, t) {
      switch (e.tag) {
        case k:
        case Se:
        case Ve: {
          e.mode & Vt ? (E0(), mo(Vr, e, t), C0(e)) : mo(Vr, e, t);
          break;
        }
      }
    }
    function Lx(e) {
      switch (e.tag) {
        case k:
        case Se:
        case Ve: {
          try {
            Qu(vr | pr, e);
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
    function Mx(e) {
      switch (e.tag) {
        case k:
        case Se:
        case Ve: {
          try {
            Qu(Vr | pr, e);
          } catch (t) {
            pn(e, e.return, t);
          }
          break;
        }
      }
    }
    function Nx(e) {
      switch (e.tag) {
        case k:
        case Se:
        case Ve: {
          try {
            mo(vr | pr, e, e.return);
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
    function Ax(e) {
      switch (e.tag) {
        case k:
        case Se:
        case Ve:
          try {
            mo(Vr | pr, e, e.return);
          } catch (t) {
            pn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Xp = Symbol.for;
      Xp("selector.component"), Xp("selector.has_pseudo_class"), Xp("selector.role"), Xp("selector.test_id"), Xp("selector.text");
    }
    var Ux = [];
    function jx() {
      Ux.forEach(function(e) {
        return e();
      });
    }
    var zx = m.ReactCurrentActQueue;
    function Fx(e) {
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
        return !e && zx.current !== null && h("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Px = Math.ceil, aS = m.ReactCurrentDispatcher, iS = m.ReactCurrentOwner, $r = m.ReactCurrentBatchConfig, So = m.ReactCurrentActQueue, yr = (
      /*             */
      0
    ), kC = (
      /*               */
      1
    ), Wr = (
      /*                */
      2
    ), Hi = (
      /*                */
      4
    ), ql = 0, Jp = 1, cc = 2, qm = 3, Zp = 4, DC = 5, oS = 6, At = yr, ba = null, Mn = null, gr = ie, al = ie, lS = Fu(ie), Sr = ql, ev = null, Km = ie, tv = ie, Xm = ie, nv = null, Wa = null, uS = 0, OC = 500, LC = 1 / 0, Vx = 500, Kl = null;
    function rv() {
      LC = qn() + Vx;
    }
    function MC() {
      return LC;
    }
    var Jm = !1, sS = null, ed = null, fc = !1, qu = null, av = ie, cS = [], fS = null, Hx = 50, iv = 0, dS = null, pS = !1, Zm = !1, Ix = 50, td = 0, ey = null, ov = rn, ty = ie, NC = !1;
    function ny() {
      return ba;
    }
    function Ta() {
      return (At & (Wr | Hi)) !== yr ? qn() : (ov !== rn || (ov = qn()), ov);
    }
    function Ku(e) {
      var t = e.mode;
      if ((t & wt) === et)
        return ct;
      if ((At & Wr) !== yr && gr !== ie)
        return Ms(gr);
      var a = zb() !== jb;
      if (a) {
        if ($r.transition !== null) {
          var i = $r.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return ty === Ft && (ty = Gd()), ty;
      }
      var l = Va();
      if (l !== Ft)
        return l;
      var s = CR();
      return s;
    }
    function Bx(e) {
      var t = e.mode;
      return (t & wt) === et ? ct : oh();
    }
    function _r(e, t, a, i) {
      pw(), NC && h("useInsertionEffect must not schedule updates."), pS && (Zm = !0), wu(e, a, i), (At & Wr) !== ie && e === ba ? mw(t) : (na && Us(e, t, a), yw(t), e === ba && ((At & Wr) === yr && (tv = Et(tv, a)), Sr === Zp && Xu(e, gr)), Ya(e, i), a === ct && At === yr && (t.mode & wt) === et && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !So.isBatchingLegacy && (rv(), N_()));
    }
    function $x(e, t, a) {
      var i = e.current;
      i.lanes = t, wu(e, t, a), Ya(e, a);
    }
    function Wx(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (At & Wr) !== yr
      );
    }
    function Ya(e, t) {
      var a = e.callbackNode;
      cf(e, t);
      var i = sf(e, e === ba ? gr : ie);
      if (i === ie) {
        a !== null && qC(a), e.callbackNode = null, e.callbackPriority = Ft;
        return;
      }
      var l = Io(i), s = e.callbackPriority;
      if (s === l && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(So.current !== null && a !== _S)) {
        a == null && s !== ct && h("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && qC(a);
      var f;
      if (l === ct)
        e.tag === Pu ? (So.isBatchingLegacy !== null && (So.didScheduleLegacyUpdate = !0), Sb(jC.bind(null, e))) : M_(jC.bind(null, e)), So.current !== null ? So.current.push(Vu) : RR(function() {
          (At & (Wr | Hi)) === yr && Vu();
        }), f = null;
      else {
        var p;
        switch (ph(i)) {
          case Ar:
            p = gs;
            break;
          case Li:
            p = Fo;
            break;
          case Fa:
            p = to;
            break;
          case Pa:
            p = Rl;
            break;
          default:
            p = to;
            break;
        }
        f = CS(p, AC.bind(null, e));
      }
      e.callbackPriority = l, e.callbackNode = f;
    }
    function AC(e, t) {
      if (sT(), ov = rn, ty = ie, (At & (Wr | Hi)) !== yr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Jl();
      if (i && e.callbackNode !== a)
        return null;
      var l = sf(e, e === ba ? gr : ie);
      if (l === ie)
        return null;
      var s = !df(e, l) && !ih(e, l) && !t, f = s ? tw(e, l) : ay(e, l);
      if (f !== ql) {
        if (f === cc) {
          var p = ff(e);
          p !== ie && (l = p, f = vS(e, p));
        }
        if (f === Jp) {
          var g = ev;
          throw dc(e, ie), Xu(e, l), Ya(e, qn()), g;
        }
        if (f === oS)
          Xu(e, l);
        else {
          var C = !df(e, l), E = e.current.alternate;
          if (C && !Qx(E)) {
            if (f = ay(e, l), f === cc) {
              var A = ff(e);
              A !== ie && (l = A, f = vS(e, A));
            }
            if (f === Jp) {
              var M = ev;
              throw dc(e, ie), Xu(e, l), Ya(e, qn()), M;
            }
          }
          e.finishedWork = E, e.finishedLanes = l, Yx(e, f, l);
        }
      }
      return Ya(e, qn()), e.callbackNode === a ? AC.bind(null, e) : null;
    }
    function vS(e, t) {
      var a = nv;
      if (hf(e)) {
        var i = dc(e, t);
        i.flags |= br, db(e.containerInfo);
      }
      var l = ay(e, t);
      if (l !== cc) {
        var s = Wa;
        Wa = a, s !== null && UC(s);
      }
      return l;
    }
    function UC(e) {
      Wa === null ? Wa = e : Wa.push.apply(Wa, e);
    }
    function Yx(e, t, a) {
      switch (t) {
        case ql:
        case Jp:
          throw new Error("Root did not complete. This is a bug in React.");
        // Flow knows about invariant, so it complains if I add a break
        // statement, but eslint doesn't know about invariant, so it complains
        // if I do. eslint-disable-next-line no-fallthrough
        case cc: {
          pc(e, Wa, Kl);
          break;
        }
        case qm: {
          if (Xu(e, a), Al(a) && // do not delay if we're inside an act() scope
          !KC()) {
            var i = uS + OC - qn();
            if (i > 10) {
              var l = sf(e, ie);
              if (l !== ie)
                break;
              var s = e.suspendedLanes;
              if (!Ul(s, a)) {
                Ta(), pf(e, s);
                break;
              }
              e.timeoutHandle = fg(pc.bind(null, e, Wa, Kl), i);
              break;
            }
          }
          pc(e, Wa, Kl);
          break;
        }
        case Zp: {
          if (Xu(e, a), Yd(a))
            break;
          if (!KC()) {
            var f = ui(e, a), p = f, g = qn() - p, C = dw(g) - g;
            if (C > 10) {
              e.timeoutHandle = fg(pc.bind(null, e, Wa, Kl), C);
              break;
            }
          }
          pc(e, Wa, Kl);
          break;
        }
        case DC: {
          pc(e, Wa, Kl);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Qx(e) {
      for (var t = e; ; ) {
        if (t.flags & Eu) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var l = 0; l < i.length; l++) {
                var s = i[l], f = s.getSnapshot, p = s.value;
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
      t = Ns(t, Xm), t = Ns(t, tv), sh(e, t);
    }
    function jC(e) {
      if (cT(), (At & (Wr | Hi)) !== yr)
        throw new Error("Should not already be working.");
      Jl();
      var t = sf(e, ie);
      if (!aa(t, ct))
        return Ya(e, qn()), null;
      var a = ay(e, t);
      if (e.tag !== Pu && a === cc) {
        var i = ff(e);
        i !== ie && (t = i, a = vS(e, i));
      }
      if (a === Jp) {
        var l = ev;
        throw dc(e, ie), Xu(e, t), Ya(e, qn()), l;
      }
      if (a === oS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, pc(e, Wa, Kl), Ya(e, qn()), null;
    }
    function Gx(e, t) {
      t !== ie && (vf(e, Et(t, ct)), Ya(e, qn()), (At & (Wr | Hi)) === yr && (rv(), Vu()));
    }
    function hS(e, t) {
      var a = At;
      At |= kC;
      try {
        return e(t);
      } finally {
        At = a, At === yr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !So.isBatchingLegacy && (rv(), N_());
      }
    }
    function qx(e, t, a, i, l) {
      var s = Va(), f = $r.transition;
      try {
        return $r.transition = null, Vn(Ar), e(t, a, i, l);
      } finally {
        Vn(s), $r.transition = f, At === yr && rv();
      }
    }
    function Xl(e) {
      qu !== null && qu.tag === Pu && (At & (Wr | Hi)) === yr && Jl();
      var t = At;
      At |= kC;
      var a = $r.transition, i = Va();
      try {
        return $r.transition = null, Vn(Ar), e ? e() : void 0;
      } finally {
        Vn(i), $r.transition = a, At = t, (At & (Wr | Hi)) === yr && Vu();
      }
    }
    function zC() {
      return (At & (Wr | Hi)) !== yr;
    }
    function ry(e, t) {
      sa(lS, al, e), al = Et(al, t);
    }
    function mS(e) {
      al = lS.current, ua(lS, e);
    }
    function dc(e, t) {
      e.finishedWork = null, e.finishedLanes = ie;
      var a = e.timeoutHandle;
      if (a !== dg && (e.timeoutHandle = dg, ER(a)), Mn !== null)
        for (var i = Mn.return; i !== null; ) {
          var l = i.alternate;
          dC(l, i), i = i.return;
        }
      ba = e;
      var s = vc(e.current, null);
      return Mn = s, gr = al = t, Sr = ql, ev = null, Km = ie, tv = ie, Xm = ie, nv = null, Wa = null, $b(), co.discardPendingWarnings(), s;
    }
    function FC(e, t) {
      do {
        var a = Mn;
        try {
          if (pm(), u1(), dn(), iS.current = null, a === null || a.return === null) {
            Sr = Jp, ev = t, Mn = null;
            return;
          }
          if (je && a.mode & Vt && Im(a, !0), Je)
            if (_a(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Oi(a, i, gr);
            } else
              _s(a, t, gr);
          ST(e, a.return, a, t, gr), IC(a);
        } catch (l) {
          t = l, Mn === a && a !== null ? (a = a.return, Mn = a) : a = Mn;
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
    function Kx() {
      uS = qn();
    }
    function lv(e) {
      Km = Et(e, Km);
    }
    function Xx() {
      Sr === ql && (Sr = qm);
    }
    function yS() {
      (Sr === ql || Sr === qm || Sr === cc) && (Sr = Zp), ba !== null && (Ls(Km) || Ls(tv)) && Xu(ba, gr);
    }
    function Jx(e) {
      Sr !== Zp && (Sr = cc), nv === null ? nv = [e] : nv.push(e);
    }
    function Zx() {
      return Sr === ql;
    }
    function ay(e, t) {
      var a = At;
      At |= Wr;
      var i = PC();
      if (ba !== e || gr !== t) {
        if (na) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (uv(e, gr), l.clear()), ch(e, t);
        }
        Kl = Jd(), dc(e, t);
      }
      wl(t);
      do
        try {
          ew();
          break;
        } catch (s) {
          FC(e, s);
        }
      while (!0);
      if (pm(), At = a, VC(i), Mn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return $c(), ba = null, gr = ie, Sr;
    }
    function ew() {
      for (; Mn !== null; )
        HC(Mn);
    }
    function tw(e, t) {
      var a = At;
      At |= Wr;
      var i = PC();
      if (ba !== e || gr !== t) {
        if (na) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (uv(e, gr), l.clear()), ch(e, t);
        }
        Kl = Jd(), rv(), dc(e, t);
      }
      wl(t);
      do
        try {
          nw();
          break;
        } catch (s) {
          FC(e, s);
        }
      while (!0);
      return pm(), VC(i), At = a, Mn !== null ? (th(), ql) : ($c(), ba = null, gr = ie, Sr);
    }
    function nw() {
      for (; Mn !== null && !Ld(); )
        HC(Mn);
    }
    function HC(e) {
      var t = e.alternate;
      Xt(e);
      var a;
      (e.mode & Vt) !== et ? (_0(e), a = gS(t, e, al), Im(e, !0)) : a = gS(t, e, al), dn(), e.memoizedProps = e.pendingProps, a === null ? IC(e) : Mn = a, iS.current = null;
    }
    function IC(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & ys) === Ze) {
          Xt(t);
          var l = void 0;
          if ((t.mode & Vt) === et ? l = fC(a, t, al) : (_0(t), l = fC(a, t, al), Im(t, !1)), dn(), l !== null) {
            Mn = l;
            return;
          }
        } else {
          var s = XT(a, t);
          if (s !== null) {
            s.flags &= qv, Mn = s;
            return;
          }
          if ((t.mode & Vt) !== et) {
            Im(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= ys, i.subtreeFlags = Ze, i.deletions = null;
          else {
            Sr = oS, Mn = null;
            return;
          }
        }
        var g = t.sibling;
        if (g !== null) {
          Mn = g;
          return;
        }
        t = i, Mn = t;
      } while (t !== null);
      Sr === ql && (Sr = DC);
    }
    function pc(e, t, a) {
      var i = Va(), l = $r.transition;
      try {
        $r.transition = null, Vn(Ar), rw(e, t, a, i);
      } finally {
        $r.transition = l, Vn(i);
      }
      return null;
    }
    function rw(e, t, a, i) {
      do
        Jl();
      while (qu !== null);
      if (vw(), (At & (Wr | Hi)) !== yr)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, s = e.finishedLanes;
      if (zd(s), l === null)
        return Fd(), null;
      if (s === ie && h("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = ie, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Ft;
      var f = Et(l.lanes, l.childLanes);
      Kd(e, f), e === ba && (ba = null, Mn = null, gr = ie), ((l.subtreeFlags & eo) !== Ze || (l.flags & eo) !== Ze) && (fc || (fc = !0, fS = a, CS(to, function() {
        return Jl(), null;
      })));
      var p = (l.subtreeFlags & (Uo | jo | zo | eo)) !== Ze, g = (l.flags & (Uo | jo | zo | eo)) !== Ze;
      if (p || g) {
        var C = $r.transition;
        $r.transition = null;
        var E = Va();
        Vn(Ar);
        var A = At;
        At |= Hi, iS.current = null, nx(e, l), N1(), mx(e, l, s), hR(e.containerInfo), e.current = l, Cs(s), yx(l, e, s), Es(), Md(), At = A, Vn(E), $r.transition = C;
      } else
        e.current = l, N1();
      var M = fc;
      if (fc ? (fc = !1, qu = e, av = s) : (td = 0, ey = null), f = e.pendingLanes, f === ie && (ed = null), M || YC(e.current, !1), Ad(l.stateNode, i), na && e.memoizedUpdaters.clear(), jx(), Ya(e, qn()), t !== null)
        for (var I = e.onRecoverableError, Y = 0; Y < t.length; Y++) {
          var J = t[Y], De = J.stack, rt = J.digest;
          I(J.value, {
            componentStack: De,
            digest: rt
          });
        }
      if (Jm) {
        Jm = !1;
        var qe = sS;
        throw sS = null, qe;
      }
      return aa(av, ct) && e.tag !== Pu && Jl(), f = e.pendingLanes, aa(f, ct) ? (uT(), e === dS ? iv++ : (iv = 0, dS = e)) : iv = 0, Vu(), Fd(), null;
    }
    function Jl() {
      if (qu !== null) {
        var e = ph(av), t = zs(Fa, e), a = $r.transition, i = Va();
        try {
          return $r.transition = null, Vn(t), iw();
        } finally {
          Vn(i), $r.transition = a;
        }
      }
      return !1;
    }
    function aw(e) {
      cS.push(e), fc || (fc = !0, CS(to, function() {
        return Jl(), null;
      }));
    }
    function iw() {
      if (qu === null)
        return !1;
      var e = fS;
      fS = null;
      var t = qu, a = av;
      if (qu = null, av = ie, (At & (Wr | Hi)) !== yr)
        throw new Error("Cannot flush passive effects while already rendering.");
      pS = !0, Zm = !1, xl(a);
      var i = At;
      At |= Hi, bx(t.current), _x(t, t.current, a, e);
      {
        var l = cS;
        cS = [];
        for (var s = 0; s < l.length; s++) {
          var f = l[s];
          ox(t, f);
        }
      }
      Hd(), YC(t.current, !0), At = i, Vu(), Zm ? t === ey ? td++ : (td = 0, ey = t) : td = 0, pS = !1, Zm = !1, Ud(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function BC(e) {
      return ed !== null && ed.has(e);
    }
    function ow(e) {
      ed === null ? ed = /* @__PURE__ */ new Set([e]) : ed.add(e);
    }
    function lw(e) {
      Jm || (Jm = !0, sS = e);
    }
    var uw = lw;
    function $C(e, t, a) {
      var i = uc(a, t), l = H1(e, i, ct), s = Iu(e, l, ct), f = Ta();
      s !== null && (wu(s, ct, f), Ya(s, f));
    }
    function pn(e, t, a) {
      if (ZT(a), sv(!1), e.tag === $) {
        $C(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === $) {
          $C(i, e, a);
          return;
        } else if (i.tag === T) {
          var l = i.type, s = i.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !BC(s)) {
            var f = uc(a, e), p = F0(i, f, ct), g = Iu(i, p, ct), C = Ta();
            g !== null && (wu(g, ct, C), Ya(g, C));
            return;
          }
        }
        i = i.return;
      }
      h(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function sw(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var l = Ta();
      pf(e, a), gw(e), ba === e && Ul(gr, a) && (Sr === Zp || Sr === qm && Al(gr) && qn() - uS < OC ? dc(e, ie) : Xm = Et(Xm, a)), Ya(e, l);
    }
    function WC(e, t) {
      t === Ft && (t = Bx(e));
      var a = Ta(), i = Ba(e, t);
      i !== null && (wu(i, t, a), Ya(i, a));
    }
    function cw(e) {
      var t = e.memoizedState, a = Ft;
      t !== null && (a = t.retryLane), WC(e, a);
    }
    function fw(e, t) {
      var a = Ft, i;
      switch (e.tag) {
        case he:
          i = e.stateNode;
          var l = e.memoizedState;
          l !== null && (a = l.retryLane);
          break;
        case ut:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), WC(e, a);
    }
    function dw(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Px(e / 1960) * 1960;
    }
    function pw() {
      if (iv > Hx)
        throw iv = 0, dS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      td > Ix && (td = 0, ey = null, h("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function vw() {
      co.flushLegacyContextWarning(), co.flushPendingUnsafeLifecycleWarnings();
    }
    function YC(e, t) {
      Xt(e), iy(e, Ao, Nx), t && iy(e, wi, Ax), iy(e, Ao, Lx), t && iy(e, wi, Mx), dn();
    }
    function iy(e, t, a) {
      for (var i = e, l = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== l && i.child !== null && s !== Ze ? i = i.child : ((i.flags & t) !== Ze && a(i), i.sibling !== null ? i = i.sibling : i = l = i.return);
      }
    }
    var oy = null;
    function QC(e) {
      {
        if ((At & Wr) !== yr || !(e.mode & wt))
          return;
        var t = e.tag;
        if (t !== V && t !== $ && t !== T && t !== k && t !== Se && t !== Qe && t !== Ve)
          return;
        var a = vt(e) || "ReactComponent";
        if (oy !== null) {
          if (oy.has(a))
            return;
          oy.add(a);
        } else
          oy = /* @__PURE__ */ new Set([a]);
        var i = ur;
        try {
          Xt(e), h("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Xt(e) : dn();
        }
      }
    }
    var gS;
    {
      var hw = null;
      gS = function(e, t, a) {
        var i = tE(hw, t);
        try {
          return oC(e, t, a);
        } catch (s) {
          if (wb() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (pm(), u1(), dC(e, t), tE(t, i), t.mode & Vt && _0(t), No(null, oC, null, e, t, a), Ji()) {
            var l = ms();
            typeof l == "object" && l !== null && l._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var GC = !1, SS;
    SS = /* @__PURE__ */ new Set();
    function mw(e) {
      if (_i && !iT())
        switch (e.tag) {
          case k:
          case Se:
          case Ve: {
            var t = Mn && vt(Mn) || "Unknown", a = t;
            if (!SS.has(a)) {
              SS.add(a);
              var i = vt(e) || "Unknown";
              h("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case T: {
            GC || (h("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), GC = !0);
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
        var a = So.current;
        return a !== null ? (a.push(t), _S) : Od(e, t);
      }
    }
    function qC(e) {
      if (e !== _S)
        return Xv(e);
    }
    function KC() {
      return So.current !== null;
    }
    function yw(e) {
      {
        if (e.mode & wt) {
          if (!wC())
            return;
        } else if (!Fx() || At !== yr || e.tag !== k && e.tag !== Se && e.tag !== Ve)
          return;
        if (So.current === null) {
          var t = ur;
          try {
            Xt(e), h(`An update to %s inside a test was not wrapped in act(...).

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
    function gw(e) {
      e.tag !== Pu && wC() && So.current === null && h(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function sv(e) {
      NC = e;
    }
    var Ii = null, nd = null, Sw = function(e) {
      Ii = e;
    };
    function rd(e) {
      {
        if (Ii === null)
          return e;
        var t = Ii(e);
        return t === void 0 ? e : t.current;
      }
    }
    function ES(e) {
      return rd(e);
    }
    function RS(e) {
      {
        if (Ii === null)
          return e;
        var t = Ii(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = rd(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: ae,
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
        var a = e.elementType, i = t.type, l = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case T: {
            typeof i == "function" && (l = !0);
            break;
          }
          case k: {
            (typeof i == "function" || s === mt) && (l = !0);
            break;
          }
          case Se: {
            (s === ae || s === mt) && (l = !0);
            break;
          }
          case Qe:
          case Ve: {
            (s === St || s === mt) && (l = !0);
            break;
          }
          default:
            return !1;
        }
        if (l) {
          var f = Ii(a);
          if (f !== void 0 && f === Ii(i))
            return !0;
        }
        return !1;
      }
    }
    function JC(e) {
      {
        if (Ii === null || typeof WeakSet != "function")
          return;
        nd === null && (nd = /* @__PURE__ */ new WeakSet()), nd.add(e);
      }
    }
    var _w = function(e, t) {
      {
        if (Ii === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Jl(), Xl(function() {
          bS(e.current, i, a);
        });
      }
    }, Cw = function(e, t) {
      {
        if (e.context !== fi)
          return;
        Jl(), Xl(function() {
          cv(t, e, null, null);
        });
      }
    };
    function bS(e, t, a) {
      {
        var i = e.alternate, l = e.child, s = e.sibling, f = e.tag, p = e.type, g = null;
        switch (f) {
          case k:
          case Ve:
          case T:
            g = p;
            break;
          case Se:
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
        if (nd !== null && (nd.has(e) || i !== null && nd.has(i)) && (E = !0), E && (e._debugNeedsRemount = !0), E || C) {
          var M = Ba(e, ct);
          M !== null && _r(M, e, ct, rn);
        }
        l !== null && !E && bS(l, t, a), s !== null && bS(s, t, a);
      }
    }
    var Ew = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(l) {
          return l.current;
        }));
        return TS(e.current, i, a), a;
      }
    };
    function TS(e, t, a) {
      {
        var i = e.child, l = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case k:
          case Ve:
          case T:
            p = f;
            break;
          case Se:
            p = f.render;
            break;
        }
        var g = !1;
        p !== null && t.has(p) && (g = !0), g ? Rw(e, a) : i !== null && TS(i, t, a), l !== null && TS(l, t, a);
      }
    }
    function Rw(e, t) {
      {
        var a = bw(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case G:
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
    function bw(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === G)
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
        var ZC = Object.preventExtensions({});
      } catch {
        xS = !0;
      }
    }
    function Tw(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Ze, this.subtreeFlags = Ze, this.deletions = null, this.lanes = ie, this.childLanes = ie, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !xS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var di = function(e, t, a, i) {
      return new Tw(e, t, a, i);
    };
    function wS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function xw(e) {
      return typeof e == "function" && !wS(e) && e.defaultProps === void 0;
    }
    function ww(e) {
      if (typeof e == "function")
        return wS(e) ? T : k;
      if (e != null) {
        var t = e.$$typeof;
        if (t === ae)
          return Se;
        if (t === St)
          return Qe;
      }
      return V;
    }
    function vc(e, t) {
      var a = e.alternate;
      a === null ? (a = di(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Ze, a.subtreeFlags = Ze, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & zn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case V:
        case k:
        case Ve:
          a.type = rd(e.type);
          break;
        case T:
          a.type = ES(e.type);
          break;
        case Se:
          a.type = RS(e.type);
          break;
      }
      return a;
    }
    function kw(e, t) {
      e.flags &= zn | gn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = ie, e.lanes = t, e.child = null, e.subtreeFlags = Ze, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Ze, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function Dw(e, t, a) {
      var i;
      return e === rm ? (i = wt, t === !0 && (i |= en, i |= Ht)) : i = et, na && (i |= Vt), di($, null, null, i);
    }
    function kS(e, t, a, i, l, s) {
      var f = V, p = e;
      if (typeof e == "function")
        wS(e) ? (f = T, p = ES(p)) : p = rd(p);
      else if (typeof e == "string")
        f = G;
      else
        e: switch (e) {
          case mi:
            return Ju(a.children, l, s, t);
          case Xa:
            f = pe, l |= en, (l & wt) !== et && (l |= Ht);
            break;
          case yi:
            return Ow(a, l, s, t);
          case xe:
            return Lw(a, l, s, t);
          case Pe:
            return Mw(a, l, s, t);
          case xn:
            return eE(a, l, s, t);
          case ln:
          // eslint-disable-next-line no-fallthrough
          case kt:
          // eslint-disable-next-line no-fallthrough
          case fn:
          // eslint-disable-next-line no-fallthrough
          case lr:
          // eslint-disable-next-line no-fallthrough
          case xt:
          // eslint-disable-next-line no-fallthrough
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case gi:
                  f = ge;
                  break e;
                case D:
                  f = Ne;
                  break e;
                case ae:
                  f = Se, p = RS(p);
                  break e;
                case St:
                  f = Qe;
                  break e;
                case mt:
                  f = Ie, p = null;
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
      var E = di(f, a, t, l);
      return E.elementType = e, E.type = p, E.lanes = s, E._debugOwner = i, E;
    }
    function DS(e, t, a) {
      var i = null;
      i = e._owner;
      var l = e.type, s = e.key, f = e.props, p = kS(l, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Ju(e, t, a, i) {
      var l = di(ue, e, i, t);
      return l.lanes = a, l;
    }
    function Ow(e, t, a, i) {
      typeof e.id != "string" && h('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l = di(Ee, e, i, t | Vt);
      return l.elementType = yi, l.lanes = a, l.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, l;
    }
    function Lw(e, t, a, i) {
      var l = di(he, e, i, t);
      return l.elementType = xe, l.lanes = a, l;
    }
    function Mw(e, t, a, i) {
      var l = di(ut, e, i, t);
      return l.elementType = Pe, l.lanes = a, l;
    }
    function eE(e, t, a, i) {
      var l = di(ee, e, i, t);
      l.elementType = xn, l.lanes = a;
      var s = {
        isHidden: !1
      };
      return l.stateNode = s, l;
    }
    function OS(e, t, a) {
      var i = di(ve, e, null, t);
      return i.lanes = a, i;
    }
    function Nw() {
      var e = di(G, null, null, et);
      return e.elementType = "DELETED", e;
    }
    function Aw(e) {
      var t = di(lt, null, null, et);
      return t.stateNode = e, t;
    }
    function LS(e, t, a) {
      var i = e.children !== null ? e.children : [], l = di(Q, i, e.key, t);
      return l.lanes = a, l.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, l;
    }
    function tE(e, t) {
      return e === null && (e = di(V, null, null, et)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function Uw(e, t, a, i, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = dg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Ft, this.eventTimes = As(ie), this.expirationTimes = As(rn), this.pendingLanes = ie, this.suspendedLanes = ie, this.pingedLanes = ie, this.expiredLanes = ie, this.mutableReadLanes = ie, this.finishedLanes = ie, this.entangledLanes = ie, this.entanglements = As(ie), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < kl; f++)
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
    function nE(e, t, a, i, l, s, f, p, g, C) {
      var E = new Uw(e, t, a, p, g), A = Dw(t, s);
      E.current = A, A.stateNode = E;
      {
        var M = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        A.memoizedState = M;
      }
      return $g(A), E;
    }
    var MS = "18.3.1";
    function jw(e, t, a) {
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
    var NS, AS;
    NS = !1, AS = {};
    function rE(e) {
      if (!e)
        return fi;
      var t = Cu(e), a = gb(t);
      if (t.tag === T) {
        var i = t.type;
        if (Xo(i))
          return O_(t, i, a);
      }
      return a;
    }
    function zw(e, t) {
      {
        var a = Cu(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var l = ea(a);
        if (l === null)
          return null;
        if (l.mode & en) {
          var s = vt(a) || "Component";
          if (!AS[s]) {
            AS[s] = !0;
            var f = ur;
            try {
              Xt(l), a.mode & en ? h("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : h("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Xt(f) : dn();
            }
          }
        }
        return l.stateNode;
      }
    }
    function aE(e, t, a, i, l, s, f, p) {
      var g = !1, C = null;
      return nE(e, t, g, C, a, i, l, s, f);
    }
    function iE(e, t, a, i, l, s, f, p, g, C) {
      var E = !0, A = nE(a, i, E, e, l, s, f, p, g);
      A.context = rE(null);
      var M = A.current, I = Ta(), Y = Ku(M), J = Ql(I, Y);
      return J.callback = t ?? null, Iu(M, J, Y), $x(A, Y, I), A;
    }
    function cv(e, t, a, i) {
      Nd(t, e);
      var l = t.current, s = Ta(), f = Ku(l);
      _n(f);
      var p = rE(a);
      t.context === null ? t.context = p : t.pendingContext = p, _i && ur !== null && !NS && (NS = !0, h(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, vt(ur) || "Unknown"));
      var g = Ql(s, f);
      g.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && h("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), g.callback = i);
      var C = Iu(l, g, f);
      return C !== null && (_r(C, l, f, s), gm(C, l, f)), f;
    }
    function ly(e) {
      var t = e.current;
      return t.child ? t.child.tag === G ? t.child.stateNode : t.child.stateNode : null;
    }
    function Fw(e) {
      switch (e.tag) {
        case $: {
          var t = e.stateNode;
          if (hf(t)) {
            var a = rh(t);
            Gx(t, a);
          }
          break;
        }
        case he: {
          Xl(function() {
            var l = Ba(e, ct);
            if (l !== null) {
              var s = Ta();
              _r(l, e, ct, s);
            }
          });
          var i = ct;
          US(e, i);
          break;
        }
      }
    }
    function oE(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = uh(a.retryLane, t));
    }
    function US(e, t) {
      oE(e, t);
      var a = e.alternate;
      a && oE(a, t);
    }
    function Pw(e) {
      if (e.tag === he) {
        var t = ks, a = Ba(e, t);
        if (a !== null) {
          var i = Ta();
          _r(a, e, t, i);
        }
        US(e, t);
      }
    }
    function Vw(e) {
      if (e.tag === he) {
        var t = Ku(e), a = Ba(e, t);
        if (a !== null) {
          var i = Ta();
          _r(a, e, t, i);
        }
        US(e, t);
      }
    }
    function lE(e) {
      var t = vn(e);
      return t === null ? null : t.stateNode;
    }
    var uE = function(e) {
      return null;
    };
    function Hw(e) {
      return uE(e);
    }
    var sE = function(e) {
      return !1;
    };
    function Iw(e) {
      return sE(e);
    }
    var cE = null, fE = null, dE = null, pE = null, vE = null, hE = null, mE = null, yE = null, gE = null;
    {
      var SE = function(e, t, a) {
        var i = t[a], l = Tt(e) ? e.slice() : Rt({}, e);
        return a + 1 === t.length ? (Tt(l) ? l.splice(i, 1) : delete l[i], l) : (l[i] = SE(e[i], t, a + 1), l);
      }, _E = function(e, t) {
        return SE(e, t, 0);
      }, CE = function(e, t, a, i) {
        var l = t[i], s = Tt(e) ? e.slice() : Rt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[l], Tt(s) ? s.splice(l, 1) : delete s[l];
        } else
          s[l] = CE(
            // $FlowFixMe number or string is fine here
            e[l],
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
        var l = t[a], s = Tt(e) ? e.slice() : Rt({}, e);
        return s[l] = RE(e[l], t, a + 1, i), s;
      }, bE = function(e, t, a) {
        return RE(e, t, 0, a);
      }, jS = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      cE = function(e, t, a, i) {
        var l = jS(e, t);
        if (l !== null) {
          var s = bE(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = Rt({}, e.memoizedProps);
          var f = Ba(e, ct);
          f !== null && _r(f, e, ct, rn);
        }
      }, fE = function(e, t, a) {
        var i = jS(e, t);
        if (i !== null) {
          var l = _E(i.memoizedState, a);
          i.memoizedState = l, i.baseState = l, e.memoizedProps = Rt({}, e.memoizedProps);
          var s = Ba(e, ct);
          s !== null && _r(s, e, ct, rn);
        }
      }, dE = function(e, t, a, i) {
        var l = jS(e, t);
        if (l !== null) {
          var s = EE(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = Rt({}, e.memoizedProps);
          var f = Ba(e, ct);
          f !== null && _r(f, e, ct, rn);
        }
      }, pE = function(e, t, a) {
        e.pendingProps = bE(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, ct);
        i !== null && _r(i, e, ct, rn);
      }, vE = function(e, t) {
        e.pendingProps = _E(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ba(e, ct);
        a !== null && _r(a, e, ct, rn);
      }, hE = function(e, t, a) {
        e.pendingProps = EE(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, ct);
        i !== null && _r(i, e, ct, rn);
      }, mE = function(e) {
        var t = Ba(e, ct);
        t !== null && _r(t, e, ct, rn);
      }, yE = function(e) {
        uE = e;
      }, gE = function(e) {
        sE = e;
      };
    }
    function Bw(e) {
      var t = ea(e);
      return t === null ? null : t.stateNode;
    }
    function $w(e) {
      return null;
    }
    function Ww() {
      return ur;
    }
    function Yw(e) {
      var t = e.findFiberByHostInstance, a = m.ReactCurrentDispatcher;
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
        findHostInstanceByFiber: Bw,
        findFiberByHostInstance: t || $w,
        // React Refresh
        findHostInstancesForRefresh: Ew,
        scheduleRefresh: _w,
        scheduleRoot: Cw,
        setRefreshHandler: Sw,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: Ww,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: MS
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
        typeof arguments[1] == "function" ? h("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : sy(arguments[1]) ? h("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && h("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Un) {
          var i = lE(t.current);
          i && i.parentNode !== a && h("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      cv(e, t, null, null);
    }, uy.prototype.unmount = zS.prototype.unmount = function() {
      typeof arguments[0] == "function" && h("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        zC() && h("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Xl(function() {
          cv(null, e, null, null);
        }), T_(t);
      }
    };
    function Qw(e, t) {
      if (!sy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      xE(e);
      var a = !1, i = !1, l = "", s = TE;
      t != null && (t.hydrate ? b("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Or && h(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = aE(e, rm, null, a, i, l, s);
      Kh(f.current, e);
      var p = e.nodeType === Un ? e.parentNode : e;
      return mp(p), new zS(f);
    }
    function uy(e) {
      this._internalRoot = e;
    }
    function Gw(e) {
      e && gh(e);
    }
    uy.prototype.unstable_scheduleHydration = Gw;
    function qw(e, t, a) {
      if (!sy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      xE(e), t === void 0 && h("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, l = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", g = TE;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (g = a.onRecoverableError));
      var C = iE(t, null, e, rm, i, s, f, p, g);
      if (Kh(C.current, e), mp(e), l)
        for (var E = 0; E < l.length; E++) {
          var A = l[E];
          Zb(C, A);
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
      e.nodeType === Xr && e.tagName && e.tagName.toUpperCase() === "BODY" && h("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), wp(e) && (e._reactRootContainer ? h("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : h("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var Kw = m.ReactCurrentOwner, wE;
    wE = function(e) {
      if (e._reactRootContainer && e.nodeType !== Un) {
        var t = lE(e._reactRootContainer.current);
        t && t.parentNode !== e && h("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = FS(e), l = !!(i && zu(i));
      l && !a && h("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Xr && e.tagName && e.tagName.toUpperCase() === "BODY" && h("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function FS(e) {
      return e ? e.nodeType === Xi ? e.documentElement : e.firstChild : null;
    }
    function kE() {
    }
    function Xw(e, t, a, i, l) {
      if (l) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var M = ly(f);
            s.call(M);
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
        return mp(p), Xl(), f;
      } else {
        for (var g; g = e.lastChild; )
          e.removeChild(g);
        if (typeof i == "function") {
          var C = i;
          i = function() {
            var M = ly(E);
            C.call(M);
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
        return mp(A), Xl(function() {
          cv(t, E, a, i);
        }), E;
      }
    }
    function Jw(e, t) {
      e !== null && typeof e != "function" && h("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function cy(e, t, a, i, l) {
      wE(a), Jw(l === void 0 ? null : l, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = Xw(a, t, e, l, i);
      else {
        if (f = s, typeof l == "function") {
          var p = l;
          l = function() {
            var g = ly(f);
            p.call(g);
          };
        }
        cv(t, f, e, l);
      }
      return ly(f);
    }
    var DE = !1;
    function Zw(e) {
      {
        DE || (DE = !0, h("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = Kw.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || h("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", jt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Xr ? e : zw(e, "findDOMNode");
    }
    function ek(e, t, a) {
      if (h("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !fv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = wp(t) && t._reactRootContainer === void 0;
        i && h("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return cy(null, e, t, !0, a);
    }
    function tk(e, t, a) {
      if (h("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !fv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = wp(t) && t._reactRootContainer === void 0;
        i && h("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return cy(null, e, t, !1, a);
    }
    function nk(e, t, a, i) {
      if (h("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !fv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Uy(e))
        throw new Error("parentComponent must be a valid React Component");
      return cy(e, t, a, !1, i);
    }
    var OE = !1;
    function rk(e) {
      if (OE || (OE = !0, h("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !fv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = wp(e) && e._reactRootContainer === void 0;
        t && h("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = FS(e), i = a && !zu(a);
          i && h("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Xl(function() {
          cy(null, null, e, !1, function() {
            e._reactRootContainer = null, T_(e);
          });
        }), !0;
      } else {
        {
          var l = FS(e), s = !!(l && zu(l)), f = e.nodeType === Xr && fv(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && h("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    xr(Fw), ku(Pw), vh(Vw), Ps(Va), Zd(fh), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && h("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Lc(iR), Ay(hS, qx, Xl);
    function ak(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!sy(t))
        throw new Error("Target container is not a DOM element.");
      return jw(e, t, null, a);
    }
    function ik(e, t, a, i) {
      return nk(e, t, a, i);
    }
    var PS = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [zu, Af, Xh, yu, Mc, hS]
    };
    function ok(e, t) {
      return PS.usingClientEntryPoint || h('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Qw(e, t);
    }
    function lk(e, t, a) {
      return PS.usingClientEntryPoint || h('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), qw(e, t, a);
    }
    function uk(e) {
      return zC() && h("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Xl(e);
    }
    var sk = Yw({
      findFiberByHostInstance: Zs,
      bundleType: 1,
      version: MS,
      rendererPackageName: "react-dom"
    });
    if (!sk && Nn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var LE = window.location.protocol;
      /^(https?|file):$/.test(LE) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (LE === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ga.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = PS, Ga.createPortal = ak, Ga.createRoot = ok, Ga.findDOMNode = Zw, Ga.flushSync = uk, Ga.hydrate = ek, Ga.hydrateRoot = lk, Ga.render = tk, Ga.unmountComponentAtNode = rk, Ga.unstable_batchedUpdates = hS, Ga.unstable_renderSubtreeIntoContainer = ik, Ga.version = MS, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })()), Ga;
}
var XE;
function fO() {
  if (XE) return vy.exports;
  XE = 1;
  function v() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v);
      } catch (y) {
        console.error(y);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (v(), vy.exports = sO()) : vy.exports = cO(), vy.exports;
}
var KS = fO();
const hv = /* @__PURE__ */ d2(KS);
function $S(v, y) {
  (y == null || y > v.length) && (y = v.length);
  for (var m = 0, R = Array(y); m < y; m++) R[m] = v[m];
  return R;
}
function dO(v) {
  if (Array.isArray(v)) return v;
}
function pO(v) {
  if (Array.isArray(v)) return $S(v);
}
function vO(v) {
  if (v === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return v;
}
function JE(v, y, m, R, L, b, h) {
  try {
    var j = v[b](h), k = j.value;
  } catch (T) {
    return void m(T);
  }
  j.done ? y(k) : Promise.resolve(k).then(R, L);
}
function hO(v) {
  return function() {
    var y = this, m = arguments;
    return new Promise(function(R, L) {
      var b = v.apply(y, m);
      function h(k) {
        JE(b, R, L, h, j, "next", k);
      }
      function j(k) {
        JE(b, R, L, h, j, "throw", k);
      }
      h(void 0);
    });
  };
}
function gy(v, y, m) {
  return y = WS(y), CO(v, v2() ? Reflect.construct(y, m || [], WS(v).constructor) : y.apply(v, m));
}
function gv(v, y) {
  if (!(v instanceof y)) throw new TypeError("Cannot call a class as a function");
}
function ZE(v, y) {
  for (var m = 0; m < y.length; m++) {
    var R = y[m];
    R.enumerable = R.enumerable || !1, R.configurable = !0, "value" in R && (R.writable = !0), Object.defineProperty(v, yy(R.key), R);
  }
}
function Sv(v, y, m) {
  return y && ZE(v.prototype, y), m && ZE(v, m), Object.defineProperty(v, "prototype", { writable: !1 }), v;
}
function ld(v, y, m) {
  return (y = yy(y)) in v ? Object.defineProperty(v, y, { value: m, enumerable: !0, configurable: !0, writable: !0 }) : v[y] = m, v;
}
function gc() {
  return (gc = Object.assign ? Object.assign.bind() : function(v) {
    for (var y = 1; y < arguments.length; y++) {
      var m, R = arguments[y];
      for (m in R) !{}.hasOwnProperty.call(R, m) || (v[m] = R[m]);
    }
    return v;
  }).apply(null, arguments);
}
function WS(v) {
  return (WS = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(y) {
    return y.__proto__ || Object.getPrototypeOf(y);
  })(v);
}
function Sy(v, y) {
  if (typeof y != "function" && y !== null) throw new TypeError("Super expression must either be null or a function");
  v.prototype = Object.create(y && y.prototype, { constructor: { value: v, writable: !0, configurable: !0 } }), Object.defineProperty(v, "prototype", { writable: !1 }), y && h2(v, y);
}
function v2() {
  try {
    var v = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (v2 = function() {
    return !!v;
  })();
}
function mO(v) {
  if (typeof Symbol < "u" && v[Symbol.iterator] != null || v["@@iterator"] != null) return Array.from(v);
}
function yO(v, y) {
  var m = v == null ? null : typeof Symbol < "u" && v[Symbol.iterator] || v["@@iterator"];
  if (m != null) {
    var R, L, b, h, j = [], k = !0, T = !1;
    try {
      if (b = (m = m.call(v)).next, y !== 0) for (; !(k = (R = b.call(m)).done) && (j.push(R.value), j.length !== y); k = !0) ;
    } catch (V) {
      T = !0, L = V;
    } finally {
      try {
        if (!k && m.return != null && (h = m.return(), Object(h) !== h)) return;
      } finally {
        if (T) throw L;
      }
    }
    return j;
  }
}
function gO() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function SO() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function e2(v, y) {
  var m, R = Object.keys(v);
  return Object.getOwnPropertySymbols && (m = Object.getOwnPropertySymbols(v), y && (m = m.filter(function(L) {
    return Object.getOwnPropertyDescriptor(v, L).enumerable;
  })), R.push.apply(R, m)), R;
}
function oe(v) {
  for (var y = 1; y < arguments.length; y++) {
    var m = arguments[y] != null ? arguments[y] : {};
    y % 2 ? e2(Object(m), !0).forEach(function(R) {
      ld(v, R, m[R]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(v, Object.getOwnPropertyDescriptors(m)) : e2(Object(m)).forEach(function(R) {
      Object.defineProperty(v, R, Object.getOwnPropertyDescriptor(m, R));
    });
  }
  return v;
}
function $i(v, y) {
  if (v == null) return {};
  var m, R = _O(v, y);
  if (Object.getOwnPropertySymbols) for (var L = Object.getOwnPropertySymbols(v), b = 0; b < L.length; b++) m = L[b], y.includes(m) || {}.propertyIsEnumerable.call(v, m) && (R[m] = v[m]);
  return R;
}
function _O(v, y) {
  if (v == null) return {};
  var m, R = {};
  for (m in v) if ({}.hasOwnProperty.call(v, m)) {
    if (y.includes(m)) continue;
    R[m] = v[m];
  }
  return R;
}
function CO(v, y) {
  if (y && (typeof y == "object" || typeof y == "function")) return y;
  if (y !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return vO(v);
}
function id() {
  id = function() {
    return y;
  };
  var v, y = {}, m = Object.prototype, R = m.hasOwnProperty, L = Object.defineProperty || function(K, ee, be) {
    K[ee] = be.value;
  }, Se = typeof Symbol == "function" ? Symbol : {}, b = Se.iterator || "@@iterator", h = Se.asyncIterator || "@@asyncIterator", j = Se.toStringTag || "@@toStringTag";
  function k(K, ee, be) {
    return Object.defineProperty(K, ee, { value: be, enumerable: !0, configurable: !0, writable: !0 }), K[ee];
  }
  try {
    k({}, "");
  } catch {
    k = function(ee, be, He) {
      return ee[be] = He;
    };
  }
  function T(K, me, be, U) {
    var we, _e, te, Oe, me = me && me.prototype instanceof pe ? me : pe, me = Object.create(me.prototype), U = new lt(U || []);
    return L(me, "_invoke", { value: (we = K, _e = be, te = U, Oe = $, function(X, Je) {
      if (Oe === G) throw Error("Generator is already running");
      if (Oe === ve) {
        if (X === "throw") throw Je;
        return { value: v, done: !0 };
      }
      for (te.method = X, te.arg = Je; ; ) {
        var je = te.delegate;
        if (je && (je = (function ht(tt, Le) {
          var st = Le.method, dt = tt.iterator[st];
          return dt === v ? (Le.delegate = null, st === "throw" && tt.iterator.return && (Le.method = "return", Le.arg = v, ht(tt, Le), Le.method === "throw") || st !== "return" && (Le.method = "throw", Le.arg = new TypeError("The iterator does not provide a '" + st + "' method")), ue) : (st = V(dt, tt.iterator, Le.arg), st.type === "throw" ? (Le.method = "throw", Le.arg = st.arg, Le.delegate = null, ue) : (dt = st.arg, dt ? dt.done ? (Le[tt.resultName] = dt.value, Le.next = tt.nextLoc, Le.method !== "return" && (Le.method = "next", Le.arg = v), Le.delegate = null, ue) : dt : (Le.method = "throw", Le.arg = new TypeError("iterator result is not an object"), Le.delegate = null, ue)));
        })(je, te), je)) {
          if (je === ue) continue;
          return je;
        }
        if (te.method === "next") te.sent = te._sent = te.arg;
        else if (te.method === "throw") {
          if (Oe === $) throw Oe = ve, te.arg;
          te.dispatchException(te.arg);
        } else te.method === "return" && te.abrupt("return", te.arg);
        if (Oe = G, je = V(we, _e, te), je.type === "normal") {
          if (Oe = te.done ? ve : Q, je.arg === ue) continue;
          return { value: je.arg, done: te.done };
        }
        je.type === "throw" && (Oe = ve, te.method = "throw", te.arg = je.arg);
      }
    }) }), me;
  }
  function V(K, ee, be) {
    try {
      return { type: "normal", arg: K.call(ee, be) };
    } catch (He) {
      return { type: "throw", arg: He };
    }
  }
  y.wrap = T;
  var $ = "suspendedStart", Q = "suspendedYield", G = "executing", ve = "completed", ue = {};
  function pe() {
  }
  function Ne() {
  }
  function ge() {
  }
  var Se = {}, Ee = (k(Se, b, function() {
    return this;
  }), Object.getPrototypeOf), Ee = Ee && Ee(Ee(ut([]))), he = (Ee && Ee !== m && R.call(Ee, b) && (Se = Ee), ge.prototype = pe.prototype = Object.create(Se));
  function Qe(K) {
    ["next", "throw", "return"].forEach(function(ee) {
      k(K, ee, function(be) {
        return this._invoke(ee, be);
      });
    });
  }
  function Ve(K, ee) {
    var be;
    L(this, "_invoke", { value: function(He, we) {
      function _e() {
        return new ee(function(te, Oe) {
          (function me(tt, X, Je, je) {
            var ht, tt = V(K[tt], K, X);
            if (tt.type !== "throw") return (X = (ht = tt.arg).value) && typeof X == "object" && R.call(X, "__await") ? ee.resolve(X.__await).then(function(Le) {
              me("next", Le, Je, je);
            }, function(Le) {
              me("throw", Le, Je, je);
            }) : ee.resolve(X).then(function(Le) {
              ht.value = Le, Je(ht);
            }, function(Le) {
              return me("throw", Le, Je, je);
            });
            je(tt.arg);
          })(He, we, te, Oe);
        });
      }
      return be = be ? be.then(_e, _e) : _e();
    } });
  }
  function Ie(K) {
    var ee = { tryLoc: K[0] };
    1 in K && (ee.catchLoc = K[1]), 2 in K && (ee.finallyLoc = K[2], ee.afterLoc = K[3]), this.tryEntries.push(ee);
  }
  function Xe(K) {
    var ee = K.completion || {};
    ee.type = "normal", delete ee.arg, K.completion = ee;
  }
  function lt(K) {
    this.tryEntries = [{ tryLoc: "root" }], K.forEach(Ie, this), this.reset(!0);
  }
  function ut(K) {
    if (K || K === "") {
      var ee, be = K[b];
      if (be) return be.call(K);
      if (typeof K.next == "function") return K;
      if (!isNaN(K.length)) return ee = -1, (be = function He() {
        for (; ++ee < K.length; ) if (R.call(K, ee)) return He.value = K[ee], He.done = !1, He;
        return He.value = v, He.done = !0, He;
      }).next = be;
    }
    throw new TypeError(typeof K + " is not iterable");
  }
  return L(he, "constructor", { value: Ne.prototype = ge, configurable: !0 }), L(ge, "constructor", { value: Ne, configurable: !0 }), Ne.displayName = k(ge, j, "GeneratorFunction"), y.isGeneratorFunction = function(K) {
    return K = typeof K == "function" && K.constructor, !!K && (K === Ne || (K.displayName || K.name) === "GeneratorFunction");
  }, y.mark = function(K) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(K, ge) : (K.__proto__ = ge, k(K, j, "GeneratorFunction")), K.prototype = Object.create(he), K;
  }, y.awrap = function(K) {
    return { __await: K };
  }, Qe(Ve.prototype), k(Ve.prototype, h, function() {
    return this;
  }), y.AsyncIterator = Ve, y.async = function(K, ee, be, He, we) {
    we === void 0 && (we = Promise);
    var _e = new Ve(T(K, ee, be, He), we);
    return y.isGeneratorFunction(ee) ? _e : _e.next().then(function(te) {
      return te.done ? te.value : _e.next();
    });
  }, Qe(he), k(he, j, "Generator"), k(he, b, function() {
    return this;
  }), k(he, "toString", function() {
    return "[object Generator]";
  }), y.keys = function(K) {
    var ee, be = Object(K), He = [];
    for (ee in be) He.push(ee);
    return He.reverse(), function we() {
      for (; He.length; ) {
        var _e = He.pop();
        if (_e in be) return we.value = _e, we.done = !1, we;
      }
      return we.done = !0, we;
    };
  }, y.values = ut, lt.prototype = { constructor: lt, reset: function(K) {
    if (this.prev = 0, this.next = 0, this.sent = this._sent = v, this.done = !1, this.delegate = null, this.method = "next", this.arg = v, this.tryEntries.forEach(Xe), !K) for (var ee in this) ee.charAt(0) === "t" && R.call(this, ee) && !isNaN(+ee.slice(1)) && (this[ee] = v);
  }, stop: function() {
    this.done = !0;
    var K = this.tryEntries[0].completion;
    if (K.type === "throw") throw K.arg;
    return this.rval;
  }, dispatchException: function(K) {
    if (this.done) throw K;
    var ee = this;
    function be(me, U) {
      return _e.type = "throw", _e.arg = K, ee.next = me, U && (ee.method = "next", ee.arg = v), !!U;
    }
    for (var He = this.tryEntries.length - 1; 0 <= He; --He) {
      var we = this.tryEntries[He], _e = we.completion;
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
      var He = this.tryEntries[be];
      if (He.tryLoc <= this.prev && R.call(He, "finallyLoc") && this.prev < He.finallyLoc) {
        var we = He;
        break;
      }
    }
    var _e = (we = we && (K === "break" || K === "continue") && we.tryLoc <= ee && ee <= we.finallyLoc ? null : we) ? we.completion : {};
    return _e.type = K, _e.arg = ee, we ? (this.method = "next", this.next = we.finallyLoc, ue) : this.complete(_e);
  }, complete: function(K, ee) {
    if (K.type === "throw") throw K.arg;
    return K.type === "break" || K.type === "continue" ? this.next = K.arg : K.type === "return" ? (this.rval = this.arg = K.arg, this.method = "return", this.next = "end") : K.type === "normal" && ee && (this.next = ee), ue;
  }, finish: function(K) {
    for (var ee = this.tryEntries.length - 1; 0 <= ee; --ee) {
      var be = this.tryEntries[ee];
      if (be.finallyLoc === K) return this.complete(be.completion, be.afterLoc), Xe(be), ue;
    }
  }, catch: function(K) {
    for (var ee = this.tryEntries.length - 1; 0 <= ee; --ee) {
      var be, He, we = this.tryEntries[ee];
      if (we.tryLoc === K) return (be = we.completion).type === "throw" && (He = be.arg, Xe(we)), He;
    }
    throw Error("illegal catch attempt");
  }, delegateYield: function(K, ee, be) {
    return this.delegate = { iterator: ut(K), resultName: ee, nextLoc: be }, this.method === "next" && (this.arg = v), ue;
  } }, y;
}
function h2(v, y) {
  return (h2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(m, R) {
    return m.__proto__ = R, m;
  })(v, y);
}
function t2(v, y) {
  return dO(v) || yO(v, y) || m2(v, y) || gO();
}
function _y(v) {
  return pO(v) || mO(v) || m2(v) || SO();
}
function EO(v, y) {
  if (typeof v != "object" || !v) return v;
  var m = v[Symbol.toPrimitive];
  if (m === void 0) return (y === "string" ? String : Number)(v);
  if (m = m.call(v, y), typeof m != "object") return m;
  throw new TypeError("@@toPrimitive must return a primitive value.");
}
function yy(v) {
  return v = EO(v, "string"), typeof v == "symbol" ? v : v + "";
}
function Gr(v) {
  return (Gr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(y) {
    return typeof y;
  } : function(y) {
    return y && typeof Symbol == "function" && y.constructor === Symbol && y !== Symbol.prototype ? "symbol" : typeof y;
  })(v);
}
function m2(v, y) {
  var m;
  if (v) return typeof v == "string" ? $S(v, y) : (m = (m = {}.toString.call(v).slice(8, -1)) === "Object" && v.constructor ? v.constructor.name : m) === "Map" || m === "Set" ? Array.from(v) : m === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m) ? $S(v, y) : void 0;
}
var y2 = { react: { componentWrap: "div", slotWrap: "div", componentWrapAttrs: { __use_react_component_wrap: "", style: { all: "unset" } }, slotWrapAttrs: { __use_react_slot_wrap: "", style: { all: "unset" } }, vueNamedSlotsKey: ["node:"] }, vue: { componentWrapHOC: function(v) {
  return function() {
    var y = (0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}).portals;
    return Ct.createElement(Ct.Fragment, null, v, (y === void 0 ? [] : y).map(function(m) {
      var R = m.Portal;
      return Ct.createElement(R, { key: m.key });
    }));
  };
}, componentWrapAttrs: { "data-use-vue-component-wrap": "", style: { all: "unset" } }, slotWrapAttrs: { "data-use-vue-slot-wrap": "", style: { all: "unset" } } } };
function g2() {
  var v = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : { react: {}, vue: {} }, m = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : y2, y = 2 < arguments.length ? arguments[2] : void 0, m = (v.vue || (v.vue = {}), v.react || (v.react = {}), [m, oe(oe({}, v), {}, { react: oe(oe(oe({}, m.react), v.react), {}, { componentWrapAttrs: oe(oe({}, m.react.componentWrapAttrs), v.react.componentWrapAttrs), slotWrapAttrs: oe(oe({}, m.react.slotWrapAttrs), v.react.slotWrapAttrs) }), vue: oe(oe(oe({}, m.vue), v.vue), {}, { componentWrapAttrs: oe(oe({}, m.vue.componentWrapAttrs), v.vue.componentWrapAttrs), slotWrapAttrs: oe(oe({}, m.vue.slotWrapAttrs), v.vue.slotWrapAttrs) }) })]);
  return y && m.unshift({}), Object.assign.apply(this, m);
}
var S2 = ["getElementById", "getElementsByClassName", "getElementsByTagName", "getElementsByTagNameNS", "querySelector", "querySelectorAll"], od = { Document: {}, Element: {} };
function RO(v) {
  Object.keys(od).forEach(function(y) {
    S2.forEach(function(m) {
      var R = od[y][m] || window[y].prototype[m];
      R && (od[y][m] = R, window[y].prototype[m] = function() {
        for (var L = arguments.length, b = new Array(L), h = 0; h < L; h++) b[h] = arguments[h];
        var j = R.apply(this, b);
        return j && (j.constructor !== NodeList || j.constructor === NodeList && 0 < j.length) ? j : ((j = m) === "getElementById" && (j = "querySelector", b = ["#" + b[0]]), (od.Element[j] || Element.prototype[j]).apply(v, b));
      });
    });
  });
}
function bO() {
  Object.keys(od).forEach(function(v) {
    S2.forEach(function(y) {
      window[v].prototype[y] = od[v][y];
    });
  });
}
var TO = ["ref"], xO = ["key"], wO = ["hashList"], IS = parseInt(KS.version);
var kO = (() => {
  function v(y) {
    return gv(this, v), gy(this, v, [y]);
  }
  return Sy(v, Ct.Component), Sv(v, [{ key: "render", value: function() {
    var y = this.props.component, m = this.props.passedProps, m = (m.ref, $i(m, TO));
    return Ct.createElement(y, m, this.props.children);
  } }]);
})(), DO = function(v, y, m) {
  var R = (() => {
    function L(b) {
      var h;
      return gv(this, L), (h = gy(this, L, [b])).state = oe(oe({}, b), y.isSlots ? { children: v } : {}), h.setRef = h.setRef.bind(h), h.vueInReactCall = h.vueInReactCall.bind(h), (h.__veauryVueWrapperRef__ = m).__veauryVueInReactCall__ = h.vueInReactCall, h;
    }
    return Sy(L, Ct.Component), Sv(L, [{ key: "reactPropsLinkToVueInstance", value: function(b) {
      Object.keys(b).forEach(function(h) {
        m[h] || (m[h] = b[h]);
      }), Object.getOwnPropertyNames(b.__proto__).filter(function(h) {
        return ["constructor", "render"].indexOf(h) < 0;
      }).forEach(function(h) {
        m[h] || (m[h] = b[h]);
      });
    } }, { key: "setRef", value: function(b) {
      var h = this;
      b && (m.__veauryReactRef__ = b, this.reactPropsLinkToVueInstance(b), Promise.resolve().then(function() {
        return h.reactPropsLinkToVueInstance(b);
      }), (this.setRef.current = b).__veauryVueWrapperRef__ = m);
    } }, { key: "createSlot", value: function(b) {
      return { originVNode: b, inheritAttrs: !1, __fromReactSlot: !0, render: function() {
        var h, j;
        return ((h = b = (b = ((j = this.$slots) == null || (h = j.default) == null ? void 0 : h.call(j)) || b) instanceof Function ? b(this) : b) == null ? void 0 : h.length) === 1 && (j = b[0]) != null && j.data && ((h = this.$attrs).key, j = $i(h, xO), b[0].props = oe(oe({}, j), b[0].props)), b;
      } };
    } }, { key: "componentWillUnmount", value: function() {
      m.__veauryReactRef__ && (m.__veauryReactRef__.__veauryVueWrapperRef__ = null, m.__veauryReactRef__ = null);
    } }, { key: "vueInReactCall", value: function(b) {
      var h = this, j = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
      return 2 < arguments.length && arguments[2] && b && b[0] ? b.map(function(k, T) {
        return my(h.createSlot(k instanceof Function ? k : [k]), oe(oe(oe({}, y), j), {}, { isSlots: !0, wrapInstance: m })).render({ key: k?.key || void 0 });
      }) : my(this.createSlot(b), oe(oe(oe({}, y), j), {}, { isSlots: !0, wrapInstance: m })).render();
    } }, { key: "render", value: function() {
      var b, h, j, k = this, ue = this.state, T = ue.hashList, V = $i(ue, wO), $ = {}, Q = {};
      for (b in V) h = b, j = void 0, V.hasOwnProperty(h) && V[h] != null && (V[h].__slot ? (V[h].reactSlot ? V[h] = V[h].reactSlot : (j = V[h], y.defaultSlotsFormatter && V[h].__trueChildren ? (V[h].__trueChildren.__top__ = k.__veauryVueWrapperRef__, V[h] = y.defaultSlotsFormatter(V[h].__trueChildren, k.vueInReactCall, T), V[h] instanceof Array ? V[h] = _y(V[h]) : -1 < ["string", "number"].indexOf(Gr(V[h])) ? V[h] = [V[h]] : Gr(V[h]) === "object" && (V[h] = oe({}, V[h]))) : V[h] = oe({}, my(k.createSlot(V[h]), oe(oe({}, y), {}, { isSlots: !0, wrapInstance: m })).render()), V[h].vueFunction = j), $[h] = V[h]) : V[h].__scopedSlot && (V[h] = V[h](k.createSlot), Q[h] = V[h]));
      var G, ve, ue = {};
      return ue.ref = this.setRef, y.isSlots ? this.state.children || this.props.children : (G = V, v.__syncUpdateForPureReactInVue && Object.keys(v.__syncUpdateForPureReactInVue).map(function(pe) {
        var Ne, ge;
        G[pe] && typeof G[pe] == "function" && (Ne = k.__veauryVueWrapperRef__, ge = G[pe], G[pe] = function() {
          for (var Se = arguments.length, Ee = new Array(Se), he = 0; he < Se; he++) Ee[he] = arguments[he];
          Ne.__veaurySyncUpdateProps__(v.__syncUpdateForPureReactInVue[pe].apply(this, Ee)), ge.apply(this, Ee), Ne.macroTaskUpdate = !0, Ne.__veauryMountReactComponent__(!0, !0, {});
        });
      }), ve = oe(oe(oe({}, G = y.defaultPropsFormatter ? y.defaultPropsFormatter.call(this, G, this.vueInReactCall, T) : G), $), Q), Object.getPrototypeOf(v) !== Function.prototype && (Gr(v) !== "object" || v.render) || L.catchVueRefs() ? (Object.getPrototypeOf(v) === Function.prototype && delete ue.ref, Ct.createElement(v, gc({}, ve, ue))) : Ct.createElement(kO, gc({ passedProps: ve, component: v }, ue), ve.children));
    } }], [{ key: "catchVueRefs", value: function() {
      if (m.$parent) {
        for (var b in m.$parent.$refs) if (m.$parent.$refs[b] === m) return !0;
      }
      return !1;
    } }]);
  })();
  return ld(R, "displayName", "applyReact_".concat(v.displayName || v.name || "Component")), R;
};
function XS(v) {
  var y = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
  return v.__esModule && v.default && (v = v.default), y.isSlots && (v = v()), y = g2(y, void 0, !0), { originReactComponent: v, setup: function(m, R) {
    var L, b, h, j;
    if (!y.isSlots) return L = {}, b = dk({}), h = pk(), typeof (j = y.useInjectPropsFromWrapper || v.__veauryInjectPropsFromWrapper__) == "function" && (typeof (j = j.call(h.proxy, m)) != "function" ? (Object.assign(b, j), L.__veauryInjectedProps__ = b) : h.proxy.__veauryInjectedComputed__ = j), L;
  }, data: function() {
    return { VEAURY_Portals: [] };
  }, created: function() {
    this.__veauryPortalKeyPool__ = [], this.__veauryMaxPortalCount__ = 0;
  }, computed: { __veauryInjectedProps__: function() {
    var m;
    return (m = this.__veauryInjectedComputed__) == null ? void 0 : m.call(this);
  } }, render: function() {
    var m = tu(y.react.componentWrap, oe({ ref: "react" }, y.react.componentWrapAttrs || {}), this.VEAURY_Portals.map(function(R) {
      return (0, R.Portal)(tu, R.key);
    }));
    return this.__veauryCheckReactSlot__(this.$slots), m;
  }, methods: { __veauryCheckReactSlot__: function(m) {
    var R = this;
    function L(b, h, j) {
      return h[j] && (b[j] = h[j], 1);
    }
    Gr(m) === "object" && m != null && (m instanceof Array ? m.forEach(function(b) {
      R.__veauryCheckReactSlot__(b.children);
    }) : Object.keys(m).forEach(function(k) {
      var h, j, k = m[k];
      if (typeof k == "function") {
        try {
          h = k.apply(R, k.__reactArgs || [{}]);
        } catch {
          return;
        }
        (k.__trueChildren = h).forEach(function(T) {
          T.children && R.__veauryCheckReactSlot__(T.children);
        }), h.length !== 1 || L(k, h = h[0], "reactSlot") || L(k, h, "reactFunction") || h.type !== f2 || ((j = h.children) == null ? void 0 : j.length) !== 1 || L(k, j = h.children[0], "reactSlot") || L(k, j, "reactFunction");
      }
    }));
  }, __veauryPushVuePortal__: function(m) {
    var R = this.__veauryPortalKeyPool__.shift() || this.__veauryMaxPortalCount__++;
    this.VEAURY_Portals.push({ Portal: m, key: R });
  }, __veauryRemoveVuePortal__: function(m) {
    var R, L = this.VEAURY_Portals.find(function(b, h) {
      if (b.Portal === m) return R = h, !0;
    });
    this.__veauryPortalKeyPool__.push(L.key), this.VEAURY_Portals.splice(R, 1);
  }, __veauryGetScopeSlot__: function(m, R, L) {
    var b = this;
    function h(j) {
      function k() {
        for (var T, V = this, $ = arguments.length, Q = new Array($), G = 0; G < $; G++) Q[G] = arguments[G];
        return m.reactFunction ? m.reactFunction.apply(this, Q) : y.defaultSlotsFormatter ? ((T = m.apply(this, Q)).__top__ = b, (T = y.defaultSlotsFormatter(T, b.__veauryVueInReactCall__, R)) instanceof Array || -1 < Gr(T).indexOf("string", "number") ? T = _y(T) : Gr(T) === "object" && (T = oe({}, T)), T) : my(j(function() {
          return m.apply(V, Q);
        }), oe(oe({}, y), {}, { isSlots: !0, wrapInstance: b })).render();
      }
      return y.pureTransformer && L ? k.vueFunction = L : k.vueFunction = m, k;
    }
    return h.__scopedSlot = !0, h;
  }, __veaurySyncUpdateProps__: function(m) {
    this.__veauryReactInstance__ && this.__veauryReactInstance__.setState(m);
  }, __veauryMountReactComponent__: function(m, R) {
    var L = arguments, b = this;
    return hO(id().mark(function h() {
      var j, k, T, V, $, Q, G, ve, ue, pe, Ne, ge, Se, Ee, he, Qe, Ve;
      return id().wrap(function(Ie) {
        for (; ; ) switch (Ie.prev = Ie.next) {
          case 0:
            if (j = 2 < L.length && L[2] !== void 0 ? L[2] : {}, k = {}, T = [], (ve = b.$.vnode.scopeId) && (k[ve] = "", T.push(ve)), V = {}, $ = {}, m && (R == null || !R.slot)) {
              Ie.next = 18;
              break;
            }
            G = id().mark(function Xe(lt) {
              var ut;
              return id().wrap(function(K) {
                for (; ; ) switch (K.prev = K.next) {
                  case 0:
                    if (b.$slots.hasOwnProperty(lt) && b.$slots[lt] != null) {
                      K.next = 2;
                      break;
                    }
                    return K.abrupt("return", 0);
                  case 2:
                    if ((ut = y.react.vueNamedSlotsKey.find(function(ee) {
                      return lt.indexOf(ee) === 0;
                    })) || lt === "default") return ut = lt.replace(new RegExp("^".concat(ut)), ""), V[ut] = b.$slots[lt], V[ut].__slot = !0, K.abrupt("return", 0);
                    K.next = 8;
                    break;
                  case 8:
                    $[lt] = b.__veauryGetScopeSlot__(b.$slots[lt], T, (ut = b.$.vnode) == null || (ut = ut.children) == null ? void 0 : ut[lt]);
                  case 9:
                  case "end":
                    return K.stop();
                }
              }, Xe);
            }), Ie.t0 = id().keys(b.$slots || {});
          case 10:
            if ((Ie.t1 = Ie.t0()).done) {
              Ie.next = 18;
              break;
            }
            return ve = Ie.t1.value, Ie.delegateYield(G(ve), "t2", 13);
          case 13:
            if (Ie.t2 === 0) return Ie.abrupt("continue", 10);
            Ie.next = 16;
            break;
          case 16:
            Ie.next = 10;
            break;
          case 18:
            if ((!m || R != null && R.slot) && (ue = oe({}, V), Q = ue.default, delete ue.default), b.__veauryLast__ = b.__veauryLast__ || {}, b.__veauryLast__.slot = b.__veauryLast__.slot || {}, b.__veauryLast__.attrs = b.__veauryLast__.attrs || {}, pe = { slot: function() {
              b.__veauryLast__.slot = oe(oe(oe({}, Q ? { children: Q } : { children: null }), ue), $);
            }, attrs: function() {
              b.__veauryLast__.attrs = b.$attrs;
            } }, R && Object.keys(R).forEach(function(Xe) {
              return pe[Xe]();
            }), m) {
              Ie.next = 64;
              break;
            }
            if (b.__reactBoundedPromise__ = new Promise(function(Xe) {
              Ne = Xe;
            }), b.__reactBoundedPromise__.resolve = Ne, pe.slot(), pe.attrs(), Ee = DO(v, y, b), ge = Ct.createElement(Ee, gc({}, b.$attrs, b.__veauryInjectedProps__, { children: Q }, ue, $, b.$attrs.class ? { className: b.$attrs.class } : {}, k, { hashList: T }, b.$attrs.style ? { style: b.$attrs.style } : {}, { ref: function(Xe) {
              b.__veauryReactInstance__ = Xe, b.__reactBoundedPromise__.resolve(!0);
            } })), Se = b.$refs.react, Ee = y.wrapInstance) {
              Ie.next = 47;
              break;
            }
            he = b.$parent;
          case 35:
            if (he) {
              if (he.parentReactWrapperRef) return Ee = he.parentReactWrapperRef, Ie.abrupt("break", 45);
              Ie.next = 39;
            } else Ie.next = 45;
            break;
          case 39:
            if (he.reactWrapperRef) return Ee = he.reactWrapperRef, Ie.abrupt("break", 45);
            Ie.next = 42;
            break;
          case 42:
            he = he.$parent, Ie.next = 35;
            break;
          case 45:
            Ie.next = 49;
            break;
          case 47:
            (Ee = y.wrapInstance).__veauryVueWrapperRef__ = b;
          case 49:
            if (Ee) return b.parentReactWrapperRef = Ee, b.reactPortal = function() {
              return KS.createPortal(ge, Se);
            }, Ee.pushReactPortal(b.reactPortal), Ie.abrupt("return");
            Ie.next = 54;
            break;
          case 54:
            if (17 < IS) return hv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED !== void 0 && (hv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = !0), Qe = y.react.createRoot || hv.createRoot, 18 < IS && !Qe && console.warn("'react-dom 19' no longer supports dynamically determining whether to use 'render' or 'createRoot'. In order to be compatible with 'react-dom 17' and previous versions, you need to manually configure 'createRoot' in the veaury configuration."), b.__veauryReactApp__ = Qe(Se), b.__veauryReactApp__.render(ge), Ie.abrupt("return");
            Ie.next = 61;
            break;
          case 61:
            hv.render(ge, Se), Ie.next = 71;
            break;
          case 64:
            return Ie.next = 66, b.__reactBoundedPromise__;
          case 66:
            Ve = function() {
              b.__veauryReactInstance__.setState(function(Xe) {
                return Object.keys(Xe).forEach(function(lt) {
                  y.isSlots && lt === "children" || delete Xe[lt];
                }), oe(oe(oe(oe({}, b.__veauryCache__), b.__veauryInjectedProps__), !y.isSlots && b.__veauryLast__.slot), b.__veauryLast__.attrs);
              }), b.__veauryCache__ = null;
            }, !b.microTaskUpdate || b.__veauryCache__ || b.$nextTick(function() {
              Ve(), b.microTaskUpdate = !1;
            }), b.macroTaskUpdate && (clearTimeout(b.updateTimer), b.updateTimer = setTimeout(function() {
              clearTimeout(b.updateTimer), Ve(), b.macroTaskUpdate = !1;
            })), b.__veauryCache__ = oe(oe({}, b.__veauryCache__ || {}), oe(oe(oe(oe({}, j), b.$attrs.class ? { className: b.$attrs.class } : {}), oe({}, k)), {}, { hashList: T }, b.$attrs.style ? { style: b.$attrs.style } : {})), b.macroTaskUpdate || b.microTaskUpdate || Ve();
          case 71:
          case "end":
            return Ie.stop();
        }
      }, h);
    }))();
  } }, mounted: function() {
    var m = this;
    this.__VEAURY_IGNORE_STRANGE_UPDATE__ = !0, Promise.resolve().then(function() {
      m.__VEAURY_IGNORE_STRANGE_UPDATE__ = !1;
    }), clearTimeout(this.updateTimer), this.__veauryMountReactComponent__();
  }, beforeUnmount: function() {
    var m;
    clearTimeout(this.updateTimer), RO(this.$refs.react), this.reactPortal ? (m = this.parentReactWrapperRef) != null && m.removeReactPortal(this.reactPortal) : 17 < IS ? (m = this.__veauryReactApp__) != null && m.unmount() : hv.unmountComponentAtNode(this.$refs.react), bO();
  }, updated: function() {
    this.__VEAURY_IGNORE_STRANGE_UPDATE__ || this.__veauryMountReactComponent__(!0, { slot: !0 });
  }, inheritAttrs: !1, watch: { $attrs: { handler: function() {
    this.__veauryMountReactComponent__(!0, { attrs: !0 });
  }, deep: !0 }, __veauryInjectedProps__: { handler: function() {
    this.__veauryMountReactComponent__(!0, { attrs: !0 });
  }, deep: !0 } } };
}
var OO = /* @__PURE__ */ new Set(["onClick", "onContextMenu", "onDoubleClick", "onDrag", "onDragEnd", "onDragEnter", "onDragExit", "onDragLeave", "onDragOver", "onDragStart", "onDrop", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onChange", "onInput", "onInvalid", "onReset", "onSubmit", "onError", "onLoad", "onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onGotPointerCapture", "onLostPointerCapture", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut", "onSelect", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onScroll", "onWheel", "onAbort", "onCanPlay", "onCanPlayThrough", "onDurationChange", "onEmptied", "onEncrypted", "onEnded", "onError", "onLoadedData", "onLoadedMetadata", "onLoadStart", "onPause", "onPlay", "onPlaying", "onProgress", "onRateChange", "onSeeked", "onSeeking", "onStalled", "onSuspend", "onTimeUpdate", "onVolumeChange", "onWaiting", "onLoad", "onError", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionEnd", "onToggle"]);
function LO(v, y) {
  for (var m = (v = y = v?._reactInternals || v?._reactInternalFiber || y) == null ? void 0 : v.return; m; ) {
    var R = m.stateNode;
    if (R = R?.parentVueWrapperRef || R?.__veauryVueWrapperRef__) return R;
    m = m.return;
  }
}
function n2(v, y, m) {
  var R = {};
  return m.forEach(function(L) {
    R[L] = !0;
  }), v[(y === "modelValue" ? "model" : y) + "Modifiers"] = R;
}
function r2(v, y, m) {
  var R = this, L = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : "v-model";
  if (!(y instanceof Array)) throw Error("[error:veaury] Parameter type error from '".concat(L, "', a single v-model is an array, such as [val, setter, argumentKey, modifiers] or [val, setter, modifiers]"));
  if (typeof y[1] != "function") throw Error("[error:veaury] Parameter type error from '".concat(L, "', a single v-model is an array, the second element of the array must be a setter function"));
  var b = y[1], h = (typeof y[2] == "string" ? (m = y[2], y[3] instanceof Array && n2(v, m, y[3])) : y[2] instanceof Array && n2(v, m, y[2]), v["onUpdate:" + m]);
  v["onUpdate:" + m] = typeof h == "function" ? function() {
    for (var j = arguments.length, k = new Array(j), T = 0; T < j; T++) k[T] = arguments[T];
    h.apply(R, k), b.apply(R, k);
  } : b, v[m] = y[0];
}
function YS(v) {
  var y = this, m = {}, R = oe({}, v);
  return Object.keys(v).forEach(function(L) {
    var b, h = L.match(/^onUpdate-([^-]+)/);
    if (h) delete R[L], b = m["onUpdate:".concat(h[1])], m["onUpdate:".concat(h[1])] = typeof b == "function" ? function() {
      for (var k = arguments.length, T = new Array(k), V = 0; V < k; V++) T[V] = arguments[V];
      b.apply(y, T), v[L].apply(y, T);
    } : v[L];
    else if (h = L.match(/^v-model($|:([^:]+)|-([^:]+))/)) h = h[2] || h[3] || "modelValue", r2(m, v[L], h), delete R[L];
    else if (L === "v-models") {
      if (Gr(v[L]) !== "object" || v[L] instanceof Array) throw Error("[error:veaury] The parameter 'v-models' must be an object type, such as {[argumentKey]: singleVModel}");
      var j = v[L];
      Object.keys(j).forEach(function(k) {
        r2(m, j[k], k, "v-models");
      }), delete R[L];
    }
  }), oe(oe({}, R), m);
}
var Cy = Sv(function v() {
  gv(this, v), ld(this, "pool", /* @__PURE__ */ new Set());
}, [{ key: "getRandomId", value: function(v) {
  var y = v + (Math.random() + "").substr(2);
  return this.pool.has(y) ? this.getRandomId(v) : (this.pool.add(y), y);
} }]);
function _2(R, y) {
  var m, R = R.node;
  if (typeof R == "function" && (R = R()), (m = y) != null && m.current || typeof y == "function" || (m = y) != null && m.toString().match(/^function/) || (y = null), -1 < ["string", "number"].indexOf(Gr(R))) return R;
  if (R instanceof Array) {
    if (R.length !== 1) return R;
    R = R[0];
  }
  return oe(oe({}, R), {}, { ref: y });
}
var MO = XS(_2);
function QS(v) {
  return tu(MO, { node: function() {
    return v.node;
  } });
}
QS.originReactComponent = Ct.forwardRef(_2);
var NO = ["component", "node"], AO = ["component", "$slots", "children", "class", "style"], UO = ["className", "classname"], yc = "veaury-options", a2 = new Cy();
function jO(v, y) {
  var m;
  return v = typeof v == "string" && y ? (y = y.$) == null || (y = y.appContext) == null || (y = y.app) == null || (m = y.component) == null ? void 0 : m.call(y, v) : v;
}
function i2(v) {
  if (v) return Object.keys(v).forEach(function(y) {
    var m = v[y];
    m != null && (typeof m == "function" ? (v[y] = m, v[y].reactFunction = m) : (v[y] = function() {
      return m;
    }, v[y].reactSlot = m), m.vueFunction) && (v[y].vueFunction = m.vueFunction);
  }), v;
}
function zO(v) {
  var y;
  return (y = v.node) == null ? void 0 : y.call(v);
}
var GS = Ct.forwardRef(function(L, y) {
  var m, h = L.component, R = L.node, L = $i(L, NO);
  if (h == null && R == null) return null;
  if (R != null) {
    if (R.$$typeof || typeof R == "string" || typeof R == "number") return R;
    typeof R != "function" && (m = R, R = function() {
      return m;
    });
  }
  var b, h = h || zO, j = g2(L[yc] || {}, void 0, !0), k = j.useInjectPropsFromWrapper || h.__veauryInjectPropsFromWrapper__;
  return j.isSlots || typeof k == "function" && (b = k(L)), Ct.createElement(FO, gc({}, oe(oe(oe(oe({ component: h }, R ? { node: R } : {}), L), b), {}, ld({}, yc, j)), { ref: y }));
}), FO = (() => {
  function v(y) {
    var m;
    return gv(this, v), (m = gy(this, v, [y])).state = { portals: [] }, m.__veauryPortalKeyPool__ = [], m.__veauryMaxPortalCount__ = 0, m.__veauryCurrentVueComponent__ = y.component, m.__veauryCreateVueInstance__ = m.__veauryCreateVueInstance__.bind(m), m.__veauryVueComponentContainer__ = m.createVueComponentContainer(), m;
  }
  return Sy(v, Ct.Component), Sv(v, [{ key: "pushReactPortal", value: function(y) {
    var m = this.state.portals, R = this.__veauryPortalKeyPool__.shift() || this.__veauryMaxPortalCount__++;
    m.push({ Portal: y, key: R }), this.setState({ portals: m });
  } }, { key: "removeReactPortal", value: function(y) {
    var m, R = this.state.portals, L = R.find(function(b, h) {
      if (b.Portal === y) return m = h, !0;
    });
    this.__veauryPortalKeyPool__.push(L.key), R.splice(m, 1), this.__veauryVueRef__ && this.setState({ portals: R });
  } }, { key: "createVueComponentContainer", value: function() {
    var y = this, m = {}, R = this.props[yc];
    return R.isSlots ? (Object.keys(this.props).forEach(function(L) {
      OO.has(L) && typeof y.props[L] == "function" && (m[L] = y.props[L]);
    }), R.vue.slotWrapAttrs && (m = oe(oe({}, m), R.vue.slotWrapAttrs))) : R.vue.componentWrapAttrs && (m = oe(oe({}, m), R.vue.componentWrapAttrs)), R.vue.componentWrapHOC(Ct.createElement("div", gc({}, R.vue.componentWrapAttrs, { ref: this.__veauryCreateVueInstance__, key: null })), m);
  } }, { key: "shouldComponentUpdate", value: function(y, m, R) {
    var L, b, h, j, k = this;
    return y === this.props || (L = y.component, b = (b = y["v-slots"]) === void 0 ? null : b, h = y.children, y = $i(y, ["component", yc, "v-slots", "children"].map(yy)), this.__veauryCurrentVueComponent__ !== L && this.updateVueComponent(L), L.__fromReactSlot) || this.__veauryVueInstance__ && (h && (b = b || {}, Gr(h) !== "object" || h instanceof Array || h.$$typeof ? b.default = h : b = h), (j = this.__veauryVueInstance__.$data.$slots) && Object.keys(j).forEach(function(T) {
      delete j[T];
    }), b && (j || (this.__veauryVueInstance__.$data.$slots = {}), Object.assign(this.__veauryVueInstance__.$data.$slots, i2(b))), Object.keys(this.__veauryVueInstance__.$data).forEach(function(T) {
      T !== "$slots" && delete k.__veauryVueInstance__.$data[T];
    }), this.__veauryVueInstance__) && Object.assign(this.__veauryVueInstance__.$data, YS(y)), !0;
  } }, { key: "componentWillUnmount", value: function() {
    this.vuePortal ? this.parentVueWrapperRef.__veauryRemoveVuePortal__(this.vuePortal) : (this.__veauryVueInstance__ && this.__veauryVueInstance__.$.appContext.app.unmount(), a2.pool.delete(this.__veauryVueTargetId__), this.vueCreated = !1);
  } }, { key: "componentDidMount", value: function() {
    this.__veauryCreateVueInstance__(this.vueContainerElement);
  } }, { key: "__veauryCreateVueInstance__", value: function(y) {
    var m, R, L, b, h, j, k, T, V = this;
    function $(Q) {
      this.__veauryVueInstance__ || (this.__veauryVueInstance__ = Q);
    }
    this.vueCreated || (this.vueCreated = !0, (m = this).vueContainerElement = y, (L = this.props).component, R = L[yc], k = L.children, T = (T = L["v-slots"]) === void 0 ? {} : T, L = $i(L, ["component", yc, "children", "v-slots"].map(yy)), k && (Gr(k) !== "object" || k instanceof Array || k.$$typeof ? T.default = k : T = k), (T = i2(T)) && (L.$slots = T), $ = $.bind(this), b = oe({}, YS(L)), h = { data: function() {
      return R.isSlots ? { children: m.__veauryCurrentVueComponent__.originVNode } : b;
    }, created: function() {
      this.reactWrapperRef = m, $(this);
    }, methods: { reactInVueCall: function(Q) {
      return 2 < arguments.length && arguments[2] && Q && Q[0] ? Q.map(function(G, ve) {
        return tu(QS, { node: G, key: (G == null || (G = G.data) == null ? void 0 : G.key) || ve });
      }) : tu(QS, { node: Q });
    }, getScopedSlots: function(Q, G) {
      var ve, ue = this, pe = (this.getScopedSlots.__scopeSlots || (this.getScopedSlots.__scopeSlots = {}), oe({}, G));
      for (ve in pe) ((Ne) => {
        var ge, Se;
        !pe.hasOwnProperty(Ne) || (ge = pe[Ne]) == null || (pe[Ne] = (Se = ge, function() {
          for (var Ee, he, Qe, Ve, Ie = arguments.length, Xe = new Array(Ie), lt = 0; lt < Ie; lt++) Xe[lt] = arguments[lt];
          return Se.vueFunction ? Se.vueFunction.apply(ue, Xe) : (Qe = Se.reactFunction, Qe = Se.reactSlot || Qe?.apply(ue, Xe), Ve = R.defaultSlotsFormatter, (Ee = ue.getScopedSlots.__scopeSlots[Ne]) != null && (Ee = Ee.component) != null && (Ee = Ee.ctx) != null && Ee.__veauryReactInstance__ ? (he = ue.getScopedSlots.__scopeSlots[Ne], Promise.resolve().then(function() {
            var ut;
            (ut = he) != null && (ut = ut.component) != null && (ut = ut.ctx) != null && (ut = ut.__veauryReactInstance__) != null && ut.setState({ children: Se.apply(ue, Xe) });
          })) : (he = Ve && Qe ? [Ve(Qe, ue.reactInVueCall)] : Q(XS(function() {
            return Se.apply(ue, Xe);
          }, oe(oe({}, R), {}, { isSlots: !0, wrapInstance: m }))), ue.getScopedSlots.__scopeSlots[Ne] = he), Se.reactFunction ? he.reactFunction = Se.reactFunction : Se.reactSlot && (he.reactSlot = Se.reactSlot), he);
        }), pe[Ne].reactFunction = ge);
      })(ve);
      return pe;
    } }, mounted: function() {
      y.removeAttribute("id"), m.__veauryVueRef__ = this.$refs.use_vue_wrapper, this.$refs.use_vue_wrapper.reactWrapperRef = m;
    }, beforeUnmount: function() {
      m.__veauryVueRef__ = null, this.$refs.use_vue_wrapper.reactWrapperRef = null;
    }, render: function() {
      var Q = this, ge = this.$data, pe = (ge.component, ge.$slots), G = ge.class, ve = ge.style, ge = $i(ge, AO), ue = this.getScopedSlots(tu, oe({}, pe)), pe = ge.className, Ne = ge.classname, ge = $i(ge, UO), Se = {};
      return Object.keys(ue).forEach(function(Ee) {
        var he = ue[Ee];
        Se[Ee] = typeof he == "function" ? he : function() {
          return he;
        };
      }), tu(jO(m.__veauryCurrentVueComponent__, this), oe(oe(oe(oe({}, ge), G || pe || Ne ? { class: G || pe || Ne } : {}), ve ? { style: ve } : {}), {}, { ref: "use_vue_wrapper" }), oe({}, R.isSlots && this.children ? { default: typeof this.children == "function" ? this.children : function() {
        return Q.children;
      } } : oe({}, Se)));
    } }, y && (j = a2.getRandomId("__vue_wrapper_container_"), y.id = j, this.__veauryVueTargetId__ = j, (k = R.wrapInstance) ? (k = R.wrapInstance).reactWrapperRef = m : k = LO(this), k && document.getElementById(j) ? (this.parentVueWrapperRef = k, this.vuePortal = function(Q, G) {
      return Q(vk, { to: "#" + j, key: j }, [Q(Object.assign(h, { router: V._router }))]);
    }, k.__veauryPushVuePortal__(this.vuePortal)) : (T = hk(h), typeof R.beforeVueAppMount == "function" && R.beforeVueAppMount(T), this.__veauryVueInstance__ = T.mount(y))));
  } }, { key: "updateVueComponent", value: function(y) {
    this.__veauryVueInstance__ && (y.__fromReactSlot ? this.__veauryVueInstance__.children = typeof y.originVNode == "function" ? y.originVNode : function() {
      return y.originVNode;
    } : (this.__veauryCurrentVueComponent__ = y, this.__veauryVueInstance__.$forceUpdate()));
  } }, { key: "render", value: function() {
    return Ct.createElement(this.__veauryVueComponentContainer__, { portals: this.state.portals });
  } }]);
})();
function my(v) {
  var y = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, m = (v || console.warn("Component must be passed in applyVueInReact!"), v.__esModule && v.default && (v = v.default), Ct.forwardRef(function(R, L) {
    return Ct.createElement(GS, gc({}, R, { component: v, ref: L }, ld({}, yc, y)));
  }));
  return m.originVueComponent = v, m;
}
new Cy();
function PO(v) {
  var y = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, m = y.globalName, R = XS(v, y.combinedOption || {});
  return R.install = function(L) {
    var b = (1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}).globalName;
    return m && L.component(b || m, R), R;
  }, R;
}
function o2(v) {
  return v.replace(/-(\w)/g, function(y, m) {
    return m.toUpperCase();
  });
}
function Ey(v) {
  var y;
  return v ? typeof v == "string" ? (v = v.trim()).split(/\s*;\s*/).reduce(function(m, R) {
    return R && (R = R.split(/\s*:\s*/)).length === 2 && Object.assign(m, ld({}, o2(R[0]), R[1])), m;
  }, {}) : Gr(v) === "object" ? (y = {}, Object.keys(v).forEach(function(m) {
    y[o2(m)] = v[m];
  }), y) : {} : {};
}
function Ry(v) {
  return v ? v instanceof Array ? v : typeof v == "string" ? (v = v.trim()).split(/\s+/) : Gr(v) === "object" ? Object.keys(v).filter(function(y) {
    return !!v[y];
  }) : [] : [];
}
var VO = ["ref"];
function HO(v, y, m, R, L) {
  var b = v.props || {}, b = (b.ref, $i(b, VO)), h = {}, j = (Object.keys(v.children || {}).forEach(function(V) {
    var $ = v.children[V], Q = y2.react.vueNamedSlotsKey.find(function(G) {
      return V.indexOf(G) === 0;
    });
    Q || V === "default" ? (Q = V.replace(new RegExp("^".concat(Q)), "").replace(/^default$/, "children"), h[Q] = R.call(v.__top__, $(), m, L)) : typeof $ == "function" && (h[V] = function() {
      for (var G = arguments.length, ve = new Array(G), ue = 0; ue < G; ue++) ve[ue] = arguments[ue];
      return $.__reactArgs = ve, R($.apply(this, ve), m, L);
    });
  }), {}), k = Ey(b.style), T = Array.from(new Set(Ry(b.class))).join(" ");
  return 0 < Object.keys(k).length && (j.style = k), T !== "" && (j.className = T), Object.assign(b, oe(oe({}, j), h)), delete b.class, typeof b.ref_for == "boolean" && delete b.ref_for, b;
}
function l2(v) {
  return v.type === yk;
}
new Cy();
function C2(v, y) {
  var m;
  return 0 < ((m = v.dirs) == null ? void 0 : m.length) ? Ct.createElement(IO, { vnode: v }, y) : y;
}
var IO = (() => {
  function v(y) {
    var m;
    return gv(this, v), (m = gy(this, v, [y])).state = { prevVnode: null, savedDirectives: [], ref: null, prevProps: y }, m;
  }
  return Sy(v, Ct.Component), Sv(v, [{ key: "findDirectiveName", value: function(y) {
    var m = y.dir, R = -1;
    return [this.state.savedDirectives.find(function(L, b) {
      if (L.dir === m) return R = b, !0;
    }), R];
  } }, { key: "doDirective", value: function() {
    var y = this, b = this.state, m = b.savedDirectives;
    if (!(R = b.ref)) {
      for (var R = (this._reactInternals || this._reactInternalFiber).child; R && R.tag !== 5; ) R = R.child;
      if (!R) return;
      R = R.stateNode;
    }
    var L = this.props.vnode, b = L.dirs;
    b && (b.forEach(function(h) {
      var j, k, T, V, $, Q, G;
      h && (G = (j = t2(y.findDirectiveName(h), 2))[0], j = j[1], k = ($ = h.dir).created, T = $.beforeMount, V = $.mounted, Q = $.beforeUpdate, $ = $.updated, G ? (m[j] = oe(oe(oe({}, G), h), {}, { oldValue: G.oldValue }), G = [R, m[j], L, y.state.prevVnode], Q?.apply(null, G), $?.apply(null, G), m[j].oldValue = h.value) : (m.push(h), Q = [R, h, L, null], k?.apply(null, Q), T?.apply(null, Q), V?.apply(null, Q), h.oldValue = h.value));
    }), this.setState({ prevVnode: oe({}, L), savedDirectives: m, ref: R }));
  } }, { key: "componentDidMount", value: function() {
    this.doDirective();
  } }, { key: "componentDidUpdate", value: function(y) {
    y.vnode !== this.props.vnode && this.doDirective();
  } }, { key: "componentWillUnmount", value: function() {
    var y = this, m = this.props.vnode, h = this.state, R = h.savedDirectives, L = h.ref, b = h.prevVnode, h = m.dirs;
    h && (h.forEach(function(j) {
      var k, T, V, $;
      j && (k = ($ = t2(y.findDirectiveName(j), 2))[0]) && (T = (V = j.dir).beforeUnmount, V = V.unmounted, R[$[1]] = oe(oe({}, k), j), $ = [L, k, m, b], T?.apply(null, $), V != null) && V.apply(null, $);
    }), this.setState({ prevVnode: oe({}, m), savedDirectives: R }));
  } }, { key: "render", value: function() {
    var y = this.props;
    return y.vnode, y.children;
  } }]);
})();
function BO(v, y) {
  var m;
  return typeof v == "function" && (m = v.toString(), v.prototype !== void 0) && v.prototype.constructor === v && (m.slice(0, 5) == "class" || 2 <= Object.getOwnPropertyNames(v.prototype).length || !/^function\s+\(|^function\s+anonymous\(/.test(m) && (!(!y || !/^function\s+[A-Z]/.test(m)) || !!/\b\(this\b|\bthis[\.\[]\b/.test(m) && (!(y && !/classCallCheck\(this/.test(m)) || /^function\sdefault_\d+\s*\(/.test(m))));
}
function E2(v, y) {
  var m, R, L, b;
  return typeof ((L = v.type) == null ? void 0 : L.originReactComponent) != "function" || BO((L = v.type) == null ? void 0 : L.originReactComponent) ? ((L = v.ref) != null && L.k ? (m = (L = v.ref) == null ? void 0 : L.k, R = (L = v.ref) == null ? void 0 : L.r) : m = (L = v.ref) == null ? void 0 : L.r, m && typeof m == "string" && (b = m, m = function(h) {
    var j;
    (j = v.ref) != null && (j = j.i) != null && j.refs && ((j = oe({}, v.ref.i.refs))[b] = h, v.ref.i.refs = j), R ? R.value = h : v.ref.i.setupState && b in v.ref.i.setupState && (v.ref.i.setupState[b] = h), h && (h.__syncUpdateProps = function() {
      y.__top__ && (v.__extraData = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, y.__top__.__syncUpdateProps({}));
    });
  }, m = new Proxy(m, { get: function(h, j) {
    return h[j];
  }, set: function(h, j, k) {
    var T;
    return (T = v.ref) != null && (T = T.i) != null && T.refs && b in ((T = v.ref) == null || (T = T.i) == null ? void 0 : T.refs) && ((T = oe({}, v.ref.i.refs))[j] = k, v.ref.i.refs = T), k;
  } })), m) : null;
}
function qS(v, y) {
  return !y || y instanceof Array && y.length === 0 || (typeof y == "string" && (y = [y]), (v = oe({}, v)).props = oe({}, v.props), y.forEach(function(m) {
    v.props[m] = "";
  })), v;
}
var $O = ["style", "class"];
function u2(v, y, m, R, L, b, h) {
  var j, k, T;
  return y === "all" || y instanceof Array || (y = y ? [y] : []), v.type === f2 ? L.call(h, v.children, m, b) : typeof v.type == "string" && (y === "all" || -1 < y.indexOf(v.type)) ? (y = E2(v), T = (k = v.props || {}).style, j = k.class, k = oe(oe({}, $i(k, $O)), {}, { style: Ey(T), className: Array.from(new Set(Ry(j))).join(" ") }, y ? { ref: y } : {}), (T = v.children || k.children) && ((T = -1 < ["string", "number"].indexOf(Gr(T)) ? [T] : _y(T)).__top__ = h), C2(v, qS(mc.createElement(v.type, k, L.call(h, T, m, b)), v.scopeId))) : m([v], null, R);
}
function WO() {
  var v = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, y = 1 < arguments.length ? arguments[1] : void 0, m = 2 < arguments.length ? arguments[2] : void 0;
  return m.__syncUpdateForPureReactInVue && Object.keys(m.__syncUpdateForPureReactInVue).map(function(R) {
    var L;
    v[R] && typeof v[R] == "function" && y.__top__ && (L = v[R], v[R] = function() {
      for (var b = arguments.length, h = new Array(b), j = 0; j < b; j++) h[j] = arguments[j];
      y.__extraData = m.__syncUpdateForPureReactInVue[R].apply(this, h), y.__top__.__veaurySyncUpdateProps__({}), y.__top__.macroTaskUpdate = !0, L.apply(this, h), y.__top__ && Promise.resolve().then(function() {
        y.__extraData = null, y.__top__.__veauryMountReactComponent__(!0);
      });
    });
  }), v;
}
function s2(v, y, m) {
  return !((v = v instanceof Array && v.length === 1 ? v[0] : v) instanceof Array) && v.key == null && 1 < y.length && ((v = oe({}, v)).key = "_key_".concat(m)), v;
}
function R2(R) {
  var y = R.reactComponents, m = R.domTags, R = R.division, L = R === void 0 || R;
  return function b(h, j, k) {
    var T;
    return h && h.forEach ? (h.__top__ || (h.__top__ = this), T = [], h.forEach(function(V, $) {
      if (V && V.type !== mk) {
        if ((ve = V.type) == null || !ve.originReactComponent) return V.$$typeof || typeof V == "string" || typeof V == "number" ? void T.push(V) : l2(V) ? void (V.children.trim() !== "" && T.push(V.children.trim())) : void (V.type && (qS(ve = s2(u2(V, m, j, L, b, k, h.__top__), h, $), V.scopeId), T.push(ve)));
        var Q, G, ve = V.type.originReactComponent;
        qS(Q = s2(Q = (y = y === "all" || y instanceof Array ? y : [y]) === "all" || -1 < y.indexOf(ve) ? (V.__top__ = h.__top__, Q = HO(V, "_key_".concat($), j, b, k), G = E2(V, h), V.children && (V.children.__top__ = h.__top__), C2(V, mc.createElement(ve, oe(oe(oe({}, WO(Q, V, ve)), V.__extraData || {}), G ? { ref: G } : {})))) : l2(V) ? V.text : u2(V, m, j, L, b, k), h, $), V.scopeId), T.push(Q);
      }
    }), T.length === 1 ? T[0] : T) : h;
  };
}
var BS = R2({ reactComponents: "all", domTags: "all" });
function YO(v, y) {
  return PO(v, { combinedOption: oe({ pureTransformer: !0, defaultSlotsFormatter: BS, defaultPropsFormatter: function(m, R, L) {
    var b = {};
    return Object.keys(m).forEach(function(h) {
      var j = m[h];
      j && (j.vueFunction ? (b[h] = function() {
        for (var k = arguments.length, T = new Array(k), V = 0; V < k; V++) T[V] = arguments[V];
        return BS(j.vueFunction.apply(this, T), R, L);
      }, Object.defineProperty(b[h], "length", { get: function() {
        return j.vueFunction.length;
      } })) : j.vueSlot && (b[h] = BS(j.vueSlot, R, L)));
    }), Object.assign(m, b);
  } }, y) });
}
R2({ reactComponents: "all", domTags: "all" });
var QO = ["ref", "children", "v-slots"];
function GO(k, y, m, R, L) {
  var k = k.props || {}, T = (k.ref, k.children), h = k["v-slots"], b = h === void 0 ? {} : h, h = $i(k, QO), j = (T && (Gr(T) !== "object" || T instanceof Array || T.$$typeof ? b.default = T : b = T), null), k = (Object.keys(b || {}).forEach(function($) {
    var Q = b[$];
    (j = j || {})[$] = function() {
      if (typeof Q == "function") {
        for (var G = arguments.length, ve = new Array(G), ue = 0; ue < G; ue++) ve[ue] = arguments[ue];
        Q = Q.apply(this, ve);
      }
      return R(Q, m, L);
    };
  }), {}), T = Ey(h.style), V = Array.from(new Set(Ry(h.className))).join(" ");
  return 0 < Object.keys(T).length && (k.style = T), V !== "" && (k.class = V), Object.assign(h, oe({}, k)), delete h.className, { props: h = YS(h), slots: j };
}
function b2(v) {
  var y = v.ref;
  if (y) return Gr(y) === "object" ? function(m) {
    v.ref.current = m;
  } : typeof y == "function" ? y : void 0;
}
var qO = ["style", "class", "children"];
function c2(v, y, m, R, L, b) {
  var h, j, k, T;
  return y === "all" || y instanceof Array || (y = y ? [y] : []), v.type === Ct.Fragment ? L((h = v.props) == null ? void 0 : h.children, m) : typeof v.type == "string" && (y === "all" || -1 < y.indexOf(v.type)) ? (h = b2(v), T = (y = v.props || {}).style, k = y.class, j = y.children, y = $i(y, qO), k = Array.from(new Set(Ry(k))).join(" "), T = Ey(T), y = oe(oe(oe(oe({}, y), Object.keys(T).length === 0 ? {} : { style: T }), k ? { className: k } : {}), h ? { ref: h } : {}), Object.keys(y).length === 0 && (y = null), (T = j) && ((T = -1 < ["string", "number"].indexOf(Gr(T)) ? [T] : T instanceof Array ? _y(T) : oe({}, T)).__top__ = b), tu(v.type, y, L(T, m))) : m([v], null, R);
}
function T2(R) {
  var y = R.vueComponents, m = R.domTags, R = R.division, L = R === void 0 || R;
  return function b(h, j) {
    if (h == null) return h;
    h instanceof Array || (h = [h]);
    var k = [];
    return h.forEach(function(T, V) {
      if ((($ = T.type) == null || !$.originVueComponent) && T.type !== GS) return T.__v_isVNode || typeof T == "string" || typeof T == "number" ? void k.push(T) : void (T.type && ($ = c2(T, m, j, L, b, h.__top__), k.push($)));
      var $ = T.type.originVueComponent;
      if (T.type === GS) {
        if (!T.props.component) return void k.push(T.props.node);
        $ = T.props.component, T = oe({}, T);
        var Q = oe({}, T.props);
        delete Q.component, T.props = Q;
      }
      $ = (y = y === "all" || y instanceof Array ? y : [y]) === "all" || -1 < y.indexOf($) ? ((T = oe({}, T)).__top__ = h.__top__, V = (Q = GO(T, "_key_".concat(V), j, b)).props, Q = Q.slots, b2(T), T.children && (T.children.__top__ = h.__top__), tu($, oe({}, V), Q)) : c2(T, m, j, L, b), k.push($);
    }), (k = k.flat(1 / 0)).length === 1 ? k[0] : k;
  };
}
T2({ vueComponents: "all", domTags: "all" });
T2({ reactComponents: "all", domTags: "all" });
new Cy();
const KO = /* @__PURE__ */ gk({
  __name: "CopilotApp",
  setup(v) {
    const y = YO(oO);
    return (m, R) => (_k(), Sk(Ck(y)));
  }
}), t3 = {
  install(v) {
    v.component("CopilotApp", KO);
  }
};
export {
  KO as CopilotApp,
  t3 as default
};
