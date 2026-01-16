import { Fragment as DE, h as lu, reactive as zT, getCurrentInstance as PT, Teleport as IT, createApp as FT, Comment as VT, Text as HT, defineComponent as $T, computed as BT, createBlock as qT, openBlock as WT, unref as YT } from "vue";
function NE(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var gy = { exports: {} }, _v = {}, _y = { exports: {} }, jt = {};
var YC;
function GT() {
  if (YC) return jt;
  YC = 1;
  var c = /* @__PURE__ */ Symbol.for("react.element"), p = /* @__PURE__ */ Symbol.for("react.portal"), d = /* @__PURE__ */ Symbol.for("react.fragment"), _ = /* @__PURE__ */ Symbol.for("react.strict_mode"), w = /* @__PURE__ */ Symbol.for("react.profiler"), E = /* @__PURE__ */ Symbol.for("react.provider"), h = /* @__PURE__ */ Symbol.for("react.context"), R = /* @__PURE__ */ Symbol.for("react.forward_ref"), k = /* @__PURE__ */ Symbol.for("react.suspense"), x = /* @__PURE__ */ Symbol.for("react.memo"), M = /* @__PURE__ */ Symbol.for("react.lazy"), A = Symbol.iterator;
  function V(U) {
    return U === null || typeof U != "object" ? null : (U = A && U[A] || U["@@iterator"], typeof U == "function" ? U : null);
  }
  var $ = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, re = Object.assign, ie = {};
  function Ce(U, ee, Xe) {
    this.props = U, this.context = ee, this.refs = ie, this.updater = Xe || $;
  }
  Ce.prototype.isReactComponent = {}, Ce.prototype.setState = function(U, ee) {
    if (typeof U != "object" && typeof U != "function" && U != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, U, ee, "setState");
  }, Ce.prototype.forceUpdate = function(U) {
    this.updater.enqueueForceUpdate(this, U, "forceUpdate");
  };
  function Re() {
  }
  Re.prototype = Ce.prototype;
  function ge(U, ee, Xe) {
    this.props = U, this.context = ee, this.refs = ie, this.updater = Xe || $;
  }
  var oe = ge.prototype = new Re();
  oe.constructor = ge, re(oe, Ce.prototype), oe.isPureReactComponent = !0;
  var be = Array.isArray, de = Object.prototype.hasOwnProperty, Ye = { current: null }, He = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Be(U, ee, Xe) {
    var Ie, mt = {}, rt = null, Le = null;
    if (ee != null) for (Ie in ee.ref !== void 0 && (Le = ee.ref), ee.key !== void 0 && (rt = "" + ee.key), ee) de.call(ee, Ie) && !He.hasOwnProperty(Ie) && (mt[Ie] = ee[Ie]);
    var ct = arguments.length - 2;
    if (ct === 1) mt.children = Xe;
    else if (1 < ct) {
      for (var vt = Array(ct), Xt = 0; Xt < ct; Xt++) vt[Xt] = arguments[Xt + 2];
      mt.children = vt;
    }
    if (U && U.defaultProps) for (Ie in ct = U.defaultProps, ct) mt[Ie] === void 0 && (mt[Ie] = ct[Ie]);
    return { $$typeof: c, type: U, key: rt, ref: Le, props: mt, _owner: Ye.current };
  }
  function nt(U, ee) {
    return { $$typeof: c, type: U.type, key: ee, ref: U.ref, props: U.props, _owner: U._owner };
  }
  function ut(U) {
    return typeof U == "object" && U !== null && U.$$typeof === c;
  }
  function Ee(U) {
    var ee = { "=": "=0", ":": "=2" };
    return "$" + U.replace(/[=:]/g, function(Xe) {
      return ee[Xe];
    });
  }
  var Q = /\/+/g;
  function Z(U, ee) {
    return typeof U == "object" && U !== null && U.key != null ? Ee("" + U.key) : ee.toString(36);
  }
  function xe(U, ee, Xe, Ie, mt) {
    var rt = typeof U;
    (rt === "undefined" || rt === "boolean") && (U = null);
    var Le = !1;
    if (U === null) Le = !0;
    else switch (rt) {
      case "string":
      case "number":
        Le = !0;
        break;
      case "object":
        switch (U.$$typeof) {
          case c:
          case p:
            Le = !0;
        }
    }
    if (Le) return Le = U, mt = mt(Le), U = Ie === "" ? "." + Z(Le, 0) : Ie, be(mt) ? (Xe = "", U != null && (Xe = U.replace(Q, "$&/") + "/"), xe(mt, ee, Xe, "", function(Xt) {
      return Xt;
    })) : mt != null && (ut(mt) && (mt = nt(mt, Xe + (!mt.key || Le && Le.key === mt.key ? "" : ("" + mt.key).replace(Q, "$&/") + "/") + U)), ee.push(mt)), 1;
    if (Le = 0, Ie = Ie === "" ? "." : Ie + ":", be(U)) for (var ct = 0; ct < U.length; ct++) {
      rt = U[ct];
      var vt = Ie + Z(rt, ct);
      Le += xe(rt, ee, Xe, vt, mt);
    }
    else if (vt = V(U), typeof vt == "function") for (U = vt.call(U), ct = 0; !(rt = U.next()).done; ) rt = rt.value, vt = Ie + Z(rt, ct++), Le += xe(rt, ee, Xe, vt, mt);
    else if (rt === "object") throw ee = String(U), Error("Objects are not valid as a React child (found: " + (ee === "[object Object]" ? "object with keys {" + Object.keys(U).join(", ") + "}" : ee) + "). If you meant to render a collection of children, use an array instead.");
    return Le;
  }
  function Pe(U, ee, Xe) {
    if (U == null) return U;
    var Ie = [], mt = 0;
    return xe(U, Ie, "", "", function(rt) {
      return ee.call(Xe, rt, mt++);
    }), Ie;
  }
  function De(U) {
    if (U._status === -1) {
      var ee = U._result;
      ee = ee(), ee.then(function(Xe) {
        (U._status === 0 || U._status === -1) && (U._status = 1, U._result = Xe);
      }, function(Xe) {
        (U._status === 0 || U._status === -1) && (U._status = 2, U._result = Xe);
      }), U._status === -1 && (U._status = 0, U._result = ee);
    }
    if (U._status === 1) return U._result.default;
    throw U._result;
  }
  var we = { current: null }, F = { transition: null }, he = { ReactCurrentDispatcher: we, ReactCurrentBatchConfig: F, ReactCurrentOwner: Ye };
  function le() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return jt.Children = { map: Pe, forEach: function(U, ee, Xe) {
    Pe(U, function() {
      ee.apply(this, arguments);
    }, Xe);
  }, count: function(U) {
    var ee = 0;
    return Pe(U, function() {
      ee++;
    }), ee;
  }, toArray: function(U) {
    return Pe(U, function(ee) {
      return ee;
    }) || [];
  }, only: function(U) {
    if (!ut(U)) throw Error("React.Children.only expected to receive a single React element child.");
    return U;
  } }, jt.Component = Ce, jt.Fragment = d, jt.Profiler = w, jt.PureComponent = ge, jt.StrictMode = _, jt.Suspense = k, jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = he, jt.act = le, jt.cloneElement = function(U, ee, Xe) {
    if (U == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + U + ".");
    var Ie = re({}, U.props), mt = U.key, rt = U.ref, Le = U._owner;
    if (ee != null) {
      if (ee.ref !== void 0 && (rt = ee.ref, Le = Ye.current), ee.key !== void 0 && (mt = "" + ee.key), U.type && U.type.defaultProps) var ct = U.type.defaultProps;
      for (vt in ee) de.call(ee, vt) && !He.hasOwnProperty(vt) && (Ie[vt] = ee[vt] === void 0 && ct !== void 0 ? ct[vt] : ee[vt]);
    }
    var vt = arguments.length - 2;
    if (vt === 1) Ie.children = Xe;
    else if (1 < vt) {
      ct = Array(vt);
      for (var Xt = 0; Xt < vt; Xt++) ct[Xt] = arguments[Xt + 2];
      Ie.children = ct;
    }
    return { $$typeof: c, type: U.type, key: mt, ref: rt, props: Ie, _owner: Le };
  }, jt.createContext = function(U) {
    return U = { $$typeof: h, _currentValue: U, _currentValue2: U, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, U.Provider = { $$typeof: E, _context: U }, U.Consumer = U;
  }, jt.createElement = Be, jt.createFactory = function(U) {
    var ee = Be.bind(null, U);
    return ee.type = U, ee;
  }, jt.createRef = function() {
    return { current: null };
  }, jt.forwardRef = function(U) {
    return { $$typeof: R, render: U };
  }, jt.isValidElement = ut, jt.lazy = function(U) {
    return { $$typeof: M, _payload: { _status: -1, _result: U }, _init: De };
  }, jt.memo = function(U, ee) {
    return { $$typeof: x, type: U, compare: ee === void 0 ? null : ee };
  }, jt.startTransition = function(U) {
    var ee = F.transition;
    F.transition = {};
    try {
      U();
    } finally {
      F.transition = ee;
    }
  }, jt.unstable_act = le, jt.useCallback = function(U, ee) {
    return we.current.useCallback(U, ee);
  }, jt.useContext = function(U) {
    return we.current.useContext(U);
  }, jt.useDebugValue = function() {
  }, jt.useDeferredValue = function(U) {
    return we.current.useDeferredValue(U);
  }, jt.useEffect = function(U, ee) {
    return we.current.useEffect(U, ee);
  }, jt.useId = function() {
    return we.current.useId();
  }, jt.useImperativeHandle = function(U, ee, Xe) {
    return we.current.useImperativeHandle(U, ee, Xe);
  }, jt.useInsertionEffect = function(U, ee) {
    return we.current.useInsertionEffect(U, ee);
  }, jt.useLayoutEffect = function(U, ee) {
    return we.current.useLayoutEffect(U, ee);
  }, jt.useMemo = function(U, ee) {
    return we.current.useMemo(U, ee);
  }, jt.useReducer = function(U, ee, Xe) {
    return we.current.useReducer(U, ee, Xe);
  }, jt.useRef = function(U) {
    return we.current.useRef(U);
  }, jt.useState = function(U) {
    return we.current.useState(U);
  }, jt.useSyncExternalStore = function(U, ee, Xe) {
    return we.current.useSyncExternalStore(U, ee, Xe);
  }, jt.useTransition = function() {
    return we.current.useTransition();
  }, jt.version = "18.3.1", jt;
}
var Ev = { exports: {} };
Ev.exports;
var GC;
function QT() {
  return GC || (GC = 1, (function(c, p) {
    process.env.NODE_ENV !== "production" && (function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var d = "18.3.1", _ = /* @__PURE__ */ Symbol.for("react.element"), w = /* @__PURE__ */ Symbol.for("react.portal"), E = /* @__PURE__ */ Symbol.for("react.fragment"), h = /* @__PURE__ */ Symbol.for("react.strict_mode"), R = /* @__PURE__ */ Symbol.for("react.profiler"), k = /* @__PURE__ */ Symbol.for("react.provider"), x = /* @__PURE__ */ Symbol.for("react.context"), M = /* @__PURE__ */ Symbol.for("react.forward_ref"), A = /* @__PURE__ */ Symbol.for("react.suspense"), V = /* @__PURE__ */ Symbol.for("react.suspense_list"), $ = /* @__PURE__ */ Symbol.for("react.memo"), re = /* @__PURE__ */ Symbol.for("react.lazy"), ie = /* @__PURE__ */ Symbol.for("react.offscreen"), Ce = Symbol.iterator, Re = "@@iterator";
      function ge(S) {
        if (S === null || typeof S != "object")
          return null;
        var L = Ce && S[Ce] || S[Re];
        return typeof L == "function" ? L : null;
      }
      var oe = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, be = {
        transition: null
      }, de = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Ye = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, He = {}, Be = null;
      function nt(S) {
        Be = S;
      }
      He.setExtraStackFrame = function(S) {
        Be = S;
      }, He.getCurrentStack = null, He.getStackAddendum = function() {
        var S = "";
        Be && (S += Be);
        var L = He.getCurrentStack;
        return L && (S += L() || ""), S;
      };
      var ut = !1, Ee = !1, Q = !1, Z = !1, xe = !1, Pe = {
        ReactCurrentDispatcher: oe,
        ReactCurrentBatchConfig: be,
        ReactCurrentOwner: Ye
      };
      Pe.ReactDebugCurrentFrame = He, Pe.ReactCurrentActQueue = de;
      function De(S) {
        {
          for (var L = arguments.length, G = new Array(L > 1 ? L - 1 : 0), J = 1; J < L; J++)
            G[J - 1] = arguments[J];
          F("warn", S, G);
        }
      }
      function we(S) {
        {
          for (var L = arguments.length, G = new Array(L > 1 ? L - 1 : 0), J = 1; J < L; J++)
            G[J - 1] = arguments[J];
          F("error", S, G);
        }
      }
      function F(S, L, G) {
        {
          var J = Pe.ReactDebugCurrentFrame, _e = J.getStackAddendum();
          _e !== "" && (L += "%s", G = G.concat([_e]));
          var ot = G.map(function(Ne) {
            return String(Ne);
          });
          ot.unshift("Warning: " + L), Function.prototype.apply.call(console[S], console, ot);
        }
      }
      var he = {};
      function le(S, L) {
        {
          var G = S.constructor, J = G && (G.displayName || G.name) || "ReactClass", _e = J + "." + L;
          if (he[_e])
            return;
          we("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", L, J), he[_e] = !0;
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
        enqueueForceUpdate: function(S, L, G) {
          le(S, "forceUpdate");
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
        enqueueReplaceState: function(S, L, G, J) {
          le(S, "replaceState");
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
        enqueueSetState: function(S, L, G, J) {
          le(S, "setState");
        }
      }, ee = Object.assign, Xe = {};
      Object.freeze(Xe);
      function Ie(S, L, G) {
        this.props = S, this.context = L, this.refs = Xe, this.updater = G || U;
      }
      Ie.prototype.isReactComponent = {}, Ie.prototype.setState = function(S, L) {
        if (typeof S != "object" && typeof S != "function" && S != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, S, L, "setState");
      }, Ie.prototype.forceUpdate = function(S) {
        this.updater.enqueueForceUpdate(this, S, "forceUpdate");
      };
      {
        var mt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, rt = function(S, L) {
          Object.defineProperty(Ie.prototype, S, {
            get: function() {
              De("%s(...) is deprecated in plain JavaScript React classes. %s", L[0], L[1]);
            }
          });
        };
        for (var Le in mt)
          mt.hasOwnProperty(Le) && rt(Le, mt[Le]);
      }
      function ct() {
      }
      ct.prototype = Ie.prototype;
      function vt(S, L, G) {
        this.props = S, this.context = L, this.refs = Xe, this.updater = G || U;
      }
      var Xt = vt.prototype = new ct();
      Xt.constructor = vt, ee(Xt, Ie.prototype), Xt.isPureReactComponent = !0;
      function Un() {
        var S = {
          current: null
        };
        return Object.seal(S), S;
      }
      var Lr = Array.isArray;
      function kn(S) {
        return Lr(S);
      }
      function ur(S) {
        {
          var L = typeof Symbol == "function" && Symbol.toStringTag, G = L && S[Symbol.toStringTag] || S.constructor.name || "Object";
          return G;
        }
      }
      function Yn(S) {
        try {
          return Gn(S), !1;
        } catch {
          return !0;
        }
      }
      function Gn(S) {
        return "" + S;
      }
      function Jr(S) {
        if (Yn(S))
          return we("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ur(S)), Gn(S);
      }
      function _i(S, L, G) {
        var J = S.displayName;
        if (J)
          return J;
        var _e = L.displayName || L.name || "";
        return _e !== "" ? G + "(" + _e + ")" : G;
      }
      function ma(S) {
        return S.displayName || "Context";
      }
      function tr(S) {
        if (S == null)
          return null;
        if (typeof S.tag == "number" && we("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof S == "function")
          return S.displayName || S.name || null;
        if (typeof S == "string")
          return S;
        switch (S) {
          case E:
            return "Fragment";
          case w:
            return "Portal";
          case R:
            return "Profiler";
          case h:
            return "StrictMode";
          case A:
            return "Suspense";
          case V:
            return "SuspenseList";
        }
        if (typeof S == "object")
          switch (S.$$typeof) {
            case x:
              var L = S;
              return ma(L) + ".Consumer";
            case k:
              var G = S;
              return ma(G._context) + ".Provider";
            case M:
              return _i(S, S.render, "ForwardRef");
            case $:
              var J = S.displayName || null;
              return J !== null ? J : tr(S.type) || "Memo";
            case re: {
              var _e = S, ot = _e._payload, Ne = _e._init;
              try {
                return tr(Ne(ot));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Tn = Object.prototype.hasOwnProperty, Qn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, xr, ei, zn;
      zn = {};
      function br(S) {
        if (Tn.call(S, "ref")) {
          var L = Object.getOwnPropertyDescriptor(S, "ref").get;
          if (L && L.isReactWarning)
            return !1;
        }
        return S.ref !== void 0;
      }
      function ya(S) {
        if (Tn.call(S, "key")) {
          var L = Object.getOwnPropertyDescriptor(S, "key").get;
          if (L && L.isReactWarning)
            return !1;
        }
        return S.key !== void 0;
      }
      function ti(S, L) {
        var G = function() {
          xr || (xr = !0, we("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", L));
        };
        G.isReactWarning = !0, Object.defineProperty(S, "key", {
          get: G,
          configurable: !0
        });
      }
      function Si(S, L) {
        var G = function() {
          ei || (ei = !0, we("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", L));
        };
        G.isReactWarning = !0, Object.defineProperty(S, "ref", {
          get: G,
          configurable: !0
        });
      }
      function ke(S) {
        if (typeof S.ref == "string" && Ye.current && S.__self && Ye.current.stateNode !== S.__self) {
          var L = tr(Ye.current.type);
          zn[L] || (we('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L, S.ref), zn[L] = !0);
        }
      }
      var Ze = function(S, L, G, J, _e, ot, Ne) {
        var ft = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: _,
          // Built-in properties that belong on the element
          type: S,
          key: L,
          ref: G,
          props: Ne,
          // Record the component responsible for creating this element.
          _owner: ot
        };
        return ft._store = {}, Object.defineProperty(ft._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(ft, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: J
        }), Object.defineProperty(ft, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: _e
        }), Object.freeze && (Object.freeze(ft.props), Object.freeze(ft)), ft;
      };
      function Rt(S, L, G) {
        var J, _e = {}, ot = null, Ne = null, ft = null, Lt = null;
        if (L != null) {
          br(L) && (Ne = L.ref, ke(L)), ya(L) && (Jr(L.key), ot = "" + L.key), ft = L.__self === void 0 ? null : L.__self, Lt = L.__source === void 0 ? null : L.__source;
          for (J in L)
            Tn.call(L, J) && !Qn.hasOwnProperty(J) && (_e[J] = L[J]);
        }
        var Ft = arguments.length - 2;
        if (Ft === 1)
          _e.children = G;
        else if (Ft > 1) {
          for (var fn = Array(Ft), tn = 0; tn < Ft; tn++)
            fn[tn] = arguments[tn + 2];
          Object.freeze && Object.freeze(fn), _e.children = fn;
        }
        if (S && S.defaultProps) {
          var kt = S.defaultProps;
          for (J in kt)
            _e[J] === void 0 && (_e[J] = kt[J]);
        }
        if (ot || Ne) {
          var nn = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
          ot && ti(_e, nn), Ne && Si(_e, nn);
        }
        return Ze(S, ot, Ne, ft, Lt, Ye.current, _e);
      }
      function Gt(S, L) {
        var G = Ze(S.type, L, S.ref, S._self, S._source, S._owner, S.props);
        return G;
      }
      function un(S, L, G) {
        if (S == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + S + ".");
        var J, _e = ee({}, S.props), ot = S.key, Ne = S.ref, ft = S._self, Lt = S._source, Ft = S._owner;
        if (L != null) {
          br(L) && (Ne = L.ref, Ft = Ye.current), ya(L) && (Jr(L.key), ot = "" + L.key);
          var fn;
          S.type && S.type.defaultProps && (fn = S.type.defaultProps);
          for (J in L)
            Tn.call(L, J) && !Qn.hasOwnProperty(J) && (L[J] === void 0 && fn !== void 0 ? _e[J] = fn[J] : _e[J] = L[J]);
        }
        var tn = arguments.length - 2;
        if (tn === 1)
          _e.children = G;
        else if (tn > 1) {
          for (var kt = Array(tn), nn = 0; nn < tn; nn++)
            kt[nn] = arguments[nn + 2];
          _e.children = kt;
        }
        return Ze(S.type, ot, Ne, ft, Lt, Ft, _e);
      }
      function _n(S) {
        return typeof S == "object" && S !== null && S.$$typeof === _;
      }
      var pn = ".", nr = ":";
      function sn(S) {
        var L = /[=:]/g, G = {
          "=": "=0",
          ":": "=2"
        }, J = S.replace(L, function(_e) {
          return G[_e];
        });
        return "$" + J;
      }
      var Jt = !1, Zt = /\/+/g;
      function ga(S) {
        return S.replace(Zt, "$&/");
      }
      function Rr(S, L) {
        return typeof S == "object" && S !== null && S.key != null ? (Jr(S.key), sn("" + S.key)) : L.toString(36);
      }
      function La(S, L, G, J, _e) {
        var ot = typeof S;
        (ot === "undefined" || ot === "boolean") && (S = null);
        var Ne = !1;
        if (S === null)
          Ne = !0;
        else
          switch (ot) {
            case "string":
            case "number":
              Ne = !0;
              break;
            case "object":
              switch (S.$$typeof) {
                case _:
                case w:
                  Ne = !0;
              }
          }
        if (Ne) {
          var ft = S, Lt = _e(ft), Ft = J === "" ? pn + Rr(ft, 0) : J;
          if (kn(Lt)) {
            var fn = "";
            Ft != null && (fn = ga(Ft) + "/"), La(Lt, L, fn, "", function(yd) {
              return yd;
            });
          } else Lt != null && (_n(Lt) && (Lt.key && (!ft || ft.key !== Lt.key) && Jr(Lt.key), Lt = Gt(
            Lt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            G + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (Lt.key && (!ft || ft.key !== Lt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              ga("" + Lt.key) + "/"
            ) : "") + Ft
          )), L.push(Lt));
          return 1;
        }
        var tn, kt, nn = 0, Sn = J === "" ? pn : J + nr;
        if (kn(S))
          for (var jo = 0; jo < S.length; jo++)
            tn = S[jo], kt = Sn + Rr(tn, jo), nn += La(tn, L, G, kt, _e);
        else {
          var cs = ge(S);
          if (typeof cs == "function") {
            var Zi = S;
            cs === Zi.entries && (Jt || De("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Jt = !0);
            for (var fs = cs.call(Zi), Sl, md = 0; !(Sl = fs.next()).done; )
              tn = Sl.value, kt = Sn + Rr(tn, md++), nn += La(tn, L, G, kt, _e);
          } else if (ot === "object") {
            var bc = String(S);
            throw new Error("Objects are not valid as a React child (found: " + (bc === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : bc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return nn;
      }
      function Ki(S, L, G) {
        if (S == null)
          return S;
        var J = [], _e = 0;
        return La(S, J, "", "", function(ot) {
          return L.call(G, ot, _e++);
        }), J;
      }
      function fl(S) {
        var L = 0;
        return Ki(S, function() {
          L++;
        }), L;
      }
      function dl(S, L, G) {
        Ki(S, function() {
          L.apply(this, arguments);
        }, G);
      }
      function bo(S) {
        return Ki(S, function(L) {
          return L;
        }) || [];
      }
      function Ro(S) {
        if (!_n(S))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return S;
      }
      function pl(S) {
        var L = {
          $$typeof: x,
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
        L.Provider = {
          $$typeof: k,
          _context: L
        };
        var G = !1, J = !1, _e = !1;
        {
          var ot = {
            $$typeof: x,
            _context: L
          };
          Object.defineProperties(ot, {
            Provider: {
              get: function() {
                return J || (J = !0, we("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), L.Provider;
              },
              set: function(Ne) {
                L.Provider = Ne;
              }
            },
            _currentValue: {
              get: function() {
                return L._currentValue;
              },
              set: function(Ne) {
                L._currentValue = Ne;
              }
            },
            _currentValue2: {
              get: function() {
                return L._currentValue2;
              },
              set: function(Ne) {
                L._currentValue2 = Ne;
              }
            },
            _threadCount: {
              get: function() {
                return L._threadCount;
              },
              set: function(Ne) {
                L._threadCount = Ne;
              }
            },
            Consumer: {
              get: function() {
                return G || (G = !0, we("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), L.Consumer;
              }
            },
            displayName: {
              get: function() {
                return L.displayName;
              },
              set: function(Ne) {
                _e || (De("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Ne), _e = !0);
              }
            }
          }), L.Consumer = ot;
        }
        return L._currentRenderer = null, L._currentRenderer2 = null, L;
      }
      var Or = -1, jr = 0, sr = 1, Ci = 2;
      function ni(S) {
        if (S._status === Or) {
          var L = S._result, G = L();
          if (G.then(function(ot) {
            if (S._status === jr || S._status === Or) {
              var Ne = S;
              Ne._status = sr, Ne._result = ot;
            }
          }, function(ot) {
            if (S._status === jr || S._status === Or) {
              var Ne = S;
              Ne._status = Ci, Ne._result = ot;
            }
          }), S._status === Or) {
            var J = S;
            J._status = jr, J._result = G;
          }
        }
        if (S._status === sr) {
          var _e = S._result;
          return _e === void 0 && we(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, _e), "default" in _e || we(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, _e), _e.default;
        } else
          throw S._result;
      }
      function Ei(S) {
        var L = {
          // We use these fields to store the result.
          _status: Or,
          _result: S
        }, G = {
          $$typeof: re,
          _payload: L,
          _init: ni
        };
        {
          var J, _e;
          Object.defineProperties(G, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return J;
              },
              set: function(ot) {
                we("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), J = ot, Object.defineProperty(G, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return _e;
              },
              set: function(ot) {
                we("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), _e = ot, Object.defineProperty(G, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return G;
      }
      function wi(S) {
        S != null && S.$$typeof === $ ? we("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof S != "function" ? we("forwardRef requires a render function but was given %s.", S === null ? "null" : typeof S) : S.length !== 0 && S.length !== 2 && we("forwardRef render functions accept exactly two parameters: props and ref. %s", S.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), S != null && (S.defaultProps != null || S.propTypes != null) && we("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var L = {
          $$typeof: M,
          render: S
        };
        {
          var G;
          Object.defineProperty(L, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return G;
            },
            set: function(J) {
              G = J, !S.name && !S.displayName && (S.displayName = J);
            }
          });
        }
        return L;
      }
      var O;
      O = /* @__PURE__ */ Symbol.for("react.module.reference");
      function ue(S) {
        return !!(typeof S == "string" || typeof S == "function" || S === E || S === R || xe || S === h || S === A || S === V || Z || S === ie || ut || Ee || Q || typeof S == "object" && S !== null && (S.$$typeof === re || S.$$typeof === $ || S.$$typeof === k || S.$$typeof === x || S.$$typeof === M || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        S.$$typeof === O || S.getModuleId !== void 0));
      }
      function Me(S, L) {
        ue(S) || we("memo: The first argument must be a component. Instead received: %s", S === null ? "null" : typeof S);
        var G = {
          $$typeof: $,
          type: S,
          compare: L === void 0 ? null : L
        };
        {
          var J;
          Object.defineProperty(G, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return J;
            },
            set: function(_e) {
              J = _e, !S.name && !S.displayName && (S.displayName = _e);
            }
          });
        }
        return G;
      }
      function We() {
        var S = oe.current;
        return S === null && we(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), S;
      }
      function Et(S) {
        var L = We();
        if (S._context !== void 0) {
          var G = S._context;
          G.Consumer === S ? we("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : G.Provider === S && we("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return L.useContext(S);
      }
      function _t(S) {
        var L = We();
        return L.useState(S);
      }
      function Mt(S, L, G) {
        var J = We();
        return J.useReducer(S, L, G);
      }
      function Tt(S) {
        var L = We();
        return L.useRef(S);
      }
      function Dn(S, L) {
        var G = We();
        return G.useEffect(S, L);
      }
      function cn(S, L) {
        var G = We();
        return G.useInsertionEffect(S, L);
      }
      function vn(S, L) {
        var G = We();
        return G.useLayoutEffect(S, L);
      }
      function cr(S, L) {
        var G = We();
        return G.useCallback(S, L);
      }
      function ri(S, L) {
        var G = We();
        return G.useMemo(S, L);
      }
      function ai(S, L, G) {
        var J = We();
        return J.useImperativeHandle(S, L, G);
      }
      function wt(S, L) {
        {
          var G = We();
          return G.useDebugValue(S, L);
        }
      }
      function bt() {
        var S = We();
        return S.useTransition();
      }
      function ii(S) {
        var L = We();
        return L.useDeferredValue(S);
      }
      function vl() {
        var S = We();
        return S.useId();
      }
      function hl(S, L, G) {
        var J = We();
        return J.useSyncExternalStore(S, L, G);
      }
      var ko = 0, su, To, Zr, os, Ar, wc, xc;
      function cu() {
      }
      cu.__reactDisabledLog = !0;
      function Do() {
        {
          if (ko === 0) {
            su = console.log, To = console.info, Zr = console.warn, os = console.error, Ar = console.group, wc = console.groupCollapsed, xc = console.groupEnd;
            var S = {
              configurable: !0,
              enumerable: !0,
              value: cu,
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
          ko++;
        }
      }
      function _a() {
        {
          if (ko--, ko === 0) {
            var S = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: ee({}, S, {
                value: su
              }),
              info: ee({}, S, {
                value: To
              }),
              warn: ee({}, S, {
                value: Zr
              }),
              error: ee({}, S, {
                value: os
              }),
              group: ee({}, S, {
                value: Ar
              }),
              groupCollapsed: ee({}, S, {
                value: wc
              }),
              groupEnd: ee({}, S, {
                value: xc
              })
            });
          }
          ko < 0 && we("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var oi = Pe.ReactCurrentDispatcher, li;
      function fu(S, L, G) {
        {
          if (li === void 0)
            try {
              throw Error();
            } catch (_e) {
              var J = _e.stack.trim().match(/\n( *(at )?)/);
              li = J && J[1] || "";
            }
          return `
` + li + S;
        }
      }
      var ml = !1, No;
      {
        var du = typeof WeakMap == "function" ? WeakMap : Map;
        No = new du();
      }
      function pu(S, L) {
        if (!S || ml)
          return "";
        {
          var G = No.get(S);
          if (G !== void 0)
            return G;
        }
        var J;
        ml = !0;
        var _e = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var ot;
        ot = oi.current, oi.current = null, Do();
        try {
          if (L) {
            var Ne = function() {
              throw Error();
            };
            if (Object.defineProperty(Ne.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Ne, []);
              } catch (Sn) {
                J = Sn;
              }
              Reflect.construct(S, [], Ne);
            } else {
              try {
                Ne.call();
              } catch (Sn) {
                J = Sn;
              }
              S.call(Ne.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Sn) {
              J = Sn;
            }
            S();
          }
        } catch (Sn) {
          if (Sn && J && typeof Sn.stack == "string") {
            for (var ft = Sn.stack.split(`
`), Lt = J.stack.split(`
`), Ft = ft.length - 1, fn = Lt.length - 1; Ft >= 1 && fn >= 0 && ft[Ft] !== Lt[fn]; )
              fn--;
            for (; Ft >= 1 && fn >= 0; Ft--, fn--)
              if (ft[Ft] !== Lt[fn]) {
                if (Ft !== 1 || fn !== 1)
                  do
                    if (Ft--, fn--, fn < 0 || ft[Ft] !== Lt[fn]) {
                      var tn = `
` + ft[Ft].replace(" at new ", " at ");
                      return S.displayName && tn.includes("<anonymous>") && (tn = tn.replace("<anonymous>", S.displayName)), typeof S == "function" && No.set(S, tn), tn;
                    }
                  while (Ft >= 1 && fn >= 0);
                break;
              }
          }
        } finally {
          ml = !1, oi.current = ot, _a(), Error.prepareStackTrace = _e;
        }
        var kt = S ? S.displayName || S.name : "", nn = kt ? fu(kt) : "";
        return typeof S == "function" && No.set(S, nn), nn;
      }
      function Xi(S, L, G) {
        return pu(S, !1);
      }
      function vd(S) {
        var L = S.prototype;
        return !!(L && L.isReactComponent);
      }
      function Ji(S, L, G) {
        if (S == null)
          return "";
        if (typeof S == "function")
          return pu(S, vd(S));
        if (typeof S == "string")
          return fu(S);
        switch (S) {
          case A:
            return fu("Suspense");
          case V:
            return fu("SuspenseList");
        }
        if (typeof S == "object")
          switch (S.$$typeof) {
            case M:
              return Xi(S.render);
            case $:
              return Ji(S.type, L, G);
            case re: {
              var J = S, _e = J._payload, ot = J._init;
              try {
                return Ji(ot(_e), L, G);
              } catch {
              }
            }
          }
        return "";
      }
      var Ht = {}, vu = Pe.ReactDebugCurrentFrame;
      function It(S) {
        if (S) {
          var L = S._owner, G = Ji(S.type, S._source, L ? L.type : null);
          vu.setExtraStackFrame(G);
        } else
          vu.setExtraStackFrame(null);
      }
      function ls(S, L, G, J, _e) {
        {
          var ot = Function.call.bind(Tn);
          for (var Ne in S)
            if (ot(S, Ne)) {
              var ft = void 0;
              try {
                if (typeof S[Ne] != "function") {
                  var Lt = Error((J || "React class") + ": " + G + " type `" + Ne + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[Ne] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Lt.name = "Invariant Violation", Lt;
                }
                ft = S[Ne](L, Ne, J, G, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ft) {
                ft = Ft;
              }
              ft && !(ft instanceof Error) && (It(_e), we("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", J || "React class", G, Ne, typeof ft), It(null)), ft instanceof Error && !(ft.message in Ht) && (Ht[ft.message] = !0, It(_e), we("Failed %s type: %s", G, ft.message), It(null));
            }
        }
      }
      function xi(S) {
        if (S) {
          var L = S._owner, G = Ji(S.type, S._source, L ? L.type : null);
          nt(G);
        } else
          nt(null);
      }
      var gt;
      gt = !1;
      function hu() {
        if (Ye.current) {
          var S = tr(Ye.current.type);
          if (S)
            return `

Check the render method of \`` + S + "`.";
        }
        return "";
      }
      function fr(S) {
        if (S !== void 0) {
          var L = S.fileName.replace(/^.*[\\\/]/, ""), G = S.lineNumber;
          return `

Check your code at ` + L + ":" + G + ".";
        }
        return "";
      }
      function bi(S) {
        return S != null ? fr(S.__source) : "";
      }
      var Ur = {};
      function Ri(S) {
        var L = hu();
        if (!L) {
          var G = typeof S == "string" ? S : S.displayName || S.name;
          G && (L = `

Check the top-level render call using <` + G + ">.");
        }
        return L;
      }
      function hn(S, L) {
        if (!(!S._store || S._store.validated || S.key != null)) {
          S._store.validated = !0;
          var G = Ri(L);
          if (!Ur[G]) {
            Ur[G] = !0;
            var J = "";
            S && S._owner && S._owner !== Ye.current && (J = " It was passed a child from " + tr(S._owner.type) + "."), xi(S), we('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', G, J), xi(null);
          }
        }
      }
      function en(S, L) {
        if (typeof S == "object") {
          if (kn(S))
            for (var G = 0; G < S.length; G++) {
              var J = S[G];
              _n(J) && hn(J, L);
            }
          else if (_n(S))
            S._store && (S._store.validated = !0);
          else if (S) {
            var _e = ge(S);
            if (typeof _e == "function" && _e !== S.entries)
              for (var ot = _e.call(S), Ne; !(Ne = ot.next()).done; )
                _n(Ne.value) && hn(Ne.value, L);
          }
        }
      }
      function Mo(S) {
        {
          var L = S.type;
          if (L == null || typeof L == "string")
            return;
          var G;
          if (typeof L == "function")
            G = L.propTypes;
          else if (typeof L == "object" && (L.$$typeof === M || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          L.$$typeof === $))
            G = L.propTypes;
          else
            return;
          if (G) {
            var J = tr(L);
            ls(G, S.props, "prop", J, S);
          } else if (L.PropTypes !== void 0 && !gt) {
            gt = !0;
            var _e = tr(L);
            we("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _e || "Unknown");
          }
          typeof L.getDefaultProps == "function" && !L.getDefaultProps.isReactClassApproved && we("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Kn(S) {
        {
          for (var L = Object.keys(S.props), G = 0; G < L.length; G++) {
            var J = L[G];
            if (J !== "children" && J !== "key") {
              xi(S), we("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", J), xi(null);
              break;
            }
          }
          S.ref !== null && (xi(S), we("Invalid attribute `ref` supplied to `React.Fragment`."), xi(null));
        }
      }
      function zr(S, L, G) {
        var J = ue(S);
        if (!J) {
          var _e = "";
          (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (_e += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ot = bi(L);
          ot ? _e += ot : _e += hu();
          var Ne;
          S === null ? Ne = "null" : kn(S) ? Ne = "array" : S !== void 0 && S.$$typeof === _ ? (Ne = "<" + (tr(S.type) || "Unknown") + " />", _e = " Did you accidentally export a JSX literal instead of a component?") : Ne = typeof S, we("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ne, _e);
        }
        var ft = Rt.apply(this, arguments);
        if (ft == null)
          return ft;
        if (J)
          for (var Lt = 2; Lt < arguments.length; Lt++)
            en(arguments[Lt], S);
        return S === E ? Kn(ft) : Mo(ft), ft;
      }
      var Oa = !1;
      function yl(S) {
        var L = zr.bind(null, S);
        return L.type = S, Oa || (Oa = !0, De("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(L, "type", {
          enumerable: !1,
          get: function() {
            return De("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: S
            }), S;
          }
        }), L;
      }
      function us(S, L, G) {
        for (var J = un.apply(this, arguments), _e = 2; _e < arguments.length; _e++)
          en(arguments[_e], J.type);
        return Mo(J), J;
      }
      function ss(S, L) {
        var G = be.transition;
        be.transition = {};
        var J = be.transition;
        be.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          S();
        } finally {
          if (be.transition = G, G === null && J._updatedFibers) {
            var _e = J._updatedFibers.size;
            _e > 10 && De("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), J._updatedFibers.clear();
          }
        }
      }
      var Lo = !1, gl = null;
      function hd(S) {
        if (gl === null)
          try {
            var L = ("require" + Math.random()).slice(0, 7), G = c && c[L];
            gl = G.call(c, "timers").setImmediate;
          } catch {
            gl = function(_e) {
              Lo === !1 && (Lo = !0, typeof MessageChannel > "u" && we("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var ot = new MessageChannel();
              ot.port1.onmessage = _e, ot.port2.postMessage(void 0);
            };
          }
        return gl(S);
      }
      var ja = 0, ui = !1;
      function ki(S) {
        {
          var L = ja;
          ja++, de.current === null && (de.current = []);
          var G = de.isBatchingLegacy, J;
          try {
            if (de.isBatchingLegacy = !0, J = S(), !G && de.didScheduleLegacyUpdate) {
              var _e = de.current;
              _e !== null && (de.didScheduleLegacyUpdate = !1, Oo(_e));
            }
          } catch (kt) {
            throw Aa(L), kt;
          } finally {
            de.isBatchingLegacy = G;
          }
          if (J !== null && typeof J == "object" && typeof J.then == "function") {
            var ot = J, Ne = !1, ft = {
              then: function(kt, nn) {
                Ne = !0, ot.then(function(Sn) {
                  Aa(L), ja === 0 ? mu(Sn, kt, nn) : kt(Sn);
                }, function(Sn) {
                  Aa(L), nn(Sn);
                });
              }
            };
            return !ui && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Ne || (ui = !0, we("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), ft;
          } else {
            var Lt = J;
            if (Aa(L), ja === 0) {
              var Ft = de.current;
              Ft !== null && (Oo(Ft), de.current = null);
              var fn = {
                then: function(kt, nn) {
                  de.current === null ? (de.current = [], mu(Lt, kt, nn)) : kt(Lt);
                }
              };
              return fn;
            } else {
              var tn = {
                then: function(kt, nn) {
                  kt(Lt);
                }
              };
              return tn;
            }
          }
        }
      }
      function Aa(S) {
        S !== ja - 1 && we("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), ja = S;
      }
      function mu(S, L, G) {
        {
          var J = de.current;
          if (J !== null)
            try {
              Oo(J), hd(function() {
                J.length === 0 ? (de.current = null, L(S)) : mu(S, L, G);
              });
            } catch (_e) {
              G(_e);
            }
          else
            L(S);
        }
      }
      var yu = !1;
      function Oo(S) {
        if (!yu) {
          yu = !0;
          var L = 0;
          try {
            for (; L < S.length; L++) {
              var G = S[L];
              do
                G = G(!0);
              while (G !== null);
            }
            S.length = 0;
          } catch (J) {
            throw S = S.slice(L + 1), J;
          } finally {
            yu = !1;
          }
        }
      }
      var _l = zr, gu = us, _u = yl, si = {
        map: Ki,
        forEach: dl,
        count: fl,
        toArray: bo,
        only: Ro
      };
      p.Children = si, p.Component = Ie, p.Fragment = E, p.Profiler = R, p.PureComponent = vt, p.StrictMode = h, p.Suspense = A, p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pe, p.act = ki, p.cloneElement = gu, p.createContext = pl, p.createElement = _l, p.createFactory = _u, p.createRef = Un, p.forwardRef = wi, p.isValidElement = _n, p.lazy = Ei, p.memo = Me, p.startTransition = ss, p.unstable_act = ki, p.useCallback = cr, p.useContext = Et, p.useDebugValue = wt, p.useDeferredValue = ii, p.useEffect = Dn, p.useId = vl, p.useImperativeHandle = ai, p.useInsertionEffect = cn, p.useLayoutEffect = vn, p.useMemo = ri, p.useReducer = Mt, p.useRef = Tt, p.useState = _t, p.useSyncExternalStore = hl, p.useTransition = bt, p.version = d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  })(Ev, Ev.exports)), Ev.exports;
}
var QC;
function xv() {
  return QC || (QC = 1, process.env.NODE_ENV === "production" ? _y.exports = GT() : _y.exports = QT()), _y.exports;
}
var KC;
function KT() {
  if (KC) return _v;
  KC = 1;
  var c = xv(), p = /* @__PURE__ */ Symbol.for("react.element"), d = /* @__PURE__ */ Symbol.for("react.fragment"), _ = Object.prototype.hasOwnProperty, w = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, E = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(R, k, x) {
    var M, A = {}, V = null, $ = null;
    x !== void 0 && (V = "" + x), k.key !== void 0 && (V = "" + k.key), k.ref !== void 0 && ($ = k.ref);
    for (M in k) _.call(k, M) && !E.hasOwnProperty(M) && (A[M] = k[M]);
    if (R && R.defaultProps) for (M in k = R.defaultProps, k) A[M] === void 0 && (A[M] = k[M]);
    return { $$typeof: p, type: R, key: V, ref: $, props: A, _owner: w.current };
  }
  return _v.Fragment = d, _v.jsx = h, _v.jsxs = h, _v;
}
var Sv = {};
var XC;
function XT() {
  return XC || (XC = 1, process.env.NODE_ENV !== "production" && (function() {
    var c = xv(), p = /* @__PURE__ */ Symbol.for("react.element"), d = /* @__PURE__ */ Symbol.for("react.portal"), _ = /* @__PURE__ */ Symbol.for("react.fragment"), w = /* @__PURE__ */ Symbol.for("react.strict_mode"), E = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.provider"), R = /* @__PURE__ */ Symbol.for("react.context"), k = /* @__PURE__ */ Symbol.for("react.forward_ref"), x = /* @__PURE__ */ Symbol.for("react.suspense"), M = /* @__PURE__ */ Symbol.for("react.suspense_list"), A = /* @__PURE__ */ Symbol.for("react.memo"), V = /* @__PURE__ */ Symbol.for("react.lazy"), $ = /* @__PURE__ */ Symbol.for("react.offscreen"), re = Symbol.iterator, ie = "@@iterator";
    function Ce(O) {
      if (O === null || typeof O != "object")
        return null;
      var ue = re && O[re] || O[ie];
      return typeof ue == "function" ? ue : null;
    }
    var Re = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ge(O) {
      {
        for (var ue = arguments.length, Me = new Array(ue > 1 ? ue - 1 : 0), We = 1; We < ue; We++)
          Me[We - 1] = arguments[We];
        oe("error", O, Me);
      }
    }
    function oe(O, ue, Me) {
      {
        var We = Re.ReactDebugCurrentFrame, Et = We.getStackAddendum();
        Et !== "" && (ue += "%s", Me = Me.concat([Et]));
        var _t = Me.map(function(Mt) {
          return String(Mt);
        });
        _t.unshift("Warning: " + ue), Function.prototype.apply.call(console[O], console, _t);
      }
    }
    var be = !1, de = !1, Ye = !1, He = !1, Be = !1, nt;
    nt = /* @__PURE__ */ Symbol.for("react.module.reference");
    function ut(O) {
      return !!(typeof O == "string" || typeof O == "function" || O === _ || O === E || Be || O === w || O === x || O === M || He || O === $ || be || de || Ye || typeof O == "object" && O !== null && (O.$$typeof === V || O.$$typeof === A || O.$$typeof === h || O.$$typeof === R || O.$$typeof === k || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      O.$$typeof === nt || O.getModuleId !== void 0));
    }
    function Ee(O, ue, Me) {
      var We = O.displayName;
      if (We)
        return We;
      var Et = ue.displayName || ue.name || "";
      return Et !== "" ? Me + "(" + Et + ")" : Me;
    }
    function Q(O) {
      return O.displayName || "Context";
    }
    function Z(O) {
      if (O == null)
        return null;
      if (typeof O.tag == "number" && ge("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof O == "function")
        return O.displayName || O.name || null;
      if (typeof O == "string")
        return O;
      switch (O) {
        case _:
          return "Fragment";
        case d:
          return "Portal";
        case E:
          return "Profiler";
        case w:
          return "StrictMode";
        case x:
          return "Suspense";
        case M:
          return "SuspenseList";
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case R:
            var ue = O;
            return Q(ue) + ".Consumer";
          case h:
            var Me = O;
            return Q(Me._context) + ".Provider";
          case k:
            return Ee(O, O.render, "ForwardRef");
          case A:
            var We = O.displayName || null;
            return We !== null ? We : Z(O.type) || "Memo";
          case V: {
            var Et = O, _t = Et._payload, Mt = Et._init;
            try {
              return Z(Mt(_t));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var xe = Object.assign, Pe = 0, De, we, F, he, le, U, ee;
    function Xe() {
    }
    Xe.__reactDisabledLog = !0;
    function Ie() {
      {
        if (Pe === 0) {
          De = console.log, we = console.info, F = console.warn, he = console.error, le = console.group, U = console.groupCollapsed, ee = console.groupEnd;
          var O = {
            configurable: !0,
            enumerable: !0,
            value: Xe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: O,
            log: O,
            warn: O,
            error: O,
            group: O,
            groupCollapsed: O,
            groupEnd: O
          });
        }
        Pe++;
      }
    }
    function mt() {
      {
        if (Pe--, Pe === 0) {
          var O = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: xe({}, O, {
              value: De
            }),
            info: xe({}, O, {
              value: we
            }),
            warn: xe({}, O, {
              value: F
            }),
            error: xe({}, O, {
              value: he
            }),
            group: xe({}, O, {
              value: le
            }),
            groupCollapsed: xe({}, O, {
              value: U
            }),
            groupEnd: xe({}, O, {
              value: ee
            })
          });
        }
        Pe < 0 && ge("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var rt = Re.ReactCurrentDispatcher, Le;
    function ct(O, ue, Me) {
      {
        if (Le === void 0)
          try {
            throw Error();
          } catch (Et) {
            var We = Et.stack.trim().match(/\n( *(at )?)/);
            Le = We && We[1] || "";
          }
        return `
` + Le + O;
      }
    }
    var vt = !1, Xt;
    {
      var Un = typeof WeakMap == "function" ? WeakMap : Map;
      Xt = new Un();
    }
    function Lr(O, ue) {
      if (!O || vt)
        return "";
      {
        var Me = Xt.get(O);
        if (Me !== void 0)
          return Me;
      }
      var We;
      vt = !0;
      var Et = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _t;
      _t = rt.current, rt.current = null, Ie();
      try {
        if (ue) {
          var Mt = function() {
            throw Error();
          };
          if (Object.defineProperty(Mt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Mt, []);
            } catch (wt) {
              We = wt;
            }
            Reflect.construct(O, [], Mt);
          } else {
            try {
              Mt.call();
            } catch (wt) {
              We = wt;
            }
            O.call(Mt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (wt) {
            We = wt;
          }
          O();
        }
      } catch (wt) {
        if (wt && We && typeof wt.stack == "string") {
          for (var Tt = wt.stack.split(`
`), Dn = We.stack.split(`
`), cn = Tt.length - 1, vn = Dn.length - 1; cn >= 1 && vn >= 0 && Tt[cn] !== Dn[vn]; )
            vn--;
          for (; cn >= 1 && vn >= 0; cn--, vn--)
            if (Tt[cn] !== Dn[vn]) {
              if (cn !== 1 || vn !== 1)
                do
                  if (cn--, vn--, vn < 0 || Tt[cn] !== Dn[vn]) {
                    var cr = `
` + Tt[cn].replace(" at new ", " at ");
                    return O.displayName && cr.includes("<anonymous>") && (cr = cr.replace("<anonymous>", O.displayName)), typeof O == "function" && Xt.set(O, cr), cr;
                  }
                while (cn >= 1 && vn >= 0);
              break;
            }
        }
      } finally {
        vt = !1, rt.current = _t, mt(), Error.prepareStackTrace = Et;
      }
      var ri = O ? O.displayName || O.name : "", ai = ri ? ct(ri) : "";
      return typeof O == "function" && Xt.set(O, ai), ai;
    }
    function kn(O, ue, Me) {
      return Lr(O, !1);
    }
    function ur(O) {
      var ue = O.prototype;
      return !!(ue && ue.isReactComponent);
    }
    function Yn(O, ue, Me) {
      if (O == null)
        return "";
      if (typeof O == "function")
        return Lr(O, ur(O));
      if (typeof O == "string")
        return ct(O);
      switch (O) {
        case x:
          return ct("Suspense");
        case M:
          return ct("SuspenseList");
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case k:
            return kn(O.render);
          case A:
            return Yn(O.type, ue, Me);
          case V: {
            var We = O, Et = We._payload, _t = We._init;
            try {
              return Yn(_t(Et), ue, Me);
            } catch {
            }
          }
        }
      return "";
    }
    var Gn = Object.prototype.hasOwnProperty, Jr = {}, _i = Re.ReactDebugCurrentFrame;
    function ma(O) {
      if (O) {
        var ue = O._owner, Me = Yn(O.type, O._source, ue ? ue.type : null);
        _i.setExtraStackFrame(Me);
      } else
        _i.setExtraStackFrame(null);
    }
    function tr(O, ue, Me, We, Et) {
      {
        var _t = Function.call.bind(Gn);
        for (var Mt in O)
          if (_t(O, Mt)) {
            var Tt = void 0;
            try {
              if (typeof O[Mt] != "function") {
                var Dn = Error((We || "React class") + ": " + Me + " type `" + Mt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof O[Mt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Dn.name = "Invariant Violation", Dn;
              }
              Tt = O[Mt](ue, Mt, We, Me, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (cn) {
              Tt = cn;
            }
            Tt && !(Tt instanceof Error) && (ma(Et), ge("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", We || "React class", Me, Mt, typeof Tt), ma(null)), Tt instanceof Error && !(Tt.message in Jr) && (Jr[Tt.message] = !0, ma(Et), ge("Failed %s type: %s", Me, Tt.message), ma(null));
          }
      }
    }
    var Tn = Array.isArray;
    function Qn(O) {
      return Tn(O);
    }
    function xr(O) {
      {
        var ue = typeof Symbol == "function" && Symbol.toStringTag, Me = ue && O[Symbol.toStringTag] || O.constructor.name || "Object";
        return Me;
      }
    }
    function ei(O) {
      try {
        return zn(O), !1;
      } catch {
        return !0;
      }
    }
    function zn(O) {
      return "" + O;
    }
    function br(O) {
      if (ei(O))
        return ge("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", xr(O)), zn(O);
    }
    var ya = Re.ReactCurrentOwner, ti = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Si, ke;
    function Ze(O) {
      if (Gn.call(O, "ref")) {
        var ue = Object.getOwnPropertyDescriptor(O, "ref").get;
        if (ue && ue.isReactWarning)
          return !1;
      }
      return O.ref !== void 0;
    }
    function Rt(O) {
      if (Gn.call(O, "key")) {
        var ue = Object.getOwnPropertyDescriptor(O, "key").get;
        if (ue && ue.isReactWarning)
          return !1;
      }
      return O.key !== void 0;
    }
    function Gt(O, ue) {
      typeof O.ref == "string" && ya.current;
    }
    function un(O, ue) {
      {
        var Me = function() {
          Si || (Si = !0, ge("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ue));
        };
        Me.isReactWarning = !0, Object.defineProperty(O, "key", {
          get: Me,
          configurable: !0
        });
      }
    }
    function _n(O, ue) {
      {
        var Me = function() {
          ke || (ke = !0, ge("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ue));
        };
        Me.isReactWarning = !0, Object.defineProperty(O, "ref", {
          get: Me,
          configurable: !0
        });
      }
    }
    var pn = function(O, ue, Me, We, Et, _t, Mt) {
      var Tt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: p,
        // Built-in properties that belong on the element
        type: O,
        key: ue,
        ref: Me,
        props: Mt,
        // Record the component responsible for creating this element.
        _owner: _t
      };
      return Tt._store = {}, Object.defineProperty(Tt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Tt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: We
      }), Object.defineProperty(Tt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Et
      }), Object.freeze && (Object.freeze(Tt.props), Object.freeze(Tt)), Tt;
    };
    function nr(O, ue, Me, We, Et) {
      {
        var _t, Mt = {}, Tt = null, Dn = null;
        Me !== void 0 && (br(Me), Tt = "" + Me), Rt(ue) && (br(ue.key), Tt = "" + ue.key), Ze(ue) && (Dn = ue.ref, Gt(ue, Et));
        for (_t in ue)
          Gn.call(ue, _t) && !ti.hasOwnProperty(_t) && (Mt[_t] = ue[_t]);
        if (O && O.defaultProps) {
          var cn = O.defaultProps;
          for (_t in cn)
            Mt[_t] === void 0 && (Mt[_t] = cn[_t]);
        }
        if (Tt || Dn) {
          var vn = typeof O == "function" ? O.displayName || O.name || "Unknown" : O;
          Tt && un(Mt, vn), Dn && _n(Mt, vn);
        }
        return pn(O, Tt, Dn, Et, We, ya.current, Mt);
      }
    }
    var sn = Re.ReactCurrentOwner, Jt = Re.ReactDebugCurrentFrame;
    function Zt(O) {
      if (O) {
        var ue = O._owner, Me = Yn(O.type, O._source, ue ? ue.type : null);
        Jt.setExtraStackFrame(Me);
      } else
        Jt.setExtraStackFrame(null);
    }
    var ga;
    ga = !1;
    function Rr(O) {
      return typeof O == "object" && O !== null && O.$$typeof === p;
    }
    function La() {
      {
        if (sn.current) {
          var O = Z(sn.current.type);
          if (O)
            return `

Check the render method of \`` + O + "`.";
        }
        return "";
      }
    }
    function Ki(O) {
      return "";
    }
    var fl = {};
    function dl(O) {
      {
        var ue = La();
        if (!ue) {
          var Me = typeof O == "string" ? O : O.displayName || O.name;
          Me && (ue = `

Check the top-level render call using <` + Me + ">.");
        }
        return ue;
      }
    }
    function bo(O, ue) {
      {
        if (!O._store || O._store.validated || O.key != null)
          return;
        O._store.validated = !0;
        var Me = dl(ue);
        if (fl[Me])
          return;
        fl[Me] = !0;
        var We = "";
        O && O._owner && O._owner !== sn.current && (We = " It was passed a child from " + Z(O._owner.type) + "."), Zt(O), ge('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Me, We), Zt(null);
      }
    }
    function Ro(O, ue) {
      {
        if (typeof O != "object")
          return;
        if (Qn(O))
          for (var Me = 0; Me < O.length; Me++) {
            var We = O[Me];
            Rr(We) && bo(We, ue);
          }
        else if (Rr(O))
          O._store && (O._store.validated = !0);
        else if (O) {
          var Et = Ce(O);
          if (typeof Et == "function" && Et !== O.entries)
            for (var _t = Et.call(O), Mt; !(Mt = _t.next()).done; )
              Rr(Mt.value) && bo(Mt.value, ue);
        }
      }
    }
    function pl(O) {
      {
        var ue = O.type;
        if (ue == null || typeof ue == "string")
          return;
        var Me;
        if (typeof ue == "function")
          Me = ue.propTypes;
        else if (typeof ue == "object" && (ue.$$typeof === k || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ue.$$typeof === A))
          Me = ue.propTypes;
        else
          return;
        if (Me) {
          var We = Z(ue);
          tr(Me, O.props, "prop", We, O);
        } else if (ue.PropTypes !== void 0 && !ga) {
          ga = !0;
          var Et = Z(ue);
          ge("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Et || "Unknown");
        }
        typeof ue.getDefaultProps == "function" && !ue.getDefaultProps.isReactClassApproved && ge("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Or(O) {
      {
        for (var ue = Object.keys(O.props), Me = 0; Me < ue.length; Me++) {
          var We = ue[Me];
          if (We !== "children" && We !== "key") {
            Zt(O), ge("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", We), Zt(null);
            break;
          }
        }
        O.ref !== null && (Zt(O), ge("Invalid attribute `ref` supplied to `React.Fragment`."), Zt(null));
      }
    }
    var jr = {};
    function sr(O, ue, Me, We, Et, _t) {
      {
        var Mt = ut(O);
        if (!Mt) {
          var Tt = "";
          (O === void 0 || typeof O == "object" && O !== null && Object.keys(O).length === 0) && (Tt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Dn = Ki();
          Dn ? Tt += Dn : Tt += La();
          var cn;
          O === null ? cn = "null" : Qn(O) ? cn = "array" : O !== void 0 && O.$$typeof === p ? (cn = "<" + (Z(O.type) || "Unknown") + " />", Tt = " Did you accidentally export a JSX literal instead of a component?") : cn = typeof O, ge("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", cn, Tt);
        }
        var vn = nr(O, ue, Me, Et, _t);
        if (vn == null)
          return vn;
        if (Mt) {
          var cr = ue.children;
          if (cr !== void 0)
            if (We)
              if (Qn(cr)) {
                for (var ri = 0; ri < cr.length; ri++)
                  Ro(cr[ri], O);
                Object.freeze && Object.freeze(cr);
              } else
                ge("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ro(cr, O);
        }
        if (Gn.call(ue, "key")) {
          var ai = Z(O), wt = Object.keys(ue).filter(function(vl) {
            return vl !== "key";
          }), bt = wt.length > 0 ? "{key: someKey, " + wt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!jr[ai + bt]) {
            var ii = wt.length > 0 ? "{" + wt.join(": ..., ") + ": ...}" : "{}";
            ge(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, bt, ai, ii, ai), jr[ai + bt] = !0;
          }
        }
        return O === _ ? Or(vn) : pl(vn), vn;
      }
    }
    function Ci(O, ue, Me) {
      return sr(O, ue, Me, !0);
    }
    function ni(O, ue, Me) {
      return sr(O, ue, Me, !1);
    }
    var Ei = ni, wi = Ci;
    Sv.Fragment = _, Sv.jsx = Ei, Sv.jsxs = wi;
  })()), Sv;
}
var JC;
function JT() {
  return JC || (JC = 1, process.env.NODE_ENV === "production" ? gy.exports = KT() : gy.exports = XT()), gy.exports;
}
var D = JT(), Ue = xv();
const Za = /* @__PURE__ */ NE(Ue), ZC = (c) => Symbol.iterator in c, eE = (c) => (
  // HACK: avoid checking entries type
  "entries" in c
), tE = (c, p) => {
  const d = c instanceof Map ? c : new Map(c.entries()), _ = p instanceof Map ? p : new Map(p.entries());
  if (d.size !== _.size)
    return !1;
  for (const [w, E] of d)
    if (!_.has(w) || !Object.is(E, _.get(w)))
      return !1;
  return !0;
}, ZT = (c, p) => {
  const d = c[Symbol.iterator](), _ = p[Symbol.iterator]();
  let w = d.next(), E = _.next();
  for (; !w.done && !E.done; ) {
    if (!Object.is(w.value, E.value))
      return !1;
    w = d.next(), E = _.next();
  }
  return !!w.done && !!E.done;
};
function e3(c, p) {
  return Object.is(c, p) ? !0 : typeof c != "object" || c === null || typeof p != "object" || p === null || Object.getPrototypeOf(c) !== Object.getPrototypeOf(p) ? !1 : ZC(c) && ZC(p) ? eE(c) && eE(p) ? tE(c, p) : ZT(c, p) : tE(
    { entries: () => Object.entries(c) },
    { entries: () => Object.entries(p) }
  );
}
function uu(c) {
  const p = Za.useRef(void 0);
  return (d) => {
    const _ = c(d);
    return e3(p.current, _) ? p.current : p.current = _;
  };
}
const t3 = "_sidebar_or261_1", n3 = "_sidebarNav_or261_24", r3 = "_sectionWrapper_or261_32", a3 = "_sectionHeader_or261_37", i3 = "_active_or261_48", o3 = "_sidebarItemInHeader_or261_68", l3 = "_plusButton_or261_71", u3 = "_sidebarItem_or261_68", s3 = "_sidebarIcon_or261_138", c3 = "_sidebarLabel_or261_148", f3 = "_plusIcon_or261_173", d3 = "_rotated_or261_178", Rn = {
  sidebar: t3,
  sidebarNav: n3,
  sectionWrapper: r3,
  sectionHeader: a3,
  active: i3,
  sidebarItemInHeader: o3,
  plusButton: l3,
  sidebarItem: u3,
  sidebarIcon: s3,
  sidebarLabel: c3,
  plusIcon: f3,
  rotated: d3
};
const p3 = (c) => c.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), v3 = (c) => c.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (p, d, _) => _ ? _.toUpperCase() : d.toLowerCase()
), nE = (c) => {
  const p = v3(c);
  return p.charAt(0).toUpperCase() + p.slice(1);
}, ME = (...c) => c.filter((p, d, _) => !!p && p.trim() !== "" && _.indexOf(p) === d).join(" ").trim(), h3 = (c) => {
  for (const p in c)
    if (p.startsWith("aria-") || p === "role" || p === "title")
      return !0;
};
var m3 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const y3 = Ue.forwardRef(
  ({
    color: c = "currentColor",
    size: p = 24,
    strokeWidth: d = 2,
    absoluteStrokeWidth: _,
    className: w = "",
    children: E,
    iconNode: h,
    ...R
  }, k) => Ue.createElement(
    "svg",
    {
      ref: k,
      ...m3,
      width: p,
      height: p,
      stroke: c,
      strokeWidth: _ ? Number(d) * 24 / Number(p) : d,
      className: ME("lucide", w),
      ...!E && !h3(R) && { "aria-hidden": "true" },
      ...R
    },
    [
      ...h.map(([x, M]) => Ue.createElement(x, M)),
      ...Array.isArray(E) ? E : [E]
    ]
  )
);
const Se = (c, p) => {
  const d = Ue.forwardRef(
    ({ className: _, ...w }, E) => Ue.createElement(y3, {
      ref: E,
      iconNode: p,
      className: ME(
        `lucide-${p3(nE(c))}`,
        `lucide-${c}`,
        _
      ),
      ...w
    })
  );
  return d.displayName = nE(c), d;
};
const g3 = [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse"
    }
  ]
], _3 = Se("activity", g3);
const S3 = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], C3 = Se("arrow-down", S3);
const E3 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], w3 = Se("arrow-left", E3);
const x3 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], b3 = Se("arrow-right", x3);
const R3 = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], k3 = Se("arrow-up", R3);
const T3 = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
], D3 = Se("award", T3);
const N3 = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742",
      key: "178tsu"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05", key: "1hqiys" }]
], M3 = Se("bell-off", N3);
const L3 = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
], O3 = Se("bell", L3);
const j3 = [
  ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", key: "1fy3hk" }]
], A3 = Se("bookmark", j3);
const U3 = [
  [
    "path",
    {
      d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",
      key: "lc1i9w"
    }
  ],
  ["path", { d: "m7 16.5-4.74-2.85", key: "1o9zyk" }],
  ["path", { d: "m7 16.5 5-3", key: "va8pkn" }],
  ["path", { d: "M7 16.5v5.17", key: "jnp8gn" }],
  [
    "path",
    {
      d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",
      key: "8zsnat"
    }
  ],
  ["path", { d: "m17 16.5-5-3", key: "8arw3v" }],
  ["path", { d: "m17 16.5 4.74-2.85", key: "8rfmw" }],
  ["path", { d: "M17 16.5v5.17", key: "k6z78m" }],
  [
    "path",
    {
      d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",
      key: "1xygjf"
    }
  ],
  ["path", { d: "M12 8 7.26 5.15", key: "1vbdud" }],
  ["path", { d: "m12 8 4.74-2.85", key: "3rx089" }],
  ["path", { d: "M12 13.5V8", key: "1io7kd" }]
], z3 = Se("boxes", U3);
const P3 = [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
], I3 = Se("briefcase", P3);
const F3 = [
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M12 6h.01", key: "1vi96p" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M16 6h.01", key: "1x0f13" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M8 6h.01", key: "1dz90k" }],
  ["path", { d: "M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3", key: "cabbwy" }],
  ["rect", { x: "4", y: "2", width: "16", height: "20", rx: "2", key: "1uxh74" }]
], V3 = Se("building", F3);
const H3 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], $3 = Se("calendar", H3);
const B3 = [
  [
    "path",
    {
      d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",
      key: "5owen"
    }
  ],
  ["circle", { cx: "7", cy: "17", r: "2", key: "u2ysq9" }],
  ["path", { d: "M9 17h6", key: "r8uit2" }],
  ["circle", { cx: "17", cy: "17", r: "2", key: "axvx0g" }]
], q3 = Se("car", B3);
const W3 = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "m19 9-5 5-4-4-3 3", key: "2osh9i" }]
], Y3 = Se("chart-line", W3);
const G3 = [
  ["path", { d: "M5 21v-6", key: "1hz6c0" }],
  ["path", { d: "M12 21V9", key: "uvy0l4" }],
  ["path", { d: "M19 21V3", key: "11j9sm" }]
], Q3 = Se("chart-no-axes-column-increasing", G3);
const K3 = [
  [
    "path",
    {
      d: "M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",
      key: "pzmjnu"
    }
  ],
  ["path", { d: "M21.21 15.89A10 10 0 1 1 8 2.83", key: "k2fpak" }]
], X3 = Se("chart-pie", K3);
const J3 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Z3 = Se("check", J3);
const e4 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], LE = Se("chevron-down", e4);
const t4 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], n4 = Se("chevron-left", t4);
const r4 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], a4 = Se("chevron-right", r4);
const i4 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], o4 = Se("chevron-up", i4);
const l4 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], u4 = Se("circle-alert", l4);
const s4 = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], c4 = Se("circle-check-big", s4);
const f4 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], d4 = Se("circle-question-mark", f4);
const p4 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], v4 = Se("circle-x", p4);
const h4 = [
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], m4 = Se("clock", h4);
const y4 = [
  ["path", { d: "M10 2v2", key: "7u0qdc" }],
  ["path", { d: "M14 2v2", key: "6buw04" }],
  [
    "path",
    {
      d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",
      key: "pwadti"
    }
  ],
  ["path", { d: "M6 2v2", key: "colzsn" }]
], g4 = Se("coffee", y4);
const _4 = [
  [
    "path",
    {
      d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
      key: "9ktpf1"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], S4 = Se("compass", _4);
const C4 = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], E4 = Se("copy", C4);
const w4 = [
  [
    "path",
    {
      d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",
      key: "1vdc57"
    }
  ],
  ["path", { d: "M5 21h14", key: "11awu3" }]
], x4 = Se("crown", w4);
const b4 = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], R4 = Se("download", b4);
const k4 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], T4 = Se("external-link", k4);
const D4 = [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
], N4 = Se("eye-off", D4);
const M4 = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], L4 = Se("eye", M4);
const O4 = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], j4 = Se("file-text", O4);
const A4 = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }]
], U4 = Se("file", A4);
const z4 = [
  [
    "path",
    {
      d: "M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",
      key: "1jaruq"
    }
  ]
], P4 = Se("flag", z4);
const I4 = [
  [
    "path",
    {
      d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
      key: "usdka0"
    }
  ]
], F4 = Se("folder-open", I4);
const V4 = [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ]
], H4 = Se("folder", V4);
const $4 = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
], B4 = Se("funnel", $4);
const q4 = [
  ["rect", { x: "3", y: "8", width: "18", height: "4", rx: "1", key: "bkv52" }],
  ["path", { d: "M12 8v13", key: "1c76mn" }],
  ["path", { d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7", key: "6wjy6b" }],
  [
    "path",
    {
      d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
      key: "1ihvrl"
    }
  ]
], W4 = Se("gift", q4);
const Y4 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
], G4 = Se("globe", Y4);
const Q4 = [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }
  ]
], K4 = Se("heart", Q4);
const X4 = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
], J4 = Se("house", X4);
const Z4 = [
  ["path", { d: "M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8", key: "18ogeb" }]
], e5 = Se("infinity", Z4);
const t5 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], n5 = Se("info", t5);
const r5 = [
  ["path", { d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4", key: "g0fldk" }],
  ["path", { d: "m21 2-9.6 9.6", key: "1j0ho8" }],
  ["circle", { cx: "7.5", cy: "15.5", r: "5.5", key: "yqb3hr" }]
], a5 = Se("key", r5);
const i5 = [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb"
    }
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }]
], o5 = Se("lightbulb", i5);
const l5 = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], u5 = Se("link", l5);
const s5 = [
  ["path", { d: "M13 5h8", key: "a7qcls" }],
  ["path", { d: "M13 12h8", key: "h98zly" }],
  ["path", { d: "M13 19h8", key: "c3s6r1" }],
  ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
  ["path", { d: "m3 7 2 2 4-4", key: "1obspn" }]
], c5 = Se("list-checks", s5);
const f5 = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]
], d5 = Se("lock-open", f5);
const p5 = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], v5 = Se("lock", p5);
const h5 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
], m5 = Se("mail", h5);
const y5 = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
], g5 = Se("map-pin", y5);
const _5 = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
], S5 = Se("message-circle", _5);
const C5 = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ]
], E5 = Se("message-square", C5);
const w5 = [["path", { d: "M5 12h14", key: "1ays0h" }]], x5 = Se("minus", w5);
const b5 = [
  ["polygon", { points: "3 11 22 2 13 21 11 13 3 11", key: "1ltx0t" }]
], R5 = Se("navigation", b5);
const k5 = [
  [
    "path",
    {
      d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",
      key: "1miecu"
    }
  ]
], T5 = Se("paperclip", k5);
const D5 = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], N5 = Se("pause", D5);
const M5 = [
  ["path", { d: "M13 21h8", key: "1jsn5i" }],
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ]
], L5 = Se("pen-line", M5);
const O5 = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
], j5 = Se("phone", O5);
const A5 = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], U5 = Se("play", A5);
const z5 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], P5 = Se("plus", z5);
const I5 = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], F5 = Se("refresh-cw", I5);
const V5 = [
  ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
  ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
  ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
  ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }]
], H5 = Se("repeat", V5);
const $5 = [
  [
    "path",
    {
      d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
      key: "m3kijz"
    }
  ],
  [
    "path",
    {
      d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
      key: "1fmvmk"
    }
  ],
  ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0", key: "1f8sc4" }],
  ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }]
], B5 = Se("rocket", $5);
const q5 = [
  ["path", { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8", key: "1p45f6" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }]
], W5 = Se("rotate-cw", q5);
const Y5 = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], G5 = Se("search", Y5);
const Q5 = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
], K5 = Se("send", Q5);
const X5 = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], J5 = Se("settings", X5);
const Z5 = [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]
], eD = Se("share-2", Z5);
const tD = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], nD = Se("shield-check", tD);
const rD = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
], aD = Se("shield", rD);
const iD = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  [
    "path",
    {
      d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
      key: "ohrbg2"
    }
  ]
], oD = Se("square-pen", iD);
const lD = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
], uD = Se("star", lD);
const sD = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
], cD = Se("target", sD);
const fD = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
], dD = Se("timer", fD);
const pD = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], OE = Se("trash-2", pD);
const vD = [
  ["path", { d: "M16 17h6v-6", key: "t6n2it" }],
  ["path", { d: "m22 17-8.5-8.5-5 5L2 7", key: "x473p" }]
], hD = Se("trending-down", vD);
const mD = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
], yD = Se("trending-up", mD);
const gD = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], _D = Se("triangle-alert", gD);
const SD = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], CD = Se("upload", SD);
const ED = [
  ["path", { d: "m16 11 2 2 4-4", key: "9rsbq5" }],
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
], wD = Se("user-check", ED);
const xD = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
], bD = Se("user-plus", xD);
const RD = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], kD = Se("user", RD);
const TD = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
], DD = Se("users", TD);
const ND = [
  ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2", key: "by2w9f" }],
  ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4", key: "xkn7yn" }],
  ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2", key: "1cgmvn" }]
], MD = Se("workflow", ND);
const LD = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], OD = Se("x", LD);
const jD = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
], AD = Se("zap", jD), UD = "_expandedContent_17c6w_2", zD = "_searchWrapper_17c6w_17", PD = "_searchContainer_17c6w_23", ID = "_searchDropdown_17c6w_33", FD = "_dropdownItem_17c6w_69", VD = "_selected_17c6w_84", HD = "_personAvatar_17c6w_97", $D = "_avatarPlaceholder_17c6w_111", BD = "_personInfo_17c6w_123", qD = "_personName_17c6w_131", WD = "_personTitle_17c6w_140", YD = "_dropdownEmpty_17c6w_148", GD = "_searchIcon_17c6w_155", QD = "_searchInput_17c6w_160", KD = "_suggestionsList_17c6w_172", XD = "_suggestionItemWrapper_17c6w_191", JD = "_suggestionItem_17c6w_191", ZD = "_statusIcon_17c6w_219", eN = "_moreButton_17c6w_222", tN = "_childItem_17c6w_225", nN = "_moreButtonWrapper_17c6w_270", rN = "_actionMenu_17c6w_291", aN = "_actionMenuItem_17c6w_306", iN = "_deleteAction_17c6w_328", oN = "_loadingState_17c6w_345", lN = "_loadingSpinner_17c6w_355", uN = "_emptyState_17c6w_369", sN = "_errorState_17c6w_376", Nt = {
  expandedContent: UD,
  searchWrapper: zD,
  searchContainer: PD,
  searchDropdown: ID,
  dropdownItem: FD,
  selected: VD,
  personAvatar: HD,
  avatarPlaceholder: $D,
  personInfo: BD,
  personName: qD,
  personTitle: WD,
  dropdownEmpty: YD,
  searchIcon: GD,
  searchInput: QD,
  suggestionsList: KD,
  suggestionItemWrapper: XD,
  suggestionItem: JD,
  statusIcon: ZD,
  moreButton: eN,
  childItem: tN,
  moreButtonWrapper: nN,
  actionMenu: rN,
  actionMenuItem: aN,
  deleteAction: iN,
  loadingState: oN,
  loadingSpinner: lN,
  emptyState: uN,
  errorState: sN
}, rE = (c) => {
  let p;
  const d = /* @__PURE__ */ new Set(), _ = (x, M) => {
    const A = typeof x == "function" ? x(p) : x;
    if (!Object.is(A, p)) {
      const V = p;
      p = M ?? (typeof A != "object" || A === null) ? A : Object.assign({}, p, A), d.forEach(($) => $(p, V));
    }
  }, w = () => p, R = { setState: _, getState: w, getInitialState: () => k, subscribe: (x) => (d.add(x), () => d.delete(x)) }, k = p = c(_, w, R);
  return R;
}, cN = ((c) => c ? rE(c) : rE), fN = (c) => c;
function dN(c, p = fN) {
  const d = Za.useSyncExternalStore(
    c.subscribe,
    Za.useCallback(() => p(c.getState()), [c, p]),
    Za.useCallback(() => p(c.getInitialState()), [c, p])
  );
  return Za.useDebugValue(d), d;
}
const aE = (c) => {
  const p = cN(c), d = (_) => dN(p, _);
  return Object.assign(d, p), d;
}, u_ = ((c) => c ? aE(c) : aE), iE = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_API_TOKEN: "eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwiemlwIjoiREVGIn0.80JF4GDyuRDLOL-QY00YfR6Fay453BuRvHU4GCLGygKJPFZec943TW27XN3H_y9rwuIsD0ohEmfwpPYgffGYrsOEiurNB6f2.O-hNdRqiLDnEQcb9qNcd7w.SQt-ihs91TJZyg0rx6VAHZo5m4BI4GYWHxdpMeALLC-0LBARR5elHbbg-Eu0HiZEtdmD1oNW4FlAPpHWdRT6qOUVS0wRBJi9we74fRlz7YiziEnvdyvZg-bhJdm4nEE7XOS7X24hfKa6rfX-b3v0Q7_ynv3wxrIsYrQcfhNb6-w.1c9ON3neeQ_M-zzUHNb6wnlsHaG2PNfKbzwvwv2saXs", VITE_API_URL: "https://xh2o-yths-38lt.n7c.xano.io/api", VITE_DATA_SOURCE: "staging", VITE_LLM_ENDPOINT: "http://localhost:3001", VITE_USER_ID: "3", VITE_USER_NAME: "Dynamo Denis" }, wv = /* @__PURE__ */ new Map(), Sy = (c) => {
  const p = wv.get(c);
  return p ? Object.fromEntries(
    Object.entries(p.stores).map(([d, _]) => [d, _.getState()])
  ) : {};
}, pN = (c, p, d) => {
  if (c === void 0)
    return {
      type: "untracked",
      connection: p.connect(d)
    };
  const _ = wv.get(d.name);
  if (_)
    return { type: "tracked", store: c, ..._ };
  const w = {
    connection: p.connect(d),
    stores: {}
  };
  return wv.set(d.name, w), { type: "tracked", store: c, ...w };
}, vN = (c, p) => {
  if (p === void 0) return;
  const d = wv.get(c);
  d && (delete d.stores[p], Object.keys(d.stores).length === 0 && wv.delete(c));
}, hN = (c) => {
  var p, d;
  if (!c) return;
  const _ = c.split(`
`), w = _.findIndex(
    (h) => h.includes("api.setState")
  );
  if (w < 0) return;
  const E = ((p = _[w + 1]) == null ? void 0 : p.trim()) || "";
  return (d = /.+ (.+) .+/.exec(E)) == null ? void 0 : d[1];
}, mN = (c, p = {}) => (d, _, w) => {
  const { enabled: E, anonymousActionType: h, store: R, ...k } = p;
  let x;
  try {
    x = (E ?? (iE ? "production" : void 0) !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__;
  } catch {
  }
  if (!x)
    return c(d, _, w);
  const { connection: M, ...A } = pN(R, x, k);
  let V = !0;
  w.setState = ((ie, Ce, Re) => {
    const ge = d(ie, Ce);
    if (!V) return ge;
    const oe = Re === void 0 ? {
      type: h || hN(new Error().stack) || "anonymous"
    } : typeof Re == "string" ? { type: Re } : Re;
    return R === void 0 ? (M?.send(oe, _()), ge) : (M?.send(
      {
        ...oe,
        type: `${R}/${oe.type}`
      },
      {
        ...Sy(k.name),
        [R]: w.getState()
      }
    ), ge);
  }), w.devtools = {
    cleanup: () => {
      M && typeof M.unsubscribe == "function" && M.unsubscribe(), vN(k.name, R);
    }
  };
  const $ = (...ie) => {
    const Ce = V;
    V = !1, d(...ie), V = Ce;
  }, re = c(w.setState, _, w);
  if (A.type === "untracked" ? M?.init(re) : (A.stores[A.store] = w, M?.init(
    Object.fromEntries(
      Object.entries(A.stores).map(([ie, Ce]) => [
        ie,
        ie === A.store ? re : Ce.getState()
      ])
    )
  )), w.dispatchFromDevtools && typeof w.dispatch == "function") {
    let ie = !1;
    const Ce = w.dispatch;
    w.dispatch = (...Re) => {
      (iE ? "production" : void 0) !== "production" && Re[0].type === "__setState" && !ie && (console.warn(
        '[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'
      ), ie = !0), Ce(...Re);
    };
  }
  return M.subscribe((ie) => {
    var Ce;
    switch (ie.type) {
      case "ACTION":
        if (typeof ie.payload != "string") {
          console.error(
            "[zustand devtools middleware] Unsupported action format"
          );
          return;
        }
        return K1(
          ie.payload,
          (Re) => {
            if (Re.type === "__setState") {
              if (R === void 0) {
                $(Re.state);
                return;
              }
              Object.keys(Re.state).length !== 1 && console.error(
                `
                    [zustand devtools middleware] Unsupported __setState action format.
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `
              );
              const ge = Re.state[R];
              if (ge == null)
                return;
              JSON.stringify(w.getState()) !== JSON.stringify(ge) && $(ge);
              return;
            }
            w.dispatchFromDevtools && typeof w.dispatch == "function" && w.dispatch(Re);
          }
        );
      case "DISPATCH":
        switch (ie.payload.type) {
          case "RESET":
            return $(re), R === void 0 ? M?.init(w.getState()) : M?.init(Sy(k.name));
          case "COMMIT":
            if (R === void 0) {
              M?.init(w.getState());
              return;
            }
            return M?.init(Sy(k.name));
          case "ROLLBACK":
            return K1(ie.state, (Re) => {
              if (R === void 0) {
                $(Re), M?.init(w.getState());
                return;
              }
              $(Re[R]), M?.init(Sy(k.name));
            });
          case "JUMP_TO_STATE":
          case "JUMP_TO_ACTION":
            return K1(ie.state, (Re) => {
              if (R === void 0) {
                $(Re);
                return;
              }
              JSON.stringify(w.getState()) !== JSON.stringify(Re[R]) && $(Re[R]);
            });
          case "IMPORT_STATE": {
            const { nextLiftedState: Re } = ie.payload, ge = (Ce = Re.computedStates.slice(-1)[0]) == null ? void 0 : Ce.state;
            if (!ge) return;
            $(R === void 0 ? ge : ge[R]), M?.send(
              null,
              // FIXME no-any
              Re
            );
            return;
          }
          case "PAUSE_RECORDING":
            return V = !V;
        }
        return;
    }
  }), re;
}, s_ = mN, K1 = (c, p) => {
  let d;
  try {
    d = JSON.parse(c);
  } catch (_) {
    console.error(
      "[zustand devtools middleware] Could not parse the received json",
      _
    );
  }
  d !== void 0 && p(d);
}, Ma = u_()(
  s_(
    (c) => ({
      token: null,
      baseUrl: null,
      dataSource: null,
      user_id: 0,
      copilot_llm_endpoint: "",
      user_name: "",
      setVariables: (p) => c((d) => ({
        token: p.token !== void 0 ? p.token : d.token,
        baseUrl: p.baseUrl !== void 0 ? p.baseUrl : d.baseUrl,
        dataSource: p.dataSource !== void 0 ? p.dataSource : d.dataSource,
        user_id: p.user_id !== void 0 ? p.user_id : d.user_id,
        copilot_llm_endpoint: p.copilot_llm_endpoint !== void 0 ? p.copilot_llm_endpoint : d.copilot_llm_endpoint,
        user_name: p.user_name !== void 0 ? p.user_name : d.user_name
      }))
    }),
    { name: "VariablesStore" }
  )
), by = u_()(
  s_(
    (c) => ({
      leverageLoops: [],
      suggestionRequests: [],
      // Separate loading states
      isLoadingPersons: !1,
      isLoadingSuggestionRequests: !1,
      isCreatingSuggestionRequest: !1,
      isDeletingSuggestionRequest: !1,
      // Separate error states
      personsError: null,
      suggestionRequestsError: null,
      createSuggestionRequestError: null,
      deleteSuggestionRequestError: null,
      fetchNetworkPersons: async () => {
        c({ isLoadingPersons: !0, personsError: null });
        try {
          const { token: p, baseUrl: d, dataSource: _ } = Ma.getState();
          if (!d || typeof d == "string" && d.trim() === "")
            throw console.error("VariablesStore state:", Ma.getState()), new Error("Base URL is not defined. Please provide it as a prop to CopilotApp.");
          if (!p || typeof p == "string" && p.trim() === "")
            throw console.error("VariablesStore state:", Ma.getState()), new Error("Token is not defined. Please provide it as a prop to CopilotApp.");
          const w = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${p}`,
            "x-data-source": _ || ""
          }, E = await fetch(`${d}:Et3oQAtI/my-persons`, { headers: w }), h = await E.json();
          if (!E.ok) {
            const R = h?.message || h?.error || "Failed to fetch loops", k = `HTTP ${E.status}: ${R}`;
            throw new Error(k);
          }
          c({ leverageLoops: h, isLoadingPersons: !1 });
        } catch (p) {
          c({
            personsError: p instanceof Error ? p.message : "Unknown error",
            isLoadingPersons: !1
          });
        }
      },
      fetchSuggestionRequests: async () => {
        c({ isLoadingSuggestionRequests: !0, suggestionRequestsError: null });
        try {
          const { token: p, baseUrl: d, dataSource: _ } = Ma.getState();
          if (!d || typeof d == "string" && d.trim() === "")
            throw console.error("VariablesStore state:", Ma.getState()), new Error("Base URL is not defined. Please provide it as a prop to CopilotApp.");
          if (!p || typeof p == "string" && p.trim() === "")
            throw console.error("VariablesStore state:", Ma.getState()), new Error("Token is not defined. Please provide it as a prop to CopilotApp.");
          const w = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${p}`,
            "x-data-source": _ || ""
          }, E = await fetch(`${d}:MkA4QsNh/suggestion-requests?copilot_mode=loop`, { headers: w }), h = await E.json();
          if (!E.ok) {
            const R = h?.message || h?.error || "Failed to fetch suggestion requests", k = `HTTP ${E.status}: ${R}`;
            throw new Error(k);
          }
          c({ suggestionRequests: h?.items ?? [], isLoadingSuggestionRequests: !1 });
        } catch (p) {
          c({
            suggestionRequestsError: p instanceof Error ? p.message : "Unknown error",
            isLoadingSuggestionRequests: !1
          });
        }
      },
      createSuggestionRequest: async (p) => {
        c({ isCreatingSuggestionRequest: !0, createSuggestionRequestError: null });
        try {
          const { token: d, baseUrl: _, dataSource: w } = Ma.getState();
          if (!_ || typeof _ == "string" && _.trim() === "")
            throw console.error("VariablesStore state:", Ma.getState()), new Error("Base URL is not defined. Please provide it as a prop to CopilotApp.");
          if (!d || typeof d == "string" && d.trim() === "")
            throw console.error("VariablesStore state:", Ma.getState()), new Error("Token is not defined. Please provide it as a prop to CopilotApp.");
          const E = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${d}`,
            "x-data-source": w || ""
          }, h = await fetch(
            `${_}:MkA4QsNh/suggestion-requests`,
            { headers: E, method: "POST", body: JSON.stringify(p) }
          ), R = await h.json();
          if (!h.ok) {
            const k = R?.message || R?.error || "Failed to create suggestion request";
            throw new Error(`HTTP ${h.status}: ${k}`);
          }
          c((k) => ({
            suggestionRequests: [R, ...k.suggestionRequests],
            isCreatingSuggestionRequest: !1
          }));
        } catch (d) {
          c({
            createSuggestionRequestError: d instanceof Error ? d.message : "Unknown error",
            isCreatingSuggestionRequest: !1
          });
        }
      },
      deleteSuggestionRequest: async (p) => {
        c({ isDeletingSuggestionRequest: !0, deleteSuggestionRequestError: null });
        try {
          const { token: d, baseUrl: _, dataSource: w } = Ma.getState();
          if (!_ || typeof _ == "string" && _.trim() === "")
            throw new Error("Base URL is not defined. Please provide it as a prop to CopilotApp.");
          if (!d || typeof d == "string" && d.trim() === "")
            throw new Error("Token is not defined. Please provide it as a prop to CopilotApp.");
          const E = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${d}`,
            "x-data-source": w || ""
          }, h = await fetch(
            `${_}:MkA4QsNh/suggestion-requests/${p}`,
            { headers: E, method: "DELETE" }
          );
          if (!h.ok) {
            const R = await h.json().catch(() => ({})), k = R?.message || R?.error || "Failed to delete suggestion request";
            throw new Error(`HTTP ${h.status}: ${k}`);
          }
          c((R) => ({
            suggestionRequests: R.suggestionRequests.filter((k) => k.id !== p),
            isDeletingSuggestionRequest: !1
          }));
        } catch (d) {
          c({
            deleteSuggestionRequestError: d instanceof Error ? d.message : "Unknown error",
            isDeletingSuggestionRequest: !1
          });
        }
      },
      setLeverageLoops: (p) => c({ leverageLoops: p }),
      addLeverageLoops: (p) => c((d) => ({ leverageLoops: [...d.leverageLoops, ...p] }))
    }),
    { name: "LeverageLoopsStore" }
  )
), yN = ({ status: c }) => {
  switch (c) {
    case "draft":
      return /* @__PURE__ */ D.jsx("span", { className: Nt.statusIcon, "data-status": "draft" });
    case "suggestion":
      return /* @__PURE__ */ D.jsx("span", { className: Nt.statusIcon, "data-status": "suggestion" });
    case "processing":
      return /* @__PURE__ */ D.jsx("span", { className: Nt.statusIcon, "data-status": "processing" });
    case "archived":
      return /* @__PURE__ */ D.jsx("span", { className: Nt.statusIcon, "data-status": "archived" });
    default:
      return /* @__PURE__ */ D.jsx("span", { className: Nt.statusIcon, "data-status": "unknown" });
  }
}, gN = ({
  contentType: c,
  items: p,
  selectedItem: d,
  onItemSelect: _,
  emptyMessage: w = "No items found",
  selectedSuggestionRequest: E,
  onSuggestionRequestSelect: h
}) => {
  const [R, k] = Ue.useState(/* @__PURE__ */ new Set()), [x, M] = Ue.useState(""), [A, V] = Ue.useState(!1), [$, re] = Ue.useState(null), ie = Ue.useRef(null), Ce = Ue.useRef(null), {
    suggestionRequests: Re,
    leverageLoops: ge,
    isLoadingPersons: oe,
    isLoadingSuggestionRequests: be,
    personsError: de,
    suggestionRequestsError: Ye,
    deleteSuggestionRequest: He,
    isDeletingSuggestionRequest: Be
  } = by(
    uu((F) => ({
      suggestionRequests: F.suggestionRequests,
      leverageLoops: F.leverageLoops,
      isLoadingPersons: F.isLoadingPersons,
      isLoadingSuggestionRequests: F.isLoadingSuggestionRequests,
      personsError: F.personsError,
      suggestionRequestsError: F.suggestionRequestsError,
      deleteSuggestionRequest: F.deleteSuggestionRequest,
      isDeletingSuggestionRequest: F.isDeletingSuggestionRequest
    }))
  );
  Ue.useEffect(() => {
    const F = (he) => {
      ie.current && !ie.current.contains(he.target) && V(!1), Ce.current && !Ce.current.contains(he.target) && re(null);
    };
    return document.addEventListener("mousedown", F), () => document.removeEventListener("mousedown", F);
  }, []);
  const nt = async (F, he) => {
    he.stopPropagation(), !Be && (await He(F), re(null));
  }, ut = (F, he) => {
    he.stopPropagation(), console.log("Edit suggestion request:", F), re(null);
  }, Ee = (F) => {
    k((he) => {
      const le = new Set(he);
      return le.has(F) ? le.delete(F) : le.add(F), le;
    });
  }, Q = (F, he) => he ? F.filter(
    (le) => le.full_name?.toLowerCase().includes(he.toLowerCase()) || le.master_person.name?.toLowerCase().includes(he.toLowerCase()) || le.master_person.current_title?.toLowerCase().includes(he.toLowerCase()) || le.master_person.bio?.toLowerCase().includes(he.toLowerCase()) || le.master_person.master_company?.company_name?.toLowerCase().includes(he.toLowerCase())
  ) : [], Z = (F) => {
    const he = F.target.value;
    M(he), V(he.length > 0);
  }, xe = (F) => {
    _(F), M(""), V(!1);
  }, Pe = (F) => {
    const he = d?.id === F.id;
    return /* @__PURE__ */ D.jsxs(
      "button",
      {
        className: `${Nt.dropdownItem} ${he ? Nt.selected : ""}`,
        onClick: () => xe(F),
        children: [
          /* @__PURE__ */ D.jsx("div", { className: Nt.personAvatar, children: F.master_person.avatar ? /* @__PURE__ */ D.jsx("img", { src: F.master_person.avatar, alt: F.full_name }) : /* @__PURE__ */ D.jsx("span", { className: Nt.avatarPlaceholder, children: F.full_name?.charAt(0) || "?" }) }),
          /* @__PURE__ */ D.jsxs("div", { className: Nt.personInfo, children: [
            /* @__PURE__ */ D.jsx("span", { className: Nt.personName, children: F.full_name || F.master_person.name }),
            F.master_person.current_title && /* @__PURE__ */ D.jsxs("span", { className: Nt.personTitle, children: [
              F.master_person.current_title,
              F.master_person.master_company?.company_name && /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
                " at ",
                F.master_person.master_company.company_name
              ] })
            ] })
          ] })
        ]
      },
      F.id
    );
  }, De = (F, he = !1) => {
    const le = E?.id === F.id;
    return /* @__PURE__ */ D.jsx("div", { className: Nt.suggestionItemWrapper, children: /* @__PURE__ */ D.jsxs(
      "button",
      {
        className: `${Nt.suggestionItem} ${he ? Nt.childItem : ""} ${le ? Nt.selected : ""}`,
        onClick: () => {
          Ee(F.request_header_title), h(F);
        },
        children: [
          /* @__PURE__ */ D.jsx("div", { className: Nt.personAvatar, children: F.master_person?.avatar ? /* @__PURE__ */ D.jsx("img", { src: F.master_person.avatar, alt: F.master_person.name || "Person" }) : /* @__PURE__ */ D.jsx("span", { className: Nt.avatarPlaceholder, children: F.master_person?.name?.charAt(0) || "?" }) }),
          /* @__PURE__ */ D.jsxs("div", { className: Nt.personInfo, children: [
            /* @__PURE__ */ D.jsx("span", { className: Nt.personName, children: F.master_person?.name || F.request_header_title }),
            (F.master_person?.current_title || F.master_person?.company_name) && /* @__PURE__ */ D.jsxs("span", { className: Nt.personTitle, children: [
              F.master_person?.current_title,
              F.master_person?.current_title && F.master_person?.company_name && " at ",
              F.master_person?.company_name
            ] })
          ] }),
          /* @__PURE__ */ D.jsx(yN, { status: F.status }),
          F.id !== void 0 && /* @__PURE__ */ D.jsxs("div", { className: Nt.moreButtonWrapper, ref: $ === F.id ? Ce : null, children: [
            /* @__PURE__ */ D.jsx(
              "span",
              {
                className: Nt.moreButton,
                role: "button",
                tabIndex: 0,
                onClick: (U) => {
                  U.stopPropagation(), re($ === F.id ? null : F.id);
                },
                onKeyDown: (U) => {
                  U.key === "Enter" && (U.stopPropagation(), re($ === F.id ? null : F.id));
                },
                children: "⋮"
              }
            ),
            $ === F.id && /* @__PURE__ */ D.jsxs("div", { className: Nt.actionMenu, children: [
              /* @__PURE__ */ D.jsxs(
                "button",
                {
                  className: Nt.actionMenuItem,
                  onClick: (U) => ut(F.id, U),
                  children: [
                    /* @__PURE__ */ D.jsx(L5, { size: 14 }),
                    /* @__PURE__ */ D.jsx("span", { children: "Edit" })
                  ]
                }
              ),
              /* @__PURE__ */ D.jsxs(
                "button",
                {
                  className: `${Nt.actionMenuItem} ${Nt.deleteAction}`,
                  onClick: (U) => nt(F.id, U),
                  disabled: Be,
                  children: [
                    /* @__PURE__ */ D.jsx(OE, { size: 14 }),
                    /* @__PURE__ */ D.jsx("span", { children: Be ? "Deleting..." : "Delete" })
                  ]
                }
              )
            ] })
          ] })
        ]
      }
    ) }, F.id);
  }, we = Q(ge.length > 0 ? ge : p, x);
  return /* @__PURE__ */ D.jsxs("div", { className: Nt.expandedContent, children: [
    /* @__PURE__ */ D.jsxs("div", { className: Nt.searchWrapper, ref: ie, children: [
      /* @__PURE__ */ D.jsxs("div", { className: Nt.searchContainer, children: [
        /* @__PURE__ */ D.jsx("span", { className: Nt.searchIcon, children: "🔍" }),
        /* @__PURE__ */ D.jsx(
          "input",
          {
            type: "text",
            placeholder: "Search persons...",
            className: Nt.searchInput,
            value: x,
            onChange: Z,
            onFocus: () => x.length > 0 && V(!0)
          }
        )
      ] }),
      A && /* @__PURE__ */ D.jsx("div", { className: Nt.searchDropdown, children: oe ? /* @__PURE__ */ D.jsxs("div", { className: Nt.dropdownLoading, children: [
        /* @__PURE__ */ D.jsx("span", { className: Nt.loadingSpinner }),
        "Loading persons..."
      ] }) : de ? /* @__PURE__ */ D.jsx("div", { className: Nt.dropdownError, children: de }) : we.length === 0 ? /* @__PURE__ */ D.jsxs("div", { className: Nt.dropdownEmpty, children: [
        'No persons found for "',
        x,
        '"'
      ] }) : we.map((F) => Pe(F)) })
    ] }),
    /* @__PURE__ */ D.jsx("div", { className: Nt.suggestionsList, children: be ? /* @__PURE__ */ D.jsxs("div", { className: Nt.loadingState, children: [
      /* @__PURE__ */ D.jsx("span", { className: Nt.loadingSpinner }),
      "Loading suggestion requests..."
    ] }) : Ye ? /* @__PURE__ */ D.jsx("div", { className: Nt.errorState, children: Ye }) : Re.length === 0 ? /* @__PURE__ */ D.jsx("div", { className: Nt.emptyState, children: w }) : Re.map((F) => De(F)) })
  ] });
}, sd = (c) => ({
  messages: [],
  threadId: `thread-${c}-${Date.now()}`,
  isLoading: !1
}), _N = {
  messages: [],
  threadId: "thread-empty",
  isLoading: !1
}, dd = u_()(
  s_((c, p) => ({
    activeContext: "copilot",
    selectedPerson: null,
    selectedSuggestionRequest: null,
    leverageLoopSummaries: [],
    copilotChat: sd("copilot"),
    outcomesChat: sd("outcomes"),
    leverageLoopChats: {},
    setActiveContext: (d) => c({ activeContext: d }),
    setSelectedPerson: (d) => c((_) => ({
      selectedPerson: d,
      selectedSuggestionRequest: d ? null : _.selectedSuggestionRequest,
      activeContext: "leverage-loops"
    })),
    setSelectedSuggestionRequest: (d) => c((_) => ({
      selectedSuggestionRequest: d,
      selectedPerson: d ? null : _.selectedPerson,
      activeContext: "leverage-loops"
    })),
    // Helper to get current leverage loop chat key based on selection
    getCurrentLeverageLoopKey: () => {
      const d = p();
      return d.selectedPerson ? d.selectedPerson.full_name : d.selectedSuggestionRequest ? d.selectedSuggestionRequest.request_panel_title : "leverage-loop-default";
    },
    // Helper to get current leverage loop chat state
    getCurrentLeverageLoopChat: () => {
      const d = p(), _ = d.getCurrentLeverageLoopKey();
      return _ && d.leverageLoopChats[_] ? d.leverageLoopChats[_] : _N;
    },
    addMessage: (d, _, w) => c((E) => {
      if (d === "leverage-loops") {
        const R = w || E.getCurrentLeverageLoopKey();
        if (!R) return E;
        const k = E.leverageLoopChats[R] || sd(`leverage-loop-${R}`);
        return {
          leverageLoopChats: {
            ...E.leverageLoopChats,
            [R]: {
              ...k,
              messages: [...k.messages, _]
            }
          }
        };
      }
      const h = Cy(d);
      return {
        [h]: {
          ...E[h],
          messages: [...E[h].messages, _]
        }
      };
    }),
    updateMessage: (d, _, w, E, h) => c((R) => {
      if (d === "leverage-loops") {
        const x = h || R.getCurrentLeverageLoopKey();
        if (!x) return R;
        const M = R.leverageLoopChats[x];
        return M ? {
          leverageLoopChats: {
            ...R.leverageLoopChats,
            [x]: {
              ...M,
              messages: M.messages.map(
                (A) => A.id === _ ? { ...A, content: w, isStreaming: E ?? A.isStreaming } : A
              )
            }
          }
        } : R;
      }
      const k = Cy(d);
      return {
        [k]: {
          ...R[k],
          messages: R[k].messages.map(
            (x) => x.id === _ ? { ...x, content: w, isStreaming: E ?? x.isStreaming } : x
          )
        }
      };
    }),
    setIsLoading: (d, _, w) => c((E) => {
      if (d === "leverage-loops") {
        const R = w || E.getCurrentLeverageLoopKey();
        if (!R) return E;
        const k = E.leverageLoopChats[R] || sd(`leverage-loop-${R}`);
        return {
          leverageLoopChats: {
            ...E.leverageLoopChats,
            [R]: {
              ...k,
              isLoading: _
            }
          }
        };
      }
      const h = Cy(d);
      return {
        [h]: {
          ...E[h],
          isLoading: _
        }
      };
    }),
    clearChat: (d, _) => c((w) => {
      if (d === "leverage-loops") {
        const h = _ || w.getCurrentLeverageLoopKey();
        return h ? {
          leverageLoopChats: {
            ...w.leverageLoopChats,
            [h]: sd(`leverage-loop-${h}`)
          }
        } : w;
      }
      return {
        [Cy(d)]: sd(d)
      };
    }),
    upsertLeverageLoopSummary: (d) => c((_) => _.leverageLoopSummaries.findIndex((E) => E.id === d.id) >= 0 ? {
      leverageLoopSummaries: _.leverageLoopSummaries.map((E) => E.id === d.id ? d : E)
    } : {
      leverageLoopSummaries: [..._.leverageLoopSummaries, d]
    })
  }), { name: "ChatContextStore" })
);
function Cy(c) {
  switch (c) {
    case "copilot":
      return "copilotChat";
    case "outcomes":
      return "outcomesChat";
    default:
      return "copilotChat";
  }
}
const SN = "_composerContainer_1dqbd_1", CN = "_composer_1dqbd_1", EN = "_inputWrapper_1dqbd_15", wN = "_input_1dqbd_15", xN = "_actions_1dqbd_40", bN = "_leftActions_1dqbd_47", RN = "_rightActions_1dqbd_48", kN = "_actionButton_1dqbd_54", TN = "_sendButton_1dqbd_75", DN = "_active_1dqbd_92", Gi = {
  composerContainer: SN,
  composer: CN,
  inputWrapper: EN,
  input: wN,
  actions: xN,
  leftActions: bN,
  rightActions: RN,
  actionButton: kN,
  sendButton: TN,
  active: DN
}, NN = ({
  onSend: c,
  disabled: p = !1,
  placeholder: d = "Ask anything..",
  initialValue: _ = ""
}) => {
  const [w, E] = Ue.useState(_), h = Ue.useRef(null);
  Ue.useEffect(() => {
    _ && (E(_), setTimeout(() => h.current?.focus(), 0));
  }, [_]), Ue.useEffect(() => {
    const x = h.current;
    x && (x.style.height = "auto", x.style.height = `${Math.min(x.scrollHeight, 200)}px`);
  }, [w]);
  const R = (x) => {
    x?.preventDefault(), w.trim() && !p && (c(w.trim()), E(""));
  }, k = (x) => {
    x.key === "Enter" && !x.shiftKey && (x.preventDefault(), R());
  };
  return /* @__PURE__ */ D.jsx("div", { className: Gi.composerContainer, children: /* @__PURE__ */ D.jsxs("form", { onSubmit: R, className: Gi.composer, children: [
    /* @__PURE__ */ D.jsx("div", { className: Gi.inputWrapper, children: /* @__PURE__ */ D.jsx(
      "textarea",
      {
        ref: h,
        value: w,
        onChange: (x) => E(x.target.value),
        onKeyDown: k,
        placeholder: d,
        disabled: p,
        className: Gi.input,
        rows: 1
      }
    ) }),
    /* @__PURE__ */ D.jsxs("div", { className: Gi.actions, children: [
      /* @__PURE__ */ D.jsxs("div", { className: Gi.leftActions, children: [
        /* @__PURE__ */ D.jsx(
          "button",
          {
            type: "button",
            className: Gi.actionButton,
            title: "Attach file",
            children: /* @__PURE__ */ D.jsx(
              "svg",
              {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: /* @__PURE__ */ D.jsx("path", { d: "M12 5v14M5 12h14" })
              }
            )
          }
        ),
        /* @__PURE__ */ D.jsx(
          "button",
          {
            type: "button",
            className: Gi.actionButton,
            title: "Settings",
            children: /* @__PURE__ */ D.jsx(
              "svg",
              {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: /* @__PURE__ */ D.jsx("path", { d: "M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" })
              }
            )
          }
        )
      ] }),
      /* @__PURE__ */ D.jsxs("div", { className: Gi.rightActions, children: [
        /* @__PURE__ */ D.jsx(
          "button",
          {
            type: "button",
            className: Gi.actionButton,
            title: "Voice input",
            children: /* @__PURE__ */ D.jsxs(
              "svg",
              {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: [
                  /* @__PURE__ */ D.jsx("path", { d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" }),
                  /* @__PURE__ */ D.jsx("path", { d: "M19 10v2a7 7 0 0 1-14 0v-2" }),
                  /* @__PURE__ */ D.jsx("line", { x1: "12", y1: "19", x2: "12", y2: "23" }),
                  /* @__PURE__ */ D.jsx("line", { x1: "8", y1: "23", x2: "16", y2: "23" })
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ D.jsx(
          "button",
          {
            type: "submit",
            className: `${Gi.sendButton} ${w.trim() && !p ? Gi.active : ""}`,
            disabled: !w.trim() || p,
            title: "Send message",
            children: /* @__PURE__ */ D.jsx(
              "svg",
              {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: /* @__PURE__ */ D.jsx("path", { d: "M12 19V5M5 12l7-7 7 7" })
              }
            )
          }
        )
      ] })
    ] })
  ] }) });
}, MN = "_messageContainer_1t8ij_1", LN = "_user_1t8ij_6", ON = "_assistant_1t8ij_9", jN = "_userMessage_1t8ij_23", AN = "_assistantMessage_1t8ij_38", UN = "_textContent_1t8ij_45", zN = "_streamingIndicator_1t8ij_50", iu = {
  messageContainer: MN,
  user: LN,
  assistant: ON,
  userMessage: jN,
  assistantMessage: AN,
  textContent: UN,
  streamingIndicator: zN
}, PN = "_card_rp8wf_1", IN = "_sources_rp8wf_11", FN = "_sourcesHeader_rp8wf_17", VN = "_sourcesList_rp8wf_26", HN = "_sourceItem_rp8wf_32", $N = "_sourceIndex_rp8wf_45", BN = "_sourceTitle_rp8wf_51", qN = "_sourceName_rp8wf_55", WN = "_header_rp8wf_60", YN = "_headerTitle_rp8wf_60", GN = "_headerSubtitle_rp8wf_65", QN = "_textContent_rp8wf_70", KN = "_button_rp8wf_93", XN = "_primary_rp8wf_106", JN = "_secondary_rp8wf_117", ZN = "_ghost_rp8wf_125", eM = "_buttonGroup_rp8wf_137", tM = "_horizontal_rp8wf_141", nM = "_vertical_rp8wf_144", rM = "_form_rp8wf_148", aM = "_formField_rp8wf_154", iM = "_fieldLabel_rp8wf_159", oM = "_fieldHint_rp8wf_164", lM = "_input_rp8wf_169", uM = "_textarea_rp8wf_170", sM = "_select_rp8wf_171", cM = "_error_rp8wf_193", fM = "_checkboxWrapper_rp8wf_213", dM = "_radioWrapper_rp8wf_214", pM = "_radioGroup_rp8wf_234", vM = "_checkboxGroup_rp8wf_240", hM = "_list_rp8wf_246", mM = "_listHeading_rp8wf_246", yM = "_listItems_rp8wf_254", gM = "_listItem_rp8wf_254", _M = "_listItemIcon_rp8wf_274", SM = "_listItemContent_rp8wf_284", CM = "_listItemTitle_rp8wf_287", EM = "_listItemSubtitle_rp8wf_293", wM = "_listItemAction_rp8wf_298", xM = "_actionButton_rp8wf_298", bM = "_stats_rp8wf_317", RM = "_statsNumber_rp8wf_320", kM = "_statsLabel_rp8wf_326", TM = "_profileTile_rp8wf_332", DM = "_profileIcon_rp8wf_337", NM = "_profileContent_rp8wf_347", MM = "_profileTitle_rp8wf_347", LM = "_profileLabel_rp8wf_353", OM = "_miniCard_rp8wf_359", jM = "_miniCardBlock_rp8wf_369", AM = "_steps_rp8wf_375", UM = "_stepsItem_rp8wf_392", zM = "_stepsTitle_rp8wf_407", PM = "_stepsDetails_rp8wf_413", IM = "_sectionBlock_rp8wf_418", FM = "_section_rp8wf_418", VM = "_expanded_rp8wf_429", HM = "_sectionTrigger_rp8wf_429", $M = "_triggerIcon_rp8wf_450", BM = "_rotated_rp8wf_453", qM = "_sectionContent_rp8wf_457", WM = "_icon_rp8wf_464", YM = "_streamingContainer_rp8wf_470", GM = "_streamingIndicator_rp8wf_475", QM = "_pulse_rp8wf_1", KM = "_skeletonLoader_rp8wf_487", XM = "_skeletonShimmer_rp8wf_502", JM = "_shimmer_rp8wf_1", Ae = {
  card: PN,
  sources: IN,
  sourcesHeader: FN,
  sourcesList: VN,
  sourceItem: HN,
  sourceIndex: $N,
  sourceTitle: BN,
  sourceName: qN,
  header: WN,
  headerTitle: YN,
  headerSubtitle: GN,
  textContent: QN,
  button: KN,
  primary: XN,
  secondary: JN,
  ghost: ZN,
  buttonGroup: eM,
  horizontal: tM,
  vertical: nM,
  form: rM,
  formField: aM,
  fieldLabel: iM,
  fieldHint: oM,
  input: lM,
  textarea: uM,
  select: sM,
  error: cM,
  checkboxWrapper: fM,
  radioWrapper: dM,
  radioGroup: pM,
  checkboxGroup: vM,
  list: hM,
  listHeading: mM,
  listItems: yM,
  listItem: gM,
  listItemIcon: _M,
  listItemContent: SM,
  listItemTitle: CM,
  listItemSubtitle: EM,
  listItemAction: wM,
  actionButton: xM,
  stats: bM,
  statsNumber: RM,
  statsLabel: kM,
  profileTile: TM,
  profileIcon: DM,
  profileContent: NM,
  profileTitle: MM,
  profileLabel: LM,
  miniCard: OM,
  miniCardBlock: jM,
  steps: AM,
  stepsItem: UM,
  stepsTitle: zM,
  stepsDetails: PM,
  sectionBlock: IM,
  section: FM,
  expanded: VM,
  sectionTrigger: HM,
  triggerIcon: $M,
  rotated: BM,
  sectionContent: qM,
  icon: WM,
  streamingContainer: YM,
  streamingIndicator: GM,
  pulse: QM,
  skeletonLoader: KM,
  skeletonShimmer: XM,
  shimmer: JM
}, ZM = {
  // Arrows & Navigation
  target: cD,
  "arrow-right": b3,
  "arrow-left": w3,
  "arrow-up": k3,
  "arrow-down": C3,
  "chevron-down": LE,
  "chevron-right": a4,
  "chevron-left": n4,
  "chevron-up": o4,
  repeat: H5,
  "refresh-cw": F5,
  "rotate-cw": W5,
  navigation: R5,
  compass: S4,
  // Multimedia
  play: U5,
  pause: N5,
  // Text & Lists
  "list-checks": c5,
  // Development
  workflow: MD,
  // Time
  timer: dD,
  clock: m4,
  calendar: $3,
  // Shopping & Business
  boxes: z3,
  briefcase: I3,
  building: V3,
  // Math & Charts
  infinity: e5,
  plus: P5,
  minus: x5,
  "line-chart": Y3,
  "bar-chart": Q3,
  "pie-chart": X3,
  "trending-up": yD,
  "trending-down": hD,
  activity: _3,
  // Actions
  check: Z3,
  x: OD,
  edit: oD,
  trash: OE,
  copy: E4,
  share: eD,
  "external-link": T4,
  search: G5,
  filter: B4,
  settings: J5,
  download: R4,
  upload: CD,
  send: K5,
  zap: AD,
  // Users
  user: kD,
  users: DD,
  "user-plus": bD,
  "user-check": wD,
  // Communication
  mail: m5,
  phone: j5,
  "message-circle": S5,
  "message-square": E5,
  bell: O3,
  "bell-off": M3,
  // Status & Favorites
  star: uD,
  heart: K4,
  bookmark: A3,
  flag: P4,
  award: D3,
  gift: W4,
  crown: x4,
  // Info & Alerts
  "help-circle": d4,
  info: n5,
  "alert-circle": u4,
  "alert-triangle": _D,
  "check-circle": c4,
  "x-circle": v4,
  // View
  eye: L4,
  "eye-off": N4,
  // Security
  lock: v5,
  unlock: d5,
  key: a5,
  shield: aD,
  "shield-check": nD,
  // Links & Files
  link: u5,
  paperclip: T5,
  "file-text": j4,
  file: U4,
  folder: H4,
  "folder-open": F4,
  // Location
  home: J4,
  "map-pin": g5,
  globe: G4,
  // Transportation
  car: q3,
  // Ideas & Energy
  lightbulb: o5,
  rocket: B5,
  coffee: g4
}, jE = ({ name: c, size: p = 18 }) => {
  const d = ZM[c.toLowerCase()];
  return d ? /* @__PURE__ */ D.jsx("span", { className: Ae.icon, children: /* @__PURE__ */ D.jsx(d, { size: p }) }) : (console.warn(`Icon "${c}" not found in registry`), /* @__PURE__ */ D.jsx("span", { className: Ae.icon, style: { width: p, height: p }, children: "•" }));
}, eL = ({ title: c, subtitle: p }) => /* @__PURE__ */ D.jsxs("div", { className: Ae.header, children: [
  /* @__PURE__ */ D.jsx("h3", { className: Ae.headerTitle, children: c }),
  p && /* @__PURE__ */ D.jsx("p", { className: Ae.headerSubtitle, children: p })
] });
function tL(c) {
  return c.split(/\n\n+/).map((d, _) => {
    let w = d;
    const E = /\*\*(.*?)\*\*/g, h = d.split(E);
    h.length > 1 && (w = h.map((k, x) => x % 2 === 1 ? /* @__PURE__ */ D.jsx("strong", { children: k }, x) : k));
    const R = /`(.*?)`/g;
    return typeof w == "string" && w.match(R) && (w = w.split(R).map((x, M) => M % 2 === 1 ? /* @__PURE__ */ D.jsx("code", { children: x }, M) : x)), /* @__PURE__ */ D.jsx("p", { children: w }, _);
  });
}
const nL = ({ textMarkdown: c }) => /* @__PURE__ */ D.jsx("div", { className: Ae.textContent, children: tL(c) }), rL = ({
  children: c,
  name: p,
  variant: d = "primary",
  disabled: _ = !1,
  action: w,
  onAction: E
}) => {
  const h = () => {
    w && E && E(w);
  }, R = ["submit", "save", "confirm", "set", "create", "send", "apply"], k = (p || "").toLowerCase(), x = (typeof c == "string" ? c : "").toLowerCase(), M = w?.type === "submit_form" || R.some((A) => k.includes(A)) || R.some((A) => x.includes(A));
  return /* @__PURE__ */ D.jsx(
    "button",
    {
      className: `${Ae.button} ${Ae[d]}`,
      disabled: _,
      onClick: h,
      type: M ? "submit" : "button",
      children: c
    }
  );
}, aL = ({
  variant: c = "horizontal",
  children: p,
  renderComponent: d
}) => /* @__PURE__ */ D.jsx("div", { className: `${Ae.buttonGroup} ${Ae[c]}`, children: p.map((_, w) => /* @__PURE__ */ D.jsx(Za.Fragment, { children: d(_) }, w)) }), iL = ({ children: c, sources: p, renderComponent: d }) => !c || !Array.isArray(c) ? /* @__PURE__ */ D.jsx("div", { className: Ae.card }) : /* @__PURE__ */ D.jsxs("div", { className: Ae.card, children: [
  c.map((_, w) => /* @__PURE__ */ D.jsx(Za.Fragment, { children: d(_) }, w)),
  p && p.length > 0 && /* @__PURE__ */ D.jsxs("div", { className: Ae.sources, children: [
    /* @__PURE__ */ D.jsx("div", { className: Ae.sourcesHeader, children: "Sources" }),
    /* @__PURE__ */ D.jsx("div", { className: Ae.sourcesList, children: p.map((_, w) => /* @__PURE__ */ D.jsxs(
      "a",
      {
        href: _.url,
        target: "_blank",
        rel: "noopener noreferrer",
        className: Ae.sourceItem,
        children: [
          /* @__PURE__ */ D.jsxs("span", { className: Ae.sourceIndex, children: [
            "[",
            w + 1,
            "]"
          ] }),
          /* @__PURE__ */ D.jsx("span", { className: Ae.sourceTitle, children: _.title }),
          _.sourceName && /* @__PURE__ */ D.jsxs("span", { className: Ae.sourceName, children: [
            " - ",
            _.sourceName
          ] })
        ]
      },
      w
    )) })
  ] })
] }), oL = ({ heading: c, items: p, onAction: d }) => /* @__PURE__ */ D.jsxs("div", { className: Ae.list, children: [
  c && /* @__PURE__ */ D.jsx("h4", { className: Ae.listHeading, children: c }),
  /* @__PURE__ */ D.jsx("div", { className: Ae.listItems, children: p.map((_, w) => /* @__PURE__ */ D.jsxs("div", { className: Ae.listItem, children: [
    _.iconName && /* @__PURE__ */ D.jsx("div", { className: Ae.listItemIcon, children: /* @__PURE__ */ D.jsx(jE, { name: _.iconName, size: 18 }) }),
    /* @__PURE__ */ D.jsxs("div", { className: Ae.listItemContent, children: [
      /* @__PURE__ */ D.jsx("p", { className: Ae.listItemTitle, children: _.title }),
      _.subtitle && /* @__PURE__ */ D.jsx("p", { className: Ae.listItemSubtitle, children: _.subtitle })
    ] }),
    _.itemAction && /* @__PURE__ */ D.jsx("div", { className: Ae.listItemAction, children: /* @__PURE__ */ D.jsx(
      "button",
      {
        className: Ae.actionButton,
        onClick: () => d?.(_.itemAction.action),
        children: _.itemAction.label
      }
    ) })
  ] }, w)) })
] }), lL = ({ number: c, label: p }) => /* @__PURE__ */ D.jsxs("div", { className: Ae.stats, children: [
  /* @__PURE__ */ D.jsx("p", { className: Ae.statsNumber, children: c }),
  /* @__PURE__ */ D.jsx("p", { className: Ae.statsLabel, children: p })
] }), uL = ({
  title: c,
  label: p,
  child: d,
  renderComponent: _
}) => /* @__PURE__ */ D.jsxs("div", { className: Ae.profileTile, children: [
  d && /* @__PURE__ */ D.jsx("div", { className: Ae.profileIcon, children: _(d) }),
  /* @__PURE__ */ D.jsxs("div", { className: Ae.profileContent, children: [
    /* @__PURE__ */ D.jsx("p", { className: Ae.profileTitle, children: c }),
    p && /* @__PURE__ */ D.jsx("p", { className: Ae.profileLabel, children: p })
  ] })
] }), sL = ({
  lhs: c,
  rhs: p,
  renderComponent: d
}) => /* @__PURE__ */ D.jsxs("div", { className: Ae.miniCard, children: [
  /* @__PURE__ */ D.jsx("div", { className: Ae.miniCardLhs, children: d(c) }),
  p && /* @__PURE__ */ D.jsx("div", { className: Ae.miniCardRhs, children: d(p) })
] }), cL = ({
  children: c,
  renderComponent: p
}) => /* @__PURE__ */ D.jsx("div", { className: Ae.miniCardBlock, children: c.map((d, _) => /* @__PURE__ */ D.jsx(Za.Fragment, { children: p(d) }, _)) }), fL = ({
  title: c,
  details: p,
  renderComponent: d
}) => /* @__PURE__ */ D.jsxs("div", { className: Ae.stepsItem, children: [
  /* @__PURE__ */ D.jsx("h4", { className: Ae.stepsTitle, children: c }),
  p && /* @__PURE__ */ D.jsx("div", { className: Ae.stepsDetails, children: d(p) })
] }), dL = ({
  children: c,
  renderComponent: p
}) => /* @__PURE__ */ D.jsx("div", { className: Ae.steps, children: c.map((d, _) => /* @__PURE__ */ D.jsx(Za.Fragment, { children: p(d) }, _)) }), pL = ({
  isFoldable: c = !0,
  sections: p,
  renderComponent: d
}) => {
  const [_, w] = Ue.useState(
    // If not foldable, expand all sections by default
    new Set(c ? [] : p.map((h) => h.value))
  ), E = (h) => {
    c && w((R) => {
      const k = new Set(R);
      return k.has(h) ? k.delete(h) : k.add(h), k;
    });
  };
  return /* @__PURE__ */ D.jsx("div", { className: Ae.sectionBlock, children: p.map((h) => {
    const R = _.has(h.value);
    return /* @__PURE__ */ D.jsxs(
      "div",
      {
        className: `${Ae.section} ${R ? Ae.expanded : ""}`,
        children: [
          /* @__PURE__ */ D.jsxs(
            "button",
            {
              className: Ae.sectionTrigger,
              onClick: () => E(h.value),
              type: "button",
              children: [
                /* @__PURE__ */ D.jsx("span", { children: h.trigger }),
                c && /* @__PURE__ */ D.jsx("span", { className: `${Ae.triggerIcon} ${R ? Ae.rotated : ""}`, children: /* @__PURE__ */ D.jsx(LE, { size: 16 }) })
              ]
            }
          ),
          (R || !c) && /* @__PURE__ */ D.jsx("div", { className: Ae.sectionContent, children: h.content.map((k, x) => /* @__PURE__ */ D.jsx(Za.Fragment, { children: d(k) }, x)) })
        ]
      },
      h.value
    );
  }) });
}, vL = ({
  name: c,
  placeholder: p,
  value: d = "",
  type: _ = "text",
  rules: w,
  onChange: E
}) => {
  const [h, R] = Ue.useState(d), [k, x] = Ue.useState(null), M = (A) => {
    const V = A.target.value;
    R(V), w?.required && !V ? x("This field is required") : w?.minLength && V.length < w.minLength ? x(`Minimum ${w.minLength} characters required`) : x(null), E?.(c, V);
  };
  return /* @__PURE__ */ D.jsx(
    "input",
    {
      type: _,
      name: c,
      placeholder: p,
      value: h,
      onChange: M,
      className: `${Ae.input} ${k ? Ae.error : ""}`
    }
  );
}, hL = ({
  name: c,
  placeholder: p,
  value: d = "",
  rows: _ = 3,
  rules: w,
  onChange: E
}) => {
  const [h, R] = Ue.useState(d), [k, x] = Ue.useState(null), M = (A) => {
    const V = A.target.value;
    R(V), w?.required && !V ? x("This field is required") : w?.minLength && V.length < w.minLength ? x(`Minimum ${w.minLength} characters required`) : x(null), E?.(c, V);
  };
  return /* @__PURE__ */ D.jsx(
    "textarea",
    {
      name: c,
      placeholder: p,
      value: h,
      rows: _,
      onChange: M,
      className: `${Ae.textarea} ${k ? Ae.error : ""}`
    }
  );
}, mL = ({
  name: c,
  placeholder: p,
  value: d = "",
  options: _ = [],
  onChange: w
}) => {
  const [E, h] = Ue.useState(d), R = (x) => {
    const M = x.target.value;
    h(M), w?.(c, M);
  }, k = _ && Array.isArray(_) ? _ : [];
  return /* @__PURE__ */ D.jsxs(
    "select",
    {
      name: c,
      value: E,
      onChange: R,
      className: Ae.select,
      children: [
        p && /* @__PURE__ */ D.jsx("option", { value: "", children: p }),
        k.map((x) => /* @__PURE__ */ D.jsx("option", { value: x.value, children: x.label }, x.value))
      ]
    }
  );
}, yL = ({
  name: c,
  label: p,
  checked: d = !1,
  onChange: _
}) => {
  const [w, E] = Ue.useState(d), h = (R) => {
    const k = R.target.checked;
    E(k), _?.(c, k);
  };
  return /* @__PURE__ */ D.jsxs("div", { className: Ae.checkboxWrapper, children: [
    /* @__PURE__ */ D.jsx(
      "input",
      {
        type: "checkbox",
        id: c,
        name: c,
        checked: w,
        onChange: h
      }
    ),
    /* @__PURE__ */ D.jsx("label", { htmlFor: c, children: p })
  ] });
}, gL = ({
  name: c,
  options: p = [],
  value: d = "",
  onChange: _
}) => {
  const [w, E] = Ue.useState(d), h = (R) => {
    const k = R.target.value;
    E(k), _?.(c, k);
  };
  return !p || !Array.isArray(p) || p.length === 0 ? /* @__PURE__ */ D.jsx("div", { className: Ae.radioGroup, children: "No options available" }) : /* @__PURE__ */ D.jsx("div", { className: Ae.radioGroup, children: p.map((R) => /* @__PURE__ */ D.jsxs("div", { className: Ae.radioWrapper, children: [
    /* @__PURE__ */ D.jsx(
      "input",
      {
        type: "radio",
        id: `${c}-${R.value}`,
        name: c,
        value: R.value,
        checked: w === R.value,
        onChange: h
      }
    ),
    /* @__PURE__ */ D.jsx("label", { htmlFor: `${c}-${R.value}`, children: R.label })
  ] }, R.value)) });
}, _L = ({
  name: c,
  options: p = [],
  values: d = [],
  onChange: _
}) => {
  const [w, E] = Ue.useState(d), h = (R, k) => {
    const x = k ? [...w, R] : w.filter((M) => M !== R);
    E(x), _?.(c, x);
  };
  return !p || !Array.isArray(p) || p.length === 0 ? /* @__PURE__ */ D.jsx("div", { className: Ae.checkboxGroup, children: "No options available" }) : /* @__PURE__ */ D.jsx("div", { className: Ae.checkboxGroup, children: p.map((R) => /* @__PURE__ */ D.jsxs("div", { className: Ae.checkboxWrapper, children: [
    /* @__PURE__ */ D.jsx(
      "input",
      {
        type: "checkbox",
        id: `${c}-${R.value}`,
        name: c,
        value: R.value,
        checked: w.includes(R.value),
        onChange: (k) => h(R.value, k.target.checked)
      }
    ),
    /* @__PURE__ */ D.jsx("label", { htmlFor: `${c}-${R.value}`, children: R.label })
  ] }, R.value)) });
}, SL = ({
  name: c,
  placeholder: p,
  value: d = "",
  min: _,
  max: w,
  onChange: E
}) => {
  const [h, R] = Ue.useState(d), k = (x) => {
    const M = x.target.value;
    R(M), E?.(c, M);
  };
  return /* @__PURE__ */ D.jsx(
    "input",
    {
      type: "date",
      name: c,
      placeholder: p,
      value: h,
      min: _,
      max: w,
      onChange: k,
      className: Ae.input
    }
  );
}, CL = ({
  label: c,
  hint: p,
  children: d,
  renderComponent: _
}) => /* @__PURE__ */ D.jsxs("div", { className: Ae.formField, children: [
  c && /* @__PURE__ */ D.jsx("label", { className: Ae.fieldLabel, children: c }),
  _(d),
  p && /* @__PURE__ */ D.jsx("span", { className: Ae.fieldHint, children: p })
] }), EL = ({
  name: c,
  children: p,
  buttons: d,
  onAction: _,
  renderComponent: w
}) => {
  const [E, h] = Ue.useState({}), R = Ue.useCallback((x, M) => {
    h((A) => ({ ...A, [x]: M }));
  }, []), k = (x) => {
    x.preventDefault(), _ ? _({ type: "submit_form", props: { formName: c, formData: E } }, E) : console.warn("Form onAction is not defined");
  };
  return /* @__PURE__ */ D.jsxs("form", { className: Ae.form, onSubmit: k, name: c, children: [
    p.map((x, M) => /* @__PURE__ */ D.jsx(
      CL,
      {
        label: x.label,
        hint: x.hint,
        children: {
          ...x.children,
          props: {
            ...x.children.props,
            onChange: R
          }
        },
        renderComponent: w
      },
      M
    )),
    d && w(d)
  ] });
}, wL = ({
  name: c = "radio",
  value: p,
  label: d,
  checked: _ = !1,
  onChange: w
}) => {
  const [E, h] = Ue.useState(_), R = (k) => {
    const x = k.target.checked;
    h(x), x && w && w(c, p);
  };
  return /* @__PURE__ */ D.jsxs("div", { className: Ae.radioWrapper, children: [
    /* @__PURE__ */ D.jsx(
      "input",
      {
        type: "radio",
        id: `${c}-${p}`,
        name: c,
        value: p,
        checked: E,
        onChange: R
      }
    ),
    /* @__PURE__ */ D.jsx("label", { htmlFor: `${c}-${p}`, children: d })
  ] });
}, xL = ({
  name: c = "checkbox",
  value: p,
  label: d,
  checked: _ = !1,
  onChange: w
}) => {
  const [E, h] = Ue.useState(_), R = (k) => {
    const x = k.target.checked;
    h(x), w && w(c, p, x);
  };
  return /* @__PURE__ */ D.jsxs("div", { className: Ae.checkboxWrapper, children: [
    /* @__PURE__ */ D.jsx(
      "input",
      {
        type: "checkbox",
        id: `${c}-${p}`,
        name: c,
        value: p,
        checked: E,
        onChange: R
      }
    ),
    /* @__PURE__ */ D.jsx("label", { htmlFor: `${c}-${p}`, children: d })
  ] });
}, AE = ({
  component: c,
  onAction: p
}) => {
  const d = Ue.useCallback((_) => {
    if (!_ || !_.component)
      return console.warn("Invalid component definition:", _), null;
    const { component: w, props: E } = _, h = { ...E, onAction: p };
    switch (w) {
      // Basic Components
      case "Icon":
        return /* @__PURE__ */ D.jsx(jE, { ...h });
      case "Header":
        return /* @__PURE__ */ D.jsx(eL, { ...h });
      case "TextContent":
        return /* @__PURE__ */ D.jsx(nL, { ...h });
      // Button Components
      case "Button":
        return /* @__PURE__ */ D.jsx(rL, { ...h });
      case "ButtonGroup":
        return /* @__PURE__ */ D.jsx(
          aL,
          {
            ...h,
            renderComponent: d
          }
        );
      // Layout Components
      case "Card":
        return /* @__PURE__ */ D.jsx(
          iL,
          {
            ...h,
            renderComponent: d
          }
        );
      // List Component
      case "List":
        return /* @__PURE__ */ D.jsx(oL, { ...h });
      // Stats Component
      case "Stats":
        return /* @__PURE__ */ D.jsx(lL, { ...h });
      // ProfileTile Component
      case "ProfileTile":
        return /* @__PURE__ */ D.jsx(
          uL,
          {
            ...h,
            renderComponent: d
          }
        );
      // MiniCard Components
      case "MiniCard":
        return /* @__PURE__ */ D.jsx(
          sL,
          {
            ...h,
            renderComponent: d
          }
        );
      case "MiniCardBlock":
        return /* @__PURE__ */ D.jsx(
          cL,
          {
            ...h,
            renderComponent: d
          }
        );
      // Steps Components
      case "Steps":
        return /* @__PURE__ */ D.jsx(
          dL,
          {
            ...h,
            renderComponent: d
          }
        );
      case "StepsItem":
        return /* @__PURE__ */ D.jsx(
          fL,
          {
            ...h,
            renderComponent: d
          }
        );
      // Section Components
      case "SectionBlock":
        return /* @__PURE__ */ D.jsx(
          pL,
          {
            ...h,
            renderComponent: d
          }
        );
      // Form Components
      case "Form":
        return /* @__PURE__ */ D.jsx(
          EL,
          {
            ...h,
            renderComponent: d
          }
        );
      case "Input":
        return /* @__PURE__ */ D.jsx(vL, { ...h });
      case "TextArea":
        return /* @__PURE__ */ D.jsx(hL, { ...h });
      case "Select":
        return /* @__PURE__ */ D.jsx(mL, { ...h });
      case "Checkbox":
        return /* @__PURE__ */ D.jsx(yL, { ...h });
      case "RadioGroup":
        return /* @__PURE__ */ D.jsx(gL, { ...h });
      case "CheckBoxGroup":
        return /* @__PURE__ */ D.jsx(_L, { ...h });
      case "DatePicker":
        return /* @__PURE__ */ D.jsx(SL, { ...h });
      case "RadioItem":
        return /* @__PURE__ */ D.jsx(wL, { ...h });
      case "CheckBoxItem":
        return /* @__PURE__ */ D.jsx(xL, { ...h });
      default:
        return console.warn(`Unknown component: ${w}`), /* @__PURE__ */ D.jsxs("div", { style: {
          padding: "8px",
          background: "rgba(255,0,0,0.1)",
          borderRadius: "4px",
          fontSize: "12px",
          color: "#ff6b6b"
        }, children: [
          "Unknown component: ",
          w
        ] });
    }
  }, [p]);
  return /* @__PURE__ */ D.jsx(D.Fragment, { children: d(c) });
};
function UE(c) {
  try {
    const p = c.indexOf('<content thesys="true">');
    if (p === -1)
      return oE(c);
    const d = c.substring(p + 23), _ = d.indexOf("</content>");
    let w = _ !== -1 ? d.substring(0, _).trim() : d.trim();
    w = w.replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#39;/g, "'").replace(/&apos;/g, "'");
    try {
      const E = JSON.parse(w);
      if (E.component)
        return E;
    } catch {
      return bL(w);
    }
    return oE(c);
  } catch (p) {
    return console.error("parseStreamingGenUI - Error:", p), null;
  }
}
function bL(c) {
  let p = null, d = -1, _ = -1;
  const w = /"component"\s*:\s*"([^"]+)"/g;
  let E;
  for (; (E = w.exec(c)) !== null; ) {
    const h = c.substring(0, E.index), R = (h.match(/\{/g) || []).length - (h.match(/\}/g) || []).length;
    R >= 1 && R > _ && (p = E, d = E.index, _ = R);
  }
  if (p && p[1]) {
    const h = p[1], k = c.substring(d + p[0].length).match(/"props"\s*:\s*\{([\s\S]*?)(\}|$)/);
    let x = {};
    if (k && k[1]) {
      const M = k[1], A = /"([^"]+)"\s*:\s*"([^"]*)"|"([^"]+)"\s*:\s*(\d+|true|false|null)/g;
      let V;
      for (; (V = A.exec(M)) !== null; ) {
        const $ = V[1] || V[3], re = V[2] || V[4];
        $ && (x[$] = re === "true" ? !0 : re === "false" ? !1 : re === "null" ? null : re);
      }
      M.includes('"children"') && M.includes("[") && (x.children = []);
    }
    return {
      component: {
        component: h,
        props: x
      },
      error: null
    };
  }
  return null;
}
function oE(c) {
  if (c.trim().startsWith("{"))
    try {
      const p = JSON.parse(c);
      if (p.component)
        return p;
    } catch {
      const d = c.match(/"component"\s*:\s*"([^"]+)"/);
      return d && d[1] ? {
        component: {
          component: d[1],
          props: {}
        },
        error: null
      } : null;
    }
  return null;
}
const RL = ({
  content: c,
  isStreaming: p,
  onAction: d
}) => {
  const [_, w] = Ue.useState(null);
  return Ue.useEffect(() => {
    if (!c) {
      w(null);
      return;
    }
    const E = UE(c);
    if (E?.component) {
      const h = E.component;
      if (h && typeof h == "object" && "component" in h) {
        const R = h.component, k = h.props || {};
        typeof R == "string" ? w({
          component: R,
          props: k
        }) : R && typeof R == "object" && "component" in R && w(R);
      }
    }
  }, [c]), _ ? /* @__PURE__ */ D.jsxs("div", { className: Ae.streamingContainer, children: [
    p && /* @__PURE__ */ D.jsx("div", { className: Ae.streamingIndicator, children: /* @__PURE__ */ D.jsx("span", { children: "Building interface..." }) }),
    /* @__PURE__ */ D.jsx(AE, { component: _, onAction: d })
  ] }) : p ? /* @__PURE__ */ D.jsx("div", { className: Ae.streamingContainer, children: /* @__PURE__ */ D.jsxs("div", { className: Ae.skeletonLoader, children: [
    /* @__PURE__ */ D.jsx("div", { className: Ae.skeletonShimmer }),
    /* @__PURE__ */ D.jsx("span", { children: "Generating interface..." })
  ] }) }) : null;
};
function kL(c) {
  const p = {
    "&quot;": '"',
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&nbsp;": " "
  };
  return c.replace(/&(?:quot|amp|lt|gt|apos|#39|nbsp);/g, (d) => p[d] || d);
}
function TL(c) {
  try {
    const p = c.match(/<content\s+thesys="true">([\s\S]*?)<\/content>/);
    if (p && p[1]) {
      const d = kL(p[1].trim());
      return JSON.parse(d);
    }
    if (c.trim().startsWith("{")) {
      const d = JSON.parse(c);
      if (d.component)
        return d;
    }
    return null;
  } catch (p) {
    return console.error("Failed to parse GenUI response:", p), null;
  }
}
function DL(c) {
  return !!(c.includes('<content thesys="true">') || c.trim().startsWith("{") && c.includes('"component"'));
}
function NL(c) {
  const p = c.indexOf('<content thesys="true">');
  return p > 0 ? c.substring(0, p).trim() : "";
}
const ML = ({
  message: c,
  onAction: p,
  onUpdateMessage: d
}) => {
  const _ = c.role === "user", w = c.role === "assistant", E = Ue.useMemo(() => c.content ? DL(c.content) : !1, [c.content]), h = Ue.useMemo(() => {
    if (!c.content) return null;
    if (E) {
      if (c.isStreaming) {
        const M = UE(c.content);
        return M?.component ? M : null;
      }
      return TL(c.content);
    }
    return null;
  }, [c.content, c.isStreaming, E]), R = Ue.useMemo(() => c.content ? NL(c.content) : "", [c.content]), k = Ue.useCallback((M, A) => {
    if (!p) return;
    const V = {
      type: M.type,
      params: {
        ...M.props,
        formData: A
      }
    };
    console.log("event", V), console.log("formData", A), p(V);
  }, [p]), x = () => E ? /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
    R && /* @__PURE__ */ D.jsx("div", { className: iu.textContent, children: R }),
    /* @__PURE__ */ D.jsx(
      RL,
      {
        content: c.content,
        isStreaming: c.isStreaming || !1,
        onAction: k
      }
    )
  ] }) : h?.component ? /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
    R && /* @__PURE__ */ D.jsx("div", { className: iu.textContent, children: R }),
    /* @__PURE__ */ D.jsx(
      AE,
      {
        component: h.component,
        onAction: k
      }
    )
  ] }) : /* @__PURE__ */ D.jsx("div", { className: iu.textContent, children: c.content || (c.isStreaming ? "" : "No response") });
  return /* @__PURE__ */ D.jsx(
    "div",
    {
      className: `${iu.messageContainer} ${_ ? iu.user : iu.assistant}`,
      children: _ ? /* @__PURE__ */ D.jsx("div", { className: iu.userMessage, children: /* @__PURE__ */ D.jsx("p", { children: c.content }) }) : w ? /* @__PURE__ */ D.jsxs("div", { className: iu.assistantMessage, children: [
        c.isStreaming && !c.content && /* @__PURE__ */ D.jsxs("div", { className: iu.streamingIndicator, children: [
          /* @__PURE__ */ D.jsx("span", {}),
          /* @__PURE__ */ D.jsx("span", {}),
          /* @__PURE__ */ D.jsx("span", {})
        ] }),
        x()
      ] }) : null
    }
  );
}, LL = "_overlay_271nu_1", OL = "_modal_271nu_21", jL = "_header_271nu_42", AL = "_closeButton_271nu_55", UL = "_selectedInfo_271nu_77", zL = "_inputGroup_271nu_99", PL = "_actions_271nu_130", IL = "_cancelBtn_271nu_136", FL = "_confirmBtn_271nu_137", ou = {
  overlay: LL,
  modal: OL,
  header: jL,
  closeButton: AL,
  selectedInfo: UL,
  inputGroup: zL,
  actions: PL,
  cancelBtn: IL,
  confirmBtn: FL
}, VL = ({
  isOpen: c,
  onClose: p,
  humanFriendlyMessage: d,
  llmFriendlyMessage: _,
  onConfirm: w
}) => {
  const [E, h] = Ue.useState(_);
  if (Ue.useEffect(() => {
    h(_);
  }, [_]), Ue.useEffect(() => {
    const k = (x) => {
      x.key === "Escape" && p();
    };
    if (c)
      return window.addEventListener("keydown", k), () => window.removeEventListener("keydown", k);
  }, [c, p]), !c) return null;
  const R = (k) => {
    k.preventDefault(), E.trim() && w(E.trim());
  };
  return /* @__PURE__ */ D.jsx("div", { className: ou.overlay, onClick: p, children: /* @__PURE__ */ D.jsxs("div", { className: ou.modal, onClick: (k) => k.stopPropagation(), children: [
    /* @__PURE__ */ D.jsxs("div", { className: ou.header, children: [
      /* @__PURE__ */ D.jsx("h2", { children: "Edit Your Response" }),
      /* @__PURE__ */ D.jsx("button", { className: ou.closeButton, onClick: p, children: /* @__PURE__ */ D.jsx(
        "svg",
        {
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          children: /* @__PURE__ */ D.jsx("path", { d: "M18 6L6 18M6 6l12 12" })
        }
      ) })
    ] }),
    /* @__PURE__ */ D.jsxs("form", { onSubmit: R, children: [
      /* @__PURE__ */ D.jsxs("div", { className: ou.selectedInfo, children: [
        /* @__PURE__ */ D.jsx("label", { children: "Your Selection" }),
        /* @__PURE__ */ D.jsx("p", { children: d })
      ] }),
      /* @__PURE__ */ D.jsxs("div", { className: ou.inputGroup, children: [
        /* @__PURE__ */ D.jsx("label", { htmlFor: "editMessage", children: "Edit message before sending:" }),
        /* @__PURE__ */ D.jsx(
          "textarea",
          {
            id: "editMessage",
            value: E,
            onChange: (k) => h(k.target.value),
            placeholder: "Edit your message...",
            rows: 4,
            autoFocus: !0
          }
        )
      ] }),
      /* @__PURE__ */ D.jsxs("div", { className: ou.actions, children: [
        /* @__PURE__ */ D.jsx("button", { type: "button", className: ou.cancelBtn, onClick: p, children: "Cancel" }),
        /* @__PURE__ */ D.jsx(
          "button",
          {
            type: "submit",
            className: ou.confirmBtn,
            disabled: !E.trim(),
            children: "Send Message"
          }
        )
      ] })
    ] })
  ] }) });
}, X1 = (c) => `<content thesys="true">${JSON.stringify({ component: c, error: null })}</content>`, lE = () => `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, HL = (c) => {
  const { sendMessage: p, setPendingAction: d, setIsModalOpen: _, context: w, addMessage: E, updateMessage: h } = c;
  return (R) => {
    switch (console.log("Action received:", R), R.type) {
      case "continue_conversation":
        if (R.params) {
          const { humanFriendlyMessage: k, llmFriendlyMessage: x, prompt: M } = R.params;
          M ? p(M) : k && x && (d({
            humanFriendlyMessage: k,
            llmFriendlyMessage: x
          }), _(!0));
        }
        break;
      case "open_url":
        R.params?.url && window.open(R.params.url, "_blank", "noopener,noreferrer");
        break;
      case "submit_form":
        if (R.params?.formData) {
          const k = R.params.formData, x = R.params.formName || "form", M = Object.entries(k).filter(([V, $]) => $ !== void 0 && $ !== "").map(([V, $]) => `${V.replace(/_/g, " ")}: ${$}`).join(`
`), A = `Form submitted: ${x}

${M}`;
          console.log("Sending form data to LLM:", A), p(A);
        }
        break;
      case "add_assistant_message":
        if (R.params?.content || R.params?.componentData) {
          const k = lE(), x = R.params.chatKey;
          let M;
          R.params.componentData ? M = `<content thesys="true">${JSON.stringify(R.params.componentData)}</content>` : M = R.params.content, E(w, {
            id: k,
            role: "assistant",
            content: M,
            timestamp: /* @__PURE__ */ new Date(),
            isStreaming: !1
          }, x);
        }
        break;
      case "create_suggestion_request":
        if (R.params) {
          const { personName: k, personTitle: x, companyName: M, masterPersonId: A, chatKey: V } = R.params, { user_id: $ } = Ma.getState(), re = {
            request_panel_title: `Suggestion Request for ${k}`,
            request_header_title: `People to introduce to ${k}`,
            request_context: `Find people from my network to introduce to ${k}, who is ${x} at ${M}`,
            status: "suggestion",
            user_id: $,
            copilot_mode: "loop",
            master_person_id: A
          }, ie = lE();
          E(w, {
            id: ie,
            role: "assistant",
            content: X1({
              component: "Card",
              props: {
                children: [{
                  component: "TextContent",
                  props: { textMarkdown: `⏳ Creating suggestion request for **${k}**...` }
                }]
              }
            }),
            timestamp: /* @__PURE__ */ new Date(),
            isStreaming: !1
          }, V), by.getState().createSuggestionRequest(re).then(() => {
            const { createSuggestionRequestError: Ce } = by.getState(), Re = X1(Ce ? {
              component: "Card",
              props: {
                children: [{
                  component: "TextContent",
                  props: { textMarkdown: `❌ Failed: ${Ce}` }
                }]
              }
            } : {
              component: "Card",
              props: {
                children: [
                  {
                    component: "Header",
                    props: { title: "✅ Suggestion Request Created", subtitle: `For ${k}` }
                  },
                  {
                    component: "TextContent",
                    props: { textMarkdown: "Your suggestion request has been created successfully! You can view it in the sidebar under Leverage Loops." }
                  }
                ]
              }
            });
            if (h(w, ie, Re, !1, V), !Ce) {
              const { setSelectedPerson: ge, setSelectedSuggestionRequest: oe } = dd.getState();
              ge(null), oe(null);
            }
          });
        }
        break;
      default:
        console.log("Unhandled action type:", R.type);
    }
  };
}, $L = {
  // Basic Components
  Icon: { allowed: !0, description: "Icon component for visual indicators" },
  Header: { allowed: !0, description: "Header with title and optional subtitle" },
  TextContent: { allowed: !0, description: "Markdown text content" },
  // Button Components
  Button: { allowed: !0, description: "Interactive button" },
  ButtonGroup: { allowed: !0, description: "Group of buttons (horizontal or vertical)" },
  // Layout Components
  Card: { allowed: !0, description: "Container card for grouping content" },
  List: { allowed: !0, description: "List of items with optional icons and actions" },
  // Form Components (simplified)
  Form: { allowed: !0, description: "Form container for inputs" },
  Input: { allowed: !0, description: "Text input field" },
  TextArea: { allowed: !0, description: "Multi-line text area" },
  Checkbox: { allowed: !0, description: "Single checkbox" },
  // Form Components (advanced)
  Select: { allowed: !1, description: "Dropdown select (often unnecessary)" },
  RadioGroup: { allowed: !1, description: "Radio button group for single selection" },
  RadioItem: { allowed: !0, description: "Individual radio button item" },
  CheckBoxGroup: { allowed: !1, description: "Checkbox group for multiple selection" },
  CheckBoxItem: { allowed: !0, description: "Individual checkbox item" },
  DatePicker: { allowed: !0, description: "Date picker input" },
  // Advanced Layout Components
  Stats: { allowed: !0, description: "Number with label" },
  ProfileTile: { allowed: !0, description: "Profile tile with title, label, and icon" },
  MiniCard: { allowed: !1, description: "Compact card layout" },
  MiniCardBlock: { allowed: !1, description: "Block of mini cards" },
  Steps: { allowed: !1, description: "Step-by-step guide" },
  StepsItem: { allowed: !1, description: "Individual step item" },
  SectionBlock: { allowed: !1, description: "Collapsible section block" }
}, BL = () => Object.entries($L).filter(([c, p]) => p.allowed).map(([c]) => c), qL = () => `You can use these GenUI components: ${BL().join(", ")}. Do not use any other components. Keep the interface simple and avoid unnecessary complexity.`, WL = "_chatContainer_yizac_1", YL = "_header_yizac_9", GL = "_subtitle_yizac_24", QL = "_messagesContainer_yizac_31", KL = "_emptyState_yizac_50", XL = "_copilotEmptyState_yizac_61", JL = "_logo_yizac_71", ZL = "_welcomeMessage_yizac_78", eO = "_welcomeGreeting_yizac_84", tO = "_welcomeSubtext_yizac_94", nO = "_leverageLoopSummary_yizac_115", rO = "_summaryCard_yizac_120", aO = "_summaryCardHeader_yizac_131", iO = "_summaryCardTitle_yizac_138", oO = "_summaryCardInput_yizac_158", lO = "_summaryTextarea_yizac_163", uO = "_summaryCardButton_yizac_186", sO = "_playIcon_yizac_214", Mr = {
  chatContainer: WL,
  header: YL,
  subtitle: GL,
  messagesContainer: QL,
  emptyState: KL,
  copilotEmptyState: XL,
  logo: JL,
  welcomeMessage: ZL,
  welcomeGreeting: eO,
  welcomeSubtext: tO,
  leverageLoopSummary: nO,
  summaryCard: rO,
  summaryCardHeader: aO,
  summaryCardTitle: iO,
  summaryCardInput: oO,
  summaryTextarea: lO,
  summaryCardButton: uO,
  playIcon: sO
}, cO = ({
  onSendMessage: c,
  isLoading: p
}) => {
  const [d, _] = Ue.useState(""), { selectedPerson: w, selectedSuggestionRequest: E, leverageLoopSummaries: h, upsertLeverageLoopSummary: R } = dd(
    uu((A) => ({
      selectedPerson: A.selectedPerson,
      selectedSuggestionRequest: A.selectedSuggestionRequest,
      leverageLoopSummaries: A.leverageLoopSummaries,
      upsertLeverageLoopSummary: A.upsertLeverageLoopSummary
    }))
  );
  Ue.useEffect(() => {
    let A = null;
    if (w ? A = w.full_name : E && (A = E.request_header_title), A) {
      const V = h.find(($) => $.id === A);
      _(V?.content || "");
    } else
      _("");
  }, [w, E, h]);
  const k = () => w ? `Leverage loop summary for ${w.full_name}` : E ? E.request_header_title : "Leverage Loops", x = () => {
    d.trim() && (c(d.trim()), _(""));
  }, M = (A) => {
    _(A.target.value), w && R({ id: w.full_name, content: A.target.value, timestamp: /* @__PURE__ */ new Date() }), E && R({ id: E.request_header_title, content: A.target.value, timestamp: /* @__PURE__ */ new Date() });
  };
  return /* @__PURE__ */ D.jsx("div", { className: Mr.leverageLoopSummary, children: /* @__PURE__ */ D.jsxs("div", { className: Mr.summaryCard, children: [
    /* @__PURE__ */ D.jsxs("div", { className: Mr.summaryCardHeader, children: [
      /* @__PURE__ */ D.jsx("p", { className: Mr.summaryCardTitle, children: k() }),
      /* @__PURE__ */ D.jsx(
        "button",
        {
          className: Mr.summaryCardButton,
          onClick: x,
          disabled: !d.trim() || p,
          children: /* @__PURE__ */ D.jsx("span", { className: Mr.playIcon, children: "▶" })
        }
      )
    ] }),
    /* @__PURE__ */ D.jsx("div", { className: Mr.summaryCardInput, children: /* @__PURE__ */ D.jsx(
      "textarea",
      {
        className: Mr.summaryTextarea,
        placeholder: "Summary of what I can help you with...",
        value: d,
        onChange: (A) => M(A),
        rows: 2
      }
    ) })
  ] }) });
}, zE = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.15816%2015.5394C4.42185%2015.8099%203.64142%2015.9909%202.82808%2016.0678C2.75965%2016.0739%202.69009%2016.0784%202.62129%2016.081C2.05326%2016.1048%201.47513%2015.9215%201.00732%2015.5213C0.154714%2014.7923%20-0.052828%2013.5813%200.443029%2012.6226C0.448638%2012.6116%200.453874%2012.6011%200.459857%2012.5898L3.41481%206.77869C2.08654%209.73401%202.83855%2013.3286%205.16339%2015.5372L5.15816%2015.5391V15.5394Z'%20fill='url(%23paint0_linear_23492_1459)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.8419%204.46013C15.5782%204.18972%2016.3587%204.00906%2017.172%203.93175C17.2401%203.92571%2017.31%203.92119%2017.3788%203.91855C17.9468%203.89479%2018.525%204.07808%2018.9928%204.47823C19.845%205.20726%2020.0529%206.41828%2019.5571%207.37699C19.5515%207.3883%2019.5458%207.39886%2019.5402%207.4098L16.5853%2013.2205C17.9132%2010.2648%2017.1615%206.67059%2014.8367%204.46202L14.8419%204.46013Z'%20fill='url(%23paint1_linear_23492_1459)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10%202.61975C11.8545%202.61975%2013.547%203.31559%2014.8367%204.46211C12.464%205.51888%2010.8283%207.5913%2010.1904%2010.0563C9.55242%2012.5214%207.60302%2014.6787%205.16338%2015.5378C3.66459%2014.2306%202.68222%2012.2057%202.68222%2010.0001C2.68259%205.92394%205.95877%202.61975%2010%202.61975Z'%20fill='url(%23paint2_linear_23492_1459)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.8367%204.46167C16.358%205.81412%2017.3179%207.79376%2017.3179%209.99932C17.3179%2014.0751%2014.0417%2017.3793%2010.0001%2017.3793C8.14604%2017.3793%206.45317%2016.6835%205.16342%2015.537C7.59222%2014.5651%209.36213%2012.4644%2010.0001%209.99932C10.638%207.53429%2012.4079%205.4332%2014.8367%204.46167Z'%20fill='url(%23paint3_linear_23492_1459)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_23492_1459'%20x1='1.41231'%20y1='10.771'%20x2='6.31346'%20y2='13.2684'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFAE00'%20stop-opacity='0.12'/%3e%3cstop%20offset='1'%20stop-color='%23FFAE00'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_23492_1459'%20x1='13.6991'%20y1='6.69473'%20x2='18.6306'%20y2='9.20746'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2313F562'/%3e%3cstop%20offset='1'%20stop-color='%2313F562'%20stop-opacity='0.09'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_23492_1459'%20x1='4.21878'%20y1='14.805'%20x2='10.8001'%20y2='2.68539'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FD5743'/%3e%3cstop%20offset='0.21'%20stop-color='%23D13D58'/%3e%3cstop%20offset='0.4'%20stop-color='%23AB2868'/%3e%3cstop%20offset='0.6'%20stop-color='%238C1B6F'/%3e%3cstop%20offset='1'%20stop-color='%23280553'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint3_linear_23492_1459'%20x1='9.19834'%20y1='17.5257'%20x2='15.8611'%20y2='5.25654'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23130F56'/%3e%3cstop%20offset='0.41'%20stop-color='%23105D8E'/%3e%3cstop%20offset='0.6'%20stop-color='%23107995'/%3e%3cstop%20offset='0.79'%20stop-color='%2311A39E'/%3e%3cstop%20offset='1'%20stop-color='%2313EBAF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e", fO = () => {
  const { user_name: c } = Ma(
    uu((_) => ({
      user_name: _.user_name
    }))
  ), p = () => {
    const _ = (/* @__PURE__ */ new Date()).getHours();
    return _ < 12 ? "Ready to make today legendary?" : _ < 18 ? "Afternoon power move—let's go!" : "Still crushing it? I like your style.";
  }, d = c || "there";
  return /* @__PURE__ */ D.jsxs("div", { className: Mr.copilotEmptyState, children: [
    /* @__PURE__ */ D.jsx("img", { src: zE, alt: "Orbiter Logo", className: Mr.logo }),
    /* @__PURE__ */ D.jsxs("div", { className: Mr.welcomeMessage, children: [
      /* @__PURE__ */ D.jsxs("h2", { className: Mr.welcomeGreeting, children: [
        "Ready to make magic today, ",
        d
      ] }),
      /* @__PURE__ */ D.jsx("p", { className: Mr.welcomeSubtext, children: p() })
    ] })
  ] });
}, Ry = () => `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, c_ = ({
  context: c,
  title: p,
  subtitle: d,
  systemPrompt: _
}) => {
  const {
    chatState: w,
    addMessage: E,
    updateMessage: h,
    setIsLoading: R,
    upsertLeverageLoopSummary: k,
    selectedPerson: x,
    selectedSuggestionRequest: M
  } = dd(
    uu((Ee) => c === "leverage-loops" ? {
      chatState: Ee.getCurrentLeverageLoopChat(),
      addMessage: Ee.addMessage,
      updateMessage: Ee.updateMessage,
      setIsLoading: Ee.setIsLoading,
      upsertLeverageLoopSummary: Ee.upsertLeverageLoopSummary,
      selectedPerson: Ee.selectedPerson,
      selectedSuggestionRequest: Ee.selectedSuggestionRequest
    } : {
      chatState: Ee[c === "copilot" ? "copilotChat" : "outcomesChat"],
      addMessage: Ee.addMessage,
      updateMessage: Ee.updateMessage,
      setIsLoading: Ee.setIsLoading,
      upsertLeverageLoopSummary: Ee.upsertLeverageLoopSummary,
      selectedPerson: Ee.selectedPerson,
      selectedSuggestionRequest: Ee.selectedSuggestionRequest
    })
  );
  function A(Ee) {
    const Q = Ee.match(/\[SUMMARY\](.*?)\[\/SUMMARY\]/s);
    let Z = null;
    if (Q && Q[1]) {
      Z = Q[1].trim();
      let xe = Ee.replace(/\[SUMMARY\].*$/s, "</content>").trim();
      return Z && c === "leverage-loops" && V(Z), Q || (xe = Ee), {
        cleanContent: xe
      };
    }
    return {
      cleanContent: Ee
    };
  }
  const V = Ue.useCallback((Ee) => {
    if (c !== "leverage-loops") return;
    let Q = null;
    x ? Q = x.full_name : M && (Q = M.request_header_title), Q && Ee && k({
      id: Q,
      content: Ee,
      timestamp: /* @__PURE__ */ new Date()
    });
  }, [c, x, M, k]), { messages: $, threadId: re, isLoading: ie } = w, Ce = c === "leverage-loops" && $.length > 1, [Re, ge] = Za.useState(!1), [oe, be] = Za.useState(null), de = Ue.useRef(null);
  Ue.useEffect(() => {
    de.current?.scrollIntoView({ behavior: "smooth" });
  }, [$]);
  const Ye = Ue.useCallback(
    async (Ee) => {
      if (!Ee.trim() || ie) return;
      const Q = {
        id: Ry(),
        role: "user",
        content: Ee.trim(),
        timestamp: /* @__PURE__ */ new Date()
      };
      E(c, Q), R(c, !0);
      const Z = Ry();
      E(c, {
        id: Z,
        role: "assistant",
        content: "",
        timestamp: /* @__PURE__ */ new Date(),
        isStreaming: !0
      });
      try {
        const Pe = qL(), we = `${_ || "You are a helpful AI assistant."}

${Pe}

User: ${Ee.trim()}`, { copilot_llm_endpoint: F } = Ma.getState(), le = await fetch(`${F || "http://localhost:3001"}/api/chat`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            prompt: {
              role: "user",
              content: we,
              id: Q.id
            },
            threadId: re,
            responseId: Z,
            context: c
            // Pass context to backend if needed
          })
        });
        if (!le.ok)
          throw new Error(`API error: ${le.status}`);
        const U = le.body?.getReader(), ee = new TextDecoder();
        let Xe = "";
        if (U)
          for (; ; ) {
            const { done: mt, value: rt } = await U.read();
            if (mt) break;
            const Le = ee.decode(rt, { stream: !0 });
            Xe += Le;
            const { cleanContent: ct } = A(Xe);
            h(c, Z, ct || Xe, !0);
          }
        const { cleanContent: Ie } = A(Xe);
        h(c, Z, Ie, !1);
      } catch (Pe) {
        console.error("Failed to send message:", Pe), h(
          c,
          Z,
          "Sorry, there was an error processing your request.",
          !1
        );
      } finally {
        R(c, !1);
      }
    },
    [ie, re, c, _, E, h, R, A, V]
  ), He = Ue.useCallback(
    (Ee) => {
      HL({
        sendMessage: Ye,
        setPendingAction: be,
        setIsModalOpen: ge,
        context: c,
        addMessage: E,
        updateMessage: h
      })(Ee);
    },
    [Ye, be, ge, c, E, h]
  ), Be = Ue.useCallback(
    (Ee, Q) => {
      h(c, Ee, Q);
    },
    [c, h]
  ), nt = Ue.useCallback(
    (Ee) => {
      ge(!1), be(null), Ye(Ee);
    },
    [Ye]
  ), ut = Ue.useCallback(() => {
    ge(!1), be(null);
  }, []);
  return /* @__PURE__ */ D.jsxs("div", { className: Mr.chatContainer, children: [
    /* @__PURE__ */ D.jsxs("div", { className: Mr.header, children: [
      /* @__PURE__ */ D.jsx("h1", { children: p }),
      d && /* @__PURE__ */ D.jsx("p", { className: Mr.subtitle, children: d })
    ] }),
    Ce && /* @__PURE__ */ D.jsx(
      cO,
      {
        onSendMessage: Ye,
        isLoading: ie
      }
    ),
    /* @__PURE__ */ D.jsxs("div", { className: Mr.messagesContainer, children: [
      $.length === 0 ? c === "copilot" ? /* @__PURE__ */ D.jsx(fO, {}) : /* @__PURE__ */ D.jsx("div", { className: Mr.emptyState, children: /* @__PURE__ */ D.jsx("p", { children: "Start a conversation" }) }) : $.map((Ee) => /* @__PURE__ */ D.jsx(
        ML,
        {
          message: Ee,
          onAction: He,
          onUpdateMessage: (Q) => Be(Ee.id, Q)
        },
        Ee.id
      )),
      /* @__PURE__ */ D.jsx("div", { ref: de })
    ] }),
    /* @__PURE__ */ D.jsx(NN, { onSend: Ye, disabled: ie }),
    oe && /* @__PURE__ */ D.jsx(
      VL,
      {
        isOpen: Re,
        onClose: ut,
        humanFriendlyMessage: oe.humanFriendlyMessage,
        llmFriendlyMessage: oe.llmFriendlyMessage,
        onConfirm: nt
      }
    )
  ] });
}, dO = (c) => ({
  component: {
    component: "Card",
    props: {
      children: [
        {
          component: "Header",
          props: {
            title: `Leverage your network to benefit ${c.full_name}`,
            subtitle: c.master_person?.current_title ? `${c.master_person.current_title} · ${c.master_person?.master_company?.company_name || ""}` : ""
          }
        },
        {
          component: "TextContent",
          props: {
            textMarkdown: `I'm here to help you make the most of your connection with **${c.full_name}**. What would you like to do?`
          }
        },
        {
          component: "ButtonGroup",
          props: {
            variant: "vertical",
            children: [
              {
                component: "Button",
                props: {
                  children: "Suggest people to introduce to " + c.full_name,
                  variant: "secondary",
                  action: {
                    type: "create_suggestion_request",
                    props: {
                      masterPersonId: c.master_person_id,
                      personName: c.full_name,
                      personTitle: c.master_person?.current_title || "a professional",
                      companyName: c.master_person?.master_company?.company_name || "their company",
                      chatKey: c.full_name,
                      prompt: `Please suggest people from my network that I should introduce to ${c.full_name}. Consider their role as ${c.master_person?.current_title || "a professional"} at ${c.master_person?.master_company?.company_name || "their company"} and identify connections who could provide mutual value.`
                    }
                  }
                }
              },
              {
                component: "Button",
                props: {
                  children: "Help " + c.full_name + " with a specific task",
                  variant: "secondary",
                  action: {
                    type: "add_assistant_message",
                    props: {
                      chatKey: c.full_name,
                      componentData: {
                        component: {
                          component: "Card",
                          props: {
                            children: [
                              // {
                              //   component: "Header",
                              //   props: {
                              //     title: "How would you like to help " + person.full_name + "?",
                              //     subtitle: (person.master_person?.current_title || '') + " · " + (person.master_person?.master_company?.company_name || '')
                              //   }
                              // },
                              {
                                component: "TextContent",
                                props: {
                                  textMarkdown: "Tell me what kind of assistance you'd like to provide to **" + c.full_name + `**. For example:

- Make an introduction to someone in your network
- Share relevant resources or information
- Offer advice or expertise in a specific area
- Connect them with an opportunity

Type your response below and I'll help you plan the best approach.`
                                }
                              }
                            ]
                          }
                        },
                        error: null
                      }
                    }
                  }
                }
              }
            ]
          }
        }
      ]
    }
  },
  error: null
}), pO = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%205.83329C9.17592%205.83329%208.37034%206.07766%207.68514%206.5355C6.99993%206.99334%206.46588%207.64408%206.15051%208.40544C5.83515%209.1668%205.75264%2010.0046%205.91341%2010.8128C6.07418%2011.6211%206.47102%2012.3635%207.05373%2012.9462C7.63645%2013.529%208.37888%2013.9258%209.18714%2014.0866C9.99539%2014.2473%2010.8332%2014.1648%2011.5945%2013.8495C12.3559%2013.5341%2013.0066%2013%2013.4645%2012.3148C13.9223%2011.6296%2014.1667%2010.824%2014.1667%209.99995M10.8333%202.54579C9.28839%202.37246%207.72776%202.68352%206.36733%203.43593C5.0069%204.18834%203.9139%205.34492%203.23953%206.74567C2.56516%208.14643%202.34274%209.72213%202.60305%2011.2548C2.86335%2012.7875%203.59352%2014.2014%204.69253%2015.301C5.79155%2016.4006%207.2051%2017.1314%208.73766%2017.3925C10.2702%2017.6536%2011.846%2017.432%2013.2471%2016.7583C14.6482%2016.0846%2015.8053%2014.9922%2016.5584%2013.6322C17.3115%2012.2721%2017.6234%2010.7117%2017.4508%209.16662M12.5%207.49995V4.99995L15%202.49995V4.99995H17.5L15%207.49995H12.5ZM12.5%207.49995L10%209.99995M9.16668%209.99995C9.16668%2010.221%209.25447%2010.4329%209.41076%2010.5892C9.56704%2010.7455%209.779%2010.8333%2010%2010.8333C10.221%2010.8333%2010.433%2010.7455%2010.5893%2010.5892C10.7455%2010.4329%2010.8333%2010.221%2010.8333%209.99995C10.8333%209.77894%2010.7455%209.56698%2010.5893%209.4107C10.433%209.25442%2010.221%209.16662%2010%209.16662C9.779%209.16662%209.56704%209.25442%209.41076%209.4107C9.25447%209.56698%209.16668%209.77894%209.16668%209.99995Z'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", vO = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.5533%205.43171C14.1448%204.53303%2013.4793%203.77539%2012.6409%203.2543C11.8024%202.73321%2010.8285%202.47198%209.84179%202.50353C8.8551%202.53509%207.89984%202.85802%207.09639%203.43162C6.29294%204.00523%205.67727%204.80383%205.32698%205.72679C4.97669%206.64974%204.90745%207.65573%205.12798%208.61798C5.34852%209.58022%205.84897%2010.4556%206.56625%2011.1339C7.28353%2011.8122%208.18555%2012.263%209.15861%2012.4294C10.1317%2012.5958%2011.1322%2012.4705%2012.0342%2012.0692'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M14.5683%2014.5533C15.467%2014.1448%2016.2246%2013.4793%2016.7457%2012.6409C17.2668%2011.8024%2017.5281%2010.8284%2017.4965%209.84176C17.4649%208.85507%2017.142%207.89981%2016.5684%207.09636C15.9948%206.29291%2015.1962%205.67724%2014.2732%205.32695C13.3503%204.97666%2012.3443%204.90742%2011.3821%205.12795C10.4198%205.34849%209.54439%205.84894%208.86612%206.56622C8.18784%207.2835%207.73708%208.18552%207.57064%209.15858C7.40419%2010.1316%207.52952%2011.1322%207.93083%2012.0341'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5.45001%2014.5684C5.8585%2015.467%206.52387%2016.2247%207.36227%2016.7459C8.20067%2017.267%209.17458%2017.5283%2010.1613%2017.4969C11.1479%2017.4654%2012.1032%2017.1425%2012.9067%2016.569C13.7102%2015.9955%2014.3259%2015.197%2014.6763%2014.2741C15.0267%2013.3512%2015.0961%2012.3452%2014.8756%2011.383C14.6552%2010.4207%2014.1549%209.54526%2013.4377%208.8669C12.7205%208.18855%2011.8186%207.73767%2010.8456%207.57109C9.87256%207.40451%208.872%207.52969%207.97001%207.93085'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5.43168%205.44995C4.53299%205.85844%203.77532%206.52381%203.25417%207.36221C2.73302%208.20061%202.47171%209.17452%202.50318%2010.1612C2.53465%2011.1479%202.85749%2012.1031%203.431%2012.9066C4.00451%2013.7101%204.80304%2014.3259%205.72594%2014.6763C6.64884%2015.0266%207.6548%2015.096%208.61706%2014.8756C9.57931%2014.6552%2010.4548%2014.1548%2011.1331%2013.4376C11.8115%2012.7205%2012.2624%2011.8185%2012.4289%2010.8455C12.5955%209.8725%2012.4703%208.87194%2012.0692%207.96995'%20stroke='%23A3A3A3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", hO = ({
  activeSection: c,
  onSectionChange: p,
  onSectionChangeConfiguration: d
}) => {
  const { leverageLoops: _, fetchNetworkPersons: w, fetchSuggestionRequests: E } = by(
    uu((oe) => ({
      leverageLoops: oe.leverageLoops,
      fetchNetworkPersons: oe.fetchNetworkPersons,
      fetchSuggestionRequests: oe.fetchSuggestionRequests
    }))
  ), {
    selectedPerson: h,
    selectedSuggestionRequest: R,
    setSelectedPerson: k,
    setSelectedSuggestionRequest: x,
    addMessage: M,
    leverageLoopChats: A
  } = dd(
    uu((oe) => ({
      selectedPerson: oe.selectedPerson,
      selectedSuggestionRequest: oe.selectedSuggestionRequest,
      setSelectedPerson: oe.setSelectedPerson,
      setSelectedSuggestionRequest: oe.setSelectedSuggestionRequest,
      addMessage: oe.addMessage,
      leverageLoopChats: oe.leverageLoopChats
    }))
  ), { token: V, baseUrl: $ } = Ma(
    uu((oe) => ({
      token: oe.token,
      baseUrl: oe.baseUrl
    }))
  ), [re, ie] = Ue.useState(/* @__PURE__ */ new Set()), Ce = (oe) => {
    ie((be) => {
      const de = new Set(be);
      return de.has(oe) ? de.delete(oe) : de.add(oe), de;
    });
  }, Re = (oe) => {
    k(oe), p("leverage-loops");
    const be = oe.full_name;
    if (!(A[be]?.messages?.[0]?.role === "assistant")) {
      const He = "leverage-loops", Be = Ry(), nt = `<content thesys="true">${JSON.stringify(dO(oe))}</content>`;
      M(He, {
        id: Be,
        role: "assistant",
        content: nt,
        timestamp: /* @__PURE__ */ new Date(),
        isStreaming: !1
      }, be);
    }
  }, ge = (oe) => {
    x(oe), p("leverage-loops");
  };
  return Ue.useEffect(() => {
    V && $ && (w(), E());
  }, [V, $, w, E]), /* @__PURE__ */ D.jsx("div", { className: Rn.sidebar, children: /* @__PURE__ */ D.jsxs("nav", { className: Rn.sidebarNav, children: [
    /* @__PURE__ */ D.jsxs(
      "button",
      {
        className: `${Rn.sidebarItem} ${c === "copilot" ? Rn.active : ""}`,
        onClick: () => p("copilot"),
        "aria-label": "Orbiter.io Copilot",
        children: [
          /* @__PURE__ */ D.jsx("span", { className: Rn.sidebarIcon, children: /* @__PURE__ */ D.jsx("img", { src: zE, alt: "Orbiter", width: 18, height: 18 }) }),
          /* @__PURE__ */ D.jsx("span", { className: Rn.sidebarLabel, children: "Orbiter.io Copilot" })
        ]
      }
    ),
    /* @__PURE__ */ D.jsx("div", { className: Rn.sectionWrapper, children: /* @__PURE__ */ D.jsxs("div", { className: `${Rn.sectionHeader} ${c === "outcomes" ? Rn.active : ""}`, children: [
      /* @__PURE__ */ D.jsxs(
        "button",
        {
          className: Rn.sidebarItemInHeader,
          onClick: () => p("outcomes"),
          "aria-label": "Outcomes",
          children: [
            /* @__PURE__ */ D.jsx("span", { className: Rn.sidebarIcon, children: /* @__PURE__ */ D.jsx("img", { src: pO, alt: "Outcomes", width: 18, height: 18 }) }),
            /* @__PURE__ */ D.jsx("span", { className: Rn.sidebarLabel, children: "Outcomes" })
          ]
        }
      ),
      /* @__PURE__ */ D.jsx(
        "button",
        {
          className: Rn.plusButton,
          onClick: () => Ce("outcomes"),
          "aria-label": "Expand Outcomes",
          children: /* @__PURE__ */ D.jsx("span", { className: `${Rn.plusIcon} ${re.has("outcomes") ? Rn.rotated : ""}`, children: "+" })
        }
      )
    ] }) }),
    /* @__PURE__ */ D.jsxs("div", { className: Rn.sectionWrapper, children: [
      /* @__PURE__ */ D.jsxs("div", { className: `${Rn.sectionHeader} ${c === "leverage-loops" ? Rn.active : ""}`, children: [
        /* @__PURE__ */ D.jsxs(
          "button",
          {
            className: Rn.sidebarItemInHeader,
            onClick: () => d("leverage-loops"),
            "aria-label": "Leverage Loops",
            children: [
              /* @__PURE__ */ D.jsx("span", { className: Rn.sidebarIcon, children: /* @__PURE__ */ D.jsx("img", { src: vO, alt: "Leverage Loops", width: 18, height: 18 }) }),
              /* @__PURE__ */ D.jsx("span", { className: Rn.sidebarLabel, children: "Leverage Loops" })
            ]
          }
        ),
        /* @__PURE__ */ D.jsx(
          "button",
          {
            className: Rn.plusButton,
            onClick: () => Ce("leverage-loops"),
            "aria-label": "Expand Leverage Loops",
            children: /* @__PURE__ */ D.jsx("span", { className: `${Rn.plusIcon} ${re.has("leverage-loops") ? Rn.rotated : ""}`, children: "+" })
          }
        )
      ] }),
      re.has("leverage-loops") && /* @__PURE__ */ D.jsx(
        gN,
        {
          contentType: "leverage-loops",
          items: _,
          selectedItem: h,
          selectedSuggestionRequest: R,
          onItemSelect: Re,
          onSuggestionRequestSelect: ge
        }
      )
    ] })
  ] }) });
}, uE = ({
  agentName: c = "Orbiter.io Copilot"
}) => /* @__PURE__ */ D.jsx(
  c_,
  {
    context: "copilot",
    title: c,
    systemPrompt: "You are Orbiter.io Copilot, a helpful AI assistant for professional networking and relationship management."
  }
), mO = () => /* @__PURE__ */ D.jsx(
  c_,
  {
    context: "outcomes",
    title: "Outcomes",
    systemPrompt: "You are helping the user track and achieve their professional outcomes and goals."
  }
), yO = () => {
  const {
    selectedPerson: c,
    selectedSuggestionRequest: p,
    leverageLoopChats: d,
    addMessage: _
  } = dd(
    uu((h) => ({
      selectedPerson: h.selectedPerson,
      selectedSuggestionRequest: h.selectedSuggestionRequest,
      leverageLoopChats: h.leverageLoopChats,
      addMessage: h.addMessage
    }))
  );
  Ue.useEffect(() => {
    if (!c && !p) {
      const h = "leverage-loop-default";
      if (!(d[h]?.messages?.[0]?.role === "assistant")) {
        const x = "leverage-loops", A = {
          id: Ry(),
          role: "assistant",
          content: "Please select a person or leverage loop from the sidebar to get started.",
          timestamp: /* @__PURE__ */ new Date(),
          isStreaming: !1
        };
        _(x, A, h);
      }
    }
  }, [c, p, d, _]);
  const w = () => c ? `You are helping with a leverage loop for ${c.full_name} from ${c.master_person?.master_company?.company_name || "Unknown Company"}. Their title is ${c.master_person?.current_title || "Unknown"}.` : p ? `You are helping with the leverage loop suggestion request: "${p.request_header_title}". Context: ${p.request_context}` : "You are helping the user manage their leverage loops and professional network.", E = () => {
    if (c)
      return `${c.full_name} • ${c.master_person?.master_company?.company_name || ""}`;
    if (p)
      return p.request_header_title;
  };
  return /* @__PURE__ */ D.jsx(
    c_,
    {
      context: "leverage-loops",
      title: "Leverage Loops",
      subtitle: E(),
      systemPrompt: w()
    }
  );
}, gO = "_app_4u5b6_5", _O = "_mainContent_4u5b6_15", sE = {
  app: gO,
  mainContent: _O
}, SO = ({
  agentName: c = "Copilot",
  token: p,
  dataSource: d,
  baseUrl: _,
  user_id: w,
  copilot_llm_endpoint: E,
  user_name: h
}) => {
  const [R, k] = Ue.useState("copilot"), x = Ma((re) => re.setVariables), { setSelectedPerson: M, setSelectedSuggestionRequest: A } = dd(
    uu((re) => ({
      setSelectedPerson: re.setSelectedPerson,
      setSelectedSuggestionRequest: re.setSelectedSuggestionRequest
    }))
  );
  Ue.useLayoutEffect(() => {
    x({ token: p, baseUrl: _, dataSource: d, user_id: w, copilot_llm_endpoint: E, user_name: h });
  }, [p, _, d, w, E, h]);
  const V = (re) => {
    k(re), re === "leverage-loops" && (M(null), A(null));
  }, $ = () => {
    switch (R) {
      case "copilot":
        return /* @__PURE__ */ D.jsx(uE, { agentName: c });
      case "outcomes":
        return /* @__PURE__ */ D.jsx(mO, {});
      case "leverage-loops":
        return /* @__PURE__ */ D.jsx(yO, {});
      default:
        return /* @__PURE__ */ D.jsx(uE, { agentName: c });
    }
  };
  return /* @__PURE__ */ D.jsxs("div", { className: sE.app, children: [
    /* @__PURE__ */ D.jsx(
      hO,
      {
        activeSection: R,
        onSectionChange: k,
        onSectionChangeConfiguration: V
      }
    ),
    /* @__PURE__ */ D.jsx("main", { className: sE.mainContent, children: $() })
  ] });
};
var Ey = { exports: {} }, Xa = {}, wy = { exports: {} }, J1 = {};
var cE;
function CO() {
  return cE || (cE = 1, (function(c) {
    function p(F, he) {
      var le = F.length;
      F.push(he);
      e: for (; 0 < le; ) {
        var U = le - 1 >>> 1, ee = F[U];
        if (0 < w(ee, he)) F[U] = he, F[le] = ee, le = U;
        else break e;
      }
    }
    function d(F) {
      return F.length === 0 ? null : F[0];
    }
    function _(F) {
      if (F.length === 0) return null;
      var he = F[0], le = F.pop();
      if (le !== he) {
        F[0] = le;
        e: for (var U = 0, ee = F.length, Xe = ee >>> 1; U < Xe; ) {
          var Ie = 2 * (U + 1) - 1, mt = F[Ie], rt = Ie + 1, Le = F[rt];
          if (0 > w(mt, le)) rt < ee && 0 > w(Le, mt) ? (F[U] = Le, F[rt] = le, U = rt) : (F[U] = mt, F[Ie] = le, U = Ie);
          else if (rt < ee && 0 > w(Le, le)) F[U] = Le, F[rt] = le, U = rt;
          else break e;
        }
      }
      return he;
    }
    function w(F, he) {
      var le = F.sortIndex - he.sortIndex;
      return le !== 0 ? le : F.id - he.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var E = performance;
      c.unstable_now = function() {
        return E.now();
      };
    } else {
      var h = Date, R = h.now();
      c.unstable_now = function() {
        return h.now() - R;
      };
    }
    var k = [], x = [], M = 1, A = null, V = 3, $ = !1, re = !1, ie = !1, Ce = typeof setTimeout == "function" ? setTimeout : null, Re = typeof clearTimeout == "function" ? clearTimeout : null, ge = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function oe(F) {
      for (var he = d(x); he !== null; ) {
        if (he.callback === null) _(x);
        else if (he.startTime <= F) _(x), he.sortIndex = he.expirationTime, p(k, he);
        else break;
        he = d(x);
      }
    }
    function be(F) {
      if (ie = !1, oe(F), !re) if (d(k) !== null) re = !0, De(de);
      else {
        var he = d(x);
        he !== null && we(be, he.startTime - F);
      }
    }
    function de(F, he) {
      re = !1, ie && (ie = !1, Re(Be), Be = -1), $ = !0;
      var le = V;
      try {
        for (oe(he), A = d(k); A !== null && (!(A.expirationTime > he) || F && !Ee()); ) {
          var U = A.callback;
          if (typeof U == "function") {
            A.callback = null, V = A.priorityLevel;
            var ee = U(A.expirationTime <= he);
            he = c.unstable_now(), typeof ee == "function" ? A.callback = ee : A === d(k) && _(k), oe(he);
          } else _(k);
          A = d(k);
        }
        if (A !== null) var Xe = !0;
        else {
          var Ie = d(x);
          Ie !== null && we(be, Ie.startTime - he), Xe = !1;
        }
        return Xe;
      } finally {
        A = null, V = le, $ = !1;
      }
    }
    var Ye = !1, He = null, Be = -1, nt = 5, ut = -1;
    function Ee() {
      return !(c.unstable_now() - ut < nt);
    }
    function Q() {
      if (He !== null) {
        var F = c.unstable_now();
        ut = F;
        var he = !0;
        try {
          he = He(!0, F);
        } finally {
          he ? Z() : (Ye = !1, He = null);
        }
      } else Ye = !1;
    }
    var Z;
    if (typeof ge == "function") Z = function() {
      ge(Q);
    };
    else if (typeof MessageChannel < "u") {
      var xe = new MessageChannel(), Pe = xe.port2;
      xe.port1.onmessage = Q, Z = function() {
        Pe.postMessage(null);
      };
    } else Z = function() {
      Ce(Q, 0);
    };
    function De(F) {
      He = F, Ye || (Ye = !0, Z());
    }
    function we(F, he) {
      Be = Ce(function() {
        F(c.unstable_now());
      }, he);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(F) {
      F.callback = null;
    }, c.unstable_continueExecution = function() {
      re || $ || (re = !0, De(de));
    }, c.unstable_forceFrameRate = function(F) {
      0 > F || 125 < F ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : nt = 0 < F ? Math.floor(1e3 / F) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return V;
    }, c.unstable_getFirstCallbackNode = function() {
      return d(k);
    }, c.unstable_next = function(F) {
      switch (V) {
        case 1:
        case 2:
        case 3:
          var he = 3;
          break;
        default:
          he = V;
      }
      var le = V;
      V = he;
      try {
        return F();
      } finally {
        V = le;
      }
    }, c.unstable_pauseExecution = function() {
    }, c.unstable_requestPaint = function() {
    }, c.unstable_runWithPriority = function(F, he) {
      switch (F) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          F = 3;
      }
      var le = V;
      V = F;
      try {
        return he();
      } finally {
        V = le;
      }
    }, c.unstable_scheduleCallback = function(F, he, le) {
      var U = c.unstable_now();
      switch (typeof le == "object" && le !== null ? (le = le.delay, le = typeof le == "number" && 0 < le ? U + le : U) : le = U, F) {
        case 1:
          var ee = -1;
          break;
        case 2:
          ee = 250;
          break;
        case 5:
          ee = 1073741823;
          break;
        case 4:
          ee = 1e4;
          break;
        default:
          ee = 5e3;
      }
      return ee = le + ee, F = { id: M++, callback: he, priorityLevel: F, startTime: le, expirationTime: ee, sortIndex: -1 }, le > U ? (F.sortIndex = le, p(x, F), d(k) === null && F === d(x) && (ie ? (Re(Be), Be = -1) : ie = !0, we(be, le - U))) : (F.sortIndex = ee, p(k, F), re || $ || (re = !0, De(de))), F;
    }, c.unstable_shouldYield = Ee, c.unstable_wrapCallback = function(F) {
      var he = V;
      return function() {
        var le = V;
        V = he;
        try {
          return F.apply(this, arguments);
        } finally {
          V = le;
        }
      };
    };
  })(J1)), J1;
}
var Z1 = {};
var fE;
function EO() {
  return fE || (fE = 1, (function(c) {
    process.env.NODE_ENV !== "production" && (function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var p = !1, d = 5;
      function _(ke, Ze) {
        var Rt = ke.length;
        ke.push(Ze), h(ke, Ze, Rt);
      }
      function w(ke) {
        return ke.length === 0 ? null : ke[0];
      }
      function E(ke) {
        if (ke.length === 0)
          return null;
        var Ze = ke[0], Rt = ke.pop();
        return Rt !== Ze && (ke[0] = Rt, R(ke, Rt, 0)), Ze;
      }
      function h(ke, Ze, Rt) {
        for (var Gt = Rt; Gt > 0; ) {
          var un = Gt - 1 >>> 1, _n = ke[un];
          if (k(_n, Ze) > 0)
            ke[un] = Ze, ke[Gt] = _n, Gt = un;
          else
            return;
        }
      }
      function R(ke, Ze, Rt) {
        for (var Gt = Rt, un = ke.length, _n = un >>> 1; Gt < _n; ) {
          var pn = (Gt + 1) * 2 - 1, nr = ke[pn], sn = pn + 1, Jt = ke[sn];
          if (k(nr, Ze) < 0)
            sn < un && k(Jt, nr) < 0 ? (ke[Gt] = Jt, ke[sn] = Ze, Gt = sn) : (ke[Gt] = nr, ke[pn] = Ze, Gt = pn);
          else if (sn < un && k(Jt, Ze) < 0)
            ke[Gt] = Jt, ke[sn] = Ze, Gt = sn;
          else
            return;
        }
      }
      function k(ke, Ze) {
        var Rt = ke.sortIndex - Ze.sortIndex;
        return Rt !== 0 ? Rt : ke.id - Ze.id;
      }
      var x = 1, M = 2, A = 3, V = 4, $ = 5;
      function re(ke, Ze) {
      }
      var ie = typeof performance == "object" && typeof performance.now == "function";
      if (ie) {
        var Ce = performance;
        c.unstable_now = function() {
          return Ce.now();
        };
      } else {
        var Re = Date, ge = Re.now();
        c.unstable_now = function() {
          return Re.now() - ge;
        };
      }
      var oe = 1073741823, be = -1, de = 250, Ye = 5e3, He = 1e4, Be = oe, nt = [], ut = [], Ee = 1, Q = null, Z = A, xe = !1, Pe = !1, De = !1, we = typeof setTimeout == "function" ? setTimeout : null, F = typeof clearTimeout == "function" ? clearTimeout : null, he = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function le(ke) {
        for (var Ze = w(ut); Ze !== null; ) {
          if (Ze.callback === null)
            E(ut);
          else if (Ze.startTime <= ke)
            E(ut), Ze.sortIndex = Ze.expirationTime, _(nt, Ze);
          else
            return;
          Ze = w(ut);
        }
      }
      function U(ke) {
        if (De = !1, le(ke), !Pe)
          if (w(nt) !== null)
            Pe = !0, zn(ee);
          else {
            var Ze = w(ut);
            Ze !== null && br(U, Ze.startTime - ke);
          }
      }
      function ee(ke, Ze) {
        Pe = !1, De && (De = !1, ya()), xe = !0;
        var Rt = Z;
        try {
          var Gt;
          if (!p) return Xe(ke, Ze);
        } finally {
          Q = null, Z = Rt, xe = !1;
        }
      }
      function Xe(ke, Ze) {
        var Rt = Ze;
        for (le(Rt), Q = w(nt); Q !== null && !(Q.expirationTime > Rt && (!ke || _i())); ) {
          var Gt = Q.callback;
          if (typeof Gt == "function") {
            Q.callback = null, Z = Q.priorityLevel;
            var un = Q.expirationTime <= Rt, _n = Gt(un);
            Rt = c.unstable_now(), typeof _n == "function" ? Q.callback = _n : Q === w(nt) && E(nt), le(Rt);
          } else
            E(nt);
          Q = w(nt);
        }
        if (Q !== null)
          return !0;
        var pn = w(ut);
        return pn !== null && br(U, pn.startTime - Rt), !1;
      }
      function Ie(ke, Ze) {
        switch (ke) {
          case x:
          case M:
          case A:
          case V:
          case $:
            break;
          default:
            ke = A;
        }
        var Rt = Z;
        Z = ke;
        try {
          return Ze();
        } finally {
          Z = Rt;
        }
      }
      function mt(ke) {
        var Ze;
        switch (Z) {
          case x:
          case M:
          case A:
            Ze = A;
            break;
          default:
            Ze = Z;
            break;
        }
        var Rt = Z;
        Z = Ze;
        try {
          return ke();
        } finally {
          Z = Rt;
        }
      }
      function rt(ke) {
        var Ze = Z;
        return function() {
          var Rt = Z;
          Z = Ze;
          try {
            return ke.apply(this, arguments);
          } finally {
            Z = Rt;
          }
        };
      }
      function Le(ke, Ze, Rt) {
        var Gt = c.unstable_now(), un;
        if (typeof Rt == "object" && Rt !== null) {
          var _n = Rt.delay;
          typeof _n == "number" && _n > 0 ? un = Gt + _n : un = Gt;
        } else
          un = Gt;
        var pn;
        switch (ke) {
          case x:
            pn = be;
            break;
          case M:
            pn = de;
            break;
          case $:
            pn = Be;
            break;
          case V:
            pn = He;
            break;
          case A:
          default:
            pn = Ye;
            break;
        }
        var nr = un + pn, sn = {
          id: Ee++,
          callback: Ze,
          priorityLevel: ke,
          startTime: un,
          expirationTime: nr,
          sortIndex: -1
        };
        return un > Gt ? (sn.sortIndex = un, _(ut, sn), w(nt) === null && sn === w(ut) && (De ? ya() : De = !0, br(U, un - Gt))) : (sn.sortIndex = nr, _(nt, sn), !Pe && !xe && (Pe = !0, zn(ee))), sn;
      }
      function ct() {
      }
      function vt() {
        !Pe && !xe && (Pe = !0, zn(ee));
      }
      function Xt() {
        return w(nt);
      }
      function Un(ke) {
        ke.callback = null;
      }
      function Lr() {
        return Z;
      }
      var kn = !1, ur = null, Yn = -1, Gn = d, Jr = -1;
      function _i() {
        var ke = c.unstable_now() - Jr;
        return !(ke < Gn);
      }
      function ma() {
      }
      function tr(ke) {
        if (ke < 0 || ke > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ke > 0 ? Gn = Math.floor(1e3 / ke) : Gn = d;
      }
      var Tn = function() {
        if (ur !== null) {
          var ke = c.unstable_now();
          Jr = ke;
          var Ze = !0, Rt = !0;
          try {
            Rt = ur(Ze, ke);
          } finally {
            Rt ? Qn() : (kn = !1, ur = null);
          }
        } else
          kn = !1;
      }, Qn;
      if (typeof he == "function")
        Qn = function() {
          he(Tn);
        };
      else if (typeof MessageChannel < "u") {
        var xr = new MessageChannel(), ei = xr.port2;
        xr.port1.onmessage = Tn, Qn = function() {
          ei.postMessage(null);
        };
      } else
        Qn = function() {
          we(Tn, 0);
        };
      function zn(ke) {
        ur = ke, kn || (kn = !0, Qn());
      }
      function br(ke, Ze) {
        Yn = we(function() {
          ke(c.unstable_now());
        }, Ze);
      }
      function ya() {
        F(Yn), Yn = -1;
      }
      var ti = ma, Si = null;
      c.unstable_IdlePriority = $, c.unstable_ImmediatePriority = x, c.unstable_LowPriority = V, c.unstable_NormalPriority = A, c.unstable_Profiling = Si, c.unstable_UserBlockingPriority = M, c.unstable_cancelCallback = Un, c.unstable_continueExecution = vt, c.unstable_forceFrameRate = tr, c.unstable_getCurrentPriorityLevel = Lr, c.unstable_getFirstCallbackNode = Xt, c.unstable_next = mt, c.unstable_pauseExecution = ct, c.unstable_requestPaint = ti, c.unstable_runWithPriority = Ie, c.unstable_scheduleCallback = Le, c.unstable_shouldYield = _i, c.unstable_wrapCallback = rt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  })(Z1)), Z1;
}
var dE;
function PE() {
  return dE || (dE = 1, process.env.NODE_ENV === "production" ? wy.exports = CO() : wy.exports = EO()), wy.exports;
}
var pE;
function wO() {
  if (pE) return Xa;
  pE = 1;
  var c = xv(), p = PE();
  function d(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++) r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var _ = /* @__PURE__ */ new Set(), w = {};
  function E(n, r) {
    h(n, r), h(n + "Capture", r);
  }
  function h(n, r) {
    for (w[n] = r, n = 0; n < r.length; n++) _.add(r[n]);
  }
  var R = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), k = Object.prototype.hasOwnProperty, x = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, M = {}, A = {};
  function V(n) {
    return k.call(A, n) ? !0 : k.call(M, n) ? !1 : x.test(n) ? A[n] = !0 : (M[n] = !0, !1);
  }
  function $(n, r, o, u) {
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
  function re(n, r, o, u) {
    if (r === null || typeof r > "u" || $(n, r, o, u)) return !0;
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
  function ie(n, r, o, u, f, m, C) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = f, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = m, this.removeEmptyString = C;
  }
  var Ce = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Ce[n] = new ie(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Ce[r] = new ie(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Ce[n] = new ie(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Ce[n] = new ie(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Ce[n] = new ie(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Ce[n] = new ie(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Ce[n] = new ie(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Ce[n] = new ie(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Ce[n] = new ie(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Re = /[\-:]([a-z])/g;
  function ge(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Re,
      ge
    );
    Ce[r] = new ie(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Re, ge);
    Ce[r] = new ie(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Re, ge);
    Ce[r] = new ie(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Ce[n] = new ie(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Ce.xlinkHref = new ie("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Ce[n] = new ie(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function oe(n, r, o, u) {
    var f = Ce.hasOwnProperty(r) ? Ce[r] : null;
    (f !== null ? f.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (re(r, o, f, u) && (o = null), u || f === null ? V(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : f.mustUseProperty ? n[f.propertyName] = o === null ? f.type === 3 ? !1 : "" : o : (r = f.attributeName, u = f.attributeNamespace, o === null ? n.removeAttribute(r) : (f = f.type, o = f === 3 || f === 4 && o === !0 ? "" : "" + o, u ? n.setAttributeNS(u, r, o) : n.setAttribute(r, o))));
  }
  var be = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, de = /* @__PURE__ */ Symbol.for("react.element"), Ye = /* @__PURE__ */ Symbol.for("react.portal"), He = /* @__PURE__ */ Symbol.for("react.fragment"), Be = /* @__PURE__ */ Symbol.for("react.strict_mode"), nt = /* @__PURE__ */ Symbol.for("react.profiler"), ut = /* @__PURE__ */ Symbol.for("react.provider"), Ee = /* @__PURE__ */ Symbol.for("react.context"), Q = /* @__PURE__ */ Symbol.for("react.forward_ref"), Z = /* @__PURE__ */ Symbol.for("react.suspense"), xe = /* @__PURE__ */ Symbol.for("react.suspense_list"), Pe = /* @__PURE__ */ Symbol.for("react.memo"), De = /* @__PURE__ */ Symbol.for("react.lazy"), we = /* @__PURE__ */ Symbol.for("react.offscreen"), F = Symbol.iterator;
  function he(n) {
    return n === null || typeof n != "object" ? null : (n = F && n[F] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var le = Object.assign, U;
  function ee(n) {
    if (U === void 0) try {
      throw Error();
    } catch (o) {
      var r = o.stack.trim().match(/\n( *(at )?)/);
      U = r && r[1] || "";
    }
    return `
` + U + n;
  }
  var Xe = !1;
  function Ie(n, r) {
    if (!n || Xe) return "";
    Xe = !0;
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
        } catch (K) {
          var u = K;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (K) {
          u = K;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (K) {
          u = K;
        }
        n();
      }
    } catch (K) {
      if (K && u && typeof K.stack == "string") {
        for (var f = K.stack.split(`
`), m = u.stack.split(`
`), C = f.length - 1, N = m.length - 1; 1 <= C && 0 <= N && f[C] !== m[N]; ) N--;
        for (; 1 <= C && 0 <= N; C--, N--) if (f[C] !== m[N]) {
          if (C !== 1 || N !== 1)
            do
              if (C--, N--, 0 > N || f[C] !== m[N]) {
                var j = `
` + f[C].replace(" at new ", " at ");
                return n.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", n.displayName)), j;
              }
            while (1 <= C && 0 <= N);
          break;
        }
      }
    } finally {
      Xe = !1, Error.prepareStackTrace = o;
    }
    return (n = n ? n.displayName || n.name : "") ? ee(n) : "";
  }
  function mt(n) {
    switch (n.tag) {
      case 5:
        return ee(n.type);
      case 16:
        return ee("Lazy");
      case 13:
        return ee("Suspense");
      case 19:
        return ee("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ie(n.type, !1), n;
      case 11:
        return n = Ie(n.type.render, !1), n;
      case 1:
        return n = Ie(n.type, !0), n;
      default:
        return "";
    }
  }
  function rt(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case He:
        return "Fragment";
      case Ye:
        return "Portal";
      case nt:
        return "Profiler";
      case Be:
        return "StrictMode";
      case Z:
        return "Suspense";
      case xe:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case Ee:
        return (n.displayName || "Context") + ".Consumer";
      case ut:
        return (n._context.displayName || "Context") + ".Provider";
      case Q:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Pe:
        return r = n.displayName || null, r !== null ? r : rt(n.type) || "Memo";
      case De:
        r = n._payload, n = n._init;
        try {
          return rt(n(r));
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
        return rt(r);
      case 8:
        return r === Be ? "StrictMode" : "Mode";
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
  function ct(n) {
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
  function vt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Xt(n) {
    var r = vt(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), u = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var f = o.get, m = o.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return f.call(this);
      }, set: function(C) {
        u = "" + C, m.call(this, C);
      } }), Object.defineProperty(n, r, { enumerable: o.enumerable }), { getValue: function() {
        return u;
      }, setValue: function(C) {
        u = "" + C;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Un(n) {
    n._valueTracker || (n._valueTracker = Xt(n));
  }
  function Lr(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var o = r.getValue(), u = "";
    return n && (u = vt(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== o ? (r.setValue(n), !0) : !1;
  }
  function kn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function ur(n, r) {
    var o = r.checked;
    return le({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function Yn(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    o = ct(r.value != null ? r.value : o), n._wrapperState = { initialChecked: u, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Gn(n, r) {
    r = r.checked, r != null && oe(n, "checked", r, !1);
  }
  function Jr(n, r) {
    Gn(n, r);
    var o = ct(r.value), u = r.type;
    if (o != null) u === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? ma(n, r.type, o) : r.hasOwnProperty("defaultValue") && ma(n, r.type, ct(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function _i(n, r, o) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var u = r.type;
      if (!(u !== "submit" && u !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, o || r === n.value || (n.value = r), n.defaultValue = r;
    }
    o = n.name, o !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, o !== "" && (n.name = o);
  }
  function ma(n, r, o) {
    (r !== "number" || kn(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o));
  }
  var tr = Array.isArray;
  function Tn(n, r, o, u) {
    if (n = n.options, r) {
      r = {};
      for (var f = 0; f < o.length; f++) r["$" + o[f]] = !0;
      for (o = 0; o < n.length; o++) f = r.hasOwnProperty("$" + n[o].value), n[o].selected !== f && (n[o].selected = f), f && u && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + ct(o), r = null, f = 0; f < n.length; f++) {
        if (n[f].value === o) {
          n[f].selected = !0, u && (n[f].defaultSelected = !0);
          return;
        }
        r !== null || n[f].disabled || (r = n[f]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Qn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(d(91));
    return le({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function xr(n, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null) throw Error(d(92));
        if (tr(o)) {
          if (1 < o.length) throw Error(d(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), o = r;
    }
    n._wrapperState = { initialValue: ct(o) };
  }
  function ei(n, r) {
    var o = ct(r.value), u = ct(r.defaultValue);
    o != null && (o = "" + o, o !== n.value && (n.value = o), r.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), u != null && (n.defaultValue = "" + u);
  }
  function zn(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function br(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ya(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? br(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var ti, Si = (function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, o, u, f) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, o, u, f);
      });
    } : n;
  })(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (ti = ti || document.createElement("div"), ti.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = ti.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function ke(n, r) {
    if (r) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Ze = {
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
  }, Rt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ze).forEach(function(n) {
    Rt.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Ze[r] = Ze[n];
    });
  });
  function Gt(n, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || Ze.hasOwnProperty(n) && Ze[n] ? ("" + r).trim() : r + "px";
  }
  function un(n, r) {
    n = n.style;
    for (var o in r) if (r.hasOwnProperty(o)) {
      var u = o.indexOf("--") === 0, f = Gt(o, r[o], u);
      o === "float" && (o = "cssFloat"), u ? n.setProperty(o, f) : n[o] = f;
    }
  }
  var _n = le({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function pn(n, r) {
    if (r) {
      if (_n[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(d(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(d(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(d(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(d(62));
    }
  }
  function nr(n, r) {
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
  var sn = null;
  function Jt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Zt = null, ga = null, Rr = null;
  function La(n) {
    if (n = at(n)) {
      if (typeof Zt != "function") throw Error(d(280));
      var r = n.stateNode;
      r && (r = Cn(r), Zt(n.stateNode, n.type, r));
    }
  }
  function Ki(n) {
    ga ? Rr ? Rr.push(n) : Rr = [n] : ga = n;
  }
  function fl() {
    if (ga) {
      var n = ga, r = Rr;
      if (Rr = ga = null, La(n), r) for (n = 0; n < r.length; n++) La(r[n]);
    }
  }
  function dl(n, r) {
    return n(r);
  }
  function bo() {
  }
  var Ro = !1;
  function pl(n, r, o) {
    if (Ro) return n(r, o);
    Ro = !0;
    try {
      return dl(n, r, o);
    } finally {
      Ro = !1, (ga !== null || Rr !== null) && (bo(), fl());
    }
  }
  function Or(n, r) {
    var o = n.stateNode;
    if (o === null) return null;
    var u = Cn(o);
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
    if (o && typeof o != "function") throw Error(d(231, r, typeof o));
    return o;
  }
  var jr = !1;
  if (R) try {
    var sr = {};
    Object.defineProperty(sr, "passive", { get: function() {
      jr = !0;
    } }), window.addEventListener("test", sr, sr), window.removeEventListener("test", sr, sr);
  } catch {
    jr = !1;
  }
  function Ci(n, r, o, u, f, m, C, N, j) {
    var K = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, K);
    } catch (pe) {
      this.onError(pe);
    }
  }
  var ni = !1, Ei = null, wi = !1, O = null, ue = { onError: function(n) {
    ni = !0, Ei = n;
  } };
  function Me(n, r, o, u, f, m, C, N, j) {
    ni = !1, Ei = null, Ci.apply(ue, arguments);
  }
  function We(n, r, o, u, f, m, C, N, j) {
    if (Me.apply(this, arguments), ni) {
      if (ni) {
        var K = Ei;
        ni = !1, Ei = null;
      } else throw Error(d(198));
      wi || (wi = !0, O = K);
    }
  }
  function Et(n) {
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
  function _t(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function Mt(n) {
    if (Et(n) !== n) throw Error(d(188));
  }
  function Tt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Et(n), r === null) throw Error(d(188));
      return r !== n ? null : n;
    }
    for (var o = n, u = r; ; ) {
      var f = o.return;
      if (f === null) break;
      var m = f.alternate;
      if (m === null) {
        if (u = f.return, u !== null) {
          o = u;
          continue;
        }
        break;
      }
      if (f.child === m.child) {
        for (m = f.child; m; ) {
          if (m === o) return Mt(f), n;
          if (m === u) return Mt(f), r;
          m = m.sibling;
        }
        throw Error(d(188));
      }
      if (o.return !== u.return) o = f, u = m;
      else {
        for (var C = !1, N = f.child; N; ) {
          if (N === o) {
            C = !0, o = f, u = m;
            break;
          }
          if (N === u) {
            C = !0, u = f, o = m;
            break;
          }
          N = N.sibling;
        }
        if (!C) {
          for (N = m.child; N; ) {
            if (N === o) {
              C = !0, o = m, u = f;
              break;
            }
            if (N === u) {
              C = !0, u = m, o = f;
              break;
            }
            N = N.sibling;
          }
          if (!C) throw Error(d(189));
        }
      }
      if (o.alternate !== u) throw Error(d(190));
    }
    if (o.tag !== 3) throw Error(d(188));
    return o.stateNode.current === o ? n : r;
  }
  function Dn(n) {
    return n = Tt(n), n !== null ? cn(n) : null;
  }
  function cn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = cn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var vn = p.unstable_scheduleCallback, cr = p.unstable_cancelCallback, ri = p.unstable_shouldYield, ai = p.unstable_requestPaint, wt = p.unstable_now, bt = p.unstable_getCurrentPriorityLevel, ii = p.unstable_ImmediatePriority, vl = p.unstable_UserBlockingPriority, hl = p.unstable_NormalPriority, ko = p.unstable_LowPriority, su = p.unstable_IdlePriority, To = null, Zr = null;
  function os(n) {
    if (Zr && typeof Zr.onCommitFiberRoot == "function") try {
      Zr.onCommitFiberRoot(To, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Ar = Math.clz32 ? Math.clz32 : cu, wc = Math.log, xc = Math.LN2;
  function cu(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (wc(n) / xc | 0) | 0;
  }
  var Do = 64, _a = 4194304;
  function oi(n) {
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
  function li(n, r) {
    var o = n.pendingLanes;
    if (o === 0) return 0;
    var u = 0, f = n.suspendedLanes, m = n.pingedLanes, C = o & 268435455;
    if (C !== 0) {
      var N = C & ~f;
      N !== 0 ? u = oi(N) : (m &= C, m !== 0 && (u = oi(m)));
    } else C = o & ~f, C !== 0 ? u = oi(C) : m !== 0 && (u = oi(m));
    if (u === 0) return 0;
    if (r !== 0 && r !== u && (r & f) === 0 && (f = u & -u, m = r & -r, f >= m || f === 16 && (m & 4194240) !== 0)) return r;
    if ((u & 4) !== 0 && (u |= o & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= u; 0 < r; ) o = 31 - Ar(r), f = 1 << o, u |= n[o], r &= ~f;
    return u;
  }
  function fu(n, r) {
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
  function ml(n, r) {
    for (var o = n.suspendedLanes, u = n.pingedLanes, f = n.expirationTimes, m = n.pendingLanes; 0 < m; ) {
      var C = 31 - Ar(m), N = 1 << C, j = f[C];
      j === -1 ? ((N & o) === 0 || (N & u) !== 0) && (f[C] = fu(N, r)) : j <= r && (n.expiredLanes |= N), m &= ~N;
    }
  }
  function No(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function du() {
    var n = Do;
    return Do <<= 1, (Do & 4194240) === 0 && (Do = 64), n;
  }
  function pu(n) {
    for (var r = [], o = 0; 31 > o; o++) r.push(n);
    return r;
  }
  function Xi(n, r, o) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Ar(r), n[r] = o;
  }
  function vd(n, r) {
    var o = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var u = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var f = 31 - Ar(o), m = 1 << f;
      r[f] = 0, u[f] = -1, n[f] = -1, o &= ~m;
    }
  }
  function Ji(n, r) {
    var o = n.entangledLanes |= r;
    for (n = n.entanglements; o; ) {
      var u = 31 - Ar(o), f = 1 << u;
      f & r | n[u] & r && (n[u] |= r), o &= ~f;
    }
  }
  var Ht = 0;
  function vu(n) {
    return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var It, ls, xi, gt, hu, fr = !1, bi = [], Ur = null, Ri = null, hn = null, en = /* @__PURE__ */ new Map(), Mo = /* @__PURE__ */ new Map(), Kn = [], zr = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Oa(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Ur = null;
        break;
      case "dragenter":
      case "dragleave":
        Ri = null;
        break;
      case "mouseover":
      case "mouseout":
        hn = null;
        break;
      case "pointerover":
      case "pointerout":
        en.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Mo.delete(r.pointerId);
    }
  }
  function yl(n, r, o, u, f, m) {
    return n === null || n.nativeEvent !== m ? (n = { blockedOn: r, domEventName: o, eventSystemFlags: u, nativeEvent: m, targetContainers: [f] }, r !== null && (r = at(r), r !== null && ls(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, f !== null && r.indexOf(f) === -1 && r.push(f), n);
  }
  function us(n, r, o, u, f) {
    switch (r) {
      case "focusin":
        return Ur = yl(Ur, n, r, o, u, f), !0;
      case "dragenter":
        return Ri = yl(Ri, n, r, o, u, f), !0;
      case "mouseover":
        return hn = yl(hn, n, r, o, u, f), !0;
      case "pointerover":
        var m = f.pointerId;
        return en.set(m, yl(en.get(m) || null, n, r, o, u, f)), !0;
      case "gotpointercapture":
        return m = f.pointerId, Mo.set(m, yl(Mo.get(m) || null, n, r, o, u, f)), !0;
    }
    return !1;
  }
  function ss(n) {
    var r = Rl(n.target);
    if (r !== null) {
      var o = Et(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = _t(o), r !== null) {
            n.blockedOn = r, hu(n.priority, function() {
              xi(o);
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
  function Lo(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var o = gu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var u = new o.constructor(o.type, o);
        sn = u, o.target.dispatchEvent(u), sn = null;
      } else return r = at(o), r !== null && ls(r), n.blockedOn = o, !1;
      r.shift();
    }
    return !0;
  }
  function gl(n, r, o) {
    Lo(n) && o.delete(r);
  }
  function hd() {
    fr = !1, Ur !== null && Lo(Ur) && (Ur = null), Ri !== null && Lo(Ri) && (Ri = null), hn !== null && Lo(hn) && (hn = null), en.forEach(gl), Mo.forEach(gl);
  }
  function ja(n, r) {
    n.blockedOn === r && (n.blockedOn = null, fr || (fr = !0, p.unstable_scheduleCallback(p.unstable_NormalPriority, hd)));
  }
  function ui(n) {
    function r(f) {
      return ja(f, n);
    }
    if (0 < bi.length) {
      ja(bi[0], n);
      for (var o = 1; o < bi.length; o++) {
        var u = bi[o];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (Ur !== null && ja(Ur, n), Ri !== null && ja(Ri, n), hn !== null && ja(hn, n), en.forEach(r), Mo.forEach(r), o = 0; o < Kn.length; o++) u = Kn[o], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < Kn.length && (o = Kn[0], o.blockedOn === null); ) ss(o), o.blockedOn === null && Kn.shift();
  }
  var ki = be.ReactCurrentBatchConfig, Aa = !0;
  function mu(n, r, o, u) {
    var f = Ht, m = ki.transition;
    ki.transition = null;
    try {
      Ht = 1, Oo(n, r, o, u);
    } finally {
      Ht = f, ki.transition = m;
    }
  }
  function yu(n, r, o, u) {
    var f = Ht, m = ki.transition;
    ki.transition = null;
    try {
      Ht = 4, Oo(n, r, o, u);
    } finally {
      Ht = f, ki.transition = m;
    }
  }
  function Oo(n, r, o, u) {
    if (Aa) {
      var f = gu(n, r, o, u);
      if (f === null) Uc(n, r, u, _l, o), Oa(n, u);
      else if (us(f, n, r, o, u)) u.stopPropagation();
      else if (Oa(n, u), r & 4 && -1 < zr.indexOf(n)) {
        for (; f !== null; ) {
          var m = at(f);
          if (m !== null && It(m), m = gu(n, r, o, u), m === null && Uc(n, r, u, _l, o), m === f) break;
          f = m;
        }
        f !== null && u.stopPropagation();
      } else Uc(n, r, u, null, o);
    }
  }
  var _l = null;
  function gu(n, r, o, u) {
    if (_l = null, n = Jt(u), n = Rl(n), n !== null) if (r = Et(n), r === null) n = null;
    else if (o = r.tag, o === 13) {
      if (n = _t(r), n !== null) return n;
      n = null;
    } else if (o === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return _l = n, null;
  }
  function _u(n) {
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
        switch (bt()) {
          case ii:
            return 1;
          case vl:
            return 4;
          case hl:
          case ko:
            return 16;
          case su:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var si = null, S = null, L = null;
  function G() {
    if (L) return L;
    var n, r = S, o = r.length, u, f = "value" in si ? si.value : si.textContent, m = f.length;
    for (n = 0; n < o && r[n] === f[n]; n++) ;
    var C = o - n;
    for (u = 1; u <= C && r[o - u] === f[m - u]; u++) ;
    return L = f.slice(n, 1 < u ? 1 - u : void 0);
  }
  function J(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function _e() {
    return !0;
  }
  function ot() {
    return !1;
  }
  function Ne(n) {
    function r(o, u, f, m, C) {
      this._reactName = o, this._targetInst = f, this.type = u, this.nativeEvent = m, this.target = C, this.currentTarget = null;
      for (var N in n) n.hasOwnProperty(N) && (o = n[N], this[N] = o ? o(m) : m[N]);
      return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? _e : ot, this.isPropagationStopped = ot, this;
    }
    return le(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = _e);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = _e);
    }, persist: function() {
    }, isPersistent: _e }), r;
  }
  var ft = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Lt = Ne(ft), Ft = le({}, ft, { view: 0, detail: 0 }), fn = Ne(Ft), tn, kt, nn, Sn = le({}, Ft, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Sd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== nn && (nn && n.type === "mousemove" ? (tn = n.screenX - nn.screenX, kt = n.screenY - nn.screenY) : kt = tn = 0, nn = n), tn);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : kt;
  } }), jo = Ne(Sn), cs = le({}, Sn, { dataTransfer: 0 }), Zi = Ne(cs), fs = le({}, Ft, { relatedTarget: 0 }), Sl = Ne(fs), md = le({}, ft, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), bc = Ne(md), yd = le({}, ft, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), kv = Ne(yd), gd = le({}, ft, { data: 0 }), _d = Ne(gd), Tv = {
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
  }, Dv = {
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
  }, jy = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function eo(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = jy[n]) ? !!r[n] : !1;
  }
  function Sd() {
    return eo;
  }
  var Cd = le({}, Ft, { key: function(n) {
    if (n.key) {
      var r = Tv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = J(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Dv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Sd, charCode: function(n) {
    return n.type === "keypress" ? J(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? J(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Ed = Ne(Cd), wd = le({}, Sn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Nv = Ne(wd), Rc = le({}, Ft, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Sd }), Mv = Ne(Rc), ea = le({}, ft, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), to = Ne(ea), Pn = le({}, Sn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), no = Ne(Pn), xd = [9, 13, 27, 32], Su = R && "CompositionEvent" in window, ds = null;
  R && "documentMode" in document && (ds = document.documentMode);
  var ps = R && "TextEvent" in window && !ds, Lv = R && (!Su || ds && 8 < ds && 11 >= ds), Ov = " ", kc = !1;
  function jv(n, r) {
    switch (n) {
      case "keyup":
        return xd.indexOf(r.keyCode) !== -1;
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
  function Av(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Cu = !1;
  function Uv(n, r) {
    switch (n) {
      case "compositionend":
        return Av(r);
      case "keypress":
        return r.which !== 32 ? null : (kc = !0, Ov);
      case "textInput":
        return n = r.data, n === Ov && kc ? null : n;
      default:
        return null;
    }
  }
  function Ay(n, r) {
    if (Cu) return n === "compositionend" || !Su && jv(n, r) ? (n = G(), L = S = si = null, Cu = !1, n) : null;
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
        return Lv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Uy = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function zv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Uy[n.type] : r === "textarea";
  }
  function bd(n, r, o, u) {
    Ki(u), r = _s(r, "onChange"), 0 < r.length && (o = new Lt("onChange", "change", null, o, u), n.push({ event: o, listeners: r }));
  }
  var Ti = null, Cl = null;
  function Pv(n) {
    xl(n, 0);
  }
  function vs(n) {
    var r = fi(n);
    if (Lr(r)) return n;
  }
  function zy(n, r) {
    if (n === "change") return r;
  }
  var Iv = !1;
  if (R) {
    var Rd;
    if (R) {
      var kd = "oninput" in document;
      if (!kd) {
        var Fv = document.createElement("div");
        Fv.setAttribute("oninput", "return;"), kd = typeof Fv.oninput == "function";
      }
      Rd = kd;
    } else Rd = !1;
    Iv = Rd && (!document.documentMode || 9 < document.documentMode);
  }
  function Vv() {
    Ti && (Ti.detachEvent("onpropertychange", Hv), Cl = Ti = null);
  }
  function Hv(n) {
    if (n.propertyName === "value" && vs(Cl)) {
      var r = [];
      bd(r, Cl, n, Jt(n)), pl(Pv, r);
    }
  }
  function Py(n, r, o) {
    n === "focusin" ? (Vv(), Ti = r, Cl = o, Ti.attachEvent("onpropertychange", Hv)) : n === "focusout" && Vv();
  }
  function $v(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return vs(Cl);
  }
  function Iy(n, r) {
    if (n === "click") return vs(r);
  }
  function Bv(n, r) {
    if (n === "input" || n === "change") return vs(r);
  }
  function Fy(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ci = typeof Object.is == "function" ? Object.is : Fy;
  function hs(n, r) {
    if (ci(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var o = Object.keys(n), u = Object.keys(r);
    if (o.length !== u.length) return !1;
    for (u = 0; u < o.length; u++) {
      var f = o[u];
      if (!k.call(r, f) || !ci(n[f], r[f])) return !1;
    }
    return !0;
  }
  function qv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Tc(n, r) {
    var o = qv(n);
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
      o = qv(o);
    }
  }
  function Ao(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Ao(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function ms() {
    for (var n = window, r = kn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o) n = r.contentWindow;
      else break;
      r = kn(n.document);
    }
    return r;
  }
  function Dc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Eu(n) {
    var r = ms(), o = n.focusedElem, u = n.selectionRange;
    if (r !== o && o && o.ownerDocument && Ao(o.ownerDocument.documentElement, o)) {
      if (u !== null && Dc(o)) {
        if (r = u.start, n = u.end, n === void 0 && (n = r), "selectionStart" in o) o.selectionStart = r, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (r = o.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var f = o.textContent.length, m = Math.min(u.start, f);
          u = u.end === void 0 ? m : Math.min(u.end, f), !n.extend && m > u && (f = u, u = m, m = f), f = Tc(o, m);
          var C = Tc(
            o,
            u
          );
          f && C && (n.rangeCount !== 1 || n.anchorNode !== f.node || n.anchorOffset !== f.offset || n.focusNode !== C.node || n.focusOffset !== C.offset) && (r = r.createRange(), r.setStart(f.node, f.offset), n.removeAllRanges(), m > u ? (n.addRange(r), n.extend(C.node, C.offset)) : (r.setEnd(C.node, C.offset), n.addRange(r)));
        }
      }
      for (r = [], n = o; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < r.length; o++) n = r[o], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Vy = R && "documentMode" in document && 11 >= document.documentMode, wu = null, Td = null, ys = null, Dd = !1;
  function Nd(n, r, o) {
    var u = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    Dd || wu == null || wu !== kn(u) || (u = wu, "selectionStart" in u && Dc(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), ys && hs(ys, u) || (ys = u, u = _s(Td, "onSelect"), 0 < u.length && (r = new Lt("onSelect", "select", null, r, o), n.push({ event: r, listeners: u }), r.target = wu)));
  }
  function Nc(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var El = { animationend: Nc("Animation", "AnimationEnd"), animationiteration: Nc("Animation", "AnimationIteration"), animationstart: Nc("Animation", "AnimationStart"), transitionend: Nc("Transition", "TransitionEnd") }, dr = {}, Md = {};
  R && (Md = document.createElement("div").style, "AnimationEvent" in window || (delete El.animationend.animation, delete El.animationiteration.animation, delete El.animationstart.animation), "TransitionEvent" in window || delete El.transitionend.transition);
  function Mc(n) {
    if (dr[n]) return dr[n];
    if (!El[n]) return n;
    var r = El[n], o;
    for (o in r) if (r.hasOwnProperty(o) && o in Md) return dr[n] = r[o];
    return n;
  }
  var Wv = Mc("animationend"), Yv = Mc("animationiteration"), Gv = Mc("animationstart"), Qv = Mc("transitionend"), Ld = /* @__PURE__ */ new Map(), Lc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ua(n, r) {
    Ld.set(n, r), E(r, [n]);
  }
  for (var Od = 0; Od < Lc.length; Od++) {
    var wl = Lc[Od], Hy = wl.toLowerCase(), $y = wl[0].toUpperCase() + wl.slice(1);
    Ua(Hy, "on" + $y);
  }
  Ua(Wv, "onAnimationEnd"), Ua(Yv, "onAnimationIteration"), Ua(Gv, "onAnimationStart"), Ua("dblclick", "onDoubleClick"), Ua("focusin", "onFocus"), Ua("focusout", "onBlur"), Ua(Qv, "onTransitionEnd"), h("onMouseEnter", ["mouseout", "mouseover"]), h("onMouseLeave", ["mouseout", "mouseover"]), h("onPointerEnter", ["pointerout", "pointerover"]), h("onPointerLeave", ["pointerout", "pointerover"]), E("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), E("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), E("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), E("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), E("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), E("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var gs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), jd = new Set("cancel close invalid load scroll toggle".split(" ").concat(gs));
  function Oc(n, r, o) {
    var u = n.type || "unknown-event";
    n.currentTarget = o, We(u, r, void 0, n), n.currentTarget = null;
  }
  function xl(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var u = n[o], f = u.event;
      u = u.listeners;
      e: {
        var m = void 0;
        if (r) for (var C = u.length - 1; 0 <= C; C--) {
          var N = u[C], j = N.instance, K = N.currentTarget;
          if (N = N.listener, j !== m && f.isPropagationStopped()) break e;
          Oc(f, N, K), m = j;
        }
        else for (C = 0; C < u.length; C++) {
          if (N = u[C], j = N.instance, K = N.currentTarget, N = N.listener, j !== m && f.isPropagationStopped()) break e;
          Oc(f, N, K), m = j;
        }
      }
    }
    if (wi) throw n = O, wi = !1, O = null, n;
  }
  function Qt(n, r) {
    var o = r[Es];
    o === void 0 && (o = r[Es] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    o.has(u) || (Kv(r, n, 2, !1), o.add(u));
  }
  function jc(n, r, o) {
    var u = 0;
    r && (u |= 4), Kv(o, n, u, r);
  }
  var Ac = "_reactListening" + Math.random().toString(36).slice(2);
  function xu(n) {
    if (!n[Ac]) {
      n[Ac] = !0, _.forEach(function(o) {
        o !== "selectionchange" && (jd.has(o) || jc(o, !1, n), jc(o, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Ac] || (r[Ac] = !0, jc("selectionchange", !1, r));
    }
  }
  function Kv(n, r, o, u) {
    switch (_u(r)) {
      case 1:
        var f = mu;
        break;
      case 4:
        f = yu;
        break;
      default:
        f = Oo;
    }
    o = f.bind(null, r, o, n), f = void 0, !jr || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (f = !0), u ? f !== void 0 ? n.addEventListener(r, o, { capture: !0, passive: f }) : n.addEventListener(r, o, !0) : f !== void 0 ? n.addEventListener(r, o, { passive: f }) : n.addEventListener(r, o, !1);
  }
  function Uc(n, r, o, u, f) {
    var m = u;
    if ((r & 1) === 0 && (r & 2) === 0 && u !== null) e: for (; ; ) {
      if (u === null) return;
      var C = u.tag;
      if (C === 3 || C === 4) {
        var N = u.stateNode.containerInfo;
        if (N === f || N.nodeType === 8 && N.parentNode === f) break;
        if (C === 4) for (C = u.return; C !== null; ) {
          var j = C.tag;
          if ((j === 3 || j === 4) && (j = C.stateNode.containerInfo, j === f || j.nodeType === 8 && j.parentNode === f)) return;
          C = C.return;
        }
        for (; N !== null; ) {
          if (C = Rl(N), C === null) return;
          if (j = C.tag, j === 5 || j === 6) {
            u = m = C;
            continue e;
          }
          N = N.parentNode;
        }
      }
      u = u.return;
    }
    pl(function() {
      var K = m, pe = Jt(o), me = [];
      e: {
        var fe = Ld.get(n);
        if (fe !== void 0) {
          var Fe = Lt, Ge = n;
          switch (n) {
            case "keypress":
              if (J(o) === 0) break e;
            case "keydown":
            case "keyup":
              Fe = Ed;
              break;
            case "focusin":
              Ge = "focus", Fe = Sl;
              break;
            case "focusout":
              Ge = "blur", Fe = Sl;
              break;
            case "beforeblur":
            case "afterblur":
              Fe = Sl;
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
              Fe = jo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Fe = Zi;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Fe = Mv;
              break;
            case Wv:
            case Yv:
            case Gv:
              Fe = bc;
              break;
            case Qv:
              Fe = to;
              break;
            case "scroll":
              Fe = fn;
              break;
            case "wheel":
              Fe = no;
              break;
            case "copy":
            case "cut":
            case "paste":
              Fe = kv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Fe = Nv;
          }
          var Je = (r & 4) !== 0, jn = !Je && n === "scroll", H = Je ? fe !== null ? fe + "Capture" : null : fe;
          Je = [];
          for (var P = K, W; P !== null; ) {
            W = P;
            var ve = W.stateNode;
            if (W.tag === 5 && ve !== null && (W = ve, H !== null && (ve = Or(P, H), ve != null && Je.push(bu(P, ve, W)))), jn) break;
            P = P.return;
          }
          0 < Je.length && (fe = new Fe(fe, Ge, null, o, pe), me.push({ event: fe, listeners: Je }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (fe = n === "mouseover" || n === "pointerover", Fe = n === "mouseout" || n === "pointerout", fe && o !== sn && (Ge = o.relatedTarget || o.fromElement) && (Rl(Ge) || Ge[ro])) break e;
          if ((Fe || fe) && (fe = pe.window === pe ? pe : (fe = pe.ownerDocument) ? fe.defaultView || fe.parentWindow : window, Fe ? (Ge = o.relatedTarget || o.toElement, Fe = K, Ge = Ge ? Rl(Ge) : null, Ge !== null && (jn = Et(Ge), Ge !== jn || Ge.tag !== 5 && Ge.tag !== 6) && (Ge = null)) : (Fe = null, Ge = K), Fe !== Ge)) {
            if (Je = jo, ve = "onMouseLeave", H = "onMouseEnter", P = "mouse", (n === "pointerout" || n === "pointerover") && (Je = Nv, ve = "onPointerLeave", H = "onPointerEnter", P = "pointer"), jn = Fe == null ? fe : fi(Fe), W = Ge == null ? fe : fi(Ge), fe = new Je(ve, P + "leave", Fe, o, pe), fe.target = jn, fe.relatedTarget = W, ve = null, Rl(pe) === K && (Je = new Je(H, P + "enter", Ge, o, pe), Je.target = W, Je.relatedTarget = jn, ve = Je), jn = ve, Fe && Ge) t: {
              for (Je = Fe, H = Ge, P = 0, W = Je; W; W = Uo(W)) P++;
              for (W = 0, ve = H; ve; ve = Uo(ve)) W++;
              for (; 0 < P - W; ) Je = Uo(Je), P--;
              for (; 0 < W - P; ) H = Uo(H), W--;
              for (; P--; ) {
                if (Je === H || H !== null && Je === H.alternate) break t;
                Je = Uo(Je), H = Uo(H);
              }
              Je = null;
            }
            else Je = null;
            Fe !== null && Xv(me, fe, Fe, Je, !1), Ge !== null && jn !== null && Xv(me, jn, Ge, Je, !0);
          }
        }
        e: {
          if (fe = K ? fi(K) : window, Fe = fe.nodeName && fe.nodeName.toLowerCase(), Fe === "select" || Fe === "input" && fe.type === "file") var Qe = zy;
          else if (zv(fe)) if (Iv) Qe = Bv;
          else {
            Qe = $v;
            var st = Py;
          }
          else (Fe = fe.nodeName) && Fe.toLowerCase() === "input" && (fe.type === "checkbox" || fe.type === "radio") && (Qe = Iy);
          if (Qe && (Qe = Qe(n, K))) {
            bd(me, Qe, o, pe);
            break e;
          }
          st && st(n, fe, K), n === "focusout" && (st = fe._wrapperState) && st.controlled && fe.type === "number" && ma(fe, "number", fe.value);
        }
        switch (st = K ? fi(K) : window, n) {
          case "focusin":
            (zv(st) || st.contentEditable === "true") && (wu = st, Td = K, ys = null);
            break;
          case "focusout":
            ys = Td = wu = null;
            break;
          case "mousedown":
            Dd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Dd = !1, Nd(me, o, pe);
            break;
          case "selectionchange":
            if (Vy) break;
          case "keydown":
          case "keyup":
            Nd(me, o, pe);
        }
        var dt;
        if (Su) e: {
          switch (n) {
            case "compositionstart":
              var yt = "onCompositionStart";
              break e;
            case "compositionend":
              yt = "onCompositionEnd";
              break e;
            case "compositionupdate":
              yt = "onCompositionUpdate";
              break e;
          }
          yt = void 0;
        }
        else Cu ? jv(n, o) && (yt = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (yt = "onCompositionStart");
        yt && (Lv && o.locale !== "ko" && (Cu || yt !== "onCompositionStart" ? yt === "onCompositionEnd" && Cu && (dt = G()) : (si = pe, S = "value" in si ? si.value : si.textContent, Cu = !0)), st = _s(K, yt), 0 < st.length && (yt = new _d(yt, n, null, o, pe), me.push({ event: yt, listeners: st }), dt ? yt.data = dt : (dt = Av(o), dt !== null && (yt.data = dt)))), (dt = ps ? Uv(n, o) : Ay(n, o)) && (K = _s(K, "onBeforeInput"), 0 < K.length && (pe = new _d("onBeforeInput", "beforeinput", null, o, pe), me.push({ event: pe, listeners: K }), pe.data = dt));
      }
      xl(me, r);
    });
  }
  function bu(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function _s(n, r) {
    for (var o = r + "Capture", u = []; n !== null; ) {
      var f = n, m = f.stateNode;
      f.tag === 5 && m !== null && (f = m, m = Or(n, o), m != null && u.unshift(bu(n, m, f)), m = Or(n, r), m != null && u.push(bu(n, m, f))), n = n.return;
    }
    return u;
  }
  function Uo(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Xv(n, r, o, u, f) {
    for (var m = r._reactName, C = []; o !== null && o !== u; ) {
      var N = o, j = N.alternate, K = N.stateNode;
      if (j !== null && j === u) break;
      N.tag === 5 && K !== null && (N = K, f ? (j = Or(o, m), j != null && C.unshift(bu(o, j, N))) : f || (j = Or(o, m), j != null && C.push(bu(o, j, N)))), o = o.return;
    }
    C.length !== 0 && n.push({ event: r, listeners: C });
  }
  var Jv = /\r\n?/g, By = /\u0000|\uFFFD/g;
  function Zv(n) {
    return (typeof n == "string" ? n : "" + n).replace(Jv, `
`).replace(By, "");
  }
  function zc(n, r, o) {
    if (r = Zv(r), Zv(n) !== r && o) throw Error(d(425));
  }
  function zo() {
  }
  var Ss = null, bl = null;
  function Pc(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Ic = typeof setTimeout == "function" ? setTimeout : void 0, Ad = typeof clearTimeout == "function" ? clearTimeout : void 0, eh = typeof Promise == "function" ? Promise : void 0, Ru = typeof queueMicrotask == "function" ? queueMicrotask : typeof eh < "u" ? function(n) {
    return eh.resolve(null).then(n).catch(Fc);
  } : Ic;
  function Fc(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function ku(n, r) {
    var o = r, u = 0;
    do {
      var f = o.nextSibling;
      if (n.removeChild(o), f && f.nodeType === 8) if (o = f.data, o === "/$") {
        if (u === 0) {
          n.removeChild(f), ui(r);
          return;
        }
        u--;
      } else o !== "$" && o !== "$?" && o !== "$!" || u++;
      o = f;
    } while (o);
    ui(r);
  }
  function Di(n) {
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
  function th(n) {
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
  var Po = Math.random().toString(36).slice(2), Ni = "__reactFiber$" + Po, Cs = "__reactProps$" + Po, ro = "__reactContainer$" + Po, Es = "__reactEvents$" + Po, Tu = "__reactListeners$" + Po, qy = "__reactHandles$" + Po;
  function Rl(n) {
    var r = n[Ni];
    if (r) return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[ro] || o[Ni]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null) for (n = th(n); n !== null; ) {
          if (o = n[Ni]) return o;
          n = th(n);
        }
        return r;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function at(n) {
    return n = n[Ni] || n[ro], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function fi(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(d(33));
  }
  function Cn(n) {
    return n[Cs] || null;
  }
  var At = [], za = -1;
  function Pa(n) {
    return { current: n };
  }
  function dn(n) {
    0 > za || (n.current = At[za], At[za] = null, za--);
  }
  function tt(n, r) {
    za++, At[za] = n.current, n.current = r;
  }
  var kr = {}, bn = Pa(kr), Xn = Pa(!1), ta = kr;
  function na(n, r) {
    var o = n.type.contextTypes;
    if (!o) return kr;
    var u = n.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r) return u.__reactInternalMemoizedMaskedChildContext;
    var f = {}, m;
    for (m in o) f[m] = r[m];
    return u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = f), f;
  }
  function In(n) {
    return n = n.childContextTypes, n != null;
  }
  function Du() {
    dn(Xn), dn(bn);
  }
  function nh(n, r, o) {
    if (bn.current !== kr) throw Error(d(168));
    tt(bn, r), tt(Xn, o);
  }
  function ws(n, r, o) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function") return o;
    u = u.getChildContext();
    for (var f in u) if (!(f in r)) throw Error(d(108, Le(n) || "Unknown", f));
    return le({}, o, u);
  }
  function rr(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || kr, ta = bn.current, tt(bn, n), tt(Xn, Xn.current), !0;
  }
  function Vc(n, r, o) {
    var u = n.stateNode;
    if (!u) throw Error(d(169));
    o ? (n = ws(n, r, ta), u.__reactInternalMemoizedMergedChildContext = n, dn(Xn), dn(bn), tt(bn, n)) : dn(Xn), tt(Xn, o);
  }
  var Mi = null, Nu = !1, ao = !1;
  function Hc(n) {
    Mi === null ? Mi = [n] : Mi.push(n);
  }
  function Io(n) {
    Nu = !0, Hc(n);
  }
  function Li() {
    if (!ao && Mi !== null) {
      ao = !0;
      var n = 0, r = Ht;
      try {
        var o = Mi;
        for (Ht = 1; n < o.length; n++) {
          var u = o[n];
          do
            u = u(!0);
          while (u !== null);
        }
        Mi = null, Nu = !1;
      } catch (f) {
        throw Mi !== null && (Mi = Mi.slice(n + 1)), vn(ii, Li), f;
      } finally {
        Ht = r, ao = !1;
      }
    }
    return null;
  }
  var Fo = [], Vo = 0, Ho = null, io = 0, Fn = [], Ia = 0, Sa = null, Oi = 1, ji = "";
  function kl(n, r) {
    Fo[Vo++] = io, Fo[Vo++] = Ho, Ho = n, io = r;
  }
  function rh(n, r, o) {
    Fn[Ia++] = Oi, Fn[Ia++] = ji, Fn[Ia++] = Sa, Sa = n;
    var u = Oi;
    n = ji;
    var f = 32 - Ar(u) - 1;
    u &= ~(1 << f), o += 1;
    var m = 32 - Ar(r) + f;
    if (30 < m) {
      var C = f - f % 5;
      m = (u & (1 << C) - 1).toString(32), u >>= C, f -= C, Oi = 1 << 32 - Ar(r) + f | o << f | u, ji = m + n;
    } else Oi = 1 << m | o << f | u, ji = n;
  }
  function $c(n) {
    n.return !== null && (kl(n, 1), rh(n, 1, 0));
  }
  function Bc(n) {
    for (; n === Ho; ) Ho = Fo[--Vo], Fo[Vo] = null, io = Fo[--Vo], Fo[Vo] = null;
    for (; n === Sa; ) Sa = Fn[--Ia], Fn[Ia] = null, ji = Fn[--Ia], Fn[Ia] = null, Oi = Fn[--Ia], Fn[Ia] = null;
  }
  var ra = null, aa = null, yn = !1, Fa = null;
  function Ud(n, r) {
    var o = qa(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function ah(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, ra = n, aa = Di(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, ra = n, aa = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = Sa !== null ? { id: Oi, overflow: ji } : null, n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = qa(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, ra = n, aa = null, !0) : !1;
      default:
        return !1;
    }
  }
  function zd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Pd(n) {
    if (yn) {
      var r = aa;
      if (r) {
        var o = r;
        if (!ah(n, r)) {
          if (zd(n)) throw Error(d(418));
          r = Di(o.nextSibling);
          var u = ra;
          r && ah(n, r) ? Ud(u, o) : (n.flags = n.flags & -4097 | 2, yn = !1, ra = n);
        }
      } else {
        if (zd(n)) throw Error(d(418));
        n.flags = n.flags & -4097 | 2, yn = !1, ra = n;
      }
    }
  }
  function Jn(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    ra = n;
  }
  function qc(n) {
    if (n !== ra) return !1;
    if (!yn) return Jn(n), yn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Pc(n.type, n.memoizedProps)), r && (r = aa)) {
      if (zd(n)) throw xs(), Error(d(418));
      for (; r; ) Ud(n, r), r = Di(r.nextSibling);
    }
    if (Jn(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(d(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === "/$") {
              if (r === 0) {
                aa = Di(n.nextSibling);
                break e;
              }
              r--;
            } else o !== "$" && o !== "$!" && o !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        aa = null;
      }
    } else aa = ra ? Di(n.stateNode.nextSibling) : null;
    return !0;
  }
  function xs() {
    for (var n = aa; n; ) n = Di(n.nextSibling);
  }
  function $o() {
    aa = ra = null, yn = !1;
  }
  function oo(n) {
    Fa === null ? Fa = [n] : Fa.push(n);
  }
  var Wy = be.ReactCurrentBatchConfig;
  function Tl(n, r, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1) throw Error(d(309));
          var u = o.stateNode;
        }
        if (!u) throw Error(d(147, n));
        var f = u, m = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === m ? r.ref : (r = function(C) {
          var N = f.refs;
          C === null ? delete N[m] : N[m] = C;
        }, r._stringRef = m, r);
      }
      if (typeof n != "string") throw Error(d(284));
      if (!o._owner) throw Error(d(290, n));
    }
    return n;
  }
  function Wc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(d(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function ih(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Dl(n) {
    function r(H, P) {
      if (n) {
        var W = H.deletions;
        W === null ? (H.deletions = [P], H.flags |= 16) : W.push(P);
      }
    }
    function o(H, P) {
      if (!n) return null;
      for (; P !== null; ) r(H, P), P = P.sibling;
      return null;
    }
    function u(H, P) {
      for (H = /* @__PURE__ */ new Map(); P !== null; ) P.key !== null ? H.set(P.key, P) : H.set(P.index, P), P = P.sibling;
      return H;
    }
    function f(H, P) {
      return H = Xo(H, P), H.index = 0, H.sibling = null, H;
    }
    function m(H, P, W) {
      return H.index = W, n ? (W = H.alternate, W !== null ? (W = W.index, W < P ? (H.flags |= 2, P) : W) : (H.flags |= 2, P)) : (H.flags |= 1048576, P);
    }
    function C(H) {
      return n && H.alternate === null && (H.flags |= 2), H;
    }
    function N(H, P, W, ve) {
      return P === null || P.tag !== 6 ? (P = hp(W, H.mode, ve), P.return = H, P) : (P = f(P, W), P.return = H, P);
    }
    function j(H, P, W, ve) {
      var Qe = W.type;
      return Qe === He ? pe(H, P, W.props.children, ve, W.key) : P !== null && (P.elementType === Qe || typeof Qe == "object" && Qe !== null && Qe.$$typeof === De && ih(Qe) === P.type) ? (ve = f(P, W.props), ve.ref = Tl(H, P, W), ve.return = H, ve) : (ve = ec(W.type, W.key, W.props, null, H.mode, ve), ve.ref = Tl(H, P, W), ve.return = H, ve);
    }
    function K(H, P, W, ve) {
      return P === null || P.tag !== 4 || P.stateNode.containerInfo !== W.containerInfo || P.stateNode.implementation !== W.implementation ? (P = Rf(W, H.mode, ve), P.return = H, P) : (P = f(P, W.children || []), P.return = H, P);
    }
    function pe(H, P, W, ve, Qe) {
      return P === null || P.tag !== 7 ? (P = po(W, H.mode, ve, Qe), P.return = H, P) : (P = f(P, W), P.return = H, P);
    }
    function me(H, P, W) {
      if (typeof P == "string" && P !== "" || typeof P == "number") return P = hp("" + P, H.mode, W), P.return = H, P;
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case de:
            return W = ec(P.type, P.key, P.props, null, H.mode, W), W.ref = Tl(H, null, P), W.return = H, W;
          case Ye:
            return P = Rf(P, H.mode, W), P.return = H, P;
          case De:
            var ve = P._init;
            return me(H, ve(P._payload), W);
        }
        if (tr(P) || he(P)) return P = po(P, H.mode, W, null), P.return = H, P;
        Wc(H, P);
      }
      return null;
    }
    function fe(H, P, W, ve) {
      var Qe = P !== null ? P.key : null;
      if (typeof W == "string" && W !== "" || typeof W == "number") return Qe !== null ? null : N(H, P, "" + W, ve);
      if (typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case de:
            return W.key === Qe ? j(H, P, W, ve) : null;
          case Ye:
            return W.key === Qe ? K(H, P, W, ve) : null;
          case De:
            return Qe = W._init, fe(
              H,
              P,
              Qe(W._payload),
              ve
            );
        }
        if (tr(W) || he(W)) return Qe !== null ? null : pe(H, P, W, ve, null);
        Wc(H, W);
      }
      return null;
    }
    function Fe(H, P, W, ve, Qe) {
      if (typeof ve == "string" && ve !== "" || typeof ve == "number") return H = H.get(W) || null, N(P, H, "" + ve, Qe);
      if (typeof ve == "object" && ve !== null) {
        switch (ve.$$typeof) {
          case de:
            return H = H.get(ve.key === null ? W : ve.key) || null, j(P, H, ve, Qe);
          case Ye:
            return H = H.get(ve.key === null ? W : ve.key) || null, K(P, H, ve, Qe);
          case De:
            var st = ve._init;
            return Fe(H, P, W, st(ve._payload), Qe);
        }
        if (tr(ve) || he(ve)) return H = H.get(W) || null, pe(P, H, ve, Qe, null);
        Wc(P, ve);
      }
      return null;
    }
    function Ge(H, P, W, ve) {
      for (var Qe = null, st = null, dt = P, yt = P = 0, or = null; dt !== null && yt < W.length; yt++) {
        dt.index > yt ? (or = dt, dt = null) : or = dt.sibling;
        var qt = fe(H, dt, W[yt], ve);
        if (qt === null) {
          dt === null && (dt = or);
          break;
        }
        n && dt && qt.alternate === null && r(H, dt), P = m(qt, P, yt), st === null ? Qe = qt : st.sibling = qt, st = qt, dt = or;
      }
      if (yt === W.length) return o(H, dt), yn && kl(H, yt), Qe;
      if (dt === null) {
        for (; yt < W.length; yt++) dt = me(H, W[yt], ve), dt !== null && (P = m(dt, P, yt), st === null ? Qe = dt : st.sibling = dt, st = dt);
        return yn && kl(H, yt), Qe;
      }
      for (dt = u(H, dt); yt < W.length; yt++) or = Fe(dt, H, yt, W[yt], ve), or !== null && (n && or.alternate !== null && dt.delete(or.key === null ? yt : or.key), P = m(or, P, yt), st === null ? Qe = or : st.sibling = or, st = or);
      return n && dt.forEach(function(el) {
        return r(H, el);
      }), yn && kl(H, yt), Qe;
    }
    function Je(H, P, W, ve) {
      var Qe = he(W);
      if (typeof Qe != "function") throw Error(d(150));
      if (W = Qe.call(W), W == null) throw Error(d(151));
      for (var st = Qe = null, dt = P, yt = P = 0, or = null, qt = W.next(); dt !== null && !qt.done; yt++, qt = W.next()) {
        dt.index > yt ? (or = dt, dt = null) : or = dt.sibling;
        var el = fe(H, dt, qt.value, ve);
        if (el === null) {
          dt === null && (dt = or);
          break;
        }
        n && dt && el.alternate === null && r(H, dt), P = m(el, P, yt), st === null ? Qe = el : st.sibling = el, st = el, dt = or;
      }
      if (qt.done) return o(
        H,
        dt
      ), yn && kl(H, yt), Qe;
      if (dt === null) {
        for (; !qt.done; yt++, qt = W.next()) qt = me(H, qt.value, ve), qt !== null && (P = m(qt, P, yt), st === null ? Qe = qt : st.sibling = qt, st = qt);
        return yn && kl(H, yt), Qe;
      }
      for (dt = u(H, dt); !qt.done; yt++, qt = W.next()) qt = Fe(dt, H, yt, qt.value, ve), qt !== null && (n && qt.alternate !== null && dt.delete(qt.key === null ? yt : qt.key), P = m(qt, P, yt), st === null ? Qe = qt : st.sibling = qt, st = qt);
      return n && dt.forEach(function(Vh) {
        return r(H, Vh);
      }), yn && kl(H, yt), Qe;
    }
    function jn(H, P, W, ve) {
      if (typeof W == "object" && W !== null && W.type === He && W.key === null && (W = W.props.children), typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case de:
            e: {
              for (var Qe = W.key, st = P; st !== null; ) {
                if (st.key === Qe) {
                  if (Qe = W.type, Qe === He) {
                    if (st.tag === 7) {
                      o(H, st.sibling), P = f(st, W.props.children), P.return = H, H = P;
                      break e;
                    }
                  } else if (st.elementType === Qe || typeof Qe == "object" && Qe !== null && Qe.$$typeof === De && ih(Qe) === st.type) {
                    o(H, st.sibling), P = f(st, W.props), P.ref = Tl(H, st, W), P.return = H, H = P;
                    break e;
                  }
                  o(H, st);
                  break;
                } else r(H, st);
                st = st.sibling;
              }
              W.type === He ? (P = po(W.props.children, H.mode, ve, W.key), P.return = H, H = P) : (ve = ec(W.type, W.key, W.props, null, H.mode, ve), ve.ref = Tl(H, P, W), ve.return = H, H = ve);
            }
            return C(H);
          case Ye:
            e: {
              for (st = W.key; P !== null; ) {
                if (P.key === st) if (P.tag === 4 && P.stateNode.containerInfo === W.containerInfo && P.stateNode.implementation === W.implementation) {
                  o(H, P.sibling), P = f(P, W.children || []), P.return = H, H = P;
                  break e;
                } else {
                  o(H, P);
                  break;
                }
                else r(H, P);
                P = P.sibling;
              }
              P = Rf(W, H.mode, ve), P.return = H, H = P;
            }
            return C(H);
          case De:
            return st = W._init, jn(H, P, st(W._payload), ve);
        }
        if (tr(W)) return Ge(H, P, W, ve);
        if (he(W)) return Je(H, P, W, ve);
        Wc(H, W);
      }
      return typeof W == "string" && W !== "" || typeof W == "number" ? (W = "" + W, P !== null && P.tag === 6 ? (o(H, P.sibling), P = f(P, W), P.return = H, H = P) : (o(H, P), P = hp(W, H.mode, ve), P.return = H, H = P), C(H)) : o(H, P);
    }
    return jn;
  }
  var Nn = Dl(!0), Oe = Dl(!1), Ca = Pa(null), ia = null, Mu = null, Id = null;
  function Fd() {
    Id = Mu = ia = null;
  }
  function Vd(n) {
    var r = Ca.current;
    dn(Ca), n._currentValue = r;
  }
  function Hd(n, r, o) {
    for (; n !== null; ) {
      var u = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), n === o) break;
      n = n.return;
    }
  }
  function En(n, r) {
    ia = n, Id = Mu = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & r) !== 0 && (Hn = !0), n.firstContext = null);
  }
  function Va(n) {
    var r = n._currentValue;
    if (Id !== n) if (n = { context: n, memoizedValue: r, next: null }, Mu === null) {
      if (ia === null) throw Error(d(308));
      Mu = n, ia.dependencies = { lanes: 0, firstContext: n };
    } else Mu = Mu.next = n;
    return r;
  }
  var Nl = null;
  function $d(n) {
    Nl === null ? Nl = [n] : Nl.push(n);
  }
  function Bd(n, r, o, u) {
    var f = r.interleaved;
    return f === null ? (o.next = o, $d(r)) : (o.next = f.next, f.next = o), r.interleaved = o, Ea(n, u);
  }
  function Ea(n, r) {
    n.lanes |= r;
    var o = n.alternate;
    for (o !== null && (o.lanes |= r), o = n, n = n.return; n !== null; ) n.childLanes |= r, o = n.alternate, o !== null && (o.childLanes |= r), o = n, n = n.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var wa = !1;
  function qd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function oh(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function lo(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Bo(n, r, o) {
    var u = n.updateQueue;
    if (u === null) return null;
    if (u = u.shared, (Ut & 2) !== 0) {
      var f = u.pending;
      return f === null ? r.next = r : (r.next = f.next, f.next = r), u.pending = r, Ea(n, o);
    }
    return f = u.interleaved, f === null ? (r.next = r, $d(u)) : (r.next = f.next, f.next = r), u.interleaved = r, Ea(n, o);
  }
  function Yc(n, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
      var u = r.lanes;
      u &= n.pendingLanes, o |= u, r.lanes = o, Ji(n, o);
    }
  }
  function lh(n, r) {
    var o = n.updateQueue, u = n.alternate;
    if (u !== null && (u = u.updateQueue, o === u)) {
      var f = null, m = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var C = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          m === null ? f = m = C : m = m.next = C, o = o.next;
        } while (o !== null);
        m === null ? f = m = r : m = m.next = r;
      } else f = m = r;
      o = { baseState: u.baseState, firstBaseUpdate: f, lastBaseUpdate: m, shared: u.shared, effects: u.effects }, n.updateQueue = o;
      return;
    }
    n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = r : n.next = r, o.lastBaseUpdate = r;
  }
  function bs(n, r, o, u) {
    var f = n.updateQueue;
    wa = !1;
    var m = f.firstBaseUpdate, C = f.lastBaseUpdate, N = f.shared.pending;
    if (N !== null) {
      f.shared.pending = null;
      var j = N, K = j.next;
      j.next = null, C === null ? m = K : C.next = K, C = j;
      var pe = n.alternate;
      pe !== null && (pe = pe.updateQueue, N = pe.lastBaseUpdate, N !== C && (N === null ? pe.firstBaseUpdate = K : N.next = K, pe.lastBaseUpdate = j));
    }
    if (m !== null) {
      var me = f.baseState;
      C = 0, pe = K = j = null, N = m;
      do {
        var fe = N.lane, Fe = N.eventTime;
        if ((u & fe) === fe) {
          pe !== null && (pe = pe.next = {
            eventTime: Fe,
            lane: 0,
            tag: N.tag,
            payload: N.payload,
            callback: N.callback,
            next: null
          });
          e: {
            var Ge = n, Je = N;
            switch (fe = r, Fe = o, Je.tag) {
              case 1:
                if (Ge = Je.payload, typeof Ge == "function") {
                  me = Ge.call(Fe, me, fe);
                  break e;
                }
                me = Ge;
                break e;
              case 3:
                Ge.flags = Ge.flags & -65537 | 128;
              case 0:
                if (Ge = Je.payload, fe = typeof Ge == "function" ? Ge.call(Fe, me, fe) : Ge, fe == null) break e;
                me = le({}, me, fe);
                break e;
              case 2:
                wa = !0;
            }
          }
          N.callback !== null && N.lane !== 0 && (n.flags |= 64, fe = f.effects, fe === null ? f.effects = [N] : fe.push(N));
        } else Fe = { eventTime: Fe, lane: fe, tag: N.tag, payload: N.payload, callback: N.callback, next: null }, pe === null ? (K = pe = Fe, j = me) : pe = pe.next = Fe, C |= fe;
        if (N = N.next, N === null) {
          if (N = f.shared.pending, N === null) break;
          fe = N, N = fe.next, fe.next = null, f.lastBaseUpdate = fe, f.shared.pending = null;
        }
      } while (!0);
      if (pe === null && (j = me), f.baseState = j, f.firstBaseUpdate = K, f.lastBaseUpdate = pe, r = f.shared.interleaved, r !== null) {
        f = r;
        do
          C |= f.lane, f = f.next;
        while (f !== r);
      } else m === null && (f.shared.lanes = 0);
      Ii |= C, n.lanes = C, n.memoizedState = me;
    }
  }
  function Wd(n, r, o) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var u = n[r], f = u.callback;
      if (f !== null) {
        if (u.callback = null, u = o, typeof f != "function") throw Error(d(191, f));
        f.call(u);
      }
    }
  }
  var Rs = {}, Ai = Pa(Rs), ks = Pa(Rs), Ts = Pa(Rs);
  function Ml(n) {
    if (n === Rs) throw Error(d(174));
    return n;
  }
  function Yd(n, r) {
    switch (tt(Ts, r), tt(ks, n), tt(Ai, Rs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : ya(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = ya(r, n);
    }
    dn(Ai), tt(Ai, r);
  }
  function Ll() {
    dn(Ai), dn(ks), dn(Ts);
  }
  function uh(n) {
    Ml(Ts.current);
    var r = Ml(Ai.current), o = ya(r, n.type);
    r !== o && (tt(ks, n), tt(Ai, o));
  }
  function Gc(n) {
    ks.current === n && (dn(Ai), dn(ks));
  }
  var wn = Pa(0);
  function Qc(n) {
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
  var Ds = [];
  function it() {
    for (var n = 0; n < Ds.length; n++) Ds[n]._workInProgressVersionPrimary = null;
    Ds.length = 0;
  }
  var Dt = be.ReactCurrentDispatcher, $t = be.ReactCurrentBatchConfig, rn = 0, Bt = null, Vn = null, ar = null, Kc = !1, Ns = !1, Ol = 0, se = 0;
  function Vt() {
    throw Error(d(321));
  }
  function pt(n, r) {
    if (r === null) return !1;
    for (var o = 0; o < r.length && o < n.length; o++) if (!ci(n[o], r[o])) return !1;
    return !0;
  }
  function qo(n, r, o, u, f, m) {
    if (rn = m, Bt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Dt.current = n === null || n.memoizedState === null ? df : Us, n = o(u, f), Ns) {
      m = 0;
      do {
        if (Ns = !1, Ol = 0, 25 <= m) throw Error(d(301));
        m += 1, ar = Vn = null, r.updateQueue = null, Dt.current = pf, n = o(u, f);
      } while (Ns);
    }
    if (Dt.current = Pl, r = Vn !== null && Vn.next !== null, rn = 0, ar = Vn = Bt = null, Kc = !1, r) throw Error(d(300));
    return n;
  }
  function di() {
    var n = Ol !== 0;
    return Ol = 0, n;
  }
  function Tr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ar === null ? Bt.memoizedState = ar = n : ar = ar.next = n, ar;
  }
  function Mn() {
    if (Vn === null) {
      var n = Bt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Vn.next;
    var r = ar === null ? Bt.memoizedState : ar.next;
    if (r !== null) ar = r, Vn = n;
    else {
      if (n === null) throw Error(d(310));
      Vn = n, n = { memoizedState: Vn.memoizedState, baseState: Vn.baseState, baseQueue: Vn.baseQueue, queue: Vn.queue, next: null }, ar === null ? Bt.memoizedState = ar = n : ar = ar.next = n;
    }
    return ar;
  }
  function uo(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Wo(n) {
    var r = Mn(), o = r.queue;
    if (o === null) throw Error(d(311));
    o.lastRenderedReducer = n;
    var u = Vn, f = u.baseQueue, m = o.pending;
    if (m !== null) {
      if (f !== null) {
        var C = f.next;
        f.next = m.next, m.next = C;
      }
      u.baseQueue = f = m, o.pending = null;
    }
    if (f !== null) {
      m = f.next, u = u.baseState;
      var N = C = null, j = null, K = m;
      do {
        var pe = K.lane;
        if ((rn & pe) === pe) j !== null && (j = j.next = { lane: 0, action: K.action, hasEagerState: K.hasEagerState, eagerState: K.eagerState, next: null }), u = K.hasEagerState ? K.eagerState : n(u, K.action);
        else {
          var me = {
            lane: pe,
            action: K.action,
            hasEagerState: K.hasEagerState,
            eagerState: K.eagerState,
            next: null
          };
          j === null ? (N = j = me, C = u) : j = j.next = me, Bt.lanes |= pe, Ii |= pe;
        }
        K = K.next;
      } while (K !== null && K !== m);
      j === null ? C = u : j.next = N, ci(u, r.memoizedState) || (Hn = !0), r.memoizedState = u, r.baseState = C, r.baseQueue = j, o.lastRenderedState = u;
    }
    if (n = o.interleaved, n !== null) {
      f = n;
      do
        m = f.lane, Bt.lanes |= m, Ii |= m, f = f.next;
      while (f !== n);
    } else f === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function jl(n) {
    var r = Mn(), o = r.queue;
    if (o === null) throw Error(d(311));
    o.lastRenderedReducer = n;
    var u = o.dispatch, f = o.pending, m = r.memoizedState;
    if (f !== null) {
      o.pending = null;
      var C = f = f.next;
      do
        m = n(m, C.action), C = C.next;
      while (C !== f);
      ci(m, r.memoizedState) || (Hn = !0), r.memoizedState = m, r.baseQueue === null && (r.baseState = m), o.lastRenderedState = m;
    }
    return [m, u];
  }
  function Xc() {
  }
  function Jc(n, r) {
    var o = Bt, u = Mn(), f = r(), m = !ci(u.memoizedState, f);
    if (m && (u.memoizedState = f, Hn = !0), u = u.queue, Ms(tf.bind(null, o, u, n), [n]), u.getSnapshot !== r || m || ar !== null && ar.memoizedState.tag & 1) {
      if (o.flags |= 2048, Al(9, ef.bind(null, o, u, f, r), void 0, null), Zn === null) throw Error(d(349));
      (rn & 30) !== 0 || Zc(o, r, f);
    }
    return f;
  }
  function Zc(n, r, o) {
    n.flags |= 16384, n = { getSnapshot: r, value: o }, r = Bt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Bt.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
  }
  function ef(n, r, o, u) {
    r.value = o, r.getSnapshot = u, nf(r) && rf(n);
  }
  function tf(n, r, o) {
    return o(function() {
      nf(r) && rf(n);
    });
  }
  function nf(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var o = r();
      return !ci(n, o);
    } catch {
      return !0;
    }
  }
  function rf(n) {
    var r = Ea(n, 1);
    r !== null && Vr(r, n, 1, -1);
  }
  function af(n) {
    var r = Tr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: uo, lastRenderedState: n }, r.queue = n, n = n.dispatch = zl.bind(null, Bt, n), [r.memoizedState, n];
  }
  function Al(n, r, o, u) {
    return n = { tag: n, create: r, destroy: o, deps: u, next: null }, r = Bt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Bt.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (u = o.next, o.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function of() {
    return Mn().memoizedState;
  }
  function Lu(n, r, o, u) {
    var f = Tr();
    Bt.flags |= n, f.memoizedState = Al(1 | r, o, void 0, u === void 0 ? null : u);
  }
  function Ou(n, r, o, u) {
    var f = Mn();
    u = u === void 0 ? null : u;
    var m = void 0;
    if (Vn !== null) {
      var C = Vn.memoizedState;
      if (m = C.destroy, u !== null && pt(u, C.deps)) {
        f.memoizedState = Al(r, o, m, u);
        return;
      }
    }
    Bt.flags |= n, f.memoizedState = Al(1 | r, o, m, u);
  }
  function lf(n, r) {
    return Lu(8390656, 8, n, r);
  }
  function Ms(n, r) {
    return Ou(2048, 8, n, r);
  }
  function uf(n, r) {
    return Ou(4, 2, n, r);
  }
  function Ls(n, r) {
    return Ou(4, 4, n, r);
  }
  function Ul(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function sf(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Ou(4, 4, Ul.bind(null, r, n), o);
  }
  function Os() {
  }
  function cf(n, r) {
    var o = Mn();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && pt(r, u[1]) ? u[0] : (o.memoizedState = [n, r], n);
  }
  function ff(n, r) {
    var o = Mn();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && pt(r, u[1]) ? u[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function Gd(n, r, o) {
    return (rn & 21) === 0 ? (n.baseState && (n.baseState = !1, Hn = !0), n.memoizedState = o) : (ci(o, r) || (o = du(), Bt.lanes |= o, Ii |= o, n.baseState = !0), r);
  }
  function js(n, r) {
    var o = Ht;
    Ht = o !== 0 && 4 > o ? o : 4, n(!0);
    var u = $t.transition;
    $t.transition = {};
    try {
      n(!1), r();
    } finally {
      Ht = o, $t.transition = u;
    }
  }
  function Qd() {
    return Mn().memoizedState;
  }
  function As(n, r, o) {
    var u = Fi(n);
    if (o = { lane: u, action: o, hasEagerState: !1, eagerState: null, next: null }, oa(n)) sh(r, o);
    else if (o = Bd(n, r, o, u), o !== null) {
      var f = qn();
      Vr(o, n, u, f), ln(o, r, u);
    }
  }
  function zl(n, r, o) {
    var u = Fi(n), f = { lane: u, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (oa(n)) sh(r, f);
    else {
      var m = n.alternate;
      if (n.lanes === 0 && (m === null || m.lanes === 0) && (m = r.lastRenderedReducer, m !== null)) try {
        var C = r.lastRenderedState, N = m(C, o);
        if (f.hasEagerState = !0, f.eagerState = N, ci(N, C)) {
          var j = r.interleaved;
          j === null ? (f.next = f, $d(r)) : (f.next = j.next, j.next = f), r.interleaved = f;
          return;
        }
      } catch {
      }
      o = Bd(n, r, f, u), o !== null && (f = qn(), Vr(o, n, u, f), ln(o, r, u));
    }
  }
  function oa(n) {
    var r = n.alternate;
    return n === Bt || r !== null && r === Bt;
  }
  function sh(n, r) {
    Ns = Kc = !0;
    var o = n.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
  }
  function ln(n, r, o) {
    if ((o & 4194240) !== 0) {
      var u = r.lanes;
      u &= n.pendingLanes, o |= u, r.lanes = o, Ji(n, o);
    }
  }
  var Pl = { readContext: Va, useCallback: Vt, useContext: Vt, useEffect: Vt, useImperativeHandle: Vt, useInsertionEffect: Vt, useLayoutEffect: Vt, useMemo: Vt, useReducer: Vt, useRef: Vt, useState: Vt, useDebugValue: Vt, useDeferredValue: Vt, useTransition: Vt, useMutableSource: Vt, useSyncExternalStore: Vt, useId: Vt, unstable_isNewReconciler: !1 }, df = { readContext: Va, useCallback: function(n, r) {
    return Tr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Va, useEffect: lf, useImperativeHandle: function(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Lu(
      4194308,
      4,
      Ul.bind(null, r, n),
      o
    );
  }, useLayoutEffect: function(n, r) {
    return Lu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Lu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var o = Tr();
    return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
  }, useReducer: function(n, r, o) {
    var u = Tr();
    return r = o !== void 0 ? o(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = As.bind(null, Bt, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = Tr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: af, useDebugValue: Os, useDeferredValue: function(n) {
    return Tr().memoizedState = n;
  }, useTransition: function() {
    var n = af(!1), r = n[0];
    return n = js.bind(null, n[1]), Tr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var u = Bt, f = Tr();
    if (yn) {
      if (o === void 0) throw Error(d(407));
      o = o();
    } else {
      if (o = r(), Zn === null) throw Error(d(349));
      (rn & 30) !== 0 || Zc(u, r, o);
    }
    f.memoizedState = o;
    var m = { value: o, getSnapshot: r };
    return f.queue = m, lf(tf.bind(
      null,
      u,
      m,
      n
    ), [n]), u.flags |= 2048, Al(9, ef.bind(null, u, m, o, r), void 0, null), o;
  }, useId: function() {
    var n = Tr(), r = Zn.identifierPrefix;
    if (yn) {
      var o = ji, u = Oi;
      o = (u & ~(1 << 32 - Ar(u) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = Ol++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else o = se++, r = ":" + r + "r" + o.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Us = {
    readContext: Va,
    useCallback: cf,
    useContext: Va,
    useEffect: Ms,
    useImperativeHandle: sf,
    useInsertionEffect: uf,
    useLayoutEffect: Ls,
    useMemo: ff,
    useReducer: Wo,
    useRef: of,
    useState: function() {
      return Wo(uo);
    },
    useDebugValue: Os,
    useDeferredValue: function(n) {
      var r = Mn();
      return Gd(r, Vn.memoizedState, n);
    },
    useTransition: function() {
      var n = Wo(uo)[0], r = Mn().memoizedState;
      return [n, r];
    },
    useMutableSource: Xc,
    useSyncExternalStore: Jc,
    useId: Qd,
    unstable_isNewReconciler: !1
  }, pf = { readContext: Va, useCallback: cf, useContext: Va, useEffect: Ms, useImperativeHandle: sf, useInsertionEffect: uf, useLayoutEffect: Ls, useMemo: ff, useReducer: jl, useRef: of, useState: function() {
    return jl(uo);
  }, useDebugValue: Os, useDeferredValue: function(n) {
    var r = Mn();
    return Vn === null ? r.memoizedState = n : Gd(r, Vn.memoizedState, n);
  }, useTransition: function() {
    var n = jl(uo)[0], r = Mn().memoizedState;
    return [n, r];
  }, useMutableSource: Xc, useSyncExternalStore: Jc, useId: Qd, unstable_isNewReconciler: !1 };
  function pi(n, r) {
    if (n && n.defaultProps) {
      r = le({}, r), n = n.defaultProps;
      for (var o in n) r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  function Kd(n, r, o, u) {
    r = n.memoizedState, o = o(u, r), o = o == null ? r : le({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var vf = { isMounted: function(n) {
    return (n = n._reactInternals) ? Et(n) === n : !1;
  }, enqueueSetState: function(n, r, o) {
    n = n._reactInternals;
    var u = qn(), f = Fi(n), m = lo(u, f);
    m.payload = r, o != null && (m.callback = o), r = Bo(n, m, f), r !== null && (Vr(r, n, f, u), Yc(r, n, f));
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternals;
    var u = qn(), f = Fi(n), m = lo(u, f);
    m.tag = 1, m.payload = r, o != null && (m.callback = o), r = Bo(n, m, f), r !== null && (Vr(r, n, f, u), Yc(r, n, f));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var o = qn(), u = Fi(n), f = lo(o, u);
    f.tag = 2, r != null && (f.callback = r), r = Bo(n, f, u), r !== null && (Vr(r, n, u, o), Yc(r, n, u));
  } };
  function ch(n, r, o, u, f, m, C) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, m, C) : r.prototype && r.prototype.isPureReactComponent ? !hs(o, u) || !hs(f, m) : !0;
  }
  function hf(n, r, o) {
    var u = !1, f = kr, m = r.contextType;
    return typeof m == "object" && m !== null ? m = Va(m) : (f = In(r) ? ta : bn.current, u = r.contextTypes, m = (u = u != null) ? na(n, f) : kr), r = new r(o, m), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = vf, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = f, n.__reactInternalMemoizedMaskedChildContext = m), r;
  }
  function fh(n, r, o, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, u), r.state !== n && vf.enqueueReplaceState(r, r.state, null);
  }
  function zs(n, r, o, u) {
    var f = n.stateNode;
    f.props = o, f.state = n.memoizedState, f.refs = {}, qd(n);
    var m = r.contextType;
    typeof m == "object" && m !== null ? f.context = Va(m) : (m = In(r) ? ta : bn.current, f.context = na(n, m)), f.state = n.memoizedState, m = r.getDerivedStateFromProps, typeof m == "function" && (Kd(n, r, m, o), f.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (r = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), r !== f.state && vf.enqueueReplaceState(f, f.state, null), bs(n, o, f, u), f.state = n.memoizedState), typeof f.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Il(n, r) {
    try {
      var o = "", u = r;
      do
        o += mt(u), u = u.return;
      while (u);
      var f = o;
    } catch (m) {
      f = `
Error generating stack: ` + m.message + `
` + m.stack;
    }
    return { value: n, source: r, stack: f, digest: null };
  }
  function Xd(n, r, o) {
    return { value: n, source: null, stack: o ?? null, digest: r ?? null };
  }
  function Jd(n, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var mf = typeof WeakMap == "function" ? WeakMap : Map;
  function dh(n, r, o) {
    o = lo(-1, o), o.tag = 3, o.payload = { element: null };
    var u = r.value;
    return o.callback = function() {
      Iu || (Iu = !0, Hl = u), Jd(n, r);
    }, o;
  }
  function Zd(n, r, o) {
    o = lo(-1, o), o.tag = 3;
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var f = r.value;
      o.payload = function() {
        return u(f);
      }, o.callback = function() {
        Jd(n, r);
      };
    }
    var m = n.stateNode;
    return m !== null && typeof m.componentDidCatch == "function" && (o.callback = function() {
      Jd(n, r), typeof u != "function" && (Qo === null ? Qo = /* @__PURE__ */ new Set([this]) : Qo.add(this));
      var C = r.stack;
      this.componentDidCatch(r.value, { componentStack: C !== null ? C : "" });
    }), o;
  }
  function ep(n, r, o) {
    var u = n.pingCache;
    if (u === null) {
      u = n.pingCache = new mf();
      var f = /* @__PURE__ */ new Set();
      u.set(r, f);
    } else f = u.get(r), f === void 0 && (f = /* @__PURE__ */ new Set(), u.set(r, f));
    f.has(o) || (f.add(o), n = Zy.bind(null, n, r, o), r.then(n, n));
  }
  function ph(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Yo(n, r, o, u, f) {
    return (n.mode & 1) === 0 ? (n === r ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = lo(-1, 1), r.tag = 2, Bo(o, r, 1))), o.lanes |= 1), n) : (n.flags |= 65536, n.lanes = f, n);
  }
  var Ps = be.ReactCurrentOwner, Hn = !1;
  function pr(n, r, o, u) {
    r.child = n === null ? Oe(r, null, o, u) : Nn(r, n.child, o, u);
  }
  function la(n, r, o, u, f) {
    o = o.render;
    var m = r.ref;
    return En(r, f), u = qo(n, r, o, u, m, f), o = di(), n !== null && !Hn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~f, $a(n, r, f)) : (yn && o && $c(r), r.flags |= 1, pr(n, r, u, f), r.child);
  }
  function Fl(n, r, o, u, f) {
    if (n === null) {
      var m = o.type;
      return typeof m == "function" && !vp(m) && m.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = m, xt(n, r, m, u, f)) : (n = ec(o.type, null, u, r, r.mode, f), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (m = n.child, (n.lanes & f) === 0) {
      var C = m.memoizedProps;
      if (o = o.compare, o = o !== null ? o : hs, o(C, u) && n.ref === r.ref) return $a(n, r, f);
    }
    return r.flags |= 1, n = Xo(m, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function xt(n, r, o, u, f) {
    if (n !== null) {
      var m = n.memoizedProps;
      if (hs(m, u) && n.ref === r.ref) if (Hn = !1, r.pendingProps = u = m, (n.lanes & f) !== 0) (n.flags & 131072) !== 0 && (Hn = !0);
      else return r.lanes = n.lanes, $a(n, r, f);
    }
    return vh(n, r, o, u, f);
  }
  function Is(n, r, o) {
    var u = r.pendingProps, f = u.children, m = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden") if ((r.mode & 1) === 0) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, tt(Uu, xa), xa |= o;
    else {
      if ((o & 1073741824) === 0) return n = m !== null ? m.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, tt(Uu, xa), xa |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = m !== null ? m.baseLanes : o, tt(Uu, xa), xa |= u;
    }
    else m !== null ? (u = m.baseLanes | o, r.memoizedState = null) : u = o, tt(Uu, xa), xa |= u;
    return pr(n, r, f, o), r.child;
  }
  function tp(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function vh(n, r, o, u, f) {
    var m = In(o) ? ta : bn.current;
    return m = na(r, m), En(r, f), o = qo(n, r, o, u, m, f), u = di(), n !== null && !Hn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~f, $a(n, r, f)) : (yn && u && $c(r), r.flags |= 1, pr(n, r, o, f), r.child);
  }
  function hh(n, r, o, u, f) {
    if (In(o)) {
      var m = !0;
      rr(r);
    } else m = !1;
    if (En(r, f), r.stateNode === null) Ha(n, r), hf(r, o, u), zs(r, o, u, f), u = !0;
    else if (n === null) {
      var C = r.stateNode, N = r.memoizedProps;
      C.props = N;
      var j = C.context, K = o.contextType;
      typeof K == "object" && K !== null ? K = Va(K) : (K = In(o) ? ta : bn.current, K = na(r, K));
      var pe = o.getDerivedStateFromProps, me = typeof pe == "function" || typeof C.getSnapshotBeforeUpdate == "function";
      me || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (N !== u || j !== K) && fh(r, C, u, K), wa = !1;
      var fe = r.memoizedState;
      C.state = fe, bs(r, u, C, f), j = r.memoizedState, N !== u || fe !== j || Xn.current || wa ? (typeof pe == "function" && (Kd(r, o, pe, u), j = r.memoizedState), (N = wa || ch(r, o, N, u, fe, j, K)) ? (me || typeof C.UNSAFE_componentWillMount != "function" && typeof C.componentWillMount != "function" || (typeof C.componentWillMount == "function" && C.componentWillMount(), typeof C.UNSAFE_componentWillMount == "function" && C.UNSAFE_componentWillMount()), typeof C.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = j), C.props = u, C.state = j, C.context = K, u = N) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      C = r.stateNode, oh(n, r), N = r.memoizedProps, K = r.type === r.elementType ? N : pi(r.type, N), C.props = K, me = r.pendingProps, fe = C.context, j = o.contextType, typeof j == "object" && j !== null ? j = Va(j) : (j = In(o) ? ta : bn.current, j = na(r, j));
      var Fe = o.getDerivedStateFromProps;
      (pe = typeof Fe == "function" || typeof C.getSnapshotBeforeUpdate == "function") || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (N !== me || fe !== j) && fh(r, C, u, j), wa = !1, fe = r.memoizedState, C.state = fe, bs(r, u, C, f);
      var Ge = r.memoizedState;
      N !== me || fe !== Ge || Xn.current || wa ? (typeof Fe == "function" && (Kd(r, o, Fe, u), Ge = r.memoizedState), (K = wa || ch(r, o, K, u, fe, Ge, j) || !1) ? (pe || typeof C.UNSAFE_componentWillUpdate != "function" && typeof C.componentWillUpdate != "function" || (typeof C.componentWillUpdate == "function" && C.componentWillUpdate(u, Ge, j), typeof C.UNSAFE_componentWillUpdate == "function" && C.UNSAFE_componentWillUpdate(u, Ge, j)), typeof C.componentDidUpdate == "function" && (r.flags |= 4), typeof C.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof C.componentDidUpdate != "function" || N === n.memoizedProps && fe === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || N === n.memoizedProps && fe === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = Ge), C.props = u, C.state = Ge, C.context = j, u = K) : (typeof C.componentDidUpdate != "function" || N === n.memoizedProps && fe === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || N === n.memoizedProps && fe === n.memoizedState || (r.flags |= 1024), u = !1);
    }
    return Fs(n, r, o, u, m, f);
  }
  function Fs(n, r, o, u, f, m) {
    tp(n, r);
    var C = (r.flags & 128) !== 0;
    if (!u && !C) return f && Vc(r, o, !1), $a(n, r, m);
    u = r.stateNode, Ps.current = r;
    var N = C && typeof o.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && C ? (r.child = Nn(r, n.child, null, m), r.child = Nn(r, null, N, m)) : pr(n, r, N, m), r.memoizedState = u.state, f && Vc(r, o, !0), r.child;
  }
  function ju(n) {
    var r = n.stateNode;
    r.pendingContext ? nh(n, r.pendingContext, r.pendingContext !== r.context) : r.context && nh(n, r.context, !1), Yd(n, r.containerInfo);
  }
  function mh(n, r, o, u, f) {
    return $o(), oo(f), r.flags |= 256, pr(n, r, o, u), r.child;
  }
  var yf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function np(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function gf(n, r, o) {
    var u = r.pendingProps, f = wn.current, m = !1, C = (r.flags & 128) !== 0, N;
    if ((N = C) || (N = n !== null && n.memoizedState === null ? !1 : (f & 2) !== 0), N ? (m = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (f |= 1), tt(wn, f & 1), n === null)
      return Pd(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824, null) : (C = u.children, n = u.fallback, m ? (u = r.mode, m = r.child, C = { mode: "hidden", children: C }, (u & 1) === 0 && m !== null ? (m.childLanes = 0, m.pendingProps = C) : m = Jo(C, u, 0, null), n = po(n, u, o, null), m.return = r, n.return = r, m.sibling = n, r.child = m, r.child.memoizedState = np(o), r.memoizedState = yf, n) : rp(r, C));
    if (f = n.memoizedState, f !== null && (N = f.dehydrated, N !== null)) return yh(n, r, C, u, N, f, o);
    if (m) {
      m = u.fallback, C = r.mode, f = n.child, N = f.sibling;
      var j = { mode: "hidden", children: u.children };
      return (C & 1) === 0 && r.child !== f ? (u = r.child, u.childLanes = 0, u.pendingProps = j, r.deletions = null) : (u = Xo(f, j), u.subtreeFlags = f.subtreeFlags & 14680064), N !== null ? m = Xo(N, m) : (m = po(m, C, o, null), m.flags |= 2), m.return = r, u.return = r, u.sibling = m, r.child = u, u = m, m = r.child, C = n.child.memoizedState, C = C === null ? np(o) : { baseLanes: C.baseLanes | o, cachePool: null, transitions: C.transitions }, m.memoizedState = C, m.childLanes = n.childLanes & ~o, r.memoizedState = yf, u;
    }
    return m = n.child, n = m.sibling, u = Xo(m, { mode: "visible", children: u.children }), (r.mode & 1) === 0 && (u.lanes = o), u.return = r, u.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function rp(n, r) {
    return r = Jo({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Vs(n, r, o, u) {
    return u !== null && oo(u), Nn(r, n.child, null, o), n = rp(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function yh(n, r, o, u, f, m, C) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, u = Xd(Error(d(422))), Vs(n, r, C, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (m = u.fallback, f = r.mode, u = Jo({ mode: "visible", children: u.children }, f, 0, null), m = po(m, f, C, null), m.flags |= 2, u.return = r, m.return = r, u.sibling = m, r.child = u, (r.mode & 1) !== 0 && Nn(r, n.child, null, C), r.child.memoizedState = np(C), r.memoizedState = yf, m);
    if ((r.mode & 1) === 0) return Vs(n, r, C, null);
    if (f.data === "$!") {
      if (u = f.nextSibling && f.nextSibling.dataset, u) var N = u.dgst;
      return u = N, m = Error(d(419)), u = Xd(m, u, void 0), Vs(n, r, C, u);
    }
    if (N = (C & n.childLanes) !== 0, Hn || N) {
      if (u = Zn, u !== null) {
        switch (C & -C) {
          case 4:
            f = 2;
            break;
          case 16:
            f = 8;
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
            f = 32;
            break;
          case 536870912:
            f = 268435456;
            break;
          default:
            f = 0;
        }
        f = (f & (u.suspendedLanes | C)) !== 0 ? 0 : f, f !== 0 && f !== m.retryLane && (m.retryLane = f, Ea(n, f), Vr(u, n, f, -1));
      }
      return pp(), u = Xd(Error(d(421))), Vs(n, r, C, u);
    }
    return f.data === "$?" ? (r.flags |= 128, r.child = n.child, r = eg.bind(null, n), f._reactRetry = r, null) : (n = m.treeContext, aa = Di(f.nextSibling), ra = r, yn = !0, Fa = null, n !== null && (Fn[Ia++] = Oi, Fn[Ia++] = ji, Fn[Ia++] = Sa, Oi = n.id, ji = n.overflow, Sa = r), r = rp(r, u.children), r.flags |= 4096, r);
  }
  function ap(n, r, o) {
    n.lanes |= r;
    var u = n.alternate;
    u !== null && (u.lanes |= r), Hd(n.return, r, o);
  }
  function Pr(n, r, o, u, f) {
    var m = n.memoizedState;
    m === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: o, tailMode: f } : (m.isBackwards = r, m.rendering = null, m.renderingStartTime = 0, m.last = u, m.tail = o, m.tailMode = f);
  }
  function Ui(n, r, o) {
    var u = r.pendingProps, f = u.revealOrder, m = u.tail;
    if (pr(n, r, u.children, o), u = wn.current, (u & 2) !== 0) u = u & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && (n.flags & 128) !== 0) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && ap(n, o, r);
        else if (n.tag === 19) ap(n, o, r);
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
    if (tt(wn, u), (r.mode & 1) === 0) r.memoizedState = null;
    else switch (f) {
      case "forwards":
        for (o = r.child, f = null; o !== null; ) n = o.alternate, n !== null && Qc(n) === null && (f = o), o = o.sibling;
        o = f, o === null ? (f = r.child, r.child = null) : (f = o.sibling, o.sibling = null), Pr(r, !1, f, o, m);
        break;
      case "backwards":
        for (o = null, f = r.child, r.child = null; f !== null; ) {
          if (n = f.alternate, n !== null && Qc(n) === null) {
            r.child = f;
            break;
          }
          n = f.sibling, f.sibling = o, o = f, f = n;
        }
        Pr(r, !0, o, null, m);
        break;
      case "together":
        Pr(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Ha(n, r) {
    (r.mode & 1) === 0 && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function $a(n, r, o) {
    if (n !== null && (r.dependencies = n.dependencies), Ii |= r.lanes, (o & r.childLanes) === 0) return null;
    if (n !== null && r.child !== n.child) throw Error(d(153));
    if (r.child !== null) {
      for (n = r.child, o = Xo(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; ) n = n.sibling, o = o.sibling = Xo(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function Hs(n, r, o) {
    switch (r.tag) {
      case 3:
        ju(r), $o();
        break;
      case 5:
        uh(r);
        break;
      case 1:
        In(r.type) && rr(r);
        break;
      case 4:
        Yd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var u = r.type._context, f = r.memoizedProps.value;
        tt(Ca, u._currentValue), u._currentValue = f;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (tt(wn, wn.current & 1), r.flags |= 128, null) : (o & r.child.childLanes) !== 0 ? gf(n, r, o) : (tt(wn, wn.current & 1), n = $a(n, r, o), n !== null ? n.sibling : null);
        tt(wn, wn.current & 1);
        break;
      case 19:
        if (u = (o & r.childLanes) !== 0, (n.flags & 128) !== 0) {
          if (u) return Ui(n, r, o);
          r.flags |= 128;
        }
        if (f = r.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), tt(wn, wn.current), u) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Is(n, r, o);
    }
    return $a(n, r, o);
  }
  var Ba, $n, gh, _h;
  Ba = function(n, r) {
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
  }, $n = function() {
  }, gh = function(n, r, o, u) {
    var f = n.memoizedProps;
    if (f !== u) {
      n = r.stateNode, Ml(Ai.current);
      var m = null;
      switch (o) {
        case "input":
          f = ur(n, f), u = ur(n, u), m = [];
          break;
        case "select":
          f = le({}, f, { value: void 0 }), u = le({}, u, { value: void 0 }), m = [];
          break;
        case "textarea":
          f = Qn(n, f), u = Qn(n, u), m = [];
          break;
        default:
          typeof f.onClick != "function" && typeof u.onClick == "function" && (n.onclick = zo);
      }
      pn(o, u);
      var C;
      o = null;
      for (K in f) if (!u.hasOwnProperty(K) && f.hasOwnProperty(K) && f[K] != null) if (K === "style") {
        var N = f[K];
        for (C in N) N.hasOwnProperty(C) && (o || (o = {}), o[C] = "");
      } else K !== "dangerouslySetInnerHTML" && K !== "children" && K !== "suppressContentEditableWarning" && K !== "suppressHydrationWarning" && K !== "autoFocus" && (w.hasOwnProperty(K) ? m || (m = []) : (m = m || []).push(K, null));
      for (K in u) {
        var j = u[K];
        if (N = f?.[K], u.hasOwnProperty(K) && j !== N && (j != null || N != null)) if (K === "style") if (N) {
          for (C in N) !N.hasOwnProperty(C) || j && j.hasOwnProperty(C) || (o || (o = {}), o[C] = "");
          for (C in j) j.hasOwnProperty(C) && N[C] !== j[C] && (o || (o = {}), o[C] = j[C]);
        } else o || (m || (m = []), m.push(
          K,
          o
        )), o = j;
        else K === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, N = N ? N.__html : void 0, j != null && N !== j && (m = m || []).push(K, j)) : K === "children" ? typeof j != "string" && typeof j != "number" || (m = m || []).push(K, "" + j) : K !== "suppressContentEditableWarning" && K !== "suppressHydrationWarning" && (w.hasOwnProperty(K) ? (j != null && K === "onScroll" && Qt("scroll", n), m || N === j || (m = [])) : (m = m || []).push(K, j));
      }
      o && (m = m || []).push("style", o);
      var K = m;
      (r.updateQueue = K) && (r.flags |= 4);
    }
  }, _h = function(n, r, o, u) {
    o !== u && (r.flags |= 4);
  };
  function $s(n, r) {
    if (!yn) switch (n.tailMode) {
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
  function ir(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, o = 0, u = 0;
    if (r) for (var f = n.child; f !== null; ) o |= f.lanes | f.childLanes, u |= f.subtreeFlags & 14680064, u |= f.flags & 14680064, f.return = n, f = f.sibling;
    else for (f = n.child; f !== null; ) o |= f.lanes | f.childLanes, u |= f.subtreeFlags, u |= f.flags, f.return = n, f = f.sibling;
    return n.subtreeFlags |= u, n.childLanes = o, r;
  }
  function Sh(n, r, o) {
    var u = r.pendingProps;
    switch (Bc(r), r.tag) {
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
        return ir(r), null;
      case 1:
        return In(r.type) && Du(), ir(r), null;
      case 3:
        return u = r.stateNode, Ll(), dn(Xn), dn(bn), it(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (qc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, Fa !== null && ($l(Fa), Fa = null))), $n(n, r), ir(r), null;
      case 5:
        Gc(r);
        var f = Ml(Ts.current);
        if (o = r.type, n !== null && r.stateNode != null) gh(n, r, o, u, f), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null) throw Error(d(166));
            return ir(r), null;
          }
          if (n = Ml(Ai.current), qc(r)) {
            u = r.stateNode, o = r.type;
            var m = r.memoizedProps;
            switch (u[Ni] = r, u[Cs] = m, n = (r.mode & 1) !== 0, o) {
              case "dialog":
                Qt("cancel", u), Qt("close", u);
                break;
              case "iframe":
              case "object":
              case "embed":
                Qt("load", u);
                break;
              case "video":
              case "audio":
                for (f = 0; f < gs.length; f++) Qt(gs[f], u);
                break;
              case "source":
                Qt("error", u);
                break;
              case "img":
              case "image":
              case "link":
                Qt(
                  "error",
                  u
                ), Qt("load", u);
                break;
              case "details":
                Qt("toggle", u);
                break;
              case "input":
                Yn(u, m), Qt("invalid", u);
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!m.multiple }, Qt("invalid", u);
                break;
              case "textarea":
                xr(u, m), Qt("invalid", u);
            }
            pn(o, m), f = null;
            for (var C in m) if (m.hasOwnProperty(C)) {
              var N = m[C];
              C === "children" ? typeof N == "string" ? u.textContent !== N && (m.suppressHydrationWarning !== !0 && zc(u.textContent, N, n), f = ["children", N]) : typeof N == "number" && u.textContent !== "" + N && (m.suppressHydrationWarning !== !0 && zc(
                u.textContent,
                N,
                n
              ), f = ["children", "" + N]) : w.hasOwnProperty(C) && N != null && C === "onScroll" && Qt("scroll", u);
            }
            switch (o) {
              case "input":
                Un(u), _i(u, m, !0);
                break;
              case "textarea":
                Un(u), zn(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof m.onClick == "function" && (u.onclick = zo);
            }
            u = f, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            C = f.nodeType === 9 ? f : f.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = br(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = C.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = C.createElement(o, { is: u.is }) : (n = C.createElement(o), o === "select" && (C = n, u.multiple ? C.multiple = !0 : u.size && (C.size = u.size))) : n = C.createElementNS(n, o), n[Ni] = r, n[Cs] = u, Ba(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (C = nr(o, u), o) {
                case "dialog":
                  Qt("cancel", n), Qt("close", n), f = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Qt("load", n), f = u;
                  break;
                case "video":
                case "audio":
                  for (f = 0; f < gs.length; f++) Qt(gs[f], n);
                  f = u;
                  break;
                case "source":
                  Qt("error", n), f = u;
                  break;
                case "img":
                case "image":
                case "link":
                  Qt(
                    "error",
                    n
                  ), Qt("load", n), f = u;
                  break;
                case "details":
                  Qt("toggle", n), f = u;
                  break;
                case "input":
                  Yn(n, u), f = ur(n, u), Qt("invalid", n);
                  break;
                case "option":
                  f = u;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!u.multiple }, f = le({}, u, { value: void 0 }), Qt("invalid", n);
                  break;
                case "textarea":
                  xr(n, u), f = Qn(n, u), Qt("invalid", n);
                  break;
                default:
                  f = u;
              }
              pn(o, f), N = f;
              for (m in N) if (N.hasOwnProperty(m)) {
                var j = N[m];
                m === "style" ? un(n, j) : m === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, j != null && Si(n, j)) : m === "children" ? typeof j == "string" ? (o !== "textarea" || j !== "") && ke(n, j) : typeof j == "number" && ke(n, "" + j) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (w.hasOwnProperty(m) ? j != null && m === "onScroll" && Qt("scroll", n) : j != null && oe(n, m, j, C));
              }
              switch (o) {
                case "input":
                  Un(n), _i(n, u, !1);
                  break;
                case "textarea":
                  Un(n), zn(n);
                  break;
                case "option":
                  u.value != null && n.setAttribute("value", "" + ct(u.value));
                  break;
                case "select":
                  n.multiple = !!u.multiple, m = u.value, m != null ? Tn(n, !!u.multiple, m, !1) : u.defaultValue != null && Tn(
                    n,
                    !!u.multiple,
                    u.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof f.onClick == "function" && (n.onclick = zo);
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
        return ir(r), null;
      case 6:
        if (n && r.stateNode != null) _h(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null) throw Error(d(166));
          if (o = Ml(Ts.current), Ml(Ai.current), qc(r)) {
            if (u = r.stateNode, o = r.memoizedProps, u[Ni] = r, (m = u.nodeValue !== o) && (n = ra, n !== null)) switch (n.tag) {
              case 3:
                zc(u.nodeValue, o, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && zc(u.nodeValue, o, (n.mode & 1) !== 0);
            }
            m && (r.flags |= 4);
          } else u = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(u), u[Ni] = r, r.stateNode = u;
        }
        return ir(r), null;
      case 13:
        if (dn(wn), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (yn && aa !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0) xs(), $o(), r.flags |= 98560, m = !1;
          else if (m = qc(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!m) throw Error(d(318));
              if (m = r.memoizedState, m = m !== null ? m.dehydrated : null, !m) throw Error(d(317));
              m[Ni] = r;
            } else $o(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
            ir(r), m = !1;
          } else Fa !== null && ($l(Fa), Fa = null), m = !0;
          if (!m) return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0 ? (r.lanes = o, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (n === null || (wn.current & 1) !== 0 ? On === 0 && (On = 3) : pp())), r.updateQueue !== null && (r.flags |= 4), ir(r), null);
      case 4:
        return Ll(), $n(n, r), n === null && xu(r.stateNode.containerInfo), ir(r), null;
      case 10:
        return Vd(r.type._context), ir(r), null;
      case 17:
        return In(r.type) && Du(), ir(r), null;
      case 19:
        if (dn(wn), m = r.memoizedState, m === null) return ir(r), null;
        if (u = (r.flags & 128) !== 0, C = m.rendering, C === null) if (u) $s(m, !1);
        else {
          if (On !== 0 || n !== null && (n.flags & 128) !== 0) for (n = r.child; n !== null; ) {
            if (C = Qc(n), C !== null) {
              for (r.flags |= 128, $s(m, !1), u = C.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = o, o = r.child; o !== null; ) m = o, n = u, m.flags &= 14680066, C = m.alternate, C === null ? (m.childLanes = 0, m.lanes = n, m.child = null, m.subtreeFlags = 0, m.memoizedProps = null, m.memoizedState = null, m.updateQueue = null, m.dependencies = null, m.stateNode = null) : (m.childLanes = C.childLanes, m.lanes = C.lanes, m.child = C.child, m.subtreeFlags = 0, m.deletions = null, m.memoizedProps = C.memoizedProps, m.memoizedState = C.memoizedState, m.updateQueue = C.updateQueue, m.type = C.type, n = C.dependencies, m.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
              return tt(wn, wn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          m.tail !== null && wt() > Pu && (r.flags |= 128, u = !0, $s(m, !1), r.lanes = 4194304);
        }
        else {
          if (!u) if (n = Qc(C), n !== null) {
            if (r.flags |= 128, u = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), $s(m, !0), m.tail === null && m.tailMode === "hidden" && !C.alternate && !yn) return ir(r), null;
          } else 2 * wt() - m.renderingStartTime > Pu && o !== 1073741824 && (r.flags |= 128, u = !0, $s(m, !1), r.lanes = 4194304);
          m.isBackwards ? (C.sibling = r.child, r.child = C) : (o = m.last, o !== null ? o.sibling = C : r.child = C, m.last = C);
        }
        return m.tail !== null ? (r = m.tail, m.rendering = r, m.tail = r.sibling, m.renderingStartTime = wt(), r.sibling = null, o = wn.current, tt(wn, u ? o & 1 | 2 : o & 1), r) : (ir(r), null);
      case 22:
      case 23:
        return dp(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && (r.mode & 1) !== 0 ? (xa & 1073741824) !== 0 && (ir(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : ir(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(d(156, r.tag));
  }
  function _f(n, r) {
    switch (Bc(r), r.tag) {
      case 1:
        return In(r.type) && Du(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Ll(), dn(Xn), dn(bn), it(), n = r.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Gc(r), null;
      case 13:
        if (dn(wn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(d(340));
          $o();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return dn(wn), null;
      case 4:
        return Ll(), null;
      case 10:
        return Vd(r.type._context), null;
      case 22:
      case 23:
        return dp(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Bs = !1, Dr = !1, Yy = typeof WeakSet == "function" ? WeakSet : Set, qe = null;
  function Au(n, r) {
    var o = n.ref;
    if (o !== null) if (typeof o == "function") try {
      o(null);
    } catch (u) {
      gn(n, r, u);
    }
    else o.current = null;
  }
  function Sf(n, r, o) {
    try {
      o();
    } catch (u) {
      gn(n, r, u);
    }
  }
  var Ch = !1;
  function Eh(n, r) {
    if (Ss = Aa, n = ms(), Dc(n)) {
      if ("selectionStart" in n) var o = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        o = (o = n.ownerDocument) && o.defaultView || window;
        var u = o.getSelection && o.getSelection();
        if (u && u.rangeCount !== 0) {
          o = u.anchorNode;
          var f = u.anchorOffset, m = u.focusNode;
          u = u.focusOffset;
          try {
            o.nodeType, m.nodeType;
          } catch {
            o = null;
            break e;
          }
          var C = 0, N = -1, j = -1, K = 0, pe = 0, me = n, fe = null;
          t: for (; ; ) {
            for (var Fe; me !== o || f !== 0 && me.nodeType !== 3 || (N = C + f), me !== m || u !== 0 && me.nodeType !== 3 || (j = C + u), me.nodeType === 3 && (C += me.nodeValue.length), (Fe = me.firstChild) !== null; )
              fe = me, me = Fe;
            for (; ; ) {
              if (me === n) break t;
              if (fe === o && ++K === f && (N = C), fe === m && ++pe === u && (j = C), (Fe = me.nextSibling) !== null) break;
              me = fe, fe = me.parentNode;
            }
            me = Fe;
          }
          o = N === -1 || j === -1 ? null : { start: N, end: j };
        } else o = null;
      }
      o = o || { start: 0, end: 0 };
    } else o = null;
    for (bl = { focusedElem: n, selectionRange: o }, Aa = !1, qe = r; qe !== null; ) if (r = qe, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, qe = n;
    else for (; qe !== null; ) {
      r = qe;
      try {
        var Ge = r.alternate;
        if ((r.flags & 1024) !== 0) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Ge !== null) {
              var Je = Ge.memoizedProps, jn = Ge.memoizedState, H = r.stateNode, P = H.getSnapshotBeforeUpdate(r.elementType === r.type ? Je : pi(r.type, Je), jn);
              H.__reactInternalSnapshotBeforeUpdate = P;
            }
            break;
          case 3:
            var W = r.stateNode.containerInfo;
            W.nodeType === 1 ? W.textContent = "" : W.nodeType === 9 && W.documentElement && W.removeChild(W.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(d(163));
        }
      } catch (ve) {
        gn(r, r.return, ve);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, qe = n;
        break;
      }
      qe = r.return;
    }
    return Ge = Ch, Ch = !1, Ge;
  }
  function qs(n, r, o) {
    var u = r.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var f = u = u.next;
      do {
        if ((f.tag & n) === n) {
          var m = f.destroy;
          f.destroy = void 0, m !== void 0 && Sf(r, o, m);
        }
        f = f.next;
      } while (f !== u);
    }
  }
  function Ws(n, r) {
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
  function ip(n) {
    var r = n.ref;
    if (r !== null) {
      var o = n.stateNode;
      n.tag, n = o, typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Cf(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Cf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ni], delete r[Cs], delete r[Es], delete r[Tu], delete r[qy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Ys(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function so(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Ys(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function zi(n, r, o) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? o.nodeType === 8 ? o.parentNode.insertBefore(n, r) : o.insertBefore(n, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(n, o)) : (r = o, r.appendChild(n)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = zo));
    else if (u !== 4 && (n = n.child, n !== null)) for (zi(n, r, o), n = n.sibling; n !== null; ) zi(n, r, o), n = n.sibling;
  }
  function Pi(n, r, o) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? o.insertBefore(n, r) : o.appendChild(n);
    else if (u !== 4 && (n = n.child, n !== null)) for (Pi(n, r, o), n = n.sibling; n !== null; ) Pi(n, r, o), n = n.sibling;
  }
  var Ln = null, Ir = !1;
  function Fr(n, r, o) {
    for (o = o.child; o !== null; ) wh(n, r, o), o = o.sibling;
  }
  function wh(n, r, o) {
    if (Zr && typeof Zr.onCommitFiberUnmount == "function") try {
      Zr.onCommitFiberUnmount(To, o);
    } catch {
    }
    switch (o.tag) {
      case 5:
        Dr || Au(o, r);
      case 6:
        var u = Ln, f = Ir;
        Ln = null, Fr(n, r, o), Ln = u, Ir = f, Ln !== null && (Ir ? (n = Ln, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : Ln.removeChild(o.stateNode));
        break;
      case 18:
        Ln !== null && (Ir ? (n = Ln, o = o.stateNode, n.nodeType === 8 ? ku(n.parentNode, o) : n.nodeType === 1 && ku(n, o), ui(n)) : ku(Ln, o.stateNode));
        break;
      case 4:
        u = Ln, f = Ir, Ln = o.stateNode.containerInfo, Ir = !0, Fr(n, r, o), Ln = u, Ir = f;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Dr && (u = o.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          f = u = u.next;
          do {
            var m = f, C = m.destroy;
            m = m.tag, C !== void 0 && ((m & 2) !== 0 || (m & 4) !== 0) && Sf(o, r, C), f = f.next;
          } while (f !== u);
        }
        Fr(n, r, o);
        break;
      case 1:
        if (!Dr && (Au(o, r), u = o.stateNode, typeof u.componentWillUnmount == "function")) try {
          u.props = o.memoizedProps, u.state = o.memoizedState, u.componentWillUnmount();
        } catch (N) {
          gn(o, r, N);
        }
        Fr(n, r, o);
        break;
      case 21:
        Fr(n, r, o);
        break;
      case 22:
        o.mode & 1 ? (Dr = (u = Dr) || o.memoizedState !== null, Fr(n, r, o), Dr = u) : Fr(n, r, o);
        break;
      default:
        Fr(n, r, o);
    }
  }
  function xh(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new Yy()), r.forEach(function(u) {
        var f = Oh.bind(null, n, u);
        o.has(u) || (o.add(u), u.then(f, f));
      });
    }
  }
  function vi(n, r) {
    var o = r.deletions;
    if (o !== null) for (var u = 0; u < o.length; u++) {
      var f = o[u];
      try {
        var m = n, C = r, N = C;
        e: for (; N !== null; ) {
          switch (N.tag) {
            case 5:
              Ln = N.stateNode, Ir = !1;
              break e;
            case 3:
              Ln = N.stateNode.containerInfo, Ir = !0;
              break e;
            case 4:
              Ln = N.stateNode.containerInfo, Ir = !0;
              break e;
          }
          N = N.return;
        }
        if (Ln === null) throw Error(d(160));
        wh(m, C, f), Ln = null, Ir = !1;
        var j = f.alternate;
        j !== null && (j.return = null), f.return = null;
      } catch (K) {
        gn(f, r, K);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) op(r, n), r = r.sibling;
  }
  function op(n, r) {
    var o = n.alternate, u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (vi(r, n), ua(n), u & 4) {
          try {
            qs(3, n, n.return), Ws(3, n);
          } catch (Je) {
            gn(n, n.return, Je);
          }
          try {
            qs(5, n, n.return);
          } catch (Je) {
            gn(n, n.return, Je);
          }
        }
        break;
      case 1:
        vi(r, n), ua(n), u & 512 && o !== null && Au(o, o.return);
        break;
      case 5:
        if (vi(r, n), ua(n), u & 512 && o !== null && Au(o, o.return), n.flags & 32) {
          var f = n.stateNode;
          try {
            ke(f, "");
          } catch (Je) {
            gn(n, n.return, Je);
          }
        }
        if (u & 4 && (f = n.stateNode, f != null)) {
          var m = n.memoizedProps, C = o !== null ? o.memoizedProps : m, N = n.type, j = n.updateQueue;
          if (n.updateQueue = null, j !== null) try {
            N === "input" && m.type === "radio" && m.name != null && Gn(f, m), nr(N, C);
            var K = nr(N, m);
            for (C = 0; C < j.length; C += 2) {
              var pe = j[C], me = j[C + 1];
              pe === "style" ? un(f, me) : pe === "dangerouslySetInnerHTML" ? Si(f, me) : pe === "children" ? ke(f, me) : oe(f, pe, me, K);
            }
            switch (N) {
              case "input":
                Jr(f, m);
                break;
              case "textarea":
                ei(f, m);
                break;
              case "select":
                var fe = f._wrapperState.wasMultiple;
                f._wrapperState.wasMultiple = !!m.multiple;
                var Fe = m.value;
                Fe != null ? Tn(f, !!m.multiple, Fe, !1) : fe !== !!m.multiple && (m.defaultValue != null ? Tn(
                  f,
                  !!m.multiple,
                  m.defaultValue,
                  !0
                ) : Tn(f, !!m.multiple, m.multiple ? [] : "", !1));
            }
            f[Cs] = m;
          } catch (Je) {
            gn(n, n.return, Je);
          }
        }
        break;
      case 6:
        if (vi(r, n), ua(n), u & 4) {
          if (n.stateNode === null) throw Error(d(162));
          f = n.stateNode, m = n.memoizedProps;
          try {
            f.nodeValue = m;
          } catch (Je) {
            gn(n, n.return, Je);
          }
        }
        break;
      case 3:
        if (vi(r, n), ua(n), u & 4 && o !== null && o.memoizedState.isDehydrated) try {
          ui(r.containerInfo);
        } catch (Je) {
          gn(n, n.return, Je);
        }
        break;
      case 4:
        vi(r, n), ua(n);
        break;
      case 13:
        vi(r, n), ua(n), f = n.child, f.flags & 8192 && (m = f.memoizedState !== null, f.stateNode.isHidden = m, !m || f.alternate !== null && f.alternate.memoizedState !== null || (sp = wt())), u & 4 && xh(n);
        break;
      case 22:
        if (pe = o !== null && o.memoizedState !== null, n.mode & 1 ? (Dr = (K = Dr) || pe, vi(r, n), Dr = K) : vi(r, n), ua(n), u & 8192) {
          if (K = n.memoizedState !== null, (n.stateNode.isHidden = K) && !pe && (n.mode & 1) !== 0) for (qe = n, pe = n.child; pe !== null; ) {
            for (me = qe = pe; qe !== null; ) {
              switch (fe = qe, Fe = fe.child, fe.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  qs(4, fe, fe.return);
                  break;
                case 1:
                  Au(fe, fe.return);
                  var Ge = fe.stateNode;
                  if (typeof Ge.componentWillUnmount == "function") {
                    u = fe, o = fe.return;
                    try {
                      r = u, Ge.props = r.memoizedProps, Ge.state = r.memoizedState, Ge.componentWillUnmount();
                    } catch (Je) {
                      gn(u, o, Je);
                    }
                  }
                  break;
                case 5:
                  Au(fe, fe.return);
                  break;
                case 22:
                  if (fe.memoizedState !== null) {
                    Gs(me);
                    continue;
                  }
              }
              Fe !== null ? (Fe.return = fe, qe = Fe) : Gs(me);
            }
            pe = pe.sibling;
          }
          e: for (pe = null, me = n; ; ) {
            if (me.tag === 5) {
              if (pe === null) {
                pe = me;
                try {
                  f = me.stateNode, K ? (m = f.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none") : (N = me.stateNode, j = me.memoizedProps.style, C = j != null && j.hasOwnProperty("display") ? j.display : null, N.style.display = Gt("display", C));
                } catch (Je) {
                  gn(n, n.return, Je);
                }
              }
            } else if (me.tag === 6) {
              if (pe === null) try {
                me.stateNode.nodeValue = K ? "" : me.memoizedProps;
              } catch (Je) {
                gn(n, n.return, Je);
              }
            } else if ((me.tag !== 22 && me.tag !== 23 || me.memoizedState === null || me === n) && me.child !== null) {
              me.child.return = me, me = me.child;
              continue;
            }
            if (me === n) break e;
            for (; me.sibling === null; ) {
              if (me.return === null || me.return === n) break e;
              pe === me && (pe = null), me = me.return;
            }
            pe === me && (pe = null), me.sibling.return = me.return, me = me.sibling;
          }
        }
        break;
      case 19:
        vi(r, n), ua(n), u & 4 && xh(n);
        break;
      case 21:
        break;
      default:
        vi(
          r,
          n
        ), ua(n);
    }
  }
  function ua(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var o = n.return; o !== null; ) {
            if (Ys(o)) {
              var u = o;
              break e;
            }
            o = o.return;
          }
          throw Error(d(160));
        }
        switch (u.tag) {
          case 5:
            var f = u.stateNode;
            u.flags & 32 && (ke(f, ""), u.flags &= -33);
            var m = so(n);
            Pi(n, m, f);
            break;
          case 3:
          case 4:
            var C = u.stateNode.containerInfo, N = so(n);
            zi(n, N, C);
            break;
          default:
            throw Error(d(161));
        }
      } catch (j) {
        gn(n, n.return, j);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Gy(n, r, o) {
    qe = n, lp(n);
  }
  function lp(n, r, o) {
    for (var u = (n.mode & 1) !== 0; qe !== null; ) {
      var f = qe, m = f.child;
      if (f.tag === 22 && u) {
        var C = f.memoizedState !== null || Bs;
        if (!C) {
          var N = f.alternate, j = N !== null && N.memoizedState !== null || Dr;
          N = Bs;
          var K = Dr;
          if (Bs = C, (Dr = j) && !K) for (qe = f; qe !== null; ) C = qe, j = C.child, C.tag === 22 && C.memoizedState !== null ? up(f) : j !== null ? (j.return = C, qe = j) : up(f);
          for (; m !== null; ) qe = m, lp(m), m = m.sibling;
          qe = f, Bs = N, Dr = K;
        }
        bh(n);
      } else (f.subtreeFlags & 8772) !== 0 && m !== null ? (m.return = f, qe = m) : bh(n);
    }
  }
  function bh(n) {
    for (; qe !== null; ) {
      var r = qe;
      if ((r.flags & 8772) !== 0) {
        var o = r.alternate;
        try {
          if ((r.flags & 8772) !== 0) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              Dr || Ws(5, r);
              break;
            case 1:
              var u = r.stateNode;
              if (r.flags & 4 && !Dr) if (o === null) u.componentDidMount();
              else {
                var f = r.elementType === r.type ? o.memoizedProps : pi(r.type, o.memoizedProps);
                u.componentDidUpdate(f, o.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
              }
              var m = r.updateQueue;
              m !== null && Wd(r, m, u);
              break;
            case 3:
              var C = r.updateQueue;
              if (C !== null) {
                if (o = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    o = r.child.stateNode;
                    break;
                  case 1:
                    o = r.child.stateNode;
                }
                Wd(r, C, o);
              }
              break;
            case 5:
              var N = r.stateNode;
              if (o === null && r.flags & 4) {
                o = N;
                var j = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    j.autoFocus && o.focus();
                    break;
                  case "img":
                    j.src && (o.src = j.src);
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
                var K = r.alternate;
                if (K !== null) {
                  var pe = K.memoizedState;
                  if (pe !== null) {
                    var me = pe.dehydrated;
                    me !== null && ui(me);
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
              throw Error(d(163));
          }
          Dr || r.flags & 512 && ip(r);
        } catch (fe) {
          gn(r, r.return, fe);
        }
      }
      if (r === n) {
        qe = null;
        break;
      }
      if (o = r.sibling, o !== null) {
        o.return = r.return, qe = o;
        break;
      }
      qe = r.return;
    }
  }
  function Gs(n) {
    for (; qe !== null; ) {
      var r = qe;
      if (r === n) {
        qe = null;
        break;
      }
      var o = r.sibling;
      if (o !== null) {
        o.return = r.return, qe = o;
        break;
      }
      qe = r.return;
    }
  }
  function up(n) {
    for (; qe !== null; ) {
      var r = qe;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              Ws(4, r);
            } catch (j) {
              gn(r, o, j);
            }
            break;
          case 1:
            var u = r.stateNode;
            if (typeof u.componentDidMount == "function") {
              var f = r.return;
              try {
                u.componentDidMount();
              } catch (j) {
                gn(r, f, j);
              }
            }
            var m = r.return;
            try {
              ip(r);
            } catch (j) {
              gn(r, m, j);
            }
            break;
          case 5:
            var C = r.return;
            try {
              ip(r);
            } catch (j) {
              gn(r, C, j);
            }
        }
      } catch (j) {
        gn(r, r.return, j);
      }
      if (r === n) {
        qe = null;
        break;
      }
      var N = r.sibling;
      if (N !== null) {
        N.return = r.return, qe = N;
        break;
      }
      qe = r.return;
    }
  }
  var Qy = Math.ceil, Go = be.ReactCurrentDispatcher, Vl = be.ReactCurrentOwner, vr = be.ReactCurrentBatchConfig, Ut = 0, Zn = null, Bn = null, hr = 0, xa = 0, Uu = Pa(0), On = 0, Qs = null, Ii = 0, zu = 0, Ef = 0, Ks = null, sa = null, sp = 0, Pu = 1 / 0, ba = null, Iu = !1, Hl = null, Qo = null, wf = !1, co = null, Xs = 0, Ko = 0, Fu = null, Js = -1, Nr = 0;
  function qn() {
    return (Ut & 6) !== 0 ? wt() : Js !== -1 ? Js : Js = wt();
  }
  function Fi(n) {
    return (n.mode & 1) === 0 ? 1 : (Ut & 2) !== 0 && hr !== 0 ? hr & -hr : Wy.transition !== null ? (Nr === 0 && (Nr = du()), Nr) : (n = Ht, n !== 0 || (n = window.event, n = n === void 0 ? 16 : _u(n.type)), n);
  }
  function Vr(n, r, o, u) {
    if (50 < Ko) throw Ko = 0, Fu = null, Error(d(185));
    Xi(n, o, u), ((Ut & 2) === 0 || n !== Zn) && (n === Zn && ((Ut & 2) === 0 && (zu |= o), On === 4 && hi(n, hr)), ca(n, u), o === 1 && Ut === 0 && (r.mode & 1) === 0 && (Pu = wt() + 500, Nu && Li()));
  }
  function ca(n, r) {
    var o = n.callbackNode;
    ml(n, r);
    var u = li(n, n === Zn ? hr : 0);
    if (u === 0) o !== null && cr(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (o != null && cr(o), r === 1) n.tag === 0 ? Io(cp.bind(null, n)) : Hc(cp.bind(null, n)), Ru(function() {
        (Ut & 6) === 0 && Li();
      }), o = null;
      else {
        switch (vu(u)) {
          case 1:
            o = ii;
            break;
          case 4:
            o = vl;
            break;
          case 16:
            o = hl;
            break;
          case 536870912:
            o = su;
            break;
          default:
            o = hl;
        }
        o = Ah(o, xf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = o;
    }
  }
  function xf(n, r) {
    if (Js = -1, Nr = 0, (Ut & 6) !== 0) throw Error(d(327));
    var o = n.callbackNode;
    if (Vu() && n.callbackNode !== o) return null;
    var u = li(n, n === Zn ? hr : 0);
    if (u === 0) return null;
    if ((u & 30) !== 0 || (u & n.expiredLanes) !== 0 || r) r = bf(n, u);
    else {
      r = u;
      var f = Ut;
      Ut |= 2;
      var m = kh();
      (Zn !== n || hr !== r) && (ba = null, Pu = wt() + 500, fo(n, r));
      do
        try {
          Th();
          break;
        } catch (N) {
          Rh(n, N);
        }
      while (!0);
      Fd(), Go.current = m, Ut = f, Bn !== null ? r = 0 : (Zn = null, hr = 0, r = On);
    }
    if (r !== 0) {
      if (r === 2 && (f = No(n), f !== 0 && (u = f, r = Zs(n, f))), r === 1) throw o = Qs, fo(n, 0), hi(n, u), ca(n, wt()), o;
      if (r === 6) hi(n, u);
      else {
        if (f = n.current.alternate, (u & 30) === 0 && !Ky(f) && (r = bf(n, u), r === 2 && (m = No(n), m !== 0 && (u = m, r = Zs(n, m))), r === 1)) throw o = Qs, fo(n, 0), hi(n, u), ca(n, wt()), o;
        switch (n.finishedWork = f, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(d(345));
          case 2:
            ql(n, sa, ba);
            break;
          case 3:
            if (hi(n, u), (u & 130023424) === u && (r = sp + 500 - wt(), 10 < r)) {
              if (li(n, 0) !== 0) break;
              if (f = n.suspendedLanes, (f & u) !== u) {
                qn(), n.pingedLanes |= n.suspendedLanes & f;
                break;
              }
              n.timeoutHandle = Ic(ql.bind(null, n, sa, ba), r);
              break;
            }
            ql(n, sa, ba);
            break;
          case 4:
            if (hi(n, u), (u & 4194240) === u) break;
            for (r = n.eventTimes, f = -1; 0 < u; ) {
              var C = 31 - Ar(u);
              m = 1 << C, C = r[C], C > f && (f = C), u &= ~m;
            }
            if (u = f, u = wt() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * Qy(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = Ic(ql.bind(null, n, sa, ba), u);
              break;
            }
            ql(n, sa, ba);
            break;
          case 5:
            ql(n, sa, ba);
            break;
          default:
            throw Error(d(329));
        }
      }
    }
    return ca(n, wt()), n.callbackNode === o ? xf.bind(null, n) : null;
  }
  function Zs(n, r) {
    var o = Ks;
    return n.current.memoizedState.isDehydrated && (fo(n, r).flags |= 256), n = bf(n, r), n !== 2 && (r = sa, sa = o, r !== null && $l(r)), n;
  }
  function $l(n) {
    sa === null ? sa = n : sa.push.apply(sa, n);
  }
  function Ky(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var o = r.updateQueue;
        if (o !== null && (o = o.stores, o !== null)) for (var u = 0; u < o.length; u++) {
          var f = o[u], m = f.getSnapshot;
          f = f.value;
          try {
            if (!ci(m(), f)) return !1;
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
  function hi(n, r) {
    for (r &= ~Ef, r &= ~zu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var o = 31 - Ar(r), u = 1 << o;
      n[o] = -1, r &= ~u;
    }
  }
  function cp(n) {
    if ((Ut & 6) !== 0) throw Error(d(327));
    Vu();
    var r = li(n, 0);
    if ((r & 1) === 0) return ca(n, wt()), null;
    var o = bf(n, r);
    if (n.tag !== 0 && o === 2) {
      var u = No(n);
      u !== 0 && (r = u, o = Zs(n, u));
    }
    if (o === 1) throw o = Qs, fo(n, 0), hi(n, r), ca(n, wt()), o;
    if (o === 6) throw Error(d(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, ql(n, sa, ba), ca(n, wt()), null;
  }
  function fp(n, r) {
    var o = Ut;
    Ut |= 1;
    try {
      return n(r);
    } finally {
      Ut = o, Ut === 0 && (Pu = wt() + 500, Nu && Li());
    }
  }
  function Bl(n) {
    co !== null && co.tag === 0 && (Ut & 6) === 0 && Vu();
    var r = Ut;
    Ut |= 1;
    var o = vr.transition, u = Ht;
    try {
      if (vr.transition = null, Ht = 1, n) return n();
    } finally {
      Ht = u, vr.transition = o, Ut = r, (Ut & 6) === 0 && Li();
    }
  }
  function dp() {
    xa = Uu.current, dn(Uu);
  }
  function fo(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, Ad(o)), Bn !== null) for (o = Bn.return; o !== null; ) {
      var u = o;
      switch (Bc(u), u.tag) {
        case 1:
          u = u.type.childContextTypes, u != null && Du();
          break;
        case 3:
          Ll(), dn(Xn), dn(bn), it();
          break;
        case 5:
          Gc(u);
          break;
        case 4:
          Ll();
          break;
        case 13:
          dn(wn);
          break;
        case 19:
          dn(wn);
          break;
        case 10:
          Vd(u.type._context);
          break;
        case 22:
        case 23:
          dp();
      }
      o = o.return;
    }
    if (Zn = n, Bn = n = Xo(n.current, null), hr = xa = r, On = 0, Qs = null, Ef = zu = Ii = 0, sa = Ks = null, Nl !== null) {
      for (r = 0; r < Nl.length; r++) if (o = Nl[r], u = o.interleaved, u !== null) {
        o.interleaved = null;
        var f = u.next, m = o.pending;
        if (m !== null) {
          var C = m.next;
          m.next = f, u.next = C;
        }
        o.pending = u;
      }
      Nl = null;
    }
    return n;
  }
  function Rh(n, r) {
    do {
      var o = Bn;
      try {
        if (Fd(), Dt.current = Pl, Kc) {
          for (var u = Bt.memoizedState; u !== null; ) {
            var f = u.queue;
            f !== null && (f.pending = null), u = u.next;
          }
          Kc = !1;
        }
        if (rn = 0, ar = Vn = Bt = null, Ns = !1, Ol = 0, Vl.current = null, o === null || o.return === null) {
          On = 1, Qs = r, Bn = null;
          break;
        }
        e: {
          var m = n, C = o.return, N = o, j = r;
          if (r = hr, N.flags |= 32768, j !== null && typeof j == "object" && typeof j.then == "function") {
            var K = j, pe = N, me = pe.tag;
            if ((pe.mode & 1) === 0 && (me === 0 || me === 11 || me === 15)) {
              var fe = pe.alternate;
              fe ? (pe.updateQueue = fe.updateQueue, pe.memoizedState = fe.memoizedState, pe.lanes = fe.lanes) : (pe.updateQueue = null, pe.memoizedState = null);
            }
            var Fe = ph(C);
            if (Fe !== null) {
              Fe.flags &= -257, Yo(Fe, C, N, m, r), Fe.mode & 1 && ep(m, K, r), r = Fe, j = K;
              var Ge = r.updateQueue;
              if (Ge === null) {
                var Je = /* @__PURE__ */ new Set();
                Je.add(j), r.updateQueue = Je;
              } else Ge.add(j);
              break e;
            } else {
              if ((r & 1) === 0) {
                ep(m, K, r), pp();
                break e;
              }
              j = Error(d(426));
            }
          } else if (yn && N.mode & 1) {
            var jn = ph(C);
            if (jn !== null) {
              (jn.flags & 65536) === 0 && (jn.flags |= 256), Yo(jn, C, N, m, r), oo(Il(j, N));
              break e;
            }
          }
          m = j = Il(j, N), On !== 4 && (On = 2), Ks === null ? Ks = [m] : Ks.push(m), m = C;
          do {
            switch (m.tag) {
              case 3:
                m.flags |= 65536, r &= -r, m.lanes |= r;
                var H = dh(m, j, r);
                lh(m, H);
                break e;
              case 1:
                N = j;
                var P = m.type, W = m.stateNode;
                if ((m.flags & 128) === 0 && (typeof P.getDerivedStateFromError == "function" || W !== null && typeof W.componentDidCatch == "function" && (Qo === null || !Qo.has(W)))) {
                  m.flags |= 65536, r &= -r, m.lanes |= r;
                  var ve = Zd(m, N, r);
                  lh(m, ve);
                  break e;
                }
            }
            m = m.return;
          } while (m !== null);
        }
        Nh(o);
      } catch (Qe) {
        r = Qe, Bn === o && o !== null && (Bn = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function kh() {
    var n = Go.current;
    return Go.current = Pl, n === null ? Pl : n;
  }
  function pp() {
    (On === 0 || On === 3 || On === 2) && (On = 4), Zn === null || (Ii & 268435455) === 0 && (zu & 268435455) === 0 || hi(Zn, hr);
  }
  function bf(n, r) {
    var o = Ut;
    Ut |= 2;
    var u = kh();
    (Zn !== n || hr !== r) && (ba = null, fo(n, r));
    do
      try {
        Xy();
        break;
      } catch (f) {
        Rh(n, f);
      }
    while (!0);
    if (Fd(), Ut = o, Go.current = u, Bn !== null) throw Error(d(261));
    return Zn = null, hr = 0, On;
  }
  function Xy() {
    for (; Bn !== null; ) Dh(Bn);
  }
  function Th() {
    for (; Bn !== null && !ri(); ) Dh(Bn);
  }
  function Dh(n) {
    var r = jh(n.alternate, n, xa);
    n.memoizedProps = n.pendingProps, r === null ? Nh(n) : Bn = r, Vl.current = null;
  }
  function Nh(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, (r.flags & 32768) === 0) {
        if (o = Sh(o, r, xa), o !== null) {
          Bn = o;
          return;
        }
      } else {
        if (o = _f(o, r), o !== null) {
          o.flags &= 32767, Bn = o;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          On = 6, Bn = null;
          return;
        }
      }
      if (r = r.sibling, r !== null) {
        Bn = r;
        return;
      }
      Bn = r = n;
    } while (r !== null);
    On === 0 && (On = 5);
  }
  function ql(n, r, o) {
    var u = Ht, f = vr.transition;
    try {
      vr.transition = null, Ht = 1, Jy(n, r, o, u);
    } finally {
      vr.transition = f, Ht = u;
    }
    return null;
  }
  function Jy(n, r, o, u) {
    do
      Vu();
    while (co !== null);
    if ((Ut & 6) !== 0) throw Error(d(327));
    o = n.finishedWork;
    var f = n.finishedLanes;
    if (o === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current) throw Error(d(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var m = o.lanes | o.childLanes;
    if (vd(n, m), n === Zn && (Bn = Zn = null, hr = 0), (o.subtreeFlags & 2064) === 0 && (o.flags & 2064) === 0 || wf || (wf = !0, Ah(hl, function() {
      return Vu(), null;
    })), m = (o.flags & 15990) !== 0, (o.subtreeFlags & 15990) !== 0 || m) {
      m = vr.transition, vr.transition = null;
      var C = Ht;
      Ht = 1;
      var N = Ut;
      Ut |= 4, Vl.current = null, Eh(n, o), op(o, n), Eu(bl), Aa = !!Ss, bl = Ss = null, n.current = o, Gy(o), ai(), Ut = N, Ht = C, vr.transition = m;
    } else n.current = o;
    if (wf && (wf = !1, co = n, Xs = f), m = n.pendingLanes, m === 0 && (Qo = null), os(o.stateNode), ca(n, wt()), r !== null) for (u = n.onRecoverableError, o = 0; o < r.length; o++) f = r[o], u(f.value, { componentStack: f.stack, digest: f.digest });
    if (Iu) throw Iu = !1, n = Hl, Hl = null, n;
    return (Xs & 1) !== 0 && n.tag !== 0 && Vu(), m = n.pendingLanes, (m & 1) !== 0 ? n === Fu ? Ko++ : (Ko = 0, Fu = n) : Ko = 0, Li(), null;
  }
  function Vu() {
    if (co !== null) {
      var n = vu(Xs), r = vr.transition, o = Ht;
      try {
        if (vr.transition = null, Ht = 16 > n ? 16 : n, co === null) var u = !1;
        else {
          if (n = co, co = null, Xs = 0, (Ut & 6) !== 0) throw Error(d(331));
          var f = Ut;
          for (Ut |= 4, qe = n.current; qe !== null; ) {
            var m = qe, C = m.child;
            if ((qe.flags & 16) !== 0) {
              var N = m.deletions;
              if (N !== null) {
                for (var j = 0; j < N.length; j++) {
                  var K = N[j];
                  for (qe = K; qe !== null; ) {
                    var pe = qe;
                    switch (pe.tag) {
                      case 0:
                      case 11:
                      case 15:
                        qs(8, pe, m);
                    }
                    var me = pe.child;
                    if (me !== null) me.return = pe, qe = me;
                    else for (; qe !== null; ) {
                      pe = qe;
                      var fe = pe.sibling, Fe = pe.return;
                      if (Cf(pe), pe === K) {
                        qe = null;
                        break;
                      }
                      if (fe !== null) {
                        fe.return = Fe, qe = fe;
                        break;
                      }
                      qe = Fe;
                    }
                  }
                }
                var Ge = m.alternate;
                if (Ge !== null) {
                  var Je = Ge.child;
                  if (Je !== null) {
                    Ge.child = null;
                    do {
                      var jn = Je.sibling;
                      Je.sibling = null, Je = jn;
                    } while (Je !== null);
                  }
                }
                qe = m;
              }
            }
            if ((m.subtreeFlags & 2064) !== 0 && C !== null) C.return = m, qe = C;
            else e: for (; qe !== null; ) {
              if (m = qe, (m.flags & 2048) !== 0) switch (m.tag) {
                case 0:
                case 11:
                case 15:
                  qs(9, m, m.return);
              }
              var H = m.sibling;
              if (H !== null) {
                H.return = m.return, qe = H;
                break e;
              }
              qe = m.return;
            }
          }
          var P = n.current;
          for (qe = P; qe !== null; ) {
            C = qe;
            var W = C.child;
            if ((C.subtreeFlags & 2064) !== 0 && W !== null) W.return = C, qe = W;
            else e: for (C = P; qe !== null; ) {
              if (N = qe, (N.flags & 2048) !== 0) try {
                switch (N.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ws(9, N);
                }
              } catch (Qe) {
                gn(N, N.return, Qe);
              }
              if (N === C) {
                qe = null;
                break e;
              }
              var ve = N.sibling;
              if (ve !== null) {
                ve.return = N.return, qe = ve;
                break e;
              }
              qe = N.return;
            }
          }
          if (Ut = f, Li(), Zr && typeof Zr.onPostCommitFiberRoot == "function") try {
            Zr.onPostCommitFiberRoot(To, n);
          } catch {
          }
          u = !0;
        }
        return u;
      } finally {
        Ht = o, vr.transition = r;
      }
    }
    return !1;
  }
  function Mh(n, r, o) {
    r = Il(o, r), r = dh(n, r, 1), n = Bo(n, r, 1), r = qn(), n !== null && (Xi(n, 1, r), ca(n, r));
  }
  function gn(n, r, o) {
    if (n.tag === 3) Mh(n, n, o);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        Mh(r, n, o);
        break;
      } else if (r.tag === 1) {
        var u = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (Qo === null || !Qo.has(u))) {
          n = Il(o, n), n = Zd(r, n, 1), r = Bo(r, n, 1), n = qn(), r !== null && (Xi(r, 1, n), ca(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function Zy(n, r, o) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = qn(), n.pingedLanes |= n.suspendedLanes & o, Zn === n && (hr & o) === o && (On === 4 || On === 3 && (hr & 130023424) === hr && 500 > wt() - sp ? fo(n, 0) : Ef |= o), ca(n, r);
  }
  function Lh(n, r) {
    r === 0 && ((n.mode & 1) === 0 ? r = 1 : (r = _a, _a <<= 1, (_a & 130023424) === 0 && (_a = 4194304)));
    var o = qn();
    n = Ea(n, r), n !== null && (Xi(n, r, o), ca(n, o));
  }
  function eg(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), Lh(n, o);
  }
  function Oh(n, r) {
    var o = 0;
    switch (n.tag) {
      case 13:
        var u = n.stateNode, f = n.memoizedState;
        f !== null && (o = f.retryLane);
        break;
      case 19:
        u = n.stateNode;
        break;
      default:
        throw Error(d(314));
    }
    u !== null && u.delete(r), Lh(n, o);
  }
  var jh;
  jh = function(n, r, o) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Xn.current) Hn = !0;
    else {
      if ((n.lanes & o) === 0 && (r.flags & 128) === 0) return Hn = !1, Hs(n, r, o);
      Hn = (n.flags & 131072) !== 0;
    }
    else Hn = !1, yn && (r.flags & 1048576) !== 0 && rh(r, io, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        Ha(n, r), n = r.pendingProps;
        var f = na(r, bn.current);
        En(r, o), f = qo(null, r, u, n, f, o);
        var m = di();
        return r.flags |= 1, typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, In(u) ? (m = !0, rr(r)) : m = !1, r.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, qd(r), f.updater = vf, r.stateNode = f, f._reactInternals = r, zs(r, u, n, o), r = Fs(null, r, u, !0, m, o)) : (r.tag = 0, yn && m && $c(r), pr(null, r, f, o), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (Ha(n, r), n = r.pendingProps, f = u._init, u = f(u._payload), r.type = u, f = r.tag = ng(u), n = pi(u, n), f) {
            case 0:
              r = vh(null, r, u, n, o);
              break e;
            case 1:
              r = hh(null, r, u, n, o);
              break e;
            case 11:
              r = la(null, r, u, n, o);
              break e;
            case 14:
              r = Fl(null, r, u, pi(u.type, n), o);
              break e;
          }
          throw Error(d(
            306,
            u,
            ""
          ));
        }
        return r;
      case 0:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : pi(u, f), vh(n, r, u, f, o);
      case 1:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : pi(u, f), hh(n, r, u, f, o);
      case 3:
        e: {
          if (ju(r), n === null) throw Error(d(387));
          u = r.pendingProps, m = r.memoizedState, f = m.element, oh(n, r), bs(r, u, null, o);
          var C = r.memoizedState;
          if (u = C.element, m.isDehydrated) if (m = { element: u, isDehydrated: !1, cache: C.cache, pendingSuspenseBoundaries: C.pendingSuspenseBoundaries, transitions: C.transitions }, r.updateQueue.baseState = m, r.memoizedState = m, r.flags & 256) {
            f = Il(Error(d(423)), r), r = mh(n, r, u, o, f);
            break e;
          } else if (u !== f) {
            f = Il(Error(d(424)), r), r = mh(n, r, u, o, f);
            break e;
          } else for (aa = Di(r.stateNode.containerInfo.firstChild), ra = r, yn = !0, Fa = null, o = Oe(r, null, u, o), r.child = o; o; ) o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if ($o(), u === f) {
              r = $a(n, r, o);
              break e;
            }
            pr(n, r, u, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return uh(r), n === null && Pd(r), u = r.type, f = r.pendingProps, m = n !== null ? n.memoizedProps : null, C = f.children, Pc(u, f) ? C = null : m !== null && Pc(u, m) && (r.flags |= 32), tp(n, r), pr(n, r, C, o), r.child;
      case 6:
        return n === null && Pd(r), null;
      case 13:
        return gf(n, r, o);
      case 4:
        return Yd(r, r.stateNode.containerInfo), u = r.pendingProps, n === null ? r.child = Nn(r, null, u, o) : pr(n, r, u, o), r.child;
      case 11:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : pi(u, f), la(n, r, u, f, o);
      case 7:
        return pr(n, r, r.pendingProps, o), r.child;
      case 8:
        return pr(n, r, r.pendingProps.children, o), r.child;
      case 12:
        return pr(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (u = r.type._context, f = r.pendingProps, m = r.memoizedProps, C = f.value, tt(Ca, u._currentValue), u._currentValue = C, m !== null) if (ci(m.value, C)) {
            if (m.children === f.children && !Xn.current) {
              r = $a(n, r, o);
              break e;
            }
          } else for (m = r.child, m !== null && (m.return = r); m !== null; ) {
            var N = m.dependencies;
            if (N !== null) {
              C = m.child;
              for (var j = N.firstContext; j !== null; ) {
                if (j.context === u) {
                  if (m.tag === 1) {
                    j = lo(-1, o & -o), j.tag = 2;
                    var K = m.updateQueue;
                    if (K !== null) {
                      K = K.shared;
                      var pe = K.pending;
                      pe === null ? j.next = j : (j.next = pe.next, pe.next = j), K.pending = j;
                    }
                  }
                  m.lanes |= o, j = m.alternate, j !== null && (j.lanes |= o), Hd(
                    m.return,
                    o,
                    r
                  ), N.lanes |= o;
                  break;
                }
                j = j.next;
              }
            } else if (m.tag === 10) C = m.type === r.type ? null : m.child;
            else if (m.tag === 18) {
              if (C = m.return, C === null) throw Error(d(341));
              C.lanes |= o, N = C.alternate, N !== null && (N.lanes |= o), Hd(C, o, r), C = m.sibling;
            } else C = m.child;
            if (C !== null) C.return = m;
            else for (C = m; C !== null; ) {
              if (C === r) {
                C = null;
                break;
              }
              if (m = C.sibling, m !== null) {
                m.return = C.return, C = m;
                break;
              }
              C = C.return;
            }
            m = C;
          }
          pr(n, r, f.children, o), r = r.child;
        }
        return r;
      case 9:
        return f = r.type, u = r.pendingProps.children, En(r, o), f = Va(f), u = u(f), r.flags |= 1, pr(n, r, u, o), r.child;
      case 14:
        return u = r.type, f = pi(u, r.pendingProps), f = pi(u.type, f), Fl(n, r, u, f, o);
      case 15:
        return xt(n, r, r.type, r.pendingProps, o);
      case 17:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : pi(u, f), Ha(n, r), r.tag = 1, In(u) ? (n = !0, rr(r)) : n = !1, En(r, o), hf(r, u, f), zs(r, u, f, o), Fs(null, r, u, !0, n, o);
      case 19:
        return Ui(n, r, o);
      case 22:
        return Is(n, r, o);
    }
    throw Error(d(156, r.tag));
  };
  function Ah(n, r) {
    return vn(n, r);
  }
  function tg(n, r, o, u) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function qa(n, r, o, u) {
    return new tg(n, r, o, u);
  }
  function vp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function ng(n) {
    if (typeof n == "function") return vp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Q) return 11;
      if (n === Pe) return 14;
    }
    return 2;
  }
  function Xo(n, r) {
    var o = n.alternate;
    return o === null ? (o = qa(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function ec(n, r, o, u, f, m) {
    var C = 2;
    if (u = n, typeof n == "function") vp(n) && (C = 1);
    else if (typeof n == "string") C = 5;
    else e: switch (n) {
      case He:
        return po(o.children, f, m, r);
      case Be:
        C = 8, f |= 8;
        break;
      case nt:
        return n = qa(12, o, r, f | 2), n.elementType = nt, n.lanes = m, n;
      case Z:
        return n = qa(13, o, r, f), n.elementType = Z, n.lanes = m, n;
      case xe:
        return n = qa(19, o, r, f), n.elementType = xe, n.lanes = m, n;
      case we:
        return Jo(o, f, m, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case ut:
            C = 10;
            break e;
          case Ee:
            C = 9;
            break e;
          case Q:
            C = 11;
            break e;
          case Pe:
            C = 14;
            break e;
          case De:
            C = 16, u = null;
            break e;
        }
        throw Error(d(130, n == null ? n : typeof n, ""));
    }
    return r = qa(C, o, r, f), r.elementType = n, r.type = u, r.lanes = m, r;
  }
  function po(n, r, o, u) {
    return n = qa(7, n, u, r), n.lanes = o, n;
  }
  function Jo(n, r, o, u) {
    return n = qa(22, n, u, r), n.elementType = we, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
  }
  function hp(n, r, o) {
    return n = qa(6, n, null, r), n.lanes = o, n;
  }
  function Rf(n, r, o) {
    return r = qa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Uh(n, r, o, u, f) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = pu(0), this.expirationTimes = pu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = pu(0), this.identifierPrefix = u, this.onRecoverableError = f, this.mutableSourceEagerHydrationData = null;
  }
  function kf(n, r, o, u, f, m, C, N, j) {
    return n = new Uh(n, r, o, N, j), r === 1 ? (r = 1, m === !0 && (r |= 8)) : r = 0, m = qa(3, null, null, r), n.current = m, m.stateNode = n, m.memoizedState = { element: u, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, qd(m), n;
  }
  function rg(n, r, o) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ye, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: o };
  }
  function mp(n) {
    if (!n) return kr;
    n = n._reactInternals;
    e: {
      if (Et(n) !== n || n.tag !== 1) throw Error(d(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (In(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(d(171));
    }
    if (n.tag === 1) {
      var o = n.type;
      if (In(o)) return ws(n, o, r);
    }
    return r;
  }
  function zh(n, r, o, u, f, m, C, N, j) {
    return n = kf(o, u, !0, n, f, m, C, N, j), n.context = mp(null), o = n.current, u = qn(), f = Fi(o), m = lo(u, f), m.callback = r ?? null, Bo(o, m, f), n.current.lanes = f, Xi(n, f, u), ca(n, u), n;
  }
  function Tf(n, r, o, u) {
    var f = r.current, m = qn(), C = Fi(f);
    return o = mp(o), r.context === null ? r.context = o : r.pendingContext = o, r = lo(m, C), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = Bo(f, r, C), n !== null && (Vr(n, f, C, m), Yc(n, f, C)), C;
  }
  function Df(n) {
    return n = n.current, n.child ? (n.child.tag === 5, n.child.stateNode) : null;
  }
  function yp(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function Nf(n, r) {
    yp(n, r), (n = n.alternate) && yp(n, r);
  }
  function Ph() {
    return null;
  }
  var Wl = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function gp(n) {
    this._internalRoot = n;
  }
  Mf.prototype.render = gp.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(d(409));
    Tf(n, r, null, null);
  }, Mf.prototype.unmount = gp.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Bl(function() {
        Tf(null, n, null, null);
      }), r[ro] = null;
    }
  };
  function Mf(n) {
    this._internalRoot = n;
  }
  Mf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = gt();
      n = { blockedOn: null, target: n, priority: r };
      for (var o = 0; o < Kn.length && r !== 0 && r < Kn[o].priority; o++) ;
      Kn.splice(o, 0, n), o === 0 && ss(n);
    }
  };
  function _p(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Lf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Ih() {
  }
  function ag(n, r, o, u, f) {
    if (f) {
      if (typeof u == "function") {
        var m = u;
        u = function() {
          var K = Df(C);
          m.call(K);
        };
      }
      var C = zh(r, u, n, 0, null, !1, !1, "", Ih);
      return n._reactRootContainer = C, n[ro] = C.current, xu(n.nodeType === 8 ? n.parentNode : n), Bl(), C;
    }
    for (; f = n.lastChild; ) n.removeChild(f);
    if (typeof u == "function") {
      var N = u;
      u = function() {
        var K = Df(j);
        N.call(K);
      };
    }
    var j = kf(n, 0, !1, null, null, !1, !1, "", Ih);
    return n._reactRootContainer = j, n[ro] = j.current, xu(n.nodeType === 8 ? n.parentNode : n), Bl(function() {
      Tf(r, j, o, u);
    }), j;
  }
  function tc(n, r, o, u, f) {
    var m = o._reactRootContainer;
    if (m) {
      var C = m;
      if (typeof f == "function") {
        var N = f;
        f = function() {
          var j = Df(C);
          N.call(j);
        };
      }
      Tf(r, C, n, f);
    } else C = ag(o, r, n, f, u);
    return Df(C);
  }
  It = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = oi(r.pendingLanes);
          o !== 0 && (Ji(r, o | 1), ca(r, wt()), (Ut & 6) === 0 && (Pu = wt() + 500, Li()));
        }
        break;
      case 13:
        Bl(function() {
          var u = Ea(n, 1);
          if (u !== null) {
            var f = qn();
            Vr(u, n, 1, f);
          }
        }), Nf(n, 1);
    }
  }, ls = function(n) {
    if (n.tag === 13) {
      var r = Ea(n, 134217728);
      if (r !== null) {
        var o = qn();
        Vr(r, n, 134217728, o);
      }
      Nf(n, 134217728);
    }
  }, xi = function(n) {
    if (n.tag === 13) {
      var r = Fi(n), o = Ea(n, r);
      if (o !== null) {
        var u = qn();
        Vr(o, n, r, u);
      }
      Nf(n, r);
    }
  }, gt = function() {
    return Ht;
  }, hu = function(n, r) {
    var o = Ht;
    try {
      return Ht = n, r();
    } finally {
      Ht = o;
    }
  }, Zt = function(n, r, o) {
    switch (r) {
      case "input":
        if (Jr(n, o), r = o.name, o.type === "radio" && r != null) {
          for (o = n; o.parentNode; ) o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < o.length; r++) {
            var u = o[r];
            if (u !== n && u.form === n.form) {
              var f = Cn(u);
              if (!f) throw Error(d(90));
              Lr(u), Jr(u, f);
            }
          }
        }
        break;
      case "textarea":
        ei(n, o);
        break;
      case "select":
        r = o.value, r != null && Tn(n, !!o.multiple, r, !1);
    }
  }, dl = fp, bo = Bl;
  var ig = { usingClientEntryPoint: !1, Events: [at, fi, Cn, Ki, fl, fp] }, nc = { findFiberByHostInstance: Rl, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Fh = { bundleType: nc.bundleType, version: nc.version, rendererPackageName: nc.rendererPackageName, rendererConfig: nc.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: be.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Dn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: nc.findFiberByHostInstance || Ph, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Zo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Zo.isDisabled && Zo.supportsFiber) try {
      To = Zo.inject(Fh), Zr = Zo;
    } catch {
    }
  }
  return Xa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ig, Xa.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!_p(r)) throw Error(d(200));
    return rg(n, r, null, o);
  }, Xa.createRoot = function(n, r) {
    if (!_p(n)) throw Error(d(299));
    var o = !1, u = "", f = Wl;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (f = r.onRecoverableError)), r = kf(n, 1, !1, null, null, o, !1, u, f), n[ro] = r.current, xu(n.nodeType === 8 ? n.parentNode : n), new gp(r);
  }, Xa.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(d(188)) : (n = Object.keys(n).join(","), Error(d(268, n)));
    return n = Dn(r), n = n === null ? null : n.stateNode, n;
  }, Xa.flushSync = function(n) {
    return Bl(n);
  }, Xa.hydrate = function(n, r, o) {
    if (!Lf(r)) throw Error(d(200));
    return tc(null, n, r, !0, o);
  }, Xa.hydrateRoot = function(n, r, o) {
    if (!_p(n)) throw Error(d(405));
    var u = o != null && o.hydratedSources || null, f = !1, m = "", C = Wl;
    if (o != null && (o.unstable_strictMode === !0 && (f = !0), o.identifierPrefix !== void 0 && (m = o.identifierPrefix), o.onRecoverableError !== void 0 && (C = o.onRecoverableError)), r = zh(r, null, n, 1, o ?? null, f, !1, m, C), n[ro] = r.current, xu(n), u) for (n = 0; n < u.length; n++) o = u[n], f = o._getVersion, f = f(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, f] : r.mutableSourceEagerHydrationData.push(
      o,
      f
    );
    return new Mf(r);
  }, Xa.render = function(n, r, o) {
    if (!Lf(r)) throw Error(d(200));
    return tc(null, n, r, !1, o);
  }, Xa.unmountComponentAtNode = function(n) {
    if (!Lf(n)) throw Error(d(40));
    return n._reactRootContainer ? (Bl(function() {
      tc(null, null, n, !1, function() {
        n._reactRootContainer = null, n[ro] = null;
      });
    }), !0) : !1;
  }, Xa.unstable_batchedUpdates = fp, Xa.unstable_renderSubtreeIntoContainer = function(n, r, o, u) {
    if (!Lf(o)) throw Error(d(200));
    if (n == null || n._reactInternals === void 0) throw Error(d(38));
    return tc(n, r, o, !1, u);
  }, Xa.version = "18.3.1-next-f1338f8080-20240426", Xa;
}
var Ja = {};
var vE;
function xO() {
  return vE || (vE = 1, process.env.NODE_ENV !== "production" && (function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var c = xv(), p = PE(), d = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, _ = !1;
    function w(e) {
      _ = e;
    }
    function E(e) {
      if (!_) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        R("warn", e, a);
      }
    }
    function h(e) {
      if (!_) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        R("error", e, a);
      }
    }
    function R(e, t, a) {
      {
        var i = d.ReactDebugCurrentFrame, l = i.getStackAddendum();
        l !== "" && (t += "%s", a = a.concat([l]));
        var s = a.map(function(v) {
          return String(v);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var k = 0, x = 1, M = 2, A = 3, V = 4, $ = 5, re = 6, ie = 7, Ce = 8, Re = 9, ge = 10, oe = 11, be = 12, de = 13, Ye = 14, He = 15, Be = 16, nt = 17, ut = 18, Ee = 19, Q = 21, Z = 22, xe = 23, Pe = 24, De = 25, we = !0, F = !1, he = !1, le = !1, U = !1, ee = !0, Xe = !0, Ie = !0, mt = !0, rt = /* @__PURE__ */ new Set(), Le = {}, ct = {};
    function vt(e, t) {
      Xt(e, t), Xt(e + "Capture", t);
    }
    function Xt(e, t) {
      Le[e] && h("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Le[e] = t;
      {
        var a = e.toLowerCase();
        ct[a] = e, e === "onDoubleClick" && (ct.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        rt.add(t[i]);
    }
    var Un = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Lr = Object.prototype.hasOwnProperty;
    function kn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function ur(e) {
      try {
        return Yn(e), !1;
      } catch {
        return !0;
      }
    }
    function Yn(e) {
      return "" + e;
    }
    function Gn(e, t) {
      if (ur(e))
        return h("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, kn(e)), Yn(e);
    }
    function Jr(e) {
      if (ur(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", kn(e)), Yn(e);
    }
    function _i(e, t) {
      if (ur(e))
        return h("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, kn(e)), Yn(e);
    }
    function ma(e, t) {
      if (ur(e))
        return h("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, kn(e)), Yn(e);
    }
    function tr(e) {
      if (ur(e))
        return h("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", kn(e)), Yn(e);
    }
    function Tn(e) {
      if (ur(e))
        return h("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", kn(e)), Yn(e);
    }
    var Qn = 0, xr = 1, ei = 2, zn = 3, br = 4, ya = 5, ti = 6, Si = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ke = Si + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ze = new RegExp("^[" + Si + "][" + ke + "]*$"), Rt = {}, Gt = {};
    function un(e) {
      return Lr.call(Gt, e) ? !0 : Lr.call(Rt, e) ? !1 : Ze.test(e) ? (Gt[e] = !0, !0) : (Rt[e] = !0, h("Invalid attribute name: `%s`", e), !1);
    }
    function _n(e, t, a) {
      return t !== null ? t.type === Qn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function pn(e, t, a, i) {
      if (a !== null && a.type === Qn)
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
    function nr(e, t, a, i) {
      if (t === null || typeof t > "u" || pn(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case zn:
            return !t;
          case br:
            return t === !1;
          case ya:
            return isNaN(t);
          case ti:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function sn(e) {
      return Zt.hasOwnProperty(e) ? Zt[e] : null;
    }
    function Jt(e, t, a, i, l, s, v) {
      this.acceptsBooleans = t === ei || t === zn || t === br, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = v;
    }
    var Zt = {}, ga = [
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
    ga.forEach(function(e) {
      Zt[e] = new Jt(
        e,
        Qn,
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
      Zt[t] = new Jt(
        t,
        xr,
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
      Zt[e] = new Jt(
        e,
        ei,
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
      Zt[e] = new Jt(
        e,
        ei,
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
      Zt[e] = new Jt(
        e,
        zn,
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
      Zt[e] = new Jt(
        e,
        zn,
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
      Zt[e] = new Jt(
        e,
        br,
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
      Zt[e] = new Jt(
        e,
        ti,
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
      Zt[e] = new Jt(
        e,
        ya,
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
    var Rr = /[\-\:]([a-z])/g, La = function(e) {
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
      var t = e.replace(Rr, La);
      Zt[t] = new Jt(
        t,
        xr,
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
      var t = e.replace(Rr, La);
      Zt[t] = new Jt(
        t,
        xr,
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
      var t = e.replace(Rr, La);
      Zt[t] = new Jt(
        t,
        xr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Zt[e] = new Jt(
        e,
        xr,
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
    var Ki = "xlinkHref";
    Zt[Ki] = new Jt(
      "xlinkHref",
      xr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Zt[e] = new Jt(
        e,
        xr,
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
    var fl = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, dl = !1;
    function bo(e) {
      !dl && fl.test(e) && (dl = !0, h("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Ro(e, t, a, i) {
      if (i.mustUseProperty) {
        var l = i.propertyName;
        return e[l];
      } else {
        Gn(a, t), i.sanitizeURL && bo("" + a);
        var s = i.attributeName, v = null;
        if (i.type === br) {
          if (e.hasAttribute(s)) {
            var y = e.getAttribute(s);
            return y === "" ? !0 : nr(t, a, i, !1) ? y : y === "" + a ? a : y;
          }
        } else if (e.hasAttribute(s)) {
          if (nr(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === zn)
            return a;
          v = e.getAttribute(s);
        }
        return nr(t, a, i, !1) ? v === null ? a : v : v === "" + a ? a : v;
      }
    }
    function pl(e, t, a, i) {
      {
        if (!un(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var l = e.getAttribute(t);
        return Gn(a, t), l === "" + a ? a : l;
      }
    }
    function Or(e, t, a, i) {
      var l = sn(t);
      if (!_n(t, l, i)) {
        if (nr(t, a, l, i) && (a = null), i || l === null) {
          if (un(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Gn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var v = l.mustUseProperty;
        if (v) {
          var y = l.propertyName;
          if (a === null) {
            var g = l.type;
            e[y] = g === zn ? !1 : "";
          } else
            e[y] = a;
          return;
        }
        var b = l.attributeName, T = l.attributeNamespace;
        if (a === null)
          e.removeAttribute(b);
        else {
          var I = l.type, z;
          I === zn || I === br && a === !0 ? z = "" : (Gn(a, b), z = "" + a, l.sanitizeURL && bo(z.toString())), T ? e.setAttributeNS(T, b, z) : e.setAttribute(b, z);
        }
      }
    }
    var jr = /* @__PURE__ */ Symbol.for("react.element"), sr = /* @__PURE__ */ Symbol.for("react.portal"), Ci = /* @__PURE__ */ Symbol.for("react.fragment"), ni = /* @__PURE__ */ Symbol.for("react.strict_mode"), Ei = /* @__PURE__ */ Symbol.for("react.profiler"), wi = /* @__PURE__ */ Symbol.for("react.provider"), O = /* @__PURE__ */ Symbol.for("react.context"), ue = /* @__PURE__ */ Symbol.for("react.forward_ref"), Me = /* @__PURE__ */ Symbol.for("react.suspense"), We = /* @__PURE__ */ Symbol.for("react.suspense_list"), Et = /* @__PURE__ */ Symbol.for("react.memo"), _t = /* @__PURE__ */ Symbol.for("react.lazy"), Mt = /* @__PURE__ */ Symbol.for("react.scope"), Tt = /* @__PURE__ */ Symbol.for("react.debug_trace_mode"), Dn = /* @__PURE__ */ Symbol.for("react.offscreen"), cn = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), vn = /* @__PURE__ */ Symbol.for("react.cache"), cr = /* @__PURE__ */ Symbol.for("react.tracing_marker"), ri = Symbol.iterator, ai = "@@iterator";
    function wt(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = ri && e[ri] || e[ai];
      return typeof t == "function" ? t : null;
    }
    var bt = Object.assign, ii = 0, vl, hl, ko, su, To, Zr, os;
    function Ar() {
    }
    Ar.__reactDisabledLog = !0;
    function wc() {
      {
        if (ii === 0) {
          vl = console.log, hl = console.info, ko = console.warn, su = console.error, To = console.group, Zr = console.groupCollapsed, os = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ar,
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
        ii++;
      }
    }
    function xc() {
      {
        if (ii--, ii === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: bt({}, e, {
              value: vl
            }),
            info: bt({}, e, {
              value: hl
            }),
            warn: bt({}, e, {
              value: ko
            }),
            error: bt({}, e, {
              value: su
            }),
            group: bt({}, e, {
              value: To
            }),
            groupCollapsed: bt({}, e, {
              value: Zr
            }),
            groupEnd: bt({}, e, {
              value: os
            })
          });
        }
        ii < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var cu = d.ReactCurrentDispatcher, Do;
    function _a(e, t, a) {
      {
        if (Do === void 0)
          try {
            throw Error();
          } catch (l) {
            var i = l.stack.trim().match(/\n( *(at )?)/);
            Do = i && i[1] || "";
          }
        return `
` + Do + e;
      }
    }
    var oi = !1, li;
    {
      var fu = typeof WeakMap == "function" ? WeakMap : Map;
      li = new fu();
    }
    function ml(e, t) {
      if (!e || oi)
        return "";
      {
        var a = li.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      oi = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = cu.current, cu.current = null, wc();
      try {
        if (t) {
          var v = function() {
            throw Error();
          };
          if (Object.defineProperty(v.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(v, []);
            } catch (X) {
              i = X;
            }
            Reflect.construct(e, [], v);
          } else {
            try {
              v.call();
            } catch (X) {
              i = X;
            }
            e.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (X) {
            i = X;
          }
          e();
        }
      } catch (X) {
        if (X && i && typeof X.stack == "string") {
          for (var y = X.stack.split(`
`), g = i.stack.split(`
`), b = y.length - 1, T = g.length - 1; b >= 1 && T >= 0 && y[b] !== g[T]; )
            T--;
          for (; b >= 1 && T >= 0; b--, T--)
            if (y[b] !== g[T]) {
              if (b !== 1 || T !== 1)
                do
                  if (b--, T--, T < 0 || y[b] !== g[T]) {
                    var I = `
` + y[b].replace(" at new ", " at ");
                    return e.displayName && I.includes("<anonymous>") && (I = I.replace("<anonymous>", e.displayName)), typeof e == "function" && li.set(e, I), I;
                  }
                while (b >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        oi = !1, cu.current = s, xc(), Error.prepareStackTrace = l;
      }
      var z = e ? e.displayName || e.name : "", Y = z ? _a(z) : "";
      return typeof e == "function" && li.set(e, Y), Y;
    }
    function No(e, t, a) {
      return ml(e, !0);
    }
    function du(e, t, a) {
      return ml(e, !1);
    }
    function pu(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Xi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ml(e, pu(e));
      if (typeof e == "string")
        return _a(e);
      switch (e) {
        case Me:
          return _a("Suspense");
        case We:
          return _a("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ue:
            return du(e.render);
          case Et:
            return Xi(e.type, t, a);
          case _t: {
            var i = e, l = i._payload, s = i._init;
            try {
              return Xi(s(l), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function vd(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case $:
          return _a(e.type);
        case Be:
          return _a("Lazy");
        case de:
          return _a("Suspense");
        case Ee:
          return _a("SuspenseList");
        case k:
        case M:
        case He:
          return du(e.type);
        case oe:
          return du(e.type.render);
        case x:
          return No(e.type);
        default:
          return "";
      }
    }
    function Ji(e) {
      try {
        var t = "", a = e;
        do
          t += vd(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Ht(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var l = t.displayName || t.name || "";
      return l !== "" ? a + "(" + l + ")" : a;
    }
    function vu(e) {
      return e.displayName || "Context";
    }
    function It(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Ci:
          return "Fragment";
        case sr:
          return "Portal";
        case Ei:
          return "Profiler";
        case ni:
          return "StrictMode";
        case Me:
          return "Suspense";
        case We:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case O:
            var t = e;
            return vu(t) + ".Consumer";
          case wi:
            var a = e;
            return vu(a._context) + ".Provider";
          case ue:
            return Ht(e, e.render, "ForwardRef");
          case Et:
            var i = e.displayName || null;
            return i !== null ? i : It(e.type) || "Memo";
          case _t: {
            var l = e, s = l._payload, v = l._init;
            try {
              return It(v(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function ls(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function xi(e) {
      return e.displayName || "Context";
    }
    function gt(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Pe:
          return "Cache";
        case Re:
          var i = a;
          return xi(i) + ".Consumer";
        case ge:
          var l = a;
          return xi(l._context) + ".Provider";
        case ut:
          return "DehydratedFragment";
        case oe:
          return ls(a, a.render, "ForwardRef");
        case ie:
          return "Fragment";
        case $:
          return a;
        case V:
          return "Portal";
        case A:
          return "Root";
        case re:
          return "Text";
        case Be:
          return It(a);
        case Ce:
          return a === ni ? "StrictMode" : "Mode";
        case Z:
          return "Offscreen";
        case be:
          return "Profiler";
        case Q:
          return "Scope";
        case de:
          return "Suspense";
        case Ee:
          return "SuspenseList";
        case De:
          return "TracingMarker";
        // The display name for this tags come from the user-provided type:
        case x:
        case k:
        case nt:
        case M:
        case Ye:
        case He:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var hu = d.ReactDebugCurrentFrame, fr = null, bi = !1;
    function Ur() {
      {
        if (fr === null)
          return null;
        var e = fr._debugOwner;
        if (e !== null && typeof e < "u")
          return gt(e);
      }
      return null;
    }
    function Ri() {
      return fr === null ? "" : Ji(fr);
    }
    function hn() {
      hu.getCurrentStack = null, fr = null, bi = !1;
    }
    function en(e) {
      hu.getCurrentStack = e === null ? null : Ri, fr = e, bi = !1;
    }
    function Mo() {
      return fr;
    }
    function Kn(e) {
      bi = e;
    }
    function zr(e) {
      return "" + e;
    }
    function Oa(e) {
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
    var yl = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function us(e, t) {
      yl[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || h("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || h("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function ss(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Lo(e) {
      return e._valueTracker;
    }
    function gl(e) {
      e._valueTracker = null;
    }
    function hd(e) {
      var t = "";
      return e && (ss(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function ja(e) {
      var t = ss(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Tn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var l = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return l.call(this);
          },
          set: function(y) {
            Tn(y), i = "" + y, s.call(this, y);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var v = {
          getValue: function() {
            return i;
          },
          setValue: function(y) {
            Tn(y), i = "" + y;
          },
          stopTracking: function() {
            gl(e), delete e[t];
          }
        };
        return v;
      }
    }
    function ui(e) {
      Lo(e) || (e._valueTracker = ja(e));
    }
    function ki(e) {
      if (!e)
        return !1;
      var t = Lo(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = hd(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Aa(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var mu = !1, yu = !1, Oo = !1, _l = !1;
    function gu(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function _u(e, t) {
      var a = e, i = t.checked, l = bt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return l;
    }
    function si(e, t) {
      us("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !yu && (h("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ur() || "A component", t.type), yu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !mu && (h("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ur() || "A component", t.type), mu = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Oa(t.value != null ? t.value : i),
        controlled: gu(t)
      };
    }
    function S(e, t) {
      var a = e, i = t.checked;
      i != null && Or(a, "checked", i, !1);
    }
    function L(e, t) {
      var a = e;
      {
        var i = gu(t);
        !a._wrapperState.controlled && i && !_l && (h("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), _l = !0), a._wrapperState.controlled && !i && !Oo && (h("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Oo = !0);
      }
      S(e, t);
      var l = Oa(t.value), s = t.type;
      if (l != null)
        s === "number" ? (l === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != l) && (a.value = zr(l)) : a.value !== zr(l) && (a.value = zr(l));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? ot(a, t.type, l) : t.hasOwnProperty("defaultValue") && ot(a, t.type, Oa(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function G(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var l = t.type, s = l === "submit" || l === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var v = zr(i._wrapperState.initialValue);
        a || v !== i.value && (i.value = v), i.defaultValue = v;
      }
      var y = i.name;
      y !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, y !== "" && (i.name = y);
    }
    function J(e, t) {
      var a = e;
      L(a, t), _e(a, t);
    }
    function _e(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Gn(a, "name");
        for (var l = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < l.length; s++) {
          var v = l[s];
          if (!(v === e || v.form !== e.form)) {
            var y = am(v);
            if (!y)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            ki(v), L(v, y);
          }
        }
      }
    }
    function ot(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Aa(e.ownerDocument) !== e) && (a == null ? e.defaultValue = zr(e._wrapperState.initialValue) : e.defaultValue !== zr(a) && (e.defaultValue = zr(a)));
    }
    var Ne = !1, ft = !1, Lt = !1;
    function Ft(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? c.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || ft || (ft = !0, h("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Lt || (Lt = !0, h("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Ne && (h("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Ne = !0);
    }
    function fn(e, t) {
      t.value != null && e.setAttribute("value", zr(Oa(t.value)));
    }
    var tn = Array.isArray;
    function kt(e) {
      return tn(e);
    }
    var nn;
    nn = !1;
    function Sn() {
      var e = Ur();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var jo = ["value", "defaultValue"];
    function cs(e) {
      {
        us("select", e);
        for (var t = 0; t < jo.length; t++) {
          var a = jo[t];
          if (e[a] != null) {
            var i = kt(e[a]);
            e.multiple && !i ? h("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Sn()) : !e.multiple && i && h("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Sn());
          }
        }
      }
    }
    function Zi(e, t, a, i) {
      var l = e.options;
      if (t) {
        for (var s = a, v = {}, y = 0; y < s.length; y++)
          v["$" + s[y]] = !0;
        for (var g = 0; g < l.length; g++) {
          var b = v.hasOwnProperty("$" + l[g].value);
          l[g].selected !== b && (l[g].selected = b), b && i && (l[g].defaultSelected = !0);
        }
      } else {
        for (var T = zr(Oa(a)), I = null, z = 0; z < l.length; z++) {
          if (l[z].value === T) {
            l[z].selected = !0, i && (l[z].defaultSelected = !0);
            return;
          }
          I === null && !l[z].disabled && (I = l[z]);
        }
        I !== null && (I.selected = !0);
      }
    }
    function fs(e, t) {
      return bt({}, t, {
        value: void 0
      });
    }
    function Sl(e, t) {
      var a = e;
      cs(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !nn && (h("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), nn = !0);
    }
    function md(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Zi(a, !!t.multiple, i, !1) : t.defaultValue != null && Zi(a, !!t.multiple, t.defaultValue, !0);
    }
    function bc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var l = t.value;
      l != null ? Zi(a, !!t.multiple, l, !1) : i !== !!t.multiple && (t.defaultValue != null ? Zi(a, !!t.multiple, t.defaultValue, !0) : Zi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function yd(e, t) {
      var a = e, i = t.value;
      i != null && Zi(a, !!t.multiple, i, !1);
    }
    var kv = !1;
    function gd(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = bt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: zr(a._wrapperState.initialValue)
      });
      return i;
    }
    function _d(e, t) {
      var a = e;
      us("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !kv && (h("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ur() || "A component"), kv = !0);
      var i = t.value;
      if (i == null) {
        var l = t.children, s = t.defaultValue;
        if (l != null) {
          h("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (kt(l)) {
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
        initialValue: Oa(i)
      };
    }
    function Tv(e, t) {
      var a = e, i = Oa(t.value), l = Oa(t.defaultValue);
      if (i != null) {
        var s = zr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      l != null && (a.defaultValue = zr(l));
    }
    function Dv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function jy(e, t) {
      Tv(e, t);
    }
    var eo = "http://www.w3.org/1999/xhtml", Sd = "http://www.w3.org/1998/Math/MathML", Cd = "http://www.w3.org/2000/svg";
    function Ed(e) {
      switch (e) {
        case "svg":
          return Cd;
        case "math":
          return Sd;
        default:
          return eo;
      }
    }
    function wd(e, t) {
      return e == null || e === eo ? Ed(t) : e === Cd && t === "foreignObject" ? eo : e;
    }
    var Nv = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, l);
        });
      } : e;
    }, Rc, Mv = Nv(function(e, t) {
      if (e.namespaceURI === Cd && !("innerHTML" in e)) {
        Rc = Rc || document.createElement("div"), Rc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Rc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), ea = 1, to = 3, Pn = 8, no = 9, xd = 11, Su = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === to) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, ds = {
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
    }, ps = {
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
    function Lv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Ov = ["Webkit", "ms", "Moz", "O"];
    Object.keys(ps).forEach(function(e) {
      Ov.forEach(function(t) {
        ps[Lv(t, e)] = ps[e];
      });
    });
    function kc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(ps.hasOwnProperty(e) && ps[e]) ? t + "px" : (ma(t, e), ("" + t).trim());
    }
    var jv = /([A-Z])/g, Av = /^ms-/;
    function Cu(e) {
      return e.replace(jv, "-$1").toLowerCase().replace(Av, "-ms-");
    }
    var Uv = function() {
    };
    {
      var Ay = /^(?:webkit|moz|o)[A-Z]/, Uy = /^-ms-/, zv = /-(.)/g, bd = /;\s*$/, Ti = {}, Cl = {}, Pv = !1, vs = !1, zy = function(e) {
        return e.replace(zv, function(t, a) {
          return a.toUpperCase();
        });
      }, Iv = function(e) {
        Ti.hasOwnProperty(e) && Ti[e] || (Ti[e] = !0, h(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          zy(e.replace(Uy, "ms-"))
        ));
      }, Rd = function(e) {
        Ti.hasOwnProperty(e) && Ti[e] || (Ti[e] = !0, h("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, kd = function(e, t) {
        Cl.hasOwnProperty(t) && Cl[t] || (Cl[t] = !0, h(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(bd, "")));
      }, Fv = function(e, t) {
        Pv || (Pv = !0, h("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Vv = function(e, t) {
        vs || (vs = !0, h("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Uv = function(e, t) {
        e.indexOf("-") > -1 ? Iv(e) : Ay.test(e) ? Rd(e) : bd.test(t) && kd(e, t), typeof t == "number" && (isNaN(t) ? Fv(e, t) : isFinite(t) || Vv(e, t));
      };
    }
    var Hv = Uv;
    function Py(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var l = e[i];
            if (l != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Cu(i)) + ":", t += kc(i, l, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function $v(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var l = i.indexOf("--") === 0;
          l || Hv(i, t[i]);
          var s = kc(i, t[i], l);
          i === "float" && (i = "cssFloat"), l ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Iy(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Bv(e) {
      var t = {};
      for (var a in e)
        for (var i = ds[a] || [a], l = 0; l < i.length; l++)
          t[i[l]] = a;
      return t;
    }
    function Fy(e, t) {
      {
        if (!t)
          return;
        var a = Bv(e), i = Bv(t), l = {};
        for (var s in a) {
          var v = a[s], y = i[s];
          if (y && v !== y) {
            var g = v + "," + y;
            if (l[g])
              continue;
            l[g] = !0, h("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Iy(e[v]) ? "Removing" : "Updating", v, y);
          }
        }
      }
    }
    var ci = {
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
    }, hs = bt({
      menuitem: !0
    }, ci), qv = "__html";
    function Tc(e, t) {
      if (t) {
        if (hs[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(qv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && h("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Ao(e, t) {
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
    var ms = {
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
    }, Dc = {
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
    }, Eu = {}, Vy = new RegExp("^(aria)-[" + ke + "]*$"), wu = new RegExp("^(aria)[A-Z][" + ke + "]*$");
    function Td(e, t) {
      {
        if (Lr.call(Eu, t) && Eu[t])
          return !0;
        if (wu.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Dc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return h("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Eu[t] = !0, !0;
          if (t !== i)
            return h("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Eu[t] = !0, !0;
        }
        if (Vy.test(t)) {
          var l = t.toLowerCase(), s = Dc.hasOwnProperty(l) ? l : null;
          if (s == null)
            return Eu[t] = !0, !1;
          if (t !== s)
            return h("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Eu[t] = !0, !0;
        }
      }
      return !0;
    }
    function ys(e, t) {
      {
        var a = [];
        for (var i in t) {
          var l = Td(e, i);
          l || a.push(i);
        }
        var s = a.map(function(v) {
          return "`" + v + "`";
        }).join(", ");
        a.length === 1 ? h("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && h("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Dd(e, t) {
      Ao(e, t) || ys(e, t);
    }
    var Nd = !1;
    function Nc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Nd && (Nd = !0, e === "select" && t.multiple ? h("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : h("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var El = function() {
    };
    {
      var dr = {}, Md = /^on./, Mc = /^on[^A-Z]/, Wv = new RegExp("^(aria)-[" + ke + "]*$"), Yv = new RegExp("^(aria)[A-Z][" + ke + "]*$");
      El = function(e, t, a, i) {
        if (Lr.call(dr, t) && dr[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return h("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), dr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, v = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var y = v.hasOwnProperty(l) ? v[l] : null;
          if (y != null)
            return h("Invalid event handler property `%s`. Did you mean `%s`?", t, y), dr[t] = !0, !0;
          if (Md.test(t))
            return h("Unknown event handler property `%s`. It will be ignored.", t), dr[t] = !0, !0;
        } else if (Md.test(t))
          return Mc.test(t) && h("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), dr[t] = !0, !0;
        if (Wv.test(t) || Yv.test(t))
          return !0;
        if (l === "innerhtml")
          return h("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), dr[t] = !0, !0;
        if (l === "aria")
          return h("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), dr[t] = !0, !0;
        if (l === "is" && a !== null && a !== void 0 && typeof a != "string")
          return h("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), dr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return h("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), dr[t] = !0, !0;
        var g = sn(t), b = g !== null && g.type === Qn;
        if (ms.hasOwnProperty(l)) {
          var T = ms[l];
          if (T !== t)
            return h("Invalid DOM property `%s`. Did you mean `%s`?", t, T), dr[t] = !0, !0;
        } else if (!b && t !== l)
          return h("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), dr[t] = !0, !0;
        return typeof a == "boolean" && pn(t, a, g, !1) ? (a ? h('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : h('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), dr[t] = !0, !0) : b ? !0 : pn(t, a, g, !1) ? (dr[t] = !0, !1) : ((a === "false" || a === "true") && g !== null && g.type === zn && (h("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), dr[t] = !0), !0);
      };
    }
    var Gv = function(e, t, a) {
      {
        var i = [];
        for (var l in t) {
          var s = El(e, l, t[l], a);
          s || i.push(l);
        }
        var v = i.map(function(y) {
          return "`" + y + "`";
        }).join(", ");
        i.length === 1 ? h("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e) : i.length > 1 && h("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e);
      }
    };
    function Qv(e, t, a) {
      Ao(e, t) || Gv(e, t, a);
    }
    var Ld = 1, Lc = 2, Ua = 4, Od = Ld | Lc | Ua, wl = null;
    function Hy(e) {
      wl !== null && h("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), wl = e;
    }
    function $y() {
      wl === null && h("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), wl = null;
    }
    function gs(e) {
      return e === wl;
    }
    function jd(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === to ? t.parentNode : t;
    }
    var Oc = null, xl = null, Qt = null;
    function jc(e) {
      var t = Bu(e);
      if (t) {
        if (typeof Oc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = am(a);
          Oc(t.stateNode, t.type, i);
        }
      }
    }
    function Ac(e) {
      Oc = e;
    }
    function xu(e) {
      xl ? Qt ? Qt.push(e) : Qt = [e] : xl = e;
    }
    function Kv() {
      return xl !== null || Qt !== null;
    }
    function Uc() {
      if (xl) {
        var e = xl, t = Qt;
        if (xl = null, Qt = null, jc(e), t)
          for (var a = 0; a < t.length; a++)
            jc(t[a]);
      }
    }
    var bu = function(e, t) {
      return e(t);
    }, _s = function() {
    }, Uo = !1;
    function Xv() {
      var e = Kv();
      e && (_s(), Uc());
    }
    function Jv(e, t, a) {
      if (Uo)
        return e(t, a);
      Uo = !0;
      try {
        return bu(e, t, a);
      } finally {
        Uo = !1, Xv();
      }
    }
    function By(e, t, a) {
      bu = e, _s = a;
    }
    function Zv(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function zc(e, t, a) {
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
          return !!(a.disabled && Zv(t));
        default:
          return !1;
      }
    }
    function zo(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = am(a);
      if (i === null)
        return null;
      var l = i[t];
      if (zc(t, e.type, i))
        return null;
      if (l && typeof l != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof l + "` type.");
      return l;
    }
    var Ss = !1;
    if (Un)
      try {
        var bl = {};
        Object.defineProperty(bl, "passive", {
          get: function() {
            Ss = !0;
          }
        }), window.addEventListener("test", bl, bl), window.removeEventListener("test", bl, bl);
      } catch {
        Ss = !1;
      }
    function Pc(e, t, a, i, l, s, v, y, g) {
      var b = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, b);
      } catch (T) {
        this.onError(T);
      }
    }
    var Ic = Pc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Ad = document.createElement("react");
      Ic = function(t, a, i, l, s, v, y, g, b) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var T = document.createEvent("Event"), I = !1, z = !0, Y = window.event, X = Object.getOwnPropertyDescriptor(window, "event");
        function te() {
          Ad.removeEventListener(ne, lt, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = Y);
        }
        var je = Array.prototype.slice.call(arguments, 3);
        function lt() {
          I = !0, te(), a.apply(i, je), z = !1;
        }
        var et, Pt = !1, Ot = !1;
        function B(q) {
          if (et = q.error, Pt = !0, et === null && q.colno === 0 && q.lineno === 0 && (Ot = !0), q.defaultPrevented && et != null && typeof et == "object")
            try {
              et._suppressLogging = !0;
            } catch {
            }
        }
        var ne = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", B), Ad.addEventListener(ne, lt, !1), T.initEvent(ne, !1, !1), Ad.dispatchEvent(T), X && Object.defineProperty(window, "event", X), I && z && (Pt ? Ot && (et = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : et = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(et)), window.removeEventListener("error", B), !I)
          return te(), Pc.apply(this, arguments);
      };
    }
    var eh = Ic, Ru = !1, Fc = null, ku = !1, Di = null, th = {
      onError: function(e) {
        Ru = !0, Fc = e;
      }
    };
    function Po(e, t, a, i, l, s, v, y, g) {
      Ru = !1, Fc = null, eh.apply(th, arguments);
    }
    function Ni(e, t, a, i, l, s, v, y, g) {
      if (Po.apply(this, arguments), Ru) {
        var b = Es();
        ku || (ku = !0, Di = b);
      }
    }
    function Cs() {
      if (ku) {
        var e = Di;
        throw ku = !1, Di = null, e;
      }
    }
    function ro() {
      return Ru;
    }
    function Es() {
      if (Ru) {
        var e = Fc;
        return Ru = !1, Fc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Tu(e) {
      return e._reactInternals;
    }
    function qy(e) {
      return e._reactInternals !== void 0;
    }
    function Rl(e, t) {
      e._reactInternals = t;
    }
    var at = (
      /*                      */
      0
    ), fi = (
      /*                */
      1
    ), Cn = (
      /*                    */
      2
    ), At = (
      /*                       */
      4
    ), za = (
      /*                */
      16
    ), Pa = (
      /*                 */
      32
    ), dn = (
      /*                     */
      64
    ), tt = (
      /*                   */
      128
    ), kr = (
      /*            */
      256
    ), bn = (
      /*                          */
      512
    ), Xn = (
      /*                     */
      1024
    ), ta = (
      /*                      */
      2048
    ), na = (
      /*                    */
      4096
    ), In = (
      /*                   */
      8192
    ), Du = (
      /*             */
      16384
    ), nh = (
      /*               */
      32767
    ), ws = (
      /*                   */
      32768
    ), rr = (
      /*                */
      65536
    ), Vc = (
      /* */
      131072
    ), Mi = (
      /*                       */
      1048576
    ), Nu = (
      /*                    */
      2097152
    ), ao = (
      /*                 */
      4194304
    ), Hc = (
      /*                */
      8388608
    ), Io = (
      /*               */
      16777216
    ), Li = (
      /*              */
      33554432
    ), Fo = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      At | Xn | 0
    ), Vo = Cn | At | za | Pa | bn | na | In, Ho = At | dn | bn | In, io = ta | za, Fn = ao | Hc | Nu, Ia = d.ReactCurrentOwner;
    function Sa(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Cn | na)) !== at && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === A ? a : null;
    }
    function Oi(e) {
      if (e.tag === de) {
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
    function ji(e) {
      return e.tag === A ? e.stateNode.containerInfo : null;
    }
    function kl(e) {
      return Sa(e) === e;
    }
    function rh(e) {
      {
        var t = Ia.current;
        if (t !== null && t.tag === x) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || h("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", gt(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var l = Tu(e);
      return l ? Sa(l) === l : !1;
    }
    function $c(e) {
      if (Sa(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Bc(e) {
      var t = e.alternate;
      if (!t) {
        var a = Sa(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, l = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var v = s.alternate;
        if (v === null) {
          var y = s.return;
          if (y !== null) {
            i = l = y;
            continue;
          }
          break;
        }
        if (s.child === v.child) {
          for (var g = s.child; g; ) {
            if (g === i)
              return $c(s), e;
            if (g === l)
              return $c(s), t;
            g = g.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== l.return)
          i = s, l = v;
        else {
          for (var b = !1, T = s.child; T; ) {
            if (T === i) {
              b = !0, i = s, l = v;
              break;
            }
            if (T === l) {
              b = !0, l = s, i = v;
              break;
            }
            T = T.sibling;
          }
          if (!b) {
            for (T = v.child; T; ) {
              if (T === i) {
                b = !0, i = v, l = s;
                break;
              }
              if (T === l) {
                b = !0, l = v, i = s;
                break;
              }
              T = T.sibling;
            }
            if (!b)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== l)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== A)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function ra(e) {
      var t = Bc(e);
      return t !== null ? aa(t) : null;
    }
    function aa(e) {
      if (e.tag === $ || e.tag === re)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = aa(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function yn(e) {
      var t = Bc(e);
      return t !== null ? Fa(t) : null;
    }
    function Fa(e) {
      if (e.tag === $ || e.tag === re)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== V) {
          var a = Fa(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Ud = p.unstable_scheduleCallback, ah = p.unstable_cancelCallback, zd = p.unstable_shouldYield, Pd = p.unstable_requestPaint, Jn = p.unstable_now, qc = p.unstable_getCurrentPriorityLevel, xs = p.unstable_ImmediatePriority, $o = p.unstable_UserBlockingPriority, oo = p.unstable_NormalPriority, Wy = p.unstable_LowPriority, Tl = p.unstable_IdlePriority, Wc = p.unstable_yieldValue, ih = p.unstable_setDisableYieldValue, Dl = null, Nn = null, Oe = null, Ca = !1, ia = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Mu(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return h("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Xe && (e = bt({}, e, {
          getLaneLabelMap: Nl,
          injectProfilingHooks: Va
        })), Dl = t.inject(e), Nn = t;
      } catch (a) {
        h("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Id(e, t) {
      if (Nn && typeof Nn.onScheduleFiberRoot == "function")
        try {
          Nn.onScheduleFiberRoot(Dl, e, t);
        } catch (a) {
          Ca || (Ca = !0, h("React instrumentation encountered an error: %s", a));
        }
    }
    function Fd(e, t) {
      if (Nn && typeof Nn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & tt) === tt;
          if (Ie) {
            var i;
            switch (t) {
              case Pr:
                i = xs;
                break;
              case Ui:
                i = $o;
                break;
              case Ha:
                i = oo;
                break;
              case $a:
                i = Tl;
                break;
              default:
                i = oo;
                break;
            }
            Nn.onCommitFiberRoot(Dl, e, i, a);
          }
        } catch (l) {
          Ca || (Ca = !0, h("React instrumentation encountered an error: %s", l));
        }
    }
    function Vd(e) {
      if (Nn && typeof Nn.onPostCommitFiberRoot == "function")
        try {
          Nn.onPostCommitFiberRoot(Dl, e);
        } catch (t) {
          Ca || (Ca = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    function Hd(e) {
      if (Nn && typeof Nn.onCommitFiberUnmount == "function")
        try {
          Nn.onCommitFiberUnmount(Dl, e);
        } catch (t) {
          Ca || (Ca = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    function En(e) {
      if (typeof Wc == "function" && (ih(e), w(e)), Nn && typeof Nn.setStrictMode == "function")
        try {
          Nn.setStrictMode(Dl, e);
        } catch (t) {
          Ca || (Ca = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    function Va(e) {
      Oe = e;
    }
    function Nl() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Ol; a++) {
          var i = sh(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function $d(e) {
      Oe !== null && typeof Oe.markCommitStarted == "function" && Oe.markCommitStarted(e);
    }
    function Bd() {
      Oe !== null && typeof Oe.markCommitStopped == "function" && Oe.markCommitStopped();
    }
    function Ea(e) {
      Oe !== null && typeof Oe.markComponentRenderStarted == "function" && Oe.markComponentRenderStarted(e);
    }
    function wa() {
      Oe !== null && typeof Oe.markComponentRenderStopped == "function" && Oe.markComponentRenderStopped();
    }
    function qd(e) {
      Oe !== null && typeof Oe.markComponentPassiveEffectMountStarted == "function" && Oe.markComponentPassiveEffectMountStarted(e);
    }
    function oh() {
      Oe !== null && typeof Oe.markComponentPassiveEffectMountStopped == "function" && Oe.markComponentPassiveEffectMountStopped();
    }
    function lo(e) {
      Oe !== null && typeof Oe.markComponentPassiveEffectUnmountStarted == "function" && Oe.markComponentPassiveEffectUnmountStarted(e);
    }
    function Bo() {
      Oe !== null && typeof Oe.markComponentPassiveEffectUnmountStopped == "function" && Oe.markComponentPassiveEffectUnmountStopped();
    }
    function Yc(e) {
      Oe !== null && typeof Oe.markComponentLayoutEffectMountStarted == "function" && Oe.markComponentLayoutEffectMountStarted(e);
    }
    function lh() {
      Oe !== null && typeof Oe.markComponentLayoutEffectMountStopped == "function" && Oe.markComponentLayoutEffectMountStopped();
    }
    function bs(e) {
      Oe !== null && typeof Oe.markComponentLayoutEffectUnmountStarted == "function" && Oe.markComponentLayoutEffectUnmountStarted(e);
    }
    function Wd() {
      Oe !== null && typeof Oe.markComponentLayoutEffectUnmountStopped == "function" && Oe.markComponentLayoutEffectUnmountStopped();
    }
    function Rs(e, t, a) {
      Oe !== null && typeof Oe.markComponentErrored == "function" && Oe.markComponentErrored(e, t, a);
    }
    function Ai(e, t, a) {
      Oe !== null && typeof Oe.markComponentSuspended == "function" && Oe.markComponentSuspended(e, t, a);
    }
    function ks(e) {
      Oe !== null && typeof Oe.markLayoutEffectsStarted == "function" && Oe.markLayoutEffectsStarted(e);
    }
    function Ts() {
      Oe !== null && typeof Oe.markLayoutEffectsStopped == "function" && Oe.markLayoutEffectsStopped();
    }
    function Ml(e) {
      Oe !== null && typeof Oe.markPassiveEffectsStarted == "function" && Oe.markPassiveEffectsStarted(e);
    }
    function Yd() {
      Oe !== null && typeof Oe.markPassiveEffectsStopped == "function" && Oe.markPassiveEffectsStopped();
    }
    function Ll(e) {
      Oe !== null && typeof Oe.markRenderStarted == "function" && Oe.markRenderStarted(e);
    }
    function uh() {
      Oe !== null && typeof Oe.markRenderYielded == "function" && Oe.markRenderYielded();
    }
    function Gc() {
      Oe !== null && typeof Oe.markRenderStopped == "function" && Oe.markRenderStopped();
    }
    function wn(e) {
      Oe !== null && typeof Oe.markRenderScheduled == "function" && Oe.markRenderScheduled(e);
    }
    function Qc(e, t) {
      Oe !== null && typeof Oe.markForceUpdateScheduled == "function" && Oe.markForceUpdateScheduled(e, t);
    }
    function Ds(e, t) {
      Oe !== null && typeof Oe.markStateUpdateScheduled == "function" && Oe.markStateUpdateScheduled(e, t);
    }
    var it = (
      /*                         */
      0
    ), Dt = (
      /*                 */
      1
    ), $t = (
      /*                    */
      2
    ), rn = (
      /*               */
      8
    ), Bt = (
      /*              */
      16
    ), Vn = Math.clz32 ? Math.clz32 : Ns, ar = Math.log, Kc = Math.LN2;
    function Ns(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (ar(t) / Kc | 0) | 0;
    }
    var Ol = 31, se = (
      /*                        */
      0
    ), Vt = (
      /*                          */
      0
    ), pt = (
      /*                        */
      1
    ), qo = (
      /*    */
      2
    ), di = (
      /*             */
      4
    ), Tr = (
      /*            */
      8
    ), Mn = (
      /*                     */
      16
    ), uo = (
      /*                */
      32
    ), Wo = (
      /*                       */
      4194240
    ), jl = (
      /*                        */
      64
    ), Xc = (
      /*                        */
      128
    ), Jc = (
      /*                        */
      256
    ), Zc = (
      /*                        */
      512
    ), ef = (
      /*                        */
      1024
    ), tf = (
      /*                        */
      2048
    ), nf = (
      /*                        */
      4096
    ), rf = (
      /*                        */
      8192
    ), af = (
      /*                        */
      16384
    ), Al = (
      /*                       */
      32768
    ), of = (
      /*                       */
      65536
    ), Lu = (
      /*                       */
      131072
    ), Ou = (
      /*                       */
      262144
    ), lf = (
      /*                       */
      524288
    ), Ms = (
      /*                       */
      1048576
    ), uf = (
      /*                       */
      2097152
    ), Ls = (
      /*                            */
      130023424
    ), Ul = (
      /*                             */
      4194304
    ), sf = (
      /*                             */
      8388608
    ), Os = (
      /*                             */
      16777216
    ), cf = (
      /*                             */
      33554432
    ), ff = (
      /*                             */
      67108864
    ), Gd = Ul, js = (
      /*          */
      134217728
    ), Qd = (
      /*                          */
      268435455
    ), As = (
      /*               */
      268435456
    ), zl = (
      /*                        */
      536870912
    ), oa = (
      /*                   */
      1073741824
    );
    function sh(e) {
      {
        if (e & pt)
          return "Sync";
        if (e & qo)
          return "InputContinuousHydration";
        if (e & di)
          return "InputContinuous";
        if (e & Tr)
          return "DefaultHydration";
        if (e & Mn)
          return "Default";
        if (e & uo)
          return "TransitionHydration";
        if (e & Wo)
          return "Transition";
        if (e & Ls)
          return "Retry";
        if (e & js)
          return "SelectiveHydration";
        if (e & As)
          return "IdleHydration";
        if (e & zl)
          return "Idle";
        if (e & oa)
          return "Offscreen";
      }
    }
    var ln = -1, Pl = jl, df = Ul;
    function Us(e) {
      switch (Yo(e)) {
        case pt:
          return pt;
        case qo:
          return qo;
        case di:
          return di;
        case Tr:
          return Tr;
        case Mn:
          return Mn;
        case uo:
          return uo;
        case jl:
        case Xc:
        case Jc:
        case Zc:
        case ef:
        case tf:
        case nf:
        case rf:
        case af:
        case Al:
        case of:
        case Lu:
        case Ou:
        case lf:
        case Ms:
        case uf:
          return e & Wo;
        case Ul:
        case sf:
        case Os:
        case cf:
        case ff:
          return e & Ls;
        case js:
          return js;
        case As:
          return As;
        case zl:
          return zl;
        case oa:
          return oa;
        default:
          return h("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function pf(e, t) {
      var a = e.pendingLanes;
      if (a === se)
        return se;
      var i = se, l = e.suspendedLanes, s = e.pingedLanes, v = a & Qd;
      if (v !== se) {
        var y = v & ~l;
        if (y !== se)
          i = Us(y);
        else {
          var g = v & s;
          g !== se && (i = Us(g));
        }
      } else {
        var b = a & ~l;
        b !== se ? i = Us(b) : s !== se && (i = Us(s));
      }
      if (i === se)
        return se;
      if (t !== se && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & l) === se) {
        var T = Yo(i), I = Yo(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          T >= I || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          T === Mn && (I & Wo) !== se
        )
          return t;
      }
      (i & di) !== se && (i |= a & Mn);
      var z = e.entangledLanes;
      if (z !== se)
        for (var Y = e.entanglements, X = i & z; X > 0; ) {
          var te = Hn(X), je = 1 << te;
          i |= Y[te], X &= ~je;
        }
      return i;
    }
    function pi(e, t) {
      for (var a = e.eventTimes, i = ln; t > 0; ) {
        var l = Hn(t), s = 1 << l, v = a[l];
        v > i && (i = v), t &= ~s;
      }
      return i;
    }
    function Kd(e, t) {
      switch (e) {
        case pt:
        case qo:
        case di:
          return t + 250;
        case Tr:
        case Mn:
        case uo:
        case jl:
        case Xc:
        case Jc:
        case Zc:
        case ef:
        case tf:
        case nf:
        case rf:
        case af:
        case Al:
        case of:
        case Lu:
        case Ou:
        case lf:
        case Ms:
        case uf:
          return t + 5e3;
        case Ul:
        case sf:
        case Os:
        case cf:
        case ff:
          return ln;
        case js:
        case As:
        case zl:
        case oa:
          return ln;
        default:
          return h("Should have found matching lanes. This is a bug in React."), ln;
      }
    }
    function vf(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, l = e.pingedLanes, s = e.expirationTimes, v = a; v > 0; ) {
        var y = Hn(v), g = 1 << y, b = s[y];
        b === ln ? ((g & i) === se || (g & l) !== se) && (s[y] = Kd(g, t)) : b <= t && (e.expiredLanes |= g), v &= ~g;
      }
    }
    function ch(e) {
      return Us(e.pendingLanes);
    }
    function hf(e) {
      var t = e.pendingLanes & ~oa;
      return t !== se ? t : t & oa ? oa : se;
    }
    function fh(e) {
      return (e & pt) !== se;
    }
    function zs(e) {
      return (e & Qd) !== se;
    }
    function Il(e) {
      return (e & Ls) === e;
    }
    function Xd(e) {
      var t = pt | di | Mn;
      return (e & t) === se;
    }
    function Jd(e) {
      return (e & Wo) === e;
    }
    function mf(e, t) {
      var a = qo | di | Tr | Mn;
      return (t & a) !== se;
    }
    function dh(e, t) {
      return (t & e.expiredLanes) !== se;
    }
    function Zd(e) {
      return (e & Wo) !== se;
    }
    function ep() {
      var e = Pl;
      return Pl <<= 1, (Pl & Wo) === se && (Pl = jl), e;
    }
    function ph() {
      var e = df;
      return df <<= 1, (df & Ls) === se && (df = Ul), e;
    }
    function Yo(e) {
      return e & -e;
    }
    function Ps(e) {
      return Yo(e);
    }
    function Hn(e) {
      return 31 - Vn(e);
    }
    function pr(e) {
      return Hn(e);
    }
    function la(e, t) {
      return (e & t) !== se;
    }
    function Fl(e, t) {
      return (e & t) === t;
    }
    function xt(e, t) {
      return e | t;
    }
    function Is(e, t) {
      return e & ~t;
    }
    function tp(e, t) {
      return e & t;
    }
    function vh(e) {
      return e;
    }
    function hh(e, t) {
      return e !== Vt && e < t ? e : t;
    }
    function Fs(e) {
      for (var t = [], a = 0; a < Ol; a++)
        t.push(e);
      return t;
    }
    function ju(e, t, a) {
      e.pendingLanes |= t, t !== zl && (e.suspendedLanes = se, e.pingedLanes = se);
      var i = e.eventTimes, l = pr(t);
      i[l] = a;
    }
    function mh(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var l = Hn(i), s = 1 << l;
        a[l] = ln, i &= ~s;
      }
    }
    function yf(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function np(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = se, e.pingedLanes = se, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, l = e.eventTimes, s = e.expirationTimes, v = a; v > 0; ) {
        var y = Hn(v), g = 1 << y;
        i[y] = se, l[y] = ln, s[y] = ln, v &= ~g;
      }
    }
    function gf(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, l = a; l; ) {
        var s = Hn(l), v = 1 << s;
        // Is this one of the newly entangled lanes?
        v & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), l &= ~v;
      }
    }
    function rp(e, t) {
      var a = Yo(t), i;
      switch (a) {
        case di:
          i = qo;
          break;
        case Mn:
          i = Tr;
          break;
        case jl:
        case Xc:
        case Jc:
        case Zc:
        case ef:
        case tf:
        case nf:
        case rf:
        case af:
        case Al:
        case of:
        case Lu:
        case Ou:
        case lf:
        case Ms:
        case uf:
        case Ul:
        case sf:
        case Os:
        case cf:
        case ff:
          i = uo;
          break;
        case zl:
          i = As;
          break;
        default:
          i = Vt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Vt ? Vt : i;
    }
    function Vs(e, t, a) {
      if (ia)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var l = pr(a), s = 1 << l, v = i[l];
          v.add(t), a &= ~s;
        }
    }
    function yh(e, t) {
      if (ia)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var l = pr(t), s = 1 << l, v = a[l];
          v.size > 0 && (v.forEach(function(y) {
            var g = y.alternate;
            (g === null || !i.has(g)) && i.add(y);
          }), v.clear()), t &= ~s;
        }
    }
    function ap(e, t) {
      return null;
    }
    var Pr = pt, Ui = di, Ha = Mn, $a = zl, Hs = Vt;
    function Ba() {
      return Hs;
    }
    function $n(e) {
      Hs = e;
    }
    function gh(e, t) {
      var a = Hs;
      try {
        return Hs = e, t();
      } finally {
        Hs = a;
      }
    }
    function _h(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function $s(e, t) {
      return e > t ? e : t;
    }
    function ir(e, t) {
      return e !== 0 && e < t;
    }
    function Sh(e) {
      var t = Yo(e);
      return ir(Pr, t) ? ir(Ui, t) ? zs(t) ? Ha : $a : Ui : Pr;
    }
    function _f(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Bs;
    function Dr(e) {
      Bs = e;
    }
    function Yy(e) {
      Bs(e);
    }
    var qe;
    function Au(e) {
      qe = e;
    }
    var Sf;
    function Ch(e) {
      Sf = e;
    }
    var Eh;
    function qs(e) {
      Eh = e;
    }
    var Ws;
    function ip(e) {
      Ws = e;
    }
    var Cf = !1, Ys = [], so = null, zi = null, Pi = null, Ln = /* @__PURE__ */ new Map(), Ir = /* @__PURE__ */ new Map(), Fr = [], wh = [
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
    function xh(e) {
      return wh.indexOf(e) > -1;
    }
    function vi(e, t, a, i, l) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: l,
        targetContainers: [i]
      };
    }
    function op(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          so = null;
          break;
        case "dragenter":
        case "dragleave":
          zi = null;
          break;
        case "mouseover":
        case "mouseout":
          Pi = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Ln.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Ir.delete(i);
          break;
        }
      }
    }
    function ua(e, t, a, i, l, s) {
      if (e === null || e.nativeEvent !== s) {
        var v = vi(t, a, i, l, s);
        if (t !== null) {
          var y = Bu(t);
          y !== null && qe(y);
        }
        return v;
      }
      e.eventSystemFlags |= i;
      var g = e.targetContainers;
      return l !== null && g.indexOf(l) === -1 && g.push(l), e;
    }
    function Gy(e, t, a, i, l) {
      switch (t) {
        case "focusin": {
          var s = l;
          return so = ua(so, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var v = l;
          return zi = ua(zi, e, t, a, i, v), !0;
        }
        case "mouseover": {
          var y = l;
          return Pi = ua(Pi, e, t, a, i, y), !0;
        }
        case "pointerover": {
          var g = l, b = g.pointerId;
          return Ln.set(b, ua(Ln.get(b) || null, e, t, a, i, g)), !0;
        }
        case "gotpointercapture": {
          var T = l, I = T.pointerId;
          return Ir.set(I, ua(Ir.get(I) || null, e, t, a, i, T)), !0;
        }
      }
      return !1;
    }
    function lp(e) {
      var t = ic(e.target);
      if (t !== null) {
        var a = Sa(t);
        if (a !== null) {
          var i = a.tag;
          if (i === de) {
            var l = Oi(a);
            if (l !== null) {
              e.blockedOn = l, Ws(e.priority, function() {
                Sf(a);
              });
              return;
            }
          } else if (i === A) {
            var s = a.stateNode;
            if (_f(s)) {
              e.blockedOn = ji(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function bh(e) {
      for (var t = Eh(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Fr.length && ir(t, Fr[i].priority); i++)
        ;
      Fr.splice(i, 0, a), i === 0 && lp(a);
    }
    function Gs(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = zu(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var l = e.nativeEvent, s = new l.constructor(l.type, l);
          Hy(s), l.target.dispatchEvent(s), $y();
        } else {
          var v = Bu(i);
          return v !== null && qe(v), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function up(e, t, a) {
      Gs(e) && a.delete(t);
    }
    function Qy() {
      Cf = !1, so !== null && Gs(so) && (so = null), zi !== null && Gs(zi) && (zi = null), Pi !== null && Gs(Pi) && (Pi = null), Ln.forEach(up), Ir.forEach(up);
    }
    function Go(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Cf || (Cf = !0, p.unstable_scheduleCallback(p.unstable_NormalPriority, Qy)));
    }
    function Vl(e) {
      if (Ys.length > 0) {
        Go(Ys[0], e);
        for (var t = 1; t < Ys.length; t++) {
          var a = Ys[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      so !== null && Go(so, e), zi !== null && Go(zi, e), Pi !== null && Go(Pi, e);
      var i = function(y) {
        return Go(y, e);
      };
      Ln.forEach(i), Ir.forEach(i);
      for (var l = 0; l < Fr.length; l++) {
        var s = Fr[l];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Fr.length > 0; ) {
        var v = Fr[0];
        if (v.blockedOn !== null)
          break;
        lp(v), v.blockedOn === null && Fr.shift();
      }
    }
    var vr = d.ReactCurrentBatchConfig, Ut = !0;
    function Zn(e) {
      Ut = !!e;
    }
    function Bn() {
      return Ut;
    }
    function hr(e, t, a) {
      var i = Ef(t), l;
      switch (i) {
        case Pr:
          l = xa;
          break;
        case Ui:
          l = Uu;
          break;
        case Ha:
        default:
          l = On;
          break;
      }
      return l.bind(null, t, a, e);
    }
    function xa(e, t, a, i) {
      var l = Ba(), s = vr.transition;
      vr.transition = null;
      try {
        $n(Pr), On(e, t, a, i);
      } finally {
        $n(l), vr.transition = s;
      }
    }
    function Uu(e, t, a, i) {
      var l = Ba(), s = vr.transition;
      vr.transition = null;
      try {
        $n(Ui), On(e, t, a, i);
      } finally {
        $n(l), vr.transition = s;
      }
    }
    function On(e, t, a, i) {
      Ut && Qs(e, t, a, i);
    }
    function Qs(e, t, a, i) {
      var l = zu(e, t, a, i);
      if (l === null) {
        dg(e, t, i, Ii, a), op(e, i);
        return;
      }
      if (Gy(l, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (op(e, i), t & Ua && xh(e)) {
        for (; l !== null; ) {
          var s = Bu(l);
          s !== null && Yy(s);
          var v = zu(e, t, a, i);
          if (v === null && dg(e, t, i, Ii, a), v === l)
            break;
          l = v;
        }
        l !== null && i.stopPropagation();
        return;
      }
      dg(e, t, i, null, a);
    }
    var Ii = null;
    function zu(e, t, a, i) {
      Ii = null;
      var l = jd(i), s = ic(l);
      if (s !== null) {
        var v = Sa(s);
        if (v === null)
          s = null;
        else {
          var y = v.tag;
          if (y === de) {
            var g = Oi(v);
            if (g !== null)
              return g;
            s = null;
          } else if (y === A) {
            var b = v.stateNode;
            if (_f(b))
              return ji(v);
            s = null;
          } else v !== s && (s = null);
        }
      }
      return Ii = s, null;
    }
    function Ef(e) {
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
          return Pr;
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
          return Ui;
        case "message": {
          var t = qc();
          switch (t) {
            case xs:
              return Pr;
            case $o:
              return Ui;
            case oo:
            case Wy:
              return Ha;
            case Tl:
              return $a;
            default:
              return Ha;
          }
        }
        default:
          return Ha;
      }
    }
    function Ks(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function sa(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function sp(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Pu(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var ba = null, Iu = null, Hl = null;
    function Qo(e) {
      return ba = e, Iu = Xs(), !0;
    }
    function wf() {
      ba = null, Iu = null, Hl = null;
    }
    function co() {
      if (Hl)
        return Hl;
      var e, t = Iu, a = t.length, i, l = Xs(), s = l.length;
      for (e = 0; e < a && t[e] === l[e]; e++)
        ;
      var v = a - e;
      for (i = 1; i <= v && t[a - i] === l[s - i]; i++)
        ;
      var y = i > 1 ? 1 - i : void 0;
      return Hl = l.slice(e, y), Hl;
    }
    function Xs() {
      return "value" in ba ? ba.value : ba.textContent;
    }
    function Ko(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Fu() {
      return !0;
    }
    function Js() {
      return !1;
    }
    function Nr(e) {
      function t(a, i, l, s, v) {
        this._reactName = a, this._targetInst = l, this.type = i, this.nativeEvent = s, this.target = v, this.currentTarget = null;
        for (var y in e)
          if (e.hasOwnProperty(y)) {
            var g = e[y];
            g ? this[y] = g(s) : this[y] = s[y];
          }
        var b = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return b ? this.isDefaultPrevented = Fu : this.isDefaultPrevented = Js, this.isPropagationStopped = Js, this;
      }
      return bt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Fu);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Fu);
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
        isPersistent: Fu
      }), t;
    }
    var qn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Fi = Nr(qn), Vr = bt({}, qn, {
      view: 0,
      detail: 0
    }), ca = Nr(Vr), xf, Zs, $l;
    function Ky(e) {
      e !== $l && ($l && e.type === "mousemove" ? (xf = e.screenX - $l.screenX, Zs = e.screenY - $l.screenY) : (xf = 0, Zs = 0), $l = e);
    }
    var hi = bt({}, Vr, {
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
      getModifierState: gn,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Ky(e), xf);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Zs;
      }
    }), cp = Nr(hi), fp = bt({}, hi, {
      dataTransfer: 0
    }), Bl = Nr(fp), dp = bt({}, Vr, {
      relatedTarget: 0
    }), fo = Nr(dp), Rh = bt({}, qn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), kh = Nr(Rh), pp = bt({}, qn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), bf = Nr(pp), Xy = bt({}, qn, {
      data: 0
    }), Th = Nr(Xy), Dh = Th, Nh = {
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
    }, ql = {
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
    function Jy(e) {
      if (e.key) {
        var t = Nh[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Ko(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? ql[e.keyCode] || "Unidentified" : "";
    }
    var Vu = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Mh(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Vu[e];
      return i ? !!a[i] : !1;
    }
    function gn(e) {
      return Mh;
    }
    var Zy = bt({}, Vr, {
      key: Jy,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: gn,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Ko(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Ko(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Lh = Nr(Zy), eg = bt({}, hi, {
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
    }), Oh = Nr(eg), jh = bt({}, Vr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: gn
    }), Ah = Nr(jh), tg = bt({}, qn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), qa = Nr(tg), vp = bt({}, hi, {
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
    }), ng = Nr(vp), Xo = [9, 13, 27, 32], ec = 229, po = Un && "CompositionEvent" in window, Jo = null;
    Un && "documentMode" in document && (Jo = document.documentMode);
    var hp = Un && "TextEvent" in window && !Jo, Rf = Un && (!po || Jo && Jo > 8 && Jo <= 11), Uh = 32, kf = String.fromCharCode(Uh);
    function rg() {
      vt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), vt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), vt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), vt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var mp = !1;
    function zh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Tf(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Df(e, t) {
      return e === "keydown" && t.keyCode === ec;
    }
    function yp(e, t) {
      switch (e) {
        case "keyup":
          return Xo.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== ec;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Nf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Ph(e) {
      return e.locale === "ko";
    }
    var Wl = !1;
    function gp(e, t, a, i, l) {
      var s, v;
      if (po ? s = Tf(t) : Wl ? yp(t, i) && (s = "onCompositionEnd") : Df(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Rf && !Ph(i) && (!Wl && s === "onCompositionStart" ? Wl = Qo(l) : s === "onCompositionEnd" && Wl && (v = co()));
      var y = qh(a, s);
      if (y.length > 0) {
        var g = new Th(s, t, null, i, l);
        if (e.push({
          event: g,
          listeners: y
        }), v)
          g.data = v;
        else {
          var b = Nf(i);
          b !== null && (g.data = b);
        }
      }
    }
    function Mf(e, t) {
      switch (e) {
        case "compositionend":
          return Nf(t);
        case "keypress":
          var a = t.which;
          return a !== Uh ? null : (mp = !0, kf);
        case "textInput":
          var i = t.data;
          return i === kf && mp ? null : i;
        default:
          return null;
      }
    }
    function _p(e, t) {
      if (Wl) {
        if (e === "compositionend" || !po && yp(e, t)) {
          var a = co();
          return wf(), Wl = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!zh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Rf && !Ph(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Lf(e, t, a, i, l) {
      var s;
      if (hp ? s = Mf(t, i) : s = _p(t, i), !s)
        return null;
      var v = qh(a, "onBeforeInput");
      if (v.length > 0) {
        var y = new Dh("onBeforeInput", "beforeinput", null, i, l);
        e.push({
          event: y,
          listeners: v
        }), y.data = s;
      }
    }
    function Ih(e, t, a, i, l, s, v) {
      gp(e, t, a, i, l), Lf(e, t, a, i, l);
    }
    var ag = {
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
    function tc(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!ag[e.type] : t === "textarea";
    }
    function ig(e) {
      if (!Un)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function nc() {
      vt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function Fh(e, t, a, i) {
      xu(i);
      var l = qh(t, "onChange");
      if (l.length > 0) {
        var s = new Fi("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: l
        });
      }
    }
    var Zo = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function o(e) {
      var t = [];
      Fh(t, n, e, jd(e)), Jv(u, t);
    }
    function u(e) {
      x_(e, 0);
    }
    function f(e) {
      var t = Pf(e);
      if (ki(t))
        return e;
    }
    function m(e, t) {
      if (e === "change")
        return t;
    }
    var C = !1;
    Un && (C = ig("input") && (!document.documentMode || document.documentMode > 9));
    function N(e, t) {
      Zo = e, n = t, Zo.attachEvent("onpropertychange", K);
    }
    function j() {
      Zo && (Zo.detachEvent("onpropertychange", K), Zo = null, n = null);
    }
    function K(e) {
      e.propertyName === "value" && f(n) && o(e);
    }
    function pe(e, t, a) {
      e === "focusin" ? (j(), N(t, a)) : e === "focusout" && j();
    }
    function me(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return f(n);
    }
    function fe(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Fe(e, t) {
      if (e === "click")
        return f(t);
    }
    function Ge(e, t) {
      if (e === "input" || e === "change")
        return f(t);
    }
    function Je(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || ot(e, "number", e.value);
    }
    function jn(e, t, a, i, l, s, v) {
      var y = a ? Pf(a) : window, g, b;
      if (r(y) ? g = m : tc(y) ? C ? g = Ge : (g = me, b = pe) : fe(y) && (g = Fe), g) {
        var T = g(t, a);
        if (T) {
          Fh(e, T, i, l);
          return;
        }
      }
      b && b(t, y, a), t === "focusout" && Je(y);
    }
    function H() {
      Xt("onMouseEnter", ["mouseout", "mouseover"]), Xt("onMouseLeave", ["mouseout", "mouseover"]), Xt("onPointerEnter", ["pointerout", "pointerover"]), Xt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function P(e, t, a, i, l, s, v) {
      var y = t === "mouseover" || t === "pointerover", g = t === "mouseout" || t === "pointerout";
      if (y && !gs(i)) {
        var b = i.relatedTarget || i.fromElement;
        if (b && (ic(b) || Op(b)))
          return;
      }
      if (!(!g && !y)) {
        var T;
        if (l.window === l)
          T = l;
        else {
          var I = l.ownerDocument;
          I ? T = I.defaultView || I.parentWindow : T = window;
        }
        var z, Y;
        if (g) {
          var X = i.relatedTarget || i.toElement;
          if (z = a, Y = X ? ic(X) : null, Y !== null) {
            var te = Sa(Y);
            (Y !== te || Y.tag !== $ && Y.tag !== re) && (Y = null);
          }
        } else
          z = null, Y = a;
        if (z !== Y) {
          var je = cp, lt = "onMouseLeave", et = "onMouseEnter", Pt = "mouse";
          (t === "pointerout" || t === "pointerover") && (je = Oh, lt = "onPointerLeave", et = "onPointerEnter", Pt = "pointer");
          var Ot = z == null ? T : Pf(z), B = Y == null ? T : Pf(Y), ne = new je(lt, Pt + "leave", z, i, l);
          ne.target = Ot, ne.relatedTarget = B;
          var q = null, ye = ic(l);
          if (ye === a) {
            var $e = new je(et, Pt + "enter", Y, i, l);
            $e.target = B, $e.relatedTarget = Ot, q = $e;
          }
          hw(e, ne, q, z, Y);
        }
      }
    }
    function W(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ve = typeof Object.is == "function" ? Object.is : W;
    function Qe(e, t) {
      if (ve(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var l = 0; l < a.length; l++) {
        var s = a[l];
        if (!Lr.call(t, s) || !ve(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function st(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function dt(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function yt(e, t) {
      for (var a = st(e), i = 0, l = 0; a; ) {
        if (a.nodeType === to) {
          if (l = i + a.textContent.length, i <= t && l >= t)
            return {
              node: a,
              offset: t - i
            };
          i = l;
        }
        a = st(dt(a));
      }
    }
    function or(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var l = i.anchorNode, s = i.anchorOffset, v = i.focusNode, y = i.focusOffset;
      try {
        l.nodeType, v.nodeType;
      } catch {
        return null;
      }
      return qt(e, l, s, v, y);
    }
    function qt(e, t, a, i, l) {
      var s = 0, v = -1, y = -1, g = 0, b = 0, T = e, I = null;
      e: for (; ; ) {
        for (var z = null; T === t && (a === 0 || T.nodeType === to) && (v = s + a), T === i && (l === 0 || T.nodeType === to) && (y = s + l), T.nodeType === to && (s += T.nodeValue.length), (z = T.firstChild) !== null; )
          I = T, T = z;
        for (; ; ) {
          if (T === e)
            break e;
          if (I === t && ++g === a && (v = s), I === i && ++b === l && (y = s), (z = T.nextSibling) !== null)
            break;
          T = I, I = T.parentNode;
        }
        T = z;
      }
      return v === -1 || y === -1 ? null : {
        start: v,
        end: y
      };
    }
    function el(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var l = i.getSelection(), s = e.textContent.length, v = Math.min(t.start, s), y = t.end === void 0 ? v : Math.min(t.end, s);
        if (!l.extend && v > y) {
          var g = y;
          y = v, v = g;
        }
        var b = yt(e, v), T = yt(e, y);
        if (b && T) {
          if (l.rangeCount === 1 && l.anchorNode === b.node && l.anchorOffset === b.offset && l.focusNode === T.node && l.focusOffset === T.offset)
            return;
          var I = a.createRange();
          I.setStart(b.node, b.offset), l.removeAllRanges(), v > y ? (l.addRange(I), l.extend(T.node, T.offset)) : (I.setEnd(T.node, T.offset), l.addRange(I));
        }
      }
    }
    function Vh(e) {
      return e && e.nodeType === to;
    }
    function p_(e, t) {
      return !e || !t ? !1 : e === t ? !0 : Vh(e) ? !1 : Vh(t) ? p_(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function XE(e) {
      return e && e.ownerDocument && p_(e.ownerDocument.documentElement, e);
    }
    function JE(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function v_() {
      for (var e = window, t = Aa(); t instanceof e.HTMLIFrameElement; ) {
        if (JE(t))
          e = t.contentWindow;
        else
          return t;
        t = Aa(e.document);
      }
      return t;
    }
    function og(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function ZE() {
      var e = v_();
      return {
        focusedElem: e,
        selectionRange: og(e) ? tw(e) : null
      };
    }
    function ew(e) {
      var t = v_(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && XE(a)) {
        i !== null && og(a) && nw(a, i);
        for (var l = [], s = a; s = s.parentNode; )
          s.nodeType === ea && l.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var v = 0; v < l.length; v++) {
          var y = l[v];
          y.element.scrollLeft = y.left, y.element.scrollTop = y.top;
        }
      }
    }
    function tw(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = or(e), t || {
        start: 0,
        end: 0
      };
    }
    function nw(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : el(e, t);
    }
    var rw = Un && "documentMode" in document && document.documentMode <= 11;
    function aw() {
      vt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Of = null, lg = null, Sp = null, ug = !1;
    function iw(e) {
      if ("selectionStart" in e && og(e))
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
    function ow(e) {
      return e.window === e ? e.document : e.nodeType === no ? e : e.ownerDocument;
    }
    function h_(e, t, a) {
      var i = ow(a);
      if (!(ug || Of == null || Of !== Aa(i))) {
        var l = iw(Of);
        if (!Sp || !Qe(Sp, l)) {
          Sp = l;
          var s = qh(lg, "onSelect");
          if (s.length > 0) {
            var v = new Fi("onSelect", "select", null, t, a);
            e.push({
              event: v,
              listeners: s
            }), v.target = Of;
          }
        }
      }
    }
    function lw(e, t, a, i, l, s, v) {
      var y = a ? Pf(a) : window;
      switch (t) {
        // Track the input node that has focus.
        case "focusin":
          (tc(y) || y.contentEditable === "true") && (Of = y, lg = a, Sp = null);
          break;
        case "focusout":
          Of = null, lg = null, Sp = null;
          break;
        // Don't fire the event while the user is dragging. This matches the
        // semantics of the native select event.
        case "mousedown":
          ug = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ug = !1, h_(e, i, l);
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
          if (rw)
            break;
        // falls through
        case "keydown":
        case "keyup":
          h_(e, i, l);
      }
    }
    function Hh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var jf = {
      animationend: Hh("Animation", "AnimationEnd"),
      animationiteration: Hh("Animation", "AnimationIteration"),
      animationstart: Hh("Animation", "AnimationStart"),
      transitionend: Hh("Transition", "TransitionEnd")
    }, sg = {}, m_ = {};
    Un && (m_ = document.createElement("div").style, "AnimationEvent" in window || (delete jf.animationend.animation, delete jf.animationiteration.animation, delete jf.animationstart.animation), "TransitionEvent" in window || delete jf.transitionend.transition);
    function $h(e) {
      if (sg[e])
        return sg[e];
      if (!jf[e])
        return e;
      var t = jf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in m_)
          return sg[e] = t[a];
      return e;
    }
    var y_ = $h("animationend"), g_ = $h("animationiteration"), __ = $h("animationstart"), S_ = $h("transitionend"), C_ = /* @__PURE__ */ new Map(), E_ = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Hu(e, t) {
      C_.set(e, t), vt(t, [e]);
    }
    function uw() {
      for (var e = 0; e < E_.length; e++) {
        var t = E_[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Hu(a, "on" + i);
      }
      Hu(y_, "onAnimationEnd"), Hu(g_, "onAnimationIteration"), Hu(__, "onAnimationStart"), Hu("dblclick", "onDoubleClick"), Hu("focusin", "onFocus"), Hu("focusout", "onBlur"), Hu(S_, "onTransitionEnd");
    }
    function sw(e, t, a, i, l, s, v) {
      var y = C_.get(t);
      if (y !== void 0) {
        var g = Fi, b = t;
        switch (t) {
          case "keypress":
            if (Ko(i) === 0)
              return;
          /* falls through */
          case "keydown":
          case "keyup":
            g = Lh;
            break;
          case "focusin":
            b = "focus", g = fo;
            break;
          case "focusout":
            b = "blur", g = fo;
            break;
          case "beforeblur":
          case "afterblur":
            g = fo;
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
            g = cp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Bl;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Ah;
            break;
          case y_:
          case g_:
          case __:
            g = kh;
            break;
          case S_:
            g = qa;
            break;
          case "scroll":
            g = ca;
            break;
          case "wheel":
            g = ng;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = bf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Oh;
            break;
        }
        var T = (s & Ua) !== 0;
        {
          var I = !T && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", z = pw(a, y, i.type, T, I);
          if (z.length > 0) {
            var Y = new g(y, b, null, i, l);
            e.push({
              event: Y,
              listeners: z
            });
          }
        }
      }
    }
    uw(), H(), nc(), aw(), rg();
    function cw(e, t, a, i, l, s, v) {
      sw(e, t, a, i, l, s);
      var y = (s & Od) === 0;
      y && (P(e, t, a, i, l), jn(e, t, a, i, l), lw(e, t, a, i, l), Ih(e, t, a, i, l));
    }
    var Cp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], cg = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Cp));
    function w_(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ni(i, t, void 0, e), e.currentTarget = null;
    }
    function fw(e, t, a) {
      var i;
      if (a)
        for (var l = t.length - 1; l >= 0; l--) {
          var s = t[l], v = s.instance, y = s.currentTarget, g = s.listener;
          if (v !== i && e.isPropagationStopped())
            return;
          w_(e, g, y), i = v;
        }
      else
        for (var b = 0; b < t.length; b++) {
          var T = t[b], I = T.instance, z = T.currentTarget, Y = T.listener;
          if (I !== i && e.isPropagationStopped())
            return;
          w_(e, Y, z), i = I;
        }
    }
    function x_(e, t) {
      for (var a = (t & Ua) !== 0, i = 0; i < e.length; i++) {
        var l = e[i], s = l.event, v = l.listeners;
        fw(s, v, a);
      }
      Cs();
    }
    function dw(e, t, a, i, l) {
      var s = jd(a), v = [];
      cw(v, e, i, a, s, t), x_(v, t);
    }
    function xn(e, t) {
      cg.has(e) || h('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = Hx(t), l = mw(e);
      i.has(l) || (b_(t, e, Lc, a), i.add(l));
    }
    function fg(e, t, a) {
      cg.has(e) && !t && h('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Ua), b_(a, e, i, t);
    }
    var Bh = "_reactListening" + Math.random().toString(36).slice(2);
    function Ep(e) {
      if (!e[Bh]) {
        e[Bh] = !0, rt.forEach(function(a) {
          a !== "selectionchange" && (cg.has(a) || fg(a, !1, e), fg(a, !0, e));
        });
        var t = e.nodeType === no ? e : e.ownerDocument;
        t !== null && (t[Bh] || (t[Bh] = !0, fg("selectionchange", !1, t)));
      }
    }
    function b_(e, t, a, i, l) {
      var s = hr(e, t, a), v = void 0;
      Ss && (t === "touchstart" || t === "touchmove" || t === "wheel") && (v = !0), e = e, i ? v !== void 0 ? sp(e, t, s, v) : sa(e, t, s) : v !== void 0 ? Pu(e, t, s, v) : Ks(e, t, s);
    }
    function R_(e, t) {
      return e === t || e.nodeType === Pn && e.parentNode === t;
    }
    function dg(e, t, a, i, l) {
      var s = i;
      if ((t & Ld) === 0 && (t & Lc) === 0) {
        var v = l;
        if (i !== null) {
          var y = i;
          e: for (; ; ) {
            if (y === null)
              return;
            var g = y.tag;
            if (g === A || g === V) {
              var b = y.stateNode.containerInfo;
              if (R_(b, v))
                break;
              if (g === V)
                for (var T = y.return; T !== null; ) {
                  var I = T.tag;
                  if (I === A || I === V) {
                    var z = T.stateNode.containerInfo;
                    if (R_(z, v))
                      return;
                  }
                  T = T.return;
                }
              for (; b !== null; ) {
                var Y = ic(b);
                if (Y === null)
                  return;
                var X = Y.tag;
                if (X === $ || X === re) {
                  y = s = Y;
                  continue e;
                }
                b = b.parentNode;
              }
            }
            y = y.return;
          }
        }
      }
      Jv(function() {
        return dw(e, t, a, s);
      });
    }
    function wp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function pw(e, t, a, i, l, s) {
      for (var v = t !== null ? t + "Capture" : null, y = i ? v : t, g = [], b = e, T = null; b !== null; ) {
        var I = b, z = I.stateNode, Y = I.tag;
        if (Y === $ && z !== null && (T = z, y !== null)) {
          var X = zo(b, y);
          X != null && g.push(wp(b, X, T));
        }
        if (l)
          break;
        b = b.return;
      }
      return g;
    }
    function qh(e, t) {
      for (var a = t + "Capture", i = [], l = e; l !== null; ) {
        var s = l, v = s.stateNode, y = s.tag;
        if (y === $ && v !== null) {
          var g = v, b = zo(l, a);
          b != null && i.unshift(wp(l, b, g));
          var T = zo(l, t);
          T != null && i.push(wp(l, T, g));
        }
        l = l.return;
      }
      return i;
    }
    function Af(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== $);
      return e || null;
    }
    function vw(e, t) {
      for (var a = e, i = t, l = 0, s = a; s; s = Af(s))
        l++;
      for (var v = 0, y = i; y; y = Af(y))
        v++;
      for (; l - v > 0; )
        a = Af(a), l--;
      for (; v - l > 0; )
        i = Af(i), v--;
      for (var g = l; g--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Af(a), i = Af(i);
      }
      return null;
    }
    function k_(e, t, a, i, l) {
      for (var s = t._reactName, v = [], y = a; y !== null && y !== i; ) {
        var g = y, b = g.alternate, T = g.stateNode, I = g.tag;
        if (b !== null && b === i)
          break;
        if (I === $ && T !== null) {
          var z = T;
          if (l) {
            var Y = zo(y, s);
            Y != null && v.unshift(wp(y, Y, z));
          } else if (!l) {
            var X = zo(y, s);
            X != null && v.push(wp(y, X, z));
          }
        }
        y = y.return;
      }
      v.length !== 0 && e.push({
        event: t,
        listeners: v
      });
    }
    function hw(e, t, a, i, l) {
      var s = i && l ? vw(i, l) : null;
      i !== null && k_(e, t, i, s, !1), l !== null && a !== null && k_(e, a, l, s, !0);
    }
    function mw(e, t) {
      return e + "__bubble";
    }
    var Wa = !1, xp = "dangerouslySetInnerHTML", Wh = "suppressContentEditableWarning", $u = "suppressHydrationWarning", T_ = "autoFocus", rc = "children", ac = "style", Yh = "__html", pg, Gh, bp, D_, Qh, N_, M_;
    pg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Gh = function(e, t) {
      Dd(e, t), Nc(e, t), Qv(e, t, {
        registrationNameDependencies: Le,
        possibleRegistrationNames: ct
      });
    }, N_ = Un && !document.documentMode, bp = function(e, t, a) {
      if (!Wa) {
        var i = Kh(a), l = Kh(t);
        l !== i && (Wa = !0, h("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(i)));
      }
    }, D_ = function(e) {
      if (!Wa) {
        Wa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), h("Extra attributes from the server: %s", t);
      }
    }, Qh = function(e, t) {
      t === !1 ? h("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : h("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, M_ = function(e, t) {
      var a = e.namespaceURI === eo ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var yw = /\r\n?/g, gw = /\u0000|\uFFFD/g;
    function Kh(e) {
      tr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(yw, `
`).replace(gw, "");
    }
    function Xh(e, t, a, i) {
      var l = Kh(t), s = Kh(e);
      if (s !== l && (i && (Wa || (Wa = !0, h('Text content did not match. Server: "%s" Client: "%s"', s, l))), a && we))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function L_(e) {
      return e.nodeType === no ? e : e.ownerDocument;
    }
    function _w() {
    }
    function Jh(e) {
      e.onclick = _w;
    }
    function Sw(e, t, a, i, l) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var v = i[s];
          if (s === ac)
            v && Object.freeze(v), $v(t, v);
          else if (s === xp) {
            var y = v ? v[Yh] : void 0;
            y != null && Mv(t, y);
          } else if (s === rc)
            if (typeof v == "string") {
              var g = e !== "textarea" || v !== "";
              g && Su(t, v);
            } else typeof v == "number" && Su(t, "" + v);
          else s === Wh || s === $u || s === T_ || (Le.hasOwnProperty(s) ? v != null && (typeof v != "function" && Qh(s, v), s === "onScroll" && xn("scroll", t)) : v != null && Or(t, s, v, l));
        }
    }
    function Cw(e, t, a, i) {
      for (var l = 0; l < t.length; l += 2) {
        var s = t[l], v = t[l + 1];
        s === ac ? $v(e, v) : s === xp ? Mv(e, v) : s === rc ? Su(e, v) : Or(e, s, v, i);
      }
    }
    function Ew(e, t, a, i) {
      var l, s = L_(a), v, y = i;
      if (y === eo && (y = Ed(e)), y === eo) {
        if (l = Ao(e, t), !l && e !== e.toLowerCase() && h("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var g = s.createElement("div");
          g.innerHTML = "<script><\/script>";
          var b = g.firstChild;
          v = g.removeChild(b);
        } else if (typeof t.is == "string")
          v = s.createElement(e, {
            is: t.is
          });
        else if (v = s.createElement(e), e === "select") {
          var T = v;
          t.multiple ? T.multiple = !0 : t.size && (T.size = t.size);
        }
      } else
        v = s.createElementNS(y, e);
      return y === eo && !l && Object.prototype.toString.call(v) === "[object HTMLUnknownElement]" && !Lr.call(pg, e) && (pg[e] = !0, h("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), v;
    }
    function ww(e, t) {
      return L_(t).createTextNode(e);
    }
    function xw(e, t, a, i) {
      var l = Ao(t, a);
      Gh(t, a);
      var s;
      switch (t) {
        case "dialog":
          xn("cancel", e), xn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          xn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var v = 0; v < Cp.length; v++)
            xn(Cp[v], e);
          s = a;
          break;
        case "source":
          xn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          xn("error", e), xn("load", e), s = a;
          break;
        case "details":
          xn("toggle", e), s = a;
          break;
        case "input":
          si(e, a), s = _u(e, a), xn("invalid", e);
          break;
        case "option":
          Ft(e, a), s = a;
          break;
        case "select":
          Sl(e, a), s = fs(e, a), xn("invalid", e);
          break;
        case "textarea":
          _d(e, a), s = gd(e, a), xn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Tc(t, s), Sw(t, e, i, s, l), t) {
        case "input":
          ui(e), G(e, a, !1);
          break;
        case "textarea":
          ui(e), Dv(e);
          break;
        case "option":
          fn(e, a);
          break;
        case "select":
          md(e, a);
          break;
        default:
          typeof s.onClick == "function" && Jh(e);
          break;
      }
    }
    function bw(e, t, a, i, l) {
      Gh(t, i);
      var s = null, v, y;
      switch (t) {
        case "input":
          v = _u(e, a), y = _u(e, i), s = [];
          break;
        case "select":
          v = fs(e, a), y = fs(e, i), s = [];
          break;
        case "textarea":
          v = gd(e, a), y = gd(e, i), s = [];
          break;
        default:
          v = a, y = i, typeof v.onClick != "function" && typeof y.onClick == "function" && Jh(e);
          break;
      }
      Tc(t, y);
      var g, b, T = null;
      for (g in v)
        if (!(y.hasOwnProperty(g) || !v.hasOwnProperty(g) || v[g] == null))
          if (g === ac) {
            var I = v[g];
            for (b in I)
              I.hasOwnProperty(b) && (T || (T = {}), T[b] = "");
          } else g === xp || g === rc || g === Wh || g === $u || g === T_ || (Le.hasOwnProperty(g) ? s || (s = []) : (s = s || []).push(g, null));
      for (g in y) {
        var z = y[g], Y = v?.[g];
        if (!(!y.hasOwnProperty(g) || z === Y || z == null && Y == null))
          if (g === ac)
            if (z && Object.freeze(z), Y) {
              for (b in Y)
                Y.hasOwnProperty(b) && (!z || !z.hasOwnProperty(b)) && (T || (T = {}), T[b] = "");
              for (b in z)
                z.hasOwnProperty(b) && Y[b] !== z[b] && (T || (T = {}), T[b] = z[b]);
            } else
              T || (s || (s = []), s.push(g, T)), T = z;
          else if (g === xp) {
            var X = z ? z[Yh] : void 0, te = Y ? Y[Yh] : void 0;
            X != null && te !== X && (s = s || []).push(g, X);
          } else g === rc ? (typeof z == "string" || typeof z == "number") && (s = s || []).push(g, "" + z) : g === Wh || g === $u || (Le.hasOwnProperty(g) ? (z != null && (typeof z != "function" && Qh(g, z), g === "onScroll" && xn("scroll", e)), !s && Y !== z && (s = [])) : (s = s || []).push(g, z));
      }
      return T && (Fy(T, y[ac]), (s = s || []).push(ac, T)), s;
    }
    function Rw(e, t, a, i, l) {
      a === "input" && l.type === "radio" && l.name != null && S(e, l);
      var s = Ao(a, i), v = Ao(a, l);
      switch (Cw(e, t, s, v), a) {
        case "input":
          L(e, l);
          break;
        case "textarea":
          Tv(e, l);
          break;
        case "select":
          bc(e, l);
          break;
      }
    }
    function kw(e) {
      {
        var t = e.toLowerCase();
        return ms.hasOwnProperty(t) && ms[t] || null;
      }
    }
    function Tw(e, t, a, i, l, s, v) {
      var y, g;
      switch (y = Ao(t, a), Gh(t, a), t) {
        case "dialog":
          xn("cancel", e), xn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          xn("load", e);
          break;
        case "video":
        case "audio":
          for (var b = 0; b < Cp.length; b++)
            xn(Cp[b], e);
          break;
        case "source":
          xn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          xn("error", e), xn("load", e);
          break;
        case "details":
          xn("toggle", e);
          break;
        case "input":
          si(e, a), xn("invalid", e);
          break;
        case "option":
          Ft(e, a);
          break;
        case "select":
          Sl(e, a), xn("invalid", e);
          break;
        case "textarea":
          _d(e, a), xn("invalid", e);
          break;
      }
      Tc(t, a);
      {
        g = /* @__PURE__ */ new Set();
        for (var T = e.attributes, I = 0; I < T.length; I++) {
          var z = T[I].name.toLowerCase();
          switch (z) {
            // Controlled attributes are not validated
            // TODO: Only ignore them on controlled tags.
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              g.add(T[I].name);
          }
        }
      }
      var Y = null;
      for (var X in a)
        if (a.hasOwnProperty(X)) {
          var te = a[X];
          if (X === rc)
            typeof te == "string" ? e.textContent !== te && (a[$u] !== !0 && Xh(e.textContent, te, s, v), Y = [rc, te]) : typeof te == "number" && e.textContent !== "" + te && (a[$u] !== !0 && Xh(e.textContent, te, s, v), Y = [rc, "" + te]);
          else if (Le.hasOwnProperty(X))
            te != null && (typeof te != "function" && Qh(X, te), X === "onScroll" && xn("scroll", e));
          else if (v && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof y == "boolean") {
            var je = void 0, lt = sn(X);
            if (a[$u] !== !0) {
              if (!(X === Wh || X === $u || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              X === "value" || X === "checked" || X === "selected")) {
                if (X === xp) {
                  var et = e.innerHTML, Pt = te ? te[Yh] : void 0;
                  if (Pt != null) {
                    var Ot = M_(e, Pt);
                    Ot !== et && bp(X, et, Ot);
                  }
                } else if (X === ac) {
                  if (g.delete(X), N_) {
                    var B = Py(te);
                    je = e.getAttribute("style"), B !== je && bp(X, je, B);
                  }
                } else if (y && !U)
                  g.delete(X.toLowerCase()), je = pl(e, X, te), te !== je && bp(X, je, te);
                else if (!_n(X, lt, y) && !nr(X, te, lt, y)) {
                  var ne = !1;
                  if (lt !== null)
                    g.delete(lt.attributeName), je = Ro(e, X, te, lt);
                  else {
                    var q = i;
                    if (q === eo && (q = Ed(t)), q === eo)
                      g.delete(X.toLowerCase());
                    else {
                      var ye = kw(X);
                      ye !== null && ye !== X && (ne = !0, g.delete(ye)), g.delete(X);
                    }
                    je = pl(e, X, te);
                  }
                  var $e = U;
                  !$e && te !== je && !ne && bp(X, je, te);
                }
              }
            }
          }
        }
      switch (v && // $FlowFixMe - Should be inferred as not undefined.
      g.size > 0 && a[$u] !== !0 && D_(g), t) {
        case "input":
          ui(e), G(e, a, !0);
          break;
        case "textarea":
          ui(e), Dv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Jh(e);
          break;
      }
      return Y;
    }
    function Dw(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function vg(e, t) {
      {
        if (Wa)
          return;
        Wa = !0, h("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function hg(e, t) {
      {
        if (Wa)
          return;
        Wa = !0, h('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function mg(e, t, a) {
      {
        if (Wa)
          return;
        Wa = !0, h("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function yg(e, t) {
      {
        if (t === "" || Wa)
          return;
        Wa = !0, h('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function Nw(e, t, a) {
      switch (t) {
        case "input":
          J(e, a);
          return;
        case "textarea":
          jy(e, a);
          return;
        case "select":
          yd(e, a);
          return;
      }
    }
    var Rp = function() {
    }, kp = function() {
    };
    {
      var Mw = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], O_ = [
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
      ], Lw = O_.concat(["button"]), Ow = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], j_ = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      kp = function(e, t) {
        var a = bt({}, e || j_), i = {
          tag: t
        };
        return O_.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), Lw.indexOf(t) !== -1 && (a.pTagInButtonScope = null), Mw.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var jw = function(e, t) {
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
            return Ow.indexOf(t) === -1;
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
      }, Aw = function(e, t) {
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
      }, A_ = {};
      Rp = function(e, t, a) {
        a = a || j_;
        var i = a.current, l = i && i.tag;
        t != null && (e != null && h("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = jw(e, l) ? null : i, v = s ? null : Aw(e, a), y = s || v;
        if (y) {
          var g = y.tag, b = !!s + "|" + e + "|" + g;
          if (!A_[b]) {
            A_[b] = !0;
            var T = e, I = "";
            if (e === "#text" ? /\S/.test(t) ? T = "Text nodes" : (T = "Whitespace text nodes", I = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : T = "<" + e + ">", s) {
              var z = "";
              g === "table" && e === "tr" && (z += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), h("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", T, g, I, z);
            } else
              h("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", T, g);
          }
        }
      };
    }
    var Zh = "suppressHydrationWarning", em = "$", tm = "/$", Tp = "$?", Dp = "$!", Uw = "style", gg = null, _g = null;
    function zw(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case no:
        case xd: {
          t = i === no ? "#document" : "#fragment";
          var l = e.documentElement;
          a = l ? l.namespaceURI : wd(null, "");
          break;
        }
        default: {
          var s = i === Pn ? e.parentNode : e, v = s.namespaceURI || null;
          t = s.tagName, a = wd(v, t);
          break;
        }
      }
      {
        var y = t.toLowerCase(), g = kp(null, y);
        return {
          namespace: a,
          ancestorInfo: g
        };
      }
    }
    function Pw(e, t, a) {
      {
        var i = e, l = wd(i.namespace, t), s = kp(i.ancestorInfo, t);
        return {
          namespace: l,
          ancestorInfo: s
        };
      }
    }
    function f6(e) {
      return e;
    }
    function Iw(e) {
      gg = Bn(), _g = ZE();
      var t = null;
      return Zn(!1), t;
    }
    function Fw(e) {
      ew(_g), Zn(gg), gg = null, _g = null;
    }
    function Vw(e, t, a, i, l) {
      var s;
      {
        var v = i;
        if (Rp(e, null, v.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var y = "" + t.children, g = kp(v.ancestorInfo, e);
          Rp(null, y, g);
        }
        s = v.namespace;
      }
      var b = Ew(e, t, a, s);
      return Lp(l, b), kg(b, t), b;
    }
    function Hw(e, t) {
      e.appendChild(t);
    }
    function $w(e, t, a, i, l) {
      switch (xw(e, t, a, i), t) {
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
    function Bw(e, t, a, i, l, s) {
      {
        var v = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var y = "" + i.children, g = kp(v.ancestorInfo, t);
          Rp(null, y, g);
        }
      }
      return bw(e, t, a, i);
    }
    function Sg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function qw(e, t, a, i) {
      {
        var l = a;
        Rp(null, e, l.ancestorInfo);
      }
      var s = ww(e, t);
      return Lp(i, s), s;
    }
    function Ww() {
      var e = window.event;
      return e === void 0 ? Ha : Ef(e.type);
    }
    var Cg = typeof setTimeout == "function" ? setTimeout : void 0, Yw = typeof clearTimeout == "function" ? clearTimeout : void 0, Eg = -1, U_ = typeof Promise == "function" ? Promise : void 0, Gw = typeof queueMicrotask == "function" ? queueMicrotask : typeof U_ < "u" ? function(e) {
      return U_.resolve(null).then(e).catch(Qw);
    } : Cg;
    function Qw(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Kw(e, t, a, i) {
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
    function Xw(e, t, a, i, l, s) {
      Rw(e, t, a, i, l), kg(e, l);
    }
    function z_(e) {
      Su(e, "");
    }
    function Jw(e, t, a) {
      e.nodeValue = a;
    }
    function Zw(e, t) {
      e.appendChild(t);
    }
    function ex(e, t) {
      var a;
      e.nodeType === Pn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Jh(a);
    }
    function tx(e, t, a) {
      e.insertBefore(t, a);
    }
    function nx(e, t, a) {
      e.nodeType === Pn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function rx(e, t) {
      e.removeChild(t);
    }
    function ax(e, t) {
      e.nodeType === Pn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function wg(e, t) {
      var a = t, i = 0;
      do {
        var l = a.nextSibling;
        if (e.removeChild(a), l && l.nodeType === Pn) {
          var s = l.data;
          if (s === tm)
            if (i === 0) {
              e.removeChild(l), Vl(t);
              return;
            } else
              i--;
          else (s === em || s === Tp || s === Dp) && i++;
        }
        a = l;
      } while (a);
      Vl(t);
    }
    function ix(e, t) {
      e.nodeType === Pn ? wg(e.parentNode, t) : e.nodeType === ea && wg(e, t), Vl(e);
    }
    function ox(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function lx(e) {
      e.nodeValue = "";
    }
    function ux(e, t) {
      e = e;
      var a = t[Uw], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = kc("display", i);
    }
    function sx(e, t) {
      e.nodeValue = t;
    }
    function cx(e) {
      e.nodeType === ea ? e.textContent = "" : e.nodeType === no && e.documentElement && e.removeChild(e.documentElement);
    }
    function fx(e, t, a) {
      return e.nodeType !== ea || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function dx(e, t) {
      return t === "" || e.nodeType !== to ? null : e;
    }
    function px(e) {
      return e.nodeType !== Pn ? null : e;
    }
    function P_(e) {
      return e.data === Tp;
    }
    function xg(e) {
      return e.data === Dp;
    }
    function vx(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, l;
      return t && (a = t.dgst, i = t.msg, l = t.stck), {
        message: i,
        digest: a,
        stack: l
      };
    }
    function hx(e, t) {
      e._reactRetry = t;
    }
    function nm(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === ea || t === to)
          break;
        if (t === Pn) {
          var a = e.data;
          if (a === em || a === Dp || a === Tp)
            break;
          if (a === tm)
            return null;
        }
      }
      return e;
    }
    function Np(e) {
      return nm(e.nextSibling);
    }
    function mx(e) {
      return nm(e.firstChild);
    }
    function yx(e) {
      return nm(e.firstChild);
    }
    function gx(e) {
      return nm(e.nextSibling);
    }
    function _x(e, t, a, i, l, s, v) {
      Lp(s, e), kg(e, a);
      var y;
      {
        var g = l;
        y = g.namespace;
      }
      var b = (s.mode & Dt) !== it;
      return Tw(e, t, a, y, i, b, v);
    }
    function Sx(e, t, a, i) {
      return Lp(a, e), a.mode & Dt, Dw(e, t);
    }
    function Cx(e, t) {
      Lp(t, e);
    }
    function Ex(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Pn) {
          var i = t.data;
          if (i === tm) {
            if (a === 0)
              return Np(t);
            a--;
          } else (i === em || i === Dp || i === Tp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function I_(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Pn) {
          var i = t.data;
          if (i === em || i === Dp || i === Tp) {
            if (a === 0)
              return t;
            a--;
          } else i === tm && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function wx(e) {
      Vl(e);
    }
    function xx(e) {
      Vl(e);
    }
    function bx(e) {
      return e !== "head" && e !== "body";
    }
    function Rx(e, t, a, i) {
      var l = !0;
      Xh(t.nodeValue, a, i, l);
    }
    function kx(e, t, a, i, l, s) {
      if (t[Zh] !== !0) {
        var v = !0;
        Xh(i.nodeValue, l, s, v);
      }
    }
    function Tx(e, t) {
      t.nodeType === ea ? vg(e, t) : t.nodeType === Pn || hg(e, t);
    }
    function Dx(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === ea ? vg(a, t) : t.nodeType === Pn || hg(a, t));
      }
    }
    function Nx(e, t, a, i, l) {
      (l || t[Zh] !== !0) && (i.nodeType === ea ? vg(a, i) : i.nodeType === Pn || hg(a, i));
    }
    function Mx(e, t, a) {
      mg(e, t);
    }
    function Lx(e, t) {
      yg(e, t);
    }
    function Ox(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && mg(i, t);
      }
    }
    function jx(e, t) {
      {
        var a = e.parentNode;
        a !== null && yg(a, t);
      }
    }
    function Ax(e, t, a, i, l, s) {
      (s || t[Zh] !== !0) && mg(a, i);
    }
    function Ux(e, t, a, i, l) {
      (l || t[Zh] !== !0) && yg(a, i);
    }
    function zx(e) {
      h("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Px(e) {
      Ep(e);
    }
    var Uf = Math.random().toString(36).slice(2), zf = "__reactFiber$" + Uf, bg = "__reactProps$" + Uf, Mp = "__reactContainer$" + Uf, Rg = "__reactEvents$" + Uf, Ix = "__reactListeners$" + Uf, Fx = "__reactHandles$" + Uf;
    function Vx(e) {
      delete e[zf], delete e[bg], delete e[Rg], delete e[Ix], delete e[Fx];
    }
    function Lp(e, t) {
      t[zf] = e;
    }
    function rm(e, t) {
      t[Mp] = e;
    }
    function F_(e) {
      e[Mp] = null;
    }
    function Op(e) {
      return !!e[Mp];
    }
    function ic(e) {
      var t = e[zf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Mp] || a[zf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var l = I_(e); l !== null; ) {
              var s = l[zf];
              if (s)
                return s;
              l = I_(l);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Bu(e) {
      var t = e[zf] || e[Mp];
      return t && (t.tag === $ || t.tag === re || t.tag === de || t.tag === A) ? t : null;
    }
    function Pf(e) {
      if (e.tag === $ || e.tag === re)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function am(e) {
      return e[bg] || null;
    }
    function kg(e, t) {
      e[bg] = t;
    }
    function Hx(e) {
      var t = e[Rg];
      return t === void 0 && (t = e[Rg] = /* @__PURE__ */ new Set()), t;
    }
    var V_ = {}, H_ = d.ReactDebugCurrentFrame;
    function im(e) {
      if (e) {
        var t = e._owner, a = Xi(e.type, e._source, t ? t.type : null);
        H_.setExtraStackFrame(a);
      } else
        H_.setExtraStackFrame(null);
    }
    function vo(e, t, a, i, l) {
      {
        var s = Function.call.bind(Lr);
        for (var v in e)
          if (s(e, v)) {
            var y = void 0;
            try {
              if (typeof e[v] != "function") {
                var g = Error((i || "React class") + ": " + a + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
              }
              y = e[v](t, v, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (b) {
              y = b;
            }
            y && !(y instanceof Error) && (im(l), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, v, typeof y), im(null)), y instanceof Error && !(y.message in V_) && (V_[y.message] = !0, im(l), h("Failed %s type: %s", a, y.message), im(null));
          }
      }
    }
    var Tg = [], om;
    om = [];
    var Yl = -1;
    function qu(e) {
      return {
        current: e
      };
    }
    function fa(e, t) {
      if (Yl < 0) {
        h("Unexpected pop.");
        return;
      }
      t !== om[Yl] && h("Unexpected Fiber popped."), e.current = Tg[Yl], Tg[Yl] = null, om[Yl] = null, Yl--;
    }
    function da(e, t, a) {
      Yl++, Tg[Yl] = e.current, om[Yl] = a, e.current = t;
    }
    var Dg;
    Dg = {};
    var mi = {};
    Object.freeze(mi);
    var Gl = qu(mi), tl = qu(!1), Ng = mi;
    function If(e, t, a) {
      return a && nl(t) ? Ng : Gl.current;
    }
    function $_(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Ff(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return mi;
        var l = e.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
          return l.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var v in i)
          s[v] = t[v];
        {
          var y = gt(e) || "Unknown";
          vo(i, s, "context", y);
        }
        return l && $_(e, t, s), s;
      }
    }
    function lm() {
      return tl.current;
    }
    function nl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function um(e) {
      fa(tl, e), fa(Gl, e);
    }
    function Mg(e) {
      fa(tl, e), fa(Gl, e);
    }
    function B_(e, t, a) {
      {
        if (Gl.current !== mi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        da(Gl, t, e), da(tl, a, e);
      }
    }
    function q_(e, t, a) {
      {
        var i = e.stateNode, l = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = gt(e) || "Unknown";
            Dg[s] || (Dg[s] = !0, h("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var v = i.getChildContext();
        for (var y in v)
          if (!(y in l))
            throw new Error((gt(e) || "Unknown") + '.getChildContext(): key "' + y + '" is not defined in childContextTypes.');
        {
          var g = gt(e) || "Unknown";
          vo(l, v, "child context", g);
        }
        return bt({}, a, v);
      }
    }
    function sm(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || mi;
        return Ng = Gl.current, da(Gl, a, e), da(tl, tl.current, e), !0;
      }
    }
    function W_(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var l = q_(e, t, Ng);
          i.__reactInternalMemoizedMergedChildContext = l, fa(tl, e), fa(Gl, e), da(Gl, l, e), da(tl, a, e);
        } else
          fa(tl, e), da(tl, a, e);
      }
    }
    function $x(e) {
      {
        if (!kl(e) || e.tag !== x)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case A:
              return t.stateNode.context;
            case x: {
              var a = t.type;
              if (nl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Wu = 0, cm = 1, Ql = null, Lg = !1, Og = !1;
    function Y_(e) {
      Ql === null ? Ql = [e] : Ql.push(e);
    }
    function Bx(e) {
      Lg = !0, Y_(e);
    }
    function G_() {
      Lg && Yu();
    }
    function Yu() {
      if (!Og && Ql !== null) {
        Og = !0;
        var e = 0, t = Ba();
        try {
          var a = !0, i = Ql;
          for ($n(Pr); e < i.length; e++) {
            var l = i[e];
            do
              l = l(a);
            while (l !== null);
          }
          Ql = null, Lg = !1;
        } catch (s) {
          throw Ql !== null && (Ql = Ql.slice(e + 1)), Ud(xs, Yu), s;
        } finally {
          $n(t), Og = !1;
        }
      }
      return null;
    }
    var Vf = [], Hf = 0, fm = null, dm = 0, Vi = [], Hi = 0, oc = null, Kl = 1, Xl = "";
    function qx(e) {
      return uc(), (e.flags & Mi) !== at;
    }
    function Wx(e) {
      return uc(), dm;
    }
    function Yx() {
      var e = Xl, t = Kl, a = t & ~Gx(t);
      return a.toString(32) + e;
    }
    function lc(e, t) {
      uc(), Vf[Hf++] = dm, Vf[Hf++] = fm, fm = e, dm = t;
    }
    function Q_(e, t, a) {
      uc(), Vi[Hi++] = Kl, Vi[Hi++] = Xl, Vi[Hi++] = oc, oc = e;
      var i = Kl, l = Xl, s = pm(i) - 1, v = i & ~(1 << s), y = a + 1, g = pm(t) + s;
      if (g > 30) {
        var b = s - s % 5, T = (1 << b) - 1, I = (v & T).toString(32), z = v >> b, Y = s - b, X = pm(t) + Y, te = y << Y, je = te | z, lt = I + l;
        Kl = 1 << X | je, Xl = lt;
      } else {
        var et = y << s, Pt = et | v, Ot = l;
        Kl = 1 << g | Pt, Xl = Ot;
      }
    }
    function jg(e) {
      uc();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        lc(e, a), Q_(e, a, i);
      }
    }
    function pm(e) {
      return 32 - Vn(e);
    }
    function Gx(e) {
      return 1 << pm(e) - 1;
    }
    function Ag(e) {
      for (; e === fm; )
        fm = Vf[--Hf], Vf[Hf] = null, dm = Vf[--Hf], Vf[Hf] = null;
      for (; e === oc; )
        oc = Vi[--Hi], Vi[Hi] = null, Xl = Vi[--Hi], Vi[Hi] = null, Kl = Vi[--Hi], Vi[Hi] = null;
    }
    function Qx() {
      return uc(), oc !== null ? {
        id: Kl,
        overflow: Xl
      } : null;
    }
    function Kx(e, t) {
      uc(), Vi[Hi++] = Kl, Vi[Hi++] = Xl, Vi[Hi++] = oc, Kl = t.id, Xl = t.overflow, oc = e;
    }
    function uc() {
      $r() || h("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Hr = null, $i = null, ho = !1, sc = !1, Gu = null;
    function Xx() {
      ho && h("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function K_() {
      sc = !0;
    }
    function Jx() {
      return sc;
    }
    function Zx(e) {
      var t = e.stateNode.containerInfo;
      return $i = yx(t), Hr = e, ho = !0, Gu = null, sc = !1, !0;
    }
    function eb(e, t, a) {
      return $i = gx(t), Hr = e, ho = !0, Gu = null, sc = !1, a !== null && Kx(e, a), !0;
    }
    function X_(e, t) {
      switch (e.tag) {
        case A: {
          Tx(e.stateNode.containerInfo, t);
          break;
        }
        case $: {
          var a = (e.mode & Dt) !== it;
          Nx(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case de: {
          var i = e.memoizedState;
          i.dehydrated !== null && Dx(i.dehydrated, t);
          break;
        }
      }
    }
    function J_(e, t) {
      X_(e, t);
      var a = aT();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= za) : i.push(a);
    }
    function Ug(e, t) {
      {
        if (sc)
          return;
        switch (e.tag) {
          case A: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case $:
                var i = t.type;
                t.pendingProps, Mx(a, i);
                break;
              case re:
                var l = t.pendingProps;
                Lx(a, l);
                break;
            }
            break;
          }
          case $: {
            var s = e.type, v = e.memoizedProps, y = e.stateNode;
            switch (t.tag) {
              case $: {
                var g = t.type, b = t.pendingProps, T = (e.mode & Dt) !== it;
                Ax(
                  s,
                  v,
                  y,
                  g,
                  b,
                  // TODO: Delete this argument when we remove the legacy root API.
                  T
                );
                break;
              }
              case re: {
                var I = t.pendingProps, z = (e.mode & Dt) !== it;
                Ux(
                  s,
                  v,
                  y,
                  I,
                  // TODO: Delete this argument when we remove the legacy root API.
                  z
                );
                break;
              }
            }
            break;
          }
          case de: {
            var Y = e.memoizedState, X = Y.dehydrated;
            if (X !== null) switch (t.tag) {
              case $:
                var te = t.type;
                t.pendingProps, Ox(X, te);
                break;
              case re:
                var je = t.pendingProps;
                jx(X, je);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function Z_(e, t) {
      t.flags = t.flags & ~na | Cn, Ug(e, t);
    }
    function e2(e, t) {
      switch (e.tag) {
        case $: {
          var a = e.type;
          e.pendingProps;
          var i = fx(t, a);
          return i !== null ? (e.stateNode = i, Hr = e, $i = mx(i), !0) : !1;
        }
        case re: {
          var l = e.pendingProps, s = dx(t, l);
          return s !== null ? (e.stateNode = s, Hr = e, $i = null, !0) : !1;
        }
        case de: {
          var v = px(t);
          if (v !== null) {
            var y = {
              dehydrated: v,
              treeContext: Qx(),
              retryLane: oa
            };
            e.memoizedState = y;
            var g = iT(v);
            return g.return = e, e.child = g, Hr = e, $i = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function zg(e) {
      return (e.mode & Dt) !== it && (e.flags & tt) === at;
    }
    function Pg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Ig(e) {
      if (ho) {
        var t = $i;
        if (!t) {
          zg(e) && (Ug(Hr, e), Pg()), Z_(Hr, e), ho = !1, Hr = e;
          return;
        }
        var a = t;
        if (!e2(e, t)) {
          zg(e) && (Ug(Hr, e), Pg()), t = Np(a);
          var i = Hr;
          if (!t || !e2(e, t)) {
            Z_(Hr, e), ho = !1, Hr = e;
            return;
          }
          J_(i, a);
        }
      }
    }
    function tb(e, t, a) {
      var i = e.stateNode, l = !sc, s = _x(i, e.type, e.memoizedProps, t, a, e, l);
      return e.updateQueue = s, s !== null;
    }
    function nb(e) {
      var t = e.stateNode, a = e.memoizedProps, i = Sx(t, a, e);
      if (i) {
        var l = Hr;
        if (l !== null)
          switch (l.tag) {
            case A: {
              var s = l.stateNode.containerInfo, v = (l.mode & Dt) !== it;
              Rx(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                v
              );
              break;
            }
            case $: {
              var y = l.type, g = l.memoizedProps, b = l.stateNode, T = (l.mode & Dt) !== it;
              kx(
                y,
                g,
                b,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                T
              );
              break;
            }
          }
      }
      return i;
    }
    function rb(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      Cx(a, e);
    }
    function ab(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Ex(a);
    }
    function t2(e) {
      for (var t = e.return; t !== null && t.tag !== $ && t.tag !== A && t.tag !== de; )
        t = t.return;
      Hr = t;
    }
    function vm(e) {
      if (e !== Hr)
        return !1;
      if (!ho)
        return t2(e), ho = !0, !1;
      if (e.tag !== A && (e.tag !== $ || bx(e.type) && !Sg(e.type, e.memoizedProps))) {
        var t = $i;
        if (t)
          if (zg(e))
            n2(e), Pg();
          else
            for (; t; )
              J_(e, t), t = Np(t);
      }
      return t2(e), e.tag === de ? $i = ab(e) : $i = Hr ? Np(e.stateNode) : null, !0;
    }
    function ib() {
      return ho && $i !== null;
    }
    function n2(e) {
      for (var t = $i; t; )
        X_(e, t), t = Np(t);
    }
    function $f() {
      Hr = null, $i = null, ho = !1, sc = !1;
    }
    function r2() {
      Gu !== null && (KS(Gu), Gu = null);
    }
    function $r() {
      return ho;
    }
    function Fg(e) {
      Gu === null ? Gu = [e] : Gu.push(e);
    }
    var ob = d.ReactCurrentBatchConfig, lb = null;
    function ub() {
      return ob.transition;
    }
    var mo = {
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
      var sb = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & rn && (t = a), a = a.return;
        return t;
      }, cc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, jp = [], Ap = [], Up = [], zp = [], Pp = [], Ip = [], fc = /* @__PURE__ */ new Set();
      mo.recordUnsafeLifecycleWarnings = function(e, t) {
        fc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && jp.push(e), e.mode & rn && typeof t.UNSAFE_componentWillMount == "function" && Ap.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Up.push(e), e.mode & rn && typeof t.UNSAFE_componentWillReceiveProps == "function" && zp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Pp.push(e), e.mode & rn && typeof t.UNSAFE_componentWillUpdate == "function" && Ip.push(e));
      }, mo.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        jp.length > 0 && (jp.forEach(function(z) {
          e.add(gt(z) || "Component"), fc.add(z.type);
        }), jp = []);
        var t = /* @__PURE__ */ new Set();
        Ap.length > 0 && (Ap.forEach(function(z) {
          t.add(gt(z) || "Component"), fc.add(z.type);
        }), Ap = []);
        var a = /* @__PURE__ */ new Set();
        Up.length > 0 && (Up.forEach(function(z) {
          a.add(gt(z) || "Component"), fc.add(z.type);
        }), Up = []);
        var i = /* @__PURE__ */ new Set();
        zp.length > 0 && (zp.forEach(function(z) {
          i.add(gt(z) || "Component"), fc.add(z.type);
        }), zp = []);
        var l = /* @__PURE__ */ new Set();
        Pp.length > 0 && (Pp.forEach(function(z) {
          l.add(gt(z) || "Component"), fc.add(z.type);
        }), Pp = []);
        var s = /* @__PURE__ */ new Set();
        if (Ip.length > 0 && (Ip.forEach(function(z) {
          s.add(gt(z) || "Component"), fc.add(z.type);
        }), Ip = []), t.size > 0) {
          var v = cc(t);
          h(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, v);
        }
        if (i.size > 0) {
          var y = cc(i);
          h(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, y);
        }
        if (s.size > 0) {
          var g = cc(s);
          h(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, g);
        }
        if (e.size > 0) {
          var b = cc(e);
          E(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
        if (a.size > 0) {
          var T = cc(a);
          E(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, T);
        }
        if (l.size > 0) {
          var I = cc(l);
          E(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, I);
        }
      };
      var hm = /* @__PURE__ */ new Map(), a2 = /* @__PURE__ */ new Set();
      mo.recordLegacyContextWarning = function(e, t) {
        var a = sb(e);
        if (a === null) {
          h("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!a2.has(e.type)) {
          var i = hm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], hm.set(a, i)), i.push(e));
        }
      }, mo.flushLegacyContextWarning = function() {
        hm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(gt(s) || "Component"), a2.add(s.type);
            });
            var l = cc(i);
            try {
              en(a), h(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l);
            } finally {
              hn();
            }
          }
        });
      }, mo.discardPendingWarnings = function() {
        jp = [], Ap = [], Up = [], zp = [], Pp = [], Ip = [], hm = /* @__PURE__ */ new Map();
      };
    }
    var Vg, Hg, $g, Bg, qg, i2 = function(e, t) {
    };
    Vg = !1, Hg = !1, $g = {}, Bg = {}, qg = {}, i2 = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = gt(t) || "Component";
        Bg[a] || (Bg[a] = !0, h('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function cb(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Fp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & rn || ee) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== x) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !cb(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var l = gt(e) || "Component";
          $g[l] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l, i), $g[l] = !0);
        }
        if (a._owner) {
          var s = a._owner, v;
          if (s) {
            var y = s;
            if (y.tag !== x)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            v = y.stateNode;
          }
          if (!v)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var g = v;
          _i(i, "ref");
          var b = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === b)
            return t.ref;
          var T = function(I) {
            var z = g.refs;
            I === null ? delete z[b] : z[b] = I;
          };
          return T._stringRef = b, T;
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
    function mm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function ym(e) {
      {
        var t = gt(e) || "Component";
        if (qg[t])
          return;
        qg[t] = !0, h("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function o2(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function l2(e) {
      function t(B, ne) {
        if (e) {
          var q = B.deletions;
          q === null ? (B.deletions = [ne], B.flags |= za) : q.push(ne);
        }
      }
      function a(B, ne) {
        if (!e)
          return null;
        for (var q = ne; q !== null; )
          t(B, q), q = q.sibling;
        return null;
      }
      function i(B, ne) {
        for (var q = /* @__PURE__ */ new Map(), ye = ne; ye !== null; )
          ye.key !== null ? q.set(ye.key, ye) : q.set(ye.index, ye), ye = ye.sibling;
        return q;
      }
      function l(B, ne) {
        var q = Sc(B, ne);
        return q.index = 0, q.sibling = null, q;
      }
      function s(B, ne, q) {
        if (B.index = q, !e)
          return B.flags |= Mi, ne;
        var ye = B.alternate;
        if (ye !== null) {
          var $e = ye.index;
          return $e < ne ? (B.flags |= Cn, ne) : $e;
        } else
          return B.flags |= Cn, ne;
      }
      function v(B) {
        return e && B.alternate === null && (B.flags |= Cn), B;
      }
      function y(B, ne, q, ye) {
        if (ne === null || ne.tag !== re) {
          var $e = F1(q, B.mode, ye);
          return $e.return = B, $e;
        } else {
          var ze = l(ne, q);
          return ze.return = B, ze;
        }
      }
      function g(B, ne, q, ye) {
        var $e = q.type;
        if ($e === Ci)
          return T(B, ne, q.props.children, ye, q.key);
        if (ne !== null && (ne.elementType === $e || // Keep this check inline so it only runs on the false path:
        dC(ne, q) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof $e == "object" && $e !== null && $e.$$typeof === _t && o2($e) === ne.type)) {
          var ze = l(ne, q.props);
          return ze.ref = Fp(B, ne, q), ze.return = B, ze._debugSource = q._source, ze._debugOwner = q._owner, ze;
        }
        var ht = I1(q, B.mode, ye);
        return ht.ref = Fp(B, ne, q), ht.return = B, ht;
      }
      function b(B, ne, q, ye) {
        if (ne === null || ne.tag !== V || ne.stateNode.containerInfo !== q.containerInfo || ne.stateNode.implementation !== q.implementation) {
          var $e = V1(q, B.mode, ye);
          return $e.return = B, $e;
        } else {
          var ze = l(ne, q.children || []);
          return ze.return = B, ze;
        }
      }
      function T(B, ne, q, ye, $e) {
        if (ne === null || ne.tag !== ie) {
          var ze = is(q, B.mode, ye, $e);
          return ze.return = B, ze;
        } else {
          var ht = l(ne, q);
          return ht.return = B, ht;
        }
      }
      function I(B, ne, q) {
        if (typeof ne == "string" && ne !== "" || typeof ne == "number") {
          var ye = F1("" + ne, B.mode, q);
          return ye.return = B, ye;
        }
        if (typeof ne == "object" && ne !== null) {
          switch (ne.$$typeof) {
            case jr: {
              var $e = I1(ne, B.mode, q);
              return $e.ref = Fp(B, null, ne), $e.return = B, $e;
            }
            case sr: {
              var ze = V1(ne, B.mode, q);
              return ze.return = B, ze;
            }
            case _t: {
              var ht = ne._payload, Ct = ne._init;
              return I(B, Ct(ht), q);
            }
          }
          if (kt(ne) || wt(ne)) {
            var on = is(ne, B.mode, q, null);
            return on.return = B, on;
          }
          mm(B, ne);
        }
        return typeof ne == "function" && ym(B), null;
      }
      function z(B, ne, q, ye) {
        var $e = ne !== null ? ne.key : null;
        if (typeof q == "string" && q !== "" || typeof q == "number")
          return $e !== null ? null : y(B, ne, "" + q, ye);
        if (typeof q == "object" && q !== null) {
          switch (q.$$typeof) {
            case jr:
              return q.key === $e ? g(B, ne, q, ye) : null;
            case sr:
              return q.key === $e ? b(B, ne, q, ye) : null;
            case _t: {
              var ze = q._payload, ht = q._init;
              return z(B, ne, ht(ze), ye);
            }
          }
          if (kt(q) || wt(q))
            return $e !== null ? null : T(B, ne, q, ye, null);
          mm(B, q);
        }
        return typeof q == "function" && ym(B), null;
      }
      function Y(B, ne, q, ye, $e) {
        if (typeof ye == "string" && ye !== "" || typeof ye == "number") {
          var ze = B.get(q) || null;
          return y(ne, ze, "" + ye, $e);
        }
        if (typeof ye == "object" && ye !== null) {
          switch (ye.$$typeof) {
            case jr: {
              var ht = B.get(ye.key === null ? q : ye.key) || null;
              return g(ne, ht, ye, $e);
            }
            case sr: {
              var Ct = B.get(ye.key === null ? q : ye.key) || null;
              return b(ne, Ct, ye, $e);
            }
            case _t:
              var on = ye._payload, Wt = ye._init;
              return Y(B, ne, q, Wt(on), $e);
          }
          if (kt(ye) || wt(ye)) {
            var er = B.get(q) || null;
            return T(ne, er, ye, $e, null);
          }
          mm(ne, ye);
        }
        return typeof ye == "function" && ym(ne), null;
      }
      function X(B, ne, q) {
        {
          if (typeof B != "object" || B === null)
            return ne;
          switch (B.$$typeof) {
            case jr:
            case sr:
              i2(B, q);
              var ye = B.key;
              if (typeof ye != "string")
                break;
              if (ne === null) {
                ne = /* @__PURE__ */ new Set(), ne.add(ye);
                break;
              }
              if (!ne.has(ye)) {
                ne.add(ye);
                break;
              }
              h("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", ye);
              break;
            case _t:
              var $e = B._payload, ze = B._init;
              X(ze($e), ne, q);
              break;
          }
        }
        return ne;
      }
      function te(B, ne, q, ye) {
        for (var $e = null, ze = 0; ze < q.length; ze++) {
          var ht = q[ze];
          $e = X(ht, $e, B);
        }
        for (var Ct = null, on = null, Wt = ne, er = 0, Yt = 0, Wn = null; Wt !== null && Yt < q.length; Yt++) {
          Wt.index > Yt ? (Wn = Wt, Wt = null) : Wn = Wt.sibling;
          var va = z(B, Wt, q[Yt], ye);
          if (va === null) {
            Wt === null && (Wt = Wn);
            break;
          }
          e && Wt && va.alternate === null && t(B, Wt), er = s(va, er, Yt), on === null ? Ct = va : on.sibling = va, on = va, Wt = Wn;
        }
        if (Yt === q.length) {
          if (a(B, Wt), $r()) {
            var Kr = Yt;
            lc(B, Kr);
          }
          return Ct;
        }
        if (Wt === null) {
          for (; Yt < q.length; Yt++) {
            var gi = I(B, q[Yt], ye);
            gi !== null && (er = s(gi, er, Yt), on === null ? Ct = gi : on.sibling = gi, on = gi);
          }
          if ($r()) {
            var Da = Yt;
            lc(B, Da);
          }
          return Ct;
        }
        for (var Na = i(B, Wt); Yt < q.length; Yt++) {
          var ha = Y(Na, B, Yt, q[Yt], ye);
          ha !== null && (e && ha.alternate !== null && Na.delete(ha.key === null ? Yt : ha.key), er = s(ha, er, Yt), on === null ? Ct = ha : on.sibling = ha, on = ha);
        }
        if (e && Na.forEach(function(ud) {
          return t(B, ud);
        }), $r()) {
          var au = Yt;
          lc(B, au);
        }
        return Ct;
      }
      function je(B, ne, q, ye) {
        var $e = wt(q);
        if (typeof $e != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          q[Symbol.toStringTag] === "Generator" && (Hg || h("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Hg = !0), q.entries === $e && (Vg || h("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Vg = !0);
          var ze = $e.call(q);
          if (ze)
            for (var ht = null, Ct = ze.next(); !Ct.done; Ct = ze.next()) {
              var on = Ct.value;
              ht = X(on, ht, B);
            }
        }
        var Wt = $e.call(q);
        if (Wt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var er = null, Yt = null, Wn = ne, va = 0, Kr = 0, gi = null, Da = Wt.next(); Wn !== null && !Da.done; Kr++, Da = Wt.next()) {
          Wn.index > Kr ? (gi = Wn, Wn = null) : gi = Wn.sibling;
          var Na = z(B, Wn, Da.value, ye);
          if (Na === null) {
            Wn === null && (Wn = gi);
            break;
          }
          e && Wn && Na.alternate === null && t(B, Wn), va = s(Na, va, Kr), Yt === null ? er = Na : Yt.sibling = Na, Yt = Na, Wn = gi;
        }
        if (Da.done) {
          if (a(B, Wn), $r()) {
            var ha = Kr;
            lc(B, ha);
          }
          return er;
        }
        if (Wn === null) {
          for (; !Da.done; Kr++, Da = Wt.next()) {
            var au = I(B, Da.value, ye);
            au !== null && (va = s(au, va, Kr), Yt === null ? er = au : Yt.sibling = au, Yt = au);
          }
          if ($r()) {
            var ud = Kr;
            lc(B, ud);
          }
          return er;
        }
        for (var gv = i(B, Wn); !Da.done; Kr++, Da = Wt.next()) {
          var cl = Y(gv, B, Kr, Da.value, ye);
          cl !== null && (e && cl.alternate !== null && gv.delete(cl.key === null ? Kr : cl.key), va = s(cl, va, Kr), Yt === null ? er = cl : Yt.sibling = cl, Yt = cl);
        }
        if (e && gv.forEach(function(UT) {
          return t(B, UT);
        }), $r()) {
          var AT = Kr;
          lc(B, AT);
        }
        return er;
      }
      function lt(B, ne, q, ye) {
        if (ne !== null && ne.tag === re) {
          a(B, ne.sibling);
          var $e = l(ne, q);
          return $e.return = B, $e;
        }
        a(B, ne);
        var ze = F1(q, B.mode, ye);
        return ze.return = B, ze;
      }
      function et(B, ne, q, ye) {
        for (var $e = q.key, ze = ne; ze !== null; ) {
          if (ze.key === $e) {
            var ht = q.type;
            if (ht === Ci) {
              if (ze.tag === ie) {
                a(B, ze.sibling);
                var Ct = l(ze, q.props.children);
                return Ct.return = B, Ct._debugSource = q._source, Ct._debugOwner = q._owner, Ct;
              }
            } else if (ze.elementType === ht || // Keep this check inline so it only runs on the false path:
            dC(ze, q) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof ht == "object" && ht !== null && ht.$$typeof === _t && o2(ht) === ze.type) {
              a(B, ze.sibling);
              var on = l(ze, q.props);
              return on.ref = Fp(B, ze, q), on.return = B, on._debugSource = q._source, on._debugOwner = q._owner, on;
            }
            a(B, ze);
            break;
          } else
            t(B, ze);
          ze = ze.sibling;
        }
        if (q.type === Ci) {
          var Wt = is(q.props.children, B.mode, ye, q.key);
          return Wt.return = B, Wt;
        } else {
          var er = I1(q, B.mode, ye);
          return er.ref = Fp(B, ne, q), er.return = B, er;
        }
      }
      function Pt(B, ne, q, ye) {
        for (var $e = q.key, ze = ne; ze !== null; ) {
          if (ze.key === $e)
            if (ze.tag === V && ze.stateNode.containerInfo === q.containerInfo && ze.stateNode.implementation === q.implementation) {
              a(B, ze.sibling);
              var ht = l(ze, q.children || []);
              return ht.return = B, ht;
            } else {
              a(B, ze);
              break;
            }
          else
            t(B, ze);
          ze = ze.sibling;
        }
        var Ct = V1(q, B.mode, ye);
        return Ct.return = B, Ct;
      }
      function Ot(B, ne, q, ye) {
        var $e = typeof q == "object" && q !== null && q.type === Ci && q.key === null;
        if ($e && (q = q.props.children), typeof q == "object" && q !== null) {
          switch (q.$$typeof) {
            case jr:
              return v(et(B, ne, q, ye));
            case sr:
              return v(Pt(B, ne, q, ye));
            case _t:
              var ze = q._payload, ht = q._init;
              return Ot(B, ne, ht(ze), ye);
          }
          if (kt(q))
            return te(B, ne, q, ye);
          if (wt(q))
            return je(B, ne, q, ye);
          mm(B, q);
        }
        return typeof q == "string" && q !== "" || typeof q == "number" ? v(lt(B, ne, "" + q, ye)) : (typeof q == "function" && ym(B), a(B, ne));
      }
      return Ot;
    }
    var Bf = l2(!0), u2 = l2(!1);
    function fb(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = Sc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = Sc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function db(e, t) {
      for (var a = e.child; a !== null; )
        Zk(a, t), a = a.sibling;
    }
    var Wg = qu(null), Yg;
    Yg = {};
    var gm = null, qf = null, Gg = null, _m = !1;
    function Sm() {
      gm = null, qf = null, Gg = null, _m = !1;
    }
    function s2() {
      _m = !0;
    }
    function c2() {
      _m = !1;
    }
    function f2(e, t, a) {
      da(Wg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Yg && h("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Yg;
    }
    function Qg(e, t) {
      var a = Wg.current;
      fa(Wg, t), e._currentValue = a;
    }
    function Kg(e, t, a) {
      for (var i = e; i !== null; ) {
        var l = i.alternate;
        if (Fl(i.childLanes, t) ? l !== null && !Fl(l.childLanes, t) && (l.childLanes = xt(l.childLanes, t)) : (i.childLanes = xt(i.childLanes, t), l !== null && (l.childLanes = xt(l.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && h("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function pb(e, t, a) {
      vb(e, t, a);
    }
    function vb(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var l = void 0, s = i.dependencies;
        if (s !== null) {
          l = i.child;
          for (var v = s.firstContext; v !== null; ) {
            if (v.context === t) {
              if (i.tag === x) {
                var y = Ps(a), g = Jl(ln, y);
                g.tag = Em;
                var b = i.updateQueue;
                if (b !== null) {
                  var T = b.shared, I = T.pending;
                  I === null ? g.next = g : (g.next = I.next, I.next = g), T.pending = g;
                }
              }
              i.lanes = xt(i.lanes, a);
              var z = i.alternate;
              z !== null && (z.lanes = xt(z.lanes, a)), Kg(i.return, a, e), s.lanes = xt(s.lanes, a);
              break;
            }
            v = v.next;
          }
        } else if (i.tag === ge)
          l = i.type === e.type ? null : i.child;
        else if (i.tag === ut) {
          var Y = i.return;
          if (Y === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          Y.lanes = xt(Y.lanes, a);
          var X = Y.alternate;
          X !== null && (X.lanes = xt(X.lanes, a)), Kg(Y, a, e), l = i.sibling;
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
            var te = l.sibling;
            if (te !== null) {
              te.return = l.return, l = te;
              break;
            }
            l = l.return;
          }
        i = l;
      }
    }
    function Wf(e, t) {
      gm = e, qf = null, Gg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (la(a.lanes, t) && tv(), a.firstContext = null);
      }
    }
    function lr(e) {
      _m && h("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Gg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (qf === null) {
          if (gm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          qf = a, gm.dependencies = {
            lanes: se,
            firstContext: a
          };
        } else
          qf = qf.next = a;
      }
      return t;
    }
    var dc = null;
    function Xg(e) {
      dc === null ? dc = [e] : dc.push(e);
    }
    function hb() {
      if (dc !== null) {
        for (var e = 0; e < dc.length; e++) {
          var t = dc[e], a = t.interleaved;
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
        dc = null;
      }
    }
    function d2(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, Xg(t)) : (a.next = l.next, l.next = a), t.interleaved = a, Cm(e, i);
    }
    function mb(e, t, a, i) {
      var l = t.interleaved;
      l === null ? (a.next = a, Xg(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
    }
    function yb(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, Xg(t)) : (a.next = l.next, l.next = a), t.interleaved = a, Cm(e, i);
    }
    function Ya(e, t) {
      return Cm(e, t);
    }
    var gb = Cm;
    function Cm(e, t) {
      e.lanes = xt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = xt(a.lanes, t)), a === null && (e.flags & (Cn | na)) !== at && uC(e);
      for (var i = e, l = e.return; l !== null; )
        l.childLanes = xt(l.childLanes, t), a = l.alternate, a !== null ? a.childLanes = xt(a.childLanes, t) : (l.flags & (Cn | na)) !== at && uC(e), i = l, l = l.return;
      if (i.tag === A) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var p2 = 0, v2 = 1, Em = 2, Jg = 3, wm = !1, Zg, xm;
    Zg = !1, xm = null;
    function e0(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: se
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function h2(e, t) {
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
    function Jl(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: p2,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Qu(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var l = i.shared;
      if (xm === l && !Zg && (h("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Zg = !0), mk()) {
        var s = l.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), l.pending = t, gb(e, a);
      } else
        return yb(e, l, t, a);
    }
    function bm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var l = i.shared;
        if (Zd(a)) {
          var s = l.lanes;
          s = tp(s, e.pendingLanes);
          var v = xt(s, a);
          l.lanes = v, gf(e, v);
        }
      }
    }
    function t0(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var l = i.updateQueue;
        if (a === l) {
          var s = null, v = null, y = a.firstBaseUpdate;
          if (y !== null) {
            var g = y;
            do {
              var b = {
                eventTime: g.eventTime,
                lane: g.lane,
                tag: g.tag,
                payload: g.payload,
                callback: g.callback,
                next: null
              };
              v === null ? s = v = b : (v.next = b, v = b), g = g.next;
            } while (g !== null);
            v === null ? s = v = t : (v.next = t, v = t);
          } else
            s = v = t;
          a = {
            baseState: l.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: v,
            shared: l.shared,
            effects: l.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var T = a.lastBaseUpdate;
      T === null ? a.firstBaseUpdate = t : T.next = t, a.lastBaseUpdate = t;
    }
    function _b(e, t, a, i, l, s) {
      switch (a.tag) {
        case v2: {
          var v = a.payload;
          if (typeof v == "function") {
            s2();
            var y = v.call(s, i, l);
            {
              if (e.mode & rn) {
                En(!0);
                try {
                  v.call(s, i, l);
                } finally {
                  En(!1);
                }
              }
              c2();
            }
            return y;
          }
          return v;
        }
        case Jg:
          e.flags = e.flags & ~rr | tt;
        // Intentional fallthrough
        case p2: {
          var g = a.payload, b;
          if (typeof g == "function") {
            s2(), b = g.call(s, i, l);
            {
              if (e.mode & rn) {
                En(!0);
                try {
                  g.call(s, i, l);
                } finally {
                  En(!1);
                }
              }
              c2();
            }
          } else
            b = g;
          return b == null ? i : bt({}, i, b);
        }
        case Em:
          return wm = !0, i;
      }
      return i;
    }
    function Rm(e, t, a, i) {
      var l = e.updateQueue;
      wm = !1, xm = l.shared;
      var s = l.firstBaseUpdate, v = l.lastBaseUpdate, y = l.shared.pending;
      if (y !== null) {
        l.shared.pending = null;
        var g = y, b = g.next;
        g.next = null, v === null ? s = b : v.next = b, v = g;
        var T = e.alternate;
        if (T !== null) {
          var I = T.updateQueue, z = I.lastBaseUpdate;
          z !== v && (z === null ? I.firstBaseUpdate = b : z.next = b, I.lastBaseUpdate = g);
        }
      }
      if (s !== null) {
        var Y = l.baseState, X = se, te = null, je = null, lt = null, et = s;
        do {
          var Pt = et.lane, Ot = et.eventTime;
          if (Fl(i, Pt)) {
            if (lt !== null) {
              var ne = {
                eventTime: Ot,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Vt,
                tag: et.tag,
                payload: et.payload,
                callback: et.callback,
                next: null
              };
              lt = lt.next = ne;
            }
            Y = _b(e, l, et, Y, t, a);
            var q = et.callback;
            if (q !== null && // If the update was already committed, we should not queue its
            // callback again.
            et.lane !== Vt) {
              e.flags |= dn;
              var ye = l.effects;
              ye === null ? l.effects = [et] : ye.push(et);
            }
          } else {
            var B = {
              eventTime: Ot,
              lane: Pt,
              tag: et.tag,
              payload: et.payload,
              callback: et.callback,
              next: null
            };
            lt === null ? (je = lt = B, te = Y) : lt = lt.next = B, X = xt(X, Pt);
          }
          if (et = et.next, et === null) {
            if (y = l.shared.pending, y === null)
              break;
            var $e = y, ze = $e.next;
            $e.next = null, et = ze, l.lastBaseUpdate = $e, l.shared.pending = null;
          }
        } while (!0);
        lt === null && (te = Y), l.baseState = te, l.firstBaseUpdate = je, l.lastBaseUpdate = lt;
        var ht = l.shared.interleaved;
        if (ht !== null) {
          var Ct = ht;
          do
            X = xt(X, Ct.lane), Ct = Ct.next;
          while (Ct !== ht);
        } else s === null && (l.shared.lanes = se);
        pv(X), e.lanes = X, e.memoizedState = Y;
      }
      xm = null;
    }
    function Sb(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function m2() {
      wm = !1;
    }
    function km() {
      return wm;
    }
    function y2(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l], v = s.callback;
          v !== null && (s.callback = null, Sb(v, a));
        }
    }
    var Vp = {}, Ku = qu(Vp), Hp = qu(Vp), Tm = qu(Vp);
    function Dm(e) {
      if (e === Vp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function g2() {
      var e = Dm(Tm.current);
      return e;
    }
    function n0(e, t) {
      da(Tm, t, e), da(Hp, e, e), da(Ku, Vp, e);
      var a = zw(t);
      fa(Ku, e), da(Ku, a, e);
    }
    function Yf(e) {
      fa(Ku, e), fa(Hp, e), fa(Tm, e);
    }
    function r0() {
      var e = Dm(Ku.current);
      return e;
    }
    function _2(e) {
      Dm(Tm.current);
      var t = Dm(Ku.current), a = Pw(t, e.type);
      t !== a && (da(Hp, e, e), da(Ku, a, e));
    }
    function a0(e) {
      Hp.current === e && (fa(Ku, e), fa(Hp, e));
    }
    var Cb = 0, S2 = 1, C2 = 1, $p = 2, yo = qu(Cb);
    function i0(e, t) {
      return (e & t) !== 0;
    }
    function Gf(e) {
      return e & S2;
    }
    function o0(e, t) {
      return e & S2 | t;
    }
    function Eb(e, t) {
      return e | t;
    }
    function Xu(e, t) {
      da(yo, t, e);
    }
    function Qf(e) {
      fa(yo, e);
    }
    function wb(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Nm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === de) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || P_(i) || xg(i))
              return t;
          }
        } else if (t.tag === Ee && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var l = (t.flags & tt) !== at;
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
    var Ga = (
      /*   */
      0
    ), mr = (
      /* */
      1
    ), rl = (
      /*  */
      2
    ), yr = (
      /*    */
      4
    ), Br = (
      /*   */
      8
    ), l0 = [];
    function u0() {
      for (var e = 0; e < l0.length; e++) {
        var t = l0[e];
        t._workInProgressVersionPrimary = null;
      }
      l0.length = 0;
    }
    function xb(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Ve = d.ReactCurrentDispatcher, Bp = d.ReactCurrentBatchConfig, s0, Kf;
    s0 = /* @__PURE__ */ new Set();
    var pc = se, an = null, gr = null, _r = null, Mm = !1, qp = !1, Wp = 0, bb = 0, Rb = 25, ae = null, Bi = null, Ju = -1, c0 = !1;
    function Kt() {
      {
        var e = ae;
        Bi === null ? Bi = [e] : Bi.push(e);
      }
    }
    function Te() {
      {
        var e = ae;
        Bi !== null && (Ju++, Bi[Ju] !== e && kb(e));
      }
    }
    function Xf(e) {
      e != null && !kt(e) && h("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ae, typeof e);
    }
    function kb(e) {
      {
        var t = gt(an);
        if (!s0.has(t) && (s0.add(t), Bi !== null)) {
          for (var a = "", i = 30, l = 0; l <= Ju; l++) {
            for (var s = Bi[l], v = l === Ju ? e : s, y = l + 1 + ". " + s; y.length < i; )
              y += " ";
            y += v + `
`, a += y;
          }
          h(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function pa() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function f0(e, t) {
      if (c0)
        return !1;
      if (t === null)
        return h("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ae), !1;
      e.length !== t.length && h(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ae, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!ve(e[a], t[a]))
          return !1;
      return !0;
    }
    function Jf(e, t, a, i, l, s) {
      pc = s, an = t, Bi = e !== null ? e._debugHookTypes : null, Ju = -1, c0 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = se, e !== null && e.memoizedState !== null ? Ve.current = $2 : Bi !== null ? Ve.current = H2 : Ve.current = V2;
      var v = a(i, l);
      if (qp) {
        var y = 0;
        do {
          if (qp = !1, Wp = 0, y >= Rb)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          y += 1, c0 = !1, gr = null, _r = null, t.updateQueue = null, Ju = -1, Ve.current = B2, v = a(i, l);
        } while (qp);
      }
      Ve.current = Bm, t._debugHookTypes = Bi;
      var g = gr !== null && gr.next !== null;
      if (pc = se, an = null, gr = null, _r = null, ae = null, Bi = null, Ju = -1, e !== null && (e.flags & Fn) !== (t.flags & Fn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Dt) !== it && h("Internal React error: Expected static flag was missing. Please notify the React team."), Mm = !1, g)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return v;
    }
    function Zf() {
      var e = Wp !== 0;
      return Wp = 0, e;
    }
    function E2(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Bt) !== it ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = Is(e.lanes, a);
    }
    function w2() {
      if (Ve.current = Bm, Mm) {
        for (var e = an.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Mm = !1;
      }
      pc = se, an = null, gr = null, _r = null, Bi = null, Ju = -1, ae = null, U2 = !1, qp = !1, Wp = 0;
    }
    function al() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return _r === null ? an.memoizedState = _r = e : _r = _r.next = e, _r;
    }
    function qi() {
      var e;
      if (gr === null) {
        var t = an.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = gr.next;
      var a;
      if (_r === null ? a = an.memoizedState : a = _r.next, a !== null)
        _r = a, a = _r.next, gr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        gr = e;
        var i = {
          memoizedState: gr.memoizedState,
          baseState: gr.baseState,
          baseQueue: gr.baseQueue,
          queue: gr.queue,
          next: null
        };
        _r === null ? an.memoizedState = _r = i : _r = _r.next = i;
      }
      return _r;
    }
    function x2() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function d0(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function p0(e, t, a) {
      var i = al(), l;
      a !== void 0 ? l = a(t) : l = t, i.memoizedState = i.baseState = l;
      var s = {
        pending: null,
        interleaved: null,
        lanes: se,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      };
      i.queue = s;
      var v = s.dispatch = Mb.bind(null, an, s);
      return [i.memoizedState, v];
    }
    function v0(e, t, a) {
      var i = qi(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = gr, v = s.baseQueue, y = l.pending;
      if (y !== null) {
        if (v !== null) {
          var g = v.next, b = y.next;
          v.next = b, y.next = g;
        }
        s.baseQueue !== v && h("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = v = y, l.pending = null;
      }
      if (v !== null) {
        var T = v.next, I = s.baseState, z = null, Y = null, X = null, te = T;
        do {
          var je = te.lane;
          if (Fl(pc, je)) {
            if (X !== null) {
              var et = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Vt,
                action: te.action,
                hasEagerState: te.hasEagerState,
                eagerState: te.eagerState,
                next: null
              };
              X = X.next = et;
            }
            if (te.hasEagerState)
              I = te.eagerState;
            else {
              var Pt = te.action;
              I = e(I, Pt);
            }
          } else {
            var lt = {
              lane: je,
              action: te.action,
              hasEagerState: te.hasEagerState,
              eagerState: te.eagerState,
              next: null
            };
            X === null ? (Y = X = lt, z = I) : X = X.next = lt, an.lanes = xt(an.lanes, je), pv(je);
          }
          te = te.next;
        } while (te !== null && te !== T);
        X === null ? z = I : X.next = Y, ve(I, i.memoizedState) || tv(), i.memoizedState = I, i.baseState = z, i.baseQueue = X, l.lastRenderedState = I;
      }
      var Ot = l.interleaved;
      if (Ot !== null) {
        var B = Ot;
        do {
          var ne = B.lane;
          an.lanes = xt(an.lanes, ne), pv(ne), B = B.next;
        } while (B !== Ot);
      } else v === null && (l.lanes = se);
      var q = l.dispatch;
      return [i.memoizedState, q];
    }
    function h0(e, t, a) {
      var i = qi(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = l.dispatch, v = l.pending, y = i.memoizedState;
      if (v !== null) {
        l.pending = null;
        var g = v.next, b = g;
        do {
          var T = b.action;
          y = e(y, T), b = b.next;
        } while (b !== g);
        ve(y, i.memoizedState) || tv(), i.memoizedState = y, i.baseQueue === null && (i.baseState = y), l.lastRenderedState = y;
      }
      return [y, s];
    }
    function d6(e, t, a) {
    }
    function p6(e, t, a) {
    }
    function m0(e, t, a) {
      var i = an, l = al(), s, v = $r();
      if (v) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Kf || s !== a() && (h("The result of getServerSnapshot should be cached to avoid an infinite loop"), Kf = !0);
      } else {
        if (s = t(), !Kf) {
          var y = t();
          ve(s, y) || (h("The result of getSnapshot should be cached to avoid an infinite loop"), Kf = !0);
        }
        var g = sy();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        mf(g, pc) || b2(i, t, s);
      }
      l.memoizedState = s;
      var b = {
        value: s,
        getSnapshot: t
      };
      return l.queue = b, Um(k2.bind(null, i, b, e), [e]), i.flags |= ta, Yp(mr | Br, R2.bind(null, i, b, s, t), void 0, null), s;
    }
    function Lm(e, t, a) {
      var i = an, l = qi(), s = t();
      if (!Kf) {
        var v = t();
        ve(s, v) || (h("The result of getSnapshot should be cached to avoid an infinite loop"), Kf = !0);
      }
      var y = l.memoizedState, g = !ve(y, s);
      g && (l.memoizedState = s, tv());
      var b = l.queue;
      if (Qp(k2.bind(null, i, b, e), [e]), b.getSnapshot !== t || g || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      _r !== null && _r.memoizedState.tag & mr) {
        i.flags |= ta, Yp(mr | Br, R2.bind(null, i, b, s, t), void 0, null);
        var T = sy();
        if (T === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        mf(T, pc) || b2(i, t, s);
      }
      return s;
    }
    function b2(e, t, a) {
      e.flags |= Du;
      var i = {
        getSnapshot: t,
        value: a
      }, l = an.updateQueue;
      if (l === null)
        l = x2(), an.updateQueue = l, l.stores = [i];
      else {
        var s = l.stores;
        s === null ? l.stores = [i] : s.push(i);
      }
    }
    function R2(e, t, a, i) {
      t.value = a, t.getSnapshot = i, T2(t) && D2(e);
    }
    function k2(e, t, a) {
      var i = function() {
        T2(t) && D2(e);
      };
      return a(i);
    }
    function T2(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !ve(a, i);
      } catch {
        return !0;
      }
    }
    function D2(e) {
      var t = Ya(e, pt);
      t !== null && wr(t, e, pt, ln);
    }
    function Om(e) {
      var t = al();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: se,
        dispatch: null,
        lastRenderedReducer: d0,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Lb.bind(null, an, a);
      return [t.memoizedState, i];
    }
    function y0(e) {
      return v0(d0);
    }
    function g0(e) {
      return h0(d0);
    }
    function Yp(e, t, a, i) {
      var l = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = an.updateQueue;
      if (s === null)
        s = x2(), an.updateQueue = s, s.lastEffect = l.next = l;
      else {
        var v = s.lastEffect;
        if (v === null)
          s.lastEffect = l.next = l;
        else {
          var y = v.next;
          v.next = l, l.next = y, s.lastEffect = l;
        }
      }
      return l;
    }
    function _0(e) {
      var t = al();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function jm(e) {
      var t = qi();
      return t.memoizedState;
    }
    function Gp(e, t, a, i) {
      var l = al(), s = i === void 0 ? null : i;
      an.flags |= e, l.memoizedState = Yp(mr | t, a, void 0, s);
    }
    function Am(e, t, a, i) {
      var l = qi(), s = i === void 0 ? null : i, v = void 0;
      if (gr !== null) {
        var y = gr.memoizedState;
        if (v = y.destroy, s !== null) {
          var g = y.deps;
          if (f0(s, g)) {
            l.memoizedState = Yp(t, a, v, s);
            return;
          }
        }
      }
      an.flags |= e, l.memoizedState = Yp(mr | t, a, v, s);
    }
    function Um(e, t) {
      return (an.mode & Bt) !== it ? Gp(Li | ta | Hc, Br, e, t) : Gp(ta | Hc, Br, e, t);
    }
    function Qp(e, t) {
      return Am(ta, Br, e, t);
    }
    function S0(e, t) {
      return Gp(At, rl, e, t);
    }
    function zm(e, t) {
      return Am(At, rl, e, t);
    }
    function C0(e, t) {
      var a = At;
      return a |= ao, (an.mode & Bt) !== it && (a |= Io), Gp(a, yr, e, t);
    }
    function Pm(e, t) {
      return Am(At, yr, e, t);
    }
    function N2(e, t) {
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
    function E0(e, t, a) {
      typeof t != "function" && h("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, l = At;
      return l |= ao, (an.mode & Bt) !== it && (l |= Io), Gp(l, yr, N2.bind(null, t, e), i);
    }
    function Im(e, t, a) {
      typeof t != "function" && h("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Am(At, yr, N2.bind(null, t, e), i);
    }
    function Tb(e, t) {
    }
    var Fm = Tb;
    function w0(e, t) {
      var a = al(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Vm(e, t) {
      var a = qi(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (f0(i, s))
          return l[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function x0(e, t) {
      var a = al(), i = t === void 0 ? null : t, l = e();
      return a.memoizedState = [l, i], l;
    }
    function Hm(e, t) {
      var a = qi(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (f0(i, s))
          return l[0];
      }
      var v = e();
      return a.memoizedState = [v, i], v;
    }
    function b0(e) {
      var t = al();
      return t.memoizedState = e, e;
    }
    function M2(e) {
      var t = qi(), a = gr, i = a.memoizedState;
      return O2(t, i, e);
    }
    function L2(e) {
      var t = qi();
      if (gr === null)
        return t.memoizedState = e, e;
      var a = gr.memoizedState;
      return O2(t, a, e);
    }
    function O2(e, t, a) {
      var i = !Xd(pc);
      if (i) {
        if (!ve(a, t)) {
          var l = ep();
          an.lanes = xt(an.lanes, l), pv(l), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, tv()), e.memoizedState = a, a;
    }
    function Db(e, t, a) {
      var i = Ba();
      $n(_h(i, Ui)), e(!0);
      var l = Bp.transition;
      Bp.transition = {};
      var s = Bp.transition;
      Bp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if ($n(i), Bp.transition = l, l === null && s._updatedFibers) {
          var v = s._updatedFibers.size;
          v > 10 && E("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function R0() {
      var e = Om(!1), t = e[0], a = e[1], i = Db.bind(null, a), l = al();
      return l.memoizedState = i, [t, i];
    }
    function j2() {
      var e = y0(), t = e[0], a = qi(), i = a.memoizedState;
      return [t, i];
    }
    function A2() {
      var e = g0(), t = e[0], a = qi(), i = a.memoizedState;
      return [t, i];
    }
    var U2 = !1;
    function Nb() {
      return U2;
    }
    function k0() {
      var e = al(), t = sy(), a = t.identifierPrefix, i;
      if ($r()) {
        var l = Yx();
        i = ":" + a + "R" + l;
        var s = Wp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var v = bb++;
        i = ":" + a + "r" + v.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function $m() {
      var e = qi(), t = e.memoizedState;
      return t;
    }
    function Mb(e, t, a) {
      typeof arguments[3] == "function" && h("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = rs(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (z2(e))
        P2(t, l);
      else {
        var s = d2(e, t, l, i);
        if (s !== null) {
          var v = Ta();
          wr(s, e, i, v), I2(s, t, i);
        }
      }
      F2(e, i);
    }
    function Lb(e, t, a) {
      typeof arguments[3] == "function" && h("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = rs(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (z2(e))
        P2(t, l);
      else {
        var s = e.alternate;
        if (e.lanes === se && (s === null || s.lanes === se)) {
          var v = t.lastRenderedReducer;
          if (v !== null) {
            var y;
            y = Ve.current, Ve.current = go;
            try {
              var g = t.lastRenderedState, b = v(g, a);
              if (l.hasEagerState = !0, l.eagerState = b, ve(b, g)) {
                mb(e, t, l, i);
                return;
              }
            } catch {
            } finally {
              Ve.current = y;
            }
          }
        }
        var T = d2(e, t, l, i);
        if (T !== null) {
          var I = Ta();
          wr(T, e, i, I), I2(T, t, i);
        }
      }
      F2(e, i);
    }
    function z2(e) {
      var t = e.alternate;
      return e === an || t !== null && t === an;
    }
    function P2(e, t) {
      qp = Mm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function I2(e, t, a) {
      if (Zd(a)) {
        var i = t.lanes;
        i = tp(i, e.pendingLanes);
        var l = xt(i, a);
        t.lanes = l, gf(e, l);
      }
    }
    function F2(e, t, a) {
      Ds(e, t);
    }
    var Bm = {
      readContext: lr,
      useCallback: pa,
      useContext: pa,
      useEffect: pa,
      useImperativeHandle: pa,
      useInsertionEffect: pa,
      useLayoutEffect: pa,
      useMemo: pa,
      useReducer: pa,
      useRef: pa,
      useState: pa,
      useDebugValue: pa,
      useDeferredValue: pa,
      useTransition: pa,
      useMutableSource: pa,
      useSyncExternalStore: pa,
      useId: pa,
      unstable_isNewReconciler: F
    }, V2 = null, H2 = null, $2 = null, B2 = null, il = null, go = null, qm = null;
    {
      var T0 = function() {
        h("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, St = function() {
        h("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      V2 = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", Kt(), Xf(t), w0(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", Kt(), lr(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", Kt(), Xf(t), Um(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", Kt(), Xf(a), E0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", Kt(), Xf(t), S0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", Kt(), Xf(t), C0(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", Kt(), Xf(t);
          var a = Ve.current;
          Ve.current = il;
          try {
            return x0(e, t);
          } finally {
            Ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", Kt();
          var i = Ve.current;
          Ve.current = il;
          try {
            return p0(e, t, a);
          } finally {
            Ve.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", Kt(), _0(e);
        },
        useState: function(e) {
          ae = "useState", Kt();
          var t = Ve.current;
          Ve.current = il;
          try {
            return Om(e);
          } finally {
            Ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", Kt(), void 0;
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", Kt(), b0(e);
        },
        useTransition: function() {
          return ae = "useTransition", Kt(), R0();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", Kt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", Kt(), m0(e, t, a);
        },
        useId: function() {
          return ae = "useId", Kt(), k0();
        },
        unstable_isNewReconciler: F
      }, H2 = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", Te(), w0(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", Te(), lr(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", Te(), Um(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", Te(), E0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", Te(), S0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", Te(), C0(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", Te();
          var a = Ve.current;
          Ve.current = il;
          try {
            return x0(e, t);
          } finally {
            Ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", Te();
          var i = Ve.current;
          Ve.current = il;
          try {
            return p0(e, t, a);
          } finally {
            Ve.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", Te(), _0(e);
        },
        useState: function(e) {
          ae = "useState", Te();
          var t = Ve.current;
          Ve.current = il;
          try {
            return Om(e);
          } finally {
            Ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", Te(), void 0;
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", Te(), b0(e);
        },
        useTransition: function() {
          return ae = "useTransition", Te(), R0();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", Te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", Te(), m0(e, t, a);
        },
        useId: function() {
          return ae = "useId", Te(), k0();
        },
        unstable_isNewReconciler: F
      }, $2 = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", Te(), Vm(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", Te(), lr(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", Te(), Qp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", Te(), Im(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", Te(), zm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", Te(), Pm(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", Te();
          var a = Ve.current;
          Ve.current = go;
          try {
            return Hm(e, t);
          } finally {
            Ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", Te();
          var i = Ve.current;
          Ve.current = go;
          try {
            return v0(e, t, a);
          } finally {
            Ve.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", Te(), jm();
        },
        useState: function(e) {
          ae = "useState", Te();
          var t = Ve.current;
          Ve.current = go;
          try {
            return y0(e);
          } finally {
            Ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", Te(), Fm();
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", Te(), M2(e);
        },
        useTransition: function() {
          return ae = "useTransition", Te(), j2();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", Te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", Te(), Lm(e, t);
        },
        useId: function() {
          return ae = "useId", Te(), $m();
        },
        unstable_isNewReconciler: F
      }, B2 = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", Te(), Vm(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", Te(), lr(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", Te(), Qp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", Te(), Im(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", Te(), zm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", Te(), Pm(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", Te();
          var a = Ve.current;
          Ve.current = qm;
          try {
            return Hm(e, t);
          } finally {
            Ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", Te();
          var i = Ve.current;
          Ve.current = qm;
          try {
            return h0(e, t, a);
          } finally {
            Ve.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", Te(), jm();
        },
        useState: function(e) {
          ae = "useState", Te();
          var t = Ve.current;
          Ve.current = qm;
          try {
            return g0(e);
          } finally {
            Ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", Te(), Fm();
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", Te(), L2(e);
        },
        useTransition: function() {
          return ae = "useTransition", Te(), A2();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", Te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", Te(), Lm(e, t);
        },
        useId: function() {
          return ae = "useId", Te(), $m();
        },
        unstable_isNewReconciler: F
      }, il = {
        readContext: function(e) {
          return T0(), lr(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", St(), Kt(), w0(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", St(), Kt(), lr(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", St(), Kt(), Um(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", St(), Kt(), E0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", St(), Kt(), S0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", St(), Kt(), C0(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", St(), Kt();
          var a = Ve.current;
          Ve.current = il;
          try {
            return x0(e, t);
          } finally {
            Ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", St(), Kt();
          var i = Ve.current;
          Ve.current = il;
          try {
            return p0(e, t, a);
          } finally {
            Ve.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", St(), Kt(), _0(e);
        },
        useState: function(e) {
          ae = "useState", St(), Kt();
          var t = Ve.current;
          Ve.current = il;
          try {
            return Om(e);
          } finally {
            Ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", St(), Kt(), void 0;
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", St(), Kt(), b0(e);
        },
        useTransition: function() {
          return ae = "useTransition", St(), Kt(), R0();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", St(), Kt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", St(), Kt(), m0(e, t, a);
        },
        useId: function() {
          return ae = "useId", St(), Kt(), k0();
        },
        unstable_isNewReconciler: F
      }, go = {
        readContext: function(e) {
          return T0(), lr(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", St(), Te(), Vm(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", St(), Te(), lr(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", St(), Te(), Qp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", St(), Te(), Im(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", St(), Te(), zm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", St(), Te(), Pm(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", St(), Te();
          var a = Ve.current;
          Ve.current = go;
          try {
            return Hm(e, t);
          } finally {
            Ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", St(), Te();
          var i = Ve.current;
          Ve.current = go;
          try {
            return v0(e, t, a);
          } finally {
            Ve.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", St(), Te(), jm();
        },
        useState: function(e) {
          ae = "useState", St(), Te();
          var t = Ve.current;
          Ve.current = go;
          try {
            return y0(e);
          } finally {
            Ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", St(), Te(), Fm();
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", St(), Te(), M2(e);
        },
        useTransition: function() {
          return ae = "useTransition", St(), Te(), j2();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", St(), Te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", St(), Te(), Lm(e, t);
        },
        useId: function() {
          return ae = "useId", St(), Te(), $m();
        },
        unstable_isNewReconciler: F
      }, qm = {
        readContext: function(e) {
          return T0(), lr(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", St(), Te(), Vm(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", St(), Te(), lr(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", St(), Te(), Qp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", St(), Te(), Im(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", St(), Te(), zm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", St(), Te(), Pm(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", St(), Te();
          var a = Ve.current;
          Ve.current = go;
          try {
            return Hm(e, t);
          } finally {
            Ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", St(), Te();
          var i = Ve.current;
          Ve.current = go;
          try {
            return h0(e, t, a);
          } finally {
            Ve.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", St(), Te(), jm();
        },
        useState: function(e) {
          ae = "useState", St(), Te();
          var t = Ve.current;
          Ve.current = go;
          try {
            return g0(e);
          } finally {
            Ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", St(), Te(), Fm();
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", St(), Te(), L2(e);
        },
        useTransition: function() {
          return ae = "useTransition", St(), Te(), A2();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", St(), Te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", St(), Te(), Lm(e, t);
        },
        useId: function() {
          return ae = "useId", St(), Te(), $m();
        },
        unstable_isNewReconciler: F
      };
    }
    var Zu = p.unstable_now, q2 = 0, Wm = -1, Kp = -1, Ym = -1, D0 = !1, Gm = !1;
    function W2() {
      return D0;
    }
    function Ob() {
      Gm = !0;
    }
    function jb() {
      D0 = !1, Gm = !1;
    }
    function Ab() {
      D0 = Gm, Gm = !1;
    }
    function Y2() {
      return q2;
    }
    function G2() {
      q2 = Zu();
    }
    function N0(e) {
      Kp = Zu(), e.actualStartTime < 0 && (e.actualStartTime = Zu());
    }
    function Q2(e) {
      Kp = -1;
    }
    function Qm(e, t) {
      if (Kp >= 0) {
        var a = Zu() - Kp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Kp = -1;
      }
    }
    function ol(e) {
      if (Wm >= 0) {
        var t = Zu() - Wm;
        Wm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case A:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case be:
              var l = a.stateNode;
              l.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function M0(e) {
      if (Ym >= 0) {
        var t = Zu() - Ym;
        Ym = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case A:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case be:
              var l = a.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function ll() {
      Wm = Zu();
    }
    function L0() {
      Ym = Zu();
    }
    function O0(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function _o(e, t) {
      if (e && e.defaultProps) {
        var a = bt({}, t), i = e.defaultProps;
        for (var l in i)
          a[l] === void 0 && (a[l] = i[l]);
        return a;
      }
      return t;
    }
    var j0 = {}, A0, U0, z0, P0, I0, K2, Km, F0, V0, H0, Xp;
    {
      A0 = /* @__PURE__ */ new Set(), U0 = /* @__PURE__ */ new Set(), z0 = /* @__PURE__ */ new Set(), P0 = /* @__PURE__ */ new Set(), F0 = /* @__PURE__ */ new Set(), I0 = /* @__PURE__ */ new Set(), V0 = /* @__PURE__ */ new Set(), H0 = /* @__PURE__ */ new Set(), Xp = /* @__PURE__ */ new Set();
      var X2 = /* @__PURE__ */ new Set();
      Km = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          X2.has(a) || (X2.add(a), h("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, K2 = function(e, t) {
        if (t === void 0) {
          var a = It(e) || "Component";
          I0.has(a) || (I0.add(a), h("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(j0, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(j0);
    }
    function $0(e, t, a, i) {
      var l = e.memoizedState, s = a(i, l);
      {
        if (e.mode & rn) {
          En(!0);
          try {
            s = a(i, l);
          } finally {
            En(!1);
          }
        }
        K2(t, s);
      }
      var v = s == null ? l : bt({}, l, s);
      if (e.memoizedState = v, e.lanes === se) {
        var y = e.updateQueue;
        y.baseState = v;
      }
    }
    var B0 = {
      isMounted: rh,
      enqueueSetState: function(e, t, a) {
        var i = Tu(e), l = Ta(), s = rs(i), v = Jl(l, s);
        v.payload = t, a != null && (Km(a, "setState"), v.callback = a);
        var y = Qu(i, v, s);
        y !== null && (wr(y, i, s, l), bm(y, i, s)), Ds(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Tu(e), l = Ta(), s = rs(i), v = Jl(l, s);
        v.tag = v2, v.payload = t, a != null && (Km(a, "replaceState"), v.callback = a);
        var y = Qu(i, v, s);
        y !== null && (wr(y, i, s, l), bm(y, i, s)), Ds(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Tu(e), i = Ta(), l = rs(a), s = Jl(i, l);
        s.tag = Em, t != null && (Km(t, "forceUpdate"), s.callback = t);
        var v = Qu(a, s, l);
        v !== null && (wr(v, a, l, i), bm(v, a, l)), Qc(a, l);
      }
    };
    function J2(e, t, a, i, l, s, v) {
      var y = e.stateNode;
      if (typeof y.shouldComponentUpdate == "function") {
        var g = y.shouldComponentUpdate(i, s, v);
        {
          if (e.mode & rn) {
            En(!0);
            try {
              g = y.shouldComponentUpdate(i, s, v);
            } finally {
              En(!1);
            }
          }
          g === void 0 && h("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", It(t) || "Component");
        }
        return g;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Qe(a, i) || !Qe(l, s) : !0;
    }
    function Ub(e, t, a) {
      var i = e.stateNode;
      {
        var l = It(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? h("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : h("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && h("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && h("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), i.propTypes && h("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), i.contextType && h("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), t.childContextTypes && !Xp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & rn) === it && (Xp.add(t), h(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), t.contextTypes && !Xp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & rn) === it && (Xp.add(t), h(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), i.contextTypes && h("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !V0.has(t) && (V0.add(t), h("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof i.componentShouldUpdate == "function" && h("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && h("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", It(t) || "A pure component"), typeof i.componentDidUnmount == "function" && h("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof i.componentDidReceiveProps == "function" && h("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof i.componentWillRecieveProps == "function" && h("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof i.UNSAFE_componentWillRecieveProps == "function" && h("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var v = i.props !== a;
        i.props !== void 0 && v && h("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), i.defaultProps && h("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !z0.has(t) && (z0.add(t), h("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", It(t))), typeof i.getDerivedStateFromProps == "function" && h("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof i.getDerivedStateFromError == "function" && h("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && h("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var y = i.state;
        y && (typeof y != "object" || kt(y)) && h("%s.state: must be set to an object or null", l), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && h("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function Z2(e, t) {
      t.updater = B0, e.stateNode = t, Rl(t, e), t._reactInternalInstance = j0;
    }
    function eS(e, t, a) {
      var i = !1, l = mi, s = mi, v = t.contextType;
      if ("contextType" in t) {
        var y = (
          // Allow null for conditional declaration
          v === null || v !== void 0 && v.$$typeof === O && v._context === void 0
        );
        if (!y && !H0.has(t)) {
          H0.add(t);
          var g = "";
          v === void 0 ? g = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof v != "object" ? g = " However, it is set to a " + typeof v + "." : v.$$typeof === wi ? g = " Did you accidentally pass the Context.Provider instead?" : v._context !== void 0 ? g = " Did you accidentally pass the Context.Consumer instead?" : g = " However, it is set to an object with keys {" + Object.keys(v).join(", ") + "}.", h("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", It(t) || "Component", g);
        }
      }
      if (typeof v == "object" && v !== null)
        s = lr(v);
      else {
        l = If(e, t, !0);
        var b = t.contextTypes;
        i = b != null, s = i ? Ff(e, l) : mi;
      }
      var T = new t(a, s);
      if (e.mode & rn) {
        En(!0);
        try {
          T = new t(a, s);
        } finally {
          En(!1);
        }
      }
      var I = e.memoizedState = T.state !== null && T.state !== void 0 ? T.state : null;
      Z2(e, T);
      {
        if (typeof t.getDerivedStateFromProps == "function" && I === null) {
          var z = It(t) || "Component";
          U0.has(z) || (U0.add(z), h("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", z, T.state === null ? "null" : "undefined", z));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof T.getSnapshotBeforeUpdate == "function") {
          var Y = null, X = null, te = null;
          if (typeof T.componentWillMount == "function" && T.componentWillMount.__suppressDeprecationWarning !== !0 ? Y = "componentWillMount" : typeof T.UNSAFE_componentWillMount == "function" && (Y = "UNSAFE_componentWillMount"), typeof T.componentWillReceiveProps == "function" && T.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? X = "componentWillReceiveProps" : typeof T.UNSAFE_componentWillReceiveProps == "function" && (X = "UNSAFE_componentWillReceiveProps"), typeof T.componentWillUpdate == "function" && T.componentWillUpdate.__suppressDeprecationWarning !== !0 ? te = "componentWillUpdate" : typeof T.UNSAFE_componentWillUpdate == "function" && (te = "UNSAFE_componentWillUpdate"), Y !== null || X !== null || te !== null) {
            var je = It(t) || "Component", lt = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            P0.has(je) || (P0.add(je), h(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, je, lt, Y !== null ? `
  ` + Y : "", X !== null ? `
  ` + X : "", te !== null ? `
  ` + te : ""));
          }
        }
      }
      return i && $_(e, l, s), T;
    }
    function zb(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (h("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", gt(e) || "Component"), B0.enqueueReplaceState(t, t.state, null));
    }
    function tS(e, t, a, i) {
      var l = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== l) {
        {
          var s = gt(e) || "Component";
          A0.has(s) || (A0.add(s), h("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        B0.enqueueReplaceState(t, t.state, null);
      }
    }
    function q0(e, t, a, i) {
      Ub(e, t, a);
      var l = e.stateNode;
      l.props = a, l.state = e.memoizedState, l.refs = {}, e0(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        l.context = lr(s);
      else {
        var v = If(e, t, !0);
        l.context = Ff(e, v);
      }
      {
        if (l.state === a) {
          var y = It(t) || "Component";
          F0.has(y) || (F0.add(y), h("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", y));
        }
        e.mode & rn && mo.recordLegacyContextWarning(e, l), mo.recordUnsafeLifecycleWarnings(e, l);
      }
      l.state = e.memoizedState;
      var g = t.getDerivedStateFromProps;
      if (typeof g == "function" && ($0(e, t, g, a), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (zb(e, l), Rm(e, a, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var b = At;
        b |= ao, (e.mode & Bt) !== it && (b |= Io), e.flags |= b;
      }
    }
    function Pb(e, t, a, i) {
      var l = e.stateNode, s = e.memoizedProps;
      l.props = s;
      var v = l.context, y = t.contextType, g = mi;
      if (typeof y == "object" && y !== null)
        g = lr(y);
      else {
        var b = If(e, t, !0);
        g = Ff(e, b);
      }
      var T = t.getDerivedStateFromProps, I = typeof T == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !I && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (s !== a || v !== g) && tS(e, l, a, g), m2();
      var z = e.memoizedState, Y = l.state = z;
      if (Rm(e, a, l, i), Y = e.memoizedState, s === a && z === Y && !lm() && !km()) {
        if (typeof l.componentDidMount == "function") {
          var X = At;
          X |= ao, (e.mode & Bt) !== it && (X |= Io), e.flags |= X;
        }
        return !1;
      }
      typeof T == "function" && ($0(e, t, T, a), Y = e.memoizedState);
      var te = km() || J2(e, t, s, a, z, Y, g);
      if (te) {
        if (!I && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
          var je = At;
          je |= ao, (e.mode & Bt) !== it && (je |= Io), e.flags |= je;
        }
      } else {
        if (typeof l.componentDidMount == "function") {
          var lt = At;
          lt |= ao, (e.mode & Bt) !== it && (lt |= Io), e.flags |= lt;
        }
        e.memoizedProps = a, e.memoizedState = Y;
      }
      return l.props = a, l.state = Y, l.context = g, te;
    }
    function Ib(e, t, a, i, l) {
      var s = t.stateNode;
      h2(e, t);
      var v = t.memoizedProps, y = t.type === t.elementType ? v : _o(t.type, v);
      s.props = y;
      var g = t.pendingProps, b = s.context, T = a.contextType, I = mi;
      if (typeof T == "object" && T !== null)
        I = lr(T);
      else {
        var z = If(t, a, !0);
        I = Ff(t, z);
      }
      var Y = a.getDerivedStateFromProps, X = typeof Y == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !X && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (v !== g || b !== I) && tS(t, s, i, I), m2();
      var te = t.memoizedState, je = s.state = te;
      if (Rm(t, i, s, l), je = t.memoizedState, v === g && te === je && !lm() && !km() && !he)
        return typeof s.componentDidUpdate == "function" && (v !== e.memoizedProps || te !== e.memoizedState) && (t.flags |= At), typeof s.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || te !== e.memoizedState) && (t.flags |= Xn), !1;
      typeof Y == "function" && ($0(t, a, Y, i), je = t.memoizedState);
      var lt = km() || J2(t, a, y, i, te, je, I) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      he;
      return lt ? (!X && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, je, I), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, je, I)), typeof s.componentDidUpdate == "function" && (t.flags |= At), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Xn)) : (typeof s.componentDidUpdate == "function" && (v !== e.memoizedProps || te !== e.memoizedState) && (t.flags |= At), typeof s.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || te !== e.memoizedState) && (t.flags |= Xn), t.memoizedProps = i, t.memoizedState = je), s.props = i, s.state = je, s.context = I, lt;
    }
    function vc(e, t) {
      return {
        value: e,
        source: t,
        stack: Ji(t),
        digest: null
      };
    }
    function W0(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function Fb(e, t) {
      return !0;
    }
    function Y0(e, t) {
      try {
        var a = Fb(e, t);
        if (a === !1)
          return;
        var i = t.value, l = t.source, s = t.stack, v = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === x)
            return;
          console.error(i);
        }
        var y = l ? gt(l) : null, g = y ? "The above error occurred in the <" + y + "> component:" : "The above error occurred in one of your React components:", b;
        if (e.tag === A)
          b = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var T = gt(e) || "Anonymous";
          b = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + T + ".");
        }
        var I = g + `
` + v + `

` + ("" + b);
        console.error(I);
      } catch (z) {
        setTimeout(function() {
          throw z;
        });
      }
    }
    var Vb = typeof WeakMap == "function" ? WeakMap : Map;
    function nS(e, t, a) {
      var i = Jl(ln, a);
      i.tag = Jg, i.payload = {
        element: null
      };
      var l = t.value;
      return i.callback = function() {
        Ok(l), Y0(e, t);
      }, i;
    }
    function G0(e, t, a) {
      var i = Jl(ln, a);
      i.tag = Jg;
      var l = e.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var s = t.value;
        i.payload = function() {
          return l(s);
        }, i.callback = function() {
          pC(e), Y0(e, t);
        };
      }
      var v = e.stateNode;
      return v !== null && typeof v.componentDidCatch == "function" && (i.callback = function() {
        pC(e), Y0(e, t), typeof l != "function" && Mk(this);
        var g = t.value, b = t.stack;
        this.componentDidCatch(g, {
          componentStack: b !== null ? b : ""
        }), typeof l != "function" && (la(e.lanes, pt) || h("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", gt(e) || "Unknown"));
      }), i;
    }
    function rS(e, t, a) {
      var i = e.pingCache, l;
      if (i === null ? (i = e.pingCache = new Vb(), l = /* @__PURE__ */ new Set(), i.set(t, l)) : (l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l))), !l.has(a)) {
        l.add(a);
        var s = jk.bind(null, e, t, a);
        ia && vv(e, a), t.then(s, s);
      }
    }
    function Hb(e, t, a, i) {
      var l = e.updateQueue;
      if (l === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        l.add(a);
    }
    function $b(e, t) {
      var a = e.tag;
      if ((e.mode & Dt) === it && (a === k || a === oe || a === He)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function aS(e) {
      var t = e;
      do {
        if (t.tag === de && wb(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function iS(e, t, a, i, l) {
      if ((e.mode & Dt) === it) {
        if (e === t)
          e.flags |= rr;
        else {
          if (e.flags |= tt, a.flags |= Vc, a.flags &= -52805, a.tag === x) {
            var s = a.alternate;
            if (s === null)
              a.tag = nt;
            else {
              var v = Jl(ln, pt);
              v.tag = Em, Qu(a, v, pt);
            }
          }
          a.lanes = xt(a.lanes, pt);
        }
        return e;
      }
      return e.flags |= rr, e.lanes = l, e;
    }
    function Bb(e, t, a, i, l) {
      if (a.flags |= ws, ia && vv(e, l), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        $b(a), $r() && a.mode & Dt && K_();
        var v = aS(t);
        if (v !== null) {
          v.flags &= ~kr, iS(v, t, a, e, l), v.mode & Dt && rS(e, s, l), Hb(v, e, s);
          return;
        } else {
          if (!fh(l)) {
            rS(e, s, l), k1();
            return;
          }
          var y = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = y;
        }
      } else if ($r() && a.mode & Dt) {
        K_();
        var g = aS(t);
        if (g !== null) {
          (g.flags & rr) === at && (g.flags |= kr), iS(g, t, a, e, l), Fg(vc(i, a));
          return;
        }
      }
      i = vc(i, a), wk(i);
      var b = t;
      do {
        switch (b.tag) {
          case A: {
            var T = i;
            b.flags |= rr;
            var I = Ps(l);
            b.lanes = xt(b.lanes, I);
            var z = nS(b, T, I);
            t0(b, z);
            return;
          }
          case x:
            var Y = i, X = b.type, te = b.stateNode;
            if ((b.flags & tt) === at && (typeof X.getDerivedStateFromError == "function" || te !== null && typeof te.componentDidCatch == "function" && !aC(te))) {
              b.flags |= rr;
              var je = Ps(l);
              b.lanes = xt(b.lanes, je);
              var lt = G0(b, Y, je);
              t0(b, lt);
              return;
            }
            break;
        }
        b = b.return;
      } while (b !== null);
    }
    function qb() {
      return null;
    }
    var Jp = d.ReactCurrentOwner, So = !1, Q0, Zp, K0, X0, J0, hc, Z0, Xm, ev;
    Q0 = {}, Zp = {}, K0 = {}, X0 = {}, J0 = {}, hc = !1, Z0 = {}, Xm = {}, ev = {};
    function Ra(e, t, a, i) {
      e === null ? t.child = u2(t, null, a, i) : t.child = Bf(t, e.child, a, i);
    }
    function Wb(e, t, a, i) {
      t.child = Bf(t, e.child, null, i), t.child = Bf(t, null, a, i);
    }
    function oS(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && vo(
          s,
          i,
          // Resolved props
          "prop",
          It(a)
        );
      }
      var v = a.render, y = t.ref, g, b;
      Wf(t, l), Ea(t);
      {
        if (Jp.current = t, Kn(!0), g = Jf(e, t, v, i, y, l), b = Zf(), t.mode & rn) {
          En(!0);
          try {
            g = Jf(e, t, v, i, y, l), b = Zf();
          } finally {
            En(!1);
          }
        }
        Kn(!1);
      }
      return wa(), e !== null && !So ? (E2(e, t, l), Zl(e, t, l)) : ($r() && b && jg(t), t.flags |= fi, Ra(e, t, g, l), t.child);
    }
    function lS(e, t, a, i, l) {
      if (e === null) {
        var s = a.type;
        if (Xk(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var v = s;
          return v = ld(s), t.tag = He, t.type = v, n1(t, s), uS(e, t, v, i, l);
        }
        {
          var y = s.propTypes;
          if (y && vo(
            y,
            i,
            // Resolved props
            "prop",
            It(s)
          ), a.defaultProps !== void 0) {
            var g = It(s) || "Unknown";
            ev[g] || (h("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", g), ev[g] = !0);
          }
        }
        var b = P1(a.type, null, i, t, t.mode, l);
        return b.ref = t.ref, b.return = t, t.child = b, b;
      }
      {
        var T = a.type, I = T.propTypes;
        I && vo(
          I,
          i,
          // Resolved props
          "prop",
          It(T)
        );
      }
      var z = e.child, Y = u1(e, l);
      if (!Y) {
        var X = z.memoizedProps, te = a.compare;
        if (te = te !== null ? te : Qe, te(X, i) && e.ref === t.ref)
          return Zl(e, t, l);
      }
      t.flags |= fi;
      var je = Sc(z, i);
      return je.ref = t.ref, je.return = t, t.child = je, je;
    }
    function uS(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === _t) {
          var v = s, y = v._payload, g = v._init;
          try {
            s = g(y);
          } catch {
            s = null;
          }
          var b = s && s.propTypes;
          b && vo(
            b,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            It(s)
          );
        }
      }
      if (e !== null) {
        var T = e.memoizedProps;
        if (Qe(T, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (So = !1, t.pendingProps = i = T, u1(e, l))
            (e.flags & Vc) !== at && (So = !0);
          else return t.lanes = e.lanes, Zl(e, t, l);
      }
      return e1(e, t, a, i, l);
    }
    function sS(e, t, a) {
      var i = t.pendingProps, l = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || le)
        if ((t.mode & Dt) === it) {
          var v = {
            baseLanes: se,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = v, cy(t, a);
        } else if (la(a, oa)) {
          var I = {
            baseLanes: se,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = I;
          var z = s !== null ? s.baseLanes : a;
          cy(t, z);
        } else {
          var y = null, g;
          if (s !== null) {
            var b = s.baseLanes;
            g = xt(b, a);
          } else
            g = a;
          t.lanes = t.childLanes = oa;
          var T = {
            baseLanes: g,
            cachePool: y,
            transitions: null
          };
          return t.memoizedState = T, t.updateQueue = null, cy(t, g), null;
        }
      else {
        var Y;
        s !== null ? (Y = xt(s.baseLanes, a), t.memoizedState = null) : Y = a, cy(t, Y);
      }
      return Ra(e, t, l, a), t.child;
    }
    function Yb(e, t, a) {
      var i = t.pendingProps;
      return Ra(e, t, i, a), t.child;
    }
    function Gb(e, t, a) {
      var i = t.pendingProps.children;
      return Ra(e, t, i, a), t.child;
    }
    function Qb(e, t, a) {
      {
        t.flags |= At;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var l = t.pendingProps, s = l.children;
      return Ra(e, t, s, a), t.child;
    }
    function cS(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= bn, t.flags |= Nu);
    }
    function e1(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && vo(
          s,
          i,
          // Resolved props
          "prop",
          It(a)
        );
      }
      var v;
      {
        var y = If(t, a, !0);
        v = Ff(t, y);
      }
      var g, b;
      Wf(t, l), Ea(t);
      {
        if (Jp.current = t, Kn(!0), g = Jf(e, t, a, i, v, l), b = Zf(), t.mode & rn) {
          En(!0);
          try {
            g = Jf(e, t, a, i, v, l), b = Zf();
          } finally {
            En(!1);
          }
        }
        Kn(!1);
      }
      return wa(), e !== null && !So ? (E2(e, t, l), Zl(e, t, l)) : ($r() && b && jg(t), t.flags |= fi, Ra(e, t, g, l), t.child);
    }
    function fS(e, t, a, i, l) {
      {
        switch (dT(t)) {
          case !1: {
            var s = t.stateNode, v = t.type, y = new v(t.memoizedProps, s.context), g = y.state;
            s.updater.enqueueSetState(s, g, null);
            break;
          }
          case !0: {
            t.flags |= tt, t.flags |= rr;
            var b = new Error("Simulated error coming from DevTools"), T = Ps(l);
            t.lanes = xt(t.lanes, T);
            var I = G0(t, vc(b, t), T);
            t0(t, I);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var z = a.propTypes;
          z && vo(
            z,
            i,
            // Resolved props
            "prop",
            It(a)
          );
        }
      }
      var Y;
      nl(a) ? (Y = !0, sm(t)) : Y = !1, Wf(t, l);
      var X = t.stateNode, te;
      X === null ? (Zm(e, t), eS(t, a, i), q0(t, a, i, l), te = !0) : e === null ? te = Pb(t, a, i, l) : te = Ib(e, t, a, i, l);
      var je = t1(e, t, a, te, Y, l);
      {
        var lt = t.stateNode;
        te && lt.props !== i && (hc || h("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", gt(t) || "a component"), hc = !0);
      }
      return je;
    }
    function t1(e, t, a, i, l, s) {
      cS(e, t);
      var v = (t.flags & tt) !== at;
      if (!i && !v)
        return l && W_(t, a, !1), Zl(e, t, s);
      var y = t.stateNode;
      Jp.current = t;
      var g;
      if (v && typeof a.getDerivedStateFromError != "function")
        g = null, Q2();
      else {
        Ea(t);
        {
          if (Kn(!0), g = y.render(), t.mode & rn) {
            En(!0);
            try {
              y.render();
            } finally {
              En(!1);
            }
          }
          Kn(!1);
        }
        wa();
      }
      return t.flags |= fi, e !== null && v ? Wb(e, t, g, s) : Ra(e, t, g, s), t.memoizedState = y.state, l && W_(t, a, !0), t.child;
    }
    function dS(e) {
      var t = e.stateNode;
      t.pendingContext ? B_(e, t.pendingContext, t.pendingContext !== t.context) : t.context && B_(e, t.context, !1), n0(e, t.containerInfo);
    }
    function Kb(e, t, a) {
      if (dS(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, l = t.memoizedState, s = l.element;
      h2(e, t), Rm(t, i, null, a);
      var v = t.memoizedState;
      t.stateNode;
      var y = v.element;
      if (l.isDehydrated) {
        var g = {
          element: y,
          isDehydrated: !1,
          cache: v.cache,
          pendingSuspenseBoundaries: v.pendingSuspenseBoundaries,
          transitions: v.transitions
        }, b = t.updateQueue;
        if (b.baseState = g, t.memoizedState = g, t.flags & kr) {
          var T = vc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return pS(e, t, y, a, T);
        } else if (y !== s) {
          var I = vc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return pS(e, t, y, a, I);
        } else {
          Zx(t);
          var z = u2(t, null, y, a);
          t.child = z;
          for (var Y = z; Y; )
            Y.flags = Y.flags & ~Cn | na, Y = Y.sibling;
        }
      } else {
        if ($f(), y === s)
          return Zl(e, t, a);
        Ra(e, t, y, a);
      }
      return t.child;
    }
    function pS(e, t, a, i, l) {
      return $f(), Fg(l), t.flags |= kr, Ra(e, t, a, i), t.child;
    }
    function Xb(e, t, a) {
      _2(t), e === null && Ig(t);
      var i = t.type, l = t.pendingProps, s = e !== null ? e.memoizedProps : null, v = l.children, y = Sg(i, l);
      return y ? v = null : s !== null && Sg(i, s) && (t.flags |= Pa), cS(e, t), Ra(e, t, v, a), t.child;
    }
    function Jb(e, t) {
      return e === null && Ig(t), null;
    }
    function Zb(e, t, a, i) {
      Zm(e, t);
      var l = t.pendingProps, s = a, v = s._payload, y = s._init, g = y(v);
      t.type = g;
      var b = t.tag = Jk(g), T = _o(g, l), I;
      switch (b) {
        case k:
          return n1(t, g), t.type = g = ld(g), I = e1(null, t, g, T, i), I;
        case x:
          return t.type = g = L1(g), I = fS(null, t, g, T, i), I;
        case oe:
          return t.type = g = O1(g), I = oS(null, t, g, T, i), I;
        case Ye: {
          if (t.type !== t.elementType) {
            var z = g.propTypes;
            z && vo(
              z,
              T,
              // Resolved for outer only
              "prop",
              It(g)
            );
          }
          return I = lS(
            null,
            t,
            g,
            _o(g.type, T),
            // The inner type can have defaults too
            i
          ), I;
        }
      }
      var Y = "";
      throw g !== null && typeof g == "object" && g.$$typeof === _t && (Y = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + g + ". " + ("Lazy element type must resolve to a class or function." + Y));
    }
    function eR(e, t, a, i, l) {
      Zm(e, t), t.tag = x;
      var s;
      return nl(a) ? (s = !0, sm(t)) : s = !1, Wf(t, l), eS(t, a, i), q0(t, a, i, l), t1(null, t, a, !0, s, l);
    }
    function tR(e, t, a, i) {
      Zm(e, t);
      var l = t.pendingProps, s;
      {
        var v = If(t, a, !1);
        s = Ff(t, v);
      }
      Wf(t, i);
      var y, g;
      Ea(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var b = It(a) || "Unknown";
          Q0[b] || (h("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", b, b), Q0[b] = !0);
        }
        t.mode & rn && mo.recordLegacyContextWarning(t, null), Kn(!0), Jp.current = t, y = Jf(null, t, a, l, s, i), g = Zf(), Kn(!1);
      }
      if (wa(), t.flags |= fi, typeof y == "object" && y !== null && typeof y.render == "function" && y.$$typeof === void 0) {
        var T = It(a) || "Unknown";
        Zp[T] || (h("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", T, T, T), Zp[T] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof y == "object" && y !== null && typeof y.render == "function" && y.$$typeof === void 0
      ) {
        {
          var I = It(a) || "Unknown";
          Zp[I] || (h("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", I, I, I), Zp[I] = !0);
        }
        t.tag = x, t.memoizedState = null, t.updateQueue = null;
        var z = !1;
        return nl(a) ? (z = !0, sm(t)) : z = !1, t.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null, e0(t), Z2(t, y), q0(t, a, l, i), t1(null, t, a, !0, z, i);
      } else {
        if (t.tag = k, t.mode & rn) {
          En(!0);
          try {
            y = Jf(null, t, a, l, s, i), g = Zf();
          } finally {
            En(!1);
          }
        }
        return $r() && g && jg(t), Ra(null, t, y, i), n1(t, a), t.child;
      }
    }
    function n1(e, t) {
      {
        if (t && t.childContextTypes && h("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Ur();
          i && (a += `

Check the render method of \`` + i + "`.");
          var l = i || "", s = e._debugSource;
          s && (l = s.fileName + ":" + s.lineNumber), J0[l] || (J0[l] = !0, h("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var v = It(t) || "Unknown";
          ev[v] || (h("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", v), ev[v] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var y = It(t) || "Unknown";
          X0[y] || (h("%s: Function components do not support getDerivedStateFromProps.", y), X0[y] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var g = It(t) || "Unknown";
          K0[g] || (h("%s: Function components do not support contextType.", g), K0[g] = !0);
        }
      }
    }
    var r1 = {
      dehydrated: null,
      treeContext: null,
      retryLane: Vt
    };
    function a1(e) {
      return {
        baseLanes: e,
        cachePool: qb(),
        transitions: null
      };
    }
    function nR(e, t) {
      var a = null;
      return {
        baseLanes: xt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function rR(e, t, a, i) {
      if (t !== null) {
        var l = t.memoizedState;
        if (l === null)
          return !1;
      }
      return i0(e, $p);
    }
    function aR(e, t) {
      return Is(e.childLanes, t);
    }
    function vS(e, t, a) {
      var i = t.pendingProps;
      pT(t) && (t.flags |= tt);
      var l = yo.current, s = !1, v = (t.flags & tt) !== at;
      if (v || rR(l, e) ? (s = !0, t.flags &= ~tt) : (e === null || e.memoizedState !== null) && (l = Eb(l, C2)), l = Gf(l), Xu(t, l), e === null) {
        Ig(t);
        var y = t.memoizedState;
        if (y !== null) {
          var g = y.dehydrated;
          if (g !== null)
            return sR(t, g);
        }
        var b = i.children, T = i.fallback;
        if (s) {
          var I = iR(t, b, T, a), z = t.child;
          return z.memoizedState = a1(a), t.memoizedState = r1, I;
        } else
          return i1(t, b);
      } else {
        var Y = e.memoizedState;
        if (Y !== null) {
          var X = Y.dehydrated;
          if (X !== null)
            return cR(e, t, v, i, X, Y, a);
        }
        if (s) {
          var te = i.fallback, je = i.children, lt = lR(e, t, je, te, a), et = t.child, Pt = e.child.memoizedState;
          return et.memoizedState = Pt === null ? a1(a) : nR(Pt, a), et.childLanes = aR(e, a), t.memoizedState = r1, lt;
        } else {
          var Ot = i.children, B = oR(e, t, Ot, a);
          return t.memoizedState = null, B;
        }
      }
    }
    function i1(e, t, a) {
      var i = e.mode, l = {
        mode: "visible",
        children: t
      }, s = o1(l, i);
      return s.return = e, e.child = s, s;
    }
    function iR(e, t, a, i) {
      var l = e.mode, s = e.child, v = {
        mode: "hidden",
        children: t
      }, y, g;
      return (l & Dt) === it && s !== null ? (y = s, y.childLanes = se, y.pendingProps = v, e.mode & $t && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = 0, y.treeBaseDuration = 0), g = is(a, l, i, null)) : (y = o1(v, l), g = is(a, l, i, null)), y.return = e, g.return = e, y.sibling = g, e.child = y, g;
    }
    function o1(e, t, a) {
      return hC(e, t, se, null);
    }
    function hS(e, t) {
      return Sc(e, t);
    }
    function oR(e, t, a, i) {
      var l = e.child, s = l.sibling, v = hS(l, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Dt) === it && (v.lanes = i), v.return = t, v.sibling = null, s !== null) {
        var y = t.deletions;
        y === null ? (t.deletions = [s], t.flags |= za) : y.push(s);
      }
      return t.child = v, v;
    }
    function lR(e, t, a, i, l) {
      var s = t.mode, v = e.child, y = v.sibling, g = {
        mode: "hidden",
        children: a
      }, b;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Dt) === it && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== v
      ) {
        var T = t.child;
        b = T, b.childLanes = se, b.pendingProps = g, t.mode & $t && (b.actualDuration = 0, b.actualStartTime = -1, b.selfBaseDuration = v.selfBaseDuration, b.treeBaseDuration = v.treeBaseDuration), t.deletions = null;
      } else
        b = hS(v, g), b.subtreeFlags = v.subtreeFlags & Fn;
      var I;
      return y !== null ? I = Sc(y, i) : (I = is(i, s, l, null), I.flags |= Cn), I.return = t, b.return = t, b.sibling = I, t.child = b, I;
    }
    function Jm(e, t, a, i) {
      i !== null && Fg(i), Bf(t, e.child, null, a);
      var l = t.pendingProps, s = l.children, v = i1(t, s);
      return v.flags |= Cn, t.memoizedState = null, v;
    }
    function uR(e, t, a, i, l) {
      var s = t.mode, v = {
        mode: "visible",
        children: a
      }, y = o1(v, s), g = is(i, s, l, null);
      return g.flags |= Cn, y.return = t, g.return = t, y.sibling = g, t.child = y, (t.mode & Dt) !== it && Bf(t, e.child, null, l), g;
    }
    function sR(e, t, a) {
      return (e.mode & Dt) === it ? (h("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = pt) : xg(t) ? e.lanes = Tr : e.lanes = oa, null;
    }
    function cR(e, t, a, i, l, s, v) {
      if (a)
        if (t.flags & kr) {
          t.flags &= ~kr;
          var B = W0(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Jm(e, t, v, B);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= tt, null;
          var ne = i.children, q = i.fallback, ye = uR(e, t, ne, q, v), $e = t.child;
          return $e.memoizedState = a1(v), t.memoizedState = r1, ye;
        }
      else {
        if (Xx(), (t.mode & Dt) === it)
          return Jm(
            e,
            t,
            v,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (xg(l)) {
          var y, g, b;
          {
            var T = vx(l);
            y = T.digest, g = T.message, b = T.stack;
          }
          var I;
          g ? I = new Error(g) : I = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var z = W0(I, y, b);
          return Jm(e, t, v, z);
        }
        var Y = la(v, e.childLanes);
        if (So || Y) {
          var X = sy();
          if (X !== null) {
            var te = rp(X, v);
            if (te !== Vt && te !== s.retryLane) {
              s.retryLane = te;
              var je = ln;
              Ya(e, te), wr(X, e, te, je);
            }
          }
          k1();
          var lt = W0(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Jm(e, t, v, lt);
        } else if (P_(l)) {
          t.flags |= tt, t.child = e.child;
          var et = Ak.bind(null, e);
          return hx(l, et), null;
        } else {
          eb(t, l, s.treeContext);
          var Pt = i.children, Ot = i1(t, Pt);
          return Ot.flags |= na, Ot;
        }
      }
    }
    function mS(e, t, a) {
      e.lanes = xt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = xt(i.lanes, t)), Kg(e.return, t, a);
    }
    function fR(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === de) {
          var l = i.memoizedState;
          l !== null && mS(i, a, e);
        } else if (i.tag === Ee)
          mS(i, a, e);
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
    function dR(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Nm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function pR(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !Z0[e])
        if (Z0[e] = !0, typeof e == "string")
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
    function vR(e, t) {
      e !== void 0 && !Xm[e] && (e !== "collapsed" && e !== "hidden" ? (Xm[e] = !0, h('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Xm[e] = !0, h('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function yS(e, t) {
      {
        var a = kt(e), i = !a && typeof wt(e) == "function";
        if (a || i) {
          var l = a ? "array" : "iterable";
          return h("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", l, t, l), !1;
        }
      }
      return !0;
    }
    function hR(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (kt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!yS(e[a], a))
              return;
        } else {
          var i = wt(e);
          if (typeof i == "function") {
            var l = i.call(e);
            if (l)
              for (var s = l.next(), v = 0; !s.done; s = l.next()) {
                if (!yS(s.value, v))
                  return;
                v++;
              }
          } else
            h('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function l1(e, t, a, i, l) {
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
    function gS(e, t, a) {
      var i = t.pendingProps, l = i.revealOrder, s = i.tail, v = i.children;
      pR(l), vR(s, l), hR(v, l), Ra(e, t, v, a);
      var y = yo.current, g = i0(y, $p);
      if (g)
        y = o0(y, $p), t.flags |= tt;
      else {
        var b = e !== null && (e.flags & tt) !== at;
        b && fR(t, t.child, a), y = Gf(y);
      }
      if (Xu(t, y), (t.mode & Dt) === it)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var T = dR(t.child), I;
            T === null ? (I = t.child, t.child = null) : (I = T.sibling, T.sibling = null), l1(
              t,
              !1,
              // isBackwards
              I,
              T,
              s
            );
            break;
          }
          case "backwards": {
            var z = null, Y = t.child;
            for (t.child = null; Y !== null; ) {
              var X = Y.alternate;
              if (X !== null && Nm(X) === null) {
                t.child = Y;
                break;
              }
              var te = Y.sibling;
              Y.sibling = z, z = Y, Y = te;
            }
            l1(
              t,
              !0,
              // isBackwards
              z,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            l1(
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
    function mR(e, t, a) {
      n0(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Bf(t, null, i, a) : Ra(e, t, i, a), t.child;
    }
    var _S = !1;
    function yR(e, t, a) {
      var i = t.type, l = i._context, s = t.pendingProps, v = t.memoizedProps, y = s.value;
      {
        "value" in s || _S || (_S = !0, h("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var g = t.type.propTypes;
        g && vo(g, s, "prop", "Context.Provider");
      }
      if (f2(t, l, y), v !== null) {
        var b = v.value;
        if (ve(b, y)) {
          if (v.children === s.children && !lm())
            return Zl(e, t, a);
        } else
          pb(t, l, a);
      }
      var T = s.children;
      return Ra(e, t, T, a), t.child;
    }
    var SS = !1;
    function gR(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (SS || (SS = !0, h("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var l = t.pendingProps, s = l.children;
      typeof s != "function" && h("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Wf(t, a);
      var v = lr(i);
      Ea(t);
      var y;
      return Jp.current = t, Kn(!0), y = s(v), Kn(!1), wa(), t.flags |= fi, Ra(e, t, y, a), t.child;
    }
    function tv() {
      So = !0;
    }
    function Zm(e, t) {
      (t.mode & Dt) === it && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Cn);
    }
    function Zl(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), Q2(), pv(t.lanes), la(a, t.childLanes) ? (fb(e, t), t.child) : null;
    }
    function _R(e, t, a) {
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
        return s === null ? (i.deletions = [e], i.flags |= za) : s.push(e), a.flags |= Cn, a;
      }
    }
    function u1(e, t) {
      var a = e.lanes;
      return !!la(a, t);
    }
    function SR(e, t, a) {
      switch (t.tag) {
        case A:
          dS(t), t.stateNode, $f();
          break;
        case $:
          _2(t);
          break;
        case x: {
          var i = t.type;
          nl(i) && sm(t);
          break;
        }
        case V:
          n0(t, t.stateNode.containerInfo);
          break;
        case ge: {
          var l = t.memoizedProps.value, s = t.type._context;
          f2(t, s, l);
          break;
        }
        case be:
          {
            var v = la(a, t.childLanes);
            v && (t.flags |= At);
            {
              var y = t.stateNode;
              y.effectDuration = 0, y.passiveEffectDuration = 0;
            }
          }
          break;
        case de: {
          var g = t.memoizedState;
          if (g !== null) {
            if (g.dehydrated !== null)
              return Xu(t, Gf(yo.current)), t.flags |= tt, null;
            var b = t.child, T = b.childLanes;
            if (la(a, T))
              return vS(e, t, a);
            Xu(t, Gf(yo.current));
            var I = Zl(e, t, a);
            return I !== null ? I.sibling : null;
          } else
            Xu(t, Gf(yo.current));
          break;
        }
        case Ee: {
          var z = (e.flags & tt) !== at, Y = la(a, t.childLanes);
          if (z) {
            if (Y)
              return gS(e, t, a);
            t.flags |= tt;
          }
          var X = t.memoizedState;
          if (X !== null && (X.rendering = null, X.tail = null, X.lastEffect = null), Xu(t, yo.current), Y)
            break;
          return null;
        }
        case Z:
        case xe:
          return t.lanes = se, sS(e, t, a);
      }
      return Zl(e, t, a);
    }
    function CS(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return _R(e, t, P1(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, l = t.pendingProps;
        if (i !== l || lm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          So = !0;
        else {
          var s = u1(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & tt) === at)
            return So = !1, SR(e, t, a);
          (e.flags & Vc) !== at ? So = !0 : So = !1;
        }
      } else if (So = !1, $r() && qx(t)) {
        var v = t.index, y = Wx();
        Q_(t, y, v);
      }
      switch (t.lanes = se, t.tag) {
        case M:
          return tR(e, t, t.type, a);
        case Be: {
          var g = t.elementType;
          return Zb(e, t, g, a);
        }
        case k: {
          var b = t.type, T = t.pendingProps, I = t.elementType === b ? T : _o(b, T);
          return e1(e, t, b, I, a);
        }
        case x: {
          var z = t.type, Y = t.pendingProps, X = t.elementType === z ? Y : _o(z, Y);
          return fS(e, t, z, X, a);
        }
        case A:
          return Kb(e, t, a);
        case $:
          return Xb(e, t, a);
        case re:
          return Jb(e, t);
        case de:
          return vS(e, t, a);
        case V:
          return mR(e, t, a);
        case oe: {
          var te = t.type, je = t.pendingProps, lt = t.elementType === te ? je : _o(te, je);
          return oS(e, t, te, lt, a);
        }
        case ie:
          return Yb(e, t, a);
        case Ce:
          return Gb(e, t, a);
        case be:
          return Qb(e, t, a);
        case ge:
          return yR(e, t, a);
        case Re:
          return gR(e, t, a);
        case Ye: {
          var et = t.type, Pt = t.pendingProps, Ot = _o(et, Pt);
          if (t.type !== t.elementType) {
            var B = et.propTypes;
            B && vo(
              B,
              Ot,
              // Resolved for outer only
              "prop",
              It(et)
            );
          }
          return Ot = _o(et.type, Ot), lS(e, t, et, Ot, a);
        }
        case He:
          return uS(e, t, t.type, t.pendingProps, a);
        case nt: {
          var ne = t.type, q = t.pendingProps, ye = t.elementType === ne ? q : _o(ne, q);
          return eR(e, t, ne, ye, a);
        }
        case Ee:
          return gS(e, t, a);
        case Q:
          break;
        case Z:
          return sS(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function ed(e) {
      e.flags |= At;
    }
    function ES(e) {
      e.flags |= bn, e.flags |= Nu;
    }
    var wS, s1, xS, bS;
    wS = function(e, t, a, i) {
      for (var l = t.child; l !== null; ) {
        if (l.tag === $ || l.tag === re)
          Hw(e, l.stateNode);
        else if (l.tag !== V) {
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
    }, s1 = function(e, t) {
    }, xS = function(e, t, a, i, l) {
      var s = e.memoizedProps;
      if (s !== i) {
        var v = t.stateNode, y = r0(), g = Bw(v, a, s, i, l, y);
        t.updateQueue = g, g && ed(t);
      }
    }, bS = function(e, t, a, i) {
      a !== i && ed(t);
    };
    function nv(e, t) {
      if (!$r())
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
    function qr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = se, i = at;
      if (t) {
        if ((e.mode & $t) !== it) {
          for (var g = e.selfBaseDuration, b = e.child; b !== null; )
            a = xt(a, xt(b.lanes, b.childLanes)), i |= b.subtreeFlags & Fn, i |= b.flags & Fn, g += b.treeBaseDuration, b = b.sibling;
          e.treeBaseDuration = g;
        } else
          for (var T = e.child; T !== null; )
            a = xt(a, xt(T.lanes, T.childLanes)), i |= T.subtreeFlags & Fn, i |= T.flags & Fn, T.return = e, T = T.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & $t) !== it) {
          for (var l = e.actualDuration, s = e.selfBaseDuration, v = e.child; v !== null; )
            a = xt(a, xt(v.lanes, v.childLanes)), i |= v.subtreeFlags, i |= v.flags, l += v.actualDuration, s += v.treeBaseDuration, v = v.sibling;
          e.actualDuration = l, e.treeBaseDuration = s;
        } else
          for (var y = e.child; y !== null; )
            a = xt(a, xt(y.lanes, y.childLanes)), i |= y.subtreeFlags, i |= y.flags, y.return = e, y = y.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function CR(e, t, a) {
      if (ib() && (t.mode & Dt) !== it && (t.flags & tt) === at)
        return n2(t), $f(), t.flags |= kr | ws | rr, !1;
      var i = vm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (rb(t), qr(t), (t.mode & $t) !== it) {
            var l = a !== null;
            if (l) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if ($f(), (t.flags & tt) === at && (t.memoizedState = null), t.flags |= At, qr(t), (t.mode & $t) !== it) {
            var v = a !== null;
            if (v) {
              var y = t.child;
              y !== null && (t.treeBaseDuration -= y.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return r2(), !0;
    }
    function RS(e, t, a) {
      var i = t.pendingProps;
      switch (Ag(t), t.tag) {
        case M:
        case Be:
        case He:
        case k:
        case oe:
        case ie:
        case Ce:
        case be:
        case Re:
        case Ye:
          return qr(t), null;
        case x: {
          var l = t.type;
          return nl(l) && um(t), qr(t), null;
        }
        case A: {
          var s = t.stateNode;
          if (Yf(t), Mg(t), u0(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var v = vm(t);
            if (v)
              ed(t);
            else if (e !== null) {
              var y = e.memoizedState;
              // Check if this is a client root
              (!y.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & kr) !== at) && (t.flags |= Xn, r2());
            }
          }
          return s1(e, t), qr(t), null;
        }
        case $: {
          a0(t);
          var g = g2(), b = t.type;
          if (e !== null && t.stateNode != null)
            xS(e, t, b, i, g), e.ref !== t.ref && ES(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return qr(t), null;
            }
            var T = r0(), I = vm(t);
            if (I)
              tb(t, g, T) && ed(t);
            else {
              var z = Vw(b, i, g, T, t);
              wS(z, t, !1, !1), t.stateNode = z, $w(z, b, i, g) && ed(t);
            }
            t.ref !== null && ES(t);
          }
          return qr(t), null;
        }
        case re: {
          var Y = i;
          if (e && t.stateNode != null) {
            var X = e.memoizedProps;
            bS(e, t, X, Y);
          } else {
            if (typeof Y != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var te = g2(), je = r0(), lt = vm(t);
            lt ? nb(t) && ed(t) : t.stateNode = qw(Y, te, je, t);
          }
          return qr(t), null;
        }
        case de: {
          Qf(t);
          var et = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Pt = CR(e, t, et);
            if (!Pt)
              return t.flags & rr ? t : null;
          }
          if ((t.flags & tt) !== at)
            return t.lanes = a, (t.mode & $t) !== it && O0(t), t;
          var Ot = et !== null, B = e !== null && e.memoizedState !== null;
          if (Ot !== B && Ot) {
            var ne = t.child;
            if (ne.flags |= In, (t.mode & Dt) !== it) {
              var q = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              q || i0(yo.current, C2) ? Ek() : k1();
            }
          }
          var ye = t.updateQueue;
          if (ye !== null && (t.flags |= At), qr(t), (t.mode & $t) !== it && Ot) {
            var $e = t.child;
            $e !== null && (t.treeBaseDuration -= $e.treeBaseDuration);
          }
          return null;
        }
        case V:
          return Yf(t), s1(e, t), e === null && Px(t.stateNode.containerInfo), qr(t), null;
        case ge:
          var ze = t.type._context;
          return Qg(ze, t), qr(t), null;
        case nt: {
          var ht = t.type;
          return nl(ht) && um(t), qr(t), null;
        }
        case Ee: {
          Qf(t);
          var Ct = t.memoizedState;
          if (Ct === null)
            return qr(t), null;
          var on = (t.flags & tt) !== at, Wt = Ct.rendering;
          if (Wt === null)
            if (on)
              nv(Ct, !1);
            else {
              var er = xk() && (e === null || (e.flags & tt) === at);
              if (!er)
                for (var Yt = t.child; Yt !== null; ) {
                  var Wn = Nm(Yt);
                  if (Wn !== null) {
                    on = !0, t.flags |= tt, nv(Ct, !1);
                    var va = Wn.updateQueue;
                    return va !== null && (t.updateQueue = va, t.flags |= At), t.subtreeFlags = at, db(t, a), Xu(t, o0(yo.current, $p)), t.child;
                  }
                  Yt = Yt.sibling;
                }
              Ct.tail !== null && Jn() > YS() && (t.flags |= tt, on = !0, nv(Ct, !1), t.lanes = Gd);
            }
          else {
            if (!on) {
              var Kr = Nm(Wt);
              if (Kr !== null) {
                t.flags |= tt, on = !0;
                var gi = Kr.updateQueue;
                if (gi !== null && (t.updateQueue = gi, t.flags |= At), nv(Ct, !0), Ct.tail === null && Ct.tailMode === "hidden" && !Wt.alternate && !$r())
                  return qr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Jn() * 2 - Ct.renderingStartTime > YS() && a !== oa && (t.flags |= tt, on = !0, nv(Ct, !1), t.lanes = Gd);
            }
            if (Ct.isBackwards)
              Wt.sibling = t.child, t.child = Wt;
            else {
              var Da = Ct.last;
              Da !== null ? Da.sibling = Wt : t.child = Wt, Ct.last = Wt;
            }
          }
          if (Ct.tail !== null) {
            var Na = Ct.tail;
            Ct.rendering = Na, Ct.tail = Na.sibling, Ct.renderingStartTime = Jn(), Na.sibling = null;
            var ha = yo.current;
            return on ? ha = o0(ha, $p) : ha = Gf(ha), Xu(t, ha), Na;
          }
          return qr(t), null;
        }
        case Q:
          break;
        case Z:
        case xe: {
          R1(t);
          var au = t.memoizedState, ud = au !== null;
          if (e !== null) {
            var gv = e.memoizedState, cl = gv !== null;
            cl !== ud && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !le && (t.flags |= In);
          }
          return !ud || (t.mode & Dt) === it ? qr(t) : la(sl, oa) && (qr(t), t.subtreeFlags & (Cn | At) && (t.flags |= In)), null;
        }
        case Pe:
          return null;
        case De:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function ER(e, t, a) {
      switch (Ag(t), t.tag) {
        case x: {
          var i = t.type;
          nl(i) && um(t);
          var l = t.flags;
          return l & rr ? (t.flags = l & ~rr | tt, (t.mode & $t) !== it && O0(t), t) : null;
        }
        case A: {
          t.stateNode, Yf(t), Mg(t), u0();
          var s = t.flags;
          return (s & rr) !== at && (s & tt) === at ? (t.flags = s & ~rr | tt, t) : null;
        }
        case $:
          return a0(t), null;
        case de: {
          Qf(t);
          var v = t.memoizedState;
          if (v !== null && v.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            $f();
          }
          var y = t.flags;
          return y & rr ? (t.flags = y & ~rr | tt, (t.mode & $t) !== it && O0(t), t) : null;
        }
        case Ee:
          return Qf(t), null;
        case V:
          return Yf(t), null;
        case ge:
          var g = t.type._context;
          return Qg(g, t), null;
        case Z:
        case xe:
          return R1(t), null;
        case Pe:
          return null;
        default:
          return null;
      }
    }
    function kS(e, t, a) {
      switch (Ag(t), t.tag) {
        case x: {
          var i = t.type.childContextTypes;
          i != null && um(t);
          break;
        }
        case A: {
          t.stateNode, Yf(t), Mg(t), u0();
          break;
        }
        case $: {
          a0(t);
          break;
        }
        case V:
          Yf(t);
          break;
        case de:
          Qf(t);
          break;
        case Ee:
          Qf(t);
          break;
        case ge:
          var l = t.type._context;
          Qg(l, t);
          break;
        case Z:
        case xe:
          R1(t);
          break;
      }
    }
    var TS = null;
    TS = /* @__PURE__ */ new Set();
    var ey = !1, Wr = !1, wR = typeof WeakSet == "function" ? WeakSet : Set, Ke = null, td = null, nd = null;
    function xR(e) {
      Po(null, function() {
        throw e;
      }), Es();
    }
    var bR = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & $t)
        try {
          ll(), t.componentWillUnmount();
        } finally {
          ol(e);
        }
      else
        t.componentWillUnmount();
    };
    function DS(e, t) {
      try {
        es(yr, e);
      } catch (a) {
        mn(e, t, a);
      }
    }
    function c1(e, t, a) {
      try {
        bR(e, a);
      } catch (i) {
        mn(e, t, i);
      }
    }
    function RR(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        mn(e, t, i);
      }
    }
    function NS(e, t) {
      try {
        LS(e);
      } catch (a) {
        mn(e, t, a);
      }
    }
    function rd(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Ie && mt && e.mode & $t)
              try {
                ll(), i = a(null);
              } finally {
                ol(e);
              }
            else
              i = a(null);
          } catch (l) {
            mn(e, t, l);
          }
          typeof i == "function" && h("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", gt(e));
        } else
          a.current = null;
    }
    function ty(e, t, a) {
      try {
        a();
      } catch (i) {
        mn(e, t, i);
      }
    }
    var MS = !1;
    function kR(e, t) {
      Iw(e.containerInfo), Ke = t, TR();
      var a = MS;
      return MS = !1, a;
    }
    function TR() {
      for (; Ke !== null; ) {
        var e = Ke, t = e.child;
        (e.subtreeFlags & Fo) !== at && t !== null ? (t.return = e, Ke = t) : DR();
      }
    }
    function DR() {
      for (; Ke !== null; ) {
        var e = Ke;
        en(e);
        try {
          NR(e);
        } catch (a) {
          mn(e, e.return, a);
        }
        hn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ke = t;
          return;
        }
        Ke = e.return;
      }
    }
    function NR(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Xn) !== at) {
        switch (en(e), e.tag) {
          case k:
          case oe:
          case He:
            break;
          case x: {
            if (t !== null) {
              var i = t.memoizedProps, l = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !hc && (s.props !== e.memoizedProps && h("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", gt(e) || "instance"), s.state !== e.memoizedState && h("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", gt(e) || "instance"));
              var v = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : _o(e.type, i), l);
              {
                var y = TS;
                v === void 0 && !y.has(e.type) && (y.add(e.type), h("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", gt(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = v;
            }
            break;
          }
          case A: {
            {
              var g = e.stateNode;
              cx(g.containerInfo);
            }
            break;
          }
          case $:
          case re:
          case V:
          case nt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        hn();
      }
    }
    function Co(e, t, a) {
      var i = t.updateQueue, l = i !== null ? i.lastEffect : null;
      if (l !== null) {
        var s = l.next, v = s;
        do {
          if ((v.tag & e) === e) {
            var y = v.destroy;
            v.destroy = void 0, y !== void 0 && ((e & Br) !== Ga ? lo(t) : (e & yr) !== Ga && bs(t), (e & rl) !== Ga && hv(!0), ty(t, a, y), (e & rl) !== Ga && hv(!1), (e & Br) !== Ga ? Bo() : (e & yr) !== Ga && Wd());
          }
          v = v.next;
        } while (v !== s);
      }
    }
    function es(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var l = i.next, s = l;
        do {
          if ((s.tag & e) === e) {
            (e & Br) !== Ga ? qd(t) : (e & yr) !== Ga && Yc(t);
            var v = s.create;
            (e & rl) !== Ga && hv(!0), s.destroy = v(), (e & rl) !== Ga && hv(!1), (e & Br) !== Ga ? oh() : (e & yr) !== Ga && lh();
            {
              var y = s.destroy;
              if (y !== void 0 && typeof y != "function") {
                var g = void 0;
                (s.tag & yr) !== at ? g = "useLayoutEffect" : (s.tag & rl) !== at ? g = "useInsertionEffect" : g = "useEffect";
                var b = void 0;
                y === null ? b = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof y.then == "function" ? b = `

It looks like you wrote ` + g + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + g + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : b = " You returned: " + y, h("%s must not return anything besides a function, which is used for clean-up.%s", g, b);
              }
            }
          }
          s = s.next;
        } while (s !== l);
      }
    }
    function MR(e, t) {
      if ((t.flags & At) !== at)
        switch (t.tag) {
          case be: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, l = i.id, s = i.onPostCommit, v = Y2(), y = t.alternate === null ? "mount" : "update";
            W2() && (y = "nested-update"), typeof s == "function" && s(l, y, a, v);
            var g = t.return;
            e: for (; g !== null; ) {
              switch (g.tag) {
                case A:
                  var b = g.stateNode;
                  b.passiveEffectDuration += a;
                  break e;
                case be:
                  var T = g.stateNode;
                  T.passiveEffectDuration += a;
                  break e;
              }
              g = g.return;
            }
            break;
          }
        }
    }
    function LR(e, t, a, i) {
      if ((a.flags & Ho) !== at)
        switch (a.tag) {
          case k:
          case oe:
          case He: {
            if (!Wr)
              if (a.mode & $t)
                try {
                  ll(), es(yr | mr, a);
                } finally {
                  ol(a);
                }
              else
                es(yr | mr, a);
            break;
          }
          case x: {
            var l = a.stateNode;
            if (a.flags & At && !Wr)
              if (t === null)
                if (a.type === a.elementType && !hc && (l.props !== a.memoizedProps && h("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", gt(a) || "instance"), l.state !== a.memoizedState && h("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", gt(a) || "instance")), a.mode & $t)
                  try {
                    ll(), l.componentDidMount();
                  } finally {
                    ol(a);
                  }
                else
                  l.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : _o(a.type, t.memoizedProps), v = t.memoizedState;
                if (a.type === a.elementType && !hc && (l.props !== a.memoizedProps && h("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", gt(a) || "instance"), l.state !== a.memoizedState && h("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", gt(a) || "instance")), a.mode & $t)
                  try {
                    ll(), l.componentDidUpdate(s, v, l.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    ol(a);
                  }
                else
                  l.componentDidUpdate(s, v, l.__reactInternalSnapshotBeforeUpdate);
              }
            var y = a.updateQueue;
            y !== null && (a.type === a.elementType && !hc && (l.props !== a.memoizedProps && h("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", gt(a) || "instance"), l.state !== a.memoizedState && h("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", gt(a) || "instance")), y2(a, y, l));
            break;
          }
          case A: {
            var g = a.updateQueue;
            if (g !== null) {
              var b = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case $:
                    b = a.child.stateNode;
                    break;
                  case x:
                    b = a.child.stateNode;
                    break;
                }
              y2(a, g, b);
            }
            break;
          }
          case $: {
            var T = a.stateNode;
            if (t === null && a.flags & At) {
              var I = a.type, z = a.memoizedProps;
              Kw(T, I, z);
            }
            break;
          }
          case re:
            break;
          case V:
            break;
          case be: {
            {
              var Y = a.memoizedProps, X = Y.onCommit, te = Y.onRender, je = a.stateNode.effectDuration, lt = Y2(), et = t === null ? "mount" : "update";
              W2() && (et = "nested-update"), typeof te == "function" && te(a.memoizedProps.id, et, a.actualDuration, a.treeBaseDuration, a.actualStartTime, lt);
              {
                typeof X == "function" && X(a.memoizedProps.id, et, je, lt), Dk(a);
                var Pt = a.return;
                e: for (; Pt !== null; ) {
                  switch (Pt.tag) {
                    case A:
                      var Ot = Pt.stateNode;
                      Ot.effectDuration += je;
                      break e;
                    case be:
                      var B = Pt.stateNode;
                      B.effectDuration += je;
                      break e;
                  }
                  Pt = Pt.return;
                }
              }
            }
            break;
          }
          case de: {
            FR(e, a);
            break;
          }
          case Ee:
          case nt:
          case Q:
          case Z:
          case xe:
          case De:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Wr || a.flags & bn && LS(a);
    }
    function OR(e) {
      switch (e.tag) {
        case k:
        case oe:
        case He: {
          if (e.mode & $t)
            try {
              ll(), DS(e, e.return);
            } finally {
              ol(e);
            }
          else
            DS(e, e.return);
          break;
        }
        case x: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && RR(e, e.return, t), NS(e, e.return);
          break;
        }
        case $: {
          NS(e, e.return);
          break;
        }
      }
    }
    function jR(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === $) {
          if (a === null) {
            a = i;
            try {
              var l = i.stateNode;
              t ? ox(l) : ux(i.stateNode, i.memoizedProps);
            } catch (v) {
              mn(e, e.return, v);
            }
          }
        } else if (i.tag === re) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? lx(s) : sx(s, i.memoizedProps);
            } catch (v) {
              mn(e, e.return, v);
            }
        } else if (!((i.tag === Z || i.tag === xe) && i.memoizedState !== null && i !== e)) {
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
    function LS(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        if (e.tag === $ ? i = a : i = a, typeof t == "function") {
          var l;
          if (e.mode & $t)
            try {
              ll(), l = t(i);
            } finally {
              ol(e);
            }
          else
            l = t(i);
          typeof l == "function" && h("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", gt(e));
        } else
          t.hasOwnProperty("current") || h("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", gt(e)), t.current = i;
      }
    }
    function AR(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function OS(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, OS(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === $) {
          var a = e.stateNode;
          a !== null && Vx(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function UR(e) {
      for (var t = e.return; t !== null; ) {
        if (jS(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function jS(e) {
      return e.tag === $ || e.tag === A || e.tag === V;
    }
    function AS(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || jS(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== $ && t.tag !== re && t.tag !== ut; ) {
          if (t.flags & Cn || t.child === null || t.tag === V)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Cn))
          return t.stateNode;
      }
    }
    function zR(e) {
      var t = UR(e);
      switch (t.tag) {
        case $: {
          var a = t.stateNode;
          t.flags & Pa && (z_(a), t.flags &= ~Pa);
          var i = AS(e);
          d1(e, i, a);
          break;
        }
        case A:
        case V: {
          var l = t.stateNode.containerInfo, s = AS(e);
          f1(e, s, l);
          break;
        }
        // eslint-disable-next-line-no-fallthrough
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function f1(e, t, a) {
      var i = e.tag, l = i === $ || i === re;
      if (l) {
        var s = e.stateNode;
        t ? nx(a, s, t) : ex(a, s);
      } else if (i !== V) {
        var v = e.child;
        if (v !== null) {
          f1(v, t, a);
          for (var y = v.sibling; y !== null; )
            f1(y, t, a), y = y.sibling;
        }
      }
    }
    function d1(e, t, a) {
      var i = e.tag, l = i === $ || i === re;
      if (l) {
        var s = e.stateNode;
        t ? tx(a, s, t) : Zw(a, s);
      } else if (i !== V) {
        var v = e.child;
        if (v !== null) {
          d1(v, t, a);
          for (var y = v.sibling; y !== null; )
            d1(y, t, a), y = y.sibling;
        }
      }
    }
    var Yr = null, Eo = !1;
    function PR(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case $: {
              Yr = i.stateNode, Eo = !1;
              break e;
            }
            case A: {
              Yr = i.stateNode.containerInfo, Eo = !0;
              break e;
            }
            case V: {
              Yr = i.stateNode.containerInfo, Eo = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Yr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        US(e, t, a), Yr = null, Eo = !1;
      }
      AR(a);
    }
    function ts(e, t, a) {
      for (var i = a.child; i !== null; )
        US(e, t, i), i = i.sibling;
    }
    function US(e, t, a) {
      switch (Hd(a), a.tag) {
        case $:
          Wr || rd(a, t);
        // eslint-disable-next-line-no-fallthrough
        case re: {
          {
            var i = Yr, l = Eo;
            Yr = null, ts(e, t, a), Yr = i, Eo = l, Yr !== null && (Eo ? ax(Yr, a.stateNode) : rx(Yr, a.stateNode));
          }
          return;
        }
        case ut: {
          Yr !== null && (Eo ? ix(Yr, a.stateNode) : wg(Yr, a.stateNode));
          return;
        }
        case V: {
          {
            var s = Yr, v = Eo;
            Yr = a.stateNode.containerInfo, Eo = !0, ts(e, t, a), Yr = s, Eo = v;
          }
          return;
        }
        case k:
        case oe:
        case Ye:
        case He: {
          if (!Wr) {
            var y = a.updateQueue;
            if (y !== null) {
              var g = y.lastEffect;
              if (g !== null) {
                var b = g.next, T = b;
                do {
                  var I = T, z = I.destroy, Y = I.tag;
                  z !== void 0 && ((Y & rl) !== Ga ? ty(a, t, z) : (Y & yr) !== Ga && (bs(a), a.mode & $t ? (ll(), ty(a, t, z), ol(a)) : ty(a, t, z), Wd())), T = T.next;
                } while (T !== b);
              }
            }
          }
          ts(e, t, a);
          return;
        }
        case x: {
          if (!Wr) {
            rd(a, t);
            var X = a.stateNode;
            typeof X.componentWillUnmount == "function" && c1(a, t, X);
          }
          ts(e, t, a);
          return;
        }
        case Q: {
          ts(e, t, a);
          return;
        }
        case Z: {
          if (
            // TODO: Remove this dead flag
            a.mode & Dt
          ) {
            var te = Wr;
            Wr = te || a.memoizedState !== null, ts(e, t, a), Wr = te;
          } else
            ts(e, t, a);
          break;
        }
        default: {
          ts(e, t, a);
          return;
        }
      }
    }
    function IR(e) {
      e.memoizedState;
    }
    function FR(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var l = i.memoizedState;
          if (l !== null) {
            var s = l.dehydrated;
            s !== null && xx(s);
          }
        }
      }
    }
    function zS(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new wR()), t.forEach(function(i) {
          var l = Uk.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), ia)
              if (td !== null && nd !== null)
                vv(nd, td);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(l, l);
          }
        });
      }
    }
    function VR(e, t, a) {
      td = a, nd = e, en(t), PS(t, e), en(t), td = null, nd = null;
    }
    function wo(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l];
          try {
            PR(e, t, s);
          } catch (g) {
            mn(s, t, g);
          }
        }
      var v = Mo();
      if (t.subtreeFlags & Vo)
        for (var y = t.child; y !== null; )
          en(y), PS(y, e), y = y.sibling;
      en(v);
    }
    function PS(e, t, a) {
      var i = e.alternate, l = e.flags;
      switch (e.tag) {
        case k:
        case oe:
        case Ye:
        case He: {
          if (wo(t, e), ul(e), l & At) {
            try {
              Co(rl | mr, e, e.return), es(rl | mr, e);
            } catch (ht) {
              mn(e, e.return, ht);
            }
            if (e.mode & $t) {
              try {
                ll(), Co(yr | mr, e, e.return);
              } catch (ht) {
                mn(e, e.return, ht);
              }
              ol(e);
            } else
              try {
                Co(yr | mr, e, e.return);
              } catch (ht) {
                mn(e, e.return, ht);
              }
          }
          return;
        }
        case x: {
          wo(t, e), ul(e), l & bn && i !== null && rd(i, i.return);
          return;
        }
        case $: {
          wo(t, e), ul(e), l & bn && i !== null && rd(i, i.return);
          {
            if (e.flags & Pa) {
              var s = e.stateNode;
              try {
                z_(s);
              } catch (ht) {
                mn(e, e.return, ht);
              }
            }
            if (l & At) {
              var v = e.stateNode;
              if (v != null) {
                var y = e.memoizedProps, g = i !== null ? i.memoizedProps : y, b = e.type, T = e.updateQueue;
                if (e.updateQueue = null, T !== null)
                  try {
                    Xw(v, T, b, g, y, e);
                  } catch (ht) {
                    mn(e, e.return, ht);
                  }
              }
            }
          }
          return;
        }
        case re: {
          if (wo(t, e), ul(e), l & At) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var I = e.stateNode, z = e.memoizedProps, Y = i !== null ? i.memoizedProps : z;
            try {
              Jw(I, Y, z);
            } catch (ht) {
              mn(e, e.return, ht);
            }
          }
          return;
        }
        case A: {
          if (wo(t, e), ul(e), l & At && i !== null) {
            var X = i.memoizedState;
            if (X.isDehydrated)
              try {
                wx(t.containerInfo);
              } catch (ht) {
                mn(e, e.return, ht);
              }
          }
          return;
        }
        case V: {
          wo(t, e), ul(e);
          return;
        }
        case de: {
          wo(t, e), ul(e);
          var te = e.child;
          if (te.flags & In) {
            var je = te.stateNode, lt = te.memoizedState, et = lt !== null;
            if (je.isHidden = et, et) {
              var Pt = te.alternate !== null && te.alternate.memoizedState !== null;
              Pt || Ck();
            }
          }
          if (l & At) {
            try {
              IR(e);
            } catch (ht) {
              mn(e, e.return, ht);
            }
            zS(e);
          }
          return;
        }
        case Z: {
          var Ot = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Dt
          ) {
            var B = Wr;
            Wr = B || Ot, wo(t, e), Wr = B;
          } else
            wo(t, e);
          if (ul(e), l & In) {
            var ne = e.stateNode, q = e.memoizedState, ye = q !== null, $e = e;
            if (ne.isHidden = ye, ye && !Ot && ($e.mode & Dt) !== it) {
              Ke = $e;
              for (var ze = $e.child; ze !== null; )
                Ke = ze, $R(ze), ze = ze.sibling;
            }
            jR($e, ye);
          }
          return;
        }
        case Ee: {
          wo(t, e), ul(e), l & At && zS(e);
          return;
        }
        case Q:
          return;
        default: {
          wo(t, e), ul(e);
          return;
        }
      }
    }
    function ul(e) {
      var t = e.flags;
      if (t & Cn) {
        try {
          zR(e);
        } catch (a) {
          mn(e, e.return, a);
        }
        e.flags &= ~Cn;
      }
      t & na && (e.flags &= ~na);
    }
    function HR(e, t, a) {
      td = a, nd = t, Ke = e, IS(e, t, a), td = null, nd = null;
    }
    function IS(e, t, a) {
      for (var i = (e.mode & Dt) !== it; Ke !== null; ) {
        var l = Ke, s = l.child;
        if (l.tag === Z && i) {
          var v = l.memoizedState !== null, y = v || ey;
          if (y) {
            p1(e, t, a);
            continue;
          } else {
            var g = l.alternate, b = g !== null && g.memoizedState !== null, T = b || Wr, I = ey, z = Wr;
            ey = y, Wr = T, Wr && !z && (Ke = l, BR(l));
            for (var Y = s; Y !== null; )
              Ke = Y, IS(
                Y,
                // New root; bubble back up to here and stop.
                t,
                a
              ), Y = Y.sibling;
            Ke = l, ey = I, Wr = z, p1(e, t, a);
            continue;
          }
        }
        (l.subtreeFlags & Ho) !== at && s !== null ? (s.return = l, Ke = s) : p1(e, t, a);
      }
    }
    function p1(e, t, a) {
      for (; Ke !== null; ) {
        var i = Ke;
        if ((i.flags & Ho) !== at) {
          var l = i.alternate;
          en(i);
          try {
            LR(t, l, i, a);
          } catch (v) {
            mn(i, i.return, v);
          }
          hn();
        }
        if (i === e) {
          Ke = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Ke = s;
          return;
        }
        Ke = i.return;
      }
    }
    function $R(e) {
      for (; Ke !== null; ) {
        var t = Ke, a = t.child;
        switch (t.tag) {
          case k:
          case oe:
          case Ye:
          case He: {
            if (t.mode & $t)
              try {
                ll(), Co(yr, t, t.return);
              } finally {
                ol(t);
              }
            else
              Co(yr, t, t.return);
            break;
          }
          case x: {
            rd(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && c1(t, t.return, i);
            break;
          }
          case $: {
            rd(t, t.return);
            break;
          }
          case Z: {
            var l = t.memoizedState !== null;
            if (l) {
              FS(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Ke = a) : FS(e);
      }
    }
    function FS(e) {
      for (; Ke !== null; ) {
        var t = Ke;
        if (t === e) {
          Ke = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ke = a;
          return;
        }
        Ke = t.return;
      }
    }
    function BR(e) {
      for (; Ke !== null; ) {
        var t = Ke, a = t.child;
        if (t.tag === Z) {
          var i = t.memoizedState !== null;
          if (i) {
            VS(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Ke = a) : VS(e);
      }
    }
    function VS(e) {
      for (; Ke !== null; ) {
        var t = Ke;
        en(t);
        try {
          OR(t);
        } catch (i) {
          mn(t, t.return, i);
        }
        if (hn(), t === e) {
          Ke = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ke = a;
          return;
        }
        Ke = t.return;
      }
    }
    function qR(e, t, a, i) {
      Ke = t, WR(t, e, a, i);
    }
    function WR(e, t, a, i) {
      for (; Ke !== null; ) {
        var l = Ke, s = l.child;
        (l.subtreeFlags & io) !== at && s !== null ? (s.return = l, Ke = s) : YR(e, t, a, i);
      }
    }
    function YR(e, t, a, i) {
      for (; Ke !== null; ) {
        var l = Ke;
        if ((l.flags & ta) !== at) {
          en(l);
          try {
            GR(t, l, a, i);
          } catch (v) {
            mn(l, l.return, v);
          }
          hn();
        }
        if (l === e) {
          Ke = null;
          return;
        }
        var s = l.sibling;
        if (s !== null) {
          s.return = l.return, Ke = s;
          return;
        }
        Ke = l.return;
      }
    }
    function GR(e, t, a, i) {
      switch (t.tag) {
        case k:
        case oe:
        case He: {
          if (t.mode & $t) {
            L0();
            try {
              es(Br | mr, t);
            } finally {
              M0(t);
            }
          } else
            es(Br | mr, t);
          break;
        }
      }
    }
    function QR(e) {
      Ke = e, KR();
    }
    function KR() {
      for (; Ke !== null; ) {
        var e = Ke, t = e.child;
        if ((Ke.flags & za) !== at) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var l = a[i];
              Ke = l, ZR(l, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var v = s.child;
                if (v !== null) {
                  s.child = null;
                  do {
                    var y = v.sibling;
                    v.sibling = null, v = y;
                  } while (v !== null);
                }
              }
            }
            Ke = e;
          }
        }
        (e.subtreeFlags & io) !== at && t !== null ? (t.return = e, Ke = t) : XR();
      }
    }
    function XR() {
      for (; Ke !== null; ) {
        var e = Ke;
        (e.flags & ta) !== at && (en(e), JR(e), hn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ke = t;
          return;
        }
        Ke = e.return;
      }
    }
    function JR(e) {
      switch (e.tag) {
        case k:
        case oe:
        case He: {
          e.mode & $t ? (L0(), Co(Br | mr, e, e.return), M0(e)) : Co(Br | mr, e, e.return);
          break;
        }
      }
    }
    function ZR(e, t) {
      for (; Ke !== null; ) {
        var a = Ke;
        en(a), tk(a, t), hn();
        var i = a.child;
        i !== null ? (i.return = a, Ke = i) : ek(e);
      }
    }
    function ek(e) {
      for (; Ke !== null; ) {
        var t = Ke, a = t.sibling, i = t.return;
        if (OS(t), t === e) {
          Ke = null;
          return;
        }
        if (a !== null) {
          a.return = i, Ke = a;
          return;
        }
        Ke = i;
      }
    }
    function tk(e, t) {
      switch (e.tag) {
        case k:
        case oe:
        case He: {
          e.mode & $t ? (L0(), Co(Br, e, t), M0(e)) : Co(Br, e, t);
          break;
        }
      }
    }
    function nk(e) {
      switch (e.tag) {
        case k:
        case oe:
        case He: {
          try {
            es(yr | mr, e);
          } catch (a) {
            mn(e, e.return, a);
          }
          break;
        }
        case x: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            mn(e, e.return, a);
          }
          break;
        }
      }
    }
    function rk(e) {
      switch (e.tag) {
        case k:
        case oe:
        case He: {
          try {
            es(Br | mr, e);
          } catch (t) {
            mn(e, e.return, t);
          }
          break;
        }
      }
    }
    function ak(e) {
      switch (e.tag) {
        case k:
        case oe:
        case He: {
          try {
            Co(yr | mr, e, e.return);
          } catch (a) {
            mn(e, e.return, a);
          }
          break;
        }
        case x: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && c1(e, e.return, t);
          break;
        }
      }
    }
    function ik(e) {
      switch (e.tag) {
        case k:
        case oe:
        case He:
          try {
            Co(Br | mr, e, e.return);
          } catch (t) {
            mn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var rv = Symbol.for;
      rv("selector.component"), rv("selector.has_pseudo_class"), rv("selector.role"), rv("selector.test_id"), rv("selector.text");
    }
    var ok = [];
    function lk() {
      ok.forEach(function(e) {
        return e();
      });
    }
    var uk = d.ReactCurrentActQueue;
    function sk(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function HS() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && uk.current !== null && h("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var ck = Math.ceil, v1 = d.ReactCurrentDispatcher, h1 = d.ReactCurrentOwner, Gr = d.ReactCurrentBatchConfig, xo = d.ReactCurrentActQueue, Sr = (
      /*             */
      0
    ), $S = (
      /*               */
      1
    ), Qr = (
      /*                */
      2
    ), Wi = (
      /*                */
      4
    ), eu = 0, av = 1, mc = 2, ny = 3, iv = 4, BS = 5, m1 = 6, zt = Sr, ka = null, An = null, Cr = se, sl = se, y1 = qu(se), Er = eu, ov = null, ry = se, lv = se, ay = se, uv = null, Qa = null, g1 = 0, qS = 500, WS = 1 / 0, fk = 500, tu = null;
    function sv() {
      WS = Jn() + fk;
    }
    function YS() {
      return WS;
    }
    var iy = !1, _1 = null, ad = null, yc = !1, ns = null, cv = se, S1 = [], C1 = null, dk = 50, fv = 0, E1 = null, w1 = !1, oy = !1, pk = 50, id = 0, ly = null, dv = ln, uy = se, GS = !1;
    function sy() {
      return ka;
    }
    function Ta() {
      return (zt & (Qr | Wi)) !== Sr ? Jn() : (dv !== ln || (dv = Jn()), dv);
    }
    function rs(e) {
      var t = e.mode;
      if ((t & Dt) === it)
        return pt;
      if ((zt & Qr) !== Sr && Cr !== se)
        return Ps(Cr);
      var a = ub() !== lb;
      if (a) {
        if (Gr.transition !== null) {
          var i = Gr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return uy === Vt && (uy = ep()), uy;
      }
      var l = Ba();
      if (l !== Vt)
        return l;
      var s = Ww();
      return s;
    }
    function vk(e) {
      var t = e.mode;
      return (t & Dt) === it ? pt : ph();
    }
    function wr(e, t, a, i) {
      Pk(), GS && h("useInsertionEffect must not schedule updates."), w1 && (oy = !0), ju(e, a, i), (zt & Qr) !== se && e === ka ? Vk(t) : (ia && Vs(e, t, a), Hk(t), e === ka && ((zt & Qr) === Sr && (lv = xt(lv, a)), Er === iv && as(e, Cr)), Ka(e, i), a === pt && zt === Sr && (t.mode & Dt) === it && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !xo.isBatchingLegacy && (sv(), G_()));
    }
    function hk(e, t, a) {
      var i = e.current;
      i.lanes = t, ju(e, t, a), Ka(e, a);
    }
    function mk(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (zt & Qr) !== Sr
      );
    }
    function Ka(e, t) {
      var a = e.callbackNode;
      vf(e, t);
      var i = pf(e, e === ka ? Cr : se);
      if (i === se) {
        a !== null && cC(a), e.callbackNode = null, e.callbackPriority = Vt;
        return;
      }
      var l = Yo(i), s = e.callbackPriority;
      if (s === l && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(xo.current !== null && a !== N1)) {
        a == null && s !== pt && h("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && cC(a);
      var v;
      if (l === pt)
        e.tag === Wu ? (xo.isBatchingLegacy !== null && (xo.didScheduleLegacyUpdate = !0), Bx(XS.bind(null, e))) : Y_(XS.bind(null, e)), xo.current !== null ? xo.current.push(Yu) : Gw(function() {
          (zt & (Qr | Wi)) === Sr && Yu();
        }), v = null;
      else {
        var y;
        switch (Sh(i)) {
          case Pr:
            y = xs;
            break;
          case Ui:
            y = $o;
            break;
          case Ha:
            y = oo;
            break;
          case $a:
            y = Tl;
            break;
          default:
            y = oo;
            break;
        }
        v = M1(y, QS.bind(null, e));
      }
      e.callbackPriority = l, e.callbackNode = v;
    }
    function QS(e, t) {
      if (jb(), dv = ln, uy = se, (zt & (Qr | Wi)) !== Sr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = ru();
      if (i && e.callbackNode !== a)
        return null;
      var l = pf(e, e === ka ? Cr : se);
      if (l === se)
        return null;
      var s = !mf(e, l) && !dh(e, l) && !t, v = s ? Rk(e, l) : fy(e, l);
      if (v !== eu) {
        if (v === mc) {
          var y = hf(e);
          y !== se && (l = y, v = x1(e, y));
        }
        if (v === av) {
          var g = ov;
          throw gc(e, se), as(e, l), Ka(e, Jn()), g;
        }
        if (v === m1)
          as(e, l);
        else {
          var b = !mf(e, l), T = e.current.alternate;
          if (b && !gk(T)) {
            if (v = fy(e, l), v === mc) {
              var I = hf(e);
              I !== se && (l = I, v = x1(e, I));
            }
            if (v === av) {
              var z = ov;
              throw gc(e, se), as(e, l), Ka(e, Jn()), z;
            }
          }
          e.finishedWork = T, e.finishedLanes = l, yk(e, v, l);
        }
      }
      return Ka(e, Jn()), e.callbackNode === a ? QS.bind(null, e) : null;
    }
    function x1(e, t) {
      var a = uv;
      if (_f(e)) {
        var i = gc(e, t);
        i.flags |= kr, zx(e.containerInfo);
      }
      var l = fy(e, t);
      if (l !== mc) {
        var s = Qa;
        Qa = a, s !== null && KS(s);
      }
      return l;
    }
    function KS(e) {
      Qa === null ? Qa = e : Qa.push.apply(Qa, e);
    }
    function yk(e, t, a) {
      switch (t) {
        case eu:
        case av:
          throw new Error("Root did not complete. This is a bug in React.");
        // Flow knows about invariant, so it complains if I add a break
        // statement, but eslint doesn't know about invariant, so it complains
        // if I do. eslint-disable-next-line no-fallthrough
        case mc: {
          _c(e, Qa, tu);
          break;
        }
        case ny: {
          if (as(e, a), Il(a) && // do not delay if we're inside an act() scope
          !fC()) {
            var i = g1 + qS - Jn();
            if (i > 10) {
              var l = pf(e, se);
              if (l !== se)
                break;
              var s = e.suspendedLanes;
              if (!Fl(s, a)) {
                Ta(), yf(e, s);
                break;
              }
              e.timeoutHandle = Cg(_c.bind(null, e, Qa, tu), i);
              break;
            }
          }
          _c(e, Qa, tu);
          break;
        }
        case iv: {
          if (as(e, a), Jd(a))
            break;
          if (!fC()) {
            var v = pi(e, a), y = v, g = Jn() - y, b = zk(g) - g;
            if (b > 10) {
              e.timeoutHandle = Cg(_c.bind(null, e, Qa, tu), b);
              break;
            }
          }
          _c(e, Qa, tu);
          break;
        }
        case BS: {
          _c(e, Qa, tu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function gk(e) {
      for (var t = e; ; ) {
        if (t.flags & Du) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var l = 0; l < i.length; l++) {
                var s = i[l], v = s.getSnapshot, y = s.value;
                try {
                  if (!ve(v(), y))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var g = t.child;
        if (t.subtreeFlags & Du && g !== null) {
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
    function as(e, t) {
      t = Is(t, ay), t = Is(t, lv), mh(e, t);
    }
    function XS(e) {
      if (Ab(), (zt & (Qr | Wi)) !== Sr)
        throw new Error("Should not already be working.");
      ru();
      var t = pf(e, se);
      if (!la(t, pt))
        return Ka(e, Jn()), null;
      var a = fy(e, t);
      if (e.tag !== Wu && a === mc) {
        var i = hf(e);
        i !== se && (t = i, a = x1(e, i));
      }
      if (a === av) {
        var l = ov;
        throw gc(e, se), as(e, t), Ka(e, Jn()), l;
      }
      if (a === m1)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, _c(e, Qa, tu), Ka(e, Jn()), null;
    }
    function _k(e, t) {
      t !== se && (gf(e, xt(t, pt)), Ka(e, Jn()), (zt & (Qr | Wi)) === Sr && (sv(), Yu()));
    }
    function b1(e, t) {
      var a = zt;
      zt |= $S;
      try {
        return e(t);
      } finally {
        zt = a, zt === Sr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !xo.isBatchingLegacy && (sv(), G_());
      }
    }
    function Sk(e, t, a, i, l) {
      var s = Ba(), v = Gr.transition;
      try {
        return Gr.transition = null, $n(Pr), e(t, a, i, l);
      } finally {
        $n(s), Gr.transition = v, zt === Sr && sv();
      }
    }
    function nu(e) {
      ns !== null && ns.tag === Wu && (zt & (Qr | Wi)) === Sr && ru();
      var t = zt;
      zt |= $S;
      var a = Gr.transition, i = Ba();
      try {
        return Gr.transition = null, $n(Pr), e ? e() : void 0;
      } finally {
        $n(i), Gr.transition = a, zt = t, (zt & (Qr | Wi)) === Sr && Yu();
      }
    }
    function JS() {
      return (zt & (Qr | Wi)) !== Sr;
    }
    function cy(e, t) {
      da(y1, sl, e), sl = xt(sl, t);
    }
    function R1(e) {
      sl = y1.current, fa(y1, e);
    }
    function gc(e, t) {
      e.finishedWork = null, e.finishedLanes = se;
      var a = e.timeoutHandle;
      if (a !== Eg && (e.timeoutHandle = Eg, Yw(a)), An !== null)
        for (var i = An.return; i !== null; ) {
          var l = i.alternate;
          kS(l, i), i = i.return;
        }
      ka = e;
      var s = Sc(e.current, null);
      return An = s, Cr = sl = t, Er = eu, ov = null, ry = se, lv = se, ay = se, uv = null, Qa = null, hb(), mo.discardPendingWarnings(), s;
    }
    function ZS(e, t) {
      do {
        var a = An;
        try {
          if (Sm(), w2(), hn(), h1.current = null, a === null || a.return === null) {
            Er = av, ov = t, An = null;
            return;
          }
          if (Ie && a.mode & $t && Qm(a, !0), Xe)
            if (wa(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Ai(a, i, Cr);
            } else
              Rs(a, t, Cr);
          Bb(e, a.return, a, t, Cr), rC(a);
        } catch (l) {
          t = l, An === a && a !== null ? (a = a.return, An = a) : a = An;
          continue;
        }
        return;
      } while (!0);
    }
    function eC() {
      var e = v1.current;
      return v1.current = Bm, e === null ? Bm : e;
    }
    function tC(e) {
      v1.current = e;
    }
    function Ck() {
      g1 = Jn();
    }
    function pv(e) {
      ry = xt(e, ry);
    }
    function Ek() {
      Er === eu && (Er = ny);
    }
    function k1() {
      (Er === eu || Er === ny || Er === mc) && (Er = iv), ka !== null && (zs(ry) || zs(lv)) && as(ka, Cr);
    }
    function wk(e) {
      Er !== iv && (Er = mc), uv === null ? uv = [e] : uv.push(e);
    }
    function xk() {
      return Er === eu;
    }
    function fy(e, t) {
      var a = zt;
      zt |= Qr;
      var i = eC();
      if (ka !== e || Cr !== t) {
        if (ia) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (vv(e, Cr), l.clear()), yh(e, t);
        }
        tu = ap(), gc(e, t);
      }
      Ll(t);
      do
        try {
          bk();
          break;
        } catch (s) {
          ZS(e, s);
        }
      while (!0);
      if (Sm(), zt = a, tC(i), An !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Gc(), ka = null, Cr = se, Er;
    }
    function bk() {
      for (; An !== null; )
        nC(An);
    }
    function Rk(e, t) {
      var a = zt;
      zt |= Qr;
      var i = eC();
      if (ka !== e || Cr !== t) {
        if (ia) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (vv(e, Cr), l.clear()), yh(e, t);
        }
        tu = ap(), sv(), gc(e, t);
      }
      Ll(t);
      do
        try {
          kk();
          break;
        } catch (s) {
          ZS(e, s);
        }
      while (!0);
      return Sm(), tC(i), zt = a, An !== null ? (uh(), eu) : (Gc(), ka = null, Cr = se, Er);
    }
    function kk() {
      for (; An !== null && !zd(); )
        nC(An);
    }
    function nC(e) {
      var t = e.alternate;
      en(e);
      var a;
      (e.mode & $t) !== it ? (N0(e), a = T1(t, e, sl), Qm(e, !0)) : a = T1(t, e, sl), hn(), e.memoizedProps = e.pendingProps, a === null ? rC(e) : An = a, h1.current = null;
    }
    function rC(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & ws) === at) {
          en(t);
          var l = void 0;
          if ((t.mode & $t) === it ? l = RS(a, t, sl) : (N0(t), l = RS(a, t, sl), Qm(t, !1)), hn(), l !== null) {
            An = l;
            return;
          }
        } else {
          var s = ER(a, t);
          if (s !== null) {
            s.flags &= nh, An = s;
            return;
          }
          if ((t.mode & $t) !== it) {
            Qm(t, !1);
            for (var v = t.actualDuration, y = t.child; y !== null; )
              v += y.actualDuration, y = y.sibling;
            t.actualDuration = v;
          }
          if (i !== null)
            i.flags |= ws, i.subtreeFlags = at, i.deletions = null;
          else {
            Er = m1, An = null;
            return;
          }
        }
        var g = t.sibling;
        if (g !== null) {
          An = g;
          return;
        }
        t = i, An = t;
      } while (t !== null);
      Er === eu && (Er = BS);
    }
    function _c(e, t, a) {
      var i = Ba(), l = Gr.transition;
      try {
        Gr.transition = null, $n(Pr), Tk(e, t, a, i);
      } finally {
        Gr.transition = l, $n(i);
      }
      return null;
    }
    function Tk(e, t, a, i) {
      do
        ru();
      while (ns !== null);
      if (Ik(), (zt & (Qr | Wi)) !== Sr)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, s = e.finishedLanes;
      if ($d(s), l === null)
        return Bd(), null;
      if (s === se && h("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = se, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Vt;
      var v = xt(l.lanes, l.childLanes);
      np(e, v), e === ka && (ka = null, An = null, Cr = se), ((l.subtreeFlags & io) !== at || (l.flags & io) !== at) && (yc || (yc = !0, C1 = a, M1(oo, function() {
        return ru(), null;
      })));
      var y = (l.subtreeFlags & (Fo | Vo | Ho | io)) !== at, g = (l.flags & (Fo | Vo | Ho | io)) !== at;
      if (y || g) {
        var b = Gr.transition;
        Gr.transition = null;
        var T = Ba();
        $n(Pr);
        var I = zt;
        zt |= Wi, h1.current = null, kR(e, l), G2(), VR(e, l, s), Fw(e.containerInfo), e.current = l, ks(s), HR(l, e, s), Ts(), Pd(), zt = I, $n(T), Gr.transition = b;
      } else
        e.current = l, G2();
      var z = yc;
      if (yc ? (yc = !1, ns = e, cv = s) : (id = 0, ly = null), v = e.pendingLanes, v === se && (ad = null), z || lC(e.current, !1), Fd(l.stateNode, i), ia && e.memoizedUpdaters.clear(), lk(), Ka(e, Jn()), t !== null)
        for (var Y = e.onRecoverableError, X = 0; X < t.length; X++) {
          var te = t[X], je = te.stack, lt = te.digest;
          Y(te.value, {
            componentStack: je,
            digest: lt
          });
        }
      if (iy) {
        iy = !1;
        var et = _1;
        throw _1 = null, et;
      }
      return la(cv, pt) && e.tag !== Wu && ru(), v = e.pendingLanes, la(v, pt) ? (Ob(), e === E1 ? fv++ : (fv = 0, E1 = e)) : fv = 0, Yu(), Bd(), null;
    }
    function ru() {
      if (ns !== null) {
        var e = Sh(cv), t = $s(Ha, e), a = Gr.transition, i = Ba();
        try {
          return Gr.transition = null, $n(t), Nk();
        } finally {
          $n(i), Gr.transition = a;
        }
      }
      return !1;
    }
    function Dk(e) {
      S1.push(e), yc || (yc = !0, M1(oo, function() {
        return ru(), null;
      }));
    }
    function Nk() {
      if (ns === null)
        return !1;
      var e = C1;
      C1 = null;
      var t = ns, a = cv;
      if (ns = null, cv = se, (zt & (Qr | Wi)) !== Sr)
        throw new Error("Cannot flush passive effects while already rendering.");
      w1 = !0, oy = !1, Ml(a);
      var i = zt;
      zt |= Wi, QR(t.current), qR(t, t.current, a, e);
      {
        var l = S1;
        S1 = [];
        for (var s = 0; s < l.length; s++) {
          var v = l[s];
          MR(t, v);
        }
      }
      Yd(), lC(t.current, !0), zt = i, Yu(), oy ? t === ly ? id++ : (id = 0, ly = t) : id = 0, w1 = !1, oy = !1, Vd(t);
      {
        var y = t.current.stateNode;
        y.effectDuration = 0, y.passiveEffectDuration = 0;
      }
      return !0;
    }
    function aC(e) {
      return ad !== null && ad.has(e);
    }
    function Mk(e) {
      ad === null ? ad = /* @__PURE__ */ new Set([e]) : ad.add(e);
    }
    function Lk(e) {
      iy || (iy = !0, _1 = e);
    }
    var Ok = Lk;
    function iC(e, t, a) {
      var i = vc(a, t), l = nS(e, i, pt), s = Qu(e, l, pt), v = Ta();
      s !== null && (ju(s, pt, v), Ka(s, v));
    }
    function mn(e, t, a) {
      if (xR(a), hv(!1), e.tag === A) {
        iC(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === A) {
          iC(i, e, a);
          return;
        } else if (i.tag === x) {
          var l = i.type, s = i.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !aC(s)) {
            var v = vc(a, e), y = G0(i, v, pt), g = Qu(i, y, pt), b = Ta();
            g !== null && (ju(g, pt, b), Ka(g, b));
            return;
          }
        }
        i = i.return;
      }
      h(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function jk(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var l = Ta();
      yf(e, a), $k(e), ka === e && Fl(Cr, a) && (Er === iv || Er === ny && Il(Cr) && Jn() - g1 < qS ? gc(e, se) : ay = xt(ay, a)), Ka(e, l);
    }
    function oC(e, t) {
      t === Vt && (t = vk(e));
      var a = Ta(), i = Ya(e, t);
      i !== null && (ju(i, t, a), Ka(i, a));
    }
    function Ak(e) {
      var t = e.memoizedState, a = Vt;
      t !== null && (a = t.retryLane), oC(e, a);
    }
    function Uk(e, t) {
      var a = Vt, i;
      switch (e.tag) {
        case de:
          i = e.stateNode;
          var l = e.memoizedState;
          l !== null && (a = l.retryLane);
          break;
        case Ee:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), oC(e, a);
    }
    function zk(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : ck(e / 1960) * 1960;
    }
    function Pk() {
      if (fv > dk)
        throw fv = 0, E1 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      id > pk && (id = 0, ly = null, h("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Ik() {
      mo.flushLegacyContextWarning(), mo.flushPendingUnsafeLifecycleWarnings();
    }
    function lC(e, t) {
      en(e), dy(e, Io, ak), t && dy(e, Li, ik), dy(e, Io, nk), t && dy(e, Li, rk), hn();
    }
    function dy(e, t, a) {
      for (var i = e, l = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== l && i.child !== null && s !== at ? i = i.child : ((i.flags & t) !== at && a(i), i.sibling !== null ? i = i.sibling : i = l = i.return);
      }
    }
    var py = null;
    function uC(e) {
      {
        if ((zt & Qr) !== Sr || !(e.mode & Dt))
          return;
        var t = e.tag;
        if (t !== M && t !== A && t !== x && t !== k && t !== oe && t !== Ye && t !== He)
          return;
        var a = gt(e) || "ReactComponent";
        if (py !== null) {
          if (py.has(a))
            return;
          py.add(a);
        } else
          py = /* @__PURE__ */ new Set([a]);
        var i = fr;
        try {
          en(e), h("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? en(e) : hn();
        }
      }
    }
    var T1;
    {
      var Fk = null;
      T1 = function(e, t, a) {
        var i = mC(Fk, t);
        try {
          return CS(e, t, a);
        } catch (s) {
          if (Jx() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Sm(), w2(), kS(e, t), mC(t, i), t.mode & $t && N0(t), Po(null, CS, null, e, t, a), ro()) {
            var l = Es();
            typeof l == "object" && l !== null && l._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var sC = !1, D1;
    D1 = /* @__PURE__ */ new Set();
    function Vk(e) {
      if (bi && !Nb())
        switch (e.tag) {
          case k:
          case oe:
          case He: {
            var t = An && gt(An) || "Unknown", a = t;
            if (!D1.has(a)) {
              D1.add(a);
              var i = gt(e) || "Unknown";
              h("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case x: {
            sC || (h("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), sC = !0);
            break;
          }
        }
    }
    function vv(e, t) {
      if (ia) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Vs(e, i, t);
        });
      }
    }
    var N1 = {};
    function M1(e, t) {
      {
        var a = xo.current;
        return a !== null ? (a.push(t), N1) : Ud(e, t);
      }
    }
    function cC(e) {
      if (e !== N1)
        return ah(e);
    }
    function fC() {
      return xo.current !== null;
    }
    function Hk(e) {
      {
        if (e.mode & Dt) {
          if (!HS())
            return;
        } else if (!sk() || zt !== Sr || e.tag !== k && e.tag !== oe && e.tag !== He)
          return;
        if (xo.current === null) {
          var t = fr;
          try {
            en(e), h(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, gt(e));
          } finally {
            t ? en(e) : hn();
          }
        }
      }
    }
    function $k(e) {
      e.tag !== Wu && HS() && xo.current === null && h(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function hv(e) {
      GS = e;
    }
    var Yi = null, od = null, Bk = function(e) {
      Yi = e;
    };
    function ld(e) {
      {
        if (Yi === null)
          return e;
        var t = Yi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function L1(e) {
      return ld(e);
    }
    function O1(e) {
      {
        if (Yi === null)
          return e;
        var t = Yi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = ld(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: ue,
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
    function dC(e, t) {
      {
        if (Yi === null)
          return !1;
        var a = e.elementType, i = t.type, l = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case x: {
            typeof i == "function" && (l = !0);
            break;
          }
          case k: {
            (typeof i == "function" || s === _t) && (l = !0);
            break;
          }
          case oe: {
            (s === ue || s === _t) && (l = !0);
            break;
          }
          case Ye:
          case He: {
            (s === Et || s === _t) && (l = !0);
            break;
          }
          default:
            return !1;
        }
        if (l) {
          var v = Yi(a);
          if (v !== void 0 && v === Yi(i))
            return !0;
        }
        return !1;
      }
    }
    function pC(e) {
      {
        if (Yi === null || typeof WeakSet != "function")
          return;
        od === null && (od = /* @__PURE__ */ new WeakSet()), od.add(e);
      }
    }
    var qk = function(e, t) {
      {
        if (Yi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        ru(), nu(function() {
          j1(e.current, i, a);
        });
      }
    }, Wk = function(e, t) {
      {
        if (e.context !== mi)
          return;
        ru(), nu(function() {
          mv(t, e, null, null);
        });
      }
    };
    function j1(e, t, a) {
      {
        var i = e.alternate, l = e.child, s = e.sibling, v = e.tag, y = e.type, g = null;
        switch (v) {
          case k:
          case He:
          case x:
            g = y;
            break;
          case oe:
            g = y.render;
            break;
        }
        if (Yi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var b = !1, T = !1;
        if (g !== null) {
          var I = Yi(g);
          I !== void 0 && (a.has(I) ? T = !0 : t.has(I) && (v === x ? T = !0 : b = !0));
        }
        if (od !== null && (od.has(e) || i !== null && od.has(i)) && (T = !0), T && (e._debugNeedsRemount = !0), T || b) {
          var z = Ya(e, pt);
          z !== null && wr(z, e, pt, ln);
        }
        l !== null && !T && j1(l, t, a), s !== null && j1(s, t, a);
      }
    }
    var Yk = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(l) {
          return l.current;
        }));
        return A1(e.current, i, a), a;
      }
    };
    function A1(e, t, a) {
      {
        var i = e.child, l = e.sibling, s = e.tag, v = e.type, y = null;
        switch (s) {
          case k:
          case He:
          case x:
            y = v;
            break;
          case oe:
            y = v.render;
            break;
        }
        var g = !1;
        y !== null && t.has(y) && (g = !0), g ? Gk(e, a) : i !== null && A1(i, t, a), l !== null && A1(l, t, a);
      }
    }
    function Gk(e, t) {
      {
        var a = Qk(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case $:
              t.add(i.stateNode);
              return;
            case V:
              t.add(i.stateNode.containerInfo);
              return;
            case A:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function Qk(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === $)
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
    var U1;
    {
      U1 = !1;
      try {
        var vC = Object.preventExtensions({});
      } catch {
        U1 = !0;
      }
    }
    function Kk(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = at, this.subtreeFlags = at, this.deletions = null, this.lanes = se, this.childLanes = se, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !U1 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var yi = function(e, t, a, i) {
      return new Kk(e, t, a, i);
    };
    function z1(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Xk(e) {
      return typeof e == "function" && !z1(e) && e.defaultProps === void 0;
    }
    function Jk(e) {
      if (typeof e == "function")
        return z1(e) ? x : k;
      if (e != null) {
        var t = e.$$typeof;
        if (t === ue)
          return oe;
        if (t === Et)
          return Ye;
      }
      return M;
    }
    function Sc(e, t) {
      var a = e.alternate;
      a === null ? (a = yi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = at, a.subtreeFlags = at, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Fn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case M:
        case k:
        case He:
          a.type = ld(e.type);
          break;
        case x:
          a.type = L1(e.type);
          break;
        case oe:
          a.type = O1(e.type);
          break;
      }
      return a;
    }
    function Zk(e, t) {
      e.flags &= Fn | Cn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = se, e.lanes = t, e.child = null, e.subtreeFlags = at, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = at, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function eT(e, t, a) {
      var i;
      return e === cm ? (i = Dt, t === !0 && (i |= rn, i |= Bt)) : i = it, ia && (i |= $t), yi(A, null, null, i);
    }
    function P1(e, t, a, i, l, s) {
      var v = M, y = e;
      if (typeof e == "function")
        z1(e) ? (v = x, y = L1(y)) : y = ld(y);
      else if (typeof e == "string")
        v = $;
      else
        e: switch (e) {
          case Ci:
            return is(a.children, l, s, t);
          case ni:
            v = Ce, l |= rn, (l & Dt) !== it && (l |= Bt);
            break;
          case Ei:
            return tT(a, l, s, t);
          case Me:
            return nT(a, l, s, t);
          case We:
            return rT(a, l, s, t);
          case Dn:
            return hC(a, l, s, t);
          case cn:
          // eslint-disable-next-line no-fallthrough
          case Mt:
          // eslint-disable-next-line no-fallthrough
          case vn:
          // eslint-disable-next-line no-fallthrough
          case cr:
          // eslint-disable-next-line no-fallthrough
          case Tt:
          // eslint-disable-next-line no-fallthrough
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case wi:
                  v = ge;
                  break e;
                case O:
                  v = Re;
                  break e;
                case ue:
                  v = oe, y = O1(y);
                  break e;
                case Et:
                  v = Ye;
                  break e;
                case _t:
                  v = Be, y = null;
                  break e;
              }
            var g = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var b = i ? gt(i) : null;
              b && (g += `

Check the render method of \`` + b + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + g));
          }
        }
      var T = yi(v, a, t, l);
      return T.elementType = e, T.type = y, T.lanes = s, T._debugOwner = i, T;
    }
    function I1(e, t, a) {
      var i = null;
      i = e._owner;
      var l = e.type, s = e.key, v = e.props, y = P1(l, s, v, i, t, a);
      return y._debugSource = e._source, y._debugOwner = e._owner, y;
    }
    function is(e, t, a, i) {
      var l = yi(ie, e, i, t);
      return l.lanes = a, l;
    }
    function tT(e, t, a, i) {
      typeof e.id != "string" && h('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l = yi(be, e, i, t | $t);
      return l.elementType = Ei, l.lanes = a, l.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, l;
    }
    function nT(e, t, a, i) {
      var l = yi(de, e, i, t);
      return l.elementType = Me, l.lanes = a, l;
    }
    function rT(e, t, a, i) {
      var l = yi(Ee, e, i, t);
      return l.elementType = We, l.lanes = a, l;
    }
    function hC(e, t, a, i) {
      var l = yi(Z, e, i, t);
      l.elementType = Dn, l.lanes = a;
      var s = {
        isHidden: !1
      };
      return l.stateNode = s, l;
    }
    function F1(e, t, a) {
      var i = yi(re, e, null, t);
      return i.lanes = a, i;
    }
    function aT() {
      var e = yi($, null, null, it);
      return e.elementType = "DELETED", e;
    }
    function iT(e) {
      var t = yi(ut, null, null, it);
      return t.stateNode = e, t;
    }
    function V1(e, t, a) {
      var i = e.children !== null ? e.children : [], l = yi(V, i, e.key, t);
      return l.lanes = a, l.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, l;
    }
    function mC(e, t) {
      return e === null && (e = yi(M, null, null, it)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function oT(e, t, a, i, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Eg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Vt, this.eventTimes = Fs(se), this.expirationTimes = Fs(ln), this.pendingLanes = se, this.suspendedLanes = se, this.pingedLanes = se, this.expiredLanes = se, this.mutableReadLanes = se, this.finishedLanes = se, this.entangledLanes = se, this.entanglements = Fs(se), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], v = 0; v < Ol; v++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case cm:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Wu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function yC(e, t, a, i, l, s, v, y, g, b) {
      var T = new oT(e, t, a, y, g), I = eT(t, s);
      T.current = I, I.stateNode = T;
      {
        var z = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        I.memoizedState = z;
      }
      return e0(I), T;
    }
    var H1 = "18.3.1";
    function lT(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Jr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: sr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var $1, B1;
    $1 = !1, B1 = {};
    function gC(e) {
      if (!e)
        return mi;
      var t = Tu(e), a = $x(t);
      if (t.tag === x) {
        var i = t.type;
        if (nl(i))
          return q_(t, i, a);
      }
      return a;
    }
    function uT(e, t) {
      {
        var a = Tu(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var l = ra(a);
        if (l === null)
          return null;
        if (l.mode & rn) {
          var s = gt(a) || "Component";
          if (!B1[s]) {
            B1[s] = !0;
            var v = fr;
            try {
              en(l), a.mode & rn ? h("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : h("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              v ? en(v) : hn();
            }
          }
        }
        return l.stateNode;
      }
    }
    function _C(e, t, a, i, l, s, v, y) {
      var g = !1, b = null;
      return yC(e, t, g, b, a, i, l, s, v);
    }
    function SC(e, t, a, i, l, s, v, y, g, b) {
      var T = !0, I = yC(a, i, T, e, l, s, v, y, g);
      I.context = gC(null);
      var z = I.current, Y = Ta(), X = rs(z), te = Jl(Y, X);
      return te.callback = t ?? null, Qu(z, te, X), hk(I, X, Y), I;
    }
    function mv(e, t, a, i) {
      Id(t, e);
      var l = t.current, s = Ta(), v = rs(l);
      wn(v);
      var y = gC(a);
      t.context === null ? t.context = y : t.pendingContext = y, bi && fr !== null && !$1 && ($1 = !0, h(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, gt(fr) || "Unknown"));
      var g = Jl(s, v);
      g.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && h("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), g.callback = i);
      var b = Qu(l, g, v);
      return b !== null && (wr(b, l, v, s), bm(b, l, v)), v;
    }
    function vy(e) {
      var t = e.current;
      return t.child ? t.child.tag === $ ? t.child.stateNode : t.child.stateNode : null;
    }
    function sT(e) {
      switch (e.tag) {
        case A: {
          var t = e.stateNode;
          if (_f(t)) {
            var a = ch(t);
            _k(t, a);
          }
          break;
        }
        case de: {
          nu(function() {
            var l = Ya(e, pt);
            if (l !== null) {
              var s = Ta();
              wr(l, e, pt, s);
            }
          });
          var i = pt;
          q1(e, i);
          break;
        }
      }
    }
    function CC(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = hh(a.retryLane, t));
    }
    function q1(e, t) {
      CC(e, t);
      var a = e.alternate;
      a && CC(a, t);
    }
    function cT(e) {
      if (e.tag === de) {
        var t = js, a = Ya(e, t);
        if (a !== null) {
          var i = Ta();
          wr(a, e, t, i);
        }
        q1(e, t);
      }
    }
    function fT(e) {
      if (e.tag === de) {
        var t = rs(e), a = Ya(e, t);
        if (a !== null) {
          var i = Ta();
          wr(a, e, t, i);
        }
        q1(e, t);
      }
    }
    function EC(e) {
      var t = yn(e);
      return t === null ? null : t.stateNode;
    }
    var wC = function(e) {
      return null;
    };
    function dT(e) {
      return wC(e);
    }
    var xC = function(e) {
      return !1;
    };
    function pT(e) {
      return xC(e);
    }
    var bC = null, RC = null, kC = null, TC = null, DC = null, NC = null, MC = null, LC = null, OC = null;
    {
      var jC = function(e, t, a) {
        var i = t[a], l = kt(e) ? e.slice() : bt({}, e);
        return a + 1 === t.length ? (kt(l) ? l.splice(i, 1) : delete l[i], l) : (l[i] = jC(e[i], t, a + 1), l);
      }, AC = function(e, t) {
        return jC(e, t, 0);
      }, UC = function(e, t, a, i) {
        var l = t[i], s = kt(e) ? e.slice() : bt({}, e);
        if (i + 1 === t.length) {
          var v = a[i];
          s[v] = s[l], kt(s) ? s.splice(l, 1) : delete s[l];
        } else
          s[l] = UC(
            // $FlowFixMe number or string is fine here
            e[l],
            t,
            a,
            i + 1
          );
        return s;
      }, zC = function(e, t, a) {
        if (t.length !== a.length) {
          E("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              E("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return UC(e, t, a, 0);
      }, PC = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var l = t[a], s = kt(e) ? e.slice() : bt({}, e);
        return s[l] = PC(e[l], t, a + 1, i), s;
      }, IC = function(e, t, a) {
        return PC(e, t, 0, a);
      }, W1 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      bC = function(e, t, a, i) {
        var l = W1(e, t);
        if (l !== null) {
          var s = IC(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = bt({}, e.memoizedProps);
          var v = Ya(e, pt);
          v !== null && wr(v, e, pt, ln);
        }
      }, RC = function(e, t, a) {
        var i = W1(e, t);
        if (i !== null) {
          var l = AC(i.memoizedState, a);
          i.memoizedState = l, i.baseState = l, e.memoizedProps = bt({}, e.memoizedProps);
          var s = Ya(e, pt);
          s !== null && wr(s, e, pt, ln);
        }
      }, kC = function(e, t, a, i) {
        var l = W1(e, t);
        if (l !== null) {
          var s = zC(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = bt({}, e.memoizedProps);
          var v = Ya(e, pt);
          v !== null && wr(v, e, pt, ln);
        }
      }, TC = function(e, t, a) {
        e.pendingProps = IC(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ya(e, pt);
        i !== null && wr(i, e, pt, ln);
      }, DC = function(e, t) {
        e.pendingProps = AC(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ya(e, pt);
        a !== null && wr(a, e, pt, ln);
      }, NC = function(e, t, a) {
        e.pendingProps = zC(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ya(e, pt);
        i !== null && wr(i, e, pt, ln);
      }, MC = function(e) {
        var t = Ya(e, pt);
        t !== null && wr(t, e, pt, ln);
      }, LC = function(e) {
        wC = e;
      }, OC = function(e) {
        xC = e;
      };
    }
    function vT(e) {
      var t = ra(e);
      return t === null ? null : t.stateNode;
    }
    function hT(e) {
      return null;
    }
    function mT() {
      return fr;
    }
    function yT(e) {
      var t = e.findFiberByHostInstance, a = d.ReactCurrentDispatcher;
      return Mu({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: bC,
        overrideHookStateDeletePath: RC,
        overrideHookStateRenamePath: kC,
        overrideProps: TC,
        overridePropsDeletePath: DC,
        overridePropsRenamePath: NC,
        setErrorHandler: LC,
        setSuspenseHandler: OC,
        scheduleUpdate: MC,
        currentDispatcherRef: a,
        findHostInstanceByFiber: vT,
        findFiberByHostInstance: t || hT,
        // React Refresh
        findHostInstancesForRefresh: Yk,
        scheduleRefresh: qk,
        scheduleRoot: Wk,
        setRefreshHandler: Bk,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: mT,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: H1
      });
    }
    var FC = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function Y1(e) {
      this._internalRoot = e;
    }
    hy.prototype.render = Y1.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? h("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : my(arguments[1]) ? h("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && h("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Pn) {
          var i = EC(t.current);
          i && i.parentNode !== a && h("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      mv(e, t, null, null);
    }, hy.prototype.unmount = Y1.prototype.unmount = function() {
      typeof arguments[0] == "function" && h("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        JS() && h("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), nu(function() {
          mv(null, e, null, null);
        }), F_(t);
      }
    };
    function gT(e, t) {
      if (!my(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      VC(e);
      var a = !1, i = !1, l = "", s = FC;
      t != null && (t.hydrate ? E("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === jr && h(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var v = _C(e, cm, null, a, i, l, s);
      rm(v.current, e);
      var y = e.nodeType === Pn ? e.parentNode : e;
      return Ep(y), new Y1(v);
    }
    function hy(e) {
      this._internalRoot = e;
    }
    function _T(e) {
      e && bh(e);
    }
    hy.prototype.unstable_scheduleHydration = _T;
    function ST(e, t, a) {
      if (!my(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      VC(e), t === void 0 && h("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, l = a != null && a.hydratedSources || null, s = !1, v = !1, y = "", g = FC;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (y = a.identifierPrefix), a.onRecoverableError !== void 0 && (g = a.onRecoverableError));
      var b = SC(t, null, e, cm, i, s, v, y, g);
      if (rm(b.current, e), Ep(e), l)
        for (var T = 0; T < l.length; T++) {
          var I = l[T];
          xb(b, I);
        }
      return new hy(b);
    }
    function my(e) {
      return !!(e && (e.nodeType === ea || e.nodeType === no || e.nodeType === xd));
    }
    function yv(e) {
      return !!(e && (e.nodeType === ea || e.nodeType === no || e.nodeType === xd || e.nodeType === Pn && e.nodeValue === " react-mount-point-unstable "));
    }
    function VC(e) {
      e.nodeType === ea && e.tagName && e.tagName.toUpperCase() === "BODY" && h("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Op(e) && (e._reactRootContainer ? h("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : h("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var CT = d.ReactCurrentOwner, HC;
    HC = function(e) {
      if (e._reactRootContainer && e.nodeType !== Pn) {
        var t = EC(e._reactRootContainer.current);
        t && t.parentNode !== e && h("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = G1(e), l = !!(i && Bu(i));
      l && !a && h("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === ea && e.tagName && e.tagName.toUpperCase() === "BODY" && h("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function G1(e) {
      return e ? e.nodeType === no ? e.documentElement : e.firstChild : null;
    }
    function $C() {
    }
    function ET(e, t, a, i, l) {
      if (l) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var z = vy(v);
            s.call(z);
          };
        }
        var v = SC(
          t,
          i,
          e,
          Wu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          $C
        );
        e._reactRootContainer = v, rm(v.current, e);
        var y = e.nodeType === Pn ? e.parentNode : e;
        return Ep(y), nu(), v;
      } else {
        for (var g; g = e.lastChild; )
          e.removeChild(g);
        if (typeof i == "function") {
          var b = i;
          i = function() {
            var z = vy(T);
            b.call(z);
          };
        }
        var T = _C(
          e,
          Wu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          $C
        );
        e._reactRootContainer = T, rm(T.current, e);
        var I = e.nodeType === Pn ? e.parentNode : e;
        return Ep(I), nu(function() {
          mv(t, T, a, i);
        }), T;
      }
    }
    function wT(e, t) {
      e !== null && typeof e != "function" && h("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function yy(e, t, a, i, l) {
      HC(a), wT(l === void 0 ? null : l, "render");
      var s = a._reactRootContainer, v;
      if (!s)
        v = ET(a, t, e, l, i);
      else {
        if (v = s, typeof l == "function") {
          var y = l;
          l = function() {
            var g = vy(v);
            y.call(g);
          };
        }
        mv(t, v, e, l);
      }
      return vy(v);
    }
    var BC = !1;
    function xT(e) {
      {
        BC || (BC = !0, h("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = CT.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || h("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", It(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === ea ? e : uT(e, "findDOMNode");
    }
    function bT(e, t, a) {
      if (h("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !yv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Op(t) && t._reactRootContainer === void 0;
        i && h("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return yy(null, e, t, !0, a);
    }
    function RT(e, t, a) {
      if (h("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !yv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Op(t) && t._reactRootContainer === void 0;
        i && h("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return yy(null, e, t, !1, a);
    }
    function kT(e, t, a, i) {
      if (h("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !yv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !qy(e))
        throw new Error("parentComponent must be a valid React Component");
      return yy(e, t, a, !1, i);
    }
    var qC = !1;
    function TT(e) {
      if (qC || (qC = !0, h("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !yv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Op(e) && e._reactRootContainer === void 0;
        t && h("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = G1(e), i = a && !Bu(a);
          i && h("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return nu(function() {
          yy(null, null, e, !1, function() {
            e._reactRootContainer = null, F_(e);
          });
        }), !0;
      } else {
        {
          var l = G1(e), s = !!(l && Bu(l)), v = e.nodeType === ea && yv(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && h("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", v ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Dr(sT), Au(cT), Ch(fT), qs(Ba), ip(gh), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && h("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Ac(Nw), By(b1, Sk, nu);
    function DT(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!my(t))
        throw new Error("Target container is not a DOM element.");
      return lT(e, t, null, a);
    }
    function NT(e, t, a, i) {
      return kT(e, t, a, i);
    }
    var Q1 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Bu, Pf, am, xu, Uc, b1]
    };
    function MT(e, t) {
      return Q1.usingClientEntryPoint || h('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), gT(e, t);
    }
    function LT(e, t, a) {
      return Q1.usingClientEntryPoint || h('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), ST(e, t, a);
    }
    function OT(e) {
      return JS() && h("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), nu(e);
    }
    var jT = yT({
      findFiberByHostInstance: ic,
      bundleType: 1,
      version: H1,
      rendererPackageName: "react-dom"
    });
    if (!jT && Un && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var WC = window.location.protocol;
      /^(https?|file):$/.test(WC) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (WC === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ja.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Q1, Ja.createPortal = DT, Ja.createRoot = MT, Ja.findDOMNode = xT, Ja.flushSync = OT, Ja.hydrate = bT, Ja.hydrateRoot = LT, Ja.render = RT, Ja.unmountComponentAtNode = TT, Ja.unstable_batchedUpdates = b1, Ja.unstable_renderSubtreeIntoContainer = NT, Ja.version = H1, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })()), Ja;
}
var hE;
function bO() {
  if (hE) return Ey.exports;
  hE = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (p) {
        console.error(p);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (c(), Ey.exports = wO()) : Ey.exports = xO(), Ey.exports;
}
var f_ = bO();
const Cv = /* @__PURE__ */ NE(f_);
function n_(c, p) {
  (p == null || p > c.length) && (p = c.length);
  for (var d = 0, _ = Array(p); d < p; d++) _[d] = c[d];
  return _;
}
function RO(c) {
  if (Array.isArray(c)) return c;
}
function kO(c) {
  if (Array.isArray(c)) return n_(c);
}
function TO(c) {
  if (c === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return c;
}
function mE(c, p, d, _, w, E, h) {
  try {
    var R = c[E](h), k = R.value;
  } catch (x) {
    return void d(x);
  }
  R.done ? p(k) : Promise.resolve(k).then(_, w);
}
function DO(c) {
  return function() {
    var p = this, d = arguments;
    return new Promise(function(_, w) {
      var E = c.apply(p, d);
      function h(k) {
        mE(E, _, w, h, R, "next", k);
      }
      function R(k) {
        mE(E, _, w, h, R, "throw", k);
      }
      h(void 0);
    });
  };
}
function Ty(c, p, d) {
  return p = r_(p), AO(c, IE() ? Reflect.construct(p, d || [], r_(c).constructor) : p.apply(c, d));
}
function bv(c, p) {
  if (!(c instanceof p)) throw new TypeError("Cannot call a class as a function");
}
function yE(c, p) {
  for (var d = 0; d < p.length; d++) {
    var _ = p[d];
    _.enumerable = _.enumerable || !1, _.configurable = !0, "value" in _ && (_.writable = !0), Object.defineProperty(c, ky(_.key), _);
  }
}
function Rv(c, p, d) {
  return p && yE(c.prototype, p), d && yE(c, d), Object.defineProperty(c, "prototype", { writable: !1 }), c;
}
function pd(c, p, d) {
  return (p = ky(p)) in c ? Object.defineProperty(c, p, { value: d, enumerable: !0, configurable: !0, writable: !0 }) : c[p] = d, c;
}
function Ec() {
  return (Ec = Object.assign ? Object.assign.bind() : function(c) {
    for (var p = 1; p < arguments.length; p++) {
      var d, _ = arguments[p];
      for (d in _) !{}.hasOwnProperty.call(_, d) || (c[d] = _[d]);
    }
    return c;
  }).apply(null, arguments);
}
function r_(c) {
  return (r_ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(p) {
    return p.__proto__ || Object.getPrototypeOf(p);
  })(c);
}
function Dy(c, p) {
  if (typeof p != "function" && p !== null) throw new TypeError("Super expression must either be null or a function");
  c.prototype = Object.create(p && p.prototype, { constructor: { value: c, writable: !0, configurable: !0 } }), Object.defineProperty(c, "prototype", { writable: !1 }), p && FE(c, p);
}
function IE() {
  try {
    var c = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (IE = function() {
    return !!c;
  })();
}
function NO(c) {
  if (typeof Symbol < "u" && c[Symbol.iterator] != null || c["@@iterator"] != null) return Array.from(c);
}
function MO(c, p) {
  var d = c == null ? null : typeof Symbol < "u" && c[Symbol.iterator] || c["@@iterator"];
  if (d != null) {
    var _, w, E, h, R = [], k = !0, x = !1;
    try {
      if (E = (d = d.call(c)).next, p !== 0) for (; !(k = (_ = E.call(d)).done) && (R.push(_.value), R.length !== p); k = !0) ;
    } catch (M) {
      x = !0, w = M;
    } finally {
      try {
        if (!k && d.return != null && (h = d.return(), Object(h) !== h)) return;
      } finally {
        if (x) throw w;
      }
    }
    return R;
  }
}
function LO() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function OO() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gE(c, p) {
  var d, _ = Object.keys(c);
  return Object.getOwnPropertySymbols && (d = Object.getOwnPropertySymbols(c), p && (d = d.filter(function(w) {
    return Object.getOwnPropertyDescriptor(c, w).enumerable;
  })), _.push.apply(_, d)), _;
}
function ce(c) {
  for (var p = 1; p < arguments.length; p++) {
    var d = arguments[p] != null ? arguments[p] : {};
    p % 2 ? gE(Object(d), !0).forEach(function(_) {
      pd(c, _, d[_]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(d)) : gE(Object(d)).forEach(function(_) {
      Object.defineProperty(c, _, Object.getOwnPropertyDescriptor(d, _));
    });
  }
  return c;
}
function Qi(c, p) {
  if (c == null) return {};
  var d, _ = jO(c, p);
  if (Object.getOwnPropertySymbols) for (var w = Object.getOwnPropertySymbols(c), E = 0; E < w.length; E++) d = w[E], p.includes(d) || {}.propertyIsEnumerable.call(c, d) && (_[d] = c[d]);
  return _;
}
function jO(c, p) {
  if (c == null) return {};
  var d, _ = {};
  for (d in c) if ({}.hasOwnProperty.call(c, d)) {
    if (p.includes(d)) continue;
    _[d] = c[d];
  }
  return _;
}
function AO(c, p) {
  if (p && (typeof p == "object" || typeof p == "function")) return p;
  if (p !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return TO(c);
}
function cd() {
  cd = function() {
    return p;
  };
  var c, p = {}, d = Object.prototype, _ = d.hasOwnProperty, w = Object.defineProperty || function(Q, Z, xe) {
    Q[Z] = xe.value;
  }, oe = typeof Symbol == "function" ? Symbol : {}, E = oe.iterator || "@@iterator", h = oe.asyncIterator || "@@asyncIterator", R = oe.toStringTag || "@@toStringTag";
  function k(Q, Z, xe) {
    return Object.defineProperty(Q, Z, { value: xe, enumerable: !0, configurable: !0, writable: !0 }), Q[Z];
  }
  try {
    k({}, "");
  } catch {
    k = function(Z, xe, Pe) {
      return Z[xe] = Pe;
    };
  }
  function x(Q, le, xe, U) {
    var De, we, F, he, le = le && le.prototype instanceof Ce ? le : Ce, le = Object.create(le.prototype), U = new ut(U || []);
    return w(le, "_invoke", { value: (De = Q, we = xe, F = U, he = A, function(ee, Xe) {
      if (he === $) throw Error("Generator is already running");
      if (he === re) {
        if (ee === "throw") throw Xe;
        return { value: c, done: !0 };
      }
      for (F.method = ee, F.arg = Xe; ; ) {
        var Ie = F.delegate;
        if (Ie && (Ie = (function mt(rt, Le) {
          var ct = Le.method, vt = rt.iterator[ct];
          return vt === c ? (Le.delegate = null, ct === "throw" && rt.iterator.return && (Le.method = "return", Le.arg = c, mt(rt, Le), Le.method === "throw") || ct !== "return" && (Le.method = "throw", Le.arg = new TypeError("The iterator does not provide a '" + ct + "' method")), ie) : (ct = M(vt, rt.iterator, Le.arg), ct.type === "throw" ? (Le.method = "throw", Le.arg = ct.arg, Le.delegate = null, ie) : (vt = ct.arg, vt ? vt.done ? (Le[rt.resultName] = vt.value, Le.next = rt.nextLoc, Le.method !== "return" && (Le.method = "next", Le.arg = c), Le.delegate = null, ie) : vt : (Le.method = "throw", Le.arg = new TypeError("iterator result is not an object"), Le.delegate = null, ie)));
        })(Ie, F), Ie)) {
          if (Ie === ie) continue;
          return Ie;
        }
        if (F.method === "next") F.sent = F._sent = F.arg;
        else if (F.method === "throw") {
          if (he === A) throw he = re, F.arg;
          F.dispatchException(F.arg);
        } else F.method === "return" && F.abrupt("return", F.arg);
        if (he = $, Ie = M(De, we, F), Ie.type === "normal") {
          if (he = F.done ? re : V, Ie.arg === ie) continue;
          return { value: Ie.arg, done: F.done };
        }
        Ie.type === "throw" && (he = re, F.method = "throw", F.arg = Ie.arg);
      }
    }) }), le;
  }
  function M(Q, Z, xe) {
    try {
      return { type: "normal", arg: Q.call(Z, xe) };
    } catch (Pe) {
      return { type: "throw", arg: Pe };
    }
  }
  p.wrap = x;
  var A = "suspendedStart", V = "suspendedYield", $ = "executing", re = "completed", ie = {};
  function Ce() {
  }
  function Re() {
  }
  function ge() {
  }
  var oe = {}, be = (k(oe, E, function() {
    return this;
  }), Object.getPrototypeOf), be = be && be(be(Ee([]))), de = (be && be !== d && _.call(be, E) && (oe = be), ge.prototype = Ce.prototype = Object.create(oe));
  function Ye(Q) {
    ["next", "throw", "return"].forEach(function(Z) {
      k(Q, Z, function(xe) {
        return this._invoke(Z, xe);
      });
    });
  }
  function He(Q, Z) {
    var xe;
    w(this, "_invoke", { value: function(Pe, De) {
      function we() {
        return new Z(function(F, he) {
          (function le(rt, ee, Xe, Ie) {
            var mt, rt = M(Q[rt], Q, ee);
            if (rt.type !== "throw") return (ee = (mt = rt.arg).value) && typeof ee == "object" && _.call(ee, "__await") ? Z.resolve(ee.__await).then(function(Le) {
              le("next", Le, Xe, Ie);
            }, function(Le) {
              le("throw", Le, Xe, Ie);
            }) : Z.resolve(ee).then(function(Le) {
              mt.value = Le, Xe(mt);
            }, function(Le) {
              return le("throw", Le, Xe, Ie);
            });
            Ie(rt.arg);
          })(Pe, De, F, he);
        });
      }
      return xe = xe ? xe.then(we, we) : we();
    } });
  }
  function Be(Q) {
    var Z = { tryLoc: Q[0] };
    1 in Q && (Z.catchLoc = Q[1]), 2 in Q && (Z.finallyLoc = Q[2], Z.afterLoc = Q[3]), this.tryEntries.push(Z);
  }
  function nt(Q) {
    var Z = Q.completion || {};
    Z.type = "normal", delete Z.arg, Q.completion = Z;
  }
  function ut(Q) {
    this.tryEntries = [{ tryLoc: "root" }], Q.forEach(Be, this), this.reset(!0);
  }
  function Ee(Q) {
    if (Q || Q === "") {
      var Z, xe = Q[E];
      if (xe) return xe.call(Q);
      if (typeof Q.next == "function") return Q;
      if (!isNaN(Q.length)) return Z = -1, (xe = function Pe() {
        for (; ++Z < Q.length; ) if (_.call(Q, Z)) return Pe.value = Q[Z], Pe.done = !1, Pe;
        return Pe.value = c, Pe.done = !0, Pe;
      }).next = xe;
    }
    throw new TypeError(typeof Q + " is not iterable");
  }
  return w(de, "constructor", { value: Re.prototype = ge, configurable: !0 }), w(ge, "constructor", { value: Re, configurable: !0 }), Re.displayName = k(ge, R, "GeneratorFunction"), p.isGeneratorFunction = function(Q) {
    return Q = typeof Q == "function" && Q.constructor, !!Q && (Q === Re || (Q.displayName || Q.name) === "GeneratorFunction");
  }, p.mark = function(Q) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(Q, ge) : (Q.__proto__ = ge, k(Q, R, "GeneratorFunction")), Q.prototype = Object.create(de), Q;
  }, p.awrap = function(Q) {
    return { __await: Q };
  }, Ye(He.prototype), k(He.prototype, h, function() {
    return this;
  }), p.AsyncIterator = He, p.async = function(Q, Z, xe, Pe, De) {
    De === void 0 && (De = Promise);
    var we = new He(x(Q, Z, xe, Pe), De);
    return p.isGeneratorFunction(Z) ? we : we.next().then(function(F) {
      return F.done ? F.value : we.next();
    });
  }, Ye(de), k(de, R, "Generator"), k(de, E, function() {
    return this;
  }), k(de, "toString", function() {
    return "[object Generator]";
  }), p.keys = function(Q) {
    var Z, xe = Object(Q), Pe = [];
    for (Z in xe) Pe.push(Z);
    return Pe.reverse(), function De() {
      for (; Pe.length; ) {
        var we = Pe.pop();
        if (we in xe) return De.value = we, De.done = !1, De;
      }
      return De.done = !0, De;
    };
  }, p.values = Ee, ut.prototype = { constructor: ut, reset: function(Q) {
    if (this.prev = 0, this.next = 0, this.sent = this._sent = c, this.done = !1, this.delegate = null, this.method = "next", this.arg = c, this.tryEntries.forEach(nt), !Q) for (var Z in this) Z.charAt(0) === "t" && _.call(this, Z) && !isNaN(+Z.slice(1)) && (this[Z] = c);
  }, stop: function() {
    this.done = !0;
    var Q = this.tryEntries[0].completion;
    if (Q.type === "throw") throw Q.arg;
    return this.rval;
  }, dispatchException: function(Q) {
    if (this.done) throw Q;
    var Z = this;
    function xe(le, U) {
      return we.type = "throw", we.arg = Q, Z.next = le, U && (Z.method = "next", Z.arg = c), !!U;
    }
    for (var Pe = this.tryEntries.length - 1; 0 <= Pe; --Pe) {
      var De = this.tryEntries[Pe], we = De.completion;
      if (De.tryLoc === "root") return xe("end");
      if (De.tryLoc <= this.prev) {
        var F = _.call(De, "catchLoc"), he = _.call(De, "finallyLoc");
        if (F && he) {
          if (this.prev < De.catchLoc) return xe(De.catchLoc, !0);
          if (this.prev < De.finallyLoc) return xe(De.finallyLoc);
        } else if (F) {
          if (this.prev < De.catchLoc) return xe(De.catchLoc, !0);
        } else {
          if (!he) throw Error("try statement without catch or finally");
          if (this.prev < De.finallyLoc) return xe(De.finallyLoc);
        }
      }
    }
  }, abrupt: function(Q, Z) {
    for (var xe = this.tryEntries.length - 1; 0 <= xe; --xe) {
      var Pe = this.tryEntries[xe];
      if (Pe.tryLoc <= this.prev && _.call(Pe, "finallyLoc") && this.prev < Pe.finallyLoc) {
        var De = Pe;
        break;
      }
    }
    var we = (De = De && (Q === "break" || Q === "continue") && De.tryLoc <= Z && Z <= De.finallyLoc ? null : De) ? De.completion : {};
    return we.type = Q, we.arg = Z, De ? (this.method = "next", this.next = De.finallyLoc, ie) : this.complete(we);
  }, complete: function(Q, Z) {
    if (Q.type === "throw") throw Q.arg;
    return Q.type === "break" || Q.type === "continue" ? this.next = Q.arg : Q.type === "return" ? (this.rval = this.arg = Q.arg, this.method = "return", this.next = "end") : Q.type === "normal" && Z && (this.next = Z), ie;
  }, finish: function(Q) {
    for (var Z = this.tryEntries.length - 1; 0 <= Z; --Z) {
      var xe = this.tryEntries[Z];
      if (xe.finallyLoc === Q) return this.complete(xe.completion, xe.afterLoc), nt(xe), ie;
    }
  }, catch: function(Q) {
    for (var Z = this.tryEntries.length - 1; 0 <= Z; --Z) {
      var xe, Pe, De = this.tryEntries[Z];
      if (De.tryLoc === Q) return (xe = De.completion).type === "throw" && (Pe = xe.arg, nt(De)), Pe;
    }
    throw Error("illegal catch attempt");
  }, delegateYield: function(Q, Z, xe) {
    return this.delegate = { iterator: Ee(Q), resultName: Z, nextLoc: xe }, this.method === "next" && (this.arg = c), ie;
  } }, p;
}
function FE(c, p) {
  return (FE = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(d, _) {
    return d.__proto__ = _, d;
  })(c, p);
}
function _E(c, p) {
  return RO(c) || MO(c, p) || VE(c, p) || LO();
}
function Ny(c) {
  return kO(c) || NO(c) || VE(c) || OO();
}
function UO(c, p) {
  if (typeof c != "object" || !c) return c;
  var d = c[Symbol.toPrimitive];
  if (d === void 0) return (p === "string" ? String : Number)(c);
  if (d = d.call(c, p), typeof d != "object") return d;
  throw new TypeError("@@toPrimitive must return a primitive value.");
}
function ky(c) {
  return c = UO(c, "string"), typeof c == "symbol" ? c : c + "";
}
function Xr(c) {
  return (Xr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(p) {
    return typeof p;
  } : function(p) {
    return p && typeof Symbol == "function" && p.constructor === Symbol && p !== Symbol.prototype ? "symbol" : typeof p;
  })(c);
}
function VE(c, p) {
  var d;
  if (c) return typeof c == "string" ? n_(c, p) : (d = (d = {}.toString.call(c).slice(8, -1)) === "Object" && c.constructor ? c.constructor.name : d) === "Map" || d === "Set" ? Array.from(c) : d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d) ? n_(c, p) : void 0;
}
var HE = { react: { componentWrap: "div", slotWrap: "div", componentWrapAttrs: { __use_react_component_wrap: "", style: { all: "unset" } }, slotWrapAttrs: { __use_react_slot_wrap: "", style: { all: "unset" } }, vueNamedSlotsKey: ["node:"] }, vue: { componentWrapHOC: function(c) {
  return function() {
    var p = (0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}).portals;
    return Ue.createElement(Ue.Fragment, null, c, (p === void 0 ? [] : p).map(function(d) {
      var _ = d.Portal;
      return Ue.createElement(_, { key: d.key });
    }));
  };
}, componentWrapAttrs: { "data-use-vue-component-wrap": "", style: { all: "unset" } }, slotWrapAttrs: { "data-use-vue-slot-wrap": "", style: { all: "unset" } } } };
function $E() {
  var c = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : { react: {}, vue: {} }, d = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : HE, p = 2 < arguments.length ? arguments[2] : void 0, d = (c.vue || (c.vue = {}), c.react || (c.react = {}), [d, ce(ce({}, c), {}, { react: ce(ce(ce({}, d.react), c.react), {}, { componentWrapAttrs: ce(ce({}, d.react.componentWrapAttrs), c.react.componentWrapAttrs), slotWrapAttrs: ce(ce({}, d.react.slotWrapAttrs), c.react.slotWrapAttrs) }), vue: ce(ce(ce({}, d.vue), c.vue), {}, { componentWrapAttrs: ce(ce({}, d.vue.componentWrapAttrs), c.vue.componentWrapAttrs), slotWrapAttrs: ce(ce({}, d.vue.slotWrapAttrs), c.vue.slotWrapAttrs) }) })]);
  return p && d.unshift({}), Object.assign.apply(this, d);
}
var BE = ["getElementById", "getElementsByClassName", "getElementsByTagName", "getElementsByTagNameNS", "querySelector", "querySelectorAll"], fd = { Document: {}, Element: {} };
function zO(c) {
  Object.keys(fd).forEach(function(p) {
    BE.forEach(function(d) {
      var _ = fd[p][d] || window[p].prototype[d];
      _ && (fd[p][d] = _, window[p].prototype[d] = function() {
        for (var w = arguments.length, E = new Array(w), h = 0; h < w; h++) E[h] = arguments[h];
        var R = _.apply(this, E);
        return R && (R.constructor !== NodeList || R.constructor === NodeList && 0 < R.length) ? R : ((R = d) === "getElementById" && (R = "querySelector", E = ["#" + E[0]]), (fd.Element[R] || Element.prototype[R]).apply(c, E));
      });
    });
  });
}
function PO() {
  Object.keys(fd).forEach(function(c) {
    BE.forEach(function(p) {
      window[c].prototype[p] = fd[c][p];
    });
  });
}
var IO = ["ref"], FO = ["key"], VO = ["hashList"], e_ = parseInt(f_.version);
var HO = (() => {
  function c(p) {
    return bv(this, c), Ty(this, c, [p]);
  }
  return Dy(c, Ue.Component), Rv(c, [{ key: "render", value: function() {
    var p = this.props.component, d = this.props.passedProps, d = (d.ref, Qi(d, IO));
    return Ue.createElement(p, d, this.props.children);
  } }]);
})(), $O = function(c, p, d) {
  var _ = (() => {
    function w(E) {
      var h;
      return bv(this, w), (h = Ty(this, w, [E])).state = ce(ce({}, E), p.isSlots ? { children: c } : {}), h.setRef = h.setRef.bind(h), h.vueInReactCall = h.vueInReactCall.bind(h), (h.__veauryVueWrapperRef__ = d).__veauryVueInReactCall__ = h.vueInReactCall, h;
    }
    return Dy(w, Ue.Component), Rv(w, [{ key: "reactPropsLinkToVueInstance", value: function(E) {
      Object.keys(E).forEach(function(h) {
        d[h] || (d[h] = E[h]);
      }), Object.getOwnPropertyNames(E.__proto__).filter(function(h) {
        return ["constructor", "render"].indexOf(h) < 0;
      }).forEach(function(h) {
        d[h] || (d[h] = E[h]);
      });
    } }, { key: "setRef", value: function(E) {
      var h = this;
      E && (d.__veauryReactRef__ = E, this.reactPropsLinkToVueInstance(E), Promise.resolve().then(function() {
        return h.reactPropsLinkToVueInstance(E);
      }), (this.setRef.current = E).__veauryVueWrapperRef__ = d);
    } }, { key: "createSlot", value: function(E) {
      return { originVNode: E, inheritAttrs: !1, __fromReactSlot: !0, render: function() {
        var h, R;
        return ((h = E = (E = ((R = this.$slots) == null || (h = R.default) == null ? void 0 : h.call(R)) || E) instanceof Function ? E(this) : E) == null ? void 0 : h.length) === 1 && (R = E[0]) != null && R.data && ((h = this.$attrs).key, R = Qi(h, FO), E[0].props = ce(ce({}, R), E[0].props)), E;
      } };
    } }, { key: "componentWillUnmount", value: function() {
      d.__veauryReactRef__ && (d.__veauryReactRef__.__veauryVueWrapperRef__ = null, d.__veauryReactRef__ = null);
    } }, { key: "vueInReactCall", value: function(E) {
      var h = this, R = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
      return 2 < arguments.length && arguments[2] && E && E[0] ? E.map(function(k, x) {
        return xy(h.createSlot(k instanceof Function ? k : [k]), ce(ce(ce({}, p), R), {}, { isSlots: !0, wrapInstance: d })).render({ key: k?.key || void 0 });
      }) : xy(this.createSlot(E), ce(ce(ce({}, p), R), {}, { isSlots: !0, wrapInstance: d })).render();
    } }, { key: "render", value: function() {
      var E, h, R, k = this, ie = this.state, x = ie.hashList, M = Qi(ie, VO), A = {}, V = {};
      for (E in M) h = E, R = void 0, M.hasOwnProperty(h) && M[h] != null && (M[h].__slot ? (M[h].reactSlot ? M[h] = M[h].reactSlot : (R = M[h], p.defaultSlotsFormatter && M[h].__trueChildren ? (M[h].__trueChildren.__top__ = k.__veauryVueWrapperRef__, M[h] = p.defaultSlotsFormatter(M[h].__trueChildren, k.vueInReactCall, x), M[h] instanceof Array ? M[h] = Ny(M[h]) : -1 < ["string", "number"].indexOf(Xr(M[h])) ? M[h] = [M[h]] : Xr(M[h]) === "object" && (M[h] = ce({}, M[h]))) : M[h] = ce({}, xy(k.createSlot(M[h]), ce(ce({}, p), {}, { isSlots: !0, wrapInstance: d })).render()), M[h].vueFunction = R), A[h] = M[h]) : M[h].__scopedSlot && (M[h] = M[h](k.createSlot), V[h] = M[h]));
      var $, re, ie = {};
      return ie.ref = this.setRef, p.isSlots ? this.state.children || this.props.children : ($ = M, c.__syncUpdateForPureReactInVue && Object.keys(c.__syncUpdateForPureReactInVue).map(function(Ce) {
        var Re, ge;
        $[Ce] && typeof $[Ce] == "function" && (Re = k.__veauryVueWrapperRef__, ge = $[Ce], $[Ce] = function() {
          for (var oe = arguments.length, be = new Array(oe), de = 0; de < oe; de++) be[de] = arguments[de];
          Re.__veaurySyncUpdateProps__(c.__syncUpdateForPureReactInVue[Ce].apply(this, be)), ge.apply(this, be), Re.macroTaskUpdate = !0, Re.__veauryMountReactComponent__(!0, !0, {});
        });
      }), re = ce(ce(ce({}, $ = p.defaultPropsFormatter ? p.defaultPropsFormatter.call(this, $, this.vueInReactCall, x) : $), A), V), Object.getPrototypeOf(c) !== Function.prototype && (Xr(c) !== "object" || c.render) || w.catchVueRefs() ? (Object.getPrototypeOf(c) === Function.prototype && delete ie.ref, Ue.createElement(c, Ec({}, re, ie))) : Ue.createElement(HO, Ec({ passedProps: re, component: c }, ie), re.children));
    } }], [{ key: "catchVueRefs", value: function() {
      if (d.$parent) {
        for (var E in d.$parent.$refs) if (d.$parent.$refs[E] === d) return !0;
      }
      return !1;
    } }]);
  })();
  return pd(_, "displayName", "applyReact_".concat(c.displayName || c.name || "Component")), _;
};
function d_(c) {
  var p = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
  return c.__esModule && c.default && (c = c.default), p.isSlots && (c = c()), p = $E(p, void 0, !0), { originReactComponent: c, setup: function(d, _) {
    var w, E, h, R;
    if (!p.isSlots) return w = {}, E = zT({}), h = PT(), typeof (R = p.useInjectPropsFromWrapper || c.__veauryInjectPropsFromWrapper__) == "function" && (typeof (R = R.call(h.proxy, d)) != "function" ? (Object.assign(E, R), w.__veauryInjectedProps__ = E) : h.proxy.__veauryInjectedComputed__ = R), w;
  }, data: function() {
    return { VEAURY_Portals: [] };
  }, created: function() {
    this.__veauryPortalKeyPool__ = [], this.__veauryMaxPortalCount__ = 0;
  }, computed: { __veauryInjectedProps__: function() {
    var d;
    return (d = this.__veauryInjectedComputed__) == null ? void 0 : d.call(this);
  } }, render: function() {
    var d = lu(p.react.componentWrap, ce({ ref: "react" }, p.react.componentWrapAttrs || {}), this.VEAURY_Portals.map(function(_) {
      return (0, _.Portal)(lu, _.key);
    }));
    return this.__veauryCheckReactSlot__(this.$slots), d;
  }, methods: { __veauryCheckReactSlot__: function(d) {
    var _ = this;
    function w(E, h, R) {
      return h[R] && (E[R] = h[R], 1);
    }
    Xr(d) === "object" && d != null && (d instanceof Array ? d.forEach(function(E) {
      _.__veauryCheckReactSlot__(E.children);
    }) : Object.keys(d).forEach(function(k) {
      var h, R, k = d[k];
      if (typeof k == "function") {
        try {
          h = k.apply(_, k.__reactArgs || [{}]);
        } catch {
          return;
        }
        (k.__trueChildren = h).forEach(function(x) {
          x.children && _.__veauryCheckReactSlot__(x.children);
        }), h.length !== 1 || w(k, h = h[0], "reactSlot") || w(k, h, "reactFunction") || h.type !== DE || ((R = h.children) == null ? void 0 : R.length) !== 1 || w(k, R = h.children[0], "reactSlot") || w(k, R, "reactFunction");
      }
    }));
  }, __veauryPushVuePortal__: function(d) {
    var _ = this.__veauryPortalKeyPool__.shift() || this.__veauryMaxPortalCount__++;
    this.VEAURY_Portals.push({ Portal: d, key: _ });
  }, __veauryRemoveVuePortal__: function(d) {
    var _, w = this.VEAURY_Portals.find(function(E, h) {
      if (E.Portal === d) return _ = h, !0;
    });
    this.__veauryPortalKeyPool__.push(w.key), this.VEAURY_Portals.splice(_, 1);
  }, __veauryGetScopeSlot__: function(d, _, w) {
    var E = this;
    function h(R) {
      function k() {
        for (var x, M = this, A = arguments.length, V = new Array(A), $ = 0; $ < A; $++) V[$] = arguments[$];
        return d.reactFunction ? d.reactFunction.apply(this, V) : p.defaultSlotsFormatter ? ((x = d.apply(this, V)).__top__ = E, (x = p.defaultSlotsFormatter(x, E.__veauryVueInReactCall__, _)) instanceof Array || -1 < Xr(x).indexOf("string", "number") ? x = Ny(x) : Xr(x) === "object" && (x = ce({}, x)), x) : xy(R(function() {
          return d.apply(M, V);
        }), ce(ce({}, p), {}, { isSlots: !0, wrapInstance: E })).render();
      }
      return p.pureTransformer && w ? k.vueFunction = w : k.vueFunction = d, k;
    }
    return h.__scopedSlot = !0, h;
  }, __veaurySyncUpdateProps__: function(d) {
    this.__veauryReactInstance__ && this.__veauryReactInstance__.setState(d);
  }, __veauryMountReactComponent__: function(d, _) {
    var w = arguments, E = this;
    return DO(cd().mark(function h() {
      var R, k, x, M, A, V, $, re, ie, Ce, Re, ge, oe, be, de, Ye, He;
      return cd().wrap(function(Be) {
        for (; ; ) switch (Be.prev = Be.next) {
          case 0:
            if (R = 2 < w.length && w[2] !== void 0 ? w[2] : {}, k = {}, x = [], (re = E.$.vnode.scopeId) && (k[re] = "", x.push(re)), M = {}, A = {}, d && (_ == null || !_.slot)) {
              Be.next = 18;
              break;
            }
            $ = cd().mark(function nt(ut) {
              var Ee;
              return cd().wrap(function(Q) {
                for (; ; ) switch (Q.prev = Q.next) {
                  case 0:
                    if (E.$slots.hasOwnProperty(ut) && E.$slots[ut] != null) {
                      Q.next = 2;
                      break;
                    }
                    return Q.abrupt("return", 0);
                  case 2:
                    if ((Ee = p.react.vueNamedSlotsKey.find(function(Z) {
                      return ut.indexOf(Z) === 0;
                    })) || ut === "default") return Ee = ut.replace(new RegExp("^".concat(Ee)), ""), M[Ee] = E.$slots[ut], M[Ee].__slot = !0, Q.abrupt("return", 0);
                    Q.next = 8;
                    break;
                  case 8:
                    A[ut] = E.__veauryGetScopeSlot__(E.$slots[ut], x, (Ee = E.$.vnode) == null || (Ee = Ee.children) == null ? void 0 : Ee[ut]);
                  case 9:
                  case "end":
                    return Q.stop();
                }
              }, nt);
            }), Be.t0 = cd().keys(E.$slots || {});
          case 10:
            if ((Be.t1 = Be.t0()).done) {
              Be.next = 18;
              break;
            }
            return re = Be.t1.value, Be.delegateYield($(re), "t2", 13);
          case 13:
            if (Be.t2 === 0) return Be.abrupt("continue", 10);
            Be.next = 16;
            break;
          case 16:
            Be.next = 10;
            break;
          case 18:
            if ((!d || _ != null && _.slot) && (ie = ce({}, M), V = ie.default, delete ie.default), E.__veauryLast__ = E.__veauryLast__ || {}, E.__veauryLast__.slot = E.__veauryLast__.slot || {}, E.__veauryLast__.attrs = E.__veauryLast__.attrs || {}, Ce = { slot: function() {
              E.__veauryLast__.slot = ce(ce(ce({}, V ? { children: V } : { children: null }), ie), A);
            }, attrs: function() {
              E.__veauryLast__.attrs = E.$attrs;
            } }, _ && Object.keys(_).forEach(function(nt) {
              return Ce[nt]();
            }), d) {
              Be.next = 64;
              break;
            }
            if (E.__reactBoundedPromise__ = new Promise(function(nt) {
              Re = nt;
            }), E.__reactBoundedPromise__.resolve = Re, Ce.slot(), Ce.attrs(), be = $O(c, p, E), ge = Ue.createElement(be, Ec({}, E.$attrs, E.__veauryInjectedProps__, { children: V }, ie, A, E.$attrs.class ? { className: E.$attrs.class } : {}, k, { hashList: x }, E.$attrs.style ? { style: E.$attrs.style } : {}, { ref: function(nt) {
              E.__veauryReactInstance__ = nt, E.__reactBoundedPromise__.resolve(!0);
            } })), oe = E.$refs.react, be = p.wrapInstance) {
              Be.next = 47;
              break;
            }
            de = E.$parent;
          case 35:
            if (de) {
              if (de.parentReactWrapperRef) return be = de.parentReactWrapperRef, Be.abrupt("break", 45);
              Be.next = 39;
            } else Be.next = 45;
            break;
          case 39:
            if (de.reactWrapperRef) return be = de.reactWrapperRef, Be.abrupt("break", 45);
            Be.next = 42;
            break;
          case 42:
            de = de.$parent, Be.next = 35;
            break;
          case 45:
            Be.next = 49;
            break;
          case 47:
            (be = p.wrapInstance).__veauryVueWrapperRef__ = E;
          case 49:
            if (be) return E.parentReactWrapperRef = be, E.reactPortal = function() {
              return f_.createPortal(ge, oe);
            }, be.pushReactPortal(E.reactPortal), Be.abrupt("return");
            Be.next = 54;
            break;
          case 54:
            if (17 < e_) return Cv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED !== void 0 && (Cv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = !0), Ye = p.react.createRoot || Cv.createRoot, 18 < e_ && !Ye && console.warn("'react-dom 19' no longer supports dynamically determining whether to use 'render' or 'createRoot'. In order to be compatible with 'react-dom 17' and previous versions, you need to manually configure 'createRoot' in the veaury configuration."), E.__veauryReactApp__ = Ye(oe), E.__veauryReactApp__.render(ge), Be.abrupt("return");
            Be.next = 61;
            break;
          case 61:
            Cv.render(ge, oe), Be.next = 71;
            break;
          case 64:
            return Be.next = 66, E.__reactBoundedPromise__;
          case 66:
            He = function() {
              E.__veauryReactInstance__.setState(function(nt) {
                return Object.keys(nt).forEach(function(ut) {
                  p.isSlots && ut === "children" || delete nt[ut];
                }), ce(ce(ce(ce({}, E.__veauryCache__), E.__veauryInjectedProps__), !p.isSlots && E.__veauryLast__.slot), E.__veauryLast__.attrs);
              }), E.__veauryCache__ = null;
            }, !E.microTaskUpdate || E.__veauryCache__ || E.$nextTick(function() {
              He(), E.microTaskUpdate = !1;
            }), E.macroTaskUpdate && (clearTimeout(E.updateTimer), E.updateTimer = setTimeout(function() {
              clearTimeout(E.updateTimer), He(), E.macroTaskUpdate = !1;
            })), E.__veauryCache__ = ce(ce({}, E.__veauryCache__ || {}), ce(ce(ce(ce({}, R), E.$attrs.class ? { className: E.$attrs.class } : {}), ce({}, k)), {}, { hashList: x }, E.$attrs.style ? { style: E.$attrs.style } : {})), E.macroTaskUpdate || E.microTaskUpdate || He();
          case 71:
          case "end":
            return Be.stop();
        }
      }, h);
    }))();
  } }, mounted: function() {
    var d = this;
    this.__VEAURY_IGNORE_STRANGE_UPDATE__ = !0, Promise.resolve().then(function() {
      d.__VEAURY_IGNORE_STRANGE_UPDATE__ = !1;
    }), clearTimeout(this.updateTimer), this.__veauryMountReactComponent__();
  }, beforeUnmount: function() {
    var d;
    clearTimeout(this.updateTimer), zO(this.$refs.react), this.reactPortal ? (d = this.parentReactWrapperRef) != null && d.removeReactPortal(this.reactPortal) : 17 < e_ ? (d = this.__veauryReactApp__) != null && d.unmount() : Cv.unmountComponentAtNode(this.$refs.react), PO();
  }, updated: function() {
    this.__VEAURY_IGNORE_STRANGE_UPDATE__ || this.__veauryMountReactComponent__(!0, { slot: !0 });
  }, inheritAttrs: !1, watch: { $attrs: { handler: function() {
    this.__veauryMountReactComponent__(!0, { attrs: !0 });
  }, deep: !0 }, __veauryInjectedProps__: { handler: function() {
    this.__veauryMountReactComponent__(!0, { attrs: !0 });
  }, deep: !0 } } };
}
var BO = /* @__PURE__ */ new Set(["onClick", "onContextMenu", "onDoubleClick", "onDrag", "onDragEnd", "onDragEnter", "onDragExit", "onDragLeave", "onDragOver", "onDragStart", "onDrop", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onChange", "onInput", "onInvalid", "onReset", "onSubmit", "onError", "onLoad", "onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onGotPointerCapture", "onLostPointerCapture", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut", "onSelect", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onScroll", "onWheel", "onAbort", "onCanPlay", "onCanPlayThrough", "onDurationChange", "onEmptied", "onEncrypted", "onEnded", "onError", "onLoadedData", "onLoadedMetadata", "onLoadStart", "onPause", "onPlay", "onPlaying", "onProgress", "onRateChange", "onSeeked", "onSeeking", "onStalled", "onSuspend", "onTimeUpdate", "onVolumeChange", "onWaiting", "onLoad", "onError", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionEnd", "onToggle"]);
function qO(c, p) {
  for (var d = (c = p = c?._reactInternals || c?._reactInternalFiber || p) == null ? void 0 : c.return; d; ) {
    var _ = d.stateNode;
    if (_ = _?.parentVueWrapperRef || _?.__veauryVueWrapperRef__) return _;
    d = d.return;
  }
}
function SE(c, p, d) {
  var _ = {};
  return d.forEach(function(w) {
    _[w] = !0;
  }), c[(p === "modelValue" ? "model" : p) + "Modifiers"] = _;
}
function CE(c, p, d) {
  var _ = this, w = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : "v-model";
  if (!(p instanceof Array)) throw Error("[error:veaury] Parameter type error from '".concat(w, "', a single v-model is an array, such as [val, setter, argumentKey, modifiers] or [val, setter, modifiers]"));
  if (typeof p[1] != "function") throw Error("[error:veaury] Parameter type error from '".concat(w, "', a single v-model is an array, the second element of the array must be a setter function"));
  var E = p[1], h = (typeof p[2] == "string" ? (d = p[2], p[3] instanceof Array && SE(c, d, p[3])) : p[2] instanceof Array && SE(c, d, p[2]), c["onUpdate:" + d]);
  c["onUpdate:" + d] = typeof h == "function" ? function() {
    for (var R = arguments.length, k = new Array(R), x = 0; x < R; x++) k[x] = arguments[x];
    h.apply(_, k), E.apply(_, k);
  } : E, c[d] = p[0];
}
function a_(c) {
  var p = this, d = {}, _ = ce({}, c);
  return Object.keys(c).forEach(function(w) {
    var E, h = w.match(/^onUpdate-([^-]+)/);
    if (h) delete _[w], E = d["onUpdate:".concat(h[1])], d["onUpdate:".concat(h[1])] = typeof E == "function" ? function() {
      for (var k = arguments.length, x = new Array(k), M = 0; M < k; M++) x[M] = arguments[M];
      E.apply(p, x), c[w].apply(p, x);
    } : c[w];
    else if (h = w.match(/^v-model($|:([^:]+)|-([^:]+))/)) h = h[2] || h[3] || "modelValue", CE(d, c[w], h), delete _[w];
    else if (w === "v-models") {
      if (Xr(c[w]) !== "object" || c[w] instanceof Array) throw Error("[error:veaury] The parameter 'v-models' must be an object type, such as {[argumentKey]: singleVModel}");
      var R = c[w];
      Object.keys(R).forEach(function(k) {
        CE(d, R[k], k, "v-models");
      }), delete _[w];
    }
  }), ce(ce({}, _), d);
}
var My = Rv(function c() {
  bv(this, c), pd(this, "pool", /* @__PURE__ */ new Set());
}, [{ key: "getRandomId", value: function(c) {
  var p = c + (Math.random() + "").substr(2);
  return this.pool.has(p) ? this.getRandomId(c) : (this.pool.add(p), p);
} }]);
function qE(_, p) {
  var d, _ = _.node;
  if (typeof _ == "function" && (_ = _()), (d = p) != null && d.current || typeof p == "function" || (d = p) != null && d.toString().match(/^function/) || (p = null), -1 < ["string", "number"].indexOf(Xr(_))) return _;
  if (_ instanceof Array) {
    if (_.length !== 1) return _;
    _ = _[0];
  }
  return ce(ce({}, _), {}, { ref: p });
}
var WO = d_(qE);
function i_(c) {
  return lu(WO, { node: function() {
    return c.node;
  } });
}
i_.originReactComponent = Ue.forwardRef(qE);
var YO = ["component", "node"], GO = ["component", "$slots", "children", "class", "style"], QO = ["className", "classname"], Cc = "veaury-options", EE = new My();
function KO(c, p) {
  var d;
  return c = typeof c == "string" && p ? (p = p.$) == null || (p = p.appContext) == null || (p = p.app) == null || (d = p.component) == null ? void 0 : d.call(p, c) : c;
}
function wE(c) {
  if (c) return Object.keys(c).forEach(function(p) {
    var d = c[p];
    d != null && (typeof d == "function" ? (c[p] = d, c[p].reactFunction = d) : (c[p] = function() {
      return d;
    }, c[p].reactSlot = d), d.vueFunction) && (c[p].vueFunction = d.vueFunction);
  }), c;
}
function XO(c) {
  var p;
  return (p = c.node) == null ? void 0 : p.call(c);
}
var o_ = Ue.forwardRef(function(w, p) {
  var d, h = w.component, _ = w.node, w = Qi(w, YO);
  if (h == null && _ == null) return null;
  if (_ != null) {
    if (_.$$typeof || typeof _ == "string" || typeof _ == "number") return _;
    typeof _ != "function" && (d = _, _ = function() {
      return d;
    });
  }
  var E, h = h || XO, R = $E(w[Cc] || {}, void 0, !0), k = R.useInjectPropsFromWrapper || h.__veauryInjectPropsFromWrapper__;
  return R.isSlots || typeof k == "function" && (E = k(w)), Ue.createElement(JO, Ec({}, ce(ce(ce(ce({ component: h }, _ ? { node: _ } : {}), w), E), {}, pd({}, Cc, R)), { ref: p }));
}), JO = (() => {
  function c(p) {
    var d;
    return bv(this, c), (d = Ty(this, c, [p])).state = { portals: [] }, d.__veauryPortalKeyPool__ = [], d.__veauryMaxPortalCount__ = 0, d.__veauryCurrentVueComponent__ = p.component, d.__veauryCreateVueInstance__ = d.__veauryCreateVueInstance__.bind(d), d.__veauryVueComponentContainer__ = d.createVueComponentContainer(), d;
  }
  return Dy(c, Ue.Component), Rv(c, [{ key: "pushReactPortal", value: function(p) {
    var d = this.state.portals, _ = this.__veauryPortalKeyPool__.shift() || this.__veauryMaxPortalCount__++;
    d.push({ Portal: p, key: _ }), this.setState({ portals: d });
  } }, { key: "removeReactPortal", value: function(p) {
    var d, _ = this.state.portals, w = _.find(function(E, h) {
      if (E.Portal === p) return d = h, !0;
    });
    this.__veauryPortalKeyPool__.push(w.key), _.splice(d, 1), this.__veauryVueRef__ && this.setState({ portals: _ });
  } }, { key: "createVueComponentContainer", value: function() {
    var p = this, d = {}, _ = this.props[Cc];
    return _.isSlots ? (Object.keys(this.props).forEach(function(w) {
      BO.has(w) && typeof p.props[w] == "function" && (d[w] = p.props[w]);
    }), _.vue.slotWrapAttrs && (d = ce(ce({}, d), _.vue.slotWrapAttrs))) : _.vue.componentWrapAttrs && (d = ce(ce({}, d), _.vue.componentWrapAttrs)), _.vue.componentWrapHOC(Ue.createElement("div", Ec({}, _.vue.componentWrapAttrs, { ref: this.__veauryCreateVueInstance__, key: null })), d);
  } }, { key: "shouldComponentUpdate", value: function(p, d, _) {
    var w, E, h, R, k = this;
    return p === this.props || (w = p.component, E = (E = p["v-slots"]) === void 0 ? null : E, h = p.children, p = Qi(p, ["component", Cc, "v-slots", "children"].map(ky)), this.__veauryCurrentVueComponent__ !== w && this.updateVueComponent(w), w.__fromReactSlot) || this.__veauryVueInstance__ && (h && (E = E || {}, Xr(h) !== "object" || h instanceof Array || h.$$typeof ? E.default = h : E = h), (R = this.__veauryVueInstance__.$data.$slots) && Object.keys(R).forEach(function(x) {
      delete R[x];
    }), E && (R || (this.__veauryVueInstance__.$data.$slots = {}), Object.assign(this.__veauryVueInstance__.$data.$slots, wE(E))), Object.keys(this.__veauryVueInstance__.$data).forEach(function(x) {
      x !== "$slots" && delete k.__veauryVueInstance__.$data[x];
    }), this.__veauryVueInstance__) && Object.assign(this.__veauryVueInstance__.$data, a_(p)), !0;
  } }, { key: "componentWillUnmount", value: function() {
    this.vuePortal ? this.parentVueWrapperRef.__veauryRemoveVuePortal__(this.vuePortal) : (this.__veauryVueInstance__ && this.__veauryVueInstance__.$.appContext.app.unmount(), EE.pool.delete(this.__veauryVueTargetId__), this.vueCreated = !1);
  } }, { key: "componentDidMount", value: function() {
    this.__veauryCreateVueInstance__(this.vueContainerElement);
  } }, { key: "__veauryCreateVueInstance__", value: function(p) {
    var d, _, w, E, h, R, k, x, M = this;
    function A(V) {
      this.__veauryVueInstance__ || (this.__veauryVueInstance__ = V);
    }
    this.vueCreated || (this.vueCreated = !0, (d = this).vueContainerElement = p, (w = this.props).component, _ = w[Cc], k = w.children, x = (x = w["v-slots"]) === void 0 ? {} : x, w = Qi(w, ["component", Cc, "children", "v-slots"].map(ky)), k && (Xr(k) !== "object" || k instanceof Array || k.$$typeof ? x.default = k : x = k), (x = wE(x)) && (w.$slots = x), A = A.bind(this), E = ce({}, a_(w)), h = { data: function() {
      return _.isSlots ? { children: d.__veauryCurrentVueComponent__.originVNode } : E;
    }, created: function() {
      this.reactWrapperRef = d, A(this);
    }, methods: { reactInVueCall: function(V) {
      return 2 < arguments.length && arguments[2] && V && V[0] ? V.map(function($, re) {
        return lu(i_, { node: $, key: ($ == null || ($ = $.data) == null ? void 0 : $.key) || re });
      }) : lu(i_, { node: V });
    }, getScopedSlots: function(V, $) {
      var re, ie = this, Ce = (this.getScopedSlots.__scopeSlots || (this.getScopedSlots.__scopeSlots = {}), ce({}, $));
      for (re in Ce) ((Re) => {
        var ge, oe;
        !Ce.hasOwnProperty(Re) || (ge = Ce[Re]) == null || (Ce[Re] = (oe = ge, function() {
          for (var be, de, Ye, He, Be = arguments.length, nt = new Array(Be), ut = 0; ut < Be; ut++) nt[ut] = arguments[ut];
          return oe.vueFunction ? oe.vueFunction.apply(ie, nt) : (Ye = oe.reactFunction, Ye = oe.reactSlot || Ye?.apply(ie, nt), He = _.defaultSlotsFormatter, (be = ie.getScopedSlots.__scopeSlots[Re]) != null && (be = be.component) != null && (be = be.ctx) != null && be.__veauryReactInstance__ ? (de = ie.getScopedSlots.__scopeSlots[Re], Promise.resolve().then(function() {
            var Ee;
            (Ee = de) != null && (Ee = Ee.component) != null && (Ee = Ee.ctx) != null && (Ee = Ee.__veauryReactInstance__) != null && Ee.setState({ children: oe.apply(ie, nt) });
          })) : (de = He && Ye ? [He(Ye, ie.reactInVueCall)] : V(d_(function() {
            return oe.apply(ie, nt);
          }, ce(ce({}, _), {}, { isSlots: !0, wrapInstance: d }))), ie.getScopedSlots.__scopeSlots[Re] = de), oe.reactFunction ? de.reactFunction = oe.reactFunction : oe.reactSlot && (de.reactSlot = oe.reactSlot), de);
        }), Ce[Re].reactFunction = ge);
      })(re);
      return Ce;
    } }, mounted: function() {
      p.removeAttribute("id"), d.__veauryVueRef__ = this.$refs.use_vue_wrapper, this.$refs.use_vue_wrapper.reactWrapperRef = d;
    }, beforeUnmount: function() {
      d.__veauryVueRef__ = null, this.$refs.use_vue_wrapper.reactWrapperRef = null;
    }, render: function() {
      var V = this, ge = this.$data, Ce = (ge.component, ge.$slots), $ = ge.class, re = ge.style, ge = Qi(ge, GO), ie = this.getScopedSlots(lu, ce({}, Ce)), Ce = ge.className, Re = ge.classname, ge = Qi(ge, QO), oe = {};
      return Object.keys(ie).forEach(function(be) {
        var de = ie[be];
        oe[be] = typeof de == "function" ? de : function() {
          return de;
        };
      }), lu(KO(d.__veauryCurrentVueComponent__, this), ce(ce(ce(ce({}, ge), $ || Ce || Re ? { class: $ || Ce || Re } : {}), re ? { style: re } : {}), {}, { ref: "use_vue_wrapper" }), ce({}, _.isSlots && this.children ? { default: typeof this.children == "function" ? this.children : function() {
        return V.children;
      } } : ce({}, oe)));
    } }, p && (R = EE.getRandomId("__vue_wrapper_container_"), p.id = R, this.__veauryVueTargetId__ = R, (k = _.wrapInstance) ? (k = _.wrapInstance).reactWrapperRef = d : k = qO(this), k && document.getElementById(R) ? (this.parentVueWrapperRef = k, this.vuePortal = function(V, $) {
      return V(IT, { to: "#" + R, key: R }, [V(Object.assign(h, { router: M._router }))]);
    }, k.__veauryPushVuePortal__(this.vuePortal)) : (x = FT(h), typeof _.beforeVueAppMount == "function" && _.beforeVueAppMount(x), this.__veauryVueInstance__ = x.mount(p))));
  } }, { key: "updateVueComponent", value: function(p) {
    this.__veauryVueInstance__ && (p.__fromReactSlot ? this.__veauryVueInstance__.children = typeof p.originVNode == "function" ? p.originVNode : function() {
      return p.originVNode;
    } : (this.__veauryCurrentVueComponent__ = p, this.__veauryVueInstance__.$forceUpdate()));
  } }, { key: "render", value: function() {
    return Ue.createElement(this.__veauryVueComponentContainer__, { portals: this.state.portals });
  } }]);
})();
function xy(c) {
  var p = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, d = (c || console.warn("Component must be passed in applyVueInReact!"), c.__esModule && c.default && (c = c.default), Ue.forwardRef(function(_, w) {
    return Ue.createElement(o_, Ec({}, _, { component: c, ref: w }, pd({}, Cc, p)));
  }));
  return d.originVueComponent = c, d;
}
new My();
function ZO(c) {
  var p = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, d = p.globalName, _ = d_(c, p.combinedOption || {});
  return _.install = function(w) {
    var E = (1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}).globalName;
    return d && w.component(E || d, _), _;
  }, _;
}
function xE(c) {
  return c.replace(/-(\w)/g, function(p, d) {
    return d.toUpperCase();
  });
}
function Ly(c) {
  var p;
  return c ? typeof c == "string" ? (c = c.trim()).split(/\s*;\s*/).reduce(function(d, _) {
    return _ && (_ = _.split(/\s*:\s*/)).length === 2 && Object.assign(d, pd({}, xE(_[0]), _[1])), d;
  }, {}) : Xr(c) === "object" ? (p = {}, Object.keys(c).forEach(function(d) {
    p[xE(d)] = c[d];
  }), p) : {} : {};
}
function Oy(c) {
  return c ? c instanceof Array ? c : typeof c == "string" ? (c = c.trim()).split(/\s+/) : Xr(c) === "object" ? Object.keys(c).filter(function(p) {
    return !!c[p];
  }) : [] : [];
}
var e6 = ["ref"];
function t6(c, p, d, _, w) {
  var E = c.props || {}, E = (E.ref, Qi(E, e6)), h = {}, R = (Object.keys(c.children || {}).forEach(function(M) {
    var A = c.children[M], V = HE.react.vueNamedSlotsKey.find(function($) {
      return M.indexOf($) === 0;
    });
    V || M === "default" ? (V = M.replace(new RegExp("^".concat(V)), "").replace(/^default$/, "children"), h[V] = _.call(c.__top__, A(), d, w)) : typeof A == "function" && (h[M] = function() {
      for (var $ = arguments.length, re = new Array($), ie = 0; ie < $; ie++) re[ie] = arguments[ie];
      return A.__reactArgs = re, _(A.apply(this, re), d, w);
    });
  }), {}), k = Ly(E.style), x = Array.from(new Set(Oy(E.class))).join(" ");
  return 0 < Object.keys(k).length && (R.style = k), x !== "" && (R.className = x), Object.assign(E, ce(ce({}, R), h)), delete E.class, typeof E.ref_for == "boolean" && delete E.ref_for, E;
}
function bE(c) {
  return c.type === HT;
}
new My();
function WE(c, p) {
  var d;
  return 0 < ((d = c.dirs) == null ? void 0 : d.length) ? Ue.createElement(n6, { vnode: c }, p) : p;
}
var n6 = (() => {
  function c(p) {
    var d;
    return bv(this, c), (d = Ty(this, c, [p])).state = { prevVnode: null, savedDirectives: [], ref: null, prevProps: p }, d;
  }
  return Dy(c, Ue.Component), Rv(c, [{ key: "findDirectiveName", value: function(p) {
    var d = p.dir, _ = -1;
    return [this.state.savedDirectives.find(function(w, E) {
      if (w.dir === d) return _ = E, !0;
    }), _];
  } }, { key: "doDirective", value: function() {
    var p = this, E = this.state, d = E.savedDirectives;
    if (!(_ = E.ref)) {
      for (var _ = (this._reactInternals || this._reactInternalFiber).child; _ && _.tag !== 5; ) _ = _.child;
      if (!_) return;
      _ = _.stateNode;
    }
    var w = this.props.vnode, E = w.dirs;
    E && (E.forEach(function(h) {
      var R, k, x, M, A, V, $;
      h && ($ = (R = _E(p.findDirectiveName(h), 2))[0], R = R[1], k = (A = h.dir).created, x = A.beforeMount, M = A.mounted, V = A.beforeUpdate, A = A.updated, $ ? (d[R] = ce(ce(ce({}, $), h), {}, { oldValue: $.oldValue }), $ = [_, d[R], w, p.state.prevVnode], V?.apply(null, $), A?.apply(null, $), d[R].oldValue = h.value) : (d.push(h), V = [_, h, w, null], k?.apply(null, V), x?.apply(null, V), M?.apply(null, V), h.oldValue = h.value));
    }), this.setState({ prevVnode: ce({}, w), savedDirectives: d, ref: _ }));
  } }, { key: "componentDidMount", value: function() {
    this.doDirective();
  } }, { key: "componentDidUpdate", value: function(p) {
    p.vnode !== this.props.vnode && this.doDirective();
  } }, { key: "componentWillUnmount", value: function() {
    var p = this, d = this.props.vnode, h = this.state, _ = h.savedDirectives, w = h.ref, E = h.prevVnode, h = d.dirs;
    h && (h.forEach(function(R) {
      var k, x, M, A;
      R && (k = (A = _E(p.findDirectiveName(R), 2))[0]) && (x = (M = R.dir).beforeUnmount, M = M.unmounted, _[A[1]] = ce(ce({}, k), R), A = [w, k, d, E], x?.apply(null, A), M != null) && M.apply(null, A);
    }), this.setState({ prevVnode: ce({}, d), savedDirectives: _ }));
  } }, { key: "render", value: function() {
    var p = this.props;
    return p.vnode, p.children;
  } }]);
})();
function r6(c, p) {
  var d;
  return typeof c == "function" && (d = c.toString(), c.prototype !== void 0) && c.prototype.constructor === c && (d.slice(0, 5) == "class" || 2 <= Object.getOwnPropertyNames(c.prototype).length || !/^function\s+\(|^function\s+anonymous\(/.test(d) && (!(!p || !/^function\s+[A-Z]/.test(d)) || !!/\b\(this\b|\bthis[\.\[]\b/.test(d) && (!(p && !/classCallCheck\(this/.test(d)) || /^function\sdefault_\d+\s*\(/.test(d))));
}
function YE(c, p) {
  var d, _, w, E;
  return typeof ((w = c.type) == null ? void 0 : w.originReactComponent) != "function" || r6((w = c.type) == null ? void 0 : w.originReactComponent) ? ((w = c.ref) != null && w.k ? (d = (w = c.ref) == null ? void 0 : w.k, _ = (w = c.ref) == null ? void 0 : w.r) : d = (w = c.ref) == null ? void 0 : w.r, d && typeof d == "string" && (E = d, d = function(h) {
    var R;
    (R = c.ref) != null && (R = R.i) != null && R.refs && ((R = ce({}, c.ref.i.refs))[E] = h, c.ref.i.refs = R), _ ? _.value = h : c.ref.i.setupState && E in c.ref.i.setupState && (c.ref.i.setupState[E] = h), h && (h.__syncUpdateProps = function() {
      p.__top__ && (c.__extraData = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, p.__top__.__syncUpdateProps({}));
    });
  }, d = new Proxy(d, { get: function(h, R) {
    return h[R];
  }, set: function(h, R, k) {
    var x;
    return (x = c.ref) != null && (x = x.i) != null && x.refs && E in ((x = c.ref) == null || (x = x.i) == null ? void 0 : x.refs) && ((x = ce({}, c.ref.i.refs))[R] = k, c.ref.i.refs = x), k;
  } })), d) : null;
}
function l_(c, p) {
  return !p || p instanceof Array && p.length === 0 || (typeof p == "string" && (p = [p]), (c = ce({}, c)).props = ce({}, c.props), p.forEach(function(d) {
    c.props[d] = "";
  })), c;
}
var a6 = ["style", "class"];
function RE(c, p, d, _, w, E, h) {
  var R, k, x;
  return p === "all" || p instanceof Array || (p = p ? [p] : []), c.type === DE ? w.call(h, c.children, d, E) : typeof c.type == "string" && (p === "all" || -1 < p.indexOf(c.type)) ? (p = YE(c), x = (k = c.props || {}).style, R = k.class, k = ce(ce({}, Qi(k, a6)), {}, { style: Ly(x), className: Array.from(new Set(Oy(R))).join(" ") }, p ? { ref: p } : {}), (x = c.children || k.children) && ((x = -1 < ["string", "number"].indexOf(Xr(x)) ? [x] : Ny(x)).__top__ = h), WE(c, l_(Za.createElement(c.type, k, w.call(h, x, d, E)), c.scopeId))) : d([c], null, _);
}
function i6() {
  var c = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, p = 1 < arguments.length ? arguments[1] : void 0, d = 2 < arguments.length ? arguments[2] : void 0;
  return d.__syncUpdateForPureReactInVue && Object.keys(d.__syncUpdateForPureReactInVue).map(function(_) {
    var w;
    c[_] && typeof c[_] == "function" && p.__top__ && (w = c[_], c[_] = function() {
      for (var E = arguments.length, h = new Array(E), R = 0; R < E; R++) h[R] = arguments[R];
      p.__extraData = d.__syncUpdateForPureReactInVue[_].apply(this, h), p.__top__.__veaurySyncUpdateProps__({}), p.__top__.macroTaskUpdate = !0, w.apply(this, h), p.__top__ && Promise.resolve().then(function() {
        p.__extraData = null, p.__top__.__veauryMountReactComponent__(!0);
      });
    });
  }), c;
}
function kE(c, p, d) {
  return !((c = c instanceof Array && c.length === 1 ? c[0] : c) instanceof Array) && c.key == null && 1 < p.length && ((c = ce({}, c)).key = "_key_".concat(d)), c;
}
function GE(_) {
  var p = _.reactComponents, d = _.domTags, _ = _.division, w = _ === void 0 || _;
  return function E(h, R, k) {
    var x;
    return h && h.forEach ? (h.__top__ || (h.__top__ = this), x = [], h.forEach(function(M, A) {
      if (M && M.type !== VT) {
        if ((re = M.type) == null || !re.originReactComponent) return M.$$typeof || typeof M == "string" || typeof M == "number" ? void x.push(M) : bE(M) ? void (M.children.trim() !== "" && x.push(M.children.trim())) : void (M.type && (l_(re = kE(RE(M, d, R, w, E, k, h.__top__), h, A), M.scopeId), x.push(re)));
        var V, $, re = M.type.originReactComponent;
        l_(V = kE(V = (p = p === "all" || p instanceof Array ? p : [p]) === "all" || -1 < p.indexOf(re) ? (M.__top__ = h.__top__, V = t6(M, "_key_".concat(A), R, E, k), $ = YE(M, h), M.children && (M.children.__top__ = h.__top__), WE(M, Za.createElement(re, ce(ce(ce({}, i6(V, M, re)), M.__extraData || {}), $ ? { ref: $ } : {})))) : bE(M) ? M.text : RE(M, d, R, w, E, k), h, A), M.scopeId), x.push(V);
      }
    }), x.length === 1 ? x[0] : x) : h;
  };
}
var t_ = GE({ reactComponents: "all", domTags: "all" });
function o6(c, p) {
  return ZO(c, { combinedOption: ce({ pureTransformer: !0, defaultSlotsFormatter: t_, defaultPropsFormatter: function(d, _, w) {
    var E = {};
    return Object.keys(d).forEach(function(h) {
      var R = d[h];
      R && (R.vueFunction ? (E[h] = function() {
        for (var k = arguments.length, x = new Array(k), M = 0; M < k; M++) x[M] = arguments[M];
        return t_(R.vueFunction.apply(this, x), _, w);
      }, Object.defineProperty(E[h], "length", { get: function() {
        return R.vueFunction.length;
      } })) : R.vueSlot && (E[h] = t_(R.vueSlot, _, w)));
    }), Object.assign(d, E);
  } }, p) });
}
GE({ reactComponents: "all", domTags: "all" });
var l6 = ["ref", "children", "v-slots"];
function u6(k, p, d, _, w) {
  var k = k.props || {}, x = (k.ref, k.children), h = k["v-slots"], E = h === void 0 ? {} : h, h = Qi(k, l6), R = (x && (Xr(x) !== "object" || x instanceof Array || x.$$typeof ? E.default = x : E = x), null), k = (Object.keys(E || {}).forEach(function(A) {
    var V = E[A];
    (R = R || {})[A] = function() {
      if (typeof V == "function") {
        for (var $ = arguments.length, re = new Array($), ie = 0; ie < $; ie++) re[ie] = arguments[ie];
        V = V.apply(this, re);
      }
      return _(V, d, w);
    };
  }), {}), x = Ly(h.style), M = Array.from(new Set(Oy(h.className))).join(" ");
  return 0 < Object.keys(x).length && (k.style = x), M !== "" && (k.class = M), Object.assign(h, ce({}, k)), delete h.className, { props: h = a_(h), slots: R };
}
function QE(c) {
  var p = c.ref;
  if (p) return Xr(p) === "object" ? function(d) {
    c.ref.current = d;
  } : typeof p == "function" ? p : void 0;
}
var s6 = ["style", "class", "children"];
function TE(c, p, d, _, w, E) {
  var h, R, k, x;
  return p === "all" || p instanceof Array || (p = p ? [p] : []), c.type === Ue.Fragment ? w((h = c.props) == null ? void 0 : h.children, d) : typeof c.type == "string" && (p === "all" || -1 < p.indexOf(c.type)) ? (h = QE(c), x = (p = c.props || {}).style, k = p.class, R = p.children, p = Qi(p, s6), k = Array.from(new Set(Oy(k))).join(" "), x = Ly(x), p = ce(ce(ce(ce({}, p), Object.keys(x).length === 0 ? {} : { style: x }), k ? { className: k } : {}), h ? { ref: h } : {}), Object.keys(p).length === 0 && (p = null), (x = R) && ((x = -1 < ["string", "number"].indexOf(Xr(x)) ? [x] : x instanceof Array ? Ny(x) : ce({}, x)).__top__ = E), lu(c.type, p, w(x, d))) : d([c], null, _);
}
function KE(_) {
  var p = _.vueComponents, d = _.domTags, _ = _.division, w = _ === void 0 || _;
  return function E(h, R) {
    if (h == null) return h;
    h instanceof Array || (h = [h]);
    var k = [];
    return h.forEach(function(x, M) {
      if (((A = x.type) == null || !A.originVueComponent) && x.type !== o_) return x.__v_isVNode || typeof x == "string" || typeof x == "number" ? void k.push(x) : void (x.type && (A = TE(x, d, R, w, E, h.__top__), k.push(A)));
      var A = x.type.originVueComponent;
      if (x.type === o_) {
        if (!x.props.component) return void k.push(x.props.node);
        A = x.props.component, x = ce({}, x);
        var V = ce({}, x.props);
        delete V.component, x.props = V;
      }
      A = (p = p === "all" || p instanceof Array ? p : [p]) === "all" || -1 < p.indexOf(A) ? ((x = ce({}, x)).__top__ = h.__top__, M = (V = u6(x, "_key_".concat(M), R, E)).props, V = V.slots, QE(x), x.children && (x.children.__top__ = h.__top__), lu(A, ce({}, M), V)) : TE(x, d, R, w, E), k.push(A);
    }), (k = k.flat(1 / 0)).length === 1 ? k[0] : k;
  };
}
KE({ vueComponents: "all", domTags: "all" });
KE({ reactComponents: "all", domTags: "all" });
new My();
const c6 = /* @__PURE__ */ $T({
  __name: "CopilotApp",
  props: {
    token: {},
    dataSource: {},
    baseUrl: {},
    user_id: {},
    copilot_llm_endpoint: {},
    user_name: {}
  },
  setup(c) {
    const p = c, d = BT(() => typeof p.user_id == "string" ? Number(p.user_id) : p.user_id), _ = o6(SO);
    return (w, E) => (WT(), qT(YT(_), {
      token: c.token,
      dataSource: c.dataSource,
      baseUrl: c.baseUrl,
      user_id: d.value,
      copilot_llm_endpoint: c.copilot_llm_endpoint,
      user_name: c.user_name,
      style: { height: "100%", width: "100%" }
    }, null, 8, ["token", "dataSource", "baseUrl", "user_id", "copilot_llm_endpoint", "user_name"]));
  }
}), h6 = {
  install(c) {
    c.component("CopilotApp", c6);
  }
};
export {
  c6 as CopilotApp,
  h6 as default
};
